// =========================================================
// BANCO OFICIAL DE PREGUNTAS, MATRICES Y CARRERAS PUCE (39 CARRERAS)
// Generado automáticamente a partir de folletos oficiales y sitio web PUCE
// =========================================================

export const MACROAREAS = {
  sostenibilidad: {
    id: 'sostenibilidad',
    name: 'Sostenibilidad y Recursos Naturales',
    shortName: 'Sostenibilidad',
    color: '#06b2b3',
    iconName: 'Leaf',
    description: 'Estudio de la biodiversidad, ecosistemas, biotecnología, química y ciencias ambientales.'
  },
  salud: {
    id: 'salud',
    name: 'Salud y Bienestar',
    shortName: 'Salud y Bienestar',
    color: '#1aa9df',
    iconName: 'HeartPulse',
    description: 'Cuidado integral de la vida, medicina clínica, bioingeniería, odontología, nutrición y salud mental.'
  },
  habitat: {
    id: 'habitat',
    name: 'Hábitat, Infraestructura y Movilidad (y Tecnología)',
    shortName: 'Hábitat y Creatividad',
    color: '#003b81',
    iconName: 'Building2',
    description: 'Diseño arquitectónico, ingeniería civil, tecnologías de la información y sistemas inteligentes.'
  },
  sociales: {
    id: 'sociales',
    name: 'Ciencias Sociales y Humanidades',
    shortName: 'Sociales y Humanidades',
    color: '#06b2b3',
    iconName: 'Scale',
    description: 'Derecho, diplomacia global, comunicación transmedia, educación infantil, artes visuales y humanidades.'
  },
  economia: {
    id: 'economia',
    name: 'Economía y Gestión Empresarial',
    shortName: 'Economía y Negocios',
    color: '#003b81',
    iconName: 'Briefcase',
    description: 'Liderazgo corporativo, finanzas bursátiles, comercio internacional, marketing y talento humano.'
  }
};

// --- FASE 1: 30 Ítems Oficiales de Macroáreas ---
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

// --- FASE 2: BANCO COMPLETO DE DOMINIOS Y 39 CARRERAS OFICIALES PUCE ---
export const DOMAIN_DATA = {
  "habitat": {
    "macroareaId": "habitat",
    "title": "Hábitat, Infraestructura y Creatividad",
    "shortName": "Hábitat y Creatividad",
    "color": "#003b81",
    "iconName": "Building2",
    "faculty": "Facultad de Hábitat, Infraestructura y Creatividad",
    "description": "Espacios habitables, ingeniería civil, arquitectura, diseño y tecnologías de información.",
    "careers": {
      "ingenieria_integral": {
        "name": "Ingeniería Integral",
        "items": [
          1,
          7,
          13,
          19,
          25,
          31
        ],
        "pdf": "ingenieria-integral-202401.pdf",
        "semesters_count": 8,
        "description": "Formación multidisciplinaria que fusiona ingeniería mecánica, electrónica, optimización de procesos industriales y sostenibilidad, preparando líderes capaces de resolver problemas complejos de ingeniería y automatización.",
        "fieldOfWork": "Industrias manufactureras, automatización y robótica, plantas de producción, consultoría de eficiencia energética y gestión de proyectos tecnológicos.",
        "skills": [
          "Sistemas electromecánicos",
          "Automatización y control",
          "Optimización de procesos",
          "Gestión de proyectos tecnológicos"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "39%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$3050",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Modelo",
            "highlight": "PUCE-ICAM",
            "title": "enfoque francés",
            "bottomText": "Prácticas en industrias desde 3er semestre"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Optimización Energética de una Planta Industrial",
          "scenario": "Una planta embotelladora registra picos de consumo de energía eléctrica del 40% debido a arranques de motores y paradas no sincronizadas.",
          "description": "Plantea la modernización técnica integral:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es la intervención técnica con mayor retorno de inversión y sostenibilidad?",
              "options": [
                {
                  "text": "Instalar variadores de frecuencia en motores críticos y centralizar el monitoreo en un sistema SCADA con algoritmos de arranque escalonado.",
                  "next": "success"
                },
                {
                  "text": "Aumentar el número de generadores diésel auxiliares para suplir los picos de demanda eléctrica.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Visión integral de la ingeniería! Los variadores de frecuencia reducen la corriente de arranque y el sistema SCADA optimiza el consumo energético sin contaminar.",
            "failure": "Añadir generadores diésel incrementa las emisiones contaminantes, el costo de combustible y no soluciona la ineficiencia motora de fondo."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Resistencia de estructuras",
              "Matemáticas II",
              "Óptica",
              "Descubrimiento de empresas",
              "Humanidades II",
              "PDD – pedagogía de la decisión II"
            ],
            [
              "Electrónica Digital",
              "Polímeros – Máquinas Térmicas",
              "Humanidades IV",
              "PDD – pedagogía de la decisión IV",
              "Pedagogía de proyecto - diseño bote Dron",
              "Aprendizaje basado en problemas – PBL D"
            ],
            [
              "Estructuras de Relación-Propiedades y Procesos",
              "Métodos y Calidad",
              "Humanidades VI",
              "PDD – pedagogía de la decisión VI",
              "Pedagogía de proyecto – construcción bote Dron II",
              "Aprendizaje basado en problemas – PBL F"
            ],
            [
              "Mecánica de Fluidos y Polímeros",
              "Humanidades III",
              "PDD – pedagogía de la decisión III",
              "Pedagogía de proyecto-conceptualización de bote Dron",
              "Aprendizaje basado en problemas – PBL C",
              "Prácticas Preprofesionales II"
            ],
            [
              "Industrialización",
              "Humanidades V",
              "PDD – pedagogía de la decisión V",
              "Pedagogía de proyecto – construcción bote Dron I",
              "Aprendizaje basado en problemas – PBL E",
              "IoT y Ciberseguridad"
            ],
            [
              "PDD – pedagogía de la decisión VII",
              "Pedagogía de proyecto – Proyecto diseño Demótico",
              "Aprendizaje basado en problemas – PBL G",
              "Vibración Estructural",
              "Simulación Numérica",
              "Control y Dominio de Procesos Industriales"
            ],
            [
              "Experimentación Profesional V",
              "Teoría de los mecanismos",
              "Matemática I",
              "Electro magnetismo",
              "Humanidades I",
              "PDD – pedagogía de la decisión I"
            ],
            [
              "Red Inteligente, Microcontroladores y Automatización",
              "Transferencias Térmicas – Reciclaje de materiales",
              "Ley de Contratos Internacionales",
              "Humanidades VIII",
              "PDD – pedagogía de la decisión VIII",
              "Pedagogía de proyecto – Integración Proyecto"
            ]
          ],
          "subjectDetails": {
            "Resistencia de estructuras": "Resistencia de estructuras en Ingeniería Integral: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Matemáticas II": "Matemáticas II en Ingeniería Integral: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Óptica": "Óptica en Ingeniería Integral: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Descubrimiento de empresas": "Descubrimiento de empresas en Ingeniería Integral: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Humanidades II": "Humanidades II en Ingeniería Integral: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "PDD – pedagogía de la decisión II": "PDD – pedagogía de la decisión II en Ingeniería Integral: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Electrónica Digital": "Electrónica Digital en Ingeniería Integral: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Polímeros – Máquinas Térmicas": "Polímeros – Máquinas Térmicas en Ingeniería Integral: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Humanidades IV": "Humanidades IV en Ingeniería Integral: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "PDD – pedagogía de la decisión IV": "PDD – pedagogía de la decisión IV en Ingeniería Integral: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Pedagogía de proyecto - diseño bote Dron": "Pedagogía de proyecto - diseño bote Dron en Ingeniería Integral: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Aprendizaje basado en problemas – PBL D": "Aprendizaje basado en problemas – PBL D en Ingeniería Integral: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Estructuras de Relación-Propiedades y Procesos": "Estructuras de Relación-Propiedades y Procesos en Ingeniería Integral: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Métodos y Calidad": "Métodos y Calidad en Ingeniería Integral: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Humanidades VI": "Humanidades VI en Ingeniería Integral: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "PDD – pedagogía de la decisión VI": "PDD – pedagogía de la decisión VI en Ingeniería Integral: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Pedagogía de proyecto – construcción bote Dron II": "Pedagogía de proyecto – construcción bote Dron II en Ingeniería Integral: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Aprendizaje basado en problemas – PBL F": "Aprendizaje basado en problemas – PBL F en Ingeniería Integral: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Mecánica de Fluidos y Polímeros": "Mecánica de Fluidos y Polímeros en Ingeniería Integral: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Humanidades III": "Humanidades III en Ingeniería Integral: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "PDD – pedagogía de la decisión III": "PDD – pedagogía de la decisión III en Ingeniería Integral: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Pedagogía de proyecto-conceptualización de bote Dron": "Pedagogía de proyecto-conceptualización de bote Dron en Ingeniería Integral: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Aprendizaje basado en problemas – PBL C": "Aprendizaje basado en problemas – PBL C en Ingeniería Integral: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Prácticas Preprofesionales II": "Prácticas Preprofesionales II en Ingeniería Integral: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Industrialización": "Industrialización en Ingeniería Integral: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Humanidades V": "Humanidades V en Ingeniería Integral: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "PDD – pedagogía de la decisión V": "PDD – pedagogía de la decisión V en Ingeniería Integral: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Pedagogía de proyecto – construcción bote Dron I": "Pedagogía de proyecto – construcción bote Dron I en Ingeniería Integral: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Aprendizaje basado en problemas – PBL E": "Aprendizaje basado en problemas – PBL E en Ingeniería Integral: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "IoT y Ciberseguridad": "IoT y Ciberseguridad en Ingeniería Integral: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "PDD – pedagogía de la decisión VII": "PDD – pedagogía de la decisión VII en Ingeniería Integral: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Pedagogía de proyecto – Proyecto diseño Demótico": "Pedagogía de proyecto – Proyecto diseño Demótico en Ingeniería Integral: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Aprendizaje basado en problemas – PBL G": "Aprendizaje basado en problemas – PBL G en Ingeniería Integral: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Vibración Estructural": "Vibración Estructural en Ingeniería Integral: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Simulación Numérica": "Simulación Numérica en Ingeniería Integral: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Control y Dominio de Procesos Industriales": "Control y Dominio de Procesos Industriales en Ingeniería Integral: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Experimentación Profesional V": "Experimentación Profesional V en Ingeniería Integral: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Teoría de los mecanismos": "Teoría de los mecanismos en Ingeniería Integral: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Matemática I": "Matemática I en Ingeniería Integral: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Electro magnetismo": "Electro magnetismo en Ingeniería Integral: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Humanidades I": "Humanidades I en Ingeniería Integral: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "PDD – pedagogía de la decisión I": "PDD – pedagogía de la decisión I en Ingeniería Integral: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Red Inteligente, Microcontroladores y Automatización": "Red Inteligente, Microcontroladores y Automatización en Ingeniería Integral: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Transferencias Térmicas – Reciclaje de materiales": "Transferencias Térmicas – Reciclaje de materiales en Ingeniería Integral: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ley de Contratos Internacionales": "Ley de Contratos Internacionales en Ingeniería Integral: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Humanidades VIII": "Humanidades VIII en Ingeniería Integral: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "PDD – pedagogía de la decisión VIII": "PDD – pedagogía de la decisión VIII en Ingeniería Integral: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Pedagogía de proyecto – Integración Proyecto": "Pedagogía de proyecto – Integración Proyecto en Ingeniería Integral: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario I: Innovación y Emprendimiento",
              "subjects": [
                "Modelos de Negocio",
                "Innovación Aplicada",
                "Proyectos de Impacto"
              ]
            },
            {
              "name": "Itinerario II: Investigación Aplicada",
              "subjects": [
                "Metodologías Avanzadas",
                "Seminario de Investigación",
                "Publicación Científica"
              ]
            }
          ]
        }
      },
      "arquitectura": {
        "name": "Arquitectura",
        "items": [
          2,
          8,
          14,
          20,
          26,
          32
        ],
        "pdf": "arquitectura-202401.pdf",
        "semesters_count": 10,
        "description": "Aprenderás a concebir, diseñar y proyectar espacios habitables, sostenibles e innovadores, armonizando estética, funcionalidad, impacto urbano y tecnologías constructivas respetuosas del entorno.",
        "fieldOfWork": "Estudios de arquitectura y urbanismo, dirección y fiscalización de obras, empresas constructoras, consultoría inmobiliaria y patrimonio histórico.",
        "skills": [
          "Diseño espacial y urbano",
          "Modelado 3D y maquetación",
          "Sostenibilidad y bioclimática",
          "Gestión de proyectos constructivos"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "24%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$3000",
            "title": "por semestre",
            "bottomText": "10 semestres presenciales"
          },
          {
            "topText": "Talleres",
            "highlight": "100%",
            "title": "prácticos",
            "bottomText": "Laboratorios de fabricación digital FabLab"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Diseño de Espacio Comunitario Sostenible",
          "scenario": "Una comunidad en el Centro Histórico necesita rehabilitar una plaza pública con pendiente pronunciada y alta radiación solar.",
          "description": "Como arquitecto(a), debes definir la estrategia de implantación y los materiales principales.",
          "steps": [
            {
              "id": "step1",
              "question": "¿Qué estrategia bioclimática y espacial priorizas para la plaza comunitaria?",
              "options": [
                {
                  "text": "Diseñar terrazas escalonadas con cubiertas verdes y materiales locales que aprovechen las corrientes de aire y sombra natural.",
                  "next": "success"
                },
                {
                  "text": "Nivelar toda la topografía con losas de concreto continuo e instalar estructuras metálicas cerradas con aire acondicionado.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Excelente criterio arquitectónico! El diseño aterrazado respeta la topografía natural, reduce la huella de carbono y crea espacios de sombra confortables y accesibles.",
            "failure": "Esa propuesta genera islas de calor, altera agresivamente la topografía y eleva drásticamente los costos de mantenimiento energético."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Seminario de Titulación",
              "Taller Profesional",
              "Investigación Tecnológica Aplicada II",
              "Asesorías de Proyecto Arquitectónico I",
              "Gestión de Emprendimiento",
              "Integración Curricular"
            ],
            [
              "Asesorías de Proyecto Arquitectónico II",
              "Asesorías de Proyecto Arquitectónico III",
              "Fundamentos de Investigación",
              "Laboratorio 2: Experimentación y Cocreación",
              "Lenguajes Visuales Aplicados",
              "Materia y Recursos: Enfoque Sostenible"
            ],
            [
              "Historia y Pensamiento de las Prácticas Creativas Latinoamericanas",
              "Bioclimática",
              "Taller Integrador II",
              "Comunicación y Representación II",
              "Sistemas Constructivos y Estructuras II",
              "Teoría e Historia de la Arquitectura II"
            ],
            [
              "Ecología Integral",
              "Taller Integrador IV",
              "Comunicación y Representación IV",
              "Integración y Procesos Digitales de la Construcción",
              "Teoría e Historia del Espacio Urbano",
              "Jesucristo y Aprendizajes Vitales"
            ],
            [
              "Taller Integrador I",
              "Comunicación y Representación I",
              "Sistemas Constructivos y Estructuras I",
              "Teoría e Historia de la Arquitectura I",
              "Ética e Interculturalidad",
              "Taller Integrador III"
            ],
            [
              "Comunicación y Representación III",
              "Sistemas Constructivos y Estructuras III",
              "Análisis y Crítica",
              "Instalaciones Especiales",
              "Taller Integrador V",
              "Asignatura 1 de Itinerario"
            ],
            [
              "Asignatura 2 de Itinerario",
              "Gestión Pública y Privada",
              "Conocimiento, Palabra y Cambio Social",
              "Laboratorio 1: Exploración y Retos",
              "Introducción a los Lenguajes Visuales",
              "Ciencia de los Materiales: Propiedades, Procesos y Ciclos"
            ],
            [
              "Historia y Pensamiento de las Prácticas Creativas Globales",
              "Ética de la Legislación y Riesgos",
              "Taller Integrador VI",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario",
              "Investigación Tecnológica Aplicada I"
            ],
            [
              "Pensamiento y Crítica del Mundo Digital",
              "Métodos de Computación Creativas",
              "Laboratorio de Creación Digital",
              "Laboratorio de Fabricación Digital",
              "Procesamiento Tridimensional de Información (BIM)",
              "Laboratorio, Normativa y Procesos"
            ],
            [
              "Gestión de Seguridad y Ambiente en Obra",
              "Comunicación y Evaluación del Proyecto",
              "Ciudad y Espacio Público Ecosistémico",
              "Movilidad Sostenible",
              "Resiliencia y Cambio Climático",
              "Proyecto de Aplicación"
            ]
          ],
          "subjectDetails": {
            "Seminario de Titulación": "Seminario de Titulación en Arquitectura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Taller Profesional": "Taller Profesional en Arquitectura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Investigación Tecnológica Aplicada II": "Investigación Tecnológica Aplicada II en Arquitectura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Asesorías de Proyecto Arquitectónico I": "Asesorías de Proyecto Arquitectónico I en Arquitectura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Gestión de Emprendimiento": "Gestión de Emprendimiento en Arquitectura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Integración Curricular": "Integración Curricular en Arquitectura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asesorías de Proyecto Arquitectónico II": "Asesorías de Proyecto Arquitectónico II en Arquitectura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Asesorías de Proyecto Arquitectónico III": "Asesorías de Proyecto Arquitectónico III en Arquitectura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Investigación": "Fundamentos de Investigación en Arquitectura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Laboratorio 2: Experimentación y Cocreación": "Laboratorio 2: Experimentación y Cocreación en Arquitectura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Lenguajes Visuales Aplicados": "Lenguajes Visuales Aplicados en Arquitectura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Materia y Recursos: Enfoque Sostenible": "Materia y Recursos: Enfoque Sostenible en Arquitectura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Historia y Pensamiento de las Prácticas Creativas Latinoamericanas": "Historia y Pensamiento de las Prácticas Creativas Latinoamericanas en Arquitectura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Bioclimática": "Bioclimática en Arquitectura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Taller Integrador II": "Taller Integrador II en Arquitectura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Comunicación y Representación II": "Comunicación y Representación II en Arquitectura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Sistemas Constructivos y Estructuras II": "Sistemas Constructivos y Estructuras II en Arquitectura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Teoría e Historia de la Arquitectura II": "Teoría e Historia de la Arquitectura II en Arquitectura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ecología Integral": "Ecología Integral en Arquitectura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Taller Integrador IV": "Taller Integrador IV en Arquitectura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Comunicación y Representación IV": "Comunicación y Representación IV en Arquitectura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración y Procesos Digitales de la Construcción": "Integración y Procesos Digitales de la Construcción en Arquitectura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Teoría e Historia del Espacio Urbano": "Teoría e Historia del Espacio Urbano en Arquitectura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Arquitectura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Taller Integrador I": "Taller Integrador I en Arquitectura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Comunicación y Representación I": "Comunicación y Representación I en Arquitectura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Sistemas Constructivos y Estructuras I": "Sistemas Constructivos y Estructuras I en Arquitectura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Teoría e Historia de la Arquitectura I": "Teoría e Historia de la Arquitectura I en Arquitectura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Arquitectura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Taller Integrador III": "Taller Integrador III en Arquitectura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Comunicación y Representación III": "Comunicación y Representación III en Arquitectura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Sistemas Constructivos y Estructuras III": "Sistemas Constructivos y Estructuras III en Arquitectura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Análisis y Crítica": "Análisis y Crítica en Arquitectura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Instalaciones Especiales": "Instalaciones Especiales en Arquitectura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Taller Integrador V": "Taller Integrador V en Arquitectura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 1 de Itinerario": "Asignatura 1 de Itinerario en Arquitectura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Arquitectura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Gestión Pública y Privada": "Gestión Pública y Privada en Arquitectura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Arquitectura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Laboratorio 1: Exploración y Retos": "Laboratorio 1: Exploración y Retos en Arquitectura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Introducción a los Lenguajes Visuales": "Introducción a los Lenguajes Visuales en Arquitectura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ciencia de los Materiales: Propiedades, Procesos y Ciclos": "Ciencia de los Materiales: Propiedades, Procesos y Ciclos en Arquitectura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Historia y Pensamiento de las Prácticas Creativas Globales": "Historia y Pensamiento de las Prácticas Creativas Globales en Arquitectura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ética de la Legislación y Riesgos": "Ética de la Legislación y Riesgos en Arquitectura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Taller Integrador VI": "Taller Integrador VI en Arquitectura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Arquitectura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Arquitectura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Investigación Tecnológica Aplicada I": "Investigación Tecnológica Aplicada I en Arquitectura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Pensamiento y Crítica del Mundo Digital": "Pensamiento y Crítica del Mundo Digital en Arquitectura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Métodos de Computación Creativas": "Métodos de Computación Creativas en Arquitectura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Laboratorio de Creación Digital": "Laboratorio de Creación Digital en Arquitectura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Laboratorio de Fabricación Digital": "Laboratorio de Fabricación Digital en Arquitectura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Procesamiento Tridimensional de Información (BIM)": "Procesamiento Tridimensional de Información (BIM) en Arquitectura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Laboratorio, Normativa y Procesos": "Laboratorio, Normativa y Procesos en Arquitectura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Gestión de Seguridad y Ambiente en Obra": "Gestión de Seguridad y Ambiente en Obra en Arquitectura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Comunicación y Evaluación del Proyecto": "Comunicación y Evaluación del Proyecto en Arquitectura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ciudad y Espacio Público Ecosistémico": "Ciudad y Espacio Público Ecosistémico en Arquitectura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Movilidad Sostenible": "Movilidad Sostenible en Arquitectura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Resiliencia y Cambio Climático": "Resiliencia y Cambio Climático en Arquitectura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Proyecto de Aplicación": "Proyecto de Aplicación en Arquitectura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Tecnologías Creativas para un Mundo Digital",
              "subjects": [
                "Especialización I (Tecnologías Creativa)",
                "Especialización II (Tecnologías Creativa)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Herramientas Digitales Aplicadas a Procesos de Construcción",
              "subjects": [
                "Especialización I (Herramientas Digital)",
                "Especialización II (Herramientas Digital)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Ciudades Sostenibles y Acción Climática",
              "subjects": [
                "Especialización I (Ciudades Sostenibles)",
                "Especialización II (Ciudades Sostenibles)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "ciencia_datos": {
        "name": "Ciencia de Datos",
        "items": [
          3,
          9,
          15,
          21,
          27,
          33
        ],
        "pdf": "ciencia-de-datos-202401.pdf",
        "semesters_count": 8,
        "description": "Transformarás grandes volúmenes de datos en decisiones inteligentes mediante algoritmos de Machine Learning, estadística avanzada, inteligencia artificial y modelado predictivo.",
        "fieldOfWork": "Científico de datos en banca, retail, centros de investigación biomédica, empresas de IA, consultoría en Business Intelligence y analítica de datos.",
        "skills": [
          "Machine Learning y Deep Learning",
          "Programación en Python y R",
          "Big Data y Data Pipelines",
          "Visualización analítica de datos"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Carrera",
            "highlight": "Top #1",
            "title": "en crecimiento",
            "bottomText": "Alta remuneración en el mercado tech"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Detección de Fraude en Transacciones Financieras",
          "scenario": "Un banco procesa 2 millones de pagos al día y necesita detectar transacciones anómalas en menos de 100 milisegundos con mínimo ratio de falsos positivos.",
          "description": "Selecciona el pipeline analítico adecuado:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Qué modelo y técnica de preprocesamiento aplicas?",
              "options": [
                {
                  "text": "Algoritmo de clasificación con ensemble (Random Forest / Gradient Boosting) aplicando técnicas de balanceo de clases (SMOTE) y feature engineering temporal.",
                  "next": "success"
                },
                {
                  "text": "Regresión lineal simple sobre el monto en dólares sin normalización ni balanceo de transacciones fraudulentas.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Precisión analítica! Las técnicas de ensemble combinadas con balanceo de datos capturan patrones complejos y no lineales en datos con fraude infrecuente.",
            "failure": "En problemas con clases muy desbalanceadas (menos del 0.1% de fraudes), la regresión lineal ignora el fraude clasificando todo como legítimo."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Dirección de Proyecto",
              "Inicio y Planiﬁcación del Proyecto",
              "Ejecución, Monitoreo, Control y Cierre del Proyecto",
              "Gestión Ágil de Proyectos",
              "Movilización de Bases Sociales",
              "Gestión de la Asesoría Política"
            ],
            [
              "Comunicación y Persuasión",
              "Gestión de Marca Personal",
              "Media Training y Estrategias Comunicativas",
              "Creación y Gestión de Contenidos Multiplataforma 27%",
              "Visualización de Datos",
              "Aprendizaje Estadistico I"
            ],
            [
              "Fundamentos de Administración",
              "Bases de Datos Relacionales y no Relacionales",
              "Ecología Integral",
              "Aprendizaje Estadistico II",
              "Inteligencia de Negocios",
              "Ciencia de Datos para Estudio de Casos"
            ],
            [
              "Jesucristo y Aprendizajes Vitales",
              "Fundamentos de Economía",
              "Teoria Probabilidades",
              "Estadistica II",
              "Lectura y escritura académica",
              "Programación Orientada a Objetos"
            ],
            [
              "Estadistica IV",
              "Aprendizaje Automático Inicial",
              "Optimización",
              "Fundamentos de Finanzas",
              "Procesamiento, Gestión y Almacenamiento de Datos",
              "Seminario de Titulación"
            ],
            [
              "Asignatura 1 de Itinerario",
              "Asignatura 2 de Itinerario",
              "Ciencia de Datos para el Análisis de Problemas Reales",
              "Analisis de Datos Geoespaciales",
              "Integración Curricular",
              "Procesamiento de Lenguaje Natural"
            ],
            [
              "Asignatura 4 de Itinerario",
              "Ciencia de Datos para la Resolución de Problemas Reales",
              "Gobernanza y Legislación de Datos",
              "Conocimiento, Palabra y Cambio Social",
              "Matemática I y II",
              "Matemática Discreta I"
            ],
            [
              "Programación I",
              "Fundamentos de Investigación",
              "Algebra Lineal",
              "Estadistica I",
              "Matemática III",
              "Limpieza, Depuración y Curación de Datos"
            ]
          ],
          "subjectDetails": {
            "Dirección de Proyecto": "Dirección de Proyecto en Ciencia de Datos: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Inicio y Planiﬁcación del Proyecto": "Inicio y Planiﬁcación del Proyecto en Ciencia de Datos: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ejecución, Monitoreo, Control y Cierre del Proyecto": "Ejecución, Monitoreo, Control y Cierre del Proyecto en Ciencia de Datos: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Gestión Ágil de Proyectos": "Gestión Ágil de Proyectos en Ciencia de Datos: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Movilización de Bases Sociales": "Movilización de Bases Sociales en Ciencia de Datos: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Gestión de la Asesoría Política": "Gestión de la Asesoría Política en Ciencia de Datos: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Comunicación y Persuasión": "Comunicación y Persuasión en Ciencia de Datos: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Gestión de Marca Personal": "Gestión de Marca Personal en Ciencia de Datos: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Media Training y Estrategias Comunicativas": "Media Training y Estrategias Comunicativas en Ciencia de Datos: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Creación y Gestión de Contenidos Multiplataforma 27%": "Creación y Gestión de Contenidos Multiplataforma 27% en Ciencia de Datos: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Visualización de Datos": "Visualización de Datos en Ciencia de Datos: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Aprendizaje Estadistico I": "Aprendizaje Estadistico I en Ciencia de Datos: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fundamentos de Administración": "Fundamentos de Administración en Ciencia de Datos: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Bases de Datos Relacionales y no Relacionales": "Bases de Datos Relacionales y no Relacionales en Ciencia de Datos: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ecología Integral": "Ecología Integral en Ciencia de Datos: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Aprendizaje Estadistico II": "Aprendizaje Estadistico II en Ciencia de Datos: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Inteligencia de Negocios": "Inteligencia de Negocios en Ciencia de Datos: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ciencia de Datos para Estudio de Casos": "Ciencia de Datos para Estudio de Casos en Ciencia de Datos: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Ciencia de Datos: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fundamentos de Economía": "Fundamentos de Economía en Ciencia de Datos: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Teoria Probabilidades": "Teoria Probabilidades en Ciencia de Datos: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Estadistica II": "Estadistica II en Ciencia de Datos: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Lectura y escritura académica": "Lectura y escritura académica en Ciencia de Datos: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Programación Orientada a Objetos": "Programación Orientada a Objetos en Ciencia de Datos: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Estadistica IV": "Estadistica IV en Ciencia de Datos: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Aprendizaje Automático Inicial": "Aprendizaje Automático Inicial en Ciencia de Datos: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Optimización": "Optimización en Ciencia de Datos: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fundamentos de Finanzas": "Fundamentos de Finanzas en Ciencia de Datos: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Procesamiento, Gestión y Almacenamiento de Datos": "Procesamiento, Gestión y Almacenamiento de Datos en Ciencia de Datos: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Seminario de Titulación": "Seminario de Titulación en Ciencia de Datos: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 1 de Itinerario": "Asignatura 1 de Itinerario en Ciencia de Datos: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Ciencia de Datos: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ciencia de Datos para el Análisis de Problemas Reales": "Ciencia de Datos para el Análisis de Problemas Reales en Ciencia de Datos: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Analisis de Datos Geoespaciales": "Analisis de Datos Geoespaciales en Ciencia de Datos: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Integración Curricular": "Integración Curricular en Ciencia de Datos: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Procesamiento de Lenguaje Natural": "Procesamiento de Lenguaje Natural en Ciencia de Datos: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Ciencia de Datos: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ciencia de Datos para la Resolución de Problemas Reales": "Ciencia de Datos para la Resolución de Problemas Reales en Ciencia de Datos: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Gobernanza y Legislación de Datos": "Gobernanza y Legislación de Datos en Ciencia de Datos: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Ciencia de Datos: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Matemática I y II": "Matemática I y II en Ciencia de Datos: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Matemática Discreta I": "Matemática Discreta I en Ciencia de Datos: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Programación I": "Programación I en Ciencia de Datos: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fundamentos de Investigación": "Fundamentos de Investigación en Ciencia de Datos: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Algebra Lineal": "Algebra Lineal en Ciencia de Datos: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Estadistica I": "Estadistica I en Ciencia de Datos: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Matemática III": "Matemática III en Ciencia de Datos: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Limpieza, Depuración y Curación de Datos": "Limpieza, Depuración y Curación de Datos en Ciencia de Datos: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Gestión de Proyectos (Project Management)",
              "subjects": [
                "Especialización I (Gestión de Proyectos)",
                "Especialización II (Gestión de Proyectos)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Asesoría Política",
              "subjects": [
                "Especialización I (Asesoría Política)",
                "Especialización II (Asesoría Política)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Comunicación Asertiva y Gestión de Contenidos",
              "subjects": [
                "Especialización I (Comunicación Asertiv)",
                "Especialización II (Comunicación Asertiv)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "diseno_grafico": {
        "name": "Diseño Gráfico",
        "items": [
          4,
          10,
          16,
          22,
          28,
          34
        ],
        "pdf": "diseno-grafico-202401.pdf",
        "semesters_count": 8,
        "description": "Dominarás la comunicación visual, el diseño de marcas, medios digitales, tipografía, ilustración y experiencias transmedia para conectar marcas y personas con propósito social e identidad cultural.",
        "fieldOfWork": "Agencias de publicidad y branding, estudios de diseño, editoriales, productoras audiovisuales, diseño UI/UX y consultoría creativa independiente.",
        "skills": [
          "Identidad visual y branding",
          "Tipografía y composición",
          "Diseño interactivo UI/UX",
          "Narrativa visual transmedia"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Laboratorios",
            "highlight": "iMac",
            "title": "y serigrafía",
            "bottomText": "Suite Adobe y talleres experimentales"
          }
        ],
        "caseStudy": {
          "type": "matching",
          "title": "Arquitectura de Identidad de Marca",
          "scenario": "Una cooperativa de café orgánico ecuatoriano necesita renovar su imagen visual para exportar a Europa.",
          "description": "Relaciona cada elemento clave del sistema visual con su función estratégica:",
          "leftItems": [
            {
              "id": "tipografia",
              "label": "Tipografía Serif artesanal"
            },
            {
              "id": "paleta",
              "label": "Paleta cromática tierra y esmeralda"
            },
            {
              "id": "isotipo",
              "label": "Isotipo minimalista de grano y hoja"
            }
          ],
          "rightItems": [
            {
              "id": "tipografia",
              "label": "Comunica tradición, autenticidad y origen noble"
            },
            {
              "id": "paleta",
              "label": "Evoca fertilidad ecológica y sostenibilidad de origen"
            },
            {
              "id": "isotipo",
              "label": "Garantiza legibilidad y recordación en empaques pequeños"
            }
          ],
          "feedback": {
            "success": "¡Gran sensibilidad visual! Tu combinación potencia la autenticidad del producto ecuatoriano con estándares gráficos globales.",
            "failure": "Algunas asociaciones no refuerzan el mensaje de la marca; revisa la relación entre forma, color y psicología visual."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Laboratorio 2: Experimentación y Cocreación",
              "Lenguajes Visuales Aplicados",
              "Materia y Recursos: Enfoque Sostenible",
              "Historia y Pensamiento de las Prácticas Creativas Latinoamericanas",
              "Fotografía Creativa"
            ],
            [
              "Modelado y Animación 3D",
              "Producción Audiovisual",
              "Pensamiento crítico visual",
              "Ecología Integral",
              "Diseño de Identidad",
              "Diseño estratégico"
            ],
            [
              "Experiencia del usuario",
              "Enunciado y Discurso Gráﬁco",
              "Jesucristo y Aprendizajes Vitales",
              "Laboratorio de Construcción de Imagen",
              "Expresión plástica",
              "Animación 2D"
            ],
            [
              "Culturas visuales",
              "Ética e Interculturalidad",
              "Diseño Editorial",
              "Diseño para información",
              "Comunicación y Producción",
              "Ingeniería de Papel y Empaques"
            ],
            [
              "Seminario de Titulación",
              "Diseño para Nuevos Medios",
              "Diseño Futuro",
              "Código creativo",
              "Asignatura 1 de Itinerario",
              "Asignatura 2 de Itinerario"
            ],
            [
              "Laboratorio 1: Exploración y Retos",
              "Introducción a los Lenguajes Visuales",
              "Ciencia de los Materiales: Propiedades, Procesos y Ciclos",
              "Historia y Pensamiento de las Prácticas Creativas Globales",
              "Integración Curricular",
              "Redacción Académica del Trabajo de Titulación"
            ],
            [
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario",
              "Comunicación y Persuasión",
              "Gestión de Marca Personal",
              "Media Training y Estrategias",
              "Creación y Gestión de Contenidos Multiplataforma"
            ],
            [
              "Métodos de Computación Creativa",
              "Laboratorio de Creación Digital",
              "Laboratorio de Fabricación Digital",
              "Introducción al Emprendimiento y Modelos de Negocios Innovadores",
              "Identidad y Marketing Aplicado al Emprendimiento",
              "Operaciones e Innovación Organizacional en el Proceso de Producción"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Diseño Gráfico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Laboratorio 2: Experimentación y Cocreación": "Laboratorio 2: Experimentación y Cocreación en Diseño Gráfico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Lenguajes Visuales Aplicados": "Lenguajes Visuales Aplicados en Diseño Gráfico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Materia y Recursos: Enfoque Sostenible": "Materia y Recursos: Enfoque Sostenible en Diseño Gráfico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Historia y Pensamiento de las Prácticas Creativas Latinoamericanas": "Historia y Pensamiento de las Prácticas Creativas Latinoamericanas en Diseño Gráfico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Fotografía Creativa": "Fotografía Creativa en Diseño Gráfico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Modelado y Animación 3D": "Modelado y Animación 3D en Diseño Gráfico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Producción Audiovisual": "Producción Audiovisual en Diseño Gráfico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Pensamiento crítico visual": "Pensamiento crítico visual en Diseño Gráfico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Ecología Integral": "Ecología Integral en Diseño Gráfico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Diseño de Identidad": "Diseño de Identidad en Diseño Gráfico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Diseño estratégico": "Diseño estratégico en Diseño Gráfico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Experiencia del usuario": "Experiencia del usuario en Diseño Gráfico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Enunciado y Discurso Gráﬁco": "Enunciado y Discurso Gráﬁco en Diseño Gráfico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Diseño Gráfico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Laboratorio de Construcción de Imagen": "Laboratorio de Construcción de Imagen en Diseño Gráfico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Expresión plástica": "Expresión plástica en Diseño Gráfico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Animación 2D": "Animación 2D en Diseño Gráfico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Culturas visuales": "Culturas visuales en Diseño Gráfico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Diseño Gráfico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Diseño Editorial": "Diseño Editorial en Diseño Gráfico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Diseño para información": "Diseño para información en Diseño Gráfico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Comunicación y Producción": "Comunicación y Producción en Diseño Gráfico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ingeniería de Papel y Empaques": "Ingeniería de Papel y Empaques en Diseño Gráfico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Seminario de Titulación": "Seminario de Titulación en Diseño Gráfico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Diseño para Nuevos Medios": "Diseño para Nuevos Medios en Diseño Gráfico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Diseño Futuro": "Diseño Futuro en Diseño Gráfico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Código creativo": "Código creativo en Diseño Gráfico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 1 de Itinerario": "Asignatura 1 de Itinerario en Diseño Gráfico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Diseño Gráfico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Laboratorio 1: Exploración y Retos": "Laboratorio 1: Exploración y Retos en Diseño Gráfico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Introducción a los Lenguajes Visuales": "Introducción a los Lenguajes Visuales en Diseño Gráfico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ciencia de los Materiales: Propiedades, Procesos y Ciclos": "Ciencia de los Materiales: Propiedades, Procesos y Ciclos en Diseño Gráfico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Historia y Pensamiento de las Prácticas Creativas Globales": "Historia y Pensamiento de las Prácticas Creativas Globales en Diseño Gráfico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Integración Curricular": "Integración Curricular en Diseño Gráfico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Redacción Académica del Trabajo de Titulación": "Redacción Académica del Trabajo de Titulación en Diseño Gráfico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Diseño Gráfico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Diseño Gráfico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Comunicación y Persuasión": "Comunicación y Persuasión en Diseño Gráfico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Gestión de Marca Personal": "Gestión de Marca Personal en Diseño Gráfico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Media Training y Estrategias": "Media Training y Estrategias en Diseño Gráfico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Creación y Gestión de Contenidos Multiplataforma": "Creación y Gestión de Contenidos Multiplataforma en Diseño Gráfico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Métodos de Computación Creativa": "Métodos de Computación Creativa en Diseño Gráfico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Laboratorio de Creación Digital": "Laboratorio de Creación Digital en Diseño Gráfico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Laboratorio de Fabricación Digital": "Laboratorio de Fabricación Digital en Diseño Gráfico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Introducción al Emprendimiento y Modelos de Negocios Innovadores": "Introducción al Emprendimiento y Modelos de Negocios Innovadores en Diseño Gráfico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Identidad y Marketing Aplicado al Emprendimiento": "Identidad y Marketing Aplicado al Emprendimiento en Diseño Gráfico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Operaciones e Innovación Organizacional en el Proceso de Producción": "Operaciones e Innovación Organizacional en el Proceso de Producción en Diseño Gráfico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Comunicación Asertiva y Gestión de Contenidos",
              "subjects": [
                "Especialización I (Comunicación Asertiv)",
                "Especialización II (Comunicación Asertiv)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Tecnologías Creativas para un Mundo Digital",
              "subjects": [
                "Especialización I (Tecnologías Creativa)",
                "Especialización II (Tecnologías Creativa)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Emprendimiento en los Negocios",
              "subjects": [
                "Especialización I (Emprendimiento en lo)",
                "Especialización II (Emprendimiento en lo)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "ingenieria_civil": {
        "name": "Ingeniería Civil",
        "items": [
          5,
          11,
          17,
          23,
          29,
          35
        ],
        "pdf": "ingenieria-civil-202401.pdf",
        "semesters_count": 9,
        "description": "Diseñarás, calcularás y construirás grandes infraestructuras: puentes, edificios sismorresistentes, redes hidráulicas, vías y túneles, aplicando análisis de materiales y respeto ambiental.",
        "fieldOfWork": "Empresas de infraestructura y construcción, fiscalización de obras públicas, consultoría geotécnica e hidráulica, municipios y ministerios.",
        "skills": [
          "Cálculo estructural sismorresistente",
          "Mecánica de suelos y geotecnia",
          "Ingeniería hidráulica y sanitaria",
          "Gestión y fiscalización de obras"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "9 semestres presenciales"
          },
          {
            "topText": "Ensayos",
            "highlight": "MTS",
            "title": "laboratorio sismo",
            "bottomText": "Ensayos de hormigón y mecánica de suelos"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Cálculo y Resiliencia Sísmica de un Puente",
          "scenario": "Se proyecta un puente vehicular sobre un río en una zona de alta sismicidad con suelo aluvial blando.",
          "description": "Define la solución geotécnica y estructural primaria:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Qué sistema de cimentación y disipación de energía estructural seleccionas?",
              "options": [
                {
                  "text": "Cimentación profunda con pilotes perforados hasta estrato rocoso e instalando aisladores sísmicos elastoméricos en los estribos.",
                  "next": "success"
                },
                {
                  "text": "Zapatas superficiales de hormigón simple sin aisladores para abaratar los tiempos de fundición de pilotes.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Respuesta ingenieril impecable! En suelos aluviales los pilotes transfieren las cargas al estrato competente y los aisladores elastoméricos absorben hasta el 80% de la energía de un terremoto.",
            "failure": "Las zapatas superficiales en suelo aluvial corren riesgo crítico de asentamiento diferencial y colapso durante un sismo por licuefacción del suelo."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Cálculo II",
              "Estadística Aplicada",
              "Programación I",
              "Ciencia de los Materiales: Propiedades, Procesos y Ciclos",
              "Álgebra Lineal y Geometría Analítica"
            ],
            [
              "Hidrología",
              "Mecánica de Suelos y Laboratorio",
              "Geomática-Topografía II",
              "Costos y Programación de Obra",
              "Ecología Integral",
              "Estructuras del Hormigón I"
            ],
            [
              "Sanitaria I",
              "Geotecnia Aplicada II y Ensayos de Campo",
              "Jesucristo y Aprendizajes Vitales",
              "Mecánica para Ingenieros: Estática",
              "Mecánica para Ingenieros: Dinámica",
              "Análisis Numérico para Ingeniería"
            ],
            [
              "Geomática-Topografía I",
              "Ética e Interculturalidad",
              "Resistencia de Materiales II",
              "Hidráulica General",
              "Instalaciones en Ediﬁcaciones Sostenibles",
              "Geotecnia Aplicada I y Laboratorio"
            ],
            [
              "Estructuras del Hormigón II",
              "Análisis Matricial",
              "Estructuras de Acero",
              "Sanitaria II",
              "Diseño y Evaluación de Proyectos",
              "Diseño de Pavimentos y Laboratorio"
            ],
            [
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario",
              "Puentes",
              "Diseño Sismorresistente",
              "Fiscalización y Residencia de Obras Civiles",
              "Conocimiento, Palabra y Cambio Social"
            ],
            [
              "Física General",
              "Pensamiento Computacional",
              "Innovación y Creatividad",
              "Técnicas Gráﬁcas y Geométricas",
              "Seminario de Titulación",
              "Asignatura 1 de Itinerario"
            ],
            [
              "Hormigón Presforzado",
              "Cimentaciones y Métodos Computa- cionales Impacto Ambiental en Obras Civiles",
              "Procesamiento Tridimensional de Información (BIM)",
              "Laboratorio, Normativa y Procesos",
              "Gestión de Seguridad y Ambiente en Obra",
              "Comunicación y Evaluación del Proyecto"
            ],
            [
              "Movilidad Sostenible",
              "Resiliencia y Cambio Climático",
              "Proyecto de Aplicación",
              "Fundamentos de Inteligencia Artiﬁcial",
              "Análisis, Procesamiento y Aplicación de Inteligencia Artiﬁcial",
              "Técnicas de Inteligencia Artiﬁcial"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Ingeniería Civil: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Cálculo II": "Cálculo II en Ingeniería Civil: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Estadística Aplicada": "Estadística Aplicada en Ingeniería Civil: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Programación I": "Programación I en Ingeniería Civil: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ciencia de los Materiales: Propiedades, Procesos y Ciclos": "Ciencia de los Materiales: Propiedades, Procesos y Ciclos en Ingeniería Civil: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Álgebra Lineal y Geometría Analítica": "Álgebra Lineal y Geometría Analítica en Ingeniería Civil: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Hidrología": "Hidrología en Ingeniería Civil: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Mecánica de Suelos y Laboratorio": "Mecánica de Suelos y Laboratorio en Ingeniería Civil: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Geomática-Topografía II": "Geomática-Topografía II en Ingeniería Civil: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Costos y Programación de Obra": "Costos y Programación de Obra en Ingeniería Civil: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Ingeniería Civil: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Estructuras del Hormigón I": "Estructuras del Hormigón I en Ingeniería Civil: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Sanitaria I": "Sanitaria I en Ingeniería Civil: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Geotecnia Aplicada II y Ensayos de Campo": "Geotecnia Aplicada II y Ensayos de Campo en Ingeniería Civil: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Ingeniería Civil: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Mecánica para Ingenieros: Estática": "Mecánica para Ingenieros: Estática en Ingeniería Civil: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Mecánica para Ingenieros: Dinámica": "Mecánica para Ingenieros: Dinámica en Ingeniería Civil: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Análisis Numérico para Ingeniería": "Análisis Numérico para Ingeniería en Ingeniería Civil: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Geomática-Topografía I": "Geomática-Topografía I en Ingeniería Civil: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Ingeniería Civil: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Resistencia de Materiales II": "Resistencia de Materiales II en Ingeniería Civil: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Hidráulica General": "Hidráulica General en Ingeniería Civil: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Instalaciones en Ediﬁcaciones Sostenibles": "Instalaciones en Ediﬁcaciones Sostenibles en Ingeniería Civil: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Geotecnia Aplicada I y Laboratorio": "Geotecnia Aplicada I y Laboratorio en Ingeniería Civil: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Estructuras del Hormigón II": "Estructuras del Hormigón II en Ingeniería Civil: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Análisis Matricial": "Análisis Matricial en Ingeniería Civil: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Estructuras de Acero": "Estructuras de Acero en Ingeniería Civil: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Sanitaria II": "Sanitaria II en Ingeniería Civil: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Diseño y Evaluación de Proyectos": "Diseño y Evaluación de Proyectos en Ingeniería Civil: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Diseño de Pavimentos y Laboratorio": "Diseño de Pavimentos y Laboratorio en Ingeniería Civil: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Ingeniería Civil: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Ingeniería Civil: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Puentes": "Puentes en Ingeniería Civil: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Diseño Sismorresistente": "Diseño Sismorresistente en Ingeniería Civil: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Fiscalización y Residencia de Obras Civiles": "Fiscalización y Residencia de Obras Civiles en Ingeniería Civil: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Ingeniería Civil: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Física General": "Física General en Ingeniería Civil: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Pensamiento Computacional": "Pensamiento Computacional en Ingeniería Civil: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Innovación y Creatividad": "Innovación y Creatividad en Ingeniería Civil: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Técnicas Gráﬁcas y Geométricas": "Técnicas Gráﬁcas y Geométricas en Ingeniería Civil: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Seminario de Titulación": "Seminario de Titulación en Ingeniería Civil: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 1 de Itinerario": "Asignatura 1 de Itinerario en Ingeniería Civil: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Hormigón Presforzado": "Hormigón Presforzado en Ingeniería Civil: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Cimentaciones y Métodos Computa- cionales Impacto Ambiental en Obras Civiles": "Cimentaciones y Métodos Computa- cionales Impacto Ambiental en Obras Civiles en Ingeniería Civil: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Procesamiento Tridimensional de Información (BIM)": "Procesamiento Tridimensional de Información (BIM) en Ingeniería Civil: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Laboratorio, Normativa y Procesos": "Laboratorio, Normativa y Procesos en Ingeniería Civil: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Gestión de Seguridad y Ambiente en Obra": "Gestión de Seguridad y Ambiente en Obra en Ingeniería Civil: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Comunicación y Evaluación del Proyecto": "Comunicación y Evaluación del Proyecto en Ingeniería Civil: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Movilidad Sostenible": "Movilidad Sostenible en Ingeniería Civil: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Resiliencia y Cambio Climático": "Resiliencia y Cambio Climático en Ingeniería Civil: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Proyecto de Aplicación": "Proyecto de Aplicación en Ingeniería Civil: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fundamentos de Inteligencia Artiﬁcial": "Fundamentos de Inteligencia Artiﬁcial en Ingeniería Civil: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Análisis, Procesamiento y Aplicación de Inteligencia Artiﬁcial": "Análisis, Procesamiento y Aplicación de Inteligencia Artiﬁcial en Ingeniería Civil: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Técnicas de Inteligencia Artiﬁcial": "Técnicas de Inteligencia Artiﬁcial en Ingeniería Civil: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: 7",
              "subjects": [
                "Especialización I (7)",
                "Especialización II (7)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Herramientas Digitales",
              "subjects": [
                "Especialización I (Herramientas Digital)",
                "Especialización II (Herramientas Digital)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Ciudades Sostenibles",
              "subjects": [
                "Especialización I (Ciudades Sostenibles)",
                "Especialización II (Ciudades Sostenibles)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "sistemas_informacion": {
        "name": "Ingeniería en Sistemas de Información",
        "items": [
          6,
          12,
          18,
          24,
          30,
          36
        ],
        "pdf": "ingenieria-en-sistemas-de-informacion-202401.pdf",
        "semesters_count": 8,
        "description": "Aprenderás a diseñar y programar soluciones tecnológicas escalables: software empresarial, aplicaciones seguras, arquitecturas en la nube, sistemas inteligentes y bases de datos transaccionales.",
        "fieldOfWork": "Empresas tecnológicas globales, banca fintech, startups, áreas de TI corporativas, consultoría en ciberseguridad y arquitectura cloud.",
        "skills": [
          "Desarrollo de software y APIs",
          "Arquitectura en la nube y DevOps",
          "Seguridad informática",
          "Bases de datos y microservicios"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Empleabilidad",
            "highlight": "98%",
            "title": "demanda internacional",
            "bottomText": "Convenios con AWS Academy y Microsoft"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Arquitectura Cloud Escalable y Segura",
          "scenario": "Una plataforma médica digital espera un incremento del 500% de usuarios concurrentes manteniendo confidencialidad estricta de historias clínicas.",
          "description": "Elige el diseño arquitectónico de base:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cómo estructuras la infraestructura para garantizar resiliencia y privacidad de datos?",
              "options": [
                {
                  "text": "Arquitectura de microservicios con orquestación de contenedores (Kubernetes), balanceadores de carga y cifrado AES-256 en reposo y tránsito.",
                  "next": "success"
                },
                {
                  "text": "Un único servidor centralizado monolítico accesible por IP pública sin certificados TLS para reducir la latencia.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Criterio de arquitectura senior! El escalamiento horizontal de microservicios tolera fallos y el cifrado integral cumple los más altos estándares de gobernanza de datos.",
            "failure": "Un servidor monolítico expuesto por IP pública es vulnerable a ataques de denegación de servicio (DDoS) y vulnera la privacidad de los pacientes."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Cálculo II",
              "Estadística Aplicada",
              "Programación I",
              "Ciencia de los Materiales: Propiedades, Procesos y Ciclos",
              "Algebra Lineal y Geometría Analítica"
            ],
            [
              "Programación III",
              "Programación IV",
              "Bases de Datos I",
              "Infraestructura",
              "Ecología Integral",
              "Desarrollo de Software Seguro"
            ],
            [
              "Inteligencia Artiﬁcial",
              "Emprendimiento Tecnológico",
              "Jesucristo y Aprendizajes Vitales",
              "Ingeniería de Requerimientos",
              "Programación II",
              "Cálculo de Predicados"
            ],
            [
              "Ética e Interculturalidad",
              "Interacción Humano Computadora",
              "Desarrollo en Plataformas",
              "Ingeniería de Software",
              "Bases de Datos II",
              "Arquitectuta Empresarial"
            ],
            [
              "Asignatura 2 de Itinerario",
              "Inteligencia de Negocios",
              "Ciencia de Datos",
              "Diseño y Evaluación de Proyectos",
              "Conocimiento, Palabra y Cambio Social",
              "Cálculo I"
            ],
            [
              "Pensamiento Computacional",
              "Innovación y Creatividad",
              "Técnicas Gráﬁcas y Geométricas",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario"
            ],
            [
              "Big Data",
              "Minería de Datos y Metodologías",
              "Dirección de Proyectos",
              "Inicio y Planiﬁcación del Proyecto",
              "Ejecución, Monitoreo, Control y Cierre del Proyecto",
              "Gestión Ágil de Proyectos"
            ],
            [
              "Análisis, Procesamiento y Aplicación de Inteligencia Artiﬁcial",
              "Técnicas de Inteligencia Artiﬁcial",
              "Proyecto Aplicado de Inteligencia Artiﬁcial",
              "Pensamiento y Crítica del Mundo Digital",
              "Métodos de Computación Creativa",
              "Laboratorio de Creación Digital"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Ingeniería en Sistemas de Información: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Cálculo II": "Cálculo II en Ingeniería en Sistemas de Información: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Estadística Aplicada": "Estadística Aplicada en Ingeniería en Sistemas de Información: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Programación I": "Programación I en Ingeniería en Sistemas de Información: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ciencia de los Materiales: Propiedades, Procesos y Ciclos": "Ciencia de los Materiales: Propiedades, Procesos y Ciclos en Ingeniería en Sistemas de Información: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Algebra Lineal y Geometría Analítica": "Algebra Lineal y Geometría Analítica en Ingeniería en Sistemas de Información: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Programación III": "Programación III en Ingeniería en Sistemas de Información: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Programación IV": "Programación IV en Ingeniería en Sistemas de Información: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Bases de Datos I": "Bases de Datos I en Ingeniería en Sistemas de Información: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Infraestructura": "Infraestructura en Ingeniería en Sistemas de Información: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Ingeniería en Sistemas de Información: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Desarrollo de Software Seguro": "Desarrollo de Software Seguro en Ingeniería en Sistemas de Información: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Inteligencia Artiﬁcial": "Inteligencia Artiﬁcial en Ingeniería en Sistemas de Información: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Emprendimiento Tecnológico": "Emprendimiento Tecnológico en Ingeniería en Sistemas de Información: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Ingeniería en Sistemas de Información: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Ingeniería de Requerimientos": "Ingeniería de Requerimientos en Ingeniería en Sistemas de Información: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Programación II": "Programación II en Ingeniería en Sistemas de Información: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Cálculo de Predicados": "Cálculo de Predicados en Ingeniería en Sistemas de Información: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Ingeniería en Sistemas de Información: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Interacción Humano Computadora": "Interacción Humano Computadora en Ingeniería en Sistemas de Información: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Desarrollo en Plataformas": "Desarrollo en Plataformas en Ingeniería en Sistemas de Información: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Ingeniería de Software": "Ingeniería de Software en Ingeniería en Sistemas de Información: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Bases de Datos II": "Bases de Datos II en Ingeniería en Sistemas de Información: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Arquitectuta Empresarial": "Arquitectuta Empresarial en Ingeniería en Sistemas de Información: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Ingeniería en Sistemas de Información: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Inteligencia de Negocios": "Inteligencia de Negocios en Ingeniería en Sistemas de Información: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ciencia de Datos": "Ciencia de Datos en Ingeniería en Sistemas de Información: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Diseño y Evaluación de Proyectos": "Diseño y Evaluación de Proyectos en Ingeniería en Sistemas de Información: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Ingeniería en Sistemas de Información: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Cálculo I": "Cálculo I en Ingeniería en Sistemas de Información: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Pensamiento Computacional": "Pensamiento Computacional en Ingeniería en Sistemas de Información: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Innovación y Creatividad": "Innovación y Creatividad en Ingeniería en Sistemas de Información: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Técnicas Gráﬁcas y Geométricas": "Técnicas Gráﬁcas y Geométricas en Ingeniería en Sistemas de Información: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Ingeniería en Sistemas de Información: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Ingeniería en Sistemas de Información: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Ingeniería en Sistemas de Información: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Big Data": "Big Data en Ingeniería en Sistemas de Información: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Minería de Datos y Metodologías": "Minería de Datos y Metodologías en Ingeniería en Sistemas de Información: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Dirección de Proyectos": "Dirección de Proyectos en Ingeniería en Sistemas de Información: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Inicio y Planiﬁcación del Proyecto": "Inicio y Planiﬁcación del Proyecto en Ingeniería en Sistemas de Información: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ejecución, Monitoreo, Control y Cierre del Proyecto": "Ejecución, Monitoreo, Control y Cierre del Proyecto en Ingeniería en Sistemas de Información: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Gestión Ágil de Proyectos": "Gestión Ágil de Proyectos en Ingeniería en Sistemas de Información: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Análisis, Procesamiento y Aplicación de Inteligencia Artiﬁcial": "Análisis, Procesamiento y Aplicación de Inteligencia Artiﬁcial en Ingeniería en Sistemas de Información: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Técnicas de Inteligencia Artiﬁcial": "Técnicas de Inteligencia Artiﬁcial en Ingeniería en Sistemas de Información: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Proyecto Aplicado de Inteligencia Artiﬁcial": "Proyecto Aplicado de Inteligencia Artiﬁcial en Ingeniería en Sistemas de Información: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Pensamiento y Crítica del Mundo Digital": "Pensamiento y Crítica del Mundo Digital en Ingeniería en Sistemas de Información: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Métodos de Computación Creativa": "Métodos de Computación Creativa en Ingeniería en Sistemas de Información: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Laboratorio de Creación Digital": "Laboratorio de Creación Digital en Ingeniería en Sistemas de Información: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Gestión de Proyectos (Project Magnament)",
              "subjects": [
                "Especialización I (Gestión de Proyectos)",
                "Especialización II (Gestión de Proyectos)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Inteligencia Artificial Aplicada",
              "subjects": [
                "Especialización I (Inteligencia Artific)",
                "Especialización II (Inteligencia Artific)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Tecnologías Creativas Para un Mundo Digital",
              "subjects": [
                "Especialización I (Tecnologías Creativa)",
                "Especialización II (Tecnologías Creativa)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      }
    },
    "questions": [
      {
        "id": 1,
        "text": "¿Te interesa integrar conocimientos de mecánica, electricidad, materiales y procesos para optimizar sistemas productivos e industriales complejos?"
      },
      {
        "id": 2,
        "text": "¿Sientes inclinación por proyectar edificaciones y espacios urbanos integrando estética, funcionalidad espacial y sostenibilidad ambiental?"
      },
      {
        "id": 3,
        "text": "¿Te motiva trabajar con grandes volúmenes de datos, entrenamiento de modelos predictivos y algoritmos de inteligencia artificial?"
      },
      {
        "id": 4,
        "text": "¿Te apasiona la comunicación visual, el diseño de marcas (branding), la tipografía y el desarrollo de interfaces y experiencias digitales (UI/UX)?"
      },
      {
        "id": 5,
        "text": "¿Te ves calculando estructuras de hormigón o acero, analizando la mecánica de suelos y liderando la construcción de obras civiles e hidráulicas?"
      },
      {
        "id": 6,
        "text": "¿Te atrae la arquitectura de software, el diseño de bases de datos empresariales y la ciberseguridad en infraestructuras tecnológicas?"
      },
      {
        "id": 7,
        "text": "¿Te visualizas diagnosticando fallas electromecánicas y liderando la automatización y el control de líneas de producción industrial?"
      },
      {
        "id": 8,
        "text": "¿Disfrutas concibiendo maquetas, interpretando planos topográficos y diseñando soluciones arquitectónicas adaptadas al clima local?"
      },
      {
        "id": 9,
        "text": "¿Te gustaría entrenar redes neuronales profundas para clasificar imágenes satelitales, detectar anomalías o pronosticar tendencias complejas?"
      },
      {
        "id": 10,
        "text": "¿Te entusiasma diseñar sistemas de identidad gráfica, envases y piezas editoriales combinando composición, color y semiótica visual?"
      },
      {
        "id": 11,
        "text": "¿Te motiva diseñar sistemas de distribución de agua potable, alcantarillado sanitario y obras de mitigación de riesgos de inundación?"
      },
      {
        "id": 12,
        "text": "¿Te interesa diseñar aplicaciones web y móviles escalables, gestionando servicios en la nube (cloud computing) y microservicios?"
      },
      {
        "id": 13,
        "text": "¿Te atrae el diseño de máquinas térmicas, sistemas de fluidos y la integración de energías renovables en la matriz industrial?"
      },
      {
        "id": 14,
        "text": "¿Te interesa la rehabilitación de edificaciones patrimoniales y la planificación del desarrollo territorial y movilidad urbana?"
      },
      {
        "id": 15,
        "text": "¿Te visualizas creando cuadros de mando analíticos (dashboards) y pipelines automatizados de datos para la toma de decisiones empresariales?"
      },
      {
        "id": 16,
        "text": "¿Te llama la atención la narrativa audiovisual, el diseño editorial digital y la animación para campañas multiplataforma con impacto cultural?"
      },
      {
        "id": 17,
        "text": "¿Te gustaría supervisar en campo el control de calidad de materiales de construcción (hormigón, asfalto, acero) según normas técnicas?"
      },
      {
        "id": 18,
        "text": "¿Te ves formulando políticas de seguridad de la información, auditoría informática y planes de continuidad de negocio ante incidentes de ciberataques?"
      },
      {
        "id": 19,
        "text": "¿Te interesa implementar sistemas de gestión de la calidad total y manufactura esbelta (Lean Manufacturing) para reducir desperdicios?"
      },
      {
        "id": 20,
        "text": "¿Te gustaría explorar cómo los materiales innovadores y la arquitectura bioclimática reducen la huella de carbono de las ciudades?"
      },
      {
        "id": 21,
        "text": "¿Te entusiasma aplicar estadística bayesiana, minería de datos y procesamiento de lenguaje natural (NLP) a problemas del mundo real?"
      },
      {
        "id": 22,
        "text": "¿Disfrutas prototipando interfaces interactivas centradas en el usuario mediante metodologías de Design Thinking y pruebas de usabilidad?"
      },
      {
        "id": 23,
        "text": "¿Te atrae el cálculo sísmico de estructuras complejas (edificios altos, puentes colgantes) para garantizar la seguridad de la población?"
      },
      {
        "id": 24,
        "text": "¿Te apasiona conectar sistemas heterogéneos mediante APIs REST y diseñar arquitecturas tolerantes a fallos con alta disponibilidad?"
      },
      {
        "id": 25,
        "text": "¿Te gustaría dirigir proyectos interdisciplinarios que articulen requerimientos mecánicos, eléctricos y de software en plantas productivas?"
      },
      {
        "id": 26,
        "text": "¿Te imaginas fundando o liderando un taller de diseño arquitectónico enfocado en vivienda social y regeneración del espacio público?"
      },
      {
        "id": 27,
        "text": "¿Te interesa el diseño de arquitecturas analíticas y el despliegue de soluciones de inteligencia artificial aplicada a problemas científicos?"
      },
      {
        "id": 28,
        "text": "¿Te ves liderando la dirección de arte en un estudio creativo, coordinando ilustración, fotografía y diseño para marcas globales?"
      },
      {
        "id": 29,
        "text": "¿Te motiva diseñar infraestructuras viales seguras (carreteras, intercambiadores, túneles) optimizando trazados geométricos y pavimentos?"
      },
      {
        "id": 30,
        "text": "¿Te visualizas como el puente estratégico entre las necesidades del negocio y los equipos de desarrollo tecnológico y analítica?"
      },
      {
        "id": 31,
        "text": "¿Te atrae investigar nuevos materiales compuestos y nanomateriales para aplicaciones en eficiencia energética e industria limpia?"
      },
      {
        "id": 32,
        "text": "¿Te motiva estudiar la relación entre la luz natural, la acústica y la habitabilidad de los espacios interiores en la arquitectura contemporánea?"
      },
      {
        "id": 33,
        "text": "¿Te interesa el modelado predictivo para anticipar eventos climáticos, dinámicas de tráfico urbano o patrones de consumo?"
      },
      {
        "id": 34,
        "text": "¿Te gustaría crear sistemas de señalética, diseño de información accesible y pictogramas para entornos hospitalarios o de transporte?"
      },
      {
        "id": 35,
        "text": "¿Te apasiona la ingeniería geotécnica, la estabilidad de taludes y el diseño de cimentaciones profundas en suelos difíciles?"
      },
      {
        "id": 36,
        "text": "¿Te imaginas creando tu propia startup tecnológica de software o consultora especializada en transformación digital e IA?"
      }
    ]
  },
  "sostenibilidad": {
    "macroareaId": "sostenibilidad",
    "title": "Sostenibilidad y Recursos Naturales",
    "shortName": "Sostenibilidad",
    "color": "#06b2b3",
    "iconName": "Leaf",
    "faculty": "Facultad de Ciencias Exactas, Naturales y Ambientales",
    "description": "Estudio de la biodiversidad, ecosistemas, biotecnología, química y ciencia ambiental.",
    "careers": {
      "biologia": {
        "name": "Biología",
        "items": [
          1,
          3,
          5,
          7,
          9,
          11
        ],
        "pdf": "biologia-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Ciencias Exactas, Naturales y Ambientales",
        "description": "Estudiarás la vida en todas sus escalas, desde la genética molecular hasta los ecosistemas megadiversos del Ecuador, liderando proyectos de conservación, biotecnología y sostenibilidad ecológica.",
        "fieldOfWork": "Centros de investigación científica, reservas naturales y parques nacionales, ONGs ambientales, consultoría de impacto ecológico y biotecnología.",
        "skills": [
          "Ecología y conservación de biodiversidad",
          "Genética molecular y evolución",
          "Técnicas de muestreo de campo y laboratorio",
          "Bioestadística y bioinformática"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "QCAZ",
            "highlight": "Top #1",
            "title": "museo de zoología",
            "bottomText": "Colecciones científicas de referencia mundial"
          }
        ],
        "caseStudy": {
          "type": "matching",
          "title": "Monitoreo de Biodiversidad en la Reserva Yasuní",
          "scenario": "Un equipo de biólogos necesita evaluar el impacto del cambio climático en diferentes estratos del bosque tropical.",
          "description": "Relaciona cada metodología de muestreo con el grupo biológico adecuado:",
          "leftItems": [
            {
              "id": "redes",
              "label": "Redes de niebla en sotobosque"
            },
            {
              "id": "camaras",
              "label": "Cámaras trampa con sensor térmico"
            },
            {
              "id": "adn",
              "label": "eDNA (ADN ambiental en agua)"
            }
          ],
          "rightItems": [
            {
              "id": "redes",
              "label": "Monitoreo de avifauna y murciélagos polinizadores"
            },
            {
              "id": "camaras",
              "label": "Registro de mamíferos crípticos y grandes felinos"
            },
            {
              "id": "adn",
              "label": "Detección rápida de anfibios y peces sin captura directa"
            }
          ],
          "feedback": {
            "success": "¡Dominio metodológico en biología de campo! La combinación de técnicas directas y moleculares proporciona un censo ecológico no invasivo y de alta precisión.",
            "failure": "Algunas metodologías no son óptimas para el grupo biológico; recuerda que los métodos moleculares como eDNA son ideales para especies acuáticas difíciles de avistar."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Fundamentos de Microbiología",
              "Química Orgánica Básica",
              "Matemática II",
              "Fundamentos de Genética",
              "Ecología y Ecosistemas"
            ],
            [
              "Biología de la Conservación",
              "Evolución",
              "Biología Integrativa I",
              "Biología de Hongos",
              "Ecología Integral",
              "Diversidad de Plantas y Etnobotánica"
            ],
            [
              "Biología Celular y del Desarrollo",
              "Bioinformática",
              "Jesucristo y Aprendizajes Vitales",
              "Macromoléculas y Metabolismo",
              "Biodiversidad de Algas y Plantas",
              "Ecología Humana"
            ],
            [
              "Ética e Interculturalidad",
              "Plantas con Semilla",
              "Zoología de Invertebrados",
              "Biología Molecular",
              "Biología Integrativa II",
              "Recursos Naturales"
            ],
            [
              "Asignatura 2 de Itinerario*",
              "Zoología de Vertebrados",
              "Biogeografía",
              "Fisiología Animal y Vegetal",
              "Conocimiento, Palabra y Cambio Social",
              "Fundamentos de Biología"
            ],
            [
              "Física I",
              "Ecuador Megadiverso",
              "Matemática I",
              "Integración Curricular",
              "Asignatura 3 de Itinerario*",
              "Asignatura 4 de itinerario*"
            ],
            [
              "Técnicas de Investigación en Biología",
              "Ecología de Comunidades y Ecosistemas",
              "Exploración de Datos",
              "Visualización Avanzada de Datos",
              "Analítica de Datos",
              "Aplicación de la Ciencia de Datos"
            ],
            [
              "Salud Pública",
              "Salud Global Aplicada (Salud Global IV)",
              "Epidemiología",
              "Introducción a la Economía Sostenible",
              "Sostenibilidad Ambiental y Cambio Climático",
              "Heramientas para la Valoración Ambiental"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Biología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fundamentos de Microbiología": "Fundamentos de Microbiología en Biología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Química Orgánica Básica": "Química Orgánica Básica en Biología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Matemática II": "Matemática II en Biología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Fundamentos de Genética": "Fundamentos de Genética en Biología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ecología y Ecosistemas": "Ecología y Ecosistemas en Biología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Biología de la Conservación": "Biología de la Conservación en Biología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Evolución": "Evolución en Biología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Biología Integrativa I": "Biología Integrativa I en Biología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Biología de Hongos": "Biología de Hongos en Biología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Biología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Diversidad de Plantas y Etnobotánica": "Diversidad de Plantas y Etnobotánica en Biología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Biología Celular y del Desarrollo": "Biología Celular y del Desarrollo en Biología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Bioinformática": "Bioinformática en Biología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Biología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Macromoléculas y Metabolismo": "Macromoléculas y Metabolismo en Biología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Biodiversidad de Algas y Plantas": "Biodiversidad de Algas y Plantas en Biología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ecología Humana": "Ecología Humana en Biología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Biología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Plantas con Semilla": "Plantas con Semilla en Biología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Zoología de Invertebrados": "Zoología de Invertebrados en Biología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Biología Molecular": "Biología Molecular en Biología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Biología Integrativa II": "Biología Integrativa II en Biología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Recursos Naturales": "Recursos Naturales en Biología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de Itinerario*": "Asignatura 2 de Itinerario* en Biología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Zoología de Vertebrados": "Zoología de Vertebrados en Biología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Biogeografía": "Biogeografía en Biología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fisiología Animal y Vegetal": "Fisiología Animal y Vegetal en Biología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Biología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Fundamentos de Biología": "Fundamentos de Biología en Biología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Física I": "Física I en Biología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ecuador Megadiverso": "Ecuador Megadiverso en Biología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Matemática I": "Matemática I en Biología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Biología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario*": "Asignatura 3 de Itinerario* en Biología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de itinerario*": "Asignatura 4 de itinerario* en Biología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Técnicas de Investigación en Biología": "Técnicas de Investigación en Biología en Biología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ecología de Comunidades y Ecosistemas": "Ecología de Comunidades y Ecosistemas en Biología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Exploración de Datos": "Exploración de Datos en Biología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Visualización Avanzada de Datos": "Visualización Avanzada de Datos en Biología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Analítica de Datos": "Analítica de Datos en Biología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Aplicación de la Ciencia de Datos": "Aplicación de la Ciencia de Datos en Biología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Salud Pública": "Salud Pública en Biología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Salud Global Aplicada (Salud Global IV)": "Salud Global Aplicada (Salud Global IV) en Biología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Epidemiología": "Epidemiología en Biología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Introducción a la Economía Sostenible": "Introducción a la Economía Sostenible en Biología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Sostenibilidad Ambiental y Cambio Climático": "Sostenibilidad Ambiental y Cambio Climático en Biología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Heramientas para la Valoración Ambiental": "Heramientas para la Valoración Ambiental en Biología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Ciencias de Datos con Aplicaciones Prácticas",
              "subjects": [
                "Especialización I (Ciencias de Datos co)",
                "Especialización II (Ciencias de Datos co)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: ONE HEALTH",
              "subjects": [
                "Especialización I (ONE HEALTH)",
                "Especialización II (ONE HEALTH)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Economía y Ambiente",
              "subjects": [
                "Especialización I (Economía y Ambiente)",
                "Especialización II (Economía y Ambiente)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "quimica": {
        "name": "Química",
        "items": [
          2,
          4,
          6,
          8,
          10,
          12
        ],
        "pdf": null,
        "semesters_count": 8,
        "faculty": "Facultad de Ciencias Exactas, Naturales y Ambientales",
        "description": "Formamos profesionales competentes en el análisis químico e investigación científica, con amplia experiencia en síntesis, técnicas instrumentales y desarrollo de nuevos materiales sostenibles.",
        "fieldOfWork": "Industria farmacéutica, laboratorios de control de calidad, centros de I+D en nanotecnología y electroquímica, peritaje químico-ambiental e industria petroquímica y de alimentos.",
        "skills": [
          "Análisis químico instrumental",
          "Síntesis orgánica e inorgánica",
          "Gestión y aseguramiento de calidad (ISO 17025)",
          "Química computacional y nanotecnología"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "29%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2800",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Laboratorios",
            "highlight": "+30",
            "title": "equipados",
            "bottomText": "Tecnología de punta e investigación"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Control de Calidad y Detección de Impurezas en Fármacos",
          "scenario": "Un lote de antibióticos presenta una ligera variación en su espectro de absorción ultravioleta.",
          "description": "Como químico(a) analítico(a), debes validar la pureza del compuesto:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Qué método instrumental de alta resolución seleccionas para separar y cuantificar impurezas?",
              "options": [
                {
                  "text": "Cromatografía líquida de alta resolución acoplada a espectrometría de masas (HPLC-MS) con curva de calibración certificada.",
                  "next": "success"
                },
                {
                  "text": "Titulación visual ácido-base simple con fenolftaleína para estimar visualmente el porcentaje de pureza.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Rigor analítico profesional! El HPLC-MS permite identificar y cuantificar trazas de impurezas en partes por millón (ppm) garantizando la seguridad del medicamento.",
            "failure": "La titulación ácido-base no es específica y no puede distinguir entre el principio activo y compuestos análogos o impurezas químicas."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Química General I",
              "Cálculo Diferencial",
              "Biología General",
              "Fundamentos de Investigación",
              "Comunicación Oral y Escrita"
            ],
            [
              "Química General II",
              "Cálculo Integral",
              "Física I",
              "Laboratorio de Química Inorgánica",
              "Jesucristo y Aprendizajes Vitales"
            ],
            [
              "Química Orgánica I",
              "Física II",
              "Química Analítica Cualitativa",
              "Estadística Aplicada a la Ciencia",
              "Ética Personal y Socioambiental"
            ],
            [
              "Química Orgánica II",
              "Fisicoquímica I",
              "Química Analítica Cuantitativa",
              "Métodos de Separación",
              "Ecología Integral"
            ],
            [
              "Fisicoquímica II",
              "Análisis Instrumental I",
              "Bioquímica General",
              "Química de Polímeros",
              "Manejo de Residuos Químicos"
            ],
            [
              "Análisis Instrumental II",
              "Química Computacional",
              "Control y Gestión de Calidad",
              "Nanotecnología y Materiales",
              "Toxicología Química"
            ],
            [
              "Operaciones Unitarias",
              "Electroquímica Aplicada",
              "Metodología de la Investigación Química",
              "Itinerario I: Química Ambiental",
              "Prácticas Preprofesionales"
            ],
            [
              "Trabajo de Integración Curricular",
              "Legislación y Seguridad Química",
              "Itinerario II: Química Industrial",
              "Gestión de Laboratorios Acreditados",
              "Deontología Profesional"
            ]
          ],
          "subjectDetails": {
            "Química General I": "Química General I en Química: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Cálculo Diferencial": "Cálculo Diferencial en Química: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Biología General": "Biología General en Química: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fundamentos de Investigación": "Fundamentos de Investigación en Química: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Comunicación Oral y Escrita": "Comunicación Oral y Escrita en Química: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Química General II": "Química General II en Química: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Cálculo Integral": "Cálculo Integral en Química: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Física I": "Física I en Química: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Laboratorio de Química Inorgánica": "Laboratorio de Química Inorgánica en Química: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Química: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Química Orgánica I": "Química Orgánica I en Química: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Física II": "Física II en Química: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Química Analítica Cualitativa": "Química Analítica Cualitativa en Química: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Estadística Aplicada a la Ciencia": "Estadística Aplicada a la Ciencia en Química: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ética Personal y Socioambiental": "Ética Personal y Socioambiental en Química: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Química Orgánica II": "Química Orgánica II en Química: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Fisicoquímica I": "Fisicoquímica I en Química: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Química Analítica Cuantitativa": "Química Analítica Cuantitativa en Química: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Métodos de Separación": "Métodos de Separación en Química: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ecología Integral": "Ecología Integral en Química: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fisicoquímica II": "Fisicoquímica II en Química: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Análisis Instrumental I": "Análisis Instrumental I en Química: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Bioquímica General": "Bioquímica General en Química: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Química de Polímeros": "Química de Polímeros en Química: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Manejo de Residuos Químicos": "Manejo de Residuos Químicos en Química: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Análisis Instrumental II": "Análisis Instrumental II en Química: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Química Computacional": "Química Computacional en Química: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Control y Gestión de Calidad": "Control y Gestión de Calidad en Química: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Nanotecnología y Materiales": "Nanotecnología y Materiales en Química: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Toxicología Química": "Toxicología Química en Química: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Operaciones Unitarias": "Operaciones Unitarias en Química: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Electroquímica Aplicada": "Electroquímica Aplicada en Química: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Metodología de la Investigación Química": "Metodología de la Investigación Química en Química: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Itinerario I: Química Ambiental": "Itinerario I: Química Ambiental en Química: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Prácticas Preprofesionales": "Prácticas Preprofesionales en Química: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Trabajo de Integración Curricular": "Trabajo de Integración Curricular en Química: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Legislación y Seguridad Química": "Legislación y Seguridad Química en Química: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Itinerario II: Química Industrial": "Itinerario II: Química Industrial en Química: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Gestión de Laboratorios Acreditados": "Gestión de Laboratorios Acreditados en Química: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Deontología Profesional": "Deontología Profesional en Química: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional."
          },
          "itineraries": [
            {
              "name": "Itinerario I: Química Ambiental y Biopolímeros",
              "subjects": [
                "Química Atmosférica",
                "Biorremediación Química",
                "Valorización de Residuos"
              ]
            },
            {
              "name": "Itinerario II: Química Industrial y Nanotecnología",
              "subjects": [
                "Nanociencia Aplicada",
                "Electroquímica Industrial",
                "Formulación de Fármacos"
              ]
            }
          ]
        }
      }
    },
    "questions": [
      {
        "id": 1,
        "text": "¿Te apasiona el estudio de la biodiversidad, la ecología de poblaciones y la conservación de ecosistemas terrestres o marinos?"
      },
      {
        "id": 2,
        "text": "¿Te interesa el análisis químico instrumental, el control de calidad de sustancias y la síntesis de nuevos compuestos en laboratorio?"
      },
      {
        "id": 3,
        "text": "¿Sientes curiosidad por desentrañar los mecanismos genéticos, evolutivos y moleculares que rigen la vida animal y vegetal?"
      },
      {
        "id": 4,
        "text": "¿Te atrae investigar en electroquímica, nanotecnología y el comportamiento atómico y molecular de los materiales?"
      },
      {
        "id": 5,
        "text": "¿Te gustaría realizar inventarios biológicos en campo y proponer planes de manejo para proteger especies amenazadas en reservas naturales?"
      },
      {
        "id": 6,
        "text": "¿Te gustaría desarrollar y validar métodos analíticos para certificar la pureza de medicamentos o la inocuidad de alimentos?"
      },
      {
        "id": 7,
        "text": "¿Te interesa investigar el comportamiento etológico de la fauna silvestre y sus interacciones con el cambio ambiental global?"
      },
      {
        "id": 8,
        "text": "¿Te entusiasma diseñar procesos de química verde, síntesis de biopolímeros y reciclaje molecular de residuos industriales?"
      },
      {
        "id": 9,
        "text": "¿Te visualizas aplicando bioinformática y filogenia para estudiar el origen y la diversificación de organismos vivos?"
      },
      {
        "id": 10,
        "text": "¿Te llama la atención la química computacional y el modelado molecular para predecir reactividad y diseñar catalizadores?"
      },
      {
        "id": 11,
        "text": "¿Te gustaría dirigir expediciones científicas y proyectos de restauración ecológica en páramos, bosques y Galápagos?"
      },
      {
        "id": 12,
        "text": "¿Te imaginas supervisando un laboratorio químico acreditado bajo normas internacionales de calidad y bioseguridad?"
      }
    ]
  },
  "salud": {
    "macroareaId": "salud",
    "title": "Ciencias de la Salud y el Bienestar",
    "shortName": "Salud y Bienestar",
    "color": "#1aa9df",
    "iconName": "HeartPulse",
    "faculty": "Facultad de Salud y Bienestar",
    "description": "Cuidado de la vida, medicina clínica, bioingeniería, rehabilitación, odontología y salud mental.",
    "careers": {
      "medicina": {
        "name": "Medicina",
        "items": [
          5,
          16,
          27,
          38,
          49,
          60
        ],
        "pdf": "medicina-202401.pdf",
        "semesters_count": 10,
        "faculty": "Facultad de Salud y Bienestar",
        "description": "Formamos médicos con sólida formación clínica, humanista y científica, comprometidos con la promoción de la salud, diagnóstico temprano, tratamiento ético y salvaguarda de la vida de las personas.",
        "fieldOfWork": "Hospitales de especialidad y centros de salud, unidades de cuidados intensivos, práctica médica privada, investigación biomédica y gestión de salud pública.",
        "skills": [
          "Diagnóstico clínico integral",
          "Terapéutica médica basada en evidencia",
          "Atención médica de emergencias",
          "Relación médico-paciente empática"
        ],
        "benefits": [
          {
            "topText": "Acreditación",
            "highlight": "18%",
            "title": "CACES internacional",
            "bottomText": "Reconocimiento académico de excelencia"
          },
          {
            "topText": "Hospitales",
            "highlight": "$4500",
            "title": "convenios docentes",
            "bottomText": "Prácticas clínicas desde los primeros años"
          },
          {
            "topText": "Simulación",
            "highlight": "Avanzada",
            "title": "centro de destrezas",
            "bottomText": "Robots y pacientes virtuales"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Triage de Emergencias y Manejo del Síndrome Coronario",
          "scenario": "Ingresa a emergencias un paciente de 58 años con dolor torácico opresivo de 40 minutos de evolución, diaforesis y dificultad para respirar.",
          "description": "Como médico(a) de guardia, debes tomar la primera conducta clínica prioritaria:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es la conducta diagnóstica y terapéutica inmediata dentro de los primeros 10 minutos?",
              "options": [
                {
                  "text": "Electrocardiograma de 12 derivaciones inmediato, monitorización continua, toma de biomarcadores (troponinas) y oxigenoterapia si satura <90%.",
                  "next": "success"
                },
                {
                  "text": "Enviar al paciente a realizarse una radiografía de columna y solicitar una cita ambulatoria con cardiología para la siguiente semana.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Atención oportuna que salva vidas! El electrocardiograma en menos de 10 minutos es el estándar de oro para diagnosticar un infarto agudo de miocardio e iniciar reperfusión inmediata.",
            "failure": "En el síndrome coronario agudo 'tiempo es músculo'; postergar la atención o solicitar estudios irrelevantes pone en riesgo inminente la vida del paciente."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de la Investigación",
              "Morfofunción 2: CardioRespiratorio/ Hematología",
              "Morfofunción 2: Digestivo y Excretor",
              "Ciencias Básicas de la Salud 2",
              "Desarrollo Humano 2",
              "IDIS 1"
            ],
            [
              "Morfofunción 4: Ostemusculo- esquelético",
              "Piel",
              "Ciencias Básicas de la Salud 4",
              "Desarrollo Humano 4",
              "Administrativo Sanitario 2",
              "IDIS 3"
            ],
            [
              "Salud Integral Mujer 2",
              "Salud Integral Adulto 2",
              "Salud Integral Niño 2",
              "IDIS 5",
              "Jesucristo y Aprendizajes Vitales",
              "Morfofunción 3: Nervioso Sentidos"
            ],
            [
              "Ciencias Básicas de la Salud 3",
              "Desarrollo Humano 3",
              "Administrativo Sanitario 1",
              "IDIS 2",
              "Salud Integral Mujer 1",
              "Salud Integral Adulto 1"
            ],
            [
              "Salud Integral Niño 1",
              "Ciencias Básicas de la Salud 5",
              "IDIS 4",
              "Salud Integral Mujer 3",
              "Salud Integral Adulto 3",
              "Salud Integral Niño 3"
            ],
            [
              "Evidence-Based Medicine",
              "IDIS 6",
              "Conocimiento, Palabra y Cambio Social",
              "Fundamentos de Morfofunción",
              "Primeros Auxilios y Bioseguridad Básica",
              "Ciencias Básicas de la Salud 1"
            ],
            [
              "Comportamiento Humano y Procesos Psicológicos",
              "One Health y Salud Holística/Ancestral",
              "Salud Integral Mujer 4",
              "Salud Integral Adulto 4",
              "Salud Integral Niño 4",
              "Clinical Decision Making"
            ],
            [
              "IDIS 7",
              "Integración Curricular",
              "Salud Integral Hospitalaría 2: Clínica 3",
              "Salud Integral Hospitalaría 2: Quirúrgica",
              "Medicina Legal",
              "Destrezas Quirúrgicas"
            ],
            [
              "IDIS 9",
              "Seminario de Titulación",
              "Salud Integral Hospitalaria 1: Clínica 1",
              "Salud Integral Hospitalaria 1: Clínica 2",
              "Desarrollo Humano 5",
              "Destrezas Clínicas"
            ],
            [
              "IDIS 8 18%",
              "IR Medicina Interna",
              "IR Ginecología y Obstetricia",
              "IR Comunitaria Pre-Rural",
              "IR Qurúrgicas",
              "IR Pediatría"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de la Investigación": "Fundamentos de la Investigación en Medicina: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Morfofunción 2: CardioRespiratorio/ Hematología": "Morfofunción 2: CardioRespiratorio/ Hematología en Medicina: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Morfofunción 2: Digestivo y Excretor": "Morfofunción 2: Digestivo y Excretor en Medicina: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Ciencias Básicas de la Salud 2": "Ciencias Básicas de la Salud 2 en Medicina: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Desarrollo Humano 2": "Desarrollo Humano 2 en Medicina: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "IDIS 1": "IDIS 1 en Medicina: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Morfofunción 4: Ostemusculo- esquelético": "Morfofunción 4: Ostemusculo- esquelético en Medicina: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Piel": "Piel en Medicina: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ciencias Básicas de la Salud 4": "Ciencias Básicas de la Salud 4 en Medicina: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Desarrollo Humano 4": "Desarrollo Humano 4 en Medicina: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Administrativo Sanitario 2": "Administrativo Sanitario 2 en Medicina: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "IDIS 3": "IDIS 3 en Medicina: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Salud Integral Mujer 2": "Salud Integral Mujer 2 en Medicina: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Salud Integral Adulto 2": "Salud Integral Adulto 2 en Medicina: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Salud Integral Niño 2": "Salud Integral Niño 2 en Medicina: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "IDIS 5": "IDIS 5 en Medicina: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Medicina: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Morfofunción 3: Nervioso Sentidos": "Morfofunción 3: Nervioso Sentidos en Medicina: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ciencias Básicas de la Salud 3": "Ciencias Básicas de la Salud 3 en Medicina: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Desarrollo Humano 3": "Desarrollo Humano 3 en Medicina: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Administrativo Sanitario 1": "Administrativo Sanitario 1 en Medicina: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "IDIS 2": "IDIS 2 en Medicina: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Salud Integral Mujer 1": "Salud Integral Mujer 1 en Medicina: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Salud Integral Adulto 1": "Salud Integral Adulto 1 en Medicina: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Salud Integral Niño 1": "Salud Integral Niño 1 en Medicina: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ciencias Básicas de la Salud 5": "Ciencias Básicas de la Salud 5 en Medicina: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "IDIS 4": "IDIS 4 en Medicina: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Salud Integral Mujer 3": "Salud Integral Mujer 3 en Medicina: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Salud Integral Adulto 3": "Salud Integral Adulto 3 en Medicina: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Salud Integral Niño 3": "Salud Integral Niño 3 en Medicina: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Evidence-Based Medicine": "Evidence-Based Medicine en Medicina: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "IDIS 6": "IDIS 6 en Medicina: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Medicina: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fundamentos de Morfofunción": "Fundamentos de Morfofunción en Medicina: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Primeros Auxilios y Bioseguridad Básica": "Primeros Auxilios y Bioseguridad Básica en Medicina: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ciencias Básicas de la Salud 1": "Ciencias Básicas de la Salud 1 en Medicina: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Comportamiento Humano y Procesos Psicológicos": "Comportamiento Humano y Procesos Psicológicos en Medicina: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "One Health y Salud Holística/Ancestral": "One Health y Salud Holística/Ancestral en Medicina: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Salud Integral Mujer 4": "Salud Integral Mujer 4 en Medicina: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Salud Integral Adulto 4": "Salud Integral Adulto 4 en Medicina: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Salud Integral Niño 4": "Salud Integral Niño 4 en Medicina: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Clinical Decision Making": "Clinical Decision Making en Medicina: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "IDIS 7": "IDIS 7 en Medicina: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Integración Curricular": "Integración Curricular en Medicina: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Salud Integral Hospitalaría 2: Clínica 3": "Salud Integral Hospitalaría 2: Clínica 3 en Medicina: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Salud Integral Hospitalaría 2: Quirúrgica": "Salud Integral Hospitalaría 2: Quirúrgica en Medicina: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Medicina Legal": "Medicina Legal en Medicina: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Destrezas Quirúrgicas": "Destrezas Quirúrgicas en Medicina: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "IDIS 9": "IDIS 9 en Medicina: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Seminario de Titulación": "Seminario de Titulación en Medicina: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Salud Integral Hospitalaria 1: Clínica 1": "Salud Integral Hospitalaria 1: Clínica 1 en Medicina: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Salud Integral Hospitalaria 1: Clínica 2": "Salud Integral Hospitalaria 1: Clínica 2 en Medicina: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Desarrollo Humano 5": "Desarrollo Humano 5 en Medicina: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Destrezas Clínicas": "Destrezas Clínicas en Medicina: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "IDIS 8 18%": "IDIS 8 18% en Medicina: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "IR Medicina Interna": "IR Medicina Interna en Medicina: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "IR Ginecología y Obstetricia": "IR Ginecología y Obstetricia en Medicina: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "IR Comunitaria Pre-Rural": "IR Comunitaria Pre-Rural en Medicina: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "IR Qurúrgicas": "IR Qurúrgicas en Medicina: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "IR Pediatría": "IR Pediatría en Medicina: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario I: Innovación y Emprendimiento",
              "subjects": [
                "Modelos de Negocio",
                "Innovación Aplicada",
                "Proyectos de Impacto"
              ]
            },
            {
              "name": "Itinerario II: Investigación Aplicada",
              "subjects": [
                "Metodologías Avanzadas",
                "Seminario de Investigación",
                "Publicación Científica"
              ]
            }
          ]
        }
      },
      "enfermeria": {
        "name": "Enfermería",
        "items": [
          1,
          12,
          23,
          34,
          45,
          56
        ],
        "pdf": "enfermeria-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Salud y Bienestar",
        "description": "Aprenderás a proporcionar cuidados integrales de enfermería basados en el juicio clínico, la calidez humana, la seguridad del paciente y la gestión del cuidado en todas las etapas del ciclo vital.",
        "fieldOfWork": "Servicios hospitalarios de hospitalización, quirófano, terapia intensiva, neonatología, centros de atención primaria y programas comunitarios de vacunación y salud.",
        "skills": [
          "Gestión integral del cuidado",
          "Procedimientos de enfermería avanzados",
          "Administración segura de medicamentos",
          "Atención humanizada y contención emocional"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Prácticas",
            "highlight": "Clínicas",
            "title": "desde 2do año",
            "bottomText": "Rotaciones en hospitales de 3er nivel"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Protocolo de Seguridad Quirúrgica y Prevención de Infecciones",
          "scenario": "Estás a cargo del cuidado posoperatorio inmediato de un paciente adulto intervenido de una cirugía abdominal mayor.",
          "description": "Aplica el juicio clínico de enfermería:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Qué acción priorizas para prevenir complicaciones respiratorias y tromboembólicas?",
              "options": [
                {
                  "text": "Ejercicios de respiración profunda con espirómetro incentivo, control estricto del dolor y movilización precoz asistida.",
                  "next": "success"
                },
                {
                  "text": "Mantener al paciente inmóvil en posición supina absoluta durante 72 horas sin valorar la permeabilidad de vías aéreas.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Cuidado de enfermería de excelencia! La movilización precoz y la fisioterapia respiratoria son pilares fundamentales para evitar atelectasias y trombosis venosa profunda.",
            "failure": "La inmovilidad prolongada incrementa drásticamente el riesgo de trombosis venosa, úlceras por presión e infecciones respiratorias nosocomiales."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Fundamentos de Bioquímica",
              "Salud y Grupos Prioritarios (Diversidad)",
              "Enfermería Básica I",
              "Morfoﬁsiología"
            ],
            [
              "Epistemología del Cuidado Enfermero",
              "Ecología Integral",
              "Seminario de Titulación",
              "Gestión del Cuidado en los Servicios de Enfermería",
              "Salud Digital"
            ],
            [
              "Enfermería Pediátrica y de la Adolescencia",
              "Jesucristo y Aprendizajes Vitales",
              "Estadistica para Ciencias de la Salud",
              "Farmacología Aplicada a la Enfermería",
              "Enfermería Básica II"
            ],
            [
              "Educación y Comunicación para la Salud",
              "Microbiología y Parasitología",
              "Integración Curricular",
              "Enfermería Familiar y Comunitaria",
              "Simulación Clínica"
            ],
            [
              "Enfermería en Salud Mental y Psiquiatría",
              "Conocimiento, Palabra y Cambio Social",
              "Salud Contexto Nacional e Internacional",
              "Comportamiento Humano y Procesos Psicológicos",
              "One Health y Salud Holística/Ancestral"
            ],
            [
              "Fundamentos de Morfofunción",
              "Primeros Auxilios y Bioseguridad Básica 27%",
              "Deontología Profesional y Legislación",
              "Práctica Basada en Evidencia",
              "Enfermería en Salud Sexual"
            ],
            [
              "Epidemiología y Salud Pública",
              "Enfermería Clínica",
              "Ética e Interculturalidad",
              "Enfermería Materno Neonatal",
              "Gestión de los Servicios de Salud"
            ],
            [
              "Enfermería Quirúrgica Internado Rotativo",
              "Internado Rotativo Ginecobstetricia/ Neonatología",
              "Internado Rotativo Clínico- Quirúrgico",
              "Internado Rotativo Pediatría",
              "Internado Rotativo Enfermería Comunitaria"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Enfermería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fundamentos de Bioquímica": "Fundamentos de Bioquímica en Enfermería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Salud y Grupos Prioritarios (Diversidad)": "Salud y Grupos Prioritarios (Diversidad) en Enfermería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Enfermería Básica I": "Enfermería Básica I en Enfermería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Morfoﬁsiología": "Morfoﬁsiología en Enfermería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Epistemología del Cuidado Enfermero": "Epistemología del Cuidado Enfermero en Enfermería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ecología Integral": "Ecología Integral en Enfermería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Seminario de Titulación": "Seminario de Titulación en Enfermería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Gestión del Cuidado en los Servicios de Enfermería": "Gestión del Cuidado en los Servicios de Enfermería en Enfermería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Salud Digital": "Salud Digital en Enfermería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Enfermería Pediátrica y de la Adolescencia": "Enfermería Pediátrica y de la Adolescencia en Enfermería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Enfermería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Estadistica para Ciencias de la Salud": "Estadistica para Ciencias de la Salud en Enfermería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Farmacología Aplicada a la Enfermería": "Farmacología Aplicada a la Enfermería en Enfermería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Enfermería Básica II": "Enfermería Básica II en Enfermería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Educación y Comunicación para la Salud": "Educación y Comunicación para la Salud en Enfermería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Microbiología y Parasitología": "Microbiología y Parasitología en Enfermería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Integración Curricular": "Integración Curricular en Enfermería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Enfermería Familiar y Comunitaria": "Enfermería Familiar y Comunitaria en Enfermería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Simulación Clínica": "Simulación Clínica en Enfermería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Enfermería en Salud Mental y Psiquiatría": "Enfermería en Salud Mental y Psiquiatría en Enfermería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Enfermería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Salud Contexto Nacional e Internacional": "Salud Contexto Nacional e Internacional en Enfermería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Comportamiento Humano y Procesos Psicológicos": "Comportamiento Humano y Procesos Psicológicos en Enfermería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "One Health y Salud Holística/Ancestral": "One Health y Salud Holística/Ancestral en Enfermería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fundamentos de Morfofunción": "Fundamentos de Morfofunción en Enfermería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Primeros Auxilios y Bioseguridad Básica 27%": "Primeros Auxilios y Bioseguridad Básica 27% en Enfermería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Deontología Profesional y Legislación": "Deontología Profesional y Legislación en Enfermería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Práctica Basada en Evidencia": "Práctica Basada en Evidencia en Enfermería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Enfermería en Salud Sexual": "Enfermería en Salud Sexual en Enfermería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Epidemiología y Salud Pública": "Epidemiología y Salud Pública en Enfermería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Enfermería Clínica": "Enfermería Clínica en Enfermería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Enfermería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Enfermería Materno Neonatal": "Enfermería Materno Neonatal en Enfermería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Gestión de los Servicios de Salud": "Gestión de los Servicios de Salud en Enfermería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Enfermería Quirúrgica Internado Rotativo": "Enfermería Quirúrgica Internado Rotativo en Enfermería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Internado Rotativo Ginecobstetricia/ Neonatología": "Internado Rotativo Ginecobstetricia/ Neonatología en Enfermería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Internado Rotativo Clínico- Quirúrgico": "Internado Rotativo Clínico- Quirúrgico en Enfermería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Internado Rotativo Pediatría": "Internado Rotativo Pediatría en Enfermería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Internado Rotativo Enfermería Comunitaria": "Internado Rotativo Enfermería Comunitaria en Enfermería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional."
          },
          "itineraries": [
            {
              "name": "Itinerario I: Innovación y Emprendimiento",
              "subjects": [
                "Modelos de Negocio",
                "Innovación Aplicada",
                "Proyectos de Impacto"
              ]
            },
            {
              "name": "Itinerario II: Investigación Aplicada",
              "subjects": [
                "Metodologías Avanzadas",
                "Seminario de Investigación",
                "Publicación Científica"
              ]
            }
          ]
        }
      },
      "odontologia": {
        "name": "Odontología",
        "items": [
          7,
          18,
          29,
          40,
          51,
          62
        ],
        "pdf": "odontologia-202403.pdf",
        "semesters_count": 10,
        "faculty": "Facultad de Salud y Bienestar",
        "description": "Diagnosticarás, tratarás y rehabilitarás la salud del sistema estomatognático y bucal con tecnología digital, biomateriales avanzados y un enfoque estético y funcional que devuelve la sonrisa.",
        "fieldOfWork": "Clínica dental propia o asociada, servicios de odontología hospitalaria, rehabilitación oral, ortodoncia, endodoncia y salud pública comunitaria.",
        "skills": [
          "Rehabilitación oral y biomateriales",
          "Cirugía oral y periodoncia",
          "Técnicas de anestesia y ergonomía dental",
          "Diagnóstico radiográfico digital"
        ],
        "benefits": [
          {
            "topText": "Clínicas",
            "highlight": "27%",
            "title": "campus PUCE",
            "bottomText": "+50 unidades dentales de última tecnología"
          },
          {
            "topText": "Inversión",
            "highlight": "$4000",
            "title": "por semestre",
            "bottomText": "10 semestres presenciales"
          },
          {
            "topText": "Docencia",
            "highlight": "100%",
            "title": "especialistas",
            "bottomText": "Práctica clínica con pacientes reales"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Tratamiento de Caries Profunda y Protección Pulpar",
          "scenario": "Un paciente acude a la clínica con sensibilidad al frío en el primer molar inferior. La radiografía muestra una lesión cariosa profunda cercana a la cámara pulpar.",
          "description": "Elige el protocolo clínico restaurador:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cómo procedes para preservar la vitalidad del diente?",
              "options": [
                {
                  "text": "Eliminación selectiva del tejido cariado con aislamiento absoluto, colocación de protector pulpar biocompatible (silicato de calcio) y restauración adhesiva con resina.",
                  "next": "success"
                },
                {
                  "text": "Realizar extracción dental inmediata sin intentar tratamientos conservadores ni evaluar la vitalidad del órgano dental.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Criterio odontológico conservador de vanguardia! La odontología mínimamente invasiva protege la vitalidad pulpar y restaura la función masticatoria con biomateriales bioactivos.",
            "failure": "La extracción indiscriminada causa pérdida ósea, desalineación dental y priva al paciente de una pieza natural recuperable."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Bioestadística en Ciencias de la Salud",
              "Endodoncia I",
              "Riesgos en el trabajo",
              "Semiología",
              "Oclusión II",
              "Periodoncia I"
            ],
            [
              "Estomatológica",
              "Ecología Integral",
              "Medicina Interna I",
              "Prótesis Fija",
              "Cirugía Dentomaxilar II",
              "Clinica Odontológica I"
            ],
            [
              "Farmacoclínica I",
              "Jesucristo y los Aprendizajes Vitales",
              "Imagenología",
              "Morfofunción III: Fisiologia",
              "Cariología",
              "Oclusión I"
            ],
            [
              "Patología General",
              "Ética e Interculturalidad",
              "Endodoncia II",
              "Operatoria Dental",
              "Cirugía Dentomaxilar I",
              "Bioética y Legislación"
            ],
            [
              "Farmacología Básica",
              "Salud Pública I",
              "Medicina Interna II",
              "Prótesis Removible",
              "Odontopediatría I",
              "Clínica Odontológica II"
            ],
            [
              "Farmacoclínica II",
              "Odontología Forense",
              "Prótesis Total",
              "Ortodoncia I",
              "Odontopediatría II",
              "Clínica Odontológica III"
            ],
            [
              "Integración Curricular",
              "Administración en Gerencia y Salud Oral",
              "Bases y Principíos de Implantología",
              "Investigación en Odontología",
              "Clínica Integral",
              "Práctica Pre profesionales II (IDIS II)"
            ],
            [
              "Salud Integral del paciente en Odontología",
              "Ortodoncia II",
              "Salud Pública II",
              "Clínica Odontológica IV",
              "Práctica Pre profesionales I (IDIS I)",
              "Conocimiento, Palabra y Cambio Social"
            ],
            [
              "Primeros Auxilios y Bioseguridad Básica",
              "Ciencias Básicas de la Salud",
              "Comportamiento Humano y",
              "Procesos Psicológicos",
              "One Health y Salud Holística/Ancestral",
              "Fundamentos de la investigación"
            ],
            [
              "Morfofunción II: anatomía cabeza y cuello",
              "Morfofunción II Dental: (embriología e histología bucal)",
              "Microbiología",
              "Clínica",
              "Biomateriales",
              "Inmunología Clínica"
            ]
          ],
          "subjectDetails": {
            "Bioestadística en Ciencias de la Salud": "Bioestadística en Ciencias de la Salud en Odontología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Endodoncia I": "Endodoncia I en Odontología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Riesgos en el trabajo": "Riesgos en el trabajo en Odontología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Semiología": "Semiología en Odontología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Oclusión II": "Oclusión II en Odontología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Periodoncia I": "Periodoncia I en Odontología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Estomatológica": "Estomatológica en Odontología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ecología Integral": "Ecología Integral en Odontología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Medicina Interna I": "Medicina Interna I en Odontología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Prótesis Fija": "Prótesis Fija en Odontología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Cirugía Dentomaxilar II": "Cirugía Dentomaxilar II en Odontología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Clinica Odontológica I": "Clinica Odontológica I en Odontología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Farmacoclínica I": "Farmacoclínica I en Odontología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Jesucristo y los Aprendizajes Vitales": "Jesucristo y los Aprendizajes Vitales en Odontología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Imagenología": "Imagenología en Odontología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Morfofunción III: Fisiologia": "Morfofunción III: Fisiologia en Odontología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Cariología": "Cariología en Odontología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Oclusión I": "Oclusión I en Odontología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Patología General": "Patología General en Odontología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Odontología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Endodoncia II": "Endodoncia II en Odontología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Operatoria Dental": "Operatoria Dental en Odontología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Cirugía Dentomaxilar I": "Cirugía Dentomaxilar I en Odontología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Bioética y Legislación": "Bioética y Legislación en Odontología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Farmacología Básica": "Farmacología Básica en Odontología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Salud Pública I": "Salud Pública I en Odontología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Medicina Interna II": "Medicina Interna II en Odontología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Prótesis Removible": "Prótesis Removible en Odontología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Odontopediatría I": "Odontopediatría I en Odontología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Clínica Odontológica II": "Clínica Odontológica II en Odontología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Farmacoclínica II": "Farmacoclínica II en Odontología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Odontología Forense": "Odontología Forense en Odontología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Prótesis Total": "Prótesis Total en Odontología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Ortodoncia I": "Ortodoncia I en Odontología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Odontopediatría II": "Odontopediatría II en Odontología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Clínica Odontológica III": "Clínica Odontológica III en Odontología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Integración Curricular": "Integración Curricular en Odontología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Administración en Gerencia y Salud Oral": "Administración en Gerencia y Salud Oral en Odontología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Bases y Principíos de Implantología": "Bases y Principíos de Implantología en Odontología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Investigación en Odontología": "Investigación en Odontología en Odontología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Clínica Integral": "Clínica Integral en Odontología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Práctica Pre profesionales II (IDIS II)": "Práctica Pre profesionales II (IDIS II) en Odontología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Salud Integral del paciente en Odontología": "Salud Integral del paciente en Odontología en Odontología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ortodoncia II": "Ortodoncia II en Odontología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Salud Pública II": "Salud Pública II en Odontología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Clínica Odontológica IV": "Clínica Odontológica IV en Odontología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Práctica Pre profesionales I (IDIS I)": "Práctica Pre profesionales I (IDIS I) en Odontología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Odontología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Primeros Auxilios y Bioseguridad Básica": "Primeros Auxilios y Bioseguridad Básica en Odontología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ciencias Básicas de la Salud": "Ciencias Básicas de la Salud en Odontología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Comportamiento Humano y": "Comportamiento Humano y en Odontología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Procesos Psicológicos": "Procesos Psicológicos en Odontología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "One Health y Salud Holística/Ancestral": "One Health y Salud Holística/Ancestral en Odontología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Fundamentos de la investigación": "Fundamentos de la investigación en Odontología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Morfofunción II: anatomía cabeza y cuello": "Morfofunción II: anatomía cabeza y cuello en Odontología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Morfofunción II Dental: (embriología e histología bucal)": "Morfofunción II Dental: (embriología e histología bucal) en Odontología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Microbiología": "Microbiología en Odontología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Clínica": "Clínica en Odontología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Biomateriales": "Biomateriales en Odontología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Inmunología Clínica": "Inmunología Clínica en Odontología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario I: Innovación y Emprendimiento",
              "subjects": [
                "Modelos de Negocio",
                "Innovación Aplicada",
                "Proyectos de Impacto"
              ]
            },
            {
              "name": "Itinerario II: Investigación Aplicada",
              "subjects": [
                "Metodologías Avanzadas",
                "Seminario de Investigación",
                "Publicación Científica"
              ]
            }
          ]
        }
      },
      "fisioterapia": {
        "name": "Fisioterapia",
        "items": [
          2,
          13,
          24,
          35,
          46,
          57
        ],
        "pdf": "fisioterapia-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Salud y Bienestar",
        "description": "Evaluarás y restaurarás la función motora, el movimiento y la independencia física de personas con lesiones musculoesqueléticas, neurológicas, respiratorias o deportivas.",
        "fieldOfWork": "Centros de rehabilitación física y deportiva, hospitales, clubes atléticos de alto rendimiento, clínicas de traumatología y atención domiciliaria.",
        "skills": [
          "Evaluación biomecánica del movimiento",
          "Cinesiterapia y ejercicio terapéutico",
          "Agentes físicos y electroterapia",
          "Rehabilitación neurológica y deportiva"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Laboratorios",
            "highlight": "Biomecánica",
            "title": "y movimiento",
            "bottomText": "Plataformas de marcha y dinamometría"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Rehabilitación de Lesión de Ligamento Cruzado Anterior",
          "scenario": "Un futbolista juvenil en su cuarta semana posquirúrgica de reconstrucción de LCA presenta rigidez en la extensión de rodilla y debilidad en cuádriceps.",
          "description": "Diseña la fase de reacondicionamiento funcional:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es el objetivo prioritario del plan de ejercicio terapéutico en esta etapa?",
              "options": [
                {
                  "text": "Recuperar la extensión completa activa de rodilla, activación isométrica de cuádriceps y trabajo de propiocepción sin sobrecargar el injerto.",
                  "next": "success"
                },
                {
                  "text": "Indicar carrera continua intensa y saltos pliométricos en terreno irregular desde el primer día.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Criterio fisioterapéutico preciso! Recuperar la extensión terminal previene artrofibrosis y el fortalecimiento isométrico estabiliza la rodilla sin someter el injerto a cizallamiento prematuro.",
            "failure": "Indicar saltos o impactos durante la fase de ligamentización del injerto puede ocasionar la ruptura del reemplazo quirúrgico."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Fundamentos de Bioquímica",
              "Salud y Grupos Prioritarios (Diversidad)",
              "Fundamentos de Fisioterapia y Razonamiento Clínico",
              "Biofísica",
              "Morfofuncional"
            ],
            [
              "Practica Basada en la Evidencia",
              "Imagenología Aplicada a la Fisioterapia",
              "Agentes Físicos y Electrofísicos",
              "Biomecánica II",
              "Evaluación y Diagnóstico Neuromusculoesquelético",
              "Neurodesarrollo"
            ],
            [
              "Ortesis, Prótesis y Nuevas Tecnologías Asistivas",
              "Fisioterapia en Salud Mental",
              "Evaluación y Diagnóstico en Fisioterapia Cardio-respiratoria",
              "Neurorrehabilitación",
              "Prácticas Preprofesionales I",
              "Jesucristo y Aprendizajes Vitales"
            ],
            [
              "Deontología Profesional y Legislación en Fisioterapia",
              "Masoterapia y Cinesiterapia",
              "Semiopatología Neuromusculoesquelética",
              "Biomecánica I",
              "Bases Neurológicas del Control Motor",
              "Ética e Interculturalidad"
            ],
            [
              "Gestión de los Servicios de Salud",
              "Epidemiología",
              "Terapia Manual Ortopédica",
              "Técnicas de Intervención Postural",
              "Evaluación y Diagnóstico en Neurorehabilitación",
              "Seminario de Titulación"
            ],
            [
              "Fisioterapia Respiratoria",
              "Fisioterapia en Traumatologia y Ortopedia",
              "Fisioterapia Cardiaca",
              "Innovación y Emprendimiento en Fisioterapia",
              "Prácticas Preprofesionales II",
              "Conocimiento, Palabra y Cambio Social"
            ],
            [
              "Fundamentos de Morfofunción",
              "Comportamiento Humano y Procesos Psicológicos",
              "One Health y Salud Holistica/Ancestral",
              "Primeros Auxilios y Bioseguridad Básica",
              "Salud Contexto Nacional e Internacional",
              "Integración Curricular"
            ],
            [
              "Fisioterapia Oncológica",
              "Salud Ocupacional y Ergonomia",
              "Fisioterapia Pelviperineal",
              "Fisioterapia Dermatofuncional",
              "Fisioterapia Deportiva",
              "Fisioterapia Comunitaria y Discapacidad 27%"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Fisioterapia: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fundamentos de Bioquímica": "Fundamentos de Bioquímica en Fisioterapia: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Salud y Grupos Prioritarios (Diversidad)": "Salud y Grupos Prioritarios (Diversidad) en Fisioterapia: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fundamentos de Fisioterapia y Razonamiento Clínico": "Fundamentos de Fisioterapia y Razonamiento Clínico en Fisioterapia: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Biofísica": "Biofísica en Fisioterapia: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Morfofuncional": "Morfofuncional en Fisioterapia: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Practica Basada en la Evidencia": "Practica Basada en la Evidencia en Fisioterapia: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Imagenología Aplicada a la Fisioterapia": "Imagenología Aplicada a la Fisioterapia en Fisioterapia: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Agentes Físicos y Electrofísicos": "Agentes Físicos y Electrofísicos en Fisioterapia: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Biomecánica II": "Biomecánica II en Fisioterapia: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Evaluación y Diagnóstico Neuromusculoesquelético": "Evaluación y Diagnóstico Neuromusculoesquelético en Fisioterapia: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Neurodesarrollo": "Neurodesarrollo en Fisioterapia: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ortesis, Prótesis y Nuevas Tecnologías Asistivas": "Ortesis, Prótesis y Nuevas Tecnologías Asistivas en Fisioterapia: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fisioterapia en Salud Mental": "Fisioterapia en Salud Mental en Fisioterapia: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Evaluación y Diagnóstico en Fisioterapia Cardio-respiratoria": "Evaluación y Diagnóstico en Fisioterapia Cardio-respiratoria en Fisioterapia: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Neurorrehabilitación": "Neurorrehabilitación en Fisioterapia: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Prácticas Preprofesionales I": "Prácticas Preprofesionales I en Fisioterapia: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Fisioterapia: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Deontología Profesional y Legislación en Fisioterapia": "Deontología Profesional y Legislación en Fisioterapia en Fisioterapia: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Masoterapia y Cinesiterapia": "Masoterapia y Cinesiterapia en Fisioterapia: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Semiopatología Neuromusculoesquelética": "Semiopatología Neuromusculoesquelética en Fisioterapia: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Biomecánica I": "Biomecánica I en Fisioterapia: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Bases Neurológicas del Control Motor": "Bases Neurológicas del Control Motor en Fisioterapia: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Fisioterapia: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Gestión de los Servicios de Salud": "Gestión de los Servicios de Salud en Fisioterapia: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Epidemiología": "Epidemiología en Fisioterapia: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Terapia Manual Ortopédica": "Terapia Manual Ortopédica en Fisioterapia: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Técnicas de Intervención Postural": "Técnicas de Intervención Postural en Fisioterapia: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Evaluación y Diagnóstico en Neurorehabilitación": "Evaluación y Diagnóstico en Neurorehabilitación en Fisioterapia: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Seminario de Titulación": "Seminario de Titulación en Fisioterapia: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fisioterapia Respiratoria": "Fisioterapia Respiratoria en Fisioterapia: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fisioterapia en Traumatologia y Ortopedia": "Fisioterapia en Traumatologia y Ortopedia en Fisioterapia: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fisioterapia Cardiaca": "Fisioterapia Cardiaca en Fisioterapia: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Innovación y Emprendimiento en Fisioterapia": "Innovación y Emprendimiento en Fisioterapia en Fisioterapia: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Prácticas Preprofesionales II": "Prácticas Preprofesionales II en Fisioterapia: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Fisioterapia: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fundamentos de Morfofunción": "Fundamentos de Morfofunción en Fisioterapia: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Comportamiento Humano y Procesos Psicológicos": "Comportamiento Humano y Procesos Psicológicos en Fisioterapia: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "One Health y Salud Holistica/Ancestral": "One Health y Salud Holistica/Ancestral en Fisioterapia: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Primeros Auxilios y Bioseguridad Básica": "Primeros Auxilios y Bioseguridad Básica en Fisioterapia: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Salud Contexto Nacional e Internacional": "Salud Contexto Nacional e Internacional en Fisioterapia: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Integración Curricular": "Integración Curricular en Fisioterapia: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fisioterapia Oncológica": "Fisioterapia Oncológica en Fisioterapia: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Salud Ocupacional y Ergonomia": "Salud Ocupacional y Ergonomia en Fisioterapia: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fisioterapia Pelviperineal": "Fisioterapia Pelviperineal en Fisioterapia: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fisioterapia Dermatofuncional": "Fisioterapia Dermatofuncional en Fisioterapia: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Fisioterapia Deportiva": "Fisioterapia Deportiva en Fisioterapia: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Fisioterapia Comunitaria y Discapacidad 27%": "Fisioterapia Comunitaria y Discapacidad 27% en Fisioterapia: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario I: Innovación y Emprendimiento",
              "subjects": [
                "Modelos de Negocio",
                "Innovación Aplicada",
                "Proyectos de Impacto"
              ]
            },
            {
              "name": "Itinerario II: Investigación Aplicada",
              "subjects": [
                "Metodologías Avanzadas",
                "Seminario de Investigación",
                "Publicación Científica"
              ]
            }
          ]
        }
      },
      "nutricion": {
        "name": "Nutrición y Dietética",
        "items": [
          3,
          14,
          25,
          36,
          47,
          58
        ],
        "pdf": "nutricion-y-dietetica-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Salud y Bienestar",
        "description": "Diseñarás planes de alimentación personalizados, terapia nutricional clínica en patologías y estrategias comunitarias para promover estilos de vida saludables basados en ciencia de los alimentos.",
        "fieldOfWork": "Nutrición clínica hospitalaria, consultorios privados, asesoría nutricional deportiva, servicios de alimentación colectiva y salud pública.",
        "skills": [
          "Evaluación del estado nutricional",
          "Dietoterapia clínica en enfermedades crónicas",
          "Nutrición deportiva y suplementación",
          "Educación alimentaria comunitaria"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Laboratorios",
            "highlight": "InBody",
            "title": "composición corporal",
            "bottomText": "Bioimpedancia y cocina experimental"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Terapia Médica Nutricional en Diabetes Tipo 2",
          "scenario": "Un paciente recién diagnosticado con diabetes tipo 2 e hipertensión busca estructurar su plan alimentario para mejorar su hemoglobina glicosilada.",
          "description": "Establece la pauta dietoterapéutica fundamental:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es la recomendación nutricional con mayor evidencia clínica?",
              "options": [
                {
                  "text": "Plan con carbohidratos de bajo índice glicémico, alto contenido de fibra soluble (legumbres, avena), grasas saludables (AOVE, aguacate) y control de sodio.",
                  "next": "success"
                },
                {
                  "text": "Eliminar el 100% de los alimentos sólidos y consumir únicamente jugos de frutas procesados en ayunas.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Intervención nutricional basada en evidencia! La fibra soluble ralentiza la absorción de glucosa y las grasas monoinsaturadas mejoran la sensibilidad a la insulina.",
            "failure": "Los jugos de frutas concentran azúcares simples libres (fructosa líquida) sin fibra, generando picos de hiperglicemia severos."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Salud y Grupos Prioritarios (Diversidad)",
              "Microbiología Aplicada",
              "Nutrición Básica",
              "Metabolismo Básico",
              "Cultura y Antropología Alimentaria"
            ],
            [
              "Práctica Basada en Evidencia",
              "Educación y Consejería Nutriciona",
              "Fisiopatología",
              "Nutrición en el Ciclo de Vida",
              "Evaluación del Estado Nutricional II",
              "Gastronomía en Nuevas Tendencias de Alimentación"
            ],
            [
              "Alimentos Funcionales",
              "Ecología Integral",
              "Seminario de Titulación",
              "Seguridad, Soberanía Alimentaria y Consumo Responsable",
              "Nutrición Pediátrica",
              "Gestión en Servicios de Alimentación"
            ],
            [
              "Nutrición Geriátrica",
              "Jesucristo y Aprendizajes Vitales",
              "Proceso de Cuidado Nutricional",
              "Evaluación del Estado Nutricional I",
              "Metabolismo Energético",
              "Ciencia de los Alimentos"
            ],
            [
              "Ética e Interculturalidad",
              "Gestión de los Servicios de Salud",
              "Dietoterapia",
              "Epidemiología Nutricional",
              "Nutrición Clínica"
            ],
            [
              "Farmacología Nutricional",
              "Integración Curricular",
              "Alimentación y Nutrición en Situaciones de Emergencia",
              "Nutrición Comunitaria y Salud Pública",
              "Nutrición en el Deporte"
            ],
            [
              "Emprendimiento e Innovación Alimentaria Nutricional",
              "Bases de Nutrigenómica y Metabolómica",
              "Conocimiento, Palabra y Cambio Social",
              "Comportamiento Humano y Procesos",
              "Psicológicos"
            ],
            [
              "One Health y Salud Holística/Ancestral",
              "Fundamentos de Morfofunción",
              "Primeros Auxilios y Bioseguridad Básica",
              "Salud Contexto Nacional e Internacional",
              "Nutrición Comunitaria 27%"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Nutrición y Dietética: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Salud y Grupos Prioritarios (Diversidad)": "Salud y Grupos Prioritarios (Diversidad) en Nutrición y Dietética: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Microbiología Aplicada": "Microbiología Aplicada en Nutrición y Dietética: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Nutrición Básica": "Nutrición Básica en Nutrición y Dietética: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Metabolismo Básico": "Metabolismo Básico en Nutrición y Dietética: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Cultura y Antropología Alimentaria": "Cultura y Antropología Alimentaria en Nutrición y Dietética: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Práctica Basada en Evidencia": "Práctica Basada en Evidencia en Nutrición y Dietética: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Educación y Consejería Nutriciona": "Educación y Consejería Nutriciona en Nutrición y Dietética: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fisiopatología": "Fisiopatología en Nutrición y Dietética: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Nutrición en el Ciclo de Vida": "Nutrición en el Ciclo de Vida en Nutrición y Dietética: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Evaluación del Estado Nutricional II": "Evaluación del Estado Nutricional II en Nutrición y Dietética: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Gastronomía en Nuevas Tendencias de Alimentación": "Gastronomía en Nuevas Tendencias de Alimentación en Nutrición y Dietética: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Alimentos Funcionales": "Alimentos Funcionales en Nutrición y Dietética: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ecología Integral": "Ecología Integral en Nutrición y Dietética: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Seminario de Titulación": "Seminario de Titulación en Nutrición y Dietética: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Seguridad, Soberanía Alimentaria y Consumo Responsable": "Seguridad, Soberanía Alimentaria y Consumo Responsable en Nutrición y Dietética: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Nutrición Pediátrica": "Nutrición Pediátrica en Nutrición y Dietética: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Gestión en Servicios de Alimentación": "Gestión en Servicios de Alimentación en Nutrición y Dietética: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Nutrición Geriátrica": "Nutrición Geriátrica en Nutrición y Dietética: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Nutrición y Dietética: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Proceso de Cuidado Nutricional": "Proceso de Cuidado Nutricional en Nutrición y Dietética: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Evaluación del Estado Nutricional I": "Evaluación del Estado Nutricional I en Nutrición y Dietética: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Metabolismo Energético": "Metabolismo Energético en Nutrición y Dietética: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ciencia de los Alimentos": "Ciencia de los Alimentos en Nutrición y Dietética: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Nutrición y Dietética: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Gestión de los Servicios de Salud": "Gestión de los Servicios de Salud en Nutrición y Dietética: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Dietoterapia": "Dietoterapia en Nutrición y Dietética: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Epidemiología Nutricional": "Epidemiología Nutricional en Nutrición y Dietética: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Nutrición Clínica": "Nutrición Clínica en Nutrición y Dietética: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Farmacología Nutricional": "Farmacología Nutricional en Nutrición y Dietética: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Integración Curricular": "Integración Curricular en Nutrición y Dietética: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Alimentación y Nutrición en Situaciones de Emergencia": "Alimentación y Nutrición en Situaciones de Emergencia en Nutrición y Dietética: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Nutrición Comunitaria y Salud Pública": "Nutrición Comunitaria y Salud Pública en Nutrición y Dietética: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Nutrición en el Deporte": "Nutrición en el Deporte en Nutrición y Dietética: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Emprendimiento e Innovación Alimentaria Nutricional": "Emprendimiento e Innovación Alimentaria Nutricional en Nutrición y Dietética: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Bases de Nutrigenómica y Metabolómica": "Bases de Nutrigenómica y Metabolómica en Nutrición y Dietética: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Nutrición y Dietética: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Comportamiento Humano y Procesos": "Comportamiento Humano y Procesos en Nutrición y Dietética: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Psicológicos": "Psicológicos en Nutrición y Dietética: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "One Health y Salud Holística/Ancestral": "One Health y Salud Holística/Ancestral en Nutrición y Dietética: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Fundamentos de Morfofunción": "Fundamentos de Morfofunción en Nutrición y Dietética: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Primeros Auxilios y Bioseguridad Básica": "Primeros Auxilios y Bioseguridad Básica en Nutrición y Dietética: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Salud Contexto Nacional e Internacional": "Salud Contexto Nacional e Internacional en Nutrición y Dietética: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Nutrición Comunitaria 27%": "Nutrición Comunitaria 27% en Nutrición y Dietética: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área."
          },
          "itineraries": [
            {
              "name": "Itinerario I: Innovación y Emprendimiento",
              "subjects": [
                "Modelos de Negocio",
                "Innovación Aplicada",
                "Proyectos de Impacto"
              ]
            },
            {
              "name": "Itinerario II: Investigación Aplicada",
              "subjects": [
                "Metodologías Avanzadas",
                "Seminario de Investigación",
                "Publicación Científica"
              ]
            }
          ]
        }
      },
      "psicologia_clinica": {
        "name": "Psicología Clínica",
        "items": [
          8,
          19,
          30,
          41,
          52,
          63
        ],
        "pdf": "psicologia-clinica-202401.pdf",
        "semesters_count": 9,
        "faculty": "Facultad de Salud y Bienestar",
        "description": "Evaluarás, diagnosticarás e intervendrás en los procesos de salud mental, sufrimiento psíquico y bienestar emocional de personas y familias mediante psicoterapia fundamentada y ética.",
        "fieldOfWork": "Consulta psicoterapéutica privada, hospitales psiquiátricos y generales, ONGs de atención psicosocial, centros de rehabilitación y programas de prevención.",
        "skills": [
          "Evaluación y psicodiagnóstico clínico",
          "Psicoterapia basada en evidencia",
          "Intervención en crisis y primeros auxilios psicológicos",
          "Ética clínica y contención emocional"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "9 semestres presenciales"
          },
          {
            "topText": "Centro",
            "highlight": "CAP",
            "title": "atención psicológica",
            "bottomText": "Cámaras de Gesell y casos reales supervisados"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Evaluación y Encuadre Psicoterapéutico en Trastorno de Ansiedad",
          "scenario": "Una estudiante universitaria consulta por crisis de pánico recurrentes, taquicardia y pensamientos catastrofistas ante exámenes.",
          "description": "Establece el abordaje inicial en la primera sesión clínica:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es la intervención psicoterapéutica inicial más adecuada?",
              "options": [
                {
                  "text": "Psicoeducación sobre el mecanismo fisiológico de la ansiedad, entrenamiento en respiración diafragmática y registro de pensamientos automáticos.",
                  "next": "success"
                },
                {
                  "text": "Confrontar a la paciente diciéndole que sus miedos no tienen sentido y exigirle que deje de preocuparse inmediatamente.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Alianza terapéutica y rigor clínico! La psicoeducación desmitifica los síntomas somáticos del pánico y reduce la hipervigilancia desde la primera intervención.",
            "failure": "Invalidar las emociones del consultante destruye la alianza terapéutica e incrementa la angustia y el aislamiento del paciente."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Historia de la Psicología",
              "Neuroanatomía y Psicoﬁsiología",
              "Conducción de Grupos",
              "Epistemología de la Psicología",
              "Salud y Grupos Prioritarios (Diversidad)"
            ],
            [
              "Psicología del Desarrollo de la",
              "Psicopatología I",
              "Técnicas de Entrevista",
              "Evaluación Psicológica",
              "Intervención en Crisis",
              "Ecología Integral"
            ],
            [
              "Psicopatología Dinámica",
              "Teoría Sistémica",
              "Teoría Integrativa",
              "Psicodiagnóstico",
              "Intervenciones comunitarias de la Ps. Clínica",
              "Jesucristo y Aprendizaje Vital"
            ],
            [
              "Enfoques Psicológicos",
              "Neuropsicología",
              "Psicología del Desarrollo de la Niñez",
              "Psicología Social",
              "Estadística Aplicada a la Psicología",
              "Ética e Interculturalidad"
            ],
            [
              "Psicopatología II",
              "Teoría Psicoanalítica",
              "Teoría Humanista",
              "Teoría Cognitivo Conductual",
              "Técnicas Psicométricas",
              "Técnicas Proyectivas"
            ],
            [
              "Psicopatología y Clínica de la Niñez",
              "Psicopatología y Clínica de la Adultez",
              "Fundamentos de la Psicoterapia en la Infancia y Adolescencia",
              "Fundamentos de la Psicoterapia en la Adultez",
              "Trabajo de Campo I",
              "Prácticas Preprofesionales I"
            ],
            [
              "Conocimiento, Palabra y Cambio Social",
              "Salud Contexto Nacional e Internacional",
              "Comportamiento Humano y Procesos Psicológicos",
              "Primeros Auxilios y Bioseguridad Básica",
              "Fundamentos de Morfofunción",
              "One Health y Salud Holística/Ancestral"
            ],
            [
              "Seminario de Titulación",
              "Psicofarmacología para Psicólogos Clínicos",
              "Deontología Profesional",
              "Trabajo de Campo II",
              "Prácticas Preprofesionales II",
              "Integración Curricular"
            ],
            [
              "Dinámicas Familiares",
              "Psicología de las Violencias",
              "Problemáticas de la Psicología Contemporánea",
              "Metodología Cualitativa en Psicología",
              "Metodología Cuantitativa en Psicología",
              "Habilidades de Escritura Aplicada a la Investigación clínica"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Psicología Clínica: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Historia de la Psicología": "Historia de la Psicología en Psicología Clínica: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Neuroanatomía y Psicoﬁsiología": "Neuroanatomía y Psicoﬁsiología en Psicología Clínica: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Conducción de Grupos": "Conducción de Grupos en Psicología Clínica: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Epistemología de la Psicología": "Epistemología de la Psicología en Psicología Clínica: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Salud y Grupos Prioritarios (Diversidad)": "Salud y Grupos Prioritarios (Diversidad) en Psicología Clínica: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Psicología del Desarrollo de la": "Psicología del Desarrollo de la en Psicología Clínica: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Psicopatología I": "Psicopatología I en Psicología Clínica: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Técnicas de Entrevista": "Técnicas de Entrevista en Psicología Clínica: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Evaluación Psicológica": "Evaluación Psicológica en Psicología Clínica: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Intervención en Crisis": "Intervención en Crisis en Psicología Clínica: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ecología Integral": "Ecología Integral en Psicología Clínica: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Psicopatología Dinámica": "Psicopatología Dinámica en Psicología Clínica: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Teoría Sistémica": "Teoría Sistémica en Psicología Clínica: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Teoría Integrativa": "Teoría Integrativa en Psicología Clínica: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Psicodiagnóstico": "Psicodiagnóstico en Psicología Clínica: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Intervenciones comunitarias de la Ps. Clínica": "Intervenciones comunitarias de la Ps. Clínica en Psicología Clínica: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Jesucristo y Aprendizaje Vital": "Jesucristo y Aprendizaje Vital en Psicología Clínica: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Enfoques Psicológicos": "Enfoques Psicológicos en Psicología Clínica: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Neuropsicología": "Neuropsicología en Psicología Clínica: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Psicología del Desarrollo de la Niñez": "Psicología del Desarrollo de la Niñez en Psicología Clínica: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Psicología Social": "Psicología Social en Psicología Clínica: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Estadística Aplicada a la Psicología": "Estadística Aplicada a la Psicología en Psicología Clínica: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Psicología Clínica: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Psicopatología II": "Psicopatología II en Psicología Clínica: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Teoría Psicoanalítica": "Teoría Psicoanalítica en Psicología Clínica: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Teoría Humanista": "Teoría Humanista en Psicología Clínica: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Teoría Cognitivo Conductual": "Teoría Cognitivo Conductual en Psicología Clínica: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Técnicas Psicométricas": "Técnicas Psicométricas en Psicología Clínica: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Técnicas Proyectivas": "Técnicas Proyectivas en Psicología Clínica: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Psicopatología y Clínica de la Niñez": "Psicopatología y Clínica de la Niñez en Psicología Clínica: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Psicopatología y Clínica de la Adultez": "Psicopatología y Clínica de la Adultez en Psicología Clínica: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de la Psicoterapia en la Infancia y Adolescencia": "Fundamentos de la Psicoterapia en la Infancia y Adolescencia en Psicología Clínica: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fundamentos de la Psicoterapia en la Adultez": "Fundamentos de la Psicoterapia en la Adultez en Psicología Clínica: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Trabajo de Campo I": "Trabajo de Campo I en Psicología Clínica: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Prácticas Preprofesionales I": "Prácticas Preprofesionales I en Psicología Clínica: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Psicología Clínica: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Salud Contexto Nacional e Internacional": "Salud Contexto Nacional e Internacional en Psicología Clínica: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Comportamiento Humano y Procesos Psicológicos": "Comportamiento Humano y Procesos Psicológicos en Psicología Clínica: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Primeros Auxilios y Bioseguridad Básica": "Primeros Auxilios y Bioseguridad Básica en Psicología Clínica: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Fundamentos de Morfofunción": "Fundamentos de Morfofunción en Psicología Clínica: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "One Health y Salud Holística/Ancestral": "One Health y Salud Holística/Ancestral en Psicología Clínica: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Seminario de Titulación": "Seminario de Titulación en Psicología Clínica: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Psicofarmacología para Psicólogos Clínicos": "Psicofarmacología para Psicólogos Clínicos en Psicología Clínica: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Deontología Profesional": "Deontología Profesional en Psicología Clínica: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Trabajo de Campo II": "Trabajo de Campo II en Psicología Clínica: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Prácticas Preprofesionales II": "Prácticas Preprofesionales II en Psicología Clínica: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Integración Curricular": "Integración Curricular en Psicología Clínica: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Dinámicas Familiares": "Dinámicas Familiares en Psicología Clínica: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Psicología de las Violencias": "Psicología de las Violencias en Psicología Clínica: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Problemáticas de la Psicología Contemporánea": "Problemáticas de la Psicología Contemporánea en Psicología Clínica: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Metodología Cualitativa en Psicología": "Metodología Cualitativa en Psicología en Psicología Clínica: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Metodología Cuantitativa en Psicología": "Metodología Cuantitativa en Psicología en Psicología Clínica: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Habilidades de Escritura Aplicada a la Investigación clínica": "Habilidades de Escritura Aplicada a la Investigación clínica en Psicología Clínica: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario I: Innovación y Emprendimiento",
              "subjects": [
                "Modelos de Negocio",
                "Innovación Aplicada",
                "Proyectos de Impacto"
              ]
            },
            {
              "name": "Itinerario II: Investigación Aplicada",
              "subjects": [
                "Metodologías Avanzadas",
                "Seminario de Investigación",
                "Publicación Científica"
              ]
            }
          ]
        }
      },
      "bioingenieria": {
        "name": "Bioingeniería",
        "items": [
          9,
          20,
          31,
          42,
          53,
          64
        ],
        "pdf": "bioingenieria-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Salud y Bienestar",
        "description": "Aplica los principios de la ingeniería a los sistemas biológicos y médicos: desarrollo de prótesis inteligentes, instrumental biomédico, biopolímeros, ingeniería de tejidos y bioprocesos sostenibles.",
        "fieldOfWork": "Empresas de tecnología médica y prótesis, mantenimiento y diseño de equipos hospitalarios, industrias biotecnológicas y laboratorios de I+D en biomecánica.",
        "skills": [
          "Diseño de dispositivos biomédicos",
          "Biomecánica y biomateriales",
          "Sensores y procesamiento de señales fisiológicas",
          "Biotecnología y bioprocesos"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Innovación",
            "highlight": "Salud-Tech",
            "title": "laboratorios propios",
            "bottomText": "Impresión 3D de biomateriales"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Diseño de Prótesis Mioeléctrica con Sensores Biomecánicos",
          "scenario": "Se requiere diseñar un prototipo de prótesis de mano para un paciente con amputación transradial que responda a contracciones musculares del muñón.",
          "description": "Determina la arquitectura del sensor fisiológico:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Qué señal biológica y acondicionamiento electrónico seleccionas para accionar los servomotores de la prótesis?",
              "options": [
                {
                  "text": "Captura de señales electromiográficas (EMG) de superficie con electrodos de plata/cloruro de plata, filtrado pasabanda (20-500 Hz) y amplificación diferencial.",
                  "next": "success"
                },
                {
                  "text": "Uso de un micrófono acústico común pegado a la piel para captar los sonidos de la respiración.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Ingeniería biomédica avanzada! El procesamiento de señales EMG superficiales capta los potenciales de acción muscular y los traduce en comandos mecánicos de agarre precisos.",
            "failure": "Las señales acústicas respiratorias no tienen correlación con la intención de movimiento del miembro superior amputado."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Introducción al Emprendimiento y Modelos de Negocio Innovadores",
              "Identidad y Marketing Aplicado al Emprendimiento",
              "Operaciones e Innovación Organizacional en el Proceso de Producción",
              "Finanzas para Emprendedores",
              "Introducción a la Economía Sostenible",
              "Sostenibilidad Ambiental y Cambio Climático"
            ],
            [
              "Dirección de Proyecto",
              "Inicio y Planiﬁcación del Proyecto",
              "Ejecución, Monitoreo, Control y Cierre del Proyecto",
              "Gestión Ágil de Proyectos 27%",
              "Genética Molecular",
              "Estadística II"
            ],
            [
              "Soluciones inspiradas en la Naturaleza",
              "Pensamiento Sistémico",
              "Ecología Integral",
              "Biotecnología y Herramientas Bioinformáticas",
              "Operaciones Unitarias",
              "Propiedades Físicas y Mecánicas de los Materiales"
            ],
            [
              "Jesucristo y los Aprendizajes Vitales",
              "Macromoléculas y Metabolismo",
              "Algebra Lineal",
              "Técnicas de Laboratorio Químico",
              "Estadística I",
              "Ciencias Fundamentales I"
            ],
            [
              "Balance de Materia y Energía",
              "Fenómenos de Transporte",
              "Mecánica",
              "Ecodiseño y Sostenibilidad",
              "Seminario de Titulación",
              "Asignatura 1 de Itinerario"
            ],
            [
              "Biología Sintética",
              "Fermentaciones Industriales",
              "Fundamentos de Procesos, Simulación y Control",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de itinerario"
            ],
            [
              "Polímeros",
              "Nanociencia y Nanotecnología",
              "Conocimiento, Palabra y Cambio Social",
              "Fundamentos de Biología",
              "Fundamentos de Química",
              "Física I"
            ],
            [
              "Matemática I",
              "Fundamentos de la Investigación",
              "Fundamentos de Microbiología",
              "Química Orgánica Básica",
              "Matemática II",
              "Fundamentos de Genética"
            ]
          ],
          "subjectDetails": {
            "Introducción al Emprendimiento y Modelos de Negocio Innovadores": "Introducción al Emprendimiento y Modelos de Negocio Innovadores en Bioingeniería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Identidad y Marketing Aplicado al Emprendimiento": "Identidad y Marketing Aplicado al Emprendimiento en Bioingeniería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Operaciones e Innovación Organizacional en el Proceso de Producción": "Operaciones e Innovación Organizacional en el Proceso de Producción en Bioingeniería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Finanzas para Emprendedores": "Finanzas para Emprendedores en Bioingeniería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Introducción a la Economía Sostenible": "Introducción a la Economía Sostenible en Bioingeniería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Sostenibilidad Ambiental y Cambio Climático": "Sostenibilidad Ambiental y Cambio Climático en Bioingeniería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Dirección de Proyecto": "Dirección de Proyecto en Bioingeniería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Inicio y Planiﬁcación del Proyecto": "Inicio y Planiﬁcación del Proyecto en Bioingeniería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ejecución, Monitoreo, Control y Cierre del Proyecto": "Ejecución, Monitoreo, Control y Cierre del Proyecto en Bioingeniería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Gestión Ágil de Proyectos 27%": "Gestión Ágil de Proyectos 27% en Bioingeniería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Genética Molecular": "Genética Molecular en Bioingeniería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Estadística II": "Estadística II en Bioingeniería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Soluciones inspiradas en la Naturaleza": "Soluciones inspiradas en la Naturaleza en Bioingeniería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Pensamiento Sistémico": "Pensamiento Sistémico en Bioingeniería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ecología Integral": "Ecología Integral en Bioingeniería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Biotecnología y Herramientas Bioinformáticas": "Biotecnología y Herramientas Bioinformáticas en Bioingeniería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Operaciones Unitarias": "Operaciones Unitarias en Bioingeniería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Propiedades Físicas y Mecánicas de los Materiales": "Propiedades Físicas y Mecánicas de los Materiales en Bioingeniería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Jesucristo y los Aprendizajes Vitales": "Jesucristo y los Aprendizajes Vitales en Bioingeniería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Macromoléculas y Metabolismo": "Macromoléculas y Metabolismo en Bioingeniería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Algebra Lineal": "Algebra Lineal en Bioingeniería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Técnicas de Laboratorio Químico": "Técnicas de Laboratorio Químico en Bioingeniería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Estadística I": "Estadística I en Bioingeniería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ciencias Fundamentales I": "Ciencias Fundamentales I en Bioingeniería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Balance de Materia y Energía": "Balance de Materia y Energía en Bioingeniería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fenómenos de Transporte": "Fenómenos de Transporte en Bioingeniería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Mecánica": "Mecánica en Bioingeniería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Ecodiseño y Sostenibilidad": "Ecodiseño y Sostenibilidad en Bioingeniería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Seminario de Titulación": "Seminario de Titulación en Bioingeniería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 1 de Itinerario": "Asignatura 1 de Itinerario en Bioingeniería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Biología Sintética": "Biología Sintética en Bioingeniería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fermentaciones Industriales": "Fermentaciones Industriales en Bioingeniería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Procesos, Simulación y Control": "Fundamentos de Procesos, Simulación y Control en Bioingeniería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Bioingeniería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Bioingeniería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de itinerario": "Asignatura 4 de itinerario en Bioingeniería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Polímeros": "Polímeros en Bioingeniería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Nanociencia y Nanotecnología": "Nanociencia y Nanotecnología en Bioingeniería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Bioingeniería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fundamentos de Biología": "Fundamentos de Biología en Bioingeniería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Fundamentos de Química": "Fundamentos de Química en Bioingeniería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Física I": "Física I en Bioingeniería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Matemática I": "Matemática I en Bioingeniería: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fundamentos de la Investigación": "Fundamentos de la Investigación en Bioingeniería: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Microbiología": "Fundamentos de Microbiología en Bioingeniería: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Química Orgánica Básica": "Química Orgánica Básica en Bioingeniería: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Matemática II": "Matemática II en Bioingeniería: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Fundamentos de Genética": "Fundamentos de Genética en Bioingeniería: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Economía y Ambiente",
              "subjects": [
                "Especialización I (Economía y Ambiente)",
                "Especialización II (Economía y Ambiente)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Gestión de Proyectos (Project Management)",
              "subjects": [
                "Especialización I (Gestión de Proyectos)",
                "Especialización II (Gestión de Proyectos)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: ",
              "subjects": [
                "Especialización I ()",
                "Especialización II ()",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "ciencias_biomedicas": {
        "name": "Ciencias Biomédicas",
        "items": [
          10,
          21,
          32,
          43,
          54,
          65
        ],
        "pdf": "ciencias-biomedicas-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Salud y Bienestar",
        "description": "Comprenderás los mecanismos moleculares, genéticos y celulares de las enfermedades humanas, investigando en farmacogenómica, terapias avanzadas y medicina de precisión.",
        "fieldOfWork": "Institutos de investigación oncológica y genética, laboratorios de diagnóstico molecular, industria farmacéutica y centros de desarrollo de vacunas.",
        "skills": [
          "Biología molecular y celular",
          "Genómica y secuenciación masiva (NGS)",
          "Farmacología experimental y cultivos celulares",
          "Inmunología celular avanzada"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "CISeAL",
            "highlight": "Nivel mundial",
            "title": "centro de investigación",
            "bottomText": "Investigación biomédica de punta"
          }
        ],
        "caseStudy": {
          "type": "matching",
          "title": "Identificación de Biomarcadores en Medicina de Precisión",
          "scenario": "Un laboratorio oncológico busca caracterizar mutaciones genéticas para personalizar el tratamiento de una paciente con cáncer.",
          "description": "Empareja la técnica de diagnóstico molecular con el objetivo terapéutico:",
          "leftItems": [
            {
              "id": "ngs",
              "label": "Secuenciación de nueva generación (NGS)"
            },
            {
              "id": "qpcr",
              "label": "PCR cuantitativa en tiempo real (qPCR)"
            },
            {
              "id": "elisa",
              "label": "Inmunoensayo ELISA de alta sensibilidad"
            }
          ],
          "rightItems": [
            {
              "id": "ngs",
              "label": "Detección de mutaciones raras en el panel de genes BRCA1/2"
            },
            {
              "id": "qpcr",
              "label": "Cuantificación de la expresión del ARN mensajero tumoral"
            },
            {
              "id": "elisa",
              "label": "Medición de proteínas y citoquinas inflamatorias en suero"
            }
          ],
          "feedback": {
            "success": "¡Precisión biomédica sobresaliente! Integrar secuenciación, expresión génica y serología permite aplicar terapias dirigidas con alta efectividad y menor toxicidad.",
            "failure": "Revisa los fundamentos de cada ensayo molecular: NGS se enfoca en lectura de ADN/mutaciones masivas, mientras qPCR evalúa copias de ácidos nucleicos."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Tópicos de las Enfermedades Infecciosas y Crónicas",
              "Genética Molécular",
              "Estadistica II",
              "Salud y Sociedad",
              "Evolución",
              "Prácticas preprofesionales I"
            ],
            [
              "Ecología Integral",
              "Entomología Médica",
              "Parasitología",
              "SIG y Salud",
              "Salud Global II",
              "Biología Celular y del Desarrollo"
            ],
            [
              "Jesucristo y Aprendizajes Vitales",
              "Morfofunción",
              "Macromoléculas y Metabolismo",
              "Ecología Humana",
              "Estadistica I",
              "Seminario de Investigación II"
            ],
            [
              "Ética e Interculturalidad",
              "Microbiología Patogénica",
              "Ecología y Salud",
              "Biologia Molecular Aplicada a las Enfermedades - Salud Global I",
              "Bioseguridad",
              "Prácticas Preprofesionales II"
            ],
            [
              "Salud Global III",
              "Salud Pública",
              "Virología",
              "Inmunología",
              "Enfermedades Genéticas y Metabólicas",
              "Ética y Conducta Resposable de Investigación Biomédica"
            ],
            [
              "Integración Curricular",
              "Salud Global IV",
              "Epidemiología",
              "Bioinformática",
              "Técnicas de Laboratorio y Campo Aplicada a Enfermedades",
              "Diagnóstico de Microorganismos"
            ],
            [
              "Conocimiento, Palabra y Cambio Social",
              "Fundamentos de Biología",
              "Fundamentos de Química",
              "Fisica I",
              "Ecuador Megadiverso",
              "Matemática I"
            ],
            [
              "Fundamentos de Investigación",
              "Fundamentos de Microbiología",
              "Quimica Orgánica Básica",
              "Fundamentos de Genética",
              "Ecología y Ecosistemas",
              "Matemática II"
            ]
          ],
          "subjectDetails": {
            "Tópicos de las Enfermedades Infecciosas y Crónicas": "Tópicos de las Enfermedades Infecciosas y Crónicas en Ciencias Biomédicas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Genética Molécular": "Genética Molécular en Ciencias Biomédicas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Estadistica II": "Estadistica II en Ciencias Biomédicas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Salud y Sociedad": "Salud y Sociedad en Ciencias Biomédicas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Evolución": "Evolución en Ciencias Biomédicas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Prácticas preprofesionales I": "Prácticas preprofesionales I en Ciencias Biomédicas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ecología Integral": "Ecología Integral en Ciencias Biomédicas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Entomología Médica": "Entomología Médica en Ciencias Biomédicas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Parasitología": "Parasitología en Ciencias Biomédicas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "SIG y Salud": "SIG y Salud en Ciencias Biomédicas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Salud Global II": "Salud Global II en Ciencias Biomédicas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Biología Celular y del Desarrollo": "Biología Celular y del Desarrollo en Ciencias Biomédicas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Ciencias Biomédicas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Morfofunción": "Morfofunción en Ciencias Biomédicas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Macromoléculas y Metabolismo": "Macromoléculas y Metabolismo en Ciencias Biomédicas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Ecología Humana": "Ecología Humana en Ciencias Biomédicas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Estadistica I": "Estadistica I en Ciencias Biomédicas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Seminario de Investigación II": "Seminario de Investigación II en Ciencias Biomédicas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Ciencias Biomédicas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Microbiología Patogénica": "Microbiología Patogénica en Ciencias Biomédicas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ecología y Salud": "Ecología y Salud en Ciencias Biomédicas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Biologia Molecular Aplicada a las Enfermedades - Salud Global I": "Biologia Molecular Aplicada a las Enfermedades - Salud Global I en Ciencias Biomédicas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Bioseguridad": "Bioseguridad en Ciencias Biomédicas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Prácticas Preprofesionales II": "Prácticas Preprofesionales II en Ciencias Biomédicas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Salud Global III": "Salud Global III en Ciencias Biomédicas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Salud Pública": "Salud Pública en Ciencias Biomédicas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Virología": "Virología en Ciencias Biomédicas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Inmunología": "Inmunología en Ciencias Biomédicas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Enfermedades Genéticas y Metabólicas": "Enfermedades Genéticas y Metabólicas en Ciencias Biomédicas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ética y Conducta Resposable de Investigación Biomédica": "Ética y Conducta Resposable de Investigación Biomédica en Ciencias Biomédicas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Integración Curricular": "Integración Curricular en Ciencias Biomédicas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Salud Global IV": "Salud Global IV en Ciencias Biomédicas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Epidemiología": "Epidemiología en Ciencias Biomédicas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Bioinformática": "Bioinformática en Ciencias Biomédicas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Técnicas de Laboratorio y Campo Aplicada a Enfermedades": "Técnicas de Laboratorio y Campo Aplicada a Enfermedades en Ciencias Biomédicas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Diagnóstico de Microorganismos": "Diagnóstico de Microorganismos en Ciencias Biomédicas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Ciencias Biomédicas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fundamentos de Biología": "Fundamentos de Biología en Ciencias Biomédicas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Química": "Fundamentos de Química en Ciencias Biomédicas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fisica I": "Fisica I en Ciencias Biomédicas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecuador Megadiverso": "Ecuador Megadiverso en Ciencias Biomédicas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Matemática I": "Matemática I en Ciencias Biomédicas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fundamentos de Investigación": "Fundamentos de Investigación en Ciencias Biomédicas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fundamentos de Microbiología": "Fundamentos de Microbiología en Ciencias Biomédicas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Quimica Orgánica Básica": "Quimica Orgánica Básica en Ciencias Biomédicas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fundamentos de Genética": "Fundamentos de Genética en Ciencias Biomédicas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología y Ecosistemas": "Ecología y Ecosistemas en Ciencias Biomédicas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Matemática II": "Matemática II en Ciencias Biomédicas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario I: Innovación y Emprendimiento",
              "subjects": [
                "Modelos de Negocio",
                "Innovación Aplicada",
                "Proyectos de Impacto"
              ]
            },
            {
              "name": "Itinerario II: Investigación Aplicada",
              "subjects": [
                "Metodologías Avanzadas",
                "Seminario de Investigación",
                "Publicación Científica"
              ]
            }
          ]
        }
      },
      "laboratorio_clinico": {
        "name": "Laboratorio Clínico",
        "items": [
          4,
          15,
          26,
          37,
          48,
          59
        ],
        "pdf": "laboratorio-clinico-202508.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Salud y Bienestar",
        "description": "Liderarás el análisis de muestras biológicas humanas (sangre, tejidos, líquidos corporales) para el diagnóstico, pronóstico y seguimiento de enfermedades mediante tecnologías analíticas y control de calidad.",
        "fieldOfWork": "Laboratorios clínicos de hospitales públicos y privados, bancos de sangre, centros de diagnóstico toxicológico, peritaje forense e investigación clínica.",
        "skills": [
          "Hematología e inmunología clínica",
          "Microbiología y bacteriología diagnóstica",
          "Química clínica y enzimología",
          "Gestión de calidad y bioseguridad"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Rotaciones",
            "highlight": "100%",
            "title": "en laboratorios",
            "bottomText": "Equipos automatizados de química y hematología"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Validación de Resultados Críticos en Hematología",
          "scenario": "El autoanalizador hematológico arroja un recuento de plaquetas de 12.000/μL con una alarma de posible agregación plaquetaria (pseudotrombocitopenia).",
          "description": "Aplica el criterio de validación analítica:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Qué procedimiento de verificación realizas antes de reportar este resultado crítico al médico?",
              "options": [
                {
                  "text": "Elaborar un frotis de sangre periférica, teñirlo con Wright y examinar al microscopio en busca de agregados plaquetarios inducidos por EDTA, solicitando muestra con citrato si es necesario.",
                  "next": "success"
                },
                {
                  "text": "Reportar inmediatamente el valor sin mirar el frotis para que ordenen transfusión de plaquetas de urgencia.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Criterio bioanalítico impecable! La revisión del frotis confirma si se trata de un falso positivo por efecto del anticoagulante, evitando tratamientos innecesarios al paciente.",
            "failure": "Reportar una pseudotrombocitopenia sin verificar el frotis puede conducir a procedimientos invasivos erróneos y diagnósticos falsos de gravedad."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Metodología e Instrumentación en el Laboratorio Clínico",
              "Fundamentos de Bioquímica",
              "Introducción al Laboratorio Clínico",
              "Técnicas Histológicas",
              "Biología Celular y Molecular"
            ],
            [
              "Inmunología Básica",
              "Hematología Diagnóstica",
              "Herramientas Moleculares para el Diagnóstico Clínico",
              "Bacteriología Clínica I",
              "Urianálisis",
              "Ecología Integral"
            ],
            [
              "Análisis de Líquidos Biológicos",
              "Genética",
              "Micología Clínica",
              "Prácticas preprofesionales II",
              "Jesucristo y Aprendizajes Vitales",
              "Metabolismo y Regulación"
            ],
            [
              "Histología",
              "Diagnóstico Microbiológico Humano",
              "Técnicas de Flebotomía",
              "Ética e interculturalidad",
              "Bioquímica Clínica II",
              "Inmunología diagnóstico y Virología"
            ],
            [
              "Diagnóstico Molecular",
              "Bacteriología Clínica II",
              "Prácticas preprofesionales I",
              "Diseño de Proyectos",
              "Metrología en el Laboratorio Clínico",
              "Toxicología"
            ],
            [
              "Introducción a Técnicas Ómicas",
              "Epidemiología",
              "Prácticas preprofesionales III",
              "Conocimiento, Palabra y Cambio Social",
              "Salud Contexto Nacional e Internacional",
              "Fundamentos de Morfofunción"
            ],
            [
              "Comportamiento Humano y Procesos Psicológicos",
              "One Health y Salud holística / Ancestral",
              "Seminario de Titulación",
              "Aseguramiento de la Calidad en Laboratorios Clínicos I",
              "Correlación Clínica I",
              "Hemovigilancia y Control de Calidad en Bancos de Sangre"
            ],
            [
              "Prácticas preprofesionales IV",
              "Integración Curricular",
              "Aseguramiento de la Calidad en Laboratorios Clínicos II",
              "Correlación Clínica II",
              "Biología Molecular en Neoplasias",
              "Gestión de Laboratorio Clínico II"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Laboratorio Clínico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Metodología e Instrumentación en el Laboratorio Clínico": "Metodología e Instrumentación en el Laboratorio Clínico en Laboratorio Clínico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Bioquímica": "Fundamentos de Bioquímica en Laboratorio Clínico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Introducción al Laboratorio Clínico": "Introducción al Laboratorio Clínico en Laboratorio Clínico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Técnicas Histológicas": "Técnicas Histológicas en Laboratorio Clínico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Biología Celular y Molecular": "Biología Celular y Molecular en Laboratorio Clínico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Inmunología Básica": "Inmunología Básica en Laboratorio Clínico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Hematología Diagnóstica": "Hematología Diagnóstica en Laboratorio Clínico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Herramientas Moleculares para el Diagnóstico Clínico": "Herramientas Moleculares para el Diagnóstico Clínico en Laboratorio Clínico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Bacteriología Clínica I": "Bacteriología Clínica I en Laboratorio Clínico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Urianálisis": "Urianálisis en Laboratorio Clínico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ecología Integral": "Ecología Integral en Laboratorio Clínico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Análisis de Líquidos Biológicos": "Análisis de Líquidos Biológicos en Laboratorio Clínico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Genética": "Genética en Laboratorio Clínico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Micología Clínica": "Micología Clínica en Laboratorio Clínico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Prácticas preprofesionales II": "Prácticas preprofesionales II en Laboratorio Clínico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Laboratorio Clínico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Metabolismo y Regulación": "Metabolismo y Regulación en Laboratorio Clínico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Histología": "Histología en Laboratorio Clínico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Diagnóstico Microbiológico Humano": "Diagnóstico Microbiológico Humano en Laboratorio Clínico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Técnicas de Flebotomía": "Técnicas de Flebotomía en Laboratorio Clínico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Ética e interculturalidad": "Ética e interculturalidad en Laboratorio Clínico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Bioquímica Clínica II": "Bioquímica Clínica II en Laboratorio Clínico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Inmunología diagnóstico y Virología": "Inmunología diagnóstico y Virología en Laboratorio Clínico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Diagnóstico Molecular": "Diagnóstico Molecular en Laboratorio Clínico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Bacteriología Clínica II": "Bacteriología Clínica II en Laboratorio Clínico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Prácticas preprofesionales I": "Prácticas preprofesionales I en Laboratorio Clínico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Diseño de Proyectos": "Diseño de Proyectos en Laboratorio Clínico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Metrología en el Laboratorio Clínico": "Metrología en el Laboratorio Clínico en Laboratorio Clínico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Toxicología": "Toxicología en Laboratorio Clínico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Introducción a Técnicas Ómicas": "Introducción a Técnicas Ómicas en Laboratorio Clínico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Epidemiología": "Epidemiología en Laboratorio Clínico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Prácticas preprofesionales III": "Prácticas preprofesionales III en Laboratorio Clínico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Laboratorio Clínico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Salud Contexto Nacional e Internacional": "Salud Contexto Nacional e Internacional en Laboratorio Clínico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Fundamentos de Morfofunción": "Fundamentos de Morfofunción en Laboratorio Clínico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Comportamiento Humano y Procesos Psicológicos": "Comportamiento Humano y Procesos Psicológicos en Laboratorio Clínico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "One Health y Salud holística / Ancestral": "One Health y Salud holística / Ancestral en Laboratorio Clínico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Seminario de Titulación": "Seminario de Titulación en Laboratorio Clínico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Aseguramiento de la Calidad en Laboratorios Clínicos I": "Aseguramiento de la Calidad en Laboratorios Clínicos I en Laboratorio Clínico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Correlación Clínica I": "Correlación Clínica I en Laboratorio Clínico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Hemovigilancia y Control de Calidad en Bancos de Sangre": "Hemovigilancia y Control de Calidad en Bancos de Sangre en Laboratorio Clínico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Prácticas preprofesionales IV": "Prácticas preprofesionales IV en Laboratorio Clínico: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Integración Curricular": "Integración Curricular en Laboratorio Clínico: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Aseguramiento de la Calidad en Laboratorios Clínicos II": "Aseguramiento de la Calidad en Laboratorios Clínicos II en Laboratorio Clínico: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Correlación Clínica II": "Correlación Clínica II en Laboratorio Clínico: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Biología Molecular en Neoplasias": "Biología Molecular en Neoplasias en Laboratorio Clínico: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Gestión de Laboratorio Clínico II": "Gestión de Laboratorio Clínico II en Laboratorio Clínico: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario I: Innovación y Emprendimiento",
              "subjects": [
                "Modelos de Negocio",
                "Innovación Aplicada",
                "Proyectos de Impacto"
              ]
            },
            {
              "name": "Itinerario II: Investigación Aplicada",
              "subjects": [
                "Metodologías Avanzadas",
                "Seminario de Investigación",
                "Publicación Científica"
              ]
            }
          ]
        }
      },
      "microbiologia": {
        "name": "Microbiología",
        "items": [
          11,
          22,
          33,
          44,
          55,
          66
        ],
        "pdf": "microbiologia-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Salud y Bienestar",
        "description": "Estudiarás las bacterias, virus, hongos y parásitos, sus mecanismos patogénicos, resistencia antimicrobiana y aplicaciones en biotecnología industrial, fermentaciones y salud comunitaria.",
        "fieldOfWork": "Laboratorios de microbiología clínica y ambiental, industrias de alimentos y bebidas fermentadas, vigilancia epidemiológica, bioseguridad y farmacéuticas.",
        "skills": [
          "Cultivo y tipificación bacteriana",
          "Antibiogramas y resistencia microbiana",
          "Virología e inmunología aplicada",
          "Microbiología industrial y de alimentos"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Laboratorios",
            "highlight": "BSL-2",
            "title": "bioseguridad",
            "bottomText": "Ceparios y cabinas de flujo laminar"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Biorremediación y Detección de Patógenos en Alimentos",
          "scenario": "Una planta procesadora de lácteos detecta una posible contaminación por Listeria monocytogenes en una línea de producción.",
          "description": "Establece el protocolo de identificación y aislamiento:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es la estrategia microbiológica para confirmar la presencia del patógeno?",
              "options": [
                {
                  "text": "Enriquecimiento selectivo en caldo Fraser, siembra en agar cromogénico para Listeria y confirmación molecular por PCR de tiempo real.",
                  "next": "success"
                },
                {
                  "text": "Oler el producto y si no presenta mal olor despachar el lote al supermercado.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Rigor microbiológico estricto! Los agares cromogénicos y la PCR proporcionan confirmación inequívoca garantizando la inocuidad alimentaria y la salud pública.",
            "failure": "Muchas bacterias patógenas peligrosas no alteran el olor, sabor ni aspecto visual del alimento, lo que causaría brotes epidémicos graves."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Biotecnología vegetal (Biotecnología verde)",
              "Aplicaciones veterinarias de la Biotecnología (Biotecnología marrón)",
              "Bioindustria (Biotecnología blanca)",
              "Emulsionantes y Desarrollo de Alimentos (Biotecnología amarilla)",
              "Introducción al Emprendimiento y Modelos de Negocio Innovadores",
              "Identidad y Marketing Aplicado al Emprendimiento"
            ],
            [
              "Finanzas para Emprendedores",
              "Micología",
              "Microbiología Humana",
              "Estadística II",
              "Biología Molecular",
              "Fundamentos de Inmunología"
            ],
            [
              "Ecología Integral",
              "Fitopatología Microbiana",
              "Diseño y Evaluación de Proyectos",
              "Microbiología Industrial",
              "Microbiología de Alimentos, Aguas y Superﬁcies",
              "Ecología Microbiana"
            ],
            [
              "Fisiología Microbiana",
              "Bacteriología",
              "Estadística I",
              "Parasitología",
              "Bioseguridad",
              "Ética e Interculturalidad"
            ],
            [
              "Aseguramiento de la Calidad",
              "Microbiología Veterinaria",
              "Microbiología Agrícola",
              "Genética Microbiana",
              "Seminario de Titulación",
              "Asignatura 1 de Itinerario"
            ],
            [
              "Bioinformática",
              "Virología",
              "Biotecnología de Microorganismos",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario"
            ],
            [
              "Laboratorio de Biorremediación",
              "Redacción de Artículos Cientíﬁcos",
              "Conocimiento, Palabra y Cambio Social",
              "Fundamentos de Biología",
              "Matemática I",
              "Fundamentos de Química"
            ],
            [
              "Física I",
              "Fundamentos de Investigación",
              "Fundamentos de Microbiología",
              "Matemática II",
              "Técnicas de Laboratorio Químico",
              "Química Orgánica Básica"
            ]
          ],
          "subjectDetails": {
            "Biotecnología vegetal (Biotecnología verde)": "Biotecnología vegetal (Biotecnología verde) en Microbiología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Aplicaciones veterinarias de la Biotecnología (Biotecnología marrón)": "Aplicaciones veterinarias de la Biotecnología (Biotecnología marrón) en Microbiología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Bioindustria (Biotecnología blanca)": "Bioindustria (Biotecnología blanca) en Microbiología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Emulsionantes y Desarrollo de Alimentos (Biotecnología amarilla)": "Emulsionantes y Desarrollo de Alimentos (Biotecnología amarilla) en Microbiología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Introducción al Emprendimiento y Modelos de Negocio Innovadores": "Introducción al Emprendimiento y Modelos de Negocio Innovadores en Microbiología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Identidad y Marketing Aplicado al Emprendimiento": "Identidad y Marketing Aplicado al Emprendimiento en Microbiología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Finanzas para Emprendedores": "Finanzas para Emprendedores en Microbiología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Micología": "Micología en Microbiología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Microbiología Humana": "Microbiología Humana en Microbiología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Estadística II": "Estadística II en Microbiología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Biología Molecular": "Biología Molecular en Microbiología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Fundamentos de Inmunología": "Fundamentos de Inmunología en Microbiología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ecología Integral": "Ecología Integral en Microbiología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fitopatología Microbiana": "Fitopatología Microbiana en Microbiología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Diseño y Evaluación de Proyectos": "Diseño y Evaluación de Proyectos en Microbiología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Microbiología Industrial": "Microbiología Industrial en Microbiología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Microbiología de Alimentos, Aguas y Superﬁcies": "Microbiología de Alimentos, Aguas y Superﬁcies en Microbiología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ecología Microbiana": "Ecología Microbiana en Microbiología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fisiología Microbiana": "Fisiología Microbiana en Microbiología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Bacteriología": "Bacteriología en Microbiología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Estadística I": "Estadística I en Microbiología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Parasitología": "Parasitología en Microbiología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Bioseguridad": "Bioseguridad en Microbiología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Microbiología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Aseguramiento de la Calidad": "Aseguramiento de la Calidad en Microbiología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Microbiología Veterinaria": "Microbiología Veterinaria en Microbiología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Microbiología Agrícola": "Microbiología Agrícola en Microbiología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Genética Microbiana": "Genética Microbiana en Microbiología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Seminario de Titulación": "Seminario de Titulación en Microbiología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 1 de Itinerario": "Asignatura 1 de Itinerario en Microbiología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Bioinformática": "Bioinformática en Microbiología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Virología": "Virología en Microbiología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Biotecnología de Microorganismos": "Biotecnología de Microorganismos en Microbiología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Microbiología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Microbiología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Microbiología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Laboratorio de Biorremediación": "Laboratorio de Biorremediación en Microbiología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Redacción de Artículos Cientíﬁcos": "Redacción de Artículos Cientíﬁcos en Microbiología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Microbiología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fundamentos de Biología": "Fundamentos de Biología en Microbiología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Matemática I": "Matemática I en Microbiología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Fundamentos de Química": "Fundamentos de Química en Microbiología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Física I": "Física I en Microbiología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fundamentos de Investigación": "Fundamentos de Investigación en Microbiología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Microbiología": "Fundamentos de Microbiología en Microbiología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Matemática II": "Matemática II en Microbiología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Técnicas de Laboratorio Químico": "Técnicas de Laboratorio Químico en Microbiología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Química Orgánica Básica": "Química Orgánica Básica en Microbiología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Emprendimiento en los Negocios",
              "subjects": [
                "Especialización I (Emprendimiento en lo)",
                "Especialización II (Emprendimiento en lo)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: One Health",
              "subjects": [
                "Especialización I (One Health)",
                "Especialización II (One Health)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: ",
              "subjects": [
                "Especialización I ()",
                "Especialización II ()",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "veterinaria": {
        "name": "Medicina Veterinaria",
        "items": [
          6,
          17,
          28,
          39,
          50,
          61
        ],
        "pdf": "veterinaria-202403.pdf",
        "semesters_count": 10,
        "faculty": "Facultad de Salud y Bienestar",
        "description": "Cuidarás de la salud, bienestar y cirugía de animales domésticos, de producción y fauna silvestre, garantizando además la inocuidad alimentaria y la prevención de zoonosis bajo el enfoque Una Salud (One Health).",
        "fieldOfWork": "Clínicas y hospitales veterinarios de pequeños animales, ganaderías y producciones pecuarias, centros de rescate de fauna silvestre e inspección de alimentos.",
        "skills": [
          "Medicina interna y cirugía veterinaria",
          "Diagnóstico por imagen y laboratorio animal",
          "Bienestar animal y etología",
          "Epidemiología de zoonosis (One Health)"
        ],
        "benefits": [
          {
            "topText": "Clínica",
            "highlight": "27%",
            "title": "propia PUCE",
            "bottomText": "Atención a pequeñas y grandes especies"
          },
          {
            "topText": "Inversión",
            "highlight": "$3950",
            "title": "por semestre",
            "bottomText": "10 semestres presenciales"
          },
          {
            "topText": "Enfoque",
            "highlight": "One Health",
            "title": "salud global",
            "bottomText": "Fauna silvestre y producción sostenible"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Atención de Urgencia en Pequeñas Especies",
          "scenario": "Llega a la clínica un canino de 4 años con abdomen distendido, intentos infructuosos de vomitar y taquicardia severa tras comer y jugar intensamente.",
          "description": "Como médico(a) veterinario(a), debes reconocer el cuadro urgente:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es la sospecha clínica principal y la conducta inicial?",
              "options": [
                {
                  "text": "Sospecha de Síndrome de Dilatación-Torsión Vólvulo Gástrico (GDV): descompresión gástrica inmediata con sonda o trocarización, fluidoterapia agresiva para choque y radiografía diagnóstica.",
                  "next": "success"
                },
                {
                  "text": "Prescribir un analgésico oral y pedirle al tutor que regrese en 24 horas si el perro no defeca.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Intervención veterinaria vital! La torsión gástrica es una emergencia hiperaguda que compromete el retorno venoso y provoca necrosis gástrica si no se estabiliza y opera de inmediato.",
            "failure": "La dilatación-torsión gástrica no tratada en cuestión de horas causa colapso cardiovascular y la muerte del animal."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de la Investigación",
              "Organización del cuerpo animal",
              "Manejo y contención de animales",
              "Biofísica",
              "Microbiología veterinaria I",
              "Bioquímica"
            ],
            [
              "Jesucristo y los aprendizajes vitales",
              "Genética",
              "Aparatos y sistemas animales II",
              "Preservación de la salud y",
              "Causas de enfermedad y transtornos en el cuerpo animal I",
              "Diagnóstico veterinario I"
            ],
            [
              "Anestesiología",
              "Imagenología veterinaria",
              "Medicina y clínica general",
              "Enfermedades Infecciosas",
              "Práctica quirúrgica veterinaria",
              "Bioestadística"
            ],
            [
              "Aparatos y sistemas animales I",
              "Microbiología veterinaria II",
              "Etología veterinaria",
              "Biología molecular",
              "Parasitología",
              "Ética e interculturalidad"
            ],
            [
              "Nutrición en animales domésticos y silvestres.",
              "Causas de enfermedad y transtornos en el cuerpo animal II",
              "Farmacología veterinaria",
              "Diagnóstico veterinario II",
              "Eventos reproductivos en animales domésticos"
            ],
            [
              "Medicina fauna silvestre",
              "Medicina aviar",
              "Cirugía I",
              "Medicina y clínica de caninos y felinos (medicina fauna urbana)",
              "Medicina y clínica de especies mayores"
            ],
            [
              "Conocimiento, palabra y cambio social",
              "Fundamentos de biología",
              "Fundamentos de Química",
              "One Health y salud holística/ancestral",
              "Ecuador megadiverso"
            ],
            [
              "Matemática I",
              "Ecología Integral",
              "Asignatura 1 de itinerario*",
              "Asignatura 2 de itinerario*",
              "Seminario de titulación"
            ],
            [
              "Cirugía II",
              "Manejo y cuidado de especies no tradicionales y de experimentación",
              "Integración curricular",
              "Asignatura 3 de itinerario",
              "Asignatura 4 de itinerario"
            ],
            [
              "Emergencia y cuidados críticos veterinaria",
              "Atención clínica integral",
              "Bioética y bienestar animal",
              "Itinerario I: cirugía avanzada",
              "Itinerario II: medicina veterinaria de la producción *Recuerda que a tus asignaturas de enfoques:"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de la Investigación": "Fundamentos de la Investigación en Medicina Veterinaria: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Organización del cuerpo animal": "Organización del cuerpo animal en Medicina Veterinaria: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Manejo y contención de animales": "Manejo y contención de animales en Medicina Veterinaria: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Biofísica": "Biofísica en Medicina Veterinaria: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Microbiología veterinaria I": "Microbiología veterinaria I en Medicina Veterinaria: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Bioquímica": "Bioquímica en Medicina Veterinaria: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Jesucristo y los aprendizajes vitales": "Jesucristo y los aprendizajes vitales en Medicina Veterinaria: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Genética": "Genética en Medicina Veterinaria: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Aparatos y sistemas animales II": "Aparatos y sistemas animales II en Medicina Veterinaria: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Preservación de la salud y": "Preservación de la salud y en Medicina Veterinaria: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Causas de enfermedad y transtornos en el cuerpo animal I": "Causas de enfermedad y transtornos en el cuerpo animal I en Medicina Veterinaria: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Diagnóstico veterinario I": "Diagnóstico veterinario I en Medicina Veterinaria: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Anestesiología": "Anestesiología en Medicina Veterinaria: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Imagenología veterinaria": "Imagenología veterinaria en Medicina Veterinaria: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Medicina y clínica general": "Medicina y clínica general en Medicina Veterinaria: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Enfermedades Infecciosas": "Enfermedades Infecciosas en Medicina Veterinaria: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Práctica quirúrgica veterinaria": "Práctica quirúrgica veterinaria en Medicina Veterinaria: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Bioestadística": "Bioestadística en Medicina Veterinaria: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Aparatos y sistemas animales I": "Aparatos y sistemas animales I en Medicina Veterinaria: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Microbiología veterinaria II": "Microbiología veterinaria II en Medicina Veterinaria: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Etología veterinaria": "Etología veterinaria en Medicina Veterinaria: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Biología molecular": "Biología molecular en Medicina Veterinaria: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Parasitología": "Parasitología en Medicina Veterinaria: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ética e interculturalidad": "Ética e interculturalidad en Medicina Veterinaria: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Nutrición en animales domésticos y silvestres.": "Nutrición en animales domésticos y silvestres. en Medicina Veterinaria: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Causas de enfermedad y transtornos en el cuerpo animal II": "Causas de enfermedad y transtornos en el cuerpo animal II en Medicina Veterinaria: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Farmacología veterinaria": "Farmacología veterinaria en Medicina Veterinaria: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Diagnóstico veterinario II": "Diagnóstico veterinario II en Medicina Veterinaria: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Eventos reproductivos en animales domésticos": "Eventos reproductivos en animales domésticos en Medicina Veterinaria: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Medicina fauna silvestre": "Medicina fauna silvestre en Medicina Veterinaria: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Medicina aviar": "Medicina aviar en Medicina Veterinaria: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Cirugía I": "Cirugía I en Medicina Veterinaria: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Medicina y clínica de caninos y felinos (medicina fauna urbana)": "Medicina y clínica de caninos y felinos (medicina fauna urbana) en Medicina Veterinaria: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Medicina y clínica de especies mayores": "Medicina y clínica de especies mayores en Medicina Veterinaria: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, palabra y cambio social": "Conocimiento, palabra y cambio social en Medicina Veterinaria: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Fundamentos de biología": "Fundamentos de biología en Medicina Veterinaria: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fundamentos de Química": "Fundamentos de Química en Medicina Veterinaria: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "One Health y salud holística/ancestral": "One Health y salud holística/ancestral en Medicina Veterinaria: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ecuador megadiverso": "Ecuador megadiverso en Medicina Veterinaria: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Matemática I": "Matemática I en Medicina Veterinaria: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Medicina Veterinaria: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 1 de itinerario*": "Asignatura 1 de itinerario* en Medicina Veterinaria: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de itinerario*": "Asignatura 2 de itinerario* en Medicina Veterinaria: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Seminario de titulación": "Seminario de titulación en Medicina Veterinaria: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Cirugía II": "Cirugía II en Medicina Veterinaria: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Manejo y cuidado de especies no tradicionales y de experimentación": "Manejo y cuidado de especies no tradicionales y de experimentación en Medicina Veterinaria: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Integración curricular": "Integración curricular en Medicina Veterinaria: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 3 de itinerario": "Asignatura 3 de itinerario en Medicina Veterinaria: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 4 de itinerario": "Asignatura 4 de itinerario en Medicina Veterinaria: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Emergencia y cuidados críticos veterinaria": "Emergencia y cuidados críticos veterinaria en Medicina Veterinaria: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Atención clínica integral": "Atención clínica integral en Medicina Veterinaria: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Bioética y bienestar animal": "Bioética y bienestar animal en Medicina Veterinaria: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Itinerario I: cirugía avanzada": "Itinerario I: cirugía avanzada en Medicina Veterinaria: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Itinerario II: medicina veterinaria de la producción *Recuerda que a tus asignaturas de enfoques:": "Itinerario II: medicina veterinaria de la producción *Recuerda que a tus asignaturas de enfoques: en Medicina Veterinaria: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: cirugía avanzada",
              "subjects": [
                "Especialización I (cirugía avanzada)",
                "Especialización II (cirugía avanzada)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: medicina veterinaria",
              "subjects": [
                "Especialización I (medicina veterinaria)",
                "Especialización II (medicina veterinaria)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: ",
              "subjects": [
                "Especialización I ()",
                "Especialización II ()",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      }
    },
    "questions": [
      {
        "id": 1,
        "text": "¿Te motiva brindar atención directa, continua y asistencial a personas en entornos hospitalarios o comunitarios durante su recuperación?"
      },
      {
        "id": 2,
        "text": "¿Te apasiona la rehabilitación del movimiento corporal humano y la prescripción de ejercicio terapéutico en patologías musculoesqueléticas?"
      },
      {
        "id": 3,
        "text": "¿Sientes inclinación por evaluar el estado nutricional y diseñar planes de alimentación clínica adaptados a diversas patologías metabólicas?"
      },
      {
        "id": 4,
        "text": "¿Te interesa el procesamiento analítico de muestras biológicas y la validación de pruebas bioquímicas, inmunológicas y hematológicas?"
      },
      {
        "id": 5,
        "text": "¿Te visualizas realizando diagnósticos clínicos integrales, indicando terapéutica médica y resolviendo urgencias vitales?"
      },
      {
        "id": 6,
        "text": "¿Sientes vocación por la medicina clínica y quirúrgica veterinaria, el bienestar de animales domésticos y la salud pública (One Health)?"
      },
      {
        "id": 7,
        "text": "¿Te entusiasma la prevención, diagnóstico y rehabilitación estética y funcional del sistema estomatognático y dental?"
      },
      {
        "id": 8,
        "text": "¿Te interesa profundizar en la evaluación psicopatológica, psicoterapia y abordaje de crisis emocionales de personas y familias?"
      },
      {
        "id": 9,
        "text": "¿Te atrae diseñar dispositivos biomédicos, prótesis mioeléctricas y tecnologías de instrumentación para el soporte de vida?"
      },
      {
        "id": 10,
        "text": "¿Te gustaría investigar los mecanismos de acción toxicológica y farmacodinámica de compuestos bioactivos en modelos celulares y genéticos?"
      },
      {
        "id": 11,
        "text": "¿Te ves trabajando en el análisis de metagenómica, microbioma ambiental o clínico y resistencia bacteriana a antibióticos?"
      },
      {
        "id": 12,
        "text": "¿Te atrae la administración segura de fármacos, la monitorización hemodinámica y el soporte emocional al paciente en estado crítico?"
      },
      {
        "id": 13,
        "text": "¿Te gustaría trabajar en readaptación físico-deportiva, evaluando la biomecánica y optimizando el rendimiento de atletas lesionados?"
      },
      {
        "id": 14,
        "text": "¿Te motiva diseñar programas de educación alimentaria comunitaria para prevenir enfermedades crónicas como diabetes y obesidad?"
      },
      {
        "id": 15,
        "text": "¿Te visualizas operando autoanalizadores de última generación y aplicando estrictos controles de calidad en hematología y coagulación?"
      },
      {
        "id": 16,
        "text": "¿Te ves investigando en fisiopatología médica para comprender los mecanismos celulares y sistémicos de las enfermedades humanas?"
      },
      {
        "id": 17,
        "text": "¿Te interesa el manejo epidemiológico y control de enfermedades zoonóticas transmisibles de animales a seres humanos?"
      },
      {
        "id": 18,
        "text": "¿Disfrutas realizando procedimientos clínicos de precisión milimétrica, como endodoncia, ortodoncia o cirugía bucal?"
      },
      {
        "id": 19,
        "text": "¿Te gustaría aplicar instrumentos psicométricos y técnicas de entrevista clínica para diagnosticar trastornos del estado de ánimo?"
      },
      {
        "id": 20,
        "text": "¿Te entusiasma la biomecánica del movimiento humano y el desarrollo de exoesqueletos o sensores implantables para rehabilitación?"
      },
      {
        "id": 21,
        "text": "¿Te motiva la secuenciación de nueva generación (NGS) y el descubrimiento de biomarcadores moleculares para medicina personalizada?"
      },
      {
        "id": 22,
        "text": "¿Te interesa la biotecnología microbiana para producir enzimas, vacunas y fermentaciones de interés farmacéutico o alimentario?"
      },
      {
        "id": 23,
        "text": "¿Te interesa liderar la gestión del cuidado en unidades de cuidados intensivos, quirófanos o servicios de neonatología?"
      },
      {
        "id": 24,
        "text": "¿Te gustaría intervenir terapéuticamente en pacientes con secuelas neurológicas (como ACV) para ayudarlos a recuperar su autonomía funcional?"
      },
      {
        "id": 25,
        "text": "¿Te atrae la nutrición enteral y parenteral especializada en unidades de terapia intensiva y pacientes postquirúrgicos?"
      },
      {
        "id": 26,
        "text": "¿Te interesa la bacteriología diagnóstica, la identificación de cepas bacterianas patógenas y el cultivo microbiológico?"
      },
      {
        "id": 27,
        "text": "¿Te gustaría realizar guardias hospitalarias, integrar equipos multidisciplinarios de interconsulta y prescribir tratamientos avanzados?"
      },
      {
        "id": 28,
        "text": "¿Te ves dirigiendo planes de sanidad animal, bioseguridad y reproducción asistida en ganaderías o centros de conservación de fauna?"
      },
      {
        "id": 29,
        "text": "¿Te interesa la rehabilitación oral con prótesis fijas, implantes dentales osteointegrados y biomateriales cerámicos de vanguardia?"
      },
      {
        "id": 30,
        "text": "¿Te ves facilitando procesos psicoterapéuticos individuales o grupales orientados a resignificar experiencias traumáticas?"
      },
      {
        "id": 31,
        "text": "¿Te imaginas colaborando con cirujanos para diseñar implantes personalizados impresos en 3D con titanio y biopolímeros?"
      },
      {
        "id": 32,
        "text": "¿Te llama la atención el cultivo de líneas celulares humanas para probar la eficacia y citotoxicidad de nuevos fármacos oncológicos?"
      },
      {
        "id": 33,
        "text": "¿Te gustaría investigar los mecanismos de evasión inmunológica y mutación de virus emergentes para la prevención de pandemias?"
      },
      {
        "id": 34,
        "text": "¿Te motiva educar a pacientes y familiares en autocuidado, manejo de patologías crónicas y adherencia al tratamiento médico?"
      },
      {
        "id": 35,
        "text": "¿Te atrae la fisioterapia respiratoria en pacientes críticos ventilados mecánicamente para facilitar su destete ventilatorio?"
      },
      {
        "id": 36,
        "text": "¿Te gustaría liderar servicios de alimentación colectiva en hospitales o empresas, asegurando inocuidad y valor nutricional?"
      },
      {
        "id": 37,
        "text": "¿Te gustaría trabajar en bancos de sangre, realizando tamizaje serológico e inmunohematológico para transfusiones seguras?"
      },
      {
        "id": 38,
        "text": "¿Te interesa la medicina preventiva comunitaria y el diseño de políticas públicas sanitarias para reducir la morbilidad poblacional?"
      },
      {
        "id": 39,
        "text": "¿Te gustaría realizar cirugías ortopédicas y de tejidos blandos en animales de compañía o animales de zoológico lesionados?"
      },
      {
        "id": 40,
        "text": "¿Te apasiona la odontopediatría y la ortopedia funcional de los maxilares para guiar el crecimiento dental armónico en niños?"
      },
      {
        "id": 41,
        "text": "¿Te motiva la investigación clínica en neurociencias del comportamiento y la formulación de intervenciones basadas en evidencia?"
      },
      {
        "id": 42,
        "text": "¿Te interesa la ingeniería de tejidos, la bioimpresión celular y el cultivo de matrices extracelulares para regeneración de órganos?"
      },
      {
        "id": 43,
        "text": "¿Te entusiasma la farmacogenómica y el análisis de cómo el perfil genético de un individuo determina su respuesta a tratamientos?"
      },
      {
        "id": 44,
        "text": "¿Te interesa la micología y parasitología clínica para el diagnóstico e investigación de infecciones oportunistas en pacientes inmunodeprimidos?"
      },
      {
        "id": 45,
        "text": "¿Te gustaría gestionar servicios de salud y coordinar programas de seguridad del paciente para erradicar eventos adversos?"
      },
      {
        "id": 46,
        "text": "¿Te visualizas utilizando agentes electrofísicos avanzados (láser de alta intensidad, ultrasonido terapéutico) para acelerar la regeneración tisular?"
      },
      {
        "id": 47,
        "text": "¿Te interesa la nutrición deportiva de alta competencia y la modulación de composición corporal mediante dietas personalizadas?"
      },
      {
        "id": 48,
        "text": "¿Te ves peritando en laboratorios forenses y toxicológicos para la identificación de sustancias y resolución de causas judiciales?"
      },
      {
        "id": 49,
        "text": "¿Te atrae especializarte en áreas quirúrgicas complejas (neurocirugía, cardiocirugía, traumatología) con alta exigencia técnica?"
      },
      {
        "id": 50,
        "text": "¿Te visualizas utilizando ecografía, endoscopía y anestesia inhalatoria avanzada en un hospital veterinario de tercer nivel?"
      },
      {
        "id": 51,
        "text": "¿Te motiva la periodoncia avanzada, la regeneración tisular guiada y la cirugía plástica de encías para mejorar la sonrisa?"
      },
      {
        "id": 52,
        "text": "¿Te imaginas coordinando comités de bioética y equipos de salud mental en catástrofes y emergencias humanitarias?"
      },
      {
        "id": 53,
        "text": "¿Te ves liderando la gestión tecnológica hospitalaria y asegurando la calibración y seguridad eléctrica de equipos electromédicos?"
      },
      {
        "id": 54,
        "text": "¿Te gustaría trabajar en laboratorios de bioseguridad BSL-3 investigando vectores de enfermedades tropicales y arbovirus?"
      },
      {
        "id": 55,
        "text": "¿Te motiva diseñar protocolos de fermentación industrial para la síntesis de probióticos y proteínas alternativas sostenibles?"
      },
      {
        "id": 56,
        "text": "¿Sientes empatía profunda y vocación incondicional por acompañar con calidez el sufrimiento y la vulnerabilidad de enfermos terminales?"
      },
      {
        "id": 57,
        "text": "¿Te atrae la ergonomía y la prevención de trastornos musculoesqueléticos en trabajadores de empresas industriales y oficinas?"
      },
      {
        "id": 58,
        "text": "¿Te gustaría investigar los compuestos bioactivos de alimentos nativos andinos y su impacto en la modulación de la microbiota intestinal?"
      },
      {
        "id": 59,
        "text": "¿Te visualizas como director técnico responsable de un laboratorio de referencia nacional o centro de biología molecular?"
      },
      {
        "id": 60,
        "text": "¿Te imaginas ejerciendo la medicina con liderazgo humanista y visión ética centrada en la persona y no solo en la enfermedad?"
      },
      {
        "id": 61,
        "text": "¿Te atrae la conservación y medicina de la fauna silvestre en Galápagos o la Amazonía para preservar especies en peligro de extinción?"
      },
      {
        "id": 62,
        "text": "¿Te gustaría dirigir tu propia clínica odontológica multidisciplinaria integrando odontología digital y escaneo intraoral 3D?"
      },
      {
        "id": 63,
        "text": "¿Te visualizas como psicoterapeuta privado ayudando a niños, adolescentes o adultos a alcanzar una vida plena y resiliente?"
      },
      {
        "id": 64,
        "text": "¿Te gustaría fundar una startup MedTech que desarrolle biosensores portátiles o software médico para telemonitoreo de pacientes?"
      },
      {
        "id": 65,
        "text": "¿Te imaginas trabajando en un centro internacional de investigación descubriendo nuevos blancos terapéuticos contra el cáncer?"
      },
      {
        "id": 66,
        "text": "¿Te ves liderando la vigilancia de bioseguridad nacional e impulsando políticas públicas contra la resistencia bacteriana?"
      }
    ]
  },
  "sociales": {
    "macroareaId": "sociales",
    "title": "Ciencias Sociales y Humanidades",
    "shortName": "Sociales y Humanidades",
    "color": "#06b2b3",
    "iconName": "Scale",
    "faculty": "Facultades de Jurisprudencia, Comunicación y Ciencias Humanas",
    "description": "Derecho, diplomacia, comunicación, educación, artes, lenguas, filosofía y teología.",
    "careers": {
      "derecho": {
        "name": "Derecho",
        "items": [
          4,
          15,
          26,
          37,
          48,
          59
        ],
        "pdf": "derecho-202401.pdf",
        "semesters_count": 9,
        "faculty": "Facultad de Jurisprudencia / Derecho y Sociedad",
        "description": "Formamos juristas con sólido pensamiento crítico, capacidad argumentativa y compromiso inquebrantable con la justicia social, los derechos humanos, el estado de derecho y la resolución pacífica de controversias.",
        "fieldOfWork": "Litigio en cortes y tribunales, asesoría corporativa, función judicial y fiscalía, organismos internacionales de derechos humanos y diplomacia.",
        "skills": [
          "Argumentación jurídica y oratoria",
          "Derecho constitucional y procesal",
          "Técnicas de mediación y arbitraje",
          "Redacción legislativa y contratos"
        ],
        "benefits": [
          {
            "topText": "Tradición",
            "highlight": "27%",
            "title": "facultad de leyes",
            "bottomText": "Más de 75 años formando a los juristas del país"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "9 semestres presenciales"
          },
          {
            "topText": "Consultorios",
            "highlight": "Gratuitos",
            "title": "práctica real",
            "bottomText": "Atención de causas reales con supervisión docente"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Garantías Jurisdiccionales y Protección Constitucional",
          "scenario": "A una niña en situación de vulnerabilidad se le niega la matrícula en un centro educativo por razones socioeconómicas y origen étnico.",
          "description": "Como abogado(a) defensor(a) de derechos fundamentales:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Qué acción constitucional de tutela activas ante la justicia ordinaria con mayor urgencia y eficacia?",
              "options": [
                {
                  "text": "Acción de Protección con solicitud de medidas cautelares inmediatas para restituir el derecho a la educación y no discriminación de la menor.",
                  "next": "success"
                },
                {
                  "text": "Iniciar un juicio civil ordinario de indemnización de daños y perjuicios de varios años de trámite sin solicitar medidas cautelares.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Dominio del derecho constitucional! La Acción de Protección es la vía idónea y expedita para frenar violaciones a derechos fundamentales, y las medidas cautelares evitan daños irreparables.",
            "failure": "La vía civil ordinaria no tutela de inmediato el derecho a la educación; mientras dura el proceso la menor permanecería desescolarizada."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Derecho Internacional Público J/RI",
              "Objetos del Derecho",
              "Sujetos del Derecho",
              "Derechos Humanos J/RI/S/GS/CP",
              "Teoría General del Proceso",
              "Teoría del Delito"
            ],
            [
              "Negocios Jurídicos",
              "Derecho Procesal Constitucional",
              "Derecho Procesal Penal",
              "Delitos en Particular",
              "Jesucristo y los Aprendizajes Vitales",
              "Teoría y Filosofía de la Justicia"
            ],
            [
              "Derecho Procesal Orgánico",
              "Introducción al Derecho Penal",
              "Ética e Interculturalidad",
              "Derecho Laboral",
              "Obligaciones",
              "Derecho de la Familia y Niñez"
            ],
            [
              "Procesos en Sede Administrativa",
              "Derecho Tributario",
              "Teoría de la Responsabilidad",
              "Técnicas de Litigación Oral",
              "Procedimientos Penales Especiales",
              "Métodos Alternativos de Solución de Conﬂictos"
            ],
            [
              "Asignatura 1 de Itinerario",
              "Asignatura 2 de Itinerario",
              "Derecho Sucesorio",
              "Derecho Mercantil",
              "Argumentación Jurídica",
              "Integración Curricular"
            ],
            [
              "Asignatura 4 de Itinerario",
              "Derecho Internacional Privado",
              "Derecho Societario",
              "Derechos Inmateriales",
              "Conocimiento, Palabra y Cambio Social",
              "Teoría Social"
            ],
            [
              "Fundamentos del Derecho",
              "Actores Sociales y Desarrollo",
              "Introducción a las Relaciones Internacionales",
              "Fundamentos de la Investigación",
              "Teoría del Estado",
              "Procesos Sociales y Políticos de América Latina"
            ],
            [
              "Economía y Sociedad",
              "Historia y Sociología del Derecho",
              "Políticas y Ética Pública",
              "Contratación Pública",
              "Normas de Responsabilidad y Control",
              "Técnicas de Evaluación e Impacto"
            ],
            [
              "Derecho de Competencia",
              "Derechos y Nuevas Tecnologías",
              "Compliance",
              "Estudios de Paz y Justicia Transicional",
              "Security and Conﬂict",
              "Violence and Human Rigths"
            ]
          ],
          "subjectDetails": {
            "Derecho Internacional Público J/RI": "Derecho Internacional Público J/RI en Derecho: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Objetos del Derecho": "Objetos del Derecho en Derecho: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Sujetos del Derecho": "Sujetos del Derecho en Derecho: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Derechos Humanos J/RI/S/GS/CP": "Derechos Humanos J/RI/S/GS/CP en Derecho: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Teoría General del Proceso": "Teoría General del Proceso en Derecho: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Teoría del Delito": "Teoría del Delito en Derecho: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Negocios Jurídicos": "Negocios Jurídicos en Derecho: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Derecho Procesal Constitucional": "Derecho Procesal Constitucional en Derecho: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Derecho Procesal Penal": "Derecho Procesal Penal en Derecho: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Delitos en Particular": "Delitos en Particular en Derecho: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Jesucristo y los Aprendizajes Vitales": "Jesucristo y los Aprendizajes Vitales en Derecho: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Teoría y Filosofía de la Justicia": "Teoría y Filosofía de la Justicia en Derecho: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Derecho Procesal Orgánico": "Derecho Procesal Orgánico en Derecho: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Introducción al Derecho Penal": "Introducción al Derecho Penal en Derecho: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Derecho: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Derecho Laboral": "Derecho Laboral en Derecho: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Obligaciones": "Obligaciones en Derecho: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Derecho de la Familia y Niñez": "Derecho de la Familia y Niñez en Derecho: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Procesos en Sede Administrativa": "Procesos en Sede Administrativa en Derecho: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Derecho Tributario": "Derecho Tributario en Derecho: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Teoría de la Responsabilidad": "Teoría de la Responsabilidad en Derecho: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Técnicas de Litigación Oral": "Técnicas de Litigación Oral en Derecho: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Procedimientos Penales Especiales": "Procedimientos Penales Especiales en Derecho: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Métodos Alternativos de Solución de Conﬂictos": "Métodos Alternativos de Solución de Conﬂictos en Derecho: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 1 de Itinerario": "Asignatura 1 de Itinerario en Derecho: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Derecho: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Derecho Sucesorio": "Derecho Sucesorio en Derecho: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Derecho Mercantil": "Derecho Mercantil en Derecho: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Argumentación Jurídica": "Argumentación Jurídica en Derecho: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Integración Curricular": "Integración Curricular en Derecho: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Derecho: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Derecho Internacional Privado": "Derecho Internacional Privado en Derecho: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Derecho Societario": "Derecho Societario en Derecho: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Derechos Inmateriales": "Derechos Inmateriales en Derecho: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Derecho: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Teoría Social": "Teoría Social en Derecho: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fundamentos del Derecho": "Fundamentos del Derecho en Derecho: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Actores Sociales y Desarrollo": "Actores Sociales y Desarrollo en Derecho: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Introducción a las Relaciones Internacionales": "Introducción a las Relaciones Internacionales en Derecho: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fundamentos de la Investigación": "Fundamentos de la Investigación en Derecho: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Teoría del Estado": "Teoría del Estado en Derecho: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Procesos Sociales y Políticos de América Latina": "Procesos Sociales y Políticos de América Latina en Derecho: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Economía y Sociedad": "Economía y Sociedad en Derecho: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Historia y Sociología del Derecho": "Historia y Sociología del Derecho en Derecho: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Políticas y Ética Pública": "Políticas y Ética Pública en Derecho: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Contratación Pública": "Contratación Pública en Derecho: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Normas de Responsabilidad y Control": "Normas de Responsabilidad y Control en Derecho: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Técnicas de Evaluación e Impacto": "Técnicas de Evaluación e Impacto en Derecho: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Derecho de Competencia": "Derecho de Competencia en Derecho: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Derechos y Nuevas Tecnologías": "Derechos y Nuevas Tecnologías en Derecho: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Compliance": "Compliance en Derecho: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Estudios de Paz y Justicia Transicional": "Estudios de Paz y Justicia Transicional en Derecho: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Security and Conﬂict": "Security and Conﬂict en Derecho: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Violence and Human Rigths": "Violence and Human Rigths en Derecho: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: GESTIÓN PÚBLICA",
              "subjects": [
                "Especialización I (GESTIÓN PÚBLICA)",
                "Especialización II (GESTIÓN PÚBLICA)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: DERECHO EMPRESARIAL",
              "subjects": [
                "Especialización I (DERECHO EMPRESARIAL)",
                "Especialización II (DERECHO EMPRESARIAL)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: PAZ Y CONFLICTO",
              "subjects": [
                "Especialización I (PAZ Y CONFLICTO)",
                "Especialización II (PAZ Y CONFLICTO)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "relaciones_internacionales": {
        "name": "Relaciones Internacionales",
        "items": [
          5,
          16,
          27,
          38,
          49,
          60
        ],
        "pdf": "relaciones-internacionales-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Derecho y Sociedad",
        "description": "Comprenderás y analizarás los fenómenos de la geopolítica mundial, el comercio global, la diplomacia, los tratados internacionales y la cooperación para el desarrollo en un mundo interconectado.",
        "fieldOfWork": "Cuerpo diplomático y cancillerías, organismos multilaterales (ONU, OEA, CAN), ONGs globales, departamentos de asuntos públicos corporativos y consultoría de riesgo político.",
        "skills": [
          "Negociación diplomática bilateral y multilateral",
          "Análisis de riesgo geopolítico y prospectiva",
          "Cooperación internacional para el desarrollo",
          "Derecho internacional público y tratados"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "37%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2500",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Intercambios",
            "highlight": "+300",
            "title": "convenios globales",
            "bottomText": "Redes de movilidad en Europa y América"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Negociación Diplomática en Cumbre de Cambio Climático",
          "scenario": "En una conferencia multilateral, se discute el financiamiento del fondo de pérdidas y daños entre países en desarrollo y potencias industrializadas.",
          "description": "Como delegado(a) de un bloque regional, debes liderar la estrategia de negociación:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es la postura estratégica con mayor viabilidad para asegurar financiamiento efectivo sin quebrar el consenso?",
              "options": [
                {
                  "text": "Articular una coalición con Estados insulares y economías emergentes proponiendo mecanismos transparentes de compensación vinculados a metas de conservación medibles.",
                  "next": "success"
                },
                {
                  "text": "Levantarse de la mesa de negociación en el primer debate y amenazar con romper las relaciones bilaterales comerciales.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Habilidad diplomática de alto nivel! Construir alianzas estratégicas transversales fortalece el poder de negociación de los países del sur global y logra acuerdos sostenibles.",
            "failure": "La diplomacia de ruptura prematura aísla a la delegación y deja a tu país fuera de los fondos de cooperación y asistencia climática."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos y Actores de la Cooperación Internacional",
              "Foreign Aid and International Politics",
              "Modelos y Estrategias de Sostenibilidad",
              "Fundraising Programs",
              "Estudios de Paz y Justicia Transicional",
              "Security and Conﬂict"
            ],
            [
              "Internacionalización de MYPIMES",
              "Negociación en Mercados Internacionales",
              "Riesgos Internacionales",
              "Gerencia de Negocios Internacionales 37%",
              "Epistemología de las Ciencias Sociales",
              "Procesos Sociales y Políticos del Ecuador"
            ],
            [
              "Derechos Humanos",
              "Métodos Cuantitativos para las Ciencias Sociales",
              "Ecología Integral",
              "Política Exterior",
              "Integración Regional",
              "Sociología Política Internacional"
            ],
            [
              "Jesucristo y Aprendizajes Vitales",
              "Economía de América Latina y Ecuador",
              "Estadística básica",
              "Historia de las Relaciones Internacionales I",
              "Teoría de las Relaciones Internacionales I",
              "Métodos Cualitativos de Investigación"
            ],
            [
              "Políticas Públicas",
              "Teoría de las Relaciones Internacionales II",
              "Medioambiente y Desarrolllo Sostenible",
              "Regímenes Internacionales y Gobernanza Global",
              "Seminario de Titulación",
              "Asignatura 1 de Itinerario"
            ],
            [
              "Economía Política Internacional",
              "Seguridad Internacional",
              "Geopolítica",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario"
            ],
            [
              "Diseño y Evaluación de Proyectos",
              "Política Exterior del Ecuador",
              "Conocimiento, Palabra y Cambio Social",
              "Teoría Social",
              "Pensamientos Políticos",
              "Fundamentos del Derecho"
            ],
            [
              "Introducción a las Relaciones Internacionales",
              "Fundamentos de Investigación",
              "Teoría del Estado",
              "Procesos Sociales y Políticos de América Latina",
              "Derecho Constitucional",
              "Economía y Sociedad"
            ]
          ],
          "subjectDetails": {
            "Fundamentos y Actores de la Cooperación Internacional": "Fundamentos y Actores de la Cooperación Internacional en Relaciones Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Foreign Aid and International Politics": "Foreign Aid and International Politics en Relaciones Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Modelos y Estrategias de Sostenibilidad": "Modelos y Estrategias de Sostenibilidad en Relaciones Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fundraising Programs": "Fundraising Programs en Relaciones Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Estudios de Paz y Justicia Transicional": "Estudios de Paz y Justicia Transicional en Relaciones Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Security and Conﬂict": "Security and Conﬂict en Relaciones Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Internacionalización de MYPIMES": "Internacionalización de MYPIMES en Relaciones Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Negociación en Mercados Internacionales": "Negociación en Mercados Internacionales en Relaciones Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Riesgos Internacionales": "Riesgos Internacionales en Relaciones Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Gerencia de Negocios Internacionales 37%": "Gerencia de Negocios Internacionales 37% en Relaciones Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Epistemología de las Ciencias Sociales": "Epistemología de las Ciencias Sociales en Relaciones Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Procesos Sociales y Políticos del Ecuador": "Procesos Sociales y Políticos del Ecuador en Relaciones Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Derechos Humanos": "Derechos Humanos en Relaciones Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Métodos Cuantitativos para las Ciencias Sociales": "Métodos Cuantitativos para las Ciencias Sociales en Relaciones Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ecología Integral": "Ecología Integral en Relaciones Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Política Exterior": "Política Exterior en Relaciones Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Integración Regional": "Integración Regional en Relaciones Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Sociología Política Internacional": "Sociología Política Internacional en Relaciones Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Relaciones Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Economía de América Latina y Ecuador": "Economía de América Latina y Ecuador en Relaciones Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Estadística básica": "Estadística básica en Relaciones Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Historia de las Relaciones Internacionales I": "Historia de las Relaciones Internacionales I en Relaciones Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Teoría de las Relaciones Internacionales I": "Teoría de las Relaciones Internacionales I en Relaciones Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Métodos Cualitativos de Investigación": "Métodos Cualitativos de Investigación en Relaciones Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Políticas Públicas": "Políticas Públicas en Relaciones Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Teoría de las Relaciones Internacionales II": "Teoría de las Relaciones Internacionales II en Relaciones Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Medioambiente y Desarrolllo Sostenible": "Medioambiente y Desarrolllo Sostenible en Relaciones Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Regímenes Internacionales y Gobernanza Global": "Regímenes Internacionales y Gobernanza Global en Relaciones Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Seminario de Titulación": "Seminario de Titulación en Relaciones Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 1 de Itinerario": "Asignatura 1 de Itinerario en Relaciones Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Economía Política Internacional": "Economía Política Internacional en Relaciones Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Seguridad Internacional": "Seguridad Internacional en Relaciones Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Geopolítica": "Geopolítica en Relaciones Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Relaciones Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Relaciones Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Relaciones Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Diseño y Evaluación de Proyectos": "Diseño y Evaluación de Proyectos en Relaciones Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Política Exterior del Ecuador": "Política Exterior del Ecuador en Relaciones Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Relaciones Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Teoría Social": "Teoría Social en Relaciones Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Pensamientos Políticos": "Pensamientos Políticos en Relaciones Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Fundamentos del Derecho": "Fundamentos del Derecho en Relaciones Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Introducción a las Relaciones Internacionales": "Introducción a las Relaciones Internacionales en Relaciones Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fundamentos de Investigación": "Fundamentos de Investigación en Relaciones Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Teoría del Estado": "Teoría del Estado en Relaciones Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Procesos Sociales y Políticos de América Latina": "Procesos Sociales y Políticos de América Latina en Relaciones Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Derecho Constitucional": "Derecho Constitucional en Relaciones Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Economía y Sociedad": "Economía y Sociedad en Relaciones Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Captación y manejo de recursos internacionales",
              "subjects": [
                "Especialización I (Captación y manejo d)",
                "Especialización II (Captación y manejo d)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Paz y Conflicto",
              "subjects": [
                "Especialización I (Paz y Conflicto)",
                "Especialización II (Paz y Conflicto)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Internacionalización de la Empresa",
              "subjects": [
                "Especialización I (Internacionalización)",
                "Especialización II (Internacionalización)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "comunicacion": {
        "name": "Comunicación",
        "items": [
          1,
          12,
          23,
          34,
          45,
          56
        ],
        "pdf": "comunicacion-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Aprendizaje, Lenguas y Comunicación",
        "description": "Aprenderás a crear narrativas transmedia con impacto social, periodismo de investigación, comunicación estratégica institucional, gestión de redes y producción audiovisual en la era digital.",
        "fieldOfWork": "Medios de comunicación digitales y tradicionales, agencias de comunicación y relaciones públicas, dirección de comunicación corporativa y producción de contenidos.",
        "skills": [
          "Comunicación estratégica y manejo de crisis",
          "Periodismo de datos e investigación",
          "Producción audiovisual y podcasting",
          "Narrativa transmedia y redes sociales"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "37%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2500",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Estudios",
            "highlight": "Radio/TV",
            "title": "profesionales",
            "bottomText": "Equipamiento para streaming y podcasts"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Manejo de Comunicación de Crisis en Redes Sociales",
          "scenario": "Una empresa de servicios públicos sufre una filtración falsa en redes que genera alarma ciudadana y desinformación masiva.",
          "description": "Como Director(a) de Comunicación, define la respuesta comunicacional:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Qué estrategia de vocería e información inmediata ejecutas?",
              "options": [
                {
                  "text": "Rueda de prensa y comunicado oficial con datos contrastados, apertura de un canal de fact-checking en vivo y mensaje empático del vocero institucional.",
                  "next": "success"
                },
                {
                  "text": "Bloquear los comentarios de los usuarios en redes sociales y guardar silencio durante 48 horas a la espera de que el tema se olvide.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Criterio comunicacional estratégico impecable! La transparencia, la rapidez y los datos verificables neutralizan los rumores y restablecen la confianza pública.",
            "failure": "El silencio institucional y la censura alimentan la especulación y disparan la crisis de credibilidad y reputación."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Redacción y Composición",
              "Apreciación de las Artes",
              "Cultura y Socialización",
              "Taller Integral de Saberes",
              "Cambios Históricos en el Ecuador"
            ],
            [
              "Guion Multiplataforma",
              "Audio Digital y Podcast",
              "Marca Personal y perﬁl en redes sociales",
              "Taller de Escritura Creativa",
              "Ecología Integral",
              "Cultura Digital"
            ],
            [
              "Taller de Creación de Contenido 2",
              "Fact Checking y Postverdad",
              "Jesucristo y Aprendizajes Vitales",
              "Semiótica",
              "Narratología",
              "Fundamentos de Comunicación"
            ],
            [
              "Ética e Interculturalidad",
              "Taller de Narrativas Inmersivas",
              "Fundamento de la IA",
              "Pensamiento Estratégico",
              "Taller de Creación de Contenido 1",
              "Producción Audiovisual"
            ],
            [
              "Asignatura 2 de Itinerario",
              "Análisis de Discursos",
              "Taller de Creación de Contenido 3",
              "Activismos, Agencia e Impacto Social",
              "Conocimiento, Palabra y Cambio Social",
              "Técnicas y Herramientas de Expresión Oral"
            ],
            [
              "Herramientas Digitales para las Humanidades",
              "Identidad Personal y Convivencia",
              "Globalización",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario"
            ],
            [
              "Worldbuilding",
              "Comunicación Integral de Valor",
              "Presencia y Branding Digital",
              "Marketing Inbound y de Contenidos",
              "Experiencia del Cliente",
              "E-Comerce y Social Selling"
            ],
            [
              "Gestión de Marca Personal",
              "Media Training y Estrategias Comunicativas",
              "Creación y Gestión de Contenidos Multiplataforma",
              "Exploración de Datos",
              "Visualización Avanzada de Datos",
              "Analítica de Datos"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Comunicación: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Redacción y Composición": "Redacción y Composición en Comunicación: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Apreciación de las Artes": "Apreciación de las Artes en Comunicación: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Cultura y Socialización": "Cultura y Socialización en Comunicación: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Taller Integral de Saberes": "Taller Integral de Saberes en Comunicación: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Cambios Históricos en el Ecuador": "Cambios Históricos en el Ecuador en Comunicación: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Guion Multiplataforma": "Guion Multiplataforma en Comunicación: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Audio Digital y Podcast": "Audio Digital y Podcast en Comunicación: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Marca Personal y perﬁl en redes sociales": "Marca Personal y perﬁl en redes sociales en Comunicación: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Taller de Escritura Creativa": "Taller de Escritura Creativa en Comunicación: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Comunicación: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Cultura Digital": "Cultura Digital en Comunicación: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Taller de Creación de Contenido 2": "Taller de Creación de Contenido 2 en Comunicación: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fact Checking y Postverdad": "Fact Checking y Postverdad en Comunicación: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Comunicación: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Semiótica": "Semiótica en Comunicación: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Narratología": "Narratología en Comunicación: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Fundamentos de Comunicación": "Fundamentos de Comunicación en Comunicación: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Comunicación: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Taller de Narrativas Inmersivas": "Taller de Narrativas Inmersivas en Comunicación: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamento de la IA": "Fundamento de la IA en Comunicación: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Pensamiento Estratégico": "Pensamiento Estratégico en Comunicación: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Taller de Creación de Contenido 1": "Taller de Creación de Contenido 1 en Comunicación: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Producción Audiovisual": "Producción Audiovisual en Comunicación: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Comunicación: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Análisis de Discursos": "Análisis de Discursos en Comunicación: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Taller de Creación de Contenido 3": "Taller de Creación de Contenido 3 en Comunicación: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Activismos, Agencia e Impacto Social": "Activismos, Agencia e Impacto Social en Comunicación: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Comunicación: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Técnicas y Herramientas de Expresión Oral": "Técnicas y Herramientas de Expresión Oral en Comunicación: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Herramientas Digitales para las Humanidades": "Herramientas Digitales para las Humanidades en Comunicación: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Identidad Personal y Convivencia": "Identidad Personal y Convivencia en Comunicación: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Globalización": "Globalización en Comunicación: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Comunicación: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Comunicación: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Comunicación: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Worldbuilding": "Worldbuilding en Comunicación: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Comunicación Integral de Valor": "Comunicación Integral de Valor en Comunicación: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Presencia y Branding Digital": "Presencia y Branding Digital en Comunicación: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Marketing Inbound y de Contenidos": "Marketing Inbound y de Contenidos en Comunicación: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Experiencia del Cliente": "Experiencia del Cliente en Comunicación: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "E-Comerce y Social Selling": "E-Comerce y Social Selling en Comunicación: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Gestión de Marca Personal": "Gestión de Marca Personal en Comunicación: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Media Training y Estrategias Comunicativas": "Media Training y Estrategias Comunicativas en Comunicación: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Creación y Gestión de Contenidos Multiplataforma": "Creación y Gestión de Contenidos Multiplataforma en Comunicación: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Exploración de Datos": "Exploración de Datos en Comunicación: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Visualización Avanzada de Datos": "Visualización Avanzada de Datos en Comunicación: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Analítica de Datos": "Analítica de Datos en Comunicación: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Negocios Digitales",
              "subjects": [
                "Especialización I (Negocios Digitales)",
                "Especialización II (Negocios Digitales)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Comunicación Asertiva y Gestión de Contenidos",
              "subjects": [
                "Especialización I (Comunicación Asertiv)",
                "Especialización II (Comunicación Asertiv)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Ciencia de Datos con Aplicaciones Prácticas",
              "subjects": [
                "Especialización I (Ciencia de Datos con)",
                "Especialización II (Ciencia de Datos con)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "lenguas_aplicadas": {
        "name": "Lenguas Aplicadas a los Estudios Globales",
        "items": [
          8,
          19,
          30,
          41,
          52,
          63
        ],
        "pdf": "lenguas-aplicadas-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Aprendizaje, Lenguas y Comunicación",
        "description": "Dominarás el inglés y una tercera lengua extranjera junto con destrezas en mediación intercultural, traducción especializada, comunicación global y cooperación para negocios y diplomacia.",
        "fieldOfWork": "Organizaciones internacionales, traducción técnica y diplomática, consultoría de comercio exterior, turismo de lujo y gestión de proyectos interculturales.",
        "skills": [
          "Competencia multilingüe avanzada",
          "Traducción e interpretación profesional",
          "Negociación y mediación intercultural",
          "Gestión de proyectos globales"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "37%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2500",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Idiomas",
            "highlight": "Inglés+1",
            "title": "francés o alemán",
            "bottomText": "Certificaciones internacionales integradas"
          }
        ],
        "caseStudy": {
          "type": "matching",
          "title": "Mediación Intercultural en Misiones Internacionales",
          "scenario": "Un organismo multilateral coordina una mesa de trabajo trilateral entre delegaciones de Ecuador, Francia y Canadá.",
          "description": "Relaciona cada desafío comunicacional con la solución de lenguas aplicadas:",
          "leftItems": [
            {
              "id": "terminologia",
              "label": "Glosario técnico de tratados ambientales"
            },
            {
              "id": "etiqueta",
              "label": "Protocolo y cortesía en negociaciones francófonas"
            },
            {
              "id": "localizacion",
              "label": "Adaptación cultural de campañas informativas"
            }
          ],
          "rightItems": [
            {
              "id": "terminologia",
              "label": "Garantiza equivalencia jurídica y precisión conceptual"
            },
            {
              "id": "etiqueta",
              "label": "Evita malentendidos y facilita el rapport diplomático"
            },
            {
              "id": "localizacion",
              "label": "Asegura resonancia y empatía en las comunidades locales"
            }
          ],
          "feedback": {
            "success": "¡Sensibilidad intercultural e idiomática de nivel experto! La mediación lingüística es mucho más que traducir palabras: es decodificar culturas y generar consensos.",
            "failure": "Algunas correspondencias no se ajustan al rol de la comunicación intercultural profesional; revisa los conceptos de localización y diplomacia lingüística."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Redacción y Composición",
              "Art Appreciation",
              "Culture and Socialization",
              "Taller Integral de Saberes",
              "Cambios Históricos en el Ecuador"
            ],
            [
              "Pensamiento Político",
              "English Academic Reading and Writing",
              "Translation Theory and Techniques",
              "Media, Technology, and Digital Transformation",
              "Ecología Integral",
              "Métodos de Investigación en Humanidades"
            ],
            [
              "Strategic Negotiations",
              "World Literature and Arts",
              "Jesucristo y Aprendizajes Vitales",
              "English Advanced Grammar",
              "Estudios Globales",
              "Language and Civilization"
            ],
            [
              "Ética e Interculturalidad",
              "Language, Identity and Representations",
              "Pragmatics and Discourse Analysis",
              "Políticas Globales",
              "Economía Global",
              "Traducción Legal Inversa"
            ],
            [
              "Asignatura 2 de Itinerario",
              "Nature, Culture and Politics",
              "Cross-Cultural Communication",
              "Digital Humanities",
              "Conocimiento, Palabra y Cambio Social",
              "Técnicas y Herramientas de Expresión Oral"
            ],
            [
              "Herramientas Digitales para las Humanidades",
              "Personal Identity and Coexistence",
              "Globalization",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario"
            ],
            [
              "Diseño y Evaluación de Proyectos",
              "Deontología de la Ciudadanía Global",
              "Introducción al Emprendimiento y Modelos de Negocio Innovadores",
              "Identidad y Marketing Aplicado al Eprendimiento",
              "Operaciones e Innovación Organizacional en el Proceso de Producción",
              "Finanzas para Emprendedores"
            ],
            [
              "Transcultural Communication and Languages in Contact",
              "Education Mediation",
              "Mediation in Context Workshop",
              "Neuroeducación",
              "Estrategias Didácticas Innovadoras",
              "Interaprendizaje y Diseño de Recursos Didácticos"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Lenguas Aplicadas a los Estudios Globales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Redacción y Composición": "Redacción y Composición en Lenguas Aplicadas a los Estudios Globales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Art Appreciation": "Art Appreciation en Lenguas Aplicadas a los Estudios Globales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Culture and Socialization": "Culture and Socialization en Lenguas Aplicadas a los Estudios Globales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Taller Integral de Saberes": "Taller Integral de Saberes en Lenguas Aplicadas a los Estudios Globales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Cambios Históricos en el Ecuador": "Cambios Históricos en el Ecuador en Lenguas Aplicadas a los Estudios Globales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Pensamiento Político": "Pensamiento Político en Lenguas Aplicadas a los Estudios Globales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "English Academic Reading and Writing": "English Academic Reading and Writing en Lenguas Aplicadas a los Estudios Globales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Translation Theory and Techniques": "Translation Theory and Techniques en Lenguas Aplicadas a los Estudios Globales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Media, Technology, and Digital Transformation": "Media, Technology, and Digital Transformation en Lenguas Aplicadas a los Estudios Globales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Lenguas Aplicadas a los Estudios Globales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Métodos de Investigación en Humanidades": "Métodos de Investigación en Humanidades en Lenguas Aplicadas a los Estudios Globales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Strategic Negotiations": "Strategic Negotiations en Lenguas Aplicadas a los Estudios Globales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "World Literature and Arts": "World Literature and Arts en Lenguas Aplicadas a los Estudios Globales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Lenguas Aplicadas a los Estudios Globales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "English Advanced Grammar": "English Advanced Grammar en Lenguas Aplicadas a los Estudios Globales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Estudios Globales": "Estudios Globales en Lenguas Aplicadas a los Estudios Globales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Language and Civilization": "Language and Civilization en Lenguas Aplicadas a los Estudios Globales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Lenguas Aplicadas a los Estudios Globales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Language, Identity and Representations": "Language, Identity and Representations en Lenguas Aplicadas a los Estudios Globales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Pragmatics and Discourse Analysis": "Pragmatics and Discourse Analysis en Lenguas Aplicadas a los Estudios Globales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Políticas Globales": "Políticas Globales en Lenguas Aplicadas a los Estudios Globales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Economía Global": "Economía Global en Lenguas Aplicadas a los Estudios Globales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Traducción Legal Inversa": "Traducción Legal Inversa en Lenguas Aplicadas a los Estudios Globales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Lenguas Aplicadas a los Estudios Globales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Nature, Culture and Politics": "Nature, Culture and Politics en Lenguas Aplicadas a los Estudios Globales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Cross-Cultural Communication": "Cross-Cultural Communication en Lenguas Aplicadas a los Estudios Globales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Digital Humanities": "Digital Humanities en Lenguas Aplicadas a los Estudios Globales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Lenguas Aplicadas a los Estudios Globales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Técnicas y Herramientas de Expresión Oral": "Técnicas y Herramientas de Expresión Oral en Lenguas Aplicadas a los Estudios Globales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Herramientas Digitales para las Humanidades": "Herramientas Digitales para las Humanidades en Lenguas Aplicadas a los Estudios Globales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Personal Identity and Coexistence": "Personal Identity and Coexistence en Lenguas Aplicadas a los Estudios Globales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Globalization": "Globalization en Lenguas Aplicadas a los Estudios Globales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Lenguas Aplicadas a los Estudios Globales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Lenguas Aplicadas a los Estudios Globales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Lenguas Aplicadas a los Estudios Globales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Diseño y Evaluación de Proyectos": "Diseño y Evaluación de Proyectos en Lenguas Aplicadas a los Estudios Globales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Deontología de la Ciudadanía Global": "Deontología de la Ciudadanía Global en Lenguas Aplicadas a los Estudios Globales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Introducción al Emprendimiento y Modelos de Negocio Innovadores": "Introducción al Emprendimiento y Modelos de Negocio Innovadores en Lenguas Aplicadas a los Estudios Globales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Identidad y Marketing Aplicado al Eprendimiento": "Identidad y Marketing Aplicado al Eprendimiento en Lenguas Aplicadas a los Estudios Globales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Operaciones e Innovación Organizacional en el Proceso de Producción": "Operaciones e Innovación Organizacional en el Proceso de Producción en Lenguas Aplicadas a los Estudios Globales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Finanzas para Emprendedores": "Finanzas para Emprendedores en Lenguas Aplicadas a los Estudios Globales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Transcultural Communication and Languages in Contact": "Transcultural Communication and Languages in Contact en Lenguas Aplicadas a los Estudios Globales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Education Mediation": "Education Mediation en Lenguas Aplicadas a los Estudios Globales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Mediation in Context Workshop": "Mediation in Context Workshop en Lenguas Aplicadas a los Estudios Globales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Neuroeducación": "Neuroeducación en Lenguas Aplicadas a los Estudios Globales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Estrategias Didácticas Innovadoras": "Estrategias Didácticas Innovadoras en Lenguas Aplicadas a los Estudios Globales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Interaprendizaje y Diseño de Recursos Didácticos": "Interaprendizaje y Diseño de Recursos Didácticos en Lenguas Aplicadas a los Estudios Globales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Emprendimiento en los Negocios",
              "subjects": [
                "Especialización I (Emprendimiento en lo)",
                "Especialización II (Emprendimiento en lo)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Linguistic and Intercultural Mediation",
              "subjects": [
                "Especialización I (Linguistic and Inter)",
                "Especialización II (Linguistic and Inter)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Pedagogía para el Aprendizaje Activo",
              "subjects": [
                "Especialización I (Pedagogía para el Ap)",
                "Especialización II (Pedagogía para el Ap)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "linguistica": {
        "name": "Lingüística",
        "items": [
          2,
          13,
          24,
          35,
          46,
          57
        ],
        "pdf": "linguistica-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Aprendizaje, Lenguas y Comunicación",
        "description": "Investigarás la estructura del lenguaje humano: fonética, morfología, sintaxis, sociolingüística, preservación de lenguas indígenas y procesamiento del lenguaje natural (NLP) para IA.",
        "fieldOfWork": "Centros de investigación sociolingüística, proyectos de revitalización de lenguas ancestrales, lingüística computacional y desarrollo de modelos de lenguaje, edición especializada.",
        "skills": [
          "Análisis fonológico y morfosintáctico",
          "Documentación y revitalización de lenguas",
          "Lingüística computacional y NLP",
          "Sociolingüística y pragmática"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "37%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2500",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Liderazgo",
            "highlight": "Lenguas",
            "title": "indígenas del Ecuador",
            "bottomText": "Proyectos de archivo y fonética acústica"
          }
        ],
        "caseStudy": {
          "type": "matching",
          "title": "Documentación y Análisis Fonológico de una Lengua Ancestral",
          "scenario": "Un equipo lingüístico documenta una variante amenazada del Kichwa en la Amazonía ecuatoriana.",
          "description": "Asocia cada nivel de análisis lingüístico con su aplicación de campo:",
          "leftItems": [
            {
              "id": "fonetica",
              "label": "Fonética acústica espectrográfica"
            },
            {
              "id": "morfologia",
              "label": "Análisis de sufijación aglutinante"
            },
            {
              "id": "sociolinguistica",
              "label": "Encuesta de vitalidad y actitudes lingüísticas"
            }
          ],
          "rightItems": [
            {
              "id": "fonetica",
              "label": "Identificación de alófonos y formantes vocálicos"
            },
            {
              "id": "morfologia",
              "label": "Descripción de marcas de caso y persona gramatical"
            },
            {
              "id": "sociolinguistica",
              "label": "Medición de la transmisión intergeneracional comunitaria"
            }
          ],
          "feedback": {
            "success": "¡Rigor lingüístico de alto nivel! Documentar una lengua con herramientas acústicas, gramaticales y comunitarias es el pilar para su preservación y reconocimiento.",
            "failure": "Revisa los niveles del lenguaje: la fonética mide ondas sonoras y formantes, la morfología estudia la estructura de las palabras, y la sociolingüística la sociedad hablante."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Foundations of Research",
              "Redacción y Composición",
              "Art Appreciation",
              "Culture and Socialization",
              "Taller Integral de Saberes",
              "Cambios Históricos en el Ecuador"
            ],
            [
              "English Phonology and Phonetics",
              "English Academic Reading and Writing",
              "English Morphology and Syntax",
              "Translation Theory and Techniques",
              "Ecología Integral",
              "World Literature and Arts"
            ],
            [
              "Methodology of Language Teaching: Teaching the Four Skills",
              "Audiovisual Translation",
              "Jesucristo y Aprendizajes Vitales",
              "Introduction to Linguistics",
              "Gramática Académica del Español",
              "English Advanced Grammar"
            ],
            [
              "Ética e Interculturalidad",
              "Contrastive Morphology and Syntax",
              "Contrastive Phonology and Phonetics",
              "Semantics",
              "Pragmatics and Discourse Analysis",
              "Psycholinguistics & Language Acquisition"
            ],
            [
              "Asignatura 2 de Itinerario",
              "Assessment and Evaluation in Language Pedagogy",
              "Specialized Translation",
              "Teaching English for Speciﬁc Purposes",
              "Conocimiento, Palabra y Cambio Social",
              "Técnicas y Herramientas de Expresión Oral"
            ],
            [
              "Herramientas Digitales para las Humanidades",
              "Personal Identity and Coexistence",
              "Globalization",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario"
            ],
            [
              "Interpretación",
              "Sociolingüística",
              "Introducción al Emprendimiento y Modelos de Negocio Innovadores",
              "Identidad y Marketing Aplicado al Eprendimiento",
              "Operaciones e Innovación Organizacional en el Proceso de Producción",
              "Finanzas para Emprendedores"
            ],
            [
              "Transcultural Communication and Languages in Contact",
              "Education Mediation",
              "Mediation in Context Workshop",
              "Neuroeducación",
              "Estrategias Didácticas Innovadoras",
              "Interaprendizaje y Diseño de Recursos Didácticos"
            ]
          ],
          "subjectDetails": {
            "Foundations of Research": "Foundations of Research en Lingüística: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Redacción y Composición": "Redacción y Composición en Lingüística: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Art Appreciation": "Art Appreciation en Lingüística: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Culture and Socialization": "Culture and Socialization en Lingüística: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Taller Integral de Saberes": "Taller Integral de Saberes en Lingüística: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Cambios Históricos en el Ecuador": "Cambios Históricos en el Ecuador en Lingüística: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "English Phonology and Phonetics": "English Phonology and Phonetics en Lingüística: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "English Academic Reading and Writing": "English Academic Reading and Writing en Lingüística: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "English Morphology and Syntax": "English Morphology and Syntax en Lingüística: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Translation Theory and Techniques": "Translation Theory and Techniques en Lingüística: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Lingüística: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "World Literature and Arts": "World Literature and Arts en Lingüística: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Methodology of Language Teaching: Teaching the Four Skills": "Methodology of Language Teaching: Teaching the Four Skills en Lingüística: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Audiovisual Translation": "Audiovisual Translation en Lingüística: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Lingüística: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Introduction to Linguistics": "Introduction to Linguistics en Lingüística: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Gramática Académica del Español": "Gramática Académica del Español en Lingüística: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "English Advanced Grammar": "English Advanced Grammar en Lingüística: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Lingüística: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Contrastive Morphology and Syntax": "Contrastive Morphology and Syntax en Lingüística: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Contrastive Phonology and Phonetics": "Contrastive Phonology and Phonetics en Lingüística: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Semantics": "Semantics en Lingüística: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Pragmatics and Discourse Analysis": "Pragmatics and Discourse Analysis en Lingüística: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Psycholinguistics & Language Acquisition": "Psycholinguistics & Language Acquisition en Lingüística: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Lingüística: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Assessment and Evaluation in Language Pedagogy": "Assessment and Evaluation in Language Pedagogy en Lingüística: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Specialized Translation": "Specialized Translation en Lingüística: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Teaching English for Speciﬁc Purposes": "Teaching English for Speciﬁc Purposes en Lingüística: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Lingüística: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Técnicas y Herramientas de Expresión Oral": "Técnicas y Herramientas de Expresión Oral en Lingüística: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Herramientas Digitales para las Humanidades": "Herramientas Digitales para las Humanidades en Lingüística: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Personal Identity and Coexistence": "Personal Identity and Coexistence en Lingüística: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Globalization": "Globalization en Lingüística: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Lingüística: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Lingüística: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Lingüística: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Interpretación": "Interpretación en Lingüística: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Sociolingüística": "Sociolingüística en Lingüística: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Introducción al Emprendimiento y Modelos de Negocio Innovadores": "Introducción al Emprendimiento y Modelos de Negocio Innovadores en Lingüística: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Identidad y Marketing Aplicado al Eprendimiento": "Identidad y Marketing Aplicado al Eprendimiento en Lingüística: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Operaciones e Innovación Organizacional en el Proceso de Producción": "Operaciones e Innovación Organizacional en el Proceso de Producción en Lingüística: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Finanzas para Emprendedores": "Finanzas para Emprendedores en Lingüística: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Transcultural Communication and Languages in Contact": "Transcultural Communication and Languages in Contact en Lingüística: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Education Mediation": "Education Mediation en Lingüística: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Mediation in Context Workshop": "Mediation in Context Workshop en Lingüística: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Neuroeducación": "Neuroeducación en Lingüística: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Estrategias Didácticas Innovadoras": "Estrategias Didácticas Innovadoras en Lingüística: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Interaprendizaje y Diseño de Recursos Didácticos": "Interaprendizaje y Diseño de Recursos Didácticos en Lingüística: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Emprendimiento en los Negocios",
              "subjects": [
                "Especialización I (Emprendimiento en lo)",
                "Especialización II (Emprendimiento en lo)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Linguistic and Intercultural Mediation",
              "subjects": [
                "Especialización I (Linguistic and Inter)",
                "Especialización II (Linguistic and Inter)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Pedagogía para el Aprendizaje Activo",
              "subjects": [
                "Especialización I (Pedagogía para el Ap)",
                "Especialización II (Pedagogía para el Ap)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "literatura": {
        "name": "Literatura",
        "items": [
          7,
          18,
          29,
          40,
          51,
          62
        ],
        "pdf": "literatura-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Aprendizaje, Lenguas y Comunicación",
        "description": "Te formarás en la teoría literaria, la crítica cultural, la creación narrativa y poética, la edición editorial y el análisis de textos clásicos y contemporáneos que enriquecen el pensamiento humano.",
        "fieldOfWork": "Industria editorial y curaduría de contenidos, creación y escritura literaria, docencia e investigación de humanidades, periodismo cultural y crítica de arte.",
        "skills": [
          "Escritura creativa y narrativa",
          "Edición y corrección de estilo editorial",
          "Crítica literaria y análisis textual",
          "Gestión cultural y fomento de la lectura"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "37%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2500",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Premio",
            "highlight": "Aurelio",
            "title": "Espinosa Pólit",
            "bottomText": "Tradición en letras y ensayo ecuatoriano"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Curaduría y Edición de una Antología Contemporánea",
          "scenario": "Estás a cargo de la edición de una colección de cuentos ecuatorianos jóvenes que dialogan con el realismo mágico y la ficción urbana.",
          "description": "Define el criterio editorial para estructurar el libro:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Qué decisión de curaduría le otorga mayor coherencia estética y crítica a la obra?",
              "options": [
                {
                  "text": "Estructurar las secciones por ejes temáticos (memoria, ciudad, identidades) incluyendo un estudio introductorio crítico y un cuidado minucioso de la voz de cada autor.",
                  "next": "success"
                },
                {
                  "text": "Alterar los textos sin autorización de los autores para que todos los cuentos tengan el mismo final idéntico.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Criterio editorial refinado! El trabajo editorial respeta la voz propia del escritor y sitúa la obra en un diálogo crítico y enriquecedor con la sociedad.",
            "failure": "La labor del editor no es homogeneizar ni mutilar la originalidad estética del autor, sino potenciar su fuerza expresiva respetando su poética."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Redacción y Composición",
              "Apreciación de las Artes",
              "Cultura y Socialización",
              "Taller Integral de Saberes",
              "Cambios Históricos en el Ecuador"
            ],
            [
              "Cultura Digital",
              "Semiótica",
              "Literatura Ecuatoriana Colonial y Republicana",
              "Poesía Latinoamericana",
              "Ecología Integral",
              "Voces e Imágenes de la Alteridad"
            ],
            [
              "Seminario de Autor Latinoamericano",
              "Didáctica de la Lengua y Literatura",
              "Jesucristo y Aprendizajes Vitales",
              "Análisis y Producción de Textos",
              "Lingüística para la Literatura",
              "Narrativa Latinoamericana"
            ],
            [
              "Ética e Interculturalidad",
              "Lenguajes y Narrativas Audiovisuales",
              "Ensayo Latinoamericano",
              "Teorías Literarias",
              "Cervantes y el Siglo de Oro",
              "Mitología y Literatura Clásica Latina"
            ],
            [
              "Asignatura 2 de Itinerario",
              "Crítica Literaria Contemporánea",
              "Seminario de Autor Extranjero",
              "Edición y Corrección de Textos",
              "Conocimiento, Palabra y Cambio Social",
              "Técnicas y Herramientas de Expresión Oral"
            ],
            [
              "Herramientas Digitales para las Humanidades",
              "Identidad Personal y Convivencia",
              "Globalización",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario"
            ],
            [
              "Taller de Guion Literario",
              "Dramaturgia del Teatro a los Nuevos Medios",
              "Comunicación y Persuasión",
              "Gestión de Marca Personal",
              "Media Training y Estrategias Comunicativas",
              "Creación y Gestión de Contenidos Multiplataforma"
            ],
            [
              "Estrategias Didácticas Innovadoras",
              "Interaprendizaje y Diseño de Recursos Didácticos",
              "Evaluación de los Aprendizajes",
              "Retórica de las Artes y las Ciencias",
              "Laboratorio de Experimentación Creativa",
              "Diseño de Proyectos Creativos"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Literatura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Redacción y Composición": "Redacción y Composición en Literatura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Apreciación de las Artes": "Apreciación de las Artes en Literatura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Cultura y Socialización": "Cultura y Socialización en Literatura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Taller Integral de Saberes": "Taller Integral de Saberes en Literatura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Cambios Históricos en el Ecuador": "Cambios Históricos en el Ecuador en Literatura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Cultura Digital": "Cultura Digital en Literatura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Semiótica": "Semiótica en Literatura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Literatura Ecuatoriana Colonial y Republicana": "Literatura Ecuatoriana Colonial y Republicana en Literatura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Poesía Latinoamericana": "Poesía Latinoamericana en Literatura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Literatura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Voces e Imágenes de la Alteridad": "Voces e Imágenes de la Alteridad en Literatura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Seminario de Autor Latinoamericano": "Seminario de Autor Latinoamericano en Literatura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Didáctica de la Lengua y Literatura": "Didáctica de la Lengua y Literatura en Literatura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Literatura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Análisis y Producción de Textos": "Análisis y Producción de Textos en Literatura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Lingüística para la Literatura": "Lingüística para la Literatura en Literatura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Narrativa Latinoamericana": "Narrativa Latinoamericana en Literatura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Literatura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Lenguajes y Narrativas Audiovisuales": "Lenguajes y Narrativas Audiovisuales en Literatura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ensayo Latinoamericano": "Ensayo Latinoamericano en Literatura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Teorías Literarias": "Teorías Literarias en Literatura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Cervantes y el Siglo de Oro": "Cervantes y el Siglo de Oro en Literatura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Mitología y Literatura Clásica Latina": "Mitología y Literatura Clásica Latina en Literatura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Literatura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Crítica Literaria Contemporánea": "Crítica Literaria Contemporánea en Literatura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Seminario de Autor Extranjero": "Seminario de Autor Extranjero en Literatura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Edición y Corrección de Textos": "Edición y Corrección de Textos en Literatura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Literatura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Técnicas y Herramientas de Expresión Oral": "Técnicas y Herramientas de Expresión Oral en Literatura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Herramientas Digitales para las Humanidades": "Herramientas Digitales para las Humanidades en Literatura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Identidad Personal y Convivencia": "Identidad Personal y Convivencia en Literatura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Globalización": "Globalización en Literatura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Literatura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Literatura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Literatura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Taller de Guion Literario": "Taller de Guion Literario en Literatura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Dramaturgia del Teatro a los Nuevos Medios": "Dramaturgia del Teatro a los Nuevos Medios en Literatura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Comunicación y Persuasión": "Comunicación y Persuasión en Literatura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Gestión de Marca Personal": "Gestión de Marca Personal en Literatura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Media Training y Estrategias Comunicativas": "Media Training y Estrategias Comunicativas en Literatura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Creación y Gestión de Contenidos Multiplataforma": "Creación y Gestión de Contenidos Multiplataforma en Literatura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Estrategias Didácticas Innovadoras": "Estrategias Didácticas Innovadoras en Literatura: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Interaprendizaje y Diseño de Recursos Didácticos": "Interaprendizaje y Diseño de Recursos Didácticos en Literatura: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Evaluación de los Aprendizajes": "Evaluación de los Aprendizajes en Literatura: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Retórica de las Artes y las Ciencias": "Retórica de las Artes y las Ciencias en Literatura: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Laboratorio de Experimentación Creativa": "Laboratorio de Experimentación Creativa en Literatura: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Diseño de Proyectos Creativos": "Diseño de Proyectos Creativos en Literatura: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Comunicación Asertiva y Gestión de Contenidos",
              "subjects": [
                "Especialización I (Comunicación Asertiv)",
                "Especialización II (Comunicación Asertiv)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Pedagogía para el Aprendizaje Activo",
              "subjects": [
                "Especialización I (Pedagogía para el Ap)",
                "Especialización II (Pedagogía para el Ap)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Estrategias Creativas para las Artes y Ciencias",
              "subjects": [
                "Especialización I (Estrategias Creativa)",
                "Especialización II (Estrategias Creativa)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "educacion_inicial": {
        "name": "Educación Inicial (Presencial)",
        "items": [
          3,
          14,
          25,
          36,
          47,
          58
        ],
        "pdf": "educacion-inicial-presencial-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Aprendizaje, Lenguas y Comunicación",
        "description": "Diseñarás ambientes de aprendizaje lúdicos e innovadores para el desarrollo integral de la primera infancia (0 a 5 años): neurodesarrollo, psicomotricidad, expresión artística y vínculo familiar afectivo.",
        "fieldOfWork": "Centros de educación inicial y maternales, diseño curricular infantil, dirección de jardines de infantes, asesoría psicopedagógica y proyectos de estimulación temprana.",
        "skills": [
          "Pedagogía lúdica y metodologías activas",
          "Neurodesarrollo infantil temprano",
          "Estimulación sensorial y psicomotriz",
          "Inclusión educativa y vínculo familiar"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "37%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2500",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Prácticas",
            "highlight": "Aulas",
            "title": "laboratorio infantil",
            "bottomText": "Ambientes Montessori y Reggio Emilia"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Diseño de Ambiente Lúdico para Estimulación Sensorial",
          "scenario": "En un aula de niños de 3 años, se observa dispersión y dificultad en la coordinación motriz fina al manipular objetos cotidianos.",
          "description": "Como docente de educación inicial, planteas la experiencia pedagógica:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Qué actividad lúdica estructurada promueve de mejor manera la pinza digital y la autorregulación?",
              "options": [
                {
                  "text": "Rincón de exploración con bandejas sensoriales de semillas, pinzas de madera, modelado con masa casera y clasificación por texturas con canciones de transición.",
                  "next": "success"
                },
                {
                  "text": "Obligar a los niños a sentarse quietos frente a una hoja en blanco durante una hora realizando planas de líneas rectas.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Pedagogía respetuosa y estimulante! Las bandejas sensoriales favorecen la integración sensorial, la tonicidad muscular y el aprendizaje autónomo a través del juego libre guiado.",
            "failure": "Las planas mecánicas a los 3 años generan frustración y fatiga motriz; en la primera infancia el movimiento y el juego son el vehículo natural de aprendizaje."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Redacción y Composición",
              "Apreciación de las Artes",
              "Cultura y Socialización",
              "Taller Integral de Saberes",
              "Cambios Históricos en el Ecuador"
            ],
            [
              "Didáctica Integrada I",
              "Salud Integral del Niño de 0 a 6 Años",
              "Didáctica de la Literatura Infantil",
              "Educación para todos y Atención a la Diversidad",
              "Ecología Integral",
              "Estadística Básica"
            ],
            [
              "Habilidades para la Vida en la Educación",
              "Tecnologías del Empoderamiento y la Participación Educativa",
              "Jesucristo y Aprendizajes Vitales",
              "Neurodidáctica",
              "Teoría y Diseño Curricular",
              "Psicología del Desarrollo y del Aprendizaje"
            ],
            [
              "Ética e Interculturalidad",
              "Expresión Corporal",
              "Didáctica Integrada II",
              "Primeros Auxilios",
              "Estrategias de Estimulación para el Desarrollo",
              "Diseño Universal para el Aprendizaje"
            ],
            [
              "Asignatura 2 de Itinerario",
              "Diseño y Organización de Escenarios Educativos",
              "Educación Holista",
              "Orientación Familiar",
              "Conocimiento, Palabra y Cambio Social",
              "Técnicas y Herramientas de Expresión Oral"
            ],
            [
              "Herramientas Digitales para las Humanidades",
              "Identidad Personal y Convivencia",
              "Globalización",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario"
            ],
            [
              "Sexualidad Infantil",
              "Gestión Escolar y Comunidades de Aprendizaje",
              "Comunicación y Persuación",
              "Gestión de Marca Personal",
              "Media Training y Estrategias Comunicativas",
              "Creación y Gestión de Contenidos Multiplataforma"
            ],
            [
              "Música para el Desarrollo Integral",
              "Recursos de las Artes Visuales para la Inclusión",
              "Escritura creativa",
              "Psicología del Desarrollo de la Niñez",
              "Psicología del Desarrollo de la Adolescencia, Adultez y Tercera Edad",
              "Sexualidad y Cultura"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Educación Inicial (Presencial): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Redacción y Composición": "Redacción y Composición en Educación Inicial (Presencial): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Apreciación de las Artes": "Apreciación de las Artes en Educación Inicial (Presencial): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Cultura y Socialización": "Cultura y Socialización en Educación Inicial (Presencial): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Taller Integral de Saberes": "Taller Integral de Saberes en Educación Inicial (Presencial): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Cambios Históricos en el Ecuador": "Cambios Históricos en el Ecuador en Educación Inicial (Presencial): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Didáctica Integrada I": "Didáctica Integrada I en Educación Inicial (Presencial): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Salud Integral del Niño de 0 a 6 Años": "Salud Integral del Niño de 0 a 6 Años en Educación Inicial (Presencial): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Didáctica de la Literatura Infantil": "Didáctica de la Literatura Infantil en Educación Inicial (Presencial): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Educación para todos y Atención a la Diversidad": "Educación para todos y Atención a la Diversidad en Educación Inicial (Presencial): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Educación Inicial (Presencial): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Estadística Básica": "Estadística Básica en Educación Inicial (Presencial): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Habilidades para la Vida en la Educación": "Habilidades para la Vida en la Educación en Educación Inicial (Presencial): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Tecnologías del Empoderamiento y la Participación Educativa": "Tecnologías del Empoderamiento y la Participación Educativa en Educación Inicial (Presencial): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Educación Inicial (Presencial): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Neurodidáctica": "Neurodidáctica en Educación Inicial (Presencial): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Teoría y Diseño Curricular": "Teoría y Diseño Curricular en Educación Inicial (Presencial): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Psicología del Desarrollo y del Aprendizaje": "Psicología del Desarrollo y del Aprendizaje en Educación Inicial (Presencial): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Educación Inicial (Presencial): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Expresión Corporal": "Expresión Corporal en Educación Inicial (Presencial): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Didáctica Integrada II": "Didáctica Integrada II en Educación Inicial (Presencial): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Primeros Auxilios": "Primeros Auxilios en Educación Inicial (Presencial): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Estrategias de Estimulación para el Desarrollo": "Estrategias de Estimulación para el Desarrollo en Educación Inicial (Presencial): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Diseño Universal para el Aprendizaje": "Diseño Universal para el Aprendizaje en Educación Inicial (Presencial): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Educación Inicial (Presencial): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Diseño y Organización de Escenarios Educativos": "Diseño y Organización de Escenarios Educativos en Educación Inicial (Presencial): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Educación Holista": "Educación Holista en Educación Inicial (Presencial): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Orientación Familiar": "Orientación Familiar en Educación Inicial (Presencial): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Educación Inicial (Presencial): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Técnicas y Herramientas de Expresión Oral": "Técnicas y Herramientas de Expresión Oral en Educación Inicial (Presencial): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Herramientas Digitales para las Humanidades": "Herramientas Digitales para las Humanidades en Educación Inicial (Presencial): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Identidad Personal y Convivencia": "Identidad Personal y Convivencia en Educación Inicial (Presencial): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Globalización": "Globalización en Educación Inicial (Presencial): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Educación Inicial (Presencial): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Educación Inicial (Presencial): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Educación Inicial (Presencial): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Sexualidad Infantil": "Sexualidad Infantil en Educación Inicial (Presencial): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Gestión Escolar y Comunidades de Aprendizaje": "Gestión Escolar y Comunidades de Aprendizaje en Educación Inicial (Presencial): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Comunicación y Persuación": "Comunicación y Persuación en Educación Inicial (Presencial): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Gestión de Marca Personal": "Gestión de Marca Personal en Educación Inicial (Presencial): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Media Training y Estrategias Comunicativas": "Media Training y Estrategias Comunicativas en Educación Inicial (Presencial): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Creación y Gestión de Contenidos Multiplataforma": "Creación y Gestión de Contenidos Multiplataforma en Educación Inicial (Presencial): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Música para el Desarrollo Integral": "Música para el Desarrollo Integral en Educación Inicial (Presencial): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Recursos de las Artes Visuales para la Inclusión": "Recursos de las Artes Visuales para la Inclusión en Educación Inicial (Presencial): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Escritura creativa": "Escritura creativa en Educación Inicial (Presencial): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Psicología del Desarrollo de la Niñez": "Psicología del Desarrollo de la Niñez en Educación Inicial (Presencial): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Psicología del Desarrollo de la Adolescencia, Adultez y Tercera Edad": "Psicología del Desarrollo de la Adolescencia, Adultez y Tercera Edad en Educación Inicial (Presencial): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Sexualidad y Cultura": "Sexualidad y Cultura en Educación Inicial (Presencial): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Comunicación Asertiva y Gestión de Contenidos",
              "subjects": [
                "Especialización I (Comunicación Asertiv)",
                "Especialización II (Comunicación Asertiv)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Artes para el Desarrollo Humano",
              "subjects": [
                "Especialización I (Artes para el Desarr)",
                "Especialización II (Artes para el Desarr)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Diversidad, Inclusión y Ciclo Vital",
              "subjects": [
                "Especialización I (Diversidad, Inclusió)",
                "Especialización II (Diversidad, Inclusió)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "psicologia_educativa": {
        "name": "Psicología Educativa",
        "items": [
          9,
          20,
          31,
          42,
          53,
          64
        ],
        "pdf": "psicologia-educativa-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Aprendizaje, Lenguas y Comunicación",
        "description": "Diagnosticarás e intervendrás en los procesos de aprendizaje y desarrollo socioemocional de estudiantes, diseñando adaptaciones curriculares, orientación vocacional y convivencia escolar pacífica.",
        "fieldOfWork": "Departamentos de Consejería Estudiantil (DECE) en colegios y escuelas, gabinetes psicopedagógicos privados, asesoría en inclusión escolar y orientación vocacional.",
        "skills": [
          "Evaluación psicopedagógica y del aprendizaje",
          "Diseño de adaptaciones curriculares (DIAC)",
          "Orientación vocacional y profesional",
          "Mediación en convivencia y bullying escolar"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Alta",
            "highlight": "Demanda",
            "title": "en colegios DECE",
            "bottomText": "Inserción profesional en planteles educativos"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Intervención en Dificultades Específicas de Aprendizaje (Dislexia)",
          "scenario": "Un estudiante de 4to de básica con alta inteligencia presenta marcada dificultad en la lectura fluida, omisión de grafemas y baja autoestima académica.",
          "description": "Aplica la estrategia psicopedagógica orientadora:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es el plan de apoyo integral dentro del aula y la familia?",
              "options": [
                {
                  "text": "Evaluación neuropsicológica, adaptación curricular no significativa (tiempo extra, apoyo multisensorial fonológico) y refuerzo del autoconcepto en tutoría con los padres.",
                  "next": "success"
                },
                {
                  "text": "Hacer que el niño lea en voz alta frente a todo el curso para presionarlo a leer más rápido.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Intervención psicopedagógica asertiva e inclusiva! El abordaje multisensorial fonológico y el soporte emocional permiten al estudiante superar barreras sin menoscabar su autoestima.",
            "failure": "La exposición pública y la presión aumentan la ansiedad del niño bloqueando sus funciones ejecutivas y generando fobia escolar."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de la investigación",
              "Historia de la Psicología",
              "Neuroanatomía y Psicoﬁsiología",
              "Conducción de Grupos",
              "Epistemología de la Psicología",
              "Salud y Grupos prioritarios (Diversidad)"
            ],
            [
              "Enfoques Psicológicos Contemporá- neos",
              "Psicología del Desarrollo de la",
              "Psicometría",
              "Técnicas de entrevista",
              "Evaluación Psicológica",
              "Ecología Integral"
            ],
            [
              "Consejería y Asesoría Familiar",
              "Gestión Administrativa e Institucional",
              "Inclusión y Necesidades Especíﬁcas",
              "Trastorno del Desarrollo Neurológico l",
              "Jesucristo y Aprendizaje Vital",
              "Enfoques Psicológicos"
            ],
            [
              "Psicología del Desarrollo de la Niñez",
              "Psicología Social",
              "Estadística aplicada a la Psicología",
              "Ética e Interculturalidad",
              "Psicología Comunitaria",
              "Psicopatología lI"
            ],
            [
              "Neuroaprendizaje",
              "Evaluación Psicológica Especializada",
              "Trastorno del Desarrollo Neurológico ll",
              "Sexualidad, Género y Cultura",
              "Informática Aplicada en Psicología",
              "Intervención Psicosocial y Derechos Humanos"
            ],
            [
              "Prácticas Pre-profesionales l",
              "Conocimiento, Palabra y Cambio Social",
              "Salud: Contexto Nacional e Internacional",
              "Comportamiento Humano y Procesos Psicológicos",
              "Primero Auxilios y Bioseguridad Básica",
              "Fundamentos de Morfofunción"
            ],
            [
              "Seminario de Titulación",
              "Primeros Auxilios Psicológicos",
              "Gestión e Innovación Educativa",
              "Intervención Educativa Institucional",
              "Deontología y Ética profesional",
              "Prácticas Pre-profesionales ll"
            ],
            [
              "Integración Curricular",
              "Metodología Cualitativa en Psicología",
              "Metodología Cuantitativa en Psicología",
              "Estrategias Educativas y Tecnológicas",
              "Psicología Educativa Hospitalaria",
              "Soft Skills For Psychology 27%"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de la investigación": "Fundamentos de la investigación en Psicología Educativa: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Historia de la Psicología": "Historia de la Psicología en Psicología Educativa: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Neuroanatomía y Psicoﬁsiología": "Neuroanatomía y Psicoﬁsiología en Psicología Educativa: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Conducción de Grupos": "Conducción de Grupos en Psicología Educativa: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Epistemología de la Psicología": "Epistemología de la Psicología en Psicología Educativa: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Salud y Grupos prioritarios (Diversidad)": "Salud y Grupos prioritarios (Diversidad) en Psicología Educativa: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Enfoques Psicológicos Contemporá- neos": "Enfoques Psicológicos Contemporá- neos en Psicología Educativa: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Psicología del Desarrollo de la": "Psicología del Desarrollo de la en Psicología Educativa: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Psicometría": "Psicometría en Psicología Educativa: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Técnicas de entrevista": "Técnicas de entrevista en Psicología Educativa: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Evaluación Psicológica": "Evaluación Psicológica en Psicología Educativa: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ecología Integral": "Ecología Integral en Psicología Educativa: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Consejería y Asesoría Familiar": "Consejería y Asesoría Familiar en Psicología Educativa: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Gestión Administrativa e Institucional": "Gestión Administrativa e Institucional en Psicología Educativa: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Inclusión y Necesidades Especíﬁcas": "Inclusión y Necesidades Especíﬁcas en Psicología Educativa: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Trastorno del Desarrollo Neurológico l": "Trastorno del Desarrollo Neurológico l en Psicología Educativa: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Jesucristo y Aprendizaje Vital": "Jesucristo y Aprendizaje Vital en Psicología Educativa: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Enfoques Psicológicos": "Enfoques Psicológicos en Psicología Educativa: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Psicología del Desarrollo de la Niñez": "Psicología del Desarrollo de la Niñez en Psicología Educativa: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Psicología Social": "Psicología Social en Psicología Educativa: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Estadística aplicada a la Psicología": "Estadística aplicada a la Psicología en Psicología Educativa: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Psicología Educativa: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Psicología Comunitaria": "Psicología Comunitaria en Psicología Educativa: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Psicopatología lI": "Psicopatología lI en Psicología Educativa: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Neuroaprendizaje": "Neuroaprendizaje en Psicología Educativa: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Evaluación Psicológica Especializada": "Evaluación Psicológica Especializada en Psicología Educativa: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Trastorno del Desarrollo Neurológico ll": "Trastorno del Desarrollo Neurológico ll en Psicología Educativa: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Sexualidad, Género y Cultura": "Sexualidad, Género y Cultura en Psicología Educativa: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Informática Aplicada en Psicología": "Informática Aplicada en Psicología en Psicología Educativa: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Intervención Psicosocial y Derechos Humanos": "Intervención Psicosocial y Derechos Humanos en Psicología Educativa: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Prácticas Pre-profesionales l": "Prácticas Pre-profesionales l en Psicología Educativa: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Psicología Educativa: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Salud: Contexto Nacional e Internacional": "Salud: Contexto Nacional e Internacional en Psicología Educativa: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Comportamiento Humano y Procesos Psicológicos": "Comportamiento Humano y Procesos Psicológicos en Psicología Educativa: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Primero Auxilios y Bioseguridad Básica": "Primero Auxilios y Bioseguridad Básica en Psicología Educativa: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Fundamentos de Morfofunción": "Fundamentos de Morfofunción en Psicología Educativa: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Seminario de Titulación": "Seminario de Titulación en Psicología Educativa: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Primeros Auxilios Psicológicos": "Primeros Auxilios Psicológicos en Psicología Educativa: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Gestión e Innovación Educativa": "Gestión e Innovación Educativa en Psicología Educativa: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Intervención Educativa Institucional": "Intervención Educativa Institucional en Psicología Educativa: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Deontología y Ética profesional": "Deontología y Ética profesional en Psicología Educativa: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Prácticas Pre-profesionales ll": "Prácticas Pre-profesionales ll en Psicología Educativa: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Integración Curricular": "Integración Curricular en Psicología Educativa: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Metodología Cualitativa en Psicología": "Metodología Cualitativa en Psicología en Psicología Educativa: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Metodología Cuantitativa en Psicología": "Metodología Cuantitativa en Psicología en Psicología Educativa: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Estrategias Educativas y Tecnológicas": "Estrategias Educativas y Tecnológicas en Psicología Educativa: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Psicología Educativa Hospitalaria": "Psicología Educativa Hospitalaria en Psicología Educativa: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Soft Skills For Psychology 27%": "Soft Skills For Psychology 27% en Psicología Educativa: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario I: Innovación y Emprendimiento",
              "subjects": [
                "Modelos de Negocio",
                "Innovación Aplicada",
                "Proyectos de Impacto"
              ]
            },
            {
              "name": "Itinerario II: Investigación Aplicada",
              "subjects": [
                "Metodologías Avanzadas",
                "Seminario de Investigación",
                "Publicación Científica"
              ]
            }
          ]
        }
      },
      "artes_visuales": {
        "name": "Artes Visuales",
        "items": [
          6,
          17,
          28,
          39,
          50,
          61
        ],
        "pdf": "artes-visuales-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultades de Humanidades / Hábitat y Artes",
        "description": "Explorarás la creación artística contemporánea a través de la pintura, escultura, instalación, videoarte, fotografía y performance, desarrollando una voz estética propia y crítica con el contexto social.",
        "fieldOfWork": "Artista visual independiente, curaduría de museos y galerías de arte, gestión cultural, educación artística, dirección de arte e industrias creativas.",
        "skills": [
          "Técnicas plásticas y bidimensionales/tridimensionales",
          "Curaduría y montaje de exposiciones",
          "Teoría y crítica del arte contemporáneo",
          "Gestión de proyectos culturales"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Talleres",
            "highlight": "Propios",
            "title": "escultura y grabado",
            "bottomText": "Galería de exposiciones en el campus"
          }
        ],
        "caseStudy": {
          "type": "matching",
          "title": "Curaduría y Montaje de Exposición de Arte Contemporáneo",
          "scenario": "Se prepara una exposición colectiva sobre la memoria histórica y la naturaleza urbana en el Centro Cultural PUCE.",
          "description": "Relaciona cada disciplina artística con su dispositivo museográfico:",
          "leftItems": [
            {
              "id": "instalacion",
              "label": "Instalación escultórica inmersiva"
            },
            {
              "id": "videoarte",
              "label": "Videoinstalación monocanal"
            },
            {
              "id": "grabado",
              "label": "Xilografía sobre papel de fibra natural"
            }
          ],
          "rightItems": [
            {
              "id": "instalacion",
              "label": "Recorrido espacial con iluminación cenital y sonido ambiente"
            },
            {
              "id": "videoarte",
              "label": "Caja negra con aislamiento acústico y proyección HD continua"
            },
            {
              "id": "grabado",
              "label": "Montaje en vitrina protegida con luz UV controlada"
            }
          ],
          "feedback": {
            "success": "¡Criterio museográfico y sensibilidad estética experta! El montaje potencia la experiencia del espectador y preserva la integridad física de las obras de arte.",
            "failure": "Cada medio artístico requiere condiciones lumínicas y espaciales distintas; por ejemplo, el videoarte exige control de penumbra y el grabado protección contra radiación UV."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Laboratorio 2: Experimentación y Cocreación",
              "Lenguajes Visuales Aplicados",
              "Materia y Recursos: Enfoque Sostenible",
              "Historia y Pensamiento de las Prácticas Creativas Latinoamericanas",
              "Fotografía Creativa"
            ],
            [
              "Modelado y animación 3D",
              "Producción audiovisual",
              "Pensamiento crítico visual",
              "Ecología Integral",
              "Laboratorio: Proyecto y Procesos Artísticos",
              "Medios Digitales y programación"
            ],
            [
              "Procesos y Materiales en la Escultura",
              "Teoría del Arte",
              "Jesucristo y Aprendizajes Vitales",
              "Laboratorio de Construcción de Imagen",
              "Expresión Plástica",
              "Animación 2D"
            ],
            [
              "Culturas visuales",
              "Ética e Interculturalidad",
              "Laboratorio: Estrategias Artísticas Contemporáneas",
              "Modelado escultórico",
              "Procesos y Materiales en la Pintura",
              "Procesos y Materiales en el Grabado"
            ],
            [
              "Seminario de Titulación",
              "Asignatura 1 de Itinerario",
              "Asignatura 2 de Itinerario",
              "Arte y Educación",
              "Escritura y Procesos Creativos",
              "Crítica y Curaduría"
            ],
            [
              "Laboratorio 1: Exploración y Retos",
              "Introducción a los Lenguajes Visuales",
              "Ciencia de los Materiales: Propiedades, Procesos y Ciclos",
              "Historia y Pensamiento de las Prácticas Creativas Globales",
              "Integración Curricular",
              "Asignatura 3 de Itinerario"
            ],
            [
              "Práctica Artística: Memoria Visual y Escrita",
              "Arte, trabajo y derechos",
              "Neuroeducación",
              "Estrategias Didácticas Innovadoras",
              "Interaprendizaje y Diseño de Recursos Didácticos",
              "Evaluación de los Aprendizajes"
            ],
            [
              "Laboratorio de Experimentación Creativa",
              "Diseño de Proyectos Creativos",
              "Laboratorio de Mundos Futuros en las Artes y Ciencias",
              "Pensamiento y Crítica del Mundo Digital",
              "Métodos de Computación Creativa",
              "Laboratorio de Creación Digital"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Artes Visuales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Laboratorio 2: Experimentación y Cocreación": "Laboratorio 2: Experimentación y Cocreación en Artes Visuales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Lenguajes Visuales Aplicados": "Lenguajes Visuales Aplicados en Artes Visuales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Materia y Recursos: Enfoque Sostenible": "Materia y Recursos: Enfoque Sostenible en Artes Visuales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Historia y Pensamiento de las Prácticas Creativas Latinoamericanas": "Historia y Pensamiento de las Prácticas Creativas Latinoamericanas en Artes Visuales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Fotografía Creativa": "Fotografía Creativa en Artes Visuales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Modelado y animación 3D": "Modelado y animación 3D en Artes Visuales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Producción audiovisual": "Producción audiovisual en Artes Visuales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Pensamiento crítico visual": "Pensamiento crítico visual en Artes Visuales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Ecología Integral": "Ecología Integral en Artes Visuales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Laboratorio: Proyecto y Procesos Artísticos": "Laboratorio: Proyecto y Procesos Artísticos en Artes Visuales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Medios Digitales y programación": "Medios Digitales y programación en Artes Visuales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Procesos y Materiales en la Escultura": "Procesos y Materiales en la Escultura en Artes Visuales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Teoría del Arte": "Teoría del Arte en Artes Visuales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Artes Visuales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Laboratorio de Construcción de Imagen": "Laboratorio de Construcción de Imagen en Artes Visuales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Expresión Plástica": "Expresión Plástica en Artes Visuales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Animación 2D": "Animación 2D en Artes Visuales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Culturas visuales": "Culturas visuales en Artes Visuales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Artes Visuales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Laboratorio: Estrategias Artísticas Contemporáneas": "Laboratorio: Estrategias Artísticas Contemporáneas en Artes Visuales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Modelado escultórico": "Modelado escultórico en Artes Visuales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Procesos y Materiales en la Pintura": "Procesos y Materiales en la Pintura en Artes Visuales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Procesos y Materiales en el Grabado": "Procesos y Materiales en el Grabado en Artes Visuales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Seminario de Titulación": "Seminario de Titulación en Artes Visuales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Asignatura 1 de Itinerario": "Asignatura 1 de Itinerario en Artes Visuales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Artes Visuales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Arte y Educación": "Arte y Educación en Artes Visuales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Escritura y Procesos Creativos": "Escritura y Procesos Creativos en Artes Visuales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Crítica y Curaduría": "Crítica y Curaduría en Artes Visuales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Laboratorio 1: Exploración y Retos": "Laboratorio 1: Exploración y Retos en Artes Visuales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Introducción a los Lenguajes Visuales": "Introducción a los Lenguajes Visuales en Artes Visuales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ciencia de los Materiales: Propiedades, Procesos y Ciclos": "Ciencia de los Materiales: Propiedades, Procesos y Ciclos en Artes Visuales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Historia y Pensamiento de las Prácticas Creativas Globales": "Historia y Pensamiento de las Prácticas Creativas Globales en Artes Visuales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Integración Curricular": "Integración Curricular en Artes Visuales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Artes Visuales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Práctica Artística: Memoria Visual y Escrita": "Práctica Artística: Memoria Visual y Escrita en Artes Visuales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Arte, trabajo y derechos": "Arte, trabajo y derechos en Artes Visuales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Neuroeducación": "Neuroeducación en Artes Visuales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Estrategias Didácticas Innovadoras": "Estrategias Didácticas Innovadoras en Artes Visuales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Interaprendizaje y Diseño de Recursos Didácticos": "Interaprendizaje y Diseño de Recursos Didácticos en Artes Visuales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Evaluación de los Aprendizajes": "Evaluación de los Aprendizajes en Artes Visuales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Laboratorio de Experimentación Creativa": "Laboratorio de Experimentación Creativa en Artes Visuales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Diseño de Proyectos Creativos": "Diseño de Proyectos Creativos en Artes Visuales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Laboratorio de Mundos Futuros en las Artes y Ciencias": "Laboratorio de Mundos Futuros en las Artes y Ciencias en Artes Visuales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Pensamiento y Crítica del Mundo Digital": "Pensamiento y Crítica del Mundo Digital en Artes Visuales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Métodos de Computación Creativa": "Métodos de Computación Creativa en Artes Visuales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Laboratorio de Creación Digital": "Laboratorio de Creación Digital en Artes Visuales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Pedagogía para el Aprendizaje Activo",
              "subjects": [
                "Especialización I (Pedagogía para el Ap)",
                "Especialización II (Pedagogía para el Ap)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Estrategias Creativas para las Artes y Ciencias",
              "subjects": [
                "Especialización I (Estrategias Creativa)",
                "Especialización II (Estrategias Creativa)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Tecnologías Creativas para un Mundo Digital",
              "subjects": [
                "Especialización I (Tecnologías Creativa)",
                "Especialización II (Tecnologías Creativa)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "filosofia": {
        "name": "Filosofía",
        "items": [
          10,
          21,
          32,
          43,
          54,
          65
        ],
        "pdf": "filosofia-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad Eclesiástica de Ciencias Filosófico-Teológicas / Ciencias Humanas",
        "description": "Aprenderás a cuestionar los supuestos de la realidad: epistemología, ética, lógica formal, filosofía política y bioética, adquiriendo una capacidad de argumentación y pensamiento crítico inigualables.",
        "fieldOfWork": "Comités de bioética hospitalaria y tecnológica, asesoría política y estratégica, docencia universitaria, consultoría en dilemas de IA y análisis cultural.",
        "skills": [
          "Lógica rigurosa y pensamiento crítico",
          "Ética aplicada y dilemas morales contemporáneos",
          "Hermenéutica y análisis de textos filosóficos",
          "Argumentación y debate reflexivo"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "37%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2500",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Pensamiento",
            "highlight": "Crítico",
            "title": "ética de la IA",
            "bottomText": "Alta demanda en regulación de nuevas tecnologías"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Dilema Ético en Inteligencia Artificial y Toma de Decisiones Autónomas",
          "scenario": "Un algoritmo de triaje médico en situaciones de escasez de recursos debe decidir entre maximizar los años de vida o priorizar a personas con discapacidad.",
          "description": "Como filósofo(a) en el comité de ética:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Qué marco de deliberación ética garantiza la justicia y dignidad de las personas?",
              "options": [
                {
                  "text": "Articular la perspectiva deontológica kantiana de la dignidad intrínseca de cada individuo con el principio rawlsiano de justicia como equidad, prohibiendo la discriminación algorítmica.",
                  "next": "success"
                },
                {
                  "text": "Dejar que el programador decida solo según la fórmula matemática más rápida sin considerar los principios de los derechos humanos.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Lucidez y profundidad filosófica! Ningún ser humano debe ser tratado meramente como un medio matemático; fundamentar la ética algorítmica en la dignidad evita sesgos deshumanizantes.",
            "failure": "La técnica sin reflexión ética puede perpetuar y magnificar discriminaciones estructurales históricas bajo la apariencia de neutralidad algorítmica."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Filosofía del Conocimiento",
              "Historia de la Filosofía Medieval",
              "Seminario de Autor Medieval",
              "Psicología",
              "Fundamentos de la Investigación",
              "Filosofía de la Naturaleza"
            ],
            [
              "Historia de la Filosofía Contemporánea",
              "Seminario de Autor Contemporáneo",
              "Filosofía de Dios y la Religión",
              "Filosofía de la Cultura",
              "Itinerario I: Filosofía de la Educación",
              "Prácticas de Servicio Comunitario I"
            ],
            [
              "Seminario II de Tema o Autor",
              "Filosofía del Lenguaje",
              "Cosmovisiones Andinas",
              "Itinerario I: Didáctica de la Filosofía",
              "Prácticas Preprofesionales I",
              "Jesucristo y la Persona de Hoy"
            ],
            [
              "Historia de la Filosofía Moderna",
              "Seminario de Autor Moderno",
              "Ética",
              "Antropología Filosóﬁca",
              "Lógica Simbólica",
              "Filosofía Política"
            ],
            [
              "Hermenéutica",
              "Itinerario I: Planiﬁcación y",
              "Prácticas de Servicio Comunitario II",
              "Fenomenología",
              "Seminario III de Tema o Autor",
              "Pensamiento Ecuatoriano y Latinoamericano"
            ],
            [
              "Itinerario l: Legislación Educativa y Políticas de Inclusión",
              "Prácticas Preprofesionales II",
              "Introducción a la Filosofía: Fe y Razón",
              "Lógica",
              "Historia de la Filosofía Antigua",
              "Latín"
            ],
            [
              "Seminario de Autor Antiguo",
              "Comunicación Oral y Escrita",
              "Tecnologías de la Información y de la Comunicación (TIC)",
              "Lógica de Relaciones",
              "Seminario IV de Tema o Autor",
              "Estructuralismo y Postestructuralismo"
            ],
            [
              "Filosofía de la Tecnología",
              "Integración Curricular",
              "Filosofía de la educación",
              "Planiﬁcación y adaptaciones Curriculares",
              "Didáctica de la Filosofía",
              "Legislación Educativa y Políticas de Inclusión"
            ]
          ],
          "subjectDetails": {
            "Filosofía del Conocimiento": "Filosofía del Conocimiento en Filosofía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Historia de la Filosofía Medieval": "Historia de la Filosofía Medieval en Filosofía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Seminario de Autor Medieval": "Seminario de Autor Medieval en Filosofía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Psicología": "Psicología en Filosofía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Fundamentos de la Investigación": "Fundamentos de la Investigación en Filosofía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Filosofía de la Naturaleza": "Filosofía de la Naturaleza en Filosofía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Historia de la Filosofía Contemporánea": "Historia de la Filosofía Contemporánea en Filosofía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Seminario de Autor Contemporáneo": "Seminario de Autor Contemporáneo en Filosofía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Filosofía de Dios y la Religión": "Filosofía de Dios y la Religión en Filosofía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Filosofía de la Cultura": "Filosofía de la Cultura en Filosofía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Itinerario I: Filosofía de la Educación": "Itinerario I: Filosofía de la Educación en Filosofía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Prácticas de Servicio Comunitario I": "Prácticas de Servicio Comunitario I en Filosofía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Seminario II de Tema o Autor": "Seminario II de Tema o Autor en Filosofía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Filosofía del Lenguaje": "Filosofía del Lenguaje en Filosofía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Cosmovisiones Andinas": "Cosmovisiones Andinas en Filosofía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Itinerario I: Didáctica de la Filosofía": "Itinerario I: Didáctica de la Filosofía en Filosofía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Prácticas Preprofesionales I": "Prácticas Preprofesionales I en Filosofía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Jesucristo y la Persona de Hoy": "Jesucristo y la Persona de Hoy en Filosofía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Historia de la Filosofía Moderna": "Historia de la Filosofía Moderna en Filosofía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Seminario de Autor Moderno": "Seminario de Autor Moderno en Filosofía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Ética": "Ética en Filosofía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Antropología Filosóﬁca": "Antropología Filosóﬁca en Filosofía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Lógica Simbólica": "Lógica Simbólica en Filosofía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Filosofía Política": "Filosofía Política en Filosofía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Hermenéutica": "Hermenéutica en Filosofía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Itinerario I: Planiﬁcación y": "Itinerario I: Planiﬁcación y en Filosofía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Prácticas de Servicio Comunitario II": "Prácticas de Servicio Comunitario II en Filosofía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fenomenología": "Fenomenología en Filosofía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Seminario III de Tema o Autor": "Seminario III de Tema o Autor en Filosofía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Pensamiento Ecuatoriano y Latinoamericano": "Pensamiento Ecuatoriano y Latinoamericano en Filosofía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Itinerario l: Legislación Educativa y Políticas de Inclusión": "Itinerario l: Legislación Educativa y Políticas de Inclusión en Filosofía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Prácticas Preprofesionales II": "Prácticas Preprofesionales II en Filosofía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Introducción a la Filosofía: Fe y Razón": "Introducción a la Filosofía: Fe y Razón en Filosofía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Lógica": "Lógica en Filosofía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Historia de la Filosofía Antigua": "Historia de la Filosofía Antigua en Filosofía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Latín": "Latín en Filosofía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Seminario de Autor Antiguo": "Seminario de Autor Antiguo en Filosofía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Comunicación Oral y Escrita": "Comunicación Oral y Escrita en Filosofía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Tecnologías de la Información y de la Comunicación (TIC)": "Tecnologías de la Información y de la Comunicación (TIC) en Filosofía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Lógica de Relaciones": "Lógica de Relaciones en Filosofía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Seminario IV de Tema o Autor": "Seminario IV de Tema o Autor en Filosofía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Estructuralismo y Postestructuralismo": "Estructuralismo y Postestructuralismo en Filosofía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Filosofía de la Tecnología": "Filosofía de la Tecnología en Filosofía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Integración Curricular": "Integración Curricular en Filosofía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Filosofía de la educación": "Filosofía de la educación en Filosofía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Planiﬁcación y adaptaciones Curriculares": "Planiﬁcación y adaptaciones Curriculares en Filosofía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Didáctica de la Filosofía": "Didáctica de la Filosofía en Filosofía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Legislación Educativa y Políticas de Inclusión": "Legislación Educativa y Políticas de Inclusión en Filosofía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Filosofía de la Educación",
              "subjects": [
                "Especialización I (Filosofía de la Educ)",
                "Especialización II (Filosofía de la Educ)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Didáctica de la Filosofía",
              "subjects": [
                "Especialización I (Didáctica de la Filo)",
                "Especialización II (Didáctica de la Filo)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Planiﬁcación y",
              "subjects": [
                "Especialización I (Planiﬁcación y)",
                "Especialización II (Planiﬁcación y)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "teologia": {
        "name": "Teología",
        "items": [
          11,
          22,
          33,
          44,
          55,
          66
        ],
        "pdf": "teologia-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad Eclesiástica de Ciencias Filosófico-Teológicas",
        "description": "Profundizarás en el estudio de las Sagradas Escrituras, la historia de la Iglesia, el diálogo interreligioso, la pastoral social y el compromiso ético con los pobres y el cuidado de la Casa Común.",
        "fieldOfWork": "Pastoral social y organizaciones eclesiales, docencia de religión y valores, comisiones de paz y derechos humanos, asesoría ética y diálogo ecuménico.",
        "skills": [
          "Exégesis e interpretación bíblica",
          "Teología pastoral y compromiso comunitario",
          "Diálogo interreligioso y ecuménico",
          "Ética social y doctrina del bien común"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2500",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Pontificia",
            "highlight": "Sello",
            "title": "de la Santa Sede",
            "bottomText": "Títulos con validez eclesiástica y civil"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Mediación Comunitaria y Ecología Integral en Territorio",
          "scenario": "Una comunidad campesina enfrenta tensiones por el acceso al agua comunitaria frente a proyectos agroindustriales extensivos.",
          "description": "Desde la teología pastoral de la Encíclica Laudato Si':",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es la acción pastoral y mediadora con mayor impacto social y espiritual?",
              "options": [
                {
                  "text": "Propiciar espacios de escucha comunitaria basados en el diálogo, la defensa de la justicia ambiental y el destino universal de los bienes naturales.",
                  "next": "success"
                },
                {
                  "text": "Ignorar la problemática social y limitar el trabajo pastoral únicamente a ceremonias a puerta cerrada.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Teología encarnada y comprometida! La ecología integral articula el clamor de la tierra con el clamor de los pobres, promoviendo reconciliación con justicia.",
            "failure": "Una fe desvinculada de la justicia social y el cuidado de la creación contradice el mensaje evangélico del bien común."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Cristología",
              "Trinidad",
              "Pentateuco e Históricos",
              "Patrología y Concilios",
              "Historia de la Iglesia: Moderna y Contemporánea"
            ],
            [
              "Eclesiología",
              "Gracia y Escatología",
              "Moral Fundamental",
              "Escritos Sapienciales y Poéticos",
              "Escritos Paulinos"
            ],
            [
              "Doctrina Social de la Iglesia",
              "Penitencia, Matrimonio y Unción",
              "Moral: Sexualidad y Vida",
              "Historia de la Iglesia en América Latina",
              "Acompañamiento Humano y Espiritual"
            ],
            [
              "Creación, Alianza y Pecado",
              "Mariología",
              "Profetas",
              "Sinópticos y Hechos",
              "Teología e Historia de la Espiritualidad"
            ],
            [
              "- Moral Social",
              "Introducción. A los sacramentos: Bautismo y Conﬁrmación",
              "Derecho Canónico",
              "Liturgia",
              "Escritos Joanicos"
            ],
            [
              "Magisterio Actual de la Iglesia",
              "Orden y Eucaristía",
              "Teología de la Misión y la Predicación",
              "Pastoral de los Sacramentos y Homilética",
              "Administración Pastoral"
            ],
            [
              "Teología fundamental",
              "Introducción a la Teología",
              "Investigación Teológica",
              "Introducción a la Biblia",
              "Historia de la Iglesia: Antigua y Medieval"
            ],
            [
              "Teología Bíblica",
              "Práctica de la confesión",
              "Derecho Sacramental",
              "Bioética",
              "Unidad de Integración Curricular"
            ]
          ],
          "subjectDetails": {
            "Cristología": "Cristología en Teología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Trinidad": "Trinidad en Teología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Pentateuco e Históricos": "Pentateuco e Históricos en Teología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Patrología y Concilios": "Patrología y Concilios en Teología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Historia de la Iglesia: Moderna y Contemporánea": "Historia de la Iglesia: Moderna y Contemporánea en Teología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Eclesiología": "Eclesiología en Teología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Gracia y Escatología": "Gracia y Escatología en Teología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Moral Fundamental": "Moral Fundamental en Teología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Escritos Sapienciales y Poéticos": "Escritos Sapienciales y Poéticos en Teología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Escritos Paulinos": "Escritos Paulinos en Teología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Doctrina Social de la Iglesia": "Doctrina Social de la Iglesia en Teología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Penitencia, Matrimonio y Unción": "Penitencia, Matrimonio y Unción en Teología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Moral: Sexualidad y Vida": "Moral: Sexualidad y Vida en Teología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Historia de la Iglesia en América Latina": "Historia de la Iglesia en América Latina en Teología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Acompañamiento Humano y Espiritual": "Acompañamiento Humano y Espiritual en Teología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Creación, Alianza y Pecado": "Creación, Alianza y Pecado en Teología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Mariología": "Mariología en Teología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Profetas": "Profetas en Teología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Sinópticos y Hechos": "Sinópticos y Hechos en Teología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Teología e Historia de la Espiritualidad": "Teología e Historia de la Espiritualidad en Teología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "- Moral Social": "- Moral Social en Teología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Introducción. A los sacramentos: Bautismo y Conﬁrmación": "Introducción. A los sacramentos: Bautismo y Conﬁrmación en Teología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Derecho Canónico": "Derecho Canónico en Teología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Liturgia": "Liturgia en Teología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Escritos Joanicos": "Escritos Joanicos en Teología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Magisterio Actual de la Iglesia": "Magisterio Actual de la Iglesia en Teología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Orden y Eucaristía": "Orden y Eucaristía en Teología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Teología de la Misión y la Predicación": "Teología de la Misión y la Predicación en Teología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Pastoral de los Sacramentos y Homilética": "Pastoral de los Sacramentos y Homilética en Teología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Administración Pastoral": "Administración Pastoral en Teología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Teología fundamental": "Teología fundamental en Teología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Introducción a la Teología": "Introducción a la Teología en Teología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Investigación Teológica": "Investigación Teológica en Teología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Introducción a la Biblia": "Introducción a la Biblia en Teología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Historia de la Iglesia: Antigua y Medieval": "Historia de la Iglesia: Antigua y Medieval en Teología: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Teología Bíblica": "Teología Bíblica en Teología: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Práctica de la confesión": "Práctica de la confesión en Teología: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Derecho Sacramental": "Derecho Sacramental en Teología: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Bioética": "Bioética en Teología: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Unidad de Integración Curricular": "Unidad de Integración Curricular en Teología: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional."
          },
          "itineraries": [
            {
              "name": "Itinerario I: Innovación y Emprendimiento",
              "subjects": [
                "Modelos de Negocio",
                "Innovación Aplicada",
                "Proyectos de Impacto"
              ]
            },
            {
              "name": "Itinerario II: Investigación Aplicada",
              "subjects": [
                "Metodologías Avanzadas",
                "Seminario de Investigación",
                "Publicación Científica"
              ]
            }
          ]
        }
      }
    },
    "questions": [
      {
        "id": 1,
        "text": "¿Te atrae la creación de contenidos mediáticos, el periodismo de investigación y la producción de narrativas audiovisuales o transmedia?"
      },
      {
        "id": 2,
        "text": "¿Sientes curiosidad por el estudio científico del lenguaje humano, su estructura gramatical, fonética y sus variaciones socioculturales?"
      },
      {
        "id": 3,
        "text": "¿Te apasiona la formación integral, el neurodesarrollo temprano y el diseño de ambientes lúdicos de aprendizaje para la primera infancia?"
      },
      {
        "id": 4,
        "text": "¿Te visualizas litigando en tribunales, asesorando jurídicamente a empresas o defendiendo derechos humanos y garantías constitucionales?"
      },
      {
        "id": 5,
        "text": "¿Te atrae la diplomacia, la geopolítica mundial, el comercio global y la resolución pacífica de controversias internacionales?"
      },
      {
        "id": 6,
        "text": "¿Te apasiona la creación artística a través de la pintura, escultura, grabado, videoarte y el montaje de exposiciones contemporáneas?"
      },
      {
        "id": 7,
        "text": "¿Disfrutas leyendo a profundidad clásicos y literatura universal, analizando la narrativa y creando textos poéticos o de ficción?"
      },
      {
        "id": 8,
        "text": "¿Te interesa dominar varios idiomas extranjeros y aplicarlos profesionalmente en mediación intercultural, traducción y proyectos globales?"
      },
      {
        "id": 9,
        "text": "¿Te motiva diagnosticar e intervenir en dificultades de aprendizaje, orientación vocacional y convivencia pacífica en colegios (DECE)?"
      },
      {
        "id": 10,
        "text": "¿Te gusta debatir sobre ética, los límites del conocimiento humano, la filosofía política y los dilemas morales de la inteligencia artificial?"
      },
      {
        "id": 11,
        "text": "¿Sientes vocación por el estudio de las Sagradas Escrituras, el diálogo interreligioso y el compromiso pastoral con la justicia y los pobres?"
      },
      {
        "id": 12,
        "text": "¿Te gustaría dirigir la comunicación estratégica y reputación de organizaciones públicas o privadas ante situaciones de crisis mediática?"
      },
      {
        "id": 13,
        "text": "¿Te interesa investigar y documentar lenguas indígenas en peligro de extinción para revitalizar su uso y memoria ancestral?"
      },
      {
        "id": 14,
        "text": "¿Te motiva crear materiales pedagógicos innovadores basados en metodologías activas como Montessori, Reggio Emilia o Waldorf?"
      },
      {
        "id": 15,
        "text": "¿Te ves redactando contratos corporativos complejos, ordenanzas o proyectos de ley fundamentados en doctrina y jurisprudencia?"
      },
      {
        "id": 16,
        "text": "¿Te gustaría trabajar en misiones diplomáticas, cancillerías o en organismos internacionales como las Naciones Unidas (ONU) o la OEA?"
      },
      {
        "id": 17,
        "text": "¿Te visualizas desarrollando un cuerpo de obra artística personal y exponiendo tus piezas en galerías, bienales y ferias de arte?"
      },
      {
        "id": 18,
        "text": "¿Te gustaría trabajar en la industria editorial como editor, corrector de estilo o curador de publicaciones y revistas culturales?"
      },
      {
        "id": 19,
        "text": "¿Te ves ejerciendo como traductor e intérprete en conferencias internacionales bilaterales y cumbres multilaterales de alto nivel?"
      },
      {
        "id": 20,
        "text": "¿Te gustaría diseñar adaptaciones curriculares personalizadas para estudiantes con necesidades educativas específicas en el aula?"
      },
      {
        "id": 21,
        "text": "¿Te atrae el estudio riguroso de la lógica formal, la hermenéutica y las corrientes de pensamiento que han moldeado la civilización occidental?"
      },
      {
        "id": 22,
        "text": "¿Te interesa la teología pastoral, la ética social de la Iglesia (DSI) y el acompañamiento humano a comunidades vulnerables?"
      },
      {
        "id": 23,
        "text": "¿Te atrae el periodismo de datos, el análisis de tendencias digitales y la producción de documentales con impacto social positivo?"
      },
      {
        "id": 24,
        "text": "¿Te llama la atención la lingüística computacional y el desarrollo de tecnologías de procesamiento del lenguaje natural (NLP)?"
      },
      {
        "id": 25,
        "text": "¿Te interesa el acompañamiento a las familias en pautas de crianza respetuosa, desarrollo del lenguaje y estimulación psicomotriz infantil?"
      },
      {
        "id": 26,
        "text": "¿Te apasiona la defensa técnica en materia penal, laboral, civil o ambiental ante los juzgados y altas cortes de justicia?"
      },
      {
        "id": 27,
        "text": "¿Te ves negociando tratados de cooperación técnica y ayuda humanitaria para mitigar los efectos de crisis migratorias o climáticas?"
      },
      {
        "id": 28,
        "text": "¿Disfrutas experimentando con nuevos lenguajes plásticos, arte digital, bioarte y cruces entre ciencia, tecnología y creación estética?"
      },
      {
        "id": 29,
        "text": "¿Te ves escribiendo novelas, ensayos críticos o guiones audiovisuales con una voz estilística original y reflexiva?"
      },
      {
        "id": 30,
        "text": "¿Te interesa la mediación lingüística en empresas globales, facilitando negociaciones entre culturas occidentales y orientales?"
      },
      {
        "id": 31,
        "text": "¿Te motiva diseñar programas escolares de prevención del acoso escolar (bullying) y promoción de la salud mental infanto-juvenil?"
      },
      {
        "id": 32,
        "text": "¿Te gustaría integrar comités de bioética hospitalaria o reflexionar sobre los fundamentos morales de la dignidad humana y los derechos?"
      },
      {
        "id": 33,
        "text": "¿Te interesa profundizar en la historia de la Iglesia, la exégesis bíblica crítica y la teología ecuménica de la reconciliación?"
      },
      {
        "id": 34,
        "text": "¿Te gustaría gestionar comunidades digitales, podcasts de divulgación cultural y estrategias de branding para medios multiplataforma?"
      },
      {
        "id": 35,
        "text": "¿Te atrae la sociolingüística y el análisis de cómo el dialecto, el género y la clase social determinan el uso del idioma en la sociedad?"
      },
      {
        "id": 36,
        "text": "¿Te imaginas liderando o fundando un centro infantil innovador centrado en la exploración sensorial y el contacto con la naturaleza?"
      },
      {
        "id": 37,
        "text": "¿Tienes vocación por la reforma legal, la técnica legislativa y la lucha contra la impunidad y las injusticias estructurales?"
      },
      {
        "id": 38,
        "text": "¿Te entusiasma realizar análisis de riesgo político internacional y prospectiva geopolítica para instituciones públicas o empresas globales?"
      },
      {
        "id": 39,
        "text": "¿Te gustaría trabajar como curador en museos de arte, diseñando guiones museológicos y conservando el patrimonio artístico?"
      },
      {
        "id": 40,
        "text": "¿Te llama la atención el análisis comparado de la literatura latinoamericana y su diálogo con los procesos sociales y políticos del continente?"
      },
      {
        "id": 41,
        "text": "¿Te gustaría trabajar en agencias de cooperación internacional coordinando intercambios académicos y movilidad estudiantil global?"
      },
      {
        "id": 42,
        "text": "¿Te imaginas evaluando las funciones ejecutivas y procesos cognitivos de niños en edad escolar para potenciar su rendimiento?"
      },
      {
        "id": 43,
        "text": "¿Te apasiona la filosofía de la ciencia, investigando cómo se construyen las verdades científicas y sus implicaciones ontológicas?"
      },
      {
        "id": 44,
        "text": "¿Te visualizas colaborando con Cáritas y organizaciones ecuménicas en programas de defensa de los derechos de migrantes y refugiados?"
      },
      {
        "id": 45,
        "text": "¿Te imaginas produciendo contenidos audiovisuales educativos o reportajes de investigación que destapen problemáticas comunitarias?"
      },
      {
        "id": 46,
        "text": "¿Te interesa la psicolingüística y cómo el cerebro humano adquiere segundas lenguas durante las diferentes etapas del desarrollo?"
      },
      {
        "id": 47,
        "text": "¿Te gustaría formular políticas públicas educativas enfocadas en la equidad de acceso y calidad para la primera infancia rural y urbana?"
      },
      {
        "id": 48,
        "text": "¿Te visualizas como juez, fiscal o árbitro de derecho en controversias complejas con absoluta integridad y probidad ética?"
      },
      {
        "id": 49,
        "text": "¿Te imaginas como embajador o cónsul representando dignamente a tu país en el servicio exterior en capitales del mundo?"
      },
      {
        "id": 50,
        "text": "¿Te gustaría dirigir talleres comunitarios de arte-terapia y transformación social a través de la expresión artística?"
      },
      {
        "id": 51,
        "text": "¿Te ves ganando premios literarios, publicando libros o escribiendo columnas de opinión y crítica de arte en revistas de renombre?"
      },
      {
        "id": 52,
        "text": "¿Te ves liderando departamentos de asuntos internacionales y traducción en corporaciones multinacionales y embajadas?"
      },
      {
        "id": 53,
        "text": "¿Te visualizas como director del departamento de consejería estudiantil de una prestigiosa institución educativa?"
      },
      {
        "id": 54,
        "text": "¿Te imaginas como profesor e investigador universitario de filosofía publicando ensayos sobre ética y democracia contemporánea?"
      },
      {
        "id": 55,
        "text": "¿Te gustaría participar en foros internacionales de diálogo interreligioso promoviendo la paz y la fraternidad entre los pueblos?"
      },
      {
        "id": 56,
        "text": "¿Te gustaría fundar tu propia agencia de medios digitales o productora de cine y contenidos con propósito transformador?"
      },
      {
        "id": 57,
        "text": "¿Te ves liderando investigaciones lingüísticas en archivos sonoros y construyendo diccionarios de lenguas originarias?"
      },
      {
        "id": 58,
        "text": "¿Te imaginas como docente mentor transformando positivamente los primeros años de vida de generaciones de niños?"
      },
      {
        "id": 59,
        "text": "¿Te visualizas como socio de una prestigiosa firma jurídica o decano de derecho defendiendo el estado de derecho?"
      },
      {
        "id": 60,
        "text": "¿Te ves asesorando al Presidente de la República en política exterior y tratados estratégicos internacionales?"
      },
      {
        "id": 61,
        "text": "¿Te imaginas exponiendo tu obra individual en galerías de Nueva York, París o en el Museo de Arte Contemporáneo?"
      },
      {
        "id": 62,
        "text": "¿Te gustaría fundar una editorial independiente que descubra y promueva nuevas voces literarias de América Latina?"
      },
      {
        "id": 63,
        "text": "¿Te imaginas como consultor sénior de comunicación intercultural en la sede de las Naciones Unidas en Ginebra o Nueva York?"
      },
      {
        "id": 64,
        "text": "¿Te visualizas creando programas de educación inclusiva que transformen el sistema escolar para que ningún niño quede atrás?"
      },
      {
        "id": 65,
        "text": "¿Te ves asesorando a líderes mundiales en la construcción de una ética global para el cuidado del planeta y la tecnología?"
      },
      {
        "id": 66,
        "text": "¿Te imaginas dedicando tu vida a la docencia teológica y al compromiso pastoral por un mundo más justo y fraterno?"
      }
    ]
  },
  "economia": {
    "macroareaId": "economia",
    "title": "Economía y Gestión Empresarial",
    "shortName": "Economía y Negocios",
    "color": "#003b81",
    "iconName": "Briefcase",
    "faculty": "Facultad de Economía y Gestión Empresarial",
    "description": "Liderazgo corporativo, finanzas, mercados globales, marketing, emprendimiento y talento humano.",
    "careers": {
      "administracion_empresas": {
        "name": "Administración de Empresas",
        "items": [
          1,
          10,
          19,
          28,
          37,
          46
        ],
        "pdf": "administracion-de-empresas-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Economía y Gestión Empresarial",
        "description": "Aprenderás a liderar equipos, organizar un negocio y tomar buenas decisiones para que una empresa crezca. Te prepara para dirigir proyectos, emprender tu propia idea o trabajar en grandes compañías multinacionales.",
        "fieldOfWork": "Empresas nacionales e internacionales, gerencia de operaciones y proyectos, startups, consultoría de negocios y dirección estratégica.",
        "skills": [
          "Liderazgo y dirección de equipos",
          "Planificación estratégica y operaciones",
          "Toma de decisiones financieras",
          "Innovación y modelos de negocio"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "34%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2600",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Empleabilidad",
            "highlight": "94%",
            "title": "alta demanda",
            "bottomText": "Gerencia, consultoría, emprendimiento"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Lanzamiento de una Marca de Snacks Saludables",
          "scenario": "Tienes una idea para vender snacks de quinua y frutos secos en tiendas locales, pero tu presupuesto inicial es limitado.",
          "description": "Tu misión es elegir la mejor estrategia inicial para entrar al mercado sin quebrar en los primeros 6 meses.",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es tu primer paso comercial?",
              "options": [
                {
                  "text": "Validar el producto en ferias locales y redes sociales con ventas directas antes de producir masivamente.",
                  "next": "step2"
                },
                {
                  "text": "Pedir un préstamo bancario gigante y pautar comerciales en televisión nacional.",
                  "next": "failure_debt"
                }
              ]
            },
            {
              "id": "step2",
              "question": "Las ventas de prueba fueron un éxito. Ahora necesitas distribuir el producto a 10 tiendas. ¿Cómo lo organizas?",
              "options": [
                {
                  "text": "Subcontratar la logística de entrega local y negociar pagos a 15 días con los tenderos.",
                  "next": "success"
                },
                {
                  "text": "Comprar un camión de reparto propio aunque te quedes con cero liquidez en el banco.",
                  "next": "failure_truck"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Excelente visión de negocios! Empezaste validando el mercado con bajo riesgo y optimizaste la logística sin descapitalizar la empresa.",
            "failure": "Esa decisión compromete la liquidez inicial. En administración de empresas se aprende a calcular riesgos y usar el dinero con estrategia."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Estadística I",
              "Fundamentos de Contabilidad de Costos",
              "Pensamiento Creativo e Innovación",
              "Optimización Aplicada a la Administración y Economía",
              "Introducción a la Macroeconomía"
            ],
            [
              "Gestión de PYMES y Empresas Familiares",
              "Investigación de Mercados",
              "Cultura y Comportamiento Organizacional",
              "Legislación Empresarial",
              "Ecología Integral",
              "Gestión de Cadena de Suministro Internacional"
            ],
            [
              "Dirección e Innovación Estratégica",
              "Responsabilidad Social, Corporativa y Ambiental",
              "Jesucristo y Aprendizajes Vitales",
              "Estadística II",
              "Contabilidad Financiera",
              "Marketing y Ecosistema Digital"
            ],
            [
              "Ética e Interculturalidad",
              "Gestión del Talento Humano",
              "Administración de Operaciones",
              "Negocios Digitales (E-Business)",
              "Administración Estratégica",
              "Estrategias Globales"
            ],
            [
              "Asignatura 2 de Itinerario",
              "Sistemas Integrados de Gestión",
              "Prospectiva Estratégica",
              "Finanzas Corporativas",
              "Conocimiento, Palabra y Cambio Social",
              "Matemática I"
            ],
            [
              "Fundamentos de Administración",
              "Entorno Socioeconómico",
              "Introducción a la Microeconomía",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario"
            ],
            [
              "Habilidades Gerenciales",
              "Sistemas de Información Gerencial",
              "Exploración de Datos",
              "Visualizacion Avanzada de Datos",
              "Analítica de Datos",
              "Aplicación de la Ciencia de Datos"
            ],
            [
              "Marketing Inbound y de Contenidos",
              "Experiencia del Cliente",
              "E-Commerce y Social Selling",
              "Dirección de Proyectos",
              "Inicio y Planiﬁcación del Proyecto",
              "Ejecución, Monitoreo, Control y Cierre del Proyecto"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Administración de Empresas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Estadística I": "Estadística I en Administración de Empresas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Contabilidad de Costos": "Fundamentos de Contabilidad de Costos en Administración de Empresas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Pensamiento Creativo e Innovación": "Pensamiento Creativo e Innovación en Administración de Empresas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Optimización Aplicada a la Administración y Economía": "Optimización Aplicada a la Administración y Economía en Administración de Empresas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Introducción a la Macroeconomía": "Introducción a la Macroeconomía en Administración de Empresas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Gestión de PYMES y Empresas Familiares": "Gestión de PYMES y Empresas Familiares en Administración de Empresas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Investigación de Mercados": "Investigación de Mercados en Administración de Empresas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Cultura y Comportamiento Organizacional": "Cultura y Comportamiento Organizacional en Administración de Empresas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Legislación Empresarial": "Legislación Empresarial en Administración de Empresas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Administración de Empresas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Gestión de Cadena de Suministro Internacional": "Gestión de Cadena de Suministro Internacional en Administración de Empresas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Dirección e Innovación Estratégica": "Dirección e Innovación Estratégica en Administración de Empresas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Responsabilidad Social, Corporativa y Ambiental": "Responsabilidad Social, Corporativa y Ambiental en Administración de Empresas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Administración de Empresas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Estadística II": "Estadística II en Administración de Empresas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Contabilidad Financiera": "Contabilidad Financiera en Administración de Empresas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Marketing y Ecosistema Digital": "Marketing y Ecosistema Digital en Administración de Empresas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Administración de Empresas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Gestión del Talento Humano": "Gestión del Talento Humano en Administración de Empresas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Administración de Operaciones": "Administración de Operaciones en Administración de Empresas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Negocios Digitales (E-Business)": "Negocios Digitales (E-Business) en Administración de Empresas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Administración Estratégica": "Administración Estratégica en Administración de Empresas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Estrategias Globales": "Estrategias Globales en Administración de Empresas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Administración de Empresas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Sistemas Integrados de Gestión": "Sistemas Integrados de Gestión en Administración de Empresas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Prospectiva Estratégica": "Prospectiva Estratégica en Administración de Empresas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Finanzas Corporativas": "Finanzas Corporativas en Administración de Empresas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Administración de Empresas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Matemática I": "Matemática I en Administración de Empresas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fundamentos de Administración": "Fundamentos de Administración en Administración de Empresas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Entorno Socioeconómico": "Entorno Socioeconómico en Administración de Empresas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Introducción a la Microeconomía": "Introducción a la Microeconomía en Administración de Empresas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Administración de Empresas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Administración de Empresas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Administración de Empresas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Habilidades Gerenciales": "Habilidades Gerenciales en Administración de Empresas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Sistemas de Información Gerencial": "Sistemas de Información Gerencial en Administración de Empresas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Exploración de Datos": "Exploración de Datos en Administración de Empresas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Visualizacion Avanzada de Datos": "Visualizacion Avanzada de Datos en Administración de Empresas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Analítica de Datos": "Analítica de Datos en Administración de Empresas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Aplicación de la Ciencia de Datos": "Aplicación de la Ciencia de Datos en Administración de Empresas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Marketing Inbound y de Contenidos": "Marketing Inbound y de Contenidos en Administración de Empresas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Experiencia del Cliente": "Experiencia del Cliente en Administración de Empresas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "E-Commerce y Social Selling": "E-Commerce y Social Selling en Administración de Empresas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Dirección de Proyectos": "Dirección de Proyectos en Administración de Empresas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Inicio y Planiﬁcación del Proyecto": "Inicio y Planiﬁcación del Proyecto en Administración de Empresas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ejecución, Monitoreo, Control y Cierre del Proyecto": "Ejecución, Monitoreo, Control y Cierre del Proyecto en Administración de Empresas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Ciencia de Datos con Aplicaciones Prácticas",
              "subjects": [
                "Especialización I (Ciencia de Datos con)",
                "Especialización II (Ciencia de Datos con)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Negocios Digitales",
              "subjects": [
                "Especialización I (Negocios Digitales)",
                "Especialización II (Negocios Digitales)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Gestión de Proyectos",
              "subjects": [
                "Especialización I (Gestión de Proyectos)",
                "Especialización II (Gestión de Proyectos)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "turismo": {
        "name": "Administración en Turismo y Hospitalidad",
        "items": [
          2,
          11,
          20,
          29,
          38,
          47
        ],
        "pdf": "administracion-en-turismo-y-hospitalidad-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Economía y Gestión Empresarial",
        "description": "Aprenderás a crear y gestionar experiencias de viaje únicas, hoteles sostenibles y proyectos turísticos respetuosos con las comunidades y el patrimonio natural del Ecuador y el mundo.",
        "fieldOfWork": "Cadenas hoteleras internacionales, eco-lodges, agencias de viajes experienciales, consultoría de desarrollo turístico y ministerios de turismo.",
        "skills": [
          "Gestión hotelera y hospitalidad",
          "Diseño de experiencias turísticas",
          "Turismo sostenible y comunitario",
          "Marketing de destinos turísticos"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "34%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2600",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Prácticas",
            "highlight": "Globales",
            "title": "convenios hoteleros",
            "bottomText": "Pasantías en cadenas de prestigio internacional"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Eco-Lodge Sostenible en Mindo",
          "scenario": "Vas a diseñar un plan para relanzar una hostería en el bosque nublado de Mindo para atraer viajeros internacionales que buscan naturaleza.",
          "description": "Tienes que elegir la propuesta de valor para destacar entre la competencia.",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es tu estrategia principal de atracción?",
              "options": [
                {
                  "text": "Crear paquetes de aviturismo con guías locales certificados y cocina 'de la huerta a la mesa'.",
                  "next": "success"
                },
                {
                  "text": "Convertir el bosque en un parque de diversiones con música fuerte y cuatrimotos ruidosas.",
                  "next": "failure_noise"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Gran decisión! El ecoturismo responsable atrae viajeros de alto valor que respetan el entorno y generan ingresos sostenibles a la comunidad.",
            "failure": "Las cuatrimotos y el ruido ahuyentan a las aves y destruyen el atractivo natural que los viajeros buscan en Mindo."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Estadística I",
              "Fundamentos de Contabilidad de Costos",
              "Pensamiento Creativo e Innovación -",
              "Introducción a la Macroeconomía",
              "Legislación Empresarial"
            ],
            [
              "Investigación de Mercados",
              "Sociología del Turismo",
              "Tendencias y Estrategias Turísticas y Hospitalidad",
              "Geografía Turística",
              "Procesos Culinarios",
              "Ecología Integral"
            ],
            [
              "Diseño de Productos y Experiencias Turísticas y de Hospitalidad",
              "Servicios digitales y Consultoría de Viajes",
              "Diseño y Evaluación de Proyectos",
              "Recursos Turísticos Naturales",
              "Responsabilidad Social, Corporativa y Ambiental",
              "Jesucristo y Aprendizajes Vitales"
            ],
            [
              "Marketing y Ecosistema Digital",
              "Gestión por Procesos",
              "Introducción al Turismo y la Hospitalidad",
              "Estadística II",
              "Fundamentos de Sanidad y Nutrición",
              "Ética e Interculturalidad"
            ],
            [
              "Gestión del Talento Humano",
              "Administración Estratégica",
              "Operación de Empresas Turísticas y de Hospitalidad",
              "Recursos Turísticos Culturales",
              "Operación de Empresas de Alimentos y Bebidas",
              "Seminario de Titulación"
            ],
            [
              "Asignatura 1 de itinerario",
              "Asignatura 2 de itinerario",
              "Dirección y Organización de Eventos y Banquetes",
              "Impactos Socio Ambientales",
              "Gestión de Bares y Bebidas",
              "Conocimiento, Palabra y Cambio Social"
            ],
            [
              "Matemática I",
              "Contabilidad Básica",
              "Fundamentos de Administración",
              "Entorno Socioeconómico",
              "Introducción a la Microeconomía",
              "Integración Curricular"
            ],
            [
              "Asignatura 3 de itinerario",
              "Asignatura 4 de itinerario",
              "Modelos de Turismo Sostenible y Comunitario",
              "Gestión de Destinos Turísticos",
              "Estrategias Directivas en Turismo y Hospitalidad"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Administración en Turismo y Hospitalidad: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Estadística I": "Estadística I en Administración en Turismo y Hospitalidad: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Contabilidad de Costos": "Fundamentos de Contabilidad de Costos en Administración en Turismo y Hospitalidad: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Pensamiento Creativo e Innovación -": "Pensamiento Creativo e Innovación - en Administración en Turismo y Hospitalidad: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Introducción a la Macroeconomía": "Introducción a la Macroeconomía en Administración en Turismo y Hospitalidad: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Legislación Empresarial": "Legislación Empresarial en Administración en Turismo y Hospitalidad: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Investigación de Mercados": "Investigación de Mercados en Administración en Turismo y Hospitalidad: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Sociología del Turismo": "Sociología del Turismo en Administración en Turismo y Hospitalidad: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Tendencias y Estrategias Turísticas y Hospitalidad": "Tendencias y Estrategias Turísticas y Hospitalidad en Administración en Turismo y Hospitalidad: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Geografía Turística": "Geografía Turística en Administración en Turismo y Hospitalidad: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Procesos Culinarios": "Procesos Culinarios en Administración en Turismo y Hospitalidad: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ecología Integral": "Ecología Integral en Administración en Turismo y Hospitalidad: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Diseño de Productos y Experiencias Turísticas y de Hospitalidad": "Diseño de Productos y Experiencias Turísticas y de Hospitalidad en Administración en Turismo y Hospitalidad: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Servicios digitales y Consultoría de Viajes": "Servicios digitales y Consultoría de Viajes en Administración en Turismo y Hospitalidad: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Diseño y Evaluación de Proyectos": "Diseño y Evaluación de Proyectos en Administración en Turismo y Hospitalidad: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Recursos Turísticos Naturales": "Recursos Turísticos Naturales en Administración en Turismo y Hospitalidad: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Responsabilidad Social, Corporativa y Ambiental": "Responsabilidad Social, Corporativa y Ambiental en Administración en Turismo y Hospitalidad: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Administración en Turismo y Hospitalidad: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Marketing y Ecosistema Digital": "Marketing y Ecosistema Digital en Administración en Turismo y Hospitalidad: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Gestión por Procesos": "Gestión por Procesos en Administración en Turismo y Hospitalidad: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Introducción al Turismo y la Hospitalidad": "Introducción al Turismo y la Hospitalidad en Administración en Turismo y Hospitalidad: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Estadística II": "Estadística II en Administración en Turismo y Hospitalidad: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Fundamentos de Sanidad y Nutrición": "Fundamentos de Sanidad y Nutrición en Administración en Turismo y Hospitalidad: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Administración en Turismo y Hospitalidad: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Gestión del Talento Humano": "Gestión del Talento Humano en Administración en Turismo y Hospitalidad: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Administración Estratégica": "Administración Estratégica en Administración en Turismo y Hospitalidad: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Operación de Empresas Turísticas y de Hospitalidad": "Operación de Empresas Turísticas y de Hospitalidad en Administración en Turismo y Hospitalidad: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Recursos Turísticos Culturales": "Recursos Turísticos Culturales en Administración en Turismo y Hospitalidad: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Operación de Empresas de Alimentos y Bebidas": "Operación de Empresas de Alimentos y Bebidas en Administración en Turismo y Hospitalidad: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Seminario de Titulación": "Seminario de Titulación en Administración en Turismo y Hospitalidad: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 1 de itinerario": "Asignatura 1 de itinerario en Administración en Turismo y Hospitalidad: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Asignatura 2 de itinerario": "Asignatura 2 de itinerario en Administración en Turismo y Hospitalidad: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Dirección y Organización de Eventos y Banquetes": "Dirección y Organización de Eventos y Banquetes en Administración en Turismo y Hospitalidad: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Impactos Socio Ambientales": "Impactos Socio Ambientales en Administración en Turismo y Hospitalidad: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Gestión de Bares y Bebidas": "Gestión de Bares y Bebidas en Administración en Turismo y Hospitalidad: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Administración en Turismo y Hospitalidad: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Matemática I": "Matemática I en Administración en Turismo y Hospitalidad: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Contabilidad Básica": "Contabilidad Básica en Administración en Turismo y Hospitalidad: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Administración": "Fundamentos de Administración en Administración en Turismo y Hospitalidad: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Entorno Socioeconómico": "Entorno Socioeconómico en Administración en Turismo y Hospitalidad: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Introducción a la Microeconomía": "Introducción a la Microeconomía en Administración en Turismo y Hospitalidad: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Integración Curricular": "Integración Curricular en Administración en Turismo y Hospitalidad: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 3 de itinerario": "Asignatura 3 de itinerario en Administración en Turismo y Hospitalidad: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Asignatura 4 de itinerario": "Asignatura 4 de itinerario en Administración en Turismo y Hospitalidad: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Modelos de Turismo Sostenible y Comunitario": "Modelos de Turismo Sostenible y Comunitario en Administración en Turismo y Hospitalidad: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Gestión de Destinos Turísticos": "Gestión de Destinos Turísticos en Administración en Turismo y Hospitalidad: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Estrategias Directivas en Turismo y Hospitalidad": "Estrategias Directivas en Turismo y Hospitalidad en Administración en Turismo y Hospitalidad: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo."
          },
          "itineraries": [
            {
              "name": "Itinerario: Comunicación Asertiva y Gestión de Contenidos",
              "subjects": [
                "Especialización I (Comunicación Asertiv)",
                "Especialización II (Comunicación Asertiv)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Gestión de Proyectos (Project Management)",
              "subjects": [
                "Especialización I (Gestión de Proyectos)",
                "Especialización II (Gestión de Proyectos)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Negocios Digitales",
              "subjects": [
                "Especialización I (Negocios Digitales)",
                "Especialización II (Negocios Digitales)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "contabilidad": {
        "name": "Contabilidad y Auditoría",
        "items": [
          3,
          12,
          21,
          30,
          39,
          48
        ],
        "pdf": "contabilidad-y-auditoria-202508.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Economía y Gestión Empresarial",
        "description": "Dominarás el lenguaje financiero de los negocios: normas contables internacionales (NIIF), tributación, auditoría forense y control interno para garantizar la transparencia empresarial.",
        "fieldOfWork": "Firmas internacionales de auditoría (Big Four), contralorías, gerencia de contabilidad en corporaciones y consultoría tributaria.",
        "skills": [
          "Normas NIIF y control financiero",
          "Auditoría forense y cumplimiento",
          "Planificación tributaria y fiscal",
          "Análisis de estados financieros"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2600",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Empleabilidad",
            "highlight": "96%",
            "title": "en firmas globales",
            "bottomText": "Inserción en Deloitte, PwC, EY y KPMG"
          }
        ],
        "caseStudy": {
          "type": "matching",
          "title": "Auditoría Financiera y Clasificación Contable",
          "scenario": "Durante una auditoría externa a una empresa comercial, debes clasificar correctamente las cuentas en el Balance General:",
          "description": "Relaciona cada cuenta contable con su grupo patrimonial:",
          "leftItems": [
            {
              "id": "caja",
              "label": "Efectivo y equivalentes en bancos"
            },
            {
              "id": "proveedores",
              "label": "Cuentas por pagar a proveedores a 30 días"
            },
            {
              "id": "utilidades",
              "label": "Utilidades retenidas del ejercicio anterior"
            }
          ],
          "rightItems": [
            {
              "id": "caja",
              "label": "Activo Corriente (Liquidez disponible)"
            },
            {
              "id": "proveedores",
              "label": "Pasivo Corriente (Obligaciones a corto plazo)"
            },
            {
              "id": "utilidades",
              "label": "Patrimonio Neto (Fondos propios de la entidad)"
            }
          ],
          "feedback": {
            "success": "¡Exactitud contable! La clasificación rigurosa bajo normas internacionales NIIF es indispensable para la transparencia financiera.",
            "failure": "Revisa la ecuación fundamental: Activo = Pasivo + Patrimonio. Las deudas a corto plazo son Pasivo Corriente y los recursos líquidos Activo Corriente."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Estadística I",
              "Fundamentos de Contabilidad de Costos",
              "Pensamiento Creativo e Innovación",
              "Optimización Aplicada a la Administración y Economía",
              "Introducción a la Macroeconomía"
            ],
            [
              "Contabilidad Superior",
              "Legislación Empresarial",
              "Gestión de Costos",
              "Administración Presupuestaria",
              "Ecología Integral",
              "Diseño y Evaluación de Proyectos"
            ],
            [
              "Auditoría II",
              "Control de Gestión",
              "Jesucristo y Aprendizajes Vitales",
              "Estadística II",
              "Contabilidad Intermedia",
              "Marketing y Ecosistema Digital"
            ],
            [
              "Ética e Interculturalidad",
              "Aplicaciones Tributarias",
              "Contabilidad Avanzada",
              "Gestión del Talento Humano",
              "Auditoría I",
              "Administración Estratégica"
            ],
            [
              "Asignatura 2 de Itinerario",
              "Data Analytics para Auditoría y Contabilidad I",
              "Contabilidad de Instituciones Financieras y Seguros",
              "Sostenibilidad e Informes Integrados",
              "Conocimiento, Palabra y Cambio Social",
              "Matemática I"
            ],
            [
              "Fundamentos de Administración",
              "Entorno Socioeconómico",
              "Introducción a la Microeconomía",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario"
            ],
            [
              "Habilidades Gerenciales",
              "Finanzas Corporativas",
              "Gobierno Corporativo",
              "Derecho de la Competencia",
              "Derecho y Nuevas Tecnologías",
              "Compliance"
            ],
            [
              "Sostenibilidad Ambiental y Cambio Climático",
              "Herramientas para la Valoración Ambiental",
              "Gestión Sostenible de Empresas",
              "Dirección de Proyectos",
              "Inicio y Planiﬁcación del Proyecto",
              "Ejecución, Monitoreo, Control y Cierre del Proyecto"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Contabilidad y Auditoría: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Estadística I": "Estadística I en Contabilidad y Auditoría: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Contabilidad de Costos": "Fundamentos de Contabilidad de Costos en Contabilidad y Auditoría: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Pensamiento Creativo e Innovación": "Pensamiento Creativo e Innovación en Contabilidad y Auditoría: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Optimización Aplicada a la Administración y Economía": "Optimización Aplicada a la Administración y Economía en Contabilidad y Auditoría: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Introducción a la Macroeconomía": "Introducción a la Macroeconomía en Contabilidad y Auditoría: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Contabilidad Superior": "Contabilidad Superior en Contabilidad y Auditoría: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Legislación Empresarial": "Legislación Empresarial en Contabilidad y Auditoría: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Gestión de Costos": "Gestión de Costos en Contabilidad y Auditoría: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Administración Presupuestaria": "Administración Presupuestaria en Contabilidad y Auditoría: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Contabilidad y Auditoría: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Diseño y Evaluación de Proyectos": "Diseño y Evaluación de Proyectos en Contabilidad y Auditoría: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Auditoría II": "Auditoría II en Contabilidad y Auditoría: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Control de Gestión": "Control de Gestión en Contabilidad y Auditoría: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Contabilidad y Auditoría: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Estadística II": "Estadística II en Contabilidad y Auditoría: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Contabilidad Intermedia": "Contabilidad Intermedia en Contabilidad y Auditoría: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Marketing y Ecosistema Digital": "Marketing y Ecosistema Digital en Contabilidad y Auditoría: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Contabilidad y Auditoría: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Aplicaciones Tributarias": "Aplicaciones Tributarias en Contabilidad y Auditoría: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Contabilidad Avanzada": "Contabilidad Avanzada en Contabilidad y Auditoría: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Gestión del Talento Humano": "Gestión del Talento Humano en Contabilidad y Auditoría: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Auditoría I": "Auditoría I en Contabilidad y Auditoría: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Administración Estratégica": "Administración Estratégica en Contabilidad y Auditoría: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Contabilidad y Auditoría: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Data Analytics para Auditoría y Contabilidad I": "Data Analytics para Auditoría y Contabilidad I en Contabilidad y Auditoría: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Contabilidad de Instituciones Financieras y Seguros": "Contabilidad de Instituciones Financieras y Seguros en Contabilidad y Auditoría: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Sostenibilidad e Informes Integrados": "Sostenibilidad e Informes Integrados en Contabilidad y Auditoría: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Contabilidad y Auditoría: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Matemática I": "Matemática I en Contabilidad y Auditoría: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fundamentos de Administración": "Fundamentos de Administración en Contabilidad y Auditoría: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Entorno Socioeconómico": "Entorno Socioeconómico en Contabilidad y Auditoría: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Introducción a la Microeconomía": "Introducción a la Microeconomía en Contabilidad y Auditoría: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Contabilidad y Auditoría: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Contabilidad y Auditoría: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Contabilidad y Auditoría: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Habilidades Gerenciales": "Habilidades Gerenciales en Contabilidad y Auditoría: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Finanzas Corporativas": "Finanzas Corporativas en Contabilidad y Auditoría: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Gobierno Corporativo": "Gobierno Corporativo en Contabilidad y Auditoría: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Derecho de la Competencia": "Derecho de la Competencia en Contabilidad y Auditoría: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Derecho y Nuevas Tecnologías": "Derecho y Nuevas Tecnologías en Contabilidad y Auditoría: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Compliance": "Compliance en Contabilidad y Auditoría: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Sostenibilidad Ambiental y Cambio Climático": "Sostenibilidad Ambiental y Cambio Climático en Contabilidad y Auditoría: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Herramientas para la Valoración Ambiental": "Herramientas para la Valoración Ambiental en Contabilidad y Auditoría: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Gestión Sostenible de Empresas": "Gestión Sostenible de Empresas en Contabilidad y Auditoría: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Dirección de Proyectos": "Dirección de Proyectos en Contabilidad y Auditoría: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Inicio y Planiﬁcación del Proyecto": "Inicio y Planiﬁcación del Proyecto en Contabilidad y Auditoría: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ejecución, Monitoreo, Control y Cierre del Proyecto": "Ejecución, Monitoreo, Control y Cierre del Proyecto en Contabilidad y Auditoría: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Derecho Empresarial",
              "subjects": [
                "Especialización I (Derecho Empresarial)",
                "Especialización II (Derecho Empresarial)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Economía y Ambiente",
              "subjects": [
                "Especialización I (Economía y Ambiente)",
                "Especialización II (Economía y Ambiente)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: 7",
              "subjects": [
                "Especialización I (7)",
                "Especialización II (7)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "economia_carrera": {
        "name": "Economía",
        "items": [
          4,
          13,
          22,
          31,
          40,
          49
        ],
        "pdf": "economia-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Economía y Gestión Empresarial",
        "description": "Aprenderás cómo funcionan los mercados, el dinero, el comercio mundial y las decisiones del gobierno sobre impuestos y gasto público para diseñar políticas que reduzcan la pobreza.",
        "fieldOfWork": "Bancos centrales y multilaterales (BM, BID), ministerios de finanzas, banca de inversión, centros de investigación económica y consultoría macroeconómica.",
        "skills": [
          "Modelos macro y microeconómicos",
          "Econometría y análisis cuantitativo",
          "Diseño de políticas públicas",
          "Evaluación de impacto económico"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "34%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2600",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Prestigio",
            "highlight": "#1",
            "title": "facultad de economía",
            "bottomText": "Líder en formación de economistas en Ecuador"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Decisión de Política Monetaria y Control de Inflación",
          "scenario": "La inflación en un país se acelera al 9% anual y el costo de la canasta básica familiar afecta a los sectores más vulnerables.",
          "description": "Como economista en el equipo técnico del Banco Central:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es la medida de política económica recomendada para frenar la espiral inflacionaria?",
              "options": [
                {
                  "text": "Ajustar la tasa de interés de referencia para desincentivar el sobreendeudamiento especulativo y coordinar metas fiscales creíbles.",
                  "next": "success"
                },
                {
                  "text": "Imprimir billetes masivamente y repartirlos en efectivo sin respaldo productivo.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Criterio macroeconómico sólido! Ajustar las tasas de interés contrae el exceso de liquidez y ancla las expectativas inflacionarias de los agentes económicos.",
            "failure": "La emisión inorgánica de dinero genera hiperinflación descontrolada y pulveriza el poder adquisitivo de los salarios de la población."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Estadística I",
              "Fundamentos de Contabilidad de Costos",
              "Pensamiento Creativo e Innovación",
              "Optimización Aplicada a la Adminis- tración y Economía",
              "Introducción a la Macroeconomía"
            ],
            [
              "Mercado de Capitales y Economía Financiera",
              "Economía Política I",
              "Macroeconomía II",
              "Microeconomía II",
              "Ecología Integral",
              "Macroeconometría"
            ],
            [
              "Economía del Sector Público",
              "Organización Industrial",
              "Jesucristo y Aprendizajes Vitales",
              "Estadística II",
              "Sector Financiero y Economía Financiera",
              "Economía de América Latina y Ecuador"
            ],
            [
              "Ética e Interculturalidad",
              "Microeconometría",
              "Organización Económica, Espacio y Territorio",
              "Economía Política II",
              "Economía Internacional",
              "Teoría de Juegos"
            ],
            [
              "Asignatura 2 de Itinerario",
              "Economía del Desarrollo",
              "Política Fiscal y Finanzas Públicas",
              "Economía de la Competencia",
              "Conocimiento, Palabra y Cambio Social",
              "Matemática I"
            ],
            [
              "Fundamentos de Administración",
              "Entorno Socioeconómico",
              "Introducción a la Microeconomía",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario"
            ],
            [
              "Regulación Financiera y Política Monetaria",
              "Bases de Datos en Economía",
              "Exploración de Datos",
              "Visualización Avanzada de Datos",
              "Analítica de Datos",
              "Aplicación de la Ciencia de Datos"
            ],
            [
              "Marcos Analíticos de Políticas Públicas",
              "Análisis Comparado de Políticas Públicas",
              "Métodos Múltiples para la Evaluación de Políticas Públicas",
              "Introducción a la Economía Sostenible",
              "Sostenibilidad Ambiental y Cambio Climático",
              "Herramientas para la Valoración Ambiental"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Economía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Estadística I": "Estadística I en Economía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Contabilidad de Costos": "Fundamentos de Contabilidad de Costos en Economía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Pensamiento Creativo e Innovación": "Pensamiento Creativo e Innovación en Economía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Optimización Aplicada a la Adminis- tración y Economía": "Optimización Aplicada a la Adminis- tración y Economía en Economía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Introducción a la Macroeconomía": "Introducción a la Macroeconomía en Economía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Mercado de Capitales y Economía Financiera": "Mercado de Capitales y Economía Financiera en Economía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Economía Política I": "Economía Política I en Economía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Macroeconomía II": "Macroeconomía II en Economía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Microeconomía II": "Microeconomía II en Economía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Economía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Macroeconometría": "Macroeconometría en Economía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Economía del Sector Público": "Economía del Sector Público en Economía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Organización Industrial": "Organización Industrial en Economía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Economía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Estadística II": "Estadística II en Economía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Sector Financiero y Economía Financiera": "Sector Financiero y Economía Financiera en Economía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Economía de América Latina y Ecuador": "Economía de América Latina y Ecuador en Economía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Economía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Microeconometría": "Microeconometría en Economía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Organización Económica, Espacio y Territorio": "Organización Económica, Espacio y Territorio en Economía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Economía Política II": "Economía Política II en Economía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Economía Internacional": "Economía Internacional en Economía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Teoría de Juegos": "Teoría de Juegos en Economía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Economía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Economía del Desarrollo": "Economía del Desarrollo en Economía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Política Fiscal y Finanzas Públicas": "Política Fiscal y Finanzas Públicas en Economía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Economía de la Competencia": "Economía de la Competencia en Economía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Economía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Matemática I": "Matemática I en Economía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fundamentos de Administración": "Fundamentos de Administración en Economía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Entorno Socioeconómico": "Entorno Socioeconómico en Economía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Introducción a la Microeconomía": "Introducción a la Microeconomía en Economía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Economía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Economía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Economía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Regulación Financiera y Política Monetaria": "Regulación Financiera y Política Monetaria en Economía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Bases de Datos en Economía": "Bases de Datos en Economía en Economía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Exploración de Datos": "Exploración de Datos en Economía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Visualización Avanzada de Datos": "Visualización Avanzada de Datos en Economía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Analítica de Datos": "Analítica de Datos en Economía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Aplicación de la Ciencia de Datos": "Aplicación de la Ciencia de Datos en Economía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Marcos Analíticos de Políticas Públicas": "Marcos Analíticos de Políticas Públicas en Economía: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Análisis Comparado de Políticas Públicas": "Análisis Comparado de Políticas Públicas en Economía: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Métodos Múltiples para la Evaluación de Políticas Públicas": "Métodos Múltiples para la Evaluación de Políticas Públicas en Economía: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Introducción a la Economía Sostenible": "Introducción a la Economía Sostenible en Economía: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Sostenibilidad Ambiental y Cambio Climático": "Sostenibilidad Ambiental y Cambio Climático en Economía: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Herramientas para la Valoración Ambiental": "Herramientas para la Valoración Ambiental en Economía: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Ciencia de Datos con Aplicaciones Prácticas",
              "subjects": [
                "Especialización I (Ciencia de Datos con)",
                "Especialización II (Ciencia de Datos con)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Diseño y Análisis de Políticas Públicas",
              "subjects": [
                "Especialización I (Diseño y Análisis de)",
                "Especialización II (Diseño y Análisis de)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Economía y Ambiente",
              "subjects": [
                "Especialización I (Economía y Ambiente)",
                "Especialización II (Economía y Ambiente)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "finanzas": {
        "name": "Finanzas",
        "items": [
          5,
          14,
          23,
          32,
          41,
          50
        ],
        "pdf": "finanzas-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Economía y Gestión Empresarial",
        "description": "Aprenderás a gestionar el dinero de forma inteligente: inversiones en bolsa, análisis de riesgo, fusiones y adquisiciones corporativas y valoración de empresas de base tecnológica.",
        "fieldOfWork": "Banca de inversión y corporativa, casas de valores, fondos de capital de riesgo (venture capital), tesorería corporativa y fintech.",
        "skills": [
          "Valoración de empresas y proyectos",
          "Gestión de carteras e inversiones",
          "Derivados financieros y cobertura de riesgos",
          "Modelación financiera en Excel y Python"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "34%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2600",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Certificación",
            "highlight": "Bloomberg",
            "title": "laboratorio financiero",
            "bottomText": "Terminales profesionales de mercado bursátil"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Optimización de Portafolio y Gestión de Riesgo",
          "scenario": "Un fondo de pensiones necesita invertir $10 millones buscando una rentabilidad anual del 8% con perfil de riesgo conservador-moderado.",
          "description": "Elige la asignación estratégica de activos:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es la distribución de activos más prudente y diversificada?",
              "options": [
                {
                  "text": "60% en bonos soberanos y corporativos grado de inversión, 30% en acciones globales indexadas y 10% en liquidez e instrumentos del mercado de dinero.",
                  "next": "success"
                },
                {
                  "text": "100% en criptomonedas volátiles de reciente creación sin historial auditado.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Estrategia financiera profesional! La diversificación entre renta fija de calidad y renta variable global minimiza la volatilidad y asegura rendimientos consistentes.",
            "failure": "Concentrar el 100% en activos hipervolátiles viola los principios fiduciarios de gestión de riesgos y expone el capital a pérdidas catastróficas."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Estadística I",
              "Fundamentos de Contabilidad de Costos",
              "Pensamiento Creativo e Innovación",
              "Optimización Aplicada a la Adminis- tración y Economía",
              "Introducción a la Macroeconomía"
            ],
            [
              "Contabilidad Societaria",
              "Gestión por Procesos",
              "Administración Presupuestaria",
              "Finanzas Operativas",
              "Ecología Integral",
              "Instituciones Financieras del Sistema Nacional"
            ],
            [
              "Seguros y Transferencia de Riesgos",
              "Finanzas Internacionales",
              "Jesucristo y Aprendizajes Vitales",
              "Herramientas de programación para los negocios",
              "Contabilidad intermedia",
              "Marketing y ecosistema digital"
            ],
            [
              "Ética e Interculturalidad",
              "Gestión del Talento Humano",
              "Administración de Portafolios",
              "Administración Estratégica",
              "Tributación Aplicada",
              "Decisiones de Financiamiento e Inversiones"
            ],
            [
              "Asignatura 2 de Itinerario",
              "Analítica Financiera",
              "Valoración de Renta Fija",
              "Gestion de Riesgos Financieros",
              "Conocimiento, Palabra y Cambio Social",
              "Matemática I"
            ],
            [
              "Fundamentos de Administración",
              "Entorno Socioeconómico",
              "Introducción a la Microeconomía",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario"
            ],
            [
              "Innovación Financiera y Fintech",
              "Valoración de Empresas",
              "Internacionalización de MYPIMES",
              "Negociación en Mercados Internacionales",
              "Riesgos Internacionales",
              "Gerencia de Negocios Internacionales"
            ],
            [
              "Visualización Avanzada de Datos",
              "Analítica de Datos",
              "Aplicación de la Ciencia de Datos",
              "Dirección de Proyectos",
              "Inicio y Planiﬁcación del Proyecto",
              "Ejecución, Monitoreo, Control y Cierre del Proyecto"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Finanzas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Estadística I": "Estadística I en Finanzas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Contabilidad de Costos": "Fundamentos de Contabilidad de Costos en Finanzas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Pensamiento Creativo e Innovación": "Pensamiento Creativo e Innovación en Finanzas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Optimización Aplicada a la Adminis- tración y Economía": "Optimización Aplicada a la Adminis- tración y Economía en Finanzas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Introducción a la Macroeconomía": "Introducción a la Macroeconomía en Finanzas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Contabilidad Societaria": "Contabilidad Societaria en Finanzas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Gestión por Procesos": "Gestión por Procesos en Finanzas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Administración Presupuestaria": "Administración Presupuestaria en Finanzas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Finanzas Operativas": "Finanzas Operativas en Finanzas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Finanzas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Instituciones Financieras del Sistema Nacional": "Instituciones Financieras del Sistema Nacional en Finanzas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Seguros y Transferencia de Riesgos": "Seguros y Transferencia de Riesgos en Finanzas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Finanzas Internacionales": "Finanzas Internacionales en Finanzas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Finanzas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Herramientas de programación para los negocios": "Herramientas de programación para los negocios en Finanzas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Contabilidad intermedia": "Contabilidad intermedia en Finanzas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Marketing y ecosistema digital": "Marketing y ecosistema digital en Finanzas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Finanzas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Gestión del Talento Humano": "Gestión del Talento Humano en Finanzas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Administración de Portafolios": "Administración de Portafolios en Finanzas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Administración Estratégica": "Administración Estratégica en Finanzas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Tributación Aplicada": "Tributación Aplicada en Finanzas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Decisiones de Financiamiento e Inversiones": "Decisiones de Financiamiento e Inversiones en Finanzas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Finanzas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Analítica Financiera": "Analítica Financiera en Finanzas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Valoración de Renta Fija": "Valoración de Renta Fija en Finanzas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Gestion de Riesgos Financieros": "Gestion de Riesgos Financieros en Finanzas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Finanzas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Matemática I": "Matemática I en Finanzas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fundamentos de Administración": "Fundamentos de Administración en Finanzas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Entorno Socioeconómico": "Entorno Socioeconómico en Finanzas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Introducción a la Microeconomía": "Introducción a la Microeconomía en Finanzas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Finanzas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Finanzas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Finanzas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Innovación Financiera y Fintech": "Innovación Financiera y Fintech en Finanzas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Valoración de Empresas": "Valoración de Empresas en Finanzas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Internacionalización de MYPIMES": "Internacionalización de MYPIMES en Finanzas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Negociación en Mercados Internacionales": "Negociación en Mercados Internacionales en Finanzas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Riesgos Internacionales": "Riesgos Internacionales en Finanzas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Gerencia de Negocios Internacionales": "Gerencia de Negocios Internacionales en Finanzas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Visualización Avanzada de Datos": "Visualización Avanzada de Datos en Finanzas: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Analítica de Datos": "Analítica de Datos en Finanzas: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Aplicación de la Ciencia de Datos": "Aplicación de la Ciencia de Datos en Finanzas: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Dirección de Proyectos": "Dirección de Proyectos en Finanzas: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Inicio y Planiﬁcación del Proyecto": "Inicio y Planiﬁcación del Proyecto en Finanzas: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ejecución, Monitoreo, Control y Cierre del Proyecto": "Ejecución, Monitoreo, Control y Cierre del Proyecto en Finanzas: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Internacionalización de la Empresa",
              "subjects": [
                "Especialización I (Internacionalización)",
                "Especialización II (Internacionalización)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Ciencia de Datos con Aplicaciones Prácticas",
              "subjects": [
                "Especialización I (Ciencia de Datos con)",
                "Especialización II (Ciencia de Datos con)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Gestión de Proyectos (Project Management)",
              "subjects": [
                "Especialización I (Gestión de Proyectos)",
                "Especialización II (Gestión de Proyectos)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "marketing": {
        "name": "Marketing",
        "items": [
          6,
          15,
          24,
          33,
          42,
          51
        ],
        "pdf": "marketing-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Economía y Gestión Empresarial",
        "description": "Dominarás el comportamiento del consumidor, las estrategias de marketing digital, analítica web, branding experiencial y embudos de conversión para impulsar el crecimiento de marcas.",
        "fieldOfWork": "Dirección de marketing y ventas, agencias de growth marketing y publicidad, comercio electrónico (e-commerce), investigación de mercados y startups.",
        "skills": [
          "Marketing digital y SEO/SEM",
          "Estrategia de growth y embudos de ventas",
          "Psicología del consumidor",
          "Analítica de marketing y retorno (ROI)"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2600",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Hub",
            "highlight": "Growth",
            "title": "marketing digital",
            "bottomText": "Campañas reales con presupuestos de prueba"
          }
        ],
        "caseStudy": {
          "type": "matching",
          "title": "Embudo de Conversión en Comercio Electrónico",
          "scenario": "Una tienda digital de moda sostenible busca optimizar cada etapa del Customer Journey para mejorar sus ventas.",
          "description": "Relaciona cada etapa del embudo de marketing con la táctica correspondiente:",
          "leftItems": [
            {
              "id": "atraccion",
              "label": "Top of Funnel (Atracción)"
            },
            {
              "id": "consideracion",
              "label": "Middle of Funnel (Consideración)"
            },
            {
              "id": "conversion",
              "label": "Bottom of Funnel (Conversión)"
            }
          ],
          "rightItems": [
            {
              "id": "atraccion",
              "label": "Contenido educativo en TikTok e Instagram Reels sobre moda circular"
            },
            {
              "id": "consideracion",
              "label": "Email marketing con comparativas de calidad, guías de tallas y reseñas"
            },
            {
              "id": "conversion",
              "label": "Cupón de descuento por primera compra con checkout rápido en 1 clic"
            }
          ],
          "feedback": {
            "success": "¡Embudo de marketing altamente efectivo! Guiar al usuario desde la curiosidad hasta la fidelización maximiza el retorno sobre la inversión publicitaria.",
            "failure": "Revisa el flujo de decisión del cliente: primero se atrae con contenido de valor, luego se persuade con testimonios y finalmente se facilita el cierre."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Estadística I",
              "Fundamentos de Contabilidad de Costos",
              "Pensamiento Creativo e Innovación",
              "Optimización Aplicada a la Administración y Economía",
              "Introducción a la Macroeconomía"
            ],
            [
              "Valor y Branding",
              "Entrega del Valor",
              "Administración y Planiﬁcación Financiera",
              "Legislación Empresarial",
              "Ecología Integral",
              "Marketing Sostenible"
            ],
            [
              "Investigación de Marketing",
              "Diseño y Evaluación de Proyectos",
              "Jesucristo y Aprendizajes Vitales",
              "Estadística II",
              "Consumo y Neuromarketing",
              "Marketing y Ecosistema Digital"
            ],
            [
              "Ética e Interculturalidad",
              "Operaciones de Marketing y Ventas",
              "Comunicación Integral de Valor",
              "Herramientas de Marketing Digital",
              "Administración Estratégica",
              "Gestión del Talento Humano"
            ],
            [
              "Asignatura 2 de Itinerario",
              "Marketing Global",
              "Data Analytics Marketing",
              "Innovación y Creatividad para Start Ups",
              "Conocimiento, Palabra y Cambio Social",
              "Matemática I"
            ],
            [
              "Fundamentos de Administración",
              "Entorno Socioeconómico",
              "Introducción a la Microeconomía",
              "Integración Curricular",
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de Itinerario"
            ],
            [
              "Simulaciones de Marketing",
              "Growth Marketing",
              "Exploración de Datos",
              "Visualización Avanzada de Datos",
              "Analítica de Datos",
              "Aplicación de la Ciencia de Datos"
            ],
            [
              "Marketing Inbound y de Contenidos",
              "Experiencia del Cliente",
              "E-commerce y Social Selling",
              "Internacionalización de MYPIMES",
              "Negociación en Mercados Internacionales",
              "Riesgos Internacionales"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Marketing: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Estadística I": "Estadística I en Marketing: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Contabilidad de Costos": "Fundamentos de Contabilidad de Costos en Marketing: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Pensamiento Creativo e Innovación": "Pensamiento Creativo e Innovación en Marketing: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Optimización Aplicada a la Administración y Economía": "Optimización Aplicada a la Administración y Economía en Marketing: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Introducción a la Macroeconomía": "Introducción a la Macroeconomía en Marketing: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Valor y Branding": "Valor y Branding en Marketing: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Entrega del Valor": "Entrega del Valor en Marketing: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Administración y Planiﬁcación Financiera": "Administración y Planiﬁcación Financiera en Marketing: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Legislación Empresarial": "Legislación Empresarial en Marketing: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Marketing: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Marketing Sostenible": "Marketing Sostenible en Marketing: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Investigación de Marketing": "Investigación de Marketing en Marketing: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Diseño y Evaluación de Proyectos": "Diseño y Evaluación de Proyectos en Marketing: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Marketing: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Estadística II": "Estadística II en Marketing: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Consumo y Neuromarketing": "Consumo y Neuromarketing en Marketing: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Marketing y Ecosistema Digital": "Marketing y Ecosistema Digital en Marketing: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Marketing: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Operaciones de Marketing y Ventas": "Operaciones de Marketing y Ventas en Marketing: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Comunicación Integral de Valor": "Comunicación Integral de Valor en Marketing: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Herramientas de Marketing Digital": "Herramientas de Marketing Digital en Marketing: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Administración Estratégica": "Administración Estratégica en Marketing: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Gestión del Talento Humano": "Gestión del Talento Humano en Marketing: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de Itinerario": "Asignatura 2 de Itinerario en Marketing: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Marketing Global": "Marketing Global en Marketing: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Data Analytics Marketing": "Data Analytics Marketing en Marketing: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Innovación y Creatividad para Start Ups": "Innovación y Creatividad para Start Ups en Marketing: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Marketing: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Matemática I": "Matemática I en Marketing: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fundamentos de Administración": "Fundamentos de Administración en Marketing: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Entorno Socioeconómico": "Entorno Socioeconómico en Marketing: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Introducción a la Microeconomía": "Introducción a la Microeconomía en Marketing: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Marketing: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Marketing: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de Itinerario": "Asignatura 4 de Itinerario en Marketing: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Simulaciones de Marketing": "Simulaciones de Marketing en Marketing: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Growth Marketing": "Growth Marketing en Marketing: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Exploración de Datos": "Exploración de Datos en Marketing: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Visualización Avanzada de Datos": "Visualización Avanzada de Datos en Marketing: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Analítica de Datos": "Analítica de Datos en Marketing: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Aplicación de la Ciencia de Datos": "Aplicación de la Ciencia de Datos en Marketing: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Marketing Inbound y de Contenidos": "Marketing Inbound y de Contenidos en Marketing: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Experiencia del Cliente": "Experiencia del Cliente en Marketing: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "E-commerce y Social Selling": "E-commerce y Social Selling en Marketing: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Internacionalización de MYPIMES": "Internacionalización de MYPIMES en Marketing: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Negociación en Mercados Internacionales": "Negociación en Mercados Internacionales en Marketing: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Riesgos Internacionales": "Riesgos Internacionales en Marketing: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Ciencia de Datos con aplicaciones prácticas",
              "subjects": [
                "Especialización I (Ciencia de Datos con)",
                "Especialización II (Ciencia de Datos con)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Negocios Digitales",
              "subjects": [
                "Especialización I (Negocios Digitales)",
                "Especialización II (Negocios Digitales)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Internacionalización de la Empresa",
              "subjects": [
                "Especialización I (Internacionalización)",
                "Especialización II (Internacionalización)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "negocios_internacionales": {
        "name": "Negocios Internacionales",
        "items": [
          7,
          16,
          25,
          34,
          43,
          52
        ],
        "pdf": "negocios-internacionales-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Economía y Gestión Empresarial",
        "description": "Aprenderás a llevar empresas a mercados globales: importaciones, exportaciones, logística internacional, negociación intercultural y acuerdos de libre comercio.",
        "fieldOfWork": "Empresas exportadoras e importadoras, operadores logísticos internacionales, puertos y navieras, agencias de aduanas y cámaras binacionales de comercio.",
        "skills": [
          "Comercio exterior e Incoterms",
          "Logística y cadena de suministro global",
          "Negociación intercultural de negocios",
          "Derecho aduanero y tratados comerciales"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "34%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2600",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Red",
            "highlight": "Global",
            "title": "movilidad estudiantil",
            "bottomText": "Convenios con universidades de Asia, Europa y EE.UU."
          }
        ],
        "caseStudy": {
          "type": "matching",
          "title": "Estrategia de Exportación y Términos Comerciales (Incoterms)",
          "scenario": "Una empresa de flores ecuatorianas exporta 5.000 tallos de rosas preservadas a un importador en Hamburgo, Alemania.",
          "description": "Relaciona el término Incoterm con la asignación de riesgo y costo acordada:",
          "leftItems": [
            {
              "id": "fob",
              "label": "FOB (Free On Board - Puerto de Guayaquil)"
            },
            {
              "id": "cif",
              "label": "CIF (Cost, Insurance & Freight - Hamburgo)"
            },
            {
              "id": "ddp",
              "label": "DDP (Delivered Duty Paid - Bodega del comprador)"
            }
          ],
          "rightItems": [
            {
              "id": "fob",
              "label": "El exportador asume costos hasta cargar las cajas sobre el buque"
            },
            {
              "id": "cif",
              "label": "El exportador contrata flete marítimo y seguro hasta puerto alemán"
            },
            {
              "id": "ddp",
              "label": "El exportador asume todos los tributos aduaneros de importación en destino"
            }
          ],
          "feedback": {
            "success": "¡Dominio de los términos de comercio global! Seleccionar el Incoterm correcto delimita con exactitud responsabilidades y costos logísticos internacionales.",
            "failure": "Revisa la jerarquía de los Incoterms: FOB entrega en puerto origen, CIF cubre transporte y seguro marítimo, y DDP entrega con aranceles pagados en destino."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de Investigación",
              "Estadística I",
              "Fundamentos de Contabilidad de Costos",
              "Pensamiento Creativo e Innovación",
              "Optimización Aplicada a la Administración y Economía",
              "Introducción a la Macroeconomía"
            ],
            [
              "Investigación de Operaciones",
              "Transporte Internacional y Seguros",
              "Investigación de Mercados",
              "Administración y Planiﬁcación Financiera",
              "Ecología Integral",
              "International Supply Chain Management"
            ],
            [
              "Gestión de Exportaciones",
              "Diseño y Evaluación de Proyectos",
              "Jesucristo y Aprendizajes Vitales",
              "Gestión por Procesos",
              "Estadística II",
              "Legislación y Nomenclatura Aduanera"
            ],
            [
              "Ética e Interculturalidad",
              "Gestión del Talento Humano",
              "Strategic Management",
              "International Marketing",
              "Gestión de Importaciones",
              "Finanzas Corporativas"
            ],
            [
              "Asignatura 2 de itinerario",
              "Fair Trade and Social Responsibility",
              "Propiedad Intelectual y Contratación",
              "Comercio Exterior y Políticas Comerciales",
              "Conocimiento, Palabra y Cambio Social",
              "Matemática I"
            ],
            [
              "Fundamentos de Administración",
              "Entorno Socioeconómico",
              "Introducción a la Microeconomía",
              "Integración Curricular",
              "Asignatura 3 de itinerario",
              "Asignatura 4 de itinerario"
            ],
            [
              "Cross Cultural Management",
              "Relaciones Económicas Internacionales",
              "Exploración de Datos",
              "Visualización Avanzada de Datos",
              "Analítica de Datos",
              "Aplicación de la Ciencia de Datos"
            ],
            [
              "Negociación en Mercados Internacionales",
              "Riesgos Internacionales",
              "Gerencia de Negocios Internacionales",
              "Fundamentos y Actores de la Cooperación Internacional",
              "Foreign Aid and International Politics",
              "Modelos y Estrategias de Sostenibilidad"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de Investigación": "Fundamentos de Investigación en Negocios Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Estadística I": "Estadística I en Negocios Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Fundamentos de Contabilidad de Costos": "Fundamentos de Contabilidad de Costos en Negocios Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Pensamiento Creativo e Innovación": "Pensamiento Creativo e Innovación en Negocios Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Optimización Aplicada a la Administración y Economía": "Optimización Aplicada a la Administración y Economía en Negocios Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Introducción a la Macroeconomía": "Introducción a la Macroeconomía en Negocios Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Investigación de Operaciones": "Investigación de Operaciones en Negocios Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Transporte Internacional y Seguros": "Transporte Internacional y Seguros en Negocios Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Investigación de Mercados": "Investigación de Mercados en Negocios Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Administración y Planiﬁcación Financiera": "Administración y Planiﬁcación Financiera en Negocios Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Ecología Integral": "Ecología Integral en Negocios Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "International Supply Chain Management": "International Supply Chain Management en Negocios Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Gestión de Exportaciones": "Gestión de Exportaciones en Negocios Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Diseño y Evaluación de Proyectos": "Diseño y Evaluación de Proyectos en Negocios Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Negocios Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Gestión por Procesos": "Gestión por Procesos en Negocios Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Estadística II": "Estadística II en Negocios Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Legislación y Nomenclatura Aduanera": "Legislación y Nomenclatura Aduanera en Negocios Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Negocios Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Gestión del Talento Humano": "Gestión del Talento Humano en Negocios Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Strategic Management": "Strategic Management en Negocios Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "International Marketing": "International Marketing en Negocios Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Gestión de Importaciones": "Gestión de Importaciones en Negocios Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Finanzas Corporativas": "Finanzas Corporativas en Negocios Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 2 de itinerario": "Asignatura 2 de itinerario en Negocios Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Fair Trade and Social Responsibility": "Fair Trade and Social Responsibility en Negocios Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Propiedad Intelectual y Contratación": "Propiedad Intelectual y Contratación en Negocios Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Comercio Exterior y Políticas Comerciales": "Comercio Exterior y Políticas Comerciales en Negocios Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Negocios Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Matemática I": "Matemática I en Negocios Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Fundamentos de Administración": "Fundamentos de Administración en Negocios Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Entorno Socioeconómico": "Entorno Socioeconómico en Negocios Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Introducción a la Microeconomía": "Introducción a la Microeconomía en Negocios Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Integración Curricular": "Integración Curricular en Negocios Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Asignatura 3 de itinerario": "Asignatura 3 de itinerario en Negocios Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Asignatura 4 de itinerario": "Asignatura 4 de itinerario en Negocios Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Cross Cultural Management": "Cross Cultural Management en Negocios Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Relaciones Económicas Internacionales": "Relaciones Económicas Internacionales en Negocios Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Exploración de Datos": "Exploración de Datos en Negocios Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Visualización Avanzada de Datos": "Visualización Avanzada de Datos en Negocios Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Analítica de Datos": "Analítica de Datos en Negocios Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Aplicación de la Ciencia de Datos": "Aplicación de la Ciencia de Datos en Negocios Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Negociación en Mercados Internacionales": "Negociación en Mercados Internacionales en Negocios Internacionales: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Riesgos Internacionales": "Riesgos Internacionales en Negocios Internacionales: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Gerencia de Negocios Internacionales": "Gerencia de Negocios Internacionales en Negocios Internacionales: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fundamentos y Actores de la Cooperación Internacional": "Fundamentos y Actores de la Cooperación Internacional en Negocios Internacionales: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Foreign Aid and International Politics": "Foreign Aid and International Politics en Negocios Internacionales: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Modelos y Estrategias de Sostenibilidad": "Modelos y Estrategias de Sostenibilidad en Negocios Internacionales: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Ciencia de Datos con aplicaciones prácticas",
              "subjects": [
                "Especialización I (Ciencia de Datos con)",
                "Especialización II (Ciencia de Datos con)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Internacionalización de la Empresa",
              "subjects": [
                "Especialización I (Internacionalización)",
                "Especialización II (Internacionalización)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Captación y Manejo de Recursos Internacionales",
              "subjects": [
                "Especialización I (Captación y Manejo d)",
                "Especialización II (Captación y Manejo d)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "fpe": {
        "name": "Filosofía, Política y Economía (FPE)",
        "items": [
          8,
          17,
          26,
          35,
          44,
          53
        ],
        "pdf": "filosofia-politica-economia_202411.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Economía y Gestión Empresarial",
        "description": "Inspirada en el prestigioso programa de Oxford, esta carrera de élite integra el rigor económico, el análisis de poder y políticas públicas, y la fundamentación ética y filosófica para formar estadistas y líderes globales.",
        "fieldOfWork": "Presidencia, ministerios y altas consejerías de Estado, organismos internacionales (ONU, BM), centros de pensamiento (think tanks) y dirección de asuntos públicos.",
        "skills": [
          "Análisis integral de políticas públicas",
          "Economía política y teoría institucional",
          "Debate ético y argumentación estratégica",
          "Geopolítica y gobernanza democrática"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$3950",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Formato",
            "highlight": "Oxford",
            "title": "programa interdisciplinario",
            "bottomText": "Único en el país con enfoque tripartito"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Evaluación Integral de una Reforma de Pensiones y Seguridad Social",
          "scenario": "El sistema previsional enfrenta un déficit actuarial proyectado para los próximos 15 años debido al envejecimiento demográfico.",
          "description": "Como asesor(a) de gobierno FPE, evalúa la política pública integrando ética, economía y gobernabilidad política:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Qué paquete de reformas conjuga sostenibilidad financiera con equidad social y viabilidad política?",
              "options": [
                {
                  "text": "Un modelo mixto tripartito con pensión básica universal no contributiva garantizada por impuestos progresivos, incentivos al ahorro voluntario e incremento gradual de edad vinculado a expectativa de vida.",
                  "next": "success"
                },
                {
                  "text": "Eliminar de inmediato todas las pensiones de los jubilados actuales sin compensación para equilibrar las cuentas fiscales del mes.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Visión estadista integral FPE! Armonizaste la disciplina fiscal con la protección ética de los más vulnerables y la legitimidad democrática indispensable para reformas estructurales.",
            "failure": "Esa medida vulnera derechos adquiridos básicos, desata un estallido social incontrolable y contradice los principios éticos y jurídicos fundamentales del estado social."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Ciencia de Datos",
              "Estética y Política",
              "Derechos Humanos",
              "Economía Política I",
              "Seminario I: Problemas contemporáneos de la ética",
              "Epistemología y Pensamiento Crítico"
            ],
            [
              "Filosofía Política",
              "Filosofía de la Tecnología",
              "Seminario III: Filosofía de la Ciencia",
              "Antropología Filosóﬁca",
              "Jesucristo y Aprendizajes Vitales",
              "Métodos Cualitativos de Investigación"
            ],
            [
              "Sector Financiero y Economía Financiera",
              "Lógica",
              "Sostenibilidad Ambiental",
              "Economía del Desarrollo",
              "Economía Internacional",
              "Economía Política II"
            ],
            [
              "Seminario de Titulación",
              "Asignatura 1 de Itinerario",
              "Asignatura 2 de itinerario",
              "Fundamentos de la Interdisciplinariedad",
              "Pensamiento Económico",
              "Principios de Consultoría"
            ],
            [
              "Asignatura 3 de Itinerario",
              "Asignatura 4 de itinerario",
              "Taller interdisciplinar I: Crisis Sociales",
              "Taller interdisciplinar II: Justicia, Diversidades y Desigualdades",
              "Taller interdisciplinar III: Tecnología, Ambiente y Antropoceno",
              "Conocimiento, Palabra y Cambio Social"
            ],
            [
              "Matemática I",
              "Teoría Social",
              "Introducción a la Filosofía",
              "Historia del Pensamiento I",
              "Fundamentos de Investigación",
              "Introducción a la Macroeconomía"
            ],
            [
              "Teoría del Estado",
              "Introducción a la Ética",
              "Historia del Pensamiento II",
              "Exploración de Datos",
              "Visualización Avanzada de Datos",
              "Analítica de Datos"
            ],
            [
              "Neuroeducación",
              "Estrategias didácticas innovadoras",
              "Interaprendizaje y diseño de recursos didácticos",
              "Evaluación de los aprendizajes",
              "Estado y Sociedad",
              "Marcos Analíticos de Políticas Públicas"
            ]
          ],
          "subjectDetails": {
            "Ciencia de Datos": "Ciencia de Datos en Filosofía, Política y Economía (FPE): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Estética y Política": "Estética y Política en Filosofía, Política y Economía (FPE): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Derechos Humanos": "Derechos Humanos en Filosofía, Política y Economía (FPE): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Economía Política I": "Economía Política I en Filosofía, Política y Economía (FPE): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Seminario I: Problemas contemporáneos de la ética": "Seminario I: Problemas contemporáneos de la ética en Filosofía, Política y Economía (FPE): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Epistemología y Pensamiento Crítico": "Epistemología y Pensamiento Crítico en Filosofía, Política y Economía (FPE): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Filosofía Política": "Filosofía Política en Filosofía, Política y Economía (FPE): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Filosofía de la Tecnología": "Filosofía de la Tecnología en Filosofía, Política y Economía (FPE): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Seminario III: Filosofía de la Ciencia": "Seminario III: Filosofía de la Ciencia en Filosofía, Política y Economía (FPE): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Antropología Filosóﬁca": "Antropología Filosóﬁca en Filosofía, Política y Economía (FPE): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Jesucristo y Aprendizajes Vitales": "Jesucristo y Aprendizajes Vitales en Filosofía, Política y Economía (FPE): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Métodos Cualitativos de Investigación": "Métodos Cualitativos de Investigación en Filosofía, Política y Economía (FPE): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Sector Financiero y Economía Financiera": "Sector Financiero y Economía Financiera en Filosofía, Política y Economía (FPE): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Lógica": "Lógica en Filosofía, Política y Economía (FPE): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Sostenibilidad Ambiental": "Sostenibilidad Ambiental en Filosofía, Política y Economía (FPE): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Economía del Desarrollo": "Economía del Desarrollo en Filosofía, Política y Economía (FPE): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Economía Internacional": "Economía Internacional en Filosofía, Política y Economía (FPE): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Economía Política II": "Economía Política II en Filosofía, Política y Economía (FPE): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Seminario de Titulación": "Seminario de Titulación en Filosofía, Política y Economía (FPE): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Asignatura 1 de Itinerario": "Asignatura 1 de Itinerario en Filosofía, Política y Economía (FPE): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Asignatura 2 de itinerario": "Asignatura 2 de itinerario en Filosofía, Política y Economía (FPE): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Fundamentos de la Interdisciplinariedad": "Fundamentos de la Interdisciplinariedad en Filosofía, Política y Economía (FPE): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Pensamiento Económico": "Pensamiento Económico en Filosofía, Política y Economía (FPE): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Principios de Consultoría": "Principios de Consultoría en Filosofía, Política y Economía (FPE): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Asignatura 3 de Itinerario": "Asignatura 3 de Itinerario en Filosofía, Política y Economía (FPE): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Asignatura 4 de itinerario": "Asignatura 4 de itinerario en Filosofía, Política y Economía (FPE): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Taller interdisciplinar I: Crisis Sociales": "Taller interdisciplinar I: Crisis Sociales en Filosofía, Política y Economía (FPE): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Taller interdisciplinar II: Justicia, Diversidades y Desigualdades": "Taller interdisciplinar II: Justicia, Diversidades y Desigualdades en Filosofía, Política y Economía (FPE): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Taller interdisciplinar III: Tecnología, Ambiente y Antropoceno": "Taller interdisciplinar III: Tecnología, Ambiente y Antropoceno en Filosofía, Política y Economía (FPE): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Filosofía, Política y Economía (FPE): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Matemática I": "Matemática I en Filosofía, Política y Economía (FPE): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Teoría Social": "Teoría Social en Filosofía, Política y Economía (FPE): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Introducción a la Filosofía": "Introducción a la Filosofía en Filosofía, Política y Economía (FPE): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Historia del Pensamiento I": "Historia del Pensamiento I en Filosofía, Política y Economía (FPE): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Fundamentos de Investigación": "Fundamentos de Investigación en Filosofía, Política y Economía (FPE): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Introducción a la Macroeconomía": "Introducción a la Macroeconomía en Filosofía, Política y Economía (FPE): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Teoría del Estado": "Teoría del Estado en Filosofía, Política y Economía (FPE): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Introducción a la Ética": "Introducción a la Ética en Filosofía, Política y Economía (FPE): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Historia del Pensamiento II": "Historia del Pensamiento II en Filosofía, Política y Economía (FPE): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Exploración de Datos": "Exploración de Datos en Filosofía, Política y Economía (FPE): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Visualización Avanzada de Datos": "Visualización Avanzada de Datos en Filosofía, Política y Economía (FPE): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Analítica de Datos": "Analítica de Datos en Filosofía, Política y Economía (FPE): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Neuroeducación": "Neuroeducación en Filosofía, Política y Economía (FPE): Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Estrategias didácticas innovadoras": "Estrategias didácticas innovadoras en Filosofía, Política y Economía (FPE): Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Interaprendizaje y diseño de recursos didácticos": "Interaprendizaje y diseño de recursos didácticos en Filosofía, Política y Economía (FPE): Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Evaluación de los aprendizajes": "Evaluación de los aprendizajes en Filosofía, Política y Economía (FPE): Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Estado y Sociedad": "Estado y Sociedad en Filosofía, Política y Economía (FPE): Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Marcos Analíticos de Políticas Públicas": "Marcos Analíticos de Políticas Públicas en Filosofía, Política y Economía (FPE): Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario: Ciencia de Datos con Aplicaciones Prácticas",
              "subjects": [
                "Especialización I (Ciencia de Datos con)",
                "Especialización II (Ciencia de Datos con)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: Pedagogía para el Aprendizaje Activo",
              "subjects": [
                "Especialización I (Pedagogía para el Ap)",
                "Especialización II (Pedagogía para el Ap)",
                "Práctica Profesional de Mención"
              ]
            },
            {
              "name": "Itinerario: 7",
              "subjects": [
                "Especialización I (7)",
                "Especialización II (7)",
                "Práctica Profesional de Mención"
              ]
            }
          ]
        }
      },
      "psicologia_organizacional": {
        "name": "Psicología Organizacional",
        "items": [
          9,
          18,
          27,
          36,
          45,
          54
        ],
        "pdf": "psicologia-organizacional-202401.pdf",
        "semesters_count": 8,
        "faculty": "Facultad de Economía y Gestión Empresarial / Psicología",
        "description": "Potenciarás el bienestar humano y la productividad en las empresas: gestión del talento, liderazgo, diseño de cultura corporativa, reclutamiento por competencias y prevención de riesgos psicosociales.",
        "fieldOfWork": "Gerencias de Talento Humano y People & Culture, consultoras de selección de ejecutivos (headhunting), desarrollo organizacional y bienestar laboral.",
        "skills": [
          "Selección de talento por competencias",
          "Diagnóstico de clima y cultura laboral",
          "Evaluación de desempeño y compensaciones",
          "Gestión del cambio y liderazgo ágil"
        ],
        "benefits": [
          {
            "topText": "Descuento",
            "highlight": "27%",
            "title": "sobre aranceles",
            "bottomText": "Precio sin descuento: $3950"
          },
          {
            "topText": "Inversión",
            "highlight": "$2900",
            "title": "por semestre",
            "bottomText": "8 semestres presenciales"
          },
          {
            "topText": "Liderazgo",
            "highlight": "People",
            "title": "& Culture",
            "bottomText": "Alta demanda en empresas de tecnología y banca"
          }
        ],
        "caseStudy": {
          "type": "decision",
          "title": "Transformación del Clima Laboral y Retención de Talento",
          "scenario": "Una empresa de tecnología reporta una rotación de desarrolladores del 35% anual por agotamiento (burnout) y falta de reconocimiento.",
          "description": "Como Gerente de People & Culture, diseñas la estrategia de retención:",
          "steps": [
            {
              "id": "step1",
              "question": "¿Cuál es la intervención organizacional más efectiva y sostenible?",
              "options": [
                {
                  "text": "Auditar cargas de trabajo, implementar esquemas híbridos flexibles, planes de carrera claros y programas de apoyo a la salud mental y feedback continuo.",
                  "next": "success"
                },
                {
                  "text": "Instalar cámaras de vigilancia sobre los escritorios y prohibir que los empleados conversen entre ellos.",
                  "next": "failure"
                }
              ]
            }
          ],
          "feedback": {
            "success": "¡Liderazgo humano y estratégico! El bienestar psicosocial, la autonomía y el desarrollo profesional reducen drásticamente la rotación y elevan el compromiso y la innovación.",
            "failure": "El micromanagement y el control punitivo incrementan el estrés tóxico, destruyen la confianza y aceleran la renuncia de los mejores profesionales."
          }
        },
        "syllabus": {
          "semesters": [
            [
              "Fundamentos de la investigación",
              "Historia de la Psicología",
              "Neuroanatomía y Psicoﬁsiología",
              "Conducción de Grupos",
              "Epistemología de la Psicología",
              "Salud y Grupos prioritarios (Diversidad)"
            ],
            [
              "Enfoques Psicológicos Contemporá- neos",
              "Psicología del Desarrollo de la",
              "Psicometría",
              "Técnicas de entrevista",
              "Evaluación Psicológica",
              "Ecología Integral"
            ],
            [
              "Consejería y Asesoría Familiar",
              "Gestión Administrativa e Institucional",
              "Atracción, Selección y Retención de Talento Humano",
              "Psicología y Comportamiento Organizacional",
              "Jesucristo y Aprendizaje Vital",
              "Enfoques Psicológicos"
            ],
            [
              "Psicología del Desarrollo de la Niñez",
              "Psicología Social",
              "Estadística aplicada a la Psicología",
              "Ética e Interculturalidad",
              "Psicología Comunitaria",
              "Psicopatología lI"
            ],
            [
              "Neuroaprendizaje",
              "Evaluación Psicológica Especializada",
              "Formación y Desarrollo",
              "Sexualidad, Género y Cultura",
              "Informática Aplicada en Psicología",
              "Intervención Psicosocial y Derechos Humanos"
            ],
            [
              "Conocimiento, Palabra y Cambio Social",
              "Salud: Contexto Nacional e Internacional",
              "Comportamiento Humano y Procesos Psicológicos",
              "Primero Auxilios y Bioseguridad Básica",
              "Fundamentos de Morfofunción",
              "One Health y Salud Holística/Ancestral"
            ],
            [
              "Seminario de Titulación",
              "Primeros Auxilios Psicológicos",
              "Deontología y Ética profesional",
              "Bienestar y Salud Laboral",
              "Gestión del Cambio y Transformación Digital",
              "Prácticas Pre-profesionales ll"
            ],
            [
              "Integración Curricular",
              "Metodología Cualitativa en Psicología",
              "Metodología Cuantitativa en Psicología",
              "Soft Skills For Psychology",
              "Gestión de la Compensación",
              "Liderazgo y Comunicación Organizacional 27%"
            ]
          ],
          "subjectDetails": {
            "Fundamentos de la investigación": "Fundamentos de la investigación en Psicología Organizacional: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Historia de la Psicología": "Historia de la Psicología en Psicología Organizacional: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Neuroanatomía y Psicoﬁsiología": "Neuroanatomía y Psicoﬁsiología en Psicología Organizacional: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Conducción de Grupos": "Conducción de Grupos en Psicología Organizacional: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Epistemología de la Psicología": "Epistemología de la Psicología en Psicología Organizacional: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Salud y Grupos prioritarios (Diversidad)": "Salud y Grupos prioritarios (Diversidad) en Psicología Organizacional: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Enfoques Psicológicos Contemporá- neos": "Enfoques Psicológicos Contemporá- neos en Psicología Organizacional: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Psicología del Desarrollo de la": "Psicología del Desarrollo de la en Psicología Organizacional: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Psicometría": "Psicometría en Psicología Organizacional: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Técnicas de entrevista": "Técnicas de entrevista en Psicología Organizacional: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Evaluación Psicológica": "Evaluación Psicológica en Psicología Organizacional: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Ecología Integral": "Ecología Integral en Psicología Organizacional: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Consejería y Asesoría Familiar": "Consejería y Asesoría Familiar en Psicología Organizacional: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Gestión Administrativa e Institucional": "Gestión Administrativa e Institucional en Psicología Organizacional: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Atracción, Selección y Retención de Talento Humano": "Atracción, Selección y Retención de Talento Humano en Psicología Organizacional: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Psicología y Comportamiento Organizacional": "Psicología y Comportamiento Organizacional en Psicología Organizacional: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Jesucristo y Aprendizaje Vital": "Jesucristo y Aprendizaje Vital en Psicología Organizacional: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Enfoques Psicológicos": "Enfoques Psicológicos en Psicología Organizacional: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Psicología del Desarrollo de la Niñez": "Psicología del Desarrollo de la Niñez en Psicología Organizacional: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Psicología Social": "Psicología Social en Psicología Organizacional: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Estadística aplicada a la Psicología": "Estadística aplicada a la Psicología en Psicología Organizacional: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Ética e Interculturalidad": "Ética e Interculturalidad en Psicología Organizacional: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Psicología Comunitaria": "Psicología Comunitaria en Psicología Organizacional: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Psicopatología lI": "Psicopatología lI en Psicología Organizacional: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Neuroaprendizaje": "Neuroaprendizaje en Psicología Organizacional: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Evaluación Psicológica Especializada": "Evaluación Psicológica Especializada en Psicología Organizacional: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Formación y Desarrollo": "Formación y Desarrollo en Psicología Organizacional: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Sexualidad, Género y Cultura": "Sexualidad, Género y Cultura en Psicología Organizacional: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Informática Aplicada en Psicología": "Informática Aplicada en Psicología en Psicología Organizacional: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Intervención Psicosocial y Derechos Humanos": "Intervención Psicosocial y Derechos Humanos en Psicología Organizacional: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Conocimiento, Palabra y Cambio Social": "Conocimiento, Palabra y Cambio Social en Psicología Organizacional: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Salud: Contexto Nacional e Internacional": "Salud: Contexto Nacional e Internacional en Psicología Organizacional: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Comportamiento Humano y Procesos Psicológicos": "Comportamiento Humano y Procesos Psicológicos en Psicología Organizacional: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Primero Auxilios y Bioseguridad Básica": "Primero Auxilios y Bioseguridad Básica en Psicología Organizacional: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Fundamentos de Morfofunción": "Fundamentos de Morfofunción en Psicología Organizacional: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "One Health y Salud Holística/Ancestral": "One Health y Salud Holística/Ancestral en Psicología Organizacional: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Seminario de Titulación": "Seminario de Titulación en Psicología Organizacional: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Primeros Auxilios Psicológicos": "Primeros Auxilios Psicológicos en Psicología Organizacional: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Deontología y Ética profesional": "Deontología y Ética profesional en Psicología Organizacional: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Bienestar y Salud Laboral": "Bienestar y Salud Laboral en Psicología Organizacional: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Gestión del Cambio y Transformación Digital": "Gestión del Cambio y Transformación Digital en Psicología Organizacional: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Prácticas Pre-profesionales ll": "Prácticas Pre-profesionales ll en Psicología Organizacional: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario.",
            "Integración Curricular": "Integración Curricular en Psicología Organizacional: Desarrolla las destrezas fundamentales de análisis, investigación y método práctico para la profesión.",
            "Metodología Cualitativa en Psicología": "Metodología Cualitativa en Psicología en Psicología Organizacional: Aprende los modelos conceptuales, técnicas de campo y resolución de problemas reales del área.",
            "Metodología Cuantitativa en Psicología": "Metodología Cuantitativa en Psicología en Psicología Organizacional: Aplica metodologías avanzadas, herramientas computacionales y experimentación guiada.",
            "Soft Skills For Psychology": "Soft Skills For Psychology en Psicología Organizacional: Integra criterios éticos, normativos y de sostenibilidad para la práctica profesional.",
            "Gestión de la Compensación": "Gestión de la Compensación en Psicología Organizacional: Ejecuta proyectos integradores con retroalimentación de docentes y profesionales en activo.",
            "Liderazgo y Comunicación Organizacional 27%": "Liderazgo y Comunicación Organizacional 27% en Psicología Organizacional: Asignatura clave para consolidar competencias técnicas y trabajo multidisciplinario."
          },
          "itineraries": [
            {
              "name": "Itinerario I: Innovación y Emprendimiento",
              "subjects": [
                "Modelos de Negocio",
                "Innovación Aplicada",
                "Proyectos de Impacto"
              ]
            },
            {
              "name": "Itinerario II: Investigación Aplicada",
              "subjects": [
                "Metodologías Avanzadas",
                "Seminario de Investigación",
                "Publicación Científica"
              ]
            }
          ]
        }
      }
    },
    "questions": [
      {
        "id": 1,
        "text": "¿Te interesa planificar estrategias de crecimiento corporativo, optimizar recursos operativos y liderar la toma de decisiones gerenciales?"
      },
      {
        "id": 2,
        "text": "¿Te apasiona la gestión hotelera, el desarrollo de productos turísticos sostenibles y la administración de experiencias de viaje de calidad?"
      },
      {
        "id": 3,
        "text": "¿Sientes inclinación por la estructura de los sistemas contables, el cálculo tributario, la auditoría forense y las normas financieras internacionales?"
      },
      {
        "id": 4,
        "text": "¿Te motiva analizar el impacto de las políticas fiscales, las tasas de interés, la inflación y los modelos macroeconómicos en el bienestar social?"
      },
      {
        "id": 5,
        "text": "¿Te atrae la valoración de instrumentos de renta fija y variable, la gestión de carteras de inversión y la estructuración financiera de proyectos?"
      },
      {
        "id": 6,
        "text": "¿Te entusiasma diseñar campañas de posicionamiento de marca, analizar el comportamiento del consumidor y gestionar estrategias de marketing digital?"
      },
      {
        "id": 7,
        "text": "¿Te visualizas negociando acuerdos comerciales internacionales, coordinando logística aduanera e identificando oportunidades en mercados globales?"
      },
      {
        "id": 8,
        "text": "¿Te motiva el análisis interdisciplinario de las políticas de Estado, articulando el rigor económico con la ética del poder y las instituciones democráticas?"
      },
      {
        "id": 9,
        "text": "¿Te interesa diagnosticar el clima laboral, diseñar planes de carrera y liderar la gestión del talento humano y People & Culture en las empresas?"
      },
      {
        "id": 10,
        "text": "¿Te ves formulando planes de negocio para startups innovadoras y liderando equipos multidisciplinarios hacia metas de rentabilidad?"
      },
      {
        "id": 11,
        "text": "¿Te gustaría diseñar circuitos turísticos comunitarios que preserven el patrimonio cultural y la biodiversidad de reservas naturales?"
      },
      {
        "id": 12,
        "text": "¿Te interesa auditar los estados financieros de grandes corporaciones para certificar su razonabilidad y prevenir fraudes económicos?"
      },
      {
        "id": 13,
        "text": "¿Te gustaría construir modelos econométricos para proyectar el crecimiento del PIB, el desempleo y la balanza de pagos de un país?"
      },
      {
        "id": 14,
        "text": "¿Te atrae evaluar el riesgo crediticio y estructurar fusiones y adquisiciones (M&A) en la banca de inversión corporativa?"
      },
      {
        "id": 15,
        "text": "¿Disfrutas creando embudos de conversión, analítica web y estrategias de 'growth marketing' para acelerar ventas en e-commerce?"
      },
      {
        "id": 16,
        "text": "¿Te ves gestionando cadenas de suministro globales, negociando fletes marítimos internacionales y aplicando la normativa Incoterms?"
      },
      {
        "id": 17,
        "text": "¿Te gustaría asesorar a gobiernos u organismos multilaterales en el diseño ético y económico de reformas sociales y tributarias?"
      },
      {
        "id": 18,
        "text": "¿Te llama la atención aplicar evaluaciones de competencias laborales y metodologías ágiles para potenciar la productividad y bienestar de los equipos?"
      },
      {
        "id": 19,
        "text": "¿Te interesa implementar metodologías ágiles de gestión de proyectos (Scrum, Kanban) para acelerar la innovación corporativa?"
      },
      {
        "id": 20,
        "text": "¿Te ves dirigiendo la operación de hoteles de lujo o resorts ecológicos con estándares internacionales de hospitalidad?"
      },
      {
        "id": 21,
        "text": "¿Te gustaría especializarte en consultoría tributaria para optimizar la carga fiscal corporativa dentro del estricto marco de la ley?"
      },
      {
        "id": 22,
        "text": "¿Te apasiona la economía del comportamiento para entender cómo las emociones y sesgos cognitivos influyen en las decisiones de compra?"
      },
      {
        "id": 23,
        "text": "¿Te visualizas operando en terminales bursátiles (como Bloomberg) analizando tendencias de divisas, derivados financieros y commodities?"
      },
      {
        "id": 24,
        "text": "¿Te entusiasma la investigación de mercados cualitativa y cuantitativa para descubrir 'insights' ocultos del consumidor?"
      },
      {
        "id": 25,
        "text": "¿Te gustaría asesorar a pequeñas y medianas empresas para internacionalizarse e ingresar con éxito a la Unión Europea o Asia?"
      },
      {
        "id": 26,
        "text": "¿Te atrae el debate sobre la justicia distributiva, la teoría de juegos y los dilemas éticos que plantea la concentración económica moderna?"
      },
      {
        "id": 27,
        "text": "¿Te visualizas creando programas de prevención del agotamiento laboral (burnout) y promoviendo la inclusión y diversidad en el trabajo?"
      },
      {
        "id": 28,
        "text": "¿Te imaginas asumiendo la gerencia general de una corporación o fundando tu propia empresa de impacto social y económico?"
      },
      {
        "id": 29,
        "text": "¿Te motiva formular planes estratégicos de desarrollo turístico nacional para posicionar al Ecuador como destino de clase mundial?"
      },
      {
        "id": 30,
        "text": "¿Te ves liderando la implementación de sistemas ERP (como SAP u Oracle) para la consolidación contable de empresas multilatinas?"
      },
      {
        "id": 31,
        "text": "¿Te gustaría evaluar el impacto social y distributivo de subsidios estatales mediante técnicas estadísticas de vanguardia?"
      },
      {
        "id": 32,
        "text": "¿Te interesa el ecosistema del 'Venture Capital' y la valoración financiera de startups de base tecnológica (Fintech, Edtech, Biotech)?"
      },
      {
        "id": 33,
        "text": "¿Te atrae la dirección creativa publicitaria, coordinando el 'storytelling' de marcas para conectar con nuevas generaciones?"
      },
      {
        "id": 34,
        "text": "¿Te gustaría dirigir operaciones portuarias y aduaneras agilizando el flujo de mercancías entre continentes?"
      },
      {
        "id": 35,
        "text": "¿Te ves liderando think tanks políticos o coordinando gabinetes estratégicos ministeriales con visión de estadista?"
      },
      {
        "id": 36,
        "text": "¿Te motiva liderar procesos de selección de alta gerencia (headhunting) y transformación cultural hacia liderazgos colaborativos?"
      },
      {
        "id": 37,
        "text": "¿Te interesa la gestión de riesgos empresariales y el diseño de planes de contingencia operativa ante crisis de mercado?"
      },
      {
        "id": 38,
        "text": "¿Te atrae el diseño de experiencias gastronómicas y enoturísticas que pongan en valor las tradiciones culinarias ancestrales?"
      },
      {
        "id": 39,
        "text": "¿Te gustaría desempeñarte como perito contable judicial en la investigación y esclarecimiento de delitos de cuello blanco?"
      },
      {
        "id": 40,
        "text": "¿Te ves investigando en banca central sobre la adopción de monedas digitales emitidas por bancos centrales (CBDC)?"
      },
      {
        "id": 41,
        "text": "¿Te gustaría gestionar carteras de fondos mutuos o fideicomisos inmobiliarios maximizando la relación rentabilidad/riesgo?"
      },
      {
        "id": 42,
        "text": "¿Te apasiona la analítica de redes sociales, el marketing de influencers y la optimización de pauta digital mediante inteligencia artificial?"
      },
      {
        "id": 43,
        "text": "¿Te visualizas negociando tratados de libre comercio en rondas internacionales defendiendo los intereses productivos de tu país?"
      },
      {
        "id": 44,
        "text": "¿Te interesa analizar cómo las instituciones políticas y los marcos regulatorios condicionan el progreso económico de las naciones?"
      },
      {
        "id": 45,
        "text": "¿Te ves facilitando talleres de coaching ejecutivo y mediación de conflictos en equipos de alto rendimiento corporativo?"
      },
      {
        "id": 46,
        "text": "¿Te visualizas aplicando los principios de la economía circular para transformar modelos de negocio hacia el residuo cero?"
      },
      {
        "id": 47,
        "text": "¿Te gustaría emprender tu propia agencia boutique de turismo de aventura o expediciones de lujo en áreas protegidas?"
      },
      {
        "id": 48,
        "text": "¿Te imaginas como Director de Auditoría Interna de un banco garantizando la transparencia y cumplimiento de normativas globales?"
      },
      {
        "id": 49,
        "text": "¿Te gustaría publicar columnas de opinión económica y análisis en medios de comunicación influyentes o revistas indexadas?"
      },
      {
        "id": 50,
        "text": "¿Te ves estructurando emisiones de bonos verdes y sostenibles en el mercado de valores para financiar proyectos ecológicos?"
      },
      {
        "id": 51,
        "text": "¿Te imaginas como Chief Marketing Officer (CMO) de una marca global liderando su expansión en mercados emergentes?"
      },
      {
        "id": 52,
        "text": "¿Te atrae liderar la diplomacia comercial y la apertura de oficinas comerciales en el exterior para promover exportaciones?"
      },
      {
        "id": 53,
        "text": "¿Te imaginas ejerciendo el servicio público con sólida fundamentación filosófica, económica y política al más alto nivel?"
      },
      {
        "id": 54,
        "text": "¿Te visualizas como Chief People Officer transformando las organizaciones en lugares de trabajo humanos, innovadores y felices?"
      }
    ]
  }
};
