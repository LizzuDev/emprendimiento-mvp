import React, { useMemo } from 'react';
import AdminLayout from './AdminLayout';
import { FASE_1_QUESTIONS, DOMAIN_DATA } from '../data/vocationalData';

export default function AdminDashboard() {
  const stats = useMemo(() => {
    let numCareers = 0;
    Object.values(DOMAIN_DATA).forEach(domain => {
      numCareers += Object.keys(domain.careers).length;
    });

    return {
      numQuestions: FASE_1_QUESTIONS.length,
      numCareers: numCareers
    };
  }, []);

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-puce-titulos font-headline">Dashboard Institucional</h1>
        <p className="text-puce-textos">Métricas generales de bienestar universitario (Basado en datos del MVP)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-sm font-medium text-puce-textos uppercase tracking-wider font-bold">Oferta Académica</h3>
          <p className="text-3xl font-bold text-puce-principal mt-2">{stats.numCareers} <span className="text-sm font-normal text-slate-400">carreras</span></p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-sm font-medium text-puce-textos uppercase tracking-wider font-bold">Banco de Preguntas</h3>
          <p className="text-3xl font-bold text-puce-secundario mt-2">{stats.numQuestions} <span className="text-sm font-normal text-slate-400">ítems activos</span></p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-sm font-medium text-puce-textos uppercase tracking-wider font-bold">Total Evaluados</h3>
          <p className="text-3xl font-bold text-puce-botones mt-2">1,248 <span className="text-sm font-normal text-slate-400">estudiantes</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gráfico Simulado 1: Tendencia de Macroáreas */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="font-bold text-puce-titulos mb-4">Afinidad Vocacional por Macroárea (Mes Actual)</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-puce-textos font-medium">Economía y Negocios</span>
                <span className="text-puce-principal font-bold">35%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-[#003b81] h-2.5 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-puce-textos font-medium">Salud y Bienestar</span>
                <span className="text-puce-botones font-bold">28%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-[#1aa9df] h-2.5 rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-puce-textos font-medium">Hábitat y Creatividad</span>
                <span className="text-[#06b2b3] font-bold">18%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-[#06b2b3] h-2.5 rounded-full" style={{ width: '18%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-puce-textos font-medium">Sociales y Humanidades</span>
                <span className="text-slate-500 font-bold">12%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-slate-400 h-2.5 rounded-full" style={{ width: '12%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-puce-textos font-medium">Sostenibilidad</span>
                <span className="text-slate-500 font-bold">7%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-slate-300 h-2.5 rounded-full" style={{ width: '7%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel Simulado 2: Métricas de Conversión */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col justify-center items-center text-center">
            <h4 className="text-xs uppercase font-bold text-puce-textos mb-2">Tasa de Finalización</h4>
            <div className="relative w-24 h-24 mb-2">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-slate-100"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-green-500"
                  strokeWidth="3"
                  strokeDasharray="82, 100"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-puce-titulos">82%</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-400">De los que inician el test lo terminan</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col justify-center items-center text-center">
             <h4 className="text-xs uppercase font-bold text-puce-textos mb-2">Tiempo Promedio</h4>
             <span className="text-3xl font-bold text-puce-titulos my-4">6.5 <span className="text-lg">min</span></span>
             <p className="text-[10px] text-slate-400">Por evaluación completada</p>
          </div>
          
          <div className="col-span-2 bg-gradient-to-r from-puce-principal to-puce-botones p-6 rounded-lg shadow-sm text-white flex justify-between items-center">
            <div>
              <h4 className="font-bold text-lg">Reporte Detallado</h4>
              <p className="text-xs opacity-80 mt-1">Exporta la analítica completa a Excel/CSV</p>
            </div>
            <button className="bg-white text-puce-principal px-4 py-2 rounded-full text-xs font-bold hover:bg-slate-50 transition shadow-sm">
              Descargar Informe
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
