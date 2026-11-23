// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE DEAL IN 3-D (039) — "The deal, with the streaming service DAZN and his promoter Golden Boy, 11 fights over five years,
// worth at least $365 million." On the dark ground, on a desk (the floor), two real things:
//   · THE CONTRACT (the film's document visual for the deal): a thick, spine-bound agreement on a legal-blue backing card,
//     its page block's cut edges striped by the sheets, a black cloth tape along the glued spine. Its title page is a real
//     sheet that TURNS: it peels from its free edge round a travelling roll, sweeps over the spine and lies down on the desk
//     to the left (its back face up, the print showing faintly through). Title page: the two parties as plain type, DAZN and
//     GOLDEN BOY, over PROMOTIONAL & BROADCAST AGREEMENT. Under it, the key-terms page: 11 FIGHTS, 5 YEARS, AT LEAST
//     $365,000,000 in heavy type over ruled rows, and a signature line that a black lacquer fountain pen signs (the ink drawn
//     on as the nib moves).
//   · THE PEN: black lacquer, gold trim, a two-tone nib (the same build as 038's).
// Units are layer px (y up from the desk, z toward the viewer).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, liveTex, rr, fontsReady, type Model } from "../stage";
import { rbox, rad, col, fitFont, track, hash, wire, M, typeLines } from "../kit029";

const INK = "#1C1A1E";
const PAGE_BG = "#F6F2E8";

/** the place's layout (desk-local) */
export const DG = { floor: 1500, pivot: { x: 540, z: 0 }, doc: { x: 540, z: 0 } } as const;

/** the contract: page W (across, x) × D (down the page, z), the page block's thickness T, the backing card's */
export const PG = { W: 480, D: 620, T: 14, BACK: 2.4, BX: 8, BTOP: 26 } as const;
/** the block's top, the terms page on it, and the title page's mid-surface (its front 0.3 above, its back 0.3 below) */
export const Y_BLOCK = PG.BACK + PG.T;
export const Y_TERMS = Y_BLOCK + 0.3;
export const Y_COVER = Y_BLOCK + 1.1;

// ══ THE TITLE PAGE'S TURN ══
// The page's profile across its width is a curve of arc length s from the spine (s = 0 … W), written by its angle θ(s); its
// points are the integral of (cos θ, sin θ), so the sheet never stretches.
//   phase A (u 0 … 0.68): a roll of radius R travels from the free edge to the spine; past the roll line the sheet wraps
//     round it and runs back, face down, at 2R over the page (θ = clamp((s − xc) / R, 0, π));
//   phase B (u 0.68 … 1): the turned sheet lays itself down to the left: θ blends from the roll's last shape to the resting
//     drape (flat over the spine for DIP0 px, then a smooth dip of DIPL px down to the desk).
export const ROLL_R = 30;
export const NS = 96;
const SPLIT = 0.68;
const DIP0 = 13, DIPL = 74;
const REST_Y = 0.55;   // the turned page's mid-surface on the desk
const bump = (t: number) => (t <= 0 || t >= 1 ? 0 : Math.sin(Math.PI * t) ** 2);
const restTheta = (beta: number) => (s: number) => Math.PI + beta * bump((s - DIP0) / DIPL);
const integrate = (th: (s: number) => number) => {
  const X = [0], Y = [0], ds = PG.W / NS;
  for (let i = 1; i <= NS; i++) {
    const t = th((i - 0.5) * ds);
    X.push(X[i - 1] + Math.cos(t) * ds);
    Y.push(Y[i - 1] + Math.sin(t) * ds);
  }
  return { X, Y };
};
/** the dip's angle that lands the sheet on the desk (bisection) */
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
/** the title page's profile at turn u ∈ [0, 1]: X (from the spine, +x over the page) and Y (from its resting mid-surface) */
export const coverProfile = (u: number) => {
  if (u <= SPLIT) {
    const xc = PG.W * (1 - u / SPLIT);
    return integrate(thetaA(xc));
  }
  const v = (u - SPLIT) / (1 - SPLIT), a = thetaA(0), b = restTheta(BETA);
  return integrate((s) => (1 - v) * a(s) + v * b(s));
};
// ★ the turn never passes through the contract or the desk: over the block (x ≥ −1) the sheet's underside stays above the
//   terms page; over the backing card's lip (x −PG.BX … 0) above it; and everywhere above the desk
for (let k = 0; k <= 200; k++) {
  const { X, Y } = coverProfile(k / 200);
  for (let i = 0; i <= NS; i++) {
    const y = Y_COVER + Y[i] - 0.3, x = X[i];
    if (x > -2.5 && y < Y_TERMS + 0.2 - 1e-6) throw new Error(`deal: the title page dips into the contract at u ${k / 200}, s ${i} (y ${y.toFixed(2)})`);
    if (x <= -2.5 && x > -PG.BX - 1 && y < PG.BACK + 0.25) throw new Error(`deal: the title page cuts the backing card's lip at u ${k / 200}, s ${i}`);
    if (y < 0.2) throw new Error(`deal: the title page sinks into the desk at u ${k / 200}, s ${i} (y ${y.toFixed(2)})`);
  }
}

