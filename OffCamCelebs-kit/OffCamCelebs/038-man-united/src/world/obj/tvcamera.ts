// A BROADCAST TV CAMERA ON A TRIPOD (038, set D: "TV money"; P16: the real thing). A long boxy camera body with a big lens
// barrel and its hood, a viewfinder on top, a red tally lamp, pan bars, on a fluid head and a three-legged tripod with a
// spreader; the money it earns pops out of its top.
// makeTvCamera(key) → { group, update({ pan, tally }), spout }   `pan` turns the head (radians), `tally` 0…1 lights the red
//   lamp (on air). `spout`: where its coin drops out (group space). Origin: the floor centre under the tripod; it points +z.
import * as THREE from "three";
import { MAT, lit, setLit, rbox, cyl, wide, textOn } from "../kit";
import { text3d } from "../text3d";

export const makeTvCamera = (key: string) => {
  void key;
  const group = new THREE.Group();
  const satin = MAT.satin();
  // the tripod: three legs from a crown at 620, a ground spreader
  const crownY = 620;
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + Math.PI / 6;
    const foot = new THREE.Vector3(Math.cos(a) * 300, 0, Math.sin(a) * 300);
    const top = new THREE.Vector3(Math.cos(a) * 40, crownY, Math.sin(a) * 40);
    const len = foot.distanceTo(top);
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(16, 13, len, 16), MAT.black());
    leg.position.copy(foot).add(top).multiplyScalar(0.5);
    leg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), top.clone().sub(foot).normalize());
    leg.castShadow = true;
    group.add(leg);
    const shoe = cyl(24, 14, MAT.rubber(), 20); shoe.position.copy(foot); group.add(shoe);
  }
  const crown = cyl(70, 50, MAT.graphite(), 40); crown.position.y = crownY - 25; group.add(crown);
  // the fluid head and everything that pans
  const head = new THREE.Group(); head.position.y = crownY + 25; group.add(head);
  const bowl = cyl(80, 60, satin, 40); head.add(bowl);
  const body = rbox(220, 230, 420, 26, MAT.black()); body.position.set(0, 180, -20); body.name = "camera body"; head.add(body);
  // the lens: a long barrel with focus rings and a wide hood
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(78, 70, 320, 48), MAT.graphite()); barrel.rotation.x = Math.PI / 2; barrel.position.set(0, 170, 340); barrel.castShadow = true; head.add(barrel);
  for (const z of [260, 330, 400]) { const r = new THREE.Mesh(new THREE.TorusGeometry(80, 6, 10, 48), satin); r.position.set(0, 170, z); head.add(r); }
  const hood = rbox(240, 190, 90, 14, MAT.black()); hood.position.set(0, 170, 540); head.add(hood);
  const glass = new THREE.Mesh(new THREE.CircleGeometry(62, 48), new THREE.MeshPhysicalMaterial({ color: "#10131a", roughness: 0.05, metalness: 0.2, clearcoat: 1, envMapIntensity: 1.6 }));
  glass.position.set(0, 170, 500.6); head.add(glass);
  // the viewfinder on top and its hood
  const vf = rbox(160, 110, 150, 14, MAT.black()); vf.position.set(0, 360, -90); head.add(vf);
  // the tally lamp
  const tally = lit("#ff2a2a", 1.1);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(16, 20, 14), tally); lamp.position.set(0, 300, 200); head.add(lamp);
  // pan bars
  for (const sx of [-1, 1]) {
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(9, 9, 420, 12), satin);
    bar.rotation.z = Math.PI / 2 - sx * 0.35; bar.rotation.y = 0.5; bar.position.set(sx * 160, 70, -260); head.add(bar);
  }
  // a TV label on the body's side
  const labelBody = rbox(10, 112, 220, 4, MAT.graphite()); labelBody.position.set(115, 190, -20); labelBody.name = "camera label"; head.add(labelBody);
  const face = lit("#f8f2f2", 0.9);
  const t = wide(text3d("TV", { font: "800", size: 64, depth: 2, bevel: 0, face }), 1.1);
  t.rotation.y = Math.PI / 2; t.position.set(120.5, 190 - 64 * 0.345, -20); textOn(t, labelBody, { inset: 4 }); head.add(t);
  return {
    group, spout: new THREE.Vector3(0, crownY + 25 + 470, -90),
    update: (p: { pan: number; tally: number }) => { head.rotation.y = p.pan; setLit(tally, p.tally, 0.15); },
  };
};
