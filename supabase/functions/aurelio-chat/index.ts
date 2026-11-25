// Supabase Edge Function: aurelio-chat
// Proxy de IA para Aurelio Bot. Las claves del proveedor viven SOLO aquí (secrets), nunca en el navegador.
// Cadena de proveedores: Groq (llama-3.3-70b -> llama-3.1-8b) y, si hay clave, Gemini como respaldo.

const GROQ_API_KEY = Deno.env.get('GROQ_API_KEY') ?? '';
const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY') ?? '';
const GEMINI_MODEL = Deno.env.get('GEMINI_MODEL') ?? 'gemini-2.0-flash';
// Orígenes permitidos separados por coma (ej: https://tu-sitio.com). Localhost siempre se permite.
const ALLOWED_ORIGINS = (Deno.env.get('ALLOWED_ORIGINS') ?? '').split(',').map((s) => s.trim()).filter(Boolean);

const GROQ_MODELS = ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant'];
const MAX_TOKENS = 700;
const RATE_LIMIT = { windowMs: 60_000, max: 12 }; // por IP, por instancia (mejor esfuerzo)
const hits = new Map<string, number[]>();

function corsHeaders(origin: string | null) {
  return {
    'Access-Control-Allow-Origin': origin ?? '*',
    'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin',
  };
}

function originAllowed(origin: string | null) {
  if (!ALLOWED_ORIGINS.length) return true;
  if (!origin) return false;
  if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) return true;
  return ALLOWED_ORIGINS.includes(origin);
}

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT.max;
}

const cut = (v: unknown, n: number) => String(v ?? '').slice(0, n);

function buildSystemPrompt(c: Record<string, unknown>) {
  const name = cut(c.name, 120) || 'la carrera recomendada';
  const skills = Array.isArray(c.skills) ? c.skills.slice(0, 8).map((s) => cut(s, 80)).join(', ') : '';
  const sem1 = Array.isArray(c.semester1) ? c.semester1.slice(0, 10).map((s) => cut(s, 80)).join(', ') : '';
  const benefits = cut(JSON.stringify(c.benefits ?? []), 600);

  return `Eres Aurelio, la mascota oficial y orientador vocacional inteligente de la Pontificia Universidad Católica del Ecuador (PUCE).
Resuelves cualquier inquietud de un estudiante interesado en estudiar ${name} en la PUCE, de forma empática, rigurosa, veraz y personalizada. Si la pregunta es general (otra carrera, vida universitaria, cómo elegir, estudio, motivación) también la respondes con utilidad y luego, si aplica, la conectas con su carrera.

INFORMACIÓN INSTITUCIONAL DE LA PUCE:
- Más de 75 años de trayectoria, acreditada por el CACES, Top en el QS World University Rankings en Ecuador.
- Movilidad: Red AUSJAL (30+ universidades jesuitas de Latinoamérica), convenios en España (Deusto, Comillas), EE.UU. y Europa con convalidación de créditos.
- Salud: convenios con MSP, IESS (HCAM, Hospital San Francisco), Hospital Pablo Arturo Suárez, Docente de Calderón, Eugenio Espejo, Vozandes, Metropolitano, y Centro de Simulación en el campus.
- Hábitat/Ingeniería: CAMICON, Colegio de Arquitectos del Ecuador, empresas tech y municipios.
- Negocios/Economía: Banco Pichincha, Produbanco, Cámara de Comercio de Quito, PUCEmprende.
- Sociales/Derecho: Corte Nacional de Justicia, Defensoría Pública, Consultorios Jurídicos Gratuitos, ONGs y medios.
- Sostenibilidad: MAATE, INABIO, Estación Científica Yasuní PUCE.
- Financiamiento: aranceles diferenciados en 5 categorías socioeconómicas, becas por mérito, deportivas y culturales, financiamiento directo.
- Campus matriz en Quito: polideportivo con piscina semiolímpica, gimnasio, canchas, Centro Cultural, Biblioteca de 200.000 volúmenes.
- Admisiones: WhatsApp 099 2420 103, correo inscripciones@puce.edu.ec.

DATOS DE LA CARRERA ACTIVA:
- Carrera: ${name}
- Facultad: ${cut(c.faculty, 120) || 'PUCE'}
- Perfil formativo: ${cut(c.description, 700)}
- Competencias: ${skills}
- Campo laboral: ${cut(c.fieldOfWork, 500)}
- Beneficios y costo referencial: ${benefits}
- Materias del primer semestre: ${sem1}

DIRECTRICES:
1. Responde directo y con precisión (máximo ~120 palabras) y termina siempre con una oración completa.
2. FORMATO: texto sencillo. Puedes usar **negrita** para 1 a 3 ideas clave y listas con "- ". Sin encabezados (#), tablas ni bloques de código.
3. Tono juvenil, motivador y acogedor, sin perder seriedad académica y ética.
4. Nunca inventes cifras ni datos institucionales (sueldos, fechas, cupos, horarios exactos). Si no lo sabes, dilo en una frase y deriva a Admisiones.
5. No pidas ni repitas datos personales sensibles del estudiante.`;
}

