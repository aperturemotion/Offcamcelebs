import { Easing } from "remotion";
import { TRAVEL } from "./tokens";

// ═══════════════════════════════════════════════════════════════════════════
// THE HAND-OVER'S SHAPE (2026-11-15, Timur on 035: "I don't think it's smooth enough … it should be more like a smooth 100
// basis points style transition, like smoothly moves and eases into the scene rather than abruptly stopping once it gets to
// its target destination"). One switch picks the shape for every hand-over; Film.tsx reads it. Alternatives were rendered
// for Timur to choose from:
//   · current     — 44 f (truck) / 48 f (crane) on TRAVEL, symmetric: it decelerates as fast as it accelerated;
//   · glide       — 60 / 64 f on a soft start and a LONG landing: most of the move is spent slowing down;
//   · glidePush   — the glide, and the arriving place settles in from 6% closer as it lands (the leaving one falls back
//                   3%): the landing becomes a gentle push-in, so the motion hands over to the place instead of stopping;
//   · expo        — 64 / 68 f: under way sooner, then an exponential-like deceleration over a long tail; the yaw and the
//                   depth arc ease out with it.
// ═══════════════════════════════════════════════════════════════════════════
export type HandoverShape = {
  name: string; truck: number; crane: number; curve: (t: number) => number;
  /** the arriving place's zoom at the start of its landing (1 = none) and the leaving place's at the end of its exit */
  landZoom: number; leaveZoom: number;
};
const SHAPES: Record<string, HandoverShape> = {
  current: { name: "current", truck: 44, crane: 48, curve: TRAVEL, landZoom: 1, leaveZoom: 1 },
  glide: { name: "glide", truck: 60, crane: 64, curve: Easing.bezier(0.5, 0, 0.1, 1), landZoom: 1, leaveZoom: 1 },
  glidePush: { name: "glidePush", truck: 60, crane: 64, curve: Easing.bezier(0.5, 0, 0.1, 1), landZoom: 1.06, leaveZoom: 0.97 },
  expo: { name: "expo", truck: 64, crane: 68, curve: Easing.bezier(0.3, 0, 0, 1), landZoom: 1, leaveZoom: 1 },
};
export const HANDOVER_VARIANT = "current";
export const HO: HandoverShape = SHAPES[HANDOVER_VARIANT];
