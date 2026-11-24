import React from "react";
import { clamp01, INOUT } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { THREE } from "../../three/stage";
import {
  hookModel, viewMatrix, toLayer, HOOK_EYE, G, RB, RC, LIFT, CHQ, CHQ_HE, CHQ_REST, PRINT, POOL_FAR, poolAlpha, type HookP, type BodyP,
} from "../../three/props/hook";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 1 · THE HOOK (dark) — the putt that lips out, and the $800,000,000 cheque. ★ THE BRIEF: a real object in motion from
// frame 1, no number on screen before 2.0 s (the caption spells "eight hundred"), the figure landing on an object as it is said.
//  0 "Tiger Woods turned down $800 million to join LIV Golf." Frame 1: a golf ball already rolling across a close-mown green,
//    the camera low behind it, riding with it, the cup ahead; filmed at high speed (time runs at 0.4). The ball breaks gently
//    toward the hole, reaches it on "turned down", drops a hair over the lip, rides round the back of the cup's rim (225°),
//    and spins out the other side, rolling away to a stop as time snaps back to real speed. On "million" (2.0 s) a giant
//    presentation cheque falls from above, true gravity, and lands flat on the green behind the cup with weight (one edge
//    first, then the slap, a small settle); the camera cranes up and back over it as it lands: $800,000,000 large in its
//    amount box, PAY TO THE ORDER OF and a BLANK payee line, EIGHT HUNDRED MILLION DOLLARS, memo LIV GOLF, signature EMPTY.
//  1 "Every headline said so." The camera settles in on the figure.
//  2 "We went looking for the offer." It holds, breathing, for the hand-over.
//  The physics: the ball's centre follows one smooth path (a gentle break, then round the rim on its edge, then straight out),
//  its speed set by rolling friction (0.5 m/s² on the green, more on the rim's scrub), its height by the rim's edge under it
//  (it can never go through the turf), its turn by rolling without slipping about its contact (the turf, then the rim).
// ═══════════════════════════════════════════════════════════════════════════
const S = "hook" as const;
const fail = (msg: string) => { if ((globalThis as { __hookNoThrow?: boolean }).__hookNoThrow) console.log("CHECK:", msg); else throw new Error(msg); };
const TURNED = word(S, 0, /^turned/), DOWN = word(S, 0, /^down/);
const MILLION = word(S, 0, /^million/);
const EVERY = cue(S, 1), WE = cue(S, 2), END = cueEnd(S, 2);
const DONE = END + 4;
const LAST = DONE + 64;

type V3 = [number, number, number];
const lerp3 = (a: V3, b: V3, t: number): V3 => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const sm = (a: number, b: number, x: number) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const D2R = Math.PI / 180;

