// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE VERDICT IN 3-D (039) — "So, $365 million? Our rating: inflated. Send us who to audit next." On the cream ground, the
// channel's verdict object for an INFLATED figure, built as real things (round 2, 2026-11-23: "more realistic"):
//   · a big LATEX BALLOON blown up taut: deep green latex, thinner and lighter round its stretched waist, thicker and darker
//     at the neck; a soft clearcoat highlight; light coming through the thin latex at its silhouette (a rim of brighter green);
//     a twisted neck, a rolled lip and the tied knot's lump; "$365M" printed in cream ink round its front, mapped on the latex
//     so it stretches and wraps with the surface (the ink a little speckled where the latex stretched it thin);
//   · its STRING: a white curling ribbon, flat and twisting along its length, wrapped twice round the neck and tied into
//   · a brass eye screwed into the top of a walnut display PLINTH (grain on every face, cathedral figure on the top, pores,
//     rounded edges, a satin lacquer; a recessed black kick at its foot);
//   · a brass PIANO HINGE along the plinth's top front edge carrying the FLIP PLATE: a walnut board with an ENAMEL SIGN
//     screwed to its face (vitreous cream enamel on steel, a rolled bevelled edge, four domed brass screws, a small chip at a
//     corner): INFLATED in amber (#c98a2b) with a double rule. It stands upright on the hinge, its plain walnut back to the
//     camera; on "inflated" it tips forward, swings down under gravity and lands against the plinth's front with weight.
// The balloon sways about its tie on the string (a breeze, the place's arrival, the plate's knock); its string stays taut.
// Units are the layer's px; `sc` is the plinth's floor point, y UP.
// ★ The rating is of the $365M FIGURE as his pay, never of him.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, slabOf, roundRect, type Model } from "../stage";
import { hash, col, rbox, fitFont, track } from "../kit029";

// ══ THE GEOMETRY (exported: the place's camera and checks are solved on it) ══
/** the plinth: a recessed kick, then the walnut body; its top at TOP */
export const PL = { w: 800, d: 300, kick: 14, kickIn: -8, top: 200 } as const;
/** the balloon: body height HB, its widest radius RB; the knot KN tall; the string LS long from the eye's tie */
export const BL = { HB: 384, RB: 172, KN: 22, LS: 140 } as const;
/** the brass eye on the plinth's top: its base disc, the ring's centre; the tie (the string's foot, inside the ring's tube) */
const EYE_BASE = 3, EYE_R = 8.5, EYE_T = 2.4;
export const TIE = PL.top + EYE_BASE + EYE_R + 1.2 + EYE_R - 2;
/** the flip plate: a walnut board w × h × t (its back BACK px behind the hinge axis), hung gapTop under the hinge axis; the
 *  enamel sign on its face (EW × EH, ET thick) */
export const PLATE = { w: 760, h: 170, t: 9, gapTop: 4.6, back: 2.5 } as const;
const EW = 726, EH = 136, ET = 2.4;
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
const PROF_N = 96;
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
/** the plate board's four front corners (plinth frame) at a flap angle */
export const plateCorners = (flap: number) => {
  const out: [number, number, number][] = [];
  const c = Math.cos(-flap), s = Math.sin(-flap);
  for (const x of [-PLATE.w / 2, PLATE.w / 2]) for (const y of [-PLATE.gapTop, -PLATE.gapTop - PLATE.h]) {
    const z = PLATE.t - PLATE.back;
    out.push([x, HA + y * c - z * s, HZ + y * s + z * c]);
  }
  return out;
};

// ══ PRINT ══
const CIRC = Math.round(2 * Math.PI * BL.RB), PH = 650;
/** the latex: deep green, thinner (lighter) round the stretched waist, thicker (darker) toward the neck and the crown, a
 *  faint mottle; the print in cream ink, speckled thin where the latex stretched it */
