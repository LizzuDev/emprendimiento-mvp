import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { WellnessProvider, useWellness } from './context/WellnessContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { STORAGE_KEYS } from './services/storage';
import { Header } from './components/Header';
import { OrientaLanding } from './components/OrientaLanding';
import { VocationalTest } from './components/VocationalTest';
import { AboutAurelio } from './components/AboutAurelio';
import { PuceTransition } from './components/PuceTransition';

function MainContent({ initialTab = 'hub' }) {
  const [activeTab, setActiveTabState] = useLocalStorage(STORAGE_KEYS.ACTIVE_TAB, initialTab);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { isSkyMode } = useWellness();

  const setActiveTab = (tab) => {
    if (tab === activeTab || isTransitioning) return;
    setIsTransitioning(true);
    setActiveTabState(tab);
    if (window.location.hash !== `#${tab}`) {
      window.history.pushState({ tab }, '', `#${tab}`);
    }
    // Small debounce to prevent rapid double-clicks
    setTimeout(() => {
      setIsTransitioning(false);
    }, 100);
  };

  useEffect(() => {
    const hashTab = window.location.hash.slice(1);
    if (hashTab && hashTab !== activeTab) {
      setActiveTabState(hashTab);
    } else {
      window.history.replaceState({ tab: activeTab }, '', `#${activeTab}`);
    }

    const handlePopState = (event) => {
      const tab = event.state?.tab || window.location.hash.slice(1);
      if (tab) setActiveTabState(tab);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="page-container" className="min-h-screen flex flex-col relative font-sans bg-white text-slate-800">
      <div id="et-boc" className="et-boc flex-1 flex flex-col">
        {/* Transición Fluida Institucional PUCE (removida) */}

        {/* Header Institucional PUCE con Pre-Header y Logo Oficial */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 w-full flex flex-col">
        {activeTab === 'hub' && (
          <OrientaLanding
            onStartTest={() => setActiveTab('test')}
            onNavigateToAurelio={() => setActiveTab('aurelio')}
          />
        )}
        {activeTab === 'test' && (
          <VocationalTest
            onFinishTest={() => setActiveTab('hub')}
            onBackToHome={() => setActiveTab('hub')}
          />
        )}
        {(activeTab === 'aurelio' || activeTab === 'about') && (
          <AboutAurelio
            onStartTest={() => setActiveTab('test')}
          />
        )}
      </main>

        {/* Footer Institucional Compacto para vistas no-hub */}
        {activeTab !== 'hub' && (
          <footer className="w-full bg-[#001733] border-t border-slate-800 py-6 px-4 sm:px-6 text-slate-400 text-xs font-sans">
            <div className="puce-container flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white uppercase tracking-wider">PUCE • Descubre tu Futuro</span>
                <span>|</span>
                <span className="text-slate-400 italic">"Ser más para servir mejor"</span>
              </div>
              <div className="text-[11px] text-slate-500">
                Campus Matriz Quito • Av. 12 de Octubre 1076 y Ramón Roca
              </div>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}

import AdminDashboard from './admin/AdminDashboard';
import Facultades from './admin/Facultades';
import Estudiantes from './admin/Estudiantes';
import Preguntas from './admin/Preguntas';

export default function App() {
  // Aislamiento total: si la URL incluye /admin, cargamos solo el módulo administrativo
  if (window.location.pathname.startsWith('/admin')) {
    const path = window.location.pathname;
    
    let AdminComponent = AdminDashboard;
    if (path.includes('/admin/facultades')) {
      AdminComponent = Facultades;
    } else if (path.includes('/admin/estudiantes')) {
      AdminComponent = Estudiantes;
    } else if (path.includes('/admin/preguntas')) {
      AdminComponent = Preguntas;
    }

    return (
      <AuthProvider>
        <AdminComponent />
      </AuthProvider>
    );
  }

  // De lo contrario, cargamos la aplicación normal del estudiante
  return (
    <AuthProvider>
      <WellnessProvider>
        <MainContent initialTab="hub" />
      </WellnessProvider>
    </AuthProvider>
  );
}
