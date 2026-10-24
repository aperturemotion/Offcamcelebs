import React from "react";
import { clamp01, INOUT } from "../tokens";
import { Her } from "../art";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { hookModel, KEY_IDS, SLOTS, REG_H, TAB_RISE, type HookP } from "../../three/props/hook";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 1 · THE HOOK (dark) — an antique brass cash register. ★★★ L1 (Timur, 2026-10-23): the hook MOVES from its first
// frame, its hero arrives with real physics, the camera follows and pushes in, and the hero PRODUCES the numbers itself.
//  0 "Shohei Ohtani signed for 700 million dollars." Frame 1: the register is already falling (y = ½gt², g scaled to its
//    size); it lands at LAND with a short impact compression, a small rebound and a settle, keys and crank shaking, dust
//    puffing from under the plinth. The camera follows it down, then pushes in on the keys and the window: $ · 7 · 0 · 0 ·
//    000 · 000 are struck, and with each the enamel tabs rise in the window — $700,000,000 complete on "million".
//  1 "This year, he's paid 2 million dollars." On "This year" the camera eases back to the crank, which turns once: the tabs
//    drop. Then $ · 2 · 000 · 000: $2,000,000 stands in the window on "million".
// No label: the crest is ornament (the film's label budget is spent elsewhere).
// ═══════════════════════════════════════════════════════════════════════════
const S = "hook" as const;
const SEVEN = word(S, 0, /^\$?700/), MIL1 = word(S, 0, /^million/);
const YEAR = cue(S, 1), TWO = word(S, 1, /^\$?2$/), MIL2 = word(S, 1, /^million/);

// ── THE DROP: constant acceleration. ~744 px of register ≈ 0.6 m, so 1 m ≈ 1240 px and g = 9.81 m/s² ≈ 13.5 px/f² ──
const G = 13.5;
const LAND = 12.4;                       // the frame its feet touch (between f12 and f13)
const H0 = 0.5 * G * LAND * LAND;        // its height at frame 0 (≈ 1040 px: already falling, entering from the top)
const V_IMPACT = G * LAND;               // ≈ 167 px/f
const E = 0.095;                         // restitution: a heavy cabinet barely leaves the floor again
const SQ1 = 0.03, SQN = 2.6;             // the first impact: 3 % compression over 2.6 f
const VB = E * V_IMPACT, TB = (2 * VB) / G;
const LAND2 = LAND + SQN + TB;           // the rebound's second touch
const SQ2 = SQ1 * 0.28, SQN2 = 2;

/** the register's height above rest and its compression at f */
const dropAt = (f: number) => {
  if (f < LAND) return { drop: 0.5 * G * (LAND - f) ** 2, sq: 0 };
  if (f < LAND + SQN) return { drop: 0, sq: SQ1 * Math.sin((Math.PI * (f - LAND)) / SQN) };
  if (f < LAND2) { const t = f - LAND - SQN; return { drop: VB * t - 0.5 * G * t * t, sq: 0 }; }
  if (f < LAND2 + SQN2) return { drop: 0, sq: SQ2 * Math.sin((Math.PI * (f - LAND2)) / SQN2) };
  return { drop: 0, sq: 0 };
};

// ── THE TYPING: each press strikes a key; when it bottoms, its group of tabs rises ──
type Press = { at: number; key: string; slots: number[] };
const K = (k: string) => { const i = KEY_IDS.indexOf(k); if (i < 0) throw new Error(`hook: no key ${k}`); return k; };
// ★ the 7 bottoms on "700" and the last 000 rises on "million"; the strokes between are a typist's even rhythm
const P700: Press[] = [
  { at: SEVEN - 12, key: K("$"), slots: [0] },
  { at: SEVEN - 3, key: K("7"), slots: [1] },
  { at: SEVEN + 3, key: K("0"), slots: [2] },
  { at: SEVEN + 8, key: K("0"), slots: [3] },
  { at: MIL1 - 11, key: K("000"), slots: [4, 5, 6, 7] },
  { at: MIL1 - 6, key: K("000"), slots: [8, 9, 10, 11] },
];
// the clear: on "This year" the crank turns once; past its half-turn the tabs fall back, one after another
const CRANK_A = YEAR - 8, CRANK_N = 24;
const DROP_A = CRANK_A + 11;
const P2M: Press[] = [
  { at: TWO - 13, key: K("$"), slots: [2] },
  { at: TWO - 3, key: K("2"), slots: [3] },
  { at: MIL2 - 10, key: K("000"), slots: [4, 5, 6, 7] },
  { at: MIL2 - 5, key: K("000"), slots: [8, 9, 10, 11] },
];
const FIG_SWAP = DROP_A + 12;             // every tab is down: their faces swap to the second figure
const KEY_T = 15;                         // a key's travel (px)
/** a key's travel at t frames after its strike: down fast, a beat at the bottom, sprung back up with a small rebound off
 *  its top stop (a key cannot rise past its rest) */
