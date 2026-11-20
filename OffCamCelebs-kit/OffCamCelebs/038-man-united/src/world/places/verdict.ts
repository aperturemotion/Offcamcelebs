// ═════════════════════════════════════════════════════════════════════════════════════════════
// SET A AGAIN · THE BOOKEND (038; worker A; SHOTS.md row "A AGAIN"; study rules R13, R16, R18, R31).
// ★ P17 (Timur, 2026-11-20: "Too much text at 51 seconds"): the bookend returns with ONE label and ONE figure, never more:
//   the sign's top slat stays turned to its blank back (it flipped away in the hook scene, before the stamp landed), the
//   loan tag and its chains are gone, so the frame reads £790,000,000 over the ink BILLED TO: MANCHESTER UNITED.
//  0 "But £790 million was the price."  HARD CUT back to set A, on the sign: the crest on its plinth, £790,000,000 on the
//    price slat, BILLED TO: MANCHESTER UNITED inked on the marble below; the price slat flashes on "790".
//  1 "United has been paying the bill ever since."  On "bill" the price slat FLIPS: the same £790,000,000 comes round in
//    RED (the bill), a red glow rises and a red ring spreads. A receipt printer drops in beside the plinth.
//  2 "Our rating: inflated."  The receipt prints: thin thermal paper curling out of the slot, small monospaced print (the
//    price, the borrowing), then RATING: INFLATED in red, landing on "inflated" with a red ring.
//  3 "Send us who to audit next."  The camera cuts to the film's opening framing (the film loops) and the film ends within a
//    second of the last word.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { cue, word } from "../../r45/time";
import { SOFT, clamp01 } from "../../r45/tokens";
import { cut, dolly, crane, type CamKey3, type Vec } from "../cam";
import { stdLights, type Place3, type PlaceCue } from "../place";
import { K, ring, dropIn, dropFalls, backGlow } from "../kit";
import { enterOf } from "../timeline";
import { setA, SIGN, OPENING } from "./hook";
import { PLINTH } from "../obj/plinth";
import { makeReceipt } from "../obj/receipt";

const S = "verdict" as const;
const ENTER = enterOf(S);
const N790 = word(S, 0, /^790/), PRICE = word(S, 0, /^price/), C1 = cue(S, 1), BILL = word(S, 1, /^bill/);
const INF = word(S, 2, /^inflated/i), SEND = cue(S, 3);
// ★ the receipt prints AFTER the flip (the brief's order: the sign flips on "bill", the receipt prints the rating), beside the
//   plinth on the right, so its paper never covers the sign
const PDROP = { h: 420, fall: 8 } as const;
const PRINTER_LAND = BILL + 14, PX = 760, PZ = PLINTH.d / 2 + 1750;   // ★ (038 review) in from the crane leg (x 1450), which stood in the caption band
export const VD = { land: PRINTER_LAND, price: PRICE, bill: BILL, inf: INF, send: SEND } as const;

/** the receipt's feed: each line lands on its word */
const L1 = PRINTER_LAND + 16, L2 = Math.round((L1 + INF) / 2) + 2;
const feedAt = (f: number, at: number[]) => {
  const seg = (a: number, b: number, v0: number, v1: number) => v0 + (v1 - v0) * SOFT(clamp01((f - a) / (b - a)));
  if (f < PRINTER_LAND + 4) return 0;
  if (f < L1) return seg(PRINTER_LAND + 4, L1, 0, at[0]);
  if (f < L2) return seg(L1 + 1, L2, at[0], at[1]);
  return seg(L2 + 1, INF, at[1], at[2] + 30);
};

