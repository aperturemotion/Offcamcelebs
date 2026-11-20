// BRAND ARTWORK ON 3-D OBJECTS (P16, Timur 2026-11-19: "logos everywhere… people need to understand what the objects
// are"). The real artwork (assets/brand/*.png, sources in assets/brand/SOURCES.txt) is printed INTO a texture on a solid
// object, never stuck flat on the frame. The driver decodes every file before the first frame (src/hf/driver.tsx
// HOOK_PHOTOS); a texture made before its image had decoded refreshes itself on the next draw.
import * as THREE from "three";
import { imageOf } from "../../three/stage";

export const BRAND = { crest: "assets/brand/crest.png", usflag: "assets/brand/usflag.png", espn: "assets/brand/espn.png" } as const;
export type BrandKey = keyof typeof BRAND;

const cache = new Map<string, THREE.Texture>();
/** the texture of a brand file (cached); sRGB, mip-mapped, anisotropic */
export const brandTex = (key: BrandKey) => {
  let t = cache.get(key);
  if (t) return t;
  // the world checks run in Node (scratchpad/worldcheck.mjs): no images there, and the geometry is all they need
  if (typeof Image === "undefined") { t = new THREE.Texture(); cache.set(key, t); return t; }
  const im = imageOf(BRAND[key]);
  t = new THREE.Texture(im);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  if (im.complete && im.naturalWidth > 0) t.needsUpdate = true;
  else im.addEventListener("load", () => { t!.needsUpdate = true; }, { once: true });
  cache.set(key, t);
  return t;
};
/** a printed face: the artwork under the studio's light (it shades with the object, it is not a lamp) */
export const printMat = (key: BrandKey, o: { alphaTest?: number; rough?: number; emissive?: number } = {}) => {
  const map = brandTex(key);
  return new THREE.MeshStandardMaterial({
    map, transparent: false, alphaTest: o.alphaTest ?? 0, roughness: o.rough ?? 0.45, metalness: 0.05,
    emissive: new THREE.Color("#ffffff"), emissiveMap: map, emissiveIntensity: o.emissive ?? 0.18,
  });
};
