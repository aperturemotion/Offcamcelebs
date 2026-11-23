// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE CHAMPION IN 3-D (039) — "Canelo is boxing's biggest star, a four-division world champion." On the cream ground, on an
// unseen ring-side table (the floor: its soft contact shadows), two real things:
//   · THE FRAMED PHOTO: a dark walnut frame (four bevelled rails, their grain running along each, satin lacquer), a slim gilt
//     lip, a cream mat with a bevelled cut, his photo printed behind GLASS (a faint sheen and two soft diagonal glares), a
//     kraft backing board and a walnut easel strut; it stands a hair turned, leaning back 12° (assets/canelo_face.png,
//     Wikimedia Commons, CC BY 3.0);
//   · THE BELT: a real championship belt: thick black leather (pebbled grain, a creased groove and raised gold stitching along
//     each edge, worn edge paint), laid in a gentle curve with its ends curling back and lifting a hair off the table; a
//     stitched leather backing under a polished gold centre plate built in relief (a bevelled base plate with a rope border,
//     a raised inner panel with black enamel bands and raised gold letters WORLD / CHAMPION, a laurel, a domed medallion with
//     a rope ring and a raised star, faceted ruby cabochons in gold bezels) and FOUR side plates, one per division, each a
//     bevelled base with four rivets and a raised panel: the weight limit (154, 160, 168, 175 LB) in raised gold on black
//     enamel. It is slid in from beyond the right edge, low over the table, lands with weight and brakes to rest. On
//     "four-division" its four side plates light up one by one (dull antique gold to polished, a warm flare that settles).
// Relief is real geometry where it is big (plates, panels, medallion, bezels, rivets) and a bump map where it is fine
// (engraving, rope, grain, stitching); the enamel is non-metal by a metalness map.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, slabOf, paintTex, imageOf, roundRect, type Model } from "../stage";
import { M, rbox, rad, fitFont, track, hash, font } from "../kit029";

export const CG = {
  floor: 1450,
  frame: { x: 548, z: -230, yaw: -4 },   // the frame's back-bottom edge, centre; a hair turned
  belt: { x: 540, z: 40 },               // the belt's centre (its strap's mid-line) on the table
} as const;

// ══ THE FRAME ══
export const FR = { W: 400, H: 520, MW: 38, D: 28, LEAN: 12 } as const;
const PRW = FR.W - 2 * FR.MW + 8, PRH = FR.H - 2 * FR.MW + 8;   // the mat print, its edges tucked under the moulding
const WIN = { x: 34, y: 36, w: PRW - 68, h: PRH - 36 - 54 };     // the photo's window in the mat
const HINGE = 0.62, STRUT_BACK = 150, STRUT_T = 9;

/** a point of the frame (frame-local: x across from its centre, y up from its bottom, z out of its back plane) → world */
const frameW = (x: number, y: number, z: number) => {
  const th = -rad(FR.LEAN), c = Math.cos(th), s = Math.sin(th);
  const ly = y * c - z * s, lz = y * s + z * c;
  const a = rad(CG.frame.yaw), ca = Math.cos(a), sa = Math.sin(a);
  return { x: CG.frame.x + x * ca + lz * sa, y: -CG.floor + ly, z: CG.frame.z - x * sa + lz * ca };
};
/** the frame's outer corners (layer coords: y down), for the camera's framings and checks */
export const framePts = (): [number, number, number][] => {
  const out: [number, number, number][] = [];
  for (const x of [-FR.W / 2, FR.W / 2]) for (const y of [0, FR.H]) for (const z of [0, FR.D]) { const p = frameW(x, y, z); out.push([p.x, -p.y, p.z]); }
  return out;
};
export const frameFace = () => { const p = frameW(0, FR.H * 0.55, FR.D); return { x: p.x, y: -p.y, z: p.z }; };

// ══ THE BELT ══
export const BT = { HALF: 500, BEND: 150, W: 120, T: 11, PADW: 420, PADD: 300, PADT: 14,
  PW: 370, PD: 250, PT: 9, IN: 26, PI: 5, MR: 58, MT: 8, SPW: 104, SPD: 108, SPT: 6, SIN: 12, SPI: 3 } as const;
export const SIDE_U = [-384, -262, 262, 384] as const;
const WEIGHTS = ["154", "160", "168", "175"];
/** the strap's mid-line: flat through the centre, its ends curling back */
const pathZ = (u: number) => -BT.BEND * Math.pow(u / BT.HALF, 4);
const pathDZ = (u: number) => (-4 * BT.BEND * Math.pow(u, 3)) / Math.pow(BT.HALF, 4);
const ss = (a: number, b: number, x: number) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
/** the stiff leather's ends lift a hair off the table */
const lift = (u: number) => 3.5 * ss(400, BT.HALF, Math.abs(u));
const PLATE_TOP = BT.PADT + BT.PT + BT.PI;

export type BeltT = { land: number };
const FLY = 22, DX = 1650, H0 = 46, SLIDE = 34, BRAKE = 9;
/** the slide-in: from beyond the right edge, low over the table, decelerating as it drops; it lands at `land` (thump), then
 *  brakes over the last few px with one small bounce */
