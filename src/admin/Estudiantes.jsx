import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';

export default function Estudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulación de datos informativos más ricos sobre los estudiantes
    setLoading(true);
    setTimeout(() => {
      setEstudiantes([
        {
          id: 'user-123',
          nombre: 'Ana López',
          correo: 'alopez@puce.edu.ec',
          facultad: 'Ingeniería',
          carrera: 'Ing. de Software',
          progresoTest: 100,
          afinidadPrincipal: 'Sostenibilidad y Recursos',
          nivelConsentimiento: 'N1 (Datos Generales)',
          ultimoCheckin: 'Hace 2 horas',
          telefono: '0991234567'
        },
        {
          id: 'user-456',
          nombre: 'Carlos Ruiz',
          correo: 'cruiz@puce.edu.ec',
          facultad: 'Psicología',
          carrera: 'Psicología Clínica',
          progresoTest: 45,
          afinidadPrincipal: 'Salud y Bienestar',
          nivelConsentimiento: 'N3 (Casos y Seguimiento)',
          ultimoCheckin: 'Hace 1 día',
          telefono: '0987654321'
        },
        {
          id: 'user-789',
          nombre: 'María Fernanda Gómez',
          correo: 'mgomez@puce.edu.ec',
          facultad: 'Arquitectura',
          carrera: 'Diseño Gráfico',
          progresoTest: 100,
          afinidadPrincipal: 'Hábitat e Infraestructura',
          nivelConsentimiento: 'N2 (Telemetría Básica)',
          ultimoCheckin: 'Hace 3 días',
          telefono: ''
        }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <AdminLayout>
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-puce-titulos font-headline">Directorio de Estudiantes</h1>
          <p className="text-puce-textos">Información detallada de los usuarios, métricas de uso y resultados de afinidad</p>
        </div>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Buscar por nombre o correo..." 
            className="border border-slate-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-puce-botones text-puce-textos min-w-[250px]"
          />
          <button className="bg-puce-botones text-white px-4 py-2 rounded text-sm hover:bg-puce-botones/90 transition">
            Buscar
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-puce-textos opacity-70">Cargando directorio de estudiantes...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-puce-textos text-sm border-b border-slate-200">
                  <th className="p-4 font-semibold">Estudiante</th>
                  <th className="p-4 font-semibold">Facultad / Carrera</th>
                  <th className="p-4 font-semibold">Progreso Sisu</th>
                  <th className="p-4 font-semibold">Afinidad Principal</th>
                  <th className="p-4 font-semibold">Privacidad</th>
                  <th className="p-4 font-semibold">Última Conexión</th>
                  <th className="p-4 font-semibold text-right">Contacto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {estudiantes.map((estudiante) => (
                  <tr key={estudiante.id} className="hover:bg-slate-50 transition">
                    <td className="p-4">
                      <div className="font-medium text-puce-titulos">{estudiante.nombre}</div>
                      <div className="text-sm text-puce-textos/80">{estudiante.correo}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-puce-titulos text-sm">{estudiante.facultad}</div>
                      <div className="text-xs text-puce-textos/70">{estudiante.carrera}</div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-slate-200 rounded-full h-2 max-w-[80px]">
                          <div 
                            className={`h-2 rounded-full ${estudiante.progresoTest === 100 ? 'bg-green-500' : 'bg-puce-secundario'}`} 
                            style={{ width: `${estudiante.progresoTest}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-puce-textos font-medium">{estudiante.progresoTest}%</span>
                      </div>
                    </td>
                    <td className="p-4 text-puce-textos text-sm font-medium">{estudiante.afinidadPrincipal}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-[10px] uppercase font-bold rounded-full ${
                        estudiante.nivelConsentimiento.includes('N3') ? 'bg-orange-100 text-orange-700' :
                        estudiante.nivelConsentimiento.includes('N1') ? 'bg-blue-100 text-blue-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {estudiante.nivelConsentimiento.split(' ')[0]}
                      </span>
                    </td>
                    <td className="p-4 text-puce-textos text-sm">{estudiante.ultimoCheckin}</td>
                    <td className="p-4 text-right space-x-2">
                      <a 
                        href={`mailto:${estudiante.correo}`}
                        className="inline-block px-3 py-1 bg-puce-botones/10 text-puce-botones text-xs rounded hover:bg-puce-botones/20 transition font-medium"
                      >
                        Email
                      </a>
                      {estudiante.telefono ? (
                        <a 
                          href={`https://wa.me/593${estudiante.telefono.substring(1)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs rounded hover:bg-green-100 transition font-medium"
                        >
                          WhatsApp
                        </a>
                      ) : (
                        <span className="inline-block px-3 py-1 text-slate-300 text-xs cursor-not-allowed">
                          No Cel.
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {!loading && estudiantes.length === 0 && (
          <div className="p-8 text-center text-puce-textos opacity-70">
            No hay estudiantes registrados.
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
