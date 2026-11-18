// PLACE 8 · THE VERDICT, in the world (rule P12). The opening's composition again, so the film loops: the same hanging
// price tag over the same desk; where the newspapers lay, a receipt printer.
//  0 "So 29 billion was the price on day one."  the camera arrives LOW and close on the printer; the receipt feeds up out
//                                               of the slot: its head, then ANNOUNCED $29,000,000,000 (mint) on "29"; the
//                                               camera rises with the paper.
//  1 "Not the price paid."                      PAID AT CLOSING $13,800,000,000 (khaki) on "Not"; GAP ≈ $15,000,000,000 on
//                                               "paid".
//  2 "Our rating: inflated."                    the paper feeds its foot; the camera pushes in; on "inflated" the one-off
//                                               verdict label, SOLID red letters, comes down onto the paper with a hit of
//                                               red light; then the camera tracks to the framed print beside it.
//  3 "Send us who to audit next."               the camera climbs back to the hanging tag as its lamp comes up, ending on
//                                               FRAME 0's framing (the loop).
// Timings: sets/verdict.tsx (VD), all on the take's words.
import * as THREE from "three";
import { cue } from "../../r45/time";
import { ramp, lerp, SETTLE, SOFT, clamp01 } from "../../r45/tokens";
import { VD } from "../../r45/sets/verdict";
import { C } from "../../three/studio";
import { makeTag } from "../../three/obj/tag";
import { makeDesk } from "../../three/obj/desk";
import { makeFrame } from "../../three/obj/frame";
import { makePrinter, RECEIPT, RECEIPT_FEED as L, PRINTER } from "../../three/obj/c3_printer";
import { HAS_PHOTO, PHOTO_FILE, TOTAL_FRAMES } from "../../audit/data";
import { crane, dolly, travel, mixV, type CamKey3, type Vec } from "../cam";
import type { Place3 } from "../place";
import { HOOK_STAGE as H, OPENING } from "./hook";

const S = "verdict" as const;
const SEND = cue(S, 3);
const P: Vec = [520, H.deskY, -60];                       // the printer on the desk
const SLOT = H.deskY + PRINTER.h + 6, PZ = P[2] + PRINTER.slotZ;
const FRAME: Vec = [1090, H.deskY, -230];

const feedAt = (f: number) => {
  const a = ramp(f, VD.head[0], VD.head[1], SETTLE), b = ramp(f, VD.ann[0], VD.ann[1], SETTLE), c = ramp(f, VD.paid[0], VD.paid[1], SETTLE),
    d = ramp(f, VD.gap[0], VD.gap[1], SETTLE), e = ramp(f, VD.foot[0], VD.foot[1], SETTLE);
  return lerp(lerp(lerp(lerp(L.head * a, L.announced, b), L.paid, c), L.gap + 0.02, d), L.all, e);
};
const feeding = (f: number) => [VD.head, VD.ann, VD.paid, VD.gap, VD.foot].some(([a, b]) => f >= a - 2 && f <= b + 2);
const ratingAt = (f: number) => ramp(f, VD.rating[0], VD.rating[1], SETTLE);
/** the hit of light as the label lands: up fast, down slowly */
const hitAt = (f: number) => { const t = f - VD.rating[1] + 2; return t < 0 ? 0 : Math.exp(-t / 9) * clamp01(t / 2); };
const tagAt = (f: number) => ramp(f, VD.tag[0], VD.tag[1] + 10, SOFT);

