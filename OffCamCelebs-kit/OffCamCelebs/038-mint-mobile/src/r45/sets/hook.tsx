import React from "react";
import { clamp01, SETTLE, TRAVEL, INOUT } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { THREE } from "../../three/stage";
import { hash } from "../../three/kit029";
import {
  hookModel, viewMatrix, toLayer, HOOK_EYE, type HookP, type Pose,
  PL, PW, V_BACK, V_LENS, V_FRONT, LENS_Y, LENS_R, HT, TT, RE, TRAY_Y, TRAY_OUT, SIM_L, SIM_W, SIM_T, KPX, POOL_C, POOL_R,
} from "../../three/props/hook";
import type { Card, ScreenP } from "../../three/props/hook_screen";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 1 · THE HOOK (dark) — a phone ringing itself off a table. ★★★ THE BRIEF: "THE HOOK IS MOTION, NOT A NUMBER": frame 1
// is mid-buzz, and no digit is on screen before the phone has landed (≈ 3.5 s; the first caption spells "fifteen-dollar").
//  0 "Ryan Reynolds' fifteen-dollar-a-month phone company sold for $1.35 billion." A modern phone lies face up on a slab of
//    warm oak, its bottom end already over the edge, RINGING: the caller ID shows his round avatar (the photo slot; until it
//    is supplied the "RR" disc), "Ryan Reynolds", "mobile", Decline / Accept. It buzzes in a real ring cadence (double
//    pulses: each pulse a high-frequency jitter, a slide and a small twist), creeping over the edge. Its centre of mass
//    passes the edge: it TIPS about the oak's rounded edge, slides along its own back and goes over (a rigid body on a
//    rounded edge, with friction: integrated below), and falls under true gravity, turning as it goes. Mid-fall the SIM
//    TRAY pops out of its left side (the click) and TIME SLOWS (a 0.1× warp of physical time): the camera swings in and
//    follows the nano SIM as it spins out at the lens, its gold pads and its "MINT MOBILE" print turning through the light,
//    until it fills the frame on "$1.35" (the music's drop); time snaps back, the SIM whips past the lens, the camera cranes
//    down after the phone, which strikes the floor bottom end first, rocks back onto its back with a second, smaller hit,
//    rattles and settles, and its screen (blanked by the knock) WAKES on the news: "Mint Mobile sold for $1.35 billion".
//  1 "Every headline said so." The camera pushes in; on each beat a new headline drops onto the lock screen with a ping and
//    pushes the last one back into the soft stack behind it (ONE card readable at a time: one label "NEWS", one figure).
//  2 "We waited for the last payment." The stack is swiped away; one card: "FINAL PAYMENT", a spinner turning, "PENDING". The
//    camera eases back and the screen dims as phones do when nobody touches them: the wait, felt.
// ═══════════════════════════════════════════════════════════════════════════
const S = "hook" as const;
/** a failed check refuses the build (a test harness may set __hookNoThrow to list them instead) */
const STRICT = true;
const fail = (msg: string) => { if (!STRICT || (globalThis as { __hookNoThrow?: boolean }).__hookNoThrow) console.log("CHECK:", msg); else throw new Error(msg); };
const W135 = word(S, 0, /^\$1\.35/);               // the big beat (the bed's drop)
/** ★ Timur 2026-11-22 ("a tiny bit more screen time on the Mint Mobile SIM card itself"): the slow-motion close-up holds on
 *  the card this many frames past "$1.35" (the camera stays at SIM_NEAR, following it) before time snaps back */
const SIM_HOLD = 9;
const BILLION = word(S, 0, /^billion/);
const EVERY = cue(S, 1), HEADLINE = word(S, 1, /^headline/), SAID = word(S, 1, /^said/), SO = word(S, 1, /^so/);
const WE = cue(S, 2), WAITED = word(S, 2, /^waited/), LAST = word(S, 2, /^last/), PAYMENT = word(S, 2, /^payment/);
const END = cueEnd(S, 2);

// ══ PHYSICS (px and PHYSICAL frames: 3 px = 1 mm, g = 9.81 m/s² = 32.7 px/f²) ══════════════════════════
const G = (9810 * KPX) / 900;
const HALF = PL / 2;
/** the phone's radius of gyration² about its width axis (a slab L × t), per unit mass */
const K2 = (PL * PL + (V_FRONT + V_BACK) ** 2) / 12;
/** the oak's rounded front edge: its centre (z, y) */
const EC = { z: -RE, y: HT - RE };
const MU_S = 0.38, MU_K = 0.3;                      // glass on oiled oak
const SPIN_KEEP = 0.2;                                // the spin it keeps in flight once clear of the oak (see THE SPIN)
/** the phone's underside (u along the phone toward its BOTTOM end, v up its screen normal): the back glass, and the three
 *  lens rings standing 5 px proud near its top end */
