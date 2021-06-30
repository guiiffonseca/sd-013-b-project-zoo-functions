const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter(({ id }) => ids.find((wantedId) => wantedId === id));
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

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (species) {
    return data.species.find(({ name }) => name === species).residents.length;
  }
  const numberOfAnimals = {};
  data.species.forEach(({ name, residents }) => {
    (numberOfAnimals[name] = residents.length);
  });
  return numberOfAnimals;
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
