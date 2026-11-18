import React from "react";
import { ramp, SETTLE, GLIDE } from "../tokens";
import { word, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { priceModel, PRICE_GEO as G, type PriceP } from "../../three/props/price";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 4 · THE PRICE (beats 7–8): one column, read bottom to top as a sum.
//  0 "At the time, one Square share was worth $247."   close on the dot-matrix board: dark, then on "worth" it lights,
//                                                      $247.26 | 30 JUL 2021 (khaki: documented).
//  1 "That's where 29 billion came from."              the camera pulls back: the stack of shares slides in on its plinth, ×, the
//                                                      board, =, and the tag hanging edge-on above; on "29" it turns to face us and its lamp comes up, $29,000,000,000 (mint),
//                                                      and the camera climbs onto it.
// ═══════════════════════════════════════════════════════════════════════════
const S = "price" as const;
const WORTH = word(S, 0, /^worth/), N247 = word(S, 0, /^\$247/), N29 = word(S, 1, /^29/);
// the place has only the two sentences: the pull-back starts as soon as the figure has been heard, so the tag has turned
// to face us by "29" and the climb onto it is over before the next card
const BACK = N247 + 12, TURN = Math.max(BACK + 46, N29 - 20), PUSH = Math.max(TURN + 16, N29);
export const PR = { on: [WORTH - 8, WORTH + 6], stack: [BACK + 2, BACK + 30], sum: [BACK + 24, BACK + 40], turn: [TURN, TURN + 22], tag: [PUSH + 12, PUSH + 30], hang: [BACK + 28, BACK + 50] } as const;

const LED_CY = G.floor - G.led.legs - G.led.h / 2, TAG_CY = G.tag.y + G.tag.cord + G.tag.h / 2;
const STORY: CamKey[] = [
  { at: -9999, x: G.cx, y: LED_CY + 50, z: 1.42, dur: 1 },                             // close on the board
  { at: BACK, x: G.cx, y: 400, z: 0.75, dur: 40 },                                     // back: the stack × the board (the = just in at the top)
  { at: PUSH, x: G.cx, y: TAG_CY + 40, z: 1.3, dur: 40 },                              // up onto the tag
];
export const PR_DONE = Math.max(cueEnd(S, 1) + 4, PUSH + 40);
export const PR_CAM: CamKey[] = alive("price", STORY, PR_DONE + 40, { amp: 0.5 });

const eyeAt = (f: number) => { const v = camView(PR_CAM, f); return { x: v.x + 210, y: v.y - 330, D: 2100 }; };
export const paramsAt = (f: number): PriceP => ({
  on: ramp(f, PR.on[0], PR.on[1], SETTLE), stack: ramp(f, PR.stack[0], PR.stack[1], GLIDE), turn: ramp(f, PR.turn[0], PR.turn[1], SETTLE), sum: ramp(f, PR.sum[0], PR.sum[1], SETTLE), tag: ramp(f, PR.tag[0], PR.tag[1], SETTLE),
  swing: 0.7 * Math.sin(f / 29), hang: ramp(f, PR.hang[0], PR.hang[1], GLIDE),
});

export const Price: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={PR_CAM} f={f} ground="dark" pools={[[G.cx, G.floor - 20, 820, 300]]} />
    <World keys={PR_CAM} f={f}>
      <Obj s={S} g="place">
        <View3D name="price" rect={{ x: -700, y: -920, w: 2480, h: 3060 }} eye={eyeAt(f)} make={priceModel} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const PriceSet = { id: S, ground: "dark" as const, Comp: Price, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
