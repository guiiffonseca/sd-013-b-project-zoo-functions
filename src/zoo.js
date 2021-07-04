const data = require('./data');

function getSpeciesByIds(...ids) {
  const arrayOfSpec = [];
  ids.forEach((element) => arrayOfSpec.push(data.species.find((specie) => specie.id === element)));
  return arrayOfSpec;
}

function getAnimalsOlderThan(animal, age) {
  const relAnimal = data.species.find((animalName) => animalName.name === animal);
  return relAnimal.residents.every((element) => element.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName !== '') {
    return data.employees.find((element) =>
      element.firstName === employeeName || element.lastName === employeeName);
  }
  return {};
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
