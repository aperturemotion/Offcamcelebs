// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE VERDICT IN 3-D (038) — "So, $1.35 billion? Every dollar got paid. Our rating: legit. Send us who to audit next." On the
// cream ground, on an unseen counter (the floor: its soft shadows), two real things, each modelled from the real one:
//   · THE RECEIPT PRINTER, modelled on a compact countertop POS thermal printer in white (the Epson TM-T88 family: a cool-white
//     body on a charcoal plinth with rubber feet, a parting seam under its paper cover, the cover's top seam, the exit slot at
//     the front of the top with a black tear bar and its serrated steel blade, a charcoal front fascia with the POWER / ERROR
//     / PAPER LEDs and their icons, a FEED key and the round cover-open button, side vents). Nothing of 035's
//     graphite lottery terminal is reused (its tower, display, playslip reader, bezel or LEDs).
//   · THE RECEIPT: a strip of 80 mm thermal paper fed up out of the slot in bursts, keeping its roll's curl (it bends back as
//     it rises) and a slight cross-bow, its print (thermal black: T-Mobile's wordmark, a greeked deal line, the figure
//     $1,350,000,000, PAID IN FULL, greeked rows) riding up with it. The auto-cutter behind the tear bar cuts it; the free
//     receipt tips BACK over the slot's back lip (riding up out of the slot as it turns, its curl relaxing) and lands face up
//     on the printer's flat cover, slides a touch and settles with its far end lifting on its curl. Face up, its print reads
//     the right way (text top away from the viewer); fallen forward it would have landed face down.
//   · THE STAMP (new, not 035's walnut-and-beech one): a turned bottle-green lacquered handle with a mushroom knob, a chrome
//     ferrule, a brushed aluminium mount with its index label (a blank ruled frame: Timur's 035 note, the word lives only in
//     the ink), a grey cushion and a green-inked rubber die with relief letters. It glides in from beyond the frame, squares
//     over the receipt, presses LEGIT in deep green ink below PAID IN FULL, lifts and is drawn away.
// ★ The verdict rates the $1.35B FIGURE (the receipt's total), not him: no person, no photo, no hands.
// Units are the layer's px (y up from the floor, z toward the viewer); 3.2 px to the mm (80 mm paper = 256 px).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, liveTex, roundRect, slabOf, imageOf, type Model } from "../stage";
import { M, rbox, rad, fitFont, track, col, hash } from "../kit029";

export type VerdictGeo = { floor: number; cx: number; z: number };
/** feed: the paper out of the slot (px); fall: 0 standing … 1 tipped back onto the cover … 2 settled; stamp: 0 off → 1
 *  hovering → 2 pressed → 3 lifted → 4 gone; ink 0 … 1; busy: the PAPER/feed LED 0 … 1; yaw (deg) */
export type VerdictP = { feed: number; fall: number; stamp: number; ink: number; busy: number; yaw: number };

// ══ THE PRINTER (local: x across, y up from the counter, z toward the viewer; its centre at x 0, z 0) ══
const PW = 452, PD = 540;
const FEET = 6;
const BODY_Y0 = 28, BODY_Y1 = 300;
/** the cover's top: the flat the receipt lands on */
export const LID = 340;
const LID_T = 40;
/** the exit slot (its centre z), its width and depth */
export const SLOT_Z = PD / 2 - 66;
const SW = 282, SD = 16;
/** the slot's back lip (the edge the cut receipt tips over) */
const LIP_Z = SLOT_Z - SD / 2;

// ══ THE RECEIPT ══
export const RW = 256;
/** the receipt's length, and how much of it is still in the slot (below the cutter) when it is cut */
export const RL = 380, IN = 14;
/** the paper's feed when it is cut (all of it out but the bottom IN px) */
export const FEED_MAX = RL - IN;
const TEX_L = RL + 40;               // the print runs on past the receipt (the next receipt's blank start)
const PAPER_T = 1.4;
/** the paper's centre sits this far in front of the slot's back wall (its back face 0.25 px clear of it) */
const OFF = PAPER_T / 2 + 0.25;
const ZP = LIP_Z + OFF;              // the standing paper's centre plane
const KAPPA = rad(18) / RL;          // the roll's curl: the whole receipt bends back 18°
/** where each line of print sits on the receipt (px from its top edge), for the camera */
export const PRINT = { brand: [24, 54], deal: [62, 78], figure: [128, 168], paid: [188, 216], stamp: [252, 320] } as const;
/** where LEGIT lands (receipt px: centre, size) and its turn (rad, + = anticlockwise seen from above) */
export const IMP = { u: 286, w: 184, h: 80, turn: 0.06 };
/** after it lands, the receipt slides this far back from the lip */
const SLIDE = 10;
/** the far end's lift on the curl once it lies (rad at its end) */
const LIFT = 0.14;

const INK = "#1B1B1F";
/** T-Mobile's wordmark (magenta on transparent; preloaded by src/hf/driver.tsx) */
const LOGO = "assets/brand/tmobile_wordmark.png";
const GREEN = "#1D6A43";
const STOCK = "#F7F7F3";

