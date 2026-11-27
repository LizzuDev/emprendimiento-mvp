-- =====================================================================
-- Orienta PUCE · Esquema inicial de la base de datos (Supabase / Postgres)
--
-- Tablas que usa la aplicación (js/telemetry.js y admin.html):
--   test_sessions     una fila por persona que inicia el test
--   telemetry_events  avance por pasos del test (embudo)
--   aurelio_queries   preguntas hechas a Aurelio
--   student_leads     datos de contacto que el estudiante decide enviar
--   error_logs        errores de JavaScript del navegador
--   admins            usuarios del equipo autorizados a ver el panel
--
-- Seguridad (Row Level Security):
--   - El público (rol anon, la clave publicable que va en el navegador) SOLO puede INSERTAR.
--     No puede leer, modificar ni borrar nada: los datos de los estudiantes no se pueden descargar.
--   - Completar el test se hace con la función complete_test_session(), no con UPDATE directo.
--   - Solo los usuarios autenticados que están en la tabla admins pueden leer y borrar.
--
-- Cómo aplicarlo: Supabase → SQL Editor → pegar este archivo → Run
--                 (o con la CLI: supabase db push)
-- =====================================================================

-- ---------------------------------------------------------------------
-- Tablas
-- ---------------------------------------------------------------------
create table if not exists public.test_sessions (
  id                      bigint generated always as identity primary key,
  session_id              text not null unique check (char_length(session_id) between 1 and 64),
  started_at              timestamptz not null default now(),
  completed_at            timestamptz,
  status                  text not null default 'in_progress' check (status in ('in_progress', 'completed')),
  device_type             text check (char_length(device_type) <= 20),
  browser                 text check (char_length(browser) <= 20),
  screen_resolution       text check (char_length(screen_resolution) <= 20),
  selected_domain         text check (char_length(selected_domain) <= 40),
  skills_selected         jsonb,
  ranked_careers          jsonb,
  top_career              text check (char_length(top_career) <= 150),
  total_duration_seconds  integer check (total_duration_seconds >= 0)
);

create table if not exists public.telemetry_events (
  id          bigint generated always as identity primary key,
  session_id  text not null check (char_length(session_id) between 1 and 64),
  event_name  text not null check (char_length(event_name) <= 60),
  step        text check (char_length(step) <= 60),
  payload     jsonb check (payload is null or pg_column_size(payload) <= 4000),
  created_at  timestamptz not null default now()
);

create table if not exists public.aurelio_queries (
  id              bigint generated always as identity primary key,
  session_id      text not null check (char_length(session_id) between 1 and 64),
  career_key      text check (char_length(career_key) <= 60),
  query_text      text not null check (char_length(query_text) <= 1000),
  answer_preview  text check (char_length(answer_preview) <= 400),
  source          text check (char_length(source) <= 30),
  created_at      timestamptz not null default now()
);

create table if not exists public.student_leads (
  id                bigint generated always as identity primary key,
  session_id        text check (char_length(session_id) <= 64),
  full_name         text not null check (char_length(full_name) between 1 and 150),
  institution       text check (char_length(institution) <= 150),
  phone             text check (char_length(phone) <= 30),
  email             text check (char_length(email) <= 150),
  preferred_career  text check (char_length(preferred_career) <= 150),
  created_at        timestamptz not null default now()
);

create table if not exists public.error_logs (
  id             bigint generated always as identity primary key,
  session_id     text check (char_length(session_id) <= 64),
  error_message  text check (char_length(error_message) <= 600),
  error_stack    text check (char_length(error_stack) <= 1200),
  url            text check (char_length(url) <= 500),
  created_at     timestamptz not null default now()
);

create table if not exists public.admins (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  created_at  timestamptz not null default now()
);

-- Índices para el panel (ordena por fecha) y para cruzar por sesión
create index if not exists test_sessions_started_at_idx     on public.test_sessions (started_at desc);
create index if not exists telemetry_events_created_at_idx  on public.telemetry_events (created_at desc);
create index if not exists telemetry_events_session_idx     on public.telemetry_events (session_id);
create index if not exists aurelio_queries_created_at_idx   on public.aurelio_queries (created_at desc);
create index if not exists student_leads_created_at_idx     on public.student_leads (created_at desc);
create index if not exists error_logs_created_at_idx        on public.error_logs (created_at desc);

