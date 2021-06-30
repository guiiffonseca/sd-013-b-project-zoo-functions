const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((animal) => animal.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
    .find((person) => person.firstName === employeeName || person.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((person) => person.managers.includes(id));
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmp = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEmp);
}

function countAnimals(especies) {
  const quantity = {};
  if (!especies) {
    species.forEach((animal) => (quantity[animal.name] = animal.residents.length));
    return quantity;
  } return species.find((specie) => specie.name === especies).residents.length;
}

function calculateEntry(entrants) {
  const adPrice = prices.Adult;
  const senPrice = prices.Senior;
  const chiPrice = prices.Child;

  if (!entrants || Object.entries(entrants).length === 0 ) return 0;
  else {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return Adult * adPrice + Child * chiPrice + Senior * senPrice;
  }
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
