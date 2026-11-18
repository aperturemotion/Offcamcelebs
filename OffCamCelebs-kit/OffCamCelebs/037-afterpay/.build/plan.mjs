// src/audit/cues.ts
var VO_START = 0;
var CUES = [
  {
    scene: "hook",
    a: 0,
    b: 3.58,
    text: "An American company bought Afterpay for $29 billion.",
    w: [["An", 0], ["American", 0.16], ["company", 0.54], ["bought", 1.04], ["Afterpay", 1.44], ["for", 1.98], ["$29", 2.24], ["billion,", 3.315]]
  },
  {
    scene: "hook",
    a: 4.478,
    b: 8.44,
    text: "But when the deal closed, its own filing put the price at 13.8.",
    w: [["but", 4.478], ["when", 4.6], ["the", 4.74], ["deal", 4.86], ["closed,", 5.02], ["its", 5.92], ["own", 6.06], ["filing", 6.34], ["put", 6.72], ["the", 6.94], ["price", 7.1], ["at", 7.34], ["13.8.", 7.58]]
  },
  {
    scene: "hook",
    a: 8.44,
    b: 10.28,
    text: "So which number is right?",
    w: [["So", 8.44], ["which", 9.12], ["number", 9.58], ["is", 9.78], ["right?", 10.04]]
  },
  {
    scene: "explain",
    a: 10.54,
    b: 11.16,
    text: "Let us explain.",
    w: [["Let", 10.54], ["us", 10.64], ["explain.", 10.78]]
  },
  {
    scene: "deal",
    a: 11.88,
    b: 16.86,
    text: "In August 2021, Jack Dorsey's company, Square, agreed to buy Afterpay.",
    w: [["In", 11.88], ["August", 11.98], ["2021,", 12.3], ["Jack", 13.63], ["Dorsey's", 13.84], ["company", 14.36], ["Square", 14.68], ["agreed", 15.518], ["to", 15.8], ["buy", 16.02], ["Afterpay.", 16.26]]
  },
  {
    scene: "deal",
    a: 17.058,
    b: 18.54,
    text: "But Square didn't pay in cash.",
    w: [["But", 17.058], ["Square", 17.16], ["didn't", 17.46], ["pay", 17.86], ["in", 18.06], ["cash.", 18.2]]
  },
  {
    scene: "deal",
    a: 18.92,
    b: 20.4,
    text: "It paid in its own shares.",
    w: [["It", 18.92], ["paid", 19.02], ["in", 19.32], ["its", 19.56], ["own", 19.7], ["shares.", 19.96]]
  },
  {
    scene: "deal",
    a: 20.8,
    b: 25.06,
    text: "For every Afterpay share, you got 0.375 of a Square share.",
    w: [["For", 20.8], ["every", 20.88], ["Afterpay", 21.26], ["share,", 21.82], ["you", 22.413], ["got", 22.56], [".375", 22.902], ["of", 23.6], ["a", 24.38], ["Square", 24.52], ["share.", 24.76]]
  },
  {
    scene: "price",
    a: 25.275,
    b: 28.3,
    text: "At the time, each Square share was worth $247.",
    w: [["At", 25.275], ["the", 25.36], ["time,", 25.5], ["each", 26.104], ["Square", 26.28], ["share", 26.62], ["was", 26.92], ["worth", 27.14], ["$247.", 27.538]]
  },
  {
    scene: "price",
    a: 29.315,
    b: 31.86,
    text: "Multiply it out, and you get 29 billion.",
    w: [["Multiply", 29.315], ["it", 29.74], ["out,", 29.84], ["and", 30.39], ["you", 30.46], ["get", 30.62], ["$29", 31.092], ["billion.", 31.5]]
  },
  {
    scene: "catch",
    a: 32.06,
    b: 32.76,
    text: "But here's the catch.",
    w: [["But", 32.06], ["here's", 32.08], ["the", 32.36], ["catch.", 32.48]]
  },
  {
    scene: "close",
    a: 33.61,
    b: 35.68,
    text: "The deal took six months to close.",
    w: [["The", 33.61], ["deal", 33.68], ["took", 33.98], ["six", 34.26], ["months", 34.7], ["to", 35.08], ["close.", 35.32]]
  },
  {
    scene: "close",
    a: 35.98,
    b: 40.6,
    text: "By then, Square had renamed itself Block, and its share price had roughly halved.",
    w: [["By", 35.98], ["then,", 36.04], ["Square", 36.62], ["had", 36.9], ["renamed", 37.12], ["itself", 37.5], ["Block,", 38.142], ["and", 38.669], ["its", 38.74], ["share", 38.92], ["price", 39.16], ["had", 39.48], ["roughly", 39.68], ["halved.", 40.04]]
  },
  {
    scene: "close",
    a: 40.76,
    b: 43.02,
    text: "Same number of shares. About half the price.",
    w: [["Same", 40.76], ["number", 40.94], ["of", 41.16], ["shares,", 41.38], ["about", 41.989], ["half", 42.2], ["the", 42.56], ["price.", 42.76]]
  },
  {
    scene: "close",
    a: 43.33,
    b: 48.98,
    text: "So when the deal closed, Block told the SEC what those shares were worth: 13.8 billion.",
    w: [["So", 43.33], ["when", 43.44], ["the", 43.58], ["deal", 43.7], ["closed,", 43.86], ["Block", 44.76], ["told", 44.98], ["the", 45.22], ["SEC", 45.4], ["what", 45.8], ["those", 46.315], ["shares", 46.5], ["were", 46.74], ["worth,", 46.98], ["$13.8", 47.58], ["billion.", 48.679]]
  },
  {
    scene: "fair",
    a: 49.16,
    b: 55.3,
    text: "To be fair, 29 billion was real on day one, and Afterpay's shareholders got the shares they were promised.",
    w: [["To", 49.16], ["be", 49.24], ["fair,", 49.38], ["$29", 50.02], ["billion", 50.44], ["was", 50.82], ["real", 51.18], ["on", 51.56], ["day", 51.84], ["one,", 52.02], ["and", 52.662], ["Afterpay", 52.86], ["shareholders", 53.34], ["got", 53.78], ["the", 54.24], ["shares", 54.4], ["they", 54.62], ["were", 54.8], ["promised.", 54.96]]
  },
  {
    scene: "verdict",
    a: 55.3,
    b: 59.06,
    text: "But the price tag everyone remembers was never the price paid.",
    w: [["But", 55.3], ["the", 55.64], ["price", 55.8], ["tag", 56.04], ["everyone", 56.28], ["remembers", 56.74], ["was", 57.26], ["never", 57.76], ["the", 58.16], ["price", 58.38], ["paid.", 58.66]]
  },
  {
    scene: "verdict",
    a: 59.25,
    b: 60.52,
    text: "Our rating: inflated.",
    w: [["Our", 59.25], ["rating?", 59.4], ["Inflated.", 59.93]]
  },
  {
    scene: "verdict",
    a: 60.74,
    b: 62,
    text: "Send us who to audit next.",
    w: [["Send", 60.74], ["us", 60.88], ["who", 61.04], ["to", 61.24], ["audit", 61.42], ["next.", 61.6]]
  }
];

// src/audit/script_fixes.json
var script_fixes_default = {
  note: "037 \u2014 script v2 (2026-11-18). Lines the BRIEF had that fail verification: any caption matching a `bad` pattern means a take was read from the brief. Read with JSON.parse.",
  fixes: [
    {
      at: "hook c0",
      brief: "That's the number on every headline.",
      briefSpoken: "That's the number on every headline.",
      use: "(line dropped in v2)",
      why: "'Every' cannot be shown.",
      bad: "\\bevery headline\\b"
    },
    {
      at: "price c0",
      brief: "That day, one Square share was worth two hundred and forty-seven dollars.",
      briefSpoken: "That day, one Square share was worth two hundred and forty-seven dollars.",
      use: "At the time, each Square share was worth two hundred and forty-seven dollars.",
      why: "US$247.26 is the 30 Jul 2021 close; 1 Aug 2021 was a Sunday.",
      bad: "\\bthat day,? (one|each) square share\\b"
    },
    {
      at: "fair c0",
      brief: "and Afterpay's owners kept those shares.",
      briefSpoken: "and Afterpay's owners kept those shares.",
      use: "and Afterpay's shareholders got the shares they were promised.",
      why: "They received the shares; whether holders kept them is undocumented.",
      bad: "\\b(owners|shareholders) kept those shares\\b"
    }
  ],
  guardrails: [
    {
      why: "$29B was accurate on announcement day: never imply Square, Block, Dorsey or the founders misled anyone (the brief).",
      bad: "\\b(lied|lying|misled|mislead\\w*|deceiv\\w*|cover(ed)?[- ]up|hid the|fake)\\b",
      example: "Square misled the market."
    },
    {
      why: "Never say founders or shareholders 'lost' $15B: they received Block shares whose value kept moving (the brief).",
      bad: "\\b(lost|losing|wiped out|robbed|cheated)\\b",
      example: "Shareholders lost fifteen billion."
    },
    {
      why: "No current Block share price anywhere (the brief).",
      bad: "\\b(today|now|currently)\\b[^.]*\\b(share|stock) price\\b|\\b(share|stock) price\\b[^.]*\\b(today|now|currently)\\b",
      example: "Today the share price is sixty dollars."
    },
    {
      why: "'Fraud' and 'scam' never appear (standing rule).",
      bad: "\\b(fraud|scam)\\w*\\b",
      example: "The deal was a scam."
    },
    {
      why: "The verdict rates the $29 billion figure as the price paid, not any person or company (the brief).",
      bad: "\\b(afterpay|square|block|dorsey|the founders?) (is|was|are|were) (inflated|overpriced|overvalued|dishonest)\\b",
      example: "Afterpay was overvalued."
    }
  ]
};

// src/audit/data.ts
var FPS = 30;
var COMPOSITION_ID = "InfluencerAudit037";
var SCRIPT_FIXES = script_fixes_default.fixes;
var said = (re) => CUES.some((c2) => re.test(c2.text));
var TAKE = {
  /** the sign-off is SPOKEN (019: a take read from the brief had none) */
  ctaSpoken: said(/audit next/i)
};
var HAS_VO = true;
var HAS_MUSIC = true;
var HAS_SFX = true;
var VO_SKIP_FRAMES = Math.round(VO_START * FPS);
var VO_GAIN = 1;
var MUSIC_FILE = "music_bigrichtown_bed.wav";
var MUSIC_GAIN = 0.505;
var SCENE_ORDER = ["hook", "explain", "deal", "price", "catch", "close", "fair", "verdict"];
var SCENE_CUES = { hook: 3, explain: 1, deal: 4, price: 2, catch: 1, close: 4, fair: 1, verdict: 3 };
{
  const got = {};
  for (const c2 of CUES) got[c2.scene] = (got[c2.scene] ?? 0) + 1;
  const bad = SCENE_ORDER.filter((id) => (got[id] ?? 0) !== SCENE_CUES[id]).map((id) => `${id}: wired ${got[id] ?? 0}, the film indexes ${SCENE_CUES[id]}`);
  if (bad.length) throw new Error("037 CUE COUNT MISMATCH \u2014 the wired take does not match the film.\n" + bad.map((b2) => "  \xB7 " + b2).join("\n"));
}
var OUTRO_SEC = 0.8;
var VO_END = Math.round(CUES[CUES.length - 1].b * FPS);
var OUTRO_HOLD = Math.round(OUTRO_SEC * FPS);
var TOTAL_FRAMES = VO_END + OUTRO_HOLD;

// src/audit/bedenv.ts
var BED_ENV = [
  [7.24, 0.4],
  [17.24, -1.4],
  [27.24, 0.6],
  [37.24, -0.6],
  [47.24, 1],
  [57.24, -0.9]
];

// ../034-ohtani/node_modules/preact/dist/preact.mjs
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var a;
var s;
var h;
var p;
var v;
var y;
var d = {};
var w = [];
var _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var g = Array.isArray;
function m(n2, l2) {
  for (var u3 in l2) n2[u3] = l2[u3];
  return n2;
}
function b(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function x(n2, t2, i2, r2, o2) {
  var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u : o2, __i: -1, __u: 0 };
  return null == o2 && null != l.vnode && l.vnode(e2), e2;
}
function S(n2) {
  return n2.children;
}
function C(n2, l2) {
  this.props = n2, this.context = l2;
}
function $(n2, l2) {
  if (null == l2) return n2.__ ? $(n2.__, n2.__i + 1) : null;
  for (var u3; l2 < n2.__k.length; l2++) if (null != (u3 = n2.__k[l2]) && null != u3.__e) return u3.__e;
  return "function" == typeof n2.type ? $(n2) : null;
}
function I(n2) {
  if (n2.__P && n2.__d) {
    var u3 = n2.__v, t2 = u3.__e, i2 = [], r2 = [], o2 = m({}, u3);
    o2.__v = u3.__v + 1, l.vnode && l.vnode(o2), q(n2.__P, o2, u3, n2.__n, n2.__P.namespaceURI, 32 & u3.__u ? [t2] : null, i2, null == t2 ? $(u3) : t2, !!(32 & u3.__u), r2), o2.__v = u3.__v, o2.__.__k[o2.__i] = o2, D(i2, o2, r2), u3.__e = u3.__ = null, o2.__e != t2 && P(o2);
  }
}
function P(n2) {
  if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l2) {
    if (null != l2 && null != l2.__e) return n2.__e = n2.__c.base = l2.__e;
  }), P(n2);
}
function A(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
}
function H() {
  try {
    for (var n2, l2 = 1; i.length; ) i.length > l2 && i.sort(e), n2 = i.shift(), l2 = i.length, I(n2);
  } finally {
    i.length = H.__r = 0;
  }
}
function L(n2, l2, u3, t2, i2, r2, o2, e2, f2, c2, a2) {
  var s2, h2, p2, v2, y2, _2, g2 = t2 && t2.__k || w, m2 = l2.length;
  for (f2 = T(u3, l2, g2, f2, m2), s2 = 0; s2 < m2; s2++) null != (p2 = u3.__k[s2]) && (h2 = -1 != p2.__i && g2[p2.__i] || d, p2.__i = s2, _2 = q(n2, p2, h2, i2, r2, o2, e2, f2, c2, a2), v2 = p2.__e, p2.ref && h2.ref != p2.ref && (h2.ref && J(h2.ref, null, p2), a2.push(p2.ref, p2.__c || v2, p2)), null == y2 && null != v2 && (y2 = v2), 4 & p2.__u ? (f2 = j(p2, f2, n2), h2.__e && (h2.__e = null)) : "function" == typeof p2.type && void 0 !== _2 ? f2 = _2 : v2 && (f2 = v2.nextSibling), p2.__u &= -7);
  return u3.__e = y2, f2;
}
function T(n2, l2, u3, t2, i2) {
  var r2, o2, e2, f2, c2, a2 = u3.length, s2 = a2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? ("string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? o2 = n2.__k[r2] = x(null, o2, null, null, null) : g(o2) ? o2 = n2.__k[r2] = x(S, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? o2 = n2.__k[r2] = x(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : n2.__k[r2] = o2, f2 = r2 + h2, o2.__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 != (c2 = o2.__i = O(o2, u3, f2, s2)) && (s2--, (e2 = u3[c2]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c2 && (i2 > a2 ? h2-- : i2 < a2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (s2) for (r2 = 0; r2 < a2; r2++) null != (e2 = u3[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = $(e2)), K(e2, e2));
  return t2;
}
function j(n2, l2, u3) {
  var t2, i2;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++) t2[i2] && (t2[i2].__ = n2, l2 = j(t2[i2], l2, u3));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !l2.parentNode && (l2 = $(n2)), l2 = u3.insertBefore(n2.__e, l2 || null));
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function O(n2, l2, u3, t2) {
  var i2, r2, o2, e2 = n2.key, f2 = n2.type, c2 = l2[u3], a2 = null != c2 && 0 == (2 & c2.__u);
  if (null === c2 && null == e2 || a2 && e2 == c2.key && f2 == c2.type) return u3;
  if (t2 > (a2 ? 1 : 0)) {
    for (i2 = u3 - 1, r2 = u3 + 1; i2 >= 0 || r2 < l2.length; ) if (null != (c2 = l2[o2 = i2 >= 0 ? i2-- : r2++]) && 0 == (2 & c2.__u) && e2 == c2.key && f2 == c2.type) return o2;
  }
  return -1;
}
function z(n2, l2, u3) {
  "-" == l2[0] ? n2.setProperty(l2, null == u3 ? "" : u3) : n2[l2] = null == u3 ? "" : "number" != typeof u3 || _.test(l2) ? u3 : u3 + "px";
}
function N(n2, l2, u3, t2, i2) {
  var r2, o2;
  n: if ("style" == l2) if ("string" == typeof u3) n2.style.cssText = u3;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u3 && l2 in u3 || z(n2.style, l2, "");
    if (u3) for (l2 in u3) t2 && u3[l2] == t2[l2] || z(n2.style, l2, u3[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(s, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u3, u3 ? t2 ? u3[a] = t2[a] : (u3[a] = h, n2.addEventListener(l2, r2 ? v : p, r2)) : n2.removeEventListener(l2, r2 ? v : p, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u3 ? "" : u3;
      break n;
    } catch (n3) {
    }
    "function" == typeof u3 || (null == u3 || false === u3 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u3 ? "" : u3));
  }
}
function V(n2) {
  return function(u3) {
    if (this.l) {
      var t2 = this.l[u3.type + n2];
      if (null == u3[c]) u3[c] = h++;
      else if (u3[c] < t2[a]) return;
      return t2(l.event ? l.event(u3) : u3);
    }
  };
}
function q(n2, u3, t2, i2, r2, o2, e2, f2, c2, a2) {
  var s2, h2, p2, v2, y2, d2, _2, k2, x2, M, I2, P2, A3, H2, T2, j2, F2 = u3.type;
  if (void 0 !== u3.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f2 = u3.__e = t2.__e]), (s2 = l.__b) && s2(u3);
  n: if ("function" == typeof F2) {
    h2 = e2.length;
    try {
      if (x2 = u3.props, M = F2.prototype && F2.prototype.render, I2 = (s2 = F2.contextType) && i2[s2.__c], P2 = s2 ? I2 ? I2.props.value : s2.__ : i2, t2.__c ? k2 = (p2 = u3.__c = t2.__c).__ = p2.__E : (M ? u3.__c = p2 = new F2(x2, P2) : (u3.__c = p2 = new C(x2, P2), p2.constructor = F2, p2.render = Q), I2 && I2.sub(p2), p2.state || (p2.state = {}), p2.__n = i2, v2 = p2.__d = true, p2.__h = [], p2._sb = []), M && null == p2.__s && (p2.__s = p2.state), M && null != F2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = m({}, p2.__s)), m(p2.__s, F2.getDerivedStateFromProps(x2, p2.__s))), y2 = p2.props, d2 = p2.state, p2.__v = u3, v2) M && null == F2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), M && null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
      else {
        if (M && null == F2.getDerivedStateFromProps && x2 !== y2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(x2, P2), u3.__v == t2.__v || !p2.__e && null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(x2, p2.__s, P2)) {
          u3.__v != t2.__v && (p2.props = x2, p2.state = p2.__s, p2.__d = false), u3.__e = t2.__e, u3.__k = t2.__k, u3.__k.some(function(n3) {
            n3 && (n3.__ = u3);
          }), w.push.apply(p2.__h, p2._sb), p2._sb = [], p2.__h.length && e2.push(p2), f2 = $(t2);
          break n;
        }
        null != p2.componentWillUpdate && p2.componentWillUpdate(x2, p2.__s, P2), M && null != p2.componentDidUpdate && p2.__h.push(function() {
          p2.componentDidUpdate(y2, d2, _2);
        });
      }
      if (p2.context = P2, p2.props = x2, p2.__P = n2, p2.__e = false, A3 = l.__r, H2 = 0, M) p2.state = p2.__s, p2.__d = false, A3 && A3(u3), s2 = p2.render(p2.props, p2.state, p2.context), w.push.apply(p2.__h, p2._sb), p2._sb = [];
      else do {
        p2.__d = false, A3 && A3(u3), s2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
      } while (p2.__d && ++H2 < 25);
      p2.state = p2.__s, null != p2.getChildContext && (i2 = m(m({}, i2), p2.getChildContext())), M && !v2 && null != p2.getSnapshotBeforeUpdate && (_2 = p2.getSnapshotBeforeUpdate(y2, d2)), T2 = null != s2 && s2.type === S && null == s2.key ? E(s2.props.children) : s2, f2 = L(n2, g(T2) ? T2 : [T2], u3, t2, i2, r2, o2, e2, f2, c2, a2), p2.base = u3.__e, u3.__u &= -161, p2.__h.length && e2.push(p2), k2 && (p2.__E = p2.__ = null);
    } catch (n3) {
      if (e2.length = h2, u3.__v = null, c2 || null != o2) {
        if (n3.then) {
          for (u3.__u |= c2 ? 160 : 128; f2 && 8 == f2.nodeType && f2.nextSibling; ) f2 = f2.nextSibling;
          null != o2 && (o2[o2.indexOf(f2)] = null), u3.__e = f2;
        } else if (null != o2) for (j2 = o2.length; j2--; ) b(o2[j2]);
      } else u3.__e = t2.__e;
      null == u3.__k && (u3.__k = t2.__k || []), n3.then || B(u3), l.__e(n3, u3, t2);
    }
  } else null == o2 && u3.__v == t2.__v ? (u3.__k = t2.__k, u3.__e = t2.__e) : f2 = u3.__e = G(t2.__e, u3, t2, i2, r2, o2, e2, c2, a2);
  return (s2 = l.diffed) && s2(u3), 128 & u3.__u ? void 0 : f2;
}
function B(n2) {
  n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
}
function D(n2, u3, t2) {
  for (var i2 = 0; i2 < t2.length; i2++) J(t2[i2], t2[++i2], t2[++i2]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function E(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : g(n2) ? n2.map(E) : void 0 !== n2.constructor ? null : m({}, n2);
}
function G(u3, t2, i2, r2, o2, e2, f2, c2, a2) {
  var s2, h2, p2, v2, y2, w2, _2, m2 = i2.props || d, k2 = t2.props, x2 = t2.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (s2 = 0; s2 < e2.length; s2++) if ((y2 = e2[s2]) && "setAttribute" in y2 == !!x2 && (x2 ? y2.localName == x2 : 3 == y2.nodeType)) {
      u3 = y2, e2[s2] = null;
      break;
    }
  }
  if (null == u3) {
    if (null == x2) return document.createTextNode(k2);
    u3 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(t2, e2), c2 = false), e2 = null;
  }
  if (null == x2) m2 === k2 || c2 && u3.data == k2 || (u3.data = k2);
  else {
    if (e2 = "textarea" == x2 && null != k2.defaultValue ? null : e2 && n.call(u3.childNodes), !c2 && null != e2) for (m2 = {}, s2 = 0; s2 < u3.attributes.length; s2++) m2[(y2 = u3.attributes[s2]).name] = y2.value;
    for (s2 in m2) y2 = m2[s2], "dangerouslySetInnerHTML" == s2 ? p2 = y2 : "children" == s2 || s2 in k2 || "value" == s2 && "defaultValue" in k2 || "checked" == s2 && "defaultChecked" in k2 || N(u3, s2, null, y2, o2);
    for (s2 in k2) y2 = k2[s2], "children" == s2 ? v2 = y2 : "dangerouslySetInnerHTML" == s2 ? h2 = y2 : "value" == s2 ? w2 = y2 : "checked" == s2 ? _2 = y2 : c2 && "function" != typeof y2 || m2[s2] === y2 || N(u3, s2, y2, m2[s2], o2);
    if (h2) c2 || p2 && (h2.__html == p2.__html || h2.__html == u3.innerHTML) || (u3.innerHTML = h2.__html), t2.__k = [];
    else if (p2 && (u3.innerHTML = ""), L("template" == t2.type ? u3.content : u3, g(v2) ? v2 : [v2], t2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f2, e2 ? e2[0] : i2.__k && $(i2, 0), c2, a2), null != e2) for (s2 = e2.length; s2--; ) b(e2[s2]);
    c2 && "textarea" != x2 || (s2 = "value", "progress" == x2 && null == w2 ? u3.removeAttribute("value") : null != w2 && (w2 !== u3[s2] || "progress" == x2 && !w2 || "option" == x2 && w2 != m2[s2]) && N(u3, s2, w2, m2[s2], o2), s2 = "checked", null != _2 && _2 != u3[s2] && N(u3, s2, _2, m2[s2], o2));
  }
  return u3;
}
function J(n2, u3, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u3 || (n2.__u = n2(u3));
    } else n2.current = u3;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function K(n2, u3, t2) {
  var i2, r2;
  if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || J(i2, null, u3)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u3);
    }
    i2.base = i2.__P = i2.__n = null;
  }
  if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && K(i2[r2], u3, t2 || "function" != typeof n2.type);
  t2 || b(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function Q(n2, l2, u3) {
  return this.constructor(n2, u3);
}
n = w.slice, l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, C.prototype.setState = function(n2, l2) {
  var u3;
  u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n2 && (n2 = n2(m({}, u3), this.props)), n2 && m(u3, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), A(this));
}, C.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), A(this));
}, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, a = "__a" + f, s = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

// src/shim/remotion.tsx
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var A2 = (a1, a2) => 1 - 3 * a2 + 3 * a1;
var B2 = (a1, a2) => 3 * a2 - 6 * a1;
var C2 = (a1) => 3 * a1;
var calcBezier = (t2, a1, a2) => ((A2(a1, a2) * t2 + B2(a1, a2)) * t2 + C2(a1)) * t2;
var getSlope = (t2, a1, a2) => 3 * A2(a1, a2) * t2 * t2 + 2 * B2(a1, a2) * t2 + C2(a1);
var bezier = (x1, y1, x2, y2) => {
  if (x1 === y1 && x2 === y2) return (x3) => x3;
  const sample = new Float32Array(kSplineTableSize);
  for (let i2 = 0; i2 < kSplineTableSize; ++i2) sample[i2] = calcBezier(i2 * kSampleStepSize, x1, x2);
  const tForX = (x3) => {
    let start = 0, cur = 1;
    const last = kSplineTableSize - 1;
    for (; cur !== last && sample[cur] <= x3; ++cur) start += kSampleStepSize;
    --cur;
    const dist = (x3 - sample[cur]) / (sample[cur + 1] - sample[cur]);
    const guess = start + dist * kSampleStepSize;
    const slope = getSlope(guess, x1, x2);
    if (slope >= NEWTON_MIN_SLOPE) {
      let t3 = guess;
      for (let i3 = 0; i3 < NEWTON_ITERATIONS; ++i3) {
        const s2 = getSlope(t3, x1, x2);
        if (s2 === 0) return t3;
        t3 -= (calcBezier(t3, x1, x2) - x3) / s2;
      }
      return t3;
    }
    if (slope === 0) return guess;
    let a2 = start, b2 = start + kSampleStepSize, t2 = 0, xx = 0, i2 = 0;
    do {
      t2 = a2 + (b2 - a2) / 2;
      xx = calcBezier(t2, x1, x2) - x3;
      if (xx > 0) b2 = t2;
      else a2 = t2;
    } while (Math.abs(xx) > SUBDIVISION_PRECISION && ++i2 < SUBDIVISION_MAX_ITERATIONS);
    return t2;
  };
  return (x3) => x3 === 0 || x3 === 1 ? x3 : calcBezier(tForX(x3), y1, y2);
};
var Easing = {
  bezier,
  linear: (t2) => t2,
  in: (e2) => e2,
  out: (e2) => (t2) => 1 - e2(1 - t2),
  inOut: (e2) => (t2) => t2 < 0.5 ? e2(t2 * 2) / 2 : 1 - e2((1 - t2) * 2) / 2,
  poly: (n2) => (t2) => Math.pow(t2, n2),
  cubic: (t2) => t2 * t2 * t2,
  sin: (t2) => 1 - Math.cos(t2 * Math.PI / 2)
};

// src/r45/tokens.ts
var SOFT = Easing.bezier(0.5, 0, 0.25, 1);
var ARRIVE = Easing.bezier(0.45, 0, 0.25, 1);
var SMOOTH = Easing.bezier(0.45, 0.05, 0.35, 1);
var TRAVEL = Easing.bezier(0.6, 0, 0.4, 1);
var SETTLE = Easing.bezier(0.4, 0.12, 0, 1);
var GLIDE = Easing.out(Easing.poly(4));
var INOUT = Easing.inOut(Easing.sin);
var COUNT = Easing.bezier(0.45, 0, 0.25, 1);
var EXIT = Easing.in(Easing.cubic);
var clamp01 = (x2) => Math.max(0, Math.min(1, x2));

// src/r45/SfxLayer.tsx
var EVEN = {
  coin: 0.1,
  ding: 0.699,
  flick: 0.09,
  thud: 0.06,
  tick: 0.03,
  sub: 0.043,
  bloom: 0.107,
  // ★ 029's take: airwoosh 0.101 → 0.072 (−3 dB): its 11 camera-move cues peaked +2.3 dB over the voice against the band's
  //   −0.7…−3.0 (sfxlevels028); every other family was in the band
  // ★ 028's take: click 0.327 → 0.232 (−3 dB). Its peaks sat +2.7 dB over the voice against Bankers V4's −0.9 (sfxlevels028)
  ping: 0.743,
  whooshlong: 0.202,
  whooshsoft: 0.202,
  click: 0.232,
  data: 0.286,
  airwoosh: 0.072,
  chain: 0.947,
  lowwoosh: 0.283,
  swoosh: 0.065,
  pingshort: 0.85,
  chainshort: 0.7,
  datashort: 0.34,
  datamid: 0.31
};
var PRESENCE = 0.94;
var GAIN = Object.fromEntries(Object.entries(EVEN).map(([k2, v2]) => [k2, v2 * PRESENCE]));
var LEN = {
  coin: 24,
  ding: 40,
  flick: 16,
  thud: 30,
  tick: 8,
  sub: 30,
  bloom: 60,
  ping: 108,
  whooshlong: 32,
  whooshsoft: 27,
  click: 7,
  data: 68,
  airwoosh: 53,
  chain: 90,
  lowwoosh: 75,
  swoosh: 40,
  pingshort: 39,
  chainshort: 32,
  datashort: 29,
  datamid: 48
};
var ONSET = {
  coin: 0,
  ding: 0,
  flick: 0,
  thud: 0,
  tick: 0,
  sub: 0,
  bloom: 0,
  ping: 0,
  whooshlong: 8,
  whooshsoft: 6,
  click: 0,
  data: 0,
  airwoosh: 19,
  chain: 0,
  lowwoosh: 10,
  swoosh: 10,
  pingshort: 0,
  chainshort: 4,
  datashort: 0,
  datamid: 0
};
var PEAK = {
  airwoosh: 21,
  bloom: 3,
  chain: 0,
  chainshort: 4,
  click: 0,
  coin: 0,
  data: 2,
  datamid: 2,
  datashort: 2,
  ding: 0,
  flick: 0,
  lowwoosh: 13,
  ping: 0,
  pingshort: 0,
  sub: 1,
  swoosh: 12,
  thud: 0,
  tick: 0,
  whooshlong: 13,
  whooshsoft: 8
};
var SUSTAINED = /* @__PURE__ */ new Set(["data", "datamid", "datashort", "chain", "chainshort", "lowwoosh", "airwoosh", "swoosh", "whooshlong", "whooshsoft"]);
var within = (beat) => (s2, visFrom, visTo, vol, why) => {
  const from = Math.max(Math.round(beat.at), Math.round(visFrom - ONSET[s2]));
  const stopBy = SUSTAINED.has(s2) && visTo !== void 0 ? Math.min(Math.round(visTo), Math.round(beat.end)) : Math.round(beat.end);
  const dur = Math.max(3, Math.min(LEN[s2], stopBy - from));
  return { s: s2, at: from, dur, fade: dur < LEN[s2] ? Math.min(10, Math.max(3, Math.round(dur / 3))) : 0, vol, why };
};
var peakOn = (beat) => (s2, peakAt, visTo, vol, why) => within(beat)(s2, peakAt - (PEAK[s2] - ONSET[s2]), visTo, vol, why);

// src/r45/score.ts
var buildScore = (sets, moves, placeCues) => {
  const cues = [];
  const w2 = (id) => {
    const x2 = sets.find((y2) => y2.id === id);
    return { at: x2.from, end: x2.to };
  };
  for (const m2 of moves) cues.push(peakOn(w2(m2.id))("airwoosh", m2.mid, m2.end, m2.vol, `the camera moves (${m2.id}: ${m2.why})`));
  for (const c2 of placeCues) cues.push((c2.kind === "move" ? peakOn : within)(w2(c2.id))(c2.s, c2.at, c2.end, c2.vol, c2.why));
  const MOVE = /* @__PURE__ */ new Set(["swoosh", "whooshlong", "whooshsoft", "airwoosh", "lowwoosh"]);
  const heard = (c2) => c2.at + PEAK[c2.s];
  const out = cues.filter((c2) => !(c2.why.startsWith("the camera moves") && cues.some((o2) => o2 !== c2 && MOVE.has(o2.s) && !o2.why.startsWith("the camera moves") && Math.abs(heard(o2) - heard(c2)) <= 6)));
  out.sort((a2, b2) => a2.at - b2.at);
  return { cues: out };
};

// src/world/cam.ts
var dolly = (at, dur, pos, look, x2 = {}) => ({ at, dur, pos, look, fov: x2.fov, ease: x2.ease ?? SETTLE, why: x2.why ?? "dolly" });
var cut = (at, pos, look, x2 = {}) => ({ at, dur: 0, pos, look, fov: x2.fov, roll: x2.roll, cut: true, dip: x2.dip ?? 0, why: x2.why ?? "cut", focus: x2.focus, still: x2.still });
var checkPath = (name, keys) => {
  for (let i2 = 1; i2 < keys.length; i2++) {
    const a2 = keys[i2 - 1], k2 = keys[i2];
    if (k2.at < a2.at + a2.dur - 1e-6) throw new Error(`camera ${name}: key ${i2} "${k2.why ?? ""}" (f${k2.at}) starts before key ${i2 - 1} "${a2.why ?? ""}" ends (f${a2.at + a2.dur}): camera keys never overlap`);
    if (!k2.cut && k2.dur < 1) throw new Error(`camera ${name}: key ${i2} "${k2.why ?? ""}" has no duration (use cut())`);
  }
  return keys;
};

// ../034-ohtani/node_modules/three/build/three.core.js
var REVISION = "181";
var FrontSide = 0;
var BackSide = 1;
var NormalBlending = 1;
var AdditiveBlending = 2;
var AddEquation = 100;
var SrcAlphaFactor = 204;
var OneMinusSrcAlphaFactor = 205;
var NeverDepth = 0;
var AlwaysDepth = 1;
var LessDepth = 2;
var LessEqualDepth = 3;
var EqualDepth = 4;
var GreaterEqualDepth = 5;
var GreaterDepth = 6;
var NotEqualDepth = 7;
var MultiplyOperation = 0;
var UVMapping = 300;
var RepeatWrapping = 1e3;
var ClampToEdgeWrapping = 1001;
var MirroredRepeatWrapping = 1002;
var LinearFilter = 1006;
var LinearMipmapLinearFilter = 1008;
var UnsignedByteType = 1009;
var FloatType = 1015;
var RGBAFormat = 1023;
var InterpolateDiscrete = 2300;
var InterpolateLinear = 2301;
var InterpolateSmooth = 2302;
var ZeroCurvatureEnding = 2400;
var ZeroSlopeEnding = 2401;
var WrapAroundEnding = 2402;
var TangentSpaceNormalMap = 0;
var NoColorSpace = "";
var SRGBColorSpace = "srgb";
var LinearSRGBColorSpace = "srgb-linear";
var LinearTransfer = "linear";
var SRGBTransfer = "srgb";
var KeepStencilOp = 7680;
var AlwaysStencilFunc = 519;
var StaticDrawUsage = 35044;
var WebGLCoordinateSystem = 2e3;
var WebGPUCoordinateSystem = 2001;
function arrayNeedsUint32(array) {
  for (let i2 = array.length - 1; i2 >= 0; --i2) {
    if (array[i2] >= 65535) return true;
  }
  return false;
}
function createElementNS(name) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", name);
}
var _cache = {};
var _setConsoleFunction = null;
function warn(...params) {
  const message = "THREE." + params.shift();
  if (_setConsoleFunction) {
    _setConsoleFunction("warn", message, ...params);
  } else {
    console.warn(message, ...params);
  }
}
function error(...params) {
  const message = "THREE." + params.shift();
  if (_setConsoleFunction) {
    _setConsoleFunction("error", message, ...params);
  } else {
    console.error(message, ...params);
  }
}
function warnOnce(...params) {
  const message = params.join(" ");
  if (message in _cache) return;
  _cache[message] = true;
  warn(...params);
}
var EventDispatcher = class {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(type, listener) {
    if (this._listeners === void 0) this._listeners = {};
    const listeners = this._listeners;
    if (listeners[type] === void 0) {
      listeners[type] = [];
    }
    if (listeners[type].indexOf(listener) === -1) {
      listeners[type].push(listener);
    }
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(type, listener) {
    const listeners = this._listeners;
    if (listeners === void 0) return false;
    return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(type, listener) {
    const listeners = this._listeners;
    if (listeners === void 0) return;
    const listenerArray = listeners[type];
    if (listenerArray !== void 0) {
      const index = listenerArray.indexOf(listener);
      if (index !== -1) {
        listenerArray.splice(index, 1);
      }
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(event) {
    const listeners = this._listeners;
    if (listeners === void 0) return;
    const listenerArray = listeners[event.type];
    if (listenerArray !== void 0) {
      event.target = this;
      const array = listenerArray.slice(0);
      for (let i2 = 0, l2 = array.length; i2 < l2; i2++) {
        array[i2].call(this, event);
      }
      event.target = null;
    }
  }
};
var _lut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
var DEG2RAD = Math.PI / 180;
var RAD2DEG = 180 / Math.PI;
function generateUUID() {
  const d0 = Math.random() * 4294967295 | 0;
  const d1 = Math.random() * 4294967295 | 0;
  const d2 = Math.random() * 4294967295 | 0;
  const d3 = Math.random() * 4294967295 | 0;
  const uuid = _lut[d0 & 255] + _lut[d0 >> 8 & 255] + _lut[d0 >> 16 & 255] + _lut[d0 >> 24 & 255] + "-" + _lut[d1 & 255] + _lut[d1 >> 8 & 255] + "-" + _lut[d1 >> 16 & 15 | 64] + _lut[d1 >> 24 & 255] + "-" + _lut[d2 & 63 | 128] + _lut[d2 >> 8 & 255] + "-" + _lut[d2 >> 16 & 255] + _lut[d2 >> 24 & 255] + _lut[d3 & 255] + _lut[d3 >> 8 & 255] + _lut[d3 >> 16 & 255] + _lut[d3 >> 24 & 255];
  return uuid.toLowerCase();
}
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function euclideanModulo(n2, m2) {
  return (n2 % m2 + m2) % m2;
}
function lerp(x2, y2, t2) {
  return (1 - t2) * x2 + t2 * y2;
}
function denormalize(value, array) {
  switch (array.constructor) {
    case Float32Array:
      return value;
    case Uint32Array:
      return value / 4294967295;
    case Uint16Array:
      return value / 65535;
    case Uint8Array:
      return value / 255;
    case Int32Array:
      return Math.max(value / 2147483647, -1);
    case Int16Array:
      return Math.max(value / 32767, -1);
    case Int8Array:
      return Math.max(value / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function normalize(value, array) {
  switch (array.constructor) {
    case Float32Array:
      return value;
    case Uint32Array:
      return Math.round(value * 4294967295);
    case Uint16Array:
      return Math.round(value * 65535);
    case Uint8Array:
      return Math.round(value * 255);
    case Int32Array:
      return Math.round(value * 2147483647);
    case Int16Array:
      return Math.round(value * 32767);
    case Int8Array:
      return Math.round(value * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var Vector2 = class _Vector2 {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(x2 = 0, y2 = 0) {
    _Vector2.prototype.isVector2 = true;
    this.x = x2;
    this.y = y2;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(value) {
    this.x = value;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(value) {
    this.y = value;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(x2, y2) {
    this.x = x2;
    this.y = y2;
    return this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    return this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(x2) {
    this.x = x2;
    return this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(y2) {
    this.y = y2;
    return this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(v2) {
    this.x = v2.x;
    this.y = v2.y;
    return this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(v2) {
    this.x += v2.x;
    this.y += v2.y;
    return this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(s2) {
    this.x += s2;
    this.y += s2;
    return this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(a2, b2) {
    this.x = a2.x + b2.x;
    this.y = a2.y + b2.y;
    return this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(v2, s2) {
    this.x += v2.x * s2;
    this.y += v2.y * s2;
    return this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(v2) {
    this.x -= v2.x;
    this.y -= v2.y;
    return this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(s2) {
    this.x -= s2;
    this.y -= s2;
    return this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(a2, b2) {
    this.x = a2.x - b2.x;
    this.y = a2.y - b2.y;
    return this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(v2) {
    this.x *= v2.x;
    this.y *= v2.y;
    return this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(v2) {
    this.x /= v2.x;
    this.y /= v2.y;
    return this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(m2) {
    const x2 = this.x, y2 = this.y;
    const e2 = m2.elements;
    this.x = e2[0] * x2 + e2[3] * y2 + e2[6];
    this.y = e2[1] * x2 + e2[4] * y2 + e2[7];
    return this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(v2) {
    this.x = Math.min(this.x, v2.x);
    this.y = Math.min(this.y, v2.y);
    return this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(v2) {
    this.x = Math.max(this.x, v2.x);
    this.y = Math.max(this.y, v2.y);
    return this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(min, max) {
    this.x = clamp(this.x, min.x, max.x);
    this.y = clamp(this.y, min.y, max.y);
    return this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(minVal, maxVal) {
    this.x = clamp(this.x, minVal, maxVal);
    this.y = clamp(this.y, minVal, maxVal);
    return this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(clamp(length, min, max));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    return this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(v2) {
    return this.x * v2.x + this.y * v2.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(v2) {
    return this.x * v2.y - this.y * v2.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    const angle = Math.atan2(-this.y, -this.x) + Math.PI;
    return angle;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(v2) {
    const denominator = Math.sqrt(this.lengthSq() * v2.lengthSq());
    if (denominator === 0) return Math.PI / 2;
    const theta = this.dot(v2) / denominator;
    return Math.acos(clamp(theta, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(v2) {
    return Math.sqrt(this.distanceToSquared(v2));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(v2) {
    const dx = this.x - v2.x, dy = this.y - v2.y;
    return dx * dx + dy * dy;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(v2) {
    return Math.abs(this.x - v2.x) + Math.abs(this.y - v2.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(v2, alpha) {
    this.x += (v2.x - this.x) * alpha;
    this.y += (v2.y - this.y) * alpha;
    return this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    return this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(v2) {
    return v2.x === this.x && v2.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    return this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    return array;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    return this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(center, angle) {
    const c2 = Math.cos(angle), s2 = Math.sin(angle);
    const x2 = this.x - center.x;
    const y2 = this.y - center.y;
    this.x = x2 * c2 - y2 * s2 + center.x;
    this.y = x2 * s2 + y2 * c2 + center.y;
    return this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    this.x = Math.random();
    this.y = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }
};
var Quaternion = class {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(x2 = 0, y2 = 0, z2 = 0, w2 = 1) {
    this.isQuaternion = true;
    this._x = x2;
    this._y = y2;
    this._z = z2;
    this._w = w2;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor in the range `[0,1]`.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t2) {
    let x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3];
    let x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
    if (t2 <= 0) {
      dst[dstOffset + 0] = x0;
      dst[dstOffset + 1] = y0;
      dst[dstOffset + 2] = z0;
      dst[dstOffset + 3] = w0;
      return;
    }
    if (t2 >= 1) {
      dst[dstOffset + 0] = x1;
      dst[dstOffset + 1] = y1;
      dst[dstOffset + 2] = z1;
      dst[dstOffset + 3] = w1;
      return;
    }
    if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
      let dot = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1;
      if (dot < 0) {
        x1 = -x1;
        y1 = -y1;
        z1 = -z1;
        w1 = -w1;
        dot = -dot;
      }
      let s2 = 1 - t2;
      if (dot < 0.9995) {
        const theta = Math.acos(dot);
        const sin = Math.sin(theta);
        s2 = Math.sin(s2 * theta) / sin;
        t2 = Math.sin(t2 * theta) / sin;
        x0 = x0 * s2 + x1 * t2;
        y0 = y0 * s2 + y1 * t2;
        z0 = z0 * s2 + z1 * t2;
        w0 = w0 * s2 + w1 * t2;
      } else {
        x0 = x0 * s2 + x1 * t2;
        y0 = y0 * s2 + y1 * t2;
        z0 = z0 * s2 + z1 * t2;
        w0 = w0 * s2 + w1 * t2;
        const f2 = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
        x0 *= f2;
        y0 *= f2;
        z0 *= f2;
        w0 *= f2;
      }
    }
    dst[dstOffset] = x0;
    dst[dstOffset + 1] = y0;
    dst[dstOffset + 2] = z0;
    dst[dstOffset + 3] = w0;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
    const x0 = src0[srcOffset0];
    const y0 = src0[srcOffset0 + 1];
    const z0 = src0[srcOffset0 + 2];
    const w0 = src0[srcOffset0 + 3];
    const x1 = src1[srcOffset1];
    const y1 = src1[srcOffset1 + 1];
    const z1 = src1[srcOffset1 + 2];
    const w1 = src1[srcOffset1 + 3];
    dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
    dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
    dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
    dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
    return dst;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(value) {
    this._z = value;
    this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(value) {
    this._w = value;
    this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(x2, y2, z2, w2) {
    this._x = x2;
    this._y = y2;
    this._z = z2;
    this._w = w2;
    this._onChangeCallback();
    return this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(quaternion) {
    this._x = quaternion.x;
    this._y = quaternion.y;
    this._z = quaternion.z;
    this._w = quaternion.w;
    this._onChangeCallback();
    return this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(euler, update = true) {
    const x2 = euler._x, y2 = euler._y, z2 = euler._z, order = euler._order;
    const cos = Math.cos;
    const sin = Math.sin;
    const c1 = cos(x2 / 2);
    const c2 = cos(y2 / 2);
    const c3 = cos(z2 / 2);
    const s1 = sin(x2 / 2);
    const s2 = sin(y2 / 2);
    const s3 = sin(z2 / 2);
    switch (order) {
      case "XYZ":
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "YXZ":
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      case "ZXY":
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "ZYX":
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      case "YZX":
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "XZY":
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      default:
        warn("Quaternion: .setFromEuler() encountered an unknown order: " + order);
    }
    if (update === true) this._onChangeCallback();
    return this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(axis, angle) {
    const halfAngle = angle / 2, s2 = Math.sin(halfAngle);
    this._x = axis.x * s2;
    this._y = axis.y * s2;
    this._z = axis.z * s2;
    this._w = Math.cos(halfAngle);
    this._onChangeCallback();
    return this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(m2) {
    const te = m2.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33;
    if (trace > 0) {
      const s2 = 0.5 / Math.sqrt(trace + 1);
      this._w = 0.25 / s2;
      this._x = (m32 - m23) * s2;
      this._y = (m13 - m31) * s2;
      this._z = (m21 - m12) * s2;
    } else if (m11 > m22 && m11 > m33) {
      const s2 = 2 * Math.sqrt(1 + m11 - m22 - m33);
      this._w = (m32 - m23) / s2;
      this._x = 0.25 * s2;
      this._y = (m12 + m21) / s2;
      this._z = (m13 + m31) / s2;
    } else if (m22 > m33) {
      const s2 = 2 * Math.sqrt(1 + m22 - m11 - m33);
      this._w = (m13 - m31) / s2;
      this._x = (m12 + m21) / s2;
      this._y = 0.25 * s2;
      this._z = (m23 + m32) / s2;
    } else {
      const s2 = 2 * Math.sqrt(1 + m33 - m11 - m22);
      this._w = (m21 - m12) / s2;
      this._x = (m13 + m31) / s2;
      this._y = (m23 + m32) / s2;
      this._z = 0.25 * s2;
    }
    this._onChangeCallback();
    return this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(vFrom, vTo) {
    let r2 = vFrom.dot(vTo) + 1;
    if (r2 < 1e-8) {
      r2 = 0;
      if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
        this._x = -vFrom.y;
        this._y = vFrom.x;
        this._z = 0;
        this._w = r2;
      } else {
        this._x = 0;
        this._y = -vFrom.z;
        this._z = vFrom.y;
        this._w = r2;
      }
    } else {
      this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
      this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
      this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
      this._w = r2;
    }
    return this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(q2) {
    return 2 * Math.acos(Math.abs(clamp(this.dot(q2), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(q2, step) {
    const angle = this.angleTo(q2);
    if (angle === 0) return this;
    const t2 = Math.min(1, step / angle);
    this.slerp(q2, t2);
    return this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    this._x *= -1;
    this._y *= -1;
    this._z *= -1;
    this._onChangeCallback();
    return this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(v2) {
    return this._x * v2._x + this._y * v2._y + this._z * v2._z + this._w * v2._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let l2 = this.length();
    if (l2 === 0) {
      this._x = 0;
      this._y = 0;
      this._z = 0;
      this._w = 1;
    } else {
      l2 = 1 / l2;
      this._x = this._x * l2;
      this._y = this._y * l2;
      this._z = this._z * l2;
      this._w = this._w * l2;
    }
    this._onChangeCallback();
    return this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(q2) {
    return this.multiplyQuaternions(this, q2);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(q2) {
    return this.multiplyQuaternions(q2, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(a2, b2) {
    const qax = a2._x, qay = a2._y, qaz = a2._z, qaw = a2._w;
    const qbx = b2._x, qby = b2._y, qbz = b2._z, qbw = b2._w;
    this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
    this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
    this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
    this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
    this._onChangeCallback();
    return this;
  }
  /**
   * Performs a spherical linear interpolation between quaternions.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(qb, t2) {
    if (t2 <= 0) return this;
    if (t2 >= 1) return this.copy(qb);
    let x2 = qb._x, y2 = qb._y, z2 = qb._z, w2 = qb._w;
    let dot = this.dot(qb);
    if (dot < 0) {
      x2 = -x2;
      y2 = -y2;
      z2 = -z2;
      w2 = -w2;
      dot = -dot;
    }
    let s2 = 1 - t2;
    if (dot < 0.9995) {
      const theta = Math.acos(dot);
      const sin = Math.sin(theta);
      s2 = Math.sin(s2 * theta) / sin;
      t2 = Math.sin(t2 * theta) / sin;
      this._x = this._x * s2 + x2 * t2;
      this._y = this._y * s2 + y2 * t2;
      this._z = this._z * s2 + z2 * t2;
      this._w = this._w * s2 + w2 * t2;
      this._onChangeCallback();
    } else {
      this._x = this._x * s2 + x2 * t2;
      this._y = this._y * s2 + y2 * t2;
      this._z = this._z * s2 + z2 * t2;
      this._w = this._w * s2 + w2 * t2;
      this.normalize();
    }
    return this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(qa, qb, t2) {
    return this.copy(qa).slerp(qb, t2);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const theta1 = 2 * Math.PI * Math.random();
    const theta2 = 2 * Math.PI * Math.random();
    const x0 = Math.random();
    const r1 = Math.sqrt(1 - x0);
    const r2 = Math.sqrt(x0);
    return this.set(
      r1 * Math.sin(theta1),
      r1 * Math.cos(theta1),
      r2 * Math.sin(theta2),
      r2 * Math.cos(theta2)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(quaternion) {
    return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(array, offset = 0) {
    this._x = array[offset];
    this._y = array[offset + 1];
    this._z = array[offset + 2];
    this._w = array[offset + 3];
    this._onChangeCallback();
    return this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(array = [], offset = 0) {
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._w;
    return array;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(attribute, index) {
    this._x = attribute.getX(index);
    this._y = attribute.getY(index);
    this._z = attribute.getZ(index);
    this._w = attribute.getW(index);
    this._onChangeCallback();
    return this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(callback) {
    this._onChangeCallback = callback;
    return this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._w;
  }
};
var Vector3 = class _Vector3 {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(x2 = 0, y2 = 0, z2 = 0) {
    _Vector3.prototype.isVector3 = true;
    this.x = x2;
    this.y = y2;
    this.z = z2;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(x2, y2, z2) {
    if (z2 === void 0) z2 = this.z;
    this.x = x2;
    this.y = y2;
    this.z = z2;
    return this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    return this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(x2) {
    this.x = x2;
    return this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(y2) {
    this.y = y2;
    return this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(z2) {
    this.z = z2;
    return this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      case 2:
        this.z = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(v2) {
    this.x = v2.x;
    this.y = v2.y;
    this.z = v2.z;
    return this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(v2) {
    this.x += v2.x;
    this.y += v2.y;
    this.z += v2.z;
    return this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(s2) {
    this.x += s2;
    this.y += s2;
    this.z += s2;
    return this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(a2, b2) {
    this.x = a2.x + b2.x;
    this.y = a2.y + b2.y;
    this.z = a2.z + b2.z;
    return this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(v2, s2) {
    this.x += v2.x * s2;
    this.y += v2.y * s2;
    this.z += v2.z * s2;
    return this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(v2) {
    this.x -= v2.x;
    this.y -= v2.y;
    this.z -= v2.z;
    return this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(s2) {
    this.x -= s2;
    this.y -= s2;
    this.z -= s2;
    return this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(a2, b2) {
    this.x = a2.x - b2.x;
    this.y = a2.y - b2.y;
    this.z = a2.z - b2.z;
    return this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(v2) {
    this.x *= v2.x;
    this.y *= v2.y;
    this.z *= v2.z;
    return this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(a2, b2) {
    this.x = a2.x * b2.x;
    this.y = a2.y * b2.y;
    this.z = a2.z * b2.z;
    return this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(euler) {
    return this.applyQuaternion(_quaternion$4.setFromEuler(euler));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(axis, angle) {
    return this.applyQuaternion(_quaternion$4.setFromAxisAngle(axis, angle));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(m2) {
    const x2 = this.x, y2 = this.y, z2 = this.z;
    const e2 = m2.elements;
    this.x = e2[0] * x2 + e2[3] * y2 + e2[6] * z2;
    this.y = e2[1] * x2 + e2[4] * y2 + e2[7] * z2;
    this.z = e2[2] * x2 + e2[5] * y2 + e2[8] * z2;
    return this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(m2) {
    return this.applyMatrix3(m2).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(m2) {
    const x2 = this.x, y2 = this.y, z2 = this.z;
    const e2 = m2.elements;
    const w2 = 1 / (e2[3] * x2 + e2[7] * y2 + e2[11] * z2 + e2[15]);
    this.x = (e2[0] * x2 + e2[4] * y2 + e2[8] * z2 + e2[12]) * w2;
    this.y = (e2[1] * x2 + e2[5] * y2 + e2[9] * z2 + e2[13]) * w2;
    this.z = (e2[2] * x2 + e2[6] * y2 + e2[10] * z2 + e2[14]) * w2;
    return this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(q2) {
    const vx = this.x, vy = this.y, vz = this.z;
    const qx = q2.x, qy = q2.y, qz = q2.z, qw = q2.w;
    const tx = 2 * (qy * vz - qz * vy);
    const ty = 2 * (qz * vx - qx * vz);
    const tz = 2 * (qx * vy - qy * vx);
    this.x = vx + qw * tx + qy * tz - qz * ty;
    this.y = vy + qw * ty + qz * tx - qx * tz;
    this.z = vz + qw * tz + qx * ty - qy * tx;
    return this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(camera) {
    return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(camera) {
    return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(m2) {
    const x2 = this.x, y2 = this.y, z2 = this.z;
    const e2 = m2.elements;
    this.x = e2[0] * x2 + e2[4] * y2 + e2[8] * z2;
    this.y = e2[1] * x2 + e2[5] * y2 + e2[9] * z2;
    this.z = e2[2] * x2 + e2[6] * y2 + e2[10] * z2;
    return this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(v2) {
    this.x /= v2.x;
    this.y /= v2.y;
    this.z /= v2.z;
    return this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(v2) {
    this.x = Math.min(this.x, v2.x);
    this.y = Math.min(this.y, v2.y);
    this.z = Math.min(this.z, v2.z);
    return this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(v2) {
    this.x = Math.max(this.x, v2.x);
    this.y = Math.max(this.y, v2.y);
    this.z = Math.max(this.z, v2.z);
    return this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(min, max) {
    this.x = clamp(this.x, min.x, max.x);
    this.y = clamp(this.y, min.y, max.y);
    this.z = clamp(this.z, min.z, max.z);
    return this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(minVal, maxVal) {
    this.x = clamp(this.x, minVal, maxVal);
    this.y = clamp(this.y, minVal, maxVal);
    this.z = clamp(this.z, minVal, maxVal);
    return this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(clamp(length, min, max));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    return this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(v2) {
    return this.x * v2.x + this.y * v2.y + this.z * v2.z;
  }
  // TODO lengthSquared?
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(v2, alpha) {
    this.x += (v2.x - this.x) * alpha;
    this.y += (v2.y - this.y) * alpha;
    this.z += (v2.z - this.z) * alpha;
    return this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    this.z = v1.z + (v2.z - v1.z) * alpha;
    return this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(v2) {
    return this.crossVectors(this, v2);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(a2, b2) {
    const ax = a2.x, ay = a2.y, az = a2.z;
    const bx = b2.x, by = b2.y, bz = b2.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(v2) {
    const denominator = v2.lengthSq();
    if (denominator === 0) return this.set(0, 0, 0);
    const scalar = v2.dot(this) / denominator;
    return this.copy(v2).multiplyScalar(scalar);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(planeNormal) {
    _vector$c.copy(this).projectOnVector(planeNormal);
    return this.sub(_vector$c);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(normal) {
    return this.sub(_vector$c.copy(normal).multiplyScalar(2 * this.dot(normal)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(v2) {
    const denominator = Math.sqrt(this.lengthSq() * v2.lengthSq());
    if (denominator === 0) return Math.PI / 2;
    const theta = this.dot(v2) / denominator;
    return Math.acos(clamp(theta, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(v2) {
    return Math.sqrt(this.distanceToSquared(v2));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(v2) {
    const dx = this.x - v2.x, dy = this.y - v2.y, dz = this.z - v2.z;
    return dx * dx + dy * dy + dz * dz;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(v2) {
    return Math.abs(this.x - v2.x) + Math.abs(this.y - v2.y) + Math.abs(this.z - v2.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(s2) {
    return this.setFromSphericalCoords(s2.radius, s2.phi, s2.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(radius, phi, theta) {
    const sinPhiRadius = Math.sin(phi) * radius;
    this.x = sinPhiRadius * Math.sin(theta);
    this.y = Math.cos(phi) * radius;
    this.z = sinPhiRadius * Math.cos(theta);
    return this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(c2) {
    return this.setFromCylindricalCoords(c2.radius, c2.theta, c2.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(radius, theta, y2) {
    this.x = radius * Math.sin(theta);
    this.y = y2;
    this.z = radius * Math.cos(theta);
    return this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(m2) {
    const e2 = m2.elements;
    this.x = e2[12];
    this.y = e2[13];
    this.z = e2[14];
    return this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(m2) {
    const sx = this.setFromMatrixColumn(m2, 0).length();
    const sy = this.setFromMatrixColumn(m2, 1).length();
    const sz = this.setFromMatrixColumn(m2, 2).length();
    this.x = sx;
    this.y = sy;
    this.z = sz;
    return this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(m2, index) {
    return this.fromArray(m2.elements, index * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(m2, index) {
    return this.fromArray(m2.elements, index * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(e2) {
    this.x = e2._x;
    this.y = e2._y;
    this.z = e2._z;
    return this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(c2) {
    this.x = c2.r;
    this.y = c2.g;
    this.z = c2.b;
    return this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(v2) {
    return v2.x === this.x && v2.y === this.y && v2.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    return this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    return array;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    this.z = attribute.getZ(index);
    return this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    return this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const theta = Math.random() * Math.PI * 2;
    const u3 = Math.random() * 2 - 1;
    const c2 = Math.sqrt(1 - u3 * u3);
    this.x = c2 * Math.cos(theta);
    this.y = u3;
    this.z = c2 * Math.sin(theta);
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
  }
};
var _vector$c = /* @__PURE__ */ new Vector3();
var _quaternion$4 = /* @__PURE__ */ new Quaternion();
var Matrix3 = class _Matrix3 {
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    _Matrix3.prototype.isMatrix3 = true;
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
    if (n11 !== void 0) {
      this.set(n11, n12, n13, n21, n22, n23, n31, n32, n33);
    }
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    const te = this.elements;
    te[0] = n11;
    te[1] = n21;
    te[2] = n31;
    te[3] = n12;
    te[4] = n22;
    te[5] = n32;
    te[6] = n13;
    te[7] = n23;
    te[8] = n33;
    return this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(m2) {
    const te = this.elements;
    const me = m2.elements;
    te[0] = me[0];
    te[1] = me[1];
    te[2] = me[2];
    te[3] = me[3];
    te[4] = me[4];
    te[5] = me[5];
    te[6] = me[6];
    te[7] = me[7];
    te[8] = me[8];
    return this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(xAxis, yAxis, zAxis) {
    xAxis.setFromMatrix3Column(this, 0);
    yAxis.setFromMatrix3Column(this, 1);
    zAxis.setFromMatrix3Column(this, 2);
    return this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(m2) {
    const me = m2.elements;
    this.set(
      me[0],
      me[4],
      me[8],
      me[1],
      me[5],
      me[9],
      me[2],
      me[6],
      me[10]
    );
    return this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(m2) {
    return this.multiplyMatrices(this, m2);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(m2) {
    return this.multiplyMatrices(m2, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(a2, b2) {
    const ae = a2.elements;
    const be = b2.elements;
    const te = this.elements;
    const a11 = ae[0], a12 = ae[3], a13 = ae[6];
    const a21 = ae[1], a22 = ae[4], a23 = ae[7];
    const a31 = ae[2], a32 = ae[5], a33 = ae[8];
    const b11 = be[0], b12 = be[3], b13 = be[6];
    const b21 = be[1], b22 = be[4], b23 = be[7];
    const b31 = be[2], b32 = be[5], b33 = be[8];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31;
    te[3] = a11 * b12 + a12 * b22 + a13 * b32;
    te[6] = a11 * b13 + a12 * b23 + a13 * b33;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31;
    te[4] = a21 * b12 + a22 * b22 + a23 * b32;
    te[7] = a21 * b13 + a22 * b23 + a23 * b33;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31;
    te[5] = a31 * b12 + a32 * b22 + a33 * b32;
    te[8] = a31 * b13 + a32 * b23 + a33 * b33;
    return this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(s2) {
    const te = this.elements;
    te[0] *= s2;
    te[3] *= s2;
    te[6] *= s2;
    te[1] *= s2;
    te[4] *= s2;
    te[7] *= s2;
    te[2] *= s2;
    te[5] *= s2;
    te[8] *= s2;
    return this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const te = this.elements;
    const a2 = te[0], b2 = te[1], c2 = te[2], d2 = te[3], e2 = te[4], f2 = te[5], g2 = te[6], h2 = te[7], i2 = te[8];
    return a2 * e2 * i2 - a2 * f2 * h2 - b2 * d2 * i2 + b2 * f2 * g2 + c2 * d2 * h2 - c2 * e2 * g2;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n12 = te[3], n22 = te[4], n32 = te[5], n13 = te[6], n23 = te[7], n33 = te[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
    if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const detInv = 1 / det;
    te[0] = t11 * detInv;
    te[1] = (n31 * n23 - n33 * n21) * detInv;
    te[2] = (n32 * n21 - n31 * n22) * detInv;
    te[3] = t12 * detInv;
    te[4] = (n33 * n11 - n31 * n13) * detInv;
    te[5] = (n31 * n12 - n32 * n11) * detInv;
    te[6] = t13 * detInv;
    te[7] = (n21 * n13 - n23 * n11) * detInv;
    te[8] = (n22 * n11 - n21 * n12) * detInv;
    return this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let tmp2;
    const m2 = this.elements;
    tmp2 = m2[1];
    m2[1] = m2[3];
    m2[3] = tmp2;
    tmp2 = m2[2];
    m2[2] = m2[6];
    m2[6] = tmp2;
    tmp2 = m2[5];
    m2[5] = m2[7];
    m2[7] = tmp2;
    return this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(matrix4) {
    return this.setFromMatrix4(matrix4).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(r2) {
    const m2 = this.elements;
    r2[0] = m2[0];
    r2[1] = m2[3];
    r2[2] = m2[6];
    r2[3] = m2[1];
    r2[4] = m2[4];
    r2[5] = m2[7];
    r2[6] = m2[2];
    r2[7] = m2[5];
    r2[8] = m2[8];
    return this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
    const c2 = Math.cos(rotation);
    const s2 = Math.sin(rotation);
    this.set(
      sx * c2,
      sx * s2,
      -sx * (c2 * cx + s2 * cy) + cx + tx,
      -sy * s2,
      sy * c2,
      -sy * (-s2 * cx + c2 * cy) + cy + ty,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(sx, sy) {
    this.premultiply(_m3.makeScale(sx, sy));
    return this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(theta) {
    this.premultiply(_m3.makeRotation(-theta));
    return this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(tx, ty) {
    this.premultiply(_m3.makeTranslation(tx, ty));
    return this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(x2, y2) {
    if (x2.isVector2) {
      this.set(
        1,
        0,
        x2.x,
        0,
        1,
        x2.y,
        0,
        0,
        1
      );
    } else {
      this.set(
        1,
        0,
        x2,
        0,
        1,
        y2,
        0,
        0,
        1
      );
    }
    return this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(theta) {
    const c2 = Math.cos(theta);
    const s2 = Math.sin(theta);
    this.set(
      c2,
      -s2,
      0,
      s2,
      c2,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(x2, y2) {
    this.set(
      x2,
      0,
      0,
      0,
      y2,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(matrix) {
    const te = this.elements;
    const me = matrix.elements;
    for (let i2 = 0; i2 < 9; i2++) {
      if (te[i2] !== me[i2]) return false;
    }
    return true;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(array, offset = 0) {
    for (let i2 = 0; i2 < 9; i2++) {
      this.elements[i2] = array[i2 + offset];
    }
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(array = [], offset = 0) {
    const te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    return array;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
var _m3 = /* @__PURE__ */ new Matrix3();
var LINEAR_REC709_TO_XYZ = /* @__PURE__ */ new Matrix3().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
);
var XYZ_TO_LINEAR_REC709 = /* @__PURE__ */ new Matrix3().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function createColorManagement() {
  const ColorManagement2 = {
    enabled: true,
    workingColorSpace: LinearSRGBColorSpace,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(color, sourceColorSpace, targetColorSpace) {
      if (this.enabled === false || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
        return color;
      }
      if (this.spaces[sourceColorSpace].transfer === SRGBTransfer) {
        color.r = SRGBToLinear(color.r);
        color.g = SRGBToLinear(color.g);
        color.b = SRGBToLinear(color.b);
      }
      if (this.spaces[sourceColorSpace].primaries !== this.spaces[targetColorSpace].primaries) {
        color.applyMatrix3(this.spaces[sourceColorSpace].toXYZ);
        color.applyMatrix3(this.spaces[targetColorSpace].fromXYZ);
      }
      if (this.spaces[targetColorSpace].transfer === SRGBTransfer) {
        color.r = LinearToSRGB(color.r);
        color.g = LinearToSRGB(color.g);
        color.b = LinearToSRGB(color.b);
      }
      return color;
    },
    workingToColorSpace: function(color, targetColorSpace) {
      return this.convert(color, this.workingColorSpace, targetColorSpace);
    },
    colorSpaceToWorking: function(color, sourceColorSpace) {
      return this.convert(color, sourceColorSpace, this.workingColorSpace);
    },
    getPrimaries: function(colorSpace) {
      return this.spaces[colorSpace].primaries;
    },
    getTransfer: function(colorSpace) {
      if (colorSpace === NoColorSpace) return LinearTransfer;
      return this.spaces[colorSpace].transfer;
    },
    getToneMappingMode: function(colorSpace) {
      return this.spaces[colorSpace].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(target, colorSpace = this.workingColorSpace) {
      return target.fromArray(this.spaces[colorSpace].luminanceCoefficients);
    },
    define: function(colorSpaces) {
      Object.assign(this.spaces, colorSpaces);
    },
    // Internal APIs
    _getMatrix: function(targetMatrix, sourceColorSpace, targetColorSpace) {
      return targetMatrix.copy(this.spaces[sourceColorSpace].toXYZ).multiply(this.spaces[targetColorSpace].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(colorSpace) {
      return this.spaces[colorSpace].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(colorSpace = this.workingColorSpace) {
      return this.spaces[colorSpace].workingColorSpaceConfig.unpackColorSpace;
    },
    // Deprecated
    fromWorkingColorSpace: function(color, targetColorSpace) {
      warnOnce("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().");
      return ColorManagement2.workingToColorSpace(color, targetColorSpace);
    },
    toWorkingColorSpace: function(color, sourceColorSpace) {
      warnOnce("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().");
      return ColorManagement2.colorSpaceToWorking(color, sourceColorSpace);
    }
  };
  const REC709_PRIMARIES = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06];
  const REC709_LUMINANCE_COEFFICIENTS = [0.2126, 0.7152, 0.0722];
  const D65 = [0.3127, 0.329];
  ColorManagement2.define({
    [LinearSRGBColorSpace]: {
      primaries: REC709_PRIMARIES,
      whitePoint: D65,
      transfer: LinearTransfer,
      toXYZ: LINEAR_REC709_TO_XYZ,
      fromXYZ: XYZ_TO_LINEAR_REC709,
      luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
      workingColorSpaceConfig: { unpackColorSpace: SRGBColorSpace },
      outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
    },
    [SRGBColorSpace]: {
      primaries: REC709_PRIMARIES,
      whitePoint: D65,
      transfer: SRGBTransfer,
      toXYZ: LINEAR_REC709_TO_XYZ,
      fromXYZ: XYZ_TO_LINEAR_REC709,
      luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
      outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
    }
  });
  return ColorManagement2;
}
var ColorManagement = /* @__PURE__ */ createColorManagement();
function SRGBToLinear(c2) {
  return c2 < 0.04045 ? c2 * 0.0773993808 : Math.pow(c2 * 0.9478672986 + 0.0521327014, 2.4);
}
function LinearToSRGB(c2) {
  return c2 < 31308e-7 ? c2 * 12.92 : 1.055 * Math.pow(c2, 0.41666) - 0.055;
}
var _canvas;
var ImageUtils = class {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(image, type = "image/png") {
    if (/^data:/i.test(image.src)) {
      return image.src;
    }
    if (typeof HTMLCanvasElement === "undefined") {
      return image.src;
    }
    let canvas;
    if (image instanceof HTMLCanvasElement) {
      canvas = image;
    } else {
      if (_canvas === void 0) _canvas = createElementNS("canvas");
      _canvas.width = image.width;
      _canvas.height = image.height;
      const context = _canvas.getContext("2d");
      if (image instanceof ImageData) {
        context.putImageData(image, 0, 0);
      } else {
        context.drawImage(image, 0, 0, image.width, image.height);
      }
      canvas = _canvas;
    }
    return canvas.toDataURL(type);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(image) {
    if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
      const canvas = createElementNS("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, image.width, image.height);
      const imageData = context.getImageData(0, 0, image.width, image.height);
      const data = imageData.data;
      for (let i2 = 0; i2 < data.length; i2++) {
        data[i2] = SRGBToLinear(data[i2] / 255) * 255;
      }
      context.putImageData(imageData, 0, 0);
      return canvas;
    } else if (image.data) {
      const data = image.data.slice(0);
      for (let i2 = 0; i2 < data.length; i2++) {
        if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
          data[i2] = Math.floor(SRGBToLinear(data[i2] / 255) * 255);
        } else {
          data[i2] = SRGBToLinear(data[i2]);
        }
      }
      return {
        data,
        width: image.width,
        height: image.height
      };
    } else {
      warn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");
      return image;
    }
  }
};
var _sourceId = 0;
var Source = class {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(data = null) {
    this.isSource = true;
    Object.defineProperty(this, "id", { value: _sourceId++ });
    this.uuid = generateUUID();
    this.data = data;
    this.dataReady = true;
    this.version = 0;
  }
  /**
   * Returns the dimensions of the source into the given target vector.
   *
   * @param {(Vector2|Vector3)} target - The target object the result is written into.
   * @return {(Vector2|Vector3)} The dimensions of the source.
   */
  getSize(target) {
    const data = this.data;
    if (typeof HTMLVideoElement !== "undefined" && data instanceof HTMLVideoElement) {
      target.set(data.videoWidth, data.videoHeight, 0);
    } else if (data instanceof VideoFrame) {
      target.set(data.displayHeight, data.displayWidth, 0);
    } else if (data !== null) {
      target.set(data.width, data.height, data.depth || 0);
    } else {
      target.set(0, 0, 0);
    }
    return target;
  }
  /**
   * When the property is set to `true`, the engine allocates the memory
   * for the texture (if necessary) and triggers the actual texture upload
   * to the GPU next time the source is used.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(value) {
    if (value === true) this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (!isRootObject && meta.images[this.uuid] !== void 0) {
      return meta.images[this.uuid];
    }
    const output = {
      uuid: this.uuid,
      url: ""
    };
    const data = this.data;
    if (data !== null) {
      let url;
      if (Array.isArray(data)) {
        url = [];
        for (let i2 = 0, l2 = data.length; i2 < l2; i2++) {
          if (data[i2].isDataTexture) {
            url.push(serializeImage(data[i2].image));
          } else {
            url.push(serializeImage(data[i2]));
          }
        }
      } else {
        url = serializeImage(data);
      }
      output.url = url;
    }
    if (!isRootObject) {
      meta.images[this.uuid] = output;
    }
    return output;
  }
};
function serializeImage(image) {
  if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
    return ImageUtils.getDataURL(image);
  } else {
    if (image.data) {
      return {
        data: Array.from(image.data),
        width: image.width,
        height: image.height,
        type: image.data.constructor.name
      };
    } else {
      warn("Texture: Unable to serialize Texture.");
      return {};
    }
  }
}
var _textureId = 0;
var _tempVec3 = /* @__PURE__ */ new Vector3();
var Texture = class _Texture extends EventDispatcher {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(image = _Texture.DEFAULT_IMAGE, mapping = _Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = _Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace) {
    super();
    this.isTexture = true;
    Object.defineProperty(this, "id", { value: _textureId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.source = new Source(image);
    this.mipmaps = [];
    this.mapping = mapping;
    this.channel = 0;
    this.wrapS = wrapS;
    this.wrapT = wrapT;
    this.magFilter = magFilter;
    this.minFilter = minFilter;
    this.anisotropy = anisotropy;
    this.format = format;
    this.internalFormat = null;
    this.type = type;
    this.offset = new Vector2(0, 0);
    this.repeat = new Vector2(1, 1);
    this.center = new Vector2(0, 0);
    this.rotation = 0;
    this.matrixAutoUpdate = true;
    this.matrix = new Matrix3();
    this.generateMipmaps = true;
    this.premultiplyAlpha = false;
    this.flipY = true;
    this.unpackAlignment = 4;
    this.colorSpace = colorSpace;
    this.userData = {};
    this.updateRanges = [];
    this.version = 0;
    this.onUpdate = null;
    this.renderTarget = null;
    this.isRenderTargetTexture = false;
    this.isArrayTexture = image && image.depth && image.depth > 1 ? true : false;
    this.pmremVersion = 0;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(_tempVec3).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(_tempVec3).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(_tempVec3).z;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(value = null) {
    this.source.data = value;
  }
  /**
   * Updates the texture transformation matrix from the from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Adds a range of data in the data texture to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(start, count) {
    this.updateRanges.push({ start, count });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(source) {
    this.name = source.name;
    this.source = source.source;
    this.mipmaps = source.mipmaps.slice(0);
    this.mapping = source.mapping;
    this.channel = source.channel;
    this.wrapS = source.wrapS;
    this.wrapT = source.wrapT;
    this.magFilter = source.magFilter;
    this.minFilter = source.minFilter;
    this.anisotropy = source.anisotropy;
    this.format = source.format;
    this.internalFormat = source.internalFormat;
    this.type = source.type;
    this.offset.copy(source.offset);
    this.repeat.copy(source.repeat);
    this.center.copy(source.center);
    this.rotation = source.rotation;
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    this.matrix.copy(source.matrix);
    this.generateMipmaps = source.generateMipmaps;
    this.premultiplyAlpha = source.premultiplyAlpha;
    this.flipY = source.flipY;
    this.unpackAlignment = source.unpackAlignment;
    this.colorSpace = source.colorSpace;
    this.renderTarget = source.renderTarget;
    this.isRenderTargetTexture = source.isRenderTargetTexture;
    this.isArrayTexture = source.isArrayTexture;
    this.userData = JSON.parse(JSON.stringify(source.userData));
    this.needsUpdate = true;
    return this;
  }
  /**
   * Sets this texture's properties based on `values`.
   * @param {Object} values - A container with texture parameters.
   */
  setValues(values) {
    for (const key in values) {
      const newValue = values[key];
      if (newValue === void 0) {
        warn(`Texture.setValues(): parameter '${key}' has value of undefined.`);
        continue;
      }
      const currentValue = this[key];
      if (currentValue === void 0) {
        warn(`Texture.setValues(): property '${key}' does not exist.`);
        continue;
      }
      if (currentValue && newValue && (currentValue.isVector2 && newValue.isVector2)) {
        currentValue.copy(newValue);
      } else if (currentValue && newValue && (currentValue.isVector3 && newValue.isVector3)) {
        currentValue.copy(newValue);
      } else if (currentValue && newValue && (currentValue.isMatrix3 && newValue.isMatrix3)) {
        currentValue.copy(newValue);
      } else {
        this[key] = newValue;
      }
    }
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (!isRootObject && meta.textures[this.uuid] !== void 0) {
      return meta.textures[this.uuid];
    }
    const output = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(meta).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (Object.keys(this.userData).length > 0) output.userData = this.userData;
    if (!isRootObject) {
      meta.textures[this.uuid] = output;
    }
    return output;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(uv) {
    if (this.mapping !== UVMapping) return uv;
    uv.applyMatrix3(this.matrix);
    if (uv.x < 0 || uv.x > 1) {
      switch (this.wrapS) {
        case RepeatWrapping:
          uv.x = uv.x - Math.floor(uv.x);
          break;
        case ClampToEdgeWrapping:
          uv.x = uv.x < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          if (Math.abs(Math.floor(uv.x) % 2) === 1) {
            uv.x = Math.ceil(uv.x) - uv.x;
          } else {
            uv.x = uv.x - Math.floor(uv.x);
          }
          break;
      }
    }
    if (uv.y < 0 || uv.y > 1) {
      switch (this.wrapT) {
        case RepeatWrapping:
          uv.y = uv.y - Math.floor(uv.y);
          break;
        case ClampToEdgeWrapping:
          uv.y = uv.y < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          if (Math.abs(Math.floor(uv.y) % 2) === 1) {
            uv.y = Math.ceil(uv.y) - uv.y;
          } else {
            uv.y = uv.y - Math.floor(uv.y);
          }
          break;
      }
    }
    if (this.flipY) {
      uv.y = 1 - uv.y;
    }
    return uv;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(value) {
    if (value === true) {
      this.version++;
      this.source.needsUpdate = true;
    }
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(value) {
    if (value === true) {
      this.pmremVersion++;
    }
  }
};
Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = UVMapping;
Texture.DEFAULT_ANISOTROPY = 1;
var Vector4 = class _Vector4 {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(x2 = 0, y2 = 0, z2 = 0, w2 = 1) {
    _Vector4.prototype.isVector4 = true;
    this.x = x2;
    this.y = y2;
    this.z = z2;
    this.w = w2;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(value) {
    this.z = value;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(value) {
    this.w = value;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(x2, y2, z2, w2) {
    this.x = x2;
    this.y = y2;
    this.z = z2;
    this.w = w2;
    return this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    this.w = scalar;
    return this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(x2) {
    this.x = x2;
    return this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(y2) {
    this.y = y2;
    return this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(z2) {
    this.z = z2;
    return this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(w2) {
    this.w = w2;
    return this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      case 2:
        this.z = value;
        break;
      case 3:
        this.w = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(v2) {
    this.x = v2.x;
    this.y = v2.y;
    this.z = v2.z;
    this.w = v2.w !== void 0 ? v2.w : 1;
    return this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(v2) {
    this.x += v2.x;
    this.y += v2.y;
    this.z += v2.z;
    this.w += v2.w;
    return this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(s2) {
    this.x += s2;
    this.y += s2;
    this.z += s2;
    this.w += s2;
    return this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(a2, b2) {
    this.x = a2.x + b2.x;
    this.y = a2.y + b2.y;
    this.z = a2.z + b2.z;
    this.w = a2.w + b2.w;
    return this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(v2, s2) {
    this.x += v2.x * s2;
    this.y += v2.y * s2;
    this.z += v2.z * s2;
    this.w += v2.w * s2;
    return this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(v2) {
    this.x -= v2.x;
    this.y -= v2.y;
    this.z -= v2.z;
    this.w -= v2.w;
    return this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(s2) {
    this.x -= s2;
    this.y -= s2;
    this.z -= s2;
    this.w -= s2;
    return this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(a2, b2) {
    this.x = a2.x - b2.x;
    this.y = a2.y - b2.y;
    this.z = a2.z - b2.z;
    this.w = a2.w - b2.w;
    return this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(v2) {
    this.x *= v2.x;
    this.y *= v2.y;
    this.z *= v2.z;
    this.w *= v2.w;
    return this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    this.w *= scalar;
    return this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(m2) {
    const x2 = this.x, y2 = this.y, z2 = this.z, w2 = this.w;
    const e2 = m2.elements;
    this.x = e2[0] * x2 + e2[4] * y2 + e2[8] * z2 + e2[12] * w2;
    this.y = e2[1] * x2 + e2[5] * y2 + e2[9] * z2 + e2[13] * w2;
    this.z = e2[2] * x2 + e2[6] * y2 + e2[10] * z2 + e2[14] * w2;
    this.w = e2[3] * x2 + e2[7] * y2 + e2[11] * z2 + e2[15] * w2;
    return this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(v2) {
    this.x /= v2.x;
    this.y /= v2.y;
    this.z /= v2.z;
    this.w /= v2.w;
    return this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(q2) {
    this.w = 2 * Math.acos(q2.w);
    const s2 = Math.sqrt(1 - q2.w * q2.w);
    if (s2 < 1e-4) {
      this.x = 1;
      this.y = 0;
      this.z = 0;
    } else {
      this.x = q2.x / s2;
      this.y = q2.y / s2;
      this.z = q2.z / s2;
    }
    return this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(m2) {
    let angle, x2, y2, z2;
    const epsilon = 0.01, epsilon2 = 0.1, te = m2.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10];
    if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
      if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
        this.set(1, 0, 0, 0);
        return this;
      }
      angle = Math.PI;
      const xx = (m11 + 1) / 2;
      const yy = (m22 + 1) / 2;
      const zz = (m33 + 1) / 2;
      const xy = (m12 + m21) / 4;
      const xz = (m13 + m31) / 4;
      const yz = (m23 + m32) / 4;
      if (xx > yy && xx > zz) {
        if (xx < epsilon) {
          x2 = 0;
          y2 = 0.707106781;
          z2 = 0.707106781;
        } else {
          x2 = Math.sqrt(xx);
          y2 = xy / x2;
          z2 = xz / x2;
        }
      } else if (yy > zz) {
        if (yy < epsilon) {
          x2 = 0.707106781;
          y2 = 0;
          z2 = 0.707106781;
        } else {
          y2 = Math.sqrt(yy);
          x2 = xy / y2;
          z2 = yz / y2;
        }
      } else {
        if (zz < epsilon) {
          x2 = 0.707106781;
          y2 = 0.707106781;
          z2 = 0;
        } else {
          z2 = Math.sqrt(zz);
          x2 = xz / z2;
          y2 = yz / z2;
        }
      }
      this.set(x2, y2, z2, angle);
      return this;
    }
    let s2 = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12));
    if (Math.abs(s2) < 1e-3) s2 = 1;
    this.x = (m32 - m23) / s2;
    this.y = (m13 - m31) / s2;
    this.z = (m21 - m12) / s2;
    this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
    return this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(m2) {
    const e2 = m2.elements;
    this.x = e2[12];
    this.y = e2[13];
    this.z = e2[14];
    this.w = e2[15];
    return this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(v2) {
    this.x = Math.min(this.x, v2.x);
    this.y = Math.min(this.y, v2.y);
    this.z = Math.min(this.z, v2.z);
    this.w = Math.min(this.w, v2.w);
    return this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(v2) {
    this.x = Math.max(this.x, v2.x);
    this.y = Math.max(this.y, v2.y);
    this.z = Math.max(this.z, v2.z);
    this.w = Math.max(this.w, v2.w);
    return this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(min, max) {
    this.x = clamp(this.x, min.x, max.x);
    this.y = clamp(this.y, min.y, max.y);
    this.z = clamp(this.z, min.z, max.z);
    this.w = clamp(this.w, min.w, max.w);
    return this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(minVal, maxVal) {
    this.x = clamp(this.x, minVal, maxVal);
    this.y = clamp(this.y, minVal, maxVal);
    this.z = clamp(this.z, minVal, maxVal);
    this.w = clamp(this.w, minVal, maxVal);
    return this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(clamp(length, min, max));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    this.w = Math.trunc(this.w);
    return this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(v2) {
    return this.x * v2.x + this.y * v2.y + this.z * v2.z + this.w * v2.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(v2, alpha) {
    this.x += (v2.x - this.x) * alpha;
    this.y += (v2.y - this.y) * alpha;
    this.z += (v2.z - this.z) * alpha;
    this.w += (v2.w - this.w) * alpha;
    return this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    this.z = v1.z + (v2.z - v1.z) * alpha;
    this.w = v1.w + (v2.w - v1.w) * alpha;
    return this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(v2) {
    return v2.x === this.x && v2.y === this.y && v2.z === this.z && v2.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    this.w = array[offset + 3];
    return this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    array[offset + 3] = this.w;
    return array;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    this.z = attribute.getZ(index);
    this.w = attribute.getW(index);
    return this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    this.w = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
    yield this.w;
  }
};
var Box3 = class {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(min = new Vector3(Infinity, Infinity, Infinity), max = new Vector3(-Infinity, -Infinity, -Infinity)) {
    this.isBox3 = true;
    this.min = min;
    this.max = max;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(min, max) {
    this.min.copy(min);
    this.max.copy(max);
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(array) {
    this.makeEmpty();
    for (let i2 = 0, il = array.length; i2 < il; i2 += 3) {
      this.expandByPoint(_vector$b.fromArray(array, i2));
    }
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(attribute) {
    this.makeEmpty();
    for (let i2 = 0, il = attribute.count; i2 < il; i2++) {
      this.expandByPoint(_vector$b.fromBufferAttribute(attribute, i2));
    }
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(points) {
    this.makeEmpty();
    for (let i2 = 0, il = points.length; i2 < il; i2++) {
      this.expandByPoint(points[i2]);
    }
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(center, size) {
    const halfSize = _vector$b.copy(size).multiplyScalar(0.5);
    this.min.copy(center).sub(halfSize);
    this.max.copy(center).add(halfSize);
    return this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(object, precise = false) {
    this.makeEmpty();
    return this.expandByObject(object, precise);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(box) {
    this.min.copy(box.min);
    this.max.copy(box.max);
    return this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;
    return this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(target) {
    return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(target) {
    return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(point) {
    this.min.min(point);
    this.max.max(point);
    return this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(vector) {
    this.min.sub(vector);
    this.max.add(vector);
    return this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(scalar) {
    this.min.addScalar(-scalar);
    this.max.addScalar(scalar);
    return this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(object, precise = false) {
    object.updateWorldMatrix(false, false);
    const geometry = object.geometry;
    if (geometry !== void 0) {
      const positionAttribute = geometry.getAttribute("position");
      if (precise === true && positionAttribute !== void 0 && object.isInstancedMesh !== true) {
        for (let i2 = 0, l2 = positionAttribute.count; i2 < l2; i2++) {
          if (object.isMesh === true) {
            object.getVertexPosition(i2, _vector$b);
          } else {
            _vector$b.fromBufferAttribute(positionAttribute, i2);
          }
          _vector$b.applyMatrix4(object.matrixWorld);
          this.expandByPoint(_vector$b);
        }
      } else {
        if (object.boundingBox !== void 0) {
          if (object.boundingBox === null) {
            object.computeBoundingBox();
          }
          _box$4.copy(object.boundingBox);
        } else {
          if (geometry.boundingBox === null) {
            geometry.computeBoundingBox();
          }
          _box$4.copy(geometry.boundingBox);
        }
        _box$4.applyMatrix4(object.matrixWorld);
        this.union(_box$4);
      }
    }
    const children = object.children;
    for (let i2 = 0, l2 = children.length; i2 < l2; i2++) {
      this.expandByObject(children[i2], precise);
    }
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(point) {
    return point.x >= this.min.x && point.x <= this.max.x && point.y >= this.min.y && point.y <= this.max.y && point.z >= this.min.z && point.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(box) {
    return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(point, target) {
    return target.set(
      (point.x - this.min.x) / (this.max.x - this.min.x),
      (point.y - this.min.y) / (this.max.y - this.min.y),
      (point.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(box) {
    return box.max.x >= this.min.x && box.min.x <= this.max.x && box.max.y >= this.min.y && box.min.y <= this.max.y && box.max.z >= this.min.z && box.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(sphere) {
    this.clampPoint(sphere.center, _vector$b);
    return _vector$b.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(plane) {
    let min, max;
    if (plane.normal.x > 0) {
      min = plane.normal.x * this.min.x;
      max = plane.normal.x * this.max.x;
    } else {
      min = plane.normal.x * this.max.x;
      max = plane.normal.x * this.min.x;
    }
    if (plane.normal.y > 0) {
      min += plane.normal.y * this.min.y;
      max += plane.normal.y * this.max.y;
    } else {
      min += plane.normal.y * this.max.y;
      max += plane.normal.y * this.min.y;
    }
    if (plane.normal.z > 0) {
      min += plane.normal.z * this.min.z;
      max += plane.normal.z * this.max.z;
    } else {
      min += plane.normal.z * this.max.z;
      max += plane.normal.z * this.min.z;
    }
    return min <= -plane.constant && max >= -plane.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(triangle) {
    if (this.isEmpty()) {
      return false;
    }
    this.getCenter(_center);
    _extents.subVectors(this.max, _center);
    _v0$2.subVectors(triangle.a, _center);
    _v1$7.subVectors(triangle.b, _center);
    _v2$4.subVectors(triangle.c, _center);
    _f0.subVectors(_v1$7, _v0$2);
    _f1.subVectors(_v2$4, _v1$7);
    _f2.subVectors(_v0$2, _v2$4);
    let axes = [
      0,
      -_f0.z,
      _f0.y,
      0,
      -_f1.z,
      _f1.y,
      0,
      -_f2.z,
      _f2.y,
      _f0.z,
      0,
      -_f0.x,
      _f1.z,
      0,
      -_f1.x,
      _f2.z,
      0,
      -_f2.x,
      -_f0.y,
      _f0.x,
      0,
      -_f1.y,
      _f1.x,
      0,
      -_f2.y,
      _f2.x,
      0
    ];
    if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
      return false;
    }
    axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
      return false;
    }
    _triangleNormal.crossVectors(_f0, _f1);
    axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
    return satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents);
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(point, target) {
    return target.copy(point).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(point) {
    return this.clampPoint(point, _vector$b).distanceTo(point);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(target) {
    if (this.isEmpty()) {
      target.makeEmpty();
    } else {
      this.getCenter(target.center);
      target.radius = this.getSize(_vector$b).length() * 0.5;
    }
    return target;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(box) {
    this.min.max(box.min);
    this.max.min(box.max);
    if (this.isEmpty()) this.makeEmpty();
    return this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(box) {
    this.min.min(box.min);
    this.max.max(box.max);
    return this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(matrix) {
    if (this.isEmpty()) return this;
    _points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix);
    _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix);
    _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix);
    _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix);
    _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix);
    _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix);
    _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix);
    _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix);
    this.setFromPoints(_points);
    return this;
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(offset) {
    this.min.add(offset);
    this.max.add(offset);
    return this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(box) {
    return box.min.equals(this.min) && box.max.equals(this.max);
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @param {Object} json - The serialized json to set the box from.
   * @return {Box3} A reference to this bounding box.
   */
  fromJSON(json) {
    this.min.fromArray(json.min);
    this.max.fromArray(json.max);
    return this;
  }
};
var _points = [
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3()
];
var _vector$b = /* @__PURE__ */ new Vector3();
var _box$4 = /* @__PURE__ */ new Box3();
var _v0$2 = /* @__PURE__ */ new Vector3();
var _v1$7 = /* @__PURE__ */ new Vector3();
var _v2$4 = /* @__PURE__ */ new Vector3();
var _f0 = /* @__PURE__ */ new Vector3();
var _f1 = /* @__PURE__ */ new Vector3();
var _f2 = /* @__PURE__ */ new Vector3();
var _center = /* @__PURE__ */ new Vector3();
var _extents = /* @__PURE__ */ new Vector3();
var _triangleNormal = /* @__PURE__ */ new Vector3();
var _testAxis = /* @__PURE__ */ new Vector3();
function satForAxes(axes, v0, v1, v2, extents) {
  for (let i2 = 0, j2 = axes.length - 3; i2 <= j2; i2 += 3) {
    _testAxis.fromArray(axes, i2);
    const r2 = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z);
    const p0 = v0.dot(_testAxis);
    const p1 = v1.dot(_testAxis);
    const p2 = v2.dot(_testAxis);
    if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r2) {
      return false;
    }
  }
  return true;
}
var _box$3 = /* @__PURE__ */ new Box3();
var _v1$6 = /* @__PURE__ */ new Vector3();
var _v2$3 = /* @__PURE__ */ new Vector3();
var Sphere = class {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(center = new Vector3(), radius = -1) {
    this.isSphere = true;
    this.center = center;
    this.radius = radius;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(center, radius) {
    this.center.copy(center);
    this.radius = radius;
    return this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(points, optionalCenter) {
    const center = this.center;
    if (optionalCenter !== void 0) {
      center.copy(optionalCenter);
    } else {
      _box$3.setFromPoints(points).getCenter(center);
    }
    let maxRadiusSq = 0;
    for (let i2 = 0, il = points.length; i2 < il; i2++) {
      maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(points[i2]));
    }
    this.radius = Math.sqrt(maxRadiusSq);
    return this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(sphere) {
    this.center.copy(sphere.center);
    this.radius = sphere.radius;
    return this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    this.center.set(0, 0, 0);
    this.radius = -1;
    return this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(point) {
    return point.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(point) {
    return point.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(sphere) {
    const radiusSum = this.radius + sphere.radius;
    return sphere.center.distanceToSquared(this.center) <= radiusSum * radiusSum;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(box) {
    return box.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(plane) {
    return Math.abs(plane.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(point, target) {
    const deltaLengthSq = this.center.distanceToSquared(point);
    target.copy(point);
    if (deltaLengthSq > this.radius * this.radius) {
      target.sub(this.center).normalize();
      target.multiplyScalar(this.radius).add(this.center);
    }
    return target;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(target) {
    if (this.isEmpty()) {
      target.makeEmpty();
      return target;
    }
    target.set(this.center, this.center);
    target.expandByScalar(this.radius);
    return target;
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(matrix) {
    this.center.applyMatrix4(matrix);
    this.radius = this.radius * matrix.getMaxScaleOnAxis();
    return this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(offset) {
    this.center.add(offset);
    return this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(point) {
    if (this.isEmpty()) {
      this.center.copy(point);
      this.radius = 0;
      return this;
    }
    _v1$6.subVectors(point, this.center);
    const lengthSq = _v1$6.lengthSq();
    if (lengthSq > this.radius * this.radius) {
      const length = Math.sqrt(lengthSq);
      const delta = (length - this.radius) * 0.5;
      this.center.addScaledVector(_v1$6, delta / length);
      this.radius += delta;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(sphere) {
    if (sphere.isEmpty()) {
      return this;
    }
    if (this.isEmpty()) {
      this.copy(sphere);
      return this;
    }
    if (this.center.equals(sphere.center) === true) {
      this.radius = Math.max(this.radius, sphere.radius);
    } else {
      _v2$3.subVectors(sphere.center, this.center).setLength(sphere.radius);
      this.expandByPoint(_v1$6.copy(sphere.center).add(_v2$3));
      this.expandByPoint(_v1$6.copy(sphere.center).sub(_v2$3));
    }
    return this;
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(sphere) {
    return sphere.center.equals(this.center) && sphere.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @param {Object} json - The serialized json to set the sphere from.
   * @return {Box3} A reference to this bounding sphere.
   */
  fromJSON(json) {
    this.radius = json.radius;
    this.center.fromArray(json.center);
    return this;
  }
};
var _vector$a = /* @__PURE__ */ new Vector3();
var _segCenter = /* @__PURE__ */ new Vector3();
var _segDir = /* @__PURE__ */ new Vector3();
var _diff = /* @__PURE__ */ new Vector3();
var _edge1 = /* @__PURE__ */ new Vector3();
var _edge2 = /* @__PURE__ */ new Vector3();
var _normal$1 = /* @__PURE__ */ new Vector3();
var Ray = class {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(origin = new Vector3(), direction = new Vector3(0, 0, -1)) {
    this.origin = origin;
    this.direction = direction;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(origin, direction) {
    this.origin.copy(origin);
    this.direction.copy(direction);
    return this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(ray) {
    this.origin.copy(ray.origin);
    this.direction.copy(ray.direction);
    return this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(t2, target) {
    return target.copy(this.origin).addScaledVector(this.direction, t2);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(v2) {
    this.direction.copy(v2).sub(this.origin).normalize();
    return this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(t2) {
    this.origin.copy(this.at(t2, _vector$a));
    return this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(point, target) {
    target.subVectors(point, this.origin);
    const directionDistance = target.dot(this.direction);
    if (directionDistance < 0) {
      return target.copy(this.origin);
    }
    return target.copy(this.origin).addScaledVector(this.direction, directionDistance);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(point) {
    return Math.sqrt(this.distanceSqToPoint(point));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(point) {
    const directionDistance = _vector$a.subVectors(point, this.origin).dot(this.direction);
    if (directionDistance < 0) {
      return this.origin.distanceToSquared(point);
    }
    _vector$a.copy(this.origin).addScaledVector(this.direction, directionDistance);
    return _vector$a.distanceToSquared(point);
  }
  /**
   * Returns the squared distance between this ray and the given line segment.
   *
   * @param {Vector3} v0 - The start point of the line segment.
   * @param {Vector3} v1 - The end point of the line segment.
   * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
   * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
   * @return {number} The squared distance.
   */
  distanceSqToSegment(v0, v1, optionalPointOnRay, optionalPointOnSegment) {
    _segCenter.copy(v0).add(v1).multiplyScalar(0.5);
    _segDir.copy(v1).sub(v0).normalize();
    _diff.copy(this.origin).sub(_segCenter);
    const segExtent = v0.distanceTo(v1) * 0.5;
    const a01 = -this.direction.dot(_segDir);
    const b0 = _diff.dot(this.direction);
    const b1 = -_diff.dot(_segDir);
    const c2 = _diff.lengthSq();
    const det = Math.abs(1 - a01 * a01);
    let s0, s1, sqrDist, extDet;
    if (det > 0) {
      s0 = a01 * b1 - b0;
      s1 = a01 * b0 - b1;
      extDet = segExtent * det;
      if (s0 >= 0) {
        if (s1 >= -extDet) {
          if (s1 <= extDet) {
            const invDet = 1 / det;
            s0 *= invDet;
            s1 *= invDet;
            sqrDist = s0 * (s0 + a01 * s1 + 2 * b0) + s1 * (a01 * s0 + s1 + 2 * b1) + c2;
          } else {
            s1 = segExtent;
            s0 = Math.max(0, -(a01 * s1 + b0));
            sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c2;
          }
        } else {
          s1 = -segExtent;
          s0 = Math.max(0, -(a01 * s1 + b0));
          sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c2;
        }
      } else {
        if (s1 <= -extDet) {
          s0 = Math.max(0, -(-a01 * segExtent + b0));
          s1 = s0 > 0 ? -segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
          sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c2;
        } else if (s1 <= extDet) {
          s0 = 0;
          s1 = Math.min(Math.max(-segExtent, -b1), segExtent);
          sqrDist = s1 * (s1 + 2 * b1) + c2;
        } else {
          s0 = Math.max(0, -(a01 * segExtent + b0));
          s1 = s0 > 0 ? segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
          sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c2;
        }
      }
    } else {
      s1 = a01 > 0 ? -segExtent : segExtent;
      s0 = Math.max(0, -(a01 * s1 + b0));
      sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c2;
    }
    if (optionalPointOnRay) {
      optionalPointOnRay.copy(this.origin).addScaledVector(this.direction, s0);
    }
    if (optionalPointOnSegment) {
      optionalPointOnSegment.copy(_segCenter).addScaledVector(_segDir, s1);
    }
    return sqrDist;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(sphere, target) {
    _vector$a.subVectors(sphere.center, this.origin);
    const tca = _vector$a.dot(this.direction);
    const d2 = _vector$a.dot(_vector$a) - tca * tca;
    const radius2 = sphere.radius * sphere.radius;
    if (d2 > radius2) return null;
    const thc = Math.sqrt(radius2 - d2);
    const t0 = tca - thc;
    const t1 = tca + thc;
    if (t1 < 0) return null;
    if (t0 < 0) return this.at(t1, target);
    return this.at(t0, target);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(sphere) {
    if (sphere.radius < 0) return false;
    return this.distanceSqToPoint(sphere.center) <= sphere.radius * sphere.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(plane) {
    const denominator = plane.normal.dot(this.direction);
    if (denominator === 0) {
      if (plane.distanceToPoint(this.origin) === 0) {
        return 0;
      }
      return null;
    }
    const t2 = -(this.origin.dot(plane.normal) + plane.constant) / denominator;
    return t2 >= 0 ? t2 : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(plane, target) {
    const t2 = this.distanceToPlane(plane);
    if (t2 === null) {
      return null;
    }
    return this.at(t2, target);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(plane) {
    const distToPoint = plane.distanceToPoint(this.origin);
    if (distToPoint === 0) {
      return true;
    }
    const denominator = plane.normal.dot(this.direction);
    if (denominator * distToPoint < 0) {
      return true;
    }
    return false;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(box, target) {
    let tmin, tmax, tymin, tymax, tzmin, tzmax;
    const invdirx = 1 / this.direction.x, invdiry = 1 / this.direction.y, invdirz = 1 / this.direction.z;
    const origin = this.origin;
    if (invdirx >= 0) {
      tmin = (box.min.x - origin.x) * invdirx;
      tmax = (box.max.x - origin.x) * invdirx;
    } else {
      tmin = (box.max.x - origin.x) * invdirx;
      tmax = (box.min.x - origin.x) * invdirx;
    }
    if (invdiry >= 0) {
      tymin = (box.min.y - origin.y) * invdiry;
      tymax = (box.max.y - origin.y) * invdiry;
    } else {
      tymin = (box.max.y - origin.y) * invdiry;
      tymax = (box.min.y - origin.y) * invdiry;
    }
    if (tmin > tymax || tymin > tmax) return null;
    if (tymin > tmin || isNaN(tmin)) tmin = tymin;
    if (tymax < tmax || isNaN(tmax)) tmax = tymax;
    if (invdirz >= 0) {
      tzmin = (box.min.z - origin.z) * invdirz;
      tzmax = (box.max.z - origin.z) * invdirz;
    } else {
      tzmin = (box.max.z - origin.z) * invdirz;
      tzmax = (box.min.z - origin.z) * invdirz;
    }
    if (tmin > tzmax || tzmin > tmax) return null;
    if (tzmin > tmin || tmin !== tmin) tmin = tzmin;
    if (tzmax < tmax || tmax !== tmax) tmax = tzmax;
    if (tmax < 0) return null;
    return this.at(tmin >= 0 ? tmin : tmax, target);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(box) {
    return this.intersectBox(box, _vector$a) !== null;
  }
  /**
   * Intersects this ray with the given triangle, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Vector3} a - The first vertex of the triangle.
   * @param {Vector3} b - The second vertex of the triangle.
   * @param {Vector3} c - The third vertex of the triangle.
   * @param {boolean} backfaceCulling - Whether to use backface culling or not.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectTriangle(a2, b2, c2, backfaceCulling, target) {
    _edge1.subVectors(b2, a2);
    _edge2.subVectors(c2, a2);
    _normal$1.crossVectors(_edge1, _edge2);
    let DdN = this.direction.dot(_normal$1);
    let sign2;
    if (DdN > 0) {
      if (backfaceCulling) return null;
      sign2 = 1;
    } else if (DdN < 0) {
      sign2 = -1;
      DdN = -DdN;
    } else {
      return null;
    }
    _diff.subVectors(this.origin, a2);
    const DdQxE2 = sign2 * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
    if (DdQxE2 < 0) {
      return null;
    }
    const DdE1xQ = sign2 * this.direction.dot(_edge1.cross(_diff));
    if (DdE1xQ < 0) {
      return null;
    }
    if (DdQxE2 + DdE1xQ > DdN) {
      return null;
    }
    const QdN = -sign2 * _diff.dot(_normal$1);
    if (QdN < 0) {
      return null;
    }
    return this.at(QdN / DdN, target);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(matrix4) {
    this.origin.applyMatrix4(matrix4);
    this.direction.transformDirection(matrix4);
    return this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(ray) {
    return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);
  }
  /**
   * Returns a new ray with copied values from this instance.
   *
   * @return {Ray} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
};
var Matrix4 = class _Matrix4 {
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    _Matrix4.prototype.isMatrix4 = true;
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
    if (n11 !== void 0) {
      this.set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44);
    }
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    const te = this.elements;
    te[0] = n11;
    te[4] = n12;
    te[8] = n13;
    te[12] = n14;
    te[1] = n21;
    te[5] = n22;
    te[9] = n23;
    te[13] = n24;
    te[2] = n31;
    te[6] = n32;
    te[10] = n33;
    te[14] = n34;
    te[3] = n41;
    te[7] = n42;
    te[11] = n43;
    te[15] = n44;
    return this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new _Matrix4().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(m2) {
    const te = this.elements;
    const me = m2.elements;
    te[0] = me[0];
    te[1] = me[1];
    te[2] = me[2];
    te[3] = me[3];
    te[4] = me[4];
    te[5] = me[5];
    te[6] = me[6];
    te[7] = me[7];
    te[8] = me[8];
    te[9] = me[9];
    te[10] = me[10];
    te[11] = me[11];
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    te[15] = me[15];
    return this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(m2) {
    const te = this.elements, me = m2.elements;
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    return this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(m2) {
    const me = m2.elements;
    this.set(
      me[0],
      me[3],
      me[6],
      0,
      me[1],
      me[4],
      me[7],
      0,
      me[2],
      me[5],
      me[8],
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(xAxis, yAxis, zAxis) {
    xAxis.setFromMatrixColumn(this, 0);
    yAxis.setFromMatrixColumn(this, 1);
    zAxis.setFromMatrixColumn(this, 2);
    return this;
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(xAxis, yAxis, zAxis) {
    this.set(
      xAxis.x,
      yAxis.x,
      zAxis.x,
      0,
      xAxis.y,
      yAxis.y,
      zAxis.y,
      0,
      xAxis.z,
      yAxis.z,
      zAxis.z,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(m2) {
    const te = this.elements;
    const me = m2.elements;
    const scaleX = 1 / _v1$5.setFromMatrixColumn(m2, 0).length();
    const scaleY = 1 / _v1$5.setFromMatrixColumn(m2, 1).length();
    const scaleZ = 1 / _v1$5.setFromMatrixColumn(m2, 2).length();
    te[0] = me[0] * scaleX;
    te[1] = me[1] * scaleX;
    te[2] = me[2] * scaleX;
    te[3] = 0;
    te[4] = me[4] * scaleY;
    te[5] = me[5] * scaleY;
    te[6] = me[6] * scaleY;
    te[7] = 0;
    te[8] = me[8] * scaleZ;
    te[9] = me[9] * scaleZ;
    te[10] = me[10] * scaleZ;
    te[11] = 0;
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page](https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix)
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(euler) {
    const te = this.elements;
    const x2 = euler.x, y2 = euler.y, z2 = euler.z;
    const a2 = Math.cos(x2), b2 = Math.sin(x2);
    const c2 = Math.cos(y2), d2 = Math.sin(y2);
    const e2 = Math.cos(z2), f2 = Math.sin(z2);
    if (euler.order === "XYZ") {
      const ae = a2 * e2, af = a2 * f2, be = b2 * e2, bf = b2 * f2;
      te[0] = c2 * e2;
      te[4] = -c2 * f2;
      te[8] = d2;
      te[1] = af + be * d2;
      te[5] = ae - bf * d2;
      te[9] = -b2 * c2;
      te[2] = bf - ae * d2;
      te[6] = be + af * d2;
      te[10] = a2 * c2;
    } else if (euler.order === "YXZ") {
      const ce = c2 * e2, cf = c2 * f2, de = d2 * e2, df = d2 * f2;
      te[0] = ce + df * b2;
      te[4] = de * b2 - cf;
      te[8] = a2 * d2;
      te[1] = a2 * f2;
      te[5] = a2 * e2;
      te[9] = -b2;
      te[2] = cf * b2 - de;
      te[6] = df + ce * b2;
      te[10] = a2 * c2;
    } else if (euler.order === "ZXY") {
      const ce = c2 * e2, cf = c2 * f2, de = d2 * e2, df = d2 * f2;
      te[0] = ce - df * b2;
      te[4] = -a2 * f2;
      te[8] = de + cf * b2;
      te[1] = cf + de * b2;
      te[5] = a2 * e2;
      te[9] = df - ce * b2;
      te[2] = -a2 * d2;
      te[6] = b2;
      te[10] = a2 * c2;
    } else if (euler.order === "ZYX") {
      const ae = a2 * e2, af = a2 * f2, be = b2 * e2, bf = b2 * f2;
      te[0] = c2 * e2;
      te[4] = be * d2 - af;
      te[8] = ae * d2 + bf;
      te[1] = c2 * f2;
      te[5] = bf * d2 + ae;
      te[9] = af * d2 - be;
      te[2] = -d2;
      te[6] = b2 * c2;
      te[10] = a2 * c2;
    } else if (euler.order === "YZX") {
      const ac = a2 * c2, ad = a2 * d2, bc = b2 * c2, bd = b2 * d2;
      te[0] = c2 * e2;
      te[4] = bd - ac * f2;
      te[8] = bc * f2 + ad;
      te[1] = f2;
      te[5] = a2 * e2;
      te[9] = -b2 * e2;
      te[2] = -d2 * e2;
      te[6] = ad * f2 + bc;
      te[10] = ac - bd * f2;
    } else if (euler.order === "XZY") {
      const ac = a2 * c2, ad = a2 * d2, bc = b2 * c2, bd = b2 * d2;
      te[0] = c2 * e2;
      te[4] = -f2;
      te[8] = d2 * e2;
      te[1] = ac * f2 + bd;
      te[5] = a2 * e2;
      te[9] = ad * f2 - bc;
      te[2] = bc * f2 - ad;
      te[6] = b2 * e2;
      te[10] = bd * f2 + ac;
    }
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here](https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion)
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(q2) {
    return this.compose(_zero, q2, _one);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(eye, target, up) {
    const te = this.elements;
    _z.subVectors(eye, target);
    if (_z.lengthSq() === 0) {
      _z.z = 1;
    }
    _z.normalize();
    _x.crossVectors(up, _z);
    if (_x.lengthSq() === 0) {
      if (Math.abs(up.z) === 1) {
        _z.x += 1e-4;
      } else {
        _z.z += 1e-4;
      }
      _z.normalize();
      _x.crossVectors(up, _z);
    }
    _x.normalize();
    _y.crossVectors(_z, _x);
    te[0] = _x.x;
    te[4] = _y.x;
    te[8] = _z.x;
    te[1] = _x.y;
    te[5] = _y.y;
    te[9] = _z.y;
    te[2] = _x.z;
    te[6] = _y.z;
    te[10] = _z.z;
    return this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(m2) {
    return this.multiplyMatrices(this, m2);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(m2) {
    return this.multiplyMatrices(m2, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(a2, b2) {
    const ae = a2.elements;
    const be = b2.elements;
    const te = this.elements;
    const a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
    const a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
    const a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
    const a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
    const b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
    const b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
    const b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
    const b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
    return this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(s2) {
    const te = this.elements;
    te[0] *= s2;
    te[4] *= s2;
    te[8] *= s2;
    te[12] *= s2;
    te[1] *= s2;
    te[5] *= s2;
    te[9] *= s2;
    te[13] *= s2;
    te[2] *= s2;
    te[6] *= s2;
    te[10] *= s2;
    te[14] *= s2;
    te[3] *= s2;
    te[7] *= s2;
    te[11] *= s2;
    te[15] *= s2;
    return this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here](http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html).
   *
   * @return {number} The determinant.
   */
  determinant() {
    const te = this.elements;
    const n11 = te[0], n12 = te[4], n13 = te[8], n14 = te[12];
    const n21 = te[1], n22 = te[5], n23 = te[9], n24 = te[13];
    const n31 = te[2], n32 = te[6], n33 = te[10], n34 = te[14];
    const n41 = te[3], n42 = te[7], n43 = te[11], n44 = te[15];
    return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const te = this.elements;
    let tmp2;
    tmp2 = te[1];
    te[1] = te[4];
    te[4] = tmp2;
    tmp2 = te[2];
    te[2] = te[8];
    te[8] = tmp2;
    tmp2 = te[6];
    te[6] = te[9];
    te[9] = tmp2;
    tmp2 = te[3];
    te[3] = te[12];
    te[12] = tmp2;
    tmp2 = te[7];
    te[7] = te[13];
    te[13] = tmp2;
    tmp2 = te[11];
    te[11] = te[14];
    te[14] = tmp2;
    return this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(x2, y2, z2) {
    const te = this.elements;
    if (x2.isVector3) {
      te[12] = x2.x;
      te[13] = x2.y;
      te[14] = x2.z;
    } else {
      te[12] = x2;
      te[13] = y2;
      te[14] = z2;
    }
    return this;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n41 = te[3], n12 = te[4], n22 = te[5], n32 = te[6], n42 = te[7], n13 = te[8], n23 = te[9], n33 = te[10], n43 = te[11], n14 = te[12], n24 = te[13], n34 = te[14], n44 = te[15], t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44, t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44, t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44, t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
    const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
    if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const detInv = 1 / det;
    te[0] = t11 * detInv;
    te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
    te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
    te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
    te[4] = t12 * detInv;
    te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
    te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
    te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
    te[8] = t13 * detInv;
    te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
    te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
    te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
    te[12] = t14 * detInv;
    te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
    te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
    te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
    return this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(v2) {
    const te = this.elements;
    const x2 = v2.x, y2 = v2.y, z2 = v2.z;
    te[0] *= x2;
    te[4] *= y2;
    te[8] *= z2;
    te[1] *= x2;
    te[5] *= y2;
    te[9] *= z2;
    te[2] *= x2;
    te[6] *= y2;
    te[10] *= z2;
    te[3] *= x2;
    te[7] *= y2;
    te[11] *= z2;
    return this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const te = this.elements;
    const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
    const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
    const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
    return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(x2, y2, z2) {
    if (x2.isVector3) {
      this.set(
        1,
        0,
        0,
        x2.x,
        0,
        1,
        0,
        x2.y,
        0,
        0,
        1,
        x2.z,
        0,
        0,
        0,
        1
      );
    } else {
      this.set(
        1,
        0,
        0,
        x2,
        0,
        1,
        0,
        y2,
        0,
        0,
        1,
        z2,
        0,
        0,
        0,
        1
      );
    }
    return this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(theta) {
    const c2 = Math.cos(theta), s2 = Math.sin(theta);
    this.set(
      1,
      0,
      0,
      0,
      0,
      c2,
      -s2,
      0,
      0,
      s2,
      c2,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(theta) {
    const c2 = Math.cos(theta), s2 = Math.sin(theta);
    this.set(
      c2,
      0,
      s2,
      0,
      0,
      1,
      0,
      0,
      -s2,
      0,
      c2,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(theta) {
    const c2 = Math.cos(theta), s2 = Math.sin(theta);
    this.set(
      c2,
      -s2,
      0,
      0,
      s2,
      c2,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * This is a somewhat controversial but mathematically sound alternative to
   * rotating via Quaternions. See the discussion [here](https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199).
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(axis, angle) {
    const c2 = Math.cos(angle);
    const s2 = Math.sin(angle);
    const t2 = 1 - c2;
    const x2 = axis.x, y2 = axis.y, z2 = axis.z;
    const tx = t2 * x2, ty = t2 * y2;
    this.set(
      tx * x2 + c2,
      tx * y2 - s2 * z2,
      tx * z2 + s2 * y2,
      0,
      tx * y2 + s2 * z2,
      ty * y2 + c2,
      ty * z2 - s2 * x2,
      0,
      tx * z2 - s2 * y2,
      ty * z2 + s2 * x2,
      t2 * z2 * z2 + c2,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(x2, y2, z2) {
    this.set(
      x2,
      0,
      0,
      0,
      0,
      y2,
      0,
      0,
      0,
      0,
      z2,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(xy, xz, yx, yz, zx, zy) {
    this.set(
      1,
      yx,
      zx,
      0,
      xy,
      1,
      zy,
      0,
      xz,
      yz,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(position, quaternion, scale) {
    const te = this.elements;
    const x2 = quaternion._x, y2 = quaternion._y, z2 = quaternion._z, w2 = quaternion._w;
    const x22 = x2 + x2, y22 = y2 + y2, z22 = z2 + z2;
    const xx = x2 * x22, xy = x2 * y22, xz = x2 * z22;
    const yy = y2 * y22, yz = y2 * z22, zz = z2 * z22;
    const wx = w2 * x22, wy = w2 * y22, wz = w2 * z22;
    const sx = scale.x, sy = scale.y, sz = scale.z;
    te[0] = (1 - (yy + zz)) * sx;
    te[1] = (xy + wz) * sx;
    te[2] = (xz - wy) * sx;
    te[3] = 0;
    te[4] = (xy - wz) * sy;
    te[5] = (1 - (xx + zz)) * sy;
    te[6] = (yz + wx) * sy;
    te[7] = 0;
    te[8] = (xz + wy) * sz;
    te[9] = (yz - wx) * sz;
    te[10] = (1 - (xx + yy)) * sz;
    te[11] = 0;
    te[12] = position.x;
    te[13] = position.y;
    te[14] = position.z;
    te[15] = 1;
    return this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(position, quaternion, scale) {
    const te = this.elements;
    let sx = _v1$5.set(te[0], te[1], te[2]).length();
    const sy = _v1$5.set(te[4], te[5], te[6]).length();
    const sz = _v1$5.set(te[8], te[9], te[10]).length();
    const det = this.determinant();
    if (det < 0) sx = -sx;
    position.x = te[12];
    position.y = te[13];
    position.z = te[14];
    _m1$2.copy(this);
    const invSX = 1 / sx;
    const invSY = 1 / sy;
    const invSZ = 1 / sz;
    _m1$2.elements[0] *= invSX;
    _m1$2.elements[1] *= invSX;
    _m1$2.elements[2] *= invSX;
    _m1$2.elements[4] *= invSY;
    _m1$2.elements[5] *= invSY;
    _m1$2.elements[6] *= invSY;
    _m1$2.elements[8] *= invSZ;
    _m1$2.elements[9] *= invSZ;
    _m1$2.elements[10] *= invSZ;
    quaternion.setFromRotationMatrix(_m1$2);
    scale.x = sx;
    scale.y = sy;
    scale.z = sz;
    return this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem, reversedDepth = false) {
    const te = this.elements;
    const x2 = 2 * near / (right - left);
    const y2 = 2 * near / (top - bottom);
    const a2 = (right + left) / (right - left);
    const b2 = (top + bottom) / (top - bottom);
    let c2, d2;
    if (reversedDepth) {
      c2 = near / (far - near);
      d2 = far * near / (far - near);
    } else {
      if (coordinateSystem === WebGLCoordinateSystem) {
        c2 = -(far + near) / (far - near);
        d2 = -2 * far * near / (far - near);
      } else if (coordinateSystem === WebGPUCoordinateSystem) {
        c2 = -far / (far - near);
        d2 = -far * near / (far - near);
      } else {
        throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + coordinateSystem);
      }
    }
    te[0] = x2;
    te[4] = 0;
    te[8] = a2;
    te[12] = 0;
    te[1] = 0;
    te[5] = y2;
    te[9] = b2;
    te[13] = 0;
    te[2] = 0;
    te[6] = 0;
    te[10] = c2;
    te[14] = d2;
    te[3] = 0;
    te[7] = 0;
    te[11] = -1;
    te[15] = 0;
    return this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem, reversedDepth = false) {
    const te = this.elements;
    const x2 = 2 / (right - left);
    const y2 = 2 / (top - bottom);
    const a2 = -(right + left) / (right - left);
    const b2 = -(top + bottom) / (top - bottom);
    let c2, d2;
    if (reversedDepth) {
      c2 = 1 / (far - near);
      d2 = far / (far - near);
    } else {
      if (coordinateSystem === WebGLCoordinateSystem) {
        c2 = -2 / (far - near);
        d2 = -(far + near) / (far - near);
      } else if (coordinateSystem === WebGPUCoordinateSystem) {
        c2 = -1 / (far - near);
        d2 = -near / (far - near);
      } else {
        throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + coordinateSystem);
      }
    }
    te[0] = x2;
    te[4] = 0;
    te[8] = 0;
    te[12] = a2;
    te[1] = 0;
    te[5] = y2;
    te[9] = 0;
    te[13] = b2;
    te[2] = 0;
    te[6] = 0;
    te[10] = c2;
    te[14] = d2;
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[15] = 1;
    return this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(matrix) {
    const te = this.elements;
    const me = matrix.elements;
    for (let i2 = 0; i2 < 16; i2++) {
      if (te[i2] !== me[i2]) return false;
    }
    return true;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(array, offset = 0) {
    for (let i2 = 0; i2 < 16; i2++) {
      this.elements[i2] = array[i2 + offset];
    }
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(array = [], offset = 0) {
    const te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    array[offset + 9] = te[9];
    array[offset + 10] = te[10];
    array[offset + 11] = te[11];
    array[offset + 12] = te[12];
    array[offset + 13] = te[13];
    array[offset + 14] = te[14];
    array[offset + 15] = te[15];
    return array;
  }
};
var _v1$5 = /* @__PURE__ */ new Vector3();
var _m1$2 = /* @__PURE__ */ new Matrix4();
var _zero = /* @__PURE__ */ new Vector3(0, 0, 0);
var _one = /* @__PURE__ */ new Vector3(1, 1, 1);
var _x = /* @__PURE__ */ new Vector3();
var _y = /* @__PURE__ */ new Vector3();
var _z = /* @__PURE__ */ new Vector3();
var _matrix$2 = /* @__PURE__ */ new Matrix4();
var _quaternion$3 = /* @__PURE__ */ new Quaternion();
var Euler = class _Euler {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(x2 = 0, y2 = 0, z2 = 0, order = _Euler.DEFAULT_ORDER) {
    this.isEuler = true;
    this._x = x2;
    this._y = y2;
    this._z = z2;
    this._order = order;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(value) {
    this._z = value;
    this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(value) {
    this._order = value;
    this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(x2, y2, z2, order = this._order) {
    this._x = x2;
    this._y = y2;
    this._z = z2;
    this._order = order;
    this._onChangeCallback();
    return this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(euler) {
    this._x = euler._x;
    this._y = euler._y;
    this._z = euler._z;
    this._order = euler._order;
    this._onChangeCallback();
    return this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(m2, order = this._order, update = true) {
    const te = m2.elements;
    const m11 = te[0], m12 = te[4], m13 = te[8];
    const m21 = te[1], m22 = te[5], m23 = te[9];
    const m31 = te[2], m32 = te[6], m33 = te[10];
    switch (order) {
      case "XYZ":
        this._y = Math.asin(clamp(m13, -1, 1));
        if (Math.abs(m13) < 0.9999999) {
          this._x = Math.atan2(-m23, m33);
          this._z = Math.atan2(-m12, m11);
        } else {
          this._x = Math.atan2(m32, m22);
          this._z = 0;
        }
        break;
      case "YXZ":
        this._x = Math.asin(-clamp(m23, -1, 1));
        if (Math.abs(m23) < 0.9999999) {
          this._y = Math.atan2(m13, m33);
          this._z = Math.atan2(m21, m22);
        } else {
          this._y = Math.atan2(-m31, m11);
          this._z = 0;
        }
        break;
      case "ZXY":
        this._x = Math.asin(clamp(m32, -1, 1));
        if (Math.abs(m32) < 0.9999999) {
          this._y = Math.atan2(-m31, m33);
          this._z = Math.atan2(-m12, m22);
        } else {
          this._y = 0;
          this._z = Math.atan2(m21, m11);
        }
        break;
      case "ZYX":
        this._y = Math.asin(-clamp(m31, -1, 1));
        if (Math.abs(m31) < 0.9999999) {
          this._x = Math.atan2(m32, m33);
          this._z = Math.atan2(m21, m11);
        } else {
          this._x = 0;
          this._z = Math.atan2(-m12, m22);
        }
        break;
      case "YZX":
        this._z = Math.asin(clamp(m21, -1, 1));
        if (Math.abs(m21) < 0.9999999) {
          this._x = Math.atan2(-m23, m22);
          this._y = Math.atan2(-m31, m11);
        } else {
          this._x = 0;
          this._y = Math.atan2(m13, m33);
        }
        break;
      case "XZY":
        this._z = Math.asin(-clamp(m12, -1, 1));
        if (Math.abs(m12) < 0.9999999) {
          this._x = Math.atan2(m32, m22);
          this._y = Math.atan2(m13, m11);
        } else {
          this._x = Math.atan2(-m23, m33);
          this._y = 0;
        }
        break;
      default:
        warn("Euler: .setFromRotationMatrix() encountered an unknown order: " + order);
    }
    this._order = order;
    if (update === true) this._onChangeCallback();
    return this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(q2, order, update) {
    _matrix$2.makeRotationFromQuaternion(q2);
    return this.setFromRotationMatrix(_matrix$2, order, update);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(v2, order = this._order) {
    return this.set(v2.x, v2.y, v2.z, order);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(newOrder) {
    _quaternion$3.setFromEuler(this);
    return this.setFromQuaternion(_quaternion$3, newOrder);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(euler) {
    return euler._x === this._x && euler._y === this._y && euler._z === this._z && euler._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(array) {
    this._x = array[0];
    this._y = array[1];
    this._z = array[2];
    if (array[3] !== void 0) this._order = array[3];
    this._onChangeCallback();
    return this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(array = [], offset = 0) {
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._order;
    return array;
  }
  _onChange(callback) {
    this._onChangeCallback = callback;
    return this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._order;
  }
};
Euler.DEFAULT_ORDER = "XYZ";
var Layers = class {
  /**
   * Constructs a new layers instance, with membership
   * initially set to layer `0`.
   */
  constructor() {
    this.mask = 1 | 0;
  }
  /**
   * Sets membership to the given layer, and remove membership all other layers.
   *
   * @param {number} layer - The layer to set.
   */
  set(layer) {
    this.mask = (1 << layer | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(layer) {
    this.mask |= 1 << layer | 0;
  }
  /**
   * Adds membership to all layers.
   */
  enableAll() {
    this.mask = 4294967295 | 0;
  }
  /**
   * Toggles the membership of the given layer.
   *
   * @param {number} layer - The layer to toggle.
   */
  toggle(layer) {
    this.mask ^= 1 << layer | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(layer) {
    this.mask &= ~(1 << layer | 0);
  }
  /**
   * Removes the membership from all layers.
   */
  disableAll() {
    this.mask = 0;
  }
  /**
   * Returns `true` if this and the given layers object have at least one
   * layer in common.
   *
   * @param {Layers} layers - The layers to test.
   * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
   */
  test(layers) {
    return (this.mask & layers.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(layer) {
    return (this.mask & (1 << layer | 0)) !== 0;
  }
};
var _object3DId = 0;
var _v1$4 = /* @__PURE__ */ new Vector3();
var _q1 = /* @__PURE__ */ new Quaternion();
var _m1$1 = /* @__PURE__ */ new Matrix4();
var _target = /* @__PURE__ */ new Vector3();
var _position$3 = /* @__PURE__ */ new Vector3();
var _scale$2 = /* @__PURE__ */ new Vector3();
var _quaternion$2 = /* @__PURE__ */ new Quaternion();
var _xAxis = /* @__PURE__ */ new Vector3(1, 0, 0);
var _yAxis = /* @__PURE__ */ new Vector3(0, 1, 0);
var _zAxis = /* @__PURE__ */ new Vector3(0, 0, 1);
var _addedEvent = { type: "added" };
var _removedEvent = { type: "removed" };
var _childaddedEvent = { type: "childadded", child: null };
var _childremovedEvent = { type: "childremoved", child: null };
var Object3D = class _Object3D extends EventDispatcher {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super();
    this.isObject3D = true;
    Object.defineProperty(this, "id", { value: _object3DId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = _Object3D.DEFAULT_UP.clone();
    const position = new Vector3();
    const rotation = new Euler();
    const quaternion = new Quaternion();
    const scale = new Vector3(1, 1, 1);
    function onRotationChange() {
      quaternion.setFromEuler(rotation, false);
    }
    function onQuaternionChange() {
      rotation.setFromQuaternion(quaternion, void 0, false);
    }
    rotation._onChange(onRotationChange);
    quaternion._onChange(onQuaternionChange);
    Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: true,
        enumerable: true,
        value: position
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: true,
        enumerable: true,
        value: rotation
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: true,
        enumerable: true,
        value: quaternion
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: true,
        enumerable: true,
        value: scale
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new Matrix4()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Matrix3()
      }
    });
    this.matrix = new Matrix4();
    this.matrixWorld = new Matrix4();
    this.matrixAutoUpdate = _Object3D.DEFAULT_MATRIX_AUTO_UPDATE;
    this.matrixWorldAutoUpdate = _Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;
    this.matrixWorldNeedsUpdate = false;
    this.layers = new Layers();
    this.visible = true;
    this.castShadow = false;
    this.receiveShadow = false;
    this.frustumCulled = true;
    this.renderOrder = 0;
    this.animations = [];
    this.customDepthMaterial = void 0;
    this.customDistanceMaterial = void 0;
    this.userData = {};
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(matrix) {
    if (this.matrixAutoUpdate) this.updateMatrix();
    this.matrix.premultiply(matrix);
    this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(q2) {
    this.quaternion.premultiply(q2);
    return this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(axis, angle) {
    this.quaternion.setFromAxisAngle(axis, angle);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(euler) {
    this.quaternion.setFromEuler(euler, true);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(m2) {
    this.quaternion.setFromRotationMatrix(m2);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(q2) {
    this.quaternion.copy(q2);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(axis, angle) {
    _q1.setFromAxisAngle(axis, angle);
    this.quaternion.multiply(_q1);
    return this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(axis, angle) {
    _q1.setFromAxisAngle(axis, angle);
    this.quaternion.premultiply(_q1);
    return this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(angle) {
    return this.rotateOnAxis(_xAxis, angle);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(angle) {
    return this.rotateOnAxis(_yAxis, angle);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(angle) {
    return this.rotateOnAxis(_zAxis, angle);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(axis, distance) {
    _v1$4.copy(axis).applyQuaternion(this.quaternion);
    this.position.add(_v1$4.multiplyScalar(distance));
    return this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(distance) {
    return this.translateOnAxis(_xAxis, distance);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(distance) {
    return this.translateOnAxis(_yAxis, distance);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(distance) {
    return this.translateOnAxis(_zAxis, distance);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(vector) {
    this.updateWorldMatrix(true, false);
    return vector.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's word space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(vector) {
    this.updateWorldMatrix(true, false);
    return vector.applyMatrix4(_m1$1.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(x2, y2, z2) {
    if (x2.isVector3) {
      _target.copy(x2);
    } else {
      _target.set(x2, y2, z2);
    }
    const parent = this.parent;
    this.updateWorldMatrix(true, false);
    _position$3.setFromMatrixPosition(this.matrixWorld);
    if (this.isCamera || this.isLight) {
      _m1$1.lookAt(_position$3, _target, this.up);
    } else {
      _m1$1.lookAt(_target, _position$3, this.up);
    }
    this.quaternion.setFromRotationMatrix(_m1$1);
    if (parent) {
      _m1$1.extractRotation(parent.matrixWorld);
      _q1.setFromRotationMatrix(_m1$1);
      this.quaternion.premultiply(_q1.invert());
    }
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(object) {
    if (arguments.length > 1) {
      for (let i2 = 0; i2 < arguments.length; i2++) {
        this.add(arguments[i2]);
      }
      return this;
    }
    if (object === this) {
      error("Object3D.add: object can't be added as a child of itself.", object);
      return this;
    }
    if (object && object.isObject3D) {
      object.removeFromParent();
      object.parent = this;
      this.children.push(object);
      object.dispatchEvent(_addedEvent);
      _childaddedEvent.child = object;
      this.dispatchEvent(_childaddedEvent);
      _childaddedEvent.child = null;
    } else {
      error("Object3D.add: object not an instance of THREE.Object3D.", object);
    }
    return this;
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(object) {
    if (arguments.length > 1) {
      for (let i2 = 0; i2 < arguments.length; i2++) {
        this.remove(arguments[i2]);
      }
      return this;
    }
    const index = this.children.indexOf(object);
    if (index !== -1) {
      object.parent = null;
      this.children.splice(index, 1);
      object.dispatchEvent(_removedEvent);
      _childremovedEvent.child = object;
      this.dispatchEvent(_childremovedEvent);
      _childremovedEvent.child = null;
    }
    return this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const parent = this.parent;
    if (parent !== null) {
      parent.remove(this);
    }
    return this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(object) {
    this.updateWorldMatrix(true, false);
    _m1$1.copy(this.matrixWorld).invert();
    if (object.parent !== null) {
      object.parent.updateWorldMatrix(true, false);
      _m1$1.multiply(object.parent.matrixWorld);
    }
    object.applyMatrix4(_m1$1);
    object.removeFromParent();
    object.parent = this;
    this.children.push(object);
    object.updateWorldMatrix(false, true);
    object.dispatchEvent(_addedEvent);
    _childaddedEvent.child = object;
    this.dispatchEvent(_childaddedEvent);
    _childaddedEvent.child = null;
    return this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(id) {
    return this.getObjectByProperty("id", id);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(name) {
    return this.getObjectByProperty("name", name);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(name, value) {
    if (this[name] === value) return this;
    for (let i2 = 0, l2 = this.children.length; i2 < l2; i2++) {
      const child = this.children[i2];
      const object = child.getObjectByProperty(name, value);
      if (object !== void 0) {
        return object;
      }
    }
    return void 0;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(name, value, result = []) {
    if (this[name] === value) result.push(this);
    const children = this.children;
    for (let i2 = 0, l2 = children.length; i2 < l2; i2++) {
      children[i2].getObjectsByProperty(name, value, result);
    }
    return result;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(target) {
    this.updateWorldMatrix(true, false);
    return target.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(target) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(_position$3, target, _scale$2);
    return target;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(target) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(_position$3, _quaternion$2, target);
    return target;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(target) {
    this.updateWorldMatrix(true, false);
    const e2 = this.matrixWorld.elements;
    return target.set(e2[8], e2[9], e2[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(callback) {
    callback(this);
    const children = this.children;
    for (let i2 = 0, l2 = children.length; i2 < l2; i2++) {
      children[i2].traverse(callback);
    }
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(callback) {
    if (this.visible === false) return;
    callback(this);
    const children = this.children;
    for (let i2 = 0, l2 = children.length; i2 < l2; i2++) {
      children[i2].traverseVisible(callback);
    }
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(callback) {
    const parent = this.parent;
    if (parent !== null) {
      callback(parent);
      parent.traverseAncestors(callback);
    }
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = true;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldAutoUpdate} is set to `false`.
   */
  updateMatrixWorld(force) {
    if (this.matrixAutoUpdate) this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || force) {
      if (this.matrixWorldAutoUpdate === true) {
        if (this.parent === null) {
          this.matrixWorld.copy(this.matrix);
        } else {
          this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
        }
      }
      this.matrixWorldNeedsUpdate = false;
      force = true;
    }
    const children = this.children;
    for (let i2 = 0, l2 = children.length; i2 < l2; i2++) {
      const child = children[i2];
      child.updateMatrixWorld(force);
    }
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   */
  updateWorldMatrix(updateParents, updateChildren) {
    const parent = this.parent;
    if (updateParents === true && parent !== null) {
      parent.updateWorldMatrix(true, false);
    }
    if (this.matrixAutoUpdate) this.updateMatrix();
    if (this.matrixWorldAutoUpdate === true) {
      if (this.parent === null) {
        this.matrixWorld.copy(this.matrix);
      } else {
        this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      }
    }
    if (updateChildren === true) {
      const children = this.children;
      for (let i2 = 0, l2 = children.length; i2 < l2; i2++) {
        const child = children[i2];
        child.updateWorldMatrix(false, true);
      }
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    const output = {};
    if (isRootObject) {
      meta = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      };
      output.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON"
      };
    }
    const object = {};
    object.uuid = this.uuid;
    object.type = this.type;
    if (this.name !== "") object.name = this.name;
    if (this.castShadow === true) object.castShadow = true;
    if (this.receiveShadow === true) object.receiveShadow = true;
    if (this.visible === false) object.visible = false;
    if (this.frustumCulled === false) object.frustumCulled = false;
    if (this.renderOrder !== 0) object.renderOrder = this.renderOrder;
    if (Object.keys(this.userData).length > 0) object.userData = this.userData;
    object.layers = this.layers.mask;
    object.matrix = this.matrix.toArray();
    object.up = this.up.toArray();
    if (this.matrixAutoUpdate === false) object.matrixAutoUpdate = false;
    if (this.isInstancedMesh) {
      object.type = "InstancedMesh";
      object.count = this.count;
      object.instanceMatrix = this.instanceMatrix.toJSON();
      if (this.instanceColor !== null) object.instanceColor = this.instanceColor.toJSON();
    }
    if (this.isBatchedMesh) {
      object.type = "BatchedMesh";
      object.perObjectFrustumCulled = this.perObjectFrustumCulled;
      object.sortObjects = this.sortObjects;
      object.drawRanges = this._drawRanges;
      object.reservedRanges = this._reservedRanges;
      object.geometryInfo = this._geometryInfo.map((info) => ({
        ...info,
        boundingBox: info.boundingBox ? info.boundingBox.toJSON() : void 0,
        boundingSphere: info.boundingSphere ? info.boundingSphere.toJSON() : void 0
      }));
      object.instanceInfo = this._instanceInfo.map((info) => ({ ...info }));
      object.availableInstanceIds = this._availableInstanceIds.slice();
      object.availableGeometryIds = this._availableGeometryIds.slice();
      object.nextIndexStart = this._nextIndexStart;
      object.nextVertexStart = this._nextVertexStart;
      object.geometryCount = this._geometryCount;
      object.maxInstanceCount = this._maxInstanceCount;
      object.maxVertexCount = this._maxVertexCount;
      object.maxIndexCount = this._maxIndexCount;
      object.geometryInitialized = this._geometryInitialized;
      object.matricesTexture = this._matricesTexture.toJSON(meta);
      object.indirectTexture = this._indirectTexture.toJSON(meta);
      if (this._colorsTexture !== null) {
        object.colorsTexture = this._colorsTexture.toJSON(meta);
      }
      if (this.boundingSphere !== null) {
        object.boundingSphere = this.boundingSphere.toJSON();
      }
      if (this.boundingBox !== null) {
        object.boundingBox = this.boundingBox.toJSON();
      }
    }
    function serialize(library, element) {
      if (library[element.uuid] === void 0) {
        library[element.uuid] = element.toJSON(meta);
      }
      return element.uuid;
    }
    if (this.isScene) {
      if (this.background) {
        if (this.background.isColor) {
          object.background = this.background.toJSON();
        } else if (this.background.isTexture) {
          object.background = this.background.toJSON(meta).uuid;
        }
      }
      if (this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true) {
        object.environment = this.environment.toJSON(meta).uuid;
      }
    } else if (this.isMesh || this.isLine || this.isPoints) {
      object.geometry = serialize(meta.geometries, this.geometry);
      const parameters = this.geometry.parameters;
      if (parameters !== void 0 && parameters.shapes !== void 0) {
        const shapes = parameters.shapes;
        if (Array.isArray(shapes)) {
          for (let i2 = 0, l2 = shapes.length; i2 < l2; i2++) {
            const shape = shapes[i2];
            serialize(meta.shapes, shape);
          }
        } else {
          serialize(meta.shapes, shapes);
        }
      }
    }
    if (this.isSkinnedMesh) {
      object.bindMode = this.bindMode;
      object.bindMatrix = this.bindMatrix.toArray();
      if (this.skeleton !== void 0) {
        serialize(meta.skeletons, this.skeleton);
        object.skeleton = this.skeleton.uuid;
      }
    }
    if (this.material !== void 0) {
      if (Array.isArray(this.material)) {
        const uuids = [];
        for (let i2 = 0, l2 = this.material.length; i2 < l2; i2++) {
          uuids.push(serialize(meta.materials, this.material[i2]));
        }
        object.material = uuids;
      } else {
        object.material = serialize(meta.materials, this.material);
      }
    }
    if (this.children.length > 0) {
      object.children = [];
      for (let i2 = 0; i2 < this.children.length; i2++) {
        object.children.push(this.children[i2].toJSON(meta).object);
      }
    }
    if (this.animations.length > 0) {
      object.animations = [];
      for (let i2 = 0; i2 < this.animations.length; i2++) {
        const animation = this.animations[i2];
        object.animations.push(serialize(meta.animations, animation));
      }
    }
    if (isRootObject) {
      const geometries = extractFromCache(meta.geometries);
      const materials = extractFromCache(meta.materials);
      const textures = extractFromCache(meta.textures);
      const images = extractFromCache(meta.images);
      const shapes = extractFromCache(meta.shapes);
      const skeletons = extractFromCache(meta.skeletons);
      const animations = extractFromCache(meta.animations);
      const nodes = extractFromCache(meta.nodes);
      if (geometries.length > 0) output.geometries = geometries;
      if (materials.length > 0) output.materials = materials;
      if (textures.length > 0) output.textures = textures;
      if (images.length > 0) output.images = images;
      if (shapes.length > 0) output.shapes = shapes;
      if (skeletons.length > 0) output.skeletons = skeletons;
      if (animations.length > 0) output.animations = animations;
      if (nodes.length > 0) output.nodes = nodes;
    }
    output.object = object;
    return output;
    function extractFromCache(cache) {
      const values = [];
      for (const key in cache) {
        const data = cache[key];
        delete data.metadata;
        values.push(data);
      }
      return values;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(recursive) {
    return new this.constructor().copy(this, recursive);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(source, recursive = true) {
    this.name = source.name;
    this.up.copy(source.up);
    this.position.copy(source.position);
    this.rotation.order = source.rotation.order;
    this.quaternion.copy(source.quaternion);
    this.scale.copy(source.scale);
    this.matrix.copy(source.matrix);
    this.matrixWorld.copy(source.matrixWorld);
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
    this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;
    this.layers.mask = source.layers.mask;
    this.visible = source.visible;
    this.castShadow = source.castShadow;
    this.receiveShadow = source.receiveShadow;
    this.frustumCulled = source.frustumCulled;
    this.renderOrder = source.renderOrder;
    this.animations = source.animations.slice();
    this.userData = JSON.parse(JSON.stringify(source.userData));
    if (recursive === true) {
      for (let i2 = 0; i2 < source.children.length; i2++) {
        const child = source.children[i2];
        this.add(child.clone());
      }
    }
    return this;
  }
};
Object3D.DEFAULT_UP = /* @__PURE__ */ new Vector3(0, 1, 0);
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
var _v0$1 = /* @__PURE__ */ new Vector3();
var _v1$3 = /* @__PURE__ */ new Vector3();
var _v2$2 = /* @__PURE__ */ new Vector3();
var _v3$2 = /* @__PURE__ */ new Vector3();
var _vab = /* @__PURE__ */ new Vector3();
var _vac = /* @__PURE__ */ new Vector3();
var _vbc = /* @__PURE__ */ new Vector3();
var _vap = /* @__PURE__ */ new Vector3();
var _vbp = /* @__PURE__ */ new Vector3();
var _vcp = /* @__PURE__ */ new Vector3();
var _v40 = /* @__PURE__ */ new Vector4();
var _v41 = /* @__PURE__ */ new Vector4();
var _v42 = /* @__PURE__ */ new Vector4();
var Triangle = class _Triangle {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(a2 = new Vector3(), b2 = new Vector3(), c2 = new Vector3()) {
    this.a = a2;
    this.b = b2;
    this.c = c2;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(a2, b2, c2, target) {
    target.subVectors(c2, b2);
    _v0$1.subVectors(a2, b2);
    target.cross(_v0$1);
    const targetLengthSq = target.lengthSq();
    if (targetLengthSq > 0) {
      return target.multiplyScalar(1 / Math.sqrt(targetLengthSq));
    }
    return target.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(point, a2, b2, c2, target) {
    _v0$1.subVectors(c2, a2);
    _v1$3.subVectors(b2, a2);
    _v2$2.subVectors(point, a2);
    const dot00 = _v0$1.dot(_v0$1);
    const dot01 = _v0$1.dot(_v1$3);
    const dot02 = _v0$1.dot(_v2$2);
    const dot11 = _v1$3.dot(_v1$3);
    const dot12 = _v1$3.dot(_v2$2);
    const denom = dot00 * dot11 - dot01 * dot01;
    if (denom === 0) {
      target.set(0, 0, 0);
      return null;
    }
    const invDenom = 1 / denom;
    const u3 = (dot11 * dot02 - dot01 * dot12) * invDenom;
    const v2 = (dot00 * dot12 - dot01 * dot02) * invDenom;
    return target.set(1 - u3 - v2, v2, u3);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(point, a2, b2, c2) {
    if (this.getBarycoord(point, a2, b2, c2, _v3$2) === null) {
      return false;
    }
    return _v3$2.x >= 0 && _v3$2.y >= 0 && _v3$2.x + _v3$2.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(point, p1, p2, p3, v1, v2, v3, target) {
    if (this.getBarycoord(point, p1, p2, p3, _v3$2) === null) {
      target.x = 0;
      target.y = 0;
      if ("z" in target) target.z = 0;
      if ("w" in target) target.w = 0;
      return null;
    }
    target.setScalar(0);
    target.addScaledVector(v1, _v3$2.x);
    target.addScaledVector(v2, _v3$2.y);
    target.addScaledVector(v3, _v3$2.z);
    return target;
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(attr, i1, i2, i3, barycoord, target) {
    _v40.setScalar(0);
    _v41.setScalar(0);
    _v42.setScalar(0);
    _v40.fromBufferAttribute(attr, i1);
    _v41.fromBufferAttribute(attr, i2);
    _v42.fromBufferAttribute(attr, i3);
    target.setScalar(0);
    target.addScaledVector(_v40, barycoord.x);
    target.addScaledVector(_v41, barycoord.y);
    target.addScaledVector(_v42, barycoord.z);
    return target;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(a2, b2, c2, direction) {
    _v0$1.subVectors(c2, b2);
    _v1$3.subVectors(a2, b2);
    return _v0$1.cross(_v1$3).dot(direction) < 0 ? true : false;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(a2, b2, c2) {
    this.a.copy(a2);
    this.b.copy(b2);
    this.c.copy(c2);
    return this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(points, i0, i1, i2) {
    this.a.copy(points[i0]);
    this.b.copy(points[i1]);
    this.c.copy(points[i2]);
    return this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(attribute, i0, i1, i2) {
    this.a.fromBufferAttribute(attribute, i0);
    this.b.fromBufferAttribute(attribute, i1);
    this.c.fromBufferAttribute(attribute, i2);
    return this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(triangle) {
    this.a.copy(triangle.a);
    this.b.copy(triangle.b);
    this.c.copy(triangle.c);
    return this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    _v0$1.subVectors(this.c, this.b);
    _v1$3.subVectors(this.a, this.b);
    return _v0$1.cross(_v1$3).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(target) {
    return target.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(target) {
    return _Triangle.getNormal(this.a, this.b, this.c, target);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(target) {
    return target.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(point, target) {
    return _Triangle.getBarycoord(point, this.a, this.b, this.c, target);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(point, v1, v2, v3, target) {
    return _Triangle.getInterpolation(point, this.a, this.b, this.c, v1, v2, v3, target);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(point) {
    return _Triangle.containsPoint(point, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(direction) {
    return _Triangle.isFrontFacing(this.a, this.b, this.c, direction);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(box) {
    return box.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(p2, target) {
    const a2 = this.a, b2 = this.b, c2 = this.c;
    let v2, w2;
    _vab.subVectors(b2, a2);
    _vac.subVectors(c2, a2);
    _vap.subVectors(p2, a2);
    const d1 = _vab.dot(_vap);
    const d2 = _vac.dot(_vap);
    if (d1 <= 0 && d2 <= 0) {
      return target.copy(a2);
    }
    _vbp.subVectors(p2, b2);
    const d3 = _vab.dot(_vbp);
    const d4 = _vac.dot(_vbp);
    if (d3 >= 0 && d4 <= d3) {
      return target.copy(b2);
    }
    const vc = d1 * d4 - d3 * d2;
    if (vc <= 0 && d1 >= 0 && d3 <= 0) {
      v2 = d1 / (d1 - d3);
      return target.copy(a2).addScaledVector(_vab, v2);
    }
    _vcp.subVectors(p2, c2);
    const d5 = _vab.dot(_vcp);
    const d6 = _vac.dot(_vcp);
    if (d6 >= 0 && d5 <= d6) {
      return target.copy(c2);
    }
    const vb = d5 * d2 - d1 * d6;
    if (vb <= 0 && d2 >= 0 && d6 <= 0) {
      w2 = d2 / (d2 - d6);
      return target.copy(a2).addScaledVector(_vac, w2);
    }
    const va = d3 * d6 - d5 * d4;
    if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
      _vbc.subVectors(c2, b2);
      w2 = (d4 - d3) / (d4 - d3 + (d5 - d6));
      return target.copy(b2).addScaledVector(_vbc, w2);
    }
    const denom = 1 / (va + vb + vc);
    v2 = vb * denom;
    w2 = vc * denom;
    return target.copy(a2).addScaledVector(_vab, v2).addScaledVector(_vac, w2);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(triangle) {
    return triangle.a.equals(this.a) && triangle.b.equals(this.b) && triangle.c.equals(this.c);
  }
};
var _colorKeywords = {
  "aliceblue": 15792383,
  "antiquewhite": 16444375,
  "aqua": 65535,
  "aquamarine": 8388564,
  "azure": 15794175,
  "beige": 16119260,
  "bisque": 16770244,
  "black": 0,
  "blanchedalmond": 16772045,
  "blue": 255,
  "blueviolet": 9055202,
  "brown": 10824234,
  "burlywood": 14596231,
  "cadetblue": 6266528,
  "chartreuse": 8388352,
  "chocolate": 13789470,
  "coral": 16744272,
  "cornflowerblue": 6591981,
  "cornsilk": 16775388,
  "crimson": 14423100,
  "cyan": 65535,
  "darkblue": 139,
  "darkcyan": 35723,
  "darkgoldenrod": 12092939,
  "darkgray": 11119017,
  "darkgreen": 25600,
  "darkgrey": 11119017,
  "darkkhaki": 12433259,
  "darkmagenta": 9109643,
  "darkolivegreen": 5597999,
  "darkorange": 16747520,
  "darkorchid": 10040012,
  "darkred": 9109504,
  "darksalmon": 15308410,
  "darkseagreen": 9419919,
  "darkslateblue": 4734347,
  "darkslategray": 3100495,
  "darkslategrey": 3100495,
  "darkturquoise": 52945,
  "darkviolet": 9699539,
  "deeppink": 16716947,
  "deepskyblue": 49151,
  "dimgray": 6908265,
  "dimgrey": 6908265,
  "dodgerblue": 2003199,
  "firebrick": 11674146,
  "floralwhite": 16775920,
  "forestgreen": 2263842,
  "fuchsia": 16711935,
  "gainsboro": 14474460,
  "ghostwhite": 16316671,
  "gold": 16766720,
  "goldenrod": 14329120,
  "gray": 8421504,
  "green": 32768,
  "greenyellow": 11403055,
  "grey": 8421504,
  "honeydew": 15794160,
  "hotpink": 16738740,
  "indianred": 13458524,
  "indigo": 4915330,
  "ivory": 16777200,
  "khaki": 15787660,
  "lavender": 15132410,
  "lavenderblush": 16773365,
  "lawngreen": 8190976,
  "lemonchiffon": 16775885,
  "lightblue": 11393254,
  "lightcoral": 15761536,
  "lightcyan": 14745599,
  "lightgoldenrodyellow": 16448210,
  "lightgray": 13882323,
  "lightgreen": 9498256,
  "lightgrey": 13882323,
  "lightpink": 16758465,
  "lightsalmon": 16752762,
  "lightseagreen": 2142890,
  "lightskyblue": 8900346,
  "lightslategray": 7833753,
  "lightslategrey": 7833753,
  "lightsteelblue": 11584734,
  "lightyellow": 16777184,
  "lime": 65280,
  "limegreen": 3329330,
  "linen": 16445670,
  "magenta": 16711935,
  "maroon": 8388608,
  "mediumaquamarine": 6737322,
  "mediumblue": 205,
  "mediumorchid": 12211667,
  "mediumpurple": 9662683,
  "mediumseagreen": 3978097,
  "mediumslateblue": 8087790,
  "mediumspringgreen": 64154,
  "mediumturquoise": 4772300,
  "mediumvioletred": 13047173,
  "midnightblue": 1644912,
  "mintcream": 16121850,
  "mistyrose": 16770273,
  "moccasin": 16770229,
  "navajowhite": 16768685,
  "navy": 128,
  "oldlace": 16643558,
  "olive": 8421376,
  "olivedrab": 7048739,
  "orange": 16753920,
  "orangered": 16729344,
  "orchid": 14315734,
  "palegoldenrod": 15657130,
  "palegreen": 10025880,
  "paleturquoise": 11529966,
  "palevioletred": 14381203,
  "papayawhip": 16773077,
  "peachpuff": 16767673,
  "peru": 13468991,
  "pink": 16761035,
  "plum": 14524637,
  "powderblue": 11591910,
  "purple": 8388736,
  "rebeccapurple": 6697881,
  "red": 16711680,
  "rosybrown": 12357519,
  "royalblue": 4286945,
  "saddlebrown": 9127187,
  "salmon": 16416882,
  "sandybrown": 16032864,
  "seagreen": 3050327,
  "seashell": 16774638,
  "sienna": 10506797,
  "silver": 12632256,
  "skyblue": 8900331,
  "slateblue": 6970061,
  "slategray": 7372944,
  "slategrey": 7372944,
  "snow": 16775930,
  "springgreen": 65407,
  "steelblue": 4620980,
  "tan": 13808780,
  "teal": 32896,
  "thistle": 14204888,
  "tomato": 16737095,
  "turquoise": 4251856,
  "violet": 15631086,
  "wheat": 16113331,
  "white": 16777215,
  "whitesmoke": 16119285,
  "yellow": 16776960,
  "yellowgreen": 10145074
};
var _hslA = { h: 0, s: 0, l: 0 };
var _hslB = { h: 0, s: 0, l: 0 };
function hue2rgb(p2, q2, t2) {
  if (t2 < 0) t2 += 1;
  if (t2 > 1) t2 -= 1;
  if (t2 < 1 / 6) return p2 + (q2 - p2) * 6 * t2;
  if (t2 < 1 / 2) return q2;
  if (t2 < 2 / 3) return p2 + (q2 - p2) * 6 * (2 / 3 - t2);
  return p2;
}
var Color = class {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(r2, g2, b2) {
    this.isColor = true;
    this.r = 1;
    this.g = 1;
    this.b = 1;
    return this.set(r2, g2, b2);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(r2, g2, b2) {
    if (g2 === void 0 && b2 === void 0) {
      const value = r2;
      if (value && value.isColor) {
        this.copy(value);
      } else if (typeof value === "number") {
        this.setHex(value);
      } else if (typeof value === "string") {
        this.setStyle(value);
      }
    } else {
      this.setRGB(r2, g2, b2);
    }
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(scalar) {
    this.r = scalar;
    this.g = scalar;
    this.b = scalar;
    return this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(hex, colorSpace = SRGBColorSpace) {
    hex = Math.floor(hex);
    this.r = (hex >> 16 & 255) / 255;
    this.g = (hex >> 8 & 255) / 255;
    this.b = (hex & 255) / 255;
    ColorManagement.colorSpaceToWorking(this, colorSpace);
    return this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(r2, g2, b2, colorSpace = ColorManagement.workingColorSpace) {
    this.r = r2;
    this.g = g2;
    this.b = b2;
    ColorManagement.colorSpaceToWorking(this, colorSpace);
    return this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(h2, s2, l2, colorSpace = ColorManagement.workingColorSpace) {
    h2 = euclideanModulo(h2, 1);
    s2 = clamp(s2, 0, 1);
    l2 = clamp(l2, 0, 1);
    if (s2 === 0) {
      this.r = this.g = this.b = l2;
    } else {
      const p2 = l2 <= 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
      const q2 = 2 * l2 - p2;
      this.r = hue2rgb(q2, p2, h2 + 1 / 3);
      this.g = hue2rgb(q2, p2, h2);
      this.b = hue2rgb(q2, p2, h2 - 1 / 3);
    }
    ColorManagement.colorSpaceToWorking(this, colorSpace);
    return this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name](https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart) -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(style, colorSpace = SRGBColorSpace) {
    function handleAlpha(string) {
      if (string === void 0) return;
      if (parseFloat(string) < 1) {
        warn("Color: Alpha component of " + style + " will be ignored.");
      }
    }
    let m2;
    if (m2 = /^(\w+)\(([^\)]*)\)/.exec(style)) {
      let color;
      const name = m2[1];
      const components = m2[2];
      switch (name) {
        case "rgb":
        case "rgba":
          if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            handleAlpha(color[4]);
            return this.setRGB(
              Math.min(255, parseInt(color[1], 10)) / 255,
              Math.min(255, parseInt(color[2], 10)) / 255,
              Math.min(255, parseInt(color[3], 10)) / 255,
              colorSpace
            );
          }
          if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            handleAlpha(color[4]);
            return this.setRGB(
              Math.min(100, parseInt(color[1], 10)) / 100,
              Math.min(100, parseInt(color[2], 10)) / 100,
              Math.min(100, parseInt(color[3], 10)) / 100,
              colorSpace
            );
          }
          break;
        case "hsl":
        case "hsla":
          if (color = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            handleAlpha(color[4]);
            return this.setHSL(
              parseFloat(color[1]) / 360,
              parseFloat(color[2]) / 100,
              parseFloat(color[3]) / 100,
              colorSpace
            );
          }
          break;
        default:
          warn("Color: Unknown color model " + style);
      }
    } else if (m2 = /^\#([A-Fa-f\d]+)$/.exec(style)) {
      const hex = m2[1];
      const size = hex.length;
      if (size === 3) {
        return this.setRGB(
          parseInt(hex.charAt(0), 16) / 15,
          parseInt(hex.charAt(1), 16) / 15,
          parseInt(hex.charAt(2), 16) / 15,
          colorSpace
        );
      } else if (size === 6) {
        return this.setHex(parseInt(hex, 16), colorSpace);
      } else {
        warn("Color: Invalid hex color " + style);
      }
    } else if (style && style.length > 0) {
      return this.setColorName(style, colorSpace);
    }
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(style, colorSpace = SRGBColorSpace) {
    const hex = _colorKeywords[style.toLowerCase()];
    if (hex !== void 0) {
      this.setHex(hex, colorSpace);
    } else {
      warn("Color: Unknown color " + style);
    }
    return this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(color) {
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    return this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(color) {
    this.r = SRGBToLinear(color.r);
    this.g = SRGBToLinear(color.g);
    this.b = SRGBToLinear(color.b);
    return this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(color) {
    this.r = LinearToSRGB(color.r);
    this.g = LinearToSRGB(color.g);
    this.b = LinearToSRGB(color.b);
    return this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    this.copySRGBToLinear(this);
    return this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    this.copyLinearToSRGB(this);
    return this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(colorSpace = SRGBColorSpace) {
    ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
    return Math.round(clamp(_color.r * 255, 0, 255)) * 65536 + Math.round(clamp(_color.g * 255, 0, 255)) * 256 + Math.round(clamp(_color.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(colorSpace = SRGBColorSpace) {
    return ("000000" + this.getHex(colorSpace).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(target, colorSpace = ColorManagement.workingColorSpace) {
    ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
    const r2 = _color.r, g2 = _color.g, b2 = _color.b;
    const max = Math.max(r2, g2, b2);
    const min = Math.min(r2, g2, b2);
    let hue, saturation;
    const lightness = (min + max) / 2;
    if (min === max) {
      hue = 0;
      saturation = 0;
    } else {
      const delta = max - min;
      saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
      switch (max) {
        case r2:
          hue = (g2 - b2) / delta + (g2 < b2 ? 6 : 0);
          break;
        case g2:
          hue = (b2 - r2) / delta + 2;
          break;
        case b2:
          hue = (r2 - g2) / delta + 4;
          break;
      }
      hue /= 6;
    }
    target.h = hue;
    target.s = saturation;
    target.l = lightness;
    return target;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(target, colorSpace = ColorManagement.workingColorSpace) {
    ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
    target.r = _color.r;
    target.g = _color.g;
    target.b = _color.b;
    return target;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(colorSpace = SRGBColorSpace) {
    ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
    const r2 = _color.r, g2 = _color.g, b2 = _color.b;
    if (colorSpace !== SRGBColorSpace) {
      return `color(${colorSpace} ${r2.toFixed(3)} ${g2.toFixed(3)} ${b2.toFixed(3)})`;
    }
    return `rgb(${Math.round(r2 * 255)},${Math.round(g2 * 255)},${Math.round(b2 * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(h2, s2, l2) {
    this.getHSL(_hslA);
    return this.setHSL(_hslA.h + h2, _hslA.s + s2, _hslA.l + l2);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(color) {
    this.r += color.r;
    this.g += color.g;
    this.b += color.b;
    return this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(color1, color2) {
    this.r = color1.r + color2.r;
    this.g = color1.g + color2.g;
    this.b = color1.b + color2.b;
    return this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(s2) {
    this.r += s2;
    this.g += s2;
    this.b += s2;
    return this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(color) {
    this.r = Math.max(0, this.r - color.r);
    this.g = Math.max(0, this.g - color.g);
    this.b = Math.max(0, this.b - color.b);
    return this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(color) {
    this.r *= color.r;
    this.g *= color.g;
    this.b *= color.b;
    return this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(s2) {
    this.r *= s2;
    this.g *= s2;
    this.b *= s2;
    return this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(color, alpha) {
    this.r += (color.r - this.r) * alpha;
    this.g += (color.g - this.g) * alpha;
    this.b += (color.b - this.b) * alpha;
    return this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(color1, color2, alpha) {
    this.r = color1.r + (color2.r - color1.r) * alpha;
    this.g = color1.g + (color2.g - color1.g) * alpha;
    this.b = color1.b + (color2.b - color1.b) * alpha;
    return this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(color, alpha) {
    this.getHSL(_hslA);
    color.getHSL(_hslB);
    const h2 = lerp(_hslA.h, _hslB.h, alpha);
    const s2 = lerp(_hslA.s, _hslB.s, alpha);
    const l2 = lerp(_hslA.l, _hslB.l, alpha);
    this.setHSL(h2, s2, l2);
    return this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(v2) {
    this.r = v2.x;
    this.g = v2.y;
    this.b = v2.z;
    return this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(m2) {
    const r2 = this.r, g2 = this.g, b2 = this.b;
    const e2 = m2.elements;
    this.r = e2[0] * r2 + e2[3] * g2 + e2[6] * b2;
    this.g = e2[1] * r2 + e2[4] * g2 + e2[7] * b2;
    this.b = e2[2] * r2 + e2[5] * g2 + e2[8] * b2;
    return this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(c2) {
    return c2.r === this.r && c2.g === this.g && c2.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(array, offset = 0) {
    this.r = array[offset];
    this.g = array[offset + 1];
    this.b = array[offset + 2];
    return this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(array = [], offset = 0) {
    array[offset] = this.r;
    array[offset + 1] = this.g;
    array[offset + 2] = this.b;
    return array;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(attribute, index) {
    this.r = attribute.getX(index);
    this.g = attribute.getY(index);
    this.b = attribute.getZ(index);
    return this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r;
    yield this.g;
    yield this.b;
  }
};
var _color = /* @__PURE__ */ new Color();
Color.NAMES = _colorKeywords;
var _materialId = 0;
var Material = class extends EventDispatcher {
  /**
   * Constructs a new material.
   */
  constructor() {
    super();
    this.isMaterial = true;
    Object.defineProperty(this, "id", { value: _materialId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "Material";
    this.blending = NormalBlending;
    this.side = FrontSide;
    this.vertexColors = false;
    this.opacity = 1;
    this.transparent = false;
    this.alphaHash = false;
    this.blendSrc = SrcAlphaFactor;
    this.blendDst = OneMinusSrcAlphaFactor;
    this.blendEquation = AddEquation;
    this.blendSrcAlpha = null;
    this.blendDstAlpha = null;
    this.blendEquationAlpha = null;
    this.blendColor = new Color(0, 0, 0);
    this.blendAlpha = 0;
    this.depthFunc = LessEqualDepth;
    this.depthTest = true;
    this.depthWrite = true;
    this.stencilWriteMask = 255;
    this.stencilFunc = AlwaysStencilFunc;
    this.stencilRef = 0;
    this.stencilFuncMask = 255;
    this.stencilFail = KeepStencilOp;
    this.stencilZFail = KeepStencilOp;
    this.stencilZPass = KeepStencilOp;
    this.stencilWrite = false;
    this.clippingPlanes = null;
    this.clipIntersection = false;
    this.clipShadows = false;
    this.shadowSide = null;
    this.colorWrite = true;
    this.precision = null;
    this.polygonOffset = false;
    this.polygonOffsetFactor = 0;
    this.polygonOffsetUnits = 0;
    this.dithering = false;
    this.alphaToCoverage = false;
    this.premultipliedAlpha = false;
    this.forceSinglePass = false;
    this.allowOverride = true;
    this.visible = true;
    this.toneMapped = true;
    this.userData = {};
    this.version = 0;
    this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(value) {
    if (this._alphaTest > 0 !== value > 0) {
      this.version++;
    }
    this._alphaTest = value;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language).
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  /**
   * This method can be used to set default values from parameter objects.
   * It is a generic implementation so it can be used with different types
   * of materials.
   *
   * @param {Object} [values] - The material values to set.
   */
  setValues(values) {
    if (values === void 0) return;
    for (const key in values) {
      const newValue = values[key];
      if (newValue === void 0) {
        warn(`Material: parameter '${key}' has value of undefined.`);
        continue;
      }
      const currentValue = this[key];
      if (currentValue === void 0) {
        warn(`Material: '${key}' is not a property of THREE.${this.type}.`);
        continue;
      }
      if (currentValue && currentValue.isColor) {
        currentValue.set(newValue);
      } else if (currentValue && currentValue.isVector3 && (newValue && newValue.isVector3)) {
        currentValue.copy(newValue);
      } else {
        this[key] = newValue;
      }
    }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (isRootObject) {
      meta = {
        textures: {},
        images: {}
      };
    }
    const data = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    data.uuid = this.uuid;
    data.type = this.type;
    if (this.name !== "") data.name = this.name;
    if (this.color && this.color.isColor) data.color = this.color.getHex();
    if (this.roughness !== void 0) data.roughness = this.roughness;
    if (this.metalness !== void 0) data.metalness = this.metalness;
    if (this.sheen !== void 0) data.sheen = this.sheen;
    if (this.sheenColor && this.sheenColor.isColor) data.sheenColor = this.sheenColor.getHex();
    if (this.sheenRoughness !== void 0) data.sheenRoughness = this.sheenRoughness;
    if (this.emissive && this.emissive.isColor) data.emissive = this.emissive.getHex();
    if (this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1) data.emissiveIntensity = this.emissiveIntensity;
    if (this.specular && this.specular.isColor) data.specular = this.specular.getHex();
    if (this.specularIntensity !== void 0) data.specularIntensity = this.specularIntensity;
    if (this.specularColor && this.specularColor.isColor) data.specularColor = this.specularColor.getHex();
    if (this.shininess !== void 0) data.shininess = this.shininess;
    if (this.clearcoat !== void 0) data.clearcoat = this.clearcoat;
    if (this.clearcoatRoughness !== void 0) data.clearcoatRoughness = this.clearcoatRoughness;
    if (this.clearcoatMap && this.clearcoatMap.isTexture) {
      data.clearcoatMap = this.clearcoatMap.toJSON(meta).uuid;
    }
    if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
      data.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(meta).uuid;
    }
    if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
      data.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(meta).uuid;
      data.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
    }
    if (this.sheenColorMap && this.sheenColorMap.isTexture) {
      data.sheenColorMap = this.sheenColorMap.toJSON(meta).uuid;
    }
    if (this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture) {
      data.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(meta).uuid;
    }
    if (this.dispersion !== void 0) data.dispersion = this.dispersion;
    if (this.iridescence !== void 0) data.iridescence = this.iridescence;
    if (this.iridescenceIOR !== void 0) data.iridescenceIOR = this.iridescenceIOR;
    if (this.iridescenceThicknessRange !== void 0) data.iridescenceThicknessRange = this.iridescenceThicknessRange;
    if (this.iridescenceMap && this.iridescenceMap.isTexture) {
      data.iridescenceMap = this.iridescenceMap.toJSON(meta).uuid;
    }
    if (this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture) {
      data.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(meta).uuid;
    }
    if (this.anisotropy !== void 0) data.anisotropy = this.anisotropy;
    if (this.anisotropyRotation !== void 0) data.anisotropyRotation = this.anisotropyRotation;
    if (this.anisotropyMap && this.anisotropyMap.isTexture) {
      data.anisotropyMap = this.anisotropyMap.toJSON(meta).uuid;
    }
    if (this.map && this.map.isTexture) data.map = this.map.toJSON(meta).uuid;
    if (this.matcap && this.matcap.isTexture) data.matcap = this.matcap.toJSON(meta).uuid;
    if (this.alphaMap && this.alphaMap.isTexture) data.alphaMap = this.alphaMap.toJSON(meta).uuid;
    if (this.lightMap && this.lightMap.isTexture) {
      data.lightMap = this.lightMap.toJSON(meta).uuid;
      data.lightMapIntensity = this.lightMapIntensity;
    }
    if (this.aoMap && this.aoMap.isTexture) {
      data.aoMap = this.aoMap.toJSON(meta).uuid;
      data.aoMapIntensity = this.aoMapIntensity;
    }
    if (this.bumpMap && this.bumpMap.isTexture) {
      data.bumpMap = this.bumpMap.toJSON(meta).uuid;
      data.bumpScale = this.bumpScale;
    }
    if (this.normalMap && this.normalMap.isTexture) {
      data.normalMap = this.normalMap.toJSON(meta).uuid;
      data.normalMapType = this.normalMapType;
      data.normalScale = this.normalScale.toArray();
    }
    if (this.displacementMap && this.displacementMap.isTexture) {
      data.displacementMap = this.displacementMap.toJSON(meta).uuid;
      data.displacementScale = this.displacementScale;
      data.displacementBias = this.displacementBias;
    }
    if (this.roughnessMap && this.roughnessMap.isTexture) data.roughnessMap = this.roughnessMap.toJSON(meta).uuid;
    if (this.metalnessMap && this.metalnessMap.isTexture) data.metalnessMap = this.metalnessMap.toJSON(meta).uuid;
    if (this.emissiveMap && this.emissiveMap.isTexture) data.emissiveMap = this.emissiveMap.toJSON(meta).uuid;
    if (this.specularMap && this.specularMap.isTexture) data.specularMap = this.specularMap.toJSON(meta).uuid;
    if (this.specularIntensityMap && this.specularIntensityMap.isTexture) data.specularIntensityMap = this.specularIntensityMap.toJSON(meta).uuid;
    if (this.specularColorMap && this.specularColorMap.isTexture) data.specularColorMap = this.specularColorMap.toJSON(meta).uuid;
    if (this.envMap && this.envMap.isTexture) {
      data.envMap = this.envMap.toJSON(meta).uuid;
      if (this.combine !== void 0) data.combine = this.combine;
    }
    if (this.envMapRotation !== void 0) data.envMapRotation = this.envMapRotation.toArray();
    if (this.envMapIntensity !== void 0) data.envMapIntensity = this.envMapIntensity;
    if (this.reflectivity !== void 0) data.reflectivity = this.reflectivity;
    if (this.refractionRatio !== void 0) data.refractionRatio = this.refractionRatio;
    if (this.gradientMap && this.gradientMap.isTexture) {
      data.gradientMap = this.gradientMap.toJSON(meta).uuid;
    }
    if (this.transmission !== void 0) data.transmission = this.transmission;
    if (this.transmissionMap && this.transmissionMap.isTexture) data.transmissionMap = this.transmissionMap.toJSON(meta).uuid;
    if (this.thickness !== void 0) data.thickness = this.thickness;
    if (this.thicknessMap && this.thicknessMap.isTexture) data.thicknessMap = this.thicknessMap.toJSON(meta).uuid;
    if (this.attenuationDistance !== void 0 && this.attenuationDistance !== Infinity) data.attenuationDistance = this.attenuationDistance;
    if (this.attenuationColor !== void 0) data.attenuationColor = this.attenuationColor.getHex();
    if (this.size !== void 0) data.size = this.size;
    if (this.shadowSide !== null) data.shadowSide = this.shadowSide;
    if (this.sizeAttenuation !== void 0) data.sizeAttenuation = this.sizeAttenuation;
    if (this.blending !== NormalBlending) data.blending = this.blending;
    if (this.side !== FrontSide) data.side = this.side;
    if (this.vertexColors === true) data.vertexColors = true;
    if (this.opacity < 1) data.opacity = this.opacity;
    if (this.transparent === true) data.transparent = true;
    if (this.blendSrc !== SrcAlphaFactor) data.blendSrc = this.blendSrc;
    if (this.blendDst !== OneMinusSrcAlphaFactor) data.blendDst = this.blendDst;
    if (this.blendEquation !== AddEquation) data.blendEquation = this.blendEquation;
    if (this.blendSrcAlpha !== null) data.blendSrcAlpha = this.blendSrcAlpha;
    if (this.blendDstAlpha !== null) data.blendDstAlpha = this.blendDstAlpha;
    if (this.blendEquationAlpha !== null) data.blendEquationAlpha = this.blendEquationAlpha;
    if (this.blendColor && this.blendColor.isColor) data.blendColor = this.blendColor.getHex();
    if (this.blendAlpha !== 0) data.blendAlpha = this.blendAlpha;
    if (this.depthFunc !== LessEqualDepth) data.depthFunc = this.depthFunc;
    if (this.depthTest === false) data.depthTest = this.depthTest;
    if (this.depthWrite === false) data.depthWrite = this.depthWrite;
    if (this.colorWrite === false) data.colorWrite = this.colorWrite;
    if (this.stencilWriteMask !== 255) data.stencilWriteMask = this.stencilWriteMask;
    if (this.stencilFunc !== AlwaysStencilFunc) data.stencilFunc = this.stencilFunc;
    if (this.stencilRef !== 0) data.stencilRef = this.stencilRef;
    if (this.stencilFuncMask !== 255) data.stencilFuncMask = this.stencilFuncMask;
    if (this.stencilFail !== KeepStencilOp) data.stencilFail = this.stencilFail;
    if (this.stencilZFail !== KeepStencilOp) data.stencilZFail = this.stencilZFail;
    if (this.stencilZPass !== KeepStencilOp) data.stencilZPass = this.stencilZPass;
    if (this.stencilWrite === true) data.stencilWrite = this.stencilWrite;
    if (this.rotation !== void 0 && this.rotation !== 0) data.rotation = this.rotation;
    if (this.polygonOffset === true) data.polygonOffset = true;
    if (this.polygonOffsetFactor !== 0) data.polygonOffsetFactor = this.polygonOffsetFactor;
    if (this.polygonOffsetUnits !== 0) data.polygonOffsetUnits = this.polygonOffsetUnits;
    if (this.linewidth !== void 0 && this.linewidth !== 1) data.linewidth = this.linewidth;
    if (this.dashSize !== void 0) data.dashSize = this.dashSize;
    if (this.gapSize !== void 0) data.gapSize = this.gapSize;
    if (this.scale !== void 0) data.scale = this.scale;
    if (this.dithering === true) data.dithering = true;
    if (this.alphaTest > 0) data.alphaTest = this.alphaTest;
    if (this.alphaHash === true) data.alphaHash = true;
    if (this.alphaToCoverage === true) data.alphaToCoverage = true;
    if (this.premultipliedAlpha === true) data.premultipliedAlpha = true;
    if (this.forceSinglePass === true) data.forceSinglePass = true;
    if (this.wireframe === true) data.wireframe = true;
    if (this.wireframeLinewidth > 1) data.wireframeLinewidth = this.wireframeLinewidth;
    if (this.wireframeLinecap !== "round") data.wireframeLinecap = this.wireframeLinecap;
    if (this.wireframeLinejoin !== "round") data.wireframeLinejoin = this.wireframeLinejoin;
    if (this.flatShading === true) data.flatShading = true;
    if (this.visible === false) data.visible = false;
    if (this.toneMapped === false) data.toneMapped = false;
    if (this.fog === false) data.fog = false;
    if (Object.keys(this.userData).length > 0) data.userData = this.userData;
    function extractFromCache(cache) {
      const values = [];
      for (const key in cache) {
        const data2 = cache[key];
        delete data2.metadata;
        values.push(data2);
      }
      return values;
    }
    if (isRootObject) {
      const textures = extractFromCache(meta.textures);
      const images = extractFromCache(meta.images);
      if (textures.length > 0) data.textures = textures;
      if (images.length > 0) data.images = images;
    }
    return data;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(source) {
    this.name = source.name;
    this.blending = source.blending;
    this.side = source.side;
    this.vertexColors = source.vertexColors;
    this.opacity = source.opacity;
    this.transparent = source.transparent;
    this.blendSrc = source.blendSrc;
    this.blendDst = source.blendDst;
    this.blendEquation = source.blendEquation;
    this.blendSrcAlpha = source.blendSrcAlpha;
    this.blendDstAlpha = source.blendDstAlpha;
    this.blendEquationAlpha = source.blendEquationAlpha;
    this.blendColor.copy(source.blendColor);
    this.blendAlpha = source.blendAlpha;
    this.depthFunc = source.depthFunc;
    this.depthTest = source.depthTest;
    this.depthWrite = source.depthWrite;
    this.stencilWriteMask = source.stencilWriteMask;
    this.stencilFunc = source.stencilFunc;
    this.stencilRef = source.stencilRef;
    this.stencilFuncMask = source.stencilFuncMask;
    this.stencilFail = source.stencilFail;
    this.stencilZFail = source.stencilZFail;
    this.stencilZPass = source.stencilZPass;
    this.stencilWrite = source.stencilWrite;
    const srcPlanes = source.clippingPlanes;
    let dstPlanes = null;
    if (srcPlanes !== null) {
      const n2 = srcPlanes.length;
      dstPlanes = new Array(n2);
      for (let i2 = 0; i2 !== n2; ++i2) {
        dstPlanes[i2] = srcPlanes[i2].clone();
      }
    }
    this.clippingPlanes = dstPlanes;
    this.clipIntersection = source.clipIntersection;
    this.clipShadows = source.clipShadows;
    this.shadowSide = source.shadowSide;
    this.colorWrite = source.colorWrite;
    this.precision = source.precision;
    this.polygonOffset = source.polygonOffset;
    this.polygonOffsetFactor = source.polygonOffsetFactor;
    this.polygonOffsetUnits = source.polygonOffsetUnits;
    this.dithering = source.dithering;
    this.alphaTest = source.alphaTest;
    this.alphaHash = source.alphaHash;
    this.alphaToCoverage = source.alphaToCoverage;
    this.premultipliedAlpha = source.premultipliedAlpha;
    this.forceSinglePass = source.forceSinglePass;
    this.visible = source.visible;
    this.toneMapped = source.toneMapped;
    this.userData = JSON.parse(JSON.stringify(source.userData));
    return this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(value) {
    if (value === true) this.version++;
  }
};
var MeshBasicMaterial = class extends Material {
  /**
   * Constructs a new mesh basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(parameters) {
    super();
    this.isMeshBasicMaterial = true;
    this.type = "MeshBasicMaterial";
    this.color = new Color(16777215);
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapRotation = new Euler();
    this.combine = MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.specularMap = source.specularMap;
    this.alphaMap = source.alphaMap;
    this.envMap = source.envMap;
    this.envMapRotation.copy(source.envMapRotation);
    this.combine = source.combine;
    this.reflectivity = source.reflectivity;
    this.refractionRatio = source.refractionRatio;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    this.fog = source.fog;
    return this;
  }
};
var _vector$9 = /* @__PURE__ */ new Vector3();
var _vector2$1 = /* @__PURE__ */ new Vector2();
var _id$2 = 0;
var BufferAttribute = class {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(array, itemSize, normalized = false) {
    if (Array.isArray(array)) {
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    }
    this.isBufferAttribute = true;
    Object.defineProperty(this, "id", { value: _id$2++ });
    this.name = "";
    this.array = array;
    this.itemSize = itemSize;
    this.count = array !== void 0 ? array.length / itemSize : 0;
    this.normalized = normalized;
    this.usage = StaticDrawUsage;
    this.updateRanges = [];
    this.gpuType = FloatType;
    this.version = 0;
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute
   * array data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(value) {
    if (value === true) this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(value) {
    this.usage = value;
    return this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(start, count) {
    this.updateRanges.push({ start, count });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given buffer attribute to this instance.
   *
   * @param {BufferAttribute} source - The buffer attribute to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copy(source) {
    this.name = source.name;
    this.array = new source.array.constructor(source.array);
    this.itemSize = source.itemSize;
    this.count = source.count;
    this.normalized = source.normalized;
    this.usage = source.usage;
    this.gpuType = source.gpuType;
    return this;
  }
  /**
   * Copies a vector from the given buffer attribute to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this buffer attribute.
   * @param {BufferAttribute} attribute - The buffer attribute to copy from.
   * @param {number} index2 - The source index into the given buffer attribute.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyAt(index1, attribute, index2) {
    index1 *= this.itemSize;
    index2 *= attribute.itemSize;
    for (let i2 = 0, l2 = this.itemSize; i2 < l2; i2++) {
      this.array[index1 + i2] = attribute.array[index2 + i2];
    }
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(array) {
    this.array.set(array);
    return this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(m2) {
    if (this.itemSize === 2) {
      for (let i2 = 0, l2 = this.count; i2 < l2; i2++) {
        _vector2$1.fromBufferAttribute(this, i2);
        _vector2$1.applyMatrix3(m2);
        this.setXY(i2, _vector2$1.x, _vector2$1.y);
      }
    } else if (this.itemSize === 3) {
      for (let i2 = 0, l2 = this.count; i2 < l2; i2++) {
        _vector$9.fromBufferAttribute(this, i2);
        _vector$9.applyMatrix3(m2);
        this.setXYZ(i2, _vector$9.x, _vector$9.y, _vector$9.z);
      }
    }
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(m2) {
    for (let i2 = 0, l2 = this.count; i2 < l2; i2++) {
      _vector$9.fromBufferAttribute(this, i2);
      _vector$9.applyMatrix4(m2);
      this.setXYZ(i2, _vector$9.x, _vector$9.y, _vector$9.z);
    }
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(m2) {
    for (let i2 = 0, l2 = this.count; i2 < l2; i2++) {
      _vector$9.fromBufferAttribute(this, i2);
      _vector$9.applyNormalMatrix(m2);
      this.setXYZ(i2, _vector$9.x, _vector$9.y, _vector$9.z);
    }
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(m2) {
    for (let i2 = 0, l2 = this.count; i2 < l2; i2++) {
      _vector$9.fromBufferAttribute(this, i2);
      _vector$9.transformDirection(m2);
      this.setXYZ(i2, _vector$9.x, _vector$9.y, _vector$9.z);
    }
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(value, offset = 0) {
    this.array.set(value, offset);
    return this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(index, component) {
    let value = this.array[index * this.itemSize + component];
    if (this.normalized) value = denormalize(value, this.array);
    return value;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(index, component, value) {
    if (this.normalized) value = normalize(value, this.array);
    this.array[index * this.itemSize + component] = value;
    return this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(index) {
    let x2 = this.array[index * this.itemSize];
    if (this.normalized) x2 = denormalize(x2, this.array);
    return x2;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(index, x2) {
    if (this.normalized) x2 = normalize(x2, this.array);
    this.array[index * this.itemSize] = x2;
    return this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(index) {
    let y2 = this.array[index * this.itemSize + 1];
    if (this.normalized) y2 = denormalize(y2, this.array);
    return y2;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(index, y2) {
    if (this.normalized) y2 = normalize(y2, this.array);
    this.array[index * this.itemSize + 1] = y2;
    return this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(index) {
    let z2 = this.array[index * this.itemSize + 2];
    if (this.normalized) z2 = denormalize(z2, this.array);
    return z2;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(index, z2) {
    if (this.normalized) z2 = normalize(z2, this.array);
    this.array[index * this.itemSize + 2] = z2;
    return this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(index) {
    let w2 = this.array[index * this.itemSize + 3];
    if (this.normalized) w2 = denormalize(w2, this.array);
    return w2;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(index, w2) {
    if (this.normalized) w2 = normalize(w2, this.array);
    this.array[index * this.itemSize + 3] = w2;
    return this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(index, x2, y2) {
    index *= this.itemSize;
    if (this.normalized) {
      x2 = normalize(x2, this.array);
      y2 = normalize(y2, this.array);
    }
    this.array[index + 0] = x2;
    this.array[index + 1] = y2;
    return this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZ(index, x2, y2, z2) {
    index *= this.itemSize;
    if (this.normalized) {
      x2 = normalize(x2, this.array);
      y2 = normalize(y2, this.array);
      z2 = normalize(z2, this.array);
    }
    this.array[index + 0] = x2;
    this.array[index + 1] = y2;
    this.array[index + 2] = z2;
    return this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZW(index, x2, y2, z2, w2) {
    index *= this.itemSize;
    if (this.normalized) {
      x2 = normalize(x2, this.array);
      y2 = normalize(y2, this.array);
      z2 = normalize(z2, this.array);
      w2 = normalize(w2, this.array);
    }
    this.array[index + 0] = x2;
    this.array[index + 1] = y2;
    this.array[index + 2] = z2;
    this.array[index + 3] = w2;
    return this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(callback) {
    this.onUploadCallback = callback;
    return this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * @return {BufferAttribute} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON() {
    const data = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    if (this.name !== "") data.name = this.name;
    if (this.usage !== StaticDrawUsage) data.usage = this.usage;
    return data;
  }
};
var Uint16BufferAttribute = class extends BufferAttribute {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(array, itemSize, normalized) {
    super(new Uint16Array(array), itemSize, normalized);
  }
};
var Uint32BufferAttribute = class extends BufferAttribute {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(array, itemSize, normalized) {
    super(new Uint32Array(array), itemSize, normalized);
  }
};
var Float32BufferAttribute = class extends BufferAttribute {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(array, itemSize, normalized) {
    super(new Float32Array(array), itemSize, normalized);
  }
};
var _id$1 = 0;
var _m1 = /* @__PURE__ */ new Matrix4();
var _obj = /* @__PURE__ */ new Object3D();
var _offset = /* @__PURE__ */ new Vector3();
var _box$2 = /* @__PURE__ */ new Box3();
var _boxMorphTargets = /* @__PURE__ */ new Box3();
var _vector$8 = /* @__PURE__ */ new Vector3();
var BufferGeometry = class _BufferGeometry extends EventDispatcher {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super();
    this.isBufferGeometry = true;
    Object.defineProperty(this, "id", { value: _id$1++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.indirect = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.morphTargetsRelative = false;
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.drawRange = { start: 0, count: Infinity };
    this.userData = {};
  }
  /**
   * Returns the index of this geometry.
   *
   * @return {?BufferAttribute} The index. Returns `null` if no index is defined.
   */
  getIndex() {
    return this.index;
  }
  /**
   * Sets the given index to this geometry.
   *
   * @param {Array<number>|BufferAttribute} index - The index to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndex(index) {
    if (Array.isArray(index)) {
      this.index = new (arrayNeedsUint32(index) ? Uint32BufferAttribute : Uint16BufferAttribute)(index, 1);
    } else {
      this.index = index;
    }
    return this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(indirect) {
    this.indirect = indirect;
    return this;
  }
  /**
   * Returns the indirect attribute of this geometry.
   *
   * @return {?BufferAttribute} The indirect attribute. Returns `null` if no indirect attribute is defined.
   */
  getIndirect() {
    return this.indirect;
  }
  /**
   * Returns the buffer attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {BufferAttribute|InterleavedBufferAttribute|undefined} The buffer attribute.
   * Returns `undefined` if not attribute has been found.
   */
  getAttribute(name) {
    return this.attributes[name];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(name, attribute) {
    this.attributes[name] = attribute;
    return this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(name) {
    delete this.attributes[name];
    return this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(name) {
    return this.attributes[name] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(start, count, materialIndex = 0) {
    this.groups.push({
      start,
      count,
      materialIndex
    });
  }
  /**
   * Clears all groups.
   */
  clearGroups() {
    this.groups = [];
  }
  /**
   * Sets the draw range for this geometry.
   *
   * @param {number} start - The first vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - For non-indexed BufferGeometry, `count` is the number of vertices to render.
   * For indexed BufferGeometry, `count` is the number of indices to render.
   */
  setDrawRange(start, count) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(matrix) {
    const position = this.attributes.position;
    if (position !== void 0) {
      position.applyMatrix4(matrix);
      position.needsUpdate = true;
    }
    const normal = this.attributes.normal;
    if (normal !== void 0) {
      const normalMatrix = new Matrix3().getNormalMatrix(matrix);
      normal.applyNormalMatrix(normalMatrix);
      normal.needsUpdate = true;
    }
    const tangent = this.attributes.tangent;
    if (tangent !== void 0) {
      tangent.transformDirection(matrix);
      tangent.needsUpdate = true;
    }
    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }
    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }
    return this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(q2) {
    _m1.makeRotationFromQuaternion(q2);
    this.applyMatrix4(_m1);
    return this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(angle) {
    _m1.makeRotationX(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(angle) {
    _m1.makeRotationY(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(angle) {
    _m1.makeRotationZ(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  /**
   * Translates the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#position} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x offset.
   * @param {number} y - The y offset.
   * @param {number} z - The z offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  translate(x2, y2, z2) {
    _m1.makeTranslation(x2, y2, z2);
    this.applyMatrix4(_m1);
    return this;
  }
  /**
   * Scales the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#scale} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x scale.
   * @param {number} y - The y scale.
   * @param {number} z - The z scale.
   * @return {BufferGeometry} A reference to this instance.
   */
  scale(x2, y2, z2) {
    _m1.makeScale(x2, y2, z2);
    this.applyMatrix4(_m1);
    return this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(vector) {
    _obj.lookAt(vector);
    _obj.updateMatrix();
    this.applyMatrix4(_obj.matrix);
    return this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    this.computeBoundingBox();
    this.boundingBox.getCenter(_offset).negate();
    this.translate(_offset.x, _offset.y, _offset.z);
    return this;
  }
  /**
   * Defines a geometry by creating a `position` attribute based on the given array of points. The array
   * can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
   * set to `0`.
   *
   * If the method is used with an existing `position` attribute, the vertex data are overwritten with the
   * data from the array. The length of the array must match the vertex count.
   *
   * @param {Array<Vector2>|Array<Vector3>} points - The points.
   * @return {BufferGeometry} A reference to this instance.
   */
  setFromPoints(points) {
    const positionAttribute = this.getAttribute("position");
    if (positionAttribute === void 0) {
      const position = [];
      for (let i2 = 0, l2 = points.length; i2 < l2; i2++) {
        const point = points[i2];
        position.push(point.x, point.y, point.z || 0);
      }
      this.setAttribute("position", new Float32BufferAttribute(position, 3));
    } else {
      const l2 = Math.min(points.length, positionAttribute.count);
      for (let i2 = 0; i2 < l2; i2++) {
        const point = points[i2];
        positionAttribute.setXYZ(i2, point.x, point.y, point.z || 0);
      }
      if (points.length > positionAttribute.count) {
        warn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");
      }
      positionAttribute.needsUpdate = true;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new Box3();
    }
    const position = this.attributes.position;
    const morphAttributesPosition = this.morphAttributes.position;
    if (position && position.isGLBufferAttribute) {
      error("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this);
      this.boundingBox.set(
        new Vector3(-Infinity, -Infinity, -Infinity),
        new Vector3(Infinity, Infinity, Infinity)
      );
      return;
    }
    if (position !== void 0) {
      this.boundingBox.setFromBufferAttribute(position);
      if (morphAttributesPosition) {
        for (let i2 = 0, il = morphAttributesPosition.length; i2 < il; i2++) {
          const morphAttribute = morphAttributesPosition[i2];
          _box$2.setFromBufferAttribute(morphAttribute);
          if (this.morphTargetsRelative) {
            _vector$8.addVectors(this.boundingBox.min, _box$2.min);
            this.boundingBox.expandByPoint(_vector$8);
            _vector$8.addVectors(this.boundingBox.max, _box$2.max);
            this.boundingBox.expandByPoint(_vector$8);
          } else {
            this.boundingBox.expandByPoint(_box$2.min);
            this.boundingBox.expandByPoint(_box$2.max);
          }
        }
      }
    } else {
      this.boundingBox.makeEmpty();
    }
    if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
      error('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    if (this.boundingSphere === null) {
      this.boundingSphere = new Sphere();
    }
    const position = this.attributes.position;
    const morphAttributesPosition = this.morphAttributes.position;
    if (position && position.isGLBufferAttribute) {
      error("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this);
      this.boundingSphere.set(new Vector3(), Infinity);
      return;
    }
    if (position) {
      const center = this.boundingSphere.center;
      _box$2.setFromBufferAttribute(position);
      if (morphAttributesPosition) {
        for (let i2 = 0, il = morphAttributesPosition.length; i2 < il; i2++) {
          const morphAttribute = morphAttributesPosition[i2];
          _boxMorphTargets.setFromBufferAttribute(morphAttribute);
          if (this.morphTargetsRelative) {
            _vector$8.addVectors(_box$2.min, _boxMorphTargets.min);
            _box$2.expandByPoint(_vector$8);
            _vector$8.addVectors(_box$2.max, _boxMorphTargets.max);
            _box$2.expandByPoint(_vector$8);
          } else {
            _box$2.expandByPoint(_boxMorphTargets.min);
            _box$2.expandByPoint(_boxMorphTargets.max);
          }
        }
      }
      _box$2.getCenter(center);
      let maxRadiusSq = 0;
      for (let i2 = 0, il = position.count; i2 < il; i2++) {
        _vector$8.fromBufferAttribute(position, i2);
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$8));
      }
      if (morphAttributesPosition) {
        for (let i2 = 0, il = morphAttributesPosition.length; i2 < il; i2++) {
          const morphAttribute = morphAttributesPosition[i2];
          const morphTargetsRelative = this.morphTargetsRelative;
          for (let j2 = 0, jl = morphAttribute.count; j2 < jl; j2++) {
            _vector$8.fromBufferAttribute(morphAttribute, j2);
            if (morphTargetsRelative) {
              _offset.fromBufferAttribute(position, j2);
              _vector$8.add(_offset);
            }
            maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$8));
          }
        }
      }
      this.boundingSphere.radius = Math.sqrt(maxRadiusSq);
      if (isNaN(this.boundingSphere.radius)) {
        error('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
  }
  /**
   * Calculates and adds a tangent attribute to this geometry.
   *
   * The computation is only supported for indexed geometries and if position, normal, and uv attributes
   * are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
   * {@link BufferGeometryUtils#computeMikkTSpaceTangents} instead.
   */
  computeTangents() {
    const index = this.index;
    const attributes = this.attributes;
    if (index === null || attributes.position === void 0 || attributes.normal === void 0 || attributes.uv === void 0) {
      error("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const positionAttribute = attributes.position;
    const normalAttribute = attributes.normal;
    const uvAttribute = attributes.uv;
    if (this.hasAttribute("tangent") === false) {
      this.setAttribute("tangent", new BufferAttribute(new Float32Array(4 * positionAttribute.count), 4));
    }
    const tangentAttribute = this.getAttribute("tangent");
    const tan1 = [], tan2 = [];
    for (let i2 = 0; i2 < positionAttribute.count; i2++) {
      tan1[i2] = new Vector3();
      tan2[i2] = new Vector3();
    }
    const vA = new Vector3(), vB = new Vector3(), vC = new Vector3(), uvA = new Vector2(), uvB = new Vector2(), uvC = new Vector2(), sdir = new Vector3(), tdir = new Vector3();
    function handleTriangle(a2, b2, c2) {
      vA.fromBufferAttribute(positionAttribute, a2);
      vB.fromBufferAttribute(positionAttribute, b2);
      vC.fromBufferAttribute(positionAttribute, c2);
      uvA.fromBufferAttribute(uvAttribute, a2);
      uvB.fromBufferAttribute(uvAttribute, b2);
      uvC.fromBufferAttribute(uvAttribute, c2);
      vB.sub(vA);
      vC.sub(vA);
      uvB.sub(uvA);
      uvC.sub(uvA);
      const r2 = 1 / (uvB.x * uvC.y - uvC.x * uvB.y);
      if (!isFinite(r2)) return;
      sdir.copy(vB).multiplyScalar(uvC.y).addScaledVector(vC, -uvB.y).multiplyScalar(r2);
      tdir.copy(vC).multiplyScalar(uvB.x).addScaledVector(vB, -uvC.x).multiplyScalar(r2);
      tan1[a2].add(sdir);
      tan1[b2].add(sdir);
      tan1[c2].add(sdir);
      tan2[a2].add(tdir);
      tan2[b2].add(tdir);
      tan2[c2].add(tdir);
    }
    let groups = this.groups;
    if (groups.length === 0) {
      groups = [{
        start: 0,
        count: index.count
      }];
    }
    for (let i2 = 0, il = groups.length; i2 < il; ++i2) {
      const group = groups[i2];
      const start = group.start;
      const count = group.count;
      for (let j2 = start, jl = start + count; j2 < jl; j2 += 3) {
        handleTriangle(
          index.getX(j2 + 0),
          index.getX(j2 + 1),
          index.getX(j2 + 2)
        );
      }
    }
    const tmp2 = new Vector3(), tmp22 = new Vector3();
    const n2 = new Vector3(), n22 = new Vector3();
    function handleVertex(v2) {
      n2.fromBufferAttribute(normalAttribute, v2);
      n22.copy(n2);
      const t2 = tan1[v2];
      tmp2.copy(t2);
      tmp2.sub(n2.multiplyScalar(n2.dot(t2))).normalize();
      tmp22.crossVectors(n22, t2);
      const test = tmp22.dot(tan2[v2]);
      const w2 = test < 0 ? -1 : 1;
      tangentAttribute.setXYZW(v2, tmp2.x, tmp2.y, tmp2.z, w2);
    }
    for (let i2 = 0, il = groups.length; i2 < il; ++i2) {
      const group = groups[i2];
      const start = group.start;
      const count = group.count;
      for (let j2 = start, jl = start + count; j2 < jl; j2 += 3) {
        handleVertex(index.getX(j2 + 0));
        handleVertex(index.getX(j2 + 1));
        handleVertex(index.getX(j2 + 2));
      }
    }
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const index = this.index;
    const positionAttribute = this.getAttribute("position");
    if (positionAttribute !== void 0) {
      let normalAttribute = this.getAttribute("normal");
      if (normalAttribute === void 0) {
        normalAttribute = new BufferAttribute(new Float32Array(positionAttribute.count * 3), 3);
        this.setAttribute("normal", normalAttribute);
      } else {
        for (let i2 = 0, il = normalAttribute.count; i2 < il; i2++) {
          normalAttribute.setXYZ(i2, 0, 0, 0);
        }
      }
      const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
      const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
      const cb = new Vector3(), ab = new Vector3();
      if (index) {
        for (let i2 = 0, il = index.count; i2 < il; i2 += 3) {
          const vA = index.getX(i2 + 0);
          const vB = index.getX(i2 + 1);
          const vC = index.getX(i2 + 2);
          pA.fromBufferAttribute(positionAttribute, vA);
          pB.fromBufferAttribute(positionAttribute, vB);
          pC.fromBufferAttribute(positionAttribute, vC);
          cb.subVectors(pC, pB);
          ab.subVectors(pA, pB);
          cb.cross(ab);
          nA.fromBufferAttribute(normalAttribute, vA);
          nB.fromBufferAttribute(normalAttribute, vB);
          nC.fromBufferAttribute(normalAttribute, vC);
          nA.add(cb);
          nB.add(cb);
          nC.add(cb);
          normalAttribute.setXYZ(vA, nA.x, nA.y, nA.z);
          normalAttribute.setXYZ(vB, nB.x, nB.y, nB.z);
          normalAttribute.setXYZ(vC, nC.x, nC.y, nC.z);
        }
      } else {
        for (let i2 = 0, il = positionAttribute.count; i2 < il; i2 += 3) {
          pA.fromBufferAttribute(positionAttribute, i2 + 0);
          pB.fromBufferAttribute(positionAttribute, i2 + 1);
          pC.fromBufferAttribute(positionAttribute, i2 + 2);
          cb.subVectors(pC, pB);
          ab.subVectors(pA, pB);
          cb.cross(ab);
          normalAttribute.setXYZ(i2 + 0, cb.x, cb.y, cb.z);
          normalAttribute.setXYZ(i2 + 1, cb.x, cb.y, cb.z);
          normalAttribute.setXYZ(i2 + 2, cb.x, cb.y, cb.z);
        }
      }
      this.normalizeNormals();
      normalAttribute.needsUpdate = true;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const normals = this.attributes.normal;
    for (let i2 = 0, il = normals.count; i2 < il; i2++) {
      _vector$8.fromBufferAttribute(normals, i2);
      _vector$8.normalize();
      normals.setXYZ(i2, _vector$8.x, _vector$8.y, _vector$8.z);
    }
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function convertBufferAttribute(attribute, indices2) {
      const array = attribute.array;
      const itemSize = attribute.itemSize;
      const normalized = attribute.normalized;
      const array2 = new array.constructor(indices2.length * itemSize);
      let index = 0, index2 = 0;
      for (let i2 = 0, l2 = indices2.length; i2 < l2; i2++) {
        if (attribute.isInterleavedBufferAttribute) {
          index = indices2[i2] * attribute.data.stride + attribute.offset;
        } else {
          index = indices2[i2] * itemSize;
        }
        for (let j2 = 0; j2 < itemSize; j2++) {
          array2[index2++] = array[index++];
        }
      }
      return new BufferAttribute(array2, itemSize, normalized);
    }
    if (this.index === null) {
      warn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");
      return this;
    }
    const geometry2 = new _BufferGeometry();
    const indices = this.index.array;
    const attributes = this.attributes;
    for (const name in attributes) {
      const attribute = attributes[name];
      const newAttribute = convertBufferAttribute(attribute, indices);
      geometry2.setAttribute(name, newAttribute);
    }
    const morphAttributes = this.morphAttributes;
    for (const name in morphAttributes) {
      const morphArray = [];
      const morphAttribute = morphAttributes[name];
      for (let i2 = 0, il = morphAttribute.length; i2 < il; i2++) {
        const attribute = morphAttribute[i2];
        const newAttribute = convertBufferAttribute(attribute, indices);
        morphArray.push(newAttribute);
      }
      geometry2.morphAttributes[name] = morphArray;
    }
    geometry2.morphTargetsRelative = this.morphTargetsRelative;
    const groups = this.groups;
    for (let i2 = 0, l2 = groups.length; i2 < l2; i2++) {
      const group = groups[i2];
      geometry2.addGroup(group.start, group.count, group.materialIndex);
    }
    return geometry2;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const data = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    data.uuid = this.uuid;
    data.type = this.type;
    if (this.name !== "") data.name = this.name;
    if (Object.keys(this.userData).length > 0) data.userData = this.userData;
    if (this.parameters !== void 0) {
      const parameters = this.parameters;
      for (const key in parameters) {
        if (parameters[key] !== void 0) data[key] = parameters[key];
      }
      return data;
    }
    data.data = { attributes: {} };
    const index = this.index;
    if (index !== null) {
      data.data.index = {
        type: index.array.constructor.name,
        array: Array.prototype.slice.call(index.array)
      };
    }
    const attributes = this.attributes;
    for (const key in attributes) {
      const attribute = attributes[key];
      data.data.attributes[key] = attribute.toJSON(data.data);
    }
    const morphAttributes = {};
    let hasMorphAttributes = false;
    for (const key in this.morphAttributes) {
      const attributeArray = this.morphAttributes[key];
      const array = [];
      for (let i2 = 0, il = attributeArray.length; i2 < il; i2++) {
        const attribute = attributeArray[i2];
        array.push(attribute.toJSON(data.data));
      }
      if (array.length > 0) {
        morphAttributes[key] = array;
        hasMorphAttributes = true;
      }
    }
    if (hasMorphAttributes) {
      data.data.morphAttributes = morphAttributes;
      data.data.morphTargetsRelative = this.morphTargetsRelative;
    }
    const groups = this.groups;
    if (groups.length > 0) {
      data.data.groups = JSON.parse(JSON.stringify(groups));
    }
    const boundingSphere = this.boundingSphere;
    if (boundingSphere !== null) {
      data.data.boundingSphere = boundingSphere.toJSON();
    }
    return data;
  }
  /**
   * Returns a new geometry with copied values from this instance.
   *
   * @return {BufferGeometry} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given geometry to this instance.
   *
   * @param {BufferGeometry} source - The geometry to copy.
   * @return {BufferGeometry} A reference to this instance.
   */
  copy(source) {
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    const data = {};
    this.name = source.name;
    const index = source.index;
    if (index !== null) {
      this.setIndex(index.clone());
    }
    const attributes = source.attributes;
    for (const name in attributes) {
      const attribute = attributes[name];
      this.setAttribute(name, attribute.clone(data));
    }
    const morphAttributes = source.morphAttributes;
    for (const name in morphAttributes) {
      const array = [];
      const morphAttribute = morphAttributes[name];
      for (let i2 = 0, l2 = morphAttribute.length; i2 < l2; i2++) {
        array.push(morphAttribute[i2].clone(data));
      }
      this.morphAttributes[name] = array;
    }
    this.morphTargetsRelative = source.morphTargetsRelative;
    const groups = source.groups;
    for (let i2 = 0, l2 = groups.length; i2 < l2; i2++) {
      const group = groups[i2];
      this.addGroup(group.start, group.count, group.materialIndex);
    }
    const boundingBox = source.boundingBox;
    if (boundingBox !== null) {
      this.boundingBox = boundingBox.clone();
    }
    const boundingSphere = source.boundingSphere;
    if (boundingSphere !== null) {
      this.boundingSphere = boundingSphere.clone();
    }
    this.drawRange.start = source.drawRange.start;
    this.drawRange.count = source.drawRange.count;
    this.userData = source.userData;
    return this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires BufferGeometry#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
var _inverseMatrix$3 = /* @__PURE__ */ new Matrix4();
var _ray$3 = /* @__PURE__ */ new Ray();
var _sphere$6 = /* @__PURE__ */ new Sphere();
var _sphereHitAt = /* @__PURE__ */ new Vector3();
var _vA$1 = /* @__PURE__ */ new Vector3();
var _vB$1 = /* @__PURE__ */ new Vector3();
var _vC$1 = /* @__PURE__ */ new Vector3();
var _tempA = /* @__PURE__ */ new Vector3();
var _morphA = /* @__PURE__ */ new Vector3();
var _intersectionPoint = /* @__PURE__ */ new Vector3();
var _intersectionPointWorld = /* @__PURE__ */ new Vector3();
var Mesh = class extends Object3D {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(geometry = new BufferGeometry(), material = new MeshBasicMaterial()) {
    super();
    this.isMesh = true;
    this.type = "Mesh";
    this.geometry = geometry;
    this.material = material;
    this.morphTargetDictionary = void 0;
    this.morphTargetInfluences = void 0;
    this.count = 1;
    this.updateMorphTargets();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    if (source.morphTargetInfluences !== void 0) {
      this.morphTargetInfluences = source.morphTargetInfluences.slice();
    }
    if (source.morphTargetDictionary !== void 0) {
      this.morphTargetDictionary = Object.assign({}, source.morphTargetDictionary);
    }
    this.material = Array.isArray(source.material) ? source.material.slice() : source.material;
    this.geometry = source.geometry;
    return this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const geometry = this.geometry;
    const morphAttributes = geometry.morphAttributes;
    const keys = Object.keys(morphAttributes);
    if (keys.length > 0) {
      const morphAttribute = morphAttributes[keys[0]];
      if (morphAttribute !== void 0) {
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (let m2 = 0, ml = morphAttribute.length; m2 < ml; m2++) {
          const name = morphAttribute[m2].name || String(m2);
          this.morphTargetInfluences.push(0);
          this.morphTargetDictionary[name] = m2;
        }
      }
    }
  }
  /**
   * Returns the local-space position of the vertex at the given index, taking into
   * account the current animation state of both morph targets and skinning.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * @return {Vector3} The vertex position in local space.
   */
  getVertexPosition(index, target) {
    const geometry = this.geometry;
    const position = geometry.attributes.position;
    const morphPosition = geometry.morphAttributes.position;
    const morphTargetsRelative = geometry.morphTargetsRelative;
    target.fromBufferAttribute(position, index);
    const morphInfluences = this.morphTargetInfluences;
    if (morphPosition && morphInfluences) {
      _morphA.set(0, 0, 0);
      for (let i2 = 0, il = morphPosition.length; i2 < il; i2++) {
        const influence = morphInfluences[i2];
        const morphAttribute = morphPosition[i2];
        if (influence === 0) continue;
        _tempA.fromBufferAttribute(morphAttribute, index);
        if (morphTargetsRelative) {
          _morphA.addScaledVector(_tempA, influence);
        } else {
          _morphA.addScaledVector(_tempA.sub(target), influence);
        }
      }
      target.add(_morphA);
    }
    return target;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(raycaster, intersects2) {
    const geometry = this.geometry;
    const material = this.material;
    const matrixWorld = this.matrixWorld;
    if (material === void 0) return;
    if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
    _sphere$6.copy(geometry.boundingSphere);
    _sphere$6.applyMatrix4(matrixWorld);
    _ray$3.copy(raycaster.ray).recast(raycaster.near);
    if (_sphere$6.containsPoint(_ray$3.origin) === false) {
      if (_ray$3.intersectSphere(_sphere$6, _sphereHitAt) === null) return;
      if (_ray$3.origin.distanceToSquared(_sphereHitAt) > (raycaster.far - raycaster.near) ** 2) return;
    }
    _inverseMatrix$3.copy(matrixWorld).invert();
    _ray$3.copy(raycaster.ray).applyMatrix4(_inverseMatrix$3);
    if (geometry.boundingBox !== null) {
      if (_ray$3.intersectsBox(geometry.boundingBox) === false) return;
    }
    this._computeIntersections(raycaster, intersects2, _ray$3);
  }
  _computeIntersections(raycaster, intersects2, rayLocalSpace) {
    let intersection;
    const geometry = this.geometry;
    const material = this.material;
    const index = geometry.index;
    const position = geometry.attributes.position;
    const uv = geometry.attributes.uv;
    const uv1 = geometry.attributes.uv1;
    const normal = geometry.attributes.normal;
    const groups = geometry.groups;
    const drawRange = geometry.drawRange;
    if (index !== null) {
      if (Array.isArray(material)) {
        for (let i2 = 0, il = groups.length; i2 < il; i2++) {
          const group = groups[i2];
          const groupMaterial = material[group.materialIndex];
          const start = Math.max(group.start, drawRange.start);
          const end = Math.min(index.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
          for (let j2 = start, jl = end; j2 < jl; j2 += 3) {
            const a2 = index.getX(j2);
            const b2 = index.getX(j2 + 1);
            const c2 = index.getX(j2 + 2);
            intersection = checkGeometryIntersection(this, groupMaterial, raycaster, rayLocalSpace, uv, uv1, normal, a2, b2, c2);
            if (intersection) {
              intersection.faceIndex = Math.floor(j2 / 3);
              intersection.face.materialIndex = group.materialIndex;
              intersects2.push(intersection);
            }
          }
        }
      } else {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(index.count, drawRange.start + drawRange.count);
        for (let i2 = start, il = end; i2 < il; i2 += 3) {
          const a2 = index.getX(i2);
          const b2 = index.getX(i2 + 1);
          const c2 = index.getX(i2 + 2);
          intersection = checkGeometryIntersection(this, material, raycaster, rayLocalSpace, uv, uv1, normal, a2, b2, c2);
          if (intersection) {
            intersection.faceIndex = Math.floor(i2 / 3);
            intersects2.push(intersection);
          }
        }
      }
    } else if (position !== void 0) {
      if (Array.isArray(material)) {
        for (let i2 = 0, il = groups.length; i2 < il; i2++) {
          const group = groups[i2];
          const groupMaterial = material[group.materialIndex];
          const start = Math.max(group.start, drawRange.start);
          const end = Math.min(position.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
          for (let j2 = start, jl = end; j2 < jl; j2 += 3) {
            const a2 = j2;
            const b2 = j2 + 1;
            const c2 = j2 + 2;
            intersection = checkGeometryIntersection(this, groupMaterial, raycaster, rayLocalSpace, uv, uv1, normal, a2, b2, c2);
            if (intersection) {
              intersection.faceIndex = Math.floor(j2 / 3);
              intersection.face.materialIndex = group.materialIndex;
              intersects2.push(intersection);
            }
          }
        }
      } else {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(position.count, drawRange.start + drawRange.count);
        for (let i2 = start, il = end; i2 < il; i2 += 3) {
          const a2 = i2;
          const b2 = i2 + 1;
          const c2 = i2 + 2;
          intersection = checkGeometryIntersection(this, material, raycaster, rayLocalSpace, uv, uv1, normal, a2, b2, c2);
          if (intersection) {
            intersection.faceIndex = Math.floor(i2 / 3);
            intersects2.push(intersection);
          }
        }
      }
    }
  }
};
function checkIntersection$1(object, material, raycaster, ray, pA, pB, pC, point) {
  let intersect;
  if (material.side === BackSide) {
    intersect = ray.intersectTriangle(pC, pB, pA, true, point);
  } else {
    intersect = ray.intersectTriangle(pA, pB, pC, material.side === FrontSide, point);
  }
  if (intersect === null) return null;
  _intersectionPointWorld.copy(point);
  _intersectionPointWorld.applyMatrix4(object.matrixWorld);
  const distance = raycaster.ray.origin.distanceTo(_intersectionPointWorld);
  if (distance < raycaster.near || distance > raycaster.far) return null;
  return {
    distance,
    point: _intersectionPointWorld.clone(),
    object
  };
}
function checkGeometryIntersection(object, material, raycaster, ray, uv, uv1, normal, a2, b2, c2) {
  object.getVertexPosition(a2, _vA$1);
  object.getVertexPosition(b2, _vB$1);
  object.getVertexPosition(c2, _vC$1);
  const intersection = checkIntersection$1(object, material, raycaster, ray, _vA$1, _vB$1, _vC$1, _intersectionPoint);
  if (intersection) {
    const barycoord = new Vector3();
    Triangle.getBarycoord(_intersectionPoint, _vA$1, _vB$1, _vC$1, barycoord);
    if (uv) {
      intersection.uv = Triangle.getInterpolatedAttribute(uv, a2, b2, c2, barycoord, new Vector2());
    }
    if (uv1) {
      intersection.uv1 = Triangle.getInterpolatedAttribute(uv1, a2, b2, c2, barycoord, new Vector2());
    }
    if (normal) {
      intersection.normal = Triangle.getInterpolatedAttribute(normal, a2, b2, c2, barycoord, new Vector3());
      if (intersection.normal.dot(ray.direction) > 0) {
        intersection.normal.multiplyScalar(-1);
      }
    }
    const face = {
      a: a2,
      b: b2,
      c: c2,
      normal: new Vector3(),
      materialIndex: 0
    };
    Triangle.getNormal(_vA$1, _vB$1, _vC$1, face.normal);
    intersection.face = face;
    intersection.barycoord = barycoord;
  }
  return intersection;
}
var BoxGeometry = class _BoxGeometry extends BufferGeometry {
  /**
   * Constructs a new box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [widthSegments=1] - Number of segmented rectangular faces along the width of the sides.
   * @param {number} [heightSegments=1] - Number of segmented rectangular faces along the height of the sides.
   * @param {number} [depthSegments=1] - Number of segmented rectangular faces along the depth of the sides.
   */
  constructor(width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
    super();
    this.type = "BoxGeometry";
    this.parameters = {
      width,
      height,
      depth,
      widthSegments,
      heightSegments,
      depthSegments
    };
    const scope = this;
    widthSegments = Math.floor(widthSegments);
    heightSegments = Math.floor(heightSegments);
    depthSegments = Math.floor(depthSegments);
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    let numberOfVertices = 0;
    let groupStart = 0;
    buildPlane("z", "y", "x", -1, -1, depth, height, width, depthSegments, heightSegments, 0);
    buildPlane("z", "y", "x", 1, -1, depth, height, -width, depthSegments, heightSegments, 1);
    buildPlane("x", "z", "y", 1, 1, width, depth, height, widthSegments, depthSegments, 2);
    buildPlane("x", "z", "y", 1, -1, width, depth, -height, widthSegments, depthSegments, 3);
    buildPlane("x", "y", "z", 1, -1, width, height, depth, widthSegments, heightSegments, 4);
    buildPlane("x", "y", "z", -1, -1, width, height, -depth, widthSegments, heightSegments, 5);
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    function buildPlane(u3, v2, w2, udir, vdir, width2, height2, depth2, gridX, gridY, materialIndex) {
      const segmentWidth = width2 / gridX;
      const segmentHeight = height2 / gridY;
      const widthHalf = width2 / 2;
      const heightHalf = height2 / 2;
      const depthHalf = depth2 / 2;
      const gridX1 = gridX + 1;
      const gridY1 = gridY + 1;
      let vertexCounter = 0;
      let groupCount = 0;
      const vector = new Vector3();
      for (let iy = 0; iy < gridY1; iy++) {
        const y2 = iy * segmentHeight - heightHalf;
        for (let ix = 0; ix < gridX1; ix++) {
          const x2 = ix * segmentWidth - widthHalf;
          vector[u3] = x2 * udir;
          vector[v2] = y2 * vdir;
          vector[w2] = depthHalf;
          vertices.push(vector.x, vector.y, vector.z);
          vector[u3] = 0;
          vector[v2] = 0;
          vector[w2] = depth2 > 0 ? 1 : -1;
          normals.push(vector.x, vector.y, vector.z);
          uvs.push(ix / gridX);
          uvs.push(1 - iy / gridY);
          vertexCounter += 1;
        }
      }
      for (let iy = 0; iy < gridY; iy++) {
        for (let ix = 0; ix < gridX; ix++) {
          const a2 = numberOfVertices + ix + gridX1 * iy;
          const b2 = numberOfVertices + ix + gridX1 * (iy + 1);
          const c2 = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
          const d2 = numberOfVertices + (ix + 1) + gridX1 * iy;
          indices.push(a2, b2, d2);
          indices.push(b2, c2, d2);
          groupCount += 6;
        }
      }
      scope.addGroup(groupStart, groupCount, materialIndex);
      groupStart += groupCount;
      numberOfVertices += vertexCounter;
    }
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {BoxGeometry} A new instance.
   */
  static fromJSON(data) {
    return new _BoxGeometry(data.width, data.height, data.depth, data.widthSegments, data.heightSegments, data.depthSegments);
  }
};
function cloneUniforms(src) {
  const dst = {};
  for (const u3 in src) {
    dst[u3] = {};
    for (const p2 in src[u3]) {
      const property = src[u3][p2];
      if (property && (property.isColor || property.isMatrix3 || property.isMatrix4 || property.isVector2 || property.isVector3 || property.isVector4 || property.isTexture || property.isQuaternion)) {
        if (property.isRenderTargetTexture) {
          warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().");
          dst[u3][p2] = null;
        } else {
          dst[u3][p2] = property.clone();
        }
      } else if (Array.isArray(property)) {
        dst[u3][p2] = property.slice();
      } else {
        dst[u3][p2] = property;
      }
    }
  }
  return dst;
}
function mergeUniforms(uniforms) {
  const merged = {};
  for (let u3 = 0; u3 < uniforms.length; u3++) {
    const tmp2 = cloneUniforms(uniforms[u3]);
    for (const p2 in tmp2) {
      merged[p2] = tmp2[p2];
    }
  }
  return merged;
}
function cloneUniformsGroups(src) {
  const dst = [];
  for (let u3 = 0; u3 < src.length; u3++) {
    dst.push(src[u3].clone());
  }
  return dst;
}
var default_vertex = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
var default_fragment = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
var ShaderMaterial = class extends Material {
  /**
   * Constructs a new shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(parameters) {
    super();
    this.isShaderMaterial = true;
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.uniformsGroups = [];
    this.vertexShader = default_vertex;
    this.fragmentShader = default_fragment;
    this.linewidth = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.fog = false;
    this.lights = false;
    this.clipping = false;
    this.forceSinglePass = true;
    this.extensions = {
      clipCullDistance: false,
      // set to use vertex shader clipping
      multiDraw: false
      // set to use vertex shader multi_draw / enable gl_DrawID
    };
    this.defaultAttributeValues = {
      "color": [1, 1, 1],
      "uv": [0, 0],
      "uv1": [0, 0]
    };
    this.index0AttributeName = void 0;
    this.uniformsNeedUpdate = false;
    this.glslVersion = null;
    if (parameters !== void 0) {
      this.setValues(parameters);
    }
  }
  copy(source) {
    super.copy(source);
    this.fragmentShader = source.fragmentShader;
    this.vertexShader = source.vertexShader;
    this.uniforms = cloneUniforms(source.uniforms);
    this.uniformsGroups = cloneUniformsGroups(source.uniformsGroups);
    this.defines = Object.assign({}, source.defines);
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.fog = source.fog;
    this.lights = source.lights;
    this.clipping = source.clipping;
    this.extensions = Object.assign({}, source.extensions);
    this.glslVersion = source.glslVersion;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.glslVersion = this.glslVersion;
    data.uniforms = {};
    for (const name in this.uniforms) {
      const uniform = this.uniforms[name];
      const value = uniform.value;
      if (value && value.isTexture) {
        data.uniforms[name] = {
          type: "t",
          value: value.toJSON(meta).uuid
        };
      } else if (value && value.isColor) {
        data.uniforms[name] = {
          type: "c",
          value: value.getHex()
        };
      } else if (value && value.isVector2) {
        data.uniforms[name] = {
          type: "v2",
          value: value.toArray()
        };
      } else if (value && value.isVector3) {
        data.uniforms[name] = {
          type: "v3",
          value: value.toArray()
        };
      } else if (value && value.isVector4) {
        data.uniforms[name] = {
          type: "v4",
          value: value.toArray()
        };
      } else if (value && value.isMatrix3) {
        data.uniforms[name] = {
          type: "m3",
          value: value.toArray()
        };
      } else if (value && value.isMatrix4) {
        data.uniforms[name] = {
          type: "m4",
          value: value.toArray()
        };
      } else {
        data.uniforms[name] = {
          value
        };
      }
    }
    if (Object.keys(this.defines).length > 0) data.defines = this.defines;
    data.vertexShader = this.vertexShader;
    data.fragmentShader = this.fragmentShader;
    data.lights = this.lights;
    data.clipping = this.clipping;
    const extensions = {};
    for (const key in this.extensions) {
      if (this.extensions[key] === true) extensions[key] = true;
    }
    if (Object.keys(extensions).length > 0) data.extensions = extensions;
    return data;
  }
};
var Group = class extends Object3D {
  constructor() {
    super();
    this.isGroup = true;
    this.type = "Group";
  }
};
var Curve = class {
  /**
   * Constructs a new curve.
   */
  constructor() {
    this.type = "Curve";
    this.arcLengthDivisions = 200;
    this.needsUpdate = false;
    this.cacheArcLengths = null;
  }
  /**
   * This method returns a vector in 2D or 3D space (depending on the curve definition)
   * for the given interpolation factor.
   *
   * @abstract
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The position on the curve. It can be a 2D or 3D vector depending on the curve definition.
   */
  getPoint() {
    warn("Curve: .getPoint() not implemented.");
  }
  /**
   * This method returns a vector in 2D or 3D space (depending on the curve definition)
   * for the given interpolation factor. Unlike {@link Curve#getPoint}, this method honors the length
   * of the curve which equidistant samples.
   *
   * @param {number} u - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The position on the curve. It can be a 2D or 3D vector depending on the curve definition.
   */
  getPointAt(u3, optionalTarget) {
    const t2 = this.getUtoTmapping(u3);
    return this.getPoint(t2, optionalTarget);
  }
  /**
   * This method samples the curve via {@link Curve#getPoint} and returns an array of points representing
   * the curve shape.
   *
   * @param {number} [divisions=5] - The number of divisions.
   * @return {Array<(Vector2|Vector3)>} An array holding the sampled curve values. The number of points is `divisions + 1`.
   */
  getPoints(divisions = 5) {
    const points = [];
    for (let d2 = 0; d2 <= divisions; d2++) {
      points.push(this.getPoint(d2 / divisions));
    }
    return points;
  }
  // Get sequence of points using getPointAt( u )
  /**
   * This method samples the curve via {@link Curve#getPointAt} and returns an array of points representing
   * the curve shape. Unlike {@link Curve#getPoints}, this method returns equi-spaced points across the entire
   * curve.
   *
   * @param {number} [divisions=5] - The number of divisions.
   * @return {Array<(Vector2|Vector3)>} An array holding the sampled curve values. The number of points is `divisions + 1`.
   */
  getSpacedPoints(divisions = 5) {
    const points = [];
    for (let d2 = 0; d2 <= divisions; d2++) {
      points.push(this.getPointAt(d2 / divisions));
    }
    return points;
  }
  /**
   * Returns the total arc length of the curve.
   *
   * @return {number} The length of the curve.
   */
  getLength() {
    const lengths = this.getLengths();
    return lengths[lengths.length - 1];
  }
  /**
   * Returns an array of cumulative segment lengths of the curve.
   *
   * @param {number} [divisions=this.arcLengthDivisions] - The number of divisions.
   * @return {Array<number>} An array holding the cumulative segment lengths.
   */
  getLengths(divisions = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === divisions + 1 && !this.needsUpdate) {
      return this.cacheArcLengths;
    }
    this.needsUpdate = false;
    const cache = [];
    let current, last = this.getPoint(0);
    let sum = 0;
    cache.push(0);
    for (let p2 = 1; p2 <= divisions; p2++) {
      current = this.getPoint(p2 / divisions);
      sum += current.distanceTo(last);
      cache.push(sum);
      last = current;
    }
    this.cacheArcLengths = cache;
    return cache;
  }
  /**
   * Update the cumulative segment distance cache. The method must be called
   * every time curve parameters are changed. If an updated curve is part of a
   * composed curve like {@link CurvePath}, this method must be called on the
   * composed curve, too.
   */
  updateArcLengths() {
    this.needsUpdate = true;
    this.getLengths();
  }
  /**
   * Given an interpolation factor in the range `[0,1]`, this method returns an updated
   * interpolation factor in the same range that can be ued to sample equidistant points
   * from a curve.
   *
   * @param {number} u - The interpolation factor.
   * @param {?number} distance - An optional distance on the curve.
   * @return {number} The updated interpolation factor.
   */
  getUtoTmapping(u3, distance = null) {
    const arcLengths = this.getLengths();
    let i2 = 0;
    const il = arcLengths.length;
    let targetArcLength;
    if (distance) {
      targetArcLength = distance;
    } else {
      targetArcLength = u3 * arcLengths[il - 1];
    }
    let low = 0, high = il - 1, comparison;
    while (low <= high) {
      i2 = Math.floor(low + (high - low) / 2);
      comparison = arcLengths[i2] - targetArcLength;
      if (comparison < 0) {
        low = i2 + 1;
      } else if (comparison > 0) {
        high = i2 - 1;
      } else {
        high = i2;
        break;
      }
    }
    i2 = high;
    if (arcLengths[i2] === targetArcLength) {
      return i2 / (il - 1);
    }
    const lengthBefore = arcLengths[i2];
    const lengthAfter = arcLengths[i2 + 1];
    const segmentLength = lengthAfter - lengthBefore;
    const segmentFraction = (targetArcLength - lengthBefore) / segmentLength;
    const t2 = (i2 + segmentFraction) / (il - 1);
    return t2;
  }
  /**
   * Returns a unit vector tangent for the given interpolation factor.
   * If the derived curve does not implement its tangent derivation,
   * two points a small delta apart will be used to find its gradient
   * which seems to give a reasonable approximation.
   *
   * @param {number} t - The interpolation factor.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The tangent vector.
   */
  getTangent(t2, optionalTarget) {
    const delta = 1e-4;
    let t1 = t2 - delta;
    let t22 = t2 + delta;
    if (t1 < 0) t1 = 0;
    if (t22 > 1) t22 = 1;
    const pt1 = this.getPoint(t1);
    const pt2 = this.getPoint(t22);
    const tangent = optionalTarget || (pt1.isVector2 ? new Vector2() : new Vector3());
    tangent.copy(pt2).sub(pt1).normalize();
    return tangent;
  }
  /**
   * Same as {@link Curve#getTangent} but with equidistant samples.
   *
   * @param {number} u - The interpolation factor.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The tangent vector.
   * @see {@link Curve#getPointAt}
   */
  getTangentAt(u3, optionalTarget) {
    const t2 = this.getUtoTmapping(u3);
    return this.getTangent(t2, optionalTarget);
  }
  /**
   * Generates the Frenet Frames. Requires a curve definition in 3D space. Used
   * in geometries like {@link TubeGeometry} or {@link ExtrudeGeometry}.
   *
   * @param {number} segments - The number of segments.
   * @param {boolean} [closed=false] - Whether the curve is closed or not.
   * @return {{tangents: Array<Vector3>, normals: Array<Vector3>, binormals: Array<Vector3>}} The Frenet Frames.
   */
  computeFrenetFrames(segments, closed = false) {
    const normal = new Vector3();
    const tangents = [];
    const normals = [];
    const binormals = [];
    const vec = new Vector3();
    const mat = new Matrix4();
    for (let i2 = 0; i2 <= segments; i2++) {
      const u3 = i2 / segments;
      tangents[i2] = this.getTangentAt(u3, new Vector3());
    }
    normals[0] = new Vector3();
    binormals[0] = new Vector3();
    let min = Number.MAX_VALUE;
    const tx = Math.abs(tangents[0].x);
    const ty = Math.abs(tangents[0].y);
    const tz = Math.abs(tangents[0].z);
    if (tx <= min) {
      min = tx;
      normal.set(1, 0, 0);
    }
    if (ty <= min) {
      min = ty;
      normal.set(0, 1, 0);
    }
    if (tz <= min) {
      normal.set(0, 0, 1);
    }
    vec.crossVectors(tangents[0], normal).normalize();
    normals[0].crossVectors(tangents[0], vec);
    binormals[0].crossVectors(tangents[0], normals[0]);
    for (let i2 = 1; i2 <= segments; i2++) {
      normals[i2] = normals[i2 - 1].clone();
      binormals[i2] = binormals[i2 - 1].clone();
      vec.crossVectors(tangents[i2 - 1], tangents[i2]);
      if (vec.length() > Number.EPSILON) {
        vec.normalize();
        const theta = Math.acos(clamp(tangents[i2 - 1].dot(tangents[i2]), -1, 1));
        normals[i2].applyMatrix4(mat.makeRotationAxis(vec, theta));
      }
      binormals[i2].crossVectors(tangents[i2], normals[i2]);
    }
    if (closed === true) {
      let theta = Math.acos(clamp(normals[0].dot(normals[segments]), -1, 1));
      theta /= segments;
      if (tangents[0].dot(vec.crossVectors(normals[0], normals[segments])) > 0) {
        theta = -theta;
      }
      for (let i2 = 1; i2 <= segments; i2++) {
        normals[i2].applyMatrix4(mat.makeRotationAxis(tangents[i2], theta * i2));
        binormals[i2].crossVectors(tangents[i2], normals[i2]);
      }
    }
    return {
      tangents,
      normals,
      binormals
    };
  }
  /**
   * Returns a new curve with copied values from this instance.
   *
   * @return {Curve} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given curve to this instance.
   *
   * @param {Curve} source - The curve to copy.
   * @return {Curve} A reference to this curve.
   */
  copy(source) {
    this.arcLengthDivisions = source.arcLengthDivisions;
    return this;
  }
  /**
   * Serializes the curve into JSON.
   *
   * @return {Object} A JSON object representing the serialized curve.
   * @see {@link ObjectLoader#parse}
   */
  toJSON() {
    const data = {
      metadata: {
        version: 4.7,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    data.arcLengthDivisions = this.arcLengthDivisions;
    data.type = this.type;
    return data;
  }
  /**
   * Deserializes the curve from the given JSON.
   *
   * @param {Object} json - The JSON holding the serialized curve.
   * @return {Curve} A reference to this curve.
   */
  fromJSON(json) {
    this.arcLengthDivisions = json.arcLengthDivisions;
    return this;
  }
};
var EllipseCurve = class extends Curve {
  /**
   * Constructs a new ellipse curve.
   *
   * @param {number} [aX=0] - The X center of the ellipse.
   * @param {number} [aY=0] - The Y center of the ellipse.
   * @param {number} [xRadius=1] - The radius of the ellipse in the x direction.
   * @param {number} [yRadius=1] - The radius of the ellipse in the y direction.
   * @param {number} [aStartAngle=0] - The start angle of the curve in radians starting from the positive X axis.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle of the curve in radians starting from the positive X axis.
   * @param {boolean} [aClockwise=false] - Whether the ellipse is drawn clockwise or not.
   * @param {number} [aRotation=0] - The rotation angle of the ellipse in radians, counterclockwise from the positive X axis.
   */
  constructor(aX = 0, aY = 0, xRadius = 1, yRadius = 1, aStartAngle = 0, aEndAngle = Math.PI * 2, aClockwise = false, aRotation = 0) {
    super();
    this.isEllipseCurve = true;
    this.type = "EllipseCurve";
    this.aX = aX;
    this.aY = aY;
    this.xRadius = xRadius;
    this.yRadius = yRadius;
    this.aStartAngle = aStartAngle;
    this.aEndAngle = aEndAngle;
    this.aClockwise = aClockwise;
    this.aRotation = aRotation;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(t2, optionalTarget = new Vector2()) {
    const point = optionalTarget;
    const twoPi = Math.PI * 2;
    let deltaAngle = this.aEndAngle - this.aStartAngle;
    const samePoints = Math.abs(deltaAngle) < Number.EPSILON;
    while (deltaAngle < 0) deltaAngle += twoPi;
    while (deltaAngle > twoPi) deltaAngle -= twoPi;
    if (deltaAngle < Number.EPSILON) {
      if (samePoints) {
        deltaAngle = 0;
      } else {
        deltaAngle = twoPi;
      }
    }
    if (this.aClockwise === true && !samePoints) {
      if (deltaAngle === twoPi) {
        deltaAngle = -twoPi;
      } else {
        deltaAngle = deltaAngle - twoPi;
      }
    }
    const angle = this.aStartAngle + t2 * deltaAngle;
    let x2 = this.aX + this.xRadius * Math.cos(angle);
    let y2 = this.aY + this.yRadius * Math.sin(angle);
    if (this.aRotation !== 0) {
      const cos = Math.cos(this.aRotation);
      const sin = Math.sin(this.aRotation);
      const tx = x2 - this.aX;
      const ty = y2 - this.aY;
      x2 = tx * cos - ty * sin + this.aX;
      y2 = tx * sin + ty * cos + this.aY;
    }
    return point.set(x2, y2);
  }
  copy(source) {
    super.copy(source);
    this.aX = source.aX;
    this.aY = source.aY;
    this.xRadius = source.xRadius;
    this.yRadius = source.yRadius;
    this.aStartAngle = source.aStartAngle;
    this.aEndAngle = source.aEndAngle;
    this.aClockwise = source.aClockwise;
    this.aRotation = source.aRotation;
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.aX = this.aX;
    data.aY = this.aY;
    data.xRadius = this.xRadius;
    data.yRadius = this.yRadius;
    data.aStartAngle = this.aStartAngle;
    data.aEndAngle = this.aEndAngle;
    data.aClockwise = this.aClockwise;
    data.aRotation = this.aRotation;
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.aX = json.aX;
    this.aY = json.aY;
    this.xRadius = json.xRadius;
    this.yRadius = json.yRadius;
    this.aStartAngle = json.aStartAngle;
    this.aEndAngle = json.aEndAngle;
    this.aClockwise = json.aClockwise;
    this.aRotation = json.aRotation;
    return this;
  }
};
var ArcCurve = class extends EllipseCurve {
  /**
   * Constructs a new arc curve.
   *
   * @param {number} [aX=0] - The X center of the ellipse.
   * @param {number} [aY=0] - The Y center of the ellipse.
   * @param {number} [aRadius=1] - The radius of the ellipse in the x direction.
   * @param {number} [aStartAngle=0] - The start angle of the curve in radians starting from the positive X axis.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle of the curve in radians starting from the positive X axis.
   * @param {boolean} [aClockwise=false] - Whether the ellipse is drawn clockwise or not.
   */
  constructor(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
    super(aX, aY, aRadius, aRadius, aStartAngle, aEndAngle, aClockwise);
    this.isArcCurve = true;
    this.type = "ArcCurve";
  }
};
function CubicPoly() {
  let c0 = 0, c1 = 0, c2 = 0, c3 = 0;
  function init(x0, x1, t0, t1) {
    c0 = x0;
    c1 = t0;
    c2 = -3 * x0 + 3 * x1 - 2 * t0 - t1;
    c3 = 2 * x0 - 2 * x1 + t0 + t1;
  }
  return {
    initCatmullRom: function(x0, x1, x2, x3, tension) {
      init(x1, x2, tension * (x2 - x0), tension * (x3 - x1));
    },
    initNonuniformCatmullRom: function(x0, x1, x2, x3, dt0, dt1, dt2) {
      let t1 = (x1 - x0) / dt0 - (x2 - x0) / (dt0 + dt1) + (x2 - x1) / dt1;
      let t2 = (x2 - x1) / dt1 - (x3 - x1) / (dt1 + dt2) + (x3 - x2) / dt2;
      t1 *= dt1;
      t2 *= dt1;
      init(x1, x2, t1, t2);
    },
    calc: function(t2) {
      const t22 = t2 * t2;
      const t3 = t22 * t2;
      return c0 + c1 * t2 + c2 * t22 + c3 * t3;
    }
  };
}
var tmp = /* @__PURE__ */ new Vector3();
var px = /* @__PURE__ */ new CubicPoly();
var py = /* @__PURE__ */ new CubicPoly();
var pz = /* @__PURE__ */ new CubicPoly();
var CatmullRomCurve3 = class extends Curve {
  /**
   * Constructs a new Catmull-Rom curve.
   *
   * @param {Array<Vector3>} [points] - An array of 3D points defining the curve.
   * @param {boolean} [closed=false] - Whether the curve is closed or not.
   * @param {('centripetal'|'chordal'|'catmullrom')} [curveType='centripetal'] - The curve type.
   * @param {number} [tension=0.5] - Tension of the curve.
   */
  constructor(points = [], closed = false, curveType = "centripetal", tension = 0.5) {
    super();
    this.isCatmullRomCurve3 = true;
    this.type = "CatmullRomCurve3";
    this.points = points;
    this.closed = closed;
    this.curveType = curveType;
    this.tension = tension;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the curve.
   */
  getPoint(t2, optionalTarget = new Vector3()) {
    const point = optionalTarget;
    const points = this.points;
    const l2 = points.length;
    const p2 = (l2 - (this.closed ? 0 : 1)) * t2;
    let intPoint = Math.floor(p2);
    let weight = p2 - intPoint;
    if (this.closed) {
      intPoint += intPoint > 0 ? 0 : (Math.floor(Math.abs(intPoint) / l2) + 1) * l2;
    } else if (weight === 0 && intPoint === l2 - 1) {
      intPoint = l2 - 2;
      weight = 1;
    }
    let p0, p3;
    if (this.closed || intPoint > 0) {
      p0 = points[(intPoint - 1) % l2];
    } else {
      tmp.subVectors(points[0], points[1]).add(points[0]);
      p0 = tmp;
    }
    const p1 = points[intPoint % l2];
    const p22 = points[(intPoint + 1) % l2];
    if (this.closed || intPoint + 2 < l2) {
      p3 = points[(intPoint + 2) % l2];
    } else {
      tmp.subVectors(points[l2 - 1], points[l2 - 2]).add(points[l2 - 1]);
      p3 = tmp;
    }
    if (this.curveType === "centripetal" || this.curveType === "chordal") {
      const pow = this.curveType === "chordal" ? 0.5 : 0.25;
      let dt0 = Math.pow(p0.distanceToSquared(p1), pow);
      let dt1 = Math.pow(p1.distanceToSquared(p22), pow);
      let dt2 = Math.pow(p22.distanceToSquared(p3), pow);
      if (dt1 < 1e-4) dt1 = 1;
      if (dt0 < 1e-4) dt0 = dt1;
      if (dt2 < 1e-4) dt2 = dt1;
      px.initNonuniformCatmullRom(p0.x, p1.x, p22.x, p3.x, dt0, dt1, dt2);
      py.initNonuniformCatmullRom(p0.y, p1.y, p22.y, p3.y, dt0, dt1, dt2);
      pz.initNonuniformCatmullRom(p0.z, p1.z, p22.z, p3.z, dt0, dt1, dt2);
    } else if (this.curveType === "catmullrom") {
      px.initCatmullRom(p0.x, p1.x, p22.x, p3.x, this.tension);
      py.initCatmullRom(p0.y, p1.y, p22.y, p3.y, this.tension);
      pz.initCatmullRom(p0.z, p1.z, p22.z, p3.z, this.tension);
    }
    point.set(
      px.calc(weight),
      py.calc(weight),
      pz.calc(weight)
    );
    return point;
  }
  copy(source) {
    super.copy(source);
    this.points = [];
    for (let i2 = 0, l2 = source.points.length; i2 < l2; i2++) {
      const point = source.points[i2];
      this.points.push(point.clone());
    }
    this.closed = source.closed;
    this.curveType = source.curveType;
    this.tension = source.tension;
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.points = [];
    for (let i2 = 0, l2 = this.points.length; i2 < l2; i2++) {
      const point = this.points[i2];
      data.points.push(point.toArray());
    }
    data.closed = this.closed;
    data.curveType = this.curveType;
    data.tension = this.tension;
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.points = [];
    for (let i2 = 0, l2 = json.points.length; i2 < l2; i2++) {
      const point = json.points[i2];
      this.points.push(new Vector3().fromArray(point));
    }
    this.closed = json.closed;
    this.curveType = json.curveType;
    this.tension = json.tension;
    return this;
  }
};
function CatmullRom(t2, p0, p1, p2, p3) {
  const v0 = (p2 - p0) * 0.5;
  const v1 = (p3 - p1) * 0.5;
  const t22 = t2 * t2;
  const t3 = t2 * t22;
  return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t22 + v0 * t2 + p1;
}
function QuadraticBezierP0(t2, p2) {
  const k2 = 1 - t2;
  return k2 * k2 * p2;
}
function QuadraticBezierP1(t2, p2) {
  return 2 * (1 - t2) * t2 * p2;
}
function QuadraticBezierP2(t2, p2) {
  return t2 * t2 * p2;
}
function QuadraticBezier(t2, p0, p1, p2) {
  return QuadraticBezierP0(t2, p0) + QuadraticBezierP1(t2, p1) + QuadraticBezierP2(t2, p2);
}
function CubicBezierP0(t2, p2) {
  const k2 = 1 - t2;
  return k2 * k2 * k2 * p2;
}
function CubicBezierP1(t2, p2) {
  const k2 = 1 - t2;
  return 3 * k2 * k2 * t2 * p2;
}
function CubicBezierP2(t2, p2) {
  return 3 * (1 - t2) * t2 * t2 * p2;
}
function CubicBezierP3(t2, p2) {
  return t2 * t2 * t2 * p2;
}
function CubicBezier(t2, p0, p1, p2, p3) {
  return CubicBezierP0(t2, p0) + CubicBezierP1(t2, p1) + CubicBezierP2(t2, p2) + CubicBezierP3(t2, p3);
}
var CubicBezierCurve = class extends Curve {
  /**
   * Constructs a new Cubic Bezier curve.
   *
   * @param {Vector2} [v0] - The start point.
   * @param {Vector2} [v1] - The first control point.
   * @param {Vector2} [v2] - The second control point.
   * @param {Vector2} [v3] - The end point.
   */
  constructor(v0 = new Vector2(), v1 = new Vector2(), v2 = new Vector2(), v3 = new Vector2()) {
    super();
    this.isCubicBezierCurve = true;
    this.type = "CubicBezierCurve";
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(t2, optionalTarget = new Vector2()) {
    const point = optionalTarget;
    const v0 = this.v0, v1 = this.v1, v2 = this.v2, v3 = this.v3;
    point.set(
      CubicBezier(t2, v0.x, v1.x, v2.x, v3.x),
      CubicBezier(t2, v0.y, v1.y, v2.y, v3.y)
    );
    return point;
  }
  copy(source) {
    super.copy(source);
    this.v0.copy(source.v0);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    this.v3.copy(source.v3);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v0 = this.v0.toArray();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    data.v3 = this.v3.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v0.fromArray(json.v0);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    this.v3.fromArray(json.v3);
    return this;
  }
};
var CubicBezierCurve3 = class extends Curve {
  /**
   * Constructs a new Cubic Bezier curve.
   *
   * @param {Vector3} [v0] - The start point.
   * @param {Vector3} [v1] - The first control point.
   * @param {Vector3} [v2] - The second control point.
   * @param {Vector3} [v3] - The end point.
   */
  constructor(v0 = new Vector3(), v1 = new Vector3(), v2 = new Vector3(), v3 = new Vector3()) {
    super();
    this.isCubicBezierCurve3 = true;
    this.type = "CubicBezierCurve3";
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the curve.
   */
  getPoint(t2, optionalTarget = new Vector3()) {
    const point = optionalTarget;
    const v0 = this.v0, v1 = this.v1, v2 = this.v2, v3 = this.v3;
    point.set(
      CubicBezier(t2, v0.x, v1.x, v2.x, v3.x),
      CubicBezier(t2, v0.y, v1.y, v2.y, v3.y),
      CubicBezier(t2, v0.z, v1.z, v2.z, v3.z)
    );
    return point;
  }
  copy(source) {
    super.copy(source);
    this.v0.copy(source.v0);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    this.v3.copy(source.v3);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v0 = this.v0.toArray();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    data.v3 = this.v3.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v0.fromArray(json.v0);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    this.v3.fromArray(json.v3);
    return this;
  }
};
var LineCurve = class extends Curve {
  /**
   * Constructs a new line curve.
   *
   * @param {Vector2} [v1] - The start point.
   * @param {Vector2} [v2] - The end point.
   */
  constructor(v1 = new Vector2(), v2 = new Vector2()) {
    super();
    this.isLineCurve = true;
    this.type = "LineCurve";
    this.v1 = v1;
    this.v2 = v2;
  }
  /**
   * Returns a point on the line.
   *
   * @param {number} t - A interpolation factor representing a position on the line. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the line.
   */
  getPoint(t2, optionalTarget = new Vector2()) {
    const point = optionalTarget;
    if (t2 === 1) {
      point.copy(this.v2);
    } else {
      point.copy(this.v2).sub(this.v1);
      point.multiplyScalar(t2).add(this.v1);
    }
    return point;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(u3, optionalTarget) {
    return this.getPoint(u3, optionalTarget);
  }
  getTangent(t2, optionalTarget = new Vector2()) {
    return optionalTarget.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(u3, optionalTarget) {
    return this.getTangent(u3, optionalTarget);
  }
  copy(source) {
    super.copy(source);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    return this;
  }
};
var LineCurve3 = class extends Curve {
  /**
   * Constructs a new line curve.
   *
   * @param {Vector3} [v1] - The start point.
   * @param {Vector3} [v2] - The end point.
   */
  constructor(v1 = new Vector3(), v2 = new Vector3()) {
    super();
    this.isLineCurve3 = true;
    this.type = "LineCurve3";
    this.v1 = v1;
    this.v2 = v2;
  }
  /**
   * Returns a point on the line.
   *
   * @param {number} t - A interpolation factor representing a position on the line. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the line.
   */
  getPoint(t2, optionalTarget = new Vector3()) {
    const point = optionalTarget;
    if (t2 === 1) {
      point.copy(this.v2);
    } else {
      point.copy(this.v2).sub(this.v1);
      point.multiplyScalar(t2).add(this.v1);
    }
    return point;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(u3, optionalTarget) {
    return this.getPoint(u3, optionalTarget);
  }
  getTangent(t2, optionalTarget = new Vector3()) {
    return optionalTarget.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(u3, optionalTarget) {
    return this.getTangent(u3, optionalTarget);
  }
  copy(source) {
    super.copy(source);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    return this;
  }
};
var QuadraticBezierCurve = class extends Curve {
  /**
   * Constructs a new Quadratic Bezier curve.
   *
   * @param {Vector2} [v0] - The start point.
   * @param {Vector2} [v1] - The control point.
   * @param {Vector2} [v2] - The end point.
   */
  constructor(v0 = new Vector2(), v1 = new Vector2(), v2 = new Vector2()) {
    super();
    this.isQuadraticBezierCurve = true;
    this.type = "QuadraticBezierCurve";
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(t2, optionalTarget = new Vector2()) {
    const point = optionalTarget;
    const v0 = this.v0, v1 = this.v1, v2 = this.v2;
    point.set(
      QuadraticBezier(t2, v0.x, v1.x, v2.x),
      QuadraticBezier(t2, v0.y, v1.y, v2.y)
    );
    return point;
  }
  copy(source) {
    super.copy(source);
    this.v0.copy(source.v0);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v0 = this.v0.toArray();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v0.fromArray(json.v0);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    return this;
  }
};
var QuadraticBezierCurve3 = class extends Curve {
  /**
   * Constructs a new Quadratic Bezier curve.
   *
   * @param {Vector3} [v0] - The start point.
   * @param {Vector3} [v1] - The control point.
   * @param {Vector3} [v2] - The end point.
   */
  constructor(v0 = new Vector3(), v1 = new Vector3(), v2 = new Vector3()) {
    super();
    this.isQuadraticBezierCurve3 = true;
    this.type = "QuadraticBezierCurve3";
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the curve.
   */
  getPoint(t2, optionalTarget = new Vector3()) {
    const point = optionalTarget;
    const v0 = this.v0, v1 = this.v1, v2 = this.v2;
    point.set(
      QuadraticBezier(t2, v0.x, v1.x, v2.x),
      QuadraticBezier(t2, v0.y, v1.y, v2.y),
      QuadraticBezier(t2, v0.z, v1.z, v2.z)
    );
    return point;
  }
  copy(source) {
    super.copy(source);
    this.v0.copy(source.v0);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v0 = this.v0.toArray();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v0.fromArray(json.v0);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    return this;
  }
};
var SplineCurve = class extends Curve {
  /**
   * Constructs a new 2D spline curve.
   *
   * @param {Array<Vector2>} [points] -  An array of 2D points defining the curve.
   */
  constructor(points = []) {
    super();
    this.isSplineCurve = true;
    this.type = "SplineCurve";
    this.points = points;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(t2, optionalTarget = new Vector2()) {
    const point = optionalTarget;
    const points = this.points;
    const p2 = (points.length - 1) * t2;
    const intPoint = Math.floor(p2);
    const weight = p2 - intPoint;
    const p0 = points[intPoint === 0 ? intPoint : intPoint - 1];
    const p1 = points[intPoint];
    const p22 = points[intPoint > points.length - 2 ? points.length - 1 : intPoint + 1];
    const p3 = points[intPoint > points.length - 3 ? points.length - 1 : intPoint + 2];
    point.set(
      CatmullRom(weight, p0.x, p1.x, p22.x, p3.x),
      CatmullRom(weight, p0.y, p1.y, p22.y, p3.y)
    );
    return point;
  }
  copy(source) {
    super.copy(source);
    this.points = [];
    for (let i2 = 0, l2 = source.points.length; i2 < l2; i2++) {
      const point = source.points[i2];
      this.points.push(point.clone());
    }
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.points = [];
    for (let i2 = 0, l2 = this.points.length; i2 < l2; i2++) {
      const point = this.points[i2];
      data.points.push(point.toArray());
    }
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.points = [];
    for (let i2 = 0, l2 = json.points.length; i2 < l2; i2++) {
      const point = json.points[i2];
      this.points.push(new Vector2().fromArray(point));
    }
    return this;
  }
};
var Curves = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve,
  CatmullRomCurve3,
  CubicBezierCurve,
  CubicBezierCurve3,
  EllipseCurve,
  LineCurve,
  LineCurve3,
  QuadraticBezierCurve,
  QuadraticBezierCurve3,
  SplineCurve
});
var CurvePath = class extends Curve {
  /**
   * Constructs a new curve path.
   */
  constructor() {
    super();
    this.type = "CurvePath";
    this.curves = [];
    this.autoClose = false;
  }
  /**
   * Adds a curve to this curve path.
   *
   * @param {Curve} curve - The curve to add.
   */
  add(curve) {
    this.curves.push(curve);
  }
  /**
   * Adds a line curve to close the path.
   *
   * @return {CurvePath} A reference to this curve path.
   */
  closePath() {
    const startPoint = this.curves[0].getPoint(0);
    const endPoint = this.curves[this.curves.length - 1].getPoint(1);
    if (!startPoint.equals(endPoint)) {
      const lineType = startPoint.isVector2 === true ? "LineCurve" : "LineCurve3";
      this.curves.push(new Curves[lineType](endPoint, startPoint));
    }
    return this;
  }
  /**
   * This method returns a vector in 2D or 3D space (depending on the curve definitions)
   * for the given interpolation factor.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {?(Vector2|Vector3)} The position on the curve. It can be a 2D or 3D vector depending on the curve definition.
   */
  getPoint(t2, optionalTarget) {
    const d2 = t2 * this.getLength();
    const curveLengths = this.getCurveLengths();
    let i2 = 0;
    while (i2 < curveLengths.length) {
      if (curveLengths[i2] >= d2) {
        const diff = curveLengths[i2] - d2;
        const curve = this.curves[i2];
        const segmentLength = curve.getLength();
        const u3 = segmentLength === 0 ? 0 : 1 - diff / segmentLength;
        return curve.getPointAt(u3, optionalTarget);
      }
      i2++;
    }
    return null;
  }
  getLength() {
    const lens = this.getCurveLengths();
    return lens[lens.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true;
    this.cacheLengths = null;
    this.getCurveLengths();
  }
  /**
   * Returns list of cumulative curve lengths of the defined curves.
   *
   * @return {Array<number>} The curve lengths.
   */
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) {
      return this.cacheLengths;
    }
    const lengths = [];
    let sums = 0;
    for (let i2 = 0, l2 = this.curves.length; i2 < l2; i2++) {
      sums += this.curves[i2].getLength();
      lengths.push(sums);
    }
    this.cacheLengths = lengths;
    return lengths;
  }
  getSpacedPoints(divisions = 40) {
    const points = [];
    for (let i2 = 0; i2 <= divisions; i2++) {
      points.push(this.getPoint(i2 / divisions));
    }
    if (this.autoClose) {
      points.push(points[0]);
    }
    return points;
  }
  getPoints(divisions = 12) {
    const points = [];
    let last;
    for (let i2 = 0, curves = this.curves; i2 < curves.length; i2++) {
      const curve = curves[i2];
      const resolution = curve.isEllipseCurve ? divisions * 2 : curve.isLineCurve || curve.isLineCurve3 ? 1 : curve.isSplineCurve ? divisions * curve.points.length : divisions;
      const pts = curve.getPoints(resolution);
      for (let j2 = 0; j2 < pts.length; j2++) {
        const point = pts[j2];
        if (last && last.equals(point)) continue;
        points.push(point);
        last = point;
      }
    }
    if (this.autoClose && points.length > 1 && !points[points.length - 1].equals(points[0])) {
      points.push(points[0]);
    }
    return points;
  }
  copy(source) {
    super.copy(source);
    this.curves = [];
    for (let i2 = 0, l2 = source.curves.length; i2 < l2; i2++) {
      const curve = source.curves[i2];
      this.curves.push(curve.clone());
    }
    this.autoClose = source.autoClose;
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.autoClose = this.autoClose;
    data.curves = [];
    for (let i2 = 0, l2 = this.curves.length; i2 < l2; i2++) {
      const curve = this.curves[i2];
      data.curves.push(curve.toJSON());
    }
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.autoClose = json.autoClose;
    this.curves = [];
    for (let i2 = 0, l2 = json.curves.length; i2 < l2; i2++) {
      const curve = json.curves[i2];
      this.curves.push(new Curves[curve.type]().fromJSON(curve));
    }
    return this;
  }
};
var Path = class extends CurvePath {
  /**
   * Constructs a new path.
   *
   * @param {Array<Vector2>} [points] - An array of 2D points defining the path.
   */
  constructor(points) {
    super();
    this.type = "Path";
    this.currentPoint = new Vector2();
    if (points) {
      this.setFromPoints(points);
    }
  }
  /**
   * Creates a path from the given list of points. The points are added
   * to the path as instances of {@link LineCurve}.
   *
   * @param {Array<Vector2>} points - An array of 2D points.
   * @return {Path} A reference to this path.
   */
  setFromPoints(points) {
    this.moveTo(points[0].x, points[0].y);
    for (let i2 = 1, l2 = points.length; i2 < l2; i2++) {
      this.lineTo(points[i2].x, points[i2].y);
    }
    return this;
  }
  /**
   * Moves {@link Path#currentPoint} to the given point.
   *
   * @param {number} x - The x coordinate.
   * @param {number} y - The y coordinate.
   * @return {Path} A reference to this path.
   */
  moveTo(x2, y2) {
    this.currentPoint.set(x2, y2);
    return this;
  }
  /**
   * Adds an instance of {@link LineCurve} to the path by connecting
   * the current point with the given one.
   *
   * @param {number} x - The x coordinate of the end point.
   * @param {number} y - The y coordinate of the end point.
   * @return {Path} A reference to this path.
   */
  lineTo(x2, y2) {
    const curve = new LineCurve(this.currentPoint.clone(), new Vector2(x2, y2));
    this.curves.push(curve);
    this.currentPoint.set(x2, y2);
    return this;
  }
  /**
   * Adds an instance of {@link QuadraticBezierCurve} to the path by connecting
   * the current point with the given one.
   *
   * @param {number} aCPx - The x coordinate of the control point.
   * @param {number} aCPy - The y coordinate of the control point.
   * @param {number} aX - The x coordinate of the end point.
   * @param {number} aY - The y coordinate of the end point.
   * @return {Path} A reference to this path.
   */
  quadraticCurveTo(aCPx, aCPy, aX, aY) {
    const curve = new QuadraticBezierCurve(
      this.currentPoint.clone(),
      new Vector2(aCPx, aCPy),
      new Vector2(aX, aY)
    );
    this.curves.push(curve);
    this.currentPoint.set(aX, aY);
    return this;
  }
  /**
   * Adds an instance of {@link CubicBezierCurve} to the path by connecting
   * the current point with the given one.
   *
   * @param {number} aCP1x - The x coordinate of the first control point.
   * @param {number} aCP1y - The y coordinate of the first control point.
   * @param {number} aCP2x - The x coordinate of the second control point.
   * @param {number} aCP2y - The y coordinate of the second control point.
   * @param {number} aX - The x coordinate of the end point.
   * @param {number} aY - The y coordinate of the end point.
   * @return {Path} A reference to this path.
   */
  bezierCurveTo(aCP1x, aCP1y, aCP2x, aCP2y, aX, aY) {
    const curve = new CubicBezierCurve(
      this.currentPoint.clone(),
      new Vector2(aCP1x, aCP1y),
      new Vector2(aCP2x, aCP2y),
      new Vector2(aX, aY)
    );
    this.curves.push(curve);
    this.currentPoint.set(aX, aY);
    return this;
  }
  /**
   * Adds an instance of {@link SplineCurve} to the path by connecting
   * the current point with the given list of points.
   *
   * @param {Array<Vector2>} pts - An array of points in 2D space.
   * @return {Path} A reference to this path.
   */
  splineThru(pts) {
    const npts = [this.currentPoint.clone()].concat(pts);
    const curve = new SplineCurve(npts);
    this.curves.push(curve);
    this.currentPoint.copy(pts[pts.length - 1]);
    return this;
  }
  /**
   * Adds an arc as an instance of {@link EllipseCurve} to the path, positioned relative
   * to the current point.
   *
   * @param {number} [aX=0] - The x coordinate of the center of the arc offsetted from the previous curve.
   * @param {number} [aY=0] - The y coordinate of the center of the arc offsetted from the previous curve.
   * @param {number} [aRadius=1] - The radius of the arc.
   * @param {number} [aStartAngle=0] - The start angle in radians.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle in radians.
   * @param {boolean} [aClockwise=false] - Whether to sweep the arc clockwise or not.
   * @return {Path} A reference to this path.
   */
  arc(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
    const x0 = this.currentPoint.x;
    const y0 = this.currentPoint.y;
    this.absarc(
      aX + x0,
      aY + y0,
      aRadius,
      aStartAngle,
      aEndAngle,
      aClockwise
    );
    return this;
  }
  /**
   * Adds an absolutely positioned arc as an instance of {@link EllipseCurve} to the path.
   *
   * @param {number} [aX=0] - The x coordinate of the center of the arc.
   * @param {number} [aY=0] - The y coordinate of the center of the arc.
   * @param {number} [aRadius=1] - The radius of the arc.
   * @param {number} [aStartAngle=0] - The start angle in radians.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle in radians.
   * @param {boolean} [aClockwise=false] - Whether to sweep the arc clockwise or not.
   * @return {Path} A reference to this path.
   */
  absarc(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
    this.absellipse(aX, aY, aRadius, aRadius, aStartAngle, aEndAngle, aClockwise);
    return this;
  }
  /**
   * Adds an ellipse as an instance of {@link EllipseCurve} to the path, positioned relative
   * to the current point
   *
   * @param {number} [aX=0] - The x coordinate of the center of the ellipse offsetted from the previous curve.
   * @param {number} [aY=0] - The y coordinate of the center of the ellipse offsetted from the previous curve.
   * @param {number} [xRadius=1] - The radius of the ellipse in the x axis.
   * @param {number} [yRadius=1] - The radius of the ellipse in the y axis.
   * @param {number} [aStartAngle=0] - The start angle in radians.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle in radians.
   * @param {boolean} [aClockwise=false] - Whether to sweep the ellipse clockwise or not.
   * @param {number} [aRotation=0] - The rotation angle of the ellipse in radians, counterclockwise from the positive X axis.
   * @return {Path} A reference to this path.
   */
  ellipse(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation) {
    const x0 = this.currentPoint.x;
    const y0 = this.currentPoint.y;
    this.absellipse(aX + x0, aY + y0, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation);
    return this;
  }
  /**
   * Adds an absolutely positioned ellipse as an instance of {@link EllipseCurve} to the path.
   *
   * @param {number} [aX=0] - The x coordinate of the absolute center of the ellipse.
   * @param {number} [aY=0] - The y coordinate of the absolute center of the ellipse.
   * @param {number} [xRadius=1] - The radius of the ellipse in the x axis.
   * @param {number} [yRadius=1] - The radius of the ellipse in the y axis.
   * @param {number} [aStartAngle=0] - The start angle in radians.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle in radians.
   * @param {boolean} [aClockwise=false] - Whether to sweep the ellipse clockwise or not.
   * @param {number} [aRotation=0] - The rotation angle of the ellipse in radians, counterclockwise from the positive X axis.
   * @return {Path} A reference to this path.
   */
  absellipse(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation) {
    const curve = new EllipseCurve(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation);
    if (this.curves.length > 0) {
      const firstPoint = curve.getPoint(0);
      if (!firstPoint.equals(this.currentPoint)) {
        this.lineTo(firstPoint.x, firstPoint.y);
      }
    }
    this.curves.push(curve);
    const lastPoint = curve.getPoint(1);
    this.currentPoint.copy(lastPoint);
    return this;
  }
  copy(source) {
    super.copy(source);
    this.currentPoint.copy(source.currentPoint);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.currentPoint = this.currentPoint.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.currentPoint.fromArray(json.currentPoint);
    return this;
  }
};
var Shape = class extends Path {
  /**
   * Constructs a new shape.
   *
   * @param {Array<Vector2>} [points] - An array of 2D points defining the shape.
   */
  constructor(points) {
    super(points);
    this.uuid = generateUUID();
    this.type = "Shape";
    this.holes = [];
  }
  /**
   * Returns an array representing each contour of the holes
   * as a list of 2D points.
   *
   * @param {number} divisions - The fineness of the result.
   * @return {Array<Array<Vector2>>} The holes as a series of 2D points.
   */
  getPointsHoles(divisions) {
    const holesPts = [];
    for (let i2 = 0, l2 = this.holes.length; i2 < l2; i2++) {
      holesPts[i2] = this.holes[i2].getPoints(divisions);
    }
    return holesPts;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  /**
   * Returns an object that holds contour data for the shape and its holes as
   * arrays of 2D points.
   *
   * @param {number} divisions - The fineness of the result.
   * @return {{shape:Array<Vector2>,holes:Array<Array<Vector2>>}} An object with contour data.
   */
  extractPoints(divisions) {
    return {
      shape: this.getPoints(divisions),
      holes: this.getPointsHoles(divisions)
    };
  }
  copy(source) {
    super.copy(source);
    this.holes = [];
    for (let i2 = 0, l2 = source.holes.length; i2 < l2; i2++) {
      const hole = source.holes[i2];
      this.holes.push(hole.clone());
    }
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.uuid = this.uuid;
    data.holes = [];
    for (let i2 = 0, l2 = this.holes.length; i2 < l2; i2++) {
      const hole = this.holes[i2];
      data.holes.push(hole.toJSON());
    }
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.uuid = json.uuid;
    this.holes = [];
    for (let i2 = 0, l2 = json.holes.length; i2 < l2; i2++) {
      const hole = json.holes[i2];
      this.holes.push(new Path().fromJSON(hole));
    }
    return this;
  }
};
function earcut(data, holeIndices, dim = 2) {
  const hasHoles = holeIndices && holeIndices.length;
  const outerLen = hasHoles ? holeIndices[0] * dim : data.length;
  let outerNode = linkedList(data, 0, outerLen, dim, true);
  const triangles = [];
  if (!outerNode || outerNode.next === outerNode.prev) return triangles;
  let minX, minY, invSize;
  if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
  if (data.length > 80 * dim) {
    minX = data[0];
    minY = data[1];
    let maxX = minX;
    let maxY = minY;
    for (let i2 = dim; i2 < outerLen; i2 += dim) {
      const x2 = data[i2];
      const y2 = data[i2 + 1];
      if (x2 < minX) minX = x2;
      if (y2 < minY) minY = y2;
      if (x2 > maxX) maxX = x2;
      if (y2 > maxY) maxY = y2;
    }
    invSize = Math.max(maxX - minX, maxY - minY);
    invSize = invSize !== 0 ? 32767 / invSize : 0;
  }
  earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);
  return triangles;
}
function linkedList(data, start, end, dim, clockwise) {
  let last;
  if (clockwise === signedArea(data, start, end, dim) > 0) {
    for (let i2 = start; i2 < end; i2 += dim) last = insertNode(i2 / dim | 0, data[i2], data[i2 + 1], last);
  } else {
    for (let i2 = end - dim; i2 >= start; i2 -= dim) last = insertNode(i2 / dim | 0, data[i2], data[i2 + 1], last);
  }
  if (last && equals(last, last.next)) {
    removeNode(last);
    last = last.next;
  }
  return last;
}
function filterPoints(start, end) {
  if (!start) return start;
  if (!end) end = start;
  let p2 = start, again;
  do {
    again = false;
    if (!p2.steiner && (equals(p2, p2.next) || area(p2.prev, p2, p2.next) === 0)) {
      removeNode(p2);
      p2 = end = p2.prev;
      if (p2 === p2.next) break;
      again = true;
    } else {
      p2 = p2.next;
    }
  } while (again || p2 !== end);
  return end;
}
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
  if (!ear) return;
  if (!pass && invSize) indexCurve(ear, minX, minY, invSize);
  let stop = ear;
  while (ear.prev !== ear.next) {
    const prev = ear.prev;
    const next = ear.next;
    if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
      triangles.push(prev.i, ear.i, next.i);
      removeNode(ear);
      ear = next.next;
      stop = next.next;
      continue;
    }
    ear = next;
    if (ear === stop) {
      if (!pass) {
        earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
      } else if (pass === 1) {
        ear = cureLocalIntersections(filterPoints(ear), triangles);
        earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
      } else if (pass === 2) {
        splitEarcut(ear, triangles, dim, minX, minY, invSize);
      }
      break;
    }
  }
}
function isEar(ear) {
  const a2 = ear.prev, b2 = ear, c2 = ear.next;
  if (area(a2, b2, c2) >= 0) return false;
  const ax = a2.x, bx = b2.x, cx = c2.x, ay = a2.y, by = b2.y, cy = c2.y;
  const x0 = Math.min(ax, bx, cx), y0 = Math.min(ay, by, cy), x1 = Math.max(ax, bx, cx), y1 = Math.max(ay, by, cy);
  let p2 = c2.next;
  while (p2 !== a2) {
    if (p2.x >= x0 && p2.x <= x1 && p2.y >= y0 && p2.y <= y1 && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, p2.x, p2.y) && area(p2.prev, p2, p2.next) >= 0) return false;
    p2 = p2.next;
  }
  return true;
}
function isEarHashed(ear, minX, minY, invSize) {
  const a2 = ear.prev, b2 = ear, c2 = ear.next;
  if (area(a2, b2, c2) >= 0) return false;
  const ax = a2.x, bx = b2.x, cx = c2.x, ay = a2.y, by = b2.y, cy = c2.y;
  const x0 = Math.min(ax, bx, cx), y0 = Math.min(ay, by, cy), x1 = Math.max(ax, bx, cx), y1 = Math.max(ay, by, cy);
  const minZ = zOrder(x0, y0, minX, minY, invSize), maxZ = zOrder(x1, y1, minX, minY, invSize);
  let p2 = ear.prevZ, n2 = ear.nextZ;
  while (p2 && p2.z >= minZ && n2 && n2.z <= maxZ) {
    if (p2.x >= x0 && p2.x <= x1 && p2.y >= y0 && p2.y <= y1 && p2 !== a2 && p2 !== c2 && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, p2.x, p2.y) && area(p2.prev, p2, p2.next) >= 0) return false;
    p2 = p2.prevZ;
    if (n2.x >= x0 && n2.x <= x1 && n2.y >= y0 && n2.y <= y1 && n2 !== a2 && n2 !== c2 && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, n2.x, n2.y) && area(n2.prev, n2, n2.next) >= 0) return false;
    n2 = n2.nextZ;
  }
  while (p2 && p2.z >= minZ) {
    if (p2.x >= x0 && p2.x <= x1 && p2.y >= y0 && p2.y <= y1 && p2 !== a2 && p2 !== c2 && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, p2.x, p2.y) && area(p2.prev, p2, p2.next) >= 0) return false;
    p2 = p2.prevZ;
  }
  while (n2 && n2.z <= maxZ) {
    if (n2.x >= x0 && n2.x <= x1 && n2.y >= y0 && n2.y <= y1 && n2 !== a2 && n2 !== c2 && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, n2.x, n2.y) && area(n2.prev, n2, n2.next) >= 0) return false;
    n2 = n2.nextZ;
  }
  return true;
}
function cureLocalIntersections(start, triangles) {
  let p2 = start;
  do {
    const a2 = p2.prev, b2 = p2.next.next;
    if (!equals(a2, b2) && intersects(a2, p2, p2.next, b2) && locallyInside(a2, b2) && locallyInside(b2, a2)) {
      triangles.push(a2.i, p2.i, b2.i);
      removeNode(p2);
      removeNode(p2.next);
      p2 = start = b2;
    }
    p2 = p2.next;
  } while (p2 !== start);
  return filterPoints(p2);
}
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
  let a2 = start;
  do {
    let b2 = a2.next.next;
    while (b2 !== a2.prev) {
      if (a2.i !== b2.i && isValidDiagonal(a2, b2)) {
        let c2 = splitPolygon(a2, b2);
        a2 = filterPoints(a2, a2.next);
        c2 = filterPoints(c2, c2.next);
        earcutLinked(a2, triangles, dim, minX, minY, invSize, 0);
        earcutLinked(c2, triangles, dim, minX, minY, invSize, 0);
        return;
      }
      b2 = b2.next;
    }
    a2 = a2.next;
  } while (a2 !== start);
}
function eliminateHoles(data, holeIndices, outerNode, dim) {
  const queue = [];
  for (let i2 = 0, len = holeIndices.length; i2 < len; i2++) {
    const start = holeIndices[i2] * dim;
    const end = i2 < len - 1 ? holeIndices[i2 + 1] * dim : data.length;
    const list = linkedList(data, start, end, dim, false);
    if (list === list.next) list.steiner = true;
    queue.push(getLeftmost(list));
  }
  queue.sort(compareXYSlope);
  for (let i2 = 0; i2 < queue.length; i2++) {
    outerNode = eliminateHole(queue[i2], outerNode);
  }
  return outerNode;
}
function compareXYSlope(a2, b2) {
  let result = a2.x - b2.x;
  if (result === 0) {
    result = a2.y - b2.y;
    if (result === 0) {
      const aSlope = (a2.next.y - a2.y) / (a2.next.x - a2.x);
      const bSlope = (b2.next.y - b2.y) / (b2.next.x - b2.x);
      result = aSlope - bSlope;
    }
  }
  return result;
}
function eliminateHole(hole, outerNode) {
  const bridge = findHoleBridge(hole, outerNode);
  if (!bridge) {
    return outerNode;
  }
  const bridgeReverse = splitPolygon(bridge, hole);
  filterPoints(bridgeReverse, bridgeReverse.next);
  return filterPoints(bridge, bridge.next);
}
function findHoleBridge(hole, outerNode) {
  let p2 = outerNode;
  const hx = hole.x;
  const hy = hole.y;
  let qx = -Infinity;
  let m2;
  if (equals(hole, p2)) return p2;
  do {
    if (equals(hole, p2.next)) return p2.next;
    else if (hy <= p2.y && hy >= p2.next.y && p2.next.y !== p2.y) {
      const x2 = p2.x + (hy - p2.y) * (p2.next.x - p2.x) / (p2.next.y - p2.y);
      if (x2 <= hx && x2 > qx) {
        qx = x2;
        m2 = p2.x < p2.next.x ? p2 : p2.next;
        if (x2 === hx) return m2;
      }
    }
    p2 = p2.next;
  } while (p2 !== outerNode);
  if (!m2) return null;
  const stop = m2;
  const mx = m2.x;
  const my = m2.y;
  let tanMin = Infinity;
  p2 = m2;
  do {
    if (hx >= p2.x && p2.x >= mx && hx !== p2.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p2.x, p2.y)) {
      const tan = Math.abs(hy - p2.y) / (hx - p2.x);
      if (locallyInside(p2, hole) && (tan < tanMin || tan === tanMin && (p2.x > m2.x || p2.x === m2.x && sectorContainsSector(m2, p2)))) {
        m2 = p2;
        tanMin = tan;
      }
    }
    p2 = p2.next;
  } while (p2 !== stop);
  return m2;
}
function sectorContainsSector(m2, p2) {
  return area(m2.prev, m2, p2.prev) < 0 && area(p2.next, m2, m2.next) < 0;
}
function indexCurve(start, minX, minY, invSize) {
  let p2 = start;
  do {
    if (p2.z === 0) p2.z = zOrder(p2.x, p2.y, minX, minY, invSize);
    p2.prevZ = p2.prev;
    p2.nextZ = p2.next;
    p2 = p2.next;
  } while (p2 !== start);
  p2.prevZ.nextZ = null;
  p2.prevZ = null;
  sortLinked(p2);
}
function sortLinked(list) {
  let numMerges;
  let inSize = 1;
  do {
    let p2 = list;
    let e2;
    list = null;
    let tail = null;
    numMerges = 0;
    while (p2) {
      numMerges++;
      let q2 = p2;
      let pSize = 0;
      for (let i2 = 0; i2 < inSize; i2++) {
        pSize++;
        q2 = q2.nextZ;
        if (!q2) break;
      }
      let qSize = inSize;
      while (pSize > 0 || qSize > 0 && q2) {
        if (pSize !== 0 && (qSize === 0 || !q2 || p2.z <= q2.z)) {
          e2 = p2;
          p2 = p2.nextZ;
          pSize--;
        } else {
          e2 = q2;
          q2 = q2.nextZ;
          qSize--;
        }
        if (tail) tail.nextZ = e2;
        else list = e2;
        e2.prevZ = tail;
        tail = e2;
      }
      p2 = q2;
    }
    tail.nextZ = null;
    inSize *= 2;
  } while (numMerges > 1);
  return list;
}
function zOrder(x2, y2, minX, minY, invSize) {
  x2 = (x2 - minX) * invSize | 0;
  y2 = (y2 - minY) * invSize | 0;
  x2 = (x2 | x2 << 8) & 16711935;
  x2 = (x2 | x2 << 4) & 252645135;
  x2 = (x2 | x2 << 2) & 858993459;
  x2 = (x2 | x2 << 1) & 1431655765;
  y2 = (y2 | y2 << 8) & 16711935;
  y2 = (y2 | y2 << 4) & 252645135;
  y2 = (y2 | y2 << 2) & 858993459;
  y2 = (y2 | y2 << 1) & 1431655765;
  return x2 | y2 << 1;
}
function getLeftmost(start) {
  let p2 = start, leftmost = start;
  do {
    if (p2.x < leftmost.x || p2.x === leftmost.x && p2.y < leftmost.y) leftmost = p2;
    p2 = p2.next;
  } while (p2 !== start);
  return leftmost;
}
function pointInTriangle(ax, ay, bx, by, cx, cy, px2, py2) {
  return (cx - px2) * (ay - py2) >= (ax - px2) * (cy - py2) && (ax - px2) * (by - py2) >= (bx - px2) * (ay - py2) && (bx - px2) * (cy - py2) >= (cx - px2) * (by - py2);
}
function pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, px2, py2) {
  return !(ax === px2 && ay === py2) && pointInTriangle(ax, ay, bx, by, cx, cy, px2, py2);
}
function isValidDiagonal(a2, b2) {
  return a2.next.i !== b2.i && a2.prev.i !== b2.i && !intersectsPolygon(a2, b2) && // doesn't intersect other edges
  (locallyInside(a2, b2) && locallyInside(b2, a2) && middleInside(a2, b2) && // locally visible
  (area(a2.prev, a2, b2.prev) || area(a2, b2.prev, b2)) || // does not create opposite-facing sectors
  equals(a2, b2) && area(a2.prev, a2, a2.next) > 0 && area(b2.prev, b2, b2.next) > 0);
}
function area(p2, q2, r2) {
  return (q2.y - p2.y) * (r2.x - q2.x) - (q2.x - p2.x) * (r2.y - q2.y);
}
function equals(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}
function intersects(p1, q1, p2, q2) {
  const o1 = sign(area(p1, q1, p2));
  const o2 = sign(area(p1, q1, q2));
  const o3 = sign(area(p2, q2, p1));
  const o4 = sign(area(p2, q2, q1));
  if (o1 !== o2 && o3 !== o4) return true;
  if (o1 === 0 && onSegment(p1, p2, q1)) return true;
  if (o2 === 0 && onSegment(p1, q2, q1)) return true;
  if (o3 === 0 && onSegment(p2, p1, q2)) return true;
  if (o4 === 0 && onSegment(p2, q1, q2)) return true;
  return false;
}
function onSegment(p2, q2, r2) {
  return q2.x <= Math.max(p2.x, r2.x) && q2.x >= Math.min(p2.x, r2.x) && q2.y <= Math.max(p2.y, r2.y) && q2.y >= Math.min(p2.y, r2.y);
}
function sign(num) {
  return num > 0 ? 1 : num < 0 ? -1 : 0;
}
function intersectsPolygon(a2, b2) {
  let p2 = a2;
  do {
    if (p2.i !== a2.i && p2.next.i !== a2.i && p2.i !== b2.i && p2.next.i !== b2.i && intersects(p2, p2.next, a2, b2)) return true;
    p2 = p2.next;
  } while (p2 !== a2);
  return false;
}
function locallyInside(a2, b2) {
  return area(a2.prev, a2, a2.next) < 0 ? area(a2, b2, a2.next) >= 0 && area(a2, a2.prev, b2) >= 0 : area(a2, b2, a2.prev) < 0 || area(a2, a2.next, b2) < 0;
}
function middleInside(a2, b2) {
  let p2 = a2;
  let inside = false;
  const px2 = (a2.x + b2.x) / 2;
  const py2 = (a2.y + b2.y) / 2;
  do {
    if (p2.y > py2 !== p2.next.y > py2 && p2.next.y !== p2.y && px2 < (p2.next.x - p2.x) * (py2 - p2.y) / (p2.next.y - p2.y) + p2.x)
      inside = !inside;
    p2 = p2.next;
  } while (p2 !== a2);
  return inside;
}
function splitPolygon(a2, b2) {
  const a22 = createNode(a2.i, a2.x, a2.y), b22 = createNode(b2.i, b2.x, b2.y), an = a2.next, bp = b2.prev;
  a2.next = b2;
  b2.prev = a2;
  a22.next = an;
  an.prev = a22;
  b22.next = a22;
  a22.prev = b22;
  bp.next = b22;
  b22.prev = bp;
  return b22;
}
function insertNode(i2, x2, y2, last) {
  const p2 = createNode(i2, x2, y2);
  if (!last) {
    p2.prev = p2;
    p2.next = p2;
  } else {
    p2.next = last.next;
    p2.prev = last;
    last.next.prev = p2;
    last.next = p2;
  }
  return p2;
}
function removeNode(p2) {
  p2.next.prev = p2.prev;
  p2.prev.next = p2.next;
  if (p2.prevZ) p2.prevZ.nextZ = p2.nextZ;
  if (p2.nextZ) p2.nextZ.prevZ = p2.prevZ;
}
function createNode(i2, x2, y2) {
  return {
    i: i2,
    // vertex index in coordinates array
    x: x2,
    y: y2,
    // vertex coordinates
    prev: null,
    // previous and next vertex nodes in a polygon ring
    next: null,
    z: 0,
    // z-order curve value
    prevZ: null,
    // previous and next nodes in z-order
    nextZ: null,
    steiner: false
    // indicates whether this is a steiner point
  };
}
function signedArea(data, start, end, dim) {
  let sum = 0;
  for (let i2 = start, j2 = end - dim; i2 < end; i2 += dim) {
    sum += (data[j2] - data[i2]) * (data[i2 + 1] + data[j2 + 1]);
    j2 = i2;
  }
  return sum;
}
var Earcut = class {
  /**
   * Triangulates the given shape definition by returning an array of triangles.
   *
   * @param {Array<number>} data - An array with 2D points.
   * @param {Array<number>} holeIndices - An array with indices defining holes.
   * @param {number} [dim=2] - The number of coordinates per vertex in the input array.
   * @return {Array<number>} An array representing the triangulated faces. Each face is defined by three consecutive numbers
   * representing vertex indices.
   */
  static triangulate(data, holeIndices, dim = 2) {
    return earcut(data, holeIndices, dim);
  }
};
var ShapeUtils = class _ShapeUtils {
  /**
   * Calculate area of a ( 2D ) contour polygon.
   *
   * @param {Array<Vector2>} contour - An array of 2D points.
   * @return {number} The area.
   */
  static area(contour) {
    const n2 = contour.length;
    let a2 = 0;
    for (let p2 = n2 - 1, q2 = 0; q2 < n2; p2 = q2++) {
      a2 += contour[p2].x * contour[q2].y - contour[q2].x * contour[p2].y;
    }
    return a2 * 0.5;
  }
  /**
   * Returns `true` if the given contour uses a clockwise winding order.
   *
   * @param {Array<Vector2>} pts - An array of 2D points defining a polygon.
   * @return {boolean} Whether the given contour uses a clockwise winding order or not.
   */
  static isClockWise(pts) {
    return _ShapeUtils.area(pts) < 0;
  }
  /**
   * Triangulates the given shape definition.
   *
   * @param {Array<Vector2>} contour - An array of 2D points defining the contour.
   * @param {Array<Array<Vector2>>} holes - An array that holds arrays of 2D points defining the holes.
   * @return {Array<Array<number>>} An array that holds for each face definition an array with three indices.
   */
  static triangulateShape(contour, holes) {
    const vertices = [];
    const holeIndices = [];
    const faces = [];
    removeDupEndPts(contour);
    addContour(vertices, contour);
    let holeIndex = contour.length;
    holes.forEach(removeDupEndPts);
    for (let i2 = 0; i2 < holes.length; i2++) {
      holeIndices.push(holeIndex);
      holeIndex += holes[i2].length;
      addContour(vertices, holes[i2]);
    }
    const triangles = Earcut.triangulate(vertices, holeIndices);
    for (let i2 = 0; i2 < triangles.length; i2 += 3) {
      faces.push(triangles.slice(i2, i2 + 3));
    }
    return faces;
  }
};
function removeDupEndPts(points) {
  const l2 = points.length;
  if (l2 > 2 && points[l2 - 1].equals(points[0])) {
    points.pop();
  }
}
function addContour(vertices, contour) {
  for (let i2 = 0; i2 < contour.length; i2++) {
    vertices.push(contour[i2].x);
    vertices.push(contour[i2].y);
  }
}
var ExtrudeGeometry = class _ExtrudeGeometry extends BufferGeometry {
  /**
   * Constructs a new extrude geometry.
   *
   * @param {Shape|Array<Shape>} [shapes] - A shape or an array of shapes.
   * @param {ExtrudeGeometry~Options} [options] - The extrude settings.
   */
  constructor(shapes = new Shape([new Vector2(0.5, 0.5), new Vector2(-0.5, 0.5), new Vector2(-0.5, -0.5), new Vector2(0.5, -0.5)]), options = {}) {
    super();
    this.type = "ExtrudeGeometry";
    this.parameters = {
      shapes,
      options
    };
    shapes = Array.isArray(shapes) ? shapes : [shapes];
    const scope = this;
    const verticesArray = [];
    const uvArray = [];
    for (let i2 = 0, l2 = shapes.length; i2 < l2; i2++) {
      const shape = shapes[i2];
      addShape(shape);
    }
    this.setAttribute("position", new Float32BufferAttribute(verticesArray, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvArray, 2));
    this.computeVertexNormals();
    function addShape(shape) {
      const placeholder2 = [];
      const curveSegments = options.curveSegments !== void 0 ? options.curveSegments : 12;
      const steps = options.steps !== void 0 ? options.steps : 1;
      const depth = options.depth !== void 0 ? options.depth : 1;
      let bevelEnabled = options.bevelEnabled !== void 0 ? options.bevelEnabled : true;
      let bevelThickness = options.bevelThickness !== void 0 ? options.bevelThickness : 0.2;
      let bevelSize = options.bevelSize !== void 0 ? options.bevelSize : bevelThickness - 0.1;
      let bevelOffset = options.bevelOffset !== void 0 ? options.bevelOffset : 0;
      let bevelSegments = options.bevelSegments !== void 0 ? options.bevelSegments : 3;
      const extrudePath = options.extrudePath;
      const uvgen = options.UVGenerator !== void 0 ? options.UVGenerator : WorldUVGenerator;
      let extrudePts, extrudeByPath = false;
      let splineTube, binormal, normal, position2;
      if (extrudePath) {
        extrudePts = extrudePath.getSpacedPoints(steps);
        extrudeByPath = true;
        bevelEnabled = false;
        splineTube = extrudePath.computeFrenetFrames(steps, false);
        binormal = new Vector3();
        normal = new Vector3();
        position2 = new Vector3();
      }
      if (!bevelEnabled) {
        bevelSegments = 0;
        bevelThickness = 0;
        bevelSize = 0;
        bevelOffset = 0;
      }
      const shapePoints = shape.extractPoints(curveSegments);
      let vertices = shapePoints.shape;
      const holes = shapePoints.holes;
      const reverse = !ShapeUtils.isClockWise(vertices);
      if (reverse) {
        vertices = vertices.reverse();
        for (let h2 = 0, hl = holes.length; h2 < hl; h2++) {
          const ahole = holes[h2];
          if (ShapeUtils.isClockWise(ahole)) {
            holes[h2] = ahole.reverse();
          }
        }
      }
      function mergeOverlappingPoints(points) {
        const THRESHOLD = 1e-10;
        const THRESHOLD_SQ = THRESHOLD * THRESHOLD;
        let prevPos = points[0];
        for (let i2 = 1; i2 <= points.length; i2++) {
          const currentIndex = i2 % points.length;
          const currentPos = points[currentIndex];
          const dx = currentPos.x - prevPos.x;
          const dy = currentPos.y - prevPos.y;
          const distSq = dx * dx + dy * dy;
          const scalingFactorSqrt = Math.max(
            Math.abs(currentPos.x),
            Math.abs(currentPos.y),
            Math.abs(prevPos.x),
            Math.abs(prevPos.y)
          );
          const thresholdSqScaled = THRESHOLD_SQ * scalingFactorSqrt * scalingFactorSqrt;
          if (distSq <= thresholdSqScaled) {
            points.splice(currentIndex, 1);
            i2--;
            continue;
          }
          prevPos = currentPos;
        }
      }
      mergeOverlappingPoints(vertices);
      holes.forEach(mergeOverlappingPoints);
      const numHoles = holes.length;
      const contour = vertices;
      for (let h2 = 0; h2 < numHoles; h2++) {
        const ahole = holes[h2];
        vertices = vertices.concat(ahole);
      }
      function scalePt2(pt, vec, size) {
        if (!vec) error("ExtrudeGeometry: vec does not exist");
        return pt.clone().addScaledVector(vec, size);
      }
      const vlen = vertices.length;
      function getBevelVec(inPt, inPrev, inNext) {
        let v_trans_x, v_trans_y, shrink_by;
        const v_prev_x = inPt.x - inPrev.x, v_prev_y = inPt.y - inPrev.y;
        const v_next_x = inNext.x - inPt.x, v_next_y = inNext.y - inPt.y;
        const v_prev_lensq = v_prev_x * v_prev_x + v_prev_y * v_prev_y;
        const collinear0 = v_prev_x * v_next_y - v_prev_y * v_next_x;
        if (Math.abs(collinear0) > Number.EPSILON) {
          const v_prev_len = Math.sqrt(v_prev_lensq);
          const v_next_len = Math.sqrt(v_next_x * v_next_x + v_next_y * v_next_y);
          const ptPrevShift_x = inPrev.x - v_prev_y / v_prev_len;
          const ptPrevShift_y = inPrev.y + v_prev_x / v_prev_len;
          const ptNextShift_x = inNext.x - v_next_y / v_next_len;
          const ptNextShift_y = inNext.y + v_next_x / v_next_len;
          const sf = ((ptNextShift_x - ptPrevShift_x) * v_next_y - (ptNextShift_y - ptPrevShift_y) * v_next_x) / (v_prev_x * v_next_y - v_prev_y * v_next_x);
          v_trans_x = ptPrevShift_x + v_prev_x * sf - inPt.x;
          v_trans_y = ptPrevShift_y + v_prev_y * sf - inPt.y;
          const v_trans_lensq = v_trans_x * v_trans_x + v_trans_y * v_trans_y;
          if (v_trans_lensq <= 2) {
            return new Vector2(v_trans_x, v_trans_y);
          } else {
            shrink_by = Math.sqrt(v_trans_lensq / 2);
          }
        } else {
          let direction_eq = false;
          if (v_prev_x > Number.EPSILON) {
            if (v_next_x > Number.EPSILON) {
              direction_eq = true;
            }
          } else {
            if (v_prev_x < -Number.EPSILON) {
              if (v_next_x < -Number.EPSILON) {
                direction_eq = true;
              }
            } else {
              if (Math.sign(v_prev_y) === Math.sign(v_next_y)) {
                direction_eq = true;
              }
            }
          }
          if (direction_eq) {
            v_trans_x = -v_prev_y;
            v_trans_y = v_prev_x;
            shrink_by = Math.sqrt(v_prev_lensq);
          } else {
            v_trans_x = v_prev_x;
            v_trans_y = v_prev_y;
            shrink_by = Math.sqrt(v_prev_lensq / 2);
          }
        }
        return new Vector2(v_trans_x / shrink_by, v_trans_y / shrink_by);
      }
      const contourMovements = [];
      for (let i2 = 0, il = contour.length, j2 = il - 1, k2 = i2 + 1; i2 < il; i2++, j2++, k2++) {
        if (j2 === il) j2 = 0;
        if (k2 === il) k2 = 0;
        contourMovements[i2] = getBevelVec(contour[i2], contour[j2], contour[k2]);
      }
      const holesMovements = [];
      let oneHoleMovements, verticesMovements = contourMovements.concat();
      for (let h2 = 0, hl = numHoles; h2 < hl; h2++) {
        const ahole = holes[h2];
        oneHoleMovements = [];
        for (let i2 = 0, il = ahole.length, j2 = il - 1, k2 = i2 + 1; i2 < il; i2++, j2++, k2++) {
          if (j2 === il) j2 = 0;
          if (k2 === il) k2 = 0;
          oneHoleMovements[i2] = getBevelVec(ahole[i2], ahole[j2], ahole[k2]);
        }
        holesMovements.push(oneHoleMovements);
        verticesMovements = verticesMovements.concat(oneHoleMovements);
      }
      let faces;
      if (bevelSegments === 0) {
        faces = ShapeUtils.triangulateShape(contour, holes);
      } else {
        const contractedContourVertices = [];
        const expandedHoleVertices = [];
        for (let b2 = 0; b2 < bevelSegments; b2++) {
          const t2 = b2 / bevelSegments;
          const z2 = bevelThickness * Math.cos(t2 * Math.PI / 2);
          const bs2 = bevelSize * Math.sin(t2 * Math.PI / 2) + bevelOffset;
          for (let i2 = 0, il = contour.length; i2 < il; i2++) {
            const vert = scalePt2(contour[i2], contourMovements[i2], bs2);
            v2(vert.x, vert.y, -z2);
            if (t2 === 0) contractedContourVertices.push(vert);
          }
          for (let h2 = 0, hl = numHoles; h2 < hl; h2++) {
            const ahole = holes[h2];
            oneHoleMovements = holesMovements[h2];
            const oneHoleVertices = [];
            for (let i2 = 0, il = ahole.length; i2 < il; i2++) {
              const vert = scalePt2(ahole[i2], oneHoleMovements[i2], bs2);
              v2(vert.x, vert.y, -z2);
              if (t2 === 0) oneHoleVertices.push(vert);
            }
            if (t2 === 0) expandedHoleVertices.push(oneHoleVertices);
          }
        }
        faces = ShapeUtils.triangulateShape(contractedContourVertices, expandedHoleVertices);
      }
      const flen = faces.length;
      const bs = bevelSize + bevelOffset;
      for (let i2 = 0; i2 < vlen; i2++) {
        const vert = bevelEnabled ? scalePt2(vertices[i2], verticesMovements[i2], bs) : vertices[i2];
        if (!extrudeByPath) {
          v2(vert.x, vert.y, 0);
        } else {
          normal.copy(splineTube.normals[0]).multiplyScalar(vert.x);
          binormal.copy(splineTube.binormals[0]).multiplyScalar(vert.y);
          position2.copy(extrudePts[0]).add(normal).add(binormal);
          v2(position2.x, position2.y, position2.z);
        }
      }
      for (let s2 = 1; s2 <= steps; s2++) {
        for (let i2 = 0; i2 < vlen; i2++) {
          const vert = bevelEnabled ? scalePt2(vertices[i2], verticesMovements[i2], bs) : vertices[i2];
          if (!extrudeByPath) {
            v2(vert.x, vert.y, depth / steps * s2);
          } else {
            normal.copy(splineTube.normals[s2]).multiplyScalar(vert.x);
            binormal.copy(splineTube.binormals[s2]).multiplyScalar(vert.y);
            position2.copy(extrudePts[s2]).add(normal).add(binormal);
            v2(position2.x, position2.y, position2.z);
          }
        }
      }
      for (let b2 = bevelSegments - 1; b2 >= 0; b2--) {
        const t2 = b2 / bevelSegments;
        const z2 = bevelThickness * Math.cos(t2 * Math.PI / 2);
        const bs2 = bevelSize * Math.sin(t2 * Math.PI / 2) + bevelOffset;
        for (let i2 = 0, il = contour.length; i2 < il; i2++) {
          const vert = scalePt2(contour[i2], contourMovements[i2], bs2);
          v2(vert.x, vert.y, depth + z2);
        }
        for (let h2 = 0, hl = holes.length; h2 < hl; h2++) {
          const ahole = holes[h2];
          oneHoleMovements = holesMovements[h2];
          for (let i2 = 0, il = ahole.length; i2 < il; i2++) {
            const vert = scalePt2(ahole[i2], oneHoleMovements[i2], bs2);
            if (!extrudeByPath) {
              v2(vert.x, vert.y, depth + z2);
            } else {
              v2(vert.x, vert.y + extrudePts[steps - 1].y, extrudePts[steps - 1].x + z2);
            }
          }
        }
      }
      buildLidFaces();
      buildSideFaces();
      function buildLidFaces() {
        const start = verticesArray.length / 3;
        if (bevelEnabled) {
          let layer = 0;
          let offset = vlen * layer;
          for (let i2 = 0; i2 < flen; i2++) {
            const face = faces[i2];
            f3(face[2] + offset, face[1] + offset, face[0] + offset);
          }
          layer = steps + bevelSegments * 2;
          offset = vlen * layer;
          for (let i2 = 0; i2 < flen; i2++) {
            const face = faces[i2];
            f3(face[0] + offset, face[1] + offset, face[2] + offset);
          }
        } else {
          for (let i2 = 0; i2 < flen; i2++) {
            const face = faces[i2];
            f3(face[2], face[1], face[0]);
          }
          for (let i2 = 0; i2 < flen; i2++) {
            const face = faces[i2];
            f3(face[0] + vlen * steps, face[1] + vlen * steps, face[2] + vlen * steps);
          }
        }
        scope.addGroup(start, verticesArray.length / 3 - start, 0);
      }
      function buildSideFaces() {
        const start = verticesArray.length / 3;
        let layeroffset = 0;
        sidewalls(contour, layeroffset);
        layeroffset += contour.length;
        for (let h2 = 0, hl = holes.length; h2 < hl; h2++) {
          const ahole = holes[h2];
          sidewalls(ahole, layeroffset);
          layeroffset += ahole.length;
        }
        scope.addGroup(start, verticesArray.length / 3 - start, 1);
      }
      function sidewalls(contour2, layeroffset) {
        let i2 = contour2.length;
        while (--i2 >= 0) {
          const j2 = i2;
          let k2 = i2 - 1;
          if (k2 < 0) k2 = contour2.length - 1;
          for (let s2 = 0, sl = steps + bevelSegments * 2; s2 < sl; s2++) {
            const slen1 = vlen * s2;
            const slen2 = vlen * (s2 + 1);
            const a2 = layeroffset + j2 + slen1, b2 = layeroffset + k2 + slen1, c2 = layeroffset + k2 + slen2, d2 = layeroffset + j2 + slen2;
            f4(a2, b2, c2, d2);
          }
        }
      }
      function v2(x2, y2, z2) {
        placeholder2.push(x2);
        placeholder2.push(y2);
        placeholder2.push(z2);
      }
      function f3(a2, b2, c2) {
        addVertex(a2);
        addVertex(b2);
        addVertex(c2);
        const nextIndex = verticesArray.length / 3;
        const uvs = uvgen.generateTopUV(scope, verticesArray, nextIndex - 3, nextIndex - 2, nextIndex - 1);
        addUV(uvs[0]);
        addUV(uvs[1]);
        addUV(uvs[2]);
      }
      function f4(a2, b2, c2, d2) {
        addVertex(a2);
        addVertex(b2);
        addVertex(d2);
        addVertex(b2);
        addVertex(c2);
        addVertex(d2);
        const nextIndex = verticesArray.length / 3;
        const uvs = uvgen.generateSideWallUV(scope, verticesArray, nextIndex - 6, nextIndex - 3, nextIndex - 2, nextIndex - 1);
        addUV(uvs[0]);
        addUV(uvs[1]);
        addUV(uvs[3]);
        addUV(uvs[1]);
        addUV(uvs[2]);
        addUV(uvs[3]);
      }
      function addVertex(index) {
        verticesArray.push(placeholder2[index * 3 + 0]);
        verticesArray.push(placeholder2[index * 3 + 1]);
        verticesArray.push(placeholder2[index * 3 + 2]);
      }
      function addUV(vector2) {
        uvArray.push(vector2.x);
        uvArray.push(vector2.y);
      }
    }
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    const shapes = this.parameters.shapes;
    const options = this.parameters.options;
    return toJSON$1(shapes, options, data);
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @param {Array<Shape>} shapes - An array of shapes.
   * @return {ExtrudeGeometry} A new instance.
   */
  static fromJSON(data, shapes) {
    const geometryShapes = [];
    for (let j2 = 0, jl = data.shapes.length; j2 < jl; j2++) {
      const shape = shapes[data.shapes[j2]];
      geometryShapes.push(shape);
    }
    const extrudePath = data.options.extrudePath;
    if (extrudePath !== void 0) {
      data.options.extrudePath = new Curves[extrudePath.type]().fromJSON(extrudePath);
    }
    return new _ExtrudeGeometry(geometryShapes, data.options);
  }
};
var WorldUVGenerator = {
  generateTopUV: function(geometry, vertices, indexA, indexB, indexC) {
    const a_x = vertices[indexA * 3];
    const a_y = vertices[indexA * 3 + 1];
    const b_x = vertices[indexB * 3];
    const b_y = vertices[indexB * 3 + 1];
    const c_x = vertices[indexC * 3];
    const c_y = vertices[indexC * 3 + 1];
    return [
      new Vector2(a_x, a_y),
      new Vector2(b_x, b_y),
      new Vector2(c_x, c_y)
    ];
  },
  generateSideWallUV: function(geometry, vertices, indexA, indexB, indexC, indexD) {
    const a_x = vertices[indexA * 3];
    const a_y = vertices[indexA * 3 + 1];
    const a_z = vertices[indexA * 3 + 2];
    const b_x = vertices[indexB * 3];
    const b_y = vertices[indexB * 3 + 1];
    const b_z = vertices[indexB * 3 + 2];
    const c_x = vertices[indexC * 3];
    const c_y = vertices[indexC * 3 + 1];
    const c_z = vertices[indexC * 3 + 2];
    const d_x = vertices[indexD * 3];
    const d_y = vertices[indexD * 3 + 1];
    const d_z = vertices[indexD * 3 + 2];
    if (Math.abs(a_y - b_y) < Math.abs(a_x - b_x)) {
      return [
        new Vector2(a_x, 1 - a_z),
        new Vector2(b_x, 1 - b_z),
        new Vector2(c_x, 1 - c_z),
        new Vector2(d_x, 1 - d_z)
      ];
    } else {
      return [
        new Vector2(a_y, 1 - a_z),
        new Vector2(b_y, 1 - b_z),
        new Vector2(c_y, 1 - c_z),
        new Vector2(d_y, 1 - d_z)
      ];
    }
  }
};
function toJSON$1(shapes, options, data) {
  data.shapes = [];
  if (Array.isArray(shapes)) {
    for (let i2 = 0, l2 = shapes.length; i2 < l2; i2++) {
      const shape = shapes[i2];
      data.shapes.push(shape.uuid);
    }
  } else {
    data.shapes.push(shapes.uuid);
  }
  data.options = Object.assign({}, options);
  if (options.extrudePath !== void 0) data.options.extrudePath = options.extrudePath.toJSON();
  return data;
}
var PlaneGeometry = class _PlaneGeometry extends BufferGeometry {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(width = 1, height = 1, widthSegments = 1, heightSegments = 1) {
    super();
    this.type = "PlaneGeometry";
    this.parameters = {
      width,
      height,
      widthSegments,
      heightSegments
    };
    const width_half = width / 2;
    const height_half = height / 2;
    const gridX = Math.floor(widthSegments);
    const gridY = Math.floor(heightSegments);
    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;
    const segment_width = width / gridX;
    const segment_height = height / gridY;
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    for (let iy = 0; iy < gridY1; iy++) {
      const y2 = iy * segment_height - height_half;
      for (let ix = 0; ix < gridX1; ix++) {
        const x2 = ix * segment_width - width_half;
        vertices.push(x2, -y2, 0);
        normals.push(0, 0, 1);
        uvs.push(ix / gridX);
        uvs.push(1 - iy / gridY);
      }
    }
    for (let iy = 0; iy < gridY; iy++) {
      for (let ix = 0; ix < gridX; ix++) {
        const a2 = ix + gridX1 * iy;
        const b2 = ix + gridX1 * (iy + 1);
        const c2 = ix + 1 + gridX1 * (iy + 1);
        const d2 = ix + 1 + gridX1 * iy;
        indices.push(a2, b2, d2);
        indices.push(b2, c2, d2);
      }
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PlaneGeometry} A new instance.
   */
  static fromJSON(data) {
    return new _PlaneGeometry(data.width, data.height, data.widthSegments, data.heightSegments);
  }
};
var RingGeometry = class _RingGeometry extends BufferGeometry {
  /**
   * Constructs a new ring geometry.
   *
   * @param {number} [innerRadius=0.5] - The inner radius of the ring.
   * @param {number} [outerRadius=1] - The outer radius of the ring.
   * @param {number} [thetaSegments=32] - Number of segments. A higher number means the ring will be more round. Minimum is `3`.
   * @param {number} [phiSegments=1] - Number of segments per ring segment. Minimum is `1`.
   * @param {number} [thetaStart=0] - Starting angle in radians.
   * @param {number} [thetaLength=Math.PI*2] - Central angle in radians.
   */
  constructor(innerRadius = 0.5, outerRadius = 1, thetaSegments = 32, phiSegments = 1, thetaStart = 0, thetaLength = Math.PI * 2) {
    super();
    this.type = "RingGeometry";
    this.parameters = {
      innerRadius,
      outerRadius,
      thetaSegments,
      phiSegments,
      thetaStart,
      thetaLength
    };
    thetaSegments = Math.max(3, thetaSegments);
    phiSegments = Math.max(1, phiSegments);
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    let radius = innerRadius;
    const radiusStep = (outerRadius - innerRadius) / phiSegments;
    const vertex = new Vector3();
    const uv = new Vector2();
    for (let j2 = 0; j2 <= phiSegments; j2++) {
      for (let i2 = 0; i2 <= thetaSegments; i2++) {
        const segment = thetaStart + i2 / thetaSegments * thetaLength;
        vertex.x = radius * Math.cos(segment);
        vertex.y = radius * Math.sin(segment);
        vertices.push(vertex.x, vertex.y, vertex.z);
        normals.push(0, 0, 1);
        uv.x = (vertex.x / outerRadius + 1) / 2;
        uv.y = (vertex.y / outerRadius + 1) / 2;
        uvs.push(uv.x, uv.y);
      }
      radius += radiusStep;
    }
    for (let j2 = 0; j2 < phiSegments; j2++) {
      const thetaSegmentLevel = j2 * (thetaSegments + 1);
      for (let i2 = 0; i2 < thetaSegments; i2++) {
        const segment = i2 + thetaSegmentLevel;
        const a2 = segment;
        const b2 = segment + thetaSegments + 1;
        const c2 = segment + thetaSegments + 2;
        const d2 = segment + 1;
        indices.push(a2, b2, d2);
        indices.push(b2, c2, d2);
      }
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {RingGeometry} A new instance.
   */
  static fromJSON(data) {
    return new _RingGeometry(data.innerRadius, data.outerRadius, data.thetaSegments, data.phiSegments, data.thetaStart, data.thetaLength);
  }
};
var MeshStandardMaterial = class extends Material {
  /**
   * Constructs a new mesh standard material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(parameters) {
    super();
    this.isMeshStandardMaterial = true;
    this.type = "MeshStandardMaterial";
    this.defines = { "STANDARD": "" };
    this.color = new Color(16777215);
    this.roughness = 1;
    this.metalness = 0;
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new Color(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = TangentSpaceNormalMap;
    this.normalScale = new Vector2(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.roughnessMap = null;
    this.metalnessMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapRotation = new Euler();
    this.envMapIntensity = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.flatShading = false;
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.defines = { "STANDARD": "" };
    this.color.copy(source.color);
    this.roughness = source.roughness;
    this.metalness = source.metalness;
    this.map = source.map;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.emissive.copy(source.emissive);
    this.emissiveMap = source.emissiveMap;
    this.emissiveIntensity = source.emissiveIntensity;
    this.bumpMap = source.bumpMap;
    this.bumpScale = source.bumpScale;
    this.normalMap = source.normalMap;
    this.normalMapType = source.normalMapType;
    this.normalScale.copy(source.normalScale);
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.roughnessMap = source.roughnessMap;
    this.metalnessMap = source.metalnessMap;
    this.alphaMap = source.alphaMap;
    this.envMap = source.envMap;
    this.envMapRotation.copy(source.envMapRotation);
    this.envMapIntensity = source.envMapIntensity;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    this.flatShading = source.flatShading;
    this.fog = source.fog;
    return this;
  }
};
var MeshPhysicalMaterial = class extends MeshStandardMaterial {
  /**
   * Constructs a new mesh physical material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(parameters) {
    super();
    this.isMeshPhysicalMaterial = true;
    this.defines = {
      "STANDARD": "",
      "PHYSICAL": ""
    };
    this.type = "MeshPhysicalMaterial";
    this.anisotropyRotation = 0;
    this.anisotropyMap = null;
    this.clearcoatMap = null;
    this.clearcoatRoughness = 0;
    this.clearcoatRoughnessMap = null;
    this.clearcoatNormalScale = new Vector2(1, 1);
    this.clearcoatNormalMap = null;
    this.ior = 1.5;
    Object.defineProperty(this, "reflectivity", {
      get: function() {
        return clamp(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(reflectivity) {
        this.ior = (1 + 0.4 * reflectivity) / (1 - 0.4 * reflectivity);
      }
    });
    this.iridescenceMap = null;
    this.iridescenceIOR = 1.3;
    this.iridescenceThicknessRange = [100, 400];
    this.iridescenceThicknessMap = null;
    this.sheenColor = new Color(0);
    this.sheenColorMap = null;
    this.sheenRoughness = 1;
    this.sheenRoughnessMap = null;
    this.transmissionMap = null;
    this.thickness = 0;
    this.thicknessMap = null;
    this.attenuationDistance = Infinity;
    this.attenuationColor = new Color(1, 1, 1);
    this.specularIntensity = 1;
    this.specularIntensityMap = null;
    this.specularColor = new Color(1, 1, 1);
    this.specularColorMap = null;
    this._anisotropy = 0;
    this._clearcoat = 0;
    this._dispersion = 0;
    this._iridescence = 0;
    this._sheen = 0;
    this._transmission = 0;
    this.setValues(parameters);
  }
  /**
   * The anisotropy strength, from `0.0` to `1.0`.
   *
   * @type {number}
   * @default 0
   */
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(value) {
    if (this._anisotropy > 0 !== value > 0) {
      this.version++;
    }
    this._anisotropy = value;
  }
  /**
   * Represents the intensity of the clear coat layer, from `0.0` to `1.0`. Use
   * clear coat related properties to enable multilayer materials that have a
   * thin translucent layer over the base layer.
   *
   * @type {number}
   * @default 0
   */
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(value) {
    if (this._clearcoat > 0 !== value > 0) {
      this.version++;
    }
    this._clearcoat = value;
  }
  /**
   * The intensity of the iridescence layer, simulating RGB color shift based on the angle between
   * the surface and the viewer, from `0.0` to `1.0`.
   *
   * @type {number}
   * @default 0
   */
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(value) {
    if (this._iridescence > 0 !== value > 0) {
      this.version++;
    }
    this._iridescence = value;
  }
  /**
   * Defines the strength of the angular separation of colors (chromatic aberration) transmitting
   * through a relatively clear volume. Any value zero or larger is valid, the typical range of
   * realistic values is `[0, 1]`. This property can be only be used with transmissive objects.
   *
   * @type {number}
   * @default 0
   */
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(value) {
    if (this._dispersion > 0 !== value > 0) {
      this.version++;
    }
    this._dispersion = value;
  }
  /**
   * The intensity of the sheen layer, from `0.0` to `1.0`.
   *
   * @type {number}
   * @default 0
   */
  get sheen() {
    return this._sheen;
  }
  set sheen(value) {
    if (this._sheen > 0 !== value > 0) {
      this.version++;
    }
    this._sheen = value;
  }
  /**
   * Degree of transmission (or optical transparency), from `0.0` to `1.0`.
   *
   * Thin, transparent or semitransparent, plastic or glass materials remain
   * largely reflective even if they are fully transmissive. The transmission
   * property can be used to model these materials.
   *
   * When transmission is non-zero, `opacity` should be  set to `1`.
   *
   * @type {number}
   * @default 0
   */
  get transmission() {
    return this._transmission;
  }
  set transmission(value) {
    if (this._transmission > 0 !== value > 0) {
      this.version++;
    }
    this._transmission = value;
  }
  copy(source) {
    super.copy(source);
    this.defines = {
      "STANDARD": "",
      "PHYSICAL": ""
    };
    this.anisotropy = source.anisotropy;
    this.anisotropyRotation = source.anisotropyRotation;
    this.anisotropyMap = source.anisotropyMap;
    this.clearcoat = source.clearcoat;
    this.clearcoatMap = source.clearcoatMap;
    this.clearcoatRoughness = source.clearcoatRoughness;
    this.clearcoatRoughnessMap = source.clearcoatRoughnessMap;
    this.clearcoatNormalMap = source.clearcoatNormalMap;
    this.clearcoatNormalScale.copy(source.clearcoatNormalScale);
    this.dispersion = source.dispersion;
    this.ior = source.ior;
    this.iridescence = source.iridescence;
    this.iridescenceMap = source.iridescenceMap;
    this.iridescenceIOR = source.iridescenceIOR;
    this.iridescenceThicknessRange = [...source.iridescenceThicknessRange];
    this.iridescenceThicknessMap = source.iridescenceThicknessMap;
    this.sheen = source.sheen;
    this.sheenColor.copy(source.sheenColor);
    this.sheenColorMap = source.sheenColorMap;
    this.sheenRoughness = source.sheenRoughness;
    this.sheenRoughnessMap = source.sheenRoughnessMap;
    this.transmission = source.transmission;
    this.transmissionMap = source.transmissionMap;
    this.thickness = source.thickness;
    this.thicknessMap = source.thicknessMap;
    this.attenuationDistance = source.attenuationDistance;
    this.attenuationColor.copy(source.attenuationColor);
    this.specularIntensity = source.specularIntensity;
    this.specularIntensityMap = source.specularIntensityMap;
    this.specularColor.copy(source.specularColor);
    this.specularColorMap = source.specularColorMap;
    return this;
  }
};
function convertArray(array, type) {
  if (!array || array.constructor === type) return array;
  if (typeof type.BYTES_PER_ELEMENT === "number") {
    return new type(array);
  }
  return Array.prototype.slice.call(array);
}
function isTypedArray(object) {
  return ArrayBuffer.isView(object) && !(object instanceof DataView);
}
var Interpolant = class {
  /**
   * Constructs a new interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    this.parameterPositions = parameterPositions;
    this._cachedIndex = 0;
    this.resultBuffer = resultBuffer !== void 0 ? resultBuffer : new sampleValues.constructor(sampleSize);
    this.sampleValues = sampleValues;
    this.valueSize = sampleSize;
    this.settings = null;
    this.DefaultSettings_ = {};
  }
  /**
   * Evaluate the interpolant at position `t`.
   *
   * @param {number} t - The interpolation factor.
   * @return {TypedArray} The result buffer.
   */
  evaluate(t2) {
    const pp = this.parameterPositions;
    let i1 = this._cachedIndex, t1 = pp[i1], t0 = pp[i1 - 1];
    validate_interval: {
      seek: {
        let right;
        linear_scan: {
          forward_scan: if (!(t2 < t1)) {
            for (let giveUpAt = i1 + 2; ; ) {
              if (t1 === void 0) {
                if (t2 < t0) break forward_scan;
                i1 = pp.length;
                this._cachedIndex = i1;
                return this.copySampleValue_(i1 - 1);
              }
              if (i1 === giveUpAt) break;
              t0 = t1;
              t1 = pp[++i1];
              if (t2 < t1) {
                break seek;
              }
            }
            right = pp.length;
            break linear_scan;
          }
          if (!(t2 >= t0)) {
            const t1global = pp[1];
            if (t2 < t1global) {
              i1 = 2;
              t0 = t1global;
            }
            for (let giveUpAt = i1 - 2; ; ) {
              if (t0 === void 0) {
                this._cachedIndex = 0;
                return this.copySampleValue_(0);
              }
              if (i1 === giveUpAt) break;
              t1 = t0;
              t0 = pp[--i1 - 1];
              if (t2 >= t0) {
                break seek;
              }
            }
            right = i1;
            i1 = 0;
            break linear_scan;
          }
          break validate_interval;
        }
        while (i1 < right) {
          const mid = i1 + right >>> 1;
          if (t2 < pp[mid]) {
            right = mid;
          } else {
            i1 = mid + 1;
          }
        }
        t1 = pp[i1];
        t0 = pp[i1 - 1];
        if (t0 === void 0) {
          this._cachedIndex = 0;
          return this.copySampleValue_(0);
        }
        if (t1 === void 0) {
          i1 = pp.length;
          this._cachedIndex = i1;
          return this.copySampleValue_(i1 - 1);
        }
      }
      this._cachedIndex = i1;
      this.intervalChanged_(i1, t0, t1);
    }
    return this.interpolate_(i1, t0, t2, t1);
  }
  /**
   * Returns the interpolation settings.
   *
   * @return {Object} The interpolation settings.
   */
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  /**
   * Copies a sample value to the result buffer.
   *
   * @param {number} index - An index into the sample value buffer.
   * @return {TypedArray} The result buffer.
   */
  copySampleValue_(index) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, offset = index * stride;
    for (let i2 = 0; i2 !== stride; ++i2) {
      result[i2] = values[offset + i2];
    }
    return result;
  }
  /**
   * Copies a sample value to the result buffer.
   *
   * @abstract
   * @param {number} i1 - An index into the sample value buffer.
   * @param {number} t0 - The previous interpolation factor.
   * @param {number} t - The current interpolation factor.
   * @param {number} t1 - The next interpolation factor.
   * @return {TypedArray} The result buffer.
   */
  interpolate_() {
    throw new Error("call to abstract method");
  }
  /**
   * Optional method that is executed when the interval has changed.
   *
   * @param {number} i1 - An index into the sample value buffer.
   * @param {number} t0 - The previous interpolation factor.
   * @param {number} t - The current interpolation factor.
   */
  intervalChanged_() {
  }
};
var CubicInterpolant = class extends Interpolant {
  /**
   * Constructs a new cubic interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    this._weightPrev = -0;
    this._offsetPrev = -0;
    this._weightNext = -0;
    this._offsetNext = -0;
    this.DefaultSettings_ = {
      endingStart: ZeroCurvatureEnding,
      endingEnd: ZeroCurvatureEnding
    };
  }
  intervalChanged_(i1, t0, t1) {
    const pp = this.parameterPositions;
    let iPrev = i1 - 2, iNext = i1 + 1, tPrev = pp[iPrev], tNext = pp[iNext];
    if (tPrev === void 0) {
      switch (this.getSettings_().endingStart) {
        case ZeroSlopeEnding:
          iPrev = i1;
          tPrev = 2 * t0 - t1;
          break;
        case WrapAroundEnding:
          iPrev = pp.length - 2;
          tPrev = t0 + pp[iPrev] - pp[iPrev + 1];
          break;
        default:
          iPrev = i1;
          tPrev = t1;
      }
    }
    if (tNext === void 0) {
      switch (this.getSettings_().endingEnd) {
        case ZeroSlopeEnding:
          iNext = i1;
          tNext = 2 * t1 - t0;
          break;
        case WrapAroundEnding:
          iNext = 1;
          tNext = t1 + pp[1] - pp[0];
          break;
        default:
          iNext = i1 - 1;
          tNext = t0;
      }
    }
    const halfDt = (t1 - t0) * 0.5, stride = this.valueSize;
    this._weightPrev = halfDt / (t0 - tPrev);
    this._weightNext = halfDt / (tNext - t1);
    this._offsetPrev = iPrev * stride;
    this._offsetNext = iNext * stride;
  }
  interpolate_(i1, t0, t2, t1) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, o1 = i1 * stride, o0 = o1 - stride, oP = this._offsetPrev, oN = this._offsetNext, wP = this._weightPrev, wN = this._weightNext, p2 = (t2 - t0) / (t1 - t0), pp = p2 * p2, ppp = pp * p2;
    const sP = -wP * ppp + 2 * wP * pp - wP * p2;
    const s0 = (1 + wP) * ppp + (-1.5 - 2 * wP) * pp + (-0.5 + wP) * p2 + 1;
    const s1 = (-1 - wN) * ppp + (1.5 + wN) * pp + 0.5 * p2;
    const sN = wN * ppp - wN * pp;
    for (let i2 = 0; i2 !== stride; ++i2) {
      result[i2] = sP * values[oP + i2] + s0 * values[o0 + i2] + s1 * values[o1 + i2] + sN * values[oN + i2];
    }
    return result;
  }
};
var LinearInterpolant = class extends Interpolant {
  /**
   * Constructs a new linear interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  interpolate_(i1, t0, t2, t1) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, offset1 = i1 * stride, offset0 = offset1 - stride, weight1 = (t2 - t0) / (t1 - t0), weight0 = 1 - weight1;
    for (let i2 = 0; i2 !== stride; ++i2) {
      result[i2] = values[offset0 + i2] * weight0 + values[offset1 + i2] * weight1;
    }
    return result;
  }
};
var DiscreteInterpolant = class extends Interpolant {
  /**
   * Constructs a new discrete interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  interpolate_(i1) {
    return this.copySampleValue_(i1 - 1);
  }
};
var KeyframeTrack = class {
  /**
   * Constructs a new keyframe track.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<number|string|boolean>} values - A list of keyframe values.
   * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth)} [interpolation] - The interpolation type.
   */
  constructor(name, times, values, interpolation) {
    if (name === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (times === void 0 || times.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + name);
    this.name = name;
    this.times = convertArray(times, this.TimeBufferType);
    this.values = convertArray(values, this.ValueBufferType);
    this.setInterpolation(interpolation || this.DefaultInterpolation);
  }
  /**
   * Converts the keyframe track to JSON.
   *
   * @static
   * @param {KeyframeTrack} track - The keyframe track to serialize.
   * @return {Object} The serialized keyframe track as JSON.
   */
  static toJSON(track) {
    const trackType = track.constructor;
    let json;
    if (trackType.toJSON !== this.toJSON) {
      json = trackType.toJSON(track);
    } else {
      json = {
        "name": track.name,
        "times": convertArray(track.times, Array),
        "values": convertArray(track.values, Array)
      };
      const interpolation = track.getInterpolation();
      if (interpolation !== track.DefaultInterpolation) {
        json.interpolation = interpolation;
      }
    }
    json.type = track.ValueTypeName;
    return json;
  }
  /**
   * Factory method for creating a new discrete interpolant.
   *
   * @static
   * @param {TypedArray} [result] - The result buffer.
   * @return {DiscreteInterpolant} The new interpolant.
   */
  InterpolantFactoryMethodDiscrete(result) {
    return new DiscreteInterpolant(this.times, this.values, this.getValueSize(), result);
  }
  /**
   * Factory method for creating a new linear interpolant.
   *
   * @static
   * @param {TypedArray} [result] - The result buffer.
   * @return {LinearInterpolant} The new interpolant.
   */
  InterpolantFactoryMethodLinear(result) {
    return new LinearInterpolant(this.times, this.values, this.getValueSize(), result);
  }
  /**
   * Factory method for creating a new smooth interpolant.
   *
   * @static
   * @param {TypedArray} [result] - The result buffer.
   * @return {CubicInterpolant} The new interpolant.
   */
  InterpolantFactoryMethodSmooth(result) {
    return new CubicInterpolant(this.times, this.values, this.getValueSize(), result);
  }
  /**
   * Defines the interpolation factor method for this keyframe track.
   *
   * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth)} interpolation - The interpolation type.
   * @return {KeyframeTrack} A reference to this keyframe track.
   */
  setInterpolation(interpolation) {
    let factoryMethod;
    switch (interpolation) {
      case InterpolateDiscrete:
        factoryMethod = this.InterpolantFactoryMethodDiscrete;
        break;
      case InterpolateLinear:
        factoryMethod = this.InterpolantFactoryMethodLinear;
        break;
      case InterpolateSmooth:
        factoryMethod = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (factoryMethod === void 0) {
      const message = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) {
        if (interpolation !== this.DefaultInterpolation) {
          this.setInterpolation(this.DefaultInterpolation);
        } else {
          throw new Error(message);
        }
      }
      warn("KeyframeTrack:", message);
      return this;
    }
    this.createInterpolant = factoryMethod;
    return this;
  }
  /**
   * Returns the current interpolation type.
   *
   * @return {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth)} The interpolation type.
   */
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return InterpolateDiscrete;
      case this.InterpolantFactoryMethodLinear:
        return InterpolateLinear;
      case this.InterpolantFactoryMethodSmooth:
        return InterpolateSmooth;
    }
  }
  /**
   * Returns the value size.
   *
   * @return {number} The value size.
   */
  getValueSize() {
    return this.values.length / this.times.length;
  }
  /**
   * Moves all keyframes either forward or backward in time.
   *
   * @param {number} timeOffset - The offset to move the time values.
   * @return {KeyframeTrack} A reference to this keyframe track.
   */
  shift(timeOffset) {
    if (timeOffset !== 0) {
      const times = this.times;
      for (let i2 = 0, n2 = times.length; i2 !== n2; ++i2) {
        times[i2] += timeOffset;
      }
    }
    return this;
  }
  /**
   * Scale all keyframe times by a factor (useful for frame - seconds conversions).
   *
   * @param {number} timeScale - The time scale.
   * @return {KeyframeTrack} A reference to this keyframe track.
   */
  scale(timeScale) {
    if (timeScale !== 1) {
      const times = this.times;
      for (let i2 = 0, n2 = times.length; i2 !== n2; ++i2) {
        times[i2] *= timeScale;
      }
    }
    return this;
  }
  /**
   * Removes keyframes before and after animation without changing any values within the defined time range.
   *
   * Note: The method does not shift around keys to the start of the track time, because for interpolated
   * keys this will change their values
   *
   * @param {number} startTime - The start time.
   * @param {number} endTime - The end time.
   * @return {KeyframeTrack} A reference to this keyframe track.
   */
  trim(startTime, endTime) {
    const times = this.times, nKeys = times.length;
    let from = 0, to = nKeys - 1;
    while (from !== nKeys && times[from] < startTime) {
      ++from;
    }
    while (to !== -1 && times[to] > endTime) {
      --to;
    }
    ++to;
    if (from !== 0 || to !== nKeys) {
      if (from >= to) {
        to = Math.max(to, 1);
        from = to - 1;
      }
      const stride = this.getValueSize();
      this.times = times.slice(from, to);
      this.values = this.values.slice(from * stride, to * stride);
    }
    return this;
  }
  /**
   * Performs minimal validation on the keyframe track. Returns `true` if the values
   * are valid.
   *
   * @return {boolean} Whether the keyframes are valid or not.
   */
  validate() {
    let valid = true;
    const valueSize = this.getValueSize();
    if (valueSize - Math.floor(valueSize) !== 0) {
      error("KeyframeTrack: Invalid value size in track.", this);
      valid = false;
    }
    const times = this.times, values = this.values, nKeys = times.length;
    if (nKeys === 0) {
      error("KeyframeTrack: Track is empty.", this);
      valid = false;
    }
    let prevTime = null;
    for (let i2 = 0; i2 !== nKeys; i2++) {
      const currTime = times[i2];
      if (typeof currTime === "number" && isNaN(currTime)) {
        error("KeyframeTrack: Time is not a valid number.", this, i2, currTime);
        valid = false;
        break;
      }
      if (prevTime !== null && prevTime > currTime) {
        error("KeyframeTrack: Out of order keys.", this, i2, currTime, prevTime);
        valid = false;
        break;
      }
      prevTime = currTime;
    }
    if (values !== void 0) {
      if (isTypedArray(values)) {
        for (let i2 = 0, n2 = values.length; i2 !== n2; ++i2) {
          const value = values[i2];
          if (isNaN(value)) {
            error("KeyframeTrack: Value is not a valid number.", this, i2, value);
            valid = false;
            break;
          }
        }
      }
    }
    return valid;
  }
  /**
   * Optimizes this keyframe track by removing equivalent sequential keys (which are
   * common in morph target sequences).
   *
   * @return {AnimationClip} A reference to this animation clip.
   */
  optimize() {
    const times = this.times.slice(), values = this.values.slice(), stride = this.getValueSize(), smoothInterpolation = this.getInterpolation() === InterpolateSmooth, lastIndex = times.length - 1;
    let writeIndex = 1;
    for (let i2 = 1; i2 < lastIndex; ++i2) {
      let keep = false;
      const time = times[i2];
      const timeNext = times[i2 + 1];
      if (time !== timeNext && (i2 !== 1 || time !== times[0])) {
        if (!smoothInterpolation) {
          const offset = i2 * stride, offsetP = offset - stride, offsetN = offset + stride;
          for (let j2 = 0; j2 !== stride; ++j2) {
            const value = values[offset + j2];
            if (value !== values[offsetP + j2] || value !== values[offsetN + j2]) {
              keep = true;
              break;
            }
          }
        } else {
          keep = true;
        }
      }
      if (keep) {
        if (i2 !== writeIndex) {
          times[writeIndex] = times[i2];
          const readOffset = i2 * stride, writeOffset = writeIndex * stride;
          for (let j2 = 0; j2 !== stride; ++j2) {
            values[writeOffset + j2] = values[readOffset + j2];
          }
        }
        ++writeIndex;
      }
    }
    if (lastIndex > 0) {
      times[writeIndex] = times[lastIndex];
      for (let readOffset = lastIndex * stride, writeOffset = writeIndex * stride, j2 = 0; j2 !== stride; ++j2) {
        values[writeOffset + j2] = values[readOffset + j2];
      }
      ++writeIndex;
    }
    if (writeIndex !== times.length) {
      this.times = times.slice(0, writeIndex);
      this.values = values.slice(0, writeIndex * stride);
    } else {
      this.times = times;
      this.values = values;
    }
    return this;
  }
  /**
   * Returns a new keyframe track with copied values from this instance.
   *
   * @return {KeyframeTrack} A clone of this instance.
   */
  clone() {
    const times = this.times.slice();
    const values = this.values.slice();
    const TypedKeyframeTrack = this.constructor;
    const track = new TypedKeyframeTrack(this.name, times, values);
    track.createInterpolant = this.createInterpolant;
    return track;
  }
};
KeyframeTrack.prototype.ValueTypeName = "";
KeyframeTrack.prototype.TimeBufferType = Float32Array;
KeyframeTrack.prototype.ValueBufferType = Float32Array;
KeyframeTrack.prototype.DefaultInterpolation = InterpolateLinear;
var BooleanKeyframeTrack = class extends KeyframeTrack {
  /**
   * Constructs a new boolean keyframe track.
   *
   * This keyframe track type has no `interpolation` parameter because the
   * interpolation is always discrete.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<boolean>} values - A list of keyframe values.
   */
  constructor(name, times, values) {
    super(name, times, values);
  }
};
BooleanKeyframeTrack.prototype.ValueTypeName = "bool";
BooleanKeyframeTrack.prototype.ValueBufferType = Array;
BooleanKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete;
BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0;
BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var ColorKeyframeTrack = class extends KeyframeTrack {
  /**
   * Constructs a new color keyframe track.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<number>} values - A list of keyframe values.
   * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth)} [interpolation] - The interpolation type.
   */
  constructor(name, times, values, interpolation) {
    super(name, times, values, interpolation);
  }
};
ColorKeyframeTrack.prototype.ValueTypeName = "color";
var NumberKeyframeTrack = class extends KeyframeTrack {
  /**
   * Constructs a new number keyframe track.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<number>} values - A list of keyframe values.
   * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth)} [interpolation] - The interpolation type.
   */
  constructor(name, times, values, interpolation) {
    super(name, times, values, interpolation);
  }
};
NumberKeyframeTrack.prototype.ValueTypeName = "number";
var QuaternionLinearInterpolant = class extends Interpolant {
  /**
   * Constructs a new SLERP interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  interpolate_(i1, t0, t2, t1) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, alpha = (t2 - t0) / (t1 - t0);
    let offset = i1 * stride;
    for (let end = offset + stride; offset !== end; offset += 4) {
      Quaternion.slerpFlat(result, 0, values, offset - stride, values, offset, alpha);
    }
    return result;
  }
};
var QuaternionKeyframeTrack = class extends KeyframeTrack {
  /**
   * Constructs a new Quaternion keyframe track.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<number>} values - A list of keyframe values.
   * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth)} [interpolation] - The interpolation type.
   */
  constructor(name, times, values, interpolation) {
    super(name, times, values, interpolation);
  }
  /**
   * Overwritten so the method returns Quaternion based interpolant.
   *
   * @static
   * @param {TypedArray} [result] - The result buffer.
   * @return {QuaternionLinearInterpolant} The new interpolant.
   */
  InterpolantFactoryMethodLinear(result) {
    return new QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), result);
  }
};
QuaternionKeyframeTrack.prototype.ValueTypeName = "quaternion";
QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var StringKeyframeTrack = class extends KeyframeTrack {
  /**
   * Constructs a new string keyframe track.
   *
   * This keyframe track type has no `interpolation` parameter because the
   * interpolation is always discrete.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<string>} values - A list of keyframe values.
   */
  constructor(name, times, values) {
    super(name, times, values);
  }
};
StringKeyframeTrack.prototype.ValueTypeName = "string";
StringKeyframeTrack.prototype.ValueBufferType = Array;
StringKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete;
StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0;
StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var VectorKeyframeTrack = class extends KeyframeTrack {
  /**
   * Constructs a new vector keyframe track.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<number>} values - A list of keyframe values.
   * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth)} [interpolation] - The interpolation type.
   */
  constructor(name, times, values, interpolation) {
    super(name, times, values, interpolation);
  }
};
VectorKeyframeTrack.prototype.ValueTypeName = "vector";
var LoadingManager = class {
  /**
   * Constructs a new loading manager.
   *
   * @param {Function} [onLoad] - Executes when all items have been loaded.
   * @param {Function} [onProgress] - Executes when single items have been loaded.
   * @param {Function} [onError] - Executes when an error occurs.
   */
  constructor(onLoad, onProgress, onError) {
    const scope = this;
    let isLoading = false;
    let itemsLoaded = 0;
    let itemsTotal = 0;
    let urlModifier = void 0;
    const handlers = [];
    this.onStart = void 0;
    this.onLoad = onLoad;
    this.onProgress = onProgress;
    this.onError = onError;
    this._abortController = null;
    this.itemStart = function(url) {
      itemsTotal++;
      if (isLoading === false) {
        if (scope.onStart !== void 0) {
          scope.onStart(url, itemsLoaded, itemsTotal);
        }
      }
      isLoading = true;
    };
    this.itemEnd = function(url) {
      itemsLoaded++;
      if (scope.onProgress !== void 0) {
        scope.onProgress(url, itemsLoaded, itemsTotal);
      }
      if (itemsLoaded === itemsTotal) {
        isLoading = false;
        if (scope.onLoad !== void 0) {
          scope.onLoad();
        }
      }
    };
    this.itemError = function(url) {
      if (scope.onError !== void 0) {
        scope.onError(url);
      }
    };
    this.resolveURL = function(url) {
      if (urlModifier) {
        return urlModifier(url);
      }
      return url;
    };
    this.setURLModifier = function(transform) {
      urlModifier = transform;
      return this;
    };
    this.addHandler = function(regex, loader) {
      handlers.push(regex, loader);
      return this;
    };
    this.removeHandler = function(regex) {
      const index = handlers.indexOf(regex);
      if (index !== -1) {
        handlers.splice(index, 2);
      }
      return this;
    };
    this.getHandler = function(file) {
      for (let i2 = 0, l2 = handlers.length; i2 < l2; i2 += 2) {
        const regex = handlers[i2];
        const loader = handlers[i2 + 1];
        if (regex.global) regex.lastIndex = 0;
        if (regex.test(file)) {
          return loader;
        }
      }
      return null;
    };
    this.abort = function() {
      this.abortController.abort();
      this._abortController = null;
      return this;
    };
  }
  // TODO: Revert this back to a single member variable once this issue has been fixed
  // https://github.com/cloudflare/workerd/issues/3657
  /**
   * Used for aborting ongoing requests in loaders using this manager.
   *
   * @type {AbortController}
   */
  get abortController() {
    if (!this._abortController) {
      this._abortController = new AbortController();
    }
    return this._abortController;
  }
};
var DefaultLoadingManager = /* @__PURE__ */ new LoadingManager();
var Loader = class {
  /**
   * Constructs a new loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(manager) {
    this.manager = manager !== void 0 ? manager : DefaultLoadingManager;
    this.crossOrigin = "anonymous";
    this.withCredentials = false;
    this.path = "";
    this.resourcePath = "";
    this.requestHeader = {};
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for loading assets from the backend.
   *
   * @abstract
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {Function} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @param {onErrorCallback} [onError] - Executed when errors occur.
   */
  load() {
  }
  /**
   * A async version of {@link Loader#load}.
   *
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @return {Promise} A Promise that resolves when the asset has been loaded.
   */
  loadAsync(url, onProgress) {
    const scope = this;
    return new Promise(function(resolve, reject) {
      scope.load(url, resolve, onProgress, reject);
    });
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for parsing the asset into three.js entities.
   *
   * @abstract
   * @param {any} data - The data to parse.
   */
  parse() {
  }
  /**
   * Sets the `crossOrigin` String to implement CORS for loading the URL
   * from a different domain that allows CORS.
   *
   * @param {string} crossOrigin - The `crossOrigin` value.
   * @return {Loader} A reference to this instance.
   */
  setCrossOrigin(crossOrigin) {
    this.crossOrigin = crossOrigin;
    return this;
  }
  /**
   * Whether the XMLHttpRequest uses credentials such as cookies, authorization
   * headers or TLS client certificates, see [XMLHttpRequest.withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials).
   *
   * Note: This setting has no effect if you are loading files locally or from the same domain.
   *
   * @param {boolean} value - The `withCredentials` value.
   * @return {Loader} A reference to this instance.
   */
  setWithCredentials(value) {
    this.withCredentials = value;
    return this;
  }
  /**
   * Sets the base path for the asset.
   *
   * @param {string} path - The base path.
   * @return {Loader} A reference to this instance.
   */
  setPath(path) {
    this.path = path;
    return this;
  }
  /**
   * Sets the base path for dependent resources like textures.
   *
   * @param {string} resourcePath - The resource path.
   * @return {Loader} A reference to this instance.
   */
  setResourcePath(resourcePath) {
    this.resourcePath = resourcePath;
    return this;
  }
  /**
   * Sets the given request header.
   *
   * @param {Object} requestHeader - A [request header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
   * for configuring the HTTP request.
   * @return {Loader} A reference to this instance.
   */
  setRequestHeader(requestHeader) {
    this.requestHeader = requestHeader;
    return this;
  }
  /**
   * This method can be implemented in loaders for aborting ongoing requests.
   *
   * @abstract
   * @return {Loader} A reference to this instance.
   */
  abort() {
    return this;
  }
};
Loader.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var _RESERVED_CHARS_RE = "\\[\\]\\.:\\/";
var _reservedRe = new RegExp("[" + _RESERVED_CHARS_RE + "]", "g");
var _wordChar = "[^" + _RESERVED_CHARS_RE + "]";
var _wordCharOrDot = "[^" + _RESERVED_CHARS_RE.replace("\\.", "") + "]";
var _directoryRe = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", _wordChar);
var _nodeRe = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", _wordCharOrDot);
var _objectRe = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _wordChar);
var _propertyRe = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _wordChar);
var _trackRe = new RegExp(
  "^" + _directoryRe + _nodeRe + _objectRe + _propertyRe + "$"
);
var _supportedObjectNames = ["material", "materials", "bones", "map"];
var Composite = class {
  constructor(targetGroup, path, optionalParsedPath) {
    const parsedPath = optionalParsedPath || PropertyBinding.parseTrackName(path);
    this._targetGroup = targetGroup;
    this._bindings = targetGroup.subscribe_(path, parsedPath);
  }
  getValue(array, offset) {
    this.bind();
    const firstValidIndex = this._targetGroup.nCachedObjects_, binding = this._bindings[firstValidIndex];
    if (binding !== void 0) binding.getValue(array, offset);
  }
  setValue(array, offset) {
    const bindings = this._bindings;
    for (let i2 = this._targetGroup.nCachedObjects_, n2 = bindings.length; i2 !== n2; ++i2) {
      bindings[i2].setValue(array, offset);
    }
  }
  bind() {
    const bindings = this._bindings;
    for (let i2 = this._targetGroup.nCachedObjects_, n2 = bindings.length; i2 !== n2; ++i2) {
      bindings[i2].bind();
    }
  }
  unbind() {
    const bindings = this._bindings;
    for (let i2 = this._targetGroup.nCachedObjects_, n2 = bindings.length; i2 !== n2; ++i2) {
      bindings[i2].unbind();
    }
  }
};
var PropertyBinding = class _PropertyBinding {
  /**
   * Constructs a new property binding.
   *
   * @param {Object} rootNode - The root node.
   * @param {string} path - The path.
   * @param {?Object} [parsedPath] - The parsed path.
   */
  constructor(rootNode, path, parsedPath) {
    this.path = path;
    this.parsedPath = parsedPath || _PropertyBinding.parseTrackName(path);
    this.node = _PropertyBinding.findNode(rootNode, this.parsedPath.nodeName);
    this.rootNode = rootNode;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
  /**
   * Factory method for creating a property binding from the given parameters.
   *
   * @static
   * @param {Object} root - The root node.
   * @param {string} path - The path.
   * @param {?Object} [parsedPath] - The parsed path.
   * @return {PropertyBinding|Composite} The created property binding or composite.
   */
  static create(root, path, parsedPath) {
    if (!(root && root.isAnimationObjectGroup)) {
      return new _PropertyBinding(root, path, parsedPath);
    } else {
      return new _PropertyBinding.Composite(root, path, parsedPath);
    }
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name - Node name to be sanitized.
   * @return {string} The sanitized node name.
   */
  static sanitizeNodeName(name) {
    return name.replace(/\s/g, "_").replace(_reservedRe, "");
  }
  /**
   * Parses the given track name (an object path to an animated property) and
   * returns an object with information about the path. Matches strings in the following forms:
   *
   * - nodeName.property
   * - nodeName.property[accessor]
   * - nodeName.material.property[accessor]
   * - uuid.property[accessor]
   * - uuid.objectName[objectIndex].propertyName[propertyIndex]
   * - parentName/nodeName.property
   * - parentName/parentName/nodeName.property[index]
   * - .bone[Armature.DEF_cog].position
   * - scene:helium_balloon_model:helium_balloon_model.position
   *
   * @static
   * @param {string} trackName - The track name to parse.
   * @return {Object} The parsed track name as an object.
   */
  static parseTrackName(trackName) {
    const matches = _trackRe.exec(trackName);
    if (matches === null) {
      throw new Error("PropertyBinding: Cannot parse trackName: " + trackName);
    }
    const results = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: matches[2],
      objectName: matches[3],
      objectIndex: matches[4],
      propertyName: matches[5],
      // required
      propertyIndex: matches[6]
    };
    const lastDot = results.nodeName && results.nodeName.lastIndexOf(".");
    if (lastDot !== void 0 && lastDot !== -1) {
      const objectName = results.nodeName.substring(lastDot + 1);
      if (_supportedObjectNames.indexOf(objectName) !== -1) {
        results.nodeName = results.nodeName.substring(0, lastDot);
        results.objectName = objectName;
      }
    }
    if (results.propertyName === null || results.propertyName.length === 0) {
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + trackName);
    }
    return results;
  }
  /**
   * Searches for a node in the hierarchy of the given root object by the given
   * node name.
   *
   * @static
   * @param {Object} root - The root object.
   * @param {string|number} nodeName - The name of the node.
   * @return {?Object} The found node. Returns `null` if no object was found.
   */
  static findNode(root, nodeName) {
    if (nodeName === void 0 || nodeName === "" || nodeName === "." || nodeName === -1 || nodeName === root.name || nodeName === root.uuid) {
      return root;
    }
    if (root.skeleton) {
      const bone = root.skeleton.getBoneByName(nodeName);
      if (bone !== void 0) {
        return bone;
      }
    }
    if (root.children) {
      const searchNodeSubtree = function(children) {
        for (let i2 = 0; i2 < children.length; i2++) {
          const childNode = children[i2];
          if (childNode.name === nodeName || childNode.uuid === nodeName) {
            return childNode;
          }
          const result = searchNodeSubtree(childNode.children);
          if (result) return result;
        }
        return null;
      };
      const subTreeNode = searchNodeSubtree(root.children);
      if (subTreeNode) {
        return subTreeNode;
      }
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(buffer, offset) {
    buffer[offset] = this.targetObject[this.propertyName];
  }
  _getValue_array(buffer, offset) {
    const source = this.resolvedProperty;
    for (let i2 = 0, n2 = source.length; i2 !== n2; ++i2) {
      buffer[offset++] = source[i2];
    }
  }
  _getValue_arrayElement(buffer, offset) {
    buffer[offset] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(buffer, offset) {
    this.resolvedProperty.toArray(buffer, offset);
  }
  // Direct
  _setValue_direct(buffer, offset) {
    this.targetObject[this.propertyName] = buffer[offset];
  }
  _setValue_direct_setNeedsUpdate(buffer, offset) {
    this.targetObject[this.propertyName] = buffer[offset];
    this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(buffer, offset) {
    this.targetObject[this.propertyName] = buffer[offset];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  // EntireArray
  _setValue_array(buffer, offset) {
    const dest = this.resolvedProperty;
    for (let i2 = 0, n2 = dest.length; i2 !== n2; ++i2) {
      dest[i2] = buffer[offset++];
    }
  }
  _setValue_array_setNeedsUpdate(buffer, offset) {
    const dest = this.resolvedProperty;
    for (let i2 = 0, n2 = dest.length; i2 !== n2; ++i2) {
      dest[i2] = buffer[offset++];
    }
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(buffer, offset) {
    const dest = this.resolvedProperty;
    for (let i2 = 0, n2 = dest.length; i2 !== n2; ++i2) {
      dest[i2] = buffer[offset++];
    }
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  // ArrayElement
  _setValue_arrayElement(buffer, offset) {
    this.resolvedProperty[this.propertyIndex] = buffer[offset];
  }
  _setValue_arrayElement_setNeedsUpdate(buffer, offset) {
    this.resolvedProperty[this.propertyIndex] = buffer[offset];
    this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(buffer, offset) {
    this.resolvedProperty[this.propertyIndex] = buffer[offset];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  // HasToFromArray
  _setValue_fromArray(buffer, offset) {
    this.resolvedProperty.fromArray(buffer, offset);
  }
  _setValue_fromArray_setNeedsUpdate(buffer, offset) {
    this.resolvedProperty.fromArray(buffer, offset);
    this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(buffer, offset) {
    this.resolvedProperty.fromArray(buffer, offset);
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(targetArray, offset) {
    this.bind();
    this.getValue(targetArray, offset);
  }
  _setValue_unbound(sourceArray, offset) {
    this.bind();
    this.setValue(sourceArray, offset);
  }
  /**
   * Creates a getter / setter pair for the property tracked by this binding.
   */
  bind() {
    let targetObject = this.node;
    const parsedPath = this.parsedPath;
    const objectName = parsedPath.objectName;
    const propertyName = parsedPath.propertyName;
    let propertyIndex = parsedPath.propertyIndex;
    if (!targetObject) {
      targetObject = _PropertyBinding.findNode(this.rootNode, parsedPath.nodeName);
      this.node = targetObject;
    }
    this.getValue = this._getValue_unavailable;
    this.setValue = this._setValue_unavailable;
    if (!targetObject) {
      warn("PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (objectName) {
      let objectIndex = parsedPath.objectIndex;
      switch (objectName) {
        case "materials":
          if (!targetObject.material) {
            error("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!targetObject.material.materials) {
            error("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          targetObject = targetObject.material.materials;
          break;
        case "bones":
          if (!targetObject.skeleton) {
            error("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          targetObject = targetObject.skeleton.bones;
          for (let i2 = 0; i2 < targetObject.length; i2++) {
            if (targetObject[i2].name === objectIndex) {
              objectIndex = i2;
              break;
            }
          }
          break;
        case "map":
          if ("map" in targetObject) {
            targetObject = targetObject.map;
            break;
          }
          if (!targetObject.material) {
            error("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!targetObject.material.map) {
            error("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          targetObject = targetObject.material.map;
          break;
        default:
          if (targetObject[objectName] === void 0) {
            error("PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          targetObject = targetObject[objectName];
      }
      if (objectIndex !== void 0) {
        if (targetObject[objectIndex] === void 0) {
          error("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, targetObject);
          return;
        }
        targetObject = targetObject[objectIndex];
      }
    }
    const nodeProperty = targetObject[propertyName];
    if (nodeProperty === void 0) {
      const nodeName = parsedPath.nodeName;
      error("PropertyBinding: Trying to update property for track: " + nodeName + "." + propertyName + " but it wasn't found.", targetObject);
      return;
    }
    let versioning = this.Versioning.None;
    this.targetObject = targetObject;
    if (targetObject.isMaterial === true) {
      versioning = this.Versioning.NeedsUpdate;
    } else if (targetObject.isObject3D === true) {
      versioning = this.Versioning.MatrixWorldNeedsUpdate;
    }
    let bindingType = this.BindingType.Direct;
    if (propertyIndex !== void 0) {
      if (propertyName === "morphTargetInfluences") {
        if (!targetObject.geometry) {
          error("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!targetObject.geometry.morphAttributes) {
          error("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        if (targetObject.morphTargetDictionary[propertyIndex] !== void 0) {
          propertyIndex = targetObject.morphTargetDictionary[propertyIndex];
        }
      }
      bindingType = this.BindingType.ArrayElement;
      this.resolvedProperty = nodeProperty;
      this.propertyIndex = propertyIndex;
    } else if (nodeProperty.fromArray !== void 0 && nodeProperty.toArray !== void 0) {
      bindingType = this.BindingType.HasFromToArray;
      this.resolvedProperty = nodeProperty;
    } else if (Array.isArray(nodeProperty)) {
      bindingType = this.BindingType.EntireArray;
      this.resolvedProperty = nodeProperty;
    } else {
      this.propertyName = propertyName;
    }
    this.getValue = this.GetterByBindingType[bindingType];
    this.setValue = this.SetterByBindingTypeAndVersioning[bindingType][versioning];
  }
  /**
   * Unbinds the property.
   */
  unbind() {
    this.node = null;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
};
PropertyBinding.Composite = Composite;
PropertyBinding.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
PropertyBinding.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
PropertyBinding.prototype.GetterByBindingType = [
  PropertyBinding.prototype._getValue_direct,
  PropertyBinding.prototype._getValue_array,
  PropertyBinding.prototype._getValue_arrayElement,
  PropertyBinding.prototype._getValue_toArray
];
PropertyBinding.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    PropertyBinding.prototype._setValue_direct,
    PropertyBinding.prototype._setValue_direct_setNeedsUpdate,
    PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    PropertyBinding.prototype._setValue_array,
    PropertyBinding.prototype._setValue_array_setNeedsUpdate,
    PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    PropertyBinding.prototype._setValue_arrayElement,
    PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,
    PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    PropertyBinding.prototype._setValue_fromArray,
    PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,
    PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
var _controlInterpolantsResultBuffer = new Float32Array(1);
var ShapePath = class {
  /**
   * Constructs a new shape path.
   */
  constructor() {
    this.type = "ShapePath";
    this.color = new Color();
    this.subPaths = [];
    this.currentPath = null;
  }
  /**
   * Creates a new path and moves it current point to the given one.
   *
   * @param {number} x - The x coordinate.
   * @param {number} y - The y coordinate.
   * @return {ShapePath} A reference to this shape path.
   */
  moveTo(x2, y2) {
    this.currentPath = new Path();
    this.subPaths.push(this.currentPath);
    this.currentPath.moveTo(x2, y2);
    return this;
  }
  /**
   * Adds an instance of {@link LineCurve} to the path by connecting
   * the current point with the given one.
   *
   * @param {number} x - The x coordinate of the end point.
   * @param {number} y - The y coordinate of the end point.
   * @return {ShapePath} A reference to this shape path.
   */
  lineTo(x2, y2) {
    this.currentPath.lineTo(x2, y2);
    return this;
  }
  /**
   * Adds an instance of {@link QuadraticBezierCurve} to the path by connecting
   * the current point with the given one.
   *
   * @param {number} aCPx - The x coordinate of the control point.
   * @param {number} aCPy - The y coordinate of the control point.
   * @param {number} aX - The x coordinate of the end point.
   * @param {number} aY - The y coordinate of the end point.
   * @return {ShapePath} A reference to this shape path.
   */
  quadraticCurveTo(aCPx, aCPy, aX, aY) {
    this.currentPath.quadraticCurveTo(aCPx, aCPy, aX, aY);
    return this;
  }
  /**
   * Adds an instance of {@link CubicBezierCurve} to the path by connecting
   * the current point with the given one.
   *
   * @param {number} aCP1x - The x coordinate of the first control point.
   * @param {number} aCP1y - The y coordinate of the first control point.
   * @param {number} aCP2x - The x coordinate of the second control point.
   * @param {number} aCP2y - The y coordinate of the second control point.
   * @param {number} aX - The x coordinate of the end point.
   * @param {number} aY - The y coordinate of the end point.
   * @return {ShapePath} A reference to this shape path.
   */
  bezierCurveTo(aCP1x, aCP1y, aCP2x, aCP2y, aX, aY) {
    this.currentPath.bezierCurveTo(aCP1x, aCP1y, aCP2x, aCP2y, aX, aY);
    return this;
  }
  /**
   * Adds an instance of {@link SplineCurve} to the path by connecting
   * the current point with the given list of points.
   *
   * @param {Array<Vector2>} pts - An array of points in 2D space.
   * @return {ShapePath} A reference to this shape path.
   */
  splineThru(pts) {
    this.currentPath.splineThru(pts);
    return this;
  }
  /**
   * Converts the paths into an array of shapes.
   *
   * @param {boolean} isCCW - By default solid shapes are  defined clockwise (CW) and holes are defined counterclockwise (CCW).
   * If this flag is set to `true`, then those are flipped.
   * @return {Array<Shape>} An array of shapes.
   */
  toShapes(isCCW) {
    function toShapesNoHoles(inSubpaths) {
      const shapes2 = [];
      for (let i2 = 0, l2 = inSubpaths.length; i2 < l2; i2++) {
        const tmpPath2 = inSubpaths[i2];
        const tmpShape2 = new Shape();
        tmpShape2.curves = tmpPath2.curves;
        shapes2.push(tmpShape2);
      }
      return shapes2;
    }
    function isPointInsidePolygon(inPt, inPolygon) {
      const polyLen = inPolygon.length;
      let inside = false;
      for (let p2 = polyLen - 1, q2 = 0; q2 < polyLen; p2 = q2++) {
        let edgeLowPt = inPolygon[p2];
        let edgeHighPt = inPolygon[q2];
        let edgeDx = edgeHighPt.x - edgeLowPt.x;
        let edgeDy = edgeHighPt.y - edgeLowPt.y;
        if (Math.abs(edgeDy) > Number.EPSILON) {
          if (edgeDy < 0) {
            edgeLowPt = inPolygon[q2];
            edgeDx = -edgeDx;
            edgeHighPt = inPolygon[p2];
            edgeDy = -edgeDy;
          }
          if (inPt.y < edgeLowPt.y || inPt.y > edgeHighPt.y) continue;
          if (inPt.y === edgeLowPt.y) {
            if (inPt.x === edgeLowPt.x) return true;
          } else {
            const perpEdge = edgeDy * (inPt.x - edgeLowPt.x) - edgeDx * (inPt.y - edgeLowPt.y);
            if (perpEdge === 0) return true;
            if (perpEdge < 0) continue;
            inside = !inside;
          }
        } else {
          if (inPt.y !== edgeLowPt.y) continue;
          if (edgeHighPt.x <= inPt.x && inPt.x <= edgeLowPt.x || edgeLowPt.x <= inPt.x && inPt.x <= edgeHighPt.x) return true;
        }
      }
      return inside;
    }
    const isClockWise = ShapeUtils.isClockWise;
    const subPaths = this.subPaths;
    if (subPaths.length === 0) return [];
    let solid, tmpPath, tmpShape;
    const shapes = [];
    if (subPaths.length === 1) {
      tmpPath = subPaths[0];
      tmpShape = new Shape();
      tmpShape.curves = tmpPath.curves;
      shapes.push(tmpShape);
      return shapes;
    }
    let holesFirst = !isClockWise(subPaths[0].getPoints());
    holesFirst = isCCW ? !holesFirst : holesFirst;
    const betterShapeHoles = [];
    const newShapes = [];
    let newShapeHoles = [];
    let mainIdx = 0;
    let tmpPoints;
    newShapes[mainIdx] = void 0;
    newShapeHoles[mainIdx] = [];
    for (let i2 = 0, l2 = subPaths.length; i2 < l2; i2++) {
      tmpPath = subPaths[i2];
      tmpPoints = tmpPath.getPoints();
      solid = isClockWise(tmpPoints);
      solid = isCCW ? !solid : solid;
      if (solid) {
        if (!holesFirst && newShapes[mainIdx]) mainIdx++;
        newShapes[mainIdx] = { s: new Shape(), p: tmpPoints };
        newShapes[mainIdx].s.curves = tmpPath.curves;
        if (holesFirst) mainIdx++;
        newShapeHoles[mainIdx] = [];
      } else {
        newShapeHoles[mainIdx].push({ h: tmpPath, p: tmpPoints[0] });
      }
    }
    if (!newShapes[0]) return toShapesNoHoles(subPaths);
    if (newShapes.length > 1) {
      let ambiguous = false;
      let toChange = 0;
      for (let sIdx = 0, sLen = newShapes.length; sIdx < sLen; sIdx++) {
        betterShapeHoles[sIdx] = [];
      }
      for (let sIdx = 0, sLen = newShapes.length; sIdx < sLen; sIdx++) {
        const sho = newShapeHoles[sIdx];
        for (let hIdx = 0; hIdx < sho.length; hIdx++) {
          const ho = sho[hIdx];
          let hole_unassigned = true;
          for (let s2Idx = 0; s2Idx < newShapes.length; s2Idx++) {
            if (isPointInsidePolygon(ho.p, newShapes[s2Idx].p)) {
              if (sIdx !== s2Idx) toChange++;
              if (hole_unassigned) {
                hole_unassigned = false;
                betterShapeHoles[s2Idx].push(ho);
              } else {
                ambiguous = true;
              }
            }
          }
          if (hole_unassigned) {
            betterShapeHoles[sIdx].push(ho);
          }
        }
      }
      if (toChange > 0 && ambiguous === false) {
        newShapeHoles = betterShapeHoles;
      }
    }
    let tmpHoles;
    for (let i2 = 0, il = newShapes.length; i2 < il; i2++) {
      tmpShape = newShapes[i2].s;
      shapes.push(tmpShape);
      tmpHoles = newShapeHoles[i2];
      for (let j2 = 0, jl = tmpHoles.length; j2 < jl; j2++) {
        tmpShape.holes.push(tmpHoles[j2].h);
      }
    }
    return shapes;
  }
};
if (typeof __THREE_DEVTOOLS__ !== "undefined") {
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
    revision: REVISION
  } }));
}
if (typeof window !== "undefined") {
  if (window.__THREE__) {
    warn("WARNING: Multiple instances of Three.js being imported.");
  } else {
    window.__THREE__ = REVISION;
  }
}

// ../034-ohtani/node_modules/three/build/three.module.js
var alphahash_fragment = "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif";
var alphahash_pars_fragment = "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif";
var alphamap_fragment = "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif";
var alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif";
var alphatest_fragment = "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif";
var alphatest_pars_fragment = "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif";
var aomap_fragment = "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif";
var aomap_pars_fragment = "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif";
var batching_pars_vertex = "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec3 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n	}\n#endif";
var batching_vertex = "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif";
var begin_vertex = "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif";
var beginnormal_vertex = "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif";
var bsdfs = "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated";
var iridescence_fragment = "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif";
var bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif";
var clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif";
var clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif";
var clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif";
var clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif";
var color_fragment = "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif";
var color_pars_fragment = "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif";
var color_pars_vertex = "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec3 vColor;\n#endif";
var color_vertex = "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n	vColor.xyz *= batchingColor.xyz;\n#endif";
var common = "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated";
var cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif";
var defaultnormal_vertex = "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif";
var displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif";
var displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif";
var emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif";
var emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif";
var colorspace_fragment = "gl_FragColor = linearToOutputTexel( gl_FragColor );";
var colorspace_pars_fragment = "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}";
var envmap_fragment = "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif";
var envmap_common_pars_fragment = "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n#endif";
var envmap_pars_fragment = "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif";
var envmap_pars_vertex = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif";
var envmap_vertex = "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif";
var fog_vertex = "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif";
var fog_pars_vertex = "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif";
var fog_fragment = "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif";
var fog_pars_fragment = "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif";
var gradientmap_pars_fragment = "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}";
var lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif";
var lights_lambert_fragment = "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;";
var lights_lambert_pars_fragment = "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert";
var lights_pars_begin = "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif";
var envmap_physical_pars_fragment = "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif";
var lights_toon_fragment = "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;";
var lights_toon_pars_fragment = "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon";
var lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;";
var lights_phong_pars_fragment = "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong";
var lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif";
var lights_physical_pars_fragment = "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 uv = vec2( roughness, dotNV );\n	return texture2D( dfgLUT, uv ).rg;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nvec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );\n	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );\n	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;\n	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;\n	float Ess_V = dfgV.x + dfgV.y;\n	float Ess_L = dfgL.x + dfgL.y;\n	float Ems_V = 1.0 - Ess_V;\n	float Ems_L = 1.0 - Ess_L;\n	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;\n	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );\n	float compensationFactor = Ems_V * Ems_L;\n	vec3 multiScatter = Fms * compensationFactor;\n	return singleScatter + multiScatter;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}";
var lights_fragment_begin = "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif";
var lights_fragment_maps = "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif";
var lights_fragment_end = "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif";
var logdepthbuf_fragment = "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif";
var logdepthbuf_pars_fragment = "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif";
var logdepthbuf_pars_vertex = "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif";
var logdepthbuf_vertex = "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif";
var map_fragment = "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif";
var map_pars_fragment = "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif";
var map_particle_fragment = "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif";
var map_particle_pars_fragment = "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif";
var metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif";
var metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif";
var morphinstance_vertex = "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif";
var morphcolor_vertex = "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif";
var morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif";
var morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif";
var morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif";
var normal_fragment_begin = "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;";
var normal_fragment_maps = "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif";
var normal_pars_fragment = "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif";
var normal_pars_vertex = "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif";
var normal_vertex = "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif";
var normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif";
var clearcoat_normal_fragment_begin = "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif";
var clearcoat_normal_fragment_maps = "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif";
var clearcoat_pars_fragment = "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif";
var iridescence_pars_fragment = "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif";
var opaque_fragment = "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );";
var packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}";
var premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif";
var project_vertex = "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;";
var dithering_fragment = "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif";
var dithering_pars_fragment = "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif";
var roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif";
var roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif";
var shadowmap_pars_fragment = "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );\n		#ifdef USE_REVERSED_DEPTH_BUFFER\n			return step( depth, compare );\n		#else\n			return step( compare, depth );\n		#endif\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		#ifdef USE_REVERSED_DEPTH_BUFFER\n			float hard_shadow = step( distribution.x, compare );\n		#else\n			float hard_shadow = step( compare, distribution.x );\n		#endif\n		if ( hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		\n		float lightToPositionLength = length( lightToPosition );\n		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n				shadow = (\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n				) * ( 1.0 / 9.0 );\n			#else\n				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n			#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n#endif";
var shadowmap_pars_vertex = "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif";
var shadowmap_vertex = "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif";
var shadowmask_pars_fragment = "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}";
var skinbase_vertex = "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif";
var skinning_pars_vertex = "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif";
var skinning_vertex = "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif";
var skinnormal_vertex = "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif";
var specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif";
var specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif";
var tonemapping_fragment = "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif";
var tonemapping_pars_fragment = "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }";
var transmission_fragment = "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif";
var transmission_pars_fragment = "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif";
var uv_pars_fragment = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif";
var uv_pars_vertex = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif";
var uv_vertex = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif";
var worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif";
var vertex$h = "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}";
var fragment$h = "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}";
var vertex$g = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}";
var fragment$g = "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}";
var vertex$f = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}";
var fragment$f = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}";
var vertex$e = "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}";
var fragment$e = "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}";
var vertex$d = "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}";
var fragment$d = "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}";
var vertex$c = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}";
var fragment$c = "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}";
var vertex$b = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}";
var fragment$b = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}";
var vertex$a = "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$a = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$9 = "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$9 = "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$8 = "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}";
var fragment$8 = "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$7 = "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}";
var fragment$7 = "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}";
var vertex$6 = "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$6 = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$5 = "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}";
var fragment$5 = "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$4 = "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$4 = "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$3 = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}";
var fragment$3 = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}";
var vertex$2 = "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$2 = "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}";
var vertex$1 = "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}";
var fragment$1 = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}";
var ShaderChunk = {
  alphahash_fragment,
  alphahash_pars_fragment,
  alphamap_fragment,
  alphamap_pars_fragment,
  alphatest_fragment,
  alphatest_pars_fragment,
  aomap_fragment,
  aomap_pars_fragment,
  batching_pars_vertex,
  batching_vertex,
  begin_vertex,
  beginnormal_vertex,
  bsdfs,
  iridescence_fragment,
  bumpmap_pars_fragment,
  clipping_planes_fragment,
  clipping_planes_pars_fragment,
  clipping_planes_pars_vertex,
  clipping_planes_vertex,
  color_fragment,
  color_pars_fragment,
  color_pars_vertex,
  color_vertex,
  common,
  cube_uv_reflection_fragment,
  defaultnormal_vertex,
  displacementmap_pars_vertex,
  displacementmap_vertex,
  emissivemap_fragment,
  emissivemap_pars_fragment,
  colorspace_fragment,
  colorspace_pars_fragment,
  envmap_fragment,
  envmap_common_pars_fragment,
  envmap_pars_fragment,
  envmap_pars_vertex,
  envmap_physical_pars_fragment,
  envmap_vertex,
  fog_vertex,
  fog_pars_vertex,
  fog_fragment,
  fog_pars_fragment,
  gradientmap_pars_fragment,
  lightmap_pars_fragment,
  lights_lambert_fragment,
  lights_lambert_pars_fragment,
  lights_pars_begin,
  lights_toon_fragment,
  lights_toon_pars_fragment,
  lights_phong_fragment,
  lights_phong_pars_fragment,
  lights_physical_fragment,
  lights_physical_pars_fragment,
  lights_fragment_begin,
  lights_fragment_maps,
  lights_fragment_end,
  logdepthbuf_fragment,
  logdepthbuf_pars_fragment,
  logdepthbuf_pars_vertex,
  logdepthbuf_vertex,
  map_fragment,
  map_pars_fragment,
  map_particle_fragment,
  map_particle_pars_fragment,
  metalnessmap_fragment,
  metalnessmap_pars_fragment,
  morphinstance_vertex,
  morphcolor_vertex,
  morphnormal_vertex,
  morphtarget_pars_vertex,
  morphtarget_vertex,
  normal_fragment_begin,
  normal_fragment_maps,
  normal_pars_fragment,
  normal_pars_vertex,
  normal_vertex,
  normalmap_pars_fragment,
  clearcoat_normal_fragment_begin,
  clearcoat_normal_fragment_maps,
  clearcoat_pars_fragment,
  iridescence_pars_fragment,
  opaque_fragment,
  packing,
  premultiplied_alpha_fragment,
  project_vertex,
  dithering_fragment,
  dithering_pars_fragment,
  roughnessmap_fragment,
  roughnessmap_pars_fragment,
  shadowmap_pars_fragment,
  shadowmap_pars_vertex,
  shadowmap_vertex,
  shadowmask_pars_fragment,
  skinbase_vertex,
  skinning_pars_vertex,
  skinning_vertex,
  skinnormal_vertex,
  specularmap_fragment,
  specularmap_pars_fragment,
  tonemapping_fragment,
  tonemapping_pars_fragment,
  transmission_fragment,
  transmission_pars_fragment,
  uv_pars_fragment,
  uv_pars_vertex,
  uv_vertex,
  worldpos_vertex,
  background_vert: vertex$h,
  background_frag: fragment$h,
  backgroundCube_vert: vertex$g,
  backgroundCube_frag: fragment$g,
  cube_vert: vertex$f,
  cube_frag: fragment$f,
  depth_vert: vertex$e,
  depth_frag: fragment$e,
  distanceRGBA_vert: vertex$d,
  distanceRGBA_frag: fragment$d,
  equirect_vert: vertex$c,
  equirect_frag: fragment$c,
  linedashed_vert: vertex$b,
  linedashed_frag: fragment$b,
  meshbasic_vert: vertex$a,
  meshbasic_frag: fragment$a,
  meshlambert_vert: vertex$9,
  meshlambert_frag: fragment$9,
  meshmatcap_vert: vertex$8,
  meshmatcap_frag: fragment$8,
  meshnormal_vert: vertex$7,
  meshnormal_frag: fragment$7,
  meshphong_vert: vertex$6,
  meshphong_frag: fragment$6,
  meshphysical_vert: vertex$5,
  meshphysical_frag: fragment$5,
  meshtoon_vert: vertex$4,
  meshtoon_frag: fragment$4,
  points_vert: vertex$3,
  points_frag: fragment$3,
  shadow_vert: vertex$2,
  shadow_frag: fragment$2,
  sprite_vert: vertex$1,
  sprite_frag: fragment$1
};
var UniformsLib = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Color(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Matrix3() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 },
    // basic, lambert, phong
    dfgLUT: { value: null }
    // DFG LUT for physically-based rendering
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    normalScale: { value: /* @__PURE__ */ new Vector2(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Color(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Color(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Color(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Vector2(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaTest: { value: 0 }
  }
};
var ShaderLib = {
  basic: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.meshbasic_vert,
    fragmentShader: ShaderChunk.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) }
      }
    ]),
    vertexShader: ShaderChunk.meshlambert_vert,
    fragmentShader: ShaderChunk.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) },
        specular: { value: /* @__PURE__ */ new Color(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: ShaderChunk.meshphong_vert,
    fragmentShader: ShaderChunk.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.roughnessmap,
      UniformsLib.metalnessmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshphysical_vert,
    fragmentShader: ShaderChunk.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.gradientmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) }
      }
    ]),
    vertexShader: ShaderChunk.meshtoon_vert,
    fragmentShader: ShaderChunk.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: ShaderChunk.meshmatcap_vert,
    fragmentShader: ShaderChunk.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.points,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.points_vert,
    fragmentShader: ShaderChunk.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: ShaderChunk.linedashed_vert,
    fragmentShader: ShaderChunk.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.displacementmap
    ]),
    vertexShader: ShaderChunk.depth_vert,
    fragmentShader: ShaderChunk.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshnormal_vert,
    fragmentShader: ShaderChunk.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.sprite,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.sprite_vert,
    fragmentShader: ShaderChunk.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Matrix3() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: ShaderChunk.background_vert,
    fragmentShader: ShaderChunk.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Matrix3() }
    },
    vertexShader: ShaderChunk.backgroundCube_vert,
    fragmentShader: ShaderChunk.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: ShaderChunk.cube_vert,
    fragmentShader: ShaderChunk.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: ShaderChunk.equirect_vert,
    fragmentShader: ShaderChunk.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new Vector3() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: ShaderChunk.distanceRGBA_vert,
    fragmentShader: ShaderChunk.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.lights,
      UniformsLib.fog,
      {
        color: { value: /* @__PURE__ */ new Color(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.shadow_vert,
    fragmentShader: ShaderChunk.shadow_frag
  }
};
ShaderLib.physical = {
  uniforms: /* @__PURE__ */ mergeUniforms([
    ShaderLib.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Vector2(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Color(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Vector2() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Color(0) },
      specularColor: { value: /* @__PURE__ */ new Color(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      anisotropyVector: { value: /* @__PURE__ */ new Vector2() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Matrix3() }
    }
  ]),
  vertexShader: ShaderChunk.meshphysical_vert,
  fragmentShader: ShaderChunk.meshphysical_frag
};
var mat4array = new Float32Array(16);
var mat3array = new Float32Array(9);
var mat2array = new Float32Array(4);
var reversedFuncs = {
  [NeverDepth]: AlwaysDepth,
  [LessDepth]: GreaterDepth,
  [EqualDepth]: NotEqualDepth,
  [LessEqualDepth]: GreaterEqualDepth,
  [AlwaysDepth]: NeverDepth,
  [GreaterDepth]: LessDepth,
  [NotEqualDepth]: EqualDepth,
  [GreaterEqualDepth]: LessEqualDepth
};
var DATA = new Uint16Array([
  11481,
  15204,
  11534,
  15171,
  11808,
  15015,
  12385,
  14843,
  12894,
  14716,
  13396,
  14600,
  13693,
  14483,
  13976,
  14366,
  14237,
  14171,
  14405,
  13961,
  14511,
  13770,
  14605,
  13598,
  14687,
  13444,
  14760,
  13305,
  14822,
  13066,
  14876,
  12857,
  14923,
  12675,
  14963,
  12517,
  14997,
  12379,
  15025,
  12230,
  15049,
  12023,
  15070,
  11843,
  15086,
  11687,
  15100,
  11551,
  15111,
  11433,
  15120,
  11330,
  15127,
  11217,
  15132,
  11060,
  15135,
  10922,
  15138,
  10801,
  15139,
  10695,
  15139,
  10600,
  13012,
  14923,
  13020,
  14917,
  13064,
  14886,
  13176,
  14800,
  13349,
  14666,
  13513,
  14526,
  13724,
  14398,
  13960,
  14230,
  14200,
  14020,
  14383,
  13827,
  14488,
  13651,
  14583,
  13491,
  14667,
  13348,
  14740,
  13132,
  14803,
  12908,
  14856,
  12713,
  14901,
  12542,
  14938,
  12394,
  14968,
  12241,
  14992,
  12017,
  15010,
  11822,
  15024,
  11654,
  15034,
  11507,
  15041,
  11380,
  15044,
  11269,
  15044,
  11081,
  15042,
  10913,
  15037,
  10764,
  15031,
  10635,
  15023,
  10520,
  15014,
  10419,
  15003,
  10330,
  13657,
  14676,
  13658,
  14673,
  13670,
  14660,
  13698,
  14622,
  13750,
  14547,
  13834,
  14442,
  13956,
  14317,
  14112,
  14093,
  14291,
  13889,
  14407,
  13704,
  14499,
  13538,
  14586,
  13389,
  14664,
  13201,
  14733,
  12966,
  14792,
  12758,
  14842,
  12577,
  14882,
  12418,
  14915,
  12272,
  14940,
  12033,
  14959,
  11826,
  14972,
  11646,
  14980,
  11490,
  14983,
  11355,
  14983,
  11212,
  14979,
  11008,
  14971,
  10830,
  14961,
  10675,
  14950,
  10540,
  14936,
  10420,
  14923,
  10315,
  14909,
  10204,
  14894,
  10041,
  14089,
  14460,
  14090,
  14459,
  14096,
  14452,
  14112,
  14431,
  14141,
  14388,
  14186,
  14305,
  14252,
  14130,
  14341,
  13941,
  14399,
  13756,
  14467,
  13585,
  14539,
  13430,
  14610,
  13272,
  14677,
  13026,
  14737,
  12808,
  14790,
  12617,
  14833,
  12449,
  14869,
  12303,
  14896,
  12065,
  14916,
  11845,
  14929,
  11655,
  14937,
  11490,
  14939,
  11347,
  14936,
  11184,
  14930,
  10970,
  14921,
  10783,
  14912,
  10621,
  14900,
  10480,
  14885,
  10356,
  14867,
  10247,
  14848,
  10062,
  14827,
  9894,
  14805,
  9745,
  14400,
  14208,
  14400,
  14206,
  14402,
  14198,
  14406,
  14174,
  14415,
  14122,
  14427,
  14035,
  14444,
  13913,
  14469,
  13767,
  14504,
  13613,
  14548,
  13463,
  14598,
  13324,
  14651,
  13082,
  14704,
  12858,
  14752,
  12658,
  14795,
  12483,
  14831,
  12330,
  14860,
  12106,
  14881,
  11875,
  14895,
  11675,
  14903,
  11501,
  14905,
  11351,
  14903,
  11178,
  14900,
  10953,
  14892,
  10757,
  14880,
  10589,
  14865,
  10442,
  14847,
  10313,
  14827,
  10162,
  14805,
  9965,
  14782,
  9792,
  14757,
  9642,
  14731,
  9507,
  14562,
  13883,
  14562,
  13883,
  14563,
  13877,
  14566,
  13862,
  14570,
  13830,
  14576,
  13773,
  14584,
  13689,
  14595,
  13582,
  14613,
  13461,
  14637,
  13336,
  14668,
  13120,
  14704,
  12897,
  14741,
  12695,
  14776,
  12516,
  14808,
  12358,
  14835,
  12150,
  14856,
  11910,
  14870,
  11701,
  14878,
  11519,
  14882,
  11361,
  14884,
  11187,
  14880,
  10951,
  14871,
  10748,
  14858,
  10572,
  14842,
  10418,
  14823,
  10286,
  14801,
  10099,
  14777,
  9897,
  14751,
  9722,
  14725,
  9567,
  14696,
  9430,
  14666,
  9309,
  14702,
  13604,
  14702,
  13604,
  14702,
  13600,
  14703,
  13591,
  14705,
  13570,
  14707,
  13533,
  14709,
  13477,
  14712,
  13400,
  14718,
  13305,
  14727,
  13106,
  14743,
  12907,
  14762,
  12716,
  14784,
  12539,
  14807,
  12380,
  14827,
  12190,
  14844,
  11943,
  14855,
  11727,
  14863,
  11539,
  14870,
  11376,
  14871,
  11204,
  14868,
  10960,
  14858,
  10748,
  14845,
  10565,
  14829,
  10406,
  14809,
  10269,
  14786,
  10058,
  14761,
  9852,
  14734,
  9671,
  14705,
  9512,
  14674,
  9374,
  14641,
  9253,
  14608,
  9076,
  14821,
  13366,
  14821,
  13365,
  14821,
  13364,
  14821,
  13358,
  14821,
  13344,
  14821,
  13320,
  14819,
  13252,
  14817,
  13145,
  14815,
  13011,
  14814,
  12858,
  14817,
  12698,
  14823,
  12539,
  14832,
  12389,
  14841,
  12214,
  14850,
  11968,
  14856,
  11750,
  14861,
  11558,
  14866,
  11390,
  14867,
  11226,
  14862,
  10972,
  14853,
  10754,
  14840,
  10565,
  14823,
  10401,
  14803,
  10259,
  14780,
  10032,
  14754,
  9820,
  14725,
  9635,
  14694,
  9473,
  14661,
  9333,
  14627,
  9203,
  14593,
  8988,
  14557,
  8798,
  14923,
  13014,
  14922,
  13014,
  14922,
  13012,
  14922,
  13004,
  14920,
  12987,
  14919,
  12957,
  14915,
  12907,
  14909,
  12834,
  14902,
  12738,
  14894,
  12623,
  14888,
  12498,
  14883,
  12370,
  14880,
  12203,
  14878,
  11970,
  14875,
  11759,
  14873,
  11569,
  14874,
  11401,
  14872,
  11243,
  14865,
  10986,
  14855,
  10762,
  14842,
  10568,
  14825,
  10401,
  14804,
  10255,
  14781,
  10017,
  14754,
  9799,
  14725,
  9611,
  14692,
  9445,
  14658,
  9301,
  14623,
  9139,
  14587,
  8920,
  14548,
  8729,
  14509,
  8562,
  15008,
  12672,
  15008,
  12672,
  15008,
  12671,
  15007,
  12667,
  15005,
  12656,
  15001,
  12637,
  14997,
  12605,
  14989,
  12556,
  14978,
  12490,
  14966,
  12407,
  14953,
  12313,
  14940,
  12136,
  14927,
  11934,
  14914,
  11742,
  14903,
  11563,
  14896,
  11401,
  14889,
  11247,
  14879,
  10992,
  14866,
  10767,
  14851,
  10570,
  14833,
  10400,
  14812,
  10252,
  14789,
  10007,
  14761,
  9784,
  14731,
  9592,
  14698,
  9424,
  14663,
  9279,
  14627,
  9088,
  14588,
  8868,
  14548,
  8676,
  14508,
  8508,
  14467,
  8360,
  15080,
  12386,
  15080,
  12386,
  15079,
  12385,
  15078,
  12383,
  15076,
  12378,
  15072,
  12367,
  15066,
  12347,
  15057,
  12315,
  15045,
  12253,
  15030,
  12138,
  15012,
  11998,
  14993,
  11845,
  14972,
  11685,
  14951,
  11530,
  14935,
  11383,
  14920,
  11228,
  14904,
  10981,
  14887,
  10762,
  14870,
  10567,
  14850,
  10397,
  14827,
  10248,
  14803,
  9997,
  14774,
  9771,
  14743,
  9578,
  14710,
  9407,
  14674,
  9259,
  14637,
  9048,
  14596,
  8826,
  14555,
  8632,
  14514,
  8464,
  14471,
  8317,
  14427,
  8182,
  15139,
  12008,
  15139,
  12008,
  15138,
  12008,
  15137,
  12007,
  15135,
  12003,
  15130,
  11990,
  15124,
  11969,
  15115,
  11929,
  15102,
  11872,
  15086,
  11794,
  15064,
  11693,
  15041,
  11581,
  15013,
  11459,
  14987,
  11336,
  14966,
  11170,
  14944,
  10944,
  14921,
  10738,
  14898,
  10552,
  14875,
  10387,
  14850,
  10239,
  14824,
  9983,
  14794,
  9758,
  14762,
  9563,
  14728,
  9392,
  14692,
  9244,
  14653,
  9014,
  14611,
  8791,
  14569,
  8597,
  14526,
  8427,
  14481,
  8281,
  14436,
  8110,
  14391,
  7885,
  15188,
  11617,
  15188,
  11617,
  15187,
  11617,
  15186,
  11618,
  15183,
  11617,
  15179,
  11612,
  15173,
  11601,
  15163,
  11581,
  15150,
  11546,
  15133,
  11495,
  15110,
  11427,
  15083,
  11346,
  15051,
  11246,
  15024,
  11057,
  14996,
  10868,
  14967,
  10687,
  14938,
  10517,
  14911,
  10362,
  14882,
  10206,
  14853,
  9956,
  14821,
  9737,
  14787,
  9543,
  14752,
  9375,
  14715,
  9228,
  14675,
  8980,
  14632,
  8760,
  14589,
  8565,
  14544,
  8395,
  14498,
  8248,
  14451,
  8049,
  14404,
  7824,
  14357,
  7630,
  15228,
  11298,
  15228,
  11298,
  15227,
  11299,
  15226,
  11301,
  15223,
  11303,
  15219,
  11302,
  15213,
  11299,
  15204,
  11290,
  15191,
  11271,
  15174,
  11217,
  15150,
  11129,
  15119,
  11015,
  15087,
  10886,
  15057,
  10744,
  15024,
  10599,
  14990,
  10455,
  14957,
  10318,
  14924,
  10143,
  14891,
  9911,
  14856,
  9701,
  14820,
  9516,
  14782,
  9352,
  14744,
  9200,
  14703,
  8946,
  14659,
  8725,
  14615,
  8533,
  14568,
  8366,
  14521,
  8220,
  14472,
  7992,
  14423,
  7770,
  14374,
  7578,
  14315,
  7408,
  15260,
  10819,
  15260,
  10819,
  15259,
  10822,
  15258,
  10826,
  15256,
  10832,
  15251,
  10836,
  15246,
  10841,
  15237,
  10838,
  15225,
  10821,
  15207,
  10788,
  15183,
  10734,
  15151,
  10660,
  15120,
  10571,
  15087,
  10469,
  15049,
  10359,
  15012,
  10249,
  14974,
  10041,
  14937,
  9837,
  14900,
  9647,
  14860,
  9475,
  14820,
  9320,
  14779,
  9147,
  14736,
  8902,
  14691,
  8688,
  14646,
  8499,
  14598,
  8335,
  14549,
  8189,
  14499,
  7940,
  14448,
  7720,
  14397,
  7529,
  14347,
  7363,
  14256,
  7218,
  15285,
  10410,
  15285,
  10411,
  15285,
  10413,
  15284,
  10418,
  15282,
  10425,
  15278,
  10434,
  15272,
  10442,
  15264,
  10449,
  15252,
  10445,
  15235,
  10433,
  15210,
  10403,
  15179,
  10358,
  15149,
  10301,
  15113,
  10218,
  15073,
  10059,
  15033,
  9894,
  14991,
  9726,
  14951,
  9565,
  14909,
  9413,
  14865,
  9273,
  14822,
  9073,
  14777,
  8845,
  14730,
  8641,
  14682,
  8459,
  14633,
  8300,
  14583,
  8129,
  14531,
  7883,
  14479,
  7670,
  14426,
  7482,
  14373,
  7321,
  14305,
  7176,
  14201,
  6939,
  15305,
  9939,
  15305,
  9940,
  15305,
  9945,
  15304,
  9955,
  15302,
  9967,
  15298,
  9989,
  15293,
  10010,
  15286,
  10033,
  15274,
  10044,
  15258,
  10045,
  15233,
  10022,
  15205,
  9975,
  15174,
  9903,
  15136,
  9808,
  15095,
  9697,
  15053,
  9578,
  15009,
  9451,
  14965,
  9327,
  14918,
  9198,
  14871,
  8973,
  14825,
  8766,
  14775,
  8579,
  14725,
  8408,
  14675,
  8259,
  14622,
  8058,
  14569,
  7821,
  14515,
  7615,
  14460,
  7435,
  14405,
  7276,
  14350,
  7108,
  14256,
  6866,
  14149,
  6653,
  15321,
  9444,
  15321,
  9445,
  15321,
  9448,
  15320,
  9458,
  15317,
  9470,
  15314,
  9490,
  15310,
  9515,
  15302,
  9540,
  15292,
  9562,
  15276,
  9579,
  15251,
  9577,
  15226,
  9559,
  15195,
  9519,
  15156,
  9463,
  15116,
  9389,
  15071,
  9304,
  15025,
  9208,
  14978,
  9023,
  14927,
  8838,
  14878,
  8661,
  14827,
  8496,
  14774,
  8344,
  14722,
  8206,
  14667,
  7973,
  14612,
  7749,
  14556,
  7555,
  14499,
  7382,
  14443,
  7229,
  14385,
  7025,
  14322,
  6791,
  14210,
  6588,
  14100,
  6409,
  15333,
  8920,
  15333,
  8921,
  15332,
  8927,
  15332,
  8943,
  15329,
  8965,
  15326,
  9002,
  15322,
  9048,
  15316,
  9106,
  15307,
  9162,
  15291,
  9204,
  15267,
  9221,
  15244,
  9221,
  15212,
  9196,
  15175,
  9134,
  15133,
  9043,
  15088,
  8930,
  15040,
  8801,
  14990,
  8665,
  14938,
  8526,
  14886,
  8391,
  14830,
  8261,
  14775,
  8087,
  14719,
  7866,
  14661,
  7664,
  14603,
  7482,
  14544,
  7322,
  14485,
  7178,
  14426,
  6936,
  14367,
  6713,
  14281,
  6517,
  14166,
  6348,
  14054,
  6198,
  15341,
  8360,
  15341,
  8361,
  15341,
  8366,
  15341,
  8379,
  15339,
  8399,
  15336,
  8431,
  15332,
  8473,
  15326,
  8527,
  15318,
  8585,
  15302,
  8632,
  15281,
  8670,
  15258,
  8690,
  15227,
  8690,
  15191,
  8664,
  15149,
  8612,
  15104,
  8543,
  15055,
  8456,
  15001,
  8360,
  14948,
  8259,
  14892,
  8122,
  14834,
  7923,
  14776,
  7734,
  14716,
  7558,
  14656,
  7397,
  14595,
  7250,
  14534,
  7070,
  14472,
  6835,
  14410,
  6628,
  14350,
  6443,
  14243,
  6283,
  14125,
  6135,
  14010,
  5889,
  15348,
  7715,
  15348,
  7717,
  15348,
  7725,
  15347,
  7745,
  15345,
  7780,
  15343,
  7836,
  15339,
  7905,
  15334,
  8e3,
  15326,
  8103,
  15310,
  8193,
  15293,
  8239,
  15270,
  8270,
  15240,
  8287,
  15204,
  8283,
  15163,
  8260,
  15118,
  8223,
  15067,
  8143,
  15014,
  8014,
  14958,
  7873,
  14899,
  7723,
  14839,
  7573,
  14778,
  7430,
  14715,
  7293,
  14652,
  7164,
  14588,
  6931,
  14524,
  6720,
  14460,
  6531,
  14396,
  6362,
  14330,
  6210,
  14207,
  6015,
  14086,
  5781,
  13969,
  5576,
  15352,
  7114,
  15352,
  7116,
  15352,
  7128,
  15352,
  7159,
  15350,
  7195,
  15348,
  7237,
  15345,
  7299,
  15340,
  7374,
  15332,
  7457,
  15317,
  7544,
  15301,
  7633,
  15280,
  7703,
  15251,
  7754,
  15216,
  7775,
  15176,
  7767,
  15131,
  7733,
  15079,
  7670,
  15026,
  7588,
  14967,
  7492,
  14906,
  7387,
  14844,
  7278,
  14779,
  7171,
  14714,
  6965,
  14648,
  6770,
  14581,
  6587,
  14515,
  6420,
  14448,
  6269,
  14382,
  6123,
  14299,
  5881,
  14172,
  5665,
  14049,
  5477,
  13929,
  5310,
  15355,
  6329,
  15355,
  6330,
  15355,
  6339,
  15355,
  6362,
  15353,
  6410,
  15351,
  6472,
  15349,
  6572,
  15344,
  6688,
  15337,
  6835,
  15323,
  6985,
  15309,
  7142,
  15287,
  7220,
  15260,
  7277,
  15226,
  7310,
  15188,
  7326,
  15142,
  7318,
  15090,
  7285,
  15036,
  7239,
  14976,
  7177,
  14914,
  7045,
  14849,
  6892,
  14782,
  6736,
  14714,
  6581,
  14645,
  6433,
  14576,
  6293,
  14506,
  6164,
  14438,
  5946,
  14369,
  5733,
  14270,
  5540,
  14140,
  5369,
  14014,
  5216,
  13892,
  5043,
  15357,
  5483,
  15357,
  5484,
  15357,
  5496,
  15357,
  5528,
  15356,
  5597,
  15354,
  5692,
  15351,
  5835,
  15347,
  6011,
  15339,
  6195,
  15328,
  6317,
  15314,
  6446,
  15293,
  6566,
  15268,
  6668,
  15235,
  6746,
  15197,
  6796,
  15152,
  6811,
  15101,
  6790,
  15046,
  6748,
  14985,
  6673,
  14921,
  6583,
  14854,
  6479,
  14785,
  6371,
  14714,
  6259,
  14643,
  6149,
  14571,
  5946,
  14499,
  5750,
  14428,
  5567,
  14358,
  5401,
  14242,
  5250,
  14109,
  5111,
  13980,
  4870,
  13856,
  4657,
  15359,
  4555,
  15359,
  4557,
  15358,
  4573,
  15358,
  4633,
  15357,
  4715,
  15355,
  4841,
  15353,
  5061,
  15349,
  5216,
  15342,
  5391,
  15331,
  5577,
  15318,
  5770,
  15299,
  5967,
  15274,
  6150,
  15243,
  6223,
  15206,
  6280,
  15161,
  6310,
  15111,
  6317,
  15055,
  6300,
  14994,
  6262,
  14928,
  6208,
  14860,
  6141,
  14788,
  5994,
  14715,
  5838,
  14641,
  5684,
  14566,
  5529,
  14492,
  5384,
  14418,
  5247,
  14346,
  5121,
  14216,
  4892,
  14079,
  4682,
  13948,
  4496,
  13822,
  4330,
  15359,
  3498,
  15359,
  3501,
  15359,
  3520,
  15359,
  3598,
  15358,
  3719,
  15356,
  3860,
  15355,
  4137,
  15351,
  4305,
  15344,
  4563,
  15334,
  4809,
  15321,
  5116,
  15303,
  5273,
  15280,
  5418,
  15250,
  5547,
  15214,
  5653,
  15170,
  5722,
  15120,
  5761,
  15064,
  5763,
  15002,
  5733,
  14935,
  5673,
  14865,
  5597,
  14792,
  5504,
  14716,
  5400,
  14640,
  5294,
  14563,
  5185,
  14486,
  5041,
  14410,
  4841,
  14335,
  4655,
  14191,
  4482,
  14051,
  4325,
  13918,
  4183,
  13790,
  4012,
  15360,
  2282,
  15360,
  2285,
  15360,
  2306,
  15360,
  2401,
  15359,
  2547,
  15357,
  2748,
  15355,
  3103,
  15352,
  3349,
  15345,
  3675,
  15336,
  4020,
  15324,
  4272,
  15307,
  4496,
  15285,
  4716,
  15255,
  4908,
  15220,
  5086,
  15178,
  5170,
  15128,
  5214,
  15072,
  5234,
  15010,
  5231,
  14943,
  5206,
  14871,
  5166,
  14796,
  5102,
  14718,
  4971,
  14639,
  4833,
  14559,
  4687,
  14480,
  4541,
  14402,
  4401,
  14315,
  4268,
  14167,
  4142,
  14025,
  3958,
  13888,
  3747,
  13759,
  3556,
  15360,
  923,
  15360,
  925,
  15360,
  946,
  15360,
  1052,
  15359,
  1214,
  15357,
  1494,
  15356,
  1892,
  15352,
  2274,
  15346,
  2663,
  15338,
  3099,
  15326,
  3393,
  15309,
  3679,
  15288,
  3980,
  15260,
  4183,
  15226,
  4325,
  15185,
  4437,
  15136,
  4517,
  15080,
  4570,
  15018,
  4591,
  14950,
  4581,
  14877,
  4545,
  14800,
  4485,
  14720,
  4411,
  14638,
  4325,
  14556,
  4231,
  14475,
  4136,
  14395,
  3988,
  14297,
  3803,
  14145,
  3628,
  13999,
  3465,
  13861,
  3314,
  13729,
  3177,
  15360,
  263,
  15360,
  264,
  15360,
  272,
  15360,
  325,
  15359,
  407,
  15358,
  548,
  15356,
  780,
  15352,
  1144,
  15347,
  1580,
  15339,
  2099,
  15328,
  2425,
  15312,
  2795,
  15292,
  3133,
  15264,
  3329,
  15232,
  3517,
  15191,
  3689,
  15143,
  3819,
  15088,
  3923,
  15025,
  3978,
  14956,
  3999,
  14882,
  3979,
  14804,
  3931,
  14722,
  3855,
  14639,
  3756,
  14554,
  3645,
  14470,
  3529,
  14388,
  3409,
  14279,
  3289,
  14124,
  3173,
  13975,
  3055,
  13834,
  2848,
  13701,
  2658,
  15360,
  49,
  15360,
  49,
  15360,
  52,
  15360,
  75,
  15359,
  111,
  15358,
  201,
  15356,
  283,
  15353,
  519,
  15348,
  726,
  15340,
  1045,
  15329,
  1415,
  15314,
  1795,
  15295,
  2173,
  15269,
  2410,
  15237,
  2649,
  15197,
  2866,
  15150,
  3054,
  15095,
  3140,
  15032,
  3196,
  14963,
  3228,
  14888,
  3236,
  14808,
  3224,
  14725,
  3191,
  14639,
  3146,
  14553,
  3088,
  14466,
  2976,
  14382,
  2836,
  14262,
  2692,
  14103,
  2549,
  13952,
  2409,
  13808,
  2278,
  13674,
  2154,
  15360,
  4,
  15360,
  4,
  15360,
  4,
  15360,
  13,
  15359,
  33,
  15358,
  59,
  15357,
  112,
  15353,
  199,
  15348,
  302,
  15341,
  456,
  15331,
  628,
  15316,
  827,
  15297,
  1082,
  15272,
  1332,
  15241,
  1601,
  15202,
  1851,
  15156,
  2069,
  15101,
  2172,
  15039,
  2256,
  14970,
  2314,
  14894,
  2348,
  14813,
  2358,
  14728,
  2344,
  14640,
  2311,
  14551,
  2263,
  14463,
  2203,
  14376,
  2133,
  14247,
  2059,
  14084,
  1915,
  13930,
  1761,
  13784,
  1609,
  13648,
  1464,
  15360,
  0,
  15360,
  0,
  15360,
  0,
  15360,
  3,
  15359,
  18,
  15358,
  26,
  15357,
  53,
  15354,
  80,
  15348,
  97,
  15341,
  165,
  15332,
  238,
  15318,
  326,
  15299,
  427,
  15275,
  529,
  15245,
  654,
  15207,
  771,
  15161,
  885,
  15108,
  994,
  15046,
  1089,
  14976,
  1170,
  14900,
  1229,
  14817,
  1266,
  14731,
  1284,
  14641,
  1282,
  14550,
  1260,
  14460,
  1223,
  14370,
  1174,
  14232,
  1116,
  14066,
  1050,
  13909,
  981,
  13761,
  910,
  13623,
  839
]);

// src/r45/time.ts
var FPS2 = 30;
var F = (sec) => Math.round(sec * FPS2);
var ofScene = (id) => CUES.filter((c2) => c2.scene === id);
var cue = (id, i2) => F(ofScene(id)[i2].a);
var cueEnd = (id, i2) => F(ofScene(id)[i2].b);

// ../034-ohtani/node_modules/three/examples/jsm/geometries/TextGeometry.js
var TextGeometry = class extends ExtrudeGeometry {
  /**
   * Constructs a new text geometry.
   *
   * @param {string} text - The text that should be transformed into a geometry.
   * @param {TextGeometry~Options} [parameters] - The text settings.
   */
  constructor(text, parameters = {}) {
    const font = parameters.font;
    if (font === void 0) {
      super();
    } else {
      const shapes = font.generateShapes(text, parameters.size, parameters.direction);
      if (parameters.depth === void 0) parameters.depth = 50;
      if (parameters.bevelThickness === void 0) parameters.bevelThickness = 10;
      if (parameters.bevelSize === void 0) parameters.bevelSize = 8;
      if (parameters.bevelEnabled === void 0) parameters.bevelEnabled = false;
      super(shapes, parameters);
    }
    this.type = "TextGeometry";
  }
};

// ../034-ohtani/node_modules/three/examples/jsm/loaders/FontLoader.js
var Font = class {
  /**
   * Constructs a new font.
   *
   * @param {Object} data - The font data as JSON.
   */
  constructor(data) {
    this.isFont = true;
    this.type = "Font";
    this.data = data;
  }
  /**
   * Generates geometry shapes from the given text and size. The result of this method
   * should be used with {@link ShapeGeometry} to generate the actual geometry data.
   *
   * @param {string} text - The text.
   * @param {number} [size=100] - The text size.
   * @param {string} [direction='ltr'] - Char direction: ltr(left to right), rtl(right to left) & tb(top bottom).
   * @return {Array<Shape>} An array of shapes representing the text.
   */
  generateShapes(text, size = 100, direction = "ltr") {
    const shapes = [];
    const paths = createPaths(text, size, this.data, direction);
    for (let p2 = 0, pl = paths.length; p2 < pl; p2++) {
      shapes.push(...paths[p2].toShapes());
    }
    return shapes;
  }
};
function createPaths(text, size, data, direction) {
  const chars = Array.from(text);
  const scale = size / data.resolution;
  const line_height = (data.boundingBox.yMax - data.boundingBox.yMin + data.underlineThickness) * scale;
  const paths = [];
  let offsetX = 0, offsetY = 0;
  if (direction == "rtl" || direction == "tb") {
    chars.reverse();
  }
  for (let i2 = 0; i2 < chars.length; i2++) {
    const char = chars[i2];
    if (char === "\n") {
      offsetX = 0;
      offsetY -= line_height;
    } else {
      const ret = createPath(char, scale, offsetX, offsetY, data);
      if (direction == "tb") {
        offsetX = 0;
        offsetY += data.ascender * scale;
      } else {
        offsetX += ret.offsetX;
      }
      paths.push(ret.path);
    }
  }
  return paths;
}
function createPath(char, scale, offsetX, offsetY, data) {
  const glyph = data.glyphs[char] || data.glyphs["?"];
  if (!glyph) {
    console.error('THREE.Font: character "' + char + '" does not exists in font family ' + data.familyName + ".");
    return;
  }
  const path = new ShapePath();
  let x2, y2, cpx, cpy, cpx1, cpy1, cpx2, cpy2;
  if (glyph.o) {
    const outline = glyph._cachedOutline || (glyph._cachedOutline = glyph.o.split(" "));
    for (let i2 = 0, l2 = outline.length; i2 < l2; ) {
      const action = outline[i2++];
      switch (action) {
        case "m":
          x2 = outline[i2++] * scale + offsetX;
          y2 = outline[i2++] * scale + offsetY;
          path.moveTo(x2, y2);
          break;
        case "l":
          x2 = outline[i2++] * scale + offsetX;
          y2 = outline[i2++] * scale + offsetY;
          path.lineTo(x2, y2);
          break;
        case "q":
          cpx = outline[i2++] * scale + offsetX;
          cpy = outline[i2++] * scale + offsetY;
          cpx1 = outline[i2++] * scale + offsetX;
          cpy1 = outline[i2++] * scale + offsetY;
          path.quadraticCurveTo(cpx1, cpy1, cpx, cpy);
          break;
        case "b":
          cpx = outline[i2++] * scale + offsetX;
          cpy = outline[i2++] * scale + offsetY;
          cpx1 = outline[i2++] * scale + offsetX;
          cpy1 = outline[i2++] * scale + offsetY;
          cpx2 = outline[i2++] * scale + offsetX;
          cpy2 = outline[i2++] * scale + offsetY;
          path.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, cpx, cpy);
          break;
      }
    }
  }
  return { offsetX: glyph.ha * scale, path };
}

// src/three/fonts/archivo500.json
var archivo500_default = { glyphs: { "0": { ha: 797, x_min: 68, x_max: 729, o: "m 399 -17 l 399 -17 q 260 6 322 -17 q 156 85 199 29 q 91 235 114 140 q 68 476 68 331 l 68 476 q 91 717 68 622 q 156 868 114 813 q 260 947 199 924 q 399 969 322 969 l 399 969 q 538 947 476 969 q 641 868 599 924 q 706 717 683 813 q 729 476 729 622 l 729 476 q 706 235 729 331 q 641 85 683 140 q 538 6 599 29 q 399 -17 476 -17 z m 399 103 l 399 103 q 510 141 472 103 q 564 254 549 179 q 579 440 579 329 l 579 440 l 579 508 q 564 698 579 622 q 510 812 549 774 q 399 850 472 850 l 399 850 q 288 812 326 850 q 233 699 249 774 q 218 511 218 624 l 218 511 l 218 443 q 233 256 218 332 q 288 141 249 179 q 399 103 326 103 z " }, "1": { ha: 760, x_min: 113, x_max: 713, o: "m 713 0 l 113 0 l 113 121 l 349 121 l 349 753 l 113 753 l 113 843 q 214 860 158 846 q 325 897 269 874 q 426 954 381 921 l 426 954 l 494 954 l 494 121 l 713 121 l 713 0 z " }, "2": { ha: 793, x_min: 69, x_max: 729, o: "m 729 0 l 69 0 l 69 43 q 92 153 69 103 q 153 246 115 204 q 239 325 192 288 q 335 397 286 363 l 335 397 q 453 489 399 443 q 541 588 507 535 q 575 706 575 640 l 575 706 q 558 775 575 743 q 504 827 540 807 q 410 847 468 847 l 410 847 q 306 826 346 847 q 248 767 267 804 q 229 682 229 731 l 229 682 l 229 625 l 85 625 q 82 646 83 632 q 81 681 81 660 l 81 681 q 127 847 81 783 q 251 940 174 910 q 417 969 328 969 l 417 969 q 562 945 503 969 q 656 881 621 921 q 708 792 692 840 q 724 697 724 743 l 724 697 q 701 576 724 631 q 637 475 678 522 q 541 384 596 428 q 424 297 486 340 l 424 297 q 348 243 385 271 q 283 187 311 215 q 246 132 256 158 l 246 132 l 729 132 l 729 0 z " }, "3": { ha: 799, x_min: 60, x_max: 733, o: "m 401 -17 l 401 -17 q 215 18 290 -17 q 99 117 139 53 q 60 267 60 181 l 60 267 l 60 285 l 206 285 l 206 264 q 255 144 206 186 q 393 103 304 103 l 393 103 q 531 142 479 103 q 583 267 583 181 l 583 267 q 556 363 583 329 q 482 411 528 397 q 385 425 436 425 l 385 425 l 294 425 l 294 544 l 389 544 q 476 560 436 544 q 540 612 515 576 q 564 703 564 647 l 564 703 q 542 786 564 754 q 483 834 521 818 q 400 850 446 850 l 400 850 q 312 833 351 850 q 250 782 272 815 q 228 697 228 749 l 228 697 l 228 676 l 81 676 l 81 706 q 122 844 81 785 q 234 937 163 904 q 397 969 306 969 l 397 969 q 562 940 490 969 q 673 852 633 910 q 713 711 713 794 l 713 711 q 692 611 713 653 q 635 542 671 569 q 557 494 600 514 l 557 494 l 557 489 q 683 408 632 467 q 733 256 733 350 l 733 256 q 691 110 733 171 q 574 16 649 49 q 401 -17 499 -17 z " }, "4": { ha: 786, x_min: 42, x_max: 740, o: "m 618 0 l 474 0 l 474 224 l 42 224 l 42 343 q 146 539 99 440 q 232 745 193 638 q 297 969 271 853 l 297 969 l 449 969 q 403 816 431 894 q 344 663 376 738 q 279 524 311 588 q 219 413 247 460 q 175 343 192 365 l 175 343 l 474 343 l 474 617 q 494 667 483 640 q 514 723 504 694 q 532 778 524 751 q 547 828 540 804 l 547 828 l 618 828 l 618 343 l 740 343 l 740 224 l 618 224 l 618 0 z " }, "5": { ha: 796, x_min: 67, x_max: 732, o: "m 401 -17 l 401 -17 q 226 21 301 -17 q 108 128 150 58 q 67 296 67 199 l 67 296 l 215 296 q 239 192 215 236 q 305 126 263 149 q 401 103 347 103 l 401 103 q 495 126 454 103 q 559 195 536 149 q 582 311 582 242 l 582 311 q 560 417 582 375 q 499 480 539 460 q 408 500 460 500 l 408 500 q 338 488 371 500 q 279 456 304 476 q 236 406 254 435 l 236 406 l 100 425 l 139 953 l 682 953 l 682 819 l 265 819 l 246 553 q 295 585 268 569 q 359 610 322 600 q 443 619 396 619 l 443 619 q 589 586 524 619 q 693 485 654 553 q 732 313 732 418 l 732 313 q 692 135 732 208 q 578 22 651 61 q 401 -17 504 -17 z " }, "6": { ha: 799, x_min: 69, x_max: 739, o: "m 419 -17 l 419 -17 q 273 7 338 -17 q 163 84 208 31 q 93 227 117 138 q 69 449 69 317 l 69 449 q 92 696 69 596 q 160 856 115 796 q 268 943 204 917 q 414 969 332 969 l 414 969 q 581 931 517 969 q 676 825 646 892 q 706 674 706 758 l 706 674 l 558 674 q 542 770 558 731 q 492 830 526 810 q 407 850 458 850 l 407 850 q 290 809 331 850 q 234 692 249 768 q 218 511 219 617 l 218 511 q 264 557 232 533 q 342 597 296 581 q 444 613 389 613 l 444 613 q 611 572 546 613 q 708 460 676 531 q 739 300 739 389 l 739 300 q 697 133 739 204 q 583 22 656 61 q 419 -17 511 -17 z m 410 103 l 410 103 q 510 130 471 103 q 569 202 550 157 q 589 301 589 247 l 589 301 q 570 399 589 356 q 512 469 551 443 q 411 494 472 494 l 411 494 q 310 469 350 494 q 250 399 269 443 q 231 297 231 354 l 231 297 q 250 199 231 244 q 309 128 269 154 q 410 103 349 103 z " }, "7": { ha: 783, x_min: 58, x_max: 733, o: "m 361 0 l 203 0 q 233 240 203 124 q 316 460 264 356 q 430 656 368 565 q 553 819 492 747 l 553 819 l 58 819 l 58 953 l 733 953 l 733 860 q 632 731 685 801 q 531 582 579 661 q 444 418 482 503 q 383 245 406 333 q 361 68 361 157 l 361 68 l 361 0 z " }, "8": { ha: 799, x_min: 64, x_max: 733, o: "m 400 -17 l 400 -17 q 206 21 281 -17 q 98 122 132 58 q 64 261 64 185 l 64 261 q 101 398 64 339 q 221 489 139 457 l 221 489 q 122 581 156 524 q 89 706 89 638 l 89 706 q 124 839 89 779 q 228 934 158 899 q 400 969 297 969 l 400 969 q 571 934 503 969 q 674 839 639 899 q 710 706 710 779 l 710 706 q 676 581 710 638 q 576 489 642 524 l 576 489 q 697 398 660 457 q 733 261 733 339 l 733 261 q 699 122 733 185 q 592 21 665 58 q 400 -17 518 -17 z m 400 101 l 400 101 q 538 145 490 101 q 585 265 585 189 l 585 265 q 538 385 585 342 q 400 428 490 428 l 400 428 q 260 385 308 428 q 213 265 213 342 l 213 265 q 260 145 213 189 q 400 101 308 101 z m 400 546 l 400 546 q 519 585 475 546 q 563 699 563 625 l 563 699 q 519 811 563 771 q 400 851 476 851 l 400 851 q 278 811 322 851 q 235 699 235 771 l 235 699 q 278 585 235 625 q 400 546 322 546 z " }, "9": { ha: 797, x_min: 60, x_max: 729, o: "m 383 -17 l 383 -17 q 217 22 281 -17 q 122 128 153 61 q 92 279 92 196 l 92 279 l 239 279 q 256 183 239 222 q 306 123 272 143 q 390 103 339 103 l 390 103 q 508 144 468 103 q 563 261 547 185 q 579 442 578 338 l 579 442 q 535 397 567 421 q 457 356 503 372 q 356 340 411 340 l 356 340 q 189 381 254 340 q 92 494 124 422 q 60 653 60 565 l 60 653 q 101 821 60 750 q 215 931 143 892 q 378 969 288 969 l 378 969 q 525 946 460 969 q 636 869 590 922 q 706 726 682 815 q 729 504 729 636 l 729 504 q 706 258 729 358 q 638 97 682 157 q 531 10 594 36 q 383 -17 467 -17 z m 386 458 l 386 458 q 488 484 447 458 q 548 555 528 510 q 568 656 568 600 l 568 656 q 549 754 568 710 q 489 824 529 799 q 388 850 449 850 l 388 850 q 287 823 326 850 q 228 751 247 796 q 208 651 208 707 l 208 651 q 228 553 208 597 q 286 484 247 510 q 386 458 325 458 z " }, "=": { ha: 875, x_min: 110, x_max: 767, o: "m 767 440 l 110 440 l 110 560 l 767 560 l 767 440 z m 767 147 l 110 147 l 110 265 l 767 265 l 767 147 z " }, "+": { ha: 875, x_min: 110, x_max: 765, o: "m 496 0 l 378 0 l 378 294 l 110 294 l 110 414 l 378 414 l 378 710 l 496 710 l 496 414 l 765 414 l 765 294 l 496 294 l 496 0 z " }, " ": { ha: 285, x_min: 0, x_max: 0, o: "" }, A: { ha: 965, x_min: 8, x_max: 956, o: "m 168 0 l 8 0 l 382 953 l 581 953 l 956 0 l 789 0 l 704 221 l 253 221 l 168 0 z m 408 632 l 303 353 l 653 353 l 546 632 q 533 667 542 644 q 516 715 525 689 q 498 769 507 742 q 482 818 489 796 l 482 818 l 474 818 q 453 756 465 792 q 428 686 440 719 q 408 632 417 653 l 408 632 z " }, B: { ha: 975, x_min: 113, x_max: 911, o: "m 618 0 l 113 0 l 113 953 l 618 953 q 757 924 697 953 q 851 843 817 896 q 885 719 885 790 l 885 719 q 865 621 885 665 q 809 546 844 576 q 729 500 774 515 l 729 500 l 729 494 q 822 453 781 483 q 887 376 863 424 q 911 261 911 328 l 911 261 q 872 113 911 171 q 767 27 832 54 q 618 0 701 0 l 618 0 z m 268 424 l 268 133 l 606 133 q 710 167 669 133 q 751 278 751 201 l 751 278 q 734 356 751 324 q 682 406 717 389 q 594 424 647 424 l 594 424 l 268 424 z m 268 819 l 268 554 l 582 554 q 658 571 626 554 q 708 618 690 588 q 725 686 725 649 l 725 686 q 688 787 725 754 q 592 819 651 819 l 592 819 l 268 819 z " }, C: { ha: 1007, x_min: 67, x_max: 946, o: "m 525 -17 l 525 -17 q 277 35 379 -17 q 121 197 175 88 q 67 476 67 307 l 67 476 q 188 848 67 726 q 526 969 310 969 l 526 969 q 741 929 646 969 q 891 809 836 889 q 946 606 946 729 l 946 606 l 788 606 q 756 733 788 682 q 665 811 724 785 q 528 838 606 838 l 528 838 q 363 799 431 838 q 262 685 296 761 q 228 490 228 608 l 228 490 l 228 460 q 262 265 228 342 q 363 152 296 189 q 528 115 429 115 l 528 115 q 668 141 608 115 q 760 218 728 167 q 793 346 793 269 l 793 346 l 946 346 q 891 142 946 222 q 741 22 836 61 q 525 -17 646 -17 z " }, D: { ha: 1015, x_min: 113, x_max: 949, o: "m 481 0 l 113 0 l 113 953 l 481 953 q 732 902 628 953 q 892 747 836 851 q 949 476 949 642 l 949 476 q 892 207 949 313 q 732 51 836 101 q 481 0 628 0 l 481 0 z m 268 819 l 268 133 l 479 133 q 610 153 553 133 q 708 213 668 172 q 767 315 747 253 q 788 461 788 376 l 788 461 l 788 490 q 767 638 788 576 q 708 740 747 700 q 610 800 668 781 q 479 819 553 819 l 479 819 l 268 819 z " }, E: { ha: 936, x_min: 113, x_max: 860, o: "m 860 0 l 113 0 l 113 953 l 851 953 l 851 819 l 268 819 l 268 554 l 790 554 l 790 421 l 268 421 l 268 133 l 860 133 l 860 0 z " }, F: { ha: 849, x_min: 113, x_max: 793, o: "m 268 0 l 113 0 l 113 953 l 793 953 l 793 819 l 268 819 l 268 538 l 743 538 l 743 406 l 268 406 l 268 0 z " }, G: { ha: 1104, x_min: 75, x_max: 1e3, o: "m 544 -17 l 544 -17 q 197 103 318 -17 q 75 476 75 222 l 75 476 q 132 752 75 643 q 297 915 189 861 q 561 969 406 969 l 561 969 q 734 949 654 969 q 874 885 814 928 q 967 779 935 843 q 1000 628 1000 715 l 1000 628 l 842 628 q 820 722 842 682 q 760 788 799 761 q 672 826 722 814 q 564 838 621 838 l 564 838 q 423 817 485 838 q 319 753 361 796 q 257 644 278 710 q 236 490 236 579 l 236 490 l 236 461 q 272 263 236 339 q 377 151 307 186 q 549 115 447 115 l 549 115 q 710 143 644 115 q 810 226 775 171 q 844 363 844 281 l 844 363 l 844 376 l 524 376 l 524 506 l 1000 506 l 1000 0 l 888 0 l 872 114 q 783 40 833 68 q 674 -3 733 11 q 544 -17 615 -17 z " }, H: { ha: 1019, x_min: 113, x_max: 907, o: "m 268 0 l 113 0 l 113 953 l 268 953 l 268 554 l 751 554 l 751 953 l 907 953 l 907 0 l 751 0 l 751 421 l 268 421 l 268 0 z " }, I: { ha: 381, x_min: 113, x_max: 268, o: "m 268 0 l 113 0 l 113 953 l 268 953 l 268 0 z " }, J: { ha: 793, x_min: 49, x_max: 685, o: "m 367 -17 l 367 -17 q 194 15 265 -17 q 86 108 124 47 q 49 261 49 169 l 49 261 l 49 307 l 203 307 l 203 257 q 244 152 203 189 q 367 115 286 115 l 367 115 q 488 168 446 115 q 529 319 529 221 l 529 319 l 529 953 l 685 953 l 685 322 q 647 134 685 210 q 539 21 610 58 q 367 -17 468 -17 z " }, K: { ha: 940, x_min: 113, x_max: 924, o: "m 268 0 l 113 0 l 113 953 l 268 953 l 268 478 l 722 953 l 914 953 l 547 569 l 924 0 l 740 0 l 442 460 l 268 300 l 268 0 z " }, L: { ha: 767, x_min: 113, x_max: 743, o: "m 743 0 l 113 0 l 113 953 l 268 953 l 268 135 l 743 135 l 743 0 z " }, M: { ha: 1175, x_min: 113, x_max: 1061, o: "m 263 0 l 113 0 l 113 953 l 356 953 l 540 375 q 557 318 549 350 q 573 257 565 286 q 585 206 581 228 l 585 206 l 596 206 q 606 256 599 226 q 620 317 613 285 q 636 376 628 349 l 636 376 l 822 953 l 1061 953 l 1061 0 l 907 0 l 907 522 q 908 632 907 575 q 911 733 910 689 q 913 790 913 778 l 913 790 l 901 790 q 888 738 899 775 q 867 660 878 701 q 846 588 856 618 l 846 588 l 653 0 l 515 0 l 322 586 q 304 649 314 613 q 285 722 294 685 q 268 790 275 760 l 268 790 l 257 790 q 259 708 258 757 q 261 610 260 660 q 263 522 263 561 l 263 522 l 263 0 z " }, N: { ha: 1019, x_min: 113, x_max: 907, o: "m 263 0 l 113 0 l 113 953 l 263 953 l 697 356 q 716 332 706 347 q 736 301 726 317 q 750 276 746 286 l 750 276 l 757 276 l 757 953 l 907 953 l 907 0 l 763 0 l 322 604 q 294 647 311 621 q 269 686 278 672 l 269 686 l 263 686 l 263 0 z " }, O: { ha: 1090, x_min: 67, x_max: 1024, o: "m 544 -17 l 544 -17 q 290 38 397 -17 q 124 201 182 92 q 67 476 67 311 l 67 476 q 124 752 67 643 q 290 915 182 861 q 544 969 397 969 l 544 969 q 801 915 694 969 q 966 752 908 861 q 1024 476 1024 643 l 1024 476 q 966 201 1024 311 q 801 38 908 92 q 544 -17 694 -17 z m 544 115 l 544 115 q 680 136 621 115 q 780 200 739 157 q 842 308 821 243 q 864 460 864 374 l 864 460 l 864 490 q 842 644 864 579 q 780 753 821 710 q 680 817 739 796 q 544 838 621 838 l 544 838 q 410 817 469 838 q 310 753 351 796 q 249 644 269 710 q 228 490 228 579 l 228 490 l 228 460 q 249 308 228 374 q 310 200 269 243 q 410 136 351 157 q 544 115 469 115 z " }, P: { ha: 926, x_min: 113, x_max: 890, o: "m 268 0 l 113 0 l 113 953 l 588 953 q 756 915 689 953 q 856 812 822 878 q 890 656 890 746 l 890 656 q 854 497 890 565 q 749 390 818 428 q 582 353 681 353 l 582 353 l 268 353 l 268 0 z m 268 819 l 268 486 l 575 486 q 691 531 649 486 q 733 654 733 575 l 733 654 q 715 744 733 707 q 663 800 697 781 q 575 819 628 819 l 575 819 l 268 819 z " }, Q: { ha: 1090, x_min: 67, x_max: 1024, o: "m 976 -181 l 769 -181 l 606 -14 q 575 -16 590 -15 q 544 -17 560 -17 l 544 -17 q 290 38 397 -17 q 124 201 182 92 q 67 476 67 311 l 67 476 q 124 752 67 643 q 290 915 182 861 q 544 969 397 969 l 544 969 q 801 915 694 969 q 966 752 908 861 q 1024 476 1024 643 l 1024 476 q 956 185 1024 297 q 767 22 889 72 l 767 22 l 976 -181 z m 544 115 l 544 115 q 680 136 621 115 q 780 200 739 157 q 842 308 821 243 q 864 460 864 374 l 864 460 l 864 490 q 842 644 864 579 q 780 753 821 710 q 680 817 739 796 q 544 838 621 838 l 544 838 q 410 817 469 838 q 310 753 351 796 q 249 644 269 710 q 228 490 228 579 l 228 490 l 228 460 q 249 308 228 374 q 310 200 269 243 q 410 136 351 157 q 544 115 469 115 z " }, R: { ha: 1003, x_min: 113, x_max: 949, o: "m 268 0 l 113 0 l 113 953 l 614 953 q 782 917 715 953 q 882 816 849 881 q 915 665 915 751 l 915 665 q 872 499 915 569 q 750 394 829 428 l 750 394 l 949 0 l 779 0 l 599 368 l 268 368 l 268 0 z m 268 819 l 268 499 l 601 499 q 717 543 676 499 q 758 667 758 588 l 758 667 q 740 749 758 715 q 688 801 722 783 q 601 819 653 819 l 601 819 l 268 819 z " }, S: { ha: 931, x_min: 68, x_max: 863, o: "m 465 -17 l 465 -17 q 315 -1 388 -17 q 188 51 243 15 q 100 141 132 86 q 68 272 68 196 l 68 272 q 69 288 68 281 q 69 301 69 296 l 69 301 l 225 301 q 224 289 225 297 q 224 275 224 281 l 224 275 q 254 188 224 224 q 340 133 285 151 q 465 115 394 115 l 465 115 q 540 120 504 115 q 606 135 576 125 q 658 162 636 146 q 693 200 681 178 q 706 251 706 222 l 706 251 q 680 325 706 296 q 610 374 654 354 q 512 408 567 393 q 399 439 457 424 q 285 475 340 454 q 187 526 231 496 q 117 601 143 556 q 92 711 92 646 l 92 711 q 118 822 92 774 q 194 903 144 871 q 314 953 244 936 q 471 969 383 969 l 471 969 q 613 953 546 969 q 729 904 679 938 q 808 819 779 871 q 836 697 836 768 l 836 697 l 836 681 l 682 681 l 682 699 q 656 774 682 743 q 582 821 629 804 q 472 838 535 838 l 472 838 q 349 823 399 838 q 273 783 299 808 q 247 721 247 757 l 247 721 q 274 655 247 681 q 344 611 300 629 q 442 578 388 593 q 555 548 497 564 q 667 511 613 532 q 766 460 722 490 q 836 384 810 429 q 863 274 863 339 l 863 274 q 811 106 863 171 q 670 13 760 42 q 465 -17 581 -17 z " }, T: { ha: 850, x_min: 31, x_max: 819, o: "m 501 0 l 346 0 l 346 819 l 31 819 l 31 953 l 819 953 l 819 819 l 501 819 l 501 0 z " }, U: { ha: 1011, x_min: 108, x_max: 903, o: "m 503 -17 l 503 -17 q 292 23 381 -17 q 156 146 203 63 q 108 357 108 229 l 108 357 l 108 953 l 264 953 l 264 353 q 326 175 264 235 q 503 115 389 115 l 503 115 q 683 175 618 115 q 747 353 747 235 l 747 353 l 747 953 l 903 953 l 903 357 q 855 146 903 229 q 717 23 807 63 q 503 -17 628 -17 z " }, V: { ha: 915, x_min: 14, x_max: 901, o: "m 549 0 l 365 0 l 14 953 l 182 953 l 418 288 q 432 249 425 271 q 446 206 439 226 q 458 171 453 186 l 458 171 l 465 171 q 478 206 471 186 q 492 246 485 225 q 506 286 499 267 l 506 286 l 739 953 l 901 953 l 549 0 z " }, W: { ha: 1303, x_min: 15, x_max: 1288, o: "m 465 0 l 278 0 l 15 953 l 181 953 l 343 325 q 353 283 347 310 q 363 228 358 257 q 372 176 368 200 l 372 176 l 381 176 q 388 215 385 194 q 394 257 390 236 q 402 296 399 278 q 407 325 406 314 l 407 325 l 557 953 l 757 953 l 908 325 q 918 283 913 310 q 928 228 924 257 q 938 176 933 200 l 938 176 l 946 176 q 953 214 949 193 q 961 255 957 235 q 970 293 965 275 q 978 325 975 311 l 978 325 l 1140 953 l 1288 953 l 1025 0 l 843 0 l 683 636 q 674 684 679 657 q 663 740 668 711 q 656 789 658 768 l 656 789 l 649 789 q 642 738 646 767 q 632 681 638 708 q 622 636 626 654 l 622 636 l 465 0 z " }, X: { ha: 949, x_min: 15, x_max: 933, o: "m 196 0 l 15 0 l 374 500 l 49 953 l 239 953 l 476 615 l 482 615 l 718 953 l 897 953 l 574 501 l 933 0 l 744 0 l 474 386 l 465 386 l 196 0 z " }, Y: { ha: 925, x_min: 14, x_max: 911, o: "m 540 0 l 385 0 l 385 392 l 14 953 l 192 953 l 464 531 l 471 531 l 740 953 l 911 953 l 540 392 l 540 0 z " }, Z: { ha: 882, x_min: 43, x_max: 831, o: "m 831 0 l 43 0 l 43 76 l 588 819 l 79 819 l 79 953 l 818 953 l 818 876 l 271 133 l 831 133 l 831 0 z " }, a: { ha: 764, x_min: 47, x_max: 757, o: "m 278 -17 l 278 -17 q 203 -8 243 -17 q 127 22 163 0 q 69 84 92 44 q 47 188 47 124 l 47 188 q 82 311 47 263 q 179 388 117 360 q 328 426 242 415 q 518 438 415 438 l 518 438 l 518 510 q 506 574 518 546 q 463 617 494 601 q 374 632 432 632 q 283 617 315 632 q 237 581 250 603 q 224 535 224 560 l 224 535 l 224 514 l 85 514 q 83 528 83 521 l 83 528 l 83 544 q 120 655 83 610 q 224 724 157 700 q 378 747 290 747 l 378 747 q 535 720 472 747 q 631 643 599 693 q 663 522 663 593 l 663 522 l 663 151 q 676 114 663 125 q 707 103 689 103 l 707 103 l 757 103 l 757 6 q 715 -8 740 -1 q 657 -15 690 -15 l 657 -15 q 594 -2 619 -15 q 552 35 568 11 q 531 90 536 60 l 531 90 l 522 90 q 462 34 497 58 q 381 -3 426 10 q 278 -17 335 -17 z m 318 103 l 318 103 q 398 116 361 103 q 461 153 435 129 q 503 212 488 178 q 518 286 518 246 l 518 286 l 518 335 q 350 324 422 335 q 238 283 278 313 q 197 200 197 253 l 197 200 q 211 147 197 168 q 253 114 225 125 q 318 103 281 103 z " }, b: { ha: 804, x_min: 93, x_max: 749, o: "m 460 -17 l 460 -17 q 329 13 388 -17 q 233 100 271 42 l 233 100 l 224 100 l 211 0 l 93 0 l 93 1004 l 238 1004 l 238 642 l 246 642 q 302 701 269 678 q 376 736 335 725 q 467 747 418 747 l 467 747 q 614 707 550 747 q 713 583 678 667 q 749 368 749 500 l 749 368 q 714 149 749 233 q 615 24 679 64 q 460 -17 550 -17 z m 419 108 l 419 108 q 522 133 482 108 q 581 212 561 158 q 600 351 600 265 l 600 351 l 600 376 q 581 517 600 463 q 522 597 563 571 q 417 622 482 622 l 417 622 q 343 608 376 622 q 286 565 310 594 q 250 488 263 535 q 238 374 238 440 l 238 374 l 238 354 q 256 220 238 275 q 315 137 275 165 q 419 108 356 108 z " }, c: { ha: 739, x_min: 53, x_max: 686, o: "m 383 -17 l 383 -17 q 200 24 274 -17 q 90 150 126 65 q 53 365 53 235 l 53 365 q 90 580 53 496 q 202 706 128 664 q 385 747 276 747 l 385 747 q 515 728 460 747 q 610 673 571 710 q 667 582 649 636 q 686 458 686 528 l 686 458 l 540 458 q 524 554 540 517 q 472 610 507 592 q 382 629 438 629 l 382 629 q 283 602 324 629 q 222 520 243 575 q 201 376 201 465 l 201 376 l 201 353 q 222 212 201 268 q 283 128 242 156 q 388 101 324 101 l 388 101 q 477 122 443 101 q 528 180 511 142 q 546 272 546 218 l 546 272 l 686 272 q 667 154 686 207 q 610 63 649 101 q 515 4 572 25 q 383 -17 458 -17 z " }, d: { ha: 804, x_min: 54, x_max: 711, o: "m 344 -17 l 344 -17 q 190 24 256 -17 q 90 149 125 64 q 54 368 54 233 l 54 368 q 90 583 54 500 q 190 707 126 667 q 338 747 254 747 l 338 747 q 428 736 386 747 q 502 701 469 725 q 557 642 535 678 l 557 642 l 567 642 l 567 1004 l 711 1004 l 711 0 l 593 0 l 579 100 l 569 100 q 474 13 533 42 q 344 -17 415 -17 z m 385 108 l 385 108 q 488 137 449 108 q 547 220 528 165 q 567 354 567 275 l 567 354 l 567 374 q 554 488 567 440 q 518 565 542 535 q 461 608 494 594 q 386 622 428 622 l 386 622 q 282 597 322 622 q 223 517 242 571 q 204 376 204 463 l 204 376 l 204 351 q 224 212 204 265 q 283 133 243 158 q 385 108 322 108 z " }, e: { ha: 769, x_min: 54, x_max: 715, o: "m 396 -17 l 396 -17 q 208 24 283 -17 q 93 150 132 65 q 54 365 54 235 l 54 365 q 93 581 54 497 q 208 706 132 665 q 399 747 285 747 l 399 747 q 573 708 503 747 q 679 588 643 668 q 715 385 715 507 l 715 385 l 715 329 l 203 329 q 226 199 206 251 q 290 123 247 147 q 397 99 332 99 l 397 99 q 469 109 438 99 q 524 140 501 119 q 558 188 546 160 q 571 253 571 217 l 571 253 l 713 253 q 690 138 713 188 q 626 53 668 88 q 525 1 583 19 q 396 -17 467 -17 z m 206 435 l 206 435 l 564 435 q 552 526 564 489 q 518 586 540 563 q 465 620 496 610 q 396 631 435 631 l 396 631 q 297 610 338 631 q 233 545 256 589 q 206 435 211 501 z " }, f: { ha: 407, x_min: 18, x_max: 406, o: "m 269 0 l 125 0 l 125 611 l 18 611 l 18 731 l 125 731 l 125 836 q 140 922 125 882 q 191 989 154 963 q 296 1015 228 1015 l 296 1015 q 335 1013 315 1015 q 374 1007 356 1011 q 406 997 392 1003 l 406 997 l 406 896 l 335 896 q 285 879 301 896 q 269 831 269 863 l 269 831 l 269 731 l 406 731 l 406 611 l 269 611 l 269 0 z " }, g: { ha: 796, x_min: 25, x_max: 779, o: "m 529 -253 l 215 -253 q 122 -232 165 -253 q 51 -172 78 -211 q 25 -78 25 -133 l 25 -78 q 59 22 25 -17 q 139 79 93 60 l 139 79 q 85 124 106 94 q 65 190 65 153 l 65 190 q 103 274 65 242 q 190 315 140 306 l 190 315 q 115 396 142 347 q 88 506 88 444 l 88 506 q 122 633 88 579 q 226 717 157 686 q 393 747 294 747 l 393 747 q 474 741 436 747 q 543 724 513 735 l 543 724 q 613 784 592 749 q 638 850 633 819 l 638 850 l 779 850 q 760 767 779 804 q 709 706 742 731 q 631 672 676 682 l 631 672 q 683 598 665 640 q 700 506 700 556 l 700 506 q 667 379 700 433 q 566 294 633 325 q 400 264 499 264 l 400 264 l 286 264 q 233 250 253 264 q 213 208 213 236 l 213 208 q 232 169 213 185 q 283 154 251 154 l 283 154 l 592 154 q 725 101 672 154 q 778 -36 778 47 l 778 -36 q 747 -147 778 -97 q 659 -224 715 -196 q 529 -253 603 -253 l 529 -253 z m 263 -146 l 263 -146 l 528 -146 q 581 -135 557 -146 q 618 -103 604 -124 q 632 -58 632 -83 l 632 -58 q 606 7 632 -17 q 543 31 581 31 l 543 31 l 263 31 q 197 5 224 31 q 171 -58 171 -21 l 171 -58 q 197 -122 171 -97 q 263 -146 222 -146 z m 394 368 l 394 368 q 517 405 476 368 q 557 506 557 442 l 557 506 q 517 606 557 571 q 394 642 476 642 l 394 642 q 272 606 313 642 q 232 506 232 571 l 232 506 q 249 433 232 464 q 303 385 267 401 q 394 368 340 368 z " }, h: { ha: 796, x_min: 93, x_max: 708, o: "m 238 0 l 93 0 l 93 1004 l 238 1004 l 238 643 l 247 643 q 307 699 274 676 q 382 735 340 722 q 474 747 424 747 l 474 747 q 596 723 543 747 q 678 644 649 699 q 708 499 708 590 l 708 499 l 708 0 l 564 0 l 564 476 q 553 546 564 518 q 524 590 543 574 q 478 614 504 607 q 419 621 451 621 l 419 621 q 328 597 369 621 q 263 531 288 574 q 238 428 238 488 l 238 428 l 238 0 z " }, i: { ha: 331, x_min: 93, x_max: 238, o: "m 238 857 l 93 857 l 93 1004 l 238 1004 l 238 857 z m 238 0 l 93 0 l 93 731 l 238 731 l 238 0 z " }, j: { ha: 328, x_min: -36, x_max: 238, o: "m 238 857 l 93 857 l 93 1004 l 238 1004 l 238 857 z m 71 -253 l 71 -253 q 34 -251 54 -253 q -5 -244 14 -249 q -36 -235 -24 -239 l -36 -235 l -36 -135 l 31 -135 q 77 -118 61 -135 q 93 -71 93 -101 l 93 -71 l 93 731 l 238 731 l 238 -78 q 223 -162 238 -122 q 172 -227 208 -201 q 71 -253 136 -253 z " }, k: { ha: 733, x_min: 93, x_max: 710, o: "m 238 0 l 93 0 l 93 1004 l 238 1004 l 238 397 l 525 731 l 696 731 l 449 447 l 710 0 l 543 0 l 356 342 l 238 225 l 238 0 z " }, l: { ha: 331, x_min: 93, x_max: 238, o: "m 238 0 l 93 0 l 93 1004 l 238 1004 l 238 0 z " }, m: { ha: 1194, x_min: 93, x_max: 1108, o: "m 238 0 l 93 0 l 93 731 l 213 731 l 225 626 l 235 626 q 292 693 260 667 q 366 733 325 719 q 454 747 407 747 l 454 747 q 573 719 522 747 q 650 626 624 692 l 650 626 l 660 626 q 718 692 685 665 q 794 733 751 719 q 885 747 836 747 l 885 747 q 1000 724 950 747 q 1079 648 1050 701 q 1108 506 1108 594 l 1108 506 l 1108 0 l 964 0 l 964 479 q 954 548 964 521 q 928 591 944 575 q 888 614 911 607 q 836 621 864 621 l 836 621 q 754 597 790 621 q 696 529 718 572 q 674 428 674 486 l 674 428 l 674 0 l 529 0 l 529 479 q 519 548 529 521 q 493 591 510 575 q 453 614 476 607 q 403 621 429 621 l 403 621 q 319 597 357 621 q 260 529 282 572 q 238 428 238 486 l 238 428 l 238 0 z " }, n: { ha: 796, x_min: 93, x_max: 708, o: "m 238 0 l 93 0 l 93 731 l 213 731 l 225 626 l 235 626 q 297 693 261 667 q 377 733 333 719 q 474 747 421 747 l 474 747 q 596 723 543 747 q 678 644 649 699 q 708 499 708 590 l 708 499 l 708 0 l 564 0 l 564 476 q 553 546 564 518 q 524 590 543 574 q 478 614 504 607 q 419 621 451 621 l 419 621 q 328 597 369 621 q 263 529 288 572 q 238 428 238 486 l 238 428 l 238 0 z " }, o: { ha: 810, x_min: 54, x_max: 756, o: "m 404 -17 l 404 -17 q 212 24 290 -17 q 94 150 133 65 q 54 365 54 235 l 54 365 q 94 581 54 497 q 212 706 133 665 q 404 747 290 747 l 404 747 q 599 706 521 747 q 716 581 676 665 q 756 365 756 497 l 756 365 q 716 150 756 235 q 599 24 676 65 q 404 -17 521 -17 z m 404 103 l 404 103 q 518 130 474 103 q 584 213 563 157 q 606 353 606 268 l 606 353 l 606 378 q 584 518 606 463 q 518 601 563 574 q 404 628 474 628 l 404 628 q 292 601 336 628 q 226 518 247 574 q 204 378 204 463 l 204 378 l 204 353 q 226 213 204 268 q 292 130 247 157 q 404 103 336 103 z " }, p: { ha: 804, x_min: 93, x_max: 749, o: "m 238 -240 l 93 -240 l 93 731 l 211 731 l 224 631 l 233 631 q 329 718 271 689 q 460 747 388 747 l 460 747 q 615 707 550 747 q 714 582 679 667 q 749 363 749 497 l 749 363 q 713 148 749 232 q 614 24 678 64 q 467 -17 550 -17 l 467 -17 q 376 -6 418 -17 q 302 29 335 6 q 246 89 269 53 l 246 89 l 238 89 l 238 -240 z m 417 108 l 417 108 q 522 134 482 108 q 581 214 563 160 q 600 351 600 268 l 600 351 l 600 376 q 581 518 600 464 q 522 597 561 572 q 419 622 482 622 l 419 622 q 315 594 356 622 q 256 510 275 565 q 238 375 238 454 l 238 375 l 238 356 q 250 243 238 290 q 286 166 263 196 q 343 122 310 136 q 417 108 376 108 z " }, q: { ha: 804, x_min: 54, x_max: 711, o: "m 711 -240 l 567 -240 l 567 89 l 557 89 q 501 29 535 53 q 426 -6 468 6 q 338 -17 385 -17 l 338 -17 q 190 24 254 -17 q 90 148 126 64 q 54 363 54 232 l 54 363 q 90 582 54 497 q 190 707 125 667 q 344 747 256 747 l 344 747 q 475 718 417 747 q 569 631 533 689 l 569 631 l 579 631 l 593 731 l 711 731 l 711 -240 z m 386 108 l 386 108 q 462 122 429 108 q 518 166 494 136 q 554 243 542 196 q 567 356 567 290 l 567 356 l 567 375 q 547 510 567 454 q 488 594 528 565 q 385 622 449 622 l 385 622 q 283 597 322 622 q 224 518 243 572 q 204 376 204 464 l 204 376 l 204 351 q 223 214 204 268 q 282 134 242 160 q 386 108 322 108 z " }, r: { ha: 481, x_min: 93, x_max: 465, o: "m 238 0 l 93 0 l 93 731 l 213 731 l 225 613 l 233 613 q 266 678 246 647 q 319 728 286 708 q 399 747 351 747 l 399 747 q 438 743 421 747 q 465 736 456 739 l 465 736 l 465 600 l 417 600 q 338 586 372 600 q 281 545 304 572 q 248 479 258 518 q 238 392 238 440 l 238 392 l 238 0 z " }, s: { ha: 728, x_min: 51, x_max: 675, o: "m 363 -17 l 363 -17 q 228 0 286 -17 q 131 46 169 17 q 72 116 92 75 q 51 207 51 157 l 51 207 q 52 219 51 214 q 53 229 53 225 l 53 229 l 196 229 l 196 214 q 219 145 196 171 q 283 109 243 119 q 369 99 322 99 l 369 99 q 447 109 411 99 q 505 140 482 119 q 528 193 528 161 l 528 193 q 499 257 528 235 q 422 292 469 279 q 324 321 375 306 l 324 321 q 233 348 278 333 q 151 386 188 363 q 93 446 115 410 q 71 536 71 482 l 71 536 q 93 626 71 588 q 155 692 115 665 q 249 732 194 718 q 369 746 304 746 l 369 746 q 490 731 438 746 q 580 690 543 717 q 636 627 617 664 q 656 549 656 590 l 656 549 q 655 531 656 540 q 654 519 654 522 l 654 519 l 513 519 l 513 532 q 497 582 513 560 q 449 618 482 604 q 363 632 417 632 l 363 632 q 299 626 326 632 q 253 608 271 619 q 226 582 235 597 q 217 547 217 567 l 217 547 q 240 498 217 515 q 300 469 263 481 q 381 443 338 457 l 381 443 q 482 415 431 429 q 577 378 533 400 q 648 317 621 356 q 675 213 675 278 l 675 213 q 651 108 675 153 q 585 37 628 64 q 486 -3 543 10 q 363 -17 429 -17 z " }, t: { ha: 424, x_min: 21, x_max: 389, o: "m 275 -17 l 275 -17 q 177 8 213 -17 q 127 70 142 32 q 113 151 113 108 l 113 151 l 113 611 l 21 611 l 21 731 l 115 731 l 142 935 l 257 935 l 257 731 l 389 731 l 389 611 l 257 611 l 257 168 q 271 119 257 136 q 317 103 285 103 l 317 103 l 389 103 l 389 6 q 355 -5 375 0 q 314 -13 335 -10 q 275 -17 293 -17 z " }, u: { ha: 794, x_min: 86, x_max: 701, o: "m 322 -17 l 322 -17 q 151 40 217 -17 q 86 232 86 96 l 86 232 l 86 731 l 231 731 l 231 254 q 241 185 231 213 q 271 140 251 157 q 317 117 290 124 q 375 110 343 110 l 375 110 q 466 134 425 110 q 532 202 507 158 q 557 303 557 246 l 557 303 l 557 731 l 701 731 l 701 0 l 583 0 l 571 104 l 561 104 q 499 38 535 64 q 419 -3 463 11 q 322 -17 375 -17 z " }, v: { ha: 717, x_min: 13, x_max: 704, o: "m 432 0 l 283 0 l 13 731 l 164 731 l 290 382 q 311 317 299 357 q 336 236 324 278 q 358 161 349 194 l 358 161 l 365 161 q 385 234 374 193 q 410 315 397 275 q 432 382 422 356 l 432 382 l 557 731 l 704 731 l 432 0 z " }, w: { ha: 1028, x_min: 10, x_max: 1017, o: "m 379 0 l 229 0 l 10 731 l 160 731 l 267 331 q 281 269 275 301 q 293 213 288 238 q 301 178 299 188 l 301 178 l 310 178 q 322 235 315 203 q 335 294 329 267 q 343 335 340 321 l 343 335 l 440 731 l 596 731 l 696 333 q 708 283 701 311 q 720 226 714 254 q 729 178 726 199 l 729 178 l 738 178 q 748 224 742 197 q 761 279 754 251 q 774 331 768 307 l 774 331 l 879 731 l 1017 731 l 799 0 l 649 0 l 560 364 q 546 425 554 390 q 531 494 538 460 q 519 556 524 529 l 519 556 l 511 556 q 503 511 508 540 q 490 444 499 482 q 471 364 482 407 l 471 364 l 379 0 z " }, x: { ha: 735, x_min: 17, x_max: 718, o: "m 182 0 l 17 0 l 278 375 l 32 731 l 207 731 l 368 486 l 376 486 l 539 731 l 704 731 l 457 379 l 718 0 l 544 0 l 367 268 l 360 268 l 182 0 z " }, y: { ha: 717, x_min: 13, x_max: 704, o: "m 172 -253 l 172 -253 q 103 -247 131 -253 q 68 -239 75 -240 l 68 -239 l 68 -135 l 138 -135 q 199 -121 168 -135 q 256 -76 231 -107 q 297 0 281 -46 l 297 0 l 13 731 l 164 731 l 306 367 q 327 304 315 342 q 351 228 339 267 q 371 158 363 189 l 371 158 l 378 158 q 392 206 385 179 q 408 263 400 233 q 425 319 417 292 q 439 365 433 346 l 439 365 l 557 731 l 704 731 l 457 28 q 411 -82 436 -31 q 353 -172 386 -133 q 276 -231 321 -210 q 172 -253 232 -253 z " }, z: { ha: 699, x_min: 39, x_max: 656, o: "m 656 0 l 39 0 l 39 72 l 428 611 l 65 611 l 65 731 l 636 731 l 636 660 l 246 119 l 656 119 l 656 0 z " }, ".": { ha: 400, x_min: 122, x_max: 276, o: "m 276 0 l 122 0 l 122 161 l 276 161 l 276 0 z " }, ",": { ha: 400, x_min: 110, x_max: 276, o: "m 110 -214 l 110 -214 l 110 -151 q 159 -124 140 -146 q 187 -71 178 -103 q 196 0 196 -39 l 196 0 l 122 0 l 122 161 l 276 161 l 276 15 q 252 -112 276 -65 q 190 -183 228 -160 q 110 -214 151 -206 z " }, "'": { ha: 315, x_min: 82, x_max: 233, o: "m 206 568 l 103 568 l 82 749 l 82 953 l 233 953 l 233 749 l 206 568 z " }, "\u2019": { ha: 358, x_min: 93, x_max: 261, o: "m 93 578 l 93 578 l 93 642 q 143 669 124 647 q 171 722 163 690 q 179 792 179 754 l 179 792 l 106 792 l 106 953 l 261 953 l 261 807 q 236 680 261 728 q 173 609 211 632 q 93 578 135 586 z " }, "!": { ha: 392, x_min: 111, x_max: 281, o: "m 242 257 l 150 257 l 111 953 l 281 953 l 242 257 z m 274 0 l 118 0 l 118 161 l 274 161 l 274 0 z " }, "?": { ha: 826, x_min: 86, x_max: 724, o: "m 472 256 l 336 256 l 336 328 q 353 420 336 383 q 396 485 369 457 q 452 535 422 513 q 508 581 482 557 q 551 634 533 604 q 568 704 568 664 l 568 704 q 563 744 568 721 q 542 789 558 767 q 494 826 526 811 q 408 840 463 840 l 408 840 q 317 822 351 840 q 265 778 282 804 q 242 724 247 751 q 236 678 236 697 l 236 678 l 236 660 q 238 640 236 650 l 238 640 l 90 640 q 88 658 89 646 q 86 688 86 669 l 86 688 q 98 766 86 726 q 134 842 110 806 q 198 908 158 879 q 292 953 238 936 q 419 969 347 969 l 419 969 q 532 956 482 969 q 617 919 582 943 q 676 865 653 896 q 712 797 700 833 q 724 722 724 761 l 724 722 q 706 612 724 657 q 659 535 688 567 q 599 480 631 504 q 538 433 567 456 q 490 381 508 410 q 472 311 472 353 l 472 311 l 472 256 z m 481 0 l 328 0 l 328 161 l 481 161 l 481 0 z " }, $: { ha: 728, x_min: 51, x_max: 675, o: "m 403 -68 l 333 -68 l 333 94 q 228 111 275 97 l 228 111 q 131 156 169 126 q 72 227 92 186 q 51 318 51 268 l 51 318 q 52 331 51 325 q 53 340 53 336 l 53 340 l 196 340 l 196 325 q 219 256 196 282 q 283 221 243 231 l 283 221 q 333 211 307 214 l 333 211 l 333 428 q 324 431 329 429 l 324 431 q 233 458 278 443 q 151 497 188 474 q 93 556 115 519 q 71 647 71 593 l 71 647 q 93 738 71 699 q 155 803 115 776 q 250 843 194 829 l 250 843 q 333 856 289 853 l 333 856 l 333 1004 l 403 1004 l 403 856 q 490 843 451 853 l 490 843 q 580 801 543 828 q 636 738 617 774 q 656 660 656 701 l 656 660 q 655 642 656 650 q 654 631 654 633 l 654 631 l 513 631 l 513 643 q 497 693 513 671 q 450 729 482 715 l 450 729 q 403 740 431 738 l 403 740 l 403 549 q 482 526 442 538 l 482 526 q 577 489 533 511 q 648 427 621 467 q 675 324 675 388 l 675 324 q 651 219 675 263 q 585 147 628 175 q 486 107 543 119 l 486 107 q 403 96 447 99 l 403 96 l 403 -68 z m 403 408 l 403 211 q 447 219 426 214 l 447 219 q 505 251 482 229 q 528 304 528 272 l 528 304 q 499 368 528 346 q 422 404 469 390 l 422 404 q 403 408 413 406 l 403 408 z m 333 569 l 333 569 l 333 742 q 299 738 315 740 l 299 738 q 253 719 271 731 q 226 692 235 707 q 217 658 217 678 l 217 658 q 240 609 217 626 q 300 581 263 592 l 300 581 q 333 569 317 575 z " }, "%": { ha: 1331, x_min: 125, x_max: 1206, o: "m 381 0 l 260 0 l 953 953 l 1075 953 l 381 0 z m 344 468 l 344 468 q 227 491 276 468 q 151 568 178 514 q 125 718 125 622 l 125 718 q 151 869 125 815 q 227 947 178 924 q 344 969 276 969 l 344 969 q 460 947 413 969 q 535 869 508 924 q 561 718 561 815 l 561 718 q 535 567 561 622 q 460 490 508 513 q 344 468 413 468 z m 344 560 l 344 560 q 424 600 404 560 q 443 711 443 640 l 443 711 l 443 726 q 435 808 443 774 q 405 860 426 842 q 344 878 383 878 l 344 878 q 265 838 285 878 q 244 726 244 797 l 244 726 l 244 711 q 265 600 244 640 q 344 560 285 560 z m 989 -17 l 989 -17 q 873 6 922 -17 q 797 83 824 29 q 771 233 771 138 l 771 233 q 797 385 771 331 q 873 462 824 439 q 989 485 922 485 l 989 485 q 1106 462 1057 485 q 1180 385 1154 439 q 1206 233 1206 331 l 1206 233 q 1180 83 1206 138 q 1106 6 1154 28 q 989 -17 1057 -17 z m 989 75 l 989 75 q 1068 115 1049 75 q 1088 226 1088 156 l 1088 226 l 1088 242 q 1080 323 1088 289 q 1051 375 1072 357 q 989 393 1029 393 l 989 393 q 910 353 931 393 q 890 242 890 313 l 890 242 l 890 226 q 910 115 890 156 q 989 75 931 75 z " }, "&": { ha: 986, x_min: 71, x_max: 931, o: "m 439 -17 l 439 -17 q 248 16 331 -17 q 118 110 165 49 q 71 256 71 171 l 71 256 q 122 410 71 353 q 249 489 172 467 l 249 489 l 249 494 q 138 574 182 525 q 93 708 93 622 l 93 708 q 138 851 93 793 q 265 940 183 910 q 454 969 346 969 l 454 969 q 638 938 558 969 q 763 847 718 906 q 808 708 808 788 l 808 708 l 808 679 l 664 679 l 664 697 q 636 783 663 750 q 563 833 610 817 q 451 849 515 849 l 451 849 q 368 840 407 849 q 301 812 329 831 q 257 764 272 793 q 242 696 242 735 l 242 696 q 267 610 242 644 q 333 560 292 576 q 422 543 375 543 l 422 543 l 513 543 l 513 425 l 426 425 q 326 412 374 425 q 250 365 279 399 q 221 268 221 331 l 221 268 q 249 174 221 210 q 327 121 276 138 q 446 104 378 104 l 446 104 q 567 122 519 104 q 640 178 615 140 q 664 269 664 215 l 664 269 l 664 543 l 931 543 l 931 424 l 808 424 l 808 274 q 767 118 808 183 q 643 18 725 53 q 439 -17 561 -17 z " }, "-": { ha: 463, x_min: 56, x_max: 407, o: "m 407 306 l 56 306 l 56 444 l 407 444 l 407 306 z " }, ":": { ha: 438, x_min: 142, x_max: 296, o: "m 296 569 l 142 569 l 142 731 l 296 731 l 296 569 z m 296 0 l 142 0 l 142 161 l 296 161 l 296 0 z " }, "|": { ha: 340, x_min: 113, x_max: 228, o: "m 228 -260 l 113 -260 l 113 1004 l 228 1004 l 228 -260 z " } }, familyName: "Archivo Medium", ascender: 1219, descender: -292, underlinePosition: -148, underlineThickness: 44, boundingBox: { xMin: -239, xMax: 1319, yMin: -400, yMax: 1087 }, resolution: 1e3 };

// src/three/fonts/archivo800.json
var archivo800_default = { glyphs: { "0": { ha: 868, x_min: 63, x_max: 806, o: "m 435 -17 l 435 -17 q 264 13 335 -17 q 149 103 193 43 q 83 257 104 164 q 63 478 63 350 l 63 478 q 83 697 63 604 q 149 851 104 790 q 264 941 193 911 q 435 971 335 971 l 435 971 q 605 941 535 971 q 719 851 675 911 q 785 697 764 790 q 806 478 806 604 l 806 478 q 785 257 806 350 q 719 103 764 164 q 605 13 675 43 q 435 -17 535 -17 z m 435 149 l 435 149 q 522 178 490 149 q 565 269 553 208 q 576 422 576 329 l 576 422 l 576 531 q 565 686 576 625 q 522 776 553 747 q 435 806 490 806 l 435 806 q 348 776 379 806 q 304 687 317 747 q 292 532 292 626 l 292 532 l 292 425 q 304 269 292 331 q 348 178 317 208 q 435 149 379 149 z " }, "1": { ha: 868, x_min: 140, x_max: 813, o: "m 813 0 l 142 0 l 142 179 l 369 179 l 369 689 l 140 689 l 140 824 q 262 847 196 828 q 392 895 328 867 q 508 956 457 924 l 508 956 l 597 956 l 597 179 l 813 179 l 813 0 z " }, "2": { ha: 868, x_min: 69, x_max: 803, o: "m 803 0 l 69 0 l 69 57 q 93 169 69 118 q 157 265 117 221 q 247 351 197 310 q 346 429 296 392 l 346 429 q 453 510 403 471 q 534 592 503 549 q 565 688 565 635 l 565 688 q 552 741 565 715 q 510 783 539 767 q 435 800 482 800 l 435 800 q 356 783 388 800 q 307 735 324 765 q 290 663 290 704 l 290 663 l 290 621 l 79 621 q 77 640 78 629 q 76 664 76 650 l 76 664 q 122 832 76 764 q 252 935 168 900 q 453 971 336 971 l 453 971 q 606 947 542 971 q 713 883 671 924 q 774 792 754 843 q 794 688 794 742 l 794 688 q 771 569 794 622 q 706 470 747 517 q 608 381 664 424 q 489 296 553 339 l 489 296 q 431 255 457 274 q 390 222 406 236 q 368 197 375 208 l 368 197 l 803 197 l 803 0 z " }, "3": { ha: 868, x_min: 60, x_max: 807, o: "m 436 -17 l 436 -17 q 227 20 311 -17 q 101 120 143 57 q 60 264 60 183 l 60 264 l 60 289 l 271 289 l 271 263 q 310 181 271 211 q 425 150 349 150 l 425 150 q 539 185 501 150 q 576 286 576 221 l 576 286 q 558 358 576 332 q 510 397 540 385 q 444 408 481 408 l 444 408 l 354 408 l 354 564 l 435 564 q 497 577 469 564 q 540 617 524 590 q 556 683 556 643 l 556 683 q 540 748 556 721 q 495 790 525 775 q 425 804 465 804 l 425 804 q 356 790 388 804 q 308 751 325 776 q 290 693 290 726 l 290 693 l 290 675 l 86 675 l 86 710 q 128 844 86 785 q 250 937 171 903 q 438 971 329 971 l 438 971 q 622 938 544 971 q 742 847 700 906 q 783 711 783 788 l 783 711 q 765 617 783 660 q 713 546 746 575 q 638 499 681 517 l 638 499 l 638 493 q 761 409 715 469 q 807 258 807 349 l 807 258 q 763 116 806 178 q 638 19 719 54 q 436 -17 556 -17 z " }, "4": { ha: 869, x_min: 38, x_max: 829, o: "m 703 0 l 482 0 l 482 203 l 38 203 l 38 379 q 135 551 88 457 q 226 751 183 644 q 299 971 269 858 l 299 971 l 528 971 q 490 845 517 913 q 428 709 464 778 q 353 577 393 640 q 277 462 314 514 q 210 378 240 410 l 210 378 l 482 378 l 482 596 q 515 654 497 621 q 549 724 532 688 q 580 794 567 760 q 601 857 593 828 l 601 857 l 703 857 l 703 378 l 829 378 l 829 203 l 703 203 l 703 0 z " }, "5": { ha: 868, x_min: 58, x_max: 806, o: "m 440 -17 l 440 -17 q 234 23 319 -17 q 103 134 149 63 q 58 303 58 206 l 58 303 l 271 303 q 289 224 271 258 q 342 170 307 189 q 425 151 376 151 l 425 151 q 507 171 474 151 q 558 227 540 190 q 576 314 576 264 l 576 314 q 558 399 576 364 q 507 452 540 433 q 428 471 474 471 l 428 471 q 360 458 388 471 q 317 429 333 446 q 289 397 300 413 l 289 397 l 96 422 l 136 954 l 744 954 l 744 756 l 315 756 l 303 569 q 335 590 311 576 q 401 617 360 604 q 496 629 442 629 l 496 629 q 657 593 588 629 q 766 486 726 557 q 806 313 806 415 l 806 313 q 761 141 806 215 q 635 25 717 67 q 440 -17 553 -17 z " }, "6": { ha: 868, x_min: 64, x_max: 815, o: "m 449 -17 l 449 -17 q 283 10 354 -17 q 162 92 211 36 q 88 237 113 147 q 64 451 64 326 l 64 451 q 88 694 64 594 q 160 854 113 793 q 280 943 208 915 q 444 971 351 971 l 444 971 q 631 933 554 971 q 747 825 707 894 q 788 660 788 756 l 788 660 l 575 660 q 560 740 575 708 q 515 789 544 772 q 444 806 486 806 l 444 806 q 351 775 383 806 q 306 684 318 744 q 294 532 294 624 l 294 532 q 346 569 314 551 q 417 599 378 588 q 499 610 457 610 l 499 610 q 667 573 596 610 q 776 469 738 536 q 815 308 815 401 l 815 308 q 769 133 815 206 q 640 22 722 61 q 449 -17 558 -17 z m 444 149 l 444 149 q 525 167 493 149 q 573 221 557 186 q 589 301 589 256 l 589 301 q 573 383 589 349 q 525 438 557 418 q 444 458 493 458 l 444 458 q 365 439 397 458 q 316 385 332 419 q 300 303 300 351 l 300 303 q 316 222 300 257 q 365 168 332 188 q 444 149 397 149 z " }, "7": { ha: 868, x_min: 63, x_max: 811, o: "m 464 0 l 213 0 q 238 210 213 107 q 307 409 263 313 q 408 592 351 506 q 529 754 465 679 l 529 754 l 63 754 l 63 954 l 811 954 l 811 835 q 711 705 761 774 q 617 562 661 636 q 538 408 572 488 q 483 246 503 329 q 464 76 464 163 l 464 76 l 464 0 z " }, "8": { ha: 868, x_min: 58, x_max: 810, o: "m 433 -17 l 433 -17 q 228 18 311 -17 q 101 115 144 53 q 58 263 58 178 l 58 263 q 98 398 58 344 q 211 486 138 451 l 211 486 q 117 583 144 533 q 89 697 89 633 l 89 697 q 132 842 89 781 q 252 937 175 903 q 433 971 329 971 l 433 971 q 614 937 536 971 q 735 842 692 903 q 779 697 779 781 l 779 697 q 751 581 779 632 q 656 486 722 531 l 656 486 q 770 398 731 451 q 810 263 810 344 l 810 263 q 766 115 810 178 q 639 18 722 53 q 433 -17 556 -17 z m 433 149 l 433 149 q 540 182 500 149 q 579 278 579 215 l 579 278 q 539 374 579 342 q 433 407 499 407 l 433 407 q 329 374 369 407 q 289 278 289 342 l 289 278 q 328 182 289 215 q 433 149 367 149 z m 433 567 l 433 567 q 531 596 492 567 q 571 686 571 625 l 571 686 q 533 776 571 746 q 433 807 494 807 l 433 807 q 335 776 372 807 q 299 686 299 746 l 299 686 q 336 596 299 625 q 433 567 374 567 z " }, "9": { ha: 868, x_min: 54, x_max: 806, o: "m 424 -17 l 424 -17 q 239 22 315 -17 q 122 129 163 60 q 81 294 81 199 l 81 294 l 294 294 q 309 215 294 247 q 353 165 324 182 q 425 149 383 149 l 425 149 q 518 179 486 149 q 562 271 550 210 q 574 422 574 332 l 574 422 q 524 386 556 404 q 452 356 492 368 q 371 344 413 344 l 371 344 q 203 381 274 344 q 93 486 132 418 q 54 646 54 554 l 54 646 q 100 822 54 749 q 228 933 146 894 q 419 971 311 971 l 419 971 q 586 944 514 971 q 707 863 658 918 q 781 718 756 807 q 806 503 806 629 l 806 503 q 781 260 806 360 q 709 100 757 161 q 590 11 661 39 q 424 -17 518 -17 z m 424 497 l 424 497 q 503 516 471 497 q 552 569 536 535 q 568 650 568 603 l 568 650 q 552 732 568 697 q 504 786 536 767 q 424 806 472 806 l 424 806 q 344 786 376 806 q 296 733 313 767 q 279 651 279 699 l 279 651 q 295 569 279 604 q 343 516 311 535 q 424 497 375 497 z " }, "=": { ha: 901, x_min: 101, x_max: 800, o: "m 800 432 l 101 432 l 101 593 l 800 593 l 800 432 z m 800 126 l 101 126 l 101 288 l 800 288 l 800 126 z " }, "+": { ha: 901, x_min: 101, x_max: 800, o: "m 531 0 l 369 0 l 369 281 l 101 281 l 101 442 l 369 442 l 369 722 l 531 722 l 531 442 l 800 442 l 800 281 l 531 281 l 531 0 z " }, " ": { ha: 263, x_min: 0, x_max: 0, o: "" }, A: { ha: 1036, x_min: 11, x_max: 1026, o: "m 267 0 l 11 0 l 369 954 l 668 954 l 1026 0 l 761 0 l 704 165 l 324 165 l 267 0 z m 453 553 l 383 351 l 643 351 l 575 553 q 562 591 569 568 q 547 640 554 614 q 532 692 539 665 q 518 738 525 718 l 518 738 l 508 738 q 493 678 503 711 l 493 678 l 472 611 q 453 553 461 578 l 453 553 z " }, B: { ha: 1035, x_min: 104, x_max: 976, o: "m 692 0 l 104 0 l 104 954 l 688 954 q 821 925 761 954 q 916 843 881 896 q 951 719 951 790 l 951 719 q 930 613 951 657 q 873 540 908 568 q 793 499 838 513 l 793 499 l 793 493 q 886 453 844 482 q 952 376 928 425 q 976 258 976 328 l 976 258 q 938 119 976 176 q 835 31 899 61 q 692 0 771 0 l 692 0 z m 353 399 l 353 192 l 624 192 q 695 218 668 192 q 722 299 722 244 l 722 299 q 710 351 722 328 q 676 386 699 374 q 619 399 653 399 l 619 399 l 353 399 z m 353 769 l 353 575 l 601 575 q 653 588 632 575 q 687 622 675 600 q 699 675 699 644 l 699 675 q 672 744 699 719 q 606 769 646 769 l 606 769 l 353 769 z " }, C: { ha: 1044, x_min: 63, x_max: 985, o: "m 543 -17 l 543 -17 q 281 37 389 -17 q 118 200 174 90 q 63 478 63 310 l 63 478 q 187 848 63 725 q 543 971 311 971 l 543 971 q 772 927 672 971 q 928 797 872 883 q 985 581 985 710 l 985 581 l 742 581 q 717 685 742 642 q 649 753 693 729 q 543 776 606 776 l 543 776 q 415 744 465 776 q 342 653 365 713 q 318 508 318 593 l 318 508 l 318 446 q 342 301 318 361 q 415 209 365 240 q 542 178 464 178 l 542 178 q 655 200 608 178 q 726 266 701 222 q 750 371 750 310 l 750 371 l 985 371 q 930 156 985 242 q 776 26 875 69 q 543 -17 676 -17 z " }, D: { ha: 1049, x_min: 104, x_max: 986, o: "m 503 0 l 104 0 l 104 954 l 503 954 q 766 903 658 954 q 930 747 874 851 q 986 478 986 642 l 986 478 q 930 209 986 315 q 766 51 874 103 q 503 0 658 0 l 503 0 z m 353 760 l 353 194 l 500 194 q 601 211 558 194 q 674 260 644 228 q 717 339 703 292 q 731 447 731 386 l 731 447 l 731 506 q 717 615 731 568 q 674 694 703 663 q 601 743 644 726 q 500 760 558 760 l 500 760 l 353 760 z " }, E: { ha: 971, x_min: 107, x_max: 904, o: "m 904 0 l 107 0 l 107 954 l 894 954 l 894 760 l 356 760 l 356 581 l 826 581 l 826 390 l 356 390 l 356 194 l 904 194 l 904 0 z " }, F: { ha: 890, x_min: 104, x_max: 836, o: "m 353 0 l 104 0 l 104 954 l 836 954 l 836 760 l 353 760 l 353 554 l 778 554 l 778 364 l 353 364 l 353 0 z " }, G: { ha: 1132, x_min: 68, x_max: 1040, o: "m 539 -17 l 539 -17 q 188 106 308 -17 q 68 478 68 228 l 68 478 q 127 752 68 643 q 299 916 186 861 q 572 971 413 971 l 572 971 q 753 949 668 971 q 903 883 838 926 q 1004 773 968 839 q 1040 618 1040 707 l 1040 618 l 796 618 q 779 685 796 656 q 733 735 763 715 q 664 766 703 756 q 582 776 625 776 l 582 776 q 469 760 518 776 q 388 708 419 743 q 340 624 356 674 q 324 507 324 574 l 324 507 l 324 446 q 351 297 324 357 q 435 208 379 238 q 574 178 492 178 l 574 178 q 688 197 638 178 q 769 253 739 217 q 799 342 799 290 l 799 342 l 799 349 l 542 349 l 542 524 l 1040 524 l 1040 0 l 896 0 l 872 100 q 780 35 829 61 q 672 -4 731 8 q 539 -17 613 -17 z " }, H: { ha: 1093, x_min: 104, x_max: 989, o: "m 353 0 l 104 0 l 104 954 l 353 954 l 353 588 l 740 588 l 740 954 l 989 954 l 989 0 l 740 0 l 740 385 l 353 385 l 353 0 z " }, I: { ha: 457, x_min: 104, x_max: 353, o: "m 353 0 l 104 0 l 104 954 l 353 954 l 353 0 z " }, J: { ha: 875, x_min: 40, x_max: 772, o: "m 407 -17 l 407 -17 q 209 17 292 -17 q 83 122 126 51 q 40 301 40 192 l 40 301 l 40 332 l 278 332 l 278 301 q 309 208 278 238 q 401 178 340 178 l 401 178 q 492 215 461 178 q 524 331 524 253 l 524 331 l 524 954 l 772 954 l 772 329 q 729 134 772 211 q 604 20 686 57 q 407 -17 522 -17 z " }, K: { ha: 1069, x_min: 104, x_max: 1046, o: "m 353 0 l 104 0 l 104 954 l 353 954 l 353 531 l 731 954 l 1039 954 l 683 564 l 1046 0 l 751 0 l 511 394 l 353 249 l 353 0 z " }, L: { ha: 865, x_min: 104, x_max: 838, o: "m 838 0 l 104 0 l 104 954 l 353 954 l 353 204 l 838 204 l 838 0 z " }, M: { ha: 1269, x_min: 104, x_max: 1165, o: "m 331 0 l 104 0 l 104 954 l 467 954 l 582 529 q 599 469 589 507 q 618 389 608 431 q 635 314 628 347 l 635 314 l 646 314 q 660 377 651 340 q 678 455 668 414 q 696 531 688 496 l 696 531 l 813 954 l 1165 954 l 1165 0 l 924 0 l 924 407 q 924 528 924 467 q 926 639 925 589 q 928 711 928 689 l 928 711 l 917 711 q 903 651 913 690 q 884 569 894 611 q 865 496 874 526 l 865 496 l 726 0 l 526 0 l 386 496 l 369 563 q 351 642 360 601 q 335 710 342 682 l 335 710 l 324 710 q 326 622 325 674 q 329 513 328 569 q 331 407 331 457 l 331 407 l 331 0 z " }, N: { ha: 1093, x_min: 104, x_max: 989, o: "m 335 0 l 104 0 l 104 954 l 325 954 l 672 511 q 698 479 682 500 q 729 437 714 458 q 751 403 744 415 l 751 403 l 758 404 l 758 954 l 989 954 l 989 0 l 769 0 l 401 467 q 367 513 383 489 q 342 551 351 536 l 342 551 l 335 550 l 335 0 z " }, O: { ha: 1125, x_min: 63, x_max: 1063, o: "m 563 -17 l 563 -17 q 294 38 406 -17 q 122 203 182 93 q 63 478 63 313 l 63 478 q 122 752 63 643 q 294 916 182 861 q 563 971 406 971 l 563 971 q 831 916 719 971 q 1003 752 943 861 q 1063 478 1063 643 l 1063 478 q 1003 203 1063 313 q 831 38 943 93 q 563 -17 719 -17 z m 563 178 l 563 178 q 668 196 622 178 q 745 249 714 214 q 792 333 776 283 q 807 446 807 383 l 807 446 l 807 507 q 792 621 807 571 q 745 706 776 671 q 668 758 714 740 q 563 776 622 776 l 563 776 q 456 758 501 776 q 379 706 410 740 q 333 621 349 671 q 318 507 318 571 l 318 507 l 318 446 q 333 333 318 383 q 379 249 349 283 q 456 196 410 214 q 563 178 501 178 z " }, P: { ha: 969, x_min: 104, x_max: 938, o: "m 353 0 l 104 0 l 104 954 l 629 954 q 795 915 726 954 q 901 805 864 875 q 938 640 938 735 l 938 640 q 899 472 938 543 q 791 362 861 401 q 624 322 721 322 l 624 322 l 353 322 l 353 0 z m 353 761 l 353 514 l 565 514 q 654 547 624 514 q 685 638 685 579 l 685 638 q 672 706 685 679 q 632 747 658 732 q 565 761 606 761 l 565 761 l 353 761 z " }, Q: { ha: 1125, x_min: 63, x_max: 1063, o: "m 1036 -182 l 728 -182 l 575 -12 q 557 -15 567 -14 q 539 -15 547 -15 l 539 -15 q 283 40 390 -15 q 119 206 176 96 q 63 478 63 317 l 63 478 q 122 752 63 643 q 294 916 182 861 q 563 971 406 971 l 563 971 q 831 916 719 971 q 1003 752 943 861 q 1063 478 1063 643 l 1063 478 q 999 198 1063 308 q 821 32 936 88 l 821 32 l 1036 -182 z m 563 178 l 563 178 q 668 196 622 178 q 745 249 714 214 q 792 333 776 283 q 807 446 807 383 l 807 446 l 807 507 q 792 621 807 571 q 745 706 776 671 q 668 758 714 740 q 563 776 622 776 l 563 776 q 456 758 501 776 q 379 706 410 740 q 333 621 349 671 q 318 507 318 571 l 318 507 l 318 446 q 333 333 318 383 q 379 249 349 283 q 456 196 410 214 q 563 178 501 178 z " }, R: { ha: 1042, x_min: 104, x_max: 1007, o: "m 353 0 l 104 0 l 104 954 l 658 954 q 835 915 764 954 q 941 806 906 875 q 976 653 976 738 l 976 653 q 934 490 976 561 q 815 378 892 418 l 815 378 l 1007 0 l 729 0 l 571 336 l 353 336 l 353 0 z m 353 765 l 353 521 l 610 521 q 692 555 661 521 q 724 646 724 589 l 724 646 q 710 710 724 683 q 671 751 696 736 q 610 765 646 765 l 610 765 l 353 765 z " }, S: { ha: 968, x_min: 61, x_max: 913, o: "m 500 -17 l 500 -17 q 331 -1 410 -17 q 191 51 251 15 q 96 147 131 88 q 61 292 61 206 l 61 292 l 61 304 q 63 315 61 311 l 63 315 l 303 315 q 302 305 303 311 q 301 294 301 299 l 301 294 q 324 223 301 250 q 389 184 347 196 q 486 172 431 172 l 486 172 q 543 175 517 172 q 590 185 569 178 q 627 202 611 192 q 651 227 643 213 q 658 261 658 242 l 658 261 q 634 314 658 293 q 569 349 610 335 q 476 375 528 363 q 369 401 425 388 q 263 436 314 415 q 170 489 211 457 q 105 569 129 521 q 81 685 81 617 l 81 685 q 113 815 81 760 q 201 904 144 869 q 331 955 257 939 q 488 971 404 971 l 488 971 q 641 954 569 971 q 768 902 713 938 q 855 813 824 867 q 888 685 886 760 l 888 685 l 888 668 l 649 668 l 649 678 q 631 734 649 710 q 579 773 614 758 q 493 788 544 788 q 406 778 442 788 q 352 750 371 768 q 333 707 333 732 l 333 707 q 358 657 333 676 q 424 624 382 638 q 517 598 465 610 q 623 573 568 586 q 729 540 678 560 q 822 488 781 519 q 888 411 864 457 q 913 300 913 365 l 913 300 q 859 117 913 186 q 712 15 806 47 q 500 -17 618 -17 z " }, T: { ha: 938, x_min: 33, x_max: 901, o: "m 592 0 l 343 0 l 343 750 l 33 750 l 33 954 l 901 954 l 901 750 l 592 750 l 592 0 z " }, U: { ha: 1088, x_min: 101, x_max: 986, o: "m 543 -17 l 543 -17 q 306 26 406 -17 q 154 156 207 69 q 101 369 101 242 l 101 369 l 101 954 l 351 954 l 351 375 q 400 231 351 283 q 543 178 449 178 l 543 178 q 688 231 638 178 q 738 375 738 283 l 738 375 l 738 954 l 986 954 l 986 369 q 933 156 986 242 q 782 26 881 69 q 543 -17 683 -17 z " }, V: { ha: 1013, x_min: 19, x_max: 993, o: "m 651 0 l 363 0 l 19 954 l 286 954 l 461 415 q 475 372 467 399 q 492 316 483 344 q 507 265 501 288 l 507 265 l 517 265 q 531 313 524 286 q 547 367 539 340 q 561 414 556 394 l 561 414 l 736 954 l 993 954 l 651 0 z " }, W: { ha: 1360, x_min: 10, x_max: 1350, o: "m 532 0 l 250 0 l 10 954 l 271 954 l 388 453 q 394 417 390 440 q 403 367 399 393 q 413 318 408 340 l 413 318 l 418 318 q 424 351 421 332 q 430 388 426 369 q 437 424 433 407 q 442 453 440 440 l 442 453 l 551 954 l 822 954 l 935 453 q 943 415 939 439 q 952 365 947 392 q 961 318 957 339 l 961 318 l 967 318 q 973 351 969 333 q 980 387 976 368 q 987 422 983 406 q 993 453 990 439 l 993 453 l 1106 954 l 1350 954 l 1110 0 l 832 0 l 710 528 q 701 572 707 547 q 691 622 696 597 q 683 667 686 647 l 683 667 l 678 667 q 671 622 675 647 q 662 572 667 597 q 653 528 657 547 l 653 528 l 532 0 z " }, X: { ha: 1022, x_min: 10, x_max: 1015, o: "m 292 0 l 10 0 l 353 503 l 43 954 l 344 954 l 519 676 l 526 676 l 701 954 l 983 954 l 672 503 l 1015 0 l 713 0 l 506 329 l 499 329 l 292 0 z " }, Y: { ha: 1017, x_min: 11, x_max: 1004, o: "m 635 0 l 385 0 l 385 378 l 11 954 l 299 954 l 513 597 l 519 597 l 732 954 l 1004 954 l 635 378 l 635 0 z " }, Z: { ha: 947, x_min: 36, x_max: 900, o: "m 900 0 l 36 0 l 36 93 l 510 760 l 71 760 l 71 954 l 889 954 l 889 861 l 415 194 l 900 194 l 900 0 z " }, a: { ha: 856, x_min: 44, x_max: 849, o: "m 290 -17 l 290 -17 q 201 -8 244 -17 q 122 24 157 1 q 65 88 86 47 q 44 189 44 128 l 44 189 q 78 318 44 268 q 174 397 111 368 q 327 436 238 425 q 528 447 417 447 l 528 447 l 528 493 q 515 547 528 525 q 478 580 503 568 q 414 592 454 592 l 414 592 q 351 583 378 592 q 310 559 324 575 q 296 521 296 543 l 296 521 l 296 508 l 74 508 q 72 521 72 515 l 72 521 l 72 533 q 113 647 72 599 q 231 722 154 696 q 415 749 307 749 l 415 749 q 592 724 517 749 q 712 647 668 699 q 756 513 756 596 l 756 513 l 756 200 q 769 163 756 176 q 801 149 782 149 l 801 149 l 849 149 l 849 8 q 801 -8 833 1 q 722 -17 768 -17 l 722 -17 q 640 -5 675 -17 q 581 28 604 7 q 550 79 558 50 l 550 79 l 540 79 q 478 29 514 51 q 397 -5 443 7 q 290 -17 350 -17 z m 375 140 l 375 140 q 436 150 408 140 q 484 177 464 160 q 516 219 504 194 q 528 274 528 244 l 528 274 l 528 322 q 392 311 449 322 q 304 276 335 300 q 274 217 274 253 l 274 217 q 287 173 274 190 q 322 148 300 156 q 375 140 344 140 z " }, b: { ha: 879, x_min: 88, x_max: 826, o: "m 526 -17 l 526 -17 q 396 13 456 -17 q 300 101 336 42 l 300 101 l 290 101 l 274 0 l 88 0 l 88 1006 l 315 1006 l 315 657 l 324 657 q 377 707 346 686 q 447 738 408 728 q 531 749 486 749 l 531 749 q 688 707 621 749 q 790 581 754 665 q 826 368 826 497 l 826 368 q 790 151 826 236 q 687 25 754 67 q 526 -17 619 -17 z m 456 161 l 456 161 q 538 181 507 161 q 583 242 569 201 q 597 340 597 282 l 597 340 l 597 389 q 583 489 597 449 q 538 550 569 529 q 456 571 507 571 l 456 571 q 391 557 418 571 q 347 518 364 543 q 322 458 329 493 q 314 382 314 424 l 314 382 l 314 349 q 328 249 314 292 q 374 184 343 207 q 456 161 406 161 z " }, c: { ha: 850, x_min: 51, x_max: 793, o: "m 432 -17 l 432 -17 q 226 25 311 -17 q 97 152 142 67 q 51 367 51 238 l 51 367 q 97 581 51 496 q 228 708 143 667 q 432 750 313 750 l 432 750 q 576 732 510 750 q 691 676 642 714 q 767 582 740 639 q 793 446 793 525 l 793 446 l 569 446 q 553 524 569 493 q 507 569 538 554 q 431 585 476 585 l 431 585 q 345 563 378 585 q 297 497 313 540 q 282 390 282 454 l 282 390 l 282 340 q 297 235 282 278 q 347 170 313 192 q 436 149 382 149 l 436 149 q 515 163 483 149 q 563 209 546 178 q 579 288 579 240 l 579 288 l 793 288 q 767 153 793 211 q 692 58 740 96 q 576 2 643 21 q 432 -17 510 -17 z " }, d: { ha: 879, x_min: 51, x_max: 792, o: "m 353 -17 l 353 -17 q 192 25 260 -17 q 88 151 124 67 q 51 368 51 236 l 51 368 q 88 581 51 497 q 192 707 125 665 q 349 749 258 749 l 349 749 q 431 739 392 749 q 502 708 471 729 q 556 657 533 688 l 556 657 l 564 657 l 564 1006 l 792 1006 l 792 0 l 606 0 l 589 101 l 579 101 q 483 13 542 42 q 353 -17 425 -17 z m 424 161 l 424 161 q 505 184 474 161 q 551 249 536 207 q 565 349 565 292 l 565 349 l 565 382 q 557 458 565 424 q 532 518 549 493 q 488 557 515 543 q 424 571 461 571 l 424 571 q 341 550 372 571 q 296 489 310 529 q 282 389 282 449 l 282 389 l 282 340 q 296 242 282 282 q 341 181 310 201 q 424 161 372 161 z " }, e: { ha: 860, x_min: 51, x_max: 807, o: "m 444 -17 l 444 -17 q 232 24 319 -17 q 98 150 144 65 q 51 367 51 235 l 51 367 q 97 581 51 496 q 229 707 143 665 q 436 749 315 749 l 436 749 q 638 708 556 749 q 764 585 721 668 q 807 369 807 501 l 807 369 l 807 321 l 282 321 q 299 222 282 263 q 350 161 315 182 q 443 140 385 140 l 443 140 q 504 149 478 140 q 549 173 531 157 q 576 211 567 189 q 586 261 586 233 l 586 261 l 807 261 q 783 142 807 194 q 711 55 758 90 q 597 1 664 19 q 444 -17 529 -17 z m 283 447 l 283 447 l 575 447 q 566 510 575 483 q 540 556 557 538 q 498 583 522 574 q 442 592 474 592 l 442 592 q 358 575 392 592 q 307 526 325 558 q 283 447 289 494 z " }, f: { ha: 489, x_min: 15, x_max: 483, o: "m 346 0 l 119 0 l 119 567 l 15 567 l 15 732 l 119 732 l 119 792 q 145 919 119 868 q 222 994 171 969 q 349 1019 274 1019 l 349 1019 q 394 1017 369 1019 q 444 1008 419 1014 q 483 997 468 1003 l 483 997 l 483 854 l 417 854 q 362 838 378 854 q 346 786 346 821 l 346 786 l 346 732 l 483 732 l 483 567 l 346 567 l 346 0 z " }, g: { ha: 878, x_min: 18, x_max: 864, o: "m 578 -274 l 204 -274 q 113 -252 156 -274 q 44 -191 69 -231 q 18 -99 18 -151 l 18 -99 q 53 -1 18 -40 q 133 58 89 39 l 133 58 q 81 110 101 79 q 61 181 61 142 l 61 181 q 101 272 61 235 q 196 322 142 310 l 196 322 q 115 401 146 354 q 83 507 83 449 l 83 507 q 128 644 83 592 q 253 723 174 697 q 433 749 332 749 l 433 749 q 506 745 474 749 q 565 735 539 742 l 565 735 q 642 804 621 768 q 664 863 663 840 l 664 863 l 863 863 q 843 769 863 807 q 788 707 824 731 q 701 671 751 683 l 701 671 q 760 598 739 640 q 781 507 781 556 l 781 507 q 741 374 781 428 q 632 293 701 321 q 472 265 563 265 l 472 265 l 364 265 q 306 253 325 265 q 288 222 288 242 l 288 222 q 304 191 288 204 q 361 178 321 178 l 361 178 l 643 178 q 807 117 750 178 q 864 -36 864 57 l 864 -36 q 825 -160 864 -107 q 722 -244 786 -214 q 578 -274 657 -274 l 578 -274 z m 314 -135 l 314 -135 l 554 -135 q 596 -126 578 -135 q 624 -101 614 -117 q 635 -64 635 -85 l 635 -64 q 613 -11 635 -29 q 558 7 590 7 l 558 7 l 314 7 q 260 -12 282 7 q 239 -62 239 -31 l 239 -62 q 260 -115 239 -94 q 314 -135 282 -135 z m 432 399 l 432 399 q 524 426 492 399 q 557 507 557 454 l 557 507 q 524 588 557 561 q 432 615 492 615 l 432 615 q 342 588 375 615 q 308 507 308 561 l 308 507 q 322 448 308 472 q 364 411 336 424 q 432 399 392 399 z " }, h: { ha: 874, x_min: 86, x_max: 790, o: "m 314 0 l 86 0 l 86 1006 l 314 1006 l 314 653 l 324 653 q 381 703 347 682 q 457 737 415 725 q 543 749 499 749 l 543 749 q 677 719 622 749 q 761 632 732 690 q 790 483 790 574 l 790 483 l 790 0 l 563 0 l 563 451 q 555 503 563 482 q 533 540 547 525 q 499 563 519 556 q 451 569 478 569 l 451 569 q 381 551 411 569 q 332 501 350 532 q 314 428 314 469 l 314 428 l 314 0 z " }, i: { ha: 400, x_min: 86, x_max: 314, o: "m 314 831 l 86 831 l 86 1006 l 314 1006 l 314 831 z m 314 0 l 86 0 l 86 732 l 314 732 l 314 0 z " }, j: { ha: 397, x_min: -54, x_max: 314, o: "m 314 831 l 86 831 l 86 1006 l 314 1006 l 314 831 z m 93 -274 l 93 -274 q 45 -271 72 -274 q -9 -262 18 -268 q -54 -251 -36 -257 l -54 -251 l -54 -108 l 17 -108 q 69 -88 53 -108 q 86 -31 86 -68 l 86 -31 l 86 732 l 314 732 l 314 -51 q 292 -171 314 -121 q 222 -247 271 -221 q 93 -274 174 -274 z " }, k: { ha: 847, x_min: 86, x_max: 838, o: "m 314 0 l 86 0 l 86 1007 l 314 1007 l 314 438 l 561 732 l 828 732 l 568 442 l 838 0 l 578 0 l 415 285 l 314 186 l 314 0 z " }, l: { ha: 400, x_min: 86, x_max: 314, o: "m 314 0 l 86 0 l 86 1006 l 314 1006 l 314 0 z " }, m: { ha: 1301, x_min: 86, x_max: 1218, o: "m 314 0 l 86 0 l 86 732 l 274 732 l 290 628 l 300 628 q 360 693 325 665 q 439 735 396 721 q 531 749 482 749 l 531 749 q 658 719 606 749 q 739 628 711 689 l 739 628 l 749 628 q 809 693 774 665 q 888 735 844 721 q 979 749 932 749 l 979 749 q 1108 720 1056 749 q 1190 634 1161 692 q 1218 488 1218 576 l 1218 488 l 1218 0 l 990 0 l 990 453 q 983 505 990 483 q 964 541 976 526 q 932 563 951 556 q 890 569 913 569 l 890 569 q 826 551 854 569 q 782 501 797 532 q 767 428 767 469 l 767 428 l 767 0 l 539 0 l 539 453 q 532 505 539 483 q 513 541 525 526 q 481 563 500 556 q 439 569 461 569 l 439 569 q 374 551 403 569 q 330 501 346 532 q 314 428 314 469 l 314 428 l 314 0 z " }, n: { ha: 874, x_min: 86, x_max: 790, o: "m 314 0 l 86 0 l 86 732 l 274 732 l 290 628 l 300 628 q 364 693 328 665 q 446 735 400 721 q 543 749 492 749 l 543 749 q 677 719 622 749 q 761 632 732 690 q 790 483 790 574 l 790 483 l 790 0 l 563 0 l 563 451 q 555 503 563 482 q 533 540 547 525 q 499 563 519 556 q 451 569 478 569 l 451 569 q 381 551 411 569 q 332 501 350 532 q 314 428 314 469 l 314 428 l 314 0 z " }, o: { ha: 882, x_min: 51, x_max: 831, o: "m 440 -17 l 440 -17 q 231 25 318 -17 q 98 152 144 67 q 51 367 51 238 l 51 367 q 98 581 51 496 q 231 707 144 665 q 440 749 318 749 l 440 749 q 651 707 564 749 q 784 581 738 665 q 831 367 831 496 l 831 367 q 784 152 831 238 q 651 25 738 67 q 440 -17 564 -17 z m 440 149 l 440 149 q 533 171 497 149 q 584 235 568 193 q 600 340 600 278 l 600 340 l 600 392 q 584 497 600 454 q 533 562 568 540 q 440 583 497 583 l 440 583 q 349 562 385 583 q 298 497 314 540 q 282 392 282 454 l 282 392 l 282 340 q 298 235 282 278 q 349 171 314 193 q 440 149 385 149 z " }, p: { ha: 879, x_min: 88, x_max: 826, o: "m 315 -258 l 88 -258 l 88 732 l 274 732 l 293 631 l 303 631 q 398 721 340 693 q 526 749 456 749 l 526 749 q 687 707 619 749 q 790 581 754 665 q 826 365 826 496 l 826 365 q 790 151 826 236 q 688 25 754 67 q 531 -17 621 -17 l 531 -17 q 447 -7 486 -17 q 377 24 408 3 q 324 75 346 44 l 324 75 l 315 75 l 315 -258 z m 456 161 l 456 161 q 538 182 507 161 q 583 243 569 203 q 597 342 597 283 l 597 342 l 597 390 q 583 490 597 449 q 538 551 569 531 q 456 571 507 571 l 456 571 q 374 548 406 571 q 328 483 343 525 q 314 383 314 440 l 314 383 l 314 350 q 322 274 314 308 q 347 214 329 239 q 391 175 364 189 q 456 161 418 161 z " }, q: { ha: 879, x_min: 51, x_max: 792, o: "m 792 -258 l 564 -258 l 564 75 l 556 75 q 500 25 531 46 q 431 -6 469 4 q 349 -17 392 -17 l 349 -17 q 192 25 258 -17 q 88 151 125 67 q 51 365 51 236 l 51 365 q 88 581 51 496 q 192 707 124 665 q 353 749 260 749 l 353 749 q 483 719 424 749 q 576 631 542 689 l 576 631 l 586 631 l 606 732 l 792 732 l 792 -258 z m 424 161 l 424 161 q 488 175 461 161 q 532 214 515 189 q 557 274 549 239 q 565 350 565 308 l 565 350 l 565 383 q 551 483 565 440 q 505 548 536 525 q 424 571 474 571 l 424 571 q 341 551 372 571 q 296 490 310 531 q 282 390 282 449 l 282 390 l 282 342 q 296 243 282 283 q 341 182 310 203 q 424 161 372 161 z " }, r: { ha: 565, x_min: 86, x_max: 556, o: "m 314 0 l 86 0 l 86 732 l 274 732 l 290 619 l 300 619 q 341 687 317 657 q 401 733 365 717 q 479 750 436 750 l 479 750 q 525 745 504 750 q 556 735 546 740 l 556 735 l 556 536 l 483 536 q 408 524 440 536 q 354 488 375 513 q 324 429 333 464 q 314 349 314 394 l 314 349 l 314 0 z " }, s: { ha: 804, x_min: 51, x_max: 754, o: "m 400 -17 l 400 -17 q 265 -1 328 -17 q 153 43 201 14 q 78 115 106 72 q 51 215 51 158 l 51 215 l 51 226 q 53 235 51 231 l 53 235 l 268 235 l 268 222 q 288 172 269 192 q 338 142 307 151 q 404 133 368 133 l 404 133 q 460 139 431 133 q 511 158 490 144 q 532 199 532 172 l 532 199 q 506 243 532 228 q 438 269 481 258 q 347 289 396 279 l 347 289 q 249 314 299 300 q 159 352 200 328 q 93 415 118 376 q 68 514 68 454 l 68 514 q 95 623 68 578 q 169 696 122 668 q 278 736 217 724 q 410 749 340 749 l 410 749 q 531 736 474 749 q 635 698 589 724 q 708 633 682 672 q 735 540 735 593 l 735 540 q 734 526 735 533 q 733 515 733 518 l 733 515 l 519 515 l 519 526 q 504 565 519 550 q 463 590 489 581 q 404 599 436 599 l 404 599 q 363 595 383 599 q 326 585 343 592 q 299 568 310 579 q 289 540 289 557 l 289 540 q 307 506 289 519 q 356 485 325 493 q 425 467 388 476 l 425 467 q 533 444 476 456 q 641 410 590 432 q 723 347 692 389 q 754 231 754 304 l 754 231 q 726 113 754 161 q 650 37 699 65 q 538 -4 601 8 q 400 -17 474 -17 z " }, t: { ha: 535, x_min: 29, x_max: 494, o: "m 343 -17 l 343 -17 q 223 5 272 -17 q 149 69 174 26 q 125 174 125 113 l 125 174 l 125 567 l 29 567 l 29 732 l 132 732 l 179 946 l 351 946 l 351 732 l 494 732 l 494 567 l 351 567 l 351 229 q 367 169 351 190 q 422 149 382 149 l 422 149 l 494 149 l 494 7 q 449 -5 476 1 q 394 -14 422 -11 q 343 -17 367 -17 z " }, u: { ha: 874, x_min: 82, x_max: 786, o: "m 329 -17 l 329 -17 q 147 49 211 -17 q 82 249 82 114 l 82 249 l 82 732 l 310 732 l 310 281 q 317 229 310 251 q 339 192 325 207 q 374 169 353 176 q 421 163 396 163 l 421 163 q 492 181 461 163 q 540 233 522 200 q 558 304 558 265 l 558 304 l 558 732 l 786 732 l 786 0 l 599 0 l 585 104 l 575 104 q 512 40 550 68 q 427 -2 474 13 q 329 -17 381 -17 z " }, v: { ha: 797, x_min: 3, x_max: 793, o: "m 517 0 l 278 0 l 3 732 l 246 732 l 339 453 q 357 392 346 432 q 381 310 368 353 q 403 232 393 268 l 403 232 l 411 232 q 433 307 421 265 q 456 388 444 349 q 475 453 467 428 l 475 453 l 567 732 l 793 732 l 517 0 z " }, w: { ha: 1193, x_min: 1, x_max: 1192, o: "m 475 0 l 247 0 l 1 732 l 244 732 l 321 429 q 335 372 328 406 q 351 306 343 338 q 364 253 358 274 l 364 253 l 372 253 q 388 315 381 283 q 403 378 394 347 l 403 378 l 415 431 l 490 732 l 724 732 l 800 429 q 813 378 806 410 q 828 313 819 346 q 842 253 836 279 l 842 253 l 851 253 q 863 307 856 276 q 879 370 871 338 q 893 426 888 403 l 893 426 l 971 732 l 1192 732 l 946 0 l 718 0 l 642 293 q 628 350 636 318 q 613 413 619 382 q 600 465 606 443 l 600 465 l 594 465 q 585 424 592 450 q 572 364 579 397 q 553 294 564 331 l 553 294 l 475 0 z " }, x: { ha: 850, x_min: 10, x_max: 839, o: "m 264 0 l 10 0 l 282 383 l 33 732 l 303 732 l 432 524 l 439 524 l 569 732 l 824 732 l 572 382 l 839 0 l 572 0 l 422 240 l 415 240 l 264 0 z " }, y: { ha: 797, x_min: 3, x_max: 793, o: "m 203 -274 l 203 -274 q 115 -266 153 -274 q 63 -253 78 -258 l 63 -253 l 63 -108 l 158 -108 q 225 -91 197 -108 q 269 -49 253 -74 q 292 0 285 -25 l 292 0 l 3 732 l 246 732 l 354 411 q 373 353 363 389 q 394 281 383 318 q 411 215 404 244 l 411 215 l 419 215 q 432 260 425 235 q 446 313 439 286 q 460 365 453 340 q 474 410 468 390 l 474 410 l 567 732 l 793 732 l 540 29 q 488 -90 517 -35 q 421 -187 460 -146 q 328 -251 382 -228 q 203 -274 275 -274 z " }, z: { ha: 743, x_min: 31, x_max: 707, o: "m 707 0 l 31 0 l 31 85 l 367 567 l 50 567 l 50 732 l 694 732 l 694 650 l 356 165 l 707 165 l 707 0 z " }, ".": { ha: 442, x_min: 100, x_max: 342, o: "m 342 0 l 100 0 l 100 232 l 342 232 l 342 0 z " }, ",": { ha: 442, x_min: 96, x_max: 342, o: "m 96 -249 l 96 -249 l 96 -151 q 158 -126 131 -147 q 201 -72 185 -106 q 218 0 218 -39 l 218 0 l 101 0 l 101 232 l 342 232 l 342 25 q 308 -122 342 -64 q 217 -210 274 -179 q 96 -249 161 -240 z " }, "'": { ha: 365, x_min: 82, x_max: 286, o: "m 236 558 l 128 558 l 82 750 l 82 954 l 286 954 l 286 750 l 236 558 z " }, "\u2019": { ha: 388, x_min: 81, x_max: 307, o: "m 81 496 l 81 496 l 81 585 q 138 610 113 589 q 178 667 164 632 q 193 742 193 701 l 193 742 l 86 742 l 86 954 l 307 954 l 307 764 q 275 620 307 678 q 192 533 243 563 q 81 496 140 503 z " }, "!": { ha: 436, x_min: 96, x_max: 342, o: "m 289 306 l 147 306 l 96 954 l 342 954 l 289 306 z m 333 0 l 104 0 l 104 221 l 333 221 l 333 0 z " }, "?": { ha: 850, x_min: 69, x_max: 769, o: "m 525 307 l 324 307 l 324 375 q 338 444 324 414 q 376 498 353 474 q 425 544 399 522 q 474 587 451 565 q 511 634 496 608 q 526 690 526 660 l 526 690 q 522 726 526 708 q 504 761 517 744 q 470 788 492 778 q 414 799 449 799 l 414 799 q 349 786 374 799 q 313 754 325 774 q 295 713 300 735 q 290 669 290 690 l 290 669 l 290 651 q 292 632 290 642 l 292 632 l 74 632 q 71 654 72 642 q 69 682 69 667 l 69 682 q 85 778 69 733 q 132 858 101 822 q 208 918 163 893 q 309 957 253 943 q 432 971 365 971 l 432 971 q 545 959 493 971 q 639 925 597 947 q 709 870 681 903 q 753 796 738 838 q 769 704 769 754 l 769 704 q 752 608 769 649 q 706 538 735 568 q 647 485 678 508 q 589 440 617 461 q 543 395 561 418 q 525 343 525 372 l 525 343 l 525 307 z m 540 0 l 311 0 l 311 221 l 540 221 l 540 0 z " }, $: { ha: 804, x_min: 51, x_max: 754, o: "m 447 -82 l 357 -82 l 357 96 q 265 110 308 99 l 265 110 q 153 154 201 125 q 78 226 106 183 q 51 326 51 269 l 51 326 l 51 338 q 53 346 51 342 l 53 346 l 268 346 l 268 333 q 288 283 269 303 q 338 254 307 263 l 338 254 q 357 249 347 250 l 357 249 l 357 399 q 347 400 353 399 l 347 400 q 249 425 299 411 q 159 463 200 439 q 93 526 118 488 q 68 625 68 565 l 68 625 q 95 734 68 689 q 169 807 122 779 q 279 847 217 835 l 279 847 q 357 858 317 856 l 357 858 l 357 1029 l 447 1029 l 447 858 q 532 847 490 856 l 532 847 q 635 809 589 835 q 708 744 682 783 q 735 651 735 704 l 735 651 q 734 637 735 644 q 733 626 733 629 l 733 626 l 519 626 l 519 638 q 504 676 519 661 q 463 701 489 692 l 463 701 q 447 706 456 703 l 447 706 l 447 574 q 533 556 489 564 l 533 556 q 641 522 590 543 q 723 458 692 500 q 754 342 754 415 l 754 342 q 726 224 754 272 q 650 148 699 176 q 538 107 601 119 l 538 107 q 447 96 494 99 l 447 96 l 447 -82 z m 447 378 l 447 247 q 461 250 454 249 l 461 250 q 511 269 490 256 q 532 310 532 283 l 532 310 q 507 354 532 339 l 507 354 q 447 378 483 368 l 447 378 z m 357 596 l 357 596 l 357 706 q 326 697 340 701 l 326 697 q 299 679 310 690 q 289 651 289 668 l 289 651 q 307 617 289 631 q 357 596 325 604 l 357 596 q 357 596 357 596 z " }, "%": { ha: 1367, x_min: 94, x_max: 1274, o: "m 440 0 l 296 0 l 931 954 l 1075 954 l 440 0 z m 338 472 l 338 472 q 203 499 257 472 q 122 581 149 526 q 94 721 94 636 l 94 721 q 122 861 94 806 q 203 944 149 917 q 338 971 257 971 l 338 971 q 472 944 418 971 q 551 861 525 917 q 578 721 578 806 l 578 721 q 551 581 578 636 q 472 499 525 526 q 338 472 418 472 z m 338 576 l 338 576 q 406 613 388 576 q 424 706 424 649 l 424 706 l 424 738 q 416 804 424 775 q 390 850 408 833 q 338 867 371 867 l 338 867 q 269 831 288 867 q 250 738 250 794 l 250 738 l 250 706 q 269 613 250 649 q 338 576 288 576 z m 1033 -17 l 1033 -17 q 899 11 953 -17 q 818 94 844 39 q 792 232 792 149 l 792 232 q 818 372 792 317 q 899 455 844 428 q 1033 482 953 482 l 1033 482 q 1168 455 1114 482 q 1248 372 1222 428 q 1274 232 1274 317 l 1274 232 q 1248 93 1274 149 q 1168 10 1222 38 q 1033 -17 1114 -17 z m 1033 88 l 1033 88 q 1101 124 1083 88 q 1119 217 1119 160 l 1119 217 l 1119 249 q 1112 316 1119 288 q 1085 361 1104 344 q 1033 378 1067 378 l 1033 378 q 965 342 983 378 q 946 249 946 307 l 946 249 l 946 217 q 965 124 946 160 q 1033 88 983 88 z " }, "&": { ha: 1133, x_min: 90, x_max: 1107, o: "m 526 -17 l 526 -17 q 287 19 383 -17 q 140 117 190 54 q 90 261 90 179 l 90 261 q 139 411 90 353 q 267 493 188 469 l 267 493 l 267 499 q 159 574 203 524 q 115 703 115 625 l 115 703 q 164 842 115 782 q 305 937 213 903 q 528 971 397 971 l 528 971 q 750 937 657 971 q 893 844 843 903 q 943 710 943 785 l 943 710 l 943 675 l 732 675 l 732 696 q 708 753 731 729 q 644 789 686 776 q 539 801 601 801 l 539 801 q 456 792 492 801 q 396 765 419 782 q 360 724 372 747 q 349 674 349 701 l 349 674 q 367 612 349 636 q 415 576 385 588 q 478 564 444 564 l 478 564 l 599 564 l 599 407 l 463 407 q 394 396 426 407 q 342 359 361 385 q 324 288 324 333 l 324 288 q 345 215 324 244 q 413 169 367 185 q 528 153 458 153 l 528 153 q 648 170 603 153 q 713 219 693 188 q 732 290 732 250 l 732 290 l 732 564 l 1107 564 l 1107 407 l 944 407 l 944 294 q 901 131 944 201 q 764 22 857 60 q 526 -17 671 -17 z " }, "-": { ha: 463, x_min: 56, x_max: 407, o: "m 407 283 l 56 283 l 56 474 l 407 474 l 407 283 z " }, ":": { ha: 464, x_min: 113, x_max: 353, o: "m 353 500 l 113 500 l 113 732 l 353 732 l 353 500 z m 353 0 l 113 0 l 113 232 l 353 232 l 353 0 z " }, "|": { ha: 368, x_min: 104, x_max: 264, o: "m 264 -281 l 104 -281 l 104 1007 l 264 1007 l 264 -281 z " } }, familyName: "Archivo ExtraBold", ascender: 1219, descender: -292, underlinePosition: -148, underlineThickness: 44, boundingBox: { xMin: -220, xMax: 1393, yMin: -405, yMax: 1100 }, resolution: 1e3 };

// src/three/fonts/archivo800i.json
var archivo800i_default = { glyphs: { "0": { ha: 868, x_min: 64, x_max: 844, o: "m 385 -17 l 385 -17 q 205 17 276 -17 q 99 122 133 51 q 64 299 64 193 l 64 299 q 66 355 64 325 q 72 416 68 385 q 83 482 76 447 l 83 482 q 140 701 106 608 q 228 853 175 793 q 353 942 281 913 q 524 971 426 971 l 524 971 q 705 937 635 971 q 810 833 775 903 q 844 657 844 763 l 844 657 q 842 601 844 631 q 835 540 839 572 q 825 475 832 508 l 825 475 q 768 255 804 347 q 680 102 732 163 q 556 13 628 42 q 385 -17 483 -17 z m 394 149 l 394 149 q 473 167 442 149 q 526 226 504 186 q 565 335 549 267 q 600 499 582 403 l 600 499 q 610 558 606 532 q 617 604 614 583 q 620 642 619 625 q 621 672 621 658 l 621 672 q 596 774 621 742 q 514 806 571 806 l 514 806 q 435 787 467 806 q 381 727 403 768 q 342 619 360 686 q 307 456 325 553 l 307 456 q 297 397 301 422 q 290 351 293 371 q 287 314 288 331 q 286 283 286 297 l 286 283 q 311 182 286 215 q 394 149 336 149 z " }, "1": { ha: 868, x_min: 40, x_max: 743, o: "m 711 0 l 40 0 l 72 179 l 300 179 l 390 689 l 161 689 l 186 824 q 276 838 226 826 q 380 868 326 850 q 484 908 433 886 q 576 956 535 931 l 576 956 l 665 956 l 528 179 l 743 179 l 711 0 z " }, "2": { ha: 868, x_min: -3, x_max: 846, o: "m 729 0 l -3 0 l 8 57 q 60 182 21 125 q 153 288 99 239 q 271 379 208 336 q 394 462 333 422 q 505 542 454 501 q 585 624 556 582 q 615 711 615 665 l 615 711 q 590 772 615 744 q 503 800 564 800 l 503 800 q 420 783 456 800 q 363 735 385 765 q 333 663 342 704 l 333 663 l 326 621 l 113 621 q 155 779 121 713 q 245 888 189 846 q 373 951 301 931 q 525 971 444 971 l 525 971 q 705 938 633 971 q 811 848 776 904 q 846 724 846 792 l 846 724 q 826 610 846 663 q 771 515 806 558 q 692 433 736 471 q 599 363 647 396 q 501 300 550 331 q 410 239 453 269 l 410 239 q 383 219 397 231 q 361 197 369 207 l 361 197 l 764 197 l 729 0 z " }, "3": { ha: 868, x_min: 38, x_max: 849, o: "m 388 -17 l 388 -17 q 192 13 269 -17 q 76 94 115 42 q 38 215 38 147 l 38 215 q 40 247 38 229 q 47 289 42 265 l 47 289 l 258 289 q 254 264 256 274 q 253 246 253 254 l 253 246 q 288 174 253 199 q 388 150 324 150 l 388 150 q 481 169 440 150 q 544 226 521 189 q 567 315 567 263 l 567 315 q 551 370 567 350 q 510 399 536 390 q 453 407 485 407 l 453 407 l 363 407 l 389 564 l 471 564 q 526 574 500 564 q 572 602 551 583 q 604 648 593 621 q 615 710 615 675 l 615 710 q 602 760 615 739 q 563 792 589 781 q 501 804 538 804 l 501 804 q 426 790 458 804 q 374 750 394 775 q 349 693 354 725 l 349 693 l 346 675 l 140 675 l 146 707 q 209 843 160 783 q 340 937 258 903 q 526 971 421 971 l 526 971 q 700 943 628 971 q 810 865 772 915 q 849 744 849 814 l 849 744 q 824 633 849 682 q 756 550 799 583 q 663 499 713 517 l 663 499 l 661 493 q 758 422 722 471 q 793 300 793 372 l 793 300 q 739 128 793 199 q 592 20 685 57 q 388 -17 499 -17 z " }, "4": { ha: 869, x_min: 13, x_max: 835, o: "m 640 0 l 419 0 l 457 203 l 13 203 l 43 379 q 169 551 106 457 q 290 751 232 644 q 397 971 349 858 l 397 971 l 639 971 q 578 845 617 913 q 494 709 540 778 q 398 577 447 640 q 303 462 349 514 q 222 378 257 410 l 222 378 l 488 378 l 522 585 q 567 646 543 611 q 615 718 592 681 q 658 792 639 756 q 690 857 678 828 l 690 857 l 792 857 l 708 378 l 835 378 l 804 203 l 678 203 l 640 0 z " }, "5": { ha: 868, x_min: 40, x_max: 847, o: "m 393 -17 l 393 -17 q 202 15 281 -17 q 82 104 124 46 q 40 242 40 163 l 40 242 q 42 272 40 256 q 46 303 43 288 l 46 303 l 258 303 q 256 285 257 293 q 256 268 256 276 l 256 268 q 270 207 256 233 q 313 166 285 181 q 383 151 342 151 l 383 151 q 456 165 422 151 q 515 204 489 178 q 555 267 540 231 q 569 350 569 304 l 569 350 q 538 439 569 407 q 446 471 506 471 l 446 471 q 376 458 406 471 q 326 429 346 446 q 292 397 306 413 l 292 397 l 104 422 l 238 954 l 847 954 l 813 756 l 382 756 l 336 571 q 378 596 353 582 q 440 619 403 610 q 528 629 478 629 l 528 629 q 671 600 610 629 q 766 513 732 571 q 800 374 800 456 l 800 374 q 746 167 800 254 q 599 31 692 79 q 393 -17 507 -17 z " }, "6": { ha: 868, x_min: 58, x_max: 840, o: "m 393 -17 l 393 -17 q 211 17 286 -17 q 97 121 136 50 q 58 304 58 192 l 58 304 q 62 378 58 339 q 74 460 65 417 l 74 460 q 166 763 107 651 q 315 922 225 874 q 528 971 406 971 l 528 971 q 697 942 628 971 q 803 859 767 914 q 840 728 840 804 l 840 728 q 839 695 840 713 q 835 660 838 678 l 835 660 l 621 660 q 624 683 624 672 q 625 701 625 693 l 625 701 q 598 780 625 754 q 517 806 571 806 l 517 806 q 418 775 456 806 q 358 684 381 744 q 319 533 336 624 l 319 533 q 372 569 340 551 q 442 598 403 586 q 525 610 482 610 l 525 610 q 675 581 613 610 q 772 496 738 551 q 806 363 806 440 l 806 363 q 774 205 806 275 q 688 85 743 135 q 557 10 632 36 q 393 -17 482 -17 z m 401 149 l 401 149 q 474 165 442 149 q 528 206 507 181 l 528 206 q 564 266 551 231 q 576 340 576 301 l 576 340 q 563 403 576 376 q 524 443 550 429 q 457 457 497 457 l 457 457 q 383 442 417 457 q 328 401 350 428 l 328 401 q 292 342 304 376 q 281 265 281 307 l 281 265 q 293 203 281 229 q 333 163 306 176 q 401 149 360 149 z " }, "7": { ha: 868, x_min: 129, x_max: 914, o: "m 411 0 l 136 0 q 199 210 156 107 q 301 409 242 313 q 433 592 361 506 q 581 754 504 679 l 581 754 l 129 754 l 165 954 l 914 954 l 893 835 q 772 705 832 772 q 656 563 711 638 q 553 410 600 489 q 474 249 507 332 q 425 76 440 165 l 425 76 q 417 40 421 57 q 411 0 414 22 l 411 0 z " }, "8": { ha: 868, x_min: 25, x_max: 829, o: "m 371 -17 l 371 -17 q 181 12 258 -17 q 65 93 104 40 q 25 215 25 146 l 25 215 q 49 332 25 279 q 117 424 72 385 q 221 486 161 464 l 221 486 q 154 562 176 518 q 132 657 132 606 l 132 657 q 160 784 132 726 q 241 883 189 842 q 362 948 293 925 q 513 971 431 971 l 513 971 q 680 942 608 971 q 790 860 751 913 q 829 735 829 807 l 829 735 q 810 635 829 682 q 756 551 792 589 q 665 486 719 514 l 665 486 q 752 413 721 460 q 783 300 783 367 l 783 300 q 731 132 783 203 q 587 22 679 61 q 371 -17 494 -17 z m 383 149 l 383 149 q 428 153 407 149 q 469 167 450 158 q 504 189 489 176 l 504 189 q 540 239 526 210 q 554 306 554 268 l 554 306 q 520 381 554 356 q 429 407 486 407 l 429 407 q 385 403 406 407 q 345 390 364 399 q 311 368 326 382 l 311 368 q 274 317 288 347 q 260 249 260 288 l 260 249 q 292 174 260 200 q 383 149 325 149 z m 456 567 l 456 567 q 500 571 479 567 q 539 584 521 575 q 571 606 557 593 l 571 606 q 605 651 593 624 q 617 713 617 678 l 617 713 q 585 783 617 760 q 500 807 553 807 l 500 807 q 456 802 476 807 q 419 789 436 797 q 388 768 401 781 l 388 768 q 354 722 367 750 q 342 657 342 694 l 342 657 q 372 589 342 611 q 456 567 403 567 z " }, "9": { ha: 868, x_min: 61, x_max: 843, o: "m 374 -17 l 374 -17 q 205 13 275 -17 q 98 97 135 42 q 61 226 61 151 l 61 226 q 63 260 61 243 q 67 294 64 276 l 67 294 l 279 294 q 277 272 278 282 q 276 253 276 261 l 276 253 q 303 175 276 201 q 385 149 331 149 l 385 149 q 484 179 447 149 q 544 270 521 210 q 582 421 567 331 l 582 421 q 530 385 561 403 q 460 356 499 368 q 376 344 421 344 l 376 344 q 226 374 289 344 q 130 460 164 404 q 96 592 96 515 l 96 592 q 127 749 96 679 q 214 869 158 819 q 344 944 269 918 q 508 971 419 971 l 508 971 q 690 938 615 971 q 804 833 765 904 q 843 650 843 763 l 843 650 q 840 576 843 615 q 828 494 836 538 l 828 494 q 736 192 796 304 q 586 32 676 81 q 374 -17 496 -17 z m 444 497 l 444 497 q 518 513 485 497 q 574 553 551 528 l 574 553 q 609 613 597 578 q 621 690 621 649 l 621 690 q 608 752 621 726 q 568 792 594 778 q 500 806 542 806 l 500 806 q 427 790 460 806 q 374 749 394 775 l 374 749 q 338 689 350 724 q 325 614 325 654 l 325 614 q 338 552 325 578 q 378 512 351 526 q 444 497 404 497 z " }, "=": { ha: 901, x_min: 60, x_max: 840, o: "m 811 432 l 113 432 l 143 593 l 840 593 l 811 432 z m 757 126 l 60 126 l 88 288 l 786 288 l 757 126 z " }, "+": { ha: 901, x_min: 86, x_max: 814, o: "m 467 0 l 303 0 l 353 281 l 86 281 l 115 442 l 383 442 l 432 722 l 596 722 l 546 442 l 814 442 l 785 281 l 517 281 l 467 0 z " }, " ": { ha: 263, x_min: 0, x_max: 0, o: "" }, A: { ha: 1036, x_min: -53, x_max: 961, o: "m 208 0 l -53 0 l 474 954 l 772 954 l 961 0 l 706 0 l 678 165 l 294 165 l 208 0 z m 489 549 l 389 351 l 649 351 l 615 550 q 608 600 613 575 l 608 600 l 600 649 q 593 694 596 672 q 588 738 590 717 l 588 738 l 582 738 q 551 674 568 708 q 519 608 535 640 l 519 608 l 489 549 z " }, B: { ha: 1035, x_min: 39, x_max: 1017, o: "m 631 0 l 39 0 l 208 954 l 744 954 q 895 926 835 954 q 986 850 956 899 q 1017 739 1017 801 l 1017 739 q 991 631 1017 681 q 921 546 965 581 q 818 499 876 511 l 818 499 l 817 493 q 921 424 879 474 q 963 294 963 375 l 963 294 q 917 133 963 199 q 797 33 872 67 q 631 0 721 0 l 631 0 z m 358 397 l 324 192 l 592 192 q 654 206 626 192 q 697 247 682 219 q 713 311 713 274 l 713 311 q 690 374 713 350 q 615 397 667 397 l 615 397 l 358 397 z m 425 769 l 390 575 l 638 575 q 691 584 668 575 q 728 609 714 593 q 749 645 742 625 q 756 688 756 665 l 756 688 q 733 748 756 726 q 672 769 711 769 l 672 769 l 425 769 z " }, C: { ha: 1044, x_min: 69, x_max: 1031, o: "m 490 -17 l 490 -17 q 177 75 285 -17 q 69 356 69 167 l 69 356 q 73 426 69 390 q 82 497 76 461 l 82 497 q 181 755 110 649 q 364 916 251 861 q 626 971 476 971 l 626 971 q 840 936 749 971 q 981 833 931 901 q 1031 664 1031 765 l 1031 664 q 1028 623 1031 644 q 1024 581 1026 601 l 1024 581 l 779 581 q 783 605 782 593 q 783 626 783 617 l 783 626 q 764 708 783 675 q 708 759 744 742 q 618 776 671 776 l 618 776 q 513 758 558 776 q 433 705 467 739 q 378 622 400 671 q 344 515 356 574 l 344 515 q 333 456 338 479 q 327 415 329 432 q 324 386 325 399 q 324 363 324 374 l 324 363 q 343 263 324 304 q 403 199 363 221 q 504 178 443 178 l 504 178 q 623 201 572 178 q 707 267 674 224 q 751 371 740 310 l 751 371 l 986 371 q 899 156 965 242 q 730 26 833 69 q 490 -17 626 -17 z " }, D: { ha: 1049, x_min: 40, x_max: 1018, o: "m 465 0 l 40 0 l 208 954 l 590 954 q 907 864 796 954 q 1018 583 1018 774 l 1018 583 q 1015 520 1018 553 q 1007 454 1013 488 l 1007 454 q 909 204 981 306 q 726 51 838 103 q 465 0 614 0 l 465 0 z m 422 760 l 324 194 l 465 194 q 571 211 524 194 q 653 260 618 228 q 712 338 689 292 q 744 443 735 385 l 744 443 q 756 509 753 485 q 761 549 760 533 q 763 575 763 564 l 763 575 q 741 677 763 636 q 676 739 719 718 q 568 760 633 760 l 568 760 l 422 760 z " }, E: { ha: 971, x_min: 39, x_max: 997, o: "m 838 0 l 39 0 l 208 954 l 997 954 l 963 760 l 424 760 l 392 581 l 863 581 l 829 390 l 358 390 l 324 194 l 872 194 l 838 0 z " }, F: { ha: 890, x_min: 39, x_max: 942, o: "m 289 0 l 39 0 l 208 954 l 942 954 l 907 760 l 424 760 l 386 554 l 811 554 l 778 364 l 354 364 l 289 0 z " }, G: { ha: 1132, x_min: 71, x_max: 1086, o: "m 479 -17 l 479 -17 q 178 75 285 -17 q 71 353 71 167 l 71 353 q 78 463 71 410 q 99 561 85 515 l 99 561 q 210 785 133 694 q 400 924 288 876 q 651 971 513 971 l 651 971 q 824 953 744 971 q 962 899 903 935 q 1053 808 1021 863 q 1086 681 1086 754 l 1086 681 q 1085 650 1086 665 q 1081 618 1083 635 l 1081 618 l 836 618 q 838 632 838 625 l 838 632 l 838 643 q 824 700 838 675 q 785 742 811 725 q 726 767 760 758 q 654 776 693 776 l 654 776 q 538 759 590 776 q 446 708 485 742 q 381 626 407 674 q 346 515 356 578 l 346 515 q 335 458 339 481 q 331 418 332 435 l 331 418 l 326 390 q 325 368 325 379 l 325 368 q 349 263 325 306 q 417 199 372 221 q 531 178 463 178 l 531 178 q 652 199 596 178 q 746 256 708 219 q 790 342 783 293 l 790 342 l 792 349 l 535 349 l 567 524 l 1064 524 l 972 0 l 828 0 l 819 101 q 721 36 774 63 q 609 -3 668 10 q 479 -17 550 -17 z " }, H: { ha: 1093, x_min: 39, x_max: 1093, o: "m 289 0 l 39 0 l 208 954 l 457 954 l 393 588 l 779 588 l 844 954 l 1093 954 l 925 0 l 675 0 l 743 385 l 357 385 l 289 0 z " }, I: { ha: 457, x_min: 39, x_max: 457, o: "m 289 0 l 39 0 l 208 954 l 457 954 l 289 0 z " }, J: { ha: 875, x_min: 22, x_max: 876, o: "m 356 -17 l 356 -17 q 108 46 193 -17 q 22 233 22 108 l 22 233 q 25 274 22 251 q 35 332 28 297 l 35 332 l 272 332 q 265 288 267 304 q 264 261 264 271 l 264 261 q 288 198 264 218 q 365 178 313 178 l 365 178 q 465 215 425 178 q 518 331 504 253 l 518 331 l 628 954 l 876 954 l 767 325 q 691 130 746 206 q 551 19 636 54 q 356 -17 467 -17 z " }, K: { ha: 1069, x_min: 39, x_max: 1142, o: "m 289 0 l 39 0 l 208 954 l 457 954 l 385 546 l 819 954 l 1142 954 l 719 564 l 981 0 l 697 0 l 524 397 l 331 238 l 289 0 z " }, L: { ha: 865, x_min: 40, x_max: 803, o: "m 767 0 l 40 0 l 208 954 l 457 954 l 325 204 l 803 204 l 767 0 z " }, M: { ha: 1269, x_min: 39, x_max: 1269, o: "m 271 0 l 39 0 l 208 954 l 557 954 l 599 529 q 604 467 601 506 q 610 387 607 428 q 614 313 613 346 l 614 313 l 624 313 q 652 384 638 347 q 682 459 667 421 q 713 531 697 497 l 713 531 l 906 954 l 1269 954 l 1100 0 l 858 0 l 942 467 q 958 554 949 507 q 978 644 968 601 q 994 713 988 688 l 994 713 l 985 713 q 970 675 979 697 q 953 632 961 653 q 938 596 944 611 l 938 596 l 663 0 l 453 0 l 396 589 q 392 652 394 618 q 388 711 389 686 l 388 711 l 378 711 l 372 631 q 363 542 368 585 q 353 467 358 499 l 353 467 l 271 0 z " }, N: { ha: 1093, x_min: 39, x_max: 1093, o: "m 271 0 l 39 0 l 208 954 l 428 954 l 688 503 q 712 463 699 485 q 737 418 725 440 q 758 378 749 396 l 758 378 l 765 381 q 772 431 768 406 q 779 476 776 456 l 779 476 l 863 954 l 1093 954 l 925 0 l 707 0 l 438 461 q 407 515 425 482 q 375 574 389 549 l 375 574 l 368 572 q 360 515 365 546 q 351 464 354 483 l 351 464 l 271 0 z " }, O: { ha: 1125, x_min: 69, x_max: 1094, o: "m 513 -17 l 513 -17 q 273 26 372 -17 q 122 152 174 68 q 69 361 69 236 l 69 361 q 73 424 69 393 q 82 488 76 456 l 82 488 q 180 751 108 643 q 369 915 251 858 q 650 971 486 971 l 650 971 q 891 928 792 971 q 1042 801 990 886 q 1094 590 1094 717 l 1094 590 q 1092 531 1094 561 q 1083 469 1089 500 l 1083 469 q 984 204 1057 313 q 793 40 911 96 q 513 -17 675 -17 z m 525 178 l 525 178 q 638 197 588 178 q 724 250 688 215 q 785 335 761 285 q 821 449 810 385 l 821 449 q 830 503 826 481 q 835 540 833 525 q 838 564 838 554 q 839 583 839 574 l 839 583 q 816 687 839 643 q 748 753 793 731 q 636 776 703 776 l 636 776 q 525 758 575 776 q 438 705 475 740 q 377 619 401 669 q 342 507 353 569 l 342 507 q 333 451 336 474 q 328 415 329 429 q 326 390 326 400 q 325 371 325 381 l 325 371 q 347 268 325 311 q 414 201 369 225 q 525 178 458 178 z " }, P: { ha: 969, x_min: 39, x_max: 993, o: "m 289 0 l 39 0 l 208 954 l 699 954 q 861 921 796 954 q 960 828 926 888 q 993 689 993 768 l 993 689 q 967 540 993 607 q 892 424 940 474 q 775 349 843 375 q 624 322 707 322 l 624 322 l 346 322 l 289 0 z m 424 761 l 381 514 l 588 514 q 668 533 635 514 q 719 585 701 551 q 738 663 738 618 l 738 663 q 710 735 738 710 q 625 761 682 761 l 625 761 l 424 761 z " }, Q: { ha: 1125, x_min: 69, x_max: 1094, o: "m 956 -182 l 668 -182 l 532 -17 l 513 -17 q 273 26 372 -17 q 122 152 174 68 q 69 361 69 236 l 69 361 q 73 424 69 393 q 82 488 76 456 l 82 488 q 180 751 108 643 q 369 915 251 858 q 650 971 486 971 l 650 971 q 891 928 792 971 q 1042 801 990 886 q 1094 590 1094 717 l 1094 590 q 1092 531 1094 561 q 1083 469 1089 500 l 1083 469 q 979 197 1057 308 q 776 33 901 86 l 776 33 l 956 -182 z m 525 178 l 525 178 q 638 197 588 178 q 724 250 688 215 q 785 335 761 285 q 821 449 810 385 l 821 449 q 830 503 826 481 q 835 540 833 525 q 838 564 838 554 q 839 583 839 574 l 839 583 q 816 687 839 643 q 748 753 793 731 q 636 776 703 776 l 636 776 q 525 758 575 776 q 438 705 475 740 q 377 619 401 669 q 342 507 353 569 l 342 507 q 333 451 336 474 q 328 415 329 429 q 326 390 326 400 q 325 371 325 381 l 325 371 q 347 268 325 311 q 414 201 369 225 q 525 178 458 178 z " }, R: { ha: 1042, x_min: 40, x_max: 1035, o: "m 289 0 l 40 0 l 208 954 l 743 954 q 906 923 842 954 q 1003 838 971 892 q 1035 713 1035 783 l 1035 713 q 1008 563 1035 628 q 934 451 982 497 q 818 378 886 406 l 818 378 l 943 0 l 671 0 l 572 336 l 349 336 l 289 0 z m 424 765 l 382 521 l 629 521 q 701 540 668 521 q 756 593 735 558 q 776 672 776 628 l 776 672 q 751 740 776 715 q 682 765 726 765 l 682 765 l 424 765 z " }, S: { ha: 968, x_min: 33, x_max: 938, o: "m 458 -17 l 458 -17 q 292 -3 369 -17 q 156 38 214 10 q 66 115 99 67 q 33 232 33 163 l 33 232 q 36 274 33 251 q 44 315 39 297 l 44 315 l 285 315 q 279 293 282 306 q 276 271 276 281 l 276 271 q 297 215 276 236 q 356 183 318 193 q 443 174 393 174 l 443 174 q 517 179 483 174 q 577 196 551 185 q 617 226 603 207 q 632 274 632 246 l 632 274 q 613 318 632 300 q 560 349 593 336 q 487 373 528 363 q 401 396 446 383 l 401 396 q 301 428 351 410 q 211 474 251 446 q 147 544 171 501 q 122 647 122 586 l 122 647 q 158 795 122 735 q 256 895 194 856 q 394 953 317 935 q 553 971 471 971 q 705 957 635 971 q 827 914 775 943 q 908 840 879 885 q 938 733 938 796 l 938 733 q 936 708 938 722 q 931 668 935 693 l 931 668 l 693 668 q 696 686 696 679 l 696 686 l 696 697 q 661 763 696 738 q 558 788 626 788 l 558 788 q 465 776 504 788 q 404 744 425 764 q 383 696 383 724 l 383 696 q 397 660 383 675 q 433 633 410 644 q 488 611 457 621 q 557 593 519 601 l 557 593 q 670 562 611 579 q 781 515 729 544 q 863 441 832 486 q 894 329 894 396 l 894 329 q 858 174 894 239 q 760 66 822 108 q 621 3 699 24 q 458 -17 543 -17 z " }, T: { ha: 938, x_min: 103, x_max: 1007, o: "m 529 0 l 279 0 l 413 750 l 103 750 l 139 954 l 1007 954 l 971 750 l 661 750 l 529 0 z " }, U: { ha: 1088, x_min: 96, x_max: 1090, o: "m 496 -17 l 496 -17 q 201 60 307 -17 q 96 290 96 138 l 96 290 q 98 333 96 311 q 104 379 100 356 l 104 379 l 206 954 l 454 954 l 353 376 q 349 351 351 365 q 347 325 347 338 l 347 325 q 388 217 347 256 q 510 178 428 178 l 510 178 q 663 231 604 178 q 739 375 722 283 l 739 375 l 842 954 l 1090 954 l 986 363 q 900 151 964 236 q 735 25 836 67 q 496 -17 633 -17 z " }, V: { ha: 1013, x_min: 124, x_max: 1097, o: "m 588 0 l 299 0 l 124 954 l 381 954 l 454 465 q 464 397 458 435 q 474 325 469 360 q 482 264 479 290 l 482 264 l 490 264 q 524 333 506 296 q 560 406 542 369 q 592 471 578 442 l 592 471 l 833 954 l 1097 954 l 588 0 z " }, W: { ha: 1360, x_min: 115, x_max: 1454, o: "m 461 0 l 182 0 l 115 954 l 358 954 l 388 453 q 389 411 389 435 q 390 364 389 388 q 392 318 392 340 l 392 318 l 397 318 q 414 365 406 340 q 431 412 422 389 q 446 453 439 435 l 446 453 l 643 954 l 914 954 l 939 453 q 942 411 940 435 l 942 411 l 943 364 q 943 318 943 340 l 943 318 l 949 318 q 965 363 957 339 l 965 363 l 982 410 q 999 453 990 433 l 999 453 l 1200 954 l 1454 954 l 1043 0 l 764 0 l 735 528 q 733 574 733 550 q 731 622 732 597 q 729 665 731 646 l 729 665 l 724 665 q 708 620 717 644 q 690 572 699 596 q 674 528 682 549 l 674 528 l 461 0 z " }, X: { ha: 1022, x_min: -56, x_max: 1085, o: "m 243 0 l -56 0 l 389 506 l 146 954 l 432 954 l 560 682 l 565 682 l 790 954 l 1085 954 l 682 499 l 949 0 l 664 0 l 515 318 l 508 318 l 243 0 z " }, Y: { ha: 1017, x_min: 117, x_max: 1110, o: "m 571 0 l 322 0 l 389 378 l 117 954 l 385 954 l 544 596 l 551 596 l 831 954 l 1110 954 l 638 378 l 571 0 z " }, Z: { ha: 947, x_min: -25, x_max: 994, o: "m 838 0 l -25 0 l -7 100 l 567 760 l 143 760 l 178 954 l 994 954 l 978 854 l 401 194 l 872 194 l 838 0 z " }, a: { ha: 875, x_min: 33, x_max: 849, o: "m 292 -17 l 292 -17 q 154 15 213 -17 q 65 107 96 46 q 33 257 33 168 l 33 257 q 36 315 33 285 q 44 378 39 344 l 44 378 q 115 586 67 504 q 233 708 163 668 q 393 749 304 749 l 393 749 q 480 738 440 749 q 550 703 519 726 q 601 643 581 681 l 601 643 l 611 643 l 665 732 l 849 732 l 815 553 q 797 451 807 503 q 779 354 788 400 q 764 271 771 308 q 753 210 757 233 q 750 179 750 186 l 750 179 q 760 151 750 160 q 788 142 771 142 l 788 142 l 831 142 l 807 8 q 751 -9 783 -1 q 685 -17 719 -17 l 685 -17 q 612 -5 643 -17 q 561 32 581 7 l 561 32 q 545 60 551 43 q 536 94 539 76 l 536 94 l 526 94 q 421 12 482 40 q 292 -17 360 -17 z m 381 161 l 381 161 q 444 175 415 161 q 496 214 474 189 q 533 274 518 239 q 556 350 549 308 l 556 350 q 563 395 561 378 q 566 424 565 413 q 567 444 567 436 l 567 444 q 555 512 567 483 q 518 556 543 540 q 453 571 493 571 l 453 571 q 367 551 401 571 q 311 490 332 531 q 279 390 290 449 l 279 390 q 269 333 272 354 q 265 299 265 313 q 264 278 264 286 l 264 278 q 291 191 264 221 q 381 161 318 161 z " }, b: { ha: 879, x_min: 24, x_max: 840, o: "m 474 -17 l 474 -17 q 339 13 397 -17 q 253 101 281 42 l 253 101 l 243 101 l 208 0 l 24 0 l 199 1006 l 426 1006 l 365 657 l 375 657 q 434 708 401 688 q 505 738 467 728 q 585 749 543 749 l 585 749 q 721 718 664 749 q 809 626 778 688 q 840 475 840 565 l 840 475 q 838 418 840 449 q 828 354 835 388 l 828 354 q 758 147 807 229 q 636 24 708 64 q 474 -17 564 -17 z m 419 161 l 419 161 q 506 181 471 161 q 561 242 540 201 q 594 342 582 283 l 594 342 q 604 399 601 378 q 608 433 607 419 q 610 454 610 446 l 610 454 q 598 519 610 493 q 560 558 586 544 q 492 571 533 571 l 492 571 q 426 557 456 571 q 376 518 397 543 q 338 458 354 493 q 315 382 322 424 l 315 382 q 308 338 311 356 q 305 308 306 319 q 304 288 304 297 l 304 288 q 316 220 304 249 q 353 176 328 192 q 419 161 378 161 z " }, c: { ha: 850, x_min: 44, x_max: 814, o: "m 389 -17 l 389 -17 q 201 15 278 -17 q 85 113 125 47 q 44 278 44 179 l 44 278 q 48 347 44 313 q 58 411 51 381 l 58 411 q 109 552 74 490 q 198 658 144 614 q 322 726 251 703 q 479 749 393 749 l 479 749 q 654 721 579 749 q 772 640 729 693 q 814 510 814 588 l 814 510 q 813 478 814 494 q 808 446 811 463 l 808 446 l 585 446 q 587 464 586 456 q 588 481 588 472 l 588 481 q 575 537 588 514 q 536 572 563 560 q 469 585 510 585 l 469 585 q 380 561 417 585 q 321 495 343 538 q 289 394 299 453 l 289 394 q 278 336 282 358 q 274 301 275 314 q 272 278 272 288 l 272 278 q 286 206 272 235 q 328 163 300 178 q 400 149 357 149 l 400 149 q 481 165 447 149 q 537 212 515 181 q 567 288 558 243 l 567 288 l 781 288 q 710 117 764 185 q 573 16 656 49 q 389 -17 490 -17 z " }, d: { ha: 879, x_min: 40, x_max: 904, o: "m 299 -17 l 299 -17 q 160 15 218 -17 q 71 110 101 47 q 40 260 40 172 l 40 260 q 43 317 40 288 q 51 381 46 347 l 51 381 q 100 543 68 474 q 176 658 132 613 q 277 726 221 704 q 401 749 333 749 l 401 749 q 488 738 449 749 q 558 708 528 728 q 607 657 589 688 l 607 657 l 615 657 l 676 1006 l 904 1006 l 728 0 l 542 0 l 542 101 l 532 101 q 427 13 488 42 q 299 -17 367 -17 z m 386 161 l 386 161 q 473 184 438 161 q 531 250 508 207 q 563 350 553 293 l 563 350 q 570 394 568 376 q 574 423 572 411 q 575 444 575 435 l 575 444 q 563 512 575 483 q 525 556 550 540 q 460 571 500 571 l 460 571 q 374 551 408 571 q 318 491 339 531 q 288 393 297 451 l 288 393 q 276 335 281 357 q 272 299 272 313 q 271 276 271 286 l 271 276 q 298 190 271 219 q 386 161 325 161 z " }, e: { ha: 860, x_min: 44, x_max: 815, o: "m 403 -17 l 403 -17 q 208 15 288 -17 q 86 111 128 46 q 44 276 44 176 l 44 276 q 47 344 44 311 q 57 408 50 376 l 57 408 q 131 590 76 514 q 273 707 186 665 q 475 749 360 749 l 475 749 q 662 719 586 749 q 776 628 738 689 q 815 471 815 567 l 815 471 q 812 409 815 444 q 797 321 808 374 l 797 321 l 272 321 q 268 294 269 308 q 267 267 267 279 l 267 267 q 281 198 267 226 q 325 156 294 169 q 403 142 356 142 l 403 142 q 467 149 439 142 q 514 173 494 157 q 547 211 533 189 q 564 261 560 233 l 564 261 l 786 261 q 744 142 775 194 q 663 55 713 90 q 549 1 614 19 q 403 -17 483 -17 z m 294 447 l 294 447 l 586 447 q 590 467 589 457 q 590 485 590 478 l 590 485 q 577 544 590 521 q 538 580 564 568 q 478 592 513 592 l 478 592 q 393 574 429 592 q 333 525 357 557 q 294 447 310 493 z " }, f: { ha: 489, x_min: -118, x_max: 608, o: "m 25 -274 l 25 -274 q -23 -271 4 -274 q -75 -262 -50 -268 q -118 -251 -100 -257 l -118 -251 l -92 -107 l -21 -107 q 37 -87 17 -107 q 63 -31 57 -68 l 63 -31 l 167 567 l 64 567 l 93 732 l 197 732 l 207 792 q 253 920 222 869 q 338 995 285 971 q 469 1019 392 1019 l 469 1019 q 519 1017 493 1019 q 569 1008 546 1014 q 608 997 593 1003 l 608 997 l 583 854 l 517 854 q 459 838 478 854 q 433 786 440 821 l 433 786 l 425 732 l 561 732 l 532 567 l 394 567 l 286 -50 q 244 -170 274 -119 q 162 -247 215 -221 q 25 -274 108 -274 z " }, g: { ha: 878, x_min: 6, x_max: 854, o: "m 314 -274 l 314 -274 q 144 -252 213 -274 q 40 -191 75 -231 q 6 -96 6 -151 l 6 -96 q 7 -68 6 -86 q 15 -28 8 -50 l 15 -28 l 236 -28 q 234 -36 235 -32 q 233 -44 233 -40 l 233 -44 q 245 -77 233 -64 q 279 -97 257 -90 q 333 -104 301 -104 l 333 -104 q 424 -85 388 -104 q 480 -32 460 -67 q 508 49 500 3 l 508 49 q 515 87 511 68 q 521 122 518 106 l 521 122 l 511 122 q 448 71 482 92 q 375 40 414 50 q 293 31 336 31 l 293 31 q 160 60 217 31 q 74 148 104 89 q 44 296 44 207 l 44 296 q 47 346 44 319 q 54 401 49 372 l 54 401 q 179 664 86 579 q 408 749 272 749 l 408 749 q 538 719 483 749 q 621 631 593 689 l 621 631 l 631 631 l 668 732 l 854 732 l 738 68 q 660 -129 715 -54 q 518 -239 604 -204 q 314 -274 432 -274 z m 393 206 l 393 206 q 458 219 429 206 q 510 256 488 232 q 546 310 532 279 q 567 379 560 342 l 567 379 q 572 413 569 400 q 574 435 574 425 q 575 453 575 444 l 575 453 q 563 515 575 489 q 524 556 550 542 q 458 571 499 571 l 458 571 q 374 551 410 571 q 317 495 339 532 q 288 406 296 458 l 288 406 q 280 363 282 379 q 277 335 278 346 q 276 317 276 325 l 276 317 q 288 258 276 282 q 325 219 299 233 q 393 206 351 206 z " }, h: { ha: 874, x_min: 24, x_max: 818, o: "m 250 0 l 24 0 l 199 1006 l 426 1006 l 365 653 l 374 653 q 438 703 401 682 q 517 737 475 725 q 601 749 560 749 l 601 749 q 717 727 669 749 q 792 663 765 706 q 818 556 818 621 l 818 556 q 815 512 818 535 q 808 464 813 489 l 808 464 l 726 0 l 499 0 l 576 440 q 579 464 578 453 q 581 485 581 475 l 581 485 q 571 533 581 514 q 542 560 561 551 q 494 569 522 569 l 494 569 q 435 559 464 569 q 383 528 406 549 q 345 478 361 507 q 322 413 329 449 l 322 413 l 250 0 z " }, i: { ha: 400, x_min: 22, x_max: 425, o: "m 394 831 l 167 831 l 197 1006 l 425 1006 l 394 831 z m 250 0 l 22 0 l 151 732 l 379 732 l 250 0 z " }, j: { ha: 397, x_min: -164, x_max: 422, o: "m 392 831 l 164 831 l 194 1006 l 422 1006 l 392 831 z m -8 -274 l -8 -274 q -60 -271 -31 -274 q -118 -262 -90 -268 q -164 -251 -146 -257 l -164 -251 l -139 -107 l -68 -107 q -11 -87 -31 -107 q 15 -31 8 -68 l 15 -31 l 150 732 l 378 732 l 239 -51 q 199 -171 226 -121 q 122 -247 172 -221 q -8 -274 72 -274 z " }, k: { ha: 847, x_min: 22, x_max: 892, o: "m 250 0 l 22 0 l 199 1007 l 426 1007 l 326 438 l 626 732 l 892 732 l 581 443 l 772 0 l 526 0 l 410 294 l 282 186 l 250 0 z " }, l: { ha: 400, x_min: 22, x_max: 426, o: "m 250 0 l 22 0 l 199 1006 l 426 1006 l 250 0 z " }, m: { ha: 1301, x_min: 22, x_max: 1246, o: "m 250 0 l 22 0 l 151 732 l 338 732 l 338 628 l 347 628 q 415 692 376 665 q 497 734 453 719 q 588 749 542 749 l 588 749 q 717 719 667 749 q 785 628 767 689 l 785 628 l 794 628 q 864 692 825 665 q 947 734 903 719 q 1038 749 990 749 l 1038 749 q 1192 702 1138 749 q 1246 558 1246 656 l 1246 558 q 1243 515 1246 538 q 1236 469 1240 493 l 1236 469 l 1153 0 l 925 0 l 1004 443 q 1007 467 1006 456 q 1008 488 1008 478 l 1008 488 q 999 533 1008 515 q 972 560 989 551 q 928 569 954 569 l 928 569 q 858 549 890 569 q 805 495 826 529 q 775 417 783 461 l 775 417 l 701 0 l 474 0 l 553 443 q 556 467 554 456 q 557 488 557 479 l 557 488 q 547 533 557 515 q 520 560 538 551 q 476 569 503 569 l 476 569 q 407 549 439 569 q 353 495 375 529 q 324 417 332 461 l 324 417 l 250 0 z " }, n: { ha: 874, x_min: 22, x_max: 818, o: "m 250 0 l 22 0 l 151 732 l 338 732 l 338 626 l 347 626 q 418 692 378 665 q 505 734 458 719 q 599 749 551 749 l 599 749 q 717 727 668 749 q 792 663 765 706 q 818 556 818 621 l 818 556 q 815 512 818 535 q 808 464 813 489 l 808 464 l 726 0 l 499 0 l 576 440 q 580 465 578 453 q 582 486 582 476 l 582 486 q 572 533 582 514 q 542 560 561 551 q 494 569 522 569 l 494 569 q 435 559 464 569 q 383 528 406 549 q 345 478 361 507 q 324 413 329 449 l 324 413 l 250 0 z " }, o: { ha: 882, x_min: 42, x_max: 840, o: "m 386 -17 l 386 -17 q 201 15 278 -17 q 83 113 124 47 q 42 276 42 178 l 42 276 q 44 333 42 304 q 53 389 47 361 l 53 389 q 132 591 74 511 q 282 710 190 671 q 493 749 374 749 l 493 749 q 681 717 604 749 q 799 619 758 685 q 840 454 840 554 l 840 454 q 826 335 840 389 q 783 236 811 281 l 783 236 q 694 94 750 150 q 563 10 639 38 q 386 -17 486 -17 z m 403 149 l 403 149 q 498 171 460 149 q 560 235 536 193 q 594 340 583 278 l 594 340 q 605 399 601 378 q 609 433 608 421 q 610 456 610 446 l 610 456 q 596 526 610 497 q 553 569 582 554 q 478 583 525 583 l 478 583 q 383 561 421 583 q 321 497 344 539 q 286 392 297 454 l 286 392 q 276 332 279 354 q 271 298 272 310 q 269 276 269 286 l 269 276 q 283 206 269 235 q 327 163 297 178 q 403 149 357 149 z " }, p: { ha: 879, x_min: -22, x_max: 839, o: "m 204 -258 l -22 -258 l 151 732 l 336 732 l 339 631 l 349 631 q 453 721 394 693 q 579 749 513 749 l 579 749 q 720 718 663 749 q 808 626 778 688 q 839 472 839 564 l 839 472 q 836 415 839 446 q 828 351 833 385 l 828 351 q 757 146 806 228 q 638 24 708 64 q 478 -17 567 -17 l 478 -17 q 391 -7 431 -17 q 322 24 351 3 q 272 75 292 44 l 272 75 l 264 75 l 204 -258 z m 419 161 l 419 161 q 506 181 472 161 q 561 242 540 201 q 593 339 582 282 l 593 339 q 603 397 600 375 q 608 433 607 419 q 608 456 608 446 l 608 456 q 597 519 608 494 q 559 558 585 544 q 492 571 533 571 l 492 571 q 407 548 443 571 q 349 483 371 525 q 317 383 326 440 l 317 383 q 308 338 311 356 q 305 308 306 319 q 304 288 304 297 l 304 288 q 316 220 304 249 q 353 176 328 192 q 419 161 379 161 z " }, q: { ha: 879, x_min: 39, x_max: 856, o: "m 682 -258 l 454 -258 l 513 75 l 503 75 q 444 25 476 46 q 373 -6 411 4 q 294 -17 335 -17 l 294 -17 q 158 14 215 -17 q 69 106 100 44 q 39 257 39 167 l 39 257 q 42 315 39 285 q 51 378 46 344 l 51 378 q 122 586 74 504 q 243 708 171 668 q 406 749 315 749 l 406 749 q 539 719 482 749 q 622 631 596 689 l 622 631 l 632 631 l 669 732 l 856 732 l 682 -258 z m 388 161 l 388 161 q 452 175 424 161 q 503 214 481 189 q 540 274 525 239 q 563 350 556 308 l 563 350 q 570 395 568 378 q 573 424 572 413 q 574 444 574 436 l 574 444 q 562 512 574 483 q 525 556 550 540 q 460 571 500 571 l 460 571 q 374 551 408 571 q 318 490 339 531 q 286 390 297 449 l 286 390 q 276 333 279 354 q 271 299 272 313 q 269 278 269 286 l 269 278 q 297 191 269 221 q 388 161 325 161 z " }, r: { ha: 565, x_min: 22, x_max: 621, o: "m 250 0 l 22 0 l 151 732 l 336 732 l 336 619 l 346 619 q 397 687 368 657 q 463 733 426 717 q 544 750 500 750 l 544 750 q 591 745 571 750 q 621 735 611 740 l 621 735 l 586 536 l 514 536 q 436 524 471 536 q 376 488 401 511 q 335 428 351 464 q 311 347 318 393 l 311 347 l 250 0 z " }, s: { ha: 804, x_min: 18, x_max: 765, o: "m 350 -17 l 350 -17 q 220 -4 281 -17 q 115 33 160 8 q 44 94 69 57 q 18 179 18 131 l 18 179 q 21 209 18 193 q 26 235 24 225 l 26 235 l 242 235 q 239 220 240 228 q 238 208 238 213 l 238 208 q 253 166 238 183 q 298 141 269 149 q 360 133 326 133 l 360 133 q 407 137 382 133 q 453 149 432 140 q 488 170 475 157 q 500 204 500 183 l 500 204 q 487 236 500 224 q 451 258 474 249 q 398 275 428 268 q 335 290 368 282 l 335 290 q 248 315 292 301 q 168 349 204 328 q 110 403 132 371 q 88 486 88 436 l 88 486 q 116 604 88 554 q 195 686 144 654 q 313 734 246 718 q 456 750 379 750 l 456 750 q 572 739 517 750 q 672 706 628 728 q 740 650 715 683 q 765 572 765 617 l 765 572 q 762 538 765 554 q 757 515 758 522 l 757 515 l 543 515 q 545 527 544 522 q 546 535 546 532 l 546 535 q 533 571 546 557 q 496 592 519 585 q 439 599 472 599 l 439 599 q 393 594 415 599 q 353 583 371 590 q 326 563 336 575 q 317 536 317 551 l 317 536 q 335 502 317 515 q 385 481 354 489 q 451 463 417 472 l 451 463 q 544 440 496 451 q 635 407 593 428 q 704 351 678 386 q 731 260 731 315 l 731 260 q 701 129 731 182 q 618 44 671 76 q 497 -2 565 13 q 350 -17 428 -17 z " }, t: { ha: 535, x_min: 69, x_max: 564, o: "m 283 -17 l 283 -17 q 178 0 219 -17 q 115 49 136 17 q 94 131 94 82 l 94 131 q 97 167 94 144 q 106 228 100 190 l 106 228 l 165 567 l 69 567 l 97 732 l 201 732 l 286 946 l 458 946 l 421 732 l 564 732 l 535 567 l 392 567 l 336 251 q 333 224 335 239 q 331 201 331 210 l 331 201 q 344 163 331 176 q 389 149 357 149 l 389 149 l 461 149 l 436 7 q 389 -5 417 1 q 333 -14 361 -11 q 283 -17 306 -17 z " }, u: { ha: 874, x_min: 54, x_max: 850, o: "m 272 -18 l 272 -18 q 155 3 204 -18 q 80 67 106 25 q 54 175 54 110 l 54 175 q 57 220 54 197 q 64 268 60 243 l 64 268 l 144 732 l 374 732 l 296 290 q 292 267 293 278 q 290 246 290 256 l 290 246 q 301 198 290 217 q 331 170 311 179 q 378 161 350 161 l 378 161 q 437 172 408 161 q 488 204 465 183 q 526 254 510 225 q 549 318 542 283 l 549 318 l 622 732 l 850 732 l 721 -1 l 535 -1 l 535 104 l 525 104 q 454 39 494 67 q 368 -3 414 11 q 272 -18 322 -18 z " }, v: { ha: 797, x_min: 69, x_max: 858, o: "m 453 0 l 213 0 l 69 732 l 301 732 l 346 453 q 355 391 350 426 q 365 315 360 356 q 375 232 371 274 l 375 232 l 383 232 q 417 313 400 274 q 451 388 435 351 q 482 453 468 424 l 482 453 l 622 732 l 858 732 l 453 0 z " }, w: { ha: 1193, x_min: 67, x_max: 1256, o: "m 410 0 l 182 0 l 67 732 l 300 732 l 322 458 q 327 393 325 431 q 332 318 329 356 q 336 253 335 281 l 336 253 l 344 253 q 372 322 356 283 q 403 397 388 361 q 428 457 418 433 l 428 457 l 546 732 l 779 732 l 800 456 q 804 399 801 436 q 810 324 807 363 q 815 253 813 285 l 815 253 l 822 253 q 849 318 833 281 q 879 392 864 356 q 906 456 894 429 l 906 456 l 1026 732 l 1256 732 l 881 0 l 653 0 l 628 306 q 624 358 626 329 q 620 416 622 388 q 617 465 618 444 l 617 465 l 611 465 q 592 417 603 446 q 568 360 581 389 q 544 307 556 332 l 544 307 l 410 0 z " }, x: { ha: 850, x_min: -56, x_max: 888, o: "m 206 0 l -56 0 l 292 382 l 97 732 l 351 732 l 453 524 l 460 524 l 633 732 l 888 732 l 563 378 l 774 0 l 521 0 l 411 232 l 404 232 l 206 0 z " }, y: { ha: 797, x_min: -46, x_max: 858, o: "m 97 -274 l 97 -274 q 7 -266 44 -274 q -46 -253 -31 -258 l -46 -253 l -21 -107 l 75 -107 q 145 -92 115 -107 q 195 -52 175 -76 q 229 0 215 -28 l 229 0 l 68 732 l 301 732 l 353 418 q 363 351 358 388 q 373 281 368 315 q 381 215 378 246 l 381 215 l 390 215 q 410 265 400 239 q 432 316 421 290 q 453 365 443 342 q 474 410 464 389 l 474 410 l 624 732 l 858 732 l 488 29 q 415 -90 454 -35 q 330 -186 376 -144 q 226 -251 283 -228 q 97 -274 168 -274 z " }, z: { ha: 743, x_min: -32, x_max: 761, o: "m 646 0 l -32 0 l -15 89 l 394 567 l 89 567 l 118 732 l 761 732 l 746 646 l 333 165 l 675 165 l 646 0 z " }, ".": { ha: 442, x_min: 36, x_max: 318, o: "m 276 0 l 36 0 l 78 232 l 318 232 l 276 0 z " }, ",": { ha: 442, x_min: -14, x_max: 315, o: "m -14 -249 l -14 -249 l 3 -151 q 70 -126 39 -147 q 124 -72 101 -106 q 151 0 146 -39 l 151 0 l 35 0 l 76 232 l 315 232 l 279 25 q 240 -93 268 -43 q 172 -176 213 -143 q 85 -226 132 -208 q -14 -249 38 -244 z " }, "'": { ha: 365, x_min: 149, x_max: 389, o: "m 268 558 l 164 558 l 149 750 l 185 954 l 389 954 l 353 750 l 268 558 z " }, "\u2019": { ha: 388, x_min: 100, x_max: 407, o: "m 100 496 l 100 496 l 117 585 q 178 610 149 589 q 229 667 208 632 q 257 742 250 701 l 257 742 l 149 742 l 186 954 l 407 954 l 374 764 q 317 619 358 678 q 219 531 276 561 q 100 496 163 501 z " }, "!": { ha: 436, x_min: 46, x_max: 443, o: "m 274 300 l 138 300 l 203 954 l 443 954 l 274 300 z m 261 0 l 46 0 l 82 207 l 299 207 l 261 0 z " }, "?": { ha: 850, x_min: 124, x_max: 836, o: "m 518 307 l 317 307 l 328 375 q 356 449 335 417 q 408 506 378 481 q 469 556 438 532 q 527 603 500 579 q 572 653 554 626 q 589 714 589 679 l 589 714 q 580 754 589 735 q 549 786 571 774 q 490 799 528 799 l 490 799 q 431 788 457 799 q 388 759 406 778 q 358 717 369 740 q 343 668 347 693 l 343 668 q 341 649 342 658 q 340 632 340 640 l 340 632 l 124 632 q 144 747 124 694 q 200 842 164 800 q 285 913 236 883 q 395 956 335 942 q 522 971 456 971 l 522 971 q 652 954 594 971 q 751 907 710 938 q 815 833 793 876 q 836 733 836 789 l 836 733 q 815 630 836 675 q 760 551 794 585 q 686 490 725 517 q 612 440 647 463 q 552 394 576 417 q 524 343 528 371 l 524 343 l 518 307 z m 483 0 l 254 0 l 293 221 l 522 221 l 483 0 z " }, $: { ha: 803, x_min: 38, x_max: 785, o: "m 360 -82 l 268 -82 l 300 97 q 240 107 268 101 l 240 107 q 134 144 179 119 q 63 206 89 168 q 38 290 38 243 l 38 290 q 40 320 38 304 q 46 346 43 336 l 46 346 l 261 346 q 258 331 260 339 q 257 319 257 324 l 257 319 q 273 277 257 294 q 318 253 289 260 l 318 253 q 328 250 322 251 l 328 250 l 354 401 q 268 426 311 413 l 268 426 q 188 460 224 439 q 129 515 151 482 q 107 597 107 549 l 107 597 q 135 715 107 665 q 215 797 164 765 q 332 846 265 829 l 332 846 q 435 860 381 857 l 435 860 l 465 1029 l 557 1029 l 526 860 q 592 850 560 857 l 592 850 q 691 817 647 839 q 760 761 735 794 q 785 683 785 728 l 785 683 q 781 650 785 667 q 776 626 778 633 l 776 626 l 563 626 q 565 638 564 633 q 565 646 565 643 l 565 646 q 552 682 565 668 q 515 703 539 696 l 515 703 q 500 707 508 706 l 500 707 l 476 572 q 564 551 518 563 l 564 551 q 655 518 613 539 q 724 462 697 497 q 750 371 750 426 l 750 371 q 720 240 750 293 q 638 156 690 188 q 517 110 585 124 l 517 110 q 392 94 457 96 l 392 94 l 360 -82 z m 442 381 l 418 247 q 426 249 422 249 l 426 249 q 473 260 451 251 q 507 281 494 268 q 519 315 519 294 l 519 315 q 506 347 519 335 q 471 369 493 360 l 471 369 q 442 381 457 375 l 442 381 z m 389 597 l 389 597 l 408 704 q 374 694 389 700 l 374 694 q 346 674 356 686 q 336 647 336 663 l 336 647 q 356 614 336 626 l 356 614 q 389 597 368 604 z " }, "%": { ha: 1367, x_min: 151, x_max: 1257, o: "m 376 0 l 232 0 l 1035 954 l 1179 954 l 376 0 z m 368 472 l 368 472 q 206 519 260 472 q 151 656 151 565 l 151 656 q 153 690 151 672 q 158 726 154 708 l 158 726 q 207 861 172 807 q 297 943 242 915 q 433 971 353 971 l 433 971 q 594 925 540 971 q 647 788 647 879 l 647 788 q 646 753 647 771 q 642 717 644 736 l 642 717 q 594 583 628 638 q 504 501 560 529 q 368 472 449 472 z m 975 -17 l 975 -17 q 814 29 868 -17 q 760 165 760 75 l 760 165 q 762 202 760 183 q 767 240 764 221 l 767 240 q 815 373 782 319 q 905 454 849 426 q 1040 482 961 482 l 1040 482 q 1203 436 1149 482 q 1257 297 1257 390 l 1257 297 q 1255 263 1257 282 q 1250 225 1253 244 l 1250 225 q 1201 92 1235 146 q 1112 11 1168 39 q 975 -17 1056 -17 z m 375 576 l 375 576 q 449 613 425 576 q 483 703 472 650 l 483 703 q 490 741 488 726 q 493 766 492 756 q 494 785 494 776 l 494 785 q 478 845 494 824 q 424 867 463 867 l 424 867 q 351 831 375 867 q 315 740 326 794 l 315 740 q 310 703 313 718 q 306 678 307 689 q 304 660 304 668 l 304 660 q 321 599 304 621 q 375 576 338 576 z m 983 88 l 983 88 q 1060 126 1038 88 q 1097 239 1083 165 l 1097 239 q 1101 261 1100 251 q 1102 280 1101 271 q 1103 296 1103 289 l 1103 296 q 1087 356 1103 335 q 1033 378 1071 378 l 1033 378 q 956 338 979 378 q 919 226 933 299 l 919 226 q 916 205 917 215 q 915 187 915 194 q 914 171 914 179 l 914 171 q 930 110 914 132 q 983 88 946 88 z " }, "&": { ha: 1133, x_min: 69, x_max: 1143, o: "m 476 -17 l 476 -17 q 253 14 343 -17 q 116 99 163 44 q 69 226 69 154 l 69 226 q 99 349 69 296 q 179 440 129 403 q 292 493 229 478 l 292 493 l 293 499 q 208 565 242 521 q 175 671 175 608 l 175 671 q 211 801 175 746 q 310 895 247 857 q 454 952 374 933 q 624 971 535 971 l 624 971 q 831 942 744 971 q 965 862 918 913 q 1011 744 1011 811 l 1011 744 q 1009 718 1011 735 q 1001 675 1007 701 l 1001 675 l 789 675 q 793 700 793 692 l 793 700 l 793 711 q 774 759 793 739 q 717 790 754 779 q 621 801 679 801 l 621 801 q 528 790 568 801 q 460 758 488 778 q 419 710 433 738 q 404 651 404 683 l 404 651 q 419 602 404 622 q 459 573 433 582 q 515 564 485 564 l 515 564 l 636 564 l 608 407 l 472 407 q 413 399 442 407 q 360 373 383 390 q 324 328 338 356 q 311 263 311 301 l 311 263 q 330 203 311 228 q 388 166 349 179 q 488 153 426 153 l 488 153 q 613 170 564 153 q 689 219 663 188 q 722 290 715 250 l 722 290 l 769 564 l 1143 564 l 1115 407 l 956 407 l 935 294 q 864 130 918 200 q 714 22 810 60 q 476 -17 618 -17 z " }, "-": { ha: 463, x_min: 42, x_max: 425, o: "m 392 283 l 42 283 l 75 474 l 425 474 l 392 283 z " }, ":": { ha: 464, x_min: 49, x_max: 418, o: "m 376 500 l 136 500 l 178 733 l 418 733 l 376 500 z m 289 0 l 49 0 l 90 232 l 331 232 l 289 0 z " }, "|": { ha: 368, x_min: 104, x_max: 264, o: "m 264 -281 l 104 -281 l 104 1007 l 264 1007 l 264 -281 z " } }, familyName: "Archivo ExtraBold Italic", ascender: 1219, descender: -292, underlinePosition: -148, underlineThickness: 44, boundingBox: { xMin: -268, xMax: 1462, yMin: -405, yMax: 1100 }, resolution: 1e3 };

// src/world/text3d.ts
var DATA2 = { "500": archivo500_default, "800": archivo800_default, "800i": archivo800i_default };
var fonts = /* @__PURE__ */ new Map();
var fontOf = (k2) => {
  let f2 = fonts.get(k2);
  if (!f2) {
    f2 = new Font(DATA2[k2]);
    fonts.set(k2, f2);
  }
  return f2;
};
var geos = /* @__PURE__ */ new Map();
var geoOf = (str, font, size, depth, bevel) => {
  const key = `${font}|${size}|${depth}|${bevel}|${str}`;
  let e2 = geos.get(key);
  if (!e2) {
    const g2 = new TextGeometry(str, {
      font: fontOf(font),
      size,
      depth: Math.max(0.1, depth - 2 * bevel),
      curveSegments: 6,
      bevelEnabled: bevel > 0,
      bevelThickness: bevel,
      bevelSize: bevel * 0.8,
      bevelOffset: -bevel * 0.8,
      bevelSegments: 2
    });
    g2.translate(0, 0, bevel);
    g2.computeBoundingBox();
    const b2 = g2.boundingBox;
    e2 = { g: g2, w: Number.isFinite(b2.max.x) ? b2.max.x - Math.min(0, b2.min.x) : 0 };
    geos.set(key, e2);
  }
  return e2;
};
var textWidth = (str, font, size) => {
  const d2 = DATA2[font];
  let w2 = 0;
  for (const ch of str) w2 += (d2.glyphs[ch] ?? d2.glyphs["?"]).ha * size / d2.resolution;
  return w2;
};
var text3d = (str, o2) => {
  const depth = o2.depth ?? o2.size * 0.25, bevel = o2.bevel ?? Math.min(depth * 0.2, o2.size * 0.03);
  const e2 = geoOf(str, o2.font ?? "800", o2.size, depth, bevel);
  const m2 = new Mesh(e2.g, [o2.face, o2.side ?? o2.face]);
  m2.castShadow = true;
  m2.receiveShadow = true;
  const g2 = new Group();
  m2.position.x = o2.align === "left" ? 0 : -textWidth(str, o2.font ?? "800", o2.size) / 2;
  g2.add(m2);
  g2.userData.width = textWidth(str, o2.font ?? "800", o2.size);
  return g2;
};
var numeral3d = (o2) => {
  const font = o2.font ?? "800", depth = o2.depth ?? o2.size * 0.25, bevel = o2.bevel ?? Math.min(depth * 0.2, o2.size * 0.03);
  const group = new Group();
  const pool = [];
  const mats = [o2.face, o2.side ?? o2.face];
  const digitW = Math.max(...Array.from("0123456789", (c2) => textWidth(c2, font, o2.size)));
  const adv = (ch) => /\d/.test(ch) ? digitW : textWidth(ch, font, o2.size);
  let shown = "";
  const set = (str) => {
    if (str === shown) return;
    shown = str;
    const total = Array.from(str).reduce((s2, c2) => s2 + adv(c2), 0);
    let x2 = -total / 2, i2 = 0;
    for (const ch of str) {
      const a2 = adv(ch);
      if (ch !== " ") {
        let m2 = pool[i2];
        if (!m2) {
          m2 = new Mesh(void 0, mats);
          m2.castShadow = true;
          m2.receiveShadow = true;
          pool.push(m2);
          group.add(m2);
        }
        m2.geometry = geoOf(ch, font, o2.size, depth, bevel).g;
        m2.position.x = x2 + (/\d/.test(ch) ? (digitW - textWidth(ch, font, o2.size)) / 2 : 0);
        m2.visible = true;
        i2++;
      }
      x2 += a2;
    }
    for (; i2 < pool.length; i2++) pool[i2].visible = false;
    group.userData.width = total;
  };
  return { group, set };
};

// ../034-ohtani/node_modules/three/examples/jsm/geometries/RoundedBoxGeometry.js
var _tempNormal = new Vector3();
function getUv(faceDirVector, normal, uvAxis, projectionAxis, radius, sideLength) {
  const totArcLength = 2 * Math.PI * radius / 4;
  const centerLength = Math.max(sideLength - 2 * radius, 0);
  const halfArc = Math.PI / 4;
  _tempNormal.copy(normal);
  _tempNormal[projectionAxis] = 0;
  _tempNormal.normalize();
  const arcUvRatio = 0.5 * totArcLength / (totArcLength + centerLength);
  const arcAngleRatio = 1 - _tempNormal.angleTo(faceDirVector) / halfArc;
  if (Math.sign(_tempNormal[uvAxis]) === 1) {
    return arcAngleRatio * arcUvRatio;
  } else {
    const lenUv = centerLength / (totArcLength + centerLength);
    return lenUv + arcUvRatio + arcUvRatio * (1 - arcAngleRatio);
  }
}
var RoundedBoxGeometry = class _RoundedBoxGeometry extends BoxGeometry {
  /**
   * Constructs a new rounded box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [segments=2] - Number of segments that form the rounded corners.
   * @param {number} [radius=0.1] - The radius of the rounded corners.
   */
  constructor(width = 1, height = 1, depth = 1, segments = 2, radius = 0.1) {
    const totalSegments = segments * 2 + 1;
    radius = Math.min(width / 2, height / 2, depth / 2, radius);
    super(1, 1, 1, totalSegments, totalSegments, totalSegments);
    this.type = "RoundedBoxGeometry";
    this.parameters = {
      width,
      height,
      depth,
      segments,
      radius
    };
    if (totalSegments === 1) return;
    const geometry2 = this.toNonIndexed();
    this.index = null;
    this.attributes.position = geometry2.attributes.position;
    this.attributes.normal = geometry2.attributes.normal;
    this.attributes.uv = geometry2.attributes.uv;
    const position = new Vector3();
    const normal = new Vector3();
    const box = new Vector3(width, height, depth).divideScalar(2).subScalar(radius);
    const positions = this.attributes.position.array;
    const normals = this.attributes.normal.array;
    const uvs = this.attributes.uv.array;
    const faceTris = positions.length / 6;
    const faceDirVector = new Vector3();
    const halfSegmentSize = 0.5 / totalSegments;
    for (let i2 = 0, j2 = 0; i2 < positions.length; i2 += 3, j2 += 2) {
      position.fromArray(positions, i2);
      normal.copy(position);
      normal.x -= Math.sign(normal.x) * halfSegmentSize;
      normal.y -= Math.sign(normal.y) * halfSegmentSize;
      normal.z -= Math.sign(normal.z) * halfSegmentSize;
      normal.normalize();
      positions[i2 + 0] = box.x * Math.sign(position.x) + normal.x * radius;
      positions[i2 + 1] = box.y * Math.sign(position.y) + normal.y * radius;
      positions[i2 + 2] = box.z * Math.sign(position.z) + normal.z * radius;
      normals[i2 + 0] = normal.x;
      normals[i2 + 1] = normal.y;
      normals[i2 + 2] = normal.z;
      const side = Math.floor(i2 / faceTris);
      switch (side) {
        case 0:
          faceDirVector.set(1, 0, 0);
          uvs[j2 + 0] = getUv(faceDirVector, normal, "z", "y", radius, depth);
          uvs[j2 + 1] = 1 - getUv(faceDirVector, normal, "y", "z", radius, height);
          break;
        case 1:
          faceDirVector.set(-1, 0, 0);
          uvs[j2 + 0] = 1 - getUv(faceDirVector, normal, "z", "y", radius, depth);
          uvs[j2 + 1] = 1 - getUv(faceDirVector, normal, "y", "z", radius, height);
          break;
        case 2:
          faceDirVector.set(0, 1, 0);
          uvs[j2 + 0] = 1 - getUv(faceDirVector, normal, "x", "z", radius, width);
          uvs[j2 + 1] = getUv(faceDirVector, normal, "z", "x", radius, depth);
          break;
        case 3:
          faceDirVector.set(0, -1, 0);
          uvs[j2 + 0] = 1 - getUv(faceDirVector, normal, "x", "z", radius, width);
          uvs[j2 + 1] = 1 - getUv(faceDirVector, normal, "z", "x", radius, depth);
          break;
        case 4:
          faceDirVector.set(0, 0, 1);
          uvs[j2 + 0] = 1 - getUv(faceDirVector, normal, "x", "y", radius, width);
          uvs[j2 + 1] = 1 - getUv(faceDirVector, normal, "y", "x", radius, height);
          break;
        case 5:
          faceDirVector.set(0, 0, -1);
          uvs[j2 + 0] = getUv(faceDirVector, normal, "x", "y", radius, width);
          uvs[j2 + 1] = 1 - getUv(faceDirVector, normal, "y", "x", radius, height);
          break;
      }
    }
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @returns {RoundedBoxGeometry} A new instance.
   */
  static fromJSON(data) {
    return new _RoundedBoxGeometry(
      data.width,
      data.height,
      data.depth,
      data.segments,
      data.radius
    );
  }
};

// src/world/place.ts
var GLOW = 1.18;
var stdLights = (c2, o2 = {}) => {
  const s2 = o2.s ?? 1;
  return {
    amb: o2.amb ?? 0.2,
    key: { pos: [c2[0] - 900 * s2, c2[1] + 2300 * s2, c2[2] + 1500 * s2], at: [c2[0], c2[1] * 0.5, c2[2]], i: o2.key ?? 3.6, color: o2.color ?? "#FBF7F6", angle: 0.42, soft: 1 },
    rim: { pos: [c2[0] + 1300 * s2, c2[1] + 1100 * s2, c2[2] - 1500 * s2], at: c2, i: o2.rim ?? 3, color: "#F4F1F2", angle: 0.8, soft: 0.8 },
    aux: { pos: [c2[0] - 1700 * s2, c2[1] + 500 * s2, c2[2] - 700 * s2], at: c2, i: (o2.rim ?? 3) * 0.5, color: "#EEEAEA", angle: 0.8, soft: 0.8 },
    back: { pos: [c2[0], c2[1] + 900 * s2, c2[2] + 600], at: [c2[0], c2[1] + 500 * s2, BACKDROP_Z], i: o2.back ?? 3.2, color: "#F2EEEE", angle: 0.5, soft: 1 },
    focus: [c2[0], c2[2]],
    reach: o2.reach ?? 2600 * s2,
    reflect: 0.06
  };
};
var BACKDROP_Z = -2600;
var lightStageLights = (c2, o2 = {}) => ({
  amb: o2.amb ?? 0.95,
  key: { pos: [c2[0] - 700, c2[1] + 2600, c2[2] + 900], at: c2, i: o2.key ?? 1.1, color: "#FFFFFF", angle: 0.8, soft: 1 },
  aux: { pos: [c2[0] + 1500, c2[1] + 1500, c2[2] + 900], at: c2, i: 0.35, color: "#FFFFFF", angle: 0.9, soft: 1 },
  back: { pos: [c2[0], c2[1] + 1200, c2[2] + 600], at: [c2[0], c2[1] + 600, BACKDROP_Z], i: 0.4, color: "#FFFFFF", angle: 0.9, soft: 1 },
  focus: [c2[0], c2[2]],
  reach: 2600,
  reflect: 0
});

// src/world/kit.ts
var K2 = {
  white: "#f8f2f2",
  money: "#f6f2bd",
  red: "#f55048",
  amber: "#f6b050",
  gold: "#8a6f47",
  cream: "#f8e9c0",
  black: "#09090a",
  graphite: "#19191b",
  satin: "#9a9a9e",
  paper: "#e8e5de"
};
var C3 = (h2) => new Color(h2);
var MAT = {
  /** the matte-black body: broad soft gradients, a thin specular line on its bevels */
  black: () => new MeshPhysicalMaterial({ color: C3(K2.black), roughness: 0.42, metalness: 0.15, envMapIntensity: 0.9, clearcoat: 0.25, clearcoatRoughness: 0.45 }),
  graphite: () => new MeshPhysicalMaterial({ color: C3(K2.graphite), roughness: 0.5, metalness: 0.3, envMapIntensity: 0.8 }),
  /** edge metal: rails, hooks, rims */
  satin: () => new MeshPhysicalMaterial({ color: C3(K2.satin), roughness: 0.32, metalness: 1, envMapIntensity: 0.9 }),
  /** gold as a BODY (bars, coins): khaki-gold with pale cream highlights */
  gold: () => new MeshPhysicalMaterial({ color: C3(K2.gold), roughness: 0.34, metalness: 1, envMapIntensity: 1.25 }),
  /** paper: LIGHT scenes only (R5, R8) */
  paper: () => new MeshStandardMaterial({ color: C3(K2.paper), roughness: 0.92, metalness: 0 }),
  rubber: () => new MeshStandardMaterial({ color: C3("#09090a"), roughness: 0.85, metalness: 0 })
};
var lit = (color, k2 = GLOW) => {
  const m2 = new MeshBasicMaterial({ color: C3(color).multiplyScalar(k2), toneMapped: false });
  m2.userData.full = m2.color.clone();
  return m2;
};
var setLit = (m2, v2, dim = 0.07) => {
  m2.color.copy(m2.userData.full).multiplyScalar(dim + (1 - dim) * clamp01(v2));
};
var shadowed = (m2) => {
  m2.castShadow = true;
  m2.receiveShadow = true;
  return m2;
};
var rbox = (w2, h2, d2, r2, mat) => shadowed(new Mesh(new RoundedBoxGeometry(w2, h2, d2, 4, Math.min(r2, w2 / 2 - 0.01, h2 / 2 - 0.01, d2 / 2 - 0.01)), mat));
var block = (w2, h2, d2, r2, mat) => {
  const m2 = rbox(w2, h2, d2, r2, mat);
  m2.position.y = h2 / 2;
  return m2;
};
var wide = (g2, k2 = 1.14) => {
  g2.scale.x *= k2;
  return g2;
};
var countUp = (f2, a2, b2, from, to) => {
  if (f2 >= b2) return to;
  if (f2 <= a2) return from;
  const t2 = (f2 - a2) / (b2 - a2);
  return from + (to - from) * (1 - Math.pow(1 - t2, 2.6));
};
var short = (n2) => {
  const a2 = Math.abs(n2);
  if (a2 >= 1e9) return "$" + (a2 >= 1e10 ? Math.round(n2 / 1e9) : Math.round(n2 / 1e8) / 10) + "B";
  if (a2 >= 1e6) return "$" + (a2 >= 1e7 ? Math.round(n2 / 1e6) : Math.round(n2 / 1e5) / 10) + "M";
  return "$" + Math.round(n2).toLocaleString("en-US");
};
var counter = (o2) => {
  const face = lit(o2.color ?? K2.white);
  const side = new MeshStandardMaterial({ color: C3(o2.color ?? K2.white).multiplyScalar(0.22), roughness: 0.5, metalness: 0.4 });
  const n2 = numeral3d({ font: o2.font ?? "800", size: o2.size, depth: o2.depth ?? o2.size * 0.34, face, side });
  n2.group.scale.x = o2.wide ?? 1.14;
  return { group: n2.group, set: n2.set, face, side };
};
var litPlate = (lines, o2 = {}) => {
  const words = lines.join(" ").trim().split(/\s+/).length;
  if (words > 3 && !/^[\d$.,%×x= ]+$/.test(lines.join(""))) throw new Error(`litPlate: "${lines.join(" ")}" is ${words} words; in-scene text is at most three words or one figure with a unit (R8)`);
  const size = o2.size ?? 110, font = o2.font ?? "800", k2 = 1.14;
  const face = lit(o2.color ?? K2.white);
  const widths = lines.map((l2) => textWidth(l2, font, size) * k2);
  const w2 = o2.w ?? Math.max(...widths) + 2 * (o2.padX ?? size * 0.55);
  const lineH = size * 1.12, h2 = lines.length * lineH + 2 * (o2.padY ?? size * 0.42), d2 = o2.depth ?? Math.max(40, size * 0.5);
  const group = new Group();
  group.add(rbox(w2, h2, d2, Math.min(18, d2 * 0.3), o2.mat ?? MAT.black()));
  lines.forEach((l2, i2) => {
    const t2 = wide(text3d(l2, { font, size, depth: 4, bevel: 0, face }), k2);
    t2.position.set(0, ((lines.length - 1) / 2 - i2) * lineH - size * 0.345, d2 / 2 + 0.5);
    t2.traverse((n2) => {
      n2.castShadow = false;
    });
    group.add(t2);
  });
  return { group, face, w: w2, h: h2, d: d2, setLit: (v2) => setLit(face, v2) };
};
var ring = (o2 = {}) => {
  const R = o2.r ?? 900, wdt = (o2.w ?? 12) / R, dur = o2.dur ?? 28;
  const mat = new MeshBasicMaterial({ color: C3(o2.color ?? K2.white).multiplyScalar(1.4), toneMapped: false, transparent: true, opacity: 0, depthWrite: false, blending: AdditiveBlending, fog: false });
  const mesh = new Mesh(new RingGeometry(1 - wdt, 1, 96), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 1.5;
  mesh.renderOrder = 3;
  mesh.userData.isFloor = true;
  return {
    mesh,
    update: (f2, at) => {
      const t2 = (f2 - at) / dur;
      if (t2 <= 0 || t2 >= 1) {
        mesh.visible = false;
        return;
      }
      mesh.visible = true;
      const p2 = 1 - Math.pow(1 - t2, 2.2);
      mesh.scale.setScalar(Math.max(1, R * p2));
      mat.opacity = Math.pow(1 - t2, 1.4) * 0.9;
    }
  };
};
var dropIn = (f2, land, o2 = {}) => {
  const h2 = o2.h ?? 1400, T2 = o2.fall ?? 9, bh = h2 * (o2.bounce ?? 1) * 0.045;
  const t2 = f2 - land;
  if (t2 < -T2) return { y: h2, on: false, fast: false };
  if (t2 < 0) {
    const u3 = (t2 + T2) / T2;
    return { y: h2 * (1 - u3 * u3), on: true, fast: true };
  }
  const B1 = 9, B22 = 6;
  if (t2 < B1) {
    const u3 = t2 / B1;
    return { y: bh * 4 * u3 * (1 - u3), on: true, fast: t2 < 2 };
  }
  if (t2 < B1 + B22) {
    const u3 = (t2 - B1) / B22;
    return { y: bh * 0.28 * 4 * u3 * (1 - u3), on: true, fast: false };
  }
  return { y: 0, on: true, fast: false };
};

// src/world/timeline.ts
var LEAD = 5;
var enterOf = (id) => {
  const i2 = SCENE_ORDER.indexOf(id);
  if (i2 <= 0) return 0;
  const prev = SCENE_ORDER[i2 - 1];
  return Math.max(cueEnd(prev, SCENE_CUES[prev] - 1) + 2, cue(id, 0) - LEAD);
};

// src/world/places/cards.ts
var FOV = 30;
var DIST = 960 / Math.tan(FOV * Math.PI / 360);
var LEAD_SIZE = 84;
var LEAD_TRACK = 0.06;
var BIG_MAX = 250;
var BIG_W = 0.62 * 1080;
var CENTRE_Y = (0.5 - 0.52) * 1920;
var GAP = 190;
var cardWords = (id) => {
  const c2 = CUES.find((x2) => x2.scene === id);
  if (!c2?.w?.length) throw new Error(`turn card ${id}: its cue has no tokens`);
  return c2.w.map(([t2, a2]) => ({ t: t2, at: F(a2) - 1 }));
};
var glowMaterial = (color) => new ShaderMaterial({
  transparent: true,
  depthWrite: false,
  blending: AdditiveBlending,
  fog: false,
  uniforms: { col: { value: new Color(color) }, a: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  // half strength at 0.5 of the radius, gone at the rim, a little wider than tall
  fragmentShader: `uniform vec3 col; uniform float a; varying vec2 vUv;
    void main() { float d = length((vUv - 0.5) * vec2(2.0, 2.3)); float g = pow(clamp(1.0 - d, 0.0, 1.0), 1.7); gl_FragColor = vec4(col * g * a, 1.0); }`
});
var card = (id, label, color, glow) => {
  const words = cardWords(id), big = words[words.length - 1], lead = words.slice(0, -1);
  const enter = enterOf(id);
  const bigSize = Math.min(BIG_MAX, BIG_MAX * BIG_W / Math.max(1, textWidth(big.t, "800i", BIG_MAX)));
  const bigBase = CENTRE_Y - GAP / 2 - bigSize * 0.2, leadBase = bigBase + GAP + bigSize * 0.25;
  return {
    id,
    label,
    enter,
    stage: "card",
    shots: ({ from }) => [cut(from, [0, 0, DIST], [0, 0, 0], { fov: FOV, still: true, why: "the card" })],
    lights: () => ({ amb: 0, key: { pos: [0, 1e3, 2e3], at: [0, 0, 0], i: 0 } }),
    cues: () => [
      { kind: "hit", s: "sub", at: big.at, vol: 0.42, why: `the card's word lands: ${big.t}` },
      { kind: "hit", s: "bloom", at: big.at + 1, vol: 0.3, why: "the glow blooms behind it" }
    ],
    build: () => {
      const group = new Group();
      const white = lit("#faf0ee", 1);
      const face = lit(color, 1.12);
      const veil = new MeshBasicMaterial({ color: new Color("#faf0ee"), transparent: true, opacity: 0.32, toneMapped: false, depthWrite: false });
      const space = LEAD_SIZE * 0.34;
      const widths = lead.map((w2) => textWidth(w2.t, "500", LEAD_SIZE) * (1 + LEAD_TRACK));
      const total = widths.reduce((s2, w2) => s2 + w2, 0) + space * Math.max(0, lead.length - 1);
      let x2 = -total / 2;
      const leads = lead.map((w2, i2) => {
        const g2 = text3d(w2.t, { font: "500", size: LEAD_SIZE, depth: 1, bevel: 0, face: white, align: "left" });
        g2.scale.x = 1 + LEAD_TRACK;
        g2.position.set(x2, leadBase, 0);
        const b2 = new Mesh(new PlaneGeometry(widths[i2], LEAD_SIZE * 0.62), veil);
        b2.position.set(x2 + widths[i2] / 2, leadBase + LEAD_SIZE * 0.3, 1);
        x2 += widths[i2] + space;
        group.add(g2, b2);
        return { g: g2, b: b2, at: w2.at };
      });
      const word = text3d(big.t, { font: "800i", size: bigSize, depth: 1, bevel: 0, face });
      word.position.set(0, bigBase, 2);
      const gm = glowMaterial(glow);
      const halo = new Mesh(new PlaneGeometry(1500, 1300), gm);
      halo.position.set(0, bigBase + bigSize * 0.3, -4);
      group.add(halo, word);
      group.traverse((n2) => {
        n2.castShadow = false;
      });
      return {
        group,
        update: (f2) => {
          for (const l2 of leads) {
            l2.g.visible = f2 >= l2.at;
            l2.b.visible = f2 >= l2.at - 2 && f2 < l2.at;
          }
          word.visible = f2 >= big.at;
          const p2 = clamp01((f2 - big.at + 1) / 3);
          word.scale.set(1, 0.55 + 0.45 * p2, 1);
          gm.uniforms.a.value = 0.85 * (1 - Math.pow(1 - clamp01((f2 - big.at) / 7), 2));
        }
      };
    }
  };
};
var ExplainPlace = card("explain", "2 Turn card: Let us explain.", K2.amber, "#743815");
var CatchPlace = card("catch", "5 Turn card: But here's the catch.", K2.red, "#6c1310");

// src/world/places/placeholders.ts
var placeholder = (id, label, name, figure, o2 = {}) => {
  const enter = enterOf(id), land = Math.max(enter + 12, cue(id, 0) + 6);
  const C4 = [0, 330, 0];
  return {
    id,
    label,
    enter,
    stage: o2.stage ?? "dark",
    shots: ({ from, to }) => [
      cut(from, [-900, 420, 2500], [0, 360, 0], { fov: 42, focus: C4, why: "enter" }),
      dolly(from + 1, Math.max(30, to - from - 2), [-520, 470, 1750], [0, 380, 0], { fov: 42, ease: SOFT, why: "slow push-in" })
    ],
    lights: () => o2.stage === "light" ? lightStageLights(C4) : stdLights(C4),
    blur: (f2) => dropIn(f2, land).fast,
    cues: () => [{ kind: "hit", s: "thud", at: land, vol: 0.4, why: `${name}: the block lands` }],
    build: () => {
      const group = new Group();
      const body = new Group();
      body.add(block(760, 520, 560, 34, MAT.black()));
      const plate = litPlate([name], { size: 58, color: K2.white });
      plate.group.position.set(0, 300, 280 + plate.d / 2);
      body.add(plate.group);
      const fig = counter({ size: 90, color: o2.color ?? K2.money });
      fig.group.position.set(0, 0, 440);
      const halo = ring({ r: 1100 });
      group.add(body, fig.group, halo.mesh);
      return {
        group,
        update: (f2) => {
          const d2 = dropIn(f2, land);
          body.visible = d2.on;
          body.position.y = d2.y;
          plate.setLit((f2 - land) / 10);
          fig.group.visible = f2 >= land;
          fig.set(short(countUp(f2, land, land + 26, figure * 0.2, figure)));
          halo.update(f2, land + 26);
        }
      };
    }
  };
};
var HookPlace = placeholder("hook", "1 Hook (placeholder)", "HOOK", 29e9);
var DealPlace = placeholder("deal", "3 The deal (placeholder)", "THE DEAL", 375e6);
var PricePlace = placeholder("price", "4 The price (placeholder, light stage)", "THE PRICE", 247, { stage: "light" });
var ClosePlace = placeholder("close", "6 The close (placeholder)", "THE CLOSE", 138e8, { color: K2.red });
var FairPlace = placeholder("fair", "7 To be fair (placeholder)", "TO BE FAIR", 29e9);
var VerdictPlace = placeholder("verdict", "8 The verdict (placeholder)", "THE VERDICT", 138e8);

// src/world/film3d.ts
var PLACES = [HookPlace, ExplainPlace, DealPlace, PricePlace, CatchPlace, ClosePlace, FairPlace, VerdictPlace];
var WINDOWS = PLACES.map((p2, i2) => ({ id: p2.id, from: i2 === 0 ? 0 : p2.enter, to: i2 + 1 < PLACES.length ? PLACES[i2 + 1].enter : TOTAL_FRAMES }));
for (let i2 = 1; i2 < WINDOWS.length; i2++) if (WINDOWS[i2].from <= WINDOWS[i2 - 1].from) throw new Error(`037 world: ${WINDOWS[i2].id} enters at f${WINDOWS[i2].from}, not after ${WINDOWS[i2 - 1].id}`);
var SHOTS = PLACES.map((p2, i2) => {
  const w2 = WINDOWS[i2], keys = p2.shots({ from: w2.from, to: w2.to });
  if (!keys.length || Math.round(keys[0].at) !== w2.from) throw new Error(`037 world: ${p2.id}'s first camera key must start on its enter frame f${w2.from} (it starts at f${keys[0]?.at})`);
  if (i2 > 0 && !keys[0].cut) throw new Error(`037 world: ${p2.id} must open on a hard cut (cut(...) or whipIn(...)): places are never joined by a travel (R23)`);
  if (keys.some((k2) => (k2.dip ?? 0) > 0)) throw new Error(`037 world: ${p2.id} dips to black: there is never a black frame between places (R23)`);
  const last = keys[keys.length - 1];
  if (last.at + last.dur > w2.to + 1e-6 && i2 + 1 < PLACES.length) throw new Error(`037 world: ${p2.id}'s last camera key ends at f${last.at + last.dur}, after ${PLACES[i2 + 1].id} enters (f${w2.to})`);
  return keys;
});
var CAM = checkPath("037", SHOTS.flat());
var MOVES = SHOTS.flatMap((keys, i2) => keys.filter((k2) => k2.whoosh && !k2.cut).map((k2) => ({ id: PLACES[i2].id, mid: k2.at + k2.dur / 2, end: k2.at + k2.dur, vol: k2.whoosh, why: k2.why ?? "move" })));
var SCORE_CUES = buildScore(
  WINDOWS.map((w2) => ({ id: w2.id, from: w2.from, to: w2.to })),
  MOVES,
  PLACES.flatMap((p2, i2) => (p2.cues?.({ from: WINDOWS[i2].from, to: WINDOWS[i2].to }) ?? []).map((c2) => ({ ...c2, id: p2.id })))
).cues;
var envDb = (t2) => {
  const E2 = BED_ENV;
  if (!E2.length) return 0;
  if (t2 <= E2[0][0]) return E2[0][1];
  for (let k2 = 1; k2 < E2.length; k2++) if (t2 <= E2[k2][0]) return E2[k2 - 1][1] + (E2[k2][1] - E2[k2 - 1][1]) * (t2 - E2[k2 - 1][0]) / (E2[k2][0] - E2[k2 - 1][0]);
  return E2[E2.length - 1][1];
};
var bedVolume = (fr) => MUSIC_GAIN * 10 ** (envDb(fr / 30) / 20) * clamp01(fr / 12) * clamp01((TOTAL_FRAMES - fr) / 36);

// src/r45/blocks.ts
var BLOCKS = [
  { a: 0, b: 4.478, cue: 0, objWords: false, lines: [[{ t: "An", bold: false, a: 0 }, { t: "American", bold: false, a: 0.16 }, { t: "company", bold: false, a: 0.54 }, { t: "bought", bold: false, a: 1.04 }, { t: "Afterpay", bold: false, a: 1.44 }, { t: "for", bold: false, a: 1.98 }, { t: "$29", bold: false, a: 2.24 }, { t: "billion.", bold: false, a: 3.315 }]] },
  { a: 4.478, b: 8.44, cue: 1, objWords: false, lines: [[{ t: "But", bold: false, a: 4.478 }, { t: "when", bold: false, a: 4.6 }, { t: "the", bold: false, a: 4.74 }, { t: "deal", bold: false, a: 4.86 }, { t: "closed,", bold: false, a: 5.02 }, { t: "its", bold: false, a: 5.92 }, { t: "own", bold: false, a: 6.06 }, { t: "filing", bold: false, a: 6.34 }, { t: "put", bold: false, a: 6.72 }, { t: "the", bold: false, a: 6.94 }, { t: "price", bold: false, a: 7.1 }, { t: "at", bold: false, a: 7.34 }, { t: "13.8.", bold: false, a: 7.58 }]] },
  { a: 8.44, b: 10.54, cue: 2, objWords: false, lines: [[{ t: "So", bold: false, a: 8.44 }, { t: "which", bold: false, a: 9.12 }, { t: "number", bold: false, a: 9.58 }, { t: "is", bold: false, a: 9.78 }, { t: "right?", bold: false, a: 10.04 }]] },
  { a: 10.54, b: 11.88, cue: 3, objWords: false, lines: [[{ t: "Let", bold: false, a: 10.54 }, { t: "us", bold: false, a: 10.64 }, { t: "explain.", bold: false, a: 10.78 }]] },
  { a: 11.88, b: 17.058, cue: 4, objWords: false, lines: [[{ t: "In", bold: false, a: 11.88 }, { t: "August", bold: false, a: 11.98 }, { t: "2021,", bold: false, a: 12.3 }, { t: "Jack", bold: false, a: 13.63 }, { t: "Dorsey's", bold: false, a: 13.84 }, { t: "company,", bold: false, a: 14.36 }, { t: "Square,", bold: false, a: 14.68 }, { t: "agreed", bold: false, a: 15.518 }, { t: "to", bold: false, a: 15.8 }, { t: "buy", bold: false, a: 16.02 }, { t: "Afterpay.", bold: false, a: 16.26 }]] },
  { a: 17.058, b: 18.92, cue: 5, objWords: false, lines: [[{ t: "But", bold: false, a: 17.058 }, { t: "Square", bold: false, a: 17.16 }, { t: "didn't", bold: false, a: 17.46 }, { t: "pay", bold: false, a: 17.86 }, { t: "in", bold: false, a: 18.06 }, { t: "cash.", bold: false, a: 18.2 }]] },
  { a: 18.92, b: 20.8, cue: 6, objWords: false, lines: [[{ t: "It", bold: false, a: 18.92 }, { t: "paid", bold: false, a: 19.02 }, { t: "in", bold: false, a: 19.32 }, { t: "its", bold: false, a: 19.56 }, { t: "own", bold: false, a: 19.7 }, { t: "shares.", bold: false, a: 19.96 }]] },
  { a: 20.8, b: 25.275, cue: 7, objWords: false, lines: [[{ t: "For", bold: false, a: 20.8 }, { t: "every", bold: false, a: 20.88 }, { t: "Afterpay", bold: false, a: 21.26 }, { t: "share,", bold: false, a: 21.82 }, { t: "you", bold: false, a: 22.413 }, { t: "got", bold: false, a: 22.56 }, { t: "0.375", bold: false, a: 22.902 }, { t: "of", bold: false, a: 23.6 }, { t: "a", bold: false, a: 24.38 }, { t: "Square", bold: false, a: 24.52 }, { t: "share.", bold: false, a: 24.76 }]] },
  { a: 25.275, b: 29.315, cue: 8, objWords: false, lines: [[{ t: "At", bold: false, a: 25.275 }, { t: "the", bold: false, a: 25.36 }, { t: "time,", bold: false, a: 25.5 }, { t: "each", bold: false, a: 26.104 }, { t: "Square", bold: false, a: 26.28 }, { t: "share", bold: false, a: 26.62 }, { t: "was", bold: false, a: 26.92 }, { t: "worth", bold: false, a: 27.14 }, { t: "$247.", bold: false, a: 27.538 }]] },
  { a: 29.315, b: 32.06, cue: 9, objWords: false, lines: [[{ t: "Multiply", bold: false, a: 29.315 }, { t: "it", bold: false, a: 29.74 }, { t: "out,", bold: false, a: 29.84 }, { t: "and", bold: false, a: 30.39 }, { t: "you", bold: false, a: 30.46 }, { t: "get", bold: false, a: 30.62 }, { t: "29", bold: false, a: 31.092 }, { t: "billion.", bold: false, a: 31.5 }]] },
  { a: 32.06, b: 33.61, cue: 10, objWords: false, lines: [[{ t: "But", bold: false, a: 32.06 }, { t: "here's", bold: false, a: 32.08 }, { t: "the", bold: false, a: 32.36 }, { t: "catch.", bold: false, a: 32.48 }]] },
  { a: 33.61, b: 35.98, cue: 11, objWords: false, lines: [[{ t: "The", bold: false, a: 33.61 }, { t: "deal", bold: false, a: 33.68 }, { t: "took", bold: false, a: 33.98 }, { t: "six", bold: false, a: 34.26 }, { t: "months", bold: false, a: 34.7 }, { t: "to", bold: false, a: 35.08 }, { t: "close.", bold: false, a: 35.32 }]] },
  { a: 35.98, b: 40.76, cue: 12, objWords: false, lines: [[{ t: "By", bold: false, a: 35.98 }, { t: "then,", bold: false, a: 36.04 }, { t: "Square", bold: false, a: 36.62 }, { t: "had", bold: false, a: 36.9 }, { t: "renamed", bold: false, a: 37.12 }, { t: "itself", bold: false, a: 37.5 }, { t: "Block,", bold: false, a: 38.142 }, { t: "and", bold: false, a: 38.669 }, { t: "its", bold: false, a: 38.74 }, { t: "share", bold: false, a: 38.92 }, { t: "price", bold: false, a: 39.16 }, { t: "had", bold: false, a: 39.48 }, { t: "roughly", bold: false, a: 39.68 }, { t: "halved.", bold: false, a: 40.04 }]] },
  { a: 40.76, b: 43.33, cue: 13, objWords: false, lines: [[{ t: "Same", bold: false, a: 40.76 }, { t: "number", bold: false, a: 40.94 }, { t: "of", bold: false, a: 41.16 }, { t: "shares.", bold: false, a: 41.38 }, { t: "About", bold: false, a: 41.989 }, { t: "half", bold: false, a: 42.2 }, { t: "the", bold: false, a: 42.56 }, { t: "price.", bold: false, a: 42.76 }]] },
  { a: 43.33, b: 49.16, cue: 14, objWords: false, lines: [[{ t: "So", bold: false, a: 43.33 }, { t: "when", bold: false, a: 43.44 }, { t: "the", bold: false, a: 43.58 }, { t: "deal", bold: false, a: 43.7 }, { t: "closed,", bold: false, a: 43.86 }, { t: "Block", bold: false, a: 44.76 }, { t: "told", bold: false, a: 44.98 }, { t: "the", bold: false, a: 45.22 }, { t: "SEC", bold: false, a: 45.4 }, { t: "what", bold: false, a: 45.8 }, { t: "those", bold: false, a: 46.315 }, { t: "shares", bold: false, a: 46.5 }, { t: "were", bold: false, a: 46.74 }, { t: "worth:", bold: false, a: 46.98 }, { t: "13.8", bold: false, a: 47.58 }, { t: "billion.", bold: false, a: 48.679 }]] },
  { a: 49.16, b: 55.3, cue: 15, objWords: false, lines: [[{ t: "To", bold: false, a: 49.16 }, { t: "be", bold: false, a: 49.24 }, { t: "fair,", bold: false, a: 49.38 }, { t: "29", bold: false, a: 50.02 }, { t: "billion", bold: false, a: 50.44 }, { t: "was", bold: false, a: 50.82 }, { t: "real", bold: false, a: 51.18 }, { t: "on", bold: false, a: 51.56 }, { t: "day", bold: false, a: 51.84 }, { t: "one,", bold: false, a: 52.02 }, { t: "and", bold: false, a: 52.662 }, { t: "Afterpay's", bold: false, a: 52.86 }, { t: "shareholders", bold: false, a: 53.34 }, { t: "got", bold: false, a: 53.78 }, { t: "the", bold: false, a: 54.24 }, { t: "shares", bold: false, a: 54.4 }, { t: "they", bold: false, a: 54.62 }, { t: "were", bold: false, a: 54.8 }, { t: "promised.", bold: false, a: 54.96 }]] },
  { a: 55.3, b: 59.25, cue: 16, objWords: false, lines: [[{ t: "But", bold: false, a: 55.3 }, { t: "the", bold: false, a: 55.64 }, { t: "price", bold: false, a: 55.8 }, { t: "tag", bold: false, a: 56.04 }, { t: "everyone", bold: false, a: 56.28 }, { t: "remembers", bold: false, a: 56.74 }, { t: "was", bold: false, a: 57.26 }, { t: "never", bold: false, a: 57.76 }, { t: "the", bold: false, a: 58.16 }, { t: "price", bold: false, a: 58.38 }, { t: "paid.", bold: false, a: 58.66 }]] },
  { a: 59.25, b: 60.74, cue: 17, objWords: false, lines: [[{ t: "Our", bold: false, a: 59.25 }, { t: "rating:", bold: false, a: 59.4 }, { t: "inflated.", bold: false, a: 59.93 }]] },
  { a: 60.74, b: 62, cue: 18, objWords: false, lines: [[{ t: "Send", bold: false, a: 60.74 }, { t: "us", bold: false, a: 60.88 }, { t: "who", bold: false, a: 61.04 }, { t: "to", bold: false, a: 61.24 }, { t: "audit", bold: false, a: 61.42 }, { t: "next.", bold: false, a: 61.6 }]] }
];

// src/r45/Caption.tsx
var CAP_SIZE = 30;
var CAP_Y = 275;
var BAND = { y0: CAP_Y - 10, y1: CAP_Y + CAP_SIZE * 1.3 };
var ENDS = /[,.:;!?]$/;
var chunkWords = (ws) => {
  const out = [];
  let cur = [];
  ws.forEach((w2, i2) => {
    cur.push(w2);
    const left = ws.length - 1 - i2;
    if (left === 0 || (cur.length >= 4 || cur.length >= 2 && ENDS.test(w2.t)) && left !== 1) {
      out.push(cur);
      cur = [];
    }
  });
  return out;
};
var CHUNKS = BLOCKS.flatMap((b2) => {
  const scene = CUES[b2.cue].scene;
  return chunkWords(b2.lines.flat()).map((ws) => ({ text: ws.map((w2) => w2.t).join(" "), a: ws[0].a, cue: b2.cue, scene }));
});

// src/hf/film.tsx
var WORLD_LAYER = "world";
var layerSpecs = () => [
  { id: WORLD_LAYER, from: 0, to: TOTAL_FRAMES, track: 0, z: 1, label: "The world: one 3-D scene, one camera" },
  { id: "captions", from: 0, to: TOTAL_FRAMES, track: 1, z: 30, label: "Captions" },
  ...PLACES.map((p2, k2) => ({ id: p2.id, from: WINDOWS[k2].from, to: WINDOWS[k2].to, track: 2 + k2, z: 2, label: p2.label }))
];

// src/hf/plan.ts
var plan = () => ({
  total: TOTAL_FRAMES,
  fps: FPS,
  // ★ (030, the template) each track only once it exists: before the take lands the film is picture only (data.ts flags)
  has: { vo: HAS_VO, music: HAS_MUSIC, sfx: HAS_SFX },
  comp: COMPOSITION_ID,
  // the brief's composition name (data.ts)
  vo: { gain: VO_GAIN, skip: VO_SKIP_FRAMES, end: VO_END },
  music: MUSIC_FILE,
  // the bed's file in assets/audio/ (data.ts names it: a clone never edits build.mjs for it)
  layers: layerSpecs(),
  // ★ AUDIO LEAD 0: Remotion cued every SFX one frame early for its encoder's priming; HyperFrames' mux has none, so each cue
  //   sits on its own frame (CLAUDE.md, V34 HF)
  cues: (HAS_SFX ? SCORE_CUES : []).map((c2) => ({ ...c2, lead: 0, gain: GAIN[c2.s], len: LEN[c2.s] })),
  // the bed's level: MUSIC_GAIN × the measured envelope × its fades, sampled every 3 frames (an automation lane IS the level)
  bed: Array.from({ length: Math.floor(TOTAL_FRAMES / 3) + 1 }, (_2, i2) => {
    const f2 = Math.min(TOTAL_FRAMES, i2 * 3);
    return { t: +(f2 / FPS).toFixed(4), v: +bedVolume(f2).toFixed(5) };
  })
});
export {
  plan
};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
