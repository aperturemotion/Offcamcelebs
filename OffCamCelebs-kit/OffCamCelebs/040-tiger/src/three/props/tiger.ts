// ══════════════════════════════════════════════════════════════════════════════════════════════
// TIGER IN 3-D (040) — "Tiger is golf's biggest name, with 15 major championships. In 2022, LIV, a new Saudi-backed tour,
// went after golf's stars with huge contracts." On the cream ground (an unseen table: its soft contact shadows), two groups:
//   ZONE 1 (his place)
//   · THE FRAMED PHOTO on its DISPLAY SHELF: a walnut frame (four bevelled rails, the grain along each, satin lacquer), a gilt
//     lip, a cream mat with a bevelled cut, his photo behind GLASS (a sheen, two soft glares), a kraft backing board and a
//     walnut easel strut; it stands a hair turned, leaning back 12°, on a thick walnut display shelf (rounded, lacquered)
//     (assets/tiger_face.png, Wikimedia Commons; the film's assets/brand/SOURCES.txt);
//   · THE "15": a heavy walnut block with a brushed-brass plate on its face, "15" and MAJOR CHAMPIONSHIPS cut into it and
//     filled black; it slides in from beyond the right edge, low over the table, and lands with weight on "15";
//   · THE FIFTEEN MAJORS: fifteen walnut plaques, each a brushed-brass plate engraved with the major and the year (MASTERS
//     1997 … MASTERS 2019, in the order he won them), dealt in from the right one after another into four rows under the 15.
//   ZONE 2 (LIV), far to the right on the same table
//   · THE TOURNAMENT FLAG: a black nylon pin flag lying flat (its sewn sleeve, a rolled hem, the crease where it was folded),
//     printed in gold: LIV GOLF / 2022 / SAUDI-BACKED (plain type, no logo). It slides in from the right, its cloth rippling
//     as it goes, and settles;
//   · THE CONTRACTS AND THE CASH: a stack of four PLAYER AGREEMENT contracts (letter paper, each a hair out of square, the top
//     one's corner lifting) slides in; three real $100 bundles (props/cash.ts) slide in after it and are stacked on it.
// No figure is printed but the straps' own $10,000 (a bundle's face value).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, slabOf, paintTex, imageOf, roundRect, type Model } from "../stage";
import { M, rbox, rad, fitFont, track, hash, font, typeLines, paper, type PaperOpts } from "../kit029";
import { makeBundle, BUNDLE } from "./cash";

export const TG = {
  floor: 1450,
  /** the display shelf: centre x, z; size; its top is floor − h */
  shelf: { x: 360, z: -176, w: 470, d: 250, h: 40 },
  /** the frame's back-bottom edge, centre (on the shelf); a hair turned */
  frame: { x: 360, z: -98, yaw: -3 },
  /** the "15" block: its base's centre */
  block: { x: 1250, z: -490, w: 288, h: 232, d: 84 },
  /** the plaques: five columns (x), three rows (z); each plaque's size and base thickness */
  grid: { x: 1250, z0: -350, dx: 172, dz: 88, w: 160, d: 72, t: 15 },
  /** the flag, lying flat: centre, turn, size (a 20 × 14 in pin flag) */
  flag: { x: 2180, z: -450, yaw: -3, w: 782, d: 548 },
  /** the contracts (US letter, at the cash's scale: 332 × 429) */
  deal: { x: 3120, z: -400, yaw: -6, w: 332, d: 429 },
} as const;

/** the fifteen majors, in the order he won them */
export const MAJORS15: [string, string][] = [
  ["1997", "MASTERS"], ["1999", "PGA"], ["2000", "US OPEN"], ["2000", "THE OPEN"], ["2000", "PGA"],
  ["2001", "MASTERS"], ["2002", "MASTERS"], ["2002", "US OPEN"], ["2005", "MASTERS"], ["2005", "THE OPEN"],
  ["2006", "THE OPEN"], ["2006", "PGA"], ["2007", "PGA"], ["2008", "US OPEN"], ["2019", "MASTERS"],
];
{
  const n = (m: string) => MAJORS15.filter(([, k]) => k === m).length;
  if (MAJORS15.length !== 15 || n("MASTERS") !== 5 || n("PGA") !== 4 || n("US OPEN") !== 3 || n("THE OPEN") !== 3)
    throw new Error("tiger: the fifteen majors are 5 Masters, 4 PGA, 3 US Open, 3 Open");
}

// ══ TIMING ══
export type TigerT = { block: number; plaques: number[]; flag: number; deal: number; cash: number[] };
type Slide = { fly: number; dx: number; h0: number; brake: number; slide: number; spin: number; bounce: number };
/** a slide-in: from beyond the right edge (+dx), low over the table, decelerating as it drops (gravity: h falls as u²); it
 *  touches down at `land`, then brakes over its last `slide` px (one small bounce) */
const slideIn = (land: number, o: Slide, f: number) => {
  const t0 = land - o.fly;
  if (f <= t0) return { dx: o.dx + o.slide, h: o.h0, spin: rad(o.spin), visible: false, k: 0 };
  if (f < land) {
    const u = (f - t0) / o.fly, e = 1 - Math.pow(1 - u, 2.2);
    return { dx: o.slide + o.dx * (1 - e), h: o.h0 * (1 - u * u), spin: rad(o.spin) * (1 - 0.92 * e), visible: true, k: 0 };
  }
  const t = f - land, k = Math.min(1, t / o.brake);
  const bounce = t < 6 ? o.bounce * Math.sin((Math.PI * t) / 6) : 0;
  return { dx: o.slide * (1 - k) * (1 - k), h: bounce, spin: rad(o.spin) * 0.08 * (1 - k) * (1 - k), visible: true, k };
};
const BLOCK_S: Slide = { fly: 20, dx: 1500, h0: 46, brake: 10, slide: 34, spin: 9, bounce: 2.4 };
const PLAQUE_S: Slide = { fly: 13, dx: 1300, h0: 20, brake: 6, slide: 14, spin: 5, bounce: 1.2 };
const FLAG_S: Slide = { fly: 24, dx: 1400, h0: 30, brake: 10, slide: 30, spin: -7, bounce: 0 };
const DEAL_S: Slide = { fly: 18, dx: 1150, h0: 22, brake: 8, slide: 24, spin: 8, bounce: 0.8 };
const CASH_S: Slide = { fly: 12, dx: 900, h0: 24, brake: 6, slide: 12, spin: 3, bounce: 0 };
export const blockAt = (T: TigerT, f: number) => slideIn(T.block, BLOCK_S, f);
export const plaqueAt = (T: TigerT, k: number, f: number) => slideIn(T.plaques[k], PLAQUE_S, f);
export const flagAt = (T: TigerT, f: number) => slideIn(T.flag, FLAG_S, f);
export const dealAt = (T: TigerT, f: number) => slideIn(T.deal, DEAL_S, f);
export const cashAt = (T: TigerT, j: number, f: number) => slideIn(T.cash[j], CASH_S, f);
/** the frame a slide-in moves fastest (its whoosh peaks there) */
export const fastest = (land: number, which: "block" | "plaque" | "flag" | "deal" | "cash") =>
  land - { block: BLOCK_S, plaque: PLAQUE_S, flag: FLAG_S, deal: DEAL_S, cash: CASH_S }[which].fly + 1;

