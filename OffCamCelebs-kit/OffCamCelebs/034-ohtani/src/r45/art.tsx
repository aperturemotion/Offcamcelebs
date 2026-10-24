import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { P, ramp, SMOOTH, type Ground } from "./tokens";
import { MONO, ARCHIVO } from "../audit/fonts";
import { useTag } from "../audit/Probe";
import { HAS_PHOTO, PHOTO_FILE } from "../audit/data";
import { PHOTO } from "../audit/photo";
import { Mat, Eyelet, Engraved, white, black } from "./mat";

// ═══════════════════════════════════════════════════════════════════════════
// ★★★★★ RULE 45 — the shared parts of the flat kit. Cel shading: base + ONE shade + one thin highlight stripe on glossy
// or glass things; no strokes anywhere; gradients only as a soft 2-stop on LARGE fills (the grounds, the light beams).
// ═══════════════════════════════════════════════════════════════════════════

/** ★ rule 45.2 — the grounds: cream with a soft radial vignette (edges ~8% darker) or dark with a lighter centre, and the
 *  STATIC paper grain over both (3.5%, a fixed tile: never boiling) */
export const GroundFill: React.FC<{ g: Ground | "warm" }> = ({ g }) => {
  const bg = g === "dark"
    ? `radial-gradient(ellipse 78% 62% at 50% 52%, ${P.espressoCentre} 0%, ${P.espresso} 100%)`
    : g === "warm"
      ? `radial-gradient(ellipse 80% 66% at 50% 50%, ${P.sand} 52%, #E8DECB 100%)`
      : `radial-gradient(ellipse 80% 66% at 50% 50%, ${P.sand} 52%, ${P.sandEdge} 100%)`;
  return (
    <AbsoluteFill style={{ background: bg }}>
      <AbsoluteFill style={{ backgroundImage: `url(${staticFile("grain.png")})`, backgroundSize: "512px 512px", opacity: 0.035 }} />
    </AbsoluteFill>
  );
};

/** ★ rule 45.7 — a sub-label: IBM Plex Mono 30 px at 60% opacity, directly under the object it qualifies. It enters (a
 *  short settle DOWN from just above, with its fade — never from below, where the unsafe bottom band begins) at `at`, and
 *  may leave at `out` (a lift with its fade). */
export const SubLabel: React.FC<{ id: string; f: number; at: number; out?: number; cx: number; y: number; lines: readonly string[]; ground: Ground; align?: "centre" | "left" | "right" }> = ({ id, f, at, out, cx, y, lines, ground, align = "centre" }) => {
  const tg = useTag();
  const pin = ramp(f, at, at + 12, SMOOTH);
  const pout = out === undefined ? 0 : ramp(f, out, out + 10, SMOOTH);
  const op = pin * (1 - pout);
  if (op <= 0.001) return null;
  const dy = -(1 - pin) * 10 - pout * 8;
  return (
    <div style={{ position: "absolute", left: 0, top: 0, width: 1080, opacity: op }}>
      {lines.map((l, k) => (
        <div key={k} {...tg(`${id}.${k}`, "text")} style={{
          position: "absolute", top: y + k * 38, whiteSpace: "nowrap",
          ...(align === "centre" ? { left: cx - 500, width: 1000, textAlign: "center" as const } : align === "left" ? { left: cx } : { right: 1080 - cx }),
          fontFamily: MONO, fontWeight: 400, fontSize: 30, lineHeight: "36px", color: ground === "dark" ? P.sand : P.ink, opacity: 0.6,
          transform: `perspective(1200px) translate3d(0, ${dy.toFixed(3)}px, 0) rotateX(0.15deg)`,
        }}>{l}</div>
      ))}
    </div>
  );
};

/** a LIMB's outline (a finger, a thumb) from its jointed centreline: it tapers by `w` at each joint, bends smoothly
 *  through them (Catmull-Rom) and ends in a rounded pad. Returns the path, the tip, the last segment's direction and width */
