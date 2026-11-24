// ══════════════════════════════════════════════════════════════════════════════════════════════
// NOTHING ON RECORD IN 3-D (040) — "And Tiger? He has never confirmed any number. No contract. No document."
// Four quick beats on the cream ground, one real object each, every one sliding in from the right and leaving to the left:
//   · THE FRAMED PHOTO: a black lacquered desk frame (bevelled moulding, a champagne-gold slip, a cream mat with its white
//     bevel-cut window, his photo behind glass), leaning back on its easel strut. The hand-over brings it in ("And Tiger?").
//   · THE EMPTY QUOTE: a thick cream card standing in a walnut base slides in beside it, brakes and rocks on its base: the
//     quote marks hold only "$" and an empty rule, signed TIGER WOODS ("never confirmed any number").
//   · THE FOLDER: a manila legal folder (its tab, a typed CONTRACT label, CONTRACT stamped on the cover) glides in on its own
//     air as the photo and the card leave; on "contract" its cover swings open over its fold and lands: inside, nothing.
//   · THE TRAY: a walnut letter tray, a brass label holder on its front lip, DOCUMENTS; it slides in as the folder leaves,
//     brakes and rocks, and shows its empty floor ("No document.").
// Every surface has its thickness, bevels and real material; print is painted INTO the surfaces.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, imageOf, slabOf, roundRect, type Model } from "../stage";
import { M, rbox, rad, col, fitFont, track, hash, paper, font, fillBoldItalic } from "../kit029";
import { GLIDE, EXIT, SOFT, clamp01 } from "../../r45/tokens";

export const NONE_FLOOR = 1300;

// ══ THE OBJECTS' SIZES AND RESTING PLACES (layer px; z toward the viewer; heights above the floor) ══
/** the frame: outer w × h, moulding width and depth; its bottom BACK edge rests at (x, z) and it leans back `lean` deg */
export const FR = { w: 440, h: 520, mw: 34, t: 26, x: 300, z: -60, lean: 10, strutAt: 0.6, strutAng: 20 } as const;
/** the quote card in its base: the base block, the card (w × h × t), the depth of the card in its slot */
export const QB = { bw: 404, bh: 46, bd: 96, cw: 372, ch: 432, ct: 8, sink: 18, x: 750, z: -60 } as const;
/** the folder: w across, the back panel's depth FD with its tab (th deep), the cover's depth, panel thickness; the fold (hinge)
 *  runs along x at z = zh, the panels lie toward −z from it */
export const FO = { w: 680, d: 400, cd: 382, tab: 30, tabX0: 330, tabX1: 560, t: 1.6, x: 540, zh: -260 } as const;
/** the tray: outer w × d, walls (back height, front height), wood thickness, base thickness; centre (x, z) */
export const TR = { w: 640, d: 440, hb: 116, hf: 92, t: 15, base: 13, x: 540, z: -420 } as const;
/** the label holder on the tray's front lip (w × h), and its card */
export const LH = { w: 380, h: 68, rim: 6 } as const;

export type NoneTiming = {
  /** the frame and the card leave (start, end) */
  aOut: readonly [number, number]; bIn: readonly [number, number]; bOut: readonly [number, number];
  /** the folder slides in, its cover opens, it leaves */
  cIn: readonly [number, number]; cOpen: readonly [number, number]; cOut: readonly [number, number];
  /** the tray slides in */
  dIn: readonly [number, number];
};
export type Pose = { x: number; z: number; h: number; yaw: number; tip: number; visible: boolean };

const SLIDE = (u: number) => 1 - (1 - u) * (1 - u);   // friction: a constant deceleration to rest
/** a slide in from the right over [a, b] (dist px), then a small rock onto its leading (left) edge and back: weight */
const slideIn = (x0: number, [a, b]: readonly [number, number], dist: number, f: number, rock = 2.2) => {
  const u = clamp01((f - a) / (b - a));
  const t = f - b;
  const tip = t > 0 ? rad(rock) * Math.abs(Math.sin((Math.PI * t) / 7)) * Math.exp(-t / 5) : 0;
  return { x: x0 + dist * (1 - SLIDE(u)), tip, u };
};
const leave = ([a, b]: readonly [number, number], dist: number, f: number) => dist * EXIT(clamp01((f - a) / (b - a)));
const on = (x: number) => x > -690 && x < 2300;   // off the frame, a thing that has left is gone

export const poseA = (T: NoneTiming, f: number): Pose => {
  const x = FR.x - leave(T.aOut, 1350, f);
  return { x, z: FR.z, h: 0, yaw: 0, tip: 0, visible: on(x) };
};
export const poseB = (T: NoneTiming, f: number): Pose => {
  const s = slideIn(QB.x, T.bIn, 1150, f);
  const x = s.x - leave(T.bOut, 1450, f);
  return { x, z: QB.z, h: 0, yaw: -7 * (1 - GLIDE(s.u)), tip: f < T.bOut[0] ? s.tip : 0, visible: on(x) && f >= T.bIn[0] - 1 };
};
export const poseC = (T: NoneTiming, f: number): Pose => {
  const u = clamp01((f - T.cIn[0]) / (T.cIn[1] - T.cIn[0]));
  // it glides on its own air a little above the floor and touches down at 80% of its run
  const air = 16 * (1 - SOFT(clamp01(u / 0.8)));
  const x = FO.x + 1250 * (1 - GLIDE(u)) - leave(T.cOut, 1500, f);
  return { x, z: 0, h: air, yaw: 6 * (1 - GLIDE(u)), tip: 0, visible: on(x) && f >= T.cIn[0] - 1 };
};
/** the cover's opening angle (0 closed … π lying open): lifted softly to upright, then it falls open under its own weight,
 *  lands and lifts once a hair */
