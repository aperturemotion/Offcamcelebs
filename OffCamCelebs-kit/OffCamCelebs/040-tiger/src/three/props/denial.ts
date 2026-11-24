// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE DENIAL IN 3-D (040) — "Then the head of Saudi golf told The New Yorker: I never offered him that money. Not even close."
// On the dark ground, on the plain table (a shadow catcher with a faint mirror), two real things:
//   · THE MAGAZINE: a weekly on glossy coated stock (a real one is 203 × 273 mm, perfect-bound, ~6 mm of pages), OPEN:
//     two page blocks hinged at the spine, each block's top a fine surface that dips into the gutter near the binding (the
//     pages bend down into the spine), its outer corners lifting a little (glossy pages curl), and its sides a band of page
//     edges (fine stacked lines with faint print colour bleeding at the margins). The left page opens the piece in plain type
//     THE NEW YORKER, 2022 (no logo, no masthead lettering: the film's own face) over an original painted illustration; the
//     right page carries the pull-quote, big, in the quote face, attributed in type: MAJED AL SOROUR, GOLF SAUDI CEO.
//     It is tossed in from the left half open, touches down, slides and brakes, and its left half (still held up off the
//     table by the toss) falls flat under gravity on its hinge and lies open.
//   · THE CHEQUE: a presentation cheque on foam board (the real thing is ~760 × 380 mm, 5 mm board; the white foam core shows
//     at its edges), its laminated print with a deep green printed border and a fine guilloche band, a bank-cheque layout:
//     No. 0001, DATE, PAY TO THE ORDER OF and a BLANK payee line, the amount $800,000,000 large in its box, EIGHT HUNDRED
//     MILLION … DOLLARS, MEMO LIV GOLF, and an EMPTY signature line; a little wear at its corners. It slides in beside the
//     magazine on "that money", and on "Not even close" slides back out of reach, off the right edge.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, type Model } from "../stage";
import { M, rbox, rad, fitFont, font, track, hash, paper, typeLines, fillBoldItalic } from "../kit029";
import { GLIDE, clamp01 } from "../../r45/tokens";
import { QUOTES } from "../../audit/record";

export const DEN_FLOOR = 1300;
/** the magazine: one page's size (W across from the spine, D deep), the page block's thickness, the gutter's run */
export const MAG = { W: 420, D: 560, BT: 6, RG: 46 } as const;
/** where the magazine rests: its spine's middle (x, z) on the table, its turn */
export const MAG_REST = { x: 456, z: -370, yaw: -2 } as const;
/** the cheque: foam board w × d, its thickness; where it rests */
export const CHQ = { w: 820, d: 410, t: 6, x: 494, z: 130, yaw: 1.5 } as const;
/** the cheque's print is laid out on an 860 × 430 sheet and scaled to the board */
const CK = CHQ.w / 860;

export type DenialTiming = {
  /** the toss: from beyond the left edge to rest (touchdown at 60% of the run) */
  mag: readonly [number, number];
  /** the cheque's slide in from the right, and its slide back out of reach */
  chq: readonly [number, number]; push: readonly [number, number];
};
const ss = (a: number, b: number, x: number) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

// ══ THE MAGAZINE'S MOTION ══
const TOUCH = 0.6;
export const touchAt = (T: DenialTiming) => Math.round(T.mag[0] + TOUCH * (T.mag[1] - T.mag[0]));
/** the left half falling flat on its hinge: α'' = −k cos α (gravity on a plate hinged at its edge), from the toss's angle at
 *  rest, k solved so it lands FALL_N frames after the touchdown; a small bounce, then still */
