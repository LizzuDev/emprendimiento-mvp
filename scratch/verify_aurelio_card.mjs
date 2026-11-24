import fs from 'fs';

const text = fs.readFileSync('docs/centro_de_estrategia_y_pitch_ganador_orienta_puce_2026.html', 'utf-8');

const checks = [
  { name: 'Card 9 present', passed: text.includes('¿Cómo funciona Aurelio Bot y cuánto cuesta por consulta?') },
  { name: 'Costo por consulta < $0,0004 USD', passed: text.includes('$0,0003 a $0,0004 USD') },
  { name: 'Pitch Bloque 3 actualizado con AurelioBot', passed: text.includes('nuestro orientador con IA ultrarrápida') },
  { name: 'Pitch Bloque 4 actualizado con costo IA', passed: text.includes('menos de $0,0004 por consulta de IA en Groq Cloud') },
  { name: 'Tarifario Oficial Groq en Tab 2', passed: text.includes('Tarifario Oficial Groq Cloud LPU') },
  { name: 'Arquitectura híbrida online/offline explicada', passed: text.includes('Nivel Online (Groq Cloud') && text.includes('Nivel Offline (Motor Determinista Local)') }
];

console.table(checks);
const allPassed = checks.every(c => c.passed);
console.log('ALL CHECKS PASSED:', allPassed);