export const beltAt = (T: BeltT, f: number) => {
  const t0 = T.land - FLY;
  if (f <= t0) return { dx: DX + SLIDE, h: H0, spin: rad(10), visible: false };
  if (f < T.land) {
    const u = (f - t0) / FLY, e = 1 - Math.pow(1 - u, 2.2);
    return { dx: SLIDE + DX * (1 - e), h: H0 * (1 - u * u), spin: rad(10) * (1 - e) + rad(1) * e, visible: true };
  }
  const t = f - T.land;
  const bounce = t < 6 ? 2.2 * Math.sin((Math.PI * t) / 6) : 0;
  const k = Math.min(1, t / BRAKE);
  return { dx: SLIDE * (1 - k) * (1 - k), h: bounce, spin: rad(1) * (1 - k) * (1 - k), visible: true };
};
export const beltStart = (T: BeltT) => T.land - FLY;
/** the frame the belt moves fastest (its whoosh peaks there) */
export const beltFastest = (T: BeltT) => T.land - FLY + 1;
/** a point of the belt (belt-local: x along, y up, z toward the viewer) → layer coords at f */
export const beltPt = (T: BeltT, f: number, lx: number, ly: number, lz: number): [number, number, number] => {
  const b = beltAt(T, f), c = Math.cos(b.spin), s = Math.sin(b.spin);
  const x = lx * c + lz * s, z = -lx * s + lz * c;
  return [CG.belt.x + b.dx + x, CG.floor - b.h - ly, CG.belt.z + z];
};
/** the belt's extreme points (for the framings and the band checks) */
export const beltPts = (T: BeltT, f: number) => {
  const out: [number, number, number][] = [];
  for (const u of [-BT.HALF, BT.HALF]) for (const a of [-1, 1]) {
    const z = pathZ(u), dz = pathDZ(u), n = Math.hypot(1, dz);
    out.push(beltPt(T, f, u - (a * BT.W) / 2 * (dz / n), BT.T + lift(u), z + (a * BT.W) / 2 * (1 / n)));
  }
  for (const x of [-BT.PADW / 2, 0, BT.PADW / 2]) out.push(beltPt(T, f, x, BT.PADT, BT.PADD / 2), beltPt(T, f, x, BT.PADT, -BT.PADD / 2));
  out.push(beltPt(T, f, 0, PLATE_TOP + BT.MT + 3, 0));
  return out;
};
/** where each side plate's number sits (layer coords) */
export const plateNums = (T: BeltT, f: number) => SIDE_U.map((u) => beltPt(T, f, u, BT.T + BT.SPT + BT.SPI, pathZ(u) - 4));
/** the centre plate's lower word (CHAMPION), its nearest print */
export const champWord = (T: BeltT, f: number) => [-80, 80].map((x) => beltPt(T, f, x, PLATE_TOP, 84));