const LENS_U0 = -(LENS_Y[0] + LENS_R), LENS_U1 = -(LENS_Y[2] - LENS_R);
const UNDER: [number, number][] = [];
for (let u = -HALF + 3.4; u <= HALF - 3.4; u += 2) UNDER.push([u, -V_BACK]);
for (let u = LENS_U0 + 1.5; u <= LENS_U1 - 1.5; u += 1.5) UNDER.push([u, -V_LENS]);
for (let a = 0; a <= 8; a++) { const t = (a / 8) * (Math.PI / 2); UNDER.push([HALF - 3.4 + 3.4 * Math.sin(t), -V_BACK + 3.4 - 3.4 * Math.cos(t)]); }
/** its whole outline (for the floor and the table's edge face) */
const HULL: [number, number][] = [...UNDER];
for (let u = -HALF + 3.4; u <= HALF - 3.4; u += 4) HULL.push([u, V_FRONT]);
for (let v = -V_BACK; v <= V_FRONT; v += 2) { HULL.push([HALF, v]); HULL.push([-HALF, v]); }
/** a body point (u, v) at pitch φ (nose — the bottom end — down positive): its offset from the centre (z, y) */
const off = (u: number, v: number, phi: number) => ({ z: v * Math.sin(phi) + u * Math.cos(phi), y: v * Math.cos(phi) - u * Math.sin(phi) });
/** the oak's support height at z (its flat top, then its rounded front edge; nothing beyond it) */
const support = (z: number) => (z <= -RE ? HT : z <= 0 ? EC.y + Math.sqrt(Math.max(0, RE * RE - (z + RE) ** 2)) : -Infinity);
/** ★ the phone at rest with its centre at z: the pitch that puts its centre lowest while every underside point stays on or
 *  above the oak (it settles on its lenses and on the bottom edge, or on the oak's edge once it overhangs). Returns the pose
 *  and whether that minimum is a true rest (false: it is tipping) */
const GAP = 0.35;                                    // a hair of clearance over what it rests on (the checks' tolerance)
const yAt = (zc: number, phi: number) => {
  let y = -Infinity;
  const c = Math.cos(phi), s = Math.sin(phi);
  for (const [u, v] of UNDER) { const h = support(zc + v * s + u * c); if (h > -Infinity) y = Math.max(y, h - (v * c - u * s)); }
  return y + GAP;
};
const restMemo = new Map<number, { phi: number; y: number; stable: boolean }>();
const restAt = (zc: number) => {
  const key = Math.round(zc * 100);
  const m = restMemo.get(key);
  if (m) return m;
  let best = { phi: 0, y: Infinity };
  for (let phi = -0.05; phi <= 0.35; phi += 0.004) { const y = yAt(zc, phi); if (y < best.y) best = { phi, y }; }
  const p0 = best.phi;
  for (let phi = p0 - 0.004; phi <= p0 + 0.004; phi += 0.0001) { const y = yAt(zc, phi); if (y < best.y) best = { phi, y }; }
  const r = { ...best, stable: best.phi < 0.3 };
  restMemo.set(key, r);
  return r;
};

// ── THE RING: double pulses (on 11 f, off 5 f, on 11 f, off 15 f), frame 0 mid-pulse. Each pulse slides the phone a little
//    and twists it (the motor's eccentric mass walks it over the wood); between pulses it lies still ──
const PULSES: [number, number][] = [[-5, 6], [11, 22], [37, 48], [53, 64], [79, 90]];
const SLIDE = [30, 38, 46, 54, 40];                  // px each pulse walks it toward the edge (+z)
const DRIFT_X = [-3, 5, -6, 4, -2];
const TWIST = [0.022, 0.018, 0.026, 0.02, 0.02];     // rad
const Z0 = -150;                                     // its centre at frame 0 (its bottom end 70 px over the edge)
const buzzOn = (f: number) => PULSES.some(([a, b]) => f >= a && f < b);
const walk = (f: number) => {
  let z = Z0, x = 6, psi = -0.09;
  PULSES.forEach(([a, b], i) => {
    const t = clamp01((f - a) / (b - a));
    const e = t * t * (3 - 2 * t);
    z += SLIDE[i] * e; x += DRIFT_X[i] * e; psi += TWIST[i] * e;
  });
  return { z, x, psi };
};
/** the buzz's jitter: a 15 Hz shake (alternating frames, its size varying), a small yaw rattle and a micro-hop */
const jitter = (f: number) => {
  if (!buzzOn(f)) return { dx: 0, dz: 0, dy: 0, dpsi: 0 };
  const s = f % 2 ? 1 : -1;
  return { dx: s * (0.6 + 0.9 * hash(f, 3, 1)), dz: -s * (0.4 + 0.7 * hash(f, 4, 1)), dy: 0.6 * hash(f, 5, 1), dpsi: s * 0.003 * (0.5 + hash(f, 6, 1)) };
};

