import React from "react";
import { clamp01, INOUT } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import {
  cutterModel, edgeAt, bevelPush, handleAt, layerY, TH_UP, TH_DN, TT, SLAB_H, SLAB_L, CUT1, CUT2, BH, type CutP, type PieceP,
} from "../../three/props/withhold";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 4 · THE WITHHOLDING (cream) — a cast-iron lever guillotine (stack cutter) with the $363.1M cash slab on its bed.
//  0 "Then the taxes." We open close on the knife over the slab's end. The gauge's hand wheel turns; the back gauge pushes
//    the slab toward the knife until its index stands at 24 on the bed's rule: 24 % of the slab now lies past the knife.
//  1 "The IRS withholds 24 percent." The clamp's wheel spins it down onto the slab; on "24" the lever slams the knife down
//    through the cash. Its bevel shoves the cut-off clear; free, it falls off the bed's edge, lands and settles.
//  2 "New Jersey withholds 8." The clamp lifts, the gauge pushes 8 more (its index to 32); clamp, knife, on "8" the second
//    cut-off falls onto the first.
//  3 "That leaves about 247 million on payout day." The clamp lifts off and the gauge backs away: the 68 % lies alone on the
//    bed; the camera travels along it.
// No label: the rule's graduations are the machine's own marking.
// ═══════════════════════════════════════════════════════════════════════════
const S = "withhold" as const;
const THEN = cue(S, 0), P24 = word(S, 1, /^24/), NJ = cue(S, 2), EIGHT = word(S, 2, /^8/), LEAVES = cue(S, 3);

// ── the actions' frames ──
const PUSH1 = [THEN + 9, THEN + 39] as const;
const CLAMP1 = [PUSH1[1] + 2, PUSH1[1] + 12] as const;
const CHOP_N = 7;
const CHOP1 = P24 + 1 - CHOP_N;                       // the knife bottoms on "24"
const UP1 = CHOP1 + CHOP_N + 2;                       // it starts back up
const UNCLAMP1 = [UP1 + 8, UP1 + 18] as const;
const PUSH2 = [NJ + 2, NJ + 20] as const;
const CHOP2 = EIGHT + 1 - CHOP_N;
const CLAMP2 = [PUSH2[1] + 1, CHOP2 - 1] as const;
const UP2 = CHOP2 + CHOP_N + 2;
const UNCLAMP2 = [UP2 + 7, UP2 + 17] as const;
const RETRACT = [LEAVES + 25, LEAVES + 51] as const;
const UP_N = 22;
if (PUSH2[0] < UNCLAMP1[1] || CLAMP2[1] - CLAMP2[0] < 6 || CLAMP1[1] > CHOP1) throw new Error("withhold: the cutter's actions overlap");

const G = 16.77;                                       // g, px/f² (a $100 note: 156 mm = 240 px)
const smooth = (f: number, a: number, b: number) => INOUT(clamp01((f - a) / (b - a)));
const GX1 = SLAB_L - CUT1, GX2 = SLAB_L - CUT2, GXR = GX2 - 40;
const gxAt = (f: number) => {
  if (f < PUSH2[0]) return GX1 * smooth(f, PUSH1[0], PUSH1[1]);
  if (f < RETRACT[0]) return GX1 + (GX2 - GX1) * smooth(f, PUSH2[0], PUSH2[1]);
  return GX2 + (GXR - GX2) * smooth(f, RETRACT[0], RETRACT[1]);
};
const clampAt = (f: number) => {
  if (f < UNCLAMP1[1] + 1) return smooth(f, CLAMP1[0], CLAMP1[1]) * (1 - smooth(f, UNCLAMP1[0], UNCLAMP1[1]));
  return smooth(f, CLAMP2[0], CLAMP2[1]) * (1 - smooth(f, UNCLAMP2[0], UNCLAMP2[1]));
};
/** the lever: a chop is pulled from rest and slams (accelerating all the way to the stop); the counterweight lifts it back */
const chopTh = (f: number, c0: number, up: number) => {
  if (f <= c0) return null;
  if (f < c0 + CHOP_N) return TH_UP + (TH_DN - TH_UP) * ((f - c0) / CHOP_N) ** 2;
  if (f < up) return TH_DN;
  if (f < up + UP_N) return TH_DN + (TH_UP - TH_DN) * INOUT((f - up) / UP_N);
  return null;
};
const thetaAt = (f: number) => chopTh(f, CHOP2, UP2) ?? chopTh(f, CHOP1, UP1) ?? TH_UP;

