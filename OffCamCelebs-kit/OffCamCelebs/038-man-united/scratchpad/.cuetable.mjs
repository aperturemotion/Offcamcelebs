// src/audit/cues.ts
var VO_START = 0;
var CUES = [
  {
    scene: "hook",
    a: 0,
    b: 6.86,
    text: 'When his Anthony Joshua fight was announced, Jake Paul posted: "Stop asking me. $267 million."',
    w: [["When", 0], ["his", 0.2], ["Anthony", 0.36], ["Joshua", 0.76], ["fight", 1.22], ["was", 1.5], ["announced,", 1.66], ["Jake", 2.54], ["Paul", 2.72], ["posted,", 2.94], ["Stop", 3.75], ["asking", 4.04], ["me", 4.6], ["$267", 5.021], ["million.", 5.84]]
  },
  {
    scene: "hook",
    a: 7.1,
    b: 11.24,
    text: "Forbes' estimate for both of his fights that year combined: about $60 million.",
    w: [["Forbes'", 7.1], ["estimate", 7.56], ["for", 7.88], ["both", 8.2], ["of", 8.46], ["his", 8.62], ["fights", 8.76], ["that", 9.02], ["year", 9.24], ["combined,", 9.44], ["about", 10.18], ["$60", 10.38], ["million.", 10.82]]
  },
  {
    scene: "rise",
    a: 11.748,
    b: 15.03,
    text: "Jake Paul went from YouTube to boxing to Netflix.",
    w: [["Jake", 11.748], ["Paul", 11.95], ["went", 12.23], ["from", 12.41], ["YouTube", 12.63], ["to", 13.499], ["boxing", 13.59], ["to", 14.49], ["Netflix.", 14.61]]
  },
  {
    scene: "rise",
    a: 15.401,
    b: 18.75,
    text: "Before fighting Mike Tyson, he said he was there to make $40 million.",
    w: [["Before", 15.401], ["fighting", 15.65], ["Mike", 15.99], ["Tyson,", 16.25], ["he", 17.062], ["said", 17.13], ["he", 17.31], ["was", 17.47], ["there", 17.59], ["to", 17.79], ["make", 17.91], ["$40", 18.09], ["million.", 18.49]]
  },
  {
    scene: "rise",
    a: 19.111,
    b: 21.11,
    text: "That purse was never officially disclosed.",
    w: [["That", 19.111], ["purse", 19.29], ["was", 19.55], ["never", 19.77], ["officially", 20.13], ["disclosed.", 20.61]]
  },
  {
    scene: "official",
    a: 21.783,
    b: 28.3,
    text: "When a state commission did publish his pay, California, 2025, his guaranteed purse was $300,000.",
    w: [["When", 21.783], ["a", 21.86], ["state", 21.98], ["commission", 22.18], ["did", 22.46], ["publish", 22.9], ["his", 23.26], ["pay,", 23.48], ["California,", 24.07], ["2025,", 24.833], ["his", 25.889], ["guaranteed", 26], ["purse", 26.34], ["was", 26.84], ["$300,000.", 27.234]]
  },
  {
    scene: "official",
    a: 28.944,
    b: 31.26,
    text: "His opponent got two and a half times that.",
    w: [["His", 28.944], ["opponent", 29.02], ["got", 29.634], ["two", 29.898], ["and", 30.06], ["a", 30.22], ["half", 30.3], ["times", 30.48], ["that.", 30.9]]
  },
  {
    scene: "why",
    a: 31.752,
    b: 34.75,
    text: "That's because Paul co-founded the company that promoted his fights.",
    w: [["That's", 31.752], ["because", 31.93], ["Paul", 32.19], ["co-founded", 32.49], ["the", 33.07], ["company", 33.31], ["that", 33.59], ["promoted", 33.83], ["his", 34.19], ["fights.", 34.47]]
  },
  {
    scene: "why",
    a: 35.138,
    b: 39.41,
    text: "Much of his money can come from the event's profits, and no commission publishes those.",
    w: [["Much", 35.138], ["of", 35.31], ["his", 35.45], ["money", 35.59], ["can", 35.83], ["come", 36.03], ["from", 36.21], ["the", 36.39], ["event's", 36.51], ["profits,", 36.928], ["and", 37.752], ["no", 37.87], ["commission", 38.15], ["publishes", 38.47], ["those.", 38.95]]
  },
  {
    scene: "joshua",
    a: 40.02,
    b: 44.52,
    text: "For the Joshua fight, reports ranged from $40 million each to $92 million.",
    w: [["For", 40.02], ["the", 40.1], ["Joshua", 40.24], ["fight,", 40.62], ["reports", 41.29], ["ranged", 41.64], ["from", 41.98], ["$40", 42.3], ["million", 42.7], ["each", 42.94], ["to", 43.595], ["$92", 43.7], ["million.", 44.12]]
  },
  {
    scene: "joshua",
    a: 44.651,
    b: 46.64,
    text: "Joshua said it wasn't even his biggest payday.",
    w: [["Joshua", 44.651], ["said", 45.02], ["it", 45.28], ["wasn't", 45.4], ["even", 45.62], ["his", 45.84], ["biggest", 46.02], ["payday.", 46.32]]
  },
  {
    scene: "joshua",
    a: 47.08,
    b: 48.66,
    text: "Then he knocked Paul out.",
    w: [["Then", 47.08], ["he", 47.653], ["knocked", 47.72], ["Paul", 48.06], ["out.", 48.34]]
  },
  {
    scene: "fair",
    a: 49.15,
    b: 53.25,
    text: "To be fair: Forbes still ranks Paul among the world's highest-paid athletes.",
    w: [["To", 49.15], ["be", 49.21], ["fair,", 49.35], ["Forbes", 50.09], ["still", 50.29], ["ranks", 50.69], ["Paul", 51.03], ["among", 51.37], ["the", 51.65], ["world's", 51.85], ["highest", 52.19], ["paid", 52.49], ["athletes.", 52.79]]
  },
  {
    scene: "verdict",
    a: 53.906,
    b: 55.76,
    text: "But $267 million?",
    w: [["But", 53.906], ["$267", 54.085], ["million?", 54.9]]
  },
  {
    scene: "verdict",
    a: 56.18,
    b: 59.32,
    text: "Every independent estimate of his pay falls far short.",
    w: [["Every", 56.18], ["independent", 56.5], ["estimate", 56.98], ["of", 57.36], ["his", 57.6], ["pay", 57.72], ["falls", 58.06], ["far", 58.44], ["short.", 58.9]]
  },
  {
    scene: "verdict",
    a: 59.517,
    b: 60.82,
    text: "Our rating: inflated.",
    w: [["Our", 59.517], ["rating?", 59.64], ["Inflated.", 60.22]]
  },
  {
    scene: "verdict",
    a: 61.04,
    b: 62.18,
    text: "Send us who to audit next.",
    w: [["Send", 61.04], ["us", 61.16], ["who", 61.32], ["to", 61.5], ["audit", 61.62], ["next.", 61.82]]
  }
];
export {
  CUES,
  VO_START
};
