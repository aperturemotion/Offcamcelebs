// ══════════════════════════════════════════════════════════════════════════════════════════════
// JUNE IN 3-D (040) — "The number came from LIV's boss, Greg Norman. In June, he told The Washington Post the offer was
// mind-blowingly enormous. High nine digits." On the dark ground, on a navy leather desk pad (pebble grain, a darker turned
// border with tan saddle stitching, rounded corners, its own thickness), three real things:
//   · THE NAME PLATE: a solid walnut desk wedge (a back, a narrow flat top and a 44° front slope, every edge rounded, straight
//     grain with pores under a satin lacquer) on a strip of green baize, a BRUSHED BRASS plate on its slope held by two domed
//     brass pins, engraved and black-filled: GREG NORMAN over CEO, LIV GOLF. It slides in on its baize from the left and
//     stops by friction (constant deceleration) on "Greg Norman".
//   · THE NEWSPAPER: a broadsheet folded in half (above the fold up), its folded block with the page edges striped along its
//     sides and a rounded fold at the near edge, the front page a real sheet of newsprint (a fine fibre tooth, a faint bow, a
//     lifted far corner): THE WASHINGTON POST in plain type (no masthead art), JUNE 2022 on the dateline, and set across the
//     columns as a pull-quote: "Mind-blowingly enormous." "High nine digits." with GREG NORMAN, LIV GOLF CEO. Body type is
//     greeked (not for reading). It glides in from the right on its own air and touches down on "The Washington Post".
//   · THE NUMBER BOARD: an ebonised hardwood tray (black satin lacquer) with nine recessed wells lined in bottle-green baize,
//     a gilt "$" and two gilt commas painted on its top: $ _ _ _ , _ _ _ , _ _ _. Each well has a brushed-brass lid on a
//     hinge barrel. It slides in from the near side on "High", drops the last few px onto the newspaper, and on "digits" its
//     nine lids spring open in a run, left to right: every well is EMPTY (the number was never given).
// Units are layer px; desk-local y UP from the desk (the floor at layer y DESK.floor), z toward the viewer.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, slabOf, roundRect, type Model } from "../stage";
import { M, rbox, rad, col, fitFont, track, hash, paper, typeLines, font, fillBoldItalic } from "../kit029";
import { GLIDE, SETTLE, clamp01 } from "../../r45/tokens";

export const DESK = { floor: 1400 } as const;
/** the desk pad: its extent on the desk (x, z), thickness and corner radius */
export const PAD = { x0: -520, x1: 1720, z0: -300, z1: 420, t: 6, r: 26 } as const;

// ══ THE NAME PLATE ══
/** the walnut wedge: length L (x), depth D (z), back height HB; its profile (z, y) from the back foot round to the front toe */
export const NP = { x: -150, z: 10, L: 560, D: 112, HB: 94, felt: 1.4, yaw: 0 } as const;
const PROF: [number, number][] = [[-56, 0], [56, 0], [56, 12], [-31, 94], [-56, 94]];
/** the slope: from the toe's top (56, 12) to the top's front edge (−31, 94) */
const SL0: [number, number] = [56, 12], SL1: [number, number] = [-31, 94];
const SLEN = Math.hypot(SL1[0] - SL0[0], SL1[1] - SL0[1]);
const SLOPE_A = Math.atan2(-(SL0[0] - SL1[0]), SL1[1] - SL0[1]);   // the rotation about x that turns +z into the slope's normal
/** the brass plate on the slope: width, height along the slope, thickness */
export const BP = { w: 512, h: 86, t: 2.4 } as const;

// ══ THE NEWSPAPER ══
/** the folded broadsheet: width, depth (above the fold), its folded block's height; its centre on the pad */
export const NEWS = { w: 580, d: 548, block: 3.2, x: 600, z: 30, yaw: 1.2 } as const;
/** the front page's underside over the desk */
export const NEWS_SHEET_H = PAD.t + NEWS.block + 0.2;
const NEWS_SHEET_T = 0.4;
/** where the readable print sits on the front page (print px boxes x0, y0, x1, y1; y from the far edge) */
export const NPRINT = {
  mast: [28, 34, 552, 92] as const,
  date: [28, 104, 200, 126] as const,
  quote: [34, 150, 548, 368] as const,
  who: [34, 380, 420, 404] as const,
};

// ══ THE NUMBER BOARD ══
const WELL = 52, LIDW = 56, WD = 84, LIDD = 90;
/** the board: width, depth, base height and the frame's height; it lies on the pad to the right of the newspaper */
export const BD = { w: 676, d: 140, base: 9, frame: 13, x: 1290, z: 70 } as const;
export const BOARD_H = BD.base + BD.frame;
/** the wells' left edges (board-local x from its left side) */
export const WELLS = [86, 144, 202, 288, 346, 404, 490, 548, 606];
/** the gilt marks: the "$" and the two commas (board-local x centres) */
export const GILT = { dollar: 48, commas: [271, 473] } as const;
/** the board's underside: a hair over the pad */
export const BOARD_Y = PAD.t + 0.15;

