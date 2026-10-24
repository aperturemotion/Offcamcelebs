// ★ HYPERFRAMES PORT: @remotion/layout-utils' measureText, as the captions use it (a word's advance width in its own face,
// size, weight, style and tracking), measured with a 2-D canvas in the browser. The plan (Node) never lays out a caption,
// so it never reaches this; if it did, it refuses rather than guessing a width.
type Opts = { text: string; fontFamily: string; fontSize: number; fontWeight?: string | number; fontStyle?: "normal" | "italic"; letterSpacing?: string };
let ctx: CanvasRenderingContext2D | null = null;
const cache = new Map<string, { width: number; height: number }>();

export const measureText = (o: Opts) => {
  const key = `${o.fontStyle ?? ""}|${o.fontWeight ?? ""}|${o.fontSize}|${o.fontFamily}|${o.letterSpacing ?? ""}|${o.text}`;
  const hit = cache.get(key);
  if (hit) return hit;
  if (typeof document === "undefined") throw new Error("measureText: no canvas outside the browser (the plan must not lay out captions)");
  ctx ??= document.createElement("canvas").getContext("2d")!;
  ctx.font = `${o.fontStyle === "italic" ? "italic " : ""}${o.fontWeight ?? 400} ${o.fontSize}px ${o.fontFamily}`;
  const ls = o.letterSpacing ? parseFloat(o.letterSpacing) : 0;
  const width = ctx.measureText(o.text).width + ls * o.text.length;
  const out = { width, height: o.fontSize };
  // a width measured before the face has loaded is the fallback face's: never cache it
  if (document.fonts.check(ctx.font)) cache.set(key, out);
  return out;
};