// ── THE TIP AND THE SLIDE OFF: once the rest pose is lost, a rigid body on the oak's rounded edge (pivot EC, its centre at
//    σ along the phone and h off its face), with friction: the 2-dof Lagrangian (σ, φ), static or kinetic friction, released
//    when the normal force would pull (N < 0) or its top end passes the edge ──
type Seg = { t: number; z: number; y: number; phi: number; vz: number; vy: number; w: number };
const SIM_DT = 0.02;
const phys = (() => {
  // the creep, frame by frame, until the rest is lost
  let t0 = 0;
  for (let f = 0; f < 120; f += 0.125) { const r = restAt(walk(f).z); if (!r.stable) { t0 = f - 0.125; break; } }
  if (!t0) throw new Error("hook: the phone never reaches the edge — check SLIDE");
  const r0 = restAt(walk(t0).z);
  // the dynamic start: the pivot on the oak's edge, its centre σ along the phone from it
  let phi = r0.phi, w = 0;
  const hOf = (sg: number) => {
    // the contact over the pivot: the back glass, or the lens column, 5 px deeper. The column meets the ROUND edge before it
    // reaches the pivot (a 5 px step on a 6 px radius touches ~6 px early), so its clearance is the exact one over the circle:
    // it rides up over the edge as the column arrives (the jolt) and back down once the column has passed (the audit's PEN
    // found the old 3-px linear ride-up let the rings cut 2–3 px into the oak at f69)
    const R = RE + GAP, u = -sg;
    const d = u > LENS_U1 ? u - LENS_U1 : u < LENS_U0 ? LENS_U0 - u : 0;
    const lens = d < R ? V_LENS + Math.sqrt(R * R - d * d) : -Infinity;
    return Math.max(V_BACK + R, lens);
  };
  const cz0 = walk(t0).z;
  // σ from the centre's position relative to the pivot along û
  let sg = (cz0 - EC.z) * Math.cos(phi) - (r0.y - EC.y) * Math.sin(phi), sgd = 0;
  const tr: Seg[] = [];
  let t = t0, released = false;
  const pose = () => {
    const h = hOf(sg);
    const z = EC.z + sg * Math.cos(phi) + h * Math.sin(phi), y = EC.y - sg * Math.sin(phi) + h * Math.cos(phi);
    return { z, y, h };
  };
  let prev = pose();
  for (let n = 0; n < 4000 && !released; n++) {
    const h = hOf(sg);

    // solve the two equations, with stick or slip friction
    const c = Math.cos(phi), s = Math.sin(phi);
    const I = h * h + sg * sg + K2;
    let sdd = 0, pdd = 0, N = 0;
    const stickPdd = (G * (sg * c + h * s) - 2 * sg * sgd * w) / I;
    const fReq = h * stickPdd - sg * w * w - G * s;
    N = G * c - 2 * sgd * w - h * w * w - sg * stickPdd;
    if (Math.abs(sgd) < 1e-4 && Math.abs(fReq) <= MU_S * Math.max(0, N)) { sdd = 0; pdd = stickPdd; }
    else {
      const dir = Math.abs(sgd) > 1e-4 ? Math.sign(sgd) : Math.sign(-fReq);
      for (let it = 0; it < 4; it++) {
        const f = -MU_K * Math.max(0, N) * dir;
        // [1 h; h I] [sdd; pdd] = [sg w² + g s + f; g(sg c + h s) − 2 sg sgd w + f RE]
        const a1 = sg * w * w + G * s + f, a2 = G * (sg * c + h * s) - 2 * sg * sgd * w + f * RE;
        const det = I - h * h;
        sdd = (I * a1 - h * a2) / det; pdd = (a2 - h * a1) / det;
        N = G * c - 2 * sgd * w - h * w * w - sg * pdd;
      }
    }
    if (N < 0 || sg > HALF - 3.4) { released = true; break; }
    w += pdd * SIM_DT; phi += w * SIM_DT;
    sgd += sdd * SIM_DT; sg += sgd * SIM_DT;
    t += SIM_DT;
    const p = pose();
    tr.push({ t, z: p.z, y: p.y, phi, vz: (p.z - prev.z) / SIM_DT, vy: (p.y - prev.y) / SIM_DT, w });
    prev = p;
  }
  const rel0 = tr[tr.length - 1];
  // ── ★ THE SPIN (a flagged deviation): a rigid phone tipped off a 45 cm table by its own buzz leaves the edge turning
  //    ~0.17 rad/f and passes vertical before it lands, so it goes over onto its face — the toast's law (out/hooktest/sweep.mjs,
  //    impact.mjs: no table height, friction or bounce lands it face up; every contact with the oak ADDS forward spin). The
  //    brief needs its screen. So once its trailing end has cleared the oak, its spin is cut to SPIN_KEEP: everything else
  //    stays exact (½gt², the impacts, the rocking, every contact) ──
  const rel = rel0;
  // ── FREE FLIGHT: ballistic centre, constant spin, until the hull's lowest point meets the floor ──
  // when its trailing end clears the oak (the first moment no hull point is over the oak's top): its spin is cut there
  const clearOf = (dt: number) => {
    const z = rel.z + rel.vz * dt, phi = rel.phi + rel.w * dt;
    return HULL.every(([u, v]) => z + off(u, v, phi).z > 1);
  };
  let tCut = 0;
  while (tCut < 20 && !clearOf(tCut)) tCut += 0.01;
  const wCut = rel.w * SPIN_KEEP;
  const fly = (dt: number) => {
    const phi = dt < tCut ? rel.phi + rel.w * dt : rel.phi + rel.w * tCut + wCut * (dt - tCut);
    return { z: rel.z + rel.vz * dt, y: rel.y + rel.vy * dt - 0.5 * G * dt * dt, phi, vz: rel.vz, vy: rel.vy - G * dt, w: dt < tCut ? rel.w : wCut };
  };
  const lowest = (z: number, y: number, phi: number) => {
    let m = Infinity, at: [number, number] = [0, 0];
    for (const [u, v] of HULL) { const o = off(u, v, phi); if (y + o.y < m) { m = y + o.y; at = [u, v]; } }
    return { m, at };
  };
  let dt = 0;
  // ★ the oak's front face (z 0, from its underside to its top) must never be crossed in flight
  let edgeHit = 0;
  for (; dt < 60; dt += 0.01) {
    const s = fly(dt);
    for (const [u, v] of HULL) {
      const o = off(u, v, s.phi), z = s.z + o.z, y = s.y + o.y;
      // inside the oak: behind its front face, between its underside and its (rounded) top
      if (z < -0.2 && y > HT - TT - 0.5 && y < support(z) - 0.2 && z > -400) edgeHit = Math.max(edgeHit, Math.min(-z, support(z) - y));
    }
    if (lowest(s.z, s.y, s.phi).m <= 0) break;
  }
  const tFall = dt;
  const hit = fly(tFall);
  const Q = lowest(hit.z, hit.y, hit.phi).at;
  const qo = off(Q[0], Q[1], hit.phi);
  const qz = hit.z + qo.z;
  // ── IMPACT 1 (plastic, no slip, at its corner Q): the angular momentum about Q carries over ──
  const rz = hit.z - qz, ry = hit.y - 0;
  const IQ = K2 + rz * rz + ry * ry;
  const LQ = K2 * hit.w + (ry * hit.vz - rz * hit.vy);
  let w1 = LQ / IQ;
  // then it rocks about Q under gravity until its back (the lenses or the back glass) meets the floor; each meeting bounces
  // it back with restitution 0.28, until it is still
  const dQ = Math.hypot(rz, ry), aQ = Math.atan2(ry, rz);   // the centre's polar position about Q at impact
  const phiQ0 = hit.phi;
  const rock: { t: number; phi: number }[] = [];
  let ph = phiQ0, tt = 0, bounces = 0;
  const groundAt = (p: number) => {
    // the centre at pitch p, Q fixed: rotate the impact configuration about Q by (p − φ0)
    const d = p - phiQ0, a = aQ - d;
    const z = qz + dQ * Math.cos(a), y = dQ * Math.sin(a);
    return { z, y, low: lowest(z, y, p) };
  };
  const restPhi = (() => { let p = phiQ0; for (; p > -0.3; p -= 0.0005) { const g = groundAt(p); if (g.low.m < -0.01 && Math.abs(g.low.at[0] - Q[0]) > 20) break; } return p + 0.0005; })();
  const bounceAt: number[] = [];
  for (let n = 0; n < 6000; n++) {
    const g = groundAt(ph);
    const lev = g.z - qz;                         // the centre's lever about Q (+: in front)
    const pdd = (G * lev) / IQ;
    w1 += pdd * SIM_DT; ph += w1 * SIM_DT; tt += SIM_DT;
    if (ph <= restPhi && w1 < 0) {
      ph = restPhi; bounceAt.push(tt);
      if (Math.abs(w1) < 0.004 || bounces > 4) { rock.push({ t: tt, phi: ph }); break; }
      w1 = -0.28 * w1; bounces++;
    }
    rock.push({ t: tt, phi: ph });
  }
  return { tCut, t0, r0, tr, rel, tRel: rel.t, fly, tFall, hit, qz, Q, rock, restPhi, groundAt, bounceAt, edgeHit, w1in: LQ / IQ };
})();
if (phys.edgeHit > 0.5) fail(`hook: the falling phone crosses the oak's front face by ${phys.edgeHit.toFixed(1)} px`);
if (phys.w1in > 0.002) fail(`hook: after the first impact the phone would go over onto its face (ω ${phys.w1in.toFixed(4)})`);

