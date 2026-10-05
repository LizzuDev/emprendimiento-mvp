import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { FASE_1_QUESTIONS } from '../data/vocationalData';

export default function Preguntas() {
  const [preguntas, setPreguntas] = useState([]);
  const [nuevaPregunta, setNuevaPregunta] = useState('');
  const [tipoRespuesta, setTipoRespuesta] = useState('scale_1_5');

  useEffect(() => {
    // Cargamos las 30 preguntas reales del banco oficial del MVP
    const mappedQuestions = FASE_1_QUESTIONS.map(q => ({
      id: q.id,
      question_text: q.text,
      question_type: 'scale_1_5', // El Test original asume escala para todas
      is_active: true,
      macroarea: q.macroarea
    }));
    setPreguntas(mappedQuestions);
  }, []);

  const handleAddPregunta = (e) => {
    e.preventDefault();
    if (!nuevaPregunta) return;
    
    const newId = preguntas.length + 1;
    setPreguntas([{ 
      id: newId, 
      question_text: nuevaPregunta, 
      question_type: tipoRespuesta, 
      is_active: true,
      macroarea: 'general'
    }, ...preguntas]);
    
    setNuevaPregunta('');
  };

  const handleToggleActiva = (id, currentStatus) => {
    setPreguntas(preguntas.map(p => 
      p.id === id ? { ...p, is_active: !currentStatus } : p
    ));
  };

  const formatTipo = (tipo) => {
    switch(tipo) {
      case 'scale_1_5': return 'Escala (1-5)';
      case 'boolean': return 'Sí / No';
      case 'text': return 'Abierta';
      default: return tipo;
    }
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-puce-titulos font-headline">Banco Oficial de Preguntas</h1>
        <p className="text-puce-textos">Preguntas del Test Vocacional integradas desde la base de datos del MVP (vocationalData.js)</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <h2 className="font-bold text-puce-titulos">Agregar Nueva Pregunta (Local)</h2>
        </div>
        <div className="p-4">
          <form onSubmit={handleAddPregunta} className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Escribe la pregunta..."
              value={nuevaPregunta}
              onChange={(e) => setNuevaPregunta(e.target.value)}
              className="flex-1 border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-puce-botones text-puce-textos"
            />
            <select
              value={tipoRespuesta}
              onChange={(e) => setTipoRespuesta(e.target.value)}
              className="border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-puce-botones bg-white text-puce-textos"
            >
              <option value="scale_1_5">Escala 1 al 5</option>
              <option value="boolean">Sí / No</option>
              <option value="text">Respuesta Abierta</option>
            </select>
            <button 
              type="submit"
              className="bg-puce-botones text-white px-6 py-2 rounded text-sm hover:bg-puce-botones/90 transition whitespace-nowrap"
            >
              Agregar a la lista
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
          <h2 className="font-bold text-puce-titulos">Matriz de Preguntas ({preguntas.length})</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-puce-textos text-sm border-b border-slate-200">
                <th className="p-4 font-semibold w-16 text-center">ID</th>
                <th className="p-4 font-semibold">Pregunta (Enunciado)</th>
                <th className="p-4 font-semibold w-40">Macroárea</th>
                <th className="p-4 font-semibold w-32 text-center">Estado</th>
                <th className="p-4 font-semibold w-32 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {preguntas.map((pregunta) => (
                <tr key={pregunta.id} className={`hover:bg-slate-50 transition ${!pregunta.is_active ? 'opacity-50' : ''}`}>
                  <td className="p-4 text-center text-puce-textos font-mono text-sm">{pregunta.id}</td>
                  <td className="p-4 font-medium text-puce-titulos text-sm">{pregunta.question_text}</td>
                  <td className="p-4 text-puce-textos/80 text-xs uppercase font-bold">{pregunta.macroarea}</td>
                  <td className="p-4 text-center">
                    <span className={`px-2 py-1 text-[10px] rounded-full uppercase font-bold tracking-wider ${
                      pregunta.is_active ? 'bg-puce-secundario/10 text-puce-secundario' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {pregunta.is_active ? 'Activa' : 'Inactiva'}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => handleToggleActiva(pregunta.id, pregunta.is_active)}
                      className={`text-xs px-3 py-1 rounded transition ${
                        pregunta.is_active 
                          ? 'text-orange-600 hover:bg-orange-50' 
                          : 'text-puce-secundario hover:bg-puce-secundario/10'
                      }`}
                    >
                      {pregunta.is_active ? 'Pausar' : 'Activar'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
