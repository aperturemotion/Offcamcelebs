// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE HOOK IN 3-D — "Shohei Ohtani signed for 700 million dollars. This year, he's paid 2 million dollars." On the dark
// ground an antique BRASS CASH REGISTER (after the National 300-series "candy store" machines: an embossed brass cabinet on a
// walnut cash-drawer base, a stepped bank of glass-topped keys, a crank on its right side, and on top the AMOUNT window whose
// enamel tabs RISE behind the glass as the keys are struck).
//   · it DROPS in under gravity and lands with weight (the set drives drop / sq: a fall, an impact compression, a small
//     rebound and settle), keys and crank shaking from the blow, its contact shadow tightening and darkening as it nears the
//     floor, a faint puff of dust pushed out from under the plinth;
//   · each key presses on its own stem through a real hole in its brass tread and springs back;
//   · each tab is an enamel plate riding in its own channel on the window's back board: hidden behind the lower rail when
//     down, standing in the window when up. The crank's turn clears them.
// ★ Every part is real geometry: openings are cut (the window, the treads' stem holes), engraving is a relief (bump map) with
//   its stippled ground rougher than the raised scrolls, the base is figured walnut, the keys are bezel + celluloid + glass.
// ★ 2026-10-23 (Timur): the crest's text plate is gone (a label); the crest is ornamental embossed brass.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, roundRect, slabOf, type Model } from "../stage";
import { M, rbox, rad, font, fitFont, col, hash } from "../kit029";

export type HookGeo = { floor: number; cx: number; z: number };
/** drop: height above rest (px); sq: impact compression (fraction); yaw (deg); keys: each key's travel down (px, KEY_IDS
 *  order); tabs: each slot's rise 0 (down, hidden) … 1 (up in the window); fig: 0 → $700,000,000, 1 → $2,000,000;
 *  crank: the crank's turn (rad); dust: frames since the impact (< 0 none) */
export type HookP = { drop: number; sq: number; yaw: number; keys: number[]; tabs: number[]; fig: number; crank: number; dust: number };

// ── the keyboard (row 0 is the front, lowest row) ──
export const KEY_ROWS = [["$", "00", "000", "¢", "NO SALE"], ["6", "7", "8", "9", "0"], ["1", "2", "3", "4", "5"]] as const;
export const KEY_IDS = KEY_ROWS.flat() as readonly string[];
/** the figures the window shows, one char per slot (twelve slots; 4 and 8 are the narrow comma tabs) */
export const FIGS = ["$700,000,000", "  $2,000,000"] as const;
export const SLOTS = 12;
/** the height of the whole register, floor to the crest's top (px) */
export const REG_H = 744;

// ── dimensions (px; y up from the floor, z toward the viewer, x centred) ──
const FOOT = 12, PL0 = FOOT, PL1 = 52, BASE1 = 148, CAB0 = 162, BH = 280, CAB1 = CAB0 + BH;
const BW = 640, BD = 340, zC = 36;                 // the cabinet: front face at zC
const KW = 580, ROW_D = 46, ROW_H = 44, TREAD_T = 8;
const zf = (r: number) => zC + (3 - r) * ROW_D;     // the front edge of row r's tread
const yTread = (r: number) => CAB0 + ROW_H + r * ROW_H;
const KX = (k: number) => (k - 2) * 128;
const STEM_R = 4, HOLE_R = 5.2, CAP_UP = 34, TILT = 0.26, STEM_Z = 16;   // a stem stands STEM_Z behind its tread's front edge
const MQ0 = 460, MH = 210, MQ1 = MQ0 + MH, MW = 640, MD = 100, zM = zC + 2;
const WIN0 = MQ0 + 104, WIN1 = MQ0 + 190, WINW = 576;   // the window opening (y, width)
const TH = 80, TW = 44, TWC = 22, TGAP = 6;
// ★ down, a tab's top sits 14 px under the lip: seen from above, what is behind the plate shifts up toward the eye (~6 px)
export const TAB_RISE = 96;
const TAB_DOWN = MQ0 + 10;                                // a tab's bottom when down (on the case's floor + 2)
const LINER_Z = zM - 26;                                 // the back board's front face (tabs ride 0.5 px in front of it)
const CRANK = { y: 318, z: -128, x: BW / 2, arm: 92 };
const slotW = (i: number) => (i === 4 || i === 8 ? TWC : TW);
const slotX = (() => {
  const tot = Array.from({ length: SLOTS }, (_, i) => slotW(i)).reduce((a, b) => a + b, 0) + TGAP * (SLOTS - 1);
  const xs: number[] = [];
  let x = -tot / 2;
  for (let i = 0; i < SLOTS; i++) { xs.push(x + slotW(i) / 2); x += slotW(i) + TGAP; }
  return xs;
})();

// ══ TEXTURES: relief (embossed brass), walnut, enamel ══════════════════════════════════════════════
type Relief = { map: THREE.Texture; bump: THREE.Texture; rough: THREE.Texture };
const reliefs = new Map<string, Relief>();
const canvasOf = (w: number, h: number, s: number) => {
  const c = document.createElement("canvas");
  c.width = Math.round(w * s); c.height = Math.round(h * s);
  const g = c.getContext("2d")!;
  g.setTransform(s, 0, 0, s, 0, 0);
  return { c, g };
};
const texOf = (c: HTMLCanvasElement, srgb: boolean) => {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8;
  t.needsUpdate = true;
  return t;
};
/** an embossed brass panel: `draw` paints the RAISED work in white (and grooves in black) on a w × h field; from it come the
 *  colour (polished raised work over a darker stippled ground, dirt in the recesses), the bump and the roughness */
