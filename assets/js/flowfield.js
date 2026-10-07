// Generative background: hairline ink strokes carried by a slowly evolving
// curl-noise current. Trails fade instead of clearing, so the canvas keeps a
// short memory of the flow. The pointer stirs a soft vortex into the field.
(function () {
  "use strict";

  const canvas = document.getElementById("flowfield");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const DENSITY = 1 / 900; // particles per css px²
  const MAX_PARTICLES = 2200;
  const ACCENT_SHARE = 0.07; // strokes drawn in the accent color
  const EMBER_SHARE = 0.012; // rare warm strokes
  const SCALE = 1 / 980; // noise frequency
  const STEP = 1.1; // px per frame
  const FADE = 0.018; // trail decay per frame
  const DRIFT = 0.00006; // field evolution per ms
  const VORTEX_RADIUS = 220;

  // 3D simplex noise (Gustavson), seeded per visit so every visit draws a new piece.
  const perm = new Uint8Array(512);
  (function seed() {
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [p[i], p[j]] = [p[j], p[i]];
    }
    for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
  })();
  const G3 = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1];
  function noise3(x, y, z) {
    const F = 1 / 3,
      G = 1 / 6;
    const s = (x + y + z) * F;
    const i = Math.floor(x + s),
      j = Math.floor(y + s),
      k = Math.floor(z + s);
    const t = (i + j + k) * G;
    const x0 = x - i + t,
      y0 = y - j + t,
      z0 = z - k + t;
    let i1, j1, k1, i2, j2, k2;
    if (x0 >= y0) {
      if (y0 >= z0) [i1, j1, k1, i2, j2, k2] = [1, 0, 0, 1, 1, 0];
      else if (x0 >= z0) [i1, j1, k1, i2, j2, k2] = [1, 0, 0, 1, 0, 1];
      else [i1, j1, k1, i2, j2, k2] = [0, 0, 1, 1, 0, 1];
    } else {
      if (y0 < z0) [i1, j1, k1, i2, j2, k2] = [0, 0, 1, 0, 1, 1];
      else if (x0 < z0) [i1, j1, k1, i2, j2, k2] = [0, 1, 0, 0, 1, 1];
      else [i1, j1, k1, i2, j2, k2] = [0, 1, 0, 1, 1, 0];
    }
    const ii = i & 255,
      jj = j & 255,
      kk = k & 255;
    let n = 0;
    const corner = (dx, dy, dz, h) => {
      let a = 0.6 - dx * dx - dy * dy - dz * dz;
      if (a <= 0) return;
      const g = (h % 12) * 3;
      a *= a;
      n += a * a * (G3[g] * dx + G3[g + 1] * dy + G3[g + 2] * dz);
    };
    corner(x0, y0, z0, perm[ii + perm[jj + perm[kk]]]);
    corner(x0 - i1 + G, y0 - j1 + G, z0 - k1 + G, perm[ii + i1 + perm[jj + j1 + perm[kk + k1]]]);
    corner(x0 - i2 + 2 * G, y0 - j2 + 2 * G, z0 - k2 + 2 * G, perm[ii + i2 + perm[jj + j2 + perm[kk + k2]]]);
    corner(x0 - 1 + 3 * G, y0 - 1 + 3 * G, z0 - 1 + 3 * G, perm[ii + 1 + perm[jj + 1 + perm[kk + 1]]]);
    return 32 * n;
  }

  let width = 0,
    height = 0,
    time = Math.random() * 50;
  let particles = [];
  let palette = { ink: "rgba(20,20,20,.3)", accent: "rgba(40,90,70,.5)", ember: "rgba(190,90,50,.6)" };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0, power: 0, target: 0 };

  function readPalette() {
    const css = getComputedStyle(document.documentElement);
    palette = {
      ink: css.getPropertyValue("--flow-ink").trim() || palette.ink,
      accent: css.getPropertyValue("--flow-accent").trim() || palette.accent,
      ember: css.getPropertyValue("--flow-ember").trim() || palette.ember,
    };
  }

  function spawn(p) {
    p.x = Math.random() * width;
    p.y = Math.random() * height;
    p.age = 0;
    p.life = 260 + Math.random() * 520;
    return p;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(MAX_PARTICLES, Math.round(width * height * DENSITY));
    particles = Array.from({ length: count }, (_, i) => {
      const r = Math.random();
      const p = spawn({ tone: r < EMBER_SHARE ? "ember" : r < EMBER_SHARE + ACCENT_SHARE ? "accent" : "ink" });
      p.age = Math.random() * p.life; // stagger lifetimes
      return p;
    });
  }

  // Curl of a scalar noise potential: divergence-free, so strokes swirl and braid
  // rather than pile up in sinks.
  function velocity(x, y) {
    const e = 0.9;
    const sx = x * SCALE,
      sy = y * SCALE;
    const dpdy = (noise3(sx, sy + e * SCALE, time) - noise3(sx, sy - e * SCALE, time)) / (2 * e);
    const dpdx = (noise3(sx + e * SCALE, sy, time) - noise3(sx - e * SCALE, sy, time)) / (2 * e);
    let vx = dpdy,
      vy = -dpdx;
    const len = Math.hypot(vx, vy) || 1;
    vx /= len;
    vy /= len;
    if (pointer.power > 0.01) {
      const dx = x - pointer.x,
        dy = y - pointer.y;
      const d2 = dx * dx + dy * dy;
      const w = pointer.power * Math.exp(-d2 / (VORTEX_RADIUS * VORTEX_RADIUS));
      const d = Math.sqrt(d2) || 1;
      vx += (-dy / d) * w * 1.6;
      vy += (dx / d) * w * 1.6;
    }
    return [vx, vy];
  }

  function step() {
    // Fade previous trails toward transparent rather than painting a background,
    // so the page ground (and theme) shows through.
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = `rgba(0,0,0,${FADE})`;
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "source-over";

    ctx.lineCap = "round";
    for (const tone of ["ink", "accent", "ember"]) {
      ctx.beginPath();
      ctx.lineWidth = tone === "ink" ? 0.7 : 1;
      for (const p of particles) {
        if (p.tone !== tone) continue;
        const [vx, vy] = velocity(p.x, p.y);
        const nx = p.x + vx * STEP,
          ny = p.y + vy * STEP;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        p.x = nx;
        p.y = ny;
        if (++p.age > p.life || nx < -10 || ny < -10 || nx > width + 10 || ny > height + 10) spawn(p);
      }
      ctx.strokeStyle = palette[tone];
      ctx.stroke();
    }
  }

  // Without motion, still render a finished piece: run the system forward once.
  function still() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < 140; i++) step();
  }

  let last = 0,
    running = false;
  function frame(now) {
    if (!running) return;
    requestAnimationFrame(frame);
    const dt = Math.min(now - last, 64);
    last = now;
    time += DRIFT * dt;
    pointer.x += (pointer.tx - pointer.x) * 0.06;
    pointer.y += (pointer.ty - pointer.y) * 0.06;
    pointer.power += (pointer.target - pointer.power) * 0.03;
    step();
  }
  function start() {
    if (running || reduceMotion.matches || document.hidden) return;
    running = true;
    last = performance.now();
    requestAnimationFrame(frame);
  }
  const stop = () => (running = false);

  window.addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType !== "mouse") return;
      if (pointer.target === 0) (pointer.x = e.clientX), (pointer.y = e.clientY);
      pointer.tx = e.clientX;
      pointer.ty = e.clientY;
      pointer.target = 1;
    },
    { passive: true }
  );
  document.documentElement.addEventListener("pointerleave", () => (pointer.target = 0));
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  reduceMotion.addEventListener("change", () => (reduceMotion.matches ? (stop(), still()) : start()));
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      if (reduceMotion.matches) still();
    }, 150);
  });
  // The light/dark toggle flips data-theme on <html>; restart the piece in the new inks.
  new MutationObserver(() => {
    readPalette();
    ctx.clearRect(0, 0, width, height);
    if (reduceMotion.matches) still();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  readPalette();
  resize();
  if (reduceMotion.matches) still();
  else {
    for (let i = 0; i < 60; i++) step(); // open on a drawn canvas, not an empty one
    start();
  }
})();