// ══ THE BALL'S PATH (green world, xz; px and PHYSICAL frames τ) ══
const A_ROLL = (500 * 2) / 900;          // rolling friction on the green: 0.5 m/s²
const A_OUT = 1.3;                        // after the lip (the rim's scrub has taken its spin)
const V_IN = 45;                          // at the rim: 0.68 m/s
const V_OUT = 32;                         // leaving it: 0.48 m/s
const B = 80;                             // the line's offset from the cup's axis
const Z_IN = Math.sqrt(RC * RC - B * B);  // where the centre crosses over the lip
const PHI_IN = Math.atan2(Z_IN, -B);      // ≈ 138°
const RIDE = 225 * D2R;
const PHI_OUT = PHI_IN + RIDE;
const K_OUT = 62;                         // dρ/dφ as it leaves the rim (it leaves at ~30° to the lip)
const SLOW = 0.4;                         // the high-speed camera
const F_IN = Math.round((TURNED + DOWN) / 2) + 10;   // the ball reaches the lip (just after "turned down")
const TAU_IN = F_IN * SLOW;
const S_APP = V_IN * TAU_IN + 0.5 * A_ROLL * TAU_IN * TAU_IN;  // the approach's length (from frame 0)
const BRK = 1.0e-4;                       // the break: the line bends toward +x as it nears the hole
type Pt = { x: number; z: number };
const approachAt = (d: number): Pt => ({ x: -B - BRK * Math.max(0, d - 80) ** 2, z: Z_IN + d });
const rhoAt = (phi: number) => {
  const line = B / Math.abs(Math.cos(phi));
  const k = (phi - PHI_IN) / RIDE;
  const ride = 84 - 3 * Math.sin(Math.PI * clamp01(k));
  const w1 = sm(PHI_IN, PHI_IN + 35 * D2R, phi);
  const body = phi < PHI_IN + 80 * D2R ? line * (1 - w1) + ride * w1 : ride;
  const w2 = sm(PHI_OUT - 60 * D2R, PHI_OUT, phi);
  return body * (1 - w2) + (RC + K_OUT * (phi - PHI_OUT)) * w2;
};
// the polyline: the approach (from its start to the lip), the ride, the line out
type Sm = { x: number; z: number; s: number; seg: 0 | 1 | 2 };
const PATH: Sm[] = [];
{
  const app: Pt[] = [];
  for (let d = 1400; d >= 0; d -= 1) app.push(approachAt(d));
  // trim the approach to S_APP of arc before the lip
  let acc = 0, start = app.length - 1;
  for (let i = app.length - 1; i > 0; i--) { acc += Math.hypot(app[i].x - app[i - 1].x, app[i].z - app[i - 1].z); if (acc >= S_APP) { start = i - 1; break; } }
  for (let i = start; i < app.length; i++) PATH.push({ ...app[i], s: 0, seg: 0 });
  for (let k = 1; k <= 900; k++) { const ph = PHI_IN + (RIDE * k) / 900, r = rhoAt(ph); PATH.push({ x: r * Math.cos(ph), z: r * Math.sin(ph), s: 0, seg: 1 }); }
  const e = 1e-4, pa = { x: rhoAt(PHI_OUT - e) * Math.cos(PHI_OUT - e), z: rhoAt(PHI_OUT - e) * Math.sin(PHI_OUT - e) }, pb = PATH[PATH.length - 1];
  const l = Math.hypot(pb.x - pa.x, pb.z - pa.z), dx = (pb.x - pa.x) / l, dz = (pb.z - pa.z) / l;
  const S_OUT = (V_OUT * V_OUT) / (2 * A_OUT);
  for (let s = 1; s <= Math.ceil(S_OUT); s++) PATH.push({ x: pb.x + dx * Math.min(s, S_OUT), z: pb.z + dz * Math.min(s, S_OUT), s: 0, seg: 2 });
  for (let i = 1; i < PATH.length; i++) PATH[i].s = PATH[i - 1].s + Math.hypot(PATH[i].x - PATH[i - 1].x, PATH[i].z - PATH[i - 1].z);
}
const iIn = PATH.findIndex((p) => p.seg === 1), iOut = PATH.findIndex((p) => p.seg === 2);
const L_APP = PATH[iIn].s, L_RIDE = PATH[iOut].s - L_APP;
const A_RIDE = (V_IN * V_IN - V_OUT * V_OUT) / (2 * L_RIDE);
const V0 = Math.sqrt(V_IN * V_IN + 2 * A_ROLL * L_APP);
// the speed and the clock along it (uniform deceleration on each step: exact, no division by a vanishing speed)
const TAU_S: number[] = [0], VEL: number[] = [V0];
for (let i = 1; i < PATH.length; i++) {
  const a = PATH[i].seg === 0 ? A_ROLL : PATH[i].seg === 1 ? A_RIDE : A_OUT;
  const ds = PATH[i].s - PATH[i - 1].s, v0 = VEL[i - 1];
  const v1 = Math.sqrt(Math.max(0, v0 * v0 - 2 * a * ds));
  VEL.push(v1);
  TAU_S.push(TAU_S[i - 1] + (ds > 0 ? (v0 - v1) / a : 0));
}
const TAU_RIDE_END = TAU_S[iOut], TAU_STOP = TAU_S[TAU_S.length - 1];
/** the ball's height over the green at a distance ρ from the cup's axis: on the turf, or on the lip's edge */
const ballY = (x: number, z: number) => {
  const r = Math.hypot(x, z);
  const lift = LIFT * sm(RC - 6, RC, r);
  return r >= RC ? RB + LIFT : Math.sqrt(Math.max(0, RB * RB - (RC - r) ** 2)) + lift;
};
// its turn: rolling without slipping about its contact (the turf under it, or the lip's edge beside it), and the side spin it
// takes off the rim as it spins away
const QS: THREE.Quaternion[] = [new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), 0.35)];
{
  const n = new THREE.Vector3(), t = new THREE.Vector3(), ax = new THREE.Vector3(), dq = new THREE.Quaternion();
  for (let i = 1; i < PATH.length; i++) {
    const a = PATH[i - 1], b = PATH[i], ds = b.s - a.s;
    const q = QS[i - 1].clone();
    if (ds > 1e-6) {
      const r = Math.hypot(b.x, b.z), y = ballY(b.x, b.z);
      if (r < RC) n.set(b.x - (RC * b.x) / r, y, b.z - (RC * b.z) / r).normalize(); else n.set(0, 1, 0);
      t.set(b.x - a.x, 0, b.z - a.z).normalize();
      ax.crossVectors(n, t).normalize();
      dq.setFromAxisAngle(ax, ds / RB); q.premultiply(dq);
      if (b.seg === 2) { dq.setFromAxisAngle(n, 0.014 * Math.exp(-(b.s - PATH[iOut].s) / 140) * ds); q.premultiply(dq); }
    }
    QS.push(q);
  }
}
const ballAtTau = (tau: number): { p: V3; q: THREE.Quaternion; v: number } => {
  if (tau >= TAU_STOP) { const k = PATH.length - 1, p = PATH[k]; return { p: [p.x, ballY(p.x, p.z), p.z], q: QS[k].clone(), v: 0 }; }
  let lo = 0, hi = TAU_S.length - 1;
  while (hi - lo > 1) { const m = (lo + hi) >> 1; if (TAU_S[m] <= tau) lo = m; else hi = m; }
  const k = (tau - TAU_S[lo]) / Math.max(1e-9, TAU_S[hi] - TAU_S[lo]);
  const a = PATH[lo], b = PATH[hi];
  const x = a.x + (b.x - a.x) * k, z = a.z + (b.z - a.z) * k;
  return { p: [x, ballY(x, z), z], q: QS[lo].clone().slerp(QS[hi], k), v: VEL[lo] + (VEL[hi] - VEL[lo]) * k };
};

