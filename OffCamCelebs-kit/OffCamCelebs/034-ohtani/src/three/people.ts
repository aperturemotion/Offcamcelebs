// ══════════════════════════════════════════════════════════════════════════════════════════════
// ★ 031 — PEOPLE AS REAL 3-D FIGURES (the user, 2026-10-13: "39 seconds … loads of people in back as the 'shareholders'
// angry"; "44 seconds use a real lawyer that stands behind the lawyer desk and writes that on the paper from the behind
// view"; "50 seconds get elon musk on the left and some blank character to sit and discuss this. Use a 3d model or some
// sort of model of musk sitting on a chair").
// A figure is built like every other object of the film: real solids in the one light, at real human proportions (fractions
// of its height H, from anthropometric tables), dressed in real materials:
//   · a suit jacket turned as a lathe (elliptical sections) with its V, shirt, tie, lapels, buttons and back seam PAINTED into
//     its own texture, so the print follows the cloth; trousers, a pelvis, shoes of polished leather;
//   · tapered limbs with rounded ends; hands with a palm, a block of fingers that curls and a thumb;
//   · a head shaped from an ellipsoid (a narrower jaw, a fuller skull), ears, a nose, and hair as a shell that meets the scalp
//     at its hairline (front, sides and nape at their own heights). No eyes and no mouth: a figure, never a likeness.
//   · `blank`: a MANNEQUIN in one smooth colour, its ball joints showing (an artist's lay figure).
// Joints are groups: FK through `pose`, and two-bone IK (`reach`, `stepTo`) puts a wrist or an ankle exactly on a target,
// the elbow or knee toward a pole. Each figure is ONE object for the audits (`userData.obj`): its parts overlap at the joints
// by design, and it rests on the floor (its soles) or on a seat (the sides of its thighs).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, mesh, lathe, paintTex } from "./stage";
import { rbox, col, hash } from "./kit029";

export type Look = {
  /** standing height, px */
  H: number;
  skin: string;
  hair?: string;
  hairStyle?: "short" | "side" | "crop" | "long" | "bun" | "bald";
  /** a suit jacket's cloth (none: in shirt sleeves) */
  jacket?: string;
  shirt: string;
  tie?: string;
  trousers: string;
  shoes: string;
  /** the trousers' cloth as a skirt to the knee */
  skirt?: boolean;
  /** girth (1 = average) */
  build?: number;
  /** a MANNEQUIN in this one colour: no clothes, no hair, its joints showing */
  blank?: string;
  seed?: number;
};
export type ArmFK = { up?: number; out?: number; twist?: number; el?: number; wr?: [number, number, number]; curl?: number; thumb?: number };
export type Pose = {
  /** the torso about the waist: forward lean, turn (yaw, + to the figure's left), side tilt */
  lean?: number; turn?: number; tilt?: number;
  /** the head on the neck: nod (+ down), turn (+ to its left), tilt */
  nod?: number; look?: number; cock?: number;
  L?: ArmFK; R?: ArmFK;
};
type Side = 1 | -1;   // L = +1 (the figure's left: +x when it faces +z), R = −1
export type Hand = { g: THREE.Group; fingers: THREE.Group; thumb: THREE.Group };
export type Arm = { side: Side; sh: THREE.Group; el: THREE.Group; wr: THREE.Group; hand: Hand; L1: number; L2: number };
export type Leg = { side: Side; hip: THREE.Group; kn: THREE.Group; an: THREE.Group; L1: number; L2: number };
export type Figure = {
  root: THREE.Group; pelvis: THREE.Group; torso: THREE.Group; neck: THREE.Group; head: THREE.Group;
  arm: { L: Arm; R: Arm }; leg: { L: Leg; R: Leg };
  H: number;
  /** heights (px above the floor, standing): the hip joints, the shoulders, the eyes */
  hipY: number; shY: number;
  pose: (p: Pose) => void;
  /** two-bone IK: the wrist (or ankle) onto a WORLD point, the elbow (knee) toward a WORLD direction */
  reach: (a: Arm, wrist: THREE.Vector3, pole: THREE.Vector3) => void;
  stepTo: (l: Leg, ankle: THREE.Vector3, pole: THREE.Vector3) => void;
  /** give a joint a WORLD orientation (a hand that must hold a pen at a set angle) */
  orient: (g: THREE.Group, q: THREE.Quaternion) => void;
  /** standing (legs straight, soles on the floor) or seated: the hip joints at `seat` + the thigh's radius, the thighs
   *  forward and the soles on the floor at `foot` (px forward of the hips, along the figure's +z) */
  stand: () => void;
  sit: (seat: number, foot: number, spread?: number) => void;
};