const relief = (key: string, w: number, h: number, draw: (g: CanvasRenderingContext2D) => void, s = 2, tone = 1): Relief => {
  const hit = reliefs.get(key);
  if (hit) return hit;
  const mk = canvasOf(w, h, s);
  mk.g.fillStyle = "#000"; mk.g.fillRect(0, 0, w, h);
  mk.g.fillStyle = "#fff"; mk.g.strokeStyle = "#fff"; mk.g.lineCap = "round"; mk.g.lineJoin = "round";
  draw(mk.g);
  const W = mk.c.width, H = mk.c.height;
  // the colour
  const cl = canvasOf(w, h, s);
  const g = cl.g;
  g.fillStyle = tone === 1 ? "#8E6B2B" : "#856427"; g.fillRect(0, 0, w, h);
  // the stippled (punched) ground
  const n = Math.round((w * h) / 5);
  for (let i = 0; i < n; i++) {
    const x = hash(i, 1, w) * w, y = hash(i, 2, h) * h;
    g.fillStyle = hash(i, 3, 7) > 0.5 ? "rgba(70,46,12,0.32)" : "rgba(220,190,120,0.18)";
    g.fillRect(x, y, 0.7, 0.7);
  }
  // dirt in the recesses round the raised work: the work in dirt-brown, blurred, multiplied over the ground
  const tint = canvasOf(w, h, s);
  tint.g.setTransform(1, 0, 0, 1, 0, 0);
  tint.g.fillStyle = "#fff"; tint.g.fillRect(0, 0, W, H);
  tint.g.filter = `blur(${2.2 * s}px)`;
  const brown = canvasOf(w, h, s);
  brown.g.setTransform(1, 0, 0, 1, 0, 0);
  brown.g.drawImage(mk.c, 0, 0);
  brown.g.globalCompositeOperation = "multiply";
  brown.g.fillStyle = "#6b4a1a"; brown.g.fillRect(0, 0, W, H);   // raised → brown, ground stays black
  brown.g.globalCompositeOperation = "screen";
  brown.g.fillStyle = "#000"; brown.g.fillRect(0, 0, W, H);
  // white where ground, brown where raised (inverted mask over brown)
  const inv = canvasOf(w, h, s);
  inv.g.setTransform(1, 0, 0, 1, 0, 0);
  inv.g.fillStyle = "#fff"; inv.g.fillRect(0, 0, W, H);
  inv.g.globalCompositeOperation = "difference"; inv.g.drawImage(mk.c, 0, 0);   // ground white, raised black
  inv.g.globalCompositeOperation = "lighter"; inv.g.drawImage(brown.c, 0, 0);    // raised brown
  tint.g.drawImage(inv.c, 0, 0);
  g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.globalCompositeOperation = "multiply"; g.globalAlpha = 0.8; g.drawImage(tint.c, 0, 0); g.restore();
  // the raised work itself, polished brighter (its own mask used as alpha)
  const lit = canvasOf(w, h, s);
  lit.g.setTransform(1, 0, 0, 1, 0, 0);
  const lg = lit.g.createLinearGradient(0, 0, W, H);
  lg.addColorStop(0, "#F0D58E"); lg.addColorStop(0.5, "#DDBB6C"); lg.addColorStop(1, "#CDA657");
  lit.g.fillStyle = lg; lit.g.fillRect(0, 0, W, H);
  lit.g.globalCompositeOperation = "multiply"; lit.g.drawImage(mk.c, 0, 0);   // black where not raised
  g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.globalCompositeOperation = "lighten"; g.drawImage(lit.c, 0, 0); g.restore();
  // the bump: the raised work, softened so its edges are rounded
  const bp = canvasOf(w, h, s);
  bp.g.setTransform(1, 0, 0, 1, 0, 0);
  bp.g.fillStyle = "#000"; bp.g.fillRect(0, 0, W, H);
  bp.g.filter = `blur(${1.1 * s}px)`; bp.g.drawImage(mk.c, 0, 0);
  bp.g.filter = "none"; bp.g.globalAlpha = 0.35; bp.g.drawImage(mk.c, 0, 0);
  // the roughness (green channel): stippled ground rough, raised work polished
  const rg = canvasOf(w, h, s);
  rg.g.setTransform(1, 0, 0, 1, 0, 0);
  rg.g.fillStyle = "rgb(150,150,150)"; rg.g.fillRect(0, 0, W, H);
  const rm = canvasOf(w, h, s);
  rm.g.setTransform(1, 0, 0, 1, 0, 0);
  rm.g.fillStyle = "rgb(255,255,255)"; rm.g.fillRect(0, 0, W, H);
  rm.g.globalCompositeOperation = "difference"; rm.g.drawImage(mk.c, 0, 0);    // raised → black
  rm.g.globalCompositeOperation = "source-over";
  rg.g.globalCompositeOperation = "multiply";
  rg.g.globalAlpha = 1; rg.g.drawImage(rm.c, 0, 0);
  rg.g.globalCompositeOperation = "lighten";
  rg.g.fillStyle = "rgb(62,62,62)"; rg.g.fillRect(0, 0, W, H);
  const out = { map: texOf(cl.c, true), bump: texOf(bp.c, false), rough: texOf(rg.c, false) };
  reliefs.set(key, out);
  return out;
};
const reliefMat = (r: Relief, bump = 3.2) => new THREE.MeshPhysicalMaterial({
  map: r.map, bumpMap: r.bump, bumpScale: bump, roughnessMap: r.rough, roughness: 1, metalness: 1, envMapIntensity: 1 });

// ── the engraver's vocabulary (white = raised, black = cut). Cast scrollwork is FILLED, tapering work: a stem swells and
//    thins, a volute winds down to a bead, leaves are lobed blades with a cut midrib ──
type Pt = [number, number];
/** a filled stroke along pts, its width easing from w0 to w1 (round at the start) */
const ribbon = (g: CanvasRenderingContext2D, pts: Pt[], w0: number, w1: number) => {
  const L = pts.length;
  if (L < 2) return;
  const lft: Pt[] = [], rgt: Pt[] = [];
  for (let i = 0; i < L; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(L - 1, i + 1)];
    let tx = b[0] - a[0], ty = b[1] - a[1];
    const n = Math.hypot(tx, ty) || 1; tx /= n; ty /= n;
    const w = (w0 + (w1 - w0) * (i / (L - 1))) / 2;
    lft.push([pts[i][0] - ty * w, pts[i][1] + tx * w]); rgt.push([pts[i][0] + ty * w, pts[i][1] - tx * w]);
  }
  g.beginPath(); g.moveTo(lft[0][0], lft[0][1]);
  for (const p of lft) g.lineTo(p[0], p[1]);
  for (let i = L - 1; i >= 0; i--) g.lineTo(rgt[i][0], rgt[i][1]);
  g.closePath(); g.fill();
  g.beginPath(); g.arc(pts[0][0], pts[0][1], w0 / 2, 0, Math.PI * 2); g.fill();
};
const spiralPts = (x: number, y: number, r0: number, dir: number, a0: number, turns: number, N = 56): Pt[] =>
  Array.from({ length: N + 1 }, (_, i) => {
    const th = (i / N) * turns * Math.PI * 2, r = r0 * (1 - (0.8 * i) / N);
    return [x + dir * r * Math.cos(a0 + dir * th), y + r * Math.sin(a0 + dir * th)] as Pt;
  });
const bez = (p0: Pt, p1: Pt, p2: Pt, p3: Pt, N = 40): Pt[] => Array.from({ length: N + 1 }, (_, i) => {
  const t = i / N, u = 1 - t;
  return [u ** 3 * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t ** 3 * p3[0], u ** 3 * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t ** 3 * p3[1]] as Pt;
});
/** a volute: a tapering spiral winding in to a bead */
const volute = (g: CanvasRenderingContext2D, x: number, y: number, r0: number, dir: number, a0: number, turns = 1.15, lw = 2.6) => {
  const pts = spiralPts(x, y, r0, dir, a0, turns);
  ribbon(g, pts, lw * 1.5, lw * 0.5);
  const e = pts[pts.length - 1];
  g.beginPath(); g.arc(e[0], e[1], lw * 0.95, 0, Math.PI * 2); g.fill();
};
/** an acanthus leaf: a blade with three lobes each side, its midrib cut, curling a little toward its tip */
const leaf = (g: CanvasRenderingContext2D, x: number, y: number, len: number, wid: number, ang: number, curl = 0.25) => {
  g.save(); g.translate(x, y); g.rotate(ang);
  g.fillStyle = "#fff";
  const tipY = -len * curl * 0.4;
  g.beginPath(); g.moveTo(0, 0);
  g.bezierCurveTo(len * 0.12, -wid * 1.15, len * 0.3, -wid * 0.95, len * 0.34, -wid * 0.55);
  g.bezierCurveTo(len * 0.42, -wid * 1.05, len * 0.6, -wid * 0.85, len * 0.64, -wid * 0.45);
  g.bezierCurveTo(len * 0.74, -wid * 0.8, len * 0.9, -wid * 0.5, len, tipY);
  g.bezierCurveTo(len * 0.88, wid * 0.35, len * 0.74, wid * 0.65, len * 0.66, wid * 0.4);
  g.bezierCurveTo(len * 0.58, wid * 0.85, len * 0.42, wid * 0.95, len * 0.36, wid * 0.55);
  g.bezierCurveTo(len * 0.28, wid * 1.05, len * 0.1, wid * 1.0, 0, 0);
  g.fill();
  g.strokeStyle = "#000"; g.lineWidth = Math.max(0.8, wid * 0.14);
  g.beginPath(); g.moveTo(len * 0.06, 0); g.quadraticCurveTo(len * 0.6, tipY * 0.2, len * 0.9, tipY * 0.85); g.stroke();
  // the lobes' veins
  g.lineWidth = Math.max(0.5, wid * 0.08);
  for (const [t, s] of [[0.3, -1], [0.6, -1], [0.32, 1], [0.62, 1]] as const) {
    g.beginPath(); g.moveTo(len * t, tipY * t * 0.3); g.lineTo(len * (t + 0.06), s * wid * 0.55); g.stroke();
  }
  g.restore();
  g.strokeStyle = "#fff"; g.fillStyle = "#fff";
};
const beadRow = (g: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, step: number, r: number) => {
  const L = Math.hypot(x1 - x0, y1 - y0), n = Math.max(1, Math.round(L / step));
  for (let i = 0; i <= n; i++) { g.beginPath(); g.arc(x0 + ((x1 - x0) * i) / n, y0 + ((y1 - y0) * i) / n, r, 0, Math.PI * 2); g.fill(); }
};
const rosette = (g: CanvasRenderingContext2D, x: number, y: number, r: number, petals = 8) => {
  for (let i = 0; i < petals; i++) {
    const a = (i / petals) * Math.PI * 2;
    g.save(); g.translate(x, y); g.rotate(a);
    g.beginPath(); g.moveTo(r * 0.18, 0);
    g.bezierCurveTo(r * 0.4, -r * 0.34, r * 0.9, -r * 0.26, r, 0);
    g.bezierCurveTo(r * 0.9, r * 0.26, r * 0.4, r * 0.34, r * 0.18, 0);
    g.fill();
    g.strokeStyle = "#000"; g.lineWidth = Math.max(0.6, r * 0.05); g.beginPath(); g.moveTo(r * 0.3, 0); g.lineTo(r * 0.85, 0); g.stroke();
    g.restore();
  }
  g.beginPath(); g.arc(x, y, r * 0.26, 0, Math.PI * 2); g.fill();
  g.strokeStyle = "#000"; g.lineWidth = Math.max(0.6, r * 0.05); g.beginPath(); g.arc(x, y, r * 0.26, 0, Math.PI * 2); g.stroke();
  g.fillStyle = "#000"; for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; g.beginPath(); g.arc(x + Math.cos(a) * r * 0.13, y + Math.sin(a) * r * 0.13, r * 0.03, 0, Math.PI * 2); g.fill(); }
  g.strokeStyle = "#fff"; g.fillStyle = "#fff";
};
/** a symmetric acanthus cartouche about (cx, cy), w × h: a pair of big C-scrolls back to back, each sprouting leaves and a
 *  smaller counter-scroll, a palmette over a shield between them, leafy tendrils running out to the ends */
