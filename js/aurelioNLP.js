// =========================================================
// Análisis de preguntas para Aurelio (sin dependencias; lo usan el navegador y la Edge Function)
//
// 1. Normaliza (minúsculas, sin tildes ni signos) y separa en palabras.
// 2. Quita palabras vacías ("quiero", "saber", "la", "de"...).
// 3. Reduce cada palabra a su raíz (stemming ligero en español): "bases" -> "bas", "datos" -> "dat".
// 4. Aplica sinónimos: "precio", "cuesta", "pension" -> "costo".
// 5. Resuelve el ALCANCE de la búsqueda: carrera activa -> su Top 3 -> otra carrera solo si se nombra.
//    Las materias se buscan solo dentro de ese alcance, nunca en toda la base.
//
// Archivo canónico: js/aurelioNLP.js. scripts/aurelio/exportar_conocimiento.mjs lo copia a la Edge Function.
// =========================================================

export function normalize(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9ñ\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const STOPWORDS = new Set((
  'a al algo algun alguna algunas alguno algunos ante antes aqui asi aun cada como con contra cual cuales cualquier ' +
  'de del desde donde dos el ella ellas ello ellos en entre era eres es esa esas ese eso esos esta estas este esto estos ' +
  'estoy fue ha hay la las le les lo los mas me mi mis mucho muy nada ni no nos o otra otro para pero poco por porque ' +
  'que quien se ser si sin sobre su sus tal tambien te tengo ti tu tus u un una uno unos y ya yo ' +
  'quiero quisiera queria saber conocer informacion info dime decir digas puedes podrias puedo podria favor porfa ' +
  'hola gracias aurelio carrera carreras puce universidad tema acerca mas ' +
  'cuanto cuanta cuantos cuantas tiene tienen tener son seria sera hace hacer hago'
).split(' '));

// Stemming ligero: suficiente para emparejar singular/plural y género ("bases"/"base", "datos"/"dato").
export function stem(word) {
  let w = word;
  if (w.length > 5 && /(ciones|siones)$/.test(w)) w = w.slice(0, -5) + 'n';
  if (w.length > 4 && /(mente)$/.test(w)) w = w.slice(0, -5);
  if (w.length > 4 && /[^aeiou]es$/.test(w)) w = w.slice(0, -2);
  else if (w.length > 3 && /s$/.test(w)) w = w.slice(0, -1);
  if (w.length > 4 && /[aoe]$/.test(w)) w = w.slice(0, -1);
  return w;
}

// Sinónimos sobre raíces: varias formas de decir lo mismo -> una raíz canónica.
const SYNONYMS = {
  cost: ['cuest', 'preci', 'valor', 'vale', 'arancel', 'pension', 'pag', 'pagar', 'inversion', 'cuot', 'plat', 'diner', 'car'],
  materi: ['asignatur', 'clas', 'curs', 'ram', 'catedr'],
  mall: ['pensum', 'plan'],
  trabaj: ['emple', 'labor', 'ejerc', 'chamb', 'salid'],
  intercambi: ['movilidad', 'extranjer', 'exterior', 'afuer', 'viaj'],
  inscrib: ['inscripcion', 'inscrib', 'matricul', 'postul', 'ingres', 'entrar', 'admision'],
};
const CANONICAL = new Map();
for (const [canon, list] of Object.entries(SYNONYMS)) for (const s of list) CANONICAL.set(s, canon);

export function analyze(text) {
  const norm = normalize(text);
  const words = norm.split(' ').filter(Boolean);
  const content = words.filter((w) => !STOPWORDS.has(w) && w.length > 1);
  const stems = content.map((w) => {
    const s = stem(w);
    return CANONICAL.get(s) || s;
  });
  return { norm, words, stems: [...new Set(stems)] };
}

// Huella de una pregunta para la caché: mismas raíces = misma pregunta ("cuánto cuesta" = "precio").
export function fingerprint(text) {
  return analyze(text).stems.slice().sort().join(' ');
}

// ---------------------------------------------------------
// Carreras: detectar si la pregunta nombra otra carrera (índice mínimo: solo nombres y alias)
// ---------------------------------------------------------
// Solo alias que no chocan con nombres de materias ("Auditoría I", "Diseño Geométrico Vial"...).
const CAREER_ALIASES = {
  ingenieria_integral: ['ingenieria integral', 'icam'],
  arquitectura: ['arquitectura'],
  ciencia_datos: ['ciencia de datos', 'ciencias de datos', 'data science'],
  diseno_grafico: ['diseno grafico'],
  ingenieria_civil: ['ingenieria civil'],
  sistemas_informacion: ['ingenieria en sistemas de informacion', 'sistemas de informacion', 'sistemas'],
  biologia: ['biologia'],
  quimica: ['quimica'],
  medicina: ['medicina'],
  enfermeria: ['enfermeria'],
  odontologia: ['odontologia'],
  fisioterapia: ['fisioterapia'],
  nutricion: ['nutricion y dietetica', 'nutricion'],
  psicologia_clinica: ['psicologia clinica'],
  bioingenieria: ['bioingenieria'],
  ciencias_biomedicas: ['ciencias biomedicas', 'biomedicas'],
  laboratorio_clinico: ['laboratorio clinico'],
  microbiologia: ['microbiologia'],
  veterinaria: ['medicina veterinaria', 'veterinaria'],
  derecho: ['derecho', 'leyes', 'abogacia'],
  relaciones_internacionales: ['relaciones internacionales'],
  comunicacion: ['comunicacion'],
  lenguas_aplicadas: ['lenguas aplicadas a los estudios globales', 'lenguas aplicadas'],
  linguistica: ['linguistica'],
  literatura: ['literatura'],
  educacion_inicial: ['educacion inicial'],
  psicologia_educativa: ['psicologia educativa'],
  artes_visuales: ['artes visuales'],
  filosofia: ['filosofia'],
  teologia: ['teologia'],
  administracion_empresas: ['administracion de empresas'],
  turismo: ['administracion en turismo y hospitalidad', 'turismo', 'hoteleria'],
  contabilidad: ['contabilidad y auditoria', 'contabilidad'],
  economia_carrera: ['economia'],
  finanzas: ['finanzas'],
  marketing: ['marketing', 'mercadotecnia'],
  negocios_internacionales: ['negocios internacionales'],
  fpe: ['filosofia politica y economia', 'fpe'],
  psicologia_organizacional: ['psicologia organizacional'],
};
const ALIAS_INDEX = Object.entries(CAREER_ALIASES)
  .flatMap(([key, aliases]) => aliases.map((a) => ({ key, alias: a })))
  .sort((a, b) => b.alias.length - a.alias.length); // primero los más largos: "medicina veterinaria" antes que "medicina"

export function mentionedCareerKeys(text) {
  let t = ` ${normalize(text)} `;
  const found = [];
  for (const { key, alias } of ALIAS_INDEX) {
    const needle = ` ${alias} `;
    if (!t.includes(needle)) continue;
    // "tengo derecho a..." no es la carrera de Derecho
    if (key === 'derecho' && / derecho a /.test(t) && !/ (carrera|estudiar|estudio) (de )?derecho /.test(t)) continue;
    t = t.replace(needle, ' ');
    if (!found.includes(key)) found.push(key);
  }
  return found;
}

/**
 * Alcance de la búsqueda para una pregunta:
 *  - primary: la carrera de la que trata la pregunta (la activa, salvo que se nombre solo otra)
 *  - others: otras carreras nombradas (de su Top 3 o de cualquier otra), solo esas
 * Nunca devuelve "todas": si no se nombra ninguna, el alcance es solo la carrera activa.
 */
export function resolveScope(text, activeKey) {
  const named = mentionedCareerKeys(text);
  const others = named.filter((k) => k !== activeKey);
  const primary = named.length === 1 && others.length === 1 ? others[0] : activeKey;
  return { primary, others: primary === activeKey ? others : [], named };
}

// ---------------------------------------------------------
// Materias: buscar solo en la malla e itinerarios de las carreras del alcance
// ---------------------------------------------------------
const GENERIC_SUBJECT_STEMS = new Set(['materi', 'mall', 'semestr', 'nivel', 'ver', 'veo', 'ven', 'trat', 'aprend', 'estudi', 'primer', 'segund', 'ano', 'cual', 'cuant', 'curs']);

/**
 * Busca materias de `careers` (fichas oficiales) cuyo nombre coincide con las raíces de la pregunta.
 * Devuelve [{ careerKey, careerName, materia, semestre | null, itinerario | null, score }] ordenado.
 */
export function findSubjects(text, careers) {
  // El nombre de una carrera mencionada no se busca como materia ("¿y Enfermería cuánto cuesta?").
  let clean = ` ${normalize(text)} `;
  for (const { alias } of ALIAS_INDEX) clean = clean.split(` ${alias} `).join(' ');
  const q = analyze(clean).stems.filter((s) => s.length > 2 && !GENERIC_SUBJECT_STEMS.has(s));
  if (!q.length) return [];
  const results = [];
  for (const c of careers) {
    if (!c) continue;
    const consider = (materia, semestre, itinerario) => {
      const ms = analyze(materia).stems.filter((s) => s.length > 2);
      if (!ms.length) return;
      const hits = q.filter((s) => ms.includes(s)).length;
      if (!hits) return;
      // Cobertura de la pregunta y de la materia: "bases de datos" cubre 100 % de la pregunta.
      const score = hits / q.length + hits / ms.length / 2;
      if (hits / q.length >= 0.5) results.push({ careerKey: c.key, careerName: c.nombre, materia, semestre, itinerario, score });
    };
    (c.malla || []).forEach((sem, i) => sem.forEach((m) => consider(m, i + 1, null)));
    (c.itinerarios || []).forEach((it) => it.materias.forEach((m) => consider(m.materia, m.nivel, it.nombre)));
  }
  results.sort((a, b) => b.score - a.score);
  const best = results[0]?.score ?? 0;
  return results.filter((r) => r.score >= best - 0.25).slice(0, 6);
}

// ---------------------------------------------------------
// Temas (intenciones). Se elige el de mayor puntaje; las frases más largas valen más.
// ---------------------------------------------------------
export const INTENTS = [
  { id: 'admisiones', phrases: ['inscribir', 'inscribirme', 'inscribirse', 'inscribo', 'inscripcion', 'inscripciones', 'admision', 'admisiones', 'postular', 'postulacion', 'matricula', 'matricularme', 'examen', 'examen de admision', 'examen de ingreso', 'requisitos', 'requisito', 'requisitos para entrar', 'requisitos para ingresar', 'requisitos de ingreso', 'ingresar a la puce', 'entrar a la puce', 'whatsapp', 'telefono', 'numero de whatsapp', 'numero de telefono', 'numero de contacto', 'contacto', 'contactar', 'correo', 'asesor', 'cupo', 'cupos'] },
  { id: 'costos', phrases: ['costo', 'costos', 'cuesta', 'cuestan', 'precio', 'precios', 'arancel', 'aranceles', 'pension', 'pagar', 'pago', 'cuota', 'cuotas', 'cuanto vale', 'inversion', 'descuento', 'financiamiento', 'financiar', 'diferir', 'matricula cuesta', 'valor'] },
  { id: 'becas', phrases: ['beca', 'becas', 'ayuda economica', 'abanderado', 'abanderada', 'escolta', 'deportista', 'discapacidad', 'hermanos', 'media beca', 'beca completa'] },
  { id: 'sueldo', phrases: ['sueldo', 'sueldos', 'salario', 'salarios', 'cuanto gana', 'cuanto ganan', 'cuanto se gana', 'remuneracion'] },
  { id: 'convenios', phrases: ['convenio', 'convenios', 'practica', 'practicas', 'practicas preprofesionales', 'hospital', 'hospitales', 'clinica', 'clinicas', 'pasantia', 'pasantias', 'internado', 'rotacion', 'rotaciones'] },
  { id: 'intercambios', phrases: ['intercambio', 'intercambios', 'movilidad', 'extranjero', 'otro pais', 'otros paises', 'afuera', 'ausjal', 'internacional', 'internacionales', 'espana', 'europa', 'estados unidos'] },
  { id: 'titulacion', phrases: ['titulo', 'que titulo', 'titulo obtengo', 'titulacion', 'titularme', 'graduarme', 'graduarse', 'graduacion', 'requisitos de grado', 'requisitos para graduarme', 'tesis', 'complexivo', 'ingles', 'idioma', 'idiomas', 'requisitos'] },
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

function hasPhrase(normText, phrase) {
  return ` ${normText} `.includes(` ${normalize(phrase)} `);
}

/** Puntaje de cada tema para la pregunta, de mayor a menor (solo los que puntúan). */
export function intentScores(questionText) {
  const norm = normalize(questionText);
  return INTENTS
    .map((intent, order) => ({
      id: intent.id,
      order,
      score: intent.phrases.reduce((acc, p) => acc + (hasPhrase(norm, p) ? normalize(p).split(' ').length : 0), 0),
    }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || a.order - b.order);
}

export function detectIntent(questionText) {
  return intentScores(questionText)[0]?.id ?? null;
}

// ---------------------------------------------------------
// Ruta de cada pregunta: motor local (0 tokens) o IA (solo si es compleja)
// ---------------------------------------------------------
const GREETING_RE = /^(hola|holi|buenas|buenos dias|buen dia|buenas tardes|buenas noches|hey|que tal|saludos|gracias|muchas gracias|chao|adios|hasta luego|nos vemos|ok|okay|vale|listo)\b/;
// Preguntas sobre el CONTENIDO de una materia: la PUCE no publica descripciones, así que van a la IA
// (que da orientación general aclarando que no es un dato oficial).
const CONTENT_RE = /\b(saber mas|de que trata|de que se trata|que es|que son|en que consiste|que se ve|que se estudia|que aprendo|que se aprende|que voy a aprender|explicame|explica|cuentame|para que sirve|como es)\b/;
// Temas que el motor local responde bien juntos.
// Pedidos de consejo u opinión personal: necesitan a la IA aunque se reconozca un tema.
const ADVICE_RE = /\b(recomiendas|recomiendan|recomendarias|aconsejas|consejo|deberia|que hago|que me conviene|me conviene|ayudame a decidir|no se si|estoy entre|me da miedo|tengo miedo|me preocupa)\b/;
const COMPATIBLE = new Set(['costos+becas', 'becas+costos', 'titulacion+malla', 'malla+titulacion', 'admisiones+malla']);
// Referencias a mensajes anteriores: la respuesta depende de la conversación y no se guarda en caché.
const FOLLOW_UP_RE = /\b(eso|esa|ese|esto|esta|aquello|anterior|lo mismo|y en|y el|y la|y los|y las|tambien|entonces)\b/;

export function isCacheable(text) {
  const a = analyze(text);
  return a.stems.length >= 2 && !FOLLOW_UP_RE.test(a.norm);
}

/**
 * Decide cómo responder una pregunta.
 * @param {string} text pregunta del estudiante
 * @param {{activeKey: string, careers: Record<string, object>, fromChip?: boolean}} ctx
 *        careers: fichas oficiales por clave (solo se consultan las del alcance de la pregunta)
 * @returns {{route: 'local'|'ai', reason: string, intent: string|null, scope: object, subjects: object[], analysis: object}}
 */
export function planRoute(text, { activeKey, careers, fromChip = false }) {
  const analysis = analyze(text);
  const scope = resolveScope(text, activeKey);
  const scopeCareers = [scope.primary, ...scope.others].map((k) => careers[k]).filter(Boolean);
  const scores = intentScores(text);
  const [top, second] = scores;
  const subjects = findSubjects(text, scopeCareers);
  let intent = top ? top.id : null;
  if (subjects.length && (!intent || ['malla', 'perfil', 'dificultad'].includes(intent))) intent = 'materia';
  const asksContent = CONTENT_RE.test(analysis.norm);
  const plan = { intent, scope, subjects, analysis, scores };

  if (fromChip) return { ...plan, route: 'local', reason: 'pregunta sugerida' };
  if (analysis.words.length <= 6 && GREETING_RE.test(analysis.norm)) return { ...plan, intent: 'saludo', route: 'local', reason: 'saludo' };
  if (scope.others.length) return { ...plan, route: 'ai', reason: 'compara carreras' };
  if (intent === 'materia') {
    return asksContent
      ? { ...plan, route: 'ai', reason: 'contenido de una materia' }
      : { ...plan, route: 'local', reason: 'ubicación de una materia' };
  }
  if (!intent) return { ...plan, route: 'ai', reason: 'tema no reconocido' };
  if (ADVICE_RE.test(analysis.norm)) return { ...plan, route: 'ai', reason: 'pide consejo' };
  if (top.score === 1 && analysis.stems.length >= 6) return { ...plan, route: 'ai', reason: 'pregunta abierta' };
  if (analysis.words.length > 25) return { ...plan, route: 'ai', reason: 'pregunta larga' };
  if (second && top.score < 2 * second.score && !COMPATIBLE.has(`${top.id}+${second.id}`)) {
    return { ...plan, route: 'ai', reason: 'varios temas' };
  }
  return { ...plan, route: 'local', reason: `tema reconocido: ${intent}` };
}
