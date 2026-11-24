import { ALL_CAREERS_CATALOG } from '../js/data/vocationalData.js';

const keys = Object.keys(ALL_CAREERS_CATALOG);
let count = 0;
let missing = [];

for (const key of keys) {
  const c = ALL_CAREERS_CATALOG[key];
  if (c.caseStudy && c.caseStudy.scenario && c.caseStudy.feedback) {
    count++;
  } else {
    missing.push(key);
  }
}

console.log(`Careers with valid caseStudy: ${count} / ${keys.length}`);
if (missing.length > 0) {
  console.log('Missing:', missing);
}

