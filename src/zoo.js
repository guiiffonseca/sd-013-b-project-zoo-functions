const data = require('./data');
const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((animalSpecie) => animalSpecie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const animalName = species.find((animals) => animals.name === animal);
  return animalName.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((manager) => manager.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  const especiesAnimals = {};
  if (!specie) {
    return species.reduce((acc, specsName) => {
      acc[specsName.name] = specsName.residents.length; return acc;
    }, {});
  }
  species.forEach((specName) => { especiesAnimals[specName.name] = specName.residents.length; });
  return especiesAnimals[specie];
}

function calculateEntry(entrants = {}) {
  if (entrants === {}) {
    return 0;
  }
  const total = Object.keys(entrants).reduce((acc, curr) => acc + entrants[curr] * prices[curr], 0);
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    if (dayName === undefined || (day === dayName)) {
      schedule[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    }
  });
  if (dayName === undefined || (dayName === 'Monday')) schedule.Monday = 'CLOSED';
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  return Object.keys(prices).forEach((price) => {
    prices[price] = parseFloat((
      (Math.round(prices[price] * percentage) / 100) + prices[price]).toFixed(2));
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