/** a point of a posed thing (local x across, y up, z toward the viewer) → layer coords (y down) */
type Pose = { x: number; z: number; h: number; yaw: number };
const at = (p: Pose, lx: number, ly: number, lz: number): [number, number, number] => {
  const c = Math.cos(p.yaw), s = Math.sin(p.yaw);
  return [p.x + lx * c + lz * s, TG.floor - (p.h + ly), p.z - lx * s + lz * c];
};
const box8 = (p: Pose, w: number, h: number, d: number, y0 = 0) => {
  const out: [number, number, number][] = [];
  for (const x of [-w / 2, w / 2]) for (const y of [y0, y0 + h]) for (const z of [-d / 2, d / 2]) out.push(at(p, x, y, z));
  return out;
};

// ══ THE FRAME ══
export const FR = { W: 400, H: 520, MW: 38, D: 28, LEAN: 12 } as const;
const PRW = FR.W - 2 * FR.MW + 8, PRH = FR.H - 2 * FR.MW + 8;
const WIN = { x: 34, y: 36, w: PRW - 68, h: PRH - 36 - 54 };
const HINGE = 0.62, STRUT_BACK = 110, STRUT_T = 9;
const SHELF_TOP = TG.shelf.h + 0.3;
const frameW = (x: number, y: number, z: number) => {
  const th = -rad(FR.LEAN), c = Math.cos(th), s = Math.sin(th);
  const ly = y * c - z * s, lz = y * s + z * c;
  const a = rad(TG.frame.yaw), ca = Math.cos(a), sa = Math.sin(a);
  return { x: TG.frame.x + x * ca + lz * sa, y: -TG.floor + SHELF_TOP + ly, z: TG.frame.z - x * sa + lz * ca };
};
/** the frame's outer corners and the shelf's top corners (layer coords) */
export const framePts = (): [number, number, number][] => {
  const out: [number, number, number][] = [];
  for (const x of [-FR.W / 2, FR.W / 2]) for (const y of [0, FR.H]) for (const z of [0, FR.D]) { const p = frameW(x, y, z); out.push([p.x, -p.y, p.z]); }
  return out;
};
export const shelfPts = (): [number, number, number][] => box8({ x: TG.shelf.x, z: TG.shelf.z, h: 0, yaw: 0 }, TG.shelf.w, TG.shelf.h, TG.shelf.d);
export const frameFace = () => { const p = frameW(0, FR.H * 0.56, FR.D); return { x: p.x, y: -p.y, z: p.z }; };

