// =========================================================
// Theme toggle (dark / light) — session only, no persistence
// =========================================================
(function themeToggle() {
    const root = document.body;
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
  
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLight) {
      root.setAttribute('data-theme', 'light');
      btn.setAttribute('aria-pressed', 'true');
      btn.setAttribute('aria-label', 'Switch to dark theme');
    }
  
    btn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') !== 'light';
      root.setAttribute('data-theme', isDark ? 'light' : 'dark');
      btn.setAttribute('aria-pressed', String(isDark));
      btn.setAttribute('aria-label', isDark ? 'Switch to dark theme' : 'Switch to light theme');
    });
  })();
  
  // =========================================================
  // Mobile nav toggle
  // =========================================================
  (function mobileNav() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;
  
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  })();
  
  // =========================================================
  // Scroll-triggered reveal + skill bar fill
  // =========================================================
  (function scrollReveal() {
    const revealTargets = document.querySelectorAll(
      '.section > *:not(.eyebrow), .project-card, .cert-card, .timeline-item, .skill-group'
    );
    revealTargets.forEach((el) => el.classList.add('reveal'));
  
    const barFills = document.querySelectorAll('.bar-fill');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
  
    revealTargets.forEach((el) => observer.observe(el));
    barFills.forEach((el) => observer.observe(el));
  })();
  
  // =========================================================
  // Hero terminal typed status line
  // =========================================================
  (function typedLine() {
    const el = document.querySelector('.typed-line');
    if (!el) return;
    const text = '"open_to_internships"';
    let i = 0;
    function type() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(type, 55);
      }
    }
    setTimeout(type, 900);
  })();
  
  // =========================================================
  // Scroll-to-top button
  // =========================================================
  (function scrollTopBtn() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;
  
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    });
  
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })();
  
  // =========================================================
  // Contact form (front-end only — wire up to a backend or
  // a service like Formspree / EmailJS to actually send mail)
  // =========================================================
  (function contactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form || !status) return;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        status.style.color = '#e2685c';
        status.textContent = 'Please fill in all fields with a valid email.';
        return;
      }
      status.style.color = '';
      status.textContent = 'Thanks! This form is a front-end demo — connect it to Formspree, EmailJS, or your own API to receive messages.';
      form.reset();
    });
  })();
  
  // =========================================================
  // Footer year
  // =========================================================
  document.getElementById('year').textContent = new Date().getFullYear();