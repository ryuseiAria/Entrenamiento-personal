
// ==========================================
// INTERACCIONES EXCLUSIVAS DE SERVICIO1.HTML
// ==========================================


// 1. MENÚ DE NAVEGACIÓN

const menu = document.querySelector('.menu');
const nav = document.querySelector('header nav');

menu?.addEventListener('click', () => {

    const open = nav.classList.toggle('open');

    menu.setAttribute('aria-expanded', String(open));

    menu.querySelector('.sr').textContent = open
        ? 'Cerrar menú'
        : 'Abrir menú';

});


// Cerrar el menú al seleccionar una opción

nav?.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', () => {

        nav.classList.remove('open');

        menu?.setAttribute('aria-expanded', 'false');

        if (menu?.querySelector('.sr')) {
            menu.querySelector('.sr').textContent = 'Abrir menú';
        }

    });

});


// 2. SELECCIÓN DE PLANES DE ENTRENAMIENTO

const mail = document.querySelector('#mail');
const chosen = document.querySelector('#chosen');

document.querySelectorAll('[data-plan]').forEach((link) => {

    link.addEventListener('click', () => {

        const plan = link.dataset.plan;

        // Preparar el correo de consulta

        mail.href = `mailto:?subject=${encodeURIComponent(
            `Consulta sobre ${plan}`
        )}&body=${encodeURIComponent(
            `Hola, quisiera recibir información sobre el ${plan}.`
        )}`;

        // Mostrar el plan seleccionado

        chosen.textContent = `${plan} seleccionado para tu consulta.`;

    });

});


// 3. AÑO AUTOMÁTICO DEL FOOTER

const year = document.querySelector('#year');

if (year) {
    year.textContent = new Date().getFullYear();
}
