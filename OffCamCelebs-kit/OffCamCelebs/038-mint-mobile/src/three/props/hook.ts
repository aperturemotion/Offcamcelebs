// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE HOOK IN 3-D (038) — "Ryan Reynolds' fifteen-dollar-a-month phone company sold for $1.35 billion. Every headline said so.
// We waited for the last payment." A modern smartphone, face up on a slab of warm oak, rings and buzzes toward the edge, tips
// over it and falls; its SIM tray pops and the nano SIM spins out at the lens in slow motion; the phone lands on the floor
// and its screen fills with the headlines, then a payment that stays pending.
//
// ★ A REAL CAMERA (this place only). A phone lying flat must be seen from ABOVE to be read, and the stage's registered camera
//   (stage.ts: a fixed vertical image plane, the eye looking along −z) cannot pitch: a horizontal screen seen through it is a
//   sliver, and an eye raised to look down through a vertical plane stretches it (a shift lens at 50°). So this model is built
//   in its own TABLE WORLD (px, y up, the floor at y 0, the table's front edge at z 0, z toward the viewer) and the whole
//   world is carried in front of the stage's eye by the inverse of a real camera's pose (`viewMatrix`: a position C looking at
//   a target T, no roll). The stage's eye (HOOK_EYE, on the frame's centre, D 2000: a 51° vertical field) is then a pinhole
//   at the camera's position, so the set flies a true camera: cranes, dollies, orbits, with true perspective and true
//   resolution in a close-up (a SIM card 12 mm long fills the frame because the camera is 4 cm from it, never by a 2-D
//   zoom). The studio light is fixed in the TABLE world (rig.dir is re-aimed through the camera every frame).
//
// THE PHONE (one object, "phone"; its parts are its own): a generic modern flagship (no maker's marks), 147 × 71.5 × 8.6 mm at
//   3 px/mm — a satin titanium frame (an extruded rounded slab, its flat sides between rounded edges) with antenna bands, a
//   front glass over the display (the screen is a canvas repainted per frame: hook_screen.ts), a frosted back glass, three
//   camera lenses standing proud of the back in a column (its real support when it lies face up: it rests on them and on
//   the bottom edge, tipped 1°), a flash, a power key and a volume rocker on the right side, a USB-C port, speaker and mic
//   holes on the bottom edge, and on the LEFT side the SIM tray's slot.
// THE SIM TRAY ("tray", built to slide in its slot: pierces "phone"): a steel cap flush with the frame (its ejector hole), and
//   the tray plate behind it with the nano SIM's cut-out. THE NANO SIM ("sim"): 12.3 × 8.8 × 0.67 mm with its cut corner, the
//   gold contact pads on one face, "MINT MOBILE" printed in plain type on the other (no logo).
// THE TABLE ("table"): one oak slab 40 mm thick with waterfall slab legs at both ends, standing on the floor; oiled grain
//   painted into its texture (no image). Lit by a pool: away from the phone the oak falls into the dark ground (alpha by its
//   distance from the pool's centre, as 035's cord fades into the dark), so the caption band stays clear above the table.
// THE FLOOR: the plain dark ground as a shadow catcher (no mirror: a reflected world needs a level camera).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, mesh, lathe, paintTex, liveTex, roundRect, slabOf, imagesReady, type Model } from "../stage";
import { rbox, col, hash, FACE, track, fitFont } from "../kit029";
import { paintScreen, TW as SCR_W, TH as SCR_H, type ScreenP } from "./hook_screen";

// ══ DIMENSIONS (px; 3 px = 1 mm) ═══════════════════════════════════════════════════════════════════
export const KPX = 3;
/** the phone: width, length, corner radius; its faces' heights over its centre plane (front glass, back glass, the lenses) */
export const PW = 214, PL = 441, PR = 30;
export const V_FRONT = 12.9, V_BACK = 12.6, LENS_H = 5;
export const V_LENS = V_BACK + LENS_H;
/** the lens column (phone local: x right, y toward the top end): centres, outer radius */
export const LENS_X = PW / 2 - 40, LENS_Y = [PL / 2 - 44, PL / 2 - 84, PL / 2 - 124], LENS_R = 16;
/** the SIM tray: its centre along the left side (local y), its cap's length, its travel when it pops */
export const TRAY_Y = 70, TRAY_LEN = 52, TRAY_OUT = 27;
/** the nano SIM: 12.3 × 8.8 × 0.67 mm */
export const SIM_L = 37, SIM_W = 26.4, SIM_T = 2;
/** the table: the top's height, its thickness, its width (x) and depth (z, back from the front edge), the edge's radius */
export const HT = 1350, TT = 120, WT = 2100, DT = 1050, RE = 6;

