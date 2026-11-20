// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE DEAL IN 3-D — "Proper Number 12. In 2021, Proximo Spirits took majority control in a deal reported to be worth up to
// six hundred million dollars. Up to."  On the cream ground, a bar's back corner (★ 2026-10-14, the user: "too many document
// visuals … Use objects that are relevant to the scene's context": no card, no sheet):
//   · the BOTTLE: a heavy-shouldered whiskey bottle in clear glass, the whisky in it, a cream wrap-round label in plain type
//     (PROPER Nº TWELVE, IRISH WHISKEY: never the brand's real logo), a neck band and a wooden stopper;
//   · on "Proximo Spirits took majority control" an oak CASK rolls in from beyond the right edge and comes to rest on its side,
//     its head stencilled PROXIMO SPIRITS (the buyer is a spirits house: a cask is its own object);
//   · behind them a NEON SIGN on a dark steel panel: as "worth up to six hundred million" is said, $600,000,000 flickers on in
//     amber tubes (gold: the money); on "Up to." the small "up to" above it, unlit until then, flickers on too.
// ★ "Reported": the deal's terms were confidential; the figure is the first report's (Shanken, 27 Apr 2021).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, greek, type Model } from "../stage";
import { M, rbox, printTex, font, track, rad, col, hash } from "../kit029";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import FONT from "three/examples/fonts/helvetiker_regular.typeface.json";

export type DealGeo = { floor: number; bottle: { cx: number; z: number; s: number }; barrel: { cx: number; z: number };
  sign: { cx: number; y0: number; y1: number; z: number }; deal: { brand: string; kind: string; buyer: string; figure: string; upTo: string } };
/** roll: the cask's arrival (0 → 1); lit: the figure's tubes (0 dark → 1 lit); up: the "up to" tubes; yaw */
export type DealP = { roll: number; lit: number; up: number; yaw: number };

const INK = "#1E1A16", NEON = "#FFB24A";
let font3: ReturnType<FontLoader["parse"]> | null = null;
const fontOf = () => (font3 ??= new FontLoader().parse(FONT as unknown as Parameters<FontLoader["parse"]>[0]));

/** neon: every contour of every glyph of `text` (size px, its box centred on (cx, cy) or left-aligned at cx) as a glass
 *  tube of radius r, and the same outlines drawn into a canvas for the tube's halo. Returns the tubes, the halo plane and
 *  the box. */
