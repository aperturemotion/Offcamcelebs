// THE GANTRY CRANE (038, set A; worker A; P16: a real, recognisable object). A yellow-and-black gantry crane: two legs on
// wheeled feet with hazard-striped bases, a box-girder beam carrying the real US FLAG on a lit panel, a trolley hanging
// under the beam, two hoist cables, and a hook block with a nameplate THE GLAZER FAMILY. Under the hook block: a steel hook
// and two slings to the load (the crest), and a side bracket from which the loan tag hangs.
// makeCrane(key, o?) → { group, hook, update({ hookY }) , CRANE }
//   Origin: the floor at the middle of the span. The hook group's origin is the HOOK BLOCK's centre; `hookY` sets its
//   height (the cables follow). `hook.slingTo(points)` builds the slings from the hook's eye to load points given in the
//   HOOK's own frame (they move with it). `hook.bracket` is the side bracket's tip (in the hook's frame).
import * as THREE from "three";
import { MAT, K, lit, rbox, wide, textOn, joined } from "../kit";
import { text3d, textWidth } from "../text3d";
import { makeFlagPanel } from "./flag";

export const CRANE = { legX: 1450, beamY: 3000, beamH: 320, beamD: 280, legW: 220, trolleyBottom: 2620 } as const;

const paint = (hex: string, rough = 0.42) => new THREE.MeshPhysicalMaterial({ color: new THREE.Color(hex), roughness: rough, metalness: 0.25, clearcoat: 0.35, clearcoatRoughness: 0.4, envMapIntensity: 0.9 });
/** diagonal yellow-and-black hazard stripes (a canvas texture; none under Node, where the checks run) */
const hazard = () => {
  const m = paint("#e2b21c");
  if (typeof document === "undefined") return m;
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#e2b21c"; g.fillRect(0, 0, 256, 256);
  g.fillStyle = "#141414";
  for (let i = -256; i < 512; i += 64) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 32, 0); g.lineTo(i + 32 + 256, 256); g.lineTo(i + 256, 256); g.closePath(); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  m.map = t; m.color.set("#ffffff");
  return m;
};

