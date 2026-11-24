// ══════════════════════════════════════════════════════════════════════════════════════════════
// AUGUST IN 3-D (040) — "In August, on Fox News, the host listed $700 million. Then, $800 million. Norman answered: somewhere
// in that neighborhood. He said the offer was made before he was even in charge." On the cream ground, on the floor:
//   · THE TV: a mid-century walnut CRT set on four splayed tapered walnut legs with brass ferrules. A walnut cabinet (rounded
//     edges, grain), a charcoal front panel with a brushed-aluminium bezel round the picture tube, the tube's convex glass
//     (clearcoat, it takes the room's reflections), a right column with two knurled chrome knobs (a channel dial printed
//     round the first) over a woven speaker-grille cloth. On "Fox" it clicks on (the CRT's bright line opens into the
//     picture with a flash): a studio's blue backdrop and a lower-third "FOX NEWS, AUG 1 2022" in plain type.
//   · TWO HOST'S CUE CARDS: white poster board (3 px, a grey core at the edge, a slight bow, a lifted corner), printed big in
//     black: "$700 MILLION?" slides in from the right and leans against the TV's front panel; "$800 MILLION?" slides in from
//     the left over it and leans on it.
//   · THE QUOTE PLAQUE (its own view, in front): a walnut board leaning back 8° in the slot of a walnut base, a brushed-brass
//     plate on four domed brass screws, the quote engraved and black-filled: “Somewhere in that neighborhood.” GREG NORMAN,
//     LIV GOLF CEO. It slides in from the left on "Norman", brakes and rocks on its base's edge; the TV and the cue cards fall
//     out of focus behind it (the back view's blur: a range, not a number).
//   · A SMALL MANILA CARD "BEFORE HE WAS CEO": it glides in from the right on "before", stands on the plaque's base and tips
//     back against the plate's blank lower right.
// Units are the layer's px (about a millimetre each); the floor at FLOOR (layer y), x right, h up from the floor, z toward
// the viewer. Every pose is a pure function of the frame (the place's checks use the same functions).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, slabOf, roundRect, lathe, type Model } from "../stage";
import { M, rbox, rad, hash, paper, fitFont, track, font, fillBoldItalic, type PaperOpts } from "../kit029";
import { GLIDE, SOFT, clamp01 } from "../../r45/tokens";
import { QUOTES } from "../../audit/record";

export const FLOOR = 1460;
const ss = (a: number, b: number, x: number) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

// ══ THE GEOMETRY (exported: the place's camera and checks are solved on it) ══
/** the TV: cabinet x0..x1, its underside at LEG, its top at TOP, its front face at Z; the panel's front at ZP */
export const TV = { x0: 240, x1: 840, leg: 200, top: 610, z: -200, d: 360, rim: 12, pt: 7 } as const;
export const ZP = TV.z + TV.pt;
const TVX = (TV.x0 + TV.x1) / 2;
/** the picture tube's opening in the panel (x, h of its centre; w × h; corner r) and the bezel ring's width */
export const HOLE = { x: 466, h: 434.5, w: 380, hh: 285, r: 26 } as const;
const RING = 8;
/** the right column: the knobs' centres */
const KNOBS = [{ x: 752, h: 530 }, { x: 752, h: 448 }] as const;

/** a cue card: w × h × t; where it stands (x of its centre), its bottom-front edge's z and its lean back (rad) */
export type Card = { w: number; h: number; t: number; x: number; zb: number; th: number; bow: number };
const CW = 520, CH = 300, CT = 3, GAP = 0.7;
/** card 1 ($700) leans against the panel, its top touching at CONTACT (below the bezel ring's lower edge) */
const CONTACT = 272;
const th1 = Math.acos(CONTACT / CH);
export const C1: Card = { w: CW, h: CH, t: CT, x: 590, zb: ZP + GAP + CH * Math.sin(th1) + CT * Math.cos(th1), th: th1, bow: 1.1 };
/** card 1's front face (z at height h), its bow included */
const c1Face = (h: number) => C1.zb - (h - CT * Math.sin(C1.th)) * Math.tan(C1.th) + C1.bow * Math.cos(C1.th);
/** card 2 ($800): its foot 60 px in front of card 1's, leaning back until its top's back edge meets card 1's face */
const C2ZB = C1.zb + 60;
const th2 = (() => {
  let lo = 0.01, hi = 1.2;
  for (let i = 0; i < 60; i++) {
    const m = (lo + hi) / 2;
    const topZ = C2ZB - CH * Math.sin(m) - CT * Math.cos(m), topH = CH * Math.cos(m);
    if (topZ - (c1Face(topH) + GAP) > 0) lo = m; else hi = m;
  }
  return (lo + hi) / 2;
})();
export const C2: Card = { w: CW, h: CH, t: CT, x: 450, zb: C2ZB, th: th2, bow: 1.0 };

