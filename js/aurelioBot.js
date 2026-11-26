// =========================================================
// AurelioBot · Orientación vocacional de la PUCE
//
// 1. Camino principal: Edge Function de Supabase `aurelio-chat`, que arma el contexto
//    con datos verificados y consulta la IA (las claves viven solo en el servidor).
// 2. Respaldo: motor local por intención. Solo usa datos verificados
//    (js/data/aurelioKnowledge.js) y los datos oficiales de la carrera; si no sabe algo,
//    lo dice y deriva a Admisiones.
// =========================================================

import { SUPABASE_FUNCTIONS_URL, SUPABASE_ANON_KEY } from './supabaseClient.js';
import { PUCE_FACTS, CAREER_FLAGS } from './data/aurelioKnowledge.js';

const AI_PROXY_URL = `${SUPABASE_FUNCTIONS_URL}/aurelio-chat`;
const PROXY_TIMEOUT_MS = 20000;

// Versiones anteriores permitían guardar una clave de Groq en el navegador: se elimina si quedó guardada.
try {
  if (typeof localStorage !== 'undefined') localStorage.removeItem('puce_groq_api_key');
} catch { /* almacenamiento no disponible */ }

// Último origen de respuesta: 'unknown' | 'groq' | 'gemini' | 'local'
let lastAiSource = 'unknown';
export function getLastAurelioSource() {
  return lastAiSource;
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
// Datos verificados
// =========================================================
const factsByTopic = (tema) => PUCE_FACTS.filter((f) => f.tema === tema);
const factById = (id) => PUCE_FACTS.find((f) => f.id === id);

function admissionsContact() {
  const f = factById('admisiones-contacto');
  return f ? f.texto : 'Te recomiendo consultarlo directamente con **Admisiones de la PUCE**.';
}

function factsList(facts) {
  return facts.map((f) => `- ${f.texto}`).join('\n');
}

// Respuesta cuando el dato todavía no está verificado.
function notConfirmed(tema) {
  return `Todavía no tengo información confirmada sobre ${tema}, y prefiero no darte un dato que pueda ser incorrecto.\n\n${admissionsContact()}`;
}

function answerWithFacts(intro, facts, temaSinDatos) {
  if (!facts.length) return notConfirmed(temaSinDatos);
  return `${intro}\n${factsList(facts)}`;
}

const AREA_CONVENIOS = {
  salud: 'convenios-salud',
  habitat: 'convenios-habitat',
  economia: 'convenios-economia',
  sociales: 'convenios-sociales',
  sostenibilidad: 'convenios-sostenibilidad',
};

function careerInfo(career) {
  const flags = CAREER_FLAGS[career?.key] || {};
  const semesters = career?.syllabus?.semesters || [];
  return {
    name: career?.name || 'esta carrera',
    faculty: flags.faculty || career?.faculty || '',
    area: flags.area || null,
    semesters,
    syllabusOk: !!flags.syllabusOk,
    cost: flags.costOk ? { discount: flags.discount, base: flags.base, investment: flags.investment } : null,
  };
}

// =========================================================
// Intenciones del motor local
// Se elige la intención con más puntaje (frases más largas valen más).
// En empate gana la que aparece primero en la lista.
// =========================================================
const INTENTS = [
  { id: 'admisiones', phrases: ['inscribir', 'inscribirme', 'inscribirse', 'inscribo', 'inscripcion', 'inscripciones', 'admision', 'admisiones', 'postular', 'postulacion', 'matricula', 'matricularme', 'examen de admision', 'examen de ingreso', 'requisitos', 'requisito', 'requisitos para entrar', 'requisitos para ingresar', 'requisitos de ingreso', 'ingresar a la puce', 'entrar a la puce', 'whatsapp', 'telefono', 'numero de whatsapp', 'numero de telefono', 'numero de contacto', 'contacto', 'contactar', 'correo', 'asesor', 'cupo', 'cupos'] },
  { id: 'costos', phrases: ['costo', 'costos', 'cuesta', 'cuestan', 'precio', 'precios', 'arancel', 'aranceles', 'pension', 'pagar', 'pago', 'cuota', 'cuanto vale', 'inversion', 'descuento', 'descuentos', 'beca', 'becas', 'financiamiento', 'ayuda economica', 'categoria'] },
  { id: 'sueldo', phrases: ['sueldo', 'sueldos', 'salario', 'salarios', 'cuanto gana', 'cuanto ganan', 'cuanto se gana', 'remuneracion'] },
  { id: 'convenios', phrases: ['convenio', 'convenios', 'practica', 'practicas', 'practicas preprofesionales', 'hospital', 'hospitales', 'clinica', 'clinicas', 'pasantia', 'pasantias', 'internado', 'rotacion', 'rotaciones'] },
  { id: 'intercambios', phrases: ['intercambio', 'intercambios', 'movilidad', 'extranjero', 'otro pais', 'otros paises', 'afuera', 'ausjal', 'internacional', 'internacionales', 'espana', 'europa', 'estados unidos'] },
  { id: 'titulacion', phrases: ['titulacion', 'titularme', 'graduarme', 'graduarse', 'graduacion', 'requisitos de grado', 'requisitos para graduarme', 'tesis', 'complexivo', 'ingles', 'idioma', 'idiomas', 'requisitos'] },
  { id: 'horarios', phrases: ['horario', 'horarios', 'jornada', 'nocturna', 'nocturno', 'en la noche', 'de noche', 'en la manana', 'en la tarde', 'virtual', 'en linea', 'online', 'a distancia', 'presencial', 'modalidad', 'trabajar y estudiar', 'estudiar y trabajar'] },
  { id: 'ubicacion', phrases: ['donde queda', 'donde esta', 'ubicacion', 'ubicada', 'direccion', 'como llegar', 'sede', 'sedes', 'en que ciudad'] },
  { id: 'campus', phrases: ['campus', 'instalaciones', 'deporte', 'deportes', 'gimnasio', 'piscina', 'cancha', 'canchas', 'biblioteca', 'club', 'clubes', 'cultura', 'cafeteria', 'vida universitaria', 'actividades'] },
  { id: 'malla', phrases: ['materia', 'materias', 'malla', 'pensum', 'asignatura', 'asignaturas', 'semestre', 'semestres', 'duracion', 'cuanto dura', 'cuantos anos', 'cuantos semestres', 'plan de estudios', 'primer semestre', 'primer ano', 'que voy a estudiar'] },
  { id: 'dificultad', phrases: ['dificil', 'dificiles', 'dificultad', 'exigente', 'complicada', 'complicado', 'pesada', 'reprobar', 'matematica', 'matematicas', 'calculo', 'miedo'] },
  { id: 'perfil', phrases: ['que hace un', 'que hace una', 'que hacen', 'a que se dedica', 'en que consiste', 'de que trata', 'que aprendo', 'que voy a aprender', 'perfil', 'habilidades', 'competencias'] },
  { id: 'laboral', phrases: ['trabajo', 'trabajos', 'trabajar', 'donde puedo trabajar', 'empleo', 'campo laboral', 'campo ocupacional', 'salida laboral', 'salidas', 'ejercer', 'empresa', 'empresas'] },
  { id: 'prestigio', phrases: ['acreditacion', 'acreditada', 'acreditado', 'caces', 'ranking', 'rankings', 'prestigio', 'reputacion', 'calidad', 'reconocida'] },
  { id: 'comparar', phrases: ['diferencia entre', 'comparar', 'compara', 'cual es mejor', 'que es mejor', 'es mejor', 'mejor que', 'otra universidad', 'otras universidades', 'no se cual', 'indeciso', 'indecisa', 'dudo', 'no estoy seguro', 'no estoy segura', 'no se que estudiar'] },
  { id: 'ventajas', phrases: ['por que estudiar', 'por que elegir', 'vale la pena', 'ventaja', 'ventajas', 'beneficio', 'beneficios', 'conviene', 'razones'] },
  { id: 'ajeno', phrases: ['clima', 'chiste', 'futbol', 'politica', 'receta', 'pelicula', 'cancion', 'horoscopo', 'bitcoin', 'criptomoneda', 'novia', 'novio', 'tarea de', 'resuelve'] },
];

export function detectIntent(questionText) {
  const norm = normalizeText(questionText);
  let best = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    const score = intent.phrases.reduce((acc, p) => acc + (hasPhrase(norm, p) ? normalizeText(p).split(' ').length : 0), 0);
    if (score > bestScore) {
      best = intent.id;
      bestScore = score;
    }
  }
  return best;
}

