// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE VERDICT IN 3-D (041) — "To be fair, those early royalties were never broken out, and sales were already booming. So,
// $200 million from a grill? Our rating: legit. Send us who to audit next." On the cream ground, four real things on one
// floor:
//   · FOUR YEAR CARDS standing in a WALNUT CARD RAIL: heavy ivory index stock (1.4 mm, a slight bow, one corner a hair
//     lifted), a legal-blue printed header ROYALTIES, the year big (1995, 1996, 1997, 1998) and a BLANK amount line ($ and a
//     rule, nothing on it). The rail is a walnut base with two lips and the slot between them; each card leans back on the
//     back lip, as a card does in a slot.
//   · EIGHT RETAIL GRILL BOXES: printed corrugated cardboard (a white-coated board over brown flutes, the flutes showing as
//     faint washboard ribs under the print, rounded crushed corners, scuffs), the front panel printed SALTON small, a line
//     drawing of the grill, his face photo small in a corner, and THE GEORGE FOREMAN GRILL big; the top's two outer flaps
//     meeting at a seam under packing tape. They slide and are tossed onto a tall pile behind the cards (tiers 3, 3, 2).
//   · THE GRILL, as on the counter in the hook, closed: a hinged clamshell ~360 × 270 mm whose whole body tilts 8° toward
//     the front (short front feet, tall back feet), a glossy black moulded housing, the lid's black shell with a BRUSHED
//     STEEL top skin, the seam between them (the ribbed plates' edges showing), two hinge knuckles at the back, a handle bar
//     on the lid's front edge, a drip spout under the front lip, GEORGE FOREMAN in plain type on the housing's front; steam
//     wisps rise thinly from the seam. In front, its DRIP TRAY (black plastic, open), out on the counter and FULL OF CASH:
//     three stacks of real bundles (cash.ts), two high, held in one paper band printed $200,000,000.
//   · THE PLAQUE: a 300 × 80 mm green (#3f8f5c) vitreous-enamel plate in a brushed brass rim, LEGIT in raised polished brass
//     letters (the word ~260 mm, over 60% of the frame when the camera is in), on a brass S-hook over the handle bar: it
//     swings onto the handle, seats on it and sways to rest. Not a stamp. It rates the FIGURE, never Foreman.
// Units are the layer's px (1 px ≈ 1 mm); x right, y UP, z toward the viewer; the floor at layer y g.floor.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, imageOf, type Model } from "../stage";
import { M, rbox, rad, col, hash, fitFont, font, track, paper, type PaperOpts } from "../kit029";
import { makeBundle, makeBand, BUNDLE } from "./cash";

// ══ THE GEOMETRY (exported: the place's camera, timing and checks are solved on it) ══
/** a year card (print px), its thickness, its lean back in the slot (deg) */
export const CARD = { w: 180, h: 250, t: 1.4, lean: 8 } as const;
export const YEARS = ["1995", "1996", "1997", "1998"] as const;
/** the walnut rail: its length, base, lips and slot (the slot's FRONT edge at local z 0) */
export const RAIL = { L: 860, baseH: 20, d: 64, lipH: 16, lipD: 20, x: 520, z: 0 } as const;
/** the slot: the card stands with its bottom front edge 2.5 mm behind the front lip; the back lip leans the card back */
const SLOT_FRONT = RAIL.z + RAIL.d / 2 - RAIL.lipD;         // the front lip's back face
const CARD_BASE_Z = SLOT_FRONT - 2.5;                         // the card's front face at its foot
const BACK_LIP_FRONT = CARD_BASE_Z - CARD.t / Math.cos(rad(CARD.lean)) - RAIL.lipH * Math.tan(rad(CARD.lean)) - 0.35;
export const CARD_X = [-306, -102, 102, 306].map((x) => RAIL.x + x);
/** a point on card k's face (u, v in print px from its top-left) as (x, h, z) */
export const cardPt = (k: number, u: number, v: number) => {
  const up = CARD.h - v, a = rad(CARD.lean);
  return { x: CARD_X[k] + u - CARD.w / 2, h: RAIL.baseH + 0.4 + up * Math.cos(a), z: CARD_BASE_Z - up * Math.sin(a) };
};

/** a retail grill box: front panel w × h, depth d */
export const BOX = { w: 380, h: 320, d: 170 } as const;
const BOX_GAP = 0.35;
/** the pile behind the cards: final poses (x, z of the box's centre, h of its bottom, yaw deg), tier and the side it comes
 *  from (−1 left, +1 right), in the order they land */
export const PILE_Z = -470;
export type BoxPose = { x: number; h: number; z: number; yaw: number; tier: number; side: number };
export const PILE: BoxPose[] = (() => {
  const T = (t: number) => t * (BOX.h + BOX_GAP);
  const p: BoxPose[] = [
    { x: 0, z: 4, yaw: 1.2, tier: 0, side: -1 }, { x: -394, z: -8, yaw: -1.6, tier: 0, side: -1 }, { x: 395, z: 6, yaw: 1.8, tier: 0, side: 1 },
    { x: 6, z: -4, yaw: -1.4, tier: 1, side: 1 }, { x: -388, z: 9, yaw: 2.2, tier: 1, side: -1 }, { x: 398, z: -6, yaw: -2.0, tier: 1, side: 1 },
    { x: -392, z: 2, yaw: -2.4, tier: 2, side: -1 }, { x: 6, z: -9, yaw: 1.6, tier: 2, side: 1 },
  ].map((b) => ({ ...b, x: RAIL.x + b.x, z: PILE_Z + b.z, h: T(b.tier) }));
  return p;
})();
/** a box's footprint corners at a pose (x, z), for the checks */
export const boxCorners = (b: { x: number; z: number; yaw: number }) => {
  const a = rad(b.yaw), c = Math.cos(a), s = Math.sin(a);
  return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([i, j]) => { const lx = (i * BOX.w) / 2, lz = (j * BOX.d) / 2; return { x: b.x + lx * c + lz * s, z: b.z - lx * s + lz * c }; });
};

/** THE GRILL (its local frame: the footprint's centre on the floor, z forward). The body tilts TILT° toward the front about
 *  the footprint's centre at height Y0; the housing H high, the seam S, the lid L high, the skin on top */
export const GRILL = { w: 360, d: 270, tilt: 8, Y0: 44, H: 74, S: 4, L: 56, skin: 5, barR: 9, barW: 196, barOut: 42 } as const;
/** a point of the tilted body (its frame: y up from the housing's underside, z forward from the footprint's centre) in the
 *  grill's local frame (x, h, z) */
