// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE HOOK IN 3-D (041) — "George Foreman said his grill made him more than $200 million. Much more, he said. We checked the
// filings." A real countertop contact grill closes on a thick raw steak; its drip drawer slides out full of banded cash.
//
// ★ A REAL CAMERA (as 040's hook): the model is built in its own KITCHEN WORLD (px, y up, the counter at y 0, x to the right,
//   z toward the camera; the grill's footprint centred on the origin) and the whole world is carried in front of the stage's
//   eye by the inverse of a real camera's pose (`viewMatrix`). The key light is fixed in the kitchen world.
//
// ★ THE SHAPE FIRST (the brief, 2026-11-23), at the cash module's own scale (1.54 px per mm: a $100 note is 240 px):
//   · THE GRILL ("grill"), a hinged clamshell 340 × 240 mm:
//       - the BASE: a graphite plastic wedge on four rubber feet, 65 mm tall at the front, 99 mm at the back, so its top
//         (and the plate set in it) tilts 8° toward the front; a drawer slot under the front of its deck;
//       - the LOWER PLATE: a cast plate with a non-stick coating, 22 deep parallel ribs (5 mm tall, 12 mm pitch) running down
//         the slope, a raised rim on three sides, a low front lip and a pouring spout at its front centre;
//       - the LID: a deep plastic shell with a domed brushed-stainless skin, the same ribbed plate on its underside, a bar
//         handle on its front edge (plain type GEORGE FOREMAN on it, no logo), two hinge tabs on a steel pin that rides in a
//         slotted post at each back corner (a FLOATING HINGE: the lid sits level on a thick steak, its pin lifted in the slot);
//   · THE STEAK ("steak"): a 25 mm ribeye, raw deep red with fine marbling and a cream fat cap, wet sheen; it rests on the
//     lower ribs and gives a little under the lid's weight;
//   · THE DRIP DRAWER ("tray"): a satin black drawer with a brushed pull, sliding on the base's pan; inside, a brick of twelve
//     real bundles (cash.ts) in three layers under a kraft band printed $200,000,000; two more bundles are tossed on top;
//   · THE COUNTER: dark honed stone, lit in a pool round the grill and falling into the dark ground;
//   · STEAM: thin translucent wisps rising from the seam once the lid is down.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, mesh, paintTex, slabOf, drawSize, type Model } from "../stage";
import { col, hash, rad, rbox, fitFont, track } from "../kit029";
import { makeBundle, makeBand, BUNDLE } from "./cash";

// ══ THE EYE AND THE REAL CAMERA ═══════════════════════════════════════════════════════════════════
export const HOOK_EYE = { x: 540, y: 960, D: 2200 };
const EYE3 = new THREE.Vector3(HOOK_EYE.x, -HOOK_EYE.y, HOOK_EYE.D);
const UP = new THREE.Vector3(0, 1, 0);
const vC = new THREE.Vector3(), vT = new THREE.Vector3(), mRot = new THREE.Matrix4(), mTmp = new THREE.Matrix4();
/** the matrix that carries the kitchen world in front of the stage's eye, for a camera at C looking at T (no roll) */
export const viewMatrix = (C: readonly number[], T: readonly number[], out = new THREE.Matrix4()) => {
  vC.set(C[0], C[1], C[2]); vT.set(T[0], T[1], T[2]);
  mRot.lookAt(vC, vT, UP);
  mTmp.copy(mRot).setPosition(vC).invert();
  out.makeTranslation(EYE3.x, EYE3.y, EYE3.z).multiply(mTmp);
  return out;
};
const pTmp = new THREE.Vector3();
/** where a kitchen-world point lands on the layer (px), and its scale */
export const toLayer = (V: THREE.Matrix4, p: readonly number[]) => {
  pTmp.set(p[0], p[1], p[2]).applyMatrix4(V);
  const d = HOOK_EYE.D - pTmp.z;
  const s = HOOK_EYE.D / d;
  return { x: HOOK_EYE.x + (pTmp.x - EYE3.x) * s, y: HOOK_EYE.y - (pTmp.y - EYE3.y) * s, s, d };
};

