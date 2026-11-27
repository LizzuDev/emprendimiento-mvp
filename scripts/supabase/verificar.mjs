// Verifica que el proyecto Supabase nuevo quedó bien configurado.
// Uso:
//   SUPABASE_URL=https://xxxx.supabase.co SUPABASE_KEY=sb_publishable_xxx node scripts/supabase/verificar.mjs
//   (opcional) ORIGIN=https://tu-sitio.com  -> origen con el que se prueba la Edge Function
//
// Comprueba con la clave PÚBLICA (la misma del navegador):
//   1. Se puede insertar en las 5 tablas.
//   2. NO se pueden leer los datos (los leads quedan protegidos).
//   3. La función complete_test_session funciona.
//   4. La Edge Function aurelio-chat responde.
// Deja filas de prueba con session_id "verificacion-..."; puedes borrarlas desde el panel de Supabase.

const URL_BASE = (process.env.SUPABASE_URL || '').replace(/\/$/, '');
const KEY = process.env.SUPABASE_KEY || '';
const ORIGIN = process.env.ORIGIN || 'http://localhost:8000';
if (!URL_BASE || !KEY) {
  console.error('Faltan SUPABASE_URL y SUPABASE_KEY (la clave publicable).');
  process.exit(1);
}

const sid = `verificacion-${Date.now().toString(36)}`;
const h = { apikey: KEY, 'Content-Type': 'application/json' };
let failures = 0;
const check = (ok, label, detail = '') => {
  if (!ok) failures++;
  console.log(`${ok ? '✅' : '❌'} ${label}${detail ? ` — ${detail}` : ''}`);
};

async function call(path, init) {
  try {
    const res = await fetch(`${URL_BASE}${path}`, init);
    const text = await res.text();
    return { status: res.status, text };
  } catch (err) {
    return { status: 0, text: String(err) };
  }
}

const inserts = {
  test_sessions: { session_id: sid, device_type: 'Desktop', browser: 'Verificador', screen_resolution: '1x1', status: 'in_progress' },
  telemetry_events: { session_id: sid, event_name: 'verificacion', step: 'verificacion', payload: { ok: true } },
  aurelio_queries: { session_id: sid, career_key: 'verificacion', query_text: 'Pregunta de verificación', answer_preview: 'ok', source: 'verificacion' },
  student_leads: { session_id: sid, full_name: 'Verificación (borrar)', institution: 'Prueba', phone: '', email: '', preferred_career: '' },
  error_logs: { session_id: sid, error_message: 'Verificación', error_stack: '', url: 'verificacion' },
};

console.log(`Proyecto: ${URL_BASE}\n`);
for (const [table, row] of Object.entries(inserts)) {
  const r = await call(`/rest/v1/${table}`, { method: 'POST', headers: { ...h, Prefer: 'return=minimal' }, body: JSON.stringify(row) });
  check(r.status === 201, `El público puede insertar en ${table}`, r.status === 201 ? '' : `HTTP ${r.status} ${r.text.slice(0, 150)}`);
}

for (const table of Object.keys(inserts)) {
  const r = await call(`/rest/v1/${table}?select=*&limit=1`, { headers: h });
  const leaked = r.status === 200 && r.text.trim() !== '[]';
  check(!leaked, `El público NO puede leer ${table}`, leaked ? 'se devolvieron datos: revisa la migración (RLS)' : `HTTP ${r.status}`);
}

{
  const r = await call('/rest/v1/rpc/complete_test_session', {
    method: 'POST',
    headers: h,
    body: JSON.stringify({ p_session_id: sid, p_selected_domain: 'verificacion', p_skills_selected: [], p_ranked_careers: [], p_top_career: 'Verificación', p_total_duration_seconds: 1 }),
  });
  check(r.status === 200 || r.status === 204, 'La función complete_test_session responde', `HTTP ${r.status} ${r.status >= 300 ? r.text.slice(0, 150) : ''}`);
}

{
  const r = await call('/functions/v1/aurelio-chat', {
    method: 'POST',
    headers: { ...h, Origin: ORIGIN },
    body: JSON.stringify({ question: '¿Cuánto cuesta la carrera?', careerKey: 'medicina', history: [] }),
  });
  let reply = '';
  try {
    reply = JSON.parse(r.text).reply || '';
  } catch { /* respuesta no JSON */ }
  check(r.status === 200 && reply, 'La Edge Function aurelio-chat responde con IA', r.status === 200 ? reply.slice(0, 120) : `HTTP ${r.status} ${r.text.slice(0, 150)}`);
}

console.log(failures ? `\n${failures} comprobación(es) fallaron.` : '\nTodo correcto.');
process.exit(failures ? 1 : 0);
