(() => {
  const page = document.querySelector('.home-page');
  if (!page) return;

  const menuButton = page.querySelector('.home-menu-toggle');
  const nav = page.querySelector('.home-nav');

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    nav?.classList.toggle('is-open', !isOpen);
  });

  nav?.addEventListener('click', event => {
    if (event.target.closest('a')) {
      nav.classList.remove('is-open');
      menuButton?.setAttribute('aria-expanded', 'false');
      menuButton?.setAttribute('aria-label', 'Abrir menú');
    }
  });

  const year = page.querySelector('#home-year');
  if (year) year.textContent = new Date().getFullYear();
})();