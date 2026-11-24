// ★ 028 take: every action is keyed to a WORD of the take by a regex — word(S, i, /re/) in src/r45/sets/*.tsx. A regex
// written for the provisional tokens ("Coty", "4") can miss the take's ("Kody", "$4"); word() then throws at load. This
// tests every anchor against the wired cues.ts tokens BEFORE a bundle, and lists each miss with the sentence's tokens.
// It proves itself: it refuses unless it parsed as many anchors as there are `word(` / `wordEnd(` calls in the sets
// (a parse that skips the ones with escapes would report a perfect pass — the first version, written through a shell
// heredoc that ate its backslashes, did exactly that), and unless a known-bad canary anchor misses.
//   node scratchpad/wordcheck.mjs
import fs from "node:fs";

const cues = fs.readFileSync("src/audit/cues.ts", "utf8");
const rows = [...cues.matchAll(/scene: "([a-z]+)"[^\n]*\n\s*w: (\[.*\]) \},/g)].map((m) => ({ scene: m[1], w: JSON.parse(m[2]) }));
const declared = Number((cues.match(/^\/\/\s*(\d+)\s+cues\b/m) || [])[1]);
if (!rows.length || rows.length !== declared) { console.error(`REFUSING: parsed ${rows.length} cues with words, cues.ts declares ${declared}`); process.exit(1); }
const by = {};
for (const r of rows) (by[r.scene] ??= []).push(r.w);
const hits = (S, i, re) => by[S]?.[i]?.find(([t]) => re.test(t));

// the canary: a regex no token of the hook's first sentence can match
if (hits("hook", 0, /^zzzcanary$/)) { console.error("REFUSING: the canary anchor matched"); process.exit(1); }

const ANCHOR = /\bword(?:End)?\(\s*S\s*,\s*(\d+)\s*,\s*\/((?:[^/\\\n]|\\.)+)\/([a-z]*)\s*\)/g;
let n = 0, calls = 0, bad = 0;
for (const f of fs.readdirSync("src/r45/sets").filter((x) => x.endsWith(".tsx"))) {
  const src = fs.readFileSync("src/r45/sets/" + f, "utf8").replace(/\/\/[^\n]*/g, (c) => c.replace(/word/g, "w_rd"));
  calls += (src.match(/\bword(?:End)?\(\s*S\s*,/g) || []).length;
  const S = (src.match(/const S = "([a-z]+)"/) || [])[1];
  for (const m of src.matchAll(ANCHOR)) {
    n++;
    const re = new RegExp(m[2], m[3]);
    if (!hits(S, +m[1], re)) { bad++; console.log(`MISS ${f} ${S}[${m[1]}] /${m[2]}/${m[3]}  tokens: ${by[S]?.[+m[1]]?.map((x) => x[0]).join(" ")}`); }
  }
}
if (n !== calls) { console.error(`REFUSING: parsed ${n} anchors of ${calls} word() calls in the sets`); process.exit(1); }
console.log(`${n} word() anchors (all ${calls} parsed) · canary missed as it must · ${bad} miss`);
process.exit(bad ? 1 : 0);
