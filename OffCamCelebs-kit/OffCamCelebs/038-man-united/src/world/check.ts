// ═════════════════════════════════════════════════════════════════════════════════════════════
// THE WORLD CHECKS (P14: Timur, 2026-11-19, on 037 v2: "text… should actually fit on the object that it's on… do a sweep
// for that" and "the flat object within the drawer literally clips through the top of the cabinet… You need to be able to
// detect things like this"). Two checks over the built film, run in Node by scratchpad/worldcheck.mjs (no GL needed: the
// places are plain three.js groups and their `update(f)` is a pure function of the frame):
//   1. TEXT-ON-SURFACE   every text (a group marked `userData.isText` by text3d / numeral3d) is registered with the face it
//      sits on (kit.ts `textOn`, `plateOn`) or declared free-standing (`freeText`). On every sampled frame the text's box,
//      taken in the surface's own plane, must lie inside the surface's face with a margin (6% of the text's height).
//   2. PASS-THROUGH      every pair of solid meshes that MOVE relative to each other is tested for real triangle crossings
//      (three-mesh-bvh) deeper than 1 unit. Meshes that never move relative to each other are one rigid part (a designed
//      join); a pair that crosses by design is declared with kit.ts `joined(a, b, why)`.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { MeshBVH } from "three-mesh-bvh";
import type { Built } from "./place";

export type PlaceRun = { id: string; from: number; to: number; build: () => Built };

const shown = (o: THREE.Object3D, root: THREE.Object3D) => { for (let n: THREE.Object3D | null = o; n; n = n.parent) { if (!n.visible) return false; if (n === root) return true; } return true; };
const labelOf = (o: THREE.Object3D, root: THREE.Object3D) => {
  const names: string[] = [];
  for (let n: THREE.Object3D | null = o; n && n !== root; n = n.parent) if (n.name) names.unshift(n.name);
  const m = o as THREE.Mesh;
  let tail = "";
  if (m.isMesh) { m.geometry.computeBoundingBox(); const b = m.geometry.boundingBox!, s = new THREE.Vector3(); b.getSize(s); tail = `${m.geometry.type.replace("Geometry", "")}[${Math.round(s.x)}×${Math.round(s.y)}×${Math.round(s.z)}]`; }
  return [...names, tail].filter(Boolean).join(" › ") || o.type;
};
const corners = (b: THREE.Box3) => [0, 1, 2, 3, 4, 5, 6, 7].map((i) => new THREE.Vector3(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z));

// ── 1. TEXT ON SURFACE ──────────────────────────────────────────────────────────────────────────────────────────────────
export type TextHit = { place: string; text: string; surface: string; frame: number; side: string; over: number; frames: number };
export type TextReport = { hits: TextHit[]; unregistered: { place: string; text: string }[]; texts: number; free: number; samples: number };