/** where print sits (page px from the page's top-left: px from the spine, py from the far edge) */
export const TPRINT = { marks: [66, 124] as const, title: [204, 246] as const } as const;
export const RPRINT = { row1: 150, row2: 272, row3: [376, 446] as const, sig: [70, 552, 300] as const } as const;
/** page px on the terms page → desk-local (the contract at rest) */
export const onPage = (px: number, py: number) => ({ x: DG.doc.x - PG.W / 2 + px, y: Y_TERMS, z: DG.doc.z - PG.D / 2 + py });

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

const fibre = (c: CanvasRenderingContext2D, seed: number) => {
  c.fillStyle = PAGE_BG; c.fillRect(0, 0, PG.W, PG.D);
  for (let i = 0; i < 180; i++) { c.fillStyle = `rgba(120,100,70,${0.022 + 0.03 * hash(i, 5, seed)})`; c.fillRect(hash(i, 1, seed) * PG.W, hash(i, 2, seed) * PG.D, 2 + 6 * hash(i, 3, seed), 0.7); }
};
const folio = (c: CanvasRenderingContext2D) => { c.fillStyle = "rgba(28,26,30,0.35)"; rr(c, PG.W / 2 - 10, PG.D - 34, 20, 4.2, 2.1); c.fill(); };

/** the title page's print (also its show-through on the back) */
const drawTitle = (c: CanvasRenderingContext2D) => {
  const W = PG.W;
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
  // the recitals and the opening articles (greeked, at a real 10 pt)
  typeLines(c, 54, 300, W - 108, 4, 13, 4.2, 0.32, 1);
  c.fillStyle = "rgba(28,26,30,0.6)"; rr(c, 54, 368, 110, 6, 3); c.fill();
  typeLines(c, 54, 388, W - 108, 7, 13, 4.2, 0.32, 3);
  typeLines(c, 54, 488, W - 108, 6, 13, 4.2, 0.32, 6);
  folio(c);
};
const paintCover = () => paintTex("deal39-cover-v4", PG.W, PG.D, (c) => { fibre(c, 1); drawTitle(c); }, 3);
const paintCoverBack = () => paintTex("deal39-coverback-v4", PG.W, PG.D, (c) => {
  fibre(c, 7);
  c.globalAlpha = 0.07; drawTitle(c); c.globalAlpha = 1;
}, 2);
const paintTerms = () => paintTex("deal39-terms-v2", PG.W, PG.D, (c) => {
  const W = PG.W, L = 44, R = W - 44;
  fibre(c, 2);
  c.textBaseline = "alphabetic"; c.textAlign = "left";
  // the running head and the schedule's heading (greeked)
  c.fillStyle = "rgba(28,26,30,0.35)"; rr(c, L, 40, 150, 4.2, 2.1); c.fill();
  c.fillStyle = "rgba(28,26,30,0.6)"; rr(c, L, 68, 120, 6, 3); c.fill();
  const label = (y: number, w: number) => { c.fillStyle = "rgba(28,26,30,0.42)"; rr(c, L, y, w, 4.6, 2.3); c.fill(); };
  const rule = (y: number) => { c.fillStyle = "rgba(28,26,30,0.7)"; c.fillRect(L, y, R - L, 1.2); };
  rule(92);
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
  rule(484);
  // the signature block: BY, the line, the name and title under it, the date line beside it
  const [sx0, sy, sx1] = RPRINT.sig;
  c.fillStyle = "rgba(28,26,30,0.5)"; rr(c, L, sy - 10, 18, 5, 2.5); c.fill();
  c.fillStyle = INK; c.fillRect(sx0, sy, sx1 - sx0, 1.4);
  c.fillStyle = "rgba(28,26,30,0.4)";
  for (const [x, y, w] of [[sx0, sy + 14, 120], [sx0, sy + 27, 86], [sx1 + 40, sy + 14, 70]] as const) { rr(c, x, y, w, 4.2, 2.1); c.fill(); }
  c.fillStyle = INK; c.fillRect(sx1 + 40, sy, R - sx1 - 40, 1.4);
  folio(c);
}, 3);
const paintEdges = () => paintTex("deal39-edges-v1", 64, 64, (c) => {
  c.fillStyle = "#EDE7DA"; c.fillRect(0, 0, 64, 64);
  for (let i = 0; i < 64; i += 2.2) { c.fillStyle = `rgba(110,95,70,${0.1 + 0.16 * hash(i, 1, 9)})`; c.fillRect(0, i, 64, 0.75); }
}, 4);

