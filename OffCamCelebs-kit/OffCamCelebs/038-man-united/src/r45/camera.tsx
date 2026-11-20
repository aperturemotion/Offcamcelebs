import React, { createContext, useContext } from "react";
import { clamp01, lerp, SETTLE, type Ground } from "./tokens";

// ═══════════════════════════════════════════════════════════════════════════
// ★★★★ RULE 46 — THE VIEWPOINT TRAVELS (user, 2026-10-07, 027: "it's supposed to feel like the place that they're
// watching the visuals from is changing, not just the visuals themselves … Look at past 100bps videos as examples").
// Each set is a PLACE larger than the frame, drawn in WORLD coordinates (the frame's own 1080 × 1920 is the camera's home
// view). The camera travels between the sentences' objects on 100bps' `Cam` keys (Style 3 V33 `aim(x, y), z, dur, io`):
//   · a key puts world point (x, y) at the frame centre at zoom z, moving there from the previous key over `dur` frames
//     on the in-out curve; keys NEVER overlap (asserted: two concurrent eases compose into a lurch — Style 3 rule (e));
//   · between keys only a slow creep of the zoom across the set (the brief's push-in). ★★ RULE 50 (2026-10-08): the
//     100bps `Plx` drift (unrelated sines, ±6 px x, ±4 px y) is GONE. The human-made references' camera is dead still
//     between moves (rule 40.5, measured: "NO drift, breathing, shake or Ken Burns"); a camera that floats for ever is
//     one of the marks of a computed, AI-made film;
//   · ★★★★★ RULE 51 (2026-10-09: "stop adding so many AI generated vector art backgrounds"): NO drawn room, wall, desk or
//     street behind the objects. A place is the references' plain ground; what shows the camera travelling is the objects
//     themselves and the place's LIGHT, soft pools fixed in the world behind its objects (`Light`, below).
// The pan rides the OUTER, genuinely 3-D layer (sub-pixel compositing); the zoom is a plain 2-D scale INSIDE it, painted at
// its zoomed size (026: a zoom inside the perspective transform stretches a 1× raster).
// ═══════════════════════════════════════════════════════════════════════════
/** `drift`: ★★ (the user, 2026-10-13, 031: "Add more camera movement when focusing on a single asset for a long time … zoom
 *  in out or closer … or zoom in and track the text. Use this for all videos") a long, slow push or track across a hold: one
 *  symmetric in-out from rest to rest over its whole run (no snap), and no whoosh (score.ts skips it) */
export type CamKey = { at: number; x: number; y: number; z: number; dur: number; drift?: boolean };
/** ★★ rule 50: an in-place camera move SNAPS then settles (SETTLE: t50 0.26, still from rest to rest, rule 48), as the
 *  references' pushes, zooms and lifts do (t50 0.19–0.25). The long hand-over trucks keep TRAVEL (Film.tsx). */
export const IO = SETTLE;
/** a drift key's curve: a sine in-out, its speed zero at both ends and at most π/2 of the mean in the middle */
export const DRIFT = (t: number) => 0.5 - 0.5 * Math.cos(Math.PI * clamp01(t));
export const HOME = { x: 540, y: 960 } as const;