/** the phone's 2-D state (centre z, y and pitch) at PHYSICAL time τ */
const phoneAt = (tau: number) => {
  if (tau < phys.t0) { const r = restAt(walk(tau).z); return { z: walk(tau).z, y: r.y, phi: r.phi, stage: "rest" as const }; }
  if (tau < phys.tRel) {
    const tr = phys.tr; let i = Math.min(tr.length - 1, Math.max(0, Math.floor((tau - phys.t0) / SIM_DT)));
    const s = tr[i];
    return { z: s.z, y: s.y, phi: s.phi, stage: "tip" as const };
  }
  const dt = tau - phys.tRel;
  if (dt < phys.tFall) { const s = phys.fly(dt); return { z: s.z, y: s.y, phi: s.phi, stage: "fall" as const }; }
  const tt = dt - phys.tFall;
  const rk = phys.rock; const i = Math.min(rk.length - 1, Math.max(0, Math.floor(tt / SIM_DT)));
  const g = phys.groundAt(rk[i].phi);
  return { z: g.z, y: g.y, phi: rk[i].phi, stage: "floor" as const };
};
/** the physical moments: the tip starts, it leaves the edge, the tray pops, it hits the floor, the rocking's hits */
const TAU = {
  tip: phys.t0,
  release: phys.tRel,
  pop: phys.tRel + 0.15,                          // the knock of its lens column clearing the oak's corner pops it
  land: phys.tRel + phys.tFall,
  hits: phys.bounceAt.map((b) => phys.tRel + phys.tFall + b),
};

// ══ THE SLOW MOTION: physical time τ(f) runs at 1, eases down to 0.1 as the tray pops, holds, and eases back up after the
//    SIM's big frame on "$1.35" ══════════════════════════════════════════════════════════════════
const SLOW = 0.1;
const fS0 = Math.floor(TAU.pop - 1.5);             // the warp starts as the tray is about to pop (τ = f until here)
const RAMP_IN = 5, fS1 = W135 + 2 + SIM_HOLD, RAMP_OUT = 7;
const rate = (f: number) => {
  if (f < fS0) return 1;
  if (f < fS0 + RAMP_IN) return 1 + (SLOW - 1) * INOUT((f - fS0) / RAMP_IN);
  if (f < fS1) return SLOW;
  if (f < fS1 + RAMP_OUT) return SLOW + (1 - SLOW) * INOUT((f - fS1) / RAMP_OUT);
  return 1;
};
const TAU_OF: number[] = [];
for (let k = 0; k <= 400 * 8; k++) { const f = k / 8; TAU_OF.push(f <= fS0 ? f : TAU_OF[k - 1] + rate(f - 1 / 16) / 8); }
/** physical time at film frame f */
const tauAt = (f: number) => { if (f <= 0) return f; const k = Math.min(TAU_OF.length - 1, f * 8); const i = Math.floor(k), a = k - i; return TAU_OF[i] + (TAU_OF[Math.min(TAU_OF.length - 1, i + 1)] - TAU_OF[i]) * a; };
/** the film frame at which physical time reaches τ */
const frameOf = (tau: number) => { let lo = 0, hi = 400; for (let n = 0; n < 50; n++) { const m = (lo + hi) / 2; if (tauAt(m) < tau) lo = m; else hi = m; } return hi; };
const F_TIP = frameOf(TAU.tip), F_REL = frameOf(TAU.release), F_POP = frameOf(TAU.pop), F_LAND = frameOf(TAU.land);
const F_HITS = TAU.hits.map(frameOf);
const F_STILL = Math.ceil(F_HITS.length ? F_HITS[F_HITS.length - 1] : F_LAND) + 1;

