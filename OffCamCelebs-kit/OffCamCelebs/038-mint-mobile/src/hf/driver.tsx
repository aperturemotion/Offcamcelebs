// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE DRIVER — HyperFrames time → the film's frame → every mounted layer, synchronously (the V34 HF pattern).
// HyperFrames dispatches `hf-seek` (detail.time = root time in seconds) on every seek, in Studio and in the render. Each
// layer host in index.html carries `data-film-layer`; on a seek the driver re-renders every host with Preact (render() is
// synchronous), then draws the frame's 3-D objects (three/stage.ts) into their canvases. Nothing reads a clock.
// ★ Each layer draws exactly its own frames [from, to) — never on a clip boundary's float (CLAUDE.md, V34 HF f3410).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { h, render } from "preact";
import { setFrame } from "../shim/remotion";
import { Layer, layerSpecs } from "./film";
import { beginFrame, endFrame, setLayer, loadFonts, loadImages } from "../three/stage";
/** ★ (032) photos printed INTO 3-D textures are decoded before the first frame; 033 prints none (kept for the next film) */
const HOOK_PHOTOS: string[] = [];
import { PHOTO_FILE, HAS_PHOTO } from "../audit/data";

const FPS = 30;
let lastKey = "";
const WINDOW = new Map(layerSpecs().map((l) => [l.id, l]));

const draw = (time: number) => {
  const f = Math.max(0, Math.round(time * FPS));
  const hosts = Array.from(document.querySelectorAll<HTMLElement>("[data-film-layer]"));
  const key = `${f}|${hosts.length}`;
  if (key === lastKey) return;
  lastKey = key;
  setFrame(f);
  beginFrame(f);
  for (const el of hosts) {
    const id = el.dataset.filmLayer!;
    const w = WINDOW.get(id);
    setLayer(id);
    render(!w || (f >= w.from && f < w.to) ? h(Layer, { id, f }) : null, el);
  }
  endFrame();
};

declare global {
  interface Window { __hfThreeTime?: number; __film?: { draw: (t: number) => void; frame: () => number } }
}

window.addEventListener("hf-seek", (e) => draw((e as CustomEvent<{ time: number }>).detail.time));
window.__film = { draw: (t: number) => { lastKey = ""; draw(t); }, frame: () => Math.round((window.__hfThreeTime ?? 0) * FPS) };

const first = () => draw(window.__hfThreeTime ?? 0);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", first);
else first();

// the faces must be loaded before the first frame (captions are laid out by their measured width, and print on the 3-D
// objects is painted into textures)
type HF = { buildReady?: Record<string, Promise<unknown>> };
const hf = ((window as unknown as { __hf?: HF }).__hf ??= {});
hf.buildReady ??= {};
hf.buildReady["film-fonts"] = Promise.all([
  loadFonts(),
  document.fonts.load('italic 300 60px "Archivo"'), document.fonts.load('800 60px "Archivo"'),
  document.fonts.load('700 40px "Archivo"'), document.fonts.load('600 40px "Archivo"'), document.fonts.load('500 40px "Archivo"'),
]).then(() => { lastKey = ""; draw(window.__hfThreeTime ?? 0); });
// ★ (032) the photos printed on the hook's front pages are decoded before the first frame too
hf.buildReady["film-page-photos"] = loadImages(HOOK_PHOTOS).then(() => { lastKey = ""; draw(window.__hfThreeTime ?? 0); });
// his photo must be decoded before the first frame too (a plain <img> drawn before it loads paints nothing — 021)
if (HAS_PHOTO) {
const photo = new Image();
photo.src = `assets/${PHOTO_FILE}`;   // data.ts names the supplied photo (a clone never edits the driver for it)
hf.buildReady["film-photo"] = photo.decode().catch(() => undefined).then(() => { lastKey = ""; draw(window.__hfThreeTime ?? 0); });
}
