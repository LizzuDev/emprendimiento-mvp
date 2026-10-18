# Walkthrough - Implementación Exacta de la Estructura Real de la PUCE (`puce.edu.ec`)

Se adaptó la arquitectura del proyecto a la **estructura HTML, contenedores Divi, tipografía y recursos reales del sitio oficial de la Pontificia Universidad Católica del Ecuador (`puce.edu.ec`)**, garantizando una experiencia clara, formal e institucional.

---

## 🏛️ 1. Contenedores y Jerarquía Real de la PUCE Implementada

Siguiendo la estructura del código fuente oficial provisto:
```html
<body class="page-template-default ... et_fixed_nav et_show_nav ... et_pb_gutters3">
  <div id="page-container">
    <div id="et-boc" class="et-boc">
      
      <!-- Top Header Institucional -->
      <div id="top-header">
        <div class="puce-container">
          <div id="et-info">
            <span id="et-info-phone">(593) 02 2991 700</span>
            <ul class="et-social-icons">...</ul>
          </div>
          <div id="et-secondary-menu">
            <ul id="et-secondary-nav">
              <li>Mi cuenta (Intranet / Aulas Virtuales)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Main Header -->
      <header id="main-header" class="et_header_style_left">
        <div class="puce-container">
          <div class="logo_container">
            <img src="https://www.puce.edu.ec/wp-content/uploads/2026/05/horizontal_color.png" id="logo" />
          </div>
          <div id="et-top-navigation">
            <ul id="top-menu">...</ul>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <div id="et-main-area">
        <div id="main-content">
          <div class="entry-content">
            <div class="et-l et-l--post">
              <div class="et_builder_inner_content">...</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Oficial PUCE -->
      <footer class="et-l et-l--footer">
        <div class="puce-container">
          <div class="footer-columns">...</div>
        </div>
      </footer>

    </div>
  </div>
</body>
```

---

## 🎨 2. Tipografía y Estilo de Contenedores en Modo Claro

* **Tipografía Oficial:** `Open Sans, Arial, sans-serif` como fuente base y de lectura institucional, con `Rubik` en encabezados solemnes y títulos de sección.
* **Contenedor `.puce-container`:** `width: 90%; max-width: 1200px; margin: auto;` (el estándar de Divi de la PUCE).
* **Botones Oficiales (`.et_pb_button`):**
  * `.et_pb_button_primary`: Azul PUCE institucional (`#003b81`), texto blanco, borde recto `border-radius: 3px`.
  * `.et_pb_button_secondary`: Celeste PUCE (`#1aa9df`).
  * `.et_pb_button_gold`: Dorado pontificio (`#d4af37`), texto azul marino.
  * `.et_pb_button_outline`: Blanco con borde azul.
* **Fichas de Macroárea (`.et_pb_blurb_institutional`):** Fondo blanco, línea divisoria `border-slate-200` y acento lateral izquierdo de 4px en azul PUCE (`border-l-4 border-[#003b81]`).
* **Footer Institucional Completo:** Incorpora el logo oficial blanco (`horizontal_blanco.png`), dirección exacta (`Avenida 12 de Octubre 1076 y Vicente Ramón Roca`), teléfono `(593) (02) 2991700`, redes sociales oficiales y las 4 sub-columnas: *Sedes*, *Facultades*, *Enlaces frecuentes* y *Transparencia / Protección de datos*.

---

## 📋 3. Consola de Evaluación Psicométrica
* Mantiene íntegros los **30 ítems oficiales de la Fase 1** y los **reactivos por carrera de la Fase 2** (0 a 6 puntos con matrices psicométricas de la PUCE).
* Totalmente integrada dentro del marco `.puce-container`, en blanco puro y azul marino, sin bloques redondeados y con botones de respuesta rectos institucionales de alto contraste.