export const bodyPt = (x: number, y: number, z: number) => {
  const a = rad(GRILL.tilt), c = Math.cos(a), s = Math.sin(a);
  return { x, h: GRILL.Y0 + y * c - z * s, z: y * s + z * c };
};
/** the handle bar's centre (body frame) and in the grill's frame */
const BAR_B = { y: GRILL.H + GRILL.S + GRILL.L * 0.5, z: GRILL.d / 2 + GRILL.barOut };
export const BAR = bodyPt(0, BAR_B.y, BAR_B.z);
/** THE PLAQUE: w × h × t, the word's width */
export const PLAQUE = { w: 330, h: 80, t: 7, word: 290 } as const;
/** THE S-HOOK (its frame: the wire's centre at the top of the bar = the seat, the pivot): its upper curve round the bar
 *  (radius R), the stem down the bar's front (X below the bar), the lower curve (rU) through the plate's ring (ringR) */
export const HOOK = { R: GRILL.barR + 2.4, wire: 2.1, rU: 3.6, X: 15, ringR: 4.5, ringT: 1.3 } as const;
const yU = -(HOOK.R + GRILL.barR + HOOK.X), zU = HOOK.R - HOOK.rU;
/** the plate's top edge and its centre's depth, in the hook's frame */
export const PLATE_TOP = yU - HOOK.ringR + 1.5, PLATE_Z = zU;
/** THE DRIP TRAY (the grill's frame): outer w × h × d, its walls, its centre z (out on the counter, clear of the plaque) */
export const TRAY = { w: 344, h: 30, d: 262, wall: 4, floor: 3, z: BAR.z + PLATE_Z + PLAQUE.t / 2 + 30 + 131 } as const;
/** the hook's seat: the top of the bar (the pivot the plaque swings about), in the grill's frame */
export const SEAT = { x: 0, h: BAR.h + HOOK.R, z: BAR.z };
/** a point on the plaque's face (u, v from its top-left, print px) for a seat pose (world) and its swing (deg about z) */
export const plqPt = (p: { x: number; h: number; z: number; swing: number }, u: number, v: number) => {
  const lx = u - PLAQUE.w / 2, ly = PLATE_TOP - v;
  const a = rad(p.swing), c = Math.cos(a), s = Math.sin(a);
  return { x: p.x + lx * c - ly * s, h: p.h + lx * s + ly * c, z: p.z + PLATE_Z + PLAQUE.t / 2 };
};
/** the cash brick in the tray: three stacks side by side (the notes' length along z), two bundles high */
const STACK_X = [-104, 0, 104];
const CASH_Y0 = TRAY.floor + 0.35 + 0.33;              // over the band's bottom run
const BAND_TOP = CASH_Y0 + BUNDLE.H + 0.15 + BUNDLE.TOP_MID + 0.12;
export const CASH_TOP = BAND_TOP + 0.9;

// ══ SURFACES ══
/** a soft contact shadow (alpha map: white = dark) */
let blobT: THREE.CanvasTexture | null = null;
const blobTex = () => {
  if (blobT) return blobT;
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
  const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, "#fff"); gr.addColorStop(0.5, "#9a9a9a"); gr.addColorStop(0.82, "#202020"); gr.addColorStop(1, "#000");
  g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  blobT = new THREE.CanvasTexture(c);
  return blobT;
};
const contact = (w: number, d: number, a: number) => {
  const m = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, depthWrite: false, opacity: a, toneMapped: false, alphaMap: blobTex() });
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), m);
  p.rotation.x = -Math.PI / 2; p.renderOrder = 1.5; p.userData.noBounds = true;
  return { p, m, a };
};
/** a fine tileable grain (bump): paper fibre (0), plastic stipple (1), brushed hairlines along x (2), corrugation ribs (3) */
const grainC: Record<number, HTMLCanvasElement> = {};
const grainTex = (k: 0 | 1 | 2 | 3, rx: number, ry = rx) => {
  if (!grainC[k]) {
    const c = document.createElement("canvas"); c.width = c.height = 512;
    const g = c.getContext("2d")!;
    g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, 512, 512);
    if (k === 0) {
      for (let i = 0; i < 9000; i++) {
        const v = 100 + Math.round(60 * hash(i, 41, 4));
        g.strokeStyle = `rgba(${v},${v},${v},0.5)`; g.lineWidth = 0.5 + hash(i, 42, 4) * 0.8;
        const x = hash(i, 43, 4) * 512, y = hash(i, 44, 4) * 512, a = hash(i, 45, 4) * Math.PI, l = 2 + 7 * hash(i, 46, 4);
        g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
      }
    } else if (k === 1) {
      for (let i = 0; i < 14000; i++) { const v = 90 + Math.round(80 * hash(i, 51, 9)); g.fillStyle = `rgba(${v},${v},${v},0.45)`; g.beginPath(); g.arc(hash(i, 52, 9) * 512, hash(i, 53, 9) * 512, 0.6 + 1.4 * hash(i, 54, 9), 0, Math.PI * 2); g.fill(); }
    } else if (k === 2) {
      for (let i = 0; i < 5000; i++) { const v = 70 + Math.round(120 * hash(i, 61, 3)); g.fillStyle = `rgba(${v},${v},${v},0.55)`; g.fillRect(hash(i, 62, 3) * 512, hash(i, 63, 3) * 512, 30 + 200 * hash(i, 64, 3), 0.5 + 0.7 * hash(i, 65, 3)); }
    } else {
      // the flutes under the board's liner: soft ribs every 8 px (one tile = 64 ribs), a little uneven
      for (let x = 0; x < 512; x++) { const v = 128 + 34 * Math.sin((x / 8) * Math.PI * 2) + 6 * (hash(x, 71, 2) - 0.5); g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(x, 0, 1, 512); }
    }
    grainC[k] = c;
  }
  const t = new THREE.CanvasTexture(grainC[k]);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry);
  return t;
};

// ══ WALNUT (the rail) ══
const woodTex = (key: string, L: number, Wd: number, seed: number) => paintTex(`vd041-wood-${key}`, L, Wd, (g) => {
  const gr = g.createLinearGradient(0, 0, 0, Wd); gr.addColorStop(0, "#4A2F1E"); gr.addColorStop(0.5, "#5A3A28"); gr.addColorStop(1, "#462C1D");
  g.fillStyle = gr; g.fillRect(0, 0, L, Wd);
  const n = Math.round(Wd * 1.6);
  for (let i = 0; i < n; i++) {
    const y = hash(i, 1, seed) * Wd, a = 0.5 + 1.8 * hash(i, 2, seed), ph = hash(i, 3, seed) * 6;
    g.strokeStyle = hash(i, 4, seed) > 0.55 ? `rgba(128,86,54,${0.2 + 0.3 * hash(i, 5, seed)})` : `rgba(26,14,8,${0.2 + 0.32 * hash(i, 5, seed)})`;
    g.lineWidth = 0.35 + 1.1 * hash(i, 6, seed);
    g.beginPath();
    for (let x = 0; x <= L; x += 8) { const yy = y + a * Math.sin(x * 0.011 + ph) + 0.6 * Math.sin(x * 0.05 + ph * 2); if (x) g.lineTo(x, yy); else g.moveTo(x, yy); }
    g.stroke();
  }
  for (let i = 0; i < (L * Wd) / 28; i++) { g.fillStyle = `rgba(14,7,4,${0.2 + 0.3 * hash(i, 7, seed)})`; g.fillRect(hash(i, 8, seed) * L, hash(i, 9, seed) * Wd, 1.2 + 3 * hash(i, 10, seed), 0.5); }
}, 2);
const walnut = (key: string, L: number, Wd: number, seed: number) => {
  const t = woodTex(key, L, Wd, seed);
  return new THREE.MeshPhysicalMaterial({ map: t, bumpMap: t, bumpScale: 0.45, roughness: 0.46, metalness: 0, clearcoat: 0.45, clearcoatRoughness: 0.32, envMapIntensity: 0.6 });
};

