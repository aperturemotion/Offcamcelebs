// ══════════════════════════════════════════════════════════════════════════════════════════════
// ★★★★★ RULE 54 — THE 3-D AUDIT (user, 2026-10-09: "do a full sweep of the video to understand how many glitches there are
// in it. Sometimes visuals from previous scenes are still visible, sometimes 3d objects glitch through eachother, and
// overall, the 3d objects don't have enough shadows/highlights (basically the dark parts on them) to look 3d enough").
// Bundled only into the AUDIT build (scripts/build.mjs --audit → .build/film-audit.js); stage.ts calls `__g3after` on every
// view it has just drawn, and this module measures that view, on the frame as drawn:
//   · EDGES — anything drawn on the view's canvas border is CUT there by the canvas (a hard invisible edge). A border pixel
//     with alpha that is on screen is a glitch: a shadow, a floor or an object sliced by a line no viewer can explain.
//   · PEN — two OBJECTS passing through each other: every pair of meshes of different objects is tested triangle against
//     triangle (three-mesh-bvh), and each crossing is projected to the screen (its length and box in frame px). An object is
//     the nearest ancestor carrying `userData.obj`, else the model root's child it hangs from; `userData.pierces` lists the
//     objects it is BUILT to go through (a staple's legs, a strap round its bundle).
//   · SHADE — the form shading of every object: the frame as lit, against the same frame drawn unlit (its albedo: colour and
//     print), per object (an id pass). S = lit ÷ albedo per pixel is the light the object takes there; its spread is how much
//     light and shade model its form, print excluded.
// Each result is pushed to window.__g3out, which the harness collects after each frame.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { MeshBVH, ExtendedTriangle } from "three-mesh-bvh";

type Cfg = { edges?: boolean; pen?: boolean; shade?: boolean; float?: boolean; canary?: string };
type Win = { __g3cfg?: Cfg; __g3out?: unknown[]; __g3after?: unknown; __g3scenes?: Map<string, THREE.Scene> };
const W = window as unknown as Win;

const bvhOf = new WeakMap<THREE.BufferGeometry, { b: MeshBVH; v: number }>();
const bvh = (g: THREE.BufferGeometry) => {
  let e = bvhOf.get(g);
  const v = (g.attributes.position as THREE.BufferAttribute).version;
  if (!e) { e = { b: new MeshBVH(g), v }; bvhOf.set(g, e); }
  else if (e.v !== v) { e.b.refit(); e.v = v; }   // a sheet that reshapes as it moves (kit029 paper)
  return e.b;
};

/** the object a mesh belongs to, and whether it is drawn at all (every ancestor visible, no floor or backdrop above it) */
const objOf = (o: THREE.Object3D, root: THREE.Object3D) => {
  let n: THREE.Object3D | null = o, tag: string | null = null, node: THREE.Object3D | null = null;
  while (n && n !== root) {
    if (!n.visible || n.userData.isFloor || n.userData.noBounds) return null;
    if (!tag && n.userData.obj) { tag = n.userData.obj as string; node = n; }
    n = n.parent;
  }
  if (!n) return null;
  if (tag) return { name: tag, node: node! };
  // untagged: a sheet of paper is one object (its faces and its edge); anything else is its own mesh
  const p = o.parent;
  if (p && p.userData.unit) return { name: `sheet#${p.id}`, node: p };
  return { name: `${o.name || (o as THREE.Mesh).geometry?.type || "mesh"}#${o.id}`, node: o };
};

type Part = { mesh: THREE.Mesh; obj: string; node: THREE.Object3D; box: THREE.Box3 };
const partsOf = (root: THREE.Object3D, solidOnly: boolean) => {
  const out: Part[] = [];
  root.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh || !m.visible) return;
    const ob = objOf(m, root);
    if (!ob) return;
    const mats = Array.isArray(m.material) ? m.material : [m.material];
    // decals and glass (transparent, no depth) are films ON a surface, not solids
    if (solidOnly && mats.every((x) => x.transparent && !x.depthWrite)) return;
    if (!m.geometry.boundingBox) m.geometry.computeBoundingBox();
    out.push({ mesh: m, obj: ob.name, node: ob.node, box: m.geometry.boundingBox!.clone().applyMatrix4(m.matrixWorld) });
  });
  return out;
};

