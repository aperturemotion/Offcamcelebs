// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE HOOK'S PHONE SCREEN (038) — what the display shows, painted per frame into its canvas (stage.ts liveTex), in the
// display's own px (the glass's active area, top-left origin). Four states, each a pure function of the frame's params:
//   · CALL     — an incoming call: his round caller-ID avatar (HAS_PHOTO: his photo; until then the "RR" placeholder disc on
//                a soft gradient), "Ryan Reynolds", "mobile", Decline / Accept; two rings pulse out of the avatar and the
//                Accept button nudges with the ring. NO digits anywhere (no clock, no battery percentage: the brief's
//                "no number on screen before ~2 s"), the status bar carries icons only.
//   · OFF / FLASH — the impact: the panel blanks for two frames and wakes.
//   · LOCK     — the lock screen and its news notifications: ONE card readable at a time (P17: one label "NEWS", one figure),
//                every earlier card compressed into the soft stack behind it (edges only, no type). A new card drops in from
//                above and the old one is pushed back into the stack.
//   · PENDING  — the stack is swiped away; one card: "FINAL PAYMENT" over a turning spinner and "PENDING".
// Type is Archivo (the film's face), plain. No outlet names or logos: the source label is "NEWS".
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { rr, imageOf } from "../stage";
import { FACE, fitFont, track, hash } from "../kit029";
import { HAS_PHOTO, PHOTO_FILE } from "../../audit/data";

/** the active area (inside the black border), display px */
export const AW = 202, AH = 429, AR = 24;
/** the border painted round it (the glass's black mask), so the texture covers the display plane exactly */
export const BZ = 4;
export const TW = AW + 2 * BZ, TH = AH + 2 * BZ;

export type Card = { l1: string; l2: string; at: number; thumb?: string };
export type ScreenP =
  | { mode: "call"; t: number }
  | { mode: "off" }
  | { mode: "lock"; t: number; cards: Card[]; now: number; clear?: number; pending?: number; spin?: number };

// his photo, registered at load so the driver's first-frame hold covers it
// (looked up when painted, never at load: the plan runs in Node; the driver decodes both before the first frame, through the
//  same imageOf registry)
const img = (src: string) => (typeof Image === "undefined" ? null : imageOf(src));
/** the T-Mobile tile (assets/brand, P16: the company's own mark), a notification's thumbnail */
const THUMBS: Record<string, string> = { tmobile: "assets/brand/tmobile_tile.png" };

const SETTLE = (t: number) => { const c = Math.max(0, Math.min(1, t)); return 1 - Math.pow(1 - c, 3); };

const statusBar = (g: CanvasRenderingContext2D, ink: string) => {
  g.save();
  g.fillStyle = ink;
  // signal bars (left), wifi, battery (right): icons only, never digits
  for (let i = 0; i < 4; i++) { rr(g, 14 + i * 5, 19 - (i + 1) * 2.2, 3.4, (i + 1) * 2.2, 0.8); g.fill(); }
  g.strokeStyle = ink; g.lineWidth = 1.5; g.lineCap = "round";
  for (let i = 0; i < 3; i++) { g.beginPath(); g.arc(AW - 50, 20, 2.5 + i * 3.2, -Math.PI * 0.75, -Math.PI * 0.25); g.stroke(); }
  g.beginPath(); g.arc(AW - 50, 19.6, 0.9, 0, Math.PI * 2); g.fill();
  g.lineWidth = 1; rr(g, AW - 36, 11, 19, 9, 2.6); g.stroke();
  rr(g, AW - 34.4, 12.6, 13.5, 5.8, 1.4); g.fill();
  rr(g, AW - 16.2, 13.8, 1.6, 3.4, 0.6); g.fill();
  g.restore();
};

/** a telephone handset glyph (centred at x, y; rotated by a) */
const handset = (g: CanvasRenderingContext2D, x: number, y: number, s: number, a: number) => {
  g.save();
  g.translate(x, y); g.rotate(a); g.scale(s, s);
  g.beginPath();
  g.moveTo(-9, -6.5);
  g.quadraticCurveTo(-11, -1, -6.5, 4.5);
  g.quadraticCurveTo(-1, 10.5, 4.5, 9.5);
  g.lineTo(7.5, 6.2); g.quadraticCurveTo(8.4, 5.1, 7.2, 4.2);
  g.lineTo(3.6, 2.2); g.quadraticCurveTo(2.6, 1.6, 1.8, 2.5);
  g.lineTo(0.6, 3.8); g.quadraticCurveTo(-3.6, 1.6, -4.6, -1.6);
  g.lineTo(-3.3, -2.8); g.quadraticCurveTo(-2.4, -3.6, -3, -4.6);
  g.lineTo(-5.2, -8.2); g.quadraticCurveTo(-6.1, -9.4, -7.2, -8.4);
  g.closePath();
  g.fill();
  g.restore();
};

