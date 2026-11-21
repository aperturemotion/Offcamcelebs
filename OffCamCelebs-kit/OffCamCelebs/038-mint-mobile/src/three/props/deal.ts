// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE DEAL IN 3-D (038) — "In 2023, T-Mobile agreed to buy it. Up to $1.35 billion. On closing day, $420 million in cash
// plus $536 million in shares." On the dark ground, on a desk (the floor), three real things:
//   · THE MERGER AGREEMENT (the film's document visual for the deal): a bound agreement lying OPEN at its signature page, a
//     black board cover under two blocks of pages that curve down into the gutter (each page block's cut edges striped by its
//     sheets), the two top pages printed in Archivo at true sizes. Right page: T-Mobile's own wordmark as the letterhead,
//     MERGER AGREEMENT, MAR 9 2023, greeked clauses and a signature line that a black lacquer fountain pen signs (the ink is
//     drawn on as the nib moves). Left page: the price clause, "UP TO" heavy and underlined over "$1,350,000,000".
//   · THE CASH CASE: an aluminium attaché case (brushed shell, darker rim extrusions, rubber feet, two draw latches whose
//     levers flip down, a leather handle on its mounts, hinge barrels at the back), black velvet lining, twelve real
//     strapped $100 bundles (cash.ts) in two layers; a bank card tucked in the lid's lining reads $420,000,000 CASH.
//   · THE SHARE CERTIFICATES: a squared stack of engraved certificates (real sheets with thickness, the top one bowed with a
//     lifted corner): T-Mobile's wordmark, SHARES, $536,000,000 in a cartouche, an engraved border, the T mark in the vignette, a seal.
// Never a sum of the two closing figures. Units are layer px (y up from the desk, z toward the viewer).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, roundRect, paintTex, liveTex, rr, imageOf, type Model } from "../stage";
import { rbox, rad, col, fitFont, track, hash, wire, paper, M, typeLines } from "../kit029";
import { pile, NOTE, BUNDLE_H } from "../cash";

export const MAGENTA = "#E20074";
/** ★ P16: T-Mobile's own marks (assets/brand/SOURCES.txt), drawn into the print; plain type only until they have loaded */
const mark = (name: "wordmark" | "t" | "tile") => { const im = imageOf(`assets/brand/tmobile_${name}.png`); return im.complete && im.naturalWidth > 0 ? im : null; };
/** the wordmark (1946 × 400) fitted into w, centred at (cx, cy); falls back to the name in type */
const wordmark = (c: CanvasRenderingContext2D, cx: number, cy: number, w: number) => {
  const im = mark("wordmark"), h = (w * 400) / 1946;
  if (im) { c.drawImage(im, cx - w / 2, cy - h / 2, w, h); return h; }
  c.save(); c.fillStyle = MAGENTA; c.textAlign = "center"; c.textBaseline = "middle"; fitFont(c, 800, h, "T-Mobile", w); c.fillText("T-Mobile", cx, cy); c.restore();
  return h;
};
const INK = "#1C1A1E";

/** the place's layout (desk-local) */
export const DG = {
  floor: 1500, pivot: { x: 640, z: 0 },
  book: { x: 540, z: 0 },
  case: { x: 470, z: -10 },
  certs: { x: 1650, z: 40, yaw: -5 },
} as const;

// ══ THE AGREEMENT ══
export const BK = { W: 531, D: 686, T: 10, BOARD: 2.2 } as const;
/** the top page's height at s px from the gutter: the pages dip into the gutter and arch gently over the page */
export const pageTop = (s: number) => BK.BOARD + 0.6 + BK.T * (0.32 + 0.68 * (1 - Math.exp(-s / 42))) + 2.4 * Math.sin(Math.PI * Math.min(1, Math.max(0, s / BK.W)));
/** where print sits (page px from the page's top-left) */
export const RPRINT = { head: 64, title: 124, date: 168, sig: [70, 548, 316] as const } as const;
export const LPRINT = { clause: [40, 150, 330, 246] as const } as const;
/** page px on the right page → desk-local (the book at rest) */
export const onRight = (px: number, py: number) => ({ x: DG.book.x + px, y: pageTop(px) + 0.9, z: DG.book.z - BK.D / 2 + py });
/** page px on the left page → desk-local */
export const onLeft = (px: number, py: number) => ({ x: DG.book.x - (BK.W - px), y: pageTop(BK.W - px) + 0.25, z: DG.book.z - BK.D / 2 + py });

