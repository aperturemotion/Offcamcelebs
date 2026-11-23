// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE HOOK IN 3-D (039) — "In 2018, Canelo Álvarez signed what was called the richest contract in sports history, $365
// million. We counted the fights." A red leather boxing glove drives into a tall stack of strapped $100 bundles standing on a
// dark walnut table; the stack bursts and the bundles tumble in slow motion; the biggest bundle (a bank brick of four
// straps under one wide paper band) lands band up, and its band reads $365,000,000.
//
// ★ A REAL CAMERA (as 038's hook): the model is built in its own TABLE WORLD (px, y up, the table's top at y 0, x to the
//   right, z toward the viewer; the stack stands on the origin) and the whole world is carried in front of the stage's eye by
//   the inverse of a real camera's pose (`viewMatrix`: a position C looking at a target T, no roll). The stage's eye
//   (HOOK_EYE, on the frame's centre, D 2000: a 51° vertical field) is the camera's pinhole, so the set flies a true camera
//   with true perspective, and the band's close-up is a camera 28 cm from it, never a 2-D zoom. The key light is fixed in the
//   table world (rig.dir is re-aimed through the camera every frame).
//
// THE GLOVE ("glove"): a lace-up training glove, plain red leather (no maker's mark, no name): the padded fist (a rounded
//   superellipsoid, fuller over the knuckles), the thumb lying along its side, a long laced cuff (white laces criss-crossing
//   through steel eyelets over a tongue), white piping round the cuff's mouth and a dark lining inside it. Its punching face
//   points along −x; its local origin is the face's centre.
// THE BUNDLES: cash.ts's real strapped bundles (plain straps: no printed figure anywhere but the hero's band).
// THE HERO ("hero"): the biggest bundle, a bank brick: four strapped bundles squared under one wide kraft band, the band's
//   top printed $365,000,000 in heavy type (the film's figure, on the object).
// THE LOOSE NOTES ("note-i"): single $100 notes, a little curled, lying on the stack's top before the punch.
// THE TABLE (the floor): dark oiled walnut, falling into the dark ground away from its pool of light.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, mesh, type Model } from "../stage";
import { col, hash, wire } from "../kit029";
import { mergeGeometries, mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { makeBundle, makeBand, noteMaterials, keepFresh, BUNDLE, BAND_OUT, BAND_W, NOTE } from "./cash";

// ══ DIMENSIONS (px; a $100 note is 156 mm = 240 px: 1.54 px per mm) ══════════════════════════════════
export const KPX = NOTE.W / 156;
/** g = 9.81 m/s² in px per PHYSICAL frame² */
export const G = (9810 * KPX) / 900;
/** a layer of the stack: a bundle and the air over it */
export const LAYER = BUNDLE.H + 0.3;
/** a bundle's half extents round its centre (cash.ts: its sheets' shifts and turns, the strap's crinkled loop) */
export const BH = { x: BUNDLE.HX, y: BUNDLE.H / 2, z: BUNDLE.HZ } as const;
/** ★ the hero brick: four real bundles stacked a little out of square (HB_OFF), under one wide paper band (BAND.W, centred) */
export const BAND = { W: BAND_W, X: 0 } as const;   // ★ a real strap's width (38% of the note): the $100 faces show on both sides
/** the figure on the brick's band, printed across it */
export const BAND_TEXT = "$365,000,000";
const HB_OFF = Array.from({ length: 4 }, (_, k) => ({ dx: (hash(k, 1, 9) - 0.5) * 3.2, dz: (hash(k, 2, 9) - 0.5) * 2.4, yaw: (hash(k, 3, 9) - 0.5) * 0.02 }));
const HB_IN = BUNDLE.HZ + 1.2 + 0.01 * NOTE.W / 2 + 0.4;         // the band's inner half-depth (clear of the four, out of square)
const HB_BOT = 0.32 + 0.1;                                        // the bottom bundle sits on the band's bottom run
const HB_TOP = HB_BOT + 3 * LAYER + BUNDLE.TOP_MID + 0.12;        // the band's top run, its underside
export const HERO_H = Math.max(HB_TOP + BAND_OUT, HB_BOT + 3 * LAYER + BUNDLE.H);
export const HH = { x: BUNDLE.HX + 1.6 + 0.01 * NOTE.D / 2, y: HERO_H / 2, z: HB_IN + BAND_OUT } as const;
/** a loose note: its curl lifts its ends this much off its middle */
export const CURL = 4;
export const NH = { x: NOTE.W / 2, y: (CURL + 0.7) / 2, z: NOTE.D / 2 } as const;

/** ★ the glove (local: the punching face's centre at the origin, its cuff along +x, y up, z toward the thumb). A real
 *  lace-up glove's proportions: the fist (FL long) ≈ 1.3× the cuff's width at its knuckles, the whole glove ≈ 2× the fist's
 *  height. A: half the fist's length · B: its half-height (the knuckles' top, the curled fingers' underside) · C: its
 *  half-width at the knuckles · the cuff from CUFF0 (inside the fist) to its mouth at CUFF1, RY × RZ at the wrist */
export const GL = { A: 150, B: 106, C: 97, CUFF0: 240, CUFF1: 452, RY: 80, RZ: 72 } as const;
/** its parts as boxes for the set's clearance checks (local min / max): the fist with its thumb, the cuff with its laces */
export const GLOVE_BOXES: [[number, number, number], [number, number, number]][] = [
  [[0, -GL.B - 2, -GL.C - 2], [2 * GL.A, GL.B + 1, 140]],
  [[GL.CUFF0, -GL.RY - 12, -GL.RZ - 10], [GL.CUFF1 + 4, GL.RY + 10, GL.RZ + 14]],
];

/** the stage's eye for this place: on the frame's centre, D 2000 (layer px) */
export const HOOK_EYE = { x: 540, y: 960, D: 2000 };
const EYE3 = new THREE.Vector3(HOOK_EYE.x, -HOOK_EYE.y, HOOK_EYE.D);
const UP = new THREE.Vector3(0, 1, 0);
const mTmp = new THREE.Matrix4(), mRot = new THREE.Matrix4();
const vC = new THREE.Vector3(), vT = new THREE.Vector3();
/** the TABLE WORLD → stage-world matrix of a camera at C looking at T (no roll) */
export const viewMatrix = (C: readonly number[], T: readonly number[], out = new THREE.Matrix4()) => {
  vC.set(C[0], C[1], C[2]); vT.set(T[0], T[1], T[2]);
  mRot.lookAt(vC, vT, UP);
  mTmp.copy(mRot).setPosition(vC).invert();
  out.makeTranslation(EYE3.x, EYE3.y, EYE3.z).multiply(mTmp);
  return out;
};
const pTmp = new THREE.Vector3();
/** where a TABLE-WORLD point lands on the layer (px), and its scale; behind the eye: s < 0 */
export const toLayer = (V: THREE.Matrix4, p: readonly number[]) => {
  pTmp.set(p[0], p[1], p[2]).applyMatrix4(V);
  const d = HOOK_EYE.D - pTmp.z;
  const s = HOOK_EYE.D / d;
  return { x: HOOK_EYE.x + (pTmp.x - EYE3.x) * s, y: HOOK_EYE.y - (pTmp.y - EYE3.y) * s, s, d };
};

export type Pose = { p: [number, number, number]; q: [number, number, number, number] };
export type BodyP = Pose & { vis: boolean };
/** the stack, bottom to top: the BASE bundles (they stay), the STRUCK ones (in the glove's path: shot out left), the HERO,
 *  the TOP bundles; then the loose notes on top */
export const N_BASE = 2, N_STRUCK = 13, N_TOP = 3, N_NOTES = 5;
/** cam: the camera · glove · bodies: every bundle (base, struck, top), in stack order · hero · notes · pads: contact
 *  shadows' strength under the hero and the landed bundles (0 … 1, per body: tops then hero) */
export type HookP = {
  cam: { c: [number, number, number]; t: [number, number, number] };
  glove: BodyP; bundles: BodyP[]; hero: BodyP; notes: BodyP[];
};

/** the table's pool of light (xz: centre, radii): the table falls into the dark beyond it */
export const POOL_C: [number, number] = [-20, 40], POOL_R: [number, number] = [900, 330];

// ══ TEXTURES ═══════════════════════════════════════════════════════════════════════════════════════
const smooth = (t: number) => t * t * (3 - 2 * t);
const n1 = (x: number, s: number) => { const i = Math.floor(x), f = x - i; return hash(i, s, 1) + (hash(i + 1, s, 1) - hash(i, s, 1)) * smooth(f); };
const n2 = (x: number, y: number, s: number) => {
  const i = Math.floor(x), j = Math.floor(y), fx = smooth(x - i), fy = smooth(y - j);
  const a = hash(i, j, s), b = hash(i + 1, j, s), c = hash(i, j + 1, s), d = hash(i + 1, j + 1, s);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
};
/** dark oiled walnut, flat-sawn: wavering growth lines along the board, open pores, a warm chocolate tone */
const walnut = (X: number, Z: number, seed: number) => {
  const w = Z + 30 * (n1(X / 820, seed) - 0.5) * 2 + 10 * (n1(X / 230 + 3, seed + 1) - 0.5) * 2 + 3 * (n2(X / 50, Z / 30, seed + 2) - 0.5) * 2;
  const r = w / (13 + 5 * n1(Z / 160, seed + 3));
  const line = Math.pow(0.5 + 0.5 * Math.cos(2 * Math.PI * r + 1.8 * n2(X / 340, Z / 60, seed + 4)), 4);
  const tone = 0.5 * line + 0.2 * n2(X / 110, Z / 14, seed + 5) + 0.14 * n1(X / 1500, seed + 6);
  let R = 112 - 52 * tone, Gc = 74 - 38 * tone, B = 52 - 28 * tone;
  if (hash(Math.floor(X / 6), Math.floor(Z / 1.3), seed + 7) > 0.972 - 0.03 * line) { R *= 0.7; Gc *= 0.68; B *= 0.66; }
  return [R, Gc, B];
};
let walnutT: THREE.Texture | null = null;
const walnutTex = () => {
  if (walnutT) return walnutT;
  const w = 2048, h = 1024, sx = 2600 / w, sz = 1300 / h;
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  const g = c.getContext("2d")!;
  const im = g.createImageData(w, h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const [R, Gc, B] = walnut(x * sx, y * sz, 17);
    const i = (y * w + x) * 4;
    im.data[i] = R; im.data[i + 1] = Gc; im.data[i + 2] = B; im.data[i + 3] = 255;
  }
  g.putImageData(im, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  walnutT = t;
  return t;
};
/** the leather's grain: a fine pebble of soft cells (bump and roughness) */
let grainT: THREE.Texture | null = null;
const grainTex = () => {
  if (grainT) return grainT;
  const c = document.createElement("canvas"); c.width = c.height = 512;
  const g = c.getContext("2d")!;
  g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 9000; i++) {
    const v = 96 + Math.round(70 * hash(i, 31, 2));
    g.fillStyle = `rgba(${v},${v},${v},0.55)`;
    const x = hash(i, 32, 2) * 512, y = hash(i, 33, 2) * 512, r = 1.2 + 2.6 * hash(i, 34, 2);
    g.beginPath(); g.ellipse(x, y, r, r * (0.7 + 0.5 * hash(i, 35, 2)), hash(i, 36, 2) * 3, 0, Math.PI * 2); g.fill();
  }
  grainT = new THREE.CanvasTexture(c);
  grainT.wrapS = grainT.wrapT = THREE.RepeatWrapping;
  grainT.repeat.set(3, 3);
  return grainT;
};
/** a soft round pad (contact shadows) */
let softT: THREE.Texture | null = null;
const softTex = () => {
  if (softT) return softT;
  const c = document.createElement("canvas"); c.width = 256; c.height = 128;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 128);
  g.filter = "blur(10px)";
  g.fillStyle = "#fff"; g.fillRect(26, 22, 204, 84);
  softT = new THREE.CanvasTexture(c);
  return softT;
};

