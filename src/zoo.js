const data = require('./data');
// const { species } = require('./data');
const { species, employees, hours, prices } = data;

function getSpeciesByIds(...ids) {
  if (!ids) return []; // retorna vazio se não entrar parametro
  return data.species.filter((specie) => ids.some((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName)
    || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  for (let index = 0; index < employees.length; index += 1) {
    const test = employees[index].managers.some((manager) => manager === id);
    if (test === true) {
      return test;
    }
  }
  return false;
}

function emptyArrayTest(arr) {
  if (arr === undefined) {
    return [];
  }
  return arr;
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
