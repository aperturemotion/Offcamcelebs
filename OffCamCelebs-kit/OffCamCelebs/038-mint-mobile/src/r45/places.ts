// ═══════════════════════════════════════════════════════════════════════════
// ★ 038: THE PLACES, in film order. Each line is one place module (place.ts); a place not yet built is a stub. To swap
// a real place in, replace its stub line with `export { PLACE as HOOK } from "./sets/hook";` (and so on).
// ═══════════════════════════════════════════════════════════════════════════
import { makeStub } from "./sets/_stub";
export { PLACE as HOOK } from "./sets/hook";
export { PLACE as SIM } from "./sets/sim";
export { PLACE as DEAL } from "./sets/deal";
export const TARGETS = makeStub("targets", "cream", "#C9A46A");
export const PAYMENT = makeStub("payment", "dark", "#8A8F96");
export { PLACE as CATCH } from "./sets/catch";
export { PLACE as FAIR } from "./sets/fair";
export { PLACE as VERDICT } from "./sets/verdict";