type Pt = [number, number];
const limb = (pts: Pt[], w: number[]) => {
  const n = pts.length;
  const dir = (i: number): Pt => {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)], l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    return [(b[0] - a[0]) / l, (b[1] - a[1]) / l];
  };
  const side = (s: number) => pts.map((p, i) => { const d = dir(i); return [p[0] - d[1] * s * w[i] / 2, p[1] + d[0] * s * w[i] / 2] as Pt; });
  const L = side(1), R = side(-1);
  const curve = (q: Pt[]) => {
    let d = "";
    for (let i = 0; i < q.length - 1; i++) {
      const p0 = q[Math.max(0, i - 1)], p1 = q[i], p2 = q[i + 1], p3 = q[Math.min(q.length - 1, i + 2)];
      const c1: Pt = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2: Pt = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    }
    return d;
  };
  const dt = dir(n - 1), wt = w[n - 1], k = wt * 0.7;
  const rl = R[n - 1], ll = L[n - 1];
  const d = `M${R[0][0].toFixed(1)} ${R[0][1].toFixed(1)}${curve(R)}`
    + ` C${(rl[0] + dt[0] * k).toFixed(1)} ${(rl[1] + dt[1] * k).toFixed(1)} ${(ll[0] + dt[0] * k).toFixed(1)} ${(ll[1] + dt[1] * k).toFixed(1)} ${ll[0].toFixed(1)} ${ll[1].toFixed(1)}`
    + curve([...L].reverse()) + " Z";
  return { d, tip: pts[n - 1], dt, wt };
};

/** a NAIL on a limb's tip: aligned with its last segment, its pale free edge toward the tip, a gloss */
const Nail: React.FC<{ tip: Pt; dt: Pt; wt: number; back?: number }> = ({ tip, dt, wt, back = 0.15 }) => {
  const a = (Math.atan2(dt[1], dt[0]) * 180) / Math.PI;
  const cx = tip[0] - dt[0] * wt * back, cy = tip[1] - dt[1] * wt * back;
  return (
    <g transform={`rotate(${a.toFixed(1)} ${cx.toFixed(1)} ${cy.toFixed(1)})`}>
      <ellipse cx={cx} cy={cy} rx={wt * 0.42} ry={wt * 0.3} fill={P.nail} />
      <ellipse cx={cx + wt * 0.24} cy={cy} rx={wt * 0.14} ry={wt * 0.26} fill={white(0.6)} />
      <ellipse cx={cx - wt * 0.05} cy={cy - wt * 0.12} rx={wt * 0.18} ry={wt * 0.06} fill={white(0.75)} />
    </g>
  );
};

/** the four curled fingers, index to little: knuckle → middle joint → tip; each a different width and reach */
const FINGERS: { pts: Pt[]; w: number[] }[] = [
  { pts: [[62, -38], [30, -44], [2, -42], [-26, -30]], w: [31, 31, 30, 25] },
  { pts: [[64, -11], [30, -15], [0, -14], [-31, -2]], w: [32, 32, 31, 26] },
  { pts: [[62, 15], [30, 13], [2, 15], [-26, 26]], w: [30, 30, 29, 24] },
  { pts: [[58, 39], [30, 39], [8, 42], [-14, 51]], w: [25, 25, 24, 20] },
];
const THUMB = limb([[110, -38], [94, -60], [62, -76], [24, -84], [-2, -80]], [34, 34, 32, 29, 26]);

/** ★★ RULE 49 (+ the user, same day: "even the shapes of the visuals should be altered to make them more realistic,
 *  especially the hand") — the HAND, built from its anatomy: the back of the hand from knuckles to a tapering wrist, four
 *  curled fingers of different widths and reaches (each bending at its joints, its pad rounded, a nail on its tip, a crease
 *  at the middle joint, a shadow where it presses on the finger below), a two-jointed thumb over the top, the shirt CUFF
 *  wrapping the wrist in a curve (its button, the buyer's name embroidered), and the suit sleeve opening over it. It grips
 *  at its local (0,0): the fingers curl to the LEFT over the thing held, the forearm runs off to the right (+x).
 *  `label` is embroidered on the cuff (tagged cuff / cuff.t: probe028 BRAND). */
