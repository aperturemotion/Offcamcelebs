// ══════════════════════════════════════════════════════════════════════════════════════════════
// TO BE FAIR, IN 3-D (034, rebuilt 2026-10-23 to Timur's "completely polished, detailed, and 3D" bar). On the cream ground,
// three objects of one desk, each modelled from reference photographs:
//   · an ANGLEPOISE-STYLE DESK LAMP (the 1227: a stepped cast base, three closed-coil springs hooked on pins, paired flat
//     steel arms on knurled knuckles, a domed cowl and a flared shade with a rolled rim, white enamel inside, a rocker
//     switch on the cowl, its cord). In the shade a clear A60 bulb: screw cap, glass stem, lead-in wires, support wire and
//     a coiled tungsten filament. On "own idea" the rocker clicks and the bulb FLICKERS on: the filament glows, the glass
//     warms, the shade's enamel lights up inside and a pool of warm light falls on the floor (the idea, literally);
//   · a BROADCAST DYNAMIC MICROPHONE (the RE20 type: a long champagne-grey body, a slotted grille cut through its shell
//     over dark foam, a polished band, a rear XLR) in a CRADLE SHOCK MOUNT (two clamp rings hung in two outer rings on
//     laced elastic cord, a rail, a tilt knuckle with a wing bolt) on a cast desk stand with a clutch and an ON-AIR RING: on
//     "his agent said" the ring lights red (on the record). Its XLR cable runs off along the floor;
//   · a LEATHER WATCH CASE (stitched cognac leather, brass hinges and a push-button clasp, ivory suede inside, a satin lid
//     cushion) holding a steel watch on a pillow (bezel, crystal, a blue sunburst dial with applied batons, faceted dauphine
//     hands, a sweeping seconds hand, a knurled crown, a three-row bracelet round the pillow). On "$125 million" the
//     clasp's button presses, the lid swings open on its hinges and the watch is revealed: off-the-field (endorsement) money
//     without a word printed. No brand anywhere.
// Units are the layer's px (y up). Every part rests on, hangs from or is pinned to another; designed joins are declared.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, type Model } from "../stage";
import { M, rbox, rad, hash, col } from "../kit029";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { MeshBVH } from "three-mesh-bvh";

export type FairGeo = { floor: number; eye: { x: number; y: number; D: number }; lamp: { x: number; z: number }; mic: { x: number; z: number }; box: { x: number; z: number } };
/** glow: the bulb (0 → 1, its flicker included); sw: the lamp's rocker (0 off → 1 on); ring: the on-air ring (0 → 1);
 *  btn: the clasp's button pressed (0 → 1); lid: the lid's opening (0 → 1); sec: the watch's running time (s); yaw (deg) */
export type FairP = { glow: number; sw: number; ring: number; btn: number; lid: number; sec: number; yaw: number };

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
const UP = V(0, 1, 0);

// ── local helpers (the kit is shared, so they live here) ──
/** a round rod between two points */
const rod = (a: THREE.Vector3, b: THREE.Vector3, r: number, m: THREE.Material, seg = 24) => {
  const o = mesh(new THREE.CylinderGeometry(r, r, a.distanceTo(b), seg), m);
  o.position.copy(a).add(b).multiplyScalar(0.5);
  o.quaternion.setFromUnitVectors(UP, b.clone().sub(a).normalize());
  return o;
};
/** a tube through points (a cord, a wire) */
const tube = (pts: THREE.Vector3[], r: number, m: THREE.Material, seg = 64, radial = 10) =>
  mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, false, "centripetal"), seg, r, radial, false), m);
/** a flat STADIUM bar (a lamp's arm): from p to q in the x-y plane, w wide, t thick, centred at depth zc */
const bar = (p: [number, number], q: [number, number], w: number, t: number, zc: number, m: THREE.Material) => {
  const L = Math.hypot(q[0] - p[0], q[1] - p[1]), r = w / 2, b = Math.min(0.8, t / 3);
  const s = new THREE.Shape();
  s.moveTo(0, -r); s.lineTo(L, -r); s.absarc(L, 0, r, -Math.PI / 2, Math.PI / 2, false); s.lineTo(0, r); s.absarc(0, 0, r, Math.PI / 2, (3 * Math.PI) / 2, false);
  const g = new THREE.ExtrudeGeometry(s, { depth: t - 2 * b, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelOffset: -b, bevelSegments: 2, curveSegments: 16 });
  g.translate(0, 0, -(t - 2 * b) / 2);
  const o = mesh(g, m);
  o.position.set(p[0], p[1], zc);
  o.rotation.z = Math.atan2(q[1] - p[1], q[0] - p[0]);
  return o;
};
/** a KNURLED knob: a ridged disc on the z axis at (x, y), from z0 to z1 */
const knurl = (x: number, y: number, z0: number, z1: number, r: number, m: THREE.Material, teeth = 28) => {
  const s = new THREE.Shape();
  const N = teeth * 2;
  for (let i = 0; i < N; i++) { const a = (i / N) * Math.PI * 2, rr = i % 2 ? r - 0.7 : r; if (i === 0) s.moveTo(rr, 0); else s.lineTo(rr * Math.cos(a), rr * Math.sin(a)); }
  s.closePath();
  const b = 0.5, d = Math.abs(z1 - z0);
  const g = new THREE.ExtrudeGeometry(s, { depth: d - 2 * b, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelOffset: -b, bevelSegments: 2, curveSegments: 1 });
  g.translate(0, 0, Math.min(z0, z1) + b);
  const o = mesh(g, m);
  o.position.set(x, y, 0);
  return o;
};
const rrPath = (s: THREE.Shape | THREE.Path, ww: number, dd: number, r: number) => {
  const x = -ww / 2, y = -dd / 2; r = Math.min(r, ww / 2, dd / 2);
  s.moveTo(x + r, y); s.lineTo(x + ww - r, y); s.quadraticCurveTo(x + ww, y, x + ww, y + r);
  s.lineTo(x + ww, y + dd - r); s.quadraticCurveTo(x + ww, y + dd, x + ww - r, y + dd);
  s.lineTo(x + r, y + dd); s.quadraticCurveTo(x, y + dd, x, y + dd - r); s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
};
/** an extruded rounded-rect solid standing UP (y0 → y1), its outline in x / z, optionally with a hole cut through it */
const vslab = (w: number, d: number, r: number, y0: number, y1: number, m: THREE.Material, hole?: { w: number; d: number; r: number }, bevel = 2.5) => {
  const s = new THREE.Shape(); rrPath(s, w, d, r);
  if (hole) { const h = new THREE.Path(); rrPath(h, hole.w, hole.d, hole.r); s.holes.push(h); }
  const b = Math.min(bevel, (y1 - y0) / 3);
  const g = new THREE.ExtrudeGeometry(s, { depth: y1 - y0 - 2 * b, bevelEnabled: b > 0, bevelThickness: b, bevelSize: b, bevelOffset: -b, bevelSegments: 3, curveSegments: 10 });
  g.translate(0, 0, b);
  g.rotateX(-Math.PI / 2);   // extrude z → up (y)
  g.translate(0, y0, 0);
  return mesh(g, m);
};
/** a lathe whose points are re-spaced evenly along the profile (so a texture's v runs evenly along it) */
const evenLathe = (prof: [number, number][], n: number, seg: number) => {
  const L: number[] = [0];
  for (let i = 1; i < prof.length; i++) L.push(L[i - 1] + Math.hypot(prof[i][0] - prof[i - 1][0], prof[i][1] - prof[i - 1][1]));
  const tot = L[L.length - 1], out: [number, number][] = [];
  for (let k = 0; k <= n; k++) {
    const s = (k / n) * tot;
    let i = 1; while (i < L.length - 1 && L[i] < s) i++;
    const t = (s - L[i - 1]) / Math.max(1e-6, L[i] - L[i - 1]);
    out.push([prof[i - 1][0] + (prof[i][0] - prof[i - 1][0]) * t, prof[i - 1][1] + (prof[i][1] - prof[i - 1][1]) * t]);
  }
  return lathe(out, seg);
};
/** a tiling grain map (leather pebble, cast wrinkle, suede nap, foam): a bump texture, painted once */
const grainTex = (key: string, n: number, cell: number, rep: number) => {
  const t = paintTex(`fa-grain:${key}`, 256, 256, (c) => {
    c.fillStyle = "#808080"; c.fillRect(0, 0, 256, 256);
    for (let i = 0; i < n; i++) {
      const x = hash(i, 1, key.length) * 256, y = hash(i, 2, key.length) * 256, r = cell * (0.5 + hash(i, 3, 7));
      const v = Math.round(128 + (hash(i, 4, 3) - 0.5) * 120);
      c.fillStyle = `rgb(${v},${v},${v})`;
      for (const [ox, oy] of [[0, 0], [256, 0], [-256, 0], [0, 256], [0, -256]]) {   // wrapped, so it tiles
        c.beginPath(); c.ellipse(x + ox, y + oy, r, r * 0.8, hash(i, 5, 1) * 3, 0, Math.PI * 2); c.fill();
      }
    }
  }, 1);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(rep, rep);
  t.colorSpace = THREE.NoColorSpace;
  return t;
};
/** a radial glow (a light's halo, a pool on the floor) */
const glowTex = (key: string, stops: [number, string][]) => paintTex(`fa-glow:${key}`, 128, 128, (c) => {
  const g = c.createRadialGradient(64, 64, 0, 64, 64, 64);
  for (const [o, s] of stops) g.addColorStop(o, s);
  c.fillStyle = g; c.fillRect(0, 0, 128, 128);
}, 2);
/** a closed-coil EXTENSION SPRING between pins a and b (both along z, at depth z), its end loops round each pin */
const spring = (a: [number, number], b: [number, number], z: number, R: number, wr: number, pinR: number, m: THREE.Material) => {
  const A = V(a[0], a[1], z), B = V(b[0], b[1], z);
  const u = B.clone().sub(A).normalize(), v = V(0, 0, 1), w = new THREE.Vector3().crossVectors(u, v);
  const L = A.distanceTo(B), hr = pinR + wr + 0.45;
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= 20; i++) { const t = Math.PI + (i / 20) * Math.PI * 2; pts.push(A.clone().addScaledVector(u, -hr * Math.cos(t)).addScaledVector(w, hr * Math.sin(t))); }
  const s0 = hr + R + 2, s1 = L - hr - R - 2, pitch = 2 * wr + 0.25;
  const turns = Math.floor((s1 - s0) / pitch);
  const P = (s: number, ang: number, rr: number) => A.clone().addScaledVector(u, s).addScaledVector(w, rr * Math.cos(ang)).addScaledVector(v, rr * Math.sin(ang));
  pts.push(P(hr + 2, 0, R * 0.4));
  const per = 8;
  for (let k = 0; k <= turns * per; k++) { const t = k / per; pts.push(P(s0 + t * pitch, t * Math.PI * 2, R)); }
  pts.push(P(L - hr - 2, 0, R * 0.4));
  for (let i = 0; i <= 20; i++) { const t = (i / 20) * Math.PI * 2; pts.push(B.clone().addScaledVector(u, -hr * Math.cos(t)).addScaledVector(w, -hr * Math.sin(t))); }
  return tube(pts, wr, m, Math.round(pts.length * 1.4), 5);
};
/** a running STITCH round a rounded-rect outline (w × d, corner r) at height y, half sunk into the surface */
const stitchRow = (w: number, d: number, r: number, y: number, step: number, m: THREE.Material) => {
  const hw = w / 2 - r, hd = d / 2 - r;
  const L = [2 * hw, (Math.PI * r) / 2, 2 * hd, (Math.PI * r) / 2, 2 * hw, (Math.PI * r) / 2, 2 * hd, (Math.PI * r) / 2];
  const per = L.reduce((a, b) => a + b, 0), n = Math.floor(per / step);
  const at = (s: number): [number, number, number, number] => {      // a point on the outline (x, z) and its normal
    let k = 0; while (s > L[k] && k < 7) { s -= L[k]; k++; }
    switch (k) {
      case 0: return [-hw + s, d / 2, 0, 1];
      case 2: return [w / 2, hd - s, 1, 0];
      case 4: return [hw - s, -d / 2, 0, -1];
      case 6: return [-w / 2, -hd + s, -1, 0];
      default: {
        const i = (k - 1) / 2, c = ([[hw, hd], [hw, -hd], [-hw, -hd], [-hw, hd]] as const)[i], a = [Math.PI / 2, 0, -Math.PI / 2, -Math.PI][i] - s / r;
        return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a), Math.cos(a), Math.sin(a)];
      }
    }
  };
  const geos: THREE.BufferGeometry[] = [];
  for (let i = 0; i < n; i++) {
    const [x, z, nx, nz] = at((i + 0.5) * step);
    const st = new THREE.CapsuleGeometry(0.8, step * 0.48, 1, 4);
    st.rotateZ(Math.PI / 2);                    // along x
    st.rotateY(Math.atan2(nx, nz));             // along the edge
    st.translate(x - nx * 0.2, y, z - nz * 0.2);
    geos.push(st);
  }
  return mesh(mergeGeometries(geos), m, false, true);
};

