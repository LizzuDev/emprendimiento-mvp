// Reglas compartidas para revisar y exportar los datos de las carreras.
// Las usan revisar_conocimiento.mjs y exportar_conocimiento.mjs.

export const money = (s) => {
  const m = String(s ?? '').match(/\$\s*([\d.,]+)/);
  return m ? Number(m[1].replace(/[.,]/g, '')) : null;
};

export const percent = (s) => {
  const m = String(s ?? '').match(/(\d+(?:[.,]\d+)?)\s*%/);
  return m ? Number(m[1].replace(',', '.')) : null;
};

// Detecta asignaturas numeradas fuera de orden (ej: "Química 2" en un semestre anterior a "Química 1").
function syllabusInversions(semesters) {
  const pos = {};
  semesters.forEach((sem, i) => sem.forEach((subject) => {
    const m = String(subject).match(/^(.*?)\s+(\d+)\b/);
    if (m) (pos[m[1].trim()] ||= {})[Number(m[2])] = i + 1;
  }));
  const out = [];
  for (const [base, nums] of Object.entries(pos)) {
    const ns = Object.keys(nums).map(Number).sort((a, b) => a - b);
    for (let j = 1; j < ns.length; j++) {
      if (nums[ns[j]] < nums[ns[j - 1]]) {
        out.push(`"${base} ${ns[j - 1]}" está en el semestre ${nums[ns[j - 1]]} y "${base} ${ns[j]}" en el ${nums[ns[j]]}`);
      }
    }
  }
  return out;
}

/**
 * Analiza una carrera y devuelve sus datos de costo interpretados y los problemas detectados.
 * El costo solo se considera confiable si las tarjetas son de costos y las cuentas cuadran.
 */
export function analyzeCareer(key, c) {
  const b = c.benefits || [];
  const semesters = c.syllabus?.semesters || [];
  const problems = [];

  if (c.semesters_count !== semesters.length) {
    problems.push(`semesters_count=${c.semesters_count} pero la malla tiene ${semesters.length}`);
  }
  const semText = String(b[1]?.bottomText ?? '').match(/(\d+)\s*semestre/);
  if (semText && Number(semText[1]) !== semesters.length) {
    problems.push(`la tarjeta dice ${semText[1]} semestres y la malla tiene ${semesters.length}`);
  }
  for (const f of ['description', 'fieldOfWork', 'faculty']) if (!c[f]) problems.push(`falta ${f}`);
  if (!(c.skills || []).length) problems.push('faltan competencias (skills)');

  // Costos: solo se interpretan si la primera tarjeta es explícitamente de descuento.
  const isCostCard = /descuento/i.test(b[0]?.topText ?? '');
  const discount = isCostCard ? percent(b[0]?.highlight) : null;
  const base = isCostCard ? money(b[0]?.bottomText) : null;
  const investment = isCostCard ? money(b[1]?.highlight) : null;
  let expected = null;
  let costOk = false;

  if (!isCostCard) {
    problems.push(`sus tarjetas no son de costos (la primera es "${b[0]?.topText ?? '—'}"): Aurelio no tiene el costo de esta carrera`);
  } else if (discount == null || base == null || investment == null) {
    problems.push('faltan datos de descuento, precio base o inversión');
  } else {
    expected = Math.round(base * (1 - discount / 100));
    if (Math.abs(expected - investment) > 60) {
      problems.push(`${discount}% de descuento sobre $${base} da ~$${expected}, no $${investment}`);
    } else {
      costOk = true;
    }
  }

  const inversions = syllabusInversions(semesters);
  if (inversions.length) problems.push(`malla posiblemente desordenada (${inversions.length} asignaturas numeradas fuera de orden)`);

  return {
    key,
    name: c.name,
    semesters: semesters.length,
    isCostCard,
    discount,
    base,
    investment,
    expected,
    costOk,
    inversions,
    // Si la malla está desordenada, el "primer semestre" no es confiable.
    syllabusOk: inversions.length === 0,
    problems,
  };
}

/**
 * Lista las carreras con su área y facultad resuelta.
 * Facultad: la propia de la carrera; si no tiene, la del área.
 * También señala cuando la pantalla de resultados (que usa la del área) muestra otra facultad.
 */
export function listCareers({ ALL_CAREERS_CATALOG, DOMAIN_DATA }) {
  const domainOf = {};
  for (const [domainKey, domain] of Object.entries(DOMAIN_DATA)) {
    for (const careerKey of Object.keys(domain.careers || {})) domainOf[careerKey] = { domainKey, faculty: domain.faculty };
  }
  return Object.entries(ALL_CAREERS_CATALOG).map(([key, c]) => {
    const domain = domainOf[key] || {};
    const faculty = c.faculty || domain.faculty || '';
    const facultyMismatch = c.faculty && domain.faculty && c.faculty !== domain.faculty
      ? `la pantalla de resultados muestra "${domain.faculty}" pero la carrera es de "${c.faculty}"`
      : null;
    return { key, career: { ...c, faculty }, domainKey: domain.domainKey || null, facultyMismatch };
  });
}
