// capbandrun.mjs — run the caption-band check (capband.mjs) on 3 workers over the whole film and judge it.
//   node scratchpad/capbandrun.mjs [step=6]     exits 1 on any fail or a failed canary; prints the failing runs per place
import { spawn } from "node:child_process";
import fs from "node:fs";
const step = process.argv[2] ?? "6", NW = 3, OUT = "out/capband";   // FROM=… TO=… narrow the frames (a place's window)
const plan = JSON.parse(fs.readFileSync("scratchpad/plan.json", "utf8"));
const total = String(plan.total ?? plan.TOTAL ?? plan.frames ?? 1765);
fs.rmSync(OUT, { recursive: true, force: true });
await Promise.all([...Array(NW).keys()].map((w) => new Promise((res) => {
  const p = spawn(process.execPath, ["scratchpad/capband.mjs", String(w), String(NW), step, OUT], { stdio: ["ignore", "pipe", "inherit"], env: { ...process.env, TOTAL: total } });
  p.stdout.on("data", (d) => { const s = String(d); if (/capband worker/.test(s)) process.stdout.write(s.split("\n").filter((l) => /capband worker/.test(l)).join("\n") + "\n"); });
  p.on("close", res);
})));
const all = [], canaries = [];
for (let w = 0; w < NW; w++) { const j = JSON.parse(fs.readFileSync(`${OUT}/w${w}.json`, "utf8")); canaries.push(j.canary.ok); all.push(...j.frames); }
all.sort((a, b) => a.f - b.f);
const fails = all.filter((x) => x.fail);
const runs = [];
for (const x of fails) { const r = runs.at(-1); if (r && r.place === x.place && x.f - r.b <= 3 * Number(step)) { r.b = x.f; r.worst = Math.max(r.worst, x.frac); } else runs.push({ place: x.place, a: x.f, b: x.f, worst: x.frac, cap: x.cap }); }
console.log(`CAPTION BAND: ${all.length} frames sampled every ${step} f; canaries ${canaries.every(Boolean) ? "ok" : "FAILED"}; ${fails.length} frame(s) with something bright in the caption band while a caption shows`);
for (const r of runs) console.log(`  ${r.place.padEnd(8)} f${r.a}–${r.b}  worst ${(r.worst * 100).toFixed(1)}% of the band  ("${r.cap}")`);
process.exit(fails.length || !canaries.every(Boolean) ? 1 : 0);
