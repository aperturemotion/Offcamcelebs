// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE FIGHTS IN 3-D (039) — "He fought three times under the deal. Then, in 2020, no fights at all." On the dark ground, the
// canvas of a boxing ring (a slab of blue ring canvas: its weave raised in relief, scuffs and resin marks, a padded roll
// along its far edge where the ring gives way to the dark), the ring's bottom rope crossing close to the lens in soft focus
// (ropeModel, its own blurred view), and on the canvas:
//   · THREE FIGHT TICKETS, real cardstock (★ round 2, Timur: "more realistic"): a card 2.2 px thick with rounded corners and
//     a lighter cut edge, a soft bow, one corner lifted, the stub bent up a little along its perforation (a crease of
//     punched slits), a glossy varnished header band with a silver foil rule and a foil hologram on the stub (the print's
//     own roughness and metalness maps): ÁLVAREZ vs FIELDING DEC 15 2018, ÁLVAREZ vs JACOBS MAY 4 2019, ÁLVAREZ vs KOVALEV
//     NOV 2 2019. Each is tossed in from beyond the frame's edge, lands flat and skids to rest;
//   · A WALL CALENDAR'S 2020 PAGE, real paper: its top edge TORN along the binding's perforation (ragged, with the half-holes'
//     bites and lighter fibres), its top curling up, a soft bow: 2020 in heavy type over the twelve months, every day
//     printed and none of them marked. It swings in across the canvas and lands beside the tickets, empty.
// Units are layer px (y up from the canvas's floor, z toward the viewer); no yaw of the whole place (the camera breathes).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, rr, type Model } from "../stage";
import { rbox, rad, col, fitFont, track, hash, wire, M, font } from "../kit029";
import { FIGHTS as FIGHTS_REC } from "../../audit/record";

/** the place's layout (floor-local) */
export const FG = {
  floor: 1500,
  /** the canvas: its top, its extent */
  matT: 14, matX0: -1000, matX1: 2700, matZ0: -470, matZ1: 900,
} as const;

// ══ THE TICKETS ══
export const TK = { W: 600, D: 232, T: 2.2, STUB: 150, R: 9 } as const;
/** the highest any part of a ticket rises over its back at rest (bow, the lifted corner, the bent stub, its thickness) */
export const TK_TOP = 11;
/** where each ticket comes to rest (centre x, z, yaw deg) and the side it is tossed in from (-1 left, +1 right) */
export const TICKETS = [
  { x: 524, z: -262, yaw: 2.0, from: -1, band: "#22385E" },
  { x: 560, z: 2, yaw: -1.6, from: 1, band: "#2D5B57" },
  { x: 532, z: 266, yaw: 1.2, from: -1, band: "#5E2E44" },
] as const;
/** the ticket's back sits this far over the canvas */
export const TK_LIFT = 0.45;

// ══ THE CALENDAR PAGE ══
export const CAL = { W: 580, D: 720, T: 0.8, x: 1460, z: -32, yaw: -2.2 } as const;
/** the highest any part of the page rises over its back at rest (its curled top) */
export const CAL_TOP = 12;
/** where its print sits (page px from the top-left), for the camera: the year, the months' grid */
export const CAL_PRINT = { year: [56, 206] as const, grid: [226, 704] as const };

const INK = "#1D1A19";
const CARD = "#F2EDE1";

