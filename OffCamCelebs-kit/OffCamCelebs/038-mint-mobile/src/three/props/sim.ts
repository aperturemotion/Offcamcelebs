// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE SIM IN 3-D (038) — "Reynolds bought into Mint Mobile in 2019 and fronted its ads." On the cream ground, on a desk (the
// floor), two real things at true proportions (5 px per mm):
//   · a MINT MOBILE SIM STARTER CARD: the credit-card-sized PVC carrier (85.6 × 54 × 0.76 mm, its corners rounded 3 mm) in
//     Mint's green livery, "mint mobile" set lowercase in heavy Archivo (#2B6744 on #69B88B: the brand has no fox-free
//     official logo, and the fox is excluded), a white panel round the triple-cut punch-out (the 2FF and 3FF score lines printed round a real
//     4FF hole), the kit's year "2019" in a ruled box, greeked ICCID print; the NANO SIM (12.3 × 8.8 × 0.67 mm, one corner cut)
//     sits in its hole, its gold contact plate up, its back mint plastic;
//   · a PHONE lying screen up, its right side toward us (seen side-on, so the tray and slot read): a graphite metal frame
//     with flat sides, front glass and display, a side button, and the SIM TRAY: a pill faceplate with its eject-pin hole and
//     a carrier with a real pocket, sliding in a real slot (the frame is cut through: the tray never passes through metal).
// Units are layer px (x right, y UP from the desk, z toward the viewer).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, roundRect, paintTex, liveTex, rr, imageOf, type Model } from "../stage";
import { HAS_PHOTO, PHOTO_FILE } from "../../audit/data";
import { rbox, rad, col, fitFont, track, hash, FACE } from "../kit029";

/** Mint Mobile's greens (the brand's own: there is no fox-free official logo, so the name is set as type) */
export const MINT = "#69B88B";
const MINT_DK = "#2B6744";
const INK = "#1F2A24";

// ── the card (5 px / mm) ──
export const CARD = { W: 428, D: 270, T: 3.8, R: 15 } as const;
/** the nano SIM and the hole it sits in (card-local, the hole's centre) */
export const NANO = { W: 61.5, D: 44, T: 3.4, CH: 7 } as const;
export const HOLE = { x: 108, z: -18 } as const;
const HCL = 0.6;            // the hole's clearance round the SIM
// ── the phone ──
export const PH = { W: 735, D: 358, H: 39, R: 56 } as const;
/** the tray: its slot's height band (y), faceplate and carrier sizes, its x offset from the phone's centre */
export const TRAY = { x: -150, y0: 15, y1: 24, L: 165, carD: 70, OUT: 62, base: 1.6, ring: 3.4 } as const;
const NOTCH_D = TRAY.carD + 3 + 2;   // how far the slot runs into the frame

/** the place's layout (desk-local) */
export const SG = { floor: 1500, card: { x: 470, z: 110, yaw: 4 }, phone: { x: 1180, z: 0 }, pivot: { x: 820, z: 40 } } as const;
/** the SIM's centre in the tray's pocket, tray home (desk-local), and its height there */
export const pocketAt = (out: number) => ({ x: SG.phone.x + TRAY.x, y: TRAY.y0 + 0.3 + TRAY.base + 0.2 + NANO.T / 2, z: SG.phone.z + PH.D / 2 - 3 - TRAY.carD / 2 + out });
/** the SIM's centre in the card's hole (desk-local), the card at rest */
export const holeAt = () => {
  const a = rad(SG.card.yaw);
  return { x: SG.card.x + HOLE.x * Math.cos(a) + HOLE.z * Math.sin(a), y: 0.2 + NANO.T / 2, z: SG.card.z - HOLE.x * Math.sin(a) + HOLE.z * Math.cos(a) };
};

/** card: x offset (px) and extra yaw (deg) of its glide; sim: the SIM's pose (desk-local) or null while in its hole;
 *  seated: the SIM rides the tray; out: the tray's travel (px); screen: the display 0 … 1; prog: the ad's playhead 0 … 1 */
export type SimP = { cardDx: number; cardYaw: number; sim: { p: [number, number, number]; r: [number, number, number] } | null; seated: boolean;
  out: number; screen: number; prog: number; yaw: number };