const avatar = (g: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
  g.save();
  g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.clip();
  const photo = HAS_PHOTO ? img(`assets/${PHOTO_FILE}`) : null;
  if (photo && photo.complete && photo.naturalWidth > 0) {
    // cover-fit, the face a little above centre
    const k = Math.max((2 * r) / photo.naturalWidth, (2 * r) / photo.naturalHeight);
    const w = photo.naturalWidth * k, h = photo.naturalHeight * k;
    g.drawImage(photo, cx - w / 2, cy - h * 0.42, w, h);
  } else {
    const gr = g.createLinearGradient(cx - r, cy - r, cx + r, cy + r);
    gr.addColorStop(0, "#D9A47E"); gr.addColorStop(0.55, "#B4706A"); gr.addColorStop(1, "#7E4E62");
    g.fillStyle = gr; g.fillRect(cx - r, cy - r, 2 * r, 2 * r);
    const hl = g.createRadialGradient(cx - r * 0.35, cy - r * 0.45, 0, cx - r * 0.35, cy - r * 0.45, r * 1.2);
    hl.addColorStop(0, "rgba(255,240,225,0.35)"); hl.addColorStop(1, "rgba(255,240,225,0)");
    g.fillStyle = hl; g.fillRect(cx - r, cy - r, 2 * r, 2 * r);
    g.fillStyle = "rgba(255,250,245,0.94)";
    g.textAlign = "center"; g.textBaseline = "middle";
    track(g, 1);
    g.font = `700 ${Math.round(r * 0.74)}px ${FACE}`;
    g.fillText("RR", cx + 0.5, cy + 1.5);
    track(g, 0);
  }
  g.restore();
};

const paintCall = (g: CanvasRenderingContext2D, t: number) => {
  // the background: a deep warm blur, lit from behind the avatar
  const bg = g.createLinearGradient(0, 0, 0, AH);
  bg.addColorStop(0, "#3A2D2B"); bg.addColorStop(0.45, "#241B1D"); bg.addColorStop(1, "#110D10");
  g.fillStyle = bg; g.fillRect(0, 0, AW, AH);
  const glow = g.createRadialGradient(AW / 2, 150, 10, AW / 2, 150, 170);
  glow.addColorStop(0, "rgba(214,140,110,0.38)"); glow.addColorStop(1, "rgba(214,140,110,0)");
  g.fillStyle = glow; g.fillRect(0, 0, AW, AH);
  statusBar(g, "rgba(255,255,255,0.88)");
  // "incoming call" in small type
  g.fillStyle = "rgba(255,255,255,0.62)"; g.textAlign = "center"; g.textBaseline = "alphabetic";
  g.font = `500 10.5px ${FACE}`; track(g, 0.6);
  g.fillText("incoming call", AW / 2, 62);
  track(g, 0);
  // the rings pulsing out of the avatar (one every 24 frames, two in flight)
  const CX = AW / 2, CY = 146, R = 44;
  for (let k = 0; k < 2; k++) {
    const u = (((t + k * 12) % 24) + 24) % 24 / 24;
    g.strokeStyle = `rgba(255,214,196,${(0.42 * (1 - u)).toFixed(3)})`;
    g.lineWidth = 2.2 * (1 - u) + 0.6;
    g.beginPath(); g.arc(CX, CY, R + 4 + 30 * u, 0, Math.PI * 2); g.stroke();
  }
  avatar(g, CX, CY, R);
  // the name and the line
  g.fillStyle = "#FFFFFF";
  g.textAlign = "center";
  fitFont(g, 700, 21, "Ryan Reynolds", AW - 24);
  g.fillText("Ryan Reynolds", CX, 226);
  g.fillStyle = "rgba(255,255,255,0.66)";
  g.font = `500 12px ${FACE}`;
  g.fillText("mobile", CX, 246);
  // decline / accept
  const BY = 364, BR = 24;
  const nudge = Math.max(0, Math.sin(((t % 24) / 24) * Math.PI * 2)) * 2.2;
  g.fillStyle = "#E5483C";
  g.beginPath(); g.arc(54, BY, BR, 0, Math.PI * 2); g.fill();
  g.fillStyle = "#FFFFFF"; handset(g, 54, BY, 1.05, Math.PI * 0.75 + Math.PI * 0.25);
  g.fillStyle = "#3DBE5C";
  g.beginPath(); g.arc(AW - 54, BY - nudge, BR, 0, Math.PI * 2); g.fill();
  g.fillStyle = "#FFFFFF"; handset(g, AW - 54, BY - nudge, 1.05, 0.1 * Math.sin(t * 1.3));
  g.fillStyle = "rgba(255,255,255,0.8)";
  g.font = `500 10px ${FACE}`;
  g.fillText("Decline", 54, BY + BR + 15);
  g.fillText("Accept", AW - 54, BY + BR + 15);
};

