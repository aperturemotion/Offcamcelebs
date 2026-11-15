// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE ANNUITY IN 3-D (035) — "But 847 million is the annuity: 30 payments over 29 years. Take the money now, and the
// lottery's own figure is 363 million." On the dark ground, modelled from reference:
//   · 30 STACKS OF 1-oz GOLD BULLION COINS (the American Gold Eagle's real proportions: 32.70 mm across, 2.87 mm thick, a
//     wide raised rim, a reeded edge; a generic design, no legend: a spread eagle over a sunburst, a ring of stars, a beaded
//     border, its frosted relief rougher than the mirror field). Each payment is one stack, and the stacks GROW 5 % a year
//     as Powerball's "30 increasing payments" do: 10 coins in year 1 to 41 in year 30. A stack is real coins: every coin its
//     own rim, edge and faces, a hand-squared misalignment, a hair of air between coins.
//   · a long WALNUT LEDGER BOARD they stand on, French-polished, on brass bun feet, a brass inlay line along its front and a
//     brass year pin let into its top at every payment's place (a timeline, no figures).
//   · THE LUMP SUM: one pile of strapped $100 bundles (cash.ts), visibly smaller than the row.
// Units are the layer's px (y up). Every part rests on another with a hair of clearance; nothing pierces anything.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, type Model } from "../stage";
import { M, rbox, rad, hash } from "../kit029";
import { pile, NOTE, BUNDLE_H } from "../cash";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

// ══ THE COIN (shared with fair.ts) ═══════════════════════════════════════════════════════════════
const canvasOf = (w: number, h: number) => {
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  return { c, g: c.getContext("2d")! };
};
const texOf = (c: HTMLCanvasElement, srgb: boolean) => {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8;
  t.needsUpdate = true;
  return t;
};
/** the coin's design as a HEIGHT field (white = raised), drawn once on a 512 field (the face disc maps onto it) */
const drawRelief = (g: CanvasRenderingContext2D, S: number) => {
  const m = S / 2, U = S / 2;   // centre and the face's radius in canvas px
  g.fillStyle = "#000"; g.fillRect(0, 0, S, S);
  g.fillStyle = "#fff"; g.strokeStyle = "#fff"; g.lineCap = "round"; g.lineJoin = "round";
  // the beaded border just inside the rim
  for (let i = 0; i < 96; i++) { const a = (i / 96) * Math.PI * 2; g.beginPath(); g.arc(m + Math.cos(a) * U * 0.93, m + Math.sin(a) * U * 0.93, U * 0.022, 0, Math.PI * 2); g.fill(); }
  // a ring of 13 stars over the top
  const star = (x: number, y: number, r: number, rot: number) => {
    g.beginPath();
    for (let k = 0; k < 10; k++) { const a = rot + (k * Math.PI) / 5, rr = k % 2 ? r * 0.42 : r; const px = x + Math.cos(a) * rr, py = y + Math.sin(a) * rr; if (k === 0) g.moveTo(px, py); else g.lineTo(px, py); }
    g.closePath(); g.fill();
  };
  for (let i = 0; i < 13; i++) { const a = Math.PI * (1.12 + (0.76 * i) / 12); star(m + Math.cos(a) * U * 0.78, m + Math.sin(a) * U * 0.78, U * 0.05, a + Math.PI / 2); }
  // a greeked legend round the foot (raised blocks the size of letters: never words)
  for (let i = 0; i < 26; i++) {
    const a = Math.PI * (0.2 + (0.6 * i) / 25);
    if (i === 12 || i === 13) continue;
    g.save(); g.translate(m + Math.cos(a) * U * 0.79, m + Math.sin(a) * U * 0.79); g.rotate(a - Math.PI / 2);
    g.fillRect(-U * 0.022, -U * 0.04, U * 0.044, U * 0.08); g.restore();
  }
  // the sunburst: fine raised rays from below the eagle
  g.lineWidth = U * 0.012;
  for (let i = 0; i < 31; i++) { const a = Math.PI * (1.05 + (0.9 * i) / 30); g.globalAlpha = 0.55; g.beginPath(); g.moveTo(m, m + U * 0.32); g.lineTo(m + Math.cos(a) * U * 0.66, m + U * 0.32 + Math.sin(a) * U * 0.66); g.stroke(); }
  g.globalAlpha = 1;
  // the spread eagle: two wings of layered feathers, a body, a head with its beak, a fanned tail, talons
  const wing = (s: number) => {
    for (let row = 0; row < 3; row++) {
      for (let k = 0; k < 7; k++) {
        const t = k / 6, x0 = m + s * U * (0.08 + 0.12 * row * 0.3), y0 = m - U * 0.02 + row * U * 0.05;
        const x1 = m + s * U * (0.22 + 0.42 * t - row * 0.06), y1 = m - U * (0.36 - 0.18 * t * t) + row * U * 0.07;
        g.globalAlpha = 0.75 + 0.25 * (row === 0 ? 1 : 0);
        g.lineWidth = U * (0.05 - row * 0.01);
        g.beginPath(); g.moveTo(x0, y0); g.quadraticCurveTo((x0 + x1) / 2, Math.min(y0, y1) - U * 0.06, x1, y1); g.stroke();
      }
    }
    g.globalAlpha = 1;
  };
  wing(-1); wing(1);
  g.beginPath(); g.ellipse(m, m + U * 0.02, U * 0.1, U * 0.2, 0, 0, Math.PI * 2); g.fill();                 // body
  g.beginPath(); g.ellipse(m + U * 0.02, m - U * 0.22, U * 0.065, U * 0.075, 0.3, 0, Math.PI * 2); g.fill();  // head
  g.beginPath(); g.moveTo(m + U * 0.07, m - U * 0.24); g.lineTo(m + U * 0.13, m - U * 0.2); g.lineTo(m + U * 0.07, m - U * 0.19); g.fill();   // beak
  for (let k = -3; k <= 3; k++) { g.lineWidth = U * 0.035; g.beginPath(); g.moveTo(m, m + U * 0.18); g.lineTo(m + k * U * 0.045, m + U * 0.36); g.stroke(); }   // tail
  // the shield on its breast: a recessed chief over raised pales
  g.fillStyle = "#000"; g.fillRect(m - U * 0.06, m - U * 0.06, U * 0.12, U * 0.04);
  g.fillStyle = "#000"; for (let k = 0; k < 3; k++) g.fillRect(m - U * 0.045 + k * U * 0.035, m - U * 0.01, U * 0.012, U * 0.12);
};
/** ★ a STUDIO for the gold to mirror (an equirectangular map, three's own lon/lat): the stage's room environment lights a
 *  metal evenly from every side, and a stack of polished coins read as flat yellow. A real gold stack is modelled by what
 *  it reflects: a tall softbox at the key (front-left, high), a dark room round the rest, a thin cool strip at the rim
 *  (back-right), and the ground below (espresso on the dark places, cream on the pale ones) */
