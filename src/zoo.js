const data = require('./data');

const { species, employees, prices } = data;

function getSpeciesByIds(...params) {
  // seu código aqui
  return species.filter((specie) => params.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.filter((specie) => specie.name === animal)[0]
    .residents.every(({ age: ageSpecie }) => ageSpecie > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName)
    || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees[employees.length] = { id, firstName, lastName, managers, responsibleFor };
  return employees;
}

function countAnimals(speciess) {
  // seu código aqui
  if (speciess === undefined) {
    return species.reduce((accumulator, correntValue) => {
      accumulator[correntValue.name] = correntValue.residents.length;
      return accumulator;
    }, { });
  }

  return species.find(({ name }) => name === speciess).residents.length;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult: adult = 0, Senior: senior = 0, Child: child = 0 } = entrants;
  const { Adult, Senior, Child } = prices;
  return Adult * adult + Senior * senior + Child * child;
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
