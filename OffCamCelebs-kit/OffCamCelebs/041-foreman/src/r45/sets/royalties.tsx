import React from "react";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import {
  royaltiesModel, RY, pageAt, pageTouch, stackAt, stackRest, pagePts, pageInk, stackPts, tagPts, tagInk,
  type RoyT, type P3,
} from "../../three/props/royalties";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 4 · ROYALTIES (cream) — the filing, then the money it shows.
//  0 "Salton's own SEC filings show those royalties." The place arrives close on the table as a letter-size page glides in
//    from the near side on its own air and touches down on "filings": Salton's 8-K, in typewriter type: SECURITIES AND
//    EXCHANGE COMMISSION, FORM 8-K, SALTON, INC., the date line and dense small type (Items 2 and 7, the signatures).
//  1 "$38 million in one year," On "$38" the camera pulls back as a stack of real $100 straps (two rows of seven) slides
//    in from the right beside the page and lands with weight; its manila tag on top reads $38,096,000 / FISCAL 1999. On
//    "one year" the camera pushes in on the tag.
//  2 "then $16.6 million in just three months." The camera pulls back and down as a second, smaller stack (two rows of
//    three) slides in in front of the first and lands on "three months": $16,644,000 / 13 WEEKS. ★ The next sentence starts
//    at once (26.50 s), so the place is done by the sentence's last word: done = cueEnd(royalties, 2), no pad.
// ═══════════════════════════════════════════════════════════════════════════
const S = "royalties" as const;
const FILINGS = word(S, 0, /^filings/);
const D38 = word(S, 1, /^\$38/), ONE = word(S, 1, /^one/);
const D16 = word(S, 2, /^\$16/), THREE = word(S, 2, /^three/);

// ── the actions' frames: each thing is on the table as the voice names it ──
export const T: RoyT = { page: FILINGS + 2, s1: D38 + 12, s2: THREE + 4 };
const DONE = cueEnd(S, 2);
if (stackRest(T.s2) > DONE) throw new Error(`royalties: the 13-week stack is still moving at f${stackRest(T.s2)}, past done (f${DONE})`);
if (DONE > cueEnd(S, 2)) throw new Error("royalties: done must be ≤ cueEnd(royalties, 2): the buyout's sentence starts at once");

// ── the camera: the eye rides with the view, up and a little right, looking down onto the table ──
const EL = 1550;
const eyeOf = (v: { x: number; y: number }): Eye => ({ x: v.x + 160, y: v.y - EL, D: 1800 });
/** the view that fits `pts` (layer coords) into the screen box l…r, t…b, centred in it */
const fit = (pts: P3[], l: number, r: number, t: number, b: number) => {
  let v = { x: 540, y: RY.floor - 200, z: 1 };
  for (let i = 0; i < 80; i++) {
    const e = eyeOf(v), q = pts.map(([x, y, z]) => project(e, x, y, z));
    const x0 = Math.min(...q.map((p) => p.x)), x1 = Math.max(...q.map((p) => p.x));
    const y0 = Math.min(...q.map((p) => p.y)), y1 = Math.max(...q.map((p) => p.y));
    const z = Math.min((r - l) / (x1 - x0), (b - t) / (y1 - y0));
    v = { x: (x0 + x1) / 2 - ((l + r) / 2 - 540) / z, y: (y0 + y1) / 2 - ((t + b) / 2 - 960) / z, z };
  }
  return v;
};
const REST = 99999;
const PG = pageAt(T, REST), S1 = stackAt(T, 0, REST), S2 = stackAt(T, 1, REST);
const PAGE_V = fit(pagePts(PG), 120, 930, 700, 1470);
const S1_V = fit([...stackPts(0, S1), ...pagePts(PG)], -40, 920, 740, 1420);
const TAG1_V = fit(stackPts(0, S1), 170, 910, 720, 1420);
const END_V = fit([...stackPts(0, S1), ...stackPts(1, S2)], 140, 940, 720, 1600);
const STORY: CamKey[] = [
  { at: -9999, ...PAGE_V, dur: 1 },          // close on the page as the place arrives
  { at: D38 - 14, ...S1_V, dur: 40 },         // "$38": back, the stack sliding in beside the page
  { at: ONE - 10, ...TAG1_V, dur: 32 },       // "one year": in on its tag
  { at: D16 + 24, ...END_V, dur: 40 },        // "$16.6 … three months": back and down, the second stack sliding in in front
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });
if ((globalThis as unknown as { process?: { env: Record<string, string> } }).process?.env.ROY_DEBUG)
  console.log("royalties views", JSON.stringify({ PAGE_V, S1_V, TAG1_V, END_V }));
const eyeAt = (f: number) => eyeOf(camView(CAM, f));

