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
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { makeBundle, makeBand, noteMaterials, BUNDLE, BAND_OUT, NOTE } from "./cash";

// ══ DIMENSIONS (px; a $100 note is 156 mm = 240 px: 1.54 px per mm) ══════════════════════════════════
export const KPX = NOTE.W / 156;
/** g = 9.81 m/s² in px per PHYSICAL frame² */
export const G = (9810 * KPX) / 900;
/** a layer of the stack: a bundle and the air over it */
export const LAYER = BUNDLE.H + 0.3;
/** a bundle's half extents round its centre (cash.ts: its sheets' shifts and turns, the strap's crinkled loop) */
export const BH = { x: BUNDLE.HX, y: BUNDLE.H / 2, z: BUNDLE.HZ } as const;
/** ★ the hero brick: four real bundles stacked a little out of square (HB_OFF), under one wide paper band (BAND.W, centred) */
export const BAND = { W: 130, X: 0 } as const;
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

/** the glove (local: the punching face's centre at the origin, its cuff along +x, y up, z toward the thumb) */
export const GL = { A: 136, B: 106, C: 92, CUFF0: 214, CUFF1: 560, RY: 84, RZ: 78 } as const;
/** its parts as boxes for the set's clearance checks (local min / max): the fist with its thumb, the cuff */
export const GLOVE_BOXES: [[number, number, number], [number, number, number]][] = [
  [[0, -GL.B - 1, -GL.C - 1], [2 * GL.A, GL.B + 1, GL.C + 26]],
  [[GL.CUFF0, -GL.RY - 6, -GL.RZ - 6], [GL.CUFF1 + 4, GL.RY + 10, GL.RZ + 6]],
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

// ══ THE GLOVE'S GEOMETRY ═══════════════════════════════════════════════════════════════════════════
const sp = (a: number, e: number) => Math.sign(a) * Math.pow(Math.abs(a), e);
/** the padded fist: a superellipsoid, fuller over the knuckle roll (top front), the curled fingers a little flatter under,
 *  tapering at the back into the cuff */
/** a point of the fist's surface for a unit direction (ux along the punching axis, toward the cuff) */
const fistPt = (ux: number, uy: number, uz: number): [number, number, number] => {
  const back = Math.max(0, ux);
  const taper = 1 - 0.16 * back * back * back;
  const x = GL.A + GL.A * sp(ux, 0.78);
  let y = GL.B * sp(uy, 0.82) * taper * (uy < 0 ? 0.93 : 1);
  const z = GL.C * sp(uz, 0.84) * taper;
  // the knuckle roll: the top front stands a little proud
  if (uy > 0 && ux < 0.2) y += 7 * uy * (0.2 - ux) / 1.2;
  return [x, y, z];
};
const fistGeo = () => {
  const g = new THREE.SphereGeometry(1, 96, 64);
  const p = g.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < p.count; i++) {
    // the sphere's poles on ±x (the punching axis): a quarter turn about z (the winding kept)
    p.setXYZ(i, ...fistPt(p.getY(i), -p.getX(i), p.getZ(i)));
  }
  g.computeVertexNormals();
  return g;
};
/** the palm panel's seam: round the fist a little below its middle, from the cuff on one side, round the punching face, to
 *  the cuff on the other; `lift` raises it off the surface along the direction (stitches ride beside the piping) */
