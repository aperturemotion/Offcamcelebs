// ═════════════════════════════════════════════════════════════════════════════════════════════
// PLACE 6 · THE CLOSE (037 v2; SHOTS.md rows CLOSE 1–4; study rules R1–R32). Four shots, each ONE chunky object that acts
// its sentence, joined by hard cuts (each idea is new: R23); the camera never stops (R21).
//  1 "The deal took six months to close."  The block flip-calendar: its leaves whip over the rod AUG → JAN (the first is
//    already going over on the cut), JAN landing on "months" with a ring of light. Orbit and push.
//  2 "By then, Square had renamed itself Block, and its share price had roughly halved."  The sign of letter tiles lights
//    S-Q-U-A-R-E; on "renamed" the last tile drops off and hits the floor; the five flip over to B-L-O-C-K, landing on
//    "Block". The camera tracks to the price board, which counts DOWN $247 → $122 and turns RED as it lands on "halved";
//    a red glow rises on the backdrop (the film's one red beat before the verdict: R18).
//  3 "Same number of shares. About half the price."  The last tokens drop onto the stack; SAME SHARES lights; on "half" the
//    glowing value column beside it sinks to half its height; HALF PRICE lights. Slow orbit, both in frame (R19).
//  4 "So when the deal closed, Block told the S.E.C. what those shares were worth: thirteen point eight billion."  The
//    steel drawer (the hook's, returning: R13) rolls open on "closed"; a FORM 10-Q plate drops onto the cabinet on "SEC";
//    the drawer's plate lights and counts up to $13.8 BILLION, landing on "thirteen point eight" with a ring of light.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { cue, word } from "../../r45/time";
import { SOFT, SETTLE, TRAVEL, clamp01, ramp } from "../../r45/tokens";
import { cut, dolly, orbit, orbitPos, travel, type CamKey3, type Vec, type Orbit } from "../cam";
import { stdLights, type Place3, type PlaceCue, type Lights } from "../place";
import { K, litPlate, ring, dropIn, countUp } from "../kit";
import { enterOf } from "../timeline";
import { makeCalendar, CAL } from "../obj/calendar";
import { makeTiles, TILES } from "../obj/tiles";
import { makeBoard } from "../obj/board";
import { makeTokenStack, makeToken } from "../obj/token";
import { makeColumn } from "../obj/column";
import { makeDrawer } from "../obj/drawer";

const S = "close" as const;
const E = enterOf(S);
const MONTHS = word(S, 0, /^months/);
const SQUARE = word(S, 1, /^Square/), RENAMED = word(S, 1, /^renamed/), BLOCK = word(S, 1, /^Block/), HALVED = word(S, 1, /^halved/);
const SAME = word(S, 2, /^Same/), HALF = word(S, 2, /^half/);
const CLOSED = word(S, 3, /^closed/), SEC = word(S, 3, /^SEC/), WORTH = word(S, 3, /^worth/), N138 = word(S, 3, /13/);
/** the cuts inside the place: to the sign, to the stack, to the drawer */
const B0 = cue(S, 1) - 4, C0 = cue(S, 2) - 3, D0 = cue(S, 3) - 3;

// ── where each shot's object stands (the place's own x; all on the same studio floor, far enough apart to be alone) ──
const XA = 0, XB = 6000, XBOARD = XB + 2300, XC = 12000, XD = 18000;

