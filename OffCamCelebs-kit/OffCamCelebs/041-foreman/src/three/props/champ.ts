// ══════════════════════════════════════════════════════════════════════════════════════════════
// CHAMP IN 3-D (041) — "Foreman was a two-time heavyweight champion of the world. He won the title back at 45." On the cream
// ground, on a thick honey-oak shelf (rounded nose, straight grain with ray flecks and pores under a satin lacquer):
//   · HIS FRAMED PHOTO: a satin-black lacquered moulding (rounded profile, its own depth), a thin gilt fillet inside it, a
//     cream mat with a bevelled window, glass, his photo (assets/foreman_face.png, Wikimedia Commons, CC BY-SA) on glossy
//     paper; a backing board and an easel strut behind. It stands leaning back 10° on the shelf's far side.
//   · TWO CHAMPIONSHIP BELTS: thick leather straps (wide at the middle, tapering to rounded ends with snap grommets, pebble
//     grain under a polish, a stitched border), lying in a gentle bow; on each a big cast-gold centre plate (a soft
//     superellipse with a scalloped rim, its own thickness and bevel, a beaded border, an enamel field with the year cast
//     in gold: 1973 on black leather, 1994 on oxblood), two gold side plates each side (engraved stars) and rows of domed
//     studs along both edges. Each slides in along the shelf on "two-time heavyweight champion", held a hair above it, and
//     drops the last few px with weight.
//   · THE PLAQUE: a small brushed-brass plaque, two domed screws, engraved and black-filled AGE 45. On "45" it swings in
//     from the near side in an arc and drops onto the 1994 belt's centre plate, below the year.
// Units are layer px; shelf-local h UP from the floor (the floor at layer y SHELF.floor), z toward the viewer.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, slabOf, roundRect, imageOf, type Model } from "../stage";
import { M, rbox, rad, col, fitFont, track, hash, font } from "../kit029";
import { GLIDE, clamp01 } from "../../r45/tokens";
import { mergeGeometries, mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";

/** the shelf: its extent on the floor (x, z) and thickness (its top is at h = t) */
export const SHELF = { floor: 1400, x0: -330, x1: 1450, z0: -400, z1: 440, t: 36 } as const;
const TOP = SHELF.t;

// ══ THE FRAME ══
/** outer w × h, moulding width, moulding depth, backing, mat border, lean (deg), centre x, the z of its back-bottom edge */
export const FR = { W: 330, H: 390, mw: 28, T: 24, back: 4, mat: 12, tilt: 10, x: 540, z: -186 } as const;
const OPEN = { w: FR.W - 2 * FR.mw, h: FR.H - 2 * FR.mw };
const WIN = { w: OPEN.w - 2 * FR.mat, h: OPEN.h - 2 * FR.mat };
/** a point on the frame (local: x from its centre, y up from its bottom, z from its front face, back = −T−back) in shelf
 *  coordinates: it leans back about its back-bottom edge, which rests on the shelf */
export const framePt = (x: number, y: number, z: number) => {
  const a = rad(FR.tilt), zr = z + FR.T + FR.back;   // from the pivot
  return { x: FR.x + x, h: TOP + 0.35 + y * Math.cos(a) + zr * Math.sin(a), z: FR.z - y * Math.sin(a) + zr * Math.cos(a) };
};
/** the photo's window corners (for the checks) and centre */
export const PHOTO = {
  c: framePt(0, FR.H / 2, -15),
  corners: [[-1, 1], [1, 1], [1, -1], [-1, -1]].map(([sx, sy]) => framePt((sx * WIN.w) / 2, FR.H / 2 + (sy * WIN.h) / 2, -15)),
};
/** the frame's top edge, front and back (the caption-band check) */
export const FRAME_TOP = [-1, -0.5, 0, 0.5, 1].flatMap((s) => [framePt((s * FR.W) / 2, FR.H, 0), framePt((s * FR.W) / 2, FR.H, -FR.T - FR.back)]);

// ══ THE BELTS ══
/** a strap: length, half-width at the middle and at the ends, thickness, the bow (its ends lie this far back) */
export const STRAP = { L: 1120, hw0: 70, hw1: 48, t: 7, bow: 26 } as const;
/** the centre plate: half-width, half-depth, thickness */
export const PL = { a: 160, b: 115, t: 9, n: 3.2 } as const;
/** the plate's top above the shelf (when the belt lies on it) */
export const PLATE_TOP = 0.2 + STRAP.t + 0.12 + PL.t;
export type BeltDef = { year: string; x: number; z: number; leather: string; edge: string; enamel: string; from: -1 | 1 };
export const BELTS: BeltDef[] = [
  { year: "1973", x: 390, z: 6, leather: "#1C1A19", edge: "#0E0D0C", enamel: "#15203A", from: -1 },
  { year: "1994", x: 730, z: 232, leather: "#5B1C1D", edge: "#2C0C0D", enamel: "#123526", from: 1 },
];
/** where the plaque lies on the 1994 plate (belt-local) */
export const PLQ = { w: 226, d: 64, t: 4.5, u: 0, v: 64 } as const;
const SIDE_X = [212, 312];
const SIDE_W = 78;

/** the strap's half-width along its length (belt-local x) */
const hwAt = (x: number) => {
  const ax = Math.abs(x);
  if (ax <= 180) return STRAP.hw0;
  if (ax >= 480) return STRAP.hw1;
  return STRAP.hw0 + ((STRAP.hw1 - STRAP.hw0) * (ax - 180)) / 300;
};
/** the bow: the centreline's z offset, and its slope */
const zoff = (x: number) => -STRAP.bow * (x / (STRAP.L / 2)) ** 2;
const slope = (x: number) => (-2 * STRAP.bow * x) / (STRAP.L / 2) ** 2;

// ══ POSES ══
export type ChampTiming = { belts: readonly [readonly [number, number], readonly [number, number]]; plq: readonly [number, number] };
type Pose = { x: number; z: number; h: number; yaw: number; pitch: number; visible: boolean };
const DROP = 6, LIFT = 16;
/** a belt slides in along the shelf from its side held a little above it, then drops the last px under gravity */
export const poseBelt = (T: ChampTiming, k: number, f: number): Pose => {
  const B = BELTS[k], [a, b] = T.belts[k];
  const u = clamp01((f - a) / (b - DROP - a));
  const fall = clamp01((f - (b - DROP)) / DROP);
  const g = 1 - GLIDE(u);
  return { x: B.x + B.from * 1450 * g, z: B.z - 6 * g, h: TOP + 0.2 + LIFT * (1 - fall * fall), yaw: B.from * 4 * g, pitch: 0, visible: f > a - 1 };
};
/** the plaque: in from the near side and right on an arc, over the plate, then a short free fall onto it */
const P_ARC = 0.74;
export const posePlaque = (T: ChampTiming, f: number): Pose => {
  const [a, b] = T.plq, B = BELTS[1];
  const u = clamp01((f - a) / (b - a));
  const p = 1 - (1 - Math.min(u / P_ARC, 1)) ** 3;
  const top = TOP + PLATE_TOP + 0.15;
  const h = u < P_ARC ? top + 30 + 62 * Math.sin((Math.PI / 2) * (u / P_ARC)) : top + 92 * (1 - ((u - P_ARC) / (1 - P_ARC)) ** 2);
  const tilt = 1 - clamp01(u / P_ARC);
  return { x: B.x + PLQ.u + 320 * (1 - p), z: B.z + PLQ.v + 640 * (1 - p), h, yaw: 24 * tilt * tilt, pitch: 34 * tilt, visible: f > a - 1 };
};
export const plaqueDone = (T: ChampTiming) => T.plq[1];

/** a point on a belt (belt-local x along it, z across it, h above its underside) at a pose */
export const beltPt = (p: { x: number; z: number; h: number; yaw: number }, x: number, z: number, h = 0) => {
  const a = rad(p.yaw), c = Math.cos(a), s = Math.sin(a);
  return { x: p.x + x * c + z * s, h: p.h + h, z: p.z - x * s + z * c };
};
/** the plate's outline (belt-local x, z) */
export const platePts = (N = 180) => {
  const out: [number, number][] = [];
  const e = 2 / PL.n;
  for (let i = 0; i < N; i++) {
    const t = (i / N) * Math.PI * 2, c = Math.cos(t), s = Math.sin(t);
    const sc = 1 + 0.014 * Math.cos(14 * t);
    out.push([PL.a * Math.sign(c) * Math.abs(c) ** e * sc, PL.b * Math.sign(s) * Math.abs(s) ** e * sc]);
  }
  return out;
};
/** where the year's print sits on a plate (belt-local box x0, z0, x1, z1) and the plaque's print */
export const YEAR_BOX = [-92, -38, 92, 16] as const;
export const PLQ_INK = [PLQ.u - 84, PLQ.v - 19, PLQ.u + 84, PLQ.v + 19] as const;

// ══ SURFACES ══
let grainC: HTMLCanvasElement | null = null;
/** a fine grey grain (bump), tiled */
const grainTex = (rep: number) => {
  if (!grainC) {
    grainC = document.createElement("canvas"); grainC.width = grainC.height = 256;
    const g = grainC.getContext("2d")!;
    g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 9000; i++) {
      const v = 90 + Math.round(80 * hash(i, 71, 9));
      g.fillStyle = `rgba(${v},${v},${v},0.5)`;
      const x = hash(i, 72, 9) * 256, y = hash(i, 73, 9) * 256, r = 0.8 + 1.8 * hash(i, 74, 9);
      g.beginPath(); g.ellipse(x, y, r, r * (0.6 + 0.5 * hash(i, 75, 9)), hash(i, 76, 9) * 3, 0, Math.PI * 2); g.fill();
    }
  }
  const t = new THREE.CanvasTexture(grainC);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep, rep);
  return t;
};