const neon = (text: string, size: number, r: number, at: { cx: number; cy: number; left?: boolean }, glass: THREE.Material, key: string) => {
  const shapes = fontOf().generateShapes(text, size);
  const contours: THREE.Vector2[][] = [];
  for (const sh of shapes) {
    contours.push(sh.getPoints(6));
    for (const h of sh.holes) contours.push(h.getPoints(6));
  }
  const all = contours.flat();
  const x0 = Math.min(...all.map((p) => p.x)), x1 = Math.max(...all.map((p) => p.x));
  const y0 = Math.min(...all.map((p) => p.y)), y1 = Math.max(...all.map((p) => p.y));
  const ox = at.left ? at.cx - x0 : at.cx - (x0 + x1) / 2, oy = at.cy - (y0 + y1) / 2;
  const grp = new THREE.Group();
  for (const c of contours) {
    const pts = c.map((p) => new THREE.Vector3(p.x + ox, p.y + oy, 0));
    // drop the closing duplicate, so the closed curve has no zero-length segment
    if (pts.length > 2 && pts[0].distanceTo(pts[pts.length - 1]) < 0.01) pts.pop();
    const curve = new THREE.CatmullRomCurve3(pts, true, "centripetal");
    grp.add(mesh(new THREE.TubeGeometry(curve, Math.max(24, pts.length * 3), r, 10, true), glass, false, false));
  }
  // the halo: the same outlines stroked wide and soft (a glow on the panel round the lit tubes)
  const W = Math.ceil(x1 - x0 + 120), H = Math.ceil(y1 - y0 + 120);
  const halo = printTex(`dl-halo:${key}`, W, H, (g) => {
    g.clearRect(0, 0, W, H);
    g.strokeStyle = NEON; g.lineJoin = "round"; g.lineCap = "round";
    for (const [lw, a, blur] of [[22, 0.22, 26], [9, 0.45, 10]] as const) {
      g.filter = `blur(${blur}px)`; g.globalAlpha = a; g.lineWidth = lw;
      for (const c of contours) {
        g.beginPath();
        c.forEach((p, i) => { const X = p.x - x0 + 60, Y = H - (p.y - y0 + 60); if (i) g.lineTo(X, Y); else g.moveTo(X, Y); });
        g.closePath(); g.stroke();
      }
    }
    g.filter = "none"; g.globalAlpha = 1;
  }, 1);
  const haloM = new THREE.MeshBasicMaterial({ map: halo, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
  const plane = mesh(new THREE.PlaneGeometry(W, H), haloM, false, false);
  plane.position.set(x0 + ox + (x1 - x0) / 2, y0 + oy + (y1 - y0) / 2, -r + 0.6);
  plane.renderOrder = 2;
  return { grp, plane, haloM, box: { x0: x0 + ox, x1: x1 + ox, y0: y0 + oy, y1: y1 + oy } };
};

export const dealModel = (g: DealGeo) => (): Model<DealP> => {
  const root = new THREE.Group();
  const FY = -g.floor;

  // ── the bottle ──
  const B = g.bottle;
  const bottleR = new THREE.Group();
  bottleR.position.set(B.cx, FY, B.z);
  bottleR.scale.setScalar(B.s);
  root.add(bottleR);
  const bottle = new THREE.Group();
  bottle.userData.obj = "bottle";
  bottleR.add(bottle);
  // the outer glass: a heavy base, straight body, broad round shoulders, a short neck and its lip
  const R = 128;
  const GLASS: [number, number][] = [[0.01, 0.4], [R - 22, 0.4], [R - 6, 4], [R, 18], [R, 372], [R - 6, 408], [R - 26, 444], [R - 58, 474], [44, 494],
    [36, 508], [35, 560], [40, 566], [40, 578], [36, 582]];
  const glass = new THREE.MeshPhysicalMaterial({ color: col("#E9E6DC"), roughness: 0.04, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.03,
    transparent: true, opacity: 0.16, envMapIntensity: 1.6, depthWrite: false });
  const shell = mesh(lathe(GLASS, 96), glass, false, false);
  shell.renderOrder = 3;
  bottle.add(shell);
  // the base's thick glass, seen through the bottom (a slightly darker disc), and the whisky
  const base = mesh(new THREE.CylinderGeometry(R - 8, R - 14, 14, 64), new THREE.MeshPhysicalMaterial({ color: col("#D9CFB8"), roughness: 0.1,
    transparent: true, opacity: 0.55, clearcoat: 1 }));
  base.position.y = 7.5;
  bottle.add(base);
  const WHISKY: [number, number][] = [[0.01, 15], [R - 9, 15], [R - 7, 20], [R - 7, 368], [R - 13, 404], [R - 33, 438], [R - 52, 452], [0.01, 452]];
  const whisky = mesh(lathe(WHISKY, 72), new THREE.MeshPhysicalMaterial({ color: col("#6A300C"), roughness: 0.12, metalness: 0, clearcoat: 1,
    clearcoatRoughness: 0.05, sheen: 0.5, sheenColor: col("#E0913C"), envMapIntensity: 1.25 }));
  bottle.add(whisky);
  // the whisky's surface: a flat disc in the shoulder
  const surf = mesh(new THREE.CircleGeometry(R - 52, 48), new THREE.MeshPhysicalMaterial({ color: col("#8A4614"), roughness: 0.08, clearcoat: 1 }));
  surf.rotation.x = -Math.PI / 2;
  surf.position.y = 452;
  bottle.add(surf);
  // the label: cream paper wrapped round the front of the body, in plain type (never the brand's logo)
  const LW = 2 * Math.PI * (R + 0.8) * (150 / 360), LH = 230;
  const labelTex = printTex(`dl-label:${g.deal.brand}`, Math.round(LW), LH, (c) => {
    const w = Math.round(LW);
    c.fillStyle = "#F2EADA"; c.fillRect(0, 0, w, LH);
    c.strokeStyle = "#1E3A2C"; c.lineWidth = 4; c.strokeRect(10, 10, w - 20, LH - 20);
    c.lineWidth = 1.2; c.strokeRect(17, 17, w - 34, LH - 34);
    c.fillStyle = INK; c.textAlign = "center"; c.textBaseline = "alphabetic";
    const [n1, ...rest] = g.deal.brand.split(" ");
    font(c, 800, 58); track(c, 6); c.fillText(n1, w / 2, 92); track(c, 0);
    font(c, 700, 30); track(c, 5); c.fillText(rest.join(" "), w / 2, 132); track(c, 0);
    c.fillStyle = "#1E3A2C"; c.fillRect(w / 2 - 60, 150, 120, 2);
    c.fillStyle = INK; font(c, 600, 20); track(c, 6); c.fillText(g.deal.kind, w / 2, 180); track(c, 0);
    greek(c, w / 2 - 70, 196, [60, 76], 6, 6, INK, 0.35);
  }, 3);
  const label = mesh(new THREE.LatheGeometry([new THREE.Vector2(R + 0.8, 120), new THREE.Vector2(R + 0.8, 120 + LH)], 48, -rad(75), rad(150)),
    new THREE.MeshStandardMaterial({ map: labelTex, roughness: 0.85, metalness: 0, envMapIntensity: 0.35, side: THREE.DoubleSide }));
  // LatheGeometry's u runs with phi from its start: turn it so the label's middle faces the viewer (+z)
  bottle.add(label);
  const band = mesh(new THREE.LatheGeometry([new THREE.Vector2(36.6, 512), new THREE.Vector2(36.6, 552)], 48), M.satin("#1E3A2C", 0.5));
  bottle.add(band);
  // the stopper: a turned walnut top over its cork
  const stopper = mesh(lathe([[0.01, 578], [32, 578], [44, 584], [46, 600], [44, 640], [36, 648], [0.01, 650]], 48), M.satin("#4A2C1C", 0.4));
  bottle.add(stopper);
  const cap = mesh(new THREE.CircleGeometry(36, 32), M.satin("#4A2C1C", 0.4));
  cap.rotation.x = -Math.PI / 2;
  cap.position.y = 650.2;
  bottle.add(cap);

  // ── the cask: oak staves bellied in the middle, four iron hoops, two heads; it lies on its side, its axis toward the eye ──
  const K = g.barrel, L = 250, RE = 104, RB = 120;   // its length, the radius at its heads and at its belly
  const rAt = (y: number) => RE + (RB - RE) * (1 - ((y - L / 2) / (L / 2)) ** 2);
  const caskR = new THREE.Group();   // its centre on the axis, at rest on its belly
  root.add(caskR);
  const cask = new THREE.Group();
  cask.userData.obj = "cask";
  caskR.add(cask);
  const staveTex = printTex("dl-staves", 512, 64, (c) => {
    // 26 staves round it: oak in two tones, a dark seam between each, the grain along each stave
    const n = 26, w = 512 / n;
    for (let i = 0; i < n; i++) {
      c.fillStyle = ["#9B6A3E", "#A9774A", "#946339"][i % 3]; c.fillRect(i * w, 0, w, 64);
      c.fillStyle = "rgba(70,40,20,0.18)";
      for (let k = 0; k < 4; k++) c.fillRect(i * w + 2 + hash(i, k, 1) * (w - 4), 0, 0.8, 64);
      c.fillStyle = "rgba(40,22,10,0.55)"; c.fillRect(i * w, 0, 1.2, 64);
    }
  }, 2);
  staveTex.wrapS = THREE.RepeatWrapping;
  const prof: [number, number][] = [];
  for (let k = 0; k <= 20; k++) { const y = (k / 20) * L; prof.push([rAt(y), y - L / 2]); }
  const body = mesh(lathe(prof, 96), new THREE.MeshStandardMaterial({ map: staveTex, roughness: 0.72, metalness: 0, envMapIntensity: 0.4 }));
  cask.add(body);
  const iron = M.satin("#2B2622", 0.45, 0.35);
  for (const yh of [16, 62, L - 62, L - 16]) {
    const hp: [number, number][] = [[rAt(yh - 7) + 0.6, yh - 7 - L / 2], [rAt(yh - 7) + 2.2, yh - 6 - L / 2], [rAt(yh + 7) + 2.2, yh + 6 - L / 2], [rAt(yh + 7) + 0.6, yh + 7 - L / 2]];
    cask.add(mesh(lathe(hp, 96), iron));
  }
  // the heads: oak boards across, set 7 px into the staves' chime; the front one stencilled
  const HR = rAt(L / 2 - 7) + 0.4;   // ★ the head fills the staves at its chime (smaller, it hung loose inside them: FLOAT)
  const headTex = (stencil: boolean) => printTex(`dl-head:${stencil ? g.deal.buyer : "back"}`, 2 * HR, 2 * HR, (c) => {
    const D = 2 * HR;
    for (let i = 0; i < 6; i++) { c.fillStyle = ["#A5713F", "#9A683A", "#AD7A47"][i % 3]; c.fillRect(0, (i * D) / 6, D, D / 6 + 1); }
    c.fillStyle = "rgba(50,28,12,0.5)"; for (let i = 1; i < 6; i++) c.fillRect(0, (i * D) / 6 - 0.6, D, 1.2);
    c.fillStyle = "rgba(70,40,20,0.14)"; for (let k = 0; k < 40; k++) c.fillRect(0, hash(k, 3, 3) * D, D, 0.7);
    if (stencil) {
      // stencil type: its bridges left in each letter, sprayed (the ink thins at its edges)
      const [w1, ...rest] = g.deal.buyer.split(" ");
      c.fillStyle = "rgba(24,18,14,0.86)"; c.textAlign = "center"; c.textBaseline = "middle";
      font(c, 800, 34); track(c, 3); c.fillText(w1, D / 2, D / 2 - 18); track(c, 0);
      font(c, 700, 20); track(c, 6); c.fillText(rest.join(" "), D / 2, D / 2 + 18); track(c, 0);
      c.fillStyle = "#A5713F"; c.fillRect(D / 2 - 90, D / 2 - 19, 180, 1.6);   // the stencil's bridge through the letters
    }
  }, 3);
  for (const s of [1, -1]) {
    const head = mesh(new THREE.CircleGeometry(HR, 64), new THREE.MeshStandardMaterial({ map: headTex(s > 0), roughness: 0.78, envMapIntensity: 0.4 }));
    head.position.y = s * (L / 2 - 7);
    head.rotation.x = -s * Math.PI / 2;
    cask.add(head);
  }
  cask.rotation.x = Math.PI / 2;   // the lathe's axis (y) → the eye's (z): the +y head faces the camera

  // ── the neon sign: a dark steel panel on two posts, the amber tubes mounted on its face ──
  const S = g.sign, PW = 640, PH = S.y1 - S.y0, PT = 14;
  const sign = new THREE.Group();
  sign.userData.obj = "neon sign";
  sign.position.set(S.cx, -(S.y0 + S.y1) / 2, S.z);
  root.add(sign);
  const steel = M.satin("#1D1C1B", 0.5, 0.4), frame = M.satin("#2E2C2A", 0.4, 0.6);
  const panel = rbox(PW, PH, PT, 4, { px: frame, nx: frame, top: frame, bottom: frame, front: steel, back: frame });
  sign.add(panel);
  const postH = g.floor - S.y1;
  for (const sx of [-1, 1]) {
    const post = rbox(18, postH + 40, 18, 3, frame);
    post.position.set(sx * (PW / 2 - 80), -PH / 2 - postH / 2 + 20, -PT - 0.5);
    sign.add(post);
    const foot = rbox(70, 10, 70, 3, frame);
    foot.position.set(sx * (PW / 2 - 80), -PH / 2 - postH + 5, -PT / 2 + 26);
    sign.add(foot);
  }
  const TR = 3.2;   // the tube's radius: it lies on the panel's face
  // ★ dark glass until lit: pale unlit tubes read as white letters on the black panel, and "up to" was readable early
  const glassOf = () => new THREE.MeshStandardMaterial({ color: col("#2E2B29"), emissive: col(NEON), emissiveIntensity: 0, roughness: 0.14, metalness: 0,
    envMapIntensity: 0.9 });
  const figGlass = glassOf(), upGlass = glassOf();
  const fig = neon(g.deal.figure, 74, TR, { cx: 0, cy: -PH * 0.14 }, figGlass, `fig:${g.deal.figure}`);
  const upto = neon(g.deal.upTo.toLowerCase(), 46, TR * 0.85, { cx: fig.box.x0, cy: PH * 0.26, left: true }, upGlass, `up:${g.deal.upTo}`);
  for (const n of [fig, upto]) {
    n.grp.position.z = TR + 0.4;
    n.plane.position.z += TR + 0.4;
    sign.add(n.grp, n.plane);
  }

  root.add(makeFloor({ y: g.floor, x0: B.cx - 520, x1: K.cx + 560, z0: -460, z1: 420, reflect: 0.08, shadow: 0.42,
    fadeC: [(B.cx + K.cx) / 2, -40], fadeR: [(K.cx - B.cx) / 2 + 460, 400],
    blobs: [{ x: B.cx, z: B.z, w: 300 * B.s, d: 300 * B.s, a: 0.25 }, { x: K.cx, z: K.z, w: 2 * RB, d: L, a: 0.3 },
      { x: S.cx, z: S.z - 10, w: PW - 100, d: 60, a: 0.15 }] }));

  return {
    root,
    update: (p) => {
      bottleR.rotation.y = rad(16 + p.yaw * 0.6);
      // the cask rolls in from beyond the right edge on its belly, turning as it rolls (no slip), and stops square
      const dx = 900 * (1 - p.roll);
      caskR.visible = p.roll > 0.001;
      caskR.position.set(K.cx + dx, FY + RB, K.z);
      caskR.rotation.set(0, rad(p.yaw * 0.4), -dx / RB);
      sign.rotation.y = rad(p.yaw * 0.3);
      // the tubes: glass when dark, amber light when lit; the halo with them
      figGlass.emissiveIntensity = 2.4 * p.lit; fig.haloM.opacity = 0.9 * p.lit;
      upGlass.emissiveIntensity = 2.4 * p.up; upto.haloM.opacity = 0.9 * p.up;
      const dim = (m: THREE.MeshStandardMaterial, q: number) => m.color.set(q > 0.02 ? "#FFE2B0" : "#2E2B29");
      dim(figGlass, p.lit); dim(upGlass, p.up);
    },
  };
};