// ══ print ══════════════════════════════════════════════════════════════════════════════════════
const paintTicket = (i: number) => paintTex(`fights39-ticket-${i}-v3`, TK.W, TK.D, (c) => {
  const W = TK.W, D = TK.D, t = TICKETS[i], rec = FIGHTS_REC[i];
  const MAIN = W - TK.STUB;
  c.fillStyle = CARD; c.fillRect(0, 0, W, D);
  for (let k = 0; k < 140; k++) { c.fillStyle = `rgba(120,100,70,${0.025 + 0.03 * hash(k, 5, i)})`; c.fillRect(hash(k, 1, i) * W, hash(k, 2, i) * D, 2 + 5 * hash(k, 3, i), 0.7); }
  // the header band across the main part, its event line small in the band
  c.fillStyle = t.band; c.fillRect(0, 0, MAIN, 40);
  c.fillStyle = "rgba(242,237,225,0.92)"; c.textAlign = "left"; c.textBaseline = "middle";
  track(c, 3.2); fitFont(c, 700, 15, "CHAMPIONSHIP BOXING", 260); c.fillText("CHAMPIONSHIP BOXING", 22, 21); track(c, 0);
  // a thin silver foil rule under the band (its shine is in the spec map)
  c.fillStyle = "#B9BDC2"; c.fillRect(0, 43, MAIN, 2.6);
  // the bout, heavy, as large as the main part allows
  c.fillStyle = INK; c.textBaseline = "alphabetic";
  const opp = rec.opp;
  const line = `ÁLVAREZ vs ${opp}`;
  track(c, 0.5);
  const s1 = fitFont(c, 800, 46, line, MAIN - 44);
  // set "vs" lighter: draw the three runs at the fitted size
  const yb = 104;
  font(c, 800, s1); const wA = c.measureText("ÁLVAREZ ").width;
  font(c, 500, s1 * 0.82); const wV = c.measureText("vs ").width;
  font(c, 800, s1); const wB = c.measureText(opp).width;
  let x = 22;
  font(c, 800, s1); c.fillText("ÁLVAREZ ", x, yb); x += wA;
  font(c, 500, s1 * 0.82); c.fillText("vs ", x, yb); x += wV;
  font(c, 800, s1); c.fillText(opp, x, yb);
  void wB;
  // the date
  track(c, 1.5);
  const s2 = fitFont(c, 700, 32, rec.date, MAIN - 44);
  c.fillText(rec.date, 22, 150 + s2 * 0.3);
  track(c, 0);
  // the venue and the doors line, greeked
  c.fillStyle = "rgba(29,26,25,0.42)";
  for (const [x0, y0, w] of [[22, 180, 150], [180, 180, 64], [22, 200, 96], [126, 200, 120]] as const) { rr(c, x0, y0, w, 6, 3); c.fill(); }
  // the perforation: a line of punched slits (the card's crease runs along it, in the geometry)
  c.fillStyle = "rgba(29,26,25,0.5)";
  for (let y = 3; y < D - 3; y += 7) { rr(c, MAIN - 0.8, y, 1.6, 3.6, 0.8); c.fill(); }
  c.fillStyle = "rgba(255,255,255,0.35)"; c.fillRect(MAIN + 1.2, 0, 0.8, D);
  // the stub's band, and on it a silver foil hologram (iridescent; metal in the spec map)
  c.fillStyle = t.band; c.fillRect(MAIN + 4, 0, TK.STUB - 4, 40);
  {
    const fx = MAIN + 18, fy = 7, fw = TK.STUB - 36, fh = 26;
    const g = c.createLinearGradient(fx, fy, fx + fw, fy + fh);
    g.addColorStop(0, "#C9CDD3"); g.addColorStop(0.25, "#D9C9E2"); g.addColorStop(0.5, "#C4DDD9"); g.addColorStop(0.75, "#E3DCC2"); g.addColorStop(1, "#C3C8D0");
    c.fillStyle = g; rr(c, fx, fy, fw, fh, 3); c.fill();
    c.strokeStyle = "rgba(255,255,255,0.5)"; c.lineWidth = 0.6;
    for (let k = 0; k < 9; k++) { c.beginPath(); c.arc(fx + fw / 2, fy + fh / 2, 2 + k * 2.2, 0, Math.PI * 2); c.stroke(); }
  }
  c.fillStyle = INK; c.textAlign = "center";
  const boxes = ["SEC", "ROW", "SEAT"], vals = [["104", "12", "7"], ["9", "F", "14"], ["210", "C", "3"]][i];
  boxes.forEach((b, k) => {
    const bx = MAIN + 14 + k * 44, by = 54;
    c.strokeStyle = "rgba(29,26,25,0.5)"; c.lineWidth = 1; rr(c, bx, by, 38, 44, 3); c.stroke();
    track(c, 1); font(c, 700, 9); c.fillText(b, bx + 19, by + 13); track(c, 0);
    font(c, 800, 17); c.fillText(vals[k], bx + 19, by + 35);
  });
  // the barcode
  c.fillStyle = INK;
  let bx = MAIN + 16;
  for (let k = 0; bx < W - 14; k++) { const w = 1 + Math.floor(3 * hash(k, i, 7)); if (hash(k, 2, 7 + i) > 0.3) c.fillRect(bx, 118, w, 70); bx += w + 1.2; }
  c.fillStyle = "rgba(29,26,25,0.42)"; rr(c, MAIN + 22, 198, TK.STUB - 44, 5, 2.5); c.fill();
  // the card's tooth over everything: ink sits IN the stock (faint fibres and a light speckle across the print)
  for (let k = 0; k < 900; k++) { c.fillStyle = `rgba(242,237,225,${0.05 + 0.08 * hash(k, 9, i)})`; c.fillRect(hash(k, 7, i) * W, hash(k, 8, i) * D, 0.6 + 1.6 * hash(k, 6, i), 0.5); }
  // the corners' wear: a slightly greyed rim
  const v = c.createRadialGradient(W / 2, D / 2, D * 0.6, W / 2, D / 2, W * 0.62);
  v.addColorStop(0, "rgba(90,80,60,0)"); v.addColorStop(1, "rgba(90,80,60,0.07)");
  c.fillStyle = v; c.fillRect(0, 0, W, D);
}, 3);
/** the ticket's surface response, painted as print: G = roughness (satin stock, a varnished band, foil), B = metalness */
const paintTicketSpec = (i: number) => paintTex(`fights39-ticket-spec-${i}-v1`, TK.W, TK.D, (c) => {
  const W = TK.W, D = TK.D, MAIN = W - TK.STUB;
  const px = (r: number, m: number) => `rgb(0,${Math.round(r * 255)},${Math.round(m * 255)})`;
  c.fillStyle = px(0.8, 0); c.fillRect(0, 0, W, D);
  for (let k = 0; k < 300; k++) { c.fillStyle = px(0.72 + 0.16 * hash(k, 3, i), 0); c.fillRect(hash(k, 1, i) * W, hash(k, 2, i) * D, 3 + 8 * hash(k, 4, i), 1); }
  c.fillStyle = px(0.3, 0); c.fillRect(0, 0, MAIN, 42); c.fillRect(MAIN + 4, 0, TK.STUB - 4, 40);   // the varnished band
  c.fillStyle = px(0.26, 1); c.fillRect(0, 43, MAIN, 2.6);                                         // the foil rule
  c.fillStyle = px(0.22, 1); rr(c, MAIN + 18, 7, TK.STUB - 36, 26, 3); c.fill();                    // the hologram
  c.fillStyle = px(0.55, 0);                                                                       // the ink's slight sheen
  c.fillRect(20, 62, MAIN - 40, 52); c.fillRect(20, 128, MAIN - 120, 32);
}, 1);

