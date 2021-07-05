const { species, employees, prices } = require('./data');

function getSpeciesByIds(id1, id2) {
  return species.filter((especie) => especie.id === id1 || especie.id === id2);
}

function getAnimalsOlderThan(animal, minimumAge) {
  return species.some((especie, index) => especie.name === animal
   && especie.residents[index - 1].age >= minimumAge);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(() => id === '9e7d4524-363c-416a-8759-8aa7e50c0992'
  || id === 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
  || id === '0e7b460e-acf4-4e17-bcb3-ee472265db83');
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(especies) {
  const animais = {};
  species.forEach((especie) => {
    animais[especie.name] = especie.residents.length;
  });
  if (!especies) {
    return animais;
  }
  return animais[especies];
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return prices.Adult * Adult + prices.Child * Child + prices.Senior * Senior;
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
