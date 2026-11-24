import React from "react";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import {
  backModel, frontModel, FLOOR, TV, ZP, HOLE, C1, C2, SC, PLT, PRINT,
  poseC1, poseC2, posePL, poseSC, cardPt, platePt, boardTop, type AugT, type Card, type CardPose,
} from "../../three/props/august";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 4 · AUGUST (cream) — four sentences, one TV, two cue cards, a plaque, a small card.
//  0 "In August, on Fox News, the host listed $700 million." The truck brings the place in CLOSE on a mid-century walnut TV
//    on splayed legs; on "Fox" it clicks on (the CRT's line opens into the picture): a studio, the lower-third "FOX NEWS,
//    AUG 1 2022". On "$700" a white cue card "$700 MILLION?" slides in from the right and leans against the TV's front as
//    the camera eases back onto it.
//  1 "Then, $800 million." A second card "$800 MILLION?" slides in from the left over it and leans on it.
//  2 "Norman answered: somewhere in that neighborhood." A walnut quote plaque slides in from the left in front, brakes and
//    rocks on its base: a brass plate engraved “Somewhere in that neighborhood.” GREG NORMAN, LIV GOLF CEO. The TV and the
//    two figure cards fall out of focus behind it (a range, not a number).
//  3 "He said the offer was made before he was even in charge." A small manila card glides in from the right, stands on
//    the plaque's base and tips back against the plate: BEFORE HE WAS CEO. The camera eases in on it.
// ═══════════════════════════════════════════════════════════════════════════
const S = "august" as const;
const FOX = word(S, 0, /^Fox/), D700 = word(S, 0, /^\$700/), D800 = word(S, 1, /^\$800/), NOR = word(S, 2, /^Norman/), BEF = word(S, 3, /^before/);

// ── the actions' frames, each on the word that names it ──
export const T: AugT = {
  on: FOX,
  c1: [D700 - 16, D700 + 2],
  c2: [D800 - 14, D800 + 2],
  pl: [NOR - 4, NOR + 14],
  blur: [NOR + 6, NOR + 26],
  sc: [BEF - 12, BEF + 2],
  tip: BEF + 9,
};
const DONE = Math.max(cueEnd(S, 3) + 4, T.tip + 4);