export const Hand: React.FC<{ arm?: number; label?: string }> = ({ arm = 900, label }) => {
  const tg = useTag();
  const skin = P.skin;
  const fingers = FINGERS.map((fg) => ({ ...limb(fg.pts, fg.w), joint: fg.pts[2], d1: fg.pts[1] }));
  return (
    <g>
      {/* the fingers, little finger first so each one above overlaps it and throws its shadow on it */}
      {[3, 2, 1, 0].map((i) => {
        const fg = fingers[i];
        return (
          <g key={i}>
            <path d={fg.d} transform="translate(1 5)" fill={black(0.2)} />
            <Mat base={i % 2 ? skin : "#DDA884"} form="V"><path d={fg.d} /></Mat>
            {/* the crease across the middle joint and the soft fold above it */}
            <path d={`M${fg.joint[0] + 3} ${fg.joint[1] - 11} q-4 11 0 22`} fill="none" stroke={black(0.24)} strokeWidth={1.8} strokeLinecap="round" />
            <path d={`M${fg.d1[0] + 2} ${fg.d1[1] - 10} q-3 10 0 20`} fill="none" stroke={black(0.12)} strokeWidth={1.4} strokeLinecap="round" />
            <path d={`M${fg.joint[0] + 12} ${fg.joint[1] - 12} L${fg.d1[0]} ${fg.d1[1] - 12}`} stroke={white(0.22)} strokeWidth={2.4} strokeLinecap="round" />
            <Nail tip={fg.tip} dt={fg.dt} wt={fg.wt} />
          </g>
        );
      })}
      {/* the back of the hand, drawn OVER the fingers' roots: its knuckles bulge along its leading edge (each finger comes
          out from under its knuckle, as in a real grip), its top rises into the web of the thumb, it narrows to the wrist */}
      <Mat base={skin} form="V">
        <path d="M52 -52 C80 -66 104 -68 120 -58 C140 -50 162 -46 172 -38 L172 26 C172 36 166 42 156 46 C126 58 92 62 66 60 C58 60 52 54 54 46 C50 40 52 32 58 28 C52 22 52 8 58 2 C54 -4 54 -20 60 -24 C54 -30 52 -46 52 -52 Z" />
      </Mat>
      {/* tendons fanning from the knuckles to the wrist, the lit ridge of each knuckle */}
      <path d="M62 -38 C100 -36 136 -30 166 -22 M64 -12 C102 -10 138 -8 168 -6 M62 14 C100 14 136 12 166 10" fill="none" stroke={white(0.14)} strokeWidth={3} strokeLinecap="round" />
      {FINGERS.map((fg, i) => <ellipse key={i} cx={fg.pts[0][0] - 6} cy={fg.pts[0][1] - 4} rx={8} ry={6} fill={white(0.16)} />)}
      {/* the thumb, over the top of the grip */}
      <Mat base={skin} form="V"><path d={THUMB.d} /></Mat>
      <path d="M58 -86 q4 10 0 20" fill="none" stroke={black(0.2)} strokeWidth={1.8} strokeLinecap="round" />
      <path d="M104 -54 C92 -66 78 -74 60 -80" fill="none" stroke={white(0.2)} strokeWidth={3} strokeLinecap="round" />
      <Nail tip={THUMB.tip} dt={THUMB.dt} wt={THUMB.wt} back={0.2} />
      {/* the shirt cuff, wrapping the wrist: its front edge curves round the arm; its button, the buyer's name */}
      <g {...tg("cuff", "shape")}>
        <Mat base="#F5EFE7" form="V">
          <path d="M156 -62 C176 -64 260 -64 290 -62 L290 62 C260 64 176 64 156 62 C146 42 144 -42 156 -62 Z" />
        </Mat>
        <path d="M156 -62 C146 -42 146 42 156 62" fill="none" stroke={black(0.16)} strokeWidth={2.4} />
        <path d="M168 -58 C160 -38 160 38 168 58" fill="none" stroke={black(0.07)} strokeWidth={2} />
        <circle cx={178} cy={40} r={6} fill="#E6DED3" stroke={black(0.15)} strokeWidth={1} />
        <circle cx={176.5} cy={40} r={1.3} fill={black(0.4)} /><circle cx={179.5} cy={40} r={1.3} fill={black(0.4)} />
      </g>
      {label && <text {...tg("cuff.t", "text")} x={224} y={14} textAnchor="middle" fontFamily={ARCHIVO} fontWeight={800} fontSize={34}
        fill={P.ink} letterSpacing={1}>{label}</text>}
      {/* the suit sleeve: its opening curves round the cuff, its cloth folds along the forearm, its shadow falls on the cuff */}
      <path d="M272 -64 C262 -40 262 40 272 64 L292 64 L292 -64 Z" fill={black(0.14)} />
      <Mat base={P.cocoa} form="V">
        <path d={`M280 -76 C330 -82 ${arm * 0.6} -84 ${arm} -82 L${arm} 82 C${arm * 0.6} 84 330 80 280 76 C266 46 266 -46 280 -76 Z`} />
      </Mat>
      <path d={`M296 -50 C380 -58 470 -52 ${arm} -58 M330 48 C430 40 540 46 ${arm} 42 M360 -6 C420 -2 470 -8 520 -4`} fill="none" stroke={black(0.2)} strokeWidth={3} strokeLinecap="round" />
      <path d="M282 -72 C270 -44 270 44 282 72" fill="none" stroke={white(0.2)} strokeWidth={3} />
    </g>
  );
};

