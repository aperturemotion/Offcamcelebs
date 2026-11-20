// probe.mjs — quick look at chosen frames (full blur and DOF), with the caption band outlined, plus a contact sheet.
//   node scratchpad/probe.mjs 0,40,120 <outDir> [scale=0.4]
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
const [FR = "0", OUT = "out/probe", SC = "0.4"] = process.argv.slice(2);
const mode = "frames", SCALE = "1";
const frames = FR.split(",").map(Number), sc = Number(SC);
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

fs.mkdirSync(OUT, { recursive: true });
for (const f of frames) {
  cur = f;
  await page.evaluate((t) => { window.__world = {}; window.__film.draw(t);
    let o = document.getElementById("__band"); if (!o) { o = document.createElement("div"); o.id = "__band"; document.body.appendChild(o); }
    o.style.cssText = "position:absolute;left:60px;top:230px;width:960px;height:100px;outline:2px dashed rgba(0,255,255,.6);z-index:999;pointer-events:none"; }, f / 30);
  await page.screenshot({ path: path.join(OUT, `p${String(f).padStart(4, "0")}.jpg`), type: "jpeg", quality: 85, clip: { x: 0, y: 0, width: 1080, height: 1920, scale: sc } });
}
await browser.close(); srv.close(); process.exit(0);
