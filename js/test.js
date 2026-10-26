// =========================================================
// Orienta PUCE · Módulo del Test Vocacional Completo
// JavaScript Nativo (ES6 Modules) - Idéntico a React
// =========================================================

import { MACROAREAS, FASE_1_QUESTIONS, DOMAIN_DATA } from './data/vocationalData.js';

// --- ESTADO GLOBAL Y PERSISTENCIA (MISMAS CLAVES QUE EN REACT) ---
const STORAGE_PREFIX = 'puce_test_';

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

function clearTestStorage() {
  const keys = ['step', 'qindex', 'p1ans', 'scores', 'macro', 'skills', 'qindex_p2', 'p2aans', 'careers', 'selcareer', 'chatHistory'];
  keys.forEach(k => localStorage.removeItem(STORAGE_PREFIX + k));
}

// Elementos de la vista
const appContainer = document.getElementById('test-app');
const syllabusModal = document.getElementById('syllabus-modal');
const leadModal = document.getElementById('lead-modal');
const chatPanel = document.getElementById('chat-panel');

// SVGs de Aurelio
const AURELIO_IMG = {
  entusiasmadoBrazos: 'assets/img/aurelio/entusiasmado-brazos-arriba.svg',
  neutro: 'assets/img/aurelio/neutro.svg',
  pregunta: 'assets/img/aurelio/pregunta.svg'
};

// --- RENDERIZADOR PRINCIPAL ---
export function initTest() {
  renderCurrentStep();
  setupKeyboardListeners();
  setupModalEvents();
}

