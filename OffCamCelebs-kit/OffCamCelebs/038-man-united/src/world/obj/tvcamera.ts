// A BROADCAST TV CAMERA ON A TRIPOD (038, set D: "TV money"; P16: the real thing). A long boxy camera body with a big lens
// barrel and its hood, a viewfinder on top, a red tally lamp, pan bars, on a fluid head and a three-legged tripod with a
// spreader; the money it earns pops out of its top.
// makeTvCamera(key) → { group, update({ pan, tally }), spout }   `pan` turns the head (radians), `tally` 0…1 lights the red
//   lamp (on air). `spout`: where its coin drops out (group space). Origin: the floor centre under the tripod; it points +z.
import * as THREE from "three";
import { MAT, lit, setLit, rbox, cyl, wide, textOn, mounted } from "../kit";
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
    const top = new THREE.Vector3(Math.cos(a) * 40, crownY - 10, Math.sin(a) * 40);   // (its end inside the crown)
    const len = foot.distanceTo(top);
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(16, 13, len, 16), MAT.black());
    leg.position.copy(foot).add(top).multiplyScalar(0.5);
    leg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), top.clone().sub(foot).normalize());
    leg.castShadow = true;
    group.add(leg);
    const shoe = cyl(24, 14, MAT.rubber(), 20); shoe.position.copy(foot); group.add(shoe);
  }
  const crown = cyl(70, 50, MAT.graphite(), 40); crown.position.y = crownY - 25; crown.name = "tripod crown"; group.add(crown);
  // the fluid head and everything that pans
  // ★ P17: everything sits on what is under it (the head floated 25 over the crown, the body 5 over the bowl, the
  //   viewfinder 10 over the body; the lens rings, the glass, the lamp and the pan bars touched nothing)
  const head = new THREE.Group(); head.position.y = crownY + 0.2; group.add(head);
  const bowl = cyl(80, 60, satin, 40); bowl.name = "fluid head"; head.add(bowl);
  mounted(bowl, crown, "the fluid head pans on the tripod's crown");
  const body = rbox(220, 230, 420, 26, MAT.black()); body.position.set(0, 60 + 115 - 0.3, -20); body.name = "camera body"; head.add(body);
  // the lens: a long barrel with focus rings and a wide hood
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(78, 70, 320, 48), MAT.graphite()); barrel.rotation.x = Math.PI / 2; barrel.position.set(0, 170, 340); barrel.castShadow = true; head.add(barrel);
  // the barrel tapers from 70 (its back, z 180) to 78 (its front, z 500): each ring sits ON it
  for (const z of [260, 330, 400]) { const br = 70 + (8 * (z - 180)) / 320; const r = new THREE.Mesh(new THREE.TorusGeometry(br + 6 - 0.3, 6, 10, 48), satin); r.position.set(0, 170, z); head.add(r); }
  const hood = rbox(240, 190, 90, 14, MAT.black()); hood.position.set(0, 170, 540); head.add(hood);
  const glass = new THREE.Mesh(new THREE.CircleGeometry(62, 48), new THREE.MeshPhysicalMaterial({ color: "#10131a", roughness: 0.05, metalness: 0.2, clearcoat: 1, envMapIntensity: 1.6 }));
  glass.position.set(0, 170, 500.4); head.add(glass);
  // the viewfinder on top and its hood
  const vf = rbox(160, 110, 150, 14, MAT.black()); vf.position.set(0, body.position.y + 115 + 55 - 0.3, -90); head.add(vf);
  // the tally lamp
  const tally = lit("#ff2a2a", 1.1);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(16, 20, 14), tally); lamp.position.set(0, body.position.y + 115 + 14, 120); head.add(lamp);
  // pan bars
  // the pan bars: from the fluid head's sides back and down, as a camera operator's handles
  for (const sx of [-1, 1]) {
    const a = new THREE.Vector3(sx * 70, 32, -30), b = new THREE.Vector3(sx * 210, -50, -330), d = b.clone().sub(a);
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(9, 9, d.length(), 12), satin);
    bar.position.copy(a).addScaledVector(d, 0.5); bar.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); bar.castShadow = true; head.add(bar);
  }
  // (★ P17, one label a frame: no TV label on its side; a broadcast camera on a tripod says it)
  return {
    group, spout: new THREE.Vector3(0, crownY + 25 + 470, -90),
    update: (p: { pan: number; tally: number }) => { head.rotation.y = p.pan; setLit(tally, p.tally, 0.15); },
  };
};