// ── proportions, as fractions of H (standing) ──
const FR = {
  ankle: 0.040, knee: 0.285, hip: 0.515, waist: 0.56, shoulder: 0.80, neck: 0.845, headC: 0.935,
  shW: 0.115, hipW: 0.056, upper: 0.172, fore: 0.155, thigh: 0.23, shin: 0.245,
};

/** a tapered capsule along −y: radius r0 at its top (y 0), r1 at its end (y −len), rounded at both ends */
export const capsule = (len: number, r0: number, r1: number, seg = 28) => {
  const pts: [number, number][] = [];
  const n = 8;
  for (let i = 0; i <= n; i++) { const a = -Math.PI / 2 + (i / n) * (Math.PI / 2); pts.push([r1 * Math.cos(a), -len + r1 * Math.sin(a)]); }
  for (let i = 1; i <= n; i++) { const a = (i / n) * (Math.PI / 2); pts.push([r0 * Math.cos(a), r0 * Math.sin(a)]); }
  return lathe(pts, seg);
};
/** an ellipsoid of half-sizes (a, b, c) */
export const ellipsoid = (a: number, b: number, c: number, ws = 36, hs = 24) => {
  const g = new THREE.SphereGeometry(1, ws, hs);
  g.scale(a, b, c);
  return g;
};

/** the head's surface for a unit direction: an ellipsoid with a narrower jaw and chin, and a fuller skull behind */
const headPt = (x: number, y: number, z: number) => {
  let sx = 1, sz = 1;
  if (y < 0) { const t = -y; sx = 1 - 0.24 * t * t; sz = 1 - 0.06 * t * t; }   // the jaw narrows to the chin
  if (z < 0 && y > -0.35) sz *= 1.07;                                          // the skull, fuller behind
  if (z > 0 && y > 0.1) sz *= 0.97;                                            // a flatter brow
  return [x * sx, y, z * sz] as const;
};
const headGeo = (w: number, h: number, d: number) => {
  const g = new THREE.SphereGeometry(1, 48, 36);
  const p = g.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < p.count; i++) {
    const [x, y, z] = headPt(p.getX(i), p.getY(i), p.getZ(i));
    p.setXYZ(i, x * w, y * h, z * d);
  }
  g.computeVertexNormals();
  return g;
};
/** HAIR: a shell over the head from its crown down to the hairline (normalised heights: front, sides, nape), as thick as
 *  `thick` (× the head) at the crown and meeting the scalp at its edge */
const hairGeo = (w: number, h: number, d: number, front: number, side: number, back: number, thick: number, crown = 0) => {
  const nu = 72, nv = 20;
  const pos: number[] = [], idx: number[] = [];
  for (let i = 0; i <= nu; i++) {
    const ph = (i / nu) * Math.PI * 2;
    const c = Math.cos(ph);
    const yl = c >= 0 ? side + (front - side) * c * c : side + (back - side) * c * c;
    const thMax = Math.acos(Math.max(-0.98, Math.min(0.98, yl)));
    for (let j = 0; j <= nv; j++) {
      const t = j / nv, th = t * thMax;
      const ux = Math.sin(th) * Math.sin(ph), uy = Math.cos(th), uz = Math.sin(th) * Math.cos(ph);
      const [x, y, z] = headPt(ux, uy, uz);
      // a little off the scalp even at its edge, and COMBED: shallow grooves running front to back
      const k = 1.012 + thick * (1 - t ** 3) + crown * Math.max(0, uy) ** 2 + 0.008 * (1 - t) * Math.sin(ph * 23) * Math.sin(ph * 7 + 1.3);
      pos.push(x * w * k, y * h * k, z * d * k);
    }
  }
  for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) {
    const a = i * (nv + 1) + j, b = (i + 1) * (nv + 1) + j;
    idx.push(a, a + 1, b, b, a + 1, b + 1);   // wound outward
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
};

