import { within, peakOn, PEAK, type Cue } from "./SfxLayer";
import { HK, HK_CAM } from "./sets/hook";
import { DL, DL_CAM } from "./sets/deal";
import { DF, DF_CAM, DF_TICKS, DF_TRACK } from "./sets/defer";
import { VL, VL_CAM } from "./sets/value";
import { ST, ST_CAM } from "./sets/soto";
import { FA, FA_CAM } from "./sets/fair";
import { VD, VD_CAM } from "./sets/verdict";
import type { CamKey } from "./camera";
import type { SceneId } from "../audit/data";

// ═══════════════════════════════════════════════════════════════════════════
// ★★★ THE SCORE (034), family per job (the locked look's L8), every cue timed by its animation's own window:
//   · airwoosh for every camera move: the hand-overs (peaking on the move's fastest frame) and the camera's own travels;
//   · whooshsoft for things that turn to face us (the tag on the scale);
//   · chainshort while the register's tabs turn over (a mechanism), a click as they lock;
//   · click where a light switches or a part seats (the laptop waking, the sign, each deposit-box plate, the strip, the
//     billboard's lamps, the bulb);
//   · data while the scale's needle swings (a measuring), a quiet ping when it settles on 460;
//   · lowwoosh for the verdict: the stamp's travel, a thud and a sub as it presses INFLATED.
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
  const CAMS: [SceneId, CamKey[]][] = [["hook", HK_CAM], ["deal", DL_CAM], ["defer", DF_CAM], ["value", VL_CAM], ["soto", ST_CAM], ["fair", FA_CAM], ["verdict", VD_CAM]];
  for (const [id, keys] of CAMS) keys.forEach((k, i) => {
    if (i === 0 || k.drift) return;   // ★ a drift is a slow push across a hold: no whoosh
    const a = keys[i - 1], travel = Math.hypot(k.x - a.x, k.y - a.y), zoom = Math.abs(Math.log(k.z / a.z));
    if (travel < 150 && zoom < 0.08) return;
    add(pk(id)("airwoosh", k.at + k.dur / 2, k.at + k.dur, travel > 600 ? 0.7 : 0.5, `the camera travels (${id}, key ${i})`));
  });

  // ── 1 · the hook: the register falls and lands; each key strikes; the bell on $700,000,000; the crank clears; $2,000,000 ──
  add(pk("hook")("whooshsoft", HK.land - 1, HK.land, 0.2, "the register falls"));
  add(wi("hook")("thud", HK.land, undefined, 0.5, "the register lands"));
  add(wi("hook")("sub", HK.land, undefined, 0.3, "its weight"));
  HK.presses.forEach((p, i) => add(wi("hook")("tick", p, undefined, 0.3, `key ${i + 1} strikes, its tabs rise`)));
  add(wi("hook")("ding", HK.done700, undefined, 0.22, "the bell: $700,000,000"));
  add(wi("hook")("chainshort", HK.crankA + 2, HK.crankA + HK.crankN, 0.28, "the crank turns: the tabs drop"));
  add(wi("hook")("click", HK.done2, undefined, 0.3, "the last tab stands: $2,000,000"));

  // ── 2 · the deal: the stand's head turns the cap to face us; the laptop's lid swings up to face us; its screen wakes ──
  add(pk("deal")("whooshsoft", DL.turnA + Math.round(DL.turnN / 2), DL.turnA + DL.turnN, 0.2, "the cap turns on its stand to face us: LA"));
  add(pk("deal")("whooshsoft", DL.lidA + Math.round(DL.lidN / 2), DL.lidA + DL.lidN, 0.18, "the laptop's lid swings open"));
  add(wi("deal")("click", DL.litA, undefined, 0.3, "the laptop wakes"));

  // ── 3 · the deferral: 2034 swings shut and locks; three more shut as the row shows; the track counts the years; 2043 shuts,
  //    its key turns, the lights go out ──
  add(pk("defer")("whooshsoft", DF.heroA + Math.round(DF.heroN * 0.55), DF.heroA + DF.heroN, 0.2, "2034's door swings shut"));
  add(wi("defer")("click", DF.heroA + DF.heroN, undefined, 0.32, "2034's door seats"));
  add(wi("defer")("chainshort", DF.heroLockA, DF.heroLockA + DF.lockN, 0.26, "2034's key turns: the bolt throws"));
  add(wi("defer")("click", DF.heroLockA + DF.lockN - 2, undefined, 0.3, "2034 locked"));
  for (let k = 0; k < 3; k++) add(wi("defer")("click", DF.waveA + k * DF.waveStep + DF.waveN, undefined, 0.2, `door ${k + 1} of the row seats`));
  DF_TICKS.forEach((t, i) => add(wi("defer")("tick", t, undefined, 0.26, `the track passes ${2034 + i}`)));
  add(pk("defer")("airwoosh", DF_TRACK.at + Math.round(DF_TRACK.dur / 2), DF_TRACK.at + DF_TRACK.dur, 0.4, "the camera tracks along the row (a drift key: no automatic whoosh)"));
  add(pk("defer")("whooshsoft", DF.lastA + Math.round(DF.lastN * 0.55), DF.lastA + DF.lastN, 0.2, "2043's door swings shut"));
  add(wi("defer")("click", DF.lastA + DF.lastN, undefined, 0.3, "2043's door seats"));
  add(wi("defer")("chainshort", DF.lastLockA, DF.lastLockA + DF.lockN, 0.26, "2043's key turns"));
  add(wi("defer")("click", DF.dimA, undefined, 0.34, "the lights go out"));

  // ── 4 · the real value: the scale's needle sinks, keeps falling while baseball values the deal, settles on 460 ──
  add(wi("value")("datashort", VL.sinkA, VL.sinkA + VL.sinkN, 0.24, "the needle sinks: worth less"));
  add(wi("value")("datamid", VL.sweepA, VL.sweepA + VL.sweepN, 0.22, "the needle keeps falling: baseball values the deal"));
  add(wi("value")("datashort", VL.settleA, VL.settleA + VL.settleN, 0.26, "the needle swings down to 460"));
  add(wi("value")("pingshort", VL.settleA + Math.round(VL.settleN * 0.6), undefined, 0.18, "460, the drag pointer still at 700"));

  // ── 5 · the comparison: the case's light flickers on under the ball ──
  add(wi("soto")("click", ST.lampA, undefined, 0.3, "the case's light comes on: nothing deferred"));
  add(wi("soto")("bloom", ST.lampA + 1, ST.lampA + ST.lampN + 6, 0.18, "the light warms the ball"));

  // ── 6 · fair: the lamp's rocker and its bulb; the microphone's on-air ring; the watch case's clasp and lid ──
  add(wi("fair")("click", FA.swA, undefined, 0.3, "the lamp's rocker clicks: his own idea"));
  add(wi("fair")("bloom", FA.glowA + 2, FA.glowA + FA.glowN, 0.22, "the filament flickers and warms"));
  add(wi("fair")("tick", FA.ringA, undefined, 0.26, "the on-air ring lights: his agent said"));
  add(wi("fair")("click", FA.btnA, undefined, 0.28, "the clasp's button presses"));
  add(pk("fair")("whooshsoft", FA.lidA + Math.round(FA.lidN * 0.4), FA.lidA + FA.lidN, 0.2, "the lid swings open: the watch"));

  // ── 7 · the verdict: the stamp lifts off its pad, travels, presses INFLATED, goes back and is set down ──
  add(wi("verdict")("click", VD.liftA, undefined, 0.2, "the stamp lifts off the ink pad"));
  add(pk("verdict")("lowwoosh", VD.overA + 6, VD.pressA, 0.36, "the stamp swings over to the page"));
  add(wi("verdict")("thud", VD.inkA, undefined, 0.5, "the stamp presses: INFLATED"));
  add(wi("verdict")("sub", VD.inkA, undefined, 0.42, "INFLATED"));
  add(pk("verdict")("whooshsoft", VD.backA + 8, VD.homeA, 0.16, "the stamp goes back to its pad"));
  add(wi("verdict")("click", VD.downTo - 1, undefined, 0.22, "the stamp is set down on its pad"));

  // ★ ONE WHOOSH AT A TIME: a camera travel that peaks with an action's own whoosh is carried by the action's sound
  const MOVE = new Set(["swoosh", "whooshlong", "whooshsoft", "airwoosh", "lowwoosh"]);
  const heard = (c: Cue) => c.at + PEAK[c.s];
  const out = cues.filter((c) => !(c.why.startsWith("the camera travels") &&
    cues.some((o) => o !== c && MOVE.has(o.s) && !o.why.startsWith("the camera travels") && Math.abs(heard(o) - heard(c)) <= 6)));
  out.sort((a, b) => a.at - b.at);
  return { cues: out };
};
