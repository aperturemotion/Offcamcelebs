// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE LAWSUIT IN 3-D (039) — "That September, he sued DAZN, Golden Boy and Oscar De La Hoya for at least $280 million. By
// November, they had agreed to part ways. The terms were never made public." On the cream ground, on an unseen table (the
// floor: its soft shadows), three real things:
//   · THE COMPLAINT: a thick bundle of filed court papers (a squared block of sheets, their cut edges striped, a few loose
//     sheets fanned on top) whose top page is the complaint's first page on pleading paper: its numbered lines and ruled
//     margin, UNITED STATES DISTRICT COURT, the caption SAÚL ÁLVAREZ, Plaintiff, v. DAZN, GOLDEN BOY PROMOTIONS and OSCAR DE
//     LA HOYA, Defendants (the voice's order), COMPLAINT, and the claim DAMAGES OF AT LEAST / $280,000,000, large. It is what
//     HE filed: no court's mark, no stamp, nothing that says who was right.
//   · THE CONTRACT: the first page of the PROMOTIONAL & BROADCAST AGREEMENT, its parties set in plain type (DAZN and GOLDEN
//     BOY on the left, ÁLVAREZ on the right) over its TERMS. It TEARS in two along a wandering line between the parties: the
//     halves turn apart from the far edge (the tear running down the sheet), then slide apart on the table.
//   · THE ENVELOPE: a plain sealed kraft envelope, its back up (the flap glued down, the side and bottom flaps' seams), that
//     slides in over the torn halves' TERMS. Nothing printed on it.
// Units are layer px (y up from the table, z toward the viewer).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, rr, type Model } from "../stage";
import { M, rbox, rad, col, fitFont, track, hash, paper, typeLines, font } from "../kit029";

/** the place's layout (table-local) */
export const LG = {
  floor: 1500,
  stack: { x: 540, z: 0 },
  contract: { x: 1840, z: -40 },
} as const;

// ══ THE COMPLAINT ══
/** the bundle: page size, the squared block's height, loose sheets on it, a sheet's thickness and the gap between sheets */
export const CP = { W: 680, D: 880, BLOCK: 30, LOOSE: 4, T: 0.9, GAP: 0.25 } as const;
const LOOSE_TOP = CP.BLOCK + CP.LOOSE * (CP.T + CP.GAP);
/** the top page's underside (the print sits ~CP.T above it) */
export const STACK_H = LOOSE_TOP + CP.GAP + CP.T;
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
const paintEdges = () => paintTex("law39-edges-v1", 64, 64, (c) => {
  c.fillStyle = "#EEE9DD"; c.fillRect(0, 0, 64, 64);
  for (let i = 0; i < 64; i += 1.6) { c.fillStyle = `rgba(110,95,70,${0.08 + 0.16 * hash(i, 1, 7)})`; c.fillRect(0, i, 64, 0.6); }
}, 4);

// ══ THE CONTRACT ══
export const CT = { W: 620, D: 800, T: 1.1 } as const;
/** the tear: the page x of the tear line at page y (a wandering line between the parties, its fibres jagged) */
export const tearX = (py: number) => 312 + 12 * Math.sin(py / 97 + 0.6) + 5 * Math.sin(py / 31) + 2.4 * (hash(Math.round(py / 5), 3, 9) - 0.5) * 2;
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

