// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE LAWSUIT IN 3-D (039) — "That September, he sued DAZN, Golden Boy and Oscar De La Hoya for at least $280 million. By
// November, they had agreed to part ways. The terms were never made public." On the cream ground, on an unseen table (the
// floor: its soft shadows), three real things. ★ ROUND 2 (Timur, 2026-11-23: "the 3d visuals need to be more realistic"):
//   · THE COMPLAINT: a real bound bundle of filed court papers: three squared signatures of sheets (each a little off the
//     one under it, their cut edges showing the pages as uneven lines), a slight fan of loose sheets on top pivoting on a
//     black enamelled steel BINDER CLIP at the head (its jaw, rolled channel and two bright steel wire handles, one folded
//     flat over the page, one folded back behind the spine). Its top page is the complaint's first page on pleading paper:
//     numbered lines, ruled margin, UNITED STATES DISTRICT COURT, the caption SAÚL ÁLVAREZ, Plaintiff, v. DAZN, GOLDEN BOY
//     PROMOTIONS and OSCAR DE LA HOYA, Defendants (the voice's order), COMPLAINT, and the claim DAMAGES OF AT LEAST /
//     $280,000,000, large. It is what HE filed: no court's mark, no stamp, nothing that says who was right.
//   · THE CONTRACT: the first page of the PROMOTIONAL & BROADCAST AGREEMENT (DAZN and GOLDEN BOY on the left, ÁLVAREZ on
//     the right, its TERMS below). It TEARS in two along an irregular line between the parties: the tear runs down from the
//     far edge (a white fibrous lip of exposed paper follows it down the left half, the right half's edge darker and
//     sharper), the halves turn apart from the far end, their torn edges and far corners curling up a little, then slide
//     apart. Each half is a fine mesh (a row every 2 px) so the edge is the tear's own jagged line and the paper can bend.
//   · THE ENVELOPE: a plain sealed kraft envelope, back up, a little puffed by what is inside: mottled fibrous kraft (a
//     bump of its fibres), its flap glued down (the flap stands a hair proud, its glue line a darker band along its
//     edge), the side and bottom flaps' seams, worn corners. It slides in over the torn halves' TERMS. Nothing printed on it.
// Paper takes a fine grain bump and a faint sheen. Units are layer px (y up from the table, z toward the viewer).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, liveTex, fontsReady, rr, type Model } from "../stage";
import { M, rbox, rad, col, fitFont, track, hash, paper, typeLines, font, wire } from "../kit029";

/** the place's layout (table-local) */
export const LG = {
  floor: 1500,
  stack: { x: 540, z: 0 },
  contract: { x: 1840, z: -40 },
} as const;

// ══ PAPER'S GRAIN: a fine fibre bump, tiled, so the key catches the paper's tooth ══
const grainTex = (key: string, kraft: boolean, rx: number, ry: number) => {
  const base = paintTex(key, 256, 256, (c) => {
    c.fillStyle = "#808080"; c.fillRect(0, 0, 256, 256);
    const s = kraft ? 31 : 21, n = kraft ? 3200 : 2200;
    for (let i = 0; i < n; i++) {
      const x = hash(i, 1, s) * 256, y = hash(i, 2, s) * 256, a = (hash(i, 3, s) - 0.5) * (kraft ? 1.4 : 3.1);
      const L = kraft ? 3 + 13 * hash(i, 4, s) : 1.5 + 5 * hash(i, 4, s), h = hash(i, 5, s);
      c.strokeStyle = h > 0.5 ? `rgba(255,255,255,${0.12 + 0.3 * hash(i, 6, s)})` : `rgba(0,0,0,${0.1 + 0.25 * hash(i, 6, s)})`;
      c.lineWidth = 0.5 + 0.9 * hash(i, 7, s);
      c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(a) * L, y + Math.sin(a) * L); c.stroke();
    }
  }, 2);
  const t = base.clone();
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(rx, ry);
  t.needsUpdate = true;
  return t;
};
/** paper: its print (or colour), its grain, a faint sheen */
const paperM = (o: { map?: THREE.Texture; color?: string; grain: THREE.Texture; bump?: number; rough?: number; sheen?: string }) =>
  new THREE.MeshPhysicalMaterial({ map: o.map ?? null, color: col(o.color ?? "#FFFFFF"), roughness: o.rough ?? 0.86, metalness: 0,
    bumpMap: o.grain, bumpScale: o.bump ?? 0.5, sheen: 0.25, sheenRoughness: 0.75, sheenColor: col(o.sheen ?? "#FFFFFF"), envMapIntensity: 0.35 });

