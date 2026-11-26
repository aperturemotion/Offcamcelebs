// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE CATCH IN 3-D (041) — "The catch: two partners shared in the deal. Foreman's own cut of the buyout was $110 million."
// On the dark ground (an unseen table: its soft contact shadows), the buyout's cash and three folded name cards:
//   · THE BIG STACK: a bank brick of sixteen real $100 bundles (props/cash.ts: plain straps), four rows, four high, the notes'
//     length running away from the eye, squared a little out of true under ONE wide mustard kraft band whose top run is
//     printed $110,000,000 (record.ts: BUYOUT.foreman), read left to right from the front;
//   · TWO SMALL STACKS: two bundles each, lying crosswise ON the brick at first (one pile, covering its band); on "two
//     partners" each is shoved off at a corner, slides over the brick's top turning a quarter turn, tips off its front edge
//     (a real fall: g at the scene's scale, 1 px ≈ 0.65 mm), lands on the table and slides on to a stop, front left and front
//     right, its notes running away from the eye like the brick's;
//   · THREE FOLDED NAME CARDS: ivory card stock folded into a tent (two leaning panels, a rounded fold, a hair of bow),
//     printed in the paper: PARTNER, PARTNER (slid in from the left and the right on "shared in the deal") and FOREMAN (slid
//     in from the right along the brick's front, on "Foreman's"). Never a partner's real name (BRIEF: private persons).
// The split is the deal's own: 16 : 2 : 2 bundles = $110M : $13.75M : $13.75M (checked at load).
// Units: layer px (a note 240 long); x right, y UP in the model, z toward the viewer; the table at layer y CT.floor.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, type Model } from "../stage";
import { M, rad, hash, fitFont, track, font, paper } from "../kit029";
import { makeBundle, makeBand, BUNDLE, BAND_OUT } from "./cash";
import { BUYOUT } from "../../audit/record";

export const CT = {
  floor: 1450,
  /** the brick's centre (its underside on the table) */
  big: { x: 540, z: -200 },
  /** the small stacks' rests on the table (centre, turn in degrees) */
  small: [{ x: 350, z: 150, yaw: 87 }, { x: 742, z: 154, yaw: 93.5 }],
  /** the cards' rests: the tent's centre on the table, its turn */
  card: { F: { x: 540, z: -26, yaw: 1.2 }, L: { x: 346, z: 318, yaw: 3 }, R: { x: 746, z: 322, yaw: -2.5 } },
} as const;
export const BAND_TEXT = "$" + BUYOUT.foreman.toLocaleString("en-US");
{
  // the stacks are the deal's split: 16 bundles to 2 and 2 is $110M to the partners' $13.75M each
  const partner = (BUYOUT.total - BUYOUT.foreman) / 2;
  if (BAND_TEXT !== "$110,000,000" || Math.abs(16 / 2 - BUYOUT.foreman / partner) > 1e-9) throw new Error("catch: the stacks no longer match the 8-K's split");
}

// ══ THE BIG STACK (built in its own frame: notes along local x, rows along local z; the brick is turned +90° so the band's
//    top run reads left to right) ══
const ROWS = 4, HIGH = 4;
const LAYER = BUNDLE.H + 0.3;
const RP = 2 * BUNDLE.HZ + 1.4;                                    // row to row
const BOT = 0.32 + 0.1;                                             // the bottom bundles sit on the band's bottom run
const OFF = Array.from({ length: ROWS * HIGH }, (_, k) => ({ dx: (hash(k, 1, 21) - 0.5) * 3.4, dz: (hash(k, 2, 21) - 0.5) * 1.6, yaw: (hash(k, 3, 21) - 0.5) * 0.014 }));
const ZIN = 1.5 * RP + BUNDLE.HZ + 1.2 + 0.007 * BUNDLE.HX + 0.6;    // the band's inner half-span (clear of the out-of-square rows)
const YTOP = BOT + (HIGH - 1) * LAYER + BUNDLE.TOP_MID + 0.14;      // the band's top run, its underside
export const BAND = { W: 98, ZIN, YTOP } as const;
/** the brick's height (its highest paper), and its half extents in the world (x across, z deep) */
export const BIG_H = Math.max(YTOP + BAND_OUT, BOT + (HIGH - 1) * LAYER + BUNDLE.H);
export const BIG = { hx: ZIN + BAND_OUT, hz: BUNDLE.HX + 2, h: BIG_H } as const;

