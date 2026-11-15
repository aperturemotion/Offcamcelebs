// ══════════════════════════════════════════════════════════════════════════════════════════════
// TO BE FAIR, IN 3-D (035) — "To be fair: choose the annuity, and the full 847 million does get paid, before tax. It just
// takes 29 years." On the cream ground, two objects modelled from reference photographs:
//   · a WIDE-MOUTH PINT GLASS JAR (the Mason-style canning jar: a heel and a thick base, straight walls, a rounded shoulder,
//     a two-start screw thread on the neck, a rolled lip, its two mould seams; old aqua glass, refracting, no lettering) that
//     FILLS with the annuity's gold coins (the same 1-oz bullion coins as the annuity place, at this place's scale). Each coin
//     flies in from beyond the frame on a true parabola under gravity (g at the coins' real scale), tumbling, drops through
//     the mouth and lands on the heap with a small rebound. The heap is BUILT, coin by coin, on a height field: each coin
//     settles in the lowest spot it can reach, tilted to the slope it lands on, with a hair of air under it; nothing passes
//     through the glass or through another coin, in flight or at rest (asserted while planning).
//   · an ANTIQUE SANDGLASS (the English turned-wood kind, 18th–19th c.: two turned walnut end plates with a bead and cove
//     edge, four turned spindles, a blown two-bulb glass vial seated on oxblood leather cushions), RUNNING: a thin stream of
//     sand through the waist, a crater sinking into the upper sand, a cone growing below.
// Units are the layer's px (y up). Every part rests on another with a hair of clearance; designed joins are declared.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, type Model } from "../stage";
import { rad, hash, col } from "../kit029";
import { coinGeo, coinMesh, walnutMat, poolMat } from "./annuity";

// ══ THE JAR AND ITS COINS: THE PLAN (pure: the set and the model share it) ═══════════════════════
export const FC_R = 32, FC_T = 5.6;               // a coin at this place's scale: 1 mm = 1.957 px
export const FG = (9.81 * 1957) / 900;            // gravity, px / f² (≈ 21.3)
/** the jar's glass, outer then inner, (r, y) from its foot (a wide-mouth pint: 88 mm across, 131 mm tall) */
const JAR_OUT: [number, number][] = [[70, 0], [76, 0.8], [81, 3.2], [84.5, 7], [86, 13], [86, 186], [85, 193], [82, 201], [78.5, 206.5], [77, 211], [77, 249],
  [76.6, 252.5], [75.2, 255.2], [73.6, 256], [72.4, 255.4]];
const JAR_IN: [number, number][] = [[72.4, 254], [72.5, 250], [72.5, 213], [74.5, 208.5], [78.5, 203.5], [81, 197], [81.5, 190], [81.5, 16], [80.6, 12.5], [78.5, 10.8], [74, 10.3]];
export const JAR_H = 256, JAR_FLOOR = 10.3, JAR_MOUTH = 256;
/** the jar's inner radius at height y (∞ above the lip) */
const rIn = (y: number) => {
  if (y > JAR_MOUTH + 2) return Infinity;
  if (y >= 254) return 72.4;
  for (let i = 0; i < JAR_IN.length - 1; i++) {
    const [r0, y0] = JAR_IN[i], [r1, y1] = JAR_IN[i + 1];
    if ((y <= y0 && y >= y1)) return r0 + ((r1 - r0) * (y - y0)) / (y1 - y0 || 1);
  }
  return 0;
};
const rInMin = (y0: number, y1: number) => { let m = Infinity; for (let y = Math.max(16, y0); y <= y1; y += 2) m = Math.min(m, rIn(y)); return m; };

export type Coin = {
  T: number; tL: number; tP: number;                         // landing, first shown, peak
  rest: [number, number, number]; q: [number, number, number, number];   // rest centre (jar-local) and orientation
  vx: number; vz: number; yP: number; vb: number; hop: number;
  ax: [number, number, number]; w: number;                    // tumble axis and rate
};
export const JAR_DBG: Record<string, number> = {};
const dbg = (k: string) => { JAR_DBG[k] = (JAR_DBG[k] ?? 0) + 1; };
const CELL = 2, GN = 84;                       // the height field: 2-px cells over ±84
/** ★ PLAN THE JAR: n coins landing between t0 and t1 (accelerating: singles, then a stream), each settled in the lowest spot
 *  it can reach and flown in on a parabola that clears the glass, the heap and every other coin */