export const coverAt = (T: NoneTiming, f: number) => {
  const [a, b] = T.cOpen;
  if (f <= a) return 0;
  const u = clamp01((f - a) / (b - a));
  if (u < 0.5) return (Math.PI / 2) * SOFT(u / 0.5);
  if (u < 1) return Math.PI / 2 + (Math.PI / 2) * ((u - 0.5) / 0.5) ** 2;
  const t = f - b;
  return Math.PI - 0.07 * Math.abs(Math.sin((Math.PI * t) / 5)) * Math.exp(-t / 3.5);
};
export const poseD = (T: NoneTiming, f: number): Pose => {
  const s = slideIn(TR.x, T.dIn, 1250, f, 1.6);
  return { x: s.x, z: TR.z, h: 0, yaw: -5 * (1 - GLIDE(s.u)), tip: s.tip, visible: on(s.x) && f >= T.dIn[0] - 1 };
};

// ── footprints on the floor (x0, x1, z0, z1) at a pose, for the place's no-overlap check ──
export const footA = (p: Pose) => {
  const L = rad(FR.lean), hA = FR.h * FR.strutAt;
  const back = p.z - hA * Math.sin(L) - hA * Math.cos(L) * Math.tan(rad(FR.strutAng)) - 16;   // the strut's foot
  return { x0: p.x - FR.w / 2, x1: p.x + FR.w / 2, z0: back, z1: p.z + FR.t + 6 };
};
export const footB = (p: Pose) => ({ x0: p.x - QB.bw / 2 - 14, x1: p.x + QB.bw / 2 + 14, z0: p.z - QB.bd / 2 - 20, z1: p.z + QB.bd / 2 + 20 });
export const footC = (p: Pose, cover: number) => ({ x0: p.x - FO.w / 2 - 70, x1: p.x + FO.w / 2 + 70, z0: FO.zh - FO.d - FO.tab - 10,
  z1: FO.zh + 4 + (cover > Math.PI / 2 ? FO.cd * Math.sin(Math.min(Math.PI / 2, cover - Math.PI / 2)) : 0) + (cover > 0 ? 12 : 0) });
export const footD = (p: Pose) => ({ x0: p.x - TR.w / 2 - 50, x1: p.x + TR.w / 2 + 50, z0: p.z - TR.d / 2 - 30, z1: p.z + TR.d / 2 + 30 });

// ── where the print lies (world points: x, h above the floor, z) at a pose, for the place's screen checks ──
const tipPt = (p: Pose, w: number, lx: number, h: number) => {
  // a rock about the leading (left) bottom edge: the point (lx, h) relative to the object's centre
  const px = -w / 2, dx = lx - px, c = Math.cos(p.tip), s = Math.sin(p.tip);
  return { x: p.x + px + dx * c - h * s, h: dx * s + h * c };
};
export const inkA = (p: Pose) => {
  const L = rad(FR.lean);
  return [[-FR.w / 2, 0], [FR.w / 2, 0], [-FR.w / 2, FR.h], [FR.w / 2, FR.h]].map(([lx, ly]) =>
    ({ x: p.x + lx, h: ly * Math.cos(L) + FR.t * Math.sin(L), z: p.z + FR.t * Math.cos(L) - ly * Math.sin(L) }));
};
export const inkB = (p: Pose) => {
  const y0 = QB.bh - QB.sink;
  return [[-QB.cw / 2 + 18, y0 + 24], [QB.cw / 2 - 18, y0 + 24], [-QB.cw / 2 + 18, y0 + QB.ch - 16], [QB.cw / 2 - 18, y0 + QB.ch - 16]].map(([lx, ly]) => {
    const q = tipPt(p, QB.bw, lx, ly);
    return { x: q.x, h: q.h, z: p.z + QB.ct / 2 };
  });
};
/** the folder's readable print: the cover's stamp while it is closed, the tab's label always */
export const inkC = (p: Pose, cover: number) => {
  const pts = [
    { x: p.x + FO.tabX0 - FO.w / 2, h: p.h + 2, z: FO.zh - FO.d - FO.tab }, { x: p.x + FO.tabX1 - FO.w / 2, h: p.h + 2, z: FO.zh - FO.d - FO.tab },
    { x: p.x - FO.w / 2 + 40, h: p.h + 2, z: FO.zh }, { x: p.x + FO.w / 2 - 40, h: p.h + 2, z: FO.zh },
  ];
  // the cover's outer face while it swings: its far edge rises over the fold
  const c = Math.min(cover, Math.PI / 2);
  for (const lx of [-FO.w / 2 + 40, FO.w / 2 - 40]) pts.push({ x: p.x + lx, h: p.h + 4 + FO.cd * Math.sin(c), z: FO.zh - FO.cd * Math.cos(c) });
  return pts;
};
export const inkD = (p: Pose) => [[-LH.w / 2, TR.base + 8], [LH.w / 2, TR.base + 8], [-LH.w / 2, TR.base + 8 + LH.h], [LH.w / 2, TR.base + 8 + LH.h]].map(([lx, ly]) => {
  const q = tipPt(p, TR.w, lx, ly);
  return { x: q.x, h: q.h, z: p.z + TR.d / 2 + 3 };
});
/** each object's top-most points (for the caption band) */
export const hullA = (p: Pose) => inkA(p).slice(2);
export const hullB = (p: Pose) => [[-QB.cw / 2, QB.bh - QB.sink + QB.ch], [QB.cw / 2, QB.bh - QB.sink + QB.ch]].map(([lx, ly]) => { const q = tipPt(p, QB.bw, lx, ly); return { x: q.x, h: q.h, z: p.z }; });
export const hullD = (p: Pose) => [[-TR.w / 2, TR.hb], [TR.w / 2, TR.hb]].map(([lx, ly]) => { const q = tipPt(p, TR.w, lx, ly); return { x: q.x, h: q.h, z: p.z - TR.d / 2 }; });

