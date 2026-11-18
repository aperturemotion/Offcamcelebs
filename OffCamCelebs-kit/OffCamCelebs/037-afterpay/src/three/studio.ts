// ═══════════════════════════════════════════════════════════════════════════
// STUDIO — the kit of THE PAYOUTS' black-studio look (preferences 2026-11-18, rules P1–P4; first film: 037).
//   P1  the world is a black studio: a glossy black floor that mirrors the object, a soft pool of light, deep vignette;
//   P2  objects are matte black and graphite, read by RIM LIGHT and by their satin edges (never by a lit front);
//   P3  colour is rationed: emissive only where it means something;
//   P4  figures live ON objects, as lit print in heavy wide capitals.
// ★ COLOUR ROLES: MINT = the headline number as reported, and nothing else; KHAKI = documented figures; RED = the fallen
//   price / the bad figure; AMBER = the hero's light and the "explain" card; WHITE = plain labels.
// ★ No "·" on anything a viewer reads: "|".
// Everything here is deterministic: no clocks, no random numbers.
// ═══════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, paintTex, rr, type RigOpts } from "./stage";
import { rbox, col, font, fitFont, track } from "./kit029";

export const C = { mint: "#7DF5C4", khaki: "#CDB974", red: "#E5484D", amber: "#F5A524", white: "#F2F2EE", gold: "#F2C230", dim: "#8D9096" } as const;

/** the look's materials */
export const SM = {
  /** the body of most things: near-black, satin, takes a long soft highlight */
  black: () => new THREE.MeshPhysicalMaterial({ color: col("#111113"), roughness: 0.46, metalness: 0.3, clearcoat: 0.4, clearcoatRoughness: 0.32, envMapIntensity: 1.5 }),
  /** a lighter body, for parts that must separate from black */
  graphite: () => new THREE.MeshPhysicalMaterial({ color: col("#26272B"), roughness: 0.42, metalness: 0.45, clearcoat: 0.3, clearcoatRoughness: 0.35, envMapIntensity: 1.4 }),
  /** a matte inset panel (a display's glass, a plaque's field) */
  panel: () => new THREE.MeshStandardMaterial({ color: col("#0A0A0B"), roughness: 0.85, metalness: 0, envMapIntensity: 0.4 }),
  /** satin metal for edges, rods, feet, cords' fittings: the bright line that draws a dark object */
  edge: () => new THREE.MeshPhysicalMaterial({ color: col("#C6CBD3"), roughness: 0.26, metalness: 1, envMapIntensity: 1.3 }),
  /** warm paper: certificates, receipts, pages, tags */
  paper: (hex = "#EDE6D6") => new THREE.MeshStandardMaterial({ color: col(hex), roughness: 0.9, metalness: 0, envMapIntensity: 0.5 }),
  /** a printed face (lit by the rig, as paper is) */
  print: (t: THREE.Texture) => new THREE.MeshStandardMaterial({ map: t, roughness: 0.88, metalness: 0, envMapIntensity: 0.5 }),
  /** money itself: gold that also glows a little */
  gold: () => new THREE.MeshStandardMaterial({ color: col("#C99A2E"), roughness: 0.3, metalness: 1, emissive: col(C.gold), emissiveIntensity: 0.3, envMapIntensity: 1.2 }),
  /** an unlit, glowing surface (a lamp, a lit strip) */
  glow: (hex: string = C.white, op = 1) => new THREE.MeshBasicMaterial({ color: col(hex), toneMapped: false, transparent: op < 1, opacity: op }),
  /** the bad figure's red, as a body colour */
  red: () => new THREE.MeshPhysicalMaterial({ color: col("#B3262B"), roughness: 0.5, metalness: 0.1, clearcoat: 0.3, envMapIntensity: 0.9 }),
};

/** the rig for rim-lit dark-on-dark objects: a low key from the upper left front, a strong cool rim from behind right, and
 *  enough fill that a black body never drops to nothing against the black ground */
export const STUDIO_RIG: RigOpts = { key: 0.75, fill: 3.2, rim: 4.5, dir: [-0.45, 0.8, 0.55] };

// ── lit print ────────────────────────────────────────────────────────────────────────────
export type TLine = { t: string; size: number; weight?: number; color?: string; track?: number; glow?: number; gap?: number };
export type FaceOpts = { bg?: string | null; border?: string | null; pad?: number; r?: number; align?: "centre" | "left" };
/** a texture of lit print: lines of heavy wide Archivo capitals, each fitted to the face's width, centred as a block.
 *  `glow` is the soft bloom round the letters (px); cached by key */
