# Plataforma de Contraste Curricular OVP

> Orientación vocacional con mini-retos de materias reales de primer semestre: «tu carrera ideal en 10 minutos».

Proyecto de la asignatura **Emprendimiento Tecnológico (NRC 2667)** · Ingeniería en Sistemas de Información · Pontificia Universidad Católica del Ecuador (PUCE).

---

## Problema

Los estudiantes de 3.° de Bachillerato y aspirantes de 17 a 21 años sufren desorientación y parálisis vocacional por tests genéricos y mallas curriculares difíciles de entender. Eligen su carrera a ciegas y corren un alto riesgo de desertar en las materias filtro del primer año.

## Clientes

| Segmento | Quién es | Qué gana |
| --- | --- | --- |
| Cliente 1 (usuario) | Estudiantes de 3.° de Bachillerato y aspirantes universitarios de 17 a 21 años en Quito | Descubrir su vocación y probar cómo es de verdad una carrera antes de inscribirse |
| Cliente 2 (paga) | Dirección de Admisiones PUCE | Aspirantes mejor orientados y menos deserción temprana |

## Propuesta de valor

1. **Screening corto** de máximo 15 preguntas de interés (no un test de 70).
2. **Top 3 de carreras** de la PUCE con su porcentaje de afinidad.
3. **Mini-retos de 2 minutos** con ejercicios reales de materias de primer semestre.
4. **AurelioBot**, un asistente que responde dudas sobre materias, horarios y campo laboral.
5. Contacto directo con un asesor humano de Admisiones.

## Equipo Developers CARF

| Rol Scrum | Integrante | GitHub |
| --- | --- | --- |
| Product Owner | Joselyn Cadena | [@LizzuDev](https://github.com/LizzuDev) |
| Scrum Master | Alejandro Flores | [@AlejandroFloresLu](https://github.com/AlejandroFloresLu) |
| Desarrollo | Gabriel Aguinaga | [@GAAGUINAGA](https://github.com/GAAGUINAGA) |
| Desarrollo | Paúl Rosero | por confirmar |

Todos los integrantes programan, incluidos el Product Owner y el Scrum Master.

## Tecnología

El producto es una **aplicación web con HTTPS** construida con **HTML5, CSS3 y JavaScript puro**, sin frameworks ni paso de compilación. Elegimos esta opción porque el sitio de la PUCE funciona sobre WordPress, así que el código se integra sin instalaciones complejas y todo el equipo lo domina.

| Capa | Tecnología | Por qué |
| --- | --- | --- |
| Frontend y landing | HTML5, CSS3 y JavaScript puro | Se integra con el WordPress de la PUCE y todo el equipo la domina |
| Base de datos y login | Supabase (plan gratuito) | Guarda resultados del test y contactos para Admisiones, directo desde JavaScript |
| Backend o API | Supabase Edge Functions | Protege las claves de la IA sin un servidor propio |
| IA (AurelioBot) | Groq o Gemini (API) | Se elegirá uno con una prueba de 10 preguntas reales |
| Hosting | Render (Sprint 1) → Hostinger (RDA 3) | Publicación con HTTPS |

> Stack preliminar del Sprint 0: puede ajustarse según los lineamientos de la Dirección de TI de la PUCE.

## Estructura del repositorio

```
├── index.html                 Landing page
├── css/styles.css             Estilos globales (paleta PUCE)
├── js/
│   ├── main.js                Comportamiento de la landing
│   └── data/vocationalData.js Banco de preguntas y macroáreas del test
├── assets/
│   ├── img/aurelio/           Ilustraciones de Aurelio (SVG)
│   └── diseno/                Archivo fuente del diseño de Aurelio
└── docs/
    └── estructura-sitio-puce.md  Referencia de la estructura del sitio de la PUCE
```

## Cómo ver el proyecto

No se necesita instalar nada:

1. Clonar el repositorio: `git clone https://github.com/LizzuDev/emprendimiento-mvp.git`
2. Abrir `index.html` en el navegador, o usar la extensión **Live Server** de VS Code para ver los cambios al instante.

### Versión anterior (React)

Hasta el Sprint 0 el prototipo estaba hecho en React + Vite + Supabase. Esa versión quedó guardada en la rama [`archivo/react-v0`](https://github.com/LizzuDev/emprendimiento-mvp/tree/archivo/react-v0) como referencia, junto con la rama `gestion` (módulo de administración). Ninguna de las dos se une a `main`: sus funciones se reescribirán en HTML, CSS y JavaScript dentro del backlog.

## Gestión del proyecto

- Metodología: **Scrum**, con sprints de una semana.
- Tablero y product backlog: [GitHub Projects](https://github.com/users/LizzuDev/projects/2/views/1).
- Sprint 0 (hasta el 18/10/2026): arranque del proyecto, roles, repositorio y backlog de 10 historias de usuario.
- Sprint 1 (19 al 25/10/2026): primera versión funcional del test OVP para la PUCE (test general y por dominio, de momento solo FHIC).

### Forma de trabajo en el repositorio

1. Cada historia de usuario se trabaja en su propia rama (`feature/HU-01-screening`, `docs/...`).
2. Se abre un Pull Request hacia `main` y otro integrante lo revisa antes de unirlo.
3. Cada integrante hace sus commits con su propia cuenta de GitHub.
4. Nunca se suben claves ni archivos `.env` al repositorio.

## Licencia

Este proyecto se distribuye bajo la [licencia MIT](LICENSE).
