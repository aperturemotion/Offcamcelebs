import React from "react";
import { AbsoluteFill } from "remotion";
import { buildScore } from "./score";
import { MUSIC_GAIN, TOTAL_FRAMES, type SceneId } from "../audit/data";
import { BED_ENV } from "../audit/bedenv";
import { Obj } from "../audit/Probe";
import { P, clamp01, TRAVEL, INOUT, SOFT, type Ground } from "./tokens";
import { GroundFill } from "./art";
import { MatDefs } from "./mat";
import { SetWindow, HandOver, Pass } from "./camera";
import { Caption, type Align } from "./Caption";
import { cue } from "./time";
import { HO } from "./handover";
import { BLOCKS } from "./blocks";
import { CUES } from "../audit/cues";
import { F } from "./time";
import { HookSet, HK_DONE } from "./sets/hook";
import { ExplainSet, EX_DONE } from "./sets/explain";
import { DealSet, DL_DONE } from "./sets/deal";
import { PriceSet, PR_DONE } from "./sets/price";
import { CatchSet, CT_DONE } from "./sets/catch";
import { CloseSet, CL_DONE } from "./sets/close";
import { FairSet, FA_DONE } from "./sets/fair";
import { VerdictSet } from "./sets/verdict";

// ═══════════════════════════════════════════════════════════════════════════
// ★ 037 — THE FILM: eight places in THE PAYOUTS' black studio (preferences, rules P1–P10): six object places and two
// turn cards. Inside a place the objects stay and act on each sentence, and the camera travels through it (camera.tsx).
// THE HAND-OVERS:
//   · TRUCK — the camera travels sideways: both places ride ONE curve, a frame-width apart; the camera yaws ±7° into the
//     move and backs off ~8% at its middle (the depth arc);
//   · CRANE — the camera rises or descends 2000 px (a frame's height and a gap), pitching ±5°, with the same arc;
//   · DIP — into and out of a turn card: the leaving place fades to black, the arriving one fades up, no travel (P6).
// Trucks and cranes run on the expo shape (handover.ts; Timur's pick, 2026-11-15) and start and end at rest. The ground is
// one black surface for the whole film, so no edge of a place is ever seen. No two consecutive trucks or cranes share type
// and direction. A place may not start to leave while a beat it carries is spoken.
// ═══════════════════════════════════════════════════════════════════════════
type Tr =
  | { kind: "truck"; dir: "L" | "R"; gap?: number; peak?: number }   // the direction the CAMERA travels; gap: extra travel
                                                          //   (px) where a place reaches past its own frame edge
  | { kind: "crane"; dir: "up" | "down"; peak?: number }
  // ★ 037 (rule P6): a DIP — into and out of a turn card. No travel: the leaving place fades to the black studio over the
  //   first half, the arriving one fades up over the second. Both places are the same black ground, so nothing else shows.
  | { kind: "dip" };
// peak: frames from the camera's fastest frame to the PICTURE's (where the whoosh peaks), MEASURED by whooshsync028.py on
// the every-frame render — a pale place arriving under a dark one leaving makes the picture's busiest moment come early
type SetProps = { f: number };
type SetDef = {
  id: SceneId; ground: Ground | "warm"; Comp: React.FC<SetProps>; align: (i: number) => Align; focus: [number, number];
  /** the earliest switch (4 f after the set's first word) and the frame the set's own last action is settled */
  at: number; done: number; tr?: Tr;
  /** ★ 031 (the user: "slight screen shake" on "the stock jumps"): a jolt of the whole place (its objects and its captions) */
  shake?: (f: number) => { x: number; y: number };
};
export const TRUCK_DUR = HO.truck, CRANE_DUR = HO.crane, CRANE = 2000, DIP_DUR = 16;
const durOf = (tr: Tr) => (tr.kind === "truck" ? TRUCK_DUR : tr.kind === "crane" ? CRANE_DUR : DIP_DUR);   // ★ the shape: handover.ts (2026-11-15)
// ★★ RULE 54b (user, 2026-10-10: "ensure that none of the visuals just appear on screen before they have to… the corner of
//   the visual for the next scene snaps on screen… the corner of a visual is still visible and just vanishes"). A place is
//   seen ONLY through its own move: each place is bounded by a soft FRAME MASK that rides with the hand-over. On a side that
//   faces the other place of a move, it ends halfway across the gap between the two frames, fading over the gap's outer
//   half (never inside the frame, so nothing is dimmed at rest). So on a window's first frame the arriving place is wholly
//   beyond the frame's edge, and on its last the leaving one is, and nothing snaps on or vanishes. A truck's gap is at least
//   two feathers; a crane travels a frame's height and its own gap (1600 px left the leaving frame's last 320 px on screen).
export const FEATHER_T = 70, FEATHER_C = 40;
const OPEN = 1400;   // a side that faces no move: open (a camera's yaw or arc may show a little past the frame)
const gapOf = (tr: Tr) => (tr.kind === "truck" ? Math.max(tr.gap ?? 0, 2 * FEATHER_T) : tr.kind === "crane" ? CRANE - 1920 : 0);
const YAW = 7, PITCH = 5, ARC = 0.08;
export const DISSOLVE = 26;
const prog = (f: number, a: number, b: number) => clamp01((f - a) / (b - a));
const PIVOT = { x: 540, y: 960 };