// ══ SLOW MOTION: physical time τ(f) runs at SLOW from frame 0, and snaps back to real speed as the ball leaves the rim ══
const R0 = F_IN + (TAU_RIDE_END - TAU_IN) / SLOW, R1 = R0 + 9;
const rate = (f: number) => (f < R0 ? SLOW : f < R1 ? SLOW + (1 - SLOW) * INOUT((f - R0) / (R1 - R0)) : 1);
const TAU_OF: number[] = [0];
for (let k = 1; k <= 400 * 8; k++) { const f = k / 8; TAU_OF.push(TAU_OF[k - 1] + rate(f - 1 / 16) / 8); }
const tauAt = (f: number) => { if (f <= 0) return f * SLOW; const k = Math.min(TAU_OF.length - 1, f * 8); const i = Math.floor(k), a = k - i; return TAU_OF[i] + (TAU_OF[Math.min(TAU_OF.length - 1, i + 1)] - TAU_OF[i]) * a; };
const frameOf = (tau: number) => { let lo = -50, hi = 400; for (let n = 0; n < 50; n++) { const m = (lo + hi) / 2; if (tauAt(m) < tau) lo = m; else hi = m; } return hi; };
if (Math.abs(tauAt(F_IN) - TAU_S[iIn]) > 0.05) fail(`hook: the ball reaches the lip at τ${TAU_S[iIn].toFixed(2)}, not on f${F_IN}`);
const F_OUT = frameOf(TAU_RIDE_END), F_STOP = frameOf(TAU_STOP);

