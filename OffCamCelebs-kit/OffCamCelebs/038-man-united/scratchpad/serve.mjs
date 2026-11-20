// serve.mjs — serves the rendered MP4 with range requests (so it plays and scrubs in a browser), plus a small
// page with the player and a Download button. ?dl=1 sends the file as an attachment.
//   node scratchpad/serve.mjs [port] [file]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.argv[2] || 4173); // this project's serve port (its Studio is 3176; 033's server owns 4172)
const FILE = path.resolve(here, "..", process.argv[3] || "renders/two_million_a_year_034_hf.mp4");
const NAME = path.basename(FILE);

const page = () => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${NAME}</title>
<style>
  :root { color-scheme: dark; }
  body { margin: 0; min-height: 100vh; background: #0a0a0a; color: #fff; font: 500 16px/1.4 system-ui, sans-serif;
         display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding: 24px 16px; box-sizing: border-box; }
  video { max-height: 78vh; max-width: 100%; aspect-ratio: 9 / 16; background: #000; border-radius: 12px; }
  a.dl { display: inline-block; padding: 14px 30px; border-radius: 999px; background: #e8e8e8; color: #111; text-decoration: none; font-weight: 700; }
  a.dl:hover { background: #fff; }
  .meta { opacity: 0.6; font-size: 14px; }
</style></head>
<body>
  <video src="/video/${encodeURIComponent(NAME)}" controls playsinline preload="metadata"></video>
  <a class="dl" href="/video/${encodeURIComponent(NAME)}?dl=1" download="${NAME}">Download MP4</a>
  <div class="meta">${NAME}, ${(fs.statSync(FILE).size / 1048576).toFixed(1)} MB, 1080×1920</div>
</body></html>`;

http
  .createServer((req, res) => {
    const url = new URL(req.url, "http://x");
    if (url.pathname === "/" || url.pathname === "/index.html") {
      res.writeHead(200, { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" });
      return res.end(page());
    }
    if (!url.pathname.startsWith("/video/")) {
      res.writeHead(404);
      return res.end("not found");
    }
    const size = fs.statSync(FILE).size;
    const headers = { "content-type": "video/mp4", "accept-ranges": "bytes", "cache-control": "no-store" };
    if (url.searchParams.get("dl")) headers["content-disposition"] = `attachment; filename="${NAME}"`;
    const m = /bytes=(\d*)-(\d*)/.exec(req.headers.range || "");
    if (m) {
      const start = m[1] ? Number(m[1]) : size - Number(m[2]);
      const end = m[1] && m[2] ? Math.min(Number(m[2]), size - 1) : size - 1;
      res.writeHead(206, { ...headers, "content-range": `bytes ${start}-${end}/${size}`, "content-length": end - start + 1 });
      return fs.createReadStream(FILE, { start, end }).pipe(res);
    }
    res.writeHead(200, { ...headers, "content-length": size });
    fs.createReadStream(FILE).pipe(res);
  })
  .listen(PORT, "127.0.0.1", () => console.log(`serving ${FILE} on http://127.0.0.1:${PORT}/`));
