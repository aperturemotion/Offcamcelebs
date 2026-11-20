// THE ODOMETER (038, set D: "the cost had passed £1 billion"). A big mechanical counter: a heavy black housing with satin
// end caps and a bezel, a row of number wheels behind a window; the figure rolls (each wheel turns as its digit changes)
// and a lit "+" lands at the end. A small plate on its top reads TAKEOVER COST.
// makeOdometer(key) → { group, update({ value, on, plus }), size }   `value` the figure to show (a string, e.g.
//   "£1,000,000,000"; the wheels roll between digits by the fractional `roll`), `on` lights it, `plus` 0…1 shows the "+".
// Origin: the floor centre of its housing's underside; the window faces +z. Size: 1,440 w × 330 h × 300 d.
import * as THREE from "three";
import { MAT, K, lit, setLit, rbox, counter, textOn, litPlate } from "../kit";

export const ODO = { w: 1440, h: 330, d: 300 } as const;
export const makeOdometer = (key: string) => {
  void key;
  const group = new THREE.Group();
  const housing = rbox(ODO.w, ODO.h, ODO.d, 40, MAT.black()); housing.position.y = ODO.h / 2; housing.name = "odometer housing"; group.add(housing);
  for (const sx of [-1, 1]) { const cap = rbox(70, ODO.h + 30, ODO.d + 30, 20, MAT.satin()); cap.position.set(sx * (ODO.w / 2 + 20), ODO.h / 2, 0); group.add(cap); }
  // the window: a dark recess behind a satin bezel, the wheels' faces showing through
  const win = rbox(1300, 200, 14, 8, new THREE.MeshPhysicalMaterial({ color: "#0b0b0d", roughness: 0.3, metalness: 0.3, clearcoat: 0.5 }));
  win.position.set(0, ODO.h / 2, ODO.d / 2 + 4); win.name = "odometer window"; group.add(win);
  const bezel = new THREE.Mesh(new THREE.TorusGeometry(1, 1, 4, 4), MAT.satin()); bezel.visible = false; group.add(bezel);
  for (const [w, h, x, y] of [[1340, 18, 0, 109], [1340, 18, 0, -109], [18, 236, -670, 0], [18, 236, 670, 0]] as const) {
    const b = rbox(w, h, 26, 6, MAT.satin()); b.position.set(x, ODO.h / 2 + y, ODO.d / 2 + 10); group.add(b);
  }
  // the wheel dividers behind the figure: a row of thin satin lines (the drums)
  for (let i = -13; i <= 13; i++) { const d = rbox(4, 196, 4, 1, MAT.graphite()); d.position.set(i * 48, ODO.h / 2, ODO.d / 2 + 12); group.add(d); }
  const fig = counter({ size: 84, color: K.money, depth: 10 });
  fig.group.position.set(-50, ODO.h / 2 - 84 * 0.345, ODO.d / 2 + 11.5);
  fig.group.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
  textOn(fig.group, win, { inset: 6 });
  group.add(fig.group);
  // the "+": its own lit sign at the window's right end
  const plusFace = lit(K.money);
  const plus = counter({ size: 84, color: K.money, depth: 10 });
  plus.set("+");
  plus.group.position.set(600, ODO.h / 2 - 84 * 0.345, ODO.d / 2 + 11.5);
  textOn(plus.group, win, { inset: 6 });
  group.add(plus.group);
  void plusFace;
  const top = litPlate(["TAKEOVER COST"], { size: 50, color: K.white, depth: 26 });
  top.group.position.set(0, ODO.h + top.h / 2 - 6, -20);
  group.add(top.group);
  return {
    group, size: ODO,
    update: (p: { value: string; on: number; plus: number }) => {
      fig.set(p.value);
      setLit(fig.face, p.on, 0.05);
      plus.group.visible = p.plus > 0.01;
      setLit(plus.face, p.plus, 0.05);
      top.setLit(0.3 + 0.7 * p.on);
    },
  };
};
