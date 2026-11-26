// ══════════════════════════════════════════════════════════════════════════════════════════════
// PAPER IN 3-D (041) — "That's $192 million on paper, and it leaves out the grill's early years." On the cream ground, on a
// bottle-green leather desk pad (pebble grain, a darker turned border with tan stitching, its own thickness), two real things:
//   · THE ADDING MACHINE and its TAPE: a 1990s desktop printing adding machine in warm putty ABS (a sloped keyboard of
//     charcoal and ivory keys, a big "+" bar, a red "T" total key), a roll of adding-machine paper on a steel spindle between
//     two charcoal brackets on its rear deck, and behind the roll the printer's exit: a dark slot under a serrated chrome tear
//     bar, the printed tape sliding out over a charcoal paper chute (27°) and on across the pad. The tape is real bond receipt
//     paper (off-white, a fibre tooth, a torn zig-zag lead end that curls up a little off the pad, a faint cup), printed in
//     fixed-pitch impact type in purple-black ribbon ink (uneven density, a hair of bleed, each wheel a touch off its line):
//         38,096,000 +  /  16,644,000 +  /  137,500,000 +  /  (a blank line)  /  192,240,000 T  (double height, bold)
//     The machine prints each line inside, behind the slot, and feeds the paper on: each printed line comes out of the slot and
//     slides down the chute; after the total it feeds the whole printout across the pad (the roll turns with it).
//   · FOUR YEAR CARDS: ruled card stock (a red header rule, faint blue rules), "1995", "1996", "1997", "1998" in bold type, and
//     under each a blank amount line "$ ________". They glide in from the right on their own air and touch down face up in a
//     2 × 2 block beside the tape, one after another.
// Units are layer px; desk-local y UP from the desk (the floor at layer y DESK.floor), z toward the viewer.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, slabOf, roundRect, type Model } from "../stage";
import { M, rbox, rad, col, fitFont, track, hash, paper, font } from "../kit029";
import { GLIDE, clamp01 } from "../../r45/tokens";

export const DESK = { floor: 1400 } as const;
/** the desk pad: its extent on the desk (x, z), thickness and corner radius */
export const PAD = { x0: -660, x1: 1400, z0: -760, z1: 1500, t: 6, r: 26 } as const;

// ══ THE TAPE ══
/** the tape: width, thickness, its centre line x; the printed texture's length (t from the lead end) */
export const TAPE = { w: 480, t: 0.5, x: 0, TL: 1000 } as const;
/** the paper chute's lip (z): the machine stands on the near side of it, the tape runs away from it across the pad */
export const ZL = -200;
/** the slot the tape leaves the printer by (s = 0 of the tape's path) */
export const SLOT = { z: ZL + 190, h: 120 } as const;
/** the print head, inside the machine: a line is struck at s = −HEAD */
export const HEAD = 30;
/** the tape's front over the pad where it lies flat */
export const FLAT_H = PAD.t + 0.9;
/** the printed lines (t of each line's centre from the lead end, and its print height along the tape) */
export const L0 = 60;
const PITCH = [76, 76, 120] as const;
export const PRINT_TEXT = ["38,096,000", "16,644,000", "137,500,000", "192,240,000"] as const;

