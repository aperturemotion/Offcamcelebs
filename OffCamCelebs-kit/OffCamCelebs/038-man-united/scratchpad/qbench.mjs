// qbench.mjs (2026-11-21) — times the world's preview qualities (world.ts: full / fast / flat / clay × resolution) on the
//   same frames in headless Chrome, and saves one still per quality for a comparison sheet.
//   node scratchpad/qbench.mjs <outDir> [frames=15,150,...]
import http from "node:http"; import fs from "node:fs"; import path from "node:path";
import { fileURLToPath } from "node:url"; import { createRequire } from "node:module";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const puppeteer = createRequire(import.meta.url)("puppeteer-core");
const [OUT = "out/qbench", FR = "15,150,300,450,570,660,840,1000,1110,1300,1530,1650"] = process.argv.slice(2);
const frames = FR.split(",").map(Number);
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2", ".png": "image/png", ".jpg": "image/jpeg", ".wav": "audio/wav", ".json": "application/json" };
const srv = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "content-type": TYPES[path.extname(p)] || "application/octet-stream" }); fs.createReadStream(p).pipe(res);
}).listen(0, "127.0.0.1");
await new Promise((r) => srv.once("listening", r));
const browser = await puppeteer.launch({ executablePath: process.env.HF_CHROME, headless: true, protocolTimeout: 0,
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1080, height: 1920 });
page.on("pageerror", (e) => console.log("pageerror", String(e)));
page.on("console", (m) => { if (m.type() === "error") console.log("console", m.text()); });
await page.goto(`http://127.0.0.1:${srv.address().port}/index.html`, { waitUntil: "load", timeout: 0 });
await page.evaluate(async () => { await document.fonts.ready; await Promise.all(Object.values(window.__hf?.buildReady ?? {})); });
const dflt = await page.evaluate(() => { window.__film.draw(0.5); return { webdriver: navigator.webdriver, ...window.__worldStats }; });
console.log("under automation, default:", JSON.stringify(dflt));
const MODES = JSON.parse(process.env.MODES || '[["full",1],["fast",1],["fast",0.5],["flat",0.5],["clay",0.5]]');
// build every place once first, so no mode pays the one-time build
await page.evaluate((fs_) => { window.__world = { quality: "flat", res: 0.5 }; for (const f of fs_) window.__film.draw(f / 30); }, frames);
const rows = [];
await page.evaluate((x) => { window.__benchExtra = x; }, JSON.parse(process.env.EXTRA || "{}"));
for (const [q, res] of MODES) {
  const r = await page.evaluate((fs_, q, res) => {
    window.__world = { quality: q, res, ...(window.__benchExtra || {}) };
    window.__film.draw(fs_[0] / 30 + 1 / 30);   // warm: compile this quality's shaders
    const per = [];
    // ★ WebGL returns before the GPU is done: a 1-pixel readPixels makes the time include the drawing. Each frame is drawn
    //   once untimed first (its shaders compiled), then timed.
    const px = new Uint8Array(4);
    const sync = () => { const g = window.__worldDebug.renderer.getContext(); g.readPixels(0, 0, 1, 1, g.RGBA, g.UNSIGNED_BYTE, px); };
    for (const f of fs_) {
      window.__film.draw(f / 30 + 1 / 30); sync();
      const t0 = performance.now(); window.__film.draw(f / 30); sync();
      const ms = performance.now() - t0;
      per.push({ f, page: ms, world: ms, n: window.__worldStats.samples });
    }
    return per;
  }, frames, q, res);
  // the GPU may still be busy after the JS returns: a screenshot forces the frame out
  for (const f of [300, 660, 1110]) {
    await page.evaluate((t) => window.__film.draw(t), f / 30);
    await page.screenshot({ path: `${OUT}/${q}_${res}_f${f}.jpg`, type: "jpeg", quality: 85, clip: { x: 0, y: 0, width: 1080, height: 1920 } });
  }
  const tot = r.reduce((a, x) => a + x.world, 0) / r.length, worst = Math.max(...r.map((x) => x.world));
  rows.push({ q, res, avgMs: Math.round(tot), worstMs: Math.round(worst), per: r.map((x) => `${x.f}:${Math.round(x.world)}${x.n > 1 ? "×" + x.n : ""}`).join(" ") });
  console.log(`${q.padEnd(5)} res ${res}: avg ${Math.round(tot)} ms, worst ${Math.round(worst)} ms   ${rows.at(-1).per}`);
}
fs.writeFileSync(`${OUT}/bench.json`, JSON.stringify({ dflt, rows }, null, 1));
await browser.close(); srv.close(); process.exit(0);