/** the signature: a cursive run of loops along the line, page px at t ∈ [0, 1] */
export const sigAt = (t: number) => {
  const [x0, y0, x1] = RPRINT.sig;
  const k = 2 * Math.PI * 6.5 * t;
  // two capitals (a tall first loop, a second at the surname), the rest small and uneven, a closing flourish
  const cap = 1 + 1.3 * Math.exp(-(((t - 0.06) / 0.07) ** 2)) + 0.9 * Math.exp(-(((t - 0.5) / 0.06) ** 2));
  return { x: x0 + (x1 - x0 - 30) * t - 11 * Math.sin(k) + 30 * Math.max(0, t - 0.86) / 0.14,
    y: y0 - 8 - 12 * cap * Math.cos(k) * (0.75 + 0.25 * Math.sin(11 * t)) + 4 * t + 6 * Math.max(0, t - 0.86) / 0.14 };
};

const PAGE_BG = "#F6F2E8";
const paintRight = () => paintTex("deal38-right-v4", BK.W, BK.D, (c) => {
  const W = BK.W;
  c.fillStyle = PAGE_BG; c.fillRect(0, 0, W, BK.D);
  for (let i = 0; i < 160; i++) { c.fillStyle = `rgba(120,100,70,${0.025 + 0.03 * hash(i, 5, 1)})`; c.fillRect(hash(i, 1, 1) * W, hash(i, 2, 1) * BK.D, 2 + 6 * hash(i, 3, 1), 0.7); }
  c.textBaseline = "alphabetic"; c.textAlign = "center";
  // the letterhead: T-Mobile's wordmark, and a magenta rule under it
  wordmark(c, W / 2, RPRINT.head - 4, 290);
  c.fillStyle = MAGENTA;
  c.fillRect(70, RPRINT.head + 34, W - 140, 2);
  // the title and the date
  c.fillStyle = INK;
  track(c, 4);
  const s2 = fitFont(c, 700, 22, "MERGER AGREEMENT", 320);
  c.fillText("MERGER AGREEMENT", W / 2, RPRINT.title + s2 * 0.36);
  track(c, 2);
  const s3 = fitFont(c, 700, 30, "MAR 9 2023", 220);
  c.fillText("MAR 9 2023", W / 2, RPRINT.date + s3 * 0.36);
  track(c, 0);
  // the closing clauses, set at a real 10 pt (greeked)
  typeLines(c, 60, 214, W - 120, 7, 13, 4.2, 0.32, 1);
  typeLines(c, 60, 318, W - 120, 6, 13, 4.2, 0.32, 4);
  typeLines(c, 60, 410, W - 160, 3, 13, 4.2, 0.32, 7);
  // the signature block: BY, the line, the name and title under it, the date line beside it
  const [sx0, sy, sx1] = RPRINT.sig;
  c.fillStyle = "rgba(28,26,30,0.5)"; rr(c, sx0 - 10, sy - 44, 26, 5, 2.5); c.fill();
  c.fillStyle = INK; c.fillRect(sx0 - 10, sy, sx1 - sx0 + 10, 1.4);
  c.fillStyle = "rgba(28,26,30,0.4)";
  for (const [x, y, w] of [[sx0 - 10, sy + 14, 120], [sx0 - 10, sy + 27, 90], [sx1 + 34, sy + 14, 80]] as const) { rr(c, x, y, w, 4.2, 2.1); c.fill(); }
  c.fillStyle = INK; c.fillRect(sx1 + 34, sy, 110, 1.4);
  // the folio
  c.fillStyle = "rgba(28,26,30,0.35)"; rr(c, W / 2 - 10, BK.D - 34, 20, 4.2, 2.1); c.fill();
}, 3);
const paintLeft = () => paintTex("deal38-left-v3", BK.W, BK.D, (c) => {
  const W = BK.W;
  c.fillStyle = PAGE_BG; c.fillRect(0, 0, W, BK.D);
  for (let i = 0; i < 160; i++) { c.fillStyle = `rgba(120,100,70,${0.025 + 0.03 * hash(i, 6, 1)})`; c.fillRect(hash(i, 1, 2) * W, hash(i, 2, 2) * BK.D, 2 + 6 * hash(i, 3, 2), 0.7); }
  // the running head and the section heading (greeked), a clause's first lines
  c.fillStyle = "rgba(28,26,30,0.35)"; rr(c, 40, 46, 150, 4.2, 2.1); c.fill();
  c.fillStyle = "rgba(28,26,30,0.6)"; rr(c, 40, 92, 96, 6, 3); c.fill();
  typeLines(c, 40, 114, W - 80, 2, 13, 4.2, 0.32, 2);
  // the price: UP TO, heavy and underlined, over the figure
  const [x0, y0, x1] = LPRINT.clause;
  c.fillStyle = INK; c.textAlign = "left"; c.textBaseline = "alphabetic";
  track(c, 2);
  const s1 = fitFont(c, 800, 46, "UP TO", (x1 - x0) * 0.5);
  c.fillText("UP TO", x0, y0 + s1 * 0.72);
  const uw = c.measureText("UP TO").width;
  c.fillRect(x0, y0 + s1 * 0.72 + 7, uw - 2, 4.5);
  track(c, 0);
  const s2 = fitFont(c, 800, 44, "$1,350,000,000", x1 - x0);
  c.fillText("$1,350,000,000", x0, y0 + s1 * 0.72 + 22 + s2 * 0.74);
  // the rest of the article
  typeLines(c, 40, 280, W - 80, 9, 13, 4.2, 0.32, 3);
  typeLines(c, 40, 410, W - 80, 8, 13, 4.2, 0.32, 5);
  typeLines(c, 40, 528, W - 80, 7, 13, 4.2, 0.32, 8);
  c.fillStyle = "rgba(28,26,30,0.35)"; rr(c, W / 2 - 10, BK.D - 34, 20, 4.2, 2.1); c.fill();
}, 3);
const paintEdges = () => paintTex("deal38-edges-v1", 64, 64, (c) => {
  c.fillStyle = "#EDE7DA"; c.fillRect(0, 0, 64, 64);
  for (let i = 0; i < 64; i += 2.4) { c.fillStyle = `rgba(110,95,70,${0.12 + 0.14 * hash(i, 1, 9)})`; c.fillRect(0, i, 64, 0.8); }
}, 4);

