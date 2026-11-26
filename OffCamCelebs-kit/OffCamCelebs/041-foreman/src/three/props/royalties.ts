// ══════════════════════════════════════════════════════════════════════════════════════════════
// ROYALTIES IN 3-D (041) — "Salton's own SEC filings show those royalties. $38 million in one year, then $16.6 million in
// just three months." On the cream ground (an unseen table: its soft contact shadows), three real things:
//   · THE FILING: a US-letter page (216 × 279 mm, at the cash's scale 332 × 429) of white bond, a fine fibre tooth, a faint
//     bow, its near corner lifting; the 8-K's cover page set in dense typewriter-era type (a Courier face, as the EDGAR
//     text filings printed): SECURITIES AND EXCHANGE COMMISSION, FORM 8-K, SALTON, INC., the date line, then Items 2 and 7
//     and the signature block in small type (every phrase from the filing's own words, record.ts / VO_SCRIPT.txt; no figure
//     printed). It glides in from the near side on its own air and touches down on "filings".
//   · THE FISCAL 1999 STACK: fourteen real $100 straps (props/cash.ts), two rows of seven, squared by hand (each a hair
//     shifted and turned), slid in from the right on "$38"; a jumbo manila shipping tag (#11, 7¼ × 3⅝ in: clipped corners,
//     a punched hole in its reinforcing patch, a slight bow) lies on top: $38,096,000 / FISCAL 1999.
//   · THE 13-WEEK STACK: six straps (two rows of three: 7 : 3 ≈ 38.1 : 16.6) slid in from the right in front of it, landing
//     on "three months", its tag $16,644,000 / 13 WEEKS.
// Units are layer px; local y UP from the table (the floor at layer y RY.floor), z toward the viewer.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, paintTex, slabOf, type Model } from "../stage";
import { M, rad, col, fitFont, track, hash, paper, font, type PaperOpts } from "../kit029";
import { makeBundle, BUNDLE } from "./cash";
import { GLIDE, clamp01 } from "../../r45/tokens";
import { ROYALTIES as FIG } from "../../audit/record";

export const RY = {
  floor: 1450,
  /** the filing page, lying flat: centre, turn (deg), size (US letter at the cash's scale) */
  page: { x: 330, z: -40, yaw: -3, w: 332, d: 429 },
  /** the two stacks: centre of the footprint, turn (deg), layers (two rows each) */
  s1: { x: 738, z: -70, yaw: 2.5, layers: 7 },
  s2: { x: 756, z: 220, yaw: -2, layers: 3 },
  /** the jumbo shipping tag (#11, 7¼ × 3⅝ in) and its card's thickness */
  tag: { w: 283, d: 141, t: 0.6, clip: 18, bow: 1.4 },
} as const;
export const TAGS = [
  { big: "$" + FIG.fy1999.toLocaleString("en-US"), small: "FISCAL 1999", yaw: 3 },
  { big: "$" + FIG.q13wk.toLocaleString("en-US"), small: "13 WEEKS", yaw: -3.5 },
] as const;
if (TAGS[0].big !== "$38,096,000" || TAGS[1].big !== "$16,644,000") throw new Error("royalties: the tags must read $38,096,000 and $16,644,000");

