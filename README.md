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

**En definición.** El equipo está adaptando el stack a los lineamientos tecnológicos indicados por la Dirección de TI de la PUCE. Esta sección se actualizará en el Sprint 1.

- Tipo de producto: **aplicación web con HTTPS**.
- Despliegue final previsto: Hostinger (RDA 3).

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
