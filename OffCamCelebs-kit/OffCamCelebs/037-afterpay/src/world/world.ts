// ═════════════════════════════════════════════════════════════════════════════════════════════
// THE WORLD (THE PAYOUTS; engine v2, 2026-11-18). ONE full-frame scene, ONE perspective camera, drawn once per frame into
// ONE canvas, retargeted to the MEASURED look of @moneydecoded.au (OffCamCelebs/styles/payouts-moneydecoded-study/:
// README R1–R32 and "Render targets" in rules_look_and_5.md). Timur rejected the first 3-D cut ("does not look like I want
// it to look… make it as similar to the reference videos as possible"): it was BLACK with blown highlights, a mirror floor
// and glowing outlines; theirs is a LIT DARK-GREY STUDIO.
//   · THE STUDIO (R1–R3): base tone #201f21, neutral; the background and the fog are that grey (distance falls to grey, not
//     to black); a FLOOR and a BACKDROP wall behind every place, lit top to bottom (a soft sweep on the wall from the rig's
//     `back` spot, a visible soft horizon where they meet);
//   · THE FLOOR (R4): rough (#2a292b, roughness 0.85); its reflection is a heavily BLURRED pool (the mirrored scene read
//     from a low mip), never a readable mirror image;
//   · STAGES: "dark" (above), "light" (a pale grey seamless table: R5), "card" (a turn card: black, no floor, no wall: R27);
//   · CUTS, NOT TRAVELS (R23): only the place on screen is in the scene; every place stands at the origin; a place is lit
//     from its first frame; there is never a black frame between places;
//   · POST: depth of field focused on the shot's subject (R26; the camera key carries the focus point), a wide soft bloom on
//     self-lit things only, a gentle vignette, NO grain (R3), then tone mapping;
//   · MOTION BLUR (R26): on frames where the camera OR the acting is fast, the frame is the average of BLUR_N sub-frame
//     renders across a 0.45-frame shutter, the place's acting sub-sampled with the camera.
// A pure function of the frame: `drawWorld(host, f)` may be called for any frame in any order.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { BokehPass } from "three/examples/jsm/postprocessing/BokehPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { PLACES, CAM, placeAt } from "./film3d";
import { poseAt, speedAt, sub, len, type Vec } from "./cam";
import type { Built, Lights, Spot, Stage } from "./place";
import { prep, BACKDROP_Z } from "./place";

export const W = 1080, H = 1920;
/** the look's constants (the study's "Render targets"; each was tuned on stills and MEASURED: scratchpad/lookmeasure.py) */
export const LOOK = {
  // the stages: the base tone (background and fog), the floor, the backdrop
  // `self`: how much of the base tone the floor and the backdrop give off unlit, so nothing in the studio is ever darker
  //   than its base grey (the references' darkest studio pixels sit at the base tone, not at black)
  dark: { base: "#151416", floor: "#1d1c1e", wall: "#2a292b", self: 0.1, fogNear: 3600, fogFar: 14000 },
  light: { base: "#b4b3b0", floor: "#c6c5c2", wall: "#bcbbb8", self: 0.5, fogNear: 5000, fogFar: 16000 },
  card: { base: "#000000", floor: "#000000", wall: "#000000", self: 0, fogNear: 20000, fogFar: 40000 },
  floorRough: 0.9, floorSpec: 0.22, env: 0.9, envMetal: 1.0,
  hemiSky: "#e9e6e7", hemiGround: "#4a4849",
  // bloom: wide and soft, on self-lit things only (print and letters sit just above the threshold)
  bloom: 0.34, bloomRadius: 0.5, bloomAt: 0.92,
  vignette: 0.3, grain: 0, exposure: 1.0,
  // depth of field: blur ∝ |distance − focus| × aperture (uv units), capped
  aperture: 2.2e-5, maxBlur: 0.012,
  // motion blur: on when the picture moves faster than blurAt (screen fraction a frame) or the place says its acting is fast
  blurAt: 0.012, blurN: 8, shutter: 0.45,
  // the floor's blurred reflection: the mip level it is read from (higher = softer)
  mirrorLod: 5.6,
};