const proj = new THREE.Vector3();
const toScreen = (p: THREE.Vector3, cam: THREE.Camera, rect: DOMRect) => {
  proj.copy(p).project(cam);
  return { x: rect.left + ((proj.x + 1) / 2) * rect.width, y: rect.top + ((1 - proj.y) / 2) * rect.height };
};

// ── PEN: objects passing through each other ──
const line = new THREE.Line3();
const mTo = new THREE.Matrix4();
const pA = new THREE.Vector3(), pB = new THREE.Vector3();
const pen = (id: string, root: THREE.Object3D, cam: THREE.Camera, rect: DOMRect) => {
  const parts = partsOf(root, true);
  const byPair = new Map<string, { a: string; b: string; segs: number; len: number; x0: number; y0: number; x1: number; y1: number; on: number }>();
  for (let i = 0; i < parts.length; i++) for (let k = i + 1; k < parts.length; k++) {
    const A = parts[i], B = parts[k];
    if (A.obj === B.obj) continue;
    const pa = (A.node.userData.pierces as string[] | undefined) ?? [], pb = (B.node.userData.pierces as string[] | undefined) ?? [];
    if (pa.includes(B.obj) || pb.includes(A.obj)) continue;
    if (!A.box.intersectsBox(B.box)) continue;
    const ba = bvh(A.mesh.geometry), bb = bvh(B.mesh.geometry);
    mTo.copy(A.mesh.matrixWorld).invert().multiply(B.mesh.matrixWorld);
    const key = A.obj < B.obj ? `${A.obj}|${B.obj}` : `${B.obj}|${A.obj}`;
    let rec = byPair.get(key);
    let n = 0;
    ba.bvhcast(bb, mTo, {
      intersectsTriangles: (t1: ExtendedTriangle, t2: ExtendedTriangle) => {
        if (!t1.intersectsTriangle(t2, line)) return false;
        pA.copy(line.start).applyMatrix4(A.mesh.matrixWorld);
        pB.copy(line.end).applyMatrix4(A.mesh.matrixWorld);
        const s0 = toScreen(pA, cam, rect), s1 = toScreen(pB, cam, rect);
        if (!rec) { rec = { a: key.split("|")[0], b: key.split("|")[1], segs: 0, len: 0, x0: 1e9, y0: 1e9, x1: -1e9, y1: -1e9, on: 0 }; byPair.set(key, rec); }
        const L = Math.hypot(s1.x - s0.x, s1.y - s0.y);
        rec.segs++; rec.len += L;
        for (const s of [s0, s1]) {
          rec.x0 = Math.min(rec.x0, s.x); rec.y0 = Math.min(rec.y0, s.y); rec.x1 = Math.max(rec.x1, s.x); rec.y1 = Math.max(rec.y1, s.y);
          if (s.x >= 0 && s.x <= 1080 && s.y >= 0 && s.y <= 1920) rec.on += 0.5 * L;
        }
        return ++n > 20000;   // enough to know; never hang on a huge crossing
      },
    });
  }
  return Array.from(byPair.values()).map((r) => ({ ...r, len: +r.len.toFixed(1), on: +r.on.toFixed(1), x0: Math.round(r.x0), y0: Math.round(r.y0), x1: Math.round(r.x1), y1: Math.round(r.y1), view: id }));
};