/** ★ FUSE: siblings in one group that share a material are one solid in life (a lathe and its welded ring, a bolt and its
 *  knobs): bake them into a single mesh. Only siblings fuse, so whatever moves (a lid, a hand, a rocker) keeps its own group.
 *  The joins were proved touching part by part first (FLOAT 0 on the unfused model); fused, the sweeps stay tractable. */
const fuse = (root: THREE.Object3D) => {
  const groups: THREE.Object3D[] = [];
  root.traverse((o) => { if (!(o as THREE.Mesh).isMesh && !o.userData.isFloor) groups.push(o); });
  for (const g of groups) {
    const by = new Map<THREE.Material, THREE.Mesh[]>();
    for (const c of g.children) {
      const m = c as THREE.Mesh;
      if (!m.isMesh || Array.isArray(m.material) || m.userData.isFloor || m.userData.noBounds || m.renderOrder) continue;
      by.set(m.material, [...(by.get(m.material) ?? []), m]);
    }
    for (const [mat, ms] of by) {
      if (ms.length < 2) continue;
      const geos = ms.map((m) => {
        m.updateMatrix();
        const gg = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
        for (const k of Object.keys(gg.attributes)) if (!["position", "normal", "uv"].includes(k)) gg.deleteAttribute(k);
        if (!gg.attributes.uv) gg.setAttribute("uv", new THREE.Float32BufferAttribute(new Float32Array(gg.attributes.position.count * 2), 2));
        gg.clearGroups();
        return gg.applyMatrix4(m.matrix);
      });
      const merged = mergeGeometries(geos);
      if (!merged) continue;
      for (const m of ms) g.remove(m);
      g.add(mesh(merged, mat, ms[0].castShadow, ms[0].receiveShadow));
    }
  }
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
export const fairModel = (g: FairGeo) => (): Model<FairP> => {
  const root = new THREE.Group();
  const FY = -g.floor;

  // ── shared materials ──
  const enamel = new THREE.MeshPhysicalMaterial({ color: col("#21463A"), roughness: 0.3, metalness: 0.05, clearcoat: 0.8, clearcoatRoughness: 0.16, envMapIntensity: 0.9 });
  const enamel2 = enamel.clone(); enamel2.side = THREE.DoubleSide;
  const enamelIn = new THREE.MeshPhysicalMaterial({ color: col("#F2EDE2"), roughness: 0.32, metalness: 0, clearcoat: 0.5, clearcoatRoughness: 0.25, envMapIntensity: 0.6, side: THREE.DoubleSide });
  const chrome = M.chrome(), satinSteel = M.steel("#C3C7CC");
  const springM = new THREE.MeshPhysicalMaterial({ color: col("#C9CDD2"), metalness: 1, roughness: 0.22, envMapIntensity: 1 });
  const rubber = M.rubber("#1A1817");
  const cordM = new THREE.MeshPhysicalMaterial({ color: col("#2B2724"), roughness: 0.6, metalness: 0, sheen: 0.3, envMapIntensity: 0.5 });
  const brass = M.gold("#C9A253");

  // ══════════════════════════════ THE LAMP ══════════════════════════════
  const lampG = new THREE.Group();
  lampG.position.set(g.lamp.x, FY, g.lamp.z);
  root.add(lampG);
  const base = new THREE.Group(); base.userData.obj = "lamp"; base.userData.pierces = ["lamp arm", "lamp springs", "lamp cord"];
  lampG.add(base);
  const baseM = enamel.clone(); baseM.bumpMap = grainTex("cast", 900, 1.6, 3); baseM.bumpScale = 0.35;
  { const p = rbox(144, 3, 144, 1.4, rubber); p.position.set(0, 1.5, 72); base.add(p); }
  { const t = rbox(150, 18, 150, 6, baseM); t.position.set(0, 12, 75); base.add(t); }
  { const t = rbox(112, 22, 112, 7, baseM); t.position.set(0, 32, 56); base.add(t); }
  { const t = mesh(new THREE.CylinderGeometry(27, 29, 7, 64), satinSteel); t.position.set(0, 46.5, 0); base.add(t); }
  const P0: [number, number] = [0, 62];
  for (const s of [-1, 1]) base.add(bar([0, 54], [0, 63], 20, 4, s * 17, enamel));          // the fork's cheeks
  base.add(rod(V(0, 62, -21), V(0, 62, 21), 3.1, chrome));                                    // the pivot bolt
  base.add(knurl(0, 62, 19.2, 25, 7, chrome)); base.add(knurl(0, 62, -25, -19.2, 7, chrome));
  for (const s of [-1, 1]) base.add(bar([34, 49], [34, 58], 12, 4, s * 36, enamel));          // the springs' lugs
  base.add(rod(V(34, 55, -40), V(34, 55, 40), 2.4, chrome));                                  // the springs' lower pin
  for (const x of [-30, 30]) { const gr = mesh(new THREE.TorusGeometry(4.4, 1.6, 10, 24), rubber); gr.position.set(x, 12, -75.4); base.add(gr); }

  // the lower arm: two flat bars on the pivot, the springs' pin through them
  const L1 = 286, a1 = rad(15);
  const E: [number, number] = [P0[0] - L1 * Math.sin(a1), P0[1] + L1 * Math.cos(a1)];
  const U: [number, number] = [P0[0] - 112 * Math.sin(a1), P0[1] + 112 * Math.cos(a1)];
  const arm = new THREE.Group(); arm.userData.obj = "lamp arm"; arm.userData.pierces = ["lamp", "lamp upper", "lamp springs"];
  lampG.add(arm);
  for (const s of [-1, 1]) arm.add(bar(P0, E, 13, 4, s * 11, enamel));
  arm.add(rod(V(U[0], U[1], -32), V(U[0], U[1], 32), 2.4, chrome));
  arm.add(rod(V(E[0], E[1], -17), V(E[0], E[1], 17), 3, chrome));                             // the elbow bolt
  arm.add(knurl(E[0], E[1], 13.2, 19, 8, chrome));
  { const nut = mesh(new THREE.CylinderGeometry(5.5, 5.5, 4, 6), chrome); nut.rotation.x = Math.PI / 2; nut.position.set(E[0], E[1], -15.2); arm.add(nut); }
  const springs = new THREE.Group(); springs.userData.obj = "lamp springs"; springs.userData.pierces = ["lamp", "lamp arm"];
  lampG.add(springs);
  for (const z of [-24, 0, 24]) springs.add(spring([34, 55], U, z, 5.4, 1.1, 2.4, springM));

  // the upper arm
  const L2 = 276, a2 = rad(-8);
  const H: [number, number] = [E[0] + L2 * Math.cos(a2), E[1] + L2 * Math.sin(a2)];
  const upper = new THREE.Group(); upper.userData.obj = "lamp upper"; upper.userData.pierces = ["lamp arm", "lamp shade"];
  lampG.add(upper);
  for (const s of [-1, 1]) upper.add(bar(E, H, 11, 4, s * 5, enamel));
  upper.add(rod(V(H[0], H[1], -12), V(H[0], H[1], 12), 2.6, chrome));
  upper.add(knurl(H[0], H[1], 7.2, 12, 6, chrome)); upper.add(knurl(H[0], H[1], -12, -7.2, 6, chrome));

  // the shade: a tongue on the head bolt, a ball, a swivel stem, the cowl and its flared skirt
  const shadeA = new THREE.Group(); shadeA.userData.obj = "lamp shade"; shadeA.userData.pierces = ["lamp upper", "lamp cord"];
  lampG.add(shadeA);
  const J: [number, number] = [H[0] + 14, H[1] - 30];
  shadeA.add(bar(H, J, 10, 4, 0, enamel));
  { const ball = mesh(new THREE.SphereGeometry(6.5, 24, 16), chrome); ball.position.set(J[0], J[1], 0); shadeA.add(ball); }
  const d = V(0.34, -0.7, 0.63).normalize();               // where the shade points: down, forward and right
  const Jv = V(J[0], J[1], 0), T = Jv.clone().addScaledVector(d, 13);
  shadeA.add(rod(Jv, T.clone().addScaledVector(d, 1.5), 3.6, chrome));
  const shade = new THREE.Group();
  shade.position.copy(T);
  shade.quaternion.setFromUnitVectors(UP, d.clone().negate());   // local +y back up the stem; the mouth at −y
  shadeA.add(shade);
  // where the world's up and back fall round the cowl (shade-local angles), for the switch and the cord
  const qInv = shade.quaternion.clone().invert();
  const angOf = (wv: THREE.Vector3) => { const l = wv.clone().applyQuaternion(qInv); return Math.atan2(l.z, l.x); };
  const aTop = angOf(V(0, 1, 0)), aBack = angOf(V(-0.3, 0.2, -1));
  const SH = 136;
  const outerP: [number, number][] = [[10, 0], [22, -2], [31, -7], [37, -15], [40, -26], [40, -42], [42, -49], [52, -73], [61, -100], [67, -120], [70, -132], [70.6, -SH]];
  shade.add(mesh(lathe(outerP, 72), enamel2));
  { const cap = mesh(new THREE.CircleGeometry(10.5, 32), enamel2); cap.rotation.x = -Math.PI / 2; cap.position.y = 0.05; shade.add(cap); }
  const innerP = outerP.slice(1).map(([r, y]) => [r - 1.6, y - 1.6] as [number, number]).filter(([, y]) => y > -SH - 0.1);
  innerP.push([69, -SH]);
  shade.add(mesh(lathe(innerP, 72), enamelIn));
  { const c = mesh(new THREE.CircleGeometry(innerP[0][0], 48), enamelIn); c.rotation.x = Math.PI / 2; c.position.y = innerP[0][1]; shade.add(c); }
  { const rim = mesh(new THREE.TorusGeometry(69.9, 2.5, 8, 80), M.gold("#B8914A")); rim.rotation.x = Math.PI / 2; rim.position.y = -SH; shade.add(rim); }  // the rolled rim
  { const seam = mesh(new THREE.TorusGeometry(40.5, 1.1, 10, 96), enamel2); seam.rotation.x = Math.PI / 2; seam.position.y = -42; shade.add(seam); }
  // the rocker switch, on top of the cowl
  const rad0 = (y: number) => { for (let i = 1; i < outerP.length; i++) if (outerP[i][1] <= y) { const [r0, y0] = outerP[i - 1], [r1, y1] = outerP[i]; return r0 + ((r1 - r0) * (y - y0)) / (y1 - y0); } return 40; };
  const swHouse = new THREE.Group();
  swHouse.position.set(rad0(-34) * Math.cos(aTop), -34, rad0(-34) * Math.sin(aTop));
  swHouse.rotation.y = Math.atan2(-Math.cos(aTop), -Math.sin(aTop)) + Math.PI;   // its local +z points out of the cowl
  shade.add(swHouse);
  { const hb = rbox(16, 18, 6, 2.5, M.satin("#1E1E1E", 0.5)); hb.position.set(0, 0, 5.6); swHouse.add(hb); }
  const rockerP = new THREE.Group(); rockerP.position.set(0, 0, 5.6); swHouse.add(rockerP);
  { const rk = rbox(9, 12, 4, 2, M.satin("#101010", 0.32)); rk.position.set(0, 0, 4.2); rockerP.add(rk); }
  // the socket (a hollow bakelite cup) and the bulb
  const bakelite = M.satin("#2A211B", 0.4);
  shade.add(mesh(lathe([[13.8, -77], [17, -77], [17.6, -74], [17.6, -3.65], [13.8, -3.65], [13.8, -77]], 48), bakelite));
  for (const y of [-18, -46, -62]) { const rg = mesh(new THREE.TorusGeometry(17.6, 0.9, 8, 48), bakelite); rg.rotation.x = Math.PI / 2; rg.position.y = y; shade.add(rg); }
  const bulb = new THREE.Group(); bulb.position.y = -45; bulb.userData.obj = "bulb"; shade.add(bulb);   // bulb-local: its cap's top at 0, the glass below
  const thr: [number, number][] = []; for (let i = 0; i <= 40; i++) thr.push([13.1 + 0.55 * Math.sin(i * 1.42), -i * 0.75]);
  bulb.add(mesh(lathe(thr, 32), M.steel("#D2C29A")));
  { const cc = mesh(new THREE.CircleGeometry(13.1, 32), M.steel("#D2C29A")); cc.rotation.x = -Math.PI / 2; bulb.add(cc); }
  bulb.add(mesh(lathe([[12.8, -30], [13.6, -32], [13.4, -35]], 40), M.satin("#151515", 0.3)));   // the black glass insulator
  const glassM = new THREE.MeshPhysicalMaterial({ color: col("#FFFDF6"), roughness: 0.03, metalness: 0, transparent: true, opacity: 0.1, depthWrite: false, clearcoat: 1, clearcoatRoughness: 0.02,
    ior: 1.5, specularIntensity: 1, envMapIntensity: 1.8, emissive: col("#FFB65C"), emissiveIntensity: 0, side: THREE.DoubleSide });
  const fresnel = (m: THREE.Material, edge: number, key: string) => {
    m.onBeforeCompile = (sh) => {
      sh.fragmentShader = sh.fragmentShader.replace("#include <opaque_fragment>",
        `float fres = pow( 1.0 - abs( dot( normalize( normal ), normalize( vViewPosition ) ) ), 2.2 );\n diffuseColor.a = mix( diffuseColor.a, ${edge.toFixed(2)}, fres );\n#include <opaque_fragment>`);
    };
    m.customProgramCacheKey = () => `fa-fresnel-${key}`;
  };
  fresnel(glassM, 0.8, "bulb");
  bulb.add(mesh(lathe([[13.4, -35], [15, -40], [20, -50], [26.5, -62], [30, -76], [30.4, -88], [28, -100], [21, -110], [11, -116], [3, -118], [0.2, -118.2]], 64), glassM, false, false));
  const stemM = new THREE.MeshPhysicalMaterial({ color: col("#EEF4F0"), roughness: 0.05, transparent: true, opacity: 0.35, depthWrite: false, clearcoat: 1, envMapIntensity: 1.2 });
  bulb.add(mesh(lathe([[12.6, -34], [8, -42], [4.2, -52], [3.4, -66], [2.6, -70], [0.3, -71]], 32), stemM, false, false));
  const leadM = M.steel("#B9A27A");
  const filM = new THREE.MeshStandardMaterial({ color: col("#4A3A2A"), emissive: col("#FFD9A0"), emissiveIntensity: 0, roughness: 0.5, toneMapped: false });
  const fA = V(-13, -82, 0), fB = V(13, -82, 0), fC = V(0, -88, 0);
  bulb.add(tube([V(-2.6, -48, 0), V(-6, -64, 0), V(-11, -76, 0), fA], 0.55, leadM, 24, 6));
  bulb.add(tube([V(2.6, -48, 0), V(6, -64, 0), V(11, -76, 0), fB], 0.55, leadM, 24, 6));
  bulb.add(tube([V(0, -70.5, 0), V(0, -79, 0), fC], 0.45, leadM, 12, 6));
  {
    const path = new THREE.CatmullRomCurve3([fA, V(-6.5, -86.5, 0.6), fC, V(6.5, -86.5, 0.6), fB]);
    const fil: THREE.Vector3[] = [];
    for (let i = 0; i <= 300; i++) {
      const t = i / 300, p = path.getPointAt(t), tg = path.getTangentAt(t);
      const n1 = new THREE.Vector3().crossVectors(tg, V(0, 0, 1)).normalize(), n2 = new THREE.Vector3().crossVectors(tg, n1).normalize();
      const ang = t * Math.PI * 2 * 26;
      fil.push(p.clone().addScaledVector(n1, 1.5 * Math.cos(ang)).addScaledVector(n2, 1.5 * Math.sin(ang)));
    }
    bulb.add(tube(fil, 0.62, filM, 300, 4));
  }
  // the bulb's light: a halo round the filament, a point light in the shade, a spot down its axis, a warm pool on the floor
  const haloM = new THREE.SpriteMaterial({ map: glowTex("halo", [[0, "rgba(255,236,190,0.9)"], [0.2, "rgba(255,206,130,0.62)"], [0.5, "rgba(255,170,80,0.2)"], [1, "rgba(255,160,70,0)"]]), transparent: true, depthWrite: false, opacity: 0, toneMapped: false });
  const halo = new THREE.Sprite(haloM); halo.scale.set(170, 170, 1); bulb.add(halo);
  const bulbLight = new THREE.PointLight(0xffc27a, 0, 300, 1.4); bulbLight.position.set(0, -84, 0); bulb.add(bulbLight);
  const spot = new THREE.SpotLight(0xffd29a, 0, 1000, rad(34), 0.65, 1.2); spot.position.set(0, -80, 0); bulb.add(spot);
  const spotT = new THREE.Object3D(); spotT.position.set(0, -500, 0); bulb.add(spotT); spot.target = spotT;
  // the cord: out of a grommet on the cowl's back, looping behind the arms into the base; and from the base off along the floor
  const cord = new THREE.Group(); cord.userData.obj = "lamp cord"; cord.userData.pierces = ["lamp", "lamp shade"];
  lampG.add(cord);
  lampG.updateMatrixWorld(true);
  const toLamp = (o: THREE.Object3D, p: THREE.Vector3) => lampG.worldToLocal(o.localToWorld(p.clone()));
  const rc = rad0(-20);
  const cowlOut = toLamp(shade, V(rc * Math.cos(aBack), -20, rc * Math.sin(aBack)));
  const cN = toLamp(shade, V((rc + 20) * Math.cos(aBack), -20, (rc + 20) * Math.sin(aBack))).sub(cowlOut).normalize();
  { const gr = mesh(new THREE.CylinderGeometry(3.6, 4.4, 7, 20), rubber); gr.position.copy(cowlOut).addScaledVector(cN, 1.6); gr.quaternion.setFromUnitVectors(UP, cN); cord.add(gr); }
  cord.add(tube([cowlOut.clone().addScaledVector(cN, -1), cowlOut.clone().addScaledVector(cN, 16), V(cowlOut.x - 40, cowlOut.y - 40, -58), V(60, 190, -62), V(-30, 100, -64), V(-40, 40, -84), V(-31, 15, -82), V(-30, 12, -73)], 2.5, cordM, 160));
  // the run to the wall: out of the base's back grommet, a loose curve back and to the left, off the side (never a ruled line)
  cord.add(tube([V(30, 12, -73), V(29, 8, -84), V(20, 2.5, -100), V(-8, 2.5, -138), V(-80, 2.5, -188), V(-200, 2.5, -214), V(-380, 2.5, -222), V(-620, 2.5, -238), V(-1000, 2.5, -252)], 2.5, cordM, 160));
  {
    const eyeW = V(g.eye.x, -g.eye.y, g.eye.D), fW = bulb.localToWorld(V(0, -86, 0));
    const away = fW.clone().sub(eyeW).normalize().multiplyScalar(34).add(fW);
    halo.position.copy(bulb.worldToLocal(away));
  }
  // the warm pool: where the shade's axis meets the floor, stretched along the light's slant
  const bulbW = toLamp(bulb, V(0, -84, 0));
  const tHit = bulbW.y / -d.y, hit = bulbW.clone().addScaledVector(d, tHit);
  const poolM = new THREE.MeshBasicMaterial({ map: glowTex("pool2", [[0, "rgba(255,226,170,0.6)"], [0.35, "rgba(255,222,165,0.42)"], [0.7, "rgba(255,214,150,0.14)"], [1, "rgba(255,210,140,0)"]]), transparent: true, depthWrite: false, opacity: 0, toneMapped: false });
  const rPool = tHit * Math.tan(rad(36));
  const pool = new THREE.Mesh(new THREE.PlaneGeometry((rPool * 2) / Math.abs(d.y), rPool * 2), poolM);
  pool.rotation.x = -Math.PI / 2; pool.rotation.z = -Math.atan2(d.z, d.x);
  pool.position.set(hit.x, 0.6, hit.z);
  pool.userData.noBounds = true; pool.userData.isFloor = true; pool.renderOrder = 1.6;
  lampG.add(pool);

  // ══════════════════════════════ THE MICROPHONE ══════════════════════════════
  const micG = new THREE.Group();
  micG.position.set(g.mic.x, FY, g.mic.z);
  root.add(micG);
  const stand = new THREE.Group(); stand.userData.obj = "mic stand"; stand.userData.pierces = ["shock mount"];
  micG.add(stand);
  const castM = new THREE.MeshPhysicalMaterial({ color: col("#1C1C1F"), roughness: 0.6, metalness: 0.3, clearcoat: 0.15, envMapIntensity: 0.6, bumpMap: grainTex("wrinkle", 1600, 1.1, 4), bumpScale: 0.45 });
  stand.add(mesh(lathe([[80, 0], [82, 1.5], [82, 3], [80, 3.2]], 64), rubber));
  stand.add(mesh(lathe([[84, 3], [87, 5], [87, 10], [82, 17], [62, 23], [20, 25.5], [15.6, 26]], 64), castM));
  { const b = mesh(new THREE.CircleGeometry(84, 64), castM); b.rotation.x = Math.PI / 2; b.position.y = 3; stand.add(b); }
  { const b = mesh(new THREE.CircleGeometry(80, 64), rubber); b.rotation.x = Math.PI / 2; b.position.y = 0.01; stand.add(b); }
  stand.add(mesh(lathe([[15, 25.6], [15, 38], [13, 40], [8.2, 40]], 48), chrome));                 // the boss
  stand.add(rod(V(0, 39, 0), V(0, 122, 0), 8, chrome, 40));                                        // the lower tube
  stand.add(mesh(lathe([[8.2, 112], [11.5, 113], [12, 116], [12, 128], [11.5, 131], [6.6, 132]], 48), satinSteel));  // the clutch
  { const kn = knurl(0, 0, 117, 127, 12.6, satinSteel, 40); kn.rotation.x = -Math.PI / 2; stand.add(kn); }
  stand.add(rod(V(0, 131, 0), V(0, 192, 0), 6.5, chrome, 40));                                     // the upper tube
  // ★ the ON-AIR RING: a frosted collar between two chrome bands, red when live
  const ringM = new THREE.MeshPhysicalMaterial({ color: col("#E9DCDC"), roughness: 0.35, clearcoat: 0.6, emissive: col("#FF2A1E"), emissiveIntensity: 0, envMapIntensity: 0.6 });
  stand.add(mesh(lathe([[6.5, 191.5], [12.6, 192], [13, 194], [13, 195]], 48), chrome));
  { const rg = mesh(new THREE.CylinderGeometry(12.2, 12.2, 13, 64, 1, true), ringM); rg.position.y = 201.5; stand.add(rg); }
  stand.add(mesh(lathe([[13, 208], [13, 209], [12.6, 211], [5.2, 211.5]], 48), chrome));
  const ringGlowM = new THREE.SpriteMaterial({ map: glowTex("redring", [[0, "rgba(255,90,70,0.9)"], [0.35, "rgba(255,60,40,0.35)"], [1, "rgba(255,40,30,0)"]]), transparent: true, depthWrite: false, opacity: 0, toneMapped: false });
  const ringGlow = new THREE.Sprite(ringGlowM); ringGlow.scale.set(84, 46, 1); ringGlow.position.set(0, 201.5, 6); stand.add(ringGlow);
  const ringLight = new THREE.PointLight(0xff3020, 0, 120, 1.3); ringLight.position.set(0, 201.5, 18); stand.add(ringLight);
  stand.add(rod(V(0, 211, 0), V(0, 226, 0), 5, chrome, 24));                                       // the 5/8" stud
  // the head: a fork turned to face the speaker (the left, forward)
  const SW = 240;
  const head = new THREE.Group(); head.position.set(0, SW, 0); head.rotation.y = rad(-38); stand.add(head);
  { const blk = mesh(new THREE.CylinderGeometry(9.5, 9.5, 8, 32), castM); blk.position.y = -16; head.add(blk); }
  for (const s of [-1, 1]) { const pl = rbox(4, 28, 20, 1.6, castM); pl.position.set(s * 9, -6, 10); head.add(pl); }
  head.add(rod(V(-14, 0, 0), V(18, 0, 0), 2.8, chrome));
  { const hub = mesh(new THREE.CylinderGeometry(5.2, 5.2, 6, 24), castM); hub.rotation.z = Math.PI / 2; hub.position.set(14, 0, 0); head.add(hub); }
  for (const s of [-1, 1]) { const wing = rbox(4, 6, 20, 2.5, castM); wing.position.set(14, 0, s > 0 ? 23 : -3); head.add(wing); }
  { const nut = mesh(new THREE.CylinderGeometry(5, 5, 3.6, 6), chrome); nut.rotation.z = Math.PI / 2; nut.position.set(-12.8, 0, 0); head.add(nut); }
  // the cradle shock mount (tilt-local: the mic's axis +y, "up" away from the stand −z)
  const tilt = new THREE.Group(); tilt.rotation.x = rad(64); head.add(tilt);
  const mount = new THREE.Group(); mount.userData.obj = "shock mount"; mount.userData.pierces = ["mic stand"];
  tilt.add(mount);
  { const tg = rbox(8, 18, 28, 3, castM); tg.position.set(0, 0, 8); mount.add(tg); }                  // the tongue on the bolt
  const ZM = -84, RO = 54, RI = 31.5;
  { const rail = rbox(16, 126, 7, 2.5, castM); rail.position.set(0, -24, -19.9); mount.add(rail); }   // the rail under both rings
  const elastic = M.rubber("#3A3531");
  for (const yy of [-74, 4]) {
    const o = mesh(new THREE.TorusGeometry(RO, 3.4, 10, 96), castM); o.rotation.x = Math.PI / 2; o.position.set(0, yy, ZM); mount.add(o);
    const i = mesh(new THREE.TorusGeometry(RI, 3, 10, 96), castM); i.rotation.x = Math.PI / 2; i.position.set(0, yy, ZM); mount.add(i);
    const ts = mesh(new THREE.CylinderGeometry(4.2, 4.2, 8, 24), satinSteel); ts.rotation.z = -Math.PI / 2; ts.position.set(RI + 6.6, yy, ZM); mount.add(ts);
    const cords: THREE.Vector3[] = [];
    const N = 10;
    for (let k = 0; k < 2 * N; k++) { const a = (k / (2 * N)) * Math.PI * 2 + 0.16, r = k % 2 ? RO - 2.2 : RI + 2.2; cords.push(V(r * Math.cos(a), yy, ZM + r * Math.sin(a))); }
    mount.add(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(cords, true, "catmullrom", 0.05), 280, 1.15, 6, true), elastic));
  }
  // the microphone
  const micA = new THREE.Group(); micA.userData.obj = "microphone"; micA.position.set(0, 0, ZM); mount.add(micA);
  const bodyM = new THREE.MeshPhysicalMaterial({ color: col("#ABA696"), roughness: 0.42, metalness: 0.55, clearcoat: 0.3, clearcoatRoughness: 0.35, envMapIntensity: 0.8, bumpMap: grainTex("bead", 2600, 0.7, 6), bumpScale: 0.2 });
  micA.add(mesh(lathe([[22, -124], [25.6, -123], [27, -121], [27.4, -118], [27.4, 30], [26.4, 31]], 64), bodyM));
  { const rf = mesh(new THREE.RingGeometry(10.5, 22, 64), bodyM); rf.rotation.x = Math.PI / 2; rf.position.y = -124; micA.add(rf); }
  { const skM = M.satin("#121212", 0.5); const sk = mesh(new THREE.CylinderGeometry(10.5, 10.5, 6, 32, 1, true), skM); sk.position.y = -121; micA.add(sk);
    const sb = mesh(new THREE.CircleGeometry(10.5, 32), skM); sb.rotation.x = Math.PI / 2; sb.position.y = -118; micA.add(sb); }
  { const band = mesh(new THREE.TorusGeometry(28.2, 2.4, 10, 96), chrome); band.rotation.x = Math.PI / 2; band.position.y = 32.5; micA.add(band); }
  // the grille: a shell with real slots cut through it (alpha-tested), the dark foam behind it
  const slots = paintTex("fa-grille", 512, 512, (c) => {
    c.fillStyle = "#fff"; c.fillRect(0, 0, 512, 512); c.fillStyle = "#000";
    const rows = 24, cols = 60;
    for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) {
      const x = ((k + (r % 2) * 0.5) / cols) * 512, y = ((r + 0.5) / rows) * 512;
      c.beginPath(); c.roundRect(x - 2.4, y - 7, 4.8, 14, 2.4); c.fill();
    }
  }, 1);
  slots.colorSpace = THREE.NoColorSpace;
  const grilleM = new THREE.MeshPhysicalMaterial({ color: col("#B3AE9F"), roughness: 0.36, metalness: 0.6, alphaMap: slots, alphaTest: 0.5, side: THREE.DoubleSide, envMapIntensity: 0.85 });
  micA.add(mesh(evenLathe([[29.4, 35], [29.4, 128], [28.6, 136], [26, 142], [21, 146.5], [13, 149.2], [4.2, 150]], 36, 72), grilleM));
  { const cap = mesh(new THREE.CircleGeometry(4.2, 24), grilleM); cap.rotation.x = -Math.PI / 2; cap.position.y = 150; micA.add(cap); }
  micA.add(mesh(lathe([[25.5, 34], [25.5, 126], [23, 136], [17, 142], [8, 145], [3, 145.4]], 64), new THREE.MeshStandardMaterial({ color: col("#141414"), roughness: 0.95, bumpMap: grainTex("foam", 2400, 0.9, 5), bumpScale: 0.8 })));
  { const fc = mesh(new THREE.CircleGeometry(3, 16), new THREE.MeshStandardMaterial({ color: col("#141414"), roughness: 0.95 })); fc.rotation.x = -Math.PI / 2; fc.position.y = 145.4; micA.add(fc); }
  { const ri = mesh(new THREE.TorusGeometry(29.6, 1.6, 10, 96), chrome); ri.rotation.x = Math.PI / 2; ri.position.y = 35.5; micA.add(ri); }
  // the cable: an XLR plug on the rear, its boot, the cable down to the floor and away
  const cable = new THREE.Group(); cable.userData.obj = "mic cable";
  micA.add(cable);
  cable.add(mesh(lathe([[9.6, -124.3], [10, -126], [10, -150], [9.4, -152]], 48), satinSteel));
  { const rimC = mesh(new THREE.RingGeometry(3, 9.6, 32), M.satin("#151515", 0.4)); rimC.rotation.x = -Math.PI / 2; rimC.position.y = -124.3; cable.add(rimC); }
  { const latch = rbox(4, 12, 2, 1, M.satin("#151515", 0.4)); latch.position.set(0, -136, 11.4); cable.add(latch); }
  cable.add(mesh(lathe([[9.4, -151.5], [8.4, -158], [6, -168], [4.4, -178], [3.5, -184]], 32), rubber));
  micG.updateMatrixWorld(true);
  const toMic = (p: THREE.Vector3) => micG.worldToLocal(micA.localToWorld(p.clone()));
  const c0 = toMic(V(0, -176, 0)), c1 = toMic(V(0, -196, 0)), cd = c1.clone().sub(c0).normalize();
  const cw = [c0, c1, c1.clone().addScaledVector(cd, 30).add(V(10, -40, -10)), V(c1.x + 40, 60, c1.z - 70), V(c1.x + 30, 3.2, c1.z - 120), V(c1.x + 110, 3.2, c1.z - 168), V(c1.x + 220, 3.2, -300), V(340, 3.2, -520), V(530, 3.2, -680), V(820, 3.2, -770), V(1250, 3.2, -830), V(2000, 3.2, -870)]