function renderCurrentStep() {
  if (!appContainer) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });

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
              <div class="react-icon-box">✓</div>
              <span class="btn-label">SÍ, ME GUSTA</span>
            </button>

            <button id="btn-ans-no" class="react-answer-btn react-btn-no">
              <div class="react-icon-box">✕</div>
              <span class="btn-label">NO ME GUSTA</span>
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

    // Encontrar la macroárea ganadora
    let bestKey = 'economia';
    let maxVal = -1;
    Object.entries(scores).forEach(([key, val]) => {
      if (val > maxVal) {
        maxVal = val;
        bestKey = key;
      }
    });

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
  const macroName = MACROAREAS[state.selectedMacro]?.name || 'Economía y Gestión Empresarial';

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

      <button id="btn-continue-transition" class="react-btn-cyan">
        Continuar a Fase 2 →
      </button>
    </div>
  `;

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
// FASE 2A: PREGUNTAS DE DOMINIO (IDÉNTICO A REACT)
// =========================================================
function renderPhase2a() {
  const domain = DOMAIN_DATA[state.selectedMacro] || DOMAIN_DATA.economia;
  const questions = (domain.questions || []).slice(0, 15);
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
              <div class="react-icon-box">✓</div>
              <span class="btn-label">SÍ, ME GUSTA</span>
            </button>

            <button id="btn-ans2-no" class="react-answer-btn react-btn-no">
              <div class="react-icon-box">✕</div>
              <span class="btn-label">NO ME GUSTA</span>
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

  const domain = DOMAIN_DATA[state.selectedMacro] || DOMAIN_DATA.economia;
  const questions = (domain.questions || []).slice(0, 15);

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

  const results = Object.entries(domain.careers).map(([cKey, cData]) => {
    let score = 0;
    if (cData.items) {
      cData.items.forEach(qId => {
        if (state.p2aAnswers[qId] === true) score += 2;
      });
    }

    if (cData.skills) {
      cData.skills.forEach(skill => {
        if (state.selectedSkills.includes(skill)) score += 1;
      });
    }

    const maxPossibleScore = (cData.items?.length || 0) * 2 + (cData.skills?.length || 0);
    const calculatedPct = Math.round((score / Math.max(maxPossibleScore, 1)) * 100);
    const matchPct = Math.min(calculatedPct, 100);

    return {
      key: cKey,
      ...cData,
      faculty: domain.faculty,
      score,
      matchPct
    };
  });

  results.sort((a, b) => b.score - a.score || b.matchPct - a.matchPct);

  state.rankedCareers = results.slice(0, 3);
  state.activeCareerKey = state.rankedCareers[0]?.key || null;
  state.step = 'results';

  saveStorage('careers', state.rankedCareers);
  saveStorage('selcareer', state.activeCareerKey);
  saveStorage('step', 'results');

  renderCurrentStep();
}

// =========================================================
// PANTALLA DE RESULTADOS (IDÉNTICO A REACT)
// =========================================================
function renderResults() {
  const activeCareer = state.rankedCareers.find(c => c.key === state.activeCareerKey) || state.rankedCareers[0];
  if (!activeCareer) return;

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

      <div class="react-results-grid">
        <!-- SIDEBAR: LISTA DE CARRERAS -->
        <div class="react-results-sidebar">
          <h3 class="react-sidebar-title">Ranking de Afinidad</h3>
          <div>
            ${state.rankedCareers.map((career, idx) => {
              const isSelected = state.activeCareerKey === career.key;
              return `
                <button class="react-career-item-btn ${isSelected ? 'selected' : ''}" data-key="${career.key}">
                  <div class="react-career-left">
                    <div class="react-career-num">${idx + 1}</div>
                    <span class="react-career-name">${career.name}</span>
                  </div>
                  <span class="react-career-pct">${career.matchPct}%</span>
                </button>
              `;
            }).join('')}
          </div>

          <!-- Aptitudes Consolidadas -->
          <div class="react-aptitudes-box">
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
            <p class="react-detail-desc">${activeCareer.description}</p>

            ${activeCareer.fieldOfWork ? `
              <div class="react-field-box">
                <span style="font-size: 16px;">💼</span>
                <div>
                  <strong style="color: #003b81;">Campo ocupacional & impacto:</strong>
                  <span>${activeCareer.fieldOfWork}</span>
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
            ${(activeCareer.benefits || [
              { topText: 'Descuento', highlight: '34%', title: 'sobre aranceles' },
              { topText: 'Inversión', highlight: '$2600', title: 'por semestre' },
              { topText: 'Empleabilidad', highlight: '94%', title: 'alta demanda' }
            ]).map(b => `
              <div class="react-stat-cell">
                <span class="react-stat-label">${b.topText}</span>
                <span class="react-stat-num">${b.highlight}</span>
                <span class="react-stat-sub">${b.title}</span>
              </div>
            `).join('')}
          </div>

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
        <button id="btn-retry-challenge" style="background: none; border: none; font-size: 11px; font-weight: 700; color: #00a8cc; text-transform: uppercase; cursor: pointer;">
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
        <button id="btn-retry-challenge" style="background: none; border: none; font-size: 11px; font-weight: 700; color: #00a8cc; text-transform: uppercase; cursor: pointer;">
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
            ${isCorrect ? '¡Excelente decisión!' : 'No es la mejor alternativa'}
          </p>
          <p style="font-size: 11px; color: ${isCorrect ? '#166534' : '#9a3412'}; margin: 0;">
            ${isCorrect 
              ? 'Un buen profesional de esta área siempre busca soluciones basadas en evidencia y planificación.' 
              : 'En esta carrera, es vital analizar las variables y buscar soluciones estructuradas en lugar de improvisar.'}
          </p>
        </div>
        <button id="btn-retry-challenge" style="background: none; border: none; font-size: 11px; font-weight: 700; color: #00a8cc; text-transform: uppercase; cursor: pointer;">
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

  const syllabus = career.syllabus || {
    semesters: [
      ['Fundamentos de Investigación', 'Matemática I', 'Contabilidad Básica', 'Fundamentos de Administración'],
      ['Estadística I', 'Pensamiento Creativo e Innovación', 'Introducción a la Macroeconomía', 'Ética e Interculturalidad'],
      ['Investigación de Operaciones', 'Marketing y Ecosistema Digital', 'Jesucristo y Aprendizajes Vitales'],
      ['Gestión de Proyectos', 'Integración Curricular', 'Seminario de Titulación']
    ],
    subjectDetails: {}
  };

  const modalCareerTitle = document.getElementById('syllabus-career-title');
  const modalBody = document.getElementById('syllabus-body');

  if (modalCareerTitle) modalCareerTitle.textContent = career.name || 'Carrera Universitaria';

  if (modalBody) {
    modalBody.innerHTML = `
      <p style="font-size: 13px; color: #64748b; margin-bottom: 24px;">
        Pasa el cursor o pulsa sobre cualquier materia para conocer más información formativa.
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px;">
        ${syllabus.semesters.map((sem, sIdx) => `
          <div style="border-bottom: 2px solid #003b81; padding-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
              <h4 style="font-size: 13px; font-weight: 800; text-transform: uppercase; color: #003b81; margin: 0;">
                Nivel ${sIdx + 1}
              </h4>
              <span style="font-size: 11px; color: #94a3b8;">${sem.length} materias</span>
            </div>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 12px; line-height: 1.4;">
              ${sem.map(subject => {
                const desc = syllabus.subjectDetails?.[subject] || 'Asignatura orientada a desarrollar destrezas prácticas y criterio profesional.';
                return `
                  <li style="padding: 6px 0; border-bottom: 1px solid #f1f5f9; cursor: pointer;" title="${desc}" onclick="alert('${subject}:\\n\\n${desc.replace(/'/g, "\\'")}')">
                    • <span style="font-weight: 500; color: #334155;">${subject}</span>
                  </li>
                `;
              }).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      ${syllabus.itineraries && syllabus.itineraries.length > 0 ? `
        <div style="margin-top: 32px; border-top: 1px solid #f1f5f9; padding-top: 20px;">
          <h4 style="font-size: 13px; font-weight: 800; color: #003b81; text-transform: uppercase; margin-bottom: 12px;">
            Itinerarios de Especialización
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px;">
            ${syllabus.itineraries.map(iti => `
              <div style="border-left: 2px solid #00a8cc; padding-left: 12px;">
                <strong style="font-size: 13px; color: #003b81;">${iti.name}</strong>
                <ul style="padding-left: 14px; margin: 6px 0; font-size: 12px; color: #64748b;">
                  ${iti.subjects.map(s => `<li>${s}</li>`).join('')}
                </ul>
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

function openChat() {
  if (chatPanel) {
    chatPanel.style.display = 'flex';
    renderChatMessages();
  }
}

function closeChat() {
  if (chatPanel) chatPanel.style.display = 'none';
}

function renderChatMessages() {
  const msgContainer = document.getElementById('chat-messages-container');
  if (!msgContainer) return;

  msgContainer.innerHTML = state.chatHistory.map(msg => `
    <div class="chat-msg ${msg.sender}">
      ${msg.text}
    </div>
  `).join('');

  msgContainer.scrollTop = msgContainer.scrollHeight;
}

function sendAurelioQuestion(questionText) {
  if (!questionText || !questionText.trim()) return;

  state.chatHistory.push({ sender: 'user', text: questionText });
  saveStorage('chatHistory', state.chatHistory);
  renderChatMessages();

  setTimeout(() => {
    const activeCareer = state.rankedCareers.find(c => c.key === state.activeCareerKey);
    const cName = activeCareer?.name || 'tu carrera elegida';

    let reply = `En la PUCE, la carrera de ${cName} cuenta con mallas curriculares actualizadas, laboratorios equipados y docentes con alta trayectoria académica y profesional.`;

    const lower = questionText.toLowerCase();
    if (lower.includes('matemática') || lower.includes('número') || lower.includes('difícil')) {
      reply = `Es comprensible sentir respeto por asignaturas cuantitativas. En la PUCE cuentas con tutorías académicas personalizadas, grupos de acompañamiento y docentes comprometidos para apoyarte desde el primer ciclo.`;
    } else if (lower.includes('trabajo') || lower.includes('empleo') || lower.includes('sueldo') || lower.includes('dinero') || lower.includes('campo')) {
      reply = `La PUCE lidera la empleabilidad universitaria en Ecuador gracias al prestigio ético de sus egresados y a la red de convenios con empresas, organismos internacionales y el sector público.`;
    } else if (lower.includes('beca') || lower.includes('costo') || lower.includes('financiamiento')) {
      reply = `La universidad aplica aranceles diferenciados y cuenta con diversos programas de becas socioeconómicas y al mérito para que el factor económico no limite tu vocación.`;
    }

    state.chatHistory.push({ sender: 'aurelio', text: reply });
    saveStorage('chatHistory', state.chatHistory);
    renderChatMessages();
  }, 400);
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
      const domain = DOMAIN_DATA[state.selectedMacro] || DOMAIN_DATA.economia;
      const questions = (domain.questions || []).slice(0, 15);
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
    leadForm.onsubmit = (e) => {
      e.preventDefault();
      alert('¡Gracias! Tus datos han sido enviados. Un asesor te contactará pronto.');
      closeLeadModal();
    };
  }

  const closeChatBtn = document.getElementById('btn-close-chat');
  if (closeChatBtn) closeChatBtn.onclick = closeChat;

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
  state.selectedSkills = [];
  state.p2aIndex = 0;
  state.p2aAnswers = {};
  state.rankedCareers = [];
  state.activeCareerKey = null;
  renderCurrentStep();
}

// Iniciar al cargar el DOM
document.addEventListener('DOMContentLoaded', initTest);
