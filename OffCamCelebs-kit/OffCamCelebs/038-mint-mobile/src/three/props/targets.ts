// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE TARGETS IN 3-D (038) — "The rest depended on Mint hitting targets. That's where numbers usually shrink. Not this time.
// In 2025, the targets were dropped. The rest became the maximum, minus what was already paid." On the cream ground, on an
// unseen desk (the floor: its soft shadows), ONE working document and the two things that act on it:
//   · THE CLIPBOARD: a hardboard clipboard (letter size, 9 × 12½ in: 560 × 760 px at 62 px per inch) with its rounded
//     corners, its fibre and sheen, and a steel lever clip (riveted base plate, rolled hinge, a sprung jaw whose curled lip
//     presses the page). On it, THE EARNOUT SCHEDULE: a letter sheet (8½ × 11 in) held under the jaw, its near corners lifting.
//     Its print, painted into the sheet's own surface: a small header, the TARGETS heading, three performance bars (an outlined
//     track, a fill, a dashed target mark with its pointer), a payout row (a "$" and a gold bar: the "up to" money, no figure),
//     greeked terms and a signature rule. The bars FILL toward their marks on "targets", FALTER on "shrink" while the payout
//     bar shrinks and greys, and FREEZE dead on "Not this time." The formula of the 2025 amendment prints into the rubbed-out
//     area line by line on "The rest became the maximum, minus what was already paid" (no computed figure, ever), and the
//     payout bar runs back to full, gold, on "maximum".
//   · THE STICKY NOTE: a yellow note (2.2 in) that glides in on "In 2025" and lands on the page's top-right margin: JUN 30
//     2025 (the amendment's date, one figure). Its free edge curls up, its glued strip lies flat.
//   · THE ERASER: a big pink rubber eraser (the classic slanted-end block, 2¾ × 1 in), gliding in from beyond the right edge,
//     rubbing the bars and then the TARGETS heading out (a scrubbing stroke that tilts into its motion, the print fading
//     where its face has passed, a faint grey smear left behind) and pushing real crumbs off the ends of its strokes, where
//     they stay. It lifts and leaves to the right.
// Every object is tagged for the audits; the clip's rivets are its only designed join (none pierce the page).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, roundRect, slabOf, fontsReady, imagesReady, imageOf, type Model } from "../stage";
import { M, rad, fitFont, track, hash, paper, paperAt, paperZ, typeLines, font, type PaperOpts } from "../kit029";

// ══ THE PLACE'S GEOMETRY (layer px; world y up, z toward the viewer) ══
/** the eye: up and to the right, high enough to read a page lying on the desk */
export const TG_EYE = { x: 900, y: -760, D: 2100 };
export const TG = {
  floor: 1300,
  board: { cx: 540, cz: -40, w: 560, d: 760, t: 6, r: 22 },
  /** the turn's pivot (the whole desk top turns a few degrees across the place) */
  pivot: { x: 540, z: -40 },
} as const;
const BT = TG.board.t;
const ZFAR = TG.board.cz - TG.board.d / 2;          // the board's far edge (world z)
/** the page: letter size, its top edge 40 px in from the board's far edge */
export const PW = 500, PH = 647;
const PAGE_TOP_Z = ZFAR + 40;
const PO: PaperOpts = { w: PW, h: PH, t: 0.9, curls: [{ corner: "br", r: 160, lift: 7 }, { corner: "bl", r: 110, lift: 3 }], wave: 0.35, seed: 2, seg: 72, face: null as unknown as THREE.Material };
const minZ = (o: PaperOpts) => { const Z = paperZ(o); let m = 1e9; for (let i = 0; i <= 40; i++) for (let j = 0; j <= 40; j++) m = Math.min(m, Z(i / 40, j / 40)); return m; };
const PAGE_MIN = minZ(PO);
/** world y of the page's group (its back clears the board by 0.3) */
const PAGE_Y = -TG.floor + BT + PO.t! + 0.3 - PAGE_MIN;
/** world y of the page's FRONT at page px (u from the left, v from the top) */
export const pageY = (u: number, v: number) => PAGE_Y + paperAt(PO, u - PW / 2, PH / 2 - v);
/** the highest point of the page's front over a footprint (page px) */
const pageHi = (u0: number, u1: number, v0: number, v1: number, n = 16) => {
  let m = -1e9;
  for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) {
    const u = Math.max(0, Math.min(PW, u0 + ((u1 - u0) * i) / n)), v = Math.max(0, Math.min(PH, v0 + ((v1 - v0) * j) / n));
    m = Math.max(m, pageY(u, v));
  }
  return m;
};
/** page px → world (x, z), before the turn */
export const pageXZ = (u: number, v: number) => ({ x: TG.board.cx - PW / 2 + u, z: PAGE_TOP_Z + v });

