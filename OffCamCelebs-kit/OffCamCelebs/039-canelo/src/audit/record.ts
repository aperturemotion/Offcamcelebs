// 039 Canelo Álvarez / the DAZN deal: the figures the places print (VO_SCRIPT.txt has each source)
export const DEAL = { headline: 365_000_000, fights: 11, years: 5, perFight: 35_000_000, firstFight: 15_000_000, licence: 40_000_000, suit: 280_000_000, byLawsuit: 85_000_000 } as const;
export const DATES = { signed: "OCT 17 2018", fielding: "DEC 15 2018", jacobs: "MAY 4 2019", kovalev: "NOV 2 2019", sued: "SEP 8 2020", parted: "NOV 6 2020" } as const;
export const FIGHTS = [
  { opp: "FIELDING", date: "DEC 15 2018", pay: 15_000_000 },
  { opp: "JACOBS", date: "MAY 4 2019", pay: 35_000_000 },
  { opp: "KOVALEV", date: "NOV 2 2019", pay: 35_000_000 },
] as const;
