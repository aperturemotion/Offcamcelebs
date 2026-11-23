// ═══════════════════════════════════════════════════════════════════════════
// ★ 039: THE PLACES, in film order. Each line is one place module (place.ts); a place not yet built is a stub. To swap
// a real place in, replace its stub line with `export { PLACE as HOOK } from "./sets/hook";` (and so on).
// ═══════════════════════════════════════════════════════════════════════════
import { makeStub } from "./sets/_stub";
export const HOOK = makeStub("hook", "dark", "#8a1c1c");
export const CHAMP = makeStub("champ", "cream", "#b8922e");
export const DEAL = makeStub("deal", "dark", "#2c3a4a");
export const PAY = makeStub("pay", "cream", "#3f6b4f");
export const FIGHTS = makeStub("fights", "dark", "#5a4632");
export const LAWSUIT = makeStub("lawsuit", "cream", "#4a4a58");
export const MATH = makeStub("math", "dark", "#3f6b4f");
export const VERDICT = makeStub("verdict", "cream", "#b0573a");
