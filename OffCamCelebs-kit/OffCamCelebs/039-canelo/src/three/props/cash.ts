// ══════════════════════════════════════════════════════════════════════════════════════════════
// ★★★★ REAL CASH (039 round 2, Timur 2026-11-23: "the cash stacks, and the 3d visuals need to be more realistic, put more
// effort into them"). The film's ONE money module (the hook and the math place build their bundles here).
//
// A BUNDLE ("strap") is a hundred $100 notes, modelled sheet by sheet from the real thing (a note 156 × 66.3 mm, 0.1 mm thick;
// a strap of 100 ≈ 11 mm with the air between them; the strap 1¼" of mustard kraft, $10,000 of $100s):
//   · 100 NOTES, each its own thin sheet: a touch shifted and turned (counted and squared by hand), the stack bowed (the
//     strap pinches the middle, the ends puff up and fan open), every sheet's cut edge its own shade of the paper (off-white,
//     grey, the green of the print bleeding at the margins), so the sides read as a hundred edges, never a grey block;
//   · the TOP NOTE carries the real $100 face (assets/note100.jpg, the public-domain US note art), the BOTTOM NOTE the same
//     face, darker (it lies in its own shadow);
//   · the STRAP: matte mustard kraft, one loop round the middle with its glued overlap on the back, a little loose and
//     crinkled (it only ever crinkles outward), a thin printed border and its figure ("$10,000" by default; any text, or
//     none) printed along it, in the paper (a texture), never a floating label.
// PERFORMANCE: three stack variants and the materials are built once and shared; a bundle is 4 meshes (the edges and inner
// sheets as one merged geometry with vertex colours, the two faces, the strap).
// `makeBand` wraps a paper band round any stack (a brick of bundles), printed the same way.
// Units: world px, a note 240 px long (x) × 102 px wide (z); a bundle's origin is the centre of its underside.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, mesh, paintTex as paintTex0, imageOf, imagesReady, fontsReady } from "../stage";
import { hash, fitFont, track } from "../kit029";

/** a note: its length (x) and width (z), 156 × 66.3 mm */
export const NOTE = { W: 240, D: 102 } as const;
const N = 100;                 // notes in a strap
const PITCH = 0.17;            // sheet to sheet (a note and the air under it)
const SHEET = 0.16;            // a sheet's drawn thickness
const BOW = 0.6;               // the top's sag at the middle (the strap pinches it)
const PUFF = 0.08;             // the ends fan open by this fraction
const ST = 0.32;               // the strap's paper thickness
const SW = 49;                 // the strap's width (1¼" of a 6.14" note)
const CRINKLE = 0.3;           // the strap's largest crinkle, outward
const Y0 = ST + 0.08;          // the bottom note's underside
const JX = 0.7, JZ = 0.55, JYAW = 0.0035;
export const MUSTARD = "#C7A23C";

/** the underside of note i at x (note-local x) */
const yAt = (i: number, x: number) => { const u = x / (NOTE.W / 2); return Y0 + i * PITCH * (1 + PUFF * u * u) - BOW * (i / (N - 1)) * (1 - u * u); };
/** the highest paper of a bundle at |x| ≤ a (what a strap or band over it must clear) */
const notesTop = (a: number) => { let m = 0; for (let x = 0; x <= a; x += 0.5) m = Math.max(m, yAt(N - 1, x) + SHEET); return m + JYAW * NOTE.D; };
const STRAP_TOP_IN = notesTop(SW / 2 + 1) + 0.12;
const STRAP_Z_IN = NOTE.D / 2 + JZ + JYAW * NOTE.W / 2 + 0.35;
/** ★ a bundle's extent: H its height (the puffed ends' top note, or the strap's crinkled top); HX, HZ its half extents */
export const BUNDLE = (() => {
  const ends = yAt(N - 1, NOTE.W / 2) + SHEET + JYAW * NOTE.D;
  const strap = STRAP_TOP_IN + ST + CRINKLE;
  return { H: Math.max(ends, strap), HX: NOTE.W / 2 + JX + JYAW * NOTE.D / 2 + 0.2, HZ: STRAP_Z_IN + ST + CRINKLE, STRAP_W: SW,
    /** the top of the paper and strap within |x| ≤ 70 (what a band across the middle rests on) */
    TOP_MID: Math.max(notesTop(70), STRAP_TOP_IN + ST + CRINKLE) };
})();
/** a band's paper and its largest crinkle, over its top run's underside */
export const BAND_OUT = ST + CRINKLE + 0.02;
/** (the old module's name, for a place moving over) */
export const BUNDLE_H = BUNDLE.H;

