import React from "react";
import { staticFile, frameUid } from "remotion";

// ═══════════════════════════════════════════════════════════════════════════
// ★★★★★ RULE 49 — OBJECTS AS REAL AS THE REFERENCES (user, 2026-10-08: "They are far more realistic than these are …
// I mean the details or realism"). The MATERIAL KIT every object is built from, instead of rule 45's base + one shade:
//   · FORM: shading overlays in WHITE and BLACK at low alpha (objectBoundingBox), so one gradient turns ANY base colour —
//     a top-lit block (V), a side-lit block (H / Hr), a dome (pans, bulbs, coins), a bowl (pressed powder), a cylinder
//     (a rail, a handle), glass streaks;
//   · CONTACT SHADOWS and GLOWS as radial gradients (no CSS or SVG filter anywhere: a filter is pixel-aligned and jitters
//     on anything that moves — CLAUDE.md, sub-pixel motion);
//   · a WORN-INK mask for rubber stamps (a real impression's unevenness, not a surface texture).
// ★★★★★ RULE 51 (user, 2026-10-09: "What is that wood texture? That doesn't make the video look more realistic. I need you
// to sharpen up the visuals, make them more realistic, and stop adding so many AI generated vector art backgrounds"): the
// grain speckle inside objects, the fibre streaks and the wood / plaster / cork surface tiles are GONE. They read as noise
// laid over a flat shape, never as material. Realism is the object's construction, its form shading and its light; the
// only grain is the frame's own static paper grain (art.tsx GroundFill). Every id is global (one <MatDefs/> in Film.tsx).
// ═══════════════════════════════════════════════════════════════════════════

const W = (a: number) => `rgba(255,252,246,${a})`;
const K = (a: number) => `rgba(24,14,8,${a})`;
type Stop = [number, string];
const Lin: React.FC<{ id: string; x2?: number; y2?: number; x1?: number; y1?: number; stops: Stop[] }> = ({ id, x1 = 0, y1 = 0, x2 = 0, y2 = 1, stops }) => (
  <linearGradient id={id} x1={x1} y1={y1} x2={x2} y2={y2}>
    {stops.map(([o, c], i) => <stop key={i} offset={o} stopColor={c} />)}
  </linearGradient>
);
const Rad: React.FC<{ id: string; cx?: number; cy?: number; r?: number; fx?: number; fy?: number; stops: Stop[] }> = ({ id, cx = 0.5, cy = 0.5, r = 0.5, fx, fy, stops }) => (
  <radialGradient id={id} cx={cx} cy={cy} r={r} fx={fx ?? cx} fy={fy ?? cy}>
    {stops.map(([o, c], i) => <stop key={i} offset={o} stopColor={c} />)}
  </radialGradient>
);

