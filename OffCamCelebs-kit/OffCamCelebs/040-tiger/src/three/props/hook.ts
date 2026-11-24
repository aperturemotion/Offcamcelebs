// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE HOOK IN 3-D (040) — "Tiger Woods turned down $800 million to join LIV Golf. Every headline said so. We went looking for
// the offer." A real golf ball rolls across a close-mown putting green, lips out of the cup, and a giant presentation cheque
// drops on the green behind it.
//
// ★ A REAL CAMERA (as 039's hook): the model is built in its own GREEN WORLD (px, y up, the green's surface at y 0, x to the
//   right, z toward the first camera; the cup's axis is the origin) and the whole world is carried in front of the stage's
//   eye by the inverse of a real camera's pose (`viewMatrix`: a position C looking at a target T, no roll). The key light is
//   fixed in the green world (rig.dir is re-aimed through the camera every frame).
//
// ★ THE SHAPE FIRST (the brief, 2026-11-23), at 2 px per mm:
//   · THE BALL ("ball"): 42.7 mm, its cover pressed with 332 shallow round dimples (a Fibonacci lattice, as real balls lay
//     out their near-uniform pattern): each a spherical bowl 3.9 mm across, its lip rounded into the land between; the
//     dimples are in the GEOMETRY (the silhouette is scalloped), their normals analytic. A slightly warm off-white urethane
//     cover under a clear gloss, a faint printed alignment line round its equator.
//   · THE CUP (part of the green): a 108 mm hole cut in the turf, its wall the cut profile (the grass and thatch, then root-
//     laced sandy soil) down to the white plastic liner set 25 mm below the surface; the liner's rim, its wall, its floor with
//     the flagstick's ferrule socket. The turf's blades overhang the cut edge.
//   · THE GREEN: close-mown bent grass, a fine tile of blades under a field of real 3-D blades round the ball's line and the
//     cup, low-frequency tone and the mower's stripes, falling into the dark ground away from its pool of light.
//   · THE CHEQUE ("cheque"): a 760 × 380 mm presentation cheque, 5 mm foam board (paper skins over a white foam core, its
//     edges eased), printed with a bank-cheque layout: a guilloche border, PAY TO THE ORDER OF and a BLANK payee line, the
//     amount box $800,000,000, EIGHT HUNDRED MILLION DOLLARS, memo LIV GOLF, an EMPTY signature line. It bows a hair, one
//     corner lifts and its corners are worn.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, mesh, paintTex, type Model } from "../stage";
import { col, hash, fitFont, font, track } from "../kit029";

// ══ DIMENSIONS (px; 2 px per mm) ══════════════════════════════════════════════════════════════════
export const KPX = 2;
/** g = 9.81 m/s² in px per PHYSICAL frame² */
export const G = (9810 * KPX) / 900;
/** the ball's radius (42.7 mm across) */
export const RB = 42.7;
/** the ball rests this far up in the turf (it sits on the blades' tips) */
export const LIFT = 0.6;
/** the hole's radius (108 mm across), the liner's top below the surface, its inner radius and its floor */
export const RC = 108;
export const LINER_TOP = -50, LINER_IN = 102, LINER_BOT = -330;
/** the cheque: its size (x across, z deep) and its board's thickness */
export const CHQ = { W: 1520, D: 760, T: 10 } as const;
/** its bow at the middle and its lifted corner (the far right one), px */
export const CHQ_BOW = 2.2, CHQ_CURL = { r: 210, lift: 5 } as const;
/** the cheque's warp at board-local (x, z): what its underside is lifted by off a flat floor */
export const chqWarp = (x: number, z: number) => {
  const u = (2 * x) / CHQ.W, v = (2 * z) / CHQ.D;
  let y = CHQ_BOW * (1 - u * u) * Math.sqrt(Math.max(0, 1 - v * v));
  const d = Math.hypot(x - CHQ.W / 2, z + CHQ.D / 2);
  if (d < CHQ_CURL.r) y += CHQ_CURL.lift * ((CHQ_CURL.r - d) / CHQ_CURL.r) ** 2;
  return y;
};
/** the cheque's half extents round its pose's centre (the centre of its underside's plane, lifted half its thickness) */
export const CHQ_HE: [number, number, number] = [CHQ.W / 2, (CHQ.T + CHQ_BOW + CHQ_CURL.lift) / 2, CHQ.D / 2];
/** where the print sits on the cheque's face (print px, from its top-left: the top is the far edge, −z) */
export const PRINT = {
  amount: [776, 236, 1440, 408] as const,
  payee: [96, 300, 740, 380] as const,
  words: [96, 450, 1440, 530] as const,
  memo: [96, 600, 780, 680] as const,
};
export const AMOUNT_TEXT = "$800,000,000";

/** the stage's eye for this place: on the frame's centre, D 2000 (layer px) */
export const HOOK_EYE = { x: 540, y: 960, D: 2000 };
const EYE3 = new THREE.Vector3(HOOK_EYE.x, -HOOK_EYE.y, HOOK_EYE.D);
const UP = new THREE.Vector3(0, 1, 0);
const mTmp = new THREE.Matrix4(), mRot = new THREE.Matrix4();
const vC = new THREE.Vector3(), vT = new THREE.Vector3();
/** the GREEN WORLD → stage-world matrix of a camera at C looking at T (no roll) */
export const viewMatrix = (C: readonly number[], T: readonly number[], out = new THREE.Matrix4()) => {
  vC.set(C[0], C[1], C[2]); vT.set(T[0], T[1], T[2]);
  mRot.lookAt(vC, vT, UP);
  mTmp.copy(mRot).setPosition(vC).invert();
  out.makeTranslation(EYE3.x, EYE3.y, EYE3.z).multiply(mTmp);
  return out;
};
const pTmp = new THREE.Vector3();
/** where a GREEN-WORLD point lands on the layer (px), and its scale; behind the eye: s < 0 */
export const toLayer = (V: THREE.Matrix4, p: readonly number[]) => {
  pTmp.set(p[0], p[1], p[2]).applyMatrix4(V);
  const d = HOOK_EYE.D - pTmp.z;
  const s = HOOK_EYE.D / d;
  return { x: HOOK_EYE.x + (pTmp.x - EYE3.x) * s, y: HOOK_EYE.y - (pTmp.y - EYE3.y) * s, s, d };
};