// ══ THE PHONE'S FULL POSE (the yaw it walked to, the lie of its lenses, the tip about the oak's edge, the fall) ══
const qTmp = new THREE.Quaternion(), qA = new THREE.Quaternion(), qB = new THREE.Quaternion(), qC = new THREE.Quaternion();
const X = new THREE.Vector3(1, 0, 0), Y = new THREE.Vector3(0, 1, 0);
const LAY = new THREE.Quaternion().setFromAxisAngle(X, -Math.PI / 2);   // phone local → face up, its top toward −z
const poseMemo = new Map<number, Pose & { stage: string; phi: number }>();
const phonePose = (f: number): Pose & { stage: string; phi: number } => {
  const hit = poseMemo.get(f);
  if (hit) return hit;
  const r = phonePose0(f);
  poseMemo.set(f, r);
  return r;
};
const phonePose0 = (f: number): Pose & { stage: string; phi: number } => {
  const tau = tauAt(f);
  const st = phoneAt(tau);
  const wk = walk(Math.min(tau, TAU.tip));
  const j = st.stage === "rest" ? jitter(Math.round(f)) : { dx: 0, dz: 0, dy: 0, dpsi: 0 };
  const psi = wk.psi + j.dpsi;
  // R = Rx(φ) · Ry(ψ) · LAY: walked to its yaw on the table, tipped about the edge's line
  qA.setFromAxisAngle(X, st.phi); qB.setFromAxisAngle(Y, psi);
  qTmp.copy(qA).multiply(qB).multiply(LAY);
  return { p: [wk.x + j.dx, st.y + j.dy, st.z + j.dz], q: [qTmp.x, qTmp.y, qTmp.z, qTmp.w], stage: st.stage, phi: st.phi };
};

// ══ THE TRAY AND THE SIM ══════════════════════════════════════════════════════════════════════════
const TRAY_T = 1.3;                                  // physical frames for the tray's spring to push it to its stop
const trayAt = (tau: number) => (tau <= TAU.pop ? 0 : TRAY_OUT * SETTLE(clamp01((tau - TAU.pop) / TRAY_T)));
const TAU_SIM = TAU.pop + 0.75;                      // the SIM leaves its seat as the tray reaches ~2/3 of its travel
/** the SIM's seat, in the phone's local frame, with the tray out by `out` */
const seatLocal = (out: number) => new THREE.Vector3(-PW / 2 + 1 + 23 + 0.2 - out, TRAY_Y, 0);
const mPh = new THREE.Matrix4(), vSeat = new THREE.Vector3();
const seatWorld = (f: number) => {
  const p = phonePose(f);
  mPh.compose(new THREE.Vector3(...p.p), new THREE.Quaternion(...p.q), new THREE.Vector3(1, 1, 1));
  return { pos: seatLocal(trayAt(tauAt(f))).applyMatrix4(mPh), q: new THREE.Quaternion(...p.q) };
};
// its launch: the seat's own velocity (the phone falling and turning) plus the jolt that pops it out of the tray — outward
// through the slot (the phone's −x), off the plate (its +z) — and a tumble about a tilted axis
const F_SIM = frameOf(TAU_SIM);
const SIM0 = (() => {
  const a = seatWorld(F_SIM), b = seatWorld(frameOf(TAU_SIM + 0.05));
  const v = b.pos.clone().sub(a.pos).multiplyScalar(1 / 0.05);
  const out = new THREE.Vector3(-1, 0, 0).applyQuaternion(a.q), up = new THREE.Vector3(0, 0, 1).applyQuaternion(a.q);
  const rel = new THREE.Vector3().addScaledVector(out, 62).addScaledVector(up, 46).add(new THREE.Vector3(0, 10, 34));
  v.add(rel);
  return { p: a.pos.clone(), q: a.q.clone(), v, rel };
})();
const SPIN_AX = new THREE.Vector3(0.62, 1, 0.28).normalize(), SPIN_W = 0.52;   // rad per physical frame
/** the SIM after its launch: ballistic, tumbling; it lands flat on its pads' back (gold side up) and slides to rest */
const simAt = (f: number): Pose & { vis: boolean } => {
  const dt = tauAt(f) - TAU_SIM;
  const fall = (t: number) => SIM0.p.clone().addScaledVector(SIM0.v, t).add(new THREE.Vector3(0, -0.5 * G * t * t, 0));
  // its landing: the moment its centre is a half-thickness over the floor
  const v0y = SIM0.v.y, y0 = SIM0.p.y - SIM_T / 2;
  const tL = (v0y + Math.sqrt(v0y * v0y + 2 * G * y0)) / G;
  const tumble = (t: number) => qC.setFromAxisAngle(SPIN_AX, SPIN_W * t).premultiply(qTmp.copy(SIM0.q)).clone();
  // ★ gold side up at rest: its local +z (the pads) up, its long axis along its flight
  const vh = Math.atan2(SIM0.v.x, SIM0.v.z);
  const restQ = new THREE.Quaternion().setFromAxisAngle(Y, vh).multiply(new THREE.Quaternion().setFromAxisAngle(X, -Math.PI / 2));
  // its lowest corner under orientation q (it never goes into the floor: a card landing on an edge flops flat)
  const lowOf = (q: THREE.Quaternion) => {
    let m = Infinity;
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1]) m = Math.min(m, new THREE.Vector3(sx * SIM_W / 2, sy * SIM_L / 2, sz * SIM_T / 2).applyQuaternion(q).y);
    return m;
  };
  if (dt < tL - 2) { const p = fall(dt), q = tumble(dt); return { p: [p.x, Math.max(p.y, 0.3 - lowOf(q)), p.z], q: q.toArray() as Pose["q"], vis: true }; }
  if (dt < tL) {
    // the last two frames of the fall: air flattens a falling card (it planes) toward lying flat
    const p = fall(dt), k = SETTLE((dt - (tL - 2)) / 2);
    const q = tumble(dt).slerp(restQ, k);
    return { p: [p.x, Math.max(p.y, 0.3 - lowOf(q)), p.z], q: q.toArray() as Pose["q"], vis: true };
  }
  // on the floor: it skids along its flight and stops (kinetic friction), flat
  const land = fall(tL), hv = new THREE.Vector3(SIM0.v.x, 0, SIM0.v.z);
  const sp = hv.length() * 0.35, ts = sp / (0.45 * G);
  const t = Math.min(dt - tL, ts), d = sp * t - 0.5 * 0.45 * G * t * t;
  const p = land.addScaledVector(hv.normalize(), d);
  return { p: [p.x, SIM_T / 2 + 0.3, p.z], q: restQ.toArray() as Pose["q"], vis: true };
};