// ══ TEXTURES ══
/** ★ every texture here is painted again until the note's art and the fonts have loaded (paintTex keeps a texture painted
 *  too early and repaints it only when asked): each one is remembered, and `refresh` (run before every draw of a bundle, a
 *  band or a loose note) asks again until all are final, then never again */
const repaints = new Map<string, () => void>();
let final = false;
const paintTex = (key: string, w: number, h: number, draw: (g: CanvasRenderingContext2D) => void, scale = 2) => {
  repaints.set(key, () => paintTex0(key, w, h, draw, scale));
  return paintTex0(key, w, h, draw, scale);
};
const refresh = () => {
  if (final) return;
  const ready = imagesReady() && fontsReady() && imageOf(FACE_SRC).naturalWidth > 0;
  for (const r of repaints.values()) r();
  if (ready) final = true;
};
/** run `refresh` whenever this mesh is drawn (until every texture is final) */
const refreshing = <T extends THREE.Object3D>(o: T) => { o.onBeforeRender = () => refresh(); return o; };
const FACE_SRC = "assets/note100.jpg";
/** the note's face: the real art (1200 × 505), with a whisper of paper fibre over it */
const faceTex = (dark: boolean) => paintTex(dark ? "cash39-face-dark-v1" : "cash39-face-v1", 600, 255, (g) => {
  const im = imageOf(FACE_SRC);
  if (im.complete && im.naturalWidth > 0) g.drawImage(im, 0, 0, 600, 255);
  else { g.fillStyle = "#C9D1BC"; g.fillRect(0, 0, 600, 255); }
  for (let i = 0; i < 500; i++) { g.fillStyle = `rgba(${hash(i, 1, 4) > 0.5 ? "120,140,110" : "250,250,240"},${0.04 + 0.05 * hash(i, 2, 4)})`; g.fillRect(hash(i, 3, 4) * 600, hash(i, 4, 4) * 255, 1 + 5 * hash(i, 5, 4), 0.4); }
  // handling: the corners a little greyed, a soft fold across the middle
  const fg = g.createLinearGradient(290, 0, 310, 0);
  fg.addColorStop(0, "rgba(255,255,255,0)"); fg.addColorStop(0.5, "rgba(70,80,60,0.07)"); fg.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = fg; g.fillRect(290, 0, 20, 255);
  if (dark) { g.fillStyle = "rgba(30,36,28,0.32)"; g.fillRect(0, 0, 600, 255); }
}, 2);
/** a note's back: the face's paper seen through, greener (the reverse is never read: loose notes show it in flight) */
const backTex = () => paintTex("cash39-back-v1", 300, 128, (g) => {
  const im = imageOf(FACE_SRC);
  g.save(); g.translate(300, 0); g.scale(-1, 1);
  if (im.complete && im.naturalWidth > 0) { g.globalAlpha = 0.5; g.drawImage(im, 0, 0, 300, 128); g.globalAlpha = 1; }
  g.restore();
  g.fillStyle = "rgba(150,175,140,0.55)"; g.fillRect(0, 0, 300, 128);
  g.strokeStyle = "rgba(40,70,45,0.6)"; g.lineWidth = 1; g.strokeRect(6, 6, 288, 116);
}, 2);
/** the kraft: mustard fibre, a thin printed border along both edges, `text` along the strap's length (or across its width) */
const strapTex = (key: string, len: number, w: number, text: string, top: [number, number], across: boolean) => paintTex(key, len, w, (g) => {
  g.fillStyle = MUSTARD; g.fillRect(0, 0, len, w);
  for (let i = 0; i < len * 3; i++) {
    g.fillStyle = `rgba(${hash(i, 1, 6) > 0.5 ? "110,78,18" : "245,220,140"},${0.05 + 0.09 * hash(i, 2, 6)})`;
    g.fillRect(hash(i, 3, 6) * len, hash(i, 4, 6) * w, 0.5 + 3 * hash(i, 5, 6), 0.25);
  }
  // wear: a darker scuff or two, the paper's mottling
  for (let i = 0; i < 6; i++) { g.fillStyle = `rgba(90,60,15,${0.04 + 0.04 * hash(i, 9, 6)})`; g.beginPath(); g.ellipse(hash(i, 7, 6) * len, hash(i, 8, 6) * w, 6 + 10 * hash(i, 10, 6), 2 + 3 * hash(i, 11, 6), 0, 0, Math.PI * 2); g.fill(); }
  g.fillStyle = "rgba(48,32,8,0.8)";
  g.fillRect(0, 2.2, len, 0.45); g.fillRect(0, w - 2.65, len, 0.45);
  if (!text) return;
  g.fillStyle = "#24180A"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  const [a, b] = top, mid = (a + b) / 2;
  if (across) {
    // the text runs across the band's width, centred on the top run, read from the band's front (+s side down)
    g.save(); g.translate(mid, w / 2); g.rotate(-Math.PI / 2);
    track(g, 0);
    const s = fitFont(g, 800, (b - a) * 0.34, text, w - 10);
    g.fillText(text, 0, s * 0.36);
    g.restore();
  } else {
    track(g, 0.6);
    const s = fitFont(g, 800, w * 0.42, text, (b - a) - 12);
    g.fillText(text, mid, w / 2 + s * 0.36);
  }
}, 12);

