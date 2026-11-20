// ══════════════════════════════════════════════════════════════════════════════════════════════
// ★★ THE 3-D STAGE — the engine behind every real object in the HyperFrames recreation.
//   (user, 2026-10-08: "I just want some of the "3d" objects to actually be 3d and look a lot better"; then, the first pass
//    sent back: "the whole point of me telling you to remake it using hyperframes was so that you made it look even better,
//    added 3d objects to it")
//
// HOW A 3-D OBJECT SITS IN THE 2-D FILM
//   A scene's 3-D objects are a `View3D` (View3D.tsx): a <canvas> placed in the scene's DOM where the objects stand, so it
//   rides every camera move, Shot, Turn and fade of the film unchanged. Every frame the driver renders each registered view
//   with ONE shared WebGL renderer and copies the pixels into that view's canvas (Chrome caps live WebGL contexts at ~16).
//   Most scenes are ONE view holding the whole construction, so its objects share one light, one shadow and one floor.
//
//   ★ THE REGISTERED CAMERA. World units are the construction layer's own px (x right, y UP = −layer y, z toward the viewer).
//   The camera is an OFF-AXIS perspective whose image plane is z = 0 and whose window is the canvas's own rect: anything on
//   the z = 0 plane lands on exactly the layer px it had in the 2-D film, so type laid over a front face stays on it, while
//   depth, tops, sides and anything standing back project in true perspective. The eye swings with each Turn (−D·tan yaw):
//   real parallax.
//
//   ★ THE LOOK (Style 3's own spec: "glossy 3D solids on a mirror floor: a dark body, a bright specular edge"; the user's note
//   on the HyperFrames demo: "a lot less shiny, but still 3d looking"): satin platinum and graphite, a key from the upper
//   left in front, a cool rim from the upper right behind, a hemisphere fill and a studio environment for the reflections;
//   each scene stands on a FLOOR that takes the objects' soft contact shadows and a faded mirror reflection.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { VIEW_SCALE } from "./viewscale.gen";

export type Rect = { x: number; y: number; w: number; h: number };
export type Eye = { x: number; y: number; D: number };
/** a model is built once per view id and updated every frame with that frame's params */
export type Model<P = unknown> = { root: THREE.Object3D; update?: (p: P) => void; shadows?: boolean; rig?: RigOpts;
  /** ★ 031: a BACKGROUND view's distance haze (layer px from the eye; the colour is the ground it fades into) and its
   *  softness (a blur in layer px, drawn into the view's own canvas so it moves with it sub-pixel: never a CSS filter) */
  fog?: { color: string; near: number; far: number }; blur?: number };
/** per-model light: `key` scales the key, `fill` the fill, `dir` turns the key (unit vector, toward the light) */
export type RigOpts = { key?: number; fill?: number; rim?: number; dir?: [number, number, number] };
type Job = { id: string; rect: Rect; eye: Eye; make: () => Model<any>; params: unknown; light?: number };

/** the default eye, in layer px: up and to the right of every construction, far enough for a natural lens */
export const EYE: Eye = { x: 1250, y: 0, D: 1600 };

/** where a world point (layer px x, y; z toward the viewer) lands in the layer, seen from `eye` — the registered camera's
 *  own projection, so 2-D light (a beam, a spark) or type can be anchored to a 3-D part */
export const project = (eye: Eye, x: number, y: number, z: number) => {
  const s = eye.D / (eye.D - z);
  return { x: eye.x + (x - eye.x) * s, y: eye.y + (y - eye.y) * s, s };
};

let jobs: Job[] = [];
let frame = 0;
export const currentFrame = () => frame;
export const beginFrame = (f: number) => { frame = f; jobs = []; };
export const addJob = (j: Job) => { jobs.push(j); };
// ★ a view's id: its layer and its place in that layer's draw order (the n-th view drawn), or a name the scene gives it.
//   Ids key the cached models, so a view keeps its model frame to frame.
let layerKey = "x", counter = 0;
export const setLayer = (k: string) => { layerKey = k.replace(/[^a-z0-9]+/gi, "-"); counter = 0; };
export const viewId = (name?: string) => `${layerKey}--${name ? name.replace(/[^a-z0-9]+/gi, "-") : "v" + counter++}`;

// ── fonts: type painted into textures must wait for the film's faces, or it is cached in a fallback face ──
const FACES = ['500 40px "Archivo"', '600 40px "Archivo"', '700 40px "Archivo"', '800 40px "Archivo"', 'italic 300 40px "Archivo"'];
let fontsOK = false;
export const fontsReady = () => {
  if (fontsOK) return true;
  try { fontsOK = FACES.every((f) => document.fonts.check(f)); } catch { fontsOK = false; }
  return fontsOK;
};
// ── ★ (032) photos printed INTO textures (the hook's front pages): each is registered here, the driver holds the first frame
//   until all have decoded, and a texture painted before they had is repainted once they have (as for the faces) ──
const imgs = new Map<string, HTMLImageElement>();
export const imageOf = (src: string) => {
  let im = imgs.get(src);
  if (!im) { im = new Image(); im.src = src; imgs.set(src, im); }
  return im;
};
export const imagesReady = () => [...imgs.values()].every((im) => im.complete && im.naturalWidth > 0);
export const loadImages = (srcs: string[]) => Promise.all(srcs.map((s) => imageOf(s).decode().catch(() => undefined)));
/** resolves once every face the textures use is loaded (the driver holds HyperFrames' first frame on it) */
export const loadFonts = () => Promise.all(FACES.map((f) => document.fonts.load(f))).then(() => { fontsReady(); });

