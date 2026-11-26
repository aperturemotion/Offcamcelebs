// ══════════════════════════════════════════════════════════════════════════════════════════════
// GRILL IN 3-D (041) — "In the 90s, a company called Salton sold a grill with his name on it, and paid royalties on every
// sale." On the dark ground, a real store shelf and what stands on it:
//   · THE SHELF: one gondola shelf deck of powder-coated sheet steel (a warm light grey, an orange-peel coat, the scuffs of
//     boxes slid on and off it), its front edge bent down into a lip with a clear price channel (empty: no tags), a short
//     upturn at the back. Its ends lie beyond the frame.
//   · THE BOXES: four retail boxes of the grill, each a printed corrugated carton (white coated board over the flutes, the
//     flutes showing faintly through the print, the panels bowed a hair, the edges and corners rubbed), its top sealed by two
//     flaps meeting on a seam under a strip of clear tape. The face: SALTON small, THE GEORGE / FOREMAN / GRILL big in navy,
//     a navy line drawing of the grill in profile (the sloped base, the hinged lid, the handle, the drip tray), his face
//     photo small in the top corner (assets/foreman_face.png, Wikimedia Commons, credited in assets/brand/SOURCES.txt).
//     The first slides in on the shelf from the right and stops on "Salton" (it tips forward on its leading edge as friction
//     stops it and drops back flat: the thump). On "and paid royalties" three more slide in behind it, one from the left and
//     two from the right, each with a $100 note lying on its top.
//   · THE NOTES AND THE TRAY: as each of the three lands, the jolt lifts its note off the top and it sails forward over the
//     first box and flutters down into a solid oak tray on the shelf in front (real note art from props/cash.ts), one on
//     another: a royalty for every sale.
// Units are layer px; shelf-local h UP from the shelf's top (the top at layer y SH.floor), z toward the viewer.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, imageOf, type Model } from "../stage";
import { rbox, col, rad, hash, fitFont, track, font } from "../kit029";
import { noteMaterials, keepFresh, NOTE } from "./cash";
import { clamp01 } from "../../r45/tokens";

export const SH = { floor: 1330, x0: -500, x1: 1560, z0: -800, z1: 210, lip: 46, up: 18 } as const;
/** a grill's retail box: width (x), height, depth (z) — 33 × 25 × 14 cm at the note's scale */
export const BX = { w: 500, h: 390, d: 210, r: 3.2, bulge: 1.8, top: 0.8 } as const;
/** the boxes' rest (the centre of the underside) and turn; `dir` the way each slides in (−1 from the right, +1 from the left) */
export const BOXES = [
  { x: 500, z: -110, yaw: 0.8, dir: -1 },      // the first: front and centre
  { x: 212, z: -400, yaw: -1.4, dir: 1 },      // behind it, left
  { x: 742, z: -400, yaw: 1.1, dir: -1 },      // behind it, right
  { x: 486, z: -662, yaw: -0.6, dir: -1 },     // furthest back, centre
] as const;
/** the oak tray: centre (x, z), outer size, wall thickness and height, base thickness */
export const TRAY = { x: 500, z: 96, w: 292, d: 156, wall: 14, h: 32, base: 6 } as const;
export const TRAY_IN = { w: TRAY.w - 2 * TRAY.wall, d: TRAY.d - 2 * TRAY.wall } as const;
/** a loose note: its ends lift CURL off its middle; its thickness */
export const CURL = 2.2;
const NT = 0.25;
const LIFT = 0.2;              // a box or the tray: its underside a hair over the shelf
/** where note k lies on its box's top (box-local x, z, turn) and where it comes to rest in the tray (offset x, z, turn) */
export const NOTE_ON = [{ dx: -28, dz: 6, yaw: 5 }, { dx: 22, dz: -4, yaw: -4 }, { dx: -12, dz: 2, yaw: 3 }] as const;
export const NOTE_IN = [{ dx: -4, dz: 3, yaw: -0.9 }, { dx: 3, dz: -3, yaw: 0.8 }, { dx: -1, dz: 1, yaw: -0.4 }] as const;
/** a note's rest height in the tray: on the tray's floor, one on another */
export const noteRestH = (k: number) => LIFT + TRAY.base + 0.25 + k * 1.0;   // ★ a curled note's ends stand proud of a neighbour's
const NOTE_TOP_H = BX.h + LIFT + BX.top + 0.35;

// ══ POSES ══
export type GrillTiming = {
  /** box k slides from s[0] and stops at s[1] (friction); it tips on its leading edge and is flat again at s[1] + TIP_BACK */
  slides: readonly (readonly [number, number])[];
  /** a note's flight (frames) */
  fly: number;
};
export const TIP_BACK = 4;
/** a note's flight: over the tray at this fraction of it (then it flutters down) */
const SAIL = 0.58;
const SLIDE_D = 1150;
const TIP = rad(1.5);
/** the frame box k lands (flat again after its tip): its thump, and its note's launch */
export const landOf = (T: GrillTiming, k: number) => T.slides[k][1] + TIP_BACK;
/** box k at f: friction slide (constant deceleration, x = x0 + d(1 − u)²), the tip forward on its leading bottom edge over
 *  its last frames and the drop back */