const ALPHA0 = rad(26), FALL_N = 7;
const simLeaf = (k: number, n = 40) => {
  let a = ALPHA0, w = 0, hit = -1;
  const out = [a];
  for (let f = 1; f <= n; f++) {
    for (let s = 0; s < 8; s++) {
      const dt = 1 / 8;
      w += -k * Math.cos(a) * dt;
      if (hit >= 0) w *= 1 - 0.1 * dt;
      a += w * dt;
      if (a <= 0) { a = 0; if (hit < 0) hit = f - 1 + (s + 1) / 8; w = Math.abs(w) < 0.004 ? 0 : -w * 0.16; }
    }
    out.push(a);
  }
  return { out, hit };
};
const LEAF = (() => {
  let lo = 0.001, hi = 0.2;
  for (let i = 0; i < 50; i++) { const m = (lo + hi) / 2; if (simLeaf(m).hit > FALL_N) lo = m; else hi = m; }
  return simLeaf((lo + hi) / 2).out;
})();
/** frames after the touchdown when the leaf first lies flat, and when it is still */
export const LEAF_DOWN = LEAF.findIndex((a) => a === 0);
export const LEAF_STILL = LEAF.findIndex((a, i) => LEAF.slice(i).every((b) => b === 0));
if (LEAF_DOWN < 0 || LEAF_STILL < 0) throw new Error("denial: the magazine's left half never lies flat");

export type MagPose = { x: number; z: number; yaw: number; h: number; alpha: number; visible: boolean };
export const poseMag = (T: DenialTiming, f: number): MagPose => {
  const [a, b] = T.mag, u = clamp01((f - a) / (b - a));
  const td = touchAt(T);
  // airborne: falling from 46 px with gravity's square law until the touchdown, then sliding on the table, braking
  const air = u < TOUCH ? 46 * (1 - (u / TOUCH) ** 2) : 0;
  const g = GLIDE(u);
  // the half held up by the toss wavers a little in the air, then falls on its own from the touchdown
  const alpha = f < td ? ALPHA0 + rad(2.2) * Math.sin(f * 0.7) * (1 - u / TOUCH) : LEAF[Math.min(LEAF.length - 1, f - td)];
  return { x: MAG_REST.x - 1180 * (1 - g), z: MAG_REST.z + 36 * (1 - g), yaw: MAG_REST.yaw + 15 * (1 - g), h: air, alpha, visible: f > a - 1 };
};
/** a point of the magazine (side +1 the right page, −1 the left; s from the spine, v from the far edge, hl its height in the
 *  half's own frame) on the table, at a pose */
export const magPt = (p: { x: number; z: number; yaw: number; h: number; alpha: number }, side: 1 | -1, s: number, v: number, hl: number = MAG.BT) => {
  let lx = s, ly = hl;
  if (side < 0) { const c = Math.cos(p.alpha), sn = Math.sin(p.alpha); lx = -s * c + hl * sn; ly = s * sn + hl * c; }
  const lz = v - MAG.D / 2, y = rad(p.yaw), c = Math.cos(y), sn = Math.sin(y);
  return { x: p.x + lx * c + lz * sn, h: p.h + ly, z: p.z - lx * sn + lz * c };
};
/** the magazine's outline corners (both halves' tops), for the caption-band check */
export const magCorners = (p: MagPose) => {
  const out: { x: number; h: number; z: number }[] = [];
  for (const side of [1, -1] as const) for (const s of [0, MAG.W]) for (const v of [0, MAG.D]) out.push(magPt(p, side, s, v, MAG.BT + 7));
  return out;
};

// ══ THE CHEQUE'S MOTION ══
export type ChqPose = { x: number; z: number; yaw: number; h: number; visible: boolean };
export const PUSH_DIST = 1300;
export const poseChq = (T: DenialTiming, f: number): ChqPose => {
  const [a, b] = T.chq;
  if (f < T.push[0]) {
    const u = clamp01((f - a) / (b - a)), g = GLIDE(u);
    // in from beyond the right edge on its own air, touching down at 80% of the run and braking to rest
    return { x: CHQ.x + 1180 * (1 - g), z: CHQ.z + 26 * (1 - g), h: 20 * (1 - ss(0, 0.8, u)), yaw: CHQ.yaw - 10 * (1 - g), visible: f > a - 1 };
  }
  // pushed: a sudden start, then friction (constant braking) as it slides back out of reach, off the right edge
  const [p0, p1] = T.push, u = clamp01((f - p0) / (p1 - p0)), d = 1 - (1 - u) ** 2;
  return { x: CHQ.x + PUSH_DIST * d, z: CHQ.z + 14 * d, h: 0, yaw: CHQ.yaw + 7 * d, visible: f < p1 };
};
/** a point of the cheque's face (u, v in its print px from its top-left; the top is the far side), at a pose */
export const chqPt = (p: { x: number; z: number; yaw: number; h: number }, u: number, v: number) => {
  const lx = u - CHQ.w / 2, lz = v - CHQ.d / 2, a = rad(p.yaw), c = Math.cos(a), sn = Math.sin(a);
  return { x: p.x + lx * c + lz * sn, h: p.h + CHQ.t + 0.4, z: p.z - lx * sn + lz * c };
};
export const chqCorners = (p: ChqPose) => [[0, 0], [CHQ.w, 0], [CHQ.w, CHQ.d], [0, CHQ.d]].map(([u, v]) => chqPt(p, u, v));