// ══ the print ══════════════════════════════════════════════════════════════════════════════════
const printTexture = () => paintTex("vd38-receipt-v3", RW, TEX_L, (c) => {
  // thermal stock: a cool white, a faint fibre
  c.fillStyle = STOCK; c.fillRect(0, 0, RW, TEX_L);
  for (let i = 0; i < 260; i++) { c.fillStyle = `rgba(150,150,140,${0.03 + 0.04 * hash(i, 3, 41)})`; c.fillRect(hash(i, 1, 41) * RW, hash(i, 2, 41) * TEX_L, 0.4 + hash(i, 4, 41) * 1.6, 0.3); }
  const M0 = 14, W0 = RW - 2 * M0;
  c.fillStyle = INK; c.textBaseline = "middle"; c.textAlign = "center";
  // the payer, the deal
  // ★ P16 (Timur, 2026-11-21: "you can use logos"): T-Mobile's real wordmark (assets/brand, its official artwork), printed as a
  //   thermal receipt prints a logo: in the paper's black, the magenta used only as its mask
  {
    const im = imageOf(LOGO);
    if (im.complete && im.naturalWidth > 0) {
      const lh = PRINT.brand[1] - PRINT.brand[0] - 2, lw = Math.min(W0 - 44, (lh * im.naturalWidth) / im.naturalHeight);
      const h2 = (lw * im.naturalHeight) / im.naturalWidth;
      const k = document.createElement("canvas"); k.width = Math.round(lw * 4); k.height = Math.round(h2 * 4);
      const kg = k.getContext("2d")!;
      kg.drawImage(im, 0, 0, k.width, k.height);
      kg.globalCompositeOperation = "source-in"; kg.fillStyle = INK; kg.fillRect(0, 0, k.width, k.height);
      c.drawImage(k, (RW - lw) / 2, (PRINT.brand[0] + PRINT.brand[1]) / 2 - h2 / 2, lw, h2);
    }
  }
  // ★ P17 (one label + one figure a frame): the deal line under the payer is greeked, like the body rows
  for (const [x, w] of [[52, 58], [116, 34], [156, 48]] as const) { c.globalAlpha = 0.7; c.beginPath(); c.roundRect(x, (PRINT.deal[0] + PRINT.deal[1]) / 2 - 2.8, w, 5.6, 1.4); c.fill(); }
  c.globalAlpha = 1;
  // greeked rows (the order lines: never words or numbers)
  for (let r = 0; r < 2; r++) for (const [x, w] of [[M0, 46 + 10 * hash(r, 1, 9)], [M0 + 60, 30 + 14 * hash(r, 2, 9)], [RW - M0 - 54, 54]] as const) {
    c.globalAlpha = 0.62; c.beginPath(); c.roundRect(x, 88 + r * 11, w, 5, 1.2); c.fill();
  }
  c.globalAlpha = 1;
  const dash = (y: number) => { for (let x = M0; x < RW - M0; x += 7) c.fillRect(x, y, 4, 1.6); };
  dash(114);
  // the total, as the voice says it
  track(c, -0.5);
  fitFont(c, 800, 44, "$1,350,000,000", W0 - 4);
  c.fillText("$1,350,000,000", RW / 2, (PRINT.figure[0] + PRINT.figure[1]) / 2 + 1.5);
  track(c, 0);
  dash(178);
  track(c, 2.5);
  fitFont(c, 800, 26, "PAID IN FULL", W0 - 30);
  c.fillText("PAID IN FULL", RW / 2 + 1.2, (PRINT.paid[0] + PRINT.paid[1]) / 2 + 1);
  track(c, 0);
  dash(228);
  // the foot: greeked approval rows below the stamp's room
  for (let r = 0; r < 2; r++) for (let k = 0; k < 5; k++) { c.globalAlpha = 0.5; c.fillRect(M0 + 4 + k * 46, 334 + r * 10, 26 + 12 * hash(k, r, 4), 3.6); }
  c.globalAlpha = 1;
  // thermal print is never perfectly even: faint streaks along the feed
  for (let i = 0; i < 16; i++) { c.fillStyle = `rgba(247,247,243,${0.08 + 0.1 * hash(i, 2, 2)})`; c.fillRect(hash(i, 1, 2) * RW, 0, 0.8, TEX_L); }
}, 3);

/** the stamp's ink, painted in receipt px (centred on the impression) */
const drawInk = (c: CanvasRenderingContext2D, q: number) => {
  c.save(); c.translate(RW / 2, IMP.u); c.rotate(-IMP.turn);
  const w = IMP.w, h = IMP.h;
  c.globalAlpha = Math.min(1, q * 1.1) * 0.92;
  c.strokeStyle = GREEN; c.fillStyle = GREEN;
  c.lineWidth = 3.6; c.beginPath(); c.roundRect(-w / 2, -h / 2, w, h, 7); c.stroke();
  c.lineWidth = 1.1; c.beginPath(); c.roundRect(-w / 2 + 6, -h / 2 + 6, w - 12, h - 12, 4); c.stroke();
  track(c, 6); fitFont(c, 800, 64, "LEGIT", w - 30); c.textAlign = "center"; c.textBaseline = "middle"; c.fillText("LEGIT", 3, 3); track(c, 0);
  // a rubber stamp's broken ink: dry specks, a lighter corner where the press was uneven
  c.globalCompositeOperation = "destination-out";
  for (let i = 0; i < 380; i++) { c.globalAlpha = 0.35 + 0.65 * hash(i, 1, 17); const x = -w / 2 + hash(i, 2, 17) * w, y = -h / 2 + hash(i, 3, 17) * h; c.fillRect(x, y, 0.6 + hash(i, 4, 17) * 2.0, 0.5 + hash(i, 5, 17) * 1.1); }
  const fade = c.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2); fade.addColorStop(0, "rgba(0,0,0,0.3)"); fade.addColorStop(0.3, "rgba(0,0,0,0)"); fade.addColorStop(1, "rgba(0,0,0,0)");
  c.globalAlpha = 1; c.fillStyle = fade; c.fillRect(-w / 2 - 4, -h / 2 - 4, w + 8, h + 8);
  c.restore();
};

