// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE CHAMPION IN 3-D (039) — "Canelo is boxing's biggest star, a four-division world champion." On the cream ground, on an
// unseen ring-side table (the floor: its soft shadows), two real things:
//   · THE FRAMED PHOTO: a black lacquer frame (a bevelled moulding with a gold inner lip), a cream mat and his photo behind
//     it (assets/canelo_face.png, Wikimedia Commons, CC BY 3.0), standing on its walnut easel strut, leaning back 12°;
//   · THE BELT: a championship belt of black leather, gold-stitched, laid in a gentle curve in front of the frame (its ends
//     curling back), a big gold centre plate on a leather backing (WORLD / CHAMPION engraved round a raised medallion, ruby
//     cabochons) and FOUR side plates, one per division, engraved with its weight limit (154, 160, 168, 175 LB). It is slid in
//     from beyond the right edge, low over the table, lands with weight and brakes to rest. On "four-division" its four side
//     plates light up one by one (dull antique gold to polished, a warm flare that settles).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, slabOf, paintTex, imageOf, roundRect, type Model } from "../stage";
import { M, rbox, rad, fitFont, track, hash, font } from "../kit029";

export const CG = {
  floor: 1450,
  frame: { x: 548, z: -230 },   // the frame's back-bottom edge, centre
  belt: { x: 540, z: 40 },     // the belt's centre (its strap's mid-line) on the table
} as const;

// ══ THE FRAME ══
export const FR = { W: 400, H: 520, MW: 36, D: 26, LEAN: 12 } as const;
const PRW = FR.W - 2 * FR.MW + 8, PRH = FR.H - 2 * FR.MW + 8;   // the mat print, its edges tucked under the moulding
const WIN = { x: 34, y: 36, w: PRW - 68, h: PRH - 36 - 54 };     // the photo's window in the mat
const HINGE = 0.62, STRUT_BACK = 150, STRUT_T = 8;

/** a point of the frame (frame-local: x across from its centre, y up from its bottom, z out of its back plane) → world */
const frameW = (x: number, y: number, z: number) => {
  const th = -rad(FR.LEAN), c = Math.cos(th), s = Math.sin(th);
  return { x: CG.frame.x + x, y: -CG.floor + y * c - z * s, z: CG.frame.z + y * s + z * c };
};
/** the frame's outer corners (layer coords: y down), for the camera's framings and checks */
export const framePts = (): [number, number, number][] => {
  const out: [number, number, number][] = [];
  for (const x of [-FR.W / 2, FR.W / 2]) for (const y of [0, FR.H]) for (const z of [0, FR.D]) { const p = frameW(x, y, z); out.push([p.x, -p.y, p.z]); }
  return out;
};
export const frameFace = () => { const p = frameW(0, FR.H * 0.55, FR.D); return { x: p.x, y: -p.y, z: p.z }; };

// ══ THE BELT ══
export const BT = { HALF: 500, BEND: 150, W: 120, T: 8, PADW: 420, PADD: 300, PADT: 10, PW: 370, PD: 250, PT: 12, MR: 60, MT: 6, SPW: 104, SPD: 108, SPT: 8 } as const;
export const SIDE_U = [-384, -262, 262, 384] as const;
const WEIGHTS = ["154", "160", "168", "175"];
/** the strap's mid-line: flat through the centre, its ends curling back */
const pathZ = (u: number) => -BT.BEND * Math.pow(u / BT.HALF, 4);
const pathDZ = (u: number) => (-4 * BT.BEND * Math.pow(u, 3)) / Math.pow(BT.HALF, 4);

export type BeltT = { land: number };
const FLY = 22, DX = 1650, H0 = 46, SLIDE = 34, BRAKE = 9;
/** the slide-in: from beyond the right edge, low over the table, decelerating as it drops; it lands at `land` (thump), then
 *  brakes over the last few px with one small bounce */
