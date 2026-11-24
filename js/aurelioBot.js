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
 * Base de conocimiento institucional de la PUCE (RAG Local).
 * Proporciona información verificada y específica para cualquier consulta recurrente.
 */
const PUCE_KNOWLEDGE = {
  conveniosSalud: [
    'Ministerio de Salud Pública (MSP) en hospitales de segundo y tercer nivel',
    'Instituto Ecuatoriano de Seguridad Social (IESS): Hospital Carlos Andrade Marín (HCAM) y Hospital San Francisco',
    'Hospital Pablo Arturo Suárez y Hospital Docente de Calderón',
    'Hospital de Especialidades Eugenio Espejo',
    'Hospital Vozandes Quito y Hospital Metropolitano',
    'Novaclínica Santa Cecilia y clínicas privadas acreditadas',
    'Centros de Salud de Atención Primaria del Distrito Metropolitano de Quito',
    'Centro de Simulación Médica y Quirúrgica de Alta Fidelidad en el campus PUCE'
  ],
  conveniosHabitat: [
    'Colegio de Arquitectos del Ecuador (CAE)',
    'Cámara de la Industria de la Construcción (CAMICON)',
    'Empresas tecnológicas nacionales e internacionales de desarrollo y software',
    'Convenios con el Municipio del Distrito Metropolitano de Quito y prefecturas',
    'Laboratorios propios de prototipado, materiales y computación de alto rendimiento'
  ],
  conveniosEconomia: [
    'Banca nacional y privada: Banco Pichincha, Produbanco, Banco del Pacífico',
    'Cámara de Comercio de Quito (CCQ) y Cámara de Industrias y Producción (CIP)',
    'Empresas multinacionales de consumo masivo, auditoría y consultoría estratégica',
    'Centro de Emprendimiento e Innovación PUCEmprende'
  ],
  conveniosSociales: [
    'Corte Nacional de Justicia y Consejo de la Judicatura',
    'Defensoría Pública del Ecuador y Consultorios Jurídicos Gratuitos PUCE',
    'Organizaciones no gubernamentales (ONGs), ACNUR, UNESCO y organismos multilaterales',
    'Medios de comunicación nacionales y agencias transmedia'
  ],
  conveniosSostenibilidad: [
    'Ministerio del Ambiente, Agua y Transición Ecológica (MAATE)',
    'Instituto Nacional de Biodiversidad (INABIO)',
    'Estación Científica Yasuní PUCE (Amazonía ecuatoriana)',
    'Laboratorios de biotecnología vegetal, genética molecular y microbiología PUCE'
  ],
  ausjalInternacional: [
    'Red AUSJAL con más de 30 universidades jesuitas en Latinoamérica (Pontificia Universidad Javeriana en Colombia, Universidad Iberoamericana en México, ITESO, Universidad Católica de Córdoba en Argentina, Universidad Alberto Hurtado en Chile)',
    'Convenios bilaterales en España (Universidad de Deusto, Universidad Pontificia Comillas, Universitat de Barcelona)',
    'Movilidad estudiantil en Estados Unidos, Europa y Asia con convalidación de créditos académicos'
  ],
  acreditacion: 'La PUCE está acreditada por el CACES (Consejo de Aseguramiento de la Calidad de la Educación Superior) y se ubica consistentemente en el Top de las mejores universidades del Ecuador en el QS World University Rankings, respaldada por más de 75 años de trayectoria.',
  vidaUniversitaria: 'El campus matriz de la PUCE cuenta con un Polideportivo completo (piscina semiolímpica temperada, canchas reglamentarias de fútbol, básquet, tenis y gimnasio), Centro Cultural, Biblioteca General con más de 200.000 títulos, cafeterías, grupos de voluntariado, pastoral universitaria, danza y teatro.',
  becas: 'La PUCE cuenta con un sistema de aranceles diferenciados en 5 categorías según el análisis socioeconómico familiar, además de becas por excelencia académica (abanderados/escoltas), becas deportivas de alto rendimiento, becas culturales y convenios de financiamiento educativo directo.'
};

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
  const faculty = career.faculty || 'la PUCE';
  const norm = normalizeText(questionText);
  const tiene = (...palabras) => palabras.some(p => norm.includes(normalizeText(p)));

  // 1. CONVENIOS, PRÁCTICAS PREPROFESIONALES, HOSPITALES, PASANTÍAS
  if (tiene('convenio', 'convenios', 'practica', 'practicas', 'hospital', 'hospitales', 'clinica', 'clinicas', 'pasantia', 'pasantias', 'rotacion', 'internado', 'msp', 'iess', 'centro de salud')) {
    if (faculty.includes('Salud') || cName.includes('Medicina') || cName.includes('Enfermería') || cName.includes('Odontología') || cName.includes('Terapia') || cName.includes('Nutrición') || cName.includes('Psicología')) {
      return `Para **${cName}**, la PUCE cuenta con convenios formales de docencia-servicio para prácticas preprofesionales e internado rotativo en:
• **Hospitales de referencia:** Hospital Carlos Andrade Marín (IESS), Hospital Pablo Arturo Suárez (MSP), Hospital Docente de Calderón, Hospital de Especialidades Eugenio Espejo y Hospital Metropolitano.
• **Red de Salud:** Centros de salud de atención primaria del MSP y el Hospital San Francisco (IESS).
• **Campus PUCE:** Centro de Simulación Médica y Quirúrgica de Alta Fidelidad para entrenar procedimientos clínicos antes del contacto con pacientes reales.`;
    } else if (faculty.includes('Hábitat') || faculty.includes('Ingeniería') || cName.includes('Sistemas') || cName.includes('Software') || cName.includes('Civil') || cName.includes('Arquitectura')) {
      return `En **${cName}**, la PUCE mantiene convenios estratégicos de prácticas y pasantías con empresas líderes del sector tecnológico, constructoras del Colegio de Arquitectos del Ecuador (CAE), la Cámara de la Construcción (CAMICON) y entidades públicas como municipios y ministerios, además de proyectos en los propios laboratorios y talleres del campus.`;
    } else if (faculty.includes('Economía') || faculty.includes('Administración') || cName.includes('Finanzas') || cName.includes('Marketing') || cName.includes('Negocios')) {
      return `En **${cName}**, los estudiantes acceden a convenios de prácticas empresariales con la principal red bancaria del país (Banco Pichincha, Produbanco), multinacionales, la Cámara de Comercio de Quito y proyectos de incubación en **PUCEmprende**.`;
    } else if (faculty.includes('Sociales') || faculty.includes('Jurisprudencia') || cName.includes('Derecho') || cName.includes('Comunicación')) {
      return `En **${cName}**, la PUCE tiene convenios directos con la Corte Nacional de Justicia, Defensoría Pública, medios de comunicación, organizaciones internacionales (ONU, ACNUR) y sus propios Consultorios Jurídicos Gratuitos para prácticas formativas reales.`;
    } else {
      return `En **${cName}**, la PUCE tiene convenios activos con el Ministerio del Ambiente (MAATE), el Instituto Nacional de Biodiversidad (INABIO), empresas del sector productivo y la reconocida Estación Científica Yasuní PUCE en la Amazonía ecuatoriana.`;
    }
  }

  // 2. INTERCAMBIOS INTERNACIONALES Y RED AUSJAL
  if (tiene('intercambio', 'internacional', 'viajar', 'otro pais', 'extranjero', 'ausjal', 'movilidad', 'doble titulacion', 'espana', 'estados unidos', 'europa')) {
    return `¡Sí! Como estudiante de **${cName}** en la PUCE tienes acceso a movilidad internacional a través de la **Red AUSJAL** (más de 30 prestigiosas universidades jesuitas en Latinoamérica como la Javeriana en Colombia, Ibero en México e ITESO), además de convenios bilaterales de intercambio con universidades en España (Universidad de Deusto, Comillas), Estados Unidos y Europa con convalidación directa de materias.`;
  }

  // 3. COSTOS, ARANCELES, PRECIO, DESCUENTO Y BECAS
  if (tiene('costo', 'cuesta', 'precio', 'arancel', 'aranceles', 'inversion', 'pagar', 'cuota', 'cuanto vale', 'beca', 'becas', 'descuento', 'financiamiento', 'categoria', 'estrato')) {
    const discount = career.benefits?.[0]?.highlight || '27%';
    const investment = career.benefits?.[1]?.highlight || '$2900';
    return `En **${cName}**, la inversión referencial con el descuento institucional PUCE (${discount}) es de aprox. **${investment} por semestre** (precio base: $3.950). Además, la PUCE aplica un sistema de **aranceles diferenciados en 5 categorías** según el nivel socioeconómico de tu hogar, y cuenta con becas académicas (abanderados/escoltas), becas deportivas y financiamiento directo.`;
  }

  // 4. DIFICULTAD, EXIGENCIA, MATERIAS DIFÍCILES, NÚMEROS
  if (tiene('dificil', 'dificultad', 'exigente', 'pesada', 'matematica', 'calculo', 'numero', 'reprobar', 'complicad', 'miedo', 'pasar')) {
    const sem1 = career.syllabus?.semesters?.[0] || [];
    const sampleSubjects = sem1.slice(0, 3).join(', ') || 'las asignaturas formativas';

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

  // 5. CAMPO LABORAL, DÓNDE TRABAJAR, EMPLEABILIDAD, SALIDAS
  if (tiene('trabajo', 'trabajar', 'empleo', 'campo', 'laboral', 'salida', 'donde puedo trabajar', 'sueldo', 'empresa', 'contrato', 'ganar', 'puesto')) {
    const field = career.fieldOfWork || 'Diversos sectores empresariales, públicos y de consultoría especializada.';
    return `Como profesional de **${cName}** de la PUCE podrás desempeñarte en: **${field}** Los egresados de la PUCE tienen una tasa de empleabilidad superior al 85% gracias al prestigio institucional, convenios de prácticas y red de contactos de más de 75 años.`;
  }

  // 6. POR QUÉ ESTUDIAR ESTA CARRERA / VENTAJAS / BENEFICIOS
  if (tiene('por que', 'porque', 'por que estudiar', 'por que elegir', 'ventaja', 'ventajas', 'beneficio', 'beneficios', 'conviene', 'vale la pena', 'elegir esta carrera', 'razones')) {
    return `Estudiar **${cName}** en la PUCE te brinda tres ventajas diferenciales:
1. **Formación ética y humana:** Currículo jesuita enfocado en el liderazgo con propósito y servicio a la comunidad.
2. **Infraestructura y prácticas reales:** Laboratorios propios, centros de simulación y convenios con las principales entidades del país.
3. **Prestigio y movilidad internacional:** Acreditación oficial CACES, posicionamiento Top en QS Rankings y acceso a más de 30 universidades de la Red AUSJAL.`;
  }

  // 7. MALLA CURRICULAR, MATERIAS, PENSUM, ASIGNATURAS, DURACIÓN
  if (tiene('materia', 'materias', 'malla', 'pensum', 'asignatura', 'asignaturas', 'semestre', 'semestres', 'duracion', 'cuanto dura', 'cuantos anos', 'cuantos semestres', 'tiempo', 'plan de estudio')) {
    const semCount = career.syllabus?.semesters?.length || 8;
    const years = (semCount / 2).toFixed(semCount % 2 === 0 ? 0 : 1);
    const sem1 = (career.syllabus?.semesters?.[0] || []).slice(0, 4).join(', ');
    return `**${cName}** tiene una duración de **${semCount} semestres presenciales** (aprox. ${years} años). En el primer semestre verás materias formativas como: **${sem1}**. Puedes revisar los 8 semestres completos en el botón «Malla Curricular» de tus resultados.`;
  }

  // 8. ACREDITACIÓN, PRESTIGIO, RANKING Y CALIDAD
  if (tiene('acreditacion', 'acreditada', 'caces', 'ranking', 'prestigio', 'reputacion', 'calidad', 'top', 'qs', 'nivel')) {
    return `La PUCE es una de las universidades más prestigiosas y tradicionales del país. Está plenamente acreditada por el **CACES** y se ubica consistentemente en las posiciones de vanguardia del **QS World University Rankings** en Ecuador, destacando por su producción científica, excelencia docente y alta empleabilidad de sus graduados en **${cName}**.`;
  }

  // 9. CAMPUS, VIDA UNIVERSITARIA, DEPORTES E INSTALACIONES
  if (tiene('campus', 'instalaciones', 'deporte', 'gimnasio', 'piscina', 'cancha', 'biblioteca', 'club', 'pastoral', 'polideportivo', 'cafeteria', 'actividades')) {
    return `El campus matriz de la PUCE en Quito te ofrece un entorno integral: **Polideportivo** con piscina semiolímpica temperada, canchas deportivas, gimnasio, Biblioteca General con más de 200.000 volúmenes físicos y digitales, salas de estudio, Centro Cultural, cafeterías y decenas de clubes estudiantiles, voluntariado y arte.`;
  }

  // 10. TITULACIÓN, REQUISITOS DE GRADUACIÓN E IDIOMAS (INGLÉS)
  if (tiene('titulacion', 'graduar', 'grado', 'tesis', 'complexivo', 'ingles', 'idioma', 'requisito')) {
    return `Para graduarte en **${cName}**, los requisitos establecidos son: aprobar la malla curricular completa, acreditar suficiencia en inglés (nivel B2 a través del Centro de Idiomas de la PUCE), cumplir las horas reglamentarias de prácticas preprofesionales y vinculación comunitaria, y culminar tu opción de titulación (trabajo de integración curricular o examen complexivo).`;
  }

  // 11. HORARIOS Y MODALIDAD
  if (tiene('horario', 'horarios', 'jornada', 'manana', 'tarde', 'noche', 'modalidad', 'virtual', 'distancia')) {
    return `**${cName}** se imparte en modalidad presencial en el campus matriz de la PUCE en Quito. Las asignaturas se organizan por semestres (habitualmente en jornadas matutinas o bloques concentrados para facilitar prácticas hospitalarias o de laboratorio). Admisiones te proporcionará el cronograma exacto para el periodo académico entrante.`;
  }

  // 12. INSCRIPCIÓN, ADMISIÓN, REQUISITOS Y CONTACTO
  if (tiene('inscribir', 'inscripcion', 'admision', 'requisito', 'postular', 'fecha', 'examen', 'contacto', 'asesor', 'telefono', 'whatsapp')) {
    return `El proceso de admisión para **${cName}** está abierto. Puedes solicitar acompañamiento personalizado pulsando el botón **«Quiero más información»** en esta pantalla, o comunicándote al WhatsApp de Admisiones **099 2420 103** / correo **inscripciones@puce.edu.ec**. ¡No te quedes sin tu cupo!`;
  }

  // 13. RESPUESTA DINÁMICA CONTEXTUAL INTELIGENTE (Cubre cualquier otra pregunta)
  const desc = career.description || '';
  const skills = (career.skills || []).slice(0, 3).join(', ');
  const field = career.fieldOfWork || '';

  return `Respecto a tu consulta sobre **${cName}** (${faculty}):
En esta carrera te formarás en **${desc}**
• **Habilidades formativas:** ${skills || 'formación técnica y humana de excelencia'}.
• **Entorno profesional:** ${field ? field.slice(0, 160) + '...' : 'Amplia inserción en el sector público, privado y organismos especializados.'}
¿Te gustaría conocer en detalle los aranceles diferenciados, convenios hospitalarios/institucionales, materias de primer semestre o conversar con un asesor de Admisiones PUCE?`;
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
  // 1. Detección especial de comandos de configuración rápida de clave en el chat
  const trimmedQuery = (questionText || '').trim();
  if (trimmedQuery.startsWith('/key ') || trimmedQuery.startsWith('/groq ')) {
    const newKey = trimmedQuery.replace(/^\/(key|groq)\s+/, '').trim();
    if (newKey && typeof localStorage !== 'undefined') {
      localStorage.setItem('puce_groq_api_key', newKey);
      if (typeof window !== 'undefined') window.GROQ_API_KEY = newKey;
      return `🔑 ¡Excelente! He guardado tu clave de Groq Cloud. A partir de ahora, responderé todas tus preguntas usando el modelo **Llama 3.3 70B** en tiempo real con datos oficiales de la PUCE. ¡Pregúntame lo que desees!`;
    }
  }

  // 2. Obtener API Key (parámetro, localStorage o variable global)
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
    const cSkills = (career?.skills || []).join(', ');
    const cBenefits = JSON.stringify(career?.benefits || []);
    const cSem1 = (career?.syllabus?.semesters?.[0] || []).join(', ');

    // System prompt ampliado con la base de conocimiento institucional de la PUCE
    const systemPrompt = `Eres Aurelio, la mascota oficial y orientador vocacional inteligente de la Pontificia Universidad Católica del Ecuador (PUCE).
Tu misión es resolver cualquier inquietud de un estudiante interesado en estudiar ${cName} en la PUCE de forma empática, rigurosa, verídica y personalizada.

INFORMACIÓN INSTITUCIONAL DE LA PUCE:
- Prestigio y Acreditación: Más de 75 años de trayectoria, acreditada por el CACES y Top en el QS World University Rankings en Ecuador.
- Movilidad Internacional: Red AUSJAL (más de 30 universidades jesuitas en Latinoamérica como Javeriana Colombia, Ibero México, ITESO, Católica de Córdoba), convenios en España (Deusto, Comillas), EE.UU. y Europa con convalidación de créditos.
- Convenios en Salud (Enfermería, Medicina, Odontología): Ministerio de Salud Pública (MSP), IESS (Hospital Carlos Andrade Marín HCAM, Hospital San Francisco), Hospital Pablo Arturo Suárez, Hospital Docente Calderón, Hospital Eugenio Espejo, Hospital Vozandes, Hospital Metropolitano, centros de salud de atención primaria y Centro de Simulación Médica y Quirúrgica en el campus PUCE.
- Convenios en Hábitat/Ingeniería: Cámara de la Construcción (CAMICON), Colegio de Arquitectos del Ecuador (CAE), empresas tech y municipios.
- Convenios en Negocios/Economía: Banco Pichincha, Produbanco, Cámara de Comercio de Quito, multinacionales y Centro de Emprendimiento PUCEmprende.
- Convenios en Ciencias Sociales/Derecho: Corte Nacional de Justicia, Defensoría Pública, Consultorios Jurídicos Gratuitos PUCE, ONGs y medios.
- Convenios en Sostenibilidad: Ministerio del Ambiente (MAATE), Instituto Nacional de Biodiversidad (INABIO) y Estación Científica Yasuní PUCE.
- Financiamiento y Becas: Sistema de aranceles diferenciados en 5 categorías socioeconómicas, becas por mérito académico, becas deportivas, culturales y financiamiento directo.
- Campus Matriz: Polideportivo con piscina semiolímpica temperada, gimnasio, canchas deportivas, Centro Cultural y Biblioteca General de 200.000 volúmenes.
- Contacto Admisiones: WhatsApp 099 2420 103, correo inscripciones@puce.edu.ec.

DATOS OFICIALES DE LA CARRERA ACTIVA:
- Carrera: ${cName}
- Facultad: ${cFaculty}
- Perfil formativo: ${cDesc}
- Competencias y habilidades: ${cSkills}
- Campo laboral y salidas: ${cField}
- Beneficios, descuentos y costo referencial: ${cBenefits}
- Materias del primer semestre: ${cSem1}

DIRECTRICES DE RESPUESTA:
1. Responde directamente y con precisión a la pregunta del usuario (máximo 2 a 4 oraciones claras).
2. Si te preguntan sobre convenios o prácticas, menciona los convenios oficiales pertinentes a su carrera y facultad (especialmente hospitales como MSP, IESS, HCAM, Vozandes, Metropolitano si es del área de salud).
3. Si te preguntan por costos, menciona el descuento institucional y las 5 categorías socioeconómicas.
4. Mantén un tono juvenil, motivador y acogedor, sin perder la seriedad académica y ética de la PUCE.
5. Puedes responder a cualquier tema universitario (malla, becas, intercambios, vida estudiantil, requisitos de grado). Nunca des respuestas vacías ni te desvíes de la pregunta.`;

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
        max_tokens: 280
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
