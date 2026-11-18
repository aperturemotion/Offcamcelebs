// THE LED SHARE-PRICE BOARD — a black housing on two legs with a hooded dot-matrix display: every figure is made of lit
// dots over a field of unlit ones, the date under it. Origin: the middle of its feet, on the floor (y = 0).
import { THREE, mesh, paintTex, rr } from "../stage";
import { rbox, font, track } from "../kit029";
import { SM, C, halo, type Obj3 } from "../studio";

export type LedOpts = { key: string; w?: number; h?: number; legs?: number; title?: string };
/** value: the price shown (two decimals); date: the line under it; fall: 0 = khaki, 1 = red with a down mark; on: 0…1 */
export type LedP = { value: number; date: string; fall?: number; on?: number };

/** the dot grid of a string: which cells of a cols × rows matrix are lit (heavy Archivo, fitted to the matrix) */
const dotsOf = (text: string, cols: number, rows: number, weight = 800, mark = false) => {
  const c = document.createElement("canvas");
  const S = 4;
  c.width = cols * S; c.height = rows * S;
  const g = c.getContext("2d")!;
  g.fillStyle = "#fff"; g.textBaseline = "alphabetic"; g.textAlign = "center";
  let size = rows * S * 1.28;
  font(g, weight, size); track(g, size * 0.03);
  const mw = mark ? rows * S * 0.95 : 0;
  const tw = g.measureText(text).width + mw;
  // ★ the figure and its mark fit INSIDE the matrix with a cell of margin each side (measureText leaves out the last
  //   glyph's overhang: "$122.29" with the mark lost its last digit at the field's edge)
  const fit = c.width - 2 * S - size * 0.06;
  if (tw > fit) { size *= fit / tw; font(g, weight, size); track(g, size * 0.03); }
  const w2 = g.measureText(text).width, x0 = (c.width - (w2 + mw)) / 2;
  if (mark) { const a = rows * S * 0.62, mx = x0 + a * 0.5, my = c.height * 0.5; g.beginPath(); g.moveTo(mx - a / 2, my - a * 0.42); g.lineTo(mx + a / 2, my - a * 0.42); g.lineTo(mx, my + a * 0.46); g.closePath(); g.fill(); }
  g.fillText(text, x0 + mw + w2 / 2, c.height / 2 + size * 0.36);
  const px = g.getImageData(0, 0, c.width, c.height).data;
  const lit: boolean[] = [];
  for (let r = 0; r < rows; r++) for (let q = 0; q < cols; q++) {
    let a = 0;
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) a += px[((r * S + y) * c.width + q * S + x) * 4 + 3];
    lit.push(a / (S * S) > 110);
  }
  return lit;
};