// ── materials ──
const cloth = (hex: string, map?: THREE.Texture) =>
  new THREE.MeshStandardMaterial({ color: map ? col("#FFFFFF") : col(hex), map: map ?? null, roughness: 0.84, metalness: 0, envMapIntensity: 0.4 });
const skinMat = (hex: string) => new THREE.MeshPhysicalMaterial({ color: col(hex), roughness: 0.58, metalness: 0, sheen: 0.35, sheenRoughness: 0.6, sheenColor: col("#FFD9C8"), envMapIntensity: 0.45 });
// ★ the hair always wins the depth test against the scalp it lies on (at its hairline the two surfaces meet: they z-fought)
const hairMat = (hex: string) => new THREE.MeshPhysicalMaterial({ color: col(hex), roughness: 0.8, metalness: 0, sheen: 0.22, sheenRoughness: 0.85, sheenColor: col("#E8D8C8"), envMapIntensity: 0.35, side: THREE.DoubleSide,
  polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -6 });
const leather = (hex: string) => new THREE.MeshPhysicalMaterial({ color: col(hex), roughness: 0.3, metalness: 0, clearcoat: 0.7, clearcoatRoughness: 0.25, envMapIntensity: 0.7 });
const mannequin = (hex: string) => new THREE.MeshPhysicalMaterial({ color: col(hex), roughness: 0.42, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.4, envMapIntensity: 0.6 });

// ── the jacket's turned profile (y as a fraction of H, half-width as a fraction of H): its hem, waist, chest, shoulders, collar
const JACKET: [number, number][] = [[0.462, 0], [0.462, 0.097], [0.49, 0.1], [0.53, 0.098], [0.575, 0.095], [0.62, 0.099], [0.67, 0.107],
  [0.72, 0.115], [0.76, 0.12], [0.79, 0.122], [0.808, 0.118], [0.822, 0.104], [0.834, 0.082], [0.842, 0.058], [0.848, 0.036], [0.852, 0]];
const DEPTH = 0.62;   // the torso's depth ÷ its width