// ★ 031 (the user's "background assets like trees and a busy street … parallax"): a background view's FOG fades it INTO the
//   ground under it, as distance does (aerial perspective): its colour leans toward the ground's, and its alpha falls, both
//   premultiplied (an opaque material is written without blending, so its colour must carry its own alpha). Only a model
//   that declares `fog` sets scene.fog, so every other view is untouched (USE_FOG is off there).
THREE.ShaderChunk.fog_fragment = `#ifdef USE_FOG
  float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor * 0.45 );
  gl_FragColor *= 1.0 - 0.82 * fogFactor;
#endif`;

// ── the renderer, the environment, the light rig (created on first use) ──
let R: THREE.WebGLRenderer | null = null;
let glW = 0, glH = 0;
let envTex: THREE.Texture | null = null;
const rig = new THREE.Group();
const key = new THREE.DirectionalLight(0xffffff, 2.6);
const rim = new THREE.DirectionalLight(0xc9d2e2, 1.4);
const fill = new THREE.HemisphereLight(0xc4ccd8, 0x07080a, 0.55);
const keyTarget = new THREE.Object3D();
rig.add(key, rim, fill, keyTarget);
key.target = keyTarget;
rim.target = keyTarget;
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
key.shadow.bias = -0.0003;
// ★ RULE 53 (029 HF): soft, filtered shadows — a penumbra round every contact (PCF with a radius; PCFSoft ignores it)
key.shadow.radius = 12;
key.shadow.blurSamples = 20;   // VSM's blur: a smooth, wide penumbra (PCF's radius stepped into rings past ~4)
key.shadow.normalBias = 0.8;
const RIM_DIR = new THREE.Vector3(0.75, 0.45, -0.55).normalize();
/** ★★ RULE 54 — THE LIGHT THAT MODELS FORM (user, 2026-10-09: "the 3d objects don't have enough shadows/highlights
 *  (basically the dark parts on them) to look 3d enough"). key / rim / fill: the three lights' strengths; env: how much of
 *  the studio environment a non-metal takes (×its material's own intensity), envMetal: a metal's (its reflections ARE its
 *  look); dir: toward the key; exposure: the tone mapper's. `window.__g3light` overrides any of them (the lighting lab). */
//   Measured (scratchpad/sweep029.mjs lab, the shade audit S = lit ÷ albedo): the old rig lit every object to ≥ its albedo even
//   in its darkest 5% (the room environment, at full strength on every side); this one gives turned-away faces 0.2–0.4 of the
//   lit ones. A higher, stronger key; little fill; a non-metal takes a third of its material's environment.
//   ★ pcf: VSM (the soft shadows of the realism pass) threw false dark WEDGES across the letter and the complaint (its blurred
//   moments across thin stacked sheets); filtered PCF shadows are correct and still soft.
export const LIGHT = { key: 3.8, rim: 0.7, fill: 0.3, env: 0.35, envMetal: 1, dir: [-0.5, 0.75, 0.43] as [number, number, number], exposure: 1, pcf: true };
const lightNow = () => ({ ...LIGHT, ...((window as unknown as { __g3light?: Partial<typeof LIGHT> }).__g3light ?? {}) });
const dirTmp = new THREE.Vector3();

const ensure = () => {
  if (R) return R;
  const canvas = document.createElement("canvas");
  R = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, premultipliedAlpha: true, preserveDrawingBuffer: true, powerPreference: "high-performance" });
  R.setPixelRatio(1);
  R.outputColorSpace = THREE.SRGBColorSpace;
  R.toneMapping = THREE.NeutralToneMapping;
  R.toneMappingExposure = 1.0;
  R.localClippingEnabled = true;                                     // a receipt clipped at its slot, drums at their housing
  R.shadowMap.enabled = true;
  R.shadowMap.type = THREE.PCFSoftShadowMap;   // ★ RULE 54: filtered soft shadows (VSM threw false wedges: see LIGHT)
  R.setClearColor(0x000000, 0);
  const pm = new THREE.PMREMGenerator(R);
  envTex = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  pm.dispose();
  return R;
};
const grow = (w: number, h: number) => {
  if (w <= glW && h <= glH) return;
  glW = Math.max(glW, Math.ceil(w / 256) * 256);
  glH = Math.max(glH, Math.ceil(h / 256) * 256);
  R!.setSize(glW, glH, false);
};

const scenes = new Map<string, { scene: THREE.Scene; model: Model<any>; mirrors?: THREE.Mesh[] }>();
const cam = new THREE.PerspectiveCamera();
const bb = new THREE.Box3();
const bbTmp = new THREE.Box3();
const ctr = new THREE.Vector3();
const size = new THREE.Vector3();

/** the off-axis camera: eye (ex, ey, D) in layer px, the image plane z = 0 windowed to `rect` */
const placeCamera = (rect: Rect, eye: Eye) => {
  const n = 20, far = eye.D + 8000;
  const k = n / eye.D;
  const left = (rect.x - eye.x) * k, right = (rect.x + rect.w - eye.x) * k;
  const top = (eye.y - rect.y) * k, bottom = (eye.y - rect.y - rect.h) * k;
  cam.position.set(eye.x, -eye.y, eye.D);
  cam.quaternion.identity();
  cam.updateMatrixWorld(true);
  cam.projectionMatrix.makePerspective(left, right, top, bottom, n, far);
  cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();
};

