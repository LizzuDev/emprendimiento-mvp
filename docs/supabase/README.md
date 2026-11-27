# Configurar el proyecto Supabase nuevo

Orienta PUCE usa Supabase para tres cosas:

| Qué | Dónde está en el repo |
|---|---|
| **Base de datos** (telemetría, preguntas a Aurelio, leads, errores) | `supabase/migrations/20261127000000_esquema_inicial.sql` |
| **Edge Function de Aurelio** (llama a la IA sin exponer claves) | `supabase/functions/aurelio-chat/` + `supabase/config.toml` |
| **Login del panel** `admin.html` (Supabase Auth, correo y contraseña) | `js/supabaseClient.js` |

## Archivos

| Archivo | Para qué |
|---|---|
| `supabase/migrations/20261127000000_esquema_inicial.sql` | Crea las 6 tablas, índices, funciones y permisos (RLS). |
| `supabase/migrations/20261127150000_is_admin_solo_autenticados.sql`, `20261127170000_aurelio_cache.sql` | Ajuste de permisos y caché de respuestas de Aurelio. Ejecutarlas después de la inicial. |
| `supabase/config.toml` | Configura la Edge Function como pública (sin JWT). |
| `supabase/functions/aurelio-chat/index.ts`, `context.ts`, `knowledge/` | Código y datos oficiales de Aurelio. |
| `js/supabaseClient.js` | **Aquí van la URL y la clave publicable del proyecto nuevo.** |
| `scripts/supabase/verificar.mjs` | Comprueba que todo quedó bien. |

## Paso a paso

### 1. Crear el proyecto
1. En https://supabase.com/dashboard → **New project**. Región sugerida: la más cercana (p. ej. São Paulo, `sa-east-1`).
2. Guarda la contraseña de la base de datos (solo la necesitas para la CLI).

### 2. Crear las tablas
**SQL Editor → New query** → pega todo el contenido de `supabase/migrations/20261127000000_esquema_inicial.sql` → **Run**.
Debe terminar sin errores. Se puede volver a ejecutar sin problema.

> Con la CLI, en vez del SQL Editor: `supabase link --project-ref <ref>` y `supabase db push`.

### 3. Crear el usuario administrador del panel
1. **Authentication → Users → Add user → Create new user**: correo y contraseña segura; marca **Auto Confirm User**.
2. **SQL Editor**, autorízalo como administrador (cambia el correo):
   ```sql
   insert into public.admins (user_id)
   select id from auth.users where email = 'tu-correo@ejemplo.com';
   ```
3. Recomendado: **Authentication → Sign In / Providers → Email**, desactiva **Allow new users to sign up**. Así nadie puede crearse una cuenta por su cuenta (aunque la creara, no vería datos si no está en `admins`).

Para quitar a alguien: `delete from public.admins where user_id = (select id from auth.users where email = '...');`

### 4. Poner la URL y la clave en el sitio
En **Project Settings → API Keys** (o **API**) copia:
- **Project URL** → `https://xxxx.supabase.co`
- **Publishable key** (`sb_publishable_...`); si tu proyecto solo muestra claves *legacy*, usa la **anon public**.

Pégalas al inicio de `js/supabaseClient.js`:
```js
const SUPABASE_URL = 'https://xxxx.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_xxx';
```
Ambas son públicas. **Nunca** pongas en el sitio la *secret key* ni la *service_role*.

### 5. Desplegar la Edge Function de Aurelio
Con la [CLI de Supabase](https://supabase.com/docs/guides/cli) instalada, desde la raíz del repo:
```bash
supabase login
```
```bash
supabase link --project-ref xxxx
```
```bash
supabase secrets set GROQ_API_KEY=tu_clave_de_groq ALLOWED_ORIGINS=https://tu-app.onrender.com,https://tu-usuario.github.io
```
```bash
supabase functions deploy aurelio-chat --no-verify-jwt
```
- `GROQ_API_KEY`: se crea gratis en https://console.groq.com/keys.
- `GEMINI_API_KEY` (opcional): respaldo si Groq falla.
- `GROQ_MODELS` (opcional): modelos de Groq separados por coma; por defecto `openai/gpt-oss-120b,openai/gpt-oss-20b`. Si Groq retira un modelo (ver https://console.groq.com/docs/deprecations), se cambia este secreto sin tocar el código.
- `ALLOWED_ORIGINS`: los dominios donde está publicada la app, separados por coma, sin `/` al final. Sin esto, cualquier sitio podría usar tu cuota de IA.

### 6. Verificar
```bash
SUPABASE_URL=https://xxxx.supabase.co SUPABASE_KEY=sb_publishable_xxx ORIGIN=https://tu-app.onrender.com node scripts/supabase/verificar.mjs
```
Debe mostrar todo ✅: el público puede insertar, **no** puede leer, y Aurelio responde con IA.
Deja filas de prueba con `session_id` que empieza con `verificacion-`; bórralas desde el **Table Editor** o desde el panel.

### 7. Publicar
Haz commit de `js/supabaseClient.js` con los valores nuevos y publica el sitio. Entra a `admin.html` con el usuario del paso 3.

## Qué puede hacer cada quien

| Quién | Insertar datos | Leer datos | Borrar datos |
|---|---|---|---|
| Visitante (clave publicable) | ✅ en las 5 tablas | ❌ | ❌ |
| Usuario con cuenta pero no admin | ✅ | ❌ | ❌ |
| Administrador (en la tabla `admins`) | ✅ | ✅ | ✅ (para pedidos de supresión de datos, LOPDP) |

Completar el test se hace con la función `complete_test_session()`, que solo modifica sesiones en curso: el público no tiene permiso de UPDATE.

## Tablas

| Tabla | Contenido |
|---|---|
| `test_sessions` | una fila por test: dispositivo, navegador, macroárea, carreras recomendadas, duración, estado |
| `telemetry_events` | pasos del test y clics (embudo) |
| `aurelio_queries` | preguntas a Aurelio, carrera, inicio de la respuesta y origen (IA o motor local) |
| `student_leads` | datos que el estudiante decide enviar en "Solicitar asesoría" |
| `error_logs` | errores de JavaScript del navegador |
| `admins` | usuarios autorizados a ver el panel |
| `aurelio_cache` | respuestas de la IA reutilizables (solo la Edge Function la usa; el público no tiene acceso) |

## Si algo falla
- **El panel dice "no está autorizado"**: falta el paso 3.2 (insertar el usuario en `admins`).
- **Los logs de la función dicen `Groq <modelo> -> 404`**: Groq retiró ese modelo; actualiza el secreto `GROQ_MODELS`.
- **Aurelio responde siempre en "Modo básico"**: la función no está desplegada, falta `GROQ_API_KEY`, o el dominio no está en `ALLOWED_ORIGINS` (Edge Functions → aurelio-chat → Logs).
- **Los inserts devuelven 401**: la clave en `js/supabaseClient.js` no es la publicable/anon del proyecto nuevo.