export const MatDefs: React.FC = () => (
  <svg width={0} height={0} style={{ position: "absolute", left: 0, top: 0 }} aria-hidden>
    <defs>
      {/* ── form overlays (white/black at low alpha over any base) ── */}
      <Lin id="mV" stops={[[0, W(0.3)], [0.42, W(0)], [0.7, K(0)], [1, K(0.24)]]} />
      <Lin id="mVsoft" stops={[[0, W(0.16)], [0.5, W(0)], [1, K(0.14)]]} />
      <Lin id="mH" x2={1} y2={0} stops={[[0, W(0.22)], [0.45, W(0)], [0.75, K(0)], [1, K(0.22)]]} />
      <Lin id="mHr" x2={1} y2={0} stops={[[0, K(0.22)], [0.25, K(0)], [0.55, W(0)], [1, W(0.2)]]} />
      <Rad id="mDome" cx={0.42} cy={0.4} r={0.62} fx={0.34} fy={0.3} stops={[[0, W(0.42)], [0.42, W(0.06)], [0.78, K(0.06)], [1, K(0.3)]]} />
      <Rad id="mBowl" cx={0.55} cy={0.6} r={0.62} fx={0.62} fy={0.7} stops={[[0, W(0.24)], [0.55, W(0)], [0.85, K(0.12)], [1, K(0.32)]]} />
      <Lin id="mCylH" stops={[[0, K(0.32)], [0.18, W(0.05)], [0.32, W(0.55)], [0.46, W(0.08)], [0.78, K(0.16)], [0.9, W(0.12)], [1, K(0.35)]]} />
      <Lin id="mCylV" x2={1} y2={0} stops={[[0, K(0.3)], [0.2, W(0.06)], [0.34, W(0.42)], [0.5, W(0.04)], [0.82, K(0.18)], [1, K(0.38)]]} />
      <Lin id="mGlass" x1={0} y1={0} x2={1} y2={1} stops={[[0, W(0.0)], [0.2, W(0.0)], [0.26, W(0.32)], [0.34, W(0.04)], [0.4, W(0.0)], [0.55, W(0.0)], [0.6, W(0.2)], [0.64, W(0.0)], [1, W(0.0)]]} />
      <Lin id="mEdgeLit" stops={[[0, W(0.5)], [0.12, W(0)], [1, W(0)]]} />
      {/* ── gold, rose gold, chrome, brass (full materials, not overlays) ── */}
      <Lin id="mGold" stops={[[0, "#FFE7A0"], [0.28, "#F5C842"], [0.62, "#E0A92A"], [1, "#B9841A"]]} />
      <Lin id="mGoldSide" stops={[[0, "#D8A22A"], [1, "#9C6B14"]]} />
      <Lin id="mGoldTop" stops={[[0, "#FFF0BE"], [1, "#F3CB55"]]} />
      <Lin id="mRose" stops={[[0, "#F2B3B9"], [0.3, "#D98892"], [0.65, "#C46F7B"], [1, "#9E4F5B"]]} />
      <Lin id="mRoseSide" stops={[[0, "#B8616D"], [1, "#82404A"]]} />
      <Lin id="mRoseTop" stops={[[0, "#FAD3D6"], [1, "#E2A0A8"]]} />
      <Lin id="mChrome" stops={[[0, "#8E7D73"], [0.2, "#E9E1DA"], [0.36, "#FFFFFF"], [0.5, "#CFC3BA"], [0.78, "#8A786D"], [0.9, "#BFB0A5"], [1, "#6E5D53"]]} />
      <Lin id="mBrass" stops={[[0, "#F6DC8E"], [0.35, "#DDB24C"], [0.7, "#BE8E2E"], [1, "#94681C"]]} />
      <Rad id="mScrew" cx={0.4} cy={0.35} r={0.7} stops={[[0, "#F4EDE6"], [0.5, "#B7A99F"], [1, "#6F6158"]]} />
      {/* ── lights ── */}
      <Rad id="mBulbOn" cx={0.45} cy={0.42} r={0.55} stops={[[0, "#FFFFF4"], [0.35, "#FFF2B8"], [0.7, "#F8D464"], [1, "#D8A230"]]} />
      <Rad id="mBulbOff" cx={0.4} cy={0.36} r={0.62} stops={[[0, "#8C7A6C"], [0.45, "#5B4A3E"], [1, "#3A2C23"]]} />
      <Rad id="mGlowGold" stops={[[0, "rgba(255,226,140,0.55)"], [0.45, "rgba(255,210,110,0.18)"], [1, "rgba(255,200,100,0)"]]} />
      <Rad id="mGlowWarm" stops={[[0, "rgba(255,236,214,0.42)"], [0.5, "rgba(255,226,196,0.12)"], [1, "rgba(255,220,190,0)"]]} />
      {/* ★ rule 51: a place's light on the plain ground (camera.tsx Light), soft to nothing at its rim */}
      <Rad id="mPoolDark" stops={[[0, "rgba(255,222,186,0.15)"], [0.45, "rgba(255,214,176,0.07)"], [1, "rgba(255,210,170,0)"]]} />
      <Rad id="mPoolCream" stops={[[0, "rgba(255,255,255,0.62)"], [0.5, "rgba(255,255,255,0.22)"], [1, "rgba(255,255,255,0)"]]} />
      {/* ── shadows ── */}
      <Rad id="mShadow" stops={[[0, K(0.42)], [0.55, K(0.16)], [1, K(0)]]} />
      <Rad id="mShadowSoft" stops={[[0, K(0.22)], [0.6, K(0.08)], [1, K(0)]]} />
      <Lin id="mShadeDown" stops={[[0, K(0.32)], [1, K(0)]]} />
      {/* ── the stamp's worn ink (rule 51: the only tile left; no surface textures) ── */}
      <pattern id="mWornPat" patternUnits="userSpaceOnUse" width={256} height={256}>
        <image href={staticFile("tex_worn.png")} width={256} height={256} />
      </pattern>
      <mask id="mWorn" maskUnits="userSpaceOnUse" x={-4000} y={-4000} width={12000} height={12000}>
        <rect x={-4000} y={-4000} width={12000} height={12000} fill="url(#mWornPat)" />
      </mask>
    </defs>
  </svg>
);

