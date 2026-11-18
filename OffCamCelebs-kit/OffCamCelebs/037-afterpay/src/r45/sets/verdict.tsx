import React from "react";
import { ramp, SETTLE, lerp } from "../tokens";
import { word, cue } from "../time";
import { TOTAL_FRAMES } from "../../audit/data";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { verdictModel, VERDICT_GEO as G, RECEIPT_LINES as L, type VerdictP } from "../../three/props/verdict";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 8 · THE VERDICT (beats 15–17): the opening composition again, for the loop. The price tag hangs on its rail, dimmed;
// on the desk under it a receipt printer.
//  0 "So 29 billion was the price on day one."   the receipt PRINTS: its head, then ANNOUNCED $29,000,000,000 on "29".
//  1 "Not the price paid."                       PAID AT CLOSING $13,800,000,000 on "Not", GAP ≈ $15,000,000,000 on "paid".
//  2 "Our rating: inflated."                     the paper feeds on; the one-off verdict label (red) comes down onto it on
//                                                "inflated"; the framed print stands beside it.
//  3 "Send us who to audit next."                the tag's lamp comes back up: the receipt and the price tag, held.
// ★ THE RAIL NEVER LEAVES THE FRAME (it sits at y ≥ 290 on screen, under the caption line, in every framing): a hanging
//   thing that left by the top would have to cross the caption to return. So the camera works inside one composition:
//   pushes toward the receipt and back, never a climb.
// ═══════════════════════════════════════════════════════════════════════════
const S = "verdict" as const;
const N29 = word(S, 0, /^29/), NOT = cue(S, 1), PAID = word(S, 1, /^paid/), RATING = cue(S, 2), INFL = word(S, 2, /^inflated/), SEND = cue(S, 3);
export const VD = {
  head: [cue(S, 0) - 6, cue(S, 0) + 10], ann: [N29 - 4, N29 + 12], paid: [NOT - 2, NOT + 13], gap: [PAID, PAID + 15],
  foot: [RATING - 2, RATING + 16], rating: [INFL - 3, INFL + 7], tag: [SEND - 2, SEND + 22],
} as const;

/** the camera y that puts the rail at screen y `ry` at zoom z */
const camY = (z: number, ry: number) => G.tag.y - 16 + (960 - ry) / z;
const STORY: CamKey[] = [
  { at: -9999, x: 520, y: camY(0.92, 300), z: 0.92, dur: 1 },                           // the tag over the printer
  { at: N29 + 14, x: 500, y: camY(0.95, 296), z: 0.95, dur: 40, drift: true },          //   a push as it prints
  { at: RATING - 6, x: 580, y: camY(0.9, 310), z: 0.9, dur: 40 },                       // the receipt and the framed print
  { at: SEND - 2, x: 590, y: camY(0.86, 330), z: 0.86, dur: 44 },                       // back: the receipt and the tag (the opening)
];
export const VD_CAM: CamKey[] = alive("verdict", STORY, TOTAL_FRAMES + 4, { amp: 0.3 });
// ★ the rail holds under the caption line at every frame of the place
for (let f = cue(S, 0) - 80; f <= TOTAL_FRAMES; f++) {
  const v = camView(VD_CAM, f), y = 960 + (G.tag.y - 16 - v.y) * v.z;
  if (y < 280) throw new Error(`verdict: the tag's rail reaches y ${Math.round(y)} on screen at f${f} (the caption line)`);
}

const eyeAt = (f: number) => { const v = camView(VD_CAM, f); return { x: v.x + 220, y: v.y - 430, D: 2100 }; };
const feedAt = (f: number) => {
  const a = ramp(f, VD.head[0], VD.head[1], SETTLE), b = ramp(f, VD.ann[0], VD.ann[1], SETTLE), c = ramp(f, VD.paid[0], VD.paid[1], SETTLE),
    d = ramp(f, VD.gap[0], VD.gap[1], SETTLE), e = ramp(f, VD.foot[0], VD.foot[1], SETTLE);
  return lerp(lerp(lerp(lerp(L.head * a, L.announced, b), L.paid, c), L.gap + 0.02, d), L.all, e);
};
const feeding = (f: number) => [VD.head, VD.ann, VD.paid, VD.gap, VD.foot].some(([a, b]) => f >= a - 2 && f <= b + 2);
const paramsAt = (f: number): VerdictP => ({
  feed: feedAt(f), rating: ramp(f, VD.rating[0], VD.rating[1], SETTLE),
  tag: 0.3 + 0.7 * ramp(f, VD.tag[0], VD.tag[1], SETTLE), swing: 0.7 * Math.sin(f / 31) + 0.3 * Math.sin(f / 17),
  busy: feeding(f) ? (Math.floor(f / 3) % 2 ? 1 : 0.3) : 0.5,
});

export const Verdict: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={VD_CAM} f={f} ground="dark" pools={[[G.desk.x, G.desk.y + 40, 900, 320]]} />
    <World keys={VD_CAM} f={f}>
      <Obj s={S} g="place">
        <View3D name="verdict" rect={{ x: -560, y: -120, w: 2500, h: 2200 }} eye={eyeAt(f)} make={verdictModel} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const VerdictSet = { id: S, ground: "dark" as const, Comp: Verdict, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
