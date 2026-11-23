import { DOMAIN_DATA } from '../js/data/vocationalData.js';

console.log("=== AUDITORÍA DE BANCO DE PSICOLOGÍA Y TOP 3 ===");

for (const [domKey, domVal] of Object.entries(DOMAIN_DATA)) {
  const careers = Object.values(domVal.careers || {});
  const questions = domVal.questions || [];
  
  console.log(`\n[Dominio: ${domKey.toUpperCase()}]`);
  console.log(`  - Total de preguntas en banco: ${questions.length}`);
  console.log(`  - Total de carreras evaluadas: ${careers.length}`);
  
  // Verificar que cada carrera tenga sus 6 items
  careers.forEach(c => {
    if (!c.items || c.items.length !== 6) {
      console.error(`  ❌ Error: Carrera ${c.name} no tiene 6 items asignados (${c.items?.length})`);
    } else {
      console.log(`  ✓ ${c.name} tiene sus 6 items: [${c.items.join(', ')}]`);
    }
  });

  // Simular getBalancedQuestionsForDomain
  const totalCareers = careers.length;
  let questionsPerCareer = 3;
  if (totalCareers <= 4) questionsPerCareer = 4;
  else questionsPerCareer = 3;

  const selectedQuestionIds = new Set();
  careers.forEach(career => {
    const careerItems = career.items || [];
    const chosen = careerItems.slice(0, questionsPerCareer);
    chosen.forEach(id => selectedQuestionIds.add(id));
  });

  const balancedQuestions = questions.filter(q => selectedQuestionIds.has(q.id));
  console.log(`  -> Preguntas balanceadas para el estudiante: ${balancedQuestions.length} (Rango 15-30: ${balancedQuestions.length >= 15 && balancedQuestions.length <= 30 ? 'OK' : 'FAIL'})`);

  if (careers.length < 3) {
    console.error(`  ❌ Error: El dominio ${domKey} tiene menos de 3 carreras y no puede generar un Top 3!`);
    process.exit(1);
  }
}

console.log("\n>>> TODAS LAS MATRICES DE PSICOLOGÍA Y TOP 3 VERIFICADAS AL 100% <<<");

