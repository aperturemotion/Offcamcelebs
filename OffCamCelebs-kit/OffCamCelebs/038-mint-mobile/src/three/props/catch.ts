// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE CATCH, IN 3-D (038) — "The catch? Reynolds wasn't the only owner. Reports put his stake at about a quarter, roughly
// $300 million." On the cream ground, a real CHERRY PIE on a round wooden serving board:
//   · the pie (a 9-inch double-crust pie, 2.5 px / mm): a flat bottom crust, sloped sides, a thumb-fluted crimped rim, a
//     domed top crust brushed with egg wash and sugar, five steam vents; it is cut into PIECES, each a real solid (its top
//     crust and rim swept from the pie's own profile, its flat bottom, and its two CUT FACES showing the layers: the bottom
//     crust, the glossy cherry filling with its fruit, the top crust). The pieces part by a knife's kerf (2.4 px) as they
//     are cut, so a piece never shares a face with its neighbour;
//   · a long SLICING KNIFE (a 12-inch slicer: a satin steel blade, a steel bolster, a black handle with three brass rivets)
//     that presses straight down through the pie along three diameters (its edge stops 0.3 px above the board) and is
//     declared to pierce the pie it cuts;
//   · a PIE SERVER (a stainless trowel blade, a cranked neck, a turned walnut handle) that slides in flat on the board under
//     one quarter (the quarter rides up onto the blade as it goes in: it tilts on its inner point, never sinking into the
//     steel) and lifts it out toward the camera;
//   · a PARTY PICK in that quarter: a turned wooden toothpick with a paper flag folded round it, printed on both sides
//     ("~25%" / "~$300M", each over "(REPORTED)"), that turns on its stick to show each side on its word.
// Units are the layer's px (y up). The floor at y 0 of `sc`; the board's top at BT.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, slabOf, imageOf, type Model } from "../stage";
import { M, rad, hash, col, rbox, fitFont, track } from "../kit029";

type Vec = [number, number, number];
// ══ THE PIE'S PROFILE (r, h): from the bottom's outer corner, up the side, over the crimped rim, across the domed top to the
//    centre. A 9-inch pie: 283 px to the rim's outer edge, 70 px to the rim's crest ══
const PROF: [number, number][] = [
  [258, 0], [259.6, 3.2], [261, 6], [265, 13], [270, 21], [275, 29], [279, 36], [282, 43], [283.5, 49], [283, 55], [280.5, 60.5],
  [276, 65], [270, 68.3], [263, 70], [256, 69.6], [249, 67.6], [243, 64.4], [238, 61.6], [232, 60.2],
  [215, 60.6], [190, 61.8], [160, 63.2], [125, 64.4], [90, 65.3], [55, 65.9], [25, 66.2], [0, 66.3],
];
export const PIE = { rb: 258, rim: 288, top: 73.2, hc: 66.3 } as const;
const BOARD = { r: 370, t: 28 } as const;
/** the board's top above the floor (it stands 0.3 px clear of it), and the pie's bottom */
export const BT = 0.3 + BOARD.t;
const PIE_Y = BT + 0.3;
const NF = 30;                                  // the crimp's flutes round the rim
const sstep = (a: number, b: number, x: number) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
/** a profile point, crimped at angle phi (the flutes only on the rim's crest and outer face, never at the bottom) */
const modAt = (r: number, h: number, phi: number): [number, number] => {
  const w = sstep(234, 252, r) * sstep(28, 46, h), c = Math.cos(NF * phi);
  return [r + 4.5 * c * w, h + 2.8 * c * w];
};
/** the top crust's height at radius r (unmodulated), for the cut face's layers */
const topAt = (r: number) => {
  for (let i = PROF.length - 1; i > 0; i--) {
    const [r0, h0] = PROF[i], [r1, h1] = PROF[i - 1];
    if (r >= r0 && r <= r1) return h0 + ((h1 - h0) * (r - r0)) / (r1 - r0 || 1);
    if (r1 < r0) break;
  }
  return 60;
};

