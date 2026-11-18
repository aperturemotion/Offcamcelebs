import React from "react";
import { ramp, SETTLE, GLIDE, EXIT } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { dealModel, DEAL_GEO as G, type DealP } from "../../three/props/deal";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 3 · THE DEAL (beats 4–6): the buyer's long desk; the camera travels along it, one object per shot.
//  0 "In August 2021, Jack Dorsey's Square agreed to buy Afterpay."   close on the nameplate JACK DORSEY | CEO, SQUARE; on
//                                             "agreed" the contract (1 AUG 2021) and its pen slide in before it.
//  1 "But it didn't pay in cash."             the camera trucks to an open cooler box of cash; on "cash" it slides away.
//  2 "It paid in its own shares."             the glowing stack SQUARE SHARES slides in where the cash stood.
//  3 "Every Afterpay share would become 0.375 Square shares."   on to ONE certificate on a rail, 1 AFTERPAY SHARE; on
//                                             "0.375" it is cut: 0.375 of it turns round (0.375, khaki ink: documented),
//                                             the rest slides off.
// ═══════════════════════════════════════════════════════════════════════════
const S = "deal" as const;
const AGREED = word(S, 0, /^agreed/), CASH = word(S, 1, /^cash/), SHARES = word(S, 2, /^shares/), EVERY = cue(S, 3), RATIO = word(S, 3, /^0\.375/);
export const DL = { contract: [AGREED - 2, AGREED + 28], cooler: [CASH, CASH + 24], certs: [SHARES - 16, SHARES + 14], card: [EVERY - 6, EVERY + 22], flip: [RATIO - 2, RATIO + 22] } as const;

const TOP = G.desk.y;
const STORY: CamKey[] = [
  { at: -9999, x: G.plate.x, y: TOP - 120, z: 1.36, dur: 1 },                           // close on the nameplate
  { at: AGREED - 6, x: G.plate.x + 20, y: TOP - 60, z: 1.12, dur: 38 },                 // down and back: the contract arrives
  { at: cue(S, 1) - 6, x: G.swapX, y: TOP - 190, z: 1.34, dur: 46 },                    // along the desk: the cash, then the shares
  { at: EVERY - 8, x: G.card.x, y: TOP - 200, z: 1.36, dur: 46 },                       // on: the one certificate
  { at: RATIO + 24, x: G.card.x, y: TOP - 196, z: 2.25, dur: 40 },                      // in on the fraction
];
export const DL_DONE = Math.max(cueEnd(S, 3) + 4, DL.flip[1] + 10);
export const DL_CAM: CamKey[] = alive("deal", STORY, DL_DONE + 40, { amp: 0.5 });

// the eye rides high: the desk's top is seen as a lit surface, the objects from a little above
const eyeAt = (f: number) => { const v = camView(DL_CAM, f); return { x: v.x + 240, y: v.y - 760, D: 2000 }; };
const paramsAt = (f: number): DealP => ({
  contract: ramp(f, DL.contract[0], DL.contract[1], GLIDE),
  cooler: ramp(f, DL.cooler[0], DL.cooler[1], EXIT),
  certs: ramp(f, DL.certs[0], DL.certs[1], GLIDE),
  card: ramp(f, DL.card[0], DL.card[1], GLIDE),
  flip: ramp(f, DL.flip[0], DL.flip[1], SETTLE),
});

export const Deal: React.FC<{ f: number }> = ({ f }) => {
  const v = camView(DL_CAM, f);
  // the view's canvas follows the camera (the desk is 3100 px long: one canvas over all of it is far larger than a frame)
  const x = Math.round((v.x - 1150) / 50) * 50;
  return (
    <>
      <Light keys={DL_CAM} f={f} ground="dark" pools={[[G.plate.x, TOP + 60, 760, 330], [G.swapX, TOP + 60, 760, 330], [G.card.x, TOP + 60, 760, 330]]} />
      <World keys={DL_CAM} f={f}>
        <Obj s={S} g="place">
          <View3D name="deal" rect={{ x, y: 150, w: 2300, h: 1850 }} eye={eyeAt(f)} make={dealModel} params={paramsAt(f)} />
        </Obj>
      </World>
    </>
  );
};
export const DealSet = { id: S, ground: "dark" as const, Comp: Deal, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