/** ★★ RULE 49 — a PRICE TAG of gold card (money): its notched end, a metal eyelet in its punched hole, an embossed border, its
 *  face turned by soft shading with grain in it, and the figure printed into it; `w` × `h`, its hole at local (18, h/2) */
export const PriceTag: React.FC<{ w: number; h: number; text: string; size?: number; tagId: string }> = ({ w, h, text, size = 34, tagId }) => {
  const tg = useTag();
  const body = `M0 ${h / 2} L${h / 2.4} 0 L${w - 10} 0 Q${w} 0 ${w} 10 L${w} ${h - 10} Q${w} ${h} ${w - 10} ${h} L${h / 2.4} ${h} Z`;
  return (
    <g>
      <path d={body} transform="translate(3 5)" fill={black(0.28)} />
      <Mat base="url(#mGold)"><path d={body} /></Mat>
      <path d={`M${h / 2.4 + 6} 6 L${w - 12} 6 Q${w - 6} 6 ${w - 6} 12 L${w - 6} ${h - 12} Q${w - 6} ${h - 6} ${w - 12} ${h - 6} L${h / 2.4 + 6} ${h - 6}`}
        fill="none" stroke={white(0.45)} strokeWidth={1.6} />
      <path d={body} fill="url(#mEdgeLit)" />
      <Eyelet x={20} y={h / 2} r={6.5} hole="rgba(28,18,12,0.9)" />
      <Engraved lip={1.4} dark={0.25} light={0.4}>
        <text {...tg(tagId, "text")} x={(w + h / 2.4) / 2 - 2} y={h / 2 + size * 0.36} textAnchor="middle" fontFamily={ARCHIVO} fontWeight={800}
          fontSize={size} fill={P.ink} letterSpacing={-0.3}>{text}</text>
      </Engraved>
    </g>
  );
};

/** ★ a GOLD COIN, side-on (an ellipse face over a short edge band) — money */
export const CoinSide: React.FC<{ rx?: number; ry?: number; t?: number }> = ({ rx = 66, ry = 18, t = 16 }) => (
  <g>
    <path d={`M${-rx} 0 L${-rx} ${t} A${rx} ${ry} 0 0 0 ${rx} ${t} L${rx} 0 Z`} fill={P.goldSh} />
    <ellipse cx={0} cy={0} rx={rx} ry={ry} fill={P.gold} />
    <ellipse cx={-rx * 0.25} cy={-ry * 0.2} rx={rx * 0.45} ry={ry * 0.32} fill={P.goldHi} opacity={0.55} />
  </g>
);