/** the stage's eye for this place: on the frame's centre, D 2000 (layer px) */
export const HOOK_EYE = { x: 540, y: 960, D: 2000 };
const EYE3 = new THREE.Vector3(HOOK_EYE.x, -HOOK_EYE.y, HOOK_EYE.D);
const UP = new THREE.Vector3(0, 1, 0);
const mTmp = new THREE.Matrix4(), mRot = new THREE.Matrix4();
const vC = new THREE.Vector3(), vT = new THREE.Vector3();
/** the TABLE WORLD → stage-world matrix of a camera at C looking at T (no roll): the inverse of its pose, then carried to
 *  the stage's eye */
export const viewMatrix = (C: readonly number[], T: readonly number[], out = new THREE.Matrix4()) => {
  vC.set(C[0], C[1], C[2]); vT.set(T[0], T[1], T[2]);
  mRot.lookAt(vC, vT, UP);                       // its columns: the camera's axes (−z toward T)
  mTmp.copy(mRot).setPosition(vC).invert();      // world → camera
  out.makeTranslation(EYE3.x, EYE3.y, EYE3.z).multiply(mTmp);
  return out;
};
const pTmp = new THREE.Vector3();
/** where a TABLE-WORLD point lands on the layer (px), and its scale (layer px per world px); behind the eye: s < 0 */
export const toLayer = (V: THREE.Matrix4, p: readonly number[]) => {
  pTmp.set(p[0], p[1], p[2]).applyMatrix4(V);
  const d = HOOK_EYE.D - pTmp.z;
  const s = HOOK_EYE.D / d;
  return { x: HOOK_EYE.x + (pTmp.x - EYE3.x) * s, y: HOOK_EYE.y - (pTmp.y - EYE3.y) * s, s, d };
};

export type Pose = { p: [number, number, number]; q: [number, number, number, number] };
/** cam: the camera (position, target) in the table world · phone: its centre's pose · tray: how far the tray is out (px) ·
 *  sim: the SIM's own pose once it has left its tray (else it rides in the tray) · screen: what the display shows, and its
 *  brightness · rest: 0…1, how settled the phone is on the table / the floor (its contact shadows) · level: (audit only) a
 *  level camera, so the FLOAT check's floor is horizontal */
export type HookP = {
  cam: { c: [number, number, number]; t: [number, number, number] };
  phone: Pose; tray: number; sim: (Pose & { vis: boolean }) | null;
  screen: ScreenP; bright: number;
};

// ══ TEXTURES ═══════════════════════════════════════════════════════════════════════════════════════
const smooth = (t: number) => t * t * (3 - 2 * t);
const n1 = (x: number, s: number) => { const i = Math.floor(x), f = x - i; return hash(i, s, 1) + (hash(i + 1, s, 1) - hash(i, s, 1)) * smooth(f); };
const n2 = (x: number, y: number, s: number) => {
  const i = Math.floor(x), j = Math.floor(y), fx = smooth(x - i), fy = smooth(y - j);
  const a = hash(i, j, s), b = hash(i + 1, j, s), c = hash(i, j + 1, s), d = hash(i + 1, j + 1, s);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
};
/** oiled oak, flat-sawn: growth rings as long wavering lines along the board, pores as fine dark dashes, the rays' flecks.
 *  (x, z) in board px; returns linear-ish sRGB 0…255 */
