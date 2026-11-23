// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE DEAL IN 3-D (039) — "The deal, with the streaming service DAZN and his promoter Golden Boy, 11 fights over five years,
// worth at least $365 million." On the dark ground, three real things:
//   · THE DESK PAD: a deep-green leather blotter (pebble grain, a debossed groove and tan saddle stitching round its border,
//     rounded corners, a bevelled edge) that the contract lies on.
//   · THE CONTRACT (the film's document visual for the deal): a real stack of 28 sheets, each its own sheet with its own
//     slight offset and turn (their cut edges show as separate pages), on a legal-blue backing card, a black cloth tape along
//     the spine and two steel staples through the left margin. Paper has its tooth (a grain bump map), its print sits IN it
//     (fibres break the ink, the ink bleeds a hair), and the title page's free corner lifts a little. The title page TURNS
//     like paper: a roll travels across it from the free edge (its near corner leading, so the fold runs on a diagonal),
//     the sheet wraps round it face down, folds over the staple line and lays itself down on the pad to the left. Title page:
//     DAZN over GOLDEN BOY in plain type, PROMOTIONAL & BROADCAST AGREEMENT. The key-terms page under it: 11 FIGHTS, 5 YEARS,
//     AT LEAST $365,000,000, and a signature line that the pen signs in blue-black ink that is WET as it goes down (a
//     glossy, low-roughness line that dries back to matte).
//   · THE PEN: a black lacquer fountain pen (clearcoat gloss), gold bands, a gold clip with its ball, a cap finial, an ebonite
//     section and feed, and a real two-tone nib: a curved gold plate with its slit, breather hole and imprint lines.
// Units are layer px (y up from the desk, z toward the viewer).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, liveTex, rr, roundRect, fontsReady, type Model } from "../stage";
import { rbox, rad, col, fitFont, track, hash, wire, M, typeLines } from "../kit029";

const INK = "#191513";
const PAGE_BG = "#F5F1E6";

/** the place's layout (desk-local) */
export const DG = { floor: 1500, pivot: { x: 540, z: 0 }, doc: { x: 540, z: 0 } } as const;
const paintEdges = () => paintTex("deal39-edges-v2", 64, 64, (c) => {
  c.fillStyle = "#EDE7DA"; c.fillRect(0, 0, 64, 64);
  for (let i = 0; i < 64; i += 3.2) { c.fillStyle = `rgba(105,92,70,${0.1 + 0.18 * hash(i, 1, 9)})`; c.fillRect(0, i, 64, 1.1); }
}, 4);
/** the desk pad (leather blotter): its extent and thickness */
export const PAD = { x0: -320, x1: 1420, z0: -368, z1: 400, H: 5, R: 30 } as const;
/** the contract's base sits on the pad (a hair above it) */
export const DOC_Y = PAD.H + 0.15;

/** the contract: page W (across, x) × D (down the page, z), its stack of N sheets of SH each, the backing card */
export const PG = { W: 480, D: 620, BLOCK: 10.4, N: 6, SH: 0.5, GAP: 0.12, BACK: 2.4, BX: 8, BTOP: 26 } as const;
/** the stack: a bound block (its cut edges striped by its sheets) under N loose top sheets, each its own, a hair out of square */
export const T_STACK = PG.BLOCK + PG.N * (PG.SH + PG.GAP);
/** the stack's top, the terms page on it, and the title page's mid-surface (its front 0.3 above, its back 0.3 below);
 *  heights in the contract's own frame (add DOC_Y for the desk) */
export const Y_BLOCK = PG.BACK + T_STACK;
export const Y_TERMS = Y_BLOCK + 0.3;
export const Y_COVER = Y_BLOCK + 1.1;
/** the staple line: the title page is held there and turns about it; the staples sit at STX from the spine */
export const HX = 18, STX = 9;
const ST_R = 0.42;
export const ST_TOP = Y_COVER + 0.3 + 2 * ST_R;
/** the turning part of the title page: from the staple line to the free edge */
export const WT = PG.W - HX;

