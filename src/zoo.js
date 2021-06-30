const { species, employees } = require('./data');

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

// console.log(employees)
// verificar se tem manager e se tiver verificar se o manager tem manager aih ele e um gerente, senao ela nao e
function isManager(id) {
  const employeFind = employees.find(({ id: employeId }) => employeId === id);
  const employeManager = employeFind.managers[0];
  if (employeFind.managers.length === 1) {
    const boss = employees.find(({ id: employeId }) => employeId === employeManager);
    if (!boss.managers.length) return true;
  }
  return false;
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