export const VerdictPlace: Place3 = {
  id: S, label: "9 Set A again: £790,000,000 BILLED TO: MANCHESTER UNITED; the price turns red; the receipt: RATING: INFLATED", enter: ENTER, stage: "dark",
  shots: ({ from, to }): CamKey3[] => [
    cut(from, SIGN.pos, SIGN.look, { fov: SIGN.fov, focus: SIGN.focus, why: "cut back to set A, on the sign" }),
    { ...dolly(from + 1, BILL - 14 - (from + 1), [-180, 1040, 2600], [0, 1010, 400], { fov: 42, ease: SOFT, why: "the opening's push-in on the sign" }), focus: SIGN.focus },
    // ★ (038 review) cut to the printer seen from above (the crest and the tag stay out of the caption band)
    // ★ P17: nearer than before: the receipt is a real receipt's size now (thin paper, small print), so the camera comes to it
    cut(BILL + 8, [PX - 60, 1820, PZ + 1000], [PX + 25, 300, PZ], { fov: 44, focus: [PX, 380, PZ] as Vec, why: "cut to the printer as it lands" }),
    { ...dolly(BILL + 9, INF - 22 - (BILL + 9), [PX - 50, 1700, PZ + 950], [PX + 25, 320, PZ], { fov: 44, ease: SOFT, why: "drift as it prints" }), focus: [PX, 400, PZ] as Vec },
    { ...dolly(INF - 20, SEND - 4 - (INF - 20), [PX - 30, 1080, PZ + 700], [PX + 5, 400, PZ - 40], { fov: 38, why: "push in on the receipt" }), focus: [PX, 420, PZ - 40] as Vec },
    // ★ (038 review) a crane up from the receipt swept the crest and the beam through the caption band: CUT to the opening's
    //   framing (drifted the other way) and settle exactly on frame 0's pose, so the loop joins
    cut(SEND - 2, [OPENING.pos[0] - 220, OPENING.pos[1], OPENING.pos[2] + 120], [OPENING.look[0] - 190, OPENING.look[1], 0], { fov: OPENING.fov, focus: OPENING.focus, why: "cut to the opening framing" }),
    { ...dolly(SEND - 1, to - (SEND - 1) - 1, OPENING.pos, OPENING.look, { fov: OPENING.fov, ease: SOFT, why: "settle on frame 0's pose (the loop)" }), focus: OPENING.focus },
  ],
  lights: (f) => {
    const p790 = f >= N790 ? Math.exp(-(f - N790) / 12) : 0, pBill = f >= BILL ? Math.exp(-(f - BILL) / 14) : 0, pInf = f >= INF ? Math.exp(-(f - INF) / 14) : 0;
    const L = stdLights([0, 700, 200], { s: 1.35, key: 3.5 + 0.9 * p790 + 1.0 * pBill + 1.2 * pInf });
    L.accent = { pos: [0, 400, 1400], color: f < BILL ? K.money : K.red, i: 2.2 * p790 + 2.4 * pBill + 2.6 * pInf };
    if (f >= BILL) L.back = backGlow([0, 700, 0], K.red, 2.2 * (0.45 + 0.55 * Math.max(pBill, pInf)));
    return L;
  },
  blur: (f) => dropIn(f, PRINTER_LAND, PDROP).fast,
  cues: (): PlaceCue[] => [
    { kind: "hit", s: "pingshort", at: N790, vol: 0.3, why: "the price slat flashes on 790" },
    { kind: "hit", s: "thud", at: PRINTER_LAND, vol: 0.5, why: "the receipt printer lands" },
    { kind: "hit", s: "datashort", at: PRINTER_LAND + 4, end: L1, vol: 0.3, why: "the receipt prints: PRICE" },
    { kind: "hit", s: "datashort", at: L1 + 1, end: L2, vol: 0.3, why: "the receipt prints: BORROWED" },
    { kind: "hit", s: "flick", at: BILL + 1, vol: 0.45, why: "the price slat flips: £790,000,000 comes round in red" },
    { kind: "hit", s: "sub", at: BILL + 4, vol: 0.4, why: "the red glow rises" },
    { kind: "hit", s: "datashort", at: L2 + 1, end: INF, vol: 0.3, why: "the receipt prints: RATING" },
    { kind: "hit", s: "thud", at: INF, vol: 0.45, why: "RATING: INFLATED lands" },
    { kind: "hit", s: "pingshort", at: INF + 1, vol: 0.3, why: "the red ring" },
    { kind: "move", s: "whooshsoft", at: SEND + 12, end: SEND + 30, vol: 0.3, why: "pull back to the opening" },
  ],
  build: () => {
    const group = new THREE.Group();
    const A = setA("verdict");
    group.add(A.group);
    const rec = makeReceipt("verdict");
    rec.group.position.set(PX, 0, PZ);
    rec.group.rotation.y = -0.14;   // (nearly square to the camera: the receipt's lines read level)
    const redR = ring({ r: 1500, color: K.red, dur: 30 }); redR.mesh.position.set(PX, 1.5, PZ + 160);
    const billR = ring({ r: 1600, color: K.red, dur: 30 }); billR.mesh.position.set(0, 1.5, PLINTH.d / 2 + 260);
    dropFalls(rec.group, PRINTER_LAND, PDROP, "the receipt printer drops in beside the plinth");
    group.add(rec.group, redR.mesh, billR.mesh);
    const at = rec.lineAt;
    return {
      group,
      update: (f) => {
        A.pose({ lift: 0, tagOn: false, tagAngle: 0, chain: 0, tug: 0 });
        const flash = f >= N790 ? 0.55 + 0.45 * clamp01((f - N790) / 8) : 1;
        A.plinth.update({ count: 790e6, ink: 1, lit: flash, flip1: 1, flip2: SOFT(clamp01((f - (BILL - 2)) / 11)) });
        const d = dropIn(f, PRINTER_LAND, PDROP);
        rec.group.visible = d.on; rec.group.position.y = d.y;
        rec.update({ feed: feedAt(f, at) });
        billR.update(f, BILL + 4); redR.update(f, INF);
      },
    };
  },
};
