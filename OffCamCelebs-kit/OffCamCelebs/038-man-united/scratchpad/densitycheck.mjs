// densitycheck.mjs (2026-11-20, 038, ★ P17 "THE PHYSICAL CHECKS": TEXT DENSITY). "At most ONE short label and ONE figure
//   readable in a frame (plus the caption)." Over the whole film, every `step`-th frame is drawn (no motion blur, no depth
//   of field: the count is about what stands there) and scratchpad/densityprobe.js counts the readable world texts:
//   projected cap height ≥ 14 px, at least half in frame, facing the camera, not hidden behind a solid (9 rays). Texts are
//   grouped by the plate they sit on; a plate with a money figure or a bare number is a FIGURE, any other a LABEL. A frame
//   with two labels or two figures is a FAULT, printed with its frame. Turn cards and the captions are not world texts.
//   The canary runs first (scratchpad/densitycanary.mjs: two planted labels must fire; a tiny, a hidden and a turned-away
//   one must not), or the run refuses.
//   node scratchpad/densitycheck.mjs [step=3] [--workers 3]          exit 1 on a fault or a failed canary
//   (internally: node scratchpad/densitycheck.mjs --worker w nw step out)
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "out/density");
const wi = process.argv.indexOf("--worker");
if (wi > 0) {
  const [w, nw, step] = process.argv.slice(wi + 1, wi + 4).map(Number);
  const require = createRequire(import.meta.url);
  const puppeteer = require("puppeteer-core");
  const CHROME = process.env.HF_CHROME || "/opt/pw-browsers/chromium-1243/chrome-linux64/chrome";
  const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2", ".png": "image/png", ".jpg": "image/jpeg", ".wav": "audio/wav", ".mp3": "audio/mpeg", ".json": "application/json" };
  const srv = http.createServer((req, res) => {
    const p = path.join(ROOT, decodeURIComponent(new URL(req.url, "http://x").pathname));
    if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { "content-type": TYPES[path.extname(p)] || "application/octet-stream" }); fs.createReadStream(p).pipe(res);
  }).listen(0, "127.0.0.1");
  await new Promise((r) => srv.once("listening", r));
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, protocolTimeout: 0, args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
  await page.goto(`http://127.0.0.1:${srv.address().port}/index.html`, { waitUntil: "load", timeout: 0 });
  await page.evaluate(async () => { await document.fonts.ready; await Promise.all(Object.values(window.__hf?.buildReady ?? {})); });
  await page.addScriptTag({ path: path.join(ROOT, "scratchpad/densityprobe.js") });
  const plan = JSON.parse(fs.readFileSync(path.join(ROOT, "scratchpad/plan.json"), "utf8"));
  const total = Number(plan.total ?? plan.TOTAL ?? plan.frames ?? 1765);
  const rows = [];
  for (let f = w * step; f < total; f += nw * step) {
    const r = await page.evaluate((t) => { window.__world = { noBlur: true, noDof: true }; window.__film.draw(t); const d = window.__densityProbe(); return { place: d.place, stage: d.stage, labels: d.labels ?? [], figures: d.figures ?? [] }; }, f / 30);
    rows.push({ f, ...r });
  }
  fs.writeFileSync(path.join(OUT, `w${w}.json`), JSON.stringify(rows));
  console.log(`density worker ${w}/${nw}: ${rows.length} frames`);
  await browser.close(); srv.close(); process.exit(0);
}
const step = Number(process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : 3);
const NW = Number((() => { const i = process.argv.indexOf("--workers"); return i > 0 ? process.argv[i + 1] : 3; })());
const run = (args) => new Promise((res) => { let o = ""; const p = spawn(process.execPath, args, { cwd: ROOT, stdio: ["ignore", "pipe", "inherit"] }); p.stdout.on("data", (d) => (o += d)); p.on("close", (c) => res({ c, o })); });
const can = await run(["scratchpad/densitycanary.mjs"]);
if (can.c !== 0 || !/canary ok/.test(can.o)) { console.error("TEXT DENSITY: the canary failed, so the count proves nothing:\n" + can.o); process.exit(2); }
console.log("TEXT DENSITY " + can.o.trim());
fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT, { recursive: true });
const t0 = Date.now();
await Promise.all(Array.from({ length: NW }, (_, w) => run(["scratchpad/densitycheck.mjs", "--worker", String(w), String(NW), String(step)])));
const rows = [];
for (let w = 0; w < NW; w++) rows.push(...JSON.parse(fs.readFileSync(path.join(OUT, `w${w}.json`), "utf8")));
rows.sort((a, b) => a.f - b.f);
const faults = rows.filter((r) => r.stage !== "card" && (r.labels.length > 1 || r.figures.length > 1));
fs.writeFileSync(path.join(OUT, "density.json"), JSON.stringify(rows, null, 1));
console.log(`TEXT DENSITY: ${rows.length} frames every ${step} f (${((Date.now() - t0) / 1000).toFixed(0)} s); at most one label and one figure readable a frame`);
for (const r of faults) console.log(`  FAULT  f${r.f} ${r.place}: labels [${r.labels.join(" / ")}]  figures [${r.figures.join(" / ")}]`);
console.log(`  → ${faults.length} frame(s) over`);
process.exit(faults.length ? 1 : 0);
