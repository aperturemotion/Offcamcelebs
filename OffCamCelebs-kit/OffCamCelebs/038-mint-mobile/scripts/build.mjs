// ══════════════════════════════════════════════════════════════════════════════════════════════
// BUILD — `node scripts/build.mjs` (the V34 HF pattern, as HyperFrames/02-oil-world-price)
//   1. bundles the film (src/hf/driver.tsx: the 029 kit, Preact, the Three.js stage) → assets/film.js
//   2. bundles the plan (src/hf/plan.ts) for Node and runs it: every layer's frames, every SFX cue, the bed's level curve
//   3. writes index.html — the HyperFrames composition: one timed clip per layer (Studio reads it place by place), the
//      voice, the bed and one <audio> clip per SFX cue
// index.html is GENERATED: edit the film (src/r45, src/hf) or this script, never the HTML by hand.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import * as esbuild from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const r = (...p) => path.join(ROOT, ...p);
const watch = process.argv.includes("--watch");

const common = {
  bundle: true,
  jsx: "automatic",
  jsxImportSource: "preact",
  alias: { react: "preact/compat", "react-dom": "preact/compat", "react/jsx-runtime": "preact/jsx-runtime", remotion: r("src/shim/remotion.tsx"), "@remotion/layout-utils": r("src/shim/layout-utils.ts") },
  loader: { ".json": "json" },
  logLevel: "warning",
  target: "es2020",
};
const browserOpts = { ...common, entryPoints: [r("src/hf/driver.tsx")], outfile: r("assets/film.js"), format: "iife", platform: "browser", minify: true, sourcemap: false, legalComments: "eof" };

// ── the plan, for Node ──
const planOut = r(".build/plan.mjs");
await esbuild.build({ ...common, entryPoints: [r("src/hf/plan.ts")], outfile: planOut, format: "esm", platform: "node" });
const { plan } = await import(pathToFileURL(planOut).href + `?t=${Date.now()}`);
const P = plan();

const FPS = P.fps;
const sec = (f) => +(f / FPS).toFixed(6);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// ★ MIX PARITY (CLAUDE.md, V34 HF's first render): a MONO source goes to both channels at full level in HyperFrames, while
// Remotion applies a −3 dB pan law. The voice and every SFX file are mono (×√½); the bed is stereo (×1). A `volume`
// automation lane IS the clip's level (0..1), so a faded cue's lane carries its whole gain.
const MONO_PAN = Math.SQRT1_2;
// each file's own length in frames, read off its WAV header: a clip never claims a slot longer than its media (the check's
// clip_media_fit; HyperFrames would shorten it at render anyway)
const wavFrames = (file) => {
  const b = fs.readFileSync(file);
  let off = 12, rate = 0, dataLen = 0;
  while (off + 8 <= b.length) {
    const id = b.toString("ascii", off, off + 4), len = b.readUInt32LE(off + 4);
    if (id === "fmt ") rate = b.readUInt32LE(off + 8 + 8);          // byte rate
    if (id === "data") { dataLen = len; break; }
    off += 8 + len + (len % 2);
  }
  if (!rate || !dataLen) throw new Error(`build: cannot read the WAV header of ${file}`);
  // ★ (2026-10-11, 030) EXACT frames, never floored: tick.wav is 14 ms (0.42 f), floored to 0, and every tick cue was
  //   dropped without a word (029 HF's four window ticks too). A clip's duration is written in seconds, so a fraction is fine.
  return (dataLen / rate) * FPS;
};
const SFX_FILE_FRAMES = {};
const cueClips = [];
for (const c of P.cues) {
  const lead = c.lead ?? 0;
  const at0 = Math.round(c.at) - lead;
  const trim = Math.max(0, -at0);
  const from = Math.max(0, at0);
  // ★ a score cue that cannot be placed is a DEFECT, never a silent skip (fail closed: the build refuses and names it)
  if (from >= P.total) throw new Error(`build: SFX cue "${c.why}" (${c.s}) starts at f${from}, past the film's end (f${P.total})`);
  SFX_FILE_FRAMES[c.s] ??= wavFrames(r(`assets/audio/sfx/${c.s}.wav`));
  const dur = Math.min((c.dur ?? c.len) - trim, P.total - from, SFX_FILE_FRAMES[c.s] - trim);
  if (!(dur > 0)) throw new Error(`build: SFX cue "${c.why}" (${c.s}) at f${from} has no duration left (${dur} f): it would be dropped`);
  const base = c.gain * (c.vol ?? 1) * MONO_PAN;
  const fade = c.fade ?? 0;
  let automation = null;
  if (fade > 0) {
    const pts = [];
    for (let f = 0; f <= dur; f++) if (f === 0 || f >= dur - fade) pts.push({ t: +(f / FPS).toFixed(4), v: +(base * Math.max(0, Math.min(1, (dur - f) / fade))).toFixed(5) });
    automation = { version: 1, lanes: [{ target: "volume", points: pts }] };
  }
  cueClips.push({ s: c.s, from, dur, mediaStart: trim, volume: +base.toFixed(4), automation, why: c.why });
}
const lanesEnd = [];
for (const k of cueClips.sort((a, b) => a.from - b.from)) {
  let li = lanesEnd.findIndex((e) => e <= k.from);
  if (li < 0) { li = lanesEnd.length; lanesEnd.push(0); }
  lanesEnd[li] = k.from + k.dur;
  k.lane = li;
}