// ── 1 · the calendar ──
const FLIP = 11, FLIPS = CAL.months.length - 1;
const T0 = E - 5, TL = MONTHS + 2 - FLIP;
const flipAt = (i: number) => T0 + (i * (TL - T0)) / (FLIPS - 1);
const JAN = TL + FLIP;                                   // JAN is showing
const flipP = (f: number) => Array.from({ length: FLIPS }, (_, i) => clamp01((f - flipAt(i)) / FLIP));
// ── 2 · the sign, then the board ──
const ON0 = B0 - 6;                                      // the letters light one by one (the first are lit on the cut)
const DROP = RENAMED - 2;                                // the last tile lets go
const G = 3.6, FLOOR_Y = -(TILES.cy - TILES.h / 2);      // its fall (units per frame²) to the floor
const FALL = Math.sqrt((2 * -FLOOR_Y) / G), HIT = DROP + FALL;
const TFLIP = 10, tflipAt = (i: number) => BLOCK + 2 - TFLIP - (4 - i) * 4;
const TRACK = BLOCK + 9, TRACK_DUR = 26;
const COUNT_A = HALVED - 22, COUNT_B = HALVED + 3;      // the board's fall lands on "halved"
// ── 3 · the stack and the column ──
const NTOK = 16, FIRST = 11;
const tokLand = (k: number) => C0 - 3 + k * 5;           // token FIRST + k lands (the first is falling on the cut)
const SINK_A = HALF - 9, SINK_B = HALF + 8;
// ── 4 · the drawer ──
const ROLL_A = CLOSED - 10, ROLL_B = CLOSED + 7;
const FORM = SEC + 3;                                    // the FORM 10-Q plate lands
const PLATE_ON = WORTH - 8, CNT_A = WORTH - 2, CNT_B = N138 + 12;

export const CL2 = { E, B0, C0, D0, flips: Array.from({ length: FLIPS }, (_, i) => flipAt(i)), jan: JAN, drop: DROP, hit: HIT, tflips: [0, 1, 2, 3, 4].map(tflipAt), track: TRACK, count: [COUNT_A, COUNT_B], toks: [0, 1, 2, 3, 4].map(tokLand), sink: [SINK_A, SINK_B], roll: [ROLL_A, ROLL_B], form: FORM, cnt: [CNT_A, CNT_B] } as const;

// ── the camera ──
const ORB_A: Orbit = { c: [XA, 540, 0], a0: -26, a1: 12, r0: 2550, r1: 2050, y0: 520, y1: 640 };
const ORB_C: Orbit = { c: [XC + 20, 600, 0], a0: -18, a1: 15, r0: 3350, r1: 2950, y0: 560, y1: 720 };
const SIGN: Vec = [XB + 60, 830, 0], BOARD: Vec = [XBOARD, 980, 60];
const shots = ({ from, to }: { from: number; to: number }): CamKey3[] => [
  // 1 the calendar: orbit and push while the leaves flip
  cut(from, orbitPos(ORB_A.c, ORB_A.a0, ORB_A.r0, ORB_A.y0), ORB_A.c, { fov: 40, why: "cut: the calendar" }),
  orbit(from + 1, B0 - from - 2, ORB_A, { fov: 40, ease: SOFT, why: "orbit and push on the calendar" }),
  // 2 the sign: a slow push while the tiles act, then the track to the board and a push on its fall
  cut(B0, [XB - 420, 560, 4000], SIGN, { fov: 46, why: "cut: the sign" }),
  dolly(B0 + 1, TRACK - B0 - 2, [XB - 120, 620, 3550], SIGN, { fov: 46, ease: SOFT, why: "push on the sign" }),
  travel(TRACK, TRACK_DUR, [XBOARD - 480, 720, 2900], BOARD, { fov: 44, bulge: [0, 40, 260], why: "track from the sign to the board", vol: 0.5 }),
  dolly(TRACK + TRACK_DUR + 1, C0 - (TRACK + TRACK_DUR) - 2, [XBOARD + 160, 760, 2350], BOARD, { fov: 44, ease: SOFT, why: "push on the falling price" }),
  // 3 the stack and the column: a slow orbit, both in frame
  cut(C0, orbitPos(ORB_C.c, ORB_C.a0, ORB_C.r0, ORB_C.y0), ORB_C.c, { fov: 42, why: "cut: the stack and the column" }),
  orbit(C0 + 1, D0 - C0 - 2, ORB_C, { fov: 42, ease: SOFT, why: "orbit the stack and the column" }),
  // 4 the drawer: high three-quarter, pushing down into it
  cut(D0, [XD + 850, 1750, 2700], [XD, 780, 360], { fov: 44, why: "cut: the drawer" }),
  dolly(D0 + 1, CNT_A - D0 - 2, [XD + 520, 2050, 2050], [XD + 40, 840, 400], { fov: 44, ease: SOFT, why: "push toward the drawer" }),
  dolly(CNT_A, Math.max(20, to - CNT_A - 1), [XD + 300, 2200, 1650], [XD + 60, 930, 400], { fov: 44, ease: SOFT, why: "push onto the plate" }),
];