// ── FLOAT: a part that touches nothing (user, 2026-10-12, 030: "the camera visual has a floating piece") ──
// PEN compares only DIFFERENT objects, so a part of one object hanging free of it (the camera's flip screen, 15 px off the
// body's side with nothing joining them) passed every sweep. Here every object's parts are joined into the pieces that touch
// (within FLOAT_TOL px, triangle to triangle: three-mesh-bvh closestPointToGeometry), and each piece must also rest on
// something: the floor, a backdrop, or another object. A piece that touches none of them is FLOATING, and is reported with
// its gap to the rest of its own object and its box on screen. Judged on SETTLED frames: a thing mid-move is in the air.
const FLOAT_TOL = 1.5;
const hit1 = { point: new THREE.Vector3(), distance: 0, faceIndex: 0 }, hit2 = { point: new THREE.Vector3(), distance: 0, faceIndex: 0 };
const scaleOf = (m: THREE.Matrix4) => {
  const e = m.elements;
  return Math.max(Math.hypot(e[0], e[1], e[2]), Math.hypot(e[4], e[5], e[6]), Math.hypot(e[8], e[9], e[10]));
};
/** the world gap between two parts whose boxes come within `max` of each other (else Infinity).
 *  ⚠ The search itself is UNBOUNDED: given a small maxThreshold, closestPointToGeometry missed parts that touch (the first
 *  run reported pieces "floating" at gap 0 from their own object), so the threshold only gates the box prefilter. */
const gapOf = (A: Part, B: Part, max: number) => {
  if (!A.box.clone().expandByScalar(max).intersectsBox(B.box)) return Infinity;
  mTo.copy(A.mesh.matrixWorld).invert().multiply(B.mesh.matrixWorld);
  const s = scaleOf(A.mesh.matrixWorld);
  const r = bvh(A.mesh.geometry).closestPointToGeometry(B.mesh.geometry, mTo, hit1 as never, hit2 as never, 0, Infinity);
  return r ? r.distance * s : Infinity;
};
/** both directions: closestPointToGeometry is not symmetric (the bell's hammer read 0 one way and over 1.5 the other) */
const gap2 = (A: Part, B: Part, max: number) => Math.min(gapOf(A, B, max), gapOf(B, A, max));
const tris = (m: THREE.Mesh) => (m.geometry.index ? m.geometry.index.count : m.geometry.attributes.position.count) / 3;
const float = (id: string, root: THREE.Object3D, cam: THREE.Camera, rect: DOMRect) => {
  root.updateMatrixWorld(true);
  const parts = partsOf(root, false);
  // the anchors: the floor's top, and the backdrops' boxes
  let floorY = -Infinity;
  const walls: THREE.Box3[] = [];
  root.traverse((o) => {
    if (o.userData.isFloor) floorY = Math.max(floorY, new THREE.Box3().setFromObject(o).max.y);
    else if (o.userData.noBounds && o.visible) walls.push(new THREE.Box3().setFromObject(o).expandByScalar(FLOAT_TOL));
  });
  const byObj = new Map<string, number[]>();
  parts.forEach((p, i) => { const l = byObj.get(p.obj) ?? []; l.push(i); byObj.set(p.obj, l); });
  const out: { view: string; obj: string; parts: string; gap: number; lift: number; near: string; x0: number; y0: number; x1: number; y1: number }[] = [];
  for (const [obj, idx] of byObj) {
    const par = idx.map((_, j) => j);
    const find = (j: number): number => (par[j] === j ? j : (par[j] = find(par[j])));
    for (let a = 0; a < idx.length; a++) for (let b = a + 1; b < idx.length; b++)
      if (find(a) !== find(b) && gap2(parts[idx[a]], parts[idx[b]], FLOAT_TOL) <= FLOAT_TOL) par[find(a)] = find(b);
    const comps = new Map<number, number[]>();
    idx.forEach((_, j) => { const r = find(j); const l = comps.get(r) ?? []; l.push(idx[j]); comps.set(r, l); });
    for (const comp of comps.values()) {
      const box = new THREE.Box3();
      comp.forEach((i) => box.union(parts[i].box));
      const onFloor = box.min.y <= floorY + FLOAT_TOL + 0.5;
      const onWall = walls.some((w) => w.intersectsBox(box));
      const onOther = !onFloor && !onWall && parts.some((q, k) => q.obj !== obj && comp.some((i) => gap2(parts[i], parts[k], FLOAT_TOL) <= FLOAT_TOL));
      if (onFloor || onWall || onOther) continue;
      // floating: how far from the rest of its own object (Infinity when it IS the whole object)
      let gap = Infinity;
      let near = "";
      for (const i of comp) for (const k of idx) if (!comp.includes(k)) {
        const d = gap2(parts[i], parts[k], 400);
        if (d < gap) { gap = d; near = `${parts[i].mesh.geometry.type}→${parts[k].mesh.geometry.type}(${tris(parts[k].mesh)})`; }
      }
      const cs = [0, 1].flatMap((ix) => [0, 1].flatMap((iy) => [0, 1].map((iz) => toScreen(new THREE.Vector3(
        ix ? box.max.x : box.min.x, iy ? box.max.y : box.min.y, iz ? box.max.z : box.min.z), cam, rect))));
      out.push({ view: id, obj, parts: comp.map((i) => `${parts[i].mesh.geometry.type}(${tris(parts[i].mesh)})`).join(" "), gap: +gap.toFixed(1),
        lift: +(box.min.y - floorY).toFixed(1),
        near,
        x0: Math.round(Math.min(...cs.map((c) => c.x))), y0: Math.round(Math.min(...cs.map((c) => c.y))),
        x1: Math.round(Math.max(...cs.map((c) => c.x))), y1: Math.round(Math.max(...cs.map((c) => c.y))) });
    }
  }
  return out;
};

