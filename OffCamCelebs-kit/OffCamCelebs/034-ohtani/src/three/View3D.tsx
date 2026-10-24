// ══════════════════════════════════════════════════════════════════════════════════════════════
// View3D — one real 3-D object, placed in the 2-D film where its painted version stood (see stage.ts).
//   rect   the canvas's box in its parent's px (the same px the painted object was drawn in)
//   org    where that parent's (0, 0) sits in the construction layer — so the eye, set in layer px, is the same eye for
//          every object of a scene however deep its container (a bar sliding in its slot, a crate on a deck)
//   make   builds the model once (per id); params update it every frame
// Inside a Turn (kit.tsx) the eye swings by −D·tan(yaw): the solids turn with the stage in true parallax.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { createContext } from "preact";
import { useContext } from "preact/hooks";
import type { CSSProperties } from "preact/compat";
import { addJob, viewId, EYE, type Eye, type Model, type Rect } from "./stage";

/** the yaw (deg) of the Turn a view sits in */
export const YawCtx = createContext(0);
/** a scene may move its eye (a low view of the gavel's block, say); in layer px */
export const EyeCtx = createContext<Eye>(EYE);

export function View3D<P>({ name, rect, org = { x: 0, y: 0 }, make, params, eye, localEye, light, style }: {
  name?: string; rect: Rect; org?: { x: number; y: number }; make: () => Model<P>; params: P;
  /** the eye in LAYER px (one eye for a scene's group of objects) */
  eye?: Eye;
  /** or an eye in this view's own px — an object's own three-quarter view (Box3's solids: see common.tsx) */
  localEye?: Eye;
  light?: number; style?: CSSProperties;
}) {
  const yaw = useContext(YawCtx);
  const sceneEye = useContext(EyeCtx);
  const id = viewId(name);
  const e = localEye ?? eye ?? sceneEye;
  const ox = localEye ? 0 : org.x, oy = localEye ? 0 : org.y;
  const local: Eye = { x: e.x - ox - e.D * Math.tan((yaw * Math.PI) / 180), y: e.y - oy, D: e.D };
  addJob({ id, rect, eye: local, make, params, light });
  return (
    <canvas data-g3={id} style={{ position: "absolute", left: rect.x, top: rect.y, width: rect.w, height: rect.h, ...style }} />
  );
}
