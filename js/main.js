// Orienta PUCE · Comportamiento básico de la landing (JavaScript puro, sin frameworks)

// Menú desplegable en celulares
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const abierto = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(abierto));
  });

  // Cierra el menú al elegir una sección
  menu.querySelectorAll('a').forEach((enlace) => {
    enlace.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Año actual en el pie de página
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