// ── EDGES: what the canvas border cuts ──
const edges = (r: THREE.WebGLRenderer, id: string, pw: number, ph: number, rect: DOMRect, mask?: DOMRect) => {
  const gl = r.getContext();
  const row = new Uint8Array(pw * 4), col = new Uint8Array(ph * 4);
  const out: Record<string, { n: number; max: number }> = {};
  const side = (name: string, buf: Uint8Array, len: number, at: (i: number) => { x: number; y: number }) => {
    let n = 0, max = 0;
    for (let i = 0; i < len; i++) {
      const a = buf[i * 4 + 3];
      if (a <= 6) continue;
      const s = at(i);
      if (s.x < 0 || s.x > 1080 || s.y < 0 || s.y > 1920) continue;
      // ★ RULE 54b: a border the place's own frame mask hides is never seen (Film.tsx frameOf)
      if (mask && (s.x < mask.left || s.x > mask.right || s.y < mask.top || s.y > mask.bottom)) continue;
      n++; max = Math.max(max, a);
    }
    if (n) out[name] = { n, max };
  };
  // the view is drawn at the GL canvas's bottom-left (viewport 0, 0, pw, ph): row 0 is the view's BOTTOM edge
  gl.readPixels(0, 0, pw, 1, gl.RGBA, gl.UNSIGNED_BYTE, row);
  side("bottom", row, pw, (i) => ({ x: rect.left + ((i + 0.5) / pw) * rect.width, y: rect.bottom - 0.5 }));
  gl.readPixels(0, ph - 1, pw, 1, gl.RGBA, gl.UNSIGNED_BYTE, row);
  side("top", row, pw, (i) => ({ x: rect.left + ((i + 0.5) / pw) * rect.width, y: rect.top + 0.5 }));
  gl.readPixels(0, 0, 1, ph, gl.RGBA, gl.UNSIGNED_BYTE, col);
  side("left", col, ph, (i) => ({ x: rect.left + 0.5, y: rect.bottom - ((i + 0.5) / ph) * rect.height }));
  gl.readPixels(pw - 1, 0, 1, ph, gl.RGBA, gl.UNSIGNED_BYTE, col);
  side("right", col, ph, (i) => ({ x: rect.right - 0.5, y: rect.bottom - ((i + 0.5) / ph) * rect.height }));
  return Object.keys(out).length ? { view: id, ...out } : null;
};