const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
const paintCalendar = () => paintTex("fights39-cal-v3", CAL.W, CAL.D, (c) => {
  const W = CAL.W, D = CAL.D;
  c.fillStyle = "#F7F5EF"; c.fillRect(0, 0, W, D);
  for (let k = 0; k < 220; k++) { c.fillStyle = `rgba(120,110,90,${0.02 + 0.025 * hash(k, 5, 3)})`; c.fillRect(hash(k, 1, 3) * W, hash(k, 2, 3) * D, 2 + 6 * hash(k, 3, 3), 0.7); }
  // the torn top: the paper's fibres show lighter and rougher along the tear (the ragged line itself is the geometry's)
  for (let k = 0; k < 700; k++) { const x = hash(k, 1, 13) * W, y = 9 * hash(k, 2, 13) ** 2; c.fillStyle = `rgba(255,255,255,${0.3 + 0.5 * hash(k, 3, 13)})`; c.fillRect(x, y, 0.5 + 2 * hash(k, 4, 13), 0.5 + 1.4 * hash(k, 5, 13)); }
  c.fillStyle = "rgba(120,110,90,0.08)"; c.fillRect(0, 10, W, 1);
  // the year
  c.fillStyle = INK; c.textAlign = "center"; c.textBaseline = "alphabetic";
  track(c, 6);
  const sY = fitFont(c, 800, 150, "2020", W - 120);
  c.fillText("2020", W / 2 + 3, CAL_PRINT.year[1] - 4);
  track(c, 0);
  void sY;
  // the months: three across, four down, every day printed, none marked
  const g0 = CAL_PRINT.grid[0], gx = 26, cw = (W - 2 * gx) / 3, ch = (CAL_PRINT.grid[1] - g0) / 4;
  for (let m = 0; m < 12; m++) {
    const cx = gx + (m % 3) * cw, cy = g0 + Math.floor(m / 3) * ch;
    c.fillStyle = INK; c.textAlign = "left";
    track(c, 1.4); fitFont(c, 800, 15, MONTHS[m], cw - 20); c.fillText(MONTHS[m], cx + 8, cy + 18); track(c, 0);
    c.fillStyle = "rgba(29,26,25,0.55)"; c.fillRect(cx + 8, cy + 24, cw - 18, 1);
    const colW = (cw - 16) / 7;
    c.textAlign = "center";
    font(c, 700, 8.5);
    ["S", "M", "T", "W", "T", "F", "S"].forEach((d, k) => c.fillText(d, cx + 8 + colW * (k + 0.5), cy + 36));
    const first = new Date(Date.UTC(2020, m, 1)).getUTCDay(), days = new Date(Date.UTC(2020, m + 1, 0)).getUTCDate();
    font(c, 500, 10);
    c.fillStyle = "rgba(29,26,25,0.85)";
    for (let d = 1; d <= days; d++) {
      const k = first + d - 1, col7 = k % 7, row = Math.floor(k / 7);
      c.fillText(String(d), cx + 8 + colW * (col7 + 0.5), cy + 52 + row * 13.4);
    }
  }
  // the paper's tooth over the print: the ink sits IN the sheet
  for (let k = 0; k < 1600; k++) { c.fillStyle = `rgba(247,245,239,${0.05 + 0.08 * hash(k, 9, 21)})`; c.fillRect(hash(k, 7, 21) * W, hash(k, 8, 21) * D, 0.6 + 1.8 * hash(k, 6, 21), 0.5); }
}, 3);

