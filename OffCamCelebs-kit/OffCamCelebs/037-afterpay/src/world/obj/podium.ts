// THE SPEAKER, the references' way (R9): a podium with a microphone whose ring lights, a nameplate, a glossy pawn behind
// it, and a gavel on its top. Origin: the podium's floor centre; its front faces +z.
import * as THREE from "three";
import { K, MAT, block, rbox, cyl, litPlate, lit, setLit, plateOn } from "../kit";
import { makePawn } from "./pawn";

// ★ P14: 720 wide (it was 520): the JACK DORSEY plate lies inside its front face
export const PODIUM = { w: 720, h: 700, d: 400, top: 750 } as const;
export const makePodium = (name: string) => {
  const group = new THREE.Group();
  group.name = "podium";
  const bodyP = block(PODIUM.w, PODIUM.h, PODIUM.d, 30, MAT.black());
  group.add(bodyP);
  const top = rbox(800, 50, 470, 16, MAT.graphite());
  top.position.y = PODIUM.h + 25;
  group.add(top);
  const foot = block(780, 36, 450, 14, MAT.graphite());
  group.add(foot);
  // the nameplate on the front
  const plate = litPlate([name], { size: 46, color: K.white, depth: 26 });
  plate.group.position.set(0, 440, PODIUM.d / 2 + 13);
  plateOn(plate.group, bodyP, { inset: 30 });
  group.add(plate.group);
  // the pawn behind it, on a riser so its head stands over the top
  const pawn = makePawn(2.5);
  // ★ P14: it stands CLEAR behind the podium (its body is 262 in radius at this scale; at z −360 it cut into the podium)
  const pawnHome: [number, number, number] = [-20, 330, -530];
  pawn.name = "pawn";
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
  gavel.position.set(318, PODIUM.top + 22 + 39, 70);   // down, the head rests on the sound block
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(9, 11, 250, 20), MAT.satin());
  handle.rotation.z = Math.PI / 2; handle.position.x = -70;
  // ★ P14: the head lies ACROSS the handle (its axis along z), as a gavel's does: standing upright it sank into the
  //   sound block and the podium's top
  const gh = new THREE.Mesh(new THREE.CylinderGeometry(36, 36, 124, 32), MAT.black());
  gh.position.x = -168; gh.rotation.x = Math.PI / 2;
  for (const sy of [-1, 1]) { const band = new THREE.Mesh(new THREE.CylinderGeometry(37.5, 37.5, 12, 32), MAT.satin()); band.position.set(-168, 0, sy * 44); band.rotation.x = Math.PI / 2; gavel.add(band); }
  gavel.name = "gavel";
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
