// CRLF-aware exact-string edits for the RULE 54b one-shots (split/join, each anchor must match exactly once)
import fs from "node:fs";
const CR = String.fromCharCode(13), LF = String.fromCharCode(10);
export const edit = (f, pairs) => {
  const raw = fs.readFileSync(f, "utf8"), crlf = raw.includes(CR + LF);
  let s = raw.split(CR + LF).join(LF);
  for (const [a, b] of pairs) { const n = s.split(a).length - 1; if (n !== 1) throw new Error(`${f}: ${n} matches: ${a.slice(0, 90)}`); s = s.split(a).join(b); }
  fs.writeFileSync(f, crlf ? s.split(LF).join(CR + LF) : s);
  console.log("ok", f);
};
