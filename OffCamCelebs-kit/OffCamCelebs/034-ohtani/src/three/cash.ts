// ══════════════════════════════════════════════════════════════════════════════════════════════
// ★★★★ REAL MONEY — strapped bundles of banknotes (the user, 2026-10-23, 034: "The cash stacks should look more realistic.
// They should actually have the cash texture on them. And it needs to look like a real stack, not some sort of block with a
// drawing on it"). Shared by THE REAL VALUE (the scale's deck) and THE VERDICT (the pile beside the contract).
//
// ONE BUNDLE ("strap") is a hundred $100 notes, modelled from the real thing (a note 156 × 66 mm, 0.11 mm thick: a strap of
// 100 is ≈ 11 mm; the ABA's mustard $10,000 strap is 1¼" wide, kraft paper, wrapped once round the middle):
//   · the CORE: the body of the notes, a box whose four sides are displaced row by row (each layer of sheets sits a fraction
//     proud of or behind its neighbours) and carry a fine side texture of sheet edges, the paper's cream core with the
//     green of the print bleeding at the edges; the strap pinches the middle, so the ends puff up (the top rises toward them);
//   · the TOP NOTES: the last four notes are separate thin sheets (a face, a back and an edge band), each a little turned and
//     shifted, so their edges step out at the ends; they follow the pinch;
//   · the STRAP: a mustard kraft band, one thin loop round notes and core, printed $10,000 on its top;
//   · the FACE: a procedurally engraved note in the US style, generic (not a copy of any series): grey-green paper with fibres,
//     a guilloche border, a portrait oval with a shaded, line-engraved bust, a black seal, a green spiked seal, green serials,
//     the denomination in the corners, a faint large 100.
// PERFORMANCE: every geometry and material is built once and SHARED (three core variants, three note shapes, one strap);
// a bundle is 7 meshes, its thousands of sheet edges a texture on the core.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, mesh, paintTex } from "./stage";
import { hash, font } from "./kit029";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

/** a bundle's size (world px = layer px): W the note's length (x), D its width (z) */
export const NOTE = { W: 240, D: 102 } as const;
const CORE = 15.2;            // the body of ~96 notes
const NT = 0.62, NG = 0.14;   // a top note's thickness, and the air between sheets
const NTOP = 4;               // the separate top notes
const BT = 0.45;              // the strap's thickness
const BW = 46;                // the strap's width (1¼" of a 6.14" note)
const BX = -0.27 * NOTE.W;    // the strap sits left of centre (straps slide; the portrait stays clear)
const PINCH = 1.05;           // the ends puff up by this much over the strap's line
const CLR = 2.4;              // the strap's clearance round the notes' sides (jitter + turned top notes)
const SER = "#2D7A55", INK = "#1E3326";
const MUSTARD = "#D9B44A";

/** 0 under the strap, 1 toward the ends: the puff of a strapped bundle */
const puff = (x: number) => {
  const d = Math.max(0, Math.abs(x - BX) - BW / 2 - 6) / 70;
  const s = Math.min(1, d);
  return PINCH * s * s * (3 - 2 * s);
};
const coreTop = (x: number) => BT + 0.15 + CORE + puff(x);
/** bottom of top note k at x */
const noteY = (k: number, x: number) => coreTop(x) + NG + k * (NT + NG);
/** the strap's inner top: over the notes where it crosses them (flat there) */
const STRAP_TOP = noteY(NTOP, BX) - NG + 0.25;   // top of the last note (its ripple ≤ 0.03 there) + clearance
/** ★ the bundle's height: its highest point (the puffed ends' top note, or the strap) — a bundle above sits 0.3 over it */
export const BUNDLE_H = Math.max(STRAP_TOP + BT, noteY(NTOP - 1, NOTE.W / 2) + NT + 0.2);

// ── the textures ──
const RNG = (s: number) => { let x = s * 9301 + 49297; return () => { x = (x * 9301 + 49297) % 233280; return x / 233280; }; };

