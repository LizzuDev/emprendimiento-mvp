-- Caché compartida de respuestas de Aurelio.
-- La Edge Function aurelio-chat guarda aquí las respuestas de la IA a preguntas "complejas" y las
-- reutiliza cuando otro estudiante hace una pregunta equivalente (misma carrera, mismas raíces de
-- palabras, misma versión de los datos oficiales). Ahorra cuota del plan gratuito de Groq.
--
-- Solo la función (clave de servicio) lee y escribe: el público no tiene ningún permiso, así nadie
-- puede insertar respuestas falsas desde el navegador.

create table if not exists public.aurelio_cache (
  key         text primary key check (char_length(key) = 64),          -- sha256 de versión|carrera|otras|huella
  answer      text not null check (char_length(answer) <= 4000),
  model       text check (char_length(model) <= 80),
  kb_version  text not null check (char_length(kb_version) <= 40),     -- versión de los datos oficiales
  career_key  text check (char_length(career_key) <= 60),
  intent      text check (char_length(intent) <= 40),
  created_at  timestamptz not null default now()
);

create index if not exists aurelio_cache_created_at_idx on public.aurelio_cache (created_at);

alter table public.aurelio_cache enable row level security;
revoke all on public.aurelio_cache from anon, authenticated;
-- Sin políticas para anon/authenticated a propósito: solo la clave de servicio (que omite RLS) accede.

comment on table public.aurelio_cache is 'Caché de respuestas de Aurelio; solo la Edge Function aurelio-chat la usa.';