// ── the cut-offs: pushed by the bevel as the knife passes each layer, released when its edge clears their foot, then ½gt² ──
const FOOT = layerY(0) + 0.6 - TT - 0.3;              // the cut-off's foot over the slab's base line (no strap under it)
const releaseOf = (c0: number) => {
  let a = c0, b = c0 + CHOP_N;
  for (let i = 0; i < 50; i++) { const m = (a + b) / 2; if (edgeAt(thetaAt(m)) > TT + 0.3 + FOOT) a = m; else b = m; }
  return (a + b) / 2;
};
const REL1 = releaseOf(CHOP1), REL2 = releaseOf(CHOP2);
const DROP_A = TT, DROP_B = TT - 0.3 - SLAB_H;        // A to the floor; B onto A's top
const TILT_K = 0.0105;                                 // its spin as it goes (rad/f²): the far side leads down
const SLAP = 2.4, HOP = 1.6;
const landOf = (rel: number, drop: number) => rel + Math.sqrt((2 * drop) / G);
const LAND1 = landOf(REL1, DROP_A), LAND2 = landOf(REL2, DROP_B);
const pieceAt = (f: number, c0: number, rel: number, drop: number): PieceP => {
  const land = landOf(rel, drop);
  // the knife's lowest point so far in this chop
  let eMin = Infinity;
  if (f > c0) for (let t = c0; t <= Math.min(f, c0 + CHOP_N); t += 0.25) eMin = Math.min(eMin, edgeAt(thetaAt(t)));
  const push = [0, 1, 2].map((k) => (f <= c0 ? 0 : bevelPush(layerY(k) + BH, eMin)));
  if (f < rel) return { push, drop: 0, tilt: 0, free: false };
  if (f < land) { const t = f - rel; return { push, drop: 0.5 * G * t * t, tilt: -TILT_K * t * t, free: true }; }
  const tl = -TILT_K * (land - rel) ** 2, u = f - land;
  // it lands on its low corner and slaps flat; a small hop off the blow, and it lies still
  const tilt = u < SLAP ? tl * (1 - (u / SLAP) ** 2) : 0;
  const hop = u > SLAP && u < SLAP + 5 ? HOP * Math.sin((Math.PI * (u - SLAP)) / 5) : 0;
  return { push, drop: drop - hop, tilt, free: true };
};

export const WH = {
  push1: PUSH1, clamp1: CLAMP1, chop1: CHOP1 + CHOP_N, land1: Math.ceil(LAND1), unclamp1: UNCLAMP1,
  push2: PUSH2, clamp2: CLAMP2, chop2: CHOP2 + CHOP_N, land2: Math.ceil(LAND2), unclamp2: UNCLAMP2,
  up1: UP1, up2: UP2, upN: UP_N, retract: RETRACT,
} as const;
export const WH_DONE = Math.max(cueEnd(S, 3) + 4, RETRACT[1] + 4);

// ── the place (layer px) ──
const FLOOR = 1450, XK = 700, ZM = -40;
const STORY: CamKey[] = [
  { at: -9999, x: 650, y: 1222, z: 1.72, dur: 1 },                        // close: the knife over the slab's end
  { at: THEN + 2, x: 548, y: 1236, z: 1.45, dur: 38 },                     // out and left: the gauge pushes, its index to 24
  { at: CLAMP1[0], x: 690, y: 1120, z: 1.68, dur: 30 },                    // in on the knife: the chop, the fall (★ y 1230 put the lever's ball at y 558, in the caption band)
  { at: CLAMP2[0] - 31, x: 566, y: 1200, z: 1.5, dur: 30 },                // back for the gauge: 8 more (★ lowered with the push-ins: the band)
  { at: CLAMP2[0] + 1, x: 686, y: 1122, z: 1.7, dur: 30 },                 // in again: the second chop (★ lowered with the first)
  { at: Math.max(LEAVES + 6, CLAMP2[0] + 32), x: 548, y: 1246, z: 1.45, dur: 44 },   // along what is left
];
export const WH_CAM: CamKey[] = alive(S, STORY, WH_DONE + 44, { amp: 0.6 });
const eyeAt = (f: number) => { const v = camView(WH_CAM, f); return { x: v.x + 420, y: v.y - 860, D: 1900 }; };
const yawAt = (f: number) => -24 + 4 * INOUT(clamp01((f - 600) / 300));
// ★ the caption band holds: the lever's handle (the machine's highest part) stays below 660 on screen at every frame
for (let f = 600; f <= WH_DONE + 44; f++) {
  const v = camView(WH_CAM, f), h = handleAt(thetaAt(f)), e = eyeAt(f);
  const ps = (yawAt(f) * Math.PI) / 180, hx = 120;
  const p = project(e, XK + hx * Math.cos(ps) + h.z * Math.sin(ps), FLOOR - h.y, ZM - hx * Math.sin(ps) + h.z * Math.cos(ps));
  const y = 960 + (p.y - v.y) * v.z;
  if (y < 662) throw new Error(`withhold: the lever's handle reaches y ${Math.round(y)} on screen at f${f}`);
}

const CUT3D = cutterModel({ floor: FLOOR, xk: XK, z: ZM });
const paramsAt = (f: number): CutP => {
  const gx = gxAt(f);
  return {
    gx, slab: f >= RETRACT[0] ? GX2 - gx : 0, clamp: clampAt(f), theta: thetaAt(f),
    A: pieceAt(f, CHOP1, REL1, DROP_A), B: pieceAt(f, CHOP2, REL2, DROP_B),
    yaw: yawAt(f),
  };
};

export const Withhold: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={WH_CAM} f={f} ground="cream" pools={[[560, 1240, 860, 620], [760, 1330, 380, 260]]} />
    <World keys={WH_CAM} f={f}>
      <Obj s={S} g="cutter">
        <View3D name="withhold" rect={{ x: -120, y: 760, w: 1440, h: 1260 }} eye={eyeAt(f)} make={CUT3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const WithholdSet = { id: S, ground: "cream" as const, Comp: Withhold, align: () => "centre" as const, focus: [560, 1240] as [number, number] };