// ── the camera: the eye rides with the view, a little up and to the right ──
const EX = 150, EL = 380, ED = 2400;
const eyeOf = (v: { x: number; y: number }): Eye => ({ x: v.x + EX, y: v.y - EL, D: ED });
type P3 = { x: number; h: number; z: number };
const screenOf = (p: P3, v: { x: number; y: number; z: number }) => {
  const q = project(eyeOf(v), p.x, FLOOR - p.h, p.z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
/** a key that puts place point `p` at screen (sx, sy) at zoom z (solved: the eye moves with the view) */
const keyOn = (p: P3, sx: number, sy: number, z: number) => {
  const v = { x: p.x, y: FLOOR - p.h, z };
  for (let i = 0; i < 40; i++) { const s = screenOf(p, v); v.x += (s.x - sx) / z; v.y += (s.y - sy) / z; }
  return { x: v.x, y: v.y, z };
};
const C1MID = cardPt(C1, { ...C1, lift: 0, visible: true }, C1.w / 2, C1.h / 2);
const PLMID = platePt(PLT.w / 2, PLT.h / 2);
const SCMID = cardPt(SC, { ...SC, lift: 0, visible: true }, SC.w / 2, SC.h / 2);
const K0 = keyOn({ x: HOLE.x + 20, h: HOLE.h, z: ZP }, 540, 990, 1.42);           // close on the picture: the lower-third
const K1 = keyOn(C1MID, 560, 1195, 1.08);                                       // "$700": back onto the cards
const K2 = keyOn({ ...PLMID, x: 490 }, 540, 1290, 0.96);                                      // "Norman": the plaque
const K3 = keyOn({ x: 505, h: (PLMID.h + SCMID.h) / 2, z: (PLMID.z + SCMID.z) / 2 }, 540, 1320, 0.96);   // "before": in on the card
const STORY: CamKey[] = [
  { at: -9999, ...K0, dur: 1 },
  { at: D700 - 15, ...K1, dur: 36 },
  { at: NOR - 4, ...K2, dur: 36 },
  { at: BEF - 10, ...K3, dur: 42 },
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });

// ★ the screen's rules, every frame from the place's first word to its last action: nothing reaches the caption band (the
//   TV's top, the cards' tops, the plaque's board stay below y 662); readable print stays left of x 935 where it lies in
//   y 1000–1700, above y 1495 and right of x 40, once it has landed
{
  const bad: string[] = [];
  const cardBox = (c: Card, p: CardPose, b: readonly [number, number, number, number]) =>
    [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]]].map(([u, v]) => cardPt(c, p, u, v));
  const picPt = (u: number, v: number) => ({ x: HOLE.x - (HOLE.w + 12) / 2 + u, h: HOLE.h + (HOLE.hh + 12) / 2 - v, z: ZP + 2 });
  for (let f = cue(S, 0); f <= DONE; f++) {
    const v = camView(CAM, f);
    const tops: P3[] = [];
    for (const x of [TV.x0, TV.x1]) for (const z of [TV.z, TV.z - TV.d]) tops.push({ x, h: TV.top, z });
    const p1 = poseC1(T, f), p2 = poseC2(T, f), pl = posePL(T, f), ps = poseSC(T, f);
    if (p1.visible) tops.push(...cardBox(C1, p1, [0, 0, C1.w, 0]));
    if (p2.visible) tops.push(...cardBox(C2, p2, [0, 0, C2.w, 0]));
    if (pl.visible) tops.push(...boardTop(pl.dx).map((q) => ({ ...q, h: q.h + pl.lift + 6 })));
    for (const t of tops) { const s = screenOf(t, v); if (s.x > -40 && s.x < 1120 && s.y < 662) bad.push(`f${f}: a top at y ${Math.round(s.y)} (x ${Math.round(s.x)})`); }
    const ink: P3[] = [];
    if (f >= T.on) ink.push(...[[PRINT.lower[0], PRINT.lower[1]], [PRINT.lower[2], PRINT.lower[1]], [PRINT.lower[2], PRINT.lower[3]], [PRINT.lower[0], PRINT.lower[3]]].map(([u, w]) => picPt(u, w)));
    if (f >= T.c1[1]) ink.push(...cardBox(C1, p1, PRINT.card));
    if (f >= T.c2[1]) ink.push(...cardBox(C2, p2, PRINT.card));
    if (f >= T.pl[1]) ink.push(...[[PRINT.plate[0], PRINT.plate[1]], [PRINT.plate[2], PRINT.plate[1]], [PRINT.plate[2], PRINT.plate[3]], [PRINT.plate[0], PRINT.plate[3]]].map(([u, w]) => platePt(u, w)));
    if (f >= T.tip) ink.push(...cardBox(SC, ps, PRINT.small));
    for (const p of ink) {
      const s = screenOf(p, v);
      if (s.y > 1495) bad.push(`f${f}: print at y ${Math.round(s.y)} (x ${Math.round(s.x)})`);
      if (s.y > 1000 && s.x > 935) bad.push(`f${f}: print at x ${Math.round(s.x)}, y ${Math.round(s.y)}`);
      if (s.x < 40) bad.push(`f${f}: print cut at the left (x ${Math.round(s.x)})`);
    }
  }
  const by = new Map<string, number>();
  for (const b of bad) { const f = +b.slice(1, b.indexOf(":")); const k = b.split(": ")[1].split(" at ")[0] + "@" + Math.floor(f / 20) * 20; const y = +(/y (\d+)/.exec(b)?.[1] ?? 0); by.set(k, by.has(k) ? Math.min(by.get(k)!, y) : y); }
  if (bad.length) throw new Error(`august: ${[...by].map(([k, y]) => k + " " + y).join(", ")} :: ${bad.length} screen-rule breaks: ${[...new Set(bad.map((b) => b.replace(/^f\d+: /, "").replace(/\d+/g, "#")))].slice(0, 6).join("; ")}\nfirst: ${bad[0]}\nlast: ${bad[bad.length - 1]}`);
}
// ★ the subjects are big: the picture > 480 px wide as the lower-third is read, card 1 > 500 px on "$700", the plate > 560 px
//   on "somewhere", the small card > 230 px on "charge"
{
  const wide = (a: P3, b: P3, f: number) => screenOf(b, camView(CAM, f)).x - screenOf(a, camView(CAM, f)).x;
  const w0 = wide({ x: HOLE.x - HOLE.w / 2, h: HOLE.h, z: ZP }, { x: HOLE.x + HOLE.w / 2, h: HOLE.h, z: ZP }, T.on + 10);
  const r1 = { ...C1, lift: 0, visible: true }, w1 = wide(cardPt(C1, r1, 0, 150), cardPt(C1, r1, C1.w, 150), D700 + 14);
  const w2 = wide(platePt(0, 120), platePt(PLT.w, 120), NOR + 34);
  const r3 = { ...SC, lift: 0, visible: true }, w3 = wide(cardPt(SC, r3, 0, 60), cardPt(SC, r3, SC.w, 60), T.tip + 30);
  if (w0 < 480 || w1 < 500 || w2 < 560 || w3 < 230) throw new Error(`august: too small on screen (picture ${Math.round(w0)}, card ${Math.round(w1)}, plate ${Math.round(w2)}, small card ${Math.round(w3)} px)`);
}