// ══ THE COMPLAINT ══
/** the bundle: page size, a sheet's thickness and the gap between sheets */
export const CP = { W: 680, D: 880, T: 0.9, GAP: 0.25 } as const;
/** the three bound signatures (height, offset, turn), bottom first */
const SIGS = [{ h: 10, dx: 0, dz: 0, yaw: 0 }, { h: 8, dx: 2.6, dz: -1.8, yaw: 0.0028 }, { h: 9, dx: -2, dz: 1.6, yaw: -0.0022 }] as const;
const SIG_TOPS = SIGS.reduce<number[]>((a, s, i) => [...a, (i ? a[i - 1] + 0.2 : 0) + s.h], []);
const BLOCK = SIG_TOPS[SIG_TOPS.length - 1];
/** the loose sheets fanned on the block (the top page is the last of them) */
const FAN = 7;
const LOOSE_TOP = BLOCK + FAN * (CP.T + CP.GAP);
const fanYaw = (i: number) => (i - FAN / 2) * 0.0012;
const TOP_YAW = fanYaw(FAN + 0.6);
/** the top page's print surface at its corners (the print sits here; its middle bows 0.8 px higher) */
export const STACK_H = LOOSE_TOP + CP.GAP + CP.T;
/** the binder clip's highest point (its spine's top), at the head of the page */
export const CLIP_TOP = STACK_H + 10 + 1;
/** where the readable print sits on the complaint's top page (page px from its top-left: x0, y0, x1, y1) */
export const CPRINT = {
  court: [118, 96, 618, 152] as const,
  caption: [100, 170, 634, 390] as const,
  claim: [110, 416, 626, 556] as const,
  figure: [110, 460, 626, 556] as const,
};
/** a page point (page px) of the complaint at rest → table-local */
export const onComplaint = (px: number, py: number) => ({ x: LG.stack.x - CP.W / 2 + px, y: STACK_H + 1, z: LG.stack.z - CP.D / 2 + py });

const INK = "#1E1814";
const fibres = (c: CanvasRenderingContext2D, w: number, h: number, seed: number, n = 220) => {
  for (let i = 0; i < n; i++) { c.fillStyle = `rgba(120,100,70,${0.02 + 0.03 * hash(i, 5, seed)})`; c.fillRect(hash(i, 1, seed) * w, hash(i, 2, seed) * h, 2 + 7 * hash(i, 3, seed), 0.7); }
};
const paintComplaint = () => paintTex("law39-complaint-v4", CP.W, CP.D, (c) => {
  const W = CP.W, D = CP.D;
  c.fillStyle = "#FAF8F2"; c.fillRect(0, 0, W, D);
  fibres(c, W, D, 3);
  // ★ pleading paper: the ruled margin (a double rule) and the numbered lines down the left, a single rule on the right
  c.fillStyle = "rgba(40,30,22,0.5)";
  c.fillRect(80, 0, 1.2, D); c.fillRect(85, 0, 1.2, D); c.fillRect(648, 0, 1, D);
  c.textAlign = "right"; c.textBaseline = "alphabetic"; c.fillStyle = "rgba(40,30,22,0.5)";
  font(c, 500, 11);
  for (let i = 1; i <= 28; i++) c.fillText(String(i), 70, 44 + i * 29.4);
  // the filing attorney's block (greeked) at the head
  typeLines(c, 100, 26, 250, 4, 15, 5, 0.3, 1);
  // the court
  c.textAlign = "center"; c.fillStyle = INK;
  const cx = (96 + 640) / 2;
  track(c, 1.5);
  const s0 = fitFont(c, 700, 24, "UNITED STATES DISTRICT COURT", 500);
  c.fillText("UNITED STATES DISTRICT COURT", cx, 112 + s0 * 0.36);
  const s0b = fitFont(c, 600, 19, "CENTRAL DISTRICT OF CALIFORNIA", 440);
  c.fillText("CENTRAL DISTRICT OF CALIFORNIA", cx, 140 + s0b * 0.36);
  track(c, 0);
  // the caption: the parties on the left (the voice's order), the bracket column, the title on the right
  c.textAlign = "left";
  const L = 100, LW = 310;
  const line = (t: string, y: number, w: number, s: number, x = L) => { const z = fitFont(c, w, s, t, LW - (x - L)); c.fillText(t, x, y + z * 0.36); };
  line("SAÚL ÁLVAREZ,", 186, 800, 28);
  c.fillStyle = "rgba(30,24,20,0.8)"; line("Plaintiff,", 214, 500, 19, L + 60);
  c.fillStyle = INK; line("v.", 244, 600, 22, L + 20);
  line("DAZN,", 276, 800, 28);
  line("GOLDEN BOY PROMOTIONS", 306, 800, 28);
  line("and OSCAR DE LA HOYA,", 336, 800, 28);
  c.fillStyle = "rgba(30,24,20,0.8)"; line("Defendants.", 364, 500, 19, L + 60);
  c.fillStyle = INK;
  c.fillRect(L, 384, LW, 1.4);
  font(c, 500, 22);
  for (let y = 182; y <= 384; y += 25.25) c.fillText(")", L + LW + 8, y + 8);
  // the title column
  const R = 446, RW = 188;
  c.fillStyle = "rgba(30,24,20,0.45)"; rr(c, R, 186, 60, 5, 2.5); c.fill(); rr(c, R + 68, 186, 80, 5, 2.5); c.fill();
  c.fillStyle = INK;
  const s1 = fitFont(c, 800, 46, "COMPLAINT", RW);
  c.fillText("COMPLAINT", R, 244 + s1 * 0.36);
  typeLines(c, R, 284, RW - 10, 4, 18, 5, 0.3, 4);
  // the claim, as large as the page allows
  c.textAlign = "center";
  track(c, 3);
  const s2 = fitFont(c, 700, 26, "DAMAGES OF AT LEAST", 420);
  c.fillText("DAMAGES OF AT LEAST", cx, 432 + s2 * 0.36);
  track(c, 0);
  const s3 = fitFont(c, 800, 104, "$280,000,000", CPRINT.figure[2] - CPRINT.figure[0]);
  c.fillText("$280,000,000", cx, 508 + s3 * 0.36);
  // the body (greeked) and the folio
  typeLines(c, 100, 586, 530, 9, 29, 5.5, 0.28, 6);
  c.fillStyle = "rgba(30,24,20,0.35)"; rr(c, cx - 30, D - 26, 60, 4.5, 2.2); c.fill();
}, 3);
/** a signature's cut edges: the pages as fine uneven lines, a little wear along the length */
const paintEdges = (seed: number) => paintTex(`law39-edges-v2-${seed}`, 128, 64, (c) => {
  c.fillStyle = "#F0EBDF"; c.fillRect(0, 0, 128, 64);
  for (let y = 0, k = 0; y < 64; k++) {
    const h = 1.4 + 1.8 * hash(k, 1, seed);
    c.fillStyle = `rgba(${hash(k, 2, seed) > 0.5 ? "255,255,255" : "125,108,82"},${0.1 + 0.28 * hash(k, 3, seed)})`;
    c.fillRect(0, y, 128, h * 0.55);
    y += h;
  }
  for (let i = 0; i < 36; i++) { c.fillStyle = `rgba(90,75,55,${0.14 + 0.24 * hash(i, 4, seed)})`; c.fillRect(0, hash(i, 5, seed) * 64, 128, 0.45); }
  for (let i = 0; i < 60; i++) { c.fillStyle = `rgba(110,95,70,${0.03 + 0.06 * hash(i, 6, seed)})`; c.fillRect(hash(i, 7, seed) * 128, 0, 1 + 5 * hash(i, 8, seed), 64); }
}, 4);