/** the mat's print: ring canvas colour, its broad wear, resin and scuffs (the weave itself is a relief: weaveBump) */
const paintCanvas = () => paintTex("fights39-canvas-v3", 1850, 685, (c) => {
  const W = 1850, D = 685;
  c.fillStyle = "#23334A"; c.fillRect(0, 0, W, D);
  // broad uneven wear, resin and scuffs
  for (let k = 0; k < 70; k++) {
    const x = hash(k, 1, 9) * W, y = hash(k, 2, 9) * D, r = 20 + 90 * hash(k, 3, 9);
    const g = c.createRadialGradient(x, y, 0, x, y, r);
    const light = hash(k, 4, 9) > 0.45;
    g.addColorStop(0, light ? `rgba(170,190,215,${0.05 + 0.05 * hash(k, 5, 9)})` : `rgba(8,12,20,${0.06 + 0.06 * hash(k, 5, 9)})`);
    g.addColorStop(1, "rgba(0,0,0,0)");
    c.fillStyle = g; c.beginPath(); c.ellipse(x, y, r, r * (0.4 + 0.5 * hash(k, 6, 9)), hash(k, 7, 9) * 3, 0, Math.PI * 2); c.fill();
  }
  // scuffs from boots, and the pale arcs of a pivoting sole
  for (let k = 0; k < 140; k++) { c.strokeStyle = `rgba(160,180,205,${0.04 + 0.06 * hash(k, 1, 4)})`; c.lineWidth = 0.6 + hash(k, 2, 4); const x = hash(k, 3, 4) * W, y = hash(k, 4, 4) * D, a = hash(k, 5, 4) * 6.3, l = 8 + 30 * hash(k, 6, 4); c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); c.stroke(); }
  for (let k = 0; k < 14; k++) { c.strokeStyle = `rgba(150,170,195,${0.05 + 0.05 * hash(k, 1, 6)})`; c.lineWidth = 2 + 3 * hash(k, 2, 6); const x = hash(k, 3, 6) * W, y = hash(k, 4, 6) * D, r = 14 + 22 * hash(k, 5, 6), a0 = hash(k, 6, 6) * 6.3; c.beginPath(); c.arc(x, y, r, a0, a0 + 1.4 + 2 * hash(k, 7, 6)); c.stroke(); }
}, 0.8);
/** the canvas weave as a relief: a plain weave tile (warp over weft, then under), repeated across the canvas */
const WEAVE_PX = 44;   // layer px one tile covers (8 threads each way: a thread ~5.5 px, about 1.3 mm)
const weaveBump = () => {
  const N = 64, c = document.createElement("canvas");
  c.width = c.height = N;
  const g = c.getContext("2d")!;
  g.fillStyle = "#808080"; g.fillRect(0, 0, N, N);
  const n = 8, p = N / n;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const over = (i + j) % 2 === 0;   // the warp crosses over the weft here, or under it
    const x = i * p, y = j * p;
    const gr = over ? g.createLinearGradient(x, 0, x + p, 0) : g.createLinearGradient(0, y, 0, y + p);
    gr.addColorStop(0, "#5a5a5a"); gr.addColorStop(0.5, over ? "#d8d8d8" : "#c4c4c4"); gr.addColorStop(1, "#5a5a5a");
    g.fillStyle = gr; g.fillRect(x + 0.4, y + 0.4, p - 0.8, p - 0.8);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set((FG.matX1 - FG.matX0) / WEAVE_PX, (FG.matZ1 - FG.matZ0) / WEAVE_PX);
  t.anisotropy = 8;
  return t;
};

