// densitycanary.mjs (2026-11-20, 038, P17) — proves the TEXT-DENSITY probe (scratchpad/densityprobe.js) can fire.
//   On a real frame (f120, the sign: one label and one figure) it plants, in front of the camera:
//     two big labels on two separate plates          → the count must go OVER (2+ labels)
//     a tiny label (cap ≈ 6 px)                       → must NOT count
//     a big label hidden behind a solid box          → must NOT count (occluded)
//     a big label turned away from the camera        → must NOT count
//   and the frame as drawn must stay within one label and one figure. Prints "canary ok" or what failed.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
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
const r = await page.evaluate(() => {
  window.__film.draw(120 / 30);
  const base = window.__densityProbe();
  const { THREE, camera, group } = window.__worldDebug;
  const cam = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld), dir = new THREE.Vector3(); camera.getWorldDirection(dir);
  const right = new THREE.Vector3().crossVectors(dir, camera.up).normalize(), up = new THREE.Vector3().crossVectors(right, dir).normalize();
  const planted = [];
  /** a fake text: a thin box carrying the text registration (the probe reads userData and the meshes' bounds) */
  const fake = (str, size, at, turn = false) => {
    const plate = new THREE.Group(); plate.name = "canary plate " + str;
    const t = new THREE.Group(); t.userData.isText = true; t.userData.textStr = str; t.userData.textSize = size;
    const m = new THREE.Mesh(new THREE.BoxGeometry(size * str.length * 0.6, size * 0.69, 2), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    m.position.y = size * 0.345; t.add(m); plate.add(t);
    plate.position.copy(at); plate.lookAt(turn ? at.clone().sub(cam).add(at) : cam);
    group.add(plate); planted.push(plate); plate.updateMatrixWorld(true);
    return plate;
  };
  const P = (d, x, y) => cam.clone().addScaledVector(dir, d).addScaledVector(right, x).addScaledVector(up, y);
  // two big labels (≈ 40 px caps at 1,000 units)
  fake("CANARY ONE", 60, P(1000, -150, -200));
  fake("CANARY TWO", 60, P(1000, 150, -350));
  const over = window.__densityProbe();
  for (const p of planted.splice(0)) p.removeFromParent();
  // a tiny one, a hidden one, a turned-away one
  fake("TINY", 8, P(1000, 0, -300));
  fake("HIDDEN", 60, P(1400, 0, -300));
  const wall = new THREE.Mesh(new THREE.BoxGeometry(900, 600, 20), new THREE.MeshStandardMaterial()); wall.position.copy(P(1000, 0, -300)); wall.lookAt(cam); group.add(wall); planted.push(wall); wall.updateMatrixWorld(true);
  fake("AWAY", 60, P(900, 200, 100), true);
  const quiet = window.__densityProbe();
  for (const p of planted.splice(0)) p.removeFromParent();
  return { base: { l: base.labels, f: base.figures }, over: { l: over.labels, f: over.figures }, quiet: { l: quiet.labels, f: quiet.figures, t: quiet.texts.filter((x) => /TINY|HIDDEN|AWAY/.test(x.str)) } };
});
const bad = [];
if (r.base.l.length > 1 || r.base.f.length > 1) bad.push(`the plain frame f120 counted ${JSON.stringify(r.base)}`);
if (r.over.l.length < 3) bad.push(`two planted labels gave labels ${JSON.stringify(r.over.l)} (expected the frame's own + 2)`);
for (const t of r.quiet.t) if (t.readable) bad.push(`"${t.str}" counted as readable (${JSON.stringify(t)})`);
if (r.quiet.t.length !== 3) bad.push(`the quiet plants were not all seen by the probe: ${JSON.stringify(r.quiet.t)}`);
console.log(bad.length ? "TEXT DENSITY canary FAILED:\n  " + bad.join("\n  ") : `canary ok (two planted labels fire: ${r.over.l.join(" / ")}; a 6-px label, an occluded one and a turned-away one do not)`);
await browser.close(); srv.close(); process.exit(bad.length ? 1 : 0);
