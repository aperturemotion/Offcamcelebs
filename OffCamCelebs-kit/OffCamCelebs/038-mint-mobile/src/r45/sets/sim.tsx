import React from "react";
import { ramp, clamp01, GLIDE, SETTLE, INOUT, TRAVEL } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { simModel, SG, CARD, PH, NANO, TRAY, holeAt, pocketAt, type SimP } from "../../three/props/sim";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 2 · THE SIM (cream) — "Reynolds bought into Mint Mobile in 2019 and fronted its ads."
//  The truck brings the place in CLOSE on a Mint Mobile SIM starter card (Mint's green livery, "mint mobile" lowercase) as it slides in across the desk and settles. On
//  "Mobile" the nano SIM is pushed up out of its punch-out, flips over (contacts down, as a tray takes it) and is carried in an
//  arc to the right; the card's "2019" reads as the voice says it. The camera follows through to a phone lying screen up,
//  side-on, its SIM tray out of the slot: the SIM drops into the tray's pocket and the tray slides home with a click. On
//  "fronted its ads" the phone's display flickers on with a landscape Mint ad starring him (his photo, assets/
//  reynolds_face.png, "mint mobile", an AD badge, its playhead running) and the camera drifts in on it. One label (mint
//  mobile) and one figure (2019) at most in any framing.
// ═══════════════════════════════════════════════════════════════════════════
const S = "sim" as const;
const START = cue(S, 0), MOBILE = word(S, 0, /^Mobile/), Y2019 = word(S, 0, /^2019/), FRONTED = word(S, 0, /^fronted/);

// ── the actions' frames ──
const GLIDE_IN = [START - 2, START + 26] as const;       // the card slides in across the desk
const POP = [MOBILE + 1, MOBILE + 6] as const;            // the SIM is pushed up out of the card
const FLY = [POP[1], POP[1] + 26] as const;               // carried over, turning over, to the tray
const DROP = [FLY[1], FLY[1] + 4] as const;               // into the pocket
const HOME = [DROP[1] + 3, DROP[1] + 11] as const;        // the tray slides home
const SCREEN = FRONTED + 1;                               // the display flickers on
const FLICK = [0.35, 0.05, 0.7, 0.25, 0.9, 1];
if (POP[0] < GLIDE_IN[1] + 2) throw new Error("sim: the SIM pops before the card has settled");
if (HOME[1] > SCREEN) throw new Error("sim: the tray is still moving when the screen lights");

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const H0 = holeAt(), P0 = pocketAt(TRAY.OUT);
const LIFT = 18, ARC = 58;
/** the SIM's pose (desk-local), or null while it sits in the card / once it rides the tray */
const simAt = (f: number): SimP["sim"] => {
  if (f < POP[0] || f >= DROP[1]) return null;
  const yaw0 = (SG.card.yaw * Math.PI) / 180;
  if (f < POP[1]) {
    const t = SETTLE(clamp01((f - POP[0]) / (POP[1] - POP[0])));
    return { p: [H0.x, H0.y + LIFT * t, H0.z], r: [-0.22 * t, yaw0, 0] };
  }
  if (f < FLY[1]) {
    const u = clamp01((f - FLY[0]) / (FLY[1] - FLY[0])), t = INOUT(u);
    const y = lerp(H0.y + LIFT, P0.y + 3, t) + ARC * Math.sin(Math.PI * t);
    const tz = 1 - (1 - t) ** 3;   // it comes forward of the phone's edge early, before it comes down
    return { p: [lerp(H0.x, P0.x, t), y, lerp(H0.z, P0.z, tz)], r: [lerp(-0.22, -Math.PI, t), lerp(yaw0, 0, t), 0] };
  }
  const t = SETTLE(clamp01((f - DROP[0]) / (DROP[1] - DROP[0])));
  return { p: [P0.x, P0.y + 3 * (1 - t), P0.z], r: [-Math.PI, 0, 0] };
};
const outAt = (f: number) => TRAY.OUT * (1 - SETTLE(clamp01((f - HOME[0]) / (HOME[1] - HOME[0]))));
const screenAt = (f: number) => { const k = f - SCREEN; return k < 0 ? 0 : k >= FLICK.length * 2 ? 1 : FLICK[Math.floor(k / 2)]; };
const paramsAt = (f: number): SimP => {
  const g = GLIDE(clamp01((f - GLIDE_IN[0]) / (GLIDE_IN[1] - GLIDE_IN[0])));
  return {
    cardDx: -980 * (1 - g), cardYaw: 9 * (1 - g),
    sim: simAt(f), seated: f >= DROP[1], out: f >= DROP[1] ? outAt(f) : TRAY.OUT,
    screen: screenAt(f), prog: clamp01((f - SCREEN - 6) / 420),
    yaw: 1.2 - 2.4 * ramp(f, START, cueEnd(S, 0) + 40, TRAVEL),
  };
};

