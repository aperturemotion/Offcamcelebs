// studio_artifact.mjs: a static, read-only copy of the RUNNING HyperFrames Studio for this film, for a claude.ai artifact.
//   node scratchpad/studio_artifact.mjs <outDir> [--port 3176]
// The Studio itself (its own UI bundle, unchanged) is mirrored with every server answer it asks for on opening the project.
// A small shim maps the Studio's /api/ requests to those saved answers. Writes from the Studio (edits) are refused with a
// "read-only copy" error; edits are made in the source and this is re-run, then the artifact is republished.
// Rebuild first (node scripts/build.mjs) and keep the Studio running on --port (npx hyperframes preview --background).
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";

const film = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const out = path.resolve(process.argv[2] || "studio-artifact");
const port = process.argv.includes("--port") ? process.argv[process.argv.indexOf("--port") + 1] : "3176";
const id = JSON.parse(fs.readFileSync(path.join(film, "meta.json"), "utf8")).id;
const origin = `http://127.0.0.1:${port}`;
const chrome = process.env.HF_CHROME || "/opt/pw-browsers/chromium-1243/chrome-linux64/chrome";
const puppeteer = createRequire(path.join(film, "package.json"))("puppeteer-core");

// 1. open the project in the Studio and record every GET it makes
const browser = await puppeteer.launch({ executablePath: chrome, args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-unsafe-swiftshader", "--autoplay-policy=no-user-gesture-required"] });
const seen = new Set();
const watch = (pg) => pg.on("request", (r) => { const u = r.url(); if (u.startsWith(origin) && r.method() === "GET") seen.add(u.slice(origin.length)); });
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 1000 });
watch(page);
await page.goto(`${origin}/#project/${id}`, { waitUntil: "networkidle2", timeout: 180000 }).catch(() => {});
await new Promise((r) => setTimeout(r, 20000));
await browser.close();

// 2. fetch each one in full and lay them out
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
const files = {};
const manifest = {};      // "/api/...?q" → saved file (relative to the artifact root)
const put = (rel, data) => { const p = path.join(out, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, data); files[rel] = rel; };
const get = async (u) => { const r = await fetch(origin + u); return { ok: r.ok, status: r.status, type: r.headers.get("content-type") || "", body: Buffer.from(await r.arrayBuffer()) }; };
const ext = (type) => /json/.test(type) ? ".json" : /html/.test(type) ? ".html" : /jpeg/.test(type) ? ".jpg" : /png/.test(type) ? ".png" : /javascript/.test(type) ? ".js" : /wav/.test(type) ? ".wav" : /woff2/.test(type) ? ".woff2" : ".bin";
const pvPrefix = `/api/projects/${id}/preview`;

