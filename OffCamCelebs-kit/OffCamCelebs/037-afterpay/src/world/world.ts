// ═════════════════════════════════════════════════════════════════════════════════════════════
// THE WORLD (THE PAYOUTS, rule P12; 2026-11-18, first film 037): ONE full-frame scene for the whole film, ONE perspective
// camera, drawn once per frame into ONE canvas. Timur, on the first 037 cut: "It's a complete 3D world, not some 2D
// bullshit like we used to do on OffCamCelebs." Nothing here slides or scales a picture: a pan is the camera moving.
//   · the FLOOR is real: a dark, slightly glossy plane that takes the spots' pools and shadows and carries a planar
//     reflection that fades with distance (the scene is drawn mirrored about y = 0 into a half-size target);
//   · HAZE: black fog, so anything far falls to black and the places never see each other;
//   · the LIGHT RIG is fixed (a shadow-casting key spot, a rim spot, an aux spot, an accent point light, a hemisphere fill);
//     each frame the active place sets every light's position, colour and strength (light acts), so no shader recompiles;
//   · POST: bloom on anything brighter than white (lit print, lamps, emissive letters), a vignette, faint grain, and the
//     dips round the cuts; then tone mapping;
//   · MOTION BLUR: while the camera's picture moves faster than BLUR_AT a frame, the frame is the average of BLUR_N
//     sub-frame renders across a 0.5-frame shutter; slow shots are one render.
// A pure function of the frame: `drawWorld(host, f)` may be called for any frame in any order.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { PLACES, ORIGINS, CAM, WINDOWS, litPlaceAt } from "./film3d";
import { poseAt, fadeAt, speedAt, add, type Vec } from "./cam";
import type { Built, Lights, Spot } from "./place";
import { prep } from "./place";

export const W = 1080, H = 1920;
export const LOOK = {
  fogNear: 3200, fogFar: 9500, floor: "#0C0C0E", floorRough: 0.42, env: 0.42, envMetal: 1.0,
  bloom: 0.36, bloomRadius: 0.5, bloomAt: 1.12, vignette: 0.62, grain: 0.028, exposure: 1.0,
  blurAt: 0.03, blurN: 5, shutter: 0.5, margin: 150,
};

let R: THREE.WebGLRenderer | null = null;
let composer: EffectComposer, finish: ShaderPass, bloom: UnrealBloomPass;
let scene: THREE.Scene, camera: THREE.PerspectiveCamera, envTex: THREE.Texture;
let hemi: THREE.HemisphereLight, key: THREE.SpotLight, rim: THREE.SpotLight, aux: THREE.SpotLight, accent: THREE.PointLight;
let floorMat: THREE.MeshStandardMaterial, mirror: THREE.Mesh, mirrorRT: THREE.WebGLRenderTarget;
const built = new Map<number, Built>();
const stdMats = new Set<THREE.MeshStandardMaterial>();
let out2d: HTMLCanvasElement | null = null;

