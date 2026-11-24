// ══════════════════════════════════════════════════════════════════════════════════════════════
// MIX PROBE — rebuilds the film's audio OFFLINE from index.html's own <audio> clips (start, duration, media start, volume,
// and each automation lane), the way HyperFrames mixes it: a mono file goes to BOTH channels at full level, the lane IS
// the level. Writes solo stems + the mix as WAV (verification only — no MP4, no render) and prints their levels.
//   node scratchpad/vo/mixprobe.mjs <outdir>     → <outdir>/solo_sfx.wav, solo_bed.wav, solo_vo.wav (if wired), mix.wav
// ★ (2026-10-10, the 029 HF template) the mixing is done HERE, sample by sample, not in an ffmpeg graph: on 029 the graph's
//   apad → atrim never ended (the SFX stem passed 350 GB before it was killed), and a 636-point bed lane written as one
//   nested if() expression is past ffmpeg's evaluator. ffmpeg only DECODES each clip's slice; every stem is exactly the
//   composition's length by construction.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const BIN = process.env.FFMPEG_DIR;
const FF = path.join(BIN, "ffmpeg.exe");
const RATE = 48000;
const out = process.argv[2];
if (!out) throw new Error("usage: node scratchpad/vo/mixprobe.mjs <outdir>");
fs.mkdirSync(out, { recursive: true });

const html = fs.readFileSync("index.html", "utf8");
const total = +html.match(/data-composition-id="[^"]+"[^>]*data-duration="([\d.]+)"/)?.[1];
if (!(total > 0)) throw new Error("cannot read the composition's duration from index.html");
const unesc = (s) => s.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const clips = [...html.matchAll(/<audio ([^>]+)><\/audio>/g)].map((m) => {
  const a = m[1];
  const g = (k) => a.match(new RegExp(`${k}="([^"]*)"`))?.[1];
  const auto = g("data-automation") ? JSON.parse(unesc(g("data-automation"))) : null;
  return { id: g("id"), src: g("src"), start: +g("data-start"), dur: +g("data-duration"), ms: +(g("data-media-start") ?? 0), vol: +(g("data-volume") ?? 1), auto };
});
if (!clips.length) throw new Error("no <audio> clips found in index.html — the probe would measure silence");
console.log(`${clips.length} clips · composition ${total}s`);

const N = Math.round(total * RATE);
/** a clip's slice, decoded as stereo float at 48 kHz (a mono file duplicated to both channels at FULL level: HyperFrames) */
const chanCache = {};
const chans = (src) => (chanCache[src] ??= +execFileSync(path.join(BIN, "ffprobe.exe"), ["-v", "error", "-select_streams", "a:0", "-show_entries", "stream=channels", "-of", "csv=p=0", src]).toString().trim());
const decode = (c) => {
  // ⚠ never let ffmpeg upmix a mono file (its default matrix puts it at −3 dB per side): decode mono, duplicate it here
  const mono = chans(c.src) === 1;
  const raw = execFileSync(FF, ["-v", "error", "-ss", String(c.ms), "-t", String(c.dur), "-i", c.src, "-ac", mono ? "1" : "2", "-ar", String(RATE), "-f", "f32le", "-"],
    { maxBuffer: 1 << 30 });
  const s = new Float32Array(raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength));
  if (!mono) return s;
  const st = new Float32Array(s.length * 2);
  for (let i = 0; i < s.length; i++) { st[2 * i] = s[i]; st[2 * i + 1] = s[i]; }
  return st;
};
/** the clip's level at its own time t (s): the lane IS the level (piecewise linear), else data-volume */
const levelAt = (c) => {
  const lane = c.auto?.lanes?.find((l) => l.target === "volume")?.points;
  if (!lane?.length) return () => c.vol;
  return (t) => {
    if (t <= lane[0].t) return lane[0].v;
    for (let k = 1; k < lane.length; k++) if (t <= lane[k].t) { const p = lane[k - 1], q = lane[k]; return p.v + ((q.v - p.v) * (t - p.t)) / Math.max(1e-9, q.t - p.t); }
    return lane[lane.length - 1].v;
  };
};
const decoded = new Map();
const mix = (sel, file) => {
  if (!sel.length) return false;
  const L = new Float32Array(N), R = new Float32Array(N);
  for (const c of sel) {
    const s = decoded.get(c) ?? decoded.set(c, decode(c)).get(c);
    const lv = levelAt(c), at = Math.round(c.start * RATE);
    const n = Math.min(s.length / 2, Math.round(c.dur * RATE), N - at);
    for (let i = 0; i < n; i++) { const g = lv(i / RATE); L[at + i] += s[2 * i] * g; R[at + i] += s[2 * i + 1] * g; }
  }
  // a 16-bit PCM WAV, clipped at full scale (a clip is reported, never wrapped)
  const buf = Buffer.alloc(44 + N * 4);
  buf.write("RIFF", 0); buf.writeUInt32LE(36 + N * 4, 4); buf.write("WAVE", 8); buf.write("fmt ", 12);
  buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(2, 22); buf.writeUInt32LE(RATE, 24);
  buf.writeUInt32LE(RATE * 4, 28); buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34); buf.write("data", 36); buf.writeUInt32LE(N * 4, 40);
  let peak = 0, clipped = 0, ss = 0;
  for (let i = 0; i < N; i++) for (const [k, v] of [[0, L[i]], [1, R[i]]]) {
    peak = Math.max(peak, Math.abs(v)); ss += v * v;
    if (Math.abs(v) > 1) clipped++;
    buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, v)) * 32767), 44 + i * 4 + k * 2);
  }
  fs.writeFileSync(path.join(out, file), buf);
  console.log(`${file.padEnd(14)} rms ${(10 * Math.log10(ss / (2 * N) + 1e-12)).toFixed(2)} dBFS · peak ${(20 * Math.log10(peak + 1e-12)).toFixed(2)} dBFS${clipped ? ` · ${clipped} CLIPPED samples` : ""}`);
  return true;
};
const sfx = clips.filter((c) => c.id?.startsWith("sfx-"));
const bed = clips.filter((c) => /bed|music/i.test(c.id ?? "") || /bed_/.test(c.src));
const vo = clips.filter((c) => c.id === "vo");
if (!sfx.length) throw new Error("no SFX clips — HAS_SFX would be off");
if (!bed.length) throw new Error("no bed clip found");
mix(sfx, "solo_sfx.wav");
mix(bed, "solo_bed.wav");
mix(vo, "solo_vo.wav");
mix(clips, "mix.wav");
console.log(`stems → ${out}`);
