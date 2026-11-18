// THE DESK — a black slab that reads as a desk: a satin line along its front edges, an inset writing surface that takes the
// light, and a set-back plinth. Origin: the centre of its TOP surface (things stand on y = 0); depth z = −d/2 … +d/2.
import { THREE } from "../stage";
import { rbox } from "../kit029";
import { SM, type Obj3 } from "../studio";

export type DeskOpts = { w?: number; d?: number; t?: number; drop?: number };
export type DeskP = Record<string, never>;

export const makeDesk = (o: DeskOpts = {}): Obj3<DeskP> => {
  const w = o.w ?? 1500, d = o.d ?? 640, t = o.t ?? 44, drop = o.drop ?? 0;
  const group = new THREE.Group();
  const top = rbox(w, t, d, 7, SM.black());
  top.position.set(0, -t / 2, d / 2);
  group.add(top);
  // the writing surface: a satin graphite inlay a hair proud of the slab, so the top reads as a lit plane from above
  const inlayM = SM.graphite();
  inlayM.roughness = 0.34; inlayM.envMapIntensity = 1.9;
  const inlay = rbox(w - 56, 2, d - 56, 3, inlayM, 1);
  inlay.position.set(0, 0.4, (d - 56) / 2);
  inlay.receiveShadow = true;
  group.add(inlay);
  // satin lines: the top front edge and the bottom front edge
  for (const [y, h] of [[-3.5, 4]] as const) {
    const strip = rbox(w - 10, h, 4, 1.4, SM.edge(), 1);
    strip.position.set(0, y, d / 2 + 2.2);
    group.add(strip);
  }
  if (drop > 0) {
    // the plinth: a set-back body with a satin shadow-gap under the slab, and a kick line at the floor
    const pw = w - 160, pd = d - 160;
    const plinth = rbox(pw, drop, pd, 6, SM.black());
    plinth.position.set(0, -t - drop / 2, pd / 2);
    const front = rbox(pw - 40, drop - 46, 3, 2, SM.graphite(), 1);
    front.position.set(0, -t - drop / 2, pd / 2 + 2.6);
    group.add(plinth, front);
  }
  void THREE;
  return { group, update: () => {} };
};