const wallpaper = (g: CanvasRenderingContext2D) => {
  const bg = g.createLinearGradient(0, 0, 0, AH);
  bg.addColorStop(0, "#1C2230"); bg.addColorStop(0.55, "#2B2530"); bg.addColorStop(1, "#3A2A26");
  g.fillStyle = bg; g.fillRect(0, 0, AW, AH);
  for (const [x, y, r, c] of [[40, 90, 120, "rgba(92,120,170,0.20)"], [170, 300, 140, "rgba(190,120,90,0.18)"], [120, 420, 110, "rgba(120,80,110,0.16)"]] as const) {
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, c); gr.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = gr; g.fillRect(0, 0, AW, AH);
  }
};
const padlock = (g: CanvasRenderingContext2D, x: number, y: number) => {
  g.save();
  g.fillStyle = "rgba(255,255,255,0.9)"; g.strokeStyle = "rgba(255,255,255,0.9)"; g.lineWidth = 1.8;
  g.beginPath(); g.arc(x, y - 3, 4.2, Math.PI, 0); g.lineTo(x + 4.2, y); g.moveTo(x - 4.2, y); g.lineTo(x - 4.2, y - 3); g.stroke();
  rr(g, x - 6, y, 12, 9, 2); g.fill();
  g.restore();
};
/** a generic news-app icon: a rounded square with a folded page (no outlet's mark) */
const newsIcon = (g: CanvasRenderingContext2D, x: number, y: number, s: number) => {
  g.save();
  const gr = g.createLinearGradient(x, y, x, y + s);
  gr.addColorStop(0, "#E2574C"); gr.addColorStop(1, "#B9352E");
  g.fillStyle = gr; rr(g, x, y, s, s, s * 0.24); g.fill();
  g.fillStyle = "rgba(255,255,255,0.95)";
  rr(g, x + s * 0.2, y + s * 0.22, s * 0.6, s * 0.56, 1.2); g.fill();
  g.fillStyle = "#C4413A";
  for (let i = 0; i < 3; i++) g.fillRect(x + s * 0.28, y + s * (0.32 + i * 0.13), s * (i === 0 ? 0.44 : 0.3), s * 0.06);
  g.fillRect(x + s * 0.62, y + s * 0.45, s * 0.1, s * 0.2);
  g.restore();
};

const CARD_X = 6, CARD_W = AW - 12, CARD_H = 92, CARD_R = 16;
const cardShell = (g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, a: number) => {
  g.save();
  g.globalAlpha = a;
  g.shadowColor = "rgba(0,0,0,0.28)"; g.shadowBlur = 8; g.shadowOffsetY = 2;
  g.fillStyle = "rgba(240,236,232,0.93)";
  rr(g, x, y, w, h, CARD_R); g.fill();
  g.restore();
};
const cardFace = (g: CanvasRenderingContext2D, x: number, y: number, c: Card, a: number) => {
  g.save();
  g.globalAlpha = a;
  newsIcon(g, x + 10, y + 10, 23);
  g.fillStyle = "#3A3532"; g.textBaseline = "alphabetic"; g.textAlign = "left";
  g.font = `700 10.5px ${FACE}`; track(g, 1.3);
  g.fillText("NEWS", x + 41, y + 25.5);
  track(g, 0);
  g.textAlign = "right"; g.fillStyle = "#8B847E"; g.font = `500 10.5px ${FACE}`;
  g.fillText("now", x + CARD_W - 12, y + 25.5);
  g.textAlign = "left"; g.fillStyle = "#16120F";
  // a thumbnail on the right (as news notifications carry), the type narrowed to clear it
  const th = c.thumb ? img(THUMBS[c.thumb]) : null;
  const TS = 40;
  if (th && th.complete && th.naturalWidth > 0) {
    g.save(); rr(g, x + CARD_W - 10 - TS, y + 41, TS, TS, 8); g.clip();
    g.drawImage(th, x + CARD_W - 10 - TS, y + 41, TS, TS); g.restore();
  }
  const maxW = CARD_W - 22 - (th ? TS + 8 : 0);
  const s1 = fitFont(g, 700, 17.5, c.l1, maxW), s2Probe = fitFont(g, 700, 17.5, c.l2, maxW);
  const s = Math.min(s1, s2Probe);
  g.font = `700 ${s}px ${FACE}`;
  g.fillText(c.l1, x + 11, y + 56);
  g.fillText(c.l2, x + 11, y + 78);
  g.restore();
};

