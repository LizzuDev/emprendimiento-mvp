import React, { useState } from 'react';
import {
  Menu,
  X,
  Compass,
  Phone,
  Search,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { PuceLogo } from './PuceLogo';

export function Header({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [admisionesMenuOpen, setAdmisionesMenuOpen] = useState(false);

  const handleNav = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full z-50 sticky top-0 bg-white border-b border-slate-200 shadow-sm transition-colors">
      
      {/* ========================================================
          1. TOP HEADER INSTITUCIONAL PUCE (#top-header)
          ======================================================== */}
      <div id="top-header" className="w-full bg-[#2d3748] text-white text-[12px] font-sans border-b border-[#1f2937]">
        <div className="puce-container py-2 flex items-center justify-between">
          
          {/* Teléfono y Redes Sociales */}
          <div id="et-info" className="flex items-center gap-6">
            <span id="et-info-phone" className="flex items-center gap-2 font-normal text-slate-200">
              <Phone className="w-3.5 h-3.5 text-[#00a8cc]" />
              <span>(593) 02 2991 700</span>
            </span>

            <ul className="hidden sm:flex items-center gap-3 text-slate-300 text-xs">
              <li>
                <a
                  href="https://www.facebook.com/pontificiauniversidadcatolicadelecuador"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>•</li>
              <li>
                <a
                  href="https://twitter.com/PUCE_Ecuador"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X
                </a>
              </li>
              <li>•</li>
              <li>
                <a
                  href="https://www.instagram.com/puce_ecuador/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>•</li>
              <li>
                <a
                  href="https://www.tiktok.com/@puce_ecuador"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Menú Secundario: Mi Cuenta */}
          <div id="et-secondary-menu" className="relative">
            <button
              onClick={() => setAccountMenuOpen(!accountMenuOpen)}
              className="flex items-center gap-1 text-slate-200 hover:text-white font-medium transition-colors focus:outline-none"
            >
              <span>Mi cuenta</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {accountMenuOpen && (
              <div className="absolute right-0 top-full mt-1 w-44 bg-white text-slate-800 shadow-xl border border-slate-200 py-2 z-50 text-xs">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.puce.edu.ec/intranet/login"
                  className="block px-4 py-2 hover:bg-slate-100 font-medium"
                >
                  Intranet
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://ssoserver2.puce.edu.ec/"
                  className="block px-4 py-2 hover:bg-slate-100 font-medium"
                >
                  Aulas Virtuales
                </a>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ========================================================
          2. MAIN HEADER (#main-header)
          ======================================================== */}
      <div id="main-header" className="w-full bg-white py-3.5 border-b border-slate-100">
        <div className="puce-container flex items-center justify-between">
          
          {/* Logo PUCE con 80 Años */}
          <div className="logo_container flex items-center">
            <a
              href="#hub"
              onClick={(e) => {
                e.preventDefault();
                handleNav('hub');
              }}
              className="flex items-center gap-4 cursor-pointer"
            >
              <img
                src="https://www.puce.edu.ec/wp-content/uploads/2026/05/horizontal_color.png"
                alt="Pontificia Universidad Católica del Ecuador"
                id="logo"
                className="h-12 sm:h-14 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden" style={{ display: 'none' }}>
                <PuceLogo variant="color" size="default" />
              </div>
            </a>
          </div>

          {/* Menú de Navegación Institucional (Sentence Case, Peso Medio) */}
          <div id="et-top-navigation" className="hidden lg:flex items-center gap-7 font-sans text-[14px] text-slate-700 font-medium">
            
            <a
              href="https://www.puce.edu.ec/grado/"
              target="_blank"
              rel="noreferrer"
              className="py-2 hover:text-[#00a8cc] transition-colors flex items-center gap-1 text-slate-700"
            >
              <span>Programas de estudio</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {/* Descubre tu Futuro (Active / Highlighted in Cyan #00a8cc) */}
            <div className="relative group">
              <button
                onClick={() => handleNav('test')}
                className={`py-2 flex items-center gap-1 font-semibold transition-colors ${
                  activeTab === 'test' || activeTab === 'hub' ? 'text-[#00a8cc]' : 'text-slate-700 hover:text-[#00a8cc]'
                }`}
              >
                <span>Descubre tu Futuro</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#00a8cc]" />
              </button>
            </div>

            <a
              href="https://www.puce.edu.ec/investigacion"
              target="_blank"
              rel="noreferrer"
              className="py-2 hover:text-[#00a8cc] transition-colors flex items-center gap-1 text-slate-700"
            >
              <span>Investigación y Vinculación</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <div className="relative group">
              <button
                onClick={() => handleNav('aurelio')}
                className={`py-2 flex items-center gap-1 hover:text-[#00a8cc] transition-colors ${
                  activeTab === 'aurelio' ? 'text-[#00a8cc] font-semibold' : 'text-slate-700'
                }`}
              >
                <span>Nosotros</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Buscador Institucional */}
            <button
              onClick={() => handleNav('test')}
              title="Buscar en PUCE"
              className="p-2 text-slate-600 hover:text-[#00a8cc] transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Botón CTA Divi Style */}
            <button
              onClick={() => handleNav('test')}
              className="et_pb_button et_pb_button_cyan text-[12px] py-2 px-4 shadow-sm"
            >
              <span>Test Vocacional</span>
            </button>
          </div>

          {/* Menú hamburguesa móvil */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-slate-300 text-slate-700 bg-white rounded-[2px]"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-4 flex flex-col gap-3 font-sans text-sm font-bold shadow-lg text-left">
          <button
            onClick={() => handleNav('hub')}
            className={`py-2 border-b border-slate-100 ${
              activeTab === 'hub' ? 'text-puce-principal' : 'text-slate-700'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleNav('test')}
            className={`py-2 border-b border-slate-100 flex items-center justify-between ${
              activeTab === 'test' ? 'text-puce-principal' : 'text-slate-700'
            }`}
          >
            <span>Test Vocacional Oficial</span>
            <span className="text-[10px] bg-dorado text-slate-900 px-2 py-0.5 font-black">OFICIAL</span>
          </button>
          <button
            onClick={() => handleNav('aurelio')}
            className={`py-2 border-b border-slate-100 ${
              activeTab === 'aurelio' ? 'text-puce-principal' : 'text-slate-700'
            }`}
          >
            Aurelio (Mascota)
          </button>
          <button
            onClick={() => handleNav('test')}
            className="w-full mt-2 et_pb_button et_pb_button_primary py-3"
          >
            Iniciar Evaluación Vocacional
          </button>
        </div>
      )}

    </header>
  );
}