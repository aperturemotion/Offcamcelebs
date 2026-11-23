// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE PAY IN 3-D (039) — "His own lawsuit spells out the pay: at least $35 million a fight, $15 million for the first."
// ★ ROUND 2 (Timur, 2026-11-23: "the 3d visuals need to be more realistic"). On the cream ground, on the table: a walnut
// leather DESK PAD (pebble grain, a darker stitched border, rounded edges, its own thickness and contact shadow), and on it
// three real paper things:
//   · THE COMPLAINT: a stapled filing on California pleading paper (numbered lines, the ruled double margin): its cover page
//     over three more pages, each a hair out of square so their edges show as a fan of paper lines, on a legal-blue backing
//     sheet; two wire staples across the top; the cover's far corner lifts off the stack. UNITED STATES DISTRICT COURT,
//     the caption ÁLVAREZ v. GOLDEN BOY PROMOTIONS, DAZN and the title COMPLAINT. The hand-over brings it in.
//   · THE BIG CHEQUE: a pale-green business cheque on security paper (a fine wave pantograph and a guilloche rosette, a
//     micro-print border, a MICR line at the foot, the perforated stub edge it was torn from on the left, a gentle arch and a
//     lifted corner): PAY TO THE ORDER OF SAÚL ÁLVAREZ, AT LEAST $35,000,000 (the complaint's minimum guarantee), memo PER
//     FIGHT. It slides in from beyond the right edge on "$35", glides on its own air, touches down and brakes across the
//     complaint's lower half (the caption and COMPLAINT stay clear above it).
//   · THE SMALLER CHEQUE: a pale-blue personal cheque, the same make: $15,000,000 (what the complaint says he received for the
//     first: no "at least"), memo FIRST FIGHT, slid in from the left on "$15", landing on the pad in front of the big one.
// Every sheet is kit029 `paper` (a real edge band; print painted INTO the sheet with a paper-fibre bump). No figure is summed.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, type Model } from "../stage";
import { M, rbox, rad, fitFont, track, hash, paper, typeLines, font, wire } from "../kit029";
import { GLIDE, clamp01 } from "../../r45/tokens";

export const PAY_FLOOR = 1300;
/** the desk pad: its extent on the table (x, z) and its thickness; everything else lies on its top */
export const PAD = { x0: 60, x1: 1020, z0: -482, z1: 640, t: 5, r: 2.2 } as const;
const P0 = PAD.t;
/** a sheet lying on the pad: size (w across, d deep), centre (x, z), turn (deg), the height of its underside, thickness */
export type Sheet = { w: number; d: number; x: number; z: number; yaw: number; h: number; t: number };
export const BACKER = { w: 476, d: 622, dz: -11, h: P0 + 0.25, t: 0.45 } as const;            // the blue back
/** the pages under the cover: offsets (dx, dz, yaw) so their edges fan out a hair */
const UNDER = [{ dx: -2.4, dz: 2.2, yaw: 0.55 }, { dx: 1.8, dz: -1.4, yaw: -0.4 }, { dx: -0.9, dz: 1.2, yaw: 0.25 }] as const;
const PAGE_T = 0.3, PAGE_STEP = 0.4;
const UNDER_H = (k: number) => P0 + 0.75 + k * PAGE_STEP;
export const CP: Sheet = { w: 460, d: 595, x: 520, z: -120, yaw: -3, h: UNDER_H(UNDER.length), t: 0.4 };   // the cover page
export const C1: Sheet = { w: 640, d: 272, x: 540, z: 20, yaw: -2, h: CP.h + CP.t + 0.25, t: 0.42 };       // $35,000,000 PER FIGHT
export const C2: Sheet = { w: 470, d: 206, x: 486, z: 314, yaw: 3, h: P0 + 0.25, t: 0.42 };                 // $15,000,000 FIRST FIGHT

export type PayTiming = { c1: readonly [number, number]; c2: readonly [number, number] };
const ss = (a: number, b: number, x: number) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
/** a cheque's slide: from beyond the edge (side +1 right, −1 left), gliding a little above the pad on its own air, touching
 *  down at 80% of the run and braking to rest, turning square as it goes */