// ══ PRINT: every relief is painted three ways — its colour ("c"), its height for the bump map ("h": white is high) and its
//    metalness ("m": the enamel is not metal) ══
type Mode = "c" | "h" | "m";
const goldBase = (g: CanvasRenderingContext2D, w: number, h: number, seed: number, mode: Mode) => {
  if (mode === "h") { g.fillStyle = "#9A9A9A"; g.fillRect(0, 0, w, h); }
  else if (mode === "m") { g.fillStyle = "#FFFFFF"; g.fillRect(0, 0, w, h); return; }
  else {
    const gr = g.createLinearGradient(0, 0, w, h);
    gr.addColorStop(0, "#F6DC8C"); gr.addColorStop(0.42, "#DDB352"); gr.addColorStop(0.68, "#F1D075"); gr.addColorStop(1, "#CFA142");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  }
  // the polishing: fine hairline strokes (and their faint relief)
  for (let i = 0; i < 1400; i++) {
    const lightS = hash(i, 1, seed) > 0.5;
    g.fillStyle = mode === "h" ? `rgba(${lightS ? "180,180,180" : "120,120,120"},0.25)` : `rgba(${lightS ? "255,242,195" : "150,105,35"},${0.05 + 0.07 * hash(i, 2, seed)})`;
    g.save(); g.translate(hash(i, 3, seed) * w, hash(i, 4, seed) * h); g.rotate(-0.25 + 0.5 * hash(i, 6, seed));
    g.fillRect(0, 0, 6 + hash(i, 5, seed) * 30, 0.3); g.restore();
  }
};
const ENGR = "#6A4510", HI = "rgba(255,246,205,0.85)";
/** an engraved (cut) stroke */
const engrave = (g: CanvasRenderingContext2D, mode: Mode, path: () => void, wdt: number) => {
  if (mode === "m") return;
  if (mode === "h") { g.strokeStyle = "#000"; g.lineWidth = wdt; path(); g.stroke(); return; }
  g.save(); g.translate(0.7, 0.7); g.strokeStyle = HI; g.lineWidth = wdt * 0.7; path(); g.stroke(); g.restore();
  g.strokeStyle = ENGR; g.lineWidth = wdt; path(); g.stroke();
};
/** raised gold type: polished faces, a dark fillet below and right where it meets its ground */
const raisedText = (g: CanvasRenderingContext2D, mode: Mode, t: string, x: number, y: number) => {
  if (mode === "h") { g.fillStyle = "#FFF"; g.fillText(t, x, y); return; }
  if (mode === "m") { g.fillStyle = "#FFF"; g.fillText(t, x, y); return; }
  g.fillStyle = "rgba(20,12,4,0.85)"; g.fillText(t, x + 1.3, y + 1.4);
  const gr = g.createLinearGradient(0, y - 30, 0, y);
  gr.addColorStop(0, "#FFF0B5"); gr.addColorStop(0.55, "#E4BD5C"); gr.addColorStop(1, "#B8862E");
  g.fillStyle = gr; g.fillText(t, x, y);
};
/** a black enamel field: glossy, non-metal, a hair below the gold */
const enamel = (g: CanvasRenderingContext2D, mode: Mode, path: () => void) => {
  g.fillStyle = mode === "h" ? "#5A5A5A" : mode === "m" ? "#000" : "#0A0A0C";
  path(); g.fill();
  if (mode === "c") { g.strokeStyle = ENGR; g.lineWidth = 1.2; path(); g.stroke(); }
};
const octPath = (g: CanvasRenderingContext2D, x0: number, y0: number, w: number, h: number, c: number) => {
  g.beginPath();
  g.moveTo(x0 + c, y0); g.lineTo(x0 + w - c, y0); g.lineTo(x0 + w, y0 + c); g.lineTo(x0 + w, y0 + h - c);
  g.lineTo(x0 + w - c, y0 + h); g.lineTo(x0 + c, y0 + h); g.lineTo(x0, y0 + h - c); g.lineTo(x0, y0 + c); g.closePath();
};
const OCT_C = 54, SOCT_C = 20;
const IPW = BT.PW - 2 * BT.IN, IPD = BT.PD - 2 * BT.IN;
/** the base plate: a rope border round its rim */
const baseTex = (mode: Mode) => paintTex(`ch-base-${mode}`, BT.PW, BT.PD, (g) => {
  const w = BT.PW, h = BT.PD;
  goldBase(g, w, h, 9, mode);
  if (mode === "m") return;
  engrave(g, mode, () => octPath(g, 6, 6, w - 12, h - 12, OCT_C - 3), 1.3);
  engrave(g, mode, () => octPath(g, 20, 20, w - 40, h - 40, OCT_C - 9), 1.3);
  // the rope: slanted twists between the two lines, all the way round
  const per = [[OCT_C, 13, w - OCT_C, 13], [w - OCT_C, h - 13, OCT_C, h - 13], [13, OCT_C, 13, h - OCT_C], [w - 13, h - OCT_C, w - 13, OCT_C],
    [OCT_C, 13, 13, OCT_C], [w - OCT_C, 13, w - 13, OCT_C], [OCT_C, h - 13, 13, h - OCT_C], [w - OCT_C, h - 13, w - 13, h - OCT_C]];
  for (const [x0, y0, x1, y1] of per) {
    const L = Math.hypot(x1 - x0, y1 - y0), n = Math.floor(L / 5.5), ux = (x1 - x0) / L, uy = (y1 - y0) / L;
    for (let k = 0; k < n; k++) {
      const cx = x0 + ux * (k + 0.5) * (L / n), cy = y0 + uy * (k + 0.5) * (L / n);
      g.save(); g.translate(cx, cy); g.rotate(Math.atan2(uy, ux) + 0.9);
      if (mode === "h") { g.fillStyle = "#FFF"; g.beginPath(); g.ellipse(0, 0, 5.5, 2, 0, 0, Math.PI * 2); g.fill(); g.fillStyle = "#000"; g.fillRect(-0.5, -3, 1, 6); }
      else { g.fillStyle = "rgba(255,244,200,0.7)"; g.beginPath(); g.ellipse(-0.4, -0.4, 5.5, 2, 0, 0, Math.PI * 2); g.fill(); g.fillStyle = "rgba(110,72,16,0.75)"; g.fillRect(-0.6, -3, 1.2, 6); }
      g.restore();
    }
  }
}, 4);
/** the inner panel: two enamel bands with raised WORLD / CHAMPION, the laurel round the medallion */
const panelTex = (mode: Mode) => paintTex(`ch-panel-${mode}`, IPW, IPD, (g) => {
  const w = IPW, h = IPD;
  goldBase(g, w, h, 11, mode);
  engrave(g, mode, () => octPath(g, 5, 5, w - 10, h - 10, OCT_C - 30), 1.4);
  const band = (y: number, bw: number) => () => { g.beginPath(); g.roundRect(w / 2 - bw / 2, y, bw, 34, 17); };
  enamel(g, mode, band(12, 190));
  enamel(g, mode, band(h - 46, 240));
  if (mode !== "m") {
    // the laurel: raised leaves on two arcs under the medallion
    for (const sgn of [-1, 1]) for (let k = 0; k < 8; k++) {
      const a = Math.PI / 2 + sgn * (0.5 + k * 0.28), R = BT.MR + 13;
      const x = w / 2 + R * Math.cos(a), y = h / 2 + 2 + R * Math.sin(a) * 0.9;
      g.save(); g.translate(x, y); g.rotate(a + sgn * 0.9);
      if (mode === "h") { g.fillStyle = "#FFF"; g.beginPath(); g.ellipse(0, 0, 8, 3.4, 0, 0, Math.PI * 2); g.fill(); }
      else {
        g.fillStyle = "rgba(60,38,8,0.7)"; g.beginPath(); g.ellipse(1, 1, 8, 3.4, 0, 0, Math.PI * 2); g.fill();
        g.fillStyle = "#F3D684"; g.beginPath(); g.ellipse(0, 0, 8, 3.4, 0, 0, Math.PI * 2); g.fill();
        g.strokeStyle = "rgba(110,72,16,0.7)"; g.lineWidth = 0.6; g.beginPath(); g.moveTo(-7, 0); g.lineTo(7, 0); g.stroke();
      }
      g.restore();
    }
  }
  g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 5); fitFont(g, 800, 25, "WORLD", 150); raisedText(g, mode, "WORLD", w / 2 + 2.5, 38); track(g, 0);
  track(g, 4); fitFont(g, 800, 25, "CHAMPION", 205); raisedText(g, mode, "CHAMPION", w / 2 + 2, h - 20); track(g, 0);
}, 4);
const medalTex = (mode: Mode) => paintTex(`ch-medal-${mode}`, BT.MR * 2, BT.MR * 2, (g) => {
  const R = BT.MR, w = R * 2;
  if (mode === "m") { g.fillStyle = "#FFF"; g.fillRect(0, 0, w, w); g.fillStyle = "#000"; g.beginPath(); g.arc(R, R, R - 14, 0, Math.PI * 2); g.arc(R, R, R - 22, 0, Math.PI * 2, true); g.fill(); return; }
  if (mode === "h") { g.fillStyle = "#9A9A9A"; g.fillRect(0, 0, w, w); }
  else {
    const gr = g.createRadialGradient(R * 0.7, R * 0.6, 4, R, R, R);
    gr.addColorStop(0, "#FCE9A8"); gr.addColorStop(0.6, "#E3BA58"); gr.addColorStop(1, "#C8963A");
    g.fillStyle = gr; g.fillRect(0, 0, w, w);
  }
  // a black enamel ring with raised gold dots in it
  enamel(g, mode, () => { g.beginPath(); g.arc(R, R, R - 14, 0, Math.PI * 2); g.arc(R, R, R - 22, 0, Math.PI * 2, true); });
  for (let k = 0; k < 20; k++) {
    const a = (k * Math.PI * 2) / 20, x = R + (R - 18) * Math.cos(a), y = R + (R - 18) * Math.sin(a);
    g.fillStyle = mode === "h" ? "#FFF" : "#EFCB6A"; g.beginPath(); g.arc(x, y, 1.6, 0, Math.PI * 2); g.fill();
  }
  // the five-point star, raised and polished
  const star = () => {
    g.beginPath();
    for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + (k * Math.PI) / 5, r = k % 2 ? 12 : 30; const x = R + r * Math.cos(a), y = R + 2 + r * Math.sin(a); if (k) g.lineTo(x, y); else g.moveTo(x, y); }
    g.closePath();
  };
  if (mode === "h") { star(); g.fillStyle = "#FFF"; g.fill(); return; }
  g.save(); g.translate(1.3, 1.3); star(); g.fillStyle = "rgba(60,38,8,0.75)"; g.fill(); g.restore();
  star(); const sg = g.createLinearGradient(R - 30, R - 30, R + 30, R + 30); sg.addColorStop(0, "#FFF3C2"); sg.addColorStop(1, "#C99538"); g.fillStyle = sg; g.fill();
  // the star's facets: a ridge from each point to the centre
  g.strokeStyle = "rgba(120,80,20,0.5)"; g.lineWidth = 0.7;
  for (let k = 0; k < 5; k++) { const a = -Math.PI / 2 + (k * 2 * Math.PI) / 5; g.beginPath(); g.moveTo(R, R + 2); g.lineTo(R + 30 * Math.cos(a), R + 2 + 30 * Math.sin(a)); g.stroke(); }
}, 5);
const SPW_I = BT.SPW - 2 * BT.SIN, SPD_I = BT.SPD - 2 * BT.SIN;
const sideTex = (k: number, mode: Mode) => paintTex(`ch-side-${k}-${mode}`, SPW_I, SPD_I, (g) => {
  const w = SPW_I, h = SPD_I;
  goldBase(g, w, h, 20 + k, mode);
  enamel(g, mode, () => { g.beginPath(); g.roundRect(6, 6, w - 12, h - 12, 9); });
  g.textAlign = "center"; g.textBaseline = "alphabetic";
  fitFont(g, 800, 38, WEIGHTS[k], w - 18); raisedText(g, mode, WEIGHTS[k], w / 2, 48);
  track(g, 3); font(g, 800, 13); raisedText(g, mode, "LB", w / 2 + 1.5, 68); track(g, 0);
}, 6);
/** the side plates' bevelled base: plain polish, its rim hairlined */
const sideBaseTex = (mode: Mode) => paintTex(`ch-sbase-${mode}`, BT.SPW, BT.SPD, (g) => {
  goldBase(g, BT.SPW, BT.SPD, 29, mode);
  engrave(g, mode, () => octPath(g, 4, 4, BT.SPW - 8, BT.SPD - 8, SOCT_C - 2), 1);
}, 4);
/** the leather: pebbled grain, a creased groove and raised saddle stitching along each edge, the edge paint worn */
const leatherTex = (key: string, w: number, h: number, mode: "c" | "h", stitch: (g: CanvasRenderingContext2D, dash: (x: number, y: number, a: number) => void) => void, seed: number) =>
  paintTex(`ch-${key}-${mode}`, w, h, (g) => {
    g.fillStyle = mode === "h" ? "#808080" : "#1D1917"; g.fillRect(0, 0, w, h);
    // the pebbles: soft irregular bumps, darker pores between them
    const n = Math.round((w * h) / 9);
    for (let i = 0; i < n; i++) {
      const x = hash(i, 3, seed) * w, y = hash(i, 4, seed) * h, r = 0.8 + hash(i, 5, seed) * 1.6;
      g.fillStyle = mode === "h" ? `rgba(${hash(i, 1, seed) > 0.45 ? "200,200,200" : "30,30,30"},0.35)` : `rgba(${hash(i, 1, seed) > 0.45 ? "62,55,50" : "0,0,0"},${0.18 + 0.2 * hash(i, 2, seed)})`;
      g.beginPath(); g.ellipse(x, y, r, r * (0.6 + 0.4 * hash(i, 6, seed)), hash(i, 7, seed) * 3, 0, Math.PI * 2); g.fill();
    }
    // faint creases
    g.strokeStyle = mode === "h" ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.35)"; g.lineWidth = 0.5;
    for (let i = 0; i < w / 18; i++) { const x = hash(i, 8, seed) * w, y = hash(i, 9, seed) * h; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + 6, y + 3 * (hash(i, 10, seed) - 0.5), x + 12 + 10 * hash(i, 11, seed), y + 4 * (hash(i, 12, seed) - 0.5)); g.stroke(); }
    stitch(g, (x, y, a) => {
      g.save(); g.translate(x, y); g.rotate(a);
      if (mode === "h") { g.fillStyle = "#000"; g.fillRect(-1, -1.6, 2, 3.2); g.fillStyle = "#FFF"; g.beginPath(); g.roundRect(0.5, -1.2, 6.2, 2.4, 1.2); g.fill(); }
      else {
        g.fillStyle = "rgba(0,0,0,0.7)"; g.fillRect(-1, -1.4, 2, 2.8);
        g.fillStyle = "rgba(0,0,0,0.45)"; g.fillRect(1.2, -0.4, 6.2, 2.4);
        const sg = g.createLinearGradient(0, -1.2, 0, 1.2); sg.addColorStop(0, "#F0CC78"); sg.addColorStop(1, "#A97F2E");
        g.fillStyle = sg; g.beginPath(); g.roundRect(0.5, -1.2, 6.2, 2.4, 1.2); g.fill();
      }
      g.restore();
    });
  }, 3);
