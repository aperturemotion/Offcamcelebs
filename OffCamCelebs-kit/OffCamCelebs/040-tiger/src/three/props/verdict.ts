// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE VERDICT IN 3-D (040) — "To be fair, Tiger never joined LIV. He stayed with the PGA Tour. So, $800 million? Our rating:
// unsupported. Send us who to audit next." On the dark ground, three real things on one floor:
//   · A TOUR STAFF BAG lying on its side, as golfers lay one down: a white synthetic-leather barrel (pebble grain, a soft
//     clearcoat sheen, stitched panel seams, two black bands), a black moulded base cap with a rounded rim, a black cuff with
//     a rolled lip and its padded dividers, black piping at both joints, and three leather head covers (driver, fairway,
//     hybrid) standing out of the cuff on their socks. On its printed panel, in plain type: TIGER WOODS over PGA TOUR (no
//     logos). It rolls in from behind on its cuff and base rims (rolling without slipping: its turn is its travel ÷ its rim's
//     radius), slows, rocks back a hair on the clubs' weight and lies still, its panel up toward the camera.
//   · THE PRESENTATION CHEQUE: ~760 × 380 mm FOAM BOARD (a white foam core between two paper skins, 5 mm, its edge band
//     showing; a slight bow, one corner a hair lifted), a printed green border with a fine wave band, a bank-cheque layout:
//     No. 0800, DATE (blank), PAY TO THE ORDER OF and a BLANK payee line, the amount box $800,000,000, the written line
//     EIGHT HUNDRED MILLION DOLLARS, MEMO LIV GOLF, the signature line EMPTY, a MICR line. It slides in from the right on
//     its own air, touches down and brakes in front of the bag.
//   · A BIG RUBBER STAMP: a varnished beech mount (chamfered, grain on every face), a turned bar handle on two posts, a grey
//     foam cushion and a red rubber die with its raised, mirrored, inked letters. It swings in from the left, slams down on
//     the cheque, holds, lifts and leaves to the right: UNSUPPORTED is pressed IN the board's paper face in red #B23A33 ink
//     (a double-ruled box, the ink uneven: speckled voids, a lighter end where the pressure fell off, a darker rim on each
//     letter), its word wider than 60% of the frame.
// Units are the layer's px (1 px ≈ 1 mm); x right, y UP, z toward the viewer; the floor at layer y g.floor.
// ★ The verdict rates the $800M FIGURE, never Woods.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, type Model } from "../stage";
import { M, rbox, rad, col, hash, fitFont, font, track, paper, paperAt, type PaperOpts } from "../kit029";

// ══ THE GEOMETRY (exported: the place's camera, timing and checks are solved on it) ══
/** the bag: its body length L along x (base end to the cuff's lip), the rims it rolls on (radius RC), the barrel's radius
 *  RB; its centre XC and its resting depth Z; where its head covers reach past the cuff */
export const BAG = { L: 900, RC: 130, RB: 122, XC: 470, Z: -300, HEADS: 260 } as const;
/** the roll's last angle (rad about +x): the printed panel (canvas middle, φ = π, facing −z unrolled) faces up toward the eye */
export const BAG_REST = rad(140);
/** the cheque: w × d (its print px), foam-board thickness, its resting centre and turn */
export const CHQ = { w: 760, d: 380, t: 5, x: 500, z: 150, yaw: -2.2 } as const;
/** the stamp: its die (w × d), the imprint's place on the cheque (print px, its centre) and its turn on the cheque (deg) */
export const STAMP = { w: 700, d: 170, u: 382, v: 222, rot: -5 } as const;
const DIE_T = 7, CUSH_T = 5, MOUNT = { w: 726, h: 46, d: 182 }, POST_H = 34, BAR_R = 24;
/** the stamp's height from its die face to its handle's top */
export const STAMP_H = DIE_T + CUSH_T + MOUNT.h + POST_H + 2 * BAR_R - 6;
/** where the readable print sits on the cheque (print px boxes: x0, y0, x1, y1) */
export const PRINT = { cheque: [32, 50, 732, 334] as const };
/** the bag's printed panel along its axis (local x from the bag's centre), and its angular half-span */
export const PANEL = { x0: -330, x1: 300, half: 0.68 } as const;

export type Pose = { x: number; z: number; h: number; yaw: number; visible: boolean };
/** a point of the cheque (u, v in its print px from its top-left; the top is the far side), at a pose, as (x, h, z) */
export const chqPt = (p: { x: number; z: number; h: number; yaw: number }, u: number, v: number, lift: number = CHQ.t) => {
  const lx = u - CHQ.w / 2, lz = v - CHQ.d / 2, a = rad(p.yaw), c = Math.cos(a), s = Math.sin(a);
  return { x: p.x + lx * c + lz * s, h: p.h + lift, z: p.z - lx * s + lz * c };
};
/** a point on the bag's surface (local x along the axis, φ round the unrolled barrel, radius r) at a roll and depth */
export const bagPt = (x: number, phi: number, r: number, roll: number, z: number) => {
  const y0 = -r * Math.sin(phi), z0 = r * Math.cos(phi);
  const c = Math.cos(roll), s = Math.sin(roll);
  return { x: BAG.XC + x, h: BAG.RC + y0 * c - z0 * s, z: z + y0 * s + z0 * c };
};
/** the bag's hull for the caption-band check: its top line over every roll (the rims and the head covers' reach) */
export const bagHull = (z: number) => {
  const out: { x: number; h: number; z: number }[] = [];
  for (let i = 0; i <= 12; i++) {
    const x = -BAG.L / 2 + (BAG.L * i) / 12;
    for (let k = 0; k < 8; k++) { const a = (k / 8) * Math.PI; out.push({ x: BAG.XC + x, h: BAG.RC + BAG.RC * Math.sin(a), z: z + BAG.RC * Math.cos(a) }); }
  }
  for (let i = 0; i <= 4; i++) out.push({ x: BAG.XC + BAG.L / 2 + (BAG.HEADS * i) / 4, h: BAG.RC + 122, z });
  return out;
};