const slide = (s: Sheet, [a, b]: readonly [number, number], side: number, dist: number, spin: number, f: number) => {
  const u = clamp01((f - a) / (b - a));
  return { x: s.x + side * dist * (1 - GLIDE(u)), z: s.z - 14 * (1 - GLIDE(u)), h: s.h + 26 * (1 - ss(0, 0.8, u)), yaw: s.yaw + spin * (1 - GLIDE(u)), visible: f > a - 1 };
};
export const poseC1 = (T: PayTiming, f: number) => slide(C1, T.c1, 1, 1150, -11, f);
export const poseC2 = (T: PayTiming, f: number) => slide(C2, T.c2, -1, 1050, 10, f);

/** a point of a sheet (u, v in its print's px, from its top-left; the top is the far side) on the table, at a pose */
export const sheetPt = (s: { w: number; d: number }, p: { x: number; z: number; yaw: number; h: number }, u: number, v: number, top = 1) => {
  const lx = u - s.w / 2, lz = v - s.d / 2, a = rad(p.yaw), c = Math.cos(a), sn = Math.sin(a);
  return { x: p.x + lx * c + lz * sn, h: p.h + top, z: p.z - lx * sn + lz * c };
};
export const corners = (s: { w: number; d: number }, p: { x: number; z: number; yaw: number; h: number }) =>
  [[0, 0], [s.w, 0], [s.w, s.d], [0, s.d]].map(([u, v]) => sheetPt(s, p, u, v));
/** points along the pad's far edge (its top), for the caption-band check */
export const padFar = () => Array.from({ length: 25 }, (_, i) => ({ x: PAD.x0 + ((PAD.x1 - PAD.x0) * i) / 24, h: PAD.t, z: PAD.z0 }));
/** where the readable print sits on each sheet (print px boxes: x0, y0, x1, y1) */
export const PRINT = {
  title: [80, 60, 420, 262] as const,        // the complaint's caption and COMPLAINT
  c1: [24, 74, 616, 236] as const,          // the big cheque's payee, amount and memo
  c2: [18, 56, 452, 184] as const,
};

// ══ SURFACES ══
/** paper fibre: a fine tileable bump (a sheet's tooth under the light), one canvas, a clone per sheet for its own repeat */
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
/** print on paper: the texture, the fibre's tooth, a faint sheen */
const printOn = (tex: THREE.Texture, w: number, h: number, rough = 0.86, cut = false) => {
  const m = M.print(tex, rough);
  m.bumpMap = fibre(w, h); m.bumpScale = 0.35;
  if (cut) m.alphaTest = 0.5;   // the perforated stub edge: the bites are holes
  return m;
};
const plainPaper = (hex: string, w: number, h: number) => { const m = M.paper(hex); m.bumpMap = fibre(w, h); m.bumpScale = 0.3; return m; };

