/* eslint-disable editorconfig/editorconfig */
const data = require('./data');
const assert = require('assert');
console.clear();

function calculateEntry(entrants) {
  if (!entrants) return 0;

  const adult = (entrants.Adult ? entrants.Adult : 0);
  const child = (entrants.Child ? entrants.Child : 0);
  const senior = (entrants.Senior ? entrants.Senior : 0);

  const valores = data.prices;
  const total = valores.Adult * adult + valores.Child * child + valores.Senior * senior;
  return total;

}

assert.strictEqual(calculateEntry({}), 0);

let entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
let actual = calculateEntry(entrants);
assert.strictEqual(actual, 187.94);

entrants = { 'Adult': 1 };
actual = calculateEntry(entrants);
assert.strictEqual(actual, 49.99);

entrants = { 'Senior': 1 };
actual = calculateEntry(entrants);
assert.strictEqual(actual, 24.99);

entrants = { 'Child': 1 };
actual = calculateEntry(entrants);
assert.strictEqual(actual, 20.99);

entrants = { 'Child': 1, 'Senior': 1 };
actual = calculateEntry(entrants);
assert.strictEqual(actual, 45.98);