const itemsOf = (root: THREE.Object3D) => {
  const fit: THREE.Object3D[] = [], free: THREE.Object3D[] = [], loose: THREE.Object3D[] = [];
  root.traverse((o) => {
    if (o.userData.fitOn) { fit.push(o); return; }
    if (!o.userData.isText) return;
    // a text inside a registered or declared ancestor is covered by it
    for (let n: THREE.Object3D | null = o; n; n = n.parent) { if (n.userData.fitFree) { free.push(o); return; } if (n !== o && n.userData.fitOn) return; }
    loose.push(o);
  });
  return { fit, free, loose };
};
/** the item's box in the surface's local frame, from its SHOWN meshes; null when nothing of it shows */
const boxIn = (item: THREE.Object3D, inv: THREE.Matrix4, root: THREE.Object3D) => {
  const box = new THREE.Box3(), v = new THREE.Vector3(), m4 = new THREE.Matrix4();
  let any = false;
  item.traverse((n) => {
    const mesh = n as THREE.Mesh;
    if (!mesh.isMesh || !mesh.geometry || !shown(mesh, root)) return;
    if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
    const b = mesh.geometry.boundingBox!;
    if (!Number.isFinite(b.min.x)) return;
    m4.multiplyMatrices(inv, mesh.matrixWorld);
    for (const c of corners(b)) { box.expandByPoint(v.copy(c).applyMatrix4(m4)); any = true; }
  });
  return any ? box : null;
};
const AX = ["x", "y", "z"] as const;
export const textCheck = (places: PlaceRun[], step = 2): TextReport => {
  const hits = new Map<string, TextHit>(), unregistered: TextReport["unregistered"] = [];
  let texts = 0, freeN = 0, samples = 0;
  for (const pl of places) {
    const b = pl.build(), root = b.group;
    const { fit, free, loose } = itemsOf(root);
    texts += fit.length; freeN += free.length;
    for (const o of loose) unregistered.push({ place: pl.id, text: `"${o.userData.textStr ?? "?"}" ${labelOf(o, root)}` });
    const inv = new THREE.Matrix4(), dir = new THREE.Vector3(), up = new THREE.Vector3(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), p0 = new THREE.Vector3();
    for (let f = pl.from; f < pl.to; f += step) {
      b.update(f);
      root.updateMatrixWorld(true);
      samples++;
      for (const item of fit) {
        const surf = item.userData.fitOn as THREE.Mesh;
        if (!surf.isMesh) throw new Error(`world check: ${pl.id}: "${item.userData.textStr}" is registered on a ${surf.type}, not a Mesh`);
        if (!shown(surf, root)) continue;
        inv.copy(surf.matrixWorld).invert();
        const tb = boxIn(item, inv, root);
        if (!tb) continue;
        if (!surf.geometry.boundingBox) surf.geometry.computeBoundingBox();
        const sb = surf.geometry.boundingBox!;
        // the surface's normal axis: where the item's own z points, in the surface's frame
        dir.set(0, 0, 1).transformDirection(item.matrixWorld).transformDirection(inv);
        let n = Math.abs(dir.x) > Math.abs(dir.y) && Math.abs(dir.x) > Math.abs(dir.z) ? 0 : Math.abs(dir.y) > Math.abs(dir.z) ? 1 : 2;
        // the item's height: its extent along its own y, in the surface's frame
        up.set(0, 1, 0).transformDirection(item.matrixWorld).transformDirection(inv);
        const hAxis = [0, 1, 2].filter((k) => k !== n).sort((a2, b2) => Math.abs(up.getComponent(b2)) - Math.abs(up.getComponent(a2)))[0];
        const height = tb.max.getComponent(hAxis) - tb.min.getComponent(hAxis);
        const margin = ((item.userData.fitMargin as number | undefined) ?? 0.06) * height;
        // numerals STANDING on the surface: their footprint (every axis but their own up) must lie on it
        if (item.userData.fitStand) n = hAxis;
        surf.matrixWorld.decompose(p0, q, sc);
        const inset = (item.userData.fitInset as number) ?? 0;
        let worst = 0, side = "";
        const round = item.userData.fitRound as number | undefined;
        if (round !== undefined) {
          // a disc face: every corner of the text's box within the radius (less the margin), about the surface's own centre
          const c = new THREE.Vector3(); sb.getCenter(c);
          const [a1, a2] = [0, 1, 2].filter((k) => k !== n);
          for (const s1 of [tb.min, tb.max]) for (const s2 of [tb.min, tb.max]) {
            const d = Math.hypot(s1.getComponent(a1) - c.getComponent(a1), s2.getComponent(a2) - c.getComponent(a2));
            const over = d - (round - margin);
            if (over > worst) { worst = over; side = "rim"; }
          }
        } else {
          for (const k of [0, 1, 2]) {
            if (k === n) continue;
            const lo = sb.min.getComponent(k) + inset + margin, hi = sb.max.getComponent(k) - inset - margin;
            const o1 = (lo - tb.min.getComponent(k)) * sc.getComponent(k), o2 = (tb.max.getComponent(k) - hi) * sc.getComponent(k);
            if (o1 > worst) { worst = o1; side = `−${AX[k]}`; }
            if (o2 > worst) { worst = o2; side = `+${AX[k]}`; }
          }
        }
        if (worst > 0.5) {
          const key = `${pl.id}|${item.uuid}`;
          const h = hits.get(key);
          const str = item.userData.fitPlate ? `plate ${labelOf(item, root)}` : `"${item.userData.textStr ?? "?"}"`;
          if (!h) hits.set(key, { place: pl.id, text: str, surface: labelOf(surf, root), frame: f, side, over: worst, frames: 1 });
          else { h.frames++; if (worst > h.over) { h.over = worst; h.frame = f; h.side = side; h.text = str; } }
        }
      }
    }
  }
  return { hits: [...hits.values()], unregistered, texts, free: freeN, samples };
};

// ── 2. PASS-THROUGH ─────────────────────────────────────────────────────────────────────────────────────────────────────
export type PassHit = { place: string; a: string; b: string; frame: number; depth: number; frames: number };
export type PassReport = { hits: PassHit[]; meshes: number; parts: number; samples: number; tested: number; declared: number };