/** where the readable print sits (print px boxes x0, y0, x1, y1): the left page's head, the right page's quote and its
 *  attribution, the cheque's payee, amount, words and memo */
export const PRINT = {
  head: [34, 34, 370, 122] as const,
  quote: [40, 176, 384, 420] as const,
  chq: [44 * CK, 70 * CK, 826 * CK, 392 * CK] as const,
};

// ══ SURFACES ══
let fibreC: HTMLCanvasElement | null = null;
const fibre = (w: number, h: number) => {
  if (!fibreC) {
    fibreC = document.createElement("canvas"); fibreC.width = fibreC.height = 256;
    const g = fibreC.getContext("2d")!;
    g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 5200; i++) {
      const v = 100 + Math.round(60 * hash(i, 61, 3));
      g.strokeStyle = `rgba(${v},${v},${v},0.5)`; g.lineWidth = 0.5 + hash(i, 62, 3) * 0.8;
      const x = hash(i, 63, 3) * 256, y = hash(i, 64, 3) * 256, a = hash(i, 65, 3) * Math.PI, l = 2 + 7 * hash(i, 66, 3);
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
    }
  }
  const t = new THREE.CanvasTexture(fibreC);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(w / 128, h / 128);
  return t;
};
/** coated magazine stock: smooth, a clear gloss on the ink, the faintest tooth */
const glossy = (tex: THREE.Texture, w: number, h: number) => new THREE.MeshPhysicalMaterial({
  map: tex, roughness: 0.36, metalness: 0, clearcoat: 0.5, clearcoatRoughness: 0.22, envMapIntensity: 0.5,
  bumpMap: fibre(w, h), bumpScale: 0.06, side: THREE.DoubleSide });
/** the page block's sides: a hundred page edges (fine stacked lines), the print's colours bleeding faintly at the margins */
const pageEdgeTex = () => paintTex("denial-pageedge", 256, 64, (g) => {
  g.fillStyle = "#EEEBE4"; g.fillRect(0, 0, 256, 64);
  for (let y = 0; y < 64; y += 0.9) {
    const k = hash(y * 10, 3, 9);
    g.fillStyle = k > 0.82 ? `rgba(${hash(y, 4, 9) > 0.5 ? "170,60,50" : "50,90,140"},0.16)` : `rgba(${k > 0.5 ? "120,110,96" : "255,255,250"},${0.18 + 0.22 * hash(y, 5, 9)})`;
    g.fillRect(0, y, 256, 0.45);
  }
  for (let i = 0; i < 300; i++) { g.fillStyle = `rgba(90,80,70,${0.05 + 0.08 * hash(i, 6, 9)})`; g.fillRect(hash(i, 7, 9) * 256, hash(i, 8, 9) * 64, 2 + 10 * hash(i, 9, 9), 0.4); }
}, 2);
/** the cheque's foam core at its edges: white polystyrene, a fine cell texture, the two paper liners as thin lines */
const foamTex = () => paintTex("denial-foam", 128, 32, (g) => {
  g.fillStyle = "#F1EFE9"; g.fillRect(0, 0, 128, 32);
  for (let i = 0; i < 900; i++) { const v = 200 + Math.round(55 * hash(i, 11, 4)); g.fillStyle = `rgba(${v},${v},${v - 6},0.5)`; g.beginPath(); g.arc(hash(i, 12, 4) * 128, hash(i, 13, 4) * 32, 0.4 + 0.7 * hash(i, 14, 4), 0, Math.PI * 2); g.fill(); }
  g.fillStyle = "rgba(170,165,150,0.6)"; g.fillRect(0, 0, 128, 2.2); g.fillRect(0, 29.8, 128, 2.2);
}, 3);

