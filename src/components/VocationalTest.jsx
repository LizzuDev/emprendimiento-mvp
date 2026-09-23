import React, { useState, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import escuchaActivaSvg from '../assets/expresiones/escucha-activa.svg';
import preguntaSvg from '../assets/expresiones/pregunta.svg';
import entusiasmadoSvg from '../assets/expresiones/entusiasmado-brazos-arriba.svg';
import neutroSvg from '../assets/expresiones/neutro.svg';
import {
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Compass,
  Send,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Award,
  BookOpen,
  HelpCircle,
  FileText,
  UserCheck,
  Briefcase,
  Sparkles
} from 'lucide-react';
import { MACROAREAS, FASE_1_QUESTIONS, DOMAIN_DATA } from '../data/vocationalData';
import InteractiveChallenge from './InteractiveChallenge';
import SyllabusModal from './SyllabusModal';

export function VocationalTest({ onFinishTest, onBackToHome }) {
  // Test flow states: 'phase1' | 'transition' | 'phase2' | 'results'
  const [currentStep, setCurrentStep] = useLocalStorage('puce_test_step', 'phase1');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useLocalStorage('puce_test_qindex', 0);

  // Phase 1 Answers: { [questionId]: boolean }
  const [phase1Answers, setPhase1Answers] = useLocalStorage('puce_test_p1ans', {});
  // Phase 2a Answers (Domain): { [questionId]: boolean }
  const [phase2aAnswers, setPhase2aAnswers] = useLocalStorage('puce_test_p2aans', {});

  // Winning or Selected Macroarea for Phase 2
  const [selectedMacroareaKey, setSelectedMacroareaKey] = useLocalStorage('puce_test_macro', 'economia');
  const [macroScores, setMacroScores] = useLocalStorage('puce_test_scores', {});

  // Phase 2b Skills Selection
  const [selectedPhase2Skills, setSelectedPhase2Skills] = useLocalStorage('puce_test_skills', []);

  // Results State
  const [rankedCareers, setRankedCareers] = useLocalStorage('puce_test_careers', []);
  const [selectedCareerKey, setSelectedCareerKey] = useLocalStorage('puce_test_selcareer', null);
  const [selectedChallengeOption, setSelectedChallengeOption] = useState(null);

  // AI Chat with Aurelio
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiChatHistory, setAiChatHistory] = useState([
    {
      sender: 'aurelio',
      text: '¡Hola! Soy Aurelio, orientador y mascota de la PUCE. Ahora que conoces tus carreras recomendadas, pregúntame con confianza: ¿cómo es el campo ocupacional en Ecuador?, ¿cuáles son las materias más exigentes?, ¿o qué oportunidades de becas e intercambios existen?'
    }
  ]);

  const [showLeadPopup, setShowLeadPopup] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);

  useEffect(() => {
    let timer;
    if (currentStep === 'results' && !showLeadPopup) {
      timer = setTimeout(() => {
        setShowLeadPopup(true);
      }, 45000); // 45 seconds
    }
    return () => clearTimeout(timer);
  }, [currentStep, showLeadPopup]);

  // Questions currently being served
  const activeQuestions = useMemo(() => {
    if (currentStep === 'phase1') {
      return FASE_1_QUESTIONS.slice(0, 15);
    }
    if (currentStep === 'phase2a') {
      const domainQs = DOMAIN_DATA[selectedMacroareaKey]?.questions || [];
      return domainQs.slice(0, 15);
    }
    return [];
  }, [currentStep, selectedMacroareaKey]);

  const currentQuestion = activeQuestions[currentQuestionIndex] || activeQuestions[0];
  const progressPercent =
    activeQuestions.length > 0
      ? Math.round(((currentQuestionIndex + 1) / activeQuestions.length) * 100)
      : 0;

  // Handle Phase 1 & Phase 2 Answer
  const handleAnswer = (isYes) => {
    if (!currentQuestion) return;

    if (currentStep === 'phase1') {
      const updated = { ...phase1Answers, [currentQuestion.id]: isYes };
      setPhase1Answers(updated);

      if (currentQuestionIndex + 1 < activeQuestions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        // Calculate Phase 1 Macroarea Scores
        const scores = {
          sostenibilidad: 0,
          salud: 0,
          habitat: 0,
          sociales: 0,
          economia: 0
        };

        FASE_1_QUESTIONS.forEach((q) => {
          if (updated[q.id] === true) {
            scores[q.macroarea] = (scores[q.macroarea] || 0) + 1;
          }
        });

        setMacroScores(scores);

        // Find macroarea with highest score
        let bestKey = 'economia';
        let maxVal = -1;
        Object.entries(scores).forEach(([key, val]) => {
          if (val > maxVal) {
            maxVal = val;
            bestKey = key;
          }
        });

        setSelectedMacroareaKey(bestKey);
        setCurrentStep('transition');
        setCurrentQuestionIndex(0);
      }
    } else if (currentStep === 'phase2a') {
      const updated = { ...phase2aAnswers, [currentQuestion.id]: isYes };
      setPhase2aAnswers(updated);

      if (currentQuestionIndex + 1 < activeQuestions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        handlePhase2Submit();
      }
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
  };

  const handlePhase2Submit = () => {
    const domain = DOMAIN_DATA[selectedMacroareaKey];
    if (!domain) return;

    const results = Object.entries(domain.careers).map(([cKey, cData]) => {
      // Calculate score based on Phase 2a answers AND Phase 2b skills
      let score = 0;
      
      // Points from Phase 2a (Questions) - 2 points per correct question
      if (cData.items) {
         cData.items.forEach(qId => {
           if (phase2aAnswers[qId]) score += 2;
         });
      }

      // Points from Phase 2b (Chips) - 1 point per skill
      cData.skills.forEach(skill => {
        if (selectedPhase2Skills.includes(skill)) score += 1;
      });

      const maxPossibleScore = (cData.items?.length || 0) * 2 + (cData.skills?.length || 0);
      const calculatedPct = Math.round((score / Math.max(maxPossibleScore, 1)) * 100);
      const matchPct = Math.min(calculatedPct, 100); // Capped at 100%

      return {
        key: cKey,
        ...cData,
        faculty: domain.faculty,
        score,
        matchPct
      };
    });

    // Sort descending by score
    results.sort((a, b) => b.score - a.score || b.matchPct - a.matchPct);

    setRankedCareers(results.slice(0, 3));
    setSelectedCareerKey(results[0]?.key || null);
    setCurrentStep('results');
  };

  const allSkills = useMemo(() => {
    if (currentStep !== 'phase2b' || !DOMAIN_DATA[selectedMacroareaKey]) return [];
    const skillsSet = new Set();
    Object.values(DOMAIN_DATA[selectedMacroareaKey].careers).forEach(c => {
      c.skills.forEach(s => skillsSet.add(s));
    });
    return Array.from(skillsSet);
  }, [currentStep, selectedMacroareaKey]);

  const toggleSkill = (skill) => {
    setSelectedPhase2Skills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };


  // Keyboard navigation support: [1] or [S] for Yes, [2] or [N] for No, [ArrowLeft] for Back
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentStep !== 'phase1' && currentStep !== 'phase2a') return;
      if (e.key === '1' || e.key === 's' || e.key === 'S') {
        handleAnswer(true);
      } else if (e.key === '2' || e.key === 'n' || e.key === 'N') {
        handleAnswer(false);
      } else if (e.key === 'ArrowLeft') {
        handlePreviousQuestion();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, currentQuestionIndex, phase1Answers, selectedPhase2Skills, selectedMacroareaKey]);

  const handleAskAurelio = (e) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;

    const userText = aiQuestion;
    setAiQuestion('');
    setAiChatHistory((prev) => [...prev, { sender: 'user', text: userText }]);

    setTimeout(() => {
      const baseCareer = rankedCareers.find((c) => c.key === selectedCareerKey);
  const domainCareer = DOMAIN_DATA[selectedMacroareaKey]?.careers?.[selectedCareerKey];
  const activeCareer = baseCareer
    ? { ...domainCareer, ...baseCareer, description: domainCareer?.description || baseCareer.description, fieldOfWork: domainCareer?.fieldOfWork || baseCareer.fieldOfWork, skills: domainCareer?.skills || baseCareer.skills, syllabus: domainCareer?.syllabus || baseCareer.syllabus, benefits: domainCareer?.benefits || baseCareer.benefits }
    : domainCareer;
      const title = activeCareer ? activeCareer.name : 'esta carrera';
      let reply = `En la PUCE, la carrera de ${title} cuenta con mallas curriculares actualizadas, laboratorios equipados y docentes con alta trayectoria académica y profesional.`;

      const lower = userText.toLowerCase();
      if (lower.includes('matemática') || lower.includes('número') || lower.includes('difícil')) {
        reply = `Es comprensible sentir respeto por asignaturas cuantitativas. En la PUCE cuentas con tutorías académicas personalizadas, grupos de acompañamiento y docentes comprometidos para apoyarte desde el primer ciclo.`;
      } else if (lower.includes('trabajo') || lower.includes('empleo') || lower.includes('sueldo') || lower.includes('dinero') || lower.includes('campo')) {
        reply = `La PUCE lidera la empleabilidad universitaria en Ecuador gracias al prestigio ético de sus egresados y a la red de convenios con empresas, organismos internacionales y el sector público.`;
      } else if (lower.includes('beca') || lower.includes('costo') || lower.includes('financiamiento')) {
        reply = `La universidad aplica aranceles diferenciados y cuenta con diversos programas de becas socioeconómicas y al mérito para que el factor económico no limite tu vocación.`;
      }

      setAiChatHistory((prev) => [...prev, { sender: 'aurelio', text: reply }]);
    }, 500);
  };

  const resetTest = () => {
    setCurrentStep('phase1');
    setCurrentQuestionIndex(0);
    setPhase1Answers({});
    setPhase2aAnswers({});
    setSelectedPhase2Skills([]);
    setMacroScores({});
    setRankedCareers([]);
    setSelectedCareerKey(null);
    setSelectedChallengeOption(null);
    // Clear persisted data so next reload starts fresh
    ['puce_test_step','puce_test_qindex','puce_test_p1ans','puce_test_p2aans','puce_test_macro','puce_test_scores','puce_test_skills','puce_test_careers','puce_test_selcareer'].forEach(k => localStorage.removeItem(k));
  };

  // Helper to get fresh data from DOMAIN_DATA
  const getEnrichedCareer = (careerKey, careerName) => {
    for (const domain of Object.values(DOMAIN_DATA)) {
      if (careerKey && domain.careers?.[careerKey]) {
        return domain.careers[careerKey];
      }
      if (careerName) {
        const found = Object.values(domain.careers || {}).find(
          (c) => c.name?.toLowerCase() === careerName?.toLowerCase()
        );
        if (found) return found;
      }
    }
    return null;
  };

  const baseCareer = rankedCareers.find((c) => c.key === selectedCareerKey) || rankedCareers[0];
  const freshData = baseCareer ? getEnrichedCareer(baseCareer.key, baseCareer.name) : null;
  const activeCareer = baseCareer
    ? {
        ...freshData,
        ...baseCareer,
        syllabus: freshData?.syllabus || baseCareer.syllabus,
        description: freshData?.description || baseCareer.description,
        fieldOfWork: freshData?.fieldOfWork || baseCareer.fieldOfWork,
        skills: freshData?.skills || baseCareer.skills,
        benefits: freshData?.benefits || baseCareer.benefits
      }
    : freshData;

  return (
    <div className="w-full min-h-screen py-8 sm:py-12 font-sans text-slate-800 transition-colors">

      {/* ========================================================
          FASE 1 & 2A: PREGUNTAS
          ======================================================== */}
      {(currentStep === 'phase1' || currentStep === 'phase2a') && (
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-0">
          
          <div className="bg-white rounded-[2px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden text-left">
            
            {/* Header & Progress Bar */}
            <div className="p-6 sm:p-8 flex items-center justify-between border-b border-slate-50">
              <div className="flex flex-col gap-1">
                <h2 className="font-sans text-sm font-bold text-slate-700 uppercase tracking-widest">
                  {currentStep === 'phase1' ? 'Descubre tus intereses' : `Profundizando en: ${MACROAREAS[selectedMacroareaKey]?.name}`}
                </h2>
                <span className="text-xs text-slate-400 font-medium">
                  Pregunta {currentQuestionIndex + 1} de {activeQuestions.length}
                </span>
              </div>
              <button
                onClick={onBackToHome}
                className="text-xs font-bold tracking-wider text-slate-400 hover:text-slate-600 transition-colors"
              >
                SALIR
              </button>
            </div>

            <div className="w-full bg-slate-50 h-1.5">
              <div
                className="bg-[#00a8cc] h-full transition-all duration-300 ease-out rounded-r-full"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            {/* Question Panel */}
            <div className="p-8 sm:p-16">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="font-sans text-2xl sm:text-3xl font-semibold leading-relaxed text-[#003b81] mb-12">
                  {currentQuestion?.text}
                </h3>

                {/* Response Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <button
                    onClick={() => handleAnswer(true)}
                    className="group bg-white hover:bg-[#f8fdff] border-2 border-slate-100 hover:border-[#00a8cc]/40 text-slate-700 py-4 px-6 rounded-[2px] transition-all duration-200 flex items-center justify-center gap-3 shadow-sm hover:shadow"
                  >
                    <div className="w-6 h-6 rounded-[2px] bg-[#00a8cc]/10 flex items-center justify-center text-[#00a8cc] group-hover:bg-[#00a8cc] group-hover:text-white transition-colors">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-sm">SÍ, ME GUSTA</span>
                  </button>

                  <button
                    onClick={() => handleAnswer(false)}
                    className="group bg-white hover:bg-slate-50 border-2 border-slate-100 hover:border-slate-300 text-slate-500 py-4 px-6 rounded-[2px] transition-all duration-200 flex items-center justify-center gap-3 shadow-sm hover:shadow"
                  >
                    <div className="w-6 h-6 rounded-[2px] bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-400 group-hover:text-white transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-sm">NO, GRACIAS</span>
                  </button>
                </div>

                {/* Back Button */}
                <div className="mt-12 flex justify-center">
                  {currentQuestionIndex > 0 && (
                    <button
                      onClick={handlePreviousQuestion}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-[#00a8cc] transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      VOLVER A LA ANTERIOR
                    </button>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================
          FASE 2B: SELECCIÓN DE INTERESES (CHIPS)
          ======================================================== */}
      {currentStep === 'phase2b' && (
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-0">
          <div className="text-center">
            {/* Header */}
            <div className="p-4 sm:p-6 flex items-center justify-between">
              <div className="flex flex-col gap-1 items-start">
                <h2 className="font-sans text-sm font-bold text-slate-700">
                  Fase 2: Afina tus intereses
                </h2>
                <span className="text-xs text-slate-400 font-medium">
                  Área: {MACROAREAS[selectedMacroareaKey]?.name}
                </span>
              </div>
              <button
                onClick={onBackToHome}
                className="text-xs font-bold tracking-wider text-slate-400 hover:text-slate-600 transition-colors"
              >
                SALIR
              </button>
            </div>

            {/* Chips Panel */}
            <div className="px-4 sm:px-8 pb-8">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="font-sans text-xl font-semibold leading-relaxed text-[#003b81] mb-2">
                  Selecciona lo que más te llama la atención
                </h3>
                <p className="text-slate-500 mb-6 text-sm">
                  Toca las opciones que más te interesen para ayudarte a encontrar la carrera perfecta.
                </p>

                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 px-2 sm:px-10">
                  {allSkills.map((skill, idx) => {
                    const isSelected = selectedPhase2Skills.includes(skill);
                    return (
                      <button
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        style={{ animationDelay: `${idx * 20}ms` }}
                        className={`px-4 py-2 rounded-full border-2 text-xs font-medium transition-all duration-300 animate-in fade-in zoom-in-50 fill-mode-both hover:-translate-y-1 hover:shadow-lg ${
                          isSelected
                            ? 'bg-[#00a8cc] text-white border-[#00a8cc] shadow-md shadow-[#00a8cc]/20 scale-105'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-[#00a8cc] hover:text-[#00a8cc] shadow-sm'
                        }`}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => { setCurrentStep('phase2a'); setCurrentQuestionIndex(0); }}
                  disabled={selectedPhase2Skills.length === 0}
                  className="bg-[#003b81] hover:bg-[#002b60] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-[2px] transition-all tracking-wide shadow-md hover:shadow-lg text-sm"
                >
                  CONTINUAR A LAS PREGUNTAS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          PANTALLA DE TRANSICIÓN
          ======================================================== */}
      {currentStep === 'transition' && (
        <div className="max-w-2xl mx-auto w-full px-4 animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="text-center p-4 sm:p-6 w-full">
            
            <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center p-2">
              <img src={entusiasmadoSvg} alt="Aurelio Entusiasmado" className="w-full h-full object-contain drop-shadow-xl" />
            </div>
            
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-1">
              Tu área de interés principal es:
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#003b81] mb-4">
              {MACROAREAS[selectedMacroareaKey]?.name}
            </h2>
            <p className="text-sm text-slate-500 mb-8 max-w-lg mx-auto">
              Ahora queremos conocerte un poco más a fondo para descubrir qué carrera específica dentro de esta área es tu match perfecto.
            </p>

            <button
              onClick={() => {
                setCurrentStep('phase2b');
              }}
              className="bg-[#00a8cc] hover:bg-[#008fae] text-white font-bold text-sm py-3 px-8 rounded-[2px] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mx-auto"
            >
              Continuar a Fase 2 <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </div>
      )}



      {/* ========================================================
          RESULTADOS: DESCUBRE TU FUTURO
          ======================================================== */}
      {currentStep === 'results' && (
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-8 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-12">
          
          <div className="py-6 mb-4 border-b border-slate-100">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#00a8cc] block mb-2">Tus Resultados</span>
                <h1 className="font-sans text-3xl sm:text-5xl font-black text-[#003b81] tracking-tight leading-none">
                  {activeCareer?.name || 'Descubre tu carrera'}
                </h1>
              </div>
              <button
                onClick={resetTest}
                className="mt-2 px-4 py-2 bg-white border border-slate-200 hover:border-[#00a8cc] hover:text-[#00a8cc] text-slate-600 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 rounded-[2px] shadow-sm shrink-0"
              >
                <RotateCcw className="w-3 h-3" />
                Reiniciar
              </button>
            </div>
          </div>

          {/* Layout compact */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Sidebar (Lista de Carreras) */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <h3 className="font-sans text-xs font-bold text-slate-500 uppercase tracking-widest px-2 mb-2">Ranking de Afinidad</h3>
              {rankedCareers.map((career, idx) => {
                const isSelected = selectedCareerKey === career.key;
                return (
                  <button
                    key={career.key}
                    onClick={() => {
                      if (!isSelected) {
                        setSelectedCareerKey(career.key);
                        setSelectedChallengeOption(null);
                      }
                    }}
                    className={`w-full py-3 px-2 border-b transition-all duration-300 relative overflow-hidden group flex items-center justify-between ${
                      isSelected
                        ? 'border-[#00a8cc]'
                        : 'border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 text-left">
                      <div className={`w-6 h-6 flex items-center justify-center font-bold text-xs rounded-[2px] transition-colors ${
                        isSelected ? 'bg-[#00a8cc] text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                      }`}>
                        {idx + 1}
                      </div>
                      <h4 className={`font-bold text-sm sm:text-base transition-colors ${isSelected ? 'text-[#003b81]' : 'text-slate-600 group-hover:text-[#003b81]'}`}>
                        {career.name}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className={`text-sm font-bold block leading-none transition-colors ${isSelected ? 'text-[#00a8cc]' : 'text-slate-300 group-hover:text-slate-400'}`}>
                        {career.matchPct}%
                      </span>
                    </div>
                  </button>
                );
              })}

              {/* Aptitudes Consolidadas */}
              <div className="mt-4 px-2">
                <h4 className="font-bold text-slate-500 text-xs mb-3 uppercase tracking-wider">Aptitudes Detectadas</h4>
                <div className="space-y-3">
                  {Object.entries(macroScores).sort((a, b) => b[1] - a[1]).slice(0,3).map(([key, score]) => {
                    const pct = Math.min(Math.round((score / 3) * 100), 100); // Updated to 3 questions max
                    if (pct === 0) return null;
                    return (
                      <div key={key}>
                        <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                          <span>{MACROAREAS[key]?.name.split(' ')[0]}</span>
                          <span className="text-[#00a8cc]">{pct}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 overflow-hidden">
                          <div className="h-full bg-[#00a8cc]" style={{ width: `${pct}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main View (Detalle de Carrera) */}
            <div className="lg:col-span-8">
              {activeCareer ? (
                <div className="animate-in fade-in zoom-in-95 duration-300">
                  {/* Descripción y Estadísticas */}
                  <div className="px-2 sm:px-4 pt-4 pb-2">
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {activeCareer.description}
                    </p>

                    {/* Campo Ocupacional y Áreas de Impacto */}
                    {activeCareer.fieldOfWork && (
                      <div className="mt-3.5 p-3.5 bg-slate-50 border border-slate-200/90 rounded-[4px] flex items-start gap-3 shadow-xs">
                        <div className="w-7 h-7 rounded-full bg-[#003b81]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#003b81]">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div className="text-xs text-slate-700 leading-relaxed">
                          <span className="font-bold text-[#003b81] block sm:inline mr-1">Campo ocupacional & impacto:</span>
                          <span>{activeCareer.fieldOfWork}</span>
                        </div>
                      </div>
                    )}

                    {/* Competencias Clave */}
                    {activeCareer.skills && activeCareer.skills.length > 0 && (
                      <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1.5">Aptitudes clave:</span>
                        {activeCareer.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200/80 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Cifras Clave */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-slate-100">
                    {/* Afinidad */}
                    <div className="px-6 py-6 border-r border-b sm:border-b-0 border-slate-100">
                      <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500 block mb-2">Afinidad</span>
                      <span className="text-4xl font-black text-[#00a8cc] leading-none tracking-tight">{activeCareer.matchPct}<span className="text-lg">%</span></span>
                    </div>
                    {/* Beneficios */}
                    {activeCareer.benefits?.map((b, i) => (
                      <div key={i} className={`px-6 py-6 ${i < (activeCareer.benefits.length - 1) ? 'border-r border-slate-100' : ''} ${i === 0 ? 'border-b sm:border-b-0 border-slate-100' : ''}`}>
                        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500 block mb-2">{b.topText}</span>
                        <span className="text-3xl font-black text-[#003b81] leading-none tracking-tight">{b.highlight}</span>
                        <span className="block text-xs font-medium text-slate-500 mt-1">{b.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Acciones rápidas (horizontal, minimalista) */}
                  <div className="flex flex-col sm:flex-row items-stretch border-b border-slate-100 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                    {/* Malla Curricular */}
                    <button
                      onClick={() => setShowSyllabusModal(true)}
                      className="flex-1 px-5 py-5 flex items-center gap-4 text-left hover:bg-[#f5fbfe] transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg border border-slate-200 bg-white group-hover:border-[#00a8cc] group-hover:bg-[#00a8cc]/10 flex items-center justify-center shrink-0 transition-all shadow-xs">
                        <BookOpen className="w-5 h-5 text-[#003b81] group-hover:text-[#00a8cc] transition-colors stroke-[2.2]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm text-[#003b81] mb-0.5 group-hover:text-[#00a8cc] transition-colors">Malla Curricular</h4>
                        <p className="text-xs text-slate-600 leading-tight">Explora las materias semestre a semestre</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00a8cc] group-hover:translate-x-0.5 transition-all" />
                    </button>

                    {/* Pregúntale a Aurelio */}
                    <button
                      onClick={() => setIsChatOpen(true)}
                      className="flex-1 px-5 py-5 flex items-center gap-4 text-left hover:bg-[#f5fbfe] transition-colors group"
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-slate-200 overflow-hidden group-hover:scale-105 transition-transform">
                        <img src={neutroSvg} alt="Aurelio" className="w-10 h-10 object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm text-[#003b81] mb-0.5 flex items-center gap-2 group-hover:text-[#00a8cc] transition-colors">
                          Pregúntale a Aurelio <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        </h4>
                        <p className="text-xs text-slate-600 leading-tight">Aranceles, empleabilidad, materias difíciles...</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00a8cc] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  </div>

                  {/* Reto Interactivo */}
                  {activeCareer.caseStudy && (
                    <div className="px-5 py-6 border-b border-slate-100">
                      <h4 className="font-bold text-[#003b81] text-xs uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-[#00a8cc]" /> Desafío rápido
                      </h4>
                      <div className="bg-slate-50/80 p-5 border-l-4 border-[#00a8cc]">
                        <InteractiveChallenge challenge={activeCareer.caseStudy} />
                      </div>
                    </div>
                  )}

                  {/* Aurelio Chatbot Bubble (Fixed bottom-right) */}
                  {isChatOpen && (
                    <div className="fixed bottom-6 right-6 z-[200] w-80 sm:w-96 animate-in slide-in-from-bottom-4 fade-in duration-200">
                      <div className="bg-white rounded-[2px] shadow-2xl border border-slate-200 flex flex-col max-h-[28rem] overflow-hidden">
                        {/* Header Institucional */}
                        <div className="bg-[#003b81] text-white px-4 py-3 flex justify-between items-center border-b border-white/10">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden ring-2 ring-white/30 shadow-xs shrink-0">
                              <img src={neutroSvg} alt="Aurelio" className="w-7 h-7 object-contain" />
                            </div>
                            <div>
                              <h4 className="font-bold text-sm text-white tracking-wide leading-none">Aurelio</h4>
                              <span className="text-[10px] text-cyan-200 flex items-center gap-1.5 mt-1 font-medium">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/30 animate-pulse"></span> Asistente Vocacional PUCE
                              </span>
                            </div>
                          </div>
                          <button 
                            onClick={() => setIsChatOpen(false)} 
                            className="w-7 h-7 rounded-[2px] bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                            aria-label="Cerrar chat"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        
                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f8fafc] min-h-[11rem] max-h-[17rem]">
                          {aiChatHistory.map((msg, idx) => (
                            <div key={idx} className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                              {msg.sender === 'aurelio' && (
                                <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center overflow-hidden mt-0.5 shadow-2xs">
                                  <img src={preguntaSvg} alt="Aurelio" className="w-4 h-4 object-contain" />
                                </div>
                              )}
                              <div className={`px-3.5 py-2.5 text-xs shadow-2xs max-w-[82%] rounded-[2px] leading-relaxed ${
                                msg.sender === 'user' 
                                  ? 'bg-[#003b81] text-white font-normal' 
                                  : 'bg-white text-slate-700 border border-slate-200/90 font-normal'
                              }`}>
                                <p>{msg.text}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Suggested Questions */}
                        {aiChatHistory.length <= 1 && (
                          <div className="px-3.5 py-2.5 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-1.5">
                            {['¿Cuánto cuesta la carrera?', '¿Es difícil?', '¿Dónde puedo trabajar?'].map((q, i) => (
                              <button
                                key={i}
                                onClick={() => { setAiQuestion(q); }}
                                className="text-[11px] px-2.5 py-1 bg-white border border-slate-200 text-slate-600 hover:border-[#003b81] hover:text-[#003b81] rounded-[2px] transition-colors shadow-2xs font-medium"
                              >
                                {q}
                              </button>
                            ))}
                          </div>
                        )}
                        
                        {/* Input */}
                        <form onSubmit={handleAskAurelio} className="flex items-center gap-1.5 p-2 border-t border-slate-200 bg-white">
                          <input
                            type="text"
                            value={aiQuestion}
                            onChange={(e) => setAiQuestion(e.target.value)}
                            placeholder="Haz una pregunta a Aurelio..."
                            className="flex-1 px-3 py-2 text-xs outline-none text-slate-800 placeholder:text-slate-400 bg-slate-50 border border-slate-200 rounded-[2px] focus:border-[#003b81] focus:bg-white transition-all"
                          />
                          <button 
                            type="submit" 
                            disabled={!aiQuestion.trim()} 
                            className="w-8 h-8 rounded-[2px] bg-[#003b81] hover:bg-[#002b60] text-white disabled:bg-slate-100 disabled:text-slate-300 flex items-center justify-center transition-colors shrink-0 shadow-2xs"
                            aria-label="Enviar pregunta"
                          >
                            <Send className="w-3.5 h-3.5" />
                          </button>
                        </form>
                      </div>
                    </div>
                  )}

                  {/* Acción Final */}
                  <div className="px-5 py-5 flex items-center justify-between">
                    <span className="text-xs text-slate-500">¿Te identificas con esta carrera?</span>
                    <button onClick={() => setShowLeadPopup(true)} className="bg-[#003b81] hover:bg-[#002b60] text-white py-2.5 px-8 rounded-[2px] font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm hover:shadow-md">
                      <UserCheck className="w-4 h-4" /> Quiero más información
                    </button>
                  </div>

                </div>
              ) : null}
            </div>

          </div>
        </div>
      )}

      
      <SyllabusModal 
        isOpen={showSyllabusModal} 
        onClose={() => setShowSyllabusModal(false)} 
        careerName={activeCareer?.name}
        syllabus={activeCareer?.syllabus}
      />

      {/* Lead Generation Popup */}
      {showLeadPopup && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={() => setShowLeadPopup(false)}>
          <div className="bg-white rounded-[2px] shadow-2xl max-w-md w-full relative overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-slate-100" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowLeadPopup(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <span className="text-[10px] uppercase tracking-widest text-[#00a8cc] font-bold block mb-2">
                  Asesoría Personalizada
                </span>
                <h3 className="font-sans text-2xl font-bold text-[#003b81] mb-2">
                  ¿Quieres asegurar tu cupo?
                </h3>
                <p className="text-sm text-slate-500">
                  Déjanos tus datos y te guiaremos en el proceso de admisión, becas y descuentos.
                </p>
              </div>

              <form className="space-y-5 text-left" onSubmit={(e) => { e.preventDefault(); alert('¡Gracias! Tus datos han sido enviados.'); setShowLeadPopup(false); }}>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Nombre Completo</label>
                  <input type="text" className="w-full border border-slate-200 rounded-[2px] p-3 text-sm focus:outline-none focus:border-[#00a8cc] focus:ring-4 focus:ring-[#00a8cc]/10 transition-all bg-slate-50 focus:bg-white" placeholder="Ej. Juan Pérez" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Teléfono o WhatsApp</label>
                  <input type="tel" className="w-full border border-slate-200 rounded-[2px] p-3 text-sm focus:outline-none focus:border-[#00a8cc] focus:ring-4 focus:ring-[#00a8cc]/10 transition-all bg-slate-50 focus:bg-white" placeholder="099 123 4567" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Correo Electrónico</label>
                  <input type="email" className="w-full border border-slate-200 rounded-[2px] p-3 text-sm focus:outline-none focus:border-[#00a8cc] focus:ring-4 focus:ring-[#00a8cc]/10 transition-all bg-slate-50 focus:bg-white" placeholder="juan@ejemplo.com" required />
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-[#00a8cc] hover:bg-[#008fae] text-white font-semibold py-3.5 rounded-[2px] transition-all tracking-wide text-sm shadow-md hover:shadow-lg">
                    Solicitar Asesoría
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-slate-50 p-5 border-t border-slate-100 text-center">
              <button onClick={() => setShowLeadPopup(false)} className="text-xs text-slate-400 font-medium hover:text-slate-600 transition-colors">
                Ahora no, gracias
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