export const makeLed = (o: LedOpts): Obj3<LedP> => {
  const w = o.w ?? 640, h = o.h ?? 300, legs = o.legs ?? 220, D = 54;
  const group = new THREE.Group();
  const cy = legs + h / 2;
  const house = rbox(w, h, D, 12, SM.black());
  house.position.set(0, cy, D / 2);
  const rim = rbox(w + 10, h + 10, D - 16, 14, SM.edge());
  rim.position.set(0, cy, D / 2 - 8);
  // the hood over the display, and the bezel round it
  const hood = rbox(w + 4, 12, 44, 4, SM.graphite());
  hood.position.set(0, legs + h + 2, D / 2 + 40);
  group.add(rim, house, hood);
  for (const s of [-1, 1]) {
    const leg = mesh(new THREE.CylinderGeometry(8, 8, legs, 20), SM.edge());
    leg.position.set(s * w * 0.34, legs / 2, 0);
    const collar = mesh(new THREE.CylinderGeometry(13, 13, 16, 20), SM.graphite());
    collar.position.set(s * w * 0.34, legs - 8, 0);
    const foot = rbox(96, 12, 190, 5, SM.graphite());
    foot.position.set(s * w * 0.34, 6, 95);
    const footEdge = rbox(98, 3, 4, 1.2, SM.edge(), 1);
    footEdge.position.set(s * w * 0.34, 10, 97);
    group.add(leg, collar, foot, footEdge);
    for (const v of [-1, 1]) {
      const bolt = mesh(new THREE.CylinderGeometry(5, 5, 4, 14), SM.edge());
      bolt.rotation.x = Math.PI / 2;
      bolt.position.set(s * (w / 2 - 16), cy + v * (h / 2 - 16), D / 2 + 1.5);
      group.add(bolt);
    }
  }
  const brace = mesh(new THREE.CylinderGeometry(4, 4, w * 0.68, 12), SM.graphite());
  brace.rotation.z = Math.PI / 2;
  brace.position.set(0, legs * 0.3, 0);
  group.add(brace);
  // the display: a matte window; the unlit matrix and the title on it (always there); the lit dots over it
  const fw = w - 64, fh = h - 56;
  const PITCH = Math.max(5, Math.round(fw / 92));
  const cols = Math.floor((fw - 28) / PITCH), rowsBig = Math.round((fh * 0.52) / PITCH);
  const titleH = fh * 0.17, bigY = titleH + fh * 0.04, smY = bigY + rowsBig * PITCH + fh * 0.045;
  const gx = (fw - cols * PITCH) / 2;
  const dot = (g: CanvasRenderingContext2D, q: number, r: number, y0: number) => { g.beginPath(); g.arc(gx + (q + 0.5) * PITCH, y0 + (r + 0.5) * PITCH, PITCH * 0.36, 0, Math.PI * 2); g.fill(); };
  const baseTex = paintTex(`led:${o.key}:base:${w}x${h}`, fw, fh, (g) => {
    g.fillStyle = "#050506"; rr(g, 0, 0, fw, fh, 6); g.fill();
    g.fillStyle = C.dim; g.textAlign = "center"; g.textBaseline = "alphabetic";
    font(g, 600, Math.round(titleH * 0.5)); track(g, titleH * 0.14);
    g.fillText(o.title ?? "SHARE PRICE", fw / 2, titleH * 0.78); track(g, 0);
    g.fillStyle = "#17171A";
    for (let r = 0; r < rowsBig; r++) for (let q = 0; q < cols; q++) dot(g, q, r, bigY);
  }, 3);
  const base = new THREE.Mesh(new THREE.PlaneGeometry(fw, fh), new THREE.MeshBasicMaterial({ map: baseTex, toneMapped: false }));
  base.position.set(0, cy, D / 2 + 0.8);
  const litM = new THREE.MeshBasicMaterial({ transparent: true, toneMapped: false, depthWrite: false });
  const lit = new THREE.Mesh(new THREE.PlaneGeometry(fw, fh), litM);
  lit.position.set(0, cy, D / 2 + 1.4);
  lit.userData.lit = true;
  group.add(base, lit);
  const air = halo(w * 1.5, h * 1.9, C.khaki, 0.2);
  air.position.set(0, cy, -40);
  const spill = halo(w * 1.3, 420, C.khaki, 0.14, true);
  spill.position.set(0, 1.2, 150);
  group.add(air, spill);
  const litTex = (v: string, date: string, red: boolean) => paintTex(`led:${o.key}:${w}x${h}:${v}:${date}:${red ? "r" : "k"}`, fw, fh, (g) => {
    const c = red ? C.red : C.khaki;
    const big = dotsOf(v, cols, rowsBig, 800, red);
    for (const pass of [0, 1]) {
      g.shadowColor = c; g.shadowBlur = pass ? 0 : PITCH * 2.2; g.fillStyle = pass ? (red ? "#FF8B8E" : "#F2E2A6") : c;
      const k = pass ? 0.62 : 1;
      for (let r = 0; r < rowsBig; r++) for (let q = 0; q < cols; q++) if (big[r * cols + q]) { g.beginPath(); g.arc(gx + (q + 0.5) * PITCH, bigY + (r + 0.5) * PITCH, PITCH * 0.38 * k, 0, Math.PI * 2); g.fill(); }
    }
    // the date: plain lit capitals under the matrix (five rows of dots cannot carry it)
    g.shadowBlur = 6; g.shadowColor = C.white; g.fillStyle = C.white; g.textAlign = "center"; g.textBaseline = "alphabetic";
    const dz = Math.round(fh * 0.125); font(g, 700, dz); track(g, dz * 0.16);
    g.fillText(date, fw / 2, smY + dz * 0.95); track(g, 0);
    g.shadowBlur = 0;
  }, 3);
  const update = (p: LedP) => {
    const red = (p.fall ?? 0) > 0.5, on = p.on ?? 1;
    litM.map = litTex("$" + p.value.toFixed(2), p.date, red);
    litM.opacity = on;
    for (const a of [air, spill]) { const am = a.material as THREE.MeshBasicMaterial; am.color.set(red ? C.red : C.khaki); am.opacity = (a === air ? 0.2 : 0.14) * on; }
  };
  update({ value: 0, date: "" });
  return { group, update };
};
