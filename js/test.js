// =========================================================
// Orienta PUCE · Módulo del Test Vocacional Completo
// JavaScript Nativo (ES6 Modules) - Idéntico a React
// =========================================================

import { MACROAREAS, FASE_1_QUESTIONS, DOMAIN_DATA } from './data/vocationalData.js';
import { getAurelioContextualAnswer, queryAurelio, getLastAurelioSource } from './aurelioBot.js';
import { formatAurelioMessage, escapeHtml } from './chatFormat.js';
import { OFFICIAL_CAREERS } from './data/aurelioKnowledge.js';
import { telemetry } from './telemetry.js';

// --- ESTADO GLOBAL Y PERSISTENCIA (MISMAS CLAVES QUE EN REACT) ---
const STORAGE_PREFIX = 'puce_test_';

function clearTestStorage() {
  const keys = ['step', 'qindex', 'p1ans', 'scores', 'macro', 'skills', 'qindex_p2', 'p2aans', 'careers', 'selcareer', 'chatHistory'];
  keys.forEach(k => {
    try {
      localStorage.removeItem(STORAGE_PREFIX + k);
    } catch (e) {
      console.warn('LocalStorage remove error:', e);
    }
  });
}

// Si la URL contiene el parámetro ?nuevo=1 o ?reset=1, se inicia un test limpio desde cero
try {
  const urlParams = typeof window !== 'undefined' && window.location ? new URLSearchParams(window.location.search) : null;
  if (urlParams && (urlParams.get('nuevo') === '1' || urlParams.get('reset') === '1')) {
    clearTestStorage();
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }
} catch (e) {
  console.warn('Error al verificar parámetros de inicio:', e);
}

function getStorage(key, fallback) {
  try {
    const val = localStorage.getItem(STORAGE_PREFIX + key);
    return val !== null ? JSON.parse(val) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveStorage(key, val) {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(val));
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }
}

const state = {
  step: getStorage('step', 'phase1'), // 'phase1' | 'transition' | 'phase2b' | 'phase2a' | 'results'
  p1Index: Number(getStorage('qindex', 0)),
  p1Answers: getStorage('p1ans', {}),
  macroScores: getStorage('scores', {}),
  selectedMacro: getStorage('macro', 'economia'),
  selectedSkills: getStorage('skills', []),
  p2aIndex: Number(getStorage('qindex_p2', 0)),
  p2aAnswers: getStorage('p2aans', {}),
  rankedCareers: getStorage('careers', []),
  activeCareerKey: getStorage('selcareer', null),
  chatHistory: getStorage('chatHistory', [
    {
      sender: 'aurelio',
      text: '¡Hola! Soy Aurelio, orientador y mascota de la PUCE. Ahora que conoces tus carreras recomendadas, pregúntame con confianza: ¿cómo es el campo ocupacional en Ecuador?, ¿cuáles son las materias más exigentes?, ¿o qué oportunidades de becas e intercambios existen?'
    }
  ]),
  challengeState: {
    status: 'playing', // 'playing' | 'success' | 'failure'
    stepId: 'step1',
    matchedPairs: [],
    selectedLeft: null,
    sliderValues: {},
    selectedOption: null
  }
};

// Elementos de la vista
const appContainer = document.getElementById('test-app');
const syllabusModal = document.getElementById('syllabus-modal');
const leadModal = document.getElementById('lead-modal');
const chatPanel = document.getElementById('chat-panel');

// Mensaje fijo bajo cada resultado de mini-reto: el reto orienta, no evalúa (cambio por pruebas U1-U5)
const NOTA_ORIENTADORA = `
  <p class="react-challenge-note">
    Esto no es un examen: el reto te muestra cómo se piensa en esta carrera. Equivocarte también te ayuda a decidir.
  </p>`;

// SVGs de Aurelio
const AURELIO_IMG = {
  entusiasmadoBrazos: 'assets/img/aurelio/entusiasmado-brazos-arriba.svg',
  neutro: 'assets/img/aurelio/neutro.svg',
  pregunta: 'assets/img/aurelio/pregunta.svg'
};

// --- RENDERIZADOR PRINCIPAL ---
export function initTest() {
  telemetry.trackSessionStart();
  renderCurrentStep();
  setupKeyboardListeners();
  setupModalEvents();
}

// Lleva la vista al inicio. Safari de iOS antiguo no acepta scrollTo con opciones (#18),
// así que en ese caso se usa la forma clásica scrollTo(0, 0).
function irArriba() {
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo(0, 0);
  }
}

function renderCurrentStep() {
  if (!appContainer) return;
  irArriba();

  telemetry.trackStep(state.step, {
    p1Index: state.p1Index,
    p2aIndex: state.p2aIndex,
    selectedMacro: state.selectedMacro
  });

  switch (state.step) {
    case 'phase1':
      renderPhase1();
      break;
    case 'transition':
      renderTransition();
      break;
    case 'phase2b':
      renderPhase2b();
      break;
    case 'phase2a':
      renderPhase2a();
      break;
    case 'results':
      renderResults();
      break;
    default:
      state.step = 'phase1';
      renderPhase1();
  }
}

// =========================================================
// FASE 1: TEST DE 15 PREGUNTAS (ESTILO EXACTO REACT)
// =========================================================
function renderPhase1() {
  const questions = FASE_1_QUESTIONS.slice(0, 15);
  const currentQ = questions[state.p1Index] || questions[0];
  const progressPercent = Math.round(((state.p1Index + 1) / questions.length) * 100);

  appContainer.innerHTML = `
    <div class="react-test-card">
      <!-- Header & Progress Bar -->
      <div class="react-card-header">
        <div class="react-card-heading">
          <h2 class="react-card-title">Descubre tus intereses</h2>
          <span class="react-card-subtitle">Pregunta ${state.p1Index + 1} de ${questions.length}</span>
        </div>
        <a href="index.html" class="test-exit-btn">SALIR</a>
      </div>

      <div class="react-progress-bar-wrap">
        <div class="react-progress-bar-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <!-- Question Panel -->
      <div class="react-question-panel">
        <div class="react-question-inner">
          <h3 class="react-question-text">
            ${currentQ.text}
          </h3>

          <!-- Response Buttons -->
          <div class="react-answers-grid">
            <button id="btn-ans-yes" class="react-answer-btn react-btn-yes">
              <span class="btn-label">Sí me interesa</span>
            </button>

            <button id="btn-ans-no" class="react-answer-btn react-btn-no">
              <span class="btn-label">No me interesa</span>
            </button>
          </div>

          <!-- Back Button -->
          <div class="react-back-wrap">
            ${state.p1Index > 0 ? `
              <button id="btn-ans-back" class="react-back-btn">
                ← VOLVER A LA ANTERIOR
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-ans-yes').onclick = () => handlePhase1Answer(currentQ, true);
  document.getElementById('btn-ans-no').onclick = () => handlePhase1Answer(currentQ, false);
  const backBtn = document.getElementById('btn-ans-back');
  if (backBtn) backBtn.onclick = handlePhase1Back;
}

