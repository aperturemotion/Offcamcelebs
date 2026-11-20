// ═════════════════════════════════════════════════════════════════════════════════════════════
// SET E · THE SCOREBOARD (038; SHOTS.md row E; P16: real things; study rules R1–R32). Three shots joined by hard cuts:
//  1 "Twenty-one years later…"  the flip calendar riffles 2010 → 2026, leaves whipping over with blur, 2026 landing on
//    "later". Low orbit and push.
//  2 "…United's borrowings stand at about six hundred and ninety million." / "Last season, net finance costs alone were
//    sixty-nine point six million."  The stand: red seats, a cantilever roof, and in front of its corner the stadium's LED
//    scoreboard with the real crest beside it. A low crane up from the seats to the board, which lights row by row on
//    "borrowings": BORROWINGS | £689M (counting, landing RED on "690" with a red glow and a ring) | 30 JUN 2026. On "Last
//    season" the board switches pages (rows go dark, the new ones light): NET FINANCE COSTS | 2025/26 | £69,600,000,
//    landing on "69.6".
//  3 "About one hundred and ninety thousand a day."  The day counter on the pitch-side floor, the stand and its red board
//    behind: the last card flips 364 → 365 as a day ticks, the strip counts £190,000 A DAY landing on "190,000", and a stack
//    of gold coins pours out of its side slot. Red is this whole set's colour (the worst part).
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { cue, word } from "../../r45/time";
import { SOFT, SETTLE, clamp01, ramp } from "../../r45/tokens";
import { cut, dolly, orbit, orbitPos, crane, type CamKey3, type Vec, type Orbit } from "../cam";
import { stdLights, type Place3, type PlaceCue, type Lights } from "../place";
import { K, ring, countUp, pounds } from "../kit";
import { enterOf } from "../timeline";
import { makeCalendar, CAL } from "../obj/calendar";
import { makeScoreboard, SB } from "../obj/scoreboard";
import { makeDayCounter, DAYC } from "../obj/daycounter";
import { makeCoin, COIN } from "../obj/coin";

const S = "board" as const;
const E = enterOf(S);
const RED = "#ff3b2f";
const LATER = word(S, 0, /^later/), BORROW = word(S, 0, /^borrowing/), N690 = word(S, 0, /^690/);
const LAST = word(S, 1, /^Last/), COSTS = word(S, 1, /^costs/), N696 = word(S, 1, /^69/);
const N190 = word(S, 2, /^190/);
/** the cuts inside the place */
const B0 = Math.round((LATER + BORROW) / 2) + 2, C0 = cue(S, 2) - 4;

// ── where each shot's object stands ──
const XA = 0, XS = 8000;
const CTR: Vec = [XS + SB.cx, SB.cy, SB.cz];              // the screen's centre
const DC: Vec = [XS - 1350, 0, 1700];                      // the day counter on the pitch-side floor

// ── 1 · the calendar: 2010 → 2026 (four flips, the first already going on the cut), 2026 landing on "later" ──
const YEARS = ["2010", "2014", "2018", "2022", "2026"];
const FLIP = 10, FLIPS = YEARS.length - 1;
const T0 = E - 4, TL = LATER + 1 - FLIP;
const flipAt = (i: number) => T0 + (i * (TL - T0)) / (FLIPS - 1);
const LAND26 = TL + FLIP;
const calState = (f: number) => {
  for (let i = 0; i < FLIPS; i++) { const p = (f - flipAt(i)) / FLIP; if (p < 1) return { year: i, flip: clamp01(p) }; }
  return { year: FLIPS, flip: 0 };
};
// ── 2 · the board ──
const ROW = 5;                                             // frames between rows lighting
const ON0 = BORROW - 6;                                    // page 0 lights row by row from just before "borrowings"
const CNT0 = [BORROW + 4, N690 + 1] as const;              // £689M counts up, lands on "690"
const SW = LAST - 2;                                       // the page switch: rows go dark …
const ON1 = SW + 3 * ROW + 2;                              // … and page 1 lights row by row
const CNT1 = [COSTS - 2, N696 + 1] as const;               // £69,600,000 counts, lands on "69.6"
// ── 3 · the day counter and the coins ──
const TICK = N190 - 6, TICK_DUR = 9;                       // the card flips over as the day ticks
const CNT2 = [C0 + 2, N190] as const;                      // £190,000 A DAY lands on "190,000"
const NCOIN = 12, COIN0 = N190 + 2, COIN_GAP = 4, FLY = 7;
const coinLand = (k: number) => COIN0 + k * COIN_GAP + FLY;