// ══ PRINT ══
const INK = "#1E1A17";
const grain = (g: CanvasRenderingContext2D, w: number, h: number, n: number, seed: number) => {
  for (let i = 0; i < n; i++) {
    g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? "120,110,95" : "255,255,250"},${0.02 + 0.04 * hash(i, 2, seed)})`;
    g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 0.4 + hash(i, 5, seed) * 1.6, 0.25);
  }
};
/** the gutter: the page darkens as it bends down into the binding, with a soft highlight where it turns back up */
const gutter = (g: CanvasRenderingContext2D, W: number, H: number, spineAtLeft: boolean) => {
  const x0 = spineAtLeft ? 0 : W, dir = spineAtLeft ? 1 : -1;
  const gr = g.createLinearGradient(x0, 0, x0 + dir * 70, 0);
  gr.addColorStop(0, "rgba(30,22,16,0.34)"); gr.addColorStop(0.25, "rgba(30,22,16,0.12)"); gr.addColorStop(0.55, "rgba(255,255,255,0.10)"); gr.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = gr; g.fillRect(Math.min(x0, x0 + dir * 70), 0, 70, H);
};
/** greeked body columns: lines of small text in a magazine's narrow measure */
const columns = (g: CanvasRenderingContext2D, x0: number, x1: number, y0: number, y1: number, n: number, seed: number) => {
  const gap = 12, cw = (x1 - x0 - gap * (n - 1)) / n;
  for (let c = 0; c < n; c++) typeLines(g, x0 + c * (cw + gap), y0, cw, Math.floor((y1 - y0) / 9.6), 9.6, 3.1, 0.3, seed + c * 3);
};
/** the left page: the piece's opening, THE NEW YORKER, 2022 in plain type, an original painted illustration, columns */
const leftTex = () => paintTex("denial-left", MAG.W, MAG.D, (g) => {
  const W = MAG.W, H = MAG.D, L = 34, R = W - 50, CX = (L + R) / 2;
  g.fillStyle = "#F9F7F2"; g.fillRect(0, 0, W, H);
  grain(g, W, H, 2200, 21);
  g.fillStyle = INK; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 3.2); fitFont(g, 800, 40, "THE NEW YORKER", R - L); g.fillText("THE NEW YORKER", CX + 1.6, 78); track(g, 0);
  g.fillRect(L, 90, R - L, 1.6); g.fillRect(L, 94, R - L, 0.6);
  track(g, 7); font(g, 700, 17); g.fillText("2022", CX + 3.5, 118); track(g, 0);
  // the illustration: a painted green under a dusk sky, a lone flag far off (original, painted with soft strokes)
  const ix = L, iy = 134, iw = R - L, ih = 196;
  g.save(); g.beginPath(); g.rect(ix, iy, iw, ih); g.clip();
  const sky = g.createLinearGradient(0, iy, 0, iy + ih * 0.62);
  sky.addColorStop(0, "#2D3C55"); sky.addColorStop(0.55, "#B9774E"); sky.addColorStop(1, "#E9B676");
  g.fillStyle = sky; g.fillRect(ix, iy, iw, ih);
  for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(255,${200 + Math.round(40 * hash(i, 1, 5))},170,${0.05 + 0.06 * hash(i, 2, 5)})`; g.fillRect(ix + hash(i, 3, 5) * iw, iy + hash(i, 4, 5) * ih * 0.55, 20 + 50 * hash(i, 5, 5), 1.5 + 2 * hash(i, 6, 5)); }
  g.fillStyle = "#3E5A35"; g.beginPath(); g.moveTo(ix, iy + ih * 0.66);
  for (let x = 0; x <= iw; x += 6) g.lineTo(ix + x, iy + ih * 0.62 + 10 * Math.sin(x * 0.018 + 0.6) + 4 * Math.sin(x * 0.06));
  g.lineTo(ix + iw, iy + ih); g.lineTo(ix, iy + ih); g.fill();
  const lawn = g.createLinearGradient(0, iy + ih * 0.6, 0, iy + ih);
  lawn.addColorStop(0, "rgba(120,150,80,0.5)"); lawn.addColorStop(1, "rgba(20,40,20,0.6)");
  g.fillStyle = lawn; g.fillRect(ix, iy + ih * 0.6, iw, ih * 0.4);
  for (let i = 0; i < 400; i++) { g.strokeStyle = `rgba(${hash(i, 7, 5) > 0.5 ? "150,180,100" : "30,50,28"},0.18)`; g.lineWidth = 0.8; const x = ix + hash(i, 8, 5) * iw, y = iy + ih * (0.68 + 0.32 * hash(i, 9, 5)); g.beginPath(); g.moveTo(x, y); g.lineTo(x + 3 * (hash(i, 10, 5) - 0.5), y - 3 - 4 * hash(i, 11, 5)); g.stroke(); }
  g.strokeStyle = "#EDE6D8"; g.lineWidth = 1.3; g.beginPath(); g.moveTo(ix + iw * 0.66, iy + ih * 0.66); g.lineTo(ix + iw * 0.66, iy + ih * 0.44); g.stroke();
  g.fillStyle = "#C2402F"; g.beginPath(); g.moveTo(ix + iw * 0.66, iy + ih * 0.44); g.lineTo(ix + iw * 0.66 + 15, iy + ih * 0.465); g.lineTo(ix + iw * 0.66, iy + ih * 0.49); g.fill();
  g.restore();
  // the caption under it (greeked), the headline's deck and the body
  typeLines(g, L, 342, 200, 1, 8, 2.6, 0.28, 2);
  typeLines(g, L, 364, R - L, 2, 15, 6.5, 0.6, 4);
  columns(g, L, R, 402, H - 34, 2, 5);
  g.fillStyle = "rgba(30,26,23,0.55)"; font(g, 600, 8); g.textAlign = "left"; track(g, 1); g.fillText("THE NEW YORKER, 2022", L, H - 16); track(g, 0);
  gutter(g, W, H, false);
}, 3);
/** the right page: the pull-quote, big, in the quote face, and its attribution in type, inside the article's columns */
const quoteTex = () => paintTex("denial-quote", MAG.W, MAG.D, (g) => {
  const W = MAG.W, H = MAG.D, L = 50, R = W - 34;
  g.fillStyle = "#F9F7F2"; g.fillRect(0, 0, W, H);
  grain(g, W, H, 2200, 22);
  columns(g, L, R, 38, 150, 2, 8);
  g.fillStyle = INK; g.fillRect(L, 168, R - L, 2);
  // the quote: the record's exact words, wrapped and set as large as three lines allow
  const words = QUOTES.saudi.words.split(" ");
  let size = 52, lines: string[] = [];
  for (; size > 20; size -= 1) {
    font(g, 300, size, true);
    lines = []; let cur = "";
    for (const w of words) { const t = cur ? cur + " " + w : w; if (g.measureText(t).width * 1.03 > R - L) { lines.push(cur); cur = w; } else cur = t; }
    lines.push(cur);
    if (lines.length <= 3) break;
  }
  g.textAlign = "left"; g.textBaseline = "alphabetic"; g.fillStyle = INK;
  const LH = size * 1.14;
  lines.forEach((l, i) => fillBoldItalic(g, l, L - (i === 0 ? size * 0.12 : 0), 176 + size * 0.98 + i * LH, size));
  const yA = 176 + size * 0.98 + (lines.length - 1) * LH + 40;
  track(g, 1); fitFont(g, 800, 17, QUOTES.saudi.who, R - L); g.fillText(QUOTES.saudi.who, L, yA);
  track(g, 1.6); fitFont(g, 600, 12, QUOTES.saudi.to, R - L); g.fillStyle = "rgba(30,26,23,0.75)"; g.fillText(QUOTES.saudi.to, L, yA + 20); track(g, 0);
  g.fillStyle = INK; g.fillRect(L, yA + 36, R - L, 0.9);
  columns(g, L, R, yA + 56, H - 34, 2, 11);
  g.fillStyle = "rgba(30,26,23,0.55)"; font(g, 600, 8); g.textAlign = "right"; g.fillText("57", R, H - 16);
  gutter(g, W, H, true);
}, 3);

