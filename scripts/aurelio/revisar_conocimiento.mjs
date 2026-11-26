// Revisa la base de conocimiento de Aurelio y genera el documento de verificación.
// Uso: node scripts/aurelio/revisar_conocimiento.mjs
// Salida: docs/aurelio/verificacion_datos.md y un resumen en consola.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { analyzeCareer, listCareers } from './careerChecks.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const KB_PATH = resolve(ROOT, 'supabase/functions/aurelio-chat/knowledge/puce.json');
const OUT_PATH = resolve(ROOT, 'docs/aurelio/verificacion_datos.md');

const data = await import(resolve(ROOT, 'js/data/vocationalData.js'));
const kb = JSON.parse(readFileSync(KB_PATH, 'utf8'));

const cell = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

// ---------- 1. Revisión de carreras ----------
const careers = listCareers(data).map(({ key, career: c, facultyMismatch }) => {
  const b = c.benefits || [];
  const analysis = analyzeCareer(key, c);
  if (facultyMismatch) analysis.problems.push(facultyMismatch);
  return {
    ...analysis,
    facultyMismatch,
    claim: b[2] ? `${b[2].highlight}: ${b[2].title ?? ''} — ${b[2].bottomText ?? ''}` : '',
  };
});

// ---------- 2. Revisión de la base institucional ----------
const entries = kb.entradas || [];
const verified = entries.filter((e) => e.verificado === true);
const verifiedNoSource = verified.filter((e) => !String(e.fuente || '').trim());
const pending = entries.filter((e) => e.verificado !== true);
const ids = entries.map((e) => e.id);
const duplicated = ids.filter((id, i) => ids.indexOf(id) !== i);

// ---------- 3. Documento ----------
const md = [];
md.push('# Verificación de datos de Aurelio');
md.push('');
md.push('> Archivo generado por `scripts/aurelio/revisar_conocimiento.mjs`. No lo edites a mano: marca tus respuestas en la columna **Tu revisión** de una copia, o pásamelas en el chat, y yo actualizo `puce.json` y los datos de las carreras.');
md.push('');
md.push('**Cómo revisar cada dato:** ✅ correcto (indica la fuente: URL o documento) · ✏️ corregir (escribe el dato correcto) · ❌ eliminar.');
md.push('');
md.push(`**Estado:** ${verified.length} de ${entries.length} datos institucionales verificados · ${careers.filter((c) => c.problems.length).length} de ${careers.length} carreras con problemas detectados automáticamente.`);
md.push('');
md.push('## Parte A · Datos institucionales');
md.push('');
md.push('Aurelio solo usará los datos marcados como verificados.');
md.push('');
md.push('| # | ID | Dato | Nota | Estado | Tu revisión |');
md.push('|---|---|---|---|---|---|');
entries.forEach((e, i) => {
  const estado = e.verificado ? (e.fuente ? '✅ verificado' : '⚠️ verificado sin fuente') : '⏳ pendiente';
  md.push(`| ${i + 1} | \`${e.id}\` | ${cell(e.texto)} | ${cell(e.nota)} | ${estado} | |`);
});
md.push('');
md.push('## Parte B · Costos de las carreras');
md.push('');
md.push('Estos datos se muestran en la pantalla de resultados **y** Aurelio los usa para responder. Las filas con ⚠️ tienen cuentas que no cuadran o datos faltantes.');
md.push('');
md.push('| Carrera | Semestres | Descuento | Precio sin descuento | Inversión / semestre | Problemas | Tu revisión |');
md.push('|---|---|---|---|---|---|---|');
for (const c of careers) {
  const costProblems = c.problems.filter((p) => !p.startsWith('malla') && p !== c.facultyMismatch);
  const flag = costProblems.length ? '⚠️ ' + costProblems.join('; ') : '—';
  md.push(`| ${cell(c.name)} | ${c.semesters} | ${c.discount ?? '?'}% | ${c.base != null ? '$' + c.base : '?'} | ${c.investment != null ? '$' + c.investment : '?'} | ${cell(flag)} | |`);
}
md.push('');
md.push('Mientras una carrera tenga ⚠️ en costos, Aurelio **no dará cifras** de esa carrera: derivará a Admisiones.');
md.push('');
md.push('**Pregunta general:** ¿es real que *todas* las carreras tienen el mismo precio sin descuento ($3950)? Si no, necesitamos el precio de cada una.');
md.push('');
md.push('## Parte C · Afirmaciones de la tercera tarjeta de cada carrera');
md.push('');
md.push('Aparecen en la pantalla de resultados. Varias son cifras o comparaciones (por ejemplo "98%", "#1", "Top #1") que necesitan fuente o deben reformularse.');
md.push('');
md.push('| Carrera | Afirmación | Tu revisión |');
md.push('|---|---|---|');
for (const c of careers) md.push(`| ${cell(c.name)} | ${cell(c.claim)} | |`);
md.push('');
md.push('## Parte D · Facultades');
md.push('');
md.push('La pantalla de resultados muestra la facultad del área y no la de la carrera. ¿Cuál es la correcta? Aurelio usará la de la carrera.');
md.push('');
md.push('| Carrera | Diferencia | Tu revisión |');
md.push('|---|---|---|');
for (const c of careers.filter((x) => x.facultyMismatch)) md.push(`| ${cell(c.name)} | ${cell(c.facultyMismatch)} | |`);
md.push('');
md.push('## Parte E · Orden de las mallas curriculares');
md.push('');
md.push('Asignaturas numeradas que aparecen en un semestre anterior al de su número previo. Mientras una malla esté marcada, Aurelio mencionará sus materias **sin decir en qué semestre** se ven.');
md.push('');
md.push('| Carrera | Inconsistencias | Tu revisión |');
md.push('|---|---|---|');
for (const c of careers.filter((x) => x.inversions.length)) {
  md.push(`| ${cell(c.name)} | ${cell(c.inversions.join('; '))} | |`);
}
md.push('');

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, md.join('\n'));

// ---------- 4. Resumen en consola ----------
console.log(`Datos institucionales: ${verified.length}/${entries.length} verificados, ${pending.length} pendientes`);
if (verifiedNoSource.length) console.log(`  ⚠️ verificados sin fuente: ${verifiedNoSource.map((e) => e.id).join(', ')}`);
if (duplicated.length) console.log(`  ⚠️ IDs duplicados: ${duplicated.join(', ')}`);
const withProblems = careers.filter((c) => c.problems.length);
console.log(`Carreras: ${careers.length}, con problemas: ${withProblems.length}`);
for (const c of withProblems) console.log(`  - ${c.name}: ${c.problems.join('; ')}`);
console.log(`\nDocumento generado: ${OUT_PATH.replace(ROOT + '/', '')}`);

if (duplicated.length || verifiedNoSource.length) process.exitCode = 1;