export const BD = { E, B0, C0, flips: Array.from({ length: FLIPS }, (_, i) => flipAt(i)), land26: LAND26, on0: ON0, cnt0: CNT0, sw: SW, on1: ON1, cnt1: CNT1, tick: TICK, cnt2: CNT2, coins: [COIN0, coinLand(NCOIN - 1)] } as const;

// ── the camera ──
const ORB_A: Orbit = { c: [XA, 470, 0], a0: 22, a1: -10, r0: 2450, r1: 2050, y0: 420, y1: 560 };
const shots = ({ from, to }: { from: number; to: number }): CamKey3[] => [
  // 1 the calendar: orbit and push while the years riffle
  cut(from, orbitPos(ORB_A.c, ORB_A.a0, ORB_A.r0, ORB_A.y0), ORB_A.c, { fov: 40, why: "cut: the calendar" }),
  orbit(from + 1, B0 - from - 2, ORB_A, { fov: 40, ease: SOFT, why: "orbit and push on the calendar" }),
  // 2 the stand: low over the front seats, crane up to the board, push in on it, a slow drift through the page switch
  cut(B0, [XS - 500, 380, 4300], [XS + 80, 900, 0], { fov: 46, why: "cut: the stand, low at the seats" }),
  crane(B0 + 1, CNT0[0] + 8 - B0, [XS + 120, 1380, 4600], [CTR[0] - 120, CTR[1] - 30, CTR[2]], { fov: 46, bulge: [0, 0, 300], why: "crane up the stand to the scoreboard" }),
  dolly(CNT0[0] + 9, SW - CNT0[0] - 10, [XS + 180, 1440, 3950], [CTR[0] - 100, CTR[1] - 10, CTR[2]], { fov: 46, ease: SOFT, why: "push in on the board" }),
  dolly(SW, C0 - SW - 1, [XS + 330, 1470, 3650], [CTR[0] - 80, CTR[1], CTR[2]], { fov: 46, ease: SOFT, why: "drift on the board through the page switch" }),
  // 3 the day counter: low three-quarter, the stand and its red board behind; a slow push as the coins pour
  cut(C0, [DC[0] - 1350, 600, DC[2] + 2950], [DC[0] - 170, 470, DC[2]], { fov: 44, why: "cut: the day counter" }),
  dolly(C0 + 1, Math.max(20, to - C0 - 2), [DC[0] - 1150, 540, DC[2] + 2650], [DC[0] - 150, 450, DC[2]], { fov: 44, ease: SOFT, why: "push in as the coins pour" }),
];

