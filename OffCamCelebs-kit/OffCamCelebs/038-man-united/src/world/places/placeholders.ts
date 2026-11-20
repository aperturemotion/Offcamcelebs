// PLACEHOLDER PLACES (engine v2): each object place of script v2 as a lit set with ONE chunky block that drops in, a lit
// plate, a counting figure and a ring of light, and a slow push-in, so the film plays end to end on the real take while
// the place-workers build. Each also shows the kit in use: copy the pattern, then replace the file's entry in film3d.ts.
import * as THREE from "three";
import type { SceneId } from "../../audit/data";
import { cue } from "../../r45/time";
import { SOFT } from "../../r45/tokens";
import { cut, dolly, type CamKey3, type Vec } from "../cam";
import { stdLights, lightStageLights, type Place3, type Stage } from "../place";
import { MAT, K, block, rbox, litPlate, counter, countUp, short, ring, dropIn, freeText } from "../kit";
import { enterOf } from "../timeline";

const placeholder = (id: SceneId, label: string, name: string, figure: number, o: { stage?: Stage; color?: string } = {}): Place3 => {
  const enter = enterOf(id), land = Math.max(enter + 12, cue(id, 0) + 6);
  const C: Vec = [0, 330, 0];
  return {
    id, label, enter, stage: o.stage ?? "dark",
    shots: ({ from, to }): CamKey3[] => [
      cut(from, [-900, 420, 2500], [0, 360, 0], { fov: 42, focus: C, why: "enter" }),
      dolly(from + 1, Math.max(30, to - from - 2), [-520, 470, 1750], [0, 380, 0], { fov: 42, ease: SOFT, why: "slow push-in" }),
    ],
    lights: () => (o.stage === "light" ? lightStageLights(C) : stdLights(C)),
    blur: (f) => dropIn(f, land).fast,
    cues: () => [{ kind: "hit", s: "thud", at: land, vol: 0.4, why: `${name}: the block lands` }],
    build: () => {
      const group = new THREE.Group();
      const body = new THREE.Group();
      body.add(block(760, 520, 560, 34, MAT.black()));
      const plate = litPlate([name], { size: 58, color: K.white });
      plate.group.position.set(0, 300, 280 + plate.d / 2);
      body.add(plate.group);
      const fig = counter({ size: 90, color: o.color ?? K.money });
      freeText(fig.group, "a placeholder figure standing in front of its block");
      fig.group.position.set(0, 0, 440);
      const halo = ring({ r: 1100 });
      group.add(body, fig.group, halo.mesh);
      return {
        group,
        update: (f) => {
          const d = dropIn(f, land);
          body.visible = d.on;
          body.position.y = d.y;
          plate.setLit((f - land) / 10);
          fig.group.visible = f >= land;
          fig.set(short(countUp(f, land, land + 26, figure * 0.2, figure), "£"));
          halo.update(f, land + 26);
        },
      };
    },
  };
};
// ★ 038 placeholders (2026-11-20): the place-workers replace each entry in film3d.ts
export const HookPlace = placeholder("hook", "1 Set A: the crane plinth (placeholder)", "THE TAKEOVER", 790e6);
export const SidesPlace = placeholder("sides", "3 Set B: two sides (placeholder)", "2005", 540e6);
export const BondsPlace = placeholder("bonds", "4 Set C: the bonds (placeholder, light stage)", "THE BONDS", 504e6, { stage: "light" });
export const MoneyPlace = placeholder("money", "5 Set D: where the money came from (placeholder)", "THE MONEY", 1e9);
export const BoardPlace = placeholder("board", "7 Set E: the scoreboard (placeholder)", "BORROWINGS", 689e6, { color: K.red });
export const FairPlace = placeholder("fair", "8 Set F: to be fair (placeholder)", "TO BE FAIR", 6);
export const VerdictPlace = placeholder("verdict", "9 Set A again: the bookend (placeholder)", "THE BILL", 790e6, { color: K.red });

// ── ★ 038 SHOWCASE placeholders: the shared objects (obj/crest, flag, nameplate, calendar, vault, cash, coin) standing in
//    their first sets, so the film shows them and the world checks test them while the place-workers build ──
import { makeCrest } from "../obj/crest";
import { makeFlagPanel, makeFlagBall } from "../obj/flag";
import { makeNameplate } from "../obj/nameplate";
import { makeCalendar } from "../obj/calendar";
import { makeVault } from "../obj/vault";
import { makeCashStack } from "../obj/cash";
import { makeCoin } from "../obj/coin";
import { plateOn } from "../kit";