// ══ DIMENSIONS (px; 1.54 px per mm) ═════════════════════════════════════════════════════════════════
export const KPX = 1.54;
/** g in px per frame² */
export const G = (9810 * KPX) / 900;
/** the base: half width, its back and front, the feet, the pan's top, the drawer cavity's ceiling and side walls, its top */
export const BASE = { X: 262, Z0: -185, Z1: 185, FOOT: 8, PAN: 12.4, CEIL: 84, WALL: 243, FRONT_TOP: 100 } as const;
export const TILT = rad(8);
const CT = Math.cos(TILT), SNT = Math.sin(TILT);
export const BACK_TOP = BASE.FRONT_TOP + (BASE.Z1 - BASE.Z0) * Math.tan(TILT);
/** the plate frame's origin: the deck's top at z 0 (the frame is turned 8° about x, its +z down the slope toward the front) */
export const PO = { y: (BASE.FRONT_TOP + BACK_TOP) / 2 } as const;
/** a point of the plate frame (x, yl up off the deck, zl down the slope) in the kitchen world */
export const plateW = (x: number, yl: number, zl: number): [number, number, number] => [x, PO.y + yl * CT - zl * SNT, yl * SNT + zl * CT];
/** the lower plate: rib tips (plate frame yl) */
export const RIB_TIP = 14.2;
/** the gap left between the two plates' rib tips with nothing between them */
const GAP0 = 2;
/** the lid's pivot (plate frame), and its rib tips' height with the lid shut on nothing */
export const PIVOT = { yl: 48, zl: -198 } as const;
export const UP_TIP = RIB_TIP + GAP0;
/** the steak: where it lies on the plate (its outline's centre), its thickness and the outline's half extents */
export const STEAK = { x: 6, zl: 6, t: 38, rx: 124, rz: 84, y: RIB_TIP + 0.4 } as const;
/** the steak's outline (shape coordinates: x, and y = −zl from its centre) */
export const STEAK_OUT: [number, number][] = Array.from({ length: 72 }, (_, i) => {
  const a = (i / 72) * Math.PI * 2;
  const r = 1 + 0.07 * Math.sin(2 * a + 0.5) + 0.045 * Math.cos(3 * a + 0.3) - 0.03 * Math.sin(5 * a + 1.1) + 0.05 * Math.exp(-3 * ((((a - 0.6 + Math.PI) % (2 * Math.PI)) - Math.PI) ** 2));
  return [STEAK.rx * r * Math.cos(a), STEAK.rz * r * Math.sin(a) * (1 - 0.08 * Math.cos(a))];
});
/** the steak's back-most point (plate frame zl): where the closing lid's plate meets it first */
export const STEAK_ZB = STEAK.zl + Math.min(...STEAK_OUT.map(([, y]) => -y));

// ══ THE DRAWER AND ITS CASH ══
/** the drawer (kitchen world, shut): half width, back, its fascia's front face, floor top, wall top, fascia top */
export const DRW = { X: 238, Z0: -150, Z1: 184.5, BOT: 12.6, FLOOR: 16.2, WALL: 70, FACE_T: 8, TOP: 80 } as const;
/** how far it slides out */
export const PULL = 270;
const BP = BUNDLE.H + 0.3;
/** the brick: four bundles across (their notes' length along z, toward the camera), three high */
export const BRICK = { cols: [-160.5, -53.5, 53.5, 160.5], zc: 53.5, y0: DRW.FLOOR + 0.15 + 0.32 + 0.15, layers: 3 } as const;
export const BRICK_TOP = BRICK.y0 + 2 * BP + BUNDLE.H;
/** the hero band: its width, centre (drawer z) and the loop's half span over the brick (x) */
export const BAND = { w: 80, zc: 128, zIn: 213.6, text: "$200,000,000" } as const;
export const BAND_TOP = BRICK_TOP + 0.25 + 0.32 + 0.32;
/** the two bundles tossed on top: drawer-local z centre, their landing x, their rest heights */
export const EXTRA = { zc: 16, land: [-24, 18], from: [-640, 640], yaw: [1.6, -1.2], y: [BRICK_TOP + 0.3, BRICK_TOP + 0.3 + BP] } as const;