/** ★ a material that falls into the dark away from the pool (alpha by the fragment's position in its own geometry's xz) */
const pooled = <T extends THREE.Material>(m: T, c: [number, number], r: [number, number], key: string) => {
  m.transparent = true;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.poolC = { value: new THREE.Vector2(...c) };
    sh.uniforms.poolR = { value: new THREE.Vector2(...r) };
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec2 vPoolP;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvPoolP = position.xz;");
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec2 vPoolP;\nuniform vec2 poolC;\nuniform vec2 poolR;")
      .replace("#include <dithering_fragment>", `#include <dithering_fragment>
        float poolA = 1.0 - smoothstep( 0.35, 1.0, length( ( vPoolP - poolC ) / poolR ) );
        if ( poolA < 0.004 ) discard;
        gl_FragColor.a *= poolA;`);
  };
  m.customProgramCacheKey = () => key;
  return m;
};

// ══ THE GLOVE'S GEOMETRY (shape first: a real lace-up boxing glove) ═══════════════════════════════════
type P3 = [number, number, number];
const sm = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const gs = (x: number, c: number, w: number) => Math.exp(-(((x - c) / w) ** 2));
const spw = (a: number, e: number) => Math.sign(a) * Math.pow(Math.abs(a), e);
const FL = 2 * GL.A;           // the fist: from the punching face to the wrist
const XR = 96;                 // the face's rounding (the dome of the knuckle face)
const NSE = 2.6;               // the cross-section's superellipse (padded, a little square)
/** the fist's cross-section at x: its top (knuckles → back of the hand), its underside (curled fingers → grip → heel of the
 *  palm), its half-width; it tucks inside the cuff at the wrist */
