// ═══════════════════════════════════════════════════════════════════════════
// 034 — THE RECORD. Every figure the film draws. ★ = a live figure: re-verify the morning of posting.
// Verified 2026-10-23 at source in two parallel checks (VO_SCRIPT.txt has the trail):
//   · MLB.com, 12 Dec 2023 (Sarah Wexler), headline word for word: "$700M stunner: Ohtani to Dodgers on biggest deal in sports
//     history"; "10-year, $700 million"; "believed to be the largest contract in worldwide sports history". Agreed 9 Dec,
//     announced 11 Dec, signed 12 Dec 2023 (Cot's: 2024-33).
//   · AP (Ronald Blum), 11 Dec 2023: annual salaries of $70M; "Of each year's salary, $68 million is deferred with no interest,
//     payable in equal installments each July 1 from 2034-43" ($680M). No signing bonus (Cot's).
//   · ★ 2026: paid $2M (Bleacher Report, 22 Jan 2026; Sportico 2026 list, which counts deferred money in the year paid). The
//     voice says "he's paid", never "his salary is" (his salary is $70M, mostly deferred).
//   · CBT value: "$46,076,768 … using a 4.43% rate (Oct. 2023)" (Cot's; AP: "about $46 million"); 10 × ≈ $460.8M. The players'
//     union calculated $437.8M: ★ the screen always ties ≈$460M to the LUXURY TAX, never "his pay".
//   · Juan Soto, AP 8 Dec 2024: "a record $765 million, 15-year contract"; "Soto's agreement does not include deferred money".
//     Announced 11 Dec 2024. (15 years against 10: the film never ranks the two totals.)
//   · Nez Balelo to Tom Verducci (SI, 12 Dec 2023; CBS Sports the same day): the deferral was Ohtani's idea, to help the team
//     compete.
//   · ★ Sportico, 17 Mar 2026: $125M off the field projected for 2026 (an ESTIMATE; $127M in all).
// ★ No dots between words on screen, ever: "J SOTO", "DEC 2024".
// ═══════════════════════════════════════════════════════════════════════════

/** the hook's register */
export const HOOK = { from: "$700,000,000", to: "$2,000,000", crest: ["SIGNED FOR", "PAID IN 2026"] as [string, string] } as const;
/** the deal (Dec 2023) */
export const DEAL = { month: "DECEMBER", year: "2023", plate: ["10 YEARS", "2024 TO 2033"] as [string, string], capText: "LA", site: "MLB.com",
  head: "$700M stunner: Ohtani to Dodgers on biggest deal in sports history", date: "DECEMBER 12, 2023" } as const;
/** the deferral */
export const DEFER = { sign: ["DEFERRED", "$680,000,000"] as [string, string], each: "$68,000,000",
  years: ["2034", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042", "2043"], rate: ["INTEREST", "0%"] as [string, string] } as const;
/** the real value (baseball's luxury tax) */
export const VALUE = { unit: "$ MILLIONS", from: 700, to: 460, tag: ["ABOUT $46,000,000", "A YEAR", "LUXURY TAX VALUE"] as [string, string, string] } as const;
/** the comparison */
export const SOTO = { team: "METS", name: "J SOTO", sum: "$765,000,000", date: "DEC 2024", note: "NOTHING DEFERRED" } as const;
/** to be fair */
export const FAIR = { sum: "$125,000,000", lines: ["OFF THE FIELD", "SPORTICO ESTIMATE, 2026"] as [string, string] } as const;
/** the verdict */
export const VERDICT = { paper: ["$700,000,000", "ON PAPER"] as [string, string], today: ["ABOUT $460,000,000", "TODAY'S MONEY"] as [string, string], word: "INFLATED" } as const;

/** ★ RE-VERIFY THE MORNING OF POSTING (CLAUDE.md "★-flag every live figure") */
export const RECHECK = [
  "Is Ohtani still with the Dodgers and still on the same contract (no opt-out used)?",
  "Has Sportico revised its 2026 off-field estimate since 17 Mar 2026?",
] as const;
