// ★ PROVISIONAL TIMING (no take yet). Writes scratchpad/fw_words.json in faster-whisper's shape, from the script in the
//   form a WHISPER transcript takes (digits, "$22 million", "2017"), at the pace of the channel's last takes (~2.6 words a
//   second, pauses at commas and full stops, a longer one between places). Plus an empty sil.txt and onsets.json, so
//   captions_vo.mjs runs unchanged. ⚠ REPLACED by fw.py the moment the real take lands: nothing here is a measurement.
//   node scratchpad/provisional.mjs && node scratchpad/captions_vo.mjs
import fs from "node:fs";

// [scene, the cue's text as whisper would write it]; the place breaks get a longer pause (037's corrected VO_SCRIPT.txt)
export const LINES = [
  ["hook", "Afterpay sold for $29 billion."],
  ["hook", "That's the number in the headlines."],
  ["hook", "The buyer's own filing says 13.8."],
  ["explain", "Let me explain."],
  ["deal", "In August 2021, Jack Dorsey's Square agreed to buy Afterpay."],
  ["deal", "But it didn't pay in cash."],
  ["deal", "It paid in its own shares."],
  ["deal", "Every Afterpay share would become 0.375 Square shares."],
  ["price", "At the time, one Square share was worth $247."],
  ["price", "That's where 29 billion came from."],
  ["catch", "And here's the catch."],
  ["close", "The deal took six months to close."],
  ["close", "By then, Square had renamed itself Block, and its share price had roughly halved."],
  ["close", "So when Block booked the deal with the SEC, the shares it handed over were worth 13.8 billion."],
  ["fair", "To be fair, 29 billion was the real value on announcement day."],
  ["fair", "The deal fixed the number of shares, not the dollars, and Afterpay's owners got those shares."],
  ["verdict", "So 29 billion was the price on day one."],
  ["verdict", "Not the price paid."],
  ["verdict", "Our rating: inflated."],
  ["verdict", "Send us who to audit next."],
];
// how long a token takes to SAY (s): numbers are read as words, so "402" is "four hundred two"
const SPOKEN = { "$29": 0.75, "13.8.": 0.95, "13.8": 0.9, "2021,": 1.05, "0.375": 1.25, "$247.": 1.5, "29": 0.6, "SEC,": 0.75 };
const words = [];
let t = 0;
LINES.forEach(([scene, text], i) => {
  if (i > 0) t += LINES[i - 1][0] !== scene ? 0.55 : 0.28;   // a place break, or a sentence break inside a place
  for (const tok of text.split(" ")) {
    const d = SPOKEN[tok] ?? Math.max(0.14, 0.05 * tok.replace(/[^A-Za-z0-9]/g, "").length + 0.12);
    words.push({ t: tok, a: +t.toFixed(3), b: +(t + d).toFixed(3) });
    t += d;
    if (/[,:]$/.test(tok)) t += 0.18;
  }
});
fs.writeFileSync("scratchpad/fw_words.json", JSON.stringify({ provisional: true, words }));
fs.writeFileSync("scratchpad/sil.txt", "");
fs.writeFileSync("scratchpad/onsets.json", "{}");
// the plan, by word index, for captions_vo.mjs
let k = 0;
const plan = LINES.map(([scene, text]) => { const n = text.split(" ").length; const r = [scene, k, k + n - 1, text]; k += n; return r; });
console.log(`${words.length} words · ${t.toFixed(2)} s (provisional)`);
console.log(plan.map((p) => `  ${JSON.stringify(p)},`).join("\n"));
