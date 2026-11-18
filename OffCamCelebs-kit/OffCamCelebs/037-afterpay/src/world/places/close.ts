// PLACE 6 · THE CLOSE, in the world (rule P12): three SHOTS, each on one big object, joined by the camera flying.
//  0 "The deal took six months to close."      enters low and close on the FLIP CALENDAR (a big desk calendar on the
//       floor, three-quarter), its leaves flipping AUG 2021 → JAN 2022 as the camera ORBITS it.
//  1 "By then, Square had renamed itself Block, and its share price had roughly halved."   TRAVEL to the certificate
//       stack on its plinth, its nameplate in front rolling SQUARE → BLOCK on "Block"; the LED board stands behind it to
//       the right. On "share price" the camera pushes past the stack onto the board as it FALLS $247.26 → $122.29 (red,
//       31 JAN 2022) while the stack sinks to half its height in the foreground; a red light comes up with the fall.
//  2 "So when Block booked the deal with the SEC, the shares it handed over were worth 13.8 billion."   CRANE up and over
//       the desk: the filing's cover swings open on "booked"; the camera comes down close above its ONE line; the khaki
//       highlight crosses it on "13.8" as a solid khaki "$13.8B" rises on the desk behind the page; the stamp lands under
//       the line: FORM 10-Q | Q1 2022.
// Timings: sets/close.tsx (CL, paramsAt), all anchored on the take's words.
import * as THREE from "three";
import { cue, word } from "../../r45/time";
import { SOFT, SETTLE, ramp } from "../../r45/tokens";
import { paramsAt, CL } from "../../r45/sets/close";
import { C, SM } from "../../three/studio";
import { rbox } from "../../three/kit029";
import { makeLed } from "../../three/obj/led";
import { makeCerts } from "../../three/obj/certs";
import { makeNameplate } from "../../three/obj/nameplate";
import { makeDesk } from "../../three/obj/desk";
import { makeFiling } from "../../three/obj/filing";
import { makeCalendar } from "../../three/obj/c_calendar";
import { makeStamp } from "../../three/obj/c_stamp";
import { PRICE, NAMES, FILING_LINE, DATES } from "../../audit/record";
import { orbit, orbitPos, crane, dolly, travel, cut, mixV, type CamKey3, type Vec } from "../cam";
import { text3d } from "../text3d";
import type { Place3, Lights } from "../place";

const S = "close" as const;
const C1 = cue(S, 1), C2 = cue(S, 2), PRICE_W = word(S, 1, /^share/), SHARES = word(S, 2, /^shares/), N138 = word(S, 2, /^13/);
const MONTHS = ["AUG 2021", "SEP 2021", "OCT 2021", "NOV 2021", "DEC 2021", "JAN 2022"];

// ── the stage (place coordinates: y up, the floor at 0) ──
const CAL_S = 2.3, CAL: Vec = [-2500, 0, 0], CAL_C: Vec = [CAL[0], 470, 30];
const PAIR_S = 1.5, STACK: Vec = [-260, 0, 260], BOARD: Vec = [520, 0, -420];
const PLINTH_H = 150, BOARD_C: Vec = [BOARD[0], (250 + 150) * PAIR_S, BOARD[2]];
const STACK_C: Vec = [STACK[0], PLINTH_H * PAIR_S + 150, STACK[2]];
const DESK_Y = 430, DESK: Vec = [2900, DESK_Y, 0], FILE_S = 1.45;
const FW = 600, FD = 760, FT = 58;                       // the filing's own size (before FILE_S)
const FILE: Vec = [DESK[0] + 60, DESK_Y, 40];
const PAGE_Y = DESK_Y + (FT + 8) * FILE_S;
/** the highlighted line on the page, in place coordinates (the page's top edge is its far side, −z) */
const LINE: Vec = [FILE[0], PAGE_Y, FILE[2] - 0.17 * FD * FILE_S];
const NUM: Vec = [FILE[0] + 40, DESK_Y, FILE[2] - (FD / 2) * FILE_S - 110];

export const CLOSE_ENTER = cue(S, 0) - 8;

