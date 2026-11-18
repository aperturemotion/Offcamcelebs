// THE DESK NAMEPLATE — a black bar leaning back in a satin cradle, a name in lit white capitals inside a fine engraved
// rule. It SWAPS by rolling about its long axis to its second face. Origin: the middle of its base, on the desk (y = 0).
import { THREE, mesh } from "../stage";
import { rbox } from "../kit029";
import { SM, C, textTex, litFace, type Obj3 } from "../studio";

export type NameplateOpts = { key: string; w?: number; h?: number; texts: [string, string?]; color?: string };
/** swap: 0 = the first text, 1 = the second (the bar rolls over) */
export type NameplateP = { swap?: number };

export const makeNameplate = (o: NameplateOpts): Obj3<NameplateP> => {
  const w = o.w ?? 620, h = o.h ?? 104, T = 30, LEAN = -0.3;
  const group = new THREE.Group();
  const base = rbox(w + 36, 10, 76, 4, SM.edge());
  base.position.set(0, 5, 38);
  const foot = rbox(w + 22, 6, 62, 3, SM.black());
  foot.position.set(0, 12, 31);
  group.add(base, foot);
  // the cradle's end posts, holding the bar's axle
  for (const s of [-1, 1]) {
    const post = rbox(10, h * 0.62, 26, 3, SM.edge());
    post.position.set(s * (w / 2 + 9), 14 + h * 0.31, 6);
    const pin = mesh(new THREE.CylinderGeometry(6, 6, 8, 20), SM.edge());
    pin.rotation.z = Math.PI / 2;
    pin.position.set(s * (w / 2 + 16), 14 + h / 2 + 4, 0);
    group.add(post, pin);
  }
  const roll = new THREE.Group();
  roll.position.set(0, 14 + h / 2 + 4, 0);
  group.add(roll);
  const bar = rbox(w, h, T, 8, SM.black());
  bar.position.z = T / 2;
  roll.add(bar);
  o.texts.forEach((t, i) => {
    if (!t) return;
    const fw = w - 22, fh = h - 18;
    const m = litFace(fw, fh, textTex(`${o.key}:${i}:${t}`, fw, fh, [{ t, size: Math.round(h * 0.5), weight: 800, color: o.color ?? C.white, track: 0.06, glow: 6 }],
      { pad: Math.round(h * 0.2), border: "#5A5D63", r: 5 }));
    m.position.z = (i ? -1 : 1) * (T / 2 + 0.8);
    if (i) m.rotation.x = Math.PI;
    roll.add(m);
  });
  const update = (p: NameplateP) => { roll.rotation.x = LEAN + Math.PI * (p.swap ?? 0); };
  update({});
  return { group, update };
};
