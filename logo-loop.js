/* ════════════════════════════════════════════════════════════════
   LogoLoop (React Bits) portado a JS vanilla.
   Se conserva el motor: pista duplicada, desplazamiento continuo con
   envoltura, máscara de desvanecido, pausa al pasar el cursor, escala
   al hover, arrastre con inercia e intro escalonada.
   Se omiten las variantes wave/arc/orbit y el tilt 3D: aquí el loop es
   una línea limpia, que es lo que pide la sección de habilidades.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const SMOOTH_TAU = 0.25;
  const GLIDE_TAU = 0.8;
  const DRAG_THRESHOLD = 6;
  const MAX_FLING = 4000;
  const INTRO_TIME = 0.7;
  const INTRO_STAGGER = 0.45;

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const smootherstep = t => t * t * t * (t * (t * 6 - 15) + 10);

  const fadeMask = (size, vertical) => {
    const span = clamp(size, 0, 0.5) * 100;
    if (span <= 0) return undefined;
    const stops = [];
    for (let i = 0; i <= 12; i++) {
      stops.push(`rgba(0,0,0,${smootherstep(i / 12).toFixed(4)}) ${((span * i) / 12).toFixed(3)}%`);
    }
    for (let i = 12; i >= 0; i--) {
      stops.push(`rgba(0,0,0,${smootherstep(i / 12).toFixed(4)}) ${(100 - (span * i) / 12).toFixed(3)}%`);
    }
    return `linear-gradient(${vertical ? 'to bottom' : 'to right'}, ${stops.join(', ')})`;
  };

  const create = (root, options) => {
    const cfg = {
      speed: options.speed ?? 90,
      direction: options.direction || 'left',
      logoHeight: options.logoHeight ?? 34,
      gap: options.gap ?? 44,
      fadeOut: options.fadeOut !== false,
      fadeOutWidth: options.fadeOutWidth ?? 0.1,
      scaleOnHover: options.scaleOnHover !== false,
      pauseOnHover: options.pauseOnHover !== false,
      draggable: options.draggable !== false,
      intro: options.intro !== false,
      labels: options.labels || 'hover',
      logos: options.logos || []
    };

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dirSign = cfg.direction === 'right' ? -1 : 1;

    /* ── construir pista: dos copias para el bucle continuo ── */
    const track = document.createElement('div');
    track.className = 'logoloop__track';
    const buildList = (copy, primary) => {
      const ul = document.createElement('ul');
      ul.className = 'logoloop__list';
      ul.setAttribute('role', 'list');
      if (!primary) ul.setAttribute('aria-hidden', 'true');
      cfg.logos.forEach(item => {
        const li = document.createElement('li');
        li.className = 'logoloop__item';
        li.setAttribute('role', 'listitem');
        if (item.hoverColor) li.style.setProperty('--logoloop-item-color', item.hoverColor);

        const inner = document.createElement('span');
        inner.className = 'logoloop__node';
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || item.title || '';
        img.loading = 'lazy';
        img.decoding = 'async';
        img.draggable = false;
        inner.appendChild(img);

        let content;
        if (item.href) {
          content = document.createElement('a');
          content.className = 'logoloop__content';
          content.href = item.href;
          content.target = '_blank';
          content.rel = 'noreferrer noopener';
          content.setAttribute('aria-label', item.title || item.alt || 'logo');
          content.draggable = false;
          if (!primary) content.tabIndex = -1;
        } else {
          content = document.createElement('div');
          content.className = 'logoloop__content';
        }
        content.appendChild(inner);
        li.appendChild(content);

        if (cfg.labels === 'hover' && item.title) {
          const tip = document.createElement('span');
          tip.className = 'logoloop__tip';
          tip.setAttribute('aria-hidden', 'true');
          tip.textContent = item.title;
          li.appendChild(tip);
        }
        ul.appendChild(li);
      });
      return ul;
    };
    track.appendChild(buildList(0, true));
    track.appendChild(buildList(1, false));
    root.appendChild(track);

    if (cfg.fadeOut) {
      const mask = fadeMask(cfg.fadeOutWidth, false);
      root.style.webkitMaskImage = mask;
      root.style.maskImage = mask;
    }
    root.style.setProperty('--logoloop-gap', cfg.gap + 'px');
    root.style.setProperty('--logoloop-logoHeight', cfg.logoHeight + 'px');

    const st = {
      offset: 0, velocity: 0, period: 0, length: 0,
      hovered: false, focused: false,
      drag: null, glide: false, suppressUntil: 0,
      visible: true, introStart: -1, introDone: !cfg.intro,
      raf: 0, last: 0, destroyed: false
    };

    const items = () => Array.from(track.querySelectorAll('.logoloop__item'));

    const measure = () => {
      track.style.transform = 'none';
      const lists = track.children;
      if (lists.length < 2) return;
      const a = lists[0].getBoundingClientRect();
      const b = lists[1].getBoundingClientRect();
      st.period = b.left - a.left;
      st.length = root.clientWidth;
      if (st.period <= 0) return;
      render(performance.now());
    };

    const render = now => {
      const T = -st.offset;
      track.style.transform = `translate3d(${T.toFixed(2)}px, 0px, 0px)`;

      const introRunning = st.introStart >= 0;
      const elapsed = introRunning ? (now - st.introStart) / 1000 : 0;
      const half = st.length / 2;

      items().forEach(el => {
        if (!introRunning) {
          if (el.style.opacity) el.style.opacity = '';
          if (el.style.transform) el.style.transform = '';
          return;
        }
        const r = el.getBoundingClientRect();
        const x = r.left - root.getBoundingClientRect().left - half;
        const pos = clamp((x + half) / Math.max(1, st.length), 0, 1);
        const e = easeOut(clamp((elapsed - pos * INTRO_STAGGER) / INTRO_TIME, 0, 1));
        el.style.opacity = e.toFixed(3);
        el.style.transform = `translateY(${((1 - e) * 14).toFixed(2)}px)`;
      });
    };

    const frame = now => {
      st.raf = 0;
      if (st.destroyed || st.period <= 0) return;
      const dt = st.last ? clamp((now - st.last) / 1000, 0, 0.1) : 0;
      st.last = now;
      let busy = false;

      if (st.introStart === -1 && !st.introDone && st.visible) {
        if (cfg.intro && !reduce) st.introStart = now;
        else st.introDone = true;
      }
      if (st.introStart >= 0) {
        if ((now - st.introStart) / 1000 >= INTRO_TIME + INTRO_STAGGER) {
          st.introStart = -2;
          st.introDone = true;
        } else busy = true;
      }

      const paused = st.focused || (st.hovered && cfg.pauseOnHover);
      const target = reduce || paused ? 0 : cfg.speed * dirSign;

      if (st.drag && st.drag.active) {
        busy = true;
      } else {
        const tau = st.glide ? GLIDE_TAU : SMOOTH_TAU;
        st.velocity += (target - st.velocity) * (1 - Math.exp(-dt / tau));
        if (st.glide && Math.abs(st.velocity - target) < 2) st.glide = false;
        if (Math.abs(st.velocity - target) < 0.01) st.velocity = target;
        st.offset += st.velocity * dt;
        if (st.velocity !== 0 || target !== 0) busy = true;
      }

      if (!st.focused && !(st.drag && st.drag.active)) {
        st.offset = ((st.offset % st.period) + st.period) % st.period;
      }

      render(now);
      if (busy && st.visible && !st.destroyed) st.raf = requestAnimationFrame(frame);
    };

    const wake = () => {
      if (st.raf || st.destroyed || !st.visible) return;
      st.last = 0;
      st.raf = requestAnimationFrame(frame);
    };

    const local = e => {
      const r = root.getBoundingClientRect();
      return e.clientX - r.left;
    };

    const onEnter = () => { st.hovered = true; wake(); };
    const onLeave = () => { st.hovered = false; wake(); };

    const onDown = e => {
      if (!cfg.draggable || (e.pointerType === 'mouse' && e.button !== 0)) return;
      st.drag = { id: e.pointerId, x: local(e), active: false, samples: [], anchor: 0, offset: 0 };
    };

    const onMove = e => {
      const d = st.drag;
      if (!d || e.pointerId !== d.id) return;
      const x = local(e);
      const along = x - d.x;
      if (!d.active) {
        if (Math.abs(along) < DRAG_THRESHOLD) return;
        d.active = true;
        d.anchor = along;
        d.offset = st.offset;
        st.velocity = 0;
        st.glide = false;
        try { root.setPointerCapture(e.pointerId); } catch (err) {}
        root.setAttribute('data-dragging', '');
      }
      const next = d.offset - (along - d.anchor);
      const P = st.period || 1;
      st.offset = ((next % P) + P) % P;
      d.offset += st.offset - next;
      const now = performance.now();
      d.samples.push([now, along]);
      while (d.samples.length > 2 && now - d.samples[0][0] > 100) d.samples.shift();
      wake();
    };

    const endDrag = (e, cancelled) => {
      const d = st.drag;
      if (!d || e.pointerId !== d.id) return;
      st.drag = null;
      if (!d.active) return;
      root.removeAttribute('data-dragging');
      try { root.releasePointerCapture(e.pointerId); } catch (err) {}
      const now = performance.now();
      st.suppressUntil = now + 400;
      let v = 0;
      const s = d.samples;
      if (!cancelled && s.length > 1) {
        const [t0, a0] = s[0];
        const [t1, a1] = s[s.length - 1];
        if (t1 > t0 && now - t1 < 80) v = clamp((-(a1 - a0) / (t1 - t0)) * 1000, -MAX_FLING, MAX_FLING);
      }
      st.velocity = v;
      st.glide = Math.abs(v) > 30;
      wake();
    };

    const onClick = e => {
      if (performance.now() < st.suppressUntil) {
        e.preventDefault();
        e.stopPropagation();
        st.suppressUntil = 0;
      }
    };

    const onFocusIn = () => { st.focused = true; wake(); };
    const onFocusOut = e => {
      if (root.contains(e.relatedTarget)) return;
      st.focused = false;
      wake();
    };

    root.addEventListener('pointerenter', onEnter);
    root.addEventListener('pointerleave', onLeave);
    root.addEventListener('pointerdown', onDown);
    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerup', e => endDrag(e, false));
    root.addEventListener('pointercancel', e => endDrag(e, true));
    root.addEventListener('lostpointercapture', e => endDrag(e, true));
    root.addEventListener('click', onClick, true);
    root.addEventListener('focusin', onFocusIn);
    root.addEventListener('focusout', onFocusOut);

    let ro = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => { measure(); wake(); });
      ro.observe(root);
      ro.observe(track.children[0]);
    } else {
      window.addEventListener('resize', measure);
    }

    let io = null;
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(entries => {
        st.visible = entries[entries.length - 1].isIntersecting;
        if (st.visible) wake();
      }, { threshold: 0.1 });
      io.observe(root);
    }

    const onVisibility = () => { if (!document.hidden) wake(); };
    document.addEventListener('visibilitychange', onVisibility);

    measure();
    wake();

    return {
      destroy() {
        st.destroyed = true;
        cancelAnimationFrame(st.raf);
        ro && ro.disconnect();
        io && io.disconnect();
        document.removeEventListener('visibilitychange', onVisibility);
        root.removeEventListener('pointerenter', onEnter);
        root.removeEventListener('pointerleave', onLeave);
        root.removeEventListener('pointerdown', onDown);
        root.removeEventListener('pointermove', onMove);
        root.removeEventListener('click', onClick, true);
        root.removeEventListener('focusin', onFocusIn);
        root.removeEventListener('focusout', onFocusOut);
      }
    };
  };

  /* ── arranque: monta el loop en #skill-loop ── */
  const boot = () => {
    const root = document.getElementById('skill-loop');
    if (!root) return;

    const L = (file, title, href, hoverColor) => ({
      src: 'assets/logos/' + file + '.svg',
      alt: title,
      title,
      href,
      hoverColor
    });

    const logos = [
      L('python', 'Python', 'https://python.org', '#3776AB'),
      L('pandas', 'pandas', 'https://pandas.pydata.org', '#150458'),
      L('numpy', 'NumPy', 'https://numpy.org', '#013243'),
      L('polars', 'Polars', 'https://pola.rs', '#CD792C'),
      L('duckdb', 'DuckDB', 'https://duckdb.org', '#FFF000'),
      L('r', 'R', 'https://r-project.org', '#276DC3'),
      L('sqlalchemy', 'SQL', 'https://sqlalchemy.org', '#D71F00'),
      L('neo4j', 'Neo4j', 'https://neo4j.com', '#4581C3'),
      L('javascript', 'JavaScript', 'https://developer.mozilla.org/docs/Web/JavaScript', '#F7DF1E'),
      L('latex', 'LaTeX', 'https://latex-project.org', '#008080'),
      L('scikitlearn', 'scikit-learn', 'https://scikit-learn.org', '#F7931E'),
      L('pytorch', 'PyTorch', 'https://pytorch.org', '#EE4C2C'),
      L('tensorflow', 'TensorFlow', 'https://tensorflow.org', '#FF6F00'),
      L('huggingface', 'Transformers', 'https://huggingface.co', '#FFD21E'),
      L('ollama', 'Ollama', 'https://ollama.com', '#FFFFFF'),
      L('claude', 'Claude Code', 'https://claude.ai', '#D97757'),
      L('openrouter', 'OpenRouter', 'https://openrouter.ai', '#6467F2'),
      L('langchain', 'LangChain', 'https://langchain.com', '#1C3C3C'),
      L('docker', 'Docker', 'https://docker.com', '#2496ED'),
      L('apacheairflow', 'Airflow', 'https://airflow.apache.org', '#017CEE'),
      L('prefect', 'Prefect', 'https://prefect.io', '#070E10'),
      L('git', 'Git', 'https://git-scm.com', '#F05032'),
      L('linux', 'Linux', 'https://kernel.org', '#FCC624'),
      L('googlecolab', 'Colab', 'https://colab.research.google.com', '#F9AB00'),
      L('jupyter', 'Jupyter', 'https://jupyter.org', '#F37626'),
      L('d3', 'D3.js', 'https://d3js.org', '#F9A03C'),
      L('plotly', 'Plotly', 'https://plotly.com', '#3F4F75'),
      L('css', 'CSS', 'https://developer.mozilla.org/docs/Web/CSS', '#663399'),
      L('github', 'GitHub', 'https://github.com', '#181717'),
      L('overleaf', 'Overleaf', 'https://overleaf.com', '#47A141'),
      L('streamlit', 'Streamlit', 'https://streamlit.io', '#FF4B4B'),
      L('gradio', 'Gradio', 'https://gradio.app', '#FF7C00'),
      L('apachespark', 'Spark', 'https://spark.apache.org', '#E25A1C'),
      L('googlegemini', 'Gemini', 'https://gemini.google.com', '#8E75B2'),
      L('mistralai', 'Mistral', 'https://mistral.ai', '#FA520F')
    ];

    create(root, {
      logos,
      speed: 70,
      direction: 'left',
      logoHeight: 34,
      gap: 46,
      fadeOut: true,
      fadeOutWidth: 0.1,
      scaleOnHover: true,
      pauseOnHover: true,
      draggable: true,
      intro: true,
      labels: 'hover'
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