// ══ THE CASE ══
export const CS = { W: 540, D: 360, BH: 62, LH: 40, FEET: 3, R: 22, WALL: 10 } as const;   // inner 520 × 340: two bundles across, three rows (a strap loop stands 54 px off a note's centre)
export const LID_OPEN = 94;
const paintTag = () => paintTex("deal38-tag-v3", 400, 200, (c) => {
  c.fillStyle = "#F4EEDC"; c.fillRect(0, 0, 400, 200);
  // a bank's mustard band down the left, a ruled frame
  c.fillStyle = "#D9B44A"; c.fillRect(0, 0, 26, 200);
  c.strokeStyle = "rgba(40,30,20,0.55)"; c.lineWidth = 1.4; c.strokeRect(38, 12, 350, 176);
  c.fillStyle = INK; c.textAlign = "center"; c.textBaseline = "alphabetic";
  track(c, 1);
  const s1 = fitFont(c, 800, 62, "$420,000,000", 320);
  c.fillText("$420,000,000", 213, 98 + s1 * 0.36);
  track(c, 8);
  const s2 = fitFont(c, 700, 26, "CASH", 140);
  c.fillText("CASH", 217, 150 + s2 * 0.36);
  track(c, 0);
  c.fillStyle = "rgba(40,30,20,0.35)";
  rr(c, 290, 32, 80, 4, 2); c.fill();
  // the payer's mark, small, in the card's corner
  const tile = mark("tile");
  if (tile) c.drawImage(tile, 50, 22, 30, 30);
}, 3);

