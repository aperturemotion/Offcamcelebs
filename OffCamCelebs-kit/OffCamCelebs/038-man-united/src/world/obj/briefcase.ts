// CASH, as a thing: an open briefcase of banded bundles; its lid slams. Origin: its footprint's centre on the table.
import * as THREE from "three";
import { MAT, rbox, block } from "../kit";

export const CASE = { w: 780, d: 540, h: 96 } as const;
export const makeBriefcase = () => {
  const group = new THREE.Group();
  const shell = () => {
    const s = new THREE.Group();
    const m = MAT.black();
    s.add(block(CASE.w, 30, CASE.d, 12, m));
    for (const [w, d, x, z] of [[CASE.w, 26, 0, CASE.d / 2 - 13], [CASE.w, 26, 0, -CASE.d / 2 + 13], [26, CASE.d, CASE.w / 2 - 13, 0], [26, CASE.d, -CASE.w / 2 + 13, 0]] as const) {
      const wall = rbox(w, CASE.h, d, 10, m);
      wall.position.set(x, CASE.h / 2, z);
      s.add(wall);
    }
    return s;
  };
  group.add(shell());
  // the bundles: cream notes, a khaki-gold band (their money is gold and cream: R14)
  const paper = new THREE.MeshStandardMaterial({ color: new THREE.Color("#8f8a76"), roughness: 0.95 });
  const band = MAT.gold();
  for (let ix = 0; ix < 3; ix++) for (let iz = 0; iz < 2; iz++) {
    const x = (ix - 1) * 236, z = (iz - 0.5) * 236;
    for (let k = 0; k < 2; k++) {
      const b = rbox(214, 34, 214, 7, paper);
      b.position.set(x + (k ? 5 : -3), 30 + 17 + k * 35, z + (k ? -4 : 3));
      group.add(b);
    }
    const s = rbox(64, 73, 218, 5, band);
    s.position.set(x, 30 + 36, z);
    group.add(s);
  }
  // the lid, hinged on the back edge
  const lid = new THREE.Group();
  lid.position.set(0, CASE.h, -CASE.d / 2);
  const inner = shell();
  inner.rotation.x = Math.PI;                 // upside down: its floor is the lid's top
  inner.position.set(0, CASE.h, CASE.d / 2);
  lid.add(inner);
  group.add(lid);
  const handle = new THREE.Mesh(new THREE.TorusGeometry(64, 9, 10, 32, Math.PI), MAT.satin());
  handle.rotation.x = Math.PI / 2;
  handle.position.set(0, CASE.h * 0.6, CASE.d / 2 + 4);
  group.add(handle);
  for (const sx of [-1, 1]) { const latch = rbox(46, 26, 12, 4, MAT.satin()); latch.position.set(sx * 230, CASE.h - 8, CASE.d / 2 + 5); group.add(latch); }
  return {
    group,
    /** `lid` 0 (thrown open) … 1 (shut) */
    update: (p: { lid: number }) => { lid.rotation.x = -(1 - p.lid) * 1.95; },
  };
};