export const beltAt = (T: BeltT, f: number) => {
  const t0 = T.land - FLY;
  if (f <= t0) return { dx: DX + SLIDE, h: H0, spin: rad(10), visible: false };
  if (f < T.land) {
    const u = (f - t0) / FLY, e = 1 - Math.pow(1 - u, 2.2);
    return { dx: SLIDE + DX * (1 - e), h: H0 * (1 - u * u), spin: rad(10) * (1 - e) + rad(1) * e, visible: true };
  }
  const t = f - T.land;
  const bounce = t < 6 ? 2.2 * Math.sin((Math.PI * t) / 6) : 0;
  const k = Math.min(1, t / BRAKE);
  return { dx: SLIDE * (1 - k) * (1 - k), h: bounce, spin: rad(1) * (1 - k) * (1 - k), visible: true };
};
export const beltStart = (T: BeltT) => T.land - FLY;
/** the frame the belt moves fastest (its whoosh peaks there) */
export const beltFastest = (T: BeltT) => T.land - FLY + 1;
/** a point of the belt (belt-local: x along, y up, z toward the viewer) → layer coords at f */
export const beltPt = (T: BeltT, f: number, lx: number, ly: number, lz: number): [number, number, number] => {
  const b = beltAt(T, f), c = Math.cos(b.spin), s = Math.sin(b.spin);
  const x = lx * c + lz * s, z = -lx * s + lz * c;
  return [CG.belt.x + b.dx + x, CG.floor - b.h - ly, CG.belt.z + z];
};
/** the belt's extreme points (for the framings and the band checks) */
export const beltPts = (T: BeltT, f: number) => {
  const out: [number, number, number][] = [];
  for (const u of [-BT.HALF, BT.HALF]) for (const a of [-1, 1]) {
    const z = pathZ(u), dz = pathDZ(u), n = Math.hypot(1, dz);
    out.push(beltPt(T, f, u - (a * BT.W) / 2 * (dz / n), BT.T, z + (a * BT.W) / 2 * (1 / n)));
  }
  for (const x of [-BT.PADW / 2, 0, BT.PADW / 2]) out.push(beltPt(T, f, x, BT.PADT, BT.PADD / 2), beltPt(T, f, x, BT.PADT, -BT.PADD / 2));
  out.push(beltPt(T, f, 0, BT.PADT + BT.PT + BT.MT, 0));
  return out;
};
/** where each side plate's engraved number sits (layer coords) */
export const plateNums = (T: BeltT, f: number) => SIDE_U.map((u) => beltPt(T, f, u, BT.T + BT.SPT, pathZ(u) - 4));
/** the centre plate's lower word (CHAMPION), its nearest print */
export const champWord = (T: BeltT, f: number) => [-80, 80].map((x) => beltPt(T, f, x, BT.PADT + BT.PT, 96));

