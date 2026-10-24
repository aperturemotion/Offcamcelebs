// ══════════════════════════════════════════════════════════════════════════════════════════════
// ★★★★★ 029's 3-D PARTS — the HyperFrames recreation (user, 2026-10-09: "recreate this video using hyperframes, but make all
// the visuals more 3d"). Every object of the film is a real Three.js model (stage.ts draws it into its scene's View3D):
// lit by the one key from the upper left, throwing real soft shadows. World units are the layer's px: x right, y UP (−layer
// y), z toward the viewer; a front face at z = 0 lands on the very px the flat film drew it on (the registered camera).
//   · things that STAND (the cash, the counter, the buildings) stand on a FLOOR (stage.ts makeFloor): its shadow catcher, and
//     on the dark grounds a faint mirror;
//   · things that HANG or lean in front of the plain ground (papers, the board, the lien, the folder) cast their shadows onto
//     a BACKDROP (makeBackdrop): an invisible vertical shadow catcher behind them, so the ground reads as the wall they are on.
// ★ RULE 51 holds: no texture tiles, no drawn rooms. Every texture here is PRINT (type, rules, the engraving of a note, a
//   form's boxes) or a real object's own marking, painted with the film's face; materials are plain colours with their
//   roughness and metalness.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, mesh, paintTex, fadeShadow } from "./stage";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export const col = (h: string) => new THREE.Color(h);
export const rad = (d: number) => (d * Math.PI) / 180;

/** the film's materials (029's palette): matte paper and card, satin metal, lacquer, glass */
export const M = {
  // ★ RULE 53: paper and print take little of the studio environment (it lit them evenly from everywhere and flattened the
  //   form); the key and its shadows model them
  paper: (hex = "#FBF9F3") => new THREE.MeshStandardMaterial({ color: col(hex), roughness: 0.92, metalness: 0, envMapIntensity: 0.35 }),
  print: (t: THREE.Texture, rough = 0.88) => new THREE.MeshStandardMaterial({ map: t, roughness: rough, metalness: 0, envMapIntensity: 0.35 }),
  satin: (hex: string, rough = 0.55, metal = 0) => new THREE.MeshPhysicalMaterial({ color: col(hex), roughness: rough, metalness: metal, clearcoat: 0.25, clearcoatRoughness: 0.45, envMapIntensity: 0.6 }),
  gloss: (hex: string) => new THREE.MeshPhysicalMaterial({ color: col(hex), roughness: 0.32, metalness: 0.05, clearcoat: 0.6, clearcoatRoughness: 0.2, envMapIntensity: 0.8 }),
  gold: (hex = "#E2B64C") => new THREE.MeshPhysicalMaterial({ color: col(hex), metalness: 1, roughness: 0.28, envMapIntensity: 1.0 }),
  steel: (hex = "#C9CED4") => new THREE.MeshPhysicalMaterial({ color: col(hex), metalness: 0.95, roughness: 0.3, envMapIntensity: 0.95 }),
  chrome: () => new THREE.MeshPhysicalMaterial({ color: col("#EEF1F4"), metalness: 1, roughness: 0.16, envMapIntensity: 1.1 }),
  rubber: (hex = "#2A2624") => new THREE.MeshStandardMaterial({ color: col(hex), roughness: 0.85, metalness: 0 }),
  glass: (hex = "#120D0B") => new THREE.MeshPhysicalMaterial({ color: col(hex), roughness: 0.12, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.2 }),
  glow: (hex: string, i = 1) => new THREE.MeshStandardMaterial({ color: col("#000000"), emissive: col(hex), emissiveIntensity: i, roughness: 0.4 }),
};

/** a fixed pseudo-random number in [0, 1) per (a, b, c): the same every frame (no Math.random anywhere) */
export const hash = (a: number, b: number, c: number) => { const s = Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453; return s - Math.floor(s); };

/** BoxGeometry's material order: +x, −x, +y (top), −y (bottom), +z (front), −z (back) */
export type BoxMats = { px: THREE.Material; nx: THREE.Material; top: THREE.Material; bottom: THREE.Material; front: THREE.Material; back: THREE.Material };
/** a box w × h × d whose FRONT face sits at z = 0 and whose depth runs back (−z), its centre at (x, y) in world units */
export const box = (w: number, h: number, d: number, m: THREE.Material | BoxMats) => {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(0, 0, -d / 2);
  const mats = m instanceof THREE.Material ? m : [m.px, m.nx, m.top, m.bottom, m.front, m.back];
  return mesh(g, mats);
};