// ══ ★ round 2: A SHEET WITH BODY — card or paper as a real solid: a grid surface (so it can bow, crease and curl), rounded
//    corners, an optional torn edge along its far side, a back, and a cut edge band of its thickness ══
type SheetOpts = {
  w: number; d: number; t: number; r: number; nx: number; nz: number;
  /** the sheet's height over its back's rest plane at (u, v): u 0 left … 1 right, v 0 far edge … 1 near edge (≥ 0) */
  h: (u: number, v: number) => number;
  /** the torn far edge: how far (px) the tear bites into the sheet at u */
  tear?: (u: number) => number;
  face: THREE.Material; back: THREE.Material; edge: THREE.Material;
};
const sheetBody = (o: SheetOpts) => {
  const { w, d, t, r, nx, nz } = o;
  const P = (u: number, v: number): [number, number, number] => {
    let x = (u - 0.5) * w, z = (v - 0.5) * d;
    // rounded corners: the grid's corner squares mapped onto quarter discs
    if (r > 0 && Math.abs(x) > w / 2 - r && Math.abs(z) > d / 2 - r) {
      const cx = Math.sign(x) * (w / 2 - r), cz = Math.sign(z) * (d / 2 - r), dx = x - cx, dz = z - cz, L = Math.hypot(dx, dz);
      if (L > 1e-6) { const k = Math.max(Math.abs(dx), Math.abs(dz)) / L; x = cx + dx * k; z = cz + dz * k; }
    }
    if (o.tear) z += o.tear(u) * Math.max(0, 1 - (v * d) / 26);
    return [x, o.h(u, v), z];
  };
  const pos: number[] = [], back: number[] = [], uv: number[] = [], idx: number[] = [], bidx: number[] = [];
  for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
    const u = i / nx, v = j / nz, [x, y, z] = P(u, v);
    pos.push(x, y + t, z); back.push(x, y, z); uv.push(u, 1 - v);
  }
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const a = j * (nx + 1) + i, b = a + 1, c2 = a + nx + 1, e = c2 + 1;
    idx.push(a, c2, b, b, c2, e); bidx.push(a, b, c2, b, e, c2);
  }
  const top = new THREE.BufferGeometry();
  top.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); top.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  top.setIndex(idx); top.computeVertexNormals();
  const bot = new THREE.BufferGeometry();
  bot.setAttribute("position", new THREE.Float32BufferAttribute(back, 3)); bot.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  bot.setIndex(bidx); bot.computeVertexNormals();
  // the cut edge: a band round the rim, front to back
  const ring: number[] = [];
  for (let i = 0; i <= nx; i++) ring.push(i);
  for (let j = 1; j <= nz; j++) ring.push(j * (nx + 1) + nx);
  for (let i = nx - 1; i >= 0; i--) ring.push(nz * (nx + 1) + i);
  for (let j = nz - 1; j >= 1; j--) ring.push(j * (nx + 1));
  const ep: number[] = [];
  for (let k = 0; k < ring.length; k++) {
    const a = ring[k] * 3, b = ring[(k + 1) % ring.length] * 3;
    const A = [pos[a], pos[a + 1], pos[a + 2]], B = [pos[b], pos[b + 1], pos[b + 2]], A2 = [back[a], back[a + 1], back[a + 2]], B2 = [back[b], back[b + 1], back[b + 2]];
    ep.push(...A, ...B, ...B2, ...A, ...B2, ...A2);
  }
  const eg = new THREE.BufferGeometry();
  eg.setAttribute("position", new THREE.Float32BufferAttribute(ep, 3)); eg.computeVertexNormals();
  const grp = new THREE.Group();
  grp.userData.unit = true;
  grp.add(mesh(top, o.face), mesh(bot, o.back));
  const em = o.edge.clone(); em.side = THREE.DoubleSide;
  grp.add(mesh(eg, em));
  return grp;
};

