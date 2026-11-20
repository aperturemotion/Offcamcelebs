// sweep.mjs (2026-11-20, 038, P17) — THE STILLS SWEEP with the TEXT-DENSITY count. Draws the frames in `spec` with 4
//   workers (scratchpad/shoot.mjs --density), then:
//   · the TEXT-DENSITY verdict: per frame, more than ONE label plate or more than ONE figure plate readable (projected cap
//     height ≥ 14 px, in frame, facing the camera, not occluded; turn cards and captions are not world texts) is a FAULT,
//     printed with its frame; the probe's canary runs first (a frame planted with two extra plates must fire);
//   · contact sheets: <outDir>/sheet1…sheetN.jpg (each still labelled with its frame and any density fault).
//   node scratchpad/sweep.mjs <spec> <outDir> [--sheets 4] [--scale 0.5] [--workers 4] [--no-shoot]
//   Exit code 1 on a density fault (render.mjs --check runs it on the film's check frames).
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const [SPEC, OUT] = process.argv.slice(2);
const NW = +arg("--workers", 4), SHEETS = +arg("--sheets", 4), SCALE = arg("--scale", "0.5");
fs.mkdirSync(OUT, { recursive: true });
const run = (args) => new Promise((res, rej) => { const p = spawn(process.execPath, args, { cwd: ROOT, stdio: ["ignore", "pipe", "pipe"] }); let o = ""; p.stdout.on("data", (d) => (o += d)); p.stderr.on("data", (d) => (o += d)); p.on("close", (c) => (c === 0 ? res(o) : rej(new Error(o)))); });

// ── the probe's canary: f0's frame drawn with two extra lit plates in front of the camera must fire; the plain frame must not ──
{
  const out = await run(["scratchpad/densitycanary.mjs"]);
  if (!/canary ok/.test(out)) { console.error("TEXT DENSITY: the canary failed, so the count proves nothing:\n" + out); process.exit(2); }
  console.log(out.trim());
}
if (!process.argv.includes("--no-shoot")) {
  for (const f of fs.readdirSync(OUT)) if (/^density_w\d+\.jsonl$/.test(f)) fs.rmSync(path.join(OUT, f));
  const t0 = Date.now();
  const logs = await Promise.all(Array.from({ length: NW }, (_, w) => run(["scratchpad/shoot.mjs", SPEC, OUT, "--w", String(w), "--nw", String(NW), "--scale", SCALE, "--density"])));
  console.log(logs.map((l) => l.trim().split("\n").pop()).join("\n"), `\n${((Date.now() - t0) / 1000).toFixed(0)} s`);
}
// ── the density verdict ──
const rows = [];
for (const f of fs.readdirSync(OUT)) if (/^density_w\d+\.jsonl$/.test(f)) for (const l of fs.readFileSync(path.join(OUT, f), "utf8").split("\n")) if (l.trim()) rows.push(JSON.parse(l));
rows.sort((a, b) => a.f - b.f);
const faults = rows.filter((r) => r.stage !== "card" && ((r.labels?.length ?? 0) > 1 || (r.figures?.length ?? 0) > 1));
fs.writeFileSync(path.join(OUT, "density.json"), JSON.stringify(rows.map((r) => ({ f: r.f, place: r.place, labels: r.labels, figures: r.figures })), null, 1));
console.log(`\nTEXT DENSITY: ${rows.length} frames counted (one label and one figure a frame at most)`);
for (const r of faults) console.log(`  FAULT  f${r.f} ${r.place}: labels [${r.labels.join(" / ")}]  figures [${r.figures.join(" / ")}]`);
console.log(`  → ${faults.length} frame(s) over`);
// ── contact sheets (python + PIL, as the sweeps before) ──
const py = `
import sys, json, glob, os
from PIL import Image, ImageDraw, ImageFont
out, n = sys.argv[1], int(sys.argv[2])
rows = {r['f']: r for r in json.load(open(os.path.join(out, 'density.json')))}
fs = sorted(glob.glob(os.path.join(out, 'f[0-9][0-9][0-9][0-9].jpg')))
per = (len(fs) + n - 1) // n
try: font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 15)
except Exception: font = ImageFont.load_default()
for s in range(n):
    part = fs[s * per:(s + 1) * per]
    if not part: continue
    tw, th = 180, 320
    cols = 10; rws = (len(part) + cols - 1) // cols
    sheet = Image.new('RGB', (cols * tw, rws * th), (20, 20, 20))
    for i, f in enumerate(part):
        im = Image.open(f).resize((tw, th))
        x, y = (i % cols) * tw, (i // cols) * th
        sheet.paste(im, (x, y))
        fr = int(os.path.basename(f)[1:5]); r = rows.get(fr, {})
        bad = len(r.get('labels', [])) > 1 or len(r.get('figures', [])) > 1
        d = ImageDraw.Draw(sheet)
        d.rectangle((x, y + th - 20, x + 62, y + th), fill=(0, 0, 0))
        d.text((x + 4, y + th - 19), 'f%d' % fr, fill=(255, 80, 60) if bad else (90, 255, 120), font=font)
    sheet.save(os.path.join(out, 'sheet%d.jpg' % (s + 1)), quality=84)
    print('sheet%d.jpg' % (s + 1), len(part), 'stills', sheet.size)
`;
fs.writeFileSync(path.join(OUT, ".sheets.py"), py);
await new Promise((res) => { const p = spawn("python3", [path.join(OUT, ".sheets.py"), OUT, String(SHEETS)], { stdio: "inherit" }); p.on("close", res); });
process.exit(faults.length ? 1 : 0);