// ══ POINTS FOR THE CAMERA AND THE CHECKS ══
const blockPose = (T: TigerT, f: number): Pose => { const b = blockAt(T, f); return { x: TG.block.x + b.dx, z: TG.block.z, h: b.h, yaw: b.spin }; };
export const blockPts = (T: TigerT, f: number) => box8(blockPose(T, f), TG.block.w, TG.block.h, TG.block.d);
/** the "15" plate's print (its corners on the block's face) */
export const blockPrint = (T: TigerT, f: number) => {
  const p = blockPose(T, f), z = TG.block.d / 2 + 3;
  return [at(p, -110, 30, z), at(p, 110, 30, z), at(p, -110, 210, z), at(p, 110, 210, z)];
};
/** plaque k's place: four columns, four rows (the last row's three centred under the others) */
export const plaqueRest = (k: number) => ({ x: TG.grid.x + ((k % 4) - 1.5 + (k >= 12 ? 0.5 : 0)) * TG.grid.dx, z: TG.grid.z0 + Math.floor(k / 4) * TG.grid.dz, yaw: rad(((hash(k, 3, 9) - 0.5) * 2) * 1.4) });
const plaquePose = (T: TigerT, k: number, f: number): Pose => { const r = plaqueRest(k), p = plaqueAt(T, k, f); return { x: r.x + p.dx, z: r.z, h: p.h, yaw: r.yaw + p.spin }; };
export const plaquePts = (T: TigerT, k: number, f: number) => box8(plaquePose(T, k, f), TG.grid.w, TG.grid.t + 2.4, TG.grid.d);
/** a plaque's engraving (the plate's print box) */
export const plaquePrint = (T: TigerT, k: number, f: number) => {
  const p = plaquePose(T, k, f), y = TG.grid.t + 2.4;
  return [at(p, -64, y, -25), at(p, 64, y, -25), at(p, -64, y, 25), at(p, 64, y, 25)];
};
const flagPose = (T: TigerT, f: number): Pose => { const p = flagAt(T, f); return { x: TG.flag.x + p.dx, z: TG.flag.z, h: p.h, yaw: rad(TG.flag.yaw) + p.spin }; };
export const flagPts = (T: TigerT, f: number) => box8(flagPose(T, f), TG.flag.w, 9, TG.flag.d);
/** the flag's print boxes (print px: u right, v down from the far edge): LIV GOLF + 2022, and SAUDI-BACKED */
const FS = TG.flag.w / 700;
export const FLAG_PRINT = { main: [92 * FS, 60 * FS, 660 * FS, 340 * FS] as const, sub: [150 * FS, 378 * FS, 590 * FS, 438 * FS] as const };
const flagUV = (p: Pose, u: number, v: number) => at(p, u - TG.flag.w / 2, 3, v - TG.flag.d / 2);
export const flagPrint = (T: TigerT, f: number, which: "main" | "sub") => {
  const p = flagPose(T, f), b = FLAG_PRINT[which];
  return [flagUV(p, b[0], b[1]), flagUV(p, b[2], b[1]), flagUV(p, b[0], b[3]), flagUV(p, b[2], b[3])];
};
const dealPose = (T: TigerT, f: number): Pose => { const p = dealAt(T, f); return { x: TG.deal.x + p.dx, z: TG.deal.z, h: p.h, yaw: rad(TG.deal.yaw) + p.spin }; };
/** the contract stack and the cash on it */
export const dealPts = (T: TigerT, f: number) => {
  const p = dealPose(T, f), out = box8(p, TG.deal.w + 14, 3, TG.deal.d + 14);
  for (const x of [-128, 128]) for (const z of [CASH[0].z - 62, CASH[1].z + 62]) out.push(at(p, x, CASH_TOP, z));
  return out;
};
/** the contract's title (PLAYER AGREEMENT) */
export const DEAL_PRINT = [24, 16, 308, 146] as const;
export const dealPrint = (T: TigerT, f: number) => {
  const p = dealPose(T, f), b = DEAL_PRINT, uv = (u: number, v: number) => at(p, u - TG.deal.w / 2, 3, v - TG.deal.d / 2);
  return [uv(b[0], b[1]), uv(b[2], b[1]), uv(b[0], b[3]), uv(b[2], b[3])];
};
/** the cash on the contract: each bundle's rest (contract-local x, z, its turn) and the height of its underside */
const SHEETS = 4, SHEET_T = 0.45, SHEET_STEP = 0.6, TOP_BOW = 0.5;
const SHEET_H = (k: number) => 0.25 + k * SHEET_STEP;
const PAPER_TOP = SHEET_H(SHEETS - 1) + SHEET_T + TOP_BOW + 0.35;
/** (contract-local: x across, z toward the viewer from the contract's centre; the title is at its far end) */
const CASH = [
  { x: -6, z: 22, yaw: -2, y: PAPER_TOP },
  { x: 8, z: 148, yaw: 3, y: PAPER_TOP },
  { x: 2, z: 86, yaw: 7, y: PAPER_TOP + BUNDLE.H + 0.4 },
];
const CASH_TOP = PAPER_TOP + 2 * BUNDLE.H + 0.4;
{
  // the two lower bundles never touch: their half-depths (turned) sum to less than their spacing
  // (the first lies at rest when the second slides in beside it, still turning by up to its spin)
  const hz = (y: number) => BUNDLE.HZ + BUNDLE.HX * Math.sin(rad(Math.abs(y)));
  if (hz(CASH[0].yaw) + hz(Math.abs(CASH[1].yaw) + CASH_S.spin) >= CASH[1].z - CASH[0].z) throw new Error("tiger: the two lower bundles overlap");
  if (CASH[1].z + hz(CASH[1].yaw) > TG.deal.d / 2 - 4) throw new Error("tiger: the near bundle overhangs the contract");
}

