import React from 'react';
import presentaOpcionesSvg from '../assets/expresiones/presenta-opciones.svg';
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Award,
  GraduationCap
} from 'lucide-react';
import { MACROAREAS } from '../data/vocationalData';

export function OrientaLanding({ onStartTest, onNavigateToAurelio }) {
  const macroareasList = [
    {
      key: 'habitat',
      title: 'Hábitat, Infraestructura y Creatividad',
      faculty: 'Facultad de Hábitat, Infraestructura y Creatividad / Ingeniería',
      careers: ['Arquitectura', 'Diseño Gráfico', 'Artes Visuales', 'Ingeniería Civil', 'Ingeniería Integral', 'Sistemas de Información'],
      desc: 'Formación en diseño espacial, cálculo estructural, sostenibilidad bioclimática, dirección de arte e infraestructura tecnológica.',
      url: 'https://www.puce.edu.ec/facultad-de-habitat-infraestructura-y-creatividad/'
    },
    {
      key: 'salud',
      title: 'Salud y Bienestar',
      faculty: 'Facultad de Salud y Bienestar',
      careers: ['Medicina', 'Enfermería', 'Fisioterapia', 'Nutrición y Dietética', 'Odontología', 'Psicología Clínica', 'Laboratorio Clínico', 'Medicina Veterinaria'],
      desc: 'Vocación asistencial con rigor científico en prevención, diagnóstico, rehabilitación y salud mental en campus y hospitales docentes.',
      url: 'https://www.puce.edu.ec/facultad-de-salud-y-bienestar/'
    },
    {
      key: 'sostenibilidad',
      title: 'Ciencias Exactas, Naturales y Ambientales',
      faculty: 'Facultad de Ciencias Exactas, Naturales y Ambientales',
      careers: ['Biología', 'Microbiología', 'Ciencias Biomédicas', 'Ciencia de Datos'],
      desc: 'Investigación experimental en biodiversidad, biotecnología aplicada, metagenómica y modelado predictivo de big data.',
      url: 'https://www.puce.edu.ec/facultad-de-ciencias-exactas-naturales-y-ambientales/'
    },
    {
      key: 'sociales',
      title: 'Derecho, Sociedad y Humanidades',
      faculty: 'Facultades de Derecho y Sociedad / Aprendizaje, Lenguas y Comunicación',
      careers: ['Derecho', 'Relaciones Internacionales', 'Comunicación', 'Lingüística', 'Filosofía, Política y Economía', 'Educación Inicial'],
      desc: 'Análisis crítico de los sistemas jurídicos, diplomacia global, investigación pedagógica, pensamiento ético y ciencias de la comunicación.',
      url: 'https://www.puce.edu.ec/facultad-de-derecho-y-sociedad/'
    },
    {
      key: 'economia',
      title: 'Economía y Gestión Empresarial',
      faculty: 'Facultad de Economía y Gestión Empresarial',
      careers: ['Administración de Empresas', 'Economía', 'Finanzas', 'Marketing', 'Negocios Internacionales', 'Contabilidad y Auditoría', 'Turismo y Hospitalidad'],
      desc: 'Liderazgo estratégico corporativo, evaluación cuantitativa de proyectos, finanzas bursátiles, comercio internacional e innovación.',
      url: 'https://www.puce.edu.ec/facultad-de-economia-y-gestion-empresarial/'
    }
  ];

  return (
    <div id="et-main-area" className="w-full bg-white text-slate-700 font-sans text-left">
      <div id="main-content">
        <article className="post-2462 page type-page status-publish hentry category-admisiones">
          <div className="entry-content">
            <div className="et-l et-l--post">
              <div className="et_builder_inner_content">

                {/* ========================================================
                    1. SECCIÓN HERO PUCE (Idéntico a screenshot institucional)
                    ======================================================== */}
                <div 
                  className="w-full relative bg-[#001f44] text-white py-16 sm:py-24 border-b border-slate-200 overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(10, 25, 47, 0.90) 0%, rgba(10, 25, 47, 0.75) 50%, rgba(10, 25, 47, 0.85) 100%), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="puce-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                      
                      {/* Columna Izquierda: Título con Barra Cian Institucional */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="border-l-[6px] border-[#00a8cc] pl-4 sm:pl-6">
                          <h1 className="font-sans text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                            Descubre tu Futuro
                          </h1>
                          <p className="text-base sm:text-xl text-slate-200 font-normal mt-2">
                            Encuentra la carrera ideal para ti de manera fácil y rápida.
                          </p>
                        </div>
                      </div>

                      {/* Columna Derecha: Botonera Vertical Oficial PUCE */}
                      <div className="lg:col-span-5 flex flex-col gap-3 max-w-sm ml-auto w-full">
                        <button
                          onClick={onStartTest}
                          className="w-full bg-[#00a8cc] hover:bg-[#008fae] text-white font-bold text-xs sm:text-sm tracking-wider uppercase py-3.5 px-6 rounded-[2px] transition-colors shadow-sm text-center"
                        >
                          QUIERO INSCRIBIRME
                        </button>

                        <a
                          href="https://landing.puce.edu.ec/pucegradogeneral"
                          target="_blank"
                          rel="noreferrer"
                          className="w-full bg-slate-900/60 hover:bg-[#00a8cc] hover:text-white border-2 border-[#00a8cc] text-[#00a8cc] font-bold text-xs sm:text-sm tracking-wider uppercase py-3.5 px-6 rounded-[2px] transition-colors text-center"
                        >
                          MÁS INFORMACIÓN GRADO
                        </a>

                        <a
                          href="https://www.puce.edu.ec/posgrados/"
                          target="_blank"
                          rel="noreferrer"
                          className="w-full bg-slate-900/60 hover:bg-[#00a8cc] hover:text-white border-2 border-[#00a8cc] text-[#00a8cc] font-bold text-xs sm:text-sm tracking-wider uppercase py-3.5 px-6 rounded-[2px] transition-colors text-center"
                        >
                          MÁS INFORMACIÓN POSGRADO
                        </a>

                        <a
                          href="https://www.puce.edu.ec/puce-tec/"
                          target="_blank"
                          rel="noreferrer"
                          className="w-full bg-slate-900/60 hover:bg-[#00a8cc] hover:text-white border-2 border-[#00a8cc] text-[#00a8cc] font-bold text-xs sm:text-sm tracking-wider uppercase py-3.5 px-6 rounded-[2px] transition-colors text-center"
                        >
                          MÁS INFORMACIÓN PUCE-TEC
                        </a>
                      </div>

                    </div>
                  </div>
                </div>



                {/* ========================================================
                    3. SECCIÓN DE MACROÁREAS (ESTRUCTURA DE FILAS DIVI PUCE)
                    ======================================================== */}
                <div className="w-full py-14 bg-white border-b border-slate-200">
                  <div className="puce-container">
                    
                    <div className="text-left mb-10 border-b border-slate-200 pb-4">
                      <span className="font-sans text-xs uppercase tracking-wider text-[#003b81] font-semibold block mb-1">
                        OFERTA ACADÉMICA
                      </span>
                      <h2 className="font-sans text-2xl sm:text-3xl font-bold text-slate-800">
                        Macroáreas Vocacionales Evaluadas
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {macroareasList.map((macro, idx) => (
                        <div
                          key={macro.key}
                          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border-b border-slate-100 pb-8"
                        >
                          {/* Columna 2/5 (lg:col-span-5): Título de Facultad */}
                          <div className="lg:col-span-5 space-y-1.5">
                            <span className="text-xs font-mono text-slate-400 block uppercase">
                              Área 0{idx + 1}
                            </span>
                            <h3 className="font-sans text-lg sm:text-xl font-bold text-[#003b81] leading-snug">
                              {macro.title}
                            </h3>
                            <h4 className="text-xs font-medium text-slate-500">
                              {macro.faculty}
                            </h4>
                          </div>

                          {/* Columna 3/5 (lg:col-span-7): Blurbs y Carreras */}
                          <div className="lg:col-span-7">
                            <div className="et_pb_blurb_institutional">
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {macro.careers.map((careerName, cIdx) => (
                                  <span
                                    key={cIdx}
                                    className="text-xs bg-slate-50 text-slate-700 px-2.5 py-1 border border-slate-200 rounded-[2px]"
                                  >
                                    {careerName}
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                                <button
                                  onClick={onStartTest}
                                  className="text-[#00a8cc] hover:text-[#003b81] font-semibold flex items-center gap-1.5 transition-colors"
                                >
                                  <span>Evaluar afinidad</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>

                                <a
                                  href={macro.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-slate-400 hover:text-slate-600 flex items-center gap-1"
                                >
                                  <span>Portal PUCE</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* ========================================================
                    4. SECCIÓN DE ORIENTACIÓN CON AURELIO
                    ======================================================== */}
                <div className="w-full bg-[#f8fafc] py-16 border-b border-slate-200">
                  <div className="puce-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-3 text-center flex justify-center">
                        <img src={presentaOpcionesSvg} alt="Aurelio" className="w-32 h-32 object-contain drop-shadow-md" />
                      </div>

                      <div className="lg:col-span-6 space-y-2">
                        <span className="font-rubik text-xs uppercase tracking-widest text-[#003b81] font-bold">
                          ACOMPAÑAMIENTO PERMANENTE
                        </span>
                        <h3 className="font-rubik text-2xl font-bold text-slate-900">
                          Aurelio: Mascota y Orientador Virtual
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Inspirado en el oso de anteojos andino y en honor al Padre Aurelio Espinosa Pólit, S.J. Aurelio te apoya durante todo el test respondiendo tus preguntas sobre materias retadoras, requisitos de ingreso y campo laboral en Ecuador.
                        </p>
                      </div>

                      <div className="lg:col-span-3 text-right">
                        <button
                          onClick={onNavigateToAurelio}
                          className="et_pb_button et_pb_button_primary text-xs w-full sm:w-auto"
                        >
                          Conocer historia de Aurelio
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </article>
      </div>

      {/* ========================================================
          5. FOOTER OFICIAL COMPLETO PUCE (footer.et-l.et-l--footer)
          ======================================================== */}
      <footer className="w-full bg-[#001733] text-[#a0aec0] text-[13px] leading-relaxed pt-14 pb-8 border-t-4 border-dorado">
        <div className="puce-container">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            
            {/* Columna 1/3 (lg:col-span-4): Logo y Contacto Matriz */}
            <div className="lg:col-span-4 space-y-4">
              <img
                src="https://www.puce.edu.ec/wp-content/uploads/2026/05/horizontal_blanco.png"
                alt="PUCE"
                className="h-12 w-auto object-contain mb-4"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              <p className="text-white font-medium text-xs">
                Avenida 12 de Octubre 1076 y Vicente Ramón Roca.<br />
                Quito - Ecuador.
              </p>

              <p className="text-xs">
                Teléfono: <span className="text-white font-semibold">(593) (02) 2991700</span><br />
                Sitio web: <a href="https://www.puce.edu.ec" target="_blank" rel="noreferrer" className="text-puce-botones hover:underline">www.puce.edu.ec</a>
              </p>

              <div className="pt-2">
                <span className="inline-block text-[11px] font-rubik uppercase font-bold text-dorado tracking-wider border border-dorado/30 px-2 py-1">
                  Ser más para servir mejor
                </span>
              </div>
            </div>

            {/* Columna 2/3 (lg:col-span-8): Redes Sociales y Sub-columnas */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Redes Sociales Institucionales */}
              <div className="flex flex-wrap items-center gap-4 text-xs pb-4 border-b border-slate-800">
                <span className="text-white font-semibold uppercase text-[11px] tracking-wider">Redes PUCE:</span>
                <a href="https://www.facebook.com/pontificiauniversidadcatolicadelecuador" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">Facebook</a>
                <span>•</span>
                <a href="https://www.instagram.com/puce_ecuador/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">Instagram</a>
                <span>•</span>
                <a href="https://www.tiktok.com/@puce_ecuador" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">TikTok</a>
                <span>•</span>
                <a href="https://twitter.com/PUCE_Ecuador" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">X</a>
                <span>•</span>
                <a href="https://www.youtube.com/user/videospuce" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">Youtube</a>
                <span>•</span>
                <a href="https://ec.linkedin.com/school/pontificia-universidad-cat-lica-del-ecuador/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">LinkedIn</a>
              </div>

              {/* 4 Sub-columnas Reales de la PUCE */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
                
                {/* Sedes */}
                <div>
                  <h4 className="font-rubik text-white text-xs uppercase font-bold tracking-wider mb-3">
                    Sedes
                  </h4>
                  <ul className="space-y-1.5 text-slate-400">
                    <li><a href="https://www.pucesa.edu.ec/" target="_blank" rel="noreferrer" className="hover:text-white">Sede Ambato</a></li>
                    <li><a href="https://www.pucese.edu.ec/" target="_blank" rel="noreferrer" className="hover:text-white">Sede Esmeraldas</a></li>
                    <li><a href="http://www.pucesd.edu.ec/" target="_blank" rel="noreferrer" className="hover:text-white">Sede Santo Domingo</a></li>
                    <li><a href="https://www.pucesi.edu.ec/" target="_blank" rel="noreferrer" className="hover:text-white">Sede Ibarra</a></li>
                    <li><a href="https://www.pucem.edu.ec/" target="_blank" rel="noreferrer" className="hover:text-white">Sede Manabí</a></li>
                    <li><a href="https://puceamazonas.edu.ec/" target="_blank" rel="noreferrer" className="hover:text-white">Sede Amazonas</a></li>
                  </ul>
                </div>

                {/* Facultades */}
                <div>
                  <h4 className="font-rubik text-white text-xs uppercase font-bold tracking-wider mb-3">
                    Facultades
                  </h4>
                  <ul className="space-y-1.5 text-slate-400 text-[11px]">
                    <li><a href="https://www.puce.edu.ec/facultad-de-habitat-infraestructura-y-creatividad/" className="hover:text-white">Hábitat y Creatividad</a></li>
                    <li><a href="https://www.puce.edu.ec/facultad-de-derecho-y-sociedad/" className="hover:text-white">Derecho y Sociedad</a></li>
                    <li><a href="https://www.puce.edu.ec/facultad-de-economia-y-gestion-empresarial/" className="hover:text-white">Economía y Gestión</a></li>
                    <li><a href="https://www.puce.edu.ec/facultad-de-salud-y-bienestar/" className="hover:text-white">Salud y Bienestar</a></li>
                    <li><a href="https://www.puce.edu.ec/facultad-de-ciencias-exactas-naturales-y-ambientales/" className="hover:text-white">Exactas y Naturales</a></li>
                  </ul>
                </div>

                {/* Enlaces frecuentes */}
                <div>
                  <h4 className="font-rubik text-white text-xs uppercase font-bold tracking-wider mb-3">
                    Enlaces frecuentes
                  </h4>
                  <ul className="space-y-1.5 text-slate-400">
                    <li><a href="https://www.puce.edu.ec/biblioteca" target="_blank" rel="noreferrer" className="hover:text-white">Biblioteca</a></li>
                    <li><a href="https://www.puce.edu.ec/intranet/" target="_blank" rel="noreferrer" className="hover:text-white">Intranet</a></li>
                    <li><a href="https://ssoserver2.puce.edu.ec/" target="_blank" rel="noreferrer" className="hover:text-white">Aulas Virtuales</a></li>
                    <li><a href="https://www.puce.edu.ec/investigacion" target="_blank" rel="noreferrer" className="hover:text-white">Investigación</a></li>
                    <li><a href="https://www.puce.edu.ec/adn-puce/" target="_blank" rel="noreferrer" className="hover:text-white">ADN PUCE</a></li>
                  </ul>
                </div>

                {/* Transparencia y Datos */}
                <div>
                  <h4 className="font-rubik text-white text-xs uppercase font-bold tracking-wider mb-3">
                    Transparencia
                  </h4>
                  <ul className="space-y-1.5 text-slate-400 text-[11px]">
                    <li><a href="https://www.puce.edu.ec/informe-rendicion-de-cuentas/" className="hover:text-white">Rendición de cuentas</a></li>
                    <li><a href="https://www.puce.edu.ec/estados-financieros/" className="hover:text-white">Estados financieros</a></li>
                    <li><a href="https://www.puce.edu.ec/intranet/normativainstitucional" className="hover:text-white">Normativa</a></li>
                    <li><a href="https://www.puce.edu.ec/intranet/documentos/gaceta/politicas-generales/politica-general-proteccion-datos-personales_20240228.pdf" target="_blank" rel="noreferrer" className="hover:text-white">Protección de datos</a></li>
                  </ul>
                </div>

              </div>

            </div>

          </div>

          <div className="pt-6 text-center text-slate-500 text-xs">
            ® Todos los derechos reservados Pontificia Universidad Católica del Ecuador - Dirección de Informática - 2026
          </div>

        </div>
      </footer>
      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={onStartTest}
          className="bg-[#00a8cc] hover:bg-[#008fae] text-white rounded-full px-6 py-4 shadow-2xl flex items-center gap-3 transition-transform hover:-translate-y-1"
        >
          <span className="font-bold uppercase tracking-wider text-sm">Iniciar el Test</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
