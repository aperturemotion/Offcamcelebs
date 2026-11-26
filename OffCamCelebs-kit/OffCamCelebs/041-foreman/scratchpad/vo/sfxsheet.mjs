// SFX CUE SHEET for sfxlevels028.py, read from index.html's own SFX clips (what HyperFrames actually plays):
//   out/sfx_cues.json = [{ peak: <frame of the clip's loudest sample, as placed>, s: <family>, t: <title> }]
// The family is the clip id's tail (sfx-NNN-<family>); the loudest sample is found in the slice the clip plays
// ([media start, media start + duration]), so a cue cut short is measured where it really peaks.
// Usage: node scratchpad/vo/sfxsheet.mjs
import fs from "node:fs";
import { execFileSync } from "node:child_process";

const FF = (process.env.FFMPEG_DIR + "/ffmpeg.exe");
const SR = 48000, FPS = 30;
const html = fs.readFileSync("index.html", "utf8");
const clips = [...html.matchAll(/<audio (id="sfx-[^>]+)><\/audio>/g)].map((m) => {
  const g = (k) => m[1].match(new RegExp(`${k}="([^"]*)"`))?.[1];
  return { id: g("id"), src: g("src"), start: +g("data-start"), dur: +g("data-duration"), ms: +(g("data-media-start") ?? 0), title: g("title") ?? "" };
});
if (!clips.length) throw new Error("no SFX clips found in index.html");
const peakCache = new Map();
const cues = clips.map((c) => {
  const key = `${c.src}|${c.ms}|${c.dur}`;
  if (!peakCache.has(key)) {
    const raw = execFileSync(FF, ["-v", "error", "-ss", String(c.ms), "-t", String(c.dur), "-i", c.src, "-ac", "1", "-ar", String(SR), "-f", "f32le", "-"], { maxBuffer: 1 << 28 });
    const x = new Float32Array(raw.buffer, raw.byteOffset, raw.byteLength / 4);
    let bi = 0, bv = 0;
    for (let i = 0; i < x.length; i++) { const v = Math.abs(x[i]); if (v > bv) { bv = v; bi = i; } }
    peakCache.set(key, bi / SR);
  }
  return { peak: Math.round((c.start + peakCache.get(key)) * FPS), s: c.id.replace(/^sfx-\d+-/, ""), t: c.title };
});
fs.mkdirSync("out", { recursive: true });
fs.writeFileSync("out/sfx_cues.json", JSON.stringify(cues, null, 1));
console.log(`${cues.length} SFX cues → out/sfx_cues.json (${[...new Set(cues.map((c) => c.s))].join(", ")})`);