const scrollPair = (g: CanvasRenderingContext2D, cx: number, cy: number, sw: number, sh: number) => {
  const lw = sh * 0.075;
  for (const d of [-1, 1]) {
    // the main stem: from the centre's foot sweeping up and out, ending in a volute that winds back in
    const p0: Pt = [cx + d * sh * 0.22, cy + sh * 0.34], p3: Pt = [cx + d * sw * 0.33, cy - sh * 0.12];
    const stem = bez(p0, [cx + d * sw * 0.08, cy - sh * 0.5], [cx + d * sw * 0.24, cy - sh * 0.55], p3);
    ribbon(g, stem, lw * 1.6, lw * 1.1);
    volute(g, cx + d * sw * 0.33 - d * sh * 0.02, cy + sh * 0.1, sh * 0.24, d, -Math.PI / 2, 1.05, lw);
    // the tendril running on to the end, with its own small volute
    const t2 = bez([cx + d * sw * 0.36, cy - sh * 0.14], [cx + d * sw * 0.42, cy - sh * 0.36], [cx + d * sw * 0.48, cy - sh * 0.2], [cx + d * sw * 0.49, cy + sh * 0.04]);
    ribbon(g, t2, lw * 1.0, lw * 0.6);
    volute(g, cx + d * sw * 0.47, cy + sh * 0.14, sh * 0.11, -d, -Math.PI / 2, 1.0, lw * 0.6);
    // a counter-scroll curling down off the main stem
    const c2 = bez([cx + d * sw * 0.17, cy - sh * 0.36], [cx + d * sw * 0.23, cy + sh * 0.05], [cx + d * sw * 0.16, cy + sh * 0.36], [cx + d * sw * 0.1, cy + sh * 0.3]);
    ribbon(g, c2, lw * 1.1, lw * 0.7);
    volute(g, cx + d * sw * 0.115, cy + sh * 0.2, sh * 0.1, -d, Math.PI / 2, 1.0, lw * 0.7);
    // leaves sprouting along the main stem, alternately over and under it
    stem.forEach((p, i) => {
      if (i % 8 !== 4) return;
      const q = stem[Math.min(stem.length - 1, i + 1)], a = Math.atan2(q[1] - p[1], q[0] - p[0]);
      const up = (i / 8) % 2 < 1;
      leaf(g, p[0], p[1], sh * 0.36, sh * 0.11, a + (up ? -0.75 : 0.75) * d * (d > 0 ? 1 : -1) * 1, 0.3);
    });
    // a leaf cupping the volute
    leaf(g, cx + d * sw * 0.28, cy + sh * 0.3, sh * 0.34, sh * 0.1, d > 0 ? -0.35 : Math.PI + 0.35, 0.2);
    // berries
    for (const [bx, by] of [[0.4, -0.38], [0.43, -0.3], [0.37, -0.31]] as const) { g.beginPath(); g.arc(cx + d * sw * bx, cy + sh * by, lw * 0.75, 0, Math.PI * 2); g.fill(); }
  }
  // the palmette: a fan of petals over the shield
  for (let i = -3; i <= 3; i++) leaf(g, cx, cy + sh * 0.18, sh * (0.5 - Math.abs(i) * 0.05), sh * 0.075, -Math.PI / 2 + i * 0.3, 0);
  g.beginPath(); g.ellipse(cx, cy + sh * 0.27, sh * 0.15, sh * 0.11, 0, 0, Math.PI * 2); g.fill();
  g.strokeStyle = "#000"; g.lineWidth = lw * 0.5; g.beginPath(); g.ellipse(cx, cy + sh * 0.27, sh * 0.09, sh * 0.06, 0, 0, Math.PI * 2); g.stroke();
  g.strokeStyle = "#fff";
};
/** a running scroll (a vine) along a band: a wave stem, each crest throwing off a volute and a leaf, alternately up and down */
const runningScroll = (g: CanvasRenderingContext2D, x0: number, x1: number, cy: number, amp: number, period: number) => {
  const pts: Pt[] = [];
  for (let x = x0; x <= x1; x += 2) pts.push([x, cy + amp * Math.sin(((x - x0) / period) * Math.PI * 2)]);
  ribbon(g, pts, amp * 0.36, amp * 0.36);
  for (let x = x0 + period / 4, i = 0; x < x1 - period / 4; x += period / 2, i++) {
    const up = i % 2 === 0, y = cy + (up ? -amp : amp);
    volute(g, x + period * 0.14, y + (up ? amp * 0.75 : -amp * 0.75), amp * 0.62, 1, up ? -Math.PI / 2 : Math.PI / 2, 1.0, amp * 0.22);
    leaf(g, x - period * 0.02, y, amp * 1.3, amp * 0.36, up ? -2.5 : 2.5, 0.2);
  }
};
/** a dense acanthus band between x0 and x1 about cy, h tall: big C-scrolls alternating up and down, linked, leafed */
const acanthusBand = (g: CanvasRenderingContext2D, x0: number, x1: number, cy: number, h: number) => {
  const n = Math.max(2, Math.round((x1 - x0) / (h * 1.45))), u = (x1 - x0) / n, lw = h * 0.07;
  for (let i = 0; i < n; i++) {
    const xa = x0 + i * u, up = i % 2 === 0 ? 1 : -1;
    const stem = bez([xa, cy], [xa + u * 0.3, cy - up * h * 0.5], [xa + u * 0.7, cy - up * h * 0.5], [xa + u, cy]);
    ribbon(g, stem, lw * 1.3, lw * 1.3);
    volute(g, xa + u * 0.52, cy - up * h * 0.06, h * 0.25, up, up > 0 ? -Math.PI / 2 : Math.PI / 2, 1.05, lw);
    leaf(g, xa + u * 0.16, cy - up * h * 0.2, h * 0.42, h * 0.13, up > 0 ? -2.2 : 2.2, 0.25);
    leaf(g, xa + u * 0.84, cy - up * h * 0.2, h * 0.36, h * 0.11, up > 0 ? -0.95 : 0.95, 0.25);
    leaf(g, xa + u * 0.5, cy + up * h * 0.2, h * 0.3, h * 0.1, up > 0 ? 1.57 + 0.4 : -1.57 - 0.4, 0.2);
    g.beginPath(); g.arc(xa + u, cy, lw * 1.1, 0, Math.PI * 2); g.fill();
  }
};
const framePanel = (g: CanvasRenderingContext2D, w: number, h: number, inset = 10) => {
  beadRow(g, inset, inset, w - inset, inset, 7, 2.1); beadRow(g, inset, h - inset, w - inset, h - inset, 7, 2.1);
  beadRow(g, inset, inset, inset, h - inset, 7, 2.1); beadRow(g, w - inset, inset, w - inset, h - inset, 7, 2.1);
  g.lineWidth = 3.6; g.strokeRect(inset + 9, inset + 9, w - 2 * inset - 18, h - 2 * inset - 18);
  g.lineWidth = 1.4; g.strokeRect(inset + 15, inset + 15, w - 2 * inset - 30, h - 2 * inset - 30);
};