// ── SHADE: light and shade on each object, print excluded ──
const lin = (v: number) => { const c = v / 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const LIN = Array.from({ length: 256 }, (_, i) => lin(i));
const lumAt = (b: Uint8Array, i: number) => 0.2126 * LIN[b[i]] + 0.7152 * LIN[b[i + 1]] + 0.0722 * LIN[b[i + 2]];
const code = (k: number) => [(k * 37) % 251 + 4, ((k * 89) % 241) + 8, ((k * 53) % 233) + 12] as const;
const pct = (a: Float32Array | number[], q: number) => a[Math.min(a.length - 1, Math.max(0, Math.floor(q * (a.length - 1))))];
const shade = (r: THREE.WebGLRenderer, id: string, scene: THREE.Scene, root: THREE.Object3D, cam: THREE.Camera, pw: number, ph: number) => {
  const gl = r.getContext();
  const lit = new Uint8Array(pw * ph * 4);
  gl.readPixels(0, 0, pw, ph, gl.RGBA, gl.UNSIGNED_BYTE, lit);
  const parts = partsOf(root, false);
  const names = Array.from(new Set(parts.map((p) => p.obj)));
  // hide every floor and backdrop: they are not objects (and their shadows are not the objects' own shading)
  const hidden: THREE.Object3D[] = [];
  scene.traverse((o) => { if ((o.userData.isFloor || o.userData.noBounds) && o.visible) { o.visible = false; hidden.push(o); } });
  const saved = new Map<THREE.Mesh, THREE.Material | THREE.Material[]>();
  const auto = r.shadowMap.autoUpdate;
  r.shadowMap.autoUpdate = false;
  const bg = scene.background;
  scene.background = null;
  const pass = (mk: (m: THREE.Material, p: Part) => THREE.Material | null) => {
    for (const p of parts) {
      saved.set(p.mesh, p.mesh.material);
      const ms = Array.isArray(p.mesh.material) ? p.mesh.material : [p.mesh.material];
      const nm = ms.map((m) => mk(m, p) ?? new THREE.MeshBasicMaterial({ visible: false }));
      p.mesh.material = Array.isArray(p.mesh.material) ? nm : nm[0];
    }
    r.setViewport(0, 0, pw, ph); r.setScissor(0, 0, pw, ph); r.setScissorTest(true);
    r.clear(true, true, true);
    r.render(scene, cam);
    const buf = new Uint8Array(pw * ph * 4);
    gl.readPixels(0, 0, pw, ph, gl.RGBA, gl.UNSIGNED_BYTE, buf);
    for (const [m, mat] of saved) { const cur = m.material; m.material = mat; (Array.isArray(cur) ? cur : [cur]).forEach((x) => x.dispose()); }
    saved.clear();
    return buf;
  };
  const basic = (m: THREE.Material, extra: THREE.MeshBasicMaterialParameters) => new THREE.MeshBasicMaterial({
    side: m.side, clippingPlanes: m.clippingPlanes, toneMapped: false, transparent: m.transparent, opacity: (m as THREE.MeshBasicMaterial).opacity ?? 1, ...extra });
  const ids = pass((m, p) => {
    if (m.transparent && !m.depthWrite) return null;
    const [cr, cg, cb] = code(names.indexOf(p.obj) + 1);
    return basic(m, { color: new THREE.Color().setRGB(cr / 255, cg / 255, cb / 255, THREE.SRGBColorSpace), transparent: false, opacity: 1 });
  });
  const alb = pass((m) => {
    if (m.transparent && !m.depthWrite) return null;
    const s = m as THREE.MeshStandardMaterial;
    const glowing = s.emissive && s.emissiveIntensity > 0 && s.color && s.color.r + s.color.g + s.color.b < 0.01;
    return basic(m, { color: glowing ? new THREE.Color(0, 0, 0) : (s.color?.clone() ?? new THREE.Color(1, 1, 1)), map: s.map ?? null, transparent: false, opacity: 1 });
  });
  scene.background = bg;
  r.shadowMap.autoUpdate = auto;
  for (const o of hidden) o.visible = true;
  // per object: S = lit ÷ albedo (the light it takes), and the lit luminance as it reads
  const codes = names.map((_, k) => code(k + 1));
  const S: number[][] = names.map(() => []), L: number[][] = names.map(() => []);
  for (let i = 0; i < pw * ph * 4; i += 4) {
    if (ids[i + 3] < 250 || lit[i + 3] < 250) continue;
    let k = -1;
    for (let c = 0; c < codes.length; c++) {
      const q = codes[c];
      if (Math.abs(ids[i] - q[0]) <= 2 && Math.abs(ids[i + 1] - q[1]) <= 2 && Math.abs(ids[i + 2] - q[2]) <= 2) { k = c; break; }
    }
    if (k < 0) continue;
    const a = lumAt(alb, i), l = lumAt(lit, i);
    L[k].push(l);
    if (a > 0.02) S[k].push(l / a);
  }
  const res = names.map((name, k) => {
    const s = Float32Array.from(S[k]).sort(), l = Float32Array.from(L[k]).sort();
    if (s.length < 200) return null;
    return { obj: name, px: s.length,
      s: [0.05, 0.1, 0.25, 0.5, 0.75, 0.9, 0.95].map((q) => +pct(s, q).toFixed(3)),
      l: [0.05, 0.5, 0.95].map((q) => +pct(l, q).toFixed(3)) };
  }).filter(Boolean);
  return { view: id, objs: res };
};

// ── CANARIES: each check must fire on a planted fault and stay silent on its twin, before any result is trusted ──
const selftest = (r: THREE.WebGLRenderer, pw: number, ph: number) => {
  const res: Record<string, boolean> = {};
  const rect = { left: 0, top: 0, right: 1080, bottom: 1920, width: 1080, height: 1920 } as DOMRect;
  const cam = new THREE.PerspectiveCamera(30, pw / ph, 10, 8000);
  cam.position.set(0, 0, 2600); cam.updateMatrixWorld(true);
  // PEN: two boxes 10 px into each other must fire; 1 px apart, silent; built to pierce, silent; its twin without, fires
  const mk = (x: number, obj: string, pierces?: string[]) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshStandardMaterial());
    m.position.x = x; m.userData.obj = obj; if (pierces) m.userData.pierces = pierces;
    return m;
  };
  const scene1 = (bx: number, pierce = false) => { const g = new THREE.Group(); g.add(mk(0, "a", pierce ? ["b"] : undefined), mk(bx, "b")); g.updateMatrixWorld(true); return g; };
  res.penFires = pen("canary", scene1(90), cam, rect).length === 1;
  res.penApartSilent = pen("canary", scene1(101), cam, rect).length === 0;
  res.penPierceSilent = pen("canary", scene1(90, true), cam, rect).length === 0;
  // EDGES: a view painted to its border must fire on all four sides; a cleared one, silent
  r.setViewport(0, 0, pw, ph); r.setScissor(0, 0, pw, ph); r.setScissorTest(true);
  const cc = new THREE.Color(); r.getClearColor(cc); const ca = r.getClearAlpha();
  r.setClearColor(0xff0000, 1); r.clear(true, true, true);
  const e1 = edges(r, "canary", pw, ph, rect);
  res.edgesFire = !!e1 && ["top", "bottom", "left", "right"].every((k) => (e1 as Record<string, unknown>)[k]);
  r.setClearColor(cc, 0); r.clear(true, true, true);
  res.edgesSilent = edges(r, "canary", pw, ph, rect) === null;
  r.setClearColor(cc, ca);
  // SHADE: a sphere under a raking key has a dark side; a flat card square to the camera under the same light has none
  const sc = new THREE.Scene();
  const root = new THREE.Group(); sc.add(root);
  const sph = new THREE.Mesh(new THREE.SphereGeometry(220, 64, 48), new THREE.MeshStandardMaterial({ color: 0xbbbbbb, roughness: 0.6 }));
  sph.position.x = -260; sph.userData.obj = "sphere";
  const card = new THREE.Mesh(new THREE.PlaneGeometry(380, 380), new THREE.MeshStandardMaterial({ color: 0xbbbbbb, roughness: 0.9 }));
  card.position.x = 260; card.userData.obj = "card";
  root.add(sph, card);
  const key = new THREE.DirectionalLight(0xffffff, 2.6); key.position.set(-800, 600, 600); sc.add(key, new THREE.HemisphereLight(0xffffff, 0x222222, 0.3));
  r.clear(true, true, true); r.render(sc, cam);
  const sh = shade(r, "canary", sc, root, cam, pw, ph);
  const ratio = (o: string) => { const x = sh.objs.find((q) => q && q.obj === o); return x ? x.s[1] / x.s[5] : NaN; };
  res.shadeSphereDark = ratio("sphere") < 0.35;
  res.shadeCardFlat = ratio("card") > 0.85;
  (res as Record<string, unknown>).ratios = { sphere: +ratio("sphere").toFixed(3), card: +ratio("card").toFixed(3) };
  // FLOAT: a box on the floor with a small part of the SAME object 10 px above it must fire (gap 10); its twin, the part
  //   resting on the box, must be silent
  const fl = (gapY: number) => {
    const g = new THREE.Group();
    const floor = new THREE.Group(); floor.userData.isFloor = true;
    const fp = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshBasicMaterial()); fp.rotation.x = -Math.PI / 2; floor.add(fp);
    const a = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshStandardMaterial()); a.position.y = 50;
    const b = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshStandardMaterial()); b.position.y = 100 + gapY + 10;
    const o = new THREE.Group(); o.userData.obj = "thing"; o.add(a, b);
    g.add(floor, o); g.updateMatrixWorld(true);
    return g;
  };
  const f1 = float("canary", fl(10), cam, rect), f0 = float("canary", fl(0), cam, rect);
  res.floatFires = f1.length === 1 && f1[0].obj === "thing" && Math.abs(f1[0].gap - 10) < 0.5;
  res.floatSilent = f0.length === 0;
  r.clear(true, true, true);
  return res;
};