// ══ THE CHEQUE: it falls from rest, true gravity, a little turned and tilted (the air levels it as it falls), touches down
//    edge first and slaps flat on the green behind the cup, then settles with a small rebound ══
const F_LAND = MILLION + 8;                       // ★ lands on "million"
const TAU_LAND = tauAt(F_LAND);
const T_FALL = 9.2;                               // physical frames in the air
const TAU_DROP = TAU_LAND - T_FALL;
const Y_REST = CHQ_HE[1] + 0.3;
const Y_DROP = Y_REST + 0.5 * G * T_FALL * T_FALL;
const YAW_REST = 2 * D2R, YAW_DROP = 9 * D2R, TILT_X = 5.5 * D2R, TILT_Z = -3 * D2R;
const qA = new THREE.Quaternion(), qB = new THREE.Quaternion(), eA = new THREE.Euler();
const corner = new THREE.Vector3();
const lowOf = (he: V3, q: THREE.Quaternion) => {
  let m = Infinity;
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1]) m = Math.min(m, corner.set(sx * he[0], sy * he[1], sz * he[2]).applyQuaternion(q).y);
  return m;
};
const chequeAt = (f: number): { p: V3; q: THREE.Quaternion; vis: boolean; stage: "off" | "fall" | "down" } => {
  const tau = tauAt(f), s = tau - TAU_DROP;
  if (s < 0) return { p: [CHQ_REST[0], Y_DROP, CHQ_REST[2]], q: new THREE.Quaternion(), vis: false, stage: "off" };
  const lev = 1 - sm(T_FALL - 2.6, T_FALL + 0.6, s);           // its tilt: levelled by the air, then flat on the green
  eA.set(TILT_X * lev, YAW_REST + (YAW_DROP - YAW_REST) * (1 - sm(0, T_FALL + 0.6, s)), TILT_Z * lev, "YXZ");
  qA.setFromEuler(eA);
  let y = Y_DROP - 0.5 * G * s * s;
  y = Math.max(y, -lowOf(CHQ_HE, qA) + 0.3);                    // ★ a corner touches first: it never dips into the green
  const u = s - (T_FALL + 0.6);
  if (u > 0) y = Y_REST + 2.6 * Math.exp(-u / 1.4) * Math.abs(Math.sin((Math.PI * u) / 2.2));
  const drift = 1 - sm(0, T_FALL, s);
  return { p: [CHQ_REST[0] - 18 * drift, y, CHQ_REST[2] + 26 * drift], q: qA.clone(), vis: true, stage: u > 0 ? "down" : "fall" };
};
const F_SLAP = frameOf(TAU_DROP + T_FALL + 0.6);

// ══ THE CAMERA: a real camera in the green world (position C, target T) ══
type Shot = { c: V3; t: V3 };
/** riding with the ball: low behind it and to its right, looking down its line at the cup */
const OFF_C: V3 = [92, 118, 400], OFF_T: V3 = [-14, -RB, -470];
/** the lip-out: over the cup from its near right, low enough to see into it */
const K1: Shot = { c: [120, 250, 640], t: [-4, -14, -26] };
/** the crane: rising and pulling back as the cheque comes down */
const K2: Shot = { c: [90, 1500, 1350], t: [30, 0, -380] };
/** ★ the cheque, from above at 58°, the whole board across the frame */
const LOOK3 = 58 * D2R, FAR3 = 3150;
const T3: V3 = [44, 0, -600];
const K3: Shot = { c: [T3[0], FAR3 * Math.sin(LOOK3), T3[2] + FAR3 * Math.cos(LOOK3)], t: T3 };
/** "Every headline said so": settling in on the figure */
const LOOK4 = 60 * D2R, FAR4 = 3030;
const T4: V3 = [62, 0, -590];
const K4: Shot = { c: [T4[0], FAR4 * Math.sin(LOOK4), T4[2] + FAR4 * Math.cos(LOOK4)], t: T4 };
const K5: Shot = { c: [K4.c[0] + 30, K4.c[1] - 40, K4.c[2] - 20], t: [T4[0] + 18, 0, T4[2] - 6] };
const F_HAND = F_IN - 4;                          // the camera lets the ball run on into the cup
const KEYS: [number, Shot, boolean][] = [[F_HAND + 16, K1, true], [Math.round(R0) + 4, K1, true], [F_LAND - 2, K2, false], [F_LAND + 34, K3, true],
  [EVERY + 2, K3, true], [EVERY + 34, K4, true], [LAST, K5, true]];
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
  const A = pick(sa), Bp = pick(sb), ta = ha ? [0, 0, 0] : tan(i), tb = hb ? [0, 0, 0] : tan(i + 1);
  const h00 = 2 * t ** 3 - 3 * t ** 2 + 1, h10 = t ** 3 - 2 * t ** 2 + t, h01 = -2 * t ** 3 + 3 * t ** 2, h11 = t ** 3 - t ** 2;
  return [0, 1, 2].map((k) => h00 * A[k] + h10 * dt * ta[k] + h01 * Bp[k] + h11 * dt * tb[k]) as V3;
};
/** the follow: the ball's xz (its own ground line, never its dips) with the offsets */
const followAt = (f: number): Shot => {
  const b = ballAtTau(tauAt(f)).p;
  return { c: [b[0] + OFF_C[0], OFF_C[1] + RB, b[2] + OFF_C[2]], t: [b[0] + OFF_T[0], RB + OFF_T[1], b[2] + OFF_T[2]] };
};
const camAt = (f: number): Shot => {
  const k0 = KEYS[0][0];
  if (f <= k0) {
    // riding with the ball at its pace, handing over to the lip's framing, at rest as the ball rides round
    const w0 = sm(F_HAND - 12, k0, f);
    const fo = followAt(Math.min(f, F_HAND));
    const fw = followAt(f);
    const ride: Shot = { c: lerp3(fw.c, fo.c, sm(F_HAND - 12, F_HAND + 6, f)), t: lerp3(fw.t, fo.t, sm(F_HAND - 12, F_HAND + 6, f)) };
    return { c: lerp3(ride.c, K1.c, w0), t: lerp3(ride.t, K1.t, w0) };
  }
  return { c: herm(f, (s) => s.c), t: herm(f, (s) => s.t) };
};