/** the presentation cheque's laminated face */
const chequeTex = () => paintTex("denial-cheque", CHQ.w, CHQ.d, (g) => {
  g.scale(CK, CHQ.d / 430);
  const W = 860, H = 430, GREEN = "#2C5A46";
  const bg = g.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#F8F6EF"); bg.addColorStop(0.6, "#F2F1E8"); bg.addColorStop(1, "#F7F5EC");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  // the security tint: a fine wave pantograph, very pale green
  g.strokeStyle = "rgba(60,110,85,0.10)"; g.lineWidth = 0.5;
  for (let k = 0; k < Math.ceil(H / 4); k++) { g.beginPath(); for (let x = 0; x <= W; x += 4) { const y = k * 4 + 2.2 * Math.sin(x * 0.03 + k * 0.5) + Math.sin(x * 0.11 - k); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); } g.stroke(); }
  grain(g, W, H, 2400, 31);
  // the printed border: a deep green band, a guilloche ribbon inside it, a fine inner rule
  const B0 = 12, B1 = 26, B2 = 40;
  g.fillStyle = GREEN; g.fillRect(B0, B0, W - 2 * B0, B1 - B0); g.fillRect(B0, H - B1, W - 2 * B0, B1 - B0); g.fillRect(B0, B1, B1 - B0, H - 2 * B1); g.fillRect(W - B1, B1, B1 - B0, H - 2 * B1);
  g.strokeStyle = "rgba(44,90,70,0.55)"; g.lineWidth = 0.6;
  const ribbon = (len: number, x0: number, y0: number, ang: number) => {
    g.save(); g.translate(x0, y0); g.rotate(ang);
    for (const ph of [0, Math.PI / 2, Math.PI, 1.5 * Math.PI]) { g.beginPath(); for (let x = 0; x <= len; x += 1.5) { const y = 5 * Math.sin(x * 0.16 + ph); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); } g.stroke(); }
    g.restore();
  };
  const mid = (B1 + B2) / 2 - 1;
  ribbon(W - 2 * mid, mid, mid, 0); ribbon(W - 2 * mid, mid, H - mid, 0); ribbon(H - 2 * mid, mid, mid, Math.PI / 2); ribbon(H - 2 * mid, W - mid, mid, Math.PI / 2);
  g.strokeStyle = GREEN; g.lineWidth = 1.4; g.strokeRect(B2, B2, W - 2 * B2, H - 2 * B2);
  // the top row: the drawer's block (greeked), the number, the date line
  typeLines(g, 62, 62, 180, 2, 12, 4, 0.32, 3);
  g.fillStyle = INK; g.textAlign = "right"; g.textBaseline = "alphabetic";
  font(g, 700, 19); g.fillText("No. 0001", W - 62, 76);
  g.textAlign = "left"; font(g, 700, 13); g.fillText("DATE", W - 300, 112);
  g.fillRect(W - 256, 114, 194, 1.1);
  // the payee: the label, and its line left BLANK
  track(g, 0.6); font(g, 800, 17); g.fillText("PAY TO THE", 62, 160); g.fillText("ORDER OF", 62, 180); track(g, 0);
  g.fillRect(170, 182, 300, 1.4);
  // the amount, big, in its ruled box
  const bx = 498, by = 132, bw = 300, bh = 84;
  g.fillStyle = "rgba(255,255,252,0.85)"; g.fillRect(bx, by, bw, bh);
  g.strokeStyle = INK; g.lineWidth = 1.8; g.strokeRect(bx, by, bw, bh);
  g.fillStyle = INK; g.textAlign = "center";
  fitFont(g, 800, 58, "$800,000,000", bw - 22); g.fillText("$800,000,000", bx + bw / 2, by + bh - 20);
  // the written amount on its line, DOLLARS printed at its end
  g.textAlign = "left"; track(g, 0.8); fitFont(g, 700, 25, "EIGHT HUNDRED MILLION", 470); g.fillText("EIGHT HUNDRED MILLION", 62, 268); track(g, 0);
  g.fillRect(62, 276, 640, 1.3);
  font(g, 800, 17); g.fillText("DOLLARS", 712, 276);
  // the memo, and the signature line left EMPTY
  font(g, 700, 14); g.fillText("MEMO", 62, 362);
  track(g, 1.2); fitFont(g, 800, 38, "LIV GOLF", 260); g.fillText("LIV GOLF", 122, 362); track(g, 0);
  g.fillRect(118, 370, 300, 1.4);
  g.fillRect(W - 342, 370, 280, 1.4);
  g.fillStyle = "rgba(30,26,23,0.6)"; track(g, 1); font(g, 600, 10); g.fillText("AUTHORIZED SIGNATURE", W - 342, 386); track(g, 0);
  // wear: the corners scuffed (the board was handled), a little grime along the edges
  for (const [cx, cy] of [[0, 0], [W, 0], [W, H], [0, H]]) {
    for (let i = 0; i < 70; i++) {
      const r = 26 * hash(i, cx + 1, cy + 2) ** 1.6, a = hash(i, cx + 3, cy + 4) * Math.PI * 2;
      g.fillStyle = `rgba(${hash(i, 5, cx) > 0.4 ? "255,255,252" : "90,80,66"},${0.12 + 0.3 * hash(i, 6, cy)})`;
      g.fillRect(cx + Math.cos(a) * r - 1, cy + Math.sin(a) * r - 0.5, 1 + 3 * hash(i, 7, cx), 0.8);
    }
  }
  const edge = g.createLinearGradient(0, 0, 0, H);
  edge.addColorStop(0, "rgba(80,70,55,0.07)"); edge.addColorStop(0.05, "rgba(80,70,55,0)"); edge.addColorStop(0.95, "rgba(80,70,55,0)"); edge.addColorStop(1, "rgba(80,70,55,0.08)");
  g.fillStyle = edge; g.fillRect(0, 0, W, H);
}, 2.5);

