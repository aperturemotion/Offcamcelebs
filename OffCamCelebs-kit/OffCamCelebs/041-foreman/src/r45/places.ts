// ═══════════════════════════════════════════════════════════════════════════
// ★ 041: THE PLACES, in film order (place.ts). A place not yet built is a stub; swap in its module with
// `export { PLACE as HOOK } from "./sets/hook";` (and so on).
// ═══════════════════════════════════════════════════════════════════════════
import { makeStub } from "./sets/_stub";
export const HOOK = makeStub("hook", "dark", "#5a3a2a");
export const CHAMP = makeStub("champ", "cream", "#b8922e");
export const GRILL = makeStub("grill", "dark", "#3a3a3a");
export const ROYALTIES = makeStub("royalties", "cream", "#2f5d34", 0);
export const BUYOUT = makeStub("buyout", "dark", "#2c3a4a");
export const PAPER = makeStub("paper", "cream", "#6b5a3f");
export const CATCH = makeStub("catch", "dark", "#5a4632");
export const VERDICT = makeStub("verdict", "cream", "#3f8f5c");
