// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE WITHHOLDING IN 3-D — "Then the taxes. The IRS withholds 24 percent. New Jersey withholds 8. That leaves about 247
// million on payout day." On the cream ground, a heavy cast-iron LEVER GUILLOTINE (a stack cutter, after the Challenge
// "Advance" and Chandler & Price hand-lever cutters: a cast frame on feet, a machined table, two housings carrying the knife
// bar in gibbed slots, a crosshead with the CLAMP's hand wheel on top, a long cast LEVER with a counterweight ball pulling the
// knife bar down through a link, and a BACK GAUGE driven by a hand wheel at the end of the bed, its index running along a
// brass rule on the table's front edge).
//   · On the bed lies the cash: a slab of strapped $100 bundles (cash.ts: the real notes, their textures, edges and straps),
//     two bundles long and three high, squared against the fence.
//   · The rule reads 0 … 100 across the slab's own length from where the gauge starts; the gauge's index travels 24 of it,
//     then 8 more. Every cut is exactly that share of the slab's length (asserted below).
//   · The knife is a real single-bevel knife: its flat face toward the clamp, its bevel pushing the cut-off clear of it as it
//     passes; the cut-off, no longer held by anything, falls off the bed's edge under gravity, lands and settles.
// The cut column's bundles are built here as SLICES of a cash.ts bundle (the same textures, the same strap, the same puff and
// side steps), so the knife really cuts through notes; the other column is cash.ts `bundle()` itself.
// ★ No label: the rule's graduations are the machine's own working marking.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, roundRect, type Model } from "../stage";
import { M, rbox, font, fitFont, col, hash } from "../kit029";
import { bundle, BUNDLE_H, NOTE } from "../cash";

export type CutGeo = { floor: number; xk: number; z: number };
/** gx: the gauge's travel (px, + toward the knife); clamp 0 up … 1 down; theta: the lever's angle (rad, + up);
 *  pieces: each cut-off's pose (A = the 24 %, B = the 8 %) — push per layer, fall, tilt, and whether it has been released */
export type PieceP = { push: number[]; drop: number; tilt: number; free: boolean };
export type CutP = { gx: number; clamp: number; theta: number; slab: number; A: PieceP; B: PieceP; yaw: number };

// ── the cash slab (slab-local s along x from its left end; layers up) ──
export const BH = BUNDLE_H;
const LAYERS = 3;
export const SLAB_H = LAYERS * (BH + 0.3) - 0.3;
const COL_GAP = 2.4;
const RC = NOTE.W + COL_GAP + NOTE.W / 2;           // the right column's centre (s)
export const SLAB_L = 2 * NOTE.W + COL_GAP;         // ≈ 482.4
export const CUT1 = SLAB_L * (1 - 0.24);            // the first cut, 24 % of the slab's length from its right end
export const CUT2 = SLAB_L * (1 - 0.32);            // the second, 8 % more
{
  const a = (SLAB_L - CUT1) / SLAB_L, b = (CUT1 - CUT2) / SLAB_L, c = CUT2 / SLAB_L;
  if (Math.abs(a - 0.24) > 1e-9 || Math.abs(b - 0.08) > 1e-9 || Math.abs(c - 0.68) > 1e-9) throw new Error("withhold: the cuts are not 24 / 8 / 68 %");
}

// ── the machine (machine-local: x from the knife's flat face, + toward the cut-off; y up from the floor; z toward the eye) ──
export const TT = 100;                               // the table's top
const KT = 9, KH = 72, BEV = 16, BAR_H = 30;         // the knife: thickness, height, bevel; the knife bar above it
export const E_UP = TT + 0.3 + SLAB_H + 18;          // the knife's edge, raised
export const E_DN = TT - 4;                          // … at the bottom of its stroke (it shears past the bed's edge)
const HX0 = -24, HX1 = 30, HZ0 = 72, HZ1 = 106;      // the housings
const CH0 = E_UP + KH + BAR_H + 6, CH1 = CH0 + 28;   // the crosshead
const XC0 = -52, XC1 = 40;                           // … its ends
const CL_X0 = -40, CL_X1 = -4, CL_Z = 66, CL_H = 22; // the clamp bar
const CL_DN = TT + 0.3 + SLAB_H + 0.3, CL_UP = CL_DN + 16;
const SCREW = { x: -22, r: 6, hole: 6.8 };
const PIV = { z: -96, y: CH1 + 24 };                 // the lever's pivot
const LV_X0 = 60.4, LV_X1 = 74;                      // the lever's faces
const LK_X0 = 52.4, LK_X1 = 60;                      // the link's faces
const PIN_R = 130, ZL = 25, LUG_DY = KH + BAR_H - 10; // the lever's pin radius; the lug pin's z and height over the edge
const LV_LEN = 340, LV_TAIL = 95;
export const TH_UP = (20 * Math.PI) / 180;
const pinAt = (th: number) => ({ z: PIV.z + PIN_R * Math.cos(th), y: PIV.y + PIN_R * Math.sin(th) });
const LK = (() => { const p = pinAt(TH_UP); return Math.hypot(p.z - ZL, p.y - (E_UP + LUG_DY)); })();
/** the knife's edge height for a lever angle (the link keeps its length) */
export const edgeAt = (th: number) => { const p = pinAt(th); return p.y - Math.sqrt(LK * LK - (p.z - ZL) ** 2) - LUG_DY; };
export const TH_DN = (() => { let a = -0.6, b = TH_UP; for (let i = 0; i < 60; i++) { const m = (a + b) / 2; if (edgeAt(m) > E_DN) b = m; else a = m; } return (a + b) / 2; })();
/** the lever handle's height over the floor and its z, for an angle (the set's caption-band check) */
export const handleAt = (th: number) => ({ y: PIV.y + LV_LEN * Math.sin(th) + 14, z: PIV.z + LV_LEN * Math.cos(th) });
export const MACHINE_TOP = handleAt(TH_UP).y;
const BED_X0 = -600;                                  // the bed's left end
export const GAUGE_X0 = -SLAB_L - 1.6;                // the gauge's face at the start (the rule's 0)
const RULE_X0 = BED_X0 + 8, RULE_X1 = HX0 - 3;
/** the push the bevel gives a slice whose top is `top`, with the knife's edge at e */
export const bevelPush = (top: number, e: number) => (e >= top ? 0 : KT * Math.min(1, (top - e) / BEV) + 0.3);
/** each layer's bottom (machine-local) */
export const layerY = (k: number) => TT + 0.3 + k * (BH + 0.3);