/** the bounds of what casts light and shadow (floors, glows and helpers are marked `userData.noBounds`) */
const castBounds = (root: THREE.Object3D) => {
  bb.makeEmpty();
  root.traverse((o) => {
    if (o.userData.noBounds) return;
    let p: THREE.Object3D | null = o.parent;
    while (p) { if (p.userData.noBounds) return; p = p.parent; }
    const m = o as THREE.Mesh;
    if (!m.isMesh || !m.visible) return;
    if (!m.geometry.boundingBox) m.geometry.computeBoundingBox();
    bbTmp.copy(m.geometry.boundingBox!).applyMatrix4(m.matrixWorld);
    bb.union(bbTmp);
  });
  return bb;
};

export const endFrame = () => {
  if (!jobs.length) return;
  const r = ensure();
  for (const j of jobs) {
    try { drawJob(r, j); } catch (err) {
      // one broken model never takes the rest of the frame down with it — and it is LOUD (the check's runtime audit reads it)
      console.error(`[v34 3d] view ${j.id} failed:`, err);
    }
  }
  r.setScissorTest(false);
};

/** the size of the frame being drawn */
export const drawSize = { w: 1, h: 1 };

// ── THE MIRROR FLOOR: a screen-space planar reflection ──
// ★ (2026-10-08, the first render's glitch scan: one frame at 40.000 s where the buyers' floor reflection jumped.)
// three.js's Reflector builds its mirror camera by ROLLING the real camera 180° (up reflected, then lookAt). That flips the
// camera's x axis as well as its y, so an OFF-AXIS projection — this stage's registered camera, whose window sits beside
// the eye — is shifted the wrong way sideways: the reflection was only right where the two frusta overlapped, hard-edged,
// and that overlap moved with the eye (a 6.7k → 88k → 4.4k px patch over five frames). Here the camera never moves: the
// SCENE is reflected about the floor's plane (lights with it), drawn through the same off-axis camera into a target the
// size of the frame, everything that was below the floor clipped away; the floor then reads that image at its own screen
// pixel. Correct for any projection.
const mirrorRT = new THREE.WebGLRenderTarget(64, 64, { samples: 4, type: THREE.HalfFloatType });
const mirrorM = new THREE.Matrix4();
const mirrorClip = new THREE.Plane();
const mirrorP = new THREE.Vector3();
const drawMirror = (r: THREE.WebGLRenderer, scene: THREE.Scene, mirror: THREE.Mesh, pw: number, ph: number) => {
  const y0 = mirror.getWorldPosition(mirrorP).y; // the floor plane's world y (a model may move its root)
  const tw = Math.max(64, Math.round(pw / 2)), th = Math.max(64, Math.round(ph / 2)); // half size: a reflection is soft
  if (mirrorRT.width !== tw || mirrorRT.height !== th) mirrorRT.setSize(tw, th);
  // a floor never reflects itself (its mirror, shadow catcher and contact pools)
  const floors: THREE.Object3D[] = [];
  scene.traverse((o) => { if (o.userData.isFloor && o.visible) floors.push(o); });
  for (const o of floors) o.visible = false;
  // y → 2·y0 − y: the model and the light rig together, so the reflection is lit as the room is
  mirrorM.set(1, 0, 0, 0, 0, -1, 0, 2 * y0, 0, 0, 1, 0, 0, 0, 0, 1);
  scene.matrixAutoUpdate = false;
  scene.matrix.copy(mirrorM);
  scene.updateMatrixWorld(true);
  // keep what stood above the floor (now below it); a sliver of tolerance for parts that rest exactly on it
  mirrorClip.normal.set(0, -1, 0);
  mirrorClip.constant = y0 + 0.5;
  const prevClip = r.clippingPlanes;
  r.clippingPlanes = [mirrorClip];
  r.setRenderTarget(mirrorRT);
  r.clear(true, true, true);
  r.render(scene, cam);
  r.setRenderTarget(null);
  r.clippingPlanes = prevClip;
  scene.matrix.identity();
  scene.matrixAutoUpdate = true;
  scene.updateMatrixWorld(true);
  for (const o of floors) o.visible = true;
  const u = (mirror.material as THREE.ShaderMaterial).uniforms;
  u.tRefl.value = mirrorRT.texture;
  (u.res.value as THREE.Vector2).set(pw, ph);
};

