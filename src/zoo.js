const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const { species } = data;
  if (typeof ids === 'undefined') {
    return [];
  }
  const especieIds = species.filter((especie) => ids.includes(especie.id));
  return especieIds;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { species } = data;
  const getAnimal = species.find((especie) => especie.name === animal);
  const checkAge = getAnimal.residents.every((element) => element.age >= age);
  return checkAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const { employees } = data;
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const returnName = employees.find((element) =>
    employeeName === element.firstName || employeeName === element.lastName);
  return returnName;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const employe = data.employees.find((element) => element.managers.includes(id));
  if (employe) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const addPeople = data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return addPeople;
}

function countAnimals(especies) {
  // seu código aqui
  const { species } = data;
  const creatList = species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
  if (typeof especies === 'undefined') {
    return creatList;
  }
  return creatList[especies];
}

function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
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