export const install = () => {
  // window.__g3hide = ["env back", …]: those objects drawn invisible (a bisection of what casts a stray shadow)
  (W as unknown as { __g3before: unknown }).__g3before = (_id: string, root: THREE.Object3D) => {
    const hide = (window as unknown as { __g3hide?: string[] }).__g3hide;
    if (!hide?.length) return;
    root.traverse((o) => { if (o.userData.obj && hide.includes(o.userData.obj)) o.visible = false; });
  };
  W.__g3after = (r: THREE.WebGLRenderer, id: string, scene: THREE.Scene, cam: THREE.Camera, pw: number, ph: number, el: HTMLCanvasElement, root: THREE.Object3D) => {
    const cfg = W.__g3cfg;
    if (!cfg) return;
    const out = (W.__g3out ??= []);
    if (cfg.canary) { out.push({ kind: "canary", ...selftest(r, pw, ph) }); cfg.canary = undefined; return; }
    const rect = el.getBoundingClientRect();
    const mk = el.closest("[data-frame-mask]")?.getBoundingClientRect();
    if (cfg.edges) { const e = edges(r, id, pw, ph, rect, mk); if (e) out.push({ kind: "edges", ...e }); }
    if (cfg.pen) for (const p of pen(id, root, cam, rect)) out.push({ kind: "pen", ...p });
    if (cfg.shade) out.push({ kind: "shade", ...shade(r, id, scene, root, cam, pw, ph) });
    if (cfg.float) for (const x of float(id, root, cam, rect)) out.push({ kind: "float", ...x });
  };
};
