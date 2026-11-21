// ═══════════════════════════════════════════════════════════════════════════
// ★ 038: THE PLACES, in film order. Each line is one place module (place.ts); a place not yet built is a stub. To swap
// a real place in, replace its stub line with `export { PLACE as HOOK } from "./sets/hook";` (and so on).
// ═══════════════════════════════════════════════════════════════════════════
import { makeStub } from "./sets/_stub";
export const HOOK = makeStub("hook", "dark", "#6F6A66");
export const SIM = makeStub("sim", "cream", "#9BB8A6");
export const DEAL = makeStub("deal", "dark", "#E20074");
export const TARGETS = makeStub("targets", "cream", "#C9A46A");
export const PAYMENT = makeStub("payment", "dark", "#8A8F96");
export const CATCH = makeStub("catch", "cream", "#C46A4A");
export const FAIR = makeStub("fair", "dark", "#7A6A9A");
export const VERDICT = makeStub("verdict", "cream", "#5E8C6A");