const SHRINKS = [1, 2, 4, 8, 16, 32];
const shrunk = new Map<string, { geo: THREE.BufferGeometry; bvh: MeshBVH }>();
/** the geometry pulled in along its normals by `s` world units, with its BVH (cached) */
const shrinkOf = (g: THREE.BufferGeometry, s: number, scale: number) => {
  const key = `${g.uuid}|${s}|${scale.toFixed(4)}`;
  let e = shrunk.get(key);
  if (!e) {
    const geo = g.clone();
    // pull every face in by `s` world units: a homothetic shrink about the part's own centre, per axis (robust whatever the
    //   normals are; a part RESTING on another then stands `2s` clear of it). Never by more than a third of a side.
    const pos = geo.attributes.position as THREE.BufferAttribute;
    if (!g.boundingBox) g.computeBoundingBox();
    const size = new THREE.Vector3(), c = new THREE.Vector3(); g.boundingBox!.getSize(size); g.boundingBox!.getCenter(c);
    const k = s / Math.max(1e-6, scale);
    const fx = size.x > 1e-6 ? 1 - Math.min(2 * k, size.x / 1.5) / size.x : 1, fy = size.y > 1e-6 ? 1 - Math.min(2 * k, size.y / 1.5) / size.y : 1, fz = size.z > 1e-6 ? 1 - Math.min(2 * k, size.z / 1.5) / size.z : 1;
    for (let i = 0; i < pos.count; i++) pos.setXYZ(i, c.x + (pos.getX(i) - c.x) * fx, c.y + (pos.getY(i) - c.y) * fy, c.z + (pos.getZ(i) - c.z) * fz);
    pos.needsUpdate = true;
    // ★ drop DEGENERATE triangles (a lathe run in to its axis, a cylinder's cap fan): three-mesh-bvh's triangle test
    //   reports a zero-area triangle as crossing things it is nowhere near (measured: a pan's wire "crossed" a token 150
    //   units away; NEW_VIDEO.md has the same note from 031)
    const idx = geo.index ? Array.from(geo.index.array as ArrayLike<number>) : Array.from({ length: pos.count }, (_, i) => i);
    const keep: number[] = [], A = new THREE.Vector3(), B = new THREE.Vector3(), C2 = new THREE.Vector3(), ab = new THREE.Vector3(), ac = new THREE.Vector3();
    for (let i = 0; i + 2 < idx.length; i += 3) {
      A.fromBufferAttribute(pos, idx[i]); B.fromBufferAttribute(pos, idx[i + 1]); C2.fromBufferAttribute(pos, idx[i + 2]);
      if (ab.subVectors(B, A).cross(ac.subVectors(C2, A)).lengthSq() > 1e-10) keep.push(idx[i], idx[i + 1], idx[i + 2]);
    }
    geo.setIndex(keep);
    geo.computeBoundingBox();
    e = { geo, bvh: new MeshBVH(geo) };
    shrunk.set(key, e);
  }
  return e;
};
const solidsOf = (root: THREE.Object3D) => {
  const out: THREE.Mesh[] = [];
  root.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh || !m.geometry?.attributes?.position) return;
    for (let n: THREE.Object3D | null = m; n; n = n.parent) if (n.userData.isText || n.userData.isFloor || n.userData.noClip) return;
    const mats = Array.isArray(m.material) ? m.material : [m.material];
    if (mats.some((x) => x.transparent || x.blending === THREE.AdditiveBlending)) return;
    out.push(m);
  });
  return out;
};
const sameRel = (a: Float64Array, b: Float64Array) => {
  for (let i = 0; i < 16; i++) { const tol = i === 12 || i === 13 || i === 14 ? 0.05 : 2e-4; if (Math.abs(a[i] - b[i]) > tol) return false; }
  return true;
};
export const passCheck = (places: PlaceRun[], step = 3, minDepth = 1): PassReport => {
  const hits = new Map<string, PassHit>();
  let meshesN = 0, partsN = 0, samples = 0, tested = 0, declared = 0;
  const mA = new THREE.Matrix4(), mB = new THREE.Matrix4(), rel = new THREE.Matrix4(), v = new THREE.Vector3(), q = new THREE.Quaternion(), sc = new THREE.Vector3();
  for (const pl of places) {
    const b = pl.build(), root = b.group;
    const ms = solidsOf(root);
    meshesN += ms.length;
    const frames: number[] = [];
    for (let f = pl.from; f < pl.to; f += step) frames.push(f);
    // record every mesh's pose and whether it shows, per sampled frame
    const M = ms.map(() => new Float64Array(frames.length * 16)), ON = ms.map(() => new Uint8Array(frames.length));
    const BX = ms.map(() => new Float64Array(frames.length * 6));
    const box = new THREE.Box3();
    frames.forEach((f, t) => {
      b.update(f);
      root.updateMatrixWorld(true);
      ms.forEach((m, i) => {
        ON[i][t] = shown(m, root) ? 1 : 0;
        M[i].set(m.matrixWorld.elements, t * 16);
        if (!m.geometry.boundingBox) m.geometry.computeBoundingBox();
        box.copy(m.geometry.boundingBox!).applyMatrix4(m.matrixWorld);
        BX[i].set([box.min.x, box.min.y, box.min.z, box.max.x, box.max.y, box.max.z], t * 6);
      });
    });
    samples += frames.length;
    // RIGID PARTS: two meshes whose relative pose never changes (while both show) are one part
    const part = ms.map(() => -1), reps: number[] = [];
    const relOf = (i: number, j: number, t: number, out: Float64Array) => {
      mA.fromArray(M[i], t * 16).invert(); mB.fromArray(M[j], t * 16); rel.multiplyMatrices(mA, mB);
      out.set(rel.elements);
    };
    const r0 = new Float64Array(16), r1 = new Float64Array(16);
    const rigid = (i: number, j: number) => {
      let first = true, both = 0;
      for (let t = 0; t < frames.length; t++) {
        if (!ON[i][t] || !ON[j][t]) continue;
        both++;
        if (first) { relOf(i, j, t, r0); first = false; continue; }
        relOf(i, j, t, r1);
        if (!sameRel(r0, r1)) return false;
      }
      return both > 0;
    };
    ms.forEach((_, i) => {
      for (const r of reps) if (rigid(r, i)) { part[i] = part[r]; return; }
      part[i] = reps.length; reps.push(i);
    });
    partsN += reps.length;
    // declared joins: an ancestor (or the mesh) of one names an ancestor (or the mesh) of the other
    const anc = ms.map((m) => { const s = new Set<THREE.Object3D>(); for (let n: THREE.Object3D | null = m; n; n = n.parent) s.add(n); return s; });
    const targets = ms.map((_, i) => { const s: THREE.Object3D[] = []; for (const n of anc[i]) for (const j of (n.userData.joinWith as THREE.Object3D[] | undefined) ?? []) s.push(j); return s; });
    const isDeclared = (i: number, j: number) => targets[i].some((o) => anc[j].has(o)) || targets[j].some((o) => anc[i].has(o));
    const scaleOf = (i: number, t: number) => { mA.fromArray(M[i], t * 16).decompose(v, q, sc); return (Math.abs(sc.x) + Math.abs(sc.y) + Math.abs(sc.z)) / 3; };
    const crosses = (i: number, j: number, t: number, s: number) => {
      const A = shrinkOf(ms[i].geometry, s, scaleOf(i, t)), B = shrinkOf(ms[j].geometry, s, scaleOf(j, t));
      mA.fromArray(M[i], t * 16).invert(); mB.fromArray(M[j], t * 16); rel.multiplyMatrices(mA, mB);
      if (!A.bvh.intersectsGeometry(B.geo, rel)) return false;
      // and the other way round: a true crossing is seen from both sides
      mA.fromArray(M[j], t * 16).invert(); mB.fromArray(M[i], t * 16); rel.multiplyMatrices(mA, mB);
      return B.bvh.intersectsGeometry(A.geo, rel);
    };
    for (let t = 0; t < frames.length; t++) {
      for (let i = 0; i < ms.length; i++) {
        if (!ON[i][t]) continue;
        const a = BX[i], o = t * 6;
        for (let j = i + 1; j < ms.length; j++) {
          if (!ON[j][t] || part[i] === part[j]) continue;
          const c = BX[j];
          if (a[o] > c[o + 3] || c[o] > a[o + 3] || a[o + 1] > c[o + 4] || c[o + 1] > a[o + 4] || a[o + 2] > c[o + 5] || c[o + 2] > a[o + 5]) continue;
          if (isDeclared(i, j)) { declared++; continue; }
          tested++;
          if (!crosses(i, j, t, minDepth)) continue;
          let depth = 2 * minDepth;
          for (const s of SHRINKS) { if (s <= minDepth) continue; if (crosses(i, j, t, s)) depth = 2 * s; else break; }
          const key = `${pl.id}|${ms[i].uuid}|${ms[j].uuid}`, h = hits.get(key);
          if (!h) hits.set(key, { place: pl.id, a: labelOf(ms[i], root), b: labelOf(ms[j], root), frame: frames[t], depth, frames: 1 });
          else { h.frames++; if (depth > h.depth) { h.depth = depth; h.frame = frames[t]; } }
        }
      }
    }
  }
  return { hits: [...hits.values()].sort((x, y) => y.depth - x.depth), meshes: meshesN, parts: partsN, samples, tested, declared };
};