// ══ THE CONTRACT ══
export const CT = { W: 620, D: 800, T: 1.1 } as const;
/** the tear: the page x of the tear line at page y (a wandering line between the parties, jagged at every scale) */
export const tearX = (py: number) => 312 + 12 * Math.sin(py / 97 + 0.6) + 5 * Math.sin(py / 31) + 2.2 * Math.sin(py / 9.3 + 1.1)
  + 1.4 * (hash(Math.round(py / 2), 3, 9) - 0.5) * 2;
/** where the readable print sits on the contract (page px) */
export const KPRINT = {
  title: [60, 58, 560, 140] as const,
  left: [60, 222, 262, 330] as const,
  right: [362, 250, 562, 304] as const,
};
const paintContract = () => paintTex("law39-contract-v2", CT.W, CT.D, (c) => {
  const W = CT.W, D = CT.D;
  c.fillStyle = "#FCFAF5"; c.fillRect(0, 0, W, D);
  fibres(c, W, D, 8);
  c.fillStyle = INK; c.textAlign = "center"; c.textBaseline = "alphabetic";
  track(c, 2);
  const s0 = fitFont(c, 800, 34, "PROMOTIONAL & BROADCAST", 500);
  c.fillText("PROMOTIONAL & BROADCAST", W / 2, 82 + s0 * 0.36);
  track(c, 8);
  const s1 = fitFont(c, 800, 34, "AGREEMENT", 300);
  c.fillText("AGREEMENT", W / 2 + 4, 124 + s1 * 0.36);
  track(c, 0);
  c.fillRect(60, 152, W - 120, 1.6);
  track(c, 6);
  c.fillStyle = "rgba(30,24,20,0.7)";
  const s2 = fitFont(c, 600, 15, "BETWEEN", 120);
  c.fillText("BETWEEN", W / 2 + 3, 186 + s2 * 0.36);
  track(c, 0);
  // the parties, in plain type: DAZN and GOLDEN BOY on the left, ÁLVAREZ on the right (the tear runs between them)
  c.fillStyle = INK;
  const lx = 161, rx = 462;
  const s3 = fitFont(c, 800, 60, "DAZN", 200);
  c.fillText("DAZN", lx, 252 + s3 * 0.36);
  const s4 = fitFont(c, 800, 34, "GOLDEN BOY", 200);
  c.fillText("GOLDEN BOY", lx, 312 + s4 * 0.36);
  const s5 = fitFont(c, 800, 46, "ÁLVAREZ", 200);
  c.fillText("ÁLVAREZ", rx, 278 + s5 * 0.36);
  // the signature lines, a name line under each
  c.fillRect(70, 372, 184, 1.3); c.fillRect(370, 372, 184, 1.3);
  c.fillStyle = "rgba(30,24,20,0.4)";
  rr(c, 70, 382, 110, 4.5, 2.2); c.fill(); rr(c, 370, 382, 110, 4.5, 2.2); c.fill();
  // the terms (greeked)
  c.fillStyle = "rgba(30,24,20,0.75)"; c.textAlign = "left";
  track(c, 5);
  const s6 = fitFont(c, 700, 15, "TERMS", 100);
  c.fillText("TERMS", 60, 440 + s6 * 0.36);
  track(c, 0);
  typeLines(c, 60, 466, W - 120, 6, 24, 5.5, 0.3, 2);
  typeLines(c, 60, 622, W - 120, 5, 24, 5.5, 0.3, 5);
  c.fillStyle = "rgba(30,24,20,0.35)"; rr(c, W / 2 - 24, D - 30, 48, 4.5, 2.2); c.fill();
}, 3);