/** docDx: the contract's x offset (its slide in); docYaw (deg); turn: the title page's turn 0 … 1; sig: the signature's
 *  progress 0 … 1; pen: the nib (desk-local) or null; yaw: the scene's turn (deg) */
export type DealP = { docDx: number; docYaw: number; turn: number; sig: number; pen: [number, number, number] | null; yaw: number };

/** the pen's lean: its axis from the nib, toward the upper right and the viewer (a right hand's pen) */
export const PEN_DIR = new THREE.Vector3(0.56, 0.5, 0.66).normalize();   // laid back toward the writer: it never hides the figure above the line
export const PEN_L = 344;

export const dealModel = () => (): Model<DealP> => {
  const root = new THREE.Group();
  const sc = new THREE.Group();
  sc.position.set(DG.pivot.x, -DG.floor, DG.pivot.z);
  root.add(sc);
  const desk = new THREE.Group();
  desk.position.set(-DG.pivot.x, 0, -DG.pivot.z);
  sc.add(desk);

  // ══ THE CONTRACT (one object for the audits: its card, block, tape and both pages) ══
  const doc = new THREE.Group();
  doc.userData.obj = "contract";
  desk.add(doc);
  const W = PG.W, D = PG.D;
  // the legal-blue backing card, a lip round the block and a deeper one beyond its head
  const blue = new THREE.MeshPhysicalMaterial({ color: col("#3E5F8E"), roughness: 0.78, metalness: 0, sheen: 0.3, sheenColor: col("#6E8DB8"), envMapIntensity: 0.4 });
  const card = rbox(W + 2 * PG.BX, PG.BACK, D + PG.BX + PG.BTOP, 0.9, blue, 2);
  card.position.set(0, PG.BACK / 2, D / 2 + PG.BX);   // rbox: its front face at z
  doc.add(card);
  // the page block: its cut edges striped by the sheets
  const edgeM = new THREE.MeshStandardMaterial({ map: paintEdges(), roughness: 0.9, envMapIntensity: 0.3 });
  const plain = new THREE.MeshStandardMaterial({ color: col("#ECE6D8"), roughness: 0.9, envMapIntensity: 0.3 });
  const blk = rbox(W, PG.T - 0.6, D, 0.8, { px: edgeM, nx: edgeM, top: plain, bottom: plain, front: edgeM, back: edgeM }, 2);
  blk.position.set(0, PG.BACK + (PG.T - 0.6) / 2, D / 2);
  doc.add(blk);
  // the black cloth tape on the glued spine (its top flush with the block's)
  const tapeM = new THREE.MeshPhysicalMaterial({ color: col("#141416"), roughness: 0.82, sheen: 0.5, sheenColor: col("#3A3B42"), envMapIntensity: 0.3 });
  const tape = rbox(2.2, PG.T, D + 2, 0.5, tapeM, 2);
  tape.position.set(-W / 2 - 1.15, PG.BACK + PG.T / 2, D / 2 + 1);
  doc.add(tape);
  // the terms page: the block's top sheet, its signature drawn live
  const termsLive = liveTex(W, D, 3);
  const termsM = new THREE.MeshStandardMaterial({ map: termsLive.tex, roughness: 0.86, envMapIntensity: 0.35 });
  const tg = new THREE.PlaneGeometry(W - 1, D - 1, 8, 8);
  tg.rotateX(-Math.PI / 2);
  const terms = mesh(tg, termsM, false, true);
  terms.position.set(0, Y_TERMS, 0);
  doc.add(terms);
  let lastSig = -1, lastFonts = false;
  const paintSig = (p: number) => termsLive.paint((g) => {
    const base = paintTerms();
    lastFonts = fontsReady();
    g.drawImage(base.image as HTMLCanvasElement, 0, 0, W, D);
    if (p <= 0) return;
    g.strokeStyle = "#1A2556"; g.lineCap = "round"; g.lineJoin = "round";
    let prev = sigAt(0);
    for (let i = 1; i <= 280; i++) {
      if (i / 280 > p) break;
      const q = sigAt(i / 280);
      g.lineWidth = 1.7 + 0.9 * Math.abs(Math.sin(i * 0.21));
      g.beginPath(); g.moveTo(prev.x, prev.y); g.lineTo(q.x, q.y); g.stroke();
      prev = q;
    }
  });

  // the title page: a front and a back surface on the turning profile, 0.6 apart
  const NZ = 6;
  const nV = (NS + 1) * (NZ + 1);
  const fP = new Float32Array(nV * 3), bP = new Float32Array(nV * 3), UV: number[] = [], I: number[] = [];
  for (let j = 0; j <= NZ; j++) for (let i = 0; i <= NS; i++) UV.push(i / NS, 1 - j / NZ);
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
  const coverM = new THREE.MeshStandardMaterial({ map: paintCover(), roughness: 0.86, envMapIntensity: 0.35, side: THREE.FrontSide });
  const backM = new THREE.MeshStandardMaterial({ map: paintCoverBack(), roughness: 0.88, envMapIntensity: 0.35, side: THREE.BackSide });
  const cover = new THREE.Group();
  cover.userData.unit = true;
  doc.add(cover);
  const fMesh = mesh(fG, coverM), bMesh = mesh(bG, backM);
  cover.add(fMesh, bMesh);
  let lastTurn = -1;
  const shapeCover = (u: number) => {
    const { X, Y } = coverProfile(u);
    // the mid-surface's normal per column, from the profile's tangent
    for (let j = 0; j <= NZ; j++) for (let i = 0; i <= NS; i++) {
      const k = j * (NS + 1) + i;
      const i0 = Math.max(0, i - 1), i1 = Math.min(NS, i + 1);
      const tx = X[i1] - X[i0], ty = Y[i1] - Y[i0], l = Math.hypot(tx, ty) || 1;
      const nx = -ty / l, ny = tx / l;
      const x = -W / 2 + X[i], y = Y_COVER + Y[i], z = -D / 2 + (D * j) / NZ;
      fP[k * 3] = x + nx * 0.3; fP[k * 3 + 1] = y + ny * 0.3; fP[k * 3 + 2] = z;
      bP[k * 3] = x - nx * 0.3; bP[k * 3 + 1] = y - ny * 0.3; bP[k * 3 + 2] = z;
    }
    for (const g of [fG, bG]) { g.attributes.position.needsUpdate = true; g.computeVertexNormals(); g.computeBoundingBox(); g.computeBoundingSphere(); }
  };
  shapeCover(0);

  // ══ THE PEN: black lacquer, gold trim, a two-tone nib; its axis along +y from the nib ══
  const pen = new THREE.Group();
  pen.userData.obj = "pen";
  desk.add(pen);
  {
    const lac = new THREE.MeshPhysicalMaterial({ color: col("#0B0B0D"), roughness: 0.18, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1 });
    const gold = M.gold("#E0B85A");
    const nibM = M.gold("#E8C878");
    const nib = mesh(lathe([[0.55, 0], [1.0, 1.2], [3.2, 10], [5.6, 22], [6.6, 26], [0, 26.2]], 32), nibM);
    pen.add(nib);
    const tip = mesh(new THREE.CircleGeometry(0.55, 16), nibM);
    tip.rotation.x = Math.PI / 2;
    pen.add(tip);
    pen.add(mesh(lathe([[0, 25.6], [7.2, 26], [8.6, 34], [9.6, 70], [10, 92], [0, 92.4]], 48), lac));
    pen.add(mesh(lathe([[9.8, 92], [11.6, 92.6], [11.8, 100], [10, 100.6], [9.8, 100.6]], 48), gold));
    pen.add(mesh(lathe([[0, 100], [11.2, 100.2], [12.4, 120], [12.6, 260], [12.2, 300], [0, 300.4]], 48), lac));
    pen.add(mesh(lathe([[12, 262], [13.4, 262.6], [13.4, 272], [12, 272.6], [11.9, 272.6]], 48), gold));
    pen.add(mesh(lathe([[0, 298], [12.4, 298.4], [11.6, 330], [8.4, 341], [0, 344]], 48), lac));
    const clip = wire([[0, 334, 12.2], [0, 330, 14.4], [0, 296, 15.4], [0, 262, 14.6], [0, 255, 13.2]], 2.2, gold, false, 32);
    clip.scale.x = 2.2;
    pen.add(clip);
  }
  pen.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), PEN_DIR);

  // ══ THE FLOOR (the desk): a faint mirror on the dark ground ══
  root.add(makeFloor({ y: DG.floor, x0: -900, x1: 2100, z0: -800, z1: 800, reflect: 0.12, shadow: 0.5, fadeC: [DG.pivot.x, 0], fadeR: [1250, 660] }));

  return {
    root,
    update: (p) => {
      sc.rotation.y = rad(p.yaw);
      doc.position.set(DG.doc.x + p.docDx, 0, DG.doc.z);
      doc.rotation.y = rad(p.docYaw);
      if (Math.abs(p.turn - lastTurn) > 1e-5) { shapeCover(p.turn); lastTurn = p.turn; }
      // a texture painted before the faces had loaded is repainted once they have
      if (!lastFonts && fontsReady()) { coverM.map = paintCover(); backM.map = paintCoverBack(); lastSig = -1; }
      if (Math.abs(p.sig - lastSig) > 1e-4 || lastSig < 0) { paintSig(p.sig); lastSig = p.sig; }
      pen.visible = !!p.pen;
      if (p.pen) pen.position.set(...p.pen);
    },
  };
};
