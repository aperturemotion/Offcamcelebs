// The world checks' entry for Node (scratchpad/worldcheck.mjs bundles this): the film's places, and the CANARIES: each
// check must FIRE on a planted fault and stay SILENT without it, or its result means nothing.
import * as THREE from "three";
import { PLACES, WINDOWS } from "./film3d";
import { textCheck, passCheck, type PlaceRun } from "./check";
import { MAT, rbox, textOn, joined } from "./kit";
import { text3d } from "./text3d";
import { lit } from "./kit";

export const filmPlaces = (only?: string): PlaceRun[] =>
  PLACES.map((p, i) => ({ id: p.id as string, from: WINDOWS[i].from, to: WINDOWS[i].to, build: p.build })).filter((p) => !only || p.id === only);

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
  return out;
};
export { textCheck, passCheck };
