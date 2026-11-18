// THE SPEAKER, the references' way (R9): a podium with a microphone whose ring lights, a nameplate, a glossy pawn behind
// it, and a gavel on its top. Origin: the podium's floor centre; its front faces +z.
import * as THREE from "three";
import { K, MAT, block, rbox, cyl, litPlate, lit, setLit } from "../kit";
import { makePawn } from "./pawn";

export const PODIUM = { w: 520, h: 700, d: 400, top: 750 } as const;
export const makePodium = (name: string) => {
  const group = new THREE.Group();
  group.add(block(PODIUM.w, PODIUM.h, PODIUM.d, 30, MAT.black()));
  const top = rbox(600, 50, 470, 16, MAT.graphite());
  top.position.y = PODIUM.h + 25;
  group.add(top);
  const foot = block(580, 36, 450, 14, MAT.graphite());
  group.add(foot);
  // the nameplate on the front
  const plate = litPlate([name], { size: 46, color: K.white, depth: 26 });
  plate.group.position.set(0, 440, PODIUM.d / 2 + 13);
  group.add(plate.group);
  // the pawn behind it, on a riser so its head stands over the top
  const pawn = makePawn(2.5);
  const pawnHome: [number, number, number] = [-20, 330, -360];
  group.add(pawn);
  // the microphone: a base, a gooseneck leaning back to the speaker, a head with a ring that lights
  const mic = new THREE.Group();
  mic.position.set(-170, PODIUM.top, 40);
  mic.add(cyl(36, 12, MAT.graphite()));
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(6, 6, 250, 16), MAT.satin());
  neck.position.set(34, 118, -56); neck.rotation.set(-0.45, 0, -0.28);
  neck.castShadow = true;
  const head = new THREE.Mesh(new THREE.CapsuleGeometry(27, 44, 8, 24), MAT.graphite());
  head.position.set(70, 248, -116); head.rotation.set(-0.45, 0, -0.28);
  head.castShadow = true;
  const ringMat = lit(K.amber, 1.15);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(31, 5.5, 12, 40), ringMat);
  ring.position.copy(head.position); ring.rotation.set(Math.PI / 2 - 0.45, 0, -0.28);
  mic.add(neck, head, ring);
  group.add(mic);
  // the gavel and its sound block
  const sound = cyl(64, 22, MAT.graphite());
  sound.position.set(150, PODIUM.top + 11, 70);
  group.add(sound);
  const gavel = new THREE.Group();
  gavel.position.set(318, PODIUM.top + 62, 70);
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(9, 11, 250, 20), MAT.satin());
  handle.rotation.z = Math.PI / 2; handle.position.x = -70;
  const gh = new THREE.Mesh(new THREE.CylinderGeometry(36, 36, 124, 32), MAT.black());
  gh.position.x = -168;
  for (const sy of [-1, 1]) { const band = new THREE.Mesh(new THREE.CylinderGeometry(37.5, 37.5, 12, 32), MAT.satin()); band.position.set(-168, sy * 44, 0); gavel.add(band); }
  for (const o of [handle, gh]) { o.castShadow = true; gavel.add(o); }
  group.add(gavel);
  return {
    group, plate,
    /** `pawn` 0…1 (it rises from behind), `mic` 0…1 the ring's light, `name` 0…1 the nameplate's light, `gavel` 0 (raised)
     *  …1 (down on its block) */
    update: (p: { pawn: number; mic: number; name: number; gavel: number }) => {
      pawn.visible = p.pawn > 0.001;
      pawn.position.set(pawnHome[0], pawnHome[1] - (1 - p.pawn) * 620, pawnHome[2]);
      setLit(ringMat, p.mic, 0.05);
      plate.setLit(p.name);
      gavel.rotation.z = -(1 - p.gavel) * 1.0 + 0.02;
    },
  };
};
