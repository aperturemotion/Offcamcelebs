// ══════════════════════════════════════════════════════════════════════════════════════════════
// BUYOUT IN 3-D (041) — "In December 1999, Salton bought his name outright, forever, $137.5 million in cash and stock."
// On the dark ground, three groups of real things, left to right:
//   · THE DESK CALENDAR: a tent ("easel") desk calendar: a grey chipboard front board with the month pages hung on it from a
//     black twin-loop wire at the top, a back stand covered in navy book cloth, a card base strip joining their feet. The top
//     page is bright calendar stock with a fine fibre: DECEMBER 1999 over the week (SUN … SAT) and the month's grid, the days
//     of November and January greyed; the 9th is circled by hand in blue ballpoint (a loop that overshoots its start).
//     Below it the page stack shows as many thin edges.
//   · THE CONTRACT: a letter-size sheet lying on the ground (a faint bow, a lifted corner): ASSIGNMENT OF NAME AND LIKENESS,
//     dense type, the line IN PERPETUITY AND WORLDWIDE set bold, the signature block. A brushed brass name plate, GEORGE
//     FOREMAN engraved and black-filled, glides in from the right just above the page and touches down on it.
//   · THE MONEY: a walnut desk plaque with a brushed brass face, PURCHASE PRICE over $137,500,000, slides in from the near
//     side and drops the last few px; a brick of sixteen real $100 bundles (cash.ts) slides in from the left with a manila
//     tag on top, $113,750,000 / CASH; an engraved stock certificate (a green guilloche border, SALTON, INC., COMMON STOCK,
//     $23,750,000, a gold foil seal) glides in from the right and touches down beside it.
// Units are layer px; local y UP from the ground (the floor at layer y DESK.floor), z toward the viewer.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, slabOf, type Model } from "../stage";
import { rbox, rad, col, fitFont, track, hash, paper, paperTop, typeLines, font, type PaperOpts } from "../kit029";
import { GLIDE, clamp01 } from "../../r45/tokens";
import { makeBundle, BUNDLE } from "./cash";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

export const DESK = { floor: 1400 } as const;

// ══ THE CALENDAR ══
/** the tent: centre x, the front board's foot line z, width W, the front board's length H (foot to hinge), its lean back A
 *  (deg from upright), the back stand's lean B; the pages (PW × PH) hang from TOPGAP below the hinge on a stack STACK thick */
export const CAL = { x: 520, z: 0, W: 640, H: 500, A: 16, B: 24, t: 2.6, PW: 604, PH: 452, TOPGAP: 4, STACK: 4.2 } as const;
const CA = rad(CAL.A), CB = rad(CAL.B);
export const CAL_HTOP = CAL.H * Math.cos(CA);
export const CAL_ZTOP = CAL.z - CAL.H * Math.sin(CA);
const CAL_BACK = CAL_HTOP / Math.cos(CB);
export const CAL_ZBACK = CAL_ZTOP - CAL_BACK * Math.sin(CB);
/** a point of the top page (u from its left, v from its top, in print px), `lift` off the front board */
export const calPt = (u: number, v: number, lift = CAL.STACK + 1.0) => {
  const s = CAL.TOPGAP + v;
  return { x: CAL.x + u - CAL.PW / 2, h: CAL_HTOP - s * Math.cos(CA) + lift * Math.sin(CA), z: CAL_ZTOP + s * Math.sin(CA) + lift * Math.cos(CA) };
};
/** the page's readable print: DECEMBER 1999 and the grid (print px x0, y0, x1, y1) */
export const CAL_INK = [20, 34, 584, 440] as const;
/** the grid: its box, 7 columns × 5 rows; December 1st 1999 was a Wednesday */
const GRID = { x0: 22, x1: 582, y0: 158, y1: 440 } as const;
/** the wire's top (for the caption-band check) */
export const CAL_WIRE_TOP = CAL_HTOP + 6;

// ══ THE CONTRACT ══
/** the sheet (letter size), its centre and turn on the ground */
export const CT = { x: 1520, z: -400, w: 540, d: 700, yaw: -2.5 } as const;
const CT_PAPER: Omit<PaperOpts, "face"> = { w: CT.w, h: CT.d, t: 0.5, bow: 0.6, seg: 48, curls: [{ corner: "tr", r: 130, lift: 4 }, { corner: "bl", r: 70, lift: 1.4 }] };
/** where the readable print sits (print px boxes; y from the far edge) */
export const CT_INK = { title: [24, 44, 516, 178] as const, perp: [30, 430, 510, 552] as const };
/** the name plate: its size, thickness, and where it rests on the page (print px of its centre) */
export const NPL = { w: 460, d: 112, t: 4.2, u: 270, v: 318 } as const;
const NPL_FOOT = (() => {
  const o = { ...CT_PAPER, face: null as unknown as THREE.Material } as PaperOpts;
  // the plate's footprint on the page (paper-local x right, y toward the far edge), with room for its small turn
  const cx = NPL.u - CT.w / 2, cy = CT.d / 2 - NPL.v;
  return paperTop(o, cx - NPL.w / 2 - 8, cx + NPL.w / 2 + 8, cy - NPL.d / 2 - 8, cy + NPL.d / 2 + 8, 30);
})();
/** the plate's underside over the ground at rest: on the page's highest point under it */
export const NPL_H = (CT_PAPER.t ?? 0.5) + NPL_FOOT + 0.3;

