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
const shrinkOf = (g: THREE.BufferGeometry, s: number, scale: number, inside = false) => {
  const key = `${g.uuid}|${s}|${scale.toFixed(4)}|${inside ? 1 : 0}`;
  let e = shrunk.get(key);
  if (!e) {
    const geo = g.clone();
    // pull every face in by `s` world units (a part RESTING on another then stands `2s` clear of it)
    const pos = geo.attributes.position as THREE.BufferAttribute;
    if (!g.boundingBox) g.computeBoundingBox();
    const size = new THREE.Vector3(), c = new THREE.Vector3(); g.boundingBox!.getSize(size); g.boundingBox!.getCenter(c);
    const k = (s / Math.max(1e-6, scale)) * (inside ? -1 : 1);   // a surface seen from inside (BackSide: a drum's lining) pulls the other way
    const nor = geo.attributes.normal as THREE.BufferAttribute | undefined;
    if (nor && k !== 0 && Math.min(size.x, size.y, size.z) >= 3 * Math.abs(k)) {
      // ★ P17: along the NORMALS (a true inward offset). The homothetic shrink about the part's centre also shrank a part's
      //   HOLES (a vault's tunnel, a tag's punched hole) toward that centre, so a thing resting in a tunnel or a link through
      //   a hole read as crossing it. Thin parts (under 3 offsets thick) keep the homothetic shrink below.
      for (let i = 0; i < pos.count; i++) pos.setXYZ(i, pos.getX(i) - nor.getX(i) * k, pos.getY(i) - nor.getY(i) * k, pos.getZ(i) - nor.getZ(i) * k);
    } else {
      const ka = Math.abs(k), fx = size.x > 1e-6 ? 1 - Math.min(2 * ka, size.x / 1.5) / size.x : 1, fy = size.y > 1e-6 ? 1 - Math.min(2 * ka, size.y / 1.5) / size.y : 1, fz = size.z > 1e-6 ? 1 - Math.min(2 * ka, size.z / 1.5) / size.z : 1;
      for (let i = 0; i < pos.count; i++) pos.setXYZ(i, c.x + (pos.getX(i) - c.x) * fx, c.y + (pos.getY(i) - c.y) * fy, c.z + (pos.getZ(i) - c.z) * fz);
    }
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
const backOf = (m: THREE.Mesh) => { const x = Array.isArray(m.material) ? m.material[0] : m.material; return x?.side === THREE.BackSide; };
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
      const A = shrinkOf(ms[i].geometry, s, scaleOf(i, t), backOf(ms[i])), B = shrinkOf(ms[j].geometry, s, scaleOf(j, t), backOf(ms[j]));
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

// ── 3. SUPPORT (★ P17, Timur 2026-11-20: "the t-shirts are literally floating… the poles aren't holding up the metal bar… the
//    sign at 28 seconds, it's floating… the metal circle that's holding the Manchester United sign, it's not even attached
//    to the thing on top of it"). NOTHING FLOATS. On every sampled frame:
//   · BODIES: meshes that never move relative to each other AND touch (surfaces within TOL, or crossing) are welded into one
//     body; a text's glyphs are one body with each other. A panel that hovers 40 units over its post is a body of its own.
//   · A body is held when (a) it stands on the floor (its true lowest point within TOL of y = 0), (b) it RESTS on a held
//     body: points on its own UNDERSIDE (its lowest band) lie within TOL of the other's surface or inside it (a post run up
//     into a sign's frame, a crest seated in its cradle); a touch on its side is not support, or (c) it is DECLARED hung or
//     mounted (kit.ts hangs / mounted) from a held body and the two declared meshes touch (≤ TOL; interlocked loops, a link
//     through a link, are declared `linked` and must interpenetrate in their bounding volumes) on that frame: a declaration
//     that does not touch is itself a fault (HOLD), or (d) it is declared `falling` on that frame (≤ 20 frames).
//     Anything else is a FLOAT, reported with its gap to whatever is under it.
//   · A body sunk more than SINK units into the floor is reported too (it crosses the floor).
// Turn cards (stage "card") have no floor and are skipped.
export type SupportHit = { place: string; kind: "FLOAT" | "HOLD" | "SINK"; part: string; by?: string; frame: number; gap: number; frames: number; why?: string };
export type SupportReport = { hits: SupportHit[]; bodies: number; samples: number; declared: number; falling: number };
export type SupportRun = PlaceRun & { stage?: (f: number) => string };
export type Held = { by: THREE.Mesh; kind: "hangs" | "mounted"; why: string; linked?: boolean };

export const SUPPORT_TOL = 0.5;
const TOLX = SUPPORT_TOL + 0.01, SINK = 8;   // (+0.01: float noise on a turned part; a print 0.5 off its face is ON it)
/** the geometry without degenerate triangles, and its BVH (cached) */
const cleanOf = (g: THREE.BufferGeometry) => shrinkOf(g, 0, 1);
const supportItems = (root: THREE.Object3D) => {
  const out: { m: THREE.Mesh; text: THREE.Object3D | null }[] = [];
  root.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh || !m.geometry?.attributes?.position) return;
    let text: THREE.Object3D | null = null;
    for (let n: THREE.Object3D | null = m; n; n = n.parent) { if (n.userData.isFloor) return; if (n.userData.isText && !text) text = n; }
    const mats = Array.isArray(m.material) ? m.material : [m.material];
    if (mats.some((x) => x.blending === THREE.AdditiveBlending)) return;
    out.push({ m, text });
  });
  return out;
};
const scaleMin = (m: THREE.Matrix4) => { const e = m.elements; return Math.min(Math.hypot(e[0], e[1], e[2]), Math.hypot(e[4], e[5], e[6]), Math.hypot(e[8], e[9], e[10])); };
/** the closest points of two meshes' surfaces, in WORLD units (null: farther apart than `max`). `early`: stop at the first
 *  pair within `max` (a yes/no question; much faster on two broad faces in contact) */
