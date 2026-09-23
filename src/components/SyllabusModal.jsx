import React, { useState, useMemo } from 'react';
import { X, BookOpen, Layers } from 'lucide-react';

const getDefaultSyllabus = (career = 'la Carrera') => {
  return {
    semesters: [
      ['Fundamentos de Investigación', 'Matemática I', `Introducción a ${career}`, 'Comunicación Oral y Escrita', 'Ética y Ciudadanía'],
      ['Estadística I', 'Pensamiento Creativo e Innovación', 'Fundamentos Teóricos', `Metodología Aplicada a ${career}`, 'Jesucristo y Aprendizajes Vitales'],
      ['Estadística II', `Teorías y Modelos de ${career}`, 'Herramientas Digitales y Datos', 'Ecología Integral', 'Ética e Interculturalidad'],
      ['Modelamiento Profesional', 'Métodos Cuantitativos y Cualitativos', 'Legislación y Regulación', 'Gestión de Procesos'],
      ['Planificación y Liderazgo', `Asignatura Avanzada I de ${career}`, 'Diseño de Proyectos de Innovación', 'Administración de Recursos'],
      ['Prácticas Preprofesionales I', `Asignatura Avanzada II de ${career}`, 'Evaluación y Sostenibilidad', 'Control y Calidad'],
      ['Seminario de Titulación I', 'Prácticas Preprofesionales II', 'Asignatura 1 de Itinerario', 'Asignatura 2 de Itinerario'],
      ['Conocimiento, Palabra y Cambio Social', 'Integración Curricular (Titulación)', 'Asignatura 3 de Itinerario', 'Asignatura 4 de Itinerario']
    ],
    subjectDetails: {
      [`Introducción a ${career}`]: `Conocerás las bases fundamentales, la historia y todo lo que hace un profesional de ${career}.`,
      'Fundamentos de Investigación': 'Aprenderás a buscar información confiable, analizar datos y elaborar proyectos científicos.',
      'Pensamiento Creativo e Innovación': 'Técnicas prácticas para idear soluciones creativas a problemas reales de personas y empresas.',
      'Ecología Integral': 'Comprenderás cómo cuidar el medio ambiente y promover la sostenibilidad en tu profesión.'
    },
    itineraries: [
      {
        name: 'Innovación y Transformación Digital',
        subjects: ['Tecnologías Emergentes', 'Analítica de Datos', 'Modelos Digitales', 'Gestión de Proyectos']
      },
      {
        name: 'Sostenibilidad y Gestión de Impacto',
        subjects: ['Desarrollo Sostenible', 'Impacto Social', 'Ética Corporativa', 'Proyectos con la Comunidad']
      }
    ]
  };
};

