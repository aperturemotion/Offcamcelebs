// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE MATH, IN 3-D (039) — "By the lawsuit's own numbers, his three fights came to about $85 million, not $365 million. To be
// fair, the big number was the deal's headline, not his claim. And $85 million for three fights is still a fortune."
// On the espresso ground:
//   · THE TOWER: three BRICKS of strapped $100 bundles (cash.ts), each 2 × 2 bundles wide and deep, 3, 7 and 7 layers high
//     (15 : 35 : 35, the lawsuit's own figures per fight), stacked one on another. Over each brick a cream paper SASH (a band
//     over its top and down its front and back) printed with its figure: $15M at the bottom, $35M, $35M.
//   · THE TALLY: a white card standing in a beech place-card holder in front of the tower: ABOUT $85M.
//   · THE GHOST: beside the tower a column of the tower's own footprint drawn in light (thin bars and faint glass, no
//     substance), 365/85 of the tower's height, ringed at each tower's height (4.3 towers), "$365M" lit at its top. It rises
//     from the floor, then fades away.
//   · THE HEADLINE: a small kraft tent card, HEADLINE over $365M, standing where the ghost stood.
// Units are the layer's px (y up), the floor at y 0 of `sc`; every object's x is the layer's x.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, type Model } from "../stage";
import { M, hash, col, rbox, fitFont, track } from "../kit029";
import { bundle, NOTE, BUNDLE_H } from "../cash";

// ══ THE BRICKS ══
/** one layer of bundles (a bundle above sits 0.3 over the one below) */
export const LAYER = BUNDLE_H + 0.3;
const HX = NOTE.W / 2 + 4, HZ = NOTE.D / 2 + 7;   // the four bundles' centres in a layer (±HX, ±HZ)
const SASH = { w: 132, t: 0.6, x: -138, z: 117 } as const;   // the sash's width, thickness, its centre x on the brick, its inner z
export const BRICK = { hw: HX + NOTE.W / 2 + 2.4, hd: SASH.z + SASH.t } as const;   // half width (x) and half depth (z) at most
export const BRICKS = [
  { n: 3, label: "$15M" },
  { n: 7, label: "$35M" },
  { n: 7, label: "$35M" },
] as const;
/** a brick's bundles' height, and its whole height over its sash */
export const brickH = (k: number) => BRICKS[k].n * LAYER - 0.3;
export const brickTall = (k: number) => brickH(k) + 0.3 + SASH.t;
/** where brick k rests (its base over the floor) in the finished tower: on the sash of the one below, 0.3 over it */
export const brickBase = (k: number) => { let b = 0; for (let j = 0; j < k; j++) b += brickTall(j) + 0.3; return b; };
export const TOWER_H = brickBase(BRICKS.length - 1) + brickTall(BRICKS.length - 1);
/** the sash's printed front panel, on brick k (brick frame): its centre x, its z, its bottom and top */
export const sashPanel = (k: number) => ({ x0: SASH.x - SASH.w / 2, x1: SASH.x + SASH.w / 2, z: SASH.z + SASH.t, y0: 0, y1: brickH(k) + 0.3 });

const INK = "#2A1B15";
/** the sash's printed front: cream paper, two fine rules, the figure as large as the band allows */
const sashTex = (k: number, w: number, h: number, label: string) => paintTex(`math-sash-${k}`, w, h, (g) => {
  g.fillStyle = "#EFE6D2"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 160; i++) { g.fillStyle = `rgba(${hash(i, k, 1) > 0.5 ? "140,120,90" : "255,250,235"},${0.05 + 0.06 * hash(i, k, 2)})`; g.fillRect(hash(i, k, 3) * w, hash(i, k, 4) * h, 0.6 + 2 * hash(i, k, 5), 0.5); }
  g.fillStyle = "rgba(42,27,21,0.7)"; g.fillRect(0, 3, w, 1); g.fillRect(0, h - 4, w, 1);
  g.fillStyle = INK; g.textAlign = "center"; g.textBaseline = "middle";
  track(g, 0.5);
  fitFont(g, 800, Math.min(h * 0.66, 64), label, w - 18);
  g.fillText(label, w / 2, h / 2 + 2);
}, 4);

