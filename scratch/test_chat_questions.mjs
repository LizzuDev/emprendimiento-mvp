import { getAurelioContextualAnswer } from '../js/aurelioBot.js';
import { formatAurelioMessage } from '../js/chatFormat.js';
import { ALL_CAREERS_CATALOG } from '../js/data/vocationalData.js';

const career = { ...ALL_CAREERS_CATALOG.enfermeria, faculty: 'Facultad de Enfermería' };
const qs = ['hola', 'Gracias!', 'cuanto gana un enfermero', 'que hace un profesional', 'donde queda la universidad',
  'cual es mejor medicina o enfermeria', 'cuanto cuesta', 'cuentame un chiste', 'hay parqueadero para estudiantes?', 'qué convenios tiene'];
let fail = 0;
for (const q of qs) {
  const raw = getAurelioContextualAnswer(career, q);
  const html = formatAurelioMessage(raw);
  const ok = raw && !html.includes('*') && !html.includes('•') && !html.includes('undefined');
  if (!ok) fail++;
  console.log(`\n[${ok ? 'OK' : 'FAIL'}] ${q}\n${raw.slice(0, 260).replace(/\n/g, ' ⏎ ')}`);
}
process.exit(fail ? 1 : 0);
