// ★ THE BED ENVELOPE — measured, never by ear.
// Reads the two SOLO probes (scratchpad/soloprobe.mjs: out/solo_vo.wav and
// out/solo_bed.wav, both RENDERED, so the mono voice's pan law is already in
// them), measures the voice-to-bed separation in each 10 s window, and writes
// src/audit/bedenv.ts: a gain curve for the bed, in dB relative to MUSIC_GAIN,
// that holds the separation at TARGET in every window.
//
// ⚠ It is a CONTROLLER, not a one-shot: it ADDS the measured residual to the
//   envelope the solo_bed probe was rendered with (read back from bedenv.ts).
//   Re-render solo_bed after writing, and run it again: the residual should
//   come back near zero — that second run is the proof.
// Usage: node scratchpad/bedenv.mjs
import { spawnSync } from "node:child_process";
import fs from "node:fs";

const FF = (process.env.FFMPEG_DIR + "/ffmpeg.exe");
/** separation in the RENDER, dB — the user's "a little louder" (2026-09-19):
 *  ~2 dB louder than 010–013's real ~7.5 */
const TARGET = 5.5;
const WIN = 10;
// ⚠ THE WINDOW LIST IS DERIVED, NOT HARD-CODED. It used to be a literal array
//   with the comment "the VO ends at 120.94 s" — a clone carryover measured
//   against the PREVIOUS video's take. On this one the voice runs to 126.3 s,
//   so a fixed list would have left the last six seconds of the film
//   uncontrolled while reporting a clean convergence for everything it did
//   measure. Read the real end out of the generated cues.
const cuesSrc = fs.readFileSync("src/audit/cues.ts", "utf8");
const ends = [...cuesSrc.matchAll(/b: ([\d.]+)/g)].map((m) => +m[1]);
if (!ends.length) { console.error("REFUSING: cannot read cue ends from src/audit/cues.ts"); process.exit(1); }
const VO_END_S = Math.max(...ends);
// ★ 028: the windows start at the bed's DROP (scratchpad/bedwin.json, shared with gatedsep.py): the quiet intro before it
//   is a build, never controlled; the film holds the first window's gain over it. Starts and centres are rounded to
//   0.01 s so this file, gatedsep.json and bedenv.ts name the same points.
const r2 = (v) => Math.round(v * 100) / 100;
const FROM = fs.existsSync("scratchpad/bedwin.json") ? JSON.parse(fs.readFileSync("scratchpad/bedwin.json", "utf8")).from : 0;
const STARTS = Array.from({ length: Math.ceil((VO_END_S - FROM) / WIN) }, (_, i) => r2(FROM + i * WIN));
console.log(`voice ends ${VO_END_S.toFixed(2)} s → ${STARTS.length} windows of ${WIN} s`);

// ★ THE SEPARATION IS SPEECH-GATED (CLAUDE.md, V25): a window with more pauses has a lower plain mean without the
//   voice being any quieter, and an envelope driven by it ducks the bed for the gaps. This file still controlled on
//   PLAIN means until 022's take. It now reads scratchpad/gatedsep.json — gatedsep.py's per-window separation over
//   the frames where the voice speaks (voice and bed over the SAME frames) — and refuses if that file is older than
//   either solo probe. (An ffmpeg silenceremove gate was tried first and read the voice QUIETER than its plain
//   mean, which no correct gate can do — so it was dropped, not tuned.) The plain means are still printed.
const GJ = "scratchpad/gatedsep.json";
{
  const probes = ["out/solo_vo.wav", "out/solo_bed.wav"].map((p) => fs.statSync(p).mtimeMs);
  if (!fs.existsSync(GJ) || fs.statSync(GJ).mtimeMs < Math.max(...probes)) {
    console.error("REFUSING: scratchpad/gatedsep.json is missing or older than the solo probes — run gatedsep.py first.");
    process.exit(1);
  }
}
const GATED = new Map(JSON.parse(fs.readFileSync(GJ, "utf8")).windows.map((r) => [r.w, r]));
const mean = (file, s) => {
  const r = spawnSync(FF, ["-hide_banner", "-nostats", "-ss", String(s), "-t", String(WIN), "-i", file,
    "-af", "volumedetect", "-f", "null", "-"], { encoding: "utf8" });
  const m = (r.stderr || "").match(/mean_volume: (-?[\d.]+) dB/);
  if (!m) throw new Error(`no level for ${file} @ ${s}s`);
  return +m[1];
};

