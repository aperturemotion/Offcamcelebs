// InfluencerAudit035 — "The Real Jackpot" ($847M Powerball, audit #035): the channel's first HEADLINE audit (no person).
// FACTS + GUARDRAILS + timing. Every verified figure lives in record.ts. Built in the LOCKED 029 HF look with the 2026-10-23
// rules (OffCamCelebs preferences: polished realistic 3-D, the living camera, ≤ 2–3 labels); the brief is content-only.
//
// ═══════════════════════════════════════════════════════════════════════════
// ★★ THE MECHANISM — read before touching a place.
// The headline: one Powerball ticket won $847M (the Nov. 4, 2026 drawing; sold at Wegmans, Montvale, NJ). But $847M is the
// ANNUITY: 30 increasing payments over 29 years. Taken now, the lottery's own cash value is $363.1M. Withheld at payout:
// IRS 24%, New Jersey 8% → ≈ $246.9M. At the top rates (federal 37%, NJ 10.75%) WE ESTIMATE ≈ $189.7M, "about $190M".
// Fair: choose the annuity and the full $847M is paid, before tax; it just takes 29 years. Verdict on the HEADLINE: $847M on
// the headline, about $190M in the bank. INFLATED. One number shrinking in steps: 847 → 363.1 → ~247 → ~190.
// ═══════════════════════════════════════════════════════════════════════════
// ⚠⚠ THE BRIEF'S ACCURACY GUARDRAILS — NON-NEGOTIABLE (the render guard enforces the voice):
//   · $847M is real as the annuity total; the verdict rates "$847 million" as the money the winner gets, not the lottery or
//     the winner;
//   · $363.1M is the lottery's own cash figure; ~$247M is arithmetic on official withholding; ~$190M is OUR ESTIMATE: always
//     "we estimate" or "about";
//   · the winner is unidentified: never name, guess or depict a winner; NO PERSON, no stand-in;
//   · taxes: only the rates above; nothing about the winner's home state, deductions or tax planning;
//   · don't encourage or discourage playing; no odds-shaming;
//   · "fraud" and "scam" never appear.
// ★ THE BRIEF'S DELIVERY NOTES: $847,000,000 is on screen in the first second; the screen shows each number, percentage,
//   place and tax as the voice names it; it goes out as an Instagram Reel, so nothing to read sits under the app's buttons
//   (the right edge, x > 940, from y ~1000) or its caption area (the foot, y > 1500). Cover: "$847,000,000" with ~$190M below.

import { CUES, VO_START } from "./cues";
import FIXES from "./script_fixes.json";

export * from "./record";
export const FPS = 30;
/** the brief's composition name (index.html's root composition id) */
export const COMPOSITION_ID = "InfluencerAudit035";

// ── ★★ THE SCREEN FOLLOWS THE VOICE: a switch that mirrors a BLOCKED line reads the guard's own pattern (018) ──
export type ScriptFix = { at: string; brief: string; briefSpoken: string; use: string; why: string; bad: string };
export const SCRIPT_FIXES: ScriptFix[] = FIXES.fixes as unknown as ScriptFix[];
const said = (re: RegExp) => CUES.some((c) => re.test(c.text));
export const TAKE = {
  /** the sign-off is SPOKEN (019: a take read from the brief had none) */
  ctaSpoken: said(/audit next/i),
} as const;

// ── ASSETS ───────────────────────────────────────────────────────────────────
// ★ NO PHOTO (the brief): there is no person in this story; everything is built. Never a stand-in person.
export const HAS_PHOTO = false;
export const PHOTO_FILE = "none.png";

// ── AUDIO ────────────────────────────────────────────────────────────────────
// ★ THE TAKE (2026-11-15): GENERATED in-session, ElevenLabs "Russ – Deep, Smooth and Articulate" (HKFOb9iktHA85uKXydRT),
//   eleven_v4, from the corrected VO_SCRIPT.txt; take B of two. 59.3 s raw → vo_trim (TEMPO 1.04) 50.9 s → fw → onsets →
//   captions_vo → level_vo.
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
export type SceneId = "hook" | "ticket" | "annuity" | "withhold" | "bill" | "fair" | "verdict";
export const SCENE_ORDER: SceneId[] = ["hook", "ticket", "annuity", "withhold", "bill", "fair", "verdict"];
/** ★★ WHAT THE FILM INDEXES — a count mismatch refuses at module load */
export const SCENE_CUES: Record<SceneId, number> = { hook: 2, ticket: 1, annuity: 2, withhold: 4, bill: 2, fair: 2, verdict: 5 };
{
  const got: Partial<Record<SceneId, number>> = {};
  for (const c of CUES) got[c.scene] = (got[c.scene] ?? 0) + 1;
  const bad = SCENE_ORDER.filter((id) => (got[id] ?? 0) !== SCENE_CUES[id]).map((id) => `${id}: wired ${got[id] ?? 0}, the film indexes ${SCENE_CUES[id]}`);
  if (bad.length) throw new Error("035 CUE COUNT MISMATCH — the wired take does not match the film.\n" + bad.map((b) => "  · " + b).join("\n"));
}
/** the film ends 0.5 s after the last word — no CTA graphic, logo or handle */
const OUTRO_SEC = 0.5;
export const VO_END = Math.round(CUES[CUES.length - 1].b * FPS);
export const OUTRO_HOLD = Math.round(OUTRO_SEC * FPS);
export const TOTAL_FRAMES = VO_END + OUTRO_HOLD;