// ══ THE POOL OF LIGHT ON THE GREEN: wide while the camera is down on the turf, closing round the cup and the cheque as it
//    cranes up (its far edge stays clear under the caption band once the cheque has landed) ══
const POOL_A = { c: [-60, 180], r: [1900, 2200, 2200] };
const POOL_B = { c: [40, -560], r: [860, 600, 1480] };
const poolAt = (f: number) => {
  const k = INOUT(clamp01((f - (F_LAND - 22)) / 36));
  return { c: POOL_A.c.map((v, i) => v + (POOL_B.c[i] - v) * k) as [number, number], r: POOL_A.r.map((v, i) => v + (POOL_B.r[i] - v) * k) as [number, number, number] };
};

// ══ THE FRAME ══
const STORY: CamKey[] = [{ at: -9999, x: 540, y: 960, z: 1, dur: 1 }, { at: F_LAND + 40, x: 540, y: 960, z: 1, dur: 40 }];
const CAM: CamKey[] = alive(S, STORY, LAST, { amp: 0.16 });
const Vm = new THREE.Matrix4();
const toScreen = (f: number, p: readonly number[], c = camAt(f)) => {
  const v = camView(CAM, f);
  viewMatrix(c.c, c.t, Vm);
  const l = toLayer(Vm, p);
  return { x: 540 + (l.x - v.x) * v.z, y: 960 + (l.y - v.y) * v.z, s: l.s, d: l.d };
};
const pose = (p: V3, q: THREE.Quaternion, vis = true): BodyP => ({ p, q: [q.x, q.y, q.z, q.w], vis });
const paramsAt = (f: number): HookP => {
  const b = ballAtTau(tauAt(f)), ch = chequeAt(f), cam = camAt(f), pl = poolAt(f);
  const r = Math.hypot(b.p[0], b.p[2]);
  const ballPad = sm(RC + 4, RC + RB * 0.9, r);
  const chqPad = ch.stage === "off" ? 0 : clamp01(1 - (ch.p[1] - Y_REST) / 60) ** 2;
  return { cam, ball: pose(b.p, b.q), cheque: pose(ch.p, ch.q, ch.vis), ballPad, chqPad, poolC: pl.c, poolR: pl.r };
};

