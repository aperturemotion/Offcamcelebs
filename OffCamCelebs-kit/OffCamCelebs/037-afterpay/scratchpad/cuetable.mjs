// cuetable.mjs — every cue's frames and each word's onset frame, read from the generated src/audit/cues.ts (bundled, never
// regexed), for timing the places' actions.   node scratchpad/cuetable.mjs
import * as esbuild from "esbuild";
import { pathToFileURL } from "node:url";
const out = "scratchpad/.cuetable.mjs";
await esbuild.build({ entryPoints: ["src/audit/cues.ts"], outfile: out, bundle: true, format: "esm", platform: "node", logLevel: "error" });
const { CUES } = await import(pathToFileURL(out).href + `?t=${Date.now()}`);
for (const c of CUES) console.log(c.scene.padEnd(9), String(Math.round(c.a * 30)).padStart(5), String(Math.round(c.b * 30)).padStart(5), " ", c.w.map(([t, a]) => `${t}@${Math.round(a * 30)}`).join(" "));
