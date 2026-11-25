import assert from 'node:assert/strict';
import { formatAurelioMessage, escapeHtml } from '../js/chatFormat.js';

const t = (name, fn) => { fn(); console.log('OK  ', name); };

t('escapa HTML', () => {
  const out = formatAurelioMessage('<script>alert(1)</script> & "hola"');
  assert.ok(!out.includes('<script>'));
  assert.ok(out.includes('&lt;script&gt;'));
  assert.equal(escapeHtml('<b>'), '&lt;b&gt;');
});

t('negrita sin asteriscos visibles', () => {
  const out = formatAurelioMessage('Para **Medicina** hay **mucho** que ver');
  assert.ok(out.includes('<strong>Medicina</strong>'));
  assert.ok(!out.includes('*'));
});

t('listas con viñetas (•, -, *)', () => {
  const out = formatAurelioMessage('Intro:\n• uno\n- dos\n* tres\nFin');
  assert.ok(out.includes('<ul><li>uno</li><li>dos</li><li>tres</li></ul>'));
  assert.ok(!out.includes('•'));
});

t('listas numeradas', () => {
  const out = formatAurelioMessage('Ventajas:\n1. **Ética:** algo\n2. Prácticas\n3. Prestigio');
  assert.ok(out.includes('<ol><li><strong>Ética:</strong> algo</li><li>Prácticas</li><li>Prestigio</li></ol>'));
});

t('párrafos y saltos de línea', () => {
  const out = formatAurelioMessage('Línea 1\nLínea 2\n\nOtro párrafo');
  assert.equal(out, '<p>Línea 1<br>Línea 2</p><p>Otro párrafo</p>');
});

t('encabezados markdown se vuelven negrita', () => {
  const out = formatAurelioMessage('## Costos\nTexto');
  assert.ok(out.startsWith('<p><strong>Costos</strong></p>'));
  assert.ok(!out.includes('#'));
});

t('enlaces y correos', () => {
  const out = formatAurelioMessage('Escribe a inscripciones@puce.edu.ec o visita https://landing.puce.edu.ec/pucegradogeneral.');
  assert.ok(out.includes('href="mailto:inscripciones@puce.edu.ec"'));
  assert.ok(out.includes('href="https://landing.puce.edu.ec/pucegradogeneral"'));
  assert.ok(out.includes('</a>.'));
});

t('asteriscos huérfanos se eliminan', () => {
  const out = formatAurelioMessage('Hola ** mundo *');
  assert.ok(!out.includes('*'));
});

t('texto vacío o nulo no rompe', () => {
  assert.equal(formatAurelioMessage(''), '');
  assert.equal(formatAurelioMessage(null), '');
});

console.log('\nTodas las pruebas de chatFormat pasaron.');
