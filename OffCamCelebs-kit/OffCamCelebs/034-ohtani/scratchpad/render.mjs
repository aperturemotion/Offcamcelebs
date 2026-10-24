// Render InfluencerAudit034 (HyperFrames) → renders/two_million_a_year_034_hf.mp4
//
// ⚠⚠⚠ THE SCRIPT-FIX TRIPWIRE, ported from 029's Remotion render.mjs (029 HF had no guard in front of its render).
// Six of the brief's lines failed verification (031) (src/audit/script_fixes.json; VO_SCRIPT.txt has the trail). The captions
// are regenerated FROM THE TAKE, so a take read from the brief puts the wrong lines back on screen and in the audio. This
// guard refuses the master MP4 while any caption still matches a known-bad line.
//
// ★ FAIL CLOSED, AND PROVE IT EVERY RUN (CLAUDE.md 012/013/015/016/018):
//   · the list is read with JSON.parse, never a regex over source;
//   · every `bad` pattern must match its own `brief` line, its `briefSpoken` form and the whisper form of that, and must NOT
//     match its own corrected line, or the guard is broken: a refusal, not a pass;
//   · the caption parse must find exactly as many caption texts as there are cues.
// ★ `--check` runs every guard and stops before rendering (how guardtest.mjs makes it fire without an MP4).
// ⚠ The override (--allow-vo-conflicts) renders anyway and NEVER writes the master filename: it writes …_REVIEW.mp4.
// ⚠ CLAUDE.md: never render unless the user asks for a render in their own words.
import path from "node:path";
import fs from "node:fs";
import { spawnSync } from "node:child_process";
import { whisperForm } from "./vo/spoken.mjs";

const OUT = "renders/two_million_a_year_034_hf.mp4";
const refuse = (lines) => {
  console.error(["", ...lines, "", "The Studio still works; only the MP4 is blocked.", ""].join("\n"));
  process.exit(1);
};

// ── ★ (CLAUDE.md, Bankers V10, 2026-10-13) arguments fail CLOSED: an unknown flag is a refusal, never a render ──
{
  const KNOWN = new Set(["--check", "--allow-vo-conflicts"]);
  const unknown = process.argv.slice(2).filter((a) => !KNOWN.has(a));
  if (unknown.length) refuse([`REFUSING — unknown argument(s): ${unknown.join(" ")}. This script takes only ${[...KNOWN].join(", ")}.`]);
}

// ── a guard test mid-swap (or killed) leaves synthetic captions live: never render those ──
if (fs.existsSync("scratchpad/vo/.guardstash") && !process.argv.includes("--check"))
  refuse(["REFUSING TO RENDER — scratchpad/vo/.guardstash exists: a guardtest.mjs run is in progress or was killed.",
    "Run `node scratchpad/vo/guardtest.mjs` once more: it restores the real files from the stash first."]);
if (/^\/\/ SYNTHETIC/.test(fs.readFileSync(path.resolve("src/audit/cues.ts"), "utf8")) && !process.argv.includes("--check"))
  refuse(["REFUSING TO RENDER — src/audit/cues.ts is a guardtest SYNTHETIC take, not the real one."]);

// ── the list ───────────────────────────────────────────────────────────────
let FIXES, NONE;
try {
  const file = JSON.parse(fs.readFileSync(path.resolve("src/audit/script_fixes.json"), "utf8"));
  FIXES = file.fixes; NONE = file.noBlockingLines;
} catch (e) {
  refuse([`REFUSING TO RENDER — cannot read src/audit/script_fixes.json: ${e.message}`]);
}
if (!Array.isArray(FIXES)) refuse(["REFUSING TO RENDER — script_fixes.json has no fixes array. Fix the file, not the guard."]);
if (FIXES.length === 0 && !(typeof NONE === "string" && NONE.trim().length >= 40)) {
  refuse(["REFUSING TO RENDER — script_fixes.json has no fixes and no `noBlockingLines` declaration (with its reason).",
    "An empty list is only trusted when the file states why it is empty."]);
}

// ── the guard proves itself, on every spelling a take can produce ──────────
const broken = [];
const PATTERNS = FIXES.map((fx) => {
  let re;
  try { re = new RegExp(fx.bad, "i"); } catch (e) { broken.push(`${fx.at}: invalid pattern ${fx.bad} (${e.message})`); return null; }
  if (typeof fx.briefSpoken !== "string" || !fx.briefSpoken.trim())
    broken.push(`${fx.at}: no \`briefSpoken\` — the pattern is untested against what a take actually says`);
  if (!re.test(fx.brief))
    broken.push(`${fx.at}: pattern /${fx.bad}/i does NOT match its own brief line — it cannot catch it`);
  else if (typeof fx.briefSpoken === "string" && !re.test(fx.briefSpoken))
    broken.push(`${fx.at}: pattern /${fx.bad}/i matches the BRIEF but not the SPOKEN form "${fx.briefSpoken}" (015)`);
  else if (typeof fx.briefSpoken === "string" && !re.test(whisperForm(fx.briefSpoken)))
    broken.push(`${fx.at}: pattern /${fx.bad}/i misses the WHISPER form "${whisperForm(fx.briefSpoken)}" (018)`);
  if (typeof fx.use === "string" && re.test(fx.use))
    broken.push(`${fx.at}: pattern /${fx.bad}/i also matches its own CORRECTED line — it would block the fix`);
  return { ...fx, re };
});
if (broken.length) refuse(["REFUSING TO RENDER — the script-fix guard is broken:", ...broken.map((b) => "  " + b)]);

