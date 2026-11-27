-- is_admin() solo la usan usuarios con sesión iniciada (panel de administración).
-- Supabase da EXECUTE a anon directamente (no solo vía PUBLIC); se le quita.
-- Detectado por el revisor de seguridad de Supabase (lint 0028).
revoke execute on function public.is_admin() from anon;
