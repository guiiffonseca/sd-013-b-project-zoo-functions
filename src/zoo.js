const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length <= 0) return [];
  const animalsArray = [];

  ids.forEach((uniqueId) => {
    const targetSpecie = species.find(({ id }) => id === uniqueId);
    animalsArray.push(targetSpecie);
  });
  return animalsArray;
}

function getAnimalsOlderThan(animalGiven, ageGiven) {
  const { residents } = species.find(({ name }) => name === animalGiven);
  return residents.every((stats) => stats.age >= ageGiven);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const getEmployee = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return getEmployee;
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

function countAnimals(speciesGiven) {
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
