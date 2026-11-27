// =========================================================
// AurelioBot · Orientación vocacional de la PUCE
//
// Para ahorrar cuota de IA, cada pregunta sigue esta ruta (ver planRoute en js/aurelioNLP.js):
//   1. Pregunta sugerida, saludo o tema claro  -> motor local con datos oficiales (0 tokens)
//   2. Pregunta compleja ya respondida antes   -> caché del navegador o caché compartida (0 tokens)
//   3. Pregunta compleja nueva                 -> Edge Function `aurelio-chat` con contexto mínimo
//   4. Si la IA falla                          -> motor local (respaldo)
// El alcance es la carrera que el estudiante está viendo; otra carrera solo si la nombra.
// Datos: js/data/aurelioKnowledge.js (oficiales, extraídos de www.puce.edu.ec).
// =========================================================

import { SUPABASE_FUNCTIONS_URL, SUPABASE_ANON_KEY, SUPABASE_CONFIGURED } from './supabaseClient.js';
import { PUCE_FACTS, OFFICIAL_CAREERS, KB_VERSION } from './data/aurelioKnowledge.js';
import { planRoute, detectIntent, fingerprint, isCacheable } from './aurelioNLP.js';

const AI_PROXY_URL = `${SUPABASE_FUNCTIONS_URL}/aurelio-chat`;
const PROXY_TIMEOUT_MS = 20000;

// Versiones anteriores permitían guardar una clave de Groq en el navegador: se elimina si quedó guardada.
try {
  if (typeof localStorage !== 'undefined') localStorage.removeItem('puce_groq_api_key');
} catch { /* almacenamiento no disponible */ }

// Último origen de respuesta: 'unknown' | 'local' (motor local por diseño) | 'cache' | 'groq' | 'gemini'
// | 'fallback' (la IA no respondió y respondió el motor local)
let lastAiSource = 'unknown';
let lastPlan = null;
export function getLastAurelioSource() {
  return lastAiSource;
}
/** Ruta y motivo de la última pregunta (para telemetría y pruebas). */
export function getLastAurelioPlan() {
  return lastPlan ? { route: lastPlan.route, reason: lastPlan.reason, intent: lastPlan.intent, scope: lastPlan.scope } : null;
}