// ══ THE MONEY ══
export const MX = 3100;
/** the plaque: length L, its profile (z, y) from the back foot round to the front toe; where it rests */
export const PQ = { L: 720, x: MX + 30, z: -695, yaw: 0 } as const;
const PROF: [number, number][] = [[-65, 0], [65, 0], [65, 12], [-36, 104], [-65, 104]];
const SL0: [number, number] = [65, 12], SL1: [number, number] = [-36, 104];
const SLEN = Math.hypot(SL1[0] - SL0[0], SL1[1] - SL0[1]);
const SLOPE_A = Math.atan2(-(SL0[0] - SL1[0]), SL1[1] - SL0[1]);
/** the brass face on the slope: width, height along the slope, thickness */
export const PQB = { w: 680, h: 112, t: 2.4 } as const;
/** the cash brick: 2 × 2 bundles, LAYERS high; its centre at rest */
export const BRICK = { x: MX - 220, z: -305, layers: 4, yaw: -1.5 } as const;
const BX = 2 * BUNDLE.HX + 7, BZ = 2 * BUNDLE.HZ + 7;
export const BRICK_TOP = (BRICK.layers - 1) * (BUNDLE.H + 0.3) + BUNDLE.H;
/** the manila tag on it */
export const TAG = { w: 360, d: 156, t: 0.7, dx: 8, dz: 4, yaw: -5 } as const;
/** the certificate: size, centre and turn at rest */
export const CERT = { w: 440, d: 310, x: MX + 295, z: -300, yaw: 2.5 } as const;
const CERT_PAPER: Omit<PaperOpts, "face"> = { w: CERT.w, h: CERT.d, t: 0.6, bow: 0.5, seg: 44, curls: [{ corner: "tl", r: 90, lift: 2.6 }] };
export const CERT_INK = [30, 40, 410, 280] as const;

// ══ POSES ══
export type BuyoutTiming = { plate: readonly [number, number]; plaque: readonly [number, number]; cash: readonly [number, number]; cert: readonly [number, number] };
type Pose = { x: number; z: number; h: number; yaw: number; visible: boolean };
const ss = (a: number, b: number, x: number) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const local = (cx: number, cz: number, yaw: number, lx: number, lz: number) => {
  const a = rad(yaw), c = Math.cos(a), s = Math.sin(a);
  return { x: cx + lx * c + lz * s, z: cz - lx * s + lz * c };
};
/** the plate's rest on the page */
export const NPL_REST = (() => { const p = local(CT.x, CT.z, CT.yaw, NPL.u - CT.w / 2, NPL.v - CT.d / 2); return { ...p, h: NPL_H, yaw: CT.yaw + 1.2 }; })();
/** the plate glides in from the right a little above the page on its own air, touches down at 78% of the run, brakes */
export const posePlate = (T: BuyoutTiming, f: number): Pose => {
  const u = clamp01((f - T.plate[0]) / (T.plate[1] - T.plate[0])), g = 1 - GLIDE(u);
  return { x: NPL_REST.x + 920 * g, z: NPL_REST.z + 14 * g, h: NPL_REST.h + 26 * (1 - ss(0, 0.78, u)), yaw: NPL_REST.yaw - 6 * g, visible: f > T.plate[0] - 1 };
};
/** the plaque slides in from the near side held a little above the ground, then drops the last px under gravity and lands */
export const posePlaque = (T: BuyoutTiming, f: number): Pose => {
  const [a, b] = T.plaque, drop = 7;
  const u = clamp01((f - a) / (b - drop - a));
  const fall = clamp01((f - (b - drop)) / drop);
  const g = 1 - GLIDE(u);
  return { x: PQ.x + 50 * g, z: PQ.z + 980 * g, h: 0.15 + 20 * (1 - fall * fall), yaw: PQ.yaw - 5 * g, visible: f > a - 1 };
};
/** the brick slides in from the left on the ground and stops by friction (constant deceleration) */
export const poseCash = (T: BuyoutTiming, f: number): Pose => {
  const u = clamp01((f - T.cash[0]) / (T.cash[1] - T.cash[0])), k = (1 - u) ** 2;
  return { x: BRICK.x - 620 * k, z: BRICK.z + 16 * k, h: 0, yaw: BRICK.yaw + 5 * k, visible: f > T.cash[0] - 1 };
};
/** the certificate glides in from the right on its own air and touches down */
export const poseCert = (T: BuyoutTiming, f: number): Pose => {
  const u = clamp01((f - T.cert[0]) / (T.cert[1] - T.cert[0])), g = 1 - GLIDE(u);
  return { x: CERT.x + 760 * g, z: CERT.z - 20 * g, h: 0.1 + 24 * (1 - ss(0, 0.8, u)), yaw: CERT.yaw - 8 * g, visible: f > T.cert[0] - 1 };
};

/** a point of a flat thing lying on the ground (u, v from its top-left in print px; the top is the far side) */
export const flatPt = (s: { w: number; d: number }, p: { x: number; z: number; yaw: number; h: number }, u: number, v: number, top = 0) => {
  const q = local(p.x, p.z, p.yaw, u - s.w / 2, v - s.d / 2);
  return { x: q.x, h: p.h + top, z: q.z };
};
/** the plaque's slope point at (u along its length 0…L, t along the slope 0 toe … 1 top) */
export const slopePt = (p: { x: number; z: number; yaw: number; h: number }, u: number, t: number) => {
  const zz = SL0[0] + (SL1[0] - SL0[0]) * t, yy = SL0[1] + (SL1[1] - SL0[1]) * t;
  const q = local(p.x, p.z, p.yaw, u - PQ.L / 2, zz);
  return { x: q.x, h: p.h + yy, z: q.z };
};
/** the plaque's engraving box along the slope */
export const PQ_INK = { u0: (PQ.L - PQB.w) / 2 + 16, u1: (PQ.L + PQB.w) / 2 - 16, t0: 0.5 - (PQB.h / SLEN) * 0.44, t1: 0.5 + (PQB.h / SLEN) * 0.44 };
/** the plaque's top back edge */
export const plaqueTop = (p: Pose) => [0, PQ.L / 2, PQ.L].map((u) => { const q = local(p.x, p.z, p.yaw, u - PQ.L / 2, -65); return { x: q.x, h: p.h + 104, z: q.z }; });
/** the brick's top corners and the tag's print corners */
export const BRICK_EXT = { x: BX / 2 + BUNDLE.HX + 1.5, z: BZ / 2 + BUNDLE.HZ + 1.5 };
export const brickTop = (p: Pose) => [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([sx, sz]) => { const q = local(p.x, p.z, p.yaw, sx * BRICK_EXT.x, sz * BRICK_EXT.z); return { x: q.x, h: BRICK_TOP, z: q.z }; });
export const tagPose = (p: Pose) => { const q = local(p.x, p.z, p.yaw, TAG.dx, TAG.dz); return { x: q.x, z: q.z, h: BRICK_TOP + 0.25, yaw: p.yaw + TAG.yaw }; };