// ══ CASH: SLICES OF A CASH.TS BUNDLE ══════════════════════════════════════════════════════════════
// cash.ts's own build constants (the bundle it makes, measured: a strap of 100 notes); its materials and its strap's
// geometry are taken FROM a bundle it builds, so the slices wear exactly its textures
const CORE = 15.2, NT = 0.62, NG = 0.14, NTOP = 4, BT = 0.45, BW = 46, BX = -0.27 * NOTE.W, PINCH = 1.05;
const puff = (x: number) => { const d = Math.max(0, Math.abs(x - BX) - BW / 2 - 6) / 70; const s = Math.min(1, d); return PINCH * s * s * (3 - 2 * s); };
let cashM: { side: THREE.Material; note: THREE.Material[]; band: THREE.Material; bandTop: THREE.Material; strapG: THREE.BufferGeometry; strapTopG: THREE.BufferGeometry } | null = null;
const cashMats = () => {
  if (cashM) return cashM;
  const b = bundle(1).children[0] as THREE.Group;
  const ms = b.children as THREE.Mesh[];
  const core = ms[0], note = ms[1], strap = ms[ms.length - 2], top = ms[ms.length - 1];
  cashM = { side: core.material as THREE.Material, note: note.material as THREE.Material[], band: strap.material as THREE.Material, bandTop: top.material as THREE.Material, strapG: strap.geometry, strapTopG: top.geometry };
  return cashM;
};
/** the core between bundle-local x0 and x1: its sheets' steps on every ORIGINAL face (a cut face is clean), puffed to its ends */
const coreSlice = (seed: number, x0: number, x1: number) => {
  const { W, D } = NOTE;
  const sx = Math.max(2, Math.round((x1 - x0) / 10));
  const g = new THREE.BoxGeometry(x1 - x0, CORE, D, sx, 12, 2);
  g.translate((x0 + x1) / 2, CORE / 2 + BT + 0.15, 0);
  const p = g.attributes.position as THREE.BufferAttribute;
  const y0 = BT + 0.15;
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const f = (y - y0) / CORE, row = Math.round(f * 12);
    const jit = (a: number) => (hash(row, seed, 1) - 0.5) * 0.8 + 0.2 * Math.sin(a * 0.06 + row * 1.7 + seed);
    if (f > 0.001) {
      if (Math.abs(Math.abs(x) - W / 2) < 0.01) x += Math.sign(x) * jit(z + 3) * Math.min(1, f * 6);
      if (Math.abs(Math.abs(z) - D / 2) < 0.01) z += Math.sign(z) * jit(x) * Math.min(1, f * 6);
    }
    y = y0 + (y - y0) * ((CORE + puff(x)) / CORE);
    p.setXYZ(i, x, y, z);
  }
  g.computeVertexNormals();
  return g;
};
/** one top note between x0 and x1: face, back and edge band, its print mapped to its place on the whole note */
const noteSlice = (seed: number, x0: number, x1: number) => {
  const { W, D } = NOTE;
  const sx = Math.max(2, Math.round((x1 - x0) / 15)), sz = 2;
  const surf = (x: number, z: number) => puff(x) + 0.2 * (0.5 + 0.5 * Math.sin(x * 0.045 + seed * 2.1) * Math.cos(z * 0.05 + seed)) * Math.min(1, puff(x) / PINCH + 0.15);
  const pos: number[] = [], uv: number[] = [], idx: number[] = [];
  const groups: [number, number, number][] = [];
  const grid = (dy: number, flip: boolean) => {
    const base = pos.length / 3, start = idx.length;
    for (let j = 0; j <= sz; j++) for (let i = 0; i <= sx; i++) {
      const x = x0 + ((x1 - x0) * i) / sx, z = -D / 2 + (D * j) / sz;
      pos.push(x, surf(x, z) + dy, z); uv.push((x + W / 2) / W, 1 - j / sz);
    }
    for (let j = 0; j < sz; j++) for (let i = 0; i < sx; i++) {
      const a = base + j * (sx + 1) + i, b = a + 1, c = a + sx + 1, d = c + 1;
      if (flip) idx.push(a, b, c, b, d, c); else idx.push(a, c, b, b, c, d);
    }
    return [start, idx.length - start] as const;
  };
  const [s0, n0] = grid(NT, false); groups.push([s0, n0, 0]);
  const [s1, n1] = grid(0, true); groups.push([s1, n1, 1]);
  const ring: [number, number][] = [];
  for (let i = 0; i <= sx; i++) ring.push([x0 + ((x1 - x0) * i) / sx, -D / 2]);
  for (let j = 1; j <= sz; j++) ring.push([x1, -D / 2 + (D * j) / sz]);
  for (let i = sx - 1; i >= 0; i--) ring.push([x0 + ((x1 - x0) * i) / sx, D / 2]);
  for (let j = sz - 1; j >= 1; j--) ring.push([x0, -D / 2 + (D * j) / sz]);
  const es = idx.length;
  for (let k = 0; k < ring.length; k++) {
    const [ax, az] = ring[k], [bx, bz] = ring[(k + 1) % ring.length];
    const base = pos.length / 3;
    for (const [x, z, dy] of [[ax, az, NT], [bx, bz, NT], [bx, bz, 0], [ax, az, 0]] as const) { pos.push(x, surf(x, z) + dy, z); uv.push(0, 0); }
    idx.push(base, base + 2, base + 1, base, base + 3, base + 2);
  }
  groups.push([es, idx.length - es, 2]);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  for (const [s, n, m] of groups) g.addGroup(s, n, m);
  g.computeVertexNormals();
  return g;
};
/** a SLICE of a bundle between bundle-local x0 and x1 (origin on the surface it rests on, as cash.ts's bundle) */
const bundleSlice = (seed: number, x0: number, x1: number) => {
  const m = cashMats();
  const b = new THREE.Group();
  b.add(mesh(coreSlice(seed % 3 + 1, x0, x1), m.side));
  for (let k = 0; k < NTOP; k++) {
    const n = mesh(noteSlice(seed % 3 + 1, x0, x1), m.note);
    // the notes were squared by hand (a little shifted across their width); never along their length, so a cut stays true
    n.position.set(0, BT + 0.15 + CORE + NG + k * (NT + NG), (hash(seed, k, 3) - 0.5) * 1.6);
    b.add(n);
  }
  if (BX - BW / 2 >= x0 && BX + BW / 2 <= x1) { b.add(mesh(m.strapG, m.band)); b.add(mesh(m.strapTopG, m.bandTop, false, true)); }
  return b;
};

