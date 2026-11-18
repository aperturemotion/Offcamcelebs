import React from "react";
import { CUES } from "../audit/cues";
import type { SceneId } from "../audit/data";
import { ARCHIVO } from "../audit/fonts";
import { clamp01, SOFT } from "./tokens";
import { F, cueEnd } from "./time";
import { Obj, useTag } from "../audit/Probe";
import { Pass } from "./camera";
import { useContext } from "react";

// ═══════════════════════════════════════════════════════════════════════════
// ★★★ RULE P6 (THE PAYOUTS, 2026-11-18, after @moneydecoded.au) — THE TURN CARD.
// The picture cuts to black with a soft coloured glow, and the turn is two lines: a small white lead-in over ONE big
// bold-italic glowing word. The words land one by one on their spoken onsets. No object, no caption. The glow follows the
// meaning (amber: explain; red: the catch / the worst part; gold: a twist).
// A card is a PLACE of its own (its sentence is its only cue), entered and left by a `dip` hand-over (Film.tsx).
// The card's words are the TAKE's tokens: the last token is the big word, the rest the lead-in (so a re-take re-times it).
// ═══════════════════════════════════════════════════════════════════════════
export const CARD_LEAD = 64, CARD_BIG = 168, CARD_Y = 800, WORD_IN = 7;
const rgba = (hex: string, a: number) => `rgba(${parseInt(hex.slice(1, 3), 16)},${parseInt(hex.slice(3, 5), 16)},${parseInt(hex.slice(5, 7), 16)},${a})`;

export const cardWords = (id: SceneId) => {
  const c = CUES.find((x) => x.scene === id);
  if (!c?.w?.length) throw new Error(`turn card ${id}: its cue has no tokens`);
  return c.w.map(([t, a]) => ({ t, at: F(a) - 2 }));
};
/** the frame the card's last word is settled, and its own end */
export const cardDone = (id: SceneId) => cueEnd(id, 0) + 2;

export const TurnCard: React.FC<{ id: SceneId; f: number; glow: string }> = ({ id, f, glow }) => {
  const tg = useTag();
  const pass = useContext(Pass);
  const ws = cardWords(id);
  const big = ws[ws.length - 1], lead = ws.slice(0, -1);
  const pin = (at: number) => SOFT(clamp01((f - at) / WORD_IN));
  // the glow breathes up as the card arrives and swells a little when the big word lands
  const g0 = SOFT(clamp01((f - (ws[0].at - 6)) / 14)), g1 = pin(big.at);
  if (pass === "back") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: 0.55 * g0 + 0.45 * g1,
        background: `radial-gradient(ellipse 62% 30% at 50% 47%, ${rgba(glow, 0.5)} 0%, ${rgba(glow, 0.2)} 38%, ${rgba(glow, 0)} 72%)` }} />
    );
  }
  return (
    <Obj s={id} g="card">
      <div data-card="1" style={{ position: "absolute", inset: 0 }}>
        <div {...tg("card.lead", "text")} style={{ position: "absolute", left: 90, width: 900, top: CARD_Y, textAlign: "center", whiteSpace: "nowrap",
          fontFamily: ARCHIVO, fontWeight: 500, fontSize: CARD_LEAD, lineHeight: `${CARD_LEAD * 1.2}px`, color: "#FFFFFF", letterSpacing: "0.01em" }}>
          {lead.map((w, i) => {
            const p = pin(w.at);
            return <span key={i} style={{ display: "inline-block", marginLeft: i ? "0.3em" : 0, opacity: p, filter: p < 0.98 ? `blur(${(6 * (1 - p)).toFixed(2)}px)` : undefined }}>{w.t}</span>;
          })}
        </div>
        {/* the big word: Archivo 800 slanted by hand (no bold-italic face is shipped; a synthetic italic varies by build) */}
        <div {...tg("card.big", "text")} style={{ position: "absolute", left: 40, width: 1000, top: CARD_Y + CARD_LEAD * 1.2 + 26, textAlign: "center", whiteSpace: "nowrap",
          fontFamily: ARCHIVO, fontWeight: 800, fontSize: CARD_BIG, lineHeight: `${CARD_BIG * 1.1}px`, color: glow, letterSpacing: "-0.01em",
          opacity: g1, filter: g1 < 0.98 ? `blur(${(10 * (1 - g1)).toFixed(2)}px)` : undefined,
          textShadow: `0 0 18px ${rgba(glow, 0.75)}, 0 0 60px ${rgba(glow, 0.5)}, 0 0 130px ${rgba(glow, 0.35)}`,
          transform: "perspective(1200px) rotateX(0.15deg) skewX(-11deg)" }}>{big.t}</div>
      </div>
    </Obj>
  );
};
