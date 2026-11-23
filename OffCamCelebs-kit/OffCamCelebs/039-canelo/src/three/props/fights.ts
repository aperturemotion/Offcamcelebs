// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE FIGHTS IN 3-D (039) — "He fought three times under the deal. Then, in 2020, no fights at all." On the dark ground, the
// canvas of a boxing ring (a slab of blue ring canvas, its weave and scuffs printed, a padded roll along its far edge where
// the ring gives way to the dark), and on it:
//   · THREE FIGHT TICKETS, real card stock (a coloured header band, the bout in heavy type, the date, a greeked venue line, a
//     perforated stub with its seat boxes and barcode), each tossed in from beyond the frame's edge, landing flat and
//     skidding to rest: ÁLVAREZ vs FIELDING DEC 15 2018, ÁLVAREZ vs JACOBS MAY 4 2019, ÁLVAREZ vs KOVALEV NOV 2 2019;
//   · A WALL CALENDAR'S 2020 PAGE (torn off at its perforated binding strip): 2020 in heavy type over the twelve months,
//     every day printed and none of them marked. It swings in across the canvas and lands beside the tickets, empty.
// Units are layer px (y up from the canvas's floor, z toward the viewer); no yaw of the whole place (the camera breathes).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, rr, type Model } from "../stage";
import { rbox, rad, col, fitFont, track, hash, wire, paper, M, font } from "../kit029";
import { FIGHTS as FIGHTS_REC } from "../../audit/record";

/** the place's layout (floor-local) */
export const FG = {
  floor: 1500,
  /** the canvas: its top, its extent */
  matT: 14, matX0: -1000, matX1: 2700, matZ0: -470, matZ1: 900,
} as const;

// ══ THE TICKETS ══
export const TK = { W: 600, D: 232, T: 1.6, STUB: 150 } as const;
/** where each ticket comes to rest (centre x, z, yaw deg) and the side it is tossed in from (-1 left, +1 right) */
export const TICKETS = [
  { x: 524, z: -262, yaw: 2.0, from: -1, band: "#22385E" },
  { x: 560, z: 2, yaw: -1.6, from: 1, band: "#2D5B57" },
  { x: 532, z: 266, yaw: 1.2, from: -1, band: "#5E2E44" },
] as const;
/** the ticket's back sits this far over the canvas */
export const TK_LIFT = 0.45;

// ══ THE CALENDAR PAGE ══
export const CAL = { W: 580, D: 720, T: 0.7, x: 1460, z: -32, yaw: -2.2 } as const;
/** where its print sits (page px from the top-left), for the camera: the year, the months' grid */
export const CAL_PRINT = { year: [56, 206] as const, grid: [226, 704] as const };

const INK = "#1D1A19";
const CARD = "#F2EDE1";

// ══ print ══════════════════════════════════════════════════════════════════════════════════════
const paintTicket = (i: number) => paintTex(`fights39-ticket-${i}-v2`, TK.W, TK.D, (c) => {
  const W = TK.W, D = TK.D, t = TICKETS[i], rec = FIGHTS_REC[i];
  const MAIN = W - TK.STUB;
  c.fillStyle = CARD; c.fillRect(0, 0, W, D);
  for (let k = 0; k < 140; k++) { c.fillStyle = `rgba(120,100,70,${0.025 + 0.03 * hash(k, 5, i)})`; c.fillRect(hash(k, 1, i) * W, hash(k, 2, i) * D, 2 + 5 * hash(k, 3, i), 0.7); }
  // the header band across the main part, its event line small in the band
  c.fillStyle = t.band; c.fillRect(0, 0, MAIN, 40);
  c.fillStyle = "rgba(242,237,225,0.92)"; c.textAlign = "left"; c.textBaseline = "middle";
  track(c, 3.2); fitFont(c, 700, 15, "CHAMPIONSHIP BOXING", 260); c.fillText("CHAMPIONSHIP BOXING", 22, 21); track(c, 0);
  // a thin rule under the band, the ticket's admit line (greeked)
  c.fillStyle = t.band; c.fillRect(0, 44, MAIN, 2.2);
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
  // the perforation and the stub
  c.fillStyle = "rgba(29,26,25,0.38)";
  for (let y = 6; y < D - 4; y += 9) { c.beginPath(); c.arc(MAIN, y, 1.7, 0, Math.PI * 2); c.fill(); }
  c.fillStyle = t.band; c.fillRect(MAIN + 6, 0, TK.STUB - 6, 40);
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
}, 3);

const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
const paintCalendar = () => paintTex("fights39-cal-v2", CAL.W, CAL.D, (c) => {
  const W = CAL.W, D = CAL.D;
  c.fillStyle = "#F7F5EF"; c.fillRect(0, 0, W, D);
  for (let k = 0; k < 220; k++) { c.fillStyle = `rgba(120,110,90,${0.02 + 0.025 * hash(k, 5, 3)})`; c.fillRect(hash(k, 1, 3) * W, hash(k, 2, 3) * D, 2 + 6 * hash(k, 3, 3), 0.7); }
  // the binding strip it was torn from: a perforation line and the stubs of the wire's punched holes
  c.fillStyle = "rgba(29,26,25,0.32)";
  for (let x = 8; x < W - 6; x += 8) { c.beginPath(); c.arc(x, 30, 1.3, 0, Math.PI * 2); c.fill(); }
  c.fillStyle = "rgba(29,26,25,0.16)";
  for (let x = 24; x < W - 20; x += 22) { rr(c, x, 8, 9, 13, 3); c.fill(); }
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
}, 3);