// ══ SURFACES ══
let fibreC: HTMLCanvasElement | null = null;
const fibre = (w: number, h: number) => {
  if (!fibreC) {
    fibreC = document.createElement("canvas"); fibreC.width = fibreC.height = 256;
    const g = fibreC.getContext("2d")!;
    g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 5200; i++) {
      const v = 100 + Math.round(60 * hash(i, 41, 13));
      g.strokeStyle = `rgba(${v},${v},${v},0.5)`; g.lineWidth = 0.5 + hash(i, 42, 13) * 0.8;
      const x = hash(i, 43, 13) * 256, y = hash(i, 44, 13) * 256, a = hash(i, 45, 13) * Math.PI, l = 2 + 7 * hash(i, 46, 13);
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
    }
  }
  const t = new THREE.CanvasTexture(fibreC);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(w / 128, h / 128);
  return t;
};
const printOn = (tex: THREE.Texture, w: number, h: number, rough = 0.86, cut = false) => {
  const m = M.print(tex, rough);
  m.bumpMap = fibre(w, h); m.bumpScale = 0.35;
  if (cut) m.alphaTest = 0.5;
  return m;
};
const grain = (g: CanvasRenderingContext2D, w: number, h: number, n: number, seed: number, dark: string, light: string) => {
  for (let i = 0; i < n; i++) {
    g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? dark : light},${0.03 + 0.05 * hash(i, 2, seed)})`;
    g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 0.4 + hash(i, 5, seed) * 1.8, 0.25);
  }
};

/** walnut: colour bands, fine grain lines and open pores along the grain (u across = the long direction) */
const walnutTex = (key: string, w: number, h: number) => paintTex(key, w, h, (g) => {
  g.fillStyle = "#5A3926"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 40; i++) {
    const p = hash(i, 1, 37) * h, wd = 6 + 30 * hash(i, 2, 37);
    g.fillStyle = hash(i, 3, 37) > 0.5 ? `rgba(124,82,52,${0.08 + 0.12 * hash(i, 4, 37)})` : `rgba(30,16,8,${0.08 + 0.14 * hash(i, 4, 37)})`;
    g.fillRect(0, p, w, wd);
  }
  for (let i = 0; i < 200; i++) {
    const p0 = hash(i, 3, 19) * h, a = 1 + 4 * hash(i, 4, 19), ph = hash(i, 5, 19) * 6.28;
    g.strokeStyle = hash(i, 6, 19) > 0.4 ? `rgba(36,20,10,${0.1 + 0.22 * hash(i, 7, 19)})` : `rgba(160,110,75,${0.06 + 0.1 * hash(i, 8, 19)})`;
    g.lineWidth = 0.35 + 1.1 * hash(i, 9, 19);
    g.beginPath();
    for (let s = 0; s <= w; s += 5) { const d = p0 + a * Math.sin(s / 38 + ph) + 0.6 * Math.sin(s / 9 + ph * 2); if (s === 0) g.moveTo(s, d); else g.lineTo(s, d); }
    g.stroke();
  }
  for (let i = 0; i < Math.round((w * h) / 90); i++) {
    g.fillStyle = `rgba(20,10,5,${0.18 + 0.3 * hash(i, 14, 23)})`;
    g.fillRect(hash(i, 11, 23) * w, hash(i, 12, 23) * h, 1.5 + 4 * hash(i, 13, 23), 0.6);
  }
}, 2);
const walnut = (key: string, w: number, h: number) => {
  const t = walnutTex(key, w, h);
  return new THREE.MeshPhysicalMaterial({ map: t, bumpMap: t, bumpScale: 0.9, roughness: 0.46, clearcoat: 0.45, clearcoatRoughness: 0.3, envMapIntensity: 0.55 });
};

// ══ PRINT ══
const INK = "#211E1B";
const PHOTO = "assets/tiger_face.png";
/** the photo: his portrait, cover-cropped to the window, on a satin print (a faint warmth and a soft edge burn) */
const photoTex = (w: number, h: number) => paintTex("none-photo", w, h, (g) => {
  g.fillStyle = "#6F7F5E"; g.fillRect(0, 0, w, h);
  const im = imageOf(PHOTO);
  if (im.complete && im.naturalWidth > 0) {
    const s = Math.max(w / im.naturalWidth, h / im.naturalHeight);
    const dw = im.naturalWidth * s, dh = im.naturalHeight * s;
    g.drawImage(im, (w - dw) / 2 + 4, (h - dh) / 2 + 6, dw, dh);
  }
  const v = g.createRadialGradient(w / 2, h * 0.45, Math.min(w, h) * 0.35, w / 2, h / 2, Math.max(w, h) * 0.75);
  v.addColorStop(0, "rgba(0,0,0,0)"); v.addColorStop(1, "rgba(20,12,4,0.22)");
  g.fillStyle = v; g.fillRect(0, 0, w, h);
}, 3);
/** the mat board: cream with a fine tooth */
const matTex = (w: number, h: number) => paintTex("none-mat", w, h, (g) => {
  g.fillStyle = "#EEE7D8"; g.fillRect(0, 0, w, h);
  grain(g, w, h, 2600, 31, "120,105,80", "255,255,248");
}, 2);
/** the empty quote: the marks hold only a dollar sign and an empty rule; signed TIGER WOODS */
const quoteTex = () => paintTex("none-quote", QB.cw, QB.ch, (g) => {
  const W = QB.cw, H = QB.ch;
  g.fillStyle = "#F7F3EA"; g.fillRect(0, 0, W, H);
  grain(g, W, H, 3000, 17, "120,110,95", "255,255,250");
  // a faint warm edge where the card's face meets its cut edge
  g.strokeStyle = "rgba(150,130,100,0.25)"; g.lineWidth = 2; g.strokeRect(1, 1, W - 2, H - 2);
  g.fillStyle = INK; g.textBaseline = "alphabetic";
  // the marks
  g.textAlign = "left"; fillBoldItalic(g, "“", 18, 150, 190);
  g.textAlign = "right"; fillBoldItalic(g, "”", W - 16, 318, 190);
  // the dollar sign and the empty line where a number would be
  g.textAlign = "left"; font(g, 800, 64); g.fillText("$", 62, 250);
  g.fillStyle = "rgba(33,30,27,0.9)"; g.fillRect(112, 252, 160, 3.5);
  // the attribution
  g.fillStyle = INK; g.fillRect(W / 2 - 34, H - 92, 68, 2.5);
  g.textAlign = "center"; track(g, 3); fitFont(g, 800, 36, "TIGER WOODS", W - 60); g.fillText("TIGER WOODS", W / 2 + 1.5, H - 44); track(g, 0);
}, 3);
/** the folder's outer cover: manila, a little handling wear, CONTRACT rubber-stamped across it */
const coverTex = () => paintTex("none-cover", FO.w, FO.cd, (g) => {
  const W = FO.w, H = FO.cd;
  g.fillStyle = "#E2C68E"; g.fillRect(0, 0, W, H);
  grain(g, W, H, 4200, 23, "140,105,50", "250,235,200");
  const wear = g.createLinearGradient(0, 0, 0, H);
  wear.addColorStop(0, "rgba(120,85,35,0.10)"); wear.addColorStop(0.15, "rgba(120,85,35,0)"); wear.addColorStop(0.9, "rgba(120,85,35,0)"); wear.addColorStop(1, "rgba(120,85,35,0.12)");
  g.fillStyle = wear; g.fillRect(0, 0, W, H);
  // the stamp: a ruled box and CONTRACT, the ink a little uneven (a stamp's own texture)
  g.save(); g.translate(W / 2, H * 0.5); g.rotate(rad(-3));
  const ink = "rgba(36,32,40,0.9)";
  g.strokeStyle = ink; g.lineWidth = 5; g.strokeRect(-230, -62, 460, 124);
  g.lineWidth = 1.6; g.strokeRect(-220, -52, 440, 104);
  g.fillStyle = ink; g.textAlign = "center"; g.textBaseline = "middle";
  track(g, 8); fitFont(g, 800, 78, "CONTRACT", 400); g.fillText("CONTRACT", 4, 4); track(g, 0);
  g.globalCompositeOperation = "destination-out";
  for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(0,0,0,${0.25 + 0.5 * hash(i, 3, 71)})`; g.fillRect(-240 + 480 * hash(i, 1, 71), -70 + 140 * hash(i, 2, 71), 1 + 3 * hash(i, 4, 71), 1 + 2 * hash(i, 5, 71)); }
  g.restore();
}, 2.5);
/** the back panel (its inner face up): plain manila, three score lines along the fold, the tab with a typed CONTRACT label */
const BACK_H = FO.d + FO.tab;
const backTex = () => paintTex("none-back", FO.w, BACK_H, (g) => {
  const W = FO.w, H = BACK_H;
  g.fillStyle = "#DDBF84"; g.fillRect(0, 0, W, H);
  grain(g, W, H, 4600, 29, "140,105,50", "250,235,200");
  // the score lines by the fold (the bottom of the texture is the fold)
  g.fillStyle = "rgba(120,90,40,0.28)";
  for (const y of [H - 8, H - 14, H - 20]) g.fillRect(6, y, W - 12, 0.9);
  // the label on the tab: a white self-adhesive label, typed CONTRACT
  const lx = FO.tabX0 + 14, lw = FO.tabX1 - FO.tabX0 - 28;
  g.fillStyle = "rgba(90,70,40,0.18)"; g.fillRect(lx + 1, 5, lw, 24);
  g.fillStyle = "#FBFAF6"; g.fillRect(lx, 4, lw, 23);
  g.fillStyle = "rgba(190,60,50,0.55)"; g.fillRect(lx, 4, lw, 1.6);
  g.fillStyle = INK; g.textAlign = "center"; g.textBaseline = "alphabetic";
  track(g, 2.5); fitFont(g, 800, 19, "CONTRACT", lw - 16); g.fillText("CONTRACT", lx + lw / 2 + 1, 23); track(g, 0);
}, 3);
/** the cover's inner face: plain manila, its fibre and a faint handling mottle, the score lines by the fold (its bottom) */
const innerTex = () => paintTex("none-inner", FO.w, FO.cd, (g) => {
  const W = FO.w, H = FO.cd;
  g.fillStyle = "#DEC086"; g.fillRect(0, 0, W, H);
  g.save(); g.filter = "blur(14px)";
  for (let i = 0; i < 60; i++) {
    g.fillStyle = `rgba(${hash(i, 1, 53) > 0.5 ? "150,110,50" : "245,225,180"},${0.05 + 0.06 * hash(i, 2, 53)})`;
    g.beginPath(); g.ellipse(hash(i, 3, 53) * W, hash(i, 4, 53) * H, 30 + 90 * hash(i, 5, 53), 20 + 60 * hash(i, 6, 53), 0, 0, Math.PI * 2); g.fill();
  }
  g.restore();
  grain(g, W, H, 4600, 59, "140,105,50", "250,235,200");
  g.fillStyle = "rgba(120,90,40,0.28)";
  for (const y of [H - 8, H - 14, H - 20]) g.fillRect(6, y, W - 12, 0.9);
}, 2);
/** the tray's label card behind the brass holder */
const labelTex = () => paintTex("none-label", LH.w - 2 * LH.rim, LH.h - 2 * LH.rim, (g) => {
  const W = LH.w - 2 * LH.rim, H = LH.h - 2 * LH.rim;
  g.fillStyle = "#F6F2E8"; g.fillRect(0, 0, W, H);
  grain(g, W, H, 900, 41, "120,110,95", "255,255,250");
  g.fillStyle = INK; g.textAlign = "center"; g.textBaseline = "middle";
  track(g, 5); fitFont(g, 800, 38, "DOCUMENTS", W - 34); g.fillText("DOCUMENTS", W / 2 + 2.5, H / 2 + 2); track(g, 0);
}, 3);