// ── the captions actually on screen ────────────────────────────────────────
const cuesSrc = fs.readFileSync(path.resolve("src/audit/cues.ts"), "utf8");
const nCues = (cuesSrc.match(/\{ scene: "/g) || []).length;
const texts = [...cuesSrc.matchAll(/text: ("(?:[^"\\]|\\.)*")/g)].map((m) => JSON.parse(m[1]));
if (nCues === 0 || texts.length !== nCues) {
  refuse([`REFUSING TO RENDER — parsed ${texts.length} caption texts from ${nCues} cues in src/audit/cues.ts.`,
    "A caption the guard cannot read is a caption it cannot check."]);
}
const provisional = /PROVISIONAL/.test(cuesSrc.slice(0, 400));
const dataSrc = fs.readFileSync(path.resolve("src/audit/data.ts"), "utf8");
const hasVo = (dataSrc.match(/export const HAS_VO = (true|false);/) || [])[1];
if (hasVo === undefined) refuse(["REFUSING TO RENDER — cannot read HAS_VO from src/audit/data.ts."]);

// ── ★ 032: the brief's GUARDRAILS block too (never "he said", never "owed", nothing beyond the whiskey money). Each proves
//   itself on its own example first: a guardrail that cannot fire on the line it was written for is a broken guard ──
let RAILS = [];
try { RAILS = JSON.parse(fs.readFileSync(path.resolve("src/audit/script_fixes.json"), "utf8")).guardrails ?? []; } catch { RAILS = null; }
if (!Array.isArray(RAILS)) refuse(["REFUSING TO RENDER — script_fixes.json's guardrails cannot be read."]);
const railBroken = [], railHits = [];
for (const g of RAILS) {
  let re;
  try { re = new RegExp(g.bad, "i"); } catch (e) { railBroken.push(`guardrail /${g.bad}/: invalid (${e.message})`); continue; }
  if (typeof g.example !== "string" || !re.test(g.example)) railBroken.push(`guardrail /${g.bad}/i does not match its own example — it cannot fire`);
  texts.forEach((t, i) => { if (re.test(t)) railHits.push(`  cue ${i}: "${t}" — ${g.why}`); });
}
if (railBroken.length) refuse(["REFUSING TO RENDER — a guardrail is broken:", ...railBroken.map((b) => "  " + b)]);
if (railHits.length) refuse(["REFUSING TO RENDER — a caption crosses the brief's guardrails:", ...railHits]);
console.log(`guardrails: ${RAILS.length}, each proven on its example; 0 captions cross them.`);

const hits = [];
for (const fx of PATTERNS) texts.forEach((t, i) => { if (fx.re.test(t)) hits.push({ fx, i, t }); });
const ALLOW = process.argv.includes("--allow-vo-conflicts");
const REVIEW = hits.length > 0 && ALLOW;
const report = hits.flatMap(({ fx, i, t }) => [`  cue ${i} (${fx.at}): "${t}"`, `    why : ${fx.why}`, `    use : ${fx.use}`, ""]);
const nCaps = new Set(hits.map((h) => h.i)).size;
if (hits.length && !ALLOW) {
  refuse([`REFUSING TO RENDER — ${nCaps} caption(s) still say a line that failed verification:`, "", ...report,
    "Re-record those lines (script_fixes.json has the corrected wording), re-run the",
    "VO pipeline, then render. Or pass --allow-vo-conflicts for a REVIEW copy."]);
}
if (REVIEW) console.warn(["", `⚠ RENDERING WITH ${hits.length} UNVERIFIED LINE(S) — REVIEW COPY ONLY.`, "", ...report, "⚠ DO NOT POST THIS FILE.", ""].join("\n"));
console.log(`script-fix guard: ${PATTERNS.length} patterns, each proven live against its brief, spoken and whisper lines; ${texts.length} captions checked; ${hits.length} hit(s).`);
if (hasVo !== "true" || provisional) console.warn("⚠ HAS_VO is off / cues are PROVISIONAL — a preview, not a deliverable.");
if (process.argv.includes("--check")) {
  console.log(`--check: guards passed${REVIEW ? " (REVIEW mode)" : ""}; not rendering.`);
  process.exit(0);
}

// ── the render (NEW_VIDEO.md's command; FFmpeg is not on PATH, CLAUDE.md Environment notes) ──
const out = REVIEW ? OUT.replace(/\.mp4$/, "_REVIEW.mp4") : OUT;
const FF = process.env.FFMPEG_DIR;
fs.mkdirSync("renders", { recursive: true });
const r = spawnSync("npx", ["--yes", "hyperframes@0.8.143", "render", ".", "-o", out, "--quality", "delivery", "--workers", "4",
  "--no-browser-gpu", "--protocol-timeout", "1800000", "--player-ready-timeout", "600000", "--browser-timeout", "600"],
  { stdio: "inherit", shell: true, env: { ...process.env, PATH: FF ? `${FF}${process.platform === "win32" ? ";" : ":"}${process.env.PATH}` : process.env.PATH } });
process.exit(r.status ?? 1);
