// ★★ A CHECK WHOSE FAILURE MODE IS "PASS" MUST BE TESTED BY MAKING IT FIRE
// (CLAUDE.md, 012). Running render.mjs and watching it proceed proves
// nothing — that is exactly what a broken guard looks like.
//
// It swaps src/audit/cues.ts for two SYNTHETIC takes and asserts both
// directions, then restores the real file byte-for-byte:
//   1. every `brief` line, verbatim  → must REFUSE, with all of them;
//   2. every `use` line, verbatim    → must PASS with 0 hits, which is what
//      proves the patterns are not simply matching everything.
// Nothing is rendered either way (`--check` stops before bundling).
//
// ⚠ It does NOT assert anything about the real cues — on 020 they are still
//   PROVISIONAL (generated from the corrected script, no take recorded yet),
//   so they legitimately hit nothing. Once a take is wired they may hit, and
//   that is the guard doing its job, not a test failure.
// ⚠⚠ IT SWAPS src/audit/cues.ts ON DISK. Never run it while a stills sweep, a
//   render or a geometry audit is reading the same file — a bundle taken
//   mid-swap would be built from the synthetic take.
//
// ⚠⚠ DIRECTION 2 IS THE HALF THAT CATCHES 015's FAILURE. Every pattern
//   matching its own `brief` line is necessary and NOT sufficient: the brief
//   line is the one string guaranteed not to be what the take says, so a
//   pattern spelled the brief's way ("at twenty-two") passes the self-proof
//   and then sails past a take that says "at 22". Only feeding it the
//   CORRECTED lines and demanding 0 hits proves the patterns are neither
//   over-broad nor accidentally matching everything.
//
// Usage: node scratchpad/guardtest.mjs
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import { whisperForm } from "./spoken.mjs";

const CUES = "src/audit/cues.ts";
const FIXFILE = "src/audit/script_fixes.json";
// ★ CLAUDE.md (Aperture V4): a restore in `finally` does not survive a KILL. The real files are stashed ON DISK before
//   anything is swapped, and a stash left by a killed run is restored first. render.mjs refuses while a stash exists.
const STASH = "scratchpad/vo/.guardstash";
if (fs.existsSync(STASH)) {
  fs.copyFileSync(`${STASH}/cues.ts`, CUES);
  fs.copyFileSync(`${STASH}/script_fixes.json`, FIXFILE);
  fs.rmSync(STASH, { recursive: true, force: true });
  console.log("⚠ a killed run's stash was found: the real cues.ts and script_fixes.json were restored from it first");
}
fs.mkdirSync(STASH, { recursive: true });
fs.copyFileSync(CUES, `${STASH}/cues.ts`);
fs.copyFileSync(FIXFILE, `${STASH}/script_fixes.json`);
const realFixes = fs.readFileSync(FIXFILE, "utf8");
const FIXES = JSON.parse(realFixes).fixes;
const real = fs.readFileSync(CUES, "utf8");

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const synth = (key, map = (s) => s) =>
  "// SYNTHETIC — guardtest.mjs only. Never committed.\n" +
  'import type { SceneId } from "./data";\n\n' +
  "export type Cue = { scene: SceneId; a: number; b: number; text: string };\n\n" +
  "export const VO_START = 0.0;\n\n" +
  "export const CUES: Cue[] = [\n" +
  FIXES.map((fx, i) => `  { scene: "hook", a: ${i}.000, b: ${i}.900, text: "${esc(map(fx[key]))}" },`).join("\n") +
  "\n];\n";

const run = () => {
  const r = spawnSync(process.execPath, ["scratchpad/render.mjs", "--check"], { encoding: "utf8" });
  return { status: r.status, out: (r.stdout || "") + (r.stderr || "") };
};

let ok = true;
const say = (pass, msg, detail) => { console.log((pass ? "✓ " : "✗ ") + msg); if (!pass) { ok = false; if (detail) console.log(detail); } };

// ★ 023: A FILM WITH NO BLOCKING LINES. The four directions below need patterns; with none, what must be proven is
//   that the EMPTY list is trusted only because it is DECLARED — remove the declaration and the guard must refuse.
if (FIXES.length === 0) {
  try {
    const declared = run();
    say(declared.status === 0 && /0 blocking lines — declared/.test(declared.out),
      "the guard PASSES a film whose empty fix list is declared, with its reason", declared.out.slice(0, 600));
    const stripped = JSON.parse(realFixes);
    delete stripped.noBlockingLines;
    fs.writeFileSync(FIXFILE, JSON.stringify(stripped, null, 2));
    const undeclared = run();
    say(undeclared.status === 1 && /no fixes and no `noBlockingLines` declaration/.test(undeclared.out),
      "and it REFUSES the same empty list once the declaration is removed (it fails CLOSED)", undeclared.out.slice(0, 600));
    const short = JSON.parse(realFixes);
    short.noBlockingLines = "none";
    fs.writeFileSync(FIXFILE, JSON.stringify(short, null, 2));
    const lazy = run();
    say(lazy.status === 1, "and a declaration with no real reason (\"none\") is refused too", lazy.out.slice(0, 400));
  } finally {
    fs.writeFileSync(FIXFILE, realFixes);
    fs.writeFileSync(CUES, real);
    say(fs.readFileSync(FIXFILE, "utf8") === realFixes, "the real script_fixes.json is restored unchanged");
    say(fs.readFileSync(CUES, "utf8") === real, "the real cues are restored unchanged");
    if (fs.readFileSync(CUES, "utf8") === real && fs.readFileSync(FIXFILE, "utf8") === realFixes) fs.rmSync(STASH, { recursive: true, force: true });
  }
  process.exit(ok ? 0 : 1);
}