/** ★ HER — the supplied photo (public/kylie_cutout.png: "kylie jenner face.webp", cut out with isnet-general-use, its
 *  shoulders rounded so the source's straight side edges never show). Placed by her HEAD: `cx` is the screen x of the head's
 *  centre, `top` the screen y of the image's top, `D` its display width. The probe measures her SILHOUETTE (photo.ts bands,
 *  invisible boxes), never the square image. Until a photo exists, a flat faceless bust in the reference manner. */
export const HEAD = { top: 132, rx: 104 } as const;
export const photoK = (D: number) => D / PHOTO.w;
export const Her: React.FC<{ tagId: string; cx: number; top: number; D: number; opacity?: number }> = ({ tagId, cx, top, D, opacity = 1 }) => {
  const tg = useTag();
  const k = photoK(D), left = cx - PHOTO.cx * k;
  if (HAS_PHOTO) {
    return (
      <div style={{ position: "absolute", left, top, width: D, height: PHOTO.h * k, opacity }}>
        <Img src={staticFile(PHOTO_FILE)} style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }} />
        {PHOTO.bands.map(([y0, y1, x0, x1], i) => (
          <div key={i} {...tg(`${tagId}.b${i}`, "shape")} style={{ position: "absolute", left: x0 * k, top: y0 * k, width: (x1 - x0) * k, height: (y1 - y0) * k }} />
        ))}
      </div>
    );
  }
  // ★★ RULE 50: no faceless stand-in for a real person (it is the least real thing a frame can hold). Until her photo is
  //   supplied, the slot is simply empty; the photo is the only way she appears.
  if (!HAS_PHOTO) return null;
  const sc = D / 600, y = top + (PHOTO.top + 132) * k;
  return (
    <svg width={1080} height={1920} style={{ position: "absolute", left: 0, top: 0, overflow: "visible", opacity }}>
      <g transform={`translate(${cx} ${y}) scale(${sc})`}>
        <g {...tg(`${tagId}.body`, "shape")}>
          <path d="M-300 980 L-300 470 C-290 300 -170 222 -64 204 L64 204 C170 222 290 300 300 470 L300 980 Z" fill={P.nude} />
          <rect x={-52} y={92} width={104} height={130} rx={30} fill={P.nudeSh} />
        </g>
        <g {...tg(`${tagId}.head`, "shape")}><ellipse cx={0} cy={0} rx={HEAD.rx} ry={HEAD.top} fill={P.nude} /></g>
      </g>
    </svg>
  );
};

/** ★ the AVATAR TOKEN (rule 45.6: the third and last use of her photo): a small circle with an ink ring */
export const Avatar: React.FC<{ tagId: string; cx: number; cy: number; r: number; ground: Ground }> = ({ tagId, cx, cy, r, ground }) => {
  const tg = useTag();
  if (!HAS_PHOTO) return null;   // ★★ rule 50: no silhouette stand-in for her
  return (
    <div {...tg(tagId, "shape")} style={{
      position: "absolute", left: cx - r, top: cy - r, width: 2 * r, height: 2 * r, borderRadius: "50%", overflow: "hidden",
      background: P.blush, boxShadow: `0 0 0 ${Math.round(r * 0.09)}px ${P.ink}${ground === "dark" ? `, 0 0 0 ${Math.round(r * 0.09) + 4}px ${P.nude}` : ""}`,
    }}>
      {HAS_PHOTO ? (
        <Img src={staticFile(PHOTO_FILE)} style={{ position: "absolute", left: r - PHOTO.face.cx * (r / PHOTO.face.r), top: r - PHOTO.face.cy * (r / PHOTO.face.r), width: PHOTO.w * (r / PHOTO.face.r), height: PHOTO.h * (r / PHOTO.face.r) }} />
      ) : (
        <svg width={2 * r} height={2 * r} viewBox="-100 -100 200 200" style={{ position: "absolute", left: 0, top: 0 }}>
          <path d="M-90 120 C-86 60 -40 38 -16 34 L16 34 C40 38 86 60 90 120 Z" fill={P.clay} />
          <rect x={-14} y={6} width={28} height={34} rx={9} fill={P.claySh} />
          <ellipse cx={0} cy={-22} rx={30} ry={38} fill={P.clay} />
        </svg>
      )}
    </div>
  );
};