// ══ SURFACES ══
let fibreC: HTMLCanvasElement | null = null;
const fibre = (w: number, h: number) => {
  if (!fibreC) {
    fibreC = document.createElement("canvas"); fibreC.width = fibreC.height = 256;
    const g = fibreC.getContext("2d")!;
    g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 6000; i++) {
      const v = 96 + Math.round(64 * hash(i, 61, 3));
      g.strokeStyle = `rgba(${v},${v},${v},0.5)`; g.lineWidth = 0.5 + hash(i, 62, 3) * 0.9;
      const x = hash(i, 63, 3) * 256, y = hash(i, 64, 3) * 256, a = hash(i, 65, 3) * Math.PI, l = 2 + 6 * hash(i, 66, 3);
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
    }
  }
  const t = new THREE.CanvasTexture(fibreC);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(w / 128, h / 128);
  return t;
};
/** paper speckle: fibres, a few darker and a few brighter */
const grain = (g: CanvasRenderingContext2D, w: number, h: number, n: number, seed: number, dark = "120,110,92") => {
  for (let i = 0; i < n; i++) {
    g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? dark : "255,255,250"},${0.035 + 0.05 * hash(i, 2, seed)})`;
    g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 0.4 + hash(i, 5, seed) * 1.8, 0.3);
  }
};
const INK = "#1D1A17";

/** the calendar's top page: DECEMBER 1999, the week, the grid; the 9th circled in blue ballpoint */
const calPageTex = () => paintTex("buyout-cal-page-v1", CAL.PW, CAL.PH, (g) => {
  const W = CAL.PW, H = CAL.PH;
  const bg = g.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#FBFAF6"); bg.addColorStop(1, "#F2F0EA");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  grain(g, W, H, 4200, 11);
  // the punched holes along the top (the wire runs through them)
  for (let x = 30; x < W - 26; x += 11.2) { if (Math.abs(x - W / 2) < 36) continue; g.fillStyle = "rgba(40,34,28,0.78)"; g.fillRect(x - 2.6, 5, 5.2, 7.5); }
  // the month and the year
  g.fillStyle = INK; g.textBaseline = "alphabetic";
  g.textAlign = "left"; track(g, 3); const ms = fitFont(g, 800, 72, "DECEMBER", 352); g.fillText("DECEMBER", 22, 34 + ms * 0.86);
  g.textAlign = "right"; track(g, 1); fitFont(g, 400, ms, "1999", 170); g.fillText("1999", W - 22, 34 + ms * 0.86);
  track(g, 0);
  g.fillRect(22, 120, W - 44, 2.4);
  // the week
  const cw = (GRID.x1 - GRID.x0) / 7, rh = (GRID.y1 - GRID.y0) / 5;
  const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  g.textAlign = "center"; track(g, 2);
  DAYS.forEach((d, i) => { font(g, 700, 17); g.fillStyle = i === 0 ? "#8A3A30" : "#4A443D"; g.fillText(d, GRID.x0 + cw * (i + 0.5), 146); });
  track(g, 0);
  // the grid: fine rules
  g.strokeStyle = "rgba(60,52,44,0.42)"; g.lineWidth = 0.9;
  for (let r = 0; r <= 5; r++) { g.beginPath(); g.moveTo(GRID.x0, GRID.y0 + r * rh); g.lineTo(GRID.x1, GRID.y0 + r * rh); g.stroke(); }
  for (let c = 0; c <= 7; c++) { g.beginPath(); g.moveTo(GRID.x0 + c * cw, GRID.y0); g.lineTo(GRID.x0 + c * cw, GRID.y1); g.stroke(); }
  // the days: December 1st is a Wednesday (column 3); 28–30 November and 1 January greyed
  const cells: { n: number; grey: boolean }[] = [];
  for (const n of [28, 29, 30]) cells.push({ n, grey: true });
  for (let n = 1; n <= 31; n++) cells.push({ n, grey: false });
  cells.push({ n: 1, grey: true });
  g.textAlign = "left";
  cells.forEach((c, i) => {
    const col = i % 7, row = Math.floor(i / 7);
    if (row > 4) return;
    font(g, 700, 31);
    g.fillStyle = c.grey ? "rgba(40,34,28,0.28)" : col === 0 ? "#8A3A30" : INK;
    g.fillText(String(c.n), GRID.x0 + col * cw + 9, GRID.y0 + row * rh + 33);
  });
  // ★ the 9th (Thursday, row 1), circled by hand in blue ballpoint: a loop drawn once round and a little past its start
  {
    const cx = GRID.x0 + 4 * cw + 22, cy = GRID.y0 + rh + 22, rx = 30, ry = 24;
    g.save(); g.lineCap = "round"; g.lineJoin = "round";
    for (const [lw, a] of [[3.2, 0.55], [2.2, 0.85]] as const) {
      g.strokeStyle = `rgba(30,52,140,${a})`; g.lineWidth = lw;
      g.beginPath();
      for (let k = 0; k <= 90; k++) {
        const t = -2.2 + (k / 90) * (Math.PI * 2 + 0.75);
        const wob = 1 + 0.045 * Math.sin(t * 3 + 0.7) + 0.02 * (k / 90);
        const x = cx + rx * wob * Math.cos(t) + 1.5 * Math.sin(t * 2), y = cy + ry * wob * Math.sin(t) - 2 * (k / 90);
        if (k === 0) g.moveTo(x, y); else g.lineTo(x, y);
      }
      g.stroke();
    }
    g.restore();
  }
  // the printer's line at the foot
  g.fillStyle = "rgba(40,34,28,0.35)"; g.fillRect(22, H - 8, W - 44, 0.8);
}, 3);
/** the page stack's edge: many thin sheets, a little uneven */
const edgesTex = () => paintTex("buyout-cal-edges", 64, 64, (c) => {
  c.fillStyle = "#ECE8DE"; c.fillRect(0, 0, 64, 64);
  for (let i = 0; i < 64; i += 2.6) { c.fillStyle = `rgba(110,98,80,${0.14 + 0.2 * hash(i, 1, 29)})`; c.fillRect(0, i, 64, 0.8); }
}, 4);
/** navy book cloth: a fine linen weave */
const clothTex = () => paintTex("buyout-cloth", 256, 256, (g) => {
  g.fillStyle = "#24314A"; g.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 256; y += 2) { g.fillStyle = `rgba(${hash(y, 1, 8) > 0.5 ? "60,78,110" : "12,18,30"},0.35)`; g.fillRect(0, y, 256, 0.8); }
  for (let x = 0; x < 256; x += 2) { g.fillStyle = `rgba(${hash(x, 2, 8) > 0.5 ? "60,78,110" : "12,18,30"},0.22)`; g.fillRect(x, 0, 0.8, 256); }
}, 2);
/** grey chipboard: pressed fibre */
const chipTex = () => paintTex("buyout-chip", 256, 256, (g) => {
  g.fillStyle = "#8E857A"; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 5000; i++) { g.fillStyle = `rgba(${hash(i, 1, 9) > 0.5 ? "60,54,46" : "190,182,170"},${0.12 + 0.18 * hash(i, 2, 9)})`; g.fillRect(hash(i, 3, 9) * 256, hash(i, 4, 9) * 256, 0.6 + 2.4 * hash(i, 5, 9), 0.6); }
}, 2);

/** the contract: ASSIGNMENT OF NAME AND LIKENESS, dense type, IN PERPETUITY AND WORLDWIDE, the signature block */
const contractTex = () => paintTex("buyout-contract-v1", CT.w, CT.d, (g) => {
  const W = CT.w, H = CT.d;
  g.fillStyle = "#F8F6F0"; g.fillRect(0, 0, W, H);
  grain(g, W, H, 5200, 17);
  g.fillStyle = INK; g.textBaseline = "alphabetic"; g.textAlign = "center";
  track(g, 1.5); const ts = fitFont(g, 800, 64, "ASSIGNMENT OF NAME", W - 48); g.fillText("ASSIGNMENT OF NAME", W / 2, 46 + ts * 0.9);
  fitFont(g, 800, ts, "AND LIKENESS", W - 48); g.fillText("AND LIKENESS", W / 2, 46 + ts * 1.95); track(g, 0);
  g.fillRect(150, 186, W - 300, 1.8);
  // the recitals (dense type, not for reading)
  typeLines(g, 44, 204, W - 88, 4, 12.5, 4.2, 0.42, 3);
  // the plate's place: more type under where it lies
  typeLines(g, 44, 262, W - 88, 9, 12.5, 4.2, 0.42, 7);
  // the grant, set bold on two lines
  g.fillStyle = INK; track(g, 2); const ps = fitFont(g, 800, 58, "IN PERPETUITY", W - 70); g.fillText("IN PERPETUITY", W / 2, 432 + ps * 0.9);
  fitFont(g, 800, ps, "AND WORLDWIDE", W - 70); g.fillText("AND WORLDWIDE", W / 2, 432 + ps * 1.95); track(g, 0);
  g.fillRect(44, 562, W - 88, 1.4);
  typeLines(g, 44, 578, W - 88, 4, 12.5, 4.2, 0.42, 11);
  // the signature block: two rules and their names in small type
  g.fillStyle = "rgba(29,26,23,0.85)";
  g.fillRect(44, 640, 200, 1.1); g.fillRect(W - 244, 640, 200, 1.1);
  g.textAlign = "left"; font(g, 700, 12); track(g, 1); g.fillText("SALTON, INC.", 44, 656); g.fillText("DECEMBER 9, 1999", W - 244, 656); track(g, 0);
  g.fillStyle = "rgba(29,26,23,0.5)"; font(g, 600, 10); g.textAlign = "center"; g.fillText("— 1 —", W / 2, H - 14);
}, 3);

/** brushed brass with engraving: fine streaks along the length, a worn edge, the letters cut and filled black; the matching
 *  roughness (G) / metalness (B) map makes the letters paint and the rest metal */
type Line = { text: string; size: number; weight: number; y: number; track: number };
const engrave = (g: CanvasRenderingContext2D, W: number, lines: Line[], fill: string) => {
  g.fillStyle = fill; g.textAlign = "center"; g.textBaseline = "alphabetic";
  for (const l of lines) { track(g, l.track); fitFont(g, l.weight, l.size, l.text, W - 60); g.fillText(l.text, W / 2 + l.track / 2, l.y); }
  track(g, 0);
};
const brassTex = (key: string, W: number, H: number, lines: Line[], seed: number) => paintTex(key, W, H, (g) => {
  const bg = g.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#D8AD55"); bg.addColorStop(0.5, "#C99A3E"); bg.addColorStop(1, "#B78832");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  for (let i = 0; i < (W * H) / 30; i++) {
    const y = hash(i, 1, seed) * H, x = hash(i, 2, seed) * W * 0.85, l = 40 + 200 * hash(i, 3, seed);
    g.fillStyle = hash(i, 4, seed) > 0.5 ? `rgba(255,232,170,${0.05 + 0.08 * hash(i, 5, seed)})` : `rgba(90,60,20,${0.05 + 0.08 * hash(i, 5, seed)})`;
    g.fillRect(x, y, l, 0.35 + 0.4 * hash(i, 6, seed));
  }
  g.strokeStyle = "rgba(28,20,10,0.85)"; g.lineWidth = 1.1; g.strokeRect(8, 8, W - 16, H - 16);
  engrave(g, W, lines, "#1C140B");
  for (const [cx, cy] of [[0, 0], [W, 0], [0, H], [W, H]]) {
    const gr = g.createRadialGradient(cx, cy, 0, cx, cy, 22);
    gr.addColorStop(0, "rgba(255,226,150,0.25)"); gr.addColorStop(1, "rgba(255,226,150,0)");
    g.fillStyle = gr; g.fillRect(cx - 22, cy - 22, 44, 44);
  }
}, 3);
const brassPbr = (key: string, W: number, H: number, lines: Line[], seed: number) => {
  const t = paintTex(key, W, H, (g) => {
    g.fillStyle = "rgb(0,92,255)"; g.fillRect(0, 0, W, H);
    for (let i = 0; i < (W * H) / 50; i++) { g.fillStyle = `rgba(0,${70 + Math.round(60 * hash(i, 7, seed))},255,0.5)`; g.fillRect(hash(i, 8, seed) * W * 0.8, hash(i, 9, seed) * H, 40 + 180 * hash(i, 10, seed), 0.5); }
    g.strokeStyle = "rgb(0,200,0)"; g.lineWidth = 1.1; g.strokeRect(8, 8, W - 16, H - 16);
    engrave(g, W, lines, "rgb(0,200,0)");
  }, 2);
  t.colorSpace = THREE.NoColorSpace;
  return t;
};
const NPL_LINES: Line[] = [{ text: "GEORGE FOREMAN", size: 80, weight: 800, y: 86, track: 4 }];
const PQ_LINES: Line[] = [
  { text: "PURCHASE PRICE", size: 24, weight: 700, y: 36, track: 6 },
  { text: "$137,500,000", size: 72, weight: 800, y: 98, track: 2 },
];

/** walnut, straight grain along u: colour bands, wavy grain lines, open pores */
const walnutTex = () => paintTex("buyout-walnut", 1024, 256, (g) => {
  const w = 1024, h = 256;
  g.fillStyle = "#6A4530"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 46; i++) {
    const p = hash(i, 1, 33) * h, wd = 4 + 22 * hash(i, 2, 33);
    g.fillStyle = hash(i, 3, 33) > 0.5 ? `rgba(140,96,62,${0.08 + 0.12 * hash(i, 4, 33)})` : `rgba(28,15,8,${0.1 + 0.14 * hash(i, 4, 33)})`;
    g.fillRect(0, p, w, wd);
  }
  for (let i = 0; i < 260; i++) {
    const p0 = hash(i, 3, 19) * h, a = 1 + 3 * hash(i, 4, 19), ph = hash(i, 5, 19) * 6.28;
    g.strokeStyle = hash(i, 6, 19) > 0.4 ? `rgba(34,18,9,${0.1 + 0.22 * hash(i, 7, 19)})` : `rgba(175,125,84,${0.06 + 0.1 * hash(i, 8, 19)})`;
    g.lineWidth = 0.35 + 1.0 * hash(i, 9, 19);
    g.beginPath();
    for (let s = 0; s <= w; s += 6) { const d = p0 + a * Math.sin(s / 70 + ph) + 0.6 * Math.sin(s / 13 + ph * 2); if (s === 0) g.moveTo(s, d); else g.lineTo(s, d); }
    g.stroke();
  }
  for (let i = 0; i < 3400; i++) { g.fillStyle = `rgba(18,9,4,${0.2 + 0.3 * hash(i, 14, 23)})`; g.fillRect(hash(i, 11, 23) * w, hash(i, 12, 23) * h, 1.5 + 5 * hash(i, 13, 23), 0.6); }
}, 2);

/** the manila tag: its reinforced hole, $113,750,000 / CASH */
const tagTex = () => paintTex("buyout-tag-v1", TAG.w, TAG.d, (g) => {
  const W = TAG.w, H = TAG.d;
  g.fillStyle = "#DDBF83"; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${hash(i, 1, 41) > 0.5 ? "120,86,38" : "250,232,190"},${0.06 + 0.08 * hash(i, 2, 41)})`; g.fillRect(hash(i, 3, 41) * W, hash(i, 4, 41) * H, 0.5 + 2.5 * hash(i, 5, 41), 0.4); }
  // the reinforcing ring round the hole (a paler card disc) and the hole
  g.fillStyle = "#E9D7AC"; g.beginPath(); g.arc(30, H / 2, 17, 0, Math.PI * 2); g.fill();
  g.strokeStyle = "rgba(120,90,40,0.5)"; g.lineWidth = 1; g.stroke();
  g.fillStyle = "#1A120C"; g.beginPath(); g.arc(30, H / 2, 6.5, 0, Math.PI * 2); g.fill();
  g.fillStyle = INK; g.textBaseline = "alphabetic"; g.textAlign = "center";
  track(g, 0.5); const s = fitFont(g, 800, 72, "$113,750,000", W - 72); g.fillText("$113,750,000", 56 + (W - 62) / 2, 14 + s * 0.95);
  track(g, 8); fitFont(g, 800, 46, "CASH", 200); g.fillText("CASH", 56 + (W - 62) / 2 + 4, H - 16); track(g, 0);
  g.fillRect(70, H - 66, W - 90, 1.6);
}, 3);