/** the plaque: a low walnut DESK WEDGE (w wide): a front lip `lip` tall at z `zA`, then its face rising back at PHI from the
 *  vertical for `Lf`, a flat top `top` deep, a vertical back; the brass plate (w × h × t) centred on the face */
export const PQ = { w: 860, x: 480, zA: 250, lip: 14, Lf: 250, phi: rad(50), top: 30 } as const;
export const PLT = { w: 580, h: 220, t: 2.4 } as const;
/** the plate sits on the face's left; the small card lands on the bare walnut to its right */
export const PLATE_DX = -110;
const SPH = Math.sin(PQ.phi), CPH = Math.cos(PQ.phi);
/** a point s along the face (from its foot) */
const faceAt = (s: number) => ({ h: PQ.lip + s * CPH, z: PQ.zA - s * SPH });
/** a point of the plate's print (u, v in print px from its top-left) in the place (x, h, z), plaque at rest */
export const platePt = (u: number, v: number, dx = 0) => {
  const p = faceAt(PQ.Lf / 2 + PLT.h / 2 - v);
  return { x: PQ.x + dx + PLATE_DX - PLT.w / 2 + u, h: p.h + PLT.t * SPH, z: p.z + PLT.t * CPH };
};
/** the wedge's top edges (front and back) at its two ends */
export const boardTop = (dx = 0) => {
  const B = faceAt(PQ.Lf);
  return [-1, 1].flatMap((s) => [{ x: PQ.x + dx + (s * PQ.w) / 2, h: B.h, z: B.z }, { x: PQ.x + dx + (s * PQ.w) / 2, h: B.h, z: B.z - PQ.top }]);
};
/** the wedge's back face (z): what the cue cards must stay behind */
export const PQ_BACK = faceAt(PQ.Lf).z - PQ.top;

/** the small card: it ends lying back on the plate at the face's own slope, its foot on the floor just in front of the lip */
const SW = 230, SH = 124, STK = 1.0;
const SZB = PQ.zA + PQ.lip * Math.tan(PQ.phi) + STK * CPH + GAP / CPH;
export const SC: Card = { w: SW, h: SH, t: STK, x: 770, zb: SZB, th: PQ.phi, bow: 0 };

/** a point of a leaning card's print (u, v from its top-left, in print px) at a pose */
export type CardPose = { x: number; zb: number; lift: number; th: number; visible: boolean };
export const cardPt = (c: Card, p: CardPose, u: number, v: number) => {
  const y = c.h - v;
  return { x: p.x - c.w / 2 + u, h: p.lift + c.t * Math.sin(p.th) + y * Math.cos(p.th), z: p.zb - y * Math.sin(p.th) };
};
/** where each print's readable ink sits (print px boxes x0, y0, x1, y1) */
export const PRINT = {
  lower: [18, 222, 378, 262] as const,     // the lower-third's type, in the picture's px (the picture is HOLE.w × HOLE.hh, + 6 bleed)
  card: [40, 52, 480, 272] as const,
  plate: [24, 20, 556, 208] as const,
  small: [16, 16, 214, 116] as const,
};

// ══ THE TIMING AND THE POSES ══
export type AugT = { on: number; c1: readonly [number, number]; c2: readonly [number, number]; pl: readonly [number, number]; blur: readonly [number, number];
  sc: readonly [number, number]; tip: number };
export const poseC1 = (T: AugT, f: number): CardPose => {
  const u = clamp01((f - T.c1[0]) / (T.c1[1] - T.c1[0])), g = GLIDE(u);
  return { x: C1.x + 1150 * (1 - g), zb: C1.zb + 16 * (1 - g), lift: 12 * (1 - ss(0, 0.8, u)), th: C1.th, visible: f > T.c1[0] - 1 };
};
export const poseC2 = (T: AugT, f: number): CardPose => {
  const u = clamp01((f - T.c2[0]) / (T.c2[1] - T.c2[0])), g = GLIDE(u);
  return { x: C2.x - 1100 * (1 - g), zb: C2.zb + 30 * (1 - g), lift: 12 * (1 - ss(0, 0.8, u)), th: C2.th, visible: f > T.c2[0] - 1 };
};
/** the plaque: its slide from the left (x offset), its glide height, and its rock about the base's right foot (rad) */
export const posePL = (T: AugT, f: number) => {
  const u = clamp01((f - T.pl[0]) / (T.pl[1] - T.pl[0])), g = GLIDE(u);
  const t = f - T.pl[1];
  const rock = t > 0 && t < 22 ? rad(2.0) * Math.exp(-t / 5.5) * Math.abs(Math.sin((Math.PI * t) / 7.5)) : 0;
  return { dx: -1150 * (1 - g), lift: 10 * (1 - ss(0, 0.8, u)), rock, visible: f > T.pl[0] - 1 };
};
/** the small card: it glides in on its edge (leaning 10°) in front of the plaque, lands, then falls back onto the plate (an
 *  accelerating fall about its foot) */