/** a ticket's shape: a soft bow, one corner lifted, the stub bent up along its perforation (all ≥ 0: it rests on its rim) */
const ticketH = (i: number) => (u: number, v: number) => {
  const x = u * TK.W, z = v * TK.D, MAIN = TK.W - TK.STUB;
  let h = 1.2 * (1 - (2 * (x / MAIN) - 1) ** 2) * (x < MAIN ? 1 : 0);
  if (x > MAIN) h += (x - MAIN) * Math.tan(rad(1.3 + 0.4 * i));                 // the stub, bent up at the crease
  h += Math.max(0, 0.6 - Math.abs(x - MAIN) * 0.25) * -0.5 + 0.3;                // the crease's small valley
  const [cx, cz] = i === 1 ? [0, 0] : [TK.W, TK.D];                              // a lifted corner (worn from a pocket)
  const dd = Math.hypot(x - cx, z - cz);
  if (dd < 80) h += 2.6 * ((80 - dd) / 80) ** 2;
  return Math.max(0, h);
};
/** the calendar page: a bow, its torn top curling up (it was rolled on the wall), a lifted corner */
const calH = (u: number, v: number) => {
  const x = u * CAL.W, z = v * CAL.D;
  let h = 1.8 * (1 - (2 * u - 1) ** 2) + 1.0 * (1 - (2 * v - 1) ** 2);
  if (z < 90) h += 6.5 * ((90 - z) / 90) ** 2 * (0.75 + 0.25 * Math.sin(u * 7.1));
  const dd = Math.hypot(x - CAL.W, z - CAL.D);
  if (dd < 120) h += 3 * ((120 - dd) / 120) ** 2;
  return h;
};
/** the tear along the binding's perforation: a ragged line, with the half-holes' bites every 22 px */
const calTear = (u: number) => {
  const x = u * CAL.W;
  let b = 2.5 + 1.6 * Math.sin(x * 0.21) + 1.1 * Math.sin(x * 0.53 + 1.3) + 1.4 * hash(Math.round(x / 3), 3, 5);
  const ph = ((x - 24) % 22 + 22) % 22;
  if (ph < 9) b += 3.5 * Math.sin((Math.PI * ph) / 9);
  return Math.max(0.5, b);
};