// ══ THE TITLE PAGE'S TURN ══
// Each row of the sheet (w = −0.5 far … +0.5 near) is a curve of arc length s from the staple line, written by its angle θ(s);
// its points are the integral of (cos θ, sin θ), so the sheet never stretches along it.
//   phase A (u 0 … SPLIT): a roll of radius R travels from the free edge to the staple line, the near rows ahead of the far
//     ones (a diagonal fold, as a hand turns a page from its corner); past the roll line the sheet wraps round it and runs
//     back, face down, at 2R over the page (θ = clamp((s − xc) / R, 0, π));
//   phase B (u SPLIT … 1): the turned sheet lays itself down to the left: θ blends from the roll's last shape to the resting
//     drape (a gentle rise over the staples, flat over the spine, then a smooth dip down to the pad).
export const ROLL_R = 30;
export const NS = 96;
export const NZ = 12;
const SPLIT = 0.68;
const LEAD = 90;                 // px the near rows lead the far ones by, mid-turn
const RISE = 0.55, RISEL = 14;   // the drape's rise over the staples
const DIP0 = HX + 13, DIPL = 74;
const REST_Y = 0.55 - DOC_Y + PAD.H;   // the turned page's mid-surface on the pad (contract frame)
const bump = (t: number) => (t <= 0 || t >= 1 ? 0 : Math.sin(Math.PI * t) ** 2);
const restTheta = (beta: number) => (s: number) => Math.PI - RISE * bump(s / RISEL) + beta * bump((s - DIP0) / DIPL);
const integrate = (th: (s: number) => number) => {
  const X = [0], Y = [0], ds = WT / NS;
  for (let i = 1; i <= NS; i++) {
    const t = th((i - 0.5) * ds);
    X.push(X[i - 1] + Math.cos(t) * ds);
    Y.push(Y[i - 1] + Math.sin(t) * ds);
  }
  return { X, Y };
};
/** the dip's angle that lands the sheet on the pad (bisection) */
const BETA = (() => {
  const drop = Y_COVER - REST_Y;
  let lo = 0, hi = 1.4;
  for (let k = 0; k < 60; k++) {
    const m = (lo + hi) / 2, { Y } = integrate(restTheta(m));
    if (-Y[NS] < drop) lo = m; else hi = m;
  }
  return (lo + hi) / 2;
})();
const thetaA = (xc: number) => (s: number) => Math.min(Math.PI, Math.max(0, (s - xc) / ROLL_R));
/** the roll line of row w at phase-A progress a */
const rollAt = (a: number, w: number) => Math.max(0, WT * (1 - a) - LEAD * (w + 0.5) * Math.sin(Math.PI * a));
/** the title page's profile at turn u ∈ [0, 1], row w ∈ [−0.5, 0.5]: X (from the staple line, +x over the page) and Y (from
 *  its resting mid-surface); `flat` is the roll line (the part s < flat still lies on the page) */
export const coverProfile = (u: number, w = 0) => {
  if (u <= SPLIT) { const xc = rollAt(u / SPLIT, w); return { ...integrate(thetaA(xc)), flat: xc }; }
  const v = (u - SPLIT) / (1 - SPLIT), a = thetaA(0), b = restTheta(BETA);
  return { ...integrate((s) => (1 - v) * a(s) + v * b(s)), flat: 0 };
};
/** the free corner's small lift at rest (near, outer corner), fading as the roll reaches it: added only on the flat part */
export const CURL = { r: 120, lift: 4.2 } as const;
export const curlAt = (s: number, zFromFar: number, flat: number) => {
  const d = Math.hypot(WT - s, PG.D - zFromFar);
  if (d >= CURL.r) return 0;
  const k = Math.min(1, Math.max(0, (flat - s) / 24));
  return CURL.lift * ((CURL.r - d) / CURL.r) ** 2 * k * k;
};
// ★ the turn never passes through the contract, its staples or the pad: over the stack (x ≥ −2.5 from the spine) the sheet's
//   underside stays above the terms page; over the staples above their crowns; over the backing card's lip above it; and
//   everywhere above the pad
for (let k = 0; k <= 160; k++) for (const w of [-0.5, -0.25, 0, 0.25, 0.5]) {
  const { X, Y } = coverProfile(k / 160, w);
  for (let i = 0; i <= NS; i++) {
    const y = Y_COVER + Y[i] - 0.3, x = HX + X[i];   // x from the spine
    if (x > -2.5 && y < Y_TERMS + 0.2 - 1e-6) throw new Error(`deal: the title page dips into the contract at u ${k / 160}, w ${w}, s ${i} (y ${y.toFixed(2)})`);
    if (x > STX - 3 && x < STX + 3 && i > 0 && y < ST_TOP + 0.2) throw new Error(`deal: the title page cuts the staples at u ${k / 160}, w ${w}, s ${i}`);
    if (x <= -2.5 && x > -PG.BX - 1 && y < PG.BACK + 0.25) throw new Error(`deal: the title page cuts the backing card's lip at u ${k / 160}, s ${i}`);
    if (y < REST_Y - 0.3 - 0.01) throw new Error(`deal: the title page sinks into the pad at u ${k / 160}, s ${i} (y ${y.toFixed(2)})`);
  }
}

/** where print sits (page px from the page's top-left: px from the spine, py from the far edge) */
export const TPRINT = { marks: [66, 124] as const, title: [204, 246] as const } as const;
export const RPRINT = { row1: 150, row2: 272, row3: [376, 446] as const, sig: [70, 552, 300] as const } as const;
/** page px on the terms page → desk-local (the contract at rest) */
export const onPage = (px: number, py: number) => ({ x: DG.doc.x - PG.W / 2 + px, y: DOC_Y + Y_TERMS, z: DG.doc.z - PG.D / 2 + py });

/** the signature: a cursive run of loops along the line, page px at t ∈ [0, 1] */
export const sigAt = (t: number) => {
  const [x0, y0, x1] = RPRINT.sig;
  // an uneven hand: the loops' pace and size wander, two capitals (the S, the A of the surname), a closing flourish
  const k = 2 * Math.PI * (6.2 * t + 0.32 * Math.sin(9.3 * t) + 0.12 * Math.sin(23 * t));
  const cap = 1 + 1.5 * Math.exp(-(((t - 0.05) / 0.06) ** 2)) + 1.1 * Math.exp(-(((t - 0.4) / 0.055) ** 2));
  const amp = 0.55 + 0.3 * Math.abs(Math.sin(17 * t + 1)) + 0.2 * Math.sin(5 * t);
  return { x: x0 + (x1 - x0 - 28) * t - (6 + 6 * amp) * Math.sin(k) + 28 * Math.max(0, t - 0.86) / 0.14,
    y: y0 - 8 - 12 * cap * amp * Math.cos(k) + 5 * t + 7 * Math.max(0, t - 0.86) / 0.14 };
};

