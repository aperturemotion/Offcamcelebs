// A BANK VAULT (038: the loans, the bank loans the bonds paid off, the takeover's running cost): a heavy round steel door on
// big hinges in a thick bevelled frame set in a block of wall, its spoke wheel and locking bolts, a lit label plate over it.
// makeVault(key) → { group, update({ door, wheel? }), label(text), mouth, size }
//   door 0 (shut) … 1 (swung open 105°, toward +z, hinged on the left as seen from the front); wheel 0…1 spins the
//   wheel a full turn (it turns before the door opens). label(text) sets the plate's words (≤ 3, P14: the plate is sized
//   from them). `mouth`: the vault's opening centre (where things go in), in the group's space.
// Origin: the floor centre of the wall block's front face; the door faces +z. Size: 1,300 w × 1,350 h × 420 d (the wall).
import * as THREE from "three";
import { MAT, K, rbox, block, litPlate } from "../kit";

const steel = () => new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#5e6066"), roughness: 0.3, metalness: 1, envMapIntensity: 1.1, clearcoat: 0.2 });
const R = 430;   // the door's radius

export const makeVault = (key: string) => {
  void key;
  const group = new THREE.Group();
  const W = 1300, H = 1350, D = 420, CY = 640;
  // the wall block, its front face at z = 0, with the round opening cut THROUGH it (a real hole, not a painted disc)
  const wallShape = new THREE.Shape(); wallShape.moveTo(-W / 2, 0); wallShape.lineTo(W / 2, 0); wallShape.lineTo(W / 2, H); wallShape.lineTo(-W / 2, H); wallShape.lineTo(-W / 2, 0);
  const holePath = new THREE.Path(); holePath.absarc(0, CY, R, 0, Math.PI * 2, true); wallShape.holes.push(holePath);
  const wg = new THREE.ExtrudeGeometry(wallShape, { depth: D - 16, bevelEnabled: true, bevelThickness: 8, bevelSize: 8, bevelOffset: -8, bevelSegments: 3, curveSegments: 96 });
  wg.translate(0, 0, -D + 8);
  const wall = new THREE.Mesh(wg, MAT.black()); wall.castShadow = true; wall.receiveShadow = true; group.add(wall);
  // the frame: a thick steel ring round the opening, on the wall's face
  const frame = new THREE.Mesh(new THREE.TorusGeometry(R + 40, 40, 32, 96), steel());
  frame.position.set(0, CY, 18); frame.castShadow = true; frame.receiveShadow = true; group.add(frame);
  // inside: the dark steel drum of the vault, its back wall, and shelves of gold bars
  const inner = new THREE.MeshStandardMaterial({ color: "#1b1b1e", roughness: 0.6, metalness: 0.6, side: THREE.BackSide });
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(R - 1, R - 1, D - 20, 96, 1, true), inner);
  drum.rotation.x = Math.PI / 2; drum.position.set(0, CY, -D / 2 - 2); drum.receiveShadow = true; group.add(drum);
  const back = new THREE.Mesh(new THREE.CircleGeometry(R, 96), new THREE.MeshStandardMaterial({ color: "#121214", roughness: 0.8 }));
  back.position.set(0, CY, -D + 14); group.add(back);
  for (const y of [-160, 40, 220]) {
    const shelf = rbox(560, 12, 120, 4, steel()); shelf.position.set(0, CY + y, -D + 90); group.add(shelf);
    for (let i = -2; i <= 2; i++) { const bar = rbox(80, 34, 50, 6, MAT.gold()); bar.position.set(i * 96, CY + y + 23.5, -D + 90); group.add(bar); }
  }
  // the door: hinged on the left; a thick disc, its bolts, the wheel on a hub
  const hinge = new THREE.Group(); hinge.position.set(-R - 60, CY, 120); group.add(hinge);   // in front of the frame: the door never cuts it
  const door = new THREE.Group(); door.position.set(R + 60, 0, 0); hinge.add(door);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(R, R, 110, 96), steel());
  disc.rotation.x = Math.PI / 2; disc.position.z = 0; disc.castShadow = true; disc.receiveShadow = true; door.add(disc);
  const face = new THREE.Mesh(new THREE.CylinderGeometry(R - 60, R - 40, 30, 96), steel());
  face.rotation.x = Math.PI / 2; face.position.z = 68; door.add(face);
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(22, 22, 70, 24), MAT.satin());
    bolt.position.set(Math.cos(a) * (R - 22), Math.sin(a) * (R - 22), 30); bolt.rotation.x = Math.PI / 2; door.add(bolt);
  }
  const wheel = new THREE.Group(); wheel.position.z = 110; door.add(wheel);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(60, 60, 50, 48), MAT.satin()); hub.rotation.x = Math.PI / 2; wheel.add(hub);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(200, 16, 16, 64), MAT.satin()); wheel.add(rim);
  for (let i = 0; i < 4; i++) {
    const spoke = new THREE.Mesh(new THREE.CylinderGeometry(12, 12, 400, 16), MAT.satin()); spoke.rotation.z = (i * Math.PI) / 4 * 2; wheel.add(spoke);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(26, 24, 16), MAT.satin());
    const a = (i / 4) * Math.PI * 2; knob.position.set(Math.cos(a) * 200, Math.sin(a) * 200, 0); wheel.add(knob);
  }
  // the hinge barrels and the arms that carry the door
  for (const y of [-260, 260]) {
    const b = new THREE.Mesh(new THREE.CylinderGeometry(38, 38, 150, 32), steel()); b.position.set(0, y, 0); hinge.add(b);
    const arm = rbox(120, 60, 50, 10, steel()); arm.position.set(70, y, 0); hinge.add(arm);
  }
  // the label plate over the door
  const plateG = new THREE.Group(); plateG.position.set(0, H - 120, 32); group.add(plateG);
  let plate = litPlate(["VAULT"], { size: 76, color: K.white });
  plateG.add(plate.group);
  return {
    group, size: { w: W, h: H, d: D },
    mouth: new THREE.Vector3(0, CY, 0),
    label: (text: string) => { plateG.clear(); plate = litPlate(text.split(" | "), { size: 76, color: K.white }); plateG.add(plate.group); return plate; },
    get plate() { return plate; },
    update: (p: { door: number; wheel?: number }) => {
      wheel.rotation.z = -(p.wheel ?? 0) * Math.PI * 2;
      hinge.rotation.y = -Math.max(0, Math.min(1, p.door)) * (105 * Math.PI / 180);
    },
  };
};
