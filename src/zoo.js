const { species, employees } = require('./data');

const data = require('./data');

const getSpeciesByIds = (...rest) => species.filter((especie) => rest.includes(especie.id));

const getAnimalsOlderThan = (animal, age) =>
  species.find((especie) => especie.name === animal)
    .residents.every((elemento) => elemento.age >= age);

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return employees.find((nome) =>
    (nome.firstName === employeeName || nome.lastName === employeeName));
};

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciess) {
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
