const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const speciesById = [];
  ids.forEach((id) => {
    const matchSpecies = species.filter((specie) => specie.id === id);
    speciesById.push(...matchSpecies);
  });
  return speciesById;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const ages = species.find((specie) => specie.name === animal);
  const anyOlderThan = ages.residents.every((olders) => olders.age >= age);
  return anyOlderThan;
}

function getEmployeeByName(name) {
  // seu código aqui
  return employees.find(({ firstName, lastName }) => firstName === name || lastName === name) || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const employeeById = employees.some((employee) => employee.managers.includes(id));
  return employeeById;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciess) {
  // seu código aqui
  const numberOfAnimals = {};
  if (speciess) {
    const specie = species.find(({ name }) => name === speciess);
    return specie.residents.length;
  }
  species.forEach((animal) => {
    numberOfAnimals[animal.name] = animal.residents.length;
  });
  return numberOfAnimals;
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
