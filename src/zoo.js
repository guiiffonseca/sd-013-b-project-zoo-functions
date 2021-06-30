const { species, employees, hours, prices } = require('./data');
const data = require('./data');

const all = [...species, ...employees];
console.log(data);
console.log(hours);
console.log(prices);

function getSpeciesByIds(ids = [], ids2 = []) {
  if (ids.length === 0) {
    return ids;
  }
  if (ids2.length === 0) {
    return all.filter((element) => element.id === ids);
  }
  const elementOne = all.filter((element) => element.id === ids);
  const elementTwo = all.filter((element) => element.id === ids2);
  return [...elementOne, ...elementTwo];
}

function getAnimalsOlderThan(animal, age) {
  // primeiro usamos o filter para obter o elemento que tenha a propriedade .name igual ao parametro 'animal'
  // depos pegamos o index 0 e recebemos um objeto. Percorremos este objeto com o every e perguntamos se
  // a propriedade .age é maior que o parametro 'age'.
  return species.filter((e) => e.name === animal)[0].residents.every((e) => e.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species2) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
