// THE RUBBER STAMP — a turned handle on a black mount, its die underneath. It comes down, presses, and lifts away leaving
// its imprint: red ink in a double rule, a little worn, set a few degrees off square. The tool's body is plain (a stamp
// never carries its word on its own body: the word is only ever the ink). Origin: the centre of the imprint, on the page.
import { THREE, mesh, lathe, paintTex, rr } from "../stage";
import { rbox, hash, font, fitFont, track } from "../kit029";
import { SM, C, type Obj3 } from "../studio";

export type StampOpts = { key: string; text: string; w?: number; h?: number; turn?: number };
/** p: 0 above, out of sight … 0.5 it lands … 0.62 it lifts … 1 gone, the imprint left behind */
export type StampP = { p: number };

export const makeStamp = (o: StampOpts): Obj3<StampP> => {
  const w = o.w ?? 360, h = o.h ?? 96, turn = o.turn ?? -0.09;
  const group = new THREE.Group();
  group.rotation.y = turn;
  // the imprint
  const tex = paintTex(`stamp:${o.key}:${o.text}`, w, h, (g) => {
    g.clearRect(0, 0, w, h);
    g.strokeStyle = C.red; g.fillStyle = C.red;
    g.lineWidth = 5; rr(g, 4, 4, w - 8, h - 8, 9); g.stroke();
    g.lineWidth = 1.8; rr(g, 12, 12, w - 24, h - 24, 5); g.stroke();
    track(g, 2.2);
    const s = fitFont(g, 800, h * 0.42, o.text, w - 52);
    font(g, 800, s);
    g.textAlign = "center"; g.textBaseline = "alphabetic";
    g.fillText(o.text, w / 2, h / 2 + s * 0.36);
    track(g, 0);
    // worn ink: specks of the page showing through
    g.globalCompositeOperation = "destination-out";
    for (let i = 0; i < 260; i++) {
      const r = 0.5 + 1.5 * hash(i, 3, 1);
      g.globalAlpha = 0.35 + 0.5 * hash(i, 4, 1);
      g.beginPath(); g.arc(hash(i, 1, 1) * w, hash(i, 2, 1) * h, r, 0, 6.3); g.fill();
    }
    g.globalAlpha = 1; g.globalCompositeOperation = "source-over";
  }, 4);
  const ink = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false }));
  ink.rotation.x = -Math.PI / 2;
  ink.position.y = 0.9;
  ink.renderOrder = 5;
  group.add(ink);
  // the tool
  const tool = new THREE.Group();
  const die = rbox(w + 6, 8, h + 6, 2, SM.red());
  die.position.set(0, 4, (h + 6) / 2);
  const mount = rbox(w + 26, 44, h + 26, 9, SM.black());
  mount.position.set(0, 8 + 22, (h + 26) / 2);
  const band = rbox(w + 30, 5, h + 30, 2, SM.edge(), 1);
  band.position.set(0, 8 + 40, (h + 30) / 2);
  const neck = mesh(lathe([[26, 0], [22, 10], [15, 34], [14, 70], [20, 84], [34, 96], [44, 116], [46, 138], [40, 158], [24, 172], [0.01, 176]], 48), SM.graphite());
  neck.position.y = 52;
  neck.scale.y = 0.5;   // a short handle: seen from above it must not reach over the line it stamps under
  const collar = mesh(new THREE.TorusGeometry(21, 3, 10, 40), SM.edge());
  collar.rotation.x = Math.PI / 2;
  collar.position.y = 52 + 84 * 0.5;
  tool.add(die, mount, band, neck, collar);
  group.add(tool);
  const UP = 560;
  const update = (s: StampP) => {
    const p = Math.max(0, Math.min(1, s.p));
    let y = UP;
    if (p <= 0.5) { const u = p / 0.5; y = UP * (1 - u * u); }                 // it falls, gathering speed, and lands
    else if (p <= 0.62) y = 0;                                               // pressed
    else { const u = (p - 0.62) / 0.38; y = UP * 1.15 * u * u * (3 - 2 * u); }  // lifted away
    // ★ it comes in from the NEAR side (toward the viewer) as it comes down, and leaves the same way: seen from above, a
    //   tool that falls straight down crosses whatever is printed above its imprint (it covered the highlighted figure)
    tool.position.set(y * 0.2, y, y * 1.35);
    tool.scale.y = p > 0.5 && p <= 0.62 ? 0.97 : 1;
    tool.visible = p > 0.001 && p < 0.999;
    ink.visible = p >= 0.52;
  };
  update({ p: 0 });
  return { group, update };
};
