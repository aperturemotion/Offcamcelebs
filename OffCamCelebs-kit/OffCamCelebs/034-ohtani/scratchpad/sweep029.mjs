// sweep029.mjs — RULE 54's frame sweep: the film drawn frame by frame in HyperFrames' own headless Chrome (swiftshader,
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
const [mode = "frames", A = "0", B = "10", STEP = "1", OUT = "C:/tmp/sweep", SCALE] = process.argv.slice(2);
const a = Number(A), b = Number(B), step = Number(STEP);
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

const draw = (f) => page.evaluate((t) => { window.__film.draw(t); return true; }, f / 30);
const auditFrame = (f, cfg) => page.evaluate((t, cfg) => { window.__g3cfg = cfg; window.__g3out = []; window.__film.draw(t); const o = window.__g3out; window.__g3cfg = undefined; return o; }, f / 30, cfg);
if (mode === "audit" || mode === "float") {
  const can = await auditFrame(a, { canary: "1" });
  const c = can.find((x) => x.kind === "canary");
  console.log("canaries", JSON.stringify(c));
  if (!c || Object.entries(c).some(([k, v]) => k !== "kind" && k !== "ratios" && v !== true)) { console.log("REFUSED: a canary failed"); process.exit(2); }
}
// the lighting lab: LIGHT='{"key":4}' overrides the stage's light (stage.ts LIGHT) for every frame drawn
if (process.env.LIGHT) await page.evaluate((l) => { window.__g3light = JSON.parse(l); }, process.env.LIGHT);
// HIDE='["env back"]' draws those objects invisible (needs AUDIT=1): which part casts a stray shadow
if (process.env.FLAGS) await page.evaluate((h) => { window.__v34flags = JSON.parse(h); }, process.env.FLAGS);
// CAM='{"x":1600,"y":900,"z":4}' holds every place's camera there (camera.tsx camView): a close look at one part
if (process.env.CAM) await page.evaluate((c) => { window.__camOverride = JSON.parse(c); }, process.env.CAM);
if (process.env.HIDE) await page.evaluate((h) => { window.__g3hide = JSON.parse(h); }, process.env.HIDE);
// `lab` mode: only the frames in FRAMES="300,520,…", each drawn once with the shade audit (needs AUDIT=1) and saved as a JPEG
if (mode === "lab") {
  for (const f of process.env.FRAMES.split(",").map(Number)) {
    cur = f;
    const out = await auditFrame(f, { shade: true });
    for (const o of out) fs.appendFileSync(path.join(OUT, "lab.jsonl"), JSON.stringify({ f, light: process.env.LIGHT ?? "", ...o }) + "\n");
    await page.screenshot({ path: path.join(OUT, `f${String(f).padStart(4, "0")}.jpg`), type: "jpeg", quality: 92, clip: { x: 0, y: 0, width: 1080, height: 1920, scale } });
  }
  await browser.close(); srv.close(); process.exit(0);
}
// `float` mode (needs AUDIT=1): the canaries above, then the FLOAT check (g3audit.ts: a part touching nothing) on the
//   SETTLED frames in FRAMES="…" → <outDir>/float.jsonl. Added 2026-10-12 (030: "the camera visual has a floating piece").
if (mode === "float") {
  let n = 0;
  for (const f of process.env.FRAMES.split(",").map(Number)) {
    cur = f;
    const out = await auditFrame(f, { float: true });
    for (const o of out) { n++; fs.appendFileSync(path.join(OUT, "float.jsonl"), JSON.stringify({ f, ...o }) + "\n"); }
  }
  console.log(`float: ${n} floating piece(s) on ${process.env.FRAMES.split(",").length} frames`);
  await browser.close(); srv.close(); process.exit(0);
}
const t0 = Date.now();
const mounted = {};
for (let f = a; f <= b; f += step) {
  cur = f;
  const tag = String(f).padStart(4, "0");
  if (mode === "audit") {
    const every = Number(SCALE ?? 15);
    const out = await auditFrame(f, { edges: true, pen: true, shade: (f % every) === 0 });
    for (const o of out) fs.appendFileSync(path.join(OUT, "audit.jsonl"), JSON.stringify({ f, ...o }) + "\n");
  } else if (mode === "viol") {
    // ★ (032, the user: "full intersection and violation sweep") the SCREEN's rules, which the 3-D audit cannot see: every
    //   visible caption word's box (DOM), and the frame's OBJECTS alone (captions and the ground hidden, the page
    //   transparent: the places' own alpha), for scratchpad/viol032.py to judge. On the run's first frame two canaries go
    //   in first, each a solid block put into the first mounted place layer: one inside the caption band (it must fire), one
    //   low in the frame (it must not). They are drawn, captured as f<a>_canaryHit / _canaryMiss, and removed.
    await draw(f);
    const caps = await page.evaluate(() => {
      const out = [];
      for (const beat of document.querySelectorAll("[data-cap]")) {
        let o = 1;
        for (let n = beat; n && n !== document.body; n = n.parentElement) o *= parseFloat(getComputedStyle(n).opacity || "1");
        for (const sp of beat.querySelectorAll("span")) {
          const so = parseFloat(sp.style.opacity || "1");
          const r = sp.getBoundingClientRect();
          if (o * so < 0.05 || r.width < 1 || getComputedStyle(sp).visibility === "hidden") continue;
          out.push({ t: sp.textContent, x0: r.left, y0: r.top, x1: r.right, y1: r.bottom, op: +(o * so).toFixed(3), layer: beat.closest("[data-film-layer]")?.dataset.filmLayer });
        }
      }
      return out;
    });
    const objectsOnly = (on) => page.evaluate((on) => {
      document.documentElement.style.background = on ? "transparent" : ""; document.body.style.background = on ? "transparent" : "";
      document.getElementById("root").style.background = on ? "transparent" : "";
      for (const el of document.querySelectorAll("[data-cap]")) el.style.visibility = on ? "hidden" : "";
      for (const el of document.querySelectorAll("[data-film-layer]")) if (el.dataset.filmLayer === "ground") el.style.visibility = on ? "hidden" : "";
    }, on);
    const shot = (name) => page.screenshot({ path: path.join(OUT, `${name}.png`), omitBackground: true, clip: { x: 0, y: 0, width: 1080, height: 1920, scale } });
    await objectsOnly(true);
    if (f === a) {
      for (const [nm, y] of [["canaryHit", 470], ["canaryMiss", 1160]]) {
        await page.evaluate((y) => {
          const host = Array.from(document.querySelectorAll("[data-film-layer]")).find((el) => el.dataset.filmLayer !== "ground" && el.childNodes.length > 0);
          const d = document.createElement("div"); d.id = "__violcanary";
          d.style.cssText = `position:absolute;left:380px;top:${y}px;width:320px;height:80px;background:#000;z-index:99`;
          host.appendChild(d);
        }, y);
        await shot(`f${tag}_${nm}`);
        await page.evaluate(() => document.getElementById("__violcanary")?.remove());
      }
    }
    await shot(`f${tag}`);
    await objectsOnly(false);
    fs.appendFileSync(path.join(OUT, "caps.jsonl"), JSON.stringify({ f, caps }) + "\n");
  } else if (mode === "frames") {
    await draw(f);
    await page.screenshot({ path: path.join(OUT, `f${tag}.jpg`), type: "jpeg", quality: 92,
      clip: { x: 0, y: 0, width: 1080, height: 1920, scale } });
  } else {
    await draw(f);
    // each mounted place layer alone, on a transparent page: its alpha is where it covers the frame
    const ids = await page.evaluate(() => Array.from(document.querySelectorAll("[data-film-layer]"))
      .filter((el) => el.dataset.filmLayer !== "ground" && el.childNodes.length > 0).map((el) => el.dataset.filmLayer));
    mounted[f] = ids;
    for (const id of ids) {
      await page.evaluate((id) => {
        document.documentElement.style.background = "transparent"; document.body.style.background = "transparent";
        document.getElementById("root").style.background = "transparent";
        for (const el of document.querySelectorAll("[data-film-layer]")) el.style.visibility = el.dataset.filmLayer === id ? "visible" : "hidden";
      }, id);
      await page.screenshot({ path: path.join(OUT, `f${tag}_${id}.png`), omitBackground: true,
        clip: { x: 0, y: 0, width: 1080, height: 1920, scale } });
    }
    await page.evaluate(() => { for (const el of document.querySelectorAll("[data-film-layer]")) el.style.visibility = ""; });
  }
  if ((f - a) % (step * 50) === 0) console.log(`f${f}  ${((Date.now() - t0) / 1000).toFixed(0)} s`);
}
if (mode === "layers") fs.writeFileSync(path.join(OUT, "layers.json"), JSON.stringify(mounted));
fs.writeFileSync(path.join(OUT, "errors.json"), JSON.stringify(errors, null, 1));
console.log(`done ${a}..${b} step ${step}: ${((Date.now() - t0) / 1000).toFixed(0)} s, ${errors.length} console error(s)`);
await browser.close();
srv.close();