// ══ THE PAGE BLOCK: one half of the open magazine, from its spine outward (side +1 right, −1 left) ══
/** the block's top at (s, v): full height out on the page, dipping into the gutter at the spine, the very edge rounded */
const topH = (s: number, v: number) => {
  const { W, D, BT, RG } = MAG;
  let h = BT - BT * 0.6 * Math.max(0, 1 - s / RG) ** 2;
  const e = Math.min(W - s, v, D - v);
  if (e < 3) h -= 0.9 * ((3 - e) / 3) ** 2;
  return h;
};
type Corner = { s: number; v: number; r: number; lift: number };
const curlOf = (cs: Corner[], wave: number, seed: number) => (s: number, v: number) => {
  let z = 0;
  for (const c of cs) { const d = Math.hypot(s - c.s, v - c.v); if (d < c.r) z += c.lift * ((c.r - d) / c.r) ** 2; }
  return z + wave * Math.sin((s / MAG.W) * 4.3 + seed) * Math.cos((v / MAG.D) * 3.1 + seed * 1.7) * Math.min(1, s / MAG.RG);
};
const half = (side: 1 | -1, top: THREE.Material, edge: THREE.Material, bottom: THREE.Material, curl: (s: number, v: number) => number) => {
  const { W, D } = MAG, NS = 70, NV = 44;
  const g = new THREE.Group();
  const H = (s: number, v: number) => topH(s, v) + curl(s, v);
  const sOf = (t: number) => W * t ** 1.25;
  // the top: a fine grid, denser toward the spine where it bends
  {
    const pos: number[] = [], uv: number[] = [], idx: number[] = [];
    for (let j = 0; j <= NV; j++) for (let i = 0; i <= NS; i++) {
      const s = sOf(i / NS), v = (j / NV) * D;
      pos.push(side * s, H(s, v), v - D / 2);
      uv.push(side > 0 ? s / W : 1 - s / W, 1 - v / D);
    }
    for (let j = 0; j < NV; j++) for (let i = 0; i < NS; i++) { const a = j * (NS + 1) + i, b = a + 1, c = a + NS + 1, d = c + 1; idx.push(a, c, b, b, c, d); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx); geo.computeVertexNormals();
    g.add(mesh(geo, top));
  }
  // the four sides: bands of page edges from the table up to the top
  const band = (pts: [number, number][]) => {
    const pos: number[] = [], uv: number[] = [], idx: number[] = [];
    let run = 0;
    pts.forEach(([s, v], k) => {
      if (k) run += Math.hypot(s - pts[k - 1][0], v - pts[k - 1][1]);
      const h = H(s, v);
      pos.push(side * s, 0, v - D / 2, side * s, h, v - D / 2);
      uv.push(run / 128, 0, run / 128, h / MAG.BT);
    });
    for (let k = 0; k < pts.length - 1; k++) { const a = 2 * k; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx); geo.computeVertexNormals();
    g.add(mesh(geo, edge));
  };
  const n = 60;
  band(Array.from({ length: n + 1 }, (_, i) => [W, (i / n) * D] as [number, number]));
  band(Array.from({ length: n + 1 }, (_, i) => [sOf(i / n), 0] as [number, number]));
  band(Array.from({ length: n + 1 }, (_, i) => [sOf(i / n), D] as [number, number]));
  band(Array.from({ length: n + 1 }, (_, i) => [0, (i / n) * D] as [number, number]));
  // the underside: the back cover, flat on the table
  const b = mesh(new THREE.PlaneGeometry(W, D), bottom);
  b.rotation.x = Math.PI / 2; b.position.set((side * W) / 2, 0.02, 0);
  g.add(b);
  return g;
};

