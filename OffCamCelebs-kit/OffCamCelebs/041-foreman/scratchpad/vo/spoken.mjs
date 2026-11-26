// ★★★ HOW WHISPER WRITES MONEY (2026-09-23, 018). The guard's `briefSpoken`
// examples were written "$3 billion" — which is still the WRITTEN form: this
// film's take came back from faster-whisper as "3 billion dollars", "15 million
// dollars", "4.2 billion dollars", never with a "$". A pattern requiring
// "\$3" matched its own spoken example and missed the take — the 015/016
// failure a third time, one level further down.
//
// whisperForm() rewrites every "$N [unit]" into "N [unit] dollars". render.mjs
// requires each pattern to match this form too, and guardtest.mjs feeds a
// whole take of them. Shared here so the two can never disagree.
export const whisperForm = (s) =>
  s.replace(/\$(\d[\d.,]*)(\s*(?:million|billion|thousand|trillion))?/gi, (_, n, unit) =>
    unit ? `${n}${unit} dollars` : `${n} dollars`);

// the function's own known cases — it refuses to be used if it gets these wrong
const CASES = [
  ["about $3 billion of shareholder value", "about 3 billion dollars of shareholder value"],
  ["The $15 million, real", "The 15 million dollars, real"],
  ["a $35 million exit at 35", "a 35 million dollars exit at 35"],
  ["no money here", "no money here"],
  ["$27.875 a share", "27.875 dollars a share"],
];
for (const [a, want] of CASES) {
  const got = whisperForm(a);
  if (got !== want) throw new Error(`spoken.mjs: whisperForm("${a}") = "${got}", expected "${want}" — refusing`);
}