// ══ THE STACKS ══
/** a layer's pitch: a bundle's full height (its puffed ends or crinkled strap) and a hair of air */
export const LAYER = BUNDLE.H + 0.45;
/** the two rows' z offsets from the stack's centre (back, front) */
const ROW = BUNDLE.HZ + 5.5;
/** bundle (row r, layer k) of a stack: its offset and turn, a hand-squared jitter */
export const bundleAt = (stack: number, r: number, k: number) => ({
  x: (hash(stack * 7 + r, k, 11) - 0.5) * 14,
  z: (r === 0 ? -ROW : ROW) + (hash(stack * 7 + r, k, 12) - 0.5) * 2,
  yaw: (hash(stack * 7 + r, k, 13) - 0.5) * 3.6,
  y: k * LAYER,
});
/** a stack's height to the top of its top bundles, and to the top of its tag */
export const stackTop = (layers: number) => (layers - 1) * LAYER + BUNDLE.H;
/** the tag's underside (its ends: the bow lifts its middle) over the top bundles */
export const tagY = (layers: number) => stackTop(layers) + 0.15;
export const tagTop = (layers: number) => tagY(layers) + RY.tag.t + RY.tag.bow;
{
  // ★ the rows never touch: their gap less two jitters and the turned ends' swing is still open
  const swing = BUNDLE.HX * Math.sin(rad(1.8)) + BUNDLE.HZ * (1 - Math.cos(rad(1.8)));
  if (2 * ROW - 2 - 2 * swing <= 2 * BUNDLE.HZ) throw new Error("royalties: a stack's two rows overlap");
  // ★ the tag rests on the bundles (never sinks into them): its lowest underside over the bundles' footprint, with the bow,
  //   is above their highest paper
  const u = (BUNDLE.HX + 8) / (RY.tag.w / 2);
  if (tagY(1) + RY.tag.bow * (1 - u * u) < stackTop(1) || tagY(1) < stackTop(1)) throw new Error("royalties: the tag sinks into its stack");
}

// ══ POSES ══
export type RoyT = { page: number; s1: number; s2: number };
export type Pose = { x: number; z: number; h: number; yaw: number; visible: boolean; squash: number };
const ss = (a: number, b: number, x: number) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
/** the page glides in from the near side a little above the table on its own air, touches down at 80% of the run, brakes */
export const PAGE_FLY = 26;
export const pageAt = (T: RoyT, f: number): Pose => {
  const u = clamp01((f - (T.page - PAGE_FLY)) / PAGE_FLY), g = 1 - GLIDE(u);
  return { x: RY.page.x + 70 * g, z: RY.page.z + 980 * g, h: 30 * (1 - ss(0, 0.8, u)), yaw: RY.page.yaw + 11 * g, visible: f > T.page - PAGE_FLY - 1, squash: 1 };
};
/** the frame the page touches down */
export const pageTouch = (T: RoyT) => Math.round(T.page - PAGE_FLY + 0.8 * PAGE_FLY);
/** a stack slides in from beyond the right edge, low over the table, decelerating as it drops (gravity: h falls as u²); it
 *  touches down at `land` with weight (the paper takes the blow: a short squash), then brakes over its last `slide` px */
export const SLIDE = { fly: 20, dx: 1350, h0: 26, brake: 9, slide: 20, spin: 5 } as const;
const slide = (land: number, rest: { x: number; z: number; yaw: number }, f: number): Pose => {
  const o = SLIDE, t0 = land - o.fly;
  if (f <= t0) return { x: rest.x + o.dx + o.slide, z: rest.z, h: o.h0, yaw: rest.yaw + o.spin, visible: false, squash: 1 };
  if (f < land) {
    const u = (f - t0) / o.fly, e = 1 - Math.pow(1 - u, 2.2);
    return { x: rest.x + o.slide + o.dx * (1 - e), z: rest.z, h: o.h0 * (1 - u * u), yaw: rest.yaw + o.spin * (1 - 0.9 * e), visible: true, squash: 1 };
  }
  const t = f - land, k = Math.min(1, t / o.brake);
  return { x: rest.x + o.slide * (1 - k) * (1 - k), z: rest.z, h: 0, yaw: rest.yaw + o.spin * 0.1 * (1 - k) * (1 - k), visible: true,
    squash: t < 6 ? 1 - 0.014 * Math.sin((Math.PI * t) / 6) : 1 };
};
export const stackAt = (T: RoyT, j: number, f: number) => slide(j === 0 ? T.s1 : T.s2, j === 0 ? RY.s1 : RY.s2, f);
/** the frame a stack's slide moves fastest, and the frame it is at rest */
export const stackFastest = (land: number) => land - SLIDE.fly + 1;
export const stackRest = (land: number) => land + SLIDE.brake;

