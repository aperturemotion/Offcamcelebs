import React from "react";
import { clamp01, INOUT, SETTLE } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { THREE } from "../../three/stage";
import { hash } from "../../three/kit029";
import {
  hookModel, viewMatrix, toLayer, HOOK_EYE, G, LAYER, BH, HH, NH, GL, GLOVE_BOXES, BAND, BAND_TEXT, HERO_H, POOL_C, POOL_R,
  N_BASE, N_STRUCK, N_TOP, N_NOTES, type HookP, type BodyP,
} from "../../three/props/hook";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 1 · THE HOOK (dark) — a punch into the money. ★ THE BRIEF: a real object in motion from frame 1, no number on screen
// before ~2 s (the caption spells the year), "$365,000,000" landing on a bundle's band as the voice says it.
//  0 "In 2018, Canelo Álvarez signed what was called the richest contract in sports history, $365 million." Frame 1 is
//    mid-punch, in slow motion: a red leather lace-up boxing glove drives in from the right, the camera tracking it, and the
//    camera's pull reveals what it is driving at: a tall stack of strapped $100 bundles on a dark walnut table, loose notes
//    on its top. The glove lands (~0.9 s): the bundles in its path are shot out to the left, fanning toward the lens; the
//    rest of the stack bursts upward and tumbles, still in slow motion (time runs at 0.1), the loose notes flung high. The
//    camera rises with them through the burst, then cranes down after the biggest bundle, a bank brick of four straps under
//    one wide paper band, as it tumbles end over end and lands band up behind the stack's base; the camera settles over its
//    band as the voice says "$365 million": $365,000,000, large, in heavy type on the band. Time snaps back to real speed.
//  1 "We counted the fights." The camera eases back and up: the bundles lie where they fell, the loose notes have fluttered
//    down round them; the brick's band still reads at the centre. Everything has landed.
//  The physics: true gravity (9.81 m/s² at the notes' own scale, 240 px = 156 mm), ballistic flight, each body's tumble a
//  whole number of turns so it lands flat, an edge-first touch-down (it can never dip into the table), a short skid with
//  friction and a small bounce; the loose notes fall at a banknote's terminal speed with a falling leaf's sway. Every pair of
//  bodies is checked for clearance on every half frame, and every body against the table, at module load.
// ═══════════════════════════════════════════════════════════════════════════
const S = "hook" as const;
const fail = (msg: string) => { if ((globalThis as { __hookNoThrow?: boolean }).__hookNoThrow) console.log("CHECK:", msg); else throw new Error(msg); };
const W365 = word(S, 0, /^\$365/);                // "$365": the band's close-up has settled
const HISTORY = word(S, 0, /^history/);
const WE = cue(S, 1), END = cueEnd(S, 1);
const DONE = END + 4;
const LAST = DONE + 44;

type V3 = [number, number, number];
type Q4 = [number, number, number, number];
const lerp3 = (a: V3, b: V3, t: number): V3 => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const X = new THREE.Vector3(1, 0, 0), Y = new THREE.Vector3(0, 1, 0);

// ══ SLOW MOTION: physical time τ(f) runs at 0.1 of film time from frame 0 (a high-speed camera), and snaps back to real
//    speed once the brick's band has been read ══
const SLOW = 0.1;
const R0 = W365 + 6, R1 = R0 + 18;
const rate = (f: number) => (f < R0 ? SLOW : f < R1 ? SLOW + (1 - SLOW) * INOUT((f - R0) / (R1 - R0)) : 1);
const TAU_OF: number[] = [0];
for (let k = 1; k <= 400 * 8; k++) { const f = k / 8; TAU_OF.push(TAU_OF[k - 1] + rate(f - 1 / 16) / 8); }
const tauAt = (f: number) => { if (f <= 0) return f * SLOW; const k = Math.min(TAU_OF.length - 1, f * 8); const i = Math.floor(k), a = k - i; return TAU_OF[i] + (TAU_OF[Math.min(TAU_OF.length - 1, i + 1)] - TAU_OF[i]) * a; };
const frameOf = (tau: number) => { let lo = -50, hi = 400; for (let n = 0; n < 50; n++) { const m = (lo + hi) / 2; if (tauAt(m) < tau) lo = m; else hi = m; } return hi; };

// ══ THE STACK (table world: the stack on the origin, the notes' length along x) ══
/** its layers' small hand-squared shifts and turns */
const jit = (i: number) => ({ dx: (hash(i, 1, 5) - 0.5) * 3, dz: (hash(i, 2, 5) - 0.5) * 2.4, yaw: (hash(i, 3, 5) - 0.5) * 0.03 });
const RIGHT = Math.max(...Array.from({ length: 30 }, (_, i) => jit(i).dx)) + BH.x;   // the stack's right end (its jitter)
const yBundle = (i: number) => i * LAYER + BH.y;                                     // bundle i's centre height
const HERO_Y0 = (N_BASE + N_STRUCK) * LAYER + HERO_H / 2;
const TOP0 = (N_BASE + N_STRUCK) * LAYER + HERO_H + 0.3;                             // the first top bundle's underside
const yTop = (k: number) => TOP0 + k * LAYER + BH.y;
const NOTES0 = TOP0 + N_TOP * LAYER;                                                 // the loose notes' bed
const NOTE_STEP = NH.y * 2 + 0.25;