// ══ PAPER: its fibre, its tooth, ink that sits in it ══
/** a fine fibre field (deterministic): short pale and dark strokes at every angle */
const fibreCanvas = (() => {
  let c: HTMLCanvasElement | null = null;
  return () => {
    if (c) return c;
    c = document.createElement("canvas"); c.width = c.height = 512;
    const g = c.getContext("2d")!;
    g.fillStyle = "#808080"; g.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 9000; i++) {
      const x = hash(i, 1, 31) * 512, y = hash(i, 2, 31) * 512, a = hash(i, 3, 31) * Math.PI, l = 2 + 9 * hash(i, 4, 31);
      const v = Math.round(128 + (hash(i, 5, 31) - 0.5) * 120);
      g.strokeStyle = `rgba(${v},${v},${v},0.55)`; g.lineWidth = 0.6 + 0.8 * hash(i, 6, 31);
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
    }
    return c;
  };
})();
const grainTex = (() => {
  let t: THREE.CanvasTexture | null = null;
  return (rx: number, ry: number) => {
    if (!t) { t = new THREE.CanvasTexture(fibreCanvas()); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; }
    const c = t.clone(); c.repeat.set(rx, ry); c.needsUpdate = true;
    return c;
  };
})();
/** paper: a sheet's own colour, its fibre and a faint cockle in the light */
const paperBase = (c: CanvasRenderingContext2D, seed: number) => {
  c.fillStyle = PAGE_BG; c.fillRect(0, 0, PG.W, PG.D);
  const gr = c.createRadialGradient(PG.W * 0.4, PG.D * 0.35, 40, PG.W * 0.5, PG.D * 0.5, PG.D * 0.75);
  gr.addColorStop(0, "rgba(255,255,250,0.35)"); gr.addColorStop(1, "rgba(200,185,160,0.16)");
  c.fillStyle = gr; c.fillRect(0, 0, PG.W, PG.D);
  for (let i = 0; i < 420; i++) { c.fillStyle = `rgba(120,100,70,${0.02 + 0.035 * hash(i, 5, seed)})`; c.fillRect(hash(i, 1, seed) * PG.W, hash(i, 2, seed) * PG.D, 1.5 + 6 * hash(i, 3, seed), 0.6); }
};
/** the ink settles into the paper: the fibre breaks it up a little (multiplied over everything printed) */
const inkIntoPaper = (c: CanvasRenderingContext2D) => {
  c.save();
  c.globalCompositeOperation = "screen"; c.globalAlpha = 0.05;
  c.drawImage(fibreCanvas(), 0, 0, PG.W, PG.D);
  c.globalCompositeOperation = "multiply"; c.globalAlpha = 0.07;
  c.drawImage(fibreCanvas(), 0, 0, PG.W * 0.7, PG.D * 0.7); c.drawImage(fibreCanvas(), PG.W * 0.7, 0, PG.W * 0.7, PG.D * 0.7);
  c.drawImage(fibreCanvas(), 0, PG.D * 0.7, PG.W * 0.7, PG.D * 0.7); c.drawImage(fibreCanvas(), PG.W * 0.7, PG.D * 0.7, PG.W * 0.7, PG.D * 0.7);
  c.restore();
};
const bleed = (c: CanvasRenderingContext2D) => { c.shadowColor = "rgba(36,32,30,0.55)"; c.shadowBlur = 0.9; };
const folio = (c: CanvasRenderingContext2D) => { c.fillStyle = "rgba(28,26,30,0.35)"; rr(c, PG.W / 2 - 10, PG.D - 34, 20, 4.2, 2.1); c.fill(); };