// ══ POSES (the place's timing drives them; the checks project them) ══
export type JuneTiming = { plate: readonly [number, number]; news: readonly [number, number]; board: readonly [number, number]; lids: number };
const ss = (a: number, b: number, x: number) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
/** the plate slides on its baize from the left and stops by friction: constant deceleration, x = x0 − d (1 − u)² */
export const posePlate = (T: JuneTiming, f: number) => {
  const u = clamp01((f - T.plate[0]) / (T.plate[1] - T.plate[0]));
  const k = (1 - u) ** 2;
  return { x: NP.x - 1250 * k, z: NP.z + 10 * k, yaw: NP.yaw - 4 * k, h: PAD.t + 0.25, visible: f > T.plate[0] - 1 };
};
/** the newspaper glides in from the right a little above the pad on its own air, touches down at 80% of the run, brakes */
export const poseNews = (T: JuneTiming, f: number) => {
  const u = clamp01((f - T.news[0]) / (T.news[1] - T.news[0]));
  return { x: NEWS.x + 1250 * (1 - GLIDE(u)), z: NEWS.z - 18 * (1 - GLIDE(u)), h: PAD.t + 28 * (1 - ss(0, 0.8, u)), yaw: NEWS.yaw + 9 * (1 - GLIDE(u)), visible: f > T.news[0] - 1 };
};
/** the board slides in from the near side held a little above the pad, then drops the last px under gravity and lands */
export const poseBoard = (T: JuneTiming, f: number) => {
  const [a, b] = T.board, drop = 7;
  const u = clamp01((f - a) / (b - drop - a));
  const fall = clamp01((f - (b - drop)) / drop);
  const lift = 22 * (1 - fall * fall);
  return { x: BD.x + 60 * (1 - GLIDE(u)), z: BD.z + 900 * (1 - GLIDE(u)), h: BOARD_Y + lift, yaw: 0.8 - 6 * (1 - GLIDE(u)), visible: f > a - 1 };
};
/** lid k's angle (rad; 0 shut, negative open up and back): a spring snaps it open past its stop and it settles */
export const LID_OPEN = rad(-106);
export const lidAt = (T: JuneTiming, k: number, f: number) => {
  const a = T.lids + 1.6 * k, t = f - a;
  if (t <= 0) return 0;
  if (t < 6) return LID_OPEN * SETTLE(t / 6);
  const d = t - 6;
  return LID_OPEN + rad(4) * Math.exp(-d / 2.2) * Math.sin(d * 1.3);
};
export const lidsDone = (T: JuneTiming) => Math.ceil(T.lids + 1.6 * 8 + 6 + 8);