// ══ POSES ═════════════════════════════════════════════════════════════════════════════════════════
export type HookT = { close: number; pull: [number, number]; extra: [[number, number], [number, number]] };
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
/** the lid: released from rest at 70° and falling about its pin under gravity, it closes level on the steak at T.close */
export const LID_OPEN = rad(70);
const LID_REL = 52;   // frames from its release to the close
export const lidAngle = (T: HookT, f: number) => {
  const t = f - (T.close - LID_REL);
  if (t <= 0) return LID_OPEN;
  if (f >= T.close) return 0;
  return LID_OPEN * (1 - (t / LID_REL) ** 2);
};
/** the steak's thickness factor: slapped by the lid (6%) and settling, pressed 3% under its weight */
export const squash = (T: HookT, f: number) => {
  const t = f - T.close;
  if (t < 0) return 1;
  return 0.97 - 0.03 * Math.exp(-t / 2.2) * Math.cos(0.8 * t);
};
/** the rib tips' height (plate frame) at slope position zl for the lid opened by th about its pin, before any lift */
export const tipAt = (th: number, zl: number) => PIVOT.yl + (UP_TIP - PIVOT.yl) * Math.cos(th) + (zl - PIVOT.zl) * Math.sin(th);
/** ★ the floating hinge: the pin rides up its slot just enough that the upper plate never enters the steak */
export const liftAt = (T: HookT, f: number) => {
  const th = lidAngle(T, f), top = STEAK.y + STEAK.t * squash(T, f) + 0.4;
  return Math.max(0, top - tipAt(th, STEAK_ZB));
};
/** the drawer: pulled from rest, quick and then a long settle to its stop (zero speed at both ends) */
export const pullAt = (T: HookT, f: number) => {
  const u = clamp01((f - T.pull[0]) / (T.pull[1] - T.pull[0])), a = 3.5;
  return PULL * (1 - (1 - u) ** a * (1 + a * u));
};
/** the fastest frame of the pull (its sound's peak) */
export const pullPeak = (T: HookT) => T.pull[0] + (T.pull[1] - T.pull[0]) / 3.5;
export type BodyPose = { x: number; y: number; z: number; yaw: number; roll: number; vis: boolean };
/** a tossed bundle k (drawer-local): flies in from the side under gravity, lands on the pile at T.extra[k][0], slides to a stop */
export const extraPose = (T: HookT, k: 0 | 1, f: number): BodyPose => {
  const [tl, ts] = T.extra[k];
  const FLY = 5;
  const x0 = EXTRA.from[k], xl = EXTRA.land[k], slide = (k === 0 ? 1 : -1) * 16;
  const y = EXTRA.y[k], z = EXTRA.zc;
  const t0 = tl - FLY;
  if (f < t0) return { x: x0, y: y + 0, z, yaw: 0, roll: 0, vis: false };
  if (f < tl) {
    const u = (f - t0) / FLY;
    // a ballistic arc: launched level with its landing, up and over, back down at the landing
    const vy = (0.5 * G * FLY * FLY) / FLY;
    const t = f - t0;
    return { x: x0 + (xl - x0) * u, y: y + vy * t - 0.5 * G * t * t, z, yaw: EXTRA.yaw[k] * u * 2, roll: (k === 0 ? -1 : 1) * 4 * Math.sin(Math.PI * u), vis: true };
  }
  const u = clamp01((f - tl) / (ts - tl));
  return { x: xl + slide * (1 - (1 - u) ** 2), y, z, yaw: EXTRA.yaw[k] * (2 - u * (2 - u)), roll: 0, vis: true };
};

/** steam wisp k at frame f (kitchen world: its plane's centre, its scale and opacity): born at the seam's front after the
 *  close, one after another, each rising and swaying, its strands fading in and out over its life */
export const WISP_X = [-120, 40, 150, -40, 95, -150, 10];
export const wispAt = (T: HookT, k: number, f: number, lift: number) => {
  const age = f - (T.close + 2 + k * 5.5), life = 46;
  const ph = ((age % life) + life) % life, cyc = Math.floor(age / life);
  const env = age >= 0 ? Math.sin(Math.PI * Math.min(1, ph / life)) ** 1.4 : 0;
  const op = 0.42 * env * (cyc === 0 ? Math.min(1, age / 8) : 1);
  const base = plateW(WISP_X[k], UP_TIP + lift, 234);
  const rise = 1.7 * ph, sc = 0.75 + 0.5 * (ph / life);
  return { x: base[0] + 10 * Math.sin(0.07 * f + k), y: base[1] + 108 * sc + rise, z: base[2] + 4 + 0.2 * rise, sc, op };
};