export type BodyP = { p: [number, number, number]; q: [number, number, number, number]; vis: boolean };
/** cam: the camera · ball · cheque · pads: the contact shadows' strength under the ball and the cheque (0 … 1) */
export type HookP = { cam: { c: [number, number, number]; t: [number, number, number] }; ball: BodyP; cheque: BodyP; ballPad: number; chqPad: number;
  /** the green's pool of light: its centre (xz) and radii (x; z on its far side, −z; z on its near side): the turf falls
   *  into the dark ground beyond it */
  poolC: [number, number]; poolR: [number, number, number] };
/** the pool's alpha at a green-world point (as the shader draws it) */
export const poolAlpha = (c: readonly number[], r: readonly number[], x: number, z: number) => {
  const dz = z - c[1], q = Math.hypot((x - c[0]) / r[0], dz / (dz < 0 ? r[1] : r[2]));
  const t = Math.min(1, Math.max(0, (q - POOL_IN) / (1 - POOL_IN)));
  return 1 - t * t * (3 - 2 * t);
};
/** the pool's fall: full inside POOL_IN of its radii, gone at its rim; below 5% beyond POOL_FAR (what the checks call its edge) */
export const POOL_IN = 0.62, POOL_FAR = 0.95;
/** the turf's extent (it never ends inside the widest pool) */
const TURF = { x0: -2600, x1: 2600, z0: -3200, z1: 2800 } as const;
/** the region of real 3-D blades (xz box) and the cheque's footprint at rest (no blades stand under the board) */
export const CHQ_REST: [number, number, number] = [40, 0, -720];

// ══ NOISE ═══════════════════════════════════════════════════════════════════════════════════════════
const smooth = (t: number) => t * t * (3 - 2 * t);
const n2 = (x: number, y: number, s: number) => {
  const i = Math.floor(x), j = Math.floor(y), fx = smooth(x - i), fy = smooth(y - j);
  const a = hash(i, j, s), b = hash(i + 1, j, s), c = hash(i, j + 1, s), d = hash(i + 1, j + 1, s);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
};

