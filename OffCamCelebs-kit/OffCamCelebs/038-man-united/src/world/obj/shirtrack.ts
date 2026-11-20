// A RACK OF RED HOME SHIRTS (038, set D: "shirt money"; P16: the real thing, with the real crest on each chest). A satin
// rail on two posts and a weighted base; four red football shirts on hangers, each with short sleeves, a white collar
// trim and the Manchester United crest printed on the left chest; a price-tag cash slot on the base where a coin drops.
// makeShirtRack(key) → { group, update({ sway }), spout }   `sway` swings the shirts on their hangers (radians, damped by
//   the place). `spout`: where its coin drops out (group space). Origin: the floor centre of the base; the shirts face +z.
import * as THREE from "three";
import { MAT, rbox, block, cyl, joined } from "../kit";
import { printMat } from "./brand";

const red = () => new THREE.MeshStandardMaterial({ color: new THREE.Color("#c3121d"), roughness: 0.62, metalness: 0 });
const white = () => new THREE.MeshStandardMaterial({ color: new THREE.Color("#f1eee8"), roughness: 0.7 });

/** a football shirt's outline (a T with short sleeves and a V neck), 1 unit = 1 px, its collar at the origin */
const shirtShape = () => {
  const s = new THREE.Shape();
  s.moveTo(-34, 0); s.lineTo(-96, -16); s.lineTo(-136, -78); s.lineTo(-104, -110); s.lineTo(-78, -86);
  s.lineTo(-80, -330); s.lineTo(80, -330); s.lineTo(78, -86); s.lineTo(104, -110); s.lineTo(136, -78); s.lineTo(96, -16);
  s.lineTo(34, 0); s.lineTo(0, -42); s.lineTo(-34, 0);
  return s;
};

export const makeShirtRack = (key: string) => {
  void key;
  const group = new THREE.Group();
  const satin = MAT.satin();
  const base = block(880, 50, 300, 14, MAT.black()); base.name = "rack base"; group.add(base);
  for (const sx of [-1, 1]) { const post = cyl(16, 820, satin, 24); post.position.set(sx * 340, 50, 0); group.add(post); }
  const rail = new THREE.Mesh(new THREE.CylinderGeometry(12, 12, 720, 24), satin); rail.rotation.z = Math.PI / 2; rail.position.y = 860; group.add(rail);
  const geo = new THREE.ExtrudeGeometry(shirtShape(), { depth: 26, bevelEnabled: true, bevelThickness: 6, bevelSize: 5, bevelSegments: 3, curveSegments: 4 });
  geo.translate(0, 0, -13);
  const shirts: THREE.Group[] = [];
  for (let i = 0; i < 4; i++) {
    const hang = new THREE.Group(); hang.position.set(-240 + i * 160, 860, 75 - i * 50); group.add(hang);
    // the hanger: a hook over the rail and a bar across the shoulders
    const hook = new THREE.Mesh(new THREE.TorusGeometry(16, 3, 8, 24, Math.PI * 1.3), satin); hook.position.set(0, 4, 0); hook.rotation.z = -0.3; hang.add(hook);
    joined(hook, rail, "the hanger's hook sits over the rail");
    const bar = rbox(220, 8, 10, 3, satin); bar.position.y = -34; bar.rotation.z = 0; hang.add(bar);
    const shirt = new THREE.Group(); shirt.position.y = -36; hang.add(shirt);
    const body = new THREE.Mesh(geo, red()); body.castShadow = true; body.receiveShadow = true; body.name = "shirt"; shirt.add(body);
    const collar = new THREE.Mesh(new THREE.TorusGeometry(36, 5, 8, 24, Math.PI), white()); collar.rotation.z = Math.PI; collar.position.set(0, -6, 20); shirt.add(collar);
    for (const sx of [-1, 1]) { const cuff = rbox(46, 9, 8, 2, white()); cuff.position.set(sx * 118, -96, 20); cuff.rotation.z = sx * 0.85; shirt.add(cuff); }
    const crest = new THREE.Mesh(new THREE.PlaneGeometry(52, 53), printMat("crest", { alphaTest: 0.5, emissive: 0.08, rough: 0.6 }));
    crest.position.set(36, -96, 19.6);
    crest.userData.print = "the Manchester United crest (assets/brand/crest.png) on the shirt's chest";
    shirt.add(crest);
    shirts.push(hang);
  }
  // the coin slot in the base's front right: a short satin spout
  const spoutBody = rbox(90, 40, 70, 10, satin); spoutBody.position.set(395, 70, 150); group.add(spoutBody);
  return {
    group, spout: new THREE.Vector3(410, 170, 150),
    update: (p: { sway: number }) => { shirts.forEach((h, i) => { h.rotation.z = p.sway * (i % 2 ? -0.8 : 1) * (1 - i * 0.12); }); },
  };
};