// ── the camera: the eye rides with the view (up and to the right, ~36° down onto the desk) ──
const eyeOf = (v: { x: number; y: number }) => ({ x: v.x + 380, y: v.y - 1250, D: 1800 });
/** the view that puts desk point (x, h, z) at screen (sx, sy) at zoom z */
const aim = (x: number, h: number, z: number, zoom: number, sx = 540, sy = 960) => {
  let v = { x, y: SG.floor - h };
  for (let i = 0; i < 12; i++) {
    const q = project(eyeOf(v), x, SG.floor - h, z);
    v = { x: q.x - (sx - 540) / zoom, y: q.y - (sy - 960) / zoom };
  }
  return { ...v, z: zoom };
};
const CARD_V = aim(SG.card.x + 10, 4, SG.card.z, 1.7, 540, 1040);
const PHONE_V = aim(SG.phone.x - 60, PH.H, SG.phone.z + 30, 1.28, 540, 1010);
const SCREEN_V = aim(SG.phone.x + 6, PH.H, SG.phone.z, 1.36, 540, 1000);
const STORY: CamKey[] = [
  { at: -9999, ...CARD_V, dur: 1 },                       // close on the card
  { at: POP[1] - 1, ...PHONE_V, dur: 46 },                // as the SIM leaves: follow it through to the phone ("2019" still in view)
  { at: POP[1] + 46, ...SCREEN_V, dur: 50, drift: true },  // "fronted its ads": a slow drift in on the display
];
const DONE = Math.max(cueEnd(S, 0) + 4, HOME[1] + 2, SCREEN + FLICK.length * 2);
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.35 });

// ★ the caption band holds: every object's top stays below 662 on screen at every frame the place is up
{
  const pts = (f: number): [number, number, number][] => {
    const p = paramsAt(f), out: [number, number, number][] = [];
    const a = ((SG.card.yaw + p.cardYaw) * Math.PI) / 180;
    for (const [u, w] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const lx = (u * CARD.W) / 2, lz = (w * CARD.D) / 2;
      out.push([SG.card.x + p.cardDx + lx * Math.cos(a) + lz * Math.sin(a), CARD.T, SG.card.z - lx * Math.sin(a) + lz * Math.cos(a)]);
    }
    for (const [u, w] of [[-1, -1], [1, -1]]) out.push([SG.phone.x + (u * PH.W) / 2, PH.H, SG.phone.z + (w * PH.D) / 2]);
    if (p.sim) out.push([p.sim.p[0], p.sim.p[1] + NANO.W / 2, p.sim.p[2] - NANO.D / 2]);
    return out;
  };
  for (let f = START - 4; f <= DONE + 44; f++) {
    const v = camView(CAM, f), e = eyeOf(v);
    for (const [x, h, z] of pts(f)) {
      const q = project(e, x, SG.floor - h, z);
      const sx = 540 + (q.x - v.x) * v.z, sy = 960 + (q.y - v.y) * v.z;
      if (sx < -40 || sx > 1120) continue;
      if (sy < 662) throw new Error(`sim: a top (${x.toFixed(0)},${h.toFixed(0)},${z.toFixed(0)}) reaches y ${Math.round(sy)} on screen at f${f}`);
    }
  }
}

const SIM3D = simModel();
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = Math.max(v.y - 960 / v.z - m, SG.floor - 520), y1 = Math.min(v.y + 960 / v.z + m, SG.floor + 520);
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="cream" pools={[[SG.card.x, SG.floor + 40, 520, 340], [SG.phone.x, SG.floor - 10, 640, 360]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="desk">
        <View3D name="sim" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={SIM3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

export const SM = { glide: GLIDE_IN, pop: POP, fly: FLY, drop: DROP, home: HOME, screen: SCREEN, done: DONE } as const;
// ★ 2026-11-22 re-score from the EarnEdits pack (no ping: the display lights in silence)
const SFX: PlaceSfx[] = [
  { s: "pslide", at: GLIDE_IN[0] + 4, end: GLIDE_IN[1], vol: 0.4, why: "the SIM card slides in across the desk", mode: "peak" },
  { s: "cpop", at: POP[0] + 1, vol: 0.45, why: "the nano SIM pops out of its punch-out", mode: "peak" },
  { s: "wsoft", at: FLY[0] + 12, end: FLY[1], vol: 0.3, why: "the SIM is carried over to the tray", mode: "peak" },
  { s: "cmouse", at: DROP[1], vol: 0.4, why: "the SIM drops into the tray's pocket", mode: "peak" },
  { s: "ckey", at: HOME[1], vol: 0.55, why: "the tray clicks home in the phone's slot", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp, align: () => "centre", focus: [SG.card.x, SG.floor] },
  done: DONE, cam: CAM, sfx: SFX,
};
