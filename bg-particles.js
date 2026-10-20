/* ════════════════════════════════════════════════════════════════
   Fondo global: Particles (React Bits) portado a JS vanilla.
   Reemplaza el canvas 2D anterior por una nube WebGL2 con perspectiva,
   profundidad de campo, glow, twinkle, constelaciones y parallax.

   Adaptaciones al sitio:
   · particleColors → se leen de las variables CSS (claro/oscuro/fuego)
   · connections    → activas: las aristas son el grafo
   · speed y glow   → modulados por el analizador de audio
   · lightMode      → se activa solo en tema claro
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const SHAPES = { circle: 0, square: 1, ring: 2, sparkle: 3 };
  const EFFECTS = { parallax: 0, repel: 1, attract: 2 };
  const DRIFTS = { none: 0, up: 1, down: 2, forward: 3 };
  const MAX_COUNT = 20000;
  const MAX_LINKED = 900;
  const MAX_LINES = 9000;
  const MAX_BURSTS = 4;
  const DEPTH = 10;
  const FOCAL = 1 / Math.tan((7.5 * Math.PI) / 180);
  const NEAR = 0.1;
  const FAR = 100;
  const INTRO_SECONDS = 1.8;
  const BURST_SECONDS = 1.5;
  const BURST_SPEED = 520;
  const BURST_WIDTH = 46;

  const PARTICLE_VERTEX = `#version 300 es
precision highp float;
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec3 aPosition;
layout(location = 2) in vec4 aRandom;
layout(location = 3) in vec3 aColor;
uniform mat3 uRotation;
uniform vec3 uOffset;
uniform float uSpread;
uniform float uTime;
uniform float uCamera;
uniform float uAspect;
uniform vec2 uView;
uniform float uRatio;
uniform float uSize;
uniform float uRandomness;
uniform float uBlur;
uniform float uFocus;
uniform float uGlow;
uniform float uTwinkle;
uniform int uShape;
uniform int uDrift;
uniform float uTravel;
uniform vec4 uPointer;
uniform int uEffect;
uniform float uStrength;
uniform vec4 uBursts[${MAX_BURSTS}];
uniform int uBurstCount;
uniform float uReveal;
out vec2 vLocal;
out float vRadius;
out float vBlur;
out float vAlpha;
out float vHalo;
out float vSeed;
out vec3 vColor;

vec3 bob(vec4 r, float t) {
  return vec3(
    sin(t * r.z + 6.28 * r.w) * mix(0.1, 1.5, r.x),
    sin(t * r.y + 6.28 * r.x) * mix(0.1, 1.5, r.w),
    sin(t * r.w + 6.28 * r.y) * mix(0.1, 1.5, r.z)
  );
}

void main() {
  vec3 pos = aPosition * uSpread;
  pos.z *= ${DEPTH.toFixed(1)};
  vec3 wobble = bob(aRandom, uTime);
  vec3 world = uRotation * pos + uOffset + wobble;
  float edge = 1.0;
  if (uDrift == 1 || uDrift == 2) {
    float span = uSpread * 2.0 + 3.0;
    float k = mod(aRandom.w * span + uOffset.y + wobble.y + (uDrift == 1 ? uTravel : -uTravel), span);
    world.y = k - span * 0.5;
    edge = smoothstep(0.0, span * 0.12, k) * smoothstep(span, span * 0.88, k);
  } else if (uDrift == 3) {
    float span = uSpread * ${DEPTH.toFixed(1)} * 2.0 + 3.0;
    float k = mod(aRandom.y * span + uOffset.z + wobble.z + uTravel, span);
    world.z = k - span * 0.5;
    edge = smoothstep(0.0, span * 0.1, k);
  }
  vec3 view = world - vec3(0.0, 0.0, uCamera);
  float dist = length(view);
  float ahead = -view.z;
  if (ahead < ${NEAR.toFixed(2)} || ahead > ${FAR.toFixed(1)}) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  edge *= smoothstep(1.0, 4.0, ahead);
  vec2 ndc = vec2(view.x * ${FOCAL.toFixed(6)} / uAspect, view.y * ${FOCAL.toFixed(6)}) / ahead;
  vec2 screen = (ndc * 0.5 + 0.5) * uView;

  vec2 shift = vec2(0.0);
  float flash = 0.0;
  if (uEffect != 0 && uPointer.z > 0.001) {
    vec2 delta = screen - uPointer.xy;
    float reach = length(delta);
    float falloff = exp(-dot(delta, delta) / (uPointer.w * uPointer.w));
    vec2 away = reach > 0.001 ? delta / reach : vec2(0.0);
    shift += (uEffect == 1 ? away * uPointer.w * 0.5 : -delta * 0.6) * falloff * uStrength * uPointer.z;
  }
  for (int i = 0; i < ${MAX_BURSTS}; i++) {
    if (i >= uBurstCount) break;
    vec4 burst = uBursts[i];
    vec2 delta = screen - burst.xy;
    float reach = length(delta);
    float wave = exp(-pow((reach - burst.z * ${BURST_SPEED.toFixed(1)}) / ${BURST_WIDTH.toFixed(1)}, 2.0));
    vec2 away = reach > 0.001 ? delta / reach : vec2(0.0);
    float fade = (1.0 - burst.z) * (1.0 - burst.z) * burst.w;
    shift += away * wave * fade * 56.0 * smoothstep(0.0, 30.0, reach);
    flash += wave * fade;
  }
  screen += shift;

  float diameter = (uRandomness <= 0.0 ? uSize : uSize * (1.0 + uRandomness * (aRandom.x - 0.5)) / dist) * (1.0 + min(flash, 1.0) * 0.6);
  float device = diameter * uRatio;
  float radius = max(diameter, 1.0 / uRatio) * 0.5;
  float coverage = min(1.0, device * device);
  float blur = uBlur * max(uFocus - dist, 0.0) / max(dist, 1.0);
  float halo = uGlow > 0.0 ? radius * 2.5 + 2.0 : 0.0;
  float extent = radius * (uShape == 3 ? 1.6 : 1.0) + blur + halo + 1.5;

  float twinkle = 1.0 - uTwinkle * 0.6 * (0.5 + 0.5 * sin(uTime * (6.0 + aRandom.y * 14.0) + aRandom.w * 40.0));
  float far = smoothstep(${FAR.toFixed(1)}, ${(FAR * 0.9).toFixed(1)}, ahead);
  float focus = radius / (radius + blur);
  float reveal = clamp(uReveal * 1.6 - aRandom.z * 0.6, 0.0, 1.0);

  vLocal = aCorner * extent;
  vRadius = radius;
  vBlur = blur;
  vHalo = halo;
  vSeed = aRandom.y;
  vAlpha = min(1.0, coverage * twinkle * (1.0 + flash * 1.4)) * far * edge * max(focus, 0.35) * reveal * reveal;
  vColor = aColor;
  gl_Position = vec4((screen + aCorner * extent) / uView * 2.0 - 1.0, 0.0, 1.0);
}`;

  const PARTICLE_FRAGMENT = `#version 300 es
precision highp float;
precision highp int;
uniform int uShape;
uniform float uGlow;
uniform float uRatio;
uniform float uTime;
uniform float uSoft;
uniform float uShimmer;
uniform float uOpacity;
in vec2 vLocal;
in float vRadius;
in float vBlur;
in float vAlpha;
in float vHalo;
in float vSeed;
in vec3 vColor;
out vec4 outColor;

float ray(vec2 q, float aa) {
  float width = 0.14 * max(0.0, 1.0 - q.x);
  return (1.0 - smoothstep(width - aa, width + aa, q.y)) * step(q.x, 1.0);
}

void main() {
  float soft = vBlur + 0.7 / uRatio + vRadius * uSoft;
  float d = length(vLocal);
  float shape;
  if (uShape == 1) {
    float box = max(abs(vLocal.x), abs(vLocal.y));
    shape = 1.0 - smoothstep(vRadius * 0.86 - soft, vRadius * 0.86 + soft, box);
  } else if (uShape == 2) {
    float edge = max(vRadius * 0.22, 0.6 / uRatio);
    shape = 1.0 - smoothstep(edge - soft, edge + soft, abs(d - vRadius * 0.8));
  } else if (uShape == 3) {
    float reach = vRadius * 1.6;
    vec2 q = abs(vLocal) / max(reach, 0.0001);
    float aa = soft / max(reach, 0.0001);
    shape = max(max(ray(q, aa), ray(q.yx, aa)), 1.0 - smoothstep(vRadius * 0.32 - soft, vRadius * 0.32 + soft, d));
  } else {
    shape = 1.0 - smoothstep(vRadius - soft, vRadius + soft, d);
  }
  float halo = vHalo > 0.0 ? exp(-d / (vHalo * 0.35)) * uGlow * 0.4 : 0.0;
  float alpha = clamp(shape + halo * (1.0 - shape), 0.0, 1.0) * vAlpha * uOpacity * (1.0 - uSoft);
  if (alpha < 0.002) discard;
  vec2 uv = vLocal / max(vRadius * 2.0, 0.0001) + 0.5;
  vec3 color = clamp(vColor + uShimmer * 0.2 * sin(uv.yxx + uTime + vSeed * 6.28), 0.0, 1.0);
  outColor = vec4(color * alpha, alpha);
}`;

  const LINE_VERTEX = `#version 300 es
precision highp float;
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec4 aEnds;
layout(location = 2) in vec4 aTint;
uniform vec2 uView;
uniform float uRatio;
uniform float uWidth;
out float vAcross;
out float vHalf;
out vec4 vTint;

void main() {
  vec2 a = aEnds.xy;
  vec2 b = aEnds.zw;
  vec2 along = b - a;
  float span = max(length(along), 0.0001);
  vec2 normal = vec2(-along.y, along.x) / span;
  float reach = uWidth * 0.5 + 1.0 / uRatio;
  vec2 point = mix(a, b, aCorner.x * 0.5 + 0.5) + normal * aCorner.y * reach;
  vAcross = aCorner.y * reach;
  vHalf = uWidth * 0.5;
  vTint = aTint;
  gl_Position = vec4(point / uView * 2.0 - 1.0, 0.0, 1.0);
}`;

  const LINE_FRAGMENT = `#version 300 es
precision highp float;
uniform float uRatio;
uniform float uOpacity;
in float vAcross;
in float vHalf;
in vec4 vTint;
out vec4 outColor;

void main() {
  float edge = 0.6 / uRatio;
  float cover = 1.0 - smoothstep(vHalf - edge, vHalf + edge, abs(vAcross));
  float alpha = cover * vTint.a * uOpacity;
  outColor = vec4(vTint.rgb * alpha, alpha);
}`;

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  const compile = (gl, type, source) => {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
    gl.deleteShader(shader);
    return null;
  };

  const link = (gl, vertexSource, fragmentSource) => {
    const vertex = compile(gl, gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) return null;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    const uniforms = {};
    const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(program, i);
      if (info) uniforms[info.name.replace('[0]', '')] = gl.getUniformLocation(program, info.name);
    }
    return { program, uniforms };
  };

  const seeded = seed => {
    let state = seed >>> 0;
    return () => {
      state = (state + 0x6d2b79f5) >>> 0;
      let t = state;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };

  const easeOut = t => 1 - Math.pow(1 - clamp(t, 0, 1), 3);
  const wrap = (value, span) => ((value % span) + span) % span;


  /* ── formaciones 3D: una geometría por sección ──
     Cada generador devuelve coordenadas normalizadas en [-1,1]. El shader
     las multiplica por spread y por DEPTH en z, así que la profundidad
     se mantiene en todas. */
  const FORMATIONS = {
    top: (i, n, rnd) => {
      let x, y, z, len;
      do { x = rnd() * 2 - 1; y = rnd() * 2 - 1; z = rnd() * 2 - 1; len = x * x + y * y + z * z; }
      while (len > 1 || len === 0);
      const r = Math.cbrt(rnd());
      return [x * r, y * r, z * r];
    },
    origen: (i, n, rnd) => {
      const side = Math.ceil(Math.cbrt(n));
      const k = i % (side * side * side);
      const x = (k % side) / (side - 1) * 2 - 1;
      const y = (Math.floor(k / side) % side) / (side - 1) * 2 - 1;
      const z = Math.floor(k / (side * side)) / (side - 1) * 2 - 1;
      return [x * 0.85 + (rnd() - 0.5) * 0.06, y * 0.85 + (rnd() - 0.5) * 0.06, z * 0.85 + (rnd() - 0.5) * 0.06];
    },
    trayectoria: (i, n, rnd) => {
      const t = i / n;
      const a = t * Math.PI * 6;
      const r = 0.25 + t * 0.7;
      return [Math.cos(a) * r, (t - 0.5) * 1.8, Math.sin(a) * r * 0.6];
    },
    investigacion: (i, n, rnd) => {
      const c = [[-0.5, -0.4, -0.3], [0.55, -0.35, 0.2], [-0.45, 0.5, 0.35], [0.5, 0.45, -0.25]][i % 4];
      const s = 0.32;
      return [c[0] + (rnd() - 0.5) * s, c[1] + (rnd() - 0.5) * s, c[2] + (rnd() - 0.5) * s];
    },
    taller: (i, n, rnd) => {
      const cols = 8, rows = 6;
      const c = i % cols, r = Math.floor(i / cols) % rows, d = Math.floor(i / (cols * rows)) % 4;
      return [(c / (cols - 1)) * 2 - 1, (r / (rows - 1)) * 2 - 1, (d / 3) * 2 - 1];
    },
    aulas: (i, n, rnd) => {
      const a = (i / n) * Math.PI * 2;
      const b = (i / n) * Math.PI * 8;
      const R = 0.75, r = 0.22;
      return [(R + r * Math.cos(b)) * Math.cos(a), r * Math.sin(b), (R + r * Math.cos(b)) * Math.sin(a)];
    },
    formacion: (i, n, rnd) => {
      const layer = i % 5;
      const a = (i / n) * Math.PI * 2 * 3;
      const r = 0.2 + (layer / 4) * 0.75;
      return [Math.cos(a) * r, (layer / 4) * 2 - 1, Math.sin(a) * r];
    },
    certificados: (i, n, rnd) => {
      const ring = i % 4;
      const a = (i / n) * Math.PI * 2 * (ring + 1);
      const r = 0.25 + ring * 0.22;
      return [Math.cos(a) * r, Math.sin(a) * r * 0.55, (rnd() - 0.5) * 0.5];
    },
    habilidades: (i, n, rnd) => {
      let x, y, z, len;
      do { x = rnd() * 2 - 1; y = rnd() * 2 - 1; z = rnd() * 2 - 1; len = x * x + y * y + z * z; }
      while (len > 1 || len === 0);
      const r = 0.55 + rnd() * 0.45;
      return [x * r, y * r, z * r];
    },
    publicaciones: (i, n, rnd) => {
      const spoke = i % 6;
      const a = (spoke / 6) * Math.PI * 2;
      const t = (Math.floor(i / 6) % 12) / 11;
      const r = 0.15 + t * 0.85;
      return [Math.cos(a) * r, Math.sin(a) * r * 0.7, (rnd() - 0.5) * 0.6];
    },
    cv: (i, n, rnd) => {
      const col = i % 4;
      const row = Math.floor(i / 4) % 10;
      return [(col / 3) * 2 - 1, (row / 9) * 2 - 1, (rnd() - 0.5) * 0.8];
    },
    apnea: (i, n, rnd) => {
      const t = i / n;
      const a = t * Math.PI * 4;
      return [(t - 0.5) * 1.9, Math.sin(a) * 0.45, Math.cos(a) * 0.35];
    },
    contacto: (i, n, rnd) => {
      const a = (i / n) * Math.PI * 2;
      const r = 0.35 + rnd() * 0.15;
      return [Math.cos(a) * r, Math.sin(a) * r, (rnd() - 0.5) * 0.3];
    }
  };

  /* ── paleta desde las variables CSS ── */
  const readPalette = () => {
    const cs = getComputedStyle(document.documentElement);
    const v = (name, fallback) => cs.getPropertyValue(name).trim() || fallback;
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    const fire = document.documentElement.classList.contains('fire');
    if (fire) {
      return { colors: ['#FF4D14', '#FF8A3D', '#FFB347', '#FFD9B8'], lightMode: false };
    }
    if (dark) {
      return { colors: [v('--accent', '#8FB3F5'), v('--edu', '#6FC0E8'), v('--teach', '#7BCBA0'), v('--pub', '#DE8FB4')], lightMode: false };
    }
    return { colors: [v('--accent', '#003DA5'), v('--edu', '#0078BF'), v('--teach', '#2E7D5B'), v('--pub', '#A64D79')], lightMode: true };
  };

  const boot = () => {
    const container = document.getElementById('bg');
    if (!container) return;
    if (!window.WebGL2RenderingContext) { container.style.display = 'none'; return; }

    const canvas = document.createElement('canvas');
    canvas.className = 'particles-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    container.appendChild(canvas);

    const gl = canvas.getContext('webgl2', {
      alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false
    });
    if (!gl) { canvas.remove(); return; }

    const dots = link(gl, PARTICLE_VERTEX, PARTICLE_FRAGMENT);
    const lines = link(gl, LINE_VERTEX, LINE_FRAGMENT);
    if (!dots || !lines) { canvas.remove(); return; }

    const corners = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, corners);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const positionBuffer = gl.createBuffer();
    const randomBuffer = gl.createBuffer();
    const colorBuffer = gl.createBuffer();
    const dotVao = gl.createVertexArray();
    gl.bindVertexArray(dotVao);
    gl.bindBuffer(gl.ARRAY_BUFFER, corners);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    const attach = (buffer, location, width) => {
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, width, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(location, 1);
    };
    attach(positionBuffer, 1, 3);
    attach(randomBuffer, 2, 4);
    attach(colorBuffer, 3, 3);

    const lineBuffer = gl.createBuffer();
    const lineData = new Float32Array(MAX_LINES * 8);
    const lineVao = gl.createVertexArray();
    gl.bindVertexArray(lineVao);
    gl.bindBuffer(gl.ARRAY_BUFFER, corners);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, lineBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, lineData.byteLength, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 32, 0);
    gl.vertexAttribDivisor(1, 1);
    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 4, gl.FLOAT, false, 32, 16);
    gl.vertexAttribDivisor(2, 1);
    gl.bindVertexArray(null);

    const probe = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cache = new Map();
    const parse = value => {
      if (cache.has(value)) return cache.get(value);
      let rgb = [1, 1, 1];
      if (probe) {
        probe.clearRect(0, 0, 1, 1);
        probe.fillStyle = '#ffffff';
        probe.fillStyle = value;
        probe.fillRect(0, 0, 1, 1);
        const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
        rgb = [r / 255, g / 255, b / 255];
      }
      cache.set(value, rgb);
      return rgb;
    };
    const ink = rgb => {
      const linear = rgb.map(v => Math.pow(v, 2.2));
      const tone = 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
      const depth = Math.min(1, 0.06 / Math.max(tone, 0.0001));
      return linear.map(v => Math.pow(v * depth, 1 / 2.2));
    };

    /* ── ajustes adaptados al sitio ── */
    const settings = {
      count: 420,
      spread: 4.6,
      speed: 0.09,
      colors: [],
      mouse: true,
      hoverFactor: 1,
      soft: false,
      size: 52,
      randomness: 1,
      camera: 14,
      rotate: true,
      shape: SHAPES.circle,
      glow: 0.75,
      twinkle: 0.38,
      depthOfField: 0.35,
      connections: true,
      connectionDistance: 145,
      hoverEffect: EFFECTS.parallax,
      hoverRadius: 150,
      clickBurst: true,
      drift: DRIFTS.none,
      driftSpeed: 1,
      variation: 2,
      formation: 'top',
      intro: true,
      opacity: 1,
      lightMode: false,
      paused: false
    };

    const view = { width: 1, height: 1, ratio: 1 };
    const pointer = { x: 0, y: 0, sx: 0, sy: 0, nx: 0, ny: 0, inside: false, active: 0 };
    const state = { clock: 0, spin: 0, travel: 0, offsetX: 0, offsetY: 0, reveal: settings.intro && !reduce ? 0 : 1 };
    const bursts = [];
    const packedBursts = new Float32Array(MAX_BURSTS * 4);
    const cloud = { key: '', count: 0, positions: new Float32Array(0), randoms: new Float32Array(0), colors: new Float32Array(0) };
    const screen = { x: new Float32Array(0), y: new Float32Array(0), ahead: new Float32Array(0), alpha: new Float32Array(0) };
    let raf = 0, last = 0, visible = true, disposed = false;

    const rebuild = s => {
      const key = s.count + '|' + s.variation + '|' + s.formation + '|' + s.colors.join(',') + '|' + (s.lightMode ? 1 : 0);
      if (key === cloud.key) return;
      cloud.key = key;
      const next = seeded(s.variation * 7919 + 1);
      const total = s.count;
      const positions = new Float32Array(total * 3);
      const randoms = new Float32Array(total * 4);
      const tints = new Float32Array(total * 3);
      const swatches = s.colors.map(value => (s.lightMode ? ink(parse(value)) : parse(value)));
      const shape = FORMATIONS[s.formation] || FORMATIONS.top;
      for (let i = 0; i < total; i++) {
        const p = shape(i, total, next);
        positions.set([p[0], p[1], p[2]], i * 3);
        randoms.set([next(), next(), next(), next()], i * 4);
        tints.set(swatches[Math.floor(next() * swatches.length)], i * 3);
      }
      cloud.count = total;
      cloud.positions = positions;
      cloud.randoms = randoms;
      cloud.colors = tints;
      const linked = Math.min(total, MAX_LINKED);
      screen.x = new Float32Array(linked);
      screen.y = new Float32Array(linked);
      screen.ahead = new Float32Array(linked);
      screen.alpha = new Float32Array(linked);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, randomBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, randoms, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, tints, gl.STATIC_DRAW);
    };

    const rotationOf = s => {
      const elapsed = state.clock * 1000;
      const x = s.rotate ? Math.sin(elapsed * 0.0002) * 0.1 : 0;
      const y = s.rotate ? Math.cos(elapsed * 0.0005) * 0.15 : 0;
      const z = s.rotate ? state.spin : 0;
      const sx = Math.sin(x), cx = Math.cos(x), sy = Math.sin(y), cy = Math.cos(y), sz = Math.sin(z), cz = Math.cos(z);
      return [
        cy * cz + sy * sx * sz, cx * sz, -sy * cz + cy * sx * sz,
        -cy * sz + sy * sx * cz, cx * cz, sy * sz + cy * sx * cz,
        sy * cx, -sx, cy * cx
      ];
    };

    const offsetOf = () => [state.offsetX, state.offsetY, -(1 - easeOut(state.reveal)) * 70];

    const project = (s, matrix) => {
      const total = Math.min(cloud.count, MAX_LINKED);
      const ox = offsetOf()[0], oy = offsetOf()[1], oz = offsetOf()[2];
      const aspect = view.width / view.height;
      const time = state.clock;
      const radius = s.hoverRadius;
      const active = s.hoverEffect !== 0 ? pointer.active : 0;
      const spanY = s.spread * 2 + 3;
      const spanZ = s.spread * DEPTH * 2 + 3;
      for (let i = 0; i < total; i++) {
        const px = cloud.positions[i * 3] * s.spread;
        const py = cloud.positions[i * 3 + 1] * s.spread;
        const pz = cloud.positions[i * 3 + 2] * s.spread * DEPTH;
        const r0 = cloud.randoms[i * 4], r1 = cloud.randoms[i * 4 + 1];
        const r2 = cloud.randoms[i * 4 + 2], r3 = cloud.randoms[i * 4 + 3];
        const bobX = Math.sin(time * r2 + 6.28 * r3) * (0.1 + 1.4 * r0);
        const bobY = Math.sin(time * r1 + 6.28 * r0) * (0.1 + 1.4 * r3);
        const bobZ = Math.sin(time * r3 + 6.28 * r1) * (0.1 + 1.4 * r2);
        const wx = matrix[0] * px + matrix[3] * py + matrix[6] * pz + ox + bobX;
        let wy = matrix[1] * px + matrix[4] * py + matrix[7] * pz + oy + bobY;
        let wz = matrix[2] * px + matrix[5] * py + matrix[8] * pz + oz + bobZ;
        let edge = 1;
        if (s.drift === 1 || s.drift === 2) {
          const k = wrap(r3 * spanY + oy + bobY + (s.drift === 1 ? state.travel : -state.travel), spanY);
          wy = k - spanY / 2;
          const low = clamp(k / (spanY * 0.12), 0, 1);
          const high = clamp((spanY - k) / (spanY * 0.12), 0, 1);
          edge = low * low * (3 - 2 * low) * high * high * (3 - 2 * high);
        } else if (s.drift === 3) {
          const k = wrap(r1 * spanZ + oz + bobZ + state.travel, spanZ);
          wz = k - spanZ / 2;
          const fresh = clamp(k / (spanZ * 0.1), 0, 1);
          edge = fresh * fresh * (3 - 2 * fresh);
        }
        const ahead = s.camera - wz;
        if (ahead < NEAR || ahead > FAR) { screen.alpha[i] = 0; continue; }
        const close = clamp((ahead - 1) / 3, 0, 1);
        edge *= close * close * (3 - 2 * close);
        let sx = ((wx * FOCAL) / aspect / ahead) * 0.5 * view.width + view.width / 2;
        let sy = ((wy * FOCAL) / ahead) * 0.5 * view.height + view.height / 2;
        let dx = 0, dy = 0;
        if (active > 0.001) {
          const ex = sx - pointer.sx, ey = sy - pointer.sy;
          const reach = Math.hypot(ex, ey);
          const falloff = Math.exp(-(ex * ex + ey * ey) / (radius * radius)) * s.hoverFactor * active;
          if (s.hoverEffect === 1 && reach > 0.001) {
            dx += (ex / reach) * radius * 0.5 * falloff;
            dy += (ey / reach) * radius * 0.5 * falloff;
          } else if (s.hoverEffect === 2) {
            dx -= ex * 0.6 * falloff;
            dy -= ey * 0.6 * falloff;
          }
        }
        for (const burst of bursts) {
          const progress = burst.age / BURST_SECONDS;
          const ex = sx - burst.x, ey = sy - burst.y;
          const reach = Math.hypot(ex, ey);
          if (reach < 0.001) continue;
          const wave = Math.exp(-Math.pow((reach - progress * BURST_SPEED) / BURST_WIDTH, 2));
          const ramp = clamp(reach / 30, 0, 1);
          const push = wave * (1 - progress) * (1 - progress) * 56 * ramp * ramp * (3 - 2 * ramp);
          dx += (ex / reach) * push;
          dy += (ey / reach) * push;
        }
        sx += dx; sy += dy;
        const far = clamp((FAR - ahead) / (FAR - FAR * 0.9), 0, 1);
        const reveal = clamp(state.reveal * 1.6 - r2 * 0.6, 0, 1);
        screen.x[i] = sx;
        screen.y[i] = sy;
        screen.ahead[i] = ahead;
        screen.alpha[i] = far * far * (3 - 2 * far) * edge * reveal * reveal;
      }
      return total;
    };

    const buildLines = (s, matrix) => {
      const total = project(s, matrix);
      const reach = s.connectionDistance;
      const columns = Math.max(1, Math.ceil(view.width / reach) + 2);
      const buckets = new Map();
      for (let i = 0; i < total; i++) {
        if (screen.alpha[i] < 0.02) continue;
        const key = (Math.floor(screen.y[i] / reach) + 1) * columns + Math.floor(screen.x[i] / reach) + 1;
        const bucket = buckets.get(key);
        if (bucket) bucket.push(i); else buckets.set(key, [i]);
      }
      let lineCount = 0;
      const limit = reach * reach;
      for (const [key, members] of buckets) {
        for (const offset of [0, 1, columns - 1, columns, columns + 1]) {
          const others = offset === 0 ? members : buckets.get(key + offset);
          if (!others) continue;
          for (let a = 0; a < members.length; a++) {
            const i = members[a];
            for (let b = offset === 0 ? a + 1 : 0; b < others.length; b++) {
              const j = others[b];
              const dx = screen.x[i] - screen.x[j];
              const dy = screen.y[i] - screen.y[j];
              const gap = dx * dx + dy * dy;
              if (gap > limit) continue;
              const layer = clamp(1 - Math.abs(screen.ahead[i] - screen.ahead[j]) / 18, 0, 1);
              if (layer <= 0) continue;
              if (lineCount >= MAX_LINES) return lineCount;
              const fade = 1 - Math.sqrt(gap) / reach;
              const base = lineCount * 8;
              lineData[base] = screen.x[i];
              lineData[base + 1] = screen.y[i];
              lineData[base + 2] = screen.x[j];
              lineData[base + 3] = screen.y[j];
              lineData[base + 4] = (cloud.colors[i * 3] + cloud.colors[j * 3]) / 2;
              lineData[base + 5] = (cloud.colors[i * 3 + 1] + cloud.colors[j * 3 + 1]) / 2;
              lineData[base + 6] = (cloud.colors[i * 3 + 2] + cloud.colors[j * 3 + 2]) / 2;
              lineData[base + 7] = fade * fade * layer * 0.7 * Math.min(screen.alpha[i], screen.alpha[j]);
              lineCount++;
            }
          }
        }
      }
      return lineCount;
    };

    const render = () => {
      const s = settings;
      rebuild(s);
      const matrix = rotationOf(s);
      const off = offsetOf();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      if (s.connections) {
        const lineCount = buildLines(s, matrix);
        if (lineCount) {
          gl.useProgram(lines.program);
          gl.bindVertexArray(lineVao);
          gl.bindBuffer(gl.ARRAY_BUFFER, lineBuffer);
          gl.bufferSubData(gl.ARRAY_BUFFER, 0, lineData.subarray(0, lineCount * 8));
          gl.uniform2f(lines.uniforms.uView, view.width, view.height);
          gl.uniform1f(lines.uniforms.uRatio, view.ratio);
          gl.uniform1f(lines.uniforms.uWidth, 1);
          gl.uniform1f(lines.uniforms.uOpacity, s.opacity);
          gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, lineCount);
        }
      }

      const u = dots.uniforms;
      let burstCount = 0;
      for (let i = bursts.length - 1; i >= 0 && burstCount < MAX_BURSTS; i--) {
        packedBursts.set([bursts[i].x, bursts[i].y, bursts[i].age / BURST_SECONDS, 1], burstCount * 4);
        burstCount++;
      }
      gl.useProgram(dots.program);
      gl.bindVertexArray(dotVao);
      gl.uniformMatrix3fv(u.uRotation, false, matrix);
      gl.uniform3f(u.uOffset, off[0], off[1], off[2]);
      gl.uniform1f(u.uSpread, s.spread);
      gl.uniform1f(u.uTime, state.clock);
      gl.uniform1f(u.uCamera, s.camera);
      gl.uniform1f(u.uAspect, view.width / view.height);
      gl.uniform2f(u.uView, view.width, view.height);
      gl.uniform1f(u.uRatio, view.ratio);
      gl.uniform1f(u.uSize, s.size);
      gl.uniform1f(u.uRandomness, s.randomness);
      gl.uniform1f(u.uBlur, s.depthOfField * 14);
      gl.uniform1f(u.uFocus, s.camera + 14);
      gl.uniform1f(u.uGlow, s.lightMode ? s.glow * 0.3 : s.glow);
      gl.uniform1f(u.uTwinkle, s.twinkle);
      gl.uniform1i(u.uShape, s.shape);
      gl.uniform1i(u.uDrift, s.drift);
      gl.uniform1f(u.uTravel, state.travel);
      gl.uniform4f(u.uPointer, pointer.sx, pointer.sy, pointer.active, s.hoverRadius);
      gl.uniform1i(u.uEffect, s.hoverEffect);
      gl.uniform1f(u.uStrength, s.hoverFactor);
      gl.uniform4fv(u.uBursts, packedBursts);
      gl.uniform1i(u.uBurstCount, burstCount);
      gl.uniform1f(u.uReveal, state.reveal);
      gl.uniform1f(u.uSoft, s.soft ? 0.2 : 0);
      gl.uniform1f(u.uShimmer, s.lightMode ? 0 : 1);
      gl.uniform1f(u.uOpacity, s.opacity);
      gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, cloud.count);
      gl.bindVertexArray(null);
    };

    const frame = now => {
      raf = 0;
      if (disposed || !visible || document.hidden) return;
      const s = settings;
      const dt = last ? clamp((now - last) / 1000, 0.0005, 0.05) : 1 / 60;
      last = now;
      if (s.paused) { state.reveal = 1; render(); last = 0; return; }

      /* reactividad al audio: el bajo acelera y enciende el campo */
      if (typeof window.readAudio === 'function') window.readAudio();
      const A = window.audioState || { level: 0, punch: 0 };
      const boost = 1 + (A.punch || 0) * 3.4 + (A.level || 0) * 0.9;
      /* el audio también enciende el glow y abre la nube */
      settings.glow = 0.75 + (A.punch || 0) * 0.9;
      settings.spread = 4.6 + (A.punch || 0) * 1.6;
      const motion = reduce ? 0 : 1;
      const pace = dt * s.speed * motion * boost;
      state.clock += pace;
      if (s.rotate) state.spin += pace * 0.6;
      state.travel += dt * s.driftSpeed * motion * 0.9;

      const engaged = s.mouse && pointer.inside && !reduce;
      const follow = 1 - Math.exp(-dt / 0.35);
      const parallax = engaged && s.hoverEffect === 0 ? s.hoverFactor : 0;
      state.offsetX += (-pointer.nx * parallax - state.offsetX) * follow;
      state.offsetY += (-pointer.ny * parallax - state.offsetY) * follow;
      pointer.sx += (pointer.x - pointer.sx) * (1 - Math.exp(-dt / 0.06));
      pointer.sy += (pointer.y - pointer.sy) * (1 - Math.exp(-dt / 0.06));
      pointer.active += ((engaged ? 1 : 0) - pointer.active) * (1 - Math.exp(-dt / 0.2));

      for (let i = bursts.length - 1; i >= 0; i--) {
        bursts[i].age += dt;
        if (bursts[i].age >= BURST_SECONDS) bursts.splice(i, 1);
      }

      if (!s.intro || reduce) state.reveal = 1;
      else if (state.reveal < 1) state.reveal = Math.min(1, state.reveal + dt / INTRO_SECONDS);

      render();
      raf = requestAnimationFrame(frame);
    };

    const wake = () => {
      if (!raf && !disposed && visible && !document.hidden) raf = requestAnimationFrame(frame);
    };

    const resize = () => {
      const width = Math.max(1, window.innerWidth);
      const height = Math.max(1, window.innerHeight);
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      view.width = width;
      view.height = height;
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      view.ratio = canvas.width / width;
      render();
      wake();
    };

    const locate = event => {
      const x = event.clientX;
      const y = event.clientY;
      const wasInside = pointer.inside;
      pointer.inside = x >= 0 && y >= 0 && x <= view.width && y <= view.height;
      pointer.x = x;
      pointer.y = view.height - y;
      pointer.nx = (x / Math.max(1, view.width)) * 2 - 1;
      pointer.ny = -((y / Math.max(1, view.height)) * 2 - 1);
      if (pointer.inside && !wasInside) { pointer.sx = pointer.x; pointer.sy = pointer.y; }
    };

    const onPointerMove = event => { locate(event); if (!settings.paused) wake(); };
    const onPointerDown = event => {
      locate(event);
      if (!pointer.inside || !settings.clickBurst || settings.paused || reduce) return;
      bursts.push({ x: pointer.x, y: pointer.y, age: 0 });
      if (bursts.length > MAX_BURSTS) bursts.shift();
      wake();
    };
    const onPointerLeave = () => { pointer.inside = false; };
    const onVisibility = () => { last = 0; wake(); };

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibility);

    /* paleta reactiva al tema y al modo fuego */
    const applyPalette = () => {
      const p = readPalette();
      settings.colors = p.colors;
      settings.lightMode = p.lightMode;
      cloud.key = '';
      wake();
    };
    applyPalette();
    const themeObserver = new MutationObserver(applyPalette);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });

    resize();
    wake();

    /* cambio de formación al navegar entre secciones */
    const setFormation = name => {
      if (!FORMATIONS[name] || settings.formation === name) return;
      settings.formation = name;
      cloud.key = '';
      state.reveal = 0.35;   /* pequeño fundido al cambiar de forma */
      wake();
    };
    window.__bgSetFormation = setFormation;

    /* observa las secciones y cambia la geometría al entrar */
    const sectionIds = ['origen','trayectoria','investigacion','taller','aulas','formacion',
                        'certificados','habilidades','publicaciones','cv','apnea','contacto'];
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setFormation(entry.target.id);
      });
    }, { threshold: 0.35, rootMargin: '-20% 0px -20% 0px' });
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    window.__bgParticles = {
      destroy() {
        disposed = true;
        cancelAnimationFrame(raf);
        themeObserver.disconnect();
        sectionObserver.disconnect();
        window.removeEventListener('resize', resize);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerdown', onPointerDown);
        document.documentElement.removeEventListener('pointerleave', onPointerLeave);
        document.removeEventListener('visibilitychange', onVisibility);
        gl.deleteProgram(dots.program);
        gl.deleteProgram(lines.program);
        [corners, positionBuffer, randomBuffer, colorBuffer, lineBuffer].forEach(b => gl.deleteBuffer(b));
        gl.deleteVertexArray(dotVao);
        gl.deleteVertexArray(lineVao);
        const lose = gl.getExtension('WEBGL_lose_context');
        if (lose) lose.loseContext();
        canvas.remove();
      }
    };
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