/** the torn edge (transparent elsewhere): on the left half a white fibrous lip of exposed paper with loose fibres, on the
 *  right half a thin darker line where the fibres were cut */
const paintTearBand = () => paintTex("law39-tearband-v1", CT.W, CT.D, (c) => {
  c.clearRect(0, 0, CT.W, CT.D);
  for (let py = 0; py <= CT.D; py += 0.5) {
    const x = tearX(py), w = 1.4 + 2.4 * (0.5 + 0.5 * Math.sin(py / 13 + 2 * hash(Math.round(py / 7), 1, 4))) + 1.2 * hash(Math.round(py), 2, 4);
    c.fillStyle = "rgba(255,255,255,0.94)"; c.fillRect(x - w, py, w, 0.6);
    c.fillStyle = "rgba(150,135,110,0.22)"; c.fillRect(x - w - 0.7, py, 0.7, 0.6);
    c.fillStyle = "rgba(120,108,90,0.42)"; c.fillRect(x, py, 0.6, 0.6);
  }
  c.lineCap = "round";
  for (let i = 0; i < 1400; i++) {
    const py = hash(i, 1, 5) * CT.D, x = tearX(py) - 0.4, a = Math.PI + (hash(i, 2, 5) - 0.5) * 1.9, L = 1.5 + 5.5 * hash(i, 3, 5);
    c.strokeStyle = `rgba(255,255,255,${0.6 + 0.4 * hash(i, 4, 5)})`; c.lineWidth = 0.3 + 0.35 * hash(i, 5, 5);
    c.beginPath(); c.moveTo(x, py); c.lineTo(x + Math.cos(a) * L, py + Math.sin(a) * L); c.stroke();
  }
}, 3);

// ══ A SHEET THAT BENDS: a fine grid between two edges per row (so a torn edge is the tear's own line), top and bottom
//    surfaces `t` apart, a wall all round; `shape(disp)` lifts it (page px → px up) ══
type Grid = { mesh: THREE.Mesh; shape: (disp: (px: number, py: number, top: boolean) => number) => void };
const gridSheet = (rows: number[], xa: (py: number) => number, xb: (py: number) => number, cols: number, W: number, D: number, t: number,
  mats: [THREE.Material, THREE.Material]): Grid => {
  const R = rows.length, N = cols;
  const PX: number[] = [], PY: number[] = [], TOP: number[] = [], UV: number[] = [];
  const push = (px: number, py: number, top: number, uv: boolean) => { PX.push(px); PY.push(py); TOP.push(top); UV.push(uv ? px / W : 0, uv ? 1 - py / D : 0); };
  for (const top of [1, 0]) for (let j = 0; j < R; j++) { const a = xa(rows[j]), b = xb(rows[j]); for (let i = 0; i <= N; i++) push(a + ((b - a) * i) / N, rows[j], top, true); }
  const id = (top: number, j: number, i: number) => (top ? 0 : R * (N + 1)) + j * (N + 1) + i;
  const I0: number[] = [], I1: number[] = [];
  for (let j = 0; j < R - 1; j++) for (let i = 0; i < N; i++) {
    const a = id(1, j, i), b = id(1, j, i + 1), c = id(1, j + 1, i), d = id(1, j + 1, i + 1);
    I0.push(a, c, b, b, c, d);
    const a2 = id(0, j, i), b2 = id(0, j, i + 1), c2 = id(0, j + 1, i), d2 = id(0, j + 1, i + 1);
    I0.push(a2, b2, c2, b2, d2, c2);
  }
  const loop: [number, number][] = [];
  for (let i = 0; i <= N; i++) loop.push([0, i]);
  for (let j = 1; j < R; j++) loop.push([j, N]);
  for (let i = N - 1; i >= 0; i--) loop.push([R - 1, i]);
  for (let j = R - 2; j >= 1; j--) loop.push([j, 0]);
  const base = PX.length;
  for (const [j, i] of loop) { const v = id(1, j, i); push(PX[v], PY[v], 1, false); push(PX[v], PY[v], 0, false); }
  for (let k = 0; k < loop.length; k++) { const p = base + 2 * k, q = base + 2 * ((k + 1) % loop.length); I1.push(p, q, q + 1, p, q + 1, p + 1); }
  const g = new THREE.BufferGeometry();
  const pos = new Float32Array(PX.length * 3);
  for (let v = 0; v < PX.length; v++) { pos[3 * v] = PX[v] - W / 2; pos[3 * v + 2] = PY[v] - D / 2; }
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(UV, 2));
  g.setIndex([...I0, ...I1]);
  g.addGroup(0, I0.length, 0); g.addGroup(I0.length, I1.length, 1);
  const m = mesh(g, mats);
  const shape = (disp: (px: number, py: number, top: boolean) => number) => {
    for (let v = 0; v < PX.length; v++) pos[3 * v + 1] = disp(PX[v], PY[v], TOP[v] === 1) + (TOP[v] ? t : 0);
    g.attributes.position.needsUpdate = true;
    g.computeVertexNormals(); g.computeBoundingBox(); g.computeBoundingSphere();
  };
  shape(() => 0);
  return { mesh: m, shape };
};