const BACK = backModel(T), FRONT = frontModel(T);
const RECT_A = { x: -520, y: FLOOR - 720, w: 2120, h: 1000 };
const RECT_B = { x: -760, y: FLOOR - 430, w: 2320, h: 720 };
const LP = (p: P3) => { const q = project(eyeOf(K1), p.x, FLOOR - p.h, p.z); return [q.x, q.y] as const; };
const [px, py] = LP({ x: HOLE.x, h: HOLE.h, z: ZP }), [cx, cy] = LP(C1MID), [qx, qy] = LP(PLMID);

const Comp: React.FC<{ f: number }> = ({ f }) => {
  const e = eyeOf(camView(CAM, f));
  return (
    <>
      <Light keys={CAM} f={f} ground="cream" pools={[[px, py, 560, 400], [cx, cy + 40, 620, 300], [qx, qy + 60, 700, 280]]} />
      <World keys={CAM} f={f}>
        <Obj s={S} g="tv">
          <View3D name="august-back" rect={RECT_A} eye={e} make={BACK} params={{ f }} />
        </Obj>
        <Obj s={S} g="plaque">
          <View3D name="august-front" rect={RECT_B} eye={e} make={FRONT} params={{ f }} />
        </Obj>
      </World>
    </>
  );
};

const SFX: PlaceSfx[] = [
  { s: "click", at: T.on, vol: 0.4, why: "august: the TV clicks on (the CRT line opens into the picture)", mode: "peak" },
  { s: "paper", at: Math.round(T.c1[0] + 0.8 * (T.c1[1] - T.c1[0])), vol: 0.42, why: "august: the $700 cue card slides in and leans on the TV", mode: "peak" },
  { s: "paper", at: Math.round(T.c2[0] + 0.8 * (T.c2[1] - T.c2[0])), vol: 0.4, why: "august: the $800 card slides over it", mode: "peak" },
  { s: "glide", at: T.pl[0] + 5, vol: 0.32, why: "august: the quote plaque slides in from the left", mode: "peak" },
  { s: "flip", at: T.tip, vol: 0.36, why: "august: the small card tips back against the plaque", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp, align: () => "centre", focus: [qx, qy] },
  done: DONE, cam: CAM, sfx: SFX,
};
