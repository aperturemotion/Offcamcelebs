// A BANK VAULT (038: the loans, the bank loans the bonds paid off, the takeover's running cost): a heavy round steel door on
// big hinges in a thick bevelled frame set in a block of wall, its spoke wheel and locking bolts, a lit label plate over it.
// makeVault(key) → { group, update({ door, wheel? }), label(text), mouth, size }
//   door 0 (shut) … 1 (swung open 105°, toward +z, hinged on the left as seen from the front); wheel 0…1 spins the
//   wheel a full turn (it turns before the door opens). label(text) sets the plate's words (≤ 3, P14: the plate is sized
//   from them). `mouth`: the vault's opening centre (where things go in), in the group's space.
// Origin: the floor centre of the wall block's front face; the door faces +z. Size: 1,300 w × 1,350 h × 420 d (the wall).
import * as THREE from "three";
import { MAT, K, rbox, block, litPlate, mounted } from "../kit";

const steel = () => new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#5e6066"), roughness: 0.3, metalness: 1, envMapIntensity: 1.1, clearcoat: 0.2 });
const R = 430;   // the door's radius

/** `depth`: the wall block's depth (its tunnel); a vault that takes things in is deeper, so they land inside it */
export const makeVault = (key: string, o: { depth?: number } = {}) => {
  void key;
  const group = new THREE.Group();
  const W = 1300, H = 1350, D = o.depth ?? 420, CY = 640;
  // the wall block, its front face at z = 0, with the round opening cut THROUGH it (a real hole, not a painted disc)
  const wallShape = new THREE.Shape(); wallShape.moveTo(-W / 2, 0); wallShape.lineTo(W / 2, 0); wallShape.lineTo(W / 2, H); wallShape.lineTo(-W / 2, H); wallShape.lineTo(-W / 2, 0);
  const holePath = new THREE.Path(); holePath.absarc(0, CY, R, 0, Math.PI * 2, true); wallShape.holes.push(holePath);
  const wg = new THREE.ExtrudeGeometry(wallShape, { depth: D - 16, bevelEnabled: true, bevelThickness: 8, bevelSize: 8, bevelOffset: -8, bevelSegments: 3, curveSegments: 96 });
  wg.translate(0, 0, -D + 8);
  const wall = new THREE.Mesh(wg, MAT.black()); wall.castShadow = true; wall.receiveShadow = true; wall.name = "vault wall"; group.add(wall);
  // the frame: a thick steel ring round the opening, on the wall's face
  const frame = new THREE.Mesh(new THREE.TorusGeometry(R + 40, 40, 32, 96), steel());
  frame.position.set(0, CY, 18); frame.name = "vault frame"; frame.castShadow = true; frame.receiveShadow = true; group.add(frame);
  // inside: the dark steel drum of the vault, its back wall, and shelves of gold bars
  const inner = new THREE.MeshStandardMaterial({ color: "#1b1b1e", roughness: 0.6, metalness: 0.6, side: THREE.BackSide });
  // (0.3 inside the tunnel's own wall: it lines it, ON it)
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(R - 0.3, R - 0.3, D - 20, 96, 1, true), inner); drum.name = "vault drum";
  drum.rotation.x = Math.PI / 2; drum.position.set(0, CY, -D / 2 - 2); drum.receiveShadow = true; group.add(drum);
  const back = new THREE.Mesh(new THREE.CircleGeometry(R, 96), new THREE.MeshStandardMaterial({ color: "#121214", roughness: 0.8 }));
  back.position.set(0, CY, -D + 12); back.name = "vault back"; group.add(back);
  for (const y of [-160, 40, 220]) {
    const shelf = rbox(560, 12, 120, 4, steel()); shelf.position.set(0, CY + y, -D + 90); group.add(shelf);
    for (let i = -2; i <= 2; i++) { const bar = rbox(80, 34, 50, 6, MAT.gold()); bar.position.set(i * 96, CY + y + 23.5, -D + 90); group.add(bar); }
  }
  // the door: hinged on the left; a thick disc, its bolts, the wheel on a hub
  const hinge = new THREE.Group(); hinge.position.set(-R - 60, CY, 120); group.add(hinge);   // in front of the frame: the door never cuts it
  const door = new THREE.Group(); door.position.set(R + 60, 0, 0); hinge.add(door);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(R, R, 110, 96), steel());
  disc.rotation.x = Math.PI / 2; disc.position.z = 0; disc.name = "vault door"; disc.castShadow = true; disc.receiveShadow = true; door.add(disc);
  const face = new THREE.Mesh(new THREE.CylinderGeometry(R - 60, R - 40, 30, 96), steel()); face.name = "door face";
  face.rotation.x = Math.PI / 2; face.position.z = 68; door.add(face);
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(22, 22, 70, 24), MAT.satin());
    bolt.position.set(Math.cos(a) * (R - 22), Math.sin(a) * (R - 22), 30); bolt.rotation.x = Math.PI / 2; door.add(bolt);
  }
  const wheel = new THREE.Group(); wheel.position.z = 108; door.add(wheel);   // its hub against the door's face (★ P17: 2 units off it before)
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(60, 60, 50, 48), MAT.satin()); hub.rotation.x = Math.PI / 2; hub.name = "wheel hub"; wheel.add(hub);
  mounted(hub, face, "the wheel's hub turns on the door's face");
  const rim = new THREE.Mesh(new THREE.TorusGeometry(200, 16, 16, 64), MAT.satin()); wheel.add(rim);
  const knobs: THREE.Mesh[] = [];
  for (let i = 0; i < 4; i++) {
    const spoke = new THREE.Mesh(new THREE.CylinderGeometry(12, 12, 400, 16), MAT.satin()); spoke.rotation.z = (i * Math.PI) / 4 * 2; wheel.add(spoke);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(26, 24, 16), MAT.satin()); knob.name = "wheel knob"; knobs.push(knob);
    const a = (i / 4) * Math.PI * 2; knob.position.set(Math.cos(a) * 200, Math.sin(a) * 200, 0); wheel.add(knob);
  }
  // the hinge barrels and the arms that carry the door
  // ★ P17: the hinge barrels turn against two brackets fixed on the wall's face (they hung in the air 120 in front of it)
  for (const y of [-260, 260]) {
    const b = new THREE.Mesh(new THREE.CylinderGeometry(38, 38, 150, 32), steel()); b.position.set(0, y, 0); b.name = "hinge barrel"; hinge.add(b);
    const arm = rbox(175, 60, 50, 10, steel()); arm.position.set(97, y, 0); arm.name = "hinge arm"; hinge.add(arm);   // it reaches into the door's rim (it stopped short of it)
    const bracket = rbox(90, 150, 83, 8, steel()); bracket.position.set(-R - 60, CY + y, 41.5); bracket.name = "hinge bracket"; bracket.castShadow = true; group.add(bracket);
    mounted(b, bracket, "the hinge barrel turns against its bracket on the wall");
  }
  // the label plate over the door
  const plateG = new THREE.Group(); plateG.position.set(0, H - 120, 20); group.add(plateG);   // the plate's back on the wall (★ P17: 12 off it before)
  let plate = litPlate(["VAULT"], { size: 76, color: K.white });
  plateG.add(plate.group);
  return {
    group, size: { w: W, h: H, d: D },
    mouth: new THREE.Vector3(0, CY, 0), R, CY, D, drum, hub, knobs,
    label: (text: string) => { plateG.clear(); plate = litPlate(text.split(" | "), { size: 76, color: K.white }); plateG.add(plate.group); return plate; },
    get plate() { return plate; },
    update: (p: { door: number; wheel?: number }) => {
      wheel.rotation.z = -(p.wheel ?? 0) * Math.PI * 2;
      hinge.rotation.y = -Math.max(0, Math.min(1, p.door)) * (105 * Math.PI / 180);
    },
  };
};
