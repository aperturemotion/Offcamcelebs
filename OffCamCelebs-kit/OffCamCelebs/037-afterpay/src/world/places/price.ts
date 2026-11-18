// ═════════════════════════════════════════════════════════════════════════════════════════════
// THE PRICE (037 v2; SHOTS.md PRICE 1–2), dark stage, hard cut in.
//  PRICE 1 "At the time, each Square share was worth $247."   frame 0 mid-action: ONE share token drops onto a small
//    plinth under the key; the big price board beside it lights on "each" and COUNTS UP to $247, landing on the word.
//  PRICE 2 "Multiply it out, and you get 29 billion."   more tokens rain onto the stack and it SHOOTS UP; the glowing
//    value column grows beside it; solid numerals count up to $29B, landing on "twenty-nine" with a ring of light.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { cue, word } from "../../r45/time";
import { ramp, clamp01, SOFT, SETTLE } from "../../r45/tokens";
import { cut, dolly, crane, type CamKey3 } from "../cam";
import { stdLights, type Place3, type PlaceCue, type Lights } from "../place";
import { K, MAT, block, counter, countUp, short, ring, dropIn } from "../kit";
import { enterOf } from "../timeline";
import { makeBoard } from "../obj/board";
import { makeColumn, COLUMN_H } from "../obj/column";
import { makeTokenStack, TOKEN_T } from "../obj/token";

const S = "price" as const;
const ENTER = enterOf(S);
const EACH = word(S, 0, /^each/), WORTH = word(S, 0, /^worth/), W247 = word(S, 0, /^\$?247/);
const MULT = cue(S, 1), OUT = word(S, 1, /^out/), N29 = word(S, 1, /^\$?29/);
const TOKEN_LAND = ENTER + 6, BOARD_ON = EACH - 4;
const COUNT0 = Math.max(BOARD_ON + 4, W247 - 40);
void WORTH;
const MORE = [W247 + 16, W247 + 27];                                // two more shares land before "Multiply"
const RISE0 = MULT + 3, RISE1 = N29 - 12, COL0 = OUT - 2, FIG0 = N29 - 26;
const N_STACK = 24, PLINTH = 230;
const BOARD_X = -240, STACK_X = 300, COL_X = 640;

export const PR3 = { token: TOKEN_LAND, on: BOARD_ON, count: [COUNT0, W247] as [number, number], more: MORE, rise: [RISE0, RISE1] as [number, number], col: [COL0, N29] as [number, number], fig: [FIG0, N29] as [number, number] } as const;

const countAt = (f: number) => {
  let c = clamp01((f - (TOKEN_LAND - 9)) / 9);                      // the first token
  for (const m of MORE) c += clamp01((f - (m - 7)) / 7);
  c += (N_STACK - 3) * SOFT(clamp01((f - RISE0) / (RISE1 - RISE0)));
  return c;
};
const colAt = (f: number) => (f < COL0 ? 0 : 1 - Math.pow(1 - clamp01((f - COL0) / (N29 - COL0)), 2.4));