/** honey oak, the grain along x: colour bands, wavy late-wood lines, ray flecks, open pores */
const oakTex = (key: string, w: number, h: number, seed: number) => paintTex(key, w, h, (g) => {
  g.fillStyle = "#B7844F"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < h / 7; i++) {
    const p = hash(i, 1, seed) * h, wd = 3 + 26 * hash(i, 2, seed);
    g.fillStyle = hash(i, 3, seed) > 0.5 ? `rgba(214,170,112,${0.1 + 0.14 * hash(i, 4, seed)})` : `rgba(120,74,34,${0.08 + 0.14 * hash(i, 4, seed)})`;
    g.fillRect(0, p, w, wd);
  }
  for (let i = 0; i < h * 0.9; i++) {
    const p0 = hash(i, 5, seed) * h, a = 1.5 + 5 * hash(i, 6, seed), ph = hash(i, 7, seed) * 6.28, fq = 90 + 160 * hash(i, 8, seed);
    g.strokeStyle = hash(i, 9, seed) > 0.35 ? `rgba(104,62,28,${0.1 + 0.2 * hash(i, 10, seed)})` : `rgba(232,196,140,${0.08 + 0.1 * hash(i, 11, seed)})`;
    g.lineWidth = 0.4 + 1.1 * hash(i, 12, seed);
    g.beginPath();
    for (let s = 0; s <= w; s += 8) { const d = p0 + a * Math.sin(s / fq + ph) + 0.7 * Math.sin(s / 17 + ph * 3); if (s === 0) g.moveTo(s, d); else g.lineTo(s, d); }
    g.stroke();
  }
  for (let i = 0; i < (w * h) / 900; i++) {   // ray flecks: short pale dashes across the grain
    g.fillStyle = `rgba(226,190,135,${0.08 + 0.14 * hash(i, 13, seed)})`;
    g.fillRect(hash(i, 14, seed) * w, hash(i, 15, seed) * h, 4 + 14 * hash(i, 16, seed), 0.9 + 1.2 * hash(i, 17, seed));
  }
  for (let i = 0; i < (w * h) / 120; i++) {   // pores
    g.fillStyle = `rgba(70,40,16,${0.16 + 0.26 * hash(i, 18, seed)})`;
    g.fillRect(hash(i, 19, seed) * w, hash(i, 20, seed) * h, 1.2 + 4 * hash(i, 21, seed), 0.6);
  }
  // a little wear: the lacquer dulled where things are set down
  const wear = g.createRadialGradient(w * 0.55, h * 0.5, 30, w * 0.55, h * 0.5, w * 0.45);
  wear.addColorStop(0, "rgba(255,230,190,0.06)"); wear.addColorStop(1, "rgba(255,230,190,0)");
  g.fillStyle = wear; g.fillRect(0, 0, w, h);
}, 1.25);