// ══ THE ENVELOPE ══
/** the envelope: size, its rest (contract-local x, z: over the TERMS), its turn (deg) */
export const EN = { W: 640, D: 290, T: 3.2, x: 10, z: 200, yaw: -3 } as const;
/** the top flap's outline (envelope px from its top-left): hinged along the far edge, its point toward the viewer */
const FLAP: [number, number][] = [[2, 2], [638, 2], [372, 170], [320, 186], [268, 170]];
const KRAFT = "#C79C63";
const paintEnvelope = () => paintTex("law39-envelope-v2", EN.W, EN.D, (c) => {
  const W = EN.W, D = EN.D;
  c.fillStyle = KRAFT; c.fillRect(0, 0, W, D);
  for (let i = 0; i < 900; i++) { c.fillStyle = `rgba(${hash(i, 4, 2) > 0.5 ? "90,60,30" : "235,210,170"},${0.04 + 0.06 * hash(i, 5, 2)})`; c.fillRect(hash(i, 1, 2) * W, hash(i, 2, 2) * D, 1 + 5 * hash(i, 3, 2), 0.8); }
  // the bottom flap's edge: up from the bottom corners to a shallow shoulder, its overlap a soft shadow under it
  const bottom = () => { c.beginPath(); c.moveTo(4, D - 4); c.lineTo(250, 150); c.quadraticCurveTo(320, 120, 390, 150); c.lineTo(W - 4, D - 4); };
  c.save(); c.translate(0, 3); bottom(); c.strokeStyle = "rgba(70,45,20,0.22)"; c.lineWidth = 5; c.stroke(); c.restore();
  bottom(); c.strokeStyle = "rgba(80,52,24,0.55)"; c.lineWidth = 1.3; c.stroke();
  bottom(); c.save(); c.translate(0, -1.4); c.strokeStyle = "rgba(245,225,190,0.35)"; c.lineWidth = 1; c.stroke(); c.restore();
  // the top flap's shadow on the body (the flap itself is its own thin layer above)
  c.save(); c.translate(0, 4); c.beginPath(); FLAP.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.closePath();
  c.fillStyle = "rgba(70,45,20,0.2)"; c.fill(); c.restore();
}, 3);

/** stack: the bundle's offset (dx, lift, dz) and its tilt (rad, far edge up, about its near bottom edge), or null (not yet in);
 *  phi: the halves' turn apart (rad); sep: their slide apart (px each); env: the envelope's x offset, or null */
export type LawP = { stack: { dx: number; h: number; dz: number; tilt: number } | null; phi: number; sep: number; env: number | null };

/** the contract's halves in page px: the left one (DAZN, GOLDEN BOY) and the right one (ÁLVAREZ) */
const halfShape = (side: -1 | 1) => {
  const pts: [number, number][] = [];
  for (let py = 0; py <= CT.D; py += 4) pts.push([tearX(py), py]);
  const outline: [number, number][] = side < 0
    ? [[0, 0], ...pts, [0, CT.D]]
    : [[CT.W, 0], [CT.W, CT.D], ...pts.slice().reverse()];
  const s = new THREE.Shape();
  outline.forEach(([px, py], i) => { const x = px - CT.W / 2, y = CT.D / 2 - py; if (i) s.lineTo(x, y); else s.moveTo(x, y); });
  s.closePath();
  return s;
};
/** a flat sheet from a shape (page-centred), lying on the table, its print mapped by position */
const flatSheet = (shape: THREE.Shape, w: number, d: number, t: number, face: THREE.Material, edge: THREE.Material) => {
  const g = new THREE.ExtrudeGeometry(shape, { depth: t, bevelEnabled: false, curveSegments: 4 });
  g.rotateX(-Math.PI / 2);
  const uv = g.attributes.uv as THREE.BufferAttribute, pos = g.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) + w / 2) / w, 1 - (pos.getZ(i) + d / 2) / d);
  g.computeVertexNormals();
  return mesh(g, [face, edge]);
};
/** the near end of the tear (where the halves stay joined longest): the pivot they turn apart about (page-centred) */
export const PIVOT = { x: tearX(CT.D) - CT.W / 2, z: CT.D / 2 } as const;