/** the mat's print: ring canvas, its weave and the scuffs of a fight night */
const paintCanvas = () => paintTex("fights39-canvas-v2", 1850, 685, (c) => {
  const W = 1850, D = 685;
  c.fillStyle = "#23334A"; c.fillRect(0, 0, W, D);
  // the weave: fine warp and weft
  for (let y = 0; y < D; y += 1.6) { c.fillStyle = `rgba(10,18,30,${0.05 + 0.05 * hash(y, 1, 2)})`; c.fillRect(0, y, W, 0.55); }
  for (let x = 0; x < W; x += 1.6) { c.fillStyle = `rgba(150,175,205,${0.025 + 0.03 * hash(x, 2, 2)})`; c.fillRect(x, 0, 0.5, D); }
  // broad uneven wear, resin and scuffs
  for (let k = 0; k < 60; k++) {
    const x = hash(k, 1, 9) * W, y = hash(k, 2, 9) * D, r = 20 + 90 * hash(k, 3, 9);
    const g = c.createRadialGradient(x, y, 0, x, y, r);
    const light = hash(k, 4, 9) > 0.45;
    g.addColorStop(0, light ? `rgba(170,190,215,${0.05 + 0.05 * hash(k, 5, 9)})` : `rgba(8,12,20,${0.06 + 0.06 * hash(k, 5, 9)})`);
    g.addColorStop(1, "rgba(0,0,0,0)");
    c.fillStyle = g; c.beginPath(); c.ellipse(x, y, r, r * (0.4 + 0.5 * hash(k, 6, 9)), hash(k, 7, 9) * 3, 0, Math.PI * 2); c.fill();
  }
  for (let k = 0; k < 120; k++) { c.strokeStyle = `rgba(160,180,205,${0.04 + 0.05 * hash(k, 1, 4)})`; c.lineWidth = 0.6 + hash(k, 2, 4); const x = hash(k, 3, 4) * W, y = hash(k, 4, 4) * D, a = hash(k, 5, 4) * 6.3, l = 8 + 30 * hash(k, 6, 4); c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); c.stroke(); }
}, 0.8);

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
    const top = new THREE.MeshStandardMaterial({ map: paintCanvas(), roughness: 0.93, metalness: 0, envMapIntensity: 0.3 });
    const side = new THREE.MeshStandardMaterial({ color: col("#1E2C3D"), roughness: 0.9, envMapIntensity: 0.3 });
    const W = FG.matX1 - FG.matX0, D = FG.matZ1 - FG.matZ0;
    const slab = rbox(W, FG.matT, D, 3, { px: side, nx: side, top, bottom: side, front: side, back: side }, 2);
    slab.position.set((FG.matX0 + FG.matX1) / 2, FG.matT / 2, FG.matZ1);
    mat.add(slab);
    // the padded roll along the far edge: the canvas wrapped over the ring's apron padding
    const roll = wire([[FG.matX0, FG.matT * 0.5, FG.matZ0 + 4], [FG.matX1, FG.matT * 0.5, FG.matZ0 + 4]], 11, new THREE.MeshStandardMaterial({ color: col("#24354A"), roughness: 0.85, envMapIntensity: 0.35 }), false, 4);
    mat.add(roll);
  }

  // ══ THE TICKETS ══
  const tks = TICKETS.map((t, i) => {
    const g = new THREE.Group();
    g.userData.obj = `ticket${i + 1}`;
    const sh = paper({ w: TK.W, h: TK.D, t: TK.T, face: M.print(paintTicket(i), 0.8), back: M.paper("#ECE6D8"), edge: M.paper("#E4DDCC"), bow: 1.1,
      curls: [{ corner: i === 1 ? "tl" : "br", r: 90, lift: 2.2 }], seg: 40 });
    sh.rotation.x = -Math.PI / 2;
    sh.position.y = TK.T;
    g.add(sh);
    sc.add(g);
    void t;
    return g;
  });

  // ══ THE CALENDAR PAGE ══
  const cal = new THREE.Group();
  cal.userData.obj = "calendar2020";
  {
    const sh = paper({ w: CAL.W, h: CAL.D, t: CAL.T, face: M.print(paintCalendar(), 0.86), back: M.paper("#EFECE4"), edge: M.paper("#E8E4DA"), bow: 2.0, bowY: 1.2,
      curls: [{ corner: "tl", r: 140, lift: 7 }, { corner: "tr", r: 120, lift: 5 }], seg: 56 });
    sh.rotation.x = -Math.PI / 2;
    sh.position.y = CAL.T;
    cal.add(sh);
  }
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
void mesh;