// ── the light: one rig that goes where the shot is; red rises on the fallen price; a warm lift on $13.8 BILLION ──
const mixHex = (a: string, b: string, t: number) => "#" + new THREE.Color(a).lerp(new THREE.Color(b), clamp01(t)).getHexString();
const lights = (f: number): Lights => {
  if (f < B0) {
    const L = stdLights([XA, 520, 0], { s: 1.05, key: 3.4 + 0.5 * ramp(f, JAN - 2, JAN + 8, SETTLE) });
    return L;
  }
  if (f < C0) {
    const t = TRAVEL(clamp01((f - TRACK) / TRACK_DUR));
    const c: Vec = [SIGN[0] + (BOARD[0] - SIGN[0]) * t, 820 - 80 * t, 0];
    const red = ramp(f, COUNT_B - 3, COUNT_B + 14, SETTLE);
    const L = stdLights(c, { s: 1.3 - 0.25 * t, key: 2.9 + 0.8 * ramp(f, SQUARE - 4, SQUARE + 8, SETTLE), back: 3.2 });
    L.back = { ...L.back!, color: mixHex("#F2EEEE", K.red, red * 0.9), i: 3.2 + 2.2 * red };
    L.accent = { pos: [XBOARD - 300, 900, 900], color: K.red, i: 2.4 * red };
    return L;
  }
  if (f < D0) return stdLights([XC, 480, 0], { s: 1.1, key: 3.5 });
  const warm = ramp(f, CNT_B - 2, CNT_B + 14, SETTLE);
  const L = stdLights([XD, 640, -200], { s: 1.2, key: 3.5 });
  L.back = { ...L.back!, color: mixHex("#F2EEEE", K.money, warm * 0.6), i: 3.2 + 1.2 * warm };
  L.accent = { pos: [XD + 200, 1500, 1200], color: K.money, i: 1.6 * warm };
  return L;
};

const cues = (): PlaceCue[] => [
  ...Array.from({ length: FLIPS }, (_, i): PlaceCue => ({ kind: "hit", s: "flick", at: Math.round(flipAt(i) + 3), vol: 0.34, why: `the calendar: leaf ${CAL.months[i][0]} whips over` })),
  { kind: "hit", s: "thud", at: JAN, vol: 0.3, why: "the calendar: JAN lands" },
  { kind: "hit", s: "datashort", at: ON0 + 2, end: ON0 + 20, vol: 0.22, why: "the sign: its letters light, S-Q-U-A-R-E" },
  { kind: "hit", s: "thud", at: Math.round(HIT), vol: 0.42, why: "the sign: the last tile hits the floor" },
  ...[0, 1, 2, 3, 4].map((i): PlaceCue => ({ kind: "hit", s: "click", at: tflipAt(i) + 4, vol: 0.3, why: `the sign: tile ${i + 1} flips to ${TILES.to[i]}` })),
  { kind: "hit", s: "data", at: COUNT_A, end: COUNT_B, vol: 0.3, why: "the board counts down: $247 → $122" },
  { kind: "hit", s: "sub", at: COUNT_B, vol: 0.45, why: "the board lands on $122 and turns red" },
  ...[0, 1, 2, 3, 4].map((k): PlaceCue => ({ kind: "hit", s: "coin", at: tokLand(k), vol: 0.3, why: `the stack: token ${FIRST + k + 1} lands` })),
  { kind: "hit", s: "click", at: SAME + 2, vol: 0.28, why: "SAME SHARES lights" },
  { kind: "move", s: "lowwoosh", at: HALF, end: SINK_B + 6, vol: 0.4, why: "the value column sinks to half" },
  { kind: "hit", s: "click", at: HALF + 2, vol: 0.28, why: "HALF PRICE lights" },
  { kind: "move", s: "whooshsoft", at: CLOSED - 2, end: ROLL_B, vol: 0.4, why: "the drawer rolls open" },
  { kind: "hit", s: "thud", at: ROLL_B - 2, vol: 0.4, why: "the drawer stops on its runners" },
  { kind: "hit", s: "thud", at: FORM, vol: 0.36, why: "FORM 10-Q drops onto the cabinet" },
  { kind: "hit", s: "click", at: PLATE_ON + 2, vol: 0.28, why: "the drawer's plate lights" },
  { kind: "hit", s: "data", at: CNT_A, end: CNT_B, vol: 0.3, why: "the plate counts up to $13.8 BILLION" },
  { kind: "hit", s: "bloom", at: CNT_B, vol: 0.4, why: "$13.8 BILLION lands: the ring of light" },
];