export const PricePlace: Place3 = {
  id: S, label: "4 The price: a share on a plinth, the board counts to $247; the stack shoots up into $29B", enter: ENTER, stage: "dark",
  shots: ({ from, to }): CamKey3[] => [
    cut(from, [-1200, 260, 1700], [-170, 600, 0], { fov: 46, focus: [BOARD_X, 620, 60], why: "low under the board, the token drops" }),
    dolly(from + 1, Math.max(30, W247 - from + 4), [-480, 640, 2650], [-110, 640, 0], { fov: 46, ease: SOFT, why: "rise round the board as it counts" }),
    dolly(W247 + 8, Math.max(20, MULT - 4 - (W247 + 8)), [-120, 600, 2700], [-20, 560, 60], { fov: 46, ease: SOFT, why: "drift toward the share on its plinth" }),
    crane(MULT - 2, Math.max(30, N29 - 6 - (MULT - 2)), [280, 1000, 3300], [150, 440, 0], { fov: 46, bulge: [0, 0, 260], why: "crane up and back as the stack shoots up" }),
    dolly(N29 - 4, Math.max(12, to - (N29 - 4) - 1), [250, 900, 3150], [150, 420, 0], { fov: 46, ease: SOFT, why: "settle on the three: $29B" }),
  ],
  lights: (f): Lights => {
    const c = colAt(f);
    const L = stdLights([120, 620, 0], { s: 1.2, key: 3.5, rim: 3.2, back: 2.4, amb: 0.15 });
    L.accent = { pos: [COL_X - 60, 260 + 500 * c, 320], color: K.money, i: 2.6 * c };
    L.back!.i *= 1 + 0.25 * c;
    return L;
  },
  blur: (f) => (f >= TOKEN_LAND - 9 && f <= TOKEN_LAND + 1) || MORE.some((m) => f >= m - 7 && f <= m + 1) || (f >= RISE0 && f <= RISE1 + 2),
  cues: (): PlaceCue[] => [
    { kind: "hit", s: "coin", at: TOKEN_LAND, vol: 0.4, why: "one Square share lands on its plinth" },
    { kind: "hit", s: "click", at: BOARD_ON, vol: 0.3, why: "the price board lights" },
    { kind: "hit", s: "datashort", at: COUNT0, end: W247 + 2, vol: 0.3, why: "the board counts up" },
    { kind: "hit", s: "pingshort", at: W247, vol: 0.35, why: "$247" },
    ...MORE.map((m, i): PlaceCue => ({ kind: "hit", s: "coin", at: m, vol: 0.3, why: `share ${i + 2} lands` })),
    { kind: "move", s: "whooshsoft", at: Math.round((RISE0 + RISE1) / 2), end: RISE1 + 6, vol: 0.45, why: "the stack shoots up" },
    { kind: "hit", s: "data", at: FIG0, end: N29 + 2, vol: 0.3, why: "the numerals count to $29B" },
    { kind: "hit", s: "ping", at: N29, vol: 0.4, why: "$29B lands: a ring of light" },
  ],
  build: () => {
    const group = new THREE.Group();
    const board = makeBoard("price");
    board.group.position.set(BOARD_X, 0, -160);
    board.group.rotation.y = 0.2;
    group.add(board.group);
    const plinth = block(300, PLINTH, 300, 26, MAT.black());
    plinth.position.set(STACK_X, PLINTH / 2, 160);
    group.add(plinth);
    const stack = makeTokenStack("price", N_STACK);
    stack.group.position.set(STACK_X, PLINTH, 160);
    group.add(stack.group);
    const col = makeColumn("price");
    col.group.position.set(COL_X, 0, -60);
    group.add(col.group);
    const fig = counter({ size: 190, color: K.money });
    fig.group.position.set(190, 0, 430);
    fig.group.rotation.y = -0.06;
    group.add(fig.group);
    const halo = ring({ r: 1300, w: 13, dur: 30, color: K.money });
    halo.mesh.position.set(190, 2, 420);
    group.add(halo.mesh);
    const halo2 = ring({ r: 700, w: 10, dur: 24 });
    halo2.mesh.position.set(BOARD_X, 2, 60);
    group.add(halo2.mesh);
    return {
      group,
      update: (f) => {
        board.update({ value: "$" + Math.round(countUp(f, COUNT0, W247, 1, 247)), red: 0, on: ramp(f, BOARD_ON, BOARD_ON + 8, SETTLE) });
        halo2.update(f, W247);
        stack.update({ count: countAt(f) });
        const c = colAt(f);
        col.update({ h: c * Math.min(1.05, ((N_STACK * TOKEN_T + PLINTH - 26) / COLUMN_H)), glow: 0.35 + 0.65 * c });
        fig.group.visible = f >= FIG0;
        fig.set(short(countUp(f, FIG0, N29, 1e9, 29e9)));
        halo.update(f, N29);
      },
    };
  },
};
void dropIn;
