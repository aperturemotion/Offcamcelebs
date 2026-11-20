// shoot.mjs (2026-11-20, 038, P17 tools) — STILLS of the film, drawn in the renderer's own headless Chrome (swiftshader), no
//   MP4 (a frame capture is verification, not a render). One worker of several: worker w of nw takes every nw-th job.
//   node scratchpad/shoot.mjs <spec> <outDir> [--w 0] [--nw 1] [--scale 1] [--density] [--q 90]
//   <spec>   "0-1764:15,540-620:5" (frame ranges with steps, merged and de-duplicated) or a .json file of jobs
//            [{ f, name?, cam?: { pos, look, fov } }]: a job with a `cam` is drawn from that camera (no blur, no depth of
//            field): the close-up sheet (scratchpad/closeups.mjs) uses it
//   --density  also run the TEXT-DENSITY probe on every frame (scratchpad/density.mjs reads <outDir>/density_w<w>.jsonl)
// Every console error is printed with its frame and kept in <outDir>/errors_w<w>.json.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer-core");
const CHROME = process.env.HF_CHROME || "/opt/pw-browsers/chromium-1243/chrome-linux64/chrome";
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const [SPEC, OUT] = process.argv.slice(2);
const w = +arg("--w", 0), nw = +arg("--nw", 1), scale = +arg("--scale", 1), Q = +arg("--q", 90), DENSITY = process.argv.includes("--density");
fs.mkdirSync(OUT, { recursive: true });

export const parseSpec = (spec) => {
  if (spec.endsWith(".json")) return JSON.parse(fs.readFileSync(spec, "utf8"));
  const set = new Set();
  for (const part of spec.split(",")) {
    const [range, step = "1"] = part.split(":");
    const [a, b = a] = range.split("-").map(Number);
    for (let f = a; f <= b; f += Number(step)) set.add(f);
  }
  return [...set].sort((x, y) => x - y).map((f) => ({ f }));
};
const jobs = parseSpec(SPEC).filter((_, i) => i % nw === w);

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2", ".png": "image/png", ".jpg": "image/jpeg", ".wav": "audio/wav", ".mp3": "audio/mpeg", ".json": "application/json" };
const srv = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const p = path.join(ROOT, rel);
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "content-type": TYPES[path.extname(p)] || "application/octet-stream" });
  fs.createReadStream(p).pipe(res);
}).listen(0, "127.0.0.1");
await new Promise((r) => srv.once("listening", r));
const url = `http://127.0.0.1:${srv.address().port}/index.html`;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, protocolTimeout: 0,
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--disable-web-security", "--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
let cur = -1;
const errors = [];
page.on("console", (m) => { if (m.type() === "error" && !/status of 404/.test(m.text())) { errors.push({ f: cur, t: m.text() }); console.log(`[f${cur} error]`, m.text()); } });
page.on("pageerror", (e) => { errors.push({ f: cur, t: String(e) }); console.log(`[f${cur} pageerror]`, String(e)); });
// (a favicon 404 and audio requests the page aborts are not faults of the film)
page.on("requestfailed", (r) => { if (!/\.(wav|mp3)$/.test(r.url())) errors.push({ f: cur, t: `request failed: ${r.url()}` }); });
page.on("response", (r) => { if (r.status() >= 400 && !/favicon/.test(r.url())) errors.push({ f: cur, t: `${r.status()} ${r.url()}` }); });
page.setDefaultTimeout(0);
await page.goto(url, { waitUntil: "load", timeout: 0 });
await page.evaluate(async () => { await document.fonts.ready; await Promise.all(Object.values(window.__hf?.buildReady ?? {})); });
if (DENSITY) await page.addScriptTag({ path: path.join(ROOT, "scratchpad/densityprobe.js") });

const t0 = Date.now();
for (const job of jobs) {
  cur = job.f;
  const name = job.name ?? `f${String(job.f).padStart(4, "0")}`;
  await page.evaluate((t, cam) => { window.__world = cam ? { cam, noDof: true, noBlur: true } : undefined; window.__film.draw(t); }, job.f / 30, job.cam ?? null);
  if (DENSITY) {
    const d = await page.evaluate(() => window.__densityProbe());
    fs.appendFileSync(path.join(OUT, `density_w${w}.jsonl`), JSON.stringify({ f: job.f, ...d }) + "\n");
  }
  await page.screenshot({ path: path.join(OUT, `${name}.jpg`), type: "jpeg", quality: Q, clip: { x: 0, y: 0, width: 1080, height: 1920, scale } });
}
fs.writeFileSync(path.join(OUT, `errors_w${w}.json`), JSON.stringify(errors, null, 1));
console.log(`worker ${w}/${nw}: ${jobs.length} stills in ${((Date.now() - t0) / 1000).toFixed(0)} s, ${errors.length} error(s)`);
await browser.close(); srv.close(); process.exit(0);