/** figured walnut: a French-polished board, its grain running along u */
let walnutT: THREE.Texture | null = null;
const walnutTex = () => {
  if (walnutT) return walnutT;
  const w = 1024, h = 256, { c, g } = canvasOf(w, h, 1);
  const bg = g.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, "#4E2F1E"); bg.addColorStop(0.5, "#57351F"); bg.addColorStop(1, "#4A2B1B");
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 170; i++) {
    const y0 = hash(i, 4, 1) * h, a = 2 + 7 * hash(i, 5, 1), p = hash(i, 6, 1) * 6.28, q = hash(i, 7, 1) * 6.28;
    const dark = hash(i, 8, 1) > 0.3;
    g.strokeStyle = dark ? `rgba(28,14,7,${0.18 + 0.3 * hash(i, 9, 1)})` : `rgba(140,92,52,${0.08 + 0.14 * hash(i, 9, 1)})`;
    g.lineWidth = 0.6 + 2.2 * hash(i, 10, 1);
    g.beginPath();
    for (let x = 0; x <= w; x += 8) { const y = y0 + a * Math.sin(x / 90 + p) + 3 * Math.sin(x / 23 + q) + 9 * Math.sin(x / 400 + p * 0.5); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); }
    g.stroke();
  }
  // pores
  for (let i = 0; i < 2600; i++) { g.fillStyle = "rgba(20,10,5,0.35)"; g.fillRect(hash(i, 11, 2) * w, hash(i, 12, 2) * h, 2 + 4 * hash(i, 13, 2), 0.8); }
  walnutT = texOf(c, true);
  walnutT.wrapS = walnutT.wrapT = THREE.RepeatWrapping;
  return walnutT;
};
/** a fine brushing for the plain brass: streaks of roughness along u */
let brushT: THREE.Texture | null = null;
const brushTex = () => {
  if (brushT) return brushT;
  const w = 512, h = 512, { c, g } = canvasOf(w, h, 1);
  g.fillStyle = "rgb(105,105,105)"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 900; i++) {
    const v = 70 + Math.round(80 * hash(i, 20, 3));
    g.fillStyle = `rgba(${v},${v},${v},0.5)`;
    g.fillRect(hash(i, 21, 3) * w - 60, hash(i, 22, 3) * h, 60 + 300 * hash(i, 23, 3), 0.6 + hash(i, 24, 3));
  }
  brushT = texOf(c, false);
  brushT.wrapS = brushT.wrapT = THREE.RepeatWrapping;
  return brushT;
};
/** a soft round alpha (contact shadows, dust): white centre → black rim */
const softTex = (() => {
  let t: THREE.Texture | null = null;
  return () => {
    if (t) return t;
    const { c, g } = canvasOf(256, 256, 1);
    g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
    const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    gr.addColorStop(0, "#fff"); gr.addColorStop(0.4, "#b0b0b0"); gr.addColorStop(0.75, "#3a3a3a"); gr.addColorStop(1, "#000");
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    t = texOf(c, false);
    return t;
  };
})();
/** a soft-cornered rectangle's alpha (a footprint's contact shadow): `soft` its feather as a fraction of the size */
const footTex = (soft: number) => {
  const { c, g } = canvasOf(256, 256, 1);
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
  g.filter = `blur(${Math.round(soft * 256 * 0.5)}px)`;
  g.fillStyle = "#fff";
  const m = soft * 256;
  g.fillRect(m, m, 256 - 2 * m, 256 - 2 * m);
  return texOf(c, false);
};