// ══ PRINT: THE YEAR CARDS ══
const INK = "#2A1B15", BLUE = "#3E5F8E";
const cardTex = (k: number) => paintTex(`vd041-card-${k}`, CARD.w, CARD.h, (g) => {
  const W = CARD.w, H = CARD.h;
  g.fillStyle = "#F3EDDF"; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 1400; i++) { g.fillStyle = hash(i, 1, 30 + k) > 0.5 ? "rgba(255,253,246,0.4)" : "rgba(120,100,70,0.06)"; g.fillRect(hash(i, 2, 30 + k) * W, hash(i, 3, 30 + k) * H, 0.6 + 1.8 * hash(i, 4, 30 + k), 0.45); }
  // the printed header band and a thin frame
  g.fillStyle = BLUE; g.fillRect(0, 0, W, 34);
  g.fillStyle = "rgba(255,255,255,0.07)"; for (let x = 0; x < W; x += 3) g.fillRect(x, 0, 1, 34);
  g.fillStyle = "#F3EDDF"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 3); fitFont(g, 800, 14, "ROYALTIES", W - 40); g.fillText("ROYALTIES", W / 2 + 1.5, 22.5); track(g, 0);
  g.strokeStyle = "rgba(62,95,142,0.75)"; g.lineWidth = 1.4; g.strokeRect(8, 42, W - 16, H - 50);
  // the year, big
  g.fillStyle = INK;
  track(g, 1); const s = fitFont(g, 800, 72, YEARS[k], W - 34); g.fillText(YEARS[k], W / 2 + 0.5, 64 + s * 0.72); track(g, 0);
  g.fillRect(28, 150, W - 56, 1.6);
  // FISCAL YEAR small, then the amount line: "$" and a rule with NOTHING on it
  g.fillStyle = "rgba(42,27,21,0.75)"; track(g, 2); font(g, 700, 10); g.fillText("FISCAL YEAR", W / 2 + 1, 168); track(g, 0);
  g.fillStyle = INK; g.textAlign = "left"; font(g, 800, 28); g.fillText("$", 22, 218);
  g.fillRect(44, 219, W - 66, 1.6);
  // the print sits IN the stock: a few voids in the ink, a faint handling smudge at one corner
  for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(243,237,223,${0.25 + 0.4 * hash(i, 9, k)})`; g.fillRect(20 + hash(i, 7, k) * (W - 40), 60 + hash(i, 8, k) * 100, 0.8, 0.8); }
  const sm = g.createRadialGradient(W - 10, H - 10, 2, W - 10, H - 10, 50); sm.addColorStop(0, "rgba(110,88,60,0.12)"); sm.addColorStop(1, "rgba(110,88,60,0)");
  g.fillStyle = sm; g.fillRect(0, 0, W, H);
}, 3);
const CARD_PAPER = (k: number, face: THREE.Material): PaperOpts => ({ w: CARD.w, h: CARD.h, t: CARD.t, face, back: M.paper("#ECE5D5"), edge: M.paper("#EFE9DC"), seg: 36,
  bow: 0.9, bowY: 0.5, curls: [{ corner: k % 2 ? "tl" : "tr", r: 46, lift: 1.2 }], wave: 0.25, seed: k * 3.1 });

// ══ PRINT: THE BOXES ══
const CHAR = "#1F2328", ORANGE = "#E2812B", BOARD = "#F2F0EA";
const PHOTO = "assets/foreman_face.png";
/** the board's own look under the print: fibre, the flutes' faint ribs, scuffs, crushed corners */
const boardWear = (g: CanvasRenderingContext2D, W: number, H: number, seed: number) => {
  for (let x = 0; x < W; x += 8) { g.fillStyle = "rgba(255,255,255,0.05)"; g.fillRect(x, 0, 3, H); g.fillStyle = "rgba(80,70,55,0.035)"; g.fillRect(x + 4, 0, 3, H); }
  for (let i = 0; i < (W * H) / 60; i++) { g.fillStyle = hash(i, 1, seed) > 0.5 ? "rgba(255,255,255,0.12)" : "rgba(90,80,60,0.05)"; g.fillRect(hash(i, 2, seed) * W, hash(i, 3, seed) * H, 0.6 + 2 * hash(i, 4, seed), 0.5); }
  for (let i = 0; i < 5; i++) { g.strokeStyle = `rgba(110,95,70,${0.08 + 0.1 * hash(i, 5, seed)})`; g.lineWidth = 0.6; const x = hash(i, 6, seed) * W, y = hash(i, 7, seed) * H; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 10 + 30 * hash(i, 8, seed), y + 6 * (hash(i, 9, seed) - 0.5)); g.stroke(); }
  for (const [x, y] of [[0, 0], [W, 0], [0, H], [W, H]]) { const t = g.createRadialGradient(x, y, 1, x, y, 26); t.addColorStop(0, "rgba(120,100,70,0.3)"); t.addColorStop(1, "rgba(120,100,70,0)"); g.fillStyle = t; g.fillRect(0, 0, W, H); }
};
/** the line drawing of the grill on the box: the closed clamshell in three-quarter view, its feet and drip tray */
const sketch = (g: CanvasRenderingContext2D, x: number, y: number, s: number) => {
  g.save(); g.translate(x, y); g.scale(s, s);
  g.strokeStyle = CHAR; g.lineJoin = "round"; g.lineCap = "round";
  const P = (pts: number[][], close = true, lw = 2.2) => { g.lineWidth = lw; g.beginPath(); pts.forEach(([a, b], i) => (i ? g.lineTo(a, b) : g.moveTo(a, b))); if (close) g.closePath(); g.stroke(); };
  // the housing (a slab, its front lower than its back), the lid above it, the skin, the seam
  P([[10, 92], [150, 104], [205, 80], [205, 58], [150, 80], [10, 68]]);
  P([[150, 80], [150, 104]], false, 1.6);
  P([[8, 64], [150, 76], [207, 54], [207, 30], [168, 18], [24, 8], [8, 26]]);
  P([[8, 26], [150, 40], [207, 30]], false, 1.6); P([[150, 40], [150, 76]], false, 1.6);
  P([[30, 18], [140, 28], [190, 16]], false, 1.1); P([[40, 13], [150, 22]], false, 0.8);
  // the handle bar on the lid's front edge
  P([[44, 50], [44, 60], [120, 67], [120, 57]], false, 2); P([[40, 46], [124, 54]], false, 3.2);
  // the drip tray under the front lip, and the feet
  P([[18, 98], [18, 110], [140, 120], [140, 108]], false, 1.8); P([[140, 120], [180, 104]], false, 1.8);
  for (const [a, b] of [[22, 92], [140, 103], [196, 82]]) P([[a, b], [a, b + 6]], false, 2.6);
  // the ribs seen through the seam
  for (let i = 0; i < 9; i++) P([[20 + i * 14, 66 + i * 1.2], [20 + i * 14, 70 + i * 1.2]], false, 0.8);
  g.restore();
};
const boxFrontTex = (k: number) => paintTex(`vd041-box-front-${k % 3}`, BOX.w, BOX.h, (g) => {
  const W = BOX.w, H = BOX.h;
  g.fillStyle = BOARD; g.fillRect(0, 0, W, H);
  // the top band: SALTON small, plain type
  g.fillStyle = CHAR; g.fillRect(0, 0, W, 40);
  g.fillStyle = "#F2F0EA"; g.textAlign = "left"; g.textBaseline = "alphabetic";
  track(g, 4); font(g, 800, 15); g.fillText("SALTON", 16, 26); track(g, 0);
  g.textAlign = "right"; track(g, 1.5); font(g, 600, 11); g.fillStyle = "rgba(242,240,234,0.8)"; g.fillText("CONTACT GRILL", W - 16, 25); track(g, 0);
  // the line drawing of the grill, and his photo small in the corner (a framed square)
  sketch(g, 20, 66, 1.08);
  const px = W - 104, py = 58, ps = 86;
  g.fillStyle = "#FFFFFF"; g.fillRect(px - 4, py - 4, ps + 8, ps + 8);
  const im = imageOf(PHOTO);
  if (im.complete && im.naturalWidth > 0) g.drawImage(im, px, py, ps, ps);
  else { g.fillStyle = "#8A6E58"; g.fillRect(px, py, ps, ps); }
  g.strokeStyle = CHAR; g.lineWidth = 1.2; g.strokeRect(px - 4, py - 4, ps + 8, ps + 8);
  // the name, big, on the lower band, and the orange rule over it
  g.fillStyle = ORANGE; g.fillRect(0, 196, W, 6);
  g.fillStyle = CHAR; g.fillRect(0, 202, W, H - 202);
  g.textAlign = "center"; g.fillStyle = "#F7F4EC";
  track(g, 1.2); fitFont(g, 800, 34, "THE GEORGE FOREMAN", W - 36); g.fillText("THE GEORGE FOREMAN", W / 2 + 0.6, 242); track(g, 0);
  g.fillStyle = ORANGE; track(g, 8); fitFont(g, 800, 62, "GRILL", W - 80); g.fillText("GRILL", W / 2 + 4, 302); track(g, 0);
  boardWear(g, W, H, 60 + k);
}, 2.5);
const boxSideTex = (k: number) => paintTex(`vd041-box-side-${k % 2}`, BOX.d, BOX.h, (g) => {
  const W = BOX.d, H = BOX.h;
  g.fillStyle = BOARD; g.fillRect(0, 0, W, H);
  g.fillStyle = CHAR; g.fillRect(0, 0, W, 40); g.fillRect(0, 202, W, H - 202);
  g.fillStyle = ORANGE; g.fillRect(0, 196, W, 6);
  g.fillStyle = "#F2F0EA"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 3); font(g, 800, 13); g.fillText("SALTON", W / 2 + 1.5, 25); track(g, 0);
  g.fillStyle = CHAR; track(g, 1); fitFont(g, 800, 20, "GEORGE", W - 30); g.fillText("GEORGE", W / 2, 112); fitFont(g, 800, 20, "FOREMAN", W - 30); g.fillText("FOREMAN", W / 2, 136); track(g, 0);
  g.fillStyle = ORANGE; track(g, 4); fitFont(g, 800, 30, "GRILL", W - 40); g.fillText("GRILL", W / 2 + 2, 270); track(g, 0);
  boardWear(g, W, H, 80 + k);
}, 2);
const boxTopTex = (k: number) => paintTex(`vd041-box-top-${k % 2}`, BOX.w, BOX.d, (g) => {
  const W = BOX.w, H = BOX.d;
  g.fillStyle = BOARD; g.fillRect(0, 0, W, H);
  g.fillStyle = CHAR; g.fillRect(0, 0, W, 16); g.fillRect(0, H - 16, W, 16);
  // the two outer flaps meet at the middle: the seam, a hair open, and the brown flutes showing at it
  g.fillStyle = "#8B6A43"; g.fillRect(0, H / 2 - 1.4, W, 2.8);
  g.fillStyle = "rgba(40,30,20,0.5)"; g.fillRect(0, H / 2 - 0.5, W, 1);
  // packing tape over the seam (tan, glossy, a few wrinkles, its torn ends ragged)
  g.fillStyle = "rgba(196,160,104,0.55)"; g.fillRect(0, H / 2 - 24, W, 48);
  for (let i = 0; i < 9; i++) { g.strokeStyle = `rgba(255,240,210,${0.12 + 0.12 * hash(i, 3, k)})`; g.lineWidth = 0.8; const x = hash(i, 4, k) * W; g.beginPath(); g.moveTo(x, H / 2 - 24); g.lineTo(x + 8 * (hash(i, 5, k) - 0.5), H / 2 + 24); g.stroke(); }
  boardWear(g, W, H, 90 + k);
}, 2);
let boxMats: THREE.Material[][] | null = null;
const boxMaterials = (k: number) => {
  if (!boxMats) {
    boxMats = [0, 1, 2].map((v) => {
      const pm = (t: THREE.Texture, rough = 0.62) => new THREE.MeshPhysicalMaterial({ map: t, roughness: rough, metalness: 0, bumpMap: grainTex(3, 6, 1), bumpScale: 0.35, clearcoat: 0.12, clearcoatRoughness: 0.6, envMapIntensity: 0.45 });
      const side = pm(boxSideTex(v)), top = pm(boxTopTex(v), 0.55), front = pm(boxFrontTex(v));
      const bottom = new THREE.MeshStandardMaterial({ color: col("#9C7A52"), roughness: 0.9, bumpMap: grainTex(0, 2), bumpScale: 0.4 });
      return [side, side, top, bottom, front, front];
    });
  }
  return boxMats[k % 3];
};

// ══ THE GRILL'S SURFACES ══
const plasticBlack = () => new THREE.MeshPhysicalMaterial({ color: col("#141416"), roughness: 0.34, metalness: 0, clearcoat: 0.55, clearcoatRoughness: 0.25, bumpMap: grainTex(1, 3), bumpScale: 0.12, envMapIntensity: 0.75 });
const brushed = () => new THREE.MeshPhysicalMaterial({ color: col("#9EA4AB"), metalness: 1, roughness: 0.42, bumpMap: grainTex(2, 1.5, 3), bumpScale: 0.25, envMapIntensity: 1.05 });
/** the housing's front: black moulding, GEORGE FOREMAN in plain silver type, a small amber READY lamp */
const housingFrontTex = () => paintTex("vd041-housing-front", GRILL.w, GRILL.H, (g) => {
  const W = GRILL.w, H = GRILL.H;
  g.fillStyle = "#151517"; g.fillRect(0, 0, W, H);
  const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, "rgba(255,255,255,0.05)"); gr.addColorStop(0.5, "rgba(255,255,255,0)"); gr.addColorStop(1, "rgba(0,0,0,0.25)");
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  g.fillStyle = "#B9BDC2"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 3.5); fitFont(g, 800, 15, "GEORGE FOREMAN", 210); g.fillText("GEORGE FOREMAN", W / 2 + 1.7, 38); track(g, 0);
  g.fillStyle = "rgba(185,189,194,0.5)"; g.fillRect(W / 2 - 60, 46, 120, 0.9);
  // the lamp: a small amber lens in a chrome bezel, near the left
  g.fillStyle = "#8C9096"; g.beginPath(); g.arc(46, 34, 6.5, 0, Math.PI * 2); g.fill();
  const lg = g.createRadialGradient(45, 33, 0.5, 46, 34, 5); lg.addColorStop(0, "#FFD27A"); lg.addColorStop(1, "#B8701E");
  g.fillStyle = lg; g.beginPath(); g.arc(46, 34, 4.6, 0, Math.PI * 2); g.fill();
}, 3);
/** the seam band: the dark gap, the ribbed plates' grey edges showing in it */
const seamTex = () => paintTex("vd041-seam", GRILL.w, 8, (g) => {
  g.fillStyle = "#0B0B0C"; g.fillRect(0, 0, GRILL.w, 8);
  for (let x = 6; x < GRILL.w - 6; x += 11) { g.fillStyle = "#4E5055"; g.fillRect(x, 1.4, 6, 2.2); g.fillStyle = "#3A3B3F"; g.fillRect(x, 4.6, 6, 2); }
}, 3);

// ══ THE PLAQUE: enamel and brass ══
type Mode = "c" | "h" | "m" | "r";
const GREEN = "#2C6E45";   // painted darker: under the key it renders as the brief's #3f8f5c
/** c colour, h height (bump), m metalness, r roughness */
const plaqueTex = (mode: Mode) => paintTex(`vd041-plaque-${mode}`, PLAQUE.w, PLAQUE.h, (g) => {
  const W = PLAQUE.w, H = PLAQUE.h, B = 7;
  const metal = mode === "m" ? "#FFFFFF" : mode === "h" ? "#C8C8C8" : mode === "r" ? "#5A5A5A" : "";
  // the brass rim (brushed hairlines along x)
  if (mode === "c") {
    const gr = g.createLinearGradient(0, 0, W * 0.4, H * 1.4);
    gr.addColorStop(0, "#EBCF88"); gr.addColorStop(0.45, "#C99A3E"); gr.addColorStop(0.72, "#E2C27A"); gr.addColorStop(1, "#B08236");
    g.fillStyle = gr;
  } else g.fillStyle = metal;
  g.fillRect(0, 0, W, H);
  if (mode === "c") for (let i = 0; i < 2600; i++) { const lt = hash(i, 1, 7) > 0.5; g.fillStyle = `rgba(${lt ? "255,240,190" : "110,78,26"},${0.05 + 0.08 * hash(i, 2, 7)})`; g.fillRect(hash(i, 3, 7) * W, hash(i, 4, 7) * H, 8 + 40 * hash(i, 5, 7), 0.35); }
  // the enamel field: a fired glass surface (non-metal, glossy, sunk a hair below the rim)
  const field = (fill: string) => { g.fillStyle = fill; g.beginPath(); g.roundRect(B, B, W - 2 * B, H - 2 * B, 3.5); g.fill(); };
  if (mode === "c") {
    field(GREEN);
    const sh = g.createLinearGradient(0, B, 0, H - B); sh.addColorStop(0, "rgba(255,255,255,0.08)"); sh.addColorStop(0.4, "rgba(255,255,255,0)"); sh.addColorStop(1, "rgba(0,30,10,0.18)");
    g.save(); g.beginPath(); g.roundRect(B, B, W - 2 * B, H - 2 * B, 3.5); g.clip();
    g.fillStyle = sh; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 700; i++) { g.fillStyle = hash(i, 8, 3) > 0.5 ? "rgba(120,190,145,0.12)" : "rgba(20,60,35,0.12)"; g.beginPath(); g.arc(hash(i, 9, 3) * W, hash(i, 10, 3) * H, 0.3 + 0.9 * hash(i, 11, 3), 0, Math.PI * 2); g.fill(); }
    g.restore();
    // the rim's inner bevel: a dark line where the enamel meets the brass, a bright lip above it
    g.strokeStyle = "rgba(80,56,18,0.75)"; g.lineWidth = 1.1; g.beginPath(); g.roundRect(B - 0.4, B - 0.4, W - 2 * B + 0.8, H - 2 * B + 0.8, 3.8); g.stroke();
    g.strokeStyle = "rgba(255,238,190,0.6)"; g.lineWidth = 0.8; g.beginPath(); g.roundRect(B - 1.6, B - 1.6, W - 2 * B + 3.2, H - 2 * B + 3.2, 4.4); g.stroke();
  } else field(mode === "h" ? "#606060" : mode === "m" ? "#000000" : "#262626");
  // LEGIT: raised polished brass letters, struck through the enamel
  g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 7);
  const s = fitFont(g, 800, 84, "LEGIT", PLAQUE.word);
  const ty = H / 2 + s * 0.36, tx = W / 2 + 3.5;
  if (mode === "c") {
    g.fillStyle = "rgba(10,40,20,0.55)"; g.fillText("LEGIT", tx + 1.6, ty + 1.8);       // the letters' shadow on the enamel
    const lg = g.createLinearGradient(0, ty - s * 0.72, 0, ty);
    lg.addColorStop(0, "#F6E2A6"); lg.addColorStop(0.45, "#D6AE55"); lg.addColorStop(1, "#A97A2C");
    g.fillStyle = lg; g.fillText("LEGIT", tx, ty);
    g.save(); g.lineJoin = "round"; g.strokeStyle = "rgba(255,244,205,0.55)"; g.lineWidth = 0.9; g.translate(-0.5, -0.6); g.strokeText("LEGIT", tx, ty); g.restore();
    g.lineJoin = "round"; g.strokeStyle = "rgba(96,66,20,0.55)"; g.lineWidth = 0.8; g.strokeText("LEGIT", tx, ty);
  } else { g.fillStyle = mode === "h" ? "#E0E0E0" : mode === "m" ? "#FFFFFF" : "#3C3C3C"; g.fillText("LEGIT", tx, ty); }
  track(g, 0);
  // two small rivets in the rim, left and right
  for (const x of [B / 2 + 0.2, W - B / 2 - 0.2]) {
    if (mode === "c") { const rg = g.createRadialGradient(x - 0.6, H / 2 - 0.6, 0.2, x, H / 2, 2.4); rg.addColorStop(0, "#FFF1C4"); rg.addColorStop(1, "#8E6524"); g.fillStyle = rg; }
    else g.fillStyle = mode === "h" ? "#FFFFFF" : metal;
    g.beginPath(); g.arc(x, H / 2, 2.2, 0, Math.PI * 2); g.fill();
  }
}, 4);

// ══ STEAM ══
let wispC: HTMLCanvasElement | null = null;
const wispTex = (seed: number) => {
  if (!wispC) {
    const c = document.createElement("canvas"); c.width = 64; c.height = 256;
    const g = c.getContext("2d")!;
    g.fillStyle = "#000"; g.fillRect(0, 0, 64, 256);
    // a thin, twisting thread of vapour (tileable along y): soft blobs along a wavering line
    for (let i = 0; i < 260; i++) {
      const y = (i / 260) * 256, x = 32 + 9 * Math.sin((y / 256) * Math.PI * 4) + 4 * Math.sin((y / 256) * Math.PI * 10 + 1.3);
      const r = 5 + 4 * Math.abs(Math.sin((y / 256) * Math.PI * 6));
      const gr = g.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, "rgba(255,255,255,0.10)"); gr.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = gr; g.fillRect(x - r, y - r, 2 * r, 2 * r);
    }
    wispC = c;
  }
  const t = new THREE.CanvasTexture(wispC);
  t.wrapS = THREE.ClampToEdgeWrapping; t.wrapT = THREE.RepeatWrapping; t.offset.y = seed;
  return t;
};
/** the plane's own fade: soft at its sides, gone at its top, thin at its foot */
let fadeC: THREE.CanvasTexture | null = null;
const fadeTex = () => {
  if (fadeC) return fadeC;
  const c = document.createElement("canvas"); c.width = 64; c.height = 256;
  const g = c.getContext("2d")!;
  const v = g.createLinearGradient(0, 0, 0, 256); v.addColorStop(0, "rgba(0,0,0,1)"); v.addColorStop(0.35, "rgba(0,0,0,0.35)"); v.addColorStop(0.9, "rgba(0,0,0,0)"); v.addColorStop(1, "rgba(0,0,0,0.6)");
  g.fillStyle = "#fff"; g.fillRect(0, 0, 64, 256); g.fillStyle = v; g.fillRect(0, 0, 64, 256);
  fadeC = new THREE.CanvasTexture(c);
  return fadeC;
};
export const STEAM_TOP = 92;   // how far above the lid's skin a wisp reaches (mm)

// ══ THE PLACE ══
export type VerdictGeo = { floor: number };
export type Pose3 = { x: number; h: number; z: number; yaw: number; roll?: number; visible: boolean };
/** boxes: each box's pose (x, z its centre, h its bottom); grill: the grill's origin; steam 0…1 and its clock; plq: the
 *  hook's seat (world), the swing (deg about z), its lean (deg about x); show: which groups are drawn at all */
export type VerdictP = { boxes: Pose3[]; grill: Pose3; steam: number; t: number;
  plq: { x: number; h: number; z: number; swing: number; lean: number; yaw: number; visible: boolean }; cards: boolean };

export const verdictModel = (g: VerdictGeo) => (): Model<VerdictP> => {
  const root = new THREE.Group();
  const FY = -g.floor;

  // ══ THE RAIL AND THE CARDS ══
  const rail = new THREE.Group(); rail.userData.obj = "rail"; root.add(rail);
  {
    const top = walnut("rail-t", RAIL.L, RAIL.d, 3), side = walnut("rail-s", RAIL.L, 24, 5), end = walnut("rail-e", RAIL.d, 24, 7);
    const bm = { px: end, nx: end, top, bottom: top, front: side, back: side };
    const base = rbox(RAIL.L, RAIL.baseH, RAIL.d, 3.5, bm, 3); base.position.set(RAIL.x, FY + RAIL.baseH / 2, RAIL.z + RAIL.d / 2); rail.add(base);
    const fl = rbox(RAIL.L, RAIL.lipH + 1, RAIL.lipD, 3, bm, 3); fl.position.set(RAIL.x, FY + RAIL.baseH + RAIL.lipH / 2 - 0.5, RAIL.z + RAIL.d / 2); rail.add(fl);
    const backD = BACK_LIP_FRONT - (RAIL.z - RAIL.d / 2);
    const bl = rbox(RAIL.L, RAIL.lipH + 1, backD, 3, bm, 3); bl.position.set(RAIL.x, FY + RAIL.baseH + RAIL.lipH / 2 - 0.5, BACK_LIP_FRONT); rail.add(bl);
    const sh = contact(RAIL.L + 90, RAIL.d + 70, 0.42); sh.p.position.set(RAIL.x + 14, FY + 0.3, RAIL.z + 4); root.add(sh.p);
  }
  const cards = new THREE.Group(); root.add(cards);
  CARD_X.forEach((x, k) => {
    const face = M.print(cardTex(k), 0.86);
    (face as THREE.MeshStandardMaterial).bumpMap = grainTex(0, 1.5); (face as THREE.MeshStandardMaterial).bumpScale = 0.2;
    const sheet = paper(CARD_PAPER(k, face));
    // the sheet's frame: centred, face +z; stand it on its foot and lean it back
    const holder = new THREE.Group(); holder.userData.obj = `card${YEARS[k]}`;
    sheet.position.set(0, CARD.h / 2, 0); holder.add(sheet);
    holder.position.set(x, FY + RAIL.baseH + 0.4, CARD_BASE_Z); holder.rotation.x = -rad(CARD.lean);
    cards.add(holder);
  });

  // ══ THE BOXES ══
  const boxes: THREE.Group[] = [];
  const boxShadows: ReturnType<typeof contact>[] = [];
  PILE.forEach((_, k) => {
    const b = new THREE.Group(); b.userData.obj = `box${k}`;
    const body = rbox(BOX.w, BOX.h, BOX.d, 3.2, (() => { const m = boxMaterials(k); return { px: m[0], nx: m[1], top: m[2], bottom: m[3], front: m[4], back: m[5] }; })(), 3);
    body.position.set(0, BOX.h / 2, BOX.d / 2); b.add(body);
    root.add(b); boxes.push(b);
    if (PILE[k].tier === 0) { const s = contact(BOX.w + 80, BOX.d + 70, 0.4); root.add(s.p); boxShadows[k] = s; }
  });

  // ══ THE GRILL (one object), its tray and its cash ══
  const grillG = new THREE.Group(); root.add(grillG);
  const grill = new THREE.Group(); grill.userData.obj = "grill"; grillG.add(grill);
  const body = new THREE.Group(); body.position.y = GRILL.Y0; body.rotation.x = rad(GRILL.tilt); grill.add(body);
  {
    const blk = plasticBlack();
    const hf = new THREE.MeshPhysicalMaterial({ map: housingFrontTex(), roughness: 0.34, clearcoat: 0.55, clearcoatRoughness: 0.25, envMapIntensity: 0.75 });
    const housing = rbox(GRILL.w, GRILL.H, GRILL.d, 16, { px: blk, nx: blk, top: blk, bottom: blk, front: hf, back: blk }, 4);
    housing.position.set(0, GRILL.H / 2, GRILL.d / 2); body.add(housing);
    const sm = new THREE.MeshStandardMaterial({ map: seamTex(), roughness: 0.6 });
    const dk = new THREE.MeshStandardMaterial({ color: col("#0B0B0C"), roughness: 0.7 });
    const seam = rbox(GRILL.w - 14, GRILL.S + 2, GRILL.d - 12, 1, { px: dk, nx: dk, top: dk, bottom: dk, front: sm, back: dk }, 1);
    seam.position.set(0, GRILL.H + GRILL.S / 2, (GRILL.d - 12) / 2); body.add(seam);
    const lid = rbox(GRILL.w - 4, GRILL.L, GRILL.d - 4, 15, blk, 4);
    lid.position.set(0, GRILL.H + GRILL.S + GRILL.L / 2, (GRILL.d - 4) / 2); body.add(lid);
    // the brushed skin: a slightly domed panel set into the lid's top
    const skinW = GRILL.w - 40, skinD = GRILL.d - 44;
    const skinG = new THREE.BoxGeometry(skinW, GRILL.skin, skinD, 24, 1, 18);
    const pp = skinG.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pp.count; i++) {
      const u = pp.getX(i) / (skinW / 2), v = pp.getZ(i) / (skinD / 2);
      if (pp.getY(i) > 0) pp.setY(i, pp.getY(i) + 3.2 * (1 - u * u) * (1 - v * v));
      // the skin's edge rolls down into the shell
      const e = Math.max(Math.abs(u), Math.abs(v));
      if (pp.getY(i) > 0 && e > 0.97) pp.setY(i, pp.getY(i) - 2.4);
    }
    skinG.computeVertexNormals();
    const skin = mesh(skinG, brushed()); skin.position.set(0, GRILL.H + GRILL.S + GRILL.L + GRILL.skin / 2 - 1.8, 0); body.add(skin);
    // the handle: a bar on two arms out of the lid's front edge
    const bar = mesh(new THREE.CapsuleGeometry(GRILL.barR, GRILL.barW - 2 * GRILL.barR, 8, 28).rotateZ(Math.PI / 2), blk);
    bar.position.set(0, BAR_B.y, BAR_B.z); body.add(bar);
    for (const x of [-(GRILL.barW / 2 - 14), GRILL.barW / 2 - 14]) {
      const arm = rbox(22, 15, GRILL.barOut + 6, 6, blk, 3); arm.position.set(x, BAR_B.y, BAR_B.z + 2); body.add(arm);
    }
    // the hinge knuckles at the back
    for (const x of [-118, 118]) {
      const kn = mesh(new THREE.CylinderGeometry(12, 12, 54, 24).rotateZ(Math.PI / 2), blk); kn.position.set(x, GRILL.H + 2, -GRILL.d / 2 - 2); body.add(kn);
    }
    // the drip spout under the front lip
    const sp = rbox(58, 12, 22, 4, blk, 2); sp.position.set(0, 7, GRILL.d / 2 + 14); body.add(sp);
    // the feet: rubber, vertical, from the floor up into the tilted underside
    const rub = M.rubber("#1C1C1C");
    for (const [x, z] of [[-140, 100], [140, 100], [-140, -100], [140, -100]]) {
      const top = bodyPt(x, 0, z).h + 3;
      const ft = mesh(new THREE.CylinderGeometry(13, 15, top, 22), rub);
      ft.position.set(x, top / 2, bodyPt(x, 0, z).z); grill.add(ft);
    }
  }
  const grillShadow = contact(GRILL.w + 110, GRILL.d + 90, 0.42); grillShadow.p.position.set(14, 0.3, 0); grillG.add(grillShadow.p);
  // the tray
  const tray = new THREE.Group(); tray.userData.obj = "tray"; tray.position.set(0, 0, TRAY.z); grillG.add(tray);
  {
    const tm = new THREE.MeshPhysicalMaterial({ color: col("#18181A"), roughness: 0.4, clearcoat: 0.4, clearcoatRoughness: 0.3, bumpMap: grainTex(1, 2), bumpScale: 0.1, envMapIntensity: 0.7 });
    const { w, h, d, wall, floor } = TRAY;
    const fl = rbox(w, floor, d, 1.2, tm, 2); fl.position.set(0, floor / 2, d / 2); tray.add(fl);
    for (const s of [-1, 1]) {
      const fw = rbox(w, h, wall, 1.6, tm, 2); fw.position.set(0, h / 2, s * (d / 2 - wall / 2) + wall / 2); tray.add(fw);
      const sw = rbox(wall, h, d - 2 * wall + 0.4, 1.6, tm, 2); sw.position.set(s * (w / 2 - wall / 2), h / 2, (d - 2 * wall + 0.4) / 2); tray.add(sw);
    }
    // a lip rolled outward round the rim
    const lipG = new THREE.Group();
    for (const s of [-1, 1]) {
      const a = mesh(new THREE.CapsuleGeometry(2.4, w - 6, 4, 10).rotateZ(Math.PI / 2), tm); a.position.set(0, h, s * (d / 2 - 1.8)); lipG.add(a);
      const b = mesh(new THREE.CapsuleGeometry(2.4, d - 6, 4, 10).rotateX(Math.PI / 2), tm); b.position.set(s * (w / 2 - 1.8), h, 0); lipG.add(b);
    }
    tray.add(lipG);
    const ts = contact(w + 70, d + 60, 0.38); ts.p.position.set(10, 0.3, 0); tray.add(ts.p);
  }
  // the cash: three stacks, two bundles each, the notes' length along z, in one band printed $200,000,000
  const cash = new THREE.Group(); cash.userData.obj = "cash"; cash.position.set(0, 0, TRAY.z); grillG.add(cash);
  STACK_X.forEach((x, i) => {
    for (let j = 0; j < 2; j++) {
      const bd = makeBundle({ seed: i * 2 + j + 3, flip: (i + j) % 2 === 1 });
      bd.rotation.y = Math.PI / 2 + rad(((i * 7 + j * 3) % 5 - 2) * 0.25);
      bd.position.set(x + (j ? 0.6 : -0.4), CASH_Y0 + j * (BUNDLE.H + 0.15), (j ? -0.8 : 0.5));
      cash.add(bd);
    }
  });
  {
    const zIn = STACK_X[2] + BUNDLE.HZ + 1.2;
    const band = makeBand({ w: 92, zIn, yTop: BAND_TOP - CASH_Y0 + 0.33, text: "$200,000,000", seed: 4.2, key: "vd041-band-200m" });
    const bg = new THREE.Group(); bg.add(band); bg.rotation.y = Math.PI / 2; bg.position.set(0, TRAY.floor + 0.35, 0);
    cash.add(bg);
  }
  // the steam wisps, rising from the seam (no shadows, no depth: films of vapour)
  const wisps: { m: THREE.Mesh; mat: THREE.MeshBasicMaterial; tex: THREE.CanvasTexture; sp: number; ph: number; a: number }[] = [];
  {
    const spots: [number, number, number][] = [[-150, -40, 0.9], [-112, 70, 0.7], [-30, -90, 0.8], [70, -80, 0.75], [128, 40, 0.85], [160, -30, 0.6]];
    spots.forEach(([x, z, a], i) => {
      const tex = wispTex(hash(i, 1, 5));
      const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, alphaMap: tex, transparent: true, depthWrite: false, opacity: 0, toneMapped: false });
      mat.onBeforeCompile = (sh) => {
        sh.uniforms.fadeMap = { value: fadeTex() };
        sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform sampler2D fadeMap;")
          .replace("#include <alphamap_fragment>", "#include <alphamap_fragment>\ndiffuseColor.a *= texture2D( fadeMap, vAlphaMapUv ).g;");
      };
      mat.customProgramCacheKey = () => "vd041-wisp";
      const H = STEAM_TOP + 20;
      const geo = new THREE.PlaneGeometry(40, H); geo.translate(0, H / 2, 0);
      const m = new THREE.Mesh(geo, mat);
      m.castShadow = false; m.receiveShadow = false; m.renderOrder = 3; m.userData.noBounds = true;
      const p = bodyPt(x, GRILL.H + GRILL.S + GRILL.L - 6, z);
      m.position.set(x, p.h, p.z); m.rotation.y = rad(-14 + 9 * i);
      grill.add(m);
      wisps.push({ m, mat, tex, sp: 0.006 + 0.004 * hash(i, 2, 5), ph: hash(i, 3, 5) * 6, a });
    });
  }

  // ══ THE PLAQUE (its frame: the hook's seat at the origin; the plate hangs below the bar on the hook) ══
  const plq = new THREE.Group(); plq.userData.obj = "plaque"; root.add(plq);
  {
    const brass = new THREE.MeshPhysicalMaterial({ color: col("#C99A3E"), metalness: 1, roughness: 0.3, envMapIntensity: 1.15 });
    const face = new THREE.MeshPhysicalMaterial({ map: plaqueTex("c"), bumpMap: plaqueTex("h"), bumpScale: 1.1, metalnessMap: plaqueTex("m"), metalness: 1, roughnessMap: plaqueTex("r"), roughness: 1,
      clearcoat: 0.7, clearcoatRoughness: 0.12, envMapIntensity: 1.05 });
    const back = new THREE.MeshPhysicalMaterial({ color: col("#A8823C"), metalness: 1, roughness: 0.45, envMapIntensity: 0.9 });
    const plate = rbox(PLAQUE.w, PLAQUE.h, PLAQUE.t, 2.4, { px: brass, nx: brass, top: brass, bottom: brass, front: face, back }, 3);
    const swingG = new THREE.Group(); plq.add(swingG);
    plate.position.set(0, PLATE_TOP - PLAQUE.h / 2, PLATE_Z + PLAQUE.t / 2); swingG.add(plate);
    const { R, wire, rU, ringR, ringT } = HOOK;
    // the ring through the plate's top (its axis along z: the hook's lower curve passes through it)
    const ring = mesh(new THREE.TorusGeometry(ringR, ringT, 10, 28), brass); ring.position.set(0, yU - ringR, zU); swingG.add(ring);
    // the upper curve: round the bar from behind (−z) over its top to its front (+z), centred on the bar's centre
    const upper = mesh(new THREE.TorusGeometry(R, wire, 10, 44, Math.PI).rotateY(Math.PI / 2), brass);
    upper.position.set(0, -R, 0); swingG.add(upper);
    // the stem straight down the bar's front, and the lower curve round the ring's top wire, its tip turned up behind
    const stem = mesh(new THREE.CylinderGeometry(wire, wire, -R - yU, 10), brass); stem.position.set(0, (-R + yU) / 2, R); swingG.add(stem);
    const lower = mesh(new THREE.TorusGeometry(rU, wire, 8, 20, Math.PI).rotateY(Math.PI / 2).rotateX(Math.PI), brass);
    lower.position.set(0, yU, zU); swingG.add(lower);
    plq.userData.swing = swingG;
  }
  const plqShadow = contact(PLAQUE.w + 40, 60, 0); root.add(plqShadow.p);

  // ══ THE FLOOR: the shadow catcher on the cream ground ══
  root.add(makeFloor({ y: g.floor, x0: -1100, x1: 3200, z0: -1500, z1: 1100, reflect: 0, shadow: 0.36, fadeC: [1100, -200], fadeR: [2300, 1300] }));

  return {
    root,
    update: (p) => {
      cards.visible = p.cards; rail.visible = p.cards;
      p.boxes.forEach((b, k) => {
        const o = boxes[k];
        o.visible = b.visible;
        o.position.set(b.x, FY + b.h, b.z); o.rotation.set(0, rad(b.yaw), rad(b.roll ?? 0), "YXZ");
        const s = boxShadows[k];
        if (s) { s.p.visible = b.visible; s.p.position.set(b.x + 18, FY + 0.3, b.z + 6); s.p.rotation.z = rad(b.yaw); }
      });
      const gp = p.grill;
      grillG.visible = gp.visible; grillG.position.set(gp.x, FY, gp.z); grillG.rotation.y = rad(gp.yaw);
      for (const w of wisps) {
        w.mat.opacity = p.steam * w.a * (0.75 + 0.25 * Math.sin(p.t * 0.21 + w.ph));
        w.m.visible = p.steam > 0.005;
        w.tex.offset.y = -p.t * w.sp + w.ph;
        w.m.scale.set(1 + 0.15 * Math.sin(p.t * 0.05 + w.ph), 0.8 + 0.2 * p.steam, 1);
      }
      const q = p.plq;
      plq.visible = q.visible; plq.position.set(q.x, FY + q.h, q.z); plq.rotation.y = rad(q.yaw);
      const sw = plq.userData.swing as THREE.Group;
      sw.rotation.set(rad(q.lean), 0, rad(q.swing), "ZXY");
      plqShadow.p.visible = q.visible;
      const k = Math.max(0, 1 - (q.h - SEAT.h) / 120);
      plqShadow.m.opacity = 0.32 * k * k; plqShadow.p.position.set(q.x + 16, FY + 0.32, q.z + PLATE_Z + 8);
    },
  };
};
