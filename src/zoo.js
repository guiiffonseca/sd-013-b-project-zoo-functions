const { species, employees } = require('./data');
const data = require('./data');

// Requisito 1
// Refer1: https://pt.stackoverflow.com/questions/232954/como-passar-um-array-como-par%C3%A2metro-para-fun%C3%A7%C3%A3o
// Refer2: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  return species.filter(({ id }) => ids.includes(id));
}

// Requisito 2
function getAnimalsOlderThan(animalIn, ageIn) {
  return species.find(({ name }) => animalIn === name)
    .residents.every(({ age }) => age >= ageIn);
}

// Requisito 3
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(({ firstName, lastName }) =>
    employeeName === firstName || employeeName === lastName);
}

// Requisito 4 - Using an object spread instead of `Object.assign`
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// Requisito 5
function isManager(idInput) {
  const ownerId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  return employees.some(({ id, managers }) =>
    id === idInput && managers.includes(ownerId));
}

// Requisito 6
// Refer: https://ui.dev/shorthand-properties/
// Refer: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// Requisito 7
function countAnimals(speciesInput) {
  const countResidents = {};
  species.forEach(({ name, residents }) => {
    countResidents[name] = residents.length;
  });
  if (speciesInput === undefined) {
    return countResidents;
  }
  return countResidents[speciesInput];
}

// Requisito 8
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