const envs = new Map<string, THREE.Texture>();
export const studioEnv = (kind: "dark" | "cream") => {
  const hit = envs.get(kind);
  if (hit) return hit;
  const W = 1024, H = 512, { c, g } = canvasOf(W, H);
  const X = (lonDeg: number) => ((lonDeg / 360 + 0.5) % 1) * W, Y = (latDeg: number) => (1 - (latDeg / 180 + 0.5)) * H;
  const dark = kind === "dark";
  // the room: dark walls above the horizon, the ground below it
  const sky = g.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, dark ? "#3a3029" : "#b8afa4"); sky.addColorStop(0.48, dark ? "#2a201a" : "#8f857a");
  sky.addColorStop(0.52, dark ? "#3d2b1f" : "#d9cfc2"); sky.addColorStop(1, dark ? "#1c140f" : "#efe7dc");
  g.fillStyle = sky; g.fillRect(0, 0, W, H);
  const box = (lon0: number, lon1: number, lat0: number, lat1: number, col: string, blur: number) => {
    g.save(); g.filter = `blur(${blur}px)`; g.fillStyle = col;
    g.fillRect(X(lon0), Y(lat1), X(lon1) - X(lon0), Y(lat0) - Y(lat1)); g.restore();
  };
  // the key's softbox (toward (−0.5, 0.75, 0.43): lon ≈ 139°, high), tall so a vertical edge catches a long band of it
  // (the eye looks down ~18°, so an upright edge mirrors the room a little BELOW the horizon: the panels reach down to −40°)
  box(108, 176, -40, 64, "#fff3dc", 14);
  box(122, 160, -32, 52, "#ffffff", 5);
  // a second, weaker fill panel front-right (it keeps the turned-away side from going black)
  box(60, 84, -36, 36, dark ? "#7a6a5b" : "#d6ccbf", 12);
  // the rim strip (toward (0.75, 0.45, −0.55): lon ≈ −36°), cool and narrow
  box(-50, -32, -30, 50, "#d4dcea", 6);
  const t = new THREE.CanvasTexture(c);
  t.mapping = THREE.EquirectangularReflectionMapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  envs.set(kind, t);
  return t;
};
const coinMatsBy = new Map<string, { face: THREE.MeshPhysicalMaterial; edge: THREE.MeshPhysicalMaterial }>();
/** the coin's two materials: its faces (colour, relief bump and a frosted-on-mirror roughness from the height field) and
 *  its rim and edge (polished, the reeding a bump only on the edge band of the lathe's v range), mirroring a studio */