/** the title page's print (also its show-through on the back) */
const drawTitle = (c: CanvasRenderingContext2D) => {
  const W = PG.W;
  c.save();
  bleed(c);
  c.textBaseline = "alphabetic"; c.textAlign = "center"; c.fillStyle = INK;
  // the parties, as plain type, one over the other: DAZN heavy and tight, GOLDEN BOY wider, a short rule between them
  const [m1, m2] = TPRINT.marks;
  track(c, 2);
  const s1 = fitFont(c, 800, 54, "DAZN", 300);
  c.fillText("DAZN", W / 2 + 1, m1 + s1 * 0.36);
  c.fillRect(W / 2 - 24, (m1 + m2) / 2 - 0.6, 48, 1.2);
  track(c, 3);
  const s2 = fitFont(c, 800, 46, "GOLDEN BOY", 340);
  c.fillText("GOLDEN BOY", W / 2 + 1.5, m2 + s2 * 0.36);
  track(c, 0);
  // a double rule, then the title in two lines, set to the same width
  c.fillRect(44, 156, W - 88, 2.2); c.fillRect(44, 162, W - 88, 0.8);
  track(c, 2);
  const t1 = "PROMOTIONAL &", t2 = "BROADCAST AGREEMENT";
  const ts = Math.min(fitFont(c, 800, 44, t1, W - 80), fitFont(c, 800, 44, t2, W - 80));
  c.font = `800 ${ts}px "Archivo", sans-serif`;
  c.fillText(t1, W / 2 + 1, TPRINT.title[0] + ts * 0.36);
  c.fillText(t2, W / 2 + 1, TPRINT.title[1] + ts * 0.36);
  track(c, 0);
  c.fillRect(44, 280, W - 88, 0.8);
  c.restore();
  // the recitals and the opening articles (greeked, at a real 10 pt)
  typeLines(c, 54, 304, W - 108, 4, 13, 4.2, 0.32, 1);
  c.fillStyle = "rgba(28,26,30,0.6)"; rr(c, 54, 372, 110, 6, 3); c.fill();
  typeLines(c, 54, 392, W - 108, 7, 13, 4.2, 0.32, 3);
  typeLines(c, 54, 492, W - 108, 6, 13, 4.2, 0.32, 6);
  folio(c);
};
const paintCover = () => paintTex("deal39-cover-v6", PG.W, PG.D, (c) => { paperBase(c, 1); drawTitle(c); inkIntoPaper(c); }, 3);
const paintCoverBack = () => paintTex("deal39-coverback-v5", PG.W, PG.D, (c) => {
  paperBase(c, 7);
  c.globalAlpha = 0.045; drawTitle(c); c.globalAlpha = 1;
  inkIntoPaper(c);
}, 2);
const paintTerms = () => paintTex("deal39-terms-v6", PG.W, PG.D, (c) => {
  const W = PG.W, L = 44, R = W - 44;
  paperBase(c, 2);
  c.textBaseline = "alphabetic"; c.textAlign = "left";
  // the running head and the schedule's heading (greeked)
  c.fillStyle = "rgba(28,26,30,0.35)"; rr(c, L, 40, 150, 4.2, 2.1); c.fill();
  c.fillStyle = "rgba(28,26,30,0.6)"; rr(c, L, 68, 120, 6, 3); c.fill();
  const label = (y: number, w: number) => { c.fillStyle = "rgba(28,26,30,0.42)"; rr(c, L, y, w, 4.6, 2.3); c.fill(); };
  const rule = (y: number) => { c.fillStyle = "rgba(28,26,30,0.7)"; c.fillRect(L, y, R - L, 1.2); };
  rule(92);
  c.save();
  bleed(c);
  // row 1: the fights
  label(104, 118);
  c.fillStyle = INK; track(c, 1);
  const a = fitFont(c, 800, 76, "11 FIGHTS", R - L - 8);
  c.fillText("11 FIGHTS", L, RPRINT.row1 + a * 0.36);
  rule(204);
  // row 2: the years
  label(218, 96);
  c.fillStyle = INK;
  const b = fitFont(c, 800, 76, "5 YEARS", R - L - 8);
  c.fillText("5 YEARS", L, RPRINT.row2 + b * 0.36);
  rule(322);
  // row 3: the floor of the value
  label(334, 140);
  c.fillStyle = INK; track(c, 4);
  const s1 = fitFont(c, 800, 30, "AT LEAST", 200);
  c.fillText("AT LEAST", L, RPRINT.row3[0] + s1 * 0.36);
  track(c, 0);
  const s2 = fitFont(c, 800, 74, "$365,000,000", R - L - 6);
  c.fillText("$365,000,000", L - 1, RPRINT.row3[1] + s2 * 0.36);
  c.restore();
  rule(484);
  // the signature block: BY, the line, the name and title under it, the date line beside it
  const [sx0, sy, sx1] = RPRINT.sig;
  c.fillStyle = "rgba(28,26,30,0.5)"; rr(c, L, sy - 10, 18, 5, 2.5); c.fill();
  c.fillStyle = INK; c.fillRect(sx0, sy, sx1 - sx0, 1.4);
  c.fillStyle = "rgba(28,26,30,0.4)";
  for (const [x, y, w] of [[sx0, sy + 14, 120], [sx0, sy + 27, 86], [sx1 + 40, sy + 14, 70]] as const) { rr(c, x, y, w, 4.2, 2.1); c.fill(); }
  c.fillStyle = INK; c.fillRect(sx1 + 40, sy, R - sx1 - 40, 1.4);
  folio(c);
  // the staples' two small punctures through the margin
  c.fillStyle = "rgba(60,50,40,0.5)";
  for (const z of [STAPLES[0], STAPLES[1]]) for (const d of [-6, 6]) { c.beginPath(); c.arc(STX, z + d, 0.7, 0, Math.PI * 2); c.fill(); }
  inkIntoPaper(c);
}, 3);
/** the staples' places down the margin (page py) */
const STAPLES = [96, PG.D - 96] as const;