const balloonTex = () => paintTex("vd039-balloon2", CIRC, PH, (g) => {
  g.fillStyle = "#1E6747"; g.fillRect(0, 0, CIRC, PH);
  const v = g.createLinearGradient(0, 0, 0, PH);   // canvas top = the crown, foot = the neck
  v.addColorStop(0, "rgba(8,40,24,0.30)"); v.addColorStop(0.12, "rgba(8,40,24,0.05)"); v.addColorStop(0.42, "rgba(110,190,140,0.14)");
  v.addColorStop(0.62, "rgba(110,190,140,0.08)"); v.addColorStop(0.86, "rgba(6,30,18,0.2)"); v.addColorStop(1, "rgba(3,20,10,0.6)");
  g.fillStyle = v; g.fillRect(0, 0, CIRC, PH);
  for (let i = 0; i < 260; i++) {   // the mottle: soft uneven thickness
    const x = hash(i, 1, 21) * CIRC, y = hash(i, 2, 21) * PH, r = 10 + 40 * hash(i, 3, 21);
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    const a = 0.025 + 0.04 * hash(i, 4, 21), lite = hash(i, 5, 21) > 0.5;
    gr.addColorStop(0, lite ? `rgba(120,200,150,${a})` : `rgba(0,20,10,${a})`); gr.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = gr; g.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  // the print: one figure, cream ink round the front (u = 0.5), fitted to its width by measuring it, on its own layer so
  // the stretch speckle takes ink away (never paints green dots on top)
  const yc = (1 - Math.acos(1 - (2 * PRINT.y) / BL.HB) / Math.PI) * PH;
  const k = 2, ink = document.createElement("canvas");
  ink.width = CIRC * k; ink.height = PH * k;
  const q = ink.getContext("2d")!;
  q.setTransform(k, 0, 0, k, 0, 0);
  q.textAlign = "center"; q.textBaseline = "middle";
  track(q, 2);
  fitFont(q, 800, PRINT.size, "$365M", PRINT.w);
  q.fillStyle = "rgba(244,236,218,0.95)";
  q.fillText("$365M", CIRC / 2, yc + 6);
  q.globalCompositeOperation = "destination-out";
  for (let i = 0; i < 2600; i++) {
    const x = CIRC / 2 + (hash(i, 7, 3) - 0.5) * (PRINT.w + 40), y = yc + (hash(i, 8, 3) - 0.5) * PRINT.size * 0.9;
    q.fillStyle = `rgba(0,0,0,${0.25 + 0.6 * hash(i, 9, 3)})`;
    q.beginPath(); q.arc(x, y, 0.3 + 0.9 * hash(i, 10, 3), 0, Math.PI * 2); q.fill();
  }
  // the ink thins toward the print's ends, where the latex curves away and stretched it most
  const fade = q.createLinearGradient(CIRC / 2 - PRINT.w / 2, 0, CIRC / 2 + PRINT.w / 2, 0);
  fade.addColorStop(0, "rgba(0,0,0,0.22)"); fade.addColorStop(0.2, "rgba(0,0,0,0)"); fade.addColorStop(0.8, "rgba(0,0,0,0)"); fade.addColorStop(1, "rgba(0,0,0,0.22)");
  q.fillStyle = fade; q.fillRect(0, 0, CIRC, PH);
  g.drawImage(ink, 0, 0, CIRC, PH);
}, 2);

/** walnut: `straight` grain (the plinth's sides and front, the board's back) or `figure` (the top: cathedral arches), with
 *  colour bands, fine grain lines and open pores */
const walnutTex = (key: string, w: number, h: number, kind: "straight" | "figure" = "straight") => paintTex(key, w, h, (g) => {
  g.fillStyle = "#5B3A28"; g.fillRect(0, 0, w, h);
  // broad colour bands along the grain
  for (let i = 0; i < 40; i++) {
    const p = hash(i, 1, 31) * (kind === "straight" ? w : h), wd = 8 + 40 * hash(i, 2, 31);
    g.fillStyle = hash(i, 3, 31) > 0.5 ? `rgba(120,80,52,${0.08 + 0.12 * hash(i, 4, 31)})` : `rgba(30,16,8,${0.08 + 0.14 * hash(i, 4, 31)})`;
    if (kind === "straight") g.fillRect(p, 0, wd, h); else g.fillRect(0, p, w, wd);
  }
  // the grain lines
  for (let i = 0; i < 220; i++) {
    const p0 = hash(i, 3, 9) * (kind === "straight" ? w : h), a = 1 + 4 * hash(i, 4, 9), ph = hash(i, 5, 9) * 6.28;
    g.strokeStyle = hash(i, 6, 9) > 0.4 ? `rgba(36,20,10,${0.1 + 0.22 * hash(i, 7, 9)})` : `rgba(160,110,75,${0.06 + 0.1 * hash(i, 8, 9)})`;
    g.lineWidth = 0.35 + 1.1 * hash(i, 9, 9);
    g.beginPath();
    const L = kind === "straight" ? h : w;
    for (let s = 0; s <= L; s += 5) {
      const d = p0 + a * Math.sin(s / 38 + ph) + 0.6 * Math.sin(s / 9 + ph * 2);
      if (kind === "straight") { if (s === 0) g.moveTo(d, s); else g.lineTo(d, s); } else { if (s === 0) g.moveTo(s, d); else g.lineTo(s, d); }
    }
    g.stroke();
  }
  if (kind === "figure") {
    // cathedral arches: nested peaks of darker latewood across the board
    for (let n = 0; n < 3; n++) {
      const m = w * (0.22 + 0.3 * n + 0.08 * hash(n, 1, 5)), s = w * (0.07 + 0.04 * hash(n, 2, 5));
      for (let i = 0; i < 12; i++) {
        const base = h * (0.15 + 0.06 * i + 0.03 * hash(n, i, 6)), A = -(h * 0.18) * (1 - i / 14);
        g.strokeStyle = `rgba(34,18,9,${0.14 + 0.12 * hash(n, i, 7)})`; g.lineWidth = 0.8 + 1.4 * hash(n, i, 8);
        g.beginPath();
        for (let x = 0; x <= w; x += 6) { const y = base + A * Math.exp(-(((x - m) / (s * (1 + i * 0.12))) ** 2)); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); }
        g.stroke();
      }
    }
  }
  // the pores: short dark dashes along the grain
  for (let i = 0; i < Math.round((w * h) / 90); i++) {
    const x = hash(i, 11, 13) * w, y = hash(i, 12, 13) * h, l = 1.5 + 4 * hash(i, 13, 13);
    g.fillStyle = `rgba(20,10,5,${0.18 + 0.3 * hash(i, 14, 13)})`;
    if (kind === "straight") g.fillRect(x, y, 0.6, l); else g.fillRect(x, y, l, 0.6);
  }
}, 2);
const walnut = (key: string, w: number, h: number, kind: "straight" | "figure" = "straight") => {
  const t = walnutTex(key, w, h, kind);
  return new THREE.MeshPhysicalMaterial({ map: t, bumpMap: t, bumpScale: 0.9, roughness: 0.48, clearcoat: 0.45, clearcoatRoughness: 0.32, envMapIntensity: 0.55 });
};