// the path (z, h) the tape follows from the slot: down the chute, over its rounded lip, and a soft S down onto the pad
const CH0: [number, number] = [SLOT.z, SLOT.h], CH1: [number, number] = [ZL + 16, 26];
const lerp2 = (a: [number, number], b: [number, number], u: number) => new THREE.Vector2(a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u);
const SPLINE = new THREE.SplineCurve([
  lerp2(CH0, CH1, 0), lerp2(CH0, CH1, 1 / 3), lerp2(CH0, CH1, 2 / 3), lerp2(CH0, CH1, 1),
  new THREE.Vector2(ZL + 6, 20.2), new THREE.Vector2(ZL - 2, 14.4), new THREE.Vector2(ZL - 9, 10.4),
  new THREE.Vector2(ZL - 18, 8.0), new THREE.Vector2(ZL - 32, FLAT_H + 0.05), new THREE.Vector2(ZL - 52, FLAT_H), new THREE.Vector2(ZL - 80, FLAT_H),
]);
const SL = SPLINE.getLength();
const SAMP = 1400;
const PTS = SPLINE.getSpacedPoints(SAMP);
const CHUTE_DIR = (() => { const d = Math.hypot(CH1[0] - CH0[0], CH1[1] - CH0[1]); return [(CH1[0] - CH0[0]) / d, (CH1[1] - CH0[1]) / d] as const; })();
/** the tape's path at arc length s from the slot: z, h (its front) and the unit tangent (dz, dh) */
export const pathAt = (s: number) => {
  if (s <= 0) return { z: SLOT.z + CHUTE_DIR[0] * s, h: SLOT.h + CHUTE_DIR[1] * s, dz: CHUTE_DIR[0], dh: CHUTE_DIR[1] };
  if (s >= SL) { const e = PTS[SAMP]; return { z: e.x - (s - SL), h: FLAT_H, dz: -1, dh: 0 }; }
  const x = (s / SL) * SAMP, i = Math.min(SAMP - 1, Math.floor(x)), u = x - i;
  const a = PTS[i], b = PTS[i + 1];
  const d = Math.hypot(b.x - a.x, b.y - a.y) || 1;
  return { z: a.x + (b.x - a.x) * u, h: Math.max(FLAT_H, a.y + (b.y - a.y) * u), dz: (b.x - a.x) / d, dh: (b.y - a.y) / d };
};
/** where the tape first lies flat on the pad (s) */
export const S_FLAT = SL;
/** the feeds after each strike: a line's pitch, and after the total as far as lays it out flat on the pad, clear of the S */
const T_TOTAL = L0 + PITCH[0] + PITCH[1] + PITCH[2] + HEAD;
const FEEDS = [...PITCH, Math.ceil(S_FLAT + 26 + 30 + T_TOTAL - (L0 + PITCH[0] + PITCH[1] + PITCH[2]))] as const;
const atPrint = (k: number) => L0 + FEEDS.slice(0, k).reduce((a, b) => a + b, 0);
export const LINES = [0, 1, 2, 3].map((k) => ({ t: atPrint(k) + HEAD, h: k === 3 ? 60 : 33 }));
export const L_END = atPrint(4);
/** the chute's end: the arc length where the tape leaves the lip */
export const S_LIP = (() => { for (let s = 0; s < SL; s += 0.5) if (pathAt(s).z <= ZL + 6) return s; return SL; })();
/** a small lateral drift once on the pad (the tape never runs dead straight) */
const drift = (s: number) => (s > S_FLAT ? 0.000045 * (s - S_FLAT) ** 2 : 0);
/** the lead end's curl off the pad (the roll's memory), only where it lies on the pad */
const curl = (t: number, sLead: number) => (t < 150 ? 16 * (1 - t / 150) ** 2.2 : 0) * clamp01((sLead - S_FLAT - 30) / 140);

/** a point ON the tape's front: out-length L, t from the lead end, u across (0 left … 1 right); its normal lift `up` */
export const tapePt = (L: number, t: number, u: number, up = 0) => {
  const s = L - t, p = pathAt(s);
  const nz = p.dh, nh = -p.dz;   // the up-facing normal of the path
  const cup = 0.9 * (2 * u - 1) ** 2 * clamp01((s - S_FLAT) / 40);
  const lift = curl(t, L) + cup + up;
  return { x: TAPE.x - TAPE.w / 2 + TAPE.w * u + drift(s), h: p.h + nh * lift, z: p.z + nz * lift };
};

// ══ TIMING ══
/** prints: the four strike frames (each line struck over 3 f, then fed) */
export type PaperTiming = { prints: readonly number[]; cards: readonly (readonly [number, number])[] };
const FEED_DUR = [5, 5, 7, 16];
const STRIKE = 3;
const sstep = (x: number) => { const t = clamp01(x); return t * t * (3 - 2 * t); };
/** the tape's out-length (from the slot) at f: L0, plus each line's feed after its strike */
export const tapeLen = (T: PaperTiming, f: number) =>
  L0 + FEEDS.reduce((acc, a, k) => acc + a * sstep((f - (T.prints[k] + STRIKE)) / FEED_DUR[k]), 0);
/** the frame the last feed (after the total) has stopped */
export const feedDone = (T: PaperTiming) => T.prints[3] + STRIKE + FEED_DUR[3];

// ══ THE CARDS ══
export const CARD = { w: 420, d: 252, t: 1.5 } as const;
export const YEARS = ["1995", "1996", "1997", "1998"] as const;
/** the cards' resting places: column-major (1995 far left, 1996 near left, 1997 far right, 1998 near right), with a slight
 *  hand-dealt yaw each */
