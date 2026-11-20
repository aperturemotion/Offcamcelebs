// GENERIC TROPHY CUPS (038 set F; the brief: "generic cups with labels, not the real Premier League or Champions League
// trophy designs"). Polished silver, turned on a lathe, each on a black plinth whose front carries an engraved, lit label.
// makeLeagueCup(key, label) → { group, size }   a classic two-handled cup with a lid and finial (about 230 wide, 380 tall)
// makeEuroCup(key, label)   → { group, size }   a tall big-eared cup: a deep bowl, two huge loop handles (about 520 wide, 640 tall)
// Origin: the floor centre of the plinth; the label faces +z.
import * as THREE from "three";
import { MAT, K, lit, block, wide, textOn } from "../kit";
import { text3d, textWidth } from "../text3d";

const silver = () => new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#d9dce2"), roughness: 0.16, metalness: 1, envMapIntensity: 1.35, clearcoat: 0.4, clearcoatRoughness: 0.12 });
const lathe = (pts: [number, number][], seg = 64) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(Math.max(0.01, r), y)), seg);
const mesh = (g: THREE.BufferGeometry, m: THREE.Material) => { const o = new THREE.Mesh(g, m); o.castShadow = o.receiveShadow = true; return o; };

/** a plinth carrying an engraved label sized from its text (P14: the text fits its face) */
const plinth = (label: string, size: number, minW: number) => {
  const g = new THREE.Group();
  const w = Math.max(minW, label ? textWidth(label, "800", size) * 1.12 + size * 1.6 : 0), h = size * 2.1, d = Math.max(150, w * 0.55);
  const body = block(w, h, d, 12, MAT.black()); g.add(body);
  if (!label) return { g, w, h, d };
  const face = lit(K.white, 0.95);
  const t = wide(text3d(label, { font: "800", size, depth: 2, bevel: 0, face }), 1.12);
  t.position.set(0, h / 2 - size * 0.345, d / 2 + 0.5);
  t.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
  textOn(t, body, { inset: 12 });
  g.add(t);
  return { g, w, h, d };
};

export const makeLeagueCup = (key: string, label: string) => {
  void key;
  const group = new THREE.Group();
  // ★ P17 (one figure a frame): the league cups' plinths are blank; the years were five figures in one frame
  void label;
  const p = plinth("", 46, 230); group.add(p.g);
  const m = silver();
  const cup = new THREE.Group(); cup.position.y = p.h; group.add(cup);
  // foot, stem, bowl, lid and finial (one profile)
  cup.add(mesh(lathe([[0, 0], [78, 0], [78, 10], [52, 20], [22, 46], [16, 90], [26, 110], [60, 128], [92, 170], [100, 230], [96, 262], [104, 270], [104, 278], [0, 278]]), m));
  cup.add(mesh(lathe([[0, 276], [96, 276], [86, 292], [52, 312], [20, 322], [14, 340], [22, 352], [0, 362]]), m));
  // two handles: arcs of torus on each side
  for (const s of [-1, 1]) {
    const h = mesh(new THREE.TorusGeometry(46, 9, 12, 32, Math.PI * 1.25), m);
    h.position.set(s * 100, 200, 0);
    h.rotation.z = s > 0 ? -Math.PI * 0.62 : Math.PI * 1.62;
    cup.add(h);
  }
  return { group, size: { w: Math.max(p.w, 300), h: p.h + 362, d: p.d } };
};

export const makeEuroCup = (key: string, label: string) => {
  void key;
  const group = new THREE.Group();
  const p = plinth(label, 44, 520); group.add(p.g);
  const m = silver();
  const cup = new THREE.Group(); cup.position.y = p.h; group.add(cup);
  cup.add(mesh(lathe([[0, 0], [118, 0], [118, 16], [90, 34], [40, 70], [30, 150], [40, 190], [96, 240], [140, 320], [156, 420], [150, 520], [160, 560], [160, 572], [0, 572]]), m));
  // the big ears: two tall loops from the bowl's lip down to its waist
  for (const s of [-1, 1]) {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(s * 150, 540, 0), new THREE.Vector3(s * 230, 560, 0), new THREE.Vector3(s * 300, 470, 0),
      new THREE.Vector3(s * 290, 330, 0), new THREE.Vector3(s * 210, 250, 0), new THREE.Vector3(s * 120, 250, 0),
    ]);
    cup.add(mesh(new THREE.TubeGeometry(curve, 48, 15, 14, false), m));
  }
  return { group, size: { w: Math.max(p.w, 620), h: p.h + 572, d: p.d } };
};