// ══ TEXTURES ═══════════════════════════════════════════════════════════════════════════════════════
/** the turf's tile: close-mown bent grass seen from above (blade tips, a little thatch between), tileable, TILE px of green */
const TILE = 360;
let turfT: { map: THREE.CanvasTexture; bump: THREE.CanvasTexture } | null = null;
const turfTex = () => {
  if (turfT) return turfT;
  const S = 1024;
  const c = document.createElement("canvas"); c.width = c.height = S;
  const g = c.getContext("2d")!;
  g.fillStyle = "#2E5424"; g.fillRect(0, 0, S, S);
  // soft cells of tone (the turf's own unevenness), wrapped
  for (let i = 0; i < 900; i++) {
    const x = hash(i, 1, 21) * S, y = hash(i, 2, 21) * S, r = 6 + 22 * hash(i, 3, 21);
    const l = hash(i, 4, 21);
    g.fillStyle = l > 0.5 ? `rgba(84,128,56,${0.05 + 0.08 * hash(i, 5, 21)})` : `rgba(22,44,18,${0.05 + 0.08 * hash(i, 5, 21)})`;
    for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) { g.beginPath(); g.arc(x + ox, y + oy, r, 0, Math.PI * 2); g.fill(); }
  }
  // the blades' tips: short strokes, most leaning with the mower's grain (+z), each its own green
  g.lineCap = "round";
  for (let i = 0; i < 70000; i++) {
    const x = hash(i, 6, 22) * S, y = hash(i, 7, 22) * S;
    const a = Math.PI / 2 + (hash(i, 8, 22) - 0.5) * 2.2;
    const L = 3 + 6 * hash(i, 9, 22);
    const t = hash(i, 10, 22);
    const R = Math.round(38 + 70 * t + 20 * hash(i, 11, 22)), Gc = Math.round(78 + 80 * t), B = Math.round(28 + 34 * t);
    g.strokeStyle = `rgba(${R},${Gc},${B},${0.55 + 0.4 * hash(i, 12, 22)})`;
    g.lineWidth = 1 + 1.3 * hash(i, 13, 22);
    const dx = Math.cos(a) * L, dy = Math.sin(a) * L;
    for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) {
      if (x + ox < -12 || x + ox > S + 12 || y + oy < -12 || y + oy > S + 12) continue;
      g.beginPath(); g.moveTo(x + ox, y + oy); g.lineTo(x + ox + dx, y + oy + dy); g.stroke();
    }
  }
  // dark gaps (the thatch showing between the blades)
  for (let i = 0; i < 9000; i++) {
    g.fillStyle = `rgba(14,26,10,${0.25 + 0.3 * hash(i, 14, 23)})`;
    g.fillRect(hash(i, 15, 23) * S, hash(i, 16, 23) * S, 1.2 + 1.5 * hash(i, 17, 23), 1.2 + 1.5 * hash(i, 18, 23));
  }
  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace; map.wrapS = map.wrapT = THREE.RepeatWrapping; map.anisotropy = 8;
  const bump = new THREE.CanvasTexture(c);
  bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
  turfT = { map, bump };
  return turfT;
};
/** the hole's cut wall, round its circumference (u) from the surface down (v): grass and thatch, then root-laced sandy soil */
const WALL_H = 58;
const wallTex = () => paintTex("hook40-wall", 1024, 120, (g) => {
  const W = 1024, H = 120, k = H / WALL_H;
  const gr = g.createLinearGradient(0, 0, 0, H);
  gr.addColorStop(0, "#3A5A26"); gr.addColorStop(0.1, "#33452A"); gr.addColorStop(0.2, "#4A3A28");
  gr.addColorStop(0.45, "#6A5236"); gr.addColorStop(1, "#4E3B27");
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  // sand grains and moist darker crumbs
  for (let i = 0; i < 9000; i++) {
    const y = (0.18 + 0.82 * hash(i, 1, 31)) * H;
    g.fillStyle = hash(i, 2, 31) > 0.55 ? `rgba(190,165,120,${0.2 + 0.3 * hash(i, 3, 31)})` : `rgba(30,20,12,${0.2 + 0.3 * hash(i, 3, 31)})`;
    g.fillRect(hash(i, 4, 31) * W, y, 0.8 + 1.6 * hash(i, 5, 31), 0.8 + 1.4 * hash(i, 6, 31));
  }
  // roots: pale threads hanging down from the thatch
  g.lineCap = "round";
  for (let i = 0; i < 520; i++) {
    let x = hash(i, 7, 32) * W, y = (0.06 + 0.1 * hash(i, 8, 32)) * H;
    const L = (6 + 30 * hash(i, 9, 32)) * k;
    g.strokeStyle = `rgba(214,196,160,${0.25 + 0.35 * hash(i, 10, 32)})`; g.lineWidth = 0.5 + 0.7 * hash(i, 11, 32);
    g.beginPath(); g.moveTo(x, y);
    for (let s = 0; s < 6; s++) { x += (hash(i, 12 + s, 32) - 0.5) * 6; y += L / 6; g.lineTo(x, y); }
    g.stroke();
  }
  // the thatch line: a ragged band of dead blades and crowns just under the green
  for (let i = 0; i < 3000; i++) {
    const t = hash(i, 20, 33);
    g.strokeStyle = t > 0.5 ? `rgba(70,96,44,0.6)` : `rgba(96,78,48,0.55)`;
    g.lineWidth = 0.8;
    const x = hash(i, 21, 33) * W, y = hash(i, 22, 33) * 0.16 * H;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + (hash(i, 23, 33) - 0.5) * 8, y + 2 + 6 * hash(i, 24, 33)); g.stroke();
  }
  // the bottom: shade toward the liner (the wall's own occlusion)
  const ao = g.createLinearGradient(0, H * 0.7, 0, H);
  ao.addColorStop(0, "rgba(0,0,0,0)"); ao.addColorStop(1, "rgba(0,0,0,0.35)");
  g.fillStyle = ao; g.fillRect(0, 0, W, H);
}, 1);
/** the liner along its profile (v: 0 the rim's outer edge → 1 the floor's centre): white plastic, soil-dusted near the rim,
 *  deepening into the cup's own shade */
const linerTex = () => paintTex("hook40-liner", 64, 512, (g) => {
  const gr = g.createLinearGradient(0, 0, 0, 512);
  gr.addColorStop(0, "#E9E7DF"); gr.addColorStop(0.06, "#DCD7CB"); gr.addColorStop(0.14, "#EDEBE4"); gr.addColorStop(0.7, "#D2D0CA");
  gr.addColorStop(0.86, "#A9A7A2"); gr.addColorStop(1, "#8C8A86");
  g.fillStyle = gr; g.fillRect(0, 0, 64, 512);
  for (let i = 0; i < 500; i++) {
    g.fillStyle = `rgba(96,74,46,${0.12 + 0.2 * hash(i, 1, 41)})`;
    g.fillRect(hash(i, 2, 41) * 64, (0.02 + 0.2 * hash(i, 3, 41) ** 2) * 512, 0.6 + hash(i, 4, 41), 0.6 + 2 * hash(i, 5, 41));
  }
}, 1);
/** the ball's cover: a slightly warm off-white with the faintest mottle, the alignment line printed round its equator */
const ballTex = () => paintTex("hook40-ball", 2048, 1024, (g) => {
  g.fillStyle = "#F1EFE8"; g.fillRect(0, 0, 2048, 1024);
  for (let i = 0; i < 2400; i++) {
    g.fillStyle = `rgba(${hash(i, 1, 51) > 0.5 ? "200,196,186" : "255,255,252"},${0.05 + 0.06 * hash(i, 2, 51)})`;
    g.beginPath(); g.arc(hash(i, 3, 51) * 2048, hash(i, 4, 51) * 1024, 4 + 16 * hash(i, 5, 51), 0, Math.PI * 2); g.fill();
  }
  // the alignment line: 1 mm of black ink round 150° of the equator, ink a little uneven, its ends rounded
  const y = 512, half = 7, x0 = 2048 * 0.29, x1 = 2048 * 0.71;
  g.fillStyle = "rgba(28,30,34,0.72)";
  g.beginPath(); g.moveTo(x0, y - half); g.lineTo(x1, y - half); g.arc(x1, y, half, -Math.PI / 2, Math.PI / 2); g.lineTo(x0, y + half); g.arc(x0, y, half, Math.PI / 2, -Math.PI / 2); g.fill();
  for (let i = 0; i < 400; i++) {
    g.fillStyle = `rgba(241,239,232,${0.2 + 0.4 * hash(i, 6, 52)})`;
    g.fillRect(x0 + hash(i, 7, 52) * (x1 - x0), y - half + hash(i, 8, 52) * 2 * half, 1 + 2 * hash(i, 9, 52), 1);
  }
}, 1);
/** a soft round pad (contact shadows) */
let softT: THREE.Texture | null = null;
const softTex = () => {
  if (softT) return softT;
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d")!;
  const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, "#fff"); gr.addColorStop(0.3, "#cfcfcf"); gr.addColorStop(0.65, "#3a3a3a"); gr.addColorStop(1, "#000");
  g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  softT = new THREE.CanvasTexture(c);
  return softT;
};
let softRT: THREE.Texture | null = null;
const softRectTex = () => {
  if (softRT) return softRT;
  const c = document.createElement("canvas"); c.width = 512; c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000"; g.fillRect(0, 0, 512, 256);
  g.filter = "blur(14px)";
  g.fillStyle = "#fff"; g.fillRect(34, 34, 444, 188);
  softRT = new THREE.CanvasTexture(c);
  return softRT;
};