// ══ THE PRINT ══
/** the bars: centre line (page v), target mark (fraction of the track), the fill reached on "targets", where it falters to */
const TRACK = { u0: 40, u1: 440, h: 16 };
export const BARS = [
  { v: 224, mark: 0.8, hit: 0.74, fall: 0.47 },
  { v: 268, mark: 0.88, hit: 0.8, fall: 0.58 },
  { v: 312, mark: 0.72, hit: 0.66, fall: 0.4 },
];
const PAY = { v: 395, u0: 76, u1: 440, h: 18 };
const INK = "#22262E", BLUE = "#3E5F8E", GOLD = "#D9B44A", GREY = "#A9A59C";
/** the heading's box (page px), for the eraser's path */
export const HEAD = { u: 40, base: 152, size: 40 };

const mixHex = (a: string, b: string, t: number) => {
  const p = (h: string, i: number) => parseInt(h.slice(1 + i * 2, 3 + i * 2), 16);
  return `rgb(${[0, 1, 2].map((i) => Math.round(p(a, i) + (p(b, i) - p(a, i)) * Math.max(0, Math.min(1, t)))).join(",")})`;
};

// ══ THE ERASER: its block, its path ══
/** the slanted-end block (side profile, x along its length, y up): the bottom face runs −88…72, the top −72…88 */
const EH = 30, EWD = 58;
const EB0 = -88, EB1 = 72, ET0 = -72, ET1 = 88;
export type Timing = {
  /** the bars fill (from, to); they falter from `fall` and freeze at `freeze`; the payout shrinks with them */
  fillA: number; fillB: number; fall: number; fallEnd: number; freeze: number;
  /** the sticky note's glide (from, landed) */
  stA: number; stB: number;
  /** the eraser: arrives (in0 → in1), rubs the bars (in1 → aEnd), crosses to the heading (→ bA), rubs it (→ bEnd), lifts
   *  (→ lift), leaves (→ gone) */
  in0: number; in1: number; aEnd: number; bA: number; bEnd: number; lift: number; gone: number;
  /** the amendment's formula prints line by line; the payout runs back to full on `pay` */
  l1: number; l2a: number; l2b: number; l3a: number; l3b: number; pay: number;
};
const cl = (x: number) => Math.max(0, Math.min(1, x));
const smooth = (t: number) => { const x = cl(t); return x * x * (3 - 2 * x); };
const quartOut = (t: number) => 1 - Math.pow(1 - cl(t), 4);
const cubicIn = (t: number) => cl(t) ** 3;
const settleE = (t: number) => { const x = cl(t); return 1 - Math.pow(1 - x, 3); };
/** the bars' rub: the eraser's centre oscillates along u while it walks down v */
const A_MID = 248, A_AMP = 150, A_ROWS = [230, 267, 302], A_PER = 8;
const B_MID = 160, B_AMP = 50, B_V0 = 152, B_V1 = 140, B_PER = 9;
export type EraserState = { u: number; v: number; h: number; tilt: number; on: boolean; visible: boolean };
export const eraserAt = (T: Timing, f: number): EraserState => {
  const a0u = A_MID, a0v = A_ROWS[0];
  if (f <= T.in0) return { u: 1200, v: a0v, h: 24, tilt: 0, on: false, visible: false };
  if (f < T.in1) {
    const p = quartOut((f - T.in0) / (T.in1 - T.in0));
    return { u: 1200 + (a0u - 1200) * p, v: a0v, h: 24 * Math.pow(1 - p, 1.6), tilt: rad(-3) * (1 - p), on: false, visible: true };
  }
  if (f < T.aEnd) {
    // a full stroke left and right on each of three rows down the bars, stepping down a row as it crosses the middle
    const t = f - T.in1, ph = (2 * Math.PI * t) / A_PER;
    const sp = Math.min(1, t / 1.5);
    let v = A_ROWS[0];
    for (let r = 1; r < A_ROWS.length; r++) v += (A_ROWS[r] - A_ROWS[r - 1]) * smooth((t - (r * A_PER - 1.5)) / 3);
    return { u: A_MID + A_AMP * Math.sin(ph) * sp, v, h: 0, tilt: rad(2.4) * Math.cos(ph) * sp, on: true, visible: true };
  }
  if (f < T.bA) {
    // across to the heading: first along the bars (left), then up the page, so it never comes near the note
    const e = eraserAt(T, T.aEnd - 0.001), p = cl((f - T.aEnd) / (T.bA - T.aEnd));
    const pu = smooth(p / 0.6), pv = smooth((p - 0.4) / 0.6);
    return { u: e.u + (B_MID - e.u) * pu, v: e.v + (B_V0 - e.v) * pv, h: 0, tilt: rad(-1.5) * Math.sin(Math.PI * p), on: true, visible: true };
  }
  if (f < T.bEnd) {
    const t = f - T.bA, ph = (2 * Math.PI * t) / B_PER;
    const sp = Math.min(1, t / 2) * (1 - smooth((f - (T.bEnd - 3)) / 3));
    return { u: B_MID + B_AMP * Math.sin(ph) * sp, v: B_V0 + ((B_V1 - B_V0) * t) / (T.bEnd - T.bA), h: 0, tilt: rad(2.2) * Math.cos(ph) * sp, on: true, visible: true };
  }
  const end = { u: B_MID, v: B_V1 };
  if (f < T.lift) { const p = smooth((f - T.bEnd) / (T.lift - T.bEnd)); return { ...end, h: 16 * p, tilt: rad(-4) * p, on: false, visible: true }; }
  if (f < T.gone) { const p = cubicIn((f - T.lift) / (T.gone - T.lift)); return { u: end.u + 1300 * p, v: end.v, h: 16 + 8 * p, tilt: rad(-4), on: false, visible: true }; }
  return { u: 1500, v: end.v, h: 24, tilt: 0, on: false, visible: false };
};
/** the eraser's contact face on the page at a state (page px box) */
const footOf = (e: EraserState) => ({ u0: e.u + EB0, u1: e.u + EB1, v0: e.v - EWD / 2, v1: e.v + EWD / 2 });

