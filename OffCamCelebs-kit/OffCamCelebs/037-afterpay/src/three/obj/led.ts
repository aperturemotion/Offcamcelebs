// THE LED SHARE-PRICE BOARD — a black housing on two legs, the price in lit digits, the date under it.
// Origin: the middle of its feet, on the floor (y = 0).
import { THREE, mesh } from "../stage";
import { rbox } from "../kit029";
import { SM, C, textTex, litFace, halo, type Obj3 } from "../studio";

export type LedOpts = { key: string; w?: number; h?: number; legs?: number; title?: string };
/** value: the price shown (two decimals); date: the line under it; fall: 0 = khaki, 1 = red with a down mark; on: 0…1 */
export type LedP = { value: number; date: string; fall?: number; on?: number };

export const makeLed = (o: LedOpts): Obj3<LedP> => {
  const w = o.w ?? 640, h = o.h ?? 300, legs = o.legs ?? 220, D = 46;
  const group = new THREE.Group();
  const house = rbox(w, h, D, 12, SM.black());
  house.position.set(0, legs + h / 2, D / 2);
  const rim = rbox(w + 10, h + 10, D - 14, 14, SM.edge());
  rim.position.set(0, legs + h / 2, D / 2 - 7);
  group.add(rim, house);
  for (const s of [-1, 1]) {
    const leg = mesh(new THREE.CylinderGeometry(7, 7, legs, 16), SM.edge());
    leg.position.set(s * w * 0.34, legs / 2, 0);
    const foot = rbox(90, 10, 150, 4, SM.graphite());
    foot.position.set(s * w * 0.34, 5, 75);
    group.add(leg, foot);
  }
  const fw = w - 44, fh = h - 44;
  const face = litFace(fw, fh, textTex(`${o.key}:blank`, fw, fh, [], { bg: "#070708", r: 6 }));
  face.position.set(0, legs + h / 2, D / 2 + 0.8);
  group.add(face);
  const air = halo(w * 1.5, h * 1.9, C.khaki, 0.2);
  air.position.set(0, legs + h / 2, -40);
  group.add(air);
  const update = (p: LedP) => {
    const red = (p.fall ?? 0) > 0.5;
    const c = red ? C.red : C.khaki;
    const v = "$" + p.value.toFixed(2);
    (face.material as THREE.MeshBasicMaterial).map = textTex(`${o.key}:${v}:${p.date}:${red ? "r" : "k"}`, fw, fh, [
      { t: o.title ?? "SHARE PRICE", size: 26, weight: 600, color: C.dim, track: 0.2 },
      { t: (red ? "▼ " : "") + v, size: 124, weight: 800, color: c, glow: 22, gap: 14 },
      { t: p.date, size: 30, weight: 600, color: C.white, track: 0.14, gap: 18 },
    ], { bg: "#070708", r: 6, pad: 26 });
    (face.material as THREE.MeshBasicMaterial).opacity = 0.15 + 0.85 * (p.on ?? 1);
    const am = air.material as THREE.MeshBasicMaterial;
    am.color.set(c); am.opacity = 0.2 * (p.on ?? 1);
  };
  update({ value: 0, date: "" });
  return { group, update };
};
