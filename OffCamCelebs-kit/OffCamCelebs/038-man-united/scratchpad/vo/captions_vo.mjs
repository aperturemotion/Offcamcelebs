// InfluencerAudit038 — captions generated FROM THE TRANSCRIPT, never from the written script (CLAUDE.md). The take always
// rephrases, and it speaks DIGITS where the script spelled numbers out.
//
// ★ THE PLAN IS BY WORD INDEX, not by text search. A cue is [first, last] into scratchpad/fw_words.json, so every cue's `a`
//   IS a real word start and its `b` IS a real word end. One cue = one sentence.
// The checks, all of which refuse rather than warn:
//   · every transcribed word is in EXACTLY ONE cue, contiguous and complete; no cue starts before the previous one ends;
//   · the place (SET) cue COUNTS match what the film indexes (EXPECT = data.ts SCENE_CUES);
//   · a beat is the whole sentence (Caption.tsx chunks it into 2–4-word phrases: rule P5), so there are no tier checks.
//
//
// Usage: node scratchpad/captions_vo.mjs   → writes src/audit/cues.ts and src/r45/blocks.ts
import fs from "node:fs";

const PLAN = [
  // ★ WIRED TO THE TAKE (2026-11-20): 038, ElevenLabs "Russ" eleven_v4, take A of two (B drops the s of "borrowings"),
  //   vo_trim TEMPO 1.04 → 57.2 s, cardpause.py (0.55 s after "explain." and "part.") → 58.3 s; 149 tokens after mergetok.
  ["hook",0,8,"The Glazers bought Manchester United for £790 million."],
  ["hook",9,14,"More than £500 million was borrowed."],
  ["hook",15,27,"And within a year, most of that debt was on United's own books."],
  ["explain",28,30,"Let me explain."],
  ["sides",31,40,"The American family took over in 2005, mostly with loans."],
  ["bonds",41,58,"Nearly five years later, United itself sold £500 million of bonds to pay off the bank loans."],
  ["money",59,70,"So ticket, shirt and TV money went on paying for the takeover."],
  ["money",71,82,"ESPN says that by 2018, the cost had passed £1 billion."],
  ["worst",83,87,"And here's the worst part."],
  ["board",88,97,"21 years later, United's borrowings stand at about £690 million."],
  ["board",98,106,"Last season, net finance costs alone were £69.6 million."],
  ["board",107,110,"About £190,000 a day."],
  ["fair",111,125,"To be fair, under the Glazers, United won five league titles and the Champions League."],
  ["verdict",126,131,"But £790 million was the price."],
  ["verdict",132,139,"United has been paying the bill ever since."],
  ["verdict",140,142,"Our rating: inflated."],
  ["verdict",143,148,"Send us who to audit next."],
];
// ⚠ what the film indexes, cue(scene, 0…n−1). Mirrored in data.ts's SCENE_CUES, which throws at load if they disagree.
const EXPECT = { hook: 3, explain: 1, sides: 1, bonds: 1, money: 2, worst: 1, board: 3, fair: 1, verdict: 4 };

const fail = (msg) => { console.error("REFUSING: " + msg); process.exit(1); };
if (!fs.existsSync("scratchpad/fw_words.json")) fail("scratchpad/fw_words.json does not exist — run fw.py first.");
const FW = JSON.parse(fs.readFileSync("scratchpad/fw_words.json", "utf8"));
const W = FW.words;
// ★ no take yet: the words are provisional.mjs's timing of the SCRIPT. Both files say so at the top (render.mjs reads it).
const PROV = FW.provisional === true;
if (PROV) console.warn("⚠ PROVISIONAL: fw_words.json is the script's provisional timing, not a take");

// ── every word in exactly one cue, contiguous and complete ────────────────
const seen = new Array(W.length).fill(0);
let prevEnd = -1;
for (const [scene, i0, i1, text] of PLAN) {
  if (!(i0 >= 0 && i1 < W.length && i0 <= i1)) fail(`${scene} "${text.slice(0, 30)}…" has a bad range ${i0}..${i1}`);
  if (i0 !== prevEnd + 1) fail(`gap/overlap in the plan at word ${i0} (previous cue ended at ${prevEnd})`);
  for (let i = i0; i <= i1; i++) seen[i]++;
  prevEnd = i1;
}
if (prevEnd !== W.length - 1) fail(`the plan ends at word ${prevEnd}; the transcript has ${W.length} words`);