export const poseBox = (T: GrillTiming, k: number, f: number) => {
  const b = BOXES[k], [a, e] = T.slides[k];
  const u = clamp01((f - a) / (e - a));
  const x = b.x - b.dir * SLIDE_D * (1 - u) ** 2;
  // the tip: up over its last 6 frames of the slide, down (gravity: accelerating) over TIP_BACK
  let t = 0;
  if (f > e - 6 && f <= e) t = Math.sin((Math.PI / 2) * ((f - (e - 6)) / 6));
  else if (f > e && f < e + TIP_BACK) { const q = (f - e) / TIP_BACK; t = 1 - q * q; }
  return { x, z: b.z, yaw: b.yaw, tilt: -b.dir * TIP * t, piv: (b.dir * BX.w) / 2, visible: f > a - 1 };
};
/** note k (on box k + 1) at f: on its box until the box lands, then in flight, then at rest in the tray */
export const poseNote = (T: GrillTiming, k: number, f: number) => {
  const bk = k + 1, L = landOf(T, bk), on = NOTE_ON[k], inn = NOTE_IN[k];
  const bp = poseBox(T, bk, Math.min(f, L));
  const c = Math.cos(rad(bp.yaw)), s = Math.sin(rad(bp.yaw));
  const P0 = { x: bp.x + on.dx * c + on.dz * s, h: NOTE_TOP_H, z: bp.z - on.dx * s + on.dz * c };
  const P3 = { x: TRAY.x + inn.dx, h: noteRestH(k), z: TRAY.z + inn.dz };
  const yaw0 = bp.yaw + on.yaw, yaw1 = inn.yaw;
  if (f <= L) return { x: P0.x, h: P0.h, z: P0.z, yaw: yaw0, rx: 0, rz: 0, flying: false, attached: true, visible: bp.visible };
  const u = clamp01((f - L) / T.fly);
  // the path: across (eased out, over the tray by SAIL) and, apart from that, up and down: the jolt lifts it to its apex,
  //   it sails on over the first box, then flutters down onto the tray, swaying, slowing as it settles (Hermite keys)
  const sl = 1 - (1 - clamp01(u / SAIL)) ** 2;
  const hermite = (v: number, a: number, b: number, ma: number, mb: number, d: number) =>
    (2 * v ** 3 - 3 * v * v + 1) * a + (v ** 3 - 2 * v * v + v) * ma * d + (-2 * v ** 3 + 3 * v * v) * b + (v ** 3 - v * v) * mb * d;
  const APEX = BX.h + 120, OVER = BX.h + 50;
  const h = u < 0.3 ? hermite(u / 0.3, P0.h, APEX, 700, 0, 0.3)
    : u < SAIL ? hermite((u - 0.3) / (SAIL - 0.3), APEX, OVER, 0, -500, SAIL - 0.3)
      : hermite((u - SAIL) / (1 - SAIL), OVER, P3.h, -500, -60, 1 - SAIL);
  const fall = clamp01((u - SAIL) / (1 - SAIL)), sway = (1 - fall) ** 2 * (u > SAIL ? 1 : 0);
  const damp = (1 - u) ** 1.4;
  return {
    x: P0.x + (P3.x - P0.x) * sl + 7 * Math.sin(fall * Math.PI * 2.2 + k) * sway, h, z: P0.z + (P3.z - P0.z) * sl + 5 * Math.sin(fall * Math.PI * 1.7 + 2 * k) * sway,
    yaw: yaw0 + (yaw1 - yaw0) * sl + 9 * Math.sin(Math.PI * u) * (k % 2 ? -1 : 1),
    rx: 0.16 * Math.sin(u * Math.PI * 2.6 + 0.7 * k) * damp, rz: 0.22 * Math.sin(u * Math.PI * 3.1 + 1.3 * k) * damp,
    flying: u < 1, attached: false, visible: true,
  };
};
/** a note's outline points (note-local, its curl) turned to its pose: [x, h, z] */
export const notePts = (p: { x: number; h: number; z: number; yaw: number; rx: number; rz: number }) => {
  const e = new THREE.Euler(p.rx, rad(p.yaw), p.rz, "YXZ");
  const out: [number, number, number][] = [];
  for (const lx of [-NOTE.W / 2, -NOTE.W / 4, 0, NOTE.W / 4, NOTE.W / 2]) for (const lz of [-NOTE.D / 2, 0, NOTE.D / 2]) {
    const v = new THREE.Vector3(lx, CURL * (lx / (NOTE.W / 2)) ** 2, lz).applyEuler(e);
    out.push([p.x + v.x, p.h + v.y, p.z + v.z]);
  }
  return out;
};
/** a box's footprint corners (x, z) and its top's height at rest */
export const boxCorners = (k: number, x = BOXES[k].x) => {
  const b = BOXES[k], c = Math.cos(rad(b.yaw)), s = Math.sin(rad(b.yaw));
  return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([i, j]) => {
    const lx = (i * BX.w) / 2, lz = (j * BX.d) / 2;
    return [x + lx * c + lz * s, b.z - lx * s + lz * c] as [number, number];
  });
};
/** is (x, z) inside box k's footprint (grown by m)? */
export const inBox = (k: number, x: number, z: number, m = 0) => {
  const b = BOXES[k], c = Math.cos(rad(b.yaw)), s = Math.sin(rad(b.yaw));
  const dx = x - b.x, dz = z - b.z;
  const lx = dx * c - dz * s, lz = dx * s + dz * c;
  return Math.abs(lx) <= BX.w / 2 + m && Math.abs(lz) <= BX.d / 2 + m;
};
export const BOX_TOP_H = BX.h + LIFT + BX.top;
/** where the print sits on a box's face (print px boxes x0, y0, x1, y1; y from the top) */
export const PRINT = {
  salton: [24, 20, 150, 50] as const,
  photo: [352, 16, 478, 142] as const,
  title: [22, 62, 342, 244] as const,
  drawing: [96, 258, 430, 358] as const,
};
/** a point on box k's front face (print px u from the left, v from the top) at a pose: [x, h, z] */
export const facePt = (k: number, p: { x: number; z: number; yaw: number }, u: number, v: number): [number, number, number] => {
  const lx = u - BX.w / 2, lz = BX.d / 2, c = Math.cos(rad(p.yaw)), s = Math.sin(rad(p.yaw));
  void k;
  return [p.x + lx * c + lz * s, LIFT + BX.h - v, p.z - lx * s + lz * c];
};

