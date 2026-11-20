// A RACK OF RED HOME SHIRTS (038, set D: "shirt money"; P16: the real thing, with the real crest on each chest). A satin
// rail on two posts and a weighted base; four red football shirts on hangers, each with short sleeves, a white collar
// trim and the Manchester United crest printed on the left chest; a price-tag cash slot on the base where a coin drops.
// makeShirtRack(key) → { group, update({ sway }), spout }   `sway` swings the shirts on their hangers (radians, damped by
//   the place). `spout`: where its coin drops out (group space). Origin: the floor centre of the base; the shirts face +z.
import * as THREE from "three";
import { MAT, rbox, block, cyl, hangs, mounted } from "../kit";
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

// ★ P17 (Timur, 2026-11-20: "the t-shirts are literally floating. The poles aren't holding up the metal bar… the hangers are
//   sort of glitching through the metal bar"). A REAL clothes rail: a weighted base ON the floor, two satin uprights standing
//   on it, a T-sleeve on each upright's top, and the rail running INTO both sleeves. Three shirts hang on wire hangers whose
//   hooks turn over the rail and WRAP it (the hook's inside radius is the rail's, plus a hair: it rests on the rail's top,
//   never through it). The shirts swing on the rail, about its axis (forward and back), as hangers do.
export const RACK = { postX: 380, railY: 880, railR: 12, step: 250, shirtK: 0.8 } as const;
export const makeShirtRack = (key: string) => {
  void key;
  const group = new THREE.Group();
  const satin = MAT.satin();
  const base = block(840, 50, 300, 14, MAT.black()); base.name = "rack base"; group.add(base);
  const H = RACK.railY, R = RACK.railR;
  const sleeves: THREE.Mesh[] = [];
  const posts = [-1, 1].map((sx) => {
    // the upright: from the base's top up into its T-sleeve
    const post = new THREE.Mesh(new THREE.CylinderGeometry(16, 16, H - 50 + 4, 24), satin); post.position.set(sx * RACK.postX, 50 - 2 + (H - 50 + 4) / 2, 0); post.name = "rack upright"; post.castShadow = true; group.add(post);
    const foot = cyl(30, 10, satin, 24); foot.position.set(sx * RACK.postX, 50 - 0.3 + 5, 0); foot.name = "upright foot"; group.add(foot);
    const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(R + 9, R + 9, 70, 24), satin); sleeve.rotation.z = Math.PI / 2; sleeve.position.set(sx * RACK.postX, H, 0); sleeve.name = "rail sleeve"; sleeve.castShadow = true; group.add(sleeve);
    sleeves.push(sleeve);
    mounted(post, base, "the upright stands on the rack's base");
    mounted(sleeve, post, "the T-sleeve is fixed on the upright's top");
    return post;
  });
  // the rail: its ends run into the sleeves (they hide its ends)
  const rail = new THREE.Mesh(new THREE.CylinderGeometry(R, R, 2 * RACK.postX + 40, 24), satin); rail.rotation.z = Math.PI / 2; rail.position.y = H; rail.name = "rack rail"; rail.castShadow = true; group.add(rail);
  mounted(rail, sleeves[0], "the rail's ends sit in the T-sleeves");
  void posts;
  const geo = new THREE.ExtrudeGeometry(shirtShape(), { depth: 26, bevelEnabled: true, bevelThickness: 6, bevelSize: 5, bevelSegments: 3, curveSegments: 4 });
  geo.translate(0, 0, -13);
  const shirts: THREE.Group[] = [];
  const WIRE = 2.6, HOOK = R + WIRE + 0.25;   // the hook's centre-line radius: its inside clears the rail by a hair
  for (let i = 0; i < 3; i++) {
    // the hanger's pivot is the rail's axis; everything below swings about it
    const hang = new THREE.Group(); hang.position.set((i - 1) * RACK.step, H, 0); group.add(hang);
    // the hook: a wire arc in the y–z plane over the rail, from the front (where the neck comes up) over the top and down the
    //   back; its centre a hair under the rail's, so its inside top rests on the rail's top
    const hook = new THREE.Mesh(new THREE.TorusGeometry(HOOK, WIRE, 8, 32, Math.PI * 1.25), satin);
    hook.rotation.y = -Math.PI / 2; hook.position.set(0, -0.25, 0); hook.rotation.order = "YXZ"; hook.name = "hanger hook"; hang.add(hook);
    // the neck: from the hook's front end down to the middle of the shoulder bar
    const nTop = new THREE.Vector3(0, -0.25, HOOK), nBot = new THREE.Vector3(0, -50, 0), nd = nBot.clone().sub(nTop);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(WIRE, WIRE, nd.length() + 2, 8), satin); neck.position.copy(nTop).addScaledVector(nd, 0.5); neck.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), nd.clone().normalize()); neck.name = "hanger neck"; hang.add(neck);
    const bar = rbox(220 * RACK.shirtK, 8, 10, 3, satin); bar.position.y = -52; hang.add(bar);
    hangs(hook, rail, "the hanger's hook wraps the rail, its inside resting on the rail's top");
    const shirt = new THREE.Group(); shirt.position.y = -52 - 2; shirt.scale.setScalar(RACK.shirtK); hang.add(shirt);
    const body = new THREE.Mesh(geo, red()); body.castShadow = true; body.receiveShadow = true; body.name = "shirt"; shirt.add(body);
    const collar = new THREE.Mesh(new THREE.TorusGeometry(36, 5, 8, 24, Math.PI), white()); collar.rotation.z = Math.PI; collar.position.set(0, -6, 19); shirt.add(collar);
    for (const sx of [-1, 1]) { const cuff = rbox(46, 9, 8, 2, white()); cuff.position.set(sx * 118, -96, 19); cuff.rotation.z = sx * 0.85; shirt.add(cuff); }
    const crest = new THREE.Mesh(new THREE.PlaneGeometry(52, 53), printMat("crest", { alphaTest: 0.5, emissive: 0.08, rough: 0.6 }));
    crest.position.set(36, -96, 19.4);
    crest.userData.print = "the Manchester United crest (assets/brand/crest.png) on the shirt's chest";
    shirt.add(crest);
    shirts.push(hang);
  }
  // the coin spout on the base's right end (its coin flips out clear of the upright and goes straight back to its funnel)
  const spoutBody = rbox(90, 40, 70, 10, satin); spoutBody.position.set(445, 50 + 20 - 0.3, 0); spoutBody.name = "rack spout"; group.add(spoutBody);
  mounted(spoutBody, base, "the spout is fixed on the base's end");
  return {
    group, spout: new THREE.Vector3(470, 100, 0),
    /** `sway`: the shirts swing on the rail (radians about its axis), alternate ones the other way */
    update: (p: { sway: number }) => { shirts.forEach((h, i) => { h.rotation.x = p.sway * (i % 2 ? -0.8 : 1) * (1 - i * 0.12); }); },
  };
};