export const planJar = (t0: number, t1: number, n: number, maxPeak: (t: number) => number) => {
  const grid = new Float32Array(GN * GN).fill(JAR_FLOOR);
  const gi = (x: number) => Math.round((x + (GN * CELL) / 2) / CELL);
  const cellX = (i: number) => i * CELL - (GN * CELL) / 2;
  const SAFE = 81.5 - FC_R - 1.5;              // a coin's centre stays this close to the axis (its edge clear of the wall)
  const foot = FC_R + 1.5;
  /** the rest of a coin centred at (x, z) on the field as it is: its tilt along the slope under it, and its centre height */
  const restAt = (x: number, z: number) => {
    let sx = 0, sz = 0, sxx = 0, szz = 0, sxz = 0, sh = 0, shx = 0, shz = 0, k = 0;
    const pts: [number, number, number][] = [];
    for (let i = gi(x - foot); i <= gi(x + foot); i++) for (let j = gi(z - foot); j <= gi(z + foot); j++) {
      if (i < 0 || j < 0 || i >= GN || j >= GN) continue;
      const px = cellX(i) - x, pz = cellX(j) - z;
      if (px * px + pz * pz > foot * foot) continue;
      const h = grid[i * GN + j];
      pts.push([px, pz, h]);
      sx += px; sz += pz; sxx += px * px; szz += pz * pz; sxz += px * pz; sh += h; shx += h * px; shz += h * pz; k++;
    }
    // the least-squares slope of the field under it
    const mh = sh / k, mx = sx / k, mz = sz / k;
    const cxx = sxx / k - mx * mx, czz = szz / k - mz * mz, cxz = sxz / k - mx * mz, chx = shx / k - mh * mx, chz = shz / k - mh * mz;
    const det = cxx * czz - cxz * cxz || 1;
    let gx = (chx * czz - chz * cxz) / det, gz = (chz * cxx - chx * cxz) / det;
    const gm = Math.hypot(gx, gz);
    const tilt = Math.min(Math.atan(gm) * 0.7, rad(13));
    const tn = Math.tan(tilt);
    if (gm > 1e-6) { gx /= gm; gz /= gm; } else { gx = 1; gz = 0; }
    const half = FC_T / (2 * Math.cos(tilt));
    let c = -Infinity;
    for (const [px, pz, h] of pts) c = Math.max(c, h - tn * (px * gx + pz * gz));
    return { y: c + half + 0.35, tn, gx, gz, tilt, half };
  };
  const place = (x: number, z: number, r: ReturnType<typeof restAt>) => {
    for (let i = gi(x - foot); i <= gi(x + foot); i++) for (let j = gi(z - foot); j <= gi(z + foot); j++) {
      if (i < 0 || j < 0 || i >= GN || j >= GN) continue;
      const px = cellX(i) - x, pz = cellX(j) - z;
      if (px * px + pz * pz > foot * foot) continue;
      grid[i * GN + j] = Math.max(grid[i * GN + j], r.y + r.tn * (px * r.gx + pz * r.gz) + r.half);
    }
  };
  /** the field's highest point under a disc (a sphere's worth of clearance for a tumbling coin) */
  const fieldMax = (x: number, z: number, rr: number) => {
    let m = -Infinity;
    for (let i = gi(x - rr); i <= gi(x + rr); i++) for (let j = gi(z - rr); j <= gi(z + rr); j++) {
      if (i < 0 || j < 0 || i >= GN || j >= GN) continue;
      const px = cellX(i) - x, pz = cellX(j) - z;
      if (px * px + pz * pz <= rr * rr) m = Math.max(m, grid[i * GN + j]);
    }
    return m;
  };
  const coins: Coin[] = [];
  // ★ THE EXACT SETTLE: the height field is conservative (a tilted coin's whole circle, a margin), so a coin it rests would
  //   hang ~2 px over the coin under it. Each coin is then lowered, as a true cylinder against every coin already placed
  //   (and they against it) and the jar's floor and heel, until it is 0.3 px from the nearest: it rests ON the heap.
  const placed: { c: THREE.Vector3; n: THREE.Vector3 }[] = [];
  const axisOf = (r: ReturnType<typeof restAt>) => new THREE.Vector3(-r.tn * r.gx, 1, -r.tn * r.gz).normalize();
  const frame = (n: THREE.Vector3) => {
    const u = new THREE.Vector3(1, 0, 0).sub(n.clone().multiplyScalar(n.x)).normalize();
    return [u, new THREE.Vector3().crossVectors(n, u)];
  };
  /** sample points over a coin: its bottom and top faces (rings) and its two rim edges */
  const samples = (c: THREE.Vector3, n: THREE.Vector3) => {
    const [u, v] = frame(n), out: THREE.Vector3[] = [];
    for (const side of [-1, 1]) for (const rr of [0, 0.35, 0.7, 1]) for (let k = 0; k < (rr ? 20 : 1); k++) {
      const a = (k / 20) * Math.PI * 2;
      out.push(c.clone().addScaledVector(n, (side * FC_T) / 2).addScaledVector(u, Math.cos(a) * rr * FC_R).addScaledVector(v, Math.sin(a) * rr * FC_R));
    }
    return out;
  };
  const inside = (p: THREE.Vector3, c: THREE.Vector3, n: THREE.Vector3, m: number) => {
    const d = p.clone().sub(c), h = d.dot(n);
    return Math.abs(h) < FC_T / 2 + m && d.addScaledVector(n, -h).length() < FC_R + m;
  };
  const settleDrop = (x: number, z: number, r: ReturnType<typeof restAt>) => {
    const n = axisOf(r);
    const near = placed.filter((q) => Math.hypot(q.c.x - x, q.c.z - z) < 2 * FC_R + 2 && q.c.y < r.y + FC_T + 2);
    const nearS = near.map((q) => samples(q.c, q.n));
    const ok = (dy: number) => {
      const c = new THREE.Vector3(x, r.y - dy, z), mine = samples(c, n);
      for (const p of mine) {
        if (p.y < JAR_FLOOR + 0.3) return false;
        if (Math.hypot(p.x, p.z) > rIn(Math.max(JAR_FLOOR + 0.01, p.y)) - 1) return false;
        for (const q of near) if (inside(p, q.c, q.n, 0.3)) return false;
      }
      for (const ss of nearS) for (const p of ss) if (inside(p, c, n, 0.3)) return false;
      return true;
    };
    if (!ok(0)) return -1;
    let lo = 0, hi = 12;
    if (ok(hi)) return hi;
    for (let k = 0; k < 12; k++) { const mid = (lo + hi) / 2; if (ok(mid)) lo = mid; else hi = mid; }
    return lo;
  };
  /** a coin's centre at t (no hop) */
  const posAt = (c: Coin, t: number): [number, number, number] => {
    if (t >= c.T) {
      const u = t - c.T;
      return [c.rest[0], c.rest[1] + (u < c.hop ? c.vb * u - 0.5 * FG * u * u : 0), c.rest[2]];
    }
    return [c.rest[0] + c.vx * (t - c.T), c.yP - 0.5 * FG * (t - c.tP) ** 2, c.rest[2] + c.vz * (t - c.T)];
  };
  /** try to fly a coin to a rest at landing time T: the parabola, or null if no peak height and entry work */
  const fly = (T: number, x: number, z: number, r: ReturnType<typeof restAt>, seed: number): Coin | null => {
    const s = x >= 0 ? 1 : -1;   // it comes from the side away from its landing spot (left-launched coins land right of the axis)
    for (const H of [200, 188, 176, 212, 164]) {
      const yP = JAR_MOUTH + H;
      // the ENTRY plane: where the coin's reach (radius R) first comes level with the lip
      const tauF = Math.sqrt((2 * (yP - r.y)) / FG), tauM = Math.sqrt((2 * (H - FC_R - 3)) / FG), D = tauF - tauM;
      // the caption band: the coin's top at its peak stays under it (the camera breathes, so it is asked at that frame)
      if (yP + FC_R > Math.min(maxPeak(T - tauF - 1), maxPeak(T - tauF), maxPeak(T - tauF + 1))) continue;
      const xes = [-34, -28, -22, -16, -10, -4, 2, 8, 14, 20, 26, 32].map((v) => v * s).filter((xe) => s * (x - xe) / D >= 12)
        .sort((a, b) => Math.abs((x - a) / D - 38 * s) - Math.abs((x - b) / D - 38 * s));
      for (const xe of xes) {
        const vx = (x - xe) / D;
        const ze = z * 0.45, vz = (z - ze) / D;
        const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(-r.tn * r.gx, 1, -r.tn * r.gz).normalize());
        q.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), hash(seed, 1, 2) * Math.PI * 2));
        const ang = hash(seed, 3, 1) * Math.PI * 2;
        const c: Coin = { T, tP: T - tauF, tL: 0, rest: [x, r.y, z], q: [q.x, q.y, q.z, q.w], vx, vz, yP, vb: 0, hop: 0,
          ax: [Math.cos(ang) * 0.6, 0.35, Math.sin(ang)], w: (0.32 + 0.22 * hash(seed, 4, 1)) * (hash(seed, 5, 1) > 0.5 ? 1 : -1) };
        const vImp = FG * tauF;
        c.vb = 0.15 * vImp; c.hop = (2 * c.vb) / FG;
        // it comes into the frame from beyond its side or its foot: never out of the floor near the jar (above it within 160 px)
        const tNear = T - (x + s * 160) / vx;
        if (posAt(c, tNear)[1] < 40) { dbg('edge'); continue; }
        // shown from the last moment it was wholly outside the frame (|x| > 380, or below the frame's foot), before its peak
        let tL = c.tP;
        while (tL > c.tP - 60) { const q = posAt(c, tL); if (Math.abs(q[0]) > 380 || q[1] < -170) break; tL -= 0.25; }
        c.tL = tL;
        // the glass: wherever the coin's disc of reach (radius R) is level with the jar, it is clear of the wall by 2 px
        let ok = true;
        for (let t = c.tP; t < T && ok; t += 0.1) {
          const [px, py, pz] = posAt(c, t);
          if (py - FC_R > JAR_MOUTH + 3) continue;
          if (Math.hypot(px, pz) + FC_R + 2 > rInMin(py - FC_R, py + FC_R)) { ok = false; dbg('glass'); }
          // the heap: a tumbling coin (a sphere of radius R) stays clear of it until its last 40 px, then in its rest pose
          if (ok && py > r.y + 90 && py - FC_R < fieldMax(px, pz, FC_R) + 1) { ok = false; dbg('heap'); }
          if (ok && py <= r.y + 90) { const rr = restAt(px, pz); if (py < rr.y - 2.6 + FC_R * Math.abs(Math.sin(c.w * (T - t))) - 0.01 && Math.hypot(px - x, pz - z) > 0.5) { ok = false; dbg('rest'); } }
        }
        if (!ok) continue;
        // every other coin: their centres ≥ 2R + 3 apart wherever both are moving
        for (const o of coins) {
          const a = Math.max(c.tL, o.tL), b = Math.min(T + c.hop, o.T + o.hop);
          for (let t = a; t <= b && ok; t += 0.1) { const p1 = posAt(c, t), p2 = posAt(o, t); if (Math.hypot(p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2]) < 2 * FC_R + 3) ok = false; }
          // and nothing lands on a coin still in the air or hopping
          if (ok && Math.hypot(o.rest[0] - x, o.rest[2] - z) < 2 * FC_R + 2 && T < o.T + o.hop + 1.2) ok = false;
          if (!ok) break;
        }
        if (ok) return c;
      }
    }
    return null;
  };
  for (let i = 0; i < n; i++) {
    let T = t0 + (t1 - t0) * (i / (n - 1)) ** 0.62;
    if (coins.length) T = Math.max(T, coins[coins.length - 1].T + 0.45);
    let done: Coin | null = null;
    for (let tries = 0; tries < 60 && !done; tries++, T += 0.5) {
      // candidates: twenty spots over the safe disc; the lowest reachable one wins (gravity)
      const cands: { x: number; z: number; r: ReturnType<typeof restAt> }[] = [];
      for (let k = 0; k < 24; k++) {
        const a = hash(i, k, 11) * Math.PI * 2, rr = SAFE * Math.sqrt(0.08 + 0.92 * hash(i, k, 12));
        const x = Math.cos(a) * rr, z = Math.sin(a) * rr * 0.9;
        const r = restAt(x, z);
        // ★ at rest its edge clears the glass all the way down, the heel's curve included (the heap's foot sits in it)
        const ext = r.half + FC_R * Math.sin(r.tilt);
        let wall = Infinity;
        for (let y = r.y - ext; y <= r.y + ext; y += 0.5) wall = Math.min(wall, rIn(Math.max(JAR_FLOOR + 0.01, y)));
        if (Math.hypot(x, z) + FC_R * Math.cos(r.tilt) + 1.5 > wall) continue;
        cands.push({ x, z, r });
      }
      // the lowest wins: by the coin's highest point once settled (a flat coin in a gap beats a steep one on a crest)
      cands.sort((p, q) => p.r.y + p.r.tn * FC_R - (q.r.y + q.r.tn * FC_R));
      for (const cd of cands) {
        const drop = settleDrop(cd.x, cd.z, cd.r);
        if (drop < 0) continue;
        const r = { ...cd.r, y: cd.r.y - drop };
        const c = fly(T, cd.x, cd.z, r, i * 13 + 7);
        if (c) { done = c; place(cd.x, cd.z, r); placed.push({ c: new THREE.Vector3(cd.x, r.y, cd.z), n: axisOf(r) }); break; }
      }
    }
    if (!done) throw new Error(`fair: coin ${i} finds no clear flight into the jar`);
    coins.push(done);
  }
  return { coins, posAt, top: Math.max(...coins.map((c) => c.rest[1])) };
};
export type JarPlan = ReturnType<typeof planJar>;
const qTmp = new THREE.Quaternion(), qSpin = new THREE.Quaternion(), vAx = new THREE.Vector3();
/** a coin's pose at t: its centre and orientation (tumbling in flight, its rest pose from landing on) */
export const coinPose = (plan: JarPlan, i: number, t: number) => {
  const c = plan.coins[i];
  const p = plan.posAt(c, t);
  qTmp.set(c.q[0], c.q[1], c.q[2], c.q[3]);
  if (t < c.T) { vAx.set(...c.ax).normalize(); qSpin.setFromAxisAngle(vAx, c.w * (t - c.T)); qTmp.premultiply(qSpin); }
  return { p, q: qTmp, shown: t >= c.tL, moving: t < c.T + c.hop };
};