// ══ ★ THE CHECKS, at module load ══════════════════════════════════════════════════════════════════
// (1) THE BALL: never below the turf, never into the lip (its distance to the rim's edge ≥ its radius), its path smooth
//     (no kink over 3° between steps). (2) THE CHEQUE: never into the green; clear of the cup and the ball on every frame.
// (3) NO NUMBER BEFORE 2 s: before f60 the cheque is off the frame, or its face is turned from the lens. (4) THE CAPTION BAND:
//     once landed, every corner of the board and the pool's visible edge stay below y 662. (5) THE REEL ZONES: the figure's
//     box stays left of x 938 and above y 1498 while it is read. (6) THE LENS: nothing within 160 px of the camera.
// (7) THE HAND-OVER: the pool's edge stays inside the view's canvas (x < 1240) from DONE on.
for (let i = 1; i < PATH.length - 1; i++) {
  const a = PATH[i - 1], b = PATH[i], c = PATH[i + 1];
  const t1 = Math.atan2(b.z - a.z, b.x - a.x), t2 = Math.atan2(c.z - b.z, c.x - b.x);
  let d = Math.abs(t2 - t1); if (d > Math.PI) d = 2 * Math.PI - d;
  if (d > 3 * D2R) fail(`hook: the ball's path kinks ${(d / D2R).toFixed(1)}° at s ${b.s.toFixed(0)}`);
  const r = Math.hypot(b.x, b.z), y = ballY(b.x, b.z);
  if (r < RC && Math.hypot(RC - r, y) < RB - 0.05) fail(`hook: the ball sinks into the lip at s ${b.s.toFixed(0)}`);
  if (r >= RC && y < RB) fail(`hook: the ball sinks into the turf at s ${b.s.toFixed(0)}`);
}
const chqCorners = (f: number) => {
  const c = chequeAt(f), out: V3[] = [];
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1]) {
    corner.set(sx * CHQ_HE[0], sy * CHQ_HE[1], sz * CHQ_HE[2]).applyQuaternion(c.q);
    out.push([c.p[0] + corner.x, c.p[1] + corner.y, c.p[2] + corner.z]);
  }
  return out;
};
/** a point of the cheque's face (print px u, v from its top-left) in the green world */
const facePt = (f: number, u: number, v: number): V3 => {
  const c = chequeAt(f);
  corner.set(u - CHQ.W / 2, CHQ_HE[1], v - CHQ.D / 2).applyQuaternion(c.q);
  return [c.p[0] + corner.x, c.p[1] + corner.y, c.p[2] + corner.z];
};
for (let f = 0; f <= LAST; f += 0.5) {
  const c = chequeAt(f);
  if (!c.vis) continue;
  if (lowOf(CHQ_HE, c.q) + c.p[1] < 0.2) fail(`hook: the cheque dips into the green at f${f}`);
  const b = ballAtTau(tauAt(f)).p;
  // the ball against the cheque's box (in its own frame)
  const inv = c.q.clone().invert(), lp = new THREE.Vector3(b[0] - c.p[0], b[1] - c.p[1], b[2] - c.p[2]).applyQuaternion(inv);
  const dx = Math.max(0, Math.abs(lp.x) - CHQ_HE[0]), dy = Math.max(0, Math.abs(lp.y) - CHQ_HE[1]), dz = Math.max(0, Math.abs(lp.z) - CHQ_HE[2]);
  if (Math.hypot(dx, dy, dz) < RB + 4) fail(`hook: the ball meets the cheque at f${f}`);
  // clear of the hole (its near edge behind the cup's far lip)
  for (const p of chqCorners(f)) if (p[1] < 40 && Math.hypot(p[0], p[2]) < RC + 30) fail(`hook: the cheque lands on the cup at f${f}`);
}
for (let f = 0; f < 60; f++) {
  const c = chequeAt(f);
  if (!c.vis) continue;
  const cam = camAt(f);
  const n = new THREE.Vector3(0, 1, 0).applyQuaternion(c.q);
  const toCam = new THREE.Vector3(cam.c[0] - c.p[0], cam.c[1] - c.p[1], cam.c[2] - c.p[2]).normalize();
  const on = chqCorners(f).some((p) => { const s = toScreen(f, p); return s.s > 0 && s.x > -60 && s.x < 1140 && s.y > -60 && s.y < 1980; });
  if (on && n.dot(toCam) > 0.12) fail(`hook: the cheque's face is on screen and turned to the lens at f${f} (before 2 s)`);
}
const F_SETTLED = Math.ceil(F_SLAP) + 10;
for (let f = F_SETTLED; f <= LAST; f++) {
  for (const p of chqCorners(f)) { const s = toScreen(f, p); if (s.s > 0 && s.x > -40 && s.x < 1120 && s.y < 662) fail(`hook: the cheque reaches y ${Math.round(s.y)} on screen at f${f}`); }
  // the pool: every point of the green it still lights (a grid over it) below the band; from DONE, none at the canvas's right
  // edge (the hand-over trucks it across the frame)
  const pl = poolAt(f);
  let worstY = 9999, worstX = -9999;
  for (let i = 0; i <= 48; i++) for (let j = 0; j <= 48; j++) {
    const x = pl.c[0] + pl.r[0] * (-1 + (2 * i) / 48), z = pl.c[1] + (j < 24 ? -pl.r[1] * (1 - j / 24) : pl.r[2] * ((j - 24) / 24));
    const a = poolAlpha(pl.c, pl.r, x, z);
    if (a < 0.01) continue;
    const s = toScreen(f, [x, 0, z]);
    if (s.s <= 0) continue;
    if (a > 1 - POOL_FAR && s.x > -40 && s.x < 1120 && s.y < worstY) worstY = s.y;
    if (f >= DONE && s.y > -100 && s.y < 2020 && s.x > worstX) worstX = s.x;
  }
  if (worstY < 662) fail(`hook: the green's pool reaches y ${Math.round(worstY)} at f${f}`);
  if (worstX > 1210) fail(`hook: the green's pool reaches the canvas's right edge (x ${Math.round(worstX)}) at f${f}`);
}
const textBox = (f: number, box: readonly [number, number, number, number]) => [[box[0], box[1]], [box[2], box[1]], [box[0], box[3]], [box[2], box[3]]].map(([u, v]) => toScreen(f, facePt(f, u, v)));
for (let f = EVERY - 10; f <= LAST; f++) for (const [k, box] of Object.entries(PRINT)) for (const s of textBox(f, box)) {
  if (s.x > 938 && s.y > 1000) fail(`hook: the cheque's ${k} reaches (${Math.round(s.x)}, ${Math.round(s.y)}) at f${f} (the reel's buttons)`);
  if (s.y > 1498 || s.x < 40 || s.x > 1040 || s.y < 662) fail(`hook: the cheque's ${k} reaches (${Math.round(s.x)}, ${Math.round(s.y)}) at f${f}`);
}
for (let f = 0; f <= LAST; f++) {
  const c = camAt(f), cv = new THREE.Vector3(...c.c);
  const b = ballAtTau(tauAt(f)).p;
  if (cv.distanceTo(new THREE.Vector3(...b)) - RB < 160) fail(`hook: the ball comes within ${Math.round(cv.distanceTo(new THREE.Vector3(...b)) - RB)} px of the lens at f${f}`);
  if (c.c[1] < 60) fail(`hook: the camera dips to ${Math.round(c.c[1])} px over the green at f${f}`);
  if (chequeAt(f).vis) for (const p of chqCorners(f)) if (cv.distanceTo(new THREE.Vector3(...p)) < 200) fail(`hook: the cheque comes within 200 px of the lens at f${f}`);
}
if (F_STOP > WE) fail(`hook: the ball is still rolling at f${Math.round(F_STOP)}, after "We went" (f${WE})`);

