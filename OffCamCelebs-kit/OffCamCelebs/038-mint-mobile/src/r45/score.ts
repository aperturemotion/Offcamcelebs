import { within, peakOn, PEAK, type Cue } from "./SfxLayer";
import { HOOK, SIM, DEAL, TARGETS, PAYMENT, CATCH, FAIR, VERDICT } from "./places";
import type { CamKey } from "./camera";
import type { SceneId } from "../audit/data";

// ═══════════════════════════════════════════════════════════════════════════
// ★★★ THE SCORE (038), family per job (the locked look's L8), every cue timed by its animation's own window.
// Nothing on the caption words.
// ═══════════════════════════════════════════════════════════════════════════
type SetRow = { id: SceneId; from: number; to: number; t0: number; kind: "truck" | "crane" | "dive" | null; side: string | null };

export const buildScore = (sets: SetRow[], peaks: number[]) => {
  const cues: Cue[] = [];
  const w = (id: SceneId) => { const x = sets.find((y) => y.id === id)!; return { at: x.from, end: x.to }; };
  const add = (c: Cue) => cues.push(c);
  const pk = (id: SceneId) => peakOn(w(id));
  const wi = (id: SceneId) => within(w(id));

  // ── the hand-overs: CAMERA MOVES — an airwoosh spanning the move, peaking on its fastest frame ──
  sets.forEach((st, i) => {
    if (!st.kind || i === 0) return;
    const both = { at: sets[i - 1].from, end: st.to };
    add(peakOn(both)("airwoosh", peaks[i], st.t0 + 22, 1.1, `the camera ${st.kind === "truck" ? "trucks" : "cranes"} ${st.side} into ${st.id}`));
  });

  // ── ★ RULE 46: the CAMERA's own travels take airwoosh, peaking mid-move; a creep or a small reframe is silent ──
  const PLACES = [HOOK, SIM, DEAL, TARGETS, PAYMENT, CATCH, FAIR, VERDICT];
  const CAMS: [SceneId, CamKey[]][] = PLACES.map((p) => [p.set.id, p.cam]);
  for (const [id, keys] of CAMS) keys.forEach((k, i) => {
    if (i === 0 || k.drift) return;   // ★ a drift is a slow push across a hold: no whoosh
    const a = keys[i - 1], travel = Math.hypot(k.x - a.x, k.y - a.y), zoom = Math.abs(Math.log(k.z / a.z));
    if (travel < 150 && zoom < 0.08) return;
    add(pk(id)("airwoosh", k.at + k.dur / 2, k.at + k.dur, travel > 600 ? 0.7 : 0.5, `the camera travels (${id}, key ${i})`));
  });

  // ── ★ 038: each place's own sounds (place.ts PlaceSfx), every one timed by its animation's own frames ──
  for (const p of PLACES) for (const c of p.sfx)
    add((c.mode === "peak" ? pk(p.set.id) : wi(p.set.id))(c.s, c.at, c.end, c.vol, c.why));

  // ★ ONE WHOOSH AT A TIME: a camera travel that peaks with an action's own whoosh is carried by the action's sound
  const MOVE = new Set(["swoosh", "whooshlong", "whooshsoft", "airwoosh", "lowwoosh"]);
  const heard = (c: Cue) => c.at + PEAK[c.s];
  const out = cues.filter((c) => !(c.why.startsWith("the camera travels") &&
    cues.some((o) => o !== c && MOVE.has(o.s) && !o.why.startsWith("the camera travels") && Math.abs(heard(o) - heard(c)) <= 6)));
  out.sort((a, b) => a.at - b.at);
  return { cues: out };
};