/** a point of a flat thing lying on the pad (u, v from its top-left in its print px; the top is the far side) */
export const flatPt = (s: { w: number; d: number }, p: { x: number; z: number; yaw: number; h: number }, u: number, v: number, top = 0) => {
  const lx = u - s.w / 2, lz = v - s.d / 2, a = rad(p.yaw), c = Math.cos(a), sn = Math.sin(a);
  return { x: p.x + lx * c + lz * sn, h: p.h + top, z: p.z - lx * sn + lz * c };
};
/** the plate's slope point at (u along its length 0…L, t along the slope 0 toe … 1 top), at a pose */
export const slopePt = (p: { x: number; z: number; yaw: number; h: number }, u: number, t: number) => {
  const zz = SL0[0] + (SL1[0] - SL0[0]) * t, yy = SL0[1] + (SL1[1] - SL0[1]) * t + NP.felt;
  const lx = u - NP.L / 2, a = rad(p.yaw), c = Math.cos(a), sn = Math.sin(a);
  return { x: p.x + lx * c + zz * sn, h: p.h + yy, z: p.z - lx * sn + zz * c };
};
/** the plate's engraving box along the slope (fractions 0 toe … 1 top) and its length span */
export const PLATE_INK = { u0: (NP.L - BP.w) / 2 + 18, u1: (NP.L + BP.w) / 2 - 18, t0: 0.5 - (BP.h / SLEN) * 0.42, t1: 0.5 + (BP.h / SLEN) * 0.42 };
/** the wedge's top back edge (for the caption-band check) */
export const plateTop = (p: { x: number; z: number; yaw: number; h: number }) =>
  [0, NP.L / 4, NP.L / 2, (3 * NP.L) / 4, NP.L].map((u) => {
    const lx = u - NP.L / 2, a = rad(p.yaw), c = Math.cos(a), sn = Math.sin(a);
    return { x: p.x + lx * c - 56 * sn, h: p.h + NP.felt + NP.HB, z: p.z - lx * sn - 56 * c };
  });

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
let pebbleT: THREE.Texture | null = null;
const pebble = () => {
  if (pebbleT) return pebbleT;
  const c = document.createElement("canvas"); c.width = c.height = 512;
  const g = c.getContext("2d")!;
  g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 11000; i++) {
    const v = 90 + Math.round(80 * hash(i, 71, 5));
    g.fillStyle = `rgba(${v},${v},${v},0.5)`;
    const x = hash(i, 72, 5) * 512, y = hash(i, 73, 5) * 512, r = 1 + 2.2 * hash(i, 74, 5);
    g.beginPath(); g.ellipse(x, y, r, r * (0.7 + 0.5 * hash(i, 75, 5)), hash(i, 76, 5) * 3, 0, Math.PI * 2); g.fill();
  }
  pebbleT = new THREE.CanvasTexture(c);
  pebbleT.wrapS = pebbleT.wrapT = THREE.RepeatWrapping;
  pebbleT.repeat.set(9, 4.5);
  return pebbleT;
};
/** the pad's leather: navy, a soft mottle and wear, a darker turned border stitched on both sides */
const padTex = () => {
  const W = PAD.x1 - PAD.x0, D = PAD.z1 - PAD.z0;
  return paintTex("june-pad", W, D, (g) => {
    g.fillStyle = "#243247"; g.fillRect(0, 0, W, D);
    g.save(); g.filter = "blur(18px)";
    for (let i = 0; i < 200; i++) {
      g.fillStyle = `rgba(${hash(i, 1, 17) > 0.5 ? "10,16,28" : "70,92,124"},${0.03 + 0.04 * hash(i, 2, 17)})`;
      g.beginPath(); g.ellipse(hash(i, 3, 17) * W, hash(i, 4, 17) * D, 40 + 140 * hash(i, 5, 17), 30 + 80 * hash(i, 6, 17), hash(i, 7, 17) * 3, 0, Math.PI * 2); g.fill();
    }
    g.restore();
    for (let i = 0; i < 3600; i++) { g.fillStyle = `rgba(${hash(i, 8, 17) > 0.5 ? "8,12,22" : "110,130,160"},${0.04 + 0.05 * hash(i, 9, 17)})`; g.fillRect(hash(i, 10, 17) * W, hash(i, 11, 17) * D, 0.8 + 2.5 * hash(i, 12, 17), 0.5); }
    const wear = g.createRadialGradient(W * 0.55, D * 0.5, 40, W * 0.55, D * 0.5, W * 0.5);
    wear.addColorStop(0, "rgba(90,112,146,0.14)"); wear.addColorStop(1, "rgba(90,112,146,0)");
    g.fillStyle = wear; g.fillRect(0, 0, W, D);
    const B = 36;
    g.fillStyle = "rgba(6,10,20,0.4)";
    g.fillRect(0, 0, W, B); g.fillRect(0, D - B, W, B); g.fillRect(0, B, B, D - 2 * B); g.fillRect(W - B, B, B, D - 2 * B);
    g.strokeStyle = "rgba(200,215,240,0.14)"; g.lineWidth = 1; g.strokeRect(B + 0.5, B + 0.5, W - 2 * B - 1, D - 2 * B - 1);
    g.strokeStyle = "rgba(4,6,12,0.45)"; g.lineWidth = 1.2; g.strokeRect(B + 2, B + 2, W - 2 * B - 4, D - 2 * B - 4);
    const stitch = (inset: number) => {
      g.save(); g.setLineDash([5, 3.2]); g.lineCap = "round";
      g.strokeStyle = "rgba(4,6,12,0.6)"; g.lineWidth = 1.6; g.strokeRect(inset + 0.6, inset + 0.8, W - 2 * inset, D - 2 * inset);
      g.strokeStyle = "rgba(212,182,136,0.85)"; g.lineWidth = 1.2; g.strokeRect(inset, inset, W - 2 * inset, D - 2 * inset);
      g.restore();
    };
    stitch(10); stitch(B - 8);
  }, 1.5);
};

