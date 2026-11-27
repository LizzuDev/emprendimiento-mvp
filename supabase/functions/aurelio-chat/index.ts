// Supabase Edge Function: aurelio-chat
// Aurelio responde SOLO con datos verificados, gastando la menor cuota de IA posible:
//   1. Analiza la pregunta (nlp.js): tema, carreras nombradas y materias, dentro del ALCANCE
//      (carrera activa; otra carrera solo si se nombra).
//   2. Caché compartida (tabla aurelio_cache): si ya se respondió una pregunta equivalente
//      para esa carrera y esa versión de los datos, responde sin llamar a la IA.
//   3. Contexto mínimo (context.ts): solo la parte de la ficha del tema detectado.
//   4. Groq (gpt-oss-120b -> gpt-oss-20b, configurable con GROQ_MODELS) y Gemini como respaldo.
// Las claves del proveedor viven SOLO aquí (secrets), nunca en el navegador.
// Groq retiró llama-3.3-70b-versatile y llama-3.1-8b-instant el 16/08/2026 (console.groq.com/docs/deprecations).

import { buildContext, cut, findActiveCareer, KB_VERSION, planFor, RULES, type Msg } from './context.ts';
import { fingerprint, INCOHERENT_REPLY, isCacheable } from './nlp.js';

const GROQ_API_KEY = Deno.env.get('GROQ_API_KEY') ?? '';
const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY') ?? '';
const GEMINI_MODEL = Deno.env.get('GEMINI_MODEL') ?? 'gemini-2.0-flash';
// Orígenes permitidos separados por coma (ej: https://mi-app.onrender.com,https://usuario.github.io).
// Localhost siempre se permite. Si está vacío se acepta cualquier origen (solo para desarrollo).
const ALLOWED_ORIGINS = (Deno.env.get('ALLOWED_ORIGINS') ?? '').split(',').map((s) => s.trim()).filter(Boolean);

const GROQ_MODELS = (Deno.env.get('GROQ_MODELS') ?? 'openai/gpt-oss-120b,openai/gpt-oss-20b').split(',').map((s) => s.trim()).filter(Boolean);
const MAX_TOKENS = 600;
// Los modelos gpt-oss razonan antes de responder y ese razonamiento consume tokens de salida:
// se pide esfuerzo bajo, sin devolver el razonamiento, y un margen mayor para la respuesta.
const GROQ_MAX_COMPLETION_TOKENS = 1500;
const TEMPERATURE = 0.3;
const PROVIDER_TIMEOUT_MS = 12_000;
const RATE_LIMIT = { windowMs: 60_000, max: 12 }; // por IP, por instancia (mejor esfuerzo)

// Caché compartida de respuestas (tabla public.aurelio_cache, solo accesible con la clave de servicio).
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
const CACHE_TTL_MS = 30 * 24 * 3600 * 1000; // 30 días (además se invalida al cambiar los datos)
const hits = new Map<string, number[]>();

// ---------------------------------------------------------------------------
// Seguridad: CORS y límite de consultas
// ---------------------------------------------------------------------------
function originAllowed(origin: string | null) {
  if (!ALLOWED_ORIGINS.length) return true;
  if (!origin) return false;
  if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) return true;
  return ALLOWED_ORIGINS.includes(origin);
}

function corsHeaders(origin: string | null) {
  // Solo se refleja el origen si está permitido.
  const allow = origin && originAllowed(origin) ? origin : ALLOWED_ORIGINS[0] ?? '*';
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.length ? allow : '*',
    'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin',
  };
}

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // evita crecer sin límite en instancias largas
  return recent.length > RATE_LIMIT.max;
}

// ---------------------------------------------------------------------------
// Proveedores
// ---------------------------------------------------------------------------
async function callGroq(messages: { role: string; content: string }[]) {
  if (!GROQ_API_KEY) return null;
  for (const model of GROQ_MODELS) {
    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        signal: AbortSignal.timeout(PROVIDER_TIMEOUT_MS),
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${GROQ_API_KEY}` },
        body: JSON.stringify({
          model,
          messages,
          temperature: TEMPERATURE,
          max_completion_tokens: GROQ_MAX_COMPLETION_TOKENS,
          ...(model.startsWith('openai/gpt-oss') ? { reasoning_effort: 'low', include_reasoning: false } : {}),
        }),
      });
      if (!res.ok) {
        console.warn(`Groq ${model} -> ${res.status}`);
        continue;
      }
      const data = await res.json();
      const text = data?.choices?.[0]?.message?.content?.trim();
      if (text) return { text, model };
    } catch (err) {
      console.warn(`Groq ${model} falló:`, err instanceof Error ? err.message : err);
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Caché compartida
// ---------------------------------------------------------------------------
function serviceHeaders(extra: Record<string, string> = {}) {
  const h: Record<string, string> = { apikey: SERVICE_KEY, 'Content-Type': 'application/json', ...extra };
  if (!SERVICE_KEY.startsWith('sb_')) h.Authorization = `Bearer ${SERVICE_KEY}`; // clave legacy (JWT)
  return h;
}

async function sha256(text: string) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function cacheGet(key: string): Promise<string | null> {
  if (!SUPABASE_URL || !SERVICE_KEY) return null;
  try {
    const since = encodeURIComponent(new Date(Date.now() - CACHE_TTL_MS).toISOString());
    const res = await fetch(`${SUPABASE_URL}/rest/v1/aurelio_cache?select=answer&key=eq.${key}&created_at=gte.${since}&limit=1`, {
      headers: serviceHeaders(),
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) {
      console.warn(`caché (lectura) -> ${res.status}`);
      return null;
    }
    const rows = await res.json();
    return rows?.[0]?.answer ?? null;
  } catch (err) {
    console.warn('caché (lectura) falló:', err instanceof Error ? err.message : err);
    return null;
  }
}

async function cachePut(row: Record<string, unknown>) {
  if (!SUPABASE_URL || !SERVICE_KEY) return;
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/aurelio_cache?on_conflict=key`, {
      method: 'POST',
      headers: serviceHeaders({ Prefer: 'resolution=merge-duplicates,return=minimal' }),
      body: JSON.stringify({ ...row, created_at: new Date().toISOString() }),
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) console.warn(`caché (escritura) -> ${res.status}`);
  } catch (err) {
    console.warn('caché (escritura) falló:', err instanceof Error ? err.message : err);
  }
}