const brickModel = (k: number) => {
  const b = new THREE.Group();
  const n = BRICKS[k].n;
  let i = 0;
  for (let l = 0; l < n; l++) for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const seed = 40 + k * 97 + i;
    const bd = bundle(seed, hash(seed, 3, 9) > 0.55);
    bd.userData.obj = `brick${k}-${i}`;
    bd.rotation.y = (hash(seed, 4, 4) - 0.5) * 0.016;
    bd.position.set(sx * HX + (hash(seed, 5, 5) - 0.5) * 2, l * LAYER, sz * HZ + (hash(seed, 6, 6) - 0.5) * 1.6);
    b.add(bd);
    i++;
  }
  // the sash: over the top (0.3 over the highest note) and down the front and back to the brick's foot
  const h = brickH(k);
  const paper = M.paper("#EFE6D2");
  const sash = new THREE.Group(); sash.userData.obj = `sash${k}`; b.add(sash);
  const top = mesh(new THREE.BoxGeometry(SASH.w, SASH.t, 2 * (SASH.z + SASH.t)), paper);
  top.position.set(SASH.x, h + 0.3 + SASH.t / 2, 0); sash.add(top);
  const face = M.print(sashTex(k, SASH.w, h + 0.3, BRICKS[k].label), 0.86);
  for (const sz of [1, -1]) {
    const p = mesh(new THREE.BoxGeometry(SASH.w, h + 0.3, SASH.t), sz > 0 ? [paper, paper, paper, paper, face, paper] : paper);
    p.position.set(SASH.x, (h + 0.3) / 2, sz * (SASH.z + SASH.t / 2)); sash.add(p);
  }
  return b;
};

// ══ THE TALLY: a white card in a beech place-card holder ══
export const TALLY = { w: 230, h: 150, t: 1.6, foot: 8, hold: { w: 206, h: 22, d: 44 } } as const;
const tallyTex = () => paintTex("math-tally", TALLY.w, TALLY.h, (g) => {
  const { w, h } = TALLY;
  g.fillStyle = "#F4F1EA"; g.fillRect(0, 0, w, h);
  g.strokeStyle = "rgba(42,27,21,0.5)"; g.lineWidth = 1; g.strokeRect(8, 8, w - 16, h - 16);
  g.fillStyle = INK; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 6); fitFont(g, 700, 26, "ABOUT", w - 60); g.fillText("ABOUT", w / 2 + 3, 46);
  track(g, 0); fitFont(g, 800, 84, "$85M", w - 34); g.fillText("$85M", w / 2, 122);
}, 4);
const tallyModel = () => {
  const t = new THREE.Group();
  const beech = M.satin("#D3B27E", 0.5);
  const hold = rbox(TALLY.hold.w, TALLY.hold.h, TALLY.hold.d, 4, beech, 3);
  hold.position.set(0, 0.3 + TALLY.hold.h / 2, TALLY.hold.d); hold.userData.obj = "tally-holder"; t.add(hold);
  const paper = M.paper("#F4F1EA");
  const card = mesh(new THREE.BoxGeometry(TALLY.w, TALLY.h, TALLY.t), [paper, paper, paper, paper, M.print(tallyTex(), 0.85), paper]);
  card.position.set(0, TALLY.foot + TALLY.h / 2, TALLY.hold.d / 2); card.userData.obj = "tally-card"; card.userData.pierces = ["tally-holder"];
  t.add(card);
  return t;
};

