import React from "react";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import {
  noneModel, NONE_FLOOR, FR, QB, FO, TR, poseA, poseB, poseC, poseD, coverAt, footA, footB, footC, footD,
  inkA, inkB, inkC, inkD, hullA, hullB, hullD, type NoneTiming, type Pose,
} from "../../three/props/none";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 6 · NOTHING ON RECORD (cream) — four quick beats, one real object each, all on one floor; each new one slides in
// from the right as the last leaves to the left.
//  0 "And Tiger?" The hand-over slides his framed photo back in: a black lacquered desk frame on its easel strut.
//  1 "He has never confirmed any number." A cream card in a walnut base slides in beside the photo, brakes and rocks on its
//    base: an EMPTY QUOTE, its marks holding only "$" and a blank rule, signed TIGER WOODS.
//  2 "No contract." Photo and card leave as a manila legal folder glides in, CONTRACT on its tab and stamped on its cover;
//    on "contract" the cover swings open over its fold and lands: the folder is empty.
//  3 "No document." The folder leaves as a walnut letter tray slides in, DOCUMENTS in the brass holder on its lip, and
//    rocks to rest: empty. The next hand-over carries it away.
// ═══════════════════════════════════════════════════════════════════════════
const S = "none" as const;
const C1 = cue(S, 1), E1 = cueEnd(S, 1), C2 = cue(S, 2), E2 = cueEnd(S, 2);
const CON = word(S, 2, /^contract/i), DOC = word(S, 3, /^document/i), E3 = cueEnd(S, 3);

// ── the actions' frames, each on its words ──
export const T: NoneTiming = {
  bIn: [C1 - 6, C1 + 10],          // the card is in as "He has never" is said
  aOut: [E1 - 14, E1 + 2], bOut: [E1 - 12, E1 + 4],   // photo and card leave on "any number"
  cIn: [C2 - 18, C2],              // the folder is down on "No"
  cOpen: [CON - 2, CON + 10],      // and open on "contract"
  cOut: [E2 + 4, E2 + 18],
  dIn: [DOC - 10, DOC + 6],        // the tray is in on "document"
};
const DONE = Math.max(E3 + 4, T.dIn[1] + 8);

// ── the camera: the eye rides with the view, up and a little right, looking down on the floor (~40°) ──
const EL = 1300, EX = 200, ED = 1800;
const eyeOf = (v: { x: number; y: number }): Eye => ({ x: v.x + EX, y: v.y - EL, D: ED });
const STORY: CamKey[] = [
  { at: -9999, x: 540, y: 1000, z: 1, dur: 1 },          // the photo and the card, side by side
  { at: T.aOut[0] + 10, x: 540, y: 950, z: 1.15, dur: 30 },   // as they leave, push in on the floor for the folder and the tray
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });

