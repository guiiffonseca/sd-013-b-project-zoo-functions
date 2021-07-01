const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((idParam) => data.species.find(({ id }) => id === idParam));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find(({ name }) =>
    name === animal).residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) =>
    managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specieAnimal) {
  const result = {};
  if (specieAnimal) {
    const specieFind = data.species.find(({ name }) => name === specieAnimal);
    return specieFind.residents.length;
  }
  data.species.forEach(({ name, residents }) => {
    result[name] = residents.length;
  });
  return result;
}

function calculateEntry(entrants) {
  // seu
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
