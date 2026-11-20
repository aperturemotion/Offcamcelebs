// A STADIUM TURNSTILE (038, set D: "ticket money"; P16: the real thing). A waist-high steel cabinet with a ticket reader
// lit green on its top, a three-armed rotor that turns a third of a turn per fan, and a funnel spout on its far side where
// the coin it earns drops out into the money pipe.
// makeTurnstile(key) → { group, update({ turn, read }), spout }   `turn` counts thirds of a turn (fractional; the arms
//   rotate), `read` 0…1 lights the reader. `spout`: where its coin drops out (group space). Origin: the floor centre of the
//   cabinet; the arms point toward +x (the way in is from −x).
import * as THREE from "three";
import { MAT, K, lit, setLit, rbox, block, cyl, wide, textOn, joined, mounted } from "../kit";
import { text3d } from "../text3d";

export const makeTurnstile = (key: string) => {
  void key;
  const group = new THREE.Group();
  const steel = new THREE.MeshPhysicalMaterial({ color: "#8d9096", roughness: 0.28, metalness: 1, envMapIntensity: 1.1 });
  // the cabinet and its sloped top
  const cab = block(250, 560, 300, 24, MAT.black()); cab.name = "turnstile cabinet"; group.add(cab);
  const top = rbox(250, 30, 310, 10, steel); top.position.y = 575; group.add(top);
  // the ticket reader: a lit green glass on top, and a TICKETS label on the cabinet's front
  const glow = lit("#5cff8a", 0.9);
  const reader = rbox(120, 12, 90, 4, glow); reader.position.set(0, 596, 40); group.add(reader);
  const labelBody = rbox(232, 64, 10, 4, MAT.graphite()); labelBody.position.set(0, 470, 155); labelBody.name = "turnstile label"; group.add(labelBody);
  const tFace = lit(K.white, 0.85);
  const t = wide(text3d("TICKETS", { font: "800", size: 30, depth: 2, bevel: 0, face: tFace }), 1.06);
  t.position.set(0, 470 - 30 * 0.345, 160.5); textOn(t, labelBody, { inset: 4 }); group.add(t);
  // the rotor: a hub on the cabinet's +x side, three arms at 120°
  const rotor = new THREE.Group(); rotor.position.set(150, 470, 0); rotor.rotation.z = -0.62; group.add(rotor);
  // ★ P17: the hub turns WITH the arms (their roots are set in its end: they stopped 6 short of it), in a bearing in the cabinet
  const arms = new THREE.Group(); arms.position.x = 250; rotor.add(arms);   // (★ P17: further out: the lowest arm swept through the cabinet)
  const hub = cyl(46, 300, steel, 32); hub.rotation.z = Math.PI / 2; hub.position.set(-140, 0, 0); hub.name = "turnstile hub"; arms.add(hub);
  joined(hub, cab, "the rotor's hub turns in its bearing inside the cabinet");
  mounted(hub, cab, "the rotor's hub is carried by its bearing in the cabinet");
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(14, 14, 300, 20), steel);
    arm.position.set(0, Math.cos(a) * 150, Math.sin(a) * 150);
    arm.rotation.x = a;
    arm.castShadow = true;
    arms.add(arm);
  }
  // the coin spout at the back: a short satin chute
  const spoutBody = rbox(90, 70, 90, 12, steel); spoutBody.position.set(-40, 300, -170); group.add(spoutBody);
  return {
    group, spout: new THREE.Vector3(-40, 260, -170),
    update: (p: { turn: number; read: number }) => {
      arms.rotation.x = (p.turn * Math.PI * 2) / 3;
      setLit(glow, 0.2 + 0.8 * p.read, 0.1);
    },
  };
};