const strapTex = (mode: "c" | "h") => leatherTex("strap", 1000, BT.W, mode, (g, dash) => {
  const h = BT.W;
  for (const y of [8, h - 8]) { g.fillStyle = mode === "h" ? "#000" : "rgba(0,0,0,0.6)"; g.fillRect(0, y - 0.7, 1000, 1.4); }
  for (const y of [15, h - 15]) for (let x = 2; x < 1000; x += 9) dash(x, y, -0.12);
  if (mode === "c") {
    // the worn edge paint: brown scuffs right at the edges
    for (let i = 0; i < 220; i++) { g.fillStyle = `rgba(110,80,60,${0.15 + 0.25 * hash(i, 1, 51)})`; g.fillRect(hash(i, 2, 51) * 1000, hash(i, 3, 51) > 0.5 ? 0 : h - 2.2, 3 + 14 * hash(i, 4, 51), 2.2); }
  }
}, 31);
const padTex = (mode: "c" | "h") => leatherTex("pad", BT.PADW, BT.PADD, mode, (g, dash) => {
  const w = BT.PADW, h = BT.PADD, x0 = 13, y0 = 13, W = w - 26, H = h - 26, r = 58;
  // the stitch line round a rounded rectangle, sampled every 9 px
  const pts: [number, number, number][] = [];
  const seg = (ax: number, ay: number, bx: number, by: number) => { const L = Math.hypot(bx - ax, by - ay); for (let s = 0; s < L; s += 9) pts.push([ax + ((bx - ax) * s) / L, ay + ((by - ay) * s) / L, Math.atan2(by - ay, bx - ax)]); };
  const arc = (cx: number, cy: number, a0: number) => { for (let s = 0; s < (Math.PI / 2) * r; s += 9) { const a = a0 + s / r; pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a), a + Math.PI / 2]); } };
  seg(x0 + r, y0, x0 + W - r, y0); arc(x0 + W - r, y0 + r, -Math.PI / 2); seg(x0 + W, y0 + r, x0 + W, y0 + H - r); arc(x0 + W - r, y0 + H - r, 0);
  seg(x0 + W - r, y0 + H, x0 + r, y0 + H); arc(x0 + r, y0 + H - r, Math.PI / 2); seg(x0, y0 + H - r, x0, y0 + r); arc(x0 + r, y0 + r, Math.PI);
  for (const [x, y, a] of pts) dash(x, y, a);
}, 37);
/** walnut: its grain running along the rail (dx: along x, else along y) */
const woodTex = (along: "x" | "y") => paintTex(`ch-wood-${along}`, along === "x" ? 420 : 60, along === "x" ? 60 : 520, (g) => {
  const L = 520, Wd = 60;
  if (along === "y") { g.translate(60, 0); g.rotate(Math.PI / 2); }
  const gr = g.createLinearGradient(0, 0, 0, Wd); gr.addColorStop(0, "#3E271A"); gr.addColorStop(0.5, "#4A2F1F"); gr.addColorStop(1, "#38231A");
  g.fillStyle = gr; g.fillRect(0, 0, L, Wd);
  for (let i = 0; i < 70; i++) {
    const y = hash(i, 1, 61) * Wd, a = 0.6 + 1.6 * hash(i, 2, 61), ph = hash(i, 3, 61) * 6;
    g.strokeStyle = hash(i, 4, 61) > 0.55 ? `rgba(110,72,44,${0.25 + 0.3 * hash(i, 5, 61)})` : `rgba(18,10,6,${0.25 + 0.35 * hash(i, 5, 61)})`;
    g.lineWidth = 0.4 + 1.3 * hash(i, 6, 61);
    g.beginPath();
    for (let x = 0; x <= L; x += 8) { const yy = y + a * Math.sin(x * 0.012 + ph) + 0.6 * Math.sin(x * 0.05 + ph * 2); if (x) g.lineTo(x, yy); else g.moveTo(x, yy); }
    g.stroke();
  }
  // pores: short dark dashes along the grain
  for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(10,5,3,${0.2 + 0.3 * hash(i, 7, 61)})`; g.fillRect(hash(i, 8, 61) * L, hash(i, 9, 61) * Wd, 1.5 + 3 * hash(i, 10, 61), 0.5); }
}, 3);
const PHOTO = "assets/canelo_face.png";
const matTex = () => paintTex("ch-mat", PRW, PRH, (g) => {
  g.fillStyle = "#F2ECE0"; g.fillRect(0, 0, PRW, PRH);
  for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${hash(i, 1, 41) > 0.5 ? "150,135,110" : "255,255,250"},${0.04 + 0.05 * hash(i, 2, 41)})`; g.fillRect(hash(i, 3, 41) * PRW, hash(i, 4, 41) * PRH, 0.5 + hash(i, 5, 41) * 2, 0.3); }
  // the photo print, cropped to his head and shoulders
  const im = imageOf(PHOTO);
  if (im.complete && im.naturalWidth > 0) {
    const sw = 540, sh = (sw * WIN.h) / WIN.w, sx = 122, sy = 72;
    g.filter = "contrast(1.05) saturate(1.04)";
    g.drawImage(im, sx, sy, sw, sh, WIN.x, WIN.y, WIN.w, WIN.h);
    g.filter = "none";
    // the print's own surface: a faint grain
    for (let i = 0; i < 1800; i++) { g.fillStyle = `rgba(${hash(i, 1, 43) > 0.5 ? "255,255,255" : "0,0,0"},0.035)`; g.fillRect(WIN.x + hash(i, 2, 43) * WIN.w, WIN.y + hash(i, 3, 43) * WIN.h, 1, 1); }
  } else { g.fillStyle = "#2E2C30"; g.fillRect(WIN.x, WIN.y, WIN.w, WIN.h); }
  // the mat's bevelled cut: a white core lit on the lower and right lips, shaded on the upper and left
  const { x, y, w, h } = WIN, b = 4;
  g.fillStyle = "#FBF8F1";
  g.beginPath(); g.moveTo(x - b, y + h + b); g.lineTo(x + w + b, y + h + b); g.lineTo(x + w, y + h); g.lineTo(x, y + h); g.closePath(); g.fill();
  g.beginPath(); g.moveTo(x + w + b, y - b); g.lineTo(x + w + b, y + h + b); g.lineTo(x + w, y + h); g.lineTo(x + w, y); g.closePath(); g.fill();
  g.fillStyle = "#E4DCCD";
  g.beginPath(); g.moveTo(x - b, y - b); g.lineTo(x + w + b, y - b); g.lineTo(x + w, y); g.lineTo(x, y); g.closePath(); g.fill();
  g.beginPath(); g.moveTo(x - b, y - b); g.lineTo(x, y); g.lineTo(x, y + h); g.lineTo(x - b, y + h + b); g.closePath(); g.fill();
  // the moulding's soft shadow on the mat along its top and left
  const sg = g.createLinearGradient(0, 0, 0, 24); sg.addColorStop(0, "rgba(60,45,30,0.36)"); sg.addColorStop(1, "rgba(60,45,30,0)");
  g.fillStyle = sg; g.fillRect(0, 0, PRW, 24);
  const sl = g.createLinearGradient(0, 0, 18, 0); sl.addColorStop(0, "rgba(60,45,30,0.24)"); sl.addColorStop(1, "rgba(60,45,30,0)");
  g.fillStyle = sl; g.fillRect(0, 0, 18, PRH);
}, 3);
/** the glass's glare: two soft diagonal bands of the room's light (alpha only) */
const glareTex = () => paintTex("ch-glare", PRW, PRH, (g) => {
  g.clearRect(0, 0, PRW, PRH);
  const band = (x0: number, wd: number, a: number) => {
    g.save(); g.translate(PRW / 2, PRH / 2); g.rotate(-0.62); g.translate(-PRW / 2, -PRH / 2);
    const gr = g.createLinearGradient(x0 - wd, 0, x0 + wd, 0);
    gr.addColorStop(0, "rgba(255,255,255,0)"); gr.addColorStop(0.5, `rgba(255,255,255,${a})`); gr.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = gr; g.fillRect(x0 - wd, -PRH, wd * 2, PRH * 3); g.restore();
  };
  band(PRW * 0.18, 70, 0.26); band(PRW * 0.36, 16, 0.2); band(PRW * 0.92, 40, 0.12);
  // the glare is strongest at the top, fading down the glass
  g.globalCompositeOperation = "destination-in";
  const fade = g.createLinearGradient(0, 0, 0, PRH); fade.addColorStop(0, "rgba(0,0,0,1)"); fade.addColorStop(0.75, "rgba(0,0,0,0.45)"); fade.addColorStop(1, "rgba(0,0,0,0.25)");
  g.fillStyle = fade; g.fillRect(0, 0, PRW, PRH);
  g.globalCompositeOperation = "source-over";
}, 2);
let softT: THREE.CanvasTexture | null = null;
const softTex = () => {
  if (softT) return softT;
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
  g.filter = "blur(24px)"; g.fillStyle = "#fff"; g.beginPath(); g.ellipse(128, 128, 92, 80, 0, 0, Math.PI * 2); g.fill();
  softT = new THREE.CanvasTexture(c);
  return softT;
};