// ══ THE SMALL STACKS ══
export const SMALL_H = LAYER + BUNDLE.H;
const SH = { hx: BUNDLE.HX + 1, hz: BUNDLE.HZ + 0.6 };
/** each one's place on the pile (on the brick's top, crosswise, side by side in depth): the front one goes left */
const ON_PILE = [{ x: CT.big.x - 4, z: CT.big.z + 60, yaw: 1.2 }, { x: CT.big.x + 5, z: CT.big.z - 60, yaw: -0.9 }];
const PILE_Y = BIG_H + 0.4;
/** g at the scene's scale: 9.81 m/s² at 0.65 mm a px, in px per frame² */
const G = 9.81 / 0.00065 / 900;

// ══ TIMING ══
export type CatchT = { split: [number, number][]; cardL: [number, number]; cardR: [number, number]; cardF: [number, number] };
export type Pose = { x: number; z: number; h: number; yaw: number; visible: boolean };
/** a footprint's corners (x, z) */
const corners = (x: number, z: number, yawDeg: number, hx: number, hz: number) => {
  const a = rad(yawDeg), c = Math.cos(a), s = Math.sin(a);
  return [[-hx, -hz], [hx, -hz], [hx, hz], [-hx, hz]].map(([u, v]) => [x + u * c + v * s, z - u * s + v * c] as [number, number]);
};
/** two convex footprints overlap (separating axes) */
const overlap = (A: [number, number][], B: [number, number][], m = 0) => {
  for (const P of [A, B]) for (let i = 0; i < 4; i++) {
    const [x0, z0] = P[i], [x1, z1] = P[(i + 1) % 4], nx = -(z1 - z0), nz = x1 - x0, L = Math.hypot(nx, nz);
    const pa = A.map(([x, z]) => (x * nx + z * nz) / L), pb = B.map(([x, z]) => (x * nx + z * nz) / L);
    if (Math.max(...pa) + m < Math.min(...pb) || Math.max(...pb) + m < Math.min(...pa)) return false;
  }
  return true;
};
const BIG_FOOT = corners(CT.big.x, CT.big.z, 0, BIG.hx, BIG.hz);
/** small stack j's slide at fractional frame t: a shove, then friction (it decelerates to rest); it rides the brick's top
 *  while any of it is over the brick, then falls freely and slides on along the table */
const slideXZ = (T: CatchT, j: number, t: number) => {
  const [a, b] = T.split[j], s0 = ON_PILE[j], s1 = CT.small[j];
  const u = Math.max(0, Math.min(1, (t - a) / (b - a))), e = 1 - Math.pow(1 - u, 2.3);
  return { x: s0.x + (s1.x - s0.x) * e, z: s0.z + (s1.z - s0.z) * e, yaw: s0.yaw + (s1.yaw - s0.yaw) * e };
};
const leaveCache = new Map<string, number>();
/** the (fractional) frame small stack j is clear of the brick's top */
const leaveAt = (T: CatchT, j: number) => {
  const key = `${j}-${T.split[j].join(",")}`;
  const c = leaveCache.get(key);
  if (c !== undefined) return c;
  const [a, b] = T.split[j];
  const over = (t: number) => { const p = slideXZ(T, j, t); return overlap(corners(p.x, p.z, p.yaw, SH.hx, SH.hz), BIG_FOOT); };
  let lo = a, hi = b;
  if (over(b)) throw new Error(`catch: small stack ${j} never leaves the brick`);
  for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (over(m)) lo = m; else hi = m; }
  leaveCache.set(key, hi);
  return hi;
};
export const smallPose = (T: CatchT, j: number, f: number): Pose => {
  const p = slideXZ(T, j, f), t0 = leaveAt(T, j);
  let h = PILE_Y;
  if (f > t0) h = Math.max(0, PILE_Y - 0.5 * G * (f - t0) ** 2);
  return { x: p.x, z: p.z, h, yaw: p.yaw, visible: true };
};
/** the frame small stack j lands on the table */
export const smallLands = (T: CatchT, j: number) => Math.ceil(leaveAt(T, j) + Math.sqrt((2 * PILE_Y) / G));