// ══ THE GLOVE: it drives in along −x at the stack's struck layers' height, lands, sinks in as it decelerates, and is drawn
//    back out to the right ══
const F_IMP = 27;                                   // the punch lands (0.9 s)
const TAU_I = tauAt(F_IMP);
const VG = 230;                                     // px per physical frame (4.5 m/s)
const XC = RIGHT + 0.6;                             // its face at the moment of contact
const YG = N_BASE * LAYER + 30 + GL.B;              // its centre line: its lowest point (the thumb) clears the base
const TD = 2.2, HOLD = 0.8, AR = 95;                // it stops over TD, holds, and is drawn back at AR px/f²
const gloveX = (tau: number) => {
  const s = tau - TAU_I;
  if (s <= 0) return XC - VG * s;
  if (s <= TD) return XC - VG * (s - (s * s) / (2 * TD));
  const x1 = XC - (VG * TD) / 2;
  const u = s - TD - HOLD;
  return u <= 0 ? x1 : x1 + 0.5 * AR * u * u;
};
const gloveRoll = (tau: number) => 0.16 * clamp01((TAU_I - tau) / TAU_I) - 0.05 * clamp01((tau - TAU_I - TD) / 3);
const qTmp = new THREE.Quaternion(), qA = new THREE.Quaternion(), qB = new THREE.Quaternion();
const gloveAt = (f: number): { p: V3; q: Q4 } => {
  const tau = tauAt(f);
  qA.setFromAxisAngle(X, gloveRoll(tau));
  qB.setFromAxisAngle(Y, 0.05 * clamp01((TAU_I - tau) / TAU_I));
  qTmp.copy(qB).multiply(qA);
  return { p: [gloveX(tau), YG, 4], q: [qTmp.x, qTmp.y, qTmp.z, qTmp.w] };
};

// ══ THE BODIES ══
type Fl = {
  he: V3; p0: V3; yaw0: number; t0: number; v: V3; axis: V3; turn: number; ramp: number;
  T?: number; L?: V3; yawL?: number; td?: V3; vTd?: V3; slide?: number; tStop?: number;
};
const MU = 0.9;                                     // paper on oiled walnut, with the touch-down's losses
/** a tumbling lander: from p0 at t0, touch-down after T at the point that, with its skid, leaves it at rest at L */
const lander = (o: { he: V3; p0: V3; yaw0: number; T: number; L: V3; yawL: number; axis: V3; turns: number; ramp: number; delay?: number }): Fl => {
  const t0 = TAU_I + (o.delay ?? 0);
  let td: V3 = [o.L[0], o.L[1], o.L[2]], v: V3 = [0, 0, 0], d = 0;
  for (let it = 0; it < 8; it++) {
    v = [(td[0] - o.p0[0]) / o.T, (td[1] - o.p0[1] + 0.5 * G * o.T * o.T) / o.T, (td[2] - o.p0[2]) / o.T];
    const vh = Math.hypot(v[0], v[2]);
    d = (vh * vh) / (2 * MU * G);
    td = [o.L[0] - (d * v[0]) / (vh || 1), o.L[1], o.L[2] - (d * v[2]) / (vh || 1)];
  }
  const vh = Math.hypot(v[0], v[2]);
  const a = new THREE.Vector3(...o.axis).normalize();
  return { he: o.he, p0: o.p0, yaw0: o.yaw0, t0, v, axis: [a.x, a.y, a.z], turn: 2 * Math.PI * o.turns, ramp: o.ramp, T: o.T, L: o.L, yawL: o.yawL, td,
    vTd: [v[0], v[1] - G * o.T, v[2]], slide: d, tStop: vh / (MU * G) };
};
/** the spin's progress: its rate ramps in over `ramp` (the punch's push takes a moment to turn it), then holds */
const spinI = (s: number, ramp: number) => (s <= ramp ? (s * s) / (2 * ramp) : s - ramp / 2);
const qY = new THREE.Quaternion(), qR = new THREE.Quaternion(), vAx = new THREE.Vector3();
const orient = (yaw: number, axis: V3, ang: number) => {
  qY.setFromAxisAngle(Y, yaw);
  qR.setFromAxisAngle(vAx.set(...axis), ang);
  return qY.multiply(qR).clone();
};
const corner = new THREE.Vector3();
/** the lowest point of a box of half extents he turned by q, below its centre */
const lowOf = (he: V3, q: THREE.Quaternion) => {
  let m = Infinity;
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1]) m = Math.min(m, corner.set(sx * he[0], sy * he[1], sz * he[2]).applyQuaternion(q).y);
  return m;
};
const GAP = 0.3;
const flAt = (b: Fl, tau: number): { p: V3; q: THREE.Quaternion; stage: "rest" | "fly" | "down" } => {
  const s = tau - b.t0;
  if (s <= 0) return { p: [...b.p0], q: orient(b.yaw0, b.axis, 0), stage: "rest" };
  if (!b.T || s < b.T) {
    const T = b.T ?? 1e9;
    const k = b.T ? spinI(Math.min(s, T), b.ramp) / spinI(T, b.ramp) : spinI(s, b.ramp);
    const ang = b.T ? b.turn * k : b.turn * k;              // landers: whole turns over the flight; struck: rad per frame
    const yaw = b.T ? b.yaw0 + ((b.yawL ?? b.yaw0) - b.yaw0) * Math.min(1, s / T) : b.yaw0;
    const q = orient(yaw, b.axis, ang);
    const p: V3 = [b.p0[0] + b.v[0] * s, b.p0[1] + b.v[1] * s - 0.5 * G * s * s, b.p0[2] + b.v[2] * s];
    p[1] = Math.max(p[1], -lowOf(b.he, q) + GAP);             // ★ a corner touches first: it can never dip into the table
    return { p, q, stage: "fly" };
  }
  // touched down: a skid along its way with friction, and a small damped bounce
  const u = s - b.T, ts = b.tStop!, vh = Math.hypot(b.vTd![0], b.vTd![2]) || 1;
  const t = Math.min(u, ts), dd = vh * t - 0.5 * MU * G * t * t;
  const hop = Math.min(3.5, Math.abs(b.vTd![1]) * 0.03) * Math.exp(-u / 0.9) * Math.abs(Math.sin((Math.PI * u) / 1.25));
  const p: V3 = [b.td![0] + (dd * b.vTd![0]) / vh, b.L![1] + hop, b.td![2] + (dd * b.vTd![2]) / vh];
  return { p, q: orient(b.yawL!, b.axis, 0), stage: "down" };
};