async function callGroq(messages: unknown[]) {
  if (!GROQ_API_KEY) return null;
  for (const model of GROQ_MODELS) {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${GROQ_API_KEY}` },
      body: JSON.stringify({ model, messages, temperature: 0.6, max_tokens: MAX_TOKENS }),
    });
    if (res.ok) {
      const data = await res.json();
      const text = data?.choices?.[0]?.message?.content?.trim();
      if (text) return text;
    } else {
      console.warn(`Groq ${model} -> ${res.status}`);
    }
  }
  return null;
}

async function callGemini(system: string, history: { role: string; content: string }[], question: string) {
  if (!GEMINI_API_KEY) return null;
  const contents = [
    ...history.map((m) => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.content }] })),
    { role: 'user', parts: [{ text: question }] },
  ];
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': GEMINI_API_KEY },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents,
      generationConfig: { temperature: 0.6, maxOutputTokens: MAX_TOKENS },
    }),
  });
  if (!res.ok) {
    console.warn(`Gemini -> ${res.status}`);
    return null;
  }
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text ?? '').join('').trim() || null;
}

Deno.serve(async (req) => {
  const origin = req.headers.get('origin');
  const headers = { ...corsHeaders(origin), 'Content-Type': 'application/json' };

  if (req.method === 'OPTIONS') return new Response('ok', { headers });
  if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'Método no permitido' }), { status: 405, headers });
  if (!originAllowed(origin)) return new Response(JSON.stringify({ error: 'Origen no permitido' }), { status: 403, headers });

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  if (rateLimited(ip)) return new Response(JSON.stringify({ error: 'Demasiadas consultas, intenta en un minuto' }), { status: 429, headers });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'JSON inválido' }), { status: 400, headers });
  }

  const question = cut(body.question, 600).trim();
  if (!question) return new Response(JSON.stringify({ error: 'Falta la pregunta' }), { status: 400, headers });

  const history = (Array.isArray(body.history) ? body.history : [])
    .slice(-4)
    .map((m: { role?: string; content?: string }) => ({
      role: m?.role === 'user' ? 'user' : 'assistant',
      content: cut(m?.content, 1200),
    }))
    .filter((m) => m.content);

  const system = buildSystemPrompt((body.career ?? {}) as Record<string, unknown>);
  const messages = [{ role: 'system', content: system }, ...history, { role: 'user', content: question }];

  try {
    const groqReply = await callGroq(messages);
    if (groqReply) return new Response(JSON.stringify({ reply: groqReply, provider: 'groq' }), { headers });

    const geminiReply = await callGemini(system, history, question);
    if (geminiReply) return new Response(JSON.stringify({ reply: geminiReply, provider: 'gemini' }), { headers });
  } catch (err) {
    console.error('aurelio-chat error', err);
  }

  return new Response(JSON.stringify({ error: 'Servicio de IA no disponible' }), { status: 503, headers });
});
