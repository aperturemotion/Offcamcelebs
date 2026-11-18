// THE FLIP CALENDAR — a desk tent calendar: a black base, a tent easel, a satin top bar with two rings, and one LEAF per
// month hanging from the rings on the tent's front. A month passes by its leaf flipping up over the bar and down the back.
// Origin: the middle of its base, on the floor (y = 0); it faces +z.
import { THREE, mesh } from "../stage";
import { rbox } from "../kit029";
import { SM, textTex, type Obj3 } from "../studio";

export type CalendarOpts = { key: string; months: string[]; w?: number; h?: number };
/** cal: 0 = the first month showing … 1 = the last; the leaves between flip in turn, overlapping a little */
export type CalendarP = { cal: number };

const smooth = (x: number) => { const t = Math.max(0, Math.min(1, x)); return t * t * (3 - 2 * t); };

export const makeCalendar = (o: CalendarOpts): Obj3<CalendarP> => {
  const W = o.w ?? 380, H = o.h ?? 340, n = o.months.length;
  const BASE_H = 34, TOP = BASE_H + H + 46, FRONT = 0.27;       // the bar's height; the front face's lean (rad)
  const group = new THREE.Group();
  // the base: a black slab with a satin strip along its front edge
  const base = rbox(W + 90, BASE_H, 300, 7, SM.black());
  base.position.set(0, BASE_H / 2, 150);
  const strip = rbox(W + 70, 4, 4, 1.5, SM.edge(), 1);
  strip.position.set(0, BASE_H - 9, 152.5);
  group.add(base, strip);
  // the tent: two graphite boards meeting under the bar
  const L = (TOP - BASE_H) / Math.cos(FRONT);
  for (const s of [1, -1]) {
    const pivot = new THREE.Group();
    pivot.position.set(0, TOP - 8, 0);
    pivot.rotation.x = -s * FRONT;
    const board = rbox(W + 30, L, 10, 4, SM.graphite());
    board.position.set(0, -L / 2, s > 0 ? -2 : 8);
    pivot.add(board);
    group.add(pivot);
  }
  // the bar and its rings
  const bar = mesh(new THREE.CylinderGeometry(6, 6, W + 60, 20), SM.edge());
  bar.rotation.z = Math.PI / 2;
  bar.position.set(0, TOP, 4);
  group.add(bar);
  for (const s of [-1, 1]) {
    const ring = mesh(new THREE.TorusGeometry(19, 3.6, 10, 32), SM.edge());
    ring.rotation.y = Math.PI / 2;
    ring.position.set(s * W * 0.27, TOP - 2, 6);
    group.add(ring);
    for (const e of [-1, 1]) { const cap = mesh(new THREE.SphereGeometry(9, 16, 12), SM.edge()); cap.position.set(e * (W / 2 + 32), TOP, 4); group.add(cap); }
  }
  // the leaves: leaf i carries month i; leaf 0 is in front
  const paper = SM.paper("#EFE8D8"), paperBack = SM.paper("#E2DAC6");
  const leaves = o.months.map((m, i) => {
    const pivot = new THREE.Group();
    pivot.position.set(0, TOP - 4, 6);
    const [mon, year] = m.split(" ");
    const tex = textTex(`${o.key}:leaf:${i}:${m}`, W, H, [
      { t: mon, size: H * 0.42, weight: 800, color: "#1B1810", track: 0.01 },
      { t: year ?? "", size: H * 0.17, weight: 700, color: "#5B5443", gap: H * 0.04, track: 0.12 },
    ], { bg: "#EFE8D8", pad: W * 0.1 });
    const body = rbox(W, H, 1.4, 0.6, { px: paper, nx: paper, top: paper, bottom: paper, front: SM.print(tex), back: paperBack }, 1);
    body.position.set(0, -H / 2 - 16, 13 + (n - 1 - i) * 1.5);
    // the punched tab at the top, under the rings
    const tab = rbox(W, 16, 1.4, 0.6, paper, 1);
    tab.position.set(0, -8, 13 + (n - 1 - i) * 1.5);
    pivot.add(body, tab);
    group.add(pivot);
    return { pivot, body, tab, z0: 13 + (n - 1 - i) * 1.5, z1: -7 - i * 1.5 };
  });
  // a leaf's swing: from hanging on the front, up over the bar, down onto the back
  const A0 = -FRONT, A1 = -(2 * Math.PI - FRONT - 0.02);
  const LEN = 1.7;                                   // a flip lasts 1.7 months' worth of the run: neighbours overlap
  const update = (p: CalendarP) => {
    const u = Math.max(0, Math.min(1, p.cal)) * (n - 2 + LEN);
    leaves.forEach((l, i) => {
      const q = i === n - 1 ? 0 : smooth((u - i) / LEN);
      l.pivot.rotation.x = A0 + (A1 - A0) * q;
      // the leaf rides round its rings: it leaves the front face of the tent and comes to rest on the outside of the back
      const z = l.z0 + (l.z1 - l.z0) * smooth((q - 0.2) / 0.6);
      l.body.position.z = z; l.tab.position.z = z;
    });
  };
  update({ cal: 0 });
  return { group, update };
};
