const { species, employees, hours, prices } = require('./data');

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
  const employeFind = employees.find(({ id: employeId }) => employeId === id);
  const employeManager = employeFind.managers[0];
  if (employeFind.managers.length === 1) {
    const boss = employees.find(({ id: employeId }) => employeId === employeManager);
    if (!boss.managers.length) return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return employees;
}

function countAnimals(countSpecies) {
  if (!countSpecies) {
    const obj = { };
    species.forEach(({ name, residents }) => {
      obj[name] = residents.length;
    });
    return obj;
  }
  const { residents } = species.find(({ name }) => name === countSpecies);
  return residents.length;
}

function calculateEntry(entrants) {
  let total = 0;
  if (!entrants) return 0;
  if (Object.entries(entrants).length === 0) return 0;
  Object.keys(entrants).forEach((key, index) => {
    total += prices[key] * entrants[key];
  });
  return total;
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