// ══ shapes ══
const chamfered = (w: number, d: number, ch: number, corner: "tr" | "br") => {
  const s = new THREE.Shape();
  const x0 = -w / 2, x1 = w / 2, y0 = -d / 2, y1 = d / 2;
  s.moveTo(x0, y0);
  if (corner === "br") { s.lineTo(x1 - ch, y0); s.lineTo(x1, y0 + ch); } else s.lineTo(x1, y0);
  if (corner === "tr") { s.lineTo(x1, y1 - ch); s.lineTo(x1 - ch, y1); } else s.lineTo(x1, y1);
  s.lineTo(x0, y1); s.lineTo(x0, y0);
  return s;
};
const toPath = (sh: THREE.Shape, dx: number, dy: number) => {
  const p = new THREE.Path();
  const pts = sh.getPoints();
  pts.forEach((q, i) => (i ? p.lineTo(q.x + dx, q.y + dy) : p.moveTo(q.x + dx, q.y + dy)));
  return p;
};
/** a flat slab of `shape` lying on y = 0, `t` thick (shape y → −z: the shape's top is the far side); every face's UVs span
 *  the shape's box, so a texture painted top-down lands on the top face as drawn. Groups: 0 the faces, 1 the sides */
const flat = (shape: THREE.Shape, t: number, bevel = 0, curve = 16) => {
  const g = new THREE.ExtrudeGeometry(shape, { depth: Math.max(0.05, t - 2 * bevel), bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelOffset: -bevel, bevelSegments: 2, curveSegments: curve });
  g.translate(0, 0, bevel);
  g.computeBoundingBox();
  const b = g.boundingBox!;
  const uv = g.attributes.uv as THREE.BufferAttribute, pos = g.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) - b.min.x) / (b.max.x - b.min.x), (pos.getY(i) - b.min.y) / (b.max.y - b.min.y));
  uv.needsUpdate = true;
  g.rotateX(-Math.PI / 2);
  return g;
};
/** a flat plane of `shape` facing up at height y, its UVs over the shape's box */
const flatPlane = (shape: THREE.Shape, curve = 16) => {
  const g = new THREE.ShapeGeometry(shape, curve);
  g.computeBoundingBox();
  const b = g.boundingBox!;
  const uv = g.attributes.uv as THREE.BufferAttribute, pos = g.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) - b.min.x) / (b.max.x - b.min.x), (pos.getY(i) - b.min.y) / (b.max.y - b.min.y));
  g.rotateX(-Math.PI / 2);
  return g;
};

// ══ the print ══
const paintCard = () => paintTex("sim38-card-v4", CARD.W, CARD.D, (c) => {
  const W = CARD.W, D = CARD.D;
  // Mint's green livery over the whole face: mint, a little deeper toward the foot, a faint sheen of the lamination
  const gr = c.createLinearGradient(0, 0, W * 0.4, D);
  gr.addColorStop(0, "#7AC59A"); gr.addColorStop(1, MINT);
  c.fillStyle = gr; c.fillRect(0, 0, W, D);
  c.fillStyle = "rgba(255,255,255,0.08)"; c.fillRect(0, 0, W, D * 0.42);
  // mint mobile, the brand's own lowercase in heavy type, deep green, two lines
  c.fillStyle = MINT_DK; c.textBaseline = "alphabetic"; c.textAlign = "left";
  track(c, -1);
  const s1 = fitFont(c, 800, 74, "mobile", 168);
  c.fillText("mint", 22, 30 + s1 * 0.74);
  c.fillText("mobile", 22, 30 + s1 * 0.74 + 4 + s1 * 0.74);
  track(c, 0);
  // the kit's small print (greeked) and its foot band
  c.fillStyle = "rgba(43,103,68,0.55)";
  for (const [x, y, w] of [[24, 172, 120], [24, 184, 96], [24, 196, 132]] as const) { rr(c, x, y, w, 5, 2.5); c.fill(); }
  c.fillStyle = MINT_DK; c.fillRect(0, D - 30, W, 30);
  c.fillStyle = "rgba(255,255,255,0.55)";
  for (const [x, w] of [[24, 48], [78, 30], [114, 56], [W - 150, 70], [W - 70, 40]] as const) { rr(c, x, D - 18, w, 6, 3); c.fill(); }
  // the white panel round the punch-out
  const hx = W / 2 + HOLE.x, hy = D / 2 + HOLE.z;
  c.fillStyle = "#F7F8F6"; rr(c, hx - 98, 16, 196, D - 56, 12); c.fill();
  // the punch-out: the 2FF and 3FF outlines scored round the nano's hole (die-cut lines and their break tabs)
  c.strokeStyle = "rgba(60,70,66,0.55)"; c.lineWidth = 1.1;
  rr(c, hx - 62.5, hy - 37.5, 125, 75, 6); c.stroke();
  c.strokeStyle = "rgba(60,70,66,0.45)"; c.lineWidth = 0.9;
  rr(c, hx - 37.5, hy - 30, 75, 60, 4); c.stroke();
  c.fillStyle = "#F7F8F6";
  for (const [x, y, w, h] of [[hx - 3, hy - 38.5, 6, 2.4], [hx - 3, hy + 36.1, 6, 2.4], [hx - 63.5, hy - 3, 2.4, 6], [hx + 61.1, hy - 3, 2.4, 6]] as const) c.fillRect(x, y, w, h);
  c.strokeStyle = "rgba(60,70,66,0.55)"; c.lineWidth = 1.1;
  c.beginPath(); c.moveTo(hx + 62.5 - 10, hy - 37.5); c.lineTo(hx + 62.5, hy - 37.5 + 10); c.stroke();
  // the kit's year in a ruled box (the one figure), under the punch-out
  const yx = hx, yy = hy + 66;
  c.strokeStyle = MINT_DK; c.lineWidth = 1.8;
  rr(c, yx - 58, yy - 4, 116, 46, 6); c.stroke();
  c.fillStyle = MINT_DK; c.textAlign = "center";
  track(c, 2);
  const s3 = fitFont(c, 800, 36, "2019", 92);
  c.fillText("2019", yx + 1, yy + 19 + s3 * 0.36);
  track(c, 0);
  // the ICCID (greeked) along the panel's head
  c.fillStyle = "rgba(31,42,36,0.4)";
  for (let k = 0; k < 4; k++) { rr(c, hx - 84 + k * 44, 26, 34, 4.5, 2.2); c.fill(); }
}, 4);

