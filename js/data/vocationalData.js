// ==========================================
// BANCO OFICIAL DE PREGUNTAS Y MATRICES PUCE
// ==========================================

export const MACROAREAS = {
  sostenibilidad: {
    id: 'sostenibilidad',
    name: 'Sostenibilidad y Recursos Naturales',
    shortName: 'Sostenibilidad',
    color: '#06b2b3',
    iconName: 'Leaf',
    description: 'Estudio de la biodiversidad, ecosistemas, biotecnología y ciencia de datos ambientales.'
  },
  salud: {
    id: 'salud',
    name: 'Salud y Bienestar',
    shortName: 'Salud y Bienestar',
    color: '#1aa9df',
    iconName: 'HeartPulse',
    description: 'Cuidado de la vida, fisiología, nutrición, rehabilitación y salud mental.'
  },
  habitat: {
    id: 'habitat',
    name: 'Hábitat, Infraestructura y Creatividad',
    shortName: 'Hábitat y Creatividad',
    color: '#003b81',
    iconName: 'Building2',
    description: 'Espacios habitables, ingeniería civil, arquitectura, diseño y expresión artística.'
  },
  sociales: {
    id: 'sociales',
    name: 'Ciencias Sociales y Humanidades',
    shortName: 'Sociales y Humanidades',
    color: '#06b2b3',
    iconName: 'Scale',
    description: 'Derecho, diplomacia, comunicación, pedagogía, filosofía y justicia social.'
  },
  economia: {
    id: 'economia',
    name: 'Economía y Gestión Empresarial',
    shortName: 'Economía y Negocios',
    color: '#003b81',
    iconName: 'Briefcase',
    description: 'Liderazgo corporativo, finanzas, mercados globales, marketing y emprendimiento.'
  }
};

// --- FASE 1: 30 Ítems de Macroáreas ---
export const FASE_1_QUESTIONS = [
  { id: 1, macroarea: 'sostenibilidad', text: '¿Te llama la atención investigar la naturaleza, los animales y buscar formas de proteger el medio ambiente?' },
  { id: 2, macroarea: 'salud', text: '¿Sientes que tu vocación es cuidar a las personas, aliviar su dolor y promover que tengan una buena salud física o mental?' },
  { id: 3, macroarea: 'habitat', text: '¿Te apasiona diseñar cosas, desde edificios y casas hasta páginas web, logos o estructuras gigantes?' },
  { id: 4, macroarea: 'sociales', text: '¿Te gusta analizar cómo funciona la sociedad, debatir sobre leyes, política o buscar que el mundo sea más justo?' },
  { id: 5, macroarea: 'economia', text: '¿Te ves liderando un equipo, armando tu propia empresa o entendiendo cómo funciona el dinero y los negocios?' },
  { id: 6, macroarea: 'sostenibilidad', text: '¿Sientes curiosidad por entender cómo funcionan las células, los virus o cómo usar la ciencia para crear alternativas ecológicas?' },
  { id: 7, macroarea: 'salud', text: '¿Te interesa aprender a fondo cómo funciona el cuerpo humano o por qué las personas se comportan de cierta manera?' },
  { id: 8, macroarea: 'habitat', text: '¿Disfrutas convirtiendo tus ideas en realidad, ya sea armando maquetas, dibujando planos o creando gráficos digitales?' },
  { id: 9, macroarea: 'sociales', text: '¿Te apasiona defender los derechos de los demás, mediar en problemas o entender la historia y las leyes?' },
  { id: 10, macroarea: 'economia', text: '¿Te da curiosidad saber cómo se ponen los precios a las cosas, cómo funcionan las ventas y qué compran las personas?' },
  { id: 11, macroarea: 'sostenibilidad', text: '¿Te imaginas trabajando en un laboratorio o en el campo, recolectando datos científicos para salvar nuestro planeta?' },
  { id: 12, macroarea: 'salud', text: '¿Te ves trabajando en un hospital, clínica o consultorio, ayudando directamente a que los pacientes se sientan mejor?' },
  { id: 13, macroarea: 'habitat', text: '¿Te gustaría resolver problemas de la ciudad combinando cálculos exactos con ideas súper creativas o estéticas?' },
  { id: 14, macroarea: 'sociales', text: '¿Te atrae la idea de enseñar a otros, escribir, comunicar ideas a muchas personas o estudiar diferentes culturas?' },
  { id: 15, macroarea: 'economia', text: '¿Disfrutas tomando el control de una situación, calculando riesgos y decidiendo dónde invertir dinero o recursos?' },
  { id: 16, macroarea: 'sostenibilidad', text: '¿Te interesa proponer soluciones reales para frenar el cambio climático o proteger el agua y los bosques?' },
  { id: 17, macroarea: 'salud', text: '¿Te gustaría guiar a las personas sobre qué comer o cómo ejercitarse para que no se enfermen y vivan mejor?' },
  { id: 18, macroarea: 'habitat', text: '¿Te atrae planificar la construcción de carreteras, hacer diseños amigables con el clima o crear sistemas digitales?' },
  { id: 19, macroarea: 'sociales', text: '¿Te entusiasma leer, investigar sobre el pasado de la humanidad y tratar de entender por qué hoy vivimos como vivimos?' },
  { id: 20, macroarea: 'economia', text: '¿Te llama la atención el mundo de las startups (empresas nuevas), la publicidad y la idea de vender productos a todo el mundo?' },
  { id: 21, macroarea: 'sostenibilidad', text: '¿Disfrutas materias como química, física o biología porque te ayudan a entender los secretos del universo y la tierra?' },
  { id: 22, macroarea: 'salud', text: '¿Sientes que tienes la fortaleza mental y el corazón para ayudar a personas que están pasando por momentos difíciles de enfermedad?' },
  { id: 23, macroarea: 'habitat', text: '¿Disfrutas jugar con nuevos materiales, usar tecnología de diseño 3D o expresarte a través del arte y los espacios?' },
  { id: 24, macroarea: 'sociales', text: '¿Te ves a futuro como un abogado defensor, un diplomático viajando por el mundo, o un periodista de investigación?' },
  { id: 25, macroarea: 'economia', text: '¿Te imaginas en una oficina moderna dirigiendo estrategias de marketing, finanzas o guiando a una empresa al éxito?' },
  { id: 26, macroarea: 'sostenibilidad', text: '¿Te gustaría usar la tecnología, la programación y las matemáticas para resolver problemas del medio ambiente?' },
  { id: 27, macroarea: 'salud', text: '¿Te apasiona la idea de usar terapias, tecnología médica o psicología clínica para curar a la gente?' },
  { id: 28, macroarea: 'habitat', text: '¿Te ves dirigiendo la construcción de obras grandes o siendo el líder creativo detrás de un videojuego o campaña visual?' },
  { id: 29, macroarea: 'sociales', text: '¿Te indignan las injusticias sociales y quieres dedicar tu vida a proponer leyes o reformas para mejorar tu país?' },
  { id: 30, macroarea: 'economia', text: '¿Te interesa aprender cómo organizar presupuestos gigantes y hacer que una empresa gane más gastando menos?' }
];

// --- FASE 2: DOMINIOS Y CARRERAS ESPECÍFICAS ---

