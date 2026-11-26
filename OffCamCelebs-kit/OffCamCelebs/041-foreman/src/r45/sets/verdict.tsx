import React from "react";
import { clamp01 } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { TOTAL_FRAMES } from "../../audit/data";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import {
  verdictModel, HOOK, CARD, CARD_X, cardPt, BOX, PILE, boxCorners, GRILL, bodyPt, BAR, TRAY, SEAT, PLAQUE, PLATE_TOP, plqPt, CASH_TOP, STEAM_TOP, RAIL,
  type Pose3, type VerdictP,
} from "../../three/props/verdict";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 8 · THE VERDICT (cream; the film's last place, to its end) — one floor, four real things.
//  0 "To be fair, those early royalties were never broken out, and sales were already booming." The truck brings the place
//    in CLOSE on four year cards standing in a walnut rail, 1995 · 1996 · 1997 · 1998, each with its amount line BLANK.
//    On "sales" the camera eases back and up as eight retail grill boxes (printed corrugated board, THE GEORGE FOREMAN GRILL)
//    slide in along the floor behind them and are tossed in from both sides onto them, tier on tier, landing fast on real
//    arcs, a tall pile by "booming".
//  1 "So, $200 million from a grill?" The camera trucks right, past the pile, as the grill from the hook slides in from the
//    right on its feet, lid closed, its drip tray out in front FULL OF CASH (the band $200,000,000), thin steam rising from
//    its seam; it brakes and rests on "million", and the camera pushes in on it on "from a grill".
//  2 "Our rating: legit." The camera pushes in close on the handle as a green enamel plaque in a brass rim, LEGIT in raised
//    brass, is carried in on its S-hook along the handle bar, drops onto it ON "legit" (a low soft hit) and sways to rest,
//    its word wider than 60% of the frame (the caption leaves the word to it: objWords). Not a stamp.
//  3 "Send us who to audit next." It holds to the film's end.
// ★ The verdict rates the $200M FIGURE, never Foreman.
// ═══════════════════════════════════════════════════════════════════════════
const S = "verdict" as const;
const DBG = (globalThis as unknown as { __vdDebug?: boolean }).__vdDebug;
const FLOOR = 1350;
const SALES = word(S, 0, /^sales/i), BOOM = word(S, 0, /^booming/i);
const D200 = word(S, 1, /^\$200/);
const OUR = word(S, 2, /^Our/), LEGIT = word(S, 2, /^Legit/i);
/** the place has landed (the truck's arrival is over) */
const LAND = cue(S, 0) + 30;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ss = (a: number, b: number, x: number) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
/** gravity in px (mm) per frame² at 30 fps */
const G = 9810 / 900;

// ── THE BOXES: tier 0 slides in along the floor (friction: a constant deceleration to rest); the upper tiers are TOSSED in
//    from the side on a true parabola (an apex a little over their landing, gravity's own curve down onto the box under
//    them), touch down, skid a short way and stop. Eight landings, every ~4 frames, from "sales" to "booming" ──
// ★ the floor tier is down before the first toss leaves (a box in the air never meets one still sliding in)
const T0N = PILE.filter((b) => b.tier === 0).length, TOSS0 = SALES + 9, TOSS1 = BOOM - 2;
const LANDS = PILE.map((b, k) => (b.tier === 0 ? SALES - 12 + 3 * k : TOSS0 + Math.round((k - T0N) * ((TOSS1 - TOSS0) / (PILE.length - 1 - T0N)))));
const SLIDE = 15, FLY = 10, SKID = 5, APEX = 60, RUN = 1150;
const boxAt = (k: number, f: number): Pose3 => {
  const b = PILE[k], L = LANDS[k];
  if (b.tier === 0) {
    const t0 = L - SLIDE, u = clamp01((f - t0) / SLIDE), e = 1 - (1 - u) ** 2;
    return { x: lerp(b.x + b.side * RUN, b.x, e), h: b.h, z: b.z, yaw: b.yaw + b.side * 7 * (1 - e), visible: f >= t0 - 1 };
  }
  const tl = L - SKID, t0 = tl - FLY;   // launch, touch-down
  const xl = b.x + b.side * 26;
  if (f <= tl) {
    const t = Math.max(0, f - t0), td = Math.sqrt((2 * APEX) / G), ta = FLY - td;
    const h = b.h + APEX - 0.5 * G * (t - ta) ** 2;
    const u = t / FLY;
    return { x: lerp(xl + b.side * RUN, xl, u), h, z: b.z, yaw: b.yaw + b.side * 11 * (1 - u), roll: -b.side * 7 * (1 - u) ** 2, visible: f >= t0 - 1 };
  }
  const u = clamp01((f - tl) / SKID), e = 1 - (1 - u) ** 2;
  return { x: lerp(xl, b.x, e), h: b.h, z: b.z, yaw: b.yaw, visible: true };
};

// ── THE GRILL: from beyond the right edge, sliding on its rubber feet and braking to rest ON "million" ──
const GX = 3300, GZ = -60, GYAW = -2;
const G1 = D200 - 3, G0 = G1 - 40;
const grillAt = (f: number): Pose3 => {
  const u = clamp01((f - G0) / (G1 - G0)), e = 1 - (1 - u) ** 2.4;
  return { x: GX + 1300 * (1 - e), h: 0, z: GZ, yaw: GYAW + 5 * (1 - e), visible: f >= G0 - 1 };
};
/** a point of the grill's frame (x, h, z) at a grill pose, in the world */
const gw = (g: Pose3, p: { x: number; h: number; z: number }) => {
  const a = (g.yaw * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
  return { x: g.x + p.x * c + p.z * s, h: g.h + p.h, z: g.z - p.x * s + p.z * c };
};
const GREST = grillAt(G1);
/** the steam: rising once the grill has stopped, thinning away as the camera comes in for the verdict */
const steamAt = (f: number) => ss(G1 - 6, G1 + 14, f) * (1 - ss(OUR - 14, OUR + 2, f));

// ── THE PLAQUE: carried in along the handle bar on its S-hook, the hook 12 mm over its seat (clear of the handle's arm), its
//    plate trailing a few degrees on the move; past the arm the hook sinks as it slows and seats on the bar ON "legit"; the
//    plate swings through and sways to rest (a pendulum ~88 mm long: a period of ~17 f, damped) ──
const SEATF = LEGIT, C0 = SEATF - 16, CARRY = 640, LIFT = 12, SINK = 70;
const hookLocal = (f: number) => {
  const u = clamp01((f - C0) / (SEATF - C0)), e = 1 - (1 - u) ** 2.2;
  const x = CARRY * (1 - e);
  return { x, d: LIFT * Math.min(1, x / SINK), u };
};
const swingAt = (f: number) => {
  if (f <= SEATF) { const u = hookLocal(f).u; return 4 * (1 - u) ** 2 - 2.2 * u ** 3; }
  const t = f - SEATF;
  return -2.2 * Math.exp(-t / 11) * Math.cos((2 * Math.PI * t) / 17);
};
const plqAt = (f: number) => {
  const hl = hookLocal(f), g = GREST;
  const p = gw(g, { x: SEAT.x + hl.x, h: SEAT.h + hl.d, z: SEAT.z });
  return { ...p, swing: swingAt(f), lean: 0, yaw: g.yaw, visible: f >= C0 - 1 };
};
// ★ the plaque never runs into the handle or the counter: the hook's back tip clears the arm, the plate's top edge stays
//   under the bar's underside wherever it is beneath the bar, its low corners stay over the counter
{
  const armX0 = GRILL.barW / 2 - 14 - 11, armX1 = GRILL.barW / 2 - 14 + 11, armTop = 7.5;
  for (let f = C0; f <= TOTAL_FRAMES; f++) {
    const hl = hookLocal(f), th = (swingAt(f) * Math.PI) / 180, c = Math.cos(th), sn = Math.sin(th);
    // the hook's back tip: at the bar's centre height + d, behind it
    if (hl.x + 2.1 > armX0 - 0.5 && hl.x - 2.1 < armX1 + 0.5 && hl.d - 2.1 < armTop + 0.5) throw new Error(`verdict: f${f} the hook's tip hits the handle's arm (d ${hl.d.toFixed(1)})`);
    const top = PLATE_TOP + HOOK.R + hl.d;   // the plate's top edge, from the bar's centre
    for (let lx = -PLAQUE.w / 2; lx <= PLAQUE.w / 2; lx += 5) {
      const x = hl.x + lx * c - top * sn * 0, y = top + lx * sn;
      if (Math.abs(hl.x + lx) <= GRILL.barW / 2 + 1 && y > -GRILL.barR - 1.2) throw new Error(`verdict: f${f} the plate's top edge runs into the bar (x ${x.toFixed(0)}, y ${y.toFixed(1)})`);
    }
    const foot = SEAT.h + hl.d + PLATE_TOP - PLAQUE.h - (PLAQUE.w / 2) * Math.abs(sn);
    if (foot < 2) throw new Error(`verdict: f${f} the plaque's corner reaches the counter (${foot.toFixed(1)} mm)`);
  }
}

// ── THE CAMERA: the eye rides with the view, up and a little right, looking down onto the floor (a low-ish angle, so the
//    grill's back and the steam stay under the captions when the camera is in close) ──
const EX = 60, EL = 640, ED = 2000;
const eyeOf = (v: { x: number; y: number }): Eye => ({ x: v.x + EX, y: v.y - EL, D: ED });
type P3 = { x: number; h: number; z: number };
const scrOf = (p: P3, v: { x: number; y: number; z: number }) => {
  const q = project(eyeOf(v), p.x, FLOOR - p.h, p.z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
/** a key that puts world point p at screen (sx, sy) at zoom z (solved: the eye moves with the view) */
const keyOn = (p: P3, sx: number, sy: number, z: number) => {
  const v = { x: p.x, y: FLOOR - p.h, z };
  for (let i = 0; i < 40; i++) { const s = scrOf(p, v); v.x += (s.x - sx) / z; v.y += (s.y - sy) / z; }
  return { x: v.x, y: v.y, z };
};
const CARDS_MID: P3 = { x: RAIL.x, h: 150, z: -12 };
const PILE_MID: P3 = { x: RAIL.x, h: 560, z: -300 };
const GRILL_MID = gw(GREST, { x: 0, h: 70, z: TRAY.z * 0.55 });
const PLQ_MID = (() => { const p = plqAt(TOTAL_FRAMES); return plqPt({ ...p, swing: 0 }, PLAQUE.w / 2, PLAQUE.h / 2); })();
const K1 = SALES - 32, K2 = BOOM - 6, K4 = OUR - 8;
const K1V = keyOn(PILE_MID, 540, 1100, 0.6);
const STORY: CamKey[] = [
  { at: -9999, ...keyOn(CARDS_MID, 478, 1150, 1.14), dur: 1 },              // close on the cards: 1995 … 1998, blank
  { at: K1, ...K1V, dur: 40 },                 // "sales were already booming": back and up, the pile
  { at: K2, ...keyOn(GRILL_MID, 530, 1170, 1.42), dur: 42 },               // "booming… So, $200 million": right and in, onto the grill
  { at: K4, ...keyOn(PLQ_MID, 522, 1235, 2.16), dur: 32 },                 // "Our rating: legit": in close on the handle
];
const CAM: CamKey[] = alive(S, STORY, TOTAL_FRAMES, { amp: 0.22 });

const paramsAt = (f: number): VerdictP => {
  const v = camView(CAM, f);
  // far off the frame's left, the cards and the pile are not drawn (their shadows stay far behind the grill)
  const leftEdge = v.x - 540 / v.z;
  const far = leftEdge > RAIL.x + 1500;
  return {
    boxes: PILE.map((_, k) => { const b = boxAt(k, f); return { ...b, visible: b.visible && !far }; }),
    grill: grillAt(f), steam: steamAt(f), t: f, plq: plqAt(f), cards: !far,
  };
};

// ★ the screen's rules, from the landing to the film's end: nothing above y 662 (the caption band); print that can be read
//   (the cards, each box's front once it has landed, the band on the cash once the grill rests, the plaque once seated) left
//   of x 930 where it lies in y 1000–1700, above y 1495, clear of the left edge; and the subjects big
const boxTop = (b: Pose3): P3[] => boxCorners(b).flatMap((c) => [{ x: c.x, h: b.h + BOX.h + 2, z: c.z }]);
const boxFront = (b: Pose3): P3[] => {
  const a = (b.yaw * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
  return [[-1, 0.02], [1, 0.02], [1, 0.98], [-1, 0.98]].map(([i, j]) => { const lx = (i * (BOX.w - 30)) / 2; return { x: b.x + lx * c + (BOX.d / 2) * s, h: b.h + BOX.h * (1 - j), z: b.z - lx * s + (BOX.d / 2) * c }; });
};
const grillTop = (g: Pose3): P3[] => {
  const out: P3[] = [];
  for (const x of [-GRILL.w / 2, 0, GRILL.w / 2]) for (const z of [-GRILL.d / 2, 0, GRILL.d / 2]) out.push(gw(g, bodyPt(x, GRILL.H + GRILL.S + GRILL.L + GRILL.skin + 3, z)));
  for (const x of [-TRAY.w / 2, TRAY.w / 2]) for (const z of [TRAY.z - TRAY.d / 2, TRAY.z + TRAY.d / 2]) out.push(gw(g, { x, h: CASH_TOP, z }));
  return out;
};
const steamTop = (g: Pose3): P3[] => [-150, -30, 70, 160].map((x) => gw(g, bodyPt(x, GRILL.H + GRILL.S + GRILL.L + STEAM_TOP, -60)));
const plqBox = (p: ReturnType<typeof plqAt>, inset = 0): P3[] => [[inset, inset], [PLAQUE.w - inset, inset], [PLAQUE.w - inset, PLAQUE.h - inset], [inset, PLAQUE.h - inset]].map(([u, v]) => plqPt(p, u, v));
const bandPrint = (g: Pose3): P3[] => [[-120, 30], [120, 30], [120, -30], [-120, -30]].map(([x, z]) => gw(g, { x, h: CASH_TOP, z: TRAY.z + z }));
{
  const bad: string[] = [];
  const readable = (f: number, what: string, pts: P3[], v: { x: number; y: number; z: number }) => {
    for (const p of pts) {
      const s = scrOf(p, v);
      if (s.x < -40 || s.x > 1120) continue;   // off the frame altogether
      if (s.y > 1495 && s.y < 1960) bad.push(`f${f}: ${what} at y ${Math.round(s.y)}`);
      else if (s.y > 1000 && s.y < 1700 && s.x > 930) bad.push(`f${f}: ${what} at x ${Math.round(s.x)} (y ${Math.round(s.y)})`);
    }
  };
  // a readable thing must be read whole: where part of it is on the frame, all of it must be
  const whole = (f: number, what: string, pts: P3[], v: { x: number; y: number; z: number }) => {
    const sc = pts.map((p) => scrOf(p, v));
    const on = sc.filter((s) => s.x > 0 && s.x < 1080 && s.y > 0 && s.y < 1920).length;
    if (on > 0 && on < sc.length && sc.some((s) => s.x > 20 && s.x < 1060)) bad.push(`f${f}: ${what} cut by the frame`);
  };
  for (let f = LAND; f <= TOTAL_FRAMES; f++) {
    const v = camView(CAM, f), p = paramsAt(f);
    const tops: [string, P3[]][] = [];
    if (p.cards) { tops.push(["cards", CARD_X.map((_, k) => cardPt(k, CARD.w, 0)).concat(CARD_X.map((_, k) => cardPt(k, 0, 0)))]); }
    p.boxes.forEach((b, k) => { if (b.visible) tops.push([`box${k}`, boxTop(b)]); });
    if (p.grill.visible) tops.push(["grill", grillTop(p.grill)]);
    if (p.steam > 0.03) tops.push(["steam", steamTop(p.grill)]);
    if (p.plq.visible) tops.push(["plaque", [...plqBox(p.plq), { x: p.plq.x, h: p.plq.h + 3, z: p.plq.z }]]);
    for (const [what, pts] of tops) for (const t of pts) {
      const s = scrOf(t, v);
      if (s.x > -60 && s.x < 1140 && s.y < 662 && s.y > -400) { bad.push(`f${f}: ${what}'s top at y ${Math.round(s.y)} (x ${Math.round(s.x)})`); break; }
    }
    if (p.cards) CARD_X.forEach((_, k) => { const pts = [cardPt(k, 14, 30), cardPt(k, CARD.w - 14, 30), cardPt(k, CARD.w - 14, 225), cardPt(k, 14, 225)]; readable(f, `card ${k}`, pts, v); });
    p.boxes.forEach((b, k) => { if (b.visible && f >= LANDS[k]) readable(f, `box${k}'s front`, boxFront(b), v); });
    if (f >= G1) readable(f, "the band", bandPrint(p.grill), v);
    if (f >= SEATF) { readable(f, "the plaque", plqBox(p.plq, 6), v); whole(f, "the plaque", plqBox(p.plq, 6), v); }
  }
  if (DBG) console.log(bad.filter((_, i) => i % 5 === 0).slice(0, 60).join("\n"));
  if (bad.length && !DBG) throw new Error(`verdict: ${bad.length} screen-rule breaks:\n  ` + [...new Set(bad.map((b) => b.replace(/^f\d+: /, "").replace(/\d+/g, "#")))].slice(0, 6).join("\n  ") + `\n  first: ${bad[0]}\n  last: ${bad[bad.length - 1]}`);
  // the subjects big: the cards' row on "early"; the pile's height on "booming"; the grill and its tray on "grill"; LEGIT
  // over 60% of the frame from the word to the film's end
  const at = (f: number, p: P3) => scrOf(p, camView(CAM, f));
  const wr = at(word(S, 0, /^early/i), cardPt(3, CARD.w, 40)).x - at(word(S, 0, /^early/i), cardPt(0, 0, 40)).x;
  const hp = at(BOOM + 10, { x: RAIL.x, h: 0, z: PILE[0].z + BOX.d / 2 }).y - at(BOOM + 10, { x: RAIL.x, h: PILE[PILE.length - 1].h + BOX.h, z: PILE[PILE.length - 1].z + BOX.d / 2 }).y;
  const wg = at(D200, gw(GREST, { x: TRAY.w / 2, h: 20, z: TRAY.z })).x - at(D200, gw(GREST, { x: -TRAY.w / 2, h: 20, z: TRAY.z })).x;
  const half = PLAQUE.word / 2;
  const wl = Math.min(...[SEATF, SEATF + 12, SEATF + 30, TOTAL_FRAMES - 20, TOTAL_FRAMES].map((f) => { const p = plqAt(f); return at(f, plqPt(p, PLAQUE.w / 2 + half, PLAQUE.h / 2)).x - at(f, plqPt(p, PLAQUE.w / 2 - half, PLAQUE.h / 2)).x; }));
  if (DBG) console.log({ wr, hp, wg, wl, LANDS, G0, G1, C0, SEATF, K1, K2, K4, bar: BAR, seat: SEAT, plateTop: PLATE_TOP });
  if (!DBG && (wr < 720 || hp < 540 || wg < 440 || wl < 0.6 * 1080 + 8)) throw new Error(`verdict: too small on screen (the cards' row ${Math.round(wr)}, the pile ${Math.round(hp)}, the tray ${Math.round(wg)}, LEGIT ${Math.round(wl)} px)`);
}

const M3D = verdictModel({ floor: FLOOR });
/** the view's canvas: the camera's viewport with a margin (a wide one to the right while the truck brings the place in) */
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 170 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m + (f < LAND ? 800 : 0);
  const y0 = v.y - 960 / v.z - m, y1 = Math.min(v.y + 960 / v.z + m, FLOOR + 900);
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};
// the light pools, fixed in the world behind the cards, the pile and the grill
const LP = (p: P3, k: CamKey) => { const q = project(eyeOf(k), p.x, FLOOR - p.h, p.z); return [q.x, q.y] as const; };
const [cx0, cy0] = LP(CARDS_MID, STORY[0]), [px0, py0] = LP(PILE_MID, STORY[1]), [gx0, gy0] = LP(GRILL_MID, STORY[3]);

const Verdict: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="cream" pools={[[cx0, cy0 + 40, 760, 380], [px0, py0, 1100, 900], [gx0, gy0, 820, 560]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="floor">
        <View3D name="verdict" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={M3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

const SFX: PlaceSfx[] = [
  { s: "stack", at: LANDS[4], vol: 0.36, why: "verdict: the grill boxes land on the pile, tier on tier", mode: "peak" },
  { s: "glide", at: G0 + 12, end: G1, vol: 0.3, why: "verdict: the grill slides in on its feet", mode: "peak" },
  { s: "sizzle", at: G1 - 2, end: OUR + 12, vol: 0.2, why: "verdict: the closed grill sizzles quietly", mode: "within" },
  { s: "lowhit", at: SEATF, vol: 0.45, why: "verdict: the LEGIT plaque drops onto the grill's handle", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp: Verdict, align: () => "centre" as const, focus: [gx0, gy0] as [number, number] },
  done: Math.max(SEATF + 30, cueEnd(S, 3) + 4),
  cam: CAM,
  sfx: SFX,
};