// ══ TEXTURES (painted once) ══
const W2 = 600;   // the plan textures cover x, z in ±300
const crustTex = () => paintTex("catch-crust", W2, W2, (g) => {
  const C = W2 / 2;
  g.fillStyle = "#C98A42"; g.fillRect(0, 0, W2, W2);
  const rg = g.createRadialGradient(C, C, 0, C, C, 300);
  rg.addColorStop(0, "#DCA45C"); rg.addColorStop(0.5, "#D49849"); rg.addColorStop(0.76, "#C9883C"); rg.addColorStop(0.86, "#B8752F"); rg.addColorStop(0.95, "#A9662A"); rg.addColorStop(1, "#9E5F27");
  g.fillStyle = rg; g.fillRect(0, 0, W2, W2);
  // the bake's mottling: lighter and darker patches
  for (let i = 0; i < 900; i++) {
    const a = hash(i, 1, 3) * Math.PI * 2, r = 292 * Math.sqrt(hash(i, 2, 3)), x = C + r * Math.sin(a), y = C + r * Math.cos(a);
    const s = 5 + 30 * hash(i, 3, 3) ** 2, light = hash(i, 4, 3) > 0.48;
    const gr = g.createRadialGradient(x, y, 0, x, y, s);
    gr.addColorStop(0, light ? "rgba(242,200,126,0.30)" : "rgba(140,78,28,0.24)"); gr.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = gr; g.fillRect(x - s, y - s, 2 * s, 2 * s);
  }
  // the crimp: the flutes' crests bake browner than their hollows
  for (let k = 0; k < 720; k++) {
    const a = (k / 720) * Math.PI * 2, c = Math.cos(NF * a);
    if (c < 0.15) continue;
    g.strokeStyle = `rgba(120,62,20,${0.22 * c})`; g.lineWidth = 1.6;
    g.beginPath(); g.moveTo(C + 246 * Math.sin(a), C + 246 * Math.cos(a)); g.lineTo(C + 286 * Math.sin(a), C + 286 * Math.cos(a)); g.stroke();
  }
  // blistered flakes
  for (let i = 0; i < 420; i++) {
    const a = hash(i, 5, 3) * Math.PI * 2, r = 280 * Math.sqrt(hash(i, 6, 3)), x = C + r * Math.sin(a), y = C + r * Math.cos(a);
    g.fillStyle = `rgba(248,214,150,${0.22 + 0.25 * hash(i, 7, 3)})`;
    g.beginPath(); g.ellipse(x, y, 1.5 + 3 * hash(i, 8, 3), 1 + 2 * hash(i, 9, 3), hash(i, 10, 3) * 3, 0, Math.PI * 2); g.fill();
  }
  // five steam vents round the centre, the cherry juice dark in them, two that bubbled over
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2 + 0.31, cx = C + 82 * Math.sin(a), cy = C + 82 * Math.cos(a);
    g.save(); g.translate(cx, cy); g.rotate(-a);
    g.fillStyle = "rgba(250,214,148,0.5)"; g.beginPath(); g.ellipse(0, 0, 5.2, 25, 0, 0, Math.PI * 2); g.fill();
    g.fillStyle = "#4A0C11"; g.beginPath(); g.ellipse(0, 0, 2.8, 22, 0, 0, Math.PI * 2); g.fill();
    if (k === 1 || k === 3) { g.fillStyle = "rgba(108,18,24,0.75)"; g.beginPath(); g.ellipse(2, 16, 5, 8, 0.3, 0, Math.PI * 2); g.fill(); }
    g.restore();
  }
  // sugar crystals catching the light
  for (let i = 0; i < 2200; i++) {
    const a = hash(i, 11, 4) * Math.PI * 2, r = 290 * Math.sqrt(hash(i, 12, 4));
    g.fillStyle = `rgba(255,248,232,${0.35 + 0.55 * hash(i, 13, 4)})`;
    g.fillRect(C + r * Math.sin(a), C + r * Math.cos(a), 0.7 + 0.8 * hash(i, 14, 4), 0.7 + 0.8 * hash(i, 15, 4));
  }
}, 2);
const crustBump = () => paintTex("catch-crust-bump", W2, W2, (g) => {
  const C = W2 / 2;
  g.fillStyle = "#808080"; g.fillRect(0, 0, W2, W2);
  for (let i = 0; i < 1100; i++) {
    const a = hash(i, 21, 3) * Math.PI * 2, r = 292 * Math.sqrt(hash(i, 22, 3)), x = C + r * Math.sin(a), y = C + r * Math.cos(a);
    const s = 3 + 16 * hash(i, 23, 3) ** 2, v = hash(i, 24, 3) > 0.5 ? 175 : 85;
    const gr = g.createRadialGradient(x, y, 0, x, y, s);
    gr.addColorStop(0, `rgba(${v},${v},${v},0.6)`); gr.addColorStop(1, "rgba(128,128,128,0)");
    g.fillStyle = gr; g.fillRect(x - s, y - s, 2 * s, 2 * s);
  }
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2 + 0.31;
    g.save(); g.translate(C + 82 * Math.sin(a), C + 82 * Math.cos(a)); g.rotate(-a);
    g.fillStyle = "#1A1A1A"; g.beginPath(); g.ellipse(0, 0, 3.4, 23, 0, 0, Math.PI * 2); g.fill();
    g.restore();
  }
  for (let i = 0; i < 1400; i++) {
    const a = hash(i, 11, 4) * Math.PI * 2, r = 290 * Math.sqrt(hash(i, 12, 4));
    g.fillStyle = "#E8E8E8"; g.fillRect(C + r * Math.sin(a), C + r * Math.cos(a), 1, 1);
  }
}, 2);
/** the cut face, in (r, h): x = r (0…300), y = 80 − h */
const CUT_W = 300, CUT_H = 80;
const fillPath = (g: CanvasRenderingContext2D) => {
  g.beginPath();
  g.moveTo(0, CUT_H - 9);
  g.lineTo(247, CUT_H - 9);
  g.quadraticCurveTo(252, CUT_H - 20, 246, CUT_H - 40);
  g.quadraticCurveTo(242, CUT_H - 51, 234, CUT_H - (topAt(234) - 8.5));
  for (let r = 230; r >= 0; r -= 5) g.lineTo(r, CUT_H - (topAt(r) - 8.5 + 0.6 * Math.sin(r / 9)));
  g.closePath();
};
const cutTex = () => paintTex("catch-cut", CUT_W, CUT_H, (g) => {
  // the pastry: flaky golden layers
  g.fillStyle = "#E4BC7C"; g.fillRect(0, 0, CUT_W, CUT_H);
  for (let i = 0; i < 260; i++) {
    const y = hash(i, 31, 1) * CUT_H, x = hash(i, 32, 1) * CUT_W, l = 6 + 24 * hash(i, 33, 1);
    g.strokeStyle = hash(i, 34, 1) > 0.5 ? "rgba(250,222,170,0.55)" : "rgba(176,120,58,0.35)"; g.lineWidth = 0.5 + 0.7 * hash(i, 35, 1);
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + l, y + (hash(i, 36, 1) - 0.5) * 1.5); g.stroke();
  }
  // the top crust's baked top edge and the bottom's underside
  g.strokeStyle = "#B8752F"; g.lineWidth = 2.6;
  g.beginPath(); for (let r = 0; r <= 300; r += 3) { const h = r < 234 ? topAt(r) : 64; if (r === 0) g.moveTo(r, CUT_H - h + 1); else g.lineTo(r, CUT_H - h + 1); } g.stroke();
  g.fillStyle = "rgba(170,110,50,0.45)"; g.fillRect(0, CUT_H - 1.6, CUT_W, 1.6);
  // the filling: dark cherry, its fruit, and glossy juice
  g.save(); fillPath(g); g.clip();
  const fg = g.createLinearGradient(0, CUT_H - 60, 0, CUT_H - 9); fg.addColorStop(0, "#6A0F17"); fg.addColorStop(0.5, "#8A1820"); fg.addColorStop(1, "#73121A");
  g.fillStyle = fg; g.fillRect(0, 0, CUT_W, CUT_H);
  for (let i = 0; i < 46; i++) {
    const x = 6 + 240 * hash(i, 41, 2), y = CUT_H - 14 - 38 * hash(i, 42, 2), rx = 8 + 7 * hash(i, 43, 2), ry = 5.5 + 4.5 * hash(i, 44, 2);
    g.fillStyle = hash(i, 45, 2) > 0.4 ? "#4E0910" : "#5F0C14";
    g.beginPath(); g.ellipse(x, y, rx, ry, (hash(i, 46, 2) - 0.5) * 0.8, 0, Math.PI * 2); g.fill();
    g.strokeStyle = "rgba(255,120,120,0.28)"; g.lineWidth = 1.1;
    g.beginPath(); g.ellipse(x - rx * 0.2, y - ry * 0.25, rx * 0.6, ry * 0.5, 0, Math.PI * 1.1, Math.PI * 1.8); g.stroke();
  }
  for (let i = 0; i < 40; i++) {
    const x = 240 * hash(i, 51, 2), y = CUT_H - 12 - 40 * hash(i, 52, 2);
    g.fillStyle = `rgba(196,44,52,${0.25 + 0.25 * hash(i, 53, 2)})`;
    g.beginPath(); g.ellipse(x, y, 3 + 8 * hash(i, 54, 2), 1 + 1.5 * hash(i, 55, 2), 0, 0, Math.PI * 2); g.fill();
  }
  g.restore();
  // the juice soaks a little into the crust round the filling
  g.save(); g.strokeStyle = "rgba(120,30,30,0.35)"; g.lineWidth = 2.2; fillPath(g); g.stroke(); g.restore();
}, 4);
const cutRough = () => paintTex("catch-cut-rough", CUT_W, CUT_H, (g) => {
  g.fillStyle = "rgb(222,222,222)"; g.fillRect(0, 0, CUT_W, CUT_H);
  g.fillStyle = "rgb(64,64,64)"; fillPath(g); g.fill();
}, 2);
/** the board's top: acacia, its grain running across, oiled */
const BW = 760;
const woodTex = () => paintTex("catch-board", BW, BW, (g) => {
  const bg = g.createLinearGradient(0, 0, BW, BW); bg.addColorStop(0, "#A8703C"); bg.addColorStop(0.5, "#B47C45"); bg.addColorStop(1, "#9E6936");
  g.fillStyle = bg; g.fillRect(0, 0, BW, BW);
  // three planks glued edge to edge, each its own shade
  for (let p = 0; p < 4; p++) { g.fillStyle = `rgba(${p % 2 ? "70,40,15" : "235,190,130"},${0.06 + 0.05 * hash(p, 1, 9)})`; g.fillRect(0, p * 190, BW, 190); }
  for (let i = 0; i < 220; i++) {
    const y0 = hash(i, 61, 5) * BW, a = 2 + 6 * hash(i, 62, 5), p = hash(i, 63, 5) * 6.28, dark = hash(i, 64, 5) > 0.35;
    g.strokeStyle = dark ? `rgba(80,44,16,${0.12 + 0.22 * hash(i, 65, 5)})` : `rgba(230,182,120,${0.08 + 0.12 * hash(i, 65, 5)})`;
    g.lineWidth = 0.6 + 2 * hash(i, 66, 5);
    g.beginPath();
    for (let x = 0; x <= BW; x += 10) { const y = y0 + a * Math.sin(x / 110 + p) + 2.2 * Math.sin(x / 29 + p * 2); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); }
    g.stroke();
  }
  for (let p = 1; p < 4; p++) { g.strokeStyle = "rgba(60,32,12,0.35)"; g.lineWidth = 1.2; g.beginPath(); g.moveTo(0, p * 190); g.lineTo(BW, p * 190 + 1.5); g.stroke(); }
  for (let i = 0; i < 1600; i++) { g.fillStyle = "rgba(50,26,8,0.25)"; g.fillRect(hash(i, 67, 6) * BW, hash(i, 68, 6) * BW, 1.5 + 3 * hash(i, 69, 6), 0.7); }
  // a few faint knife marks from use
  for (let i = 0; i < 14; i++) {
    const x = 80 + 600 * hash(i, 71, 6), y = 80 + 600 * hash(i, 72, 6), a = hash(i, 73, 6) * 3.1, l = 20 + 60 * hash(i, 74, 6);
    g.strokeStyle = "rgba(240,205,160,0.22)"; g.lineWidth = 0.8;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + l * Math.cos(a), y + l * Math.sin(a)); g.stroke();
  }
}, 1.5);
/** a side of the flag: his photo in a printed round frame (it marks HIS quarter), then the figure over "(REPORTED)", dark
 *  ink on white paper (side B is painted mirrored: it is read from behind the sheet). The photo: assets/reynolds_face.png
 *  (Gage Skidmore, CC BY-SA 3.0; assets/brand/SOURCES.txt) */
