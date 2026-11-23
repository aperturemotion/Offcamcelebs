// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE MATH, IN 3-D (039; round 2, Timur: "the cash stacks, and the 3d visuals need to be more realistic") — "By the
// lawsuit's own numbers, his three fights came to about $85 million, not $365 million. To be fair, the big number was the
// deal's headline, not his claim. And $85 million for three fights is still a fortune." On a dark oiled walnut table:
//   · THE TOWER: three BRICKS of real strapped $100 bundles (props/cash.ts makeBundle: a hundred sheets each, the real note
//     face, a mustard $10,000 strap), each 2 × 2 bundles, 3, 7 and 7 layers high (15 : 35 : 35, the lawsuit's own figures
//     per fight), every bundle a little shifted and turned as hands stack them. Round each brick a wide mustard kraft BAND
//     (cash.ts makeBand: crinkled, its glued seam on the back) printed with its figure on its front: $15M, $35M, $35M.
//   · THE TALLY: a white card standing in the slot of a beech place-card holder before the tower: ABOUT $85M.
//   · THE COLUMN: a tall clear acrylic column on a black acrylic base, the tower's own footprint and 365/85 of its height,
//     etched at each tower's height and "$365M" near its top; it slides in beside the tower and is drawn away again.
//   · THE HEADLINE: a small folded kraft tent card, HEADLINE over $365M, standing where the column stood.
// Units are the layer's px (y up), the floor at y 0 of `sc`; every object's x is the layer's x.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, type Model } from "../stage";
import { hash, col, rbox, fitFont, track } from "../kit029";
import { makeBundle, makeBand, BUNDLE, MUSTARD } from "./cash";

// ══ THE BRICKS ══
/** one layer of bundles (a bundle above sits 0.3 over the one below) */
export const LAYER = BUNDLE.H + 0.3;
const HX = BUNDLE.HX + 5, HZ = BUNDLE.HZ + 4.2;   // the four bundles' centres in a layer (±HX, ±HZ), before each one's jitter
const JX = 1.2, JZ = 0.8, JYAW = 0.006;           // a bundle's hand-stacked shift (±px) and turn (±rad)
const BAND_T = 0.32 + 0.3 + 0.02;                 // the band's paper and its outward crinkle (cash.ts BAND_OUT)
const B_Y0 = 0.32 + 0.5;                          // the bundles stand on the band's bottom run (its paper 0.32; 0.5 clear: the audit's float32 world)
/** the band round each brick: its width, its centre x on the brick, its inner half depth (clear of the bundles' straps) */
const SASH = { w: 90, x: -HX, z: HZ + BUNDLE.HZ + JZ + JYAW * BUNDLE.HX + 0.5 } as const;
export const BRICK = { hw: HX + JX + BUNDLE.HX + JYAW * BUNDLE.HZ + 0.3, hd: SASH.z + BAND_T } as const;   // half width (x), half depth (z)
export const BRICKS = [
  { n: 3, label: "$15M" },
  { n: 7, label: "$35M" },
  { n: 7, label: "$35M" },
] as const;
/** a brick's bundles' top (over its own foot), and its whole height over its band */
export const brickH = (k: number) => B_Y0 + BRICKS[k].n * LAYER - 0.3;
const bandYTop = (k: number) => brickH(k) + 0.5;
export const brickTall = (k: number) => bandYTop(k) + BAND_T;
/** where brick k rests (its base over the floor) in the finished tower: on the band of the one below, 0.3 over it */
export const brickBase = (k: number) => { let b = 0; for (let j = 0; j < k; j++) b += brickTall(j) + 0.3; return b; };
export const TOWER_H = brickBase(BRICKS.length - 1) + brickTall(BRICKS.length - 1);
/** the band's printed front run, on brick k (brick frame) */
export const sashPanel = (k: number) => ({ x0: SASH.x - SASH.w / 2, x1: SASH.x + SASH.w / 2, z: BRICK.hd, y0: 0, y1: brickTall(k) });

const INK = "#2A1B15";
/** the band's kraft, its two printed border rules, and its figure printed ACROSS the band on its FRONT run (where the camera
 *  reads it), the ink a little uneven in the fibre. `len` the loop's length, `span` the front run's [start, end] along it. */