// ══ THE MODELS ══
/** a ring: an outer rounded rect with a rectangular window (w × h outer, window ww × wh), as a bevelled slab */
const ring = (w: number, h: number, ww: number, wh: number, depth: number, bevel: number, r = 3) => {
  const s = roundRect(w, h, r);
  const hole = new THREE.Path();
  hole.moveTo(-ww / 2, -wh / 2); hole.lineTo(-ww / 2, wh / 2); hole.lineTo(ww / 2, wh / 2); hole.lineTo(ww / 2, -wh / 2); hole.closePath();
  s.holes.push(hole);
  return slabOf(s, depth, bevel, 8);
};

/** a picture-frame moulding as four mitred bars (w × h outer, band wide, depth deep), each its own bevelled slab: the mitre
 *  joints show as fine seams at the corners, as a real joined frame's do */
const mitred = (w: number, h: number, band: number, depth: number, bevel: number, m: THREE.Material | THREE.Material[]) => {
  const g = new THREE.Group();
  const X = w / 2, Y = h / 2, b = band;
  const quads: [number, number][][] = [
    [[-X, Y], [-X + b, Y - b], [X - b, Y - b], [X, Y]],
    [[-X, -Y], [X, -Y], [X - b, -Y + b], [-X + b, -Y + b]],
    [[-X, -Y], [-X + b, -Y + b], [-X + b, Y - b], [-X, Y]],
    [[X, -Y], [X, Y], [X - b, Y - b], [X - b, -Y + b]],
  ];
  for (const q of quads) {
    let pts = q.map(([x, y]) => new THREE.Vector2(x, y));
    if (THREE.ShapeUtils.isClockWise(pts)) pts = pts.reverse();
    const geo = slabOf(new THREE.Shape(pts), depth, bevel, 4);
    // slabOf normalises each bar's UVs to its own box; the moulding has no print, so that is harmless
    g.add(mesh(geo, m));
  }
  return g;
};