// ══ THE CAMERA: a real camera flying in the table world (position C, target T) ═══════════════════════
type V3 = [number, number, number];
const lerp3 = (a: V3, b: V3, t: number): V3 => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const add3 = (a: V3, b: V3, k = 1): V3 => [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k];
const ph = (f: number) => phonePose(f).p as V3;
const simP = (f: number) => simAt(f).p as V3;
// the floor's resting spot of the phone (where the camera goes)
const REST_P = ph(F_STILL + 2);
/** phase 1, the table: high in front and to the right, looking down ~48° at the phone, easing after it as it walks */
const C1a: V3 = [250, HT + 840, 780], C1b: V3 = [190, HT + 760, 730];
const T1 = (f: number): V3 => { const p = ph(Math.min(f, F_TIP)); return [p[0] * 0.6, HT - 14, p[2] - 150]; };
/** phase 2, the SIM: the camera comes in after it along its flight (its look along the flight, from ahead of it and a
 *  little above), closing from ~900 px to SIM_NEAR on the big beat; the SIM's path passes just beside the lens */
const SIM_NEAR = 112;
const CAM_OFF = -1.2;
// ★ never straight back along its flight (the phone it left would fill the frame behind it): 40° off its path away from the
//   phone, so the SIM turns against the dark and the phone falls out of the frame's side
const flightDir = SIM0.rel.clone().normalize();
const camDir = flightDir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), CAM_OFF).add(new THREE.Vector3(0, 0.18, 0)).normalize();
const camSide = new THREE.Vector3().crossVectors(camDir, new THREE.Vector3(0, 1, 0)).normalize();
const C2 = (f: number): V3 => {
  const s = simP(Math.max(f, F_SIM));
  const k = SETTLE(clamp01((f - F_SIM) / (W135 - F_SIM)));
  const d = 900 + (SIM_NEAR - 900) * k;
  return [s[0] + camDir.x * d + camSide.x * 26 * k, s[1] + camDir.y * d, s[2] + camDir.z * d + camSide.z * 26 * k];
};
/** phase 3, the floor: low in front, below the table's top (the oak leaves the frame above), looking down ~58° */
const C3: V3 = [REST_P[0] + 70, 560, REST_P[2] + 470];
const T3: V3 = [REST_P[0], 6, REST_P[2] - 80];
/** the camera at f */
const camAt = (f: number): { c: V3; t: V3 } => {
  // phase 1 → 2: from the table shot to the SIM, a 38-f move (TRAVEL) that hands the look from the phone to the SIM
  const A = F_TIP - 4, B = W135 + SIM_HOLD;
  if (f <= A) { const k = INOUT(clamp01(f / A)); return { c: lerp3(C1a, C1b, k), t: T1(f) }; }
  // the hold: close on the card, following it as it turns in slow motion
  if (f > W135 && f <= B) return { c: C2(f), t: simP(f) };
  if (f <= B) {
    const k = TRAVEL(clamp01((f - A) / (W135 - A)));
    const look = lerp3(T1(f), simP(Math.max(f, F_SIM)), SETTLE(clamp01((f - A) / (F_SIM + 4 - A))));
    return { c: lerp3(C1b, C2(f), k), t: look };
  }
  // phase 2 → 3: a 34-f crane down after the phone (the SIM whips past as it starts)
  const D = B + 3, E = D + 34;
  const cB = C2(B), tB = simP(B);
  if (f <= D) return { c: cB, t: tB };
  if (f <= E) {
    const k = TRAVEL(clamp01((f - D) / (E - D)));
    const follow = ph(f);
    const look = lerp3(lerp3(tB, [follow[0], Math.max(6, follow[1] - 40), follow[2]], SETTLE(clamp01((f - D) / 10))), T3, SETTLE(clamp01((f - D - 8) / (E - D - 8))));
    return { c: lerp3(cB, C3, k), t: look };
  }
  // phase 3: the floor. Settled at E; on "Every headline" in toward the card; on "We waited" back and up, slowly
  const PUSH_A = EVERY - 2, PUSH_B = PUSH_A + 40, BACK_A = WE + 6, BACK_B = END + 6;
  const tIn: V3 = [REST_P[0], 6, REST_P[2] - 115];
  const cIn = add3(C3, [-(C3[0] - tIn[0]) * 0.12, -(C3[1] - tIn[1]) * 0.12, -(C3[2] - tIn[2]) * 0.12]);
  const cOut = add3(C3, [10, 40, 30]);
  if (f <= PUSH_A) { const k = INOUT(clamp01((f - E) / (PUSH_A - E))); return { c: lerp3(C3, add3(C3, [-14, -8, -10]), k), t: T3 }; }
  if (f <= BACK_A) { const k = SETTLE(clamp01((f - PUSH_A) / (PUSH_B - PUSH_A))); return { c: lerp3(add3(C3, [-14, -8, -10]), cIn, k), t: lerp3(T3, tIn, k) }; }
  const k = INOUT(clamp01((f - BACK_A) / (BACK_B - BACK_A)));
  return { c: lerp3(cIn, cOut, k), t: lerp3(tIn, T3, k) };
};

