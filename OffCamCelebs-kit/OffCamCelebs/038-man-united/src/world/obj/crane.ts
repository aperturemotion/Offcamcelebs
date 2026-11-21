// THE GANTRY CRANE (038, set A; worker A; P16: a real, recognisable object). A yellow-and-black gantry crane: two legs on
// wheeled feet with hazard-striped bases, a box-girder beam carrying the real US FLAG on a lit panel, a trolley hanging
// under the beam, two hoist cables, and a hook block with a nameplate THE GLAZER FAMILY. Under the hook block: a steel hook
// and two slings to the load (the crest), and a side bracket from which the loan tag hangs.
// makeCrane(key, o?) → { group, hook, update({ hookY }) , CRANE }
//   Origin: the floor at the middle of the span. The hook group's origin is the HOOK BLOCK's centre; `hookY` sets its
//   height (the cables follow). `hook.slingTo(points)` builds the slings from the hook's eye to load points given in the
//   HOOK's own frame (they move with it). `hook.bracket` is the side bracket's tip (in the hook's frame).
import * as THREE from "three";
import { MAT, K, lit, rbox, wide, textOn, joined, hangs, mounted } from "../kit";
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
    // ★ P17: the foot runs up to the column (it stopped 70 units short of it: the legs stood on nothing)
    const foot = rbox(C.legW + 220, 224, 520, 22, black); foot.position.y = 40 + 112; foot.name = "foot";
    for (const z of [-170, 170]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(52, 52, 60, 32), MAT.graphite());
      wheel.rotation.z = Math.PI / 2; wheel.position.set(0, 52, z); wheel.castShadow = true;
      leg.add(wheel);
    }
    // a diagonal brace from the foot to the column (the gantry's knee)
    // the knee brace: from the foot's top (z 230) up to the column's face (z 110) at y ≈ 1,100, its ends set into both
    const brace = rbox(70, 890, 70, 10, yellow); brace.position.set(0, 681, 170); brace.rotation.x = -0.142; brace.name = "knee brace";
    leg.add(col, band, foot, brace);
    leg.position.x = s * C.legX;
    group.add(leg);
  }
  // ── the beam: a box girder, black underside, hazard ends, the US flag on a lit panel ──
  const beam = rbox(2 * C.legX + C.legW + 60, C.beamH, C.beamD, 20, yellow); beam.position.y = C.beamY; beam.name = "beam";
  const under = rbox(2 * C.legX - C.legW, 40, C.beamD - 30, 10, black); under.position.y = C.beamY - C.beamH / 2 - 10; under.name = "beam rail";
  group.add(beam, under);
  for (const s of [-1, 1]) { const end = rbox(260, C.beamH + 8, C.beamD + 8, 18, hazard()); end.position.set(s * (C.legX), C.beamY, 0); group.add(end); }
  const flag = makeFlagPanel(key, 520, 274);
  flag.group.position.set(-560, C.beamY, C.beamD / 2 + flag.d / 2 - 0.5);   // its back on the beam's face (P17: not 1 unit off it)
  flag.group.name = "flag";
  group.add(flag.group);
  // ── the trolley under the beam ──
  const trolley = new THREE.Group(); trolley.name = "trolley";
  const tb = rbox(560, 180, 340, 18, black); tb.position.y = C.beamY - C.beamH / 2 - 30 - 90; tb.name = "hoist housing";   // its top on the beam's underside rail
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
  // the sheaves on top, where the cables run in (their axles set in the block's top)
  const sheaves: THREE.Mesh[] = [];
  for (const x of [-120, 120]) { const sh = new THREE.Mesh(new THREE.CylinderGeometry(46, 46, 40, 32), MAT.satin()); sh.rotation.x = Math.PI / 2; sh.position.set(x, bh / 2 + 30, 0); sh.castShadow = true; sh.name = "sheave"; hook.add(sh); sheaves.push(sh); }
  // ★ P17 (Timur, 2026-11-20: "the metal circle that's holding the Manchester United sign, it's not even attached to the thing
  //   on top of it"). A REAL crane hook: a swivel nut under the block, the shank down out of it, and a forged J hook (a tube
  //   swept along the hook's own curve) whose bowl opens to the right; the slings' master ring hangs IN the bowl, its inside
  //   top resting on the bowl. Everything touches what holds it (the support check verifies it; the close-up sheet shows it).
  const nut = new THREE.Mesh(new THREE.CylinderGeometry(40, 44, 34, 32), MAT.satin()); nut.position.y = -bh / 2 - 17 + 1; nut.name = "swivel nut";
  // (compact: the whole hook stays above the caption band in the sign's framing, as the old one did)
  const shank = new THREE.Mesh(new THREE.CylinderGeometry(22, 24, 60, 24), MAT.satin()); shank.position.y = -bh / 2 - 34 - 30 + 4; shank.name = "hook shank";
  const SY0 = -bh / 2 - 34 - 56;   // the shank's foot, where the forging begins
  const BOWL = { x: 0, y: SY0 - 60, r: 50, t: 17 };
  const r_ = BOWL.r;
  const jPts = [
    [0, SY0 + 18], [0, SY0 - 6], [-0.76 * r_, BOWL.y + 0.69 * r_], [-r_, BOWL.y], [-0.707 * r_, BOWL.y - 0.707 * r_], [0, BOWL.y - r_],
    [0.707 * r_, BOWL.y - 0.707 * r_], [r_, BOWL.y], [0.86 * r_, BOWL.y + 0.52 * r_], [0.62 * r_, BOWL.y + 0.79 * r_],
  ].map(([x, y]) => new THREE.Vector3(x, y, 0));
  const jCurve = new THREE.CatmullRomCurve3(jPts, false, "centripetal");
  // the forging tapers toward its tip (a real hook's throat is thinner than its bowl)
  const jGeo = new THREE.TubeGeometry(jCurve, 90, BOWL.t, 20, false);
  { const pos = jGeo.attributes.position as THREE.BufferAttribute, n = 90, ring = 21;
    for (let i = 0; i <= n; i++) { const u = i / n, c = jCurve.getPointAt(u), k = u < 0.2 ? 1 + (21.5 / BOWL.t - 1) * (1 - u / 0.2) ** 2 : u > 0.8 ? 1 - 0.45 * (u - 0.8) / 0.2 : 1;   // starting just inside the shank (its open end hidden in it), easing out to the forging
      for (let j = 0; j < ring; j++) { const v = i * ring + j; pos.setXYZ(v, c.x + (pos.getX(v) - c.x) * k, c.y + (pos.getY(v) - c.y) * k, c.z + (pos.getZ(v) - c.z) * k); } }
    pos.needsUpdate = true; jGeo.computeVertexNormals(); }
  const c = new THREE.Mesh(jGeo, MAT.satin()); c.name = "hook";
  // the tip's rounded end
  const tip = new THREE.Mesh(new THREE.SphereGeometry(BOWL.t * 0.55, 16, 12), MAT.satin()); tip.position.copy(jPts[jPts.length - 1]); tip.name = "hook tip";
  // the master ring: a closed steel ring across the bowl (in the y–z plane), its inside top ON the bowl's lowest point
  const RR = 30, RT = 9;
  const bowlTop = BOWL.y - BOWL.r + BOWL.t;   // the top of the forging at the bowl's lowest point
  const master = new THREE.Mesh(new THREE.TorusGeometry(RR, RT, 16, 48), MAT.satin()); master.rotation.y = Math.PI / 2;
  master.position.set(0, bowlTop - (RR - RT) + 0.2, 0); master.name = "master ring";
  for (const m of [nut, shank, c, tip, master]) { m.castShadow = true; m.receiveShadow = true; }
  // the side bracket the loan tag hangs from
  const arm = rbox(540, 44, 60, 10, black); arm.position.set(bw / 2 + 250, -bh / 2 + 30, 0); arm.name = "bracket arm";
  const eye = new THREE.Mesh(new THREE.TorusGeometry(22, 7, 12, 32), MAT.satin()); eye.position.set(bw / 2 + 480, -bh / 2 + 30 - 22 - 22 + 4, 0); eye.name = "bracket-eye";   // facing the camera: its lower bar runs along x, the axis the tag swings about
  hook.add(block, stripe, plate, words, nut, shank, c, tip, master, arm, eye);
  mounted(nut, block, "the swivel nut is bolted under the hook block");
  mounted(shank, nut, "the shank comes down out of the swivel nut");
  mounted(c, shank, "the hook is forged on the shank's foot");
  hangs(master, c, "the slings' master ring hangs in the hook's bowl, its inside resting on it");
  mounted(eye, arm, "the tag's eye is welded under the bracket arm");
  const bracket = new THREE.Vector3(bw / 2 + 480, -bh / 2 + 30 - 22 - 44 + 4, 0);
  const hookEye = new THREE.Vector3(0, master.position.y - RR, 0);
  group.add(hook);

  // ── the hoist cables: from the trolley's housing down to the block's sheaves (their length follows the hook) ──
  const cables = [-120, 120].map((x, i) => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 1, 12), MAT.graphite());
    m.position.x = x; m.castShadow = true; m.name = "cable";
    group.add(m);
    // the rope runs up into the hoist housing and wraps its sheave: both crossings are inside the steel, out of sight
    joined(m, sheaves[i], "the cable wraps the block's sheave");
    joined(m, tb, "the cable runs up into the hoist housing");
    hangs(m, tb, "the hoist cable comes down out of the trolley");
    hangs(sheaves[i], m, "the hook block hangs on its cables by the sheaves");
    return m;
  });
  const slings: THREE.Mesh[] = [];
  /** slings from the master ring to load points (in the hook's own frame); each sling's lower end is shackled to `load`, a
   *  MESH (the crest's body), and the load is declared hung from the slings */
  const slingTo = (pts: THREE.Vector3[], loads: THREE.Mesh[]) => {
    for (const p of pts) {
      const top = hookEye.clone().add(new THREE.Vector3(0, RT * 0.6, 0));
      const d = new THREE.Vector3().subVectors(p, top), L = d.length();
      const m = new THREE.Mesh(new THREE.CylinderGeometry(6, 6, L, 10), MAT.graphite());
      m.position.copy(top).addScaledVector(d, 0.5);
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
      m.castShadow = true; m.name = "sling";
      hook.add(m);
      hangs(m, master, "the sling hangs from the master ring");
      slings.push(m);
    }
    // each load point is a shackle on the load: the sling's end runs through it
    loads.forEach((l, i) => { joined(slings[i], l, "the sling's end runs through its shackle"); hangs(l, slings[i], "the crest's shackle hangs on its sling", { linked: true }); });
  };
  const update = (p: { hookY: number }) => {
    hook.position.y = p.hookY;
    const top = p.hookY + bh / 2 + 30, bottom = C.trolleyBottom + 20;
    for (const m of cables) { const L = Math.max(4, bottom - top); m.scale.y = L; m.position.y = top + L / 2; }
  };
  update({ hookY: 2000 });
  return { group, hook, update, slingTo, bracket, hookEye, blockH: bh, plate, words, eye, master, hookMesh: c };
};