const oak = (X: number, Z: number, seed: number) => {
  const w = Z + 26 * (n1(X / 760, seed) - 0.5) * 2 + 9 * (n1(X / 210 + 3, seed + 1) - 0.5) * 2 + 2.5 * (n2(X / 45, Z / 30, seed + 2) - 0.5) * 2;
  const r = w / (10.5 + 4 * n1(Z / 140, seed + 3));
  const line = Math.pow(0.5 + 0.5 * Math.cos(2 * Math.PI * r + 1.6 * n2(X / 320, Z / 60, seed + 4)), 5);
  const tone = 0.5 * line + 0.16 * n2(X / 95, Z / 12, seed + 5) + 0.1 * n1(X / 1400, seed + 6);
  let R = 205 - 92 * tone, G = 152 - 76 * tone, B = 98 - 52 * tone;
  // pores: short dark dashes along the grain, denser in the late wood
  if (hash(Math.floor(X / 7), Math.floor(Z / 1.4), seed + 7) > 0.975 - 0.03 * line) { R *= 0.78; G *= 0.76; B *= 0.74; }
  // the rays' flecks (oak's silver grain), sparse and pale
  const fl = n2(X / 16, Z / 3.2, seed + 8);
  if (fl > 0.84) { const k = (fl - 0.84) * 3.2; R += 40 * k; G += 30 * k; B += 18 * k; }
  return [R, G, B];
};
const oakTex = (key: string, w: number, h: number, seed: number, sx: number, sz: number) => {
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  const g = c.getContext("2d")!;
  const im = g.createImageData(w, h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const [R, G, B] = oak(x * sx, y * sz, seed);
    const i = (y * w + x) * 4;
    im.data[i] = R; im.data[i + 1] = G; im.data[i + 2] = B; im.data[i + 3] = 255;
  }
  g.putImageData(im, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; t.name = key;
  return t;
};
let brushT: THREE.Texture | null = null;
const brushTex = () => {
  if (brushT) return brushT;
  const c = document.createElement("canvas"); c.width = c.height = 512;
  const g = c.getContext("2d")!;
  g.fillStyle = "rgb(120,120,120)"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 1400; i++) {
    const v = 80 + Math.round(90 * hash(i, 20, 5));
    g.fillStyle = `rgba(${v},${v},${v},0.5)`;
    g.fillRect(hash(i, 21, 5) * 512 - 80, hash(i, 22, 5) * 512, 80 + 380 * hash(i, 23, 5), 0.5 + hash(i, 24, 5));
  }
  brushT = new THREE.CanvasTexture(c); brushT.wrapS = brushT.wrapT = THREE.RepeatWrapping;
  return brushT;
};
let softT: THREE.Texture | null = null;
const softTex = () => {
  if (softT) return softT;
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
  const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, "#fff"); gr.addColorStop(0.4, "#b0b0b0"); gr.addColorStop(0.75, "#3a3a3a"); gr.addColorStop(1, "#000");
  g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  softT = new THREE.CanvasTexture(c);
  return softT;
};
/** a rounded-rect pad: a soft contact shadow the shape of the phone's footprint */
let padT: THREE.Texture | null = null;
const padTex = () => {
  if (padT) return padT;
  const c = document.createElement("canvas"); c.width = 256; c.height = 512;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 512);
  g.filter = "blur(18px)";
  g.fillStyle = "#fff";
  const r = 36, x = 40, y = 40, w = 176, h = 432;
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.fill();
  padT = new THREE.CanvasTexture(c);
  return padT;
};

/** ★ a material that falls into the dark away from the light's pool: alpha by the fragment's position in its OWN geometry's
 *  coordinates (the table's meshes carry their placement in their geometry, so `position` is the table's local xz) */
const pooled = <T extends THREE.Material>(m: T, c: [number, number], r: [number, number], key: string) => {
  m.transparent = true;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.poolC = { value: new THREE.Vector2(...c) };
    sh.uniforms.poolR = { value: new THREE.Vector2(...r) };
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec2 vPoolP;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvPoolP = position.xz;");
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec2 vPoolP;\nuniform vec2 poolC;\nuniform vec2 poolR;")
      .replace("#include <dithering_fragment>", `#include <dithering_fragment>
        float poolA = 1.0 - smoothstep( 0.42, 1.0, length( ( vPoolP - poolC ) / poolR ) );
        if ( poolA < 0.004 ) discard;
        gl_FragColor.a *= poolA;`);
  };
  m.customProgramCacheKey = () => key;
  return m;
};
/** a shadow catcher whose shadows fade out over an ellipse in its own plane (local x, y of a PlaneGeometry) */
const catcherMat = (opacity: number, c: [number, number], r: [number, number]) => {
  const m = new THREE.ShadowMaterial({ color: 0x000000, opacity, transparent: true, depthWrite: false });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.fadeC = { value: new THREE.Vector2(...c) };
    sh.uniforms.fadeR = { value: new THREE.Vector2(...r) };
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec2 vFadeP;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvFadeP = position.xy;");
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform vec2 fadeC;\nuniform vec2 fadeR;\nvarying vec2 vFadeP;")
      .replace("gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );",
        "gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) * ( 1.0 - smoothstep( 0.5, 1.0, length( ( vFadeP - fadeC ) / fadeR ) ) ) );");
  };
  m.customProgramCacheKey = () => "hk38-catcher";
  return m;
};

// ══ THE MODEL ═══════════════════════════════════════════════════════════════════════════════════════
/** the oak's pool of light (table xz: centre, radii) */
export const POOL_C: [number, number] = [-40, -110], POOL_R: [number, number] = [820, 360];