const paintGold = () => paintTex("sim38-gold-v2", 62, 44, (c) => {
  // the contact plate: gold, the eight pads parted by fine etched lines, a little wear
  const g = c.createLinearGradient(0, 0, 62, 44);
  g.addColorStop(0, "#F2D27A"); g.addColorStop(0.5, "#D9AE4E"); g.addColorStop(1, "#EAC566");
  c.fillStyle = g; c.fillRect(0, 0, 62, 44);
  c.strokeStyle = "rgba(90,62,16,0.75)"; c.lineWidth = 0.9;
  c.beginPath();
  c.moveTo(20, 3); c.lineTo(20, 41); c.moveTo(42, 3); c.lineTo(42, 41);
  for (const y of [13, 22, 31]) { c.moveTo(3, y); c.lineTo(20, y); c.moveTo(42, y); c.lineTo(59, y); }
  c.moveTo(20, 22); c.lineTo(26, 22); c.lineTo(26, 13); c.lineTo(36, 13); c.lineTo(36, 31); c.lineTo(42, 31);
  c.stroke();
  for (let i = 0; i < 30; i++) { c.fillStyle = `rgba(255,248,220,${0.08 + 0.1 * hash(i, 3, 3)})`; c.fillRect(hash(i, 1, 3) * 62, hash(i, 2, 3) * 44, 4, 0.6); }
}, 6);
const paintSimBack = () => paintTex("sim38-simback-v2", 62, 44, (c) => {
  c.fillStyle = MINT; c.fillRect(0, 0, 62, 44);
  c.fillStyle = "rgba(43,103,68,0.8)";
  for (const [x, y, w] of [[8, 12, 30], [8, 19, 22], [8, 30, 40]] as const) { rr(c, x, y, w, 3.2, 1.6); c.fill(); }
}, 6);