// ── THE ERASED MASK: every cell the face has passed over, integrated from the first contact (deterministic per frame) ──
const CELL = 4, MW = Math.ceil(PW / CELL), MH = Math.ceil(PH / CELL);
const maskAt = (() => {
  let lastF = -1, lastT: Timing | null = null;
  const m = new Float32Array(MW * MH);
  return (T: Timing, f: number) => {
    if (f === lastF && T === lastT) return m;
    lastF = f; lastT = T; m.fill(0);
    for (let g = T.in1; g < Math.min(f, T.bEnd); g += 1 / 3) {
      const e = eraserAt(T, g);
      if (!e.on) continue;
      const b = footOf(e);
      const i0 = Math.max(0, Math.floor(b.u0 / CELL)), i1 = Math.min(MW - 1, Math.floor(b.u1 / CELL));
      const j0 = Math.max(0, Math.floor(b.v0 / CELL)), j1 = Math.min(MH - 1, Math.floor(b.v1 / CELL));
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
        // the face's pressure falls off over its last few px (its rounded edge)
        const cu = (i + 0.5) * CELL, cv = (j + 0.5) * CELL;
        const edge = Math.min(cu - b.u0, b.u1 - cu, cv - b.v0, b.v1 - cv);
        const k = j * MW + i;
        m[k] = Math.min(1, m[k] + 0.45 * cl(edge / 3) * (0.8 + 0.4 * hash(i, j, 7)));
      }
    }
    return m;
  };
})();

// ── THE CRUMBS: pushed off the ends of the strokes, where the face never returns ──
export type Crumb = { u: number; v: number; at: number; a: number; b: number; c: number; yaw: number; tone: number };
export const crumbsOf = (T: Timing): Crumb[] => {
  const out: Crumb[] = [];
  let n = 0;
  const add = (f: number, side: -1 | 1, phase: "A" | "B") => {
    const e = eraserAt(T, f);
    const b = footOf(e);
    const k = phase === "A" ? 3 : 2;
    for (let i = 0; i < k; i++) {
      const s = n++;
      const gap = 3 + 9 * hash(s, 1, 3);
      const u = side > 0 ? b.u1 + 7 + gap : b.u0 - 7 - gap;
      const v = e.v + (hash(s, 2, 3) - 0.5) * (EWD - 10);
      out.push({ u, v, at: Math.ceil(f), a: 1.6 + 2.6 * hash(s, 3, 3), b: 0.9 + 0.6 * hash(s, 4, 3), c: 1.0 + 0.7 * hash(s, 5, 3), yaw: hash(s, 6, 3) * Math.PI, tone: hash(s, 7, 3) });
    }
  };
  // the extremes of the bars' strokes (sin = ±1) and the heading's
  for (let t = A_PER / 4; T.in1 + t < T.aEnd; t += A_PER / 2) {
    const ph = Math.round((t - A_PER / 4) / (A_PER / 2)) % 2 === 0 ? 1 : -1;
    if (t > 1.5) add(T.in1 + t, ph as 1 | -1, "A");
  }
  for (let t = B_PER / 4; T.bA + t < T.bEnd - 3; t += B_PER / 2) {
    const ph = Math.round((t - B_PER / 4) / (B_PER / 2)) % 2 === 0 ? 1 : -1;
    if (t > 2) add(T.bA + t, ph as 1 | -1, "B");
  }
  // never on the sticky note, never off the page
  return out.filter((c) => c.u > 6 && c.u < PW - 6 && !(c.u > 318 && c.v < 205));
};

// ══ THE STICKY NOTE ══
const SN = 136;
export const STICKY = { u: 400, v: 124, yaw: -3 };
const SO: PaperOpts = { w: SN, h: SN, t: 0.5, curls: [{ corner: "bl", r: 70, lift: 5 }, { corner: "br", r: 80, lift: 6.5 }], wave: 0.15, seed: 5, seg: 30, face: null as unknown as THREE.Material };
const SN_MIN = minZ(SO);
/** the note's rest height (world y of its group): its back clears the page by 0.3 over its whole footprint */
const SN_Y = pageHi(STICKY.u - 74, STICKY.u + 74, STICKY.v - 74, STICKY.v + 74) + SO.t! + 0.3 - SN_MIN;
export const stickyAt = (T: Timing, f: number) => {
  if (f <= T.stA) return { du: 1000, h: 30, visible: false };
  const p = quartOut((f - T.stA) / (T.stB - T.stA));
  return { du: 1000 * (1 - p), h: 30 * Math.pow(1 - p, 2), visible: true };
};