// ══ THE CARDS ══
export const CARD = { w: 180, ph: 72, lean: 21, t: 1.1 } as const;
/** the tent's depth on the table and its height */
export const TENT = { d: 2 * CARD.ph * Math.sin(rad(CARD.lean)), h: CARD.ph * Math.cos(rad(CARD.lean)) } as const;
type CardKey = "F" | "L" | "R";
const CARD_FROM: Record<CardKey, { dx: number; dz: number; spin: number }> = {
  L: { dx: -980, dz: 24, spin: -7 },
  R: { dx: 980, dz: 22, spin: 6 },
  F: { dx: 1000, dz: 6, spin: 6 },
};
/** a card's slide along the table: pushed in, braking on its fold's feet; it never leaves the table */
export const cardPose = (T: CatchT, k: CardKey, f: number): Pose => {
  const [a, b] = k === "F" ? T.cardF : k === "L" ? T.cardL : T.cardR, r = CT.card[k], o = CARD_FROM[k];
  if (f < a) return { x: r.x + o.dx, z: r.z + o.dz, h: 0, yaw: r.yaw + o.spin, visible: false };
  const u = Math.min(1, (f - a) / (b - a)), e = 1 - Math.pow(1 - u, 2.6);
  return { x: r.x + o.dx * (1 - e), z: r.z + o.dz * (1 - e), h: 0, yaw: r.yaw + o.spin * (1 - e), visible: true };
};
/** a card's footprint (x, z) at its pose */
export const cardFoot = (p: Pose) => corners(p.x, p.z, p.yaw, CARD.w / 2 + 1, TENT.d / 2 + 1.5);
export const smallFoot = (p: Pose) => corners(p.x, p.z, p.yaw, SH.hx, SH.hz);
export const bigFoot = () => BIG_FOOT;

// ══ POINTS FOR THE CAMERA AND THE CHECKS (layer coords: [x, y down, z]) ══
type P3 = [number, number, number];
const box8 = (foot: [number, number][], h0: number, h1: number): P3[] => foot.flatMap(([x, z]) => [[x, CT.floor - h0, z], [x, CT.floor - h1, z]] as P3[]);
export const bigPts = () => box8(BIG_FOOT, 0, BIG_H);
export const smallPts = (p: Pose) => box8(smallFoot(p), p.h, p.h + SMALL_H);
export const cardPts = (p: Pose) => box8(cardFoot(p), 0, TENT.h + 1.5);
/** the band's print on the brick's top (its corners): the figure spans ±PRINT_HALF across, the band's width deep */
export const PRINT_HALF = 140;
export const bandPrint = (): P3[] => [[-PRINT_HALF, -BAND.W / 2 + 8], [PRINT_HALF, -BAND.W / 2 + 8], [PRINT_HALF, BAND.W / 2 - 8], [-PRINT_HALF, BAND.W / 2 - 8]]
  .map(([x, z]) => [CT.big.x + x, CT.floor - (YTOP + BAND_OUT), CT.big.z + z] as P3);
/** a card's print (the name on its front panel), its corners */
export const PRINT_U = 74;
export const cardPrint = (p: Pose): P3[] => {
  const a = rad(p.yaw), c = Math.cos(a), s = Math.sin(a), L = rad(CARD.lean);
  const pt = (u: number, v: number): P3 => {
    // v up the front panel from its foot (0) to the fold (CARD.ph)
    const lx = u, ly = v * Math.cos(L), lz = TENT.d / 2 - v * Math.sin(L) + 0.6;
    return [p.x + lx * c + lz * s, CT.floor - (p.h + ly), p.z - lx * s + lz * c];
  };
  return [pt(-PRINT_U, 16), pt(PRINT_U, 16), pt(PRINT_U, 56), pt(-PRINT_U, 56)];
};

