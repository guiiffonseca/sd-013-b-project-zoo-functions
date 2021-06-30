const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const specieId = species.filter((specie) => specie.id === ids[0] || specie.id === ids[1]);
  return specieId;
}

function getAnimalsOlderThan(animal, age) {
  const specieChosen = species.find((specie) => specie.name === animal);
  const nameAnimal = specieChosen.residents;
  return nameAnimal.every((nameA) => nameA.age > age);
}

const { employees } = require('./data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((p) => p.firstName === employeeName || p.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees.some((valor, index) => valor.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciees) {
  // seu código aqui
  // trocar o 'speciees' por 'species'
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
