import React from "react";
import { ramp, SETTLE, TRAVEL } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, type CamKey } from "../camera";
import { VALUE } from "../../audit/data";
import { View3D } from "../../three/View3D";
import { valueModel } from "../../three/props/value";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 4 · THE REAL VALUE (cream) — a cast-iron dial platform scale, the deal on its deck as strapped $100 bundles.
//  0 "Money paid that late is worth less." The place opens CLOSE on the dial (one object, framed large): the needle stands
//    at 700 with the brass drag pointer under it; on "worth less" the needle sinks, leaving the drag pointer at 700.
//  1 "For its luxury tax, baseball values the deal at about 46 million dollars a year." On "baseball" the camera pulls
//    out and down to the whole scale and the cash on its deck (follow-through); while baseball "values the deal" the needle
//    keeps falling (a measuring: data).
//  2 "That's about 460 million dollars, not 700." The camera pushes back in on the dial: on "460" the needle settles on 460,
//    the brass pointer still at 700 ("not 700").
// ★ No tag or plate (the user, 2026-10-23: labels overused): the scale's own needle and the caption carry every figure.
// ★ The living camera (L7): story keys on the words, breaths between them (alive), all print below ~660 on screen.
// ═══════════════════════════════════════════════════════════════════════════
const S = "value" as const;
const WORTH = word(S, 0, /^worth/), BASEB = word(S, 1, /^baseball/), VALUES = word(S, 1, /^values/), YEAR = word(S, 1, /^year/), V460 = word(S, 2, /^\$?460/);
export const VL = {
  sinkA: WORTH - 2, sinkN: 34, mid1: 612,          // "worth less": 700 → 612
  sweepA: VALUES, sweepN: YEAR + 6 - VALUES, mid2: 522,   // "values the deal … a year": 612 → 522
  settleA: V460 - 6, settleN: 38,                   // "460": 522 → 460
} as const;
const FLOOR = 1480, CX = 470, GZ = 140;
// ★ framings, measured on the stills: the dial's finial top stays ≥ ~720 on screen at every key, so a breath (amp 0.5)
//   never lifts it into the caption band; the dial stays left of the Reel's buttons; at the dial the cash on the
//   deck stays below the frame's foot (its straps' print never shows under y 1500)
const DIAL = { x: 470, y: 785, z: 2.0 }, WIDE = { x: 478, y: 930, z: 1.0 }, DIAL2 = { x: 472, y: 776, z: 1.9 };
const STORY: CamKey[] = [
  { at: 636, ...DIAL, dur: 1 },                                   // frame 1 of the place: close on the dial, 700
  { at: BASEB - 4, ...WIDE, dur: 46 },                            // "baseball values the deal": the whole scale and its cash
  { at: V460 - 12, ...DIAL2, dur: 40 },                           // "460": back in on the dial
];
export const VL_CAM: CamKey[] = alive("value", STORY, cueEnd(S, 2) + 60, { amp: 0.4 });

const VL_EYE = { x: 960, y: 380, D: 2000 };
const VL3D = valueModel({ floor: FLOOR, cx: CX, z: GZ, unit: VALUE.unit });

export const Value: React.FC<{ f: number }> = ({ f }) => {
  const needle = VALUE.from + (VL.mid1 - VALUE.from) * ramp(f, VL.sinkA, VL.sinkA + VL.sinkN, SETTLE)
    + (VL.mid2 - VL.mid1) * ramp(f, VL.sweepA, VL.sweepA + VL.sweepN, (t) => t * t * (3 - 2 * t))
    + (VALUE.to - VL.mid2) * ramp(f, VL.settleA, VL.settleA + VL.settleN, SETTLE);
  return (
    <>
      <Light keys={VL_CAM} f={f} ground="cream" pools={[[470, 1020, 1000, 780]]} />
      <World keys={VL_CAM} f={f}>
        <Obj s={S} g="scale">
          <View3D name="value" rect={{ x: -330, y: 520, w: 1600, h: 1470 }} eye={VL_EYE} make={VL3D}
            params={{ needle, drag: VALUE.from, yaw: 3 - 5 * ramp(f, cue(S, 0), cueEnd(S, 2), TRAVEL) }} />
        </Obj>
      </World>
    </>
  );
};
export const VL_DONE = VL.settleA + VL.settleN + 2;
export const ValueSet = { id: S, ground: "cream" as const, Comp: Value, align: () => "centre" as const, focus: [470, 1000] as [number, number] };
