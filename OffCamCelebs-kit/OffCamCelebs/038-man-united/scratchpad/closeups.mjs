// closeups.mjs (2026-11-20, 038, ★ P17 "THE PHYSICAL CHECKS": the close-up sheet). Every joint the support check knows about
//   (kit.ts hangs / mounted), drawn TIGHT at its first, middle and last on-screen frame, from the film camera's side, so a
//   person can look at each one: the ring on its hook, the posts in the sign, the rail in its sleeves, the hooks on the rail,
//   the door on its hinges, the chain's links. src/world/closeuprun.ts plans the shots; scratchpad/shoot.mjs draws them.
//   node scratchpad/closeups.mjs [outDir=out/closeups] [--per 2] [--workers 4]
//   → <outDir>/closeups<N>.jpg (24 a sheet, each labelled with its frame, place and the joint's declared reason)
import * as esbuild from "esbuild";
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const r = (...p) => path.join(ROOT, ...p);
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const OUT = process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : "out/closeups";
const NW = +arg("--workers", 4);
fs.mkdirSync(OUT, { recursive: true });
const out = r(".build/closeuprun.mjs");
await esbuild.build({
  bundle: true, entryPoints: [r("src/world/closeuprun.ts")], outfile: out, format: "esm", platform: "node", logLevel: "warning", target: "es2020",
  jsx: "automatic", jsxImportSource: "preact", loader: { ".json": "json" },
  alias: { react: "preact/compat", "react-dom": "preact/compat", "react/jsx-runtime": "preact/jsx-runtime", remotion: r("src/shim/remotion.tsx"), "@remotion/layout-utils": r("src/shim/layout-utils.ts") },
});
const C = await import(pathToFileURL(out).href + `?t=${Date.now()}`);
const jobs = C.plan({ perWhy: +arg("--per", 2) });
fs.writeFileSync(path.join(OUT, "jobs.json"), JSON.stringify(jobs, null, 1));
console.log(`${jobs.length} close-ups planned`);
for (const f of fs.readdirSync(OUT)) if (f.endsWith(".jpg")) fs.rmSync(path.join(OUT, f));
const run = (args) => new Promise((res) => { const p = spawn(process.execPath, args, { cwd: ROOT, stdio: "inherit" }); p.on("close", res); });
await Promise.all(Array.from({ length: NW }, (_, w) => run(["scratchpad/shoot.mjs", path.join(OUT, "jobs.json"), OUT, "--w", String(w), "--nw", String(NW), "--scale", "0.25"])));
const py = `
import sys, json, os, textwrap
from PIL import Image, ImageDraw, ImageFont
out = sys.argv[1]
jobs = json.load(open(os.path.join(out, 'jobs.json')))
try: font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 13)
except Exception: font = ImageFont.load_default()
tw, th, cap, cols, per = 270, 480, 54, 6, 24
for s in range(0, len(jobs), per):
    part = jobs[s:s + per]; rows = (len(part) + cols - 1) // cols
    sheet = Image.new('RGB', (cols * tw, rows * (th + cap)), (16, 16, 16))
    d = ImageDraw.Draw(sheet)
    for i, j in enumerate(part):
        x, y = (i % cols) * tw, (i // cols) * (th + cap)
        p = os.path.join(out, j['name'] + '.jpg')
        if os.path.exists(p): sheet.paste(Image.open(p).resize((tw, th)), (x, y))
        for k, line in enumerate(textwrap.wrap(j['label'], 40)[:3]): d.text((x + 4, y + th + 2 + k * 16), line, fill=(230, 230, 230), font=font)
    name = 'closeups%d.jpg' % (s // per + 1)
    sheet.save(os.path.join(out, name), quality=84); print(name, len(part))
`;
fs.writeFileSync(path.join(OUT, ".sheet.py"), py);
await new Promise((res) => { const p = spawn("python3", [path.join(OUT, ".sheet.py"), OUT], { stdio: "inherit" }); p.on("close", res); });