export const checkKeys = (name: string, keys: CamKey[]) => {
  // ★ rule 48: a key needs room to ease in and out — ≥ 30 f, and ≥ 40 f for a travel of 400 px or more
  for (let i = 1; i < keys.length; i++) {
    const k = keys[i], a = keys[i - 1], travel = Math.hypot(k.x - a.x, k.y - a.y);
    const min = travel >= 400 ? 40 : 30;
    if (k.dur < min) throw new Error(`camera ${name}: key ${i} (f${k.at}) travels ${Math.round(travel)} px in ${k.dur} f — rule 48 wants ≥ ${min} f`);
  }
  for (let i = 2; i < keys.length; i++)
    if (keys[i].at < keys[i - 1].at + keys[i - 1].dur)
      throw new Error(`camera ${name}: key ${i} (f${keys[i].at}) starts before key ${i - 1} ends (f${keys[i - 1].at + keys[i - 1].dur}) — camera keys never overlap`);
  return keys;
};
/** ★★★★ THE LIVING, FOLLOW-THROUGH CAMERA (the user, 2026-10-23, 034: "The camera should sort of feel alive without trying
 *  too hard. Sort of like a breathing motion, like zoom in, zoom out here, zoom in there… in different directions"; the
 *  preferences file, L7). `story` holds the set's own keys: key 0 the CLOSE entry on its first object, then the
 *  follow-through moves (pull out, travel to the next object, push in) on the words that name them. `alive` fills every gap
 *  between them, and the tail up to `until`, with BREATHS: drift keys of 45–80 f, each a different direction and size
 *  (zoom ×0.95–1.07 of its anchor, 18–55 px of travel), eased rest to rest and chained, so the camera never freezes and never
 *  loops. Each breath is a small excursion about the last story key's framing, never a wander away from it. Deterministic. */
export const alive = (name: string, story: CamKey[], until: number, o: { amp?: number; seed?: number } = {}) => {
  const amp = o.amp ?? 1, seed = o.seed ?? name.length * 7.3;
  const rnd = (i: number, j: number) => { const s = Math.sin(i * 127.1 + j * 311.7 + seed * 74.7) * 43758.5453; return s - Math.floor(s); };
  const out: CamKey[] = [story[0]];
  let n = 0;
  const breathe = (anchor: CamKey, from: number, to: number) => {
    let t = from;
    while (to - t >= 45) {
      const left = to - t;
      // a breath is 45–80 f; the last one in a gap takes the remainder when less than two would fit
      let dur = Math.round(45 + 35 * rnd(n, 1));
      if (left - dur < 45) dur = left;
      const ang = rnd(n, 2) * Math.PI * 2, dist = (18 + 37 * rnd(n, 3)) * amp;
      // alternate in and out, so it reads as breathing (in, out, in…), each by a different amount
      const zf = 1 + (n % 2 === 0 ? 1 : -0.7) * (0.03 + 0.04 * rnd(n, 4)) * amp;
      out.push({ at: t, x: anchor.x + Math.cos(ang) * dist, y: anchor.y + Math.sin(ang) * dist * 0.7, z: anchor.z * zf, dur, drift: true });
      t += dur; n++;
    }
  };
  for (let i = 1; i < story.length; i++) {
    const prev = out.length === 1 ? story[0] : story[i - 1];
    const gapFrom = i === 1 ? Math.max(0, story[0].at < 0 ? 0 : story[0].at + story[0].dur) : story[i - 1].at + story[i - 1].dur;
    breathe(prev, gapFrom, story[i].at - 1);
    out.push(story[i]);
  }
  const last = story[story.length - 1];
  breathe(last, story.length > 1 ? last.at + last.dur : 0, until);
  return checkKeys(name, out);
};
/** the camera's view at f: key 0 is where the set opens; each later key eases from the previous key's target */
export const camView = (keys: CamKey[], f: number) => {
  // DEBUG (scratchpad/sweep029.mjs CAM=…): a close look at any part of a settled place, never set in the film
  const ov = (globalThis as unknown as { __camOverride?: { x: number; y: number; z: number } }).__camOverride;
  if (ov) return ov;
  let v = { x: keys[0].x, y: keys[0].y, z: keys[0].z };
  for (let i = 1; i < keys.length; i++) {
    const k = keys[i];
    if (f <= k.at) break;
    const t = (k.drift ? DRIFT : IO)(clamp01((f - k.at) / k.dur)), a = keys[i - 1];
    v = { x: lerp(a.x, k.x, t), y: lerp(a.y, k.y, t), z: Math.exp(lerp(Math.log(a.z), Math.log(k.z), t)) };
  }
  return v;
};
export const camMoving = (keys: CamKey[], f: number) => keys.some((k, i) => i > 0 && f > k.at && f < k.at + k.dur);