// ══ THE SCREEN ═══════════════════════════════════════════════════════════════════════════════════
// ★ the headlines (paraphrased, never attributed to any outlet; every one the figure the voice says)
const HEADS: [string, string][] = [
  ["Mint Mobile sold for", "$1.35 billion"],
  ["T-Mobile to buy Mint", "Mobile for $1.35 billion"],
  ["Ryan Reynolds' Mint Mobile", "sells for $1.35 billion"],
  ["Mint Mobile deal:", "$1.35 billion"],
];
const F_WAKE = Math.ceil(F_STILL) + 2;               // the knocked screen wakes once the phone is still
const CARD_AT = [F_WAKE + 5, HEADLINE - 1, SAID + 1, SO + 4];
const CLEAR_A = WE + 1, PEND_A = WE + 7;
const CARDS: Card[] = HEADS.map(([l1, l2], i) => ({ l1, l2, at: CARD_AT[i], ...(i === 1 ? { thumb: "tmobile" } : {}) }));
const screenAt = (f: number): { s: ScreenP; b: number } => {
  const fi = Math.round(f);
  if (fi < F_LAND) return { s: { mode: "call", t: fi }, b: 1 };
  // the knock: the panel blanks, then wakes (a flicker as it comes up)
  if (fi < F_WAKE) return { s: { mode: "off" }, b: 0 };
  const wake = [0.25, 0.9, 0.55, 1][fi - F_WAKE] ?? 1;
  const dim = 1 - 0.36 * INOUT(clamp01((fi - (LAST - 6)) / (END + 4 - (LAST - 6))));
  if (fi < CLEAR_A) return { s: { mode: "lock", t: fi - F_WAKE, cards: CARDS, now: fi }, b: wake };
  return { s: { mode: "lock", t: fi - F_WAKE, cards: CARDS, now: fi, clear: (fi - CLEAR_A) / 8, pending: fi >= PEND_A ? fi - PEND_A : undefined, spin: fi - PEND_A }, b: wake * dim };
};

// ══ THE PLACE ════════════════════════════════════════════════════════════════════════════════════
const DONE = END + 4;
const STORY: CamKey[] = [
  { at: -9999, x: 540, y: 960, z: 1, dur: 1 },
  // the 3-D camera flies the action (f50 → the floor framing); the frame itself holds still meanwhile
  { at: 44, x: 540, y: 960, z: 1, dur: Math.ceil(W135 + SIM_HOLD + 40 - 44) },
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.22 });
const M3D = hookModel();
const RECT = { x: -140, y: -100, w: 1400, h: 2120 };
const Vm = new THREE.Matrix4();

const paramsAt = (f: number): HookP => {
  const cam = camAt(f);
  const pp = phonePose(f);
  const tau = tauAt(f);
  const sc = screenAt(f);
  return {
    cam: { c: cam.c, t: cam.t },
    phone: { p: pp.p, q: pp.q },
    tray: trayAt(tau),
    sim: tau >= TAU_SIM ? simAt(f) : null,
    screen: sc.s, bright: sc.b,
  };
};