type P3 = { x: number; h: number; z: number };
const scr = (f: number, p: P3) => {
  const v = camView(CAM, f), q = project(eyeOf(v), p.x, NONE_FLOOR - p.h, p.z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};

// ★ the screen's rules, every frame from the place's landing to the hand-over out: nothing reaches the caption band (y < 662);
//   once an object has landed (until it starts to leave) its print stays left of x 930 in y 1000–1700, above y 1490, and
//   inside the frame's left edge
{
  const bad: string[] = [];
  const A0 = cue(S, 1) + 14;   // the hand-over in is done (expo: it has 1–2 px left)
  for (let f = A0; f <= DONE + 44; f++) {
    const a = poseA(T, f), b = poseB(T, f), c = poseC(T, f), d = poseD(T, f), cv = coverAt(T, f);
    const tops: [string, P3[], Pose][] = [["photo", hullA(a), a], ["card", hullB(b), b], ["folder", inkC(c, cv), c], ["tray", hullD(d), d]];
    for (const [n, pts, p] of tops) if (p.visible) for (const q of pts) {
      const s = scr(f, q);
      if (s.x > -40 && s.x < 1120 && s.y < 662) bad.push(`${n} reaches y ${Math.round(s.y)} at f${f}`);
    }
    const inks: [string, P3[], boolean][] = [
      ["photo", inkA(a), f < T.aOut[0]],
      ["card", inkB(b), f >= T.bIn[1] && f < T.bOut[0]],
      ["folder", inkC(c, cv), f >= T.cIn[1] && f < T.cOut[0]],
      ["tray", inkD(d), f >= T.dIn[1]],
    ];
    for (const [n, pts, landed] of inks) if (landed) for (const q of pts) {
      const s = scr(f, q);
      if (s.y > 1490) bad.push(`${n}'s print reaches y ${Math.round(s.y)} at f${f}`);
      if (s.y > 1000 && s.x > 930) bad.push(`${n}'s print reaches x ${Math.round(s.x)} at y ${Math.round(s.y)}, f${f}`);
      if (s.x < 40) bad.push(`${n}'s print is cut at the left (x ${Math.round(s.x)}) at f${f}`);
    }
  }
  if (bad.length) throw new Error(`none: ${bad.length} screen-rule breaks: ${[...new Set(bad.map((m) => m.replace(/ at f\d+.*$/, "")))].slice(0, 6).join("; ")}; first: ${bad[0]}`);
}
// ★ nothing passes through anything: every pair of objects on screen together has disjoint footprints on the floor
{
  const bad: string[] = [];
  for (let f = cue(S, 0) - 12; f <= DONE + 44; f++) {
    const a = poseA(T, f), b = poseB(T, f), c = poseC(T, f), d = poseD(T, f), cv = coverAt(T, f);
    const fp = [["photo", a.visible && footA(a)], ["card", b.visible && footB(b)], ["folder", c.visible && footC(c, cv)], ["tray", d.visible && footD(d)]] as const;
    for (let i = 0; i < fp.length; i++) for (let j = i + 1; j < fp.length; j++) {
      const p = fp[i][1], q = fp[j][1];
      if (!p || !q) continue;
      if (p.x0 < q.x1 && q.x0 < p.x1 && p.z0 < q.z1 && q.z0 < p.z1) bad.push(`${fp[i][0]} meets ${fp[j][0]} at f${f}`);
    }
  }
  const first = new Map<string, string>();
  for (const m of bad) { const k = m.replace(/ at f\d+$/, ""); if (!first.has(k)) first.set(k, m); }
  if (bad.length) throw new Error(`none: objects meet: ${[...first.values()].join("; ")}`);
}
// ★ the subjects are big: each one's width on screen as its line is spoken
{
  const wide = (f: number, l: P3, r: P3) => scr(f, r).x - scr(f, l).x;
  const fa = cue(S, 1) + 14, fb = T.bIn[1] + 4, fc = T.cOpen[1], fd = T.dIn[1] + 4;
  const a = poseA(T, fa), b = poseB(T, fb), c = poseC(T, fc), d = poseD(T, fd);
  const wa = wide(fa, { x: a.x - FR.w / 2, h: FR.h / 2, z: a.z }, { x: a.x + FR.w / 2, h: FR.h / 2, z: a.z });
  const wb = wide(fb, { x: b.x - QB.cw / 2, h: 200, z: b.z }, { x: b.x + QB.cw / 2, h: 200, z: b.z });
  const wc = wide(fc, { x: c.x - FO.w / 2, h: 0, z: FO.zh - FO.d / 2 }, { x: c.x + FO.w / 2, h: 0, z: FO.zh - FO.d / 2 });
  const wd = wide(fd, { x: d.x - TR.w / 2, h: TR.hf, z: d.z + TR.d / 2 }, { x: d.x + TR.w / 2, h: TR.hf, z: d.z + TR.d / 2 });
  if (wa < 400 || wb < 340 || wc < 520 || wd < 560) throw new Error(`none: too small on screen (photo ${Math.round(wa)}, card ${Math.round(wb)}, folder ${Math.round(wc)}, tray ${Math.round(wd)} px)`);
}

const M3D = noneModel(T);
// the view's canvas: the frame and a wide margin each side (objects enter and leave beyond it, off screen)
const RECT = { x: -440, y: 420, w: 1960, h: 1360 };
const LP = (p: P3) => { const q = project(eyeOf(STORY[0]), p.x, NONE_FLOOR - p.h, p.z); return [q.x, q.y] as const; };
const [fx, fy] = LP({ x: 520, h: 120, z: -300 });

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="cream" pools={[[fx, fy, 820, 520]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="floor">
        <View3D name="none" rect={RECT} eye={eyeOf(camView(CAM, f))} make={M3D} params={{ f }} />
      </Obj>
    </World>
  </>
);

const SFX: PlaceSfx[] = [
  { s: "glide", at: T.bIn[0] + 4, vol: 0.3, why: "none: the quote card slides in on its base", mode: "peak" },
  { s: "paper", at: Math.round(T.cIn[0] + 0.8 * (T.cIn[1] - T.cIn[0])), vol: 0.4, why: "none: the folder touches down", mode: "peak" },
  { s: "flip", at: Math.round(T.cOpen[0] + 0.85 * (T.cOpen[1] - T.cOpen[0])), vol: 0.42, why: "none: the folder's cover falls open", mode: "peak" },
  { s: "glide2", at: T.dIn[0] + 4, vol: 0.3, why: "none: the letter tray slides in", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp, align: () => "centre", focus: [fx, fy] },
  done: DONE, cam: CAM, sfx: SFX,
};
