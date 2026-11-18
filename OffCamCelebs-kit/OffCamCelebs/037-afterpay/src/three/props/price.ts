// PLACE 4 · THE PRICE — one column, bottom to top, read as a sum: the stack of share certificates on a plinth × the LED
// share-price board ($247.26 | 30 JUL 2021) = the hanging tag, $29B again. The × and the = are small lit plaques on stems
// (figures and signs live on objects). The camera opens close on the board, pulls back down the column, then climbs to the tag.
import { THREE, mesh, type Model } from "../stage";
import { rbox } from "../kit029";
import { SM, C, STUDIO_RIG, studioFloor, plaque, halo } from "../studio";
import { makeLed } from "../obj/led";
import { makeCerts } from "../obj/certs";
import { makeTag } from "../obj/tag";
import { PRICE } from "../../audit/record";

export const PRICE_GEO = {
  floor: 1400, cx: 540,
  plinth: { w: 560, h: 120, d: 420, z: 290 }, certs: { w: 420, d: 290, n: 36, t: 6 },
  led: { w: 620, h: 300, legs: 480 },
  times: { y: 1006, z: 96 }, equals: { y: 62 },
  tag: { y: -420, w: 720, h: 300, cord: 120 },
} as const;
/** on: the board's display 0…1; stack: 0 the stack and its plinth off to the right … 1 in place; sum: 0…1 the × and = signs
 *  lit (and the stack's glow); turn: 0 the tag edge-on to the camera (its print unseen) … 1 turned to face it; tag: 0…1 the tag's lamp */
export type PriceP = { on: number; stack: number; sum: number; turn: number; tag: number; swing: number };

export const priceModel = (): Model<PriceP> => {
  const G = PRICE_GEO, Y = -G.floor, X = G.cx;
  const root = new THREE.Group();
  root.add(studioFloor({ y: G.floor, cx: X, cz: 120, rx: 900, rz: 820 }));
  const pool = halo(1500, 1100, C.white, 0.1, true);
  pool.position.set(X, Y + 2, 160);
  root.add(pool);
  // the plinth, forward of the board
  const P = G.plinth;
  const plinth = rbox(P.w, P.h, P.d, 10, SM.black());
  plinth.position.set(X, Y + P.h / 2, P.z + P.d / 2);
  const pTop = rbox(P.w - 30, 3, P.d - 30, 3, SM.graphite(), 1);
  pTop.position.set(X, Y + P.h + 0.6, P.z + (P.d - 30) / 2);
  pTop.receiveShadow = true;
  const pLine = rbox(P.w - 8, 4, 4, 1.4, SM.edge(), 1);
  pLine.position.set(X, Y + P.h - 4, P.z + P.d / 2 + 2.4);
  const certs = makeCerts({ key: "price", w: G.certs.w, d: G.certs.d, n: G.certs.n, t: G.certs.t, labels: ["SQUARE SHARES"], sub: "0.375 PER AFTERPAY SHARE" });
  certs.group.position.set(X, Y + P.h + 2, P.z);
  certs.group.userData.obj = "certs";
  const led = makeLed({ key: "price", w: G.led.w, h: G.led.h, legs: G.led.legs });
  led.group.position.set(X, Y, 0);
  led.group.userData.obj = "led";
  // the signs: × on a stem from the plinth's back edge, = on a stem from the board's hood
  const sign = (t: string, y: number, z: number, stemTo: number) => {
    const g = new THREE.Group();
    const s = plaque(`price:${t}`, 104, 104, [{ t, size: 100, weight: 800, color: C.white, glow: 14 }], { pad: 4, depth: 20 });
    const len = Math.abs(y - stemTo) - 52;
    if (len > 4) {
      const stem = mesh(new THREE.CylinderGeometry(4, 4, len, 12), SM.edge());
      stem.position.y = -(52 + len / 2);
      g.add(stem);
    }
    g.add(s);
    g.position.set(X, -y, z);
    g.userData.obj = `sign${t}`;
    root.add(g);
    return { g, face: s.userData.face as THREE.Mesh };
  };
  const signs = [sign("×", G.times.y, G.times.z, G.floor - P.h), sign("=", G.equals.y, 20, G.equals.y + 60)];
  const tag = makeTag({ key: "price", w: G.tag.w, h: G.tag.h, cord: G.tag.cord, faces: [
    { kicker: "ANNOUNCED | 1 AUG 2021", figure: "$29,000,000,000", color: C.mint },
    { kicker: "ANNOUNCED | 1 AUG 2021", figure: "$29,000,000,000", color: C.mint }] });
  tag.group.position.set(X, -G.tag.y, 20);
  tag.group.userData.obj = "tag";
  const stack = new THREE.Group();
  stack.userData.obj = "stack";
  stack.add(plinth, pTop, pLine, certs.group);
  root.add(stack, led.group, tag.group);
  return {
    root, rig: STUDIO_RIG,
    update: (p) => {
      led.update({ value: PRICE.announce, date: PRICE.announceDate, on: p.on });
      certs.update({ height: 1, glow: 0.25 + 0.75 * p.sum });
      stack.position.x = 1500 * (1 - p.stack);
      stack.visible = p.stack > 0.001;
      signs.forEach(({ g, face }, i) => { (face.material as THREE.MeshBasicMaterial).opacity = 0.1 + 0.9 * p.sum; g.visible = i === 0 ? p.stack > 0.5 : true; });
      tag.update({ flip: 0.5 * (1 - p.turn), swing: p.swing, lit: p.tag });
    },
  };
};
