// ═══════════════════════════════════════════════════════════════════════════
// ★ 041: THE PLACES, in film order (place.ts). A place not yet built is a stub; swap in its module with
// `export { PLACE as HOOK } from "./sets/hook";` (and so on).
// ═══════════════════════════════════════════════════════════════════════════
import { makeStub } from "./sets/_stub";
export const HOOK = makeStub("hook", "dark", "#5a3a2a");
export { PLACE as CHAMP } from "./sets/champ";
export { PLACE as GRILL } from "./sets/grill";
export { PLACE as ROYALTIES } from "./sets/royalties";
export { PLACE as BUYOUT } from "./sets/buyout";
export const PAPER = makeStub("paper", "cream", "#6b5a3f");
export { PLACE as CATCH } from "./sets/catch";
export const VERDICT = makeStub("verdict", "cream", "#3f8f5c");
