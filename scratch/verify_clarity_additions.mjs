import fs from 'fs';

const rawText = fs.readFileSync('docs/centro_de_estrategia_y_pitch_ganador_orienta_puce_2026.html', 'utf-8');
const textWithoutTags = rawText.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').replace(/\s*:\s*/g, ': ');

const checks = [
  { name: 'Bloque 3 tiene métricas de Clarity (15 sesiones, 100% celular, 63,6%)', passed: textWithoutTags.includes('Microsoft Clarity en 15 sesiones reales en Ecuador') && textWithoutTags.includes('100% ingresó desde su celular') && textWithoutTags.includes('63,6% de profundidad de scroll') },
  { name: 'Tab 2 tiene tarjeta de 15 Sesiones Clarity', passed: textWithoutTags.includes('15 Sesiones Clarity') && textWithoutTags.includes('Telemetría en Vivo (Ecuador)') },
  { name: 'Tab 2 tiene panel oscuro de auditoría Clarity', passed: textWithoutTags.includes('Auditoría Microsoft Clarity en Producción') && textWithoutTags.includes('zejivqnass') },
  { name: 'Tab 3 tiene Carta 14 de Clarity', passed: textWithoutTags.includes('¿Qué datos reales de uso tienen de bachilleres usando el prototipo (Microsoft Clarity)?') },
  { name: 'Tab 5 tiene checklist de Clarity', passed: textWithoutTags.includes('Pestaña con Microsoft Clarity abierta') }
];

console.table(checks);
const allPassed = checks.every(c => c.passed);
console.log('ALL CLARITY VERIFICATIONS PASSED:', allPassed);