export const FLAG = { w: 188, h: 92 } as const;
const PHOTO = "assets/reynolds_face.png";
const flagTex = (key: string, fig: string, mirror: boolean) => paintTex(key, FLAG.w, FLAG.h, (g) => {
  g.fillStyle = "#FBF8F1"; g.fillRect(0, 0, FLAG.w, FLAG.h);
  if (mirror) { g.translate(FLAG.w, 0); g.scale(-1, 1); }
  // the photo, printed in a circle near the stick (the flag's glued edge is on the left of side A, the right of side B as
  // it is read: either way the photo sits by the stick)
  const R = 28, cx = (mirror ? FLAG.w - 13 - R : 13 + R), cy = FLAG.h / 2;
  const im = imageOf(PHOTO);
  g.save(); g.beginPath(); g.arc(cx, cy, R, 0, Math.PI * 2); g.clip();
  g.fillStyle = "#D8CFC4"; g.fillRect(cx - R, cy - R, 2 * R, 2 * R);
  if (im.complete && im.naturalWidth > 0) g.drawImage(im, cx - R, cy - R, 2 * R, 2 * R);
  g.restore();
  g.strokeStyle = "#2A1B15"; g.lineWidth = 1.6; g.beginPath(); g.arc(cx, cy, R + 0.8, 0, Math.PI * 2); g.stroke();
  // the figure and its label, in the rest of the flag
  const x0 = mirror ? 8 : 13 + 2 * R + 8, x1 = mirror ? FLAG.w - 13 - 2 * R - 8 : FLAG.w - 8, mid = (x0 + x1) / 2, tw = x1 - x0;
  g.fillStyle = "#2A1B15"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, -0.8); fitFont(g, 800, 44, fig, tw); g.fillText(fig, mid, 50);
  track(g, 1.2); fitFont(g, 600, 14, "(REPORTED)", tw - 4); g.fillText("(REPORTED)", mid, 74);
  g.fillStyle = "rgba(42,27,21,0.5)"; g.fillRect(x0 + 4, 59, tw - 8, 1.1);
}, 4);

