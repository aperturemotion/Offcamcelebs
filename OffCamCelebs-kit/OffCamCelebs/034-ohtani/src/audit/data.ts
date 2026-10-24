// InfluencerAudit034 — "Two Million a Year" (Shohei Ohtani, audit #034).
// FACTS + GUARDRAILS + timing. Every verified figure lives in record.ts. Built in the LOCKED 029 HF look (OffCamCelebs
// preferences, "THE LOCKED LOOK — 029 HF"); the brief is content-only ("Everything visual is your call").
//
// ═══════════════════════════════════════════════════════════════════════════
// ★★ THE MECHANISM — read before touching a place.
// The headline: he signed for $700M (Dec 2023, ten years, Dodgers). But $68M of each year's $70M is deferred, without
// interest, to ten payments of $68M from 2034 to 2043, so this year he is paid $2M. Money paid that late is worth less: for
// its luxury tax, baseball discounts it to ≈ $46.1M a year, ≈ $460M in all. A year later Juan Soto signed with the Mets for
// $765M, nothing deferred. Fair: the deferral was his own idea, his agent said, to help the team compete; and Sportico
// estimates $125M off the field this year. Verdict on the HEADLINE: $700M on paper, ≈ $460M in today's money. INFLATED.
// ═══════════════════════════════════════════════════════════════════════════
// ⚠⚠ THE BRIEF'S ACCURACY GUARDRAILS — NON-NEGOTIABLE (the render guard enforces the voice):
//   · the $700M is real: he will receive it all; never say or show that he "loses" money or that the contract is fake;
//   · ≈ $460M is baseball's luxury-tax present value: "baseball values" / "in today's money", never his actual pay;
//   · $125M off the field is a Sportico ESTIMATE: say and show "Sportico estimates";
//   · nothing about his former interpreter's case, gambling, taxes or where he will live when the money is paid;
//   · "fraud" and "scam" never appear, on screen or in the voice;
//   · the verdict rates the "$700 million" headline as the deal's value, not him.
// ★ THE BRIEF'S DELIVERY NOTES: $700,000,000 is on screen in the first second and collapses to $2,000,000 as the voice says
//   "two million"; the cover frame is his face + "$700,000,000"; it goes out as an Instagram Reel, so nothing to read sits
//   under the app's buttons (the right edge, x > 940, from y ~1000) or its caption area (the foot, y > 1500).

import { CUES, VO_START } from "./cues";
import FIXES from "./script_fixes.json";

export * from "./record";
export const FPS = 30;
/** the brief's composition name (index.html's root composition id) */
export const COMPOSITION_ID = "InfluencerAudit034";

// ── ★★ THE SCREEN FOLLOWS THE VOICE: a switch that mirrors a BLOCKED line reads the guard's own pattern (018) ──
export type ScriptFix = { at: string; brief: string; briefSpoken: string; use: string; why: string; bad: string };
export const SCRIPT_FIXES: ScriptFix[] = FIXES.fixes as unknown as ScriptFix[];
const said = (re: RegExp) => CUES.some((c) => re.test(c.text));
export const TAKE = {
  /** the sign-off is SPOKEN (019: a take read from the brief had none) */
  ctaSpoken: said(/audit next/i),
} as const;

// ── ASSETS ───────────────────────────────────────────────────────────────────
// ★ HIS PHOTO: the brief names public/ohtani_face.jpg; it was NOT in the project on 2026-10-23 (asked for in chat). Until it
//   lands the hook stands without him; then it is cut out (isnet raw mask, examined: see the 033 lesson) and stands beside
//   the register (the cover frame: his face + $700,000,000).
export const HAS_PHOTO = false;
export const PHOTO_FILE = "ohtani_sharp.png";

// ── AUDIO ────────────────────────────────────────────────────────────────────
// ★ THE TAKE (2026-10-23): GENERATED in-session (the user, 2026-10-18: "if I need a voiceover you can generate and implement
//   it yourself"), ElevenLabs "Russ – Deep, Smooth and Articulate" (HKFOb9iktHA85uKXydRT), eleven_v4, from the corrected
//   VO_SCRIPT.txt; word for word that script. 65.4 s raw → vo_trim (TEMPO 1.04, the channel's pace) 55.4 s → fw → mergetok
//   → onsets (9 moves, each on a measured pause's end) → captions_vo → level_vo.
// ★ THE BED: the previous film's song (the standing rule): 50 Cent, "Big Rich Town (Instrumental)", the user's own file, cut
//   by scratchpad/vo/mkbed_bigrich.mjs so the beat's first 808 kick lands on a chosen word.
export const HAS_VO = true;
export const HAS_MUSIC = true;
export const HAS_SFX = true;
export const VO_FILE = "vo_leveled.wav";
export const VO_SKIP_FRAMES = Math.round(VO_START * FPS);
export const VO_GAIN = 1.0;
export const MUSIC_FILE = "music_bigrichtown_bed.wav";
export const MUSIC_SKIP_FRAMES = 0;
export const BED_UNDER_VO = 5.5;
export const MUSIC_GAIN = 0.505;

// ── TIMING ───────────────────────────────────────────────────────────────────
/** the seven PLACES of the story (grounds alternate dark / cream per place) */
export type SceneId = "hook" | "deal" | "defer" | "value" | "soto" | "fair" | "verdict";
export const SCENE_ORDER: SceneId[] = ["hook", "deal", "defer", "value", "soto", "fair", "verdict"];
/** ★★ WHAT THE FILM INDEXES — a count mismatch refuses at module load */
export const SCENE_CUES: Record<SceneId, number> = { hook: 2, deal: 3, defer: 3, value: 3, soto: 2, fair: 2, verdict: 5 };
{
  const got: Partial<Record<SceneId, number>> = {};
  for (const c of CUES) got[c.scene] = (got[c.scene] ?? 0) + 1;
  const bad = SCENE_ORDER.filter((id) => (got[id] ?? 0) !== SCENE_CUES[id]).map((id) => `${id}: wired ${got[id] ?? 0}, the film indexes ${SCENE_CUES[id]}`);
  if (bad.length) throw new Error("034 CUE COUNT MISMATCH — the wired take does not match the film.\n" + bad.map((b) => "  · " + b).join("\n"));
}
/** the film ends 0.5 s after the last word — no CTA graphic, logo or handle */
const OUTRO_SEC = 0.5;
export const VO_END = Math.round(CUES[CUES.length - 1].b * FPS);
export const OUTRO_HOLD = Math.round(OUTRO_SEC * FPS);
export const TOTAL_FRAMES = VO_END + OUTRO_HOLD;