// ══ PRINT ══
type Mode = "c" | "h" | "m";
const PLATE = { w: 146, d: 62 } as const;
/** brushed brass: hairlines along x */
const brass = (g: CanvasRenderingContext2D, w: number, h: number, seed: number, mode: Mode) => {
  if (mode === "m") { g.fillStyle = "#FFF"; g.fillRect(0, 0, w, h); return; }
  if (mode === "h") { g.fillStyle = "#9A9A9A"; g.fillRect(0, 0, w, h); }
  else {
    const gr = g.createLinearGradient(0, 0, w * 0.4, h * 1.2);
    gr.addColorStop(0, "#E9CD86"); gr.addColorStop(0.45, "#C9A45A"); gr.addColorStop(0.7, "#E0C278"); gr.addColorStop(1, "#B98F45");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  }
  const n = Math.round((w * h) / 9);
  for (let i = 0; i < n; i++) {
    const lt = hash(i, 1, seed) > 0.5;
    g.fillStyle = mode === "h" ? `rgba(${lt ? "175,175,175" : "120,120,120"},0.3)` : `rgba(${lt ? "255,240,190" : "120,85,30"},${0.05 + 0.08 * hash(i, 2, seed)})`;
    g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 8 + 40 * hash(i, 5, seed), 0.35);
  }
  // handling: a soft tarnish toward the corners
  if (mode === "c") {
    for (const [x, y] of [[0, 0], [w, 0], [0, h], [w, h]]) {
      const t = g.createRadialGradient(x, y, 2, x, y, Math.min(w, h) * 0.5);
      t.addColorStop(0, "rgba(90,62,24,0.22)"); t.addColorStop(1, "rgba(90,62,24,0)");
      g.fillStyle = t; g.fillRect(0, 0, w, h);
    }
  }
};
/** a cut, black-filled engraving: the fill is lacquer (not metal), its lower-right lip catches the light */
const cut = (g: CanvasRenderingContext2D, mode: Mode, draw: (fill: string) => void) => {
  if (mode === "h") { draw("#000"); return; }
  if (mode === "m") { draw("#000"); return; }
  g.save(); g.translate(0.6, 0.7); draw("rgba(255,240,195,0.7)"); g.restore();
  draw("#1C150C");
};
const plaqueTex = (k: number, mode: Mode) => {
  const w = PLATE.w, h = PLATE.d, [year, major] = MAJORS15[k];
  return paintTex(`tg-plq-${k}-${mode}`, w, h, (g) => {
    brass(g, w, h, 30 + k, mode);
    if (mode === "m") { /* the engraving below is non-metal */ }
    cut(g, mode, (c) => { g.strokeStyle = c; g.lineWidth = 0.9; g.beginPath(); g.roundRect(4.5, 4.5, w - 9, h - 9, 3); g.stroke(); });
    g.textBaseline = "alphabetic"; g.textAlign = "left";
    g.textAlign = "center";
    cut(g, mode, (c) => { g.fillStyle = c; track(g, 1.6); fitFont(g, 800, 17, major, w - 26); g.fillText(major, w / 2 + 0.8, 21); track(g, 0); });
    cut(g, mode, (c) => { g.fillStyle = c; g.fillRect(26, 25.5, w - 52, 0.9); });
    cut(g, mode, (c) => { g.fillStyle = c; track(g, 1); fitFont(g, 800, 33, year, w - 30); g.fillText(year, w / 2 + 0.5, 55); track(g, 0); });
  }, 3);
};
const bigTex = (mode: Mode) => {
  const w = 252, h = 196;
  return paintTex(`tg-big15-${mode}`, w, h, (g) => {
    brass(g, w, h, 77, mode);
    cut(g, mode, (c) => { g.strokeStyle = c; g.lineWidth = 1.2; g.beginPath(); g.roundRect(7, 7, w - 14, h - 14, 5); g.stroke(); });
    cut(g, mode, (c) => { g.strokeStyle = c; g.lineWidth = 0.7; g.beginPath(); g.roundRect(12, 12, w - 24, h - 24, 4); g.stroke(); });
    g.textAlign = "center"; g.textBaseline = "alphabetic";
    cut(g, mode, (c) => { g.fillStyle = c; track(g, -4); fitFont(g, 800, 146, "15", 190); g.fillText("15", w / 2 - 2, 140); track(g, 0); });
    cut(g, mode, (c) => { g.fillStyle = c; g.fillRect(40, 152, w - 80, 1.2); });
    cut(g, mode, (c) => { g.fillStyle = c; track(g, 2.4); fitFont(g, 800, 17, "MAJOR CHAMPIONSHIPS", w - 46); g.fillText("MAJOR CHAMPIONSHIPS", w / 2 + 1.2, 176); track(g, 0); });
  }, 4);
};
/** walnut, the grain along x: dark heartwood, lighter streaks, pores */
const woodTex = (key: string, L: number, Wd: number, seed: number) => paintTex(`tg-wood-${key}`, L, Wd, (g) => {
  const gr = g.createLinearGradient(0, 0, 0, Wd); gr.addColorStop(0, "#3E271A"); gr.addColorStop(0.5, "#4B301F"); gr.addColorStop(1, "#37221A");
  g.fillStyle = gr; g.fillRect(0, 0, L, Wd);
  const n = Math.round(Wd * 1.2);
  for (let i = 0; i < n; i++) {
    const y = hash(i, 1, seed) * Wd, a = 0.6 + 2.2 * hash(i, 2, seed), ph = hash(i, 3, seed) * 6;
    g.strokeStyle = hash(i, 4, seed) > 0.55 ? `rgba(112,74,46,${0.22 + 0.3 * hash(i, 5, seed)})` : `rgba(18,10,6,${0.22 + 0.35 * hash(i, 5, seed)})`;
    g.lineWidth = 0.4 + 1.4 * hash(i, 6, seed);
    g.beginPath();
    for (let x = 0; x <= L; x += 8) { const yy = y + a * Math.sin(x * 0.011 + ph) + 0.7 * Math.sin(x * 0.05 + ph * 2); if (x) g.lineTo(x, yy); else g.moveTo(x, yy); }
    g.stroke();
  }
  for (let i = 0; i < (L * Wd) / 30; i++) { g.fillStyle = `rgba(10,5,3,${0.2 + 0.3 * hash(i, 7, seed)})`; g.fillRect(hash(i, 8, seed) * L, hash(i, 9, seed) * Wd, 1.5 + 3 * hash(i, 10, seed), 0.5); }
}, 2);
const walnut = (key: string, L: number, Wd: number, seed: number) => {
  const t = woodTex(key, L, Wd, seed);
  return new THREE.MeshPhysicalMaterial({ map: t, bumpMap: t, bumpScale: 0.5, roughness: 0.44, metalness: 0, clearcoat: 0.5, clearcoatRoughness: 0.3, envMapIntensity: 0.6 });
};
const PHOTO = "assets/tiger_face.png";
const matTex = () => paintTex("tg-mat", PRW, PRH, (g) => {
  g.fillStyle = "#F2ECE0"; g.fillRect(0, 0, PRW, PRH);
  for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${hash(i, 1, 41) > 0.5 ? "150,135,110" : "255,255,250"},${0.04 + 0.05 * hash(i, 2, 41)})`; g.fillRect(hash(i, 3, 41) * PRW, hash(i, 4, 41) * PRH, 0.5 + hash(i, 5, 41) * 2, 0.3); }
  const im = imageOf(PHOTO);
  if (im.complete && im.naturalWidth > 0) {
    // his head and shoulders: the 740 px crop, cut to the window's shape (the face left of centre, as shot)
    const sh = 740, sw = (sh * WIN.w) / WIN.h, sx = 70, sy = 0;
    g.filter = "contrast(1.04) saturate(1.02)";
    g.drawImage(im, sx, sy, sw, sh, WIN.x, WIN.y, WIN.w, WIN.h);
    g.filter = "none";
    for (let i = 0; i < 1800; i++) { g.fillStyle = `rgba(${hash(i, 1, 43) > 0.5 ? "255,255,255" : "0,0,0"},0.035)`; g.fillRect(WIN.x + hash(i, 2, 43) * WIN.w, WIN.y + hash(i, 3, 43) * WIN.h, 1, 1); }
  } else { g.fillStyle = "#3A4630"; g.fillRect(WIN.x, WIN.y, WIN.w, WIN.h); }
  const { x, y, w, h } = WIN, b = 4;
  g.fillStyle = "#FBF8F1";
  g.beginPath(); g.moveTo(x - b, y + h + b); g.lineTo(x + w + b, y + h + b); g.lineTo(x + w, y + h); g.lineTo(x, y + h); g.closePath(); g.fill();
  g.beginPath(); g.moveTo(x + w + b, y - b); g.lineTo(x + w + b, y + h + b); g.lineTo(x + w, y + h); g.lineTo(x + w, y); g.closePath(); g.fill();
  g.fillStyle = "#E4DCCD";
  g.beginPath(); g.moveTo(x - b, y - b); g.lineTo(x + w + b, y - b); g.lineTo(x + w, y); g.lineTo(x, y); g.closePath(); g.fill();
  g.beginPath(); g.moveTo(x - b, y - b); g.lineTo(x, y); g.lineTo(x, y + h); g.lineTo(x - b, y + h + b); g.closePath(); g.fill();
  const sg = g.createLinearGradient(0, 0, 0, 24); sg.addColorStop(0, "rgba(60,45,30,0.36)"); sg.addColorStop(1, "rgba(60,45,30,0)");
  g.fillStyle = sg; g.fillRect(0, 0, PRW, 24);
  const sl = g.createLinearGradient(0, 0, 18, 0); sl.addColorStop(0, "rgba(60,45,30,0.24)"); sl.addColorStop(1, "rgba(60,45,30,0)");
  g.fillStyle = sl; g.fillRect(0, 0, 18, PRH);
}, 3);
const glareTex = () => paintTex("tg-glare", PRW, PRH, (g) => {
  g.clearRect(0, 0, PRW, PRH);
  const band = (x0: number, wd: number, a: number) => {
    g.save(); g.translate(PRW / 2, PRH / 2); g.rotate(-0.62); g.translate(-PRW / 2, -PRH / 2);
    const gr = g.createLinearGradient(x0 - wd, 0, x0 + wd, 0);
    gr.addColorStop(0, "rgba(255,255,255,0)"); gr.addColorStop(0.5, `rgba(255,255,255,${a})`); gr.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = gr; g.fillRect(x0 - wd, -PRH, wd * 2, PRH * 3); g.restore();
  };
  band(PRW * 0.86, 60, 0.2); band(PRW * 0.68, 14, 0.16); band(PRW * 0.08, 36, 0.1);
  g.globalCompositeOperation = "destination-in";
  const fade = g.createLinearGradient(0, 0, 0, PRH); fade.addColorStop(0, "rgba(0,0,0,1)"); fade.addColorStop(0.75, "rgba(0,0,0,0.45)"); fade.addColorStop(1, "rgba(0,0,0,0.25)");
  g.fillStyle = fade; g.fillRect(0, 0, PRW, PRH);
  g.globalCompositeOperation = "source-over";
}, 2);
let softT: THREE.CanvasTexture | null = null;
const softTex = () => {
  if (softT) return softT;
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
  g.filter = "blur(24px)"; g.fillStyle = "#fff"; g.beginPath(); g.ellipse(128, 128, 92, 80, 0, 0, Math.PI * 2); g.fill();
  softT = new THREE.CanvasTexture(c);
  return softT;
};
/** a soft contact pool under a thing (a floor-marked plane, never an object) */
const pool = (w: number, d: number, a: number, y = 0.3) => {
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: softTex(), transparent: true, depthWrite: false, opacity: a, toneMapped: false }));
  p.rotation.x = -Math.PI / 2; p.position.y = y; p.renderOrder = 1.5;
  p.userData.isFloor = true; p.userData.noBounds = true;
  return p;
};

// ── the flag's cloth ──
const GOLD = (g: CanvasRenderingContext2D, y0: number, y1: number) => {
  const gr = g.createLinearGradient(0, y0, 0, y1);
  gr.addColorStop(0, "#F1D58C"); gr.addColorStop(0.5, "#CFA554"); gr.addColorStop(1, "#E3C173");
  return gr;
};
const flagTex = () => paintTex("tg-flag", TG.flag.w, TG.flag.d, (g) => {
  g.scale(TG.flag.w / 700, TG.flag.d / 490);
  const w = 700, h = 490;
  g.fillStyle = "#141414"; g.fillRect(0, 0, w, h);
  // the sleeve (a doubled band of the cloth, sewn down) on the hoist side
  g.fillStyle = "#1B1B1C"; g.fillRect(0, 0, 34, h);
  // the print, gold
  g.textAlign = "center"; g.textBaseline = "alphabetic";
  const cx = (34 + w) / 2 + 6;
  g.fillStyle = GOLD(g, 90, 200); track(g, 10); fitFont(g, 800, 150, "LIV GOLF", 540); g.fillText("LIV GOLF", cx + 5, 196);
  g.fillStyle = GOLD(g, 220, 330); track(g, 6); fitFont(g, 800, 118, "2022", 330); g.fillText("2022", cx + 3, 328); track(g, 0);
  g.fillStyle = "#CFA554"; g.fillRect(cx - 236, 404, 40, 2.2); g.fillRect(cx + 196, 404, 40, 2.2);
  g.fillStyle = "#E1BF70"; track(g, 7); fitFont(g, 800, 34, "SAUDI-BACKED", 360); g.fillText("SAUDI-BACKED", cx + 3.5, 417); track(g, 0);
  // the weave over everything (the ink sits IN the cloth): fine warp and weft, the print a hair broken by it
  for (let y = 0; y < h; y += 1.6) { g.fillStyle = `rgba(0,0,0,${0.12 + 0.06 * hash(y, 1, 5)})`; g.fillRect(0, y, w, 0.45); }
  for (let x = 0; x < w; x += 1.6) { g.fillStyle = `rgba(255,255,255,${0.025 + 0.02 * hash(x, 2, 5)})`; g.fillRect(x, 0, 0.4, h); }
  for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(0,0,0,${0.15 + 0.2 * hash(i, 3, 5)})`; g.fillRect(hash(i, 4, 5) * w, hash(i, 5, 5) * h, 1 + 2 * hash(i, 6, 5), 0.6); }
  // the stitching: the sleeve's double seam and the rolled hem round the other three sides (black thread, catching light)
  g.save(); g.setLineDash([4, 2.4]); g.lineWidth = 0.9; g.strokeStyle = "rgba(150,150,150,0.35)";
  for (const x of [35, 39]) { g.beginPath(); g.moveTo(x, 2); g.lineTo(x, h - 2); g.stroke(); }
  g.beginPath(); g.moveTo(40, 8); g.lineTo(w - 8, 8); g.lineTo(w - 8, h - 8); g.lineTo(40, h - 8); g.stroke();
  g.restore();
  // a crease where it was folded in its packet (lighter on its ridge)
  const cr = g.createLinearGradient(0, h / 2 - 6, 0, h / 2 + 6);
  cr.addColorStop(0, "rgba(255,255,255,0)"); cr.addColorStop(0.5, "rgba(255,255,255,0.06)"); cr.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = cr; g.fillRect(40, h / 2 - 6, w - 48, 12);
}, 2);
/** the cloth's rise above the table at (u, v) (v = 0 the far edge): the sleeve's tube, the rolled hem, the fold's ridge,
 *  soft ripples (larger while it slides: `amp`, moving with `ph`), never below its own thickness */
