// THE HANGING PRICE TAG — the film's hero. A wide black tag on a cord, a figure on each face; it FLIPS between them.
// Origin: the HANG POINT (the top of the cord). The tag hangs below it: its centre at y = −(cord + h/2).
import { THREE, mesh, type Model } from "../stage";
import { rbox, col } from "../kit029";
import { SM, C, textTex, litFace, halo, type Obj3 } from "../studio";
void col; void (0 as unknown as Model);

export type TagFace = { kicker: string; figure: string; color: string };
export type TagOpts = { key: string; w?: number; h?: number; cord?: number; faces: [TagFace, TagFace]; lamp?: string };
/** flip: 0 = face 0 toward the camera, 1 = face 1 (it turns about the cord); swing: degrees of sway about the hang point;
 *  lit: 0…1 the lamp and the figure's glow */
export type TagP = { flip: number; swing?: number; lit?: number };

export const makeTag = (o: TagOpts): Obj3<TagP> => {
  const w = o.w ?? 800, h = o.h ?? 330, cord = o.cord ?? 240, T = 22;
  const group = new THREE.Group();
  const sway = new THREE.Group();
  group.add(sway);
  // the cord: two thin lines from the hang point to the tag's eyelets, and a ring
  const cordM = SM.edge();
  for (const s of [-1, 1]) {
    const len = Math.hypot(cord, w * 0.18);
    const c = mesh(new THREE.CylinderGeometry(1.6, 1.6, len, 8), cordM);
    c.position.set(s * w * 0.09, -cord / 2, 0);
    c.rotation.z = s * Math.atan2(w * 0.18, cord);
    sway.add(c);
  }
  const ring = mesh(new THREE.TorusGeometry(9, 2.4, 10, 28), cordM);
  sway.add(ring);
  // the tag
  const turn = new THREE.Group();
  turn.position.y = -(cord + h / 2);
  sway.add(turn);
  const body = rbox(w, h, T, 16, SM.black());
  body.position.z = T / 2;
  const rim = rbox(w + 10, h + 10, T - 10, 18, SM.edge());
  rim.position.z = T / 2 - 5;
  turn.add(rim, body);
  for (const s of [-1, 1]) {
    const eye = mesh(new THREE.TorusGeometry(11, 3.4, 10, 28), cordM);
    eye.position.set(s * w * 0.18, h / 2 - 4, 0);
    turn.add(eye);
  }
  const faces = o.faces.map((f, i) => {
    const tex = textTex(`${o.key}:${i}:${f.figure}`, w - 40, h - 40, [
      { t: f.kicker, size: 34, weight: 600, color: C.white, track: 0.16 },
      { t: f.figure, size: 110, weight: 800, color: f.color, glow: 26, gap: 26 },
    ], { pad: 22 });
    const m = litFace(w - 40, h - 40, tex);
    m.position.z = (i ? -1 : 1) * (T / 2 + 0.8);
    if (i) m.rotation.y = Math.PI;
    turn.add(m);
    return m;
  });
  // the lamp's air: a warm halo behind the tag, and the figure's own bloom in front
  const air = halo(w * 1.7, h * 2.6, o.lamp ?? C.amber, 0.22);
  air.position.set(0, -(cord + h / 2), -60);
  sway.add(air);
  const update = (p: TagP) => {
    sway.rotation.z = ((p.swing ?? 0) * Math.PI) / 180;
    turn.rotation.y = Math.PI * p.flip;
    const lit = p.lit ?? 1;
    (air.material as THREE.MeshBasicMaterial).opacity = 0.22 * lit;
    faces.forEach((m) => { (m.material as THREE.MeshBasicMaterial).opacity = 0.25 + 0.75 * lit; });
  };
  update({ flip: 0 });
  return { group, update };
};