const drawJob = (r: THREE.WebGLRenderer, j: Job) => {
  const el = document.querySelector<HTMLCanvasElement>(`canvas[data-g3="${j.id}"]`);
  if (!el) return;
  // resolution: the canvas's on-screen size (every camera zoom above it included), never under 1×, capped at 2.25×
  const bx = el.getBoundingClientRect();
  const host = document.getElementById("root")?.getBoundingClientRect();
  const pageScale = host && host.width > 0 ? 1080 / host.width : 1;
  // ★ THE BACKING SCALE HOLDS STILL WHILE THE VIEW DOES (2026-10-08, the render's glitch scan: the board's canvas was 1177 px
  //   wide for ONE frame at f1386 and 1176 either side, as a resting camera's drift carried the exact scale across a rounding
  //   boundary — the whole view re-rasterised for a frame). Rounding the size from the continuously varying scale did that
  //   374 times over the film with the view at rest (scratchpad/scalesweep.mjs). Now each view keeps its own resting scale
  //   (viewscale.gen.ts, measured by that sweep) while it is shown within [−0.3, +0.1] of it, and only a fast move (a dive,
  //   a pull-back) takes it outside, onto a 0.25 grid. The sweep proves 0 changes at rest and 0 flip-flops. A pure
  //   function of the frame, so render workers drawing frames out of order agree.
  const sRaw = (bx.width * pageScale) / Math.max(1, j.rect.w);
  const B = VIEW_SCALE[j.id];
  const sQ = B !== undefined && sRaw >= B - 0.3 && sRaw <= B + 0.1 ? B
    : B !== undefined ? Math.ceil((sRaw - 0.05) / 0.25 - 1e-9) * 0.25
    : Math.ceil(sRaw * 20 - 1e-6) / 20; // a view the sweep has not measured yet
  const s = Math.max(1, Math.min(2.25, sQ));
  const pw = Math.max(1, Math.round(j.rect.w * s)), ph = Math.max(1, Math.round(j.rect.h * s));
  // DEBUG (scratchpad/viewdbg.mjs): what this view measured and was given, when a harness asks for it
  const dbg = window as unknown as { __v34dbg?: unknown[]; __v34measureOnly?: boolean };
  dbg.__v34dbg?.push({ id: j.id, rw: j.rect.w, bxx: bx.x, bxy: bx.y, bxw: bx.width, bxh: bx.height, hostw: host?.width, sRaw, s, pw, ph, eye: j.eye, params: JSON.stringify(j.params), light: j.light });
  if (dbg.__v34measureOnly) return; // scratchpad/scalesweep.mjs: layout only, no 3-D
  if (el.width !== pw || el.height !== ph) { el.width = pw; el.height = ph; }
  grow(pw, ph);
  drawSize.w = pw; drawSize.h = ph;
  let entry = scenes.get(j.id);
  if (!entry) {
    const scene = new THREE.Scene();
    scene.environment = envTex;
    const model = j.make();
    scene.add(model.root);
    // ★★ RULE 54: every material takes the studio environment as ITS OWN map, so its own envMapIntensity is honoured. Under
    //   `scene.environment` alone three.js ignores a material's intensity (it uses scene.environmentIntensity, 1): every
    //   object was lit by the whole room from every side at full strength, and no object had a dark side (029 HF, measured)
    model.root.traverse((o) => {
      const ms = (o as THREE.Mesh).material;
      for (const m of (Array.isArray(ms) ? ms : ms ? [ms] : []) as THREE.MeshStandardMaterial[]) {
        if (!m.isMeshStandardMaterial || m.userData.envBase !== undefined) continue;
        m.userData.envBase = m.envMapIntensity;
        if (!m.envMap) { m.envMap = envTex; m.needsUpdate = true; }
      }
    });
    if (model.fog) scene.fog = new THREE.Fog(new THREE.Color(model.fog.color), model.fog.near, model.fog.far);
    entry = { scene, model };
    scenes.set(j.id, entry);
  }
  entry.model.update?.(j.params);
  const L = lightNow();
  entry.model.root.traverse((o) => {
    const ms = (o as THREE.Mesh).material;
    for (const m of (Array.isArray(ms) ? ms : ms ? [ms] : []) as THREE.MeshStandardMaterial[]) {
      if (m.userData?.envBase === undefined) continue;
      m.envMapIntensity = m.userData.envBase * (m.metalness > 0.5 ? L.envMetal : L.env);
    }
  });
  r.toneMappingExposure = L.exposure;
  const st = L.pcf ? THREE.PCFSoftShadowMap : THREE.VSMShadowMap;
  if (r.shadowMap.type !== st) { r.shadowMap.type = st; r.shadowMap.needsUpdate = true; }
  // AUDIT (RULE 54): the audit build may switch parts of a model off before it is drawn (finding a stray shadow's caster)
  (window as unknown as { __g3before?: (...a: unknown[]) => void }).__g3before?.(j.id, entry.model.root);
  entry.scene.add(rig);
  // the light: the key rakes from the upper left (or the model's own direction); its shadow camera hugs the casters
  entry.model.root.updateMatrixWorld(true);
  castBounds(entry.model.root);
  if (bb.isEmpty()) bb.setFromCenterAndSize(new THREE.Vector3(), new THREE.Vector3(10, 10, 10));
  bb.getCenter(ctr);
  const rad = Math.max(10, bb.getSize(size).length() / 2);
  const ro = entry.model.rig ?? {};
  const kd = ro.dir ? dirTmp.set(...ro.dir).normalize() : dirTmp.set(...L.dir).normalize();
  keyTarget.position.copy(ctr);
  key.position.copy(ctr).addScaledVector(kd, rad * 3);
  rim.position.copy(ctr).addScaledVector(RIM_DIR, rad * 3);
  key.intensity = L.key * (ro.key ?? 1) * (j.light ?? 1);
  rim.intensity = L.rim * (ro.rim ?? 1);
  fill.intensity = L.fill * (ro.fill ?? 1);
  const sc = key.shadow.camera as THREE.OrthographicCamera;
  sc.left = -rad; sc.right = rad; sc.top = rad; sc.bottom = -rad; sc.near = rad * 0.5; sc.far = rad * 6;
  sc.updateProjectionMatrix();
  key.castShadow = entry.model.shadows !== false;
  // DEBUG (scratchpad/viewdbg.mjs): switch parts of the look off to find what a frame's glitch comes from
  const dflags = (window as unknown as { __v34flags?: Record<string, boolean> }).__v34flags;
  if (dflags) {
    if (dflags.noShadow) key.castShadow = false;
    entry.scene.traverse((o) => {
      if (o.userData.isMirror) o.visible = !dflags.noReflect;
      else if (o.renderOrder === 1.5) o.visible = !dflags.noBlob;
      else if (o.renderOrder === 2 && (o as THREE.Mesh).material instanceof THREE.ShadowMaterial) o.visible = !dflags.noCatcher;
    });
  }
  placeCamera(j.rect, j.eye);
  // the mirror floors: the scene reflected about each floor's plane, through THIS camera (see drawMirror)
  if (!entry.mirrors) {
    const ms: THREE.Mesh[] = [];
    entry.scene.traverse((o) => { if (o.userData.isMirror) ms.push(o as THREE.Mesh); });
    entry.mirrors = ms;
  }
  for (const m of entry.mirrors) {
    if (m.visible && (m.material as THREE.ShaderMaterial).uniforms.strength.value > 0.001) drawMirror(r, entry.scene, m, pw, ph);
  }
  r.setViewport(0, 0, pw, ph);
  r.setScissor(0, 0, pw, ph);
  r.setScissorTest(true);
  r.clear(true, true, true);
  r.render(entry.scene, cam);
  const ctx = el.getContext("2d")!;
  ctx.clearRect(0, 0, pw, ph);
  const blur = entry.model.blur ?? 0;
  ctx.filter = blur > 0 ? `blur(${(blur * s).toFixed(2)}px)` : "none";
  ctx.drawImage(r.domElement, 0, glH - ph, pw, ph, 0, 0, pw, ph);
  ctx.filter = "none";
  // AUDIT (RULE 54, scratchpad/sweep029.mjs audit): the audit build's per-view checks, run on the frame just drawn
  (window as unknown as { __g3after?: (...a: unknown[]) => void }).__g3after?.(r, j.id, entry.scene, cam, pw, ph, el, entry.model.root);
};