// ══ ANCHORS AND HULLS (world, before the turn), for the set's camera and its checks ══
export const anchors = () => {
  const at = (u: number, v: number) => { const p = pageXZ(u, v); return { x: p.x, y: -pageY(u, v), z: p.z }; };
  return {
    head: at(150, 140), bars: at(240, 262), pay: at(250, PAY.v), sticky: at(STICKY.u, STICKY.v),
    f1: at(130, 150), f2: at(150, 222), f3: at(150, 285), formula: at(150, 215), noteEdge: at(345, 200),
  };
};
/** the hull's highest points: the board's far corners and the clip's crown (world x, y, z) */
export const hullTop = (): [number, number, number][] => {
  const yb = -TG.floor + BT, x0 = TG.board.cx - TG.board.w / 2, x1 = TG.board.cx + TG.board.w / 2;
  return [[x0, yb, ZFAR], [x1, yb, ZFAR], [TG.board.cx - 100, yb + 16, ZFAR + 46], [TG.board.cx + 100, yb + 16, ZFAR + 46]];
};

// ══ TEXTURES ══
const board = () => {
  const c = document.createElement("canvas");
  const W = 280, H = 380; c.width = W * 2; c.height = H * 2;
  const g = c.getContext("2d")!; g.scale(2, 2);
  g.fillStyle = "#86593A"; g.fillRect(0, 0, W, H);
  // hardboard: a fine, even fibre with a faint mottle and the sheen of its tempered face
  for (let i = 0; i < 70; i++) { g.fillStyle = `rgba(${hash(i, 1, 41) > 0.5 ? "60,36,20" : "170,120,80"},${0.04 + 0.05 * hash(i, 2, 41)})`; g.beginPath(); g.ellipse(hash(i, 3, 41) * W, hash(i, 4, 41) * H, 20 + 40 * hash(i, 5, 41), 10 + 20 * hash(i, 6, 41), hash(i, 7, 41) * 3, 0, Math.PI * 2); g.fill(); }
  for (let i = 0; i < 9000; i++) { g.fillStyle = `rgba(${hash(i, 1, 43) > 0.5 ? "50,30,16" : "190,140,96"},${0.06 + 0.1 * hash(i, 2, 43)})`; g.fillRect(hash(i, 3, 43) * W, hash(i, 4, 43) * H, 0.5 + hash(i, 5, 43) * 1.6, 0.35); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
};

/** the page's fixed print (cached; repainted once the faces have loaded) */
let baseCanvas: HTMLCanvasElement | null = null, baseFonts = false;
const S = 3;
const basePrint = () => {
  const wm = imageOf("assets/brand/tmobile_wordmark.png");
  if (baseCanvas && (baseFonts || !(fontsReady() && imagesReady()))) return baseCanvas;
  const c = baseCanvas ?? document.createElement("canvas");
  c.width = PW * S; c.height = PH * S;
  const g = c.getContext("2d")!;
  g.setTransform(S, 0, 0, S, 0, 0);
  // the sheet: a warm white bond, its fibre and a faint tooth
  g.fillStyle = "#F7F3EA"; g.fillRect(0, 0, PW, PH);
  for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(${hash(i, 1, 5) > 0.5 ? "150,135,110" : "255,255,250"},${0.02 + 0.025 * hash(i, 2, 5)})`; g.beginPath(); g.ellipse(hash(i, 3, 5) * PW, hash(i, 4, 5) * PH, 14 + 40 * hash(i, 5, 5), 8 + 26 * hash(i, 6, 5), hash(i, 7, 5) * 3, 0, Math.PI * 2); g.fill(); }
  for (let i = 0; i < 7000; i++) { g.fillStyle = `rgba(${hash(i, 1, 6) > 0.55 ? "110,100,84" : "255,253,246"},${0.04 + 0.06 * hash(i, 2, 6)})`; g.save(); g.translate(hash(i, 3, 6) * PW, hash(i, 4, 6) * PH); g.rotate(hash(i, 5, 6) * Math.PI); g.fillRect(0, 0, 0.4 + hash(i, 6, 6) * 2, 0.16); g.restore(); }
  g.fillStyle = INK; g.strokeStyle = INK; g.textBaseline = "alphabetic"; g.textAlign = "left";
  // the header: the schedule's name, small, and its rule
  font(g, 700, 9, false); track(g, 2.2); g.fillText("EARNOUT SCHEDULE", 40, 76); track(g, 0);
  // the letterhead's buyer: the real T-Mobile wordmark, small (P16, assets/brand)
  if (wm.complete && wm.naturalWidth > 0) g.drawImage(wm, 372, 63, 88, 88 * (400 / 1946));
  g.fillRect(40, 84, PW - 80, 0.8);
  // the payout row: a "$" and the gold bar's outlined track (the "up to" money: no figure)
  font(g, 800, 22); g.fillText("$", 41, PAY.v + 8);
  g.lineWidth = 0.9; g.strokeRect(PAY.u0, PAY.v - PAY.h / 2, PAY.u1 - PAY.u0, PAY.h);
  g.fillRect(PAY.u1 - 0.6, PAY.v - PAY.h / 2 - 5, 1.2, PAY.h + 10);
  // the terms: greeked paragraphs, a signature rule, the folio
  typeLines(g, 40, 440, PW - 80, 4, 12, 4.2, 0.22, 1);
  typeLines(g, 40, 500, PW - 80, 3, 12, 4.2, 0.22, 6);
  g.fillRect(40, 585, 170, 0.8); g.fillRect(290, 585, 170, 0.8);
  typeLines(g, 40, 592, 90, 1, 10, 3.6, 0.24, 3); typeLines(g, 290, 592, 90, 1, 10, 3.6, 0.24, 8);
  font(g, 600, 7); g.textAlign = "center"; g.fillStyle = "rgba(34,38,46,0.7)"; g.fillText("3", PW / 2, 626); g.textAlign = "left";
  baseFonts = fontsReady() && imagesReady() && wm.complete && wm.naturalWidth > 0;
  baseCanvas = c;
  return c;
};

export type TargetsP = { f: number; yaw: number };

export const targetsModel = (T: Timing) => (): Model<TargetsP> => {
  const root = new THREE.Group();
  const FY = -TG.floor;
  const turn = new THREE.Group(); turn.position.set(TG.pivot.x, 0, TG.pivot.z); root.add(turn);
  const W0 = new THREE.Group(); W0.position.set(-TG.pivot.x, 0, -TG.pivot.z); turn.add(W0);

  // ══ THE CLIPBOARD: a hardboard slab with rounded corners ══
  const cb = new THREE.Group(); cb.userData.obj = "clipboard"; W0.add(cb);
  {
    const B = TG.board;
    const face = new THREE.MeshPhysicalMaterial({ map: board(), roughness: 0.5, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.5, envMapIntensity: 0.5 });
    const edge = new THREE.MeshStandardMaterial({ color: new THREE.Color("#5E3B24"), roughness: 0.75, envMapIntensity: 0.35 });
    const slab = mesh(slabOf(roundRect(B.w, B.d, B.r), BT, 1.4, 16), [face, edge]);
    // the extrusion runs along its z: turned to lie flat, its front face is the top, its +y the far side
    slab.rotation.x = -Math.PI / 2;
    slab.position.set(B.cx, FY + BT, B.cz);
    cb.add(slab);
  }

  // ══ THE PAGE ══
  const pageCanvas = document.createElement("canvas");
  pageCanvas.width = PW * S; pageCanvas.height = PH * S;
  const pg = pageCanvas.getContext("2d")!;
  const pageTex = new THREE.CanvasTexture(pageCanvas); pageTex.colorSpace = THREE.SRGBColorSpace; pageTex.anisotropy = 8;
  const pageFace = M.print(pageTex, 0.9);
  const page = paper({ ...PO, face: pageFace, back: M.paper("#EFEAE0"), edge: M.paper("#E9E3D6") });
  page.rotation.x = -Math.PI / 2;
  const pc = pageXZ(PW / 2, PH / 2);
  page.position.set(pc.x, PAGE_Y, pc.z);
  page.userData.obj = "schedule";
  W0.add(page);
  // the layers the print is composed from
  const er = document.createElement("canvas"); er.width = PW * S; er.height = PH * S;
  const eg = er.getContext("2d")!;
  const mk = document.createElement("canvas"); mk.width = MW; mk.height = MH;
  const mg = mk.getContext("2d")!;
  const mimg = mg.createImageData(MW, MH);
  const sm = document.createElement("canvas"); sm.width = MW; sm.height = MH;
  const smg = sm.getContext("2d")!;

  // ══ THE CLIP: base plate, rivets, rolled hinge, sprung jaw (steel) ══
  const clip = new THREE.Group(); clip.userData.obj = "clip"; W0.add(clip);
  {
    const steel = M.steel("#C3C8CE");
    const yb = FY + BT;
    const base = new THREE.Group();
    const pl = (() => { const m = mesh(slabOf(roundRect(214, 26, 5), 2.4, 0.8), steel); m.rotation.x = -Math.PI / 2; m.position.set(TG.board.cx, yb + 0.1 + 2.4, ZFAR + 6 + 13); return m; })();
    base.add(pl);
    for (const dx of [-84, 84]) {
      const rv = mesh(new THREE.SphereGeometry(3.4, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.chrome());
      rv.scale.y = 0.55; rv.position.set(TG.board.cx + dx, yb + 0.1 + 2.4 - 0.2, ZFAR + 19); base.add(rv);
    }
    clip.add(base);
    // the rolled hinge along the plate's near edge
    const roll = mesh(new THREE.CylinderGeometry(3.6, 3.6, 196, 28).rotateZ(Math.PI / 2), steel);
    roll.position.set(TG.board.cx, yb + 0.1 + 3.6, ZFAR + 33);
    clip.add(roll);
    // the jaw: a sprung steel band, its profile from the hinge's crown up over the page's top edge and down to the curled lip
    // that presses the page (bottom surface heights above the board: the lip at the page's top + 0.2)
    const lipV = 32, lipZ = PAGE_TOP_Z + lipV;
    const press = pageHi(150, 350, lipV - 6, lipV + 6) - yb + 0.2 + 0.6;   // + the band's bevel
    const prof: [number, number][] = [[ZFAR + 31, 6.6], [ZFAR + 36, 9.6], [ZFAR + 42, 12.4], [ZFAR + 49, 13.6], [ZFAR + 56, 12.6], [ZFAR + 62, 9.6], [lipZ - 4, press + 1.4], [lipZ, press], [lipZ + 3, press + 0.6], [lipZ + 6, press + 2.6]];
    const TH = 1.6;
    const sh = new THREE.Shape();
    // shape coords: x = −z (so the extrusion, turned about y, lands z where it belongs), y = height
    sh.moveTo(-prof[0][0], prof[0][1]);
    for (const [z, y] of prof.slice(1)) sh.lineTo(-z, y);
    for (const [z, y] of prof.slice().reverse()) sh.lineTo(-z, y + TH);
    const jg = new THREE.ExtrudeGeometry(sh, { depth: 190, bevelEnabled: true, bevelThickness: 0.5, bevelSize: 0.5, bevelSegments: 2, curveSegments: 4 });
    jg.rotateY(Math.PI / 2);
    const jaw = mesh(jg, M.steel("#CDD2D8"));
    jaw.position.set(TG.board.cx - 95, yb, 0);
    clip.add(jaw);
  }

  // ══ THE STICKY NOTE ══
  const stTex = (() => {
    const c = document.createElement("canvas"); c.width = SN * 3; c.height = SN * 3;
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    let painted = false;
    const paint = () => {
      if (painted) return;
      const g = c.getContext("2d")!; g.setTransform(3, 0, 0, 3, 0, 0);
      g.fillStyle = "#F7DF6E"; g.fillRect(0, 0, SN, SN);
      // the glued strip is a shade deeper; the fibre of the cheap stock
      g.fillStyle = "rgba(200,160,40,0.10)"; g.fillRect(0, 0, SN, 22);
      for (let i = 0; i < 1800; i++) { g.fillStyle = `rgba(${hash(i, 1, 9) > 0.5 ? "150,120,30" : "255,250,200"},${0.05 + 0.06 * hash(i, 2, 9)})`; g.fillRect(hash(i, 3, 9) * SN, hash(i, 4, 9) * SN, 0.4 + hash(i, 5, 9) * 1.6, 0.25); }
      g.fillStyle = INK; g.textAlign = "center"; g.textBaseline = "alphabetic";
      track(g, 2); fitFont(g, 800, 26, "JUN 30", SN - 34); g.fillText("JUN 30", SN / 2 + 1, 58); track(g, 0);
      fitFont(g, 800, 52, "2025", SN - 22); g.fillText("2025", SN / 2, 106);
      g.fillRect(SN / 2 - 40, 116, 80, 2.2);
      painted = fontsReady();
      t.needsUpdate = true;
    };
    return { t, paint };
  })();
  const sticky = new THREE.Group(); sticky.userData.obj = "sticky"; W0.add(sticky);
  {
    const s = paper({ ...SO, face: M.print(stTex.t, 0.85), back: M.paper("#EFD65E"), edge: M.paper("#E9CF58") });
    s.rotation.x = -Math.PI / 2;
    sticky.add(s);
  }
  const sp = pageXZ(STICKY.u, STICKY.v);
  sticky.rotation.y = rad(STICKY.yaw);

  // ══ THE ERASER ══
  const eraser = new THREE.Group(); eraser.userData.obj = "eraser"; W0.add(eraser);
  const eTilt = new THREE.Group(); eraser.add(eTilt);
  {
    const s = new THREE.Shape();
    const r = 4;
    // the slanted-end block's side profile, its corners rounded
    const P: [number, number][] = [[EB0, 0], [EB1, 0], [ET1, EH], [ET0, EH]];
    const pt = (i: number, t: number) => { const a = P[(i + 4) % 4], b = P[(i + 1) % 4]; return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t] as [number, number]; };
    const len = (i: number) => { const a = P[i], b = P[(i + 1) % 4]; return Math.hypot(b[0] - a[0], b[1] - a[1]); };
    for (let i = 0; i < 4; i++) {
      const L = len(i), u0 = r / L, u1 = 1 - r / L;
      const A = pt(i, u0), B = pt(i, u1);
      if (i === 0) s.moveTo(...A); else s.lineTo(...A);
      s.lineTo(...B);
      const nx = (i + 1) % 4, Ln = len(nx), C = pt(nx, r / Ln);
      s.quadraticCurveTo(P[(i + 1) % 4][0], P[(i + 1) % 4][1], C[0], C[1]);
    }
    const rubber = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#EE8E9F"), roughness: 0.62, metalness: 0, sheen: 0.4, sheenColor: new THREE.Color("#F7C3CC"), sheenRoughness: 0.6, clearcoat: 0.05, envMapIntensity: 0.45 });
    const g = slabOf(s, EWD, 3, 8);
    g.translate(0, 0, EWD / 2);
    const blk = mesh(g, rubber);
    eTilt.add(blk);
  }

  // ══ THE CRUMBS ══
  const CR = crumbsOf(T);
  const crumbs = new THREE.Group(); crumbs.userData.obj = "crumbs"; W0.add(crumbs);
  const crM = [new THREE.MeshStandardMaterial({ color: new THREE.Color("#D98C99"), roughness: 0.8 }), new THREE.MeshStandardMaterial({ color: new THREE.Color("#B99096"), roughness: 0.85 })];
  const crumbMeshes = CR.map((c, i) => {
    const geo = new THREE.IcosahedronGeometry(1, 1);
    // a rolled crumb: a little irregular log
    const p = geo.attributes.position as THREE.BufferAttribute;
    for (let k = 0; k < p.count; k++) { const w = 0.82 + 0.3 * hash(i, k, 13); p.setXYZ(k, p.getX(k) * c.a * w, p.getY(k) * c.b * w, p.getZ(k) * c.c * w); }
    geo.computeVertexNormals(); geo.computeBoundingBox();
    const m = mesh(geo, crM[c.tone > 0.6 ? 1 : 0], true, true);
    const w = pageXZ(c.u, c.v);
    // seated on the page: its lowest vertex 0.2 above the page's highest point under it
    const r = Math.max(c.a, c.c) + 0.5;
    const top = pageHi(c.u - r, c.u + r, c.v - r, c.v + r, 6);
    m.rotation.y = c.yaw;
    m.updateMatrix();
    const bb = geo.boundingBox!.clone().applyMatrix4(new THREE.Matrix4().makeRotationY(c.yaw));
    m.position.set(w.x, top - bb.min.y + 0.2, w.z);
    m.visible = false;
    crumbs.add(m);
    return m;
  });

  root.add(makeFloor({ y: TG.floor, x0: -600, x1: 1700, z0: -900, z1: 800, reflect: 0, shadow: 0.42, fadeC: [540, -40], fadeR: [900, 640] }));

  // ── the print, composed per frame from the fixed layer, the erasable layer through the mask, and the live ink ──
  let lastKey = "";
  const paintPage = (f: number) => {
    const fill = (k: number) => {
      const b = BARS[k], a = T.fillA + k * 5;
      const up = b.hit * COUNTE(cl((f - a) / (T.fillB - T.fillA)));
      const fz = Math.min(f, T.freeze);
      const down = cl((fz - T.fall - k * 2) / (T.fallEnd - T.fall));
      // a falter: it slips back unevenly (a stutter), not a smooth slide
      const slip = down + 0.05 * Math.sin(down * Math.PI * 3) * (1 - down);
      return up - (b.hit - b.fall) * cl(slip);
    };
    const fz = Math.min(f, T.freeze);
    const shr = cl((fz - T.fall) / (T.fallEnd - T.fall));
    const back = settleE((f - T.pay) / 22);
    const payFill = (1 - 0.62 * shr) + (0.62 * shr) * back, payGrey = shr * (1 - back);
    const rev = (a: number, n: number) => cl((f - a) / n);
    const fills = [0, 1, 2].map(fill);
    const lines = [rev(T.l1, 8), rev(T.l2a, 6), rev(T.l2b, 9), rev(T.l3a, 4), rev(T.l3b, 9)];
    const key = [...fills, payFill, payGrey, ...lines].map((x) => x.toFixed(3)).join(",") + "|" + (f >= T.in1 && f < T.bEnd + 1 ? Math.round(Math.min(f, T.bEnd) * 3) : f < T.in1 ? 0 : -1) + "|" + (fontsReady() && imagesReady() ? 1 : 0);
    if (key === lastKey) return;
    lastKey = key;
    // the erasable print: the heading, the bars and their marks
    eg.setTransform(S, 0, 0, S, 0, 0);
    eg.clearRect(0, 0, PW, PH);
    eg.globalCompositeOperation = "source-over";
    eg.fillStyle = INK; eg.strokeStyle = INK; eg.textAlign = "left"; eg.textBaseline = "alphabetic";
    track(eg, 3); font(eg, 800, HEAD.size); eg.fillText("TARGETS", HEAD.u, HEAD.base); track(eg, 0);
    eg.fillRect(HEAD.u, HEAD.base + 9, 210, 1.3);
    BARS.forEach((b, k) => {
      const y0 = b.v - TRACK.h / 2, w = TRACK.u1 - TRACK.u0;
      // the row's name (greeked: not for reading) and its track
      typeLines(eg, TRACK.u0, b.v - 18, 70 + 14 * k, 1, 10, 4, 0.3, k + 2);
      eg.fillStyle = BLUE; eg.fillRect(TRACK.u0 + 1, y0 + 1, Math.max(0, w * fills[k] - 2), TRACK.h - 2);
      eg.fillStyle = INK; eg.lineWidth = 0.9; eg.strokeRect(TRACK.u0, y0, w, TRACK.h);
      // the target mark: a dashed rule through the track and its pointer
      const mx = TRACK.u0 + w * b.mark;
      eg.setLineDash([2.4, 1.8]); eg.lineWidth = 1.3; eg.beginPath(); eg.moveTo(mx, y0 - 6); eg.lineTo(mx, y0 + TRACK.h + 5); eg.stroke(); eg.setLineDash([]);
      eg.beginPath(); eg.moveTo(mx - 4.5, y0 - 12); eg.lineTo(mx + 4.5, y0 - 12); eg.lineTo(mx, y0 - 6); eg.closePath(); eg.fill();
    });
    // the mask: what the eraser's face has passed over is rubbed away; a faint grey smear stays
    const m = maskAt(T, f);
    for (let i = 0; i < m.length; i++) { mimg.data[i * 4] = 0; mimg.data[i * 4 + 1] = 0; mimg.data[i * 4 + 2] = 0; mimg.data[i * 4 + 3] = Math.round(255 * Math.min(1, m[i] * 1.15)); }
    mg.putImageData(mimg, 0, 0);
    eg.globalCompositeOperation = "destination-out";
    eg.imageSmoothingEnabled = true;
    eg.drawImage(mk, 0, 0, PW, PH);
    eg.globalCompositeOperation = "source-over";
    // the page
    pg.setTransform(S, 0, 0, S, 0, 0);
    pg.globalAlpha = 1;
    pg.drawImage(basePrint(), 0, 0, PW, PH);
    smg.clearRect(0, 0, MW, MH); smg.globalCompositeOperation = "source-over"; smg.fillStyle = "#6E6860"; smg.fillRect(0, 0, MW, MH);
    smg.globalCompositeOperation = "destination-in"; smg.drawImage(mk, 0, 0); smg.globalCompositeOperation = "source-over";
    pg.globalAlpha = 0.07; pg.drawImage(sm, 0, 0, PW, PH); pg.globalAlpha = 1;
    pg.drawImage(er, 0, 0, PW, PH);
    // the payout bar: gold, shrinking and greying with the bars, back to full on "maximum"
    pg.fillStyle = mixHex(GOLD, GREY, payGrey);
    pg.fillRect(PAY.u0 + 1, PAY.v - PAY.h / 2 + 1, (PAY.u1 - PAY.u0 - 2) * payFill, PAY.h - 2);
    pg.fillStyle = INK; pg.lineWidth = 0.9; pg.strokeStyle = INK; pg.strokeRect(PAY.u0, PAY.v - PAY.h / 2, PAY.u1 - PAY.u0, PAY.h);
    // the amendment's formula, printed line by line into the rubbed-out area (the figure is the contract's maximum only)
    const line = (t: number, draw: () => void, y0: number, y1: number) => {
      if (t <= 0) return;
      pg.save(); pg.beginPath(); pg.rect(0, y0, 40 + 280 * t, y1 - y0); pg.clip(); pg.globalAlpha = Math.min(1, t * 2.5); draw(); pg.restore();
    };
    pg.fillStyle = INK; pg.textAlign = "left"; pg.textBaseline = "alphabetic";
    line(lines[0], () => { track(pg, 2); fitFont(pg, 800, 32, "THE REST =", 246); pg.fillText("THE REST =", 40, 158); track(pg, 0); }, 120, 166);
    line(lines[1], () => { track(pg, 2.4); fitFont(pg, 700, 15, "MAXIMUM", 246); pg.fillText("MAXIMUM", 41, 198); track(pg, 0); }, 182, 203);
    line(lines[2], () => { fitFont(pg, 800, 38, "$1,350,000,000", 248); pg.fillText("$1,350,000,000", 39, 241); }, 205, 250);
    line(lines[3], () => { fitFont(pg, 800, 30, "−", 40); pg.fillText("−", 40, 291); }, 266, 298);
    line(lines[4], () => { track(pg, 1.5); fitFont(pg, 800, 28, "ALREADY PAID", 220); pg.fillText("ALREADY PAID", 66, 291); track(pg, 0); }, 266, 298);
    pageTex.needsUpdate = true;
  };

  const placeEraser = (f: number) => {
    const e = eraserAt(T, f);
    eraser.visible = e.visible;
    if (!e.visible) return;
    const c = Math.cos(e.tilt), s = Math.sin(e.tilt);
    // tilted into its stroke about its long axis' middle; lifted so its lowest bottom corner rests on the page
    eTilt.rotation.z = e.tilt;
    const lowest = Math.min(EB0 * s, EB1 * s);   // the bottom corners' heights after the tilt
    void c;
    const b = footOf(e);
    const seat = pageHi(b.u0 - 4, b.u1 + 4, b.v0, b.v1, 14) + 0.25;
    const w = pageXZ(e.u, e.v);
    eraser.position.set(w.x, seat - lowest + e.h, w.z);
  };

  return {
    root,
    update: (p) => {
      turn.rotation.y = rad(p.yaw);
      stTex.paint();
      paintPage(p.f);
      const st = stickyAt(T, p.f);
      sticky.visible = st.visible;
      sticky.position.set(sp.x + st.du, SN_Y + st.h, sp.z);
      placeEraser(p.f);
      CR.forEach((c, i) => { crumbMeshes[i].visible = p.f >= c.at && p.f < 99999; });
    },
  };
};
/** the bars' count-up curve (tokens' COUNT, inlined: the prop keeps to three) */
const COUNTE = (t: number) => { const x = cl(t); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
