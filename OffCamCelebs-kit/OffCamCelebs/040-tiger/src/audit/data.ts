// InfluencerAudit038 — "Every Dollar" (Ryan Reynolds / Mint Mobile, audit #038). FACTS + GUARDRAILS + timing. Every verified
// figure lives in record.ts. Built in the 034/035 look (Timur, 2026-11-21: back to "the Powerball ticket video and the biggest
// deal in sports history"); the brief is content-only, except: THE HOOK IS MOTION, NOT A NUMBER.
//
// ═══════════════════════════════════════════════════════════════════════════
// ★★ THE MECHANISM — read before touching a place.
// The headline: Reynolds' Mint Mobile sold to T-Mobile for $1.35 billion. But $1.35B was "UP TO": $420M cash + $536M in shares
// at closing (1 May 2024), the rest an EARNOUT tied to targets, where such numbers usually shrink. The twist: in 2025 the
// targets were dropped and the earnout set at the maximum minus the upfront; on 9 Oct 2026 T-Mobile paid the final $420M. So
// the contract's maximum was paid: LEGIT. The catch: Reynolds owned about a quarter (REPORTED), roughly $300M. Fair: he never
// called it his billion; he joked T-Mobile beat a bid from his mom.
// ═══════════════════════════════════════════════════════════════════════════
// ⚠⚠ THE BRIEF'S ACCURACY GUARDRAILS — NON-NEGOTIABLE (the render guard enforces the voice; record.ts lists the screen's):
//   · the claim rated is the HEADLINE ($1.35B as the price T-Mobile paid); never imply Reynolds personally got $1.35B;
//   · his ~25% / ~$300M are reports: always "REPORTED" / "reports put";
//   · never a summed total above $1.35B; never the $169M "services" part; Mint money only; no Deadpool / Marvel / Mint fox;
//   · the verdict rates the $1.35B figure, not him; "fraud" and "scam" never appear.
// ★ THE BRIEF'S DELIVERY NOTES: the hook is MOTION (a phone buzzing across a table, falling, its SIM spinning out), NO number on
//   screen before ~2 s (the first caption spells "fifteen-dollar"); one real photo, public/reynolds_face.jpg (the caller ID;
//   again at the verdict if wanted); brand names as plain type (MINT MOBILE, T-MOBILE); an Instagram Reel: nothing to read
//   under the app's buttons (x > 940 from y ~1000) or its caption area (y > 1500). Cover: his face + "$1.35 BILLION. ALL OF IT?"

import { CUES, VO_START } from "./cues";
import FIXES from "./script_fixes.json";

export * from "./record";
export const FPS = 30;
/** the brief's composition name (index.html's root composition id) */
export const COMPOSITION_ID = "InfluencerAudit040";

// ── ★★ THE SCREEN FOLLOWS THE VOICE: a switch that mirrors a BLOCKED line reads the guard's own pattern (018) ──
export type ScriptFix = { at: string; brief: string; briefSpoken: string; use: string; why: string; bad: string };
export const SCRIPT_FIXES: ScriptFix[] = FIXES.fixes as unknown as ScriptFix[];
const said = (re: RegExp) => CUES.some((c) => re.test(c.text));
export const TAKE = {
  /** the sign-off is SPOKEN (019: a take read from the brief had none) */
  ctaSpoken: said(/audit next/i),
} as const;

// ── ASSETS ───────────────────────────────────────────────────────────────────
// ★ THE PHOTO (Timur, 2026-11-21: "you can use faces … Just find them yourself"): Gage Skidmore's "Ryan Reynolds by Gage
//   Skidmore.jpg", Wikimedia Commons, CC BY-SA 3.0 (assets/brand/SOURCES.txt; credit "Photo: Gage Skidmore, CC BY-SA 3.0"
//   in the post's caption). assets/reynolds_face.png is its square crop, for the caller ID (and the verdict, if used).
export const HAS_PHOTO = true;
export const PHOTO_FILE = "tiger_face.png";

// ── AUDIO ────────────────────────────────────────────────────────────────────
// ★ THE TAKE (2026-11-24, the daily run): GENERATED in-session, ElevenLabs "Russ – Deep, Smooth and Articulate" (HKFOb9iktHA85uKXydRT),
//   eleven_v4, from VO_SCRIPT.txt; take A of two (B dropped "then eight hundred"). 67.1 s raw → vo_trim (TEMPO 1.04) 53.7 s → fw → onsets →
//   captions_vo → level_vo.
// ★ THE BED: the previous film's song (the standing rule): "A Good Man with a Broken Heart" (038 Man United's; 031's cut).
export const HAS_VO = true;
export const HAS_MUSIC = true;
export const HAS_SFX = true;
export const VO_FILE = "vo_leveled.wav";
export const VO_SKIP_FRAMES = Math.round(VO_START * FPS);
export const VO_GAIN = 1.0;
export const MUSIC_FILE = "music_tiger_bed.wav";   // ★ 040: 031's "A Good Man with a Broken Heart" bed, 0.35 s lead so its drop (5.45 s in the file) lands on "We went looking" (5.80 s)
export const MUSIC_SKIP_FRAMES = 0;
export const BED_UNDER_VO = 5.5;
export const MUSIC_GAIN = 0.505;

// ── TIMING ───────────────────────────────────────────────────────────────────
/** the eight PLACES of the story (grounds alternate dark / cream per place) */
export type SceneId = "hook" | "tiger" | "june" | "august" | "denial" | "none" | "verdict";
export const SCENE_ORDER: SceneId[] = ["hook", "tiger", "june", "august", "denial", "none", "verdict"];
/** ★★ WHAT THE FILM INDEXES — a count mismatch refuses at module load */
export const SCENE_CUES: Record<SceneId, number> = { hook: 3, tiger: 2, june: 3, august: 4, denial: 2, none: 4, verdict: 5 };
{
  const got: Partial<Record<SceneId, number>> = {};
  for (const c of CUES) got[c.scene] = (got[c.scene] ?? 0) + 1;
  const bad = SCENE_ORDER.filter((id) => (got[id] ?? 0) !== SCENE_CUES[id]).map((id) => `${id}: wired ${got[id] ?? 0}, the film indexes ${SCENE_CUES[id]}`);
  if (bad.length) throw new Error("038 CUE COUNT MISMATCH — the wired take does not match the film.\n" + bad.map((b) => "  · " + b).join("\n"));
}
/** the film ends 0.5 s after the last word — no CTA graphic, logo or handle */
const OUTRO_SEC = 0.5;
export const VO_END = Math.round(CUES[CUES.length - 1].b * FPS);
export const OUTRO_HOLD = Math.round(OUTRO_SEC * FPS);
export const TOTAL_FRAMES = VO_END + OUTRO_HOLD;