// ══ MATERIALS — the platinum palette, satin ═══════════════════════════════════════════════════════
const C = (hex: string) => new THREE.Color(hex);
export const mat = {
  /** brushed platinum steel: rods, rings, the yoke, bands */
  steel: () => new THREE.MeshPhysicalMaterial({ color: C("#c9d0da"), metalness: 0.9, roughness: 0.34, envMapIntensity: 0.85 }),
  /** a brighter polished part: bezels, chrome caps — still satin, never a mirror */
  chrome: () => new THREE.MeshPhysicalMaterial({ color: C("#e6ebf2"), metalness: 1, roughness: 0.22, envMapIntensity: 1.0 }),
  /** dark gunmetal: housings, the drum's body */
  gunmetal: () => new THREE.MeshPhysicalMaterial({ color: C("#5d6672"), metalness: 0.85, roughness: 0.38, envMapIntensity: 0.8 }),
  /** graphite paint / anodised: cases, plates */
  graphite: () => new THREE.MeshPhysicalMaterial({ color: C("#2a3039"), metalness: 0.35, roughness: 0.52, envMapIntensity: 0.6, clearcoat: 0.15, clearcoatRoughness: 0.5 }),
  /** a lighter anodised graphite, for cases that must read on the dark field */
  slate: () => new THREE.MeshPhysicalMaterial({ color: C("#454d59"), metalness: 0.45, roughness: 0.46, envMapIntensity: 0.7, clearcoat: 0.2, clearcoatRoughness: 0.4 }),
  /** dark lacquer (the sound block, the wand) */
  lacquer: () => new THREE.MeshPhysicalMaterial({ color: C("#191d23"), metalness: 0.1, roughness: 0.32, envMapIntensity: 0.7, clearcoat: 0.45, clearcoatRoughness: 0.28 }),
  /** matte black rubber (feet, the coax) */
  rubber: () => new THREE.MeshStandardMaterial({ color: C("#101216"), metalness: 0, roughness: 0.82 }),
  /** paper and card: off-white, fully matte */
  paper: (hex = "#f4f5f6") => new THREE.MeshStandardMaterial({ color: C(hex), metalness: 0, roughness: 0.9 }),
  /** clear glass: faint, a reflection more than a body */
  glass: () => new THREE.MeshPhysicalMaterial({ color: C("#dfe6f0"), metalness: 0, roughness: 0.06, envMapIntensity: 1.1, transparent: true, opacity: 0.16, depthWrite: false }),
  /** an emissive surface (a lamp's glass, a lit LED) */
  glow: (hex = "#ffffff", i = 1) => new THREE.MeshStandardMaterial({ color: C("#000000"), emissive: C(hex), emissiveIntensity: i, roughness: 0.4 }),
};

// ══ GEOMETRY HELPERS ══════════════════════════════════════════════════════════════════════════════
/** a lathe from a profile of [radius, height] points (height up the axis); the axis is +y */
export const lathe = (prof: [number, number][], seg = 96) =>
  new THREE.LatheGeometry(prof.map(([r, y]) => new THREE.Vector2(Math.max(0, r), y)), seg);

/** layer px → world: x stays, y flips */
export const W = (x: number, y: number, z = 0) => new THREE.Vector3(x, -y, z);

/** a mesh that casts and receives the key's shadow */
export const mesh = (g: THREE.BufferGeometry, m: THREE.Material | THREE.Material[], cast = true, receive = true) => {
  const o = new THREE.Mesh(g, m);
  o.castShadow = cast;
  o.receiveShadow = receive;
  return o;
};

