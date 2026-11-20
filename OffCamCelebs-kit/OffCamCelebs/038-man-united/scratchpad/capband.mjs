// capband.mjs (2026-11-20, 038: Timur's review via the parent: the caption sat over the crest, the scoreboard's crest, the
//   cups). THE CAPTION BAND CHECK: whenever a caption is showing, nothing bright or readable may sit in the band it is
//   drawn in (y 230–330 of the 1080×1920 frame, x 60–1020). Each sampled frame is drawn WITHOUT motion blur or depth of
//   field (the check is about what stands there), the world canvas's band is read, and a frame FAILS when more than
//   BAND_MAX of the band's pixels are brighter than LUMA_MAX (sRGB luma 0–1). Turn cards are exempt (no caption).
//   Worker w of nw takes every step-th frame f ≡ w·step (mod nw·step); results go to <out>/w<w>.json.
//   A canary runs first: a white plane placed in the band must FAIL and the empty band must pass.
//   node scratchpad/capband.mjs <w> <nw> [step=6] [outDir=out/capband]
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
const [W = "0", NW = "1", STEP = "6", OUT = "out/capband"] = process.argv.slice(2);
const mode = "frames", SCALE = "1";
const w = Number(W), nw = Number(NW), step = Number(STEP);
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
const url = `http://127.0.0.1:${srv.address().port}/index.html`;

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

// a thin cable or a chrome glint crossing the band does not stop the caption being read: the limit is 1.5% of the band
//   (a lit word or the crest covers 10–80% of it)
const BAND = { x: 60, y: 230, w: 960, h: 100 }, LUMA_MAX = 0.45, BAND_MAX = 0.015;
const probe = (f, plant) => page.evaluate((t, B, plant) => {
  window.__world = { noBlur: true, noDof: true };
  window.__film.draw(t);
  const cv = document.querySelector("canvas[data-world]");
  const g = cv.getContext("2d");
  if (plant) { g.fillStyle = "#fff"; g.fillRect(400, 250, 200, 40); }
  const d = g.getImageData(B.x, B.y, B.w, B.h).data;
  // the dark stage: count BRIGHT pixels (lit print, the crest, a sign). The light stage (the pale table, R5) is bright all
  //   over, so there count pixels that stand OUT of the table's tone (an object reaching into the band, either way)
  const stage = window.__worldStage ?? "dark";
  const L = new Float32Array(d.length / 4);
  for (let i = 0, k = 0; i < d.length; i += 4, k++) L[k] = (0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]) / 255;
  const sorted = Float32Array.from(L).sort(), med = sorted[sorted.length >> 1];
  let bright = 0, max = 0;
  for (const l of L) {
    if (l > max) max = l;
    if (stage === "light" ? Math.abs(l - med) > 0.22 : l > 0.45) bright++;
  }
  let cap = "";
  for (const el of document.querySelectorAll("[data-cap]")) {
    let o = 1;
    for (let n = el; n && n !== document.body; n = n.parentElement) o *= parseFloat(getComputedStyle(n).opacity || "1");
    if (o > 0.05 && el.textContent.trim()) cap = el.textContent.trim();
  }
  return { frac: bright / (B.w * B.h), max, cap, place: window.__worldPlace ?? "", stage };
}, f / 30, BAND, plant);
const total = Math.round(Number(process.env.TOTAL ?? 1765));
fs.mkdirSync(OUT, { recursive: true });
// canary
const cA = await probe(200, true), cB = await probe(200, false);
const canaryOK = cA.frac > BAND_MAX;
const out = { canary: { planted: cA.frac, ok: canaryOK }, frames: [] };
const F0 = Number(process.env.FROM ?? 0), F1 = Number(process.env.TO ?? total - 1);
for (let f = F0 + w * step; f <= F1; f += nw * step) {
  cur = f;
  const r = await probe(f, false);
  out.frames.push({ f, ...r, fail: !!r.cap && r.frac > BAND_MAX });
}
fs.writeFileSync(path.join(OUT, `w${w}.json`), JSON.stringify(out));
console.log(`capband worker ${w}/${nw}: ${out.frames.length} frames, ${out.frames.filter((x) => x.fail).length} fail(s), canary ${canaryOK ? "ok" : "FAILED"}`);
await browser.close(); srv.close(); process.exit(0);
