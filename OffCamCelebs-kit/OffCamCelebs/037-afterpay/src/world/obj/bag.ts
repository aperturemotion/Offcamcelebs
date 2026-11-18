// THE BAG (037 v2; worker A): a chunky shopping bag, the thing that was bought. Matte black, a folded top band, two rope
// handles, ONE word on its face (R8). Origin: its floor centre. About 360 w × 420 h × 200 d.
import * as THREE from "three";
import { MAT, K, rbox, lit, wide } from "../kit";
import { text3d } from "../text3d";

export const BAG = { w: 360, h: 420, d: 200 } as const;
export const makeBag = (key: string) => {
  const group = new THREE.Group();
  group.name = `bag-${key}`;
  const body = rbox(BAG.w, BAG.h, BAG.d, 16, MAT.black());
  body.position.y = BAG.h / 2;
  const band = rbox(BAG.w + 10, 52, BAG.d + 10, 12, MAT.graphite());
  band.position.y = BAG.h - 26;
  group.add(body, band);
  const satin = MAT.satin();
  for (const z of [62, -62]) {
    const h = new THREE.Mesh(new THREE.TorusGeometry(74, 9, 14, 40, Math.PI), satin);
    h.position.set(0, BAG.h - 4, z);
    h.castShadow = true;
    group.add(h);
  }
  const face = lit(K.white, 1.0);
  const word = wide(text3d("AFTERPAY", { font: "800", size: 46, depth: 5, bevel: 0, face }));
  word.position.set(0, 172, BAG.d / 2 + 0.5);
  group.add(word);
  return { group, face };
};