/** the leather's pebble grain (bump and a little roughness variation), tiled */
let pebbleT: THREE.Texture | null = null;
const pebble = () => {
  if (pebbleT) return pebbleT;
  const c = document.createElement("canvas"); c.width = c.height = 512;
  const g = c.getContext("2d")!;
  g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 11000; i++) {
    const v = 90 + Math.round(80 * hash(i, 51, 5));
    g.fillStyle = `rgba(${v},${v},${v},0.5)`;
    const x = hash(i, 52, 5) * 512, y = hash(i, 53, 5) * 512, r = 1 + 2.2 * hash(i, 54, 5);
    g.beginPath(); g.ellipse(x, y, r, r * (0.7 + 0.5 * hash(i, 55, 5)), hash(i, 56, 5) * 3, 0, Math.PI * 2); g.fill();
  }
  pebbleT = new THREE.CanvasTexture(c);
  pebbleT.wrapS = pebbleT.wrapT = THREE.RepeatWrapping;
  pebbleT.repeat.set(5, 6);
  return pebbleT;
};
const padTex = () => {
  const W = PAD.x1 - PAD.x0, D = PAD.z1 - PAD.z0;
  return paintTex("pay-pad", W, D, (g) => {
    g.fillStyle = "#5E3C28"; g.fillRect(0, 0, W, D);
    // the hide's mottle: soft lighter and darker clouds, and a little wear toward the middle
    g.save(); g.filter = "blur(18px)";
    for (let i = 0; i < 160; i++) {
      g.fillStyle = `rgba(${hash(i, 1, 7) > 0.5 ? "40,22,12" : "120,80,52"},${0.02 + 0.03 * hash(i, 2, 7)})`;
      g.beginPath(); g.ellipse(hash(i, 3, 7) * W, hash(i, 4, 7) * D, 40 + 120 * hash(i, 5, 7), 30 + 80 * hash(i, 6, 7), hash(i, 7, 7) * 3, 0, Math.PI * 2); g.fill();
    }
    g.restore();
    // fine scuffs and pores
    for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${hash(i, 8, 7) > 0.5 ? "30,16,8" : "150,110,80"},${0.05 + 0.06 * hash(i, 9, 7)})`; g.fillRect(hash(i, 10, 7) * W, hash(i, 11, 7) * D, 0.8 + 2.5 * hash(i, 12, 7), 0.5); }
    const wear = g.createRadialGradient(W / 2, D * 0.45, 40, W / 2, D * 0.45, W * 0.55);
    wear.addColorStop(0, "rgba(140,98,66,0.16)"); wear.addColorStop(1, "rgba(140,98,66,0)");
    g.fillStyle = wear; g.fillRect(0, 0, W, D);
    // the border: a darker turned-over band, stitched along both sides
    const B = 34;
    g.fillStyle = "rgba(30,16,8,0.38)";
    g.fillRect(0, 0, W, B); g.fillRect(0, D - B, W, B); g.fillRect(0, B, B, D - 2 * B); g.fillRect(W - B, B, B, D - 2 * B);
    g.strokeStyle = "rgba(255,240,220,0.16)"; g.lineWidth = 1; g.strokeRect(B + 0.5, B + 0.5, W - 2 * B - 1, D - 2 * B - 1);
    g.strokeStyle = "rgba(20,10,5,0.4)"; g.lineWidth = 1.2; g.strokeRect(B + 2, B + 2, W - 2 * B - 4, D - 2 * B - 4);
    const stitch = (inset: number) => {
      g.save(); g.setLineDash([5, 3.2]); g.lineCap = "round";
      g.strokeStyle = "rgba(20,10,4,0.55)"; g.lineWidth = 1.6; g.strokeRect(inset + 0.6, inset + 0.8, W - 2 * inset, D - 2 * inset);
      g.strokeStyle = "rgba(214,184,140,0.85)"; g.lineWidth = 1.2; g.strokeRect(inset, inset, W - 2 * inset, D - 2 * inset);
      g.restore();
    };
    stitch(9); stitch(B - 8);
  }, 1.5);
};

// ══ PRINT ══
const INK = "#22201D";
const grain = (g: CanvasRenderingContext2D, w: number, h: number, n: number, seed: number, dark: string, light: string) => {
  for (let i = 0; i < n; i++) {
    g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? dark : light},${0.03 + 0.05 * hash(i, 2, seed)})`;
    g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 0.4 + hash(i, 5, seed) * 1.8, 0.25);
  }
};
const complaintTex = () => paintTex("pay-complaint", CP.w, CP.d, (g) => {
  const W = CP.w, H = CP.d;
  g.fillStyle = "#FBFAF5"; g.fillRect(0, 0, W, H);
  grain(g, W, H, 3200, 11, "120,110,95", "255,255,250");
  // pleading paper: the ruled left margin (a double rule), the right rule, and the numbered lines 1–28
  g.fillStyle = "rgba(34,32,29,0.55)";
  g.fillRect(50, 0, 0.9, H); g.fillRect(53.5, 0, 0.9, H); g.fillRect(W - 34, 0, 0.7, H);
  g.textAlign = "right"; g.textBaseline = "alphabetic"; g.fillStyle = "rgba(34,32,29,0.5)"; font(g, 500, 9);
  const L0 = 44, LS = (H - 62) / 28;
  for (let i = 1; i <= 28; i++) g.fillText(String(i), 42, L0 + (i - 1) * LS);
  // the counsel's block, top left (greeked), and the clerk's filing box, top right
  typeLines(g, 64, 16, 168, 4, 9, 3.2, 0.32, 3);
  g.strokeStyle = "rgba(34,32,29,0.35)"; g.lineWidth = 0.6; g.strokeRect(W - 150, 10, 108, 40);
  typeLines(g, W - 142, 20, 80, 3, 9, 2.6, 0.2, 4);
  // the court
  g.fillStyle = INK; g.textAlign = "center";
  const CX = (54 + W - 34) / 2;
  track(g, 1.2); fitFont(g, 800, 15, "UNITED STATES DISTRICT COURT", 330); g.fillText("UNITED STATES DISTRICT COURT", CX, 74);
  track(g, 0.8); fitFont(g, 600, 12, "CENTRAL DISTRICT OF CALIFORNIA", 300); g.fillText("CENTRAL DISTRICT OF CALIFORNIA", CX, 90); track(g, 0);
  // the caption: the parties, plainly
  g.fillRect(70, 102, W - 124, 1.1);
  fitFont(g, 800, 34, "ÁLVAREZ", 320); g.fillText("ÁLVAREZ", CX, 138);
  font(g, 600, 17); g.fillText("v.", CX, 161);
  fitFont(g, 800, 26, "GOLDEN BOY PROMOTIONS, DAZN", W - 140); g.fillText("GOLDEN BOY PROMOTIONS, DAZN", CX, 189);
  g.fillRect(70, 203, W - 124, 1.1);
  // the title
  track(g, 5); fitFont(g, 800, 52, "COMPLAINT", 320); g.fillText("COMPLAINT", CX + 2.5, 254); track(g, 0);
  // the body (greeked: not for reading), under where the cheque will lie, and the page's footer
  typeLines(g, 70, 292, W - 124, 10, LS, 3.4, 0.3, 5);
  typeLines(g, 70, 292 + 10 * LS + 4, W - 124, 4, LS, 3.4, 0.3, 9);
  g.fillRect(70, H - 26, W - 124, 0.6);
  font(g, 600, 8); g.fillText("COMPLAINT", CX, H - 14);
}, 3);
/** a page under the cover: pleading paper, its lines greeked (only its edges ever show) */
const pageTex = () => paintTex("pay-page", CP.w, CP.d, (g) => {
  const W = CP.w, H = CP.d;
  g.fillStyle = "#F8F6F0"; g.fillRect(0, 0, W, H);
  grain(g, W, H, 2400, 12, "120,110,95", "255,255,250");
  g.fillStyle = "rgba(34,32,29,0.5)"; g.fillRect(50, 0, 0.9, H); g.fillRect(53.5, 0, 0.9, H); g.fillRect(W - 34, 0, 0.7, H);
  typeLines(g, 70, 40, W - 124, 26, (H - 62) / 28, 3.4, 0.28, 7);
}, 1.5);