const OUT = "src/audit/bedenv.ts";
let prev = STARTS.map(() => 0);
let prevPts = [];
if (fs.existsSync(OUT)) {
  const m = fs.readFileSync(OUT, "utf8").match(/export const BED_ENV[^=]*= \[([\s\S]*?)\];/);
  if (!m) throw new Error("cannot read the current BED_ENV back — refusing to guess");
  const pts = [...m[1].matchAll(/\[\s*([\d.]+),\s*(-?[\d.]+)\s*\]/g)].map((x) => [+x[1], +x[2]]);
  // an EMPTY envelope is the flat one a new take starts from (0 dB in every window). Otherwise every window centre
  // must be there, plus at most ONE other point — the tail's (023) — or it is stale
  const centres = STARTS.map((s) => r2(s + WIN / 2));
  const onCentre = pts.filter((p) => centres.includes(p[0]));
  if (pts.length && (onCentre.length !== STARTS.length || pts.length - onCentre.length > 1))
    throw new Error(`BED_ENV has ${pts.length} points (${onCentre.length} on window centres), expected ${STARTS.length} (+ a tail)`);
  prev = pts.length ? centres.map((c) => onCentre.find((p) => p[0] === c)[1]) : STARTS.map(() => 0);
  prevPts = pts;
  // ★ 025: THE CONTROLLER ADDS ITS RESIDUAL TO THE ENVELOPE IT READS BACK — which is only right if solo_bed.mp3 was
  //   RENDERED WITH that envelope. Run twice without re-rendering and every correction is applied twice (025: a 1.9-dB
  //   residual became 3.8). A non-flat envelope written after the bed probe is a refusal.
  if (pts.length && fs.statSync(OUT).mtimeMs > fs.statSync("out/solo_bed.wav").mtimeMs) {
    console.error("REFUSING: src/audit/bedenv.ts is newer than out/solo_bed.wav — the probe was not rendered with the envelope\n" +
      "           this run would correct. Re-render it (node scratchpad/soloprobe.mjs bed), run gatedsep.py, then this.");
    process.exit(1);
  }
}
// the envelope's value at time t (linear between points, held at the ends) — as Composition.tsx reads it
const envAt = (pts, t) => {
  if (!pts.length) return 0;
  if (t <= pts[0][0]) return pts[0][1];
  for (let i = 1; i < pts.length; i++) if (t <= pts[i][0]) return pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * (t - pts[i - 1][0]) / (pts[i][0] - pts[i - 1][0]);
  return pts[pts.length - 1][1];
};

// ⚠ A WINDOW THE VOICE BARELY COVERS HAS NO SEPARATION TO CONTROL (017: the
//   last window held 0.4 s of voice and 9.6 s of outro, "measured" 1.7 dB, and
//   would have ducked the bed 3.8 dB into the ending). Under half-covered, the
//   window HOLDS the previous window's value and says so.
const rows = [];
STARTS.forEach((s, i) => {
  const vo = mean("out/solo_vo.wav", s), bed = mean("out/solo_bed.wav", s);
  const g = GATED.get(s);
  const sep = g ? g.sep : NaN;
  const covered = Math.min(WIN, Math.max(0, VO_END_S - s)) / WIN;
  const held = (covered < 0.5 || !g) && rows.length > 0;
  if (!g && !held) { console.error(`REFUSING: no speech-gated measurement for the ${s}–${s + WIN} s window`); process.exit(1); }
  const next = held ? rows[rows.length - 1].next : Math.round((prev[i] + (sep - TARGET)) * 10) / 10;
  rows.push({ s, vo, bed, sep: held ? TARGET : sep, prev: prev[i], next, held });
});
console.log("window     vo      bed     sep   residual   env(prev → next) dB");
for (const r of rows)
  console.log(`${String(r.s).padStart(5)}–${String(r2(r.s + WIN)).padStart(5)}s  ${r.vo.toFixed(1).padStart(6)}  ${r.bed.toFixed(1).padStart(6)}  ${r.sep.toFixed(1).padStart(5)}  ${(r.sep - TARGET).toFixed(1).padStart(8)}   ${r.prev.toFixed(1).padStart(5)} → ${r.next.toFixed(1)}`);

