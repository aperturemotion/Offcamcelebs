import React from "react";
import { ramp, SETTLE, GLIDE } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { fairModel, FAIR_GEO as G, type FairP } from "../../three/props/fair";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 7 · TO BE FAIR (beats 13–14).
//  0 "To be fair, 29 billion was the real value on announcement day."   the balance scale: $29B | 1 AUG 2021 on one pan, the
//       shares on the other; it rocks and settles LEVEL.
//  1 "The deal fixed the number of shares, not the dollars, and Afterpay's owners got those shares."   the desk: on "fixed"
//       the label FIXED: 0.375 SHARES lights (khaki); on "got" the certificates cross the desk to AFTERPAY SHAREHOLDERS.
// STUB (foundation).
// ═══════════════════════════════════════════════════════════════════════════
const S = "fair" as const;
const FIXED = word(S, 1, /^fixed/), GOT = word(S, 1, /^got/);
export const FA = { label: [FIXED - 2, FIXED + 14], hand: [GOT - 8, GOT + 30] } as const;

const STORY: CamKey[] = [
  { at: -9999, x: G.scale.x, y: G.floor - 400, z: 1.0, dur: 1 },                       // the scale
  { at: cue(S, 1) - 6, x: G.desk.x - 40, y: G.desk.y - 120, z: 0.86, dur: 48 },        // the desk
];
export const FA_DONE = Math.max(cueEnd(S, 1) + 4, FA.hand[1] + 8);
export const FA_CAM: CamKey[] = alive("fair", STORY, FA_DONE + 40, { amp: 0.5 });

const eyeAt = (f: number) => { const v = camView(FA_CAM, f); return { x: v.x + 240, y: v.y - 460, D: 2100 }; };
const T0 = cue(S, 0);
const paramsAt = (f: number): FairP => ({
  // it rocks from a tilt and settles level (a damped swing: level is the point)
  tilt: 7 * Math.exp(-Math.max(0, f - T0) / 18) * Math.cos(Math.max(0, f - T0) / 6.5),
  hand: ramp(f, FA.hand[0], FA.hand[1], GLIDE), label: ramp(f, FA.label[0], FA.label[1], SETTLE),
});

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