const smooth = (a: number, b: number, x: number) => { const u = Math.max(0, Math.min(1, (x - a) / (b - a))); return u * u * (3 - 2 * u); };
/** a sheet's gentle unevenness (0 … 0.7 px): never perfectly flat */
const WAVE_MAX = 0.7;
const wave = (px: number, py: number) => 0.35 + 0.35 * Math.sin(px / 140 + 0.7) * Math.sin(py / 170 + 0.3);
/** a torn half's lift: its torn edge curls up toward the far end (where the tear began) and its far outer corner lifts; both
 *  grow with `curl`. ★ Nothing lifts below page y 380, where the envelope comes to rest on the halves. */
const halfDisp = (side: -1 | 1, curl: number) => (px: number, py: number) => {
  const e = side < 0 ? tearX(py) - px : px - tearX(py);
  const edge = 5.5 * (1 - smooth(110, 380, py)) * Math.max(0, 1 - e / 80) ** 2;
  const d = Math.hypot(px - (side < 0 ? 0 : CT.W), py);
  const corner = 3.5 * Math.max(0, 1 - d / 170) ** 2;
  return wave(px, py) + curl * (edge + corner);
};
/** the near end of the tear (where the halves stay joined longest): the pivot they turn apart about (page-centred) */
export const PIVOT = { x: tearX(CT.D) - CT.W / 2, z: CT.D / 2 } as const;