// ══ PRINT ══
/** ivory card stock: a fine fibre, a whisper of mottling, the name in the paper (ink a hair broken by the fibre) */
const cardTex = (name: string, seed: number) => paintTex(`catch-card-${name}-${seed}`, CARD.w, CARD.ph, (g) => {
  const w = CARD.w, h = CARD.ph;
  g.fillStyle = "#F3EEE2"; g.fillRect(0, 0, w, h);
  const gr = g.createLinearGradient(0, 0, w, h); gr.addColorStop(0, "rgba(255,252,244,0.5)"); gr.addColorStop(1, "rgba(214,204,186,0.35)");
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 1800; i++) { g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? "140,125,100" : "255,255,250"},${0.04 + 0.05 * hash(i, 2, seed)})`; g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 0.4 + 1.6 * hash(i, 5, seed), 0.25); }
  // the name, centred low on the panel (it is read leaning back), and a thin rule over it
  g.fillStyle = "#231914"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 3.2);
  fitFont(g, 800, 40, name, w - 30);
  g.fillText(name, w / 2 + 1.6, h - 20);
  track(g, 0);
  g.fillStyle = "rgba(35,25,20,0.7)"; g.fillRect(w / 2 - 22, 14, 44, 1.1);
  // the ink sits in the fibre: a few specks knocked out of it
  for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(243,238,226,${0.25 + 0.3 * hash(i, 6, seed)})`; g.fillRect(hash(i, 7, seed) * w, 26 + hash(i, 8, seed) * (h - 40), 0.6, 0.4); }
  // handling: the bottom edge a touch greyer
  const hb = g.createLinearGradient(0, h - 8, 0, h); hb.addColorStop(0, "rgba(120,105,85,0)"); hb.addColorStop(1, "rgba(120,105,85,0.16)");
  g.fillStyle = hb; g.fillRect(0, h - 8, w, 8);
}, 4);
const backTex = (seed: number) => paintTex(`catch-cardback-${seed}`, CARD.w, CARD.ph, (g) => {
  const w = CARD.w, h = CARD.ph;
  g.fillStyle = "#EFE9DC"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 1400; i++) { g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? "140,125,100" : "255,255,250"},${0.04 + 0.04 * hash(i, 2, seed)})`; g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 0.4 + 1.6 * hash(i, 5, seed), 0.25); }
}, 2);

/** a soft contact pool under a thing (a floor-marked plane, never an object) */
let softT: THREE.CanvasTexture | null = null;
const softTex = () => {
  if (softT) return softT;
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
  g.filter = "blur(22px)"; g.fillStyle = "#fff"; g.beginPath(); g.ellipse(128, 128, 96, 84, 0, 0, Math.PI * 2); g.fill();
  softT = new THREE.CanvasTexture(c);
  return softT;
};
const pool = (w: number, d: number, a: number, y = 0.3) => {
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: softTex(), transparent: true, depthWrite: false, opacity: a, toneMapped: false }));
  p.rotation.x = -Math.PI / 2; p.position.y = y; p.renderOrder = 1.5;
  p.userData.isFloor = true; p.userData.noBounds = true;
  return p;
};

// ══ THE MODEL ══
export type CatchP = { f: number };
export const catchModel = (T: CatchT) => (): Model<CatchP> => {
  const root = new THREE.Group();
  const FY = -CT.floor;

  // the big stack
  const bigG = new THREE.Group(); bigG.userData.obj = "big"; root.add(bigG);
  bigG.position.set(CT.big.x, FY, CT.big.z);
  {
    const inner = new THREE.Group(); inner.rotation.y = Math.PI / 2; bigG.add(inner);
    for (let l = 0; l < HIGH; l++) for (let r = 0; r < ROWS; r++) {
      const k = l * ROWS + r, o = OFF[k];
      const b = makeBundle({ seed: 60 + k * 3, flip: hash(k, 5, 21) > 0.55, strap: "" });
      b.position.set(o.dx, BOT + l * LAYER, (r - 1.5) * RP + o.dz);
      b.rotation.y = o.yaw;
      inner.add(b);
    }
    inner.add(makeBand({ w: BAND.W, zIn: ZIN, yTop: YTOP, text: BAND_TEXT, seed: 11.3, key: "catch-band-110" }));
    bigG.add(pool(2 * BIG.hx + 90, 2 * BIG.hz + 80, 0.34));
  }

  // the small stacks
  const smalls = [0, 1].map((j) => {
    const g = new THREE.Group(); g.userData.obj = `small${j}`; root.add(g);
    for (let l = 0; l < 2; l++) {
      const b = makeBundle({ seed: 20 + j * 7 + l * 3, flip: (j + l) % 2 === 1, strap: "" });
      b.position.set((hash(j, l, 4) - 0.5) * 3, l * LAYER, (hash(j, l, 5) - 0.5) * 1.4);
      b.rotation.y = (hash(j, l, 6) - 0.5) * 0.016;
      g.add(b);
    }
    const p = pool(2 * SH.hx + 60, 2 * SH.hz + 60, 0.3);
    root.add(p);
    return { g, p };
  });

  // the cards
  const cardMats = new Map<CardKey, THREE.MeshStandardMaterial>();
  const cards = (["F", "L", "R"] as CardKey[]).map((k, i) => {
    const name = k === "F" ? "FOREMAN" : "PARTNER";
    const g = new THREE.Group(); g.userData.obj = `card${k}`; root.add(g);
    const face = M.print(cardTex(name, 31 + i), 0.82) as THREE.MeshStandardMaterial;
    cardMats.set(k, face);
    const back = M.print(backTex(41 + i), 0.86);
    const edge = M.paper("#E4DCCB");
    const L = rad(CARD.lean);
    const panel = (front: boolean) => {
      const s = paper({ w: CARD.w, h: CARD.ph, t: CARD.t, face: front ? face : back, back, edge, bow: 0.9, seed: i * 3 + (front ? 1 : 2), wave: 0.3, seg: 36 });
      const hold = new THREE.Group();
      if (!front) hold.rotation.y = Math.PI;
      s.rotation.x = -L;
      s.position.set(0, (CARD.ph / 2) * Math.cos(L), TENT.d / 2 - (CARD.ph / 2) * Math.sin(L));
      hold.add(s);
      return hold;
    };
    const tent = new THREE.Group(); tent.userData.unit = true;
    tent.add(panel(true), panel(false));
    // the fold: the card's bend at the top, rounded
    const fold = mesh(new THREE.CylinderGeometry(CARD.t * 0.9, CARD.t * 0.9, CARD.w, 10), edge);
    fold.rotation.z = Math.PI / 2; fold.rotation.x = 0; fold.position.set(0, TENT.h - 0.2, 0);
    tent.add(fold);
    g.add(tent);
    g.add(pool(CARD.w + 50, TENT.d + 50, 0.24));
    return { k, g, name, i };
  });

  root.add(makeFloor({ y: CT.floor, x0: -900, x1: 2000, z0: -1300, z1: 1000, reflect: 0.04, shadow: 0.5, fadeC: [540, -60], fadeR: [1150, 820] }));

  return {
    root,
    update: (p) => {
      const f = p.f;
      smalls.forEach(({ g, p: pl }, j) => {
        const s = smallPose(T, j, f);
        g.position.set(s.x, FY + s.h, s.z);
        g.rotation.y = rad(s.yaw);
        // its contact pool: under it once it is on the table (on the pile the brick's top takes its shadow)
        pl.position.set(s.x, FY + 0.3, s.z); pl.rotation.z = rad(s.yaw);
        (pl.material as THREE.MeshBasicMaterial).opacity = 0.3 * Math.max(0, 1 - s.h / 30);
        pl.visible = s.h < 30;
      });
      cards.forEach(({ k, g, name, i }) => {
        const c = cardPose(T, k, f);
        g.visible = c.visible;
        g.position.set(c.x, FY + c.h, c.z);
        g.rotation.y = rad(c.yaw);
        // keep the print fresh until the fonts have loaded (paintTex repaints only when asked)
        cardMats.get(k)!.map = cardTex(name, 31 + i);
      });
    },
  };
};
void font;
