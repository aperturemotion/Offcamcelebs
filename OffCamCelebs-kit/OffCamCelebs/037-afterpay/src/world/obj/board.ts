// THE PRICE BOARD (R7, R15): a big chunky display on a pedestal; its figure is solid, self-lit numerals that count.
import * as THREE from "three";
import { K, MAT, block, rbox, counter, setLit, wide, lit } from "../kit";
import { text3d } from "../text3d";

/** about 760 w × 1000 h overall; origin at floor centre. `value` is the figure shown, `on` lights it (0…1), `red` turns it
 *  red (0…1: the bad number, R18) */
export const makeBoard = (key: string) => {
  const group = new THREE.Group();
  group.name = `board:${key}`;
  group.add(block(330, 56, 300, 18, MAT.black()));
  const post = block(120, 330, 120, 16, MAT.graphite());
  post.position.y = 56 + 165;
  group.add(post);
  const panel = rbox(760, 500, 130, 30, MAT.black());
  panel.position.y = 386 + 250;
  group.add(panel);
  const screen = rbox(676, 300, 16, 8, new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#050506"), roughness: 0.22, metalness: 0.3, envMapIntensity: 0.7, clearcoat: 0.6, clearcoatRoughness: 0.2 }));
  screen.position.set(0, 386 + 220, 65 + 3);
  group.add(screen);
  const hood = rbox(800, 44, 190, 16, MAT.graphite());
  hood.position.set(0, 386 + 500 + 22, 12);
  group.add(hood);
  for (const sx of [-1, 1]) {   // two bolts: a small bright detail on the black body (R10)
    const b = new THREE.Mesh(new THREE.CylinderGeometry(11, 11, 8, 24), MAT.satin());
    b.rotation.x = Math.PI / 2;
    b.position.set(sx * 340, 386 + 446, 66);
    group.add(b);
  }
  const capFace = lit(K.white, 0.8);
  const cap = wide(text3d("SHARE PRICE", { font: "800", size: 34, depth: 3, bevel: 0, face: capFace }));
  cap.position.set(0, 386 + 414, 66);
  cap.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
  group.add(cap);
  const fig = counter({ size: 190, color: K.money, depth: 20 });
  fig.group.position.set(0, 386 + 220 - 66, 65 + 12);
  fig.group.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
  group.add(fig.group);
  const money = new THREE.Color(K.money), red = new THREE.Color(K.red), full = fig.face.userData.full as THREE.Color;
  const k = full.r / Math.max(1e-6, money.r);
  return {
    group,
    update: (p: { value: string; red: number; on: number }) => {
      fig.set(p.value);
      fig.group.visible = p.on > 0.02;
      full.copy(money).lerp(red, Math.max(0, Math.min(1, p.red))).multiplyScalar(k * (1 + 0.1 * p.red));
      setLit(fig.face, p.on, 0.05);
      fig.side.color.copy(full).multiplyScalar(0.2);
      setLit(capFace, 0.25 + 0.75 * p.on, 0.05);
    },
  };
};
