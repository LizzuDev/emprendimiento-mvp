import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf8');

const checks = [
  { id: 'hero-start-btn', pattern: /id=["']hero-start-btn["']/ },
  { id: 'body-start-btn', pattern: /id=["']body-start-btn["']/ },
  { id: 'mobile-sticky-bar', pattern: /id=["']mobile-sticky-bar["']/ },
  { id: 'sticky-start-btn', pattern: /id=["']sticky-start-btn["']/ },
  { id: 'empezar-test', pattern: /id=["']empezar-test["']/ },
  { id: 'metrics-ribbon', pattern: /class=["'].*metrics-ribbon.*["']/ },
  { id: 'comparison-section', pattern: /class=["'].*comparison-section.*["']/ },
  { id: 'href test.html?nuevo=1', pattern: /href=["']test\.html\?nuevo=1["']/ }
];

console.log('--- Verificación de elementos en index.html ---');
let allOk = true;
checks.forEach(c => {
  const ok = c.pattern.test(html);
  console.log((ok ? '✅' : '❌') + ' ' + c.id);
  if (!ok) allOk = false;
});

if (allOk) {
  console.log('Todos los elementos estructurales requeridos están presentes.');
} else {
  console.error('Faltan elementos.');
  process.exit(1);
}