/** walnut, straight grain along u (the plate's length): colour bands, wavy grain lines, open pores */
const walnutTex = () => paintTex("june-walnut", 1024, 256, (g) => {
  const w = 1024, h = 256;
  g.fillStyle = "#5C3B28"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 46; i++) {
    const p = hash(i, 1, 33) * h, wd = 4 + 22 * hash(i, 2, 33);
    g.fillStyle = hash(i, 3, 33) > 0.5 ? `rgba(128,86,56,${0.08 + 0.12 * hash(i, 4, 33)})` : `rgba(28,15,8,${0.1 + 0.14 * hash(i, 4, 33)})`;
    g.fillRect(0, p, w, wd);
  }
  for (let i = 0; i < 260; i++) {
    const p0 = hash(i, 3, 19) * h, a = 1 + 3 * hash(i, 4, 19), ph = hash(i, 5, 19) * 6.28;
    g.strokeStyle = hash(i, 6, 19) > 0.4 ? `rgba(34,18,9,${0.1 + 0.22 * hash(i, 7, 19)})` : `rgba(165,115,78,${0.06 + 0.1 * hash(i, 8, 19)})`;
    g.lineWidth = 0.35 + 1.0 * hash(i, 9, 19);
    g.beginPath();
    for (let s = 0; s <= w; s += 6) { const d = p0 + a * Math.sin(s / 70 + ph) + 0.6 * Math.sin(s / 13 + ph * 2); if (s === 0) g.moveTo(s, d); else g.lineTo(s, d); }
    g.stroke();
  }
  for (let i = 0; i < 3400; i++) {
    const x = hash(i, 11, 23) * w, y = hash(i, 12, 23) * h, l = 1.5 + 5 * hash(i, 13, 23);
    g.fillStyle = `rgba(18,9,4,${0.2 + 0.3 * hash(i, 14, 23)})`; g.fillRect(x, y, l, 0.6);
  }
}, 2);