const BHE: V3 = [BH.x, BH.y, BH.z], HHE: V3 = [HH.x, HH.y, HH.z], NHE: V3 = [NH.x, NH.y, NH.z];
// the base: two bundles that stay where they are
const BASE: V3[] = Array.from({ length: N_BASE }, (_, i) => [jit(i).dx, yBundle(i), jit(i).dz]);
// the struck bundles: shot out along −x, fanning up and toward the lens, turning flat (yaw only: they never sweep into a
// neighbour above or below them), each rising a little faster than the one under it
const STRUCK: Fl[] = Array.from({ length: N_STRUCK }, (_, k) => {
  const i = N_BASE + k, j = jit(i);
  return { he: BHE, p0: [j.dx, yBundle(i), j.dz], yaw0: j.yaw, t0: TAU_I, v: [-(252 + 26 * hash(k, 1, 6)), 24 + 3.8 * k, 12 + 46 * hash(k, 2, 6)],
    axis: [0, 1, 0], turn: (hash(k, 3, 6) > 0.5 ? 1 : -1) * (0.03 + 0.05 * hash(k, 4, 6)), ramp: 0.6 };
});
// the hero brick: lifted, end over end once, landing band up behind the base
const HERO_REST: V3 = [-24, HH.y + GAP, -236];
const HERO: Fl = lander({ he: HHE, p0: [0, HERO_Y0, 0], yaw0: 0.004, T: 12.2, L: HERO_REST, yawL: 0.035, axis: [0.12, 0.08, 1], turns: 1, ramp: 5 });
// the top bundles: flung up and tumbling toward the lens, landing in front
const TOPS: Fl[] = [
  lander({ he: BHE, p0: [jit(20).dx, yTop(0), jit(20).dz], yaw0: jit(20).yaw, T: 14.8, L: [-420, BH.y + GAP, 20], yawL: 0.25, axis: [1, 0.12, 0], turns: 1, ramp: 4 }),
  lander({ he: BHE, p0: [jit(21).dx, yTop(1), jit(21).dz], yaw0: jit(21).yaw, T: 16.2, L: [300, BH.y + GAP, 260], yawL: -0.3, axis: [1, -0.16, 0], turns: 1, ramp: 4 }),
  lander({ he: BHE, p0: [jit(22).dx, yTop(2), jit(22).dz], yaw0: jit(22).yaw, T: 18.4, L: [-390, BH.y + GAP, 280], yawL: 0.2, axis: [1, 0.08, 0], turns: 1, ramp: 4 }),
];