const bandTex = (k: number, len: number, w: number, span: [number, number], label: string) => paintTex(`math-band-${k}-v2`, len, w, (g) => {
  g.fillStyle = MUSTARD; g.fillRect(0, 0, len, w);
  for (let i = 0; i < len * 3; i++) {
    g.fillStyle = `rgba(${hash(i, 1, 16 + k) > 0.5 ? "110,78,18" : "245,220,140"},${0.05 + 0.09 * hash(i, 2, 16 + k)})`;
    g.fillRect(hash(i, 3, 16 + k) * len, hash(i, 4, 16 + k) * w, 0.5 + 3 * hash(i, 5, 16 + k), 0.3);
  }
  for (let i = 0; i < 8; i++) { g.fillStyle = `rgba(90,60,15,${0.04 + 0.05 * hash(i, 9, k)})`; g.beginPath(); g.ellipse(hash(i, 7, k) * len, hash(i, 8, k) * w, 8 + 14 * hash(i, 10, k), 3 + 4 * hash(i, 11, k), 0, 0, Math.PI * 2); g.fill(); }
  g.fillStyle = "rgba(48,32,8,0.8)"; g.fillRect(0, 4, len, 0.9); g.fillRect(0, w - 4.9, len, 0.9);
  const [a, b] = span, mid = (a + b) / 2;
  g.save(); g.translate(mid, w / 2); g.rotate(-Math.PI / 2);
  g.fillStyle = "#24180A"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 0.5);
  const s = fitFont(g, 800, Math.min((b - a) * 0.6, 62), label, w - 18);
  g.fillText(label, 0, s * 0.36);
  g.restore();
  // the ink sits in the kraft: the fibre shows through it here and there
  g.globalCompositeOperation = "source-atop";
  for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(199,162,60,${0.12 + 0.18 * hash(i, 12, k)})`; g.fillRect(a + hash(i, 13, k) * (b - a), hash(i, 14, k) * w, 0.7, 0.7); }
  g.globalCompositeOperation = "source-over";
}, 5);

const brickModel = (k: number) => {
  const b = new THREE.Group();
  const n = BRICKS[k].n;
  let i = 0;
  for (let l = 0; l < n; l++) for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const seed = 40 + k * 97 + i;
    const bd = makeBundle({ seed, flip: hash(seed, 3, 9) > 0.55 });
    bd.userData.obj = `brick${k}-${i}`;
    bd.rotation.y = (hash(seed, 4, 4) - 0.5) * 2 * JYAW;
    bd.position.set(sx * HX + (hash(seed, 5, 5) - 0.5) * 2 * JX, B_Y0 + l * LAYER, sz * HZ + (hash(seed, 6, 6) - 0.5) * 2 * JZ);
    b.add(bd);
    i++;
  }
  // the band: one loop of kraft round the brick, its bottom run under the bundles, its figure printed on its front run
  const yTop = bandYTop(k);
  const band = makeBand({ w: SASH.w, zIn: SASH.z, yTop, seed: 3.1 + k * 1.9, key: `math-band-geo-${k}` }) as THREE.Mesh;
  // where its front run lies along the loop (the vertices on the outside of the front, between its rounded corners)
  const pos = band.geometry.attributes.position as THREE.BufferAttribute, uv = band.geometry.attributes.uv as THREE.BufferAttribute;
  let u0 = 1, u1 = 0;
  for (let v = 0; v < pos.count; v++) {
    const y = pos.getY(v), z = pos.getZ(v);
    if (z > SASH.z + 0.2 && y > 0.32 + 1.2 && y < yTop - 1.2) { u0 = Math.min(u0, uv.getX(v)); u1 = Math.max(u1, uv.getX(v)); }
  }
  const frontLen = yTop - 1.1 - (0.32 + 1.1);
  const L = frontLen / Math.max(1e-3, u1 - u0);
  const m = band.material as THREE.MeshStandardMaterial;
  m.map = bandTex(k, L, SASH.w, [u0 * L, u1 * L], BRICKS[k].label);
  m.needsUpdate = true;
  band.position.x = SASH.x;
  band.userData.obj = `band${k}`;
  // it is built round the bundles: its bottom run lies under them (they stand on it)
  b.add(band);
  return b;
};

// ══ PAPER, WOOD: the grain every surface carries (round 2: "nothing perfectly flat or uniform") ══
/** a fine paper grain (a bump and a roughness wobble): tiny fibres and a soft cloud, painted once, repeated */
let paperGrainT: THREE.Texture | null = null;
const paperGrain = () => {
  if (paperGrainT) return paperGrainT;
  const t = paintTex("math-paper-grain", 256, 256, (g) => {
    g.fillStyle = "#808080"; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 2600; i++) {
      const x = hash(i, 1, 21) * 256, y = hash(i, 2, 21) * 256, a = hash(i, 3, 21) * Math.PI, l = 1 + 5 * hash(i, 4, 21);
      g.strokeStyle = hash(i, 5, 21) > 0.5 ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.2)"; g.lineWidth = 0.4 + 0.5 * hash(i, 6, 21);
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
    }
  }, 2);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2, 2); t.colorSpace = THREE.NoColorSpace;
  paperGrainT = t;
  return t;
};
/** paper or card stock: matte, a faint sheen, grain in its surface (its print, when it has one, IS its colour map) */
const paperM = (o: { color?: string; map?: THREE.Texture; rough?: number }) => new THREE.MeshPhysicalMaterial({
  color: o.map ? col("#ffffff") : col(o.color ?? "#F4F1EA"), map: o.map ?? null, roughness: o.rough ?? 0.86, metalness: 0,
  bumpMap: paperGrain(), bumpScale: 0.35, sheen: 0.25, sheenRoughness: 0.8, sheenColor: col("#ffffff"), envMapIntensity: 0.35 });
const smooth = (t: number) => t * t * (3 - 2 * t);
const n1 = (x: number, s: number) => { const i = Math.floor(x), f = x - i; return hash(i, s, 1) + (hash(i + 1, s, 1) - hash(i, s, 1)) * smooth(f); };
const n2 = (x: number, y: number, s: number) => {
  const i = Math.floor(x), j = Math.floor(y), fx = smooth(x - i), fy = smooth(y - j);
  const a = hash(i, j, s), b = hash(i + 1, j, s), c = hash(i, j + 1, s), d = hash(i + 1, j + 1, s);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
};
/** a plank's figure: wavering growth lines along x, pores; `rgb` its light and dark tones */
const woodTex = (key: string, w: number, h: number, scale: number, light: [number, number, number], dark: [number, number, number], seed: number) => {
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  const g = c.getContext("2d")!, im = g.createImageData(w, h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const X = x * scale, Z = y * scale;
    const wv = Z + 26 * (n1(X / 700, seed) - 0.5) * 2 + 8 * (n1(X / 210 + 3, seed + 1) - 0.5) * 2 + 2.5 * (n2(X / 45, Z / 26, seed + 2) - 0.5) * 2;
    const r = wv / (12 + 5 * n1(Z / 150, seed + 3));
    const line = Math.pow(0.5 + 0.5 * Math.cos(2 * Math.PI * r + 1.8 * n2(X / 300, Z / 55, seed + 4)), 4);
    let tone = Math.min(1, 0.55 * line + 0.22 * n2(X / 100, Z / 12, seed + 5) + 0.16 * n1(X / 1300, seed + 6));
    if (hash(Math.floor(X / 5), Math.floor(Z / 1.2), seed + 7) > 0.975 - 0.03 * line) tone = Math.min(1, tone + 0.35);
    const i = (y * w + x) * 4;
    for (let k = 0; k < 3; k++) im.data[i + k] = light[k] + (dark[k] - light[k]) * tone;
    im.data[i + 3] = 255;
  }
  g.putImageData(im, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; t.name = key;
  return t;
};
let walnutT: THREE.Texture | null = null, beechT: THREE.Texture | null = null;
const walnutTex = () => (walnutT ??= woodTex("math-walnut", 1600, 700, 2.2, [104, 68, 47], [44, 27, 18], 31));
const beechTex = () => (beechT ??= woodTex("math-beech", 256, 64, 1, [226, 196, 150], [178, 136, 88], 9));
/** a material that fades out over an ellipse of its plane (xz): the table falls into the dark ground beyond its light */
const pooled = <T extends THREE.Material>(m: T, c: [number, number], r: [number, number], key: string) => {
  m.transparent = true;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.poolC = { value: new THREE.Vector2(...c) };
    sh.uniforms.poolR = { value: new THREE.Vector2(...r) };
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec2 vPoolP;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvPoolP = ( modelMatrix * vec4( position, 1.0 ) ).xz;");
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec2 vPoolP;\nuniform vec2 poolC;\nuniform vec2 poolR;")
      .replace("#include <dithering_fragment>", `#include <dithering_fragment>
        float poolA = 1.0 - smoothstep( 0.3, 1.0, length( ( vPoolP - poolC ) / poolR ) );
        if ( poolA < 0.004 ) discard;
        gl_FragColor.a *= poolA;`);
  };
  m.customProgramCacheKey = () => key;
  return m;
};

// ══ THE TALLY: a white card standing in the slot of a beech place-card holder ══
export const TALLY = { w: 230, h: 150, t: 2, foot: 8, lean: (4 * Math.PI) / 180, hold: { w: 206, h: 22, d: 44 } } as const;
const tallyTex = () => paintTex("math-tally-v2", TALLY.w, TALLY.h, (g) => {
  const { w, h } = TALLY;
  g.fillStyle = "#F3EFE6"; g.fillRect(0, 0, w, h);
  // the stock's cloud, and handling at the corners
  for (let i = 0; i < 90; i++) { g.fillStyle = `rgba(150,135,110,${0.015 + 0.025 * hash(i, 4, 2)})`; g.beginPath(); g.arc(hash(i, 1, 2) * w, hash(i, 2, 2) * h, 6 + 20 * hash(i, 3, 2), 0, 7); g.fill(); }
  for (const [x, y] of [[0, 0], [w, 0], [0, h], [w, h]] as const) {
    const r = g.createRadialGradient(x, y, 0, x, y, 26); r.addColorStop(0, "rgba(120,100,70,0.16)"); r.addColorStop(1, "rgba(120,100,70,0)");
    g.fillStyle = r; g.fillRect(0, 0, w, h);
  }
  g.strokeStyle = "rgba(42,27,21,0.55)"; g.lineWidth = 1; g.strokeRect(9, 9, w - 18, h - 18);
  // the ink sits in the stock: a touch thinner where the paper's tooth held less
  g.fillStyle = INK; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 6); fitFont(g, 700, 26, "ABOUT", w - 60); g.fillText("ABOUT", w / 2 + 3, 46);
  track(g, 0); fitFont(g, 800, 84, "$85M", w - 34); g.fillText("$85M", w / 2, 122);
  g.globalCompositeOperation = "destination-out";
  for (let i = 0; i < 700; i++) { g.fillStyle = `rgba(0,0,0,${0.08 + 0.12 * hash(i, 7, 2)})`; g.fillRect(hash(i, 5, 2) * w, hash(i, 6, 2) * h, 0.7, 0.7); }
  g.globalCompositeOperation = "destination-over"; g.fillStyle = "#F3EFE6"; g.fillRect(0, 0, w, h);
  g.globalCompositeOperation = "source-over";
}, 4);
const tallyModel = () => {
  const t = new THREE.Group();
  const beech = new THREE.MeshPhysicalMaterial({ map: beechTex(), roughness: 0.5, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.4, envMapIntensity: 0.5 });
  const hold = rbox(TALLY.hold.w, TALLY.hold.h, TALLY.hold.d, 5, beech, 4);
  hold.position.set(0, 0.3 + TALLY.hold.h / 2, TALLY.hold.d); hold.userData.obj = "tally-holder"; t.add(hold);
  // the sawn slot: a dark kerf along the top, under the card
  const kerf = mesh(new THREE.PlaneGeometry(TALLY.w - 30, 4.2).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: col("#2B1C10"), roughness: 0.9 }), false, true);
  kerf.position.set(0, 0.3 + TALLY.hold.h + 0.06, TALLY.hold.d / 2); hold.parent!.add(kerf); kerf.userData.obj = "tally-holder";
  // the card: 2 px stock, its edges softened, leaning back a few degrees in the slot
  const cardG = new THREE.Group(); cardG.position.set(0, TALLY.foot, TALLY.hold.d / 2); cardG.rotation.x = -TALLY.lean;
  const edge = paperM({ color: "#EFEBE2" });
  const card = rbox(TALLY.w, TALLY.h, TALLY.t, 0.9, { px: edge, nx: edge, top: edge, bottom: edge, front: paperM({ map: tallyTex() }), back: edge }, 2);
  card.position.set(0, TALLY.h / 2, TALLY.t / 2); card.userData.obj = "tally-card"; card.userData.pierces = ["tally-holder"];
  cardG.add(card); t.add(cardG);
  return t;
};

// ══ THE HEADLINE: a folded kraft tent card ══
export const HEAD = { w: 260, L: 190, t: 1.6, th: (15 * Math.PI) / 180 } as const;
export const HEAD_TOP = HEAD.L * Math.cos(HEAD.th) + 2;
export const HEAD_FOOT = HEAD.L * Math.sin(HEAD.th);
const headTex = () => paintTex("math-head-v2", HEAD.w, HEAD.L, (g) => {
  const { w, L } = HEAD;
  g.fillStyle = "#C59D6B"; g.fillRect(0, 0, w, L);
  for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${hash(i, 8, 1) > 0.5 ? "105,72,36" : "238,210,165"},${0.05 + 0.1 * hash(i, 8, 2)})`; g.fillRect(hash(i, 8, 3) * w, hash(i, 8, 4) * L, 0.6 + 3 * hash(i, 8, 5), 0.6); }
  // the fold's shading along the top edge, and wear at the bottom corners
  const fg = g.createLinearGradient(0, 0, 0, 14); fg.addColorStop(0, "rgba(70,45,20,0.25)"); fg.addColorStop(1, "rgba(70,45,20,0)");
  g.fillStyle = fg; g.fillRect(0, 0, w, 14);
  for (const x of [0, w]) { const r = g.createRadialGradient(x, L, 0, x, L, 30); r.addColorStop(0, "rgba(90,60,30,0.22)"); r.addColorStop(1, "rgba(90,60,30,0)"); g.fillStyle = r; g.fillRect(0, 0, w, L); }
  g.fillStyle = "#24160F"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 5); fitFont(g, 700, 25, "HEADLINE", w - 70); g.fillText("HEADLINE", w / 2 + 2.5, 56);
  g.fillRect(w / 2 - 40, 70, 80, 2);
  track(g, 0); fitFont(g, 800, 80, "$365M", w - 30); g.fillText("$365M", w / 2, 146);
  // the ink soaks into the kraft unevenly
  g.globalCompositeOperation = "source-atop";
  for (let i = 0; i < 500; i++) { g.fillStyle = `rgba(197,157,107,${0.1 + 0.15 * hash(i, 9, 2)})`; g.fillRect(hash(i, 9, 3) * w, hash(i, 9, 4) * L, 0.8, 0.8); }
  g.globalCompositeOperation = "source-over";
}, 4);
const headModel = () => {
  const t = new THREE.Group(); t.userData.obj = "head-card";
  const kraft = paperM({ color: "#C59D6B", rough: 0.9 });
  for (const sz of [1, -1]) {
    const leaf = new THREE.Group();
    leaf.position.set(0, 0.4, sz * HEAD_FOOT);
    leaf.rotation.x = -sz * HEAD.th;
    const m = rbox(HEAD.w, HEAD.L, HEAD.t, 0.7, { px: kraft, nx: kraft, top: kraft, bottom: kraft, front: sz > 0 ? paperM({ map: headTex(), rough: 0.9 }) : kraft, back: kraft }, 2);
    m.position.set(0, HEAD.L / 2, sz > 0 ? HEAD.t : 0);
    leaf.add(m);
    t.add(leaf);
  }
  // the fold: the card's crease, a rounded spine along the top where the two leaves meet
  const fold = mesh(new THREE.CylinderGeometry(1.6, 1.6, HEAD.w - 1.4, 16).rotateZ(Math.PI / 2), kraft);
  fold.position.set(0, HEAD.L * Math.cos(HEAD.th) + 0.6, 0); t.add(fold);
  return t;
};