const _inv = new THREE.Matrix4(), _rel = new THREE.Matrix4();
const aniso = (m: THREE.Matrix4) => { const e = m.elements, s = [Math.hypot(e[0], e[1], e[2]), Math.hypot(e[4], e[5], e[6]), Math.hypot(e[8], e[9], e[10])]; return Math.max(...s) / Math.max(1e-9, Math.min(...s)); };
export const meshGap = (a0: THREE.Mesh, b0: THREE.Mesh, max = TOLX, early = true): { d: number; pa: THREE.Vector3; pb: THREE.Vector3 } | null => {
  // measure in the frame of the less stretched of the two (a cable scaled 1,500× along its length distorts distances)
  if (aniso(a0.matrixWorld) > aniso(b0.matrixWorld) * 1.01) { const r = meshGap(b0, a0, max, early); return r && { d: r.d, pa: r.pb, pb: r.pa }; }
  const a = a0, b = b0;
  const A = cleanOf(a.geometry), B = cleanOf(b.geometry);
  if (!A.geo.index || A.geo.index.count === 0 || !B.geo.index || B.geo.index.count === 0) return null;
  _inv.copy(a.matrixWorld).invert(); _rel.multiplyMatrices(_inv, b.matrixWorld);
  const t1 = {} as { point: THREE.Vector3; distance: number; faceIndex: number }, t2 = {} as { point: THREE.Vector3; distance: number; faceIndex: number };
  const lim = max / Math.max(1e-6, scaleMin(a.matrixWorld)) + 1e-6;
  const r = A.bvh.closestPointToGeometry(B.geo, _rel, t1, t2, early ? lim : 0, lim);
  if (!r || !t1.point || !t2.point) return null;
  const pa = t1.point.clone().applyMatrix4(a.matrixWorld), pb = t2.point.clone().applyMatrix4(b.matrixWorld);   // (target2 is in b's own frame)
  const d = pa.distanceTo(pb);
  return d <= max ? { d, pa, pb } : null;
};
/** are two meshes' surfaces within `tol` (or crossing)? A fast test for the common case: do they cross, or does one of them,
 *  swollen by `tol` along its normals, cross the other? (three-mesh-bvh's exact closest-point search took minutes on the
 *  stadium against the glass pipe.) A part too thin to swell (a printed plane) falls back to the exact search. */
