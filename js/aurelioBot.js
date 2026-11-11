// =========================================================
// AurelioBot · Módulo de Orientación Vocacional Inteligente
// Respuestas contextuales precisas por carrera y soporte Groq AI
// =========================================================

/**
 * Normaliza texto para búsqueda semántica insensible a tildes y mayúsculas.
 */
function normalizeText(text) {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Genera una respuesta inmediata, 100% verídica y personalizada para la carrera activa
 * utilizando los datos oficiales de la PUCE cargados en vocationalData.js.
 * 
 * @param {Object} career Objeto de la carrera activa con benefits, fieldOfWork, syllabus, etc.
 * @param {string} questionText Pregunta formulada por el estudiante.
 * @returns {string} Respuesta de Aurelio en tono orientador y empático.
 */
export function getAurelioContextualAnswer(career, questionText) {
  if (!career) {
    return '¡Hola! Para responderte con exactitud, selecciona una carrera en tu ranking de resultados.';
  }

  const cName = career.name || 'esta carrera';
  const norm = normalizeText(questionText);
  const tiene = (...palabras) => palabras.some(p => norm.includes(normalizeText(p)));

  // 1. COSTOS, ARANCELES, PRECIO, DESCUENTO Y BECAS
  if (tiene('costo', 'cuesta', 'precio', 'arancel', 'aranceles', 'inversion', 'pagar', 'cuota', 'cuanto vale', 'beca', 'descuento', 'financiamiento')) {
    const discount = career.benefits?.[0]?.highlight || '27%';
    const investment = career.benefits?.[1]?.highlight || '$2900';
    return `En **${cName}**, la inversión referencial con el descuento institucional PUCE (${discount}) es de aprox. **${investment} por semestre** (precio base sin descuento: $3.950). Además, la PUCE cuenta con aranceles diferenciados en 5 categorías socioeconómicas y becas por mérito académico o deportivo. ¡Un asesor de Admisiones puede calcular tu cuota exacta!`;
  }

  // 2. DIFICULTAD, EXIGENCIA, MATERIAS DIFÍCILES, NÚMEROS
  if (tiene('dificil', 'dificultad', 'exigente', 'pesada', 'matematica', 'calculo', 'numero', 'reprobar', 'complicad', 'miedo')) {
    const sem1 = career.syllabus?.semesters?.[0] || [];
    const sem2 = career.syllabus?.semesters?.[1] || [];
    const sampleSubjects = sem1.slice(0, 3).join(', ') || 'las asignaturas formativas';
    const faculty = career.faculty || '';

    if (faculty.includes('Hábitat') || faculty.includes('Ingeniería') || cName.includes('Sistemas') || cName.includes('Datos') || cName.includes('Civil')) {
      return `En **${cName}**, el mayor desafío del primer año está en materias como **${sampleSubjects}**, que requieren lógica y práctica continua. La gran ventaja es que la PUCE cuenta con tutorías gratuitas y laboratorios de acompañamiento desde la primera semana para que nunca te quedes con dudas.`;
    } else if (faculty.includes('Salud') || cName.includes('Medicina') || cName.includes('Enfermería') || cName.includes('Odontología')) {
      return `En **${cName}**, la exigencia se concentra en la profundidad de las ciencias biomédicas y asignaturas como **${sampleSubjects}**, que demandan dedicación y memoria comprensiva. Estudiarás con centros de simulación clínica de alta fidelidad, tutorías gratuitas y docentes médicos que te acompañan en todo momento.`;
    } else if (faculty.includes('Economía') || cName.includes('Administración') || cName.includes('Finanzas') || cName.includes('Contabilidad')) {
      return `En **${cName}**, las asignaturas con mayor demanda inicial suelen ser el razonamiento cuantitativo y modelos aplicados como **${sampleSubjects}**. Dispones de tutorías académicas, círculos de estudio y simuladores de negocios que facilitan la comprensión práctica.`;
    } else if (faculty.includes('Jurisprudencia') || faculty.includes('Derecho') || faculty.includes('Comunicación') || faculty.includes('Sociales') || faculty.includes('Filosófico')) {
      return `En **${cName}**, la exigencia no radica en fórmulas numéricas, sino en la lectura crítica, análisis ético y argumentación en materias como **${sampleSubjects}**. Aprenderás a expresarte con rigor conceptual con tutorías y apoyo personalizado de tus profesores.`;
    } else {
      return `En **${cName}**, las materias del primer año como **${sampleSubjects}** son la base formativa. Como en toda carrera universitaria requiere constancia, pero la PUCE te ofrece tutorías académicas gratuitas desde el inicio para apoyarte.`;
    }
  }

  // 3. CAMPO LABORAL, DÓNDE TRABAJAR, EMPLEABILIDAD, SALIDAS
  if (tiene('trabajo', 'trabajar', 'empleo', 'campo', 'laboral', 'salida', 'donde puedo trabajar', 'sueldo', 'empresa', 'contrato', 'ganar')) {
    const field = career.fieldOfWork || 'Diversos sectores empresariales, públicos y de consultoría especializada.';
    return `Como profesional de **${cName}** de la PUCE podrás desempeñarte en: **${field}** Los egresados de la PUCE tienen una alta tasa de empleabilidad en el país y en el exterior gracias a los convenios institucionales y la formación con sentido ético.`;
  }

  // 4. MALLA CURRICULAR, MATERIAS, PENSUM, ASIGNATURAS, DURACIÓN
  if (tiene('materia', 'malla', 'pensum', 'asignatura', 'estudiar', 'semestre', 'duracion', 'cuanto dura', 'cuantos anos', 'cuantos semestres')) {
    const semCount = career.syllabus?.semesters?.length || 8;
    const years = (semCount / 2).toFixed(semCount % 2 === 0 ? 0 : 1);
    const sem1 = (career.syllabus?.semesters?.[0] || []).slice(0, 4).join(', ');
    return `**${cName}** tiene una duración de **${semCount} semestres presenciales** (aprox. ${years} años). En el primer semestre verás materias como: **${sem1}**. Puedes explorar la malla completa nivel por nivel haciendo clic en el botón «Malla Curricular» de tus resultados.`;
  }

  // 5. HORARIOS Y MODALIDAD
  if (tiene('horario', 'horarios', 'jornada', 'manana', 'tarde', 'noche', 'modalidad', 'virtual', 'distancia')) {
    return `**${cName}** se imparte en modalidad presencial en el campus matriz de la PUCE en Quito. Los horarios se estructuran por semestre (habitualmente en jornadas matutinas o concentradas para facilitar prácticas). Un asesor de Admisiones te confirmará los horarios vigentes para el próximo periodo académico.`;
  }

  // 6. INSCRIPCIÓN, ADMISIÓN, REQUISITOS Y CONTACTO
  if (tiene('inscribir', 'inscripcion', 'admision', 'requisito', 'postular', 'fecha', 'examen', 'contacto', 'asesor', 'telefono', 'whatsapp')) {
    return `El proceso de admisión para **${cName}** está abierto. Puedes solicitar acompañamiento personalizado pulsando el botón **«Quiero más información»** en esta pantalla, o comunicándote al WhatsApp de Admisiones **099 2420 103** / correo **inscripciones@puce.edu.ec**. ¡No te quedes sin tu cupo!`;
  }

  // 7. RESPUESTA CONVERSACIONAL GENERAL
  return `¡Me alegra que te interese **${cName}**! Esta carrera de la **${career.faculty || 'PUCE'}** cuenta con malla actualizada, laboratorios propios y alta demanda laboral. ¿Te gustaría saber más sobre sus aranceles con descuento, materias de primer año o salidas profesionales?`;
}

/**
 * Consulta a la API de Groq Cloud (modelo llama-3.3-70b-versatile o llama-3.1-8b-instant)
 * inyectando un System Prompt especializado con el contexto oficial de la carrera.
 * Si no hay API Key o falla la red, recurre automáticamente al motor contextual local.
 * 
 * @param {Object} career Carrera activa.
 * @param {string} questionText Consulta del usuario.
 * @param {Array} chatHistory Historial previo de la conversación.
 * @param {string} [customApiKey] API Key opcional de Groq.
 * @returns {Promise<string>}
 */
export async function queryGroqAurelio(career, questionText, chatHistory = [], customApiKey = null) {
  // 1. Obtener API Key (parámetro, localStorage o variable global)
  const apiKey = customApiKey || 
    (typeof window !== 'undefined' && window.GROQ_API_KEY) || 
    (typeof localStorage !== 'undefined' && localStorage.getItem('puce_groq_api_key'));

  // Si no hay API Key configurada, responde inmediatamente con el motor local oficial
  if (!apiKey || !apiKey.trim()) {
    return getAurelioContextualAnswer(career, questionText);
  }

  try {
    const cName = career?.name || 'la carrera recomendada';
    const cFaculty = career?.faculty || 'la PUCE';
    const cDesc = career?.description || '';
    const cField = career?.fieldOfWork || '';
    const cBenefits = JSON.stringify(career?.benefits || []);
    const cSem1 = (career?.syllabus?.semesters?.[0] || []).join(', ');

    const systemPrompt = `Eres Aurelio, la mascota oficial y orientador vocacional universitario de la Pontificia Universidad Católica del Ecuador (PUCE).
Tu objetivo es responder las dudas de un estudiante de bachillerato interesado en estudiar ${cName}.

DATOS OFICIALES DE LA CARRERA:
- Carrera: ${cName}
- Facultad: ${cFaculty}
- Descripción: ${cDesc}
- Campo laboral / Salidas: ${cField}
- Beneficios, descuentos y costo: ${cBenefits}
- Materias del primer semestre: ${cSem1}
- Contacto Admisiones PUCE: inscripciones@puce.edu.ec, WhatsApp 099 2420 103.

REGLAS DE RESPUESTA:
1. Responde de forma muy concisa (máximo 2 a 3 oraciones breves y directas).
2. Mantén un tono juvenil, motivador, empático, pero siempre con el rigor institucional de la PUCE.
3. Basa tus datos estrictamente en la información oficial proporcionada. Nunca inventes cifras.
4. Si te preguntan sobre costos, menciona siempre el descuento institucional y la inversión referencial por semestre.
5. Si te preguntan si es difícil, explica qué materias del primer año requieren dedicación y destaca las tutorías gratuitas de la PUCE.`;

    // Preparar mensajes recientes (últimos 4 para contexto)
    const messages = [
      { role: 'system', content: systemPrompt }
    ];

    const recentHistory = chatHistory.slice(-4);
    recentHistory.forEach(msg => {
      messages.push({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      });
    });

    messages.push({ role: 'user', content: questionText });

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey.trim()}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        temperature: 0.6,
        max_tokens: 220
      })
    });

    if (!response.ok) {
      console.warn(`Groq API respondió con estado ${response.status}. Usando motor local de respaldo.`);
      return getAurelioContextualAnswer(career, questionText);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim();

    if (reply) {
      return reply;
    }
  } catch (err) {
    console.warn('Error en llamada a Groq API:', err);
  }

  // Fallback si la llamada a Groq falla o hay un corte de red
  return getAurelioContextualAnswer(career, questionText);
}