// =========================================================
// Utilidades de texto
// =========================================================
function normalizeText(text) {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9ñ\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Coincidencia por palabras completas: "numero" no coincide dentro de otra palabra y "top" no coincide con "laptop".
function hasPhrase(normText, phrase) {
  return ` ${normText} `.includes(` ${normalizeText(phrase)} `);
}

// =========================================================
// Datos oficiales verificados
// =========================================================
const factsByTopic = (tema) => PUCE_FACTS.filter((f) => f.tema === tema);
const factById = (id) => PUCE_FACTS.find((f) => f.id === id);
const factsByIds = (...ids) => ids.map(factById).filter(Boolean);

function admissionsContact() {
  const f = factById('admisiones-contacto');
  return f ? f.texto : 'Te recomiendo consultarlo directamente con **Admisiones de la PUCE**.';
}

function factsList(facts) {
  return facts.map((f) => `- ${f.texto}`).join('\n');
}

function notConfirmed(tema) {
  return `No tengo información oficial confirmada sobre ${tema}, y prefiero no darte un dato que pueda ser incorrecto.\n\n${admissionsContact()}`;
}

function answerWithFacts(intro, facts, temaSinDatos) {
  if (!facts.length) return notConfirmed(temaSinDatos);
  return `${intro}\n${factsList(facts)}`;
}

const usd = (n) => `USD ${Number(n).toLocaleString('es-EC')}`;

// Datos propios de cada facultad (prácticas e infraestructura).
const FACULTY_FACTS = [
  [/salud/i, 'convenios-salud'],
  [/derecho/i, 'convenios-sociales'],
  [/exactas|naturales|ambientales/i, 'convenios-sostenibilidad'],
];

function careerInfo(career) {
  const o = OFFICIAL_CAREERS[career?.key] || null;
  return {
    official: o,
    name: o?.nombre || career?.name || 'esta carrera',
    faculty: o?.facultad || '',
    page: o?.fuentes?.pagina || null,
  };
}

const moreInfo = (c) => (c.page ? `\n\nMás información oficial: ${c.page}` : '');

// =========================================================
// Intenciones del motor local
// Se elige la intención con más puntaje (frases más largas valen más).
// En empate gana la que aparece primero en la lista.
// =========================================================
// (Los temas viven en js/aurelioNLP.js, compartido con la Edge Function.)

export { detectIntent };

const SUGGESTIONS = 'Puedes preguntarme, por ejemplo, por:\n- Materias y duración de la carrera\n- Dónde podrías trabajar\n- Costos y becas\n- Cómo inscribirte';

// =========================================================
// Motor local de respaldo
// =========================================================
export function getAurelioContextualAnswer(career, questionText, plan = null) {
  if (!career) {
    return '¡Hola! Para responderte con exactitud, selecciona una carrera en tu ranking de resultados.';
  }
  plan = plan || planRoute(questionText, { activeKey: career.key, careers: OFFICIAL_CAREERS });
  // Si la pregunta nombra otra carrera (y solo esa), se responde sobre esa carrera.
  if (plan.scope?.primary && plan.scope.primary !== career.key && OFFICIAL_CAREERS[plan.scope.primary]) {
    career = { key: plan.scope.primary, name: OFFICIAL_CAREERS[plan.scope.primary].nombre };
  }

  const c = careerInfo(career);
  const norm = normalizeText(questionText);
  const words = norm.split(' ').filter(Boolean).length;

  // Saludos y despedidas (solo mensajes cortos)
  if (words <= 4 && /^(hola|holi|buenas|buenos dias|buen dia|buenas tardes|buenas noches|hey|que tal|saludos)\b/.test(norm)) {
    return `¡Hola! Soy **Aurelio**, tu orientador de la PUCE 👋 Cuéntame qué quieres saber sobre **${c.name}**.\n\n${SUGGESTIONS}`;
  }
  if (words <= 6 && /\b(gracias|chao|adios|hasta luego|nos vemos)\b/.test(norm)) {
    return `¡Con gusto! Cuando quieras volver a preguntar sobre **${c.name}**, aquí estaré.`;
  }

  const o = c.official;
  switch (plan.intent) {
    case 'materia': {
      const subjects = plan.subjects || [];
      if (!subjects.length) return notConfirmed('esa materia') + moreInfo(c);
      const lines = subjects.map((m) => {
        const where = m.itinerario ? `${m.itinerario}${m.semestre ? `, nivel ${m.semestre}` : ''}` : `semestre ${m.semestre}`;
        return `- **${m.materia}**: ${where} de ${m.careerName}.`;
      });
      return `Según la malla oficial:\n${lines.join('\n')}\n\nSi quieres saber de qué trata, pregúntame por ejemplo: «¿de qué trata ${subjects[0].materia}?».`;
    }

    case 'admisiones': {
      let ids = ['admisiones-examen', 'admisiones-examen-cuando', 'admisiones-requisitos', 'admisiones-inscripcion-gratuita'];
      if (/fecha|inicio|empiez|clases|cuando/.test(norm)) ids = ['admisiones-examen-cuando', 'admisiones-requisitos', 'admisiones-inscripcion-gratuita', 'admisiones-inicio-clases'];
      if (/requisit|document/.test(norm)) ids = ['admisiones-requisitos', 'admisiones-inscripcion-gratuita'];
      if (/curso|prepar|simulador/.test(norm)) ids = ['admisiones-curso-preparacion', 'admisiones-curso-de-admision'];
      if (career?.key === 'medicina' && !ids.includes('admisiones-examen-medicina')) ids.push('admisiones-examen-medicina');
      const facts = factsByIds(...ids, 'admisiones-contacto');
      if (!facts.length) return notConfirmed('el proceso de admisión');
      return `Para entrar a **${c.name}**:\n${factsList(facts)}`;
    }

    case 'costos': {
      const parts = [];
      if (o?.costo) {
        parts.push(`En **${c.name}**, el arancel es de **${usd(o.costo.precioConDescuento)} por semestre** con el ${o.costo.descuentoPct}% de descuento directo (precio real: ${usd(o.costo.precioReal)}).${o.costo.nota ? ` ${o.costo.nota}.` : ''}`);
      } else {
        parts.push(`No tengo el costo oficial de **${c.name}**.`);
      }
      const facts = factsByIds('costos-matricula', 'costos-descuento-permanente', 'costos-financiamiento');
      if (facts.length) parts.push(factsList(facts));
      if (/beca/.test(norm)) {
        const becas = factsByIds('beca-abanderados', 'beca-excelencia', 'beca-igualdad', 'becas-como-postular');
        if (becas.length) parts.push(`Algunas becas:\n${factsList(becas)}`);
      } else {
        parts.push('Si te interesan las becas, pregúntame por ellas 😉');
      }
      return parts.join('\n\n') + moreInfo(c);
    }

    case 'becas': {
      let ids = ['beca-abanderados', 'beca-excelencia', 'beca-igualdad', 'beca-deportistas', 'beca-hermanos'];
      if (/deport/.test(norm)) ids = ['beca-deportistas', 'beca-cultural'];
      if (/discapacidad/.test(norm)) ids = ['beca-discapacidad'];
      if (/pueblo|nacionalidad|indigena|afro/.test(norm)) ids = ['beca-pueblos'];
      const facts = factsByIds(...ids, 'becas-como-postular');
      return answerWithFacts('Algunas becas de la PUCE:', facts, 'las becas');
    }

    case 'sueldo':
      return `No tengo cifras oficiales de sueldos para **${c.name}** y prefiero no inventarlas: varían según el sector, la empresa y la experiencia.${o?.campoLaboral ? `\n\nLo que sí dice la PUCE sobre dónde podrías trabajar: ${o.campoLaboral}` : ''}`;

    case 'convenios': {
      const tema = FACULTY_FACTS.find(([re]) => re.test(c.faculty))?.[1];
      const facts = tema ? factsByTopic(tema) : [];
      const why = o?.porQueEstudiar ? `Según la PUCE, en **${c.name}**: ${o.porQueEstudiar}` : '';
      if (!facts.length && !why) return notConfirmed(`los convenios y prácticas de ${c.name}`) + moreInfo(c);
      return [why, facts.length ? factsList(facts) : '', 'Para el detalle de dónde se hacen las prácticas, consulta con Admisiones.'].filter(Boolean).join('\n\n') + moreInfo(c);
    }

    case 'intercambios':
      return answerWithFacts(`Como estudiante de **${c.name}** en la PUCE:`, factsByIds('intercambios-requisitos', 'intercambios-costos', 'intercambios-beca-ausjal', 'intercambios-contacto'), 'los programas de intercambio');

    case 'titulacion': {
      const parts = [];
      if (o?.titulo) parts.push(`Al graduarte de **${c.name}** obtienes el título de **${o.titulo}**${o.duracion ? `, y la carrera dura **${o.duracion}**` : ''}.`);
      const facts = factsByTopic('titulacion');
      if (facts.length) parts.push(factsList(facts));
      parts.push('Los requisitos exactos de graduación (idiomas, prácticas, titulación) los confirma tu facultad o Admisiones.');
      return parts.join('\n\n');
    }

    case 'horarios':
      return o?.modalidad
        ? `**${c.name}** se estudia en modalidad **${o.modalidad.toLowerCase()}**. Los horarios exactos de cada período los entrega la PUCE al matricularte.\n\n${admissionsContact()}`
        : notConfirmed(`la modalidad de ${c.name}`);

    case 'ubicacion':
      return answerWithFacts(`Sobre dónde se estudia **${c.name}**:`, factsByIds('campus-direccion', 'sedes'), 'la ubicación');

    case 'campus':
      return answerWithFacts('Sobre la vida universitaria en la PUCE:', factsByIds('campus-puce-activa', 'campus-biblioteca'), 'las instalaciones del campus');

    case 'malla': {
      if (!o?.malla?.length) return notConfirmed(`la malla de ${c.name}`) + moreInfo(c);
      const intro = `**${c.name}** dura **${o.duracion || `${o.malla.length} semestres`}**. En el primer semestre verás:`;
      const its = o.itinerarios?.length ? `\n\nEn los últimos semestres eliges un itinerario: ${o.itinerarios.map((i) => i.nombre.replace(/^\s*I?ntinerario\s+[IVX]+:\s*/i, '')).join(', ')}.` : '';
      return `${intro}\n${o.malla[0].map((s) => `- ${s}`).join('\n')}${its}\n\nPuedes ver la malla completa en el brochure oficial: ${o.fuentes.brochure}`;
    }

    case 'dificultad': {
      const first = o?.malla?.[0] || [];
      const base = first.length
        ? `En **${c.name}**, el primer semestre incluye materias como **${first.slice(0, 3).join(', ')}**. Cada persona vive la exigencia de forma distinta: lo que más ayuda es la constancia y pedir apoyo a tiempo.`
        : `Cada persona vive la exigencia de **${c.name}** de forma distinta: lo que más ayuda es la constancia y pedir apoyo a tiempo.`;
      const facts = factsByTopic('apoyo-academico');
      return `${base}${facts.length ? `\n\n${factsList(facts)}` : ''}\n\nUn buen termómetro es el **mini-reto** de la carrera en tus resultados.`;
    }

    case 'perfil': {
      const items = (o?.resultadosAprendizaje || []).slice(0, 4);
      if (!items.length) return notConfirmed(`el perfil de ${c.name}`) + moreInfo(c);
      return `Al terminar **${c.name}**${o.titulo ? ` (título: ${o.titulo})` : ''}, según la PUCE serás capaz de:\n${items.map((s) => `- ${s}`).join('\n')}`;
    }

    case 'laboral':
      return o?.campoLaboral ? `${o.campoLaboral}${moreInfo(c)}` : notConfirmed(`el campo laboral de ${c.name}`);

    case 'prestigio': {
      const facts = factsByIds('prestigio-qs', 'prestigio-cifras', ...(career?.key === 'medicina' ? ['prestigio-medicina-wfme'] : []));
      return answerWithFacts('Sobre el reconocimiento de la PUCE:', facts, 'la acreditación y los rankings de la PUCE');
    }

    case 'comparar':
      return 'Es normal dudar al elegir 😊 Lo importante es que la carrera encaje contigo.\n\n- Compara las carreras de tu **Ranking de Afinidad**.\n- Prueba el **mini-reto** de cada una para ver cómo se piensa en esa profesión.\n- Revisa su **malla curricular** para ver qué materias estudiarás.\n\nSi quieres, cuéntame qué carreras estás comparando.';

    case 'ventajas': {
      const why = o?.porQueEstudiar ? `Según la PUCE, **${c.name}** destaca por: ${o.porQueEstudiar}` : '';
      const facts = factsByIds('prestigio-qs');
      return [why, facts.length ? factsList(facts) : '', 'La mejor razón para elegirla es que encaje con tus intereses: tu resultado de afinidad y el mini-reto te ayudan a comprobarlo.'].filter(Boolean).join('\n\n');
    }

    case 'ajeno':
      return `Soy **Aurelio**, el orientador vocacional de la PUCE, así que mi especialidad es ayudarte a elegir y conocer tu carrera 🎓\n\n${SUGGESTIONS}`;

    default:
      return `No tengo una respuesta confirmada para esa pregunta sobre **${c.name}**, y prefiero no adivinar.\n\n${admissionsContact()}\n\n${SUGGESTIONS}`;
  }
}

// =========================================================
// Consulta principal: Edge Function y, si falla, motor local
// =========================================================

// El historial ya incluye la pregunta actual (la última del usuario): se excluye para no duplicarla.
function historyBeforeQuestion(chatHistory, questionText) {
  const hist = Array.isArray(chatHistory) ? chatHistory : [];
  const last = hist[hist.length - 1];
  return last && last.sender === 'user' && last.text === questionText ? hist.slice(0, -1) : hist;
}

// Caché del navegador: preguntas complejas ya respondidas por la IA (por estudiante).
const BROWSER_CACHE_KEY = 'aurelio_cache';
const BROWSER_CACHE_MAX = 60;

function cacheKeyFor(plan, questionText) {
  const others = [...(plan.scope?.others || [])].sort().join(',');
  return `${KB_VERSION}|${plan.scope?.primary || ''}|${others}|${fingerprint(questionText)}`;
}

function browserCacheGet(key) {
  try {
    const store = JSON.parse(localStorage.getItem(BROWSER_CACHE_KEY) || '{}');
    return store[key]?.a || null;
  } catch {
    return null;
  }
}

function browserCachePut(key, answer) {
  try {
    const store = JSON.parse(localStorage.getItem(BROWSER_CACHE_KEY) || '{}');
    for (const k of Object.keys(store)) if (!k.startsWith(`${KB_VERSION}|`)) delete store[k]; // datos viejos
    store[key] = { a: answer, t: Date.now() };
    const keys = Object.keys(store).sort((x, y) => store[x].t - store[y].t);
    while (keys.length > BROWSER_CACHE_MAX) delete store[keys.shift()];
    localStorage.setItem(BROWSER_CACHE_KEY, JSON.stringify(store));
  } catch { /* almacenamiento no disponible */ }
}

async function queryAurelioProxy(career, questionText, chatHistory) {
  if (!SUPABASE_CONFIGURED) return null; // sin proyecto Supabase: se usa el motor local
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PROXY_TIMEOUT_MS);
  try {
    const response = await fetch(AI_PROXY_URL, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY
      },
      body: JSON.stringify({
        question: questionText,
        careerKey: career?.key || '',
        // Historial mínimo (ahorra tokens): los 2 últimos mensajes, recortados.
        history: historyBeforeQuestion(chatHistory, questionText).slice(-2).map((m) => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: String(m.text || '').slice(0, 400)
        }))
      })
    });
    if (!response.ok) {
      console.warn(`Servicio de IA respondió ${response.status}. Se usa el motor local.`);
      return null;
    }
    const data = await response.json();
    const reply = typeof data?.reply === 'string' ? data.reply.trim() : '';
    if (reply) return { reply, provider: data.provider === 'cache' ? 'cache' : data.provider === 'gemini' ? 'gemini' : 'groq' };
  } catch (err) {
    console.warn('Servicio de IA no disponible:', err);
  } finally {
    clearTimeout(timer);
  }
  return null;
}