export const makeCrane = (key: string) => {
  const C = CRANE;
  const group = new THREE.Group();
  group.name = `crane-${key}`;
  const yellow = paint("#e2b21c"), black = MAT.black();
  // ── the legs: a yellow box column on a black wheeled foot, hazard stripes at the base ──
  for (const s of [-1, 1]) {
    const leg = new THREE.Group();
    leg.name = s < 0 ? "leg-left" : "leg-right";
    const col = rbox(C.legW, C.beamY - 260, C.legW, 14, yellow); col.position.y = 260 + (C.beamY - 260) / 2;
    const band = rbox(C.legW + 6, 220, C.legW + 6, 14, hazard()); band.position.y = 260 + 110;
    const foot = rbox(C.legW + 220, 150, 520, 22, black); foot.position.y = 75 + 40;
    for (const z of [-170, 170]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(52, 52, 60, 32), MAT.graphite());
      wheel.rotation.z = Math.PI / 2; wheel.position.set(0, 52, z); wheel.castShadow = true;
      leg.add(wheel);
    }
    // a diagonal brace from the foot to the column (the gantry's knee)
    const brace = rbox(70, 900, 70, 10, yellow); brace.position.set(-s * 0, 760, 200); brace.rotation.x = -0.32;
    leg.add(col, band, foot, brace);
    leg.position.x = s * C.legX;
    group.add(leg);
  }
  // ── the beam: a box girder, black underside, hazard ends, the US flag on a lit panel ──
  const beam = rbox(2 * C.legX + C.legW + 60, C.beamH, C.beamD, 20, yellow); beam.position.y = C.beamY; beam.name = "beam";
  const under = rbox(2 * C.legX - C.legW, 40, C.beamD - 30, 10, black); under.position.y = C.beamY - C.beamH / 2 - 10;
  group.add(beam, under);
  for (const s of [-1, 1]) { const end = rbox(260, C.beamH + 8, C.beamD + 8, 18, hazard()); end.position.set(s * (C.legX), C.beamY, 0); group.add(end); }
  const flag = makeFlagPanel(key, 520, 274);
  flag.group.position.set(-560, C.beamY, C.beamD / 2 + flag.d / 2 + 1);
  flag.group.name = "flag";
  group.add(flag.group);
  // ── the trolley under the beam ──
  const trolley = new THREE.Group(); trolley.name = "trolley";
  const tb = rbox(560, 180, 340, 18, black); tb.position.y = C.beamY - C.beamH / 2 - 30 - 90;
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(70, 70, 420, 32), MAT.satin()); drum.rotation.z = Math.PI / 2; drum.position.y = tb.position.y - 40; drum.position.z = 175;
  trolley.add(tb, drum);
  group.add(trolley);

  // ── the hook: block, nameplate, hook, slings, bracket ──
  const hook = new THREE.Group(); hook.name = "hook";
  // the block is as wide as its nameplate needs (P14: the words fit the plate, the plate fits the block)
  const size = 40, k = 1.1, tw = textWidth("THE GLAZER FAMILY", "800", size) * k;
  const bw = Math.max(620, tw + 150), bh = 250, bd = 230;
  const block = rbox(bw, bh, bd, 22, yellow); block.name = "hook-block";
  const stripe = rbox(bw + 4, 46, bd + 4, 8, hazard()); stripe.position.y = bh / 2 - 30;
  // the nameplate: a black plate on the block's front, THE GLAZER FAMILY in heavy wide lit capitals (it fits: P14)
  const plate = rbox(tw + 90, 96, 16, 6, black); plate.position.set(0, -24, bd / 2 + 8);
  const words = wide(text3d("THE GLAZER FAMILY", { font: "800", size, depth: 3, bevel: 0, face: lit(K.white, 1.05) }), k);
  words.position.set(0, -24 - size * 0.345, bd / 2 + 16.5);
  words.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
  textOn(words, plate, { inset: 6 });
  // the sheaves on top, where the cables run in
  for (const x of [-120, 120]) { const sh = new THREE.Mesh(new THREE.CylinderGeometry(46, 46, 40, 32), MAT.satin()); sh.rotation.x = Math.PI / 2; sh.position.set(x, bh / 2 + 30, 0); hook.add(sh); }
  // the hook itself: a shank and a steel C under the block
  const shank = new THREE.Mesh(new THREE.CylinderGeometry(22, 26, 110, 24), MAT.satin()); shank.position.y = -bh / 2 - 55;
  const c = new THREE.Mesh(new THREE.TorusGeometry(58, 17, 16, 48, Math.PI * 1.55), MAT.satin()); c.rotation.z = Math.PI * 0.73; c.position.y = -bh / 2 - 110 - 52;
  for (const m of [shank, c]) { m.castShadow = true; m.receiveShadow = true; }
  // the side bracket the loan tag hangs from
  const arm = rbox(540, 44, 60, 10, black); arm.position.set(bw / 2 + 250, -bh / 2 + 30, 0);
  const eye = new THREE.Mesh(new THREE.TorusGeometry(22, 7, 12, 32), MAT.satin()); eye.position.set(bw / 2 + 480, -bh / 2 + 30 - 22 - 22, 0); eye.name = "bracket-eye"; eye.rotation.y = Math.PI / 2;
  hook.add(block, stripe, plate, words, shank, c, arm, eye);
  joined(shank, c, "the hook's shank runs into its C");
  const bracket = new THREE.Vector3(bw / 2 + 480, -bh / 2 + 30 - 22 - 44, 0);
  const hookEye = new THREE.Vector3(0, -bh / 2 - 110 - 52 - 58 - 17, 0);
  group.add(hook);

  // ── the hoist cables: from the trolley's drum down to the block's sheaves (their length follows the hook) ──
  const cables = [-120, 120].map((x) => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 1, 12), MAT.graphite());
    m.position.x = x; m.castShadow = true; m.name = "cable";
    group.add(m);
    joined(m, hook, "the cable runs into the block's sheave");
    joined(m, trolley, "the cable comes off the trolley's drum");
    return m;
  });
  const slings: THREE.Mesh[] = [];
  /** slings from the hook's eye to load points (in the hook's own frame); `load` is declared joined to them */
  const slingTo = (pts: THREE.Vector3[], load: THREE.Object3D) => {
    for (const p of pts) {
      const d = new THREE.Vector3().subVectors(p, hookEye), L = d.length();
      const m = new THREE.Mesh(new THREE.CylinderGeometry(6, 6, L, 10), MAT.graphite());
      m.position.copy(hookEye).addScaledVector(d, 0.5);
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
      m.castShadow = true; m.name = "sling";
      hook.add(m);
      joined(m, load, "the sling is shackled to the crest");
      joined(m, c, "the sling hangs on the hook");
      slings.push(m);
    }
  };
  const update = (p: { hookY: number }) => {
    hook.position.y = p.hookY;
    const top = p.hookY + bh / 2 + 30, bottom = C.trolleyBottom + 20;
    for (const m of cables) { const L = Math.max(4, bottom - top); m.scale.y = L; m.position.y = top + L / 2; }
  };
  update({ hookY: 2000 });
  return { group, hook, update, slingTo, bracket, hookEye, blockH: bh, plate, words, eye };
};