/** the photo: his face (the Commons crop, 740 × 740) cut to the window's portrait, on glossy paper, slightly warm */
const photoTex = () => paintTex("champ-photo", WIN.w + 2, WIN.h + 2, (g) => {
  const W = WIN.w + 2, H = WIN.h + 2;
  const im = imageOf("assets/foreman_face.png");
  if (im.complete && im.naturalWidth > 0) {
    const sw = 740 * (W / H);
    g.drawImage(im, (740 - sw) / 2, 0, sw, 740, 0, 0, W, H);
  } else { g.fillStyle = "#7d8fb0"; g.fillRect(0, 0, W, H); }
  g.fillStyle = "rgba(255,214,160,0.07)"; g.fillRect(0, 0, W, H);   // a print's warmth
  const v = g.createRadialGradient(W / 2, H * 0.45, W * 0.3, W / 2, H / 2, W * 0.85);
  v.addColorStop(0, "rgba(20,14,10,0)"); v.addColorStop(1, "rgba(20,14,10,0.22)");
  g.fillStyle = v; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 1400; i++) { g.fillStyle = `rgba(${hash(i, 1, 81) > 0.5 ? "0,0,0" : "255,255,255"},${0.025 + 0.03 * hash(i, 2, 81)})`; g.fillRect(hash(i, 3, 81) * W, hash(i, 4, 81) * H, 0.6, 0.6); }
}, 3);

