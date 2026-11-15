import React from "react";
import { clamp01, INOUT } from "../tokens";
import { word, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { hookModel, SEGS, SIGN_H, GLYPH_BOT, GLYPH_RIGHT, type HookP } from "../../three/props/hook";
import { hash } from "../../three/kit029";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 1 · THE HOOK (dark) — a store-window LOTTERY JACKPOT SIGN (an LED jackpot display on a trunnion stand).
// ★★★ L1: the hook MOVES from its first frame, its hero arrives with real physics, the camera follows and pushes in, and the
// hero PRODUCES the number itself.
//  0 "The headlines said one Powerball ticket won 847 million dollars." Frame 1: the sign is already falling (y = ½gt², g
//    scaled to its size); it lands on its feet at LAND with a short impact compression and a small rebound, and the cabinet,
//    hung on its two studs, SWINGS on them as a damped pendulum and settles. As it lands it powers up: the header strip's
//    backlight flickers on and the LED modules light segment by segment, left to right, each segment flickering on as a real
//    one does: $847,000,000 is complete at 0.9 s. On "$847" (the music's drop) the display blinks and surges.
//  1 "The winner will never take home that number." The camera pushes in until the digits fill the frame; on "never" the
//    display browns out (the supply sags, modules stutter); on "that number" it dies, module by module, and the header
//    goes dark (module by module). No text, no label: the number the headline printed fails on its own sign.
// ═══════════════════════════════════════════════════════════════════════════
const S = "hook" as const;
const W847 = word(S, 0, /^\$?847/);
const THE1 = word(S, 1, /^The$/), NEVER = word(S, 1, /^never/), THAT = word(S, 1, /^that/);

// ── THE DROP: constant acceleration. The 880-px cabinet is a 30-inch (0.76 m) sign: 1 m ≈ 1160 px, g ≈ 12.6 px/f² ──
const G = 12.6;
const LAND = 12.9;                       // the frame its pads touch (frame 13 is the first on the floor)
const V_IMPACT = G * LAND;
const E = 0.085;                         // restitution: a steel stand barely leaves the floor again
const SQ1 = 0.022, SQN = 2.4;
const VB = E * V_IMPACT, TB = (2 * VB) / G;
const LAND2 = LAND + SQN + TB;
const SQ2 = SQ1 * 0.25, SQN2 = 2;
const dropAt = (f: number) => {
  if (f < LAND) return { drop: 0.5 * G * (LAND - f) ** 2, sq: 0 };
  if (f < LAND + SQN) return { drop: 0, sq: SQ1 * Math.sin((Math.PI * (f - LAND)) / SQN) };
  if (f < LAND2) { const t = f - LAND - SQN; return { drop: VB * t - 0.5 * G * t * t, sq: 0 }; }
  if (f < LAND2 + SQN2) return { drop: 0, sq: SQ2 * Math.sin((Math.PI * (f - LAND2)) / SQN2) };
  return { drop: 0, sq: 0 };
};
// ── THE SWING: in free fall the hung cabinet keeps the slight tilt it was dropped with (no torque while weightless); the
//    landing's deceleration swings it toward hanging plumb and it rings down as a damped physical pendulum on its studs
//    (centre of mass 18 px under the axis: T ≈ 1 s; the clamped knobs damp it) ──
const TILT0 = 0.05;                      // rad (≈ 2.9°), its top tipped back as it falls
const T_SW = 30, TAU = 11;
const swingAt = (f: number) => {
  if (f < LAND) return -TILT0;
  const t = f - LAND;
  return -TILT0 * Math.exp(-t / TAU) * Math.cos((2 * Math.PI * t) / T_SW);
};

// ── THE DISPLAY ──
// the power-up: the header's backlight flickers on as the feet touch; the lit segments come on in reading order, each with a
// real LED's flicker (on, a dip, on), the last of them steady at LIT
const PWR = Math.ceil(LAND) + 1;
const SEG_A = PWR + 1, SEG_SPAN = 8.6;
const litOrder = SEGS.map((s, k) => ({ s, k })).filter((x) => x.s.lit);
const startOf = new Map<number, number>(litOrder.map(({ k }, j) => [k, SEG_A + SEG_SPAN * (j / (litOrder.length - 1)) + 0.7 * hash(k, 3, 5)]));
const flick = (t: number) => (t < 0 ? 0 : t < 1 ? 1 : t < 2 ? 0.18 : 1);
const LIT = Math.ceil(Math.max(...startOf.values()) + 2);
// the blink and surge on "$847"
const BLINK = W847;
const blinkAt = (f: number) => {
  const t = f - BLINK;
  if (t >= -3 && t < -1) return 0;
  if (t === -1) return 0.45;
  if (t >= 0 && t < 10) return 1 + 0.4 * (1 - t / 10) ** 2;
  return 1;
};
// the brownout on "never": the supply sags, the whole display dips and some segments stutter
const BROWN = NEVER;
const DIPS = [0.5, 0.92, 0.32, 0.78, 0.55, 0.82, 0.9, 0.96];
const sag = (f: number) => { const t = f - BROWN; return t >= 0 && t < DIPS.length ? DIPS[t] : 1; };
// (whole modules stutter, never single segments: a half-lit digit would read as another number)
const stutter = (k: number, f: number) => { const c = SEGS[k].cell, t = f - BROWN; return t >= 1 && t < 4 && hash(c, 11, 3) < 0.3 && hash(c, t, 9) < 0.7 ? 0.12 : 1; };
// the death on "that number": each module goes out at its own frame (with a last flicker), the header with it
const DIE_A = THAT, DIE_N = 11;
const deathOf = (k: number) => DIE_A + DIE_N * hash(SEGS[k].cell, 21, 4);
const dying = (k: number, f: number) => { const t = f - deathOf(k); return t < -2 ? 1 : t < -1 ? 0.25 : t < 0 ? 0.8 : 0; };
const DEAD = Math.ceil(DIE_A + DIE_N);
const HEAD_OFF = DIE_A + 8;

const segAt = (f: number) => SEGS.map((s, k) => {
  if (!s.lit) return 0;
  const v = flick(f - startOf.get(k)!);
  return v * blinkAt(f) * sag(f) * stutter(k, f) * dying(k, f);
});
const headAt = (f: number) => {
  const t = f - PWR;
  const on = t < 0 ? 0 : [0.75, 0.08, 0.9, 0.45][t] ?? 1;
  const off = f >= HEAD_OFF + 2 ? 0 : f >= HEAD_OFF ? [0.35, 0.7][f - HEAD_OFF] : 1;
  return on * Math.min(1, 0.55 + 0.45 * sag(f)) * off;
};

export const HK = {
  land: Math.ceil(LAND),     // the first frame on the floor
  pwr: PWR,                  // the header flickers on
  segA: SEG_A,               // the first segment lights
  lit: LIT,                  // $847,000,000 complete and steady
  blink: BLINK,              // the blink and surge on "$847"
  brown: BROWN,              // the brownout on "never"
  dieA: DIE_A, dead: DEAD,   // the display dies on "that number"
} as const;

// ── THE PLACE ──
const FLOOR = 700 + SIGN_H;                       // the cabinet's top at layer y 700
const TOP = FLOOR - SIGN_H;                       // the cabinet's top on the layer at rest
const G_BOT = FLOOR - GLYPH_BOT;
const CX = 540;

// ── THE CAMERA: high as the sign falls in, follows it down, pushes in on the digits; on "The winner" in again until they
//    fill the frame. Between the story moves it breathes (camera.tsx alive) ──
const STORY: CamKey[] = [
  { at: -9999, x: 540, y: 610, z: 0.95, dur: 1 },                 // frame 1: high, the sign falling in
  { at: -4, x: 540, y: 935, z: 1.03, dur: 32 },                    // follow it down to the floor
  { at: 44, x: 540, y: 918, z: 1.15, dur: 34 },                    // push in on the digits, before the drop on "$847"
  { at: THE1 - 2, x: 540, y: 922, z: 1.18, dur: 44 },              // "The winner…": in until the digits fill the frame (★ at 1.3 the sign overflowed the frame and the last 0 was cut)
];
export const HK_DONE = Math.max(DEAD + 4, cueEnd(S, 1) + 4);
export const HK_CAM: CamKey[] = alive("hook", STORY, HK_DONE + 44, { amp: 0.3 });
// ★ the caption band holds: once the sign is down, its top stays below 660 on screen; and the glyph row, which reaches past
//   x 940 whenever the camera is in, stays above y 1000 (the Reel's buttons) at every frame
for (let f = SEG_A; f <= HK_DONE + 44; f++) {
  const v = camView(HK_CAM, f);
  const sy = (y: number) => 960 + (y - v.y) * v.z, sx = (x: number) => 540 + (x - v.x) * v.z;
  if (sy(TOP - 5) < 662) throw new Error(`hook: the sign's top reaches y ${Math.round(sy(TOP - 5))} on screen at f${f}`);
  if (sx(CX + GLYPH_RIGHT) > 940 && sy(G_BOT + 3) > 998) throw new Error(`hook: the digits reach y ${Math.round(sy(G_BOT + 3))} under the buttons at f${f}`);
}

const HOOK3D = hookModel({ floor: FLOOR, cx: CX, z: -40 });
/** the eye moves with the camera (a camera that really travels): up and to the right of its view */
const eyeAt = (f: number) => { const v = camView(HK_CAM, f); return { x: v.x + 420, y: v.y - 610, D: 1900 }; };

const paramsAt = (f: number): HookP => {
  const { drop, sq } = dropAt(f);
  return {
    drop, sq,
    yaw: f < LAND ? 6 - 1.6 * (f / LAND) : 4.4 - 5.4 * INOUT(clamp01((f - LAND) / (HK_DONE - LAND))),
    swing: swingAt(f), seg: segAt(f), head: headAt(f), dust: f - LAND,
  };
};

/** MOTION BLUR while it falls: a 180° shutter smears a body moving ~150 px a frame (its fall less the camera's follow) */
const blurAt = (f: number) => {
  const yObj = (t: number) => -dropAt(t).drop, yCam = (t: number) => camView(HK_CAM, t).y;
  const v = Math.abs(yObj(f + 0.25) - yObj(f - 0.25) - (yCam(f + 0.25) - yCam(f - 0.25))) * 2;
  return f < LAND ? 0.14 * v : 0;
};

export const Hook: React.FC<{ f: number }> = ({ f }) => {
  const p = paramsAt(f);
  const blur = blurAt(f);
  const top = Math.min(520, Math.floor(TOP - p.drop - 90));
  return (
    <>
      <Light keys={HK_CAM} f={f} ground="dark" pools={[[540, 930, 920, 640]]} />
      <World keys={HK_CAM} f={f}>
        <Obj s={S} g="sign">
          {blur > 0.3 && (
            <svg width={0} height={0} style={{ position: "absolute" }}>
              <filter id="hk-vblur" x="0" y="-20%" width="100%" height="140%" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation={`0 ${blur.toFixed(2)}`} />
              </filter>
            </svg>
          )}
          <View3D name="hook" rect={{ x: -260, y: top, w: 1600, h: 2020 - top }} eye={eyeAt(f)} make={HOOK3D} params={p}
            style={blur > 0.3 ? { filter: "url(#hk-vblur)" } : undefined} />
        </Obj>
      </World>
    </>
  );
};
export const HookSet = { id: S, ground: "dark" as const, Comp: Hook, align: () => "centre" as const, focus: [540, 920] as [number, number] };