// ══ THE CHEQUE'S PRINT ═══════════════════════════════════════════════════════════════════════════════
const INK = "#1B4A33", FILL = "#161A18";
const chequeTex = () => paintTex("hook40-cheque", CHQ.W, CHQ.D, (g) => {
  const W = CHQ.W, H = CHQ.D;
  // the security tint: a pale sage, lighter toward the middle, a fine wave pantograph over it
  const bg = g.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#E3EBDB"); bg.addColorStop(0.5, "#EEF2E6"); bg.addColorStop(1, "#E1E9D8");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  g.strokeStyle = "rgba(60,110,80,0.10)"; g.lineWidth = 1;
  for (let k = 0; k < 120; k++) {
    g.beginPath();
    for (let x = 0; x <= W; x += 8) { const y = k * 7 + 9 * Math.sin(x / 61 + k * 0.33) + 4 * Math.sin(x / 23 - k * 0.7); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); }
    g.stroke();
  }
  // a guilloche rosette, faint, behind the amount's side
  g.save(); g.translate(1100, 470); g.strokeStyle = "rgba(40,100,70,0.08)"; g.lineWidth = 1.2;
  for (let k = 0; k < 36; k++) {
    g.beginPath();
    for (let a = 0; a <= Math.PI * 2 + 0.01; a += 0.02) { const r = 150 + 40 * Math.sin(7 * a + k * 0.175); const x = r * Math.cos(a + k * 0.0873), y = r * 0.62 * Math.sin(a + k * 0.0873); if (a === 0) g.moveTo(x, y); else g.lineTo(x, y); }
    g.stroke();
  }
  g.restore();
  // the printed border: an outer rule, a guilloche band of crossing waves, an inner rule
  const O = 26, B = 30;
  g.strokeStyle = INK; g.lineWidth = 3; g.strokeRect(O, O, W - 2 * O, H - 2 * O);
  g.lineWidth = 1.5; g.strokeRect(O + B, O + B, W - 2 * (O + B), H - 2 * (O + B));
  const band = (x0: number, y0: number, x1: number, y1: number) => {
    const L = Math.hypot(x1 - x0, y1 - y0), ux = (x1 - x0) / L, uy = (y1 - y0) / L, nx = -uy, ny = ux;
    for (const ph of [0, Math.PI]) for (const amp of [10, 6]) {
      g.beginPath();
      for (let s = 0; s <= L; s += 3) { const o = amp * Math.sin(s / 9 + ph); const x = x0 + ux * s + nx * o, y = y0 + uy * s + ny * o; if (s === 0) g.moveTo(x, y); else g.lineTo(x, y); }
      g.strokeStyle = `rgba(27,74,51,${amp > 8 ? 0.55 : 0.35})`; g.lineWidth = 1; g.stroke();
    }
  };
  const m = O + B / 2;
  band(m, m, W - m, m); band(m, H - m, W - m, H - m); band(m, m, m, H - m); band(W - m, m, W - m, H - m);
  // the layout's labels (pre-printed, in the border's green) and its rules
  g.fillStyle = INK; g.textBaseline = "alphabetic"; g.textAlign = "left";
  track(g, 3); font(g, 700, 26); g.fillText("DATE", 1060, 178); track(g, 0);
  g.fillRect(1146, 180, 290, 2.4);
  // PAY TO THE ORDER OF ____ (the payee line is BLANK)
  track(g, 2.5); font(g, 700, 30); g.fillText("PAY TO THE", PRINT.payee[0], 318); g.fillText("ORDER OF", PRINT.payee[0], 356); track(g, 0);
  g.fillRect(296, 358, 448, 2.6);
  // the amount box: a ruled frame with the printed figure
  const [ax0, ay0, ax1, ay1] = PRINT.amount;
  g.fillStyle = "rgba(255,255,250,0.72)"; g.fillRect(ax0, ay0, ax1 - ax0, ay1 - ay0);
  g.strokeStyle = INK; g.lineWidth = 3.2; g.strokeRect(ax0, ay0, ax1 - ax0, ay1 - ay0);
  g.lineWidth = 1.2; g.strokeRect(ax0 + 7, ay0 + 7, ax1 - ax0 - 14, ay1 - ay0 - 14);
  g.fillStyle = FILL; g.textAlign = "center";
  fitFont(g, 800, 150, AMOUNT_TEXT, ax1 - ax0 - 44);
  g.fillText(AMOUNT_TEXT, (ax0 + ax1) / 2, ay1 - 40);
  // the words line: EIGHT HUNDRED MILLION ____ DOLLARS
  g.fillStyle = INK; g.textAlign = "left";
  g.fillRect(PRINT.words[0], 512, 1170, 2.6);
  track(g, 2.5); font(g, 700, 30); g.fillText("DOLLARS", 1292, 510); track(g, 0);
  g.fillStyle = FILL; track(g, 1.5); fitFont(g, 800, 62, "EIGHT HUNDRED MILLION", 1040); g.fillText("EIGHT HUNDRED MILLION", 110, 500); track(g, 0);
  // memo LIV GOLF; the signature line, EMPTY
  g.fillStyle = INK; track(g, 2.5); font(g, 700, 28); g.fillText("MEMO", PRINT.memo[0], 662); track(g, 0);
  g.fillRect(206, 664, 520, 2.4);
  g.fillStyle = FILL; track(g, 2); font(g, 800, 52); g.fillText("LIV GOLF", 230, 652); track(g, 0);
  g.fillStyle = INK; g.fillRect(870, 664, 566, 2.4);
  track(g, 2); font(g, 600, 17); g.textAlign = "center"; g.fillText("AUTHORIZED SIGNATURE", 1153, 690); track(g, 0);
  // the ink's tooth: a fine speckle of paper through it, and the corners' wear (handled, scuffed through to white)
  for (let i = 0; i < 16000; i++) {
    g.fillStyle = `rgba(${hash(i, 1, 61) > 0.5 ? "255,255,250" : "120,130,110"},${0.04 + 0.06 * hash(i, 2, 61)})`;
    g.fillRect(hash(i, 3, 61) * W, hash(i, 4, 61) * H, 0.6 + hash(i, 5, 61) * 1.6, 0.6);
  }
  for (const [cx, cy] of [[0, 0], [W, 0], [0, H], [W, H]]) {
    for (let i = 0; i < 260; i++) {
      const r = 40 * hash(i, 6, 62 + cx + cy) ** 2, a = hash(i, 7, 62 + cx + cy) * Math.PI * 2;
      const x = cx + (cx ? -1 : 1) * Math.abs(Math.cos(a) * r), y = cy + (cy ? -1 : 1) * Math.abs(Math.sin(a) * r);
      g.fillStyle = `rgba(250,250,246,${0.25 + 0.4 * hash(i, 8, 62)})`;
      g.fillRect(x, y, 1 + 3 * hash(i, 9, 62), 1 + 2 * hash(i, 10, 62));
    }
  }
}, 2);
/** the board's edge, along its thickness (v 0 top → 1 bottom): the face's skin, the white foam core with its fine cells */
const edgeTex = () => paintTex("hook40-edge", 256, 32, (g) => {
  g.fillStyle = "#F4F3EE"; g.fillRect(0, 0, 256, 32);
  for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(200,198,188,${0.15 + 0.25 * hash(i, 1, 71)})`; g.fillRect(hash(i, 2, 71) * 256, 4 + hash(i, 3, 71) * 24, 0.8, 0.8); }
  g.fillStyle = "#D9DDD2"; g.fillRect(0, 0, 256, 3.2);
  g.fillStyle = "#E7E5DD"; g.fillRect(0, 28.8, 256, 3.2);
}, 1);

// ══ GEOMETRY ════════════════════════════════════════════════════════════════════════════════════════
/** 332 dimple centres, a Fibonacci lattice on the unit sphere */
const DIMPLES = (() => {
  const n = 332, out: THREE.Vector3[] = [];
  const ga = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (2 * (i + 0.5)) / n, r = Math.sqrt(1 - y * y), a = i * ga;
    out.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r));
  }
  return out;
})();
/** a dimple: angular radius DA (3.9 mm bowls on the 42.7 mm ball), depth DD (in radius units) */
const DA = 0.091, DD = 0.0175;
const dimpleH = (t: number) => (t >= 1 ? 0 : DD * Math.pow(1 - t * t, 1.25));
const dimpleH1 = (t: number) => (t >= 1 ? 0 : DD * 1.25 * Math.pow(1 - t * t, 0.25) * (-2 * t));
/** the ball: a fine UV sphere pressed with the dimples, its normals analytic (no seam, no facets) */
const ballGeo = () => {
  const g = new THREE.SphereGeometry(RB, 320, 200);
  const pos = g.attributes.position as THREE.BufferAttribute;
  const nor = g.attributes.normal as THREE.BufferAttribute;
  const n = new THREE.Vector3(), tt = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    n.set(pos.getX(i), pos.getY(i), pos.getZ(i)).normalize();
    let best = -2, bi = 0;
    for (let k = 0; k < DIMPLES.length; k++) { const d = n.dot(DIMPLES[k]); if (d > best) { best = d; bi = k; } }
    const th = Math.acos(Math.min(1, best)), t = th / DA;
    const h = dimpleH(t), r = 1 - h;
    pos.setXYZ(i, n.x * r * RB, n.y * r * RB, n.z * r * RB);
    if (t < 1 && th > 1e-5) {
      // tangent away from the dimple's centre; the bowl's wall turns the normal toward its axis
      tt.copy(n).multiplyScalar(Math.cos(th)).sub(DIMPLES[bi]).divideScalar(Math.sin(th));
      const slope = dimpleH1(t) / DA / r;
      const nn = n.clone().addScaledVector(tt, slope).normalize();
      nor.setXYZ(i, nn.x, nn.y, nn.z);
    } else nor.setXYZ(i, n.x, n.y, n.z);
  }
  g.computeBoundingBox(); g.computeBoundingSphere();
  return g;
};
/** the cheque board: a top face (the print), an underside and its eased edge all round, warped by chqWarp; origin at the
 *  centre of its underside's plane */
const chequeGeos = () => {
  const NX = 64, NZ = 32, E = 1.6, T = CHQ.T, HX = CHQ.W / 2, HZ = CHQ.D / 2;
  const face = (top: boolean) => {
    const pos: number[] = [], uv: number[] = [], idx: number[] = [];
    for (let j = 0; j <= NZ; j++) for (let i = 0; i <= NX; i++) {
      const x = -HX + E + ((CHQ.W - 2 * E) * i) / NX, z = -HZ + E + ((CHQ.D - 2 * E) * j) / NZ;
      pos.push(x, chqWarp(x, z) + (top ? T : 0), z);
      uv.push((x + HX) / CHQ.W, 1 - (z + HZ) / CHQ.D);
    }
    for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) {
      const a = j * (NX + 1) + i, b = a + 1, c = a + NX + 1, d = c + 1;
      if (top) idx.push(a, c, b, b, c, d); else idx.push(a, b, c, b, d, c);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals();
    return g;
  };
  // the edge: round the outline (square corners, mitred), a profile eased at both arrises
  const ring: [number, number, number, number][] = [];   // x, z, nx, nz (outward; mitred at the corners)
  const side = (x0: number, z0: number, x1: number, z1: number, nx: number, nz: number, n: number) => {
    for (let i = 0; i < n; i++) ring.push([x0 + ((x1 - x0) * i) / n, z0 + ((z1 - z0) * i) / n, nx, nz]);
  };
  side(-HX, -HZ, HX, -HZ, 0, -1, NX); side(HX, -HZ, HX, HZ, 1, 0, NZ); side(HX, HZ, -HX, HZ, 0, 1, NX); side(-HX, HZ, -HX, -HZ, -1, 0, NZ);
  const corner = (k: [number, number, number, number]) => {
    const cx = Math.abs(Math.abs(k[0]) - HX) < 1e-6, cz = Math.abs(Math.abs(k[1]) - HZ) < 1e-6;
    return cx && cz ? [Math.sign(k[0]), Math.sign(k[1])] : [k[2], k[3]];
  };
  const PROF: [number, number][] = [[-E, T], [-E * 0.3, T - E * 0.3], [0, T - E], [0, E], [-E * 0.3, E * 0.3], [-E, 0]];
  const pos: number[] = [], uv: number[] = [], idx: number[] = [];
  const nR = ring.length, nP = PROF.length;
  for (let k = 0; k <= nR; k++) {
    const r = ring[k % nR], [mx, mz] = corner(r);
    for (let p = 0; p < nP; p++) {
      const [o, y] = PROF[p];
      // a corner's outward step runs along the mitre (both normals), the inset with it
      const x = r[0] + mx * o, z = r[1] + mz * o;
      pos.push(x, chqWarp(r[0], r[1]) + y, z);
      uv.push(k / 24, 1 - y / T);
    }
  }
  for (let k = 0; k < nR; k++) for (let p = 0; p < nP - 1; p++) {
    const a = k * nP + p, b = a + 1, c = a + nP, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  const eg = new THREE.BufferGeometry();
  eg.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  eg.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  eg.setIndex(idx); eg.computeVertexNormals();
  return { top: face(true), bottom: face(false), edge: eg };
};
/** a grass blade: a narrow tapering strip, its tip bent forward; normals lean up (a lawn reads lit from above, as one) */
const bladeGeo = (w = 1.15) => {
  const pts: [number, number, number][] = [[-w / 2, 0, 0], [w / 2, 0, 0], [-w * 0.32, 0.55, 0.1], [w * 0.32, 0.55, 0.1], [0, 1, 0.34]];
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pts.flat(), 3));
  g.setAttribute("normal", new THREE.Float32BufferAttribute([0, 0.9, 0.44, 0, 0.9, 0.44, 0, 0.94, 0.34, 0, 0.94, 0.34, 0, 0.97, 0.24], 3));
  g.setIndex([0, 1, 2, 1, 3, 2, 2, 3, 4]);
  return g;
};

// ══ THE TURF'S SHADER: the pool's fall into the dark, the low tone and the mower's stripes (by green-world xz) ══
const TURF_GLSL = `
float hk40h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float hk40n(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hk40h(i), hk40h(i + vec2(1.0, 0.0)), u.x), mix(hk40h(i + vec2(0.0, 1.0)), hk40h(i + vec2(1.0, 1.0)), u.x), u.y); }
varying vec2 vPoolP;
uniform vec2 poolC;
uniform vec3 poolR;`;
/** the pool's uniforms, shared by the turf and its blades (set every frame) */
const POOL_U = { c: { value: new THREE.Vector2(0, 0) }, r: { value: new THREE.Vector3(1000, 1000, 1000) } };
const turfShader = <T extends THREE.Material>(m: T, key: string, tone = true) => {
  m.transparent = true;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.poolC = POOL_U.c;
    sh.uniforms.poolR = POOL_U.r;
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec2 vPoolP;")
      .replace("#include <begin_vertex>", `#include <begin_vertex>
        #ifdef USE_INSTANCING
          vPoolP = ( instanceMatrix * vec4( transformed, 1.0 ) ).xz;
        #else
          vPoolP = position.xz;
        #endif`);
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\n" + TURF_GLSL)
      .replace("#include <map_fragment>", `#include <map_fragment>
        ${tone ? `{
          float tn = 0.62 * hk40n(vPoolP / 300.0) + 0.38 * hk40n(vPoolP / 95.0 + 17.0);
          float st = smoothstep(-0.2, 0.2, sin(vPoolP.x * 6.2832 / 1500.0 + 0.8));
          diffuseColor.rgb *= mix(0.84, 1.08, st) * (0.86 + 0.26 * tn);
        }` : ""}`)
      .replace("#include <dithering_fragment>", `#include <dithering_fragment>
        vec2 poolD = vPoolP - poolC;
        float poolA = 1.0 - smoothstep( ${POOL_IN.toFixed(3)}, 1.0, length( poolD / vec2( poolR.x, poolD.y < 0.0 ? poolR.y : poolR.z ) ) );
        if ( poolA < 0.004 ) discard;
        gl_FragColor.a *= poolA;`);
  };
  m.customProgramCacheKey = () => key;
  return m;
};

