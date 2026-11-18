// THE DESK NAMEPLATE — a black bar leaning back on a satin base, a name in lit white capitals. It SWAPS by rolling about
// its long axis to its second face. Origin: the middle of its base, on the desk (y = 0).
import { THREE } from "../stage";
import { rbox } from "../kit029";
import { SM, C, textTex, litFace, type Obj3 } from "../studio";

export type NameplateOpts = { key: string; w?: number; h?: number; texts: [string, string?]; color?: string };
/** swap: 0 = the first text, 1 = the second (the bar rolls over) */
export type NameplateP = { swap?: number };

export const makeNameplate = (o: NameplateOpts): Obj3<NameplateP> => {
  const w = o.w ?? 620, h = o.h ?? 104, T = 30, LEAN = -0.3;
  const group = new THREE.Group();
  const base = rbox(w + 30, 12, 70, 4, SM.edge());
  base.position.set(0, 6, 35);
  group.add(base);
  const roll = new THREE.Group();
  roll.position.set(0, 12 + h / 2 + 4, 0);
  group.add(roll);
  const bar = rbox(w, h, T, 8, SM.black());
  bar.position.z = T / 2;
  roll.add(bar);
  o.texts.forEach((t, i) => {
    if (!t) return;
    const m = litFace(w - 26, h - 22, textTex(`${o.key}:${i}:${t}`, w - 26, h - 22, [{ t, size: 50, weight: 800, color: o.color ?? C.white, track: 0.06 }], { pad: 14 }));
    m.position.z = (i ? -1 : 1) * (T / 2 + 0.8);
    if (i) m.rotation.x = Math.PI;
    roll.add(m);
  });
  const update = (p: NameplateP) => { roll.rotation.x = LEAN + Math.PI * (p.swap ?? 0); };
  update({});
  return { group, update };
};