/** ★ the hand-over moving this place (from Film.tsx): its translate, and its far wall's opacity — a place's far wall rides
 *  at 0.4 of the move (it counters 0.6 of it), and the old wall is gone before the new one shows */
export const HandOver = createContext<{ tx: number; ty: number; far: number; floor: number }>({ tx: 0, ty: 0, far: 1, floor: 1 });
/** the set's on-screen window (from Film.tsx), for the creep */
export const SetWindow = createContext<{ from: number; to: number }>({ from: 0, to: 1 });
/** ★ the two passes a place is drawn in (Film.tsx): its ARCHITECTURE (far wall, floor) for every place on screen first, then
 *  its OBJECTS — so during a hand-over no place's wall or floor is ever painted over the other place's objects */
export const Pass = createContext<"back" | "front">("front");
// ★★ RULE 50: no creep. The references' held shots are locked off (scale 1.0000, 0 px shift); 028's brief frees the style
const CREEP = 0;

/** the screen transform of a layer at parallax depth p (1 = the objects' own plane) */
const layerTf = (keys: CamKey[], f: number, win: { from: number; to: number }, p: number) => {
  const v = camView(keys, f);
  const creep = 1 + CREEP * clamp01((f - win.from) / Math.max(1, win.to - win.from));
  const z = 1 + (v.z * creep - 1) * p;
  const x = HOME.x + (v.x - HOME.x) * p, y = HOME.y + (v.y - HOME.y) * p;
  return { z, tx: HOME.x - x * z, ty: HOME.y - y * z };
};
const Layer: React.FC<{ tf: { z: number; tx: number; ty: number }; moving: boolean; children: React.ReactNode }> = ({ tf, moving, children }) => (
  <div data-moving={moving ? "1" : undefined} style={{ position: "absolute", inset: 0,
    transform: `translate(540px, 960px) perspective(1800px) rotateX(0.15deg) translate(-540px, -960px) translate(${tf.tx.toFixed(3)}px, ${tf.ty.toFixed(3)}px)` }}>
    <div style={{ position: "absolute", left: 0, top: 0, width: 1080, height: 1920, transformOrigin: "0 0", transform: `scale(${tf.z.toFixed(5)})` }}>
      {children}
    </div>
  </div>
);

/** the set's world, seen through its camera */
export const World: React.FC<{ keys: CamKey[]; f: number; children: React.ReactNode }> = ({ keys, f, children }) => {
  const win = useContext(SetWindow);
  if (useContext(Pass) !== "front") return null;
  return <Layer tf={layerTf(keys, f, win, 1)} moving={camMoving(keys, f)}>{children}</Layer>;
};
/** ★ 031 (the user, 2026-10-13: "Add background assets like trees and a busy street in some scenes … make sure they have a
 *  parallax effect and the layers using that parallax effect"): a BACKGROUND LAYER at parallax depth p (< 1: it travels less
 *  than the objects as the camera moves through the place, the further the less). Drawn in the back pass, under every
 *  place's objects, and gone across a hand-over's switch as the light is (one place's background never sits on the other's
 *  ground). Its children are laid out in this layer's own px (the frame's 1080 × 1920 is its home view). */
export const Back: React.FC<{ keys: CamKey[]; f: number; p: number; o?: number; children: React.ReactNode }> = ({ keys, f, p, o = 1, children }) => {
  const win = useContext(SetWindow);
  const ho = useContext(HandOver);
  const op = ho.floor * o;
  if (useContext(Pass) !== "back" || op <= 0.002) return null;
  return (
    <div style={{ position: "absolute", inset: 0, opacity: op < 0.999 ? op : undefined }}>
      <Layer tf={layerTf(keys, f, win, p)} moving={camMoving(keys, f)}>{children}</Layer>
    </div>
  );
};