/** a rounded rectangle shape, (0,0) at its centre */
export const roundRect = (w: number, h: number, r: number) => {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  r = Math.min(r, w / 2, h / 2);
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
};

/** an extruded, bevelled slab of `shape`, its FRONT face at z = 0 and its depth going back (−z); UVs on the front span the
 *  shape's bounding box 0…1 (so a texture lands on the face as drawn) */
export const slabOf = (shape: THREE.Shape, depth: number, bevel = 3, curveSegments = 12) => {
  const g = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(0.1, depth - 2 * bevel), bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelOffset: -bevel,
    bevelSegments: 3, curveSegments,
  });
  g.translate(0, 0, -(depth - bevel));
  // the front cap's UVs: ExtrudeGeometry writes shape coordinates; normalise them to the shape's box
  g.computeBoundingBox();
  const b = g.boundingBox!;
  const uv = g.attributes.uv as THREE.BufferAttribute, pos = g.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) {
    uv.setXY(i, (pos.getX(i) - b.min.x) / (b.max.x - b.min.x), (pos.getY(i) - b.min.y) / (b.max.y - b.min.y));
  }
  uv.needsUpdate = true;
  return g;
};

// ══ THE FLOOR — soft contact shadows and a faded mirror reflection ═════════════════════════════════
// the mirror's material: the reflected frame (drawMirror) read at this fragment's own screen pixel, faded by distance
const mirrorMaterial = () => new THREE.ShaderMaterial({
  name: "V34ScreenMirror",
  transparent: true,
  depthWrite: false,
  uniforms: {
    color: { value: new THREE.Color(0xffffff) },
    tRefl: { value: null as THREE.Texture | null },
    res: { value: new THREE.Vector2(1, 1) },
    strength: { value: 0.3 },
    fadeC: { value: new THREE.Vector2() },
    fadeR: { value: new THREE.Vector2(400, 200) },
  },
  vertexShader: /* glsl */ `
    varying vec3 vWorld;
    #include <common>
    #include <logdepthbuf_pars_vertex>
    void main() {
      vWorld = ( modelMatrix * vec4( position, 1.0 ) ).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      #include <logdepthbuf_vertex>
    }`,
  fragmentShader: /* glsl */ `
    uniform vec3 color;
    uniform sampler2D tRefl;
    uniform vec2 res;
    uniform float strength;
    uniform vec2 fadeC;
    uniform vec2 fadeR;
    varying vec3 vWorld;
    #include <logdepthbuf_pars_fragment>
    void main() {
      #include <logdepthbuf_fragment>
      vec4 base = texture2D( tRefl, gl_FragCoord.xy / res );
      vec2 q = ( vWorld.xz - fadeC ) / fadeR;
      float a = strength * ( 1.0 - smoothstep( 0.0, 1.0, length( q ) ) );
      gl_FragColor = vec4( base.rgb * color, base.a * a );
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
});

export type FloorOpts = {
  /** the floor's height (layer y) */
  y: number;
  /** its extent, layer x and world z */
  x0: number; x1: number; z0: number; z1: number;
  /** the mirror: strength 0…1 and the fade ellipse (centre x/z, radii); 0 = none */
  reflect?: number; fadeC?: [number, number]; fadeR?: [number, number];
  /** the shadow's darkness, 0…1 */
  shadow?: number;
  /** soft contact pools under what stands on the floor (an object's footprint: centre x/z, size), darkness `a` */
  blobs?: { x: number; z: number; w: number; d: number; a?: number }[];
};
let blobTex: THREE.CanvasTexture | null = null;
const blobTexture = () => {
  if (blobTex) return blobTex;
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d")!;
  const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);   // an ALPHA map: three reads its green channel, white = opaque
  gr.addColorStop(0, "#fff"); gr.addColorStop(0.35, "#bfbfbf"); gr.addColorStop(0.7, "#404040"); gr.addColorStop(1, "#000");
  g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  blobTex = new THREE.CanvasTexture(c);
  return blobTex;
};
/** ★★ RULE 54b: a shadow catcher's shadows fade out softly over an ellipse (world axes "xz" for a floor, "xy" for a backdrop;
 *  centre and radii in world units), full inside 55% of it, gone at its rim — so a floor or a wall's shadow never ends on a
 *  hard line where the plane or its view's canvas does (029 HF: the hook's floor shadow left as a cut slab beside the
 *  counter) */
export const fadeShadow = (m: THREE.ShadowMaterial, axes: "xz" | "xy", c: [number, number], r: [number, number]) => {
  m.onBeforeCompile = (sh) => {
    sh.uniforms.fadeC = { value: new THREE.Vector2(...c) };
    sh.uniforms.fadeR = { value: new THREE.Vector2(...r) };
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vFadeW;")
      .replace("#include <fog_vertex>", "#include <fog_vertex>\nvFadeW = ( modelMatrix * vec4( position, 1.0 ) ).xyz;");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform vec2 fadeC;\nuniform vec2 fadeR;\nvarying vec3 vFadeW;")
      .replace("gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );",
        `gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) * ( 1.0 - smoothstep( 0.55, 1.0, length( ( vFadeW.${axes} - fadeC ) / max( fadeR, vec2( 1.0 ) ) ) ) ) );`);
  };
  m.customProgramCacheKey = () => `fadeShadow-${axes}`;
};
export type Floor = THREE.Group & { setStage: (white: number) => void };
/** a floor for one scene: a shadow catcher over a faded mirror. `setStage(white)` eases both for the white stage */
export const makeFloor = (o: FloorOpts): Floor => {
  const g = new THREE.Group() as Floor;
  g.userData.noBounds = true;
  g.userData.isFloor = true;
  const w = o.x1 - o.x0, d = o.z1 - o.z0;
  const cx = (o.x0 + o.x1) / 2, cz = (o.z0 + o.z1) / 2;
  const shadowMat = new THREE.ShadowMaterial({ color: 0x000000, opacity: o.shadow ?? 0.55, transparent: true, depthWrite: false });
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(w, d), shadowMat);
  sh.rotation.x = -Math.PI / 2;
  sh.position.set(cx, -o.y + 0.4, cz);
  // ★ RULE 54b: its shadows fade out over the mirror's ellipse (or the floor's own), never on the plane's or a canvas's edge
  fadeShadow(shadowMat, "xz", o.fadeC ?? [cx, cz], o.fadeR ?? [w / 2, d / 2]);
  sh.receiveShadow = true;
  sh.renderOrder = 2;
  g.add(sh);
  let refl: THREE.Mesh | null = null;
  if ((o.reflect ?? 0) > 0) {
    // the mirror (its image is drawn per frame by drawMirror, through the view's own camera)
    const m = mirrorMaterial();
    m.uniforms.strength.value = o.reflect;
    (m.uniforms.fadeC.value as THREE.Vector2).set(...(o.fadeC ?? [cx, cz]));
    (m.uniforms.fadeR.value as THREE.Vector2).set(...(o.fadeR ?? [w / 2, d / 2]));
    refl = new THREE.Mesh(new THREE.PlaneGeometry(w, d), m);
    refl.rotation.x = -Math.PI / 2;
    refl.position.set(cx, -o.y, cz);
    refl.renderOrder = 1;
    refl.userData.isMirror = true;
    g.add(refl);
  }
  const blobMats: { m: THREE.MeshBasicMaterial; a: number }[] = [];
  for (const b of o.blobs ?? []) {
    const m = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: b.a ?? 0.7, toneMapped: false, color: 0x000000 });
    m.alphaMap = blobTexture();
    const p = new THREE.Mesh(new THREE.PlaneGeometry(b.w, b.d), m);
    p.rotation.x = -Math.PI / 2;
    p.position.set(b.x, -o.y + 0.25, b.z);
    p.renderOrder = 1.5;
    g.add(p);
    blobMats.push({ m, a: b.a ?? 0.7 });
  }
  const shadow0 = o.shadow ?? 0.55, reflect0 = o.reflect ?? 0;
  g.setStage = (white: number) => {
    shadowMat.opacity = shadow0 * (1 - 0.55 * white);
    if (refl) (refl.material as THREE.ShaderMaterial).uniforms.strength.value = reflect0 * (1 - 0.45 * white);
    for (const b of blobMats) b.m.opacity = b.a * (1 - 0.5 * white);
  };
  return g;
};

// ══ TYPE AND PRINT, PAINTED INTO TEXTURES ═════════════════════════════════════════════════════════
// Where print sits on a surface that turns in 3-D (a paddle's face, a drum's digits, a tag's price) it is painted into a
// texture with the film's own faces, so it turns with the surface. Static textures are cached by key; a texture painted
// before the faces had loaded is repainted once they have.
type PaintEntry = { tex: THREE.CanvasTexture; c: HTMLCanvasElement; fonts: boolean };
const paints = new Map<string, PaintEntry>();
/** a cached texture `key`, w×h px at `scale`, painted by `draw` (in w×h px) */
export const paintTex = (key: string, w: number, h: number, draw: (g: CanvasRenderingContext2D) => void, scale = 2) => {
  const e = paints.get(key);
  const ready = fontsReady() && imagesReady();
  if (e && (e.fonts || !ready)) return e.tex;
  const c = e?.c ?? document.createElement("canvas");
  c.width = Math.round(w * scale); c.height = Math.round(h * scale);
  const g = c.getContext("2d")!;
  g.setTransform(scale, 0, 0, scale, 0, 0);
  g.clearRect(0, 0, w, h);
  draw(g);
  // ★ (032 master render, 2026-10-15) readiness is re-checked AFTER the draw: `draw` may register a photo (imageOf) that the
  //   check before it never saw. The hook's first page was the first texture painted in the render: no photo registered yet,
  //   so imagesReady() was true over an EMPTY set, its grey placeholder was cached as final and the MP4's whole hook lacked its
  //   photo (fresh stills, painted before the faces loaded, repainted and hid it; verifymp4's tile check caught it)
  const done = ready && fontsReady() && imagesReady();
  const tex = e?.tex ?? new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  paints.set(key, { tex, c, fonts: done });
  return tex;
};
/** a texture painted EVERY frame (a live display): call `paint` to redraw it */
export const liveTex = (w: number, h: number, scale = 2) => {
  const c = document.createElement("canvas");
  c.width = Math.round(w * scale); c.height = Math.round(h * scale);
  const g = c.getContext("2d")!;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return {
    tex,
    paint: (draw: (g: CanvasRenderingContext2D) => void) => {
      g.setTransform(scale, 0, 0, scale, 0, 0);
      g.clearRect(0, 0, w, h);
      draw(g);
      tex.needsUpdate = true;
    },
  };
};
/** greeked print: rounded bars standing in for words (never letters, never numbers) */
export const greek = (g: CanvasRenderingContext2D, x: number, y: number, ws: number[], h: number, gap: number, color: string, op: number) => {
  g.save();
  g.globalAlpha = op;
  g.fillStyle = color;
  let cx = x;
  for (const w of ws) { rr(g, cx, y, w, h, h / 2); g.fill(); cx += w + gap; }
  g.restore();
};
/** a rounded-rect path */
export const rr = (g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
  r = Math.min(r, w / 2, h / 2);
  g.beginPath();
  g.moveTo(x + r, y); g.lineTo(x + w - r, y); g.quadraticCurveTo(x + w, y, x + w, y + r);
  g.lineTo(x + w, y + h - r); g.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  g.lineTo(x + r, y + h); g.quadraticCurveTo(x, y + h, x, y + h - r);
  g.lineTo(x, y + r); g.quadraticCurveTo(x, y, x + r, y);
  g.closePath();
};
/** a vertical linear gradient fill from CSS stops [[0, "#..."], …] */
export const vgrad = (g: CanvasRenderingContext2D, y0: number, y1: number, stops: [number, string][]) => {
  const gr = g.createLinearGradient(0, y0, 0, y1);
  for (const [o, c] of stops) gr.addColorStop(o, c);
  return gr;
};

// ══ A CSS GRADIENT, PAINTED INTO A TEXTURE ══════════════════════════════════════════════════════════
// A solid's front face can keep the film's own painted gradient as its albedo, so every face reads as designed; the light
// then does the rest (the bevel's highlight, the sheen that crosses it as the stage turns).
const splitTop = (s: string) => {
  const out: string[] = [];
  let depth = 0, cur = "";
  for (const ch of s) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === "," && depth === 0) { out.push(cur.trim()); cur = ""; } else cur += ch;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
};
const paintLayer = (g: CanvasRenderingContext2D, layer: string, w: number, h: number) => {
  const m = layer.match(/^(repeating-)?linear-gradient\((.*)\)$/s);
  if (!m) { g.fillStyle = layer; g.fillRect(0, 0, w, h); return; }
  const repeating = !!m[1];
  const args = splitTop(m[2]);
  let ang = 180;
  if (/deg$/.test(args[0])) { ang = parseFloat(args[0]); args.shift(); }
  else if (/^to /.test(args[0])) {
    const t = args.shift()!;
    ang = t.includes("right") ? 90 : t.includes("left") ? 270 : t.includes("top") ? 0 : 180;
  }
  const a = (ang * Math.PI) / 180;
  const dx = Math.sin(a), dy = -Math.cos(a);
  const L = Math.abs(w * Math.sin(a)) + Math.abs(h * Math.cos(a));
  const cx = w / 2, cy = h / 2;
  const stops = args.map((s) => {
    const mm = s.match(/^(.*?)(?:\s+(-?[\d.]+)(%|px))?$/s)!;
    return { c: mm[1].trim(), p: mm[2] === undefined ? undefined : mm[3] === "%" ? parseFloat(mm[2]) / 100 : parseFloat(mm[2]) / L };
  });
  stops.forEach((s, i) => { if (s.p === undefined) s.p = stops.length === 1 ? 0 : i / (stops.length - 1); });
  const x0 = cx - (dx * L) / 2, y0 = cy - (dy * L) / 2, x1 = cx + (dx * L) / 2, y1 = cy + (dy * L) / 2;
  const grad = g.createLinearGradient(x0, y0, x1, y1);
  if (repeating) {
    const period = Math.max(1e-3, stops[stops.length - 1].p! - stops[0].p!);
    for (let base = 0; base < 1; base += period) {
      for (const s of stops) { const p = base + s.p!; if (p >= 0 && p <= 1) grad.addColorStop(p, s.c); }
    }
  } else {
    for (const s of stops) grad.addColorStop(Math.max(0, Math.min(1, s.p!)), s.c);
  }
  g.fillStyle = grad;
  g.fillRect(0, 0, w, h);
};
const gradCache = new Map<string, THREE.CanvasTexture>();
/** a texture of `css` (one or more comma-separated linear gradients, top layer first) at w×h */
export const cssTexture = (css: string, w: number, h: number) => {
  const k = Math.min(1, 1024 / Math.max(w, h));
  const tw = Math.max(2, Math.round(w * k)), th = Math.max(2, Math.round(h * k));
  const id = `${css}|${tw}x${th}`;
  let t = gradCache.get(id);
  if (t) return t;
  const c = document.createElement("canvas");
  c.width = tw; c.height = th;
  const g = c.getContext("2d")!;
  const layers = splitTop(css);
  g.save();
  g.scale(tw / w, th / h);
  for (let i = layers.length - 1; i >= 0; i--) paintLayer(g, layers[i], w, h);
  g.restore();
  t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  if (gradCache.size > 200) { const first = gradCache.keys().next().value!; gradCache.get(first)!.dispose(); gradCache.delete(first); }
  gradCache.set(id, t);
  return t;
};
/** the average colour of a CSS gradient (its stops, equally weighted) */
export const cssAverage = (css: string): THREE.Color => {
  const cols = (css.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}\b/g) ?? ["#3a414c"]).map((h) => new THREE.Color(h));
  const out = new THREE.Color(0, 0, 0);
  for (const c of cols) out.add(c);
  return out.multiplyScalar(1 / cols.length);
};
export { THREE };