/** the suit's print, painted round the turned jacket (u: 0 = its front centre, 0.5 its back; v: up its profile) */
const jacketTex = (k: string, cloth: string, shirt: string, tie: string | undefined, jacket: boolean) => {
  const W = 512, Hh = 512;
  const vAt = (y: number) => {   // the texture's v (0 at the hem point, 1 at the collar) for a height on the profile
    for (let i = 1; i < JACKET.length; i++) if (y <= JACKET[i][0]) {
      const a = JACKET[i - 1], b = JACKET[i], t = (y - a[0]) / Math.max(1e-6, b[0] - a[0]);
      return (i - 1 + t) / (JACKET.length - 1);
    }
    return 1;
  };
  const Y = (y: number) => (1 - vAt(y)) * Hh;   // canvas y (its top is v 1)
  return paintTex(`fig-jacket:${k}`, W, Hh, (g) => {
    g.fillStyle = jacket ? cloth : shirt; g.fillRect(0, 0, W, Hh);
    const both = (draw: (x0: number) => void) => { draw(0); draw(W); };   // the front centre is at u 0 AND u 1 (the seam)
    if (jacket) {
      // the V of the shirt, from the collar to the top button, and the lapels' edges
      both((x0) => {
        g.fillStyle = shirt;
        g.beginPath(); g.moveTo(x0 - 0.1 * W, Y(0.852)); g.lineTo(x0 + 0.1 * W, Y(0.852)); g.lineTo(x0, Y(0.66)); g.closePath(); g.fill();
        if (tie) {
          g.fillStyle = tie;
          g.beginPath(); g.moveTo(x0 - 0.016 * W, Y(0.84)); g.lineTo(x0 + 0.016 * W, Y(0.84)); g.lineTo(x0 + 0.012 * W, Y(0.825));
          g.lineTo(x0 + 0.022 * W, Y(0.70)); g.lineTo(x0, Y(0.672)); g.lineTo(x0 - 0.022 * W, Y(0.70)); g.lineTo(x0 - 0.012 * W, Y(0.825)); g.closePath(); g.fill();
        }
        // the lapels: a darker fold beside each edge of the V, and its notch
        g.strokeStyle = "rgba(0,0,0,0.38)"; g.lineWidth = 3;
        for (const s of [-1, 1]) {
          g.beginPath(); g.moveTo(x0 + s * 0.1 * W, Y(0.852)); g.lineTo(x0, Y(0.66)); g.stroke();
          g.beginPath(); g.moveTo(x0 + s * 0.13 * W, Y(0.84)); g.lineTo(x0 + s * 0.035 * W, Y(0.66)); g.stroke();
          g.beginPath(); g.moveTo(x0 + s * 0.112 * W, Y(0.805)); g.lineTo(x0 + s * 0.15 * W, Y(0.795)); g.stroke();
        }
        // two buttons, the edge of the front below them
        g.fillStyle = "rgba(0,0,0,0.55)";
        for (const y of [0.635, 0.585]) { g.beginPath(); g.arc(x0 + 0.012 * W, Y(y), 4.5, 0, Math.PI * 2); g.fill(); }
        g.strokeStyle = "rgba(0,0,0,0.32)"; g.lineWidth = 2.5;
        g.beginPath(); g.moveTo(x0, Y(0.66)); g.lineTo(x0 - 0.006 * W, Y(0.53)); g.quadraticCurveTo(x0 - 0.02 * W, Y(0.47), x0 - 0.05 * W, Y(0.462)); g.stroke();
      });
      // the pocket flaps, the side seams, the back seam and its vent
      g.strokeStyle = "rgba(0,0,0,0.3)"; g.lineWidth = 2.5;
      for (const u of [0.15, 0.85]) { g.beginPath(); g.moveTo(u * W - 26, Y(0.545)); g.lineTo(u * W + 26, Y(0.545)); g.stroke(); }
      g.beginPath(); g.moveTo(0.5 * W, Y(0.84)); g.lineTo(0.5 * W, Y(0.462)); g.stroke();
      g.strokeStyle = "rgba(0,0,0,0.42)"; g.lineWidth = 3.5;
      g.beginPath(); g.moveTo(0.5 * W, Y(0.535)); g.lineTo(0.5 * W, Y(0.462)); g.stroke();
      g.strokeStyle = "rgba(0,0,0,0.16)"; g.lineWidth = 2;
      for (const u of [0.25, 0.75]) { g.beginPath(); g.moveTo(u * W, Y(0.79)); g.lineTo(u * W, Y(0.462)); g.stroke(); }
    } else {
      // shirt sleeves: the placket and its buttons, a tie if worn
      both((x0) => {
        g.strokeStyle = "rgba(0,0,0,0.18)"; g.lineWidth = 2;
        g.beginPath(); g.moveTo(x0 + 0.012 * W, Y(0.84)); g.lineTo(x0 + 0.012 * W, Y(0.462)); g.stroke();
        g.fillStyle = "rgba(0,0,0,0.3)";
        for (let y = 0.8; y > 0.5; y -= 0.06) { g.beginPath(); g.arc(x0, Y(y), 3, 0, Math.PI * 2); g.fill(); }
        if (tie) {
          g.fillStyle = tie;
          g.beginPath(); g.moveTo(x0 - 0.016 * W, Y(0.84)); g.lineTo(x0 + 0.016 * W, Y(0.84)); g.lineTo(x0 + 0.024 * W, Y(0.62));
          g.lineTo(x0, Y(0.59)); g.lineTo(x0 - 0.024 * W, Y(0.62)); g.closePath(); g.fill();
        }
      });
    }
  }, 1);
};

const hand = (H: number, m: THREE.Material, side: Side): Hand => {
  const g = new THREE.Group();   // at the wrist: the hand runs along −y, its palm faces +z, its thumb on the figure's outer side
  const pw = 0.044 * H, pl = 0.05 * H, pt = 0.02 * H;
  const palm = rbox(pw, pl, pt, pt * 0.48, m, 3);
  palm.position.set(0, -pl / 2 + 0.004 * H, pt / 2);
  g.add(palm);
  const fingers = new THREE.Group();
  fingers.position.set(0, -pl + 0.006 * H, 0.004 * H);
  g.add(fingers);
  const fl = 0.047 * H, ft = 0.016 * H;
  const fb = rbox(pw * 0.94, fl, ft, ft * 0.48, m, 3);
  fb.position.set(0, -fl / 2 + 0.004 * H, ft / 2 + 0.001 * H);
  fingers.add(fb);
  const thumb = new THREE.Group();
  thumb.position.set(side * pw * 0.4, -0.012 * H, 0.012 * H);
  thumb.rotation.set(-0.5, 0, side * 0.55);
  g.add(thumb);
  thumb.add(mesh(capsule(0.036 * H, 0.0105 * H, 0.0085 * H, 18), m));
  return { g, fingers, thumb };
};