// ══ THE RECEIPT'S SHAPE: its centreline in the printer's (y, z) plane, from its bottom edge (s = 0) to its top edge ══
const d = (a: number) => [Math.cos(a), -Math.sin(a)] as const;          // along the paper (a: from vertical toward the back)
const nrm = (a: number) => [Math.sin(a), Math.cos(a)] as const;         // its print face's normal
const ease2 = (u: number) => Math.pow(Math.max(0, Math.min(1, u)), 2.1);
const sett = (x: number) => { const t = Math.max(0, Math.min(1, x)); return t * t * (3 - 2 * t); };
export type Pose = { qy: number; qz: number; th: number; sb: number; k: number; lift: number; len: number; bow: number };
/** the receipt's pose: standing in the slot (fall 0, `feed` out), tipping back over the lip (0…1), settling (1…2) */
export const poseAt = (feed: number, fall: number): Pose => {
  const out = Math.max(0.5, feed);
  if (fall <= 0) return { qy: LID, qz: ZP, th: 0, sb: IN, k: KAPPA, lift: 0, len: out + IN, bow: 2.4 };
  if (fall <= 1) {
    // ★ it rides up over the lip as it turns (the stub in the slot shortens to nothing), its curl relaxing, so no part of it
    //   ever points below the lip's height while it is over the cover
    const th = (Math.PI / 2) * ease2(fall), r = th / (Math.PI / 2);
    const [ny, nz] = nrm(th);
    return { qy: LID + OFF * ny, qz: LIP_Z + OFF * nz, th, sb: IN * (1 - r), k: KAPPA * (1 - r), lift: 0, len: RL, bow: 2.4 * (1 - r) };
  }
  const b = sett(fall - 1);
  return { qy: LID + OFF, qz: LIP_Z - SLIDE * b, th: Math.PI / 2, sb: 0, k: 0, lift: LIFT * b, len: RL, bow: 0 };
};
export const NS = 150;
/** the centreline: for j = 0…NS the point (y, z), the face normal (ny, nz) and the arc s from the bottom edge */
export const centreline = (p: Pose) => {
  const out: { y: number; z: number; ny: number; nz: number; s: number }[] = [];
  const ds = p.len / NS;
  let y = 0, z = 0;
  // integrate up from the lip point Q (s = sb); below it the stub runs straight back down along the paper
  const angle = (s: number) => {
    let a = p.th + p.k * Math.max(0, s - p.sb);
    const f = (s - 0.68 * p.len) / (0.32 * p.len);
    if (p.lift > 0 && f > 0) a -= p.lift * f * f;
    return a;
  };
  const pts: { y: number; z: number; a: number; s: number }[] = [];
  for (let j = 0; j <= NS; j++) {
    const s = j * ds;
    if (s <= p.sb) { const [dy, dz] = d(p.th); pts.push({ y: p.qy - (p.sb - s) * dy, z: p.qz - (p.sb - s) * dz, a: p.th, s }); }
  }
  // from the last stub point, integrate
  const last = pts[pts.length - 1];
  let s0 = last ? last.s : 0;
  if (last) { y = last.y; z = last.z; } else { y = p.qy; z = p.qz; }
  // the stub's last point may sit below Q: carry on along the paper to Q first (exactly), then bend
  for (let j = pts.length; j <= NS; j++) {
    const s = j * ds;
    // integrate from s0 to s in small steps
    const n = 4, h = (s - s0) / n;
    for (let i = 0; i < n; i++) { const a = angle(s0 + (i + 0.5) * h); const [dy, dz] = d(a); y += dy * h; z += dz * h; }
    s0 = s;
    pts.push({ y, z, a: angle(s), s });
  }
  for (const q of pts) { const [ny, nz] = nrm(q.a); out.push({ y: q.y, z: q.z, ny, nz, s: q.s }); }
  return out;
};

