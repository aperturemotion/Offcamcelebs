import React from "react";
import { measureText } from "@remotion/layout-utils";
import { BLOCKS, type Block, type BWord } from "./blocks";
import { CUES } from "../audit/cues";
import type { SceneId } from "../audit/data";
import { ARCHIVO } from "../audit/fonts";
import { inkOn, clamp01, ARRIVE, SETTLE, SOFT, type Ground } from "./tokens";
import { F } from "./time";
import { Obj, useTag } from "../audit/Probe";

// ═══════════════════════════════════════════════════════════════════════════
// ★★★ RULE 45.4 — THE CAPTION, THE SIGNATURE OF THE REFERENCES.
//   · words appear ONE AT A TIME on their spoken onset: opacity 0→1, blur 8 px→0, y +10 px→0 over 5 frames;
//   · shown words stay until the beat ends; the beat clears in 4 frames, ending where the next beat's first word begins;
//   · two weights of Archivo: Light Italic 300 (≥ 58 px; here 62) for connective words, ExtraBold 800 (100–120 px; here
//     110, fitted down to ≥ 100) for key words and numbers, on their own line; ≤ 2 lines a beat;
//   · ink on cream, cream on dark; no box, outline or bar; the block lives in y 330–640, left, centre or right, x 90–950.
// ★ (026, still standing) a beat belongs to its SET: it is drawn inside that set's panel, so a push carries it away with
//   its scene, and a set's LAST beat does not clear — it leaves with the set.
// ═══════════════════════════════════════════════════════════════════════════
export const IT = 62, BOLD = 110, BOLD_MIN = 100;
const IT_LH = 1.22, BOLD_LH = 1.0, LINE_GAP = 4;
const X0 = 90, X1 = 950, CX = (X0 + X1) / 2;
export const BAND = { y0: 330, y1: 640 } as const;
const BOLD_TRACK = -0.01;
// ★ rule 48: a word arrives from rest and settles (7 f on ARRIVE, it was 5 f on a quad ease-out: full speed on its first
//   frame), and a beat clears on an eased 6-f fade (it was a linear 4 f)
// ★★ RULE 50: a word blurs and fades in over 10 f and NEVER MOVES (the references' words never rise: style-a fades 8 f,
//   style-b blurs and fades ~15 f), on SETTLE
export const WORD_IN = 10, BEAT_OUT = 6;

export type Align = "left" | "centre" | "right";

const wordW = (w: BWord, size: number) => measureText({
  text: w.t, fontFamily: ARCHIVO, fontSize: size, fontWeight: w.bold ? "800" : "300",
  letterSpacing: w.bold ? `${BOLD_TRACK * size}px` : undefined, ...(w.bold ? {} : { fontStyle: "italic" as const }),
} as Parameters<typeof measureText>[0]).width;
const SPACE = 0.27;   // a word space, in em of the word's own size

type Laid = { words: BWord[]; bold: number; w: number; h: number; x0: number; top: number; hasBold: boolean };

/** lay a beat out: sizes, widths, alignment, the top of each line (screen px) */
export const layout = (b: Block, align: Align): Laid[] => {
  const lines = b.lines.map((ws) => {
    const hasBold = ws.some((x) => x.bold);
    const width = (bs: number) => ws.reduce((s, w, i) => s + wordW(w, w.bold ? bs : IT) + (i ? SPACE * (w.bold ? bs : IT) : 0), 0);
    let bold = BOLD;
    let w = width(bold);
    if (w > X1 - X0) { bold = Math.max(BOLD_MIN, Math.floor((bold * (X1 - X0)) / w)); w = width(bold); }
    const h = hasBold ? bold * BOLD_LH : IT * IT_LH;
    return { words: ws, bold, w, h, x0: 0, top: 0, hasBold };
  });
  const total = lines.reduce((s, l) => s + l.h, 0) + LINE_GAP * (lines.length - 1);
  let y = (BAND.y0 + BAND.y1) / 2 - total / 2;
  for (const l of lines) {
    l.x0 = align === "left" ? X0 : align === "right" ? X1 - l.w : CX - l.w / 2;
    l.top = y;
    y += l.h + LINE_GAP;
  }
  return lines;
};

