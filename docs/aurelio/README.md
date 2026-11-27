# Aurelio Bot · Cómo funciona y cómo mantenerlo

Aurelio responde **solo con datos oficiales públicos de la PUCE**, extraídos automáticamente de www.puce.edu.ec.

## De dónde salen los datos

| Fuente oficial | Qué se extrae | Script |
|---|---|---|
| Página de cada carrera (`/landing-<carrera>/`, 39 páginas) | precio real, descuento, precio con descuento, título, duración, modalidad, decano/a, "por qué estudiar", resultados de aprendizaje, campo laboral, contacto | `parse_landings.py` |
| Brochure PDF de cada carrera (botón BROCHURE) | malla por semestre, internados, itinerarios con su nivel | `parse_brochures.py` |
| Tabla oficial de aranceles 2026 (PDF en `/aranceles/`) | arancel y matrícula por carrera (Anexo 2), seguro, notas | `parse_aranceles.py` |
| Páginas de facultad | a qué facultad pertenece cada carrera | `build_official.py` |
| `data/puce/descripciones.json` (redactado a mano) | descripción breve de cada carrera para la pantalla de resultados; cada una con citas textuales de la página oficial, que `build_official.py` comprueba | `build_official.py` |
| Páginas institucionales (admisiones, becas, internacionalización, biblioteca…) | 41 datos con citas textuales | `verify_facts.py` |

Todo se descarga con `fetch_sources.py` (pausa de 1,5 s entre solicitudes, caché de 24 h en `.cache/puce/`, que no se sube a git) y queda registrado en `data/puce/manifest.json` con URL, fecha y sha256.

## Reglas de veracidad

- **Datos de carrera:** se consolidan página + brochure + tabla de aranceles. Si las fuentes no coinciden, se usa la página (es la más actualizada) y la diferencia queda en el informe.
- **Datos institucionales** (`supabase/functions/aurelio-chat/knowledge/puce.json`): cada uno tiene `citas` copiadas textualmente de su `fuente`. `verify_facts.py` marca `verificado: true` solo si todas las citas siguen apareciendo en la versión descargada. Las cifras que solo están en imágenes (Ranking QS, mensajes clave) se transcribieron a mano y se guarda el sha256 de la imagen: si la PUCE la cambia, el dato deja de usarse hasta revisarlo.
- Aurelio **nunca** usa datos sin verificar; si no tiene el dato, lo dice y deriva a Admisiones.

## Actualizar los datos (por ejemplo, cada inicio de período)

```bash
python3 scripts/puce/actualizar.py --refresh
```

Luego:
1. Revisar `docs/aurelio/extraccion_oficial.md` (diferencias y problemas detectados) y la salida de `verify_facts.py`.
2. Si un dato institucional dejó de verificarse, revisar la fuente y corregir `texto`/`citas` en `puce.json`. Para un dato nuevo: agregar la entrada con sus citas, y si la fuente es una página nueva, agregarla a `INSTITUTIONAL_PAGES` en `fetch_sources.py`.
3. Commit de `data/puce/`, `supabase/functions/aurelio-chat/knowledge/` y `js/data/aurelioKnowledge.js`.
4. Desplegar la Edge Function: `supabase functions deploy aurelio-chat --no-verify-jwt` (guía completa en `docs/supabase/README.md`).

Requisitos: Python 3, Node 22 y `pdftotext` (poppler-utils).

## Flujo de una pregunta (ahorro de cuota de IA)

Cada pregunta pasa por `planRoute()` de `js/aurelioNLP.js` (el mismo archivo lo usa la Edge Function como `nlp.js`):

1. **Análisis:** se normaliza, se quitan palabras vacías, se reduce cada palabra a su raíz (stemming) y se aplican sinónimos. "¿Cuánto cuesta?", "precio" y "valor de la pensión" dan la misma raíz `cost`.
2. **Alcance:** solo la carrera que el estudiante está viendo. Otra carrera entra únicamente si la pregunta la nombra ("¿y Enfermería cuánto cuesta?"), y entonces solo esa. Las materias se buscan solo en la malla de las carreras del alcance.
3. **Ruta:**
   | Caso | Quién responde | Tokens de IA |
   |---|---|---|
   | Pregunta sugerida, saludo o tema claro (costos, becas, malla, inscripción, campo laboral...) | motor local con datos oficiales | 0 |
   | "¿En qué semestre veo X?" | motor local (índice de materias) | 0 |
   | Pregunta compleja ya respondida (mismas raíces, misma carrera, misma versión de datos) | caché del navegador o caché compartida `aurelio_cache` | 0 |
   | Pregunta compleja nueva: contenido de una materia, comparar carreras, pedir consejo, tema no reconocido, varios temas | IA con contexto mínimo | ~400–1.100 |
4. **Contexto mínimo** (`context.ts`): reglas fijas primero (Groq guarda ese prefijo en caché y no cuenta para el límite) y solo la parte de la ficha del tema (p. ej. una materia, su semestre y las materias vecinas).
5. **Caché compartida:** la función guarda la respuesta de la IA; otro estudiante con una pregunta equivalente la recibe sin gastar cuota. Se invalida sola cuando cambian los datos (`KB_VERSION`).

Si la Edge Function no responde, el motor local responde con los mismos datos oficiales ("Modo básico").

## Despliegue de la Edge Function

```bash
supabase secrets set GROQ_API_KEY=... ALLOWED_ORIGINS=https://tu-app.onrender.com,https://tu-usuario.github.io
supabase functions deploy aurelio-chat --no-verify-jwt
```

`GEMINI_API_KEY` es opcional (respaldo). Sin `ALLOWED_ORIGINS`, cualquier sitio puede usar la función y consumir la cuota de Groq.