/**
 * Responde una pregunta del estudiante gastando la menor cuota de IA posible.
 * @param {object} career carrera activa (la que el estudiante está viendo)
 * @param {string} questionText pregunta
 * @param {Array} chatHistory historial del chat
 * @param {{fromChip?: boolean}} [options] fromChip: la pregunta viene de una sugerencia
 */
export async function queryAurelio(career, questionText, chatHistory = [], options = {}) {
  const plan = planRoute(questionText, { activeKey: career?.key, careers: OFFICIAL_CAREERS, fromChip: !!options.fromChip });
  lastPlan = plan;

  if (plan.route === 'local') {
    lastAiSource = 'local';
    return getAurelioContextualAnswer(career, questionText, plan);
  }

  const cacheable = isCacheable(questionText);
  const key = cacheKeyFor(plan, questionText);
  if (cacheable) {
    const cached = browserCacheGet(key);
    if (cached) {
      lastAiSource = 'cache';
      return cached;
    }
  }

  const viaProxy = await queryAurelioProxy(career, questionText, chatHistory);
  if (viaProxy) {
    lastAiSource = viaProxy.provider;
    if (cacheable) browserCachePut(key, viaProxy.reply);
    return viaProxy.reply;
  }
  lastAiSource = 'fallback';
  return getAurelioContextualAnswer(career, questionText, plan);
}
