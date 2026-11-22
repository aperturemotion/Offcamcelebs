import React from "react";
import { ramp, SETTLE, GLIDE, EXIT, SOFT, SMOOTH } from "../tokens";
import { word, cue } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { fairModel, TR_TOP, TR_PLATE, TR_NAME, PADDLE, type FairP, type FairGeo } from "../../three/props/fair";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 7 · TO BE FAIR (dark) — an auction room's objects, no people.
//  0 "To be fair, he never called it his billion." The crane brings the place up CLOSE on a silver loving-cup trophy on a
//    black lacquer plinth: its brass plate engraved "$1.35 BILLION"; under it the winner's name plate, BLANK. As the line
//    goes on the camera settles down onto the blank plate: nobody's name is on it (one figure, no label).
//  1 "He joked T-Mobile beat a last-minute bid from his mom." The camera follows through to the right: a gavel on its sound
//    block, and the bidders' paddles held up from below the frame. On "T-Mobile" the T-MOBILE paddle goes up (a bid) and
//    comes down; on "last-minute bid" the MOM paddle shoots up, higher; then T-MOBILE goes up again, higher still, and on
//    "mom" the gavel comes down on the block (sold); MOM's paddle sinks away. A joke, kept light and physical.
// ═══════════════════════════════════════════════════════════════════════════
const S = "fair" as const;
const C0 = cue(S, 0), JOKED = cue(S, 1), TMO = word(S, 1, /^T-Mobile/), BID = word(S, 1, /^bid/), MOM = word(S, 1, /^mom/);
const HE = word(S, 0, /^he$/);
const FLOOR = 1520;
const GEO: FairGeo = {
  floor: FLOOR, trophy: { x: 300, z: 60 }, gavel: { x: 1080, z: 40 },
  pads: [{ x: 1085, z: 400, lean: -4, turn: 7 }, { x: 870, z: 430, lean: 6, turn: 12 }],
};
const [TM, MO] = [0, 1];

// ── THE BIDS (each paddle's foot height over the floor; its head is below the frame at HID) ──
const HID = -1150;
const UP1 = [TMO, TMO + 14] as const, DN1 = [BID - 12, BID + 2] as const;
const UPM = [BID - 8, BID + 6] as const, DNM = [MOM + 2, MOM + 14] as const;
const UP2 = [BID + 9, MOM - 1] as const;
const LIFT = [MOM - 15, MOM - 5] as const;   // the gavel: up on its knob over 10 f, down onto the block on "mom"
const DONE = DNM[1] + 1;

