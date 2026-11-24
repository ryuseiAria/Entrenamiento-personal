(() => {
  const page = document.querySelector('.asesoria-nutricional');
  if (!page) return;

  const menuButton = page.querySelector('.menu-toggle');
  const navLinks = page.querySelector('.nav-links');
  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navLinks?.classList.toggle('open', !isOpen);
  });
  navLinks?.addEventListener('click', event => {
    if (event.target.closest('a')) {
      navLinks.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
    }
  });

  page.querySelectorAll('.plan-consult').forEach(link => {
    link.addEventListener('click', () => {
      const objective = page.querySelector('#objetivo');
      if (objective) objective.value = link.dataset.goal;
    });
  });

  const form = page.querySelector('#contact-form');
  const status = page.querySelector('#form-status');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    status?.classList.remove('error');
    if (!form.checkValidity()) {
      form.reportValidity();
      if (status) {
        status.textContent = 'Revisa los campos: nombre, correo válido, objetivo y mensaje son necesarios.';
        status.classList.add('error');
      }
      return;
    }
    if (status) status.textContent = 'Formulario revisado correctamente. Esta demostración no envía ni guarda tus datos.';
    form.reset();
  });

  const year = page.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
