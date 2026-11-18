// PLACE 4 · THE PRICE — the LED share-price board, $247.26 on 30 JUL 2021; then the sum: the certificate stack × the price
// = the hanging tag, $29B again. STUB BUILD: the × and = signs are placeholders.
import { THREE, type Model } from "../stage";
import { rbox } from "../kit029";
import { SM, C, STUDIO_RIG, studioFloor, plaque } from "../studio";
import { makeLed } from "../obj/led";
import { makeCerts } from "../obj/certs";
import { makeTag } from "../obj/tag";
import { PRICE } from "../../audit/record";

export const PRICE_GEO = { floor: 1400, certs: { x: 110 }, times: { x: 400 }, led: { x: 760, w: 560, h: 290, legs: 230 }, equals: { x: 1130 }, tag: { x: 1600, y: 560, w: 720, h: 310, cord: 190 } } as const;
/** on: the board's display 0…1; sum: 0…1 the × and = signs lit; tag: 0…1 the tag's lamp */
export type PriceP = { on: number; sum: number; tag: number; swing: number };

export const priceModel = (): Model<PriceP> => {
  const G = PRICE_GEO, Y = -G.floor;
  const root = new THREE.Group();
  root.add(studioFloor({ y: G.floor, cx: 860, rx: 1400 }));
  const plinth = rbox(460, 150, 340, 8, SM.black());
  plinth.position.set(G.certs.x, Y + 75, 170);
  const certs = makeCerts({ key: "price", labels: ["SQUARE SHARES"], sub: "0.375 PER AFTERPAY SHARE" });
  certs.group.position.set(G.certs.x, Y + 150, 0);
  certs.group.userData.obj = "certs";
  const led = makeLed({ key: "price", w: G.led.w, h: G.led.h, legs: G.led.legs });
  led.group.position.set(G.led.x, Y, 0);
  led.group.userData.obj = "led";
  const signs = [["×", G.times.x], ["=", G.equals.x]].map(([t, x]) => {
    const s = plaque(`price:${t}`, 110, 110, [{ t: t as string, size: 96, weight: 800, color: C.white, glow: 12 }], { pad: 8 });
    s.position.set(x as number, Y + G.led.legs + G.led.h / 2, 0);
    s.userData.obj = `sign${t}`;
    root.add(s);
    return s.userData.face as THREE.Mesh;
  });
  const tag = makeTag({ key: "price", w: G.tag.w, h: G.tag.h, cord: G.tag.cord, faces: [
    { kicker: "ANNOUNCED | 1 AUG 2021", figure: "$29,000,000,000", color: C.mint },
    { kicker: "ANNOUNCED | 1 AUG 2021", figure: "$29,000,000,000", color: C.mint }] });
  tag.group.position.set(G.tag.x, -G.tag.y, 0);
  tag.group.userData.obj = "tag";
  root.add(plinth, certs.group, led.group, tag.group);
  return {
    root, rig: STUDIO_RIG,
    update: (p) => {
      led.update({ value: PRICE.announce, date: PRICE.announceDate, on: p.on });
      signs.forEach((m) => { (m.material as THREE.MeshBasicMaterial).opacity = 0.12 + 0.88 * p.sum; });
      tag.update({ flip: 0, swing: p.swing, lit: p.tag });
    },
  };
};
