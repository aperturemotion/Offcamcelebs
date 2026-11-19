// InfluencerAudit037 — "Afterpay: $29B or $13.8B?" (Afterpay / Block, audit #037): the first film in THE PAYOUTS' new look,
// @moneydecoded.au's black studio (preferences, 2026-11-18, rules P1–P10). FACTS + GUARDRAILS + timing. Every verified
// figure lives in record.ts; VO_SCRIPT.txt has the trail. The brief is content-only.
//
// ═══════════════════════════════════════════════════════════════════════════
// ★★ THE MECHANISM — read before touching a place.
// The headline: Square bought Afterpay for US$29 billion (announced 1 Aug 2021). It paid in SHARES at a FIXED RATIO, 0.375
// Square Class A shares per Afterpay share, and US$29B was that ratio at Square's US$247.26 close on 30 Jul 2021. The deal
// took six months to close (31 Jan 2022). By then Square was Block and the share price had roughly halved (US$122.29,
// DERIVED from the 10-Q), so the shares Block actually issued were booked at US$13.8 billion (Form 10-Q, Q1 2022).
// Fair: US$29B was the real value on announcement day; the deal fixed the number of shares, not the dollars.
// Verdict on the FIGURE: $29 billion as "the price paid" is INFLATED. One tag changing its number: 29,000,000,000 → 13,800,000,000.
// ═══════════════════════════════════════════════════════════════════════════
// ⚠⚠ THE BRIEF'S ACCURACY GUARDRAILS — NON-NEGOTIABLE (the render guard enforces the voice):
//   · $29B was accurate on announcement day. Never imply Square, Block, Dorsey or the founders misled anyone; the rating is
//     on the headline figure used as the price paid;
//   · never say the founders or shareholders "lost" $15B: they received Block shares whose value kept moving after closing;
//   · no current Block share price anywhere;
//   · the two banned words of the standing rules never appear;
//   · the verdict rates the $29 billion figure as the price Block paid, not any person or company.
// ★ THE BRIEF'S DELIVERY NOTES: first frame = the hanging price tag already lit, reading $29,000,000,000 (no intro, no title
//   card); one object and one number per line, the number appearing as the voice says it; brand names in plain type (no
//   logos, app screenshots or copied charts); one real photo (assets/afterpay_face.jpg, Jack Dorsey, SUPPLIED BY TIMUR, never
//   downloaded) as a framed print at beat 2 and at the verdict, everyone else a nameplate; text clear of Instagram's
//   buttons (x > 940 from y ~1000) and caption area (y > 1500). No "·" anywhere a viewer sees: "|".
// ★ COLOUR ROLES (preferences): mint neon = THE HEADLINE NUMBER as reported ($29B) only; khaki = documented figures
//   ($13.8B, 0.375, $247.26, $122.29); red = the fallen price.

import { CUES, VO_START } from "./cues";
import FIXES from "./script_fixes.json";

export * from "./record";
export const FPS = 30;
/** the brief's composition name (index.html's root composition id) */
export const COMPOSITION_ID = "InfluencerAudit037";

// ── ★★ THE SCREEN FOLLOWS THE VOICE: a switch that mirrors a BLOCKED line reads the guard's own pattern (018) ──
export type ScriptFix = { at: string; brief: string; briefSpoken: string; use: string; why: string; bad: string };
export const SCRIPT_FIXES: ScriptFix[] = FIXES.fixes as unknown as ScriptFix[];
const said = (re: RegExp) => CUES.some((c) => re.test(c.text));
export const TAKE = {
  /** the sign-off is SPOKEN (019: a take read from the brief had none) */
  ctaSpoken: said(/audit next/i),
} as const;

// ── ASSETS ─────────────────────────────────────────────────────────────
// ★ THE PHOTO: Jack Dorsey, supplied by Timur as assets/afterpay_face.jpg (the brief's public/afterpay_face.jpg). It has NOT
//   arrived (2026-11-18), and a real person's photo is never downloaded: until it does the framed print is a plain dark
//   matte. When it lands: put it in assets/, set HAS_PHOTO true.
export const HAS_PHOTO = false;
export const PHOTO_FILE = "afterpay_face.jpg";

// ── AUDIO ─────────────────────────────────────────────────────────────�
// ★ NO TAKE YET (2026-11-18): the cues are PROVISIONAL (scratchpad/vo/provisional.mjs times the corrected script). The take
//   is generated through ElevenLabs ("Russ", HKFOb9iktHA85uKXydRT, eleven_v4) from VO_SCRIPT.txt, then the VO pipeline.
// ★ THE BED: the previous film's song unless Timur names another (Big Rich Town), cut once the take is wired.
// ★ THE TAKE (2026-11-18, script v2): GENERATED in-session, ElevenLabs "Russ – Deep, Smooth and Articulate"
//   (HKFOb9iktHA85uKXydRT), eleven_v4, from VO_SCRIPT.txt v2; take B of two (both read the script exactly; B is the
//   tighter read: 71.6 s raw, 144 wpm). vo_trim (TEMPO 1.04) 61.2 s → cardpause.py (0.55 s held after each turn card's
//   last word, as the references hold theirs) 62.3 s → fw → mergetok → silmap → onsets → captions_vo → level_vo.
// ★ THE BED: the standing song, 50 Cent "Big Rich Town (Instrumental)", cut by scratchpad/vo/mkbed_bigrich.mjs with its
//   drop on the first "$29 billion" (film 2.24 s); bedenv holds it 5.5 dB under the speech-gated voice (residual 0.1 dB).
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
export type SceneId = "hook" | "explain" | "deal" | "price" | "catch" | "close" | "fair" | "verdict";
export const SCENE_ORDER: SceneId[] = ["hook", "explain", "deal", "price", "catch", "close", "fair", "verdict"];
/** ★★ WHAT THE FILM INDEXES — a count mismatch refuses at module load */
export const SCENE_CUES: Record<SceneId, number> = { hook: 3, explain: 1, deal: 4, price: 2, catch: 1, close: 4, fair: 1, verdict: 3 };
{
  const got: Partial<Record<SceneId, number>> = {};
  for (const c of CUES) got[c.scene] = (got[c.scene] ?? 0) + 1;
  const bad = SCENE_ORDER.filter((id) => (got[id] ?? 0) !== SCENE_CUES[id]).map((id) => `${id}: wired ${got[id] ?? 0}, the film indexes ${SCENE_CUES[id]}`);
  if (bad.length) throw new Error("037 CUE COUNT MISMATCH — the wired take does not match the film.\n" + bad.map((b) => "  · " + b).join("\n"));
}
/** the film ends 0.5 s after the last word — no CTA graphic, logo or handle */
const OUTRO_SEC = 0.8;   // the references end 0.6–0.9 s after the last word (study R31)
export const VO_END = Math.round(CUES[CUES.length - 1].b * FPS);
export const OUTRO_HOLD = Math.round(OUTRO_SEC * FPS);
export const TOTAL_FRAMES = VO_END + OUTRO_HOLD;
