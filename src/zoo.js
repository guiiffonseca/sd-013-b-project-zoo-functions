const { species, employees } = require('./data');
// const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...speciesIds) {
  return speciesIds.map((specieId) => species.find((specie) => specie.id === specieId));
}

//  console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

function getAnimalsOlderThan(animal, age) {
  const specie = species.find((grup) => grup.name === animal).residents;
  // console.log(specie);
  return specie.every((specieGrup) => specieGrup.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((i) => i.firstName === employeeName || i.lastName === employeeName);
}

// console.log(getEmployeeByName('Emery'));

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species2) {
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
