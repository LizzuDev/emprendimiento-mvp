// Revisa la base de conocimiento de Aurelio y genera el documento de verificación.
// Uso: node scripts/aurelio/revisar_conocimiento.mjs
// Salida: docs/aurelio/verificacion_datos.md y un resumen en consola.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const KB_PATH = resolve(ROOT, 'supabase/functions/aurelio-chat/knowledge/puce.json');
const OUT_PATH = resolve(ROOT, 'docs/aurelio/verificacion_datos.md');

const { ALL_CAREERS_CATALOG } = await import(resolve(ROOT, 'js/data/vocationalData.js'));
const kb = JSON.parse(readFileSync(KB_PATH, 'utf8'));

const money = (s) => {
  const m = String(s ?? '').match(/\$\s*([\d.,]+)/);
  return m ? Number(m[1].replace(/[.,]/g, '')) : null;
};
const percent = (s) => {
  const m = String(s ?? '').match(/(\d+(?:[.,]\d+)?)\s*%/);
  return m ? Number(m[1].replace(',', '.')) : null;
};
const cell = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

// ---------- 1. Revisión de carreras ----------
const careers = Object.entries(ALL_CAREERS_CATALOG).map(([key, c]) => {
  const b = c.benefits || [];
  const semesters = c.syllabus?.semesters?.length ?? 0;
  const discount = percent(b[0]?.highlight);
  const base = money(b[0]?.bottomText);
  const investment = money(b[1]?.highlight);
  const problems = [];

  if (c.semesters_count !== semesters) problems.push(`semesters_count=${c.semesters_count} pero la malla tiene ${semesters}`);
  const semText = String(b[1]?.bottomText ?? '').match(/(\d+)\s*semestre/);
  if (semText && Number(semText[1]) !== semesters) problems.push(`la tarjeta dice ${semText[1]} semestres y la malla tiene ${semesters}`);
  for (const f of ['description', 'fieldOfWork']) if (!c[f]) problems.push(`falta ${f}`);
  if (!(c.skills || []).length) problems.push('faltan competencias (skills)');

  let expected = null;
  if (discount == null) problems.push('la tarjeta de descuento no tiene porcentaje');
  if (base == null) problems.push('no indica precio sin descuento');
  if (investment == null) problems.push('no indica inversión por semestre');
  if (discount != null && base != null && investment != null) {
    expected = Math.round(base * (1 - discount / 100));
    if (Math.abs(expected - investment) > 60) {
      problems.push(`${discount}% de descuento sobre $${base} da ~$${expected}, no $${investment}`);
    }
  }

  return {
    key, name: c.name, semesters, discount, base, investment, expected,
    claim: b[2] ? `${b[2].highlight}: ${b[2].title ?? ''} — ${b[2].bottomText ?? ''}` : '',
    problems,
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
  const flag = c.problems.length ? '⚠️ ' + c.problems.join('; ') : '—';
  md.push(`| ${cell(c.name)} | ${c.semesters} | ${c.discount ?? '?'}% | ${c.base != null ? '$' + c.base : '?'} | ${c.investment != null ? '$' + c.investment : '?'} | ${cell(flag)} | |`);
}
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