const keyStroke = (t: number) => {
  if (t <= 0) return 0;
  if (t < 2) return KEY_T * (t / 2) ** 2;
  if (t < 3) return KEY_T;
  if (t < 6) return KEY_T * (1 - (t - 3) / 3) ** 2;
  if (t < 8.5) return 1.6 * Math.sin((Math.PI * (t - 6)) / 2.5);
  return 0;
};
/** a tab's rise at t frames after its key bottoms: sprung up (accelerating), it strikes its top stop and settles back on it */
const tabRise = (t: number) => {
  if (t <= 0) return 0;
  if (t < 3.5) return (t / 3.5) ** 2;
  const u = t - 3.5;
  return 1 - 0.045 * Math.abs(Math.sin((Math.PI * u) / 2.6)) * Math.exp(-u / 2.2);
};
/** a tab's fall at t frames after it is released: under gravity (½gt² over its travel), a small bounce off the bottom */
const tabFall = (t: number) => {
  if (t <= 0) return 1;
  const tf = Math.sqrt((2 * TAB_RISE) / G);   // ≈ 3.8 f
  if (t < tf) return 1 - (0.5 * G * t * t) / TAB_RISE;
  const u = t - tf;
  return 0.018 * Math.abs(Math.sin((Math.PI * u) / 2.2)) * Math.exp(-u / 2);   // ≤ 1.7 px: it stays behind the lip
};

const keysAt = (f: number) => {
  const out = KEY_IDS.map(() => 0);
  for (const p of [...P700, ...P2M]) { const i = KEY_IDS.indexOf(p.key); out[i] = Math.max(out[i], keyStroke(f - p.at)); }
  // ★ the impact: every key's spring is jolted down and rings off its top stop, each at its own rate
  const t = f - LAND;
  if (t > 0) KEY_IDS.forEach((_, i) => {
    const w = 2.3 + 0.9 * ((i * 0.618) % 1), a = 4 + 3 * ((i * 0.382) % 1);
    out[i] = Math.max(out[i], a * Math.exp(-t / 3.4) * Math.abs(Math.sin((Math.PI * t) / w)));
  });
  return out;
};
const tabsAt = (f: number) => {
  const out = Array.from({ length: SLOTS }, () => 0);
  const rise = (ps: Press[]) => ps.forEach((p) => p.slots.forEach((s, j) => { out[s] = Math.max(out[s], tabRise(f - (p.at + 2) - j * 0.7)); }));
  if (f < DROP_A) { rise(P700); return out; }
  // the clear: each risen tab falls in turn, right to left; then the second figure rises
  for (let s = 0; s < SLOTS; s++) out[s] = tabFall(f - DROP_A - (SLOTS - 1 - s) * 0.55);
  rise(P2M);
  return out;
};
const crankAt = (f: number) => {
  const turn = 2 * Math.PI * INOUT(clamp01((f - CRANK_A) / CRANK_N));
  // the impact rocks the arm on its boss
  const t = f - LAND;
  const rock = t > 0 ? 0.09 * Math.exp(-t / 5) * Math.sin((2 * Math.PI * t) / 7) : 0;
  return turn + rock;
};

// ★ the faces swap only while every tab is down, and before the second figure's first tab rises
{
  const fallen = Array.from({ length: SLOTS }, (_, s) => tabFall(FIG_SWAP - DROP_A - (SLOTS - 1 - s) * 0.55));
  if (fallen.some((v) => v > 0.02)) throw new Error("hook: a tab is still up when the faces swap");
  if (P2M[0].at + 2 <= FIG_SWAP) throw new Error("hook: the second figure starts rising before the faces swap");
}

export const HK = {
  land: Math.ceil(LAND),                                   // the first frame on the floor
  presses: [...P700, ...P2M].map((p) => p.at + 2),         // each key bottoms
  done700: P700[P700.length - 1].at + 2 + 4,               // the last tab of $700,000,000 stands
  crankA: CRANK_A, crankN: CRANK_N,
  dropA: DROP_A,
  done2: P2M[P2M.length - 1].at + 2 + 4,                   // the last tab of $2,000,000 stands
} as const;

const FLOOR = 1500;
// ★ his photo (when it lands): left of the register, his foot below the frame's foot
const HIM = { cx: 230, top: 1060, D: 760 };
// the register's top on the layer at rest (the crest's tip)
const TOP = FLOOR - REG_H;