// ══ POINTS (layer coords: x, layer y, z) FOR THE CAMERA AND THE CHECKS ══
export type P3 = [number, number, number];
/** a point of a posed thing: local x across, y up, z toward the viewer */
const at = (p: { x: number; z: number; h: number; yaw: number }, lx: number, ly: number, lz: number): P3 => {
  const a = rad(p.yaw), c = Math.cos(a), s = Math.sin(a);
  return [p.x + lx * c + lz * s, RY.floor - (p.h + ly), p.z - lx * s + lz * c];
};
/** a point on a flat print lying face up (u right, v down from its far edge; the print's size w × d), at height `top` */
const flat = (p: Pose, w: number, d: number, u: number, v: number, top: number) => at(p, u - w / 2, top, v - d / 2);
/** the page's corners (and the near corner's lift) */
export const pagePts = (p: Pose): P3[] => [[0, 0, 1], [RY.page.w, 0, 1.5], [0, RY.page.d, 1], [RY.page.w, RY.page.d, 6]].map(([u, v, h]) => flat(p, RY.page.w, RY.page.d, u, v, h));
/** the page's print, as boxes (print px u0, v0, u1, v1): the cover lines, and the small type */
export const PAGE_INK = { cover: [22, 12, 310, 192] as const, body: [22, 196, 310, 418] as const };
export const pageInk = (p: Pose, which: keyof typeof PAGE_INK) => {
  const b = PAGE_INK[which];
  return [[b[0], b[1]], [b[2], b[1]], [b[0], b[3]], [b[2], b[3]]].map(([u, v]) => flat(p, RY.page.w, RY.page.d, u, v, 1));
};
/** a stack's box (its footprint up to its tag's top) */
export const stackPts = (j: number, p: Pose): P3[] => {
  const L = (j === 0 ? RY.s1 : RY.s2).layers, out: P3[] = [];
  const hx = BUNDLE.HX + 8, hz = ROW + BUNDLE.HZ + 1;
  for (const x of [-hx, hx]) for (const z of [-hz, hz]) for (const y of [0, stackTop(L)]) out.push(at(p, x, y, z));
  return [...out, ...tagPts(j, p)];
};
/** the tag's turn on its stack */
const tagPose = (j: number, p: Pose) => ({ x: p.x, z: p.z, h: p.h + tagY((j === 0 ? RY.s1 : RY.s2).layers), yaw: p.yaw + TAGS[j].yaw });
export const tagPts = (j: number, p: Pose): P3[] => {
  const q = tagPose(j, p), T = RY.tag;
  return [[0, 0], [T.w, 0], [0, T.d], [T.w, T.d]].map(([u, v]) => at(q, u - T.w / 2, T.t + T.bow, v - T.d / 2));
};
/** the tag's print box (tag px) */
export const TAG_INK = [44, 16, 272, 126] as const;
export const tagInk = (j: number, p: Pose): P3[] => {
  const q = tagPose(j, p), T = RY.tag, b = TAG_INK;
  return [[b[0], b[1]], [b[2], b[1]], [b[0], b[3]], [b[2], b[3]]].map(([u, v]) => at(q, u - T.w / 2, T.t + T.bow, v - T.d / 2));
};
{
  // ★ the three lie apart: the page left of the back stack (with room), the front stack's path in front of the back stack
  //   (its z span, turned by its spin, clear of the back stack's)
  const hx = BUNDLE.HX + 8, hz = ROW + BUNDLE.HZ + 1, tw = RY.tag.w / 2 + 4;
  const pageR = RY.page.x + (RY.page.w / 2) * Math.cos(rad(RY.page.yaw)) + (RY.page.d / 2) * Math.abs(Math.sin(rad(RY.page.yaw)));
  const s1L = RY.s1.x - Math.max(hx, tw) - hz * Math.abs(Math.sin(rad(RY.s1.yaw + SLIDE.spin)));
  if (s1L - pageR < 60) throw new Error(`royalties: the back stack crowds the page (${Math.round(pageR)} → ${Math.round(s1L)})`);
  const back = RY.s1.z + hz + hx * Math.abs(Math.sin(rad(RY.s1.yaw)));
  const front = RY.s2.z - hz - Math.max(hx, tw) * Math.abs(Math.sin(rad(Math.abs(RY.s2.yaw) + SLIDE.spin)));
  if (front - back < 20) throw new Error(`royalties: the front stack's path meets the back stack (${Math.round(back)} → ${Math.round(front)})`);
}