export type Form = "V" | "Vsoft" | "H" | "Hr" | "Dome" | "Bowl" | "CylH" | "CylV" | "Glass" | "EdgeLit";
/** ★ one SOLID part: its base fill and its form overlay(s) — clones of ONE shape, so the shading can never leave its
 *  outline. ★ rule 51: no grain or fibre inside it (clean, sharp fills) */
export const Mat: React.FC<{ base: string; form?: Form | Form[]; children: React.ReactElement }> = ({ base, form, children }) => {
  const forms = form ? (Array.isArray(form) ? form : [form]) : [];
  const el = children as React.ReactElement<Record<string, unknown>>;
  return (
    <g>
      {React.cloneElement(el, { fill: base })}
      {forms.map((fm) => React.cloneElement(el, { key: fm, fill: `url(#m${fm})` }))}
    </g>
  );
};

/** a soft CONTACT SHADOW under an object: an ellipse of shade, darkest at its centre */
export const Shadow: React.FC<{ cx: number; cy: number; rx: number; ry: number; o?: number; soft?: boolean }> = ({ cx, cy, rx, ry, o = 1, soft }) => (
  <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={soft ? "url(#mShadowSoft)" : "url(#mShadow)"} opacity={o} />
);

/** a slotted SCREW head */
export const Screw: React.FC<{ x: number; y: number; r?: number; a?: number }> = ({ x, y, r = 9, a = 30 }) => (
  <g>
    <circle cx={x + 0.8} cy={y + 1.4} r={r} fill={K(0.3)} />
    <circle cx={x} cy={y} r={r} fill="url(#mScrew)" />
    <rect x={x - r * 0.72} y={y - 1.4} width={r * 1.44} height={2.8} rx={1.2} fill={K(0.55)} transform={`rotate(${a} ${x} ${y})`} />
  </g>
);

/** a metal EYELET round a punched hole (tags, cards) */
export const Eyelet: React.FC<{ x: number; y: number; r?: number; hole: string }> = ({ x, y, r = 11, hole }) => (
  <g>
    <circle cx={x} cy={y} r={r + 5} fill="url(#mChrome)" />
    <circle cx={x} cy={y} r={r + 5} fill="none" stroke={K(0.25)} strokeWidth={1.2} />
    <circle cx={x} cy={y} r={r} fill={hole} />
    <path d={`M${x - r} ${y} A${r} ${r} 0 0 1 ${x + r} ${y}`} fill="none" stroke={K(0.45)} strokeWidth={3} />
  </g>
);

/** a twisted CORD between two points, sagging by `sag`: a dark core and a lit twist */
export const Cord: React.FC<{ x1: number; y1: number; x2: number; y2: number; sag?: number; c?: string; w?: number }> = ({ x1, y1, x2, y2, sag = 0, c = "#6B4A3A", w = 4 }) => {
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 + sag;
  const d = `M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`;
  return (
    <g fill="none" strokeLinecap="round">
      <path d={d} stroke={c} strokeWidth={w} />
      <path d={d} stroke={W(0.35)} strokeWidth={w * 0.4} strokeDasharray={`${w * 0.9} ${w * 1.1}`} />
    </g>
  );
};