const seamPts = (uy: number, lift: number, n = 72): [number, number, number][] => {
  const out: [number, number, number][] = [];
  const r = Math.sqrt(1 - uy * uy);
  for (let i = 0; i <= n; i++) {
    const a = -2.2 + (4.4 * i) / n;                           // round the front (ux = −1 at a = 0)
    const ux = -r * Math.cos(a), uz = r * Math.sin(a);
    const p = fistPt(ux, uy, uz), q = fistPt(ux * 1.02, uy * 1.02, uz * 1.02);
    const d = Math.hypot(q[0] - p[0], q[1] - p[1], q[2] - p[2]) || 1;
    out.push([p[0] + ((q[0] - p[0]) / d) * lift, p[1] + ((q[1] - p[1]) / d) * lift, p[2] + ((q[2] - p[2]) / d) * lift]);
  }
  return out;
};
/** a row of stitches along a polyline: short thread dashes, merged into one geometry */
const stitchGeo = (pts: [number, number, number][], dash = 3.4, gap = 2.6, r = 0.75) => {
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
/** the cuff: an elliptical tube from inside the fist to its mouth (outer skin and the lining as one open tube each) */
const tubeGeo = (x0: number, x1: number, ry: (x: number) => number, rz: (x: number) => number, inward = false) => {
  const NI = 28, NJ = 64;
  const pos: number[] = [], uv: number[] = [], idx: number[] = [];
  for (let i = 0; i <= NI; i++) for (let j = 0; j <= NJ; j++) {
    const x = x0 + ((x1 - x0) * i) / NI, a = (j / NJ) * Math.PI * 2;
    pos.push(x, ry(x) * Math.cos(a), rz(x) * Math.sin(a));
    uv.push(i / NI * 2, j / NJ * 3);
  }
  for (let i = 0; i < NI; i++) for (let j = 0; j < NJ; j++) {
    const a = i * (NJ + 1) + j, b = a + 1, c = a + NJ + 1, d = c + 1;
    if (inward) idx.push(a, c, b, b, c, d); else idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
};
/** the cuff's padding swells a little between its seam and its mouth, and flares at the mouth */
const cuffPad = (x: number) => 4.5 * Math.sin(Math.PI * Math.min(1, Math.max(0, (x - GL.CUFF0 - 60) / (GL.CUFF1 - GL.CUFF0 - 76))));
const cuffRY = (x: number) => GL.RY + cuffPad(x) + 4 * Math.max(0, (x - 420) / 140);
const cuffRZ = (x: number) => GL.RZ + cuffPad(x) * 0.8 + 4 * Math.max(0, (x - 420) / 140);
/** the cuff's top surface height at (x, z) (where the laces lie) */
const cuffTop = (x: number, z: number) => cuffRY(x) * Math.sqrt(Math.max(0, 1 - (z / cuffRZ(x)) ** 2));

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
    glove.add(mesh(fistGeo(), leather));
    // the palm panel's piping, and a row of stitches beside it; the thread is the leather's own, a shade lighter
    const thread = new THREE.MeshStandardMaterial({ color: col("#E4D9C8"), roughness: 0.75, envMapIntensity: 0.3 });
    glove.add(wire(seamPts(-0.2, 1.2), 2.6, leatherDk, false, 160));
    glove.add(mesh(stitchGeo(seamPts(-0.12, 0.5)), thread));
    glove.add(mesh(stitchGeo(seamPts(-0.28, 0.6)), thread));
    // the thumb: a padded capsule lying along the fist's near side, its tip stitched to the knuckle roll
    const th = mesh(new THREE.CapsuleGeometry(38, 128, 12, 32), leather);
    th.rotation.z = Math.PI / 2 + 0.08; th.rotation.y = 0.18;
    th.position.set(128, -34, 62);
    glove.add(th);
    // the cuff: outer skin, lining, the piping round its mouth
    glove.add(mesh(tubeGeo(GL.CUFF0, GL.CUFF1, cuffRY, cuffRZ), leather));
    glove.add(mesh(tubeGeo(GL.CUFF1 - 60, GL.CUFF1, (x) => cuffRY(x) - 5, (x) => cuffRZ(x) - 5, true), lining));
    const pipe: [number, number, number][] = [];
    for (let j = 0; j <= 64; j++) { const a = (j / 64) * Math.PI * 2; pipe.push([GL.CUFF1, (cuffRY(GL.CUFF1) - 1.5) * Math.cos(a), (cuffRZ(GL.CUFF1) - 1.5) * Math.sin(a)]); }
    glove.add(wire(pipe, 3.6, white, true, 96));
    // a seam band where the cuff meets the fist
    const seam: [number, number, number][] = [];
    for (let j = 0; j <= 64; j++) { const a = (j / 64) * Math.PI * 2; seam.push([GL.CUFF0 + 70, (cuffRY(GL.CUFF0 + 70) + 0.6) * Math.cos(a), (cuffRZ(GL.CUFF0 + 70) + 0.6) * Math.sin(a)]); }
    glove.add(wire(seam, 2.2, leatherDk, true, 96));
    for (const sx of [GL.CUFF0 + 80, GL.CUFF1 - 16]) {
      const ring: [number, number, number][] = [];
      for (let j = 0; j <= 96; j++) { const a = (j / 96) * Math.PI * 2; ring.push([sx, (cuffRY(sx) + 0.35) * Math.cos(a), (cuffRZ(sx) + 0.35) * Math.sin(a)]); }
      glove.add(mesh(stitchGeo(ring), thread));
    }
    // the lacing: a darker tongue down the cuff's top, two rows of steel eyelets, white laces criss-crossing through them
    const tongue = new THREE.Group();
    for (let k = 0; k < 14; k++) {
      const x = GL.CUFF0 + 92 + k * 18;
      const seg = new THREE.BoxGeometry(18.5, 2, 30);
      seg.translate(x, cuffTop(x, 0) + 0.2, 0);
      tongue.add(mesh(seg, leatherDk));
    }
    glove.add(tongue);
    const EX = [GL.CUFF0 + 104, GL.CUFF0 + 140, GL.CUFF0 + 176, GL.CUFF0 + 212, GL.CUFF0 + 248, GL.CUFF0 + 284, GL.CUFF0 + 318];
    const EZ = 22;
    const eye = (x: number, z: number) => [x, cuffTop(x, z) + 1.6, z] as [number, number, number];
    for (const x of EX) for (const z of [-EZ, EZ]) {
      const t = mesh(new THREE.TorusGeometry(4.6, 1.5, 8, 20), steel);
      t.rotation.x = Math.PI / 2;
      const [ex, ey, ez] = eye(x, z);
      t.position.set(ex, ey - 0.6, ez);
      glove.add(t);
    }
    for (let k = 0; k < EX.length - 1; k++) {
      for (const s of [1, -1]) {
        const a = eye(EX[k], s * EZ), b = eye(EX[k + 1], -s * EZ);
        const mid: [number, number, number] = [(a[0] + b[0]) / 2, Math.max(a[1], b[1]) + 2.6 + (s > 0 ? 1.2 : 0), 0];
        glove.add(wire([a, mid, b], 2.6, lace, false, 16));
      }
    }
    // the laces' ends, tied off in a flat knot by the last eyelets and tucked along the cuff
    const L = EX[EX.length - 1];
    const k0 = eye(L, EZ), k1 = eye(L, -EZ);
    glove.add(wire([k0, [L + 10, cuffTop(L + 10, 6) + 4, 6], [L + 30, cuffTop(L + 30, 10) + 3, 10], [L + 54, cuffTop(L + 54, 16) + 2.2, 16]], 2.6, lace, false, 24));
    glove.add(wire([k1, [L + 10, cuffTop(L + 10, -4) + 4.6, -4], [L + 26, cuffTop(L + 26, -16) + 3, -16], [L + 46, cuffTop(L + 46, -26) + 2.2, -26]], 2.6, lace, false, 24));
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
      const b = makeBundle({ seed: 90 + k * 5, flip: k % 2 === 1, strap: "" });
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
    n.add(mesh(ng, [noteMats[0], noteMats[1]]));
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