async function callGemini(system: string, history: Msg[], question: string) {
  if (!GEMINI_API_KEY) return null;
  // Gemini exige que la conversación empiece con el usuario: se descartan los mensajes iniciales del asistente.
  const firstUser = history.findIndex((m) => m.role === 'user');
  const trimmed = firstUser === -1 ? [] : history.slice(firstUser);
  const contents = [
    ...trimmed.map((m) => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.content }] })),
    { role: 'user', parts: [{ text: question }] },
  ];
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`, {
      method: 'POST',
      signal: AbortSignal.timeout(PROVIDER_TIMEOUT_MS),
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': GEMINI_API_KEY },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents,
        generationConfig: { temperature: TEMPERATURE, maxOutputTokens: MAX_TOKENS },
      }),
    });
    if (!res.ok) {
      console.warn(`Gemini -> ${res.status}`);
      return null;
    }
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text ?? '').join('').trim();
    return text ? { text, model: GEMINI_MODEL } : null;
  } catch (err) {
    console.warn('Gemini falló:', err instanceof Error ? err.message : err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Servidor
// ---------------------------------------------------------------------------
Deno.serve(async (req) => {
  const origin = req.headers.get('origin');
  const headers = { ...corsHeaders(origin), 'Content-Type': 'application/json' };
  const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers });

  if (req.method === 'OPTIONS') return new Response('ok', { headers });
  if (req.method !== 'POST') return json({ error: 'Método no permitido' }, 405);
  if (!originAllowed(origin)) return json({ error: 'Origen no permitido' }, 403);

  const ip = req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  if (rateLimited(ip)) return json({ error: 'Demasiadas consultas, intenta en un minuto' }, 429);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'JSON inválido' }, 400);
  }

  const question = cut(body.question, 600).trim();
  if (!question) return json({ error: 'Falta la pregunta' }, 400);

  // Historial mínimo: los 2 últimos mensajes, recortados (cada token cuenta para el límite de Groq).
  const history: Msg[] = (Array.isArray(body.history) ? body.history : [])
    .slice(-2)
    .map((m: { role?: string; content?: string }) => ({
      role: m?.role === 'user' ? 'user' as const : 'assistant' as const,
      content: cut(m?.content, 400),
    }))
    .filter((m) => m.content);

  const active = findActiveCareer(body);
  const plan = planFor(question, active);
  const meta = { career: plan.scope.primary || null, intent: plan.intent, route: plan.reason };

  // 0. Preguntas incoherentes ("??????", "asdfgh"): mensaje fijo, sin caché ni IA.
  if (plan.intent === 'incoherente') return json({ reply: INCOHERENT_REPLY, provider: 'filtro', ...meta });

  // 1. Caché compartida
  const cacheable = isCacheable(question);
  const key = cacheable
    ? await sha256(`${KB_VERSION}|${plan.scope.primary}|${[...plan.scope.others].sort().join(',')}|${fingerprint(question)}`)
    : null;
  if (key) {
    const hit = await cacheGet(key);
    if (hit) return json({ reply: hit, provider: 'cache', ...meta });
  }

  // 2. IA con contexto mínimo. Las reglas fijas van primero (prefijo que Groq guarda en caché).
  const context = buildContext(plan);
  const messages = [
    { role: 'system', content: RULES },
    { role: 'system', content: context },
    ...history,
    { role: 'user', content: question },
  ];

  const save = (reply: string, model: string) =>
    key ? cachePut({ key, answer: reply, model, kb_version: KB_VERSION, career_key: plan.scope.primary || null, intent: plan.intent }) : Promise.resolve();

  const groq = await callGroq(messages);
  if (groq) {
    await save(groq.text, groq.model);
    return json({ reply: groq.text, provider: 'groq', model: groq.model, ...meta });
  }

  const gemini = await callGemini(`${RULES}\n\n${context}`, history, question);
  if (gemini) {
    await save(gemini.text, gemini.model);
    return json({ reply: gemini.text, provider: 'gemini', model: gemini.model, ...meta });
  }

  return json({ error: 'Servicio de IA no disponible' }, 503);
});