// ══ MATERIALS (shared) ══
let mats: { edge: THREE.Material; face: THREE.Material; faceDark: THREE.Material; back: THREE.Material } | null = null;
const materials = () => {
  if (mats) return mats;
  const paper = (map: THREE.Texture) => new THREE.MeshPhysicalMaterial({ map, roughness: 0.84, metalness: 0, sheen: 0.25, sheenRoughness: 0.6, sheenColor: new THREE.Color("#E8EDE0"), envMapIntensity: 0.35 });
  mats = {
    edge: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0, envMapIntensity: 0.3 }),
    face: paper(faceTex(false)), faceDark: paper(faceTex(true)), back: paper(backTex()),
  };
  return mats;
};
/** a loose note's materials: [face, back] (the face reads from +y) */
export const noteMaterials = () => { const m = materials(); return [m.face, m.back] as THREE.Material[]; };
/** a loose note's mesh: keep its art fresh (see `refresh`) */
export const keepFresh = refreshing;
/** the edge paper's material (vertex-coloured: give a geometry a `color` attribute) */
export const edgeMaterial = () => materials().edge;

// ══ THE STACK OF NOTES (a variant: one merged geometry of edges and inner sheets, the top face, the bottom face) ══
const EDGE_TONES: [number, number, number][] = [[0.86, 0.86, 0.8], [0.82, 0.84, 0.77], [0.74, 0.8, 0.7], [0.66, 0.69, 0.63], [0.88, 0.87, 0.82], [0.6, 0.68, 0.58]];
type Variant = { edges: THREE.BufferGeometry; top: THREE.BufferGeometry; bottom: THREE.BufferGeometry };
const variants = new Map<number, Variant>();
const variant = (seed: number): Variant => {
  const k = seed % 3;
  const hit = variants.get(k);
  if (hit) return hit;
  const SX = 8;
  const P: number[] = [], Nn: number[] = [], C: number[] = [];
  const tri = (a: number[], b: number[], c: number[], n: number[], col: number[]) => { for (const v of [a, b, c]) { P.push(v[0], v[1], v[2]); Nn.push(n[0], n[1], n[2]); C.push(col[0], col[1], col[2]); } };
  const quad = (a: number[], b: number[], c: number[], d: number[], n: number[], col: number[]) => { tri(a, b, c, n, col); tri(a, c, d, n, col); };
  const face = (i: number, which: "top" | "bottom") => {
    const pos: number[] = [], uv: number[] = [], idx: number[] = [];
    const j = jit(k, i);
    for (let r = 0; r <= 1; r++) for (let c = 0; c <= SX; c++) {
      const x = -NOTE.W / 2 + (NOTE.W * c) / SX, z = r ? NOTE.D / 2 : -NOTE.D / 2;
      const [wx, wz] = j.at(x, z);
      pos.push(wx, yAt(i, x) + (which === "top" ? SHEET : 0), wz);
      // the bottom face is seen from below: its art mirrored so it reads the right way round from there
      uv.push(which === "top" ? c / SX : 1 - c / SX, r ? 0 : 1);
    }
    for (let c = 0; c < SX; c++) {
      const a = c, b = c + 1, d = SX + 1 + c, e = d + 1;
      if (which === "top") idx.push(a, d, b, b, d, e); else idx.push(a, b, d, b, e, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  };
  for (let i = 0; i < N; i++) {
    const j = jit(k, i);
    const tone = EDGE_TONES[Math.floor(hash(k, i, 3) * EDGE_TONES.length)];
    const shade = 0.94 + 0.08 * hash(k, i, 4);
    const col = tone.map((v) => Math.min(1, v * shade));
    const nF = j.dir(0, 1), nB = j.dir(0, -1), nR = j.dir(1, 0), nL = j.dir(-1, 0);
    for (let c = 0; c < SX; c++) {
      const x0 = -NOTE.W / 2 + (NOTE.W * c) / SX, x1 = x0 + NOTE.W / SX;
      const yb0 = yAt(i, x0), yb1 = yAt(i, x1), yt0 = yb0 + SHEET, yt1 = yb1 + SHEET;
      const [f0x, f0z] = j.at(x0, NOTE.D / 2), [f1x, f1z] = j.at(x1, NOTE.D / 2);
      const [b0x, b0z] = j.at(x0, -NOTE.D / 2), [b1x, b1z] = j.at(x1, -NOTE.D / 2);
      // the front and back cut edges
      quad([f0x, yb0, f0z], [f1x, yb1, f1z], [f1x, yt1, f1z], [f0x, yt0, f0z], [nF[0], 0, nF[1]], col);
      quad([b1x, yb1, b1z], [b0x, yb0, b0z], [b0x, yt0, b0z], [b1x, yt1, b1z], [nB[0], 0, nB[1]], col);
      // the inner sheets' tops (they show only as slivers where a sheet stands proud of the one above it)
      if (i < N - 1) quad([b0x, yt0, b0z], [f0x, yt0, f0z], [f1x, yt1, f1z], [b1x, yt1, b1z], [0, 1, 0], col.map((v) => v * 0.97));
    }
    // the two end edges
    for (const s of [1, -1]) {
      const x = (s * NOTE.W) / 2, yb = yAt(i, x), yt = yb + SHEET;
      const [ax, az] = j.at(x, s * NOTE.D / 2), [bx, bz] = j.at(x, -s * NOTE.D / 2);
      const n = s > 0 ? nR : nL;
      quad([ax, yb, az], [bx, yb, bz], [bx, yt, bz], [ax, yt, az], [n[0], 0, n[1]], col);
    }
  }
  const edges = new THREE.BufferGeometry();
  edges.setAttribute("position", new THREE.Float32BufferAttribute(P, 3));
  edges.setAttribute("normal", new THREE.Float32BufferAttribute(Nn, 3));
  edges.setAttribute("color", new THREE.Float32BufferAttribute(C, 3));
  const v: Variant = { edges, top: face(N - 1, "top"), bottom: face(0, "bottom") };
  variants.set(k, v);
  return v;
};
/** sheet i of variant k: its small shift and turn */
const jit = (k: number, i: number) => {
  const dx = (hash(k, i, 1) - 0.5) * 2 * JX * (i === N - 1 ? 0.5 : 1), dz = (hash(k, i, 2) - 0.5) * 2 * JZ, a = (hash(k, i, 5) - 0.5) * 2 * JYAW;
  const c = Math.cos(a), s = Math.sin(a);
  return { at: (x: number, z: number): [number, number] => [x * c - z * s + dx, x * s + z * c + dz], dir: (x: number, z: number): [number, number] => [x * c - z * s, x * s + z * c] };
};

// ══ THE STRAP / BAND: a paper loop round a stack (inner surface clear of it), crinkled outward, its glued overlap ══
/** a loop of paper `w` wide (along x) round z ∈ ±zIn, from its bottom run (outer face at y 0) to its top run's underside at
 *  yTop; printed `text` along its length (a strap) or across its width (a band). Its overlap is glued on the back (−z). */
export const makeBand = (o: { w: number; zIn: number; yTop: number; text?: string; across?: boolean; seed?: number; key?: string }) => {
  const seed = o.seed ?? 1, t = ST, R = 1.1;
  const yb = t, yt = o.yTop, zo = o.zIn;
  // the inner path, from the back's middle, up, over the top (−z → +z), down the front, under (+z → −z), up the back
  type Pt = { y: number; z: number; ny: number; nz: number; run: "top" | "bottom" | "side" };
  const path: Pt[] = [];
  const line = (y0: number, z0: number, y1: number, z1: number, ny: number, nz: number, run: Pt["run"], step = 2.5) => {
    const n = Math.max(1, Math.ceil(Math.hypot(y1 - y0, z1 - z0) / step));
    for (let i = 0; i < n; i++) path.push({ y: y0 + ((y1 - y0) * i) / n, z: z0 + ((z1 - z0) * i) / n, ny, nz, run });
  };
  const arc = (cy: number, cz: number, a0: number, a1: number) => { for (let i = 0; i < 5; i++) { const a = a0 + ((a1 - a0) * i) / 5; path.push({ y: cy + R * Math.sin(a), z: cz + R * Math.cos(a), ny: Math.sin(a), nz: Math.cos(a), run: "side" }); } };
  const ym = (yb + yt) / 2;
  line(ym, -zo, yt - R, -zo, 0, -1, "side");
  arc(yt - R, -zo + R, Math.PI, Math.PI / 2);
  line(yt, -zo + R, yt, zo - R, 1, 0, "top");
  arc(yt - R, zo - R, Math.PI / 2, 0);
  line(yt - R, zo, yb + R, zo, 0, 1, "side");
  arc(yb + R, zo - R, 0, -Math.PI / 2);
  line(yb, zo - R, yb, -zo + R, -1, 0, "bottom");
  arc(yb + R, -zo + R, -Math.PI / 2, -Math.PI);
  line(yb + R, -zo, ym + 9, -zo, 0, -1, "side");       // past the start: the glued overlap, 9 px up the back
  path.push({ y: ym + 9, z: -zo, ny: 0, nz: -1, run: "side" });
  const S: number[] = [0];
  for (let i = 1; i < path.length; i++) S.push(S[i - 1] + Math.hypot(path[i].y - path[i - 1].y, path[i].z - path[i - 1].z));
  const loopLen = S[S.length - 1] - 9;
  const L = S[S.length - 1];
  // where the top run lies along the length (for the print)
  const topIdx = path.map((p, i) => (p.run === "top" ? i : -1)).filter((i) => i >= 0);
  const topSpan: [number, number] = [S[topIdx[0]], S[topIdx[topIdx.length - 1]]];
  const SXb = Math.max(6, Math.round(o.w / 4));
  // crinkle: soft creases across the band, a few sharper folds, always outward; none under it (it lies on the table)
  const crinkle = (i: number, x: number) => {
    const p = path[i];
    if (p.run === "bottom") return 0;
    const s = S[i];
    const v = 0.5 + 0.5 * Math.sin(s * 0.21 + seed * 1.7 + 0.6 * Math.sin(x * 0.13 + s * 0.05)) * Math.cos(x * 0.09 - s * 0.07 + seed);
    const fold = Math.pow(Math.max(0, Math.sin(s * 0.043 + seed * 2.3)), 12);
    return Math.min(CRINKLE, CRINKLE * (0.45 * v + 0.55 * fold));
  };
  const pos: number[] = [], uv: number[] = [], idx: number[] = [];
  const ring = (layer: "out" | "in") => {
    const base = pos.length / 3;
    for (let i = 0; i < path.length; i++) for (let c = 0; c <= SXb; c++) {
      const x = -o.w / 2 + (o.w * c) / SXb, p = path[i];
      const over = S[i] > loopLen ? t + CRINKLE + 0.02 : 0;     // the overlap lies over the start (clear of its crinkle)
      const d = (layer === "out" ? t + crinkle(i, x) : 0) + over;
      pos.push(x, p.y + p.ny * d, p.z + p.nz * d);
      uv.push(S[i] / L, (x + o.w / 2) / o.w);
    }
    for (let i = 0; i < path.length - 1; i++) for (let c = 0; c < SXb; c++) {
      const a = base + i * (SXb + 1) + c, b = a + 1, d = a + SXb + 1, e = d + 1;
      if (layer === "out") idx.push(a, d, b, b, d, e); else idx.push(a, b, d, b, e, d);
    }
    return base;
  };
  const bo = ring("out"), bi = ring("in");
  // the cut edges along both sides, and the overlap's end
  for (let i = 0; i < path.length - 1; i++) for (const c of [0, SXb]) {
    const a = bo + i * (SXb + 1) + c, b = bo + (i + 1) * (SXb + 1) + c, d = bi + i * (SXb + 1) + c, e = bi + (i + 1) * (SXb + 1) + c;
    if (c === 0) idx.push(a, d, b, b, d, e); else idx.push(a, b, d, b, e, d);
  }
  for (let c = 0; c < SXb; c++) {
    const i = path.length - 1;
    const a = bo + i * (SXb + 1) + c, b = a + 1, d = bi + i * (SXb + 1) + c, e = d + 1;
    idx.push(a, d, b, b, d, e);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  const text = o.text ?? "";
  const key = o.key ?? `cash39-strap-${Math.round(o.w)}-${Math.round(L)}-${text}-${o.across ? "x" : "l"}`;
  const m = new THREE.MeshStandardMaterial({ map: strapTex(key, L, o.w, text, topSpan, !!o.across), roughness: 0.86, metalness: 0, envMapIntensity: 0.3, side: THREE.DoubleSide });
  const band = refreshing(mesh(g, m));
  band.userData.bandTop = yt + t + CRINKLE;
  return band;
};

/** ★ ONE BUNDLE: 100 notes, the faces, the strap. Its origin is the centre of its underside, the notes' length along x.
 *  `strap`: the strap's print ("$10,000" by default; "" for a plain strap) · `seed`: its variant and crinkle · `flip`: turned
 *  end for end */
export const makeBundle = (o: { seed?: number; strap?: string; flip?: boolean } = {}) => {
  const seed = o.seed ?? 0, m = materials(), v = variant(seed);
  const b = new THREE.Group();
  b.userData.unit = true;
  b.add(mesh(v.edges, m.edge));
  b.add(refreshing(mesh(v.top, m.face)));
  b.add(mesh(v.bottom, m.faceDark));
  b.add(makeBand({ w: SW, zIn: STRAP_Z_IN, yTop: STRAP_TOP_IN, text: o.strap ?? "$10,000", seed: seed * 1.37 + 0.5 }));
  if (o.flip) b.rotation.y = Math.PI;
  const w = new THREE.Group();
  w.add(b);
  return w;
};