export const coinMaterials = (kind: "dark" | "cream" = "dark") => {
  const hit = coinMatsBy.get(kind);
  if (hit) return hit;
  const S = 512;
  const h = canvasOf(S, S); drawRelief(h.g, S);
  // a soft copy of the height field: the relief's slopes for the bump (a hard step bumps badly)
  const hb = canvasOf(S, S); hb.g.filter = "blur(1.6px)"; hb.g.drawImage(h.c, 0, 0);
  // the colour: warm 22-carat gold, the raised work a touch paler, dirt in the recesses round it
  const col = canvasOf(S, S);
  col.g.fillStyle = "#E3B04A"; col.g.fillRect(0, 0, S, S);
  const dirt = canvasOf(S, S); dirt.g.filter = "blur(5px)"; dirt.g.drawImage(h.c, 0, 0);
  col.g.globalCompositeOperation = "multiply"; col.g.globalAlpha = 0.18;
  col.g.fillStyle = "#7A5212"; col.g.fillRect(0, 0, S, S);   // a faint overall toning
  col.g.globalAlpha = 0.35; col.g.drawImage(dirt.c, 0, 0);   // (multiplying the soft relief keeps the field bright where far from work)
  col.g.globalCompositeOperation = "screen"; col.g.globalAlpha = 0.16; col.g.drawImage(h.c, 0, 0);
  col.g.globalCompositeOperation = "source-over"; col.g.globalAlpha = 1;
  // roughness: the field a mirror (dark), the relief frosted (light)
  const rough = canvasOf(S, S);
  rough.g.fillStyle = "rgb(46,46,46)"; rough.g.fillRect(0, 0, S, S);
  rough.g.globalAlpha = 0.75; rough.g.drawImage(hb.c, 0, 0); rough.g.globalAlpha = 1;
  for (let i = 0; i < 1400; i++) { rough.g.fillStyle = `rgba(255,255,255,${0.05 + 0.08 * hash(i, 3, 1)})`; rough.g.fillRect(hash(i, 1, 1) * S, hash(i, 2, 1) * S, 1 + 3 * hash(i, 4, 1), 0.6); }   // handling marks
  const face = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#FFFFFF"), map: texOf(col.c, true), bumpMap: texOf(hb.c, false), bumpScale: 1.6,
    roughnessMap: texOf(rough.c, false), roughness: 1, metalness: 1, envMapIntensity: 1.0 });
  // the edge: 64 reeds across the canvas (×2.5 round the coin = 160, as a 1-oz coin has ~150–170), only on the edge band
  const E = canvasOf(256, 70);
  E.g.fillStyle = "#808080"; E.g.fillRect(0, 0, 256, 70);
  for (let i = 0; i < 64; i++) {
    const gr = E.g.createLinearGradient(i * 4, 0, i * 4 + 4, 0);
    gr.addColorStop(0, "#404040"); gr.addColorStop(0.5, "#E0E0E0"); gr.addColorStop(1, "#404040");
    E.g.fillStyle = gr; E.g.fillRect(i * 4, 31, 4, 8);
  }
  const et = texOf(E.c, false); et.wrapS = THREE.RepeatWrapping; et.repeat.set(2.5, 1);
  const edge = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#E9B24A"), metalness: 1, roughness: 0.24, bumpMap: et, bumpScale: 1.0, envMapIntensity: 1.0 });
  face.envMap = edge.envMap = studioEnv(kind);
  const out = { face, edge };
  coinMatsBy.set(kind, out);
  return out;
};
export type CoinGeo = { edge: THREE.BufferGeometry; top: THREE.BufferGeometry; bottom: THREE.BufferGeometry; R: number; T: number };
/** one coin, its centre on the y axis, its bottom rim at y 0: the rim and reeded edge as a lathe (7 bands: bottom field
 *  step, bottom rim, rounded corner, the EDGE, corner, top rim, top field step), the two faces as discs on the recessed field
 *  (★ 031: a lathe is never run in to r 0 — something rests on it — the field is a disc) */