// ── the light: the calendar's rig; then the stand's, red rising as the figures land; the day counter's, red behind ──
const mixHex = (a: string, b: string, t: number) => "#" + new THREE.Color(a).lerp(new THREE.Color(b), clamp01(t)).getHexString();
const lights = (f: number): Lights => {
  if (f < B0) return stdLights([XA, 470, 0], { s: 1.05, key: 3.4 + 0.5 * ramp(f, LAND26 - 2, LAND26 + 8, SETTLE) });
  if (f < C0) {
    const red = Math.max(ramp(f, CNT0[1] - 2, CNT0[1] + 14, SETTLE) * (1 - 0.4 * ramp(f, SW, SW + 12, SOFT)), ramp(f, CNT1[1] - 2, CNT1[1] + 14, SETTLE));
    const L = stdLights([XS + 100, 900, 200], { s: 1.6, key: 3.2, back: 2.6 });
    L.back = { ...L.back!, color: mixHex("#F2EEEE", K.red, 0.5 + 0.4 * red), i: 2.6 + 2.4 * red };
    L.accent = { pos: [CTR[0] - 900, 500, CTR[2] + 2600], color: RED, i: 1.6 + 3.4 * red };
    return L;
  }
  const L = stdLights([DC[0] + 100, 420, DC[2]], { s: 1.05, key: 3.4 });
  L.back = { ...L.back!, color: mixHex("#F2EEEE", K.red, 0.75), i: 3.4 };
  L.accent = { pos: [DC[0] + 300, 700, DC[2] + 700], color: RED, i: 1.4 + 1.6 * ramp(f, CNT2[1] - 2, CNT2[1] + 12, SETTLE) };
  return L;
};

const cues = (): PlaceCue[] => [
  ...Array.from({ length: FLIPS }, (_, i): PlaceCue => ({ kind: "hit", s: "flick", at: Math.round(flipAt(i) + 3), vol: 0.34, why: `the calendar: ${YEARS[i]} whips over` })),
  { kind: "hit", s: "thud", at: Math.round(LAND26), vol: 0.3, why: "the calendar: 2026 lands" },
  { kind: "hit", s: "datashort", at: ON0, end: ON0 + 3 * ROW + 6, vol: 0.24, why: "the scoreboard lights row by row" },
  { kind: "hit", s: "data", at: CNT0[0], end: CNT0[1], vol: 0.3, why: "the board counts up to £689M" },
  { kind: "hit", s: "sub", at: CNT0[1], vol: 0.45, why: "£689M lands red: the ring of light" },
  { kind: "hit", s: "click", at: SW, vol: 0.3, why: "the board switches page" },
  { kind: "hit", s: "datashort", at: ON1, end: ON1 + 3 * ROW + 6, vol: 0.22, why: "page 2 lights row by row" },
  { kind: "hit", s: "data", at: CNT1[0], end: CNT1[1], vol: 0.3, why: "the board counts up to £69,600,000" },
  { kind: "hit", s: "sub", at: CNT1[1], vol: 0.4, why: "£69,600,000 lands" },
  { kind: "hit", s: "click", at: TICK + 4, vol: 0.34, why: "the day counter ticks over: 364 → 365" },
  { kind: "hit", s: "data", at: CNT2[0], end: CNT2[1], vol: 0.26, why: "the strip counts to £190,000 A DAY" },
  ...Array.from({ length: 6 }, (_, k): PlaceCue => ({ kind: "hit", s: "coin", at: Math.round(coinLand(k * 2)), vol: 0.26, why: `coins land on the pile (${k * 2 + 1})` })),
];

const blur = (f: number) =>
  (f < B0 && Array.from({ length: FLIPS }, (_, i) => (f - flipAt(i)) / FLIP).some((p) => p > 0.15 && p < 0.88)) ||
  (f > TICK + 1 && f < TICK + TICK_DUR - 1) ||
  (f >= COIN0 && f < coinLand(NCOIN - 1));

