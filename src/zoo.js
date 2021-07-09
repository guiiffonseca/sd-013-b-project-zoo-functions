const { species, employees } = require('./data');
const data = require('./data');

// eslint-disable-next-line no-shadow
function getSpeciesByIds(...ids) {
  // seu código aqui
  const idReturn = species.filter((specie) => ids.includes(specie.id));
  return idReturn;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalAge = species.find((specie) => specie.name === animal).residents
    .every((index) => index.age >= age);
  return animalAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((thing) =>
    thing.firstName === employeeName || thing.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const emptyArray = {};
  return Object.assign(emptyArray, personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals() {
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