export const coinGeo = (R: number, T: number, seg = 40): CoinGeo => {
  const rim = Math.max(1.6, R * 0.085), rec = Math.min(0.35, T * 0.06), c = Math.min(0.8, T * 0.12);
  const prof: [number, number][] = [[R - rim, rec], [R - rim + 0.6, 0], [R - c, 0], [R, c], [R, T - c], [R - c, T], [R - rim + 0.6, T], [R - rim, T - rec]];
  const edge = lathe(prof, seg);
  const top = new THREE.CircleGeometry(R - rim + 0.05, 28).rotateX(-Math.PI / 2).translate(0, T - rec, 0);
  const bottom = new THREE.CircleGeometry(R - rim + 0.05, 28).rotateX(Math.PI / 2).translate(0, rec, 0);
  return { edge, top, bottom, R, T };
};
/** a coin as a group (two meshes), its origin at its centre (for a coin that flies and turns) */
export const coinMesh = (cg: CoinGeo, kind: "dark" | "cream" = "dark") => {
  const m = coinMaterials(kind);
  const g = new THREE.Group();
  const faces = mergeGeometries([cg.top, cg.bottom])!;
  const a = mesh(cg.edge, m.edge), b = mesh(faces, m.face);
  a.position.y = b.position.y = -cg.T / 2;
  g.add(a, b);
  return g;
};
/** ★ A STACK of n coins as two merged meshes (every coin's edge, every coin's faces): each coin a little shifted and
 *  turned (squared by hand), a hair of air (0.25) between coins. Origin: the bottom coin's underside, on its axis. */
export const coinStack = (cg: CoinGeo, n: number, seed: number, kind: "dark" | "cream" = "dark") => {
  const edges: THREE.BufferGeometry[] = [], faces: THREE.BufferGeometry[] = [];
  const mx = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(1, 1, 1);
  for (let i = 0; i < n; i++) {
    p.set((hash(seed, i, 1) - 0.5) * 2.2, i * (cg.T + 0.25), (hash(seed, i, 2) - 0.5) * 2.2);
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), hash(seed, i, 3) * Math.PI * 2);
    mx.compose(p, q, s);
    edges.push(cg.edge.clone().applyMatrix4(mx));
    faces.push(cg.top.clone().applyMatrix4(mx), cg.bottom.clone().applyMatrix4(mx));
  }
  const m = coinMaterials(kind);
  const g = new THREE.Group();
  g.add(mesh(mergeGeometries(edges)!, m.edge), mesh(mergeGeometries(faces)!, m.face));
  return { group: g, height: n * (cg.T + 0.25) - 0.25 };
};

// ══ WALNUT AND BRASS ═════════════════════════════════════════════════════════════════════════════
let walnutT: THREE.Texture | null = null;
/** figured walnut, French-polished, its grain along u (034's register base, reused) */
export const walnutTex = () => {
  if (walnutT) return walnutT;
  const w = 1024, h = 256, { c, g } = canvasOf(w, h);
  const bg = g.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, "#5A3622"); bg.addColorStop(0.5, "#643C24"); bg.addColorStop(1, "#55331F");
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 170; i++) {
    const y0 = hash(i, 4, 1) * h, a = 2 + 7 * hash(i, 5, 1), p = hash(i, 6, 1) * 6.28, q = hash(i, 7, 1) * 6.28;
    const dark = hash(i, 8, 1) > 0.3;
    g.strokeStyle = dark ? `rgba(28,14,7,${0.18 + 0.3 * hash(i, 9, 1)})` : `rgba(150,100,58,${0.08 + 0.14 * hash(i, 9, 1)})`;
    g.lineWidth = 0.6 + 2.2 * hash(i, 10, 1);
    g.beginPath();
    for (let x = 0; x <= w; x += 8) { const y = y0 + a * Math.sin(x / 90 + p) + 3 * Math.sin(x / 23 + q) + 9 * Math.sin(x / 400 + p * 0.5); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); }
    g.stroke();
  }
  for (let i = 0; i < 2600; i++) { g.fillStyle = "rgba(20,10,5,0.35)"; g.fillRect(hash(i, 11, 2) * w, hash(i, 12, 2) * h, 2 + 4 * hash(i, 13, 2), 0.8); }
  walnutT = texOf(c, true);
  walnutT.wrapS = walnutT.wrapT = THREE.RepeatWrapping;
  return walnutT;
};
export const walnutMat = (rx: number, ry: number) => {
  const t = walnutTex().clone(); t.needsUpdate = true; t.repeat.set(rx, ry);
  return new THREE.MeshPhysicalMaterial({ map: t, roughness: 0.38, clearcoat: 0.55, clearcoatRoughness: 0.22, envMapIntensity: 0.55 });
};

