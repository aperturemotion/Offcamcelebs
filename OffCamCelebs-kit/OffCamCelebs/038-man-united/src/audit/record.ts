// ═══════════════════════════════════════════════════════════════════════════
// 038 — THE RECORD. Every figure the film draws. Verified 2026-11-20 (VO_SCRIPT.txt has the trail):
//   · Irish Examiner, 13 May 2005: offer £790.3m; a £265m loan facility plus £275m of securities "which have no hold over
//     Manchester United's assets". £265m + £275m = £540m borrowed.
//   · August 2006 refinancing: about £525m of bank debt on the club, £135–138m of PIK debt outside it ("within a year").
//   · BBC News, 22 Jan 2010: United raised £504m through a bond issue (£250m at 8.75%, $425m at 8.375%, due 2017).
//   · ESPN: the cost of financing the Glazers' ownership (interest, debt repayments, dividends) passed £1bn by 2018 (ESPN's
//     estimate; its own pieces also date it to 2015).
//   · Manchester United plc FY2026 results (23 Sep 2026; year to 30 Jun 2026): non-current borrowings £577.6m ($775m);
//     current borrowings incl. accrued interest £111.4m (revolving credit £110.0m drawn); net finance costs £69.6m (prior
//     year £21.2m).
//   · DERIVED: £577.6m + £111.4m = £689.0m; £69.6m / 365 = £190,685 a day.
//   · Trophies after June 2005: Premier League 2006/07, 2007/08, 2008/09, 2010/11, 2012/13; Champions League 2007/08.
// ★ No "·" on screen: "|". Today's £689m is CURRENT borrowing, never the 2005 loan. "Net finance costs", never "interest".
// ═══════════════════════════════════════════════════════════════════════════

export const TAKEOVER = { price: 790_000_000, offer: 790_300_000, loan: 265_000_000, securities: 275_000_000, borrowed: 540_000_000, year: 2005 } as const;
export const BONDS = { raised: 504_000_000, year: 2010, label: "MANCHESTER UNITED | SENIOR SECURED NOTES | 2010" } as const;
export const ESPN = { cost: 1_000_000_000, label: "COST OF FINANCING THE TAKEOVER | ESPN ESTIMATE, 2018" } as const;
export const NOW = { borrowings: 689_000_000, date: "30 JUN 2026", financeCosts: 69_600_000, season: "2025/26", perDay: 190_000 } as const;
export const TITLES = { league: [2007, 2008, 2009, 2011, 2013], ucl: 2008 } as const;
export const NAMES = {
  glazers: ["THE GLAZER FAMILY", "TAMPA, FLORIDA"], club: ["MANCHESTER UNITED", "OLD TRAFFORD"],
  bought: "BOUGHT BY: THE GLAZERS", paidFor: "PAID FOR BY: MANCHESTER UNITED", billed: "BILLED TO: MANCHESTER UNITED",
} as const;
