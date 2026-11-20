// The world checks' entry for Node (scratchpad/worldcheck.mjs bundles this): the film's places, and the CANARIES: each
// check must FIRE on a planted fault and stay SILENT without it, or its result means nothing.
import * as THREE from "three";
import { PLACES, WINDOWS } from "./film3d";
import { textCheck, passCheck, supportCheck, type PlaceRun, type SupportRun } from "./check";
import { MAT, rbox, cyl, textOn, joined, hangs, mounted, falling } from "./kit";
import { text3d } from "./text3d";
import { lit } from "./kit";

export const filmPlaces = (only?: string): SupportRun[] =>
  PLACES.map((p, i) => ({ id: p.id as string, from: WINDOWS[i].from, to: WINDOWS[i].to, build: p.build, stage: (f: number) => p.stageAt?.(f) ?? p.stage ?? "dark" })).filter((p) => !only || p.id === only);

const textCanary = (size: number): PlaceRun => ({ id: `canary-text-${size}`, from: 0, to: 4, build: () => {
  const group = new THREE.Group();
  const body = rbox(400, 200, 60, 10, MAT.black());
  const t = text3d("AFTERPAY", { font: "800", size, depth: 4, bevel: 0, face: lit("#ffffff") });
  t.position.set(0, -size * 0.345, 30.5);
  textOn(t, body, { inset: 5 });
  group.add(body, t);
  return { group, update: () => {} };
} });
const passCanary = (gap: number, declare = false): PlaceRun => ({ id: `canary-pass-${gap}${declare ? "-declared" : ""}`, from: 0, to: 9, build: () => {
  const group = new THREE.Group();
  const a = rbox(300, 100, 300, 12, MAT.black()); a.position.y = 50;
  // b comes down onto a: it ends `gap` above a's top (negative = sunk into it)
  const b = rbox(200, 100, 200, 12, MAT.black());
  if (declare) joined(a, b, "canary");
  group.add(a, b);
  return { group, update: (f: number) => { b.position.y = 150 + gap + Math.max(0, 6 - f) * 40; } };
} });

// ── ★ P17 SUPPORT canaries: a sign hovering 40 units over its post, a ring hung 3 units short of its hook, a box hovering
//    with no declaration must FIRE; a sign whose posts run into it, a ring that touches its hook, and a part declared
//    falling must NOT ──
const signCanary = (gap: number, declare: boolean): SupportRun => ({ id: `canary-sign-${gap}${declare ? "-mounted" : ""}`, from: 0, to: 4, build: () => {
  const group = new THREE.Group();
  const posts = [-200, 200].map((x) => { const p = cyl(22, 520, MAT.black(), 24); p.position.x = x; group.add(p); return p; });
  // the panel's underside sits `gap` above the posts' tops (negative: the posts run INTO the panel's frame)
  const panel = rbox(760, 380, 40, 16, MAT.black()); panel.position.y = 520 + gap + 190; group.add(panel);
  if (declare) mounted(panel, posts[0], "canary: the panel is bolted onto its posts");
  return { group, update: () => {} };
} });
const ringCanary = (short: number): SupportRun => ({ id: `canary-ring-${short}`, from: 0, to: 4, build: () => {
  const group = new THREE.Group(), gantry = new THREE.Group(); group.add(gantry);   // one object: post, arm and hook weld
  const post = cyl(30, 1200, MAT.black(), 24); gantry.add(post);
  const arm = rbox(400, 40, 40, 6, MAT.black()); arm.position.set(180, 1200, 0); gantry.add(arm);
  // the hook: a torus whose top meets the arm's underside; the ring hangs in it, `short` units under its bowl
  const hook = new THREE.Mesh(new THREE.TorusGeometry(40, 10, 12, 32), MAT.satin()); hook.position.set(340, 1200 - 20 - 50 + 0.2, 0); gantry.add(hook);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(30, 8, 12, 32), MAT.satin()); ring.rotation.y = Math.PI / 2;
  // the ring's inside top rests on the hook's bowl (the bowl's top: hook.y − 40 + 10); `short` leaves a gap between them
  ring.position.set(340, hook.position.y - 40 + 10 - (30 - 8) + short, 0); group.add(ring);
  hangs(ring, hook, "canary: the ring hangs on the hook");
  return { group, update: () => {} };
} });
const fallCanary = (declare: boolean): SupportRun => ({ id: `canary-fall${declare ? "-declared" : ""}`, from: 0, to: 9, build: () => {
  const group = new THREE.Group();
  const box = rbox(100, 100, 100, 8, MAT.black()); group.add(box);
  if (declare) falling(box, 0, 12, "canary: the box is dropped");
  return { group, update: (f: number) => { box.position.y = 600 - f * 40; } };
} });
const throws = (fn: () => void) => { try { fn(); return false; } catch { return true; } };

