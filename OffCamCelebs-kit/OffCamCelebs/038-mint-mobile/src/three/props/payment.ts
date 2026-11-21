// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE PAYMENT IN 3-D (038) — "On October 9th, T-Mobile paid the final $420 million." On the dark ground, on an unseen desk
// (the floor: its shadows and a faint mirror), two real things:
//   · THE DESK CALENDAR: a tent calendar (two black boards leaning together, 7 in wide), its page-a-month sheets bound at the
//     ridge on a wire-o binding (19 steel loops through punched holes in the boards and every sheet). Its pages FLIP over
//     the top, one after another, fast and then slowing, from JUL 9 2025 through the months, and the last one uncovers
//     OCT 9 2026 on "October 9th". Each sheet swings about the binding's own axis, lifts off its stack, passes over the top
//     and lands face-down on the back stack (a stack's sheets all show their edges).
//   · THE ENVELOPE: a thick 9 × 12 in manila catalogue envelope, its flap open at its short end, its front printed with the
//     sender T-MOBILE in plain type (one label) and a ruled FINAL PAYMENT box; it is tossed in from beyond the right edge on
//     "T-Mobile", falls under gravity and lands flat with weight (a small bounce, a slide braked by the desk). On "$420" a
//     pale-green remittance slip slides out of its mouth, bending down over the flap to the desk: $420,000,000 (one figure).
//     No sum, ever.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, slabOf, paintTex, imageOf, type Model } from "../stage";
import { M, rbox, rad, fitFont, track, hash, paper, typeLines, font } from "../kit029";

export const PY_EYE = { x: 1000, y: -600, D: 2000 };
export const PG = {
  floor: 1350,
  cal: { x: 400, z: -40, yaw: 14 },
  env: { x: 1010, z: 70, yaw: -6 },
  pivot: { x: 700, z: 0 },
} as const;

// ══ THE CALENDAR ══
const CW = 300, RH = 210, BH = 64;
const PHI = Math.atan(BH / RH);
const L = Math.hypot(BH, RH);
/** a sheet: width × length (from its top edge by the binding down the slope), thickness, pitch in a stack */
const SW = 280, SL = 182, ST = 0.6, PITCH = 0.7;
const N = 15;
/** the binding's axis: 1 px above the ridge */
const C = { y: RH + 1, z: 0 };
const TOPY_P = -(2 + Math.cos(PHI));   // a sheet's top edge, pivot-local
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
/** sheet k's month: k = 0 is JUL 2025 … k = 14 is SEP 2026; the pad's top sheet is OCT 2026 */
const monthOf = (k: number) => { const m = 6 + k; return { mon: MONTHS[m % 12], year: 2025 + Math.floor(m / 12) }; };
/** the front stack: page k's printed face (outward from the front board); the back stack: where it lands */
const PADF = 5, PADB = 4;
const bOut = (k: number) => 0.3 + PADF * PITCH + 0.1 + (N - 1 - k) * PITCH + ST;
const aOut = (k: number) => 0.3 + PADB * PITCH + 0.1 + k * PITCH;
const z0Of = (k: number) => bOut(k) - Math.sin(PHI);
const z1Of = (k: number) => -aOut(k) + Math.sin(PHI);
const SWEEP = 2 * Math.PI - 2 * PHI;

export type PayTiming = { flip0: number; land: number; slA: number; slB: number };
/** the flips: fast at first, slowing to the last (frames from flip0), and each one's length */
const GAPS = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4];
export const flipStarts = (T: PayTiming) => { const s = [T.flip0]; for (const g of GAPS) s.push(s[s.length - 1] + g); return s; };
const flipLen = (k: number) => (k < 10 ? 8 : 8 + (k - 9));
const ss = (a: number, b: number, x: number) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
/** page k's flip progress (0 on the front stack … 1 landed on the back) */
export const flipAt = (T: PayTiming, k: number, f: number) => { const s = flipStarts(T)[k]; return ss(0, 1, (f - s) / flipLen(k)); };
/** the frame the last flip has uncovered OCT 9 (its sheet is past upright) and the frame it lands */
export const revealAt = (T: PayTiming) => flipStarts(T)[N - 1] + Math.round(flipLen(N - 1) * 0.5);
export const flipsDone = (T: PayTiming) => flipStarts(T)[N - 1] + flipLen(N - 1);