const buildFrame = () => {
  const g = new THREE.Group(); g.userData.obj = "frame";
  const tilt = new THREE.Group(); tilt.rotation.x = -rad(FR.lean); g.add(tilt);
  // its parts in the frame's own plane: back at z = 0, front at z = FR.t, bottom at y = 0
  const lac = new THREE.MeshPhysicalMaterial({ color: col("#191614"), roughness: 0.3, metalness: 0.05, clearcoat: 0.75, clearcoatRoughness: 0.18, envMapIntensity: 0.8 });
  const lacSide = new THREE.MeshPhysicalMaterial({ color: col("#211C19"), roughness: 0.38, clearcoat: 0.5, clearcoatRoughness: 0.25, envMapIntensity: 0.7 });
  const iw = FR.w - 2 * FR.mw, ih = FR.h - 2 * FR.mw;
  const mould = mitred(FR.w, FR.h, FR.mw, FR.t, 4, [lac, lacSide]);
  mould.position.set(0, FR.h / 2, FR.t); tilt.add(mould);
  // the gold slip: a narrow fillet just inside the moulding's window
  const gold = new THREE.MeshPhysicalMaterial({ color: col("#C9A862"), metalness: 1, roughness: 0.3, envMapIntensity: 1 });
  const slip = mitred(iw + 2, ih + 2, 8, 5, 1.2, gold);
  slip.position.set(0, FR.h / 2, FR.t - 7); tilt.add(slip);
  // the mat with its bevel-cut window (white core on the bevel), recessed behind the slip
  const PW = 290, PH = 330;
  const matFace = new THREE.MeshStandardMaterial({ map: matTex(iw, ih), roughness: 0.9, envMapIntensity: 0.35 });
  const core = M.paper("#FBFAF5");
  // (one flat face with its window, triangulated directly: an extruded ring's cap filled a triangle of the window here)
  const mat = new THREE.Group(); mat.position.set(0, FR.h / 2 + 10, FR.t - 12.5); tilt.add(mat);
  {
    const MW = iw + 30, MH = ih + 30, BV = 3.2;
    const sh = new THREE.Shape([new THREE.Vector2(-MW / 2, -MH / 2), new THREE.Vector2(MW / 2, -MH / 2), new THREE.Vector2(MW / 2, MH / 2), new THREE.Vector2(-MW / 2, MH / 2)]);
    sh.holes.push(new THREE.Path([new THREE.Vector2(-PW / 2, -PH / 2), new THREE.Vector2(-PW / 2, PH / 2), new THREE.Vector2(PW / 2, PH / 2), new THREE.Vector2(PW / 2, -PH / 2)]));
    const fg = new THREE.ShapeGeometry(sh);
    const uv = fg.attributes.uv as THREE.BufferAttribute, ps = fg.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, ps.getX(i) / MW + 0.5, ps.getY(i) / MH + 0.5);
    mat.add(mesh(fg, matFace, false, true));
    // the bevel cut: the window's four walls slope in to the back, showing the board's white core
    const a = [PW / 2, PH / 2], b = [PW / 2 - BV, PH / 2 - BV];
    const v: number[] = [];
    const quad = (p: number[][]) => { const [p0, p1, p2, p3] = p; v.push(...p0, ...p1, ...p2, ...p0, ...p2, ...p3); };
    quad([[-a[0], -a[1], 0], [a[0], -a[1], 0], [b[0], -b[1], -BV], [-b[0], -b[1], -BV]]);
    quad([[a[0], a[1], 0], [-a[0], a[1], 0], [-b[0], b[1], -BV], [b[0], b[1], -BV]]);
    quad([[-a[0], a[1], 0], [-a[0], -a[1], 0], [-b[0], -b[1], -BV], [-b[0], b[1], -BV]]);
    quad([[a[0], -a[1], 0], [a[0], a[1], 0], [b[0], b[1], -BV], [b[0], -b[1], -BV]]);
    const bg = new THREE.BufferGeometry(); bg.setAttribute("position", new THREE.Float32BufferAttribute(v, 3)); bg.computeVertexNormals();
    const coreD = core.clone(); coreD.side = THREE.DoubleSide;
    mat.add(mesh(bg, coreD, false, true));
  }
  // the photo behind the window: a satin print
  const photoM = new THREE.MeshPhysicalMaterial({ map: photoTex(PW + 16, PH + 16), roughness: 0.42, clearcoat: 0.25, clearcoatRoughness: 0.35, envMapIntensity: 0.4 });
  const photo = mesh(new THREE.PlaneGeometry(PW + 16, PH + 16), photoM, false, true);
  photo.position.set(0, FR.h / 2 + 10, FR.t - 16.2); tilt.add(photo);
  // the glass: a faint sheen and the room's reflection, over all
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(iw + 4, ih + 4), new THREE.MeshPhysicalMaterial({ color: col("#E8EEF2"), roughness: 0.04, metalness: 0, transparent: true, opacity: 0.09, depthWrite: false, envMapIntensity: 1.3, clearcoat: 1, clearcoatRoughness: 0.02 }));
  glass.position.set(0, FR.h / 2, FR.t - 8.6); tilt.add(glass);
  // the backing board (hardboard) and the easel strut, hinged high on the back and reaching the floor behind
  const hb = new THREE.MeshStandardMaterial({ color: col("#4B3A2C"), roughness: 0.85, envMapIntensity: 0.3 });
  const back = rbox(iw + 18, ih + 18, 3, 1, hb, 2);
  back.position.set(0, FR.h / 2, 3.2); tilt.add(back);
  const L = rad(FR.lean), hA = FR.h * FR.strutAt;
  const ay = hA * Math.cos(L), az = -hA * Math.sin(L);
  const fz = az - ay * Math.tan(rad(FR.strutAng));
  const len = Math.hypot(ay, az - fz);
  const strut = rbox(64, len, 5, 1.5, hb, 2);
  strut.geometry.translate(0, 0, 2.5);
  const sg = new THREE.Group(); sg.position.set(0, 0.6, fz); sg.rotation.x = Math.atan2(az - fz, ay); g.add(sg);
  strut.position.set(0, len / 2, 0); sg.add(strut);
  return g;
};

