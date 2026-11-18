// ═════════════════════════════════════════════════════════════════════════════════════════════
// THE 3-D CAMERA (THE PAYOUTS, rule P12: "one complete 3-D world, filmed by a real camera"; 2026-11-18, first film 037).
// ONE perspective camera for the whole film, on ONE keyframed path. A key moves the camera from the pose before it to its
// own pose over `dur` frames, from rest to rest on its easing; keys never overlap (asserted). Between keys the camera only
// BREATHES (a small deterministic drift). Everything is a pure function of the frame (fractional frames too: the motion
// blur samples sub-frames), so it is seek-safe.
//   pos / look   world units (a place writes them in its OWN coordinates; the film adds the place's origin)
//   fov          vertical field of view, degrees (the frame is 9:16, so the horizontal view is about 0.56 of it)
//   orbit        the position rides a circle round `c` instead of a straight line (angle in degrees, 0 = +z, toward +x)
//   arc          a bulge added at the middle of a straight move (a travel that swings out or rises)
//   cut          the pose jumps on `at` (a hard cut); `dip` = frames of fade to black each side of it
// Helpers: orbitPos / orbit, dolly, crane, travel, cut.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import { SETTLE, TRAVEL, SOFT, clamp01 } from "../r45/tokens";

export type Vec = [number, number, number];
export type Orbit = { c: Vec; a0: number; a1: number; r0: number; r1?: number; y0: number; y1?: number };
export type CamKey3 = {
  at: number; dur: number; pos: Vec; look: Vec; fov?: number; roll?: number; ease?: (t: number) => number;
  orbit?: Orbit; arc?: Vec; cut?: boolean; dip?: number;
  /** a label for the score and for error messages */
  why?: string;
  /** the score: this move is a travel (it takes a whoosh); set by travel(), or by hand */
  whoosh?: number;
};
export type Pose = { pos: Vec; look: Vec; fov: number; roll: number };

export const add = (a: Vec, b: Vec): Vec => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a: Vec, b: Vec): Vec => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const mixV = (a: Vec, b: Vec, t: number): Vec => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
export const len = (a: Vec) => Math.hypot(a[0], a[1], a[2]);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const DEFAULT_FOV = 50;

/** a point on a circle round c: angle a (deg; 0 = straight in front, +z; positive toward +x), radius r, height y */
export const orbitPos = (c: Vec, a: number, r: number, y: number): Vec => {
  const k = (a * Math.PI) / 180;
  return [c[0] + Math.sin(k) * r, y, c[2] + Math.cos(k) * r];
};
const orbitAt = (o: Orbit, t: number) => orbitPos(o.c, lerp(o.a0, o.a1, t), lerp(o.r0, o.r1 ?? o.r0, t), lerp(o.y0, o.y1 ?? o.y0, t));

// ── the helpers a place writes its shots with ───────────────────────────────────────────────────────────────────────────
/** ORBIT round `c` from angle a0 to a1 (deg), looking at `look` (default c). The key before it should end at the orbit's
 *  start (`orbitPos(c, a0, r0, y0)`); if it does not, the first third of the orbit blends onto the circle. */
export const orbit = (at: number, dur: number, o: Orbit, x: { look?: Vec; fov?: number; ease?: (t: number) => number; why?: string } = {}): CamKey3 =>
  ({ at, dur, pos: orbitAt(o, 1), look: x.look ?? o.c, fov: x.fov, ease: x.ease ?? SOFT, orbit: o, why: x.why ?? "orbit" });
/** DOLLY: a straight move to `pos`, looking at `look` (a push-in, a pull-back, a track) */
export const dolly = (at: number, dur: number, pos: Vec, look: Vec, x: { fov?: number; ease?: (t: number) => number; why?: string } = {}): CamKey3 =>
  ({ at, dur, pos, look, fov: x.fov, ease: x.ease ?? SETTLE, why: x.why ?? "dolly" });
/** CRANE: a move that rises or drops, its middle swung out by `bulge` (default: a quarter of the height change, toward +z) */
export const crane = (at: number, dur: number, pos: Vec, look: Vec, x: { bulge?: Vec; fov?: number; ease?: (t: number) => number; why?: string } = {}): CamKey3 =>
  ({ at, dur, pos, look, fov: x.fov, ease: x.ease ?? TRAVEL, arc: x.bulge ?? [0, 0, 120], why: x.why ?? "crane", whoosh: 0.5 });