// ══ THE CERTIFICATES ══
export const CT = { W: 470, D: 313, T: 0.9, N: 9 } as const;
const paintCert = () => paintTex("deal38-cert-v3", CT.W, CT.D, (c) => {
  const W = CT.W, D = CT.D, E = "#8E1A55";
  c.fillStyle = "#F3EEDD"; c.fillRect(0, 0, W, D);
  // the engraved border: a band of fine guilloche waves between ruled frames
  c.strokeStyle = E; c.lineWidth = 1.6; c.strokeRect(10, 10, W - 20, D - 20);
  c.lineWidth = 0.8; c.strokeRect(26, 26, W - 52, D - 52);
  c.lineWidth = 0.45;
  for (let k = 0; k < 4; k++) {
    c.strokeStyle = `rgba(142,26,85,${0.55 - k * 0.08})`;
    const band = (pts: (t: number) => [number, number], n: number) => { c.beginPath(); for (let i = 0; i <= n; i++) { const [x, y] = pts(i / n); if (i) c.lineTo(x, y); else c.moveTo(x, y); } c.stroke(); };
    const a = 3.4 + k * 1.3, ph = k * 1.7;
    band((t) => [12 + t * (W - 24), 18 + a * Math.sin(t * 90 + ph)], 600);
    band((t) => [12 + t * (W - 24), D - 18 + a * Math.sin(t * 90 + ph)], 600);
    band((t) => [18 + a * Math.sin(t * 60 + ph), 12 + t * (D - 24)], 400);
    band((t) => [W - 18 + a * Math.sin(t * 60 + ph), 12 + t * (D - 24)], 400);
  }
  // the vignette: an engraved oval of rays and rings (no figure)
  const vx = 92, vy = 150;
  c.save(); c.beginPath(); c.ellipse(vx, vy, 44, 54, 0, 0, Math.PI * 2); c.clip();
  c.fillStyle = "rgba(142,26,85,0.08)"; c.fillRect(vx - 50, vy - 60, 100, 120);
  c.strokeStyle = "rgba(142,26,85,0.5)"; c.lineWidth = 0.5;
  for (let i = 0; i < 72; i++) { const a = (i / 72) * Math.PI * 2; c.beginPath(); c.moveTo(vx, vy + 20); c.lineTo(vx + 80 * Math.cos(a), vy + 20 + 80 * Math.sin(a)); c.stroke(); }
  for (let r = 8; r < 60; r += 5) { c.beginPath(); c.arc(vx, vy + 20, r, Math.PI, 2 * Math.PI); c.stroke(); }
  c.restore();
  c.strokeStyle = E; c.lineWidth = 1.2; c.beginPath(); c.ellipse(vx, vy, 44, 54, 0, 0, Math.PI * 2); c.stroke();
  // the company and SHARES
  // the T mark in the vignette, the wordmark as the company's name
  const tm = mark("t");
  if (tm) { c.globalAlpha = 0.92; c.drawImage(tm, vx - 30, vy - 30, 60, 60); c.globalAlpha = 1; }
  wordmark(c, W / 2 + 40, 60, 200);
  c.textAlign = "center"; c.textBaseline = "alphabetic";
  c.fillStyle = INK;
  track(c, 7);
  const s2 = fitFont(c, 700, 16, "SHARES", 120);
  c.fillText("SHARES", W / 2 + 42, 96 + s2 * 0.36);
  track(c, 0);
  // the cartouche with the value
  c.strokeStyle = E; c.lineWidth = 1.2;
  rr(c, 160, 124, 270, 64, 10); c.stroke();
  rr(c, 165, 129, 260, 54, 7); c.stroke();
  c.fillStyle = INK;
  track(c, 1);
  const s3 = fitFont(c, 800, 40, "$536,000,000", 236);
  c.fillText("$536,000,000", 295, 156 + s3 * 0.36);
  track(c, 0);
  // the certifying text (greeked), two signature lines, the seal
  typeLines(c, 160, 204, 270, 3, 11, 3.6, 0.3, 2);
  c.fillStyle = INK;
  c.fillRect(60, 262, 120, 1); c.fillRect(W - 190, 262, 120, 1);
  c.fillStyle = "rgba(28,26,30,0.35)";
  rr(c, 80, 268, 80, 3.4, 1.7); c.fill(); rr(c, W - 170, 268, 80, 3.4, 1.7); c.fill();
  c.strokeStyle = E; c.lineWidth = 1; c.beginPath(); c.arc(W / 2 - 4, 262, 20, 0, Math.PI * 2); c.stroke();
  c.beginPath(); c.arc(W / 2 - 4, 262, 15, 0, Math.PI * 2); c.stroke();
  for (let i = 0; i < 36; i++) { const a = (i / 36) * Math.PI * 2; c.beginPath(); c.moveTo(W / 2 - 4 + 15 * Math.cos(a), 262 + 15 * Math.sin(a)); c.lineTo(W / 2 - 4 + 20 * Math.cos(a), 262 + 20 * Math.sin(a)); c.stroke(); }
  // the certificate's number box (greeked)
  c.strokeStyle = E; c.lineWidth = 0.9; rr(c, 44, 40, 70, 22, 4); c.stroke();
  c.fillStyle = "rgba(28,26,30,0.45)"; rr(c, 54, 49, 50, 4, 2); c.fill();
}, 3);

/** book: its x offset (the slide away); sig: the signature's progress 0 … 1; pen: the pen's nib (desk-local) or null;
 *  caseDx: the case's x offset; latch: 0 … 1 each; lid: 0 … 1 open; certDx: the stack's x offset; yaw (deg) */
export type DealP = { bookDx: number; sig: number; pen: [number, number, number] | null; caseDx: number; latch: [number, number]; lid: number;
  certDx: number; showBook: boolean; showCase: boolean; showCerts: boolean; yaw: number };

/** the pen's lean: its axis from the nib, toward the upper right and the viewer (a right hand's pen) */
export const PEN_DIR = new THREE.Vector3(0.52, 0.74, 0.42).normalize();
export const PEN_L = 344;

const flatOf = (shape: THREE.Shape, t: number, bevel = 0, curve = 16) => {
  const g = new THREE.ExtrudeGeometry(shape, { depth: Math.max(0.05, t - 2 * bevel), bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelOffset: -bevel, bevelSegments: 2, curveSegments: curve });
  g.translate(0, 0, bevel);
  g.rotateX(-Math.PI / 2);
  return g;
};
const ringOf = (w: number, d: number, r: number, wi: number, di: number, ri: number) => {
  const s = roundRect(w, d, r);
  const h = roundRect(wi, di, ri);
  const p = new THREE.Path(); h.getPoints(8).forEach((q, i) => (i ? p.lineTo(q.x, q.y) : p.moveTo(q.x, q.y)));
  s.holes.push(p);
  return s;
};

