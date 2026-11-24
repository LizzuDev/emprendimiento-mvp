import { getAurelioContextualAnswer } from '../js/aurelioBot.js';
import { ALL_CAREERS_CATALOG } from '../js/data/vocationalData.js';

const career = ALL_CAREERS_CATALOG.enfermeria;
const query = 'Qué convenios tiene la puce para la carrera de enfermería';

console.log('Respuesta actual:');
console.log(getAurelioContextualAnswer(career, query));
