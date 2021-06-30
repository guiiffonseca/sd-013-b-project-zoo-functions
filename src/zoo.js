const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const speciesSearch = ids.filter((id) => {
    const getSpecies = species.find((specie) => id === specie.id);
    return getSpecies;
  });
  return species;
}

function getAnimalsOlderThan(animal, age) {
  // const verifyAnimal = (animal === species.name) ? verifyAnimal : animal;
}

function getEmployeeByName(employeeName) {
  const employeeSearch = employees.filter((employee) => 
    employee.name === employeeName || 
    employee.lastName === employeeName)
  .reduce((accumulator, currentValue) => Object.assign(accumulator, currentValue), {});
  return employeeSearch;
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