const TRACK = { audioVO: 20, audioBed: 21, sfx0: 22 };
const total = sec(P.total);
const floor6 = (f) => Math.floor((f / FPS) * 1e6) / 1e6, ceil6 = (f) => Math.ceil((f / FPS) * 1e6) / 1e6;
const layerHtml = P.layers.map((L) => {
  const id = "L-" + L.id.replace(/[^a-z0-9]+/gi, "-");
  const s0 = floor6(L.from), d0 = Math.ceil((ceil6(L.to) - s0) * 1e6) / 1e6;
  return `      <div id="${id}" class="clip film-layer" data-start="${s0}" data-duration="${d0}" data-track-index="${L.track}" data-film-layer="${esc(L.id)}" title="${esc(L.label)}" style="z-index: ${L.z}"></div>`;
}).join("\n");
const sfxHtml = cueClips.map((k, i) => {
  const auto = k.automation ? ` data-automation="${esc(JSON.stringify(k.automation))}"` : "";
  return `      <audio id="sfx-${String(i + 1).padStart(3, "0")}-${k.s}" src="assets/audio/sfx/${k.s}.wav" data-start="${sec(k.from)}" data-duration="${sec(k.dur)}"${k.mediaStart ? ` data-media-start="${sec(k.mediaStart)}"` : ""} data-track-index="${TRACK.sfx0 + k.lane}" data-volume="${k.volume}" title="${esc(k.why)}"${auto}></audio>`;
}).join("\n");

// the voice (mono: ×√½ on top of the film's own +2 dB)
const voVol = +(P.vo.gain * MONO_PAN).toFixed(4);
const voLen = P.has.vo ? Math.min(P.total, wavFrames(r("assets/audio/vo_leveled.wav")) - P.vo.skip) : 0;
const voHtml = !P.has.vo ? "      <!-- the voice: not wired yet (data.ts HAS_VO) -->" : `      <audio id="vo" src="assets/audio/vo_leveled.wav" data-start="0"${P.vo.skip ? ` data-media-start="${sec(P.vo.skip)}"` : ""} data-duration="${sec(voLen)}" data-track-index="${TRACK.audioVO}" data-volume="${voVol}"></audio>`;
// the bed: Runaway's cut (its drop on "Now"), at the film's measured level curve (stereo: no pan law)
const bedAuto = { version: 1, lanes: [{ target: "volume", points: P.bed }] };
const bedPeak = Math.max(...P.bed.map((p) => p.v));