const buildQuote = () => {
  const g = new THREE.Group(); g.userData.obj = "quote";
  const pivot = new THREE.Group(); pivot.position.set(-QB.bw / 2, 0, 0); g.add(pivot);   // the rock's edge
  const inner = new THREE.Group(); inner.position.set(QB.bw / 2, 0, 0); pivot.add(inner);
  g.userData.pivot = pivot;
  const wF = walnut("none-walnut-qf", QB.bw, QB.bh), wT = walnut("none-walnut-qt", QB.bw, QB.bd);
  const base = rbox(QB.bw, QB.bh, QB.bd, 6, { px: wF, nx: wF, top: wT, bottom: wT, front: wF, back: wF }, 4);
  base.position.set(0, QB.bh / 2 + 0.3, QB.bd / 2); inner.add(base);
  // the slot: a dark kerf round the card where it enters the wood
  const kerf = mesh(new THREE.BoxGeometry(QB.cw + 8, 0.6, QB.ct + 4), new THREE.MeshStandardMaterial({ color: col("#1A0E07"), roughness: 0.9 }), false, true);
  kerf.position.set(0, QB.bh + 0.32, 0); inner.add(kerf);
  // the card: thick cream board, the print on its face, a slightly greyer cut edge
  const face = printOn(quoteTex(), QB.cw, QB.ch, 0.84);
  const card = rbox(QB.cw, QB.ch, QB.ct, 1.6, { px: M.paper("#E9E3D6"), nx: M.paper("#E9E3D6"), top: M.paper("#ECE6D9"), bottom: M.paper("#E9E3D6"), front: face, back: M.paper("#EFEAE0") }, 2);
  card.position.set(0, QB.bh - QB.sink + QB.ch / 2, QB.ct / 2); inner.add(card);
  return g;
};