try {
  // 1. the brief's own lines — it must fire on every one
  fs.writeFileSync(CUES, synth("brief"));
  const bad = run();
  say(bad.status === 1 && /REFUSING TO RENDER — \d+ caption/.test(bad.out),
    "the guard REFUSES a take read from the brief", bad.out.slice(0, 600));
  say(new RegExp(`REFUSING TO RENDER — ${FIXES.length} caption`).test(bad.out),
    `it catches all ${FIXES.length}, not a subset`,
    (bad.out.match(/REFUSING TO RENDER — \d+ caption[^\n]*/) || [""])[0]);

  // 2. ★★ THE SPOKEN form of the brief's lines — digits, no ellipses, dropped
  //    apostrophes. THIS IS THE DIRECTION 015 DID NOT HAVE, and the one that
  //    catches a pattern written the way the document spells things.
  fs.writeFileSync(CUES, synth("briefSpoken"));
  const spoken = run();
  say(spoken.status === 1 && new RegExp(`REFUSING TO RENDER — ${FIXES.length} caption`).test(spoken.out),
    `it REFUSES a take that SPEAKS those lines (digits, no ellipses) — all ${FIXES.length}`,
    spoken.out.slice(0, 900));

  // 2b. ★★★ THE WHISPER form — "$3 billion" as whisper writes it, "3 billion
  //     dollars". 018's take came back that way and a "\$3" pattern missed it
  //     while passing direction 2. (spoken.mjs, shared with render.mjs.)
  fs.writeFileSync(CUES, synth("briefSpoken", whisperForm));
  const whisper = run();
  say(whisper.status === 1 && new RegExp(`REFUSING TO RENDER — ${FIXES.length} caption`).test(whisper.out),
    `it REFUSES the same lines as WHISPER writes them ("3 billion dollars") — all ${FIXES.length}`,
    whisper.out.slice(0, 900));

  // 3. the corrected lines — it must NOT fire on any of them
  fs.writeFileSync(CUES, synth("use"));
  const good = run();
  say(good.status === 0 && /0 hit\(s\)/.test(good.out),
    "and it PASSES a take of every corrected `use` line (0 hits)", good.out.slice(0, 600));
  // 4. ★★★ THE META-CHECK: the self-proof must be seen REFUSING a pattern
  //    written the document's way. 016's draft had /obligation to keep
  //    paying\.\.\. ?expired/ — nobody says "dot dot dot". 021's equivalent is
  //    the bio quote spelled the brief's way: /one hundred million plus
  //    holding company\. big band/ matches the document and can never fire on
  //    a take that says "100 million plus". Without this case the whole file
  //    above passes while the film is unguarded.
  //    ⚠ The index is FOUND BY ITS `at`, not hard-coded: a list reordered
  //    later must not quietly sabotage a different pattern.
  fs.writeFileSync(CUES, synth("briefSpoken"));
  const sabotaged = JSON.parse(realFixes);
  const si = sabotaged.fixes.findIndex((fx) => fx.at === "hook c1");   // 037: the hook line ("every headline")
  if (si < 0) throw new Error("guardtest: the 'hook c1' fix is gone — pick another sabotage");
  // 025: the one blocking line carries no number, so its spoken form IS its written form and no real pattern can reach
  // the 015 branch. The sabotage breaks the WHOLE pattern instead (CLAUDE.md, Aperture V3: an alternation broken in one
  // branch still matches) — a pattern that cannot match its own line must make the guard refuse ITSELF.
  sabotaged.fixes[si].bad = `(?:${sabotaged.fixes[si].bad})zzz`;
  fs.writeFileSync(FIXFILE, JSON.stringify(sabotaged, null, 2));
  const meta = run();
  fs.writeFileSync(FIXFILE, realFixes);
  say(meta.status === 1 && /the script-fix guard is broken/.test(meta.out) && /does NOT match its own brief line/i.test(meta.out),
    "the guard REFUSES ITSELF when a pattern cannot match its own line",
    meta.out.slice(0, 700));
} finally {
  fs.writeFileSync(CUES, real);
  fs.writeFileSync(FIXFILE, realFixes);
  say(fs.readFileSync(CUES, "utf8") === real, "the real cues are restored unchanged");
  say(fs.readFileSync(FIXFILE, "utf8") === realFixes, "the real script_fixes.json is restored unchanged");
  if (fs.readFileSync(CUES, "utf8") === real && fs.readFileSync(FIXFILE, "utf8") === realFixes) fs.rmSync(STASH, { recursive: true, force: true });
}

// what the REAL take does, reported not asserted
const live = run();
const n = (live.out.match(/REFUSING TO RENDER — (\d+) caption/) || [])[1];
console.log(n ? `\nthe recorded take hits ${n} caption(s) — the master is blocked, as intended`
             : "\nthe recorded take hits nothing — the master is clear");
process.exit(ok ? 0 : 1);