const build = () => {
  const group = new THREE.Group();
  // 1 the calendar
  const cal = makeCalendar("board", YEARS); cal.group.position.set(XA, 0, 0); cal.group.rotation.y = 0.1; group.add(cal.group);
  const ringA = ring({ r: 1500, dur: 26 }); ringA.mesh.position.set(XA, 1.5, 200); group.add(ringA.mesh);
  // 2 the stand and its board
  const sb = makeScoreboard("board"); sb.group.position.set(XS, 0, 0); group.add(sb.group);
  const ringB = ring({ r: 2200, dur: 30, color: K.red }); ringB.mesh.position.set(CTR[0], 1.5, SB.cz + 400); group.add(ringB.mesh);
  // 3 the day counter and its coins
  const dc = makeDayCounter("board"); dc.group.position.set(DC[0], 0, DC[2]); dc.group.rotation.y = 0.14; group.add(dc.group);
  const slotW = dc.slot.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.14).add(new THREE.Vector3(DC[0], 0, DC[2]));
  const pileC = new THREE.Vector3(slotW.x - 120, 0, slotW.z + 260);
  const coins = Array.from({ length: NCOIN }, (_, k) => { const c = makeCoin("board" + k); group.add(c.group); return c; });
  const ringC = ring({ r: 1300, dur: 26, color: K.red }); ringC.mesh.position.set(DC[0], 1.5, DC[2] + 300); group.add(ringC.mesh);

  return {
    group,
    update: (f: number) => {
      cal.group.visible = f < B0;
      sb.group.visible = f >= B0 && f < C0 + 1e9;             // the stand stays (it is behind the day counter)
      dc.group.visible = f >= C0;
      for (const c of coins) c.group.visible = f >= C0;
      ringA.update(f, LAND26);
      if (f < B0) cal.update(calState(f));
      // the board: page 0 lights row by row, its figure counts and lands; then page 0 goes dark and page 1 lights
      const off0 = (i: number) => 1 - clamp01((f - (SW + i * ROW)) / 3);
      const p0 = [0, 1, 2].map((i) => clamp01((f - (ON0 + i * ROW)) / 3) * off0(i));
      const p1 = [0, 1, 2].map((i) => clamp01((f - (ON1 + i * ROW)) / 3));
      const v0 = countUp(f, CNT0[0], CNT0[1], 120e6, 689e6);
      const v1 = countUp(f, CNT1[0], CNT1[1], 4e6, 69.6e6);
      sb.update({ p0, p1, fig0: `£${Math.round(v0 / 1e6)}M`, fig1: pounds(Math.round(v1 / 1e5) * 1e5) });
      ringB.update(f, CNT0[1]);
      // the day counter
      const t = SETTLE(clamp01((f - TICK) / TICK_DUR));
      const v2 = countUp(f, CNT2[0], CNT2[1], 0, 190000);
      dc.update({ day0: "364", day1: "365", flip: t, money: `£${(Math.round(v2 / 1000) * 1000).toLocaleString("en-US")} A DAY`, lit: clamp01((f - (C0 - 2)) / 5) });
      ringC.update(f, CNT2[1]);
      // the coins: out of the slot, a short arc, a fall onto the pile (each settles on the one before)
      coins.forEach((c, k) => {
        const t0 = COIN0 + k * COIN_GAP, land = coinLand(k), u = f - t0;
        const restY = COIN.t / 2 + 3.4 + k * (COIN.t + 7.2), jitter = ((k * 37) % 9) - 4;
        const rest = new THREE.Vector3(pileC.x + jitter, restY, pileC.z + (((k * 53) % 9) - 4));
        if (u < 0) { c.group.visible = false; return; }
        c.group.visible = true;
        if (f >= land) { c.group.position.copy(rest); c.group.rotation.set(0, k * 0.9, 0); return; }
        const p = u / (land - t0), q = Math.min(1, p / 0.7);   // over the pile first, then straight down onto it
        const x = slotW.x + (rest.x - slotW.x) * q, z = slotW.z + (rest.z - slotW.z) * q;
        const top = rest.y + 90, y = p < 0.7 ? slotW.y + (top - slotW.y) * q + 120 * Math.sin(Math.PI * q) : top + (rest.y - top) * ((p - 0.7) / 0.3) ** 2;
        c.group.position.set(x, y, z); c.group.rotation.set(1.2 * (1 - q), k * 0.9, 0.6 * (1 - q));
      });
    },
  };
};
void DAYC; void CAL;

export const BoardPlace: Place3 = { id: S, label: "7 Set E: the scoreboard: borrowings £689M, net finance costs £69.6M, £190,000 a day", enter: E, stage: "dark", shots, lights, build, blur, cues };
