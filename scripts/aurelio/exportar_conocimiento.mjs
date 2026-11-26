// Exporta la base de conocimiento de Aurelio a partir de los datos OFICIALES extraídos de www.puce.edu.ec.
// Uso: node scripts/aurelio/exportar_conocimiento.mjs   (o python3 scripts/puce/actualizar.py, que corre todo)
//
// Entradas:
//   data/puce/official_careers.json                         -> generado por scripts/puce/build_official.py
//   supabase/functions/aurelio-chat/knowledge/puce.json     -> datos institucionales con citas (verify_facts.py)
// Salidas:
//   supabase/functions/aurelio-chat/knowledge/careers.json  -> fichas de carrera para la Edge Function
//   js/data/aurelioKnowledge.js                             -> lo mismo, para el motor local del navegador
//
// Reglas: solo datos oficiales; de puce.json solo las entradas con verificado=true.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const OFFICIAL = resolve(ROOT, 'data/puce/official_careers.json');
const KB_PATH = resolve(ROOT, 'supabase/functions/aurelio-chat/knowledge/puce.json');
const CAREERS_OUT = resolve(ROOT, 'supabase/functions/aurelio-chat/knowledge/careers.json');
const BROWSER_OUT = resolve(ROOT, 'js/data/aurelioKnowledge.js');

const official = JSON.parse(readFileSync(OFFICIAL, 'utf8'));
const kb = JSON.parse(readFileSync(KB_PATH, 'utf8'));

const careers = {};
for (const [key, o] of Object.entries(official)) {
  careers[key] = {
    key,
    nombre: o.nombre,
    facultad: o.facultad,
    titulo: o.titulo,
    duracion: o.duracion,
    semestres: o.semestres,
    modalidad: o.modalidad,
    costo: o.costo
      ? {
          precioReal: o.costo.precio_real,
          descuentoPct: o.costo.descuento_pct,
          precioConDescuento: o.costo.precio_con_descuento,
          matricula: o.costo.matricula,
          nota: o.costo.nota,
        }
      : null,
    porQueEstudiar: o.por_que_estudiar,
    resultadosAprendizaje: o.resultados_aprendizaje || [],
    campoLaboral: o.campo_laboral,
    malla: o.malla,
    semestresCompartidos: o.semestres_compartidos || [],
    bloquesAdicionales: o.bloques_adicionales || [],
    itinerarios: o.itinerarios || [],
    fuentes: { pagina: o.fuentes.pagina, brochure: o.fuentes.brochure, aranceles: o.costo?.fuente_tabla || null },
  };
}

const facts = (kb.entradas || [])
  .filter((e) => e.verificado === true && String(e.texto || '').trim())
  .map(({ id, tema, texto, fuente }) => ({ id, tema, texto, fuente }));

writeFileSync(CAREERS_OUT, JSON.stringify(careers, null, 1));
writeFileSync(
  BROWSER_OUT,
  `// ARCHIVO GENERADO por scripts/aurelio/exportar_conocimiento.mjs a partir de fuentes oficiales de la PUCE.
// No editar a mano: ejecutar python3 scripts/puce/actualizar.py

export const PUCE_FACTS = ${JSON.stringify(facts, null, 1)};

export const OFFICIAL_CAREERS = ${JSON.stringify(careers)};
`
);

const size = (p) => (readFileSync(p).length / 1024).toFixed(0) + ' KB';
const unverified = (kb.entradas || []).filter((e) => e.verificado !== true).map((e) => e.id);
console.log(`Carreras exportadas: ${Object.keys(careers).length} (${size(CAREERS_OUT)}; navegador ${size(BROWSER_OUT)})`);
console.log(`Datos institucionales verificados: ${facts.length}/${(kb.entradas || []).length}${unverified.length ? ` · sin verificar: ${unverified.join(', ')}` : ''}`);