const blur = (f: number) =>
  (f < B0 && flipP(f).some((p) => p > 0.12 && p < 0.9)) ||
  (f >= DROP && f < HIT + 3) || [0, 1, 2, 3, 4].some((i) => f > tflipAt(i) + 2 && f < tflipAt(i) + TFLIP - 2) ||
  [0, 1, 2, 3, 4].some((k) => dropIn(f, tokLand(k), { h: 900, fall: 8 }).fast) ||
  (f > ROLL_A + 2 && f < ROLL_B - 5) || dropIn(f, FORM, { h: 1300, fall: 8 }).fast;

const build = () => {
  const group = new THREE.Group();
  // 1 the calendar
  const cal = makeCalendar(); cal.group.position.set(XA, 0, 0); cal.group.rotation.y = -0.1; group.add(cal.group);
  const ringA = ring({ r: 1500, dur: 26 }); ringA.mesh.position.set(XA, 1.5, 150); group.add(ringA.mesh);
  // 2 the sign and the board
  const sign = makeTiles(); sign.group.position.set(XB, 0, 0); group.add(sign.group);
  const board = makeBoard("close"); board.group.position.set(XBOARD, 0, 0); board.group.rotation.y = -0.16; board.group.scale.setScalar(1.15); group.add(board.group);
  const ringB = ring({ r: 1500, dur: 26, color: K.red }); ringB.mesh.position.set(XBOARD, 1.5, 260); group.add(ringB.mesh);
  // 3 the stack and the column
  const pair = new THREE.Group(); pair.position.set(XC, 0, 0); pair.scale.setScalar(1.9); group.add(pair);
  const stack = makeTokenStack("close", NTOK); stack.group.position.set(-200, 0, 0); pair.add(stack.group);
  const faller = makeToken("SQ"); pair.add(faller);
  const column = makeColumn("close"); column.group.position.set(200, 0, 0); pair.add(column.group);
  const same = litPlate(["SAME SHARES"], { size: 18, depth: 16 }); same.group.position.set(-200, same.h / 2, 150); same.group.rotation.x = -0.32; pair.add(same.group);
  const half = litPlate(["HALF PRICE"], { size: 18, depth: 16 }); half.group.position.set(200, half.h / 2, 200); half.group.rotation.x = -0.32; pair.add(half.group);
  const H0 = stack.h(NTOK) / 900;                     // the column stands as tall as the stack, then half
  // 4 the drawer
  const dr = makeDrawer("close"); dr.group.position.set(XD, 0, 0); dr.group.rotation.y = 0.2; dr.group.scale.setScalar(1.7); group.add(dr.group);
  const form = litPlate(["FORM 10-Q"], { size: 50, depth: 30 });
  const formHold = new THREE.Group(); formHold.add(form.group); formHold.rotation.y = 0.2; formHold.position.set(XD, 0, 0); group.add(formHold);
  const TOPY = dr.size.h * 1.7, formRest = TOPY + form.h / 2;
  form.group.position.set(-170, formRest, -45);
  const ringD = ring({ r: 1700, dur: 30, color: K.money }); ringD.mesh.position.set(XD + 120, 1.5, 700); group.add(ringD.mesh);

  return {
    group,
    update: (f: number) => {
      cal.group.visible = f < B0; ringA.mesh.visible = false;
      sign.group.visible = board.group.visible = f >= B0 && f < C0;
      pair.visible = f >= C0 && f < D0;
      dr.group.visible = formHold.visible = f >= D0;
      if (f < B0) {
        cal.update(flipP(f));
        ringA.update(f, JAN);
      } else if (f < C0) {
        const t = f - DROP;
        let dropY = 0, tip = 0, dx = 0;
        if (t > 0) {
          if (f < HIT) dropY = -0.5 * G * t * t;
          else { const u = f - HIT; dropY = FLOOR_Y - (TILES.h / 2 - TILES.d / 2 - 4) * SETTLE(clamp01(u / 12)) + 46 * Math.max(0, Math.sin(Math.PI * clamp01(u / 9))); tip = SETTLE(clamp01(u / 12)); dx = 90 * SETTLE(clamp01(u / 14)); }
        }
        sign.update({
          flip: [0, 1, 2, 3, 4].map((i) => SOFT(clamp01((f - tflipAt(i)) / TFLIP))),
          on: [0, 1, 2, 3, 4, 5].map((i) => clamp01((f - (ON0 + i * 3)) / 4)),
          dropY, dropTip: tip, dropX: dx, shift: ramp(f, BLOCK + 2, BLOCK + 14, SETTLE),
        });
        const v = Math.round(countUp(f, COUNT_A, COUNT_B, 247, 122));
        board.update({ value: "$" + v, red: clamp01((f - (COUNT_B - 3)) / 5), on: 1 });
        ringB.update(f, COUNT_B);
      } else if (f < D0) {
        let n = FIRST;
        faller.visible = false;
        for (let k = 0; k < NTOK - FIRST; k++) {
          const d = dropIn(f, tokLand(k), { h: 900, fall: 8, bounce: 0.6 });
          if (f >= tokLand(k) + 9) n = FIRST + k + 1;
          else if (d.on && !faller.visible) { faller.visible = true; faller.position.set(-200, stack.h(FIRST + k) + d.y, 0); faller.rotation.y = (FIRST + k) * 0.7; }
        }
        stack.update({ count: n });
        same.setLit((f - SAME) / 6);
        half.setLit((f - HALF) / 6);
        const s = ramp(f, SINK_A, SINK_B, SETTLE);
        column.update({ h: H0 * (1 - 0.5 * s), glow: 1 - 0.45 * s });
      } else {
        const o = ramp(f, ROLL_A, ROLL_B, SETTLE) + 0.035 * Math.sin(Math.PI * clamp01((f - ROLL_B) / 8)) * (f > ROLL_B ? -1 : 0);
        const v = countUp(f, CNT_A, CNT_B, 0, 13.8);
        dr.update({ open: o, value: f < PLATE_ON ? "" : `$${v.toFixed(1)} BILLION`, lit: clamp01((f - PLATE_ON) / 8) });
        const d = dropIn(f, FORM, { h: 1300, fall: 8, bounce: 0.5 });
        form.group.visible = d.on; form.group.position.y = formRest + d.y;
        form.setLit((f - FORM) / 6);
        ringD.update(f, CNT_B);
      }
    },
  };
};

export const ClosePlace: Place3 = { id: S, label: "6 The close: six months, Square → Block, the price halves, $13.8 BILLION", enter: E, stage: "dark", shots, lights, build, blur, cues };
