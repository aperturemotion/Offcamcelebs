// Checks VO_SCRIPT.txt against the wired cues and the render guard:
//   · every cue line must appear verbatim in the paste-ready script;
//   · no guard pattern may match the paste-ready script's body.
// Usage: node scratchpad/voscript_check.mjs
import fs from "node:fs";

const vo = fs.readFileSync("VO_SCRIPT.txt", "utf8");
const src = fs.readFileSync("src/audit/cues.ts", "utf8");
// ★ 025: a wired cue carries `w` (its words) after the text, so the text ends in "," as well as " }"
const rows = [...src.matchAll(/text: "((?:[^"\\]|\\.)*)"\s*[,}]/g)].map((m) => m[1].replace(/\\"/g, '"'));
const declared = +(src.match(/^\/\/\s*(\d+)\s+cues\b/m) || [])[1];
if (!rows.length || rows.length !== declared) {
  console.error(`REFUSING: parsed ${rows.length} cue lines, cues.ts declares ${declared}`);
  process.exit(1);
}
const miss = rows.filter((r) => !vo.includes(r));
console.log(`${rows.length} cue lines; ${miss.length} missing from VO_SCRIPT.txt`);
for (const m of miss) console.log("   " + m);

const fx = JSON.parse(fs.readFileSync("src/audit/script_fixes.json", "utf8")).fixes;
// the script ends at the first ═══ rule — every note below it quotes the
// brief's bad lines on purpose (019: a notes section above "WHAT CHANGED"
// made the old marker count its own quotations as script)
const cut = vo.search(/\n═{10,}\n/);
if (cut < 0) { console.error("REFUSING: no ═══ rule marks the end of the script"); process.exit(1); }
const body = vo.slice(0, cut);
const hits = fx.filter((f) => new RegExp(f.bad, "i").test(body)).map((f) => f.at);
console.log("guard hits on the paste-ready script:", hits.length ? hits.join(", ") : "none");
if (miss.length || hits.length) process.exit(1);
