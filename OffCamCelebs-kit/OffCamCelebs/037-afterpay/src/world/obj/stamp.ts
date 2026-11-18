// THE RUBBER STAMP (037 v2; worker A): a chunky stamp. Origin: the centre of its stamping FACE; the face looks toward −z
// and the handle runs back along +z (it punches onto an upright face in front of it).
import * as THREE from "three";
import { MAT, rbox } from "../kit";

export const STAMP = { w: 600, h: 176, d: 96 } as const;
export const makeStamp = (key: string) => {
  const group = new THREE.Group();
  group.name = `stamp-${key}`;
  const pad = rbox(STAMP.w - 18, STAMP.h - 18, 16, 5, MAT.rubber());
  pad.position.z = 8;
  const base = rbox(STAMP.w, STAMP.h, STAMP.d, 20, MAT.black());
  base.position.z = 16 + STAMP.d / 2;
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(58, 74, 46, 40), MAT.satin());
  collar.rotation.x = Math.PI / 2;
  collar.position.z = 16 + STAMP.d + 22;
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(36, 46, 150, 40), MAT.black());
  neck.rotation.x = Math.PI / 2;
  neck.position.z = 16 + STAMP.d + 118;
  const knob = new THREE.Mesh(new THREE.SphereGeometry(80, 40, 28), MAT.black());
  knob.position.z = 16 + STAMP.d + 232;
  for (const m of [base, collar, neck, knob]) { m.castShadow = true; m.receiveShadow = true; }
  group.add(pad, base, collar, neck, knob);
  return { group };
};