/** TRAVEL: from one object to the next through the dark: a long in-out move with a bulge, and a whoosh in the score */
export const travel = (at: number, dur: number, pos: Vec, look: Vec, x: { bulge?: Vec; fov?: number; ease?: (t: number) => number; why?: string; vol?: number } = {}): CamKey3 =>
  ({ at, dur, pos, look, fov: x.fov, ease: x.ease ?? TRAVEL, arc: x.bulge, why: x.why ?? "travel", whoosh: x.vol ?? 0.6 });
/** CUT to a pose on `at`, with `dip` frames of fade to black each side (0 = a hard cut) */
export const cut = (at: number, pos: Vec, look: Vec, x: { fov?: number; dip?: number; why?: string } = {}): CamKey3 =>
  ({ at, dur: 0, pos, look, fov: x.fov, cut: true, dip: x.dip ?? 0, why: x.why ?? "cut" });

/** refuse a path whose keys overlap or run backwards */
export const checkPath = (name: string, keys: CamKey3[]) => {
  for (let i = 1; i < keys.length; i++) {
    const a = keys[i - 1], k = keys[i];
    if (k.at < a.at + a.dur - 1e-6) throw new Error(`camera ${name}: key ${i} "${k.why ?? ""}" (f${k.at}) starts before key ${i - 1} "${a.why ?? ""}" ends (f${a.at + a.dur}): camera keys never overlap`);
    if (!k.cut && k.dur < 1) throw new Error(`camera ${name}: key ${i} "${k.why ?? ""}" has no duration (use cut())`);
  }
  return keys;
};

// ── the breath: the camera is never dead still (P7), and never wanders: a few units of slow, unrelated sines ──
const BREATH = 7;
const breath = (f: number): Vec => [
  BREATH * (Math.sin(f * 0.0213 + 1.3) + 0.5 * Math.sin(f * 0.0091 + 4.1)),
  BREATH * 0.6 * (Math.sin(f * 0.0171 + 2.9) + 0.4 * Math.sin(f * 0.0123 + 0.4)),
  BREATH * 1.2 * Math.sin(f * 0.0137 + 5.2),
];

/** the camera's pose at frame f (fractional frames allowed) */
export const poseAt = (keys: CamKey3[], f: number): Pose => {
  let p: Pose = { pos: keys[0].pos, look: keys[0].look, fov: keys[0].fov ?? DEFAULT_FOV, roll: keys[0].roll ?? 0 };
  for (let i = 1; i < keys.length; i++) {
    const k = keys[i];
    if (f < k.at) break;
    const end: Pose = { pos: k.pos, look: k.look, fov: k.fov ?? p.fov, roll: k.roll ?? 0 };
    if (k.cut || f >= k.at + k.dur) { p = end; continue; }
    const t = (k.ease ?? SETTLE)(clamp01((f - k.at) / k.dur));
    let pos = mixV(p.pos, k.pos, t);
    if (k.orbit) {
      const on = orbitAt(k.orbit, t), blend = SOFT(clamp01(t / 0.34));
      const start = orbitAt(k.orbit, 0);
      // off the circle at the start? ride from the old pose onto it over the first third
      pos = len(sub(start, p.pos)) < 2 ? on : mixV(mixV(p.pos, on, t), on, blend);
    }
    if (k.arc) { const s = Math.sin(Math.PI * t); pos = add(pos, [k.arc[0] * s, k.arc[1] * s, k.arc[2] * s]); }
    p = { pos, look: mixV(p.look, k.look, t), fov: lerp(p.fov, end.fov, t), roll: lerp(p.roll, end.roll, t) };
    break;
  }
  const b = breath(f);
  return { pos: add(p.pos, b), look: add(p.look, [b[0] * 0.25, b[1] * 0.25, 0]), fov: p.fov, roll: p.roll };
};
/** 0…1 brightness at f: the dips round the cuts */
export const fadeAt = (keys: CamKey3[], f: number) => {
  let v = 1;
  for (const k of keys) if (k.cut && (k.dip ?? 0) > 0) v = Math.min(v, clamp01(Math.abs(f - k.at) / k.dip!));
  return SOFT(v);
};
/** how fast the picture moves at f, as a rough screen fraction per frame (for the motion blur's threshold) */
export const speedAt = (keys: CamKey3[], f: number) => {
  const a = poseAt(keys, f - 0.5), b = poseAt(keys, f + 0.5);
  const d = Math.max(200, len(sub(a.look, a.pos)));
  return (len(sub(b.pos, a.pos)) + len(sub(b.look, a.look))) / d;
};
