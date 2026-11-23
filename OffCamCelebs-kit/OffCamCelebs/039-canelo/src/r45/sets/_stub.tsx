import React from "react";
import { cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { THREE, makeFloor, type Model } from "../../three/stage";
import { rbox, col } from "../../three/kit029";
import type { SceneId } from "../../audit/data";
import { SCENE_CUES } from "../../audit/data";
import type { PlaceDef } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// A PLACEHOLDER PLACE (038 skeleton, 2026-11-21): a plain block on the place's floor, so the film builds and times while the
// real place is made. Each real place replaces its import in Film.tsx (sets/<id>.tsx exporting <Id>Set and <ID>_DONE).
// ═══════════════════════════════════════════════════════════════════════════
const stubModel = (floor: number, tint: string) => (): Model<{ t: number }> => {
  const root = new THREE.Group();
  const fl = makeFloor({ y: floor, x0: -600, x1: 1700, z0: -900, z1: 700, reflect: 0.2, shadow: 0.5 });
  root.add(fl);
  const m = new THREE.MeshPhysicalMaterial({ color: col(tint), roughness: 0.5, metalness: 0.1, clearcoat: 0.2 });
  const b = rbox(420, 300, 300, 18, m, 3);
  b.position.set(540, -floor + 150, 150);
  b.userData.obj = "stub";
  root.add(b);
  return { root, update: () => undefined };
};

export const makeStub = (id: SceneId, ground: "dark" | "cream", tint: string): PlaceDef => {
  const FLOOR = 1450;
  const DONE = cueEnd(id, SCENE_CUES[id] - 1) + 4;
  const CAM: CamKey[] = alive(id, [{ at: -9999, x: 540, y: 1000, z: 1, dur: 1 }], DONE + 44, { amp: 0.3 });
  const M3D = stubModel(FLOOR, tint);
  const eyeAt = (f: number) => { const v = camView(CAM, f); return { x: v.x + 420, y: v.y - 610, D: 1900 }; };
  const Comp: React.FC<{ f: number }> = ({ f }) => (
    <>
      <Light keys={CAM} f={f} ground={ground} pools={[[540, 1250, 780, 560]]} />
      <World keys={CAM} f={f}>
        <Obj s={id} g="stub">
          <View3D name={id} rect={{ x: -260, y: 700, w: 1600, h: 1320 }} eye={eyeAt(f)} make={M3D} params={{ t: f }} />
        </Obj>
      </World>
    </>
  );
  return { set: { id, ground, Comp, align: () => "centre" as const, focus: [540, 1150] as [number, number] }, done: DONE, cam: CAM, sfx: [] };
};
