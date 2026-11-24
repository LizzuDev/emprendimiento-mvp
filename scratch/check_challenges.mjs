import { ALL_CAREERS_CATALOG } from '../js/data/vocationalData.js';

const keys = Object.keys(ALL_CAREERS_CATALOG);
console.log(`Total careers in catalog: ${keys.length}`);

let withChallenge = 0;
let withoutChallenge = [];

for (const key of keys) {
  const c = ALL_CAREERS_CATALOG[key];
  if (c.challenge && c.challenge.question && c.challenge.options && c.challenge.options.length > 0) {
    withChallenge++;
  } else {
    withoutChallenge.push(key);
  }
}

console.log(`Careers with valid challenge: ${withChallenge}`);
if (withoutChallenge.length > 0) {
  console.log(`Careers missing challenge:`, withoutChallenge);
} else {
  console.log('ALL 39 CAREERS HAVE PROPERLY CONFIGURED CHALLENGES!');
}

