const data = require('./data');

const { species } = data;
const { employees } = data;

function getSpeciesByIds(...ids) {
  return species.filter((objc) =>
    ids.some((id) => objc.id === id));
}

function getAnimalsOlderThan(animal, age) {
  let input = false;
  species
    .filter((value) => value.name === animal)
    .forEach(({ residents }) => {
      input = residents.every((animalSingle) => animalSingle.age >= age);
    });
  return input;
}

function getEmployeeByName(employeeName) {
  return (employeeName === undefined) ? { ...employeeName } : employees
    .filter((value) => employeeName === value.firstName || employeeName === value.lastName)[0];
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