/** ★★ RULE 53 — a ROUNDED box: the same faces and materials as `box`, its edges and corners rounded at radius r so they catch
 *  the light (a razor-sharp box edge is the mark of a computed object). Front at z = 0, depth back. */
export const rbox = (w: number, h: number, d: number, r: number, m: THREE.Material | BoxMats, seg = 3) => {
  const g = new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2 - 0.01, h / 2 - 0.01, d / 2 - 0.01));
  g.translate(0, 0, -d / 2);
  const mats = m instanceof THREE.Material ? m : [m.px, m.nx, m.top, m.bottom, m.front, m.back];
  return mesh(g, mats);
};

/** a SHEET of stiff card or board, as a rounded box whose front carries `face` (front at z = 0, its centre at the origin).
 *  Thin paper is never this: it is `paper` (below). */
export const sheet = (w: number, h: number, t: number, face: THREE.Material, edge: THREE.Material, back?: THREE.Material) =>
  rbox(w, h, t, Math.min(1.2, t / 2.2), { px: edge, nx: edge, top: edge, bottom: edge, front: face, back: back ?? edge }, 2);

// ══ ★★★★★ RULE 53 — PAPER AS PAPER (user, 2026-10-09: "all the paper visuals look like a flat 3d object with a 2d picture on
// them rather than an actual 3d paper") ═════════════════════════════════════════════════════════════════════════════
// A real sheet is never a flat slab: it BOWS a little across its width, takes its FOLDS (a letter folded in thirds keeps a
// Z of creases), LIFTS at a corner, and its EDGE is a thin band with its own light. So a sheet is a fine surface displaced by
// those, its print following the surface (the key shades across the bow and the folds, and the print with it), a back that
// is its own face, and an edge band of its thickness joining the two. It casts and takes soft shadows.
export type Curl = { corner: "tl" | "tr" | "bl" | "br"; r: number; lift: number };
export type PaperOpts = {
  w: number; h: number; t?: number;
  face: THREE.Material; back?: THREE.Material; edge?: THREE.Material;
  /** the bow across the width (px forward at the middle) and down the height */
  bow?: number; bowY?: number;
  /** corners lifting off (radius px, lift px) */
  curls?: Curl[];
  /** creases across the sheet at a fraction of its height (0 top … 1 bottom), each a sharp V of `depth` px (+ toward the eye) */
  folds?: { at: number; depth: number }[];
  /** a slight, fixed unevenness (px) */
  wave?: number; seed?: number;
  /** grid density along the longer side */
  seg?: number;
};
/** the surface's offset (px toward the viewer) at (u, v): u left → right, v top → bottom */
export const paperZ = (o: PaperOpts) => (u: number, v: number) => {
  let z = 0;
  if (o.bow) z += o.bow * (1 - (2 * u - 1) ** 2);
  if (o.bowY) z += o.bowY * (1 - (2 * v - 1) ** 2);
  for (const c of o.curls ?? []) {
    const cx = c.corner[1] === "r" ? o.w : 0, cy = c.corner[0] === "b" ? o.h : 0;
    const d = Math.hypot(u * o.w - cx, v * o.h - cy);
    if (d < c.r) z += c.lift * ((c.r - d) / c.r) ** 2;
  }
  for (const f of o.folds ?? []) z += f.depth * Math.max(0, 1 - Math.abs(v - f.at) / 0.34);
  if (o.wave) { const s = o.seed ?? 0; z += o.wave * Math.sin(u * 5.1 + s) * Math.cos(v * 3.7 + s * 1.3); }
  return z;
};
export const paper = (o: PaperOpts) => {
  const t = o.t ?? 1.2, seg = o.seg ?? 40;
  const L = Math.max(o.w, o.h);
  const sx = Math.max(6, Math.round((seg * o.w) / L)), sy = Math.max(6, Math.round((seg * o.h) / L));
  const front = new THREE.PlaneGeometry(o.w, o.h, sx, sy);
  const backG = front.clone();
  // the edge: a band of the sheet's thickness all the way round, joining front and back
  const ring: [number, number][] = [];
  for (let i = 0; i <= sx; i++) ring.push([i / sx, 0]);
  for (let j = 1; j <= sy; j++) ring.push([1, j / sy]);
  for (let i = sx - 1; i >= 0; i--) ring.push([i / sx, 1]);
  for (let j = sy - 1; j >= 1; j--) ring.push([0, j / sy]);
  const eg = new THREE.BufferGeometry();
  eg.setAttribute("position", new THREE.Float32BufferAttribute(new Float32Array(ring.length * 18), 3));
  // ★ RULE 54b: the surface is written by a function, so a sheet can change shape as it moves (a corner that curls only once
  //   it is out of its envelope: never through it)
  const shape = (oo: PaperOpts) => {
    const Z = paperZ(oo);
    const fp = front.attributes.position as THREE.BufferAttribute, bp = backG.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < fp.count; i++) { const z = Z(fp.getX(i) / o.w + 0.5, 0.5 - fp.getY(i) / o.h); fp.setZ(i, z); bp.setZ(i, z - t); }
    const P = eg.attributes.position as THREE.BufferAttribute;
    for (let k = 0; k < ring.length; k++) {
      const [u0, v0] = ring[k], [u1, v1] = ring[(k + 1) % ring.length];
      const ax = (u0 - 0.5) * o.w, ay = (0.5 - v0) * o.h, az = Z(u0, v0);
      const bx = (u1 - 0.5) * o.w, by = (0.5 - v1) * o.h, bz = Z(u1, v1);
      const q = [ax, ay, az, bx, by, bz, bx, by, bz - t, ax, ay, az, bx, by, bz - t, ax, ay, az - t];
      for (let n = 0; n < 18; n++) P.array[k * 18 + n] = q[n];
    }
    for (const g of [front, backG, eg]) { g.attributes.position.needsUpdate = true; g.computeVertexNormals(); g.computeBoundingBox(); g.computeBoundingSphere(); }
  };
  shape(o);
  const grp = new THREE.Group();
  grp.userData.unit = true;   // RULE 54's audit: a sheet's faces and edge are ONE object
  grp.userData.reshape = shape;
  grp.add(mesh(front, o.face));
  const bm = (o.back ?? o.edge ?? o.face).clone();
  bm.side = THREE.BackSide;
  grp.add(mesh(backG, bm));
  const em = (o.edge ?? o.face).clone();
  em.side = THREE.DoubleSide;
  if ((em as THREE.MeshStandardMaterial).map) (em as THREE.MeshStandardMaterial).map = null;
  grp.add(mesh(eg, em));
  return grp;
};
/** ★ RULE 54b: the highest point of a sheet's FRONT over a footprint (local x0..x1, y0..y1): where something resting on it
 *  must sit to touch it and never sink into it */
