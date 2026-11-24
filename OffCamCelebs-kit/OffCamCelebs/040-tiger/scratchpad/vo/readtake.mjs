// Print the transcript as sentences with their word-start times, plus the
// gaps between words — the shape you need to plan captions and to spot the
// silence-snap cases (a word whose claimed span OVERLAPS a real pause).
// Usage: node scratchpad/readtake.mjs [minGap]
import fs from "node:fs";

const W = JSON.parse(fs.readFileSync("scratchpad/fw_words.json", "utf8")).words;
const MIN = Number(process.argv[2] ?? 0.34);

let line = [], start = W[0].a;
const out = [];
for (let i = 0; i < W.length; i++) {
  const w = W[i], next = W[i + 1];
  line.push(w.t);
  const gap = next ? next.a - w.b : Infinity;
  const ends = /[.!?—]$/.test(w.t);
  if (ends || gap >= MIN || !next) {
    out.push({ a: start, b: w.b, gap: next ? gap : 0, text: line.join(" ") });
    line = [];
    if (next) start = next.a;
  }
}
out.forEach((s, i) =>
  console.log(String(i).padStart(2), s.a.toFixed(2).padStart(6), "→", s.b.toFixed(2).padStart(6),
    "gap " + s.gap.toFixed(2), " ", s.text));
console.log(`\n${W.length} words · ${out.length} chunks · ends ${W[W.length - 1].b.toFixed(2)}s`);
