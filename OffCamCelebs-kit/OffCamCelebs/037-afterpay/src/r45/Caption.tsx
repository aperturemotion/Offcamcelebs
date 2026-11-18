import React from "react";
import { BLOCKS, type BWord } from "./blocks";
import { CUES } from "../audit/cues";
import type { SceneId } from "../audit/data";
import { ARCHIVO } from "../audit/fonts";
import { clamp01, SOFT, type Ground } from "./tokens";
import { F } from "./time";
import { Obj, useTag } from "../audit/Probe";

// ═══════════════════════════════════════════════════════════════════════════
// ★★★ THE CAPTION (THE PAYOUTS; study rule R28, measured on five references 2026-11-18): ONE PHRASE, SMALL, PLAIN, FIXED.
//   · one phrase of 1–4 words at a time (the sentence's words, breaking at punctuation);
//   · colour #e9e2e1, Archivo 500, 30 px, centred, its top 275 px down (14.3% of the frame); it never moves;
//   · a phrase SWAPS in on its first word's spoken onset in 1–2 frames (no fade-up, no tiers, no box);
//   · a TURN CARD carries its own words: its place shows no caption.
// SIZE and Y are the two constants to turn (the references measure 27–33 px and y 266–282 at 1080 wide).
// ═══════════════════════════════════════════════════════════════════════════
export const CAP_SIZE = 30, CAP_Y = 275, CAP_WEIGHT = 500, CAP_COLOR = "#e9e2e1";
export const CAP_IN = 2, CAP_LEAD = 1;
/** places whose words are drawn by the place itself (the turn cards) */
export const NO_CAPTION: ReadonlySet<SceneId> = new Set<SceneId>(["explain", "catch"]);
/** ★ kept for the sweeps and old imports: the band the caption lives in */
export const BAND = { y0: CAP_Y - 10, y1: CAP_Y + CAP_SIZE * 1.3 } as const;
export type Align = "left" | "centre" | "right";

export type Chunk = { text: string; a: number; cue: number; scene: SceneId };
const ENDS = /[,.:;!?]$/;
/** a sentence's words → phrases of 2–4 words: a phrase closes at punctuation once it holds 2 words, or at 4; a lone last
 *  word joins the phrase before it */
const chunkWords = (ws: BWord[]) => {
  const out: BWord[][] = [];
  let cur: BWord[] = [];
  ws.forEach((w, i) => {
    cur.push(w);
    const left = ws.length - 1 - i;
    if (left === 0 || ((cur.length >= 4 || (cur.length >= 2 && ENDS.test(w.t))) && left !== 1)) { out.push(cur); cur = []; }
  });
  return out;
};
export const CHUNKS: Chunk[] = BLOCKS.flatMap((b) => {
  const scene = CUES[b.cue].scene;
  return chunkWords(b.lines.flat()).map((ws) => ({ text: ws.map((w) => w.t).join(" "), a: ws[0].a, cue: b.cue, scene }));
});
const startOf = (c: Chunk) => F(c.a) - CAP_LEAD;
/** the frame a beat starts to reveal (kept for Film.tsx's checks) */
export const beatStart = (i: number) => F(BLOCKS[i].a) - CAP_LEAD;
/** the phrase a set shows at frame f: the latest of ITS phrases whose first word has begun */
export const chunkOf = (scene: SceneId, f: number) => {
  for (let i = CHUNKS.length - 1; i >= 0; i--) if (CHUNKS[i].scene === scene && f >= startOf(CHUNKS[i])) return i;
  return -1;
};

export const Caption: React.FC<{ scene: SceneId; f: number; ground: Ground; align: (i: number) => Align }> = ({ scene, f }) => {
  const tg = useTag();
  if (NO_CAPTION.has(scene)) return null;
  const i = chunkOf(scene, f);
  if (i < 0) return null;
  const p = SOFT(clamp01((f - startOf(CHUNKS[i])) / CAP_IN));
  return (
    <Obj s={scene} g="caption">
      {/* ★ data-cap: the sweeps read the words' boxes and hide the captions to see the objects alone */}
      <div data-cap="1" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div {...tg("cap.0", "cap")} style={{
          position: "absolute", left: 90, width: 860, top: CAP_Y, height: CAP_SIZE * 1.25, lineHeight: `${CAP_SIZE * 1.25}px`,
          textAlign: "center", whiteSpace: "nowrap", color: CAP_COLOR, fontFamily: ARCHIVO, fontSize: CAP_SIZE, fontWeight: CAP_WEIGHT,
          letterSpacing: "0.005em", opacity: p < 0.999 ? p : undefined, textShadow: "0 0 2px rgba(0,0,0,0.95), 0 0 5px rgba(0,0,0,0.85), 0 1px 12px rgba(0,0,0,0.7), 0 0 26px rgba(0,0,0,0.45)",
          transform: "perspective(1200px) rotateX(0.15deg)",
        }}>{CHUNKS[i].text}</div>
      </div>
    </Obj>
  );
};
