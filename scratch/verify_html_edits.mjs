import fs from 'fs';

const text = fs.readFileSync('docs/centro_de_estrategia_y_pitch_ganador_orienta_puce_2026.html', 'utf-8');

const checks = [
  { name: 'Embudo inteligente en 3 etapas', passed: text.includes('embudo vocacional inteligente en 3 etapas') },
  { name: 'Fases 1, 2 y 3 (Podio interactivo)', passed: text.includes('Fase 1') && text.includes('Fase 2') && text.includes('Fase 3: su Podio interactivo') },
  { name: 'Micro-retos implementados para cada carrera', passed: text.includes('micro-reto práctico de primer semestre ya implementado para cada carrera') },
  { name: 'Carta 3 con embudo y Escuela de Psicología', passed: text.includes('embudo estructurado') && text.includes('Escuela de Psicología PUCE') },
  { name: 'Carta 5 con coreografía de 3 pasos', passed: text.includes('seleccionas tu área de interés, respondes las preguntas psicométricas') },
  { name: 'Carta 6 con disclaimer y checkbox de consentimiento LOPDP', passed: text.includes('aviso de privacidad explícito (disclaimer) y checkbox obligatorio de consentimiento') },
  { name: 'Pregunta Extra 7 con Groq Grounding y RAG', passed: text.includes('In-Context Grounding') && text.includes('RAG (Retrieval-Augmented Generation) sobre Supabase pgvector') },
  { name: 'Tab 4 con roadmap RAG', passed: text.includes('roadmap de escalamiento B2B se desplegará un') },
  { name: 'Rúbrica con embudo en 3 fases', passed: text.includes('Embudo en 3 fases') }
];

console.table(checks);
const allPassed = checks.every(c => c.passed);
console.log('ALL CHECKS PASSED:', allPassed);