// ── the silence snap + the measured onsets (CLAUDE.md VO pipeline steps 4 and 6) ─────────────────────
if (!fs.existsSync("scratchpad/sil.txt")) fail("scratchpad/sil.txt is missing — run python scratchpad/silmap.py.");
const SIL = fs.readFileSync("scratchpad/sil.txt", "utf8").trim().split("\n").map((l) => l.split(" ").map(Number));
if (!fs.existsSync("scratchpad/onsets.json")) fail("scratchpad/onsets.json is missing — run python scratchpad/onsets.py.");
if (fs.statSync("scratchpad/onsets.json").mtimeMs < fs.statSync("scratchpad/fw_words.json").mtimeMs)
  fail("scratchpad/onsets.json is older than fw_words.json — re-run python scratchpad/onsets.py.");
const ONSET = JSON.parse(fs.readFileSync("scratchpad/onsets.json", "utf8"));
const snapped = [];
const startOf = (i) => {
  const { a, b } = W[i];
  if (ONSET[i] !== undefined) { snapped.push(`"${W[i].t}" ${a.toFixed(2)} → ${ONSET[i].toFixed(2)} (onset)`); return ONSET[i]; }
  let s = a;
  // ★ (032) only a pause that opens in the FIRST 40% of the word's claimed span is the breath whisper hid the word's start
  //   behind. One that opens later is INSIDE the word: "$180" (0.84 s, "one hundred · eighty") held a 90-ms stop at 74% of
  //   its span, and the snap moved its caption 0.7 s late, onto "eighty".
  for (const [s0, s1] of SIL) if (s0 < b && s1 > a && s1 < b && s0 - a < 0.4 * (b - a)) s = Math.max(s, s1);
  if (s !== a) snapped.push(`"${W[i].t}" ${a.toFixed(2)} → ${s.toFixed(2)}`);
  return s;
};

const CUES = PLAN.map(([scene, i0, i1, text]) => ({ scene, i0, i1, a: startOf(i0), b: W[i1].b, text }));
// ★ (037) a MEASURED onset outranks whisper's word END: where the next sentence's first word is heard (onsets.py) before
//   whisper says the last word ended, the earlier sentence ends at that onset (whisper stretched "13.8." 0.18 s into the
//   pause). Only a small overlap is healed; a larger one still refuses below.
for (let i = 1; i < CUES.length; i++)
  if (CUES[i].a < CUES[i - 1].b && CUES[i - 1].b - CUES[i].a < 0.3 && ONSET[CUES[i].i0] !== undefined) CUES[i - 1].b = CUES[i].a;
for (let i = 1; i < CUES.length; i++)
  if (CUES[i].a < CUES[i - 1].b - 1e-6) fail(`cue ${i} starts at ${CUES[i].a} before cue ${i - 1} ends at ${CUES[i - 1].b}`);
const counts = {};
for (const c of CUES) counts[c.scene] = (counts[c.scene] ?? 0) + 1;
for (const [k, v] of Object.entries(EXPECT)) if (counts[k] !== v) fail(`scene "${k}" has ${counts[k] ?? 0} cues; the film indexes ${v}`);
for (const k of Object.keys(counts)) if (!(k in EXPECT)) fail(`unknown scene "${k}"`);

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
fs.writeFileSync("src/audit/cues.ts",
  (PROV ? "// ⚠ PROVISIONAL: GENERATED BY scratchpad/captions_vo.mjs FROM THE SCRIPT'S PROVISIONAL TIMING (no take yet).\n"
    : "// GENERATED BY scratchpad/captions_vo.mjs FROM THE REAL TAKE'S TRANSCRIPT.\n") +
  "// ⚠ Do not hand-edit — re-run the script. Every `a` is a real word start and every `b` a real word end, asserted\n" +
  "//   against scratchpad/fw_words.json on each run, and every transcribed word sits in exactly one cue.\n" +
  "//\n" +
  `// ${CUES.length} cues · ${W.length} words · speech ends ${CUES[CUES.length - 1].b.toFixed(2)} s.\n\n` +
  'import type { SceneId } from "./data";\n\n' +
  "/** `w`: the TRANSCRIPT's own tokens and their (snapped) start times — what word() keys an action to */\n" +
  "export type Cue = { scene: SceneId; a: number; b: number; text: string; w?: readonly (readonly [string, number])[] };\n\n" +
  "export const VO_START = 0.0;\n\n" +
  "export const CUES: Cue[] = [\n" +
  CUES.map((c) => `  { scene: "${c.scene}", a: ${c.a.toFixed(3)}, b: ${c.b.toFixed(3)}, text: "${esc(c.text)}",\n` +
    `    w: [${Array.from({ length: c.i1 - c.i0 + 1 }, (_, k) => c.i0 + k).map((i) => `[${JSON.stringify(W[i].t)}, ${(i === c.i0 ? c.a : startOf(i)).toFixed(3)}]`).join(", ")}] },`).join("\n") +
  "\n];\n");