/** the mat board: off-white with a faint fibre, the window's bevel cut showing its white core */
const matTex = () => paintTex("champ-mat", OPEN.w, OPEN.h, (g) => {
  g.fillStyle = "#EEE6D5"; g.fillRect(0, 0, OPEN.w, OPEN.h);
  for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${hash(i, 1, 83) > 0.5 ? "150,135,110" : "255,252,244"},${0.06 + 0.06 * hash(i, 2, 83)})`; g.fillRect(hash(i, 3, 83) * OPEN.w, hash(i, 4, 83) * OPEN.h, 0.5 + 2 * hash(i, 5, 83), 0.5); }
  g.strokeStyle = "#FBF8F1"; g.lineWidth = 3.2;
  g.strokeRect(FR.mat - 1.6, FR.mat - 1.6, WIN.w + 3.2, WIN.h + 3.2);
  g.strokeStyle = "rgba(120,100,70,0.35)"; g.lineWidth = 0.8;
  g.strokeRect(FR.mat - 3.4, FR.mat - 3.4, WIN.w + 6.8, WIN.h + 6.8);
}, 2);

/** leather: the strap's top in plan (canvas top = the far side), the stitched border following its outline */
const strapPlan = () => {
  const xs: number[] = [];
  for (let x = -STRAP.L / 2 + STRAP.hw1; x <= STRAP.L / 2 - STRAP.hw1 + 0.01; x += 8) xs.push(x);
  return xs;
};
/** the strap's outline (belt-local x, z), inset by `ins` */
const strapOutline = (ins: number) => {
  const xs = strapPlan(), pts: [number, number][] = [];
  const r = STRAP.hw1 - ins, xe = STRAP.L / 2 - STRAP.hw1;
  for (const x of xs) pts.push([x, zoff(x) - (hwAt(x) - ins)]);
  for (let i = 1; i < 16; i++) { const t = -Math.PI / 2 + (i / 16) * Math.PI; pts.push([xe + r * Math.cos(t), zoff(xe) + r * Math.sin(t)]); }
  for (const x of [...xs].reverse()) pts.push([x, zoff(x) + (hwAt(x) - ins)]);
  for (let i = 1; i < 16; i++) { const t = Math.PI / 2 + (i / 16) * Math.PI; pts.push([-xe + r * Math.cos(t), zoff(-xe) + r * Math.sin(t)]); }
  return pts;
};
const bboxOf = (pts: [number, number][]) => ({
  x0: Math.min(...pts.map((p) => p[0])), x1: Math.max(...pts.map((p) => p[0])),
  z0: Math.min(...pts.map((p) => p[1])), z1: Math.max(...pts.map((p) => p[1])),
});
const tracePath = (g: CanvasRenderingContext2D, pts: [number, number][], ox: number, oz: number) => {
  g.beginPath(); pts.forEach(([x, z], i) => (i === 0 ? g.moveTo(x - ox, z - oz) : g.lineTo(x - ox, z - oz))); g.closePath();
};
const strapTex = (B: BeltDef, k: number) => {
  const out = strapOutline(0), bb = bboxOf(out);
  const W = bb.x1 - bb.x0, H = bb.z1 - bb.z0;
  return paintTex(`champ-strap-${B.year}`, W, H, (g) => {
    g.fillStyle = B.leather; g.fillRect(0, 0, W, H);
    g.save(); g.filter = "blur(10px)";
    for (let i = 0; i < 70; i++) {   // the polish: soft lighter and darker clouds
      g.fillStyle = hash(i, 1, 90 + k) > 0.5 ? "rgba(255,240,220,0.05)" : "rgba(0,0,0,0.12)";
      g.beginPath(); g.ellipse(hash(i, 2, 90 + k) * W, hash(i, 3, 90 + k) * H, 30 + 90 * hash(i, 4, 90 + k), 10 + 30 * hash(i, 5, 90 + k), 0, 0, Math.PI * 2); g.fill();
    }
    g.restore();
    for (let i = 0; i < 5200; i++) { g.fillStyle = `rgba(${hash(i, 6, 90 + k) > 0.5 ? "0,0,0" : "255,235,215"},${0.04 + 0.06 * hash(i, 7, 90 + k)})`; g.fillRect(hash(i, 8, 90 + k) * W, hash(i, 9, 90 + k) * H, 0.8 + 1.6 * hash(i, 10, 90 + k), 0.8); }
    // the edge: a darker burnished border, a tooled groove, then the saddle stitching
    g.lineJoin = "round";
    tracePath(g, strapOutline(2.5), bb.x0, bb.z0); g.strokeStyle = B.edge; g.lineWidth = 5; g.stroke();
    tracePath(g, strapOutline(13), bb.x0, bb.z0); g.strokeStyle = "rgba(0,0,0,0.45)"; g.lineWidth = 1.4; g.stroke();
    tracePath(g, strapOutline(12.2), bb.x0, bb.z0); g.strokeStyle = "rgba(255,230,200,0.12)"; g.lineWidth = 0.7; g.stroke();
    g.save(); g.setLineDash([4.2, 2.6]); g.lineCap = "round";
    tracePath(g, strapOutline(7.2), bb.x0, bb.z0); g.strokeStyle = "rgba(0,0,0,0.5)"; g.lineWidth = 1.5; g.stroke();
    tracePath(g, strapOutline(7), bb.x0, bb.z0); g.strokeStyle = "rgba(226,208,170,0.85)"; g.lineWidth = 1.05; g.stroke();
    g.restore();
    // the snap grommets near both ends: nickel rings, a dark hole
    for (const s of [-1, 1]) for (const dx of [40, 74]) {
      const x = s * (STRAP.L / 2 - dx), z = zoff(x);
      const cx = x - bb.x0, cy = z - bb.z0;
      g.fillStyle = "#B9BCBE"; g.beginPath(); g.arc(cx, cy, 8.5, 0, Math.PI * 2); g.fill();
      g.fillStyle = "rgba(255,255,255,0.55)"; g.beginPath(); g.arc(cx - 1.5, cy - 1.5, 6.5, Math.PI, Math.PI * 1.6); g.lineTo(cx, cy); g.fill();
      g.fillStyle = "#121212"; g.beginPath(); g.arc(cx, cy, 4.8, 0, Math.PI * 2); g.fill();
    }
  }, 2);
};

/** the centre plate's print: cast gold (B = metal, G = rough in the pbr twin), a beaded border, an enamel field, the year */
const GOLD = "#D7AE52";
const plateDraw = (B: BeltDef, pbr: boolean) => (g: CanvasRenderingContext2D) => {
  const pts = platePts(), bb = bboxOf(pts);
  const W = bb.x1 - bb.x0, H = bb.z1 - bb.z0, cx = -bb.x0, cz = -bb.z0;
  const sc = (ix: number, iz: number) => pts.map(([x, z]) => [x * (PL.a - ix) / PL.a, z * (PL.b - iz) / PL.b] as [number, number]);
  const goldF = pbr ? "rgb(0,80,255)" : "", dark = pbr ? "rgb(0,150,40)" : "rgba(60,38,8,0.75)";
  if (pbr) { g.fillStyle = goldF; g.fillRect(0, 0, W, H); }
  else {
    const bg = g.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#E6C26A"); bg.addColorStop(0.5, GOLD); bg.addColorStop(1, "#BE9440");
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 2600; i++) {   // the cast surface: a soft hammered mottle
      g.fillStyle = hash(i, 1, 101) > 0.5 ? `rgba(255,236,170,${0.06 + 0.08 * hash(i, 2, 101)})` : `rgba(110,70,10,${0.05 + 0.07 * hash(i, 2, 101)})`;
      g.beginPath(); g.arc(hash(i, 3, 101) * W, hash(i, 4, 101) * H, 0.6 + 2.2 * hash(i, 5, 101), 0, Math.PI * 2); g.fill();
    }
  }
  // an engraved line just inside the rim, then a row of beads
  tracePath(g, sc(8, 8), -cx, -cz); g.strokeStyle = dark; g.lineWidth = 1.4; g.stroke();
  const bead = sc(14, 14);
  for (let i = 0; i < bead.length; i += 3) {
    const [x, z] = bead[i];
    if (!pbr) { g.fillStyle = "rgba(70,44,8,0.6)"; g.beginPath(); g.arc(x + cx + 0.7, z + cz + 0.9, 2.3, 0, Math.PI * 2); g.fill(); }
    g.fillStyle = pbr ? "rgb(0,60,255)" : "#F2D88E"; g.beginPath(); g.arc(x + cx, z + cz, 2.0, 0, Math.PI * 2); g.fill();
  }
  // the enamel field (glass-hard, not metal), with a gilt line round it
  const field = sc(24, 22);
  tracePath(g, field, -cx, -cz);
  if (pbr) { g.fillStyle = "rgb(0,40,0)"; g.fill(); }
  else {
    const eg = g.createLinearGradient(0, cz - PL.b, 0, cz + PL.b);
    eg.addColorStop(0, B.enamel); eg.addColorStop(1, "#0B0D10");
    g.fillStyle = eg; g.fill();
    g.save(); g.clip();
    for (let i = 0; i < 500; i++) { g.fillStyle = `rgba(255,255,255,${0.02 + 0.03 * hash(i, 6, 103)})`; g.fillRect(hash(i, 7, 103) * W, hash(i, 8, 103) * H, 0.8, 0.8); }
    g.restore();
  }
  tracePath(g, field, -cx, -cz); g.strokeStyle = pbr ? "rgb(0,70,255)" : "#E9C878"; g.lineWidth = 2.2; g.stroke();
  // the cast type: gold, raised (a dark offset under it reads as its relief)
  const ink = pbr ? "rgb(0,70,255)" : "#E8C46C";
  g.textAlign = "center"; g.textBaseline = "alphabetic";
  const text = (s: string, x: number, y: number) => {
    if (!pbr) { g.fillStyle = "rgba(0,0,0,0.55)"; g.fillText(s, x + 1.2, y + 1.6); }
    g.fillStyle = ink; g.fillText(s, x, y);
  };
  track(g, 2.4); fitFont(g, 800, 15, "HEAVYWEIGHT CHAMPION", 196); text("HEAVYWEIGHT CHAMPION", cx, cz - 57);
  track(g, 1); const ys = fitFont(g, 800, 76, B.year, 176); text(B.year, cx, cz + YEAR_BOX[3] - 0.04 * ys);
  track(g, 2.4); fitFont(g, 800, 14, "OF THE WORLD", 150); text("OF THE WORLD", cx, cz + 58);
  track(g, 0);
  // two small stars beside the top line
  const star = (x: number, y: number, r: number) => {
    g.beginPath();
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5, rr = i % 2 ? r * 0.42 : r; g.lineTo(x + rr * Math.cos(a), y + rr * Math.sin(a)); }
    g.closePath(); g.fillStyle = ink; g.fill();
  };
  star(cx - 116, cz - 62, 7); star(cx + 116, cz - 62, 7);
};
const PB = bboxOf(platePts());
const plateTex = (B: BeltDef) => paintTex(`champ-plate-${B.year}`, PB.x1 - PB.x0, PB.z1 - PB.z0, plateDraw(B, false), 3);
const platePbr = (B: BeltDef) => { const t = paintTex(`champ-plate-pbr-${B.year}`, PB.x1 - PB.x0, PB.z1 - PB.z0, plateDraw(B, true), 2); t.colorSpace = THREE.NoColorSpace; return t; };

/** a side plate: gold, an engraved border and a star */
const sideTex = (d: number) => paintTex(`champ-side-${Math.round(d)}`, SIDE_W, d, (g) => {
  const bg = g.createLinearGradient(0, 0, SIDE_W, d);
  bg.addColorStop(0, "#E4C068"); bg.addColorStop(1, "#C39A46");
  g.fillStyle = bg; g.fillRect(0, 0, SIDE_W, d);
  for (let i = 0; i < 300; i++) { g.fillStyle = hash(i, 1, 107) > 0.5 ? "rgba(255,236,170,0.1)" : "rgba(110,70,10,0.08)"; g.beginPath(); g.arc(hash(i, 2, 107) * SIDE_W, hash(i, 3, 107) * d, 0.6 + 1.8 * hash(i, 4, 107), 0, Math.PI * 2); g.fill(); }
  g.strokeStyle = "rgba(70,44,8,0.7)"; g.lineWidth = 1.2;
  g.beginPath(); g.roundRect(7, 7, SIDE_W - 14, d - 14, 8); g.stroke();
  g.beginPath();
  const x = SIDE_W / 2, y = d / 2, r = 18;
  for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5, rr = i % 2 ? r * 0.42 : r; g.lineTo(x + rr * Math.cos(a), y + rr * Math.sin(a)); }
  g.closePath(); g.fillStyle = "rgba(70,44,8,0.55)"; g.fill();
  g.strokeStyle = "rgba(255,236,170,0.6)"; g.lineWidth = 0.8; g.stroke();
}, 3);

/** the plaque: brushed brass, an engraved border, AGE 45 cut and filled black (pbr twin: the fill is paint) */
const plaqueDraw = (pbr: boolean) => (g: CanvasRenderingContext2D) => {
  const W = PLQ.w, H = PLQ.d;
  if (pbr) { g.fillStyle = "rgb(0,92,255)"; g.fillRect(0, 0, W, H); }
  else {
    const bg = g.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#D9AE58"); bg.addColorStop(0.5, "#C99A3E"); bg.addColorStop(1, "#B58733");
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 700; i++) {
      g.fillStyle = hash(i, 4, 109) > 0.5 ? `rgba(255,232,170,${0.05 + 0.08 * hash(i, 5, 109)})` : `rgba(90,60,20,${0.05 + 0.08 * hash(i, 5, 109)})`;
      g.fillRect(hash(i, 2, 109) * W * 0.85, hash(i, 1, 109) * H, 30 + 90 * hash(i, 3, 109), 0.35 + 0.35 * hash(i, 6, 109));
    }
  }
  const ink = pbr ? "rgb(0,200,0)" : "#17110A";
  g.strokeStyle = ink; g.lineWidth = 1; g.strokeRect(6, 6, W - 12, H - 12);
  g.fillStyle = ink; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 5); const s = fitFont(g, 800, 48, "AGE 45", 168); g.fillText("AGE 45", W / 2 + 2.5, H / 2 + s * 0.36); track(g, 0);
};
const plaqueTex = () => paintTex("champ-plaque", PLQ.w, PLQ.d, plaqueDraw(false), 4);
const plaquePbr = () => { const t = paintTex("champ-plaque-pbr", PLQ.w, PLQ.d, plaqueDraw(true), 3); t.colorSpace = THREE.NoColorSpace; return t; };

// ══ BUILDERS ══
/** a flat outline (belt-local x, z) as a solid of thickness t lying with its top at local y = top */
const lyingSlab = (pts: [number, number][], t: number, bevel: number, mats: THREE.Material | THREE.Material[], top: number) => {
  const sh = new THREE.Shape();
  pts.forEach(([x, z], i) => (i === 0 ? sh.moveTo(x, -z) : sh.lineTo(x, -z)));
  sh.closePath();
  const m = mesh(slabOf(sh, t, bevel, 4), mats);
  m.rotation.x = -Math.PI / 2;
  m.position.y = top;
  return m;
};

const makeBelt = (B: BeltDef, k: number) => {
  const g = new THREE.Group();
  g.userData.obj = `belt${B.year}`;
  const grain = grainTex(5);
  const leather = new THREE.MeshPhysicalMaterial({ map: strapTex(B, k), roughness: 0.48, bumpMap: grain, bumpScale: 0.55, clearcoat: 0.35, clearcoatRoughness: 0.4, envMapIntensity: 0.5 });
  const edge = new THREE.MeshPhysicalMaterial({ color: col(B.edge), roughness: 0.42, clearcoat: 0.4, clearcoatRoughness: 0.35, envMapIntensity: 0.5 });
  g.add(lyingSlab(strapOutline(0), STRAP.t, 2.2, [leather, edge], STRAP.t));
  const gold = M.gold("#D4A94C");
  gold.roughness = 0.3;
  // the centre plate
  const pt = plateTex(B), pp = platePbr(B);
  const plateTop = new THREE.MeshPhysicalMaterial({ map: pt, metalnessMap: pp, roughnessMap: pp, metalness: 1, roughness: 1, bumpMap: pt, bumpScale: 0.6, clearcoat: 0.25, clearcoatRoughness: 0.2, envMapIntensity: 1.05 });
  g.add(lyingSlab(platePts(), PL.t, 2.6, [plateTop, gold], STRAP.t + 0.12 + PL.t));
  // the side plates, following the bow
  for (const s of [-1, 1]) for (const sx of SIDE_X) {
    const x = s * sx, d = 2 * hwAt(x) - 20;
    const sp = new THREE.Group();
    sp.position.set(x, 0, zoff(x));
    sp.rotation.y = -Math.atan(slope(x));
    const m = new THREE.MeshPhysicalMaterial({ map: sideTex(d), metalness: 1, roughness: 0.32, bumpMap: sideTex(d), bumpScale: 0.5, envMapIntensity: 1.0 });
    const r = roundRect(SIDE_W, d, 13);
    const pts = r.getPoints(10).map((p) => [p.x, -p.y] as [number, number]);
    sp.add(lyingSlab(pts, 6, 1.8, [m, gold], STRAP.t + 0.12 + 6));
    g.add(sp);
  }
  // the studs: domed, along both edges, clear of the plates
  const dome = lathe([[0.01, 0], [4.3, 0], [4.1, 1.2], [3.2, 2.6], [1.7, 3.4], [0.01, 3.7]], 14);
  const studs: THREE.BufferGeometry[] = [];
  for (let x = -STRAP.L / 2 + 110; x <= STRAP.L / 2 - 110; x += 21) {
    if (Math.abs(x) < PL.a + 12) continue;
    if (SIDE_X.some((c) => Math.abs(Math.abs(x) - c) < SIDE_W / 2 + 8)) continue;
    for (const side of [-1, 1]) {
      const d = dome.clone();
      d.translate(x, STRAP.t + 0.05, zoff(x) + side * (hwAt(x) - 8.5));
      studs.push(d);
    }
  }
  g.add(mesh(mergeGeometries(studs)!, M.gold("#DDB55A")));
  return g;
};

const makePlaque = () => {
  const g = new THREE.Group();
  g.userData.obj = "plaque";
  const brass = new THREE.MeshPhysicalMaterial({ color: col("#C99A3E"), metalness: 1, roughness: 0.32, envMapIntensity: 1.0 });
  const pt = plaqueTex(), pp = plaquePbr();
  const top = new THREE.MeshPhysicalMaterial({ map: pt, roughnessMap: pp, metalnessMap: pp, roughness: 1, metalness: 1, bumpMap: pt, bumpScale: 0.5, envMapIntensity: 1.0 });
  const b = rbox(PLQ.w, PLQ.t, PLQ.d, 1.1, { px: brass, nx: brass, top, bottom: brass, front: brass, back: brass }, 2);
  b.position.set(0, PLQ.t / 2, PLQ.d / 2);
  g.add(b);
  const head = lathe([[0.01, 0], [4.4, 0], [4.2, 1.0], [3.2, 2.1], [1.6, 2.7], [0.01, 2.85]], 18);
  for (const s of [-1, 1]) {
    const h = mesh(head, brass);
    h.position.set(s * (PLQ.w / 2 - 14), PLQ.t - 0.05, 0);
    g.add(h);
  }
  return g;
};

/** the frame's moulding: its profile (u in from the outer edge, v from the back −T to the front 0: a rounded crown, a soft
 *  outer round-over, a small lip down to the rabbet) swept along each side, the side's length shrinking with u (the mitre) */
const mouldingGeo = () => {
  const { mw, T } = FR;
  const s = new THREE.Shape();
  s.moveTo(0, -T); s.lineTo(mw, -T); s.lineTo(mw, -9);
  s.quadraticCurveTo(mw - 0.5, -5.2, mw - 4.5, -5);
  s.quadraticCurveTo(mw * 0.45, -0.4, 11, 0);
  s.quadraticCurveTo(0.4, 0.4, 0, -9);
  s.closePath();
  const ex = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false, curveSegments: 10 });
  const gr = ex.groups.find((g) => g.materialIndex === 1)!;
  const src = ex.attributes.position as THREE.BufferAttribute;
  const parts: THREE.BufferGeometry[] = [];
  for (const [L, off, rot] of [[FR.W, FR.H / 2, 0], [FR.H, FR.W / 2, Math.PI / 2], [FR.W, FR.H / 2, Math.PI], [FR.H, FR.W / 2, -Math.PI / 2]]) {
    const out = new Float32Array(gr.count * 3);
    for (let i = 0; i < gr.count; i++) {
      const u = src.getX(gr.start + i), v = src.getY(gr.start + i), e = src.getZ(gr.start + i);
      out[i * 3] = (1 - 2 * e) * (L / 2 - u); out[i * 3 + 1] = off - u; out[i * 3 + 2] = v;
    }
    let g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(out, 3));
    g = mergeVertices(g, 0.001);
    g.computeVertexNormals();
    g.rotateZ(rot);
    parts.push(g);
  }
  ex.dispose();
  const m = mergeGeometries(parts)!;
  m.translate(0, FR.H / 2, 0);
  return m;
};

const makeFrame = () => {
  const fr = new THREE.Group();
  fr.userData.obj = "frame";
  const fi = new THREE.Group();
  const lac = new THREE.MeshPhysicalMaterial({ color: col("#1A1715"), roughness: 0.34, clearcoat: 0.6, clearcoatRoughness: 0.26, envMapIntensity: 0.75 });
  // the moulding: a rounded profile swept round the opening, its four sides mitred at the corners
  fi.add(mesh(mouldingGeo(), lac));
  // the gilt fillet just inside it, set back a little
  const fo = new THREE.Shape();
  { const w = OPEN.w / 2 - 0.2, h = OPEN.h / 2 - 0.2; fo.moveTo(-w, -h); fo.lineTo(w, -h); fo.lineTo(w, h); fo.lineTo(-w, h); fo.closePath(); }
  const fh = new THREE.Path();
  { const w = OPEN.w / 2 - 6, h = OPEN.h / 2 - 6; fh.moveTo(-w, -h); fh.lineTo(-w, h); fh.lineTo(w, h); fh.lineTo(w, -h); fh.closePath(); }
  fo.holes.push(fh);
  const gilt = M.gold("#D8B45E"); gilt.roughness = 0.34;
  const fillet = mesh(slabOf(fo, 8, 0, 2), gilt);
  fillet.position.set(0, FR.H / 2, -4);
  fi.add(fillet);
  // the mat, its window bevel-cut
  const mo = new THREE.Shape();
  { const w = OPEN.w / 2 - 0.3, h = OPEN.h / 2 - 0.3; mo.moveTo(-w, -h); mo.lineTo(w, -h); mo.lineTo(w, h); mo.lineTo(-w, h); mo.closePath(); }
  const mh = new THREE.Path();
  { const w = WIN.w / 2, h = WIN.h / 2; mh.moveTo(-w, -h); mh.lineTo(-w, h); mh.lineTo(w, h); mh.lineTo(w, -h); mh.closePath(); }
  mo.holes.push(mh);
  const matM = new THREE.MeshStandardMaterial({ map: matTex(), roughness: 0.9, envMapIntensity: 0.3 });
  const mat = mesh(slabOf(mo, 3, 0, 2), [matM, M.paper("#F7F3EA")]);
  mat.position.set(0, FR.H / 2, -12.1);
  fi.add(mat);
  // the photo on glossy paper behind the window
  const ph = mesh(new THREE.PlaneGeometry(WIN.w + 2, WIN.h + 2), new THREE.MeshPhysicalMaterial({ map: photoTex(), roughness: 0.34, clearcoat: 0.3, clearcoatRoughness: 0.2, envMapIntensity: 0.3 }), false, true);
  ph.position.set(0, FR.H / 2, -15.3);
  fi.add(ph);
  // the backing board (the frame's back) and the glass
  const board = new THREE.MeshStandardMaterial({ color: col("#5A4632"), roughness: 0.9 });
  const back = rbox(FR.W - 2, FR.H, FR.back, 1, board, 2);
  back.position.set(0, FR.H / 2, -FR.T);
  fi.add(back);
  const glass = new THREE.MeshPhysicalMaterial({ color: col("#F4F6F8"), roughness: 0.05, metalness: 0, transparent: true, opacity: 0.1, depthWrite: false, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 1.3 });
  const gl = new THREE.Mesh(new THREE.PlaneGeometry(OPEN.w - 2, OPEN.h - 2), glass);
  gl.position.set(0, FR.H / 2, -3.2);
  fi.add(gl);
  // lean back about the back-bottom edge, which rests on the shelf
  fi.position.set(0, 0, FR.T + FR.back);
  const pivot = new THREE.Group();
  pivot.add(fi);
  pivot.rotation.x = -rad(FR.tilt);
  fr.add(pivot);
  pivot.updateMatrixWorld(true);
  const bb = new THREE.Box3().setFromObject(pivot);
  pivot.position.y = -bb.min.y + 0.3;
  pivot.updateMatrixWorld(true);
  // the easel strut: from the back, 60% up, down and back to the shelf
  const P = new THREE.Vector3(0, FR.H * 0.62, 0).applyMatrix4(pivot.matrixWorld);
  const ST = 5;
  const Q = new THREE.Vector3(0, 0.3, P.z - 0.5 * P.y);
  const d2 = new THREE.Vector3().subVectors(P, Q);
  const len = d2.length();
  d2.normalize();
  const strut = rbox(46, len - 1, ST, 1, board, 2);
  strut.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d2);
  const zl = new THREE.Vector3(0, 0, 1).applyQuaternion(strut.quaternion);
  strut.position.copy(P).add(Q).multiplyScalar(0.5).addScaledVector(zl, -0.45).addScaledVector(d2, -0.5);
  fr.add(strut);
  return fr;
};

// ══ THE MODEL ══
export type ChampP = { f: number };
export const champModel = (T: ChampTiming) => (): Model<ChampP> => {
  const root = new THREE.Group();
  const FY = -SHELF.floor;

  // the shelf: a thick oak board, its nose rounded
  const shelf = new THREE.Group(); shelf.userData.obj = "shelf"; root.add(shelf);
  {
    const W = SHELF.x1 - SHELF.x0, D = SHELF.z1 - SHELF.z0;
    const top = new THREE.MeshPhysicalMaterial({ map: oakTex("champ-oak-top", W, D, 7), roughness: 0.44, bumpMap: grainTex(14), bumpScale: 0.2, clearcoat: 0.35, clearcoatRoughness: 0.32, envMapIntensity: 0.5 });
    const side = new THREE.MeshPhysicalMaterial({ map: oakTex("champ-oak-edge", W, 60, 11), roughness: 0.46, clearcoat: 0.3, clearcoatRoughness: 0.35, envMapIntensity: 0.5 });
    const end = new THREE.MeshPhysicalMaterial({ color: col("#9C6B3C"), roughness: 0.55, clearcoat: 0.2, envMapIntensity: 0.4 });
    const b = rbox(W, SHELF.t, D, 6, { px: end, nx: end, top, bottom: end, front: side, back: side }, 4);
    b.position.set((SHELF.x0 + SHELF.x1) / 2, FY + SHELF.t / 2, SHELF.z1);
    shelf.add(b);
  }

  const frame = makeFrame();
  frame.position.set(FR.x, FY + TOP, FR.z);
  root.add(frame);

  const belts = BELTS.map((B, k) => { const g = makeBelt(B, k); root.add(g); return g; });
  const plaque = makePlaque();
  root.add(plaque);

  root.add(makeFloor({ y: SHELF.floor, x0: -1400, x1: 2500, z0: -1000, z1: 1300, reflect: 0.08, shadow: 0.5, fadeC: [560, 60], fadeR: [1400, 800] }));

  const place = (g: THREE.Group, p: Pose, yOff = 0) => {
    g.visible = p.visible; g.position.set(p.x, FY + p.h + yOff, p.z); g.rotation.set(0, rad(p.yaw), 0);
  };
  return {
    root,
    update: (p) => {
      belts.forEach((g, k) => place(g, poseBelt(T, k, p.f)));
      const q = posePlaque(T, p.f);
      plaque.visible = q.visible;
      plaque.position.set(q.x, FY + q.h, q.z);
      plaque.rotation.set(rad(q.pitch), rad(q.yaw), 0, "YXZ");
    },
  };
};