// ══ THE SANDGLASS ════════════════════════════════════════════════════════════════════════════════
/** the vial's outer radius against height from its waist (|y| ≤ 170), from a blown two-bulb glass: a waist of 4.2, bulbs of
 *  51 at ±95, short cylindrical ends of 26 seated in the cushions */
const VIAL_CTRL: [number, number][] = [[0, 4.2], [5, 4.5], [12, 8], [22, 18], [36, 32], [55, 44], [78, 50], [96, 51.2], [116, 49.5], [134, 43], [148, 34], [157, 28], [163, 26.2], [170, 26]];
const VIAL_N = 56;
const vialOuter: [number, number][] = (() => {
  const c = new THREE.SplineCurve(VIAL_CTRL.map(([y, r]) => new THREE.Vector2(r, y)));
  return c.getPoints(VIAL_N).map((p) => [p.x, p.y] as [number, number]);
})();
const GLASS_T = 1.8;
/** the vial's inner radius at |y| */
const vialIn = (y: number) => {
  const a = Math.abs(y);
  for (let i = 0; i < vialOuter.length - 1; i++) {
    const [r0, y0] = vialOuter[i], [r1, y1] = vialOuter[i + 1];
    if (a >= y0 && a <= y1) return Math.max(0.6, r0 + ((r1 - r0) * (a - y0)) / (y1 - y0 || 1) - GLASS_T);
  }
  return 26 - GLASS_T;
};
export const HG = { plateR: 80, plateT: 16, vialHalf: 170, inEnd: 167.5, spR: 62 } as const;
const VIAL_C = 0.3 + HG.plateT + 0.2 + 2 + 0.2 + HG.vialHalf;   // the waist above the floor
export const HG_TOP = VIAL_C + HG.vialHalf + 0.2 + 2 + 0.2 + HG.plateT;
export const HG_WAIST = VIAL_C;
/** sand: top level ys (from the waist), crater depth dc; the lower cone's apex ya (negative) */
export type Sand = { ys: number; dc: number; ya: number; flow: number };
const REPOSE = Math.tan(rad(34));
/** the upper sand: on the funnel of the top bulb, up to its level, a crater drawn into its middle (a lathe profile) */
const topSandProf = (s: Sand): [number, number][] => {
  const out: [number, number][] = [[0.01, -3]];
  for (let y = -3; y < s.ys; y += Math.abs(y) < 30 ? 2 : 4) out.push([Math.max(0.5, vialIn(y) - 0.45), y]);
  const rw = vialIn(s.ys) - 0.45;
  out.push([rw, s.ys]);
  const rc = Math.min(rw - 1, s.dc / REPOSE);
  out.push([rc, s.ys]);
  for (let k = 1; k <= 6; k++) { const r = rc * (1 - k / 6); out.push([Math.max(0.01, r), s.ys - s.dc * (k / 6) ** 1.15]); }
  return out;
};
/** the lower sand: a cone at the angle of repose from its apex, down to where it meets the bulb, then the bulb's own floor */
const botSandProf = (s: Sand): [number, number][] => {
  const yb = -HG.inEnd + 0.45;
  let ym = s.ya;
  for (let y = s.ya; y > yb; y -= 0.25) { if ((s.ya - y) / REPOSE >= vialIn(y) - 0.45) { ym = y; break; } ym = y; }
  const out: [number, number][] = [[0.01, yb], [vialIn(yb) - 0.45, yb]];
  for (let y = yb + 2; y < ym; y += Math.abs(y) < 30 ? 2 : 4) out.push([vialIn(y) - 0.45, y]);
  out.push([Math.min(vialIn(ym) - 0.45, (s.ya - ym) / REPOSE), ym]);
  for (let k = 1; k <= 6; k++) { const yy = ym + ((s.ya - ym) * k) / 6; out.push([Math.max(0.01, (s.ya - yy) / REPOSE), yy]); }
  return out;
};