/** page k's pose in the calendar's frame: the pivot's rotation and the sheet's offset from the axis */
const pageRot = (e: number) => -PHI - SWEEP * e;
const pageZ = (k: number, e: number) => z0Of(k) + (z1Of(k) - z0Of(k)) * ss(0.3, 0.7, e);

// ══ THE ENVELOPE ══
const EW = 440, ED = 300, FLAP = 66;
const SLW = 300, SLD = 140, SLT = 0.4;
const SLIDE = 232;
const CT = 6.95;                       // the contents' top
const SL_IN = CT + 0.1;                // the slip's underside inside
const FLAP_TOP = 0.9;
/** the slip's underside at envelope x X: on the contents inside, bending down over the mouth to the open flap, then to the desk */
const slipUnder = (X: number) => {
  const m = EW / 2, xf = EW / 2 + FLAP;
  let y = SL_IN + (FLAP_TOP + 0.35 - SL_IN) * ss(m - 6, m + 30, X);
  y += (0.55 - (FLAP_TOP + 0.35)) * ss(xf + 2, xf + 18, X);
  return y;
};
/** the front panel's height (envelope-local): a padded pillow over the contents, sealed down at three edges, open at the mouth */
const frontH = (x: number, z: number) => {
  const ex = ss(0, 26, x + EW / 2), ez = ss(0, 30, ED / 2 - Math.abs(z));
  const hin = 9.6 + 2.2 * Math.cos((Math.PI * x) / EW) * Math.cos((Math.PI * z) / ED);
  return 1.0 + (hin - 1.0) * ex * ez;
};
/** the toss: from beyond the right edge, falling under gravity, landing flat at `land`, a small bounce, a braked slide */
export const envAt = (T: PayTiming, f: number) => {
  const FL = 16, H0 = 110, DX = 560, SLD_ = 28;
  const t0 = T.land - FL;
  if (f <= t0) return { dx: DX + SLD_, h: H0, pitch: rad(-6), spin: rad(-14), visible: false };
  if (f < T.land) {
    const u = (f - t0) / FL;
    return { dx: SLD_ + DX * (1 - u), h: H0 * (1 - u * u), pitch: rad(-6) * (1 - u), spin: rad(-14) * (1 - u) + rad(-3) * u, visible: true };
  }
  const t = f - T.land;
  const bounce = t < 5 ? 1.6 * Math.sin((Math.PI * t) / 5) : 0;
  const slide = t < 10 ? SLD_ * (1 - t / 10) ** 2 : 0;
  return { dx: slide, h: bounce, pitch: 0, spin: rad(-3) * (1 - ss(0, 10, t)), visible: true };
};