const paintLock = (g: CanvasRenderingContext2D, p: Extract<ScreenP, { mode: "lock" }>) => {
  wallpaper(g);
  statusBar(g, "rgba(255,255,255,0.9)");
  padlock(g, AW / 2, 44);
  const clear = SETTLE(p.clear ?? 0);           // the stack swiped up and away
  const Y0 = 160 - 220 * clear;
  const shown = p.cards.filter((c) => c.at <= p.now);
  if (shown.length && clear < 1) {
    const top = shown[shown.length - 1];
    const k = SETTLE((p.now - top.at) / 7);    // the newest card's arrival (it drops in from above)
    // the stack behind: up to two edges peek out under the front card, the older the narrower and the fainter
    const behind = shown.length - 1;
    for (let j = Math.min(behind, 2); j >= 1; j--) {
      // a card that was the front one a moment ago slides back to its slot as the new one lands
      const depth = j - 1 + k;
      const w = CARD_W * (1 - 0.06 * depth), x = CARD_X + (CARD_W - w) / 2;
      cardShell(g, x, Y0 + 9 * depth, w, CARD_H, (1 - 0.3 * depth) * (1 - clear));
      // the card just pushed back: its type fades as it goes behind (never two readable cards)
      if (j === 1 && k < 1) cardFace(g, x, Y0 + 9 * depth, shown[shown.length - 2], (1 - Math.min(1, k * 3)) * (1 - clear));
    }
    const ty = Y0 - 46 * (1 - k);
    cardShell(g, CARD_X, ty, CARD_W, CARD_H, k * (1 - clear));
    cardFace(g, CARD_X, ty, top, k * (1 - clear));
  }
  if (p.pending !== undefined) {
    const a = SETTLE(p.pending / 9);
    const y = 158 + 16 * (1 - a), h = 140;
    cardShell(g, CARD_X, y, CARD_W, h, a);
    g.save();
    g.globalAlpha = a;
    g.textAlign = "center"; g.textBaseline = "alphabetic";
    g.fillStyle = "#16120F";
    track(g, 1.6);
    fitFont(g, 800, 16, "FINAL PAYMENT", CARD_W - 30);
    g.fillText("FINAL PAYMENT", AW / 2 + 0.8, y + 32);
    track(g, 0);
    // the spinner: a 270° arc turning (one turn every 26 frames), its tail fading
    const cx = AW / 2, cy = y + 74, r = 19, a0 = ((p.spin ?? 0) / 26) * Math.PI * 2;
    g.lineCap = "round";
    g.strokeStyle = "rgba(208,138,46,0.18)"; g.lineWidth = 4;
    g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.stroke();
    const N = 18;
    for (let i = 0; i < N; i++) {
      g.strokeStyle = `rgba(208,138,46,${(0.15 + 0.85 * (i / (N - 1))).toFixed(3)})`;
      g.beginPath(); g.arc(cx, cy, r, a0 + (i / N) * Math.PI * 1.5, a0 + ((i + 1.05) / N) * Math.PI * 1.5); g.stroke();
    }
    g.fillStyle = "#B8741E";
    track(g, 1.4);
    g.font = `700 13px ${FACE}`;
    g.fillText("PENDING", AW / 2 + 0.7, y + 124);
    track(g, 0);
    g.restore();
  }
};

/** paint the whole texture (TW × TH): the black border, then the active area */
export const paintScreen = (g: CanvasRenderingContext2D, p: ScreenP) => {
  g.fillStyle = "#020203"; g.fillRect(0, 0, TW, TH);
  g.save();
  g.translate(BZ, BZ);
  rr(g, 0, 0, AW, AH, AR); g.clip();
  if (p.mode === "call") paintCall(g, p.t);
  else if (p.mode === "lock") paintLock(g, p);
  else { g.fillStyle = "#020203"; g.fillRect(0, 0, AW, AH); }
  // the punch-hole selfie camera, top centre (part of the panel)
  g.fillStyle = "#000000";
  g.beginPath(); g.arc(AW / 2, 14, 5, 0, Math.PI * 2); g.fill();
  g.fillStyle = "rgba(60,70,95,0.55)";
  g.beginPath(); g.arc(AW / 2 - 1.2, 12.8, 1.6, 0, Math.PI * 2); g.fill();
  g.restore();
  void hash;
};
