import React from "react";
import { ramp, TRAVEL } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { fairModel, planJar, coinPose, FC_R, JAR_H, HG_TOP, type FairP, type Sand } from "../../three/props/fair";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 6 · TO BE FAIR (cream) — a glass jar that fills with the annuity's gold coins, then a sandglass, running.
//  0 "To be fair: choose the annuity, and the full 847 million does get paid, before tax." The truck brings the place in
//    CLOSE on the empty jar alone (L1). On "annuity" the first gold coin flies in from beyond the frame, tumbling on its
//    parabola, drops through the mouth and rings on the glass floor with a small rebound; then another from the other side;
//    then faster and faster, until on "full 847 million does get paid" they come as a stream and the jar fills: the whole
//    sum, paid in (every coin's flight and rest planned so nothing passes through the glass or another coin).
//  1 "It just takes 29 years." On "It" the camera leaves the jar and follows through to the right, to an antique sandglass,
//    already running: a thread of sand through its waist, a crater sinking in the upper sand, a cone growing below; the
//    camera drifts in on the waist as "29 years" is said: the payment is real, and slow.
// ★ No label, no figure, no person (Timur 2026-10-23). Not the annuity's row: a jar filling, and time running.
// ═══════════════════════════════════════════════════════════════════════════
const S = "fair" as const;
const ANNU = word(S, 0, /^annuity/), BEFORE = word(S, 0, /^before/), IT = cue(S, 1);
const FLOOR = 1600;
const JAR = { x: 430, z: 0 }, HGL = { x: 1190, z: -20 };

// ── THE CAMERA: close on the jar (its mouth at ~1180 on screen, the coins' arcs under the caption band); on "It" across to
//    the sandglass; a slow drift in on its waist ──
const STORY: CamKey[] = [
  { at: -9999, x: 452, y: 1234, z: 2.0, dur: 1 },
  { at: IT - 2, x: HGL.x, y: 1368, z: 1.5, dur: 42 },
  { at: IT + 42, x: HGL.x + 4, y: 1386, z: 1.7, dur: 46, drift: true },
];
export const FA_DONE = cueEnd(S, 1) + 4;
export const FA_CAM: CamKey[] = alive("fair", STORY, IT + 90, { amp: 0.4 });

/** the highest a coin's top may fly (px above the floor) at frame t: under the caption band (672 on screen) */
const maxPeak = (t: number) => { const v = camView(FA_CAM, t); return FLOOR - (v.y + (672 - 960) / v.z) - 0.3; };
const PLAN = planJar(ANNU + 6, BEFORE + 4, 40, maxPeak);
export const FA = {
  lands: PLAN.coins.map((c) => Math.round(c.T)),    // each coin rings on the glass or the heap
  first: Math.round(PLAN.coins[0].tL), it: IT,
} as const;
// ★ the band, checked over every frame: no coin's top (and neither object's) above 664 on screen
for (let f = 1043; f <= IT + 90; f++) {
  const v = camView(FA_CAM, f);
  const scr = (h: number) => 960 + (FLOOR - h - v.y) * v.z;
  PLAN.coins.forEach((_, i) => {
    const ps = coinPose(PLAN, i, f);
    if (!ps.shown) return;
    const x = JAR.x + ps.p[0];
    if (Math.abs(x - v.x) > 540 / v.z + FC_R) return;
    if (scr(ps.p[1] + 0.3 + FC_R) < 664) throw new Error(`fair: coin ${i} reaches y ${Math.round(scr(ps.p[1] + FC_R))} on screen at f${f}`);
  });
  if (Math.abs(JAR.x - v.x) < 540 / v.z + 90 && scr(JAR_H + 0.3) < 664) throw new Error(`fair: the jar's lip reaches the band at f${f}`);
  if (Math.abs(HGL.x - v.x) < 540 / v.z + 90 && scr(HG_TOP) < 664) throw new Error(`fair: the sandglass's top reaches the band at f${f}`);
}

/** the sandglass, already running when it is reached: the upper sand's crater deepening, the cone below growing */
const sandAt = (f: number): Sand => {
  const u = Math.max(0, f - (IT - 30));
  return { ys: 126 - 0.03 * u, dc: 9 + 0.06 * u, ya: -159 + 0.09 * u, flow: 1 };
};

const FA3D = fairModel({ floor: FLOOR, jar: JAR, hg: HGL, plan: PLAN });
const eyeAt = (f: number) => { const v = camView(FA_CAM, f); const D = 1900 / v.z ** 0.6; return { x: v.x + 0.221 * D, y: v.y - 0.321 * D, D }; };
const rectAt = (f: number) => {
  const v = camView(FA_CAM, f), m = 220 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = Math.max(v.y - 960 / v.z - m, FLOOR - 640), y1 = Math.min(v.y + 960 / v.z + m, FLOOR + 260);
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};
const paramsAt = (f: number): FairP => ({ t: f, sand: sandAt(f), yaw: 1.5 - 3 * ramp(f, cue(S, 0), cueEnd(S, 1), TRAVEL) });

export const Fair: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={FA_CAM} f={f} ground="cream" pools={[[JAR.x, 1440, 420, 420], [HGL.x, 1400, 420, 460]]} />
    <World keys={FA_CAM} f={f}>
      <Obj s={S} g="things">
        <View3D name="fair" rect={rectAt(f)} eye={eyeAt(f)} make={FA3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const FairSet = { id: S, ground: "cream" as const, Comp: Fair, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