export const ClosePlace: Place3 = {
  id: S, label: "6 The close: six months, Block, the price halves, the 10-Q books $13.8B", enter: CLOSE_ENTER,
  shots: ({ from, to }): CamKey3[] => {
    const k: CamKey3[] = [];
    let end = from;
    /** add a key no earlier than the last one's end; drop it if it has no room */
    const put = (at: number, dur: number, mk: (at: number, dur: number) => CamKey3, limit = to - 2) => {
      const a = Math.max(at, end + 1), d = Math.min(dur, limit - a);
      if (d < 8) return;
      k.push(mk(a, d)); end = a + d;
    };
    // 0 · the calendar: low and close, orbiting as the leaves flip
    const A0 = { c: CAL_C, a0: -34, a1: 14, r0: 2050, r1: 1800, y0: 260, y1: 430 };
    k.push(cut(from, orbitPos(CAL_C, A0.a0, A0.r0, A0.y0), [CAL_C[0], CAL_C[1] + 250, CAL_C[2]], { fov: 56, dip: 5, why: "low and close on the calendar" }));
    put(from + 1, C1 - 10 - from, (a, d) => orbit(a, d, A0, { look: [CAL_C[0], CAL_C[1] + 230, CAL_C[2]], fov: 56, ease: SOFT, why: "orbit the calendar" }));
    // 1 · the stack and its nameplate, the board behind
    put(C1 - 8, 38, (a, d) => travel(a, d, [-1300, 600, 2450], [-150, 330, 520], { bulge: [0, 120, 420], fov: 50, why: "to the stack and the board", vol: 0.55 }));
    put(end + 1, PRICE_W - 10 - end - 1, (a, d) => dolly(a, d, [-1160, 600, 2320], [-140, 340, 510], { ease: SOFT, why: "ease in on the stack" }), PRICE_W - 9);
    put(PRICE_W - 8, 42, (a, d) => dolly(a, d, [-560, 760, 1500], [BOARD_C[0] + 10, BOARD_C[1] + 60, BOARD_C[2]], { fov: 48, why: "push onto the falling board" }));
    put(end + 1, C2 - 10 - end - 1, (a, d) => dolly(a, d, [-500, 750, 1440], [BOARD_C[0] - 10, BOARD_C[1] + 60, BOARD_C[2]], { ease: SOFT, why: "hold on the fall" }), C2 - 9);
    // 2 · the filing: up and over the desk, then down close above its line
    put(C2 - 8, 46, (a, d) => crane(a, d, [FILE[0] - 760, DESK_Y + 1250, FILE[2] + 1500], [FILE[0] - 120, PAGE_Y, FILE[2] - 40], { bulge: [0, 420, 500], fov: 50, why: "up and over the desk to the filing" }));
    put(SHARES - 8, 44, (a, d) => dolly(a, d, [LINE[0] + 110, PAGE_Y + 1330, LINE[2] + 1480], [LINE[0], PAGE_Y, LINE[2] + 30], { fov: 46, why: "down onto the line" }));
    put(end + 1, to - 3 - end, (a, d) => dolly(a, d, [LINE[0] + 150, PAGE_Y + 1260, LINE[2] + 1400], [LINE[0] + 5, PAGE_Y, LINE[2] + 40], { ease: SOFT, why: "ease on the line" }));
    return k;
  },
  lights: (f): Lights => {
    const p = paramsAt(f);
    // the rig moves with the story: calendar → stack and board → desk
    const a = ramp(f, C1 - 8, C1 + 22, SOFT), b = ramp(f, C2 - 8, C2 + 30, SOFT);
    const c = mixV(mixV([CAL_C[0], 300, 0], [150, 420, -60], a), [FILE[0], PAGE_Y, FILE[2]], b);
    const fall = p.fall, hl = p.hl;
    return {
      amb: 0.16,
      key: { pos: [c[0] - 650, c[1] + 2000, c[2] + 1250], at: c, i: 1.9 + 0.5 * b, color: "#FFF4E2", angle: 0.6, soft: 0.8 },
      rim: { pos: [c[0] + 1200, c[1] + 900, c[2] - 1600], at: c, i: 3.4 - 1.6 * b, color: "#CFE0FF", angle: 0.8, soft: 0.6 },
      aux: { pos: [c[0] - 1500, c[1] + 520, c[2] - 900], at: c, i: 1.5 - 0.8 * b, color: "#DDE6F5", angle: 0.8, soft: 0.6 },
      // red comes up with the fall; khaki with the highlight
      accent: b < 0.5
        ? { pos: [BOARD_C[0] - 120, BOARD_C[1] - 80, BOARD_C[2] + 520], color: C.red, i: 0.75 * fall * (1 - b * 2) }
        : { pos: [NUM[0], DESK_Y + 260, NUM[2] + 420], color: C.khaki, i: 0.5 * hl },
      focus: [c[0], c[2]], reach: 3000, reflect: 0.5 - 0.3 * b,
    };
  },
  build: () => {
    const group = new THREE.Group();
    // ── the flip calendar, big, on the floor ──
    const cal = makeCalendar({ key: "close3d", months: MONTHS });
    cal.group.position.set(...CAL);
    cal.group.scale.setScalar(CAL_S);
    cal.group.rotation.y = 0.1;
    // ── the stack on its plinth, its nameplate in front; the board behind it to the right ──
    const pair = new THREE.Group();
    pair.scale.setScalar(PAIR_S);
    const plinth = rbox(470, PLINTH_H, 350, 8, SM.graphite());
    plinth.position.set(STACK[0] / PAIR_S, PLINTH_H / 2, STACK[2] / PAIR_S + 175);
    const band = rbox(476, 5, 356, 2, SM.edge(), 1);
    band.position.set(STACK[0] / PAIR_S, PLINTH_H - 9, STACK[2] / PAIR_S + 178);
    const certs = makeCerts({ key: "close3d", labels: ["SQUARE SHARES", "BLOCK SHARES"], sub: "ISSUED AT CLOSING" });
    certs.group.position.set(STACK[0] / PAIR_S, PLINTH_H, STACK[2] / PAIR_S);
    const plate = makeNameplate({ key: "close3d", w: 400, h: 100, texts: [NAMES.was, NAMES.now] });
    plate.group.position.set(STACK[0] / PAIR_S - 10, 0, STACK[2] / PAIR_S + 330);
    plate.group.rotation.y = -0.06;
    const led = makeLed({ key: "close3d", w: 640, h: 300, legs: 250 });
    led.group.position.set(BOARD[0] / PAIR_S, 0, BOARD[2] / PAIR_S);
    led.group.rotation.y = -0.22;
    pair.add(plinth, band, certs.group, plate.group, led.group);
    // ── the desk, the filing on it, the stamp, and the figure as a solid thing ──
    const desk = makeDesk({ w: 2000, d: 1500, drop: DESK_Y - 44 });
    desk.group.position.set(...DESK);
    desk.group.traverse((n) => { const m = (n as THREE.Mesh).material as THREE.MeshPhysicalMaterial | undefined; if (m?.isMeshStandardMaterial) { m.roughness = Math.max(m.roughness, 0.62); if (m.isMeshPhysicalMaterial) m.clearcoat = 0; } });
    const file = new THREE.Group();
    file.position.set(...FILE);
    file.scale.setScalar(FILE_S);
    const filing = makeFiling({ key: "close3d", w: FW, d: FD, t: FT, cover: ["FORM 10-Q", "BLOCK, INC. | Q1 2022"], line: FILING_LINE });
    const stamp = makeStamp({ key: "close3d", text: DATES.form, w: 300, h: 80 });
    stamp.group.position.set(140, FT + 8 + 0.6, 318);
    file.add(filing.group, stamp.group);
    const numFace = new THREE.MeshStandardMaterial({ color: new THREE.Color(C.khaki), roughness: 0.4, metalness: 0, emissive: new THREE.Color(C.khaki), emissiveIntensity: 0 });
    const numSide = new THREE.MeshStandardMaterial({ color: new THREE.Color(C.khaki).multiplyScalar(0.3), roughness: 0.45, metalness: 0.5 });
    const num = text3d("$13.8B", { font: "800", size: 170, depth: 56, bevel: 4, face: numFace, side: numSide });
    num.position.set(...NUM);
    num.rotation.x = -0.12;
    group.add(cal.group, pair, desk.group, file, num);
    return {
      group,
      update: (f) => {
        const p = paramsAt(f);
        cal.update({ cal: p.cal });
        plate.update({ swap: p.swap });
        certs.update({ height: 1 - 0.5 * p.fall, label: p.swap > 0.5 ? 1 : 0 });
        led.update({ value: PRICE.announce + (PRICE.close - PRICE.announce) * p.fall, date: p.fall > 0.5 ? PRICE.closeDate : PRICE.announceDate, fall: p.fall });
        filing.update({ open: p.open, hl: p.hl });
        stamp.update({ p: p.stamp });
        // the figure rises out of the desk as the highlight crosses the line, and lights
        const up = ramp(f, CL.hl[0], CL.hl[0] + 18, SETTLE);
        num.visible = up > 0.001;
        num.scale.set(1, Math.max(0.001, up), 1);
        numFace.emissiveIntensity = 0.1 + 0.8 * ramp(f, CL.hl[0] + 6, CL.hl[0] + 22, SETTLE);
      },
    };
  },
};
