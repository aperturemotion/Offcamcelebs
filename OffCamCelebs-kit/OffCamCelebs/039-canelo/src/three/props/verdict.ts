// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE VERDICT IN 3-D (039) — "So, $365 million? Our rating: inflated. Send us who to audit next." On the cream ground, the
// channel's verdict object for an INFLATED figure:
//   · a big LATEX BALLOON, blown up taut and glossy (deep green latex, a darker neck where the latex is thicker, the rolled
//     knot), printed "$365M" in cream ink round its front; it floats on its taut white string, tied to a brass eye screwed
//     into the top of
//   · a walnut display PLINTH (a black kick plinth at its foot);
//   · on the plinth's top front edge, a brass piano hinge and a FLIP PLATE: an enamel plate standing upright on the hinge,
//     its plain walnut back to the camera; on "inflated" it tips forward, swings down under gravity and lands against the
//     plinth's front with weight: INFLATED in amber (#c98a2b) on cream enamel.
// The balloon sways about its tie on the string (a breeze, the place's arrival, the plate's knock); its string stays taut.
// Units are the layer's px; `sc` is the plinth's floor point, y UP.
// ★ The rating is of the $365M FIGURE as his pay, never of him.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, type Model } from "../stage";
import { M, rad, hash, col, rbox, fitFont, track } from "../kit029";

// ══ THE GEOMETRY (exported: the place's camera and checks are solved on it) ══
/** the plinth: a kick plinth, then the walnut body; its top at TOP */
export const PL = { w: 780, d: 300, kick: 14, kickIn: -8, top: 200 } as const;
/** the balloon: body height HB, its widest radius RB; the knot KN tall; the string LS long from the eye's tie */
export const BL = { HB: 400, RB: 178, KN: 22, LS: 140 } as const;
/** the brass eye on the plinth's top: its base disc, the ring's centre; the tie (the string's foot, inside the ring's tube) */
const EYE_BASE = 3, EYE_R = 8.5, EYE_T = 2.4;
export const TIE = PL.top + EYE_BASE + EYE_R + 1.2 + EYE_R - 2;
/** the flip plate: w × h × t, hung from the hinge axis (HA up, HZ out from the plinth's front) */
export const PLATE = { w: 740, h: 170, t: 5, gapTop: 4.6, back: 0.6 } as const;
const HINGE_R = 3.1;
/** the hinge axis, plinth frame: just over the top, just in front of the front face */
export const HA = PL.top + HINGE_R + 0.2, HZ = PL.d / 2 + HINGE_R + 0.4;

/** a balloon profile point at t ∈ [0, π] (0 the neck, π the crown): [radius, height above the neck] */
export const balloonAt = (t: number): [number, number] => {
  const y = (BL.HB / 2) * (1 - Math.cos(t));
  // a teardrop: narrower below its waist, widest a little above the middle; the neck flares out of a 9-px mouth
  let r = BL.RB * Math.sin(t) * (1 - 0.15 * Math.cos(t)) / 1.0105;
  r += 9 * Math.max(0, 1 - t / 0.55) ** 2;
  return [r, y];
};
const PROF_N = 72;
const PROFILE: [number, number][] = Array.from({ length: PROF_N + 1 }, (_, j) => balloonAt((j / PROF_N) * Math.PI));
/** where the print sits: its centre's height above the neck, and its width along the latex */
export const PRINT = { y: BL.HB * 0.54, w: 300, size: 170 } as const;

export type VerdictGeo = { floor: number; cx: number; z: number };
/** sway: the balloon's lean about its tie (rad, +: its crown to the LEFT); spin: its turn on its own axis (rad);
 *  flap: the plate's angle up from hanging (π standing upright, its back to the camera → 0 hanging, its face out) */
export type VerdictP = { sway: number; spin: number; flap: number };

/** the balloon's points in the PLINTH frame (y up) for a lean: the crown, a ring round its widest part and its upper body —
 *  the place's checks project these */