// ★ a card arrives BEFORE its first word (it is up when the voice turns), and so does the place after it
const CARD_PRE = 8;
const DEFS: SetDef[] = [
  { ...HookSet, at: 0, done: HK_DONE },
  { ...ExplainSet, at: cue("explain", 0) - CARD_PRE, done: EX_DONE, tr: { kind: "dip" } },
  { ...DealSet, at: cue("deal", 0) - CARD_PRE, done: DL_DONE, tr: { kind: "dip" } },
  // ★ ONE WORLD: trucks and cranes alternate (no two consecutive moves alike); each place is bounded by its frame mask
  { ...PriceSet, at: cue("price", 0) + 4, done: PR_DONE, tr: { kind: "truck", dir: "R", gap: 300 } },
  { ...CatchSet, at: cue("catch", 0) - CARD_PRE, done: CT_DONE, tr: { kind: "dip" } },
  { ...CloseSet, at: cue("close", 0) - CARD_PRE, done: CL_DONE, tr: { kind: "dip" } },
  { ...FairSet, at: cue("fair", 0) + 4, done: FA_DONE, tr: { kind: "crane", dir: "down" } },
  { ...VerdictSet, at: cue("verdict", 0) + 4, done: TOTAL_FRAMES, tr: { kind: "truck", dir: "R", gap: 300 } },
];
const groundOf = (g: Ground | "warm"): Ground => (g === "dark" ? "dark" : "cream");

/** frames from a hand-over's first movement to its switch, and after it that it still moves the arriving set */
const lead = (tr?: Tr) => (!tr ? 0 : durOf(tr) / 2);
const tail = lead;
const beatEnds = BLOCKS.map((b) => F(b.lines.flat().at(-1)!.a));
/** ★ the switch frames, IN ORDER: a switch waits for the leaving set's last action, for its own arrival to be done before
 *  the next hand-over moves it again, and for the last word of any beat the leaving set is still speaking */
export const SHOTS = (() => {
  const out: (SetDef & { t0: number })[] = [];
  DEFS.forEach((d, i) => {
    if (i === 0) { out.push({ ...d, t0: 0 }); return; }
    const prev = out[i - 1], ld = lead(d.tr);
    let t0 = Math.ceil(Math.max(d.at, prev.done + ld, prev.t0 + tail(prev.tr) + ld));
    for (let guard = 0; guard < 20; guard++) {
      const late = BLOCKS.map((b, j) => ({ b, j })).filter(({ b, j }) => CUES[b.cue].scene === prev.id && F(b.a) < t0 - ld && beatEnds[j] >= t0 - ld);
      if (!late.length) break;
      t0 = Math.max(...late.map(({ j }) => beatEnds[j])) + 2 + ld;
    }
    out.push({ ...d, t0 });
  });
  // ★ no two consecutive hand-overs share both type and direction
  for (let i = 2; i < out.length; i++) {
    const a = out[i - 1].tr, b = out[i].tr;
    if (a && b && a.kind !== "dip" && b.kind !== "dip" && a.kind === b.kind && a.dir === b.dir)
      throw new Error(`027 Film: hand-overs into ${out[i - 1].id} and ${out[i].id} are the same move`);
  }
  return out;
})();
export const leadOf = lead, tailOf = tail;
const arrivalStart = (k: number) => (k === 0 ? 0 : SHOTS[k].t0 - lead(SHOTS[k].tr));
/** each set's span on screen: from its arrival's first movement to the end of the next hand-over's move of it */
export const WINDOWS = SHOTS.map((s, k) => {
  const nx = SHOTS[k + 1];
  const to = !nx ? TOTAL_FRAMES : nx.t0 + tail(nx.tr);
  return { id: s.id, from: arrivalStart(k), to };
});
// ★ the captions: a beat belongs to its sentence's set; it must not start before its set begins to arrive
{
  const bad = BLOCKS.map((b, j) => ({ b, j })).filter(({ b }) => { const k = SHOTS.findIndex((s) => s.id === CUES[b.cue].scene); return F(b.a) < arrivalStart(k) - 1; });
  if (bad.length) throw new Error(`027 Film: ${bad.length} caption beat(s) start before their set arrives (first: beat ${bad[0].j})`);
}
export const shotAt = (f: number) => { let i = 0; for (let k = 0; k < SHOTS.length; k++) if (f >= SHOTS[k].t0) i = k; return i; };

