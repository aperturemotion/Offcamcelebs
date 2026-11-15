import { within, peakOn, PEAK, type Cue } from "./SfxLayer";
import { HK, HK_CAM } from "./sets/hook";
import { TK, TK_CAM } from "./sets/ticket";
import { AN, AN_CAM } from "./sets/annuity";
import { WH, WH_CAM } from "./sets/withhold";
import { BL, BL_CAM } from "./sets/bill";
import { FA, FA_CAM } from "./sets/fair";
import { VD, VD_CAM } from "./sets/verdict";
import type { CamKey } from "./camera";
import type { SceneId } from "../audit/data";

// ═══════════════════════════════════════════════════════════════════════════
// ★★★ THE SCORE (035), family per job (the locked look's L8), every cue timed by its animation's own window.
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
  const CAMS: [SceneId, CamKey[]][] = [["hook", HK_CAM], ["ticket", TK_CAM], ["annuity", AN_CAM], ["withhold", WH_CAM], ["bill", BL_CAM], ["fair", FA_CAM], ["verdict", VD_CAM]];
  for (const [id, keys] of CAMS) keys.forEach((k, i) => {
    if (i === 0 || k.drift) return;   // ★ a drift is a slow push across a hold: no whoosh
    const a = keys[i - 1], travel = Math.hypot(k.x - a.x, k.y - a.y), zoom = Math.abs(Math.log(k.z / a.z));
    if (travel < 150 && zoom < 0.08) return;
    add(pk(id)("airwoosh", k.at + k.dur / 2, k.at + k.dur, travel > 600 ? 0.7 : 0.5, `the camera travels (${id}, key ${i})`));
  });

  // ── 1 · the hook: the sign falls and lands; the cabinet rocks on its studs; it powers up and its modules light; the blink on
  //    "$847"; the brownout on "never"; the display dies on "that number" ──
  add(pk("hook")("whooshsoft", HK.land - 1, HK.land, 0.2, "the sign falls"));
  add(wi("hook")("thud", HK.land, undefined, 0.5, "the sign's feet land"));
  add(wi("hook")("sub", HK.land, undefined, 0.3, "its weight"));
  add(wi("hook")("chainshort", HK.land + 1, HK.land + 26, 0.14, "the cabinet rocks on its studs"));
  add(wi("hook")("click", HK.pwr, undefined, 0.28, "the sign powers up"));
  add(wi("hook")("datashort", HK.segA, HK.lit, 0.2, "the LED modules light, segment by segment"));
  add(wi("hook")("click", HK.blink - 3, undefined, 0.18, "the display blinks"));
  add(wi("hook")("lowwoosh", HK.brown, HK.brown + 30, 0.22, "the supply sags: the display browns out"));
  add(wi("hook")("click", HK.dieA, undefined, 0.24, "the display starts to die"));
  add(wi("hook")("sub", HK.dead - 2, undefined, 0.22, "the last module goes dark: the hum stops"));
  // ── 2 · the ticket: the printer feeds the ticket in three bursts; the cutter snips; the ticket drops onto the nip ──
  TK.feeds.forEach(([a, b], i) => add(wi("ticket")("datashort", a, b + 2, 0.22, `the printer feeds the ticket (burst ${i + 1})`)));
  add(wi("ticket")("click", TK.cut, undefined, 0.3, "the cutter snips the ticket"));
  add(wi("ticket")("flick", TK.cut + 1, undefined, 0.18, "the ticket drops onto the presenter's nip"));
  // ── 3 · the annuity ──
  // each payment seats on the board (a tick per stack: counted items); the board is drawn away (swoosh, at its fastest
  // frame, as it leaves the frame); the lump sum slides in (whooshsoft, fastest at its start: GLIDE)
  AN.rests.forEach((r, k) => add(wi("annuity")("tick", r, undefined, k < 2 ? 0.9 : 0.55 + 0.2 * ((k % 3) === 0 ? 1 : 0), `payment ${k + 2} seats on the board`)));
  add(pk("annuity")("swoosh", AN.boardA + AN.boardN - 7, AN.boardA + AN.boardN, 0.8, "the board and its 30 payments are drawn away"));
  add(pk("annuity")("whooshsoft", AN.pileA + 4, AN.pileA + AN.pileN, 0.75, "the lump sum slides in"));
  // ── 4 · the withholding: a mechanism (chain) for the gauge's screw, a click where the clamp seats, a thud under each chop,
  //    a slap of paper when each cut-off lands ──
  {
    const p = pk("withhold"), c = wi("withhold");
    for (const [push, clamp, chop, land, unclamp, n] of [
      [WH.push1, WH.clamp1, WH.chop1, WH.land1, WH.unclamp1, "24 %"], [WH.push2, WH.clamp2, WH.chop2, WH.land2, WH.unclamp2, "8 %"]] as const) {
      add(c("chainshort", push[0], push[1], 0.45, `the gauge's hand wheel turns: the screw pushes the slab ${n} past the knife`));
      add(p("click", clamp[1], undefined, 0.5, "the clamp seats on the slab"));
      add(p("thud", chop, undefined, 1.0, `the knife slams through the cash (${n})`));
      add(p("flick", land, undefined, 0.9, `the ${n} cut-off lands`));
      add(p("click", unclamp[0] + 2, undefined, 0.28, "the clamp lets go"));
    }
    add(c("chainshort", WH.retract[0], WH.retract[1], 0.32, "the gauge backs away from what is left"));
  }
  // ── 5 · the full bill: a tick for every amount key that locks down, a click for the cycle key, data while the machine
  //    cycles (prints and feeds a line), one quiet ping when the total stands ──
  {
    const p = pk("bill"), c = wi("bill");
    for (const cy of BL.cycles) {
      for (const k of cy.keys) add(p("tick", k, undefined, 0.55, "an amount key locks down"));
      add(p("click", cy.go, undefined, 0.7, cy.total ? "the total key" : "the motor bar or the % key starts the cycle"));
      add(c("datashort", cy.strike - 1, cy.adv[1] + 2, 0.6, "the machine cycles: it strikes the line and feeds the tape"));
      if (cy.total) add(p("pingshort", cy.adv[1], undefined, 0.35, "the total stands above the tear bar"));
    }
  }
  // ── 6 · to be fair ──
  // each coin rings as it lands in the jar: every one while they come singly, then every other one of the stream, softer
  FA.lands.forEach((t, i) => {
    if (i < 12 || i % 2 === 0) add(wi("fair")("coin", t, undefined, i < 12 ? 0.8 - 0.02 * i : 0.45, `coin ${i + 1} lands in the jar`));
  });
  // ── 7 · the verdict: the zip runs open on "in the bank"; the stamp glides in, presses INFLATED, lifts and is drawn away ──
  add(pk("verdict")("swoosh", VD.zipA + 10, VD.zipB, 0.22, "the deposit bag's zip runs further open"));
  add(pk("verdict")("lowwoosh", VD.inA + 9, VD.overA, 0.36, "the stamp glides in over the page"));
  add(wi("verdict")("thud", VD.inkA, undefined, 0.5, "the stamp presses: INFLATED"));
  add(wi("verdict")("sub", VD.inkA, undefined, 0.42, "INFLATED"));
  add(wi("verdict")("click", VD.holdTo + 1, undefined, 0.2, "the stamp lifts off the page"));
  add(pk("verdict")("whooshsoft", VD.liftTo + 12, VD.goneAt, 0.16, "the stamp is drawn away"));

  // ★ ONE WHOOSH AT A TIME: a camera travel that peaks with an action's own whoosh is carried by the action's sound
  const MOVE = new Set(["swoosh", "whooshlong", "whooshsoft", "airwoosh", "lowwoosh"]);
  const heard = (c: Cue) => c.at + PEAK[c.s];
  const out = cues.filter((c) => !(c.why.startsWith("the camera travels") &&
    cues.some((o) => o !== c && MOVE.has(o.s) && !o.why.startsWith("the camera travels") && Math.abs(heard(o) - heard(c)) <= 6)));
  out.sort((a, b) => a.at - b.at);
  return { cues: out };
};
