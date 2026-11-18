// PLACE 6 · THE CLOSE — six months pass on a flip calendar (its leaves flip AUG 2021 → JAN 2022); the stack's nameplate
// turns SQUARE → BLOCK, the board falls $247.26 → $122.29 and the stack shrinks to half; then the filing opens on the desk
// at its one line, a highlighter crosses it, and a stamp lands: FORM 10-Q | Q1 2022.
import { THREE, type Model } from "../stage";
import { rbox } from "../kit029";
import { SM, C, STUDIO_RIG, studioFloor, halo } from "../studio";
import { makeLed } from "../obj/led";
import { makeCerts } from "../obj/certs";
import { makeNameplate } from "../obj/nameplate";
import { makeDesk } from "../obj/desk";
import { makeFiling } from "../obj/filing";
import { makeCalendar } from "../obj/c_calendar";
import { makeStamp } from "../obj/c_stamp";
import { PRICE, NAMES, FILING_LINE, DATES } from "../../audit/record";

/** the filing's own numbers (its page is what the camera reads): fw × fd its footprint, ft its thickness; `line` is where
 *  the highlighted line sits on the layer, for the camera; `stamp` the imprint's centre from the filing's centre (x, z) */
export const CLOSE_GEO = {
  floor: 1420, cal: { x: 300 }, stack: { x: 1160 }, led: { x: 1760, w: 560, h: 290, legs: 230 },
  desk: { x: 2760, y: 1200, w: 1180, d: 980 }, filing: { dx: 150, w: 600, d: 760, t: 58, z: 40 }, stamp: { dx: 120, dz: 322 },
} as const;
const MONTHS = ["AUG 2021", "SEP 2021", "OCT 2021", "NOV 2021", "DEC 2021", "JAN 2022"];
/** cal: 0…1 through the six months; swap: the nameplate 0 SQUARE … 1 BLOCK; fall: 0…1 the price $247.26 → $122.29 and the
 *  stack 1 → ½; open / hl: the filing; stamp: 0 … 1 (it lands at 0.5 and has lifted away by 1, its imprint left) */
export type CloseP = { cal: number; swap: number; fall: number; open: number; hl: number; stamp: number };

export const closeModel = (): Model<CloseP> => {
  const G = CLOSE_GEO, Y = -G.floor;
  const root = new THREE.Group();
  root.add(studioFloor({ y: G.floor, cx: 1500, rx: 2100 }));
  const pool = (x: number, w: number, d: number, op = 0.1) => { const h = halo(w, d, "#B9C4D6", op, true); h.position.set(x, Y + 1.2, 60); root.add(h); };
  // ── the flip calendar ──
  const cal = makeCalendar({ key: "close", months: MONTHS });
  cal.group.position.set(G.cal.x, Y, -60);
  cal.group.rotation.y = 0.12;
  cal.group.userData.obj = "calendar";
  pool(G.cal.x, 1100, 760);
  // ── the stack on its plinth (a satin band round its top so the black block reads), its nameplate in front; the board ──
  const plinth = rbox(470, 150, 350, 8, SM.graphite());
  plinth.position.set(G.stack.x, Y + 75, 175);
  const band = rbox(476, 5, 356, 2, SM.edge(), 1);
  band.position.set(G.stack.x, Y + 141, 178);
  const certs = makeCerts({ key: "close", labels: ["SQUARE SHARES", "BLOCK SHARES"], sub: "ISSUED AT CLOSING" });
  certs.group.position.set(G.stack.x, Y + 150, 0);
  certs.group.userData.obj = "certs";
  const plate = makeNameplate({ key: "close", w: 380, h: 96, texts: [NAMES.was, NAMES.now] });
  plate.group.position.set(G.stack.x, Y, 300);
  plate.group.userData.obj = "nameplate";
  const led = makeLed({ key: "close", w: G.led.w, h: G.led.h, legs: G.led.legs });
  led.group.position.set(G.led.x, Y, 0);
  led.group.userData.obj = "led";
  pool((G.stack.x + G.led.x) / 2, 1900, 900);
  // ── the desk, the filing and the stamp ──
  const desk = makeDesk({ w: G.desk.w, d: G.desk.d, drop: G.floor - G.desk.y - 44 });
  desk.group.position.set(G.desk.x, -G.desk.y, -G.desk.d / 2 + 60);
  desk.group.userData.obj = "desk";
  // a soft sheen on the desk's top under the filing, so the slab is a surface and not a hole
  const sheen = halo(G.desk.w * 1.05, G.desk.d * 1.1, "#AEB9CC", 0.13, true);
  sheen.position.set(G.desk.x, -G.desk.y + 0.8, 60);
  const F = G.filing;
  const filing = makeFiling({ key: "close", w: F.w, d: F.d, t: F.t, cover: ["FORM 10-Q", "BLOCK, INC. | Q1 2022"], line: FILING_LINE });
  filing.group.position.set(G.desk.x + F.dx, -G.desk.y, F.z);
  filing.group.userData.obj = "filing";
  const stamp = makeStamp({ key: "close", text: DATES.form, w: 330, h: 88 });
  stamp.group.position.set(G.desk.x + F.dx + G.stamp.dx, -G.desk.y + F.t + 8 + 0.6, F.z + G.stamp.dz);
  stamp.group.userData.obj = "stamp";
  root.add(cal.group, plinth, band, certs.group, plate.group, led.group, desk.group, sheen, filing.group, stamp.group);
  void C;
  return {
    root, rig: STUDIO_RIG,
    update: (p) => {
      cal.update({ cal: p.cal });
      plate.update({ swap: p.swap });
      certs.update({ height: 1 - 0.5 * p.fall, label: p.swap > 0.5 ? 1 : 0 });
      led.update({ value: PRICE.announce + (PRICE.close - PRICE.announce) * p.fall, date: p.fall > 0.5 ? PRICE.closeDate : PRICE.announceDate, fall: p.fall });
      filing.update({ open: p.open, hl: p.hl });
      stamp.update({ p: p.stamp });
    },
  };
};
