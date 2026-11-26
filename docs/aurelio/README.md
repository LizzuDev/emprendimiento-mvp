# Aurelio Bot · Cómo funciona y cómo mantenerlo

## Flujo de una pregunta

```
Navegador (js/aurelioBot.js)
  │  envía: pregunta + clave de la carrera activa + últimos 4 mensajes
  ▼
Edge Function supabase/functions/aurelio-chat
  │  context.ts arma el CONTEXTO:
  │   - ficha completa de la carrera (knowledge/careers.json)
  │   - otras carreras nombradas en la pregunta (ficha corta)
  │   - descripción de materias, solo si la pregunta es sobre materias
  │   - datos institucionales con verificado=true (knowledge/puce.json)
  ▼
Groq (llama-3.3-70b → llama-3.1-8b) → Gemini (respaldo)
  │  el modelo responde SOLO con el contexto; si no está, deriva a Admisiones
  ▼
Navegador muestra la respuesta
```

Si la Edge Function no responde, el navegador usa el **motor local** (`getAurelioContextualAnswer`), que detecta la intención de la pregunta y responde solo con datos verificados (`js/data/aurelioKnowledge.js`) y los datos de la carrera.

## Reglas de los datos

| Dato | Llega a Aurelio cuando… |
|---|---|
| Dato institucional (`puce.json`) | tiene `verificado: true` |
| Costo de una carrera | sus tarjetas son de costos y las cuentas cuadran |
| Malla por semestre | no hay asignaturas numeradas fuera de orden (si no, se dan las materias sin semestre) |
| Afirmaciones de la tercera tarjeta ("98%", "#1"…) | nunca, hasta verificarlas |

## Al cambiar datos

1. Editar `supabase/functions/aurelio-chat/knowledge/puce.json` o `js/data/vocationalData.js`.
2. Regenerar los archivos derivados y el documento de verificación:
   ```bash
   node scripts/aurelio/exportar_conocimiento.mjs
   node scripts/aurelio/revisar_conocimiento.mjs
   ```
3. Hacer commit de todo, incluidos `knowledge/careers.json` y `js/data/aurelioKnowledge.js`.
4. Volver a desplegar la Edge Function (los datos viajan dentro de ella).

## Despliegue de la Edge Function

```bash
supabase functions deploy aurelio-chat
```

Secrets necesarios (una sola vez):

```bash
supabase secrets set GROQ_API_KEY=... ALLOWED_ORIGINS=https://tu-app.onrender.com,https://tu-usuario.github.io
```

`GEMINI_API_KEY` es opcional (respaldo). Sin `ALLOWED_ORIGINS`, cualquier sitio puede usar la función y consumir la cuota de Groq.