/** one place's pose at f: the move's translate and zoom (about ox, oy), its opacity, the CAMERA's yaw / pitch / depth arc
 *  (about the frame centre, the same for both places of a move), and its far wall's opacity */
export type Stage = { k: number; tx: number; ty: number; sc: number; ox: number; oy: number; op: number; yaw: number; pitch: number; arc: number; far: number; floor: number; moving: boolean };
const span = (tr: Tr) => (tr.kind === "truck" ? 1080 + gapOf(tr) : tr.kind === "crane" ? CRANE : 0);
/** ★★ RULE 54b: place k's frame mask, in its own frame's px: its outer limits and its feathers (see FEATHER_T) */
export const frameOf = (k: number) => {
  const m = { l: -OPEN, r: 1080 + OPEN, t: -OPEN, b: 1920 + OPEN, fl: 0, fr: 0, ft: 0, fb: 0 };
  const face = (tr: Tr | undefined, arriving: boolean) => {
    if (!tr || tr.kind === "dip") return;   // a dip moves nothing: the frame stays open
    const g = gapOf(tr) / 2;
    if (tr.kind === "truck") {
      // the camera travels right: the arriving place lies to the right (its LEFT side faces the move), the leaving one's RIGHT
      if ((tr.dir === "R") === arriving) { m.l = -g; m.fl = FEATHER_T; } else { m.r = 1080 + g; m.fr = FEATHER_T; }
    } else {
      // the camera descends: the arriving place lies below (its TOP faces the move), the leaving one's BOTTOM
      if ((tr.dir === "down") === arriving) { m.t = -g; m.ft = FEATHER_C; } else { m.b = 1920 + g; m.fb = FEATHER_C; }
    }
  };
  face(SHOTS[k].tr, true);
  face(SHOTS[k + 1]?.tr, false);
  return m;
};
const FRAMES = SHOTS.map((_, k) => frameOf(k));
const maskCss = (m: ReturnType<typeof frameOf>) => {
  const W = m.r - m.l, H = m.b - m.t;
  const gx = `linear-gradient(to right, transparent 0px, #000 ${m.fl}px, #000 ${W - m.fr}px, transparent ${W}px)`;
  const gy = `linear-gradient(to bottom, transparent 0px, #000 ${m.ft}px, #000 ${H - m.fb}px, transparent ${H}px)`;
  return { maskImage: `${gx}, ${gy}`, WebkitMaskImage: `${gx}, ${gy}`, maskComposite: "intersect", WebkitMaskComposite: "source-in",
    maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskSize: `${W}px ${H}px`, WebkitMaskSize: `${W}px ${H}px` };
};
export const stageOf = (k: number, f: number): Stage => {
  const shot = SHOTS[k], nx = SHOTS[k + 1];
  const st: Stage = { k, tx: 0, ty: 0, sc: 1, ox: PIVOT.x, oy: PIVOT.y, op: 1, yaw: 0, pitch: 0, arc: 1, far: 1, floor: 1, moving: false };
  // ── arriving ──
  const tr = shot.tr;
  if (k > 0 && tr) {
    const D = durOf(tr), a = shot.t0 - D / 2, b = shot.t0 + D / 2;
    if (tr.kind === "dip") {
      if (f < b) { const w = SOFT(prog(f, shot.t0, b)); st.op *= w; st.far *= w; st.floor *= w; st.moving = f >= a; }
    } else if (f < b) {
      const q = HO.curve(prog(f, a, b)), sn = Math.sin(Math.PI * q);
      st.sc *= 1 + (HO.landZoom - 1) * (1 - q);   // ★ glidePush: the place settles in from closer as it lands
      if (tr.kind === "truck") { const s = tr.dir === "R" ? 1 : -1; st.tx += s * span(tr) * (1 - q); st.yaw += -s * YAW * sn; }
      else { const s = tr.dir === "down" ? 1 : -1; st.ty += s * CRANE * (1 - q); st.pitch += s * PITCH * sn; }
      // ★ the wall AND the floor: both places are on screen, so each one's architecture shows only on its own half,
      //   faded on an eased curve (rule 48: a linear fade starts and stops at speed)
      const w = SOFT(prog(f, shot.t0, b));
      st.arc *= 1 - ARC * sn; st.far *= w; st.floor *= w; st.moving = f >= a;
    }
  }
  // ── leaving ──
  const nt = nx?.tr;
  if (nx && nt) {
    const D = durOf(nt), a = nx.t0 - D / 2, b = nx.t0 + D / 2;
    if (nt.kind === "dip") {
      if (f >= a) { const w = 1 - SOFT(prog(f, a, nx.t0)); st.op *= w; st.far *= w; st.floor *= w; st.moving = true; }
    } else if (f >= a) {
      const p = HO.curve(prog(f, a, b)), sn = Math.sin(Math.PI * p);
      st.sc *= 1 + (HO.leaveZoom - 1) * p;
      if (nt.kind === "truck") { const s = nt.dir === "R" ? 1 : -1; st.tx -= s * span(nt) * p; st.yaw += -s * YAW * sn; }
      else { const s = nt.dir === "down" ? 1 : -1; st.ty -= s * CRANE * p; st.pitch += s * PITCH * sn; }
      const w = 1 - SOFT(prog(f, a, nx.t0));
      st.arc *= 1 - ARC * sn; st.far *= w; st.floor *= w; st.moving = true;
    }
  }
  const sh = shot.shake?.(f);
  if (sh) { st.tx += sh.x; st.ty += sh.y; }
  return st;
};