function handlePhase1Answer(question, isYes) {
  state.p1Answers[question.id] = isYes;
  saveStorage('p1ans', state.p1Answers);

  const totalQuestions = FASE_1_QUESTIONS.slice(0, 15).length;
  if (state.p1Index + 1 < totalQuestions) {
    state.p1Index++;
    saveStorage('qindex', state.p1Index);
    renderPhase1();
  } else {
    // Calcular puntajes por macroárea
    const scores = { sostenibilidad: 0, salud: 0, habitat: 0, sociales: 0, economia: 0 };
    FASE_1_QUESTIONS.slice(0, 15).forEach(q => {
      if (state.p1Answers[q.id] === true && scores[q.macroarea] !== undefined) {
        scores[q.macroarea]++;
      }
    });

    state.macroScores = scores;
    saveStorage('scores', scores);

    // Encontrar la macroárea con mayor puntaje (desempate equitativo)
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const bestKey = sortedScores[0] ? sortedScores[0][0] : 'sostenibilidad';

    state.selectedMacro = bestKey;
    saveStorage('macro', bestKey);

    state.step = 'transition';
    saveStorage('step', 'transition');
    renderCurrentStep();
  }
}

function handlePhase1Back() {
  if (state.p1Index > 0) {
    state.p1Index--;
    saveStorage('qindex', state.p1Index);
    renderPhase1();
  }
}

// =========================================================
// PANTALLA DE TRANSICIÓN (IDÉNTICO A REACT)
// =========================================================
function renderTransition() {
  const macroName = MACROAREAS[state.selectedMacro]?.name || 'Área Seleccionada';

  appContainer.innerHTML = `
    <div class="react-transition-wrap">
      <div class="react-transition-mascot">
        <img src="${AURELIO_IMG.entusiasmadoBrazos}" alt="Aurelio Entusiasmado">
      </div>
      
      <span class="react-transition-eyebrow">Tu área de interés principal es:</span>
      <h2 class="react-transition-title">${macroName}</h2>
      <p class="react-transition-desc">
        Ahora queremos conocerte un poco más a fondo para descubrir qué carrera específica dentro de esta área es tu match perfecto.
      </p>

      <div style="margin: 0 auto 24px auto; max-width: 400px; text-align: left;">
        <label for="change-macro-select" style="display: block; font-size: 12px; font-weight: 600; color: #475569; margin-bottom: 6px;">
          ¿Deseas explorar otra área? Puedes cambiarla aquí:
        </label>
        <select id="change-macro-select" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 13px; color: #1e293b; background: #fff;">
          ${Object.entries(MACROAREAS).map(([key, m]) => `
            <option value="${key}" ${key === state.selectedMacro ? 'selected' : ''}>${m.name}</option>
          `).join('')}
        </select>
      </div>

      <button id="btn-continue-transition" class="react-btn-cyan">
        Continuar a Fase 2 →
      </button>
    </div>
  `;

  const selectEl = document.getElementById('change-macro-select');
  if (selectEl) {
    selectEl.onchange = (e) => {
      state.selectedMacro = e.target.value;
      saveStorage('macro', state.selectedMacro);
      state.selectedSkills = [];
      saveStorage('skills', []);
      const titleEl = document.querySelector('.react-transition-title');
      if (titleEl) titleEl.textContent = MACROAREAS[state.selectedMacro]?.name || '';
    };
  }

  document.getElementById('btn-continue-transition').onclick = () => {
    state.step = 'phase2b';
    saveStorage('step', 'phase2b');
    renderCurrentStep();
  };
}