// ══ THE PLACE ══
const M3D = hookModel();
const RECT = { x: -140, y: -100, w: 1360, h: 2120 };
/** the light pools on the dark ground, fixed in the green world: round the cup, and round the cheque */
const poolsAt = (f: number): [number, number, number, number][] => {
  const out: [number, number, number, number][] = [];
  const a = toScreen(f, [0, 0, 80]), b = toScreen(f, [CHQ_REST[0], 0, CHQ_REST[2] + 60]);
  if (a.s > 0) out.push([a.x, a.y, 820 * a.s, 420 * a.s]);
  if (b.s > 0 && f > F_LAND - 10) out.push([b.x, b.y, 1100 * b.s, 600 * b.s]);
  return out;
};
const Hook: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={poolsAt(f)} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="green">
        <View3D name="hook" rect={RECT} eye={HOOK_EYE} make={M3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

// ══ THE SOUNDS, each on its own event's frame ══
const F_RIM = Math.round(frameOf(TAU_S[iIn] + 0.6));
const SFX: PlaceSfx[] = [
  { s: "putt", at: 2, vol: 0.42, why: "the putter's stroke: the ball is already on its way", mode: "peak" },
  { s: "glide", at: 4, end: F_IN - 2, vol: 0.25, why: "the ball rolls across the green", mode: "within" },
  { s: "lipout", at: F_RIM + 2, vol: 0.5, why: "the ball rattles round the cup's lip and spins out", mode: "within" },
  { s: "thump", at: F_SLAP, vol: 0.55, why: "the foam-board cheque slaps flat on the green", mode: "peak" },
];

export const HOOK_DEBUG = { F_IN, R0, R1, F_OUT, F_STOP, F_LAND, F_SLAP, F_RIM, TAU_DROP, L_APP, L_RIDE, V0, A_RIDE, DONE, LAST, camAt, paramsAt, toScreen, tauAt, frameOf, chequeAt, ballAtTau, facePt, poolAt, PATH };

export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp: Hook, align: () => "centre", focus: [540, 1150] },
  done: DONE,
  cam: CAM,
  sfx: SFX,
};
