import React from "react";
import { ramp, SETTLE } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { priceModel, PRICE_GEO as G, type PriceP } from "../../three/props/price";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 4 · THE PRICE (beats 7–8).
//  0 "At the time, one Square share was worth $247."   close on the LED board: it lights, $247.26 | 30 JUL 2021 (khaki).
//  1 "That's where 29 billion came from."              the camera pulls back: the stack × the board = the hanging tag; on
//                                                      "29" the tag's lamp comes up, $29,000,000,000 (mint), and it pushes in.
// STUB (foundation).
// ═══════════════════════════════════════════════════════════════════════════
const S = "price" as const;
const WORTH = word(S, 0, /^worth/), WHERE = cue(S, 1), N29 = word(S, 1, /^29/);
const BACK = WHERE - 4, PUSH = Math.max(N29 + 8, BACK + 48);
export const PR = { on: [WORTH - 6, WORTH + 8], sum: [BACK + 14, BACK + 34], tag: [N29 - 2, N29 + 14] } as const;

const LED_CY = G.floor - G.led.legs - G.led.h / 2, TAG_CY = G.tag.y + G.tag.cord + G.tag.h / 2;
const STORY: CamKey[] = [
  { at: -9999, x: G.led.x, y: LED_CY - 10, z: 1.3, dur: 1 },                           // close on the board
  { at: BACK, x: 860, y: LED_CY - 60, z: 0.55, dur: 46 },                              // back: stack × board = tag
  { at: PUSH, x: G.tag.x, y: TAG_CY, z: 1.05, dur: 44 },                               // onto the tag
];
export const PR_DONE = Math.max(cueEnd(S, 1) + 4, PUSH + 44);
export const PR_CAM: CamKey[] = alive("price", STORY, PR_DONE + 40, { amp: 0.5 });

const eyeAt = (f: number) => { const v = camView(PR_CAM, f); return { x: v.x + 240, y: v.y - 420, D: 2100 }; };
const paramsAt = (f: number): PriceP => ({
  on: ramp(f, PR.on[0], PR.on[1], SETTLE), sum: ramp(f, PR.sum[0], PR.sum[1], SETTLE), tag: ramp(f, PR.tag[0], PR.tag[1], SETTLE),
  swing: 0.6 * Math.sin(f / 29),
});

export const Price: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={PR_CAM} f={f} ground="dark" pools={[[G.led.x, G.floor - 40, 900, 300], [G.tag.x, G.floor - 40, 700, 280]]} />
    <World keys={PR_CAM} f={f}>
      <Obj s={S} g="place">
        <View3D name="price" rect={{ x: -700, y: -100, w: 3200, h: 2100 }} eye={eyeAt(f)} make={priceModel} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const PriceSet = { id: S, ground: "dark" as const, Comp: Price, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