export const CARD_AT = [
  { x: 498, z: -580, yaw: 1.6 }, { x: 508, z: -288, yaw: -1.1 },
  { x: 950, z: -586, yaw: -0.9 }, { x: 958, z: -294, yaw: 1.8 },
] as const;
/** the card's height over the desk at rest (its underside) */
export const CARD_Y = PAD.t + 0.35;
export const poseCard = (T: PaperTiming, k: number, f: number) => {
  const [a, b] = T.cards[k], r = CARD_AT[k];
  const u = clamp01((f - a) / (b - a));
  const g = GLIDE(u);
  return { x: r.x + 1500 * (1 - g), z: r.z + 30 * (1 - g), h: CARD_Y + 30 * (1 - sstep(u / 0.8)), yaw: r.yaw + 11 * (1 - g), visible: f > a - 1 };
};
/** a point of a card lying on the pad (u, v from its top-left in its print px; the top is the far side) */
export const cardPt = (p: { x: number; z: number; yaw: number; h: number }, u: number, v: number, top = CARD.t) => {
  const lx = u - CARD.w / 2, lz = v - CARD.d / 2, a = rad(p.yaw), c = Math.cos(a), sn = Math.sin(a);
  return { x: p.x + lx * c + lz * sn, h: p.h + top, z: p.z - lx * sn + lz * c };
};
/** the cards' print boxes (x0, y0, x1, y1 in card px) */
export const CARD_INK = { year: [26, 22, 250, 104] as const, amount: [26, 150, CARD.w - 34, 196] as const };

// ══ THE MACHINE (z from the chute's lip toward the viewer) ══
export const MACH = { x: 40, w: 1060, front: ZL + 1100, rear: SLOT.z, deck: 132, base: PAD.t + 6 } as const;
export const ROLL = { z: ZL + 370, r: 78, w: TAPE.w + 8, h: MACH.deck + 4 + 78 } as const;
/** the keyboard's slope: from its far edge (z0, h0) down to its near edge (z1, h1) */
const KB = { z0: ZL + 500, h0: 120, z1: MACH.front - 34, h1: 58 } as const;

// ══ SURFACES ══
let pebbleT: THREE.Texture | null = null;
const pebble = (rx = 9, ry = 4.5) => {
  if (!pebbleT) {
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
  }
  const t = pebbleT.clone();
  t.repeat.set(rx, ry); t.needsUpdate = true;
  return t;
};
let fibreC: HTMLCanvasElement | null = null;
const fibre = (rx: number, ry: number) => {
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
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry);
  return t;
};

/** the pad's leather: bottle green, a soft mottle and wear, a darker turned border stitched in tan */
const padTex = () => {
  const W = PAD.x1 - PAD.x0, D = PAD.z1 - PAD.z0;
  return paintTex("paper-pad", W, D, (g) => {
    g.fillStyle = "#26402F"; g.fillRect(0, 0, W, D);
    g.save(); g.filter = "blur(18px)";
    for (let i = 0; i < 220; i++) {
      g.fillStyle = `rgba(${hash(i, 1, 17) > 0.5 ? "10,24,16" : "74,108,86"},${0.03 + 0.05 * hash(i, 2, 17)})`;
      g.beginPath(); g.ellipse(hash(i, 3, 17) * W, hash(i, 4, 17) * D, 40 + 140 * hash(i, 5, 17), 30 + 80 * hash(i, 6, 17), hash(i, 7, 17) * 3, 0, Math.PI * 2); g.fill();
    }
    g.restore();
    for (let i = 0; i < 3800; i++) { g.fillStyle = `rgba(${hash(i, 8, 17) > 0.5 ? "8,18,12" : "120,150,128"},${0.04 + 0.05 * hash(i, 9, 17)})`; g.fillRect(hash(i, 10, 17) * W, hash(i, 11, 17) * D, 0.8 + 2.5 * hash(i, 12, 17), 0.5); }
    const wear = g.createRadialGradient(W * 0.4, D * 0.3, 40, W * 0.4, D * 0.3, W * 0.5);
    wear.addColorStop(0, "rgba(96,132,106,0.16)"); wear.addColorStop(1, "rgba(96,132,106,0)");
    g.fillStyle = wear; g.fillRect(0, 0, W, D);
    const B = 36;
    g.fillStyle = "rgba(4,14,8,0.4)";
    g.fillRect(0, 0, W, B); g.fillRect(0, D - B, W, B); g.fillRect(0, B, B, D - 2 * B); g.fillRect(W - B, B, B, D - 2 * B);
    g.strokeStyle = "rgba(200,230,210,0.14)"; g.lineWidth = 1; g.strokeRect(B + 0.5, B + 0.5, W - 2 * B - 1, D - 2 * B - 1);
    g.strokeStyle = "rgba(2,8,4,0.45)"; g.lineWidth = 1.2; g.strokeRect(B + 2, B + 2, W - 2 * B - 4, D - 2 * B - 4);
    const stitch = (inset: number) => {
      g.save(); g.setLineDash([5, 3.2]); g.lineCap = "round";
      g.strokeStyle = "rgba(2,8,4,0.6)"; g.lineWidth = 1.6; g.strokeRect(inset + 0.6, inset + 0.8, W - 2 * inset, D - 2 * inset);
      g.strokeStyle = "rgba(214,184,136,0.85)"; g.lineWidth = 1.2; g.strokeRect(inset, inset, W - 2 * inset, D - 2 * inset);
      g.restore();
    };
    stitch(10); stitch(B - 8);
  }, 1.2);
};