// ── THE CAMERA: it follows the fall, then pushes in on the keys and the window; back to the crank on "This year"; in again for
//    the second figure. Between these story moves it breathes (camera.tsx alive) ──
const STORY: CamKey[] = [
  { at: -9999, x: 540, y: 622, z: 0.95, dur: 1 },                                   // frame 1: high, the register falling in
  { at: -4, x: 540, y: 1012, z: 1.05, dur: 36 },                                     // follow it down to the floor
  { at: 34, x: 546, y: 990, z: 1.22, dur: 36 },                                      // push in: the keys and the window
  { at: CRANK_A - 6, x: 600, y: 1016, z: 1.1, dur: 30 },                             // ease back and right: the crank turns
  { at: CRANK_A + 25, x: 556, y: 984, z: 1.27, dur: 30 },                            // in again on the window: $2,000,000
];
export const HK_CAM: CamKey[] = alive("hook", STORY, 214, { amp: 0.5 });
// ★ the caption band holds: once the register is down, its crest stays below 660 on screen at every frame (and at every key)
for (let f = Math.ceil(LAND); f <= 214; f++) {
  const v = camView(HK_CAM, f);
  const y = 960 + (TOP - 6 - v.y) * v.z;
  if (y < 662) throw new Error(`hook: the crest reaches y ${Math.round(y)} on screen at f${f} (the caption band ends at 660)`);
}

const HOOK3D = hookModel({ floor: FLOOR, cx: 540, z: -40 });
/** the eye moves with the camera (a camera that really travels): up and to the right of its view, as the rig wants */
const eyeAt = (f: number) => { const v = camView(HK_CAM, f); return { x: v.x + 420, y: v.y - 610, D: 1900 }; };

const paramsAt = (f: number): HookP => {
  const { drop, sq } = dropAt(f);
  return {
    drop, sq,
    // a slow quarter-turn of the yaw as it falls, stopped by the floor; then the place's few degrees across its hold
    yaw: f < LAND ? 5.5 - 1.5 * (f / LAND) : 4 - 5 * INOUT(clamp01((f - LAND) / (200 - LAND))),
    keys: keysAt(f), tabs: tabsAt(f), fig: f >= FIG_SWAP ? 1 : 0, crank: crankAt(f), dust: f - LAND,
  };
};

/** ★ MOTION BLUR while it falls: a real shutter (180°, half a frame open) smears a body moving ~150 px a frame. The blur is
 *  vertical only and sized to the register's speed across the frame (its fall less the camera's follow), in layer px. The
 *  ground behind it is plain, so blurring the whole view shows only on the register. */
const blurAt = (f: number) => {
  const yObj = (t: number) => -dropAt(t).drop, yCam = (t: number) => camView(HK_CAM, t).y;
  const v = Math.abs(yObj(f + 0.25) - yObj(f - 0.25) - (yCam(f + 0.25) - yCam(f - 0.25))) * 2;
  return f < LAND ? 0.14 * v : 0;
};

export const Hook: React.FC<{ f: number }> = ({ f }) => {
  const p = paramsAt(f);
  const blur = blurAt(f);
  // the view's box reaches up as far as the falling register does (its top plus a margin), down past the frame's foot
  const top = Math.min(560, Math.floor(TOP - p.drop - 80));
  return (
    <>
      <Light keys={HK_CAM} f={f} ground="dark" pools={[[540, 1000, 900, 760]]} />
      <World keys={HK_CAM} f={f}>
        <Obj s={S} g="register">
          {blur > 0.3 && (
            <svg width={0} height={0} style={{ position: "absolute" }}>
              <filter id="hk-vblur" x="0" y="-20%" width="100%" height="140%" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation={`0 ${blur.toFixed(2)}`} />
              </filter>
            </svg>
          )}
          <View3D name="hook" rect={{ x: -220, y: top, w: 1520, h: 2020 - top }} eye={eyeAt(f)} make={HOOK3D} params={p}
            style={blur > 0.3 ? { filter: "url(#hk-vblur)" } : undefined} />
        </Obj>
        <Obj s={S} g="him"><Her tagId="him" cx={HIM.cx} top={HIM.top} D={HIM.D} /></Obj>
      </World>
    </>
  );
};
// ★ the place is done 5 f after its last word (the last tab has stood since HK.done2); the deal's truck waits for it
export const HK_DONE = Math.max(HK.done2 + 6, cueEnd(S, 1) + 5);
export const HookSet = { id: S, ground: "dark" as const, Comp: Hook, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