/** an ENGRAVED / DEBOSSED text: a dark cut above, the lit lower lip below, the face over both */
export const Engraved: React.FC<{ children: React.ReactElement; lip?: number; dark?: number; light?: number }> = ({ children, lip = 1.6, dark = 0.4, light = 0.35 }) => {
  const el = children as React.ReactElement<Record<string, unknown>>;
  const p = el.props as { x?: number; y?: number };
  // the two lips are the SAME words: they keep `data-kind="text"` (so the probe counts them as covered text) but no
  // `data-el` (so it measures the word once, by its face)
  const bare = Object.fromEntries(Object.entries(el.props).filter(([k]) => !/^data-(el|scene|grp)$/.test(k)));
  const lipOf = (dy: number, fill: string, key: string) => React.createElement(el.type as string, { ...bare, key, y: (p.y ?? 0) + dy, fill, "data-kind": "text" });
  return (
    <g>
      {lipOf(lip, W(light), "l")}
      {lipOf(-lip * 0.6, K(dark), "d")}
      {el}
    </g>
  );
};


/** the same words, untagged for measurement (no data-el) but still counted as covered text (data-kind="text") */
const bareText = (el: React.ReactElement<Record<string, unknown>>, extra: Record<string, unknown>, key: string) => {
  const bare = Object.fromEntries(Object.entries(el.props).filter(([k]) => !/^data-(el|scene|grp)$/.test(k)));
  return React.createElement(el.type as string, { ...bare, key, ...extra, "data-kind": "text" });
};

/** ★ RAISED letters: a figure or a name with real DEPTH — `depth` stacked copies in the side colour, stepping down-right,
 *  a dark contact edge, then the face (a gradient or a colour) */
export const Extruded: React.FC<{ children: React.ReactElement; depth?: number; side: string; dx?: number; dy?: number }> = ({
  children, depth = 6, side, dx = 0.35, dy = 1,
}) => {
  const el = children as React.ReactElement<Record<string, unknown>>;
  const p = el.props as { x?: number; y?: number; fill?: string; fontSize?: number };
  const x = p.x ?? 0, y = p.y ?? 0;
  // ★★ 028 (user, 2026-10-08: "the text in the first two scenes is messed up in the render"): SVG TEXT FILLED WITH A PAINT
  //   SERVER (a gradient or a pattern) went STALE in the sequential render. The hook's gold figures kept frame 0's camera
  //   transform for the whole shot, drawn ~25 px off and larger than their own depth layers, while fresh stills were always
  //   right (seqcmp028.py: 23 hook frames differed, nothing else). So no text here is ever filled with url(…): the words
  //   become a CLIP, and a plain rect carries the gradient through it. The rect spans the line's em box (a
  //   vertical gradient keyed to it reads as the face's own light), wide enough for any figure.
  const id = frameUid();   // ★ HF port: Preact's useId repeats across layers (shim/remotion.tsx)
  const face = p.fill ?? "#000";
  const fs = p.fontSize ?? 100;
  const box = { x: x - fs * 4, y: y - fs * 0.78, width: fs * 8, height: fs * 0.86 };
  const clipText = bareText(el, { fill: "#000" }, "c");
  const isPaint = face.startsWith("url(");
  return (
    <g>
      {bareText(el, { x: x + dx * (depth + 3), y: y + dy * (depth + 3), fill: K(0.28) }, "sh")}
      {Array.from({ length: depth }, (_, i) => bareText(el, { x: x + dx * (depth - i), y: y + dy * (depth - i), fill: side }, `d${i}`))}
      <clipPath id={`xc${id}`}>{clipText}</clipPath>
      {/* the measured face (data-el kept) stays as the probe's text; it is drawn solid, then the paint goes over it */}
      {React.cloneElement(el, { fill: isPaint ? side : face })}
      {isPaint && <g clipPath={`url(#xc${id})`}><rect {...box} fill={face} /></g>}
    </g>
  );
};