// ── PRINT: fixed-pitch impact type in ribbon ink ──
const INK = "38,33,48";
/** strike one line of fixed-pitch type into `g`, right-aligned at xr (a cell per digit, a narrow one per comma), each
 *  wheel a touch off its line, each strike its own density */
const strike = (g: CanvasRenderingContext2D, text: string, xr: number, base: number, adv: number, size: number, weight: number, sy: number, seed: number) => {
  const cells = [...text].map((ch) => (ch === "," ? adv * 0.48 : adv));
  let x = xr - cells.reduce((a, b) => a + b, 0);
  g.textAlign = "center"; g.textBaseline = "alphabetic";
  font(g, weight, size);
  [...text].forEach((ch, i) => {
    const w = cells[i], dy = (hash(i, seed, 7) - 0.5) * 1.6, a = 0.8 + 0.16 * hash(i, seed, 8);
    g.save();
    g.translate(x + w / 2 + (hash(i, seed, 9) - 0.5) * 0.8, base + dy);
    g.scale(1, sy);
    g.fillStyle = `rgba(${INK},${a})`;
    g.fillText(ch, 0, 0);
    g.restore();
    x += w;
  });
};
/** the tape's print, painted on its own canvas first: ribbon speckle eats into the ink, then it is laid on the paper with a
 *  hair of bleed */
const tapeTex = () => paintTex("paper-tape", TAPE.w, TAPE.TL, (g) => {
  const W = TAPE.w, H = TAPE.TL;
  // bond paper: warm off-white, a faint lengthwise unevenness, fibres
  const bg = g.createLinearGradient(0, 0, W, 0);
  bg.addColorStop(0, "#F1EEE4"); bg.addColorStop(0.5, "#F6F3EA"); bg.addColorStop(1, "#EFEBE0");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 4200; i++) {
    g.fillStyle = `rgba(${hash(i, 1, 41) > 0.5 ? "150,140,120" : "255,253,246"},${0.05 + 0.07 * hash(i, 2, 41)})`;
    g.fillRect(hash(i, 3, 41) * W, hash(i, 4, 41) * H, 0.4 + hash(i, 5, 41) * 0.8, 0.8 + 3 * hash(i, 6, 41));
  }
  // the print
  const pc = document.createElement("canvas"); pc.width = g.canvas.width; pc.height = g.canvas.height;
  const p = pc.getContext("2d")!;
  const sc = g.canvas.width / W;
  p.setTransform(sc, 0, 0, sc, 0, 0);
  const XR = W - 96, SYM = W - 54;
  LINES.forEach((ln, k) => {
    const total = k === 3;
    const adv = total ? 35 : 29, size = total ? 56 : 46, sy = total ? 1.5 : 1;
    const base = ln.t + 0.35 * size * sy;
    strike(p, PRINT_TEXT[k], XR, base, adv, size, total ? 800 : 600, sy, 11 + k * 5);
    strike(p, total ? "T" : "+", SYM + adv / 2, base, adv, size, total ? 800 : 600, sy, 41 + k);
  });
  p.globalCompositeOperation = "destination-out";
  for (let i = 0; i < 9000; i++) {
    p.fillStyle = `rgba(0,0,0,${0.25 + 0.5 * hash(i, 1, 43)})`;
    p.fillRect(hash(i, 2, 43) * W, hash(i, 3, 43) * H, 0.5 + 0.7 * hash(i, 4, 43), 0.5 + 0.7 * hash(i, 5, 43));
  }
  p.globalCompositeOperation = "source-over";
  g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.filter = "blur(1.1px)"; g.drawImage(pc, 0, 0); g.restore();
  // the lead end: torn against the tear bar's teeth (a zig-zag; what is torn away is clear)
  g.save(); g.globalCompositeOperation = "destination-out";
  g.beginPath(); g.moveTo(0, 0); g.lineTo(W, 0);
  const n = 30;
  for (let i = n; i >= 0; i--) g.lineTo((W * i) / n, (i % 2 ? 7 : 1.5) + 1.2 * hash(i, 3, 47));
  g.closePath(); g.fillStyle = "#000"; g.fill();
  g.restore();
}, 3);