export const hookModel = () => (): Model<HookP> => {
  const root = new THREE.Group();
  const world = new THREE.Group();
  world.matrixAutoUpdate = false;
  root.add(world);

  // ── materials ──
  const ti = new THREE.MeshPhysicalMaterial({ color: col("#A9A39A"), metalness: 1, roughness: 0.36, roughnessMap: brushTex(), envMapIntensity: 1 });
  const tiDark = new THREE.MeshPhysicalMaterial({ color: col("#6E6A65"), metalness: 1, roughness: 0.42, envMapIntensity: 0.9 });
  const band = new THREE.MeshStandardMaterial({ color: col("#3A3836"), roughness: 0.6, metalness: 0 });
  const backGlass = new THREE.MeshPhysicalMaterial({ color: col("#3E4652"), roughness: 0.52, metalness: 0, clearcoat: 0.4, clearcoatRoughness: 0.55, envMapIntensity: 0.7 });
  const frontGlass = new THREE.MeshPhysicalMaterial({ color: col("#0B0C0E"), roughness: 0.04, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.02,
    transparent: true, opacity: 0.16, depthWrite: false, envMapIntensity: 1.5 });
  const hole = new THREE.MeshBasicMaterial({ color: 0x050505 });
  const lensGlass = new THREE.MeshPhysicalMaterial({ color: col("#07080C"), roughness: 0.06, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.4,
    iridescence: 0.6, iridescenceIOR: 1.6 });
  const steel = new THREE.MeshPhysicalMaterial({ color: col("#C9CDD2"), metalness: 1, roughness: 0.3, roughnessMap: brushTex(), envMapIntensity: 1 });

  // ══ THE TABLE ══
  const topTex = oakTex("hk38-oak-top", 3072, 1536, 11, WT / 3072, DT / 1536);
  const edgeTex = oakTex("hk38-oak-edge", 3072, 176, 23, WT / 3072, (TT * 2.2) / 176);
  const legTex = oakTex("hk38-oak-leg", 512, 1024, 37, DT / 512, HT / 1024);
  const oakM = (map: THREE.Texture, key: string) => pooled(new THREE.MeshPhysicalMaterial({ map, bumpMap: map, bumpScale: 0.5, roughness: 0.5, metalness: 0,
    clearcoat: 0.22, clearcoatRoughness: 0.5, envMapIntensity: 0.55 }), POOL_C, POOL_R, key);
  const mTop = oakM(topTex, "hk38-oak-a"), mEdge = oakM(edgeTex, "hk38-oak-b"), mPlain = oakM(legTex, "hk38-oak-c");
  const table = new THREE.Group();
  table.userData.obj = "table";
  world.add(table);
  {
    const g = rbox(WT, TT, DT, RE, { px: mPlain, nx: mPlain, top: mTop, bottom: mPlain, front: mEdge, back: mPlain }, 4).geometry;
    g.translate(0, HT - TT / 2, 0);            // front face at z 0, the top at HT
    table.add(mesh(g, [mPlain, mPlain, mTop, mPlain, mEdge, mPlain]));
    for (const s of [-1, 1]) {
      const lg = rbox(TT, HT - TT, DT, RE, mPlain, 3).geometry;
      lg.translate(s * (WT / 2 - TT / 2), (HT - TT) / 2, 0);
      table.add(mesh(lg, mPlain));
    }
  }

  // ══ THE FLOOR: a shadow catcher on the dark ground, and the phone's contact pad ══
  const floor = new THREE.Group();
  floor.userData.isFloor = true; floor.userData.noBounds = true;
  world.add(floor);
  const catcher = new THREE.Mesh(new THREE.PlaneGeometry(3600, 3200), catcherMat(0.5, [0, -500], [1100, 900]));
  catcher.rotation.x = -Math.PI / 2;           // its local y → world −z
  catcher.position.set(0, 0.2, 0);
  catcher.receiveShadow = true; catcher.renderOrder = 2;
  floor.add(catcher);
  const padMat = (a: number) => new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: padTex(), transparent: true, depthWrite: false, opacity: a, toneMapped: false });
  const floorPad = new THREE.Mesh(new THREE.PlaneGeometry(PW * 1.25, PL * 1.12), padMat(0));
  floorPad.rotation.x = -Math.PI / 2; floorPad.renderOrder = 1.5;
  floor.add(floorPad);
  const tablePad = new THREE.Mesh(new THREE.PlaneGeometry(PW * 1.22, PL * 1.1), padMat(0));
  tablePad.rotation.x = -Math.PI / 2; tablePad.renderOrder = 1.5;
  tablePad.userData.noBounds = true;   // not an object (no audit), and not a floor (the FLOAT check's floor is the real one)
  world.add(tablePad);
  const simPad = new THREE.Mesh(new THREE.PlaneGeometry(SIM_L * 1.6, SIM_L * 1.6), new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: softTex(), transparent: true, depthWrite: false, opacity: 0, toneMapped: false }));
  simPad.rotation.x = -Math.PI / 2; simPad.renderOrder = 1.5;
  floor.add(simPad);

  // ══ THE PHONE (local: x right, y toward the top end, z out of the screen; its centre at the origin) ══
  const phone = new THREE.Group();
  phone.userData.obj = "phone";
  phone.matrixAutoUpdate = false;
  world.add(phone);
  // the frame: an extruded rounded slab, its flat sides between rounded edges
  const FR_T = 22;
  const body = mesh(slabOf(roundRect(PW, PL, PR), FR_T, 3.4, 18), ti);
  body.geometry.translate(0, 0, FR_T / 2);
  phone.add(body);
  // the front glass (over the display) and the display itself, just under the glass's face
  const glassG = slabOf(roundRect(PW - 1.6, PL - 1.6, PR - 0.8), 1.8, 0.8, 18);
  glassG.translate(0, 0, V_FRONT);
  const glass = mesh(glassG, frontGlass, false, false);
  glass.renderOrder = 3;
  phone.add(glass);
  const scr = liveTex(SCR_W, SCR_H, 3);
  const dispM = new THREE.MeshBasicMaterial({ map: scr.tex, toneMapped: false });
  const dispG = new THREE.ShapeGeometry(roundRect(SCR_W, SCR_H, PR - 3), 18);
  {
    const uv = dispG.attributes.uv as THREE.BufferAttribute, pos = dispG.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, pos.getX(i) / SCR_W + 0.5, pos.getY(i) / SCR_H + 0.5);
  }
  const disp = mesh(dispG, dispM, false, false);
  disp.position.z = V_FRONT - 0.3;
  phone.add(disp);
  // the back glass, frosted
  const backG = slabOf(roundRect(PW - 1.6, PL - 1.6, PR - 0.8), 1.5, 0.6, 18);
  backG.translate(0, 0, -FR_T / 2 - 0.1);
  phone.add(mesh(backG, backGlass));
  // the lenses: a steel ring standing proud of the back, a black glass element inside it (closed with discs)
  for (const ly of LENS_Y) {
    const ring = mesh(lathe([[LENS_R - 2.4, 0], [LENS_R, 0], [LENS_R, LENS_H - 1], [LENS_R - 0.8, LENS_H], [LENS_R - 2.4, LENS_H], [LENS_R - 2.4, 0]], 48), tiDark);
    ring.rotation.x = -Math.PI / 2;            // its axis (+y) → −z
    ring.position.set(LENS_X, ly, -V_BACK);
    phone.add(ring);
    const cap = mesh(new THREE.CircleGeometry(LENS_R - 2.4, 40), lensGlass);
    cap.rotation.x = Math.PI;                  // facing −z
    cap.position.set(LENS_X, ly, -V_BACK - LENS_H + 0.6);
    phone.add(cap);
    const inner = mesh(new THREE.RingGeometry(5.5, 8.5, 40), new THREE.MeshPhysicalMaterial({ color: col("#1A2030"), roughness: 0.1, metalness: 0.4, envMapIntensity: 1.2 }), false, false);
    inner.rotation.x = Math.PI;
    inner.position.set(LENS_X, ly, -V_BACK - LENS_H + 0.5);
    phone.add(inner);
  }
  const flash = mesh(new THREE.CircleGeometry(5.5, 28), new THREE.MeshStandardMaterial({ color: col("#E9E2C8"), roughness: 0.35, emissive: col("#3a3420"), emissiveIntensity: 0.2 }), false, false);
  flash.rotation.x = Math.PI; flash.position.set(LENS_X - 36, LENS_Y[0], -V_BACK - 0.08);
  phone.add(flash);
  // the keys on the right side: a volume rocker and the power key
  const key = (y0: number, y1: number) => {
    const k = rbox(3.2, y1 - y0, 8, 1.4, ti, 2);
    k.position.set(PW / 2 + 1.2, (y0 + y1) / 2, 4);
    phone.add(k);
  };
  key(PL / 2 - 205, PL / 2 - 110); key(PL / 2 - 265, PL / 2 - 225);
  // antenna bands across the side frame
  for (const y of [PL / 2 - 52, -PL / 2 + 52]) for (const s of [-1, 1]) {
    const b = mesh(new THREE.PlaneGeometry(FR_T - 7, 3), band, false, false);
    b.rotation.y = s * Math.PI / 2;
    b.position.set(s * (PW / 2 + 0.06), y, 0);
    phone.add(b);
  }
  // the bottom edge: the USB-C port (a stadium with its tongue), the speaker holes, the mic
  const onBottom = (o: THREE.Object3D, x: number, z = 0) => { o.rotation.x = Math.PI / 2; o.position.set(x, -PL / 2 - 0.06, z); phone.add(o); };
  {
    const st = new THREE.Shape();
    const w = 26, h = 8.4, r = h / 2;
    st.moveTo(-w / 2 + r, -h / 2); st.lineTo(w / 2 - r, -h / 2); st.absarc(w / 2 - r, 0, r, -Math.PI / 2, Math.PI / 2, false);
    st.lineTo(-w / 2 + r, h / 2); st.absarc(-w / 2 + r, 0, r, Math.PI / 2, Math.PI * 1.5, false);
    onBottom(mesh(new THREE.ShapeGeometry(st, 12), hole, false, false), 0);
    const tongue = mesh(new THREE.PlaneGeometry(17, 1.8), new THREE.MeshStandardMaterial({ color: col("#4A4C50"), roughness: 0.5, metalness: 0.6 }), false, false);
    tongue.rotation.x = Math.PI / 2; tongue.position.set(0, -PL / 2 - 0.1, 0);
    phone.add(tongue);
    for (let i = 0; i < 6; i++) onBottom(mesh(new THREE.CircleGeometry(1.35, 14), hole, false, false), 34 + i * 6.2);
    onBottom(mesh(new THREE.CircleGeometry(1.1, 14), hole, false, false), -34);
    const topMic = mesh(new THREE.CircleGeometry(1.1, 14), hole, false, false);
    topMic.rotation.x = -Math.PI / 2; topMic.position.set(20, PL / 2 + 0.06, 0);
    phone.add(topMic);
  }
  // the SIM tray's slot on the left side (seen once the tray is out)
  {
    const s = roundRect(TRAY_LEN + 1.2, 9.4, 3);
    const slot = mesh(new THREE.ShapeGeometry(s, 10), hole, false, false);
    slot.rotation.y = -Math.PI / 2; slot.rotation.z = Math.PI / 2;   // in the y-z plane, facing −x
    slot.position.set(-PW / 2 - 0.08, TRAY_Y, 0);
    phone.add(slot);
  }

  // ══ THE SIM TRAY (its own object, built to slide in its slot) ══
  const tray = new THREE.Group();
  tray.userData.obj = "tray";
  tray.userData.pierces = ["phone"];
  phone.add(tray);
  {
    const cap = rbox(2.6, TRAY_LEN, 8.4, 1.2, ti, 2);
    cap.position.set(-PW / 2 - 0.5 + 1.3, TRAY_Y, 4.2);       // its outer face 0.5 proud of the side
    tray.add(cap);
    const pin = mesh(new THREE.CircleGeometry(0.9, 12), hole, false, false);
    pin.rotation.y = -Math.PI / 2; pin.position.set(-PW / 2 - 0.55, TRAY_Y + TRAY_LEN / 2 - 7, 0);
    tray.add(pin);
    // the plate: steel, the SIM's cut-out through it (the SIM sits in it with 0.4 px all round)
    const plate = roundRect(46, TRAY_LEN - 4, 2.2);
    const cut = new THREE.Path();
    const hw = SIM_W / 2 + 0.4, hl = SIM_L / 2 + 0.4;
    cut.moveTo(-hw, -hl); cut.lineTo(hw, -hl); cut.lineTo(hw, hl - 4.2); cut.lineTo(hw - 4.2, hl); cut.lineTo(-hw, hl); cut.lineTo(-hw, -hl);
    plate.holes.push(cut);
    const pg = slabOf(plate, 1.4, 0.3, 8);
    pg.translate(0, 0, 0.7);
    const pm = mesh(pg, steel);
    pm.position.set(-PW / 2 + 1 + 23, TRAY_Y, 0);
    tray.add(pm);
  }

  // ══ THE NANO SIM ══
  const sim = new THREE.Group();
  sim.userData.obj = "sim";
  sim.userData.pierces = ["phone", "tray"];
  sim.matrixAutoUpdate = false;
  world.add(sim);
  const simShape = (() => {
    const s = new THREE.Shape();
    const hw = SIM_W / 2, hl = SIM_L / 2, c = 4;
    s.moveTo(-hw, -hl); s.lineTo(hw, -hl); s.lineTo(hw, hl - c); s.lineTo(hw - c, hl); s.lineTo(-hw, hl); s.lineTo(-hw, -hl);
    return s;
  })();
  {
    const g = slabOf(simShape, SIM_T, 0.25, 4);
    g.translate(0, 0, SIM_T / 2);
    sim.add(mesh(g, new THREE.MeshPhysicalMaterial({ color: col("#F2F0EA"), roughness: 0.42, metalness: 0, clearcoat: 0.2, envMapIntensity: 0.6 })));
    // the contacts: gold pads in the classic eight-pad pattern, painted at the close-up's resolution
    const S = 28;
    const pads = paintTex("hk38-sim-pads", SIM_W, SIM_L, (c) => {
      c.fillStyle = "#000"; c.fillRect(0, 0, SIM_W, SIM_L);
      const x0 = 2.6, y0 = 3.4, w = SIM_W - 5.2, h = SIM_L - 6.8;
      c.fillStyle = "#fff"; rrPath(c, x0, y0, w, h, 2.2); c.fill();
      c.fillStyle = "#000";
      // the gaps between the pads (a centre spine, three rows each side, a curved split)
      c.fillRect(x0 + w / 2 - 0.45, y0 + h * 0.18, 0.9, h * 0.64);
      for (const fy of [0.34, 0.5, 0.66]) { c.fillRect(x0, y0 + h * fy - 0.3, w * 0.3, 0.6); c.fillRect(x0 + w * 0.7, y0 + h * fy - 0.3, w * 0.3, 0.6); }
      c.lineWidth = 0.6; c.strokeStyle = "#000";
      c.beginPath(); c.moveTo(x0 + w * 0.3, y0 + h * 0.34); c.quadraticCurveTo(x0 + w * 0.36, y0 + h * 0.18, x0 + w / 2, y0 + h * 0.18);
      c.quadraticCurveTo(x0 + w * 0.64, y0 + h * 0.18, x0 + w * 0.7, y0 + h * 0.34); c.stroke();
      c.beginPath(); c.moveTo(x0 + w * 0.3, y0 + h * 0.66); c.quadraticCurveTo(x0 + w * 0.36, y0 + h * 0.82, x0 + w / 2, y0 + h * 0.82);
      c.quadraticCurveTo(x0 + w * 0.64, y0 + h * 0.82, x0 + w * 0.7, y0 + h * 0.66); c.stroke();
    }, S);
    pads.colorSpace = THREE.NoColorSpace;
    const goldM = new THREE.MeshPhysicalMaterial({ color: col("#E8BE5A"), metalness: 1, roughness: 0.22, envMapIntensity: 1.3, alphaMap: pads, transparent: true, depthWrite: false });
    const padG = new THREE.ShapeGeometry(simShape, 4);
    fixUV(padG, SIM_W, SIM_L);
    const pm = mesh(padG, goldM, false, false);
    pm.position.z = SIM_T / 2 + 0.06;
    pm.renderOrder = 4;
    sim.add(pm);
    // the other face: the carrier's name as Mint sets it, lowercase heavy type in its green (the fox mark never: the brief),
    // and a greeked line where a card's batch code sits (no digits)
    const print = paintTex("hk38-sim-print-v2", SIM_W, SIM_L, (c) => {
      c.fillStyle = "#F4F3EE"; c.fillRect(0, 0, SIM_W, SIM_L);
      c.save();
      c.translate(SIM_W / 2, SIM_L / 2); c.rotate(-Math.PI / 2);
      c.fillStyle = "#2B6744"; c.textAlign = "center"; c.textBaseline = "middle";
      track(c, -0.1);
      fitFont(c, 800, 6.4, "mint", SIM_L - 12);
      c.fillText("mint", 0, -3.4);
      fitFont(c, 800, 4.6, "mobile", SIM_L - 14);
      c.fillText("mobile", 0, 2.6);
      track(c, 0);
      c.fillStyle = "rgba(43,103,68,0.32)";
      c.fillRect(-9, 8.4, 18, 0.8);
      c.restore();
    }, S);
    // (the body's own outline, seen from behind: its u runs right to left so the type reads from that side; drawn double-sided)
    const printM = new THREE.MeshStandardMaterial({ map: print, roughness: 0.5, metalness: 0, envMapIntensity: 0.5, side: THREE.DoubleSide });
    const prG = new THREE.ShapeGeometry(simShape, 4);
    fixUV(prG, SIM_W, SIM_L, true);
    const pr = mesh(prG, printM, false, false);
    pr.position.z = -SIM_T / 2 - 0.06;
    sim.add(pr);
  }
  /** the SIM's seat in its tray (phone local): its centre, flat in the plate */
  const SIM_SEAT = new THREE.Matrix4().makeTranslation(-PW / 2 + 1 + 23 + 0.2, TRAY_Y, 0);

  const V = new THREE.Matrix4(), mP = new THREE.Matrix4(), mS = new THREE.Matrix4();
  const qP = new THREE.Quaternion(), sOne = new THREE.Vector3(1, 1, 1), vP = new THREE.Vector3();
  const KEY_W = new THREE.Vector3(-0.42, 0.78, 0.46).normalize();
  const keyDir = new THREE.Vector3();
  const model: Model<HookP> = { root, rig: { dir: [-0.5, 0.75, 0.43] } };
  let lastScreen = "";
  model.update = (p) => {
    // the camera: the world carried in front of the eye (an audit flag levels it, so the FLOAT check's floor is flat)
    const lvl = (window as unknown as { __v34flags?: { hookLevel?: boolean } }).__v34flags?.hookLevel;
    const T = lvl ? [p.cam.t[0], p.cam.c[1], p.cam.t[2]] : p.cam.t;
    viewMatrix(p.cam.c, T, V);
    world.matrix.copy(V);
    // the key light is fixed in the table world: aim it through the camera
    keyDir.copy(KEY_W).transformDirection(V);
    model.rig!.dir = [keyDir.x, keyDir.y, keyDir.z];
    // the phone
    qP.set(...p.phone.q);
    vP.set(...p.phone.p);
    mP.compose(vP, qP, sOne);
    phone.matrix.copy(mP);
    tray.position.x = -p.tray;
    // the SIM: in its tray until it leaves, then its own flight
    if (p.sim) {
      sim.visible = p.sim.vis;
      mS.compose(new THREE.Vector3(...p.sim.p), new THREE.Quaternion(...p.sim.q), sOne);
      sim.matrix.copy(mS);
    } else {
      sim.visible = true;
      sim.matrix.copy(mP).multiply(new THREE.Matrix4().makeTranslation(-p.tray, 0, 0)).multiply(SIM_SEAT);
    }
    // the screen (repainted only when what it shows changes)
    // (and once more when the photo and the marks have decoded: a texture painted before them would keep the placeholder)
    const k = JSON.stringify(p.screen) + (imagesReady() ? "|img" : "");
    if (k !== lastScreen) { lastScreen = k; scr.paint((g) => paintScreen(g, p.screen)); }
    dispM.color.setScalar(p.bright);
    // the contact pads: under the phone where it lies, darker as it nears its surface
    const h = p.phone.p[1];
    const onTable = Math.max(0, 1 - Math.abs(h - (HT + V_BACK + 3)) / 30);
    const onFloor = Math.max(0, 1 - Math.abs(h - (V_BACK + 3)) / 60);
    const yaw = new THREE.Euler().setFromQuaternion(qP, "YXZ").y;
    tablePad.position.set(p.phone.p[0], HT + 0.25, p.phone.p[2]);
    tablePad.rotation.set(-Math.PI / 2, 0, yaw);
    (tablePad.material as THREE.MeshBasicMaterial).opacity = 0.42 * onTable * onTable;
    tablePad.visible = onTable > 0.01;
    floorPad.position.set(p.phone.p[0], 0.3, p.phone.p[2]);
    floorPad.rotation.set(-Math.PI / 2, 0, yaw);
    (floorPad.material as THREE.MeshBasicMaterial).opacity = 0.5 * onFloor * onFloor;
    floorPad.visible = onFloor > 0.01;
    if (p.sim && p.sim.vis && p.sim.p[1] < 60) {
      simPad.visible = true;
      simPad.position.set(p.sim.p[0], 0.35, p.sim.p[2]);
      (simPad.material as THREE.MeshBasicMaterial).opacity = 0.45 * Math.max(0, 1 - p.sim.p[1] / 60);
    } else simPad.visible = false;
  };
  return model;
};

// ── helpers ──
const rrPath = (c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
  c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
};
const fixUV = (g: THREE.BufferGeometry, w: number, h: number, mirror = false) => {
  const uv = g.attributes.uv as THREE.BufferAttribute, pos = g.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (mirror ? -1 : 1) * pos.getX(i) / w + 0.5, pos.getY(i) / h + 0.5);
};
void FACE;