/** ★ the glass's transmission over a transparent canvas (034 soto.ts): three's transmission pass reads an empty pixel as white
 *  at alpha 0.5; the white is taken out and the pane's alpha becomes what is really behind it */
const occGlass = (m: THREE.MeshPhysicalMaterial, key: string) => {
  m.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace("#include <transmission_fragment>", THREE.ShaderChunk.transmission_fragment
      .replace("material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );",
        `float occC = clamp( ( transmitted.a - 0.5 ) * 2.0, 0.0, 1.0 );
	transmitted.rgb = max( transmitted.rgb - ( 1.0 - occC ) * vec3( 0.97 ), vec3( 0.0 ) );
	material.transmissionAlpha = mix( material.transmissionAlpha, occC, material.transmission );`));
  };
  m.customProgramCacheKey = () => `occGlass-${key}`;
};

/** ★ a glass's EDGES: clear glass over a pale ground darkens toward its silhouettes (a long path through tinted glass, and the
 *  room's darker reflections at grazing), which the transmission pass cannot show over an empty pixel. A fresnel film over
 *  the glass's own surfaces, in the glass's tint: nothing at face-on, its alpha rising toward the silhouette. */
const edgeFilm = (tint: string, a: number, key: string) => {
  const m = new THREE.MeshStandardMaterial({ color: col(tint), transparent: true, depthWrite: false, roughness: 1, metalness: 0, envMapIntensity: 0 });
  const c = col(tint);
  m.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace("#include <opaque_fragment>",
      `float fres = pow( 1.0 - abs( dot( normalize( normal ), normalize( vViewPosition ) ) ), 2.4 );
 gl_FragColor = vec4( vec3( ${c.r.toFixed(3)}, ${c.g.toFixed(3)}, ${c.b.toFixed(3)} ), clamp( fres * ${a.toFixed(2)}, 0.0, 1.0 ) );`);
  };
  m.customProgramCacheKey = () => `edgeFilm-${key}`;
  return m;
};
/** turned walnut, its grain running along the turning (a lathe's v) */
const turnedWalnut = () => {
  const t = paintTex("fa-walnut-turned", 512, 512, (c) => {
    c.fillStyle = "#5C3923"; c.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 200; i++) {
      const x0 = hash(i, 1, 7) * 540 - 14, a = 0.06 + 0.18 * hash(i, 2, 7), dark = hash(i, 3, 7) > 0.42;
      c.strokeStyle = dark ? `rgba(26,13,6,${a})` : `rgba(160,108,66,${a * 0.6})`;
      c.lineWidth = 0.6 + 3 * hash(i, 4, 7) ** 2;
      const per = 40 + 120 * hash(i, 5, 7), amp = 2 + 6 * hash(i, 6, 7);
      c.beginPath();
      for (let y = 0; y <= 512; y += 8) { const x = x0 + Math.sin(y / per + i) * amp; if (y === 0) c.moveTo(x, y); else c.lineTo(x, y); }
      c.stroke();
    }
  }, 1);
  return new THREE.MeshPhysicalMaterial({ map: t, roughness: 0.42, clearcoat: 0.45, clearcoatRoughness: 0.3, envMapIntensity: 0.5 });
};
const sandTex = () => {
  const t = paintTex("fa-sand", 256, 256, (c) => {
    c.fillStyle = "#C08E55"; c.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 9000; i++) {
      const v = hash(i, 1, 3);
      c.fillStyle = v < 0.25 ? "rgba(120,78,40,0.55)" : v < 0.5 ? "rgba(236,204,150,0.5)" : v < 0.6 ? "rgba(90,60,35,0.5)" : "rgba(214,170,110,0.4)";
      c.fillRect(hash(i, 2, 3) * 256, hash(i, 3, 3) * 256, 1 + hash(i, 4, 3), 1 + hash(i, 5, 3));
    }
  }, 1);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(4, 4);
  return t;
};