// ══ THE LOOSE NOTES: flung high off the top, then they fall at a banknote's terminal speed, swaying like leaves (the sway's
//    tilt follows its swing), and lie down flat as they reach the table ══
const VT = 28, TDRAG = 1.8, SWAY_W = (2 * Math.PI) / 13;
type Nt = { p0: V3; yaw0: number; t0: number; vy: number; vx: number; vz: number; ax: number; az: number; ph: number; spin: number; tilt: number; tL: number; L: V3 };
const NOTE_LAND: [number, number, number][] = [[-430, -220, 0.3], [380, -200, -0.3], [400, 40, 0.2], [-650, 330, -0.15], [560, 420, 0.5]];
const noteY = (n: { p0: V3; vy: number }, s: number) => n.p0[1] + (n.vy + VT) * TDRAG * (1 - Math.exp(-s / TDRAG)) - VT * s;
const sway = (n: { ax: number; az: number; ph: number }, s: number) => {
  const a = SWAY_W * s + n.ph, k = clamp01(s / 3);
  return { x: k * n.ax * (Math.sin(a) - Math.sin(n.ph)), z: k * n.az * (Math.cos(a * 0.8) - Math.cos(n.ph)) };
};
const NOTES: Nt[] = NOTE_LAND.map(([lx, lz, yawL], j) => {
  const p0: V3 = [(hash(j, 1, 8) - 0.5) * 40, NOTES0 + NH.y + j * NOTE_STEP, (hash(j, 2, 8) - 0.5) * 20];
  const base = { p0, vy: 260 + 12 * j, ax: 34 + 18 * hash(j, 3, 8), az: 20 + 14 * hash(j, 4, 8), ph: hash(j, 5, 8) * 6.28 };
  const rest = NH.y + GAP;
  let s = 0.5;
  while (noteY(base, s) > rest && s < 400) s += 0.01;
  const sw = sway(base, s), dr = TDRAG * (1 - Math.exp(-s / TDRAG));
  const vx = (lx - p0[0] - sw.x) / dr, vz = (lz - p0[2] - sw.z) / dr;
  return { ...base, yaw0: (hash(j, 6, 8) - 0.5) * 0.5, t0: TAU_I, vx, vz, spin: yawL, tilt: 0.42 + 0.2 * hash(j, 7, 8), tL: s, L: [lx, rest, lz] };
});
const noteAt = (n: Nt, tau: number): { p: V3; q: THREE.Quaternion; stage: "rest" | "fly" | "down" } => {
  const s = tau - n.t0;
  if (s <= 0) return { p: [...n.p0], q: orient(n.yaw0, [1, 0, 0], 0), stage: "rest" };
  if (s >= n.tL) return { p: [...n.L], q: orient(n.yaw0 + n.spin, [1, 0, 0], 0), stage: "down" };
  const sw = sway(n, s), dr = TDRAG * (1 - Math.exp(-s / TDRAG));
  const y = noteY(n, s);
  const yaw = n.yaw0 + n.spin * (s / n.tL);
  // the leaf's tilt: it banks into its swing; it flattens as it nears the table, and while it is flung up
  const a = SWAY_W * s + n.ph;
  const k = clamp01((s - 1) / 3) * clamp01((y - n.L[1]) / 70);
  qY.setFromAxisAngle(Y, yaw);
  qR.setFromAxisAngle(vAx.set(0, 0, 1), -n.tilt * k * Math.cos(a));
  const qq = new THREE.Quaternion().setFromAxisAngle(X, n.tilt * 0.6 * k * Math.sin(a * 0.8));
  const q = qY.multiply(qR).multiply(qq).clone();
  const p: V3 = [n.p0[0] + n.vx * dr + sw.x, y, n.p0[2] + n.vz * dr + sw.z];
  p[1] = Math.max(p[1], -lowOf(NHE, q) + GAP);
  return { p, q, stage: "fly" };
};