const showcase = (id: SceneId, label: string, C: Vec, cam: [Vec, Vec, Vec, Vec], fill: (g: THREE.Group) => ((f: number) => void) | void): Place3 => {
  const enter = enterOf(id);
  return {
    id, label, enter, stage: "dark",
    shots: ({ from, to }): CamKey3[] => [
      cut(from, cam[0], cam[1], { fov: 42, focus: C, why: "enter" }),
      dolly(from + 1, Math.max(30, to - from - 2), cam[2], cam[3], { fov: 42, ease: SOFT, why: "slow push-in" }),
    ],
    lights: () => stdLights(C),
    build: () => { const group = new THREE.Group(); const up = fill(group); return { group, update: (f) => up?.(f) }; },
  };
};
const plinth = (g: THREE.Group, x: number, w: number, h: number) => { const p = block(w, h, w * 0.8, 26, MAT.black()); p.position.x = x; g.add(p); return p; };

export const HookShowcase = showcase("hook", "1 Set A: the crane plinth (showcase placeholder)", [0, 520, 0],
  [[-700, 760, 2200], [0, 620, 0], [-420, 700, 1650], [0, 640, 0]], (g) => {
    plinth(g, 0, 640, 300);
    const crest = makeCrest("hook", 520); crest.group.position.set(0, 300 + 270, 0); g.add(crest.group);
    const beam = rbox(1500, 90, 120, 16, MAT.black()); beam.position.set(0, 1380, -60); g.add(beam);
    const flag = makeFlagPanel("hook", 380, 200); flag.group.position.set(-420, 1380, 10); g.add(flag.group);
    const name = makeNameplate("hook", ["THE GLAZER FAMILY", "TAMPA, FLORIDA"], { size: 52 }); name.group.position.set(0, 0, 420); g.add(name.group);
    return (f: number) => { crest.group.rotation.y = Math.sin(f / 40) * 0.25; };
  });
export const SidesShowcase = showcase("sides", "3 Set B: two sides (showcase placeholder)", [0, 420, 0],
  [[0, 650, 2600], [0, 520, 0], [0, 600, 2000], [0, 520, 0]], (g) => {
    plinth(g, -520, 420, 260); plinth(g, 520, 420, 260);
    const ball = makeFlagBall("sides", 170); ball.group.position.set(-520, 260 + 170, 0); g.add(ball.group);
    const crest = makeCrest("sides", 380); crest.group.position.set(520, 260 + 200, 0); g.add(crest.group);
    const n1 = makeNameplate("sides1", ["THE GLAZER FAMILY", "TAMPA, FLORIDA"], { size: 34 }); n1.group.position.set(-520, 0, 300); g.add(n1.group);
    const n2 = makeNameplate("sides2", ["MANCHESTER UNITED", "OLD TRAFFORD"], { size: 34 }); n2.group.position.set(520, 0, 300); g.add(n2.group);
    const cal = makeCalendar("sides", ["2005", "2010"]); cal.group.scale.setScalar(0.55); cal.group.position.set(0, 0, -500); g.add(cal.group);
    return (f: number) => { ball.group.rotation.y = f / 60; cal.update({ year: 0, flip: 0 }); };
  });
export const MoneyShowcase = showcase("money", "5 Set D: the money (showcase placeholder)", [0, 640, 0],
  [[-900, 800, 2500], [0, 640, 0], [-500, 760, 1900], [0, 660, 0]], (g) => {
    const v = makeVault("money"); v.label("LOANS"); g.add(v.group);
    const cash = makeCashStack("money", "LOANS", { bricks: 3, cols: 2 }); cash.group.position.set(820, 0, 420); g.add(cash.group);
    const coins = [0, 1, 2, 3, 4].map((i) => { const c = makeCoin("money" + i); c.group.position.set(420 + (i % 2) * 20, 7 + i * 15, 700); g.add(c.group); return c; });
    void coins; void plateOn;
    return (f: number) => { v.update({ door: Math.min(1, Math.max(0, (f % 120) / 60)), wheel: Math.min(1, (f % 120) / 30) }); };
  });