/** the ground at f: ONE surface; a hand-over between different grounds dissolves it across the switch */
export const groundAt = (f: number, i: number) => {
  let base: Ground | "warm" = SHOTS[i].ground, over: { g?: Ground | "warm"; op: number } = { op: 0 };
  for (const k of [i, i + 1]) {
    const s = SHOTS[k];
    if (!s || !s.tr || SHOTS[k - 1].ground === s.ground) continue;
    const a = s.t0 - DISSOLVE / 2;
    if (f >= a && f < s.t0 + DISSOLVE / 2) { base = SHOTS[k - 1].ground; over = { g: s.ground, op: INOUT(prog(f, a, s.t0 + DISSOLVE / 2)) }; }
  }
  return { base, over };
};

export const StageView: React.FC<{ st: Stage; f: number; pass: "back" | "front" }> = ({ st, f, pass }) => {
  const d = SHOTS[st.k];
  return (
    // the CAMERA: its yaw, pitch and depth arc about the frame centre — one camera for both places of a move
    <div data-moving={st.moving ? "1" : undefined} style={{ position: "absolute", inset: 0, opacity: st.op < 0.999 ? clamp01(st.op) : undefined,
      transformOrigin: `${PIVOT.x}px ${PIVOT.y}px`,
      transform: `perspective(1400px) rotateY(${st.yaw.toFixed(3)}deg) rotateX(${(st.pitch + 0.15).toFixed(3)}deg) scale(${st.arc.toFixed(5)})` }}>
      {/* the move: a genuinely 3-D transform, always (dropping it at rest re-rasterises flat and jumps) */}
      <div style={{ position: "absolute", inset: 0, transformOrigin: `${st.ox}px ${st.oy}px`,
        transform: `perspective(1200px) translate3d(${st.tx.toFixed(2)}px, ${st.ty.toFixed(2)}px, 0px) scale(${st.sc.toFixed(5)}) rotateX(0.15deg)` }}>
        {/* ★★ RULE 54b: the place's FRAME MASK, riding with the move: nothing of it shows past its own frame and gap */}
        <div data-frame-mask={d.id} style={{ position: "absolute", left: FRAMES[st.k].l, top: FRAMES[st.k].t, width: FRAMES[st.k].r - FRAMES[st.k].l,
          height: FRAMES[st.k].b - FRAMES[st.k].t, ...maskCss(FRAMES[st.k]) }}>
          <div style={{ position: "absolute", left: -FRAMES[st.k].l, top: -FRAMES[st.k].t, width: 1080, height: 1920 }}>
            {/* ★ RULE 46: the set draws its own PLACE through its own camera (camera.tsx); its far wall rides at 0.4 of the move */}
            <SetWindow.Provider value={WINDOWS[st.k]}>
              <HandOver.Provider value={{ tx: st.tx, ty: st.ty, far: st.far, floor: st.floor }}>
                <Pass.Provider value={pass}>
                  <Obj s={d.id} g="set"><d.Comp f={f} /></Obj>
                </Pass.Provider>
              </HandOver.Provider>
            </SetWindow.Provider>
            {/* its captions ride with it (they belong to their place), outside its in-set camera */}
            {pass === "front" && <Caption scene={d.id} f={f} ground={groundOf(d.ground)} align={d.align} />}
          </div>
        </div>
      </div>
    </div>
  );
};

