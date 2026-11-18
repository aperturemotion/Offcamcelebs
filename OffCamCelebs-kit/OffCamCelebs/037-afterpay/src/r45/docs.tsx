import React from "react";
import { P } from "./tokens";
import { white, black } from "./mat";
import { Solid, Prism, Decal, Cast, rect, mixC, type V2, type V3 } from "./solid";

// ═══════════════════════════════════════════════════════════════════════════
// ★★ RULE 49 — 029's PAPER KIT. The film is told through documents, so each one is its own real format and they never
// read alike: a government notice (ruled boxes), a court petition (pleading paper: numbered lines, the double rule), a
// complaint stapled to its blue backing sheet, a lawyer's letterhead on laid paper, a manila case folder. Every sheet is a
// 3-D slab in perspective with its cast shadow (rule 52; no grain, rule 51). ★ RULE 47: type that is not meant to be read is
// drawn as LINES OF TYPE (bars), never lorem text.
// ═══════════════════════════════════════════════════════════════════════════

/** ★★★★★ RULE 52 — a SHEET in 3-D: a thin slab whose thickness shows at its edge, turned a few degrees so it reads as real
 *  paper in perspective (narrower where it leans away), its shadow cast behind it. Its print is a DECAL: the children are
 *  drawn in WORLD coordinates, exactly as a flat sheet's print was, and mapped onto its face. `tag` marks the sheet itself
 *  for the probe. Pivot: the sheet's centre. */
export const Sheet: React.FC<{
  x: number; y: number; w: number; h: number; c?: string; edge?: string; t?: number;
  yaw?: number; pitch?: number; roll?: number; lift?: number; shape?: V2[]; tag?: Record<string, unknown>; children?: React.ReactNode;
}> = ({ x, y, w, h, c = P.white, edge, t = 3, yaw = -6, pitch = 9, roll = 0, lift = 1, shape, tag, children }) => {
  const prof = (shape ?? rect(x, y, w, h)).map(([px, py]) => [px - x - w / 2, py - y - h / 2] as V2);
  return (
    <Solid view={{ x: x + w / 2, y: y + h / 2, yaw, pitch, roll }}>
      <Cast pts={prof.map(([px, py]) => [px, py, -t] as V3)} dx={7 * lift} dy={12 * lift} o={0.42} />
      <g {...tag}><Prism prof={prof} z1={-t} c={c} cs={edge ?? mixC(c, "#8C7F6E", 0.35)} mat="paper" /></g>
      <Decal o={[-w / 2, -h / 2, 0.1]} w={w} h={h}><g transform={`translate(${-x} ${-y})`}>{children}</g></Decal>
    </Solid>
  );
};

/** lines of type: bars of ink of varied lengths (the words are not for reading) */
export const TypeLines: React.FC<{ x: number; y: number; w: number; n: number; gap?: number; h?: number; o?: number; seed?: number }> = ({
  x, y, w, n, gap = 26, h = 6, o = 0.24, seed = 0,
}) => (
  <g>
    {Array.from({ length: n }, (_, i) => {
      const k = (i * 7 + seed * 13) % 10;
      const len = i === n - 1 ? w * 0.55 : w * (0.82 + 0.018 * k);
      return <rect key={i} x={x} y={y + i * gap} width={Math.min(w, len)} height={h} rx={h / 2} fill={black(o)} />;
    })}
  </g>
);

/** a highlighter stroke, drawn left to right with `p`, its edges ragged as a felt tip leaves them */
export const Highlight: React.FC<{ x: number; y: number; w: number; h: number; p: number; c?: string }> = ({ x, y, w, h, p, c = "#F4D34A" }) =>
  p > 0.002 ? (
    // ⚠ no mix-blend-mode: a compositing mode on a moving layer is the class that went stale in 028's render
    <path d={`M${x} ${y + 2} q${(w * p) / 2} -3 ${w * p} 0 l0 ${h - 4} q${(-w * p) / 2} 3 ${-w * p} 0 Z`} fill={c} opacity={0.6} />
  ) : null;

/** a staple through the top-left corner */
export const Staple: React.FC<{ x: number; y: number; a?: number }> = ({ x, y, a = -32 }) => (
  <g transform={`rotate(${a} ${x} ${y})`}>
    <rect x={x - 15} y={y - 2.5} width={30} height={5} rx={2.5} fill="url(#mChrome)" />
    <rect x={x - 15} y={y - 2.5} width={30} height={1.5} rx={0.75} fill={white(0.6)} />
  </g>
);

/** a red rubber-stamp IMPRESSION: double rule, worn where the paper took it unevenly (the kit's mWorn mask) */
export const Impression: React.FC<{ cx: number; cy: number; w: number; h: number; rot: number; c?: string; children?: React.ReactNode }> = ({
  cx, cy, w, h, rot, c = P.red, children,
}) => (
  <g transform={`rotate(${rot} ${cx} ${cy})`}>
    <g mask="url(#mWorn)">
      <rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={14} fill="none" stroke={c} strokeWidth={9} />
      <rect x={cx - w / 2 + 13} y={cy - h / 2 + 13} width={w - 26} height={h - 26} rx={8} fill="none" stroke={c} strokeWidth={2.4} />
      {children}
    </g>
  </g>
);