// ══ THE CAMERA: a real camera in the table world (position C, target T) ══
type Shot = { c: V3; t: V3 };
/** f0: beside the glove, a little ahead of it and above, looking back along it at its punching face */
const G0 = gloveAt(0).p;
const K0: Shot = { c: [G0[0] - 250, YG + 150, 690], t: [G0[0] + 150, YG - 10, 0] };
/** the punch lands: the stack and the fist, from the front right */
const K1: Shot = { c: [320, 360, 1180], t: [90, 280, 0] };
/** the burst: rising with it */
const K2: Shot = { c: [150, 560, 1180], t: [-60, 470, 40] };
const K3: Shot = { c: [120, 1120, 600], t: [-20, 200, -150] };
/** ★ "$365": over the brick's band, looking down at 64°, the figure across the frame's middle */
const BAND_C: V3 = [HERO_REST[0] + BAND.X, HERO_REST[1] + HH.y, HERO_REST[2]];
const LOOK = (64 * Math.PI) / 180, NEAR = 322;   // close: the strap's figure ~480 px across
const K4: Shot = { c: [BAND_C[0] + 6, BAND_C[1] + NEAR * Math.sin(LOOK), BAND_C[2] + NEAR * Math.cos(LOOK)], t: [BAND_C[0] + 6, BAND_C[1], BAND_C[2] - 42] };
/** "We counted the fights": back and up, the landed money round the brick */
const FAR = 980, LOOK2 = (58 * Math.PI) / 180;
const K5: Shot = { c: [BAND_C[0] + 60, BAND_C[1] + FAR * Math.sin(LOOK2), BAND_C[2] + FAR * Math.cos(LOOK2)], t: [BAND_C[0] + 50, 0, BAND_C[2] - 6] };
const K6: Shot = { c: [K5.c[0] - 40, K5.c[1] - 20, K5.c[2] - 30], t: [K5.t[0] - 26, 0, K5.t[2] - 10] };
/** the spline's keys: [frame, shot, held?] (a held key is passed at rest) */
const KEYS: [number, Shot, boolean][] = [[F_IMP, K1, true], [80, K2, false], [132, K3, false], [W365 - 4, K4, true], [R1 + 2, K4, true], [WE + 4, K5, true], [LAST, K6, true]];
const herm = (f: number, pick: (s: Shot) => V3): V3 => {
  let i = 0;
  while (i < KEYS.length - 2 && f > KEYS[i + 1][0]) i++;
  const [fa, sa, ha] = KEYS[i], [fb, sb, hb] = KEYS[i + 1];
  const t = clamp01((f - fa) / (fb - fa)), dt = fb - fa;
  const tan = (j: number): V3 => {
    if (KEYS[j][2] || j === 0 || j === KEYS.length - 1) return [0, 0, 0];
    const p = pick(KEYS[j - 1][1]), n = pick(KEYS[j + 1][1]), d = KEYS[j + 1][0] - KEYS[j - 1][0];
    return [(n[0] - p[0]) / d, (n[1] - p[1]) / d, (n[2] - p[2]) / d];
  };
  const A = pick(sa), B = pick(sb), ta = ha ? [0, 0, 0] : tan(i), tb = hb ? [0, 0, 0] : tan(i + 1);
  const h00 = 2 * t ** 3 - 3 * t ** 2 + 1, h10 = t ** 3 - 2 * t ** 2 + t, h01 = -2 * t ** 3 + 3 * t ** 2, h11 = t ** 3 - t ** 2;
  return [0, 1, 2].map((k) => h00 * A[k] + h10 * dt * ta[k] + h01 * B[k] + h11 * dt * tb[k]) as V3;
};
/** f0 → the impact: decelerating from the glove's own pace to rest as the punch lands */
const camAt = (f: number): Shot => {
  if (f <= F_IMP) {
    // riding with the glove (its pace at f0), handing over to the impact's framing, at rest as the punch lands
    const g = gloveAt(f).p, d: V3 = [g[0] - G0[0], 0, 0];
    const k = clamp01(f / F_IMP) ** 1.6, w = k * k * (3 - 2 * k);
    return { c: lerp3([K0.c[0] + d[0], K0.c[1], K0.c[2]], K1.c, w), t: lerp3([K0.t[0] + d[0], K0.t[1], K0.t[2]], K1.t, w) };
  }
  return { c: herm(f, (s) => s.c), t: herm(f, (s) => s.t) };
};

// ══ THE FRAME'S POSES ══
const NB = N_BASE + N_STRUCK + N_TOP;
const ID = new THREE.Quaternion();
const Vm = new THREE.Matrix4();
const STORY: CamKey[] = [{ at: -9999, x: 540, y: 960, z: 1, dur: 1 }, { at: W365 + 8, x: 540, y: 960, z: 1, dur: 40 }];
const CAM: CamKey[] = alive(S, STORY, LAST, { amp: 0.16 });
const toScreen = (f: number, p: readonly number[], c = camAt(f)) => {
  const v = camView(CAM, f);
  viewMatrix(c.c, c.t, Vm);
  const l = toLayer(Vm, p);
  return { x: 540 + (l.x - v.x) * v.z, y: 960 + (l.y - v.y) * v.z, s: l.s, d: l.d };
};
const boxCorners = (p: V3, q: THREE.Quaternion, he: V3) => {
  const out: V3[] = [];
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1]) {
    corner.set(sx * he[0], sy * he[1], sz * he[2]).applyQuaternion(q);
    out.push([p[0] + corner.x, p[1] + corner.y, p[2] + corner.z]);
  }
  return out;
};
/** ★ the struck bundles leave the frame for good: each is hidden from the first frame its box is wholly off screen to the
 *  left (or behind the lens), never to come back (they fly on out of the shot) */
