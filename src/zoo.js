const data = require('./data');
const { species, employees, hours, prices } = data;

// function getSpeciesByIds(...ids) {
//   // seu código aqui
//   species.filter((specie) => ids.some((id) => specie.id === id))
// }

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const searchedSpecies = species.find((animals) => (animals.name === animal));
  return searchedSpecies.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName = '') {
  // seu código aqui
  if (employeeName === '') {
    return {}
  }
  return employees.find((p) => (p.firstName === employeeName || p.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  }
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
  // getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