// ── THE CAMERA: close on the trophy's plates; on "he never called it" down onto the blank name plate; on "He joked" through
//    to the auction (the gavel and the bidders' paddles) ──
const eyeOf = (v: { x: number; y: number; z: number }) => { const D = 1900 / v.z ** 0.6; return { x: v.x + 0.22 * D, y: v.y - 0.36 * D, D }; };
const aim = (w: [number, number, number], z: number, sx: number, sy: number) => {
  const D = 1900 / z ** 0.6, s = D / (D - w[2]);
  return { x: w[0] - ((sx - 540) / z - 0.22 * D * (1 - s)) / s, y: -w[1] - ((sy - 960) / z + 0.36 * D * (1 - s)) / s, z };
};
const TRW = (p: [number, number, number]): [number, number, number] => [GEO.trophy.x + p[0], -FLOOR + p[1], GEO.trophy.z - 115 + p[2]];
const STORY: CamKey[] = [
  { at: -9999, ...aim(TRW(TR_PLATE), 1.42, 540, 1250), dur: 1 },
  { at: HE, ...aim(TRW(TR_NAME), 1.46, 540, 1425), dur: 46, drift: true },
  { at: JOKED - 2, x: 930, y: FLOOR - 360, z: 1.1, dur: 44 },
];
const CAM: CamKey[] = alive(S, STORY, DONE + 80, { amp: 0.3 });
const eyeAt = (f: number) => eyeOf(camView(CAM, f));
const screen = (f: number, [x, y, z]: [number, number, number]) => {
  const v = camView(CAM, f), e = eyeAt(f), q = project(e, x, -y, z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
/** a paddle's head top (world) for foot height h */
const padTop = (i: number, h: number): [number, number, number] => [GEO.pads[i].x, -FLOOR + h + PADDLE.total, GEO.pads[i].z];
/** ★ the foot height that puts paddle i's head top at screen y `sy` at frame f (bisection: screen y falls as it rises) */
const riseTo = (i: number, f: number, sy: number) => {
  let lo = -2000, hi = 1200;
  for (let k = 0; k < 50; k++) { const m = (lo + hi) / 2; if (screen(f, padTop(i, m)).y > sy) lo = m; else hi = m; }
  return Math.round((lo + hi) / 2);
};
const H1 = riseTo(TM, UP1[1] + 30, 800), HM = riseTo(MO, UPM[1], 715), H2 = riseTo(TM, UP2[1], 690);
const padsAt = (f: number) => {
  const tm = f < DN1[0] ? HID + (H1 - HID) * ramp(f, UP1[0], UP1[1], GLIDE)
    : f < UP2[0] ? H1 + (HID - H1) * ramp(f, DN1[0], DN1[1], EXIT)
    : HID + (H2 - HID) * ramp(f, UP2[0], UP2[1], GLIDE);
  const mo = f < DNM[0] ? HID + (HM - HID) * ramp(f, UPM[0], UPM[1], GLIDE) : HM + (HID - HM) * ramp(f, DNM[0], DNM[1], EXIT);
  return [tm, mo];
};
const liftAt = (f: number) => (f < LIFT[0] ? 0 : f <= LIFT[1] ? ramp(f, LIFT[0], LIFT[1], SOFT) : 1 - ramp(f, LIFT[1], MOM, SETTLE));
const paramsAt = (f: number): FairP => ({ lift: liftAt(f), pads: padsAt(f), yaw: 4 - 7 * ramp(f, C0, DONE, SMOOTH) });
export const FR = { up1: UP1, dn1: DN1, upm: UPM, dnm: DNM, up2: UP2, lift: LIFT, hit: MOM, done: DONE } as const;

// ★ the caption band over every frame: the trophy's lip and every paddle's head stay below y 662; a hidden paddle's head is
//   wholly below the frame; and nothing readable (a paddle's face) under the Reel's buttons (x > 940, y 1000–1700)
for (let f = 1300; f <= DONE + 80; f++) {
  const tr = screen(f, TRW([0, TR_TOP, 0])), tr2 = screen(f, TRW([0, TR_TOP, -117]));
  for (const s of [tr, tr2]) if (s.x > -60 && s.x < 1140 && s.y < 662) throw new Error(`fair: the trophy reaches y ${Math.round(s.y)} on screen at f${f}`);
  const p = paramsAt(f);
  p.pads.forEach((h, i) => {
    const t = screen(f, padTop(i, h));
    if (t.y < 662) throw new Error(`fair: paddle ${i} reaches y ${Math.round(t.y)} on screen at f${f}`);
    const c = screen(f, padTop(i, h - PADDLE.r)), held = Math.abs(h - paramsAt(f + 1).pads[i]) < 0.5;
    if (held && c.y > 1000 && c.y < 1700 && c.x + 120 > 940) throw new Error(`fair: paddle ${i}'s face under the Reel's buttons at f${f}`);
  });
}
const hidden = (i: number, f: number) => screen(f, padTop(i, HID)).y > 1940;
for (const [i, f] of [[TM, UP1[0]], [TM, DN1[1]], [TM, UP2[0]], [MO, UPM[0]], [MO, DNM[1]]] as const)
  if (!hidden(i, f)) throw new Error(`fair: paddle ${i} is not below the frame at f${f}`);

const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = Math.max(v.y - 960 / v.z - m, FLOOR - 900), y1 = v.y + 960 / v.z + m;
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};
const M3D = fairModel(GEO);
const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={[[GEO.trophy.x, FLOOR - 260, 520, 560], [GEO.gavel.x - 160, FLOOR - 300, 760, 600]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="auction">
        <View3D name="fair" rect={rectAt(f)} eye={eyeAt(f)} make={M3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

// ★ 2026-11-22 re-score: the paddles rise on soft air (their drops are silent), a real gavel on its block, a low weight under it
const sfx: PlaceSfx[] = [
  { s: "wsoft", at: UP1[0] + 3, end: UP1[1], vol: 0.3, why: "the T-MOBILE paddle goes up", mode: "peak" },
  { s: "wsmall1", at: UPM[0] + 3, end: UPM[1], vol: 0.32, why: "MOM's last-minute paddle shoots up", mode: "peak" },
  { s: "wsoft", at: UP2[0] + 3, end: UP2[1], vol: 0.3, why: "the T-MOBILE paddle goes up again, higher", mode: "peak" },
  { s: "gavel", at: MOM, vol: 0.7, why: "the gavel strikes the block: sold", mode: "peak" },
  { s: "lowhit", at: MOM, vol: 0.3, why: "the gavel's weight", mode: "peak" },
];
export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp, align: () => "centre", focus: [GEO.gavel.x - 160, FLOOR - 300] },
  done: DONE, cam: CAM, sfx,
};