// ══ PRINT ══
const goldBase = (g: CanvasRenderingContext2D, w: number, h: number, seed: number) => {
  const gr = g.createLinearGradient(0, 0, w, h);
  gr.addColorStop(0, "#F3D886"); gr.addColorStop(0.45, "#DDB352"); gr.addColorStop(0.7, "#EFCD6E"); gr.addColorStop(1, "#D2A443");
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  // the brushing: fine strokes across
  for (let i = 0; i < 900; i++) {
    g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? "255,240,190" : "150,105,35"},${0.05 + 0.07 * hash(i, 2, seed)})`;
    g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 6 + hash(i, 5, seed) * 26, 0.35);
  }
};
const ENGR = "#6E4A12", HI = "rgba(255,246,205,0.85)";
/** an engraved stroke: the cut (dark) with its lit lip below and right */
const engrave = (g: CanvasRenderingContext2D, path: () => void, wdt: number) => {
  g.save(); g.translate(0.7, 0.7); g.strokeStyle = HI; g.lineWidth = wdt * 0.7; path(); g.stroke(); g.restore();
  g.strokeStyle = ENGR; g.lineWidth = wdt; path(); g.stroke();
};
const engraveText = (g: CanvasRenderingContext2D, t: string, x: number, y: number) => {
  g.fillStyle = HI; g.fillText(t, x + 0.9, y + 0.9);
  g.fillStyle = ENGR; g.fillText(t, x, y);
};
const octPath = (g: CanvasRenderingContext2D, x0: number, y0: number, w: number, h: number, c: number) => {
  g.beginPath();
  g.moveTo(x0 + c, y0); g.lineTo(x0 + w - c, y0); g.lineTo(x0 + w, y0 + c); g.lineTo(x0 + w, y0 + h - c);
  g.lineTo(x0 + w - c, y0 + h); g.lineTo(x0 + c, y0 + h); g.lineTo(x0, y0 + h - c); g.lineTo(x0, y0 + c); g.closePath();
};
const OCT_C = 54, SOCT_C = 20;
const centreTex = () => paintTex("ch-centre", BT.PW, BT.PD, (g) => {
  const w = BT.PW, h = BT.PD;
  goldBase(g, w, h, 11);
  engrave(g, () => octPath(g, 9, 9, w - 18, h - 18, OCT_C - 4), 2.2);
  engrave(g, () => octPath(g, 17, 17, w - 34, h - 34, OCT_C - 8), 1.1);
  // the rope between the two borders: short slanted cuts
  g.strokeStyle = "rgba(110,74,18,0.55)"; g.lineWidth = 0.9;
  for (let x = 17 + OCT_C; x < w - 17 - OCT_C; x += 5) { for (const y of [10, h - 17]) { g.beginPath(); g.moveTo(x, y); g.lineTo(x + 3, y + 6); g.stroke(); } }
  // the laurel round the medallion
  for (const sgn of [-1, 1]) for (let k = 0; k < 9; k++) {
    const a = Math.PI / 2 + sgn * (0.35 + k * 0.27), R = BT.MR + 16;
    const x = w / 2 + R * Math.cos(a), y = h / 2 + R * Math.sin(a) * 0.98;
    g.save(); g.translate(x, y); g.rotate(a + sgn * 0.9);
    g.fillStyle = HI; g.beginPath(); g.ellipse(0.7, 0.7, 7.5, 3, 0, 0, Math.PI * 2); g.fill();
    g.fillStyle = "rgba(110,74,18,0.8)"; g.beginPath(); g.ellipse(0, 0, 7.5, 3, 0, 0, Math.PI * 2); g.fill();
    g.restore();
  }
  g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 5); fitFont(g, 800, 30, "WORLD", 160); engraveText(g, "WORLD", w / 2 + 2.5, 54); track(g, 0);
  track(g, 4); fitFont(g, 800, 30, "CHAMPION", 210); engraveText(g, "CHAMPION", w / 2 + 2, h - 30); track(g, 0);
}, 4);
const medalTex = () => paintTex("ch-medal", BT.MR * 2, BT.MR * 2, (g) => {
  const R = BT.MR, w = R * 2;
  const gr = g.createRadialGradient(R * 0.7, R * 0.6, 4, R, R, R);
  gr.addColorStop(0, "#FBE6A2"); gr.addColorStop(0.6, "#E3BA58"); gr.addColorStop(1, "#C8963A");
  g.fillStyle = gr; g.fillRect(0, 0, w, w);
  engrave(g, () => { g.beginPath(); g.arc(R, R, R - 7, 0, Math.PI * 2); }, 1.8);
  engrave(g, () => { g.beginPath(); g.arc(R, R, R - 13, 0, Math.PI * 2); }, 0.9);
  // the five-point star, cut deep
  const star = () => {
    g.beginPath();
    for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + (k * Math.PI) / 5, r = k % 2 ? 15 : 36; const x = R + r * Math.cos(a), y = R + 2 + r * Math.sin(a); if (k) g.lineTo(x, y); else g.moveTo(x, y); }
    g.closePath();
  };
  g.save(); g.translate(1, 1); star(); g.fillStyle = HI; g.fill(); g.restore();
  star(); g.fillStyle = "#9C6E22"; g.fill();
  engrave(g, star, 1.2);
}, 5);
const sideTex = (k: number) => paintTex(`ch-side-${k}`, BT.SPW, BT.SPD, (g) => {
  const w = BT.SPW, h = BT.SPD;
  goldBase(g, w, h, 20 + k);
  engrave(g, () => octPath(g, 6, 6, w - 12, h - 12, SOCT_C - 3), 1.6);
  g.textAlign = "center"; g.textBaseline = "alphabetic";
  fitFont(g, 800, 46, WEIGHTS[k], w - 24); engraveText(g, WEIGHTS[k], w / 2, 66);
  track(g, 3); font(g, 800, 17); engraveText(g, "LB", w / 2 + 1.5, 90); track(g, 0);
}, 5);
const leatherTex = () => paintTex("ch-leather", 1000, BT.W, (g) => {
  const w = 1000, h = BT.W;
  g.fillStyle = "#1C1816"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 6000; i++) { g.fillStyle = `rgba(${hash(i, 1, 31) > 0.5 ? "70,60,55" : "0,0,0"},${0.12 + 0.18 * hash(i, 2, 31)})`; g.fillRect(hash(i, 3, 31) * w, hash(i, 4, 31) * h, 1 + hash(i, 5, 31) * 2.5, 0.8 + hash(i, 6, 31)); }
  // the creased groove and the gold stitching, a row along each edge
  for (const y of [7, h - 7]) { g.fillStyle = "rgba(0,0,0,0.55)"; g.fillRect(0, y - 0.6, w, 1.2); }
  for (const y of [14, h - 14]) for (let x = 2; x < w; x += 10) {
    g.fillStyle = "rgba(0,0,0,0.5)"; g.fillRect(x + 0.6, y - 0.6, 6.5, 2.4);
    g.fillStyle = "#D2AA55"; g.fillRect(x, y - 1.1, 6.5, 2.2);
  }
  g.fillStyle = "#0E0B0A"; g.fillRect(0, 0, w, 1.5); g.fillRect(0, h - 1.5, w, 1.5);
}, 2);
const padTex = () => paintTex("ch-pad", BT.PADW, BT.PADD, (g) => {
  const w = BT.PADW, h = BT.PADD;
  g.fillStyle = "#1C1816"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 5000; i++) { g.fillStyle = `rgba(${hash(i, 1, 37) > 0.5 ? "70,60,55" : "0,0,0"},${0.12 + 0.18 * hash(i, 2, 37)})`; g.fillRect(hash(i, 3, 37) * w, hash(i, 4, 37) * h, 1 + hash(i, 5, 37) * 2.5, 0.8 + hash(i, 6, 37)); }
  g.setLineDash([6.5, 3.5]); g.lineCap = "butt";
  g.strokeStyle = "#D2AA55"; g.lineWidth = 2.2;
  g.beginPath(); g.roundRect(13, 13, w - 26, h - 26, 58); g.stroke();
  g.setLineDash([]);
}, 2);
const PHOTO = "assets/canelo_face.png";
const matTex = () => paintTex("ch-mat", PRW, PRH, (g) => {
  g.fillStyle = "#F2ECE0"; g.fillRect(0, 0, PRW, PRH);
  for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${hash(i, 1, 41) > 0.5 ? "150,135,110" : "255,255,250"},${0.04 + 0.05 * hash(i, 2, 41)})`; g.fillRect(hash(i, 3, 41) * PRW, hash(i, 4, 41) * PRH, 0.5 + hash(i, 5, 41) * 2, 0.3); }
  // the photo, cropped to his head and shoulders (the backdrop's sponsor marks left out)
  const im = imageOf(PHOTO);
  if (im.complete && im.naturalWidth > 0) {
    const sw = 540, sh = (sw * WIN.h) / WIN.w, sx = 122, sy = 72;
    g.filter = "contrast(1.04) saturate(1.04)";
    g.drawImage(im, sx, sy, sw, sh, WIN.x, WIN.y, WIN.w, WIN.h);
    g.filter = "none";
  } else { g.fillStyle = "#2E2C30"; g.fillRect(WIN.x, WIN.y, WIN.w, WIN.h); }
  // the mat's bevelled cut: a white core lit on the lower and right lips, shaded on the upper and left
  const { x, y, w, h } = WIN, b = 4;
  g.fillStyle = "#FBF8F1";
  g.beginPath(); g.moveTo(x - b, y + h + b); g.lineTo(x + w + b, y + h + b); g.lineTo(x + w, y + h); g.lineTo(x, y + h); g.closePath(); g.fill();
  g.beginPath(); g.moveTo(x + w + b, y - b); g.lineTo(x + w + b, y + h + b); g.lineTo(x + w, y + h); g.lineTo(x + w, y); g.closePath(); g.fill();
  g.fillStyle = "#E4DCCD";
  g.beginPath(); g.moveTo(x - b, y - b); g.lineTo(x + w + b, y - b); g.lineTo(x + w, y); g.lineTo(x, y); g.closePath(); g.fill();
  g.beginPath(); g.moveTo(x - b, y - b); g.lineTo(x, y); g.lineTo(x, y + h); g.lineTo(x - b, y + h + b); g.closePath(); g.fill();
  // the moulding's soft shadow on the mat along its top and left
  const sg = g.createLinearGradient(0, 0, 0, 22); sg.addColorStop(0, "rgba(60,45,30,0.32)"); sg.addColorStop(1, "rgba(60,45,30,0)");
  g.fillStyle = sg; g.fillRect(0, 0, PRW, 22);
  const sl = g.createLinearGradient(0, 0, 16, 0); sl.addColorStop(0, "rgba(60,45,30,0.22)"); sl.addColorStop(1, "rgba(60,45,30,0)");
  g.fillStyle = sl; g.fillRect(0, 0, 16, PRH);
}, 3);
let softT: THREE.CanvasTexture | null = null;
const softTex = () => {
  if (softT) return softT;
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
  g.filter = "blur(24px)"; g.fillStyle = "#fff"; g.beginPath(); g.ellipse(128, 128, 92, 80, 0, 0, Math.PI * 2); g.fill();
  softT = new THREE.CanvasTexture(c);
  return softT;
};