/** a year card: ruled card stock, the year in bold type, a blank amount line */
const cardTex = (k: number) => paintTex(`paper-card-${k}`, CARD.w, CARD.d, (g) => {
  const W = CARD.w, H = CARD.d;
  const bg = g.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#F8F5EC"); bg.addColorStop(1, "#F1EDE2");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 2600; i++) {
    g.fillStyle = `rgba(${hash(i, 1, 51 + k) > 0.5 ? "150,140,120" : "255,253,246"},${0.05 + 0.06 * hash(i, 2, 51 + k)})`;
    g.fillRect(hash(i, 3, 51 + k) * W, hash(i, 4, 51 + k) * H, 0.5 + hash(i, 5, 51 + k), 0.4);
  }
  // the rules: a red header rule, faint blue rules below
  g.fillStyle = "rgba(196,72,64,0.75)"; g.fillRect(0, 118, W, 2);
  g.fillStyle = "rgba(110,146,196,0.42)";
  for (let y = 152; y < H - 6; y += 30) g.fillRect(0, y, W, 1.2);
  // the year
  g.fillStyle = "#24201C"; g.textAlign = "left"; g.textBaseline = "alphabetic";
  track(g, 2); const s = fitFont(g, 800, 92, YEARS[k], 230); g.fillText(YEARS[k], 26, 22 + s * 0.78); track(g, 0);
  // the blank amount line
  font(g, 700, 44); g.fillText("$", 28, 190);
  g.fillStyle = "rgba(36,32,28,0.85)"; g.fillRect(64, 192, W - 98, 2.4);
  // a soft handling mark near a corner
  const sm = g.createRadialGradient(W - 30, H - 24, 2, W - 30, H - 24, 60);
  sm.addColorStop(0, "rgba(120,100,70,0.06)"); sm.addColorStop(1, "rgba(120,100,70,0)");
  g.fillStyle = sm; g.fillRect(W - 100, H - 90, 100, 90);
}, 3);

/** the roll's end: the paper's spiral of layers round the kraft core */
const rollEndTex = () => paintTex("paper-roll-end", 256, 256, (g) => {
  g.fillStyle = "#F1EDE3"; g.fillRect(0, 0, 256, 256);
  for (let r = 40; r < 128; r += 1.3) {
    g.strokeStyle = `rgba(${hash(r, 1, 3) > 0.5 ? "150,140,122" : "255,252,244"},${0.12 + 0.18 * hash(r, 2, 3)})`;
    g.lineWidth = 0.6; g.beginPath(); g.arc(128, 128, r, 0, Math.PI * 2); g.stroke();
  }
  g.fillStyle = "#B08A5A"; g.beginPath(); g.arc(128, 128, 40, 0, Math.PI * 2); g.fill();
  g.strokeStyle = "rgba(80,56,30,0.6)"; g.lineWidth = 1.2; g.beginPath(); g.arc(128, 128, 39, 0, Math.PI * 2); g.stroke();
  g.fillStyle = "#3a2c1e"; g.beginPath(); g.arc(128, 128, 29, 0, Math.PI * 2); g.fill();
}, 2);

/** a key's top: its legend, moulded in (light on dark keys, dark on light) */
const keyTex = (label: string, bgc: string, ink: string, w: number, d: number) => paintTex(`paper-key-${label}-${bgc}`, w, d, (g) => {
  const gr = g.createRadialGradient(w / 2, d / 2, 2, w / 2, d / 2, Math.max(w, d) * 0.7);
  gr.addColorStop(0, bgc); gr.addColorStop(1, bgc);
  g.fillStyle = gr; g.fillRect(0, 0, w, d);
  g.fillStyle = ink; g.textAlign = "center"; g.textBaseline = "middle";
  fitFont(g, 700, label.length > 1 ? 24 : 32, label, w - 16); g.fillText(label, w / 2, d / 2 + 1);
}, 2);

// ══ THE MODEL ══
export type PaperP = { f: number };