// ══ THE ENVELOPE ══
/** the envelope: size, edge thickness, its puff (px at the middle), its rest (contract-local x, z: over the TERMS), turn (deg) */
export const EN = { W: 640, D: 290, T: 1.4, P: 6.5, x: 10, z: 200, yaw: -3 } as const;
/** its underside rests here: on the halves' highest unevenness, never into them */
export const ENV_BASE = CT.T + WAVE_MAX + 0.3;
/** the top flap's outline (envelope px from its top-left): hinged along the far edge, its point toward the viewer */
const FLAP: [number, number][] = [[3, 3], [637, 3], [374, 168], [342, 184], [320, 188], [298, 184], [266, 168]];
const inPoly = (x: number, y: number, P: [number, number][]) => {
  let inside = false;
  for (let i = 0, j = P.length - 1; i < P.length; j = i++) {
    const [xi, yi] = P[i], [xj, yj] = P[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};
const distPoly = (x: number, y: number, P: [number, number][]) => {
  let m = 1e9;
  for (let i = 0, j = P.length - 1; i < P.length; j = i++) {
    const [ax, ay] = P[j], [bx, by] = P[i], dx = bx - ax, dy = by - ay;
    const u = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy)));
    m = Math.min(m, Math.hypot(x - ax - u * dx, y - ay - u * dy));
  }
  return m;
};
const KRAFT = "#C3955A";
const paintEnvelope = () => paintTex("law39-envelope-v3", EN.W, EN.D, (c) => {
  const W = EN.W, D = EN.D;
  c.fillStyle = KRAFT; c.fillRect(0, 0, W, D);
  // mottling: the kraft's uneven pulp, then its fibres (light and dark, mostly along the machine direction)
  for (let i = 0; i < 70; i++) {
    const x = hash(i, 1, 12) * W, y = hash(i, 2, 12) * D, r = 20 + 70 * hash(i, 3, 12);
    const gr = c.createRadialGradient(x, y, 0, x, y, r);
    const dark = hash(i, 4, 12) > 0.5;
    gr.addColorStop(0, dark ? `rgba(120,80,35,${0.05 + 0.06 * hash(i, 5, 12)})` : `rgba(240,205,150,${0.05 + 0.07 * hash(i, 5, 12)})`);
    gr.addColorStop(1, "rgba(0,0,0,0)");
    c.fillStyle = gr; c.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  c.lineCap = "round";
  for (let i = 0; i < 2600; i++) {
    const x = hash(i, 1, 13) * W, y = hash(i, 2, 13) * D, a = (hash(i, 3, 13) - 0.5) * 1.1, L = 2 + 9 * hash(i, 4, 13);
    c.strokeStyle = hash(i, 5, 13) > 0.55 ? `rgba(95,60,25,${0.08 + 0.14 * hash(i, 6, 13)})` : `rgba(245,215,165,${0.08 + 0.16 * hash(i, 6, 13)})`;
    c.lineWidth = 0.3 + 0.6 * hash(i, 7, 13);
    c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(a) * L, y + Math.sin(a) * L); c.stroke();
  }
  // the side flaps' creases and the bottom flap's edge (its overlap throws a soft shadow), with a light lip above
  const bottom = () => { c.beginPath(); c.moveTo(5, D - 5); c.lineTo(248, 152); c.quadraticCurveTo(320, 122, 392, 152); c.lineTo(W - 5, D - 5); };
  c.save(); c.translate(0, 3); bottom(); c.strokeStyle = "rgba(70,42,15,0.2)"; c.lineWidth = 6; c.stroke(); c.restore();
  bottom(); c.strokeStyle = "rgba(80,50,20,0.55)"; c.lineWidth = 1.2; c.stroke();
  c.save(); c.translate(0, -1.3); bottom(); c.strokeStyle = "rgba(250,225,185,0.35)"; c.lineWidth = 1; c.stroke(); c.restore();
  for (const [x0, x1] of [[4, 120], [W - 4, W - 120]] as const) { c.strokeStyle = "rgba(90,58,25,0.18)"; c.lineWidth = 1; c.beginPath(); c.moveTo(x0, 6); c.quadraticCurveTo((x0 + x1) / 2, 90, x0 + (x1 - x0) * 0.15, D - 10); c.stroke(); }
  // the top flap: its shadow on the body, its glue line (a darker, denser band just inside its edge), its lit edge
  const flap = () => { c.beginPath(); FLAP.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.closePath(); };
  c.save(); c.translate(1.5, 4); flap(); c.fillStyle = "rgba(60,35,12,0.22)"; c.fill(); c.restore();
  c.save(); flap(); c.clip();
  c.fillStyle = KRAFT; c.fillRect(0, 0, W, D);
  for (let i = 0; i < 1400; i++) {
    const x = hash(i, 1, 14) * W, y = hash(i, 2, 14) * 190, a = (hash(i, 3, 14) - 0.5) * 1.1, L = 2 + 9 * hash(i, 4, 14);
    c.strokeStyle = hash(i, 5, 14) > 0.55 ? `rgba(95,60,25,${0.08 + 0.14 * hash(i, 6, 14)})` : `rgba(245,215,165,${0.08 + 0.16 * hash(i, 6, 14)})`;
    c.lineWidth = 0.3 + 0.6 * hash(i, 7, 14);
    c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(a) * L, y + Math.sin(a) * L); c.stroke();
  }
  c.fillStyle = "rgba(240,210,160,0.08)"; c.fillRect(0, 0, W, D);
  c.restore();
  c.save(); flap(); c.clip(); flap(); c.strokeStyle = "rgba(105,66,28,0.28)"; c.lineWidth = 16; c.stroke(); c.restore();
  flap(); c.strokeStyle = "rgba(85,52,20,0.6)"; c.lineWidth = 1.1; c.stroke();
  c.save(); c.translate(-0.8, -1.2); flap(); c.strokeStyle = "rgba(252,228,190,0.4)"; c.lineWidth = 0.9; c.stroke(); c.restore();
  // worn corners: the kraft rubbed lighter
  for (const [x, y] of [[0, 0], [W, 0], [0, D], [W, D]] as const) {
    const gr = c.createRadialGradient(x, y, 0, x, y, 26);
    gr.addColorStop(0, "rgba(235,205,160,0.45)"); gr.addColorStop(1, "rgba(235,205,160,0)");
    c.fillStyle = gr; c.fillRect(x - 26, y - 26, 52, 52);
  }
}, 3);
/** the envelope's top: puffed by its contents (flat at the sealed edges), the flap a hair proud along its edge */
const envDisp = (px: number, py: number, top: boolean) => {
  if (!top) return 0;
  const u = px / EN.W, v = py / EN.D;
  const puff = EN.P * Math.sin(Math.PI * u) ** 0.45 * Math.sin(Math.PI * v) ** 0.7;
  const flap = inPoly(px, py, FLAP) ? 0.55 * Math.min(1, distPoly(px, py, FLAP) / 4) : 0;
  return puff + flap;
};