export default function SyllabusModal({ isOpen, onClose, careerName, syllabus }) {
  const [hoveredSubject, setHoveredSubject] = useState(null);

  const effectiveSyllabus = useMemo(() => {
    if (syllabus && Array.isArray(syllabus.semesters) && syllabus.semesters.length > 0) {
      return syllabus;
    }
    return getDefaultSyllabus(careerName || 'la Carrera');
  }, [syllabus, careerName]);

  if (!isOpen) return null;

  const handleMouseEnter = (e, subject, semesterNum) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const isRightHalf = rect.left + rect.width / 2 > window.innerWidth / 2;
    
    // Position to left or right of the hovered item
    const left = isRightHalf ? Math.max(12, rect.left - 290) : Math.min(window.innerWidth - 290, rect.right + 10);
    const top = Math.max(16, Math.min(rect.top - 6, window.innerHeight - 200));

    const desc = effectiveSyllabus.subjectDetails?.[subject] || 
      'Materia formativa orientada a desarrollar habilidades prácticas, conocimientos clave y criterio profesional.';

    setHoveredSubject({
      name: subject,
      semesterNum,
      desc,
      top,
      left
    });
  };

  const handleMouseLeave = () => {
    setHoveredSubject(null);
  };

  return (
    <div 
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-[200] flex items-center justify-center p-4 pt-10 pb-8 sm:p-8 sm:pt-14 sm:pb-10 md:pt-16 md:pb-12 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[2px] shadow-2xl w-full max-w-6xl max-h-[85vh] flex flex-col relative border border-slate-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Institucional PUCE (Sharp / Minimalista) */}
        <div className="px-8 sm:px-12 md:px-14 pt-7 pb-5 sm:pt-9 sm:pb-6 border-b border-slate-100 flex items-center justify-between gap-4 shrink-0 bg-white">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#003b81] tracking-tight leading-tight">
              {careerName || 'Carrera Universitaria'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-2 mt-2 font-normal">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a8cc] shrink-0"></span>
              Pasa el cursor sobre cualquier materia para ver de qué se trata en detalle
            </p>
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-[2px] bg-slate-100 hover:bg-[#003b81] hover:text-white flex items-center justify-center text-slate-600 transition-colors shrink-0 ml-4"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Contenido: 3 Niveles por fila con respiro generoso y scroll vertical */}
        <div className="flex-1 overflow-y-auto px-8 sm:px-12 md:px-16 pt-10 pb-12 sm:pt-12 sm:pb-14 bg-white space-y-12">
          
          {/* Grid de 3 niveles por fila con amplio respiro */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 sm:gap-x-16 gap-y-12">
            {effectiveSyllabus.semesters.map((semesterSubjects, idx) => (
              <div key={idx} className="flex flex-col">
                {/* Cabecera del Nivel */}
                <div className="flex items-baseline justify-between pb-2.5 mb-4 border-b-2 border-[#003b81]/15">
                  <h3 className="font-black text-[#003b81] text-sm uppercase tracking-wider">
                    Nivel {idx + 1}
                  </h3>
                  <span className="text-xs font-medium text-slate-400">
                    {semesterSubjects.length} materias
                  </span>
                </div>

                {/* Lista limpia de materias */}
                <ul className="space-y-1.5">
                  {semesterSubjects.map((subject, sIdx) => (
                    <li
                      key={sIdx}
                      onMouseEnter={(e) => handleMouseEnter(e, subject, idx + 1)}
                      onMouseLeave={handleMouseLeave}
                      className="group px-2.5 py-2 -mx-2.5 rounded-[2px] hover:bg-[#f0f9ff] transition-all cursor-help flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 hover:text-[#003b81]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#00a8cc] mt-2 shrink-0 transition-colors" />
                      <span className="leading-snug font-medium group-hover:font-semibold">
                        {subject}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Itinerarios de Especialización (Minimalista y con respiro) */}
          {effectiveSyllabus.itineraries && effectiveSyllabus.itineraries.length > 0 && (
            <div className="pt-10 border-t border-slate-100">
              <div className="flex items-center gap-2.5 mb-6">
                <Layers className="w-5 h-5 text-[#00a8cc]" />
                <h3 className="text-sm font-bold text-[#003b81] uppercase tracking-wider">
                  Itinerarios de Especialización
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {effectiveSyllabus.itineraries.map((iti, idx) => (
                  <div 
                    key={idx} 
                    className="border-l-2 border-[#00a8cc] pl-4 py-1"
                  >
                    <h4 className="font-bold text-sm text-[#003b81] mb-2.5 leading-snug">
                      {iti.name}
                    </h4>
                    <ul className="space-y-1.5">
                      {iti.subjects.map((sub, sIdx) => (
                        <li key={sIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2 font-normal">
                          <span className="text-[#00a8cc] font-bold">›</span>
                          <span className="leading-snug">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Institucional con Botón Cerrar */}
        <div className="px-8 sm:px-12 md:px-16 py-4.5 bg-slate-50/70 border-t border-slate-100 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#003b81] hover:bg-[#002b60] text-white text-xs font-bold uppercase tracking-wider rounded-[2px] transition-colors shadow-2xs"
          >
            Cerrar
          </button>
        </div>

      </div>

      {/* Ventanita flotante informativa al pasar el cursor */}
      {hoveredSubject && (
        <div 
          className="fixed z-[300] w-80 bg-[#003b81] text-white p-4 rounded-[2px] shadow-2xl border border-white/20 pointer-events-none animate-in fade-in duration-100"
          style={{ top: hoveredSubject.top, left: hoveredSubject.left }}
        >
          <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-white/20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00a8cc]">
              Nivel {hoveredSubject.semesterNum}
            </span>
          </div>
          <h4 className="font-bold text-sm text-white mb-1.5 leading-snug">
            {hoveredSubject.name}
          </h4>
          <p className="text-xs text-slate-200 leading-relaxed font-normal">
            {hoveredSubject.desc}
          </p>
        </div>
      )}
    </div>
  );
}