-- ---------------------------------------------------------------------
-- ¿El usuario actual es administrador?
-- security definer: puede consultar admins aunque el usuario no tenga permiso sobre esa tabla.
-- ---------------------------------------------------------------------
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- ---------------------------------------------------------------------
-- Completar una sesión del test (reemplaza el UPDATE directo desde el navegador).
-- Solo cambia una sesión que esté en curso; si la sesión no existe (p. ej. falló el
-- registro inicial por red), la crea ya completada.
-- ---------------------------------------------------------------------
create or replace function public.complete_test_session(
  p_session_id              text,
  p_selected_domain         text default null,
  p_skills_selected         jsonb default null,
  p_ranked_careers          jsonb default null,
  p_top_career              text default null,
  p_total_duration_seconds  integer default null
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_session_id is null or char_length(p_session_id) not between 1 and 64 then
    raise exception 'session_id inválido';
  end if;
  if pg_column_size(p_skills_selected) > 4000 or pg_column_size(p_ranked_careers) > 4000 then
    raise exception 'datos demasiado grandes';
  end if;

  insert into public.test_sessions as s (
    session_id, completed_at, status, selected_domain, skills_selected,
    ranked_careers, top_career, total_duration_seconds
  )
  values (
    p_session_id, now(), 'completed', left(p_selected_domain, 40), p_skills_selected,
    p_ranked_careers, left(p_top_career, 150), greatest(coalesce(p_total_duration_seconds, 0), 0)
  )
  on conflict (session_id) do update
    set completed_at           = now(),
        status                 = 'completed',
        selected_domain        = excluded.selected_domain,
        skills_selected        = excluded.skills_selected,
        ranked_careers         = excluded.ranked_careers,
        top_career             = excluded.top_career,
        total_duration_seconds = excluded.total_duration_seconds
    where s.status = 'in_progress';
end;
$$;

-- ---------------------------------------------------------------------
-- Permisos: nada por defecto; luego solo lo necesario
-- ---------------------------------------------------------------------
revoke all on public.test_sessions, public.telemetry_events, public.aurelio_queries,
              public.student_leads, public.error_logs, public.admins
  from anon, authenticated;

grant insert on public.test_sessions, public.telemetry_events, public.aurelio_queries,
                public.student_leads, public.error_logs
  to anon, authenticated;

grant select, delete on public.test_sessions, public.telemetry_events, public.aurelio_queries,
                        public.student_leads, public.error_logs
  to authenticated;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

revoke all on function public.complete_test_session(text, text, jsonb, jsonb, text, integer) from public;
grant execute on function public.complete_test_session(text, text, jsonb, jsonb, text, integer) to anon, authenticated;

-- ---------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------
alter table public.test_sessions     enable row level security;
alter table public.telemetry_events  enable row level security;
alter table public.aurelio_queries   enable row level security;
alter table public.student_leads     enable row level security;
alter table public.error_logs        enable row level security;
alter table public.admins            enable row level security;

-- Inserción pública (sin lectura). Las nuevas sesiones siempre empiezan "en curso".
drop policy if exists "publico inserta sesiones" on public.test_sessions;
create policy "publico inserta sesiones" on public.test_sessions
  for insert to anon, authenticated
  with check (status = 'in_progress' and completed_at is null);

drop policy if exists "publico inserta eventos" on public.telemetry_events;
create policy "publico inserta eventos" on public.telemetry_events
  for insert to anon, authenticated with check (true);

drop policy if exists "publico inserta preguntas" on public.aurelio_queries;
create policy "publico inserta preguntas" on public.aurelio_queries
  for insert to anon, authenticated with check (true);

drop policy if exists "publico inserta leads" on public.student_leads;
create policy "publico inserta leads" on public.student_leads
  for insert to anon, authenticated with check (true);

drop policy if exists "publico inserta errores" on public.error_logs;
create policy "publico inserta errores" on public.error_logs
  for insert to anon, authenticated with check (true);

-- Lectura y borrado solo para administradores (el borrado permite atender pedidos de
-- supresión de datos personales, LOPDP).
drop policy if exists "admins leen sesiones" on public.test_sessions;
create policy "admins leen sesiones" on public.test_sessions
  for select to authenticated using (public.is_admin());
drop policy if exists "admins borran sesiones" on public.test_sessions;
create policy "admins borran sesiones" on public.test_sessions
  for delete to authenticated using (public.is_admin());

drop policy if exists "admins leen eventos" on public.telemetry_events;
create policy "admins leen eventos" on public.telemetry_events
  for select to authenticated using (public.is_admin());
drop policy if exists "admins borran eventos" on public.telemetry_events;
create policy "admins borran eventos" on public.telemetry_events
  for delete to authenticated using (public.is_admin());

drop policy if exists "admins leen preguntas" on public.aurelio_queries;
create policy "admins leen preguntas" on public.aurelio_queries
  for select to authenticated using (public.is_admin());
drop policy if exists "admins borran preguntas" on public.aurelio_queries;
create policy "admins borran preguntas" on public.aurelio_queries
  for delete to authenticated using (public.is_admin());

drop policy if exists "admins leen leads" on public.student_leads;
create policy "admins leen leads" on public.student_leads
  for select to authenticated using (public.is_admin());
drop policy if exists "admins borran leads" on public.student_leads;
create policy "admins borran leads" on public.student_leads
  for delete to authenticated using (public.is_admin());

drop policy if exists "admins leen errores" on public.error_logs;
create policy "admins leen errores" on public.error_logs
  for select to authenticated using (public.is_admin());
drop policy if exists "admins borran errores" on public.error_logs;
create policy "admins borran errores" on public.error_logs
  for delete to authenticated using (public.is_admin());

-- La tabla admins no tiene políticas para anon/authenticated: solo se administra desde el
-- SQL Editor del panel de Supabase (ver docs/supabase/README.md).