const offScreen = (f: number, b: Fl) => {
  const st = flAt(b, tauAt(f));
  return boxCorners(st.p, st.q, b.he).every((c) => { const s = toScreen(f, c); return s.s <= 0 || s.x < -160 || s.y > 2080; });
};
const STRUCK_HIDE = STRUCK.map((b, k) => {
  for (let f = F_IMP + 2; f <= LAST; f++) if (offScreen(f, b)) {
    for (let g = f; g <= LAST; g++) if (!offScreen(g, b)) fail(`hook: struck bundle ${k} comes back into the frame at f${g}`);
    return f;
  }
  fail(`hook: struck bundle ${k} never leaves the frame`);
  return LAST + 1;
});
/** the glove is hidden once it has been drawn back out of the frame (right) */
const gloveOff = (f: number) => {
  const g = gloveAt(f);
  const qg = new THREE.Quaternion(...g.q);
  return GLOVE_BOXES.every(([a, b]) => {
    const c: V3 = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2], he: V3 = [(b[0] - a[0]) / 2, (b[1] - a[1]) / 2, (b[2] - a[2]) / 2];
    corner.set(...c).applyQuaternion(qg);
    return boxCorners([g.p[0] + corner.x, g.p[1] + corner.y, g.p[2] + corner.z], qg, he).every((p) => { const s = toScreen(f, p); return s.s <= 0 || s.x > 1240 || s.y > 2080; });
  });
};
const GLOVE_HIDE = (() => {
  for (let f = F_IMP + 10; f <= LAST; f++) if (gloveOff(f)) {
    for (let g = f; g <= LAST; g++) if (!gloveOff(g)) fail(`hook: the glove comes back into the frame at f${g}`);
    return f;
  }
  fail("hook: the glove never leaves the frame");
  return LAST + 1;
})();

const pose = (p: V3, q: THREE.Quaternion, vis = true): BodyP => ({ p, q: [q.x, q.y, q.z, q.w], vis });
const paramsAt = (f: number): HookP => {
  const tau = tauAt(f);
  const cam = camAt(f);
  const g = gloveAt(f);
  const bundles: BodyP[] = [];
  for (let i = 0; i < N_BASE; i++) bundles.push(pose(BASE[i], new THREE.Quaternion().setFromAxisAngle(Y, jit(i).yaw)));
  STRUCK.forEach((b, k) => { const s = flAt(b, tau); bundles.push(pose(s.p, s.q, f < STRUCK_HIDE[k])); });
  TOPS.forEach((b) => { const s = flAt(b, tau); bundles.push(pose(s.p, s.q)); });
  const h = flAt(HERO, tau);
  return {
    cam, glove: { p: g.p, q: g.q, vis: f < GLOVE_HIDE }, bundles, hero: pose(h.p, h.q),
    notes: NOTES.map((n) => { const s = noteAt(n, tau); return pose(s.p, s.q); }),
  };
};
void NB; void ID;