/** brushed brass with the engraving: fine streaks along the length, a softly worn edge, the letters cut and filled black */
const BRASS = "#C99A3E";
const plateTex = () => paintTex("june-brass-plate", BP.w, BP.h, (g) => {
  const W = BP.w, H = BP.h;
  const bg = g.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#D6AA52"); bg.addColorStop(0.5, "#C99A3E"); bg.addColorStop(1, "#B98A34");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 1400; i++) {   // the brushing: long fine streaks along the plate
    const y = hash(i, 1, 51) * H, x = hash(i, 2, 51) * W * 0.8, l = 40 + 200 * hash(i, 3, 51);
    g.fillStyle = hash(i, 4, 51) > 0.5 ? `rgba(255,232,170,${0.05 + 0.08 * hash(i, 5, 51)})` : `rgba(90,60,20,${0.05 + 0.08 * hash(i, 5, 51)})`;
    g.fillRect(x, y, l, 0.35 + 0.4 * hash(i, 6, 51));
  }
  // the engraved border: a fine cut line inset, filled black
  g.strokeStyle = "rgba(28,20,10,0.85)"; g.lineWidth = 1.1; g.strokeRect(8, 8, W - 16, H - 16);
  g.fillStyle = "#1C140B"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 5); const s1 = fitFont(g, 800, 40, "GREG NORMAN", W - 70); g.fillText("GREG NORMAN", W / 2 + 2.5, 16 + s1 * 0.92);
  track(g, 4.5); fitFont(g, 700, 23, "CEO, LIV GOLF", W - 120); g.fillText("CEO, LIV GOLF", W / 2 + 2.2, H - 15);
  track(g, 0);
  // a little wear on the corners (the brass rubbed brighter, the lacquer gone)
  for (const [cx, cy] of [[0, 0], [W, 0], [0, H], [W, H]]) {
    const gr = g.createRadialGradient(cx, cy, 0, cx, cy, 22);
    gr.addColorStop(0, "rgba(255,226,150,0.25)"); gr.addColorStop(1, "rgba(255,226,150,0)");
    g.fillStyle = gr; g.fillRect(cx - 22, cy - 22, 44, 44);
  }
}, 3);
/** the plate's roughness (G) and metalness (B): brass is metal, satin; the black fill is paint */
const platePbr = () => {
  const t = paintTex("june-brass-pbr", BP.w, BP.h, (g) => {
    const W = BP.w, H = BP.h;
    g.fillStyle = "rgb(0,92,255)"; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(0,${70 + Math.round(60 * hash(i, 7, 51))},255,0.5)`; g.fillRect(hash(i, 8, 51) * W * 0.8, hash(i, 9, 51) * H, 40 + 180 * hash(i, 10, 51), 0.5); }
    g.strokeStyle = "rgb(0,200,0)"; g.lineWidth = 1.1; g.strokeRect(8, 8, W - 16, H - 16);
    g.fillStyle = "rgb(0,200,0)"; g.textAlign = "center"; g.textBaseline = "alphabetic";
    track(g, 5); const s1 = fitFont(g, 800, 40, "GREG NORMAN", W - 70); g.fillText("GREG NORMAN", W / 2 + 2.5, 16 + s1 * 0.92);
    track(g, 4.5); fitFont(g, 700, 23, "CEO, LIV GOLF", W - 120); g.fillText("CEO, LIV GOLF", W / 2 + 2.2, H - 15);
    track(g, 0);
  }, 2);
  t.colorSpace = THREE.NoColorSpace;
  return t;
};

/** the page edges of the folded paper: many thin layers, a little uneven */
const edgesTex = () => paintTex("june-news-edges", 64, 64, (c) => {
  c.fillStyle = "#E6E0D0"; c.fillRect(0, 0, 64, 64);
  for (let i = 0; i < 64; i += 2.1) { c.fillStyle = `rgba(110,98,78,${0.12 + 0.22 * hash(i, 1, 29)})`; c.fillRect(0, i, 64, 0.8); }
}, 4);

// ══ PRINT ══
const NINK = "#1E1C1A";
const grain = (g: CanvasRenderingContext2D, w: number, h: number, n: number, seed: number) => {
  for (let i = 0; i < n; i++) {
    g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? "110,100,82" : "255,252,240"},${0.04 + 0.06 * hash(i, 2, seed)})`;
    g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 0.4 + hash(i, 5, seed) * 1.8, 0.3);
  }
};
const frontTex = () => paintTex("june-front", NEWS.w, NEWS.d, (g) => {
  const W = NEWS.w, H = NEWS.d;
  // newsprint: warm grey-cream, slightly uneven, a fibre speckle
  const bg = g.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#EDE7D8"); bg.addColorStop(1, "#E5DECD");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  grain(g, W, H, 5200, 37);
  // the ears and the top rule
  typeLines(g, 28, 14, 120, 2, 7, 2.4, 0.3, 1);
  typeLines(g, W - 148, 14, 120, 2, 7, 2.4, 0.3, 2);
  // the name, in plain type across the page
  g.fillStyle = NINK; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 3); fitFont(g, 800, 50, "THE WASHINGTON POST", W - 64); g.fillText("THE WASHINGTON POST", W / 2 + 1.5, 82); track(g, 0);
  g.fillRect(28, 93, W - 56, 2.2); g.fillRect(28, 98, W - 56, 0.8);
  // the dateline
  g.textAlign = "left"; track(g, 2.5); font(g, 700, 24); g.fillText("JUNE 2022", 28, 124); track(g, 0);
  typeLines(g, W - 210, 113, 182, 1, 8, 3, 0.3, 4);
  g.fillRect(28, 132, W - 56, 0.8);
  // the pull-quote, across the columns: rules above and below, the words in the quote face, the attribution in type
  g.fillRect(34, 144, W - 68, 3);
  g.fillStyle = NINK;
  const qs = fitFont(g, 300, 66, "“Mind-blowingly", W - 80, true);
  fillBoldItalic(g, "“Mind-blowingly", 34, 150 + qs * 0.98, qs);
  fillBoldItalic(g, "enormous.”", 60, 150 + qs * 0.98 + qs * 1.02, qs);
  const q2 = fitFont(g, 300, 50, "“High nine digits.”", W - 90, true);
  fillBoldItalic(g, "“High nine digits.”", 34, 150 + qs * 2.0 + q2 * 1.08, q2);
  g.fillRect(34, 370, 120, 2);
  g.textAlign = "left"; track(g, 2.4); fitFont(g, 700, 20, "GREG NORMAN, LIV GOLF CEO", 380); g.fillText("GREG NORMAN, LIV GOLF CEO", 34, 400); track(g, 0);
  g.fillRect(34, 414, W - 68, 1);
  // the columns below (greeked: not for reading), with their rules
  const cols = 5, cw = (W - 56 - (cols - 1) * 14) / cols;
  for (let c = 0; c < cols; c++) {
    const x = 28 + c * (cw + 14);
    typeLines(g, x, 428, cw, 14, 8.2, 2.6, 0.32, c + 5);
    if (c > 0) g.fillRect(x - 7, 426, 0.6, H - 440);
  }
  // the fold: a soft crease shadow along the near edge
  const fold = g.createLinearGradient(0, H - 16, 0, H);
  fold.addColorStop(0, "rgba(60,50,35,0)"); fold.addColorStop(1, "rgba(60,50,35,0.16)");
  g.fillStyle = fold; g.fillRect(0, H - 16, W, 16);
}, 3);

