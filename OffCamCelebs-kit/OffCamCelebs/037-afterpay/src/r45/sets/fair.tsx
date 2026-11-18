import React from "react";
import { ramp, SETTLE, SOFT } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { fairModel, FAIR_GEO as G, type FairP } from "../../three/props/fair";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 7 · TO BE FAIR (beats 13–14).
//  0 "To be fair, 29 billion was the real value on announcement day."   the BALANCE SCALE: $29B | 1 AUG 2021 (mint) on one
//       pan, the shares on the other. It arrives tipped toward the figure, rocks, and is LEVEL by "real value"; the camera
//       pushes in on the level beam.
//  1 "The deal fixed the number of shares, not the dollars, and Afterpay's owners got those shares."   the desk: on "fixed"
//       the label FIXED: 0.375 SHARES lights (khaki); on "got" the certificates are lifted across the desk and set down in
//       front of AFTERPAY SHAREHOLDERS, the camera following them.
// ═══════════════════════════════════════════════════════════════════════════
const S = "fair" as const;
const REAL = word(S, 0, /^real/), FIXED = word(S, 1, /^fixed/), GOT = word(S, 1, /^got/);
export const FA = { label: [FIXED - 2, FIXED + 14], hand: [GOT - 10, GOT + 30], level: [cue(S, 0) - 6, REAL - 2] } as const;

const STORY: CamKey[] = [
  { at: -9999, x: G.scale.x + 40, y: G.floor - 470, z: 0.94, dur: 1 },                       // the whole scale
  { at: REAL - 4, x: G.scale.x + 40, y: G.floor - 500, z: 1.02, dur: 40 },                  // in on the level beam and its pans
  { at: cue(S, 1) - 6, x: G.desk.x, y: G.desk.y - 170, z: 0.98, dur: 48 },        // the desk
  { at: GOT - 14, x: G.desk.x + 120, y: G.desk.y - 150, z: 1.06, dur: 44 },            // following the certificates across
];
export const FA_DONE = Math.max(cueEnd(S, 1) + 4, FA.hand[1] + 6);
export const FA_CAM: CamKey[] = alive("fair", STORY, FA_DONE + 40, { amp: 0.45 });

const eyeAt = (f: number) => { const v = camView(FA_CAM, f); return { x: v.x + 240, y: v.y - 460, D: 2100 }; };
const T0 = cue(S, 0) - 10;
// it rocks from a tilt toward the figure and settles LEVEL just before "real value" (a damped swing; level is the point)
const TAU = Math.max(8, (REAL - T0) / 4.2);
const paramsAt = (f: number): FairP => {
  const t = Math.max(0, f - T0);
  return {
    tilt: 8 * Math.exp(-t / TAU) * Math.cos((t / TAU) * 2.1),
    hand: ramp(f, FA.hand[0], FA.hand[1], SOFT), label: ramp(f, FA.label[0], FA.label[1], SETTLE),
  };
};

export const Fair: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={FA_CAM} f={f} ground="dark" pools={[[G.scale.x, G.floor - 40, 640, 280], [G.desk.x, G.desk.y + 60, 900, 320]]} />
    <World keys={FA_CAM} f={f}>
      <Obj s={S} g="place">
        <View3D name="fair" rect={{ x: -500, y: 0, w: 3400, h: 2000 }} eye={eyeAt(f)} make={fairModel} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const FairSet = { id: S, ground: "dark" as const, Comp: Fair, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
