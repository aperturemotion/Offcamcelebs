import React from "react";
import { ramp, SETTLE, lerp } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { TOTAL_FRAMES } from "../../audit/data";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { verdictModel, VERDICT_GEO as G, RECEIPT_LINES as L, type VerdictP } from "../../three/props/verdict";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 8 · THE VERDICT (beats 15–17).
//  0 "So 29 billion was the price on day one."   the receipt prints: its head, then ANNOUNCED $29,000,000,000 on "29".
//  1 "Not the price paid."                       PAID AT CLOSING $13,800,000,000, then GAP ≈ $15,000,000,000.
//  2 "Our rating: inflated."                     the rating lands on the receipt (red) on "inflated"; the framed print
//                                                stands beside it.
//  3 "Send us who to audit next."                the camera pulls back and up: the receipt and the hanging tag, lit,
//                                                $29,000,000,000 (the opening shot, for the loop).
// STUB (foundation).
// ═══════════════════════════════════════════════════════════════════════════
const S = "verdict" as const;
const N29 = word(S, 0, /^29/), NOT = cue(S, 1), PAID = word(S, 1, /^paid/), INFL = word(S, 2, /^inflated/), SEND = cue(S, 3);
export const VD = { head: [cue(S, 0) - 4, cue(S, 0) + 12], ann: [N29 - 4, N29 + 12], paid: [NOT, NOT + 14], gap: [PAID + 2, PAID + 18], rating: [INFL - 2, INFL + 8], tag: [SEND, SEND + 20] } as const;

const SLOT_Y = G.desk.y - G.printer.h;
const STORY: CamKey[] = [
  { at: -9999, x: G.printer.x, y: SLOT_Y - 150, z: 1.15, dur: 1 },                      // close on the slot
  { at: NOT - 4, x: G.printer.x + 30, y: SLOT_Y - 260, z: 1.0, dur: 36 },               // up the receipt
  { at: cue(S, 2) - 6, x: 680, y: SLOT_Y - 240, z: 0.84, dur: 40 },                     // the receipt and the framed print
  { at: SEND - 2, x: 600, y: 560, z: 0.55, dur: 48 },                                    // back and up: the receipt and the tag
];
export const VD_CAM: CamKey[] = alive("verdict", STORY, TOTAL_FRAMES + 4, { amp: 0.5 });
void cueEnd;

const eyeAt = (f: number) => { const v = camView(VD_CAM, f); return { x: v.x + 220, y: v.y - 430, D: 2100 }; };
const feedAt = (f: number) => {
  const a = ramp(f, VD.head[0], VD.head[1], SETTLE), b = ramp(f, VD.ann[0], VD.ann[1], SETTLE), c = ramp(f, VD.paid[0], VD.paid[1], SETTLE), d = ramp(f, VD.gap[0], VD.gap[1], SETTLE);
  return lerp(lerp(lerp(L.head * a, L.announced, b), L.paid, c), L.all, d);
};
const paramsAt = (f: number): VerdictP => ({
  feed: feedAt(f), rating: ramp(f, VD.rating[0], VD.rating[1], SETTLE), tag: 0.35 + 0.65 * ramp(f, VD.tag[0], VD.tag[1], SETTLE), swing: 0.6 * Math.sin(f / 31),
});

export const Verdict: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={VD_CAM} f={f} ground="dark" pools={[[G.desk.x, G.desk.y + 60, 900, 320]]} />
    <World keys={VD_CAM} f={f}>
      <Obj s={S} g="place">
        <View3D name="verdict" rect={{ x: -600, y: -900, w: 2600, h: 2900 }} eye={eyeAt(f)} make={verdictModel} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const VerdictSet = { id: S, ground: "dark" as const, Comp: Verdict, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