// ══ THE MODEL ════════════════════════════════════════════════════════════════════════════════════
export type FairGeo = { floor: number; jar: { x: number; z: number }; hg: { x: number; z: number }; plan: JarPlan };
/** t: the film's frame (the coins' clock); sand: the sandglass's state; yaw (deg) */
export type FairP = { t: number; sand: Sand; yaw: number };

export const fairModel = (g: FairGeo) => (): Model<FairP> => {
  const root = new THREE.Group();
  const sc = new THREE.Group();
  sc.position.set((g.jar.x + g.hg.x) / 2, -g.floor, 0);
  root.add(sc);
  const lx = (x: number) => x - (g.jar.x + g.hg.x) / 2;

  // ══ THE JAR ══
  const jar = new THREE.Group(); jar.userData.obj = "jar";
  jar.position.set(lx(g.jar.x), 0.3, g.jar.z);
  sc.add(jar);
  const glassM = new THREE.MeshPhysicalMaterial({ color: col("#FFFFFF"), metalness: 0, roughness: 0.035, transmission: 1, thickness: 4.5, ior: 1.52,
    attenuationColor: col("#C7E4DA"), attenuationDistance: 120, specularIntensity: 1, envMapIntensity: 1.1 });
  occGlass(glassM, "jar");
  // the shell is turned as one profile but built in bands of three spans (each band a ring, so a coin's check against the
  //   glass meets only the ring beside it, not the whole jar)
  const prof = [...JAR_OUT, ...JAR_IN];
  const film = edgeFilm("#2F4A43", 0.62, "jar");
  for (let i = 0; i < prof.length - 1; i += 3) {
    const band = lathe(prof.slice(i, Math.min(prof.length, i + 4)), 96);
    jar.add(mesh(band, glassM, false, false));
    const fm = mesh(band, film, false, false); fm.renderOrder = 3; jar.add(fm);
  }
  const baseO = mesh(new THREE.CircleGeometry(70, 96).rotateX(Math.PI / 2), glassM, false, false);
  const baseI = mesh(new THREE.CircleGeometry(74, 96).rotateX(-Math.PI / 2).translate(0, JAR_FLOOR, 0), glassM, false, false);
  jar.add(baseO, baseI);
  // the two-start screw thread: two helical ridges, a turn and a half each, half let into the neck
  for (const st of [0, Math.PI]) {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 90; i++) { const u = i / 90, a = st + u * Math.PI * 2.6, y = 217 + u * 27, r = 77 + 0.55 - 0.9 * Math.max(0, Math.abs(u - 0.5) * 2 - 0.82) / 0.18; pts.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r)); }
    jar.add(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 180, 1.5, 8, false), glassM, false, false));
  }
  // the mould seams: a fine ridge up each side, following the profile
  for (const a of [0.12, Math.PI + 0.12]) {
    const pts = JAR_OUT.slice(3, 11).map(([r, y]) => new THREE.Vector3(Math.cos(a) * (r + 0.1), y, Math.sin(a) * (r + 0.1)));
    jar.add(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, 0.45, 6, false), glassM, false, false));
  }
  // ── the coins (each its own object while it moves; the settled heap one object, its order of build keeps it clear) ──
  const cg = coinGeo(FC_R, FC_T, 36);
  const coins = g.plan.coins.map(() => { const m = coinMesh(cg, "cream"); jar.add(m); return m; });

  // ══ THE SANDGLASS ══
  const hg = new THREE.Group();
  hg.position.set(lx(g.hg.x), 0, g.hg.z);
  sc.add(hg);
  const wood = turnedWalnut(), woodFlat = walnutMat(0.3, 0.3);
  const leather = new THREE.MeshPhysicalMaterial({ color: col("#6E2B22"), roughness: 0.62, sheen: 0.4, sheenColor: col("#B56A55"), envMapIntensity: 0.4 });
  // the plates: turned walnut, a bead and a cove on the edge, planed flat faces
  const plateProf: [number, number][] = [[72, 0], [78.5, 0.6], [80.5, 2.6], [80.8, 5], [79, 7.2], [77.6, 8], [79.2, 9.6], [79.8, 11.8], [78.2, 14], [74, 15.6], [69, 16]];
  const plate = (y0: number, flip: boolean, name: string) => {
    const p = new THREE.Group(); p.userData.obj = name;
    p.add(mesh(lathe(plateProf, 96), wood));
    p.add(mesh(new THREE.CircleGeometry(72, 96).rotateX(Math.PI / 2), woodFlat));
    p.add(mesh(new THREE.CircleGeometry(69, 96).rotateX(-Math.PI / 2).translate(0, HG.plateT, 0), woodFlat));
    if (flip) { p.rotation.x = Math.PI; p.position.y = y0 + HG.plateT; } else p.position.y = y0;
    hg.add(p);
  };
  plate(0.3, false, "hg-plate-b");
  plate(HG_TOP - HG.plateT, true, "hg-plate-t");
  // the cushions: oxblood leather discs the vial's ends sit in
  const cush = (y0: number, name: string) => { const c = mesh(new THREE.CylinderGeometry(30, 30, 2, 64), leather); c.position.y = y0 + 1; c.userData.obj = name; hg.add(c); };
  cush(0.3 + HG.plateT + 0.2, "hg-cushion-b");
  cush(HG_TOP - HG.plateT - 0.2 - 2, "hg-cushion-t");
  // the spindles: four, turned (end beads, coves, a long taper, a centre bead), standing between the plates
  const SPL = HG_TOP - HG.plateT - 0.2 - (0.3 + HG.plateT + 0.2);
  const half: [number, number][] = [[5.8, 0], [7.4, 2.5], [7.6, 7], [6.4, 9.5], [5, 11], [6.2, 14], [6.2, 17], [4.4, 21], [3.9, 34], [4.3, 52], [5.3, 66], [4.4, 74], [3.7, 92], [3.6, SPL / 2 - 26], [4.8, SPL / 2 - 16], [6.4, SPL / 2 - 7], [6.8, SPL / 2]];
  const spProf: [number, number][] = [...half, ...half.slice(0, -1).reverse().map(([r, y]) => [r, SPL - y] as [number, number])];
  const spG = lathe(spProf, 32);
  const spEnd0 = new THREE.CircleGeometry(5.8, 32).rotateX(Math.PI / 2), spEnd1 = new THREE.CircleGeometry(5.8, 32).rotateX(-Math.PI / 2).translate(0, SPL, 0);
  for (let k = 0; k < 4; k++) {
    const a = Math.PI / 4 + (k * Math.PI) / 2;
    const s = new THREE.Group(); s.userData.obj = `hg-spindle${k}`;
    s.add(mesh(spG, wood), mesh(spEnd0, wood), mesh(spEnd1, wood));
    s.position.set(Math.cos(a) * HG.spR, 0.3 + HG.plateT + 0.2, Math.sin(a) * HG.spR);
    hg.add(s);
  }
  // the vial: blown glass, outer and inner skins, thick flat ends
  const vial = new THREE.Group(); vial.userData.obj = "hg-vial";
  vial.position.y = VIAL_C;
  hg.add(vial);
  const vglass = new THREE.MeshPhysicalMaterial({ color: col("#FFFFFF"), metalness: 0, roughness: 0.025, transmission: 1, thickness: 2, ior: 1.5,
    attenuationColor: col("#E2EEDD"), attenuationDistance: 160, specularIntensity: 1, envMapIntensity: 1.2 });
  occGlass(vglass, "vial");
  const outP: [number, number][] = [...vialOuter.slice().reverse().map(([r, y]) => [r, -y] as [number, number]), ...vialOuter.slice(1).map(([r, y]) => [r, y] as [number, number])];
  // built in bands (each a ring: the sand's checks against the glass meet only the rings beside it)
  const vfilm = edgeFilm("#3F4A44", 0.5, "vial");
  for (let i = 0; i < outP.length - 1; i += 10) {
    const band = lathe(outP.slice(i, Math.min(outP.length, i + 11)), 64);
    vial.add(mesh(band, vglass, false, false));
    const fm = mesh(band, vfilm, false, false); fm.renderOrder = 3; vial.add(fm);
  }
  const inP: [number, number][] = [];
  for (let y = HG.inEnd; y > -HG.inEnd; y -= Math.abs(y) < 30 ? 2 : 5) inP.push([vialIn(y), y]);
  inP.push([vialIn(-HG.inEnd), -HG.inEnd]);
  for (let i = 0; i < inP.length - 1; i += 10) vial.add(mesh(lathe(inP.slice(i, Math.min(inP.length, i + 11)), 64), vglass, false, false));
  for (const sgn of [1, -1]) {
    vial.add(mesh(new THREE.CircleGeometry(26, 64).rotateX(-sgn * Math.PI / 2).translate(0, sgn * HG.vialHalf, 0), vglass, false, false));
    vial.add(mesh(new THREE.CircleGeometry(vialIn(HG.inEnd), 64).rotateX(sgn * Math.PI / 2).translate(0, sgn * HG.inEnd, 0), vglass, false, false));
  }
  // the sand: rebuilt as it runs
  const sTex = sandTex();
  const sandM = new THREE.MeshStandardMaterial({ map: sTex, bumpMap: sTex, bumpScale: 0.6, roughness: 0.95, envMapIntensity: 0.35 });
  const sand = new THREE.Group(); sand.userData.obj = "hg-sand";
  vial.add(sand);
  const topS = mesh(new THREE.BufferGeometry(), sandM), botS = mesh(new THREE.BufferGeometry(), sandM);
  const strT = sandTex().clone(); strT.needsUpdate = true; strT.repeat.set(0.4, 6);
  const streamM = new THREE.MeshStandardMaterial({ map: strT, roughness: 0.9, envMapIntensity: 0.35 });
  const stream = mesh(new THREE.CylinderGeometry(0.9, 0.9, 1, 12, 1, true), streamM, true, false);
  sand.add(topS, botS, stream);
  let last = "";

  // ══ THE FLOOR ══
  root.add(makeFloor({ y: g.floor, x0: g.jar.x - 900, x1: g.hg.x + 900, z0: -700, z1: 800, reflect: 0, shadow: 0.42, fadeC: [(g.jar.x + g.hg.x) / 2, 0], fadeR: [900, 520],
    blobs: [{ x: g.jar.x, z: g.jar.z, w: 210, d: 190, a: 0.22 }, { x: g.hg.x, z: g.hg.z, w: 200, d: 190, a: 0.32 }] }));
  void poolMat;

  return {
    root,
    update: (p) => {
      sc.rotation.y = rad(p.yaw);
      g.plan.coins.forEach((c, i) => {
        const ps = coinPose(g.plan, i, p.t);
        const m = coins[i];
        m.visible = ps.shown;
        m.position.set(ps.p[0], ps.p[1], ps.p[2]);
        m.quaternion.copy(ps.q);
        m.userData.obj = ps.moving ? `fcoin${i}` : "jar-heap";
        void c;
      });
      const key = `${p.sand.ys.toFixed(2)}|${p.sand.dc.toFixed(2)}|${p.sand.ya.toFixed(2)}`;
      if (key !== last) {
        last = key;
        topS.geometry.dispose(); topS.geometry = lathe(topSandProf(p.sand), 64);
        botS.geometry.dispose(); botS.geometry = lathe(botSandProf(p.sand), 64);
        const y0 = -2, y1 = p.sand.ya + 0.6;
        stream.scale.y = y0 - y1; stream.position.y = (y0 + y1) / 2;
      }
      stream.visible = p.sand.flow > 0;
      strT.offset.y = -p.t * 0.09;
    },
  };
};