// ══ THE COLUMN: the $365M headline as a tall clear acrylic column on a black acrylic base ══
export const GHOST_H = (TOWER_H * 365) / 85;
export const COL = { base: 16, lip: 14 } as const;
const etchTex = () => paintTex("math-etch", 440, 150, (g) => {
  g.clearRect(0, 0, 440, 150);
  g.fillStyle = "#FFFFFF"; g.textAlign = "center"; g.textBaseline = "middle";
  track(g, 0); fitFont(g, 800, 128, "$365M", 420);
  g.fillText("$365M", 220, 80);
  // frosted, not printed: the etch is grainy
  g.globalCompositeOperation = "destination-out";
  for (let i = 0; i < 3000; i++) { g.fillStyle = `rgba(0,0,0,${0.15 + 0.3 * hash(i, 3, 5)})`; g.fillRect(hash(i, 1, 5) * 440, hash(i, 2, 5) * 150, 0.8, 0.8); }
  g.globalCompositeOperation = "source-over";
}, 3);
/** the column's reflections: two soft vertical streaks of the room's light across a face */
const streakTex = () => paintTex("math-streak", 128, 16, (g) => {
  g.clearRect(0, 0, 128, 16);
  for (const [c, w, a] of [[0.16, 0.05, 0.75], [0.3, 0.12, 0.35], [0.82, 0.03, 0.5]] as const) {
    const gr = g.createLinearGradient((c - w) * 128, 0, (c + w) * 128, 0);
    gr.addColorStop(0, "rgba(255,255,255,0)"); gr.addColorStop(0.5, `rgba(255,255,255,${a})`); gr.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 128, 16);
  }
}, 2);
const columnModel = () => {
  const t = new THREE.Group();
  const W = 2 * BRICK.hw, D = 2 * BRICK.hd, H = GHOST_H - COL.base - 0.3;
  // the base: black cast acrylic, polished, its edges rounded
  const baseM = new THREE.MeshPhysicalMaterial({ color: col("#0E0D10"), roughness: 0.1, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.2 });
  const base = rbox(W + 2 * COL.lip, COL.base, D + 2 * COL.lip, 4, baseM, 4);
  base.position.set(0, 0.3 + COL.base / 2, D / 2 + COL.lip); base.userData.obj = "column-base"; t.add(base);
  const body = new THREE.Group(); body.position.y = 0.3 + COL.base + 0.2; t.add(body);
  // the block: clear acrylic, faintly green in its depth, the room reflected in its clear coat
  const acr = new THREE.MeshPhysicalMaterial({ color: col("#E4F2EC"), roughness: 0.03, metalness: 0, transparent: true, opacity: 0.13, clearcoat: 1,
    clearcoatRoughness: 0.02, envMapIntensity: 1.8, specularIntensity: 1, depthWrite: false });
  const blk = rbox(W, H, D, 5, acr, 3); blk.position.set(0, H / 2, D / 2); body.add(blk);
  // its edges: polished acrylic edges carry the light along them (the green of its depth)
  const edgeM = new THREE.MeshBasicMaterial({ color: col("#CFE8DE"), transparent: true, opacity: 0.62, depthWrite: false, toneMapped: false });
  const E = 3.2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const e = mesh(new THREE.BoxGeometry(E, H - 8, E), edgeM, false, false); e.position.set(sx * (W / 2 - 1.2), H / 2, sz * (D / 2 - 1.2)); body.add(e);
  }
  for (const y of [1.2, H - 1.2]) {
    for (const sz of [-1, 1]) { const e = mesh(new THREE.BoxGeometry(W - 8, E, E), edgeM, false, false); e.position.set(0, y, sz * (D / 2 - 1.2)); body.add(e); }
    for (const sx of [-1, 1]) { const e = mesh(new THREE.BoxGeometry(E, E, D - 8), edgeM, false, false); e.position.set(sx * (W / 2 - 1.2), y, 0); body.add(e); }
  }
  // the reflections on its front and its lit side
  const stM = new THREE.MeshBasicMaterial({ map: streakTex(), transparent: true, opacity: 0.32, depthWrite: false, toneMapped: false });
  const front = mesh(new THREE.PlaneGeometry(W - 8, H - 8), stM, false, false); front.position.set(0, H / 2, D / 2 + 0.4); body.add(front);
  const side = mesh(new THREE.PlaneGeometry(D - 8, H - 8), stM, false, false); side.rotation.y = Math.PI / 2; side.position.set(W / 2 + 0.4, H / 2, 0); body.add(side);
  // etched in its front: a fine mark at each tower's height (85M: four towers and a third), and $365M near its top
  const frost = new THREE.MeshBasicMaterial({ color: col("#F4FAF7"), transparent: true, opacity: 0.4, depthWrite: false, toneMapped: false });
  for (let y = TOWER_H; y < GHOST_H - 60; y += TOWER_H) {
    const m = mesh(new THREE.PlaneGeometry(W - 40, 2.2), frost, false, false); m.position.set(0, y - (0.3 + COL.base + 0.2), D / 2 + 0.5); body.add(m);
  }
  const etch = mesh(new THREE.PlaneGeometry(440, 150), new THREE.MeshBasicMaterial({ map: etchTex(), transparent: true, opacity: 0.9, depthWrite: false, toneMapped: false }), false, false);
  etch.position.set(0, H - 104, D / 2 + 0.6); body.add(etch);
  t.traverse((o) => { if (o !== base && o.parent !== base && o !== t) o.userData.obj ??= "column"; });
  return t;
};

