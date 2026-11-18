// THE HANGING PRICE TAG — the film's hero. A real price tag: a wide matte-black card with clipped shoulders and a punched,
// metal-ringed eyelet, on a looped cord from a hook; a figure on each face; it FLIPS between them about its cord.
// Origin: the HANG POINT (the top of the cord). The tag hangs below it: its centre at y = −(cord + h/2).
// `rail` (optional, px): a satin rail through the hang point, so the tag hangs FROM something when the hang point is in frame.
import { THREE, mesh, slabOf } from "../stage";
import { SM, C, textTex, litFace, halo, type Obj3 } from "../studio";

export type TagFace = { kicker: string; figure: string; color: string };
export type TagOpts = { key: string; w?: number; h?: number; cord?: number; faces: [TagFace, TagFace]; lamp?: string; rail?: number };
/** flip: 0 = face 0 toward the camera, 1 = face 1 (it turns about the cord); swing: degrees of sway about the hang point;
 *  lit: 0…1 the lamp and the figure's glow */
export type TagP = { flip: number; swing?: number; lit?: number };

/** the tag's outline: a rectangle whose two top corners are clipped (the shoulders), centred on (0, 0) */
const tagShape = (w: number, h: number, cut: number, r: number) => {
  const s = new THREE.Shape();
  const x = w / 2, y = h / 2;
  s.moveTo(-x + r, -y);
  s.lineTo(x - r, -y); s.quadraticCurveTo(x, -y, x, -y + r);
  s.lineTo(x, y - cut * 0.62);
  s.lineTo(x - cut, y);
  s.lineTo(-x + cut, y);
  s.lineTo(-x, y - cut * 0.62);
  s.lineTo(-x, -y + r); s.quadraticCurveTo(-x, -y, -x + r, -y);
  return s;
};

export const makeTag = (o: TagOpts): Obj3<TagP> => {
  const w = o.w ?? 800, h = o.h ?? 330, cord = o.cord ?? 240, T = 20;
  const CUT = Math.min(h * 0.3, 96), EYE_Y = h / 2 - 34, EYE_R = 12;
  const group = new THREE.Group();
  const sway = new THREE.Group();
  group.add(sway);
  const metal = SM.edge();
  // the hook it hangs from, and (optionally) the rail
  const ring = mesh(new THREE.TorusGeometry(10, 2.6, 12, 32), metal);
  sway.add(ring);
  if (o.rail) {
    const rail = mesh(new THREE.CylinderGeometry(6, 6, o.rail, 20), metal);
    rail.rotation.z = Math.PI / 2;
    rail.position.set(0, 16, -4);
    const clamp = mesh(new THREE.CylinderGeometry(9.5, 9.5, 26, 20), SM.graphite());
    clamp.rotation.z = Math.PI / 2;
    clamp.position.copy(rail.position);
    group.add(rail, clamp);
  }
  // the cord: a loop through the eyelet, its two strands meeting at the hook
  const cordM = new THREE.MeshStandardMaterial({ color: 0xd9d2c2, roughness: 0.8, metalness: 0 });
  const len = cord + (h / 2 - EYE_Y) - 8;
  for (const s of [-1, 1]) {
    const c = mesh(new THREE.CylinderGeometry(1.7, 1.7, Math.hypot(len, 7), 8), cordM);
    c.position.set(s * 3.5, -8 - len / 2, s * 1.5);
    c.rotation.z = s * Math.atan2(7, len);
    sway.add(c);
  }
  // the tag
  const turn = new THREE.Group();
  turn.position.y = -(cord + h / 2);
  sway.add(turn);
  const outline = tagShape(w, h, CUT, 14);
  const hole = new THREE.Path();
  hole.absarc(0, EYE_Y, EYE_R, 0, Math.PI * 2, true);
  outline.holes.push(hole);
  const body = mesh(slabOf(outline, T, 2.5), SM.black());
  body.position.z = T / 2;
  // the satin rim: the same outline a little larger and thinner, showing as a bright line all round
  const rimShape = tagShape(w + 9, h + 9, CUT + 3, 17);
  const rimHole = new THREE.Path();
  rimHole.absarc(0, EYE_Y, EYE_R, 0, Math.PI * 2, true);
  rimShape.holes.push(rimHole);
  const rim = mesh(slabOf(rimShape, T - 10, 1.5), metal);
  rim.position.z = T / 2 - 5;
  // the eyelet's metal grommet
  const grom = mesh(new THREE.TorusGeometry(EYE_R + 3, 4.2, 12, 36), metal);
  grom.position.set(0, EYE_Y, 0);
  grom.scale.z = (T + 6) / 8.4;
  turn.add(rim, body, grom);
  // the print: the kicker and the figure, in the field under the shoulders
  const fw = w - 56, top = h / 2 - CUT * 0.62 - 6, bot = -h / 2 + 22, fh = top - bot;
  const faces = o.faces.map((f, i) => {
    const tex = textTex(`${o.key}:${i}:${f.figure}:${f.kicker}`, fw, fh, [
      { t: f.kicker, size: Math.round(h * 0.105), weight: 600, color: C.white, track: 0.16 },
      { t: f.figure, size: Math.round(h * 0.36), weight: 800, color: f.color, glow: 26, gap: Math.round(h * 0.07) },
    ], { pad: 10 });
    const m = litFace(fw, fh, tex);
    m.position.set(0, (top + bot) / 2, (i ? -1 : 1) * (T / 2 + 0.8));
    if (i) m.rotation.y = Math.PI;
    turn.add(m);
    return m;
  });
  // the lamp's air: a warm halo behind the tag
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
