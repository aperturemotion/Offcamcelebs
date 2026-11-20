// ═══════════════════════════════════════════════════════════════════════════
// 037 — THE RECORD. Every figure the film draws. Verified 2026-11-18 (VO_SCRIPT.txt has the trail):
//   · Square press release, 1 Aug 2021: "implied value of approximately US$29 billion (A$39 billion)", all stock, a fixed
//     exchange ratio of 0.375 Square Class A shares per Afterpay share, based on Square's US$247.26 close on 30 Jul 2021.
//   · Block Form 10-Q, Q1 2022 (accession 0001628280-22-012707), acquisitions note: 113,617,352 Class A shares issued;
//     "the aggregate fair value of the shares issued was $13.8 billion"; stock issued in the acquisition US$13,827,929
//     thousand (the SEC's structured data for the filing), plus US$66,337 thousand expensed post-combination.
//   · DERIVED: (13,827,929 + 66,337) thousand / 113,617,352 = US$122.29 a share at closing; down 50.5% from US$247.26.
//   · Announced 1 Aug 2021; closed 31 Jan 2022 (US) / 1 Feb 2022 (Australia): six months.
//   · Square renamed Block: announced 1 Dec 2021, legal change on or about 10 Dec 2021.
//   · Gap: 29 − 13.8 = 15.2, shown "≈ $15,000,000,000".
// ★ Never a current Block share price. No dots between words on screen: "|".
// ═══════════════════════════════════════════════════════════════════════════

export const DEAL = { announced: 29_000_000_000, booked: 13_800_000_000, gap: 15_000_000_000, ratio: 0.375 } as const;
export const PRICE = { announce: 247.26, announceDate: "30 JUL 2021", close: 122.29, closeDate: "31 JAN 2022" } as const;
export const DATES = { contract: "1 AUG 2021", from: "AUG 2021", to: "JAN 2022", form: "FORM 10-Q | Q1 2022" } as const;
export const NAMES = { buyer: "JACK DORSEY | CEO, SQUARE", holders: "AFTERPAY SHAREHOLDERS", was: "SQUARE", now: "BLOCK" } as const;
export const FILING_LINE = "AGGREGATE FAIR VALUE OF THE SHARES ISSUED: $13.8 BILLION";