// ══ SURFACES ══
const brushed = (key: string, base: string, streak: [string, string]) => paintTex(key, 512, 512, (g) => {
  g.fillStyle = base; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 2600; i++) {
    const y = hash(i, 1, 81) * 512, x = hash(i, 2, 81) * 512, l = 40 + 260 * hash(i, 3, 81);
    g.strokeStyle = `rgba(${hash(i, 4, 81) > 0.5 ? streak[0] : streak[1]},${0.05 + 0.12 * hash(i, 5, 81)})`;
    g.lineWidth = 0.4 + 0.9 * hash(i, 6, 81);
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + l, y + (hash(i, 7, 81) - 0.5) * 1.2); g.stroke();
  }
}, 1);
/** the honed stone counter: near-black with grain, a few faint veins */
const stoneTex = () => paintTex("hook41-stone", 1024, 1024, (g) => {
  g.fillStyle = "#3A322D"; g.fillRect(0, 0, 1024, 1024);
  for (let i = 0; i < 26000; i++) {
    const v = hash(i, 1, 91);
    g.fillStyle = v > 0.6 ? `rgba(120,108,98,${0.08 + 0.12 * hash(i, 2, 91)})` : `rgba(8,6,5,${0.12 + 0.2 * hash(i, 2, 91)})`;
    const s = 0.6 + 2.2 * hash(i, 3, 91);
    g.fillRect(hash(i, 4, 91) * 1024, hash(i, 5, 91) * 1024, s, s);
  }
  for (let k = 0; k < 7; k++) {
    g.strokeStyle = `rgba(150,138,126,${0.05 + 0.05 * hash(k, 6, 91)})`; g.lineWidth = 0.8 + 1.6 * hash(k, 7, 91);
    g.beginPath();
    let x = hash(k, 8, 91) * 1024, y = 0;
    g.moveTo(x, y);
    while (y < 1024) { y += 30; x += (hash(k, y, 92) - 0.5) * 60; g.lineTo(x, y); }
    g.stroke();
  }
}, 1);
/** the steak's top: deep raw red, fine fat marbling, its fat cap along part of its edge (the outline mapped onto the canvas) */
const steakTex = () => paintTex("hook41-steak", 512, 360, (g) => {
  const W = 512, H = 360;
  const xs = STEAK_OUT.map((p) => p[0]), ys = STEAK_OUT.map((p) => p[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  const U = (x: number) => ((x - x0) / (x1 - x0)) * W, V = (y: number) => (1 - (y - y0) / (y1 - y0)) * H;
  const gr = g.createRadialGradient(W * 0.46, H * 0.52, 20, W * 0.5, H * 0.5, W * 0.6);
  gr.addColorStop(0, "#A3222A"); gr.addColorStop(0.6, "#8E1A23"); gr.addColorStop(1, "#6E121B");
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  // the muscle's grain and its darker seams
  for (let i = 0; i < 900; i++) {
    const x = hash(i, 1, 71) * W, y = hash(i, 2, 71) * H;
    g.strokeStyle = `rgba(${hash(i, 3, 71) > 0.5 ? "70,8,14" : "190,60,62"},${0.06 + 0.1 * hash(i, 4, 71)})`;
    g.lineWidth = 0.6 + 1.4 * hash(i, 5, 71);
    g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + 8, y + 10, x + 4 + 10 * hash(i, 6, 71), y + 22); g.stroke();
  }
  // marbling: thin branching fat lines
  for (let k = 0; k < 70; k++) {
    let x = hash(k, 7, 71) * W, y = hash(k, 8, 71) * H, a = hash(k, 9, 71) * Math.PI * 2;
    g.strokeStyle = `rgba(242,214,204,${0.25 + 0.4 * hash(k, 10, 71)})`;
    g.lineWidth = 0.6 + 2.2 * hash(k, 11, 71) ** 2;
    g.beginPath(); g.moveTo(x, y);
    for (let s = 0; s < 8; s++) { a += (hash(k, s, 72) - 0.5) * 1.3; x += Math.cos(a) * 9; y += Math.sin(a) * 9; g.lineTo(x, y); }
    g.stroke();
  }
  // the fat cap's seam inside the eye of the steak, and the cap along its edge (from the back round to the right)
  g.lineCap = "round"; g.lineJoin = "round";
  const cap = (w: number, c: string) => {
    g.strokeStyle = c; g.lineWidth = w; g.beginPath();
    for (let i = 4; i <= 30; i++) { const [x, y] = STEAK_OUT[i % 72]; if (i === 4) g.moveTo(U(x), V(y)); else g.lineTo(U(x), V(y)); }
    g.stroke();
  };
  cap(70, "rgba(226,196,170,0.95)"); cap(44, "rgba(244,228,206,0.97)");
  g.strokeStyle = "rgba(236,206,190,0.55)"; g.lineWidth = 5;
  g.beginPath();
  for (let i = 2; i <= 34; i++) { const [x, y] = STEAK_OUT[i % 72]; const s = 0.62; if (i === 2) g.moveTo(U(x * s + 10), V(y * s)); else g.lineTo(U(x * s + 10), V(y * s)); }
  g.stroke();
}, 1);
/** the handle's front: graphite plastic, GEORGE FOREMAN in plain silver type */
const handleTex = () => paintTex("hook41-handle", 260, 22, (g) => {
  g.fillStyle = "#26272B"; g.fillRect(0, 0, 260, 22);
  for (let i = 0; i < 220; i++) { g.fillStyle = `rgba(255,255,255,${0.02 + 0.03 * hash(i, 1, 61)})`; g.fillRect(hash(i, 2, 61) * 260, hash(i, 3, 61) * 22, 6 + 30 * hash(i, 4, 61), 0.3); }
  g.fillStyle = "#C9CDD2"; g.textAlign = "center"; g.textBaseline = "middle";
  track(g, 2.2);
  fitFont(g, 700, 10, "GEORGE FOREMAN", 200);
  g.fillText("GEORGE FOREMAN", 130, 11.6);
}, 7);
/** a steam wisp: a few thin curling strands, soft */
const wispTex = (k: number) => paintTex(`hook41-wisp-${k}`, 64, 256, (g) => {
  g.clearRect(0, 0, 64, 256);
  g.filter = "blur(2.2px)";
  for (let s = 0; s < 3; s++) {
    g.strokeStyle = `rgba(255,255,255,${0.55 - 0.12 * s})`; g.lineWidth = 3.2 - 0.7 * s;
    g.beginPath();
    for (let y = 250; y >= 6; y -= 6) {
      const t = (250 - y) / 244;
      const x = 32 + (8 + 10 * t) * Math.sin(t * (5 + k) + s * 1.7 + k) + 4 * s * t;
      if (y === 250) g.moveTo(x, y); else g.lineTo(x, y);
    }
    g.stroke();
  }
  g.filter = "none";
  // fade in from the bottom, out at the top
  g.globalCompositeOperation = "destination-in";
  const gr = g.createLinearGradient(0, 256, 0, 0);
  gr.addColorStop(0, "rgba(0,0,0,0)"); gr.addColorStop(0.18, "rgba(0,0,0,1)"); gr.addColorStop(0.6, "rgba(0,0,0,0.7)"); gr.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = gr; g.fillRect(0, 0, 64, 256);
  g.globalCompositeOperation = "source-over";
}, 2);

// ══ GEOMETRY ══
/** a rounded block centred at (cx, cy, cz) */
const blk = (w: number, h: number, d: number, r: number, m: THREE.Material | Parameters<typeof rbox>[4], cx: number, cy: number, cz: number, seg = 3) => {
  const o = rbox(w, h, d, r, m, seg);
  o.position.set(cx, cy, cz + d / 2);
  return o;
};
/** a profile (shape x = world z, shape y = world y) extruded across x, ±halfW, its edges bevelled */
const across = (pts: [number, number][], halfW: number, bevel: number, m: THREE.Material) => {
  const sh = new THREE.Shape();
  pts.forEach(([z, y], i) => (i === 0 ? sh.moveTo(z, y) : sh.lineTo(z, y)));
  sh.closePath();
  const g = slabOf(sh, 2 * halfW, bevel, 4);
  g.rotateY(-Math.PI / 2);
  g.translate(-halfW, 0, 0);
  return mesh(g, m);
};
/** the ribbed plate's corrugated top (shape in x, y; extruded along z from z0 to z1): 22 ribs, 8 px tall, on a 1 px root */
const RIB_N = 22, RIB_P = 18.2, RIB_H = 8;
const ribGeo = (z0: number, z1: number) => {
  const sh = new THREE.Shape();
  const X = 200;
  sh.moveTo(-X, -1); sh.lineTo(-X, 0);
  for (let i = 0; i < RIB_N; i++) {
    const xc = -X + RIB_P * (i + 0.5) + (2 * X - RIB_N * RIB_P) / 2;
    sh.lineTo(xc - 5, 0); sh.lineTo(xc - 3, 6.5);
    sh.quadraticCurveTo(xc, 9.5, xc + 3, 6.5);
    sh.lineTo(xc + 5, 0);
  }
  sh.lineTo(X, 0); sh.lineTo(X, -1); sh.closePath();
  const g = new THREE.ExtrudeGeometry(sh, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  return g;
};

// ══ THE MODEL ═════════════════════════════════════════════════════════════════════════════════════
export type HookP = { f: number; cam: { c: number[]; t: number[] }; th: number; lift: number; sq: number; pull: number; ex: [BodyPose, BodyPose] };
/** the key, in the kitchen world: high, from the left and a little in front */
export const KEY_DIR: [number, number, number] = [-0.55, 0.8, 0.38];
/** the counter's pool of light (kitchen world: centre x, z; radii x, far z, near z) */
export const POOL = { c: [0, 120], r: [760, 520, 760] } as const;

export const hookModel = (T: HookT) => (): Model<HookP> => {
  const root = new THREE.Group();
  const world = new THREE.Group();
  world.matrixAutoUpdate = false;
  root.add(world);

  // materials
  const plastic = new THREE.MeshPhysicalMaterial({ color: col("#2B2D31"), roughness: 0.36, metalness: 0, clearcoat: 0.55, clearcoatRoughness: 0.32, envMapIntensity: 0.8 });
  const plasticDk = new THREE.MeshPhysicalMaterial({ color: col("#16171A"), roughness: 0.5, metalness: 0, clearcoat: 0.3, clearcoatRoughness: 0.5, envMapIntensity: 0.5 });
  const nonstick = new THREE.MeshPhysicalMaterial({ color: col("#303034"), roughness: 0.4, metalness: 0.35, clearcoat: 0.35, clearcoatRoughness: 0.3, envMapIntensity: 0.9 });
  const rubber = new THREE.MeshStandardMaterial({ color: col("#121214"), roughness: 0.85, metalness: 0 });
  const bt = brushed("hook41-brushed", "#A9AEB4", ["255,255,255", "70,76,84"]);
  bt.wrapS = bt.wrapT = THREE.RepeatWrapping;
  const steel = new THREE.MeshPhysicalMaterial({ color: col("#D2D6DB"), map: bt, roughnessMap: bt, bumpMap: bt, bumpScale: 0.25, metalness: 1, roughness: 0.5, envMapIntensity: 0.7 });
  const pinSteel = new THREE.MeshPhysicalMaterial({ color: col("#C8CCD2"), metalness: 1, roughness: 0.28, envMapIntensity: 1 });

  // ══ THE COUNTER (the floor): honed stone in a pool of light, falling to the dark ground and to nothing at the canvas's edges ══
  const counter = new THREE.Group();
  counter.userData.isFloor = true; counter.userData.noBounds = true;
  world.add(counter);
  const POOL_U = { res: { value: new THREE.Vector2(1, 1) } };
  {
    const st = stoneTex();
    st.wrapS = st.wrapT = THREE.RepeatWrapping; st.repeat.set(3, 3);
    const m = new THREE.MeshPhysicalMaterial({ map: st, roughness: 0.55, metalness: 0, clearcoat: 0.45, clearcoatRoughness: 0.4, envMapIntensity: 0.5, transparent: true, depthWrite: false });
    m.onBeforeCompile = (sh) => {
      sh.uniforms.cRes = POOL_U.res;
      sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec2 vCtr;")
        .replace("#include <begin_vertex>", "#include <begin_vertex>\nvCtr = position.xz;");
      sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec2 vCtr;\nuniform vec2 cRes;")
        .replace("#include <dithering_fragment>", `#include <dithering_fragment>
          vec2 cd = vCtr - vec2(${POOL.c[0].toFixed(1)}, ${POOL.c[1].toFixed(1)});
          float cq = length(cd / vec2(${POOL.r[0].toFixed(1)}, cd.y < 0.0 ? ${POOL.r[1].toFixed(1)} : ${POOL.r[2].toFixed(1)}));
          float ca = 1.0 - smoothstep(0.35, 1.0, cq);
          vec2 sp = gl_FragCoord.xy / cRes;
          float ce = smoothstep(0.0, 0.09, sp.x) * smoothstep(0.0, 0.09, 1.0 - sp.x) * smoothstep(0.0, 0.06, sp.y) * smoothstep(0.0, 0.06, 1.0 - sp.y);
          gl_FragColor.a *= ca * ce;
          if (gl_FragColor.a < 0.003) discard;`);
    };
    m.customProgramCacheKey = () => "hook41-counter";
    const cg = new THREE.PlaneGeometry(2400, 2000);
    cg.rotateX(-Math.PI / 2); cg.translate(0, 0, 200);
    const pl = mesh(cg, m, false, true);
    counter.add(pl);
  }

  // ══ THE GRILL ══
  const grill = new THREE.Group(); grill.userData.obj = "grill"; world.add(grill);
  // the base: the deck and back wall as one bevelled profile, the side walls, the pan, the feet
  grill.add(across([[BASE.Z1, BASE.CEIL], [BASE.Z1, BASE.FRONT_TOP], [BASE.Z0, BACK_TOP], [BASE.Z0, BASE.PAN - 0.4], [-160, BASE.PAN - 0.4], [-160, BASE.CEIL]], BASE.X, 5, plastic));
  for (const s of [-1, 1]) {
    const w = across([[BASE.Z1 - 0.4, BASE.FOOT], [BASE.Z1 - 0.4, BASE.CEIL + 3], [BASE.Z0 + 4, BASE.CEIL + 3], [BASE.Z0 + 4, BASE.FOOT]], (BASE.X - 1 - BASE.WALL) / 2, 3, plastic);
    w.position.x = s * (BASE.WALL + BASE.X - 1) / 2;
    grill.add(w);
  }
  grill.add(blk(2 * BASE.X - 6, BASE.PAN - BASE.FOOT, 366, 1.5, plasticDk, 0, (BASE.PAN + BASE.FOOT) / 2, 0));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const ft = mesh(new THREE.CylinderGeometry(13, 14, BASE.FOOT + 0.6, 24), rubber);
    ft.position.set(sx * (BASE.X - 26), (BASE.FOOT + 0.6) / 2, sz * 158);
    grill.add(ft);
  }
  // the plate frame
  const plate = new THREE.Group();
  plate.position.set(0, PO.y, 0); plate.rotation.x = TILT;
  grill.add(plate);
  {
    // the casting: its slab, the ribs, the rim (three sides raised, a low lip at the front) and the spout
    plate.add(blk(436, 6, 334, 2, nonstick, 0, 3.2, -5));
    plate.add(mesh(ribGeo(-160, 150), nonstick).translateY(6.2));
    for (const s of [-1, 1]) plate.add(blk(18, 11.5, 334, 3, nonstick, s * 209, 10.75, -5));
    plate.add(blk(400, 11.5, 12, 3, nonstick, 0, 10.75, -166));
    plate.add(blk(400, 5.5, 12, 2.5, nonstick, 0, 7.75, 150));
    plate.add(blk(56, 4, 42, 1.8, nonstick, 0, 8.5, 175));
    // the hinge posts at the back corners, each with its slot
    for (const s of [-1, 1]) {
      plate.add(blk(10, 142, 24, 3, plastic, s * 253, 31, -198));
      plate.add(blk(1, 56, 9, 0.4, plasticDk, s * 258.3, 64, -198, 2));
    }
  }
  // the lid: a group on the pin (the pin's axis is its origin), built in its shut pose relative to the pin
  const lidPin = new THREE.Group(); plate.add(lidPin);
  const lid = new THREE.Group(); lidPin.add(lid);
  {
    const P = (yl: number) => yl - PIVOT.yl, Z = (zl: number) => zl - PIVOT.zl;
    const up = mesh(ribGeo(-160, 150), nonstick);
    up.geometry.rotateZ(Math.PI);
    up.position.set(0, P(UP_TIP + RIB_H), 0); up.translateZ(Z(0));
    lid.add(up);
    lid.add(blk(436, 6, 334, 2, nonstick, 0, P(UP_TIP + RIB_H + 3), Z(-5)));
    for (const s of [-1, 1]) lid.add(blk(18, 12, 334, 3, nonstick, s * 209, P(24.2), Z(-5)));
    lid.add(blk(400, 12, 12, 3, nonstick, 0, P(24.2), Z(-166)));
    lid.add(blk(400, 7, 12, 2.5, nonstick, 0, P(26.7), Z(156)));
    // the shell, its domed brushed skin, the handle
    lid.add(blk(492, 54, 366, 22, plastic, 0, P(57.2), Z(3), 4));
    {
      const g = new THREE.PlaneGeometry(444, 318, 24, 18);
      g.rotateX(-Math.PI / 2);
      const p = g.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < p.count; i++) { const u = p.getX(i) / 222, v = p.getZ(i) / 159; p.setY(i, 9 * (1 - u * u) * (1 - v * v)); }
      g.computeVertexNormals();
      const skin = mesh(g, steel);
      skin.position.set(0, P(84.35), Z(3));
      lid.add(skin);
    }
    const hm = new THREE.MeshPhysicalMaterial({ map: handleTex(), roughness: 0.4, clearcoat: 0.5, clearcoatRoughness: 0.3, envMapIntensity: 0.7 });
    lid.add(blk(260, 22, 46, 9, { px: plastic, nx: plastic, top: plastic, bottom: plastic, front: hm, back: plastic }, 0, P(57), Z(203), 3));
    // the hinge tabs round the pin, the pin and its heads in the posts' slots
    for (const s of [-1, 1]) lid.add(blk(12, 26, 36, 4, plastic, s * 238, 0, 6));
    const pin = mesh(new THREE.CylinderGeometry(5, 5, 516, 20).rotateZ(Math.PI / 2), pinSteel);
    lid.add(pin);
    for (const s of [-1, 1]) {
      const hd = mesh(new THREE.CylinderGeometry(6.5, 6.5, 3, 24).rotateZ(Math.PI / 2), pinSteel);
      hd.position.x = s * 260; lid.add(hd);
    }
  }
  // the steak (its own object), on the lower ribs
  const steak = new THREE.Group(); steak.userData.obj = "steak";
  steak.position.set(STEAK.x, STEAK.y, STEAK.zl);
  plate.add(steak);
  {
    const sh = new THREE.Shape();
    STEAK_OUT.forEach(([x, y], i) => (i === 0 ? sh.moveTo(x, y) : sh.lineTo(x, y)));
    sh.closePath();
    const g = slabOf(sh, STEAK.t, 7, 6);
    g.rotateX(-Math.PI / 2); g.translate(0, STEAK.t, 0);
    const tx = steakTex();
    const top = new THREE.MeshPhysicalMaterial({ map: tx, roughness: 0.42, metalness: 0, clearcoat: 0.55, clearcoatRoughness: 0.3, sheen: 0.4, sheenColor: col("#E8A0A0"), envMapIntensity: 0.6 });
    const side = new THREE.MeshPhysicalMaterial({ map: tx, roughness: 0.5, metalness: 0, clearcoat: 0.4, clearcoatRoughness: 0.4, envMapIntensity: 0.5 });
    steak.add(mesh(g, [top, side]));
  }
  // the steam: wisps rising from the seam (films, not solids: transparent and never writing depth)
  const wisps: { m: THREE.Mesh; mat: THREE.MeshBasicMaterial; k: number }[] = [];
  const steam = new THREE.Group(); steam.userData.noBounds = true; world.add(steam);
  for (let k = 0; k < 7; k++) {
    const mat = new THREE.MeshBasicMaterial({ map: wispTex(k % 3), transparent: true, depthWrite: false, opacity: 0, toneMapped: false, color: col("#F4F1EC") });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(56, 230), mat);
    m.castShadow = false; m.receiveShadow = false; m.renderOrder = 5;
    steam.add(m);
    wisps.push({ m, mat, k });
  }

  // ══ THE DRAWER AND THE CASH ══
  const drawer = new THREE.Group(); world.add(drawer);
  const tray = new THREE.Group(); tray.userData.obj = "tray"; drawer.add(tray);
  {
    const D = DRW;
    const inner = D.Z1 - D.FACE_T;
    tray.add(blk(2 * D.X, D.FLOOR - D.BOT, inner - D.Z0, 1.6, plasticDk, 0, (D.FLOOR + D.BOT) / 2, (D.Z0 + inner) / 2));
    tray.add(blk(2 * D.X, D.WALL - D.BOT, 6, 2, plasticDk, 0, (D.WALL + D.BOT) / 2, D.Z0 + 3));
    for (const s of [-1, 1]) tray.add(blk(6, D.WALL - D.BOT, inner - D.Z0, 2, plasticDk, s * (D.X - 3), (D.WALL + D.BOT) / 2, (D.Z0 + inner) / 2));
    tray.add(blk(2 * D.X + 2, D.TOP - D.BOT - 0.4, D.FACE_T, 3, plastic, 0, (D.TOP + D.BOT + 0.4) / 2, inner + D.FACE_T / 2));
    // the pull: a brushed bar on two short posts
    tray.add(blk(170, 9, 5, 2.5, steel, 0, 46, D.Z1 + 5.5));
    for (const s of [-1, 1]) tray.add(blk(10, 7, 5.2, 1.5, steel, s * 74, 46, D.Z1 + 2.5));
  }
  const bundles: THREE.Object3D[] = [];
  for (let L = 0; L < BRICK.layers; L++) BRICK.cols.forEach((x, i) => {
    const b = makeBundle({ seed: L * 4 + i, strap: "", flip: (L + i) % 2 === 1 });
    b.rotation.y = Math.PI / 2;
    b.position.set(x, BRICK.y0 + L * BP, BRICK.zc);
    drawer.add(b); bundles.push(b);
  });
  const band = makeBand({ w: BAND.w, zIn: BAND.zIn, yTop: BAND_TOP - 0.32 - 0.32 - (DRW.FLOOR + 0.15), text: BAND.text, seed: 4.2, key: "hook41-band-200m" });
  band.rotation.y = Math.PI / 2;
  band.position.set(0, DRW.FLOOR + 0.15, BAND.zc);
  band.userData.obj = "band";
  drawer.add(band);
  const extras = [0, 1].map((k) => {
    const o = makeBundle({ seed: 20 + k, strap: "" });
    o.visible = false;
    drawer.add(o);
    return o;
  });

  const V = new THREE.Matrix4(), Vinv = new THREE.Matrix4();
  const KEY_W = new THREE.Vector3(...KEY_DIR).normalize(), keyDir = new THREE.Vector3();
  const qCam = new THREE.Quaternion(), sTmp = new THREE.Vector3(), pTmp2 = new THREE.Vector3();
  const model: Model<HookP> = { root, rig: { dir: [...KEY_DIR] } };
  model.update = (p) => {
    viewMatrix(p.cam.c, p.cam.t, V);
    world.matrix.copy(V);
    world.matrixWorldNeedsUpdate = true;
    keyDir.copy(KEY_W).transformDirection(V);
    model.rig!.dir = [keyDir.x, keyDir.y, keyDir.z];
    POOL_U.res.value.set(drawSize.w, drawSize.h);
    // the lid on its pin, the pin up its slots
    lidPin.position.set(0, PIVOT.yl + p.lift, PIVOT.zl);
    lid.rotation.x = -p.th;
    steak.scale.set(1, p.sq, 1);
    drawer.position.z = p.pull;
    p.ex.forEach((e, k) => {
      const o = extras[k];
      o.visible = e.vis;
      o.position.set(e.x, e.y, e.z);
      o.rotation.set(0, rad(e.yaw), rad(e.roll), "YXZ");
    });
    // the wisps face the lens (the inverse of the view's turn) and rise from the seam
    Vinv.copy(V).invert(); Vinv.decompose(pTmp2, qCam, sTmp);
    for (const w of wisps) {
      const ws = wispAt(T, w.k, p.f, p.lift);
      w.mat.opacity = ws.op;
      w.m.visible = ws.op > 0.004;
      w.m.position.set(ws.x, ws.y, ws.z);
      w.m.quaternion.copy(qCam);
      w.m.scale.set(ws.sc, ws.sc, 1);
    }
  };
  return model;
};