// ══ A PIECE OF PIE between angles a0 and a1 (rad; 0 points at the camera, +x is +π/2) ══
type Mats = { crust: THREE.Material; bottom: THREE.Material; cut: THREE.Material };
export const pieceOf = (a0: number, a1: number, mats: Mats, name: string) => {
  const grp = new THREE.Group();
  grp.userData.obj = name;
  const full = a1 - a0 >= Math.PI * 2 - 1e-6;
  const m = Math.max(8, Math.ceil(((a1 - a0) * 180) / Math.PI / 1.25));
  const n = PROF.length;
  // the crust's surface: the profile swept round, crimped
  const pos: number[] = [], uv: number[] = [], idx: number[] = [];
  for (let j = 0; j <= m; j++) {
    const phi = a0 + ((a1 - a0) * j) / m;
    for (let i = 0; i < n; i++) {
      const [r, h] = modAt(PROF[i][0], PROF[i][1], phi);
      const x = r * Math.sin(phi), z = r * Math.cos(phi);
      pos.push(x, h, z); uv.push(x / W2 + 0.5, 0.5 - z / W2);
    }
  }
  const V = (i: number, j: number) => j * n + i;
  // which winding faces out: test a quad on the top (it must face up)
  const vec = (k: number) => new THREE.Vector3(pos[3 * k], pos[3 * k + 1], pos[3 * k + 2]);
  const tA = vec(V(n - 4, 0)), tB = vec(V(n - 3, 0)), tC = vec(V(n - 4, 1));
  const up = new THREE.Vector3().subVectors(tB, tA).cross(new THREE.Vector3().subVectors(tC, tA)).y > 0;
  for (let j = 0; j < m; j++) for (let i = 0; i < n - 1; i++) {
    const a = V(i, j), b = V(i + 1, j), c = V(i + 1, j + 1), d = V(i, j + 1);
    // ★ the last row is the centre (r 0): its two vertices coincide, so that quad is ONE triangle (a zero-area one reads to
    //   three-mesh-bvh as crossing everything at the axis: the neighbouring pieces "crossed" at the pie's centre)
    const apex = i + 1 === n - 1;
    if (up) { idx.push(a, b, d); if (!apex) idx.push(b, c, d); } else { idx.push(a, d, b); if (!apex) idx.push(b, d, c); }
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  sg.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  sg.setIndex(idx); sg.computeVertexNormals();
  grp.add(mesh(sg, mats.crust));
  // the flat bottom crust: a fan, facing down
  const bp: number[] = [0, 0, 0], bu: number[] = [0.5, 0.5], bi: number[] = [];
  for (let j = 0; j <= m; j++) { const phi = a0 + ((a1 - a0) * j) / m, x = PIE.rb * Math.sin(phi), z = PIE.rb * Math.cos(phi); bp.push(x, 0, z); bu.push(x / W2 + 0.5, 0.5 - z / W2); }
  for (let j = 0; j < m; j++) bi.push(0, j + 1, j + 2);
  const bg = new THREE.BufferGeometry();
  bg.setAttribute("position", new THREE.Float32BufferAttribute(bp, 3));
  bg.setAttribute("uv", new THREE.Float32BufferAttribute(bu, 2));
  bg.setIndex(bi); bg.computeVertexNormals();
  if ((bg.attributes.normal as THREE.BufferAttribute).getY(1) > 0) { bg.setIndex(bi.map((_, k) => bi[k - (k % 3) + [0, 2, 1][k % 3]])); bg.computeVertexNormals(); }
  grp.add(mesh(bg, mats.bottom));
  // the two cut faces: the profile at the cut's angle, closed down the axis
  if (!full) for (const [phi, sgn] of [[a0, -1], [a1, 1]] as const) {
    const pts2 = [new THREE.Vector2(0, 0), ...PROF.map(([r, h]) => { const [rr, hh] = modAt(r, h, phi); return new THREE.Vector2(rr, hh); })];
    pts2.pop(); pts2.push(new THREE.Vector2(0, PIE.hc));
    const tri = THREE.ShapeUtils.triangulateShape(pts2, []);
    const cp: number[] = [], cu: number[] = [], ci: number[] = [];
    for (const p of pts2) { cp.push(p.x * Math.sin(phi), p.y, p.x * Math.cos(phi)); cu.push(p.x / CUT_W, p.y / CUT_H); }
    // outward: toward decreasing angle at a0, increasing at a1
    const out = new THREE.Vector3(Math.cos(phi), 0, -Math.sin(phi)).multiplyScalar(sgn);
    for (const [a, b, c] of tri) {
      const A = new THREE.Vector3(cp[3 * a], cp[3 * a + 1], cp[3 * a + 2]), B = new THREE.Vector3(cp[3 * b], cp[3 * b + 1], cp[3 * b + 2]), Cc = new THREE.Vector3(cp[3 * c], cp[3 * c + 1], cp[3 * c + 2]);
      const nn = new THREE.Vector3().subVectors(B, A).cross(new THREE.Vector3().subVectors(Cc, A));
      if (nn.dot(out) >= 0) ci.push(a, b, c); else ci.push(a, c, b);
    }
    const cg = new THREE.BufferGeometry();
    cg.setAttribute("position", new THREE.Float32BufferAttribute(cp, 3));
    cg.setAttribute("uv", new THREE.Float32BufferAttribute(cu, 2));
    cg.setIndex(ci); cg.computeVertexNormals();
    grp.add(mesh(cg, mats.cut));
  }
  // ★ the knife's kerf: each piece stands back from its cuts by 1.2 px (along its own bisector)
  const half = (a1 - a0) / 2, mid = (a0 + a1) / 2;
  const d = full ? 0 : 1.2 / Math.sin(Math.min(half, Math.PI / 2));
  grp.userData.kerf = new THREE.Vector3(d * Math.sin(mid), 0, d * Math.cos(mid));
  grp.position.copy(grp.userData.kerf);
  return grp;
};

// ══ THE PIECES AS THE KNIFE CUTS (degrees; 0 at the camera). His quarter is [−45, 45]. ══
const D = (a: number) => rad(a);
export const STAGES: [number, number][][] = [
  [[0, 360]],
  [[-90, 90], [90, 270]],
  [[-90, 45], [45, 90], [90, 225], [225, 270]],
  [[-90, -45], [-45, 45], [45, 90], [90, 135], [135, 225], [225, 270]],
];
const pname = ([a, b]: [number, number]) => `pie${a}_${b}`;
export const PIE_NAMES = [...new Set(STAGES.flat().map(pname))];
export const HIS = pname([-45, 45]);
/** the knife's cuts: blade direction (deg) for each press (a diameter, through the pie's centre) */
export const CUTS = [90, 45, 135] as const;

// ══ THE KNIFE: a 12-inch slicer. Local x along the blade (heel 0 → tip 722), y up from the edge ══
export const KN = { len: 722, mid: 300, spine: 74 } as const;
const knifeModel = () => {
  const k = new THREE.Group(); k.userData.obj = "knife"; k.userData.pierces = PIE_NAMES;
  const s = new THREE.Shape();
  s.moveTo(0, 0); s.lineTo(600, 0); s.quadraticCurveTo(690, 2, KN.len, 48); s.quadraticCurveTo(704, 58, 640, 64.5); s.lineTo(10, KN.spine);
  s.quadraticCurveTo(0, KN.spine, 0, KN.spine - 10); s.closePath();
  const blade = mesh(slabOf(s, 2.6, 0.9, 24), M.steel("#D3D8DD"));
  // slabOf's UVs span the shape's box; the blade is plain satin steel: no map
  blade.position.z = 1.3;
  k.add(blade);
  const bolster = rbox(15, 74, 10, 3.5, M.steel("#C4C9CF"), 3); bolster.position.set(-7.5, 41, 5); k.add(bolster);   // its foot 4 px over the edge: it never meets the board
  const pom = M.satin("#1C1816", 0.42);
  const handle = rbox(262, 50, 22, 11, pom, 4); handle.position.set(-15 - 131, 40, 11); k.add(handle);
  const brass = M.gold("#C99A3E");
  for (const x of [-50, -142, -234]) { const rv = mesh(new THREE.CylinderGeometry(5.2, 5.2, 22.8, 24).rotateX(Math.PI / 2), brass); rv.position.set(x, 40, 0); k.add(rv); }
  return k;
};

// ══ THE PIE SERVER: local origin at the blade's tip, on its underside; the blade runs back along +z to its base at 270, then
//    the cranked neck rises to the handle ══
export const SV = { len: 270, w: 160, t: 2.4 } as const;
const SV_NECK = { y: 1.9, z: SV.len - 6, a: rad(38), len: 66 } as const;
const SV_TOP: Vec = [0, SV_NECK.y + SV_NECK.len * Math.sin(SV_NECK.a), SV_NECK.z + SV_NECK.len * Math.cos(SV_NECK.a)];
/** the handle's far end (server frame): the rise of 6° over its 320 px */
export const SV_END: Vec = [0, SV_TOP[1] + 320 * Math.sin(rad(6)), SV_TOP[2] + 320 * Math.cos(rad(6))];
const serverModel = () => {
  const s = new THREE.Group(); s.userData.obj = "server";
  const steel = M.steel("#D6DADF");
  // the trowel blade, its outline in (x, −z): a rounded point widening to 160, straight sides, shoulders into the neck
  const sh = new THREE.Shape();
  sh.moveTo(0, 0);
  sh.quadraticCurveTo(9, -1.5, 13, -10);
  sh.lineTo(SV.w / 2, -205); sh.quadraticCurveTo(SV.w / 2 + 1, -216, SV.w / 2 - 6, -232);
  sh.quadraticCurveTo(40, -SV.len + 8, 14, -SV.len); sh.lineTo(-14, -SV.len);
  sh.quadraticCurveTo(-40, -SV.len + 8, -SV.w / 2 + 6, -232); sh.quadraticCurveTo(-SV.w / 2 - 1, -216, -SV.w / 2, -205);
  sh.lineTo(-13, -10); sh.quadraticCurveTo(-9, -1.5, 0, 0);
  const bg = slabOf(sh, SV.t, 0.7, 24);
  bg.rotateX(-Math.PI / 2);         // the shape's y → −z… (y' = z, z' = −y): its face up, its depth down
  bg.translate(0, SV.t, 0);
  const blade = mesh(bg, steel); s.add(blade);
  // the neck: a flat bar cranked up from the blade's base to the handle (rbox's depth turned to run FORWARD, +z)
  const neckG = new THREE.Group(); neckG.position.set(0, SV_NECK.y, SV_NECK.z); neckG.rotation.x = -SV_NECK.a;
  const bar = rbox(26, 3.2, SV_NECK.len, 1.4, steel, 2); bar.rotation.y = Math.PI;
  neckG.add(bar); s.add(neckG);
  const top = new THREE.Vector3(0, SV_TOP[1], SV_TOP[2]);
  // the ferrule and the turned walnut handle, rising 6°
  const hg = new THREE.Group(); hg.position.copy(top); hg.rotation.x = -rad(6); s.add(hg);
  const ferr = mesh(lathe([[8, 0], [10.5, 2], [11, 14], [12.5, 18], [12.5, 26]], 48).rotateX(Math.PI / 2), steel); ferr.position.z = -6; hg.add(ferr);
  const HL = 300;
  const wood = M.satin("#4A2E1E", 0.38);
  const hp: [number, number][] = [[12.5, 0], [13.5, 10], [14.5, 60], [15.5, 160], [16, 250], [15, 280], [12, 293], [6, HL - 1], [0.5, HL]];
  const handle = mesh(lathe(hp, 48).rotateX(Math.PI / 2), wood); handle.position.z = 20; hg.add(handle);
  const cap = mesh(new THREE.CircleGeometry(12.5, 48), wood); cap.position.z = 20; cap.rotation.y = Math.PI; hg.add(cap);
  return s;
};

// ══ THE PARTY PICK: a turned toothpick and a paper flag glued round it by a 7-px tab. ★ The flag starts FURLED (rolled up
//    tight from its free end, as party flags come): nothing to read and no broad shadow; on its word it unrolls flat ══
export const PICK = { at: 150, len: 172, foot: 22 } as const;
export const PICK_TOP = PICK.foot + PICK.len;
const TAB = 7, SLEEVE = 3.4, NU = 72, NV = 8;
/** the flag's surface at unfurl k (0 rolled … 1 flat): s along its width from the sleeve, y up its height; the flat run out
 *  to s_f, then the rest rolled back (−z) on a tightening spiral */
const flagPoint = (k: number, s: number, y: number): Vec => {
  const sf = TAB + (FLAG.w - TAB) * k;
  const bow = 1.4 * Math.sin((Math.PI * Math.min(s, sf)) / FLAG.w) * k;
  if (s <= sf) return [SLEEVE + s, y, bow];
  const r0 = 6.2, psi = (s - sf) / r0;
  const r = Math.max(2.2, r0 - (1.1 * psi) / (2 * Math.PI));
  return [SLEEVE + sf + r * Math.sin(psi), y, bow - r0 + r * Math.cos(psi)];
};
const pickModel = () => {
  const p = new THREE.Group(); p.userData.obj = "pick"; p.userData.pierces = PIE_NAMES;
  const birch = M.satin("#E3C99A", 0.6);
  const stick = mesh(lathe([[0.3, 0], [1.2, 6], [2.6, 18], [2.7, PICK.len - 18], [1.2, PICK.len - 6], [0.3, PICK.len]], 20), birch);
  stick.position.y = PICK.foot; p.add(stick);
  const fr = new THREE.Group(); fr.position.y = PICK_TOP - 10 - FLAG.h / 2; p.add(fr);
  const paperM = M.paper("#FBF8F1");
  const sleeve = mesh(new THREE.CylinderGeometry(SLEEVE, SLEEVE, FLAG.h, 24, 1, true), paperM); fr.add(sleeve);
  const faceA = M.print(flagTex("catch-flagA", "~25%", false), 0.85), faceB = M.print(flagTex("catch-flagB", "~$300M", true), 0.85);
  faceB.side = THREE.BackSide;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array((NU + 1) * (NV + 1) * 3), uv: number[] = [], idx: number[] = [];
  for (let j = 0; j <= NV; j++) for (let i = 0; i <= NU; i++) uv.push(i / NU, j / NV);
  for (let j = 0; j < NV; j++) for (let i = 0; i < NU; i++) { const a = j * (NU + 1) + i, b = a + 1, c = a + NU + 2, d = a + NU + 1; idx.push(a, b, c, a, c, d); }
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  let last = -1;
  const shape = (k: number) => {
    if (Math.abs(k - last) < 1e-4) return;
    last = k;
    for (let j = 0; j <= NV; j++) for (let i = 0; i <= NU; i++) {
      const q = flagPoint(k, (FLAG.w * i) / NU, -FLAG.h / 2 + (FLAG.h * j) / NV), o = 3 * (j * (NU + 1) + i);
      pos[o] = q[0]; pos[o + 1] = q[1]; pos[o + 2] = q[2];
    }
    geo.attributes.position.needsUpdate = true; geo.computeVertexNormals(); geo.computeBoundingBox(); geo.computeBoundingSphere();
  };
  shape(0);
  fr.add(mesh(geo, faceA), mesh(geo, faceB));
  p.userData.flag = fr;
  p.userData.shape = shape;
  return p;
};

// ══ THE PLACE ══
export type CatchGeo = { floor: number; cx: number; z: number };
/** stage: which cuts are made (0–3); knife: its pose (on the pie's centre: blade direction deg, its edge's height above the
 *  board, its slide along its own axis, px); srv: the server's tip (x, z) and lift above the board, its yaw (deg); tilt: his
 *  quarter's lift a (px) and tilt b (rise per px along its bisector) as it rides onto the blade; lift: 0…1 the lift out;
 *  flag: the flag's turn (deg; 0 side A to the camera, 180 side B); unfurl: 0 rolled … 1 flat; yaw: the place's turn (deg) */
export type CatchP = {
  stage: number;
  knife: { on: boolean; dir: number; y: number; s: number };
  srv: { on: boolean; x: number; z: number; y: number; yaw: number };
  tilt: { a: number; b: number };
  lift: { t: Vec; r: number; p: Vec };
  flag: number; unfurl: number; yaw: number;
};

export const catchModel = (g: CatchGeo) => (): Model<CatchP> => {
  const root = new THREE.Group();
  const sc = new THREE.Group(); sc.position.set(g.cx, -g.floor, g.z); root.add(sc);

  // ── the board: a round acacia serving board, its edge turned round ──
  const board = new THREE.Group(); board.userData.obj = "board"; board.position.y = 0.3; sc.add(board);
  const wt = woodTex();
  const wtop = new THREE.MeshPhysicalMaterial({ map: wt, roughness: 0.5, clearcoat: 0.2, clearcoatRoughness: 0.5, envMapIntensity: 0.45 });
  const wside = new THREE.MeshPhysicalMaterial({ color: col("#9C6635"), roughness: 0.55, clearcoat: 0.15, envMapIntensity: 0.4 });
  const R = BOARD.r, T = BOARD.t;
  board.add(mesh(lathe([[R - 8, 0], [R - 3, 0.8], [R - 0.6, 4], [R, 8], [R, T - 8], [R - 0.6, T - 4], [R - 3, T - 0.8], [R - 8, T]], 128), wside));
  const btop = new THREE.CircleGeometry(R - 8, 128).rotateX(-Math.PI / 2).translate(0, T, 0);
  const bu = btop.attributes.uv as THREE.BufferAttribute, bpp = btop.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < bu.count; i++) bu.setXY(i, bpp.getX(i) / BW + 0.5, 0.5 - bpp.getZ(i) / BW);
  board.add(mesh(btop, wtop));
  board.add(mesh(new THREE.CircleGeometry(R - 8, 128).rotateX(Math.PI / 2), wside));

  // ── the pie ──
  const pieG = new THREE.Group(); pieG.position.y = PIE_Y; sc.add(pieG);
  const ct = crustTex();
  const mats: Mats = {
    crust: new THREE.MeshPhysicalMaterial({ map: ct, bumpMap: crustBump(), bumpScale: 1.1, roughness: 0.56, clearcoat: 0.32, clearcoatRoughness: 0.42,
      sheen: 0.3, sheenColor: col("#F6D49A"), envMapIntensity: 0.5 }),
    bottom: new THREE.MeshStandardMaterial({ color: col("#D9AC6A"), roughness: 0.8, envMapIntensity: 0.35 }),
    cut: new THREE.MeshPhysicalMaterial({ map: cutTex(), roughnessMap: cutRough(), roughness: 1, clearcoat: 0.25, clearcoatRoughness: 0.35, envMapIntensity: 0.55, side: THREE.DoubleSide }),
  };
  const pieces = new Map<string, THREE.Group>();
  for (const st of STAGES) for (const pc of st) {
    const nm = pname(pc);
    if (pieces.has(nm)) continue;
    const grp = pieceOf(D(pc[0]), D(pc[1]), mats, nm);
    pieces.set(nm, grp); pieG.add(grp);
  }
  // his quarter rides inside a LIFT group (pivoting where the server is held) with the server and the pick
  const liftG = new THREE.Group(); pieG.add(liftG);
  const liftIn = new THREE.Group(); liftG.add(liftIn);
  const his = pieces.get(HIS)!;
  pieG.remove(his); liftIn.add(his);
  const hisPose = new THREE.Group(); his.add(hisPose);   // (the pick is placed in his frame)
  const pick = pickModel();
  pick.position.set(0, 0, PICK.at);
  liftIn.add(pick);

  // ── the knife ──
  const knifeY = new THREE.Group(); pieG.add(knifeY);
  const knifeS = new THREE.Group(); knifeY.add(knifeS);
  const knife = knifeModel(); knife.position.x = -KN.mid; knifeS.add(knife);

  // ── the server ──
  const srvG = new THREE.Group(); liftIn.add(srvG);
  const server = serverModel(); srvG.add(server);

  // ── the floor ──
  root.add(makeFloor({ y: g.floor, x0: g.cx - 1000, x1: g.cx + 1000, z0: g.z - 900, z1: g.z + 900, reflect: 0, shadow: 0.4,
    fadeC: [g.cx, g.z], fadeR: [760, 620], blobs: [{ x: g.cx, z: g.z, w: 820, d: 760, a: 0.2 }] }));

  const tmpQ = new THREE.Quaternion();
  return {
    root,
    update: (p) => {
      sc.rotation.y = rad(p.yaw);
      const live = new Set(STAGES[p.stage].map(pname));
      for (const [nm, grp] of pieces) grp.visible = live.has(nm);
      // the pick stands in his quarter (or in the piece that holds it yet: within its kerf)
      // his quarter's ride onto the blade: lifted a, tilted on its inner point by atan(b) (its outer side up)
      his.position.copy(his.userData.kerf as THREE.Vector3).add(new THREE.Vector3(0, p.tilt.a, 0));
      his.rotation.x = -Math.atan(p.tilt.b);
      his.updateMatrix();
      // the pick follows his quarter's pose (its foot in the filling at PICK.at along the bisector)
      const pp = new THREE.Vector3(0, 0, PICK.at).applyMatrix4(his.matrix);
      pick.position.copy(pp); pick.quaternion.copy(his.quaternion);
      (pick.userData.flag as THREE.Group).rotation.y = rad(p.flag);
      (pick.userData.shape as (k: number) => void)(p.unfurl);
      // the lift: rotate about the pivot p by r (deg, about x: his point rises), then translate t
      liftG.position.set(p.lift.p[0] + p.lift.t[0], p.lift.p[1] + p.lift.t[1], p.lift.p[2] + p.lift.t[2]);
      liftG.rotation.x = rad(p.lift.r);
      liftIn.position.set(-p.lift.p[0], -p.lift.p[1], -p.lift.p[2]);
      // the knife
      knifeY.visible = p.knife.on;
      knifeY.position.set(0, -PIE_Y + BT + 0.3 + p.knife.y, 0);
      knifeY.rotation.y = rad(p.knife.dir - 90);
      knifeS.position.set(-p.knife.s, 0, 0);
      // the server (its tip's underside at (x, BT + 0.3 + y, z) in the pie's frame)
      srvG.visible = p.srv.on;
      srvG.position.set(p.srv.x, -PIE_Y + BT + 0.3 + p.srv.y, p.srv.z);
      srvG.rotation.y = rad(p.srv.yaw);
      void tmpQ; void hisPose;
    },
  };
};