// ══ SURFACES ══
const NAVY = "#1C3157", BOARD = "#F1EFE9";
const speckle = (g: CanvasRenderingContext2D, w: number, h: number, n: number, seed: number, dark = "90,85,75", light = "255,255,250") => {
  for (let i = 0; i < n; i++) {
    g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? dark : light},${0.03 + 0.05 * hash(i, 2, seed)})`;
    g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 0.5 + 1.6 * hash(i, 5, seed), 0.4);
  }
};
/** handling: grime along the edges, the corners rubbed through to the kraft, a few light scratches */
const wear = (g: CanvasRenderingContext2D, w: number, h: number, seed: number) => {
  const e = 10;
  for (const [x, y, ww, hh, dx, dy] of [[0, 0, w, e, 0, 1], [0, h - e, w, e, 0, -1], [0, 0, e, h, 1, 0], [w - e, 0, e, h, -1, 0]] as const) {
    const gr = dx ? g.createLinearGradient(dx > 0 ? x : x + ww, 0, dx > 0 ? x + ww : x, 0) : g.createLinearGradient(0, dy > 0 ? y : y + hh, 0, dy > 0 ? y + hh : y);
    gr.addColorStop(0, "rgba(80,70,55,0.16)"); gr.addColorStop(1, "rgba(80,70,55,0)");
    g.fillStyle = gr; g.fillRect(x, y, ww, hh);
  }
  for (const [cx, cy] of [[0, 0], [w, 0], [0, h], [w, h]]) {
    const r = 7 + 9 * hash(cx, cy, seed);
    const gr = g.createRadialGradient(cx, cy, 0, cx, cy, r);
    gr.addColorStop(0, "rgba(150,112,70,0.55)"); gr.addColorStop(0.5, "rgba(170,140,100,0.25)"); gr.addColorStop(1, "rgba(170,140,100,0)");
    g.fillStyle = gr; g.fillRect(cx - r, cy - r, 2 * r, 2 * r);
  }
  for (let i = 0; i < 7; i++) {
    g.strokeStyle = `rgba(255,255,255,${0.12 + 0.12 * hash(i, 7, seed)})`; g.lineWidth = 0.5;
    const x = hash(i, 8, seed) * w, y = hash(i, 9, seed) * h, a = hash(i, 10, seed) * 3, l = 8 + 26 * hash(i, 11, seed);
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
  }
};
/** the grill in profile, as a navy line drawing: the sloped base on its feet, the hinged lid, the handle, the drip tray */
const drawGrill = (g: CanvasRenderingContext2D, x0: number, y0: number, s: number, lw: number) => {
  g.save(); g.translate(x0, y0); g.scale(s, s);
  g.lineJoin = "round"; g.lineCap = "round"; g.strokeStyle = NAVY; g.lineWidth = lw / s;
  // the base: back wall tall, its plate sloping down to the front lip
  g.fillStyle = "#DCE2EA";
  g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -44); g.lineTo(250, -26); g.lineTo(262, -24); g.lineTo(262, -8); g.quadraticCurveTo(262, 0, 252, 0); g.closePath(); g.fill(); g.stroke();
  // the lid: hinged at the back, a low dome over the plate to the front, its skin
  g.fillStyle = "#C5CEDB";
  g.beginPath(); g.moveTo(-4, -46); g.bezierCurveTo(10, -92, 150, -96, 246, -60); g.quadraticCurveTo(262, -52, 256, -30); g.lineTo(250, -26); g.lineTo(0, -44); g.closePath(); g.fill(); g.stroke();
  // the lid's band and its vents
  g.beginPath(); g.moveTo(6, -58); g.bezierCurveTo(60, -78, 170, -80, 246, -52); g.stroke();
  for (let i = 0; i < 5; i++) { g.beginPath(); g.moveTo(70 + i * 22, -76 + i * 0.6); g.lineTo(80 + i * 22, -76 + i * 0.6); g.stroke(); }
  // the hinge
  g.beginPath(); g.arc(-2, -45, 5, 0, Math.PI * 2); g.stroke();
  // the handle: off the lid's front edge
  g.fillStyle = "#AEB9C9";
  g.beginPath(); g.moveTo(248, -46); g.lineTo(292, -50); g.quadraticCurveTo(302, -48, 300, -40); g.lineTo(256, -34); g.closePath(); g.fill(); g.stroke();
  // the feet, and the drip tray under the front lip
  g.fillStyle = NAVY;
  g.fillRect(14, 0, 22, 6); g.fillRect(214, 0, 22, 6);
  g.fillStyle = "#DCE2EA";
  g.beginPath(); g.moveTo(248, 2); g.lineTo(304, 2); g.lineTo(300, 14); g.lineTo(252, 14); g.closePath(); g.fill(); g.stroke();
  // the plate's ribs seen at the seam
  for (let i = 0; i < 9; i++) { const x = 24 + i * 26; g.beginPath(); g.moveTo(x, -42.5 + i * 1.8); g.lineTo(x + 8, -41.8 + i * 1.8); g.stroke(); }
  g.restore();
};
/** the face of a box: SALTON, the photo, the title, the drawing, the navy band */
const frontTex = () => paintTex("grill41-front-v2", BX.w, BX.h, (g) => {
  const W = BX.w, H = BX.h;
  g.fillStyle = BOARD; g.fillRect(0, 0, W, H);
  speckle(g, W, H, 2600, 3);
  // a soft cool wash behind the drawing
  const wash = g.createLinearGradient(0, 240, 0, 360);
  wash.addColorStop(0, "rgba(205,216,232,0)"); wash.addColorStop(1, "rgba(205,216,232,0.75)");
  g.fillStyle = wash; g.fillRect(0, 240, W, 122);
  // SALTON, small, and its rule
  g.fillStyle = NAVY; g.textAlign = "left"; g.textBaseline = "alphabetic";
  track(g, 5); fitFont(g, 800, 25, "SALTON", 124); g.fillText("SALTON", 24, 44); track(g, 0);
  g.fillRect(24, 52, 120, 2);
  // the photo: a rounded window, a white keyline and a navy rule round it
  const [px0, py0, px1, py1] = PRINT.photo, r = 9;
  const rr = (x0: number, y0: number, x1: number, y1: number, rad0: number) => {
    g.beginPath(); g.moveTo(x0 + rad0, y0); g.arcTo(x1, y0, x1, y1, rad0); g.arcTo(x1, y1, x0, y1, rad0); g.arcTo(x0, y1, x0, y0, rad0); g.arcTo(x0, y0, x1, y0, rad0); g.closePath();
  };
  g.fillStyle = NAVY; rr(px0 - 3, py0 - 3, px1 + 3, py1 + 3, r + 2); g.fill();
  g.fillStyle = "#FFFFFF"; rr(px0, py0, px1, py1, r); g.fill();
  g.save(); rr(px0 + 3, py0 + 3, px1 - 3, py1 - 3, r - 2); g.clip();
  const im = imageOf("assets/foreman_face.png");
  if (im.complete && im.naturalWidth > 0) g.drawImage(im, 40, 10, 680, 700, px0 + 3, py0 + 3, px1 - px0 - 6, py1 - py0 - 6);
  else { g.fillStyle = "#6C86B5"; g.fillRect(px0, py0, px1 - px0, py1 - py0); }
  g.restore();
  // the title, big, in navy
  g.fillStyle = NAVY;
  track(g, 1.5); fitFont(g, 700, 36, "THE GEORGE", 300); g.fillText("THE GEORGE", 24, 96);
  track(g, 0.5); fitFont(g, 800, 64, "FOREMAN", 318); g.fillText("FOREMAN", 21, 156);
  track(g, 1); fitFont(g, 800, 104, "GRILL", 318); g.fillText("GRILL", 19, 240); track(g, 0);
  // the drawing
  drawGrill(g, 118, 340, 0.98, 2.2);
  // the navy band at the foot
  g.fillStyle = NAVY; g.fillRect(0, 362, W, H - 362);
  g.fillStyle = "rgba(255,255,255,0.5)"; g.fillRect(0, 360, W, 1.2);
  wear(g, W, H, 5);
}, 3);
/** a side panel: the navy band, a small drawing, the title small */
const sideTex = () => paintTex("grill41-side-v2", BX.d, BX.h, (g) => {
  const W = BX.d, H = BX.h;
  g.fillStyle = BOARD; g.fillRect(0, 0, W, H);
  speckle(g, W, H, 1200, 7);
  g.fillStyle = NAVY; g.textAlign = "left"; g.textBaseline = "alphabetic";
  track(g, 1); fitFont(g, 800, 22, "THE GEORGE FOREMAN", W - 36); g.fillText("THE GEORGE FOREMAN", 18, 60);
  fitFont(g, 800, 40, "GRILL", W - 36); g.fillText("GRILL", 17, 102); track(g, 0);
  g.fillRect(18, 114, 60, 2);
  drawGrill(g, 30, 300, 0.48, 1.6);
  // the tape's tail down from the top
  g.fillStyle = "rgba(236,226,190,0.38)"; g.fillRect(W / 2 - 23, 0, 46, 34);
  g.fillStyle = "rgba(255,255,255,0.3)"; g.fillRect(W / 2 - 23, 0, 46, 1.2);
  g.fillStyle = NAVY; g.fillRect(0, 362, W, H - 362);
  wear(g, W, H, 11);
}, 3);
/** the back: plain board, the band */
const backTex = () => paintTex("grill41-back-v1", BX.w, BX.h, (g) => {
  g.fillStyle = BOARD; g.fillRect(0, 0, BX.w, BX.h);
  speckle(g, BX.w, BX.h, 1600, 13);
  g.fillStyle = NAVY; g.fillRect(0, 362, BX.w, BX.h - 362);
  wear(g, BX.w, BX.h, 17);
}, 1.5);
/** the top: the two flaps meeting on a seam across it, a strip of clear tape over the seam, the score lines near the edges */
const topTex = () => paintTex("grill41-top-v2", BX.w, BX.d, (g) => {
  const W = BX.w, H = BX.d;
  g.fillStyle = BOARD; g.fillRect(0, 0, W, H);
  speckle(g, W, H, 1600, 19);
  // the score lines where the flaps fold over the walls
  g.fillStyle = "rgba(90,80,65,0.14)"; g.fillRect(0, 3, W, 1); g.fillRect(0, H - 4, W, 1);
  // the seam: a hairline of kraft between the flaps
  g.fillStyle = "rgba(120,88,52,0.9)"; g.fillRect(0, H / 2 - 0.8, W, 1.6);
  g.fillStyle = "rgba(60,45,30,0.35)"; g.fillRect(0, H / 2 + 0.8, W, 1.2);
  // the tape: faintly yellow, its edges catching the light, a few wrinkles
  g.fillStyle = "rgba(236,226,188,0.34)"; g.fillRect(0, H / 2 - 23, W, 46);
  g.fillStyle = "rgba(255,255,255,0.4)"; g.fillRect(0, H / 2 - 23, W, 1); g.fillRect(0, H / 2 + 22, W, 1);
  for (let i = 0; i < 9; i++) { g.fillStyle = `rgba(255,255,255,${0.1 + 0.12 * hash(i, 3, 23)})`; g.fillRect(hash(i, 4, 23) * W, H / 2 - 23, 0.8, 46); }
  wear(g, W, H, 29);
}, 2);
/** the flutes under the print: fine ribs (a bump map), and the coat's faint unevenness */
let fluteT: THREE.Texture | null = null;
const flutes = () => {
  if (fluteT) return fluteT;
  const c = document.createElement("canvas"); c.width = 256; c.height = 64;
  const g = c.getContext("2d")!;
  for (let x = 0; x < 256; x++) { const v = 128 + 26 * Math.sin((x / 256) * Math.PI * 2 * 40); g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(x, 0, 1, 64); }
  for (let i = 0; i < 600; i++) { const v = 100 + 60 * hash(i, 1, 31); g.fillStyle = `rgba(${v},${v},${v},0.25)`; g.fillRect(hash(i, 2, 31) * 256, hash(i, 3, 31) * 64, 2, 2); }
  fluteT = new THREE.CanvasTexture(c);
  fluteT.wrapS = fluteT.wrapT = THREE.RepeatWrapping;
  return fluteT;
};
/** powder-coated steel: an orange-peel bump */
let peelT: THREE.Texture | null = null;
const peel = () => {
  if (peelT) return peelT;
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 5000; i++) {
    const v = 100 + Math.round(56 * hash(i, 41, 3));
    g.fillStyle = `rgba(${v},${v},${v},0.35)`;
    g.beginPath(); g.arc(hash(i, 42, 3) * 256, hash(i, 43, 3) * 256, 1.5 + 2.5 * hash(i, 44, 3), 0, Math.PI * 2); g.fill();
  }
  peelT = new THREE.CanvasTexture(c);
  peelT.wrapS = peelT.wrapT = THREE.RepeatWrapping;
  peelT.repeat.set(14, 5);
  return peelT;
};
/** the deck's top: the coat a little uneven, the pale scuffs and dark marks of boxes slid on it */
const deckTex = () => {
  const W = SH.x1 - SH.x0, D = SH.z1 - SH.z0;
  return paintTex("grill41-deck-v1", W, D, (g) => {
    g.fillStyle = "#B9B6AE"; g.fillRect(0, 0, W, D);
    g.save(); g.filter = "blur(20px)";
    for (let i = 0; i < 90; i++) {
      g.fillStyle = `rgba(${hash(i, 1, 51) > 0.5 ? "95,92,86" : "220,218,212"},${0.04 + 0.05 * hash(i, 2, 51)})`;
      g.beginPath(); g.ellipse(hash(i, 3, 51) * W, hash(i, 4, 51) * D, 60 + 180 * hash(i, 5, 51), 30 + 70 * hash(i, 6, 51), 0, 0, Math.PI * 2); g.fill();
    }
    g.restore();
    for (let i = 0; i < 260; i++) {   // the scuffs run along the shelf (boxes slide on and off it sideways)
      const y = hash(i, 7, 51) * D, x = hash(i, 8, 51) * W, l = 30 + 220 * hash(i, 9, 51);
      g.fillStyle = hash(i, 10, 51) > 0.35 ? `rgba(70,66,60,${0.05 + 0.07 * hash(i, 11, 51)})` : `rgba(235,233,228,${0.06 + 0.08 * hash(i, 11, 51)})`;
      g.fillRect(x, y, l, 0.6 + 1.4 * hash(i, 12, 51));
    }
    // the front's rounded bend: a hair darker where the coat thins
    const gr = g.createLinearGradient(0, D - 14, 0, D);
    gr.addColorStop(0, "rgba(60,58,54,0)"); gr.addColorStop(1, "rgba(60,58,54,0.16)");
    g.fillStyle = gr; g.fillRect(0, D - 14, W, 14);
  }, 0.7);
};
/** oak: straight grain along x, open pores, a satin oil */
const oakTex = () => paintTex("grill41-oak-v1", 512, 256, (g) => {
  const w = 512, h = 256;
  g.fillStyle = "#B08356"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 40; i++) {
    const p = hash(i, 1, 61) * h, wd = 3 + 16 * hash(i, 2, 61);
    g.fillStyle = hash(i, 3, 61) > 0.5 ? `rgba(210,168,120,${0.1 + 0.12 * hash(i, 4, 61)})` : `rgba(96,62,32,${0.1 + 0.12 * hash(i, 4, 61)})`;
    g.fillRect(0, p, w, wd);
  }
  for (let i = 0; i < 200; i++) {
    const p0 = hash(i, 5, 61) * h, a = 1 + 3 * hash(i, 6, 61), ph = hash(i, 7, 61) * 6.28;
    g.strokeStyle = hash(i, 8, 61) > 0.4 ? `rgba(90,56,28,${0.12 + 0.2 * hash(i, 9, 61)})` : `rgba(225,190,140,${0.08 + 0.1 * hash(i, 9, 61)})`;
    g.lineWidth = 0.35 + 0.9 * hash(i, 10, 61);
    g.beginPath();
    for (let s = 0; s <= w; s += 6) { const d = p0 + a * Math.sin(s / 60 + ph) + 0.5 * Math.sin(s / 11 + ph * 2); if (s === 0) g.moveTo(s, d); else g.lineTo(s, d); }
    g.stroke();
  }
  for (let i = 0; i < 2400; i++) { g.fillStyle = `rgba(70,42,20,${0.18 + 0.25 * hash(i, 11, 61)})`; g.fillRect(hash(i, 12, 61) * w, hash(i, 13, 61) * h, 1 + 4 * hash(i, 14, 61), 0.6); }
}, 2);

// ══ GEOMETRY ══
/** ★ a carton: a box subdivided toward its edges, its edges rounded (r), its panels bowed out a hair (the top less, the
 *  bottom flat), UVs written per panel from the final shape so the print lands square. Origin: the underside's centre. */
const cartonGeo = () => {
  const N = 22;
  const g = new THREE.BoxGeometry(1, 1, 1, N, N, N);
  const hx = BX.w / 2, hy = BX.h / 2, hz = BX.d / 2, r = BX.r;
  const pos = g.attributes.position as THREE.BufferAttribute, uv = g.attributes.uv as THREE.BufferAttribute;
  const per = (N + 1) * (N + 1);
  const v = new THREE.Vector3(), inner = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    const plane = Math.floor(i / per);   // px, nx, py, ny, pz, nz
    v.set(pos.getX(i), pos.getY(i), pos.getZ(i));
    // denser toward the edges, then scaled
    v.set(0.5 * Math.sin(Math.PI * v.x) * 2 * hx, 0.5 * Math.sin(Math.PI * v.y) * 2 * hy, 0.5 * Math.sin(Math.PI * v.z) * 2 * hz);
    inner.set(THREE.MathUtils.clamp(v.x, -hx + r, hx - r), THREE.MathUtils.clamp(v.y, -hy + r, hy - r), THREE.MathUtils.clamp(v.z, -hz + r, hz - r));
    const d = v.clone().sub(inner);
    if (d.lengthSq() > 1e-9) v.copy(inner).add(d.setLength(r));
    const qx = 1 - (v.x / hx) ** 2, qy = 1 - (v.y / hy) ** 2, qz = 1 - (v.z / hz) ** 2;
    if (plane === 4) v.z += BX.bulge * qx * qy;
    else if (plane === 5) v.z -= BX.bulge * qx * qy;
    else if (plane === 0) v.x += BX.bulge * 0.7 * qz * qy;
    else if (plane === 1) v.x -= BX.bulge * 0.7 * qz * qy;
    else if (plane === 2) v.y += BX.top * qx * qz;
    pos.setXYZ(i, v.x, v.y + hy, v.z);
    const U = (a: number, h: number) => THREE.MathUtils.clamp((a + h) / (2 * h), 0, 1);
    const yy = v.y;
    if (plane === 4) uv.setXY(i, U(v.x, hx), U(yy, hy));
    else if (plane === 5) uv.setXY(i, U(-v.x, hx), U(yy, hy));
    else if (plane === 0) uv.setXY(i, U(-v.z, hz), U(yy, hy));
    else if (plane === 1) uv.setXY(i, U(v.z, hz), U(yy, hy));
    else if (plane === 2) uv.setXY(i, U(v.x, hx), U(-v.z, hz));
    else uv.setXY(i, U(v.x, hx), U(v.z, hz));
  }
  pos.needsUpdate = true; uv.needsUpdate = true;
  g.computeVertexNormals();
  g.computeBoundingBox(); g.computeBoundingSphere();
  return g;
};
/** a loose note: curled (its ends lift CURL off its middle), the face up, the back down; its underside's middle at 0 */
const noteGeo = () => {
  const sx = 24, sz = 4;
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
  return g;
};

export type GrillP = { f: number };

export const grillModel = (T: GrillTiming) => (): Model<GrillP> => {
  const root = new THREE.Group();
  const FY = -SH.floor;

  // ══ THE SHELF ══
  const shelf = new THREE.Group(); shelf.userData.obj = "shelf"; root.add(shelf);
  {
    const W = SH.x1 - SH.x0, D = SH.z1 - SH.z0, cx = (SH.x0 + SH.x1) / 2;
    const coat = new THREE.MeshPhysicalMaterial({ color: col("#B4B1A9"), roughness: 0.5, metalness: 0.2, bumpMap: peel(), bumpScale: 0.35, clearcoat: 0.25, clearcoatRoughness: 0.45, envMapIntensity: 0.55 });
    const topM = new THREE.MeshPhysicalMaterial({ map: deckTex(), roughness: 0.5, metalness: 0.15, bumpMap: peel(), bumpScale: 0.35, clearcoat: 0.25, clearcoatRoughness: 0.45, envMapIntensity: 0.55 });
    const deck = rbox(W, 4, D, 1.6, { px: coat, nx: coat, top: topM, bottom: coat, front: coat, back: coat }, 3);
    deck.position.set(cx, FY - 2, SH.z1);
    shelf.add(deck);
    // the front lip, bent down, and the clear price channel along it (empty)
    const lip = rbox(W, SH.lip, 4, 1.6, coat, 3);
    lip.position.set(cx, FY - SH.lip / 2 + 0.5, SH.z1 + 1.5);
    shelf.add(lip);
    const clear = new THREE.MeshPhysicalMaterial({ color: col("#D8DEDF"), roughness: 0.12, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.08, transparent: true, opacity: 0.32, envMapIntensity: 1.1 });
    const chan = rbox(W - 6, 28, 2.4, 1, clear, 2);
    chan.position.set(cx, FY - SH.lip / 2 - 1, SH.z1 + 3.9);
    shelf.add(chan);
    // the upturn at the back
    const up = rbox(W, SH.up, 4, 1.6, coat, 3);
    up.position.set(cx, FY + SH.up / 2 - 0.5, SH.z0 + 4);
    shelf.add(up);
  }

  // ══ THE BOXES ══
  const cg = cartonGeo();
  const flute = flutes();
  const card = (map: THREE.Texture, rep: [number, number]) => {
    const b = flute.clone(); b.needsUpdate = true; b.repeat.set(...rep);
    return new THREE.MeshPhysicalMaterial({ map, roughness: 0.62, metalness: 0, bumpMap: b, bumpScale: 0.22, sheen: 0.2, sheenRoughness: 0.6, sheenColor: col("#FFFFFF"), clearcoat: 0.08, clearcoatRoughness: 0.6, envMapIntensity: 0.4 });
  };
  const front = card(frontTex(), [BX.w / 240, 1]);
  const side = card(sideTex(), [BX.d / 240, 1]);
  const top = card(topTex(), [BX.w / 240, 1]);
  const back = card(backTex(), [BX.w / 240, 1]);
  const bottom = new THREE.MeshStandardMaterial({ color: col("#B89B74"), roughness: 0.9 });
  const boxes = BOXES.map((_, k) => {
    const outer = new THREE.Group(); outer.userData.obj = `box-${k}`;
    const tilt = new THREE.Group(); outer.add(tilt);
    const inner = new THREE.Group(); tilt.add(inner);
    inner.add(mesh(cg, [side, side, top, bottom, front, back]));
    root.add(outer);
    return { outer, tilt, inner };
  });

  // ══ THE TRAY ══
  const tray = new THREE.Group(); tray.userData.obj = "tray"; root.add(tray);
  {
    const ot = oakTex();
    const oak = new THREE.MeshPhysicalMaterial({ map: ot, bumpMap: ot, bumpScale: 0.5, roughness: 0.5, clearcoat: 0.3, clearcoatRoughness: 0.4, envMapIntensity: 0.5 });
    const base = rbox(TRAY.w, TRAY.base, TRAY.d, 2, oak, 3);
    base.position.set(0, TRAY.base / 2, TRAY.d / 2);
    tray.add(base);
    for (const s of [-1, 1]) {
      const wl = rbox(TRAY.w, TRAY.h, TRAY.wall, 4, oak, 3);
      wl.position.set(0, TRAY.h / 2, s > 0 ? TRAY.d / 2 : -TRAY.d / 2 + TRAY.wall);
      tray.add(wl);
      const sw = rbox(TRAY.wall, TRAY.h, TRAY.d - 2 * TRAY.wall + 2, 4, oak, 3);
      sw.position.set(s * (TRAY.w / 2 - TRAY.wall / 2), TRAY.h / 2, TRAY.d / 2 - TRAY.wall + 1);
      tray.add(sw);
    }
    tray.position.set(TRAY.x, FY + LIFT, TRAY.z);
  }

  // ══ THE NOTES ══
  const ng = noteGeo();
  const nm = noteMaterials();
  const notes = NOTE_ON.map((_, k) => {
    const n = new THREE.Group(); n.userData.obj = `note-${k}`;
    n.add(keepFresh(mesh(ng, [nm[0], nm[1]])));
    root.add(n);
    return n;
  });

  // a floor at the shelf's top for the audits (what rests on the shelf rests on it); the deck takes the shadows itself
  root.add(makeFloor({ y: SH.floor, x0: SH.x0, x1: SH.x1, z0: SH.z0, z1: SH.z1, reflect: 0, shadow: 0 }));

  return {
    root,
    update: (p) => {
      boxes.forEach((b, k) => {
        const q = poseBox(T, k, p.f);
        b.outer.visible = q.visible;
        b.outer.position.set(q.x, FY + LIFT, q.z);
        b.outer.rotation.y = rad(q.yaw);
        b.tilt.position.set(q.piv, 0, 0);
        b.tilt.rotation.z = q.tilt;
        b.inner.position.set(-q.piv, 0, 0);
      });
      notes.forEach((n, k) => {
        const q = poseNote(T, k, p.f);
        n.visible = q.visible;
        if (q.attached) {
          // riding on its box (its tip too): a child of the box's tilting frame
          const b = boxes[k + 1];
          if (n.parent !== b.inner) b.inner.add(n);
          const on = NOTE_ON[k];
          n.position.set(on.dx, BX.h + BX.top + 0.35, on.dz);
          n.rotation.set(0, rad(on.yaw), 0);
        } else {
          if (n.parent !== root) root.add(n);
          n.position.set(q.x, FY + q.h, q.z);
          n.rotation.set(q.rx, rad(q.yaw), q.rz, "YXZ");
        }
      });
    },
  };
};
