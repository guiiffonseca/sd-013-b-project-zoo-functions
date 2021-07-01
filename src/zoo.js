const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => (id === specie.id)));
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal)
    .residents.every((elemento) => elemento.age >= age);
}

function getEmployeeByName(employeeName) {
  const getEmployee = employees
    .find(({ firstName, lastName }) => (firstName === employeeName || lastName === employeeName));
  return (employeeName === undefined ? {} : getEmployee);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees
    .some(({ managers }) => (
      managers.some((manager) => (manager === id))
    ));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

/* function countAnimals(species) {
  // seu código aqui
} */

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
  // countAnimals,
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