// ══ ★ THE CHECKS, at module load ══════════════════════════════════════════════════════════════════
// (1) CLEARANCE: every pair of bodies (the glove as its two boxes) on every half frame, by separating axes on their boxes;
//     every body above the table. (2) THE CAPTION BAND: once everything has landed, every body's box and the table's lit
//     pool stay below y 662 on screen. (3) THE REEL ZONES: the band's figure stays left of x 938 and above y 1498 while it is
//     read. (4) NO NUMBER BEFORE 2 s: the band's figure is never turned to the lens (nor large enough to read) before f60.
// (5) THE CUFF: the camera never looks into the glove's open cuff. (6) THE LENS: nothing comes within 160 px of the camera.
type OBB = { c: THREE.Vector3; ax: THREE.Vector3[]; e: V3; tag: string };
const obbOf = (p: V3, q: THREE.Quaternion, he: V3, tag: string, off: V3 = [0, 0, 0]): OBB => {
  const ax = [new THREE.Vector3(1, 0, 0).applyQuaternion(q), new THREE.Vector3(0, 1, 0).applyQuaternion(q), new THREE.Vector3(0, 0, 1).applyQuaternion(q)];
  const c = new THREE.Vector3(...off).applyQuaternion(q).add(new THREE.Vector3(...p));
  return { c, ax, e: he, tag };
};
const sepAxes = new THREE.Vector3();
/** the boxes' overlap depth (≤ 0: apart) by the 15 separating axes */
const overlap = (A: OBB, B: OBB) => {
  const d = new THREE.Vector3().subVectors(B.c, A.c);
  let minPen = Infinity;
  const test = (L: THREE.Vector3) => {
    const len = L.length();
    if (len < 1e-6) return true;
    L.multiplyScalar(1 / len);
    const ra = A.e[0] * Math.abs(A.ax[0].dot(L)) + A.e[1] * Math.abs(A.ax[1].dot(L)) + A.e[2] * Math.abs(A.ax[2].dot(L));
    const rb = B.e[0] * Math.abs(B.ax[0].dot(L)) + B.e[1] * Math.abs(B.ax[1].dot(L)) + B.e[2] * Math.abs(B.ax[2].dot(L));
    const pen = ra + rb - Math.abs(d.dot(L));
    if (pen < minPen) minPen = pen;
    return pen > 0;
  };
  for (const a of A.ax) if (!test(a.clone())) return minPen;
  for (const b of B.ax) if (!test(b.clone())) return minPen;
  for (const a of A.ax) for (const b of B.ax) if (!test(sepAxes.crossVectors(a, b).clone())) return minPen;
  return minPen;
};
const bodiesAt = (f: number) => {
  const P = paramsAt(f), tau = tauAt(f), out: OBB[] = [];
  const q = (b: BodyP) => new THREE.Quaternion(...b.q);
  P.bundles.forEach((b, i) => { if (b.vis) out.push(obbOf(b.p, q(b), BHE, `bundle-${i}`)); });
  out.push(obbOf(P.hero.p, q(P.hero), HHE, "hero"));
  P.notes.forEach((b, j) => out.push(obbOf(b.p, q(b), NHE, noteAt(NOTES[j], tau).stage === "rest" ? `note-${j}@rest` : `note-${j}`)));
  if (P.glove.vis) GLOVE_BOXES.forEach(([a, b], k) => out.push(obbOf(P.glove.p, q(P.glove), [(b[0] - a[0]) / 2, (b[1] - a[1]) / 2, (b[2] - a[2]) / 2], `glove${k}`,
    [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2])));
  return out;
};
const CLEAR: Record<string, { f: number; pen: number }> = {};
for (let f = 0; f <= LAST; f += 0.5) {
  const bs = bodiesAt(f);
  for (let i = 0; i < bs.length; i++) {
    const A = bs[i];
    // the table: no corner below it
    let low = Infinity;
    for (const a of [-1, 1]) for (const b of [-1, 1]) for (const c of [-1, 1]) low = Math.min(low, A.c.y + a * A.e[0] * A.ax[0].y + b * A.e[1] * A.ax[1].y + c * A.e[2] * A.ax[2].y);
    if (low < -0.05) { const k = `${A.tag}|table`; if (!CLEAR[k]) CLEAR[k] = { f, pen: -low }; }
    for (let j = i + 1; j < bs.length; j++) {
      const B = bs[j];
      if (A.tag.startsWith("glove") && B.tag.startsWith("glove")) continue;
      if (A.tag.endsWith("@rest") && B.tag.endsWith("@rest")) continue;   // the loose notes lie nested on the stack
      if (A.c.distanceTo(B.c) > 700) continue;
      const pen = overlap(A, B);
      if (pen > 0.05) { const k = `${A.tag.replace("@rest", "")}|${B.tag.replace("@rest", "")}`; if (!CLEAR[k]) CLEAR[k] = { f, pen }; }
    }
  }
}
for (const [k, v] of Object.entries(CLEAR)) fail(`hook: ${k.replace("|", " and ")} meet at f${v.f} (${v.pen.toFixed(1)} px into each other)`);