export const canaries = () => {
  const out: string[] = [];
  const t1 = textCheck([textCanary(120)]).hits.length, t0 = textCheck([textCanary(40)]).hits.length;
  if (t1 !== 1) out.push(`TEXT canary: an overhanging word gave ${t1} hit(s), not 1`);
  if (t0 !== 0) out.push(`TEXT canary: a fitting word gave ${t0} hit(s), not 0`);
  const loose = textCheck([{ id: "canary-loose", from: 0, to: 2, build: () => { const g = new THREE.Group(); g.add(text3d("X", { size: 50, face: lit("#fff") })); return { group: g, update: () => {} }; } }]).unregistered.length;
  if (loose !== 1) out.push(`TEXT canary: an unregistered text gave ${loose} report(s), not 1`);
  const p1 = passCheck([passCanary(-20)]).hits, p0 = passCheck([passCanary(0)]).hits, pd = passCheck([passCanary(-20, true)]).hits;
  if (p1.length !== 1 || p1[0].depth < 8) out.push(`PASS canary: a part sunk 20 units gave ${p1.length} hit(s)${p1[0] ? ` of depth ${p1[0].depth}` : ""}, not 1 of ≥ 8`);
  if (p0.length !== 0) out.push(`PASS canary: a part RESTING on another gave ${p0.length} hit(s), not 0`);
  if (pd.length !== 0) out.push(`PASS canary: a DECLARED join gave ${pd.length} hit(s), not 0`);
  // ★ P17: joined() refuses a group (and a mesh with meshes under it); falling() refuses more than 20 frames
  { const g = new THREE.Group(), m = rbox(10, 10, 10, 2, MAT.black()); g.add(rbox(10, 10, 10, 2, MAT.black()));
    if (!throws(() => joined(g, m, "canary"))) out.push("JOIN canary: joined() accepted a Group");
    const parent = rbox(10, 10, 10, 2, MAT.black()); parent.add(rbox(5, 5, 5, 1, MAT.black()));
    if (!throws(() => joined(parent, m, "canary"))) out.push("JOIN canary: joined() accepted a mesh with a mesh under it");
    if (throws(() => joined(rbox(10, 10, 10, 2, MAT.black()), m, "canary"))) out.push("JOIN canary: joined() refused two plain meshes");
    if (!throws(() => falling(m, 0, 30, "canary"))) out.push("FALL canary: falling() accepted 30 frames"); }
  const kinds = (r: ReturnType<typeof supportCheck>) => r.hits.map((h) => h.kind).sort().join(",");
  const sFloat = supportCheck([signCanary(40, false)]), sMountedGap = supportCheck([signCanary(40, true)]), sGood = supportCheck([signCanary(-12, false)]), sGoodM = supportCheck([signCanary(-12, true)]);
  if (!sFloat.hits.some((h) => h.kind === "FLOAT" && h.gap > 35)) out.push(`SUPPORT canary: a sign 40 units over its posts gave [${kinds(sFloat)}], not a FLOAT of ~40`);
  if (!sMountedGap.hits.some((h) => h.kind === "HOLD")) out.push(`SUPPORT canary: a sign DECLARED mounted 40 units over its post gave [${kinds(sMountedGap)}], not a HOLD`);
  if (sGood.hits.length) out.push(`SUPPORT canary: a sign whose posts run into it gave [${kinds(sGood)}], not nothing`);
  if (sGoodM.hits.length) out.push(`SUPPORT canary: a sign mounted on posts that meet it gave [${kinds(sGoodM)}], not nothing`);
  const rShort = supportCheck([ringCanary(3)]), rGood = supportCheck([ringCanary(0)]);
  if (!rShort.hits.some((h) => h.kind === "HOLD" && h.gap > 2.4 && h.gap < 3.6)) out.push(`SUPPORT canary: a ring hung 3 units short gave [${rShort.hits.map((h) => `${h.kind} ${h.gap.toFixed(2)}`).join(", ")}], not a HOLD of 3`);
  if (rGood.hits.length) out.push(`SUPPORT canary: a ring hanging ON its hook gave [${rGood.hits.map((h) => `${h.kind} ${h.part} ${h.gap.toFixed(2)}`).join(", ")}], not nothing`);
  const fFree = supportCheck([fallCanary(false)]), fDecl = supportCheck([fallCanary(true)]);
  if (!fFree.hits.some((h) => h.kind === "FLOAT")) out.push(`SUPPORT canary: an undeclared box in mid-air gave [${kinds(fFree)}], not a FLOAT`);
  if (fDecl.hits.length) out.push(`SUPPORT canary: a box declared falling gave [${kinds(fDecl)}], not nothing`);
  return out;
};
export { textCheck, passCheck, supportCheck };