// ══ TEXTURES ══════════════════════════════════════════════════════════════════════════════════════
const canvasOf = (w: number, h: number, s: number) => {
  const c = document.createElement("canvas");
  c.width = Math.round(w * s); c.height = Math.round(h * s);
  const g = c.getContext("2d")!;
  g.setTransform(s, 0, 0, s, 0, 0);
  return { c, g };
};
const texOf = (c: HTMLCanvasElement, srgb: boolean, rep = false) => {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8;
  if (rep) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.needsUpdate = true;
  return t;
};
/** a shape drawn in (z, y), extruded across x from x0 to x1 (its bevel inside that span) */
const extrudeX = (s: THREE.Shape, x0: number, x1: number, bv: number, curve = 16) => {
  const g = new THREE.ExtrudeGeometry(s, { depth: Math.max(0.1, x1 - x0 - 2 * bv), bevelEnabled: bv > 0, bevelThickness: bv, bevelSize: bv, bevelOffset: -bv, bevelSegments: 2, curveSegments: curve });
  g.translate(0, 0, bv);
  g.rotateY(-Math.PI / 2);
  g.translate(x1, 0, 0);
  return g;
};
/** a shape drawn in (x, z), extruded up y from y0 to y1 (its bevel inside that span) */
const extrudeY = (s: THREE.Shape, y0: number, y1: number, bv: number, curve = 16) => {
  const g = new THREE.ExtrudeGeometry(s, { depth: Math.max(0.1, y1 - y0 - 2 * bv), bevelEnabled: bv > 0, bevelThickness: bv, bevelSize: bv, bevelOffset: -bv, bevelSegments: 2, curveSegments: curve });
  g.translate(0, 0, bv);
  g.rotateX(Math.PI / 2);
  g.translate(0, y1, 0);
  return g;
};
/** the cast iron's machine-green enamel: a satin coat over the casting's slight orange-peel, rubbed at the edges */
let enamelT: { map: THREE.Texture; bump: THREE.Texture } | null = null;
const enamelTex = () => {
  if (enamelT) return enamelT;
  const N = 512;
  const a = canvasOf(N, N, 1), b = canvasOf(N, N, 1);
  a.g.fillStyle = "#3C5044"; a.g.fillRect(0, 0, N, N);
  b.g.fillStyle = "#808080"; b.g.fillRect(0, 0, N, N);
  for (let i = 0; i < 5200; i++) {
    const x = hash(i, 1, 9) * N, y = hash(i, 2, 9) * N, r = 1 + 3 * hash(i, 3, 9), v = hash(i, 4, 9);
    a.g.fillStyle = v > 0.5 ? `rgba(80,104,88,${0.05 + 0.06 * v})` : `rgba(26,36,30,${0.05 + 0.08 * v})`;
    a.g.beginPath(); a.g.arc(x, y, r, 0, 6.283); a.g.fill();
    b.g.fillStyle = v > 0.5 ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)";
    b.g.beginPath(); b.g.arc(x, y, r * 1.4, 0, 6.283); b.g.fill();
  }
  enamelT = { map: texOf(a.c, true, true), bump: texOf(b.c, false, true) };
  return enamelT;
};
/** a ground steel face: fine grinding swirls (roughness along u) */
let groundT: THREE.Texture | null = null;
const groundTex = () => {
  if (groundT) return groundT;
  const N = 512, { c, g } = canvasOf(N, N, 1);
  g.fillStyle = "rgb(110,110,110)"; g.fillRect(0, 0, N, N);
  for (let i = 0; i < 1400; i++) {
    const v = 70 + Math.round(90 * hash(i, 20, 4));
    g.strokeStyle = `rgba(${v},${v},${v},0.45)`; g.lineWidth = 0.5 + hash(i, 21, 4);
    const cx = hash(i, 22, 4) * N, cy = hash(i, 23, 4) * N, r = 30 + 160 * hash(i, 24, 4), a0 = hash(i, 25, 4) * 6.28;
    g.beginPath(); g.arc(cx, cy, r, a0, a0 + 0.5 + hash(i, 26, 4)); g.stroke();
  }
  groundT = texOf(c, false, true);
  return groundT;
};
/** the bed's top: ground steel with its etched inch grid, darker where the paper has run, a little oil */
const bedTex = (w: number, d: number) => paintTex("wh-bed-v1", w, d, (g) => {
  g.fillStyle = "#B7BCBE"; g.fillRect(0, 0, w, d);
  for (let i = 0; i < 900; i++) {
    const x = hash(i, 30, 1) * w, y = hash(i, 31, 1) * d, l = 20 + 120 * hash(i, 32, 1);
    g.strokeStyle = `rgba(${hash(i, 33, 1) > 0.5 ? "255,255,255" : "60,64,66"},${0.05 + 0.07 * hash(i, 34, 1)})`; g.lineWidth = 0.6;
    g.beginPath(); g.arc(x, y, l, 0, 0.6); g.stroke();
  }
  // the etched grid: every inch (39 px), the half-inches fainter, measured from the knife (the right end)
  const IN = 39.07;
  for (let k = 0; k * IN / 2 < w; k++) {
    const x = w - k * (IN / 2);
    g.strokeStyle = k % 2 ? "rgba(40,44,46,0.22)" : "rgba(30,34,36,0.42)"; g.lineWidth = k % 2 ? 0.5 : 0.8;
    g.beginPath(); g.moveTo(x, 6); g.lineTo(x, d - 6); g.stroke();
  }
  for (let k = 0; k * IN / 2 < d; k++) {
    const y = d - 10 - k * (IN / 2);
    if (y < 4) break;
    g.strokeStyle = k % 2 ? "rgba(40,44,46,0.22)" : "rgba(30,34,36,0.42)"; g.lineWidth = k % 2 ? 0.5 : 0.8;
    g.beginPath(); g.moveTo(6, y); g.lineTo(w - 6, y); g.stroke();
  }
  // wear down the middle, where the stacks slide
  const wg = g.createLinearGradient(0, d * 0.2, 0, d * 0.8);
  wg.addColorStop(0, "rgba(255,255,255,0)"); wg.addColorStop(0.5, "rgba(255,255,255,0.10)"); wg.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = wg; g.fillRect(0, 0, w, d);
}, 2);
/** the brass rule on the bed's front edge: the percent scale across the slab (0 at the gauge's start, 100 at the knife) on
 *  top, the inch scale (from the knife) below */