// ══ THE STAMP: its die face at its own y 0, its knob up ══
const STAMP = { DW: 194, DD: 88, REL: 1.0, BLW: 212, BLH: 20, BLD: 106 };
const STAMP_BASE = 7.15;
const FER_H = 12.5;
const KNOB = [[12.5, 0], [12.5, 2], [10.5, 8], [8.6, 20], [8.8, 34], [11, 46], [16, 55], [21.5, 62], [24, 70], [23.4, 78], [20, 85], [13, 90], [6, 92.5], [0.01, 93]] as [number, number][];
export const STAMP_H = STAMP_BASE + STAMP.BLH + FER_H + 93;
/** the impression's centre on the cover (printer local), once the receipt lies */
const impLocal = () => ({ x: 0, z: LIP_Z - SLIDE - (RL - IMP.u) });
/** the receipt face's height there */
const FACE_Y = LID + OFF + PAPER_T / 2;
const stampGeo = (() => {
  let g: { contact: THREE.Vector3; above: THREE.Vector3; off: THREE.Vector3; lifted: THREE.Vector3; away: THREE.Vector3; spin: number } | null = null;
  return () => {
    if (g) return g;
    const i = impLocal();
    const contact = new THREE.Vector3(i.x, FACE_Y + STAMP.REL + 0.25, i.z);
    const above = contact.clone().add(new THREE.Vector3(0, 62, 0));
    const off = above.clone().add(new THREE.Vector3(-1000, 24, -40));
    // ★ it lifts toward the viewer and away to the left, so it uncovers LEGIT at once and never hangs over the receipt
    const lifted = contact.clone().add(new THREE.Vector3(-70, 52, 50));
    const away = lifted.clone().add(new THREE.Vector3(-1000, 8, 70));
    g = { contact, above, off, lifted, away, spin: IMP.turn };
    return g;
  };
})();
/** the stamp's pose for t: 0 off → 1 hovering → 2 pressed → 3 lifted → 4 gone */
export const stampAt = (t: number) => {
  const G = stampGeo();
  const quart = (x: number) => 1 - Math.pow(1 - x, 4), cubicIn = (x: number) => x * x * x;
  const pos = new THREE.Vector3();
  let lean = 0, spin = G.spin;
  if (t <= 1) { const u = quart(Math.max(0, t)); pos.copy(G.off).lerp(G.above, u); lean = rad(8) * (1 - u) * Math.min(1, t * 4); spin = G.spin - 0.3 * (1 - u); }
  else if (t <= 2) pos.copy(G.above).lerp(G.contact, sett(t - 1));
  else if (t <= 3) { const u = sett(t - 2); pos.copy(G.contact).lerp(G.lifted, u); spin = G.spin - 0.1 * u; }
  else { const u = cubicIn(Math.min(1, t - 3)); pos.copy(G.lifted).lerp(G.away, u); lean = rad(-7) * Math.min(1, u * 3); spin = G.spin - 0.1 - 0.18 * u; }
  return { pos, spin, lean, visible: t > 0.001 && t < 3.999 };
};

/** ★ points on each object's hull (printer local, y up), for the set's caption-band check */
export const hullPoints = (p: { feed: number; fall: number; stamp: number }) => {
  const out: [number, number, number][] = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) out.push([sx * PW / 2, LID, sz * PD / 2]);
  if (p.feed > 0.5 || p.fall > 0) for (const q of centreline(poseAt(p.feed, p.fall)).filter((_, j) => j % 10 === 0 || j === NS))
    for (const sx of [-1, 1]) out.push([sx * RW / 2, q.y, q.z]);
  const a = stampAt(p.stamp);
  if (a.visible) {
    const c = Math.cos(a.spin), sn = Math.sin(a.spin);
    for (const [x, y, z] of [[-108, 0, -55], [108, 0, -55], [-108, 0, 55], [108, 0, 55], [0, STAMP_H, 0], [-24, STAMP_H - 22, 0], [24, STAMP_H - 22, 0]])
      out.push([a.pos.x + x * c + z * sn, a.pos.y + y, a.pos.z - x * sn + z * c]);
  }
  return out;
};
/** named anchors (printer local, y up) for the camera */
export const anchors = () => {
  const i = impLocal();
  return {
    slot: { x: 0, y: LID, z: SLOT_Z },
    impression: { x: i.x, y: FACE_Y, z: i.z },
    lidMid: { x: 0, y: LID, z: 0 },
    base: { x: 0, y: 0, z: PD / 2 },
  };
};

// ══ helpers ═══════════════════════════════════════════════════════════════════════════════════════
const rrPath = (x0: number, y0: number, x1: number, y1: number, r: number) => {
  const p = new THREE.Path();
  p.moveTo(x0 + r, y0); p.lineTo(x1 - r, y0); p.quadraticCurveTo(x1, y0, x1, y0 + r);
  p.lineTo(x1, y1 - r); p.quadraticCurveTo(x1, y1, x1 - r, y1);
  p.lineTo(x0 + r, y1); p.quadraticCurveTo(x0, y1, x0, y1 - r);
  p.lineTo(x0, y0 + r); p.quadraticCurveTo(x0, y0, x0 + r, y0);
  return p;
};
let softT: THREE.Texture | null = null;
const softTex = () => {
  if (softT) return softT;
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
  g.filter = "blur(26px)"; g.fillStyle = "#fff"; g.fillRect(44, 44, 168, 168);
  softT = new THREE.CanvasTexture(c);
  return softT;
};