// ══ THE PLACE ════════════════════════════════════════════════════════════════════════════════════
export const AN_R = 38, AN_T = 6.6;                 // a coin: 76 px across (32.7 mm), 6.6 thick (2.87 mm)
export const AN_PITCH = 88;                          // one payment's place along the board
export const AN_N = Array.from({ length: 30 }, (_, k) => Math.round(10 * 1.05 ** k));   // 10 … 41 coins (+5 % a year)
const FOOT = 10, BOARD_T = 30, BOARD_D = 170;
export const AN_BASE = FOOT + 0.3 + BOARD_T + 0.3;   // a stack's underside above the floor
export const AN_STACK_H = AN_N.map((n) => n * (AN_T + 0.25) - 0.25);
export const AN_PILE = { nx: 2, nz: 2, n: 7, dx: 256, dz: 118 };
export const AN_PILE_H = AN_PILE.n * (BUNDLE_H + 0.3) - 0.3;

export type AnnGeo = { floor: number; x0: number; boardR: number; z: number; pileX: number };
/** dx: each stack's offset from its seat (+x: still gliding in); rock: each stack's lean on its leading edge (rad);
 *  shown: each stack in the scene yet; board: the board's (and its stacks') offset; pile: the pile's offset from its rest
 *  (+x), pileOn: the pile in the scene; yaw (deg) */
export type AnnP = { dx: number[]; rock: number[]; shown: boolean[]; board: number; boardOn: boolean; pile: number; pileOn: boolean; yaw: number };