export const paperModel = (T: PaperTiming) => (): Model<PaperP> => {
  const root = new THREE.Group();
  const FY = -DESK.floor;

  // ══ THE DESK PAD ══
  const pad = new THREE.Group(); pad.userData.obj = "pad"; root.add(pad);
  {
    const W = PAD.x1 - PAD.x0, D = PAD.z1 - PAD.z0;
    const side = new THREE.MeshPhysicalMaterial({ color: col("#1C3124"), roughness: 0.62, bumpMap: pebble(), bumpScale: 0.6, clearcoat: 0.12, clearcoatRoughness: 0.6 });
    const body = rbox(W, PAD.t, D, PAD.t / 2 - 0.2, side, 3);
    body.position.set((PAD.x0 + PAD.x1) / 2, FY + PAD.t / 2, PAD.z1);
    pad.add(body);
    const topM = new THREE.MeshPhysicalMaterial({ map: padTex(), roughness: 0.6, bumpMap: pebble(9, 9), bumpScale: 0.7, metalness: 0, clearcoat: 0.18, clearcoatRoughness: 0.55, envMapIntensity: 0.45 });
    const top = mesh(new THREE.PlaneGeometry(W - 2 * PAD.t, D - 2 * PAD.t), topM, false, true);
    top.rotation.x = -Math.PI / 2;
    top.position.set((PAD.x0 + PAD.x1) / 2, FY + PAD.t + 0.04, (PAD.z0 + PAD.z1) / 2);
    pad.add(top);
  }

  // ══ THE ADDING MACHINE ══
  const mach = new THREE.Group(); mach.userData.obj = "machine"; root.add(mach);
  let roll: THREE.Group;
  {
    const stip = pebble(30, 30);
    const putty = new THREE.MeshPhysicalMaterial({ color: col("#D2CBBA"), roughness: 0.5, bumpMap: stip, bumpScale: 0.25, clearcoat: 0.15, clearcoatRoughness: 0.5, envMapIntensity: 0.55 });
    const charcoal = new THREE.MeshPhysicalMaterial({ color: col("#36363A"), roughness: 0.46, bumpMap: stip, bumpScale: 0.2, clearcoat: 0.2, clearcoatRoughness: 0.45, envMapIntensity: 0.6 });
    const rubber = M.rubber("#1E1C1B");
    const chrome = M.chrome();
    const steel = M.steel();
    const B0 = MACH.base;
    // the body: its side profile (z, h) extruded across its width, every edge rounded
    const prof: [number, number][] = [
      [MACH.front, B0], [MACH.front, 42], [MACH.front - 10, 54], [KB.z1, KB.h1],
      [KB.z0, KB.h0], [KB.z0 - 30, MACH.deck - 2], [ZL + 260, MACH.deck], [ZL + 222, MACH.deck - 2], [MACH.rear + 2, MACH.deck - 8],
      [MACH.rear, MACH.deck - 13], [MACH.rear, B0],
    ];
    const bodyShape = new THREE.Shape();
    prof.forEach(([z, h], i) => (i === 0 ? bodyShape.moveTo(-z, h) : bodyShape.lineTo(-z, h)));
    bodyShape.closePath();
    const bg = slabOf(bodyShape, MACH.w, 9, 6);
    const body = mesh(bg, putty);
    body.rotation.y = Math.PI / 2;
    body.position.set(MACH.x + MACH.w / 2, FY, 0);
    mach.add(body);
    // the paper chute: charcoal, its top just under the tape's path, a rounded lip at its end
    const top: [number, number][] = [];
    for (let s = 0; s <= S_LIP; s += 4) { const p = pathAt(s); top.push([p.z + p.dh * 1.1, p.h - (-p.dz) * 1.1]); }
    const last = top[top.length - 1];
    const cs = new THREE.Shape();
    cs.moveTo(-(MACH.rear + 6), MACH.deck - 13);
    top.forEach(([z, h]) => cs.lineTo(-z, h));
    cs.lineTo(-(last[0] - 1.2), last[1] - 4); cs.lineTo(-(last[0] + 0.5), Math.max(B0 + 2, last[1] - 9)); cs.lineTo(-(last[0] + 3), B0);
    cs.lineTo(-(MACH.rear + 6), B0);
    cs.closePath();
    const CW = TAPE.w + 90;
    const chute = mesh(slabOf(cs, CW, 1.2, 4), charcoal);
    chute.rotation.y = Math.PI / 2;
    chute.position.set(TAPE.x + CW / 2, FY, 0);
    mach.add(chute);
    // the slot (a dark recess in the rear face, just over the chute) and the serrated chrome tear bar over it
    const slot = rbox(TAPE.w + 26, 7, 4, 1.2, M.rubber("#0E0D0D"), 2);
    slot.position.set(TAPE.x, FY + SLOT.h + 2.8, MACH.rear + 3.2);
    mach.add(slot);
    {
      const bw = TAPE.w + 70, n = 70;
      const s = new THREE.Shape();
      s.moveTo(-bw / 2, 10); s.lineTo(bw / 2, 10); s.lineTo(bw / 2, 1.6);
      for (let i = n; i >= 0; i--) s.lineTo(-bw / 2 + (bw * i) / n, i % 2 ? 0 : 2.4);
      s.closePath();
      const bar = mesh(slabOf(s, 2.2, 0.4, 2), chrome);
      bar.position.set(TAPE.x, FY + SLOT.h + 1.6, MACH.rear - 0.6);
      bar.rotation.x = rad(-12);
      mach.add(bar);
      // the bar's two screw heads
      for (const sx of [-bw / 2 + 12, bw / 2 - 12]) {
        const sc = mesh(new THREE.CylinderGeometry(3.4, 3.4, 1.6, 16).rotateX(Math.PI / 2), steel);
        sc.position.set(TAPE.x + sx, FY + SLOT.h + 7.2, MACH.rear - 1.8);
        mach.add(sc);
      }
    }
    // the feet
    const XL = MACH.x - MACH.w / 2, XR = MACH.x + MACH.w / 2;
    for (const [fx, fz] of [[XL + 50, MACH.front - 60], [XR - 50, MACH.front - 60], [XL + 50, MACH.rear + 60], [XR - 50, MACH.rear + 60]]) {
      const ft = mesh(new THREE.CylinderGeometry(20, 22, 6.6, 20), rubber);
      ft.position.set(fx, FY + PAD.t + 0.15 + 3.3, fz);
      mach.add(ft);
    }
    // the roll's brackets and spindle
    const bx = TAPE.w / 2 + 22;
    for (const sx of [-bx, bx]) {
      const bs = roundRect(150, 170, 26);
      const br = mesh(slabOf(bs, 12, 2.4, 6), charcoal);
      br.rotation.y = Math.PI / 2;
      br.position.set(TAPE.x + sx + (sx > 0 ? 6 : -6) + 6, FY + MACH.deck + 70, ROLL.z);
      mach.add(br);
    }
    const spindle = mesh(new THREE.CylinderGeometry(9, 9, 2 * bx + 30, 20).rotateZ(Math.PI / 2), steel);
    spindle.position.set(TAPE.x, FY + ROLL.h, ROLL.z);
    mach.add(spindle);
    // the roll: paper wound on a kraft core, its ends showing the layers, its face a touch uneven
    roll = new THREE.Group();
    roll.position.set(TAPE.x, FY + ROLL.h, ROLL.z);
    mach.add(roll);
    const endM = new THREE.MeshStandardMaterial({ map: rollEndTex(), roughness: 0.9, envMapIntensity: 0.3 });
    const faceM = new THREE.MeshStandardMaterial({ color: col("#F3F0E6"), roughness: 0.9, bumpMap: fibre(4, 1), bumpScale: 0.4, envMapIntensity: 0.3 });
    const rg = new THREE.CylinderGeometry(ROLL.r, ROLL.r, ROLL.w, 64, 1).rotateZ(Math.PI / 2);
    roll.add(mesh(rg, [faceM, endM, endM]));
    // the paper's own end, lifted a little off the roll where it was last torn
    // the keys: charcoal function keys, ivory digits, a tall "+" bar, a red "T" total key
    const slope = Math.atan2(KB.h0 - KB.h1, KB.z1 - KB.z0);
    const kpt = (zz: number) => KB.h1 + ((KB.h0 - KB.h1) * (KB.z1 - zz)) / (KB.z1 - KB.z0);
    const ivory = "#E9E3D3", dark = "#3B3A3E", red = "#B9432F";
    const COLS = [
      ["C", "CE", "÷", "×"], ["7", "4", "1", "0"], ["8", "5", "2", "00"], ["9", "6", "3", "."], ["−", "+", "", "T"],
    ];
    const KW = 82, KD = 74, PX = 96, PZ = 88;
    const k0x = MACH.x + 150 - ((COLS.length - 1) * PX) / 2, k0z = KB.z0 + 60;
    COLS.forEach((colKeys, ci) => colKeys.forEach((lab, ri) => {
      if (ci === 4 && ri === 2) return;
      const tall = ci === 4 && ri === 1;
      const d = tall ? KD + PZ : KD;
      const isDigit = ci >= 1 && ci <= 3;
      const bgc = ci === 4 && ri === 3 ? red : isDigit ? ivory : dark;
      const ink = isDigit ? "#2A2622" : "#EDE8DC";
      const m = new THREE.MeshPhysicalMaterial({ color: col(bgc), roughness: 0.42, clearcoat: 0.3, clearcoatRoughness: 0.35, envMapIntensity: 0.6 });
      const tm = new THREE.MeshPhysicalMaterial({ map: keyTex(lab, bgc, ink, KW, d), roughness: 0.4, clearcoat: 0.3, clearcoatRoughness: 0.35, envMapIntensity: 0.6 });
      const key = rbox(KW, 22, d, 6, { px: m, nx: m, top: tm, bottom: m, front: m, back: m }, 3);
      const zc = k0z + ri * PZ + (tall ? PZ / 2 : 0);
      key.position.set(0, 0, d / 2);
      const kg = new THREE.Group();
      kg.position.set(k0x + ci * PX, FY + kpt(zc) + 8, zc);
      kg.rotation.x = slope;
      kg.add(key);
      mach.add(kg);
    }));
  }

  // ══ THE TAPE ══
  const tape = new THREE.Group(); tape.userData.obj = "tape"; tape.userData.pierces = ["machine"]; root.add(tape);
  const N = 260, NW = 8, V = (N + 1) * (NW + 1);
  const front = new THREE.BufferGeometry(), back = new THREE.BufferGeometry();
  const fpos = new Float32Array(V * 3), bpos = new Float32Array(V * 3), uvs = new Float32Array(V * 2);
  front.setAttribute("position", new THREE.BufferAttribute(fpos, 3));
  back.setAttribute("position", new THREE.BufferAttribute(bpos, 3));
  front.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  back.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  const fi: number[] = [], bi: number[] = [];
  for (let j = 0; j < N; j++) for (let i = 0; i < NW; i++) {
    const a = j * (NW + 1) + i, b = a + NW + 1;
    fi.push(a, b, a + 1, a + 1, b, b + 1);
    bi.push(a, a + 1, b, a + 1, b + 1, b);
  }
  front.setIndex(fi); back.setIndex(bi);
  const tt = tapeTex();
  const tm = new THREE.MeshStandardMaterial({ map: tt, roughness: 0.86, metalness: 0, envMapIntensity: 0.35, alphaTest: 0.5, bumpMap: fibre(TAPE.w / 160, TAPE.TL / 160), bumpScale: 0.25 });
  const bm = new THREE.MeshStandardMaterial({ color: col("#EEEADF"), map: tt, roughness: 0.9, envMapIntensity: 0.3, alphaTest: 0.5 });
  const fm = mesh(front, tm), bk = mesh(back, bm);
  tape.add(fm, bk);
  const shapeTape = (L: number) => {
    for (let j = 0; j <= N; j++) {
      const t = (L * j) / N;
      const s = L - t, p = pathAt(s), nz = p.dh, nh = -p.dz;
      for (let i = 0; i <= NW; i++) {
        const u = i / NW, q = tapePt(L, t, u), k = j * (NW + 1) + i;
        fpos[k * 3] = q.x; fpos[k * 3 + 1] = FY + q.h; fpos[k * 3 + 2] = q.z;
        bpos[k * 3] = q.x; bpos[k * 3 + 1] = FY + q.h - nh * TAPE.t; bpos[k * 3 + 2] = q.z - nz * TAPE.t;
        uvs[k * 2] = u; uvs[k * 2 + 1] = 1 - t / TAPE.TL;
      }
    }
    for (const g of [front, back]) {
      g.attributes.position.needsUpdate = true; g.attributes.uv.needsUpdate = true;
      g.computeVertexNormals(); g.computeBoundingBox(); g.computeBoundingSphere();
    }
  };

  // ══ THE CARDS ══
  const cards: THREE.Group[] = YEARS.map((_, k) => {
    const g = new THREE.Group(); g.userData.obj = `card${k}`; root.add(g);
    const pm = M.print(cardTex(k), 0.8);
    pm.bumpMap = fibre(CARD.w / 128, CARD.d / 128); pm.bumpScale = 0.3;
    const sh = paper({ w: CARD.w, h: CARD.d, t: CARD.t, face: pm, back: M.paper("#EFEBE1"), edge: M.paper("#ECE7DB"), seg: 34,
      bow: 0.8, curls: [{ corner: k % 2 ? "br" : "tr", r: 70, lift: 2.4 + k * 0.4 }], wave: 0.3, seed: k });
    sh.rotation.x = -Math.PI / 2;
    sh.position.set(0, CARD.t, 0);
    g.add(sh);
    return g;
  });

  root.add(makeFloor({ y: DESK.floor, x0: -1600, x1: 2600, z0: -1400, z1: 1600, reflect: 0, shadow: 0.42, fadeC: [400, 0], fadeR: [1500, 1100] }));

  return {
    root,
    update: (p) => {
      const L = tapeLen(T, p.f);
      shapeTape(L);
      roll.rotation.x = -L / ROLL.r;
      cards.forEach((g, k) => {
        const c = poseCard(T, k, p.f);
        g.visible = c.visible; g.position.set(c.x, FY + c.h, c.z); g.rotation.y = rad(c.yaw);
      });
    },
  };
};