// ══ THE MODEL ═══════════════════════════════════════════════════════════════════════════════════════
export const hookModel = () => (): Model<HookP> => {
  const root = new THREE.Group();
  const world = new THREE.Group();
  world.matrixAutoUpdate = false;
  root.add(world);

  // ══ THE GREEN (the floor): the turf with the hole cut in it, the cut wall, the liner; the blades ══
  const green = new THREE.Group();
  green.userData.isFloor = true; green.userData.noBounds = true;
  world.add(green);
  {
    const { map, bump } = turfTex();
    const m = turfShader(new THREE.MeshStandardMaterial({ map, bumpMap: bump, bumpScale: 0.9, roughness: 0.86, metalness: 0, envMapIntensity: 0.4 }), "hk40-turf");
    // the surface: a broad rectangle with the hole cut out (shape y = −z, laid down flat)
    const X0 = TURF.x0, X1 = TURF.x1, Z0 = TURF.z0, Z1 = TURF.z1;
    const sh = new THREE.Shape();
    sh.moveTo(X0, -Z1); sh.lineTo(X1, -Z1); sh.lineTo(X1, -Z0); sh.lineTo(X0, -Z0); sh.closePath();
    const hole = new THREE.Path();
    for (let i = 0; i <= 192; i++) { const a = (i / 192) * Math.PI * 2; const x = RC * Math.cos(a), y = -RC * Math.sin(a); if (i === 0) hole.moveTo(x, y); else hole.lineTo(x, y); }
    sh.holes.push(hole);
    const g = new THREE.ShapeGeometry(sh, 4);
    g.rotateX(-Math.PI / 2);
    const p = g.attributes.position as THREE.BufferAttribute, uv = g.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / TILE, -p.getZ(i) / TILE);
    // ★ the turf takes shadows; it also casts them, only into its own hole (its back faces never draw)
    const turf = mesh(g, m, false, true);
    turf.renderOrder = 0;
    green.add(turf);
    // the cut wall: the turf's profile, from the surface down to just past the liner's rim
    const wm = new THREE.MeshStandardMaterial({ map: wallTex(), roughness: 0.96, metalness: 0, side: THREE.BackSide, envMapIntensity: 0.25 });
    const wg = new THREE.CylinderGeometry(RC, RC, WALL_H, 192, 1, true);
    wg.translate(0, -WALL_H / 2 + 0.2, 0);
    green.add(mesh(wg, wm, true, true));
    // the liner: its rim (a ring 25 mm down), its wall and its floor with the ferrule's socket in the middle
    const lm = new THREE.MeshPhysicalMaterial({ map: linerTex(), roughness: 0.42, metalness: 0, clearcoat: 0.25, clearcoatRoughness: 0.4, side: THREE.DoubleSide, envMapIntensity: 0.5 });
    const prof: [number, number][] = [[RC - 0.2, LINER_TOP + 0.4], [LINER_IN + 1.5, LINER_TOP], [LINER_IN, LINER_TOP - 1.5], [LINER_IN, LINER_BOT + 6], [LINER_IN - 6, LINER_BOT],
      [30, LINER_BOT], [24, LINER_BOT + 10], [12, LINER_BOT + 10], [11, LINER_BOT + 2], [0, LINER_BOT + 2]];
    const lp = prof.map(([r, y]) => new THREE.Vector2(r, y));
    const lg = new THREE.LatheGeometry(lp, 128);
    green.add(mesh(lg, lm, true, true));
    // the socket's dark bore
    const bore = mesh(new THREE.CircleGeometry(10.5, 32), new THREE.MeshStandardMaterial({ color: col("#1A1816"), roughness: 0.9 }), false, true);
    bore.rotation.x = -Math.PI / 2; bore.position.y = LINER_BOT + 2.3;
    green.add(bore);
    // ★ the blades: a field of real 3-D blades round the ball's line and the cup (none in the hole, none under the board)
    const bm = turfShader(new THREE.MeshStandardMaterial({ roughness: 0.78, metalness: 0, side: THREE.DoubleSide, envMapIntensity: 0.35 }), "hk40-blade");
    const bg = bladeGeo();
    const spots: { x: number; z: number; h: number; yaw: number; lean: number; c: number }[] = [];
    const chqIn = (x: number, z: number) => Math.abs(x - CHQ_REST[0]) < CHQ.W / 2 + 6 && Math.abs(z - CHQ_REST[2]) < CHQ.D / 2 + 6;
    const N = 210000;
    for (let i = 0; i < N; i++) {
      const x = -760 + 1500 * hash(i, 1, 81), z = -1250 + 2250 * hash(i, 2, 81);
      // dense round the cup and along the ball's line, thinning outward (the tile carries the rest)
      const dCup = Math.hypot(x, z), dLine = Math.abs(x + 60 - 0.0 * z);
      const near = Math.max(Math.exp(-((dCup / 520) ** 2)), z > -200 && z < 1000 ? Math.exp(-((dLine / 260) ** 2)) : 0);
      if (hash(i, 3, 81) > 0.18 + 0.82 * near) continue;
      if (dCup < RC + 0.6 || chqIn(x, z)) continue;
      spots.push({ x, z, h: 3.2 + 3.6 * hash(i, 4, 81) * (0.6 + 0.4 * n2(x / 40, z / 40, 3)), yaw: (hash(i, 5, 81) - 0.5) * 2.6, lean: 0.25 * hash(i, 6, 81), c: hash(i, 7, 81) });
    }
    // the cut edge: blades rooted on the rim, leaning out over the hole
    for (let i = 0; i < 1400; i++) {
      const a = (i / 1400) * Math.PI * 2 + 0.003 * hash(i, 8, 82), r = RC + 0.6 + 4 * hash(i, 9, 82);
      spots.push({ x: r * Math.cos(a), z: r * Math.sin(a), h: 4 + 4.5 * hash(i, 10, 82), yaw: -a - Math.PI / 2 + (hash(i, 11, 82) - 0.5) * 0.8, lean: 0.5 + 0.5 * hash(i, 12, 82), c: hash(i, 13, 82) });
    }
    const inst = new THREE.InstancedMesh(bg, bm, spots.length);
    const mI = new THREE.Matrix4(), qI = new THREE.Quaternion(), eI = new THREE.Euler(), sI = new THREE.Vector3(), pI = new THREE.Vector3(), cI = new THREE.Color();
    spots.forEach((s, i) => {
      eI.set(s.lean, s.yaw, 0, "YXZ");
      qI.setFromEuler(eI);
      pI.set(s.x, 0, s.z); sI.set(1, s.h, s.h);
      mI.compose(pI, qI, sI);
      inst.setMatrixAt(i, mI);
      const t = s.c;
      cI.setRGB(0.05 + 0.11 * t, 0.16 + 0.16 * t, 0.04 + 0.05 * t);
      inst.setColorAt(i, cI);
    });
    inst.castShadow = false; inst.receiveShadow = true;
    inst.renderOrder = 1;
    inst.frustumCulled = false;
    green.add(inst);
  }
  // contact pads (soft shadows where a body lies on the green), not objects
  const pad = (w: number, d: number, tex: THREE.Texture) => {
    const g = new THREE.PlaneGeometry(w, d);
    g.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: tex, transparent: true, depthWrite: false, opacity: 0, toneMapped: false }));
    m.renderOrder = 1.5; m.position.y = 0.3;
    green.add(m);
    return m;
  };
  const ballPad = pad(RB * 2.1, RB * 2.1, softTex());
  const chqPad = pad(CHQ.W * 1.08, CHQ.D * 1.12, softRectTex());

  // ══ THE BALL ══
  const ball = new THREE.Group();
  ball.userData.obj = "ball";
  ball.matrixAutoUpdate = false;
  world.add(ball);
  {
    const m = new THREE.MeshPhysicalMaterial({ map: ballTex(), roughness: 0.38, metalness: 0, clearcoat: 0.8, clearcoatRoughness: 0.12, sheen: 0.15, sheenRoughness: 0.6, sheenColor: col("#FFFFFF"), envMapIntensity: 0.8 });
    ball.add(mesh(ballGeo(), m));
  }

  // ══ THE CHEQUE ══
  const cheque = new THREE.Group();
  cheque.userData.obj = "cheque";
  cheque.matrixAutoUpdate = false;
  world.add(cheque);
  {
    const inner = new THREE.Group();
    inner.position.y = -CHQ_HE[1];
    cheque.add(inner);
    const gs = chequeGeos();
    const face = new THREE.MeshPhysicalMaterial({ map: chequeTex(), roughness: 0.52, metalness: 0, clearcoat: 0.18, clearcoatRoughness: 0.5, envMapIntensity: 0.45 });
    const edge = new THREE.MeshStandardMaterial({ map: edgeTex(), roughness: 0.85, metalness: 0, envMapIntensity: 0.35 });
    const back = new THREE.MeshStandardMaterial({ color: col("#F2F1EC"), roughness: 0.8, metalness: 0, envMapIntensity: 0.35 });
    inner.add(mesh(gs.top, face), mesh(gs.edge, edge), mesh(gs.bottom, back));
  }

  const V = new THREE.Matrix4(), mP = new THREE.Matrix4();
  const qP = new THREE.Quaternion(), sOne = new THREE.Vector3(1, 1, 1), vP = new THREE.Vector3();
  const KEY_W = new THREE.Vector3(...KEY_DIR).normalize();
  const keyDir = new THREE.Vector3();
  const place = (o: THREE.Object3D, b: BodyP) => {
    o.visible = b.vis;
    qP.set(...b.q); vP.set(...b.p);
    mP.compose(vP, qP, sOne);
    o.matrix.copy(mP);
  };
  const eYaw = new THREE.Euler();
  const model: Model<HookP> = { root, rig: { dir: [...KEY_DIR] } };
  model.update = (p) => {
    viewMatrix(p.cam.c, p.cam.t, V);
    world.matrix.copy(V);
    keyDir.copy(KEY_W).transformDirection(V);
    model.rig!.dir = [keyDir.x, keyDir.y, keyDir.z];
    POOL_U.c.value.set(...p.poolC); POOL_U.r.value.set(...p.poolR);
    place(ball, p.ball);
    place(cheque, p.cheque);
    ballPad.visible = p.ballPad > 0.01; ballPad.position.set(p.ball.p[0], 0.3, p.ball.p[2]);
    (ballPad.material as THREE.MeshBasicMaterial).opacity = 0.62 * p.ballPad;
    chqPad.visible = p.chqPad > 0.01 && p.cheque.vis; chqPad.position.set(p.cheque.p[0], 0.35, p.cheque.p[2]);
    eYaw.setFromQuaternion(qP.set(...p.cheque.q), "YXZ");
    chqPad.rotation.set(0, eYaw.y, 0);
    (chqPad.material as THREE.MeshBasicMaterial).opacity = 0.55 * p.chqPad;
  };
  return model;
};
/** the key, in the green world: high, from the left and a little in front */
export const KEY_DIR: [number, number, number] = [-0.55, 0.78, 0.32];