// ══ SURFACES ══
let fibreC: HTMLCanvasElement | null = null;
const fibre = (w: number, h: number) => {
  if (!fibreC) {
    fibreC = document.createElement("canvas"); fibreC.width = fibreC.height = 256;
    const g = fibreC.getContext("2d")!;
    g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 5600; i++) {
      const v = 100 + Math.round(60 * hash(i, 81, 3));
      g.strokeStyle = `rgba(${v},${v},${v},0.5)`; g.lineWidth = 0.5 + hash(i, 82, 3) * 0.8;
      const x = hash(i, 83, 3) * 256, y = hash(i, 84, 3) * 256, a = hash(i, 85, 3) * Math.PI, l = 2 + 7 * hash(i, 86, 3);
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
    }
  }
  const t = new THREE.CanvasTexture(fibreC);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(w / 128, h / 128);
  return t;
};
const grain = (g: CanvasRenderingContext2D, w: number, h: number, n: number, seed: number, dark: string, light: string) => {
  for (let i = 0; i < n; i++) {
    g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? dark : light},${0.035 + 0.045 * hash(i, 2, seed)})`;
    g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 0.5 + 2 * hash(i, 5, seed), 0.3);
  }
};

// ══ THE FILING'S PRINT ══
/** the typewriter face: Courier New (Liberation Mono has its metrics where Courier New is not installed) */
const MONO = '"Courier New", "Liberation Mono", "Nimbus Mono PS", "FreeMono", monospace';
const mono = (g: CanvasRenderingContext2D, weight: number, size: number) => { g.font = `${weight >= 600 ? "bold " : ""}${size}px ${MONO}`; };
const fitMono = (g: CanvasRenderingContext2D, weight: number, size: number, text: string, maxW: number) => {
  let s = size; mono(g, weight, s);
  while (s > 4 && g.measureText(text).width > maxW) { s *= 0.97; mono(g, weight, s); }
  return s;
};
const wrap = (g: CanvasRenderingContext2D, text: string, maxW: number) => {
  const out: string[] = [];
  let line = "";
  for (const w of text.split(" ")) {
    const t = line ? line + " " + w : w;
    if (g.measureText(t).width > maxW && line) { out.push(line); line = w; } else line = t;
  }
  if (line) out.push(line);
  return out;
};
// the filing's own words (record.ts, VO_SCRIPT.txt: Salton, Inc. 8-K, filed December 10, 1999); no figure is printed
const ITEM2 = "On December 9, 1999, Salton, Inc. (\"Salton\") acquired from George Foreman and his partners the right to use in " +
  "perpetuity and worldwide the name \"George Foreman\". The purchase price is payable in cash, in five annual installments, " +
  "and in shares of Salton common stock. The acquisition ends Salton's obligation to pay royalties to George Foreman and his " +
  "partners based on the sale of \"George Foreman\" products.";
const ITEM7 = "(b) Pro forma financial information. The unaudited pro forma statements of earnings give effect to the acquisition " +
  "as if it had occurred at the beginning of the periods presented, and reverse the royalty payments on \"George Foreman\" " +
  "products for the fiscal year ended June 26, 1999 and for the thirteen weeks ended September 25, 1999.";
const SIGN = "Pursuant to the requirements of the Securities Exchange Act of 1934, the registrant has duly caused this report to " +
  "be signed on its behalf by the undersigned hereunto duly authorized.";
const pageTex = () => paintTex("ry-8k-page", RY.page.w, RY.page.d, (g) => {
  const W = RY.page.w, H = RY.page.d, CX = W / 2, L = 24, R = W - 24;
  // white bond, a touch warm, a faint unevenness and its fibre
  const bg = g.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#FAF9F4"); bg.addColorStop(1, "#F3F1E9");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  g.save(); g.filter = "blur(14px)";
  for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(${hash(i, 1, 91) > 0.5 ? "200,192,170" : "255,255,252"},${0.05 + 0.05 * hash(i, 2, 91)})`; g.beginPath(); g.ellipse(hash(i, 3, 91) * W, hash(i, 4, 91) * H, 30 + 60 * hash(i, 5, 91), 20 + 40 * hash(i, 6, 91), 0, 0, Math.PI * 2); g.fill(); }
  g.restore();
  grain(g, W, H, 3200, 23, "120,112,96", "255,255,250");
  // the type: each struck line a little darker or lighter (a ribbon's wear), the ink sitting in the paper
  let line = 0;
  const ink = () => { const a = 0.8 + 0.16 * hash(line++, 7, 31); g.fillStyle = `rgba(24,22,19,${a.toFixed(3)})`; };
  const centre = (t: string, y: number, w: number, s: number, maxW = R - L) => { ink(); fitMono(g, w, s, t, maxW); g.textAlign = "center"; g.fillText(t, CX, y); };
  g.textBaseline = "alphabetic";
  track(g, 0.6); centre("SECURITIES AND EXCHANGE COMMISSION", 30, 700, 16); track(g, 0);
  centre("WASHINGTON, D.C. 20549", 42, 400, 8);
  ink(); g.fillRect(CX - 60, 49, 120, 0.7);
  track(g, 1.5); centre("FORM 8-K", 82, 700, 31); track(g, 0);
  centre("CURRENT REPORT", 97, 700, 9);
  centre("PURSUANT TO SECTION 13 OR 15(d) OF THE", 108, 400, 7);
  centre("SECURITIES EXCHANGE ACT OF 1934", 116.5, 400, 7);
  centre("Date of Report (Date of earliest event reported): December 9, 1999", 132, 400, 6.6);
  track(g, 1); centre("SALTON, INC.", 168, 700, 29); track(g, 0);
  centre("(Exact name of registrant as specified in its charter)", 180, 400, 6.4);
  ink(); g.fillRect(L, 188, R - L, 0.6);
  // the small type: Items 2 and 7 and the signature block
  g.textAlign = "left";
  let y = 202;
  const head = (t: string) => { ink(); mono(g, 700, 6.6); for (const l of wrap(g, t, R - L)) { g.fillText(l, L, y); y += 8; } y += 2; };
  const para = (t: string, indent = 14) => {
    mono(g, 400, 6.3);
    const ls = wrap(g, t, R - L - indent);
    ls.forEach((l, i) => { ink(); g.fillText(l, L + (i === 0 ? indent : 0), y); y += 7.6; });
    y += 5;
  };
  head("ITEM 2.  ACQUISITION OR DISPOSITION OF ASSETS.");
  para(ITEM2);
  head("ITEM 7.  FINANCIAL STATEMENTS, PRO FORMA FINANCIAL INFORMATION AND EXHIBITS.");
  para(ITEM7);
  para("(c) Exhibits. See the Exhibit Index.");
  y += 2;
  ink(); mono(g, 700, 7); g.textAlign = "center"; g.fillText("SIGNATURES", CX, y); y += 10; g.textAlign = "left";
  para(SIGN);
  const sx = CX + 22;
  ink(); mono(g, 700, 6.6); g.fillText("SALTON, INC.", sx, y); y += 13;
  ink(); mono(g, 400, 6.3); g.fillText("By:", sx, y); g.fillRect(sx + 16, y + 0.8, R - sx - 16, 0.55); y += 10;
  ink(); g.fillText("Date: December 10, 1999", L, y);
  // a staple's two holes at the top left, a soft grey of handling at the near edge
  g.fillStyle = "rgba(70,66,58,0.55)"; g.fillRect(16, 10, 1.4, 1.4); g.fillRect(26, 6.5, 1.4, 1.4);
  const near = g.createLinearGradient(0, H - 24, 0, H);
  near.addColorStop(0, "rgba(120,110,90,0)"); near.addColorStop(1, "rgba(120,110,90,0.07)");
  g.fillStyle = near; g.fillRect(0, H - 24, W, 24);
}, 3);

