// PLACE 6 · THE CLOSE — six months pass on a flip calendar; the stack's nameplate turns SQUARE → BLOCK, the board falls
// $247.26 → $122.29 and the stack shrinks to half; then the filing opens on the desk at its one line, and a stamp lands.
// STUB BUILD: the calendar and the stamp are placeholders for the place-worker to model.
import { THREE, type Model } from "../stage";
import { rbox } from "../kit029";
import { SM, C, STUDIO_RIG, studioFloor, textTex, litFace } from "../studio";
import { makeLed } from "../obj/led";
import { makeCerts } from "../obj/certs";
import { makeNameplate } from "../obj/nameplate";
import { makeDesk } from "../obj/desk";
import { makeFiling } from "../obj/filing";
import { PRICE, NAMES, FILING_LINE, DATES } from "../../audit/record";

export const CLOSE_GEO = { floor: 1420, cal: { x: 300 }, stack: { x: 1160 }, led: { x: 1760, w: 560, h: 290, legs: 230 }, desk: { x: 2700, y: 1180 } } as const;
const MONTHS = ["AUG 2021", "SEP 2021", "OCT 2021", "NOV 2021", "DEC 2021", "JAN 2022"];
/** cal: 0…1 through the six months; swap: the nameplate 0 SQUARE … 1 BLOCK; fall: 0…1 the price $247.26 → $122.29 and the
 *  stack 1 → ½; open / hl: the filing; stamp: 0 raised … 1 pressed (its print shows from 1) */
export type CloseP = { cal: number; swap: number; fall: number; open: number; hl: number; stamp: number };

export const closeModel = (): Model<CloseP> => {
  const G = CLOSE_GEO, Y = -G.floor;
  const root = new THREE.Group();
  root.add(studioFloor({ y: G.floor, cx: 1500, rx: 2000 }));
  // the flip calendar (placeholder): a block on a stand, its page the month
  const cal = new THREE.Group();
  cal.userData.obj = "calendar";
  const stand = rbox(420, 40, 240, 8, SM.black());
  stand.position.set(0, 20, 120);
  const back = rbox(380, 400, 30, 8, SM.graphite());
  back.position.set(0, 240, 15);
  back.rotation.x = -0.14;
  const page = new THREE.Mesh(new THREE.PlaneGeometry(340, 340), SM.print(textTex("close:cal0", 340, 340, [], {})));
  page.position.set(0, 236, 42);
  page.rotation.x = -0.14;
  for (const s of [-1, 1]) { const r = new THREE.Mesh(new THREE.TorusGeometry(20, 4, 8, 24), SM.edge()); r.position.set(s * 90, 420, 30); r.rotation.y = Math.PI / 2; cal.add(r); }
  cal.add(stand, back, page);
  cal.position.set(G.cal.x, Y, 0);
  const calTex = (i: number) => textTex(`close:cal:${i}`, 340, 340, [
    { t: MONTHS[i].split(" ")[0], size: 130, weight: 800, color: "#1E1A10" },
    { t: MONTHS[i].split(" ")[1], size: 60, weight: 700, color: i === 0 || i === 5 ? "#7A5A12" : "#5B5443", gap: 10, track: 0.1 },
  ], { bg: "#EFE8D8", pad: 30 });
  // the stack on its plinth, its nameplate in front
  const plinth = rbox(460, 150, 340, 8, SM.black());
  plinth.position.set(G.stack.x, Y + 75, 170);
  const certs = makeCerts({ key: "close", labels: ["SQUARE SHARES", "BLOCK SHARES"], sub: "ISSUED AT CLOSING" });
  certs.group.position.set(G.stack.x, Y + 150, 0);
  certs.group.userData.obj = "certs";
  const plate = makeNameplate({ key: "close", w: 380, h: 96, texts: [NAMES.was, NAMES.now] });
  plate.group.position.set(G.stack.x, Y, 300);
  plate.group.userData.obj = "nameplate";
  const led = makeLed({ key: "close", w: G.led.w, h: G.led.h, legs: G.led.legs });
  led.group.position.set(G.led.x, Y, 0);
  led.group.userData.obj = "led";
  // the desk, the filing and the stamp
  const desk = makeDesk({ w: 900, d: 700, drop: G.floor - G.desk.y - 44 });
  desk.group.position.set(G.desk.x, -G.desk.y, -350);
  desk.group.userData.obj = "desk";
  const filing = makeFiling({ key: "close", w: 520, d: 600, t: 60, cover: ["FORM 10-Q", "BLOCK, INC. | Q1 2022"], line: FILING_LINE });
  filing.group.position.set(G.desk.x + 60, -G.desk.y, -20);
  filing.group.userData.obj = "filing";
  const stamp = new THREE.Group();
  stamp.userData.obj = "stamp";
  const sb = rbox(300, 60, 90, 8, SM.black());
  sb.position.set(0, 30, 45);
  const grip = rbox(90, 110, 60, 14, SM.graphite());
  grip.position.set(0, 110, 30);
  stamp.add(sb, grip);
  const ink = litFace(300, 80, textTex("close:stamp", 300, 80, [{ t: DATES.form, size: 34, weight: 800, color: C.red, track: 0.06 }], { border: C.red, r: 6, pad: 12 }));
  ink.rotation.x = -Math.PI / 2;
  ink.position.set(G.desk.x + 60, -G.desk.y + 62, 150);
  ink.rotation.z = 0.06;
  root.add(cal, plinth, certs.group, plate.group, led.group, desk.group, filing.group, stamp, ink);
  return {
    root, rig: STUDIO_RIG,
    update: (p) => {
      (page.material as THREE.MeshStandardMaterial).map = calTex(Math.min(5, Math.max(0, Math.round(p.cal * 5))));
      plate.update({ swap: p.swap });
      certs.update({ height: 1 - 0.5 * p.fall, label: p.swap > 0.5 ? 1 : 0 });
      led.update({ value: PRICE.announce + (PRICE.close - PRICE.announce) * p.fall, date: p.fall > 0.5 ? PRICE.closeDate : PRICE.announceDate, fall: p.fall });
      filing.update({ open: p.open, hl: p.hl });
      stamp.position.set(G.desk.x + 60, -G.desk.y + 62 + 420 * (1 - p.stamp), 150);
      stamp.visible = p.stamp > 0.001 && p.stamp < 0.999;
      ink.visible = p.stamp >= 0.999;
    },
  };
};