/** the enamel sign's face: vitreous cream enamel, an amber double rule, INFLATED large in amber (fired a hair raised: a soft
 *  shadow under each letter), the steel showing as a dark halo round each screw hole, a small chip at the lower left corner */
const AMBER = "#C98A2B";
const SCREW_IN = 17;
const enamelTex = () => paintTex("vd039-enamel", EW, EH, (g) => {
  const W = EW, H = EH;
  const bg = g.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#F7F2E7"); bg.addColorStop(1, "#EEE6D5");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 900; i++) {   // the enamel's faint orange-peel and specks
    g.fillStyle = hash(i, 1, 41) > 0.5 ? "rgba(255,255,255,0.18)" : "rgba(120,100,70,0.07)";
    g.fillRect(hash(i, 2, 41) * W, hash(i, 3, 41) * H, 0.8 + 1.6 * hash(i, 4, 41), 0.8 + 1.6 * hash(i, 5, 41));
  }
  // the edge: thinner enamel over the rolled steel, a touch darker
  const e = 7;
  for (const [x, y, w, h, dir] of [[0, 0, W, e, "v"], [0, H - e, W, e, "v2"], [0, 0, e, H, "h"], [W - e, 0, e, H, "h2"]] as const) {
    const gr = dir === "v" ? g.createLinearGradient(0, 0, 0, e) : dir === "v2" ? g.createLinearGradient(0, H, 0, H - e)
      : dir === "h" ? g.createLinearGradient(0, 0, e, 0) : g.createLinearGradient(W, 0, W - e, 0);
    gr.addColorStop(0, "rgba(110,95,70,0.28)"); gr.addColorStop(1, "rgba(110,95,70,0)");
    g.fillStyle = gr; g.fillRect(x, y, w, h);
  }
  g.strokeStyle = AMBER; g.lineWidth = 3.4; g.strokeRect(12, 12, W - 24, H - 24);
  g.lineWidth = 1.3; g.strokeRect(19, 19, W - 38, H - 38);
  g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 7);
  const s = fitFont(g, 800, 150, "INFLATED", W - 70);
  const ty = H / 2 + s * 0.36;
  g.fillStyle = "rgba(90,55,10,0.28)"; g.fillText("INFLATED", W / 2 + 3.5 + 0.8, ty + 1.4);
  g.fillStyle = AMBER; g.fillText("INFLATED", W / 2 + 3.5, ty);
  g.fillStyle = "rgba(255,230,170,0.22)"; g.fillText("INFLATED", W / 2 + 3.5 - 0.4, ty - 0.7);
  g.fillStyle = AMBER; g.fillText("INFLATED", W / 2 + 3.5, ty + 0.15);
  track(g, 0);
  // the screw holes' halos (the steel round the hole)
  for (const sx of [SCREW_IN, W - SCREW_IN]) for (const sy of [SCREW_IN, H - SCREW_IN]) {
    const gr = g.createRadialGradient(sx, sy, 4, sx, sy, 8.5);
    gr.addColorStop(0, "rgba(40,40,46,0.9)"); gr.addColorStop(0.7, "rgba(60,58,60,0.45)"); gr.addColorStop(1, "rgba(60,58,60,0)");
    g.fillStyle = gr; g.beginPath(); g.arc(sx, sy, 8.5, 0, Math.PI * 2); g.fill();
  }
  // a small chip at the lower left corner: dark steel under a broken lip of enamel
  g.fillStyle = "#2E3036";
  g.beginPath(); g.moveTo(3, H - 15); g.lineTo(9, H - 13); g.lineTo(12, H - 8); g.lineTo(10, H - 3); g.lineTo(3, H - 2); g.closePath(); g.fill();
  g.strokeStyle = "rgba(255,255,255,0.5)"; g.lineWidth = 0.7;
  g.beginPath(); g.moveTo(3, H - 15.6); g.lineTo(9.4, H - 13.6); g.lineTo(12.6, H - 8); g.stroke();
}, 3);