// ══ GEOMETRY ══
const octShape = (w: number, h: number, c: number) => {
  const s = new THREE.Shape();
  s.moveTo(-w / 2 + c, -h / 2); s.lineTo(w / 2 - c, -h / 2); s.lineTo(w / 2, -h / 2 + c); s.lineTo(w / 2, h / 2 - c);
  s.lineTo(w / 2 - c, h / 2); s.lineTo(-w / 2 + c, h / 2); s.lineTo(-w / 2, h / 2 - c); s.lineTo(-w / 2, -h / 2 + c); s.closePath();
  return s;
};
/** a slab lying flat on y = 0, its printed face up (the print's top toward the back) */
const flat = (shape: THREE.Shape, t: number, bevel: number, mats: THREE.Material[]) => {
  const m = mesh(slabOf(shape, t, bevel, 24), mats);
  m.rotation.x = -Math.PI / 2;
  m.position.y = t;
  return m;
};
/** the strap from u0 to u1: a thick leather band (rounded top edges) following the curved mid-line, lying on the table */
const strap = (u0: number, u1: number, n: number, mat: THREE.Material, capMat: THREE.Material) => {
  const w = BT.W / 2, T = BT.T, r = 3.5;
  const prof: [number, number][] = [[-w + 1, 0], [-w, 1], [-w, T - r]];
  for (let k = 1; k < 5; k++) { const a = Math.PI - (Math.PI / 2) * (k / 5); prof.push([-w + r + r * Math.cos(a), T - r + r * Math.sin(a)]); }
  // the top: a hair domed across (leather over its filler)
  for (let k = 0; k <= 8; k++) { const a = -w + r + ((2 * (w - r)) * k) / 8; prof.push([a, T + 0.8 * (1 - Math.pow(a / (w - r), 2))]); }
  for (let k = 1; k < 5; k++) { const a = Math.PI / 2 - (Math.PI / 2) * (k / 5); prof.push([w - r + r * Math.cos(a), T - r + r * Math.sin(a)]); }
  prof.push([w, T - r], [w, 1], [w - 1, 0]);
  const P = prof.length;
  const pos: number[] = [], uv: number[] = [], idx: number[] = [];
  const ring = (u: number) => {
    const z = pathZ(u), dz = pathDZ(u), nn = Math.hypot(1, dz), tx = 1 / nn, tz = dz / nn, l = lift(u);
    return prof.map(([a, h]) => [u - a * tz, h + l, z + a * tx] as [number, number, number]);
  };
  for (let i = 0; i <= n; i++) {
    const u = u0 + ((u1 - u0) * i) / n, rg = ring(u);
    rg.forEach(([x, y, z], j) => { pos.push(x, y, z); uv.push((u + BT.HALF) / (2 * BT.HALF), 1 - Math.max(0, Math.min(1, (prof[j][0] + w) / (2 * w)))); });
  }
  for (let i = 0; i < n; i++) for (let j = 0; j < P; j++) {
    const a = i * P + j, b = i * P + ((j + 1) % P), c = (i + 1) * P + j, d = (i + 1) * P + ((j + 1) % P);
    idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  const grp = new THREE.Group();
  grp.add(mesh(g, mat));
  for (const u of [u0, u1]) {
    const rg = ring(u), cp: number[] = [];
    const cx = rg.reduce((s, p) => s + p[0], 0) / P, cy = T / 2 + lift(u), cz = rg.reduce((s, p) => s + p[2], 0) / P;
    for (let j = 0; j < P; j++) { const p = rg[j], q = rg[(j + 1) % P]; cp.push(cx, cy, cz, ...p, ...q); }
    const cg = new THREE.BufferGeometry(); cg.setAttribute("position", new THREE.Float32BufferAttribute(cp, 3)); cg.computeVertexNormals();
    grp.add(mesh(cg, capMat));
  }
  return grp;
};

export type ChampP = { f: number; lit: number[]; flare: number[]; yaw: number };

export const champModel = (T: BeltT) => (): Model<ChampP> => {
  const root = new THREE.Group();
  const FY = -CG.floor;
  const turn = new THREE.Group(); turn.position.set(540, 0, 0); root.add(turn);
  const W0 = new THREE.Group(); W0.position.set(-540, 0, 0); turn.add(W0);

  // ══ THE FRAME ══
  const frameRoot = new THREE.Group(); frameRoot.position.set(CG.frame.x, FY, CG.frame.z); frameRoot.rotation.y = rad(CG.frame.yaw);
  frameRoot.userData.obj = "frame"; W0.add(frameRoot);
  const frameG = new THREE.Group(); frameG.rotation.x = -rad(FR.LEAN); frameRoot.add(frameG);
  const body = new THREE.Group(); frameG.add(body);
  const wood = (along: "x" | "y") => new THREE.MeshPhysicalMaterial({ map: woodTex(along), bumpMap: woodTex(along), bumpScale: 0.6, roughness: 0.42, metalness: 0,
    clearcoat: 0.55, clearcoatRoughness: 0.28, envMapIntensity: 0.6 });
  const woodX = wood("x"), woodY = wood("y");
  const iw = FR.W - 2 * FR.MW, ih = FR.H - 2 * FR.MW;
  {
    // the moulding: four bevelled walnut rails, the grain along each
    for (const [w, h, x, y, m] of [[FR.W, FR.MW, 0, FR.H / 2 - FR.MW / 2, woodX], [FR.W, FR.MW, 0, -FR.H / 2 + FR.MW / 2, woodX],
      [FR.MW, ih + 2, FR.W / 2 - FR.MW / 2, 0, woodY], [FR.MW, ih + 2, -FR.W / 2 + FR.MW / 2, 0, woodY]] as [number, number, number, number, THREE.Material][]) {
      const rail = rbox(w, h, FR.D, 6, m, 5);
      rail.position.set(x, FR.H / 2 + y, FR.D);
      body.add(rail);
    }
    // the gilt lip round the opening: four slim bars, a hair proud
    const gilt = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#D4AA4C"), metalness: 1, roughness: 0.3, envMapIntensity: 1.0 });
    for (const [w, h, x, y] of [[iw + 12, 6, 0, ih / 2 + 3], [iw + 12, 6, 0, -ih / 2 - 3], [6, ih, iw / 2 + 3, 0], [6, ih, -iw / 2 - 3, 0]] as [number, number, number, number][]) {
      const bar = rbox(w, h, 4, 1.6, gilt, 3);
      bar.position.set(x, FR.H / 2 + y, FR.D + 1.5);
      body.add(bar);
    }
    // the print in its mat, recessed behind the glass; the kraft backing board behind it
    const pr = mesh(new THREE.PlaneGeometry(PRW, PRH), new THREE.MeshPhysicalMaterial({ map: matTex(), roughness: 0.55, metalness: 0, envMapIntensity: 0.35, sheen: 0.2, sheenRoughness: 0.6 }));
    pr.position.set(0, FR.H / 2, FR.D - 8);
    body.add(pr);
    // the glass: a faint clear sheen that takes the room's reflection, and its glare
    const glass = mesh(new THREE.PlaneGeometry(PRW - 2, PRH - 2), new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#FFFFFF"), metalness: 0, roughness: 0.04,
      transparent: true, opacity: 0.1, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.6, depthWrite: false }), false, false);
    glass.position.set(0, FR.H / 2, FR.D - 3);
    glass.renderOrder = 3;
    body.add(glass);
    const glare = mesh(new THREE.PlaneGeometry(PRW - 2, PRH - 2), new THREE.MeshBasicMaterial({ map: glareTex(), transparent: true, depthWrite: false, toneMapped: false }), false, false);
    glare.position.set(0, FR.H / 2, FR.D - 2.9);
    glare.renderOrder = 4;
    body.add(glare);
    const board = rbox(FR.W - 10, FR.H - 10, 6, 1.5, M.paper("#9A7B56"));
    board.position.set(0, FR.H / 2, 6);
    body.add(board);
  }
  // seat the frame on the table: its lowest point (the back-bottom edge, rounded) exactly on the floor
  frameRoot.updateMatrixWorld(true);
  {
    const bb = new THREE.Box3().setFromObject(body, true);
    frameG.position.y = -(bb.min.y - FY);
  }
  // the easel strut: from a hinge high on the back down to the table behind
  {
    const hy = FR.H * HINGE, th = rad(FR.LEAN);
    const H = { y: frameG.position.y + hy * Math.cos(th), z: -hy * Math.sin(th) };
    const F = { y: 0, z: H.z - STRUT_BACK };
    const len = Math.hypot(H.y - F.y, H.z - F.z), phi = Math.atan2(H.z - F.z, H.y - F.y);
    const sg = new THREE.Group(); sg.position.set(0, (H.y + F.y) / 2, (H.z + F.z) / 2); sg.rotation.x = phi; frameRoot.add(sg);
    sg.add(rbox(46, len, STRUT_T, 2.5, woodY));
  }
  // the frame's soft contact pool
  {
    const fp = new THREE.Mesh(new THREE.PlaneGeometry(FR.W + 60, 150), new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: softTex(), transparent: true, depthWrite: false, opacity: 0.22, toneMapped: false }));
    fp.rotation.x = -Math.PI / 2; fp.position.set(0, 0.3, -40); fp.renderOrder = 1.5;
    fp.userData.isFloor = true; fp.userData.noBounds = true;
    frameRoot.add(fp);
  }

  // ══ THE BELT ══
  const beltG = new THREE.Group(); beltG.userData.obj = "belt"; W0.add(beltG);
  const leatherOf = (c: THREE.Texture, h: THREE.Texture) => new THREE.MeshPhysicalMaterial({ map: c, bumpMap: h, bumpScale: 1.4, roughness: 0.58, metalness: 0,
    clearcoat: 0.28, clearcoatRoughness: 0.5, sheen: 0.35, sheenRoughness: 0.5, sheenColor: new THREE.Color("#4A4038"), envMapIntensity: 0.5 });
  const leather = leatherOf(strapTex("c"), strapTex("h"));
  const leatherPlain = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#141010"), roughness: 0.5, clearcoat: 0.4, clearcoatRoughness: 0.35, envMapIntensity: 0.5, side: THREE.DoubleSide });
  /** polished gold, its relief by the bump map, its enamel by the metalness map */
  const goldOf = (c: THREE.Texture, h: THREE.Texture, m?: THREE.Texture, bump = 1.2) => new THREE.MeshPhysicalMaterial({ map: c, bumpMap: h, bumpScale: bump,
    metalness: 1, metalnessMap: m ?? null, roughness: 0.2, envMapIntensity: 1.15, clearcoat: m ? 0.22 : 0, clearcoatRoughness: 0.1 });
  const goldPlain = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#D9AF4C"), metalness: 1, roughness: 0.24, envMapIntensity: 1.1 });
  const edge = BT.PADW / 2 - 18;
  beltG.add(strap(-BT.HALF, -edge, 90, leather, leatherPlain), strap(edge, BT.HALF, 90, leather, leatherPlain));
  beltG.add(flat(roundRect(BT.PADW, BT.PADD, 70), BT.PADT, 3.5, [leatherOf(padTex("c"), padTex("h")), leatherPlain]));
  // the centre plate in relief: base (bevel 4) → inner panel (bevel 2) → medallion (bevel 3) with its rope ring
  const base = flat(octShape(BT.PW, BT.PD, OCT_C), BT.PT, 4, [goldOf(baseTex("c"), baseTex("h")), goldPlain]);
  base.position.y += BT.PADT; beltG.add(base);
  const panel = flat(octShape(IPW, IPD, OCT_C - 18), BT.PI, 2, [goldOf(panelTex("c"), panelTex("h"), panelTex("m")), goldPlain]);
  panel.position.y += BT.PADT + BT.PT; beltG.add(panel);
  const medal = flat(new THREE.Shape().absarc(0, 0, BT.MR, 0, Math.PI * 2, false) as THREE.Shape, BT.MT, 3, [goldOf(medalTex("c"), medalTex("h"), medalTex("m"), 1.4), goldPlain]);
  medal.position.y += PLATE_TOP; beltG.add(medal);
  const rope = mesh(new THREE.TorusGeometry(BT.MR + 1.5, 2.6, 10, 140).rotateX(Math.PI / 2), goldPlain);
  rope.position.y = PLATE_TOP + 2.4; beltG.add(rope);
  // the rubies: faceted cabochons in gold bezels
  const ruby = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#8A0D18"), roughness: 0.03, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.02, ior: 1.77,
    specularIntensity: 1, specularColor: new THREE.Color("#FFFFFF"), emissive: new THREE.Color("#5A0410"), emissiveIntensity: 0.35, envMapIntensity: 2.2, flatShading: true });
  const gemG = new THREE.SphereGeometry(8.5, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2);
  const bezG = new THREE.TorusGeometry(9.2, 2, 8, 40).rotateX(Math.PI / 2);
  for (const x of [-134, -98, 98, 134]) {
    const gm = mesh(gemG, ruby); gm.scale.set(1, 0.7, 1); gm.position.set(x, PLATE_TOP - 0.3, 1); beltG.add(gm);
    const bz = mesh(bezG, goldPlain); bz.position.set(x, PLATE_TOP + 1.2, 1); beltG.add(bz);
  }
  // the four division plates, each with its own gold (it lights on its own beat): base with rivets, raised panel
  const sideMats = SIDE_U.map((_, k) => new THREE.MeshPhysicalMaterial({ map: sideTex(k, "c"), bumpMap: sideTex(k, "h"), bumpScale: 1.2, metalnessMap: sideTex(k, "m"),
    metalness: 1, roughness: 0.6, envMapIntensity: 1.1, clearcoat: 0.22, clearcoatRoughness: 0.1,
    emissive: new THREE.Color("#FFC35A"), emissiveMap: sideTex(k, "c"), emissiveIntensity: 0 }));
  const sideBase = SIDE_U.map(() => new THREE.MeshPhysicalMaterial({ map: sideBaseTex("c"), bumpMap: sideBaseTex("h"), bumpScale: 1, metalness: 1, roughness: 0.6, envMapIntensity: 1.1 }));
  const sideEdge = SIDE_U.map(() => new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#D9AF4C"), metalness: 1, roughness: 0.6, envMapIntensity: 1.1 }));
  const rivG = new THREE.SphereGeometry(3.4, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
  SIDE_U.forEach((u, k) => {
    const yg = new THREE.Group(); yg.position.set(u, BT.T + 0.8 + lift(u), pathZ(u)); yg.rotation.y = -Math.atan(pathDZ(u)); beltG.add(yg);
    yg.add(flat(octShape(BT.SPW, BT.SPD, SOCT_C), BT.SPT, 2.5, [sideBase[k], sideEdge[k]]));
    const pnl = flat(octShape(SPW_I, SPD_I, SOCT_C - 8), BT.SPI, 1.2, [sideMats[k], sideEdge[k]]);
    pnl.position.y += BT.SPT; yg.add(pnl);
    // four rivets on the rim, mid-side (between the raised panel and the base's bevel)
    for (const [x, z] of [[-(BT.SPW / 2 - 6), 0], [BT.SPW / 2 - 6, 0], [0, -(BT.SPD / 2 - 6)], [0, BT.SPD / 2 - 6]]) {
      const rv = mesh(rivG, sideEdge[k]); rv.scale.set(1, 0.6, 1); rv.position.set(x, BT.SPT - 0.3, z); yg.add(rv);
    }
  });
  // its soft contact pool on the table
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(1060, 330), new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: softTex(), transparent: true, depthWrite: false, opacity: 0.24, toneMapped: false }));
  pool.rotation.x = -Math.PI / 2; pool.position.set(0, 0.3, -30); pool.renderOrder = 1.5;
  pool.userData.isFloor = true; pool.userData.noBounds = true;
  beltG.add(pool);

  root.add(makeFloor({ y: CG.floor, x0: -700, x1: 1800, z0: -1000, z1: 800, reflect: 0.06, shadow: 0.42, fadeC: [560, -80], fadeR: [980, 640] }));

  const DIM = new THREE.Color("#6E5A3C"), FULL = new THREE.Color("#FFFFFF"), GOLD = new THREE.Color("#D9AF4C"), GOLD_DIM = new THREE.Color("#6E5A3C");
  return {
    root,
    update: (p) => {
      turn.rotation.y = rad(p.yaw);
      const b = beltAt(T, p.f);
      beltG.visible = b.visible;
      beltG.position.set(CG.belt.x + b.dx, FY + b.h, CG.belt.z);
      beltG.rotation.y = b.spin;
      sideMats.forEach((m, k) => {
        const l = p.lit[k], rough = 0.6 - 0.4 * l;
        m.color.copy(DIM).lerp(FULL, l); m.roughness = rough;
        m.emissiveIntensity = 0.55 * p.flare[k];
        sideBase[k].color.copy(DIM).lerp(FULL, l); sideBase[k].roughness = rough;
        sideEdge[k].color.copy(GOLD_DIM).lerp(GOLD, l); sideEdge[k].roughness = rough;
      });
    },
  };
};