export const textTex = (key: string, w: number, h: number, lines: TLine[], o: FaceOpts = {}) =>
  paintTex(`studio:${key}`, w, h, (g) => {
    const pad = o.pad ?? Math.round(h * 0.12), r = o.r ?? 0;
    if (o.bg) { g.fillStyle = o.bg; rr(g, 0, 0, w, h, r); g.fill(); }
    if (o.border) { g.strokeStyle = o.border; g.lineWidth = 3; rr(g, 6, 6, w - 12, h - 12, Math.max(0, r - 4)); g.stroke(); }
    const sizes = lines.map((l) => { track(g, (l.track ?? 0.02) * l.size); return fitFont(g, l.weight ?? 800, l.size, l.t, w - 2 * pad); });
    const total = sizes.reduce((s, z, i) => s + z + (i ? lines[i].gap ?? z * 0.28 : 0), 0);
    let y = (h - total) / 2;
    g.textBaseline = "alphabetic";
    lines.forEach((l, i) => {
      const z = sizes[i];
      if (i) y += l.gap ?? z * 0.28;
      font(g, l.weight ?? 800, z);
      track(g, (l.track ?? 0.02) * z);
      g.textAlign = o.align === "left" ? "left" : "center";
      const x = o.align === "left" ? pad : w / 2;
      const c = l.color ?? C.white;
      g.fillStyle = c;
      if ((l.glow ?? 0) > 0) { g.shadowColor = c; g.shadowBlur = l.glow!; g.fillText(l.t, x, y + z * 0.86); g.fillText(l.t, x, y + z * 0.86); }
      g.shadowBlur = 0;
      g.fillText(l.t, x, y + z * 0.86);
      y += z;
    });
    track(g, 0);
  }, 3);

/** a flat, UNLIT face carrying lit print (it glows: the rig does not light it) */
export const litFace = (w: number, h: number, tex: THREE.Texture) => {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }));
  m.userData.lit = true;
  return m;
};
/** a lit PLAQUE: a graphite body with a satin rim, its front carrying lit print. Origin: its centre, front at z = 0 */
export const plaque = (key: string, w: number, h: number, lines: TLine[], o: FaceOpts & { depth?: number } = {}) => {
  const g = new THREE.Group();
  const d = o.depth ?? 26;
  const body = rbox(w + 18, h + 18, d, 7, SM.graphite());
  const rim = rbox(w + 26, h + 26, d - 8, 9, SM.edge());
  rim.position.z = -6;
  const face = litFace(w, h, textTex(key, w, h, lines, { bg: "#0B0B0C", r: 6, ...o }));
  face.position.z = 0.8;
  g.add(rim, body, face);
  g.userData.face = face;
  return g;
};

let haloN = 0;
/** a soft glow (additive), for the air round a lit thing: an ellipse w × h, facing the camera unless laid flat */
export const halo = (w: number, h: number, hex: string, op = 0.5, flat = false) => {
  const tex = paintTex(`studio:halo:${hex}`, 128, 128, (g) => {
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, hex); gr.addColorStop(0.35, hex + "88"); gr.addColorStop(1, hex + "00");
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  }, 1);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: op, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
  if (flat) m.rotation.x = -Math.PI / 2;
  m.userData.noBounds = true;
  m.userData.isFloor = true;   // never mirrored, never a shadow caster's bound
  m.renderOrder = 3 + (haloN++ % 5) * 0.01;
  m.castShadow = false; m.receiveShadow = false;
  return m;
};

/** the studio FLOOR: glossy black, a strong reflection fading out round the object (layer y of the floor; centre x / z) */
export const studioFloor = (o: { y: number; cx: number; cz?: number; rx?: number; rz?: number; reflect?: number }) =>
  makeFloor({
    y: o.y, x0: o.cx - (o.rx ?? 900) - 600, x1: o.cx + (o.rx ?? 900) + 600, z0: (o.cz ?? 0) - 1400, z1: (o.cz ?? 0) + 1200,
    reflect: o.reflect ?? 0.42, shadow: 0.6, fadeC: [o.cx, o.cz ?? 0], fadeR: [(o.rx ?? 900) * 1.15, o.rz ?? 760],
  });

/** money: "$29,000,000,000" */
export const dollars = (v: number) => "$" + Math.round(v).toLocaleString("en-US");

/** ★ THE SHARED-OBJECT CONTRACT (src/three/obj/*): `make(opts)` builds the object once and returns its group and an
 *  `update(p)` taking this frame's parameters. Each module says where its group's origin is. Signatures are stable: a place
 *  may polish an object's build, never its opts or params. */
export type Obj3<P> = { group: THREE.Group; update: (p: P) => void };
