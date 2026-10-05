import React, { useState } from 'react';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { PuceLogo } from '../components/PuceLogo'; // Reutilizamos el logo

export default function AdminLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <div className="min-h-screen bg-puce-background font-sans flex flex-col text-puce-textos">
      
      {/* 1. TOP HEADER INSTITUCIONAL PUCE (Idéntico al MVP) */}
      <div className="w-full bg-[#2d3748] text-white text-[12px] font-sans border-b border-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-normal text-slate-200">
              <Phone className="w-3.5 h-3.5 text-[#00a8cc]" />
              <span>(593) 02 2991 700</span>
            </span>
            <ul className="hidden sm:flex items-center gap-3 text-slate-300 text-xs">
              <li>Facebook</li><li>•</li>
              <li>X</li><li>•</li>
              <li>Instagram</li><li>•</li>
              <li>TikTok</li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
             <span className="text-orange-300 font-bold tracking-wide">MODO ADMINISTRADOR</span>
             <button className="flex items-center gap-1 text-slate-200 hover:text-white font-medium transition-colors">
               <span>Mi cuenta Institucional</span>
               <ChevronDown className="w-3.5 h-3.5" />
             </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (Idéntico al MVP) */}
      <header className="w-full bg-white py-3.5 border-b border-slate-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          
          {/* Logo PUCE */}
          <div className="flex items-center">
            <a href="/admin" className="flex items-center gap-4 cursor-pointer">
              <img
                src="https://www.puce.edu.ec/wp-content/uploads/2026/05/horizontal_color.png"
                alt="PUCE"
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

          {/* Menú de Navegación Horizontal */}
          <nav className="hidden lg:flex items-center gap-7 font-sans text-[14px] text-slate-700 font-medium">
            <a 
              href="/admin" 
              className={`py-2 transition-colors ${currentPath === '/admin' ? 'text-[#00a8cc] font-semibold' : 'hover:text-[#00a8cc]'}`}
            >
              Dashboard
            </a>
            <a 
              href="/admin/estudiantes" 
              className={`py-2 transition-colors ${currentPath.includes('/estudiantes') ? 'text-[#00a8cc] font-semibold' : 'hover:text-[#00a8cc]'}`}
            >
              Directorio de Estudiantes
            </a>
            <a 
              href="/admin/facultades" 
              className={`py-2 transition-colors ${currentPath.includes('/facultades') ? 'text-[#00a8cc] font-semibold' : 'hover:text-[#00a8cc]'}`}
            >
              Estructura (Facultades)
            </a>
            <a 
              href="/admin/preguntas" 
              className={`py-2 transition-colors ${currentPath.includes('/preguntas') ? 'text-[#00a8cc] font-semibold' : 'hover:text-[#00a8cc]'}`}
            >
              Preguntas App
            </a>
            
            {/* Botón CTA - Cerrar Sesión */}
            <button className="bg-white border border-red-200 text-red-500 hover:bg-red-50 text-[12px] py-2 px-4 font-bold rounded transition">
              CERRAR SESIÓN
            </button>
          </nav>

          {/* Menú hamburguesa móvil */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-slate-300 text-slate-700 bg-white rounded-[2px]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-2 flex flex-col font-sans text-sm font-bold shadow-md">
          <a href="/admin" className="py-3 border-b border-slate-100 text-slate-700">Dashboard</a>
          <a href="/admin/estudiantes" className="py-3 border-b border-slate-100 text-slate-700">Directorio de Estudiantes</a>
          <a href="/admin/facultades" className="py-3 border-b border-slate-100 text-slate-700">Facultades</a>
          <a href="/admin/preguntas" className="py-3 border-b border-slate-100 text-slate-700">Preguntas</a>
          <button className="mt-4 bg-red-50 text-red-600 py-3 rounded">Cerrar Sesión</button>
        </div>
      )}

      {/* Contenido Principal (centrado en página) */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer PUCE */}
      <footer className="w-full bg-[#001733] py-6 px-4 text-slate-400 text-xs font-sans mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white uppercase tracking-wider">PUCE • Administración PMV</span>
            <span>|</span>
            <span className="text-slate-400 italic">"Ser más para servir mejor"</span>
          </div>
          <div className="text-[11px] text-slate-500">
            Campus Matriz Quito • Av. 12 de Octubre 1076 y Ramón Roca
          </div>
        </div>
      </footer>
    </div>
  );
}
