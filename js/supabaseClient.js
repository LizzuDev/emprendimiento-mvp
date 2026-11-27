// js/supabaseClient.js
// Cliente ligero para la API REST de Supabase (sin dependencias).
// Esquema y permisos: supabase/migrations/20261127000000_esquema_inicial.sql
// Guía de configuración: docs/supabase/README.md

// =========================================================
// CONFIGURACIÓN DEL PROYECTO SUPABASE
// Supabase → Project Settings → API (o "API Keys"):
//   - SUPABASE_URL: "Project URL", p. ej. https://abcdefghijkl.supabase.co
//   - SUPABASE_PUBLISHABLE_KEY: la clave publicable (sb_publishable_...) o la clave "anon" (legacy).
// Ambas son PÚBLICAS: pueden ir en el navegador. NUNCA pongas aquí la clave secreta / service_role.
// =========================================================
const SUPABASE_URL = 'https://TU-PROYECTO.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'TU_CLAVE_PUBLICABLE';

export const SUPABASE_FUNCTIONS_URL = `${SUPABASE_URL}/functions/v1`;
export const SUPABASE_ANON_KEY = SUPABASE_PUBLISHABLE_KEY; // nombre anterior, usado por aurelioBot.js

// Si el proyecto no está configurado, la app funciona igual pero no guarda nada.
export const SUPABASE_CONFIGURED = !SUPABASE_URL.includes('TU-PROYECTO') && !SUPABASE_PUBLISHABLE_KEY.startsWith('TU_');

const ADMIN_SESSION_KEY = 'orienta_admin_session';

// Encabezados: la clave publicable va en "apikey". "Authorization" solo lleva el token de un
// usuario que inició sesión (panel de administración); el público no la necesita.
function headers(extra = {}) {
  const h = { apikey: SUPABASE_PUBLISHABLE_KEY, 'Content-Type': 'application/json', ...extra };
  const token = getAdminSession()?.access_token;
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

async function request(path, options, label) {
  if (!SUPABASE_CONFIGURED) return { data: null, error: 'Supabase no está configurado', status: 0 };
  try {
    const response = await fetch(`${SUPABASE_URL}${path}`, options);
    const text = await response.text();
    let body = null;
    try {
      body = text ? JSON.parse(text) : null;
    } catch {
      body = text;
    }
    if (!response.ok) {
      console.warn(`[Supabase ${label}] ${response.status}:`, body);
      return { data: null, error: body?.message || body?.error_description || text || `HTTP ${response.status}`, status: response.status };
    }
    return { data: body, error: null, status: response.status };
  } catch (err) {
    console.warn(`[Supabase ${label}] sin conexión:`, err);
    return { data: null, error: err.message, status: 0 };
  }
}

/**
 * Inserta un registro. No pide el registro de vuelta ("return=minimal") porque el público
 * solo tiene permiso de inserción, no de lectura.
 * status 0 = sin conexión (se puede reintentar); 4xx = datos rechazados (no reintentar).
 */
export async function supabaseInsert(tableName, data) {
  return request(`/rest/v1/${tableName}`, {
    method: 'POST',
    headers: headers({ Prefer: 'return=minimal' }),
    body: JSON.stringify(data),
  }, `insert ${tableName}`);
}

/**
 * Llama a una función de la base de datos (p. ej. complete_test_session).
 */
export async function supabaseRpc(functionName, args = {}) {
  return request(`/rest/v1/rpc/${functionName}`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(args),
  }, `rpc ${functionName}`);
}

/**
 * Consulta registros. Solo devuelve datos a administradores con sesión iniciada.
 */
export async function supabaseSelect(tableName, queryParams = '') {
  return request(`/rest/v1/${tableName}${queryParams ? '?' + queryParams : ''}`, {
    method: 'GET',
    headers: headers(),
  }, `select ${tableName}`);
}

// =========================================================
// Sesión de administración (Supabase Auth, correo y contraseña)
// =========================================================
export function getAdminSession() {
  try {
    const s = JSON.parse(sessionStorage.getItem(ADMIN_SESSION_KEY) || 'null');
    if (s && s.expires_at && s.expires_at * 1000 < Date.now()) {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
      return null;
    }
    return s;
  } catch {
    return null;
  }
}

export async function adminSignIn(email, password) {
  const res = await request('/auth/v1/token?grant_type=password', {
    method: 'POST',
    headers: { apikey: SUPABASE_PUBLISHABLE_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }, 'login');
  if (res.error || !res.data?.access_token) return { ok: false, error: res.error || 'No se pudo iniciar sesión' };
  try {
    sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({
      access_token: res.data.access_token,
      expires_at: res.data.expires_at,
      email: res.data.user?.email || email,
    }));
  } catch {
    return { ok: false, error: 'El navegador no permite guardar la sesión' };
  }
  return { ok: true };
}

export async function adminIsAuthorized() {
  // is_admin() devuelve true solo si el usuario está en la tabla admins.
  const res = await supabaseRpc('is_admin');
  return res.data === true;
}

export function adminSignOut() {
  try {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  } catch { /* nada que limpiar */ }
}