;
  // the drop to the floor and the run along it (away into the back of the desk, well behind the watch case, off to the right), one cable in two meshes (so the run's long box never wraps the stand)
  {
    const toCable = (p: THREE.Vector3) => cable.worldToLocal(micG.localToWorld(p.clone()));
    const denseM = new THREE.CatmullRomCurve3(cw, false, "centripetal").getSpacedPoints(360);
    const k = denseM.findIndex((p, i) => i > 20 && p.y < 3.6);   // where it touches down on the floor
    const dense = denseM.map(toCable);
    const cut = k > 0 ? k : 120;
    cable.add(tube(dense.slice(0, cut + 1), 3.2, cordM, cut * 2, 8));
    cable.add(tube(dense.slice(cut), 3.2, cordM.clone(), (dense.length - cut) * 1, 8));   // its own material instance: never fused with the drop
  }

  // ══════════════════════════════ THE WATCH CASE ══════════════════════════════
  const boxG = new THREE.Group();
  boxG.position.set(g.box.x, FY, g.box.z);
  root.add(boxG);
  const BW = 240, BD = 176, BH = 100, WT = 10;
  const leather = new THREE.MeshPhysicalMaterial({ color: col("#7A4527"), roughness: 0.5, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.4, sheen: 0.25, sheenColor: col("#C08A5A"), envMapIntensity: 0.7, bumpMap: grainTex("leather", 2200, 1.3, 0.012), bumpScale: 0.9 });
  const suede = new THREE.MeshPhysicalMaterial({ color: col("#E6DBC6"), roughness: 0.95, sheen: 1, sheenColor: col("#FFF8EA"), sheenRoughness: 0.6, envMapIntensity: 0.35, bumpMap: grainTex("suede", 3000, 0.6, 3), bumpScale: 0.35 });
  const satin = new THREE.MeshPhysicalMaterial({ color: col("#EFE6D3"), roughness: 0.28, sheen: 0.8, sheenColor: col("#FFFFFF"), sheenRoughness: 0.3, clearcoat: 0.2, envMapIntensity: 0.6 });
  const thread = M.satin("#E9D9B4", 0.7);
  const caseB = new THREE.Group(); caseB.userData.obj = "case"; caseB.userData.pierces = ["lid"];
  boxG.add(caseB);
  const HW = BW - 2 * WT, HD = BD - 2 * WT;
  caseB.add(vslab(BW, BD, 16, 0, BH, leather, { w: HW, d: HD, r: 7 }, 2.5));
  caseB.add(vslab(HW - 0.8, HD - 0.8, 6.6, 3, 12, suede, undefined, 1.2));                             // the floor, inside the walls
  caseB.add(vslab(HW - 0.8, HD - 0.8, 6.6, 12.3, 96.5, suede, { w: HW - 8.8, d: HD - 8.8, r: 3 }, 1.2)); // the lining
  const IX = (HW - 8.8) / 2 - 0.4, IZ = (HD - 8.8) / 2 - 0.4, YI = 60, YF = 12.3;
  const GF = 62, GB = -57;   // the groove's front and back walls (z)
  { const b = rbox(2 * IX, YI - YF, IZ - GF, 3, suede); b.position.set(0, (YI + YF) / 2, IZ); caseB.add(b); }
  { const b = rbox(2 * IX, YI - YF, GB + IZ, 3, suede); b.position.set(0, (YI + YF) / 2, GB); caseB.add(b); }
  for (const s of [-1, 1]) { const b = rbox(IX - 84, YI - YF, GF - GB - 0.8, 3, suede); b.position.set(s * (84 + (IX - 84) / 2), (YI + YF) / 2, GF - 0.4); caseB.add(b); }
  caseB.add(stitchRow(BW, BD, 16, BH - 7, 6.5, thread));
  caseB.add(stitchRow(BW, BD, 16, 8, 6.5, thread));
  // the clasp's plate and push-button on the front
  { const pl = rbox(46, 22, 2.6, 1.2, brass); pl.position.set(0, BH - 13, BD / 2 + 2.6); caseB.add(pl); }
  const btn = new THREE.Group(); btn.position.set(0, BH - 14, BD / 2 + 2.6); caseB.add(btn);
  { const bt = mesh(lathe([[4, 0], [4, 3.8], [3.2, 4.4], [2, 4.6]], 32), brass); bt.rotation.x = Math.PI / 2; btn.add(bt);
    const bc = mesh(new THREE.CircleGeometry(2, 24), brass); bc.position.z = 4.6; btn.add(bc); }
  // the hinges: the base's knuckles and leaves, and their pins
  const HZ = -BD / 2 - 4.6, HY = BH;
  for (const hx of [-72, 72]) {
    for (const s of [-1, 1]) {
      const k = mesh(new THREE.CylinderGeometry(4, 4, 11, 24), brass); k.rotation.z = Math.PI / 2; k.position.set(hx + s * 12.5, HY, HZ); caseB.add(k);
      const lf = rbox(11, 13, 1.2, 0.5, brass); lf.position.set(hx + s * 12.5, HY - 7.5, -BD / 2); caseB.add(lf);
    }
    caseB.add(rod(V(hx - 18.5, HY, HZ), V(hx + 18.5, HY, HZ), 1.6, chrome, 12));
  }

  // the lid, on the hinge axis (lid-local: y up from the rim when shut, z forward from the axis)
  const lidP = new THREE.Group(); lidP.position.set(0, HY, HZ); boxG.add(lidP);
  const lid = new THREE.Group(); lid.userData.obj = "lid"; lid.userData.pierces = ["case"]; lidP.add(lid);
  const LZ = -HZ, LH = 58, LS = 44;   // the lid's centre from the axis; its height; where its top panel starts
  { const r = vslab(BW, BD, 16, 0.4, LS, leather, { w: HW, d: HD, r: 7 }, 2.5); r.position.z = LZ; lid.add(r); }
  { const t = vslab(BW, BD, 16, LS, LH, leather, undefined, 3); t.position.z = LZ; lid.add(t); }
  { const l = vslab(HW - 0.8, HD - 0.8, 6.6, 0.8, LS - 0.4, satin, { w: HW - 6.8, d: HD - 6.8, r: 3.5 }, 1); l.position.z = LZ; lid.add(l); }
  { const c = rbox(HW - 7.6, 7, HD - 7.6, 3.4, satin); c.position.set(0, LS - 3.5, LZ + (HD - 7.6) / 2); lid.add(c); }
  { const s = stitchRow(BW, BD, 16, LH - 7, 6.5, thread); s.position.z = LZ; lid.add(s); }
  { const s = stitchRow(BW, BD, 16, 7.5, 6.5, thread); s.position.z = LZ; lid.add(s); }
  for (const hx of [-72, 72]) {
    const k = mesh(new THREE.CylinderGeometry(4, 4, 13.2, 24), brass); k.rotation.z = Math.PI / 2; k.position.set(hx, 0, 0); lid.add(k);
    const lf = rbox(13.2, 13, 1.2, 0.5, brass); lf.position.set(hx, 7.5, LZ - BD / 2); lid.add(lf);
  }
  // the hasp: a backing plate on the lid's front, a tongue hanging over the button with a round hole round it
  { const bk = rbox(30, 14, 2.8, 1, brass); bk.position.set(0, 9, LZ + BD / 2 + 2.8); lid.add(bk); }
  {
    const s = new THREE.Shape(); const w = 26, h0 = -21, h1 = 15;
    s.moveTo(-w / 2 + 4, h0); s.lineTo(w / 2 - 4, h0); s.quadraticCurveTo(w / 2, h0, w / 2, h0 + 4); s.lineTo(w / 2, h1); s.lineTo(-w / 2, h1); s.lineTo(-w / 2, h0 + 4); s.quadraticCurveTo(-w / 2, h0, -w / 2 + 4, h0);
    const hole = new THREE.Path(); hole.absarc(0, -14, 5.6, 0, Math.PI * 2, true); s.holes.push(hole);
    const gg = new THREE.ExtrudeGeometry(s, { depth: 1.2, bevelEnabled: true, bevelThickness: 0.4, bevelSize: 0.4, bevelOffset: -0.4, bevelSegments: 2, curveSegments: 24 });
    gg.translate(0, 0, LZ + BD / 2 + 2.8 + 0.4 + 0.2);
    lid.add(mesh(gg, brass));
  }

  // the pillow and the watch on it (box-local)
  const RP = 42, ZP = 3;
  const RC = RP + 0.6 + 3.3, YP = 12 + RC + 3.3 + 0.5;    // the bracelet's centre line; the pillow's axis height
  const pillow = new THREE.Group(); pillow.userData.obj = "pillow"; caseB.add(pillow);
  {
    const half = 80, er = 12;
    const pr: [number, number][] = [];
    for (let i = 0; i <= 10; i++) { const a = -Math.PI / 2 + (i / 10) * (Math.PI / 2); pr.push([RP - er + er * Math.cos(a), -half + er + er * Math.sin(a)]); }
    for (let i = 0; i <= 10; i++) { const a = (i / 10) * (Math.PI / 2); pr.push([RP - er + er * Math.cos(a), half - er + er * Math.sin(a)]); }
    const pg = lathe(pr, 64); pg.rotateZ(-Math.PI / 2);
    const pm = mesh(pg, suede); pm.position.set(0, YP, ZP); pillow.add(pm);
    for (const s of [-1, 1]) {
      const cap = mesh(new THREE.CircleGeometry(RP - er, 64), suede); cap.rotation.y = (s * Math.PI) / 2; cap.position.set(s * half, YP, ZP); pillow.add(cap);
      const pip = mesh(new THREE.TorusGeometry(RP - er + 0.5, 1.1, 8, 96), suede); pip.rotation.y = Math.PI / 2; pip.position.set(s * (half - 0.6), YP, ZP); pillow.add(pip);
    }
  }
  const watchA = new THREE.Group(); watchA.userData.obj = "watch"; caseB.add(watchA);
  const BETA = rad(25);
  const nW = V(0, Math.cos(BETA), Math.sin(BETA)), u12 = V(0, Math.sin(BETA), -Math.cos(BETA));
  const C0 = V(0, YP, ZP);
  const watch = new THREE.Group();
  watch.position.copy(C0).addScaledVector(nW, RP + 0.5);           // the case back's centre, on the pillow
  watch.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(V(1, 0, 0), u12, nW));
  watchA.add(watch);
  // watch-local: the dial faces +z, 12 o'clock +y, 3 o'clock +x; the case back at z 0
  const polished = new THREE.MeshPhysicalMaterial({ color: col("#C4C9CF"), metalness: 1, roughness: 0.16, envMapIntensity: 0.85 });
  const polished2 = polished.clone(); polished2.side = THREE.DoubleSide;
  const brushed = new THREE.MeshPhysicalMaterial({ color: col("#A9AEB5"), metalness: 1, roughness: 0.4, envMapIntensity: 0.8 });
  const toZ = (geo: THREE.BufferGeometry) => { geo.rotateX(Math.PI / 2); return geo; };
  watch.add(mesh(toZ(lathe([[27, 0], [29.5, 0.6], [30.5, 2.2], [33.6, 3.2], [35, 5], [35, 11], [34.4, 12.6]], 64)), brushed));
  { const cb = mesh(new THREE.CircleGeometry(27, 64), brushed); cb.rotation.y = Math.PI; watch.add(cb); }
  watch.add(mesh(toZ(lathe([[34.4, 12.6], [33.8, 14.2], [32.2, 15.6], [29.6, 16.3], [28.6, 16.3]], 64)), polished));      // the bezel
  watch.add(mesh(toZ(lathe([[28.6, 16.3], [28.6, 15.4], [26.6, 12.9], [26.4, 12.9]], 64)), M.satin("#20314F", 0.45, 0.2)));  // the chapter ring
  const dialT = paintTex("fa-dial", 512, 512, (c) => {
    const g0 = c.createRadialGradient(256, 236, 10, 256, 256, 256);
    g0.addColorStop(0, "#3F67A8"); g0.addColorStop(0.55, "#1F3C72"); g0.addColorStop(1, "#0E1C3A");
    c.fillStyle = g0; c.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 720; i++) {   // the sunburst: fine rays from the centre, alternately lighter and darker
      const a = (i / 720) * Math.PI * 2, s = hash(i, 9, 2);
      c.strokeStyle = s > 0.5 ? `rgba(160,200,255,${0.05 + 0.06 * s})` : `rgba(0,10,30,${0.06 + 0.06 * s})`;
      c.lineWidth = 0.9; c.beginPath(); c.moveTo(256, 256); c.lineTo(256 + 260 * Math.cos(a), 256 + 260 * Math.sin(a)); c.stroke();
    }
    c.strokeStyle = "rgba(235,240,248,0.85)";   // the minute track
    for (let i = 0; i < 60; i++) {
      const a = (i / 60) * Math.PI * 2, r0 = i % 5 ? 236 : 228, r1 = 246;
      c.lineWidth = i % 5 ? 1.6 : 2.6;
      c.beginPath(); c.moveTo(256 + r0 * Math.sin(a), 256 - r0 * Math.cos(a)); c.lineTo(256 + r1 * Math.sin(a), 256 - r1 * Math.cos(a)); c.stroke();
    }
    c.beginPath(); c.arc(256, 256, 248, 0, Math.PI * 2); c.lineWidth = 1.2; c.stroke();
  }, 2);
  { const dial = mesh(new THREE.CircleGeometry(26.6, 96), new THREE.MeshPhysicalMaterial({ map: dialT, roughness: 0.3, metalness: 0.35, clearcoat: 0.6, clearcoatRoughness: 0.1, envMapIntensity: 0.7 })); dial.position.z = 12.9; watch.add(dial); }
  // applied batons (a double one at 12); no date window: nothing on the dial reads as a word or a figure
  for (let h = 0; h < 12; h++) {
    const pv = new THREE.Group(); pv.rotation.z = -(h / 12) * Math.PI * 2; watch.add(pv);
    for (const off of h === 0 ? [-1.9, 1.9] : [0]) { const ix = rbox(h === 0 ? 1.9 : 2.4, 6.6, 1.1, 0.5, polished); ix.position.set(off, 19.6, 14); pv.add(ix); }
  }
  // the hands: faceted dauphine hour and minute, a slim seconds with its counterweight, a centre cap
  const dauphine = (len: number, w: number) => {
    const gg = new THREE.BufferGeometry();
    const tip = [0, len, 0.5], l = [-w / 2, 0, 0], r = [w / 2, 0, 0], ridge = [0, -2.5, 0.9], tail = [0, -5, 0];
    gg.setAttribute("position", new THREE.Float32BufferAttribute([...l, ...ridge, ...tip, ...ridge, ...r, ...tip, ...l, ...tail, ...ridge, ...ridge, ...tail, ...r], 3));
    gg.computeVertexNormals();
    return gg;
  };
  const hourP = new THREE.Group(); hourP.position.z = 13.95; hourP.add(mesh(dauphine(14.5, 3.6), polished2)); watch.add(hourP);
  const minP = new THREE.Group(); minP.position.z = 14.9; minP.add(mesh(dauphine(22, 3), polished2)); watch.add(minP);
  const secP = new THREE.Group(); secP.position.z = 15.85; watch.add(secP);
  { const s = rbox(0.7, 30, 0.35, 0.17, chrome); s.position.set(0, 9, 0.35); secP.add(s);
    const cw = mesh(new THREE.CylinderGeometry(1.7, 1.7, 0.35, 20), chrome); cw.rotation.x = Math.PI / 2; cw.position.set(0, -6.4, 0.18); secP.add(cw); }
  { const cap = mesh(new THREE.CylinderGeometry(1.5, 1.5, 2, 20), polished); cap.rotation.x = Math.PI / 2; cap.position.z = 14.8; watch.add(cap); }
  { const cr = mesh(new THREE.CylinderGeometry(28.8, 28.8, 1.1, 96), new THREE.MeshPhysicalMaterial({ color: col("#F5FAFF"), roughness: 0.02, transparent: true, opacity: 0.12, depthWrite: false, clearcoat: 1, envMapIntensity: 1.6 }), false, false);
    cr.rotation.x = Math.PI / 2; cr.position.z = 16.86; watch.add(cr); }
  // the crown at 3 and its tube
  watch.add(rod(V(34.6, 0, 8), V(37, 0, 8), 2.6, polished));
  { const kc = knurl(0, 0, 36.6, 42, 4.6, polished, 22); kc.rotation.y = Math.PI / 2; kc.position.set(0, 0, 8); watch.add(kc); }
  // the lugs: four horns off the case, bent down toward the wrist
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) {
    const lp = new THREE.Group(); lp.position.set(sx * 21.3, sy * 28, 2.2); lp.rotation.x = sy * rad(-10); watch.add(lp);
    const lg = rbox(6.4, 17, 7.2, 2.6, brushed); lg.position.set(0, sy * 8, 7.2); lp.add(lg);
  }
  // the bracelet: three-row links, from the lugs' spring bars bending onto the pillow and round under it
  watch.updateMatrix();
  const lugEnd = (sy: number) => V(0, sy * 41.5, 3.4).applyMatrix4(watch.matrix);
  const linkC = rbox(12.4, 9.2, 6.6, 1.8, polished, 1).geometry, linkO = rbox(10, 9.2, 6, 1.6, brushed, 1).geometry;
  const geoC: THREE.BufferGeometry[] = [], geoO: THREE.BufferGeometry[] = [];
  const placeLinks = (pts: THREE.Vector3[]) => {
    const cur = new THREE.CatmullRomCurve3(pts, false, "centripetal");
    const len = cur.getLength(), pitch = 10.4, n = Math.floor(len / pitch);
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n, p = cur.getPointAt(t), tg = cur.getTangentAt(t);
      const nrm = new THREE.Vector3().crossVectors(V(1, 0, 0), tg).normalize();
      const m = new THREE.Matrix4().makeBasis(V(1, 0, 0), tg, nrm).setPosition(p);
      const cG = linkC.clone(); cG.translate(0, 0, 3.3); cG.applyMatrix4(m); geoC.push(cG);
      for (const s of [-1, 1]) { const oG = linkO.clone(); oG.translate(s * 11.6, 0, 3); oG.applyMatrix4(m); geoO.push(oG); }
    }
  };
  const bend = (sy: number) => {
    const S = lugEnd(sy), dir = u12.clone().multiplyScalar(sy);
    const ang0 = Math.atan2(S.y - C0.y, S.z - C0.z), sweep = sy;
    const aQ = ang0 + sweep * 0.5;
    const Q = V(0, C0.y + RC * Math.sin(aQ), C0.z + RC * Math.cos(aQ));
    const tq = V(0, Math.cos(aQ), -Math.sin(aQ)).multiplyScalar(sweep);
    const k = S.distanceTo(Q) * 0.32;
    const pts = new THREE.CubicBezierCurve3(S, S.clone().addScaledVector(dir, k), Q.clone().addScaledVector(tq, -k), Q).getPoints(16);
    for (const p of pts) { const r = Math.hypot(p.y - C0.y, p.z - C0.z); if (r < RC) { p.y = C0.y + ((p.y - C0.y) * RC) / r; p.z = C0.z + ((p.z - C0.z) * RC) / r; } }
    const aEnd = sweep > 0 ? (3 * Math.PI) / 2 : -Math.PI / 2;
    for (let a = aQ + sweep * 0.12; sweep > 0 ? a <= aEnd + 1e-6 : a >= aEnd - 1e-6; a += sweep * 0.12) pts.push(V(0, C0.y + RC * Math.sin(a), C0.z + RC * Math.cos(a)));
    return pts;
  };
  placeLinks(bend(1)); placeLinks(bend(-1));
  watchA.add(mesh(mergeGeometries(geoC), polished));
  watchA.add(mesh(mergeGeometries(geoO), brushed));
  for (const sy of [-1, 1]) { const S = lugEnd(sy); watchA.add(rod(S.clone().add(V(-19.5, 0, 0)), S.clone().add(V(19.5, 0, 0)), 1.1, polished, 10)); }   // the spring bars

  // ── the floor: one shadow catcher with contact pools ──
  root.add(makeFloor({ y: g.floor, x0: g.lamp.x - 760, x1: g.box.x + 700, z0: -900, z1: 700, reflect: 0, shadow: 0.4, fadeC: [(g.lamp.x + g.box.x) / 2, -60], fadeR: [(g.box.x - g.lamp.x) / 2 + 520, 560],
    blobs: [{ x: g.lamp.x, z: g.lamp.z, w: 200, d: 200, a: 0.3 }, { x: g.mic.x, z: g.mic.z, w: 220, d: 220, a: 0.3 }, { x: g.box.x, z: g.box.z, w: BW + 70, d: BD + 70, a: 0.36 }] }));

  boxG.rotation.y = rad(-14);
  if (!(globalThis as unknown as { __faNoFuse?: boolean }).__faNoFuse) fuse(root);
  // ★ AUDIT BUILD ONLY (g3audit installed): every geometry carries its own BVH, so FLOAT's closest-point search between two
  //   parts runs tree-against-tree instead of brute force (same exact distances; the shade alone took 7 min without it)
  const W0 = globalThis as unknown as { __g3after?: unknown; __faAudit?: boolean };
  if (W0.__g3after || W0.__faAudit) root.traverse((o) => { const m = o as THREE.Mesh; if (m.isMesh && !(m.geometry as THREE.BufferGeometry & { boundsTree?: unknown }).boundsTree) (m.geometry as THREE.BufferGeometry & { boundsTree?: unknown }).boundsTree = new MeshBVH(m.geometry); });
  const pivot = V(g.mic.x, 0, -100);
  return {
    root,
    update: (p) => {
      // the place turns a few degrees across its run: each object about its own spot
      root.rotation.y = rad(p.yaw);
      root.position.copy(pivot).sub(pivot.clone().applyAxisAngle(UP, rad(p.yaw)));
      // the lamp: the rocker, the filament, the glass, the shade's inside, the pool
      rockerP.rotation.x = rad(14 - 28 * p.sw);
      filM.emissiveIntensity = 9 * p.glow;
      filM.color.setRGB(0.29 + 0.7 * p.glow, 0.23 + 0.6 * p.glow, 0.16 + 0.4 * p.glow);
      glassM.emissiveIntensity = 0.35 * p.glow;
      glassM.opacity = 0.1 + 0.1 * p.glow;
      haloM.opacity = p.glow;
      bulbLight.intensity = 1500 * p.glow;
      spot.intensity = 1600 * p.glow;
      poolM.opacity = 0.6 * p.glow;
      // the microphone's on-air ring
      ringM.emissiveIntensity = 2.4 * p.ring;
      ringM.color.setRGB(0.91 + 0.09 * p.ring, 0.86 - 0.5 * p.ring, 0.86 - 0.55 * p.ring);
      ringGlowM.opacity = 0.75 * p.ring;
      ringLight.intensity = 160 * p.ring;
      // the case: the button presses in, the lid swings up on its hinges
      btn.position.z = BD / 2 + 2.6 - 4.4 * p.btn;
      lidP.rotation.x = -rad(97) * p.lid;
      // the watch keeps time (from 10:08, running)
      const s = p.sec;
      secP.rotation.z = -((s % 60) / 60) * Math.PI * 2;
      minP.rotation.z = -((8 + s / 60) / 60) * Math.PI * 2;
      hourP.rotation.z = -((10 + (8 + s / 60) / 60) / 12) * Math.PI * 2;
    },
  };
};
