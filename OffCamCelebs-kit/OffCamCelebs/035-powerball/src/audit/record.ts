// ═══════════════════════════════════════════════════════════════════════════
// 035 — THE RECORD. Every figure the film draws. Verified 2026-11-15 at source (VO_SCRIPT.txt has the trail):
//   · NJ Lottery release on powerball.com, 5 Nov 2026: "$847 million Powerball jackpot", "cash value of $363.1 million",
//     annuity "30 increasing payments over 29 years", "Both prize options are before taxes"; sold at "Wegmans Food Market,
//     100 Farm View, Montvale in Bergen County". The Nov. 4, 2026 drawing (CBS New York; wire reports).
//   · IRS, Instructions for Forms W-2G and 5754 (01/2026): 24% withheld when lottery winnings minus the wager exceed $5,000.
//   · NJ Division of Taxation: "8% for Lottery payouts over $500,000", residents and nonresidents.
//   · $363.1M × (1 − 0.24 − 0.08) = $246.9M (SNJ Today the same).
//   · Top rates: federal 37% (2026); New Jersey 10.75% (over $1M). $363.1M × (1 − 0.37 − 0.1075) = $189.7M: OUR ESTIMATE,
//     "about $190 million" (SNJ Today the same).
//   · Optional: jackpot odds "1 in 292,201,338" (Powerball prize chart) — the brief forbids odds-shaming; not used.
// ★ No dots between words on screen, ever: "IRS", "NJ", "NOV 4 2026".
// ═══════════════════════════════════════════════════════════════════════════

export const JACKPOT = { headline: 847_000_000, cash: 363_100_000, withheld: 246_900_000, estimate: 189_700_000 } as const;
export const DRAW = { date: "NOV 4 2026", store: "WEGMANS", town: "MONTVALE NJ", county: "BERGEN COUNTY" } as const;
export const ANNUITY = { payments: 30, years: 29 } as const;
export const RATES = { irs: 0.24, nj: 0.08, fedTop: 0.37, njTop: 0.1075 } as const;
