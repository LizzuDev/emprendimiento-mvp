import React from 'react';
import { useWellness } from '../context/WellnessContext';
import bienvenidoSvg from '../assets/expresiones/bienvenido.svg';
import pensandoSvg from '../assets/expresiones/pensando.svg';
import entusiasmadoSvg from '../assets/expresiones/entusiasmado.svg';
import neutroSvg from '../assets/expresiones/neutro.svg';

export function AurelioMascot({ expression = 'greeting', speech = '' }) {
  const { isSkyMode } = useWellness();

  // Dialogues based on expression
  const defaultSpeech = speech || (
    expression === 'thinking' ? 'Analizando tus respuestas para mapear tu perfil con las facultades...' :
    expression === 'celebrating' ? '¡Excelente progreso! Estás más cerca de descubrir tu verdadera vocación universitaria.' :
    '¡Hola! Soy Aurelio, tu mentor vocacional de la PUCE. ¿Listo para dar el siguiente paso?'
  );

  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 max-w-xl mx-auto shadow-md backdrop-blur-sm bg-white/70 dark:bg-puce-darkCard/70 border-slate-200 dark:border-puce-darkBorder">
      {/* Mascot Graphic Emblem */}
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-puce-principal to-puce-botones flex items-center justify-center shadow-md shrink-0 overflow-hidden">
        <img 
          src={
            expression === 'thinking' ? pensandoSvg :
            expression === 'celebrating' ? entusiasmadoSvg :
            expression === 'greeting' ? bienvenidoSvg :
            neutroSvg
          } 
          alt="Aurelio" 
          className="w-12 h-12 object-contain drop-shadow-sm"
        />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-headline text-sm tracking-wider uppercase text-puce-principal dark:text-puce-secundario">
            Aurelio // Mentor PUCE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-puce-secundario animate-ping"></span>
        </div>
        <p className={`text-xs sm:text-sm font-medium leading-relaxed ${isSkyMode ? 'text-puce-titulos' : 'text-puce-darkText'}`}>
          "{defaultSpeech}"
        </p>
      </div>
    </div>
  );
}
