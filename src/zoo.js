const { species } = require('./data');
const { employees } = require('./data');
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
  const getSpecie = species.find((specie) => specie.name === animal);
  const isOlderThan = getSpecie.residents.every((specie) => specie.age > age);
  return isOlderThan;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const getEmployee = employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
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