// ══ ANCHORS (world, at rest) ══
const calW = (lx: number, ly: number, lz: number) => {
  const a = rad(PG.cal.yaw), c = Math.cos(a), s = Math.sin(a);
  return { x: PG.cal.x + lx * c + lz * s, y: -PG.floor + ly, z: PG.cal.z - lx * s + lz * c };
};
const envW = (lx: number, ly: number, lz: number) => {
  const a = rad(PG.env.yaw), c = Math.cos(a), s = Math.sin(a);
  return { x: PG.env.x + lx * c + lz * s, y: -PG.floor + ly, z: PG.env.z - lx * s + lz * c };
};
/** a point on the front stack's top sheet, s px down from its top edge */
const frontPt = (x: number, s: number, out: number) => ({ y: RH - (2 + s) * Math.cos(PHI) + out * Math.sin(PHI), z: (2 + s) * Math.sin(PHI) + out * Math.cos(PHI), x });
export const anchors = () => {
  const L = (p: { x: number; y: number; z: number }) => ({ x: p.x, y: -p.y, z: p.z });   // world → layer y
  const day = frontPt(0, 105, PADF * PITCH + 0.3);
  return {
    day: L(calW(day.x, day.y, day.z)),
    calTop: L(calW(0, RH + 20, 0)),
    tmo: L(envW(-110, 10, -110)),
    envMid: L(envW(0, 10, 0)),
    envFar: L(envW(-EW / 2, 1.2, -ED / 2)),
    final: L(envW(97, 10, 84)),
    figure: L(envW(EW / 2 - 10 - SLW + SLIDE + 193, 1, 0)),
  };
};
/** the highest points that can show (world): the binding's crown at both ends, and a flying sheet's far corners at f */
export const calTops = (T: PayTiming, f: number): [number, number, number][] => {
  const out: [number, number, number][] = [];
  for (const lx of [-CW / 2, CW / 2]) { const p = calW(lx, RH + 1 + 19.5, 0); out.push([p.x, p.y, p.z]); }
  for (let k = 0; k < N; k++) {
    const e = flipAt(T, k, f);
    if (e <= 0 || e >= 1) continue;
    const th = pageRot(e), zz = pageZ(k, e);
    for (const lx of [-SW / 2, SW / 2]) {
      // the far corner: pivot-local (lx, TOPY_P − SL, zz) rotated about x by th, then into the calendar's frame
      const yl = TOPY_P - SL;
      const y = C.y + yl * Math.cos(th) - zz * Math.sin(th), z = C.z + yl * Math.sin(th) + zz * Math.cos(th);
      const p = calW(lx, y, z); out.push([p.x, p.y, p.z]);
    }
  }
  return out;
};
export const envTop = (T: PayTiming, f: number): [number, number, number][] => {
  const e = envAt(T, f);
  const lift = (lx: number) => e.h + Math.max(0, -Math.sin(e.pitch) * lx) + Math.abs(Math.sin(e.pitch)) * 2;
  return ([[-EW / 2, -ED / 2, 1.2], [EW / 2, -ED / 2, 1.2], [0, -ED / 2 + 30, 10], [0, 0, 12]] as const).map(([lx, lz, hy]) => {
    const p = envW(lx + e.dx, lift(lx) + hy, lz); return [p.x, p.y, p.z] as [number, number, number];
  });
};

