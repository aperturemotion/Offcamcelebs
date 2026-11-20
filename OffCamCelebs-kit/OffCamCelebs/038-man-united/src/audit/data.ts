// InfluencerAudit038 — "Bought for £790M. United paid the bill." (Manchester United / the Glazer takeover, audit #038), THE
// PAYOUTS in the @moneydecoded.au look (preferences P1–P16; study README R1–R32; P16: real logos, recognisable objects).
// FACTS + GUARDRAILS + timing. Every verified figure lives in record.ts; VO_SCRIPT.txt has the trail. Studio port 3179.
//
// ═══════════════════════════════════════════════════════════
// ★★ THE MECHANISM — read before touching a place.
// The Glazer family bought Manchester United for £790m (offer £790.3m, May–June 2005). More than £500m was borrowed: a £265m
// loan facility on the club plus £275m of securities that, in 2005, had no hold over the club's assets (£540m in all). Within
// a year (the August 2006 refinancing) most of that debt was on the club's books. In January 2010 the club itself sold £504m
// of bonds (£250m 8.75% + $425m 8.375%, due 2017) to repay the bank loans; ticket, shirt and TV money serviced it. ESPN puts the
// cost of financing the Glazers' ownership past £1bn by 2018 (interest, repayments, dividends: ESPN's estimate). At 30 June
// 2026 the club's borrowings were £689.0m (£577.6m + £111.4m, FY2026 results); net finance costs 2025/26 £69.6m (≈ £190,700 a
// day). Fair: five league titles and the 2008 Champions League since. Verdict on the FIGURE: "£790 million as money the
// Glazers paid" is INFLATED. The plinth's sign flips from BOUGHT BY: THE GLAZERS to PAID FOR BY: MANCHESTER UNITED.
// ═══════════════════════════════════════════════════════════
// ⚠⚠ THE BRIEF'S ACCURACY GUARDRAILS — NON-NEGOTIABLE (the render guard enforces the voice):
//   · the takeover was legal: nothing on screen or in the VO implies wrongdoing; it is about who paid;
//   · never say all £540m was put on the club (the £275m sat outside it in 2005): "most of that debt", "within a year";
//   · the £1bn+ is ESPN's estimate and includes dividends: always labelled as ESPN's;
//   · today's £689m is United's CURRENT borrowing, never presented as the 2005 loan;
//   · "net finance costs", never "interest", for the £69.6m (it includes currency effects);
//   · no mention of current sale reports; the two banned words never appear;
//   · the verdict rates "the £790 million as money the Glazers paid", not the Glazers.
// ★ THE BRIEF'S DELIVERY NOTES: VO on frame 1, the crane already lowering the crest; real, recognisable things (the real
//   crest, the real US flag, Old Trafford, red shirts, turnstiles, bond certificates, an LED scoreboard; brand assets in
//   assets/brand/ with SOURCES.txt); no faces (people are nameplates); every number ON an object, changing as it is said;
//   green = fairness, red = debt and "the worst part", gold/amber = money; generic cups, not the real trophies; the last set
//   is the first set changed, ending within a second of the last word; text clear of Instagram's buttons (x > 940 from
//   y ~1000) and caption area (y > 1500). No "·" anywhere a viewer sees: "|".

import { CUES, VO_START } from "./cues";
import FIXES from "./script_fixes.json";

export * from "./record";
export const FPS = 30;
/** the brief's composition name (index.html's root composition id) */
export const COMPOSITION_ID = "InfluencerAudit038";

// ── ★★ THE SCREEN FOLLOWS THE VOICE: a switch that mirrors a BLOCKED line reads the guard's own pattern (018) ──
export type ScriptFix = { at: string; brief: string; briefSpoken: string; use: string; why: string; bad: string };
export const SCRIPT_FIXES: ScriptFix[] = FIXES.fixes as unknown as ScriptFix[];
const said = (re: RegExp) => CUES.some((c) => re.test(c.text));
export const TAKE = {
  /** the sign-off is SPOKEN (019: a take read from the brief had none) */
  ctaSpoken: said(/audit next/i),
} as const;

// ── ASSETS ──────────────────────────────────────────────────────
// ★ NO PHOTO: no faces in this film (the brief). Brand artwork (crest, US flag, ESPN) is in assets/brand/ (SOURCES.txt).
export const HAS_PHOTO = false;
export const PHOTO_FILE = "none.png";

// ── AUDIO ──────────────────────────────────────────────────────
// ★ THE TAKE (2026-11-20): GENERATED in-session, ElevenLabs "Russ – Deep, Smooth and Articulate" (HKFOb9iktHA85uKXydRT),
//   eleven_v4, from VO_SCRIPT.txt; take A of two (B drops the s of "borrowings"). 67.9 s raw → vo_trim (TEMPO 1.04) 57.2 s
//   → cardpause.py (0.55 s after "explain." and "part.") 58.3 s → fw → mergetok → silmap → onsets → captions_vo → level_vo.
// ★ THE BED: Runaway (Timur picked it for 037; the standing song), cut from 030's bed so its drop lands on the first
//   "£790 million"; bedenv holds it 5.5 dB under the speech-gated voice.
export const HAS_VO = true;
export const HAS_MUSIC = true;
export const HAS_SFX = true;
export const VO_FILE = "vo_leveled.wav";
export const VO_SKIP_FRAMES = Math.round(VO_START * FPS);
export const VO_GAIN = 1.0;
export const MUSIC_FILE = "music_runaway_bed.wav";   // ★ Timur, 2026-11-19: "Let's use Runaway" (030's cut, drop moved to the first "twenty-nine billion", 2.24 s)
export const MUSIC_SKIP_FRAMES = 0;
export const BED_UNDER_VO = 5.5;
export const MUSIC_GAIN = 0.505;

// ── TIMING ───────────────────────────────────────────────────────────────────
/** the eight PLACES: six object places and two turn cards (explain, catch), all in the black studio */
export type SceneId = "hook" | "explain" | "sides" | "bonds" | "money" | "worst" | "board" | "fair" | "verdict";
export const SCENE_ORDER: SceneId[] = ["hook", "explain", "sides", "bonds", "money", "worst", "board", "fair", "verdict"];
/** ★★ WHAT THE FILM INDEXES — a count mismatch refuses at module load */
export const SCENE_CUES: Record<SceneId, number> = { hook: 3, explain: 1, sides: 1, bonds: 1, money: 2, worst: 1, board: 3, fair: 1, verdict: 4 };
{
  const got: Partial<Record<SceneId, number>> = {};
  for (const c of CUES) got[c.scene] = (got[c.scene] ?? 0) + 1;
  const bad = SCENE_ORDER.filter((id) => (got[id] ?? 0) !== SCENE_CUES[id]).map((id) => `${id}: wired ${got[id] ?? 0}, the film indexes ${SCENE_CUES[id]}`);
  if (bad.length) throw new Error("038 CUE COUNT MISMATCH — the wired take does not match the film.\n" + bad.map((b) => "  · " + b).join("\n"));
}
/** the film ends 0.5 s after the last word — no CTA graphic, logo or handle */
const OUTRO_SEC = 0.8;   // the references end 0.6–0.9 s after the last word (study R31)
export const VO_END = Math.round(CUES[CUES.length - 1].b * FPS);
export const OUTRO_HOLD = Math.round(OUTRO_SEC * FPS);
export const TOTAL_FRAMES = VO_END + OUTRO_HOLD;
