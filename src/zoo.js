const data = require('./data');

const { species } = data;
const { employees } = data;

// console.log(species)

function getSpeciesByIds(...ids) {
  if (!ids.length) return [];
  if (ids.length === 1) return species.filter(({ id }) => id === ids[0]);
  const animalsFind = [];
  ids.forEach((animalId, index) => {
    animalsFind.push(species.find(({ id }) => id === animalId));
  });
  return animalsFind;
}

function getAnimalsOlderThan(animal, age) {
  const { residents } = species.find(({ name }) => name === animal);
  return residents.every(({ age: residentAge }) => residentAge >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const fisrtNameFind = employees.find(({ firstName }) => firstName === employeeName);
  if (fisrtNameFind) return fisrtNameFind;
  const lastNameFind = employees.find(({ lastName }) => lastName === employeeName);
  if (lastNameFind) return lastNameFind;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
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