/** ★ 031 (the user, 2026-10-13: "Change colour background to burgundy red with a grid outline"): a fine GRID drawn on the
 *  dark ground, fixed in the place's world a little behind its objects (parallax p), strongest round the objects and fading
 *  out softly toward the frame's edges (an ellipse cx, cy, rx, ry in world px). Back pass, gone across a hand-over's switch
 *  with the light. */
export const Grid: React.FC<{ id: string; keys: CamKey[]; f: number; cx: number; cy: number; rx: number; ry: number; p?: number; pitch?: number; o?: number }> =
  ({ id, keys, f, cx, cy, rx, ry, p = 0.86, pitch = 96, o = 1 }) => {
  const win = useContext(SetWindow);
  const ho = useContext(HandOver);
  const op = ho.floor * o;
  if (useContext(Pass) !== "back" || op <= 0.002) return null;
  // the grid's own extent: the ellipse's box, snapped to whole cells about its centre (so a line runs through cx, cy)
  const nx = Math.ceil(rx / pitch), ny = Math.ceil(ry / pitch);
  const x0 = cx - nx * pitch, y0 = cy - ny * pitch, w = 2 * nx * pitch, h = 2 * ny * pitch;
  const lines: string[] = [];
  for (let i = 0; i <= 2 * nx; i++) lines.push(`M${x0 + i * pitch} ${y0}V${y0 + h}`);
  for (let j = 0; j <= 2 * ny; j++) lines.push(`M${x0} ${y0 + j * pitch}H${x0 + w}`);
  return (
    <div style={{ position: "absolute", inset: 0, opacity: op < 0.999 ? op : undefined }}>
      <Layer tf={layerTf(keys, f, win, p)} moving={false}>
        <svg width={1080} height={1920} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          <defs>
            <radialGradient id={`gridfade-${id}`} gradientUnits="userSpaceOnUse" cx={cx} cy={cy} r={rx} gradientTransform={`translate(${cx} ${cy}) scale(1 ${ry / rx}) translate(${-cx} ${-cy})`}>
              <stop offset="0" stopColor="#fff" stopOpacity="1" />
              <stop offset="0.55" stopColor="#fff" stopOpacity="0.8" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <mask id={`gridmask-${id}`} maskUnits="userSpaceOnUse" x={x0 - 4} y={y0 - 4} width={w + 8} height={h + 8}>
              <rect x={x0 - 4} y={y0 - 4} width={w + 8} height={h + 8} fill={`url(#gridfade-${id})`} />
            </mask>
          </defs>
          <path d={lines.join("")} stroke="#F4C9CF" strokeOpacity={0.16} strokeWidth={1.6} fill="none" mask={`url(#gridmask-${id})`} />
        </svg>
      </Layer>
    </div>
  );
};

/** ★★★★★ RULE 51 — a place's LIGHT: soft pools fixed in the world behind its objects, on the plain ground (no wall, no desk,
 *  no texture: the user, 2026-10-09). They travel with the camera, so an in-place move still reads as the viewpoint moving
 *  (rule 46). Like the old architecture they are drawn in the back pass and are gone across a hand-over's switch, so one
 *  place's light never crosses the other place's objects. `pools`: [cx, cy, rx, ry] in world coordinates */
export const Light: React.FC<{ keys: CamKey[]; f: number; ground: Ground | "warm"; pools: [number, number, number, number][]; o?: number }> = ({ keys, f, ground, pools, o = 1 }) => {
  const win = useContext(SetWindow);
  const ho = useContext(HandOver);
  if (useContext(Pass) !== "back" || ho.floor <= 0.002) return null;
  const fill = ground === "dark" ? "url(#mPoolDark)" : "url(#mPoolCream)";
  return (
    <div style={{ position: "absolute", inset: 0, opacity: ho.floor * o < 0.999 ? ho.floor * o : undefined }}>
      <Layer tf={layerTf(keys, f, win, 1)} moving={false}>
        <svg width={1080} height={1920} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          {pools.map(([cx, cy, rx, ry], i) => <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} />)}
        </svg>
      </Layer>
    </div>
  );
};
