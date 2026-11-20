// THE BAG (037 v2; worker A): a chunky shopping bag, the thing that was bought. Matte black, a folded top band, two rope
// handles, ONE word on its face (R8). Origin: its floor centre. About 530 w × 440 h × 240 d.
// ★ P14 (Timur, 2026-11-19: "Afterpay… should actually fit on the object that it's on… making the [bag] larger"): the bag
//   was 360 wide and its word overhung the face; the BAG grew, the word did not shrink.
import * as THREE from "three";
import { MAT, K, rbox, lit, wide, textOn } from "../kit";
import { text3d } from "../text3d";

export const BAG = { w: 530, h: 440, d: 240 } as const;
export const makeBag = (key: string) => {
  const group = new THREE.Group();
  group.name = `bag-${key}`;
  const body = rbox(BAG.w, BAG.h, BAG.d, 16, MAT.black());
  body.position.y = BAG.h / 2;
  const band = rbox(BAG.w + 10, 52, BAG.d + 10, 12, MAT.graphite());
  band.position.y = BAG.h - 26;
  group.add(body, band);
  const satin = MAT.satin();
  for (const z of [74, -74]) {
    const h = new THREE.Mesh(new THREE.TorusGeometry(60, 9, 14, 40, Math.PI), satin);
    h.position.set(0, BAG.h - 4, z);
    h.castShadow = true;
    group.add(h);
  }
  const face = lit(K.white, 1.0);
  const word = wide(text3d("AFTERPAY", { font: "800", size: 52, depth: 5, bevel: 0, face }));
  word.position.set(0, 180, BAG.d / 2 + 0.5);
  textOn(word, body, { inset: 16 });
  group.add(word);
  return { group, face };
};
