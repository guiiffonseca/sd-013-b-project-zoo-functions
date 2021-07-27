const data = require('./data');

function getSpeciesByIds(...ids) {
  const { species } = data;

  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;

  const acharOAnimal = species.find((specie) => specie.name === animal);
  return acharOAnimal.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (!employeeName) return {};
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const { employees } = data;
  return employees.find((employee) => employee.id).managers.some((manager) => manager === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants = {}) {
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const { prices } = data;
  if (!entrants || !Object.entries(entrants).length) {
    return 0;
  }
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
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
  const { prices } = data;
  Object.keys(prices).forEach((price) => {
    let increasePrice = prices[price];
    increasePrice = Math.ceil((increasePrice + (percentage / 100) * increasePrice) * 100) / 100;
    prices[price] = increasePrice;
  });
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