// ══ THE TAGS ══
const MANILA = "#E0C68B";
/** a jumbo shipping tag's face: manila card with its fibre and mottling, the reinforcing patch round the hole, the figure in
 *  bold type and the period under a rule; a little handling on the corners */
const HOLE = { u: 23, r: 5.2, patch: 15.5 } as const;
const tagTex = (j: number) => paintTex(`ry-tag-${j}`, RY.tag.w, RY.tag.d, (g) => {
  const W = RY.tag.w, H = RY.tag.d, t = TAGS[j];
  g.fillStyle = MANILA; g.fillRect(0, 0, W, H);
  g.save(); g.filter = "blur(10px)";
  for (let i = 0; i < 30; i++) { g.fillStyle = `rgba(${hash(i, 1, 41 + j) > 0.5 ? "160,120,60" : "250,232,180"},${0.06 + 0.06 * hash(i, 2, 41 + j)})`; g.beginPath(); g.ellipse(hash(i, 3, 41 + j) * W, hash(i, 4, 41 + j) * H, 20 + 40 * hash(i, 5, 41 + j), 12 + 24 * hash(i, 6, 41 + j), 0, 0, Math.PI * 2); g.fill(); }
  g.restore();
  grain(g, W, H, 2400, 51 + j, "120,86,30", "255,240,200");
  // the patch: a thinner, paler disc glued round the hole, its edge a fine shadow line
  g.fillStyle = "#E8D29E"; g.beginPath(); g.arc(HOLE.u, H / 2, HOLE.patch, 0, Math.PI * 2); g.fill();
  g.strokeStyle = "rgba(120,88,40,0.45)"; g.lineWidth = 0.7; g.stroke();
  g.strokeStyle = "rgba(120,88,40,0.35)"; g.lineWidth = 1; g.beginPath(); g.arc(HOLE.u, H / 2, HOLE.r + 1.2, 0, Math.PI * 2); g.stroke();
  // the print
  g.fillStyle = "#24190D"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  const cx = (TAG_INK[0] + TAG_INK[2]) / 2;
  track(g, 0.5);
  const s = fitFont(g, 800, 60, t.big, TAG_INK[2] - TAG_INK[0]);
  g.fillText(t.big, cx, 24 + s * 0.74);
  track(g, 0);
  g.fillRect(TAG_INK[0] + 8, 88, TAG_INK[2] - TAG_INK[0] - 16, 1.4);
  track(g, 5); fitFont(g, 700, 25, t.small, 190); g.fillText(t.small, cx + 2.5, 117); track(g, 0);
  // handling: the corners a little darker, a faint crease near the hole end
  for (const [x, y] of [[W, 0], [W, H]]) {
    const gr = g.createRadialGradient(x, y, 0, x, y, 26);
    gr.addColorStop(0, "rgba(110,80,35,0.2)"); gr.addColorStop(1, "rgba(110,80,35,0)");
    g.fillStyle = gr; g.fillRect(x - 26, y - 26, 52, 52);
  }
  const cr = g.createLinearGradient(52, 0, 58, 0);
  cr.addColorStop(0, "rgba(110,80,35,0)"); cr.addColorStop(0.5, "rgba(110,80,35,0.12)"); cr.addColorStop(1, "rgba(255,240,200,0)");
  g.fillStyle = cr; g.fillRect(52, 0, 6, H);
}, 3);
/** the tag's card: its outline (the hole end's corners clipped, the far end's rounded a hair), the punched hole; bowed */
const tagGeo = () => {
  const T = RY.tag, w = T.w / 2, h = T.d / 2, c = T.clip, r = 2.5;
  const s = new THREE.Shape();
  s.moveTo(-w + c, -h);
  s.lineTo(w - r, -h); s.quadraticCurveTo(w, -h, w, -h + r);
  s.lineTo(w, h - r); s.quadraticCurveTo(w, h, w - r, h);
  s.lineTo(-w + c, h); s.lineTo(-w, h - c); s.lineTo(-w, -h + c); s.closePath();
  const hole = new THREE.Path();
  hole.absarc(-w + HOLE.u, 0, HOLE.r, 0, Math.PI * 2, true);
  s.holes.push(hole);
  const g = slabOf(s, T.t, 0.12, 24);
  // the bow: the middle a little proud of the ends (a card's own spring), so the tag rests on the straps
  const p = g.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < p.count; i++) { const u = p.getX(i) / w; p.setZ(i, p.getZ(i) + T.bow * (1 - u * u)); }
  p.needsUpdate = true;
  g.computeVertexNormals();
  return g;
};