/** a MICR line in E-13B's manner: the digits, the transit and on-us symbols drawn as their bars */
const micr = (g: CanvasRenderingContext2D, x: number, y: number, s: number, groups: [string, string][]) => {
  g.save(); g.fillStyle = "rgba(24,22,20,0.85)"; g.textAlign = "left"; g.textBaseline = "alphabetic";
  track(g, 2.2 * s); font(g, 700, 12.5 * s);
  let cx = x;
  const transit = () => { g.fillRect(cx, y - 9 * s, 1.6 * s, 9 * s); g.fillRect(cx + 3 * s, y - 9 * s, 3.2 * s, 3.2 * s); g.fillRect(cx + 3 * s, y - 4.2 * s, 3.2 * s, 4.2 * s); cx += 10 * s; };
  const onus = () => { g.fillRect(cx, y - 9 * s, 1.6 * s, 6 * s); g.fillRect(cx + 2.8 * s, y - 9 * s, 1.6 * s, 6 * s); g.fillRect(cx + 5.6 * s, y - 3 * s, 3.2 * s, 3 * s); cx += 11 * s; };
  for (const [sym, digits] of groups) {
    if (sym === "t") transit(); else onus();
    g.fillText(digits, cx, y); cx += g.measureText(digits).width + 3 * s;
    if (sym === "t") transit(); else onus();
    cx += 12 * s;
  }
  g.restore();
};
/** a guilloche rosette: overlaid hypotrochoids, the security print's own engraving */
const rosette = (g: CanvasRenderingContext2D, cx: number, cy: number, R: number, color: string) => {
  g.save(); g.strokeStyle = color; g.lineWidth = 0.35;
  for (let k = 0; k < 3; k++) {
    const a = R * (0.55 + 0.12 * k), b = R * (0.11 + 0.03 * k), d = R * (0.32 - 0.05 * k);
    g.beginPath();
    for (let i = 0; i <= 1440; i++) {
      const t = (i / 1440) * Math.PI * 2 * 11;
      const x = (a - b) * Math.cos(t) + d * Math.cos(((a - b) / b) * t), y = (a - b) * Math.sin(t) - d * Math.sin(((a - b) / b) * t);
      if (i === 0) g.moveTo(cx + x, cy + y); else g.lineTo(cx + x, cy + y);
    }
    g.stroke();
  }
  g.restore();
};
type ChequeO = { tint: string; tint2: string; wave: string; amount: string; memo: string; no: string; least: boolean; routing: string; account: string };
const chequeTex = (key: string, w: number, h: number, o: ChequeO) => paintTex(key, w, h, (g) => {
  const s = w / 640;   // the layout is drawn for the big cheque's 640 px and scaled for the small one
  // the security paper: a soft two-tone tint, a fine wave pantograph, a guilloche rosette under the payee
  const bg = g.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, o.tint); bg.addColorStop(0.55, o.tint2); bg.addColorStop(1, o.tint);
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  g.strokeStyle = o.wave; g.lineWidth = 0.3;
  for (let k = 0; k < Math.ceil(h / 2.6); k++) { g.beginPath(); for (let x = 0; x <= w; x += 2.5) { const y = k * 2.6 + 1.6 * Math.sin(x * 0.055 + k * 0.62) + 0.8 * Math.sin(x * 0.17 - k); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); } g.stroke(); }
  rosette(g, 210 * s, 150 * s, 120 * s, o.wave.replace(/[\d.]+\)$/, "0.28)"));
  rosette(g, w - 70 * s, 62 * s, 60 * s, o.wave.replace(/[\d.]+\)$/, "0.22)"));
  grain(g, w, h, 1600, key.length, "90,100,90", "255,255,250");
  // the micro-print border: a line of tiny type all the way round (it reads as a fine rule)
  g.save(); g.fillStyle = "rgba(34,40,36,0.5)"; font(g, 600, 3.2 * s); g.textBaseline = "middle";
  const mp = "SECURITY FEATURES INCLUDED  ORIGINAL DOCUMENT  ".repeat(12);
  const strip = (x0: number, y0: number, len: number, ang: number) => { g.save(); g.translate(x0, y0); g.rotate(ang); g.beginPath(); g.rect(0, -3, len, 6); g.clip(); g.fillText(mp, 0, 0); g.restore(); };
  const m = 10 * s;
  strip(m + 4, m, w - 2 * m - 4, 0); strip(w - m, m, h - 2 * m, Math.PI / 2); strip(w - m, h - m, w - 2 * m - 4, Math.PI); strip(m + 4, h - m, h - 2 * m, -Math.PI / 2);
  g.restore();
  g.strokeStyle = "rgba(34,32,29,0.45)"; g.lineWidth = 0.6; g.strokeRect(m + 4 + 3 * s, m + 3 * s, w - 2 * m - 4 - 6 * s, h - 2 * m - 6 * s);
  // top row: the drawer's block (greeked), the number and the date line
  typeLines(g, 28 * s, 26 * s, 150 * s, 2, 9 * s, 3.2 * s, 0.3, 2);
  g.fillStyle = INK; g.textAlign = "right"; g.textBaseline = "alphabetic";
  font(g, 700, 12 * s); g.fillText(o.no, w - 26 * s, 34 * s);
  g.textAlign = "left"; font(g, 600, 9 * s); g.fillText("DATE", w - 196 * s, 56 * s);
  g.fillRect(w - 166 * s, 57 * s, 140 * s, 0.7);
  // the payee
  font(g, 700, 9 * s); g.fillText("PAY TO THE", 28 * s, 92 * s); g.fillText("ORDER OF", 28 * s, 103 * s);
  fitFont(g, 700, 24 * s, "SAÚL ÁLVAREZ", 200 * s); g.fillText("SAÚL ÁLVAREZ", 90 * s, 104 * s);
  g.fillRect(90 * s, 109 * s, 234 * s, 0.8);
  // the amount, big, in its ruled box (a paler window in the tint)
  const bx = 344 * s, by = 74 * s, bw = 268 * s, bh = 78 * s;
  g.fillStyle = "rgba(255,255,250,0.6)"; g.fillRect(bx, by, bw, bh);
  g.strokeStyle = INK; g.lineWidth = 1.3; g.strokeRect(bx, by, bw, bh);
  g.fillStyle = INK; g.textAlign = "left";
  if (o.least) { track(g, 1); font(g, 700, 9.5 * s); g.fillText("AT LEAST", bx + 8 * s, by + 15 * s); track(g, 0); }
  g.textAlign = "center"; fitFont(g, 800, 46 * s, o.amount, bw - 20 * s); g.fillText(o.amount, bx + bw / 2, by + bh - 14 * s);
  // the written amount line (greeked), DOLLARS
  typeLines(g, 28 * s, 128 * s, 290 * s, 1, 10, 3 * s, 0.26, 4);
  g.fillRect(28 * s, 140 * s, 296 * s, 0.7);
  g.textAlign = "left"; font(g, 700, 8.5 * s); g.fillText("DOLLARS", 330 * s, 140 * s);
  // the memo, big
  font(g, 700, 9 * s); g.fillText("MEMO", 28 * s, 214 * s);
  fitFont(g, 800, 40 * s, o.memo, 256 * s); g.fillText(o.memo, 70 * s, 214 * s);
  g.fillRect(70 * s, 220 * s, 268 * s, 0.9);
  // the signature line (greeked)
  g.fillRect(w - 256 * s, 212 * s, 230 * s, 0.9);
  typeLines(g, w - 252 * s, 218 * s, 120 * s, 1, 10, 2.6 * s, 0.22, 6);
  // the MICR line at the foot
  micr(g, 92 * s, h - 20 * s, s, [["t", o.routing], ["o", o.account], ["o", o.no.replace(/\D/g, "")]]);
  // the perforated stub edge on the left: a row of torn bites (holes in the sheet) with the fibres' lighter fringe
  g.save(); g.globalCompositeOperation = "destination-out";
  for (let y = 2; y < h; y += 4.2) { g.beginPath(); g.ellipse(0, y, 1.5, 1.25, 0, 0, Math.PI * 2); g.fill(); }
  g.restore();
  g.fillStyle = "rgba(255,255,250,0.35)"; for (let y = 0; y < h; y += 1.3) g.fillRect(1.2 + 1.2 * hash(y, 2, 9), y, 0.7, 0.9);
}, 3);

