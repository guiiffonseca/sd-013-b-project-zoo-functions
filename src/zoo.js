const data = require('./data');

const { species } = data;
function getSpeciesByIds(...ids) {
  const seletor = species.filter(({ id }) => ids.includes(id));
  return seletor;
}

function getAnimalsOlderThan(animal, age) {
  const animalsSearch = species.find(({ name }) => animal.includes(name));
  const ageSearch = animalsSearch.residents.every((element) => element.age >= age);
  return ageSearch;
}

const { employees } = data;
function getEmployeeByName(employeeName) {
  const test = ['lastName', 'firstName'];
  const seletor = employees.filter((test) => employeeName.includes(test));
  return seletor;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  const seletor = employees.find((ids) => id.includes(ids));
  console.log(seletor);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
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