/** ★ RULE 43: the frame each hand-over moves FASTEST — where its whoosh must peak */
const fastest = (fn: (f: number) => number, a: number, b: number) => {
  let best = -1, at = a;
  for (let f = Math.floor(a); f < b; f++) { const v = Math.abs(fn(f + 1) - fn(f)); if (v > best) { best = v; at = f; } }
  return at + 1;
};
const fastestSeen = (fn: (f: number) => number, seen: (f: number) => number, a: number, b: number) => {
  let best = -1, at = a;
  for (let f = Math.floor(a); f < b; f++) { const v = Math.abs(fn(f + 1) - fn(f)) * seen(f); if (v > best) { best = v; at = f; } }
  return at + 1;
};
export const HANDOVER_PEAK = SHOTS.map((s) => {
  const tr = s.tr;
  if (!tr) return 0;
  const D = durOf(tr);
  return fastest((f) => HO.curve(prog(f, s.t0 - D / 2, s.t0 + D / 2)), s.t0 - D / 2, s.t0 + D / 2) + ("peak" in tr ? tr.peak ?? 0 : 0);
});
/** ★ for curves028.mjs: each hand-over's own progress curve over its run, sampled per frame (the audit judges its ends) */
export const HANDOVER_RUNS = SHOTS.map((s) => {
  const tr = s.tr;
  if (!tr || tr.kind === "dip") return null;
  const D = durOf(tr);
  return { id: s.id, kind: tr.kind, a: s.t0 - D / 2, b: s.t0 + D / 2, p: Array.from({ length: D + 1 }, (_, i) => HO.curve(i / D)) };
}).filter(Boolean);
void fastestSeen;

// ★ THE BED ENVELOPE — the wired take's, measured (bedenv.mjs)
const envDb = (t: number) => {
  const E = BED_ENV;
  if (!E.length) return 0;                           // a new take starts FLAT (bedenv.mjs reads an empty envelope as 0 dB)
  if (t <= E[0][0]) return E[0][1];
  for (let k = 1; k < E.length; k++) if (t <= E[k][0]) return E[k - 1][1] + ((E[k][1] - E[k - 1][1]) * (t - E[k - 1][0])) / (E[k][0] - E[k - 1][0]);
  return E[E.length - 1][1];
};
export const bedVolume = (fr: number) => MUSIC_GAIN * 10 ** (envDb(fr / 30) / 20) * clamp01(fr / 12) * clamp01((TOTAL_FRAMES - fr) / 36);
const SCORE = buildScore(
  SHOTS.map((s, k) => ({ id: s.id, from: WINDOWS[k].from, to: WINDOWS[k].to, t0: s.t0, kind: s.tr && s.tr.kind !== "dip" ? s.tr.kind : null, side: s.tr && "dir" in s.tr ? s.tr.dir : null })),
  HANDOVER_PEAK,
);
/** the live cue list, for the SFX sheet */
export const SCORE_CUES = SCORE.cues;

/** ★ HYPERFRAMES PORT: the stages on screen at frame f (a truck or a crane shows BOTH places for its run, a frame-width apart
 *  on one curve), and the ground under them. src/hf/film.tsx mounts these as the composition's layers; the voice, the bed and
 *  the score are HyperFrames <audio> clips (scripts/build.mjs), never drawn here. */
export const stagesAt = (f: number) => {
  const i = shotAt(f);
  const travels = (k: number) => lead(SHOTS[k]?.tr);
  const stages: Stage[] = [];
  if (i > 0 && travels(i) && f < SHOTS[i].t0 + travels(i)) stages.push(stageOf(i - 1, f));
  stages.push(stageOf(i, f));
  if (i + 1 < SHOTS.length && travels(i + 1) && f >= SHOTS[i + 1].t0 - travels(i + 1)) stages.push(stageOf(i + 1, f));
  return { i, stages: stages.filter((st) => st.op > 0.004), ground: groundAt(f, i) };
};
export { P, GroundFill, MatDefs, AbsoluteFill, Obj };