const clothY = (u: number, v: number, amp: number, ph: number) => {
  const w = TG.flag.w, d = TG.flag.d, x = u * w, z = v * d;
  let y = 0;
  if (x < 34) y += 6.5 * Math.sqrt(Math.max(0, 1 - ((x - 17) / 17) ** 2));
  const e = Math.min(w - x, z, d - z);
  y += 1.1 * Math.max(0, 1 - e / 9);
  y += 1.8 * Math.exp(-(((v - 0.5) / 0.025) ** 2)) * (x > 34 ? 1 : 0);
  const r = 0.5 + 0.5 * Math.sin(u * 7.3 + ph) * Math.sin(v * 4.1 + 0.6 + ph * 0.4);
  const r2 = 0.5 + 0.5 * Math.sin(u * 15.1 - v * 9.3 + 1.7 + ph * 1.3);
  y += amp * (1.6 * r * r + 0.7 * r2 * r2);
  return y + 0.75;
};
const CLOTH_T = 0.7;
const cloth = (face: THREE.Material, back: THREE.Material, edge: THREE.Material) => {
  const w = TG.flag.w, d = TG.flag.d, sx = 90, sy = 64;
  const top = new THREE.PlaneGeometry(w, d, sx, sy); top.rotateX(-Math.PI / 2);
  const bot = top.clone();
  const ring: [number, number][] = [];
  for (let i = 0; i <= sx; i++) ring.push([i / sx, 0]);
  for (let j = 1; j <= sy; j++) ring.push([1, j / sy]);
  for (let i = sx - 1; i >= 0; i--) ring.push([i / sx, 1]);
  for (let j = sy - 1; j >= 1; j--) ring.push([0, j / sy]);
  const eg = new THREE.BufferGeometry();
  eg.setAttribute("position", new THREE.Float32BufferAttribute(new Float32Array(ring.length * 18), 3));
  const shape = (amp: number, ph: number) => {
    const tp = top.attributes.position as THREE.BufferAttribute, bp = bot.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < tp.count; i++) { const y = clothY(tp.getX(i) / w + 0.5, tp.getZ(i) / d + 0.5, amp, ph); tp.setY(i, y); bp.setY(i, y - CLOTH_T); }
    const P = eg.attributes.position as THREE.BufferAttribute;
    for (let k = 0; k < ring.length; k++) {
      const [u0, v0] = ring[k], [u1, v1] = ring[(k + 1) % ring.length];
      const ax = (u0 - 0.5) * w, az = (v0 - 0.5) * d, ay = clothY(u0, v0, amp, ph), bx = (u1 - 0.5) * w, bz = (v1 - 0.5) * d, by = clothY(u1, v1, amp, ph);
      const q = [ax, ay, az, bx, by, bz, bx, by - CLOTH_T, bz, ax, ay, az, bx, by - CLOTH_T, bz, ax, ay - CLOTH_T, az];
      for (let n = 0; n < 18; n++) P.array[k * 18 + n] = q[n];
    }
    for (const gg of [top, bot, eg]) { gg.attributes.position.needsUpdate = true; gg.computeVertexNormals(); gg.computeBoundingBox(); gg.computeBoundingSphere(); }
  };
  const grp = new THREE.Group();
  grp.userData.unit = true;
  grp.add(mesh(top, face));
  const bm = (back as THREE.MeshPhysicalMaterial).clone(); bm.side = THREE.BackSide;
  grp.add(mesh(bot, bm));
  const em = (edge as THREE.MeshPhysicalMaterial).clone(); em.side = THREE.DoubleSide;
  grp.add(mesh(eg, em));
  return { grp, shape };
};

