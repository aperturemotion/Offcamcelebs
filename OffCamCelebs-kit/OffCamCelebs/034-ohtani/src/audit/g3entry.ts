// the AUDIT build's entry (scripts/build.mjs --audit → .build/film-audit.js): the film exactly as shipped, plus RULE 54's
// per-view checks (g3audit.ts). Never referenced by index.html.
import "../hf/driver";
import { install } from "./g3audit";

install();
