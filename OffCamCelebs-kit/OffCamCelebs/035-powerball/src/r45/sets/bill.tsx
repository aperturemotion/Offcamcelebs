import React from "react";
import { clamp01, INOUT } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { billModel, KEYS, TAPE, S0, PITCH, tapeTop, KEYB_FRONT, type BillP } from "../../three/props/bill";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 5 · THE FULL BILL (dark) — a 1950s electric full-keyboard listing adding machine prints the estimate on its tape.
//  0 "And that's not the final bill." We open close on the print head: tear bar, platen, the tape's torn leader. The amount
//    is set (3 · 6 · 3 · 1 lock down in their columns), the motor bar is struck: the case shudders, the keys are released,
//    the platen turns a line and 363.1 rises above the tear bar.
//  1 "At the top federal and New Jersey tax rates, we estimate about 190 million." On "federal" 37.00 % prints (3 · 7, the
//    % key); on "New Jersey" 10.75 % (1 · 7 · 5, %); a line space; on "about" the total key: 189.7 * rises on "190" and the
//    camera pushes in on it. The tape climbs and curls back as it grows; the camera follows it.
// No label: the tape is the machine's own output, and the caption says "we estimate about".
// ═══════════════════════════════════════════════════════════════════════════
const S = "bill" as const;
const FED = word(S, 1, /^federal/), NEWJ = word(S, 1, /^New/), RATES = word(S, 1, /^rates/), ABOUT = word(S, 1, /^about/), N190 = word(S, 1, /^\$?190/);

// ── the cycles: amount keys set (each locks down), then the cycle key; the strike prints, the keys release, the tape advances ──
type Cycle = { set: [number, string][]; go: string; strike: number };
const K = (c: number, r: number) => `${c}:${r}`;
const mk = (strike: number, keys: string[], go: string): Cycle => ({ go, strike, set: keys.map((k, i) => [strike - 4 - 4 * (keys.length - i) - 2, k] as [number, string]) });
const CYCLES: Cycle[] = [
  mk(cue(S, 0) + 32, [K(4, 3), K(3, 6), K(2, 3), K(1, 1)], "MB"),     // 363.1
  mk(FED + 1, [K(3, 3), K(2, 7)], "%"),                                // 37.00 %
  mk(NEWJ + 9, [K(3, 1), K(1, 7), K(0, 5)], "%"),                      // 10.75 %
  mk(RATES + 6, [], "MB"),                                             // a line space before the total
  mk(N190 - 4, [], "*"),                                               // 189.7 *
];
if (CYCLES.length !== TAPE.length) throw new Error("bill: a cycle per tape line");
for (let i = 1; i < CYCLES.length; i++) if ((CYCLES[i].set[0]?.[0] ?? CYCLES[i].strike - 4) < CYCLES[i - 1].strike + 8) throw new Error(`bill: cycle ${i} starts before ${i - 1} is done`);
const ADV_N = 6;
const KT = 8;
const lockKey = (f: number, at: number, rel: number) => {
  if (f <= at) return 0;
  if (f < at + 2) return KT * ((f - at) / 2) ** 2;
  if (f < rel) return KT;
  if (f < rel + 3) return KT * (1 - INOUT((f - rel) / 3));
  if (f < rel + 5) return 0.9 * Math.sin((Math.PI * (f - rel - 3)) / 2);
  return 0;
};
const keysAt = (f: number) => KEYS.map((name) => {
  let v = 0;
  for (const c of CYCLES) {
    for (const [at, k] of c.set) if (k === name) v = Math.max(v, lockKey(f, at, c.strike + 1));
    if (c.go === name) v = Math.max(v, lockKey(f, c.strike - 4, c.strike + 1));
  }
  return v;
});
const advAt = (f: number) => CYCLES.reduce((a, c) => a + INOUT(clamp01((f - c.strike - 1) / ADV_N)), 0);
const printedAt = (f: number) => CYCLES.filter((c) => f >= c.strike).length;
const shakeAt = (f: number) => CYCLES.reduce((a, c) => { const t = f - c.strike + 1; return a + (t > 0 && t < 7 ? 0.6 * Math.abs(Math.sin((Math.PI * t) / 2)) * (1 - t / 7) : 0); }, 0);
const spoolAt = (f: number) => 0.14 * printedAt(f) + 0.14 * CYCLES.reduce((a, c) => a + INOUT(clamp01((f - c.strike) / 4)), 0) * 0.5;

