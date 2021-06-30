const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.length !== 0 ? ids.map((wantedId) => data.species.filter(({ id }) => id === wantedId))
    .reduce((species, currentSpeciesId) => species.concat(currentSpeciesId), []) : [];
}

function getAnimalsOlderThan(animal, minimumAge) {
  return data.species.find(({ name }) => name === animal).residents
    .every(({ age }) => age >= minimumAge);
}

function getEmployeeByName(employeeName) {
  return employeeName ? data.employees.find(({ firstName, lastName }) => (firstName === employeeName
    || lastName === employeeName)) : {};
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  // seu código aqui
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