export const lawsuitModel = () => (): Model<LawP> => {
  const root = new THREE.Group();
  const table = new THREE.Group();
  table.position.y = -LG.floor;
  root.add(table);

  // ══ THE COMPLAINT ══
  const stack = new THREE.Group();
  stack.userData.obj = "complaint";
  table.add(stack);
  const inner = new THREE.Group();
  inner.position.z = -CP.D / 2;   // the stack's pivot is its near bottom edge
  stack.add(inner);
  {
    const edgeM = new THREE.MeshStandardMaterial({ map: paintEdges(), roughness: 0.92, envMapIntensity: 0.3 });
    const topM = M.paper("#F6F3EC");
    const blk = rbox(CP.W, CP.BLOCK, CP.D, 1.2, { px: edgeM, nx: edgeM, top: topM, bottom: topM, front: edgeM, back: edgeM }, 2);
    blk.position.set(0, CP.BLOCK / 2, CP.D / 2);
    inner.add(blk);
    const looseM = M.paper("#F8F6F0"), looseE = M.paper("#ECE7DB");
    for (let i = 0; i < CP.LOOSE; i++) {
      const sh = rbox(CP.W, CP.T, CP.D, 0.4, { px: looseE, nx: looseE, top: looseM, bottom: looseE, front: looseE, back: looseE }, 1);
      sh.position.set((hash(i, 1, 6) - 0.5) * 9, CP.BLOCK + CP.GAP + i * (CP.T + CP.GAP) + CP.T / 2, CP.D / 2 + (hash(i, 2, 6) - 0.5) * 8);
      sh.rotation.y = (hash(i, 3, 6) - 0.5) * 0.016;
      inner.add(sh);
    }
    const top = paper({ w: CP.W, h: CP.D, t: CP.T, face: M.print(paintComplaint(), 0.86), back: M.paper("#F4F1EA"), edge: M.paper("#EAE5D8"), bow: 0.8,
      curls: [{ corner: "br", r: 150, lift: 5 }], seg: 56 });
    top.rotation.x = -Math.PI / 2;
    top.position.set(0, LOOSE_TOP + CP.GAP + CP.T, 0);
    inner.add(top);
  }

  // ══ THE CONTRACT: two halves, one sheet until they part ══
  const contract = new THREE.Group();
  contract.position.set(LG.contract.x, 0, LG.contract.z);
  table.add(contract);
  const faceM = M.print(paintContract(), 0.86);
  const tornE = M.paper("#FFFFFF");
  const halves = ([-1, 1] as const).map((side) => {
    const h = new THREE.Group();
    h.userData.obj = "contract";
    const m = flatSheet(halfShape(side), CT.W, CT.D, CT.T, faceM, tornE);
    m.position.set(-PIVOT.x, 0, -PIVOT.z);
    h.add(m);
    contract.add(h);
    return h;
  });

  // ══ THE ENVELOPE ══
  const env = new THREE.Group();
  env.userData.obj = "envelope";
  contract.add(env);
  {
    const kraft = new THREE.MeshStandardMaterial({ color: col(KRAFT), roughness: 0.9, envMapIntensity: 0.3 });
    const body = rbox(EN.W, EN.T, EN.D, 1.4, kraft, 2);
    body.position.set(0, EN.T / 2, EN.D / 2);
    env.add(body);
    const pg = new THREE.PlaneGeometry(EN.W - 2, EN.D - 2);
    pg.rotateX(-Math.PI / 2);
    const face = mesh(pg, M.print(paintEnvelope(), 0.9), false, true);
    face.position.y = EN.T + 0.05;
    env.add(face);
    const fs = new THREE.Shape();
    FLAP.forEach(([x, y], i) => { const px = x - EN.W / 2, py = EN.D / 2 - y; if (i) fs.lineTo(px, py); else fs.moveTo(px, py); });
    fs.closePath();
    const fg = new THREE.ExtrudeGeometry(fs, { depth: 0.5, bevelEnabled: true, bevelThickness: 0.2, bevelSize: 0.6, bevelOffset: -0.6, bevelSegments: 1, curveSegments: 4 });
    fg.rotateX(-Math.PI / 2);
    const flap = mesh(fg, new THREE.MeshStandardMaterial({ color: col("#CCA36B"), roughness: 0.88, envMapIntensity: 0.3 }));
    flap.position.y = EN.T + 0.15;
    env.add(flap);
  }

  // ══ THE TABLE: soft shadows on the cream ground ══
  root.add(makeFloor({ y: LG.floor, x0: -700, x1: 3100, z0: -900, z1: 900, reflect: 0, shadow: 0.42, fadeC: [1190, 0], fadeR: [1800, 760] }));

  return {
    root,
    update: (p) => {
      stack.visible = !!p.stack;
      if (p.stack) { stack.position.set(LG.stack.x + p.stack.dx, p.stack.h, LG.stack.z + CP.D / 2 + p.stack.dz); stack.rotation.x = p.stack.tilt; }
      halves.forEach((h, i) => {
        const s = i === 0 ? -1 : 1;
        h.position.set(PIVOT.x + s * p.sep, 0, PIVOT.z);
        h.rotation.y = -s * p.phi;
      });
      env.visible = p.env !== null;
      env.position.set(EN.x + (p.env ?? 0), CT.T + 0.3, EN.z);
      env.rotation.y = rad(EN.yaw);
    },
  };
};