/** the ad on the display: a landscape video frame (Mint green, his photo as the ad's star, "mint mobile", an AD badge), its playhead bar */
const DW = PH.W - 30, DD = PH.D - 30;
const paintAdBase = () => paintTex("sim38-ad-v3", DW, DD, (c) => {
  // the ad's frame: Mint green, and its star filling the left of the shot (his photo, cropped to the frame's height)
  const gr = c.createLinearGradient(0, 0, DW, DD);
  gr.addColorStop(0, "#7AC59A"); gr.addColorStop(0.55, MINT); gr.addColorStop(1, MINT_DK);
  c.fillStyle = gr; c.fillRect(0, 0, DW, DD);
  const PWID = DD * 1.0;
  const im = imageOf("assets/" + PHOTO_FILE);
  if (HAS_PHOTO && im.complete && im.naturalWidth > 0) {
    c.drawImage(im, 0, 0, im.naturalWidth, im.naturalHeight, 0, 0, PWID, DD);
    // the shot's right edge dissolves into the green
    const fd = c.createLinearGradient(PWID * 0.62, 0, PWID, 0);
    fd.addColorStop(0, "rgba(105,184,139,0)"); fd.addColorStop(1, "rgba(105,184,139,1)");
    c.fillStyle = fd; c.fillRect(PWID * 0.62, 0, PWID * 0.38 + 1, DD);
  }
  // mint mobile, lowercase in heavy type, white, beside him
  const tx = PWID + (DW - PWID) / 2 - 34;
  c.fillStyle = "#FFFFFF"; c.textAlign = "center"; c.textBaseline = "alphabetic";
  track(c, -1);
  const s = fitFont(c, 800, 96, "mobile", DW - PWID - 90);
  c.fillText("mint", tx, DD * 0.5 - 6);
  c.fillText("mobile", tx, DD * 0.5 - 6 + s * 0.82);
  track(c, 0);
  c.fillStyle = "rgba(255,255,255,0.7)";
  rr(c, tx - 80, DD * 0.5 + s * 0.82 + 16, 160, 8, 4); c.fill();
  // the AD badge, top left
  c.fillStyle = "rgba(255,255,255,0.92)";
  rr(c, 26, 22, 58, 30, 8); c.fill();
  c.fillStyle = MINT_DK; c.textAlign = "center";
  fitFont(c, 800, 20, "AD", 40);
  c.fillText("AD", 55, 44);
  // the camera island (the phone's top is to the right): a black pill
  c.fillStyle = "#050505";
  rr(c, DW - 44, DD / 2 - 46, 26, 92, 13); c.fill();
}, 2.2);

