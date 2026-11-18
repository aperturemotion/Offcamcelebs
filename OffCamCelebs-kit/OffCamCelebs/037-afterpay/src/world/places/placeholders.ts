// PLACEHOLDER PLACES (engine v2): each object place of script v2 as a lit set with ONE chunky block that drops in, a lit
// plate, a counting figure and a ring of light, and a slow push-in, so the film plays end to end on the real take while
// the place-workers build. Each also shows the kit in use: copy the pattern, then replace the file's entry in film3d.ts.
import * as THREE from "three";
import type { SceneId } from "../../audit/data";
import { cue } from "../../r45/time";
import { SOFT } from "../../r45/tokens";
import { cut, dolly, type CamKey3, type Vec } from "../cam";
import { stdLights, lightStageLights, type Place3, type Stage } from "../place";
import { MAT, K, block, litPlate, counter, countUp, short, ring, dropIn } from "../kit";
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
          fig.set(short(countUp(f, land, land + 26, figure * 0.2, figure)));
          halo.update(f, land + 26);
        },
      };
    },
  };
};
export const HookPlace = placeholder("hook", "1 Hook (placeholder)", "HOOK", 29e9);
export const DealPlace = placeholder("deal", "3 The deal (placeholder)", "THE DEAL", 0.375e9);
export const PricePlace = placeholder("price", "4 The price (placeholder, light stage)", "THE PRICE", 247, { stage: "light" });
export const ClosePlace = placeholder("close", "6 The close (placeholder)", "THE CLOSE", 13.8e9, { color: K.red });
export const FairPlace = placeholder("fair", "7 To be fair (placeholder)", "TO BE FAIR", 29e9);
export const VerdictPlace = placeholder("verdict", "8 The verdict (placeholder)", "THE VERDICT", 13.8e9);