export const paperTop = (o: PaperOpts, x0: number, x1: number, y0: number, y1: number, n = 24) => {
  let m = -1e9;
  for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) {
    const x = x0 + ((x1 - x0) * i) / n, y = y0 + ((y1 - y0) * j) / n;
    if (Math.abs(x) > o.w / 2 || Math.abs(y) > o.h / 2) continue;
    m = Math.max(m, paperAt(o, x, y));
  }
  return m < -1e8 ? 0 : m;
};
/** the surface height of a paper at local (x, y) (to seat a staple or a clip ON the sheet) */
export const paperAt = (o: PaperOpts, x: number, y: number) => paperZ(o)(x / o.w + 0.5, 0.5 - y / o.h);

/** ★ the BACKDROP: an invisible vertical plane at depth z that only takes shadows — the plain ground as the wall a sheet, a
 *  board or a chain hangs in front of. Marked as a floor (no reflection of it, no bounds for the key's shadow camera). */
export const makeBackdrop = (o: { x0: number; x1: number; y0: number; y1: number; z: number; shadow?: number; fade?: { c: [number, number]; r: [number, number] } }) => {
  const m = new THREE.ShadowMaterial({ color: 0x000000, opacity: o.shadow ?? 0.32, transparent: true, depthWrite: false });
  // ★ its height is y1 − y0 (layer y runs down): built as y0 − y1 it was NEGATIVE, the plane faced away and was culled, and
  //   no backdrop shadow ever showed (029 HF's first realism pass)
  // ★ RULE 54b: the plane runs well past the given box (700 px every side) and its shadows fade out over an ellipse 1.35× the
  //   box, so a shadow never ends on the plane's edge (the box is where the objects hang)
  const p = new THREE.Mesh(new THREE.PlaneGeometry(o.x1 - o.x0 + 1400, Math.abs(o.y1 - o.y0) + 1400), m);
  p.position.set((o.x0 + o.x1) / 2, -(o.y0 + o.y1) / 2, o.z);
  p.receiveShadow = true;
  p.renderOrder = 2;
  p.userData.noBounds = true;
  p.userData.isFloor = true;
  // ★ RULE 54b: its shadows fade out softly round the objects (layer x, y; radii), never cut by a canvas's edge
  const fc = o.fade?.c ?? [(o.x0 + o.x1) / 2, (o.y0 + o.y1) / 2], fr = o.fade?.r ?? [((o.x1 - o.x0) / 2) * 1.35, ((o.y1 - o.y0) / 2) * 1.35];
  fadeShadow(m, "xy", [fc[0], -fc[1]], fr);
  return p;
};