// ── ★ THE CHECKS, at module load ──
// · the caption band: the phone's top and the oak's lit pool stay below y 660 on screen, except while the phone falls and
//   the camera flies after it (F_TIP − 4 … the floor framing settled): the brief's "in motion where the action demands";
//   there the phone and the SIM cross the band on purpose, moving fast (the fall, the SIM at the lens, the crane down)
// · the Reel zones: the notification's and the pending card's print stays left of x 940 and above y 1500
const FLY_A = F_TIP - 4, FLY_B = W135 + SIM_HOLD + 40;
const corners: V3[] = [];
for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1]) corners.push([sx * PW / 2, sy * HALF, sz * (sz > 0 ? V_FRONT : V_LENS)]);
const toScreen = (f: number, p: V3) => {
  const v = camView(CAM, f);
  const c = camAt(f);
  viewMatrix(c.c, c.t, Vm);
  const l = toLayer(Vm, p);
  return { x: 540 + (l.x - v.x) * v.z, y: 960 + (l.y - v.y) * v.z, s: l.s };
};
const phoneWorld = (f: number, local: V3): V3 => {
  const p = phonePose(f);
  const v = new THREE.Vector3(...local).applyQuaternion(new THREE.Quaternion(...p.q)).add(new THREE.Vector3(...p.p));
  return [v.x, v.y, v.z];
};
const POOL_EDGE: V3[] = [];
for (let a = 0; a < 64; a++) {
  const t = (a / 64) * Math.PI * 2, rho = 0.93;
  const x = POOL_C[0] + Math.cos(t) * POOL_R[0] * rho, z = POOL_C[1] + Math.sin(t) * POOL_R[1] * rho;
  if (z <= 0) POOL_EDGE.push([x, HT, z]);
}
for (let f = 0; f <= DONE + 44; f++) {
  if (f >= FLY_A && f <= FLY_B) continue;
  for (const c of corners) {
    const s = toScreen(f, phoneWorld(f, c));
    if (s.y < 662) fail(`hook: the phone reaches y ${Math.round(s.y)} on screen at f${f}`);
  }
  if (f < FLY_A) for (const p of POOL_EDGE) {
    const s = toScreen(f, p);
    if (s.x > -40 && s.x < 1120 && s.y < 662) fail(`hook: the oak's lit pool reaches y ${Math.round(s.y)} on screen at f${f} (x ${Math.round(s.x)})`);
  }
}
{
  // the cards' print (display px → phone local: x = px − 105, y = 218.5 − py), on the frames they are read
  const toLocal = (px: number, py: number): V3 => [px + 4 - 105, 218.5 - (py + 4), V_FRONT];
  for (let f = F_WAKE; f <= DONE + 30; f += 2) {
    for (const [px, py] of [[6, 110], [196, 110], [6, 300], [196, 300]] as const) {
      const s = toScreen(f, phoneWorld(f, toLocal(px, py)));
      if (s.x > 938 || s.y > 1498) fail(`hook: the screen's print reaches (${Math.round(s.x)}, ${Math.round(s.y)}) in the Reel's zones at f${f}`);
    }
  }
}

/** the light pools, fixed in the table world (on the oak round the phone, and on the floor where it lands) */
const poolsAt = (f: number): [number, number, number, number][] => {
  const out: [number, number, number, number][] = [];
  const a = toScreen(f, [POOL_C[0], HT, POOL_C[1] + 200]), b = toScreen(f, [REST_P[0], 0, REST_P[2]]);
  if (a.s > 0) out.push([a.x, a.y, 700 * a.s, 420 * a.s]);
  if (b.s > 0) out.push([b.x, b.y, 640 * b.s, 460 * b.s]);
  return out;
};

const Hook: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={poolsAt(f)} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="phone">
        <View3D name="hook" rect={RECT} eye={HOOK_EYE} make={M3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

// ══ THE SOUNDS, each on its own event's frame ══
// ★ 2026-11-22 re-score (Timur: "the main issue with this video is the sound effects… Don't add that pinging anymore… For
//   everything else, try to find subtle fitting sound effects"): a real phone vibration for the buzz (was the chain), a short
//   buzz for each headline (was the ping), the EarnEdits pack for the rest; the pending spinner is silent
const SFX: PlaceSfx[] = [
  ...PULSES.filter(([a]) => a < F_TIP + 2).map(([a, b], i): PlaceSfx => ({ s: "buzz", at: Math.max(0, a), end: Math.min(b, Math.ceil(F_REL)), vol: 0.55 - 0.03 * i, why: `the phone's buzz pulse ${i + 1}, rattling on the oak`, mode: "within" })),
  { s: "wsoft", at: Math.round(F_REL - 1), vol: 0.45, why: "it slides off the oak's edge", mode: "peak" },
  { s: "ckey", at: Math.round(F_POP), vol: 0.5, why: "the SIM tray pops out of its slot", mode: "within" },
  { s: "whum", at: Math.round((F_SIM + W135) / 2), end: W135 + 2 + SIM_HOLD, vol: 0.4, why: "the slow-motion SIM turning toward the lens", mode: "peak" },
  { s: "wsmall2", at: W135 + SIM_HOLD + 4, vol: 0.45, why: "time snaps back: the SIM whips past the lens", mode: "peak" },
  { s: "thump", at: Math.round(F_LAND), vol: 0.75, why: "the phone strikes the floor, bottom end first", mode: "peak" },
  ...(F_HITS.length ? [{ s: "thump" as const, at: Math.round(F_HITS[0]), vol: 0.35, why: "it rocks back onto its back", mode: "peak" as const }] : []),
  { s: "cmouse", at: F_WAKE, vol: 0.45, why: "the knocked screen wakes", mode: "within" },
  ...CARDS.map((c, i): PlaceSfx => ({ s: "buzzshort", at: c.at, vol: 0.5 - 0.05 * i, why: `headline notification ${i + 1} lands (the phone buzzes)`, mode: "within" })),
  { s: "wsoft", at: CLEAR_A + 2, vol: 0.32, why: "the notifications are swiped away", mode: "within" },
];

export const HOOK_DEBUG = { phys: { tCut: phys.tCut, t0: phys.t0, tRel: phys.tRel, tFall: phys.tFall, restPhi: phys.restPhi, w1in: phys.w1in, bounces: phys.bounceAt, rel: phys.rel, hit: phys.hit, qz: phys.qz },
  F_TIP, F_REL, F_POP, F_SIM, F_LAND, F_HITS, F_STILL, F_WAKE, CARD_AT, fS0, fS1, W135, BILLION, DONE, SIM0, REST_P, simAt, camAt, phonePose, tauAt };
void SIM_L; void SIM_W; void HEADLINE; void WAITED; void PAYMENT; void LAST;

export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp: Hook, align: () => "centre", focus: [540, 1150] },
  done: DONE,
  cam: CAM,
  sfx: SFX,
};
