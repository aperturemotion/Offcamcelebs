// A GOLD COIN with a £ on each face (038: ticket, shirt and TV money; £190,000 a day): a milled gold disc, a raised rim, a
// solid "£" embossed on both faces. Coins are thrown and dropped many at a time: geometry and materials are shared.
// makeCoin(key) → { group }   Origin: the coin's centre; it lies flat (faces up/down). Radius 60, thickness 14.
import * as THREE from "three";
import { MAT } from "../kit";
import { text3d } from "../text3d";
import { freeText } from "../kit";

export const COIN = { r: 60, t: 14 } as const;
let shared: { body: THREE.CylinderGeometry; rim: THREE.TorusGeometry; mat: THREE.Material } | null = null;
const parts = () => shared ??= { body: new THREE.CylinderGeometry(COIN.r, COIN.r, COIN.t, 48), rim: new THREE.TorusGeometry(COIN.r - 5, 3.2, 8, 48), mat: MAT.gold() };

export const makeCoin = (key: string) => {
  void key;
  const p = parts();
  const group = new THREE.Group();
  const body = new THREE.Mesh(p.body, p.mat); body.castShadow = true; body.receiveShadow = true; group.add(body);
  for (const s of [1, -1]) {
    const rim = new THREE.Mesh(p.rim, p.mat); rim.rotation.x = Math.PI / 2; rim.position.y = (s * COIN.t) / 2; group.add(rim);
    const sign = text3d("£", { font: "800", size: 64, depth: 3, bevel: 0, face: p.mat, align: "centre" });
    sign.rotation.x = s > 0 ? -Math.PI / 2 : Math.PI / 2;
    sign.position.set(0, (s * COIN.t) / 2, s > 0 ? 22 : -22);
    freeText(sign, "the £ embossed in the coin's face (it is part of the coin)");
    group.add(sign);
  }
  return { group };
};
