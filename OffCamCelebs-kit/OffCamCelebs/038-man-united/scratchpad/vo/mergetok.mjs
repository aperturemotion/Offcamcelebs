// ★ 028 take: whisper splits a decimal figure into two tokens ("$1" | ".6") and a percentage into two ("20" | "%"). A lone
// ".6" or "%" can match no display word, so the caption beats refuse. This merges each such pair into ONE token (start of
// the first, end of the second) in scratchpad/fw_words.json, BEFORE vo_retrim.py backs it up as the tight transcript and
// before onsets.py keys its fixes by word index. It refuses if the file holds no split at all (already merged, or a
// different transcript), and lists every merge.
//   node scratchpad/mergetok.mjs
import fs from "node:fs";

const P = "scratchpad/fw_words.json";
const W = JSON.parse(fs.readFileSync(P, "utf8")).words;
const out = [], merged = [];
for (let i = 0; i < W.length; i++) {
  const w = W[i], n = W[i + 1];
  const decimal = n && /^[$£]?\d+$/.test(w.t) && /^\.\d+[.,?!]?$/.test(n.t);
  // ★ 033: "40" | ".5" | "%" is THREE tokens: the decimal merges first, so a percent may follow a decimal (run it twice)
  const percent = n && /^\d+(\.\d+)?$/.test(w.t) && /^%[.,?!]?$/.test(n.t);
  // ★ 030 take: a thousands group split off ("$300" | ",000.") and a hyphenated word split at its hyphen ("co" | "-founded")
  const thousands = n && /^[$£]?\d{1,3}$/.test(w.t) && /^,\d{3}[.,?!]?$/.test(n.t);
  const hyphen = n && /^[A-Za-z]+$/.test(w.t) && /^-[A-Za-z]+[.,?!]?$/.test(n.t);
  if (decimal || percent || thousands || hyphen) {
    out.push({ t: w.t + n.t, a: w.a, b: n.b });
    merged.push(`${i}: "${w.t}" + "${n.t}" → "${w.t + n.t}"`);
    i += 1;
  } else out.push(w);
}
if (!merged.length) { console.error("REFUSING: no split figure found — already merged, or not the transcript this was written for"); process.exit(1); }
fs.writeFileSync(P, JSON.stringify({ words: out }));
console.log(merged.join("\n"));
console.log(`${W.length} → ${out.length} tokens`);