/** a GUILLOCHE border (a certificate's engraved frame): a band of interlaced sine strands round a rectangle */
export const Guilloche: React.FC<{ x0: number; y0: number; x1: number; y1: number; c: string; amp?: number; period?: number; strands?: number; w?: number }> = ({
  x0, y0, x1, y1, c, amp = 5, period = 22, strands = 3, w = 1.3,
}) => {
  const side = (ax: number, ay: number, bx: number, by: number, ph: number) => {
    const len = Math.hypot(bx - ax, by - ay), nx = -(by - ay) / len, ny = (bx - ax) / len, n = Math.max(2, Math.round(len / 4));
    let d = "";
    for (let i = 0; i <= n; i++) {
      const t = i / n, o = amp * Math.sin((t * len * 2 * Math.PI) / period + ph);
      d += `${i ? "L" : "M"}${(ax + (bx - ax) * t + nx * o).toFixed(1)} ${(ay + (by - ay) * t + ny * o).toFixed(1)}`;
    }
    return d;
  };
  const paths: string[] = [];
  for (let k = 0; k < strands; k++) {
    const ph = (k * 2 * Math.PI) / strands;
    paths.push(side(x0, y0, x1, y0, ph), side(x1, y0, x1, y1, ph), side(x1, y1, x0, y1, ph), side(x0, y1, x0, y0, ph));
  }
  return <g fill="none" stroke={c} strokeWidth={w} opacity={0.75}>{paths.map((d, i) => <path key={i} d={d} />)}</g>;
};

/** a PUSH-PIN: a domed plastic head, its collar, and the shadow it throws on the board */
export const Pin: React.FC<{ x: number; y: number; c: string; r?: number }> = ({ x, y, c, r = 14 }) => (
  <g>
    <ellipse cx={x + r * 0.7} cy={y + r * 0.9} rx={r * 0.9} ry={r * 0.55} fill={K(0.22)} />
    <circle cx={x} cy={y} r={r} fill={c} />
    <circle cx={x} cy={y} r={r} fill="url(#mDome)" />
    <circle cx={x - r * 0.35} cy={y - r * 0.38} r={r * 0.28} fill={W(0.75)} />
  </g>
);

/** a CHAIN of oval links from (x1,y1) to (x2,y2) — alternate links seen face-on and edge-on */
export const Chain: React.FC<{ x1: number; y1: number; x2: number; y2: number; link?: number }> = ({ x1, y1, x2, y2, link = 14 }) => {
  const len = Math.hypot(x2 - x1, y2 - y1), n = Math.max(1, Math.floor(len / (link * 0.8))), a = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const t = (i + 0.5) / n, cx = x1 + (x2 - x1) * t, cy = y1 + (y2 - y1) * t;
        return i % 2
          ? <rect key={i} x={cx - link * 0.55} y={cy - 1.6} width={link * 1.1} height={3.2} rx={1.6} fill="url(#mChrome)" transform={`rotate(${a} ${cx} ${cy})`} />
          : <ellipse key={i} cx={cx} cy={cy} rx={link * 0.55} ry={link * 0.3} fill="none" stroke="url(#mChrome)" strokeWidth={2.6} transform={`rotate(${a} ${cx} ${cy})`} />;
      })}
    </g>
  );
};

/** a soft WALL SHADOW behind a mounted object (a sign, a plaque): two offset rounded rects, the outer fainter */
export const WallShadow: React.FC<{ x: number; y: number; w: number; h: number; rx?: number; dx?: number; dy?: number; o?: number }> = ({ x, y, w, h, rx = 24, dx = 10, dy = 18, o = 1 }) => (
  <g opacity={o}>
    <rect x={x + dx - 8} y={y + dy - 6} width={w + 16} height={h + 14} rx={rx + 8} fill={K(0.06)} />
    <rect x={x + dx - 3} y={y + dy - 2} width={w + 6} height={h + 5} rx={rx + 3} fill={K(0.08)} />
    <rect x={x + dx} y={y + dy} width={w} height={h} rx={rx} fill={K(0.1)} />
  </g>
);

export const white = W, black = K;