export const poseSC = (T: AugT, f: number): CardPose => {
  const u = clamp01((f - T.sc[0]) / (T.sc[1] - T.sc[0])), g = GLIDE(u);
  const k = clamp01((f - T.sc[1]) / (T.tip - T.sc[1]));
  return { x: SC.x + 650 * (1 - g), zb: SC.zb, lift: 12 * (1 - ss(0, 0.8, u)), th: rad(10) + (SC.th - rad(10)) * k * k, visible: f > T.sc[0] - 1 };
};
export const blurAt = (T: AugT, f: number) => 3.2 * SOFT(clamp01((f - T.blur[0]) / (T.blur[1] - T.blur[0])));
/** the TV's picture: 0 off; the CRT's line opening (0..1) for 3 frames; then the picture and its flash */
export const tvAt = (T: AugT, f: number) => {
  if (f < T.on) return { line: -1, e: 0 };
  const k = f - T.on;
  if (k < 2) return { line: [0.012, 0.09][k], e: 0 };
  return { line: k < 3 ? 0.45 : -1, e: 1 + 1.3 * Math.exp(-(k - 2) / 2.2) };
};

// ══ SURFACES ══
/** walnut: a straight grain with darker streaks, pores and a soft figure (horizontal along the canvas) */
const walnutTex = (key: string, w: number, h: number, seed: number) => paintTex(key, w, h, (g) => {
  g.fillStyle = "#5C3A25"; g.fillRect(0, 0, w, h);
  g.save(); g.filter = "blur(6px)";
  for (let i = 0; i < 40; i++) {
    g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? "38,20,10" : "122,80,50"},${0.06 + 0.08 * hash(i, 2, seed)})`;
    g.fillRect(0, hash(i, 3, seed) * h, w, 6 + 30 * hash(i, 4, seed));
  }
  g.restore();
  for (let i = 0; i < 260; i++) {
    const y0 = hash(i, 5, seed) * h, a = 0.08 + 0.18 * hash(i, 6, seed), ph = hash(i, 7, seed) * 6, amp = 1 + 5 * hash(i, 8, seed);
    g.strokeStyle = `rgba(${hash(i, 9, seed) > 0.35 ? "30,15,6" : "140,96,62"},${a})`; g.lineWidth = 0.4 + 1.4 * hash(i, 10, seed);
    g.beginPath();
    for (let x = 0; x <= w; x += 6) { const y = y0 + amp * Math.sin(x / (60 + 90 * hash(i, 11, seed)) + ph); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); }
    g.stroke();
  }
  for (let i = 0; i < 1800; i++) { g.fillStyle = `rgba(25,12,5,${0.15 + 0.2 * hash(i, 12, seed)})`; g.fillRect(hash(i, 13, seed) * w, hash(i, 14, seed) * h, 1.5 + 3 * hash(i, 15, seed), 0.5); }
}, 1);
const walnut = (key: string, w: number, h: number, seed: number) =>
  new THREE.MeshPhysicalMaterial({ map: walnutTex(key, w, h, seed), roughness: 0.48, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.32, envMapIntensity: 0.5 });

/** paper fibre: a fine tileable bump */
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
/** brushing: fine horizontal streaks (a bump for brushed metal) */
let brushC: HTMLCanvasElement | null = null;
const brush = (rx: number, ry: number) => {
  if (!brushC) {
    brushC = document.createElement("canvas"); brushC.width = brushC.height = 256;
    const g = brushC.getContext("2d")!;
    g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 900; i++) { const v = 90 + Math.round(80 * hash(i, 61, 2)); g.fillStyle = `rgba(${v},${v},${v},0.55)`; g.fillRect(hash(i, 62, 2) * 256 - 40, hash(i, 63, 2) * 256, 30 + 160 * hash(i, 64, 2), 0.6); }
  }
  const t = new THREE.CanvasTexture(brushC);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry);
  return t;
};
const grain = (g: CanvasRenderingContext2D, w: number, h: number, n: number, seed: number, dark: string, light: string) => {
  for (let i = 0; i < n; i++) {
    g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? dark : light},${0.03 + 0.05 * hash(i, 2, seed)})`;
    g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 0.4 + hash(i, 5, seed) * 1.8, 0.25);
  }
};

