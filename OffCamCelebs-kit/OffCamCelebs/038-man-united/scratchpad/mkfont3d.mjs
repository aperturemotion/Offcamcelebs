// mkfont3d.mjs — Archivo's outlines as three.js typeface JSON, for SOLID 3-D LETTERS (TextGeometry): the turn cards' words
// are extruded letters in the scene, never CSS text (Timur, 2026-11-18: "No 2D visuals, all 3D").
//   node scratchpad/mkfont3d.mjs   → src/three/fonts/archivo500.json, archivo800i.json
// The outlines come from the WOFF files in scratchpad/fonts3d/ (Archivo, SIL Open Font License; from @fontsource/archivo).
// Same conversion as three's TTFLoader (font units → 1000-resolution typeface), limited to the glyphs a card can need.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { default: opentype } = await import(pathToFileURL(path.join(ROOT, "node_modules/three/examples/jsm/libs/opentype.module.js")).href);
const KEEP = "=+" + " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,'’!?$%&-:|";
for (const [src, out] of [["archivo-latin-500-normal.woff", "archivo500.json"], ["archivo-latin-800-italic.woff", "archivo800i.json"], ["archivo-latin-800-normal.woff", "archivo800.json"], ["archivo-latin-300-italic.woff", "archivo300i.json"]]) {
  const buf = fs.readFileSync(path.join(ROOT, "scratchpad/fonts3d", src));
  const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
  const scale = 100000 / ((font.unitsPerEm || 2048) * 72), r = Math.round;
  const glyphs = {};
  for (const ch of KEEP) {
    const g = font.charToGlyph(ch);
    if (!g || (g.index === 0 && ch !== " ")) throw new Error(`mkfont3d: ${src} has no glyph for "${ch}"`);
    const tok = { ha: r(g.advanceWidth * scale), x_min: r((g.xMin ?? 0) * scale), x_max: r((g.xMax ?? 0) * scale), o: "" };
    for (const c of g.path.commands) {
      const t = c.type.toLowerCase() === "c" ? "b" : c.type.toLowerCase();
      tok.o += t + " ";
      if (c.x !== undefined && c.y !== undefined) tok.o += r(c.x * scale) + " " + r(c.y * scale) + " ";
      if (c.x1 !== undefined && c.y1 !== undefined) tok.o += r(c.x1 * scale) + " " + r(c.y1 * scale) + " ";
      if (c.x2 !== undefined && c.y2 !== undefined) tok.o += r(c.x2 * scale) + " " + r(c.y2 * scale) + " ";
    }
    glyphs[ch] = tok;
  }
  const json = { glyphs, familyName: font.getEnglishName("fullName"), ascender: r(font.ascender * scale), descender: r(font.descender * scale),
    underlinePosition: font.tables.post.underlinePosition, underlineThickness: font.tables.post.underlineThickness,
    boundingBox: { xMin: font.tables.head.xMin, xMax: font.tables.head.xMax, yMin: font.tables.head.yMin, yMax: font.tables.head.yMax }, resolution: 1000 };
  fs.writeFileSync(path.join(ROOT, "src/three/fonts", out), JSON.stringify(json));
  console.log(out, Object.keys(glyphs).length, "glyphs", (JSON.stringify(json).length / 1024).toFixed(0) + " KB", json.familyName);
}
