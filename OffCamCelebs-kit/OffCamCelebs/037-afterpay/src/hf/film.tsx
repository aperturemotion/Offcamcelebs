// ═════════════════════════════════════════════════════════════════════════════════════════════
// THE COMPOSITION'S LAYERS — 037 "Afterpay: $29B or $13.8B?" (THE PAYOUTS; rule P12: one complete 3-D world).
//   · "world"    — ONE film-long clip: the whole frame is one rendered 3-D scene filmed by one camera (src/world/world.ts).
//                  The driver draws it; nothing in it is DOM.
//   · "captions" — the narration's small phrases, as text above the picture (the only DOM in the film).
//   · one MARKER clip per place (empty): Studio's timeline reads the film place by place, and plan.json keeps the windows.
// Each layer draws exactly its own frames [from, to) (CLAUDE.md, V34 HF f3410): the driver gates every host.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import { PLACES, WINDOWS } from "../world/film3d";
import { TOTAL_FRAMES } from "../audit/data";
import { Caption, CHUNKS, NO_CAPTION } from "../r45/Caption";
import { F } from "../r45/time";

export type LayerSpec = { id: string; from: number; to: number; track: number; z: number; label: string };
export const WORLD_LAYER = "world";

export const layerSpecs = (): LayerSpec[] => [
  { id: WORLD_LAYER, from: 0, to: TOTAL_FRAMES, track: 0, z: 1, label: "The world: one 3-D scene, one camera" },
  { id: "captions", from: 0, to: TOTAL_FRAMES, track: 1, z: 30, label: "Captions" },
  ...PLACES.map((p, k) => ({ id: p.id, from: WINDOWS[k].from, to: WINDOWS[k].to, track: 2 + k, z: 2, label: p.label })),
];

/** the scene whose phrase is on at f: the latest phrase that has begun */
const sceneAt = (f: number) => {
  let s = CHUNKS[0].scene;
  for (const c of CHUNKS) if (f >= F(c.a) - 2) s = c.scene;
  return s;
};

export const Layer = ({ id, f }: { id: string; f: number }) => {
  if (id !== "captions") return null;   // the world is drawn by the driver; the place markers are empty
  const scene = sceneAt(f);
  if (NO_CAPTION.has(scene)) return null;
  return <Caption scene={scene} f={f} ground="dark" align={() => "centre"} />;
};