// ══ THE HEADLINE: a kraft tent card ══
export const HEAD = { w: 260, L: 190, t: 1.4, th: (15 * Math.PI) / 180 } as const;
export const HEAD_TOP = HEAD.L * Math.cos(HEAD.th) + 0.5;
export const HEAD_FOOT = HEAD.L * Math.sin(HEAD.th);
const headTex = () => paintTex("math-head", HEAD.w, HEAD.L, (g) => {
  const { w, L } = HEAD;
  g.fillStyle = "#C9A272"; g.fillRect(0, 0, w, L);
  for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(${hash(i, 8, 1) > 0.5 ? "110,78,40" : "235,205,160"},${0.06 + 0.08 * hash(i, 8, 2)})`; g.fillRect(hash(i, 8, 3) * w, hash(i, 8, 4) * L, 0.6 + 2.4 * hash(i, 8, 5), 0.6); }
  g.fillStyle = INK; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 5); fitFont(g, 700, 25, "HEADLINE", w - 70); g.fillText("HEADLINE", w / 2 + 2.5, 50);
  g.fillRect(w / 2 - 40, 64, 80, 2);
  track(g, 0); fitFont(g, 800, 80, "$365M", w - 30); g.fillText("$365M", w / 2, 140);
}, 4);
const headModel = () => {
  const t = new THREE.Group(); t.userData.obj = "head-card";
  const kraft = M.paper("#C9A272");
  for (const sz of [1, -1]) {
    const leaf = new THREE.Group();
    leaf.position.set(0, 0.5, sz * HEAD_FOOT);
    leaf.rotation.x = -sz * HEAD.th;
    const g = new THREE.BoxGeometry(HEAD.w, HEAD.L, HEAD.t).translate(0, HEAD.L / 2, sz * HEAD.t / 2);
    leaf.add(mesh(g, sz > 0 ? [kraft, kraft, kraft, kraft, M.print(headTex(), 0.9), kraft] : kraft));
    t.add(leaf);
  }
  return t;
};

// ══ THE GHOST: the $365M column, drawn in light ══
export const GHOST_H = (TOWER_H * 365) / 85;
const ghostTex = () => paintTex("math-ghost", 440, 150, (g) => {
  g.clearRect(0, 0, 440, 150);
  g.fillStyle = "#F7EBDA"; g.textAlign = "center"; g.textBaseline = "middle";
  track(g, 0); fitFont(g, 800, 128, "$365M", 420);
  g.fillText("$365M", 220, 80);
}, 3);
const ghostModel = () => {
  const t = new THREE.Group(); t.userData.obj = "ghost";
  const W = 2 * BRICK.hw, D = 2 * BRICK.hd, B = 5;
  const bar = new THREE.MeshBasicMaterial({ color: col("#F2E4D0"), transparent: true, opacity: 0.6, depthWrite: false, toneMapped: false });
  const tier = new THREE.MeshBasicMaterial({ color: col("#F2E4D0"), transparent: true, opacity: 0.3, depthWrite: false, toneMapped: false });
  const glass = new THREE.MeshBasicMaterial({ color: col("#F2E4D0"), transparent: true, opacity: 0.05, depthWrite: false, toneMapped: false });
  const text = new THREE.MeshBasicMaterial({ map: ghostTex(), transparent: true, opacity: 1, depthWrite: false, toneMapped: false });
  const posts: THREE.Mesh[] = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const p = mesh(new THREE.BoxGeometry(B, 1, B).translate(0, 0.5, 0), bar, false, false);
    p.position.set(sx * (W / 2 - B / 2), 0, sz * (D / 2 - B / 2)); t.add(p); posts.push(p);
  }
  const ring = (m: THREE.Material) => {
    const r = new THREE.Group();
    for (const sz of [-1, 1]) { const a = mesh(new THREE.BoxGeometry(W, B, B), m, false, false); a.position.set(0, -B / 2, sz * (D / 2 - B / 2)); r.add(a); }
    for (const sx of [-1, 1]) { const a = mesh(new THREE.BoxGeometry(B, B, D - 2 * B), m, false, false); a.position.set(sx * (W / 2 - B / 2), -B / 2, 0); r.add(a); }
    t.add(r); return r;
  };
  const base = ring(bar); base.position.y = B;
  const top = ring(bar);
  const tiers: { r: THREE.Group; y: number }[] = [];
  for (let y = TOWER_H; y < GHOST_H - 40; y += TOWER_H) { const r = ring(tier); r.position.y = y; tiers.push({ r, y }); }
  const body = mesh(new THREE.BoxGeometry(W, 1, D).translate(0, 0.5, 0), glass, false, false); t.add(body);
  const label = mesh(new THREE.PlaneGeometry(440, 150), text, false, false); label.position.z = D / 2 + 0.6; t.add(label);
  const set = (g: number, a: number) => {
    const H = Math.max(1, g * GHOST_H);
    t.visible = a > 0.004 && g > 0.002;
    posts.forEach((p) => { p.scale.y = H; });
    body.scale.y = H;
    top.position.y = H;
    for (const q of tiers) q.r.visible = q.y < H - 12;
    label.position.y = H - 104;
    label.visible = H > 220;
    bar.opacity = 0.6 * a; tier.opacity = 0.3 * a; glass.opacity = 0.05 * a; text.opacity = a;
  };
  return { t, set };
};

// ══ THE PLACE ══
export type MathGeo = { floor: number; tower: { x: number; z: number }; ghost: { x: number; z: number }; tally: { x: number; z: number }; head: { x: number; z: number } };
/** each brick: its x offset from the tower, its base over the floor, its tilt (rad, about z), its landing squash (0…1);
 *  the tally's and the headline's x offsets (and whether each is out); the ghost's growth and its light (0…1) */
export type BrickP = { dx: number; h: number; tilt: number; sq: number; on: boolean };
export type MathP = { bricks: BrickP[]; tallyDx: number; tallyOn: boolean; headDx: number; headOn: boolean; ghostG: number; ghostA: number };

export const mathModel = (g: MathGeo) => (): Model<MathP> => {
  const root = new THREE.Group();
  const sc = new THREE.Group(); sc.position.set(0, -g.floor, 0); root.add(sc);
  const bricks = BRICKS.map((_, k) => { const b = brickModel(k); sc.add(b); return b; });
  const tally = tallyModel(); sc.add(tally);
  const head = headModel(); sc.add(head);
  const ghost = ghostModel(); ghost.t.position.set(g.ghost.x, 0, g.ghost.z); sc.add(ghost.t);
  root.add(makeFloor({ y: g.floor, x0: g.tower.x - 1400, x1: g.ghost.x + 1400, z0: -900, z1: 420, reflect: 0.14, shadow: 0.5,
    fadeC: [(g.tower.x + g.ghost.x) / 2, 0], fadeR: [g.ghost.x - g.tower.x + 520, 460],
    blobs: [{ x: g.tower.x, z: g.tower.z, w: 640, d: 340, a: 0.3 }] }));
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
      ghost.set(p.ghostG, p.ghostA);
    },
  };
};