/** stack: the bundle's offset (dx, lift, dz) and its tilt (rad, far edge up, about its near bottom edge), or null (not yet in);
 *  phi: the halves' turn apart (rad); sep: their slide apart (px each); front: the page y the tear has run to (< 0: not
 *  torn); curl: how far the torn edges have curled (0 … 1); env: the envelope's x offset, or null */
export type LawP = { stack: { dx: number; h: number; dz: number; tilt: number } | null; phi: number; sep: number; front: number; curl: number; env: number | null };

export const lawsuitModel = () => (): Model<LawP> => {
  const root = new THREE.Group();
  const table = new THREE.Group();
  table.position.y = -LG.floor;
  root.add(table);
  const grainP = grainTex("law39-grain-paper", false, 1, 1);

  // ══ THE COMPLAINT ══
  const stack = new THREE.Group();
  stack.userData.obj = "complaint";
  table.add(stack);
  const inner = new THREE.Group();
  inner.position.z = -CP.D / 2;   // the stack's pivot is its near bottom edge
  stack.add(inner);
  const zF = -CP.D / 2;
  {
    const faceG = grainP.clone(); faceG.repeat.set(4, 5); faceG.needsUpdate = true;
    // the three signatures
    SIGS.forEach((s, i) => {
      const edgeM = new THREE.MeshStandardMaterial({ map: paintEdges(i + 1), roughness: 0.93, envMapIntensity: 0.3 });
      const topM = paperM({ color: "#F6F3EC", grain: faceG });
      const blk = rbox(CP.W, s.h, CP.D, 1.6, { px: edgeM, nx: edgeM, top: topM, bottom: topM, front: edgeM, back: edgeM }, 3);
      const y0 = i ? SIG_TOPS[i - 1] + 0.2 : 0;
      blk.position.set(s.dx, y0 + s.h / 2, CP.D / 2 + s.dz);
      blk.rotation.y = s.yaw;
      inner.add(blk);
    });
    // the loose sheets, fanned on the clip at the head
    for (let i = 0; i < FAN; i++) {
      const tone = ["#F8F6F0", "#F4F1EA", "#FAF8F3", "#F2EFE7"][i % 4];
      const sm = paperM({ color: tone, grain: faceG }), se = new THREE.MeshStandardMaterial({ color: col(tone), roughness: 0.92, envMapIntensity: 0.3 });
      const sh = rbox(CP.W, CP.T, CP.D, 0.42, { px: se, nx: se, top: sm, bottom: se, front: se, back: se }, 1);
      const a = fanYaw(i);
      sh.geometry.translate(0, 0, CP.D / 2);
      sh.position.set((CP.D / 2) * Math.sin(a), BLOCK + CP.GAP + i * (CP.T + CP.GAP) + CP.T / 2, zF + (CP.D / 2) * Math.cos(a));
      sh.rotation.y = a;
      inner.add(sh);
    }
    const top = paper({ w: CP.W, h: CP.D, t: CP.T, face: paperM({ map: paintComplaint(), grain: faceG }), back: M.paper("#F4F1EA"), edge: M.paper("#EAE5D8"), bow: 0.8,
      curls: [{ corner: "br", r: 150, lift: 5 }], seg: 56 });
    top.rotation.x = -Math.PI / 2;
    const tp = new THREE.Group();
    tp.add(top);
    tp.position.set((CP.D / 2) * Math.sin(TOP_YAW), LOOSE_TOP + CP.GAP + CP.T, zF + (CP.D / 2) * Math.cos(TOP_YAW));
    tp.rotation.y = TOP_YAW;
    inner.add(tp);
  }
  // ══ THE BINDER CLIP at the head: black enamelled spring steel, the jaw sloping onto the page to its rolled channel, a bright
  //    steel wire handle hooked in the channel and folded flat over the page (the other jaw is inside the bundle) ══
  {
    const enamel = new THREE.MeshPhysicalMaterial({ color: col("#121315"), metalness: 0.55, roughness: 0.3, clearcoat: 0.8, clearcoatRoughness: 0.18, envMapIntensity: 0.9 });
    const steel = M.steel("#D6DADF");
    const CW = 130, JD = 44, PL = 1.6, top0 = STACK_H + 0.8;
    const Yb = SIG_TOPS[1] + 3, Yt = STACK_H + 10, tipY = top0 + 1.1 + 2.4, zs = zF - 2.4, zt = zF + JD;
    const plate = (len: number) => { const m = rbox(CW, PL, len, 0.7, enamel, 2); m.geometry.translate(0, 0, len / 2); return m; };
    const spine = rbox(CW, Yt - Yb, PL, 0.7, enamel, 2);
    spine.geometry.translate(0, 0, PL / 2);
    spine.position.set(0, (Yt + Yb) / 2, zs);
    inner.add(spine);
    const dz = zt - zs, dy = tipY - Yt, L = Math.hypot(dz, dy);
    const jaw = plate(L);
    jaw.position.set(0, (Yt + tipY) / 2, (zs + zt) / 2);
    jaw.rotation.x = Math.atan2(-dy, dz);
    inner.add(jaw);
    const low = plate(JD + 2.4);
    low.position.set(0, Yb, (zs + zt) / 2);
    inner.add(low);
    const chan = mesh(new THREE.CylinderGeometry(2.4, 2.4, CW + 2, 24), enamel);
    chan.rotation.z = Math.PI / 2; chan.position.set(0, tipY, zt);
    inner.add(chan);
    const yw = top0 + 1.25 + 0.4, hx = CW / 2 - 4;
    const handle = wire([[-hx, tipY, zt], [-hx + 2, yw + 0.8, zt + 10], [-hx + 6, yw, zt + 30], [-hx + 10, yw, zt + 70], [-hx + 26, yw, zt + 82],
      [hx - 26, yw, zt + 82], [hx - 10, yw, zt + 70], [hx - 6, yw, zt + 30], [hx - 2, yw + 0.8, zt + 10], [hx, tipY, zt]], 1.25, steel, false, 96);
    inner.add(handle);
  }

  // ══ THE CONTRACT: two halves (one sheet until the tear starts), their face a live print the tear's lip is drawn into ══
  const contract = new THREE.Group();
  contract.position.set(LG.contract.x, 0, LG.contract.z);
  table.add(contract);
  const live = liveTex(CT.W, CT.D, 3);
  const kG = grainP.clone(); kG.repeat.set(3.6, 4.6); kG.needsUpdate = true;
  const faceM = paperM({ map: live.tex, grain: kG });
  const tornE = new THREE.MeshStandardMaterial({ color: col("#FFFFFF"), roughness: 0.95, envMapIntensity: 0.3, side: THREE.DoubleSide });
  const rows: number[] = [];
  for (let py = 0; py <= CT.D; py += 2) rows.push(py);
  const halves = ([-1, 1] as const).map((side) => {
    const h = new THREE.Group();
    h.userData.obj = "contract";
    const gs = gridSheet(rows, side < 0 ? () => 0 : tearX, side < 0 ? tearX : () => CT.W, 28, CT.W, CT.D, CT.T, [faceM, tornE]);
    gs.mesh.position.set(-PIVOT.x, 0, -PIVOT.z);
    h.add(gs.mesh);
    contract.add(h);
    return { h, gs, side };
  });
  let lastCurl = -1, lastFront = -2, lastReady = false;
  const paintFace = (front: number) => live.paint((g) => {
    g.drawImage(paintContract().image as HTMLCanvasElement, 0, 0, CT.W, CT.D);
    if (front < 0) return;
    g.save(); g.beginPath(); g.rect(0, 0, CT.W, front); g.clip();
    g.drawImage(paintTearBand().image as HTMLCanvasElement, 0, 0, CT.W, CT.D);
    g.restore();
  });

  // ══ THE ENVELOPE ══
  const env = new THREE.Group();
  env.userData.obj = "envelope";
  contract.add(env);
  {
    const eG = grainTex("law39-grain-kraft", true, 2.5, 1.2);
    const face = paperM({ map: paintEnvelope(), grain: eG, bump: 0.9, rough: 0.9, sheen: "#F2D9B0" });
    const edge = new THREE.MeshStandardMaterial({ color: col("#B8894F"), roughness: 0.92, envMapIntensity: 0.3, side: THREE.DoubleSide });
    const er: number[] = [];
    for (let py = 0; py <= EN.D; py += 4) er.push(py);
    if (er[er.length - 1] !== EN.D) er.push(EN.D);
    const gs = gridSheet(er, () => 0, () => EN.W, 128, EN.W, EN.D, EN.T, [face, edge]);
    gs.shape(envDisp);
    env.add(gs.mesh);
  }

  // ══ THE TABLE: soft shadows on the cream ground ══
  root.add(makeFloor({ y: LG.floor, x0: -700, x1: 3100, z0: -900, z1: 900, reflect: 0, shadow: 0.42, fadeC: [1190, 0], fadeR: [1800, 760] }));

  return {
    root,
    update: (p) => {
      stack.visible = !!p.stack;
      if (p.stack) { stack.position.set(LG.stack.x + p.stack.dx, p.stack.h, LG.stack.z + CP.D / 2 + p.stack.dz); stack.rotation.x = p.stack.tilt; }
      const ready = fontsReady();
      if (p.front !== lastFront || ready !== lastReady) { paintFace(p.front); lastFront = p.front; lastReady = ready; }
      if (p.curl !== lastCurl) { for (const hv of halves) hv.gs.shape(halfDisp(hv.side, p.curl)); lastCurl = p.curl; }
      for (const { h, side } of halves) {
        h.position.set(PIVOT.x + side * p.sep, 0, PIVOT.z);
        h.rotation.y = -side * p.phi;
      }
      env.visible = p.env !== null;
      env.position.set(EN.x + (p.env ?? 0), ENV_BASE, EN.z);
      env.rotation.y = rad(EN.yaw);
    },
  };
};