/** the first word of the film is already building on frame 0 (rule 45.11: the hook is mid-motion) */
// the word starts 2 f before its onset (it was 1): with the soft start it is half in on the spoken onset
const leadOf = (w: BWord) => (w.a < 0.05 ? 4 : 2);
const EASE = SETTLE;
export const wordP = (f: number, w: BWord) => EASE(clamp01((f - (F(w.a) - leadOf(w))) / WORD_IN));
/** the frame a beat starts to reveal */
export const beatStart = (i: number) => F(BLOCKS[i].a) - leadOf(BLOCKS[i].lines[0][0]);
const sceneOfBeat = (i: number) => CUES[BLOCKS[i].cue].scene;
/** a beat's opacity: 1, then 1→0 (eased) over the BEAT_OUT frames before the next beat (of the same set) starts */
const beatOp = (f: number, i: number) => {
  const nx = BLOCKS[i + 1];
  if (!nx || sceneOfBeat(i + 1) !== sceneOfBeat(i)) return 1;
  const end = beatStart(i + 1);
  return 1 - SOFT(clamp01((f - (end - BEAT_OUT)) / BEAT_OUT));
};
/** the beat a set shows at frame f: the latest of ITS beats whose first word has begun */
export const beatOf = (scene: SceneId, f: number) => {
  for (let i = BLOCKS.length - 1; i >= 0; i--) if (sceneOfBeat(i) === scene && f >= beatStart(i)) return i;
  return -1;
};

export const Caption: React.FC<{ scene: SceneId; f: number; ground: Ground; align: (i: number) => Align }> = ({ scene, f, ground, align }) => {
  const i = beatOf(scene, f);
  if (i < 0) return null;
  const op = beatOp(f, i);
  if (op <= 0.001) return null;
  return <Obj s={scene} g="caption"><Beat f={f} i={i} ground={ground} align={align(i)} op={op} /></Obj>;
};

const Beat: React.FC<{ f: number; i: number; ground: Ground; align: Align; op: number }> = ({ f, i, ground, align, op }) => {
  const tg = useTag();
  const b = BLOCKS[i];
  const lines = layout(b, align);
  const ink = inkOn(ground);
  return (
    // ★ data-cap: the violation sweep (sweep029.mjs viol) reads the words' boxes and hides the captions to see the objects alone
    <div data-cap="1" style={{ position: "absolute", inset: 0, opacity: op < 0.999 ? op : undefined, pointerEvents: "none" }}>
      {lines.map((l, k) => {
        // objWords: the bold words are the SCENE's to draw (the amber verdict word) — kept in the layout, never painted here
        const shown = l.words.filter((w) => !(b.objWords && w.bold));
        if (!shown.length) return null;
        return (
          <div key={k} {...tg(`cap.${k}`, "cap")} style={{
            position: "absolute", left: l.x0, top: l.top, height: l.h, whiteSpace: "nowrap", color: ink, textAlign: "center",
            lineHeight: `${l.h}px`, fontFamily: ARCHIVO, fontSize: l.hasBold ? l.bold : IT,
            fontWeight: l.hasBold ? 800 : 300, fontStyle: l.hasBold ? "normal" : "italic",
          }}>
            {l.words.map((w, j) => {
              const size = w.bold ? l.bold : IT;
              const p = b.objWords && w.bold ? 0 : wordP(f, w);
              const blur = 8 * (1 - p);
              return (
                // ★ the rise runs in a genuine 3-D layer kept on at rest (a flat translate steps to whole pixels; 023)
                <span key={j} style={{
                  display: "inline-block", marginLeft: j ? SPACE * size : 0, fontSize: size,
                  fontWeight: w.bold ? 800 : 300, fontStyle: w.bold ? "normal" : "italic",
                  letterSpacing: w.bold ? `${BOLD_TRACK}em` : undefined, verticalAlign: "baseline",
                  opacity: p, filter: blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : undefined,
                  transform: "perspective(1200px) rotateX(0.15deg)",
                }}>{w.t}</span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
