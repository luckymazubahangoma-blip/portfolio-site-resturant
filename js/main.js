/* Ember & Oak — shared progressive enhancements.
   Content and navigation remain usable when JavaScript is unavailable. */
(() => {
  'use strict';
  // Hidden reveal states are enabled only after this script has loaded.
  document.documentElement.classList.add('js');

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Accessible mobile navigation.
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuButton && mobileNav) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      mobileNav.classList.remove('is-open');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      mobileNav.classList.toggle('is-open', !isOpen);
    });

    mobileNav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        menuButton.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (!mobileNav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
  }

  // Reveal content as it enters the viewport; show everything without IO support.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  // A restrained, interactive low-poly mesh for the homepage hero.
  // It pauses when off-screen and is omitted on small/low-power devices.
  const canvas = document.getElementById('hero-mesh');
  if (!canvas || reducedMotion) return;

  const context = canvas.getContext('2d', { alpha: true });
  const smallScreen = window.matchMedia('(max-width: 520px)').matches;
  if (!context || smallScreen) return;

  let width = 0;
  let height = 0;
  let points = [];
  let frame = 0;
  let visible = true;
  let pointer = { x: 0.5, y: 0.5 };
  let targetPointer = { x: 0.5, y: 0.5 };
  const columns = 9;
  const rows = 6;

  const makePoints = () => {
    points = [];
    for (let row = 0; row <= rows; row += 1) {
      for (let column = 0; column <= columns; column += 1) {
        const jitterX = (Math.random() - 0.5) * 38;
        const jitterY = (Math.random() - 0.5) * 34;
        points.push({
          x: (column / columns) * width + jitterX,
          y: (row / rows) * height + jitterY,
          baseX: (column / columns) * width + jitterX,
          baseY: (row / rows) * height + jitterY,
          phase: Math.random() * Math.PI * 2
        });
      }
    }
  };

  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    width = bounds.width;
    height = bounds.height;
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    makePoints();
  };

  const drawTriangle = (a, b, c, alpha) => {
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.lineTo(c.x, c.y);
    context.closePath();
    context.fillStyle = 'rgba(223, 145, 105, ' + alpha + ')';
    context.fill();
    context.strokeStyle = 'rgba(247, 205, 165, 0.075)';
    context.lineWidth = 1;
    context.stroke();
  };

  const render = (time) => {
    if (!visible) {
      frame = 0;
      return;
    }
    context.clearRect(0, 0, width, height);
    pointer.x += (targetPointer.x - pointer.x) * 0.035;
    pointer.y += (targetPointer.y - pointer.y) * 0.035;
    const drift = time * 0.00018;

    points.forEach((point) => {
      const influenceX = (pointer.x - 0.5) * 17;
      const influenceY = (pointer.y - 0.5) * 17;
      point.x = point.baseX + Math.sin(drift + point.phase) * 4 + influenceX;
      point.y = point.baseY + Math.cos(drift + point.phase) * 3 + influenceY;
    });

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const topLeft = points[row * (columns + 1) + column];
        const topRight = points[row * (columns + 1) + column + 1];
        const bottomLeft = points[(row + 1) * (columns + 1) + column];
        const bottomRight = points[(row + 1) * (columns + 1) + column + 1];
        const alpha = 0.018 + ((row + column) % 4) * 0.009;
        drawTriangle(topLeft, bottomLeft, topRight, alpha);
        drawTriangle(topRight, bottomLeft, bottomRight, alpha * 0.8);
      }
    }
    frame = window.requestAnimationFrame(render);
  };

  const start = () => {
    if (visible && !frame) frame = window.requestAnimationFrame(render);
  };
  const stop = () => {
    if (frame) window.cancelAnimationFrame(frame);
    frame = 0;
  };

  const heroSection = canvas.closest('.hero') || canvas;
  heroSection.addEventListener('pointermove', (event) => {
    const bounds = canvas.getBoundingClientRect();
    targetPointer = {
      x: (event.clientX - bounds.left) / bounds.width,
      y: (event.clientY - bounds.top) / bounds.height
    };
  }, { passive: true });

  heroSection.addEventListener('pointerleave', () => {
    targetPointer = { x: 0.5, y: 0.5 };
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    const canvasObserver = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible) start();
      else stop();
    }, { threshold: 0.05 });
    canvasObserver.observe(canvas);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  window.addEventListener('resize', resize, { passive: true });
  resize();
  start();
})();