// ── the contracts ──
const grain = (g: CanvasRenderingContext2D, w: number, h: number, n: number, seed: number) => {
  for (let i = 0; i < n; i++) { g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? "120,110,95" : "255,255,250"},${0.035 + 0.04 * hash(i, 2, seed)})`; g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 0.5 + 2 * hash(i, 5, seed), 0.3); }
};
const contractTex = () => paintTex("tg-contract", TG.deal.w, TG.deal.d, (g) => {
  const W = TG.deal.w, H = TG.deal.d, CX = W / 2;
  g.fillStyle = "#FAF8F2"; g.fillRect(0, 0, W, H);
  grain(g, W, H, 2600, 17);
  g.fillStyle = "#22201D"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 4); fitFont(g, 700, 13, "LIV GOLF", 200); g.fillText("LIV GOLF", CX + 2, 34); track(g, 0);
  track(g, 1); fitFont(g, 800, 48, "PLAYER", 280); g.fillText("PLAYER", CX, 88);
  fitFont(g, 800, 48, "AGREEMENT", 290); g.fillText("AGREEMENT", CX, 134); track(g, 0);
  g.fillRect(40, 150, W - 80, 1.2);
  typeLines(g, 34, 166, W - 68, 6, 15, 3.6, 0.3, 3);
  typeLines(g, 34, 266, W - 68, 6, 15, 3.6, 0.3, 8);
  // the signature block (empty lines) at the foot
  g.fillStyle = "rgba(34,32,29,0.7)"; g.fillRect(34, H - 34, 120, 0.9); g.fillRect(W - 154, H - 34, 120, 0.9);
  font(g, 600, 7); g.fillText("PLAYER", 94, H - 24); g.fillText("FOR LIV GOLF", W - 94, H - 24);
  font(g, 600, 7); g.fillText("CONFIDENTIAL", CX, H - 9);
}, 3);
let fibreC: HTMLCanvasElement | null = null;
const fibre = (w: number, h: number) => {
  if (!fibreC) {
    fibreC = document.createElement("canvas"); fibreC.width = fibreC.height = 256;
    const g = fibreC.getContext("2d")!;
    g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 5200; i++) {
      const v = 100 + Math.round(60 * hash(i, 41, 3));
      g.strokeStyle = `rgba(${v},${v},${v},0.5)`; g.lineWidth = 0.5 + hash(i, 42, 3) * 0.8;
      const x = hash(i, 43, 3) * 256, y = hash(i, 44, 3) * 256, a = hash(i, 45, 3) * Math.PI, l = 2 + 7 * hash(i, 46, 3);
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
    }
  }
  const t = new THREE.CanvasTexture(fibreC);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(w / 128, h / 128);
  return t;
};
/** a sheet lying flat (print up, its top the far side), its underside at y = 0 of the returned group */
const lying = (o: PaperOpts) => {
  const g = new THREE.Group();
  const s = paper(o);
  s.rotation.x = -Math.PI / 2;
  s.position.y = o.t ?? 1.2;
  g.add(s);
  return g;
};

// ══ THE MODEL ══
export type TigerP = { f: number };
export const tigerModel = (T: TigerT) => (): Model<TigerP> => {
  const root = new THREE.Group();
  const FY = -TG.floor;

  // ══ THE SHELF AND THE FRAME (one object: the photo on its display shelf) ══
  const frameObj = new THREE.Group(); frameObj.userData.obj = "frame"; root.add(frameObj);
  {
    const S = TG.shelf;
    const sh = rbox(S.w, S.h, S.d, 6, walnut("shelf", S.w, S.d, 71), 4);
    sh.position.set(S.x, FY + S.h / 2, S.z + S.d / 2);
    frameObj.add(sh);
    const sp = pool(S.w + 80, S.d + 70, 0.2); sp.position.set(S.x, FY + 0.3, S.z + 6); frameObj.add(sp);
  }
  const frameRoot = new THREE.Group(); frameRoot.position.set(TG.frame.x, FY + SHELF_TOP, TG.frame.z); frameRoot.rotation.y = rad(TG.frame.yaw);
  frameObj.add(frameRoot);
  const frameG = new THREE.Group(); frameG.rotation.x = -rad(FR.LEAN); frameRoot.add(frameG);
  const body = new THREE.Group(); frameG.add(body);
  const woodX = walnut("rx", 420, 60, 61), woodY = (() => { const m = walnut("ry", 520, 60, 62); m.map!.center.set(0.5, 0.5); m.map!.rotation = Math.PI / 2; return m; })();
  const iw = FR.W - 2 * FR.MW, ih = FR.H - 2 * FR.MW;
  {
    for (const [w, h, x, y, m] of [[FR.W, FR.MW, 0, FR.H / 2 - FR.MW / 2, woodX], [FR.W, FR.MW, 0, -FR.H / 2 + FR.MW / 2, woodX],
      [FR.MW, ih + 2, FR.W / 2 - FR.MW / 2, 0, woodY], [FR.MW, ih + 2, -FR.W / 2 + FR.MW / 2, 0, woodY]] as [number, number, number, number, THREE.Material][]) {
      const rail = rbox(w, h, FR.D, 6, m, 5);
      rail.position.set(x, FR.H / 2 + y, FR.D);
      body.add(rail);
    }
    const gilt = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#D4AA4C"), metalness: 1, roughness: 0.3, envMapIntensity: 1.0 });
    for (const [w, h, x, y] of [[iw + 12, 6, 0, ih / 2 + 3], [iw + 12, 6, 0, -ih / 2 - 3], [6, ih, iw / 2 + 3, 0], [6, ih, -iw / 2 - 3, 0]] as [number, number, number, number][]) {
      const bar = rbox(w, h, 4, 1.6, gilt, 3);
      bar.position.set(x, FR.H / 2 + y, FR.D + 1.5);
      body.add(bar);
    }
    const pr = mesh(new THREE.PlaneGeometry(PRW, PRH), new THREE.MeshPhysicalMaterial({ map: matTex(), roughness: 0.55, metalness: 0, envMapIntensity: 0.35, sheen: 0.2, sheenRoughness: 0.6 }));
    pr.position.set(0, FR.H / 2, FR.D - 8);
    body.add(pr);
    const glass = mesh(new THREE.PlaneGeometry(PRW - 2, PRH - 2), new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#FFFFFF"), metalness: 0, roughness: 0.04,
      transparent: true, opacity: 0.1, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.6, depthWrite: false }), false, false);
    glass.position.set(0, FR.H / 2, FR.D - 3); glass.renderOrder = 3;
    body.add(glass);
    const glare = mesh(new THREE.PlaneGeometry(PRW - 2, PRH - 2), new THREE.MeshBasicMaterial({ map: glareTex(), transparent: true, depthWrite: false, toneMapped: false }), false, false);
    glare.position.set(0, FR.H / 2, FR.D - 2.9); glare.renderOrder = 4;
    body.add(glare);
    const board = rbox(FR.W - 10, FR.H - 10, 6, 1.5, M.paper("#9A7B56"));
    board.position.set(0, FR.H / 2, 6);
    body.add(board);
  }
  frameRoot.updateMatrixWorld(true);
  {
    const bb = new THREE.Box3().setFromObject(body, true);
    frameG.position.y = -(bb.min.y - (FY + SHELF_TOP));
  }
  {
    const hy = FR.H * HINGE, th = rad(FR.LEAN);
    const H = { y: frameG.position.y + hy * Math.cos(th), z: -hy * Math.sin(th) };
    const F = { y: 0, z: H.z - STRUT_BACK };
    const len = Math.hypot(H.y - F.y, H.z - F.z), phi = Math.atan2(H.z - F.z, H.y - F.y);
    const sg = new THREE.Group(); sg.position.set(0, (H.y + F.y) / 2, (H.z + F.z) / 2); sg.rotation.x = phi; frameRoot.add(sg);
    sg.add(rbox(46, len, STRUT_T, 2.5, woodY));
  }

  // ══ THE "15" BLOCK ══
  const blockG = new THREE.Group(); blockG.userData.obj = "block15"; root.add(blockG);
  {
    const B = TG.block;
    const wb = rbox(B.w, B.h, B.d, 9, walnut("block", B.w, B.h, 73), 4);
    wb.position.set(0, B.h / 2, B.d / 2);
    blockG.add(wb);
    const plate = mesh(slabOf(roundRect(252, 196, 6), 3.2, 1.1, 12), [
      new THREE.MeshPhysicalMaterial({ map: bigTex("c"), bumpMap: bigTex("h"), bumpScale: 1.1, metalnessMap: bigTex("m"), metalness: 1, roughness: 0.36, envMapIntensity: 1.1, clearcoat: 0.15, clearcoatRoughness: 0.2 }),
      new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#C9A45A"), metalness: 1, roughness: 0.32, envMapIntensity: 1.1 }),
    ]);
    plate.position.set(0, 18 + 98, B.d / 2 + 3.2);
    blockG.add(plate);
    const bp = pool(B.w + 70, B.d + 80, 0.26); blockG.add(bp);
  }

  // ══ THE FIFTEEN PLAQUES ══
  const G = TG.grid;
  const plaqueWood = walnut("plaque", G.w, G.d, 75);
  const brassEdge = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#C9A45A"), metalness: 1, roughness: 0.34, envMapIntensity: 1.1 });
  const plaques = MAJORS15.map((_, k) => {
    const pg = new THREE.Group(); pg.userData.obj = `plaque${k}`; root.add(pg);
    const base = rbox(G.w, G.t, G.d, 3.5, plaqueWood, 3);
    base.position.set(0, G.t / 2, G.d / 2);
    pg.add(base);
    const face = new THREE.MeshPhysicalMaterial({ map: plaqueTex(k, "c"), bumpMap: plaqueTex(k, "h"), bumpScale: 0.9, metalnessMap: plaqueTex(k, "m"), metalness: 1, roughness: 0.34, envMapIntensity: 1.1, clearcoat: 0.12, clearcoatRoughness: 0.2 });
    const plate = mesh(slabOf(roundRect(PLATE.w, PLATE.d, 3), 2.4, 0.7, 8), [face, brassEdge]);
    plate.rotation.x = -Math.PI / 2; plate.position.y = G.t + 2.4;
    pg.add(plate);
    pg.add(pool(G.w + 40, G.d + 40, 0.16));
    return pg;
  });

  // ══ THE FLAG ══
  const flagG = new THREE.Group(); flagG.userData.obj = "flag"; root.add(flagG);
  const nylon = (map: THREE.Texture | null, hex: string) => new THREE.MeshPhysicalMaterial({ map, color: new THREE.Color(hex), roughness: 0.58, metalness: 0, sheen: 0.9, sheenRoughness: 0.35,
    sheenColor: new THREE.Color("#8A8478"), envMapIntensity: 0.55 });
  const fl = cloth(nylon(flagTex(), "#FFFFFF"), nylon(null, "#111111"), nylon(null, "#1A1A1A"));
  flagG.add(fl.grp);
  let flagAmp = -1, flagPh = -1;

  // ══ THE CONTRACTS AND THE CASH ══
  const dealG = new THREE.Group(); root.add(dealG);
  const sheetsG = new THREE.Group(); sheetsG.userData.obj = "contracts"; dealG.add(sheetsG);
  {
    const D = TG.deal;
    const face = M.print(contractTex(), 0.86); (face as THREE.MeshStandardMaterial).bumpMap = fibre(D.w, D.d); (face as THREE.MeshStandardMaterial).bumpScale = 0.3;
    const backM = M.paper("#F1EEE6"), edgeM = M.paper("#E6E1D6");
    const OFF = [{ dx: -7, dz: 5, yaw: 2.6 }, { dx: 5, dz: -6, yaw: -1.8 }, { dx: -3, dz: 3, yaw: 1.1 }, { dx: 0, dz: 0, yaw: 0 }];
    OFF.forEach((o, k) => {
      const top = k === SHEETS - 1;
      const s = lying({ w: D.w, h: D.d, t: SHEET_T, face, back: backM, edge: edgeM, seg: 40, bow: top ? TOP_BOW : 0,
        curls: top ? [{ corner: "tr", r: 70, lift: 4 }] : [] });
      s.position.set(o.dx, SHEET_H(k), o.dz); s.rotation.y = rad(o.yaw);
      sheetsG.add(s);
    });
    sheetsG.add(pool(D.w + 60, D.d + 60, 0.14, 0.2));
  }
  const cashG = new THREE.Group(); cashG.userData.obj = "cash"; dealG.add(cashG);
  const bundles = CASH.map((_, j) => { const b = makeBundle({ seed: j + 2, flip: j === 1 }); cashG.add(b); return b; });

  root.add(makeFloor({ y: TG.floor, x0: -700, x1: 3600, z0: -1100, z1: 900, reflect: 0.05, shadow: 0.42, fadeC: [1450, -60], fadeR: [2300, 900] }));

  return {
    root,
    update: (p) => {
      const f = p.f;
      // the block
      const b = blockAt(T, f);
      blockG.visible = b.visible;
      blockG.position.set(TG.block.x + b.dx, FY + b.h, TG.block.z);
      blockG.rotation.y = b.spin;
      // the plaques
      plaques.forEach((pg, k) => {
        const r = plaqueRest(k), s = plaqueAt(T, k, f);
        pg.visible = s.visible;
        pg.position.set(r.x + s.dx, FY + s.h, r.z);
        pg.rotation.y = r.yaw + s.spin;
      });
      // the flag: its cloth ripples while it moves, then settles
      const fa = flagAt(T, f);
      flagG.visible = fa.visible;
      flagG.position.set(TG.flag.x + fa.dx, FY + fa.h, TG.flag.z);
      flagG.rotation.y = rad(TG.flag.yaw) + fa.spin;
      const moving = f < T.flag ? 1 : Math.max(0, 1 - (f - T.flag) / 14);
      const amp = 1 + 2.2 * moving * moving, ph = 0.9 * moving * Math.min(f - (T.flag - FLAG_S.fly), 40) * 0.12;
      if (fa.visible && (Math.abs(amp - flagAmp) > 1e-3 || Math.abs(ph - flagPh) > 1e-3)) { fl.shape(amp, ph); flagAmp = amp; flagPh = ph; }
      // the contracts, and the bundles slid onto them
      const d = dealAt(T, f);
      dealG.visible = d.visible;
      dealG.position.set(TG.deal.x + d.dx, FY + d.h, TG.deal.z);
      dealG.rotation.y = rad(TG.deal.yaw) + d.spin;
      bundles.forEach((bn, j) => {
        const c = cashAt(T, j, f), r = CASH[j];
        bn.visible = c.visible;
        bn.position.set(r.x + c.dx, r.y + c.h, r.z);
        bn.rotation.y = rad(r.yaw) + c.spin;
      });
    },
  };
};