export const balloonHull = (sway: number) => {
  const out: [number, number, number][] = [];
  const c = Math.cos(sway), s = Math.sin(sway);
  const base = BL.LS + BL.KN;
  for (let j = Math.round(PROF_N * 0.3); j <= PROF_N; j += 3) {
    const [r, y] = PROFILE[j];
    for (let k = 0; k < 24; k++) {
      const a = (k / 24) * Math.PI * 2, x = r * Math.cos(a), z = r * Math.sin(a), yy = base + y;
      out.push([x * c - yy * s, TIE + x * s + yy * c, z]);
    }
  }
  return out;
};
/** the print's left and right ends on the latex (plinth frame), for the Reel's buttons check */
export const printEnds = (sway: number, spin: number) => {
  const c = Math.cos(sway), s = Math.sin(sway), base = BL.LS + BL.KN;
  const t = Math.acos(1 - (2 * PRINT.y) / BL.HB), r = balloonAt(t)[0];
  return [-1, 1].map((sg) => {
    const a = sg * (PRINT.w / 2) / r + spin;
    const x = r * Math.sin(a), z = r * Math.cos(a), yy = base + PRINT.y;
    return [x * c - yy * s, TIE + x * s + yy * c, z] as [number, number, number];
  });
};
/** the plate's four face corners (plinth frame) at a flap angle */
export const plateCorners = (flap: number) => {
  const out: [number, number, number][] = [];
  const c = Math.cos(-flap), s = Math.sin(-flap);
  for (const x of [-PLATE.w / 2, PLATE.w / 2]) for (const y of [-PLATE.gapTop, -PLATE.gapTop - PLATE.h]) {
    const z = PLATE.t / 2;
    out.push([x, HA + y * c - z * s, HZ + y * s + z * c]);
  }
  return out;
};

// ══ PRINT ══
const GREEN = "#1F6A49";
const CIRC = Math.round(2 * Math.PI * BL.RB), PH = 650;
const balloonTex = () => paintTex("vd039-balloon", CIRC, PH, (g) => {
  g.fillStyle = GREEN; g.fillRect(0, 0, CIRC, PH);
  // the latex: thicker and deeper toward the neck (the canvas foot is the neck), a little thinner and brighter at the crown
  const v = g.createLinearGradient(0, 0, 0, PH);
  v.addColorStop(0, "rgba(120,190,150,0.16)"); v.addColorStop(0.45, "rgba(0,0,0,0)"); v.addColorStop(0.86, "rgba(6,30,18,0.18)"); v.addColorStop(1, "rgba(4,22,12,0.55)");
  g.fillStyle = v; g.fillRect(0, 0, CIRC, PH);
  // the print: one figure, cream ink round the front (u = 0.5), fitted to its width by measuring it
  const yc = (1 - Math.acos(1 - (2 * PRINT.y) / BL.HB) / Math.PI) * PH;
  g.textAlign = "center"; g.textBaseline = "middle";
  track(g, 2);
  fitFont(g, 800, PRINT.size, "$365M", PRINT.w);
  g.fillStyle = "rgba(246,239,224,0.96)";
  g.fillText("$365M", CIRC / 2, yc + 6);
  track(g, 0);
}, 2);

/** the walnut: straight vertical grain on a warm brown, a few darker figure lines */
const walnutTex = (key: string, w: number, h: number) => paintTex(key, w, h, (g) => {
  const bg = g.createLinearGradient(0, 0, w, 0);
  bg.addColorStop(0, "#5C3B29"); bg.addColorStop(0.5, "#674331"); bg.addColorStop(1, "#553624");
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 150; i++) {
    const x0 = hash(i, 3, 9) * w, a = 1 + 4 * hash(i, 4, 9), p = hash(i, 5, 9) * 6.28;
    g.strokeStyle = hash(i, 6, 9) > 0.45 ? `rgba(40,22,12,${0.12 + 0.2 * hash(i, 7, 9)})` : `rgba(150,100,70,${0.08 + 0.1 * hash(i, 8, 9)})`;
    g.lineWidth = 0.4 + 1.3 * hash(i, 9, 9);
    g.beginPath();
    for (let y = 0; y <= h; y += 6) { const x = x0 + a * Math.sin(y / 40 + p); if (y === 0) g.moveTo(x, y); else g.lineTo(x, y); }
    g.stroke();
  }
}, 2);