/** ★ the note's FACE: generic US-style engraving, painted once (512 × 218 at ×2) */
const faceTex = () => paintTex("cash-face-v2", 512, 218, (g) => {
  const W = 512, H = 218, r = RNG(7);
  // the paper: grey-green, a little uneven, with red and blue security fibres
  g.fillStyle = "#CBD3BA"; g.fillRect(0, 0, W, H);
  const pg = g.createRadialGradient(W * 0.5, H * 0.5, 20, W * 0.5, H * 0.5, W * 0.6);
  pg.addColorStop(0, "rgba(236,238,220,0.55)"); pg.addColorStop(1, "rgba(150,165,135,0.25)");
  g.fillStyle = pg; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 260; i++) {
    g.strokeStyle = i % 2 ? "rgba(170,40,40,0.35)" : "rgba(40,60,160,0.3)"; g.lineWidth = 0.35;
    const x = r() * W, y = r() * H, a = r() * 6.28;
    g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + Math.cos(a) * 3, y + Math.sin(a) * 3 + 1, x + Math.cos(a) * 6, y + Math.sin(a) * 5); g.stroke();
  }
  // a pale green background tint panel (the note's "green" printing)
  g.fillStyle = "rgba(120,160,120,0.13)"; g.fillRect(14, 14, W - 28, H - 28);
  // ── the guilloche border: a band of interlaced sine lines all round, between two rules ──
  const bi = 9, bo = 22;   // its inner and outer inset
  g.strokeStyle = INK; g.lineWidth = 1.1; g.strokeRect(bi, bi, W - 2 * bi, H - 2 * bi);
  g.lineWidth = 0.7; g.strokeRect(bo, bo, W - 2 * bo, H - 2 * bo);
  g.save();
  g.beginPath(); g.rect(bi, bi, W - 2 * bi, H - 2 * bi); g.rect(bo, H - bo, W - 2 * bo, -(H - 2 * bo)); g.clip("evenodd");
  g.lineWidth = 0.42; g.strokeStyle = "rgba(25,50,35,0.85)";
  const per = 2 * (W + H);
  for (let k = 0; k < 7; k++) {
    g.beginPath();
    for (let s = 0; s <= per; s += 1.2) {
      // walk the perimeter at the band's middle, offset across the band by two beating sines
      const m = (bi + bo) / 2, hw = (bo - bi) / 2 - 0.8;
      const off = hw * (0.62 * Math.sin(s * 0.21 + k * 0.9) + 0.38 * Math.sin(s * 0.047 - k * 1.7));
      let x, y;
      if (s < W) { x = s; y = m + off; } else if (s < W + H) { x = W - m - off; y = s - W; } else if (s < 2 * W + H) { x = W - (s - W - H); y = H - m - off; } else { x = m + off; y = H - (s - 2 * W - H); }
      if (s === 0) g.moveTo(x, y); else g.lineTo(x, y);
    }
    g.stroke();
  }
  g.restore();
  // ── a rosette: concentric epitrochoids (corner numerals and seals sit on them) ──
  const rosette = (cx: number, cy: number, R: number, n: number, col: string, lw = 0.4) => {
    g.save(); g.strokeStyle = col; g.lineWidth = lw;
    for (let k = 0; k < 5; k++) {
      g.beginPath();
      for (let t = 0; t <= Math.PI * 2 + 0.01; t += 0.02) {
        const rr = R * (0.72 + 0.28 * Math.cos(n * t + k * 0.6)) - k * 1.2;
        const x = cx + Math.cos(t) * rr, y = cy + Math.sin(t) * rr;
        if (t === 0) g.moveTo(x, y); else g.lineTo(x, y);
      }
      g.closePath(); g.stroke();
    }
    g.restore();
  };
  // ── the corner numerals ──
  g.fillStyle = INK; g.textBaseline = "middle"; g.textAlign = "center";
  for (const [x, y, s] of [[50, 44, 24], [W - 50, 44, 24], [50, H - 42, 24], [W - 50, H - 42, 27]] as const) {
    rosette(x, y, 24, 12, "rgba(30,60,40,0.55)");
    g.fillStyle = "rgba(203,211,186,0.85)"; g.beginPath(); g.ellipse(x, y, 25, 15, 0, 0, Math.PI * 2); g.fill();
    g.fillStyle = INK; font(g, 800, s); g.fillText("100", x, y + 1);
  }
  // ── the lettering ──
  const serif = (w: number, s: number) => { g.font = `${w} ${s}px "Times New Roman", "Liberation Serif", serif`; };
  g.fillStyle = INK; serif(700, 15);
  (g as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "1.5px";
  g.fillText("FEDERAL RESERVE NOTE", W / 2, 33);
  serif(700, 11.5); g.fillText("THE UNITED STATES OF AMERICA", W / 2, 50);
  serif(700, 14); g.fillText("ONE HUNDRED DOLLARS", W / 2, H - 30);
  (g as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "0px";
  serif(400, 6.5);
  g.fillText("THIS NOTE IS LEGAL TENDER FOR ALL DEBTS, PUBLIC AND PRIVATE", W * 0.27, 70);
  // ── the portrait oval: a frame of fine rings, the engraved ground, a shaded bust ──
  const ox = W * 0.5, oy = H * 0.5 + 4, rx = 52, ry = 66;
  rosette(ox, oy, ry + 9, 36, "rgba(30,60,40,0.4)", 0.35);
  g.save();
  g.beginPath(); g.ellipse(ox, oy, rx, ry, 0, 0, Math.PI * 2); g.clip();
  g.fillStyle = "#D9DEC9"; g.fillRect(ox - rx, oy - ry, 2 * rx, 2 * ry);
  // the ground: fine horizontal engraving, darker toward the oval's right (the key from the left)
  for (let y = oy - ry; y < oy + ry; y += 1.15) {
    const gr = g.createLinearGradient(ox - rx, 0, ox + rx, 0);
    gr.addColorStop(0, "rgba(20,40,28,0.18)"); gr.addColorStop(1, "rgba(20,40,28,0.55)");
    g.strokeStyle = gr; g.lineWidth = 0.38; g.beginPath(); g.moveTo(ox - rx, y); g.lineTo(ox + rx, y); g.stroke();
  }
  // ── the bust, engraved: a generic gentleman in three-quarter view facing left (coat, stock, long hair, a modelled face) ──
  const hatch = (clip: Path2D, step: number, ang: number, col: string, lw: number, curve = 0) => {
    g.save(); g.clip(clip); g.strokeStyle = col; g.lineWidth = lw;
    const c = Math.cos(ang), s2 = Math.sin(ang);
    for (let k = -110; k <= 110; k += step) {
      g.beginPath();
      for (let t = -110; t <= 110; t += 6) { const bend = curve * (t / 110) ** 2 * 10; const x = ox + c * t - s2 * (k + bend), y = oy + s2 * t + c * (k + bend); if (t === -110) g.moveTo(x, y); else g.lineTo(x, y); }
      g.stroke();
    }
    g.restore();
  };
  // the coat: broad shoulders, dark, cross-hatched, its left (lit) edge lighter
  const coat = new Path2D();
  coat.moveTo(ox - rx - 6, oy + ry + 6); coat.bezierCurveTo(ox - rx, oy + 34, ox - 34, oy + 20, ox - 16, oy + 14);
  coat.lineTo(ox + 14, oy + 8); coat.bezierCurveTo(ox + 34, oy + 16, ox + rx, oy + 34, ox + rx + 6, oy + ry + 6); coat.closePath();
  g.fillStyle = "rgba(28,46,34,0.55)"; g.fill(coat);
  hatch(coat, 1.3, 0.6, "rgba(12,24,16,0.75)", 0.45); hatch(coat, 1.9, -0.5, "rgba(12,24,16,0.45)", 0.35);
  const lapel = new Path2D(); lapel.moveTo(ox - 30, oy + 22); lapel.quadraticCurveTo(ox - 22, oy + 40, ox - 10, oy + ry); lapel.lineTo(ox - 40, oy + ry); lapel.closePath();
  g.fillStyle = "rgba(210,218,196,0.35)"; g.fill(lapel);
  // the stock and shirt front: white, a few fold lines
  const stock = new Path2D(); stock.moveTo(ox - 17, oy + 12); stock.quadraticCurveTo(ox - 8, oy + 20, ox + 4, oy + 12); stock.lineTo(ox + 2, oy + 34); stock.quadraticCurveTo(ox - 8, oy + 40, ox - 16, oy + 32); stock.closePath();
  g.fillStyle = "#E4E8D8"; g.fill(stock);
  g.strokeStyle = "rgba(20,36,26,0.45)"; g.lineWidth = 0.4;
  for (const d of [0, 4, 8]) { g.beginPath(); g.moveTo(ox - 14 + d, oy + 18); g.quadraticCurveTo(ox - 10 + d, oy + 26, ox - 12 + d, oy + 34); g.stroke(); }
  // the hair: a full mass from the crown down the back to the collar, wavy strokes, dark
  const hair = new Path2D();
  hair.moveTo(ox - 22, oy - 30); hair.bezierCurveTo(ox - 22, oy - 52, ox + 2, oy - 60, ox + 16, oy - 50);
  hair.bezierCurveTo(ox + 30, oy - 40, ox + 30, oy - 10, ox + 26, oy + 6); hair.bezierCurveTo(ox + 22, oy + 14, ox + 10, oy + 14, ox + 6, oy + 6);
  hair.bezierCurveTo(ox + 4, oy - 14, ox - 6, oy - 30, ox - 22, oy - 30); hair.closePath();
  g.fillStyle = "rgba(30,48,36,0.5)"; g.fill(hair);
  g.save(); g.clip(hair); g.strokeStyle = "rgba(10,22,14,0.7)"; g.lineWidth = 0.45;
  for (let k = 0; k < 26; k++) { g.beginPath(); const x0 = ox - 18 + k * 1.8; g.moveTo(x0, oy - 58); g.bezierCurveTo(x0 + 8, oy - 40, x0 - 2, oy - 20, x0 + 6, oy + 12); g.stroke(); }
  g.restore();
  // the face: lit from the left, the right side modelled by curved hatching, the features in fine line
  const face = new Path2D();
  face.moveTo(ox - 20, oy - 34); face.bezierCurveTo(ox - 10, oy - 44, ox + 6, oy - 40, ox + 8, oy - 26);
  face.bezierCurveTo(ox + 10, oy - 12, ox + 6, oy, ox - 2, oy + 6); face.bezierCurveTo(ox - 8, oy + 10, ox - 16, oy + 6, ox - 19, oy - 2);
  face.lineTo(ox - 23, oy - 12); face.lineTo(ox - 20, oy - 17); face.bezierCurveTo(ox - 24, oy - 22, ox - 24, oy - 30, ox - 20, oy - 34); face.closePath();
  g.fillStyle = "#E2E6D4"; g.fill(face);
  g.save(); g.clip(face);
  const sh = g.createLinearGradient(ox - 20, 0, ox + 9, 0); sh.addColorStop(0, "rgba(20,38,26,0)"); sh.addColorStop(0.55, "rgba(20,38,26,0.12)"); sh.addColorStop(1, "rgba(20,38,26,0.5)");
  g.fillStyle = sh; g.fillRect(ox - 30, oy - 50, 50, 60);
  g.restore();
  hatch(face, 1.4, 1.35, "rgba(16,32,22,0.28)", 0.35, 1);
  g.strokeStyle = "rgba(14,26,18,0.85)"; g.lineCap = "round";
  g.lineWidth = 0.7; g.beginPath(); g.moveTo(ox - 18, oy - 27); g.quadraticCurveTo(ox - 13, oy - 30, ox - 8, oy - 27); g.stroke();   // brow
  g.beginPath(); g.moveTo(ox - 3, oy - 27); g.quadraticCurveTo(ox + 1, oy - 29, ox + 4, oy - 26); g.stroke();
  g.fillStyle = "rgba(14,26,18,0.9)"; g.beginPath(); g.ellipse(ox - 13, oy - 23.5, 2.2, 1, 0, 0, Math.PI * 2); g.fill();   // eyes
  g.beginPath(); g.ellipse(ox + 0.5, oy - 23, 1.6, 0.9, 0, 0, Math.PI * 2); g.fill();
  g.lineWidth = 0.6; g.beginPath(); g.moveTo(ox - 6, oy - 24); g.quadraticCurveTo(ox - 9, oy - 16, ox - 11, oy - 12); g.quadraticCurveTo(ox - 7, oy - 11, ox - 5, oy - 13); g.stroke();   // nose
  g.beginPath(); g.moveTo(ox - 14, oy - 5); g.quadraticCurveTo(ox - 9, oy - 3, ox - 4, oy - 5); g.stroke();   // mouth
  g.lineWidth = 0.45; g.beginPath(); g.moveTo(ox - 16, oy - 1); g.quadraticCurveTo(ox - 10, oy + 4, ox - 4, oy + 1); g.stroke();   // chin
  g.lineWidth = 0.6; g.stroke(face);
  g.restore();
  g.strokeStyle = INK; g.lineWidth = 1.4; g.beginPath(); g.ellipse(ox, oy, rx, ry, 0, 0, Math.PI * 2); g.stroke();
  g.lineWidth = 0.5; g.beginPath(); g.ellipse(ox, oy, rx + 4, ry + 4, 0, 0, Math.PI * 2); g.stroke();
  // ── the black seal (left) ──
  const sx = W * 0.23, sy = H * 0.56;
  g.fillStyle = "rgba(20,24,22,0.9)"; g.beginPath(); g.arc(sx, sy, 21, 0, Math.PI * 2); g.fill();
  g.strokeStyle = "rgba(203,211,186,0.9)"; g.lineWidth = 0.6;
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 30) { g.beginPath(); g.moveTo(sx + Math.cos(a) * 15, sy + Math.sin(a) * 15); g.lineTo(sx + Math.cos(a) * 19, sy + Math.sin(a) * 19); g.stroke(); }
  g.beginPath(); g.arc(sx, sy, 13, 0, Math.PI * 2); g.stroke();
  g.fillStyle = "rgba(203,211,186,0.95)"; font(g, 800, 15); g.fillText("B", sx, sy + 1);
  // ── the green spiked seal (right) ──
  const tx = W * 0.77, ty = H * 0.6;
  g.fillStyle = SER; g.beginPath();
  for (let i = 0; i <= 64; i++) { const a = (i / 64) * Math.PI * 2, rr = i % 2 ? 17 : 21; if (i === 0) g.moveTo(tx + Math.cos(a) * rr, ty + Math.sin(a) * rr); else g.lineTo(tx + Math.cos(a) * rr, ty + Math.sin(a) * rr); }
  g.closePath(); g.fill();
  g.fillStyle = "#CBD3BA"; g.beginPath(); g.arc(tx, ty, 13, 0, Math.PI * 2); g.fill();
  g.strokeStyle = SER; g.lineWidth = 1.1; g.beginPath(); g.moveTo(tx - 7, ty - 7); g.lineTo(tx + 7, ty - 7); g.lineTo(tx + 6, ty + 3); g.quadraticCurveTo(tx, ty + 10, tx - 6, ty + 3); g.closePath(); g.stroke();
  g.beginPath(); g.moveTo(tx - 7, ty - 1); g.lineTo(tx + 7, ty - 1); g.stroke();
  // ── the serials (green), the faint large 100, the signatures ──
  g.fillStyle = SER; g.font = `700 13px "Courier New", "Liberation Mono", monospace`;
  g.fillText("LB 47201936 C", W * 0.2, H * 0.3);
  g.fillText("LB 47201936 C", W * 0.77, H * 0.8);
  g.fillStyle = "rgba(30,60,40,0.16)"; font(g, 800, 58); g.fillText("100", W * 0.78, H * 0.34);
  g.strokeStyle = "rgba(20,30,24,0.8)"; g.lineWidth = 0.7;
  for (const [x0, y0] of [[W * 0.31, H * 0.79], [W * 0.62, H * 0.79]] as const) {
    g.beginPath(); g.moveTo(x0, y0);
    for (let t = 0; t < 1; t += 0.02) g.lineTo(x0 + t * 46, y0 + Math.sin(t * 19) * 3.2 * (1 - t) - t * 3);
    g.stroke();
    g.lineWidth = 0.4; g.beginPath(); g.moveTo(x0 - 4, y0 + 7); g.lineTo(x0 + 50, y0 + 7); g.stroke(); g.lineWidth = 0.7;
  }
  // wear: a soft fold across the middle and grime at the edges
  const fg = g.createLinearGradient(W * 0.5 - 6, 0, W * 0.5 + 6, 0);
  fg.addColorStop(0, "rgba(255,255,255,0)"); fg.addColorStop(0.5, "rgba(80,90,70,0.10)"); fg.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = fg; g.fillRect(W * 0.5 - 6, 0, 12, H);
}, 2);