export type DenialP = { f: number };

export const denialModel = (T: DenialTiming) => (): Model<DenialP> => {
  const root = new THREE.Group();
  const FY = -DEN_FLOOR;

  // ══ THE MAGAZINE ══
  const mag = new THREE.Group(); mag.userData.obj = "magazine"; root.add(mag);
  const edgeM = new THREE.MeshStandardMaterial({ map: (() => { const t = pageEdgeTex(); t.wrapS = THREE.RepeatWrapping; return t; })(), roughness: 0.8, metalness: 0, envMapIntensity: 0.3, side: THREE.DoubleSide });
  const backM = new THREE.MeshStandardMaterial({ color: new THREE.Color("#D9D4C8"), roughness: 0.5, side: THREE.DoubleSide });
  mag.add(half(1, glossy(quoteTex(), MAG.W, MAG.D), edgeM, backM,
    curlOf([{ s: MAG.W, v: 0, r: 120, lift: 5.5 }, { s: MAG.W, v: MAG.D, r: 80, lift: 2.2 }], 0.5, 1.3)));
  const leaf = new THREE.Group(); mag.add(leaf);
  leaf.add(half(-1, glossy(leftTex(), MAG.W, MAG.D), edgeM, backM,
    curlOf([{ s: MAG.W, v: 0, r: 100, lift: 3.2 }, { s: MAG.W, v: MAG.D, r: 130, lift: 6 }], 0.6, 2.9)));

  // ══ THE CHEQUE: the foam board, and its laminated print on top ══
  const chq = new THREE.Group(); chq.userData.obj = "cheque"; root.add(chq);
  {
    const ft = foamTex(); ft.wrapS = THREE.RepeatWrapping; ft.repeat.set(6, 1);
    const foam = new THREE.MeshStandardMaterial({ map: ft, roughness: 0.9, metalness: 0, envMapIntensity: 0.3 });
    const white = new THREE.MeshStandardMaterial({ color: new THREE.Color("#EFEDE6"), roughness: 0.85 });
    const core = rbox(CHQ.w, CHQ.t, CHQ.d, 1.6, { px: foam, nx: foam, top: white, bottom: white, front: foam, back: foam }, 2);
    core.position.set(0, CHQ.t / 2, CHQ.d / 2);
    chq.add(core);
    const face = new THREE.MeshPhysicalMaterial({ map: chequeTex(), roughness: 0.46, metalness: 0, clearcoat: 0.3, clearcoatRoughness: 0.35, envMapIntensity: 0.45,
      bumpMap: fibre(CHQ.w, CHQ.d), bumpScale: 0.08 });
    const skin = paper({ w: CHQ.w - 1.2, h: CHQ.d - 1.2, t: 0.25, face, back: white, edge: white, seg: 60, wave: 0.25, seed: 3 });
    skin.rotation.x = -Math.PI / 2; skin.position.y = CHQ.t + 0.28;
    chq.add(skin);
  }

  root.add(makeFloor({ y: DEN_FLOOR, x0: -900, x1: 2000, z0: -1000, z1: 1100, reflect: 0, shadow: 0.5, fadeC: [500, -120], fadeR: [1050, 820] }));

  return {
    root,
    update: (p) => {
      const m = poseMag(T, p.f);
      mag.visible = m.visible; mag.position.set(m.x, FY + m.h, m.z); mag.rotation.y = rad(m.yaw);
      leaf.rotation.z = -m.alpha;
      const c = poseChq(T, p.f);
      chq.visible = c.visible; chq.position.set(c.x, FY + c.h, c.z); chq.rotation.y = rad(c.yaw);
    },
  };
};
