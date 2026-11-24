import { ALL_CAREERS_CATALOG } from '../js/data/vocationalData.js';

const firstKey = Object.keys(ALL_CAREERS_CATALOG)[0];
console.log('Sample career key:', firstKey);
console.log('Sample career properties:', Object.keys(ALL_CAREERS_CATALOG[firstKey]));
console.log('Sample career full object:');
console.log(JSON.stringify(ALL_CAREERS_CATALOG[firstKey], null, 2));

