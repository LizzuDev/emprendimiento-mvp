import { getAurelioContextualAnswer } from '../js/aurelioBot.js';
import { ALL_CAREERS_CATALOG } from '../js/data/vocationalData.js';

const enfermeria = ALL_CAREERS_CATALOG.enfermeria;
const admin = ALL_CAREERS_CATALOG.administracion_empresas;
const sistemas = ALL_CAREERS_CATALOG.sistemas_informacion;

const queries = [
  { career: enfermeria, q: 'Qué convenios tiene la puce para la carrera de enfermería' },
  { career: enfermeria, q: '¿Puedo irme de intercambio a otro país?' },
  { career: sistemas, q: '¿Tienen convenios para pasantías en empresas de software o tech?' },
  { career: admin, q: '¿Cómo funcionan las categorías socioeconómicas y becas?' },
  { career: sistemas, q: '¿La PUCE está acreditada y qué ranking tiene?' },
  { career: enfermeria, q: '¿Qué instalaciones deportivas tienen en el campus?' },
  { career: enfermeria, q: '¿Por qué estudiar enfermería en la PUCE?' }
];

console.log('--- TEST DE RESPUESTAS CONTEXTUALES DE AURELIO ---');
queries.forEach(({ career, q }, i) => {
  console.log(`\n[PREGUNTA ${i+1}] Carrera: ${career.name}`);
  console.log(`P: "${q}"`);
  const ans = getAurelioContextualAnswer(career, q);
  console.log(`R:\n${ans}`);
});