let R: THREE.WebGLRenderer | null = null;
let composer: EffectComposer, finish: ShaderPass, bloom: UnrealBloomPass, bokeh: BokehPass;
const bk = () => bokeh.uniforms as Record<string, { value: number }>;
let scene: THREE.Scene, camera: THREE.PerspectiveCamera, envTex: THREE.Texture;
let hemi: THREE.HemisphereLight, key: THREE.SpotLight, rim: THREE.SpotLight, aux: THREE.SpotLight, back: THREE.SpotLight, accent: THREE.PointLight;
let floorMat: THREE.MeshPhysicalMaterial, wallMat: THREE.MeshStandardMaterial, floor: THREE.Mesh, wall: THREE.Mesh, mirror: THREE.Mesh, mirrorRT: THREE.WebGLRenderTarget;
const built = new Map<number, Built>();
const stdMats = new Set<THREE.MeshStandardMaterial>();
let out2d: HTMLCanvasElement | null = null;

const FinishShader = {
  uniforms: { tDiffuse: { value: null }, vig: { value: 0.3 }, grain: { value: 0 }, seed: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float vig; uniform float grain; uniform float seed; varying vec2 vUv;
    float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      // a GENTLE vignette (centre ÷ corners 1.7–3.3 in the references): wide, never to black
      vec2 q = (vUv - 0.5) * vec2(0.92, 1.0);
      float v = 1.0 - vig * smoothstep(0.30, 1.0, length(q) * 1.45);
      vec3 col = c.rgb * v;
      if (grain > 0.0) col += (hash(vUv * vec2(1080.0, 1920.0) + seed * 17.0) - 0.5) * grain;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`,
};

// the floor's reflection: the mirrored scene, read BLURRED (a low mip of the half-size target) so no image is readable
const mirrorMaterial = () => new THREE.ShaderMaterial({
  name: "WorldFloorPool", transparent: true, depthWrite: false,
  uniforms: { tRefl: { value: null as THREE.Texture | null }, res: { value: new THREE.Vector2(W, H) }, strength: { value: 0.08 },
    fadeC: { value: new THREE.Vector2() }, fadeR: { value: 2600 }, eye: { value: new THREE.Vector3() }, lod: { value: LOOK.mirrorLod } },
  vertexShader: `varying vec3 vWorld; void main() { vWorld = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tRefl; uniform vec2 res; uniform float strength; uniform vec2 fadeC; uniform float fadeR; uniform vec3 eye; uniform float lod; varying vec3 vWorld;
    void main() {
      vec2 uv = gl_FragCoord.xy / res;
      float b = 26.0 / res.y;
      vec4 s = textureLod(tRefl, uv, lod) * 0.4;
      s += (textureLod(tRefl, uv + vec2(b, 0.0), lod) + textureLod(tRefl, uv - vec2(b, 0.0), lod)
          + textureLod(tRefl, uv + vec2(0.0, b * 1.5), lod) + textureLod(tRefl, uv - vec2(0.0, b * 1.5), lod)) * 0.15;
      vec3 v = normalize(eye - vWorld);
      float fres = mix(0.45, 1.0, pow(1.0 - clamp(v.y, 0.0, 1.0), 2.0));
      float a = strength * fres * (1.0 - smoothstep(0.35, 1.0, length(vWorld.xz - fadeC) / fadeR));
      gl_FragColor = vec4(s.rgb * a, 0.0);
    }`,
  blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
});

const spot = (shadow: boolean) => {
  const l = new THREE.SpotLight(0xffffff, 0, 0, 0.6, 0.7, 0);
  l.castShadow = shadow;
  if (shadow) {
    l.shadow.mapSize.set(2048, 2048);
    l.shadow.bias = -0.0006; l.shadow.normalBias = 1.2; l.shadow.radius = 9; l.shadow.blurSamples = 16;
    l.shadow.camera.near = 200; l.shadow.camera.far = 9000;
  }
  scene.add(l, l.target);
  return l;
};

const init = () => {
  const canvas = document.createElement("canvas");
  R = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, preserveDrawingBuffer: true, powerPreference: "high-performance" });
  R.setPixelRatio(1);
  R.setSize(W, H, false);
  R.outputColorSpace = THREE.SRGBColorSpace;
  // ★ LINEAR tone mapping: the Khronos Neutral curve SUBTRACTS a toe (≈ 0.0125 at the studio's base grey), which crushed
  //   the dark greys to purple-black (measured 2026-11-18: the backdrop read 8/255 where its base tone is 32/255)
  R.toneMapping = THREE.LinearToneMapping;
  R.toneMappingExposure = LOOK.exposure;
  R.shadowMap.enabled = true;
  R.shadowMap.type = THREE.PCFSoftShadowMap;
  R.localClippingEnabled = true;
  // the haze is plain: colour falls to the fog's colour (the stage's base tone) with distance
  THREE.ShaderChunk.fog_fragment = `#ifdef USE_FOG
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  #endif`;
  const pm = new THREE.PMREMGenerator(R);
  envTex = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  pm.dispose();

  scene = new THREE.Scene();
  scene.background = new THREE.Color(LOOK.dark.base);
  scene.fog = new THREE.Fog(new THREE.Color(LOOK.dark.base), LOOK.dark.fogNear, LOOK.dark.fogFar);
  camera = new THREE.PerspectiveCamera(45, W / H, 20, 40000);

  hemi = new THREE.HemisphereLight(new THREE.Color(LOOK.hemiSky), new THREE.Color(LOOK.hemiGround), 0.55);
  scene.add(hemi);
  key = spot(true); rim = spot(false); aux = spot(false); back = spot(false);
  accent = new THREE.PointLight(0xffffff, 0, 0, 0);
  scene.add(accent);

  // THE STUDIO: one floor, one backdrop wall behind the place
  // a PHYSICAL material so its specular can be turned down: the rim and aux spots stand behind the place and rake the floor
  //   toward the camera; at full strength their sheen, not the key's pool, set the floor's level (measured)
  floorMat = new THREE.MeshPhysicalMaterial({ color: new THREE.Color(LOOK.dark.floor), roughness: LOOK.floorRough, metalness: 0, envMapIntensity: 0, specularIntensity: LOOK.floorSpec });
  floor = new THREE.Mesh(new THREE.PlaneGeometry(60000, 60000), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  floor.userData.isFloor = true;
  wallMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(LOOK.dark.wall), roughness: 1, metalness: 0, envMapIntensity: 0 });
  wall = new THREE.Mesh(new THREE.PlaneGeometry(60000, 16000), wallMat);
  wall.position.set(0, 8000, BACKDROP_Z);
  wall.userData.isFloor = true;   // never mirrored
  mirror = new THREE.Mesh(new THREE.PlaneGeometry(60000, 60000), mirrorMaterial());
  mirror.rotation.x = -Math.PI / 2;
  mirror.position.set(0, 0.6, 0);
  mirror.userData.isFloor = true;
  mirror.renderOrder = 1;
  scene.add(floor, wall, mirror);
  mirrorRT = new THREE.WebGLRenderTarget(W / 2, H / 2, { type: THREE.HalfFloatType, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });

  composer = new EffectComposer(R, new THREE.WebGLRenderTarget(W, H, { type: THREE.HalfFloatType, samples: 4 }));
  composer.setPixelRatio(1);
  composer.setSize(W, H);
  composer.addPass(new RenderPass(scene, camera));
  bokeh = new BokehPass(scene, camera, { focus: 2000, aperture: LOOK.aperture, maxblur: LOOK.maxBlur });
  composer.addPass(bokeh);
  bloom = new UnrealBloomPass(new THREE.Vector2(W / 2, H / 2), LOOK.bloom, LOOK.bloomRadius, LOOK.bloomAt);
  composer.addPass(bloom);
  finish = new ShaderPass(FinishShader);
  composer.addPass(finish);
  composer.addPass(new OutputPass());
};

/** build place i on first need; its materials wired to the environment */
const ensurePlace = (i: number) => {
  let b = built.get(i);
  if (!b) {
    b = PLACES[i].build();
    prep(b.group);
    b.group.traverse((n) => {
      const mesh = n as THREE.Mesh;
      if (!mesh.isMesh) return;
      for (const m of (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) as THREE.MeshStandardMaterial[]) {
        if (!m.isMeshStandardMaterial) continue;
        if (m.userData.envBase === undefined) m.userData.envBase = m.envMapIntensity;
        if (!m.envMap) { m.envMap = envTex; m.needsUpdate = true; }
        stdMats.add(m);
      }
    });
    scene.add(b.group);
    built.set(i, b);
  }
  return b;
};

const v3 = new THREE.Vector3();
const setSpot = (l: THREE.SpotLight, s: Spot | undefined) => {
  if (!s) { l.intensity = 0; return; }
  l.position.set(...s.pos);
  l.target.position.set(...s.at);
  l.target.updateMatrixWorld();
  l.intensity = s.i;
  l.color.set(s.color ?? "#ffffff");
  l.angle = s.angle ?? 0.6;
  l.penumbra = s.soft ?? 0.7;
};
const setStage = (st: Stage) => {
  const S = LOOK[st];
  (scene.background as THREE.Color).set(S.base);
  const fog = scene.fog as THREE.Fog;
  fog.color.set(S.base); fog.near = S.fogNear; fog.far = S.fogFar;
  floorMat.color.set(S.floor); wallMat.color.set(S.wall);
  floorMat.emissive.set(S.base).multiplyScalar(S.self); wallMat.emissive.set(S.base).multiplyScalar(S.self);
  floor.visible = wall.visible = mirror.visible = st !== "card";
};
const setLights = (L: Lights, st: Stage) => {
  hemi.intensity = L.amb ?? (st === "card" ? 0 : 0.2);
  setSpot(key, L.key); setSpot(rim, L.rim); setSpot(aux, L.aux); setSpot(back, L.back);
  if (L.accent) { accent.position.set(...L.accent.pos); accent.color.set(L.accent.color); accent.intensity = L.accent.i; } else accent.intensity = 0;
  const u = (mirror.material as THREE.ShaderMaterial).uniforms;
  (u.fadeC.value as THREE.Vector2).set(L.focus?.[0] ?? 0, L.focus?.[1] ?? 0);
  u.fadeR.value = L.reach ?? 2600;
  u.strength.value = st === "card" ? 0 : L.reflect ?? 0.08;
  const env = L.env ?? 1;
  for (const m of stdMats) m.envMapIntensity = (m.userData.envBase as number) * (m.metalness > 0.5 ? LOOK.envMetal : LOOK.env) * env;
};

const reflectM = new THREE.Matrix4().set(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
const clipBelow = [new THREE.Plane(new THREE.Vector3(0, -1, 0), 0.5)];
const drawMirror = (r: THREE.WebGLRenderer) => {
  const u = (mirror.material as THREE.ShaderMaterial).uniforms;
  if (u.strength.value <= 0.001 || !mirror.visible) return;
  const hidden: THREE.Object3D[] = [];
  scene.traverse((o) => { if (o.userData.isFloor && o.visible) { hidden.push(o); o.visible = false; } });
  const shadows = key.castShadow;
  key.castShadow = false;
  const bg = scene.background;
  scene.background = null;
  scene.matrixAutoUpdate = false;
  scene.matrix.copy(reflectM);
  scene.updateMatrixWorld(true);
  const prev = r.clippingPlanes;
  r.clippingPlanes = clipBelow;
  r.setRenderTarget(mirrorRT);
  r.setClearColor(0x000000, 1);
  r.clear(true, true, true);
  r.render(scene, camera);
  r.setRenderTarget(null);
  r.clippingPlanes = prev;
  scene.matrix.identity();
  scene.matrixAutoUpdate = true;
  scene.updateMatrixWorld(true);
  scene.background = bg;
  key.castShadow = shadows;
  for (const o of hidden) o.visible = true;
  u.tRefl.value = mirrorRT.texture;
  (u.eye.value as THREE.Vector3).copy(camera.position);
};

const setCamera = (f: number) => {
  const p = poseAt(CAM, f);
  camera.position.set(...p.pos);
  camera.up.set(0, 1, 0);
  camera.lookAt(v3.set(...p.look));
  if (p.roll) camera.rotateZ((p.roll * Math.PI) / 180);
  camera.fov = p.fov;
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld(true);
  // the lens is focused on the shot's subject: its distance along the view axis
  const d = sub(p.focus as Vec, p.pos), look = sub(p.look, p.pos), L = Math.max(1, len(look));
  bk().focus.value = Math.max(50, (d[0] * look[0] + d[1] * look[1] + d[2] * look[2]) / L);
};

export type WorldStats = { ms: number; samples: number; place: string };
export const worldStats: WorldStats = { ms: 0, samples: 1, place: "" };

/** draw frame f into `host` (the world layer's element) */
export const drawWorld = (host: HTMLElement, f: number) => {
  const t0 = performance.now();
  if (!R) init();
  const r = R!;
  if (!out2d) {
    out2d = document.createElement("canvas");
    out2d.width = W; out2d.height = H;
    out2d.dataset.world = "1";
    out2d.style.cssText = "position:absolute;left:0;top:0;width:1080px;height:1920px;display:block;background:#000";
  }
  if (out2d.parentElement !== host) host.appendChild(out2d);

  // ONLY the place on screen is in the scene (hard cuts: R23)
  const cur = placeAt(f);
  for (const [i, b] of built) if (i !== cur) b.group.visible = false;
  const place = PLACES[cur], b = ensurePlace(cur);
  b.group.visible = true;
  const stage = place.stage ?? "dark";
  setStage(stage);
  setLights(place.lights(f), stage);
  worldStats.place = place.id;

  const dbg = (window as unknown as { __world?: Partial<Record<"bloom" | "bloomRadius" | "bloomAt" | "vignette" | "grain" | "exposure" | "aperture" | "maxBlur", number>> & { noBlur?: boolean; noDof?: boolean } }).__world ?? {};
  bloom.strength = dbg.bloom ?? LOOK.bloom; bloom.radius = dbg.bloomRadius ?? LOOK.bloomRadius; bloom.threshold = dbg.bloomAt ?? LOOK.bloomAt;
  finish.uniforms.vig.value = stage === "card" ? 0 : dbg.vignette ?? LOOK.vignette;
  finish.uniforms.grain.value = dbg.grain ?? LOOK.grain;
  finish.uniforms.seed.value = (f % 97) + 1;
  bokeh.enabled = !dbg.noDof && stage !== "card";
  bk().aperture.value = dbg.aperture ?? LOOK.aperture;
  bk().maxblur.value = dbg.maxBlur ?? LOOK.maxBlur;
  bk().nearClip.value = camera.near; bk().farClip.value = camera.far;
  r.toneMappingExposure = dbg.exposure ?? LOOK.exposure;

  // motion blur: the camera OR the acting is fast (never across a cut: the sub-frames stay inside this place's window)
  const fast = !dbg.noBlur && (speedAt(CAM, f) > LOOK.blurAt || !!place.blur?.(f));
  const n = fast ? LOOK.blurN : 1;
  const ctx = out2d.getContext("2d")!;
  for (let s = 0; s < n; s++) {
    let fs = n === 1 ? f : f + ((s + 0.5) / n - 0.5) * LOOK.shutter;
    if (placeAt(fs) !== cur) fs = f;
    b.update(fs);
    setCamera(fs);
    scene.updateMatrixWorld(true);
    drawMirror(r);
    r.shadowMap.needsUpdate = true;
    composer.render();
    // the running average of the sub-frames (the first is drawn opaque)
    ctx.globalAlpha = 1 / (s + 1);
    ctx.drawImage(r.domElement, 0, 0, W, H);
  }
  ctx.globalAlpha = 1;
  worldStats.ms = performance.now() - t0;
  worldStats.samples = n;
};
