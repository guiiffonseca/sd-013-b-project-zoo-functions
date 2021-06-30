const data = require('./data');

function getSpeciesByIds(...ids) {
  const species = [];

  ids.forEach((searchId) => {
    const foundSpecies = data.species.find(({ id }) => id === searchId);
    species.push(foundSpecies);
  });

  return species;
}

function getAnimalsOlderThan(speciesName, age) {
  const { residents } = data.species.find(({ name }) => name === speciesName);

  return residents.every((animal) => animal.age >= age);
}

function getEmployeeByName(name) {
  const employee = data.employees.find(
    ({ firstName, lastName }) => firstName === name || lastName === name,
  );

  return employee || {};
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