export const DOMAIN_DATA = {
  // 1. ECONOMÍA Y GESTIÓN EMPRESARIAL (42 ítems, 7 carreras)
  economia: {
    macroareaId: 'economia',
    title: 'Economía y Gestión Empresarial',
    faculty: 'Facultad de Ciencias Administrativas y Contables / Economía',
    careers: {
      administracion_empresas: {
        name: 'Administración de Empresas',
        items: [1, 8, 15, 22, 29, 36],
        description: 'Aprenderás a liderar equipos, organizar un negocio y tomar buenas decisiones para que una empresa crezca. Te prepara para dirigir proyectos, emprender tu propia idea o trabajar en grandes compañías.',
        fieldOfWork: 'Empresas nacionales e internacionales, gestión de proyectos, startups y negocios familiares.',
        skills: ['Liderazgo de equipos', 'Organización de negocios', 'Toma de decisiones', 'Creatividad e innovación'],
        benefits: [
          { topText: 'Descuento', highlight: '34%', title: 'sobre aranceles', bottomText: 'Precio sin descuento: $3950' },
          { topText: 'Inversión', highlight: '$2600', title: 'por semestre', bottomText: '8 semestres presenciales' },
          { topText: 'Empleabilidad', highlight: '94%', title: 'alta demanda', bottomText: 'Gerencia, consultoría, emprendimiento' }
        ],
        syllabus: {
          semesters: [
            ['Fundamentos de Investigación', 'Matemática I', 'Contabilidad Básica', 'Fundamentos de Administración', 'Entorno Socioeconómico', 'Introducción a la Microeconomía'],
            ['Estadística I', 'Fundamentos de Contabilidad de Costos', 'Pensamiento Creativo e Innovación', 'Optimización Aplicada a la Administración y Economía', 'Introducción a la Macroeconomía'],
            ['Estadística II', 'Contabilidad Financiera', 'Marketing y Ecosistema Digital', 'Diseño y Estructura Organizacional', 'Gestión por Procesos', 'Ética e Interculturalidad'],
            ['Administración y Planificación Financiera', 'Investigación de Operaciones', 'Gestión de PYMES y Empresas Familiares', 'Investigación de Mercados', 'Cultura y Comportamiento Organizacional', 'Legislación Empresarial', 'Jesucristo y Aprendizajes Vitales'],
            ['Gestión del Talento Humano', 'Administración de Operaciones', 'Negocios Digitales (E-Business)', 'Administración Estratégica', 'Estrategias Globales'],
            ['Ecología Integral', 'Gestión de Cadena de Suministro Internacional', 'Diseño y Evaluación de Proyectos', 'Auditoría y Compliance', 'Dirección e Innovación Estratégica', 'Responsabilidad Social, Corporativa y Ambiental'],
            ['Seminario de Titulación', 'Sistemas Integrados de Gestión', 'Prospectiva Estratégica', 'Finanzas Corporativas', 'Asignatura 1 de Itinerario', 'Asignatura 2 de Itinerario'],
            ['Conocimiento, Palabra y Cambio Social', 'Integración Curricular', 'Tributación Aplicada', 'Habilidades Gerenciales', 'Sistemas de Información Gerencial', 'Asignatura 3 de Itinerario', 'Asignatura 4 de Itinerario']
          ],
          subjectDetails: {
            'Gestión de PYMES y Empresas Familiares': 'Estrategias de crecimiento y profesionalización para negocios pequeños y medianos.',
            'Cultura y Comportamiento Organizacional': 'Cómo la cultura, valores y dinámicas de grupo impactan el rendimiento de una empresa.',
            'Administración de Operaciones': 'Diseño y optimización de procesos productivos para maximizar eficiencia y calidad.',
            'Negocios Digitales (E-Business)': 'Transformación digital: modelos de negocio online, plataformas y comercio electrónico.',
            'Estrategias Globales': 'Expansión internacional, joint ventures y competitividad en mercados globales.',
            'Gestión de Cadena de Suministro Internacional': 'Logística global, proveedores internacionales y gestión de inventarios multinacionales.',
            'Dirección e Innovación Estratégica': 'Liderazgo ejecutivo, innovación disruptiva y ventaja competitiva sostenible.',
            'Responsabilidad Social, Corporativa y Ambiental': 'Integración de objetivos sociales y ambientales en la estrategia empresarial.',
            'Prospectiva Estratégica': 'Análisis de tendencias y escenarios futuros para anticipar cambios en el mercado.',
            'Sistemas de Información Gerencial': 'Tecnología y sistemas que apoyan la toma de decisiones a nivel directivo.'
          },
          itineraries: [
            {
              name: 'Negocios Digitales',
              subjects: ['Presencia y Branding Digital', 'Marketing Inbound y de Contenidos', 'Experiencia del Cliente', 'E-Commerce y Social Selling']
            },
            {
              name: 'Gestión de Proyectos',
              subjects: ['Dirección de Proyectos', 'Inicio y Planificación del Proyecto', 'Ejecución, Monitoreo, Control y Cierre del Proyecto', 'Gestión Ágil de Proyectos']
            },
            {
              name: 'Ciencia de Datos con Aplicaciones Prácticas',
              subjects: ['Exploración de Datos', 'Visualización Avanzada de Datos', 'Analítica de Datos', 'Aplicación de la Ciencia de Datos']
            }
          ]
        },
        caseStudy: {
          type: 'decision',
          scenario: 'Simulador: Día a Día del CEO',
          description: 'Eres el gerente. El proveedor principal se retrasó y los clientes están esperando. ¿Qué decides hacer primero?',
          steps: [
            {
              id: 'step1',
              question: 'El proveedor no contesta el teléfono.',
              options: [
                { text: 'Buscar un proveedor alternativo más caro pero rápido.', next: 'step2_a' },
                { text: 'Esperar y no decirle nada a los clientes.', next: 'step2_b' }
              ]
            },
            {
              id: 'step2_a',
              question: 'Compraste la tela cara. Tu margen de ganancia bajó. ¿Cómo lo compensas?',
              options: [
                { text: 'Asumir la pérdida este mes para no perder clientes.', next: 'success' },
                { text: 'Subir el precio repentinamente.', next: 'success' }
              ]
            },
            {
              id: 'step2_b',
              question: 'Los clientes se enojan por el retraso y piden reembolsos.',
              options: [
                { text: 'Pedir disculpas y ofrecer descuento.', next: 'failure' },
                { text: 'Ignorar los mensajes.', next: 'failure' }
              ]
            }
          ],
          feedback: {
            success: '¡Gran gestión! Un líder resuelve crisis priorizando al cliente y adaptando su estrategia operativa.',
            failure: 'Cuidado. La falta de comunicación puede quebrar la confianza de los clientes en la empresa.'
          }
        }
      },
      turismo: {
        name: 'Administración en Turismo y Hospitalidad',
        items: [2, 9, 16, 23, 30, 37],
        description: 'Aprenderás a crear experiencias de viaje inolvidables y a gestionar hoteles, restaurantes o destinos turísticos, promoviendo los atractivos del país mientras cuidas la naturaleza y la cultura local.',
        fieldOfWork: 'Cadenas hoteleras, agencias de viajes, operadores turísticos y proyectos comunitarios.',
        skills: ['Atención y hospitalidad', 'Planificación de viajes', 'Gestión de eventos', 'Cuidado ambiental'],
        benefits: [
          { topText: 'Descuento', highlight: '30%', title: 'sobre aranceles', bottomText: 'Convenios internacionales' },
          { topText: 'Inversión', highlight: '$2550', title: 'por semestre', bottomText: '8 semestres presenciales' },
          { topText: 'Empleabilidad', highlight: '91%', title: 'alta demanda', bottomText: 'Cadenas hoteleras, resorts, ONGs' }
        ],
        syllabus: {
          semesters: [
            ['Fundamentos de Investigación', 'Matemática I', 'Contabilidad Básica', 'Fundamentos de Administración', 'Entorno Socioeconómico', 'Introducción al Turismo y Hospitalidad'],
            ['Estadística I', 'Geografía Turística y Patrimonio', 'Pensamiento Creativo e Innovación', 'Fundamentos de Contabilidad de Costos', 'Introducción a la Macroeconomía'],
            ['Operaciones Hoteleras y de Alimentos y Bebidas', 'Ecosistema Turístico Digital', 'Legislación Turística y Ambiental', 'Estadística II', 'Ética e Interculturalidad'],
            ['Gestión de Destinos Turísticos Sostenibles', 'Marketing de Turismo y Hospitalidad', 'Guianza y Patrimonio Cultural', 'Administración Presupuestaria', 'Jesucristo y Aprendizajes Vitales'],
            ['Revenue Management y Fijación de Precios', 'Planificación Turística Territorial', 'Gestión del Talento en Hospitalidad', 'Administración Estratégica', 'Ecología Integral'],
            ['Diseño de Experiencias y Turismo Comunitario', 'Diseño y Evaluación de Proyectos Turísticos', 'Calidad y Certificaciones Hoteleras', 'Control de Gestión'],
            ['Seminario de Titulación', 'Turismo de Negocios, Congresos y Eventos (MICE)', 'Asignatura 1 de Itinerario', 'Asignatura 2 de Itinerario'],
            ['Conocimiento, Palabra y Cambio Social', 'Integración Curricular', 'Innovación Turística y Startups', 'Habilidades Gerenciales', 'Asignatura 3 de Itinerario', 'Asignatura 4 de Itinerario']
          ],
          subjectDetails: {
            'Introducción al Turismo y Hospitalidad': 'Bases conceptuales, evolución histórica y modelos de gestión turística moderna.',
            'Operaciones Hoteleras y de Alimentos y Bebidas': 'Estándares internacionales de servicio, front office, housekeeping y gastronomía.',
            'Gestión de Destinos Turísticos Sostenibles': 'Desarrollo de planes de manejo para áreas naturales protegidas y turismo comunitario.',
            'Revenue Management y Fijación de Precios': 'Modelos analíticos para optimizar ocupación, tarifas dinámicas y maximización de ingresos.',
            'Diseño de Experiencias y Turismo Comunitario': 'Cocreadoras de vivencias auténticas en contacto directo con comunidades indígenas y rurales.',
            'Turismo de Negocios, Congresos y Eventos (MICE)': 'Planificación logística y comercial de convenciones de alto nivel y turismo corporativo.'
          },
          itineraries: [
            {
              name: 'Gestión Hotelera y Resorts de Lujo',
              subjects: ['Hospitality Management Global', 'Gestión de Alimentos & Bebidas Premium', 'Wellness y Spa Management', 'Auditoría de Servicio y Calidad']
            },
            {
              name: 'Turismo Sostenible y Conservación Biocultural',
              subjects: ['Ecoturismo y Áreas Protegidas', 'Diseño de Rutas Bioculturales', 'Gestión del Patrimonio Inmaterial', 'Turismo Regenerativo']
            }
          ]
        },
        caseStudy: {
          type: 'decision',
          scenario: 'Simulador: Agencia de Viajes',
          description: 'Eres el gerente de un tour patrimonial. El bus se avería en pleno camino a las ruinas y los turistas están impacientes.',
          steps: [
            {
              id: 'step1',
              question: '¿Qué es lo primero que haces?',
              options: [
                { text: 'Llamar a un transporte de reemplazo y ofrecer un refrigerio gratis mientras esperan.', next: 'success' },
                { text: 'Pedirles que caminen el resto del trayecto bajo el sol.', next: 'failure' }
              ]
            }
          ],
          feedback: {
            success: '¡Excelente! En Turismo, la experiencia del cliente es todo. Una crisis se puede convertir en una anécdota positiva si hay buena actitud y soluciones.',
            failure: 'Cuidado, una mala reseña puede afectar toda tu reputación en línea.'
          }
        }
      },
      contabilidad: {
        name: 'Contabilidad y Auditoría',
        items: [3, 10, 17, 24, 31, 38],
        description: 'Aprenderás a llevar las cuentas claras de una empresa, cuidar su dinero y asegurar que todo esté en orden con la ley. Serás la persona de confianza que ayuda a que un negocio no pierda plata y crezca sano.',
        fieldOfWork: 'Empresas privadas, firmas de auditoría, bancos y sector público.',
        skills: ['Control del dinero', 'Cálculo de impuestos', 'Revisión de cuentas', 'Organización financiera'],
        benefits: [
          { topText: 'Descuento', highlight: '34%', title: 'sobre aranceles', bottomText: 'Precio sin descuento: $3950' },
          { topText: 'Inversión', highlight: '$2600', title: 'por semestre', bottomText: '8 semestres presenciales' },
          { topText: 'Empleabilidad', highlight: '92%', title: 'alta demanda', bottomText: 'Sector público y privado' }
        ],
        syllabus: {
          semesters: [
            ['Fundamentos de Investigación', 'Matemática I', 'Contabilidad Básica', 'Fundamentos de Administración', 'Entorno Socioeconómico', 'Introducción a la Microeconomía'],
            ['Estadística I', 'Fundamentos de Contabilidad de Costos', 'Pensamiento Creativo e Innovación', 'Optimización Aplicada a la Administración y Economía', 'Introducción a la Macroeconomía'],
            ['Estadística II', 'Contabilidad Intermedia', 'Marketing y Ecosistema Digital', 'Sistemas de Acumulación de Costos', 'Análisis y Diagnóstico Financiero', 'Ética e Interculturalidad'],
            ['Gestión por Procesos', 'Principios Básicos Tributarios', 'Contabilidad Superior', 'Legislación Empresarial', 'Gestión de Costos', 'Jesucristo y Aprendizajes Vitales'],
            ['Aplicaciones Tributarias', 'Contabilidad Avanzada', 'Gestión del Talento Humano', 'Auditoría I', 'Administración Estratégica', 'Administración Presupuestaria'],
            ['Ecología Integral', 'Diseño y Evaluación de Proyectos', 'Contabilidad de Actividades Especiales', 'Herramientas de Programación para los Negocios', 'Auditoría II', 'Control de Gestión'],
            ['Seminario de Titulación', 'Data Analytics para Auditoría y Contabilidad I', 'Contabilidad de Instituciones Financieras y Seguros', 'Sostenibilidad e Informes Integrados', 'Asignatura 1 de Itinerario', 'Asignatura 2 de Itinerario'],
            ['Conocimiento, Palabra y Cambio Social', 'Integración Curricular', 'Data Analytics para Auditoría y Contabilidad II', 'Habilidades Gerenciales', 'Finanzas Corporativas', 'Asignatura 3 de Itinerario', 'Asignatura 4 de Itinerario']
          ],
          subjectDetails: {
            'Contabilidad Básica': 'Principios fundamentales para registrar y analizar los estados financieros de una empresa.',
            'Contabilidad Intermedia': 'Profundización en el registro contable de activos, pasivos y patrimonio empresarial.',
            'Contabilidad Superior': 'Tratamiento contable avanzado de operaciones complejas y consolidación de estados financieros.',
            'Auditoría I': 'Introducción a la auditoría financiera: planificación, evidencia y dictamen del auditor.',
            'Auditoría II': 'Auditoría aplicada a áreas específicas: inventarios, cuentas por cobrar, activos fijos y fraude.',
            'Aplicaciones Tributarias': 'Cálculo y declaración de impuestos (IVA, IR, retenciones) según la normativa vigente.',
            'Data Analytics para Auditoría y Contabilidad I': 'Uso de herramientas de datos para detectar anomalías y fraudes en registros contables.',
            'Gestión de Costos': 'Análisis y control de costos para optimizar la rentabilidad de la empresa.',
            'Sostenibilidad e Informes Integrados': 'Reportes que integran información financiera y no financiera para stakeholders.'
          },
          itineraries: [
            {
              name: 'Derecho Empresarial',
              subjects: ['Gobierno Corporativo', 'Derecho de la Competencia', 'Derecho y Nuevas Tecnologías', 'Compliance']
            },
            {
              name: 'Economía y Ambiente',
              subjects: ['Introducción a la Economía Sostenible', 'Sostenibilidad Ambiental y Cambio Climático', 'Herramientas para la Valoración Ambiental', 'Gestión Sostenible de Empresas']
            }
          ]
        },
        caseStudy: {
          type: 'matching',
          scenario: 'Auditoría Forense Rápida',
          description: 'Encuentra dónde se debe clasificar cada movimiento financiero de la empresa para que la caja cuadre perfectamente.',
          pairs: [
            { left: 'Compra de computadoras', right: 'Activos Fijos' },
            { left: 'Pago de sueldos', right: 'Gastos Operativos' },
            { left: 'Préstamo bancario', right: 'Pasivos a Largo Plazo' }
          ],
          feedback: {
            success: '¡Cuadre perfecto! El orden financiero es vital para la supervivencia de cualquier negocio.',
            failure: 'Las cuentas no cuadran. Recuerda que cada dólar debe estar clasificado correctamente.'
          }
        }
      },
      economia_carrera: {
        name: 'Economía',
        items: [4, 11, 18, 25, 32, 39],
        description: 'Aprenderás cómo funciona el dinero, las empresas y el país. Descubrirás por qué suben los precios, cómo generar más empleo y cómo usar datos para tomar decisiones que ayuden a la sociedad a progresar.',
        fieldOfWork: 'Bancos, Banco Central, ministerios de economía, organismos internacionales y empresas de análisis.',
        skills: ['Entender la economía', 'Análisis de datos', 'Proponer soluciones para el país', 'Estrategia'],
        syllabus: {
        semesters: [
          ['Fundamentos de Investigación', 'Matemática I', 'Contabilidad Básica', 'Fundamentos de Administración', 'Entorno Socioeconómico', 'Introducción a la Microeconomía'],
          ['Estadística I', 'Introducción a la Macroeconomía', 'Economía Institucional y del Comportamiento', 'Pensamiento Creativo e Innovación', 'Fundamentos de Contabilidad de Costos'],
          ['Estadística II', 'Microeconomía I', 'Macroeconomía I', 'Economía de América Latina y Ecuador', 'Sector Financiero y Economía Financiera', 'Ética e Interculturalidad'],
          ['Microeconomía II', 'Macroeconomía II', 'Econometría', 'Mercado de Capitales y Economía Financiera', 'Economía Política I', 'Optimización Aplicada a la Administración y Economía'],
          ['Pensamiento Económico', 'Macroeconometría', 'Diseño y Evaluación de Proyectos', 'Sostenibilidad Ambiental', 'Economía del Sector Público', 'Organización Industrial', 'Jesucristo y Aprendizajes Vitales'],
          ['Regulación Financiera y Política Monetaria', 'Microeconometría', 'Organización Económica, Espacio y Territorio', 'Economía Política II', 'Economía Internacional', 'Teoría de Juegos'],
          ['Bases de Datos en Economía', 'Seminario de Titulación', 'Asignatura 1 de Itinerario', 'Asignatura 2 de Itinerario'],
          ['Economía del Desarrollo', 'Política Fiscal y Finanzas Públicas', 'Economía de la Competencia', 'Conocimiento, Palabra y Cambio Social', 'Integración Curricular', 'Asignatura 3 de Itinerario', 'Asignatura 4 de Itinerario']
        ],
        subjectDetails: {
          'Fundamentos de Investigación': 'Desarrolla habilidades metodológicas esenciales para la investigación en ciencias sociales y económicas.',
          'Matemática I': 'Bases matemáticas clave aplicadas al modelamiento de fenómenos económicos básicos.',
          'Contabilidad Básica': 'Principios para registrar y analizar los estados financieros de empresas u organizaciones.',
          'Fundamentos de Administración': 'Aprende los procesos de planificación, organización y control en cualquier tipo de institución.',
          'Entorno Socioeconómico': 'Analiza el contexto histórico, social y político que rodea la toma de decisiones económicas actuales.',
          'Introducción a la Microeconomía': 'Comprende cómo los individuos y las empresas toman decisiones sobre asignación de recursos limitados.',
          'Estadística I': 'Herramientas de probabilidad y recolección de datos fundamentales para predecir tendencias.',
          'Introducción a la Macroeconomía': 'Estudio global de la economía: crecimiento, desempleo, inflación y el rol del gobierno.',
          'Economía Institucional y del Comportamiento': 'Estudia cómo la psicología y las instituciones (leyes, cultura) afectan nuestras decisiones financieras.',
          'Pensamiento Creativo e Innovación': 'Desarrolla soluciones disruptivas para problemas de negocios y políticas públicas.',
          'Fundamentos de Contabilidad de Costos': 'Aprende a medir, analizar y reportar los costos financieros para optimizar márgenes de ganancia.',
          'Estadística II': 'Inferencia estadística y pruebas de hipótesis avanzadas para confirmar o rechazar teorías económicas.',
          'Microeconomía I': 'Modelamiento profundo del comportamiento de los consumidores y teorías de producción corporativa.',
          'Macroeconomía I': 'Análisis profundo de los ciclos económicos, políticas monetarias y fiscales a nivel nacional.',
          'Economía de América Latina y Ecuador': 'Estudio de los desafíos estructurales, deuda y desarrollo en la región.',
          'Sector Financiero y Economía Financiera': 'Comprende cómo funcionan los bancos centrales, el dinero y el sistema de créditos.',
          'Microeconomía II': 'Teorías avanzadas: competencia imperfecta, monopolios, oligopolios y fallas de mercado.',
          'Macroeconomía II': 'Modelos macroeconómicos dinámicos y análisis de crecimiento a largo plazo.',
          'Econometría': 'El núcleo de la economía moderna: aplicación de estadística matemática compleja para probar relaciones empíricas en datos.',
          'Mercado de Capitales y Economía Financiera': 'Aprende a analizar bonos, acciones, derivados y el funcionamiento de Wall Street.',
          'Economía Política I': 'Relación entre las decisiones políticas del estado y su impacto directo en la economía ciudadana.',
          'Optimización Aplicada a la Administración y Economía': 'Uso del cálculo diferencial para maximizar beneficios o minimizar costos en operaciones corporativas.',
          'Pensamiento Económico': 'Evolución histórica de las ideas económicas, desde Adam Smith hasta los teóricos modernos.',
          'Macroeconometría': 'Aplicación de métodos econométricos para modelar series de tiempo y predecir inflación o PIB.',
          'Diseño y Evaluación de Proyectos': 'Construye y evalúa la rentabilidad y viabilidad de proyectos de inversión privada o pública.',
          'Sostenibilidad Ambiental': 'Cómo diseñar políticas económicas que protejan el planeta y logren un desarrollo sostenible.',
          'Economía del Sector Público': 'Análisis de impuestos, gasto público y cómo el estado financia la salud y educación.',
          'Organización Industrial': 'Estudia cómo compiten las corporaciones dentro de una industria específica y estrategias de precios.',
          'Regulación Financiera y Política Monetaria': 'Diseño de normas para evitar crisis bancarias y el rol de las tasas de interés.',
          'Microeconometría': 'Análisis estadístico de datos de encuestas o censos para evaluar el impacto de programas sociales.',
          'Organización Económica, Espacio y Territorio': 'Estudia la geografía económica, por qué las ciudades crecen y la migración.',
          'Economía Política II': 'Profundización en modelos políticos y las relaciones de poder detrás de la riqueza.',
          'Economía Internacional': 'Todo sobre comercio exterior, aranceles, globalización y tipos de cambio de divisas.',
          'Teoría de Juegos': 'La matemática detrás de la toma de decisiones estratégicas donde el éxito depende de lo que haga el competidor.',
          'Bases de Datos en Economía': 'Programación y gestión de grandes bases de datos usando herramientas modernas (SQL, Python/R).',
          'Economía del Desarrollo': 'Estrategias teóricas para sacar a países de la pobreza y promover el bienestar social.',
          'Política Fiscal y Finanzas Públicas': 'El arte de diseñar presupuestos estatales eficientes sin quebrar la economía nacional.',
          'Economía de la Competencia': 'Marco legal y analítico para prevenir monopolios y asegurar un mercado justo.'
        },
        itineraries: [
          {
            name: 'Ciencia de Datos con Aplicaciones Prácticas',
            subjects: ['Exploración de Datos', 'Visualización Avanzada de Datos', 'Analítica de Datos', 'Aplicación de la Ciencia de Datos']
          },
          {
            name: 'Diseño y Análisis de Políticas Públicas',
            subjects: ['Estado y Sociedad', 'Marcos Analíticos de Políticas Públicas', 'Análisis Comparado de Políticas Públicas', 'Métodos Múltiples para la Evaluación de Políticas Públicas']
          },
          {
            name: 'Economía y Ambiente',
            subjects: ['Economía de los Recursos Naturales', 'Valoración Económica Ambiental', 'Cambio Climático y Política Ambiental']
          }
        ]
      },
        benefits: [
          { topText: 'Descuento', highlight: '27%', title: 'Aranceles preferenciales', bottomText: 'Aplica a toda la carrera' },
          { topText: 'Inversión', highlight: '$2900', title: 'por semestre', bottomText: 'Precio sin descuento: $3950' },
          { topText: 'Empleabilidad', highlight: '90%', title: 'alta demanda', bottomText: 'empresas, ONGs, bancos' }
        ],
        caseStudy: {
          type: 'decision',
          scenario: 'Simulador: Ministro de Economía por un Día',
          description: 'Ecuador enfrenta una crisis: la inflación sube al 8%, el desempleo crece y los ciudadanos protestan. Como nuevo Ministro de Economía, debes tomar decisiones que impactarán a millones.',
          steps: [
            {
              id: 'step1',
              question: 'La inflación se dispara. Los precios del pan y la leche suben un 30%. ¿Cuál es tu primera medida?',
              options: [
                { text: 'Congelar los precios de los productos básicos por decreto.', next: 'step2_freeze' },
                { text: 'Subir las tasas de interés para reducir el dinero en circulación.', next: 'step2_rates' },
                { text: 'No hacer nada y dejar que el mercado se ajuste solo.', next: 'failure_passive' }
              ]
            },
            {
              id: 'step2_freeze',
              question: 'Congelaste los precios, pero los productores dejan de producir porque no les conviene vender tan barato. Los supermercados se vacían. ¿Qué haces?',
              options: [
                { text: 'Subsidiar directamente a los productores para que no pierdan dinero.', next: 'step3_subsidy' },
                { text: 'Importar productos del exterior para llenar los supermercados.', next: 'failure_imports' }
              ]
            },
            {
              id: 'step2_rates',
              question: 'Las tasas subieron. La inflación se desacelera, pero las empresas pequeñas no pueden pedir préstamos y empiezan a cerrar. El desempleo sube al 12%. ¿Cómo respondes?',
              options: [
                { text: 'Crear un programa de microcréditos con tasas preferenciales para PYMES.', next: 'step3_micro' },
                { text: 'Bajar las tasas de nuevo inmediatamente.', next: 'failure_flip' }
              ]
            },
            {
              id: 'step3_subsidy',
              question: 'Los subsidios funcionan a corto plazo, pero el gasto público se dispara. El FMI advierte que Ecuador podría quedarse sin fondos en 6 meses. ¿Tu jugada final?',
              options: [
                { text: 'Negociar un acuerdo con el FMI con reformas graduales y reducir subsidios poco a poco.', next: 'success' },
                { text: 'Ignorar al FMI y seguir subsidiando con deuda.', next: 'failure_debt' }
              ]
            },
            {
              id: 'step3_micro',
              question: 'Los microcréditos dan aire a las PYMES. Pero el presupuesto para educación y salud se redujo para financiarlos. La opinión pública se divide. ¿Cómo equilibras?',
              options: [
                { text: 'Reasignar el presupuesto usando datos de impacto social, priorizando sectores con mayor retorno.', next: 'success' },
                { text: 'Recortar todo el presupuesto de cultura y deporte para mantener salud y educación.', next: 'failure_culture' }
              ]
            }
          ],
          feedback: {
            success: '¡Excelente gestión, Ministro! Tomaste decisiones difíciles basadas en datos y equilibrio. En Economía, cada decisión tiene un costo de oportunidad. Has demostrado pensamiento estratégico y responsabilidad fiscal. Esto es exactamente lo que aprenderás en la carrera.',
            failure: 'La economía se desestabilizó. Recuerda: en Economía no existen soluciones mágicas. Cada política tiene consecuencias y trade-offs. Lo importante es analizar datos, anticipar efectos secundarios y buscar el equilibrio. ¡Inténtalo de nuevo!',
            failure_passive: 'La inacción no es una opción cuando millones sufren. Un economista debe proponer soluciones fundamentadas, no esperar a que las cosas se arreglen solas.',
            failure_imports: 'Importar todo generó una fuga masiva de divisas. El país se endeudó y los productores locales quebraron. La dependencia externa no es sostenible.',
            failure_flip: 'Cambiar de política tan rápido destruye la confianza del mercado. Los inversores huyen y la moneda se devalúa. La consistencia y la comunicación son clave.',
            failure_debt: 'La deuda se volvió impagable. Ecuador perdió acceso a mercados internacionales. Subsidiar sin plan fiscal es una bomba de tiempo.',
            failure_culture: 'Recortar cultura y deporte generó protestas masivas. La política económica no puede ignorar el bienestar integral de la sociedad.'
          }
        }
      },
      
      sistemas_carrera: {
        name: 'Ingeniería de Sistemas',
        items: [4, 11, 18, 25, 32, 39],
        description: 'Aprenderás a crear aplicaciones, páginas web, sistemas inteligentes y proteger la información digital. Usarás la tecnología para resolver problemas del día a día y transformar cualquier tipo de negocio.',
        fieldOfWork: 'Empresas de tecnología, desarrollo de software, startups digitales y áreas de sistemas.',
        skills: ['Crear programas y apps', 'Lógica e innovación', 'Inteligencia artificial', 'Seguridad digital'],
        benefits: [
          { topText: 'Demanda', highlight: 'Alta', title: 'en el mercado laboral', bottomText: 'nacional e internacional' },
          { topText: 'Laboratorios', highlight: 'Tech', title: 'equipados', bottomText: 'con última tecnología' },
          { topText: 'Certificaciones', highlight: 'AWS/Azure', title: 'integradas', bottomText: 'durante la carrera' }
        ],
        caseStudy: {
          type: 'decision',
          title: 'Sistema de Tráfico Inteligente',
          scenario: 'Una ciudad quiere reducir sus embotellamientos usando inteligencia artificial y sensores.',
          description: 'Tienes que elegir la arquitectura principal del sistema.',
          steps: [
            {
              id: 'step1',
              question: 'Elige la arquitectura',
              options: [
                { text: 'Una red en la nube que procese datos centralizados.', next: 'success' },
                { text: 'Sensores locales autónomos en cada semáforo sin comunicarse entre sí.', next: 'failure' }
              ]
            }
          ],
          feedback: {
            success: 'Buena idea, permite un análisis global en tiempo real.',
            failure: 'Esto es ineficiente; no pueden optimizar grandes rutas sin comunicarse.'
          }
        },
        syllabus: {
          semesters: [
            ['Fundamentos de Investigación', 'Cálculo I', 'Física General', 'Pensamiento Computacional', 'Innovación y Creatividad', 'Técnicas Gráficas y Geométricas'],
            ['Cálculo II', 'Algebra Lineal y Geometría Analítica', 'Programación I', 'Ciencia de los Materiales: Propiedades, Procesos y Ciclos', 'Jesucristo y Aprendizajes Vitales'],
            ['Estadística Aplicada', 'Programación II', 'Cálculo de Predicados', 'Sistemas Operativos', 'Redes de Computadoras', 'Ética e Interculturalidad'],
            ['Fundamentos de SI', 'Programación III', 'Bases de Datos I', 'Infraestructura', 'Ecología Integral'],
            ['Diseño de Sistemas', 'Programación IV', 'Desarrollo de Software Seguro', 'Integración de Sistemas', 'Programación Móvil'],
            ['Interacción Humano Computadora', 'Desarrollo en Plataformas', 'Ingeniería de Software', 'Bases de Datos II', 'Arquitectura Empresarial'],
            ['Inteligencia Artificial', 'Emprendimiento Tecnológico', 'Ingeniería de Requerimientos', 'Seminario de Titulación', 'Asignatura 1 de Itinerario', 'Asignatura 2 de Itinerario'],
            ['Desarrollo en Contenedores', 'Big Data', 'Minería de Datos y Metodologías', 'Inteligencia de Negocios', 'Ciencia de Datos', 'Diseño y Evaluación de Proyectos', 'Conocimiento, Palabra y Cambio Social', 'Integración Curricular', 'Asignatura 3 de Itinerario', 'Asignatura 4 de Itinerario']
          ],
          subjectDetails: {
            'Programación I': 'Aprende los fundamentos de la lógica y la programación.',
            'Inteligencia Artificial': 'Desarrolla modelos de machine learning y redes neuronales.',
            'Desarrollo de Software Seguro': 'Aplica buenas prácticas de ciberseguridad al código.',
            'Big Data': 'Manejo y análisis de grandes volúmenes de información.'
          },
          itineraries: [
            {
              name: 'Inteligencia Artificial Aplicada',
              subjects: ['Fundamentos de Inteligencia Artificial', 'Análisis, Procesamiento y Aplicación de Inteligencia Artificial', 'Técnicas de Inteligencia Artificial', 'Proyecto Aplicado de Inteligencia Artificial']
            },
            {
              name: 'Tecnologías Creativas Para un Mundo Digital',
              subjects: ['Pensamiento y Crítica del Mundo Digital', 'Métodos de Computación Creativa', 'Laboratorio de Creación Digital', 'Laboratorio de Fabricación Digital']
            },
            {
              name: 'Gestión de Proyectos (Project Management)',
              subjects: ['Dirección de Proyectos', 'Inicio y Planificación del Proyecto', 'Ejecución, Monitoreo, Control y Cierre del Proyecto', 'Gestión Ágil de Proyectos']
            }
          ]
        }
      },
      finanzas: {
        name: 'Finanzas',
        items: [5, 12, 19, 26, 33, 40],
        description: 'Aprenderás a manejar el dinero de forma inteligente. Descubrirás cómo invertir, hacer crecer los ahorros de un negocio, evaluar si una idea dará ganancias y evitar riesgos económicos.',
        fieldOfWork: 'Bancos, cooperativas, fondos de inversión, aseguradoras y áreas financieras de empresas.',
        skills: ['Inversiones y ahorros', 'Evaluar nuevos negocios', 'Manejo de presupuestos', 'Estrategia financiera'],
        benefits: [
          { topText: 'Descuento', highlight: '34%', title: 'sobre aranceles', bottomText: 'Precio sin descuento: $3950' },
          { topText: 'Inversión', highlight: '$2600', title: 'por semestre', bottomText: '8 semestres presenciales' },
          { topText: 'Empleabilidad', highlight: '95%', title: 'muy alta demanda', bottomText: 'Banca, seguros, fintech' }
        ],
        syllabus: {
          semesters: [
            ['Fundamentos de Investigación', 'Matemática I', 'Contabilidad Básica', 'Fundamentos de Administración', 'Entorno Socioeconómico', 'Introducción a la Microeconomía'],
            ['Estadística I', 'Fundamentos de Contabilidad de Costos', 'Pensamiento Creativo e Innovación', 'Optimización Aplicada a la Administración y Economía', 'Introducción a la Macroeconomía'],
            ['Herramientas de Programación para los Negocios', 'Contabilidad Intermedia', 'Marketing y Ecosistema Digital', 'Estadística II', 'Análisis y Diagnóstico Financiero', 'Ética e Interculturalidad'],
            ['Legislación Empresarial', 'Investigación de Operaciones', 'Contabilidad Societaria', 'Gestión por Procesos', 'Administración Presupuestaria', 'Finanzas Operativas', 'Jesucristo y Aprendizajes Vitales'],
            ['Gestión del Talento Humano', 'Administración de Portafolios', 'Administración Estratégica', 'Tributación Aplicada', 'Decisiones de Financiamiento e Inversiones'],
            ['Ecología Integral', 'Instituciones Financieras del Sistema Nacional', 'Control de Gestión', 'Diseño y Evaluación de Proyectos', 'Seguros y Transferencia de Riesgos', 'Finanzas Internacionales'],
            ['Seminario de Titulación', 'Analítica Financiera', 'Valoración de Renta Fija', 'Gestión de Riesgos Financieros', 'Asignatura 1 de Itinerario', 'Asignatura 2 de Itinerario'],
            ['Conocimiento, Palabra y Cambio Social', 'Integración Curricular', 'Habilidades Gerenciales', 'Innovación Financiera y Fintech', 'Valoración de Empresas', 'Asignatura 3 de Itinerario', 'Asignatura 4 de Itinerario']
          ],
          subjectDetails: {
            'Finanzas Operativas': 'Gestión del capital de trabajo, flujos de caja y liquidez empresarial día a día.',
            'Administración de Portafolios': 'Teoría moderna de carteras: diversificación, riesgo y rendimiento de inversiones.',
            'Decisiones de Financiamiento e Inversiones': 'Evaluación de opciones de financiamiento (deuda vs. capital) y análisis de proyectos.',
            'Seguros y Transferencia de Riesgos': 'Instrumentos para proteger activos y transferir riesgos financieros a terceros.',
            'Finanzas Internacionales': 'Mercados cambiarios, cobertura de riesgo y finanzas en un contexto global.',
            'Analítica Financiera': 'Herramientas cuantitativas y software para modelar escenarios financieros complejos.',
            'Valoración de Renta Fija': 'Análisis de bonos, tasas de interés y curvas de rendimiento.',
            'Gestión de Riesgos Financieros': 'Identificación, medición y mitigación de riesgos de mercado, crédito y liquidez.',
            'Innovación Financiera y Fintech': 'Blockchain, pagos digitales, banca abierta y la disrupción tecnológica en finanzas.',
            'Valoración de Empresas': 'Métodos DCF, múltiplos y EVA para determinar cuánto vale una compañía.'
          },
          itineraries: [
            {
              name: 'Ciencia de Datos con Aplicaciones Prácticas',
              subjects: ['Exploración de Datos', 'Visualización Avanzada de Datos', 'Analítica de Datos', 'Aplicación de la Ciencia de Datos']
            },
            {
              name: 'Gestión de Proyectos (Project Management)',
              subjects: ['Dirección de Proyectos', 'Inicio y Planificación del Proyecto', 'Ejecución, Monitoreo, Control y Cierre del Proyecto', 'Gestión Ágil de Proyectos']
            },
            {
              name: 'Internacionalización de la Empresa',
              subjects: ['Internacionalización de MYPIMES', 'Negociación en Mercados Internacionales', 'Riesgos Internacionales', 'Gerencia de Negocios Internacionales']
            }
          ]
        },
        caseStudy: {
          type: 'slider',
          scenario: 'Minijuego: El Presupuesto de tu Startup',
          description: 'Tienes $10,000 para empezar a vender postres. Asigna presupuesto a las siguientes áreas.',
          variables: [
            { id: 'marketing', label: 'Marketing y Publicidad', max: 10000 },
            { id: 'product', label: 'Producción', max: 10000 },
            { id: 'reserve', label: 'Fondo de Emergencia', max: 10000 }
          ],
          feedback: {
            success: '¡Excelente! Mantener un buen balance entre producción, ventas y ahorro asegura la supervivencia financiera de tu negocio.',
            failure: 'Cuidado, desbalancear el presupuesto puede dejarte sin dinero para producir o sin fondo de emergencia.'
          }
        }
      },
      marketing: {
        name: 'Marketing',
        items: [6, 13, 20, 27, 34, 41],
        description: 'Aprenderás a descubrir qué le gusta a la gente y cómo conectar productos con las personas. Crearás marcas atractivas, anuncios creativos en redes sociales y planes para que los negocios vendan más.',
        fieldOfWork: 'Agencias de publicidad, departamentos de marketing, redes sociales y tiendas online.',
        skills: ['Creación de marcas', 'Redes sociales y publicidad', 'Entender al cliente', 'Campañas creativas'],
        benefits: [
          { topText: 'Descuento', highlight: '32%', title: 'sobre aranceles', bottomText: 'Aplica a toda la carrera' },
          { topText: 'Inversión', highlight: '$2600', title: 'por semestre', bottomText: '8 semestres presenciales' },
          { topText: 'Empleabilidad', highlight: '93%', title: 'alta demanda', bottomText: 'Agencias, startups, corporaciones' }
        ],
        syllabus: {
          semesters: [
            ['Fundamentos de Investigación', 'Matemática I', 'Contabilidad Básica', 'Fundamentos de Administración', 'Entorno Socioeconómico', 'Introducción al Marketing'],
            ['Estadística I', 'Fundamentos de Contabilidad de Costos', 'Pensamiento Creativo e Innovación', 'Optimización Aplicada a la Administración y Economía', 'Introducción a la Macroeconomía'],
            ['Estadística II', 'Psicología del Consumidor', 'Marketing y Ecosistema Digital', 'Análisis y Diagnóstico Financiero', 'Ética e Interculturalidad'],
            ['Investigación de Mercados Cuantitativa', 'Estrategia de Producto y Precio', 'Legislación Empresarial', 'Gestión de Marcas (Branding)', 'Jesucristo y Aprendizajes Vitales'],
            ['Marketing de Contenidos y Redes Sociales', 'Canales de Distribución y Trade Marketing', 'Publicidad y Comunicación Integrada', 'Administración Estratégica'],
            ['Analítica Web y Métricas Digitales', 'Diseño y Evaluación de Proyectos', 'Growth Marketing y SEO/SEM', 'Experiencia del Cliente (CX/UX)', 'Ecología Integral'],
            ['Seminario de Titulación', 'Marketing B2B y Relacional', 'Neuromarketing', 'Asignatura 1 de Itinerario', 'Asignatura 2 de Itinerario'],
            ['Conocimiento, Palabra y Cambio Social', 'Integración Curricular', 'Marketing Global', 'Habilidades Gerenciales', 'Asignatura 3 de Itinerario', 'Asignatura 4 de Itinerario']
          ],
          subjectDetails: {
            'Introducción al Marketing': 'Fundamentos del marketing moderno, creación de valor y segmentación de clientes.',
            'Psicología del Consumidor': 'Procesos cognitivos, sesgos emocionales y motivadores de compra.',
            'Marketing y Ecosistema Digital': 'Herramientas de publicidad online, embudos de conversión y analítica web.',
            'Gestión de Marcas (Branding)': 'Construcción de identidad, propósito y posicionamiento competitivo de marcas.',
            'Growth Marketing y SEO/SEM': 'Estrategias de experimentación rápida para escalar la adquisición y retención de usuarios.',
            'Neuromarketing': 'Uso de neurociencias para medir respuestas sensoriales y emocionales a estímulos de marca.'
          },
          itineraries: [
            {
              name: 'Marketing Digital y Social Media Growth',
              subjects: ['Estrategia en Redes Sociales y Creación de Contenidos', 'Publicidad Programática y Performance', 'Automatización de Marketing y CRM', 'E-Commerce y Social Selling']
            },
            {
              name: 'Branding y Experiencia del Cliente (CX)',
              subjects: ['Estrategia de Identidad de Marca', 'Customer Journey Mapping', 'Diseño de Servicios y Experiencias', 'Gestión de la Reputación Corporativa']
            }
          ]
        },
        caseStudy: {
          type: 'matching',
          scenario: 'Minijuego: Empareja la Estrategia',
          description: 'Conecta cada red social con la estrategia de marketing más adecuada para vender tus camisetas deportivas.',
          pairs: [
            { left: 'TikTok', right: 'Videos cortos con retos deportivos' },
            { left: 'Instagram', right: 'Fotos de alta calidad de la ropa' },
            { left: 'LinkedIn', right: 'Artículos sobre la tecnología de la tela' }
          ],
          feedback: {
            success: '¡Perfecto! Un buen mercadólogo sabe que cada plataforma requiere un formato distinto.',
            failure: 'Sigue intentando. Recuerda que no todas las redes sociales funcionan para lo mismo.'
          }
        }
      },
      negocios_internacionales: {
        name: 'Negocios Internacionales',
        items: [7, 14, 21, 28, 35, 42],
        description: 'Aprenderás a comprar y vender productos en todo el mundo. Descubrirás cómo enviar mercadería de un país a otro en barcos o aviones, negociar con otras culturas y abrir mercados en el exterior.',
        fieldOfWork: 'Empresas exportadoras e importadoras, aduanas, puertos y multinacionales.',
        skills: ['Comercio con otros países', 'Negociación y acuerdos', 'Logística de envíos', 'Idiomas y culturas'],
        benefits: [
          { topText: 'Descuento', highlight: '34%', title: 'sobre aranceles', bottomText: 'Convenios internacionales' },
          { topText: 'Inversión', highlight: '$2600', title: 'por semestre', bottomText: '8 semestres presenciales' },
          { topText: 'Empleabilidad', highlight: '94%', title: 'alta demanda', bottomText: 'Multinacionales, aduanas, comercio' }
        ],
        syllabus: {
          semesters: [
            ['Fundamentos de Investigación', 'Matemática I', 'Contabilidad Básica', 'Fundamentos de Administración', 'Entorno Socioeconómico', 'Introducción a los Negocios Globales'],
            ['Estadística I', 'Fundamentos de Contabilidad de Costos', 'Pensamiento Creativo e Innovación', 'Optimización Aplicada a la Administración y Economía', 'Introducción a la Macroeconomía'],
            ['Estadística II', 'Comercio Exterior y Aduanas', 'Marketing Global', 'Análisis y Diagnóstico Financiero', 'Ética e Interculturalidad'],
            ['Régimen Aduanero y Aranceles', 'Logística Internacional y Transporte', 'Legislación del Comercio Exterior', 'Contabilidad Internacional', 'Jesucristo y Aprendizajes Vitales'],
            ['Negociaciones Interculturales', 'Finanzas Internacionales', 'Acuerdos y Tratados de Libre Comercio', 'Administración Estratégica Global'],
            ['Gestión de Cadenas de Suministro Globales', 'Diseño y Evaluación de Proyectos', 'Inteligencia de Mercados Internacionales', 'Ecología Integral'],
            ['Seminario de Titulación', 'Derecho Comercial Internacional', 'Internacionalización de MYPIMES', 'Asignatura 1 de Itinerario', 'Asignatura 2 de Itinerario'],
            ['Conocimiento, Palabra y Cambio Social', 'Integración Curricular', 'Geopolítica Económica', 'Habilidades Gerenciales', 'Asignatura 3 de Itinerario', 'Asignatura 4 de Itinerario']
          ],
          subjectDetails: {
            'Introducción a los Negocios Globales': 'Factores geopolíticos, económicos y culturales que definen el comercio transfronterizo.',
            'Comercio Exterior y Aduanas': 'Normativa aduanera, clasificación arancelaria y procesos de desaduanamiento.',
            'Logística Internacional y Transporte': 'Gestión de fletes marítimos, aéreos y terrestres, Incoterms y seguros.',
            'Negociaciones Interculturales': 'Estrategias de negociación aplicadas a culturas comerciales en Asia, Europa y América.',
            'Finanzas Internacionales': 'Cobertura cambiaria, divisas, cartas de crédito y financiamiento de comercio exterior.',
            'Acuerdos y Tratados de Libre Comercio': 'Aprovechamiento de ventajas arancelarias en acuerdos bilaterales y multilaterales.'
          },
          itineraries: [
            {
              name: 'Logística y Cadena de Suministros Global (Supply Chain)',
              subjects: ['Gestión Avanzada de Puertos y Aduanas', 'Distribución Física Internacional', 'Trazabilidad y Tecnologías Logísticas', 'Riesgos en Cadenas Globales']
            },
            {
              name: 'Diplomacia Comercial y Mercados Emergentes',
              subjects: ['Geopolítica y Geoeconomía', 'Comercio con Asia-Pacífico', 'Promoción de Exportaciones', 'Resolución de Disputas Comerciales']
            }
          ]
        },
        caseStudy: {
          type: 'matching',
          scenario: 'Minijuego: Logística Global',
          description: 'Relaciona cada documento aduanero con su función para poder liberar el contenedor en el puerto.',
          pairs: [
            { left: 'Bill of Lading (B/L)', right: 'Contrato de transporte marítimo' },
            { left: 'Certificado de Origen', right: 'Prueba de dónde se fabricó' },
            { left: 'Factura Comercial', right: 'Valor y detalle de la mercancía' }
          ],
          feedback: {
            success: '¡Contenedor liberado! Un negocio internacional exitoso depende de tener los papeles en regla.',
            failure: 'La aduana detuvo la carga. Hay que dominar la documentación internacional.'
          }
        }
      }
    },
    questions: [
      { id: 1, text: '¿Te gustaría armar planes para que una empresa crezca, resolver problemas del día a día y ser el líder del equipo?' },
      { id: 2, text: '¿Te ves organizando eventos increíbles o dirigiendo un hotel para que los turistas tengan el mejor viaje de sus vidas?' },
      { id: 3, text: '¿Te llama la atención llevar las cuentas exactas del dinero de un negocio para saber cuánto se gana y cuánto se gasta?' },
      { id: 4, text: '¿Te interesaría investigar por qué las cosas suben de precio, por qué hay desempleo o cómo un país puede tener más dinero?' },
      { id: 5, text: '¿Te imaginas invirtiendo en la bolsa de valores, calculando riesgos o decidiendo en qué negocios es mejor poner el dinero?' },
      { id: 6, text: '¿Te gustaría saber por qué la gente compra ciertas marcas, y pensar en ideas creativas para vender mejor un producto nuevo?' },
      { id: 7, text: '¿Te atrae la idea de viajar, cerrar tratos con personas de otros países para exportar productos y entender las aduanas?' },
      { id: 8, text: '¿Sientes que serías bueno siendo el líder de un grupo, asegurando que todos trabajen bien juntos para lograr una meta?' },
      { id: 9, text: '¿Te gustaría inventar rutas turísticas súper divertidas pero que también cuiden la naturaleza y la cultura del lugar?' },
      { id: 10, text: '¿Te ves revisando documentos financieros como un detective para asegurarte de que nadie esté haciendo trampas con el dinero?' },
      { id: 11, text: '¿Te interesa usar matemáticas para entender cómo las decisiones del gobierno sobre impuestos y leyes afectan a la gente?' },
      { id: 12, text: '¿Te gustaría aprender cómo saber exactamente cuánto vale una empresa y cómo ayudarla a pagar sus deudas sin quebrar?' },
      { id: 13, text: '¿Disfrutas pensando en cómo hacer que una marca sea famosa usando publicidad, redes sociales y campañas súper creativas?' },
      { id: 14, text: '¿Te gustaría organizar todos los pasos y papeles necesarios para llevar productos de un país a otro de forma segura?' },
      { id: 15, text: '¿Te gustaría inventar modelos de negocios nuevos, cambiar cómo funcionan las empresas y liderar proyectos de innovación?' },
      { id: 16, text: '¿Te parece emocionante planificar congresos, fiestas gigantes o reuniones internacionales para que todo salga perfecto?' },
      { id: 17, text: '¿Te interesaría crear reglas internas en una empresa para asegurar que todos cumplan la ley y se paguen los impuestos a tiempo?' },
      { id: 18, text: '¿Te gustaría entender cómo compiten las grandes empresas entre ellas y cómo deciden a qué precio vender sus cosas?' },
      { id: 19, text: '¿Te imaginas usando modelos matemáticos para proteger el dinero de un banco y evitar que pierdan plata si las cosas salen mal?' },
      { id: 20, text: '¿Te atrae crear anuncios en internet, analizar cuántas personas hacen clic en tus videos y lograr que más gente compre online?' },
      { id: 21, text: '¿Te gustaría buscar la ruta más rápida y barata en barcos o aviones para llevar productos desde China hasta Ecuador?' },
      { id: 22, text: '¿Sientes que eres bueno viendo qué está saliendo mal en un grupo de trabajo y proponiendo soluciones para hacer todo más rápido?' },
      { id: 23, text: '¿Te gustaría enseñar a las comunidades locales cómo ganar dinero organizando tours en sus pueblos sin dañar su entorno?' },
      { id: 24, text: '¿Te gustaría calcular exactamente cuánto cuesta fabricar un producto para decidir a qué precio venderlo y ganar dinero?' },
      { id: 25, text: '¿Te llama la atención pensar en cómo la falta de agua, comida o dinero afecta a las familias y proponer soluciones para ayudar?' },
      { id: 26, text: '¿Te gustaría ayudar a empresas nuevas (startups) a conseguir dinero de inversionistas grandes o a comprar otras compañías?' },
      { id: 27, text: '¿Disfrutas pensando si un producto debería venderse en supermercados o tiendas exclusivas, y decidir a qué precio ponerlo?' },
      { id: 28, text: '¿Te interesaría estudiar los acuerdos y reglas comerciales que firman diferentes países para ayudarlos a hacer buenos negocios?' },
      { id: 29, text: '¿Te imaginas armando un "plan B" súper rápido para salvar a una empresa si de repente ocurre una crisis económica grave?' },
      { id: 30, text: '¿Te atrae asegurarte de que los huéspedes de un hotel tengan la mejor comida y el mejor servicio posible durante sus vacaciones?' },
      { id: 31, text: '¿Te gustaría trabajar junto a abogados revisando cuentas de empresas para probar en un juicio si alguien se robó dinero?' },
      { id: 32, text: '¿Te gustaría trabajar en bancos o en el gobierno haciendo reportes importantes para ayudar al país a crecer y crear empleo?' },
      { id: 33, text: '¿Te llama la atención calcular si una idea de negocio realmente va a dar dinero o si es mejor no arriesgarse a intentarlo?' },
      { id: 34, text: '¿Te gustaría analizar qué hace que los clientes se queden enamorados de una marca y la sigan comprando por años?' },
      { id: 35, text: '¿Te imaginas pensando en un plan para abrir la primera tienda de una empresa ecuatoriana famosa en Estados Unidos o Europa?' },
      { id: 36, text: '¿Te gustaría tener pantallas llenas de datos e indicadores para ver si todos en tu empresa están logrando sus metas de ventas?' },
      { id: 37, text: '¿Disfrutarías armando una campaña publicitaria enorme para convencer a turistas de todo el mundo de que visiten el Ecuador?' },
      { id: 38, text: '¿Sientes que eres muy ordenado y te gustaría revisar cuadernos de cuentas y registros del banco al final del año para que todo cuadre?' },
      { id: 39, text: '¿Te llama la atención usar programas de computadora para analizar muchos datos y predecir qué pasará con la economía en el futuro?' },
      { id: 40, text: '¿Te interesaría ser la persona que decide qué hacer con las ganancias del año en una empresa para que los dueños estén contentos?' },
      { id: 41, text: '¿Te encantaría inventar productos totalmente nuevos viendo qué problemas tiene la gente y qué es lo que más necesitan hoy?' },
      { id: 42, text: '¿Sientes que serías súper hábil hablando y negociando con personas de otras culturas, respetando sus costumbres y logrando tratos?' }
    ]
  },

  // 2. SOSTENIBILIDAD Y RECURSOS NATURALES (24 ítems, 4 carreras)
  sostenibilidad: {
    macroareaId: 'sostenibilidad',
    title: 'Sostenibilidad y Recursos Naturales',
    faculty: 'Facultad de Ciencias Exactas y Naturales',
    careers: {
      biologia: {
        name: 'Biología',
        items: [1, 5, 9, 13, 17, 21],
        description: 'Explorarás la naturaleza, los animales y las plantas. Aprenderás cómo funcionan los ecosistemas y trabajarás en expediciones de campo o en laboratorio para proteger el medio ambiente y cuidar las especies del planeta.',
        fieldOfWork: 'Parques nacionales y reservas, centros de rescate animal, ONGs ambientales y laboratorios de investigación.',
        skills: ['Trabajo de campo', 'Cuidado de especies', 'Protección ambiental', 'Investigación científica'],
        caseStudy: {
          scenario: 'El profesor de ciencias comenta que hay menos mariposas este año en el jardín del colegio.',
          question: '¿Qué acción de investigación haces?',
          options: [
            { text: 'Anotar cuántas mariposas hay cada día y buscar si una nueva planta o cambio en el clima las está alejando.', isCorrect: true },
            { text: 'Traer mariposas de otro lado y soltarlas.', isCorrect: false },
            { text: 'No hacer nada y esperar a que vuelvan solas.', isCorrect: false }
          ]
        }
      },
      microbiologia: {
        name: 'Microbiología',
        items: [2, 6, 10, 14, 18, 22],
        description: 'Descubrirás el mundo diminuto de las bacterias, hongos y virus. Aprenderás a usar microorganismos buenos para fabricar mejores alimentos, medicinas y limpiar ríos o suelos contaminados.',
        fieldOfWork: 'Industria de alimentos y bebidas, laboratorios farmacéuticos y centros de control ambiental.',
        skills: ['Uso de microscopios', 'Seguridad en laboratorio', 'Biotecnología', 'Control de calidad'],
        caseStudy: {
          scenario: 'El huerto del colegio tiene una plaga y las plantas se están marchitando muy rápido.',
          question: '¿Cómo aplicas la ciencia para salvarlas?',
          options: [
            { text: 'Tomar muestras de la tierra para analizar si hay bacterias u hongos malos y buscar un tratamiento adecuado.', isCorrect: true },
            { text: 'Echarles químicos fuertes y pesticidas sin averiguar qué tienen.', isCorrect: false },
            { text: 'Arrancar todas las plantas y botarlas.', isCorrect: false }
          ]
        }
      },
      ciencias_biomedicas: {
        name: 'Ciencias Biomédicas',
        items: [3, 7, 11, 15, 19, 23],
        description: 'Investigarás cómo funciona el cuerpo humano y por qué nos enfermamos a nivel celular y genético. Ayudarás a descubrir tratamientos, vacunas y medicinas para mejorar la salud de las personas.',
        fieldOfWork: 'Laboratorios de investigación médica, centros farmacéuticos y clínicas de diagnóstico molecular.',
        skills: ['Estudio del ADN y células', 'Defensas del cuerpo', 'Creación de medicinas', 'Ciencia de la salud'],
        caseStudy: {
          scenario: 'Para la feria de ciencias, vas a explicar por qué algunas familias tienen más tendencia a ser alérgicas.',
          question: '¿Qué enfoque le das a tu proyecto?',
          options: [
            { text: 'Hacer una maqueta que explique cómo la herencia genética y el ADN funcionan en el sistema inmunológico.', isCorrect: true },
            { text: 'Solo decir que es culpa del clima de la ciudad.', isCorrect: false },
            { text: 'Decir que es porque comieron muchos dulces de niños.', isCorrect: false }
          ]
        }
      },
      ciencia_datos: {
        name: 'Ciencia de Datos',
        items: [4, 8, 12, 16, 20, 24],
        description: 'Aprenderás a usar computadoras y matemáticas para encontrar respuestas útiles en grandes cantidades de información. Ayudarás a empresas a predecir tendencias y tomar mejores decisiones con inteligencia artificial.',
        fieldOfWork: 'Empresas de tecnología, bancos, telecomunicaciones y cualquier organización que trabaje con datos.',
        skills: ['Programación y datos', 'Inteligencia artificial', 'Encontrar patrones ocultos', 'Gráficos interactivos'],
        caseStudy: {
          scenario: 'Quieres predecir qué equipo del colegio ganará las olimpiadas deportivas este año.',
          question: '¿Cómo usas los datos para descubrirlo?',
          options: [
            { text: 'Recopilar los resultados y estadísticas de años anteriores y armar un modelo matemático para encontrar patrones.', isCorrect: true },
            { text: 'Preguntarle a tus amigos qué equipo les cae mejor.', isCorrect: false },
            { text: 'Adivinar lanzando una moneda.', isCorrect: false }
          ]
        }
      }
    },
    questions: [
      { id: 1, text: '¿Te apasiona estudiar los animales, las plantas y pensar en formas de proteger la naturaleza y los océanos?' },
      { id: 2, text: '¿Sientes curiosidad por usar microscopios para descubrir cómo viven las bacterias, los virus y los hongos?' },
      { id: 3, text: '¿Te atrae investigar cómo funcionan las células de nuestro cuerpo para entender por qué nos enfermamos?' },
      { id: 4, text: '¿Te resultaría interesante usar matemáticas y computadoras para encontrar respuestas ocultas en miles de datos?' },
      { id: 5, text: '¿Te entusiasma la idea de salir al campo, explorar montañas o selvas para recolectar hojas raras o ver animales libres?' },
      { id: 6, text: '¿Te interesa usar seres microscópicos para limpiar ríos contaminados o ayudar a crear mejores alimentos?' },
      { id: 7, text: '¿Te gustaría trabajar en un laboratorio inventando nuevas vacunas, medicinas o terapias para salvar vidas?' },
      { id: 8, text: '¿Disfrutas organizando mucha información en la computadora y enseñándole a las máquinas a pensar (Inteligencia Artificial)?' },
      { id: 9, text: '¿Te motiva entender cómo evolucionaron los animales y cómo el cambio climático está destruyendo sus hogares?' },
      { id: 10, text: '¿Te llama la atención investigar por qué algunas enfermedades son tan fuertes y cómo podemos detener a los virus?' },
      { id: 11, text: '¿Te resulta increíble estudiar el ADN y descubrir cómo nuestros propios genes nos pueden proteger de estar enfermos?' },
      { id: 12, text: '¿Te visualizas creando gráficos y pantallas en la computadora que ayuden a la gente a tomar decisiones importantes?' },
      { id: 13, text: '¿Te interesa clasificar especies de plantas o animales y armar planes urgentes para evitar que se extingan?' },
      { id: 14, text: '¿Te atrae asegurarte de que la comida que compramos o las medicinas que tomamos estén totalmente libres de bacterias malas?' },
      { id: 15, text: '¿Te motiva probar en el laboratorio si un nuevo descubrimiento médico realmente puede curar a las personas?' },
      { id: 16, text: '¿Te atrae usar programas de computadora especiales para organizar números y datos desordenados hasta que tengan sentido?' },
      { id: 17, text: '¿Te gustaría investigar cuánta contaminación hay en un bosque o en un lago para exigir que lo limpien y protejan?' },
      { id: 18, text: '¿Te apasiona la idea de cambiar los genes de una planta o bacteria para crear combustibles que no contaminen?' },
      { id: 19, text: '¿Sientes interés por entender cómo funcionan las defensas del cuerpo humano y buscar la forma de hacerlas más fuertes?' },
      { id: 20, text: '¿Te resultaría genial usar la computadora para simular cómo se esparciría un virus o cómo cambiaría el clima en 50 años?' },
      { id: 21, text: '¿Disfrutas viendo documentales sobre cómo se comportan los leones, los tiburones o cualquier otro animal en su hábitat?' },
      { id: 22, text: '¿Te ves trabajando con trajes de protección especial estudiando bacterias súper extrañas que viven en la tierra o en el agua?' },
      { id: 23, text: '¿Te gustaría investigar cómo un veneno o una medicina fuerte afecta a las células de una persona?' },
      { id: 24, text: '¿Te interesa inventar formas en las que una Inteligencia Artificial pueda ayudar a los científicos a hacer descubrimientos más rápido?' }
    ]
  },

  // 3. CIENCIAS DE LA SALUD Y EL BIENESTAR (48 ítems, 8 carreras)
  salud: {
    macroareaId: 'salud',
    title: 'Ciencias de la Salud y el Bienestar',
    faculty: 'Facultad de Medicina y Ciencias de la Salud',
    careers: {
      enfermeria: {
        name: 'Enfermería',
        items: [1, 9, 17, 25, 33, 41],
        description: 'Aprenderás a cuidar a los pacientes con empatía y profesionalismo, administrar tratamientos y actuar con calma en emergencias para ayudar a salvar vidas.',
        skills: ['Cuidar pacientes', 'Manejo de emergencias', 'Enseñar salud'],
        caseStudy: {
          scenario: 'Un compañero se desmaya de repente durante la formación del colegio.',
          question: '¿Qué haces de inmediato para ayudarlo?',
          options: [
            { text: 'Acomodarlo con cuidado, levantarle las piernas para mejorar la circulación y pedir ayuda a un adulto.', isCorrect: true },
            { text: 'Darle agua a la fuerza aunque esté inconsciente.', isCorrect: false },
            { text: 'Quedarte mirando sin hacer nada hasta que llegue el profesor.', isCorrect: false }
          ]
        }
      },
      fisioterapia: {
        name: 'Fisioterapia',
        items: [2, 10, 18, 26, 34, 42],
        description: 'Aprenderás a recuperar el movimiento y aliviar el dolor de personas con lesiones o cirugías, usando ejercicios guiados, terapias físicas y rehabilitación especializada.',
        skills: ['Entender el cuerpo en movimiento', 'Recuperación física', 'Terapias manuales'],
        caseStudy: {
          scenario: 'Un amigo del equipo de deportes se lesiona la rodilla y le cuesta caminar.',
          question: '¿Cómo le ayudas a recuperarse poco a poco?',
          options: [
            { text: 'Ayudarle a hacer ejercicios suaves y ponerle hielo para bajar la hinchazón.', isCorrect: true },
            { text: 'Decirle que salga a correr de inmediato para que "caliente" el músculo.', isCorrect: false },
            { text: 'Decirle que no mueva la pierna en absoluto por varios meses.', isCorrect: false }
          ]
        }
      },
      nutricion: {
        name: 'Nutrición y Dietética',
        items: [3, 11, 19, 27, 35, 43],
        description: 'Aprenderás cómo los alimentos impactan la salud y el rendimiento. Diseñarás planes de alimentación saludables para prevenir enfermedades y mejorar la calidad de vida.',
        skills: ['Diseñar dietas', 'Entender el metabolismo', 'Enseñar a comer sano'],
        caseStudy: {
          scenario: 'Un amigo quiere tener más energía para sus entrenamientos porque siempre se cansa muy rápido.',
          question: '¿Qué consejo de alimentación le das?',
          options: [
            { text: 'Recomendarle comer carbohidratos saludables y suficiente proteína en lugar de saltarse comidas.', isCorrect: true },
            { text: 'Decirle que coma puros dulces y bebidas energizantes antes de entrenar.', isCorrect: false },
            { text: 'Aconsejarle que deje de comer todo el día para sentirse "más ligero".', isCorrect: false }
          ]
        }
      },
      laboratorio_clinico: {
        name: 'Laboratorio Clínico',
        items: [4, 12, 20, 28, 36, 44],
        description: 'Análisis de muestras biológicas, banco de sangre, control hematológico y biología molecular diagnóstica.',
        skills: ['Análisis de sangre', 'Uso de tecnología médica', 'Cuidado y exactitud'],
        caseStudy: {
          scenario: 'En clase de biología están viendo muestras de agua estancada en el microscopio.',
          question: '¿Qué es lo que más te llama la atención?',
          options: [
            { text: 'Identificar qué tipos de microorganismos hay en el agua y entender cómo se comportan.', isCorrect: true },
            { text: 'Mirar por el microscopio sin prestar atención a los detalles.', isCorrect: false },
            { text: 'No participar porque no te gusta usar equipos de laboratorio.', isCorrect: false }
          ]
        }
      },
      medicina: {
        name: 'Medicina',
        items: [5, 13, 21, 29, 37, 45],
        description: 'Diagnóstico médico diferencial, fisiopatología profunda, terapéutica farmacológica y quirúrgica.',
        skills: ['Descubrir enfermedades', 'Curar pacientes', 'Salvar vidas en emergencia'],
        caseStudy: {
          scenario: 'En un paseo del colegio, alguien empieza a sentir un dolor muy fuerte en el pecho y le cuesta respirar.',
          question: '¿Qué es lo más importante en ese momento?',
          options: [
            { text: 'Mantener la calma, llamar de urgencia al 911 y describir claramente los síntomas para que llegue ayuda.', isCorrect: true },
            { text: 'Decirle que se tome una pastilla para el dolor de cabeza y que se acueste a dormir.', isCorrect: false },
            { text: 'Ignorarlo pensando que solo está exagerando.', isCorrect: false }
          ]
        }
      },
      veterinaria: {
        name: 'Medicina Veterinaria',
        items: [6, 14, 22, 30, 38, 46],
        description: 'Clínica y cirugía de animales domésticos, fauna silvestre, producción pecuaria y salud pública zoonótica.',
        skills: ['Operar animales', 'Salud animal y humana', 'Entender su comportamiento'],
        caseStudy: {
          scenario: 'Encuentras a un perrito callejero que parece tener fiebre y está muy débil.',
          question: '¿Cómo actúas para ayudarlo?',
          options: [
            { text: 'Llevarlo a un veterinario o refugio, evitar que contagie a otros perros y asegurarte de que reciba tratamiento.', isCorrect: true },
            { text: 'Darle medicina para humanos sin saber qué enfermedad tiene.', isCorrect: false },
            { text: 'Dejarlo en la calle esperando que se cure solo mágicamente.', isCorrect: false }
          ]
        }
      },
      odontologia: {
        name: 'Odontología',
        items: [7, 15, 23, 31, 39, 47],
        description: 'Aprenderás a cuidar la salud de la boca, prevenir caries, alinear dientes y devolver la sonrisa y la confianza a tus pacientes con técnicas modernas.',
        skills: ['Habilidad con las manos', 'Salud bucal', 'Mejorar sonrisas'],
        caseStudy: {
          scenario: 'A un niño pequeño se le rompe un pedacito de diente jugando en el parque y le duele mucho.',
          question: '¿Qué crees que debería hacer el dentista?',
          options: [
            { text: 'Limpiar bien la zona, quitar el dolor y arreglar el diente para salvarlo y que vuelva a quedar sano.', isCorrect: true },
            { text: 'Sacarle el diente completo de inmediato sin intentar arreglarlo primero.', isCorrect: false },
            { text: 'Solo decirle que se lave bien los dientes con enjuague.', isCorrect: false }
          ]
        }
      },
      psicologia_clinica: {
        name: 'Psicología Clínica',
        items: [8, 16, 24, 32, 40, 48],
        description: 'Aprenderás a comprender la mente humana, las emociones y el comportamiento, brindando apoyo y terapia a personas que enfrentan ansiedad, depresión o problemas personales.',
        skills: ['Saber escuchar', 'Entender la mente', 'Terapias emocionales'],
        caseStudy: {
          scenario: 'Un amigo te cuenta que se siente muy ansioso últimamente y tiene miedo de salir a lugares concurridos.',
          question: '¿Cómo tratas de ayudarlo inicialmente?',
          options: [
            { text: 'Escucharlo sin juzgar, explicarle que es normal sentir ansiedad y animarlo a buscar apoyo profesional paso a paso.', isCorrect: true },
            { text: 'Decirle que está exagerando y que sus miedos son tonterías.', isCorrect: false },
            { text: 'Decirle que se quede encerrado en su cuarto para que no sufra.', isCorrect: false }
          ]
        }
      }
    },
    questions: [
      { id: 1, text: '¿Te gustaría cuidar a las personas cuando están en un hospital y ayudarlas paso a paso a que se sientan mejor?' },
      { id: 2, text: '¿Te llama la atención cómo funcionan nuestros huesos y músculos, y cómo podemos curarlos si se lastiman?' },
      { id: 3, text: '¿Te interesa aprender qué comer para estar súper sano y armar dietas especiales para personas enfermas?' },
      { id: 4, text: '¿Preferirías trabajar en un laboratorio revisando muestras de sangre en lugar de atender pacientes frente a frente?' },
      { id: 5, text: '¿Sientes mucha curiosidad por saber exactamente por qué nos enfermamos y qué hacen las medicinas en el cuerpo?' },
      { id: 6, text: '¿Te gustaría saber cómo curar a perritos, gatitos o animales salvajes cuando están enfermos o necesitan una cirugía?' },
      { id: 7, text: '¿Tienes buen pulso en las manos y te gustaría usar herramientas para arreglar dientes y cuidar sonrisas?' },
      { id: 8, text: '¿Te interesa mucho entender por qué las personas se deprimen, sienten ansiedad o actúan de formas extrañas?' },
      { id: 9, text: '¿Sientes que tendrías paciencia para tomar la presión, dar medicinas y cuidar a abuelitos o personas muy delicadas?' },
      { id: 10, text: '¿Te gustaría usar masajes, ejercicios o electricidad suave para curar a alguien que tuvo un accidente?' },
      { id: 11, text: '¿Te da curiosidad saber qué suplementos o comidas necesitan los deportistas para ganar competencias sin enfermarse?' },
      { id: 12, text: '¿Te fascina usar microscopios para encontrar bacterias ocultas en una muestra y descubrir qué enfermedad tiene alguien?' },
      { id: 13, text: '¿Te ves en una sala de emergencias tomando decisiones rápidas para salvarle la vida a una persona grave?' },
      { id: 14, text: '¿Estarías dispuesto a operar animales, limpiarles heridas o ponerles inyecciones, incluso si son agresivos o grandes?' },
      { id: 15, text: '¿Te atrae arreglar caries, limpiar encías y asegurarte de que la boca de una persona esté totalmente sana?' },
      { id: 16, text: '¿Te sientes cómodo escuchando los problemas de tus amigos y crees que serías bueno dándoles terapia para que se sientan mejor?' },
      { id: 17, text: '¿Te gustaría dar charlas en comunidades o colegios para enseñar a la gente cómo cuidar su salud y no enfermarse?' },
      { id: 18, text: '¿Te motiva ayudar a que una persona vuelva a caminar después de un accidente fuerte o una enfermedad grave?' },
      { id: 19, text: '¿Te gustaría calcular exactamente cuántas vitaminas y proteínas necesita una persona que está conectada a tubos en el hospital?' },
      { id: 20, text: '¿Disfrutas siendo súper detallista y cuidadoso al hacer pruebas químicas para que los resultados sean 100% exactos?' },
      { id: 21, text: '¿Te atrae revisar radiografías o ecos y juntar las pistas de los síntomas como un detective para saber qué tiene el paciente?' },
      { id: 22, text: '¿Te motiva evitar que las enfermedades de los animales (como la rabia) se contagien a los humanos?' },
      { id: 23, text: '¿Te resulta interesante usar taladros pequeñitos y materiales especiales para reconstruir un diente roto?' },
      { id: 24, text: '¿Te atrae hacer tests o juegos de memoria a las personas para descubrir cómo funciona su cerebro y personalidad?' },
      { id: 25, text: '¿Sientes que serías un gran apoyo emocional para personas que están muy graves en cuidados intensivos?' },
      { id: 26, text: '¿Te gustaría trabajar con un equipo de fútbol profesional ayudando a los jugadores a que no se lesionen?' },
      { id: 27, text: '¿Te motiva crear proyectos para que los niños en las escuelas dejen de comer comida chatarra y crezcan fuertes?' },
      { id: 28, text: '¿Te resultaría genial mirar una muestra de sangre y saber decirle al médico qué tipo de virus tiene el paciente?' },
      { id: 29, text: '¿Te apasiona la idea de investigar nuevas enfermedades y recetar las mejores medicinas para salvar vidas?' },
      { id: 30, text: '¿Te atrae trabajar en granjas asegurándote de que las vacas y gallinas estén sanas y tengan buena cría?' },
      { id: 31, text: '¿Te motiva saber que al arreglarle los dientes a alguien le estás devolviendo la confianza para sonreír?' },
      { id: 32, text: '¿Te gustaría ayudar a las personas a superar traumas, miedos fuertes o la pérdida de un ser querido?' },
      { id: 33, text: '¿Te atrae asegurarte de que los pacientes en el hospital estén cómodos, seguros y sin dolor durante las noches?' },
      { id: 34, text: '¿Preferirías un trabajo donde te la pases en movimiento, ayudando a las personas a hacer ejercicios para recuperarse?' },
      { id: 35, text: '¿Te resulta interesante leer las etiquetas de la comida del súper y entender exactamente qué químicos y vitaminas tienen?' },
      { id: 36, text: '¿Te sentirías cómodo usando trajes súper seguros para no contagiarte mientras manejas tubos con virus peligrosos?' },
      { id: 37, text: '¿Te imaginas aguantando largas noches de turno en el hospital, operando pacientes o atendiendo urgencias?' },
      { id: 38, text: '¿Te visualizas siendo el jefe de una clínica para perritos o inspeccionando la comida que comen los animales?' },
      { id: 39, text: '¿Te interesa hacer tratamientos largos como sacar una muela del juicio o poner dientes postizos súper precisos?' },
      { id: 40, text: '¿Te apasiona investigar por qué soñamos, cómo aprendemos cosas nuevas o cómo funciona la memoria?' },
      { id: 41, text: '¿Te ves siendo el primero en recibir a los heridos en una ambulancia, curándolos rápido y calmándolos?' },
      { id: 42, text: '¿Te interesa ayudar a niños que nacen con problemas para moverse o a abuelitos que les cuesta respirar?' },
      { id: 43, text: '¿Te ves siendo como un "entrenador" que anima y convence a la gente de dejar la comida chatarra para siempre?' },
      { id: 44, text: '¿Te interesa saber cómo funciona la donación de sangre y asegurarte de que la sangre correcta llegue a quien la necesita?' },
      { id: 45, text: '¿Te motiva tener que pensar muchísimo y armar un rompecabezas mental cuando un paciente tiene síntomas que nadie entiende?' },
      { id: 46, text: '¿Te apasiona poner vacunas, dar desparasitantes y cuidar a un montón de cachorritos o terneros para que crezcan sanos?' },
      { id: 47, text: '¿Te visualizas poniendo brackets súper modernos para dejar los dientes rectitos y perfectos?' },
      { id: 48, text: '¿Te ves en un consultorio tranquilo, tomando notas mientras ayudas a alguien a resolver sus mayores problemas emocionales?' }
    ]
  },

  // 4. CIENCIAS SOCIALES Y HUMANIDADES (36 ítems, 6 carreras)
  sociales: {
    macroareaId: 'sociales',
    title: 'Ciencias Sociales y Humanidades',
    faculty: 'Facultad de Jurisprudencia, Comunicación y Ciencias Humanas',
    careers: {
      comunicacion: {
        name: 'Comunicación',
        items: [1, 7, 13, 19, 25, 31],
        description: 'Aprenderás a contar historias que informen e impacten a través de medios digitales, televisión, radio y redes sociales, gestionando noticias y contenidos creativos.',
        skills: ['Contar historias', 'Manejo de medios', 'Redes sociales'],
        caseStudy: {
          scenario: 'Un rumor falso sobre el colegio se hace viral en redes sociales y todos están preocupados.',
          question: '¿Qué plan de comunicación ejecutas?',
          options: [
            { text: 'Averiguar la verdad, publicar información correcta y tranquilizar a los estudiantes de forma clara y rápida.', isCorrect: true },
            { text: 'Borrar los comentarios negativos y bloquear a todos.', isCorrect: false },
            { text: 'Hacer como que no pasa nada hasta que se olviden.', isCorrect: false }
          ]
        }
      },
      linguistica: {
        name: 'Lingüística',
        items: [2, 8, 14, 20, 26, 32],
        description: 'Evolución de lenguas, revitalización de idiomas originarios, psicolingüística y procesamiento de lenguaje natural (PLN).',
        skills: ['Estudio de idiomas', 'Salvar lenguas antiguas', 'Análisis de textos'],
        caseStudy: {
          scenario: 'En tu comunidad, los abuelos hablan un idioma antiguo que los jóvenes ya no entienden.',
          question: '¿Cómo ayudas a que no se pierda?',
          options: [
            { text: 'Grabar a los abuelos hablando, armar un pequeño diccionario y enseñarle a los niños palabras básicas.', isCorrect: true },
            { text: 'Asumir que los idiomas antiguos ya no sirven para nada.', isCorrect: false },
            { text: 'Obligar a todos a hablarlo sin explicarles qué significa.', isCorrect: false }
          ]
        }
      },
      educacion_inicial: {
        name: 'Educación Inicial',
        items: [3, 9, 15, 21, 27, 33],
        description: 'Neurodesarrollo infantil, estimulación temprana, pedagogías inclusivas y juego transformador.',
        skills: ['Cuidar niños', 'Enseñar jugando', 'Apoyo emocional'],
        caseStudy: {
          scenario: 'En tu grupo, hay un niño pequeño muy tímido que se le dificulta jugar y moverse con los demás.',
          question: '¿Cómo lo integras al grupo?',
          options: [
            { text: 'Inventar un juego divertido donde todos tengan que ayudarse, para que poco a poco gane confianza y seguridad.', isCorrect: true },
            { text: 'Dejarlo solo en una esquina.', isCorrect: false },
            { text: 'Obligarlo a jugar aunque se ponga a llorar.', isCorrect: false }
          ]
        }
      },
      fpe: {
        name: 'Filosofía, Política y Economía (FPE)',
        items: [4, 10, 16, 22, 28, 34],
        description: 'Diseño de políticas públicas, filosofía moral, teoría de la justicia distributiva y análisis político.',
        skills: ['Pensamiento profundo', 'Mejorar la sociedad', 'Ideas y filosofía'],
        caseStudy: {
          scenario: 'El colegio quiere poner reglas más estrictas para el uso de celulares, pero algunos estudiantes creen que es injusto.',
          question: '¿Cómo analizas esta situación?',
          options: [
            { text: 'Pensar en el impacto en las notas y los derechos de los estudiantes para proponer reglas que beneficien a todos.', isCorrect: true },
            { text: 'Apoyar la regla sin escuchar la opinión de tus compañeros.', isCorrect: false },
            { text: 'Organizar una protesta sin proponer soluciones alternativas.', isCorrect: false }
          ]
        }
      },
      derecho: {
        name: 'Derecho',
        items: [5, 11, 17, 23, 29, 35],
        description: 'Aprenderás las leyes para defender la justicia, resolver conflictos entre personas o empresas y proteger los derechos fundamentales de todos.',
        skills: ['Defender ideas', 'Hablar en juicios', 'Conocer las leyes'],
        caseStudy: {
          scenario: 'Acusan a un compañero de copiar en un examen, pero él asegura que es inocente.',
          question: '¿Cómo lo defiendes o resuelves el problema?',
          options: [
            { text: 'Pedir que se revise bien el examen, escuchar sus argumentos y buscar pruebas antes de juzgar.', isCorrect: true },
            { text: 'Decir que se rinda y acepte la culpa.', isCorrect: false },
            { text: 'Culpar a otra persona al azar para salvar a tu amigo.', isCorrect: false }
          ]
        }
      },
      relaciones_internacionales: {
        name: 'Relaciones Internacionales',
        items: [6, 12, 18, 24, 30, 36],
        description: 'Aprenderás sobre política mundial, diplomacia y acuerdos entre países para representar al Ecuador, negociar tratados y promover la cooperación internacional.',
        skills: ['Relaciones internacionales', 'Entender el mundo', 'Hacer acuerdos'],
        caseStudy: {
          scenario: 'Dos grupos de tu colegio están peleados porque ambos quieren usar la cancha al mismo tiempo.',
          question: '¿Cómo actúas como mediador?',
          options: [
            { text: 'Reunir a los líderes de cada grupo, escuchar a ambas partes y armar un horario justo para todos.', isCorrect: true },
            { text: 'Decir que nadie puede usar la cancha nunca más.', isCorrect: false },
            { text: 'Ponerte del lado de tus amigos e ignorar al otro grupo.', isCorrect: false }
          ]
        }
      }
    },
    questions: [
      { id: 1, text: '¿Te gustaría investigar y escribir noticias, crear videos para YouTube o presentar un programa de radio o televisión?' },
      { id: 2, text: '¿Sientes curiosidad por saber cómo surgieron los diferentes idiomas y cómo las palabras pueden cambiar nuestra forma de pensar?' },
      { id: 3, text: '¿Te apasiona inventar juegos, cantar canciones y enseñar a niños pequeñitos para ayudarles a crecer y aprender cosas nuevas?' },
      { id: 4, text: '¿Te motiva debatir sobre temas profundos, como qué es lo bueno y lo malo, o si el dinero y el poder se reparten de forma justa?' },
      { id: 5, text: '¿Te resulta interesante estudiar las leyes para defender a alguien en un juicio o pelear por los derechos de otras personas?' },
      { id: 6, text: '¿Te atrae saber por qué los países se pelean o hacen la paz, y cómo organizaciones como la ONU ayudan a resolver problemas mundiales?' },
      { id: 7, text: '¿Te gustaría ser la persona que mejora la imagen de una empresa o famoso, escribiendo comunicados y manejando sus relaciones públicas?' },
      { id: 8, text: '¿Te interesa saber por qué la gente habla distinto dependiendo de dónde vive o de su edad, y cómo se inventan palabras nuevas?' },
      { id: 9, text: '¿Te visualizas trabajando todos los días con niños de guardería, enseñándoles a compartir, hablar y moverse mejor?' },
      { id: 10, text: '¿Te gustaría pensar en nuevas leyes o proyectos para el gobierno, asegurándote de que el país tenga dinero para hacerlos realidad?' },
      { id: 11, text: '¿Te atrae la idea de ponerte un traje formal y hablar frente a un juez usando las leyes para convencerlo de que tienes la razón?' },
      { id: 12, text: '¿Te imaginas viajando y trabajando en la embajada de Ecuador en otro país, ayudando a hacer acuerdos internacionales?' },
      { id: 13, text: '¿Disfrutas viendo qué tipo de videos se hacen virales en TikTok o Instagram y pensando por qué a la gente le gustan tanto?' },
      { id: 14, text: '¿Te llama la atención enseñar a las computadoras a hablar y entender nuestro idioma (como Siri o Alexa)?' },
      { id: 15, text: '¿Sientes que serías súper paciente y cariñoso diseñando salones de clase divertidos y seguros para los niños más chiquitos?' },
      { id: 16, text: '¿Te apasiona discutir si está bien que algunas personas sean súper ricas mientras otras no tienen qué comer, y cómo podríamos cambiar eso?' },
      { id: 17, text: '¿Te interesa resolver problemas reales usando la ley, como qué pasa cuando dos personas se divorcian o alguien roba en una empresa?' },
      { id: 18, text: '¿Te resultaría interesante estudiar cómo los países se ponen de acuerdo para vender y comprar cosas entre ellos sin pelear?' },
      { id: 19, text: '¿Te atrae analizar cómo las "fake news" o noticias falsas pueden engañar a miles de personas y hacer que cambien de opinión?' },
      { id: 20, text: '¿Te motivaría viajar para conocer a abuelitos de comunidades lejanas y grabar su idioma antiguo para que nunca se pierda u olvide?' },
      { id: 21, text: '¿Te gustaría hablar con los papás de niños pequeños para darles consejos sobre cómo criarlos con amor y sin gritos?' },
      { id: 22, text: '¿Te atrae leer los libros de los pensadores más famosos de la historia para intentar entender y resolver los problemas de hoy?' },
      { id: 23, text: '¿Sientes interés por investigar si la policía o el gobierno están haciendo trampa y romper las reglas para proteger a las personas?' },
      { id: 24, text: '¿Te interesa investigar cómo frenar guerras, detener la creación de armas nucleares y lograr que el mundo sea más pacífico?' },
      { id: 25, text: '¿Te gustaría dirigir y organizar todo el trabajo detrás de grabar un documental súper profesional o armar una película?' },
      { id: 26, text: '¿Te resultaría interesante trabajar con policías o jueces explicando exactamente qué quiso decir alguien en una grabación de audio secreta?' },
      { id: 27, text: '¿Disfrutas usando títeres, disfraces, pintura y música para explicarles cosas difíciles a los niños pequeños y que las entiendan?' },
      { id: 28, text: '¿Te motiva la idea de trabajar dándole consejos a un presidente, alcalde o asambleísta sobre qué decisiones tomar?' },
      { id: 29, text: '¿Te atrae revisar los contratos de una empresa para asegurarte de que no hagan nada ilegal y evitarles problemas gigantes?' },
      { id: 30, text: '¿Te gustaría viajar para representar a tu país en reuniones mundiales gigantes donde se habla sobre salvar el planeta o la economía?' },
      { id: 31, text: '¿Te interesa saber cómo reaccionar y qué decir a la prensa si la empresa para la que trabajas tiene una emergencia o un escándalo?' },
      { id: 32, text: '¿Te resulta atractivo estudiar por qué las personas a veces dicen cosas con doble sentido o sarcasmo, y cómo todos logramos entendernos?' },
      { id: 33, text: '¿Te motiva crear nuevas formas de enseñar en los colegios para que los niños aprendan más rápido y se aburran menos?' },
      { id: 34, text: '¿Te atrae debatir si en el futuro las computadoras e inteligencias artificiales nos dejarán sin trabajo y qué deberíamos hacer al respecto?' },
      { id: 35, text: '¿Tienes muchas ganas de proponer leyes nuevas y estrictas para castigar a los políticos corruptos y hacer justicia?' },
      { id: 36, text: '¿Te entusiasma analizar si es peligroso para una empresa ir a vender sus productos a un país que está a punto de tener una guerra?' }
    ]
  },

  // 5. HÁBITAT, INFRAESTRUCTURA Y CREATIVIDAD (36 ítems, 6 carreras)
  habitat: {
    macroareaId: 'habitat',
    title: 'Hábitat, Infraestructura y Creatividad',
    faculty: 'Facultad de Arquitectura, Diseño y Artes / Ingeniería',
    careers: {
      ingenieria_integral: {
        name: 'Ingeniería Integral',
        items: [1, 7, 13, 19, 25, 31],
        description: 'Sistemas mecatrónicos, manufactura avanzada, eficiencia energética y modelación de plantas industriales.',
        skills: ['Mecánica y motores', 'Crear robots', 'Ahorrar energía'],
        caseStudy: {
          scenario: 'El brazo robótico del laboratorio del colegio se calienta mucho y deja de funcionar rápido.',
          question: '¿Qué solución técnica buscas?',
          options: [
            { text: 'Revisar cómo se mueve y cómo está conectado, para ajustarlo y ponerle un sistema de ventilación.', isCorrect: true },
            { text: 'Dejar que se caliente hasta que se dañe por completo.', isCorrect: false },
            { text: 'Quitarle todos los sensores de seguridad a ver si funciona mejor.', isCorrect: false }
          ]
        }
      },
      arquitectura: {
        name: 'Arquitectura',
        items: [2, 8, 14, 20, 26, 32],
        description: 'Diseño espacial bioclimático, modelado BIM/CAD, urbanismo sostenible y regeneración patrimonial.',
        skills: ['Diseño 3D', 'Construcción ecológica', 'Diseñar ciudades'],
        caseStudy: {
          scenario: 'Quieren construir una sala de juegos en el colegio, pero hace mucho calor en ese terreno.',
          question: '¿Cómo diseñas el espacio?',
          options: [
            { text: 'Crear ventanas grandes para que entre el viento y usar materiales frescos que respeten el entorno.', isCorrect: true },
            { text: 'Construir paredes cerradas sin ventanas y poner 10 aires acondicionados.', isCorrect: false },
            { text: 'Poner un techo de plástico para hacerlo más rápido.', isCorrect: false }
          ]
        }
      },
      artes_visuales: {
        name: 'Artes Visuales',
        items: [3, 9, 15, 21, 27, 33],
        description: 'Pintura, escultura, instalaciones contemporáneas, curaduría y conservación patrimonial.',
        skills: ['Arte y dibujo', 'Organizar exposiciones', 'Creatividad visual'],
        caseStudy: {
          scenario: 'Te piden que hagas una presentación artística sobre el cuidado del agua para la feria del colegio.',
          question: '¿Cómo expresas tu idea?',
          options: [
            { text: 'Crear una escultura grande con botellas recicladas y sonidos del mar para que la gente reflexione.', isCorrect: true },
            { text: 'Copiar un dibujo famoso sin pensar en el mensaje.', isCorrect: false },
            { text: 'Poner un vaso de agua en la mesa sin decir nada.', isCorrect: false }
          ]
        }
      },
      diseno_grafico: {
        name: 'Diseño Gráfico',
        items: [4, 10, 16, 22, 28, 34],
        description: 'Diseño editorial, identidad visual (branding), interfaces UI/UX, tipografía y motion graphics.',
        skills: ['Crear marcas', 'Diseñar páginas y apps', 'Diseño gráfico'],
        caseStudy: {
          scenario: 'La aplicación que crearon para el consejo estudiantil es confusa y nadie sabe cómo votar en ella.',
          question: '¿Cómo mejoras la app desde el diseño?',
          options: [
            { text: 'Hacer los botones más grandes, usar colores agradables y ordenar la información para que sea fácil de entender.', isCorrect: true },
            { text: 'Poner fuentes más pequeñas y saturar de texto la pantalla.', isCorrect: false },
            { text: 'Quitar las imágenes y no preguntarle a los demás qué piensan.', isCorrect: false }
          ]
        }
      },
      ingenieria_civil: {
        name: 'Ingeniería Civil',
        items: [5, 11, 17, 23, 29, 35],
        description: 'Cálculo estructural sismorresistente, mecánica de suelos, puentes, obras viales e hidráulicas.',
        skills: ['Cálculos matemáticos', 'Saber construir', 'Dirigir obras'],
        caseStudy: {
          scenario: 'Van a construir unas gradas nuevas en la cancha, pero se dan cuenta de que el suelo es muy blando por la lluvia.',
          question: '¿Qué precaución tomas?',
          options: [
            { text: 'Analizar bien el terreno y usar bases muy profundas y fuertes para que la estructura no se hunda.', isCorrect: true },
            { text: 'Construir encima rápidamente y esperar que no llueva.', isCorrect: false },
            { text: 'Ignorar el problema y construir bases superficiales para terminar rápido.', isCorrect: false }
          ]
        }
      },
      sistemas_informacion: {
        name: 'Sistemas de Información',
        items: [6, 12, 18, 24, 30, 36],
        description: 'Arquitectura de software empresarial, ERP, ciberseguridad corporativa, nube y modelación BPMN.',
        skills: ['Crear programas', 'Seguridad hacker', 'Bases de datos'],
        caseStudy: {
          scenario: 'El colegio quiere que los estudiantes suban sus deberes por internet, pero tienen miedo de que haya virus o se borren.',
          question: '¿Cómo organizas la tecnología?',
          options: [
            { text: 'Crear una plataforma con buena seguridad, contraseñas y respaldos en la nube para que todo esté a salvo.', isCorrect: true },
            { text: 'Dejar una carpeta abierta en internet para que cualquiera pueda subir cosas sin control.', isCorrect: false },
            { text: 'Usar computadoras viejas y sin protección.', isCorrect: false }
          ]
        }
      }
    },
    questions: [
      { id: 1, text: '¿Te interesa aprender cómo funcionan las máquinas grandes y la electricidad para hacer que las fábricas sean súper rápidas?' },
      { id: 2, text: '¿Te apasiona dibujar y pensar en cómo construir casas o edificios que sean cómodos, bonitos y luminosos?' },
      { id: 3, text: '¿Sientes que te expresas mejor pintando, esculpiendo o creando cosas artísticas con tus manos?' },
      { id: 4, text: '¿Te atrae diseñar los colores, las letras y el logo de una marca para que se vea súper profesional y moderna?' },
      { id: 5, text: '¿Te motiva calcular qué tan fuerte debe ser un puente o un túnel gigante para que nunca se caiga?' },
      { id: 6, text: '¿Te interesa entender cómo funcionan los programas que usan las empresas para guardar información y que no les roben datos?' },
      { id: 7, text: '¿Te gustaría ser el jefe de un proyecto que invente robots que ayuden a fabricar cosas gastando menos energía?' },
      { id: 8, text: '¿Te resulta emocionante usar programas de computadora para armar planos o maquetas en 3D de edificios enteros?' },
      { id: 9, text: '¿Disfrutas inventando obras de arte raras con materiales extraños para sorprender a la gente en una exposición?' },
      { id: 10, text: '¿Te interesa dibujar cómo se verán los botones y menús de una app para que sea súper fácil de usar?' },
      { id: 11, text: '¿Te visualizas con casco y botas en una construcción, revisando que todos estén usando los materiales correctos?' },
      { id: 12, text: '¿Te atrae proteger a las empresas de los hackers y asegurar que su información esté a salvo en internet?' },
      { id: 13, text: '¿Te resultaría divertido investigar por qué una máquina se dañó y arreglarla para que la fábrica siga funcionando?' },
      { id: 14, text: '¿Te preocupa que las ciudades tengan demasiados carros y quisieras diseñar barrios con más árboles y parques?' },
      { id: 15, text: '¿Te apasiona estudiar la historia de los pintores famosos y entender qué querían decir con sus cuadros?' },
      { id: 16, text: '¿Te gusta tomar una idea complicada y convertirla en un dibujo, un cartel o un empaque que todos entiendan súper fácil?' },
      { id: 17, text: '¿Te entusiasma pensar cómo se construyen las tuberías subterráneas para llevar agua limpia a toda una ciudad?' },
      { id: 18, text: '¿Te gustaría ayudar a una empresa a dejar el papel y usar programas y "la nube" para trabajar más rápido?' },
      { id: 19, text: '¿Te motiva inventar nuevas máquinas que ayuden a las empresas a crear productos pero cuidando más el planeta?' },
      { id: 20, text: '¿Sientes que eres bueno imaginándote un edificio en tu cabeza y decidiendo dónde irán los cuartos y los pasillos?' },
      { id: 21, text: '¿Te visualizas organizando exposiciones de arte, ayudando a otros artistas o restaurando pinturas antiguas?' },
      { id: 22, text: '¿Te resultaría genial pasar horas en la computadora retocando fotos o creando ilustraciones increíbles?' },
      { id: 23, text: '¿Te atrae ir a un terreno vacío para investigar si la tierra es lo suficientemente fuerte para aguantar un edificio alto?' },
      { id: 24, text: '¿Te motiva entender cómo funciona toda la red de computadoras de un colegio o empresa gigante?' },
      { id: 25, text: '¿Te gustaría ser quien dirige y organiza a todos los ingenieros distintos que están construyendo un proyecto grande?' },
      { id: 26, text: '¿Te interesa pensar en ideas locas para hacer que las ciudades sean más modernas, como usar calles inteligentes o trenes rápidos?' },
      { id: 27, text: '¿Te motiva crear murales enormes en las calles o usar la fotografía para contar historias que hagan pensar a la gente?' },
      { id: 28, text: '¿Te interesa estudiar por qué ciertos colores nos dan hambre o tristeza, y usar eso para diseñar anuncios que impacten?' },
      { id: 29, text: '¿Te gustaría ser quien decide cuándo llegan los camiones y los tractores a una obra para que todo se construya a tiempo?' },
      { id: 30, text: '¿Te atrae pensar en soluciones para que diferentes computadoras y programas puedan "hablar" entre sí sin dañarse?' },
      { id: 31, text: '¿Te atrae usar muchas matemáticas para asegurar de que una fábrica funcione perfecto desde que se construye hasta que la cierran?' },
      { id: 32, text: '¿Te entusiasma la idea de tomar un edificio súper viejo y destruido para remodelarlo y que quede increíble y moderno?' },
      { id: 33, text: '¿Tienes ganas de descubrir tu propio estilo artístico pintando, dibujando o usando tecnología de formas que nadie más usa?' },
      { id: 34, text: '¿Te atrae hacer videos cortos con dibujos que se mueven (animaciones) o diseñar las portadas de revistas famosas?' },
      { id: 35, text: '¿Te motiva diseñar edificios que sean tan fuertes que puedan resistir terremotos o inundaciones sin caerse?' },
      { id: 36, text: '¿Te visualizas siendo el "traductor" entre el jefe de una empresa que quiere ganar dinero y los ingenieros que programan las computadoras?' }
    ]
  }
};