const html = `<!doctype html>
<html lang="en" data-resolution="portrait">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1080, height=1920" />
    <!-- GENERATED by scripts/build.mjs from the film's own plan (src/hf/plan.ts). Do not edit by hand. -->
    <title>Every Dollar (OffCamCelebs 038)</title>
    <script src="assets/vendor/gsap.min.js"></script>
    <style>
      /* the film's face, shipped locally (Archivo, OFL) */
      @font-face { font-family: "Archivo"; src: url("assets/fonts/archivo-latin-300-italic.woff2") format("woff2"); font-weight: 300; font-style: italic; }
      @font-face { font-family: "Archivo"; src: url("assets/fonts/archivo-latin-500-normal.woff2") format("woff2"); font-weight: 500; font-style: normal; }
      @font-face { font-family: "Archivo"; src: url("assets/fonts/archivo-latin-600-normal.woff2") format("woff2"); font-weight: 600; font-style: normal; }
      @font-face { font-family: "Archivo"; src: url("assets/fonts/archivo-latin-700-normal.woff2") format("woff2"); font-weight: 700; font-style: normal; }
      @font-face { font-family: "Archivo"; src: url("assets/fonts/archivo-latin-800-normal.woff2") format("woff2"); font-weight: 800; font-style: normal; }

      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body { margin: 0; width: 1080px; height: 1920px; overflow: hidden; background: #231710; }
      #root { position: relative; width: 100%; height: 100%; overflow: hidden; background: #231710; }
      .film-layer { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
      #font-warm { position: absolute; left: -9999px; top: 0; font-size: 20px; }
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="${P.comp}" data-start="0" data-duration="${total}" data-fps="${FPS}" data-width="1080" data-height="1920">
      <!-- ── the picture: one clip per layer, drawn by assets/film.js at HyperFrames time (src/hf/driver.tsx) ── -->
${layerHtml}

      <!-- ── the voice and the bed ── -->
${voHtml}
      ${!P.has.music ? "<!-- the bed: not wired yet (data.ts HAS_MUSIC) -->" : `<audio id="bed" src="assets/audio/${P.music}" data-start="0" data-duration="${total}" data-track-index="${TRACK.audioBed}" data-volume="${+bedPeak.toFixed(4)}" data-automation="${esc(JSON.stringify(bedAuto))}"></audio>`}

      <!-- ── the SFX score: ${cueClips.length} cues (src/r45/score.ts, family per job) ── -->
${sfxHtml}

      <div id="font-warm" data-layout-ignore="" aria-hidden="true"><span style="font-family: Archivo; font-style: italic; font-weight: 300">a$1</span><span style="font-family: Archivo; font-weight: 500">a$1</span><span style="font-family: Archivo; font-weight: 600">a$1</span><span style="font-family: Archivo; font-weight: 700">a$1</span><span style="font-family: Archivo; font-weight: 800">a$1</span></div>
    </div>
    <script>
      // the root timeline: the film is drawn by the layers on every seek (hf-seek), so it carries no tweens of its own
      const tl = gsap.timeline({ paused: true });
      window.__timelines = window.__timelines || {};
      window.__timelines["${P.comp}"] = tl;
    </script>
    <script src="assets/film.js"></script>
  </body>
</html>
`;
// ★ `--audit-only` (2026-10-12) builds ONLY .build/film-audit.js and leaves index.html and assets/film.js untouched: the
//   audit can be rebuilt while a render is reading the film's own files
if (process.argv.includes("--audit-only")) {
  await esbuild.build({ ...browserOpts, entryPoints: [r("src/audit/g3entry.ts")], outfile: r(".build/film-audit.js") });
  console.log("built .build/film-audit.js only (index.html and assets/film.js untouched)");
  process.exit(0);
}
fs.writeFileSync(r("index.html"), html);

if (watch) {
  const ctx = await esbuild.context(browserOpts);
  await ctx.watch();
  console.log(`watching… index.html: ${P.layers.length} layers, ${cueClips.length} SFX clips`);
} else {
  await esbuild.build(browserOpts);
  // ★ RULE 54: the AUDIT build (the film plus src/audit/g3audit.ts), never shipped: scratchpad/sweep029.mjs serves it in
  //   place of assets/film.js
  if (process.argv.includes("--audit")) await esbuild.build({ ...browserOpts, entryPoints: [r("src/audit/g3entry.ts")], outfile: r(".build/film-audit.js") });
  const kb = (fs.statSync(r("assets/film.js")).size / 1024).toFixed(0);
  console.log(`built assets/film.js (${kb} KB) · index.html: ${P.layers.length} layers, ${cueClips.length} SFX clips on ${lanesEnd.length} lanes, ${total} s`);
}