// ══ THE TABLE: dark oiled walnut under the tower and the column, falling into the dark ground beyond its light ══
const tableModel = (cx: number, cz: number, rx: number, rz: number) => {
  const tb = new THREE.Group(); tb.userData.isFloor = true; tb.userData.noBounds = true;
  const tex = walnutTex();
  const m = pooled(new THREE.MeshPhysicalMaterial({ map: tex, bumpMap: tex, bumpScale: 0.35, roughness: 0.44, metalness: 0, clearcoat: 0.3,
    clearcoatRoughness: 0.32, envMapIntensity: 0.45 }), [cx, cz], [rx, rz], "math-walnut");
  const top = mesh(new THREE.PlaneGeometry(2 * rx, 2 * rz).rotateX(-Math.PI / 2), m, false, false);
  top.position.set(cx, -0.15, cz); top.renderOrder = 0.5;
  tb.add(top);
  return tb;
};

// ══ THE PLACE ══
export type MathGeo = { floor: number; tower: { x: number; z: number }; ghost: { x: number; z: number }; tally: { x: number; z: number }; head: { x: number; z: number } };
/** each brick: its x offset from the tower, its base over the floor, its tilt (rad, about z), its landing squash (0…1);
 *  the tally's, the headline's and the column's x offsets (and whether each is out) */