const fistProf = (x: number) => {
  const front = x < XR ? Math.pow(Math.sqrt(Math.max(0, 1 - (1 - x / XR) ** 2)), 0.9) : 1;
  const tuck = 1 - 0.13 * sm(0.86 * FL, FL, x);
  return { s: front * tuck, top: 98 - 16 * sm(90, FL, x), bot: 100 - 16 * sm(150, FL, x), half: GL.C - 21 * sm(80, FL, x) };
};
/** a point of the fist's surface at (x, θ): θ = 0 on the thumb side (+z), π/2 on top */
const fistP = (x: number, th: number): P3 => {
  const { s, top, bot, half } = fistProf(x);
  const ct = Math.cos(th), st = Math.sin(th), up = Math.max(0, st), dn = Math.max(0, -st);
  // the knuckle roll (a distinct ridge across the top front), the dip behind it, the back of the hand
  let t = top + 7 * gs(x, 56, 22) * up ** 1.5 - 4 * gs(x, 104, 13) * up ** 2;
  // underneath: the curled fingers' roll, the crease where the fingertips meet the palm, the grip bar's bulge
  let b = bot + 4 * gs(x, 72, 28) * dn ** 2 - 6 * gs(x, 130, 10) * dn ** 3 + 4.5 * gs(x, 182, 24) * dn ** 3;
  t = Math.min(t, GL.B - 0.5); b = Math.min(b, GL.B + 1);
  const z = half * s * spw(ct, 2 / NSE) * (ct > 0 ? 1 - 0.04 * gs(x, 140, 70) : 1);
  const y = (st >= 0 ? t : -b) * s * Math.pow(Math.abs(st), 2 / NSE);
  return [x, y, z];
};
const sub = (a: P3, b: P3): P3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const crs = (a: P3, b: P3): P3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const nrm = (a: P3): P3 => { const l = Math.hypot(...a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
/** the fist's outward normal at (x, θ), by finite differences (smooth everywhere, the face's pole included) */
const fistN = (x: number, th: number): P3 => {
  const xx = Math.max(0.6, x), e = 0.4, d = 0.004;
  const n = crs(sub(fistP(xx + e, th), fistP(Math.max(0.2, xx - e), th)), sub(fistP(xx, th + d), fistP(xx, th - d)));
  return nrm(n);
};
const onFist = (x: number, th: number, lift: number): P3 => { const p = fistP(x, th), n = fistN(x, th); return [p[0] + n[0] * lift, p[1] + n[1] * lift, p[2] + n[2] * lift]; };
/** the fist: a subdivided loft, dense at the face, its normals analytic (no facets, no seam crease) */
const fistGeo = () => {
  const NU = 120, NT = 112;
  const pos: number[] = [], nor: number[] = [], uv: number[] = [], idx: number[] = [];
  for (let i = 0; i <= NU; i++) {
    const x = FL * (1 - Math.cos((i / NU) * (Math.PI / 2))) ** 0.85;
    for (let j = 0; j <= NT; j++) {
      const th = (j / NT) * Math.PI * 2;
      const p = fistP(x, th), n = i === 0 ? [-1, 0, 0] : fistN(x, th);
      pos.push(...p); nor.push(...n); uv.push((x / FL) * 2, (j / NT) * 3);
    }
  }
  for (let i = 0; i < NU; i++) for (let j = 0; j < NT; j++) {
    const a = i * (NT + 1) + j, b = a + 1, c = a + NT + 1, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
};
/** ★ the thumb: its own padded lobe lying along the fist's thumb side, curving forward to its tip by the knuckles; a
 *  tapered, slightly flattened tube on a curved spine, rounded at both ends */
const THUMB_SPINE = new THREE.CatmullRomCurve3([new THREE.Vector3(232, -36, 60), new THREE.Vector3(176, -33, 94), new THREE.Vector3(114, -25, 106), new THREE.Vector3(58, -12, 100)], false, "centripetal");
const thumbR = (s: number) => {
  const cap = (u: number) => Math.pow(Math.sqrt(Math.max(0, 1 - u * u)), 0.8);
  const k = s > 0.8 ? cap((s - 0.8) / 0.2) : s < 0.1 ? cap((0.1 - s) / 0.1) : 1;
  return (36 - 5 * s) * k;
};
const thumbFrame = (s: number) => {
  const p = THUMB_SPINE.getPointAt(s), t = THUMB_SPINE.getTangentAt(s).normalize();
  const e1 = new THREE.Vector3(0, 1, 0).addScaledVector(t, -t.y).normalize();      // up, across the thumb
  const e2 = new THREE.Vector3().crossVectors(t, e1).normalize();                   // outward from the fist
  return { p, t, e1, e2 };
};
const thumbP = (s: number, ph: number, lift = 0): P3 => {
  const { p, e1, e2 } = thumbFrame(s), r = thumbR(s);
  const ry = r * 1.06 + lift, rz = r * 0.86 + lift;
  return [p.x + e1.x * ry * Math.cos(ph) + e2.x * rz * Math.sin(ph), p.y + e1.y * ry * Math.cos(ph) + e2.y * rz * Math.sin(ph), p.z + e1.z * ry * Math.cos(ph) + e2.z * rz * Math.sin(ph)];
};
const thumbGeo = () => {
  const NS = 80, NP = 64;
  const pos: number[] = [], uv: number[] = [], idx: number[] = [];
  for (let i = 0; i <= NS; i++) for (let j = 0; j <= NP; j++) { pos.push(...thumbP(i / NS, (j / NP) * Math.PI * 2)); uv.push((i / NS) * 1.2, (j / NP) * 1.4); }
  for (let i = 0; i < NS; i++) for (let j = 0; j < NP; j++) { const a = i * (NP + 1) + j, b = a + 1, c = a + NP + 1, d = c + 1; idx.push(a, c, b, b, c, d); }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return mergeVertices(g, 1e-3);
};
/** a strip of leather lying on a surface: along `pts`, `w` wide, `t` thick, its face along the surface normals `ns` */
const ribbon = (pts: P3[], ns: P3[], w: number, t: number) => {
  const pos: number[] = [], idx: number[] = [];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    const side = nrm(crs(sub(b, a), ns[i]));
    for (const [sw, st] of [[-1, 0], [1, 0], [1, 1], [-1, 1]] as const) for (let k = 0; k < 3; k++) pos.push(pts[i][k] + side[k] * sw * w / 2 + ns[i][k] * st * t);
  }
  for (let i = 0; i < pts.length - 1; i++) for (let q = 0; q < 4; q++) {
    const a = i * 4 + q, b = i * 4 + ((q + 1) % 4), c = a + 4, d = b + 4;
    idx.push(a, c, b, b, c, d);
  }
  idx.push(0, 1, 2, 0, 2, 3);
  const L = (pts.length - 1) * 4;
  idx.push(L, L + 2, L + 1, L, L + 3, L + 2);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
};
/** the cuff: padded (a soft swell along it), tapering to the wrist's opening, a slight flare at the mouth */
const cuffSwell = (x: number) => Math.sin(Math.PI * sm(GL.CUFF0 + 40, GL.CUFF1 - 6, x));
const cuffRY = (x: number) => GL.RY - 7 * sm(300, GL.CUFF1, x) + 3.2 * cuffSwell(x) + 2 * sm(GL.CUFF1 - 12, GL.CUFF1, x);
const cuffRZ = (x: number) => GL.RZ - 6 * sm(300, GL.CUFF1, x) + 2.6 * cuffSwell(x) + 2 * sm(GL.CUFF1 - 12, GL.CUFF1, x);
const cuffP = (x: number, a: number, lift = 0): P3 => {
  const ry = cuffRY(x), rz = cuffRZ(x), n = nrm([0, Math.cos(a) / ry, Math.sin(a) / rz]);
  return [x, ry * Math.cos(a) + n[1] * lift, rz * Math.sin(a) + n[2] * lift];
};
const cuffN = (a: number, x: number): P3 => nrm([0, Math.cos(a) / cuffRY(x), Math.sin(a) / cuffRZ(x)]);
/** the cuff's skin: an elliptical tube (a = 0 on top), outward or inward (the lining) */
const tubeGeo = (x0: number, x1: number, ry: (x: number) => number, rz: (x: number) => number, inward = false) => {
  const NI = 56, NJ = 96;
  const pos: number[] = [], nor: number[] = [], uv: number[] = [], idx: number[] = [];
  for (let i = 0; i <= NI; i++) for (let j = 0; j <= NJ; j++) {
    const x = x0 + ((x1 - x0) * i) / NI, a = (j / NJ) * Math.PI * 2;
    pos.push(x, ry(x) * Math.cos(a), rz(x) * Math.sin(a));
    const n = nrm([0, Math.cos(a) / ry(x), Math.sin(a) / rz(x)]);
    nor.push(...(inward ? [-n[0], -n[1], -n[2]] : n));
    uv.push((i / NI) * 2, (j / NJ) * 3);
  }
  for (let i = 0; i < NI; i++) for (let j = 0; j < NJ; j++) {
    const a = i * (NJ + 1) + j, b = a + 1, c = a + NJ + 1, d = c + 1;
    if (inward) idx.push(a, c, b, b, c, d); else idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
};
/** a row of stitches along a polyline: short thread dashes, merged into one geometry */
const stitchGeo = (pts: P3[], dash = 3.4, gap = 2.6, r = 0.75) => {
  const parts: THREE.BufferGeometry[] = [];
  const P = pts.map((p) => new THREE.Vector3(...p));
  let carry = 0;
  for (let i = 0; i < P.length - 1; i++) {
    const a = P[i], b = P[i + 1], L = a.distanceTo(b), dir = b.clone().sub(a).normalize();
    for (let t = carry; t + dash <= L; t += dash + gap) {
      const c = new THREE.CapsuleGeometry(r, dash - 2 * r, 2, 6);
      c.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir));
      const m = a.clone().addScaledVector(dir, t + dash / 2);
      c.translate(m.x, m.y, m.z);
      parts.push(c);
      carry = t + dash + gap - L;
    }
    if (carry < 0) carry = 0;
  }
  return mergeGeometries(parts.map((g) => g.toNonIndexed()))!;
};
/** the palm panel's seam: along the thumb side a little below the middle, round under the knuckle face, back along the
 *  other side; `dth` shifts it (the stitch rows ride either side of the piping) */
const palmSeam = (dth: number, lift: number): P3[] => {
  const side = (sg: number) => {
    const out: P3[] = [];
    for (let i = 0; i <= 60; i++) {
      const x = 286 - (286 - 14) * (i / 60) ** 0.8;
      const th = -0.3 + dth - 1.27 * sm(84, 14, x);
      out.push(onFist(x, sg > 0 ? th : Math.PI - th, lift));
    }
    return out;
  };
  return [...side(1), ...side(-1).reverse()];
};
// ══ THE MODEL ═══════════════════════════════════════════════════════════════════════════════════════
export const hookModel = () => (): Model<HookP> => {
  const root = new THREE.Group();
  const world = new THREE.Group();
  world.matrixAutoUpdate = false;
  root.add(world);

  // ══ THE TABLE (the floor) ══
  const table = new THREE.Group();
  table.userData.isFloor = true; table.userData.noBounds = true;
  world.add(table);
  {
    const tex = walnutTex();
    const m = pooled(new THREE.MeshPhysicalMaterial({ map: tex, bumpMap: tex, bumpScale: 0.4, roughness: 0.42, metalness: 0, clearcoat: 0.35,
      clearcoatRoughness: 0.35, envMapIntensity: 0.5 }), POOL_C, POOL_R, "hk39-walnut");
    const g = new THREE.PlaneGeometry(2600, 1300, 1, 1);
    g.rotateX(-Math.PI / 2);
    g.translate(POOL_C[0], 0, POOL_C[1]);
    const top = mesh(g, m, false, true);
    table.add(top);
  }
  // contact pads (soft shadows where a body lies on the table), not objects
  const padM = () => new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: softTex(), transparent: true, depthWrite: false, opacity: 0, toneMapped: false });
  const pad = (w: number, d: number) => {
    const g = new THREE.PlaneGeometry(w, d);
    g.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(g, padM());
    m.renderOrder = 1.5; m.position.y = 0.2;
    table.add(m);
    return m;
  };

  // ══ THE GLOVE ══
  const glove = new THREE.Group();
  glove.userData.obj = "glove";
  glove.matrixAutoUpdate = false;
  world.add(glove);
  {
    const grain = grainTex();
    const leather = new THREE.MeshPhysicalMaterial({ color: col("#A8141B"), roughness: 0.52, roughnessMap: grain, bumpMap: grain, bumpScale: 0.9,
      metalness: 0, clearcoat: 0.32, clearcoatRoughness: 0.42, sheen: 0.3, sheenRoughness: 0.5, sheenColor: col("#FF7A66"), envMapIntensity: 0.6 });
    const leatherDk = new THREE.MeshPhysicalMaterial({ color: col("#8E1016"), roughness: 0.5, bumpMap: grain, bumpScale: 0.5, metalness: 0,
      clearcoat: 0.35, clearcoatRoughness: 0.4, envMapIntensity: 0.6 });
    const lining = new THREE.MeshStandardMaterial({ color: col("#1A1214"), roughness: 0.95, side: THREE.DoubleSide, envMapIntensity: 0.2 });
    const white = new THREE.MeshPhysicalMaterial({ color: col("#F1EEE6"), roughness: 0.55, clearcoat: 0.2, envMapIntensity: 0.5 });
    const lace = new THREE.MeshStandardMaterial({ color: col("#F4F2EC"), roughness: 0.8, envMapIntensity: 0.4 });
    const steel = new THREE.MeshPhysicalMaterial({ color: col("#C9CDD2"), metalness: 1, roughness: 0.3, envMapIntensity: 1 });
    const thread = new THREE.MeshStandardMaterial({ color: col("#E4D9C8"), roughness: 0.75, envMapIntensity: 0.3 });
    // the fist: the padded knuckle face, the roll over the knuckles, the curled fingers and the grip bar under it
    glove.add(mesh(fistGeo(), leather));
    // the palm panel's piping, a stitch row either side of it
    glove.add(wire(palmSeam(0, 1.2), 2.5, leatherDk, false, 220));
    glove.add(mesh(stitchGeo(palmSeam(0.07, 0.5)), thread));
    glove.add(mesh(stitchGeo(palmSeam(-0.07, 0.5)), thread));
    // ★ the thumb: its own padded lobe along the side, its seam piped along its outer edge
    glove.add(mesh(thumbGeo(), leather));
    {
      const pts: P3[] = [];
      for (let i = 0; i <= 40; i++) { const s0 = 0.08 + 0.88 * (i / 40); pts.push(thumbP(s0, Math.PI / 2 + 0.25, 0.8)); }
      glove.add(wire(pts, 2.1, leatherDk, false, 120));
      const st: P3[] = [];
      for (let i = 0; i <= 40; i++) { const s0 = 0.1 + 0.84 * (i / 40); st.push(thumbP(s0, Math.PI / 2 + 0.05, 0.4)); }
      glove.add(mesh(stitchGeo(st), thread));
    }
    // the thumb's attachment strap: a short band of leather from the thumb's tip over to the fist by the knuckle roll
    {
      const pts: P3[] = [], ns: P3[] = [];
      for (let i = 0; i <= 16; i++) {
        const k = i / 16, x = 66 - 16 * k, th = 0.12 + 0.9 * k;
        const pf = onFist(x, th, 2.2), pt = thumbP(0.86, Math.PI / 2 * (1 - k), 2.2);
        const w = sm(0, 0.3, k);
        pts.push([pt[0] + (pf[0] - pt[0]) * w, pt[1] + (pf[1] - pt[1]) * w, pt[2] + (pf[2] - pt[2]) * w]);
        ns.push(fistN(x, th));
      }
      glove.add(mesh(ribbon(pts, ns, 17, 2.6), leatherDk));
      glove.add(mesh(stitchGeo(pts.map((p, i) => [p[0] + ns[i][0] * 2.8 - 5.5, p[1] + ns[i][1] * 2.8, p[2] + ns[i][2] * 2.8] as P3)), thread));
    }
    // the cuff: padded, tapering to the wrist's opening; its lining; the white piping rolled round its mouth
    glove.add(mesh(tubeGeo(GL.CUFF0, GL.CUFF1, cuffRY, cuffRZ), leather));
    glove.add(mesh(tubeGeo(GL.CUFF1 - 50, GL.CUFF1, (x) => cuffRY(x) - 5, (x) => cuffRZ(x) - 5, true), lining));
    const ringAt = (x: number, lift: number) => { const r: P3[] = []; for (let j = 0; j <= 96; j++) r.push(cuffP(x, (j / 96) * Math.PI * 2, lift)); return r; };
    glove.add(wire(ringAt(GL.CUFF1, -1.6), 3.8, white, true, 128));
    glove.add(mesh(stitchGeo(ringAt(GL.CUFF1 - 13, 0.4)), thread));
    // the seam where the cuff is sewn to the fist, and its stitches
    glove.add(wire(ringAt(282, 1.0), 2.4, leatherDk, true, 128));
    glove.add(mesh(stitchGeo(ringAt(292, 0.4)), thread));
    // ★ the lace-up front, on the palm side turned toward the thumb: the slit's two edges, the tongue under it, steel eyelets,
    //   white laces criss-crossing through them, tied off in a bow by the mouth, its ends hanging along the cuff
    const AL = Math.PI - 0.85, DE = 0.21;
    const along = (a: number, x0: number, x1: number, lift: number, n = 30) => { const r: P3[] = []; for (let i = 0; i <= n; i++) r.push(cuffP(x0 + ((x1 - x0) * i) / n, a, lift)); return r; };
    {
      const pts = along(AL, 300, 436, 0.25, 24), ns = pts.map((p) => cuffN(AL, p[0]));
      glove.add(mesh(ribbon(pts, ns, 30, 1.4), leatherDk));
    }
    for (const sg of [-1, 1]) glove.add(wire(along(AL + sg * 0.12, 296, 440, 1.6), 2.2, leather, false, 60));
    const EX = [310, 331, 352, 373, 394, 415];
    for (const x of EX) for (const sg of [-1, 1]) {
      const a = AL + sg * DE, p = cuffP(x, a, 1.1), n = cuffN(a, x);
      const t = mesh(new THREE.TorusGeometry(4.2, 1.4, 8, 20), steel);
      t.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(...n));
      t.position.set(...p);
      glove.add(t);
    }
    for (let k = 0; k < EX.length - 1; k++) for (const sg of [1, -1]) {
      const a = cuffP(EX[k], AL + sg * DE, 1.8), b = cuffP(EX[k + 1], AL - sg * DE, 1.8);
      const m = cuffP((EX[k] + EX[k + 1]) / 2, AL, sg > 0 ? 4.6 : 3.4);
      glove.add(wire([a, m, b], 2.3, lace, false, 18));
    }
    // the bow: two loops and two ends, by the last eyelets
    {
      const L = EX[EX.length - 1] + 6, kn = cuffP(L, AL, 4.2);
      for (const sg of [-1, 1]) {
        const loop: P3[] = [];
        for (let i = 0; i <= 14; i++) {
          const t = (i / 14) * Math.PI * 2;
          loop.push(cuffP(L + 9 + 8 * Math.cos(t) - 1, AL + sg * (0.16 + 0.1 * (1 + Math.sin(t))), 4.2 + 3 * Math.sin(t) * 0.5 + 1.5));
        }
        glove.add(wire(loop, 2.2, lace, true, 40));
        glove.add(wire([kn, cuffP(L + 12, AL + sg * 0.08, 3.2), cuffP(L + 24, AL + sg * 0.16, 2.6), cuffP(L + 33, AL + sg * 0.24, 2.4)], 2.2, lace, false, 24));
      }
      const knot = mesh(new THREE.SphereGeometry(4.2, 16, 12), lace);
      knot.position.set(...kn);
      glove.add(knot);
    }
  }

  // ══ THE BUNDLES (base, struck, top: in stack order) ══
  const bundles: THREE.Group[] = [];
  const nB = N_BASE + N_STRUCK + N_TOP;
  for (let i = 0; i < nB; i++) {
    const outer = new THREE.Group();
    outer.matrixAutoUpdate = false;
    const b = makeBundle({ seed: 40 + i * 3, flip: hash(i, 7, 3) > 0.6, strap: "" });   // ★ plain straps: no figure before 2 s
    b.position.y = -BUNDLE.H / 2;                       // its pose is its centre's
    outer.add(b);
    outer.userData.obj = `bundle-${i}`;
    world.add(outer);
    bundles.push(outer);
  }
  // their contact pads (the base and the top bundles: the ones that lie on the table)
  const padIdx = [0, ...Array.from({ length: N_TOP }, (_, k) => N_BASE + N_STRUCK + k)];
  const pads = padIdx.map(() => pad(NOTE.W * 1.16, NOTE.D * 1.3));

  // ══ THE HERO BRICK ══
  const hero = new THREE.Group();
  hero.userData.obj = "hero";
  hero.matrixAutoUpdate = false;
  world.add(hero);
  {
    const inner = new THREE.Group();
    inner.position.y = -HERO_H / 2;
    hero.add(inner);
    for (let k = 0; k < 4; k++) {
      const b = makeBundle({ seed: 90 + k * 5, flip: k === 1, strap: "" });   // the top one reads the right way up
      b.position.set(HB_OFF[k].dx, HB_BOT + k * LAYER, HB_OFF[k].dz);
      b.rotation.y = HB_OFF[k].yaw;
      inner.add(b);
    }
    // the band: one crinkled loop round the four, its figure printed across its top
    inner.add(makeBand({ w: BAND.W, zIn: HB_IN, yTop: HB_TOP, text: BAND_TEXT, across: true, seed: 7 }));
  }
  const heroPad = pad(NOTE.W * 1.2, NOTE.D * 1.36);

  // ══ THE LOOSE NOTES ══
  const noteMats = noteMaterials();
  const noteGeo = () => {
    // a curled sheet: its ends lift CURL off its middle; the face up, the back down, its thin edge round it
    const sx = 24, sz = 4, NT = 0.25;
    const pos: number[] = [], uv: number[] = [], idx: number[] = [];
    const yAt = (x: number) => CURL * (x / (NOTE.W / 2)) ** 2;
    const groups: [number, number, number][] = [];
    const grid = (dy: number, flip: boolean) => {
      const base = pos.length / 3, s = idx.length;
      for (let j = 0; j <= sz; j++) for (let i = 0; i <= sx; i++) {
        const x = -NOTE.W / 2 + (NOTE.W * i) / sx, z = -NOTE.D / 2 + (NOTE.D * j) / sz;
        pos.push(x, yAt(x) + dy, z); uv.push(i / sx, 1 - j / sz);
      }
      for (let j = 0; j < sz; j++) for (let i = 0; i < sx; i++) {
        const a = base + j * (sx + 1) + i, b = a + 1, c = a + sx + 1, d = c + 1;
        if (flip) idx.push(a, b, c, b, d, c); else idx.push(a, c, b, b, c, d);
      }
      groups.push([s, idx.length - s, flip ? 1 : 0]);
    };
    grid(NT, false);
    grid(0, true);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    for (const [s, n, m] of groups) g.addGroup(s, n, m);
    g.computeVertexNormals();
    g.translate(0, -NH.y, 0);
    return g;
  };
  const ng = noteGeo();
  const notes: THREE.Group[] = [];
  for (let i = 0; i < N_NOTES; i++) {
    const n = new THREE.Group();
    n.matrixAutoUpdate = false;
    n.userData.obj = `note-${i}`;
    n.add(keepFresh(mesh(ng, [noteMats[0], noteMats[1]])));
    world.add(n);
    notes.push(n);
  }

  const V = new THREE.Matrix4(), mP = new THREE.Matrix4();
  const qP = new THREE.Quaternion(), sOne = new THREE.Vector3(1, 1, 1), vP = new THREE.Vector3();
  const KEY_W = new THREE.Vector3(-0.45, 0.8, 0.4).normalize();
  const keyDir = new THREE.Vector3();
  const place = (o: THREE.Object3D, b: BodyP) => {
    o.visible = b.vis;
    qP.set(...b.q); vP.set(...b.p);
    mP.compose(vP, qP, sOne);
    o.matrix.copy(mP);
  };
  const eYaw = new THREE.Euler();
  /** a pad under a body: strong when it lies on the table, gone as it rises */
  const padFor = (m: THREE.Mesh, b: BodyP, hy: number, k: number) => {
    const h = b.p[1] - hy;
    const on = b.vis ? Math.max(0, 1 - h / 40) : 0;
    m.visible = on > 0.01;
    m.position.set(b.p[0], 0.2, b.p[2]);
    eYaw.setFromQuaternion(qP.set(...b.q), "YXZ");
    m.rotation.set(0, eYaw.y, 0);
    (m.material as THREE.MeshBasicMaterial).opacity = k * on * on;
  };
  const model: Model<HookP> = { root, rig: { dir: [-0.45, 0.8, 0.4] } };
  model.update = (p) => {
    viewMatrix(p.cam.c, p.cam.t, V);
    world.matrix.copy(V);
    keyDir.copy(KEY_W).transformDirection(V);
    model.rig!.dir = [keyDir.x, keyDir.y, keyDir.z];
    place(glove, p.glove);
    p.bundles.forEach((b, i) => place(bundles[i], b));
    place(hero, p.hero);
    p.notes.forEach((b, i) => place(notes[i], b));
    padIdx.forEach((i, k) => padFor(pads[k], p.bundles[i], BH.y, 0.5));
    padFor(heroPad, p.hero, HH.y, 0.55);
  };
  return model;
};