// ══ PRINT ══
const GW = HOLE.w + 12, GH = HOLE.hh + 12;   // the glass (the picture's bleed hides under the panel)
/** the picture: a news studio's blue backdrop (soft lights, a desk's glossy edge) and the lower-third */
const pictureTex = () => paintTex("aug-picture", GW, GH, (g) => {
  const W = GW, H = GH;
  const bg = g.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#0A1C3A"); bg.addColorStop(0.55, "#1B4479"); bg.addColorStop(0.72, "#2A5C98"); bg.addColorStop(1, "#0E2140");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  // the studio's lights, out of focus: warm and cool discs
  for (let i = 0; i < 26; i++) {
    const x = hash(i, 1, 21) * W, y = H * (0.08 + 0.5 * hash(i, 2, 21)), r = 8 + 26 * hash(i, 3, 21);
    const warm = hash(i, 4, 21) > 0.6;
    const rg = g.createRadialGradient(x, y, 0, x, y, r);
    rg.addColorStop(0, warm ? "rgba(255,214,160,0.36)" : "rgba(150,200,255,0.30)"); rg.addColorStop(1, "rgba(150,200,255,0)");
    g.fillStyle = rg; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  // vertical light panels of the set, soft
  g.save(); g.filter = "blur(5px)";
  for (const x of [0.16, 0.34, 0.66, 0.84]) { g.fillStyle = "rgba(170,210,255,0.16)"; g.fillRect(W * x - 9, H * 0.06, 18, H * 0.5); }
  g.restore();
  // the anchor desk's glossy edge
  const dk = g.createLinearGradient(0, H * 0.64, 0, H * 0.78);
  dk.addColorStop(0, "#0B1830"); dk.addColorStop(0.12, "#7FA6D6"); dk.addColorStop(0.2, "#16294A"); dk.addColorStop(1, "#08132A");
  g.fillStyle = dk; g.fillRect(0, H * 0.64, W, H * 0.36);
  // ★ the lower-third: a white bar with a navy block, "FOX NEWS, AUG 1 2022" in plain type
  const x0 = 6 + 16, x1 = W - 6 - 16, y0 = 6 + 214, y1 = 6 + 266;
  g.fillStyle = "#0E2A57"; g.fillRect(x0, y0 - 9, (x1 - x0) * 0.42, 9);
  g.fillStyle = "#F3F5F8"; g.fillRect(x0, y0, x1 - x0, y1 - y0);
  g.fillStyle = "#0E2A57"; g.fillRect(x0, y0, 10, y1 - y0);
  g.fillStyle = "rgba(120,170,230,0.9)"; g.fillRect(x0, y1, x1 - x0, 3);
  g.fillStyle = "#0D2347"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 1.2); fitFont(g, 800, 32, "FOX NEWS, AUG 1 2022", x1 - x0 - 40); g.fillText("FOX NEWS, AUG 1 2022", (x0 + x1) / 2 + 5, y1 - 14); track(g, 0);
  // the tube: scanlines, a soft vignette into the corners
  g.fillStyle = "rgba(0,0,0,0.10)"; for (let y = 0; y < H; y += 2.2) g.fillRect(0, y, W, 0.8);
  const vg = g.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, W * 0.62);
  vg.addColorStop(0, "rgba(0,0,0,0)"); vg.addColorStop(1, "rgba(0,0,0,0.55)");
  g.fillStyle = vg; g.fillRect(0, 0, W, H);
}, 3);

