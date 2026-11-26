// Supabase Edge Function: aurelio-chat
// Aurelio responde SOLO con datos verificados (RAG estructurado):
//   1. Se identifica la carrera activa (y otras carreras mencionadas en la pregunta).
//   2. Se arma el contexto con su ficha oficial (knowledge/careers.json) y los datos
//      institucionales verificados (knowledge/puce.json, verificado=true). Ver context.ts.
//   3. El modelo redacta la respuesta usando únicamente ese contexto.
// Las claves del proveedor viven SOLO aquí (secrets), nunca en el navegador.
// Proveedores: Groq (llama-3.3-70b -> llama-3.1-8b) y, si hay clave, Gemini como respaldo.

import { buildSystemPrompt, cut, findActiveCareer, mentionedCareers, type Msg } from './context.ts';

const GROQ_API_KEY = Deno.env.get('GROQ_API_KEY') ?? '';
const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY') ?? '';
const GEMINI_MODEL = Deno.env.get('GEMINI_MODEL') ?? 'gemini-2.0-flash';
// Orígenes permitidos separados por coma (ej: https://mi-app.onrender.com,https://usuario.github.io).
// Localhost siempre se permite. Si está vacío se acepta cualquier origen (solo para desarrollo).
const ALLOWED_ORIGINS = (Deno.env.get('ALLOWED_ORIGINS') ?? '').split(',').map((s) => s.trim()).filter(Boolean);

const GROQ_MODELS = ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant'];
const MAX_TOKENS = 600;
const TEMPERATURE = 0.3;
const PROVIDER_TIMEOUT_MS = 12_000;
const RATE_LIMIT = { windowMs: 60_000, max: 12 }; // por IP, por instancia (mejor esfuerzo)
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
        body: JSON.stringify({ model, messages, temperature: TEMPERATURE, max_tokens: MAX_TOKENS }),
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

  const history: Msg[] = (Array.isArray(body.history) ? body.history : [])
    .slice(-4)
    .map((m: { role?: string; content?: string }) => ({
      role: m?.role === 'user' ? 'user' as const : 'assistant' as const,
      content: cut(m?.content, 1200),
    }))
    .filter((m) => m.content);

  const active = findActiveCareer(body);
  const others = mentionedCareers(question, active?.key);
  const system = buildSystemPrompt(active, others, question, history);
  const messages = [{ role: 'system', content: system }, ...history, { role: 'user', content: question }];

  const groq = await callGroq(messages);
  if (groq) return json({ reply: groq.text, provider: 'groq', model: groq.model, career: active?.key ?? null });

  const gemini = await callGemini(system, history, question);
  if (gemini) return json({ reply: gemini.text, provider: 'gemini', model: gemini.model, career: active?.key ?? null });

  return json({ error: 'Servicio de IA no disponible' }, 503);
});