const _r2 = new THREE.Matrix4(), _i2 = new THREE.Matrix4();
const swellable = (g: THREE.BufferGeometry, tol: number, scale: number) => {
  if (!g.attributes.normal) return false;
  if (!g.boundingBox) g.computeBoundingBox();
  const sz = new THREE.Vector3(); g.boundingBox!.getSize(sz);
  return Math.min(sz.x, sz.y, sz.z) >= (3 * tol) / Math.max(1e-6, scale);
};
const scaleAvg = (m: THREE.Matrix4) => { const e = m.elements; return (Math.hypot(e[0], e[1], e[2]) + Math.hypot(e[4], e[5], e[6]) + Math.hypot(e[8], e[9], e[10])) / 3; };
export const within = (a: THREE.Mesh, b: THREE.Mesh, tol = TOLX): boolean => {
  const A = cleanOf(a.geometry), B = cleanOf(b.geometry);
  if (!A.geo.index || A.geo.index.count === 0 || !B.geo.index || B.geo.index.count === 0) return false;
  _i2.copy(a.matrixWorld).invert(); _r2.multiplyMatrices(_i2, b.matrixWorld);
  if (A.bvh.intersectsGeometry(B.geo, _r2)) return true;
  const sa = scaleAvg(a.matrixWorld), sb = scaleAvg(b.matrixWorld);
  const okA = swellable(a.geometry, tol, sa) && aniso(a.matrixWorld) < 1.05, okB = swellable(b.geometry, tol, sb) && aniso(b.matrixWorld) < 1.05;
  if (!okA && !okB) return !!meshGap(a, b, tol);
  if (okA) { const SA = shrinkOf(a.geometry, -tol, sa, backOf(a)); if (SA.bvh.intersectsGeometry(B.geo, _r2)) return true; }
  if (okB) { const SB = shrinkOf(b.geometry, -tol, sb, backOf(b)); _i2.copy(b.matrixWorld).invert(); _r2.multiplyMatrices(_i2, a.matrixWorld); if (SB.bvh.intersectsGeometry(A.geo, _r2)) return true; }
  return false;
};
/** two interlocked loops (a link through a link, a ring through an eye): the child's box, taken in the parent's frame,
 *  overlaps the parent's own box */
