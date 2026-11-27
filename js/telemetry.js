// js/telemetry.js
// Módulo de telemetría, monitoreo directo con Supabase y sincronización multi-herramienta (Microsoft Clarity + Google Analytics)

import { supabaseInsert, supabaseRpc } from './supabaseClient.js';

class TelemetryTracker {
  constructor() {
    this.sessionId = this.getOrCreateSessionId();
    this.sessionStartTime = Date.now();
    this.isSessionStarted = false;
    this.currentStep = 'init';
    this.lastClickTime = 0;
    this.offlineQueue = [];

    this.initGlobalErrorLogging();
    this.initClickTracking();
    this.initNetworkRecovery();
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
   * Envía evento a las herramientas de analítica activas (Clarity + Google Analytics)
   */
  dispatchExternalAnalytics(eventName, params = {}) {
    // 1. Microsoft Clarity
    try {
      if (typeof window.clarity === 'function') {
        window.clarity("event", eventName);
      }
    } catch (e) {
      console.warn('[Clarity Event Warn]:', e);
    }

    // 2. Google Analytics 4 (GA4) - Respaldo
    try {
      if (typeof window.gtag === 'function') {
        window.gtag("event", eventName, params);
      }
    } catch (e) {
      console.warn('[GA4 Event Warn]:', e);
    }
  }

  /**
   * Registra el inicio formal de una sesión de test
   */
  async trackSessionStart() {
    if (this.isSessionStarted) return;
    this.isSessionStarted = true;

    // Vincular sesión en Clarity y GA4
    if (typeof window.clarity === 'function') {
      window.clarity("identify", this.sessionId);
      window.clarity("set", "device_type", this.detectDevice());
    }
    this.dispatchExternalAnalytics("session_start", {
      session_id: this.sessionId,
      device: this.detectDevice()
    });

    const sessionData = {
      session_id: this.sessionId,
      started_at: new Date().toISOString(),
      device_type: this.detectDevice(),
      browser: this.detectBrowser(),
      screen_resolution: `${window.innerWidth}x${window.innerHeight}`,
      status: 'in_progress'
    };

    return await this.safeInsert('test_sessions', sessionData);
  }

  /**
   * Registra el avance de un paso en el test (Funnel)
   */
  async trackStep(stepName, payload = {}) {
    this.currentStep = stepName;

    if (!this.isSessionStarted) {
      await this.trackSessionStart();
    }

    this.dispatchExternalAnalytics(stepName, payload);

    const eventData = {
      session_id: this.sessionId,
      event_name: 'step_transition',
      step: stepName,
      payload: payload,
      created_at: new Date().toISOString()
    };

    return await this.safeInsert('telemetry_events', eventData);
  }

  /**
   * Registra la finalización del test con las carreras recomendadas
   */
  async trackCompletion(topCareers = [], selectedDomain = '', skillsSelected = []) {
    const totalDuration = Math.round((Date.now() - this.sessionStartTime) / 1000);
    const topCareerName = topCareers[0]?.name || topCareers[0]?.title || 'No definida';

    this.dispatchExternalAnalytics("test_completed", {
      top_career: topCareerName,
      domain: selectedDomain,
      duration: totalDuration
    });

    // El público no puede modificar tablas: la sesión se completa con una función de la base
    // de datos (complete_test_session), que solo acepta sesiones en curso.
    await supabaseRpc('complete_test_session', {
      p_session_id: this.sessionId,
      p_selected_domain: selectedDomain || null,
      p_skills_selected: skillsSelected,
      p_ranked_careers: topCareers.map(c => ({
        key: c.key,
        name: c.name,
        matchPct: c.matchPct,
        score: c.score
      })),
      p_top_career: topCareerName,
      p_total_duration_seconds: totalDuration
    });

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
    this.dispatchExternalAnalytics("aurelio_query", {
      career: careerKey,
      source: source
    });

    const queryData = {
      session_id: this.sessionId,
      career_key: careerKey || 'general',
      query_text: queryText,
      answer_preview: (answerPreview || '').substring(0, 300),
      source: source,
      created_at: new Date().toISOString()
    };

    return await this.safeInsert('aurelio_queries', queryData);
  }

  /**
   * Registra un lead interesado en la PUCE (Formulario final opcional)
   */
  async submitStudentLead(lead) {
    this.dispatchExternalAnalytics("lead_submitted", {
      career: lead.career,
      institution: lead.institution
    });

    const leadData = {
      session_id: this.sessionId,
      full_name: lead.name || 'Anónimo',
      institution: lead.institution || 'Fe y Alegría',
      phone: lead.phone || '',
      email: lead.email || '',
      preferred_career: lead.career || '',
      created_at: new Date().toISOString()
    };

    return await this.safeInsert('student_leads', leadData);
  }

  /**
   * Registra un error o excepción de JavaScript (Crashlytics)
   */
  async trackError(errorMessage, errorStack = '') {
    this.dispatchExternalAnalytics("app_error", {
      error: (errorMessage || '').substring(0, 100)
    });

    const errorData = {
      session_id: this.sessionId,
      error_message: (errorMessage || '').substring(0, 500),
      error_stack: (errorStack || '').substring(0, 1000),
      url: window.location.href,
      created_at: new Date().toISOString()
    };

    return await this.safeInsert('error_logs', errorData);
  }

  /**
   * Sistema de inserción segura con soporte ante caídas de red
   */
  async safeInsert(tableName, data) {
    try {
      const res = await supabaseInsert(tableName, data);
      // Solo se reintenta si no hubo conexión o el servidor falló (5xx).
      // Un rechazo de la base de datos (4xx) no se reintenta: fallaría igual.
      if (res.error && (res.status === 0 || res.status >= 500) && res.error !== 'Supabase no está configurado') {
        this.queueOffline(tableName, data);
      }
      return res;
    } catch (e) {
      this.queueOffline(tableName, data);
      return { data: null, error: e.message };
    }
  }

  queueOffline(tableName, data) {
    this.offlineQueue.push({ table: tableName, data: data, timestamp: Date.now() });
    try {
      sessionStorage.setItem('fya_offline_queue', JSON.stringify(this.offlineQueue.slice(-50)));
    } catch (e) {}
  }

  initNetworkRecovery() {
    window.addEventListener('online', async () => {
      console.log('[Telemetría]: Conexión recuperada. Vaciando cola offline...');
      if (this.offlineQueue.length > 0) {
        const queueToFlush = [...this.offlineQueue];
        this.offlineQueue = [];
        for (const item of queueToFlush) {
          const res = await supabaseInsert(item.table, item.data);
          if (res.error && (res.status === 0 || res.status >= 500)) this.offlineQueue.push(item);
        }
        try {
          sessionStorage.removeItem('fya_offline_queue');
        } catch (e) {}
      }
    });
  }

  /**
   * Captura automática de clics clave en botones (Respaldo directo de mapa de calor)
   */
  initClickTracking() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, a, .query-chip, .react-skill-chip, .react-challenge-opt-btn');
      if (!target) return;

      const now = Date.now();
      // Throttle de clics rápidos (máx 1 cada 400ms para no saturar la red)
      if (now - this.lastClickTime < 400) return;
      this.lastClickTime = now;

      const label = (target.innerText || target.value || target.id || 'btn').trim().substring(0, 40);
      const clickPayload = {
        element: target.tagName,
        id: target.id || '',
        label: label,
        xPct: Math.round((e.clientX / window.innerWidth) * 100),
        yPct: Math.round((e.clientY / window.innerHeight) * 100),
        step: this.currentStep
      };

      // Guardar evento de interacción en Supabase
      this.safeInsert('telemetry_events', {
        session_id: this.sessionId,
        event_name: 'ui_click',
        step: this.currentStep,
        payload: clickPayload,
        created_at: new Date().toISOString()
      });
    }, { passive: true });
  }

  /**
   * Inicializa la captura global de errores no controlados
   */
  initGlobalErrorLogging() {
    window.addEventListener('error', (event) => {
      // Ignorar errores no críticos de extensiones del navegador
      if (event.filename && event.filename.includes('chrome-extension')) return;

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