const COVER_BASE = { w: FO.w - 2, h: FO.cd, t: FO.t, face: M.paper(), seg: 40 };
const COVER_SHUT = { ...COVER_BASE, curls: [{ corner: "tr" as const, r: 120, lift: 3.2 }, { corner: "tl" as const, r: 70, lift: 1.2 }], bowY: 0.6 };
const COVER_OPEN = { ...COVER_BASE, curls: [{ corner: "tr" as const, r: 260, lift: -7 }, { corner: "tl" as const, r: 200, lift: -4 }], bowY: -2.2 };
const buildFolder = () => {
  const g = new THREE.Group(); g.userData.obj = "folder";
  // the back panel with its tab, one die-cut piece of manila board (its inner face up)
  const s = new THREE.Shape();
  const W = FO.w, H = BACK_H, x0 = -W / 2, y0 = -H / 2, yT = y0 + FO.d, r = 6;
  const t0 = x0 + FO.tabX0, t1 = x0 + FO.tabX1;
  s.moveTo(x0 + r, y0); s.lineTo(x0 + W - r, y0); s.quadraticCurveTo(x0 + W, y0, x0 + W, y0 + r);
  s.lineTo(x0 + W, yT - r); s.quadraticCurveTo(x0 + W, yT, x0 + W - r, yT);
  s.lineTo(t1 + 8, yT); s.quadraticCurveTo(t1, yT, t1 - 2, yT + 10); s.lineTo(t1 - 6, y0 + H - 4); s.quadraticCurveTo(t1 - 8, y0 + H, t1 - 14, y0 + H);
  s.lineTo(t0 + 14, y0 + H); s.quadraticCurveTo(t0 + 8, y0 + H, t0 + 6, y0 + H - 4); s.lineTo(t0 + 2, yT + 10); s.quadraticCurveTo(t0, yT, t0 - 8, yT);
  s.lineTo(x0 + r, yT); s.quadraticCurveTo(x0, yT, x0, yT - r); s.lineTo(x0, y0 + r); s.quadraticCurveTo(x0, y0, x0 + r, y0);
  const inside = printOn(backTex(), FO.w, BACK_H, 0.88);
  const edge = M.paper("#CDAE72");
  const back = mesh(slabOf(s, FO.t, 0.3, 10), [inside, edge]);
  back.rotation.x = -Math.PI / 2;
  back.position.set(0, FO.t + 0.3, FO.zh - H / 2);
  g.add(back);
  // the fold: the board turning over at the hinge
  const fold = mesh(new THREE.CylinderGeometry(FO.t + 0.4, FO.t + 0.4, W - 4, 16, 1, false, 0, Math.PI).rotateZ(Math.PI / 2).rotateX(Math.PI / 2), edge);
  fold.position.set(0, FO.t + 0.35, FO.zh); g.add(fold);
  // the cover, hinged at the fold: a sheet of the same board, its outer face (stamped) up when closed
  const hinge = new THREE.Group(); hinge.position.set(0, FO.t + 0.55, FO.zh); g.add(hinge);
  const cover = paper({ w: FO.w - 2, h: FO.cd, t: FO.t, face: printOn(coverTex(), FO.w, FO.cd, 0.86), back: printOn(innerTex(), FO.w, FO.cd, 0.88),
    edge: M.paper("#CDAE72"), seg: 40, curls: [{ corner: "tr", r: 120, lift: 3.2 }, { corner: "tl", r: 70, lift: 1.2 }], bowY: 0.6 });
  cover.rotation.x = -Math.PI / 2;
  cover.position.set(0, 0, -FO.cd / 2 - 0.5);
  // the sheet's back (its inner face) sits on the hinge plane: lift it by its thickness
  const holder = new THREE.Group(); holder.position.y = FO.t; holder.add(cover); hinge.add(holder);
  g.userData.hinge = hinge;
  g.userData.cover = cover;
  return g;
};

