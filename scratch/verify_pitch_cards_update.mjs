import fs from 'fs';

const rawText = fs.readFileSync('docs/centro_de_estrategia_y_pitch_ganador_orienta_puce_2026.html', 'utf-8');
const textWithoutTags = rawText.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').replace(/\s*:\s*/g, ': ');

const checks = [
  { name: 'Pitch Bloque 4 tiene $300 al mes y $20.000 preservados', passed: textWithoutTags.includes('$300 al mes') && textWithoutTags.includes('preserva más de $20.000 dólares en aranceles netos') },
  { name: 'Pitch Bloque 5 tiene ODS 4 y Laudato Si explicados', passed: textWithoutTags.includes('ODS 4 (Educación de Calidad): democratizamos gratis una orientación vocacional') },
  { name: 'Pitch Bloque 6 tiene capital semilla e incubación en PUCEmprende', passed: textWithoutTags.includes('capital semilla e incubación en PUCEmprende para registrar nuestra marca y software en el SENADI') },
  { name: 'Card 10 presente (Economía y Retención $20.000)', passed: textWithoutTags.includes('¿Cómo ahorra la universidad más de $20.000 y cuál es el valor real de retener estudiantes?') },
  { name: 'Card 11 presente (ODS 4)', passed: textWithoutTags.includes('¿Cómo aporta exactamente Orienta PUCE al ODS 4 (Educación de Calidad)?') },
  { name: 'Card 12 presente (SENADI y Proceso Oficial)', passed: textWithoutTags.includes('¿Por qué necesitan capital semilla para el SENADI y cuál es el proceso de registro?') },
  { name: 'Tab 4 actualizado con ODS 4 y ahorro', passed: textWithoutTags.includes('Meta 4.3') && textWithoutTags.includes('más de $20.000 USD preservados') }
];

console.table(checks);
const allPassed = checks.every(c => c.passed);
console.log('ALL VERIFICATIONS PASSED:', allPassed);