// ══ THE DESK PAD: green leather, a groove and saddle stitching round its border ══
const PW = PAD.x1 - PAD.x0, PD = PAD.z1 - PAD.z0;
const paintPad = () => paintTex("deal39-pad-v1", PW, PD, (c) => {
  c.fillStyle = "#24392F"; c.fillRect(0, 0, PW, PD);
  // the hide's slow variation and a little wear toward the middle (where the work is done)
  for (let i = 0; i < 260; i++) {
    const x = hash(i, 1, 41) * PW, y = hash(i, 2, 41) * PD, r = 30 + 120 * hash(i, 3, 41);
    const g = c.createRadialGradient(x, y, 0, x, y, r);
    const l = hash(i, 4, 41) > 0.5;
    g.addColorStop(0, l ? "rgba(70,100,84,0.10)" : "rgba(8,16,12,0.12)"); g.addColorStop(1, "rgba(0,0,0,0)");
    c.fillStyle = g; c.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  // the debossed groove, then the stitching just outside it
  const ins = 34, sti = 20;
  c.strokeStyle = "rgba(6,12,9,0.75)"; c.lineWidth = 2.4; rr(c, ins, ins, PW - 2 * ins, PD - 2 * ins, PAD.R - 10); c.stroke();
  c.strokeStyle = "rgba(90,130,110,0.25)"; c.lineWidth = 1; rr(c, ins + 1.6, ins + 1.6, PW - 2 * ins, PD - 2 * ins, PAD.R - 10); c.stroke();
  const path: [number, number][] = [];
  const x0 = sti, y0 = sti, x1 = PW - sti, y1 = PD - sti;
  for (let x = x0 + 14; x < x1 - 14; x += 9) path.push([x, y0]);
  for (let y = y0 + 14; y < y1 - 14; y += 9) path.push([x1, y]);
  for (let x = x1 - 14; x > x0 + 14; x -= 9) path.push([x, y1]);
  for (let y = y1 - 14; y > y0 + 14; y -= 9) path.push([x0, y]);
  path.forEach(([x, y], i) => {
    const horiz = y === y0 || y === y1;
    c.fillStyle = "rgba(0,0,0,0.45)"; rr(c, x - (horiz ? 3 : 1.2) + 0.8, y - (horiz ? 1.2 : 3) + 0.8, horiz ? 6 : 2.4, horiz ? 2.4 : 6, 1.2); c.fill();
    c.fillStyle = `rgba(${184 + 10 * hash(i, 1, 5)},${150 + 8 * hash(i, 2, 5)},${100},0.95)`;
    rr(c, x - (horiz ? 3 : 1.2), y - (horiz ? 1.2 : 3), horiz ? 6 : 2.4, horiz ? 2.4 : 6, 1.2); c.fill();
  });
}, 1);
const pebbleCanvas = () => {
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#7a7a7a"; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 2600; i++) {
    const x = hash(i, 1, 51) * 256, y = hash(i, 2, 51) * 256, r = 1.4 + 3.2 * hash(i, 3, 51);
    const gr = g.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
    gr.addColorStop(0, "rgba(200,200,200,0.55)"); gr.addColorStop(0.7, "rgba(140,140,140,0.25)"); gr.addColorStop(1, "rgba(40,40,40,0.5)");
    g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  return c;
};

/** docDx: the contract's x offset (its slide in); docYaw (deg); turn: the title page's turn 0 … 1; sig: the signature's
 *  progress 0 … 1; wet: how wet the fresh ink still is (0 … 1); pen: the nib (desk-local) or null; yaw: the scene's turn (deg) */
export type DealP = { docDx: number; docYaw: number; turn: number; sig: number; wet: number; pen: [number, number, number] | null; yaw: number };

/** the pen's lean: its axis from the nib, toward the right and the writer (laid back: it never hides the figure above the line) */
export const PEN_DIR = new THREE.Vector3(0.56, 0.5, 0.66).normalize();
export const PEN_L = 348;

const flatOf = (shape: THREE.Shape, t: number, bevel = 0, curve = 16) => {
  const g = new THREE.ExtrudeGeometry(shape, { depth: Math.max(0.05, t - 2 * bevel), bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelOffset: -bevel, bevelSegments: 3, curveSegments: curve });
  g.translate(0, 0, bevel);
  g.rotateX(-Math.PI / 2);
  return g;
};

export const dealModel = () => (): Model<DealP> => {
  const root = new THREE.Group();
  const sc = new THREE.Group();
  sc.position.set(DG.pivot.x, -DG.floor, DG.pivot.z);
  root.add(sc);
  const desk = new THREE.Group();
  desk.position.set(-DG.pivot.x, 0, -DG.pivot.z);
  sc.add(desk);

  // ══ THE DESK PAD ══
  {
    const padMap = paintPad();
    padMap.repeat.set(1 / PW, 1 / PD); padMap.offset.set(0.5, 0.5);
    const peb = new THREE.CanvasTexture(pebbleCanvas()); peb.wrapS = peb.wrapT = THREE.RepeatWrapping;
    peb.repeat.set(1 / 60, 1 / 60); peb.anisotropy = 8;
    const leather = new THREE.MeshPhysicalMaterial({ map: padMap, bumpMap: peb, bumpScale: 1.4, roughness: 0.58, metalness: 0, clearcoat: 0.18, clearcoatRoughness: 0.55,
      sheen: 0.35, sheenColor: col("#5E7F6E"), sheenRoughness: 0.6, envMapIntensity: 0.5 });
    const pad = mesh(flatOf(roundRect(PW, PD, PAD.R), PAD.H, 1.6, 20), leather);
    pad.position.set((PAD.x0 + PAD.x1) / 2, 0, (PAD.z0 + PAD.z1) / 2);
    pad.userData.obj = "pad";
    desk.add(pad);
  }

  // ══ THE CONTRACT (one object for the audits: its card, sheets, tape, staples and both pages) ══
  const doc = new THREE.Group();
  doc.userData.obj = "contract";
  desk.add(doc);
  const W = PG.W, D = PG.D;
  // the legal-blue backing card, a lip round the stack and a deeper one beyond its head; a felt-like card with its own tooth
  const blue = new THREE.MeshPhysicalMaterial({ color: col("#3E5F8E"), roughness: 0.8, metalness: 0, sheen: 0.4, sheenColor: col("#7E9CC4"), envMapIntensity: 0.4,
    bumpMap: grainTex(2, 2), bumpScale: 0.6 });
  const card = rbox(W + 2 * PG.BX, PG.BACK, D + PG.BX + PG.BTOP, 0.9, blue, 2);
  card.position.set(0, PG.BACK / 2, D / 2 + PG.BX);   // rbox: its front face at z
  doc.add(card);
  // the stack: the bound block, its cut edges striped by the sheets, then the loose top sheets, each its own, a hair out of
  //   square with the next (their edges show as separate pages)
  const edgeM = new THREE.MeshStandardMaterial({ map: paintEdges(), roughness: 0.92, envMapIntensity: 0.3, bumpMap: paintEdges(), bumpScale: 0.5 });
  const plainM = new THREE.MeshStandardMaterial({ color: col("#ECE6D8"), roughness: 0.9, envMapIntensity: 0.3 });
  const blk = rbox(W - 1, PG.BLOCK - 0.1, D - 1, 0.6, { px: edgeM, nx: edgeM, top: plainM, bottom: plainM, front: edgeM, back: edgeM }, 2);
  blk.position.set(0, PG.BACK + (PG.BLOCK - 0.1) / 2 + 0.05, D / 2 - 0.5);
  doc.add(blk);
  const sheetMats = ["#F1ECE0", "#EAE4D6", "#F4F0E6", "#E8E2D4"].map((h) => new THREE.MeshStandardMaterial({ color: col(h), roughness: 0.9, envMapIntensity: 0.3 }));
  for (let i = 0; i < PG.N; i++) {
    const top = i === PG.N - 1;
    const sh = rbox(W - 0.4, PG.SH, D - 0.4, 0.22, sheetMats[i % 4], 1);
    const jx = top ? 0 : (hash(i, 1, 3) - 0.5) * 2.2, jz = top ? 0 : (hash(i, 2, 3) - 0.5) * 2.2;
    sh.position.set(jx, PG.BACK + PG.BLOCK + i * (PG.SH + PG.GAP) + PG.GAP + PG.SH / 2, D / 2 - 0.2 + jz);
    sh.rotation.y = top ? 0 : (hash(i, 3, 3) - 0.5) * 0.006;
    doc.add(sh);
  }
  // the black cloth tape on the glued spine (its top flush with the stack's)
  const tapeM = new THREE.MeshPhysicalMaterial({ color: col("#141416"), roughness: 0.82, sheen: 0.5, sheenColor: col("#3A3B42"), envMapIntensity: 0.3, bumpMap: grainTex(1, 6), bumpScale: 0.8 });
  const tape = rbox(2.2, T_STACK, D + 2, 0.5, tapeM, 2);
  tape.position.set(-W / 2 - 1.6, PG.BACK + T_STACK / 2, D / 2 + 1);
  doc.add(tape);
  // the terms page: the stack's top sheet, its signature drawn live, its wet ink glossy (a live roughness map)
  const termsLive = liveTex(W, D, 3);
  const wetLive = liveTex(W, D, 1.5);
  wetLive.tex.colorSpace = THREE.NoColorSpace;
  const termsM = new THREE.MeshPhysicalMaterial({ map: termsLive.tex, roughnessMap: wetLive.tex, roughness: 0.9, metalness: 0, envMapIntensity: 0.55,
    sheen: 0.25, sheenColor: col("#FFFFFF"), sheenRoughness: 0.8, bumpMap: grainTex(2.2, 2.8), bumpScale: 0.35 });
  const tg = new THREE.PlaneGeometry(W - 1, D - 1, 8, 8);
  tg.rotateX(-Math.PI / 2);
  const terms = mesh(tg, termsM, false, true);
  terms.position.set(0, Y_TERMS, 0);
  doc.add(terms);
  let lastSig = -1, lastWet = -1, lastFonts = false;
  const paintSig = (p: number, wet: number) => {
    const n = 280;
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= n && i / n <= p; i++) pts.push(sigAt(i / n));
    termsLive.paint((g) => {
      const base = paintTerms();
      lastFonts = fontsReady();
      g.drawImage(base.image as HTMLCanvasElement, 0, 0, W, D);
      if (pts.length < 2) return;
      g.lineCap = "round"; g.lineJoin = "round";
      // the ink feathers a hair into the fibre, then its body; fresh ink is a touch darker where it pools
      for (const [lw, col2] of [[1.4, "rgba(26,37,86,0.28)"], [0, "#1B2558"]] as const) {
        g.strokeStyle = col2;
        for (let i = 1; i < pts.length; i++) {
          g.lineWidth = 1.6 + 0.9 * Math.abs(Math.sin(i * 0.21)) + lw;
          g.beginPath(); g.moveTo(pts[i - 1].x, pts[i - 1].y); g.lineTo(pts[i].x, pts[i].y); g.stroke();
        }
      }
    });
    wetLive.paint((g) => {
      g.fillStyle = "#ffffff"; g.fillRect(0, 0, W, D);
      if (pts.length < 2 || wet <= 0) return;
      g.lineCap = "round"; g.lineJoin = "round";
      for (let i = 1; i < pts.length; i++) {
        const wi = wet * (0.55 + 0.45 * (i / pts.length));
        const v = Math.round(255 * (1 - 0.8 * wi));
        g.strokeStyle = `rgb(${v},${v},${v})`;
        g.lineWidth = 2.4 + 0.9 * Math.abs(Math.sin(i * 0.21));
        g.beginPath(); g.moveTo(pts[i - 1].x, pts[i - 1].y); g.lineTo(pts[i].x, pts[i].y); g.stroke();
      }
    });
  };

  // the title page: the strip under the staples, and the turning part — a front and a back surface 0.6 apart
  const coverM = new THREE.MeshPhysicalMaterial({ map: paintCover(), roughness: 0.88, envMapIntensity: 0.35, sheen: 0.25, sheenColor: col("#FFFFFF"), sheenRoughness: 0.8,
    bumpMap: grainTex(2.2, 2.8), bumpScale: 0.35, side: THREE.FrontSide });
  const backM = new THREE.MeshPhysicalMaterial({ map: paintCoverBack(), roughness: 0.9, envMapIntensity: 0.35, sheen: 0.25, sheenColor: col("#FFFFFF"), sheenRoughness: 0.8,
    bumpMap: grainTex(2.2, 2.8), bumpScale: 0.35, side: THREE.BackSide });
  {
    const strip = new THREE.PlaneGeometry(HX, D, 2, 8);
    strip.rotateX(-Math.PI / 2);
    const uv = strip.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) uv.setX(i, (uv.getX(i) * HX) / W);
    const s = mesh(strip, coverM);
    s.position.set(-W / 2 + HX / 2, Y_COVER + 0.3, 0);
    doc.add(s);
  }
  const nV = (NS + 1) * (NZ + 1);
  const fP = new Float32Array(nV * 3), bP = new Float32Array(nV * 3), UV: number[] = [], I: number[] = [];
  for (let j = 0; j <= NZ; j++) for (let i = 0; i <= NS; i++) UV.push((HX + (WT * i) / NS) / W, 1 - j / NZ);
  for (let j = 0; j < NZ; j++) for (let i = 0; i < NS; i++) {
    const a = j * (NS + 1) + i, b = a + 1, c2 = a + NS + 1, d = c2 + 1;
    I.push(a, c2, b, b, c2, d);
  }
  const mk = (arr: Float32Array) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(UV, 2));
    g.setIndex(I);
    return g;
  };
  const fG = mk(fP), bG = mk(bP);
  const cover = new THREE.Group();
  cover.userData.unit = true;
  doc.add(cover);
  cover.add(mesh(fG, coverM), mesh(bG, backM));
  let lastTurn = -1;
  const shapeCover = (u: number) => {
    for (let j = 0; j <= NZ; j++) {
      const w = j / NZ - 0.5, zf = (D * j) / NZ;
      const { X, Y, flat } = coverProfile(u, w);
      for (let i = 0; i <= NS; i++) {
        const k = j * (NS + 1) + i;
        const i0 = Math.max(0, i - 1), i1 = Math.min(NS, i + 1);
        const tx = X[i1] - X[i0], ty = Y[i1] - Y[i0], l = Math.hypot(tx, ty) || 1;
        const nx = -ty / l, ny = tx / l;
        const s = (WT * i) / NS;
        const x = -W / 2 + HX + X[i], y = Y_COVER + Y[i] + curlAt(s, zf, flat), z = -D / 2 + zf;
        fP[k * 3] = x + nx * 0.3; fP[k * 3 + 1] = y + ny * 0.3; fP[k * 3 + 2] = z;
        bP[k * 3] = x - nx * 0.3; bP[k * 3 + 1] = y - ny * 0.3; bP[k * 3 + 2] = z;
      }
    }
    for (const g of [fG, bG]) { g.attributes.position.needsUpdate = true; g.computeVertexNormals(); g.computeBoundingBox(); g.computeBoundingSphere(); }
  };
  shapeCover(0);
  // the staples: bright steel crowns along the margin, their legs through the stack
  {
    const steel = M.steel("#D4D8DC");
    for (const pz of STAPLES) {
      const st = wire([[0, -1.6, -6.2], [0, -0.1, -6.0], [0, 0.35, -5.2], [0, 0.42, 0], [0, 0.35, 5.2], [0, -0.1, 6.0], [0, -1.6, 6.2]], ST_R, steel, false, 24);
      st.position.set(-W / 2 + STX, Y_COVER + 0.3 + ST_R - 0.42 + 0.02, -D / 2 + pz);
      doc.add(st);
    }
  }

  // ══ THE PEN: black lacquer, gold trim, an ebonite section and feed, a two-tone gold nib; its axis along +y from the nib ══
  const pen = new THREE.Group();
  pen.userData.obj = "pen";
  desk.add(pen);
  {
    const lac = new THREE.MeshPhysicalMaterial({ color: col("#09090B"), roughness: 0.22, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 1.2, specularIntensity: 0.9 });
    const ebon = new THREE.MeshPhysicalMaterial({ color: col("#141313"), roughness: 0.38, metalness: 0, clearcoat: 0.4, clearcoatRoughness: 0.3, envMapIntensity: 0.8 });
    const gold = M.gold("#DDB45A");
    const nibGold = new THREE.MeshPhysicalMaterial({ color: col("#E6C277"), metalness: 1, roughness: 0.2, envMapIntensity: 1.15, side: THREE.DoubleSide });
    const rhod = new THREE.MeshPhysicalMaterial({ color: col("#E4E6E8"), metalness: 1, roughness: 0.18, envMapIntensity: 1.1, side: THREE.DoubleSide });
    const dark = new THREE.MeshBasicMaterial({ color: col("#0A0806") });
    // the nib: a curved plate (the upper ~200° of a cone), a rhodium tip zone, its slit, breather hole and imprint lines;
    // the feed under it. Built with its open face toward local +z, then rolled to face up.
    const nibG = new THREE.Group();
    pen.add(nibG);
    const nibProf = (r0: number) => [[0.5, 0], [1.2, 2], [2.8, 8], [4.6, 15], [6.0, 22], [6.9, 27]].map(([r, y]) => new THREE.Vector2(r + r0, y));
    const plate = mesh(new THREE.LatheGeometry(nibProf(0).slice(2), 40, -Math.PI * 0.56, Math.PI * 1.12), nibGold);
    nibG.add(plate);
    const tipZ = mesh(new THREE.LatheGeometry(nibProf(0).slice(0, 3), 24, -Math.PI * 0.5, Math.PI), rhod);
    nibG.add(tipZ);
    const tip = mesh(new THREE.SphereGeometry(0.75, 12, 8), rhod);
    tip.position.set(0, 0.6, 0.15);
    nibG.add(tip);
    // the slit down the centre line to the breather hole, the hole itself, and the imprint's two fine arcs
    const slit = mesh(new THREE.BoxGeometry(0.3, 13.6, 0.3), dark, false, false);
    slit.position.set(0, 8.4, 2.95 + 0.1);
    slit.rotation.x = Math.atan2(4.6 - 1.2, 15 - 2);
    nibG.add(slit);
    const hole = mesh(new THREE.CircleGeometry(0.95, 18), dark, false, false);
    hole.position.set(0, 15, 4.6 + 0.1);
    hole.rotation.x = Math.atan2(6.0 - 4.6, 22 - 15);
    nibG.add(hole);
    // the imprint: two fine arcs engraved across the shoulder
    for (const yy of [18.6, 21.2]) {
      const r = 4.6 + ((yy - 15) / 7) * 1.4 + 0.08, pts: [number, number, number][] = [];
      for (let k = 0; k <= 12; k++) { const ph = -0.75 + (1.5 * k) / 12; pts.push([r * Math.sin(ph), yy, r * Math.cos(ph)]); }
      nibG.add(wire(pts, 0.13, dark, false, 24));
    }
    const feed = mesh(lathe([[0.4, 4], [1.6, 8], [3.4, 15], [5.0, 22], [5.8, 27], [0, 27.2]], 24), ebon);
    feed.position.z = -0.9; feed.scale.z = 0.8;
    nibG.add(feed);
    // the section (ebonite), the gold band, the lacquer barrel, the cap band, the cap with its gold finial
    pen.add(mesh(lathe([[0, 25.6], [6.8, 26], [8.2, 34], [9.0, 58], [9.6, 84], [10, 92], [0, 92.4]], 48), ebon));
    pen.add(mesh(lathe([[9.8, 92], [11.6, 92.6], [11.8, 100], [10, 100.6], [9.8, 100.6]], 48), gold));
    pen.add(mesh(lathe([[0, 100], [11.2, 100.2], [12.4, 120], [12.6, 260], [12.2, 300], [0, 300.4]], 64), lac));
    pen.add(mesh(lathe([[12, 262], [13.4, 262.6], [13.5, 267], [13.4, 272], [12, 272.6], [11.9, 272.6]], 64), gold));
    pen.add(mesh(lathe([[0, 298], [12.4, 298.4], [11.6, 330], [8.4, 341], [5.2, 343.6], [0, 344]], 64), lac));
    pen.add(mesh(lathe([[0, 342.8], [5.4, 343], [5.6, 345.4], [4.4, 347.6], [0, 348]], 32), gold));
    const clip = wire([[0, 334, 12.2], [0, 330, 14.4], [0, 296, 15.4], [0, 262, 14.6], [0, 255, 13.2]], 2.2, gold, false, 32);
    clip.scale.x = 2.2;
    pen.add(clip);
    const ball = mesh(new THREE.SphereGeometry(3.4, 20, 14), gold);
    ball.position.set(0, 254, 12.4);
    pen.add(ball);
    pen.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), PEN_DIR);
    // roll the nib so its open face looks up (world +y), as a writing hand holds it
    const upL = new THREE.Vector3(0, 1, 0).applyQuaternion(pen.quaternion.clone().invert());
    nibG.rotation.y = Math.atan2(upL.x, upL.z);
  }

  // ══ THE FLOOR: the shadow catcher and a faint mirror on the dark ground round the pad ══
  root.add(makeFloor({ y: DG.floor, x0: -900, x1: 2100, z0: -800, z1: 800, reflect: 0.1, shadow: 0.55, fadeC: [DG.pivot.x, 0], fadeR: [1250, 660] }));

  return {
    root,
    update: (p) => {
      sc.rotation.y = rad(p.yaw);
      doc.position.set(DG.doc.x + p.docDx, DOC_Y, DG.doc.z);
      doc.rotation.y = rad(p.docYaw);
      if (Math.abs(p.turn - lastTurn) > 1e-5) { shapeCover(p.turn); lastTurn = p.turn; }
      // a texture painted before the faces had loaded is repainted once they have
      if (!lastFonts && fontsReady()) { coverM.map = paintCover(); backM.map = paintCoverBack(); lastSig = -1; }
      if (Math.abs(p.sig - lastSig) > 1e-4 || Math.abs(p.wet - lastWet) > 1e-3 || lastSig < 0) { paintSig(p.sig, p.wet); lastSig = p.sig; lastWet = p.wet; }
      pen.visible = !!p.pen;
      if (p.pen) pen.position.set(...p.pen);
    },
  };
};