export const annuityModel = (g: AnnGeo) => (): Model<AnnP> => {
  const root = new THREE.Group();
  // the place turns its few degrees about the lump sum's spot (a yaw about x 0 would swing the far end of the board)
  const yawG = new THREE.Group();
  yawG.position.set(g.pileX, -g.floor, g.z);
  root.add(yawG);
  const sc = new THREE.Group();
  sc.position.set(-g.pileX, 0, -g.z);
  yawG.add(sc);
  const brass = M.gold("#C99A3E");

  // ── the board: a French-polished walnut plank on brass bun feet, a brass inlay line, a year pin per payment ──
  const bx0 = g.x0 - 90, bx1 = g.boardR, BL = bx1 - bx0;
  const board = new THREE.Group(); board.userData.obj = "an-board";
  sc.add(board);
  const top = walnutMat(BL / 900, 1), side = walnutMat(BL / 900, 0.3), endM = walnutMat(0.2, 0.3);
  const plank = rbox(BL, BOARD_T, BOARD_D, 5, { px: endM, nx: endM, top, bottom: side, front: side, back: side }, 3);
  const zf = g.z + BOARD_D / 2;   // the board's front face
  plank.position.set((bx0 + bx1) / 2, FOOT + 0.3 + BOARD_T / 2, zf);
  board.add(plank);
  // the brass inlay line along the front, let in flush (a strip on the face, 0.05 proud)
  const inlay = rbox(BL - 24, 2.4, 0.8, 0.3, brass, 1);
  inlay.position.set((bx0 + bx1) / 2, FOOT + 0.3 + BOARD_T * 0.62, zf + 0.85);
  board.add(inlay);
  // the year pins: a small brass oblong let into the top at the front, at every payment's place (30 of them)
  const pinG = new THREE.CylinderGeometry(2.2, 2.2, 0.6, 16).scale(1, 1, 2.4);
  for (let k = 0; k < 30; k++) {
    const pn = mesh(pinG, brass);
    pn.position.set(g.x0 + k * AN_PITCH, FOOT + 0.3 + BOARD_T + 0.05 + 0.3, zf - 14);
    board.add(pn);
  }
  // the feet: turned brass buns, eight along the plank
  const footG = lathe([[11, 0], [15, 2], [16, 5], [14.5, 8], [12, FOOT]], 32);
  const footB = new THREE.CircleGeometry(11, 32).rotateX(Math.PI / 2), footT = new THREE.CircleGeometry(12, 32).rotateX(-Math.PI / 2).translate(0, FOOT, 0);
  const nf = 8;
  for (let i = 0; i < nf; i++) for (const fz of [-1, 1]) {
    const ft = new THREE.Group();
    ft.add(mesh(footG, brass), mesh(footB, brass), mesh(footT, brass));
    ft.position.set(bx0 + 60 + ((BL - 120) * i) / (nf - 1), 0, g.z + fz * (BOARD_D / 2 - 30));
    board.add(ft);
  }

  // ── the 30 stacks: each on a pivot at its leading (left) bottom edge, so it can lean as it stops ──
  const cg = coinGeo(AN_R, AN_T, 40);
  const pivots: THREE.Group[] = [];
  AN_N.forEach((n, k) => {
    const { group } = coinStack(cg, n, 31 + k * 7);
    group.position.x = AN_R;   // the stack's axis, from its pivot
    const pv = new THREE.Group();
    pv.add(group);
    pv.userData.obj = `an-stack${k}`;
    board.add(pv);
    pivots.push(pv);
  });

  // ── the lump sum: one pile of strapped $100 bundles (2 × 2 × 7), and the soft dark pool it slides on ──
  const pileG = new THREE.Group();
  sc.add(pileG);
  for (let i = 0; i < AN_PILE.nx; i++) for (let j = 0; j < AN_PILE.nz; j++) {
    const p = pile(`an-cash${i}${j}`, AN_PILE.n, 41 + i * 3 + j * 5, { turn: 0.025, shift: 2.5 });
    p.group.position.set((i - (AN_PILE.nx - 1) / 2) * AN_PILE.dx, 0.3, g.z + 20 + (j - (AN_PILE.nz - 1) / 2) * AN_PILE.dz);
    pileG.add(p.group);
  }
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(AN_PILE.nx * AN_PILE.dx + 160, AN_PILE.nz * AN_PILE.dz + 120), poolMat(0.55));
  pool.rotation.x = -Math.PI / 2; pool.position.set(0, 0.25, g.z + 20); pool.renderOrder = 1.5;
  pool.userData.noBounds = true; pool.userData.isFloor = true;
  pileG.add(pool);
  void NOTE;

  const floor = makeFloor({ y: g.floor, x0: -2600, x1: 6800, z0: -1500, z1: 1500, reflect: 0.14, shadow: 0.5, fadeC: [(bx0 + bx1) / 2, g.z], fadeR: [BL / 2 + 900, 1150],
    blobs: [{ x: (bx0 + bx1) / 2, z: g.z, w: BL + 60, d: BOARD_D + 70, a: 0.45 }] });
  root.add(floor);
  // the board's contact pool rides with the board (a blob of the floor's would stay behind when it slides away)
  const bpool = floor.children.find((o) => o.renderOrder === 1.5);
  if (bpool) { floor.remove(bpool); bpool.position.y = 0.25; bpool.position.x = (bx0 + bx1) / 2; bpool.userData.noBounds = true; bpool.userData.isFloor = true; sc.add(bpool); }

  return {
    root,
    update: (p) => {
      yawG.rotation.y = rad(p.yaw);
      board.visible = p.boardOn;
      board.position.x = p.board;
      if (bpool) { bpool.visible = p.boardOn; bpool.position.x = (bx0 + bx1) / 2 + p.board; }
      pivots.forEach((pv, k) => {
        pv.visible = p.shown[k];
        pv.position.set(g.x0 + k * AN_PITCH - AN_R + p.dx[k], AN_BASE, g.z);
        pv.rotation.z = p.rock[k];
      });
      pileG.visible = p.pileOn;
      pileG.position.x = g.pileX + p.pile;
    },
  };
};

let blobT: THREE.CanvasTexture | null = null;
/** a soft dark contact pool (an alpha map) for a thing that slides: it rides with it */
export const poolMat = (a: number) => {
  if (!blobT) {
    const { c, g } = canvasOf(256, 256);
    g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
    const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    gr.addColorStop(0, "#fff"); gr.addColorStop(0.45, "#b0b0b0"); gr.addColorStop(0.75, "#3a3a3a"); gr.addColorStop(1, "#000");
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    blobT = new THREE.CanvasTexture(c);
  }
  const m = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: a, toneMapped: false, color: 0x000000 });
  m.alphaMap = blobT;
  return m;
};
