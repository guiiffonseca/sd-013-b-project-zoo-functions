const data = require('./data');

function getSpeciesByIds(...ids) {
  const speciesById = ids.map((id) => data.species.find((specie) => specie.id === id));
  return speciesById;
}
function getAnimalsOlderThan(animal, age) {
  const getAnimals = data.species.find((specie) => specie.name === animal);
  const olders = getAnimals.residents.every((ageAnimal) => ageAnimal.age > age);
  return olders;
}

function getEmployeeByName(employeeName) {
  const employeesNames = data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  if (employeeName === undefined) {
    return {};
  }
  return employeesNames;
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