/** every body has landed by here (the notes last) */
const F_LANDED = Math.ceil(Math.max(...NOTES.map((n) => frameOf(n.t0 + n.tL)), ...TOPS.map((b) => frameOf(b.t0 + b.T! + b.tStop! + 4)), frameOf(HERO.t0 + HERO.T! + 4)));
if (F_LANDED > WE - 4) fail(`hook: the money is still moving at f${F_LANDED}, after "We counted" (f${WE})`);
{
  const POOL_EDGE: V3[] = [];
  for (let a = 0; a < 72; a++) { const t = (a / 72) * Math.PI * 2; POOL_EDGE.push([POOL_C[0] + Math.cos(t) * POOL_R[0] * 0.86, 0, POOL_C[1] + Math.sin(t) * POOL_R[1] * 0.86]); }
  for (let f = F_LANDED; f <= LAST; f++) {
    for (const b of bodiesAt(f)) {
      for (const [sx, sy, sz] of [[-1, -1, -1], [-1, -1, 1], [-1, 1, -1], [-1, 1, 1], [1, -1, -1], [1, -1, 1], [1, 1, -1], [1, 1, 1]]) {
        const p = b.c.clone().addScaledVector(b.ax[0], sx * b.e[0]).addScaledVector(b.ax[1], sy * b.e[1]).addScaledVector(b.ax[2], sz * b.e[2]);
        const s = toScreen(f, [p.x, p.y, p.z]);
        if (s.s > 0 && s.x > -40 && s.x < 1120 && s.y < 662) fail(`hook: ${b.tag} reaches y ${Math.round(s.y)} on screen at f${f}`);
      }
    }
    for (const p of POOL_EDGE) { const s = toScreen(f, p); if (s.s > 0 && s.x > -40 && s.x < 1120 && s.y < 662) fail(`hook: the table's pool reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`); }
  }
}
/** the band's figure: its print box on the band's top (band-local), in the table world */
const TEXT_W = BAND.W - 7, TEXT_H = 22;
const textCorners = (f: number) => {
  const h = flAt(HERO, tauAt(f));
  return [[-1, -1], [-1, 1], [1, -1], [1, 1]].map(([a, b]) => {
    corner.set(BAND.X + (a * TEXT_W) / 2, HERO_H / 2, (b * TEXT_H) / 2).applyQuaternion(h.q);
    return [h.p[0] + corner.x, h.p[1] + corner.y, h.p[2] + corner.z] as V3;
  });
};
for (let f = W365 - 14; f <= LAST; f++) for (const p of textCorners(f)) {
  const s = toScreen(f, p);
  if (s.x > 938 || s.y > 1498 || s.x < 60 || s.y < 662) fail(`hook: the band's figure reaches (${Math.round(s.x)}, ${Math.round(s.y)}) at f${f}`);
}
for (let f = 0; f < 60; f++) {
  const h = flAt(HERO, tauAt(f)), c = camAt(f);
  const n = new THREE.Vector3(0, 1, 0).applyQuaternion(h.q);
  const toCam = new THREE.Vector3(c.c[0] - h.p[0], c.c[1] - h.p[1], c.c[2] - h.p[2]).normalize();
  const tc = textCorners(f).map((p) => toScreen(f, p));
  const w = Math.max(...tc.map((s) => s.x)) - Math.min(...tc.map((s) => s.x));
  const covered = h.p[1] - HH.y + 0.1 < TOP0 && flAt(TOPS[0], tauAt(f)).p[1] - BH.y - (h.p[1] + HH.y) < 30;
  if (!covered && n.dot(toCam) > 0.3 && w > 90) fail(`hook: the band's figure faces the lens, ${Math.round(w)} px wide, at f${f} (before 2 s)`);
}
for (let f = 0; f < GLOVE_HIDE; f++) {
  const g = gloveAt(f), c = camAt(f);
  if (c.c[0] > g.p[0] + GL.CUFF1 - 120) fail(`hook: the camera can see into the glove's cuff at f${f}`);
}
for (let f = 0; f <= LAST; f += 1) {
  const c = camAt(f), cv = new THREE.Vector3(...c.c);
  for (const b of bodiesAt(f)) if (b.c.distanceTo(cv) - Math.hypot(...b.e) < 160) fail(`hook: ${b.tag} comes within ${Math.round(b.c.distanceTo(cv) - Math.hypot(...b.e))} px of the lens at f${f}`);
}

// ══ THE PLACE ══
const M3D = hookModel();
const RECT = { x: -140, y: -100, w: 1400, h: 2120 };
/** the light pools, fixed in the table world: round the stack, and round the brick where it lands */
const poolsAt = (f: number): [number, number, number, number][] => {
  const out: [number, number, number, number][] = [];
  const a = toScreen(f, [0, 0, 60]), b = toScreen(f, [HERO_REST[0], 0, HERO_REST[2] + 120]);
  if (a.s > 0) out.push([a.x, a.y, 760 * a.s, 420 * a.s]);
  if (b.s > 0) out.push([b.x, b.y, 520 * b.s, 300 * b.s]);
  return out;
};
const Hook: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={poolsAt(f)} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="money">
        <View3D name="hook" rect={RECT} eye={HOOK_EYE} make={M3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

// ══ THE SOUNDS, each on its own event's frame ══
const F_HERO_DOWN = Math.round(frameOf(HERO.t0 + HERO.T!));
const F_TOPS_DOWN = TOPS.map((b) => Math.round(frameOf(b.t0 + b.T!)));
const SFX: PlaceSfx[] = [
  { s: "punch", at: F_IMP, vol: 0.55, why: "the glove lands in the stack of bundles", mode: "peak" },
  { s: "cash", at: F_IMP + 2, end: Math.min(F_HERO_DOWN - 6, F_IMP + 100), vol: 0.32, why: "the bundles and loose notes burst and fly", mode: "within" },
  { s: "thump", at: F_HERO_DOWN, vol: 0.5, why: "the brick of bundles lands band up on the table", mode: "peak" },
  ...F_TOPS_DOWN.filter((at, k) => k === 0 || at - F_TOPS_DOWN[k - 1] >= 5).map((at, k): PlaceSfx => ({ s: "thump", at, vol: 0.32 - 0.03 * k, why: `a bundle lands on the table (${k + 1})`, mode: "peak" })),
];

export const HOOK_DEBUG = { F_IMP, TAU_I, R0, R1, W365, HISTORY, DONE, F_LANDED, STRUCK_HIDE, GLOVE_HIDE, F_HERO_DOWN, F_TOPS_DOWN, HERO, TOPS, NOTES, camAt, paramsAt, toScreen, tauAt, frameOf, BAND_TEXT };
void SETTLE;

export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp: Hook, align: () => "centre", focus: [540, 1150] },
  done: DONE,
  cam: CAM,
  sfx: SFX,
};