export const simModel = () => (): Model<SimP> => {
  const root = new THREE.Group();
  const sc = new THREE.Group();
  sc.position.set(SG.pivot.x, -SG.floor, SG.pivot.z);
  root.add(sc);
  const desk = new THREE.Group();
  desk.position.set(-SG.pivot.x, 0, -SG.pivot.z);
  sc.add(desk);

  // ══ THE CARD ══
  const card = new THREE.Group();
  card.userData.obj = "card";
  desk.add(card);
  const pvc = new THREE.MeshPhysicalMaterial({ map: paintCard(), roughness: 0.34, metalness: 0, clearcoat: 0.55, clearcoatRoughness: 0.25, envMapIntensity: 0.55 });
  const pvcEdge = new THREE.MeshPhysicalMaterial({ color: col("#EDEFEC"), roughness: 0.4, clearcoat: 0.3, envMapIntensity: 0.5 });
  {
    const sh = roundRect(CARD.W, CARD.D, CARD.R);
    const nano = chamfered(NANO.W + 2 * HCL, NANO.D + 2 * HCL, NANO.CH + HCL * 0.6, "tr");
    sh.holes.push(toPath(nano, HOLE.x, -HOLE.z));
    const m = mesh(flat(sh, CARD.T, 0.7), [pvc, pvcEdge]);
    card.add(m);
  }
  // ══ THE NANO SIM ══
  const sim = new THREE.Group();
  sim.userData.obj = "sim";
  const simM = new THREE.MeshPhysicalMaterial({ color: col("#F1F2EE"), roughness: 0.45, clearcoat: 0.3, envMapIntensity: 0.5 });
  {
    const sh = chamfered(NANO.W, NANO.D, NANO.CH, "tr");
    const body = mesh(flat(sh, NANO.T, 0.35, 4), simM);
    body.position.y = -NANO.T / 2;
    sim.add(body);
    const goldM = new THREE.MeshPhysicalMaterial({ map: paintGold(), metalness: 1, roughness: 0.3, envMapIntensity: 1.0 });
    const pad = mesh(flatPlane(chamfered(NANO.W - 3, NANO.D - 3, NANO.CH - 1.2, "tr"), 4), goldM, false, true);
    pad.position.y = NANO.T / 2 + 0.03;
    sim.add(pad);
    const backM = new THREE.MeshStandardMaterial({ map: paintSimBack(), roughness: 0.5, envMapIntensity: 0.4, side: THREE.DoubleSide });
    const bk = mesh(flatPlane(chamfered(NANO.W - 2, NANO.D - 2, NANO.CH - 0.8, "tr"), 4), backM, false, true);
    bk.position.y = -NANO.T / 2 - 0.03;
    bk.rotation.x = Math.PI;   // faces down
    bk.scale.z = -1;           // (read the right way from below)
    sim.add(bk);
  }
  card.add(sim);
  const simInCard = () => { card.add(sim); sim.position.set(HOLE.x, 0.2 + NANO.T / 2, HOLE.z); sim.rotation.set(0, 0, 0); };

  // ══ THE PHONE ══
  const phone = new THREE.Group();
  phone.userData.obj = "phone";
  phone.position.set(SG.phone.x, 0, SG.phone.z);
  desk.add(phone);
  const frameM = new THREE.MeshPhysicalMaterial({ color: col("#5A5E64"), metalness: 0.85, roughness: 0.36, clearcoat: 0.2, clearcoatRoughness: 0.4, envMapIntensity: 0.9 });
  const backGlass = new THREE.MeshPhysicalMaterial({ color: col("#2E3034"), roughness: 0.5, metalness: 0, envMapIntensity: 0.5 });
  const W2 = PH.W / 2, D2 = PH.D / 2, R = PH.R;
  const outline = (notch: boolean) => {
    const s = new THREE.Shape();
    const nx0 = TRAY.x - TRAY.L / 2 - 0.5, nx1 = TRAY.x + TRAY.L / 2 + 0.5;
    // the near edge (z = +D/2) is the shape's bottom edge (shape y = −z)
    s.moveTo(-W2 + R, -D2);
    if (notch) { s.lineTo(nx0, -D2); s.lineTo(nx0, -D2 + NOTCH_D); s.lineTo(nx1, -D2 + NOTCH_D); s.lineTo(nx1, -D2); }
    s.lineTo(W2 - R, -D2); s.quadraticCurveTo(W2, -D2, W2, -D2 + R);
    s.lineTo(W2, D2 - R); s.quadraticCurveTo(W2, D2, W2 - R, D2);
    s.lineTo(-W2 + R, D2); s.quadraticCurveTo(-W2, D2, -W2, D2 - R);
    s.lineTo(-W2, -D2 + R); s.quadraticCurveTo(-W2, -D2, -W2 + R, -D2);
    return s;
  };
  {
    // the back glass (a hair inset, a soft edge), the frame in three bands (the middle one cut by the tray's slot)
    const bg = mesh(flat(roundRect(PH.W - 3, PH.D - 3, R - 1.5), 3, 1.2, 24), backGlass);
    phone.add(bg);
    const lo = mesh(flat(outline(false), TRAY.y0 - 2.5, 0, 24), frameM); lo.position.y = 2.5; phone.add(lo);
    const mid = mesh(flat(outline(true), TRAY.y1 - TRAY.y0, 0, 24), frameM); mid.position.y = TRAY.y0; phone.add(mid);
    const hi = mesh(flat(outline(false), PH.H - 2.2 - TRAY.y1, 0, 24), frameM); hi.position.y = TRAY.y1; phone.add(hi);
    // a chamfered lip on the frame's top edge, catching the key
    const lip = mesh(flat(roundRect(PH.W - 0.6, PH.D - 0.6, R - 0.3), 1.2, 0.55, 24), frameM); lip.position.y = PH.H - 2.2 - 0.6; phone.add(lip);
  }
  // the front glass and the display under it
  const glassM = new THREE.MeshPhysicalMaterial({ color: col("#07080A"), roughness: 0.08, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 1.2 });
  const glass = mesh(flat(roundRect(PH.W - 4, PH.D - 4, R - 2), 1.9, 0.8, 32), glassM);
  glass.position.y = PH.H - 1.9;
  phone.add(glass);
  const live = liveTex(DW, DD, 2.2);
  const dispM = new THREE.MeshPhysicalMaterial({ color: col("#000000"), emissive: col("#FFFFFF"), emissiveMap: live.tex, emissiveIntensity: 0,
    roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.0, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  const disp = mesh(flatPlane(roundRect(DW, DD, R - 15), 32), dispM, false, true);
  disp.position.y = PH.H + 0.04;
  phone.add(disp);
  // the side button (near side, toward the top end) and the bottom end's speaker and port
  const btn = rbox(96, 9, 3.2, 3, frameM, 3);
  btn.position.set(170, 26, D2 + 2.6);
  phone.add(btn);
  const holeM = new THREE.MeshStandardMaterial({ color: col("#0A0A0B"), roughness: 0.9 });
  for (let i = 0; i < 6; i++) {
    const h = mesh(new THREE.CircleGeometry(2.2, 12), holeM, false, false);
    h.rotation.y = -Math.PI / 2; h.position.set(-W2 - 0.05, 19.5, -30 - i * 11);
    phone.add(h);
  }
  const port = rbox(40, 8, 1, 3.5, holeM, 2);
  port.rotation.y = -Math.PI / 2; port.position.set(-W2 - 0.04, 19.5, 40);
  phone.add(port);

  // ══ THE TRAY (it slides in the phone's slot: its own object, riding on the slot's floor) ══
  const tray = new THREE.Group();
  tray.userData.obj = "tray";
  phone.add(tray);
  {
    const fp = rbox(TRAY.L, TRAY.y1 - TRAY.y0 - 0.6, 3, 4, frameM, 3);
    fp.position.set(0, (TRAY.y0 + TRAY.y1) / 2, 0);
    tray.add(fp);
    const pin = mesh(new THREE.CircleGeometry(1.6, 16), holeM, false, false);
    pin.position.set(-TRAY.L / 2 + 16, (TRAY.y0 + TRAY.y1) / 2, 0.04);
    tray.add(pin);
    const carM = new THREE.MeshPhysicalMaterial({ color: col("#6A6E74"), metalness: 0.85, roughness: 0.42, envMapIntensity: 0.85 });
    const base = rbox(TRAY.L - 8, TRAY.base, TRAY.carD, 0.6, carM, 2);
    base.position.set(0, TRAY.y0 + 0.3 + TRAY.base / 2, -3);
    tray.add(base);
    const ring = roundRect(TRAY.L - 8, TRAY.carD, 3);
    // the pocket: the SIM lies in it contacts down, so its cut corner is at the near right
    ring.holes.push(toPath(chamfered(NANO.W + 1.0, NANO.D + 1.0, NANO.CH + 0.3, "br"), 0, 0));
    const rg = mesh(flat(ring, TRAY.ring, 0.3, 4), carM);
    rg.position.set(0, TRAY.y0 + 0.3 + TRAY.base, -3 - TRAY.carD / 2);
    tray.add(rg);
  }
  const trayHome = new THREE.Vector3(TRAY.x, 0, D2);

  // ══ THE FLOOR (the desk) ══
  const floor = makeFloor({ y: SG.floor, x0: -500, x1: 2100, z0: -700, z1: 800, reflect: 0, shadow: 0.42, fadeC: [SG.pivot.x, SG.pivot.z], fadeR: [1150, 620],
    blobs: [{ x: SG.phone.x, z: SG.phone.z, w: PH.W + 60, d: PH.D + 60, a: 0.16 }] });
  root.add(floor);

  let lastProg = -1, lastScreen = -1;
  const paintAd = (prog: number) => live.paint((g) => {
    const base = paintAdBase();
    g.drawImage(base.image as HTMLCanvasElement, 0, 0, DW, DD);
    // the playhead: a track and its played part, along the foot of the frame
    g.fillStyle = "rgba(255,255,255,0.35)"; g.fillRect(26, DD - 22, DW - 52, 5);
    g.fillStyle = "#FFFFFF"; g.fillRect(26, DD - 22, (DW - 52) * prog, 5);
    g.beginPath(); g.arc(26 + (DW - 52) * prog, DD - 19.5, 6, 0, Math.PI * 2); g.fill();
    g.font = `600 13px ${FACE}`;
  });

  return {
    root,
    update: (p) => {
      sc.rotation.y = rad(p.yaw);
      card.position.set(SG.card.x + p.cardDx, 0, SG.card.z);
      card.rotation.y = rad(SG.card.yaw + p.cardYaw);
      card.updateMatrixWorld();
      if (p.seated) {
        tray.add(sim);
        const q = pocketAt(0);
        sim.position.set(q.x - SG.phone.x - TRAY.x, q.y, q.z - SG.phone.z - D2);
        sim.rotation.set(Math.PI, 0, 0);
      } else if (p.sim) {
        desk.add(sim);
        sim.position.set(...p.sim.p);
        sim.rotation.set(...p.sim.r, "XYZ");
      } else simInCard();
      tray.position.copy(trayHome).add(new THREE.Vector3(0, 0, p.out));
      const on = p.screen;
      dispM.emissiveIntensity = 0.92 * on;
      dispM.roughness = 0.1 + 0.25 * on;
      if (on > 0 && (Math.abs(p.prog - lastProg) > 1e-4 || lastScreen <= 0)) { paintAd(p.prog); lastProg = p.prog; }
      lastScreen = on;
    },
  };
};