// ══ motion params ══
/** each ticket's offset from rest (x, h above its rest, z) and its yaw / bank (deg); show */
export type TicketPose = { dx: number; h: number; dz: number; yaw: number; bank: number; show: boolean };
export type FightsP = { t: TicketPose[]; cal: TicketPose };

export const fightsModel = () => (): Model<FightsP> => {
  const root = new THREE.Group();
  const sc = new THREE.Group();
  sc.position.set(0, -FG.floor, 0);
  root.add(sc);

  // ══ THE RING CANVAS (the surface the place stands on, like the floor: not a bound of the key's shadow camera) ══
  const mat = new THREE.Group();
  mat.userData.noBounds = true;
  sc.add(mat);
  {
    const top = new THREE.MeshStandardMaterial({ map: paintCanvas(), bumpMap: weaveBump(), bumpScale: 1.6, roughness: 0.95, metalness: 0, envMapIntensity: 0.3 });
    const side = new THREE.MeshStandardMaterial({ color: col("#1E2C3D"), roughness: 0.9, envMapIntensity: 0.3 });
    const W = FG.matX1 - FG.matX0, D = FG.matZ1 - FG.matZ0;
    const slab = rbox(W, FG.matT, D, 3, { px: side, nx: side, top, bottom: side, front: side, back: side }, 2);
    slab.position.set((FG.matX0 + FG.matX1) / 2, FG.matT / 2, FG.matZ1);
    mat.add(slab);
    // the padded roll along the far edge: the canvas wrapped over the ring's apron padding
    const roll = wire([[FG.matX0, FG.matT * 0.5, FG.matZ0 + 4], [FG.matX1, FG.matT * 0.5, FG.matZ0 + 4]], 11, new THREE.MeshStandardMaterial({ color: col("#24354A"), roughness: 0.85, envMapIntensity: 0.35 }), false, 4);
    mat.add(roll);
  }

  // ══ THE TICKETS: cardstock with a varnished band and foil ══
  const edgeM = new THREE.MeshStandardMaterial({ color: col("#E9E3D4"), roughness: 0.95, envMapIntensity: 0.3 });
  const backM = new THREE.MeshStandardMaterial({ color: col("#ECE6D8"), roughness: 0.9, envMapIntensity: 0.3 });
  const tks = TICKETS.map((_, i) => {
    const g = new THREE.Group();
    g.userData.obj = `ticket${i + 1}`;
    const spec = paintTicketSpec(i);
    const face = new THREE.MeshPhysicalMaterial({ map: paintTicket(i), roughnessMap: spec, metalnessMap: spec, roughness: 1, metalness: 1,
      clearcoat: 0.12, clearcoatRoughness: 0.55, sheen: 0.25, sheenRoughness: 0.7, sheenColor: col("#FFFFFF"), envMapIntensity: 0.55 });
    g.add(sheetBody({ w: TK.W, d: TK.D, t: TK.T, r: TK.R, nx: 72, nz: 24, h: ticketH(i), face, back: backM, edge: edgeM }));
    sc.add(g);
    return g;
  });

  // ══ THE CALENDAR PAGE: thin paper, torn off along its binding ══
  const cal = new THREE.Group();
  cal.userData.obj = "calendar2020";
  cal.add(sheetBody({ w: CAL.W, d: CAL.D, t: CAL.T, r: 2, nx: 96, nz: 90, h: calH, tear: calTear,
    face: new THREE.MeshPhysicalMaterial({ map: paintCalendar(), roughness: 0.86, sheen: 0.3, sheenRoughness: 0.8, sheenColor: col("#FFFFFF"), envMapIntensity: 0.35 }),
    back: new THREE.MeshStandardMaterial({ color: col("#EFECE4"), roughness: 0.9, envMapIntensity: 0.3 }),
    edge: new THREE.MeshStandardMaterial({ color: col("#FBFAF6"), roughness: 0.95, envMapIntensity: 0.3 }) }));
  sc.add(cal);

  // ══ THE FLOOR beyond the canvas: a faint mirror on the dark ground ══
  root.add(makeFloor({ y: FG.floor, x0: -1100, x1: 2900, z0: -1300, z1: 1000, reflect: 0.1, shadow: 0.5, fadeC: [900, -300], fadeR: [1900, 1100] }));

  const place = (g: THREE.Group, x: number, z: number, yaw0: number, p: TicketPose) => {
    g.visible = p.show;
    g.position.set(x + p.dx, FG.matT + TK_LIFT + p.h, z + p.dz);
    g.rotation.set(0, rad(yaw0 + p.yaw), 0);
    g.rotateZ(rad(p.bank));
  };
  return {
    root,
    update: (p) => {
      tks.forEach((g, i) => place(g, TICKETS[i].x, TICKETS[i].z, TICKETS[i].yaw, p.t[i]));
      place(cal, CAL.x, CAL.z, CAL.yaw, p.cal);
    },
  };
};