/** a sheet lying flat (print up, its top the far side), its underside at y = 0 of the returned group */
const lying = (o: Parameters<typeof paper>[0]) => {
  const g = new THREE.Group();
  const s = paper(o);
  s.rotation.x = -Math.PI / 2;
  s.position.y = o.t ?? 1.2;
  g.add(s);
  return g;
};

export type PayP = { f: number };

export const payModel = (T: PayTiming) => (): Model<PayP> => {
  const root = new THREE.Group();
  const FY = -PAY_FLOOR;

  // ══ THE DESK PAD: a slab of leather-covered board, the grain and stitching on its top ══
  const pad = new THREE.Group(); pad.userData.obj = "pad"; root.add(pad);
  {
    const W = PAD.x1 - PAD.x0, D = PAD.z1 - PAD.z0;
    const side = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#4A2D1D"), roughness: 0.62, bumpMap: pebble(), bumpScale: 0.6, clearcoat: 0.12, clearcoatRoughness: 0.6 });
    const body = rbox(W, PAD.t, D, PAD.r, side, 3);
    body.position.set((PAD.x0 + PAD.x1) / 2, FY + PAD.t / 2, PAD.z1);
    pad.add(body);
    const topM = new THREE.MeshPhysicalMaterial({ map: padTex(), roughness: 0.58, bumpMap: pebble(), bumpScale: 0.7, metalness: 0, clearcoat: 0.18, clearcoatRoughness: 0.55, envMapIntensity: 0.45 });
    const top = mesh(new THREE.PlaneGeometry(W - 2 * PAD.r, D - 2 * PAD.r), topM, false, true);
    top.rotation.x = -Math.PI / 2;
    top.position.set((PAD.x0 + PAD.x1) / 2, FY + PAD.t + 0.04, (PAD.z0 + PAD.z1) / 2);
    pad.add(top);
  }

  // ══ THE COMPLAINT: the blue back, three pages a hair out of square, the cover, two staples (one object) ══
  const cp = new THREE.Group(); cp.userData.obj = "complaint";
  cp.position.set(CP.x, FY, CP.z); cp.rotation.y = rad(CP.yaw); root.add(cp);
  {
    const blue = new THREE.MeshStandardMaterial({ color: new THREE.Color("#3E5F8E"), roughness: 0.8, bumpMap: fibre(BACKER.w, BACKER.d), bumpScale: 0.4, envMapIntensity: 0.35 });
    const back = lying({ w: BACKER.w, h: BACKER.d, t: BACKER.t, face: blue, back: M.paper("#36557F"), edge: M.paper("#34527A"), seg: 30 });
    back.position.set(0, BACKER.h, BACKER.dz);
    cp.add(back);
    const pg = printOn(pageTex(), CP.w, CP.d, 0.9);
    UNDER.forEach((u, k) => {
      const p = lying({ w: CP.w, h: CP.d, t: PAGE_T, face: pg, back: M.paper("#EFEDE6"), edge: M.paper(["#ECE9E1", "#F2EFE8", "#E6E2D9"][k]), seg: 24 });
      p.position.set(u.dx, UNDER_H(k), u.dz); p.rotation.y = rad(u.yaw);
      cp.add(p);
    });
    const face = lying({ w: CP.w, h: CP.d, t: CP.t, face: printOn(complaintTex(), CP.w, CP.d, 0.9), back: M.paper("#EFEDE6"), edge: M.paper("#E9E6DE"), seg: 56,
      curls: [{ corner: "tr", r: 95, lift: 4.5 }, { corner: "tl", r: 50, lift: 1.4 }] });
    face.position.set(0, CP.h, 0);
    cp.add(face);
    // two wire staples across the top margin: a flat crown on the cover, its ends turning down into the stack
    const steel = M.steel("#BFC5CC");
    const top = CP.h + CP.t + 0.42;
    for (const sx of [-140, 140]) {
      const z = -CP.d / 2 + 15;
      const st = wire([[sx - 7.5, top - 1.1, z], [sx - 7, top, z], [sx, top + 0.08, z], [sx + 7, top, z], [sx + 7.5, top - 1.1, z]], 0.42, steel, false, 24);
      st.rotation.z = 0; cp.add(st);
    }
  }

  // ══ THE CHEQUES ══
  const c1Tex = chequeTex("pay-cheque-35", C1.w, C1.d, { tint: "#DDE8D3", tint2: "#CFE0C8", wave: "rgba(70,120,90,0.22)", amount: "$35,000,000", memo: "PER FIGHT", no: "No. 1001", least: true, routing: "122000247", account: "0418 22917" });
  const c2Tex = chequeTex("pay-cheque-15", C2.w, C2.d, { tint: "#DAE3EE", tint2: "#CBD8E8", wave: "rgba(60,95,140,0.22)", amount: "$15,000,000", memo: "FIRST FIGHT", no: "No. 1000", least: false, routing: "122000247", account: "0418 22917" });
  const ch1 = new THREE.Group(); ch1.userData.obj = "cheque-35"; root.add(ch1);
  ch1.add(lying({ w: C1.w, h: C1.d, t: C1.t, face: printOn(c1Tex, C1.w, C1.d, 0.78, true), back: M.paper("#D3DECA"), edge: M.paper("#CBD7C2"), seg: 64,
    bowY: 0.9, curls: [{ corner: "tr", r: 85, lift: 3.4 }, { corner: "br", r: 50, lift: 1.2 }] }));
  const ch2 = new THREE.Group(); ch2.userData.obj = "cheque-15"; root.add(ch2);
  ch2.add(lying({ w: C2.w, h: C2.d, t: C2.t, face: printOn(c2Tex, C2.w, C2.d, 0.78, true), back: M.paper("#CFD9E4"), edge: M.paper("#C7D2DE"), seg: 56,
    bow: 1.1, curls: [{ corner: "bl", r: 70, lift: 3 }, { corner: "tr", r: 60, lift: 2 }] }));

  root.add(makeFloor({ y: PAY_FLOOR, x0: -600, x1: 1700, z0: -900, z1: 1000, reflect: 0, shadow: 0.45, fadeC: [540, 60], fadeR: [900, 760] }));

  const place = (g: THREE.Group, p: { x: number; z: number; h: number; yaw: number; visible: boolean }) => {
    g.visible = p.visible; g.position.set(p.x, FY + p.h, p.z); g.rotation.y = rad(p.yaw);
  };
  return {
    root,
    update: (p) => {
      place(ch1, poseC1(T, p.f));
      place(ch2, poseC2(T, p.f));
    },
  };
};
