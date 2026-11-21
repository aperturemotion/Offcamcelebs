// writes scratchpad/plan.json (total + layer windows) from the bundled plan, for stale029.py
import fs from "node:fs";
import { pathToFileURL } from "node:url";
const plan = (await import(pathToFileURL(".build/plan.mjs").href)).plan();
fs.writeFileSync("scratchpad/plan.json", JSON.stringify({ total: plan.total, layers: plan.layers.map(({ id, from, to, track, z, label }) => ({ id, from, to, track, z, label })) }));
console.log(plan.layers.map((l) => `${l.id} ${l.from}-${l.to}`).join(" · "));