/** ★ the core's SIDES: hundreds of sheet edges — the paper's cream core, the print's green at the margins, a dark line of
 *  shadow between sheets — painted once (the v axis runs up the stack) */
const sideTex = () => paintTex("cash-side-v2", 256, 128, (g) => {
  const r = RNG(3);
  g.fillStyle = "#E9EADA"; g.fillRect(0, 0, 256, 128);
  let y = 0;
  while (y < 128) {
    const h = 0.7 + r() * 0.7;
    const tone = r();
    g.fillStyle = tone < 0.12 ? "rgba(90,115,88,0.32)" : tone < 0.45 ? "rgba(170,188,155,0.32)" : tone < 0.85 ? "rgba(246,246,234,0.55)" : "rgba(214,222,200,0.5)";
    g.fillRect(0, y, 256, h);
    // the shadow line under each sheet, wavering a little along its length
    g.strokeStyle = "rgba(50,66,50,0.2)"; g.lineWidth = 0.3;
    g.beginPath(); const ph = r() * 6, am = 0.15 + r() * 0.25;
    for (let x = 0; x <= 256; x += 8) { const yy = y + h + Math.sin(x * 0.05 + ph) * am; if (x === 0) g.moveTo(x, yy); else g.lineTo(x, yy); }
    g.stroke();
    y += h;
  }
  // grime and handling along the length
  for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(90,100,80,${0.04 + r() * 0.05})`; g.fillRect(r() * 256, 0, 2 + r() * 10, 128); }
}, 2);

const bandTex = () => paintTex("cash-strap-v1", 96, 220, (g) => {
  // the strap's top: kraft mustard, its fibre, two rules and "$10,000" read along the strap
  g.fillStyle = MUSTARD; g.fillRect(0, 0, 96, 220);
  const r = RNG(11);
  for (let i = 0; i < 300; i++) { g.fillStyle = `rgba(${r() > 0.5 ? "120,85,20" : "250,225,140"},${0.08 + r() * 0.1})`; g.fillRect(r() * 96, r() * 220, 0.6 + r() * 2.5, 0.5); }
  g.fillStyle = "rgba(60,40,10,0.75)"; g.fillRect(6, 0, 1.2, 220); g.fillRect(89, 0, 1.2, 220);
  g.save(); g.translate(48, 110); g.rotate(-Math.PI / 2);
  g.fillStyle = "#2B1E0B"; g.textAlign = "center"; g.textBaseline = "middle";
  g.font = `800 34px "Archivo", sans-serif`; g.fillText("$10,000", 0, 2);
  g.restore();
}, 3);

// ── the shared materials ──
let mats: { face: THREE.Material; side: THREE.Material; back: THREE.Material; edge: THREE.Material; band: THREE.Material; bandTop: THREE.Material } | null = null;
const materials = () => {
  if (mats) return mats;
  const face = new THREE.MeshStandardMaterial({ map: faceTex(), roughness: 0.82, metalness: 0, envMapIntensity: 0.35 });
  const side = new THREE.MeshStandardMaterial({ map: sideTex(), roughness: 0.9, metalness: 0, envMapIntensity: 0.35 });
  const back = new THREE.MeshStandardMaterial({ color: new THREE.Color("#A9B79A"), roughness: 0.85, envMapIntensity: 0.35 });
  const edge = new THREE.MeshStandardMaterial({ color: new THREE.Color("#E6E5D2"), roughness: 0.9, envMapIntensity: 0.35, side: THREE.DoubleSide });
  const band = new THREE.MeshStandardMaterial({ color: new THREE.Color(MUSTARD), roughness: 0.8, envMapIntensity: 0.35 });
  const bandTop = new THREE.MeshStandardMaterial({ map: bandTex(), roughness: 0.8, envMapIntensity: 0.35, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
  mats = { face, side, back, edge, band, bandTop };
  return mats;
};

// ── the shared geometries ──
/** the core: a box whose sides step row by row (sheets a fraction proud or behind), its top puffed toward the ends */
const coreGeo = (seed: number) => {
  const { W, D } = NOTE;
  const g = new THREE.BoxGeometry(W, CORE, D, 6, 12, 2);   // ★ lean: rows for the sheets' steps, few columns (the audit's FLOAT compares triangles pairwise)
  g.translate(0, CORE / 2 + BT + 0.15, 0);
  const p = g.attributes.position as THREE.BufferAttribute;
  const y0 = BT + 0.15;
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const f = (y - y0) / CORE;                      // 0 at the bottom, 1 at the top
    const row = Math.round(f * 12);
    const jit = (a: number) => (hash(row, seed, 1) - 0.5) * 0.8 + 0.2 * Math.sin(a * 0.06 + row * 1.7 + seed);
    if (f > 0.001) {
      if (Math.abs(Math.abs(x) - W / 2) < 0.01) x += Math.sign(x) * jit(z + 3) * Math.min(1, f * 6);
      if (Math.abs(Math.abs(z) - D / 2) < 0.01) z += Math.sign(z) * jit(x) * Math.min(1, f * 6);
    }
    y = y0 + (y - y0) * ((CORE + puff(x)) / CORE);
    p.setXYZ(i, x, y, z);
  }
  g.computeVertexNormals();
  return g;
};
/** one top note: a face, a back and an edge band, following the bundle's puff and a faint ripple of its own */
const noteGeo = (seed: number) => {
  const { W, D } = NOTE;
  const sx = 16, sz = 2;
  // ★ the ripple only ever LIFTS a note (never below its bed): a bundle's notes share one shape, so they nest
  const surf = (x: number, z: number) => puff(x) + 0.2 * (0.5 + 0.5 * Math.sin(x * 0.045 + seed * 2.1) * Math.cos(z * 0.05 + seed)) * Math.min(1, puff(x) / PINCH + 0.15);
  const pos: number[] = [], nrm: number[] = [], uv: number[] = [], idx: number[] = [];
  const groups: [number, number, number][] = [];
  const grid = (dy: number, flip: boolean) => {
    const base = pos.length / 3, start = idx.length;
    for (let j = 0; j <= sz; j++) for (let i = 0; i <= sx; i++) {
      const x = -W / 2 + (W * i) / sx, z = -D / 2 + (D * j) / sz;
      pos.push(x, surf(x, z) + dy, z); nrm.push(0, flip ? -1 : 1, 0); uv.push(i / sx, 1 - j / sz);
    }
    for (let j = 0; j < sz; j++) for (let i = 0; i < sx; i++) {
      const a = base + j * (sx + 1) + i, b = a + 1, c = a + sx + 1, d = c + 1;
      if (flip) idx.push(a, b, c, b, d, c); else idx.push(a, c, b, b, c, d);
    }
    return [start, idx.length - start] as const;
  };
  const [s0, n0] = grid(NT, false);
  groups.push([s0, n0, 0]);
  const [s1, n1] = grid(0, true);
  groups.push([s1, n1, 1]);
  // the edge band round the perimeter
  const ring: [number, number][] = [];
  for (let i = 0; i <= sx; i++) ring.push([-W / 2 + (W * i) / sx, -D / 2]);
  for (let j = 1; j <= sz; j++) ring.push([W / 2, -D / 2 + (D * j) / sz]);
  for (let i = sx - 1; i >= 0; i--) ring.push([-W / 2 + (W * i) / sx, D / 2]);
  for (let j = sz - 1; j >= 1; j--) ring.push([-W / 2, -D / 2 + (D * j) / sz]);
  const es = idx.length;
  for (let k = 0; k < ring.length; k++) {
    const [ax, az] = ring[k], [bx, bz] = ring[(k + 1) % ring.length];
    const base = pos.length / 3;
    const nx = bz - az, nz = -(bx - ax), nl = Math.hypot(nx, nz) || 1;
    for (const [x, z, dy] of [[ax, az, NT], [bx, bz, NT], [bx, bz, 0], [ax, az, 0]] as const) {
      pos.push(x, surf(x, z) + dy, z); nrm.push(-nx / nl, 0, -nz / nl); uv.push(0, 0);
    }
    idx.push(base, base + 2, base + 1, base, base + 3, base + 2);
  }
  groups.push([es, idx.length - es, 2]);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("normal", new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  for (const [s, n, m] of groups) g.addGroup(s, n, m);
  g.computeVertexNormals();
  return g;
};
/** the strap: one thin loop (top, bottom and two sides) round the notes, at the strap's line */
const strapGeo = () => {
  const hz = NOTE.D / 2 + CLR;   // inner half-width
  const top = STRAP_TOP;
  const parts = [
    new THREE.BoxGeometry(BW, BT, 2 * (hz + BT)).translate(0, BT / 2, 0),
    new THREE.BoxGeometry(BW, BT, 2 * (hz + BT)).translate(0, top + BT / 2, 0),
    new THREE.BoxGeometry(BW, top - BT, BT).translate(0, BT + (top - BT) / 2, hz + BT / 2),
    new THREE.BoxGeometry(BW, top - BT, BT).translate(0, BT + (top - BT) / 2, -hz - BT / 2),
  ];
  const g = mergeGeometries(parts)!;
  g.translate(BX, 0, 0);
  return g;
};
let geos: { core: THREE.BufferGeometry[]; note: THREE.BufferGeometry[]; strap: THREE.BufferGeometry; strapTop: THREE.BufferGeometry } | null = null;
const geometries = () => {
  if (geos) return geos;
  const strapTop = new THREE.PlaneGeometry(BW - 1, 2 * (NOTE.D / 2 + CLR + BT) - 1);
  strapTop.rotateX(-Math.PI / 2);
  strapTop.translate(BX, STRAP_TOP + BT + 0.04, 0);
  geos = { core: [1, 2, 3].map(coreGeo), note: [1, 2, 3].map(noteGeo), strap: strapGeo(), strapTop };
  return geos;
};

/** ★ ONE BUNDLE, its origin on the surface it rests on (the strap's underside), the notes' length along x.
 *  `seed` varies its core, its notes' shapes and their small turns and shifts; `flip` turns it end for end. */
export const bundle = (seed: number, flip = false) => {
  const m = materials(), G = geometries();
  const b = new THREE.Group();
  b.userData.unit = true;
  b.add(mesh(G.core[seed % 3], m.side));
  for (let k = 0; k < NTOP; k++) {
    const n = mesh(G.note[seed % 3], [m.face, m.back, m.edge]);
    // each top note a touch turned and shifted (they were counted and squared by hand, not machined)
    n.rotation.y = (hash(seed, k, 1) - 0.5) * 0.016;
    n.position.set((hash(seed, k, 2) - 0.5) * 2.0, noteY(k, 0) - puff(0), (hash(seed, k, 3) - 0.5) * 1.6);
    b.add(n);
  }
  b.add(mesh(G.strap, m.band));
  const st = mesh(G.strapTop, m.bandTop, false, true);
  b.add(st);
  if (flip) b.rotation.y = Math.PI;
  const w = new THREE.Group();
  w.add(b);
  return w;
};

/** ★ A PILE of n bundles, each squared by hand: a little turned and shifted, now and then end for end. Each bundle is its own
 *  object for the audit (`${tag}-${i}`), so a bundle passing through its neighbour is caught. Returns the group and its height. */
export const pile = (tag: string, n: number, seed: number, o: { turn?: number; shift?: number } = {}) => {
  const turn = o.turn ?? 0.035, shift = o.shift ?? 3.5;
  const g = new THREE.Group();
  for (let i = 0; i < n; i++) {
    const bd = bundle(seed * 7 + i, hash(seed, i, 9) > 0.62);
    bd.userData.obj = `${tag}-${i}`;
    bd.rotation.y = (hash(seed, i, 4) - 0.5) * 2 * turn;
    bd.position.set((hash(seed, i, 5) - 0.5) * 2 * shift, i * (BUNDLE_H + 0.3), (hash(seed, i, 6) - 0.5) * 2 * shift);
    g.add(bd);
  }
  return { group: g, height: n * (BUNDLE_H + 0.3) - 0.3 };
};