export const hookModel = (g: HookGeo) => (): Model<HookP> => {
  const root = new THREE.Group();
  const reg = new THREE.Group();
  const FY = -g.floor;
  reg.position.set(g.cx, FY, g.z);
  root.add(reg);
  // the register's fixed body is one object; the parts that MOVE are each their own (keys, tabs, crank), so the PEN audit
  // proves each moves clear of the body (★ L9 4c: crossings between the parts of one object count too)
  const body = new THREE.Group();
  body.userData.obj = "register";
  reg.add(body);

  // ── materials ──
  const brass = new THREE.MeshPhysicalMaterial({ color: col("#CFA858"), metalness: 1, roughness: 0.75, roughnessMap: brushTex(), envMapIntensity: 1 });
  const brassBright = new THREE.MeshPhysicalMaterial({ color: col("#DDB868"), metalness: 1, roughness: 0.5, roughnessMap: brushTex(), envMapIntensity: 1 });
  const brassDark = new THREE.MeshPhysicalMaterial({ color: col("#A88440"), metalness: 1, roughness: 0.85, roughnessMap: brushTex(), envMapIntensity: 0.95 });
  const wt = walnutTex();
  const walnut = new THREE.MeshPhysicalMaterial({ map: wt, roughness: 0.42, metalness: 0, clearcoat: 0.7, clearcoatRoughness: 0.28, envMapIntensity: 0.7 });
  const enamelBlack = new THREE.MeshPhysicalMaterial({ color: col("#0E0A08"), roughness: 0.45, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.3, envMapIntensity: 0.6 });

  // ══ THE BASE: brass bun feet, a moulded walnut plinth, the cash-drawer case, a walnut cap moulding ══
  for (const [x, z] of [[-330, 168], [330, 168], [-330, -290], [330, -290]] as const) {
    const ft = mesh(lathe([[0.01, 0], [13, 0], [17, 2.5], [18.5, 6], [17, 9.5], [13, 11.6], [11, FOOT]], 40), brassBright);
    ft.position.set(x, 0, z);
    body.add(ft);
  }
  const plinth = rbox(720, PL1 - PL0, 520, 9, walnut, 4);
  plinth.position.set(0, (PL0 + PL1) / 2, 200);
  body.add(plinth);
  // a brass bead along the plinth's top front edge
  const bead = mesh(new THREE.CylinderGeometry(2.6, 2.6, 700, 12), brassBright);
  bead.rotation.z = Math.PI / 2; bead.position.set(0, PL1 + 0.2, 200 - 6);
  body.add(bead);
  const caseB = rbox(680, BASE1 - PL1, 490, 5, walnut, 3);
  caseB.position.set(0, (PL1 + BASE1) / 2, 186);
  body.add(caseB);
  const capM = rbox(704, CAB0 - BASE1, 504, 6, walnut, 3);
  capM.position.set(0, (BASE1 + CAB0) / 2, 198);
  body.add(capM);
  // the drawer: its front proud of the case, a fielded panel, a brass bar pull on two posts, a keyhole escutcheon
  const drawer = rbox(600, 76, 10, 3, walnut, 3);
  drawer.position.set(0, 100, 196);
  body.add(drawer);
  const field = rbox(520, 50, 4, 5, walnut, 3);
  field.position.set(0, 100, 200);
  body.add(field);
  for (const x of [-48, 48]) {
    const post = mesh(new THREE.CylinderGeometry(3.6, 4.4, 12, 16), brassBright);
    post.rotation.x = Math.PI / 2; post.position.set(x, 104, 206);
    body.add(post);
  }
  const pull = rbox(126, 10, 9, 4.5, brassBright, 4);
  pull.position.set(0, 104, 219);
  body.add(pull);
  const esc = mesh(lathe([[0.01, 0], [8, 0], [9, 1], [8.6, 2.4], [6, 3], [0.01, 3]], 32), brassBright);
  esc.rotation.x = Math.PI / 2; esc.position.set(0, 84, 200);
  body.add(esc);
  const keyhole = new THREE.Shape();
  keyhole.absarc(0, 1.6, 1.8, 0, Math.PI * 2, false);
  const kh = mesh(new THREE.ShapeGeometry(keyhole, 16), new THREE.MeshBasicMaterial({ color: 0x0a0604 }), false, false);
  kh.position.set(0, 84, 203.1);
  body.add(kh);
  const kh2 = mesh(new THREE.PlaneGeometry(1.6, 4), new THREE.MeshBasicMaterial({ color: 0x0a0604 }), false, false);
  kh2.position.set(0, 81.6, 203.1);
  body.add(kh2);

  // ══ THE CABINET: embossed front and sides, corner half-columns, a stepped cornice ══
  const frontR = relief("hk2-front", BW, BH, (c) => {
    framePanel(c, BW, BH, 8);
    scrollPair(c, BW / 2, 66, 560, 100);
    for (const [x, y] of [[44, 44], [BW - 44, 44], [44, BH - 44], [BW - 44, BH - 44]] as const) rosette(c, x, y, 15);
    // the lower field (seen between the keys): two dense acanthus bands
    acanthusBand(c, 40, BW - 40, 150, 52);
    acanthusBand(c, 70, BW - 70, 214, 46);
  });
  const sideR = relief("hk2-side", BD, BH, (c) => {
    framePanel(c, BD, BH, 8);
    // the crank's boss sits on a rosette at the panel's centre (its hub covers it)
    rosette(c, BD / 2 - 6, CAB1 - CRANK.y, 50, 12);
    acanthusBand(c, 34, BD - 34, 46, 34);
    acanthusBand(c, 34, BD - 34, BH - 46, 34);
    for (const d of [-1, 1]) {
      leaf(c, BD / 2 - 6 + d * 60, CAB1 - CRANK.y, 52, 12, d > 0 ? 0 : Math.PI, 0.3);
      volute(c, BD / 2 - 6 + d * 120, CAB1 - CRANK.y - 6, 22, d, -Math.PI / 2, 1.1, 2.6);
    }
  });
  const frontM = reliefMat(frontR), sideM = reliefMat(sideR);
  const cab = rbox(BW, BH, BD, 6, { px: sideM, nx: sideM, top: brassDark, bottom: brassDark, front: frontM, back: brassDark }, 3);
  cab.position.set(0, CAB0 + BH / 2, zC);
  body.add(cab);
  // ★ corner half-columns on the front: a base, a fluted shaft, a capital (turned)
  const colProf: [number, number][] = [[0.01, 0], [13, 0], [13, 5], [11, 7], [11, 10], [9.5, 12], [9.5, BH - 22], [11, BH - 18], [12.5, BH - 14], [13, BH - 8], [13.5, BH - 6], [13.5, BH], [0.01, BH]];
  for (const x of [-(BW / 2 + 2), BW / 2 + 2]) {
    const cl = mesh(lathe(colProf, 40), brassBright);
    cl.position.set(x, CAB0, zC - 4);
    body.add(cl);
  }
  // the cornice: two steps out over the cabinet, the marquee stands on it
  const corn1 = rbox(BW + 24, 8, BD + 14, 3, brassBright, 3);
  corn1.position.set(0, CAB1 + 4, zC + 8);
  body.add(corn1);
  const corn2 = rbox(BW + 40, 10, BD + 24, 4, brass, 3);
  corn2.position.set(0, CAB1 + 13, zC + 12);
  body.add(corn2);
  // a cast egg-and-dart row along the cornice's front (a row of small turned beads)
  for (let i = 0; i < 41; i++) {
    const b = mesh(new THREE.SphereGeometry(3.2, 12, 8), brassBright);
    b.scale.set(1, 1.4, 0.7);
    b.position.set(-320 + i * 16, CAB1 + 4, zC + 8 + 1.2);
    body.add(b);
  }

  // ══ THE KEYBOARD: three stepped brass treads with stem holes and rounded nosings, risers, stepped side cheeks ══
  for (let r = 0; r < 3; r++) {
    const yt = yTread(r), zFront = zf(r);
    // the tread: a plate with five round holes (the stems pass through), extruded down from its top face
    const sh = roundRect(KW, ROW_D, 2);
    for (let k = 0; k < 5; k++) {
      const hole = new THREE.Path();
      // shape coords: x → x, y → −z (the tread's centre at the origin)
      hole.absarc(KX(k), -(ROW_D / 2 - STEM_Z), HOLE_R, 0, Math.PI * 2, true);   // the stem at zf − STEM_Z
      sh.holes.push(hole);
    }
    const tg = new THREE.ExtrudeGeometry(sh, { depth: TREAD_T, bevelEnabled: false, curveSegments: 20 });
    tg.rotateX(-Math.PI / 2);   // shape y → −z, extrusion → +y
    const tread = mesh(tg, brassDark);
    tread.position.set(0, yt - TREAD_T, zFront - ROW_D / 2);
    body.add(tread);
    // the nosing: a half-round rod along the tread's front edge
    const nose = mesh(new THREE.CylinderGeometry(4.2, 4.2, KW, 16), brassBright);
    nose.rotation.z = Math.PI / 2; nose.position.set(0, yt - 4, zFront + 0.5);
    body.add(nose);
    // the riser below it
    // the riser below it: its visible strip (under the tread's nosing) is an embossed running scroll
    const rh = yt - TREAD_T - CAB0;
    const rR = relief(`hk2-riser${r}`, KW, rh, (c) => {
      beadRow(c, 8, 4, KW - 8, 4, 7, 1.5);
      runningScroll(c, 24, KW - 24, 19, 7, 58);
      c.lineWidth = 1.6; c.beginPath(); c.moveTo(6, 33); c.lineTo(KW - 6, 33); c.stroke();
    }, 2, 0);
    const rM = reliefMat(rR, 1.8);
    const riser = rbox(KW, rh, 6, 1.5, { px: brassDark, nx: brassDark, top: brassDark, bottom: brassDark, front: rM, back: brassDark }, 2);
    riser.position.set(0, (CAB0 + yt - TREAD_T) / 2, zFront - 2);
    body.add(riser);
    // a bushing round each hole
    for (let k = 0; k < 5; k++) {
      const bu = mesh(lathe([[HOLE_R, 0], [9.5, 0], [9.5, 2.5], [8, 5], [HOLE_R, 5], [HOLE_R, 0]], 28), brassBright);
      bu.position.set(KX(k), yt, zFront - STEM_Z);
      body.add(bu);
    }
  }
  // the cheeks: the keyboard's stepped side plates
  {
    const s = new THREE.Shape();
    s.moveTo(zC, CAB0);
    s.lineTo(zf(0) + 6, CAB0);
    for (let r = 0; r < 3; r++) {
      s.lineTo(zf(r) + 6, yTread(r) + 3);
      s.lineTo(r < 2 ? zf(r + 1) + 6 : zC, yTread(r) + 3);
    }
    s.lineTo(zC, CAB0);
    const cg = new THREE.ExtrudeGeometry(s, { depth: 8, bevelEnabled: true, bevelThickness: 1, bevelSize: 1, bevelOffset: -1, bevelSegments: 2, curveSegments: 4 });
    // its faces' UVs span the profile's box (z, y), so an embossed border follows the steps
    const z0 = zC, z1 = zf(0) + 6, y0 = CAB0, y1 = yTread(2) + 3;
    { const pos = cg.attributes.position as THREE.BufferAttribute, uv = cg.attributes.uv as THREE.BufferAttribute;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) - z0) / (z1 - z0), (pos.getY(i) - y0) / (y1 - y0)); }
    const CWd = z1 - z0, CHt = y1 - y0;
    const cheekR = relief("hk2-cheek", CWd, CHt, (c) => {
      // canvas x = z − zC, canvas y = y1 − y: beads along the stepped edge, a rosette on each step
      for (let r = 0; r < 3; r++) {
        const xa = zf(r + 1 > 2 ? 3 : r + 1) + 6 - z0, xb = zf(r) + 6 - z0, yy = y1 - (yTread(r) + 3);
        beadRow(c, Math.max(8, xa + 8), yy + 8, xb - 8, yy + 8, 7, 1.7);
        beadRow(c, xb - 8, yy + 8, xb - 8, CHt - 8, 7, 1.7);
        rosette(c, (Math.max(8, xa) + xb) / 2, yy + 26, 10, 8);
      }
      beadRow(c, 8, CHt - 8, CWd - 8, CHt - 8, 7, 1.7);
    }, 3);
    const cheekM = reliefMat(cheekR, 2.6);
    cg.rotateY(-Math.PI / 2);   // shape x → z, shape y → y, extrusion → −x
    for (const x of [KW / 2 + 10, -KW / 2 - 2]) {
      const ch = mesh(cg, [cheekM, brass]);
      ch.position.set(x, 0, 0);
      body.add(ch);
    }
  }

  // ── the keys: each its own object (a stem through its tread's hole, a bezel, a celluloid insert, a glass dome) ──
  const stemG = new THREE.CylinderGeometry(STEM_R, STEM_R, 58, 16);
  const bezelG = lathe([[STEM_R - 0.5, -3], [8, -3], [12, -1.5], [21, -0.5], [24.5, 1.5], [25.5, 4.5], [25, 7.5], [23.5, 8.8], [21.6, 8.4], [21.2, 6.6], [0.01, 6.6]], 48);
  const domeG = lathe(Array.from({ length: 9 }, (_, i) => { const a = (i / 8) * (Math.PI / 2); return [21.3 * Math.cos(a), 6.7 + 3.4 * Math.sin(a)] as [number, number]; }), 48);
  const glassM = new THREE.MeshPhysicalMaterial({ color: col("#ffffff"), roughness: 0.22, metalness: 0, transparent: true, opacity: 0.12, depthWrite: false, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.5 });
  const keys: THREE.Group[] = [];
  const keyRest: number[] = [];
  const legendTex = (label: string) => paintTex(`hk2-key:${label}`, 96, 96, (c) => {
    const gr = c.createRadialGradient(42, 40, 4, 48, 48, 48);
    gr.addColorStop(0, "#FBF8F0"); gr.addColorStop(0.8, "#EFE9DB"); gr.addColorStop(1, "#D9CFBA");
    c.fillStyle = gr; c.beginPath(); c.arc(48, 48, 48, 0, Math.PI * 2); c.fill();
    c.strokeStyle = "rgba(150,40,34,0.85)"; c.lineWidth = 2.2; c.beginPath(); c.arc(48, 48, 41, 0, Math.PI * 2); c.stroke();
    c.fillStyle = "#17110C"; c.textAlign = "center"; c.textBaseline = "middle";
    if (label === "NO SALE") {
      fitFont(c, 800, 22, "SALE", 56);
      c.fillText("NO", 48, 37); c.fillText("SALE", 48, 61);
    } else {
      fitFont(c, 800, label.length === 1 ? 58 : 44, label, 64);
      c.fillText(label, 48, 51);
    }
  }, 4);
  KEY_ROWS.forEach((row, r) => row.forEach((label, k) => {
    const key = new THREE.Group();
    key.userData.obj = `key ${label}`;
    const y0 = yTread(r);
    key.position.set(KX(k), y0, zf(r) - STEM_Z);
    const stem = mesh(stemG, M.chrome());
    stem.position.y = CAP_UP - 29;    // from 24 below the tread's top up into the cap
    key.add(stem);
    const cap = new THREE.Group();
    cap.position.y = CAP_UP;
    cap.rotation.x = TILT;              // the faces lean toward the operator (and the lens)
    key.add(cap);
    cap.add(mesh(bezelG, brassBright));
    const ins = mesh(new THREE.CircleGeometry(21.2, 48), new THREE.MeshPhysicalMaterial({ map: legendTex(label), roughness: 0.38, metalness: 0, envMapIntensity: 0.5 }));
    ins.rotation.x = -Math.PI / 2; ins.position.y = 6.62;
    cap.add(ins);
    const dome = mesh(domeG, glassM, false, false);
    cap.add(dome);
    reg.add(key);
    keys.push(key);
    keyRest.push(y0);
  }));

  // ══ THE CRANK on the right side: a rosette boss, a tapered arm, a turned walnut handle ══
  const crank = new THREE.Group();
  crank.userData.obj = "crank";
  crank.position.set(CRANK.x + 0.4, CRANK.y, CRANK.z);
  reg.add(crank);
  {
    const boss = mesh(lathe([[0.01, 0], [30, 0], [30, 2], [26, 4], [17, 6], [15, 14], [12, 16], [0.01, 16]], 48), brassBright);
    boss.rotation.z = -Math.PI / 2;   // the lathe's axis (+y) → +x
    crank.add(boss);
    const armS = new THREE.Shape();
    armS.moveTo(-10, 0); armS.lineTo(10, 0); armS.lineTo(6.5, -CRANK.arm); armS.absarc(0, -CRANK.arm, 6.5, 0, Math.PI, true); armS.lineTo(-10, 0);
    armS.absarc(0, 0, 10, Math.PI, 0, true);
    const ag = new THREE.ExtrudeGeometry(armS, { depth: 6, bevelEnabled: true, bevelThickness: 1.5, bevelSize: 1.5, bevelSegments: 2 });
    ag.rotateY(Math.PI / 2);     // the plate in the y-z plane, its thickness along +x
    const arm = mesh(ag, brass);
    arm.position.x = 16 + 1.5;
    crank.add(arm);
    const knob = mesh(lathe([[0.01, 0], [6, 0], [7.5, 2], [6, 5], [8.5, 12], [10.5, 22], [10, 32], [7, 40], [0.01, 41]], 32), walnut);
    knob.rotation.z = -Math.PI / 2;
    knob.position.set(25.3, -CRANK.arm, 0);   // seated on the arm's outer face (x 25)
    crank.add(knob);
    const fer = mesh(new THREE.CylinderGeometry(6.6, 6.6, 3, 24), brassBright);
    fer.rotation.z = Math.PI / 2; fer.position.set(26.8, -CRANK.arm, 0);
    crank.add(fer);
  }

  // ══ THE MARQUEE: an embossed front plate with the window cut through it, a hollow case, the tabs' back board ══
  const mqFront = (() => {
    const s = roundRect(MW, MH, 6);
    const hole = new THREE.Path();
    const hx0 = -WINW / 2, hy0 = WIN0 - MQ0 - MH / 2, hy1 = WIN1 - MQ0 - MH / 2;
    hole.moveTo(hx0, hy0); hole.lineTo(hx0, hy1); hole.lineTo(-hx0, hy1); hole.lineTo(-hx0, hy0); hole.lineTo(hx0, hy0);
    s.holes.push(hole);
    return slabOf(s, 10, 1.5, 8);
  })();
  const mqR = relief("hk2-marquee", MW, MH, (c) => {
    // canvas y runs down: the window spans (MH − (WIN1−MQ0)) … (MH − (WIN0−MQ0))
    const wTop = MH - (WIN1 - MQ0), wBot = MH - (WIN0 - MQ0);
    beadRow(c, 10, 8, MW - 10, 8, 8, 1.8);
    beadRow(c, 10, MH - 8, MW - 10, MH - 8, 8, 1.8);
    c.lineWidth = 2.4; c.strokeRect(14, wBot + 8, MW - 28, MH - wBot - 22);
    scrollPair(c, MW / 2, wBot + 46, 560, 70);
    for (const x of [40, MW - 40]) rosette(c, x, wBot + 44, 17);
    void wTop;
  });
  const mqFrontM = reliefMat(mqR, 2);
  const fp = mesh(mqFront, [mqFrontM, brass]);
  fp.position.set(0, MQ0 + MH / 2, zM);
  body.add(fp);
  const backP = rbox(MW, MH, 8, 3, brassDark, 2);
  backP.position.set(0, MQ0 + MH / 2, zM - MD + 8);
  body.add(backP);
  for (const x of [-(MW / 2 - 4), MW / 2 - 4]) {
    const sp = rbox(8, MH, MD - 18, 2, brassDark, 2);
    sp.position.set(x, MQ0 + MH / 2, zM - 10);
    body.add(sp);
  }
  const topP = rbox(MW - 16, 8, MD - 18, 2, brassDark, 2);
  topP.position.set(0, MQ1 - 4, zM - 10);
  body.add(topP);
  const floorP = rbox(MW - 16, 8, MD - 18, 2, brassDark, 2);
  floorP.position.set(0, MQ0 + 4, zM - 10);
  body.add(floorP);
  // the top cap moulding
  const mcap = rbox(MW + 22, 10, MD + 14, 4, brass, 3);
  mcap.position.set(0, MQ1 + 5, zM + 7);
  body.add(mcap);
  const mcap2 = rbox(MW + 8, 5, MD + 4, 2, brassBright, 2);
  mcap2.position.set(0, MQ1 + 12.5, zM + 2);
  body.add(mcap2);
  // the back board (black enamel) the tabs ride on, in their channels
  const liner = rbox(MW - 16, MH - 16, 4, 1, enamelBlack, 1);
  liner.position.set(0, MQ0 + 8 + (MH - 16) / 2, LINER_Z);
  body.add(liner);
  // the window's surround: a polished moulding round the opening, and its glass
  const FR = 11;
  for (const [w, h, x, y] of [
    [WINW + 2 * FR, FR, 0, WIN1 + FR / 2], [WINW + 2 * FR, FR, 0, WIN0 - FR / 2],
    [FR, WIN1 - WIN0, -WINW / 2 - FR / 2, (WIN0 + WIN1) / 2], [FR, WIN1 - WIN0, WINW / 2 + FR / 2, (WIN0 + WIN1) / 2]] as const) {
    const b = rbox(w, h, 6, 3.5, brassBright, 3);
    b.position.set(x, y, zM + 6);
    body.add(b);
  }
  const glassW = mesh(new THREE.PlaneGeometry(WINW + 4, WIN1 - WIN0 + 4), new THREE.MeshPhysicalMaterial({
    color: col("#eef3f6"), roughness: 0.03, metalness: 0, transparent: true, opacity: 0.1, depthWrite: false, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.6 }), false, false);
  glassW.position.set(0, (WIN0 + WIN1) / 2, zM - 10.5);
  body.add(glassW);
  // a glint across the glass (two soft diagonal bands)
  const glintT = (() => {
    const { c, g: gg } = canvasOf(256, 64, 1);
    gg.fillStyle = "#000"; gg.fillRect(0, 0, 256, 64);
    for (const [x, w, a] of [[70, 34, 0.9], [118, 12, 0.6]] as const) {
      const gr = gg.createLinearGradient(x - w, 0, x + w, 0);
      gr.addColorStop(0, "#000"); gr.addColorStop(0.5, `rgba(255,255,255,${a})`); gr.addColorStop(1, "#000");
      gg.save(); gg.translate(x, 32); gg.transform(1, 0, -0.6, 1, 0, 0); gg.fillStyle = gr; gg.fillRect(-w - 40, -40, 2 * w + 80, 80); gg.restore();
    }
    return texOf(c, false);
  })();
  const glint = mesh(new THREE.PlaneGeometry(WINW, WIN1 - WIN0), new THREE.MeshBasicMaterial({ color: 0xffffff, alphaMap: glintT, transparent: true, opacity: 0.09, depthWrite: false, toneMapped: false }), false, false);
  glint.position.set(0, (WIN0 + WIN1) / 2, zM - 10.4);
  body.add(glint);
  // corner screws on the marquee's front plate
  for (const [x, y] of [[-MW / 2 + 12, MQ0 + 16], [MW / 2 - 12, MQ0 + 16], [-MW / 2 + 12, MQ1 - 10], [MW / 2 - 12, MQ1 - 10]] as const) {
    const sc = mesh(lathe([[0.01, 0], [4.6, 0], [4.4, 1.2], [3.4, 2.4], [0.01, 2.9]], 20), brassBright);
    sc.rotation.x = Math.PI / 2; sc.position.set(x, y, zM);
    body.add(sc);
  }

  // ── the tabs: enamel plates, each riding in its channel; one material per figure, swapped while it is down ──
  const tabFace = (ch: string, w: number) => paintTex(`hk2-tab:${ch}:${w}`, w, TH, (c) => {
    const gr = c.createLinearGradient(0, 0, 0, TH);
    gr.addColorStop(0, "#FBF8F1"); gr.addColorStop(1, "#E9E3D5");
    c.fillStyle = gr; c.fillRect(0, 0, w, TH);
    c.strokeStyle = "rgba(40,28,18,0.55)"; c.lineWidth = 1.2; c.strokeRect(2.5, 2.5, w - 5, TH - 5);
    if (ch.trim()) {
      c.fillStyle = "#15100B"; c.textAlign = "center"; c.textBaseline = "middle";
      if (ch === ",") { font(c, 800, 64); c.fillText(",", w / 2, TH * 0.62); }
      else { fitFont(c, 800, 68, ch, w - 9); c.fillText(ch, w / 2, TH / 2 + 3); }
    }
  }, 4);
  const tabEdge = new THREE.MeshPhysicalMaterial({ color: col("#E4DCCB"), roughness: 0.4, clearcoat: 0.5, envMapIntensity: 0.5 });
  const tabs: { g: THREE.Group; plate: THREE.Mesh; mats: THREE.Material[][] }[] = [];
  for (let i = 0; i < SLOTS; i++) {
    const tg = new THREE.Group();
    tg.userData.obj = `tab ${i}`;
    const w = slotW(i);
    const mats = FIGS.map((fig) => {
      const face = new THREE.MeshPhysicalMaterial({ map: tabFace(fig[i], w), roughness: 0.32, clearcoat: 0.6, clearcoatRoughness: 0.2, envMapIntensity: 0.55 });
      return [tabEdge, tabEdge, tabEdge, tabEdge, face, tabEdge];
    });
    const plate = rbox(w, TH, 3, 1.2, tabEdge, 2);
    plate.material = mats[0];
    plate.position.set(0, TH / 2, LINER_Z + 3.5);   // its back 0.5 px off the board
    tg.add(plate);
    tg.position.set(slotX[i], TAB_DOWN, 0);
    reg.add(tg);
    tabs.push({ g: tg, plate, mats });
  }

  // ══ THE CREST: an arched, embossed brass crest on the marquee, an urn finial at each corner ══
  {
    const CW = 430, CH = 58;
    const s = new THREE.Shape();
    s.moveTo(-CW / 2, 0); s.lineTo(CW / 2, 0);
    s.bezierCurveTo(CW / 2, 22, CW / 2 - 40, 30, CW / 2 - 78, 30);
    s.bezierCurveTo(CW / 2 - 110, 30, CW / 2 - 120, 44, 90, 50);
    s.bezierCurveTo(50, 60, 20, CH, 0, CH);
    s.bezierCurveTo(-20, CH, -50, 60, -90, 50);
    s.bezierCurveTo(-(CW / 2 - 120), 44, -(CW / 2 - 110), 30, -(CW / 2 - 78), 30);
    s.bezierCurveTo(-(CW / 2 - 40), 30, -CW / 2, 22, -CW / 2, 0);
    const cR = relief("hk2-crest", CW, CH + 4, (c) => {
      const H = CH + 4;
      // canvas y down; the crest's base is at H
      scrollPair(c, CW / 2, H - 25, 400, 44);
      beadRow(c, 12, H - 4, CW - 12, H - 4, 8, 1.6);
    }, 3);
    const cg = slabOf(s, 12, 2, 24);
    const crest = mesh(cg, [reliefMat(cR, 2.4), brass]);
    crest.position.set(0, MQ1 + 15, zM - 22);
    body.add(crest);
    for (const x of [-(MW / 2 - 6), MW / 2 - 6]) {
      const urn = mesh(lathe([[0.01, 0], [12, 0], [12, 3], [8, 5], [7, 8], [12, 15], [14, 21], [12, 27], [6, 31], [5.5, 34], [8, 36], [3, 42], [0.01, 46]], 32), brassBright);
      urn.position.set(x, MQ1 + 15, zM - 20);
      body.add(urn);
    }
  }

  // ══ THE FLOOR, and the contact shadows that follow the drop ══
  const floor = makeFloor({ y: g.floor, x0: g.cx - 900, x1: g.cx + 900, z0: -600, z1: 700, reflect: 0.14, shadow: 0.55, fadeC: [g.cx, g.z], fadeR: [780, 460] });
  root.add(floor);
  // ★ the cast shadow comes in as the register nears the floor (high up, a hard slab of shadow far off to one side read as
  //   a separate dark object; a real one high over a floor under a broad key is faint and diffuse)
  const catcher = floor.children.map((o) => (o as THREE.Mesh).material).find((m) => m instanceof THREE.ShadowMaterial) as THREE.ShadowMaterial;
  const catcher0 = catcher.opacity;
  const shadows = new THREE.Group();
  shadows.userData.isFloor = true; shadows.userData.noBounds = true;
  shadows.position.set(g.cx, FY + 0.3, g.z);
  root.add(shadows);
  const blob = (tex: THREE.Texture, w: number, d: number, x: number, z: number) => {
    const m = new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: tex, transparent: true, depthWrite: false, toneMapped: false, opacity: 0 });
    const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), m);
    p.rotation.x = -Math.PI / 2; p.position.set(x, 0, z); p.renderOrder = 1.5;
    shadows.add(p);
    return p;
  };
  const pen = blob(softTex(), 900, 700, 0, -50);                 // the wide, soft penumbra
  const umb = blob(footTex(0.16), 760, 560, 0, -60);              // the tight footprint under the plinth
  const feet = ([[-330, 168], [330, 168], [-330, -290], [330, -290]] as const).map(([x, z]) => blob(softTex(), 70, 70, x, z));

  // ── the dust: soft motes pushed out from under the plinth on impact ──
  const dustT = softTex();
  const motes = Array.from({ length: 26 }, (_, i) => {
    const m = new THREE.MeshBasicMaterial({ color: col("#7d6d5c"), alphaMap: dustT, transparent: true, depthWrite: false, opacity: 0, toneMapped: false });
    const p = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), m);
    p.renderOrder = 3;
    shadows.add(p);
    // where it starts on the plinth's rim, and which way it goes (front and sides only: the back is unseen)
    const side = i % 3, u = hash(i, 31, 5) * 2 - 1;
    const sx = side === 0 ? u * 340 : side === 1 ? 360 : -360, sz = side === 0 ? 210 : -60 + u * 230;
    const dx = side === 0 ? u * 0.4 : side === 1 ? 1 : -1, dz = side === 0 ? 1 : u * 0.3;
    return { p, m, sx, sz, dx, dz, v: 40 + 70 * hash(i, 32, 5), s0: 26 + 30 * hash(i, 33, 5), rise: 6 + 20 * hash(i, 34, 5), a: 0.035 + 0.05 * hash(i, 35, 5), lag: 1.5 * hash(i, 36, 5) };
  });

  const paintAll = () => {
    for (const label of KEY_IDS) legendTex(label);
    for (let i = 0; i < SLOTS; i++) for (const fig of FIGS) tabFace(fig[i], slotW(i));
  };
  void rad;

  return {
    root,
    update: (p) => {
      paintAll();   // ★ cached: repaints a texture only if it was first painted before the faces loaded
      const yaw = rad(p.yaw);
      reg.rotation.y = yaw;
      shadows.rotation.y = yaw;
      reg.position.y = FY + p.drop;
      // ★ the impact: the whole register compresses about its feet, bulging a little at the sides (volume kept)
      reg.scale.set(1 + p.sq * 0.45, 1 - p.sq, 1 + p.sq * 0.45);
      keys.forEach((k, i) => { k.position.y = keyRest[i] - (p.keys[i] ?? 0); });
      tabs.forEach((t, i) => {
        t.g.position.y = TAB_DOWN + TAB_RISE * Math.max(0, p.tabs[i] ?? 0);
        t.plate.material = t.mats[p.fig >= 0.5 ? 1 : 0];
      });
      crank.rotation.x = -p.crank;
      // ★ contact shadows: high up, only a wide faint penumbra; as it nears the floor the penumbra tightens and darkens and
      //   the footprint's umbra and each foot's contact pool come in
      const h = Math.max(0, p.drop);
      catcher.opacity = catcher0 * Math.max(0, 1 - h / 520) ** 2;
      const near = Math.max(0, 1 - h / 1300);
      const pw = 1 + h / 900;
      pen.scale.set(pw, 1, pw);
      (pen.material as THREE.MeshBasicMaterial).opacity = 0.42 * near * near;
      const u = Math.max(0, 1 - h / 240);
      umb.scale.set(1.12 - 0.12 * u, 1, 1.12 - 0.12 * u);
      (umb.material as THREE.MeshBasicMaterial).opacity = 0.62 * u * u;
      const fu = Math.max(0, 1 - h / 40);
      for (const ft of feet) { ft.scale.setScalar(1.6 - 0.6 * fu); (ft.material as THREE.MeshBasicMaterial).opacity = 0.75 * fu * fu; }
      // dust
      for (const d of motes) {
        const t = p.dust - d.lag;
        if (t <= 0 || t > 34) { d.m.opacity = 0; d.p.visible = false; continue; }
        d.p.visible = true;
        const go = 1 - Math.exp(-t / 7);
        d.p.position.set(d.sx + d.dx * d.v * go, 6 + d.rise * go, d.sz + d.dz * d.v * go);
        d.p.rotation.y = -yaw;
        d.p.scale.setScalar(d.s0 * (1 + 1.6 * go));
        d.m.opacity = d.a * Math.min(1, t / 2.5) * Math.max(0, 1 - t / 34) ** 1.4;
      }
    },
  };
};
