import React from 'react';
import { useWellness } from '../context/WellnessContext';

export function PuceTransition({ isTransitioning }) {
  const { isSkyMode } = useWellness();

  // Organic PUCE wave palette
  const colors = isSkyMode ? {
    layer1: '#E8F4FC', // Azul hielo PUCE
    layer2: '#CBE7F8', // Celeste claro
    layer3: '#06b2b3', // Turquesa PUCE
    layer4: '#1aa9df', // Cian vibrante
    layer5: '#003b81', // Azul institucional PUCE
  } : {
    layer1: '#0F2042',
    layer2: '#162C52',
    layer3: '#06b2b3',
    layer4: '#1aa9df',
    layer5: '#06101E',
  };

  return (
    <div 
      className="fixed left-0 right-0 w-full z-[100] pointer-events-none flex flex-col transition-transform duration-700 ease-in-out"
      style={{ 
        top: '100vh',
        height: '120vh',
        transform: isTransitioning ? 'translateY(-120vh)' : 'translateY(0)'
      }}
    >
      <svg 
        viewBox="0 0 1440 320" 
        className="w-full drop-shadow-2xl"
        preserveAspectRatio="none"
        style={{ height: '25vh' }}
      >
        <path fill={colors.layer1} fillOpacity="0.6" d="M0,160 L40,219 L80,257 L120,261 L160,237 L200,202 L240,174 L280,161 L320,159 L360,156 L400,139 L440,107 L480,73 L520,56 L560,70 L600,116 L640,178 L680,233 L720,262 L760,256 L800,227 L840,192 L880,168 L920,160 L960,159 L1000,152 L1040,130 L1080,96 L1120,65 L1160,56 L1200,80 L1240,133 L1280,196 L1320,245 L1360,263 L1400,250 L1440,217 L1440,320 L0,320 Z"></path>
        <path fill={colors.layer2} fillOpacity="0.75" d="M0,235 L40,277 L80,289 L120,266 L160,213 L200,144 L240,77 L280,31 L320,20 L360,47 L400,104 L440,175 L480,240 L520,283 L560,291 L600,265 L640,212 L680,148 L720,91 L760,56 L800,50 L840,72 L880,113 L920,161 L960,204 L1000,230 L1040,236 L1080,224 L1120,201 L1160,174 L1200,149 L1240,132 L1280,122 L1320,119 L1360,120 L1400,123 L1440,130 L1440,320 L0,320 Z"></path>
        <path fill={colors.layer3} fillOpacity="0.85" d="M0,250 L40,258 L80,235 L120,182 L160,123 L200,86 L240,81 L280,90 L320,90 L360,73 L400,55 L440,60 L480,101 L520,160 L560,209 L600,228 L640,225 L680,222 L720,237 L760,261 L800,272 L840,249 L880,197 L920,141 L960,107 L1000,101 L1040,104 L1080,94 L1120,68 L1160,44 L1200,48 L1240,87 L1280,144 L1320,189 L1360,206 L1400,206 L1440,211 L1440,320 L0,320 Z"></path>
        <path fill={colors.layer4} fillOpacity="0.95" d="M0,190 L60,140 L120,110 L180,130 L240,180 L300,230 L360,250 L420,220 L480,160 L540,110 L600,80 L660,100 L720,160 L780,220 L840,260 L900,240 L960,180 L1020,120 L1080,80 L1140,90 L1200,140 L1260,200 L1320,250 L1380,260 L1440,230 L1440,320 L0,320 Z"></path>
      </svg>
      <div className="w-full flex-1" style={{ backgroundColor: colors.layer5 }}></div>
    </div>
  );
}