export const figure = (look: Look, name: string): Figure => {
  const H = look.H, b = look.build ?? 1, blank = !!look.blank;
  const sk = blank ? mannequin(look.blank!) : skinMat(look.skin);
  const one = blank ? sk : null;
  const trouser = one ?? cloth(look.trousers);
  const sleeve = one ?? cloth(look.jacket ?? look.shirt);
  const shoe = one ?? leather(look.shoes);
  const root = new THREE.Group();
  root.userData.obj = name;

  // ── the pelvis: the hip joints' level; legs hang from it, the torso stands on it ──
  const pelvis = new THREE.Group();
  pelvis.position.y = FR.hip * H;
  root.add(pelvis);
  const pv = mesh(ellipsoid(0.098 * H * b, 0.062 * H, 0.068 * H * b), trouser);
  pv.position.set(0, -0.012 * H, -0.004 * H);
  pelvis.add(pv);

  const legs = {} as { L: Leg; R: Leg };
  for (const side of [1, -1] as Side[]) {
    const hip = new THREE.Group();
    hip.position.set(side * FR.hipW * H * b, 0, 0);
    hip.rotation.order = "XZY";
    pelvis.add(hip);
    const L1 = FR.thigh * H, L2 = FR.shin * H;
    if (look.skirt && !blank) {
      // a skirt: the thigh is the skirt's job (below), the leg below it is skin in tights
      hip.add(mesh(capsule(L1, 0.042 * H * b, 0.03 * H), sk));
    } else hip.add(mesh(capsule(L1, 0.047 * H * b, 0.035 * H * b), trouser));
    const kn = new THREE.Group();
    kn.position.y = -L1;
    hip.add(kn);
    kn.add(mesh(capsule(L2, 0.034 * H * b, 0.025 * H), look.skirt && !blank ? sk : trouser));
    if (blank) kn.add(mesh(ellipsoid(0.037 * H, 0.037 * H, 0.037 * H, 20, 14), sk));
    const an = new THREE.Group();
    an.position.y = -L2;
    kn.add(an);
    // the shoe: its sole on the floor when standing, its toe forward
    const sl = 0.15 * H, sw = 0.05 * H, shh = 0.04 * H;
    const s = rbox(sw, shh, sl, Math.min(shh * 0.45, sw * 0.45), shoe, 3);
    s.position.set(0, -FR.ankle * H + shh / 2 + 0.3, sl * 0.72);
    an.add(s);
    if (!blank) {
      const heel = rbox(sw * 0.96, 0.012 * H, sl * 0.3, 0.004 * H, leather("#16110F"), 2);
      heel.position.set(0, -FR.ankle * H + 0.006 * H + 0.3, sl * 0.72 - sl * 0.7);
      an.add(heel);
    }
    legs[side > 0 ? "L" : "R"] = { side, hip, kn, an, L1, L2 };
  }
  if (look.skirt && !blank) {
    const sm = cloth(look.trousers);
    sm.side = THREE.DoubleSide;
    const skirt = mesh(lathe([[0, 0.06 * H], [0.1 * H * b, 0.045 * H], [0.104 * H * b, 0], [0.11 * H * b, -0.1 * H], [0.118 * H * b, -0.2 * H]], 40), sm);
    skirt.scale.z = 0.72;
    pelvis.add(skirt);
  }

  // ── the torso: turned about the waist ──
  const torso = new THREE.Group();
  torso.position.y = (FR.waist - FR.hip) * H;
  torso.rotation.order = "YXZ";
  pelvis.add(torso);
  const wy = FR.waist;
  const prof: [number, number][] = JACKET.map(([y, r]) => [r * H * (y < 0.79 ? b : 1 + (b - 1) * 0.5), (y - wy) * H]);
  const jt = blank ? null : jacketTex(`${look.jacket ?? ""}|${look.shirt}|${look.tie ?? ""}`, look.jacket ?? look.shirt, look.shirt, look.tie, !!look.jacket);
  const jm = one ?? cloth(look.jacket ?? look.shirt, jt!);
  const body = mesh(lathe(prof, 64), jm);
  body.scale.z = DEPTH;
  torso.add(body);

  const neck = new THREE.Group();
  neck.position.set(0, (FR.neck - wy) * H, 0.004 * H);
  torso.add(neck);
  neck.add(mesh(lathe([[0.033 * H, -0.04 * H], [0.034 * H, 0], [0.031 * H, 0.04 * H], [0.027 * H, 0.07 * H]], 32), sk));
  if (!blank) {
    // the shirt's collar round the neck's foot
    const collar = mesh(lathe([[0.038 * H, -0.012 * H], [0.039 * H, 0.008 * H], [0.037 * H, 0.02 * H]], 40), cloth(look.shirt));
    collar.position.y = -0.004 * H;
    neck.add(collar);
  }
  const head = new THREE.Group();
  head.position.set(0, 0.05 * H, 0.004 * H);
  head.rotation.order = "YXZ";
  neck.add(head);
  const hw = 0.045 * H, hh = 0.064 * H, hd = 0.056 * H;
  const hc = new THREE.Group();   // the head's centre
  hc.position.set(0, (FR.headC - FR.neck - 0.05) * H, 0.006 * H);
  head.add(hc);
  hc.add(mesh(headGeo(hw, hh, hd), sk));
  // ears and nose
  for (const s of [-1, 1]) {
    const ear = mesh(ellipsoid(0.006 * H, 0.0145 * H, 0.0105 * H, 16, 12), sk);
    ear.position.set(s * hw * 0.93, -0.004 * H, -0.006 * H);
    ear.rotation.y = s * 0.25;
    hc.add(ear);
  }
  if (!blank) {
    const nose = mesh(ellipsoid(0.0085 * H, 0.017 * H, 0.012 * H, 16, 12), sk);
    nose.position.set(0, -0.012 * H, hd * 0.9);
    nose.rotation.x = -0.25;
    hc.add(nose);
    // a brow over the eyes: the face's one plane change (no eyes, no mouth)
    const brow = mesh(ellipsoid(0.034 * H, 0.008 * H, 0.012 * H, 24, 10), sk);
    brow.position.set(0, 0.012 * H, hd * 0.8);
    hc.add(brow);
  }
  const st = look.hairStyle ?? "short";
  if (!blank && look.hair && st !== "bald") {
    const hm = hairMat(look.hair);
    const P = {
      short: [0.46, 0.14, -0.58, 0.05, 0.03], side: [0.4, 0.12, -0.6, 0.065, 0.04], crop: [0.5, 0.18, -0.5, 0.035, 0.015],
      long: [0.42, -0.2, -0.75, 0.1, 0.05], bun: [0.44, 0.05, -0.62, 0.06, 0.03],
    }[st];
    hc.add(mesh(hairGeo(hw, hh, hd, P[0], P[1], P[2], P[3], P[4]), hm));
    if (st === "long") {
      const fall = mesh(ellipsoid(0.05 * H, 0.085 * H, 0.03 * H, 28, 18), hm);
      fall.position.set(0, -0.06 * H, -0.04 * H);
      hc.add(fall);
    }
    if (st === "bun") {
      const bun = mesh(ellipsoid(0.026 * H, 0.024 * H, 0.024 * H, 20, 14), hm);
      bun.position.set(0, 0.03 * H, -hd * 1.02);
      hc.add(bun);
    }
  }

  // ── the arms ──
  const arms = {} as { L: Arm; R: Arm };
  for (const side of [1, -1] as Side[]) {
    const sh = new THREE.Group();
    sh.position.set(side * FR.shW * H * (1 + (b - 1) * 0.5), (FR.shoulder - wy) * H, -0.004 * H);
    sh.rotation.order = "ZXY";
    torso.add(sh);
    const L1 = FR.upper * H, L2 = FR.fore * H;
    sh.add(mesh(capsule(L1, 0.033 * H * b, 0.028 * H * b), sleeve));
    if (blank) sh.add(mesh(ellipsoid(0.04 * H, 0.04 * H, 0.04 * H, 20, 14), sk));
    const el = new THREE.Group();
    el.position.y = -L1;
    el.rotation.order = "XYZ";
    sh.add(el);
    el.add(mesh(capsule(L2, 0.029 * H * b, 0.022 * H * b), sleeve));
    if (blank) el.add(mesh(ellipsoid(0.031 * H, 0.031 * H, 0.031 * H, 18, 12), sk));
    const wr = new THREE.Group();
    wr.position.y = -L2;
    wr.rotation.order = "XYZ";
    el.add(wr);
    if (!blank) {
      // the shirt's cuff, just showing below the sleeve
      const cuff = mesh(capsule(0.008 * H, 0.0192 * H, 0.0185 * H, 24), cloth(look.shirt));
      cuff.position.y = 0.012 * H;
      wr.add(cuff);
    }
    const hd2 = hand(H, sk, side);
    wr.add(hd2.g);
    arms[side > 0 ? "L" : "R"] = { side, sh, el, wr, hand: hd2, L1, L2 };
  }

  // ── FK ──
  const pose = (p: Pose) => {
    torso.rotation.set(p.lean ?? 0, p.turn ?? 0, p.tilt ?? 0);
    head.rotation.set(p.nod ?? 0, p.look ?? 0, p.cock ?? 0);
    for (const k of ["L", "R"] as const) {
      const a = arms[k], q = p[k];
      if (!q) continue;
      // up: the arm raised forward (π: straight up); out: away from the side; twist: about the arm; el: the elbow's bend
      a.sh.rotation.set(-(q.up ?? 0), a.side * (q.twist ?? 0), a.side * (q.out ?? 0.08));
      a.el.rotation.set(-(q.el ?? 0.1), 0, 0);
      const w = q.wr ?? [0, 0, 0];
      a.wr.rotation.set(w[0], a.side * w[1], a.side * w[2]);
      a.hand.fingers.rotation.x = -(q.curl ?? 0.25);
      a.hand.thumb.rotation.set(-0.5 - (q.thumb ?? 0), 0, a.side * 0.55);
    }
  };

  // ── IK ──
  const vS = new THREE.Vector3(), vE = new THREE.Vector3(), u = new THREE.Vector3(), v = new THREE.Vector3(), tmp = new THREE.Vector3();
  const qW = new THREE.Quaternion(), qP = new THREE.Quaternion(), mB = new THREE.Matrix4();
  const two = (A: THREE.Group, B: THREE.Group, L1: number, L2: number, target: THREE.Vector3, pole: THREE.Vector3) => {
    A.parent!.updateMatrixWorld(true);
    A.getWorldPosition(vS);
    u.copy(target).sub(vS);
    const dist = Math.min(L1 + L2 - 0.01, Math.max(Math.abs(L1 - L2) + 0.01, u.length()));
    u.normalize();
    const cosA = (L1 * L1 + dist * dist - L2 * L2) / (2 * L1 * dist), sinA = Math.sqrt(Math.max(0, 1 - cosA * cosA));
    v.copy(pole).addScaledVector(u, -pole.dot(u));
    if (v.lengthSq() < 1e-8) v.set(0, 0, 1).addScaledVector(u, -u.z);
    v.normalize();
    vE.copy(vS).addScaledVector(u, L1 * cosA).addScaledVector(v, L1 * sinA);
    const T = tmp.copy(vS).addScaledVector(u, dist);
    const a = new THREE.Vector3().subVectors(vE, vS).normalize();
    const bv = new THREE.Vector3().subVectors(T, vE);
    bv.addScaledVector(a, -bv.dot(a));
    if (bv.lengthSq() < 1e-8) bv.copy(v); else bv.normalize();
    const yv = a.clone().negate(), zv = bv, xv = new THREE.Vector3().crossVectors(yv, zv);
    mB.makeBasis(xv, yv, zv);
    qW.setFromRotationMatrix(mB);
    A.parent!.getWorldQuaternion(qP);
    A.quaternion.copy(qP.invert().multiply(qW));
    const cosB = (L1 * L1 + L2 * L2 - dist * dist) / (2 * L1 * L2);
    B.rotation.set(-(Math.PI - Math.acos(Math.max(-1, Math.min(1, cosB)))), 0, 0);
    A.updateMatrixWorld(true);
  };
  const orient = (g: THREE.Group, q: THREE.Quaternion) => {
    g.parent!.updateMatrixWorld(true);
    g.parent!.getWorldQuaternion(qP);
    g.quaternion.copy(qP.invert().multiply(q));
    g.updateMatrixWorld(true);
  };
  const stand = () => {
    pelvis.position.set(0, FR.hip * H, 0);
    pv.scale.y = 1;
    for (const k of ["L", "R"] as const) {
      const l = legs[k];
      l.hip.rotation.set(0, 0, 0); l.kn.rotation.set(0, 0, 0); l.an.rotation.set(0, 0, 0);
    }
  };
  const sit = (seat: number, foot: number, spread = 1) => {
    // the hips high enough that the jacket's hem and the (sitting-squashed) pelvis clear the seat
    pelvis.position.set(0, seat + 0.06 * H * Math.max(1, b) + 1, 0);
    pv.scale.y = 0.55;
    root.updateMatrixWorld(true);
    for (const k of ["L", "R"] as const) {
      const l = legs[k];
      const ank = new THREE.Vector3(l.side * FR.hipW * H * b * 1.35 * spread, FR.ankle * H, foot);
      root.localToWorld(ank);
      const pole = new THREE.Vector3(0, 0.2, 1).applyQuaternion(root.getWorldQuaternion(new THREE.Quaternion()));
      two(l.hip, l.kn, l.L1, l.L2, ank, pole);
      // the foot flat on the floor, pointing the way the figure faces
      l.an.rotation.set(0, 0, 0);
      l.an.updateMatrixWorld(true);
      orient(l.an, root.getWorldQuaternion(new THREE.Quaternion()));
    }
  };
  stand();
  pose({ L: {}, R: {} });
  return {
    root, pelvis, torso, neck, head, arm: arms, leg: legs, H, hipY: FR.hip * H, shY: FR.shoulder * H,
    pose, reach: (a, w, p) => two(a.sh, a.el, a.L1, a.L2, w, p), stepTo: (l, w, p) => two(l.hip, l.kn, l.L1, l.L2, w, p), orient, stand, sit,
  };
};