// ═══════════════════════════════════════════════════════════════════════════
// ★★★ RULE 45.4 — THE CAPTION BEATS (src/r45/blocks.ts). A beat is a run of the take's tokens [i0, i1] shown as 1–2
//   lines; `**…**` marks the ExtraBold key words, everything else is Light Italic. Each DISPLAY word is timed from the
//   token it stands for, aligned by letters: a display word may be two tokens ("self | -made"), and two display words
//   may be one token ("Lipkits" = "Lip kits": both take its start). A spoken "dollars" after a "$" figure is absorbed.
//   `objWords`: the beat's BOLD words are drawn by the scene (the amber INFLATED), not by the caption layer.
// ═══════════════════════════════════════════════════════════════════════════
// ★ 037 (the MoneyDecoded look, rule P5): the caption is ONE SMALL PHRASE at a time, chunked by Caption.tsx from each
//   sentence's words (2–4 words, breaking at punctuation). So a beat is simply the whole sentence on one line; no tiers.
const BLOCKS = PLAN.map((p) => [[p[3]]]);
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
// a token whisper mishears, mapped BY TOKEN INDEX to the word it stands for (none yet: fill from the real take)
// ★ 038 take A: whisper heard "borrowings" as "borrowing" (small.en on the raw take hears the s)
const MIS_AT = { 92: "borrowings" };
const tok = (k) => MIS_AT[k] ?? norm(W[k].t);
const plainLen = (s) => s.replace(/\*\*/g, "").length;
const boldLen = (s) => (s.match(/\*\*([^*]+)\*\*/g) ?? []).reduce((n, m) => n + m.replace(/\*\*/g, "").replace(/[^A-Za-z0-9$ ]/g, "").trim().length, 0);
const blocks = [];
{
  let prev = -1;
  const owner = (i) => CUES.findIndex((c) => i >= c.i0 && i <= c.i1);
  for (const entry of BLOCKS) {
    // ★ (2026-10-12, 031) a beat may be written WITHOUT indices, as [lines, opts]: it starts at the next token and runs to
    //   the last token its display words consume (the same matcher below), so a re-wired take needs no re-indexing
    const auto = typeof entry[0] !== "number";
    const lines = auto ? entry[0] : entry[2], opts = (auto ? entry[1] : entry[3]) ?? {};
    const i0 = auto ? prev + 1 : entry[0];
    let i1 = auto ? (CUES.find((c) => i0 >= c.i0 && i0 <= c.i1)?.i1 ?? W.length - 1) : entry[1];
    if (i0 !== prev + 1) fail(`beat at token ${i0}: gap or overlap (previous beat ended at ${prev})`);
    if (i1 < i0) fail(`beat ${i0}..${i1} is empty`);
    if (owner(i0) !== owner(i1)) fail(`beat ${i0}..${i1} crosses a sentence`);
    if (lines.length > 2) fail(`beat ${i0}..${i1} has ${lines.length} lines (max 2)`);
    const words = lines.map((l) => {
      const out = [];
      let bold = false;
      for (const part of l.split(/(\*\*)/)) {
        if (part === "**") { bold = !bold; continue; }
        const glued = part.length > 0 && !/^\s/.test(part) && out.length > 0;
        const ts = part.split(/\s+/).filter(Boolean);
        if (glued && ts.length && /^[^A-Za-z0-9$"“]+$/.test(ts[0])) out[out.length - 1].t += ts.shift();
        for (const t of ts) out.push({ t, bold });
      }
      return out;
    });
    const flat = words.flat();
    let k = i0, dollarOpen = false;
    for (let j = 0; j < flat.length; j++) {
      const d = norm(flat[j].t);
      if (dollarOpen && k <= i1 && /^(dollars?|pounds?)$/.test(tok(k)) && d !== tok(k)) { k += 1; dollarOpen = false; }
      if (k > i1) fail(`beat ${i0}..${i1}: display word "${flat[j].t}" has no token left`);
      flat[j].a = startOf(k);
      if (/^[$£]/.test(flat[j].t)) dollarOpen = true;   // ★ 038: a spoken "pounds" after a "£" figure is absorbed too
      if (tok(k) === d) k += 1;
      else if (k + 1 <= i1 && tok(k) + tok(k + 1) === d) k += 2;
      // two display words for ONE token ("Lip kits" = "Lipkits"): both take its start; it is consumed by the second
      else if (j + 1 < flat.length && d + norm(flat[j + 1].t) === tok(k)) { flat[j + 1].a = startOf(k); j += 1; k += 1; }
      else fail(`beat ${i0}..${i1}: display word "${flat[j].t}" does not match token ${k} "${W[k].t}"`);
    }
    if (auto) {
      // a spoken "dollars" right after the beat's last "$" figure belongs to it
      if (dollarOpen && k <= i1 && /^(dollars?|pounds?)$/.test(tok(k))) k += 1;
      i1 = k - 1;
    }
    if (k <= i1) fail(`beat ${i0}..${i1} "${lines.join(" / ")}": tokens ${k}..${i1} were never shown`);
    prev = i1;
    blocks.push({ i0, i1, a: startOf(i0), cue: owner(i0), objWords: !!opts.objWords, lines: words });
  }
  if (prev !== W.length - 1) fail(`the beats end at token ${prev}; the take has ${W.length} words`);
  blocks.forEach((b, n) => { b.b = n + 1 < blocks.length ? blocks[n + 1].a : CUES[CUES.length - 1].b; });
}
fs.mkdirSync("src/r45", { recursive: true });
fs.writeFileSync("src/r45/blocks.ts",
  (PROV ? "// ⚠ PROVISIONAL (no take yet): GENERATED BY scratchpad/captions_vo.mjs — do not hand-edit (edit BLOCKS there and re-run).\n"
    : "// GENERATED BY scratchpad/captions_vo.mjs FROM THE REAL TAKE — do not hand-edit (edit BLOCKS there and re-run).\n") +
  "// ★ RULE 45.4: the narration is the caption, ONE WORD AT A TIME. A beat is 1–2 lines; each word has its tier (ExtraBold\n" +
  "//   key word or Light Italic) and the time it is spoken (s). `cue` is the sentence (= shot) it belongs to.\n" +
  `// ${blocks.length} beats.\n\n` +
  "export type BWord = { t: string; bold: boolean; a: number };\n" +
  "export type Block = { a: number; b: number; cue: number; objWords: boolean; lines: BWord[][] };\n\n" +
  "export const BLOCKS: Block[] = [\n" +
  blocks.map((b) => `  { a: ${b.a.toFixed(3)}, b: ${b.b.toFixed(3)}, cue: ${b.cue}, objWords: ${b.objWords}, lines: [${b.lines.map((l) =>
    "[" + l.map((w) => `{ t: ${JSON.stringify(w.t)}, bold: ${w.bold}, a: ${w.a.toFixed(3)} }`).join(", ") + "]").join(", ")}] },`).join("\n") +
  "\n];\n");
console.log(`${blocks.length} caption beats → src/r45/blocks.ts`);
console.log(`${CUES.length} cues · ${W.length} words · speech ends ${CUES[CUES.length - 1].b.toFixed(2)} s`);
console.log(Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(" · "));
console.log(`snap/onset: ${snapped.length ? [...new Set(snapped)].join(" · ") : "none"}`);
const short = CUES.filter((c) => c.b - c.a < 1.0);
if (short.length) console.log(`⚠ ${short.length} cue(s) under 1.0 s: ` + short.map((c) => `"${c.text.slice(0, 26)}…"`).join(", "));
