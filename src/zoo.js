const { prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === 'undefined') return [];
  const filteredIds = data.species.filter((id) => ids.includes(id.id));
  return filteredIds;
}

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((id) => id.name === animal)
    .residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers
    .some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  const allAnimals = {};
  if (typeof species === 'undefined') {
    data.species.forEach((specie) => { allAnimals[specie.name] = specie.residents.length; });
    return allAnimals;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const values = data.prices;
  const result = values.Adult * Adult + values.Child * Child + values.Senior * Senior;
  return result;
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
