// A SHARE, as a thing (R7): a thick matte-black token with a pale-yellow rim and its name on its face.
import * as THREE from "three";
import { K, MAT, lit, wide } from "../kit";
import { text3d, textWidth } from "../text3d";

export const TOKEN_R = 90, TOKEN_T = 34;
const hash = (a: number, b: number) => { const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return s - Math.floor(s); };
let bodyGeo: THREE.BufferGeometry | null = null, rimGeo: THREE.BufferGeometry | null = null;
let bodyMat: THREE.Material | null = null, rimMat: THREE.Material | null = null, faceMat: THREE.MeshBasicMaterial | null = null;
const parts = () => {
  if (!bodyGeo) {
    const c = 7;
    bodyGeo = new THREE.LatheGeometry([[0, 0], [TOKEN_R - c, 0], [TOKEN_R, c], [TOKEN_R, TOKEN_T - c], [TOKEN_R - c, TOKEN_T], [TOKEN_R - 16, TOKEN_T], [TOKEN_R - 20, TOKEN_T - 3], [0, TOKEN_T - 3]].map(([r, y]) => new THREE.Vector2(r, y)), 72);
    rimGeo = new THREE.LatheGeometry([[TOKEN_R + 0.6, 10], [TOKEN_R + 0.6, TOKEN_T - 10]].map(([r, y]) => new THREE.Vector2(r, y)), 72);
    bodyMat = MAT.black();
    // a pale gold band (their money is gold with cream highlights: R14); a little self-light so it reads on the dark stage
    rimMat = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#b89a5e"), roughness: 0.3, metalness: 1, envMapIntensity: 1.3, emissive: new THREE.Color(K.money), emissiveIntensity: 0.07 });
    faceMat = lit(K.money, 0.86);
  }
  return { bodyGeo: bodyGeo!, rimGeo: rimGeo!, bodyMat: bodyMat!, rimMat: rimMat!, faceMat: faceMat! };
};
/** the label lying on a token's (or a wedge's) top face, readable from +z */
export const tokenLabel = (label: string, maxW = 2 * TOKEN_R - 44, y = TOKEN_T - 2.5) => {
  const p = parts();
  const size = Math.min(44, maxW / (textWidth(label, "800", 1) * 1.14));
  const t = wide(text3d(label, { font: "800", size, depth: 2.5, bevel: 0, face: p.faceMat }));
  t.rotation.x = -Math.PI / 2;
  t.position.set(0, y, size * 0.345);
  t.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
  return t;
};
/** a thick share token: a disc of radius 90 and thickness 34 lying flat; origin at its bottom centre */
export const makeToken = (label: string): THREE.Group => {
  const p = parts(), g = new THREE.Group();
  const body = new THREE.Mesh(p.bodyGeo, p.bodyMat);
  body.castShadow = true; body.receiveShadow = true;
  const rim = new THREE.Mesh(p.rimGeo, p.rimMat);
  g.add(body, rim, tokenLabel(label));
  return g;
};
/** a wedge of a token: `frac` of the disc (0.375 = three-eighths), its point at the origin, opening toward +z */
export const makeWedge = (frac: number, label?: string): THREE.Group => {
  const p = parts(), g = new THREE.Group();
  const th = frac * Math.PI * 2, a0 = -th / 2;
  // CylinderGeometry's theta 0 is +z; the sector is centred on +z
  const body = new THREE.Mesh(new THREE.CylinderGeometry(TOKEN_R, TOKEN_R, TOKEN_T, 48, 1, false, a0, th), p.bodyMat);
  body.position.y = TOKEN_T / 2;
  body.castShadow = true; body.receiveShadow = true;
  g.add(body);
  for (const s of [-1, 1]) {   // the two cut faces
    const f = new THREE.Mesh(new THREE.PlaneGeometry(TOKEN_R, TOKEN_T), p.bodyMat);
    const a = (s * th) / 2;
    f.position.set((Math.sin(a) * TOKEN_R) / 2, TOKEN_T / 2, (Math.cos(a) * TOKEN_R) / 2);
    f.rotation.y = a + (s * Math.PI) / 2;
    f.castShadow = true;
    g.add(f);
  }
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(TOKEN_R + 0.6, TOKEN_R + 0.6, TOKEN_T - 20, 48, 1, true, a0, th), p.rimMat);
  rim.position.y = TOKEN_T / 2;
  g.add(rim);
  if (label) { const t = tokenLabel(label, 70, TOKEN_T + 0.6); t.position.z += TOKEN_R * 0.56; g.add(t); }
  return g;
};
/** a hand-squared stack of up to n tokens; origin at floor centre. `count` (fractional) is how many are present: the
 *  token arriving drops onto the stack from above */
export const makeTokenStack = (key: string, n: number, label = "SHARE") => {
  const group = new THREE.Group();
  group.name = `tokens:${key}`;
  const seed = key.length * 3.7;
  const toks = Array.from({ length: n }, (_, i) => {
    const t = makeToken(label);
    t.rotation.y = (hash(i, seed) - 0.5) * 0.5;
    t.userData.ox = (hash(i, seed + 1) - 0.5) * 7; t.userData.oz = (hash(i, seed + 2) - 0.5) * 7;
    group.add(t);
    return t;
  });
  const h = (count: number) => Math.max(0, count) * TOKEN_T;
  return {
    group, h,
    update: (p: { count: number }) => {
      const c = Math.max(0, Math.min(n, p.count));
      toks.forEach((t, i) => {
        const a = c - i;                       // ≥ 1 present, 0…1 arriving
        t.visible = a > 0;
        if (!t.visible) return;
        const u = Math.min(1, a);
        t.position.set(t.userData.ox as number, i * TOKEN_T + (1 - u) * (1 - u) * 520, t.userData.oz as number);
      });
    },
  };
};