// ══ THE PAPER OF THE CHEQUE (a slight bow, one far corner lifted: the stamp sits on its true top) ══
const CHQ_PAPER = (face: THREE.Material): PaperOpts => ({ w: CHQ.w, h: CHQ.d, t: CHQ.t, face, back: M.paper("#ECEAE3"), edge: M.paper("#F4F3EE"), seg: 72,
  bow: 1.4, bowY: 0.6, curls: [{ corner: "tr", r: 120, lift: 4 }, { corner: "bl", r: 70, lift: 1.5 }] });
/** the highest point of the cheque's face under the stamp's die (its own local frame), so the die touches and never sinks */
export const DIE_SEAT = (() => {
  const o = CHQ_PAPER(new THREE.MeshBasicMaterial());
  const a = rad(STAMP.rot), c = Math.cos(a), s = Math.sin(a);
  let m = -1e9;
  for (let i = 0; i <= 40; i++) for (let j = 0; j <= 12; j++) {
    // a point of the die (print px about the imprint's centre, canvas axes: y down), turned as the canvas turns it
    const dx = (i / 40 - 0.5) * STAMP.w, dy = (j / 12 - 0.5) * STAMP.d;
    const u = STAMP.u + dx * c - dy * s, v = STAMP.v + dx * s + dy * c;
    if (u < 0 || u > CHQ.w || v < 0 || v > CHQ.d) continue;
    m = Math.max(m, paperAt(o, u - CHQ.w / 2, CHQ.d / 2 - v));
  }
  return m;
})();

// ══ SURFACES ══
/** a fine tileable grain (bump): leather pebble (`k` 0) or paper fibre (`k` 1) */
const grainC: Record<number, HTMLCanvasElement> = {};
const grainTex = (k: 0 | 1, rep: number) => {
  if (!grainC[k]) {
    const c = document.createElement("canvas"); c.width = c.height = 512;
    const g = c.getContext("2d")!;
    g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, 512, 512);
    if (k === 0) {
      for (let i = 0; i < 12000; i++) {
        const v = 90 + Math.round(80 * hash(i, 51, 9));
        g.fillStyle = `rgba(${v},${v},${v},0.5)`;
        const x = hash(i, 52, 9) * 512, y = hash(i, 53, 9) * 512, r = 1 + 2.4 * hash(i, 54, 9);
        g.beginPath(); g.ellipse(x, y, r, r * (0.7 + 0.5 * hash(i, 55, 9)), hash(i, 56, 9) * 3, 0, Math.PI * 2); g.fill();
      }
    } else {
      for (let i = 0; i < 9000; i++) {
        const v = 100 + Math.round(60 * hash(i, 41, 4));
        g.strokeStyle = `rgba(${v},${v},${v},0.5)`; g.lineWidth = 0.5 + hash(i, 42, 4) * 0.8;
        const x = hash(i, 43, 4) * 512, y = hash(i, 44, 4) * 512, a = hash(i, 45, 4) * Math.PI, l = 2 + 7 * hash(i, 46, 4);
        g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
      }
    }
    grainC[k] = c;
  }
  const t = new THREE.CanvasTexture(grainC[k]);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep, rep);
  return t;
};
/** a soft contact shadow (alpha map: white = dark) */
let blobT: THREE.CanvasTexture | null = null;
const blobTex = () => {
  if (blobT) return blobT;
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
  const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, "#fff"); gr.addColorStop(0.45, "#a0a0a0"); gr.addColorStop(0.8, "#262626"); gr.addColorStop(1, "#000");
  g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  blobT = new THREE.CanvasTexture(c);
  return blobT;
};
const contact = (w: number, d: number, a: number) => {
  const m = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, depthWrite: false, opacity: a, toneMapped: false, alphaMap: blobTex() });
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), m);
  p.rotation.x = -Math.PI / 2; p.renderOrder = 1.5; p.userData.noBounds = true;
  return { p, m, a };
};

// ══ PRINT: THE BAG ══
const BAG_INK = "#141414";
const CIRC = Math.round(2 * Math.PI * BAG.RB);
/** the barrel's skin, unrolled: canvas x along the axis (base → cuff), canvas y round it (φ = 2π y / H); the panel's middle
 *  at y = H/2. White synthetic leather, stitched seams, two black bands near the cuff, a zip pocket on the far side, a
 *  little grime toward the base; the panel: TIGER WOODS over PGA TOUR, a fine rule between, a stitched frame. */
