// THE DESK — a black slab with a satin front edge. Origin: the centre of its TOP surface (things stand on y = 0);
// its depth runs from z = −d/2 to +d/2.
import { THREE } from "../stage";
import { rbox } from "../kit029";
import { SM, type Obj3 } from "../studio";

export type DeskOpts = { w?: number; d?: number; t?: number; drop?: number };
export type DeskP = Record<string, never>;

export const makeDesk = (o: DeskOpts = {}): Obj3<DeskP> => {
  const w = o.w ?? 1500, d = o.d ?? 640, t = o.t ?? 44, drop = o.drop ?? 0;
  const group = new THREE.Group();
  const top = rbox(w, t, d, 6, SM.black());
  top.position.set(0, -t / 2, d / 2);
  group.add(top);
  const strip = rbox(w - 8, 5, 4, 1.5, SM.edge(), 1);
  strip.position.set(0, -t + 6, d / 2 + 2.5);
  group.add(strip);
  if (drop > 0) {
    // a plinth under it, set back, so the slab reads as a desk and not a floating plank
    const plinth = rbox(w - 160, drop, d - 160, 6, SM.graphite());
    plinth.position.set(0, -t - drop / 2, (d - 160) / 2);
    group.add(plinth);
  }
  void THREE;
  return { group, update: () => {} };
};