const SUGGESTIONS = 'Puedes preguntarme, por ejemplo, por:\n- Materias y duración de la carrera\n- Dónde podrías trabajar\n- Costos y becas\n- Convenios y prácticas';

// =========================================================
// Motor local de respaldo
// =========================================================
export function getAurelioContextualAnswer(career, questionText) {
  if (!career) {
    return '¡Hola! Para responderte con exactitud, selecciona una carrera en tu ranking de resultados.';
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

  switch (detectIntent(questionText)) {
    case 'admisiones': {
      const facts = factsByTopic('admisiones');
      if (!facts.length) return notConfirmed('el proceso de admisión');
      return `Para inscribirte en **${c.name}** o resolver dudas de admisión:\n${factsList(facts)}\n\nTambién puedes pulsar **«Quiero más información»** en esta pantalla.`;
    }

    case 'costos': {
      const parts = [];
      if (c.cost) {
        parts.push(`En **${c.name}**, la inversión referencial es de **$${c.cost.investment} por semestre**, con un ${c.cost.discount}% de descuento institucional (precio sin descuento: $${c.cost.base}). Confirma el valor actualizado con Admisiones.`);
      } else {
        parts.push(`No tengo el costo confirmado de **${c.name}**.`);
      }
      const facts = factsByTopic('costos');
      if (facts.length) parts.push(`Además:\n${factsList(facts)}`);
      if (!c.cost || factById('admisiones-contacto')) parts.push(admissionsContact());
      return parts.join('\n\n');
    }

    case 'sueldo':
      return `No tengo cifras oficiales de sueldos para **${c.name}** y prefiero no inventarlas: varían según el sector, la empresa y la experiencia.\n\nLo que sí puedo contarte es dónde podrías trabajar: ${career.fieldOfWork || 'en diversos sectores públicos y privados.'}`;

    case 'convenios': {
      const tema = AREA_CONVENIOS[c.area];
      const facts = tema ? factsByTopic(tema) : [];
      return answerWithFacts(`Para prácticas y convenios en **${c.name}**:`, facts, `los convenios de prácticas de ${c.name}`);
    }

    case 'intercambios':
      return answerWithFacts(`Como estudiante de **${c.name}** en la PUCE:`, factsByTopic('intercambios'), 'los programas de intercambio');

    case 'titulacion':
      return answerWithFacts(`Para graduarte en **${c.name}**:`, factsByTopic('titulacion'), 'los requisitos de graduación');

    case 'horarios':
      return answerWithFacts(`Sobre la modalidad y horarios de **${c.name}**:`, factsByTopic('horarios'), `los horarios y la modalidad de ${c.name}`);

    case 'ubicacion': {
      const facts = [factById('campus-ubicacion'), factById('admisiones-portal')].filter(Boolean);
      return answerWithFacts(`Sobre dónde se estudia **${c.name}**:`, facts, 'la ubicación de la carrera');
    }

    case 'campus':
      return answerWithFacts('Sobre el campus y la vida universitaria en la PUCE:', factsByTopic('campus').filter((f) => f.id !== 'campus-ubicacion'), 'las instalaciones del campus');

    case 'malla': {
      const total = c.semesters.length;
      const duration = total ? `**${c.name}** dura **${total} semestres** (aprox. ${total % 2 === 0 ? total / 2 : (total / 2).toFixed(1)} años).` : `No tengo la duración confirmada de **${c.name}**.`;
      if (!total) return `${duration}\n\n${admissionsContact()}`;
      if (c.syllabusOk) {
        return `${duration} En el primer semestre verás:\n${c.semesters[0].map((s) => `- ${s}`).join('\n')}\n\nPuedes revisar los ${total} semestres en el botón «Malla Curricular» de tus resultados.`;
      }
      // Sin orden confirmado: se muestran materias de inicio de secuencia (sin número o con número 1).
      const sample = [...new Set(c.semesters.flat())].filter((s) => !/\s([2-9]|\d{2,})\b/.test(s)).slice(0, 6);
      return `${duration} Algunas de sus materias son:\n${sample.map((s) => `- ${s}`).join('\n')}\n\nEl orden exacto por semestre lo confirma Admisiones. ${admissionsContact()}`;
    }

    case 'dificultad': {
      const first = c.syllabusOk ? c.semesters[0] || [] : [];
      const base = first.length
        ? `En **${c.name}**, el primer semestre incluye materias como **${first.slice(0, 3).join(', ')}**. Cada persona vive la exigencia de forma distinta: lo que más ayuda es la constancia y pedir apoyo a tiempo.`
        : `Cada persona vive la exigencia de **${c.name}** de forma distinta: lo que más ayuda es la constancia y pedir apoyo a tiempo.`;
      const facts = factsByTopic('apoyo-academico');
      const support = facts.length ? `\n\n${factsList(facts)}` : '';
      return `${base}${support}\n\nUn buen termómetro es el **mini-reto** de la carrera en tus resultados: te muestra cómo se piensa en esa profesión.`;
    }

    case 'perfil': {
      const skills = (career.skills || []).slice(0, 4);
      const list = skills.length ? `\n\n**Habilidades que desarrollarás:**\n${skills.map((s) => `- ${s}`).join('\n')}` : '';
      return `**${c.name}**${c.faculty ? ` (${c.faculty})` : ''}: ${career.description || 'formación profesional de la PUCE.'}${list}`;
    }

    case 'laboral':
      return career.fieldOfWork
        ? `Como profesional de **${c.name}** podrás desempeñarte en: ${career.fieldOfWork}`
        : notConfirmed(`el campo laboral de ${c.name}`);

    case 'prestigio':
      return answerWithFacts('Sobre la calidad y el reconocimiento de la PUCE:', factsByTopic('prestigio'), 'la acreditación y los rankings de la PUCE');

    case 'comparar':
      return 'Es normal dudar al elegir 😊 Lo importante es que la carrera encaje contigo.\n\n- Compara las carreras de tu **Ranking de Afinidad**.\n- Prueba el **mini-reto** de cada una para ver cómo se piensa en esa profesión.\n- Revisa su **malla curricular** para ver qué materias estudiarás.\n\nSi quieres, cuéntame qué carreras estás comparando.';

    case 'ventajas': {
      const facts = factsByTopic('prestigio');
      const extra = facts.length ? `\n\nSobre la PUCE:\n${factsList(facts)}` : '';
      return `**${c.name}** te prepara para: ${career.description || 'una formación profesional sólida.'}${extra}\n\nLa mejor razón para elegirla es que encaje con tus intereses: tu resultado de afinidad y el mini-reto te ayudan a comprobarlo.`;
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

async function queryAurelioProxy(career, questionText, chatHistory) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PROXY_TIMEOUT_MS);
  try {
    const response = await fetch(AI_PROXY_URL, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify({
        question: questionText,
        careerKey: career?.key || '',
        // Solo el nombre, para compatibilidad: la ficha completa la arma el servidor.
        career: { key: career?.key || '', name: career?.name || '' },
        history: historyBeforeQuestion(chatHistory, questionText).slice(-4).map((m) => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: String(m.text || '')
        }))
      })
    });
    if (!response.ok) {
      console.warn(`Servicio de IA respondió ${response.status}. Se usa el motor local.`);
      return null;
    }
    const data = await response.json();
    const reply = typeof data?.reply === 'string' ? data.reply.trim() : '';
    if (reply) {
      lastAiSource = data.provider === 'gemini' ? 'gemini' : 'groq';
      return reply;
    }
  } catch (err) {
    console.warn('Servicio de IA no disponible:', err);
  } finally {
    clearTimeout(timer);
  }
  return null;
}

/**
 * Responde una pregunta del estudiante: primero con la IA del proyecto (Edge Function)
 * y, si no está disponible, con el motor local verificado.
 */
export async function queryAurelio(career, questionText, chatHistory = []) {
  const viaProxy = await queryAurelioProxy(career, questionText, chatHistory);
  if (viaProxy) return viaProxy;
  lastAiSource = 'local';
  return getAurelioContextualAnswer(career, questionText);
}
