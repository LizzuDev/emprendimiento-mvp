// Exporta la base de conocimiento de Aurelio a partir de los datos oficiales.
// Uso: node scripts/aurelio/exportar_conocimiento.mjs
//
// Genera:
//   supabase/functions/aurelio-chat/knowledge/careers.json  -> fichas de carrera para la Edge Function
//   js/data/aurelioKnowledge.js                             -> datos verificados para el motor local del navegador
//
// Reglas:
//   - Datos institucionales: solo entradas con verificado=true.
//   - Costos: solo si las tarjetas son de costos y las cuentas cuadran (ver careerChecks.mjs).
//   - Malla por semestre: solo si no hay asignaturas numeradas fuera de orden; si no, lista de materias sin semestre.
//   - Afirmaciones de la tercera tarjeta (ej. "98%", "#1"): no se exportan hasta verificarlas.
// Ejecutar de nuevo cada vez que cambie puce.json o vocationalData.js.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { analyzeCareer, listCareers } from './careerChecks.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const KB_PATH = resolve(ROOT, 'supabase/functions/aurelio-chat/knowledge/puce.json');
const CAREERS_OUT = resolve(ROOT, 'supabase/functions/aurelio-chat/knowledge/careers.json');
const BROWSER_OUT = resolve(ROOT, 'js/data/aurelioKnowledge.js');

const data = await import(resolve(ROOT, 'js/data/vocationalData.js'));
const kb = JSON.parse(readFileSync(KB_PATH, 'utf8'));

const careers = {};
const flags = {};

for (const { key, career: c, domainKey } of listCareers(data)) {
  const a = analyzeCareer(key, c);
  const semesters = c.syllabus?.semesters || [];
  const allSubjects = [...new Set(semesters.flat())];

  careers[key] = {
    key,
    nombre: c.name,
    facultad: c.faculty || '',
    area: data.MACROAREAS?.[domainKey]?.name || '',
    semestres: semesters.length,
    descripcion: c.description || '',
    campoLaboral: c.fieldOfWork || '',
    competencias: c.skills || [],
    costo: a.costOk
      ? { descuento: a.discount, precioSinDescuento: a.base, inversionSemestral: a.investment }
      : null,
    malla: a.syllabusOk ? semesters : null,
    materias: a.syllabusOk ? null : allSubjects,
    descripcionMaterias: c.syllabus?.subjectDetails || {},
    itinerarios: (c.syllabus?.itineraries || []).map((it) => ({ nombre: it.name, materias: it.subjects || [] })),
  };

  flags[key] = {
    costOk: a.costOk,
    syllabusOk: a.syllabusOk,
    discount: a.costOk ? a.discount : null,
    base: a.costOk ? a.base : null,
    investment: a.costOk ? a.investment : null,
    faculty: c.faculty || '',
    area: domainKey,
  };
}

writeFileSync(CAREERS_OUT, JSON.stringify(careers, null, 1));

const verified = (kb.entradas || [])
  .filter((e) => e.verificado === true && String(e.texto || '').trim())
  .map(({ id, tema, texto, fuente }) => ({ id, tema, texto, fuente }));

writeFileSync(
  BROWSER_OUT,
  `// ARCHIVO GENERADO por scripts/aurelio/exportar_conocimiento.mjs. No editar a mano.
// Datos institucionales verificados y estado de confiabilidad de cada carrera para el motor local de Aurelio.

export const PUCE_FACTS = ${JSON.stringify(verified, null, 2)};

export const CAREER_FLAGS = ${JSON.stringify(flags, null, 2)};
`
);

const size = (p) => (readFileSync(p).length / 1024).toFixed(0) + ' KB';
console.log(`Carreras exportadas: ${Object.keys(careers).length} (${size(CAREERS_OUT)})`);
console.log(`  con costo confiable: ${Object.values(flags).filter((f) => f.costOk).length}`);
console.log(`  con malla por semestre confiable: ${Object.values(flags).filter((f) => f.syllabusOk).length}`);
console.log(`Datos institucionales verificados: ${verified.length}/${(kb.entradas || []).length}`);
console.log(`Generados: ${CAREERS_OUT.replace(ROOT + '/', '')}, ${BROWSER_OUT.replace(ROOT + '/', '')}`);