/** the board's top: black satin lacquer with a faint grain, a gilt border line, the gilt "$" and commas */
const GOLD = "#D2AC5A";
const boardTop = () => paintTex("june-board-top", BD.w, BD.d, (g) => {
  const W = BD.w, H = BD.d;
  g.fillStyle = "#17130F"; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 160; i++) {   // ebonised oak: the open grain still shows a little under the lacquer
    const y = hash(i, 1, 43) * H, a = 0.5 + 1.5 * hash(i, 2, 43);
    g.strokeStyle = `rgba(${hash(i, 3, 43) > 0.5 ? "60,48,36" : "0,0,0"},${0.12 + 0.18 * hash(i, 4, 43)})`; g.lineWidth = 0.4 + hash(i, 5, 43);
    g.beginPath(); for (let x = 0; x <= W; x += 8) { const yy = y + a * Math.sin(x / 50 + i); if (x === 0) g.moveTo(x, yy); else g.lineTo(x, yy); } g.stroke();
  }
  g.strokeStyle = GOLD; g.lineWidth = 1.4; g.strokeRect(9, 9, W - 18, H - 18);
  g.fillStyle = GOLD; g.textAlign = "center"; g.textBaseline = "middle";
  fitFont(g, 800, 84, "$", 52); g.fillText("$", GILT.dollar, H / 2 + 4);
  font(g, 800, 76); for (const x of GILT.commas) g.fillText(",", x, H / 2 + 18);
  // the gilt rubbed thin in places
  g.globalCompositeOperation = "destination-out";
  for (let i = 0; i < 500; i++) { g.fillStyle = `rgba(0,0,0,${0.2 + 0.4 * hash(i, 6, 43)})`; g.fillRect(hash(i, 7, 43) * 100, hash(i, 8, 43) * H, 0.8, 0.8); }
  g.globalCompositeOperation = "source-over";
}, 3);
const feltTex = () => paintTex("june-felt", 64, 96, (g) => {
  g.fillStyle = "#1D3A2B"; g.fillRect(0, 0, 64, 96);
  for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${hash(i, 1, 47) > 0.5 ? "60,100,80" : "5,15,10"},${0.15 + 0.2 * hash(i, 2, 47)})`; g.fillRect(hash(i, 3, 47) * 64, hash(i, 4, 47) * 96, 0.6, 0.6); }
}, 3);

/** a lid's top: the board's black lacquer and a fine gilt rule inset round it */
const lidTex = () => paintTex("june-lid", LIDW, LIDD, (g) => {
  g.fillStyle = "#17130F"; g.fillRect(0, 0, LIDW, LIDD);
  for (let i = 0; i < 40; i++) {
    const x = hash(i, 1, 53) * LIDW;
    g.strokeStyle = `rgba(${hash(i, 2, 53) > 0.5 ? "60,48,36" : "0,0,0"},${0.12 + 0.18 * hash(i, 3, 53)})`; g.lineWidth = 0.4 + 0.6 * hash(i, 4, 53);
    g.beginPath(); g.moveTo(x, 0); g.lineTo(x + 1.5 * Math.sin(i), LIDD); g.stroke();
  }
  g.strokeStyle = "rgba(210,172,90,0.75)"; g.lineWidth = 0.9; g.strokeRect(5, 5, LIDW - 10, LIDD - 10);
}, 3);

// ══ THE MODEL ══
const lying = (o: Parameters<typeof paper>[0]) => {
  const g = new THREE.Group();
  const s = paper(o);
  s.rotation.x = -Math.PI / 2;
  s.position.y = o.t ?? 1.2;
  g.add(s);
  return g;
};

export type JuneP = { f: number };

export const juneModel = (T: JuneTiming) => (): Model<JuneP> => {
  const root = new THREE.Group();
  const FY = -DESK.floor;
  const brass = new THREE.MeshPhysicalMaterial({ color: col(BRASS), metalness: 1, roughness: 0.3, envMapIntensity: 1.0 });

  // ══ THE DESK PAD ══
  const pad = new THREE.Group(); pad.userData.obj = "pad"; root.add(pad);
  {
    const W = PAD.x1 - PAD.x0, D = PAD.z1 - PAD.z0;
    const side = new THREE.MeshPhysicalMaterial({ color: col("#1B2638"), roughness: 0.62, bumpMap: pebble(), bumpScale: 0.6, clearcoat: 0.12, clearcoatRoughness: 0.6 });
    const body = rbox(W, PAD.t, D, PAD.t / 2 - 0.2, side, 3);
    body.position.set((PAD.x0 + PAD.x1) / 2, FY + PAD.t / 2, PAD.z1);
    pad.add(body);
    const topM = new THREE.MeshPhysicalMaterial({ map: padTex(), roughness: 0.6, bumpMap: pebble(), bumpScale: 0.7, metalness: 0, clearcoat: 0.18, clearcoatRoughness: 0.55, envMapIntensity: 0.45 });
    const top = mesh(new THREE.PlaneGeometry(W - 2 * PAD.t, D - 2 * PAD.t), topM, false, true);
    top.rotation.x = -Math.PI / 2;
    top.position.set((PAD.x0 + PAD.x1) / 2, FY + PAD.t + 0.04, (PAD.z0 + PAD.z1) / 2);
    pad.add(top);
  }

  // ══ THE NAME PLATE ══
  const plate = new THREE.Group(); plate.userData.obj = "plate"; root.add(plate);
  {
    // the baize under it, a hair inside its footprint
    const baize = new THREE.MeshStandardMaterial({ color: col("#24402F"), roughness: 0.95, bumpMap: fibre(NP.L, NP.D), bumpScale: 0.5 });
    const felt = rbox(NP.L - 14, NP.felt, NP.D - 12, 0.5, baize, 2);
    felt.position.set(0, NP.felt / 2, (NP.D - 12) / 2);
    plate.add(felt);
    // the walnut wedge: its profile extruded along its length, every edge rounded
    const sh = new THREE.Shape();
    PROF.forEach(([z, y], i) => (i === 0 ? sh.moveTo(-z, y) : sh.lineTo(-z, y)));
    sh.closePath();
    const g = slabOf(sh, NP.L, 2.6, 4);
    // ★ the grain runs along the length: UVs from the length and the profile's run, so the streaks follow the wood
    const pos = g.attributes.position as THREE.BufferAttribute, uv = g.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (-pos.getZ(i)) / NP.L, (pos.getY(i) - pos.getX(i) + 120) / 300);
    uv.needsUpdate = true;
    const wt = walnutTex();
    const wood = new THREE.MeshPhysicalMaterial({ map: wt, bumpMap: wt, bumpScale: 0.8, roughness: 0.46, clearcoat: 0.5, clearcoatRoughness: 0.3, envMapIntensity: 0.55 });
    const body = mesh(g, wood);
    // turned a quarter about y: the extrusion (its z, 0 … −L) becomes the length (x, centred by +L/2), and the shape's x (the
    // profile's −z) becomes z again
    body.rotation.y = Math.PI / 2;
    body.position.set(NP.L / 2, NP.felt, 0);
    plate.add(body);
    // the brass plate on the slope, its back on the wood, held by two domed pins
    const mid = [(SL0[0] + SL1[0]) / 2, (SL0[1] + SL1[1]) / 2 + NP.felt];
    const face = new THREE.Group();
    face.position.set(0, mid[1], mid[0]);
    face.rotation.x = SLOPE_A;
    plate.add(face);
    const pm = new THREE.MeshPhysicalMaterial({ map: plateTex(), roughnessMap: platePbr(), metalnessMap: platePbr(), roughness: 1, metalness: 1, bumpMap: plateTex(), bumpScale: 0.5, envMapIntensity: 0.9 });
    const edge = brass;
    const bp = rbox(BP.w, BP.h, BP.t, 0.9, { px: edge, nx: edge, top: edge, bottom: edge, front: pm, back: edge }, 2);
    bp.position.set(0, 0, BP.t + 0.15);
    face.add(bp);
    const pinG = lathe([[0.01, 0], [4.2, 0], [4.0, 0.9], [3.2, 1.8], [1.6, 2.4], [0.01, 2.55]], 24);
    for (const sx of [-BP.w / 2 + 14, BP.w / 2 - 14]) {
      const pin = mesh(pinG, brass);
      pin.rotation.x = Math.PI / 2;
      pin.position.set(sx, 0, BP.t + 0.15);
      face.add(pin);
    }
  }

  // ══ THE NEWSPAPER ══
  const news = new THREE.Group(); news.userData.obj = "newspaper"; root.add(news);
  {
    const em = new THREE.MeshStandardMaterial({ map: edgesTex(), roughness: 0.95, envMapIntensity: 0.3 });
    const plainM = M.paper("#E6E0D1");
    const block = rbox(NEWS.w - 3, NEWS.block, NEWS.d - 2, 1.5, { px: em, nx: em, top: plainM, bottom: plainM, front: plainM, back: em }, 3);
    block.position.set(-0.5, NEWS.block / 2 + 0.1, (NEWS.d - 2) / 2);
    news.add(block);
    const pm = M.print(frontTex(), 0.9);
    pm.bumpMap = fibre(NEWS.w, NEWS.d); pm.bumpScale = 0.35;
    const sheet = lying({ w: NEWS.w, h: NEWS.d, t: NEWS_SHEET_T, face: pm, back: M.paper("#E4DDCC"), edge: M.paper("#E2DBCA"), seg: 60,
      bow: 0.5, curls: [{ corner: "tr", r: 120, lift: 5 }, { corner: "tl", r: 60, lift: 1.6 }] });
    sheet.position.y = NEWS.block + 0.2;
    news.add(sheet);
  }

  // ══ THE NUMBER BOARD ══
  const board = new THREE.Group(); board.userData.obj = "board"; root.add(board);
  const lids: THREE.Group[] = [];
  {
    const lac = new THREE.MeshPhysicalMaterial({ color: col("#16120E"), roughness: 0.42, clearcoat: 0.55, clearcoatRoughness: 0.28, envMapIntensity: 0.7 });
    const base = rbox(BD.w, BD.base, BD.d, 2.4, lac, 3);
    base.position.set(0, BD.base / 2, BD.d / 2);
    board.add(base);
    // the frame: the outline with nine wells cut through it
    const outline = roundRect(BD.w, BD.d, 7);
    for (const wx of WELLS) {
      const hole = new THREE.Path();
      const x0 = wx - BD.w / 2, x1 = x0 + WELL, y0 = -WD / 2, y1 = WD / 2, r = 4;
      hole.moveTo(x0 + r, y0); hole.lineTo(x1 - r, y0); hole.quadraticCurveTo(x1, y0, x1, y0 + r); hole.lineTo(x1, y1 - r);
      hole.quadraticCurveTo(x1, y1, x1 - r, y1); hole.lineTo(x0 + r, y1); hole.quadraticCurveTo(x0, y1, x0, y1 - r); hole.lineTo(x0, y0 + r);
      hole.quadraticCurveTo(x0, y0, x0 + r, y0);
      outline.holes.push(hole);
    }
    const topM = new THREE.MeshPhysicalMaterial({ map: boardTop(), roughness: 0.4, clearcoat: 0.55, clearcoatRoughness: 0.25, envMapIntensity: 0.7 });
    const fg = slabOf(outline, BD.frame, 1.4, 8);
    const frame = mesh(fg, [topM, lac]);
    // slabOf's front cap (group 0) is the top once turned: rotate the extrusion upright (shape y → −z, depth → down)
    frame.rotation.x = -Math.PI / 2;
    frame.position.set(0, BOARD_H, 0);
    board.add(frame);
    // the wells' baize floors
    const fm = new THREE.MeshStandardMaterial({ map: feltTex(), roughness: 0.96, bumpMap: fibre(WELL, WD), bumpScale: 0.6, envMapIntensity: 0.25 });
    for (const wx of WELLS) {
      const fl = mesh(new THREE.PlaneGeometry(WELL - 0.6, WD - 0.6), fm, false, true);
      fl.rotation.x = -Math.PI / 2;
      fl.position.set(wx - BD.w / 2 + WELL / 2, BD.base + 0.08, 0);
      board.add(fl);
    }
    // the lids: ebonised wood like the board, a gilt rule round each top, on a brass hinge barrel at the well's far edge, a
    //   small domed brass knob at the near edge
    const lm = new THREE.MeshPhysicalMaterial({ map: lidTex(), roughness: 0.4, clearcoat: 0.55, clearcoatRoughness: 0.25, envMapIntensity: 0.7 });
    const knobG = lathe([[0.01, 0], [3.6, 0], [3.4, 1.2], [2.2, 2.6], [0.01, 3.0]], 20);
    for (const wx of WELLS) {
      const lg = new THREE.Group();
      lg.position.set(wx - BD.w / 2 + WELL / 2, BOARD_H + 1.05, -LIDD / 2 + 1);
      const lid = rbox(LIDW, 2, LIDD, 0.8, { px: lac, nx: lac, top: lm, bottom: lac, front: lac, back: lac }, 2);
      lid.position.set(0, 0, LIDD - 0.2);
      lg.add(lid);
      const barrel = mesh(new THREE.CylinderGeometry(1.25, 1.25, LIDW - 8, 14).rotateZ(Math.PI / 2), brass);
      barrel.position.set(0, 0.3, -0.6);
      lg.add(barrel);
      const kn = mesh(knobG, brass);
      kn.position.set(0, 1, LIDD - 9);
      lg.add(kn);
      board.add(lg);
      lids.push(lg);
    }
  }

  root.add(makeFloor({ y: DESK.floor, x0: -1200, x1: 2000, z0: -900, z1: 1100, reflect: 0.1, shadow: 0.55, fadeC: [230, 60], fadeR: [1150, 620] }));

  const place = (g: THREE.Group, p: { x: number; z: number; h: number; yaw: number; visible: boolean }) => {
    g.visible = p.visible; g.position.set(p.x, FY + p.h, p.z); g.rotation.y = rad(p.yaw);
  };
  return {
    root,
    update: (p) => {
      place(plate, posePlate(T, p.f));
      place(news, poseNews(T, p.f));
      place(board, poseBoard(T, p.f));
      lids.forEach((lg, k) => { lg.rotation.x = lidAt(T, k, p.f); });
    },
  };
};