const ruleTex = (w: number, h: number) => paintTex("wh-rule-v1", w, h, (g) => {
  const gr = g.createLinearGradient(0, 0, 0, h);
  gr.addColorStop(0, "#E2C27A"); gr.addColorStop(0.5, "#CFAB5E"); gr.addColorStop(1, "#B8944A");
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(${hash(i, 40, 2) > 0.5 ? "255,240,200" : "90,60,20"},${0.05 + 0.06 * hash(i, 41, 2)})`; g.fillRect(hash(i, 42, 2) * w, hash(i, 43, 2) * h, 20 + 80 * hash(i, 44, 2), 0.5); }
  g.fillStyle = "#2B1D0E"; g.strokeStyle = "#2B1D0E";
  const xOfP = (p: number) => (GAUGE_X0 + (p / 100) * SLAB_L) - RULE_X0;   // canvas x of percent p
  for (let p = 0; xOfP(p) < w - 2; p++) {
    const x = xOfP(p), L = p % 10 === 0 ? 10 : p % 5 === 0 ? 7 : 4.2;
    g.lineWidth = p % 10 === 0 ? 0.9 : 0.6;
    g.beginPath(); g.moveTo(x, 0.5); g.lineTo(x, L); g.stroke();
    if (p % 10 === 0) {
      g.textAlign = "center"; g.textBaseline = "top";
      fitFont(g, 700, 8.5, String(p), 14);
      g.fillText(String(p), x + (p === 0 ? 2 : 0), 10.6);
    }
  }
  // the inch scale, read from the knife (x = 0 lies past the rule's right end)
  const IN = 39.07, x0 = -RULE_X0;
  for (let k = 1; x0 - (k * IN) / 8 > 1; k++) {
    const x = x0 - (k * IN) / 8, L = k % 8 === 0 ? 6.5 : k % 4 === 0 ? 4.5 : k % 2 === 0 ? 3.2 : 2.2;
    g.lineWidth = k % 8 === 0 ? 0.8 : 0.5;
    g.beginPath(); g.moveTo(x, h - 0.5); g.lineTo(x, h - L); g.stroke();
    if (k % 8 === 0) { g.textAlign = "center"; g.textBaseline = "bottom"; font(g, 600, 5.6); g.fillText(String(k / 8), x + 4.5, h - 0.6); }
  }
  g.fillRect(0, h / 2 - 0.25, w, 0.5);
}, 4);

// ══ THE MODEL ═════════════════════════════════════════════════════════════════════════════════════
export const cutterModel = (geo: CutGeo) => (): Model<CutP> => {
  const root = new THREE.Group();
  const mc = new THREE.Group();
  mc.position.set(geo.xk, -geo.floor, geo.z);
  root.add(mc);
  const body = new THREE.Group();
  body.userData.obj = "cutter";
  mc.add(body);

  // ── materials ──
  const et = enamelTex();
  const enamel = new THREE.MeshPhysicalMaterial({ map: et.map, bumpMap: et.bump, bumpScale: 0.6, roughness: 0.46, metalness: 0.05, clearcoat: 0.35, clearcoatRoughness: 0.4, envMapIntensity: 0.6 });
  const enamelD = enamel.clone(); enamelD.color = col("#C8CFC9");
  const ironRaw = new THREE.MeshPhysicalMaterial({ color: col("#5E6266"), metalness: 0.85, roughness: 0.48, roughnessMap: groundTex(), envMapIntensity: 0.9 });
  const steel = new THREE.MeshPhysicalMaterial({ color: col("#C9CED2"), metalness: 1, roughness: 0.3, roughnessMap: groundTex(), envMapIntensity: 1 });
  const knifeM = new THREE.MeshPhysicalMaterial({ color: col("#DCE1E5"), metalness: 1, roughness: 0.18, roughnessMap: groundTex(), envMapIntensity: 1.1 });
  const brass = M.gold("#C99A3E");
  const black = new THREE.MeshPhysicalMaterial({ color: col("#16130F"), roughness: 0.42, metalness: 0.3, clearcoat: 0.4, envMapIntensity: 0.6 });
  const walnut = new THREE.MeshPhysicalMaterial({ color: col("#5A3524"), roughness: 0.38, clearcoat: 0.7, clearcoatRoughness: 0.25, envMapIntensity: 0.7 });

  // ══ THE FRAME: a cast base on four pads, the bed on it, its tongue between the housings ══
  const BZ = 92;   // the bed's half-depth
  for (const [x, z] of [[BED_X0 + 40, 70], [BED_X0 + 40, -70], [-70, 70], [-70, -70]] as const) {
    const pad = mesh(lathe([[34, 0], [34, 3], [30, 6], [24, 9], [22, 12]], 40), enamel);
    pad.position.set(x, 0, z); body.add(pad);
    const cap = mesh(new THREE.CircleGeometry(34, 40).rotateX(Math.PI / 2), enamel); cap.position.set(x, 0, z); body.add(cap);
  }
  // the base: a cast box frame, its front and back with a sunk panel (rails and stiles proud of it) and a gold pinstripe
  const baseL = -50 - (BED_X0 + 10), baseCx = (BED_X0 + 10 - 50) / 2;
  const base = rbox(baseL, 58, 2 * 80, 6, enamel, 3);
  base.position.set(baseCx, 12 + 29, 80); body.add(base);
  const plinth = rbox(baseL + 16, 6, 2 * 86, 3, enamel, 2);
  plinth.position.set(baseCx, 12 + 3, 86); body.add(plinth);
  const cornice = rbox(baseL + 12, 6, 2 * 84, 3, enamel, 2);
  cornice.position.set(baseCx, 70 - 3, 84); body.add(cornice);
  // the front panel's frame (rails and stiles), with the pinstripe painted on a thin strip just inside it
  const panelW = baseL - 60, panelH = 30;
  for (const [w, h, x, y] of [[panelW + 16, 6, 0, 26 + panelH / 2 + 3 + 12], [panelW + 16, 6, 0, 26 - panelH / 2 - 3 + 12], [6, panelH, -panelW / 2 - 5, 26 + 12], [6, panelH, panelW / 2 + 5, 26 + 12]] as const) {
    const r = rbox(w, h, 3, 1.5, enamel, 2);
    r.position.set(baseCx + x, y, 80 + 3); body.add(r);
  }
  const stripe = mesh(new THREE.PlaneGeometry(panelW - 8, panelH - 8), new THREE.MeshPhysicalMaterial({
    map: paintTex("wh-stripe-v1", 512, 32, (g) => {
      g.clearRect(0, 0, 512, 32);
      g.strokeStyle = "#D2AE5A"; g.lineWidth = 1.2; g.strokeRect(2, 2, 508, 28);
      g.lineWidth = 0.6; g.strokeRect(6, 6, 500, 20);
      for (const x of [2, 510]) for (const y of [2, 30]) { g.beginPath(); g.arc(x, y, 1.6, 0, 6.28); g.fillStyle = "#D2AE5A"; g.fill(); }
    }, 3), transparent: true, depthWrite: false, roughness: 0.5, metalness: 0.4, envMapIntensity: 0.6 }), false, true);
  stripe.position.set(baseCx, 38, 80.25); body.add(stripe);
  // ── the bed: a machined plate; its plan is the long table and the tongue between the housings up to the knife ──
  const bedShape = new THREE.Shape();
  bedShape.moveTo(BED_X0, -BZ); bedShape.lineTo(HX0 - 0.4, -BZ); bedShape.lineTo(HX0 - 0.4, -HZ0 + 6); bedShape.lineTo(-0.4, -HZ0 + 6);
  bedShape.lineTo(-0.4, HZ0 - 6); bedShape.lineTo(HX0 - 0.4, HZ0 - 6); bedShape.lineTo(HX0 - 0.4, BZ); bedShape.lineTo(BED_X0, BZ); bedShape.lineTo(BED_X0, -BZ);
  const bedG = extrudeY(bedShape, TT - 30, TT, 1.2);
  // the top face's UVs: span the bed's plan (x, z) so the grid lands where it is drawn
  {
    const pos = bedG.attributes.position as THREE.BufferAttribute, uv = bedG.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) - BED_X0) / -BED_X0, 1 - (pos.getZ(i) + BZ) / (2 * BZ));
  }
  const bedTop = new THREE.MeshPhysicalMaterial({ map: bedTex(-BED_X0, 2 * BZ), metalness: 0.75, roughness: 0.42, roughnessMap: groundTex(), envMapIntensity: 0.8 });
  const bed = mesh(bedG, [bedTop, enamel]);
  body.add(bed);
  // the hardened shear bar along the bed's knife edge (bright steel, flush with the top)
  const shear = rbox(6, 30, 2 * (HZ0 - 6) - 2, 0.8, steel, 2);
  shear.position.set(-3.2, TT - 15, HZ0 - 7); body.add(shear);
  // the rule on the bed's front edge
  const RW = RULE_X1 - RULE_X0, RH = 22;
  const rule = rbox(RW, RH, 1.6, 0.5, { px: brass, nx: brass, top: brass, bottom: brass, front: new THREE.MeshPhysicalMaterial({ map: ruleTex(RW, RH), metalness: 0.9, roughness: 0.35, envMapIntensity: 0.9 }), back: brass }, 2);
  rule.position.set((RULE_X0 + RULE_X1) / 2, TT - 15, BZ + 1.6); body.add(rule);
  for (const x of [RULE_X0 + 6, (RULE_X0 + RULE_X1) / 2, RULE_X1 - 6]) {
    const s = mesh(lathe([[0.01, 0], [2.4, 0], [2.2, 0.8], [1.4, 1.4], [0.01, 1.6]], 16), steel);
    s.rotation.x = Math.PI / 2; s.position.set(x, TT - 15 + 7.5, BZ + 1.6); body.add(s);
  }
  // the fence: a ground steel bar along the bed's back, the slab squared against it
  const fence = rbox(-BED_X0 + HX0 - 14, 34, 16, 2, { px: steel, nx: steel, top: steel, bottom: steel, front: steel, back: enamel }, 2);
  fence.position.set((BED_X0 + 10 + HX0 - 4) / 2, TT + 17 + 0.2, -55.2); body.add(fence);
  for (let i = 0; i < 5; i++) {
    const x = BED_X0 + 40 + i * ((-BED_X0 + HX0 - 80) / 4);
    const bolt = mesh(lathe([[0.01, 0], [5, 0], [5, 2], [4, 3.4], [0.01, 3.6]], 6), ironRaw);
    bolt.position.set(x, TT + 34.4, -63); body.add(bolt);
  }

  // ══ THE HOUSINGS: two cast uprights, each with its gib slot for the knife's end ══
  for (const s of [1, -1]) {
    const z0 = s * HZ0, z1 = s * HZ1, zs = s * (HZ0 + 12.6), hz = (a: number, b: number) => [(a + b) / 2, Math.abs(b - a)] as const;
    const H = CH0;
    const parts: [number, number, number, number, number, number][] = [];
    { const [cz, d] = hz(zs, z1); parts.push([HX0, HX1, 0, H, cz, d]); }
    { const [cz, d] = hz(z0, zs); parts.push([HX0, -0.6, 0, H, cz, d]); parts.push([KT + 0.9, HX1, 0, H, cz, d]); parts.push([-0.6, KT + 0.9, 0, E_DN - 16, cz, d]); }
    for (const [x0, x1, y0, y1, cz, d] of parts) {
      const b = rbox(x1 - x0, y1 - y0, d, 1.2, enamel, 2);
      b.position.set((x0 + x1) / 2, (y0 + y1) / 2, cz + d / 2); body.add(b);
    }
    // a cast foot flaring out at its base, and a rib up its outer face
    const foot = rbox(HX1 - HX0 + 24, 14, HZ1 - HZ0 + 14, 5, enamel, 3);
    foot.position.set((HX0 + HX1) / 2, 7, s * (HZ0 + HZ1) / 2 + (HZ1 - HZ0 + 14) / 2); body.add(foot);
    const rib = rbox(18, H - 30, 8, 3, enamel, 2);
    rib.position.set((HX0 + HX1) / 2, 14 + (H - 30) / 2, s > 0 ? HZ1 + 8 : -HZ1); body.add(rib);
    // the gib's adjusting screws on the outer face
    for (const y of [E_DN + 30, E_DN + 100, E_DN + 170]) {
      const sc = mesh(lathe([[0.01, 0], [4.2, 0], [4.2, 2.2], [3.4, 3.4], [0.01, 3.8]], 6), ironRaw);
      sc.rotation.x = s * Math.PI / 2; sc.position.set((HX0 + HX1) / 2, y, s > 0 ? HZ1 + 8 : -HZ1 - 8); body.add(sc);
    }
  }
  // the crosshead: a beam across the housings' tops, bored for the clamp's screw
  {
    const s = roundRect(XC1 - XC0, 2 * (HZ1 + 6), 6);
    const hole = new THREE.Path(); hole.absarc(SCREW.x - (XC1 + XC0) / 2, 0, SCREW.hole + 2, 0, Math.PI * 2, true); s.holes.push(hole);
    const cross = mesh(extrudeY(s, CH0, CH1, 2, 24), enamel);
    cross.position.set((XC1 + XC0) / 2, 0, 0); body.add(cross);
    // its bolts down into the housings
    for (const z of [-(HZ0 + HZ1) / 2, (HZ0 + HZ1) / 2]) for (const x of [HX0 + 8, HX1 - 8]) {
      const b = mesh(lathe([[0.01, 0], [5.4, 0], [5.4, 3], [4.4, 4.4], [0.01, 4.8]], 6), ironRaw);
      b.position.set(x, CH1, z); body.add(b);
    }
    // the nut boss round the clamp screw
    const boss = mesh(lathe([[SCREW.hole, 0], [16, 0], [16, 2], [13, 7], [SCREW.hole, 7]], 32), ironRaw);
    boss.position.set(SCREW.x, CH1, 0); body.add(boss);
  }
  // the lever's bracket: a cast plate rising off the crosshead's right end, bored for the pivot pin
  {
    const s = new THREE.Shape();
    const z0 = PIV.z - 16, z1 = PIV.z + 16, y0 = CH0 + 4, yp = PIV.y;
    s.moveTo(z0 - 6, y0); s.lineTo(z1 + 6, y0); s.lineTo(z1, yp); s.absarc(PIV.z, yp, 16, 0, Math.PI, false); s.lineTo(z0 - 6, y0);
    const h = new THREE.Path(); h.absarc(PIV.z, yp, 5.4 + 1.5, 0, Math.PI * 2, true); s.holes.push(h);   // (+ the bevel: an extrusion's bevel closes a hole by its size at the faces)
    body.add(mesh(extrudeX(s, XC1 - 2, LV_X0 - 0.4, 1.5, 24), enamel));
  }

  // ══ THE BACK GAUGE and its hand wheel ══
  const gauge = new THREE.Group();
  gauge.userData.obj = "gauge";
  mc.add(gauge);
  {
    const GW = 44, GH = 72;
    const face = rbox(10, GH, 112, 1.5, steel, 2);
    face.position.set(-5, TT + 0.3 + GH / 2, 58); gauge.add(face);
    const back = rbox(GW - 10, GH - 12, 2 * 50, 4, enamel, 3);
    back.position.set(-10 - (GW - 10) / 2 - 0.2, TT + 0.3 + (GH - 12) / 2, 50); gauge.add(back);
    for (const z of [-30, 0, 30]) {
      const rib = rbox(GW - 12, 10, 8, 2, enamel, 2);
      rib.position.set(-10 - (GW - 12) / 2 - 0.2, TT + 0.3 + GH - 12 + 4, z + 4); gauge.add(rib);
    }
    // the index: a brass strip along the bed's top to its front edge, bent down over it, its point on the rule
    const arm = rbox(7, 2.4, BZ + 5 - 58, 0.6, brass, 2);
    arm.position.set(0, TT + 0.3 + 1.2, BZ + 5); gauge.add(arm);
    const s = new THREE.Shape();
    s.moveTo(-3.5, 0); s.lineTo(3.5, 0); s.lineTo(3.5, -10); s.lineTo(0, -14.5); s.lineTo(-3.5, -10); s.lineTo(-3.5, 0);
    const pg = new THREE.ExtrudeGeometry(s, { depth: 1.6, bevelEnabled: false });
    const pt = mesh(pg, brass);
    pt.position.set(0, TT + 0.3 + 2.4, BZ + 3.6); gauge.add(pt);
    const scr = mesh(lathe([[0.01, 0], [2.6, 0], [2.4, 0.9], [0.01, 1.3]], 16), steel);
    scr.position.set(0, TT + 0.3 + 2.4, BZ - 6); gauge.add(scr);
  }
  const wheel = new THREE.Group();
  wheel.userData.obj = "gauge wheel";
  const WX = BED_X0 - 46, WY = 52, WR = 40;
  wheel.position.set(WX, WY, 20);
  mc.add(wheel);
  {
    // the bearing on the base's end (bored), the shaft, the spoked cast wheel, its turned walnut handle
    // (lathe +y → +x by Rz(−π/2)… the ring stands out of the base's end, toward −x)
    const brg = mesh(lathe([[7.5, 0], [12, 0], [15, 8], [15, 10], [7.5, 10]], 32), enamel);
    brg.rotation.z = Math.PI / 2; brg.position.set(BED_X0 + 10 + 0.5, WY, 20); body.add(brg);
    const shL = BED_X0 + 10 - 0.3 - WX - 4;
    const sh = mesh(new THREE.CylinderGeometry(7, 7, shL, 20), steel);
    sh.rotation.z = Math.PI / 2; sh.position.set(4 + shL / 2, 0, 0); wheel.add(sh);
    const hub = mesh(lathe([[0.01, -8], [12, -8], [13, -4], [13, 4], [11, 8], [0.01, 8]], 32), ironRaw);
    hub.rotation.z = Math.PI / 2; wheel.add(hub);
    const rim = mesh(new THREE.TorusGeometry(WR, 5.5, 14, 64), ironRaw);
    rim.rotation.y = Math.PI / 2; wheel.add(rim);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + 0.4;
      const sp = mesh(new THREE.CylinderGeometry(3.4, 4.6, WR - 10, 12), ironRaw);
      sp.position.set(0, Math.cos(a) * (WR / 2 + 3), Math.sin(a) * (WR / 2 + 3)); sp.rotation.x = a; wheel.add(sp);
    }
    const kn = mesh(lathe([[0.01, 0], [4, 0], [5.5, 3], [6.5, 12], [6, 22], [4, 27], [0.01, 28]], 24), walnut);
    kn.rotation.z = Math.PI / 2; kn.position.set(-5, WR * Math.cos(0.4 + Math.PI / 4), WR * Math.sin(0.4 + Math.PI / 4));
    wheel.add(kn);
  }

  // ══ THE KNIFE: a single-bevel blade bolted under its cast bar; a lug and pin for the link ══
  const knife = new THREE.Group();
  knife.userData.obj = "knife";
  mc.add(knife);
  {
    const s = new THREE.Shape();
    s.moveTo(0, 0); s.lineTo(0.5, 0); s.lineTo(KT, BEV); s.lineTo(KT, KH); s.lineTo(0, KH); s.lineTo(0, 0);
    const g = new THREE.ExtrudeGeometry(s, { depth: 2 * (HZ0 + 12), bevelEnabled: false });
    g.translate(0, 0, -(HZ0 + 12));
    knife.add(mesh(g, knifeM));
    // the ground bevel catches the light: a brighter, finer finish on its face
    const bar = rbox(18, BAR_H, 2 * (HZ0 - 2), 2, enamel, 2);
    bar.position.set(9, KH + BAR_H / 2 + 0.01, HZ0 - 2); knife.add(bar);
    // the bolts that hold the blade to its bar, their heads on the bar's face (clear of the cash at the stroke's foot)
    for (const z of [-48, -16, 16, 48]) {
      const b = mesh(lathe([[0.01, 0], [4.6, 0], [4.6, 2.2], [3.6, 3.2], [0.01, 3.4]], 6), ironRaw);
      b.rotation.z = -Math.PI / 2; b.position.set(18, KH + 10, z); knife.add(b);
    }
    const lug = rbox(LK_X0 - 18 - 0.4, 20, 20, 3, enamel, 2);
    lug.position.set((18 + LK_X0 - 0.4) / 2, KH + LUG_DY - KH, ZL + 10);
    lug.position.y = LUG_DY;
    knife.add(lug);
    const pin = mesh(new THREE.CylinderGeometry(4.5, 4.5, LK_X1 + 1.6 - (LK_X0 - 4), 16), steel);
    pin.rotation.z = Math.PI / 2; pin.position.set((LK_X1 + 1.6 + LK_X0 - 4) / 2, LUG_DY, ZL); knife.add(pin);
  }

  // ══ THE CLAMP: a ground pressure bar on its screw, the screw through the crosshead's nut, a spoked hand wheel on top ══
  const clamp = new THREE.Group();
  clamp.userData.obj = "clamp";
  mc.add(clamp);
  const CW_Y = CH1 + 7 + 3;     // the wheel's hub bottom over the boss, when the clamp is down (relative: + travel)
  {
    const bar = rbox(CL_X1 - CL_X0, CL_H, 2 * CL_Z, 2, { px: steel, nx: steel, top: enamel, bottom: steel, front: enamel, back: enamel }, 2);
    bar.position.set((CL_X0 + CL_X1) / 2, CL_H / 2, CL_Z); clamp.add(bar);
    const scr = mesh(new THREE.CylinderGeometry(SCREW.r, SCREW.r, CW_Y - CL_DN - CL_H + 6, 20), steel);
    scr.position.set(SCREW.x, CL_H + (CW_Y - CL_DN - CL_H + 6) / 2 - 1, 0); clamp.add(scr);
    // the thread: fine rings along the screw
    for (let y = CL_H + 8; y < CW_Y - CL_DN - 4; y += 3.2) {
      const t = mesh(new THREE.TorusGeometry(SCREW.r, 0.5, 6, 24), steel);
      t.rotation.x = Math.PI / 2; t.position.set(SCREW.x, y, 0); clamp.add(t);
    }
    const hw = new THREE.Group();
    hw.position.set(SCREW.x, CW_Y - CL_DN, 0);
    clamp.add(hw);
    clamp.userData.wheel = hw;
    hw.add(mesh(lathe([[SCREW.r - 0.5, 0], [11, 0], [12, 3], [12, 12], [9, 15], [0.01, 15]], 28), ironRaw));
    const rim = mesh(new THREE.TorusGeometry(30, 4.2, 12, 56), ironRaw);
    rim.rotation.x = Math.PI / 2; rim.position.y = 8; hw.add(rim);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2;
      const sp = mesh(new THREE.CylinderGeometry(2.8, 3.6, 20, 10), ironRaw);
      sp.rotation.z = Math.PI / 2; sp.rotation.y = a; sp.position.set(Math.cos(a) * 20, 8, -Math.sin(a) * 20); hw.add(sp);
    }
    const kn = mesh(lathe([[0.01, 0], [3.4, 0], [4.6, 3], [5.4, 10], [5, 18], [3.4, 22], [0.01, 23]], 20), walnut);
    kn.position.set(30, 11.5, 0); hw.add(kn);
  }

  // ══ THE LINK and THE LEVER ══
  const link = new THREE.Group();
  link.userData.obj = "link";
  mc.add(link);
  {
    const s = new THREE.Shape();
    const L = LK, r = 9;
    s.moveTo(-r, 0); s.lineTo(-r * 0.75, L); s.absarc(0, L, r * 0.75 + 0.01, Math.PI, 0, true); s.lineTo(r, 0); s.absarc(0, 0, r, 0, Math.PI, true);
    for (const y of [0, L]) { const h = new THREE.Path(); h.absarc(0, y, 5 + 0.8, 0, Math.PI * 2, true); s.holes.push(h); }
    link.add(mesh(extrudeX(s, LK_X0, LK_X1, 0.8, 20), ironRaw));
  }
  const lever = new THREE.Group();
  lever.userData.obj = "lever";
  lever.position.set(0, PIV.y, PIV.z);
  mc.add(lever);
  {
    // the arm, in lever-local (u along it toward the handle, v up): a cast beam tapering from the pivot boss to the handle
    const s = new THREE.Shape();
    const hw = (u: number) => (u >= 0 ? 14 - 5 * (u / LV_LEN) : 12);
    const u0 = -LV_TAIL + 10;
    s.moveTo(u0, -hw(u0));
    for (let u = u0 + 5; u <= LV_LEN; u += 5) s.lineTo(u, -hw(u));
    s.absarc(LV_LEN, 0, hw(LV_LEN), -Math.PI / 2, Math.PI / 2, false);
    for (let u = LV_LEN - 5; u >= u0; u -= 5) s.lineTo(u, hw(u));
    s.absarc(u0, 0, hw(u0), Math.PI / 2, (3 * Math.PI) / 2, false);
    lever.add(mesh(extrudeX(s, LV_X0, LV_X1, 2), enamel));
    // the bosses (turned): at the pivot, at the link's pin
    for (const [u, r] of [[0, 21], [PIN_R, 13]] as const) {
      const T = LV_X1 - LV_X0;
      const b = mesh(lathe([[5, 0], [r - 1, 0], [r, 1], [r, T - 1], [r - 1, T], [5, T]], 36), enamel);
      b.rotation.z = -Math.PI / 2; b.position.set(LV_X0, 0, u); lever.add(b);
    }
    // the pivot pin (through the bracket) and the link's pin (through the link), with their nuts
    const pv = mesh(new THREE.CylinderGeometry(4.9, 4.9, LV_X1 + 6 - (LV_X0 - 26), 16), steel);
    pv.rotation.z = Math.PI / 2; pv.position.set((LV_X1 + 6 + LV_X0 - 26) / 2, 0, 0); lever.add(pv);
    const lp = mesh(new THREE.CylinderGeometry(4.5, 4.5, LV_X1 + 6 - (LK_X0 - 1.6), 16), steel);
    lp.rotation.z = Math.PI / 2; lp.position.set((LV_X1 + 6 + LK_X0 - 1.6) / 2, 0, PIN_R); lever.add(lp);
    for (const u of [0, PIN_R]) {
      const nut = mesh(lathe([[4.9, 0], [8, 0], [8, 5], [4.9, 5]], 6), ironRaw);
      nut.rotation.z = -Math.PI / 2; nut.position.set(LV_X1 + 2.2, 0, u); lever.add(nut);
    }
    // the counterweight: a cast ball on the tail
    const ball = mesh(new THREE.SphereGeometry(25, 40, 24), black);
    ball.position.set((LV_X0 + LV_X1) / 2, 0, -LV_TAIL - 12); lever.add(ball);
    // the handle: a turned walnut grip on a steel stub, standing out from the arm's end
    const stub = mesh(new THREE.CylinderGeometry(5, 5, 14, 16), steel);
    stub.rotation.z = Math.PI / 2; stub.position.set(LV_X1 + 7, 0, LV_LEN); lever.add(stub);
    const grip = mesh(lathe([[0.01, 0], [7, 0], [9.5, 4], [10.5, 14], [11.5, 34], [12.5, 52], [11.5, 62], [8, 68], [0.01, 70]], 32), walnut);
    grip.rotation.z = -Math.PI / 2; grip.position.set(LV_X1 + 14, 0, LV_LEN); lever.add(grip);
  }

  // ══ THE CASH ══
  const slab = new THREE.Group();
  slab.position.set(GAUGE_X0 + 1.6, 0, 0);
  mc.add(slab);
  const flips = [false, true, false];
  // the left column: cash.ts's own bundles, squared (no turn)
  for (let k = 0; k < LAYERS; k++) {
    const b = bundle(11 + k, k === 1);
    b.userData.obj = `cash L${k}`;
    b.position.set(NOTE.W / 2, layerY(k), (hash(k, 6, 2) - 0.5) * 0.8);
    slab.add(b);
  }
  // the right column: each layer's bundle as three slices (the remainder, the 8 %, the 24 %)
  const sOf = (fl: boolean, s: number) => (fl ? -(s - RC) : s - RC);   // slab s → bundle-local x
  const R = [[NOTE.W + COL_GAP, CUT2 - 0.15], [CUT2 + 0.15, CUT1 - 0.15], [CUT1 + 0.15, SLAB_L]] as const;
  const pieceA = new THREE.Group(), pieceB = new THREE.Group();
  const layersA: THREE.Group[] = [], layersB: THREE.Group[] = [];
  for (let k = 0; k < LAYERS; k++) {
    const fl = flips[k];
    R.forEach(([s0, s1], j) => {
      const a = sOf(fl, s0), b = sOf(fl, s1);
      const sl = bundleSlice(21 + k, Math.min(a, b), Math.max(a, b));
      const w = new THREE.Group();
      w.add(sl);
      if (fl) sl.rotation.y = Math.PI;
      w.userData.obj = `cash R${k}.${j}`;
      w.userData.layer = k;
      if (j === 0) { w.position.set(RC, layerY(k), 0); slab.add(w); }
      else { w.position.set(RC, 0, 0); const lg = new THREE.Group(); lg.add(w); lg.userData.k = k; (j === 1 ? pieceB : pieceA).add(lg); (j === 1 ? layersB : layersA).push(lg); }
    });
  }
  // the pieces live in machine space once cut (they leave the slab); before that they ride with it
  mc.add(pieceA, pieceB);

  // ══ THE FLOOR ══
  const floor = makeFloor({ y: geo.floor, x0: geo.xk - 1000, x1: geo.xk + 700, z0: geo.z - 500, z1: geo.z + 600, reflect: 0, shadow: 0.42,
    fadeC: [geo.xk - 220, geo.z], fadeR: [600, 400],
  });
  root.add(floor);
  // the contact pools under its feet: in the machine's own frame, so they turn with it
  const poolT = (() => {
    const { c, g } = canvasOf(128, 128, 1);
    g.fillStyle = "#000"; g.fillRect(0, 0, 128, 128);
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, "#fff"); gr.addColorStop(0.45, "#a0a0a0"); gr.addColorStop(1, "#000");
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
    return texOf(c, false);
  })();
  const pools = new THREE.Group();
  pools.userData.isFloor = true; pools.userData.noBounds = true;
  mc.add(pools);
  for (const [x, z, w, d, a] of [[BED_X0 + 40, 70, 96, 96, 0.5], [BED_X0 + 40, -70, 96, 96, 0.5], [-70, 70, 96, 96, 0.5], [-70, -70, 96, 96, 0.5],
    [3, 96, 110, 66, 0.55], [3, -96, 110, 66, 0.55], [(BED_X0 - 50) / 2, 0, 640, 230, 0.32]] as const) {
    const m = new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: poolT, transparent: true, depthWrite: false, toneMapped: false, opacity: a });
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(w, d), m);
    pl.rotation.x = -Math.PI / 2; pl.position.set(x, 0.25, z); pl.renderOrder = 1.5;
    pools.add(pl);
  }

  /** a cut-off's pose: before release it rides the slab at its slice's place, pushed by the bevel; once free it falls (its
   *  low corner, the one away from the knife, first), lands, and lies on what is under it */
  const placePiece = (grp: THREE.Group, layers: THREE.Group[], p: PieceP, slabX: number, baseY: number) => {
    // each layer's slices: at their place in the slab (s from its left end), pushed along x by the bevel
    layers.forEach((lg) => {
      const k = lg.userData.k as number;
      lg.position.set(p.push[k] ?? 0, layerY(k) - TT - 0.3, 0);
    });
    // the group: at the slab while held; once free, translated down by the fall and tilted about its far low corner
    const sMax = grp === pieceA ? SLAB_L : CUT1 - 0.15;
    const xr = slabX + sMax + Math.max(...p.push);      // the far edge (machine x)
    grp.position.set(0, 0, 0);
    grp.rotation.set(0, 0, 0);
    // tilt about (xr, baseY): translate so that corner is the origin, rotate, translate back and down
    const c = Math.cos(p.tilt), s = Math.sin(p.tilt);
    grp.matrixAutoUpdate = false;
    const m = new THREE.Matrix4().makeTranslation(xr, baseY - p.drop, 0)
      .multiply(new THREE.Matrix4().set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1))
      .multiply(new THREE.Matrix4().makeTranslation(-xr, -baseY, 0))
      .multiply(new THREE.Matrix4().makeTranslation(slabX, TT + 0.3, 0));
    grp.matrix.copy(m);
    grp.matrixWorldNeedsUpdate = true;
  };

  return {
    root,
    update: (p) => {
      mc.rotation.y = (p.yaw * Math.PI) / 180;
      // the slab rides the gauge
      const sx = GAUGE_X0 + 1.6 + p.gx + p.slab;
      slab.position.x = sx;
      gauge.position.x = GAUGE_X0 + p.gx;
      wheel.rotation.x = -(p.gx / 60) * Math.PI * 2;
      // the clamp
      const cy = CL_UP + (CL_DN - CL_UP) * p.clamp;
      clamp.position.y = cy;
      (clamp.userData.wheel as THREE.Group).rotation.y = ((CL_UP - cy) / 8) * Math.PI * 2;
      // the lever, the link, the knife
      const th = p.theta, e = edgeAt(th), pin = pinAt(th);
      lever.rotation.x = -th;
      knife.position.y = e;
      const ly = e + LUG_DY;
      link.position.set(0, ly, ZL);
      link.rotation.x = Math.atan2(pin.z - ZL, pin.y - ly);
      // the cut-offs
      placePiece(pieceA, layersA, p.A, sx, TT + 0.3);
      placePiece(pieceB, layersB, p.B, sx, TT + 0.3);
    },
  };
};
