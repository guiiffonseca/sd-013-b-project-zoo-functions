const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  const speciesList = [];
  ids.forEach((speciesId) => {
    const findSpecies = species.find(({ id }) => id === speciesId);
    speciesList.push(findSpecies);
  });
  return speciesList;
}

function getAnimalsOlderThan(animal, age) {
  const { residents } = species.find(({ name }) => name === animal);
  return residents.every(({ age: animalAge }) => animalAge >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const findFirstName = employees.find(({ firstName }) => firstName === employeeName);
  if (findFirstName) return findFirstName;
  const findLastName = employees.find(({ lastName }) => lastName === employeeName);
  if (findLastName) return findLastName;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push(createEmployee({ id, firstName, lastName }, { managers, responsibleFor }));
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