/** the front panel's print: charcoal with a faint grain, the channel dial's numbers, the volume's ticks, the grille cloth */
const PW = TV.x1 - TV.x0 - 2 * TV.rim, PH = TV.top - TV.leg - 2 * TV.rim;
const panelTex = () => paintTex("aug-panel", PW, PH, (g) => {
  g.fillStyle = "#2B2926"; g.fillRect(0, 0, PW, PH);
  grain(g, PW, PH, 2400, 31, "10,10,10", "90,86,80");
  const px = (x: number) => x - (TV.x0 + TV.rim), py = (h: number) => TV.top - TV.rim - h;
  // the channel dial: 2 to 13 round the first knob
  g.fillStyle = "rgba(236,228,210,0.85)"; g.textAlign = "center"; g.textBaseline = "middle"; font(g, 700, 10);
  for (let i = 0; i < 12; i++) {
    const a = rad(-150 + (300 * i) / 11) - Math.PI / 2, r = 40;
    g.fillText(String(i + 2), px(KNOBS[0].x) + Math.cos(a) * r, py(KNOBS[0].h) + Math.sin(a) * r);
  }
  // the volume's ticks
  g.strokeStyle = "rgba(236,228,210,0.7)"; g.lineWidth = 1.2;
  for (let i = 0; i < 9; i++) {
    const a = rad(-135 + (270 * i) / 8) - Math.PI / 2;
    g.beginPath(); g.moveTo(px(KNOBS[1].x) + Math.cos(a) * 32, py(KNOBS[1].h) + Math.sin(a) * 32); g.lineTo(px(KNOBS[1].x) + Math.cos(a) * 37, py(KNOBS[1].h) + Math.sin(a) * 37); g.stroke();
  }
  // the speaker grille: a woven cloth in a thin aluminium frame
  const gx0 = px(686), gx1 = px(818), gy0 = py(400), gy1 = py(236);
  g.fillStyle = "#8C7756"; g.fillRect(gx0, gy0, gx1 - gx0, gy1 - gy0);
  for (let y = gy0; y < gy1; y += 2.4) { g.fillStyle = `rgba(40,28,14,${0.22 + 0.1 * hash(y, 1, 3)})`; g.fillRect(gx0, y, gx1 - gx0, 0.9); }
  for (let x = gx0; x < gx1; x += 2.4) { g.fillStyle = `rgba(230,210,170,${0.12 + 0.08 * hash(x, 2, 3)})`; g.fillRect(x, gy0, 0.8, gy1 - gy0); }
  g.strokeStyle = "rgba(205,210,215,0.85)"; g.lineWidth = 2; g.strokeRect(gx0, gy0, gx1 - gx0, gy1 - gy0);
}, 2);

