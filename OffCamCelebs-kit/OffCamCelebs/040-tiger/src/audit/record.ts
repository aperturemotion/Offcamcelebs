// 040 Tiger Woods / the LIV Golf offer: the figures and words the places print (VO_SCRIPT.txt has each source)
export const OFFER = { headline: 800_000_000, hostLow: 700_000_000, hostHigh: 800_000_000 } as const;
export const QUOTES = {
  wapo: { who: "GREG NORMAN, LIV GOLF CEO", to: "THE WASHINGTON POST, JUNE 2022", words: "\u201cMind-blowingly enormous. We\u2019re talking about high nine digits.\u201d" },
  fox: { who: "GREG NORMAN, LIV GOLF CEO", to: "FOX NEWS, AUG 1 2022", words: "\u201cSomewhere in that neighborhood.\u201d" },
  saudi: { who: "MAJED AL SOROUR, GOLF SAUDI CEO", to: "THE NEW YORKER, 2022", words: "\u201cI never offered him that money, not even close.\u201d" },
} as const;
export const MAJORS = 15;