const FinishShader = {
  uniforms: { tDiffuse: { value: null }, vig: { value: 0.6 }, grain: { value: 0.03 }, fade: { value: 1 }, seed: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float vig; uniform float grain; uniform float fade; uniform float seed; varying vec2 vUv;
    float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 q = (vUv - 0.5) * vec2(0.9, 1.0);
      float v = 1.0 - vig * smoothstep(0.28, 0.86, length(q) * 1.25);
      float n = hash(vUv * vec2(1080.0, 1920.0) + seed * 17.0) - 0.5;
      vec3 col = c.rgb * v * fade;
      col += n * grain * (0.25 + 0.75 * smoothstep(0.0, 0.25, max(col.r, max(col.g, col.b)) + 0.04));
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`,
};

const mirrorMaterial = () => new THREE.ShaderMaterial({
  name: "WorldFloorMirror", transparent: true, depthWrite: false,
  uniforms: { tRefl: { value: null as THREE.Texture | null }, res: { value: new THREE.Vector2(W, H) }, strength: { value: 0.5 },
    fadeC: { value: new THREE.Vector2() }, fadeR: { value: 2600 }, eye: { value: new THREE.Vector3() } },
  vertexShader: `varying vec3 vWorld; void main() { vWorld = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tRefl; uniform vec2 res; uniform float strength; uniform vec2 fadeC; uniform float fadeR; uniform vec3 eye; varying vec3 vWorld;
    void main() {
      vec2 uv = gl_FragCoord.xy / res;
      // a glossy floor, not a mirror: a small blur that grows with distance from the eye
      float d = length(vWorld - eye);
      float b = (1.2 + d * 0.0016) / res.y;
      vec4 s = texture2D(tRefl, uv) * 0.28;
      s += texture2D(tRefl, uv + vec2(b, 0.0)) * 0.12 + texture2D(tRefl, uv - vec2(b, 0.0)) * 0.12;
      s += texture2D(tRefl, uv + vec2(0.0, b * 1.6)) * 0.12 + texture2D(tRefl, uv - vec2(0.0, b * 1.6)) * 0.12;
      s += texture2D(tRefl, uv + vec2(b, b)) * 0.06 + texture2D(tRefl, uv - vec2(b, b)) * 0.06 + texture2D(tRefl, uv + vec2(-b, b)) * 0.06 + texture2D(tRefl, uv + vec2(b, -b)) * 0.06;
      // grazing views reflect more (Fresnel), and it fades out round the place
      vec3 v = normalize(eye - vWorld);
      float fres = mix(0.35, 1.0, pow(1.0 - clamp(v.y, 0.0, 1.0), 2.0));
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
    l.shadow.bias = -0.0006; l.shadow.normalBias = 1.2; l.shadow.radius = 5; l.shadow.blurSamples = 12;
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
  R.toneMapping = THREE.NeutralToneMapping;
  R.toneMappingExposure = LOOK.exposure;
  R.shadowMap.enabled = true;
  R.shadowMap.type = THREE.PCFSoftShadowMap;
  R.localClippingEnabled = true;
  R.setClearColor(0x000000, 1);
  // the world's haze is plain: colour falls to the fog's black with distance (the first cut's stage patched this chunk for
  // its 2-D background views; that path is not used by this film)
  THREE.ShaderChunk.fog_fragment = `#ifdef USE_FOG
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  #endif`;
  const pm = new THREE.PMREMGenerator(R);
  envTex = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  pm.dispose();

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  scene.fog = new THREE.Fog(0x000000, LOOK.fogNear, LOOK.fogFar);
  camera = new THREE.PerspectiveCamera(50, W / H, 20, 30000);

  hemi = new THREE.HemisphereLight(0xb8c4d8, 0x050506, 0.15);
  scene.add(hemi);
  key = spot(true); rim = spot(false); aux = spot(false);
  accent = new THREE.PointLight(0xffffff, 0, 0, 0);
  scene.add(accent);

  // THE FLOOR: one plane under every place
  const span = ORIGINS[ORIGINS.length - 1][0] - ORIGINS[0][0] + 60000;
  floorMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(LOOK.floor), roughness: LOOK.floorRough, metalness: 0.0, envMapIntensity: 0 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(span, 60000), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set((ORIGINS[0][0] + ORIGINS[ORIGINS.length - 1][0]) / 2, 0, 0);
  floor.receiveShadow = true;
  floor.userData.isFloor = true;
  mirror = new THREE.Mesh(new THREE.PlaneGeometry(span, 60000), mirrorMaterial());
  mirror.rotation.x = -Math.PI / 2;
  mirror.position.set(floor.position.x, 0.6, 0);
  mirror.userData.isFloor = true;
  mirror.renderOrder = 1;
  scene.add(floor, mirror);
  mirrorRT = new THREE.WebGLRenderTarget(W / 2, H / 2, { samples: 4, type: THREE.HalfFloatType });

  composer = new EffectComposer(R, new THREE.WebGLRenderTarget(W, H, { type: THREE.HalfFloatType, samples: 4 }));
  composer.setPixelRatio(1);
  composer.setSize(W, H);
  composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new THREE.Vector2(W / 2, H / 2), LOOK.bloom, LOOK.bloomRadius, LOOK.bloomAt);
  composer.addPass(bloom);
  finish = new ShaderPass(FinishShader);
  composer.addPass(finish);
  composer.addPass(new OutputPass());
};

/** build place i on first need: its group at its origin, its materials wired to the environment */
const ensurePlace = (i: number) => {
  let b = built.get(i);
  if (!b) {
    b = PLACES[i].build();
    prep(b.group);
    b.group.position.set(...ORIGINS[i]);
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
const setSpot = (l: THREE.SpotLight, s: Spot | undefined, o: Vec) => {
  if (!s) { l.intensity = 0; return; }
  l.position.set(...add(s.pos, o));
  l.target.position.set(...add(s.at, o));
  l.target.updateMatrixWorld();
  l.intensity = s.i;
  l.color.set(s.color ?? "#ffffff");
  l.angle = s.angle ?? 0.6;
  l.penumbra = s.soft ?? 0.7;
};
const setLights = (L: Lights, o: Vec) => {
  hemi.intensity = L.amb ?? 0.15;
  setSpot(key, L.key, o); setSpot(rim, L.rim, o); setSpot(aux, L.aux, o);
  if (L.accent) { accent.position.set(...add(L.accent.pos, o)); accent.color.set(L.accent.color); accent.intensity = L.accent.i; } else accent.intensity = 0;
  const u = (mirror.material as THREE.ShaderMaterial).uniforms;
  (u.fadeC.value as THREE.Vector2).set((L.focus?.[0] ?? 0) + o[0], (L.focus?.[1] ?? 0) + o[2]);
  u.fadeR.value = L.reach ?? 2600;
  u.strength.value = L.reflect ?? 0.5;
  const env = L.env ?? 1;
  for (const m of stdMats) m.envMapIntensity = (m.userData.envBase as number) * (m.metalness > 0.5 ? LOOK.envMetal : LOOK.env) * env;
};

const reflectM = new THREE.Matrix4().set(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
const clipBelow = [new THREE.Plane(new THREE.Vector3(0, -1, 0), 0.5)];
const drawMirror = (r: THREE.WebGLRenderer) => {
  const u = (mirror.material as THREE.ShaderMaterial).uniforms;
  if (u.strength.value <= 0.001) return;
  const hidden: THREE.Object3D[] = [];
  scene.traverse((o) => { if (o.userData.isFloor && o.visible) { hidden.push(o); o.visible = false; } });
  const shadows = key.castShadow;
  key.castShadow = false;
  scene.matrixAutoUpdate = false;
  scene.matrix.copy(reflectM);
  scene.updateMatrixWorld(true);
  const prev = r.clippingPlanes;
  r.clippingPlanes = clipBelow;
  r.setRenderTarget(mirrorRT);
  r.clear(true, true, true);
  r.render(scene, camera);
  r.setRenderTarget(null);
  r.clippingPlanes = prev;
  scene.matrix.identity();
  scene.matrixAutoUpdate = true;
  scene.updateMatrixWorld(true);
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

  // the places near this frame: built, shown and acted; the rest hidden
  PLACES.forEach((_, i) => {
    const w = WINDOWS[i], near = f >= w.from - LOOK.margin && f < w.to + LOOK.margin;
    if (!near) { const b = built.get(i); if (b) b.group.visible = false; return; }
    const b = ensurePlace(i);
    b.group.visible = true;
    b.update(f);
  });
  const lit = litPlaceAt(f);
  setLights(PLACES[lit].lights(f), ORIGINS[lit]);
  worldStats.place = PLACES[lit].id;

  const dbg = (window as unknown as { __world?: Partial<typeof LOOK> & { noBlur?: boolean } }).__world ?? {};
  bloom.strength = dbg.bloom ?? LOOK.bloom; bloom.radius = dbg.bloomRadius ?? LOOK.bloomRadius; bloom.threshold = dbg.bloomAt ?? LOOK.bloomAt;
  finish.uniforms.vig.value = dbg.vignette ?? LOOK.vignette;
  finish.uniforms.grain.value = dbg.grain ?? LOOK.grain;
  finish.uniforms.seed.value = (f % 97) + 1;
  finish.uniforms.fade.value = fadeAt(CAM, f);
  r.toneMappingExposure = dbg.exposure ?? LOOK.exposure;

  const fast = !dbg.noBlur && speedAt(CAM, f) > LOOK.blurAt;
  const n = fast ? LOOK.blurN : 1;
  const ctx = out2d.getContext("2d")!;
  for (let s = 0; s < n; s++) {
    const fs = n === 1 ? f : f + ((s + 0.5) / n - 0.5) * LOOK.shutter;
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
