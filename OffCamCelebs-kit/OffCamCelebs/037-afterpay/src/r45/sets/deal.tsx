import React from "react";
import { ramp, SETTLE, GLIDE, EXIT } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { dealModel, DEAL_GEO as G, type DealP } from "../../three/props/deal";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 3 · THE DEAL (beats 4–6): the buyer's desk.
//  0 "In August 2021, Jack Dorsey's Square agreed to buy Afterpay."   close on the nameplate JACK DORSEY | CEO, SQUARE; on
//                                                                     "agreed" the contract (1 AUG 2021) slides in.
//  1 "But it didn't pay in cash."        the cooler box of cash; on "cash" it slides away off the desk.
//  2 "It paid in its own shares."        the glowing stack SQUARE SHARES slides in where the cash stood.
//  3 "Every Afterpay share would become 0.375 Square shares."   one certificate stands up, 1 AFTERPAY SHARE; on "0.375" it
//                                                                turns to 0.375 SQUARE SHARES (khaki: documented).
// STUB (foundation).
// ═══════════════════════════════════════════════════════════════════════════
const S = "deal" as const;
const AGREED = word(S, 0, /^agreed/), CASH = word(S, 1, /^cash/), SHARES = word(S, 2, /^shares/), EVERY = cue(S, 3), RATIO = word(S, 3, /^0\.375/);
export const DL = { contract: [AGREED - 2, AGREED + 26], cooler: [CASH, CASH + 26], certs: [SHARES - 14, SHARES + 16], card: [EVERY, EVERY + 20], flip: [RATIO - 2, RATIO + 18] } as const;

const TOP = G.desk.y;
const STORY: CamKey[] = [
  { at: -9999, x: G.plate.x, y: TOP - 110, z: 1.2, dur: 1 },                          // close on the nameplate
  { at: AGREED - 4, x: 360, y: TOP - 70, z: 0.98, dur: 36 },                           // the contract arriving
  { at: cue(S, 1) - 4, x: G.swapX - 40, y: TOP - 110, z: 1.12, dur: 40 },              // the cash, then the shares
  { at: EVERY - 2, x: G.card.x, y: TOP - 120, z: 1.18, dur: 40 },                      // the one certificate
];
export const DL_DONE = Math.max(cueEnd(S, 3) + 4, DL.flip[1] + 8);
export const DL_CAM: CamKey[] = alive("deal", STORY, DL_DONE + 40, { amp: 0.5 });

const eyeAt = (f: number) => { const v = camView(DL_CAM, f); return { x: v.x + 220, y: v.y - 520, D: 2100 }; };
const paramsAt = (f: number): DealP => ({
  contract: ramp(f, DL.contract[0], DL.contract[1], GLIDE),
  cooler: ramp(f, DL.cooler[0], DL.cooler[1], EXIT),
  certs: ramp(f, DL.certs[0], DL.certs[1], GLIDE),
  card: ramp(f, DL.card[0], DL.card[1], SETTLE),
  flip: ramp(f, DL.flip[0], DL.flip[1], SETTLE),
});

export const Deal: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={DL_CAM} f={f} ground="dark" pools={[[G.desk.x, TOP + 40, 980, 360]]} />
    <World keys={DL_CAM} f={f}>
      <Obj s={S} g="place">
        <View3D name="deal" rect={{ x: -700, y: 100, w: 2700, h: 1900 }} eye={eyeAt(f)} make={dealModel} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const DealSet = { id: S, ground: "dark" as const, Comp: Deal, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