export const verdictModel = (g: VerdictGeo) => (): Model<VerdictP> => {
  const root = new THREE.Group();
  const yawG = new THREE.Group();
  yawG.position.set(g.cx, -g.floor, g.z);
  root.add(yawG);

  // ── materials: cool-white ABS, charcoal, rubber, steel, chrome ──
  const whiteM = new THREE.MeshPhysicalMaterial({ color: col("#E9EAE6"), roughness: 0.42, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.35, envMapIntensity: 0.6 });
  const lidTex = paintTex("vd38-lid-v1", PW, PD, (c) => {
    c.fillStyle = "#FFFFFF"; c.fillRect(0, 0, PW, PD);
    // the moulding's faint texture
    for (let i = 0; i < 500; i++) { c.fillStyle = `rgba(120,120,115,${0.025 + 0.03 * hash(i, 5, 23)})`; c.fillRect(hash(i, 1, 23) * PW, hash(i, 2, 23) * PD, 0.6 + hash(i, 3, 23) * 1.4, 0.6); }
    // the paper cover's rear seam (a groove) and its two side seams
    const gy = PD / 2 - 230;
    const seam = (x0: number, y0: number, x1: number, y1: number) => {
      c.strokeStyle = "rgba(70,72,74,0.55)"; c.lineWidth = 1.6; c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke();
      c.strokeStyle = "rgba(255,255,255,0.8)"; c.lineWidth = 0.8; c.beginPath(); c.moveTo(x0, y0 + 1.6); c.lineTo(x1, y1 + 1.6); c.stroke();
    };
    seam(22, gy, PW - 22, gy);
    seam(22, gy, 22, PD - 34);
    seam(PW - 22, gy, PW - 22, PD - 34);
  }, 2);
  const lidM = new THREE.MeshPhysicalMaterial({ map: lidTex, color: col("#E9EAE6"), roughness: 0.4, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.35, envMapIntensity: 0.6 });
  const charcoal = new THREE.MeshPhysicalMaterial({ color: col("#33363B"), roughness: 0.5, metalness: 0, clearcoat: 0.2, clearcoatRoughness: 0.5, envMapIntensity: 0.55 });
  const seamM = new THREE.MeshStandardMaterial({ color: col("#7E8184"), roughness: 0.7, metalness: 0 });
  const blackM = new THREE.MeshPhysicalMaterial({ color: col("#121315"), roughness: 0.38, metalness: 0, clearcoat: 0.45, clearcoatRoughness: 0.3, envMapIntensity: 0.6 });
  const matteBlack = new THREE.MeshStandardMaterial({ color: col("#09090A"), roughness: 0.92, metalness: 0 });
  const rubber = new THREE.MeshStandardMaterial({ color: col("#1E1D1C"), roughness: 0.9, metalness: 0 });
  const steel = new THREE.MeshPhysicalMaterial({ color: col("#D5D9DE"), metalness: 1, roughness: 0.24, envMapIntensity: 1.0 });
  const keyM = new THREE.MeshPhysicalMaterial({ color: col("#C9CBCD"), roughness: 0.45, metalness: 0, clearcoat: 0.3, clearcoatRoughness: 0.4, envMapIntensity: 0.6 });

  // ══ THE PRINTER (one object) ══
  const pr = new THREE.Group();
  pr.userData.obj = "printer";
  yawG.add(pr);
  // rubber feet
  for (const [x, z] of [[-PW / 2 + 52, -PD / 2 + 56], [PW / 2 - 52, -PD / 2 + 56], [-PW / 2 + 52, PD / 2 - 56], [PW / 2 - 52, PD / 2 - 56]] as const) {
    const ft = mesh(new THREE.CylinderGeometry(16, 18, FEET, 24), rubber);
    ft.position.set(x, FEET / 2, z);
    pr.add(ft);
  }
  // the charcoal plinth, the white body on it
  const plinth = rbox(PW - 20, BODY_Y0 + 4 - FEET, PD - 20, 9, charcoal, 3);
  plinth.position.set(0, (FEET + BODY_Y0 + 4) / 2, (PD - 20) / 2);
  pr.add(plinth);
  const body = rbox(PW, BODY_Y1 - BODY_Y0, PD, 30, whiteM, 5);
  body.position.set(0, (BODY_Y0 + BODY_Y1) / 2, PD / 2);
  pr.add(body);
  // the parting seam under the cover
  const seam = rbox(PW - 6, 6, PD - 6, 3, seamM, 2);
  seam.position.set(0, BODY_Y1 + 1, (PD - 6) / 2);
  pr.add(seam);
  // the cover: a slab with the exit slot cut through it (its top the counter-flat the receipt lands on)
  {
    const sh = roundRect(PW - 2, PD - 2, 30);
    const yc = -SLOT_Z;                                 // shape y → −z
    sh.holes.push(rrPath(-SW / 2, yc - SD / 2, SW / 2, yc + SD / 2, 5));
    const lg = slabOf(sh, LID_T, 5, 12);
    lg.rotateX(-Math.PI / 2);
    const lid = mesh(lg, lidM);
    lid.position.set(0, LID, 0);
    pr.add(lid);
  }
  // the throat under the slot (black), the tear bar along its front lip and its serrated blade
  const throat = rbox(SW + 6, 2, SD + 8, 0.6, matteBlack, 1);
  throat.position.set(0, LID - LID_T + 2, SLOT_Z + (SD + 8) / 2);
  pr.add(throat);
  const BAR_Z0 = SLOT_Z + SD / 2 + 6, BAR_D = 10;
  const bar = rbox(SW + 34, 5, BAR_D, 2, blackM, 2);
  bar.position.set(0, LID + 2.5, BAR_Z0 + BAR_D);
  pr.add(bar);
  {
    const s = new THREE.Shape();
    const L = SW + 10, n = Math.round(L / 5.5);
    s.moveTo(-L / 2, 0);
    for (let i = 0; i < n; i++) { s.lineTo(-L / 2 + (i + 0.5) * (L / n), 6.5); s.lineTo(-L / 2 + (i + 1) * (L / n), 3.4); }
    s.lineTo(L / 2, 0); s.lineTo(-L / 2, 0);
    const tg = new THREE.ExtrudeGeometry(s, { depth: 1.3, bevelEnabled: false });
    const tb = mesh(tg, steel);
    tb.position.set(0, LID + 4.6, BAR_Z0 + 2);
    pr.add(tb);
  }
  // the charcoal front fascia: the LEDs' icons painted on it, the LEDs, the FEED key, the cover-open button
  const FY = 196, FH = 100, FWD = PW - 74;
  const fasciaTex = paintTex("vd38-fascia-v1", FWD, FH, (c) => {
    c.fillStyle = "#2E3136"; c.fillRect(0, 0, FWD, FH);
    for (let i = 0; i < 300; i++) { c.fillStyle = `rgba(255,255,255,${0.012 + 0.02 * hash(i, 4, 29)})`; c.fillRect(hash(i, 1, 29) * FWD, hash(i, 2, 29) * FH, 0.8, 0.8); }
    c.strokeStyle = "rgba(232,234,236,0.82)"; c.fillStyle = "rgba(232,234,236,0.82)"; c.lineWidth = 1.5; c.lineCap = "round";
    // the icons over the three LEDs (power, error, paper), at x 36, 64, 92 (fascia px) and y 34
    const px = (x: number) => x, iy = 32;
    c.beginPath(); c.arc(px(36), iy, 5.2, -Math.PI / 2 + 0.6, -Math.PI / 2 - 0.6 + Math.PI * 2); c.stroke();
    c.beginPath(); c.moveTo(px(36), iy - 7); c.lineTo(px(36), iy - 1); c.stroke();
    c.beginPath(); c.moveTo(px(64), iy - 6); c.lineTo(px(64) + 6.5, iy + 5); c.lineTo(px(64) - 6.5, iy + 5); c.closePath(); c.stroke();
    c.fillRect(px(64) - 0.7, iy - 2.5, 1.4, 4); c.fillRect(px(64) - 0.7, iy + 2.6, 1.4, 1.3);
    c.beginPath(); c.rect(px(92) - 5, iy - 6, 10, 12); c.stroke();
    c.beginPath(); c.moveTo(px(92) - 2.5, iy - 2); c.lineTo(px(92) + 2.5, iy - 2); c.moveTo(px(92) - 2.5, iy + 1.5); c.lineTo(px(92) + 2.5, iy + 1.5); c.stroke();
    // the feed key's arrow (paper advancing), beside the key
    const fx = 236, fyy = 74;
    c.beginPath(); c.moveTo(fx, fyy + 6); c.lineTo(fx, fyy - 5); c.moveTo(fx - 4, fyy - 1); c.lineTo(fx, fyy - 6); c.lineTo(fx + 4, fyy - 1); c.stroke();
  }, 3);
  const fasciaFront = new THREE.MeshPhysicalMaterial({ map: fasciaTex, roughness: 0.45, metalness: 0, clearcoat: 0.3, clearcoatRoughness: 0.35, envMapIntensity: 0.55 });
  const fascia = rbox(FWD, FH, 4, 3, { px: charcoal, nx: charcoal, top: charcoal, bottom: charcoal, front: fasciaFront, back: charcoal }, 2);
  fascia.position.set(0, FY, PD / 2 + 2);
  pr.add(fascia);
  const FZ = PD / 2 + 2;
  const fx = (u: number) => -FWD / 2 + u, fy = (v: number) => FY + FH / 2 - v;
  // the LEDs: power (green, on), error (amber, off), paper/feed (green, blinks while it prints)
  const ledG = lathe([[0, 0], [4.2, 0], [4.2, 1.2], [3.7, 2.6], [2.2, 3.6], [0, 3.9]], 20);
  const ledMats = ["#3BFF6A", "#FFB21E", "#3BFF6A"].map((h) => new THREE.MeshStandardMaterial({ color: col("#262824"), emissive: col(h), emissiveIntensity: 0, roughness: 0.25 }));
  ledMats.forEach((m, i) => {
    const ring = mesh(lathe([[4.1, 0], [6.2, 0], [6.2, 1.1], [4.1, 1.1]], 20), blackM);
    ring.rotation.x = Math.PI / 2; ring.position.set(fx(36 + i * 28), fy(54), FZ);
    pr.add(ring);
    const led = mesh(ledG, m);
    led.rotation.x = Math.PI / 2; led.position.set(fx(36 + i * 28), fy(54), FZ + 0.05);
    pr.add(led);
  });
  ledMats[0].emissiveIntensity = 1.2;
  // the FEED key and the round cover-open button
  const key = rbox(64, 26, 4.5, 6, keyM, 3);
  key.position.set(fx(196), fy(74), FZ + 3.5);
  pr.add(key);
  const btn = mesh(lathe([[0, 0], [15, 0], [15, 2.2], [13.6, 4.4], [9, 5.8], [0, 6.2]], 40), keyM);
  btn.rotation.x = Math.PI / 2; btn.position.set(fx(FWD - 44), fy(50), FZ - 0.2);
  pr.add(btn);
  const btnRing = mesh(lathe([[15, 0], [18, 0], [18, 1.2], [15, 1.2]], 40), blackM);
  btnRing.rotation.x = Math.PI / 2; btnRing.position.set(fx(FWD - 44), fy(50), FZ);
  pr.add(btnRing);
  // vents on the right side, near the back
  const ventM = new THREE.MeshStandardMaterial({ color: col("#2A2B2D"), roughness: 0.9 });
  for (let i = 0; i < 9; i++) {
    const v = mesh(new THREE.PlaneGeometry(150, 4.5), ventM, false, false);
    v.rotation.y = Math.PI / 2;
    v.position.set(PW / 2 + 0.15, 110 + i * 14, -170);
    pr.add(v);
  }

  // ══ THE RECEIPT: a strip of thermal paper (its centreline from poseAt / centreline) ══
  const rc = new THREE.Group();
  rc.userData.obj = "receipt";
  yawG.add(rc);
  const NX = 10;
  const nV = (NX + 1) * (NS + 1);
  const mkGrid = () => {
    const gg = new THREE.BufferGeometry();
    gg.setAttribute("position", new THREE.Float32BufferAttribute(new Float32Array(nV * 3), 3));
    gg.setAttribute("uv", new THREE.Float32BufferAttribute(new Float32Array(nV * 2), 2));
    const idx: number[] = [];
    for (let j = 0; j < NS; j++) for (let i = 0; i < NX; i++) {
      const a = j * (NX + 1) + i, b = a + 1, c2 = a + NX + 1, dd = c2 + 1;
      idx.push(a, b, dd, a, dd, c2);
    }
    gg.setIndex(idx);
    return gg;
  };
  const front = mkGrid(), back = mkGrid();
  const ring: [number, number][] = [];
  for (let i = 0; i <= NX; i++) ring.push([i, 0]);
  for (let j = 1; j <= NS; j++) ring.push([NX, j]);
  for (let i = NX - 1; i >= 0; i--) ring.push([i, NS]);
  for (let j = NS - 1; j >= 1; j--) ring.push([0, j]);
  const edgeG = new THREE.BufferGeometry();
  edgeG.setAttribute("position", new THREE.Float32BufferAttribute(new Float32Array(ring.length * 18), 3));
  const face = liveTex(RW, TEX_L, 3);
  const faceM = new THREE.MeshStandardMaterial({ map: face.tex, roughness: 0.5, metalness: 0, envMapIntensity: 0.45 });
  const backM = new THREE.MeshStandardMaterial({ color: col("#EEEDE7"), roughness: 0.85, metalness: 0, envMapIntensity: 0.3, side: THREE.BackSide });
  const edgeM = new THREE.MeshStandardMaterial({ color: col("#E3E1D9"), roughness: 0.85, metalness: 0, envMapIntensity: 0.3, side: THREE.DoubleSide });
  rc.add(mesh(front, faceM), mesh(back, backM), mesh(edgeG, edgeM));
  const P = new Float32Array(nV * 3), Q = new Float32Array(nV * 3);
  const shape = (feed: number, fall: number) => {
    const pose = poseAt(feed, fall);
    const cl = centreline(pose);
    const fu = front.attributes.uv as THREE.BufferAttribute;
    for (let j = 0; j <= NS; j++) {
      const c = cl[j];
      const u = pose.len - c.s;                                      // px from the receipt's top edge
      const above = Math.max(0, c.s - pose.sb);
      const bow = pose.bow * Math.min(1, above / 80);
      for (let i = 0; i <= NX; i++) {
        const xx = (i / NX - 0.5) * RW, b = bow * (1 - (2 * xx / RW) ** 2);
        const k = j * (NX + 1) + i;
        P[k * 3] = xx; P[k * 3 + 1] = c.y + c.ny * (b + PAPER_T / 2); P[k * 3 + 2] = c.z + c.nz * (b + PAPER_T / 2);
        Q[k * 3] = xx; Q[k * 3 + 1] = c.y + c.ny * (b - PAPER_T / 2); Q[k * 3 + 2] = c.z + c.nz * (b - PAPER_T / 2);
        fu.setXY(k, i / NX, 1 - u / TEX_L);
      }
    }
    (front.attributes.position.array as Float32Array).set(P); (back.attributes.position.array as Float32Array).set(Q);
    const E = edgeG.attributes.position as THREE.BufferAttribute;
    for (let r = 0; r < ring.length; r++) {
      const [i0, j0] = ring[r], [i1, j1] = ring[(r + 1) % ring.length];
      const a = (j0 * (NX + 1) + i0) * 3, b = (j1 * (NX + 1) + i1) * 3;
      const q = [P[a], P[a + 1], P[a + 2], P[b], P[b + 1], P[b + 2], Q[b], Q[b + 1], Q[b + 2], P[a], P[a + 1], P[a + 2], Q[b], Q[b + 1], Q[b + 2], Q[a], Q[a + 1], Q[a + 2]];
      for (let n = 0; n < 18; n++) E.array[r * 18 + n] = q[n];
    }
    for (const gg of [front, back, edgeG]) {
      gg.attributes.position.needsUpdate = true;
      if (gg.attributes.uv) gg.attributes.uv.needsUpdate = true;
      gg.computeVertexNormals(); gg.computeBoundingBox(); gg.computeBoundingSphere();
    }
  };
  let lastShape = "";
  let inkNow = -1, printV = -1;
  const paintFace = (ink: number) => {
    const pt = printTexture();
    const q = Math.round(ink * 20) / 20;
    if (q === inkNow && pt.version === printV) return;
    inkNow = q; printV = pt.version;
    face.paint((c) => {
      c.drawImage(pt.image as HTMLCanvasElement, 0, 0, RW, TEX_L);
      if (q > 0) drawInk(c, q);
    });
  };

  // ══ THE STAMP (new): a green-inked rubber die, a grey cushion, a brushed aluminium mount with a blank ruled index label,
  //    a chrome ferrule and a bottle-green turned handle ══
  const st = new THREE.Group(); st.userData.obj = "stamp"; yawG.add(st);
  const { DW, DD, REL, BLW, BLH, BLD } = STAMP;
  const dieT = paintTex("vd38-die-v2", DW, DD, (c) => {
    // the die's relief, reversed top to bottom (it faces down and prints the right way round): white = raised
    c.fillStyle = "#000"; c.fillRect(0, 0, DW, DD);
    c.save(); c.translate(0, DD); c.scale(1, -1);
    c.strokeStyle = "#fff"; c.fillStyle = "#fff";
    const w = IMP.w, h = IMP.h;
    c.lineWidth = 3.4; c.beginPath(); c.roundRect((DW - w) / 2, (DD - h) / 2, w, h, 6); c.stroke();
    c.lineWidth = 1.1; c.beginPath(); c.roundRect((DW - w) / 2 + 5.5, (DD - h) / 2 + 5.5, w - 11, h - 11, 4); c.stroke();
    track(c, 6); fitFont(c, 800, 64, "LEGIT", w - 30); c.textAlign = "center"; c.textBaseline = "middle"; c.fillText("LEGIT", DW / 2 + 3, DD / 2 + 3); track(c, 0);
    c.restore();
  }, 3);
  const relief = new THREE.PlaneGeometry(DW, DD, 120, 44).rotateX(Math.PI / 2);
  const dieM = new THREE.MeshStandardMaterial({ color: col("#24503A"), roughness: 0.72, displacementMap: dieT, displacementScale: REL, envMapIntensity: 0.3 });
  st.add(mesh(relief, dieM, false, false));
  const dieSlab = rbox(DW + 4, 3, DD + 4, 1, M.rubber("#2F3A33")); dieSlab.position.set(0, 0.05 + 1.5, (DD + 4) / 2); st.add(dieSlab);
  const cushion = rbox(DW + 8, 4, DD + 8, 1.5, M.rubber("#6A6763")); cushion.position.set(0, 3.1 + 2, (DD + 8) / 2); st.add(cushion);
  const alu = new THREE.MeshPhysicalMaterial({ color: col("#C3C7CC"), metalness: 1, roughness: 0.34, envMapIntensity: 0.95 });
  const aluTop = new THREE.MeshPhysicalMaterial({ color: col("#CDD1D5"), metalness: 1, roughness: 0.28, envMapIntensity: 1.0 });
  const block = rbox(BLW, BLH, BLD, 5, { px: alu, nx: alu, top: aluTop, bottom: alu, front: alu, back: alu }, 3);
  block.position.set(0, STAMP_BASE + BLH / 2, BLD / 2);
  st.add(block);
  // the index label: a blank ruled frame, ALWAYS (★ Timur, 2026-11-15, on 035: the word is only ever the ink)
  const idxT = paintTex("vd38-idx-v2", 186, 78, (c) => {
    c.fillStyle = "#F4F0E4"; c.fillRect(0, 0, 186, 78);
    for (let i = 0; i < 300; i++) { c.fillStyle = `rgba(110,100,80,${0.04 + 0.05 * hash(i, 3, 37)})`; c.fillRect(hash(i, 1, 37) * 186, hash(i, 2, 37) * 78, 0.5 + hash(i, 4, 37) * 1.5, 0.3); }
    c.strokeStyle = GREEN; c.lineWidth = 2.6; c.beginPath(); c.roundRect(8, 8, 170, 62, 5); c.stroke();
    c.lineWidth = 0.9; c.beginPath(); c.roundRect(13, 13, 160, 52, 3); c.stroke();
  }, 3);
  const idxM = mesh(new THREE.PlaneGeometry(186, 78).rotateX(-Math.PI / 2), M.print(idxT, 0.75), false, true);
  idxM.position.set(0, STAMP_BASE + BLH + 0.05, 0);
  st.add(idxM);
  const chrome = M.chrome();
  const fer = mesh(lathe([[17, 0], [17.5, 1.5], [17.5, 9.5], [16, 11.5], [12.5, FER_H]], 48), chrome);
  fer.position.y = STAMP_BASE + BLH + 0.1;
  st.add(fer);
  const ferFoot = mesh(new THREE.CircleGeometry(17, 48).rotateX(Math.PI / 2), chrome);
  ferFoot.position.y = STAMP_BASE + BLH + 0.1;
  st.add(ferFoot);
  const bottle = M.gloss("#1E4A35");
  const knob = mesh(lathe(KNOB, 56), bottle);
  knob.position.y = STAMP_BASE + BLH + FER_H;
  st.add(knob);
  const placeStamp = (t: number) => {
    const a = stampAt(t);
    st.visible = a.visible;
    st.position.copy(a.pos);
    st.rotation.set(0, a.spin, a.lean, "YXZ");
  };

  // ══ THE FLOOR (the counter): a shadow catcher and a soft contact pool under the plinth ══
  root.add(makeFloor({ y: g.floor, x0: g.cx - 1000, x1: g.cx + 1000, z0: -800, z1: 800, reflect: 0, shadow: 0.42, fadeC: [g.cx, g.z], fadeR: [760, 520] }));
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(PW + 80, PD + 70), new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: softTex(), transparent: true, depthWrite: false, opacity: 0.38, toneMapped: false }));
  pool.rotation.x = -Math.PI / 2; pool.position.set(0, 0.3, 0); pool.renderOrder = 1.5;
  pool.userData.isFloor = true; pool.userData.noBounds = true;
  yawG.add(pool);

  return {
    root,
    update: (p) => {
      yawG.rotation.y = rad(p.yaw);
      const key = `${p.feed.toFixed(3)}|${p.fall.toFixed(4)}`;
      if (key !== lastShape) { shape(p.feed, p.fall); lastShape = key; }
      rc.visible = p.feed > 0.5 || p.fall > 0;
      paintFace(p.ink);
      placeStamp(p.stamp);
      ledMats[2].emissiveIntensity = 1.3 * p.busy;
    },
  };
};
