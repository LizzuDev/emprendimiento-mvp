import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { MACROAREAS, DOMAIN_DATA } from '../data/vocationalData';

export default function Facultades() {
  const [facultades, setFacultades] = useState([]);
  const [carreras, setCarreras] = useState([]);
  const [nuevaFacultad, setNuevaFacultad] = useState('');

  useEffect(() => {
    // Transformar MACROAREAS del MVP
    const mappedAreas = Object.values(MACROAREAS).map(area => ({
      id: area.id,
      name: area.name,
      shortName: area.shortName,
      color: area.color,
      is_active: true
    }));
    
    // Transformar DOMAIN_DATA (Carreras) del MVP
    const mappedCareers = [];
    Object.values(DOMAIN_DATA).forEach(domain => {
      Object.entries(domain.careers).forEach(([careerId, careerData]) => {
        mappedCareers.push({
          id: careerId,
          name: careerData.name,
          area_id: domain.macroareaId,
          is_active: true
        });
      });
    });

    setFacultades(mappedAreas);
    setCarreras(mappedCareers);
  }, []);

  const handleAddFacultad = (e) => {
    e.preventDefault();
    if (!nuevaFacultad) return;
    
    const newAreaId = `new_area_${Date.now()}`;
    setFacultades([...facultades, { 
      id: newAreaId, 
      name: nuevaFacultad, 
      shortName: nuevaFacultad,
      color: '#003b81',
      is_active: true 
    }]);
    
    setNuevaFacultad('');
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-puce-titulos font-headline">Estructura Académica Oficial</h1>
        <p className="text-puce-textos">Macroáreas y Carreras importadas desde vocationalData.js (MVP)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Panel de Macroáreas (Facultades) */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
            <h2 className="font-bold text-puce-titulos">Macroáreas (Facultades)</h2>
            <span className="bg-puce-secundario/10 text-puce-secundario px-2 py-1 rounded-full text-xs font-bold">{facultades.length}</span>
          </div>
          
          <div className="p-4">
            <form onSubmit={handleAddFacultad} className="flex gap-2 mb-4">
              <input 
                type="text" 
                placeholder="Nombre de nueva área..."
                value={nuevaFacultad}
                onChange={(e) => setNuevaFacultad(e.target.value)}
                className="flex-1 border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-puce-botones text-puce-textos"
              />
              <button 
                type="submit"
                className="bg-puce-botones text-white px-4 py-2 rounded text-sm hover:bg-puce-botones/90 transition"
              >
                Agregar
              </button>
            </form>

            <ul className="divide-y divide-slate-100">
              {facultades.map(fac => (
                <li key={fac.id} className="py-3 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: fac.color }}></div>
                    <span className="text-puce-titulos text-sm font-medium">{fac.name}</span>
                  </div>
                  <span className="px-2 py-1 text-[10px] uppercase font-bold rounded-full bg-puce-secundario/10 text-puce-secundario">Activa</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Panel de Carreras */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
            <h2 className="font-bold text-puce-titulos">Oferta Académica (Carreras)</h2>
            <span className="bg-puce-secundario/10 text-puce-secundario px-2 py-1 rounded-full text-xs font-bold">{carreras.length}</span>
          </div>
          <div className="p-4">
            <ul className="divide-y divide-slate-100 h-[500px] overflow-y-auto pr-2">
              {carreras.map(car => {
                const fac = facultades.find(f => f.id === car.area_id);
                return (
                  <li key={car.id} className="py-3 flex justify-between items-center">
                    <div>
                      <div className="text-puce-titulos text-sm font-medium">{car.name}</div>
                      <div className="text-xs text-puce-textos/70 flex items-center gap-1 mt-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: fac?.color || '#ccc' }}></div>
                        {fac?.name || 'Macroárea no asignada'}
                      </div>
                    </div>
                    <span className="px-2 py-1 text-[10px] uppercase font-bold rounded-full bg-puce-secundario/10 text-puce-secundario">Activa</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