// ══ POSES, PURE (the set's checks use them: the same transforms as the model's update) ══
const M4 = () => new THREE.Matrix4();
const T4 = (x: number, y: number, z: number) => M4().makeTranslation(x, y, z);
const Ry4 = (a: number) => M4().makeRotationY(a), Rx4 = (a: number) => M4().makeRotationX(a);
const hisKerf = () => { const d = 1.2 / Math.sin(Math.PI / 4); return new THREE.Vector3(0, 0, d); };
/** the frames of the place's moving parts, in the root's (layer) coordinates */
export const frames = (g: CatchGeo, p: CatchP) => {
  const sc = T4(g.cx, -g.floor, g.z).multiply(Ry4(rad(p.yaw)));
  const pie = sc.clone().multiply(T4(0, PIE_Y, 0));
  const lift = T4(p.lift.p[0] + p.lift.t[0], p.lift.p[1] + p.lift.t[1], p.lift.p[2] + p.lift.t[2]).multiply(Rx4(rad(p.lift.r))).multiply(T4(-p.lift.p[0], -p.lift.p[1], -p.lift.p[2]));
  const k = hisKerf();
  const his = pie.clone().multiply(lift).multiply(T4(k.x, k.y + p.tilt.a, k.z)).multiply(Rx4(-Math.atan(p.tilt.b)));
  const pick = his.clone().multiply(T4(0, 0, PICK.at));
  const flag = pick.clone().multiply(T4(0, PICK_TOP - 10 - FLAG.h / 2, 0)).multiply(Ry4(rad(p.flag)));
  const server = pie.clone().multiply(lift).multiply(T4(p.srv.x, p.srv.y, p.srv.z)).multiply(Ry4(rad(p.srv.yaw)));
  const knife = pie.clone().multiply(T4(0, p.knife.y, 0)).multiply(Ry4(rad(p.knife.dir - 90))).multiply(T4(-p.knife.s - KN.mid, 0, 0));
  return { sc, pie, his, pick, flag, server, knife };
};
/** a point of a frame, as world [x, y, z] (y up) */
export const at = (m: THREE.Matrix4, x: number, y: number, z: number): Vec => { const v = new THREE.Vector3(x, y, z).applyMatrix4(m); return [v.x, v.y, v.z]; };
