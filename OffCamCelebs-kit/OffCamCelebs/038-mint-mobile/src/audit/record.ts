// ═══════════════════════════════════════════════════════════════════════════
// 038 — THE RECORD. Every figure the film draws. Verified 2026-11-21 at source (VO_SCRIPT.txt has the trail):
//   · T-Mobile press release, 15 Mar 2023: "T-Mobile will pay up to a maximum of $1.35 billion in a combination of 39% cash
//     and 61% stock to acquire Ka'ena" (Mint Mobile's parent). Agreement dated 9 Mar 2023 (10-Q Q1 2023).
//   · Reynolds' statement in that release: "… beat out an aggressive last-minute bid from my mom Tammy Reynolds …"
//   · Mint Mobile release, 25 Nov 2019: "Ryan Reynolds Purchases Ownership Stake in Mint Mobile" (amount undisclosed).
//   · 10-Q Q2 2024: completed 1 May 2024; "$420 million in cash and 3,264,952 shares of T-Mobile common stock valued at $536
//     million … total payment fair value of $956 million"; earnout "up to an additional $403 million … dependent upon
//     Ka'ena's achievement of specified performance indicators", payable 1 Aug 2026.
//   · 10-Q Q2 2025: on 30 Jun 2025 the agreement was amended "to set the calculation of the earnout as the difference between
//     the maximum purchase price of $1.35 billion and the upfront payment, as adjusted, and removed the requirement for
//     Ka'ena to achieve specified performance indicators."
//   · 10-Q Q3 2026: "on October 9, 2026, we transferred $164 million in cash and 1,510,371 shares … in satisfaction of our
//     $420 million earnout obligation."
//   · ESTIMATE, never ours (WSJ via Fortune, 17 Mar 2023): Reynolds' stake about 25%, about $300M. Always "REPORTED".
// ⚠ GUARDRAILS ON SCREEN: never a sum above $1.35B (never $956M + $420M); never $169M or "services"; never Wrexham, Aviation
//   Gin, films, Deadpool / Marvel, the Mint fox; the verdict rates the $1.35B figure, not him; "fraud"/"scam" never appear.
// ★ No dots between words on screen, ever ("MAY 1 2024", "OCT 9 2026").
// ═══════════════════════════════════════════════════════════════════════════

export const DEAL = { max: 1_350_000_000, upfrontCash: 420_000_000, upfrontShares: 536_000_000, shareCount: 3_264_952, earnout: 420_000_000 } as const;
export const DATES = { stake: "2019", signed: "2023", closed: "MAY 1 2024", amended: "2025", paid: "OCT 9 2026" } as const;
export const STAKE = { share: "~25%", value: "~$300M", label: "REPORTED" } as const;
export const PLAN_PRICE = "$15/MO";