/** the plate's enamel face: INFLATED large in amber, a fine amber double rule inside its edge */
const AMBER = "#C98A2B";
const plateTex = () => paintTex("vd039-plate", PLATE.w, PLATE.h, (g) => {
  const W = PLATE.w, H = PLATE.h;
  const bg = g.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#F6F1E6"); bg.addColorStop(1, "#ECE4D4");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  g.strokeStyle = AMBER; g.lineWidth = 3; g.strokeRect(10, 10, W - 20, H - 20);
  g.lineWidth = 1.2; g.strokeRect(16, 16, W - 32, H - 32);
  g.fillStyle = AMBER; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 6);
  const s = fitFont(g, 800, 150, "INFLATED", W - 74);
  g.fillText("INFLATED", W / 2 + 3, H / 2 + s * 0.36);
  track(g, 0);
}, 3);

// ══ THE PLACE ══
export const verdictModel = (g: VerdictGeo) => (): Model<VerdictP> => {
  const root = new THREE.Group();
  const sc = new THREE.Group(); sc.position.set(g.cx, -g.floor, g.z); root.add(sc);

  // ── the plinth ──
  const plinth = new THREE.Group(); plinth.userData.obj = "plinth"; sc.add(plinth);
  const lacquer = new THREE.MeshPhysicalMaterial({ color: col("#17120F"), roughness: 0.3, clearcoat: 0.8, clearcoatRoughness: 0.2, envMapIntensity: 0.7 });
  const kick = rbox(PL.w + 2 * PL.kickIn, PL.kick, PL.d + 2 * PL.kickIn, 3, lacquer, 3);
  kick.position.set(0, 0.3 + PL.kick / 2, (PL.d + 2 * PL.kickIn) / 2); plinth.add(kick);
  const wFront = new THREE.MeshPhysicalMaterial({ map: walnutTex("vd039-walnut-f", PL.w, PL.top), roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.35, envMapIntensity: 0.55 });
  const wSide = new THREE.MeshPhysicalMaterial({ map: walnutTex("vd039-walnut-s", PL.d, PL.top), roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.35, envMapIntensity: 0.55 });
  const wTop = new THREE.MeshPhysicalMaterial({ map: walnutTex("vd039-walnut-t", PL.w, PL.d), roughness: 0.45, clearcoat: 0.4, clearcoatRoughness: 0.3, envMapIntensity: 0.55 });
  const bodyH = PL.top - PL.kick - 0.3;
  const body = rbox(PL.w, bodyH, PL.d, 5, { px: wSide, nx: wSide, top: wTop, bottom: wTop, front: wFront, back: wFront }, 4);
  body.position.set(0, PL.kick + 0.3 + bodyH / 2 - 0.2, PL.d / 2); plinth.add(body);
  // the brass eye: a base disc screwed to the top, its ring standing in the x-y plane
  const brass = M.gold("#C99A3E");
  const eyeBase = mesh(lathe([[0.01, 0], [13, 0], [13.5, 1.4], [12, EYE_BASE], [5, EYE_BASE + 1.4], [0.01, EYE_BASE + 1.4]], 40), brass);
  eyeBase.position.set(0, PL.top - 0.4, 0); plinth.add(eyeBase);
  const ring = mesh(new THREE.TorusGeometry(EYE_R, EYE_T, 16, 48), brass);
  ring.position.set(0, PL.top + EYE_BASE + EYE_R - 0.6, 0); plinth.add(ring);
  // the hinge's barrel along the top front edge, its leaf screwed onto the top
  const barrel = mesh(new THREE.CylinderGeometry(HINGE_R, HINGE_R, PLATE.w - 12, 24).rotateZ(Math.PI / 2), brass);
  barrel.position.set(0, HA, HZ); plinth.add(barrel);
  const leaf = rbox(PLATE.w - 12, 0.9, 12, 0.4, brass, 1);
  leaf.position.set(0, PL.top + 0.45 - 0.1, HZ + 1); plinth.add(leaf);
  for (const sx of [-1, 1]) {
    const cap = mesh(new THREE.CylinderGeometry(HINGE_R + 0.5, HINGE_R + 0.5, 3, 24).rotateZ(Math.PI / 2), brass);
    cap.position.set(sx * ((PLATE.w - 12) / 2 + 1.5), HA, HZ); plinth.add(cap);
  }

  // ── the flip plate (hinged about the barrel's axis; plate frame: hanging, its face toward +z) ──
  const flapG = new THREE.Group(); flapG.position.set(0, HA, HZ); sc.add(flapG);
  const plate = new THREE.Group(); plate.userData.obj = "plate"; flapG.add(plate);
  const face = new THREE.MeshPhysicalMaterial({ map: plateTex(), roughness: 0.3, clearcoat: 0.7, clearcoatRoughness: 0.15, envMapIntensity: 0.6 });
  // its back and edges: walnut like the plinth, plain (a brass back read as a gold bar; a black one as a hole)
  const back = new THREE.MeshPhysicalMaterial({ map: walnutTex("vd039-walnut-pb", PLATE.w, PLATE.h), roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.35, envMapIntensity: 0.55 });
  const pl = rbox(PLATE.w, PLATE.h, PLATE.t, 1.6, { px: back, nx: back, top: back, bottom: back, front: face, back }, 2);
  // rbox: front at z 0, depth back → the plate's back sits PLATE.back off the plinth's front when it hangs
  pl.position.set(0, -PLATE.gapTop - PLATE.h / 2, PLATE.t / 2);
  plate.add(pl);

  // ── the balloon on its string (sway pivots on the tie inside the eye's ring) ──
  const swayG = new THREE.Group(); swayG.position.set(0, TIE, 0); sc.add(swayG);
  const string = mesh(new THREE.CylinderGeometry(1.15, 1.15, BL.LS + 6, 10).translate(0, (BL.LS + 6) / 2 - 3, 0), M.satin("#F5F1E8", 0.5), true, false);
  string.userData.obj = "string";
  string.userData.pierces = ["plinth", "balloon"];   // tied into the eye's ring at its foot and into the knot at its head
  swayG.add(string);
  const balloon = new THREE.Group(); balloon.userData.obj = "balloon"; balloon.position.y = BL.LS; swayG.add(balloon);
  const latexPlain = new THREE.MeshPhysicalMaterial({ color: col("#1A5C3F"), roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 0.85 });
  // the knot: the rolled lip at its foot, the twisted neck above it, flaring into the body's mouth
  const knot = mesh(lathe([[0.01, 0], [5, 0.4], [9.5, 2.5], [11.2, 6], [10.6, 9.5], [7.6, 12], [6.4, 15.5], [7.4, 19], [9, BL.KN], [9.05, BL.KN + 1.5]], 40), latexPlain);
  balloon.add(knot);
  const latex = new THREE.MeshPhysicalMaterial({ map: balloonTex(), roughness: 0.27, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 0.9,
    sheen: 0.4, sheenRoughness: 0.5, sheenColor: col("#6FB08C") });
  const bodyGeo = lathe(PROFILE, 128).rotateY(Math.PI);   // u = 0.5 (the print's middle) faces the camera
  const spinG = new THREE.Group(); spinG.position.y = BL.KN; balloon.add(spinG);
  spinG.add(mesh(bodyGeo, latex));

  // ── the floor: a shadow catcher and soft contact pools under the plinth ──
  root.add(makeFloor({ y: g.floor, x0: g.cx - 900, x1: g.cx + 900, z0: g.z - 640, z1: g.z + 560, reflect: 0, shadow: 0.42,
    fadeC: [g.cx, g.z + PL.d / 2], fadeR: [PL.w / 2 + 360, 460], blobs: [{ x: g.cx, z: g.z + PL.d / 2, w: PL.w + 120, d: PL.d + 110, a: 0.3 }] }));

  return {
    root,
    update: (p) => {
      swayG.rotation.set(0, 0, p.sway);
      spinG.rotation.y = p.spin;
      flapG.rotation.x = -p.flap;
    },
  };
};