// =========================================================
// FASE 2B: SELECCIÓN DE INTERESES (CHIPS - IDÉNTICO A REACT)
// =========================================================
function renderPhase2b() {
  const domain = DOMAIN_DATA[state.selectedMacro] || DOMAIN_DATA.economia;
  const allSkillsSet = new Set();
  Object.values(domain.careers || {}).forEach(c => {
    (c.skills || []).forEach(s => allSkillsSet.add(s));
  });
  const allSkills = Array.from(allSkillsSet);

  appContainer.innerHTML = `
    <div class="react-test-card">
      <div class="react-card-header">
        <div class="react-card-heading">
          <h2 class="react-card-title">Fase 2: Afina tus intereses</h2>
          <span class="react-card-subtitle">Área: ${MACROAREAS[state.selectedMacro]?.name}</span>
        </div>
        <a href="index.html" class="test-exit-btn">SALIR</a>
      </div>

      <div class="react-question-panel" style="padding-top: 36px; padding-bottom: 48px;">
        <div class="react-question-inner" style="max-width: 48rem;">
          <h3 class="react-question-text" style="font-size: 1.4rem; margin-bottom: 8px;">
            Selecciona lo que más te llama la atención
          </h3>
          <p style="color: #64748b; margin-bottom: 24px; font-size: 14px;">
            Toca las opciones que más te interesen para ayudarte a encontrar la carrera perfecta.
          </p>

          <div class="react-chips-container">
            ${allSkills.map(skill => {
              const isSelected = state.selectedSkills.includes(skill);
              return `
                <button class="react-skill-chip ${isSelected ? 'selected' : ''}" data-skill="${skill}">
                  ${skill}
                </button>
              `;
            }).join('')}
          </div>

          <button id="btn-skills-next" class="react-btn-primary" ${state.selectedSkills.length === 0 ? 'disabled' : ''}>
            CONTINUAR A LAS PREGUNTAS
          </button>
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll('.react-skill-chip').forEach(btn => {
    btn.onclick = () => {
      const skill = btn.dataset.skill;
      if (state.selectedSkills.includes(skill)) {
        state.selectedSkills = state.selectedSkills.filter(s => s !== skill);
      } else {
        state.selectedSkills.push(skill);
      }
      saveStorage('skills', state.selectedSkills);
      renderPhase2b();
    };
  });

  const nextBtn = document.getElementById('btn-skills-next');
  if (nextBtn) {
    nextBtn.onclick = () => {
      if (state.selectedSkills.length > 0) {
        state.step = 'phase2a';
        state.p2aIndex = 0;
        saveStorage('step', 'phase2a');
        saveStorage('qindex_p2', 0);
        renderCurrentStep();
      }
    };
  }
}

// =========================================================
// FASE 2A: PREGUNTAS DE DOMINIO EQUITATIVAS Y BALANCEADAS
// =========================================================

// Obtiene una selección balanceada y equitativa de preguntas por dominio (12 a 22 preguntas)
// garantizando que cada carrera tenga exactamente la misma cantidad de reactivos evaluados.
function getBalancedQuestionsForDomain(macroareaKey) {
  const domain = DOMAIN_DATA[macroareaKey] || DOMAIN_DATA.economia;
  if (!domain || !domain.careers || !domain.questions) return [];

  const careers = Object.values(domain.careers);
  const totalCareers = careers.length;

  // Selección balanceada según bancos de Psicología (16 a 24 preguntas por dominio)
  let questionsPerCareer = 3;
  if (totalCareers <= 4) questionsPerCareer = 4; // Sostenibilidad (4 carreras * 4 = 16 preguntas)
  else questionsPerCareer = 3; // Habitat (18), Sociales (18), Economía (21), Salud (24)

  const selectedQuestionIds = new Set();
  careers.forEach(career => {
    const careerItems = career.items || [];
    const chosen = careerItems.slice(0, questionsPerCareer);
    chosen.forEach(id => selectedQuestionIds.add(id));
  });

  return domain.questions.filter(q => selectedQuestionIds.has(q.id));
}

function renderPhase2a() {
  const domain = DOMAIN_DATA[state.selectedMacro] || DOMAIN_DATA.economia;
  const questions = getBalancedQuestionsForDomain(state.selectedMacro);
  const currentQ = questions[state.p2aIndex] || questions[0];
  const progressPercent = Math.round(((state.p2aIndex + 1) / questions.length) * 100);

  appContainer.innerHTML = `
    <div class="react-test-card">
      <div class="react-card-header">
        <div class="react-card-heading">
          <h2 class="react-card-title">Profundizando en: ${MACROAREAS[state.selectedMacro]?.name}</h2>
          <span class="react-card-subtitle">Pregunta ${state.p2aIndex + 1} de ${questions.length}</span>
        </div>
        <a href="index.html" class="test-exit-btn">SALIR</a>
      </div>

      <div class="react-progress-bar-wrap">
        <div class="react-progress-bar-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <div class="react-question-panel">
        <div class="react-question-inner">
          <h3 class="react-question-text">
            ${currentQ.text}
          </h3>

          <div class="react-answers-grid">
            <button id="btn-ans2-yes" class="react-answer-btn react-btn-yes">
              <span class="btn-label">Sí me interesa</span>
            </button>

            <button id="btn-ans2-no" class="react-answer-btn react-btn-no">
              <span class="btn-label">No me interesa</span>
            </button>
          </div>

          <div class="react-back-wrap">
            ${state.p2aIndex > 0 ? `
              <button id="btn-ans2-back" class="react-back-btn">
                ← VOLVER A LA ANTERIOR
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-ans2-yes').onclick = () => handlePhase2aAnswer(currentQ, true);
  document.getElementById('btn-ans2-no').onclick = () => handlePhase2aAnswer(currentQ, false);
  const backBtn = document.getElementById('btn-ans2-back');
  if (backBtn) backBtn.onclick = handlePhase2aBack;
}

function handlePhase2aAnswer(question, isYes) {
  state.p2aAnswers[question.id] = isYes;
  saveStorage('p2aans', state.p2aAnswers);

  const questions = getBalancedQuestionsForDomain(state.selectedMacro);

  if (state.p2aIndex + 1 < questions.length) {
    state.p2aIndex++;
    saveStorage('qindex_p2', state.p2aIndex);
    renderPhase2a();
  } else {
    calculateFinalResults();
  }
}

function handlePhase2aBack() {
  if (state.p2aIndex > 0) {
    state.p2aIndex--;
    saveStorage('qindex_p2', state.p2aIndex);
    renderPhase2a();
  }
}

// =========================================================
// CÁLCULO DE RESULTADOS FINALES Y RANKING
// =========================================================
function calculateFinalResults() {
  const domain = DOMAIN_DATA[state.selectedMacro] || DOMAIN_DATA.economia;
  if (!domain || !domain.careers) return;

  const questions = getBalancedQuestionsForDomain(state.selectedMacro);
  const askedIds = new Set(questions.map(q => q.id));

  const results = Object.entries(domain.careers).map(([cKey, cData]) => {
    // 1. Preguntas efectivamente formuladas al usuario que corresponden a esta carrera
    const askedItems = (cData.items || []).filter(qId => askedIds.has(qId));
    let questionsScore = 0;
    askedItems.forEach(qId => {
      if (state.p2aAnswers[qId] === true) questionsScore += 2;
    });

    // 2. Habilidades de la carrera seleccionadas por el usuario
    let skillsScore = 0;
    if (cData.skills) {
      cData.skills.forEach(skill => {
        if (state.selectedSkills.includes(skill)) skillsScore += 1;
      });
    }

    // 3. Puntaje máximo realista basado en lo que realmente se evaluó en la prueba
    const maxQuestions = askedItems.length * 2;
    const maxSkills = (cData.skills?.length || 0);
    const maxPossibleScore = maxQuestions + maxSkills;

    const totalScore = questionsScore + skillsScore;
    const calculatedPct = maxPossibleScore > 0 
      ? Math.round((totalScore / maxPossibleScore) * 100) 
      : 0;
    const matchPct = Math.min(calculatedPct, 100);

    return {
      key: cKey,
      ...cData,
      faculty: domain.faculty,
      score: totalScore,
      matchPct
    };
  });

  // Ordenar prioritariamente por porcentaje de afinidad y desempate por puntos absolutos
  results.sort((a, b) => b.matchPct - a.matchPct || b.score - a.score);

  state.rankedCareers = results.slice(0, 3);
  state.activeCareerKey = state.rankedCareers[0]?.key || null;
  state.step = 'results';

  saveStorage('careers', state.rankedCareers);
  saveStorage('selcareer', state.activeCareerKey);
  saveStorage('step', 'results');

  // Registrar finalización y carreras recomendadas en telemetría
  telemetry.trackCompletion(state.rankedCareers, state.selectedMacro, state.selectedSkills);

  renderCurrentStep();
}

// =========================================================
// DATOS OFICIALES DE LA PUCE (www.puce.edu.ec)
// Se buscan por clave al dibujar, así también se corrigen los resultados guardados antes.
// Ver scripts/puce/actualizar.py
// =========================================================
function officialOf(career) {
  return (career && OFFICIAL_CAREERS[career.key]) || null;
}

const formatUsd = (n) => `$${Number(n).toLocaleString('es-EC')}`;

function officialStatsHtml(official) {
  const c = official?.costo;
  const cells = c
    ? [
        { label: 'Arancel', num: formatUsd(c.precioConDescuento), sub: 'por semestre, con descuento' },
        { label: 'Descuento', num: `${c.descuentoPct}%`, sub: `sobre ${formatUsd(c.precioReal)}` },
      ]
    : [{ label: 'Arancel', num: '—', sub: 'consultar con Admisiones' }, { label: 'Descuento', num: '—', sub: '' }];
  cells.push({ label: 'Duración', num: official?.semestres ?? '—', sub: official?.duracion && !/^\d+ semestres$/.test(official.duracion) ? official.duracion : 'semestres' });
  return cells.map(b => `
    <div class="react-stat-cell">
      <span class="react-stat-label">${escapeHtml(b.label)}</span>
      <span class="react-stat-num">${escapeHtml(String(b.num))}</span>
      <span class="react-stat-sub">${escapeHtml(b.sub)}</span>
    </div>
  `).join('');
}

function officialSourcesHtml(official) {
  if (!official) return '';
  const c = official.costo;
  const links = [
    official.fuentes?.pagina ? `<a href="${escapeHtml(official.fuentes.pagina)}" target="_blank" rel="noopener noreferrer">página oficial de la carrera</a>` : '',
    official.fuentes?.brochure ? `<a href="${escapeHtml(official.fuentes.brochure)}" target="_blank" rel="noopener noreferrer">brochure</a>` : '',
  ].filter(Boolean).join(' · ');
  const note = c ? `Valores por semestre. ${c.nota ? escapeHtml(c.nota) + '. ' : ''}${c.matricula ? `Matrícula: ${formatUsd(c.matricula)} por período. ` : ''}` : '';
  return `<p class="react-official-note">${note}Fuente: ${links || 'www.puce.edu.ec'}.</p>`;
}

// =========================================================
// PANTALLA DE RESULTADOS (IDÉNTICO A REACT)
// =========================================================
function renderResults() {
  const activeCareer = state.rankedCareers.find(c => c.key === state.activeCareerKey) || state.rankedCareers[0];
  if (!activeCareer) return;
  const official = officialOf(activeCareer);

  appContainer.innerHTML = `
    <div class="react-results-wrap">
      <div class="react-results-top-bar">
        <div>
          <span class="react-results-eyebrow">Tus Resultados</span>
          <h1 class="react-results-main-title">${activeCareer.name}</h1>
        </div>
        <button id="btn-restart-test" class="react-reset-btn">
          ↺ Reiniciar
        </button>
      </div>

      <!-- PODIO TOP 3 DE CARRERAS RECOMENDADAS -->
      <section class="react-podium-section">
        <div class="react-podium-header">
          <div>
            <h2 class="react-podium-title">Tu Top 3 de Carreras con Mayor Afinidad</h2>
            <p class="react-podium-sub">Compara las 3 opciones vocacionales con mayor compatibilidad según tus respuestas:</p>
          </div>
          <button id="btn-header-lead-modal" class="react-podium-cta-btn">
            📋 Solicitar Asesoría y Recibir mi Informe
          </button>
        </div>

        <div class="react-podium-grid">
          ${state.rankedCareers.map((career, idx) => {
            const isSelected = state.activeCareerKey === career.key;
            const rankNum = idx + 1;
            const rankBadge = rankNum === 1 
              ? `<span class="react-podium-badge badge-gold">🥇 1º Match Principal</span>` 
              : rankNum === 2 
                ? `<span class="react-podium-badge badge-silver">🥈 2º Alternativa Afín</span>` 
                : `<span class="react-podium-badge badge-bronze">🥉 3º Alternativa Afín</span>`;

            return `
              <div class="react-podium-card rank-${rankNum} ${isSelected ? 'active' : ''}" data-key="${career.key}">
                <div class="react-podium-card-top">
                  ${rankBadge}
                  <span class="react-podium-pct">${career.matchPct}%</span>
                </div>
                <div>
                  <h3 class="react-podium-name">${career.name}</h3>
                  <div class="react-podium-faculty">${escapeHtml(officialOf(career)?.facultad || 'PUCE')}</div>
                </div>
                <button class="react-podium-btn-select" data-key="${career.key}">
                  ${isSelected ? '✓ Explorando esta carrera' : 'Ver detalle y mini-reto →'}
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <div class="react-results-grid">
        <!-- SIDEBAR: LISTA DE CARRERAS -->
        <div class="react-results-sidebar">
          <!-- Aptitudes Consolidadas -->
          <div class="react-aptitudes-box" style="margin-top: 0;">
            <h4 class="react-sidebar-title" style="padding: 0; margin-bottom: 12px;">Aptitudes Detectadas</h4>
            ${Object.entries(state.macroScores)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 3)
              .map(([key, score]) => {
                const pct = Math.min(Math.round((score / 3) * 100), 100);
                if (pct === 0) return '';
                return `
                  <div class="react-aptitude-row">
                    <div class="react-aptitude-labels">
                      <span>${MACROAREAS[key]?.name?.split(' ')[0] || key}</span>
                      <span style="color: #00a8cc;">${pct}%</span>
                    </div>
                    <div class="react-aptitude-bar-bg">
                      <div class="react-aptitude-bar-fill" style="width: ${pct}%;"></div>
                    </div>
                  </div>
                `;
              }).join('')}
          </div>
        </div>

        <!-- MAIN VIEW (DETALLE DE CARRERA) -->
        <div class="react-results-content">
          <div class="react-detail-header">
            ${official ? `
              <p class="react-detail-desc">
                <strong>${escapeHtml(official.titulo || activeCareer.name)}</strong>
                ${official.facultad ? ` · ${escapeHtml(official.facultad)}` : ''}
                ${official.modalidad ? ` · Modalidad ${escapeHtml(official.modalidad.toLowerCase())}` : ''}
              </p>
              ${official.resultadosAprendizaje?.length ? `
                <div class="react-field-box">
                  <span style="font-size: 16px;">🎯</span>
                  <div>
                    <strong style="color: #003b81;">Al terminar la carrera serás capaz de:</strong>
                    <ul class="react-official-list">
                      ${official.resultadosAprendizaje.slice(0, 4).map(r => `<li>${escapeHtml(r)}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              ` : ''}
            ` : `<p class="react-detail-desc">${escapeHtml(activeCareer.description || '')}</p>`}

            ${official?.campoLaboral ? `
              <div class="react-field-box">
                <span style="font-size: 16px;">💼</span>
                <div>
                  <strong style="color: #003b81;">¿Dónde puedo trabajar?</strong>
                  <span>${escapeHtml(official.campoLaboral)}</span>
                </div>
              </div>
            ` : ''}

            ${activeCareer.skills && activeCareer.skills.length > 0 ? `
              <div class="react-skills-tags">
                <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-right: 6px;">
                  Aptitudes clave:
                </span>
                ${activeCareer.skills.map(s => `<span class="react-skill-tag">${s}</span>`).join('')}
              </div>
            ` : ''}
          </div>

          <!-- Cifras Clave (4 Columnas) -->
          <div class="react-stats-grid">
            <div class="react-stat-cell">
              <span class="react-stat-label">Afinidad</span>
              <span class="react-stat-num">${activeCareer.matchPct}<span style="font-size: 18px;">%</span></span>
            </div>
            ${officialStatsHtml(official)}
          </div>
          ${officialSourcesHtml(official)}

          <!-- Acciones Rápidas (Horizontal) -->
          <div class="react-action-row">
            <button id="btn-open-syllabus" class="react-action-item">
              <div class="react-action-icon-box">📖</div>
              <div>
                <div class="react-action-title">Malla Curricular</div>
                <div class="react-action-desc">Explora las materias semestre a semestre</div>
              </div>
            </button>
            <button id="btn-open-aurelio-chat" class="react-action-item">
              <div class="react-action-icon-box">🐻</div>
              <div>
                <div class="react-action-title">Pregúntale a Aurelio</div>
                <div class="react-action-desc">Aranceles, empleabilidad, materias difíciles...</div>
              </div>
            </button>
          </div>

          <!-- Mini-Reto Interactivo -->
          <div class="react-challenge-section" id="challenge-box-container">
            <!-- Renderizado dinámico del minireto -->
          </div>

          <!-- Acción Final -->
          <div class="react-bottom-bar">
            <span>¿Te identificas con esta carrera?</span>
            <button id="btn-open-lead-modal" class="react-btn-dark">
              Quiero más información
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Selector de carrera en el Podio Top 3
  document.querySelectorAll('.react-podium-card, .react-podium-btn-select').forEach(el => {
    el.onclick = (e) => {
      e.stopPropagation();
      const key = el.dataset.key || el.closest('.react-podium-card')?.dataset.key;
      if (key && key !== state.activeCareerKey) {
        state.activeCareerKey = key;
        saveStorage('selcareer', key);
        state.challengeState = {
          status: 'playing',
          stepId: 'step1',
          matchedPairs: [],
          selectedLeft: null,
          sliderValues: {},
          selectedOption: null
        };
        renderResults();
      }
    };
  });

  const btnHeaderLead = document.getElementById('btn-header-lead-modal');
  if (btnHeaderLead) btnHeaderLead.onclick = openLeadModal;

  // Selector de carrera en sidebar
  document.querySelectorAll('.react-career-item-btn').forEach(btn => {
    btn.onclick = () => {
      const key = btn.dataset.key;
      if (key !== state.activeCareerKey) {
        state.activeCareerKey = key;
        saveStorage('selcareer', key);
        state.challengeState = {
          status: 'playing',
          stepId: 'step1',
          matchedPairs: [],
          selectedLeft: null,
          sliderValues: {},
          selectedOption: null
        };
        renderResults();
      }
    };
  });

  document.getElementById('btn-restart-test').onclick = resetTest;
  document.getElementById('btn-open-syllabus').onclick = () => openSyllabusModal(activeCareer);
  document.getElementById('btn-open-aurelio-chat').onclick = openChat;
  document.getElementById('btn-open-lead-modal').onclick = openLeadModal;

  renderInteractiveChallenge(activeCareer);
}

// =========================================================
// MINI-RETO INTERACTIVO (CHALLENGE ENGINE)
// =========================================================
function renderInteractiveChallenge(career) {
  const container = document.getElementById('challenge-box-container');
  if (!container) return;

  const challenge = career.caseStudy;
  if (!challenge) {
    container.style.display = 'none';
    return;
  }

  container.style.display = 'block';
  const type = challenge.type || 'multiple_choice';

  let challengeHTML = `
    <div class="react-challenge-badge">
      <span>🏆</span> DESAFÍO RÁPIDO
    </div>
    <div class="react-challenge-inner">
      <h4 style="font-weight: 700; color: #003b81; font-size: 14px; margin: 0 0 4px;">
        ${challenge.scenario || 'Reto Vocacional'}
      </h4>
      <p style="font-size: 12px; color: #64748b; margin: 0 0 16px; line-height: 1.5;">
        ${challenge.description || challenge.question || ''}
      </p>
  `;

  // DECISION GAME
  if (type === 'decision') {
    const steps = challenge.steps || [];
    const currentStep = steps.find(s => s.id === state.challengeState.stepId) || steps[0];

    if (state.challengeState.status === 'playing' && currentStep) {
      challengeHTML += `
        <p style="font-size: 13px; font-weight: 700; color: #334155; margin-bottom: 12px;">
          ${currentStep.question}
        </p>
        <div>
          ${currentStep.options.map(opt => `
            <button class="react-challenge-opt-btn" data-next="${opt.next}">
              ${opt.text}
            </button>
          `).join('')}
        </div>
      `;
    } else {
      const isSuccess = state.challengeState.status === 'success';
      challengeHTML += `
        <div style="padding: 14px; border-radius: 2px; border: 1px solid ${isSuccess ? '#bbf7d0' : '#fed7aa'}; background: ${isSuccess ? '#f0fdf4' : '#fffbeb'}; margin-bottom: 12px;">
          <p style="font-size: 12px; font-weight: 500; color: ${isSuccess ? '#166534' : '#9a3412'}; margin: 0;">
            ${isSuccess ? challenge.feedback?.success : challenge.feedback?.failure}
          </p>
        </div>
        ${NOTA_ORIENTADORA}
        <button id="btn-retry-challenge" class="react-retry-btn">
          Volver a intentar →
        </button>
      `;
    }
  }
  // SLIDER BUDGET GAME
  else if (type === 'slider') {
    const variables = challenge.variables || [
      { id: 'marketing', label: 'Marketing y Publicidad', max: 10000 },
      { id: 'product', label: 'Producción', max: 10000 },
      { id: 'reserve', label: 'Fondo de Emergencia', max: 10000 }
    ];

    if (!state.challengeState.sliderValues || Object.keys(state.challengeState.sliderValues).length === 0) {
      variables.forEach(v => { state.challengeState.sliderValues[v.id] = 2000; });
    }

    const totalAllocated = Object.values(state.challengeState.sliderValues).reduce((a, b) => a + Number(b), 0);

    if (state.challengeState.status === 'playing') {
      challengeHTML += `
        <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 16px;">
          <span>Presupuesto Total: $10,000</span>
          <span style="color: ${totalAllocated > 10000 ? '#ef4444' : '#00a8cc'};">
            Asignado: $${totalAllocated.toLocaleString()}
          </span>
        </div>
        ${variables.map(v => `
          <div style="margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; font-size: 12px; color: #64748b; margin-bottom: 4px;">
              <span>${v.label}</span>
              <span>$${(state.challengeState.sliderValues[v.id] || 0).toLocaleString()}</span>
            </div>
            <input type="range" min="0" max="${v.max}" step="500" value="${state.challengeState.sliderValues[v.id] || 0}" data-id="${v.id}" class="slider-input" style="width: 100%; accent-color: #00a8cc;">
          </div>
        `).join('')}
        <button id="btn-confirm-budget" class="react-btn-cyan" style="width: 100%; justify-content: center; margin-top: 8px; padding: 10px;">
          Confirmar Presupuesto
        </button>
      `;
    } else {
      const isSuccess = state.challengeState.status === 'success';
      challengeHTML += `
        <div style="padding: 14px; border-radius: 2px; border: 1px solid ${isSuccess ? '#bbf7d0' : '#fed7aa'}; background: ${isSuccess ? '#f0fdf4' : '#fffbeb'}; margin-bottom: 12px;">
          <p style="font-size: 12px; font-weight: 500; color: ${isSuccess ? '#166534' : '#9a3412'}; margin: 0;">
            ${isSuccess ? challenge.feedback?.success : challenge.feedback?.failure}
          </p>
        </div>
        ${NOTA_ORIENTADORA}
        <button id="btn-retry-challenge" class="react-retry-btn">
          Volver a intentar →
        </button>
      `;
    }
  }
  // MULTIPLE CHOICE GAME
  else {
    const options = challenge.options || [];
    const selected = state.challengeState.selectedOption;

    if (!selected) {
      challengeHTML += `
        <div>
          ${options.map((opt, idx) => `
            <button class="react-challenge-opt-btn" data-opt-idx="${idx}">
              ${opt.text}
            </button>
          `).join('')}
        </div>
      `;
    } else {
      const isCorrect = selected.isCorrect;
      challengeHTML += `
        <div style="padding: 14px; border-radius: 2px; border: 1px solid ${isCorrect ? '#bbf7d0' : '#fed7aa'}; background: ${isCorrect ? '#f0fdf4' : '#fffbeb'}; margin-bottom: 12px;">
          <p style="font-size: 12px; font-weight: 600; color: ${isCorrect ? '#166534' : '#9a3412'}; margin: 0 0 4px;">
            ${isCorrect ? '¡Excelente decisión!' : 'Buen intento: así se piensa en esta carrera'}
          </p>
          <p style="font-size: 11px; color: ${isCorrect ? '#166534' : '#9a3412'}; margin: 0;">
            ${isCorrect 
              ? 'Un buen profesional de esta área siempre busca soluciones basadas en evidencia y planificación.' 
              : 'En esta carrera se analizan las variables y se buscan soluciones estructuradas antes de decidir. Es algo que se aprende desde el primer semestre.'}
          </p>
        </div>
        ${NOTA_ORIENTADORA}
        <button id="btn-retry-challenge" class="react-retry-btn">
          Volver a intentar →
        </button>
      `;
    }
  }

  challengeHTML += `</div>`;
  container.innerHTML = challengeHTML;

  // Listeners
  if (type === 'decision') {
    container.querySelectorAll('.react-challenge-opt-btn').forEach(btn => {
      btn.onclick = () => {
        const next = btn.dataset.next;
        if (next === 'success' || next.startsWith('failure')) {
          state.challengeState.status = next.startsWith('failure') ? 'failure' : 'success';
        } else {
          state.challengeState.stepId = next;
        }
        renderInteractiveChallenge(career);
      };
    });
  } else if (type === 'slider') {
    container.querySelectorAll('.slider-input').forEach(input => {
      input.oninput = (e) => {
        const id = e.target.dataset.id;
        state.challengeState.sliderValues[id] = Number(e.target.value);
        renderInteractiveChallenge(career);
      };
    });
    const confirmBtn = document.getElementById('btn-confirm-budget');
    if (confirmBtn) {
      confirmBtn.onclick = () => {
        const total = Object.values(state.challengeState.sliderValues).reduce((a, b) => a + Number(b), 0);
        const allPositive = Object.values(state.challengeState.sliderValues).every(v => v > 0);
        if (allPositive && total <= 10000 && total >= 6000) {
          state.challengeState.status = 'success';
        } else {
          state.challengeState.status = 'failure';
        }
        renderInteractiveChallenge(career);
      };
    }
  } else {
    container.querySelectorAll('.react-challenge-opt-btn').forEach(btn => {
      btn.onclick = () => {
        const idx = Number(btn.dataset.optIdx);
        state.challengeState.selectedOption = challenge.options[idx];
        renderInteractiveChallenge(career);
      };
    });
  }

  const retryBtn = document.getElementById('btn-retry-challenge');
  if (retryBtn) {
    retryBtn.onclick = () => {
      state.challengeState = {
        status: 'playing',
        stepId: 'step1',
        matchedPairs: [],
        selectedLeft: null,
        sliderValues: {},
        selectedOption: null
      };
      renderInteractiveChallenge(career);
    };
  }
}

// =========================================================
// MODAL DE MALLA CURRICULAR
// =========================================================
function openSyllabusModal(career) {
  if (!syllabusModal) return;

  const official = officialOf(career);
  const malla = official?.malla;
  const modalCareerTitle = document.getElementById('syllabus-career-title');
  const modalBody = document.getElementById('syllabus-body');

  if (modalCareerTitle) modalCareerTitle.textContent = official?.nombre || career.name || 'Carrera Universitaria';

  // Solo se muestra la malla oficial (brochure de la PUCE). Si no está, se avisa (#21).
  if (modalBody && !malla?.length) {
    modalBody.innerHTML = `
      <p style="font-size: 14px; color: #334155; line-height: 1.6; margin: 0 0 16px;">
        No tenemos la malla oficial de <strong>${escapeHtml(career.name || 'esta carrera')}</strong> en esta plataforma.
      </p>
      <p style="font-size: 14px; color: #334155; line-height: 1.6; margin: 0;">
        Puedes revisarla en el
        <a href="https://www.puce.edu.ec/grado/" target="_blank" rel="noopener noreferrer" style="color: #003b81; font-weight: 700;">portal de grado de la PUCE</a>
        o preguntarle a Aurelio.
      </p>
    `;
  } else if (modalBody) {
    const shared = official.semestresCompartidos || [];
    const levels = malla
      .map((sem, i) => ({ sem, n: i + 1 }))
      .filter(({ n }) => !shared.some(p => p[1] === n)) // el semestre compartido se muestra junto al anterior
      .map(({ sem, n }) => {
        const pair = shared.find(p => p[0] === n);
        return { title: pair ? `Niveles ${pair[0]} y ${pair[1]}` : `Nivel ${n}`, note: pair ? 'El brochure agrupa estas materias para ambos niveles.' : '', subjects: sem };
      });
    (official.bloquesAdicionales || []).forEach(b => levels.push({ title: b.titulo, note: `Después del nivel ${b.despues_del_semestre}`, subjects: b.materias }));

    modalBody.innerHTML = `
      <p style="font-size: 13px; color: #64748b; margin-bottom: 24px;">
        ${escapeHtml(official.duracion || `${malla.length} semestres`)} · Malla oficial según el
        <a href="${escapeHtml(official.fuentes.brochure)}" target="_blank" rel="noopener noreferrer" style="color: #003b81; font-weight: 700;">brochure de la PUCE</a>.
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px;">
        ${levels.map(l => `
          <div style="border-bottom: 2px solid #003b81; padding-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; gap: 8px;">
              <h4 style="font-size: 13px; font-weight: 800; text-transform: uppercase; color: #003b81; margin: 0;">
                ${escapeHtml(l.title)}
              </h4>
              <span style="font-size: 11px; color: #94a3b8; white-space: nowrap;">${l.subjects.length} materias</span>
            </div>
            ${l.note ? `<p style="font-size: 11px; color: #94a3b8; margin: 0 0 6px;">${escapeHtml(l.note)}</p>` : ''}
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 12px; line-height: 1.4;">
              ${l.subjects.map(subject => `
                <li style="padding: 6px 0; border-bottom: 1px solid #f1f5f9;">
                  • <span style="font-weight: 500; color: #334155;">${escapeHtml(subject)}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      ${official.itinerarios?.length ? `
        <div style="margin-top: 32px; border-top: 1px solid #f1f5f9; padding-top: 20px;">
          <h4 style="font-size: 13px; font-weight: 800; color: #003b81; text-transform: uppercase; margin-bottom: 4px;">
            Itinerarios
          </h4>
          <p style="font-size: 12px; color: #64748b; margin: 0 0 12px;">
            Eliges uno: sus materias ocupan las «Asignaturas de itinerario» de la malla.
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px;">
            ${official.itinerarios.map(iti => `
              <div style="border-left: 2px solid #00a8cc; padding-left: 12px;">
                <strong style="font-size: 13px; color: #003b81;">${escapeHtml(iti.nombre)}</strong>
                ${iti.materias.length ? `
                  <ul style="padding-left: 14px; margin: 6px 0; font-size: 12px; color: #64748b;">
                    ${iti.materias.map(m => `<li>${escapeHtml(m.materia)}${m.nivel ? ` <span style="color: #94a3b8;">(nivel ${m.nivel})</span>` : ''}</li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    `;
  }

  syllabusModal.style.display = 'flex';
}

function closeSyllabusModal() {
  if (syllabusModal) syllabusModal.style.display = 'none';
}

function openLeadModal() {
  if (leadModal) leadModal.style.display = 'flex';
}

function closeLeadModal() {
  if (leadModal) leadModal.style.display = 'none';
}

function updateChatAiStatus() {
  const subEl = document.getElementById('chat-header-sub');
  if (!subEl) return;
  const src = getLastAurelioSource();
  if (src === 'groq' || src === 'gemini') {
    subEl.innerHTML = 'Asistente con IA <span style="color: #4ade80;">●</span>';
    subEl.title = 'Respondiendo con inteligencia artificial';
  } else if (src === 'local') {
    subEl.innerHTML = 'Modo básico <span style="color: #facc15;">⚡</span>';
    subEl.title = 'El servicio de IA no respondió; se usa el motor local con datos de la PUCE.';
  } else {
    subEl.textContent = 'Orientador Vocacional PUCE';
    subEl.title = '';
  }
}

function openChat() {
  if (chatPanel) {
    const activeCareer = state.rankedCareers.find(c => c.key === state.activeCareerKey);
    // Si el chat es nuevo o tiene el saludo genérico previo, contextualizar con la carrera activa
    if (activeCareer && (!state.chatHistory || state.chatHistory.length === 0 || state.chatHistory[0]?.text?.includes('¿cómo es el campo ocupacional'))) {
      state.chatHistory = [
        {
          sender: 'aurelio',
          text: `¡Hola! Soy Aurelio, orientador y mascota de la PUCE. Ahora que estás explorando ${activeCareer.name}, pregúntame con confianza: convenios, prácticas hospitalarias, becas, costos, intercambios o sobre sus materias.`
        }
      ];
      saveStorage('chatHistory', state.chatHistory);
    }
    chatPanel.style.display = 'flex';
    updateChatAiStatus();
    renderChatMessages();
    ajustarChatAlTeclado();
  }
}

// Con el teclado abierto en el celular, el panel del chat se ajusta al alto visible
// para que la caja de texto y el botón de envío no queden tapados (cambio por pruebas U1-U5).
function ajustarChatAlTeclado() {
  if (!chatPanel || !window.visualViewport) return;
  if (window.innerWidth > 600) {
    chatPanel.style.bottom = '';
    chatPanel.style.height = '';
    chatPanel.style.maxHeight = '';
    return;
  }
  const vv = window.visualViewport;
  const tecladoAlto = Math.max(window.innerHeight - vv.height - vv.offsetTop, 0);
  chatPanel.style.bottom = `${tecladoAlto + 8}px`;
  chatPanel.style.height = `${vv.height - 16}px`;
  chatPanel.style.maxHeight = `${vv.height - 16}px`;
}
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', ajustarChatAlTeclado);
  window.visualViewport.addEventListener('scroll', ajustarChatAlTeclado);
}

function closeChat() {
  if (chatPanel) chatPanel.style.display = 'none';
}

function chatTimeLabel(ts) {
  if (!ts) return '';
  const d = new Date(ts);
  if (Number.isNaN(d.getTime())) return '';
  return `<span class="chat-msg-time">${d.toLocaleTimeString('es-EC', { hour: '2-digit', minute: '2-digit' })}</span>`;
}

// Estilo WhatsApp: Aurelio a la izquierda, el usuario a la derecha; sin rótulos ni tablas.
function chatMessageHtml(msg, isNew) {
  const time = chatTimeLabel(msg.ts);
  if (msg.sender === 'aurelio') {
    return `
      <div class="chat-msg aurelio${isNew ? ' chat-msg-new' : ''}">
        <div class="chat-msg-body">${formatAurelioMessage(msg.text)}</div>${time}
      </div>`;
  }
  return `<div class="chat-msg user">${escapeHtml(msg.text)}${time}</div>`;
}

// scroll: 'bottom' (por defecto) | 'reply-start' (inicio de la última respuesta de Aurelio)
function renderChatMessages({ scroll = 'bottom', animateLast = false } = {}) {
  const msgContainer = document.getElementById('chat-messages-container');
  if (!msgContainer) return;

  const lastIdx = state.chatHistory.length - 1;
  msgContainer.innerHTML = state.chatHistory
    .map((msg, i) => chatMessageHtml(msg, animateLast && i === lastIdx))
    .join('');

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior = reduceMotion ? 'auto' : 'smooth';
  const lastMsg = msgContainer.lastElementChild;

  if (scroll === 'reply-start' && lastMsg) {
    // Se desplaza al inicio de la respuesta para que el usuario vea que Aurelio ya contestó
    msgContainer.scrollTo({ top: Math.max(lastMsg.offsetTop - 8, 0), behavior });
  } else {
    msgContainer.scrollTo({ top: msgContainer.scrollHeight, behavior });
  }
}

async function sendAurelioQuestion(questionText) {
  if (!questionText || !questionText.trim()) return;

  const userQuery = questionText.trim();
  state.chatHistory.push({ sender: 'user', text: userQuery, ts: Date.now() });
  saveStorage('chatHistory', state.chatHistory);
  renderChatMessages();

  // Mostrar indicador de "Aurelio está escribiendo..."
  const msgContainer = document.getElementById('chat-messages-container');
  let typingEl = null;
  if (msgContainer) {
    typingEl = document.createElement('div');
    typingEl.className = 'chat-typing';
    typingEl.id = 'chat-typing-indicator';
    typingEl.setAttribute('aria-label', 'Aurelio está escribiendo');
    typingEl.innerHTML = `
      <span class="chat-typing-dot"></span>
      <span class="chat-typing-dot"></span>
      <span class="chat-typing-dot"></span>
    `;
    msgContainer.appendChild(typingEl);
    msgContainer.scrollTo({ top: msgContainer.scrollHeight, behavior: 'smooth' });
  }

  const activeCareer = state.rankedCareers.find(c => c.key === state.activeCareerKey);

  try {
    const reply = await queryAurelio(activeCareer, userQuery, state.chatHistory);

    const existingTyping = document.getElementById('chat-typing-indicator');
    if (existingTyping) existingTyping.remove();

    state.chatHistory.push({ sender: 'aurelio', text: reply, ts: Date.now() });
    saveStorage('chatHistory', state.chatHistory);
    updateChatAiStatus();
    renderChatMessages({ scroll: 'reply-start', animateLast: true });

    const src = getLastAurelioSource();
    telemetry.trackAurelioQuery(activeCareer?.key || 'general', userQuery, reply, src === 'local' ? 'local_fallback' : src === 'gemini' ? 'gemini_ai' : 'groq_ai');
  } catch (err) {
    console.error('Error al generar respuesta en AurelioBot:', err);
    const existingTyping = document.getElementById('chat-typing-indicator');
    if (existingTyping) existingTyping.remove();

    const fallbackReply = getAurelioContextualAnswer(activeCareer, userQuery);
    state.chatHistory.push({ sender: 'aurelio', text: fallbackReply, ts: Date.now() });
    saveStorage('chatHistory', state.chatHistory);
    updateChatAiStatus();
    renderChatMessages({ scroll: 'reply-start', animateLast: true });

    telemetry.trackAurelioQuery(activeCareer?.key || 'general', userQuery, fallbackReply, 'local_fallback');
  }
}

// =========================================================
// ATAJOS DE TECLADO Y ACCESIBILIDAD
// =========================================================
function setupKeyboardListeners() {
  window.addEventListener('keydown', (e) => {
    if (state.step === 'phase1') {
      const questions = FASE_1_QUESTIONS.slice(0, 15);
      const currentQ = questions[state.p1Index];
      if (e.key === '1' || e.key === 's' || e.key === 'S') {
        handlePhase1Answer(currentQ, true);
      } else if (e.key === '2' || e.key === 'n' || e.key === 'N') {
        handlePhase1Answer(currentQ, false);
      } else if (e.key === 'ArrowLeft') {
        handlePhase1Back();
      }
    } else if (state.step === 'phase2a') {
      const questions = getBalancedQuestionsForDomain(state.selectedMacro);
      const currentQ = questions[state.p2aIndex];
      if (e.key === '1' || e.key === 's' || e.key === 'S') {
        handlePhase2aAnswer(currentQ, true);
      } else if (e.key === '2' || e.key === 'n' || e.key === 'N') {
        handlePhase2aAnswer(currentQ, false);
      } else if (e.key === 'ArrowLeft') {
        handlePhase2aBack();
      }
    }
  });
}

function setupModalEvents() {
  const closeSyllabusBtn = document.getElementById('btn-close-syllabus');
  if (closeSyllabusBtn) closeSyllabusBtn.onclick = closeSyllabusModal;
  if (syllabusModal) {
    syllabusModal.onclick = (e) => {
      if (e.target === syllabusModal) closeSyllabusModal();
    };
  }

  const closeLeadBtn = document.getElementById('btn-close-lead');
  if (closeLeadBtn) closeLeadBtn.onclick = closeLeadModal;
  if (leadModal) {
    leadModal.onclick = (e) => {
      if (e.target === leadModal) closeLeadModal();
    };
  }

  const leadForm = document.getElementById('lead-form');
  if (leadForm) {
    leadForm.onsubmit = async (e) => {
      e.preventDefault();

      const consentBox = document.getElementById('lead-consent');
      if (consentBox && !consentBox.checked) {
        alert('Por favor, acepta el aviso de privacidad y consentimiento para poder enviar tus datos.');
        return;
      }

      const submitBtn = document.getElementById('btn-submit-lead') || leadForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }

      const name = document.getElementById('lead-name')?.value || '';
      const institution = document.getElementById('lead-institution')?.value || 'Fe y Alegría';
      const phone = document.getElementById('lead-phone')?.value || '';
      const email = document.getElementById('lead-email')?.value || '';
      const activeCareer = state.rankedCareers.find(c => c.key === state.activeCareerKey);

      await telemetry.submitStudentLead({
        name,
        institution,
        phone,
        email,
        career: activeCareer?.name || ''
      });

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Solicitar Asesoría Gratuita';
      }

      alert('¡Gracias! Tus datos han sido enviados a Admisiones PUCE. Un asesor te contactará pronto.');
      closeLeadModal();
    };
  }

  const closeChatBtn = document.getElementById('btn-close-chat');
  if (closeChatBtn) closeChatBtn.onclick = closeChat;

  // Eventos Modal Acerca de (Parte 1 Checklist)
  const aboutModal = document.getElementById('about-modal');
  const btnOpenAbout = document.getElementById('btn-open-about');
  const btnCloseAbout = document.getElementById('btn-close-about');
  const btnAckAbout = document.getElementById('btn-ack-about');

  if (btnOpenAbout && aboutModal) {
    btnOpenAbout.onclick = () => { aboutModal.style.display = 'flex'; };
  }
  if (btnCloseAbout && aboutModal) {
    btnCloseAbout.onclick = () => { aboutModal.style.display = 'none'; };
  }
  if (btnAckAbout && aboutModal) {
    btnAckAbout.onclick = () => { aboutModal.style.display = 'none'; };
  }
  if (aboutModal) {
    aboutModal.onclick = (e) => {
      if (e.target === aboutModal) aboutModal.style.display = 'none';
    };
  }

  // Botón para Borrar Datos y Ejercer Derecho de Supresión LOPDP (Parte 1 Checklist)
  const btnResetData = document.getElementById('btn-reset-data');
  if (btnResetData) {
    btnResetData.onclick = () => {
      if (confirm('¿Deseas borrar todas tus respuestas y datos almacenados en este dispositivo para empezar de cero?')) {
        resetTest();
        if (typeof sessionStorage !== 'undefined') sessionStorage.clear();
        alert('✅ Tus datos locales han sido eliminados de este dispositivo.');
      }
    };
  }

  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  if (chatForm && chatInput) {
    chatForm.onsubmit = (e) => {
      e.preventDefault();
      const val = chatInput.value.trim();
      if (val) {
        sendAurelioQuestion(val);
        chatInput.value = '';
      }
    };
  }

  document.querySelectorAll('.query-chip').forEach(btn => {
    btn.onclick = () => {
      sendAurelioQuestion(btn.textContent.trim());
    };
  });
}

function resetTest() {
  clearTestStorage();
  state.step = 'phase1';
  state.p1Index = 0;
  state.p1Answers = {};
  state.macroScores = {};
  state.selectedMacro = 'sostenibilidad';
  state.selectedSkills = [];
  state.p2aIndex = 0;
  state.p2aAnswers = {};
  state.rankedCareers = [];
  state.activeCareerKey = null;
  state.challengeState = {
    status: 'playing',
    stepId: 'step1',
    matchedPairs: [],
    selectedLeft: null,
    sliderValues: {},
    selectedOption: null
  };
  renderCurrentStep();
}

// Iniciar al cargar el DOM
document.addEventListener('DOMContentLoaded', initTest);