const linkedTouch = (c: THREE.Mesh, p: THREE.Mesh) => {
  if (!c.geometry.boundingBox) c.geometry.computeBoundingBox();
  if (!p.geometry.boundingBox) p.geometry.computeBoundingBox();
  const m = new THREE.Matrix4().copy(p.matrixWorld).invert().multiply(c.matrixWorld);
  const b = c.geometry.boundingBox!.clone().applyMatrix4(m);
  return b.intersectsBox(p.geometry.boundingBox!);
};
/** the mesh's true lowest world y (its vertices, not its box) */
const lowest = (m: THREE.Mesh) => {
  const pos = m.geometry.attributes.position as THREE.BufferAttribute, e = m.matrixWorld.elements;
  let lo = Infinity;
  for (let i = 0; i < pos.count; i++) { const y = e[1] * pos.getX(i) + e[5] * pos.getY(i) + e[9] * pos.getZ(i) + e[13]; if (y < lo) lo = y; }
  return lo;
};
const poseKey = (m: THREE.Matrix4) => { const e = m.elements; return [e[0], e[1], e[2], e[4], e[5], e[6], e[8], e[9], e[10], e[12], e[13], e[14]].map((v) => v.toFixed(2)).join(","); };
const _ray = new THREE.Ray(), _v = new THREE.Vector3(), _w = new THREE.Vector3();
/** points on a body's UNDERSIDE (world): its vertices in its lowest band, and a grid of rays shot up into it from below */
const undersideOf = (meshes: THREE.Mesh[], boxes: THREE.Box3[], lo: number, band: number) => {
  const pts: THREE.Vector3[] = [];
  const bb = new THREE.Box3(); for (const b of boxes) bb.union(b);
  for (const m of meshes) {
    const pos = m.geometry.attributes.position as THREE.BufferAttribute, every = Math.max(1, Math.floor(pos.count / 4000));
    for (let i = 0; i < pos.count; i += every) { _v.fromBufferAttribute(pos, i).applyMatrix4(m.matrixWorld); if (_v.y <= lo + band) pts.push(_v.clone()); }
  }
  const N = 14, inv = new THREE.Matrix4();
  for (let a = 0; a <= N; a++) for (let c = 0; c <= N; c++) {
    const x = bb.min.x + ((bb.max.x - bb.min.x) * a) / N, z = bb.min.z + ((bb.max.z - bb.min.z) * c) / N;
    let best = Infinity;
    for (const m of meshes) {
      inv.copy(m.matrixWorld).invert();
      _ray.origin.set(x, lo - 2, z).applyMatrix4(inv); _ray.direction.set(0, 1, 0).transformDirection(inv);
      const h = cleanOf(m.geometry).bvh.raycastFirst(_ray, THREE.DoubleSide);
      if (h) { _w.copy(h.point).applyMatrix4(m.matrixWorld); if (_w.y < best) best = _w.y; }
    }
    if (best <= lo + band) pts.push(new THREE.Vector3(x, best, z));
  }
  // thin out a dense underside (a lathe's foot): at most ~240 points
  if (pts.length > 240) { const k = Math.ceil(pts.length / 240); return pts.filter((_, i) => i % k === 0); }
  return pts;
};
/** is point p (world) within TOL of mesh m's surface, or inside it (an odd number of crossings straight up)? */
const touchesOrInside = (p: THREE.Vector3, m: THREE.Mesh) => {
  const C = cleanOf(m.geometry), inv = new THREE.Matrix4().copy(m.matrixWorld).invert();
  const local = p.clone().applyMatrix4(inv), s = scaleMin(m.matrixWorld);
  const t = C.bvh.closestPointToPoint(local, {} as { point: THREE.Vector3; distance: number; faceIndex: number }, 0, TOLX / Math.max(1e-6, s));
  if (t) { const q = t.point.clone().applyMatrix4(m.matrixWorld); if (q.distanceTo(p) <= TOLX) return true; }
  _ray.origin.copy(local); _ray.direction.set(0, 1, 0).transformDirection(inv);
  const hits = C.bvh.raycast(_ray, THREE.DoubleSide);
  return hits.length % 2 === 1;
};
export const supportCheck = (places: SupportRun[], step = 3): SupportReport => {
  const hits = new Map<string, SupportHit>();
  let bodiesN = 0, samples = 0, declared = 0, fallingN = 0;
  const hit = (h: Omit<SupportHit, "frames">, key: string) => {
    const o = hits.get(key);
    if (!o) hits.set(key, { ...h, frames: 1 }); else { o.frames++; if (h.gap > o.gap) { o.gap = h.gap; o.frame = h.frame; } }
  };
  for (const pl of places) {
    const b = pl.build(), root = b.group;
    const items = supportItems(root), ms = items.map((x) => x.m);
    const frames: number[] = [];
    for (let f = pl.from; f < pl.to; f += step) if ((pl.stage?.(f) ?? "dark") !== "card") frames.push(f);
    // and every declared fall's first and last frame (a fall shorter than the step is still seen)
    if (!frames.length) continue;
    // poses per sampled frame, then the rigid parts (as the pass-through check finds them)
    const M = ms.map(() => new Float64Array(frames.length * 16)), ON = ms.map(() => new Uint8Array(frames.length));
    frames.forEach((f, t) => { b.update(f); root.updateMatrixWorld(true); ms.forEach((m, i) => { ON[i][t] = shown(m, root) ? 1 : 0; M[i].set(m.matrixWorld.elements, t * 16); }); });
    const mA = new THREE.Matrix4(), mB = new THREE.Matrix4(), rel = new THREE.Matrix4(), r0 = new Float64Array(16), r1 = new Float64Array(16);
    const relOf = (i: number, j: number, t: number, out: Float64Array) => { mA.fromArray(M[i], t * 16).invert(); mB.fromArray(M[j], t * 16); rel.multiplyMatrices(mA, mB); out.set(rel.elements); };
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
    const part = ms.map(() => -1), reps: number[] = [];
    ms.forEach((_, i) => { for (const r of reps) if (rigid(r, i)) { part[i] = part[r]; return; } part[i] = reps.length; reps.push(i); });
    const idx = new Map(ms.map((m, i) => [m, i] as const));
    // the declarations
    // a text registered ON a surface (kit.ts textOn) is mounted on it: its glyphs must touch that face (a counter's glyphs
    //   move as it counts, so they are never one rigid part with their plate)
    const fitOf = (m: THREE.Mesh) => { for (let n: THREE.Object3D | null = m; n; n = n.parent) if (n.userData.fitOn) return n.userData.fitOn as THREE.Mesh; return null; };
    const held = ms.map((m, i) => {
      const l = ((m.userData.heldBy as Held[] | undefined) ?? []).filter((h) => idx.has(h.by));
      const on = items[i].text ? fitOf(m) : null;
      if (on && (on as THREE.Mesh).isMesh && idx.has(on)) l.push({ by: on, kind: "mounted", why: "a text printed on its surface (textOn)" });
      return l;
    });
    for (const h of held) declared += h.length;
    const fallOf = ms.map((m) => { const w: [number, number, string][] = []; for (let n: THREE.Object3D | null = m; n; n = n.parent) for (const x of (n.userData.falling as [number, number, string][] | undefined) ?? []) w.push(x); return w; });
    const weld = new Map<string, boolean>();
    // each mesh's OBJECT: the group under the place's root that holds it (descending through groups of groups, a "set"):
    //   parts of one object weld where they meet; two objects are only ever held by resting or a declared hang or mount
    const objOf = (m: THREE.Object3D) => {
      const chain: THREE.Object3D[] = [];
      for (let n: THREE.Object3D | null = m; n && n !== root; n = n.parent) chain.unshift(n);
      let k = 0;
      while (k < chain.length - 1 && chain[k].children.every((c) => !(c as THREE.Mesh).isMesh)) k++;
      return chain[k] ?? m;
    };
    const obj = ms.map(objOf);
    const boxes = ms.map(() => new THREE.Box3());
    const low = new Map<string, number>();
    const lowOf = (i: number) => { const k = `${i}|${poseKey(ms[i].matrixWorld)}`; let v = low.get(k); if (v === undefined) { v = lowest(ms[i]); low.set(k, v); } return v; };
    const restCache = new Map<string, boolean>();
    const near = (a: THREE.Box3, c: THREE.Box3, tol = TOLX) => !(a.min.x > c.max.x + tol || c.min.x > a.max.x + tol || a.min.y > c.max.y + tol || c.min.y > a.max.y + tol || a.min.z > c.max.z + tol || c.min.z > a.max.z + tol);
    const touchCache = new Map<string, boolean>(), relM = new THREE.Matrix4();
    /** a declared hold, verified (cached by the two meshes' relative pose: a rigid pair is measured once) */
    const touch = (i: number, h: Held) => {
      const j = idx.get(h.by)!;
      relM.copy(ms[j].matrixWorld).invert().multiply(ms[i].matrixWorld);
      const key = `${i}|${j}|${poseKey(relM)}|${(ms[i].geometry as THREE.BufferGeometry).uuid}`;
      let v = touchCache.get(key);
      if (v === undefined) { v = h.linked ? linkedTouch(ms[i], ms[j]) : within(ms[i], ms[j]); touchCache.set(key, v); }
      return v;
    };
    frames.forEach((f, t) => {
      b.update(f); root.updateMatrixWorld(true);
      samples++;
      const on: number[] = [];
      ms.forEach((m, i) => { if (!ON[i][t]) return; if (!m.geometry.boundingBox) m.geometry.computeBoundingBox(); boxes[i].copy(m.geometry.boundingBox!).applyMatrix4(m.matrixWorld); on.push(i); });
      // weld into bodies
      const up = ms.map((_, i) => i);
      const find = (i: number): number => { while (up[i] !== i) { up[i] = up[up[i]]; i = up[i]; } return i; };
      const join = (i: number, j: number) => { up[find(i)] = find(j); };
      const textRep = new Map<THREE.Object3D, number>();
      for (const i of on) { const tx = items[i].text; if (tx) { const r = textRep.get(tx); if (r === undefined) textRep.set(tx, i); else join(i, r); } }
      for (let a = 0; a < on.length; a++) for (let c = a + 1; c < on.length; c++) {
        const i = on[a], j = on[c];
        if (part[i] !== part[j] || obj[i] !== obj[j] || !near(boxes[i], boxes[j])) continue;
        const key = i < j ? `${i}|${j}` : `${j}|${i}`;
        let w = weld.get(key);
        if (w === undefined) {
          w = within(ms[i], ms[j]);
          // a part wholly inside another (no surface meets) is held by it too
          if (!w && (boxes[j].containsBox(boxes[i]) || boxes[i].containsBox(boxes[j]))) { const [o, c] = boxes[j].containsBox(boxes[i]) ? [i, j] : [j, i]; w = touchesOrInside(new THREE.Vector3().fromBufferAttribute(ms[o].geometry.attributes.position as THREE.BufferAttribute, 0).applyMatrix4(ms[o].matrixWorld), ms[c]); }
          weld.set(key, w);
        }
        if (w) join(i, j);
      }
      const bodyOf = new Map<number, number[]>();
      for (const i of on) { const r = find(i); let l = bodyOf.get(r); if (!l) bodyOf.set(r, (l = [])); l.push(i); }
      const bodies = [...bodyOf.values()];
      bodiesN += bodies.length;
      const bb = bodies.map((l) => { const x = new THREE.Box3(); for (const i of l) x.union(boxes[i]); return x; });
      const lo = bodies.map((l, k) => { let v = Infinity; for (const i of l) if (boxes[i].min.y <= bb[k].min.y + 40) v = Math.min(v, lowOf(i)); return v; });
      const state = bodies.map(() => 0);   // 0 unknown, 1 held
      const bodyIdx = new Map<number, number>(); bodies.forEach((l, k) => { for (const i of l) bodyIdx.set(i, k); });
      const nameOf = (k: number) => { let best = bodies[k][0], v = -1; for (const i of bodies[k]) { const sz = new THREE.Vector3(); boxes[i].getSize(sz); const vol = (sz.x + 1) * (sz.y + 1) * (sz.z + 1); if (!items[i].text && vol > v) { v = vol; best = i; } } return labelOf(ms[best], root); };
      bodies.forEach((l, k) => {
        if (lo[k] <= TOLX) { state[k] = 1; if (lo[k] < -SINK) hit({ place: pl.id, kind: "SINK", part: nameOf(k), frame: f, gap: -lo[k] }, `${pl.id}|sink|${nameOf(k)}`); }
        if (l.some((i) => fallOf[i].some(([a, z]) => f >= a && f <= z))) { state[k] = 1; fallingN++; }
      });
      // the declared holds: verified on every frame both show
      for (const i of on) for (const h of held[i]) {
        const j = idx.get(h.by)!;
        if (!ON[j][t] || touch(i, h)) continue;
        const g = meshGap(ms[i], ms[j], 1e5, false);
        hit({ place: pl.id, kind: "HOLD", part: labelOf(ms[i], root), by: labelOf(ms[j], root), frame: f, gap: g?.d ?? 1e9, why: h.why }, `${pl.id}|hold|${i}|${j}`);
      }
      // propagate: rests on a held body, or declared held by one (and touching)
      const under = new Map<number, THREE.Vector3[]>();
      const rests = (k: number, s: number) => {
        const i0 = bodies[k][0], j0 = bodies[s][0];
        mA.copy(ms[j0].matrixWorld).invert().multiply(ms[i0].matrixWorld);
        const key = `${bodies[k].join(",")}|${bodies[s].join(",")}|${poseKey(mA)}`;
        let v = restCache.get(key);
        if (v !== undefined) return v;
        let pts = under.get(k);
        if (!pts) {
          const band = Math.max(3, Math.min(30, 0.03 * (bb[k].max.y - bb[k].min.y)));
          const low_ = bodies[k].filter((i) => boxes[i].min.y <= lo[k] + band);
          pts = undersideOf(low_.map((i) => ms[i]), low_.map((i) => boxes[i]), lo[k], band);
          under.set(k, pts);
        }
        v = false;
        const band = Math.max(3, Math.min(30, 0.03 * (bb[k].max.y - bb[k].min.y)));
        for (const j of bodies[s]) {
          // only a supporter's part that reaches the body's underside band can hold it up
          if (boxes[j].max.y < lo[k] - TOLX || boxes[j].min.y > lo[k] + band + TOLX) continue;
          const bx = boxes[j].clone().expandByScalar(TOLX);
          for (const p of pts) if (bx.containsPoint(p) && touchesOrInside(p, ms[j])) { v = true; break; }
          if (v) break;
        }
        restCache.set(key, v);
        return v;
      };
      for (let changed = true; changed;) {
        changed = false;
        for (let k = 0; k < bodies.length; k++) {
          if (state[k]) continue;
          let ok = false;
          for (const i of bodies[k]) { for (const h of held[i]) { const j = idx.get(h.by)!; const s = bodyIdx.get(j); if (s !== undefined && state[s] && touch(i, h)) { ok = true; break; } } if (ok) break; }
          if (!ok) for (let s = 0; s < bodies.length && !ok; s++) if (state[s] && s !== k && bb[s].min.y <= lo[k] + TOLX && near(bb[k], bb[s])) ok = rests(k, s);
          if (ok) { state[k] = 1; changed = true; }
        }
      }
      bodies.forEach((_, k) => {
        if (state[k]) return;
        // its gap: straight down to the nearest thing under it (or the floor)
        let gap = lo[k];
        for (let s = 0; s < bodies.length; s++) if (s !== k && bb[s].max.y <= lo[k] + TOLX && bb[s].min.x <= bb[k].max.x && bb[s].max.x >= bb[k].min.x && bb[s].min.z <= bb[k].max.z && bb[s].max.z >= bb[k].min.z) gap = Math.min(gap, lo[k] - bb[s].max.y);
        const nm = nameOf(k);
        hit({ place: pl.id, kind: "FLOAT", part: nm, frame: f, gap: Math.max(0, gap) }, `${pl.id}|float|${nm}`);
      });
    });
  }
  return { hits: [...hits.values()], bodies: bodiesN, samples, declared, falling: fallingN };
};
