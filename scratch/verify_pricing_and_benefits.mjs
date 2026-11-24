import fs from 'fs';

const rawText = fs.readFileSync('docs/centro_de_estrategia_y_pitch_ganador_orienta_puce_2026.html', 'utf-8');
const textWithoutTags = rawText.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').replace(/\s*:\s*/g, ': ');

const checks = [
  { name: 'Bloque 4 menciona CAC de $300-$500 antes del precio', passed: textWithoutTags.includes('reduce drásticamente su Costo de Adquisición (CAC)') && textWithoutTags.includes('$300 y $500 por alumno') },
  { name: 'Bloque 4 detalla los 3 beneficios a la universidad', passed: textWithoutTags.includes('¿Qué gana Admisiones? Tres beneficios directos:') && textWithoutTags.includes('telemetría en tiempo real') },
  { name: 'Bloque 4 explica precio de $300/mes tras beneficios', passed: textWithoutTags.includes('suscripción de $300 al mes') && textWithoutTags.includes('margen bruto superior al 75%') },
  { name: 'Tab 2 tiene fila de CAC $300 a $500', passed: textWithoutTags.includes('$300 a $500 CAC / estudiante') },
  { name: 'Carta 13 presente (Justificación de $300 vs $5)', passed: textWithoutTags.includes('¿Por qué cobran $300 al mes a la universidad si el servidor les cuesta solo $5 al mes?') },
  { name: 'Carta 1 actualizada con CAC', passed: textWithoutTags.includes('Costo de Adquisición (CAC) es de $300 a $500 por alumno') }
];

console.table(checks);
const allPassed = checks.every(c => c.passed);
console.log('ALL VERIFICATIONS PASSED:', allPassed);