// ★ 023: THE TAIL. When the last window is held (mostly outro), the voice's last seconds — the verdict and the call
//   to action — would ride on the held value unmeasured (023: 3.7 dB of separation under "Our rating: legit.").
//   gatedsep.py measures the tail on its own; it is controlled as ONE extra point at its centre, and the held last
//   window takes the tail's value, so the outro keeps the level the voice ended on.
const TAIL = JSON.parse(fs.readFileSync(GJ, "utf8")).tail;
let tailPt = null;
const lastRow = rows[rows.length - 1];
// ★ 024: whenever the tail drifts, not only when the last window is held — 024's last window was 80% speech (not held),
//   so the verdict's last 3.5 s rode the 55-s point at 4.8 dB, unmeasured by the control
// ★ 025: ASYMMETRIC. The tail is controlled on any drift TOWARD the bed (−0.3 dB: the bed masking the verdict, 023/024)
//   but only on a drift over +1.0 dB AWAY from it. On a take whose voice ends early in its last window, the tail and
//   that window share one envelope point and pull against each other (025: window 5.5 / tail 6.1 → controlling the
//   tail put the window back at 4.9). A verdict 0.6 dB clearer than the target is the safe side of that trade.
if (TAIL && (lastRow.held || TAIL.sep - TARGET < -0.3 || TAIL.sep - TARGET > 1.0)) {
  const t = Math.round(((TAIL.a + TAIL.b) / 2) * 10) / 10;
  const prevTail = envAt(prevPts, t);
  const next = Math.round((prevTail + (TAIL.sep - TARGET)) * 10) / 10;
  tailPt = [t, next];
  // ★ 025: a take that ends early in its last window puts that window's centre ON the tail (56.5-s voice: tail 54.7 s,
  //   window 55 s). The window's point then overrode the tail 0.3 s later, so the verdict rode the window's value, not
  //   the tail's. A last window centred within 2 s of the tail (or past it) takes the tail's value, as a held one does.
  if (lastRow.held || lastRow.s + WIN / 2 >= t - 2) {
    if (!lastRow.held) console.log(`  (the last window's centre ${lastRow.s + WIN / 2} s sits on the tail ${t} s: it takes the tail's value)`);
    lastRow.next = next;
  }
  console.log(`tail ${TAIL.a.toFixed(1)}–${TAIL.b.toFixed(1)}s (the voice's last ${(TAIL.b - TAIL.a).toFixed(1)} s)  sep ${TAIL.sep.toFixed(1)}  residual ${(TAIL.sep - TARGET).toFixed(1)}   ${prevTail.toFixed(1)} → ${next.toFixed(1)}`);
}
const allPts = rows.map((r) => [r2(r.s + WIN / 2), r.next]);
if (tailPt) allPts.push(tailPt);
allPts.sort((p, q) => p[0] - q[0]);
const body = allPts.map((p) => `  [${p[0]}, ${p[1].toFixed(1)}],`).join("\n");
fs.writeFileSync(OUT,
  "// GENERATED by scratchpad/bedenv.mjs from the SOLO probes — do not hand-edit; re-run it.\n" +
  "// The bed's gain in dB relative to MUSIC_GAIN at each 10 s window's centre\n" +
  "// (linear in between, held at the ends): it holds the RENDER's voice-to-bed\n" +
  `// separation at ${TARGET} dB in every window (user, 2026-09-19: "a little louder").\n` +
  `export const BED_TARGET_SEP = ${TARGET};\n` +
  "export const BED_ENV: readonly (readonly [number, number])[] = [\n" + body + "\n];\n",
);
const resids = rows.map((r) => Math.abs(r.sep - TARGET)).concat(tailPt ? [Math.abs(TAIL.sep - TARGET)] : []);
console.log(`\nwrote ${OUT}; worst |residual| ${Math.max(...resids).toFixed(1)} dB${tailPt ? " (tail included)" : ""}`);