export const BL = {
  cycles: CYCLES.map((c) => ({ keys: c.set.map(([at]) => at + 2), go: c.strike - 2, strike: c.strike, adv: [c.strike + 1, c.strike + 1 + ADV_N] as const, total: c.go === "*" })),
} as const;
export const BL_DONE = cueEnd(S, 1) + 4;

// ── the place (layer px) ──
const FLOOR = 1500, CX = 430, ZM = -20;
const yawAt = (f: number) => -14 + 5 * INOUT(clamp01((f - 860) / 220));
const ST = CYCLES[CYCLES.length - 1].strike;
const STORY: CamKey[] = [
  { at: -9999, x: 446, y: FLOOR - 208, z: 2.3, dur: 1 },                   // close: the print head, the tape's leader
  { at: CYCLES[1].set[0][0] - 8, x: 436, y: FLOOR - 206, z: 2.05, dur: 34 }, // out a little: the keys set, the tape rising
  { at: CYCLES[2].strike + 10, x: 440, y: FLOOR - 226, z: 2.15, dur: 40 },   // up with the tape as it grows
  { at: ST + 4, x: 444, y: FLOOR - 220, z: 2.16, dur: 32 },                  // in on the total
];
export const BL_CAM: CamKey[] = alive(S, STORY, BL_DONE + 44, { amp: 0.5 });
const eyeAt = (f: number) => { const v = camView(BL_CAM, f); return { x: v.x + 420, y: v.y - 520, D: 1900 }; };
// ★ the caption band holds (the tape's top below 662 on screen) and nothing readable sinks under y 1500 (the keyboard's front)
const toScreen = (f: number, lx: number, ly: number, lz: number) => {
  const v = camView(BL_CAM, f), ps = (yawAt(f) * Math.PI) / 180;
  const p = project(eyeAt(f), CX + lx * Math.cos(ps) + lz * Math.sin(ps), FLOOR - ly, ZM - lx * Math.sin(ps) + lz * Math.cos(ps));
  return { x: 540 + (p.x - v.x) * v.z, y: 960 + (p.y - v.y) * v.z };
};
for (let f = 860; f <= BL_DONE + 44; f++) {
  const t = tapeTop(advAt(f));
  const top = toScreen(f, 0, t.y + 2, t.z);
  if (top.y < 662) throw new Error(`bill: the tape's top reaches y ${Math.round(top.y)} on screen at f${f}`);
  for (const lx of [-150, 46]) {
    const fr = toScreen(f, lx, KEYB_FRONT.y, KEYB_FRONT.z);
    if (fr.y > 1500) throw new Error(`bill: the keyboard's front row sinks to y ${Math.round(fr.y)} on screen at f${f}`);
  }
  const fk = toScreen(f, 160, KEYB_FRONT.y, KEYB_FRONT.z);
  if (fk.x > 940 && fk.y > 1000) throw new Error(`bill: the function keys sit under the Reel's buttons at f${f}`);
}
void S0; void PITCH; void ABOUT;

const BILL3D = billModel({ floor: FLOOR, cx: CX, z: ZM });
const paramsAt = (f: number): BillP => ({ keys: keysAt(f), adv: advAt(f), printed: printedAt(f), shake: shakeAt(f), spool: spoolAt(f), yaw: yawAt(f) });

export const Bill: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={BL_CAM} f={f} ground="dark" pools={[[440, 1260, 620, 520], [440, 1220, 260, 220]]} />
    <World keys={BL_CAM} f={f}>
      <Obj s={S} g="adder">
        <View3D name="bill" rect={{ x: -60, y: 860, w: 1000, h: 1160 }} eye={eyeAt(f)} make={BILL3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const BillSet = { id: S, ground: "dark" as const, Comp: Bill, align: () => "centre" as const, focus: [440, 1260] as [number, number] };