/** a cue card's face: white poster board, the figure big in black */
const cardTex = (key: string, big: string, small: string) => paintTex(key, CW, CH, (g) => {
  g.fillStyle = "#F8F6F0"; g.fillRect(0, 0, CW, CH);
  grain(g, CW, CH, 2600, key.length, "120,110,95", "255,255,252");
  g.fillStyle = "#1C1916"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, -2); fitFont(g, 800, 150, big, 440); g.fillText(big, CW / 2, 160); track(g, 0);
  track(g, 2); fitFont(g, 800, 76, small, 430); g.fillText(small, CW / 2, 254); track(g, 0);
  // the ink's own texture: a little lighter where the press left it thin
  g.globalCompositeOperation = "source-atop";
  for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(255,255,255,${0.05 + 0.08 * hash(i, 7, key.length)})`; g.fillRect(hash(i, 8, 3) * CW, hash(i, 9, 3) * CH, 1 + 2 * hash(i, 10, 3), 0.8); }
  g.globalCompositeOperation = "source-over";
}, 3);

/** the plate: brushed brass, the quote engraved and filled black, the attribution in small capitals */
const plateTex = () => paintTex("aug-plate", PLT.w, PLT.h, (g) => {
  const W = PLT.w, H = PLT.h;
  const bg = g.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#D9B868"); bg.addColorStop(0.45, "#E8CC82"); bg.addColorStop(1, "#C59E4E");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 1400; i++) { g.fillStyle = `rgba(${hash(i, 1, 5) > 0.5 ? "120,84,30" : "255,240,200"},${0.05 + 0.08 * hash(i, 2, 5)})`; g.fillRect(hash(i, 3, 5) * W - 30, hash(i, 4, 5) * H, 20 + 120 * hash(i, 5, 5), 0.5); }
  // an engraved border
  g.strokeStyle = "rgba(40,28,12,0.75)"; g.lineWidth = 1.4; g.strokeRect(10, 10, W - 20, H - 20);
  const engrave = (draw: () => void) => {
    g.save(); g.translate(0.7, 0.7); g.fillStyle = "rgba(255,240,200,0.55)"; g.strokeStyle = g.fillStyle; draw(); g.restore();
    g.fillStyle = "#1E1710"; g.strokeStyle = "#1E1710"; draw();
  };
  const words = QUOTES.fox.words, cut = words.indexOf(" that ");
  const l1 = words.slice(0, cut), l2 = words.slice(cut + 1);
  g.textAlign = "left"; g.textBaseline = "alphabetic";
  const qs = Math.min(fitFont(g, 300, 80, l1, W - 52, true), fitFont(g, 300, 80, l2, W - 52, true));
  engrave(() => fillBoldItalic(g, l1, 24, 82, qs));
  engrave(() => fillBoldItalic(g, l2, 24, 150, qs));
  engrave(() => g.fillRect(26, 168, W - 52, 1.6));
  engrave(() => { track(g, 1.5); fitFont(g, 800, 30, QUOTES.fox.who, W - 52); g.fillText(QUOTES.fox.who, 26, 202); track(g, 0); });
}, 3);

/** the small card: a manila index card, "BEFORE HE WAS CEO" in two lines */
const smallTex = () => paintTex("aug-small", SW, SH, (g) => {
  g.fillStyle = "#E9D6A6"; g.fillRect(0, 0, SW, SH);
  grain(g, SW, SH, 1400, 17, "120,95,50", "255,250,230");
  g.fillStyle = "rgba(70,90,120,0.35)"; g.fillRect(10, 14, SW - 20, 1);
  g.fillStyle = "#1F1A14"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 1); fitFont(g, 800, 46, "BEFORE HE", SW - 34); g.fillText("BEFORE HE", SW / 2, 62);
  fitFont(g, 800, 46, "WAS CEO", SW - 34); g.fillText("WAS CEO", SW / 2, 112); track(g, 0);
}, 3);

// ══ PARTS ══
/** a rounded-rect path centred at (cx, cy), for holes */
const rrPath = (cx: number, cy: number, w: number, h: number, r: number) => {
  const p = new THREE.Path(), x = cx - w / 2, y = cy - h / 2;
  p.moveTo(x + r, y); p.lineTo(x + w - r, y); p.quadraticCurveTo(x + w, y, x + w, y + r);
  p.lineTo(x + w, y + h - r); p.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  p.lineTo(x + r, y + h); p.quadraticCurveTo(x, y + h, x, y + h - r);
  p.lineTo(x, y + r); p.quadraticCurveTo(x, y, x + r, y);
  return p;
};
/** a leaning card: `outer` at its bottom-front edge's centre, `tilt` leans it back */
const leanCard = (o: PaperOpts) => {
  const outer = new THREE.Group(), tilt = new THREE.Group();
  outer.add(tilt);
  const s = paper(o);
  s.position.y = o.h / 2;
  tilt.add(s);
  return { outer, tilt };
};
const setCard = (c: { outer: THREE.Group; tilt: THREE.Group }, card: Card, p: CardPose, FY: number) => {
  c.outer.visible = p.visible;
  c.outer.position.set(p.x, FY + p.lift + card.t * Math.sin(p.th), p.zb);
  c.tilt.rotation.x = -p.th;
};

export type AugP = { f: number };

/** THE BACK VIEW: the TV and the two cue cards on the floor (it falls out of focus behind the plaque) */
export const backModel = (T: AugT) => (): Model<AugP> & { blur: number } => {
  const root = new THREE.Group();
  const FY = -FLOOR;
  const tv = new THREE.Group(); tv.userData.obj = "tv"; root.add(tv);

  // the cabinet
  const W = TV.x1 - TV.x0, H = TV.top - TV.leg;
  const cab = rbox(W, H, TV.d, 20, walnut("aug-walnut-a", 512, 256, 3), 4);
  cab.position.set(TVX, FY + TV.leg + H / 2, TV.z);
  tv.add(cab);
  // the front panel with the tube's opening
  {
    const sh = roundRect(PW, PH, 8);
    sh.holes.push(rrPath(HOLE.x - TVX, HOLE.h - (TV.leg + H / 2), HOLE.w, HOLE.hh, HOLE.r));
    const pm = new THREE.MeshPhysicalMaterial({ map: panelTex(), roughness: 0.55, metalness: 0.05, clearcoat: 0.25, clearcoatRoughness: 0.4, bumpMap: fibre(PW, PH), bumpScale: 0.15, envMapIntensity: 0.5 });
    const panel = mesh(slabOf(sh, TV.pt + 1, 1.2), pm);
    panel.position.set(TVX, FY + TV.leg + H / 2, ZP);
    tv.add(panel);
    // the brushed-aluminium bezel round the tube
    const ring = roundRect(HOLE.w + 2 * RING, HOLE.hh + 2 * RING, HOLE.r + RING);
    ring.holes.push(rrPath(0, 0, HOLE.w, HOLE.hh, HOLE.r));
    const al = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#C9CDD1"), metalness: 0.9, roughness: 0.32, bumpMap: brush(2, 6), bumpScale: 0.2, envMapIntensity: 1 });
    const bz = mesh(slabOf(ring, 3, 1), al);
    bz.position.set(HOLE.x, FY + HOLE.h, ZP + 3);
    tv.add(bz);
  }
  // the tube's convex glass: its picture is emissive (dark glass when off), its clearcoat takes the room
  const glassG = new THREE.PlaneGeometry(GW, GH, 32, 24);
  {
    const p = glassG.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < p.count; i++) { const u = p.getX(i) / (GW / 2), v = p.getY(i) / (GH / 2); p.setZ(i, 9.5 * (1 - u * u) * (1 - v * v)); }
    glassG.computeVertexNormals();
  }
  const scr = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#141917"), roughness: 0.3, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.06,
    emissive: new THREE.Color("#ffffff"), emissiveMap: pictureTex(), emissiveIntensity: 0, envMapIntensity: 0.9 });
  const glass = mesh(glassG, scr, false, true);
  glass.position.set(HOLE.x, FY + HOLE.h, ZP - 5.5);
  tv.add(glass);
  const lineM = new THREE.MeshBasicMaterial({ color: new THREE.Color("#EAF2FF"), toneMapped: false });
  const line = new THREE.Mesh(new THREE.PlaneGeometry(HOLE.w - 30, HOLE.hh), lineM);
  line.position.set(HOLE.x, FY + HOLE.h, ZP + 4.3);
  line.visible = false;
  tv.add(line);
  // the knobs: knurled chrome on an escutcheon, a pointer line on each face
  {
    const chrome = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#D9DDE1"), metalness: 0.95, roughness: 0.24, envMapIntensity: 1.05 });
    const kg = new THREE.CylinderGeometry(23, 24.5, 20, 72, 1);
    const kp = kg.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < kp.count; i++) {
      const x = kp.getX(i), z = kp.getZ(i), r = Math.hypot(x, z);
      if (r < 20) continue;
      const a = Math.atan2(z, x), k = 1 + 0.035 * Math.cos(36 * a);
      kp.setX(i, x * k); kp.setZ(i, z * k);
    }
    kg.computeVertexNormals();
    KNOBS.forEach((k, i) => {
      const esc = mesh(new THREE.CylinderGeometry(31, 31, 1.6, 64), chrome);
      esc.rotation.x = Math.PI / 2; esc.position.set(k.x, FY + k.h, ZP + 0.8);
      tv.add(esc);
      const kn = mesh(kg, chrome);
      kn.rotation.x = Math.PI / 2; kn.position.set(k.x, FY + k.h, ZP + 11.6);
      tv.add(kn);
      const ptr = mesh(new THREE.BoxGeometry(3, 16, 1), M.paper("#ECE6D8"));
      ptr.position.set(k.x, FY + k.h + 9, ZP + 22); ptr.rotation.z = rad(i === 0 ? -35 : 50);
      tv.add(ptr);
    });
  }
  // the legs: tapered walnut, splayed, brass ferrules at the feet
  {
    const legM = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#5A3824"), roughness: 0.45, clearcoat: 0.4, clearcoatRoughness: 0.3, bumpMap: brush(1, 3), bumpScale: 0.25, envMapIntensity: 0.5 });
    const brass = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#C99A3E"), metalness: 1, roughness: 0.3, envMapIntensity: 1 });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const top = new THREE.Vector3(TVX + sx * (W / 2 - 70), FY + TV.leg + 4, TV.z - TV.d / 2 + sz * (TV.d / 2 - 60));
      const foot = new THREE.Vector3(top.x + sx * 26, FY + 1.5, top.z + sz * 22);
      const L = top.distanceTo(foot);
      const leg = new THREE.Group();
      leg.add(mesh(lathe([[0, 0], [8.2, 0], [8.4, 28], [9.6, 28.5], [16, L], [0, L]], 40), legM));
      leg.add(mesh(lathe([[0, -0.5], [8.6, -0.5], [9.2, 1.5], [9.2, 27], [10, 29], [0, 29]], 40), brass));
      leg.position.copy(foot);
      leg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), top.clone().sub(foot).normalize());
      tv.add(leg);
    }
  }

  // the cue cards
  const edgeM = M.paper("#E3E0D8");
  const mkCard = (key: string, big: string, small: string, card: Card, curls: PaperOpts["curls"]) => {
    const face = M.print(cardTex(key, big, small), 0.82);
    face.bumpMap = fibre(CW, CH); face.bumpScale = 0.3;
    const c = leanCard({ w: CW, h: CH, t: CT, face, back: M.paper("#EDEAE2"), edge: edgeM, bow: card.bow, curls, seg: 48 });
    root.add(c.outer);
    return c;
  };
  const k1 = mkCard("aug-card-700", "$700", "MILLION?", C1, [{ corner: "tr", r: 70, lift: 2.2 }]);
  k1.outer.userData.obj = "card-700";
  const k2 = mkCard("aug-card-800", "$800", "MILLION?", C2, [{ corner: "tl", r: 60, lift: 2.4 }, { corner: "br", r: 40, lift: 1 }]);
  k2.outer.userData.obj = "card-800";

  root.add(makeFloor({ y: FLOOR, x0: -700, x1: 1800, z0: -900, z1: 900, reflect: 0, shadow: 0.42, fadeC: [560, -150], fadeR: [880, 600] }));

  const model: Model<AugP> & { blur: number } = {
    root, blur: 0,
    update: (p) => {
      const s = tvAt(T, p.f);
      scr.emissiveIntensity = s.e;
      line.visible = s.line > 0;
      if (s.line > 0) line.scale.set(1, s.line, 1);
      setCard(k1, C1, poseC1(T, p.f), FY);
      setCard(k2, C2, poseC2(T, p.f), FY);
      model.blur = blurAt(T, p.f);
    },
  };
  return model;
};

/** THE FRONT VIEW: the quote plaque and the small card (always in focus) */
export const frontModel = (T: AugT) => (): Model<AugP> => {
  const root = new THREE.Group();
  const FY = -FLOOR;
  // the plaque: a pivot at its right foot (it rocks on that edge), the walnut wedge, the plate on its face, four screws
  const pivot = new THREE.Group(); pivot.userData.obj = "plaque"; root.add(pivot);
  const body = new THREE.Group(); pivot.add(body);
  {
    // the wedge's profile (u = −z, v = h), extruded across its width, every edge rounded
    const B = faceAt(PQ.Lf);
    const sh = new THREE.Shape();
    sh.moveTo(-PQ.zA, 0); sh.lineTo(-PQ.zA, PQ.lip); sh.lineTo(-B.z, B.h); sh.lineTo(-(B.z - PQ.top), B.h); sh.lineTo(-(B.z - PQ.top), 0); sh.lineTo(-PQ.zA, 0);
    const bev = 3;
    const g = new THREE.ExtrudeGeometry(sh, { depth: PQ.w - 2 * bev, bevelEnabled: true, bevelThickness: bev, bevelSize: bev, bevelOffset: -bev, bevelSegments: 3 });
    g.translate(0, 0, -(PQ.w - 2 * bev) / 2);
    const wt = walnutTex("aug-walnut-b", 512, 256, 7).clone();
    wt.wrapS = wt.wrapT = THREE.RepeatWrapping; wt.repeat.set(1 / 360, 1 / 300); wt.needsUpdate = true;
    const wm = new THREE.MeshPhysicalMaterial({ map: wt, roughness: 0.46, clearcoat: 0.38, clearcoatRoughness: 0.3, envMapIntensity: 0.5 });
    const wedge = mesh(g, wm);
    wedge.rotation.y = Math.PI / 2;      // (u, v, w) → (x = w, y = v, z = −u)
    body.add(wedge);
    const face = new THREE.Group();
    const c = faceAt(PQ.Lf / 2);
    face.position.set(0, c.h, c.z);
    face.rotation.x = -PQ.phi;
    body.add(face);
    const pm = new THREE.MeshPhysicalMaterial({ map: plateTex(), metalness: 0.72, roughness: 0.36, bumpMap: brush(3, 2), bumpScale: 0.18, clearcoat: 0.25, clearcoatRoughness: 0.3, envMapIntensity: 1 });
    const edge = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#C9A050"), metalness: 1, roughness: 0.3 });
    const plate = rbox(PLT.w, PLT.h, PLT.t, 1, { px: edge, nx: edge, top: edge, bottom: edge, front: pm, back: edge }, 2);
    plate.position.set(PLATE_DX, 0, PLT.t);
    face.add(plate);
    const brass = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#D2A955"), metalness: 1, roughness: 0.22, envMapIntensity: 1.1 });
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) {
      const sc = mesh(new THREE.SphereGeometry(5.5, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), brass);
      sc.rotation.x = Math.PI / 2; sc.scale.set(1, 0.45, 1);
      sc.position.set(PLATE_DX + sx * (PLT.w / 2 - 7), sy * (PLT.h / 2 - 7), PLT.t - 0.2);
      face.add(sc);
    }
  }
  // the small card
  const sface = M.print(smallTex(), 0.86);
  sface.bumpMap = fibre(SW, SH); sface.bumpScale = 0.3;
  const sc = leanCard({ w: SW, h: SH, t: STK, face: sface, back: M.paper("#E4D1A0"), edge: M.paper("#DCC795"), bow: 0.6, curls: [{ corner: "tr", r: 40, lift: 1.4 }], seg: 30 });
  sc.outer.userData.obj = "card-ceo";
  root.add(sc.outer);

  root.add(makeFloor({ y: FLOOR, x0: -900, x1: 1700, z0: -400, z1: 900, reflect: 0, shadow: 0.42, fadeC: [520, 120], fadeR: [760, 420] }));
  return {
    root,
    update: (p) => {
      const q = posePL(T, p.f);
      pivot.visible = q.visible;
      pivot.position.set(PQ.x + q.dx + PQ.w / 2, FY + q.lift, 0);
      body.position.set(-PQ.w / 2, 0, 0);
      pivot.rotation.z = -q.rock;
      setCard(sc, SC, poseSC(T, p.f), FY);
    },
  };
};