// ══ GEOMETRY ══
const octShape = (w: number, h: number, c: number) => {
  const s = new THREE.Shape();
  s.moveTo(-w / 2 + c, -h / 2); s.lineTo(w / 2 - c, -h / 2); s.lineTo(w / 2, -h / 2 + c); s.lineTo(w / 2, h / 2 - c);
  s.lineTo(w / 2 - c, h / 2); s.lineTo(-w / 2 + c, h / 2); s.lineTo(-w / 2, h / 2 - c); s.lineTo(-w / 2, -h / 2 + c); s.closePath();
  return s;
};
/** a slab lying flat on y = 0, its printed face up (the print's top toward the back) */
const flat = (shape: THREE.Shape, t: number, bevel: number, mats: THREE.Material[]) => {
  const m = mesh(slabOf(shape, t, bevel, 24), mats);
  m.rotation.x = -Math.PI / 2;
  m.position.y = t;
  return m;
};
/** the strap from u0 to u1: a leather band (rounded top edges) following the curved mid-line, lying on y = 0 */
const strap = (u0: number, u1: number, n: number, mat: THREE.Material, capMat: THREE.Material) => {
  const w = BT.W / 2, T = BT.T, r = 2.5;
  const prof: [number, number][] = [[-w, 0], [-w, T - r]];
  for (let k = 1; k < 4; k++) { const a = Math.PI - (Math.PI / 2) * (k / 4); prof.push([-w + r + r * Math.cos(a), T - r + r * Math.sin(a)]); }
  prof.push([-w + r, T], [w - r, T]);
  for (let k = 1; k < 4; k++) { const a = Math.PI / 2 - (Math.PI / 2) * (k / 4); prof.push([w - r + r * Math.cos(a), T - r + r * Math.sin(a)]); }
  prof.push([w, T - r], [w, 0]);
  const P = prof.length;
  const pos: number[] = [], uv: number[] = [], idx: number[] = [];
  const ring = (u: number) => {
    const z = pathZ(u), dz = pathDZ(u), nn = Math.hypot(1, dz), tx = 1 / nn, tz = dz / nn;
    return prof.map(([a, h]) => [u - a * tz, h, z + a * tx] as [number, number, number]);
  };
  for (let i = 0; i <= n; i++) {
    const u = u0 + ((u1 - u0) * i) / n, rg = ring(u);
    rg.forEach(([x, y, z], j) => { pos.push(x, y, z); uv.push((u + BT.HALF) / (2 * BT.HALF), 1 - (prof[j][0] + w) / (2 * w)); });
  }
  for (let i = 0; i < n; i++) for (let j = 0; j < P; j++) {
    const a = i * P + j, b = i * P + ((j + 1) % P), c = (i + 1) * P + j, d = (i + 1) * P + ((j + 1) % P);
    idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  const grp = new THREE.Group();
  grp.add(mesh(g, mat));
  // the cut ends: flat caps
  for (const u of [u0, u1]) {
    const rg = ring(u), cp: number[] = [];
    const cx = rg.reduce((s, p) => s + p[0], 0) / P, cy = T / 2, cz = rg.reduce((s, p) => s + p[2], 0) / P;
    for (let j = 0; j < P; j++) { const p = rg[j], q = rg[(j + 1) % P]; cp.push(cx, cy, cz, ...p, ...q); }
    const cg = new THREE.BufferGeometry(); cg.setAttribute("position", new THREE.Float32BufferAttribute(cp, 3)); cg.computeVertexNormals();
    grp.add(mesh(cg, capMat));
  }
  return grp;
};

export type ChampP = { f: number; lit: number[]; flare: number[]; yaw: number };

export const champModel = (T: BeltT) => (): Model<ChampP> => {
  const root = new THREE.Group();
  const FY = -CG.floor;
  const turn = new THREE.Group(); turn.position.set(540, 0, 0); root.add(turn);
  const W0 = new THREE.Group(); W0.position.set(-540, 0, 0); turn.add(W0);

  // ══ THE FRAME ══
  const frameRoot = new THREE.Group(); frameRoot.position.set(CG.frame.x, FY, CG.frame.z); frameRoot.userData.obj = "frame"; W0.add(frameRoot);
  const frameG = new THREE.Group(); frameG.rotation.x = -rad(FR.LEAN); frameRoot.add(frameG);
  const body = new THREE.Group(); frameG.add(body);
  const lacquer = M.satin("#1E1B19", 0.36);
  {
    // the moulding: four bevelled lacquer rails, mitre-jointed at the corners
    const iw = FR.W - 2 * FR.MW, ih = FR.H - 2 * FR.MW;
    for (const [w, h, x, y] of [[FR.W, FR.MW, 0, FR.H / 2 - FR.MW / 2], [FR.W, FR.MW, 0, -FR.H / 2 + FR.MW / 2],
      [FR.MW, ih + 2, FR.W / 2 - FR.MW / 2, 0], [FR.MW, ih + 2, -FR.W / 2 + FR.MW / 2, 0]] as [number, number, number, number][]) {
      const rail = rbox(w, h, FR.D, 5, lacquer, 4);
      rail.position.set(x, FR.H / 2 + y, FR.D);
      body.add(rail);
    }
    // the gold lip round the opening, standing 1.5 proud of the moulding's face: four slim gilt bars
    const gilt = M.gold("#D6AD4E");
    for (const [w, h, x, y] of [[iw + 12, 6, 0, ih / 2 + 3], [iw + 12, 6, 0, -ih / 2 - 3], [6, ih, iw / 2 + 3, 0], [6, ih, -iw / 2 - 3, 0]] as [number, number, number, number][]) {
      const bar = rbox(w, h, 4, 1.2, gilt);
      bar.position.set(x, FR.H / 2 + y, FR.D + 1.5);
      body.add(bar);
    }
    // the mat and photo, recessed 7 behind the face; the kraft backing board behind it
    const pr = mesh(new THREE.PlaneGeometry(PRW, PRH), M.print(matTex(), 0.62));
    pr.position.set(0, FR.H / 2, FR.D - 7);
    body.add(pr);
    const board = rbox(FR.W - 10, FR.H - 10, 6, 1.5, M.paper("#9A7B56"));
    board.position.set(0, FR.H / 2, 6);
    body.add(board);
  }
  // seat the frame on the table: its lowest point (the back-bottom edge, rounded) exactly on the floor
  frameRoot.updateMatrixWorld(true);
  {
    const bb = new THREE.Box3().setFromObject(body, true);
    frameG.position.y = -(bb.min.y - FY);
  }
  // the easel strut: from a hinge high on the back down to the table behind
  {
    const hy = FR.H * HINGE, th = rad(FR.LEAN);
    const H = { y: frameG.position.y + hy * Math.cos(th), z: -hy * Math.sin(th) };
    const F = { y: 0, z: H.z - STRUT_BACK };
    const len = Math.hypot(H.y - F.y, H.z - F.z), phi = Math.atan2(H.z - F.z, H.y - F.y);
    const sg = new THREE.Group(); sg.position.set(0, (H.y + F.y) / 2, (H.z + F.z) / 2); sg.rotation.x = phi; frameRoot.add(sg);
    const st = rbox(46, len, STRUT_T, 2, M.satin("#5A3A28", 0.6));
    sg.add(st);
  }

  // ══ THE BELT ══
  const beltG = new THREE.Group(); beltG.userData.obj = "belt"; W0.add(beltG);
  const leather = new THREE.MeshPhysicalMaterial({ map: leatherTex(), roughness: 0.52, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.42, envMapIntensity: 0.5 });
  const leatherPlain = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#171311"), roughness: 0.55, clearcoat: 0.3, clearcoatRoughness: 0.45, envMapIntensity: 0.5, side: THREE.DoubleSide });
  const goldPlain = M.gold("#D9AF4C");
  const goldOf = (t: THREE.Texture) => new THREE.MeshPhysicalMaterial({ map: t, metalness: 1, roughness: 0.27, envMapIntensity: 1.0 });
  const edge = BT.PADW / 2 - 18;
  beltG.add(strap(-BT.HALF, -edge, 70, leather, leatherPlain), strap(edge, BT.HALF, 70, leather, leatherPlain));
  const pad = flat(roundRect(BT.PADW, BT.PADD, 70), BT.PADT, 2, [new THREE.MeshPhysicalMaterial({ map: padTex(), roughness: 0.52, clearcoat: 0.35, clearcoatRoughness: 0.42, envMapIntensity: 0.5 }), leatherPlain]);
  beltG.add(pad);
  const plate = flat(octShape(BT.PW, BT.PD, OCT_C), BT.PT, 3, [goldOf(centreTex()), goldPlain]);
  plate.position.y += BT.PADT;
  beltG.add(plate);
  const medal = flat(new THREE.Shape().absarc(0, 0, BT.MR, 0, Math.PI * 2, false) as THREE.Shape, BT.MT, 2, [goldOf(medalTex()), goldPlain]);
  medal.position.y += BT.PADT + BT.PT;
  beltG.add(medal);
  const ruby = M.gloss("#9A1820");
  const gemG = new THREE.SphereGeometry(10, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  for (const x of [-142, -104, 104, 142]) {
    const gm = mesh(gemG, ruby); gm.scale.set(1, 0.62, 1); gm.position.set(x, BT.PADT + BT.PT - 0.3, 2); beltG.add(gm);
  }
  // the four division plates, each with its own gold (it lights on its own beat)
  const sideMats = SIDE_U.map((_, k) => new THREE.MeshPhysicalMaterial({ map: sideTex(k), metalness: 1, roughness: 0.6, envMapIntensity: 1.0,
    emissive: new THREE.Color("#FFC35A"), emissiveMap: sideTex(k), emissiveIntensity: 0 }));
  const sideEdge = SIDE_U.map(() => M.gold("#D9AF4C"));
  SIDE_U.forEach((u, k) => {
    const yg = new THREE.Group(); yg.position.set(u, BT.T, pathZ(u)); yg.rotation.y = -Math.atan(pathDZ(u)); beltG.add(yg);
    yg.add(flat(octShape(BT.SPW, BT.SPD, SOCT_C), BT.SPT, 2, [sideMats[k], sideEdge[k]]));
  });
  // its soft contact pool on the table
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(1060, 330), new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: softTex(), transparent: true, depthWrite: false, opacity: 0.2, toneMapped: false }));
  pool.rotation.x = -Math.PI / 2; pool.position.set(0, 0.3, -30); pool.renderOrder = 1.5;
  pool.userData.isFloor = true; pool.userData.noBounds = true;
  beltG.add(pool);

  root.add(makeFloor({ y: CG.floor, x0: -700, x1: 1800, z0: -1000, z1: 800, reflect: 0, shadow: 0.4, fadeC: [560, -80], fadeR: [980, 640] }));

  const DIM = new THREE.Color("#6E5A3C"), FULL = new THREE.Color("#FFFFFF");
  return {
    root,
    update: (p) => {
      turn.rotation.y = rad(p.yaw);
      const b = beltAt(T, p.f);
      beltG.visible = b.visible;
      beltG.position.set(CG.belt.x + b.dx, FY + b.h, CG.belt.z);
      beltG.rotation.y = b.spin;
      sideMats.forEach((m, k) => {
        const l = p.lit[k];
        m.color.copy(DIM).lerp(FULL, l);
        m.roughness = 0.6 - 0.34 * l;
        m.emissiveIntensity = 0.55 * p.flare[k];
        sideEdge[k].color.copy(DIM).lerp(new THREE.Color("#D9AF4C"), l);
      });
    },
  };
};
