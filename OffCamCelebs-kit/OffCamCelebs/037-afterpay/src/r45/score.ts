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
// One cue per acted beat. The references master at −14.1 LUFS with effects and music about 5 dB under the voice
//   (preferences P9, measured 2026-11-18): the levels are set by the mix loop once the take is wired.
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
  // ── 1 · the hook: the newspapers land, the tag flips to the filing's figure ──
  HK.lands.forEach((l, i) => add(wi("hook")("thud", l, undefined, 0.3 - 0.04 * i, `newspaper ${i + 1} lands on the desk`)));
  add(pk("hook")("whooshsoft", HK.flipA + 8, HK.flipB, 0.4, "the tag flips to $13,800,000,000"));
  add(wi("hook")("click", HK.flipB - 2, undefined, 0.3, "the tag settles on its new face"));
  // ── 3 · the deal ──
  add(pk("deal")("whooshsoft", DL.contract[0] + 4, DL.contract[1], 0.4, "the contract slides in"));
  add(pk("deal")("swoosh", DL.cooler[1] - 6, DL.cooler[1], 0.5, "the cooler of cash slides away"));
  add(pk("deal")("whooshsoft", DL.certs[0] + 4, DL.certs[1], 0.5, "the share certificates slide in"));
  add(wi("deal")("click", DL.certs[1], undefined, 0.25, "the stack comes to rest"));
  add(pk("deal")("whooshsoft", DL.card[0] + 4, DL.card[1], 0.35, "the one certificate slides in on its rail"));
  add(wi("deal")("tick", DL.flip[0], undefined, 0.35, "the certificate is cut at 0.375"));
  add(wi("deal")("flick", DL.flip[0] + 6, undefined, 0.4, "the piece turns to 0.375"));
  // ── 4 · the price ──
  add(wi("price")("click", PR.on[0], undefined, 0.3, "the board lights: $247.26"));
  add(wi("price")("datashort", PR.on[0] + 1, PR.on[1] + 8, 0.25, "the board's dots come up"));
  add(pk("price")("whooshsoft", PR.stack[0] + 6, PR.stack[1], 0.4, "the stack slides in on its plinth"));
  add(wi("price")("tick", PR.sum[0], undefined, 0.3, "the sum's signs light: × and ="));
  add(pk("price")("whooshsoft", PR.hang[0] + 5, PR.hang[1], 0.3, "the tag slides in on its cord"));
  add(wi("price")("flick", PR.turn[0] + 6, undefined, 0.35, "the tag turns to face us"));
  add(wi("price")("pingshort", PR.tag[0] + 6, undefined, 0.3, "the tag lights: $29,000,000,000"));
  // ── 6 · the close ──
  for (let i = 0; i < 5; i++) add(wi("close")("flick", CL.cal[0] + ((i + 0.5) * (CL.cal[1] - CL.cal[0])) / 5, undefined, 0.26, `the calendar's leaf ${i + 1} flips`));
  add(wi("close")("click", CL.swap[0] + 8, undefined, 0.3, "the nameplate rolls to BLOCK"));
  add(pk("close")("lowwoosh", CL.fall[0] + 20, CL.fall[1], 0.4, "the price falls and the stack shrinks"));
  add(wi("close")("datashort", CL.fall[0], CL.fall[1], 0.26, "the board counts down to $122.29"));
  add(wi("close")("click", CL.fall[1], undefined, 0.3, "the board stops, red: $122.29"));
  add(wi("close")("flick", CL.open[0] + 8, undefined, 0.35, "the filing opens"));
  add(pk("close")("whooshsoft", CL.hl[0] + 6, CL.hl[1], 0.3, "the highlighter crosses the line"));
  add(wi("close")("thud", (CL.stamp[0] + CL.stamp[1]) / 2, undefined, 0.5, "the stamp lands: FORM 10-Q | Q1 2022"));
  // ── 7 · to be fair ──
  add(wi("fair")("chainshort", FA.level[0], FA.level[1], 0.26, "the scale rocks on its chains"));
  add(wi("fair")("pingshort", FA.level[1], undefined, 0.26, "the scale settles level"));
  add(wi("fair")("click", FA.label[0] + 4, undefined, 0.3, "FIXED: 0.375 SHARES lights"));
  add(pk("fair")("whooshsoft", FA.hand[0] + 4, FA.hand[1], 0.4, "the certificates cross the desk"));
  add(wi("fair")("thud", FA.hand[1] - 2, undefined, 0.28, "the certificates are set down"));
  // ── 8 · the verdict: the receipt prints line by line; the rating lands ──
  for (const [k, why] of [["head", "its head"], ["ann", "ANNOUNCED"], ["paid", "PAID AT CLOSING"], ["gap", "GAP"], ["foot", "its foot"]] as const)
    add(wi("verdict")("datashort", VD[k][0], VD[k][1] + 2, 0.28, `the receipt prints ${why}`));
  add(wi("verdict")("thud", VD.rating[1], undefined, 0.5, "the rating lands: INFLATED"));
  add(wi("verdict")("sub", VD.rating[1], undefined, 0.4, "INFLATED"));
  add(wi("verdict")("pingshort", VD.tag[0] + 8, undefined, 0.26, "the tag's lamp comes back up"));

  // ★ ONE WHOOSH AT A TIME: a camera travel that peaks with an action's own whoosh is carried by the action's sound
  const MOVE = new Set(["swoosh", "whooshlong", "whooshsoft", "airwoosh", "lowwoosh"]);
  const heard = (c: Cue) => c.at + PEAK[c.s];
  const out = cues.filter((c) => !(c.why.startsWith("the camera travels") &&
    cues.some((o) => o !== c && MOVE.has(o.s) && !o.why.startsWith("the camera travels") && Math.abs(heard(o) - heard(c)) <= 6)));
  out.sort((a, b) => a.at - b.at);
  return { cues: out };
};