/** a texture of print, painted once (cached by `key`) with the film's face, at 3× for crisp type on a near face */
export const printTex = (key: string, w: number, h: number, draw: (g: CanvasRenderingContext2D) => void, scale = 3) => paintTex(key, w, h, draw, scale);
/** the film's face, for painting */
export const FACE = '"Archivo", sans-serif';
/** ★ the quotes' face as both renders drew it (and the user approved): Archivo Light Italic 300 with Chrome's own synthetic
 *  bold, which Skia makes by stroking the glyphs at size/32 with their fill. "italic 800" (no such face shipped) left the
 *  choice to the browser, and a fresh still once came out as the upright 800 slanted instead. Drawn explicitly, it never varies. */
export const fillBoldItalic = (g: CanvasRenderingContext2D, text: string, x: number, y: number, size: number) => {
  g.save();
  font(g, 300, size, true);
  g.lineWidth = size / 32; g.lineJoin = "miter"; g.strokeStyle = g.fillStyle;
  g.strokeText(text, x, y); g.fillText(text, x, y);
  g.restore();
};
/** set `g`'s font: weight, size (px), italic */
export const font = (g: CanvasRenderingContext2D, weight: number, size: number, italic = false) => { g.font = `${italic ? "italic " : ""}${weight} ${size}px ${FACE}`; };
/** ★ (033, the user: "should actually fit the box it's in") set `g`'s font at `size` or smaller, so `text` (with the current
 *  letter-spacing) measures at most `maxW` px: print is fitted to its box by MEASURING it, never by a guessed size */
export const fitFont = (g: CanvasRenderingContext2D, weight: number, size: number, text: string, maxW: number, italic = false) => {
  let s = size;
  font(g, weight, s, italic);
  while (s > 6 && g.measureText(text).width > maxW) { s *= 0.97; font(g, weight, s, italic); }
  return s;
};
/** letter-spacing on a canvas (Chrome) */
export const track = (g: CanvasRenderingContext2D, px: number) => { (g as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = `${px}px`; };
/** greeked lines of type: bars of ink of varied lengths (the words are not for reading, rule 47) */
export const typeLines = (g: CanvasRenderingContext2D, x: number, y: number, w: number, n: number, gap = 26, h = 6, a = 0.24, seed = 0) => {
  g.save();
  g.fillStyle = `rgba(20,14,10,${a})`;
  for (let i = 0; i < n; i++) {
    const k = (i * 7 + seed * 13) % 10;
    const len = i === n - 1 ? w * 0.55 : w * (0.82 + 0.018 * k);
    const r = h / 2, yy = y + i * gap, ww = Math.min(w, len);
    g.beginPath(); g.moveTo(x + r, yy); g.lineTo(x + ww - r, yy); g.arc(x + ww - r, yy + r, r, -Math.PI / 2, Math.PI / 2); g.lineTo(x + r, yy + h); g.arc(x + r, yy + r, r, Math.PI / 2, -Math.PI / 2); g.fill();
  }
  g.restore();
};

/** a wire bent along points (a paper clip, a shackle, a string): a tube of radius r */
export const wire = (pts: [number, number, number][], r: number, m: THREE.Material, closed = false, seg = 64) => {
  const curve = new THREE.CatmullRomCurve3(pts.map(([x, y, z]) => new THREE.Vector3(x, y, z)), closed, "centripetal");
  return mesh(new THREE.TubeGeometry(curve, seg, r, 12, closed), m);
};

/** a chain LINK: a stadium-shaped torus (two straights and two half-circles), long axis along x, in the x-y plane */
export const link = (len: number, w: number, r: number, m: THREE.Material) => {
  const pts: [number, number, number][] = [];
  const a = (len - w) / 2, rr = w / 2;
  for (let i = 0; i <= 12; i++) { const t = -Math.PI / 2 + (i / 12) * Math.PI; pts.push([a + Math.cos(t) * rr, Math.sin(t) * rr, 0]); }
  for (let i = 0; i <= 12; i++) { const t = Math.PI / 2 + (i / 12) * Math.PI; pts.push([-a + Math.cos(t) * rr, Math.sin(t) * rr, 0]); }
  return wire(pts, r, m, true, 96);
};