export type BrickP = { dx: number; h: number; tilt: number; sq: number; on: boolean };
export type MathP = { bricks: BrickP[]; tallyDx: number; tallyOn: boolean; headDx: number; headOn: boolean; colDx: number; colOn: boolean };

export const mathModel = (g: MathGeo) => (): Model<MathP> => {
  const root = new THREE.Group();
  const sc = new THREE.Group(); sc.position.set(0, -g.floor, 0); root.add(sc);
  const bricks = BRICKS.map((_, k) => { const b = brickModel(k); sc.add(b); return b; });
  const tally = tallyModel(); sc.add(tally);
  const head = headModel(); sc.add(head);
  const column = columnModel(); sc.add(column);
  const cx = (g.tower.x + g.ghost.x) / 2;
  sc.add(tableModel(cx, -120, 1700, 760));
  root.add(makeFloor({ y: g.floor, x0: g.tower.x - 1600, x1: g.ghost.x + 1600, z0: -900, z1: 520, reflect: 0.05, shadow: 0.55,
    fadeC: [cx, -60], fadeR: [g.ghost.x - g.tower.x + 900, 600],
    blobs: [{ x: g.tower.x, z: g.tower.z, w: 620, d: 330, a: 0.32 }] }));
  return {
    root,
    update: (p) => {
      p.bricks.forEach((q, k) => {
        const b = bricks[k];
        b.visible = q.on;
        b.position.set(g.tower.x + q.dx, q.h, g.tower.z);
        b.rotation.z = q.tilt;
        b.scale.y = 1 - 0.022 * q.sq;
      });
      tally.visible = p.tallyOn; tally.position.set(g.tally.x + p.tallyDx, 0, g.tally.z - TALLY.hold.d / 2);
      head.visible = p.headOn; head.position.set(g.head.x + p.headDx, 0, g.head.z);
      column.visible = p.colOn; column.position.set(g.ghost.x + p.colDx, 0, g.ghost.z);
    },
  };
};
