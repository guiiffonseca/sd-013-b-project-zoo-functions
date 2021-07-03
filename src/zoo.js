const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => {
    if (!ids) {
      return [];
    }
    if (specie.id === ids[0] || specie.id === ids[1]) {
      return specie;
    }
  });
}

function getAnimalsOlderThan(animal, age) {
  // species.find((specie) => { return specie.name === animal})
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employ) => employ.firstName === employeeName
 || employ.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employ) => employ.managers[0] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
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
