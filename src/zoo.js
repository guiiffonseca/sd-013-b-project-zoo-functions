const { species, employees } = require('./data');
const data = require('./data');

const managerId = {
  stephanieId: '9e7d4524-363c-416a-8759-8aa7e50c0992',
  olaId: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  burlId: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
};
const { stephanieId, olaId, burlId } = managerId;

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const comparName = species.find((specie) => specie.name === animal);
  return comparName.residents.every((animalAge) => animalAge.age >= age);
}

function getEmployeeByName(employee) {
  if (employee === undefined) return {};
  return employees.find((people) => people.firstName === employee || people.lastName === employee);
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = Object.assign(personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  const arrayManagers = [stephanieId, olaId, burlId];
  //  if (id === arrayManagers[0] || id === arrayManagers[1] || id === arrayManagers[2]) {
  //    return true;
  //  }
  //  return false;

  return arrayManagers.filter((manage) => manage === id).some((person) => person === id);
}

function addEmployee(idValue, firstNameValue, lastNameValue, managersValue, responsibleForValue) {
  // seu código aqui

}

function countAnimals(speciesPar) {
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