// ══ PRINT ══
const INK = "#24221F";
const pageTex = (mon: string, year: number) => paintTex(`py-page-${mon}-${year}`, SW, SL, (g) => {
  g.fillStyle = "#F6F3EC"; g.fillRect(0, 0, SW, SL);
  for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${hash(i, 1, 2) > 0.55 ? "120,110,95" : "255,255,250"},${0.04 + 0.05 * hash(i, 2, 2)})`; g.fillRect(hash(i, 3, 2) * SW, hash(i, 4, 2) * SL, 0.4 + hash(i, 5, 2) * 1.8, 0.2); }
  // the punched holes the binding runs through
  g.fillStyle = "#3A3A3C";
  for (let i = 0; i < 19; i++) { const x = SW / 2 - 135 + i * 15; g.beginPath(); g.roundRect(x - 2.4, 5, 4.8, 6.5, 1); g.fill(); }
  g.fillStyle = INK; g.textBaseline = "alphabetic";
  g.textAlign = "left"; track(g, 3); font(g, 800, 25); g.fillText(mon, 18, 46); track(g, 0);
  g.textAlign = "right"; track(g, 1.5); font(g, 700, 21); g.fillText(String(year), SW - 18, 46); track(g, 0);
  g.fillRect(18, 55, SW - 36, 1.1);
  g.textAlign = "center"; fitFont(g, 800, 112, "9", 200); g.fillText("9", SW / 2, 158);
  typeLines(g, SW / 2 - 30, 168, 60, 1, 10, 3.6, 0.35, 2);
}, 3);
const pageBack = () => paintTex("py-page-back", SW, SL, (g) => {
  g.fillStyle = "#ECE8DF"; g.fillRect(0, 0, SW, SL);
  for (let i = 0; i < 1600; i++) { g.fillStyle = `rgba(120,110,95,${0.03 + 0.04 * hash(i, 2, 8)})`; g.fillRect(hash(i, 3, 8) * SW, hash(i, 4, 8) * SL, 0.4 + hash(i, 5, 8) * 1.8, 0.2); }
  g.fillStyle = "#3A3A3C";
  for (let i = 0; i < 19; i++) { const x = SW / 2 - 135 + i * 15; g.beginPath(); g.roundRect(x - 2.4, 5, 4.8, 6.5, 1); g.fill(); }
}, 2);
const envTex = () => paintTex("py-env-front", EW, ED, (g) => {
  g.fillStyle = "#D8BA82"; g.fillRect(0, 0, EW, ED);
  for (let i = 0; i < 80; i++) { g.fillStyle = `rgba(${hash(i, 1, 4) > 0.5 ? "140,105,55" : "245,225,180"},${0.04 + 0.05 * hash(i, 2, 4)})`; g.beginPath(); g.ellipse(hash(i, 3, 4) * EW, hash(i, 4, 4) * ED, 14 + 30 * hash(i, 5, 4), 8 + 18 * hash(i, 6, 4), hash(i, 7, 4) * 3, 0, Math.PI * 2); g.fill(); }
  for (let i = 0; i < 9000; i++) { g.fillStyle = `rgba(${hash(i, 1, 3) > 0.5 ? "120,85,40" : "250,232,190"},${0.06 + 0.09 * hash(i, 2, 3)})`; g.save(); g.translate(hash(i, 3, 3) * EW, hash(i, 4, 3) * ED); g.rotate(hash(i, 5, 3) * Math.PI); g.fillRect(0, 0, 0.6 + hash(i, 6, 3) * 3, 0.22); g.restore(); }
  g.fillStyle = INK; g.textBaseline = "alphabetic"; g.textAlign = "left";
  // the sender's corner: the real T-Mobile wordmark (P16, assets/brand) and two greeked address lines
  const wm = imageOf("assets/brand/tmobile_wordmark.png");
  if (wm.complete && wm.naturalWidth > 0) g.drawImage(wm, 24, 22, 180, 180 * (400 / 1946));
  typeLines(g, 27, 62, 140, 2, 10, 4, 0.4, 3);
  // the postage meter's strip (greeked)
  g.strokeStyle = "rgba(36,34,31,0.55)"; g.lineWidth = 0.8; g.strokeRect(EW - 118, 22, 92, 48);
  typeLines(g, EW - 110, 32, 76, 3, 11, 3.6, 0.35, 5);
  // the FINAL PAYMENT box
  g.strokeStyle = INK; g.lineWidth = 2.2; g.strokeRect(EW - 214, ED - 92, 182, 52);
  g.lineWidth = 0.8; g.strokeRect(EW - 209, ED - 87, 172, 42);
  g.textAlign = "center"; track(g, 1.6); fitFont(g, 800, 22, "FINAL PAYMENT", 150); g.fillText("FINAL PAYMENT", EW - 123, ED - 58); track(g, 0);
}, 3);
const slipTex = () => paintTex("py-slip", SLW, SLD, (g) => {
  g.fillStyle = "#DCE6D4"; g.fillRect(0, 0, SLW, SLD);
  // the security tint: fine interlaced waves
  g.strokeStyle = "rgba(90,130,100,0.18)"; g.lineWidth = 0.35;
  for (let k = 0; k < 40; k++) { g.beginPath(); for (let x = 0; x <= SLW; x += 3) { const y = k * 3.6 + 2.2 * Math.sin(x * 0.07 + k * 0.6); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); } g.stroke(); }
  typeLines(g, 14, 22, 70, 4, 11, 3.4, 0.4, 7);
  g.fillStyle = INK; g.fillRect(14, SLD - 30, 70, 0.7);
  typeLines(g, 14, SLD - 24, 50, 1, 10, 3, 0.35, 2);
  // the amount, in a ruled box on the end that leaves the envelope first
  g.strokeStyle = INK; g.lineWidth = 1.1; g.strokeRect(100, 36, 186, 66);
  g.fillStyle = INK; g.textAlign = "center"; g.textBaseline = "middle";
  fitFont(g, 800, 34, "$420,000,000", 170); g.fillText("$420,000,000", 193, 70);
}, 3);

/** a sheet lying on a surface y = fy(x, z) (front up): front, back and the edge band, reshaped as it moves (035's) */
const grid = (x0: number, x1: number, z0: number, z1: number, nx: number, nz: number) => {
  const n = (nx + 1) * (nz + 1);
  const pos = new Float32Array(n * 3), uv = new Float32Array(n * 2), xz = new Float32Array(n * 2);
  for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
    const k = j * (nx + 1) + i;
    xz[k * 2] = x0 + ((x1 - x0) * i) / nx; xz[k * 2 + 1] = z0 + ((z1 - z0) * j) / nz; uv[k * 2] = i / nx; uv[k * 2 + 1] = 1 - j / nz;
  }
  const idx: number[] = [];
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) { const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1; idx.push(a, c, b, b, c, d); }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3)); g.setAttribute("uv", new THREE.BufferAttribute(uv, 2)); g.setIndex(idx);
  const set = (fy: (x: number, z: number) => number, dy = 0, dx = 0) => {
    for (let k = 0; k < n; k++) { pos[k * 3] = xz[k * 2] + dx; pos[k * 3 + 1] = fy(xz[k * 2] + dx, xz[k * 2 + 1]) + dy; pos[k * 3 + 2] = xz[k * 2 + 1]; }
    g.attributes.position.needsUpdate = true; g.computeVertexNormals(); g.computeBoundingBox(); g.computeBoundingSphere();
  };
  return { g, set };
};
const sheetOn = (x0: number, x1: number, z0: number, z1: number, nx: number, nz: number, t: number, face: THREE.Material, back: THREE.Material, edge: THREE.Material) => {
  const F = grid(x0, x1, z0, z1, nx, nz), B = grid(x0, x1, z0, z1, nx, nz);
  const ring: [number, number][] = [];
  for (let i = 0; i <= nx; i++) ring.push([x0 + ((x1 - x0) * i) / nx, z0]);
  for (let j = 1; j <= nz; j++) ring.push([x1, z0 + ((z1 - z0) * j) / nz]);
  for (let i = nx - 1; i >= 0; i--) ring.push([x0 + ((x1 - x0) * i) / nx, z1]);
  for (let j = nz - 1; j >= 1; j--) ring.push([x0, z0 + ((z1 - z0) * j) / nz]);
  const eg = new THREE.BufferGeometry(); const ep = new Float32Array(ring.length * 18);
  eg.setAttribute("position", new THREE.BufferAttribute(ep, 3));
  const bm = back.clone(); bm.side = THREE.BackSide; const em = edge.clone(); em.side = THREE.DoubleSide;
  const grp = new THREE.Group(); grp.add(mesh(F.g, face), mesh(B.g, bm), mesh(eg, em));
  const reshape = (fy: (x: number, z: number) => number, dx = 0) => {
    F.set(fy, 0, dx); B.set(fy, -t, dx);
    for (let k = 0; k < ring.length; k++) {
      const [ax0, az] = ring[k], [bx0, bz] = ring[(k + 1) % ring.length];
      const ax = ax0 + dx, bx = bx0 + dx, ay = fy(ax, az), by = fy(bx, bz);
      const q = [ax, ay, az, bx, by, bz, bx, by - t, bz, ax, ay, az, bx, by - t, bz, ax, ay - t, az];
      for (let m = 0; m < 18; m++) ep[k * 18 + m] = q[m];
    }
    eg.attributes.position.needsUpdate = true; eg.computeVertexNormals(); eg.computeBoundingBox(); eg.computeBoundingSphere();
  };
  return { grp, reshape };
};

export type PaymentP = { f: number; slide: number; yaw: number };

export const paymentModel = (T: PayTiming) => (): Model<PaymentP> => {
  const root = new THREE.Group();
  const FY = -PG.floor;
  const turn = new THREE.Group(); turn.position.set(PG.pivot.x, 0, PG.pivot.z); root.add(turn);
  const W0 = new THREE.Group(); W0.position.set(-PG.pivot.x, 0, -PG.pivot.z); turn.add(W0);

  // ══ THE CALENDAR ══
  const cal = new THREE.Group(); cal.position.set(PG.cal.x, FY, PG.cal.z); cal.rotation.y = rad(PG.cal.yaw); W0.add(cal);
  const boardM = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#2E3034"), roughness: 0.55, metalness: 0, clearcoat: 0.3, clearcoatRoughness: 0.45, envMapIntensity: 0.6 });
  const Gf = new THREE.Group(); Gf.position.set(0, RH, 0); Gf.rotation.x = -PHI; cal.add(Gf);
  const Gb = new THREE.Group(); Gb.position.set(0, RH, 0); Gb.rotation.x = PHI; cal.add(Gb);
  // the boards: from under the ridge to the desk (the inner bottom corner on it)
  const sEnd = (RH - 3 * Math.sin(PHI) - 0.05) / Math.cos(PHI);
  {
    // ★ they start 11.5 px down the slope, where the two boards' inner faces are still apart (at 4 they crossed at the ridge)
    const s0 = 11.5, bl = sEnd - s0;
    const fb = rbox(CW + 8, bl, 3, 1, boardM); fb.position.set(0, -(s0 + bl / 2), 0); fb.userData.obj = "cal-front"; Gf.add(fb);
    const bb = rbox(CW + 8, bl, 3, 1, boardM); bb.position.set(0, -(s0 + bl / 2), 3); bb.userData.obj = "cal-back"; Gb.add(bb);
  }
  // the pads: the sheets that stay (front: OCT 2026 on top; back: the months before)
  const edgeM = M.paper("#E6E1D6"), backM = M.paper("#ECE8DF");
  const padF = new THREE.Group(); padF.userData.obj = "pad-front"; Gf.add(padF);
  for (let i = 0; i < PADF; i++) {
    const top = i === PADF - 1;
    const face = top ? M.print(pageTex("OCT", 2026), 0.88) : edgeM;
    const s = rbox(SW, SL, ST, 0.25, { px: edgeM, nx: edgeM, top: edgeM, bottom: edgeM, front: face, back: backM }, 2);
    s.position.set((hash(i, 1, 2) - 0.5) * 0.8, -(2 + SL / 2) - hash(i, 2, 2) * 0.6, 0.3 + i * PITCH + ST);
    padF.add(s);
  }
  const padB = new THREE.Group(); padB.userData.obj = "pad-back"; Gb.add(padB);
  for (let i = 0; i < PADB; i++) {
    const s = rbox(SW, SL, ST, 0.25, edgeM, 2);
    s.position.set((hash(i, 3, 2) - 0.5) * 0.8, -(2 + SL / 2) - hash(i, 4, 2) * 0.6, -(0.3 + i * PITCH));
    padB.add(s);
  }
  // the flipping sheets, each on its own pivot at the binding's axis
  const back = M.print(pageBack(), 0.9);
  const sheets = Array.from({ length: N }, (_, k) => {
    const { mon, year } = monthOf(k);
    const pv = new THREE.Group(); pv.position.set(0, C.y, C.z); cal.add(pv);
    const sh = paper({ w: SW, h: SL, t: ST, face: M.print(pageTex(mon, year), 0.88), back, edge: edgeM, seg: 24 });
    sh.userData.obj = `page-${k}`;
    pv.add(sh);
    return { pv, sh };
  });
  // the wire-o binding: 19 steel loops round the axis, through the boards' and the sheets' holes (its designed join)
  const bind = new THREE.Group(); bind.userData.obj = "binding";
  bind.userData.pierces = ["cal-front", "cal-back", "pad-front", "pad-back", ...Array.from({ length: N }, (_, k) => `page-${k}`)];
  cal.add(bind);
  {
    const steel = M.steel("#C4C9D0");
    const tg = new THREE.TorusGeometry(18, 1.25, 10, 48).rotateY(Math.PI / 2);
    for (let i = 0; i < 19; i++) { const r = mesh(tg, steel); r.position.set(-135 + i * 15, C.y, C.z); bind.add(r); }
  }

  // ══ THE ENVELOPE ══
  const envG = new THREE.Group(); W0.add(envG);
  const envBody = new THREE.Group(); envBody.userData.obj = "envelope"; envG.add(envBody);
  const manila = new THREE.MeshStandardMaterial({ color: new THREE.Color("#D3B47C"), roughness: 0.88, envMapIntensity: 0.35 });
  const manilaIn = new THREE.MeshStandardMaterial({ color: new THREE.Color("#C9AA72"), roughness: 0.9, envMapIntensity: 0.3 });
  {
    // the back panel and its open flap: one sheet of manila lying flat
    const s = new THREE.Shape();
    const x0 = -EW / 2, x1 = EW / 2, z0 = ED / 2;
    s.moveTo(x0 + 2, -z0); s.lineTo(x1, -z0);
    s.lineTo(x1 + FLAP - 10, -z0 + 58); s.quadraticCurveTo(x1 + FLAP, -z0 + 66, x1 + FLAP, -z0 + 80);
    s.lineTo(x1 + FLAP, z0 - 80); s.quadraticCurveTo(x1 + FLAP, z0 - 66, x1 + FLAP - 10, z0 - 58);
    s.lineTo(x1, z0); s.lineTo(x0 + 2, z0); s.quadraticCurveTo(x0, z0, x0, z0 - 2); s.lineTo(x0, -z0 + 2); s.quadraticCurveTo(x0, -z0, x0 + 2, -z0);
    const bp = mesh(slabOf(s, 0.6, 0.2, 8), [manila, manilaIn]);
    bp.rotation.x = -Math.PI / 2; bp.position.y = FLAP_TOP;
    envBody.add(bp);
    // the contents: a short stack of papers inside (its white edges show in the mouth)
    const ct = rbox(EW - 36, CT - 0.95, ED - 60, 0.8, M.paper("#EEEAE0"), 2);
    ct.position.set((-EW / 2 + 26 + EW / 2 - 10) / 2, 0.95 + (CT - 0.95) / 2, (ED - 60) / 2);
    envBody.add(ct);
    // the front panel: a padded pillow, printed
    const fp = sheetOn(-EW / 2, EW / 2, -ED / 2, ED / 2, 60, 40, 0.5, M.print(envTex(), 0.86), manilaIn, manila);
    fp.reshape(frontH);
    envBody.add(fp.grp);
  }
  const slip = sheetOn(0, SLW, -SLD / 2, SLD / 2, 90, 6, SLT, M.print(slipTex(), 0.85), M.paper("#D6E0CE"), M.paper("#D0DAC8"));
  slip.grp.userData.obj = "slip";
  envG.add(slip.grp);
  const slipX0 = EW / 2 - 10 - SLW;
  let slipNow = -1;
  const placeSlip = (s: number) => {
    const q = Math.round(s * 400) / 400;
    if (q === slipNow) return;
    slipNow = q;
    const dx = slipX0 + SLIDE * q;
    slip.reshape((X) => slipUnder(X) + SLT, dx);
  };

  root.add(makeFloor({ y: PG.floor, x0: -500, x1: 1900, z0: -800, z1: 800, reflect: 0.12, shadow: 0.55, fadeC: [720, 20], fadeR: [1000, 620] }));

  return {
    root,
    update: (p) => {
      turn.rotation.y = rad(p.yaw);
      sheets.forEach(({ pv, sh }, k) => {
        const e = flipAt(T, k, p.f);
        pv.rotation.x = pageRot(e);
        sh.position.set(0, TOPY_P - SL / 2, pageZ(k, e));
      });
      const e = envAt(T, p.f);
      envG.visible = e.visible;
      envG.position.set(PG.env.x + e.dx, FY + e.h, PG.env.z);
      envG.rotation.set(0, rad(PG.env.yaw) + e.spin, e.pitch, "YXZ");
      placeSlip(p.slide);
    },
  };
};