/** the stock certificate: a green guilloche border, SALTON, INC., COMMON STOCK, $23,750,000, a gold foil seal */
const GREEN = "#2F5B45";
const certTex = () => paintTex("buyout-cert-v1", CERT.w, CERT.d, (g) => {
  const W = CERT.w, H = CERT.d;
  g.fillStyle = "#F4EFDF"; g.fillRect(0, 0, W, H);
  grain(g, W, H, 3600, 23);
  // the border: a band of fine interlaced waves (the engraver's guilloche) between two rules
  const B = 20;
  g.fillStyle = "rgba(47,91,69,0.12)"; g.fillRect(8, 8, W - 16, B); g.fillRect(8, H - 8 - B, W - 16, B); g.fillRect(8, 8, B, H - 16); g.fillRect(W - 8 - B, 8, B, H - 16);
  g.strokeStyle = "rgba(47,91,69,0.75)"; g.lineWidth = 0.55;
  const wave = (horiz: boolean, c: number, len: number, ph: number) => {
    g.beginPath();
    for (let s = 0; s <= len; s += 1.5) {
      const o = (B / 2 - 2) * Math.sin(s / 6.2 + ph) * Math.cos(s / 31 + ph * 0.5);
      const x = horiz ? 8 + s : c + o, y = horiz ? c + o : 8 + s;
      if (s === 0) g.moveTo(x, y); else g.lineTo(x, y);
    }
    g.stroke();
  };
  for (let k = 0; k < 4; k++) {
    const ph = k * 1.57;
    wave(true, 8 + B / 2, W - 16, ph); wave(true, H - 8 - B / 2, W - 16, ph);
    wave(false, 8 + B / 2, H - 16, ph); wave(false, W - 8 - B / 2, H - 16, ph);
  }
  g.strokeStyle = GREEN; g.lineWidth = 1.6; g.strokeRect(6, 6, W - 12, H - 12);
  g.lineWidth = 0.8; g.strokeRect(8 + B + 3, 8 + B + 3, W - 2 * (B + 11), H - 2 * (B + 11));
  // the words
  g.fillStyle = GREEN; g.textBaseline = "alphabetic"; g.textAlign = "center";
  track(g, 3); fitFont(g, 800, 50, "SALTON, INC.", W - 100); g.fillText("SALTON, INC.", W / 2 + 1.5, 88); track(g, 0);
  track(g, 7); fitFont(g, 700, 26, "COMMON STOCK", W - 150); g.fillText("COMMON STOCK", W / 2 + 3.5, 124); track(g, 0);
  g.fillRect(W / 2 - 100, 136, 200, 1.2);
  g.fillStyle = "#1F2A24"; track(g, 1); fitFont(g, 800, 84, "$23,750,000", W - 76); g.fillText("$23,750,000", W / 2 + 0.5, 216); track(g, 0);
  // the engraved lines of the grant (not for reading)
  typeLines(g, 60, 232, W - 120, 2, 11, 3.6, 0.34, 5);
  // the signature rules
  g.fillStyle = "rgba(31,42,36,0.7)"; g.fillRect(52, 268, 120, 0.9); g.fillRect(W - 172, 268, 120, 0.9);
  // the gold foil seal: a serrated disc, embossed rings
  const sx = W - 112, sy = 262, R = 26;
  g.save();
  g.beginPath();
  for (let k = 0; k <= 72; k++) { const a = (k / 72) * Math.PI * 2, r = R + (k % 2 ? 0 : 2.6); const x = sx + r * Math.cos(a), y = sy + r * Math.sin(a); if (k === 0) g.moveTo(x, y); else g.lineTo(x, y); }
  const gold = g.createLinearGradient(sx - R, sy - R, sx + R, sy + R);
  gold.addColorStop(0, "#F0D58A"); gold.addColorStop(0.45, "#C79A3A"); gold.addColorStop(0.7, "#E8C776"); gold.addColorStop(1, "#A97C2A");
  g.fillStyle = gold; g.fill();
  g.strokeStyle = "rgba(110,78,20,0.6)"; g.lineWidth = 0.8;
  for (const r of [R - 5, R - 12]) { g.beginPath(); g.arc(sx, sy, r, 0, Math.PI * 2); g.stroke(); }
  g.restore();
}, 3);

