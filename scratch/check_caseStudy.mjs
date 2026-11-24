import { ALL_CAREERS_CATALOG } from '../js/data/vocationalData.js';

const keys = Object.keys(ALL_CAREERS_CATALOG);
let withCaseStudy = 0;
let withoutCaseStudy = [];

for (const key of keys) {
  const c = ALL_CAREERS_CATALOG[key];
  if (c.caseStudy && c.caseStudy.scenario && c.caseStudy.options) {
    withCaseStudy++;
  } else {
    withoutCaseStudy.push(key);
  }
}

console.log(`Total careers: ${keys.length}`);
console.log(`With caseStudy: ${withCaseStudy}`);
if (withoutCaseStudy.length > 0) {
  console.log(`Missing caseStudy:`, withoutCaseStudy);
}