// ★ the screen's rules, every frame the place can show: no top reaches the caption band (y < 662); once landed, print
//   stays above the Reel's caption strip (y 1490), left of x 930 where it lies in y 1000–1700, and is never cut at the left
//   while it is the subject
const scr = (f: number, p: P3) => {
  const v = camView(CAM, f), q = project(eyeAt(f), p[0], p[1], p[2]);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
{
  const BAD: string[] = [];
  for (let f = cue(S, 0) - 6; f <= DONE + 44; f++) {
    const pp = pageAt(T, f), a = stackAt(T, 0, f), b = stackAt(T, 1, f);
    const tops: [string, P3[]][] = [];
    if (pp.visible) tops.push(["the page", pagePts(pp)]);
    if (a.visible) tops.push(["the FY1999 stack", stackPts(0, a)]);
    if (b.visible) tops.push(["the 13-week stack", stackPts(1, b)]);
    for (const [what, pts] of tops) for (const p of pts) {
      const s = scr(f, p);
      if (s.x > -40 && s.x < 1120 && s.y < 662) BAD.push(`${what}: a top reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`);
    }
    const ink: [string, P3[], boolean][] = [];
    // the page's print from its touchdown until the camera leaves it for the stack; each tag's from its landing on
    if (f >= T.page && f < STORY[1].at) ink.push(["the 8-K cover", pageInk(pp, "cover"), true], ["the 8-K small type", pageInk(pp, "body"), true]);
    if (f >= T.s1) ink.push(["the FISCAL 1999 tag", tagInk(0, a), true]);
    if (f >= T.s2) ink.push(["the 13 WEEKS tag", tagInk(1, b), true]);
    for (const [what, pts] of ink) {
      const q = pts.map((p) => scr(f, p));
      if (Math.max(...q.map((s) => s.x)) < 0 || Math.min(...q.map((s) => s.x)) > 1080) continue;   // off screen
      for (const s of q) {
        if (s.y > 1490) BAD.push(`${what}: print reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`);
        if (s.y > 1000 && s.x > 930) BAD.push(`${what}: print reaches x ${Math.round(s.x)} at y ${Math.round(s.y)}, f${f}`);
        if (s.x < 40) BAD.push(`${what}: print cut at the left (x ${Math.round(s.x)}) at f${f}`);
        if (s.y < 662) BAD.push(`${what}: print in the caption band (y ${Math.round(s.y)}) at f${f}`);
      }
    }
  }
  if (BAD.length) throw new Error(`royalties: ${BAD.length} screen-rule breaks:\n` + [...new Set(BAD.map((m) => m.replace(/: (a top|print).*$/, ": $1")))].slice(0, 8).join("\n") + `\nfirst: ${BAD[0]}\nlast: ${BAD[BAD.length - 1]}`);
  // ★ the subjects are big: the page ≥ 600 px wide as "filings" is said; the FY1999 tag ≥ 420 px wide on "one year"; at the
  //   end both tags ≥ 380 px wide
  const wide = (f: number, pts: P3[]) => { const q = pts.map((p) => scr(f, p).x); return Math.max(...q) - Math.min(...q); };
  const w0 = wide(FILINGS + 4, pagePts(PG)), w1 = wide(ONE + 24, tagPts(0, S1)), w2 = Math.min(wide(DONE, tagPts(0, S1)), wide(DONE, tagPts(1, S2)));
  if (w0 < 600 || w1 < 420 || w2 < 380) throw new Error(`royalties: too small on screen (page ${Math.round(w0)}, tag on "one year" ${Math.round(w1)}, tags at the end ${Math.round(w2)} px)`);
}

const M3D = royaltiesModel(T);
const rectAt = (f: number) => {
  // ★ the canvas reaches 320 px past every screen edge (past the arriving truck's mask at −150 and the leaving crane's at
  //   −40): its border is never on screen where the place shows
  const v = camView(CAM, f), m = 320 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m, y0 = v.y - 960 / v.z - m, y1 = v.y + 960 / v.z + m;
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};
const LP = (v: { x: number; y: number }, p: P3) => { const q = project(eyeOf(v), p[0], p[1], p[2]); return [q.x, q.y] as const; };
const [pgx, pgy] = LP(PAGE_V, [RY.page.x, RY.floor, RY.page.z]);
const [s1x, s1y] = LP(S1_V, [RY.s1.x, RY.floor - 60, RY.s1.z]);
const [s2x, s2y] = LP(END_V, [RY.s2.x, RY.floor - 30, RY.s2.z]);

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="cream" pools={[[pgx, pgy, 620, 520], [s1x, s1y, 560, 420], [s2x, s2y, 560, 380]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="table">
        <View3D name="royalties" rect={rectAt(f)} eye={eyeAt(f)} make={M3D} params={{ f }} />
      </Obj>
    </World>
  </>
);

const SFX: PlaceSfx[] = [
  { s: "paper", at: pageTouch(T), vol: 0.4, why: "royalties: the 8-K page glides in and touches down on the table", mode: "peak" },
  { s: "stack", at: T.s1, vol: 0.42, why: "royalties: the FY1999 stack of straps slides in and lands with weight", mode: "peak" },
  { s: "stack", at: T.s2, vol: 0.36, why: "royalties: the smaller 13-week stack lands in front of it", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp, align: () => "centre", focus: [pgx, pgy] },
  done: DONE, cam: CAM, sfx: SFX,
};