export const VerdictPlace: Place3 = {
  id: S, label: "8 The verdict: the receipt, INFLATED, the sign-off", enter: cue(S, 0) - 30,
  shots: ({ from, to }): CamKey3[] => {
    const k: CamKey3[] = [];
    const mid = (u: number): Vec => [P[0] + 70, SLOT + RECEIPT.h * u, PZ];
    /** a camera pose relative to the receipt's plane: dx to the side, y, dz in front */
    const at = (dx: number, y: number, dz: number): Vec => [P[0] + dx, y, PZ + dz];
    k.push(travel(from, 34, at(470, 470, 1130), mid(0.12), { fov: 50, bulge: [0, 120, 260], why: "travel in, low on the printer", vol: 0.8 }));
    // the camera cranes up and back as the paper feeds: the sheet's top stays under the caption line
    const t1 = Math.max(VD.ann[0], from + 35), e1 = Math.max(t1 + 30, VD.gap[1]);
    k.push(dolly(t1, e1 - t1, at(470, 800, 1700), mid(0.39), { ease: SOFT, why: "rise with the paper" }));
    const t2 = Math.max(VD.foot[0], e1 + 1), e2 = Math.max(t2 + 16, VD.rating[0] - 2);
    k.push(dolly(t2, e2 - t2, at(360, 860, 1500), mid(0.47), { why: "push in for the rating" }));
    const t3 = Math.max(VD.rating[1] + 9, e2 + 1), e3 = Math.max(t3 + 12, SEND - 4);
    k.push(dolly(t3, e3 - t3, at(900, 800, 1560), [P[0] + 300, SLOT + 300, PZ - 80], { ease: SOFT, why: "track to the framed print" }));
    const t4 = e3 + 1, d4 = Math.min(48, to - 1 - t4);
    if (d4 >= 12) k.push(crane(t4, d4, OPENING.pos, OPENING.look, { fov: OPENING.fov, bulge: [0, 0, 260], why: "climb back to the tag: the opening" }));
    return k;
  },
  lights: (f) => {
    const w = tagAt(f), hit = hitAt(f);
    const paperAt: Vec = [P[0], SLOT + 300, PZ], tagAtV: Vec = [H.tag[0], H.tag[1] - 200, H.tag[2]];
    return {
      amb: 0.12,
      // the key: on the receipt while it prints (a soft white from the front-left), on the tag for the sign-off (amber)
      key: { pos: mixV([P[0] + 700, 1750, 1500], [H.tag[0] - 150, 2500, 760], w), at: mixV(paperAt, tagAtV, w), i: 2.3 + 1.6 * w + 1.4 * hit,
        color: w > 0.5 ? "#FFC06A" : "#FFF4E2", angle: lerp(0.42, 0.5, w), soft: 0.85 },
      rim: { pos: [1200, 1300, -1500], at: mixV(paperAt, H.tag, w), i: 3.2, color: "#CFE0FF", angle: 0.8, soft: 0.6 },
      aux: { pos: [1500, 1700, 900], at: [FRAME[0], H.deskY + 160, FRAME[2]], i: 0.4 + 1.6 * ramp(f, VD.rating[1], VD.rating[1] + 20, SOFT) * (1 - 0.6 * w), color: "#F4F6FF", angle: 0.3, soft: 0.9 },
      accent: hit > 0.01 || w < 0.02
        ? { pos: [P[0], SLOT + 110, PZ + 260], color: C.red, i: 2.4 * hit }
        : { pos: [H.tag[0] - 60, H.tag[1] - 320, 420], color: "#F5A524", i: 1.6 * w },
      focus: [200, 100], reach: 3200, reflect: 0.5,
    };
  },
  build: () => {
    const group = new THREE.Group();
    const desk = makeDesk({ w: H.deskW, d: H.deskD, drop: H.deskY - 44 });
    desk.group.position.set(H.deskX, H.deskY, 0);
    desk.group.traverse((n) => { const m = (n as THREE.Mesh).material as THREE.MeshPhysicalMaterial | undefined; if (m?.isMeshStandardMaterial) { m.roughness = Math.max(m.roughness, 0.62); if (m.isMeshPhysicalMaterial) m.clearcoat = 0; } });
    const printer = makePrinter({ key: "verdict3d", deskY: H.deskY });
    printer.group.position.set(...P);
    const frame = makeFrame({ key: "verdict3d", photo: HAS_PHOTO ? PHOTO_FILE : null });
    frame.group.position.set(...FRAME);
    frame.group.rotation.y = -0.3;
    const tag = makeTag({ key: "verdict3d", w: H.tw, h: H.th, cord: H.cord, faces: [
      { kicker: "AFTERPAY | SOLD FOR", figure: "$29,000,000,000", color: C.mint },
      { kicker: "THE FILING SAYS", figure: "$13,800,000,000", color: C.khaki }] });
    tag.group.position.set(...H.hang);
    group.add(desk.group, printer.group, frame.group, tag.group);
    return {
      group,
      update: (f) => {
        printer.update({ feed: feedAt(f), rating: ratingAt(f), busy: feeding(f) ? (Math.floor(f / 3) % 2 ? 1 : 0.3) : 0.5 });
        tag.update({ flip: 0, swing: 0.9 * Math.sin(f / 31) + 0.4 * Math.sin(f / 17), lit: -0.3 + 1.3 * tagAt(f) });   // dark until the sign-off (the tag's print floor is 0.25 at lit 0)
      },
    };
  },
};
void TOTAL_FRAMES;
