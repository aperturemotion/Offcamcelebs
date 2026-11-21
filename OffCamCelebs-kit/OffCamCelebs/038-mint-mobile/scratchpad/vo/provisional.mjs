// ★ PROVISIONAL TIMING (no take yet). Writes scratchpad/fw_words.json in faster-whisper's shape, from the script in the
//   form a WHISPER transcript takes (digits, "$22 million", "2017"), at the pace of the channel's last takes (~2.6 words a
//   second, pauses at commas and full stops, a longer one between places). Plus an empty sil.txt and onsets.json, so
//   captions_vo.mjs runs unchanged. ⚠ REPLACED by fw.py the moment the real take lands: nothing here is a measurement.
//   node scratchpad/provisional.mjs && node scratchpad/captions_vo.mjs
import fs from "node:fs";

// [scene, the cue's text as whisper would write it]; the place breaks get a longer pause (032's corrected VO_SCRIPT.txt)
export const LINES = [
  ["hook","Headline after headline said Conor McGregor sold his whiskey for 600 million dollars."],
  ["hook","He didn't get anywhere near that."],
  ["deal","Proper No. 12."],
  ["deal","In 2021, Proximo Spirits took majority control, in a deal reported to be worth up to 600 million."],
  ["deal","Up to."],
  ["shrink","His business partner said that number included 250 million the team had already earned."],
  ["shrink","Proximo already owned 49%."],
  ["shrink","And the money was split mainly between McGregor, his manager, and that business partner."],
  ["shrink","Reports put McGregor's share at about 130 million."],
  ["court","Then a former sparring partner sued him in Ireland's High Court, claiming he'd been promised 5%."],
  ["court","The court ordered McGregor to hand over documents on what he made from the sale."],
  ["court","In 2026, they settled."],
  ["court","The terms weren't disclosed."],
  ["fair","To be fair: that sale helped make him Forbes' highest-paid athlete in the world that year, at 180 million."],
  ["verdict","But 600 million?"],
  ["verdict","That was never his number."],
  ["verdict","Our rating: inflated."],
  ["verdict","Send us who to audit next."],
];
// how long a token takes to SAY (s): numbers are read as words, so "402" is "four hundred two"
const SPOKEN = { "600": 0.95, "12.": 0.45, "2021,": 0.9, "250": 1.2, "49%.": 1.0, "130": 1.2, "5%.": 0.7, "2026,": 0.95, "180": 1.1 };
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
