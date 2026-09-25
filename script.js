/* MejorVPN - script.js
   Ligero, sin dependencias externas, accesible */

document.addEventListener('DOMContentLoaded', () => {
  // Menú móvil
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(el => {
        if (el !== item) el.classList.remove('open');
      });

      item.classList.toggle('open', !isOpen);
    });
  });

  // Cookie banner
  const banner = document.querySelector('.cookie-banner');
  const acceptBtn = document.querySelector('.cookie-btn');

  if (banner && acceptBtn) {
    if (!localStorage.getItem('cookiesAccepted')) {
      banner.classList.add('show');
    }

    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.classList.remove('show');
    });
  }

  // Año actual
  const yearEl = document.querySelector('.current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});