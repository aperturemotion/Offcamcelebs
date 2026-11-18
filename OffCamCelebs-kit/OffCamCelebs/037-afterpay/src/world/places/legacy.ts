// THE FIRST CUT'S PLACES, MOUNTED IN THE WORLD (deal, price, close, fair, verdict). Each is its first-cut model (layer px)
// standing on the world's floor, acted by its own paramsAt(f), and filmed by the real camera on a path derived from its
// first-cut 2-D camera story: the same subjects on the same words, now seen three-quarter, in true perspective, lit by the
// world's rig, which follows what the camera looks at. ★ These are HONEST HOLDING SHOTS, not the reference standard: each
// place is to be RESTAGED for the world (big, close, orbits and low angles) by the place-workers, as places/hook.ts is.
import { cue } from "../../r45/time";
import type { SceneId } from "../../audit/data";
import type { CamKey } from "../../r45/camera";
import type { Model } from "../../three/stage";
import { poseAt, type CamKey3 } from "../cam";
import { mountLegacy, shotsFromLegacy, stdLights, type Place3 } from "../place";
import { DL_CAM, paramsAt as dealP } from "../../r45/sets/deal";
import { PR_CAM, paramsAt as priceP } from "../../r45/sets/price";
import { CL_CAM, paramsAt as closeP } from "../../r45/sets/close";
import { FA_CAM, paramsAt as fairP } from "../../r45/sets/fair";
import { VD_CAM, paramsAt as verdictP } from "../../r45/sets/verdict";
import { dealModel, DEAL_GEO } from "../../three/props/deal";
import { priceModel, PRICE_GEO } from "../../three/props/price";
import { closeModel, CLOSE_GEO } from "../../three/props/close";
import { fairModel, FAIR_GEO } from "../../three/props/fair";
import { verdictModel, VERDICT_GEO } from "../../three/props/verdict";

type Opt = { side?: number; lift?: number; travelIn?: number; s?: number; key?: number; color?: string };
const legacy = <P,>(id: SceneId, label: string, make: () => Model<P>, params: (f: number) => P, cam: CamKey[], g: { floor: number; cx: number }, o: Opt = {}): Place3 => {
  let keys: CamKey3[] = [];
  return {
    id, label, enter: cue(id, 0) - (o.travelIn ? 30 : 8),
    shots: (w) => (keys = shotsFromLegacy(cam, g, w, { side: o.side ?? 420, lift: o.lift ?? 300, travelIn: o.travelIn, dip: 5 })),
    // the rig follows what the camera looks at
    lights: (f) => stdLights(poseAt(keys, f).look, { s: o.s ?? 1, key: o.key, color: o.color }),
    build: () => {
      const m = mountLegacy(make, g);
      return { group: m.group, update: (f) => m.update(params(f)) };
    },
  };
};

export const DealPlace = legacy("deal", "3 The deal: Square agrees to buy Afterpay, paid in shares, 0.375 a share", dealModel, dealP, DL_CAM, { floor: DEAL_GEO.floor, cx: DEAL_GEO.desk.x }, { lift: 620 });
export const PricePlace = legacy("price", "4 The price: $247.26 a share, so $29B", priceModel, priceP, PR_CAM, { floor: PRICE_GEO.floor, cx: PRICE_GEO.cx }, { lift: 260, travelIn: 34 });
export const ClosePlace = legacy("close", "6 The close: six months, Block, the price halves, the 10-Q books $13.8B", closeModel, closeP, CL_CAM, { floor: CLOSE_GEO.floor, cx: 1500 }, { lift: 560 });
export const FairPlace = legacy("fair", "7 To be fair: $29B was real on day one; the shares were fixed", fairModel, fairP, FA_CAM, { floor: FAIR_GEO.floor, cx: 1000 }, { lift: 420, travelIn: 34 });
export const VerdictPlace = legacy("verdict", "8 The verdict: the receipt, INFLATED, the sign-off", verdictModel, verdictP, VD_CAM, { floor: VERDICT_GEO.floor, cx: VERDICT_GEO.desk.x }, { lift: 380, travelIn: 34, color: "#FFE2B8" });
