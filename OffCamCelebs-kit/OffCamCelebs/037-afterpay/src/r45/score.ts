import { within, peakOn, PEAK, type Cue } from "./SfxLayer";
import { HK, HK_CAM } from "./sets/hook";
import { DL, DL_CAM } from "./sets/deal";
import { PR, PR_CAM } from "./sets/price";
import { CL, CL_CAM } from "./sets/close";
import { FA, FA_CAM } from "./sets/fair";
import { VD, VD_CAM } from "./sets/verdict";
import type { CamKey } from "./camera";
import type { SceneId } from "../audit/data";

// ═══════════════════════════════════════════════════════════════════════════
// ★★★ THE SCORE (037), family per job (L8), every cue timed by its animation's own window. Nothing on the caption words.
// ⚠ FOUNDATION PASS: the hand-overs, the camera's travels and one cue per acted beat. The reference's own sound has not been
//   measured yet (preferences P9): re-score once the places are polished and the take is wired.
// ═══════════════════════════════════════════════════════════════════════════
type SetRow = { id: SceneId; from: number; to: number; t0: number; kind: "truck" | "crane" | "dive" | null; side: string | null };

export const buildScore = (sets: SetRow[], peaks: number[]) => {
  const cues: Cue[] = [];
  const w = (id: SceneId) => { const x = sets.find((y) => y.id === id)!; return { at: x.from, end: x.to }; };
  const add = (c: Cue) => cues.push(c);
  const pk = (id: SceneId) => peakOn(w(id));
  const wi = (id: SceneId) => within(w(id));

  // ── the hand-overs: CAMERA MOVES — an airwoosh spanning the move, peaking on its fastest frame (a dip is silent) ──
  sets.forEach((st, i) => {
    if (!st.kind || i === 0) return;
    const both = { at: sets[i - 1].from, end: st.to };
    add(peakOn(both)("airwoosh", peaks[i], st.t0 + 22, 1.1, `the camera ${st.kind === "truck" ? "trucks" : "cranes"} ${st.side} into ${st.id}`));
  });
  // ── ★ RULE 46: the CAMERA's own travels take airwoosh, peaking mid-move; a breath or a small reframe is silent ──
  const CAMS: [SceneId, CamKey[]][] = [["hook", HK_CAM], ["deal", DL_CAM], ["price", PR_CAM], ["close", CL_CAM], ["fair", FA_CAM], ["verdict", VD_CAM]];
  for (const [id, keys] of CAMS) keys.forEach((k, i) => {
    if (i === 0 || k.drift) return;
    const a = keys[i - 1], travel = Math.hypot(k.x - a.x, k.y - a.y), zoom = Math.abs(Math.log(k.z / a.z));
    if (travel < 150 && zoom < 0.08) return;
    add(pk(id)("airwoosh", k.at + k.dur / 2, k.at + k.dur, travel > 600 ? 0.7 : 0.5, `the camera travels (${id}, key ${i})`));
  });
  // ── 1 · the hook: the tag flips to the filing's figure ──
  add(pk("hook")("whooshsoft", HK.flipA + 8, HK.flipB, 0.4, "the tag flips to $13,800,000,000"));
  add(wi("hook")("click", HK.flipB - 2, undefined, 0.3, "the tag settles on its new face"));
  // ── 3 · the deal ──
  add(pk("deal")("whooshsoft", DL.contract[0] + 4, DL.contract[1], 0.4, "the contract slides in"));
  add(pk("deal")("swoosh", DL.cooler[1] - 6, DL.cooler[1], 0.5, "the cooler of cash slides away"));
  add(pk("deal")("whooshsoft", DL.certs[0] + 4, DL.certs[1], 0.5, "the share certificates slide in"));
  add(wi("deal")("flick", DL.flip[0] + 6, undefined, 0.4, "the certificate turns to 0.375"));
  // ── 4 · the price ──
  add(wi("price")("click", PR.on[0], undefined, 0.3, "the board lights: $247.26"));
  add(wi("price")("pingshort", PR.tag[0] + 6, undefined, 0.3, "the tag lights: $29,000,000,000"));
  // ── 6 · the close ──
  add(wi("close")("datashort", CL.cal[0], CL.cal[1], 0.3, "the calendar flips six months"));
  add(wi("close")("click", CL.swap[0] + 8, undefined, 0.3, "the nameplate rolls to BLOCK"));
  add(pk("close")("lowwoosh", CL.fall[0] + 20, CL.fall[1], 0.4, "the price falls and the stack shrinks"));
  add(wi("close")("flick", CL.open[0] + 8, undefined, 0.35, "the filing opens"));
  add(wi("close")("thud", CL.stamp[1], undefined, 0.5, "the stamp lands: FORM 10-Q | Q1 2022"));
  // ── 7 · to be fair ──
  add(pk("fair")("whooshsoft", FA.hand[0] + 4, FA.hand[1], 0.4, "the certificates cross the desk"));
  // ── 8 · the verdict ──
  add(wi("verdict")("datashort", VD.head[0], VD.gap[1], 0.3, "the receipt prints"));
  add(wi("verdict")("thud", VD.rating[1], undefined, 0.5, "the rating lands: INFLATED"));
  add(wi("verdict")("sub", VD.rating[1], undefined, 0.4, "INFLATED"));

  // ★ ONE WHOOSH AT A TIME: a camera travel that peaks with an action's own whoosh is carried by the action's sound
  const MOVE = new Set(["swoosh", "whooshlong", "whooshsoft", "airwoosh", "lowwoosh"]);
  const heard = (c: Cue) => c.at + PEAK[c.s];
  const out = cues.filter((c) => !(c.why.startsWith("the camera travels") &&
    cues.some((o) => o !== c && MOVE.has(o.s) && !o.why.startsWith("the camera travels") && Math.abs(heard(o) - heard(c)) <= 6)));
  out.sort((a, b) => a.at - b.at);
  return { cues: out };
};
