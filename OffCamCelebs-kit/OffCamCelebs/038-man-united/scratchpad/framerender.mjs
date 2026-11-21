// framerender.mjs (2026-11-19) — a RESUMABLE full-resolution render of the film, frame by frame, for when the container
//   restarts mid-render (the HyperFrames render cannot resume). Worker w of nw draws frames f ≡ w (mod nw), skipping any
//   PNG already written (each is written to a temp name and renamed, so a killed frame is never half a file). Then
//   scratchpad/framemux.sh encodes the PNGs with the film's own mix (vo/mixprobe.mjs → out/mix.wav).
//   node scratchpad/framerender.mjs <w> <nw> [last=1883] [outDir=renders/frames]
// (from sweep029.mjs) — RULE 54's frame sweep: the film drawn frame by frame in HyperFrames' own headless Chrome (swiftshader,
// the renderer's GL), with no MP4 (CLAUDE.md: a frame capture is verification, not a render).
//   node scratchpad/sweep029.mjs frames <a> <b> <step> <outDir> [scale=1]   composite JPEGs (q 92)
//   node scratchpad/sweep029.mjs layers <a> <b> <step> <outDir> [scale=0.25] each mounted PLACE layer alone, alpha kept
//        (PNG, transparent page): <outDir>/f<NNNN>_<layer>.png, plus <outDir>/layers.json (which layers were mounted)
//   node scratchpad/sweep029.mjs audit <a> <b> <step> <outDir> [shadeEvery=15]  RULE 54's in-page 3-D checks (the AUDIT
//        build, served in place of assets/film.js: scripts/build.mjs --audit): edges + pen on every frame, shade every
//        shadeEvery-th; the canaries first (the run refuses if any fails). Writes <outDir>/audit.jsonl
// Every console error is printed with its frame: a 3-D view that throws keeps its LAST frame's pixels (a stale place).
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer-core");
const CHROME = (process.env.HF_CHROME || "chrome-headless-shell.exe");
const [W = "0", NW = "1", B = "1883", OUT = "renders/frames"] = process.argv.slice(2);
const mode = "frames", SCALE = "1";
const w = Number(W), nw = Number(NW), b = Number(B);
const scale = Number(SCALE ?? (mode === "layers" ? 0.25 : 1));
fs.mkdirSync(OUT, { recursive: true });

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2", ".png": "image/png", ".jpg": "image/jpeg", ".wav": "audio/wav", ".mp3": "audio/mpeg", ".json": "application/json" };
const srv = http.createServer((req, res) => {
  let rel = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (process.env.AUDIT && rel === "/assets/film.js") rel = "/.build/film-audit.js";
  const p = path.join(ROOT, rel);
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "content-type": TYPES[path.extname(p)] || "application/octet-stream" });
  fs.createReadStream(p).pipe(res);
}).listen(0, "127.0.0.1");
await new Promise((r) => srv.once("listening", r));
// ★ (2026-11-21) a DRAFT render: QUALITY=fast|flat|clay [RES=0.5] draws the world in that preview quality (world.ts)
const Q = process.env.QUALITY ? `?quality=${process.env.QUALITY}&res=${process.env.RES ?? 0.5}` : "";
const url = `http://127.0.0.1:${srv.address().port}/index.html${Q}`;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, protocolTimeout: 0,
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--disable-web-security",
    ...(process.platform === "linux" ? ["--no-sandbox"] : [])] });   // a Linux container runs as root
const page = await browser.newPage();
await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
let cur = -1;
const errors = [];
page.on("console", (m) => { if (m.type() === "error") { errors.push({ f: cur, t: m.text() }); console.log(`[f${cur} error]`, m.text()); } });
page.on("pageerror", (e) => { errors.push({ f: cur, t: String(e) }); console.log(`[f${cur} pageerror]`, String(e)); });
page.setDefaultTimeout(0);
await page.goto(url, { waitUntil: "load", timeout: 0 });
await page.evaluate(async () => {
  await document.fonts.ready;
  const r = window.__hf?.buildReady ?? {};
  await Promise.all(Object.values(r));
});

// ★ (2026-11-21) GUARD: a master is drawn in the FULL look, never a preview quality (world.ts qualityNow)
{
  const q = await page.evaluate(() => { window.__film.draw(0); return window.__worldStats?.quality; });
  const want = process.env.QUALITY || "full";
  if (q !== want) { console.log(`REFUSED: the world drew in "${q}", wanted "${want}"`); await browser.close(); srv.close(); process.exit(2); }
}
const draw = (f) => page.evaluate((t) => { window.__film.draw(t); return true; }, f / 30);
const t0 = Date.now();
let n = 0;
for (let f = w; f <= b; f += nw) {
  cur = f;
  const fin = path.join(OUT, `f${String(f).padStart(4, "0")}.png`);
  if (fs.existsSync(fin)) continue;
  await draw(f);
  const tmp = fin + ".part.png";
  await page.screenshot({ path: tmp, type: "png", clip: { x: 0, y: 0, width: 1080, height: 1920, scale: 1 } });
  fs.renameSync(tmp, fin);
  n++;
}
console.log(`worker ${w}/${nw}: ${n} frames in ${Math.round((Date.now() - t0) / 1000)} s, ${errors.length} console error(s)`);
await browser.close(); srv.close(); process.exit(0);