// ══ THE BOTTOM ROPE, close to the lens and out of focus (its own view, blurred): a ring rope in its white vinyl sleeve,
//    a strip of black tape wound round it, running across the foot of the frame at a slight angle ══
export const ROPE = { a: [-900, 600, 1330] as const, b: [3000, 600, 1060] as const, r: 46 } as const;
export const ropeModel = () => (): Model<Record<string, never>> => {
  const root = new THREE.Group();
  const sc = new THREE.Group();
  sc.position.set(0, -FG.floor, 0);
  root.add(sc);
  const g = new THREE.Group();
  g.userData.obj = "rope";
  const vinyl = new THREE.MeshPhysicalMaterial({ color: col("#CFC9BE"), roughness: 0.42, clearcoat: 0.5, clearcoatRoughness: 0.3, envMapIntensity: 0.6 });
  const tape = new THREE.MeshPhysicalMaterial({ color: col("#17171A"), roughness: 0.5, clearcoat: 0.3, envMapIntensity: 0.5 });
  const [ax, ay, az] = ROPE.a, [bx, by, bz] = ROPE.b;
  // the sleeve sags a little between its posts
  const pts: [number, number, number][] = [];
  for (let k = 0; k <= 12; k++) { const t = k / 12; pts.push([ax + (bx - ax) * t, ay + (by - ay) * t - 40 * Math.sin(Math.PI * t), az + (bz - az) * t]); }
  g.add(wire(pts, ROPE.r, vinyl, false, 96));
  const curve = new THREE.CatmullRomCurve3(pts.map(([x, y, z]) => new THREE.Vector3(x, y, z)), false, "centripetal");
  for (const t of [0.27, 0.52]) {
    const p0 = curve.getPointAt(t - 0.012), p1 = curve.getPointAt(t + 0.012);
    g.add(wire([[p0.x, p0.y, p0.z], [p1.x, p1.y, p1.z]], ROPE.r + 1.2, tape, false, 4));
  }
  sc.add(g);
  return { root, blur: 11, rig: { key: 0.8 } };
};