const bagTex = () => paintTex("vd040-bag", BAG.L, CIRC, (g) => {
  const W = BAG.L, H = CIRC, Y = H / 2;
  g.fillStyle = "#ECEBE6"; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 2600; i++) { g.fillStyle = hash(i, 1, 3) > 0.5 ? "rgba(255,255,255,0.25)" : "rgba(90,85,75,0.06)"; g.fillRect(hash(i, 2, 3) * W, hash(i, 3, 3) * H, 1 + 2 * hash(i, 4, 3), 0.8); }
  // grime toward the base end (it sits on the ground there)
  const gr = g.createLinearGradient(0, 0, 160, 0);
  gr.addColorStop(0, "rgba(70,62,50,0.16)"); gr.addColorStop(1, "rgba(70,62,50,0)");
  g.fillStyle = gr; g.fillRect(0, 0, 160, H);
  // the seams along the barrel (panel joins), each a fold line and two rows of stitches
  const seam = (y: number) => {
    g.fillStyle = "rgba(40,36,30,0.28)"; g.fillRect(0, y - 0.8, W, 1.6);
    g.fillStyle = "rgba(255,255,255,0.5)"; g.fillRect(0, y + 1, W, 0.8);
    g.save(); g.setLineDash([4.5, 3]); g.strokeStyle = "rgba(60,56,50,0.45)"; g.lineWidth = 0.9;
    for (const d of [-5, 5]) { g.beginPath(); g.moveTo(0, y + d); g.lineTo(W, y + d); g.stroke(); }
    g.restore();
  };
  seam(Y - H * 0.25); seam(Y + H * 0.25); seam(4); seam(H - 4);
  // two black bands round the barrel near the cuff, and one near the base
  for (const [x, w] of [[W - 178, 34], [W - 134, 12], [100, 18]] as const) {
    g.fillStyle = "#18181A"; g.fillRect(x, 0, w, H);
    g.fillStyle = "rgba(255,255,255,0.08)"; g.fillRect(x, 0, 1, H); g.fillRect(x + w - 1, 0, 1, H);
  }
  // the zip pocket on the far side: its seam outline and the zip's teeth line
  g.save(); g.setLineDash([4, 3]); g.strokeStyle = "rgba(60,56,50,0.5)"; g.lineWidth = 0.9;
  const pk0 = Y + H * 0.15, pk1 = Y + H * 0.31, pkx0 = 150, pkx1 = 640;
  // the pocket: a white panel sewn on, its black piping and a shadowed lower seam (it bellies out a little)
  const psh = g.createLinearGradient(0, pk0, 0, pk1);
  psh.addColorStop(0, "rgba(255,255,255,0.35)"); psh.addColorStop(0.6, "rgba(255,255,255,0)"); psh.addColorStop(1, "rgba(60,55,48,0.22)");
  g.fillStyle = psh; g.fillRect(pkx0, pk0, pkx1 - pkx0, pk1 - pk0);
  g.strokeRect(pkx0 + 7, pk0 + 7, pkx1 - pkx0 - 14, pk1 - pk0 - 14); g.restore();
  g.strokeStyle = "#1A1A1C"; g.lineWidth = 3; g.strokeRect(pkx0, pk0, pkx1 - pkx0, pk1 - pk0);
  const zy = pk0 + 16;
  g.fillStyle = "#0E0E0F"; g.fillRect(pkx0 + 20, zy - 3, pkx1 - pkx0 - 40, 7);
  for (let x = pkx0 + 21; x < pkx1 - 20; x += 2.4) { g.fillStyle = "rgba(190,190,196,0.75)"; g.fillRect(x, zy - 1.5, 1.1, 4); }
  g.fillStyle = "#B9BCC2"; g.fillRect(pkx1 - 70, zy - 5, 16, 11); g.fillStyle = "#8D9097"; g.fillRect(pkx1 - 56, zy - 2, 30, 5);
  // the printed panel: a stitched frame, the name and the tour, in plain type
  const px0 = W / 2 + PANEL.x0, px1 = W / 2 + PANEL.x1, ph = (PANEL.half * H) / Math.PI;
  g.save(); g.setLineDash([5, 3.2]); g.strokeStyle = "rgba(40,36,30,0.55)"; g.lineWidth = 1.1;
  g.strokeRect(px0, Y - ph, px1 - px0, 2 * ph); g.restore();
  g.fillStyle = "rgba(40,36,30,0.25)"; g.fillRect(px0 - 6, Y - ph - 6, px1 - px0 + 12, 1.2); g.fillRect(px0 - 6, Y + ph + 5, px1 - px0 + 12, 1.2);
  g.fillStyle = BAG_INK; g.textAlign = "center"; g.textBaseline = "alphabetic";
  const cx = (px0 + px1) / 2;
  track(g, 4);
  const s1 = fitFont(g, 800, 92, "TIGER WOODS", px1 - px0 - 50);
  g.fillText("TIGER WOODS", cx + 2, Y - 8);
  g.fillRect(cx - 150, Y + 10, 300, 2.2);
  track(g, 14);
  fitFont(g, 700, Math.round(s1 * 0.5), "PGA TOUR", 360);
  g.fillText("PGA TOUR", cx + 7, Y + 62);
  track(g, 0);
  // the print sits IN the coating: a faint wear across the letters where the bag is handled
  for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(236,235,230,${0.15 + 0.4 * hash(i, 9, 5)})`; g.fillRect(px0 + hash(i, 7, 5) * (px1 - px0), Y - 90 + hash(i, 8, 5) * 170, 0.9, 0.9); }
}, 2.5);

// ══ PRINT: THE CHEQUE ══
const GREEN = "#1E4B3B", INK = "#1C1B19", RED = "#B23A33";
const drawCheque = (g: CanvasRenderingContext2D) => {
  const W = CHQ.w, H = CHQ.d;
  // the board's paper skin: warm white, a faint pale-green security tint and wave pantograph
  g.fillStyle = "#F7F5EE"; g.fillRect(0, 0, W, H);
  const tint = g.createLinearGradient(0, 0, W, H);
  tint.addColorStop(0, "rgba(200,225,205,0.32)"); tint.addColorStop(0.5, "rgba(220,235,220,0.12)"); tint.addColorStop(1, "rgba(200,225,205,0.32)");
  g.fillStyle = tint; g.fillRect(0, 0, W, H);
  g.strokeStyle = "rgba(60,120,90,0.13)"; g.lineWidth = 0.35;
  for (let k = 0; k < Math.ceil(H / 3.2); k++) { g.beginPath(); for (let x = 0; x <= W; x += 3) { const y = k * 3.2 + 1.7 * Math.sin(x * 0.045 + k * 0.55) + 0.7 * Math.sin(x * 0.13 - k); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); } g.stroke(); }
  for (let i = 0; i < 2600; i++) { g.fillStyle = hash(i, 1, 17) > 0.5 ? "rgba(255,255,250,0.3)" : "rgba(100,95,80,0.05)"; g.fillRect(hash(i, 2, 17) * W, hash(i, 3, 17) * H, 0.6 + 1.8 * hash(i, 4, 17), 0.4); }
  // the printed border: a heavy outer rule, a band of fine waves, a thin inner rule; a little set-off where the press ran wide
  g.strokeStyle = GREEN; g.lineWidth = 4; g.strokeRect(12, 12, W - 24, H - 24);
  g.lineWidth = 1.1; g.strokeRect(25, 25, W - 50, H - 50);
  g.save(); g.beginPath(); g.rect(14, 14, W - 28, H - 28); g.rect(24, 24, W - 48, H - 48); g.clip("evenodd");
  g.strokeStyle = "rgba(30,75,59,0.55)"; g.lineWidth = 0.6;
  for (let x = 0; x < W + 20; x += 5) { g.beginPath(); g.moveTo(x, 0); g.bezierCurveTo(x + 6, H * 0.33, x - 6, H * 0.66, x, H); g.stroke(); }
  for (let y = 0; y < H + 20; y += 5) { g.beginPath(); g.moveTo(0, y); g.bezierCurveTo(W * 0.33, y + 6, W * 0.66, y - 6, W, y); g.stroke(); }
  g.restore();
  g.fillStyle = INK; g.textBaseline = "alphabetic";
  // the number and the date line (blank)
  g.textAlign = "right"; font(g, 700, 14); g.fillText("No. 0800", W - 44, 52);
  g.textAlign = "left"; font(g, 700, 11); g.fillText("DATE", W - 250, 78);
  g.fillRect(W - 214, 79, 170, 1);
  // the payee: PAY TO THE ORDER OF, and a BLANK line
  track(g, 0.6); font(g, 800, 15); g.fillText("PAY TO THE ORDER OF", 44, 141); track(g, 0);
  g.fillRect(224, 142, 220, 1.3);
  // the amount, large, in its ruled box
  const bx = 462, by = 96, bw = 254, bh = 76;
  g.fillStyle = "rgba(255,255,252,0.75)"; g.fillRect(bx, by, bw, bh);
  g.strokeStyle = INK; g.lineWidth = 1.8; g.strokeRect(bx, by, bw, bh);
  g.fillStyle = INK; g.textAlign = "center";
  fitFont(g, 800, 50, "$800,000,000", bw - 18); g.fillText("$800,000,000", bx + bw / 2, by + bh - 20);
  // the written amount on its line
  g.textAlign = "left"; fitFont(g, 700, 25, "EIGHT HUNDRED MILLION", 440); g.fillText("EIGHT HUNDRED MILLION", 48, 222);
  g.fillRect(44, 230, 520, 1.2);
  track(g, 1); font(g, 800, 15); g.fillText("DOLLARS", 576, 229); track(g, 0);
  // the memo, in plain type
  font(g, 700, 11); g.fillText("MEMO", 44, 304);
  fitFont(g, 800, 34, "LIV GOLF", 220); g.fillText("LIV GOLF", 90, 304);
  g.fillRect(88, 311, 250, 1.2);
  // the signature line: EMPTY
  g.fillRect(430, 304, 286, 1.2);
  track(g, 0.8); font(g, 600, 8.5); g.textAlign = "center"; g.fillText("AUTHORIZED SIGNATURE", 573, 318); track(g, 0);
  // the MICR line at the foot, faint
  g.textAlign = "left"; g.fillStyle = "rgba(28,27,25,0.55)"; track(g, 3); font(g, 700, 12);
  const mx = 210, my = H - 30;
  g.fillRect(mx - 12, my - 9, 2, 9); g.fillRect(mx - 9, my - 9, 4, 4); g.fillRect(mx - 9, my - 4, 4, 4);
  g.fillText("080000800", mx, my); g.fillText("0000 0800 4  0800", mx + 140, my); track(g, 0);
};
/** the stamp's impression, painted INTO the paper: red ink in a double-ruled box, UNSUPPORTED large; uneven (speckled voids,
 *  a few skipped patches, one end lighter where the pressure fell off), a darker rim on each stroke where the ink pooled */
const drawImprint = (g: CanvasRenderingContext2D, scale: number) => {
  const k = scale, IW = STAMP.w - 14, IH = STAMP.d - 14;
  const c = document.createElement("canvas"); c.width = Math.ceil((IW + 40) * k); c.height = Math.ceil((IH + 40) * k);
  const q = c.getContext("2d")!;
  q.setTransform(k, 0, 0, k, 0, 0);
  const ox = 20, oy = 20;
  const rrect = (x: number, y: number, w: number, h: number, r: number) => { q.beginPath(); q.moveTo(x + r, y); q.arcTo(x + w, y, x + w, y + h, r); q.arcTo(x + w, y + h, x, y + h, r); q.arcTo(x, y + h, x, y, r); q.arcTo(x, y, x + w, y, r); q.closePath(); };
  q.strokeStyle = RED; q.fillStyle = RED;
  q.lineWidth = 8; rrect(ox + 4, oy + 4, IW - 8, IH - 8, 14); q.stroke();
  q.lineWidth = 2.6; rrect(ox + 15, oy + 15, IW - 30, IH - 30, 8); q.stroke();
  q.textAlign = "center"; q.textBaseline = "alphabetic";
  track(q, 5);
  const s = fitFont(q, 800, 140, "UNSUPPORTED", IW - 52);
  const ty = oy + IH / 2 + s * 0.36;
  q.fillText("UNSUPPORTED", ox + IW / 2 + 2.5, ty);
  // the rubber's face spreads the ink a hair past each letter (a squash), and it pools a touch darker at the rim
  q.lineJoin = "round"; q.strokeStyle = RED; q.lineWidth = 2.4; q.strokeText("UNSUPPORTED", ox + IW / 2 + 2.5, ty);
  q.strokeStyle = "rgba(135,30,26,0.3)"; q.lineWidth = 0.9; q.strokeText("UNSUPPORTED", ox + IW / 2 + 2.5, ty);
  track(q, 0);
  // the voids: fine speckle everywhere, heavier toward the right end (the pressure fell off there), and a few skipped patches
  q.globalCompositeOperation = "destination-out";
  for (let i = 0; i < 5200; i++) {
    const x = ox + hash(i, 1, 77) * IW, y = oy + hash(i, 2, 77) * IH;
    const end = Math.max(0, (x - ox) / IW - 0.55) / 0.45;
    q.fillStyle = `rgba(0,0,0,${(0.2 + 0.5 * hash(i, 3, 77)) * (0.35 + 0.8 * end)})`;
    q.beginPath(); q.arc(x, y, 0.25 + 0.95 * hash(i, 4, 77), 0, Math.PI * 2); q.fill();
  }
  for (let i = 0; i < 14; i++) {
    const x = ox + hash(i, 5, 78) * IW, y = oy + hash(i, 6, 78) * IH, r = 5 + 16 * hash(i, 7, 78);
    const gr = q.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, `rgba(0,0,0,${0.25 + 0.35 * hash(i, 8, 78)})`); gr.addColorStop(1, "rgba(0,0,0,0)");
    q.fillStyle = gr; q.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  const fall = q.createLinearGradient(ox, 0, ox + IW, 0);
  fall.addColorStop(0, "rgba(0,0,0,0)"); fall.addColorStop(0.6, "rgba(0,0,0,0.03)"); fall.addColorStop(1, "rgba(0,0,0,0.2)");
  q.fillStyle = fall; q.fillRect(0, 0, IW + 40, IH + 40);
  // onto the paper: the ink takes the print under it (multiply), a hair translucent
  g.save();
  g.translate(STAMP.u, STAMP.v); g.rotate(rad(STAMP.rot));
  g.globalCompositeOperation = "multiply"; g.globalAlpha = 1;
  g.drawImage(c, -(IW + 40) / 2, -(IH + 40) / 2, IW + 40, IH + 40);
  g.restore();
};
const CHQ_SCALE = 3;
const chequeTex = (stamped: boolean) => paintTex(stamped ? "vd040-cheque-stamped" : "vd040-cheque", CHQ.w, CHQ.d, (g) => {
  drawCheque(g);
  if (stamped) drawImprint(g, CHQ_SCALE);
}, CHQ_SCALE);

// ══ THE STAMP'S WOOD AND RUBBER ══
const beechTex = (key: string, w: number, h: number) => paintTex(key, w, h, (g) => {
  g.fillStyle = "#C99B66"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 30; i++) {
    const y = hash(i, 1, 23) * h, hh = 3 + 14 * hash(i, 2, 23);
    g.fillStyle = hash(i, 3, 23) > 0.5 ? `rgba(225,180,125,${0.12 + 0.12 * hash(i, 4, 23)})` : `rgba(120,72,36,${0.07 + 0.1 * hash(i, 4, 23)})`;
    g.fillRect(0, y, w, hh);
  }
  for (let i = 0; i < 160; i++) {
    const y0 = hash(i, 5, 23) * h, a = 0.6 + 2.5 * hash(i, 6, 23), ph = hash(i, 7, 23) * 6.28;
    g.strokeStyle = `rgba(110,64,30,${0.08 + 0.2 * hash(i, 8, 23)})`; g.lineWidth = 0.3 + 0.8 * hash(i, 9, 23);
    g.beginPath(); for (let x = 0; x <= w; x += 6) { const y = y0 + a * Math.sin(x / 60 + ph) + 0.4 * Math.sin(x / 11 + ph); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); } g.stroke();
  }
  // beech's ray flecks: short dark dashes across the grain
  for (let i = 0; i < Math.round((w * h) / 70); i++) { g.fillStyle = `rgba(130,80,40,${0.1 + 0.18 * hash(i, 10, 23)})`; g.fillRect(hash(i, 11, 23) * w, hash(i, 12, 23) * h, 0.6, 1.5 + 2.5 * hash(i, 13, 23)); }
}, 1.5);
const wood = (key: string, w: number, h: number, hex?: string) => {
  const t = beechTex(key, w, h);
  return new THREE.MeshPhysicalMaterial({ map: t, bumpMap: t, bumpScale: 0.5, color: col(hex ?? "#FFFFFF"), roughness: 0.42, clearcoat: 0.55, clearcoatRoughness: 0.28, envMapIntensity: 0.55 });
};
/** the die's face, seen from below: the raised letters MIRRORED, inked red over the darker rubber */
const dieTex = () => paintTex("vd040-die", STAMP.w, STAMP.d, (g) => {
  const W = STAMP.w, H = STAMP.d;
  g.fillStyle = "#6E2622"; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 1500; i++) { g.fillStyle = `rgba(0,0,0,${0.06 + 0.1 * hash(i, 1, 81)})`; g.fillRect(hash(i, 2, 81) * W, hash(i, 3, 81) * H, 1, 1); }
  g.save(); g.translate(W, 0); g.scale(-1, 1);
  g.strokeStyle = "#A8302A"; g.fillStyle = "#A8302A";
  g.lineWidth = 8; g.strokeRect(11, 11, W - 22, H - 22);
  g.lineWidth = 2.6; g.strokeRect(22, 22, W - 44, H - 44);
  g.textAlign = "center"; g.textBaseline = "alphabetic"; track(g, 5);
  const s = fitFont(g, 800, 140, "UNSUPPORTED", W - 66);
  g.fillText("UNSUPPORTED", W / 2 + 2.5, H / 2 + s * 0.36); track(g, 0);
  g.restore();
}, 1.5);

// ══ THE PLACE ══
export type VerdictGeo = { floor: number };
/** roll / bz: the bag's turn and depth; chq: the cheque's pose; stamped: the impression is in the paper; st: the stamp's die
 *  centre (x, h above the floor, z), its turn (yaw) and its tilts (deg) */
export type VerdictP = { roll: number; bz: number; chq: Pose; stamped: boolean;
  st: { x: number; h: number; z: number; yaw: number; tiltX: number; tiltZ: number; visible: boolean } };

export const verdictModel = (g: VerdictGeo) => (): Model<VerdictP> => {
  const root = new THREE.Group();
  const FY = -g.floor;

  // ══ THE BAG (one object: barrel, base cap, cuff, piping, dividers, head covers) ══
  const bag = new THREE.Group(); bag.userData.obj = "bag"; root.add(bag);
  const roll = new THREE.Group(); bag.add(roll);
  // every lathe is built along +y and laid along +x (rotateZ(−90°): y → x, x → −y), base end at −L/2
  const alongX = (geo: THREE.BufferGeometry) => geo.rotateZ(-Math.PI / 2);
  const L = BAG.L, x0 = -L / 2;
  const blackLeather = new THREE.MeshPhysicalMaterial({ color: col("#1B1B1D"), roughness: 0.5, clearcoat: 0.55, clearcoatRoughness: 0.32, bumpMap: grainTex(0, 6), bumpScale: 0.5, envMapIntensity: 0.6 });
  const moulded = new THREE.MeshPhysicalMaterial({ color: col("#202022"), roughness: 0.62, clearcoat: 0.25, clearcoatRoughness: 0.5, bumpMap: grainTex(0, 10), bumpScale: 0.25, envMapIntensity: 0.5 });
  // the barrel: a hair of a waist between the rims, the skin's UVs turned so the print runs along it (u → along, v → round)
  {
    const prof: [number, number][] = [];
    const a = 52, b = L - 128, N = 48;
    for (let j = 0; j <= N; j++) { const t = j / N, y = a + (b - a) * t; prof.push([BAG.RB - 2.2 * Math.sin(Math.PI * t) + 1.2 * Math.sin(2 * Math.PI * t * 1.5) * 0.3, y]); }
    const geo = lathe(prof, 128);
    const uv = geo.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) { const u = uv.getX(i), v = uv.getY(i); uv.setXY(i, (a + (b - a) * v) / L, 1 - u); }
    geo.translate(0, x0, 0); alongX(geo);
    const skin = new THREE.MeshPhysicalMaterial({ map: bagTex(), bumpMap: grainTex(0, 7), bumpScale: 0.45, roughness: 0.44, clearcoat: 0.6, clearcoatRoughness: 0.28,
      sheen: 0.2, sheenRoughness: 0.6, sheenColor: col("#FFFFFF"), envMapIntensity: 0.55 });
    // the map spans the whole length L; the barrel shows its middle stretch
    roll.add(mesh(geo, skin));
  }
  // the base cap: a moulded black foot, its end rounded over, its rim the barrel's rolling rim
  {
    const p: [number, number][] = [[0.01, -6], [60, -6.5], [104, -4.5], [126, 0], [136, 9], [BAG.RC, 22], [BAG.RC, 46], [BAG.RC - 3, 58], [BAG.RB - 4, 62]];
    const geo = lathe(p, 96); geo.translate(0, x0 + 6, 0); alongX(geo);
    roll.add(mesh(geo, moulded));
  }
  // the cuff: black leather, the rolling rim at its lip, the lip rolled over into the opening; the opening's dark well
  {
    const c0 = L - 132;
    const p: [number, number][] = [[BAG.RB - 4, c0 - 4], [BAG.RC - 2, c0 + 4], [BAG.RC, c0 + 14], [BAG.RC, L - 16], [BAG.RC - 1.5, L - 7], [BAG.RC - 6, L - 1.5], [BAG.RC - 12, L - 1], [BAG.RC - 16.5, L - 5], [BAG.RC - 17, L - 14], [BAG.RC - 17, L - 70]];
    const geo = lathe(p, 112); geo.translate(0, x0, 0); alongX(geo);
    const cuffM = blackLeather.clone(); cuffM.side = THREE.DoubleSide;
    roll.add(mesh(geo, cuffM));
    const well = mesh(alongX(new THREE.CircleGeometry(BAG.RC - 16, 64).rotateX(-Math.PI / 2).translate(0, x0 + L - 68, 0)), new THREE.MeshStandardMaterial({ color: col("#0D0D0E"), roughness: 0.9 }));
    roll.add(well);
    // the padded dividers across the opening
    for (const a of [0.35, 0.35 + Math.PI / 2]) {
      const dg = new THREE.Group();
      const d = rbox(52, 2 * (BAG.RC - 19), 11, 4.5, moulded, 3); d.position.z = 5.5; dg.add(d);
      dg.rotation.x = a; dg.position.x = L / 2 - 46;
      roll.add(dg);
    }
  }
  // black piping at the barrel's two joints
  for (const [x, r] of [[x0 + 66, BAG.RB + 1.2], [x0 + L - 128, BAG.RB + 1.6]] as const) {
    const t = mesh(new THREE.TorusGeometry(r, 2.6, 10, 128).rotateY(Math.PI / 2), blackLeather); t.position.x = x; roll.add(t);
  }
  // the head covers: driver (black), fairway (white), hybrid (black), each a padded leather head on its sock out of the cuff
  {
    const capM = (hex: string) => new THREE.MeshPhysicalMaterial({ color: col(hex), roughness: 0.46, clearcoat: 0.6, clearcoatRoughness: 0.3, bumpMap: grainTex(0, 3), bumpScale: 0.5, envMapIntensity: 0.6 });
    const covers = [{ a: rad(80), r: 58, dx: 196, hex: "#1A1A1C" }, { a: rad(200), r: 52, dx: 164, hex: "#E9E7E1" }, { a: rad(320), r: 47, dx: 136, hex: "#2A2A2D" }];
    for (const c of covers) {
      const m = capM(c.hex);
      const oy = -62 * Math.sin(c.a), oz = 62 * Math.cos(c.a);
      const sock = mesh(new THREE.CylinderGeometry(24, 30, c.dx + 30, 28).rotateZ(Math.PI / 2), m);
      sock.position.set(L / 2 + (c.dx - 30) / 2 - 60, oy, oz); roll.add(sock);
      // the sock's ribbed cuff where it meets the head
      const rib = mesh(new THREE.TorusGeometry(26, 3.2, 8, 40).rotateY(Math.PI / 2), m); rib.position.set(L / 2 + c.dx - c.r * 1.05, oy, oz); roll.add(rib);
      const head = mesh(new THREE.SphereGeometry(c.r, 40, 28), m);
      head.scale.set(1.28, 1, 0.92); head.position.set(L / 2 + c.dx, oy, oz); roll.add(head);
      // the seam round each head, a raised welt
      const welt = mesh(new THREE.TorusGeometry(c.r * 0.985, 1.6, 8, 72), m);
      welt.scale.set(0.92, 1, 1); welt.position.copy(head.position); welt.rotation.y = Math.PI / 2; welt.position.x += 6; roll.add(welt);
    }
  }
  // the irons: chrome shafts out of the cuff's lower pocket, their blades turned along the barrel (inside its rim)
  {
    const chrome = M.chrome(), sat = M.steel("#B9BEC5");
    for (const [k, a] of [rad(110), rad(140), rad(250), rad(280), rad(10)].entries()) {
      const rr = 92, oy = -rr * Math.sin(a), oz = rr * Math.cos(a), len = 70 + 12 * k;
      const shaft = mesh(new THREE.CylinderGeometry(4.2, 4.6, len + 80, 14).rotateZ(Math.PI / 2), chrome);
      shaft.position.set(L / 2 + (len + 80) / 2 - 80, oy, oz); roll.add(shaft);
      const hosel = mesh(new THREE.CylinderGeometry(6.5, 5, 26, 14).rotateZ(Math.PI / 2), sat);
      hosel.position.set(L / 2 + len + 8, oy, oz); roll.add(hosel);
      const blade = rbox(24, 30, 62, 6, sat, 3);
      const bg = new THREE.Group(); bg.add(blade); blade.position.set(0, 0, 31);
      bg.position.set(L / 2 + len + 24, oy * 0.86, oz * 0.86); bg.rotation.x = a + Math.PI; roll.add(bg);
    }
  }
  const bagShadow = contact(L + 160, 2 * BAG.RC + 40, 0.55); root.add(bagShadow.p);

  // ══ THE CHEQUE (foam board: two paper skins over the white core) ══
  const chq = new THREE.Group(); chq.userData.obj = "cheque"; root.add(chq);
  const faceM = (stamped: boolean) => { const m = M.print(chequeTex(stamped), 0.8); m.bumpMap = grainTex(1, 3); m.bumpScale = 0.25; return m; };
  const clean = faceM(false), stampedM = faceM(true);
  const sheet = paper(CHQ_PAPER(clean));
  sheet.rotation.x = -Math.PI / 2; sheet.position.y = CHQ.t;
  chq.add(sheet);
  const front = sheet.children[0] as THREE.Mesh;
  const chqShadow = contact(CHQ.w + 70, CHQ.d + 70, 0.5); root.add(chqShadow.p);

  // ══ THE STAMP (its frame: the die's face centre at the origin, y up) ══
  const stamp = new THREE.Group(); stamp.userData.obj = "stamp"; root.add(stamp);
  {
    const rubber = new THREE.MeshPhysicalMaterial({ color: col("#7A2A25"), roughness: 0.7, clearcoat: 0.1, envMapIntensity: 0.4 });
    const dieFace = new THREE.MeshPhysicalMaterial({ map: dieTex(), roughness: 0.6, envMapIntensity: 0.35 });
    const die = rbox(STAMP.w, DIE_T, STAMP.d, 1.6, { px: rubber, nx: rubber, top: rubber, bottom: dieFace, front: rubber, back: rubber }, 2);
    die.position.set(0, DIE_T / 2, STAMP.d / 2); stamp.add(die);
    const foam = new THREE.MeshStandardMaterial({ color: col("#3E3D3B"), roughness: 0.95, bumpMap: grainTex(1, 4), bumpScale: 0.6 });
    const cush = rbox(STAMP.w + 6, CUSH_T, STAMP.d + 6, 1.4, foam, 2);
    cush.position.set(0, DIE_T + CUSH_T / 2 - 0.2, (STAMP.d + 6) / 2); stamp.add(cush);
    const mTop = wood("vd040-beech-t", MOUNT.w, MOUNT.d), mSide = wood("vd040-beech-s", MOUNT.w, MOUNT.h), mEnd = wood("vd040-beech-e", MOUNT.d, MOUNT.h, "#E8D6C0");
    const mount = rbox(MOUNT.w, MOUNT.h, MOUNT.d, 6, { px: mEnd, nx: mEnd, top: mTop, bottom: mTop, front: mSide, back: mSide }, 4);
    const MY = DIE_T + CUSH_T - 0.4;
    mount.position.set(0, MY + MOUNT.h / 2, MOUNT.d / 2); stamp.add(mount);
    const dark = new THREE.MeshPhysicalMaterial({ color: col("#6A4128"), roughness: 0.36, clearcoat: 0.7, clearcoatRoughness: 0.2, envMapIntensity: 0.6 });
    const top = MY + MOUNT.h;
    for (const x of [-215, 215]) {
      const post = mesh(lathe([[0.01, -0.5], [25, -0.5], [25, 3], [19, 8], [14.5, 17], [15.5, 26], [19, POST_H + 2], [0.01, POST_H + 2]], 40), dark);
      post.position.set(x, top, 0); stamp.add(post);
    }
    const bar = mesh(new THREE.CapsuleGeometry(BAR_R, 470, 10, 40).rotateZ(Math.PI / 2), dark);
    bar.position.set(0, top + POST_H + BAR_R - 4, 0); stamp.add(bar);
  }
  const stShadow = contact(MOUNT.w + 60, MOUNT.d + 60, 0); root.add(stShadow.p);

  // ══ THE FLOOR: the shadow catcher and a faint mirror on the dark ground ══
  root.add(makeFloor({ y: g.floor, x0: -900, x1: 2000, z0: -1400, z1: 900, reflect: 0.08, shadow: 0.55, fadeC: [520, -160], fadeR: [1150, 820] }));

  return {
    root,
    update: (p) => {
      roll.position.set(BAG.XC, FY + BAG.RC, p.bz); roll.rotation.set(p.roll, 0, 0);
      bagShadow.p.position.set(BAG.XC + 40, FY + 0.3, p.bz + 6);
      const c = p.chq;
      chq.visible = c.visible; chq.position.set(c.x, FY + c.h, c.z); chq.rotation.y = rad(c.yaw);
      front.material = p.stamped ? stampedM : clean;
      chqShadow.p.visible = c.visible; chqShadow.p.position.set(c.x, FY + 0.35, c.z); chqShadow.p.rotation.z = rad(c.yaw);
      // the contact shadow sharpens and darkens as the board nears the floor
      const k = Math.max(0, 1 - c.h / 60);
      chqShadow.m.opacity = 0.5 * k; chqShadow.p.scale.set(1 + 0.25 * (1 - k), 1 + 0.4 * (1 - k), 1);
      const s = p.st;
      stamp.visible = s.visible;
      stamp.position.set(s.x, FY + s.h, s.z);
      stamp.rotation.set(rad(s.tiltX), rad(s.yaw), rad(s.tiltZ), "YXZ");
      const ks = Math.max(0, 1 - (s.h - CHQ.t) / 240);
      stShadow.p.visible = s.visible; stShadow.m.opacity = 0.42 * ks * ks;
      stShadow.p.position.set(s.x + 30 * (1 - ks), FY + CHQ.t + DIE_SEAT + 0.6, s.z + 20 * (1 - ks)); stShadow.p.rotation.z = rad(s.yaw);
      stShadow.p.scale.set(1 + 0.5 * (1 - ks), 1 + 0.6 * (1 - ks), 1);
    },
  };
};
