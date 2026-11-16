// js/telemetry.js
// Módulo de telemetría y monitoreo directo con Supabase y Microsoft Clarity

import { supabaseInsert, supabaseUpdate } from './supabaseClient.js';

class TelemetryTracker {
  constructor() {
    this.sessionId = this.getOrCreateSessionId();
    this.sessionStartTime = Date.now();
    this.isSessionStarted = false;
    this.initGlobalErrorLogging();
  }

  getOrCreateSessionId() {
    let sid = sessionStorage.getItem('fya_session_id');
    if (!sid) {
      sid = 'fya-' + Math.random().toString(36).substring(2, 9) + '-' + Date.now().toString(36);
      sessionStorage.setItem('fya_session_id', sid);
    }
    return sid;
  }

  detectDevice() {
    const ua = navigator.userAgent;
    let device = 'Desktop';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
      device = 'Mobile';
    } else if (/Tablet|iPad/i.test(ua)) {
      device = 'Tablet';
    }
    return device;
  }

  detectBrowser() {
    const ua = navigator.userAgent;
    if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
    if (ua.includes('Edg')) return 'Edge';
    if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
    if (ua.includes('Firefox')) return 'Firefox';
    return 'Other';
  }

  /**
   * Registra el inicio formal de una sesión de test
   */
  async trackSessionStart() {
    if (this.isSessionStarted) return;
    this.isSessionStarted = true;

    // Vincular sesión en Microsoft Clarity si está disponible
    if (typeof window.clarity === 'function') {
      window.clarity("identify", this.sessionId);
      window.clarity("set", "device_type", this.detectDevice());
    }

    const sessionData = {
      session_id: this.sessionId,
      started_at: new Date().toISOString(),
      device_type: this.detectDevice(),
      browser: this.detectBrowser(),
      screen_resolution: `${window.innerWidth}x${window.innerHeight}`,
      status: 'in_progress'
    };

    return await supabaseInsert('test_sessions', sessionData);
  }

  /**
   * Registra el avance de un paso en el test (Funnel)
   */
  async trackStep(stepName, payload = {}) {
    if (!this.isSessionStarted) {
      await this.trackSessionStart();
    }

    const eventData = {
      session_id: this.sessionId,
      event_name: 'step_transition',
      step: stepName,
      payload: payload,
      created_at: new Date().toISOString()
    };

    return await supabaseInsert('telemetry_events', eventData);
  }

  /**
   * Registra la finalización del test con las carreras recomendadas
   */
  async trackCompletion(topCareers = [], selectedDomain = '', skillsSelected = []) {
    const totalDuration = Math.round((Date.now() - this.sessionStartTime) / 1000);
    const topCareerName = topCareers[0]?.name || topCareers[0]?.title || 'No definida';

    const updateData = {
      completed_at: new Date().toISOString(),
      selected_domain: selectedDomain,
      skills_selected: skillsSelected,
      ranked_careers: topCareers.map(c => ({
        key: c.key,
        name: c.name,
        matchPct: c.matchPct,
        score: c.score
      })),
      top_career: topCareerName,
      total_duration_seconds: totalDuration,
      status: 'completed'
    };

    // Actualizar registro en test_sessions
    await supabaseUpdate('test_sessions', 'session_id', this.sessionId, updateData);

    // Evento de telemetría de finalización
    await this.trackStep('test_completed', {
      topCareer: topCareerName,
      durationSeconds: totalDuration
    });
  }

  /**
   * Registra una pregunta realizada al orientador AurelioBot
   */
  async trackAurelioQuery(careerKey, queryText, answerPreview = '', source = 'local') {
    const queryData = {
      session_id: this.sessionId,
      career_key: careerKey || 'general',
      query_text: queryText,
      answer_preview: (answerPreview || '').substring(0, 300),
      source: source,
      created_at: new Date().toISOString()
    };

    return await supabaseInsert('aurelio_queries', queryData);
  }

  /**
   * Registra un lead interesado en la PUCE (Formulario final opcional)
   */
  async submitStudentLead(lead) {
    const leadData = {
      session_id: this.sessionId,
      full_name: lead.name || 'Anónimo',
      institution: lead.institution || 'Fe y Alegría',
      phone: lead.phone || '',
      email: lead.email || '',
      preferred_career: lead.career || '',
      created_at: new Date().toISOString()
    };

    return await supabaseInsert('student_leads', leadData);
  }

  /**
   * Registra un error o excepción de JavaScript (Crashlytics)
   */
  async trackError(errorMessage, errorStack = '') {
    const errorData = {
      session_id: this.sessionId,
      error_message: (errorMessage || '').substring(0, 500),
      error_stack: (errorStack || '').substring(0, 1000),
      url: window.location.href,
      created_at: new Date().toISOString()
    };

    return await supabaseInsert('error_logs', errorData);
  }

  /**
   * Inicializa la captura global de errores no controlados
   */
  initGlobalErrorLogging() {
    window.addEventListener('error', (event) => {
      this.trackError(
        event.message || 'Error desconocido',
        event.error?.stack || `${event.filename}:${event.lineno}`
      );
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackError(
        `Unhandled Promise: ${event.reason?.message || event.reason}`,
        event.reason?.stack || ''
      );
    });
  }
}

export const telemetry = new TelemetryTracker();