export const dealModel = () => (): Model<DealP> => {
  const root = new THREE.Group();
  const sc = new THREE.Group();
  sc.position.set(DG.pivot.x, -DG.floor, DG.pivot.z);
  root.add(sc);
  const desk = new THREE.Group();
  desk.position.set(-DG.pivot.x, 0, -DG.pivot.z);
  sc.add(desk);

  // ══ THE AGREEMENT ══
  const book = new THREE.Group();
  book.userData.obj = "agreement";
  desk.add(book);
  const boardM = new THREE.MeshPhysicalMaterial({ color: col("#17181B"), roughness: 0.7, metalness: 0, sheen: 0.4, sheenColor: col("#3A3C44"), envMapIntensity: 0.4 });
  const board = rbox(2 * BK.W + 14, BK.BOARD, BK.D + 14, 1, boardM, 2);
  board.position.set(DG.book.x, BK.BOARD / 2, DG.book.z + (BK.D + 14) / 2);
  book.add(board);
  // the spine's cloth tape, wrapped round the cover's gutter edge at both ends
  for (const zs of [-1, 1]) {
    const tape = rbox(26, BK.BOARD + 1.2, 6, 0.6, boardM, 2);
    tape.position.set(DG.book.x, (BK.BOARD + 1.2) / 2 - 0.1, DG.book.z + zs * (BK.D / 2 + 7) + 3);
    book.add(tape);
  }
  const edgeM = new THREE.MeshStandardMaterial({ map: paintEdges(), roughness: 0.9, envMapIntensity: 0.3 });
  const plainEdge = new THREE.MeshStandardMaterial({ color: col("#ECE6D8"), roughness: 0.9, envMapIntensity: 0.3 });
  const rightLive = liveTex(BK.W, BK.D, 3);
  const rightM = new THREE.MeshStandardMaterial({ map: rightLive.tex, roughness: 0.86, envMapIntensity: 0.35, side: THREE.DoubleSide });
  const leftM = new THREE.MeshStandardMaterial({ map: paintLeft(), roughness: 0.86, envMapIntensity: 0.35, side: THREE.DoubleSide });
  for (const sg of [1, -1]) {
    // the page block: its profile (gutter dip, arch) extruded front to back; its cut edges striped by the sheets
    const sh = new THREE.Shape();
    const base = BK.BOARD + 0.05;
    sh.moveTo(0, base); sh.lineTo(BK.W, base);
    for (let i = 40; i >= 0; i--) { const s = (BK.W * i) / 40; sh.lineTo(s, pageTop(s) - 0.35); }
    sh.lineTo(0, base);
    const g = new THREE.ExtrudeGeometry(sh, { depth: BK.D, bevelEnabled: false, curveSegments: 4 });
    g.translate(0, 0, -BK.D / 2);
    g.computeBoundingBox();
    const b = g.boundingBox!;
    const uv = g.attributes.uv as THREE.BufferAttribute, pos = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) - b.min.x) / (b.max.x - b.min.x) * 6, (pos.getY(i) - b.min.y) / (b.max.y - b.min.y));
    const blk = mesh(g, [edgeM, plainEdge]);
    blk.scale.x = sg;
    blk.position.set(DG.book.x, 0, DG.book.z);
    book.add(blk);
    // the top page: a surface on the block's profile, its print following the curve
    const NS = 64, NZ = 24;
    const pg = new THREE.BufferGeometry();
    const P: number[] = [], U: number[] = [], I: number[] = [];
    for (let j = 0; j <= NZ; j++) for (let i = 0; i <= NS; i++) {
      const s = (BK.W * i) / NS, z = -BK.D / 2 + (BK.D * j) / NZ;
      P.push(sg * s, pageTop(s), z);
      U.push(sg > 0 ? s / BK.W : 1 - s / BK.W, 1 - j / NZ);
    }
    for (let j = 0; j < NZ; j++) for (let i = 0; i < NS; i++) {
      const a = j * (NS + 1) + i, bb = a + 1, c2 = a + NS + 1, d = c2 + 1;
      if (sg > 0) I.push(a, c2, bb, bb, c2, d); else I.push(a, bb, c2, bb, d, c2);
    }
    pg.setAttribute("position", new THREE.Float32BufferAttribute(P, 3));
    pg.setAttribute("uv", new THREE.Float32BufferAttribute(U, 2));
    pg.setIndex(I); pg.computeVertexNormals();
    const page = mesh(pg, sg > 0 ? rightM : leftM);
    page.position.set(DG.book.x, 0, DG.book.z);
    book.add(page);
  }
  let lastSig = -1, lastBase: unknown = null;
  const paintSig = (p: number) => rightLive.paint((g) => {
    const base = paintRight();
    lastBase = base.image;
    g.drawImage(base.image as HTMLCanvasElement, 0, 0, BK.W, BK.D);
    if (p <= 0) return;
    g.strokeStyle = "#1A2556"; g.lineCap = "round"; g.lineJoin = "round";
    const n = Math.max(2, Math.round(260 * p));
    let prev = sigAt(0);
    for (let i = 1; i <= n; i++) {
      const q = sigAt((i / 260));
      if (i / 260 > p) break;
      g.lineWidth = 1.7 + 0.9 * Math.abs(Math.sin(i * 0.21));
      g.beginPath(); g.moveTo(prev.x, prev.y); g.lineTo(q.x, q.y); g.stroke();
      prev = q;
    }
  });

  // ══ THE PEN: black lacquer, gold trim, a two-tone nib; its axis along +y from the nib ══
  const pen = new THREE.Group();
  pen.userData.obj = "pen";
  desk.add(pen);
  {
    const lac = new THREE.MeshPhysicalMaterial({ color: col("#0B0B0D"), roughness: 0.18, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1 });
    const gold = M.gold("#E0B85A");
    const nibM = M.gold("#E8C878");
    // ★ (031) the tip is closed by a DISC, not a lathe point at r = 0 (its degenerate triangles read as crossing the page)
    const nib = mesh(lathe([[0.55, 0], [1.0, 1.2], [3.2, 10], [5.6, 22], [6.6, 26], [0, 26.2]], 32), nibM);
    pen.add(nib);
    const tip = mesh(new THREE.CircleGeometry(0.55, 16), nibM);
    tip.rotation.x = Math.PI / 2;
    pen.add(tip);
    const sect = mesh(lathe([[0, 25.6], [7.2, 26], [8.6, 34], [9.6, 70], [10, 92], [0, 92.4]], 48), lac);
    pen.add(sect);
    const ring1 = mesh(lathe([[9.8, 92], [11.6, 92.6], [11.8, 100], [10, 100.6], [9.8, 100.6]], 48), gold);
    pen.add(ring1);
    const barrel = mesh(lathe([[0, 100], [11.2, 100.2], [12.4, 120], [12.6, 260], [12.2, 300], [0, 300.4]], 48), lac);
    pen.add(barrel);
    const ring2 = mesh(lathe([[12, 262], [13.4, 262.6], [13.4, 272], [12, 272.6], [11.9, 272.6]], 48), gold);
    pen.add(ring2);
    const cap = mesh(lathe([[0, 298], [12.4, 298.4], [11.6, 330], [8.4, 341], [0, 344]], 48), lac);
    pen.add(cap);
    const clip = wire([[0, 334, 12.2], [0, 330, 14.4], [0, 296, 15.4], [0, 262, 14.6], [0, 255, 13.2]], 2.2, gold, false, 32);
    clip.scale.x = 2.2;
    pen.add(clip);
  }
  const Y = new THREE.Vector3(0, 1, 0);
  pen.quaternion.setFromUnitVectors(Y, PEN_DIR);

  // ══ THE CASE ══
  const cs = new THREE.Group();
  cs.userData.obj = "case";
  desk.add(cs);
  const alu = new THREE.MeshPhysicalMaterial({ color: col("#C3C7CC"), metalness: 0.92, roughness: 0.34, envMapIntensity: 1.0 });
  const aluDk = new THREE.MeshPhysicalMaterial({ color: col("#8C9198"), metalness: 0.9, roughness: 0.3, envMapIntensity: 1.0 });
  const velvet = new THREE.MeshStandardMaterial({ color: col("#121214"), roughness: 0.96, metalness: 0, envMapIntensity: 0.2 });
  const rubber = M.rubber("#1C1B1A");
  const leather = new THREE.MeshPhysicalMaterial({ color: col("#1E1714"), roughness: 0.6, clearcoat: 0.2, envMapIntensity: 0.4 });
  const body = new THREE.Group();
  body.position.y = CS.FEET;
  cs.add(body);
  {
    const W = CS.W, D = CS.D, R = CS.R, wl = CS.WALL;
    for (const [x, z] of [[-W / 2 + 40, -D / 2 + 40], [W / 2 - 40, -D / 2 + 40], [-W / 2 + 40, D / 2 - 40], [W / 2 - 40, D / 2 - 40]] as const) {
      const ft = mesh(new THREE.CylinderGeometry(13, 14, CS.FEET + 0.4, 20), rubber);
      ft.position.set(x, -CS.FEET / 2 + 0.2, z);
      body.add(ft);
    }
    body.add(mesh(flatOf(roundRect(W, D, R), 8, 1.6, 12), alu));
    const walls = mesh(flatOf(ringOf(W, D, R, W - 2 * wl, D - 2 * wl, R - wl * 0.6), CS.BH - 6 - 1, 1.2, 12), alu);
    walls.position.y = 6; body.add(walls);
    const rim = mesh(flatOf(ringOf(W + 3, D + 3, R + 1.5, W - 2 * wl + 4, D - 2 * wl + 4, R - wl * 0.6), 8, 1, 12), aluDk);
    rim.position.y = CS.BH - 8; body.add(rim);
    const foot = mesh(flatOf(ringOf(W + 3, D + 3, R + 1.5, W - 12, D - 12, R - 6), 7, 1, 12), aluDk);
    body.add(foot);
    const lining = mesh(flatOf(roundRect(W - 2 * wl - 0.4, D - 2 * wl - 0.4, R - wl * 0.6), 3, 0.8, 12), velvet);
    lining.position.y = 8; body.add(lining);
    // hinge barrels at the back, on the seam
    for (const x of [-170, 170]) {
      const hb = mesh(new THREE.CylinderGeometry(5.2, 5.2, 46, 20), aluDk);
      hb.rotation.z = Math.PI / 2; hb.position.set(x, CS.BH, -D / 2 - 3.6);
      body.add(hb);
    }
    // the handle: two mounts and a leather grip hanging against the front
    for (const x of [-66, 66]) {
      const mt = rbox(24, 16, 10, 3, aluDk, 2);
      mt.position.set(x, CS.BH - 16, D / 2 + 10);
      body.add(mt);
    }
    const grip = wire([[-66, CS.BH - 16, D / 2 + 6], [-60, CS.BH - 38, D / 2 + 8.6], [-30, CS.BH - 44, D / 2 + 9], [30, CS.BH - 44, D / 2 + 9], [60, CS.BH - 38, D / 2 + 8.6], [66, CS.BH - 16, D / 2 + 6]], 7, leather, false, 48);
    body.add(grip);
  }
  // the cash: two layers of four rows of two strapped bundles, squared in the case
  const CASH_Y = CS.FEET + 8 + 3 + 0.05;
  {
    let k = 0;
    for (const cx of [-NOTE.W / 2 - 6, NOTE.W / 2 + 6]) for (const cz of [-1, 0, 1]) {
      const pl = pile(`cash${k}`, 2, 11 + k, { turn: 0.01, shift: 1.2, plain: true });   // plain straps: one figure in the frame
      pl.group.position.set(cx, CASH_Y, cz * (NOTE.D + 8));
      cs.add(pl.group);
      k++;
    }
  }
  // the latches: a base plate, a catch on the lid, a lever hinged at its foot (it flips down to open)
  const levers: THREE.Group[] = [];
  for (const x of [-160, 160]) {
    const pl = rbox(48, 26, 3, 2, aluDk, 2);
    pl.position.set(x, CS.FEET + CS.BH - 17, CS.D / 2 + 3);
    cs.add(pl);
    const lv = new THREE.Group();
    lv.position.set(x, CS.FEET + CS.BH - 27, CS.D / 2 + 3);
    const bar = rbox(40, 41, 3.4, 2.4, alu, 3);
    bar.position.set(0, 20.5, 3.4);
    lv.add(bar);
    const pivot = mesh(new THREE.CylinderGeometry(2.6, 2.6, 44, 16), aluDk);
    pivot.rotation.z = Math.PI / 2; pivot.position.set(0, 1.5, 1.8);
    lv.add(pivot);
    cs.add(lv);
    levers.push(lv);
  }
  // the lid: hinged at the back of the seam
  const lid = new THREE.Group();
  lid.position.set(0, CS.FEET + CS.BH, -CS.D / 2);
  cs.add(lid);
  {
    const W = CS.W, D = CS.D, R = CS.R, wl = CS.WALL;
    const inner = new THREE.Group();
    inner.position.z = D / 2;
    lid.add(inner);
    const walls = mesh(flatOf(ringOf(W, D, R, W - 2 * wl, D - 2 * wl, R - wl * 0.6), CS.LH - 6, 1.2, 12), alu);
    inner.add(walls);
    const top = mesh(flatOf(roundRect(W, D, R), 8, 1.6, 12), alu);
    top.position.y = CS.LH - 8; inner.add(top);
    const rim = mesh(flatOf(ringOf(W + 3, D + 3, R + 1.5, W - 2 * wl + 4, D - 2 * wl + 4, R - wl * 0.6), 8, 1, 12), aluDk);
    inner.add(rim);
    // two raised ribs across the lid's top (the case's pressed pattern)
    for (const z of [-D / 4, D / 4]) {
      const rib = rbox(W - 60, 2.4, 22, 1.1, alu, 2);
      rib.position.set(0, CS.LH + 1.0, z + 11);
      inner.add(rib);
    }
    const lining = mesh(flatOf(roundRect(W - 2 * wl - 0.4, D - 2 * wl - 0.4, R - wl * 0.6), 3, 0.8, 12), velvet);
    lining.position.y = CS.LH - 8 - 3; inner.add(lining);
    // the bank card tucked under two elastic corner straps in the lining (it faces the viewer when the lid stands open)
    const TW = 400, TH = 200;   // (the lid's lining is 512 × 324)
    const tagBody = rbox(TW, 1.2, TH, 2, new THREE.MeshStandardMaterial({ color: col("#EDE6D2"), roughness: 0.8 }), 1);
    tagBody.position.set(0, CS.LH - 11 - 0.6 - 0.3, TH / 2);
    inner.add(tagBody);
    const tg = new THREE.PlaneGeometry(TW - 1, TH - 1);
    tg.rotateX(Math.PI / 2);
    const tag = mesh(tg, new THREE.MeshStandardMaterial({ map: paintTag(), roughness: 0.75, envMapIntensity: 0.35 }), false, true);
    tag.position.set(0, CS.LH - 11 - 1.2 - 0.3 - 0.04, 0);
    inner.add(tag);
    for (const sx of [-1, 1]) {
      const st = rbox(54, 1.6, 10, 0.6, velvet, 1);
      st.rotation.y = sx * Math.PI / 4;
      st.position.set(sx * (TW / 2 - 14), CS.LH - 11 - 1.2 - 0.3 - 0.9, -TH / 2 + 19);
      inner.add(st);
    }
    // the latches' catches on the lid's front
    for (const x of [-160, 160]) {
      const ct = rbox(40, 12, 3, 2, aluDk, 2);
      ct.position.set(x, 8, D / 2 + 3);
      inner.add(ct);
    }
  }

  // ══ THE CERTIFICATES ══
  const certs = new THREE.Group();
  certs.userData.obj = "certs";
  desk.add(certs);
  {
    const cream = new THREE.MeshStandardMaterial({ color: col("#EFE9D7"), roughness: 0.88, envMapIntensity: 0.3 });
    const creamEdge = new THREE.MeshStandardMaterial({ color: col("#E4DCC6"), roughness: 0.9, envMapIntensity: 0.3 });
    for (let i = 0; i < CT.N; i++) {
      const sh = rbox(CT.W, CT.T, CT.D, 0.4, { px: creamEdge, nx: creamEdge, top: cream, bottom: creamEdge, front: creamEdge, back: creamEdge }, 1);
      sh.position.set((hash(i, 1, 4) - 0.5) * 5, i * (CT.T + 0.25) + CT.T / 2, CT.D / 2 + (hash(i, 2, 4) - 0.5) * 4);
      sh.rotation.y = (hash(i, 3, 4) - 0.5) * 0.014;
      certs.add(sh);
    }
    const top = paper({ w: CT.W, h: CT.D, t: CT.T, face: M.print(paintCert(), 0.82), back: M.paper("#EFE9D7"), edge: M.paper("#E6DECA"), bow: 0.9,
      curls: [{ corner: "br", r: 120, lift: 6 }], seg: 48 });
    top.rotation.x = -Math.PI / 2;
    top.position.set(0, CT.N * (CT.T + 0.25) + CT.T + 0.25, 0);
    top.userData.unit = true;
    certs.add(top);
  }

  // ══ THE FLOOR (the desk): a faint mirror on the dark ground ══
  const floor = makeFloor({ y: DG.floor, x0: -700, x1: 2000, z0: -800, z1: 800, reflect: 0.12, shadow: 0.5, fadeC: [DG.pivot.x, 0], fadeR: [1200, 640] });
  root.add(floor);

  return {
    root,
    update: (p) => {
      sc.rotation.y = rad(p.yaw);
      book.visible = p.showBook;
      book.position.x = p.bookDx;
      if (p.showBook && (Math.abs(p.sig - lastSig) > 1e-4 || lastBase !== paintRight().image || lastSig < 0)) { paintSig(p.sig); lastSig = p.sig; }
      pen.visible = !!p.pen;
      if (p.pen) pen.position.set(...p.pen);
      cs.visible = p.showCase;
      cs.position.set(DG.case.x + p.caseDx, 0, DG.case.z);
      levers.forEach((lv, i) => { lv.rotation.x = rad(78) * p.latch[i]; });
      lid.rotation.x = -rad(LID_OPEN) * p.lid;
      certs.visible = p.showCerts;
      certs.position.set(DG.certs.x + p.certDx, 0, DG.certs.z);
      certs.rotation.y = rad(DG.certs.yaw);
      void BUNDLE_H;
    },
  };
};