/** a crowd's member, varied by seed: height, build, clothes, hair (men and women, suits and shirt sleeves) */
export const lookOf = (seed: number, H0 = 620): Look => {
  const r = (k: number) => hash(seed, k, 7.3);
  const woman = r(1) < 0.42;
  const SKIN = ["#F1C9A5", "#E0AC84", "#C68B62", "#9C6644", "#6E4430", "#F4D3B8"];
  const HAIR = ["#2B1D16", "#3C2A1E", "#5A3D27", "#8A6A48", "#1A1514", "#B79A73", "#6B6B6B"];
  const SUIT = ["#2A3242", "#3A3D44", "#4A4E57", "#2F2A27", "#5B4A3A", "#3B4A5C", "#6F6A60"];
  const SHIRT = ["#F2F2EE", "#DCE6F2", "#EFE6DA", "#C9D8E8", "#E8D4D0"];
  const TIE = ["#7A2632", "#2E3F66", "#5A4A2A", "#3B5A3A"];
  const COAT = ["#8A6A4A", "#5E6E5A", "#7A3E3A", "#3F4E6B", "#9A8A70"];
  const pick = <T,>(a: T[], k: number) => a[Math.floor(r(k) * a.length) % a.length];
  const suit = r(2) < 0.6;
  return {
    H: H0 * (woman ? 0.93 : 1) * (0.95 + 0.1 * r(3)), build: 0.94 + 0.16 * r(4), seed,
    skin: pick(SKIN, 5), hair: pick(HAIR, 6),
    hairStyle: woman ? (r(7) < 0.6 ? "long" : "bun") : pick<NonNullable<Look["hairStyle"]>>(["short", "side", "crop", "short", "bald"], 8),
    jacket: suit ? pick(SUIT, 9) : r(10) < 0.5 ? pick(COAT, 11) : undefined,
    shirt: pick(SHIRT, 12), tie: !woman && suit && r(13) < 0.7 ? pick(TIE, 14) : undefined,
    trousers: woman && r(15) < 0.5 ? pick(SUIT, 16) : pick(SUIT, 17), shoes: r(18) < 0.5 ? "#1A1412" : "#3A2618",
    skirt: woman && r(19) < 0.5,
  };
};