// the Studio's own bundle: every chunk reachable from the page
const queue = new Set([...seen].filter((u) => u.startsWith("/assets/")));
for (const u of queue) {
  const r = await get(u); if (!r.ok) throw new Error(`${u}: ${r.status}`);
  // the artifact host refuses a literal U+FFFD; in the bundle it only sits inside string literals, where the escape is the same
  put(u.slice(1), u.endsWith(".js") ? r.body.toString("utf8").replaceAll("�", "\\uFFFD") : r.body);
  if (u.endsWith(".js")) for (const m of r.body.toString().matchAll(/import\("\.\/([^"]+\.js)"\)/g)) queue.add(`/assets/${m[1]}`);
}
for (const u of ["/favicon.svg"]) { const r = await get(u); if (r.ok) put(u.slice(1), r.body); }

const shim = (base) => `<script>/* artifact shim: the Studio's server answers, from saved files (read-only copy) */
(() => {
  const M = ${JSON.stringify(manifest)};
  const BASE = new URL(${JSON.stringify(base)}, location.href);
  const PV = ${JSON.stringify(pvPrefix)};
  const local = (u) => { try { const x = new URL(u, location.href); return x.origin === location.origin && x.pathname.startsWith("/api/") ? x.pathname + x.search : null; } catch { return null; } };
  const thumbs = Object.keys(M).filter((k) => k.includes("/thumbnail/") && M[k]);
  const map = (u) => {
    const k = local(u); if (!k) return null;
    if (k in M) return M[k] ? new URL(M[k], BASE).href : "";
    const p = k.split("?")[0];
    if (p in M && M[p]) return new URL(M[p], BASE).href;
    if (p === PV || p === PV + "/") return new URL("pv/index.html" + (k.includes("?") ? k.slice(k.indexOf("?")) : ""), BASE).href;
    if (p.startsWith(PV + "/")) {
      // the Studio rebuilds media URLs from the element's own path, which already carries the copy's folder: keep what follows pv/
      let rest = p.slice(PV.length + 1); const i = rest.lastIndexOf("pv/assets/"); if (i >= 0) rest = rest.slice(i + 3);
      return new URL("pv/" + rest, BASE).href;
    }
    if (p === "/api/runtime.js") return new URL("pv/runtime.js", BASE).href;
    if (p.includes("/thumbnail/") && thumbs.length) {   // nearest saved thumbnail of the same layer
      const q = new URLSearchParams(k.split("?")[1] || ""), t = +q.get("t") || 0, sel = q.get("selector") || "";
      let best = null, bd = 1e9;
      for (const c of thumbs) { const cq = new URLSearchParams(c.split("?")[1] || ""); if ((cq.get("selector") || "") !== sel) continue; const d = Math.abs((+cq.get("t") || 0) - t); if (d < bd) { bd = d; best = c; } }
      if (best) return new URL(M[best], BASE).href;
    }
    return "";
  };
  const RO = { error: "This is a read-only copy of the HyperFrames Studio, published as an artifact. Changes are made in the project and republished." };
  const of = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const u = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
    const method = ((init && init.method) || (input && input.method) || "GET").toUpperCase();
    if (!local(u)) return of(input, init);
    if (method !== "GET" && method !== "HEAD") {
      const ok = /\\/selection$/.test(local(u).split("?")[0]);
      return Promise.resolve(new Response(JSON.stringify(ok ? {} : RO), { status: ok ? 200 : 403, headers: { "content-type": "application/json" } }));
    }
    const m = map(u);
    if (!m) return Promise.resolve(new Response(JSON.stringify({ error: "not in the artifact copy" }), { status: 404, headers: { "content-type": "application/json" } }));
    return of(m, init && { ...init, method: "GET" });
  };
  const XO = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (m, u, ...r) { const x = local(String(u)) && map(String(u)); return XO.call(this, m, x || u, ...r); };
  class QuietSource extends EventTarget { constructor(u) { super(); this.url = u; this.readyState = 1; this.onmessage = null; this.onerror = null; this.onopen = null; } close() { this.readyState = 2; } }
  QuietSource.CONNECTING = 0; QuietSource.OPEN = 1; QuietSource.CLOSED = 2;
  const ES = window.EventSource;
  window.EventSource = function (u, o) { return local(String(u)) ? new QuietSource(u) : new ES(u, o); };
  for (const C of [HTMLIFrameElement, HTMLImageElement, HTMLMediaElement, HTMLSourceElement, HTMLScriptElement]) {
    const d = Object.getOwnPropertyDescriptor(C.prototype, "src"); if (!d) continue;
    Object.defineProperty(C.prototype, "src", { ...d, set(v) { const m = local(String(v)) && map(String(v)); d.set.call(this, m || v); } });
  }
  const SA = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (n, v) { if ((n === "src" || n === "href") && local(String(v))) { const m = map(String(v)); if (m) v = m; } return SA.call(this, n, v); };
  ${base === "./" ? `if (!/^#project\\//.test(location.hash)) history.replaceState(null, "", "#project/${id}");` : ""}
})();
</script>`;

// the server's answers
for (const u of [...seen].sort()) {
  if (u.startsWith("/assets/") || u === "/" || u.startsWith("/#") || u === "/favicon.svg") continue;
  const p = u.split("?")[0];
  if (p === pvPrefix || p === pvPrefix + "/" || p.startsWith(pvPrefix + "/") || p === "/api/runtime.js" || p === "/api/events") continue;
  const r = await get(u);
  if (r.status === 204) { manifest[u] = ""; continue; }
  if (!r.ok) { console.warn(`skip ${u}: ${r.status}`); continue; }
  const rel = `api/${crypto.createHash("sha1").update(u).digest("hex").slice(0, 16)}${ext(r.type)}`;
  put(rel, r.body); manifest[u] = rel;
}

// the preview (the film itself), its runtime and its assets, as a real folder so relative paths resolve
const pv = await get(pvPrefix);
let pvHtml = pv.body.toString().replace(/<base [^>]*>/, "").replaceAll('"/api/runtime.js"', '"runtime.js"');
pvHtml = pvHtml.replace(/<head>/i, `<head>${shim("../")}`);
put("pv/index.html", pvHtml);
put("pv/runtime.js", (await get("/api/runtime.js")).body);
const pvAssets = new Set([...seen].filter((u) => u.startsWith(pvPrefix + "/assets/")).map((u) => u.split("?")[0].slice(pvPrefix.length + 1)));
for (const m of pvHtml.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)) pvAssets.add(m[1]);
for (const a of pvAssets) { const src = path.join(film, decodeURIComponent(a)); if (!fs.existsSync(src)) { console.warn(`missing ${a}`); continue; } put(`pv/${decodeURIComponent(a)}`, fs.readFileSync(src)); }

// the page: the Studio's own index.html, unwrapped for the artifact skeleton, with the shim first
let idx = (await get("/")).body.toString();
const head = idx.match(/<head>([\s\S]*?)<\/head>/i)[1], body = idx.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1];
let pageHtml = `<title>OffCamCelebs ${id.split("-")[0]} Studio</title>\n` + shim("./") + "\n" +
  head.replace(/<meta charset[^>]*>|<meta name="viewport"[^>]*>|<title>[^<]*<\/title>/gi, "")
    .replace(/window\.__HF_CLI_TELEMETRY_DISABLED=false/, "window.__HF_CLI_TELEMETRY_DISABLED=true")
    .replaceAll('src="/assets/', 'src="./assets/').replaceAll('href="/assets/', 'href="./assets/').replaceAll('href="/favicon.svg"', 'href="./favicon.svg"')
  + "\n" + body;
fs.writeFileSync(path.join(out, "index.html"), pageHtml);
fs.writeFileSync(path.join(out, "files.json"), JSON.stringify(files, null, 1));
const bytes = Object.keys(files).reduce((s, f) => s + fs.statSync(path.join(out, f)).size, 0) + Buffer.byteLength(pageHtml);
console.log(`studio artifact → ${out} | ${Object.keys(files).length} files + page, ${(bytes / 1e6).toFixed(1)} MB | ${Object.keys(manifest).length} saved answers`);