/** ★ thin latex lets light through at its silhouette: a fresnel rim of brighter, more saturated green added after lighting */
const latexRim = (m: THREE.MeshPhysicalMaterial, hex: string, k: number) => {
  m.onBeforeCompile = (sh) => {
    sh.uniforms.rimColor = { value: col(hex) };
    sh.uniforms.rimK = { value: k };
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform vec3 rimColor;\nuniform float rimK;")
      .replace("#include <opaque_fragment>",
        "float rimF = pow( 1.0 - saturate( dot( normal, geometryViewDir ) ), 2.6 );\n" +
        "outgoingLight = outgoingLight * ( 1.0 - 0.35 * rimF * rimK ) + rimColor * rimF * rimK;\n#include <opaque_fragment>");
  };
  m.customProgramCacheKey = () => `latexRim-${hex}-${k}`;
  return m;
};

// ══ THE PLACE ══
export const verdictModel = (g: VerdictGeo) => (): Model<VerdictP> => {
  const root = new THREE.Group();
  const sc = new THREE.Group(); sc.position.set(g.cx, -g.floor, g.z); root.add(sc);
  const brass = new THREE.MeshPhysicalMaterial({ color: col("#C99A3E"), metalness: 1, roughness: 0.32, envMapIntensity: 1.0 });
  const brassWorn = new THREE.MeshPhysicalMaterial({ color: col("#B88B38"), metalness: 1, roughness: 0.42, envMapIntensity: 0.9 });

  // ── the plinth ──
  const plinth = new THREE.Group(); plinth.userData.obj = "plinth"; sc.add(plinth);
  const lacquer = new THREE.MeshPhysicalMaterial({ color: col("#17120F"), roughness: 0.34, clearcoat: 0.8, clearcoatRoughness: 0.22, envMapIntensity: 0.7 });
  const kick = rbox(PL.w + 2 * PL.kickIn, PL.kick, PL.d + 2 * PL.kickIn, 3, lacquer, 3);
  kick.position.set(0, 0.3 + PL.kick / 2, (PL.d + 2 * PL.kickIn) / 2); plinth.add(kick);
  const wFront = walnut("vd039-walnut-f2", PL.w, PL.top), wSide = walnut("vd039-walnut-s2", PL.d, PL.top), wTop = walnut("vd039-walnut-t2", PL.w, PL.d, "figure");
  const bodyH = PL.top - PL.kick - 0.3;
  const body = rbox(PL.w, bodyH, PL.d, 7, { px: wSide, nx: wSide, top: wTop, bottom: wTop, front: wFront, back: wFront }, 5);
  body.position.set(0, PL.kick + 0.3 + bodyH / 2 - 0.2, PL.d / 2); plinth.add(body);
  // the brass eye: a base plate screwed to the top (two slotted screws), its ring standing in the x-y plane
  const eyeBase = mesh(lathe([[0.01, 0], [13, 0], [13.5, 1.4], [12, EYE_BASE], [5, EYE_BASE + 1.4], [0.01, EYE_BASE + 1.4]], 40), brass);
  eyeBase.position.set(0, PL.top - 0.4, 0); plinth.add(eyeBase);
  const ring = mesh(new THREE.TorusGeometry(EYE_R, EYE_T, 16, 48), brass);
  ring.position.set(0, PL.top + EYE_BASE + EYE_R - 0.6, 0); plinth.add(ring);
  // the piano hinge: a barrel of knuckles along the top front edge (a hair apart), its leaf on the top with brass screws
  const BW = PLATE.w - 12, KN_N = 19, KL = BW / KN_N;
  for (let i = 0; i < KN_N; i++) {
    const k = mesh(new THREE.CylinderGeometry(HINGE_R, HINGE_R, KL - 0.7, 20).rotateZ(Math.PI / 2), i % 2 ? brass : brassWorn);
    k.position.set(-BW / 2 + KL * (i + 0.5), HA, HZ); plinth.add(k);
    if (i < KN_N - 1) {   // the pin between the knuckles
      const pin = mesh(new THREE.CylinderGeometry(1.1, 1.1, 1.6, 10).rotateZ(Math.PI / 2), brassWorn);
      pin.position.set(-BW / 2 + KL * (i + 1), HA, HZ); plinth.add(pin);
    }
  }
  const leaf = rbox(BW, 0.9, 12, 0.4, brass, 1);
  leaf.position.set(0, PL.top + 0.45 - 0.1, HZ + 1); plinth.add(leaf);
  const screwHead = (r: number) => lathe([[0.01, 0], [r, 0], [r * 1.02, r * 0.12], [r * 0.85, r * 0.34], [r * 0.5, r * 0.46], [0.01, r * 0.5]], 24);
  const slotM = new THREE.MeshStandardMaterial({ color: col("#3A2A12"), roughness: 0.6, metalness: 0.4 });
  for (let i = 0; i < 8; i++) {
    const x = -BW / 2 + 40 + (i * (BW - 80)) / 7;
    const sh = mesh(screwHead(2.6), brass); sh.position.set(x, PL.top + 0.7, HZ - 7); plinth.add(sh);
    const sl = mesh(new THREE.BoxGeometry(4, 0.5, 0.7), slotM); sl.position.set(x, PL.top + 0.7 + 1.2, HZ - 7); sl.rotation.y = hash(i, 1, 61) * Math.PI; plinth.add(sl);
  }

  // ── the flip plate (hinged about the barrel's axis; plate frame: hanging, its face toward +z) ──
  const flapG = new THREE.Group(); flapG.position.set(0, HA, HZ); sc.add(flapG);
  const plate = new THREE.Group(); plate.userData.obj = "plate"; flapG.add(plate);
  const bBack = walnut("vd039-walnut-pb2", PLATE.w, PLATE.h), bEdge = walnut("vd039-walnut-pe2", PLATE.w, 12);
  // the walnut board: its back PLATE.back behind the axis (1 px off the plinth's front when it hangs), its front ahead
  const board = rbox(PLATE.w, PLATE.h, PLATE.t, 3, { px: bEdge, nx: bEdge, top: bEdge, bottom: bEdge, front: bBack, back: bBack }, 3);
  const BOARD_FRONT = PLATE.t - PLATE.back;
  board.position.set(0, -PLATE.gapTop - PLATE.h / 2, BOARD_FRONT); plate.add(board);
  // the enamel sign: cream vitreous enamel over a rolled, bevelled steel edge, sitting on the board's face
  const eFace = new THREE.MeshPhysicalMaterial({ map: enamelTex(), roughness: 0.24, clearcoat: 1, clearcoatRoughness: 0.07, envMapIntensity: 0.7 });
  const eEdge = new THREE.MeshPhysicalMaterial({ color: col("#E6DCC6"), roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.1, envMapIntensity: 0.7 });
  const enamel = mesh(slabOf(roundRect(EW, EH, 9), ET, 0.9, 16), [eFace, eEdge]);
  const ECY = -PLATE.gapTop - PLATE.h / 2;
  enamel.position.set(0, ECY, BOARD_FRONT + ET - 0.05); plate.add(enamel);
  // four domed brass screws through the enamel's corner holes into the board
  const EFRONT = BOARD_FRONT + ET - 0.05;
  for (const [sx, sy] of [[-1, 1], [1, 1], [-1, -1], [1, -1]] as const) {
    const x = sx * (EW / 2 - SCREW_IN), y = ECY + sy * (EH / 2 - SCREW_IN);
    const s = mesh(screwHead(5.4).rotateX(Math.PI / 2), brass);
    s.position.set(x, y, EFRONT - 0.3); plate.add(s);
    const sl = mesh(new THREE.BoxGeometry(7.4, 1.1, 1.2), slotM);
    sl.position.set(x, y, EFRONT - 0.3 + 2.3); sl.rotation.z = hash(sx, sy, 71) * Math.PI; plate.add(sl);
  }

  // ── the balloon on its string (sway pivots on the tie inside the eye's ring) ──
  const swayG = new THREE.Group(); swayG.position.set(0, TIE, 0); sc.add(swayG);
  // the string: a flat white curling ribbon, twisting along its length, from inside the eye's ring to the neck's wraps
  const ribbonM = new THREE.MeshPhysicalMaterial({ color: col("#F4F0E6"), roughness: 0.38, sheen: 0.6, sheenRoughness: 0.4, sheenColor: col("#FFFFFF"),
    side: THREE.DoubleSide, envMapIntensity: 0.6 });
  const RL = BL.LS + 12;
  const rg = new THREE.PlaneGeometry(4.4, RL, 1, 90);
  rg.translate(0, RL / 2 - 3, 0);
  {
    const pos = rg.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), a = (y / RL) * Math.PI * 3 + 0.5;
      pos.setXYZ(i, x * Math.cos(a), y, x * Math.sin(a));
    }
    rg.computeVertexNormals();
  }
  const string = new THREE.Group(); string.userData.obj = "string";
  string.userData.pierces = ["plinth", "balloon"];   // tied into the eye's ring at its foot and round the knot at its head
  string.add(mesh(rg, ribbonM, true, false));
  swayG.add(string);
  const balloon = new THREE.Group(); balloon.userData.obj = "balloon"; balloon.position.y = BL.LS; swayG.add(balloon);
  // the neck and knot: thick dark latex — the rolled lip at its foot, the twisted neck, the tied knot's lump, the mouth
  const latexNeck = latexRim(new THREE.MeshPhysicalMaterial({ color: col("#164E35"), roughness: 0.4, clearcoat: 1, clearcoatRoughness: 0.2, envMapIntensity: 0.8 }), "#2E8A5C", 0.35);
  const neck = mesh(lathe([[0.01, 1], [5.5, 1.2], [6.6, 4], [6.2, 8], [5.6, 12], [6.4, 16], [7.8, 19], [9, BL.KN], [9.05, BL.KN + 1.5]], 40), latexNeck);
  balloon.add(neck);
  const lip = mesh(new THREE.TorusGeometry(6.4, 2.6, 14, 40).rotateX(Math.PI / 2), latexNeck); lip.position.y = 2.4; balloon.add(lip);
  const lump = mesh(new THREE.SphereGeometry(6.2, 24, 16), latexNeck); lump.scale.set(1.15, 0.85, 1); lump.position.set(1.5, 8.5, 0.6); balloon.add(lump);
  // the ribbon's two wraps round the neck, above the lump
  for (const [y, r] of [[12.6, 6.5], [15.2, 7.0]] as const) {
    const w = mesh(new THREE.TorusGeometry(r, 1.0, 8, 36).rotateX(Math.PI / 2 - 0.12), ribbonM); w.position.y = BL.LS + y; string.add(w);
  }
  // the body: the latex skin with its print (UVs wrap the print round the front so it stretches with the surface)
  const latex = latexRim(new THREE.MeshPhysicalMaterial({ map: balloonTex(), roughness: 0.36, clearcoat: 1, clearcoatRoughness: 0.2, envMapIntensity: 0.85,
    sheen: 0.45, sheenRoughness: 0.55, sheenColor: col("#7FC09A") }), "#3FA36E", 0.42);
  const bodyGeo = lathe(PROFILE, 160).rotateY(Math.PI);   // u = 0.5 (the print's middle) faces the camera
  const spinG = new THREE.Group(); spinG.position.y = BL.KN; balloon.add(spinG);
  spinG.add(mesh(bodyGeo, latex));

  // ── the floor: a shadow catcher and soft contact pools under the plinth ──
  root.add(makeFloor({ y: g.floor, x0: g.cx - 900, x1: g.cx + 900, z0: g.z - 640, z1: g.z + 560, reflect: 0, shadow: 0.42,
    fadeC: [g.cx, g.z], fadeR: [PL.w / 2 + 360, 460], blobs: [{ x: g.cx, z: g.z, w: PL.w + 120, d: PL.d + 110, a: 0.3 },
      { x: g.cx, z: g.z + PL.d / 2 + 6, w: PL.w + 20, d: 34, a: 0.32 }] }));

  return {
    root,
    update: (p) => {
      swayG.rotation.set(0, 0, p.sway);
      spinG.rotation.y = p.spin;
      flapG.rotation.x = -p.flap;
    },
  };
};
