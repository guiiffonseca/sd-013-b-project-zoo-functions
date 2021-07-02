const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const array = [];
  ids.forEach((id) => {
    const getSpecie = species.find((specie) => specie.id === id);
    array.push(getSpecie);
  });
  return array;
}

function getAnimalsOlderThan(animal, age) {
  return (species.find((specie) => specie.name === animal))
    .residents.every((specie) => specie.age > age);
}

function getEmployeeByName(employeeName) {
  return (employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName)) || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return Boolean(employees.find((employee) => employee.managers.find((manager) => manager === id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
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
