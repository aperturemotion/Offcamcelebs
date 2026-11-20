// worldcheck.mjs — THE WORLD CHECKS (P14: "text fits the surface it is on, always" / "nothing clips through anything").
//   node scratchpad/worldcheck.mjs [text|pass|support|all] [--place <id>] [--tstep 2] [--pstep 1] [--sstep 3]
// Bundles src/world/checkrun.ts for Node and runs, over every place of the film:
//   · the canaries first (each check must fire on a planted fault and stay silent without it);
//   · TEXT-ON-SURFACE: every text against the face it is registered on; unregistered texts are faults too;
//   · PASS-THROUGH: every pair of solids that move relative to each other, real triangle crossings deeper than 1 unit;
//     joins name two MESHES only (P17: a join on a group is refused when the place is built);
//   · ★ P17 SUPPORT: nothing floats. Every body stands on the floor, rests on a held body's top, or is declared hung /
//     mounted (and touching, verified) or falling (≤ 20 frames). check.ts `supportCheck` has the rules.
// Exit code 1 on any hit. scratchpad/render.mjs runs it (so --check and a render both refuse on a hit).
import * as esbuild from "esbuild";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const r = (...p) => path.join(ROOT, ...p);
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const mode = ["text", "pass", "support", "all"].includes(process.argv[2]) ? process.argv[2] : "all";
const out = r(".build/worldcheck.mjs");
await esbuild.build({
  bundle: true, entryPoints: [r("src/world/checkrun.ts")], outfile: out, format: "esm", platform: "node", logLevel: "warning", target: "es2020",
  jsx: "automatic", jsxImportSource: "preact", loader: { ".json": "json" },
  alias: { react: "preact/compat", "react-dom": "preact/compat", "react/jsx-runtime": "preact/jsx-runtime", remotion: r("src/shim/remotion.tsx"), "@remotion/layout-utils": r("src/shim/layout-utils.ts") },
});
const W = await import(pathToFileURL(out).href + `?t=${Date.now()}`);
const bad = W.canaries();
if (bad.length) { console.error("WORLD CHECK: a canary failed, so the checks prove nothing:\n" + bad.map((b) => "  " + b).join("\n")); process.exit(2); }
console.log("canaries ok (an overhanging word, an unregistered text and a sunk part fire; a fitting word, a resting part and a declared join do not;");
console.log("  P17: a join on a group or on a mesh with meshes under it is refused, a 30-frame fall is refused; a sign 40 over its posts,");
console.log("  a sign DECLARED mounted 40 over its post, a ring hung 3 short and a box in mid-air fire; a sign on posts that run into it,");
console.log("  a ring hanging on its hook and a box declared falling do not)");
const places = W.filmPlaces(arg("--place"));
let fail = 0;
const pad = (s, n) => String(s).padEnd(n).slice(0, n);
if (mode === "text" || mode === "all") {
  const t0 = Date.now(), T = W.textCheck(places, +arg("--tstep", 2));
  console.log(`\nTEXT-ON-SURFACE: ${T.texts} registered texts/plates, ${T.free} free-standing, ${T.samples} frames (${((Date.now() - t0) / 1000).toFixed(0)} s)`);
  for (const u of T.unregistered) console.log(`  UNREGISTERED  ${pad(u.place, 8)} ${u.text}`);
  for (const h of T.hits.sort((a, b) => b.over - a.over)) console.log(`  OVERHANG  ${pad(h.place, 8)} ${pad(h.text, 34)} on ${pad(h.surface, 44)} ${h.side} by ${h.over.toFixed(1)} at f${h.frame} (${h.frames} frame(s))`);
  console.log(`  → ${T.hits.length} overhang(s), ${T.unregistered.length} unregistered`);
  fail += T.hits.length + T.unregistered.length;
}
if (mode === "pass" || mode === "all") {
  const t0 = Date.now(), P = W.passCheck(places, +arg("--pstep", 1));   // ★ P17: every frame (a prop crosses a door in one frame)
  console.log(`\nPASS-THROUGH: ${P.meshes} solids in ${P.parts} rigid parts, ${P.samples} frames, ${P.tested} close pairs tested, ${P.declared} declared (${((Date.now() - t0) / 1000).toFixed(0)} s)`);
  for (const h of P.hits) console.log(`  CROSS  ${pad(h.place, 8)} ${pad(h.a, 46)} × ${pad(h.b, 46)} ≈${h.depth} deep at f${h.frame} (${h.frames} frame(s))`);
  console.log(`  → ${P.hits.length} crossing pair(s)`);
  fail += P.hits.length;
}
if (mode === "support" || mode === "all") {
  const t0 = Date.now(), S = W.supportCheck(places, +arg("--sstep", 3));
  console.log(`\nSUPPORT: ${S.samples} frames, ${S.bodies} body-frames, ${S.declared} declared holds (hangs/mounted), ${S.falling} body-frames falling (${((Date.now() - t0) / 1000).toFixed(0)} s)`);
  const order = { HOLD: 0, FLOAT: 1, SINK: 2 };
  for (const h of S.hits.sort((a, b) => order[a.kind] - order[b.kind] || a.place.localeCompare(b.place) || a.frame - b.frame))
    console.log(`  ${pad(h.kind, 5)}  ${pad(h.place, 8)} ${pad(h.part, 60)}${h.by ? ` on ${pad(h.by, 40)}` : ""} gap ${h.gap >= 1e8 ? "far" : h.gap.toFixed(1)} at f${h.frame} (${h.frames} frame(s))${h.why ? `  "${h.why}"` : ""}`);
  console.log(`  → ${S.hits.length} support fault(s)`);
  fail += S.hits.length;
}
if (fail) { console.error(`\nWORLD CHECK FAILED: ${fail} fault(s).`); process.exit(1); }
console.log("\nWORLD CHECK CLEAN.");