// ══ THE MODEL ══
const lying = (o: PaperOpts) => {
  const g = new THREE.Group();
  const s = paper(o);
  s.rotation.x = -Math.PI / 2;
  s.position.y = o.t ?? 1.2;
  g.add(s);
  return g;
};
const printMat = (t: THREE.Texture, w: number, h: number, rough = 0.86) =>
  new THREE.MeshPhysicalMaterial({ map: t, roughness: rough, metalness: 0, bumpMap: fibre(w, h), bumpScale: 0.3, sheen: 0.2, sheenRoughness: 0.7, sheenColor: col("#FFFFFF"), envMapIntensity: 0.35 });
const paperMat = (hex: string) => new THREE.MeshStandardMaterial({ color: col(hex), roughness: 0.9, metalness: 0, envMapIntensity: 0.3 });

export type BuyoutP = { f: number };

export const buyoutModel = (T: BuyoutTiming) => (): Model<BuyoutP> => {
  const root = new THREE.Group();
  const FY = -DESK.floor;
  const brass = new THREE.MeshPhysicalMaterial({ color: col("#C99A3E"), metalness: 1, roughness: 0.3, envMapIntensity: 1.0 });

  // ══ THE CALENDAR ══
  const cal = new THREE.Group(); cal.userData.obj = "calendar"; root.add(cal);
  cal.position.set(CAL.x, FY, 0);
  {
    const chip = new THREE.MeshStandardMaterial({ map: chipTex(), roughness: 0.92, envMapIntensity: 0.3 });
    const cloth = new THREE.MeshStandardMaterial({ map: clothTex(), roughness: 0.82, bumpMap: clothTex(), bumpScale: 0.4, envMapIntensity: 0.35 });
    // the front board: hangs from the hinge, down and toward the viewer
    const front = new THREE.Group();
    front.position.set(0, CAL_HTOP, CAL_ZTOP);
    front.rotation.x = -CA;
    cal.add(front);
    const fb = rbox(CAL.W, CAL.H, CAL.t, 1.1, { px: chip, nx: chip, top: chip, bottom: chip, front: chip, back: cloth }, 2);
    fb.position.set(0, -CAL.H / 2, 0);
    front.add(fb);
    // the page stack, hung below the hinge on the board, and the top page on it
    const em = new THREE.MeshStandardMaterial({ map: edgesTex(), roughness: 0.95, envMapIntensity: 0.3 });
    const pw = paperMat("#EFECE4");
    const stack = rbox(CAL.PW - 2, CAL.PH - 2, CAL.STACK, 1.2, { px: em, nx: em, top: em, bottom: em, front: pw, back: pw }, 2);
    stack.position.set(0, -CAL.TOPGAP - CAL.PH / 2, CAL.STACK + 0.1);
    front.add(stack);
    const page = paper({ w: CAL.PW, h: CAL.PH, t: 0.4, face: printMat(calPageTex(), CAL.PW, CAL.PH, 0.8), back: paperMat("#EDEAE2"), edge: paperMat("#E8E4DA"),
      seg: 44, bowY: 0.5, curls: [{ corner: "br", r: 110, lift: 5 }, { corner: "bl", r: 60, lift: 1.8 }] });
    page.position.set(0, -CAL.TOPGAP - CAL.PH / 2, CAL.STACK + 0.6 + 0.4);
    front.add(page);
    // the back stand: from the hinge down and away
    const back = new THREE.Group();
    back.position.set(0, CAL_HTOP, CAL_ZTOP);
    back.rotation.x = CB;
    cal.add(back);
    const bb = rbox(CAL.W, CAL_BACK, CAL.t, 1.1, { px: chip, nx: chip, top: chip, bottom: chip, front: chip, back: cloth }, 2);
    bb.position.set(0, -CAL_BACK / 2, CAL.t);
    back.add(bb);
    // the base strip joining the two feet, lying on the ground
    const base = rbox(CAL.W - 4, 1.2, CAL.z - CAL_ZBACK - 6, 0.5, { px: chip, nx: chip, top: cloth, bottom: chip, front: chip, back: chip }, 2);
    base.position.set(0, 0.6, CAL.z - 3);
    cal.add(base);
    // the twin-loop wire: pairs of black loops through the holes, round the hinge (a gap at the middle for the hanger)
    const loops: THREE.BufferGeometry[] = [];
    for (let x = -CAL.PW / 2 + 30; x < CAL.PW / 2 - 26; x += 11.2) {
      if (Math.abs(x) < 36) continue;
      const tg = new THREE.TorusGeometry(9.5, 0.85, 6, 18);
      tg.rotateY(Math.PI / 2);
      tg.translate(x, 0, 0);
      loops.push(tg);
    }
    const wire = mesh(mergeGeometries(loops)!, new THREE.MeshPhysicalMaterial({ color: col("#1B1B1D"), metalness: 0.6, roughness: 0.35, clearcoat: 0.4, envMapIntensity: 0.8 }));
    // the loops' centre: a little down the front board from the hinge, half the stack off it, so each loop runs over the
    //   top edge and back through the holes 16 px down
    const sc = 7, lc = (CAL.STACK + 1) / 2;
    wire.position.set(0, CAL_HTOP - sc * Math.cos(CA) + lc * Math.sin(CA), CAL_ZTOP + sc * Math.sin(CA) + lc * Math.cos(CA));
    cal.add(wire);
  }

  // ══ THE CONTRACT ══
  const ct = new THREE.Group(); ct.userData.obj = "contract"; root.add(ct);
  {
    const sheet = lying({ ...CT_PAPER, face: printMat(contractTex(), CT.w, CT.d), back: paperMat("#EEEBE3"), edge: paperMat("#E9E5DB") });
    ct.add(sheet);
    ct.position.set(CT.x, FY + 0.1, CT.z); ct.rotation.y = rad(CT.yaw);
  }
  // ══ THE NAME PLATE ══
  const plate = new THREE.Group(); plate.userData.obj = "nameplate"; root.add(plate);
  {
    const lines = NPL_LINES;
    const t = brassTex("buyout-npl", NPL.w, NPL.d, lines, 51), pbr = brassPbr("buyout-npl-pbr", NPL.w, NPL.d, lines, 51);
    const face = new THREE.MeshPhysicalMaterial({ map: t, roughnessMap: pbr, metalnessMap: pbr, roughness: 1, metalness: 1, bumpMap: t, bumpScale: 0.5, envMapIntensity: 0.9 });
    const p = rbox(NPL.w, NPL.t, NPL.d, 1.3, { px: brass, nx: brass, top: face, bottom: brass, front: brass, back: brass }, 2);
    p.position.set(0, NPL.t / 2, NPL.d / 2);
    plate.add(p);
    // the top face's texture reads from the far edge down: BoxGeometry's +y face maps u along x and v along −z ✓
  }

  // ══ THE PLAQUE ══
  const plaque = new THREE.Group(); plaque.userData.obj = "plaque"; root.add(plaque);
  {
    const sh = new THREE.Shape();
    PROF.forEach(([z, y], i) => (i === 0 ? sh.moveTo(-z, y) : sh.lineTo(-z, y)));
    sh.closePath();
    const g = slabOf(sh, PQ.L, 2.6, 4);
    const pos = g.attributes.position as THREE.BufferAttribute, uv = g.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (-pos.getZ(i)) / PQ.L, (pos.getY(i) - pos.getX(i) + 140) / 340);
    uv.needsUpdate = true;
    const wt = walnutTex();
    const wood = new THREE.MeshPhysicalMaterial({ map: wt, bumpMap: wt, bumpScale: 0.8, roughness: 0.42, clearcoat: 0.55, clearcoatRoughness: 0.28, envMapIntensity: 0.6 });
    const body = mesh(g, wood);
    body.rotation.y = Math.PI / 2;
    body.position.set(PQ.L / 2, 0, 0);
    plaque.add(body);
    const mid = [(SL0[0] + SL1[0]) / 2, (SL0[1] + SL1[1]) / 2];
    const face = new THREE.Group();
    face.position.set(0, mid[1], mid[0]);
    face.rotation.x = SLOPE_A;
    plaque.add(face);
    const t = brassTex("buyout-pq", PQB.w, PQB.h, PQ_LINES, 57), pbr = brassPbr("buyout-pq-pbr", PQB.w, PQB.h, PQ_LINES, 57);
    const pm = new THREE.MeshPhysicalMaterial({ map: t, roughnessMap: pbr, metalnessMap: pbr, roughness: 1, metalness: 1, bumpMap: t, bumpScale: 0.5, envMapIntensity: 0.9 });
    const bp = rbox(PQB.w, PQB.h, PQB.t, 0.9, { px: brass, nx: brass, top: brass, bottom: brass, front: pm, back: brass }, 2);
    bp.position.set(0, 0, PQB.t + 0.15);
    face.add(bp);
  }

  // ══ THE CASH ══
  const cash = new THREE.Group(); root.add(cash);
  {
    let i = 0;
    for (let k = 0; k < BRICK.layers; k++) for (const sx of [-0.5, 0.5]) for (const sz of [-0.5, 0.5]) {
      const b = makeBundle({ seed: 3 + i * 5, flip: hash(i, 3, 7) > 0.55 });
      b.userData.obj = `cash-${i}`;
      b.position.set(sx * BX + (hash(i, 1, 7) - 0.5) * 2.4, k * (BUNDLE.H + 0.3), sz * BZ + (hash(i, 2, 7) - 0.5) * 2.4);
      b.rotation.y = rad((hash(i, 4, 7) - 0.5) * 1.2);
      cash.add(b);
      i++;
    }
  }
  const tag = new THREE.Group(); tag.userData.obj = "tag"; root.add(tag);
  {
    // a shipping tag: its hole end's corners clipped
    const W = TAG.w, D = TAG.d, c = 26;
    const s = new THREE.Shape();
    s.moveTo(-W / 2 + c, -D / 2); s.lineTo(W / 2 - 3, -D / 2); s.quadraticCurveTo(W / 2, -D / 2, W / 2, -D / 2 + 3);
    s.lineTo(W / 2, D / 2 - 3); s.quadraticCurveTo(W / 2, D / 2, W / 2 - 3, D / 2); s.lineTo(-W / 2 + c, D / 2); s.lineTo(-W / 2, D / 2 - c); s.lineTo(-W / 2, -D / 2 + c); s.closePath();
    const g = slabOf(s, TAG.t, 0.2, 4);
    const tm = new THREE.MeshPhysicalMaterial({ map: tagTex(), roughness: 0.85, bumpMap: fibre(W, D), bumpScale: 0.3, envMapIntensity: 0.3 });
    const side = paperMat("#CFAE70");
    const m = mesh(g, [tm, side]);
    m.rotation.x = -Math.PI / 2;
    m.position.y = TAG.t;
    tag.add(m);
  }

  // ══ THE CERTIFICATE ══
  const cert = new THREE.Group(); cert.userData.obj = "certificate"; root.add(cert);
  cert.add(lying({ ...CERT_PAPER, face: printMat(certTex(), CERT.w, CERT.d, 0.8), back: paperMat("#EFE9D8"), edge: paperMat("#EAE3D0") }));

  root.add(makeFloor({ y: DESK.floor, x0: -1000, x1: 4300, z0: -900, z1: 1300, reflect: 0.1, shadow: 0.55, fadeC: [1800, 60], fadeR: [2700, 900] }));

  const place = (g: THREE.Group, p: Pose) => { g.visible = p.visible; g.position.set(p.x, FY + p.h, p.z); g.rotation.y = rad(p.yaw); };
  return {
    root,
    update: (p) => {
      place(plate, posePlate(T, p.f));
      place(plaque, posePlaque(T, p.f));
      const cp = poseCash(T, p.f);
      place(cash, cp);
      const tp = tagPose(cp);
      place(tag, { ...tp, visible: cp.visible });
      place(cert, poseCert(T, p.f));
    },
  };
};