const buildTray = () => {
  const g = new THREE.Group(); g.userData.obj = "tray";
  const pivot = new THREE.Group(); pivot.position.set(-TR.w / 2, 0, 0); g.add(pivot);
  const inner = new THREE.Group(); inner.position.set(TR.w / 2, 0, 0); pivot.add(inner);
  g.userData.pivot = pivot;
  const wA = walnut("none-walnut-ta", TR.w, TR.hb), wB = walnut("none-walnut-tb", TR.w, TR.d), wC = walnut("none-walnut-tc", TR.d, TR.hb);
  // the base
  const base = rbox(TR.w, TR.base, TR.d, 3, { px: wA, nx: wA, top: wB, bottom: wB, front: wA, back: wA }, 3);
  base.position.set(0, TR.base / 2 + 0.3, TR.d / 2); inner.add(base);
  // the back wall
  const bw = rbox(TR.w, TR.hb, TR.t, 4, { px: wC, nx: wC, top: wA, bottom: wA, front: wA, back: wA }, 3);
  bw.position.set(0, TR.hb / 2 + 0.3, -TR.d / 2 + TR.t); inner.add(bw);
  // the sides: sloping from the back wall's height down to the front lip's
  for (const sx of [-1, 1]) {
    const sh = new THREE.Shape();
    const z0 = -TR.d / 2, z1 = TR.d / 2, r = 10;
    sh.moveTo(z0, 0); sh.lineTo(z1, 0); sh.lineTo(z1, TR.hf - r); sh.quadraticCurveTo(z1, TR.hf, z1 - r, TR.hf);
    sh.lineTo(z0 + 40, TR.hb); sh.lineTo(z0 + r, TR.hb); sh.quadraticCurveTo(z0, TR.hb, z0, TR.hb - r); sh.lineTo(z0, 0);
    const side = mesh(slabOf(sh, TR.t, 2.5, 8), [wC, wC]);
    // the shape's x runs along the tray's depth: turn it so x → +z (toward the viewer)
    side.rotation.y = -Math.PI / 2;
    // its extrusion runs along +x from its position: the right side ends at the tray's right face, the left starts at its left
    side.position.set(sx > 0 ? TR.w / 2 - TR.t : -TR.w / 2, 0.3, 0);
    inner.add(side);
  }
  // the front lip
  const lip = rbox(TR.w - 2 * TR.t + 0.6, TR.hf, TR.t, 4, { px: wC, nx: wC, top: wA, bottom: wA, front: wA, back: wA }, 3);
  lip.position.set(0, TR.hf / 2 + 0.3, TR.d / 2); inner.add(lip);
  // the brass label holder screwed to the lip, its card inside
  const brass = new THREE.MeshPhysicalMaterial({ color: col("#C89B45"), metalness: 1, roughness: 0.3, envMapIntensity: 1 });
  const LY = TR.base + 8 + LH.h / 2 + 0.3;
  const holder = mesh(ring(LH.w, LH.h, LH.w - 2 * LH.rim, LH.h - 2 * LH.rim, 2.6, 0.8, 3), brass);
  holder.position.set(0, LY, TR.d / 2 + 2.6 + 0.4); inner.add(holder);
  const cardM = new THREE.MeshStandardMaterial({ map: labelTex(), roughness: 0.8, envMapIntensity: 0.35 });
  const card = mesh(new THREE.PlaneGeometry(LH.w - 2 * LH.rim + 2, LH.h - 2 * LH.rim + 2), cardM, false, true);
  card.position.set(0, LY, TR.d / 2 + 0.9); inner.add(card);
  for (const sx of [-1, 1]) {
    const scr = mesh(new THREE.SphereGeometry(3.2, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(Math.PI / 2), brass);
    scr.position.set(sx * (LH.w / 2 + 9), LY, TR.d / 2 + 0.4); inner.add(scr);
  }
  return g;
};

export type NoneP = { f: number };

export const noneModel = (T: NoneTiming) => (): Model<NoneP> => {
  const root = new THREE.Group();
  const FY = -NONE_FLOOR;
  const A = buildFrame(), B = buildQuote(), C = buildFolder(), D = buildTray();
  root.add(A, B, C, D);
  root.add(makeFloor({ y: NONE_FLOOR, x0: -1200, x1: 2300, z0: -1100, z1: 700, reflect: 0, shadow: 0.42, fadeC: [540, -300], fadeR: [1100, 650] }));
  const place = (o: THREE.Group, p: Pose) => {
    o.visible = p.visible;
    o.position.set(p.x, FY + p.h, p.z);
    o.rotation.y = rad(p.yaw);
    const pv = o.userData.pivot as THREE.Group | undefined;
    if (pv) pv.rotation.z = p.tip;
  };
  return {
    root,
    update: ({ f }) => {
      place(A, poseA(T, f));
      place(B, poseB(T, f));
      const pc = poseC(T, f);
      place(C, { ...pc, z: 0 });
      const cv = coverAt(T, f);
      (C.userData.hinge as THREE.Group).rotation.x = cv;
      // ★ the board's spring: once it lies open, its free edge lifts a little off the floor and it bows from the fold
      //   (toward its inner face, now up); closed, it lies flat on the back panel
      const open = cv > 2.6;
      if (open !== C.userData.open) {
        C.userData.open = open;
        (C.userData.cover as THREE.Group).userData.reshape(open ? COVER_OPEN : COVER_SHUT);
      }
      place(D, poseD(T, f));
    },
  };
};