// ══ THE MODEL ══
const lying = (o: PaperOpts) => {
  const g = new THREE.Group();
  const s = paper(o);
  s.rotation.x = -Math.PI / 2;
  s.position.y = o.t ?? 1.2;
  g.add(s);
  return g;
};
export type RoyP = { f: number };
export const royaltiesModel = (T: RoyT) => (): Model<RoyP> => {
  const root = new THREE.Group();
  const FY = -RY.floor;

  // ══ THE FILING ══
  const page = new THREE.Group(); page.userData.obj = "filing"; root.add(page);
  {
    const face = M.print(pageTex(), 0.86) as THREE.MeshStandardMaterial;
    face.bumpMap = fibre(RY.page.w, RY.page.d); face.bumpScale = 0.3;
    page.add(lying({ w: RY.page.w, h: RY.page.d, t: 0.45, face, back: M.paper("#F1EFE8"), edge: M.paper("#E8E4DA"), seg: 44,
      bow: 0.8, curls: [{ corner: "br", r: 92, lift: 5 }, { corner: "tl", r: 46, lift: 1.4 }], wave: 0.35, seed: 3 }));
  }

  // ══ THE STACKS AND THEIR TAGS ══
  const stacks: THREE.Group[] = [];
  const tagGeom = tagGeo();
  const edgeM = new THREE.MeshStandardMaterial({ color: col("#CDAE73"), roughness: 0.9, envMapIntensity: 0.3 });
  [RY.s1, RY.s2].forEach((S, j) => {
    const grp = new THREE.Group(); grp.userData.obj = `stack${j + 1}`; root.add(grp);
    for (let k = 0; k < S.layers; k++) for (let r = 0; r < 2; r++) {
      const b = bundleAt(j, r, k);
      const bn = makeBundle({ seed: j * 31 + k * 2 + r, strap: "", flip: (k + r + j) % 2 === 1 });
      bn.position.set(b.x, b.y, b.z); bn.rotation.y = rad(b.yaw);
      grp.add(bn);
    }
    const tag = new THREE.Group(); tag.userData.obj = `tag${j + 1}`;
    const face = new THREE.MeshPhysicalMaterial({ map: tagTex(j), roughness: 0.82, metalness: 0, sheen: 0.2, sheenRoughness: 0.7, sheenColor: col("#F4E6C0"),
      bumpMap: fibre(RY.tag.w, RY.tag.d), bumpScale: 0.35, envMapIntensity: 0.35 });
    const card = mesh(tagGeom, [face, edgeM]);
    card.rotation.x = -Math.PI / 2;
    card.position.y = RY.tag.t;
    tag.add(card);
    tag.position.y = tagY(S.layers);
    tag.rotation.y = rad(TAGS[j].yaw);
    grp.add(tag);
    stacks.push(grp);
  });

  root.add(makeFloor({ y: RY.floor, x0: -900, x1: 2400, z0: -1000, z1: 1300, reflect: 0.05, shadow: 0.42, fadeC: [620, -20], fadeR: [1100, 720] }));

  // ★ everything rests a hair over the floor's shadow catcher (it lies 0.4 px over the floor): a sheet's edge or a strap's
  //   underside cut by it drew a dashed line along the page's edges
  const LIFT = 0.5;
  const place = (g: THREE.Group, p: Pose) => {
    g.visible = p.visible; g.position.set(p.x, FY + LIFT + p.h, p.z); g.rotation.y = rad(p.yaw); g.scale.y = p.squash;
  };
  return {
    root,
    update: (p) => {
      place(page, pageAt(T, p.f));
      stacks.forEach((g, j) => place(g, stackAt(T, j, p.f)));
    },
  };
};
