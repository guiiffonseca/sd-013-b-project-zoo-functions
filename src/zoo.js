const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  if (typeof ids === 'undefined') {
    return [];
  }
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((specie) => specie.age > age);
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return employees.find(({ firstName, lastName }) =>
    (firstName === employeeName || lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(input) {
  const count = {};
  species.forEach(({ name, residents }) => {
    count[name] = residents.length;
  });
  if (typeof input === 'undefined') {
    return count;
  }
  return count[input];
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return ((Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child));
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {

}

function increasePrices(percentage) {

  // prices.Child = (Math.round((prices.Child * (1 + (percentage / 100))) * 100)) / 100;
  // prices.Adult = (Math.round((prices.Adult * (1 + (percentage / 100))) * 100)) / 100;
  // prices.Senior = (Math.round((prices.Senior * (1 + (percentage / 100))) * 100)) / 100;
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
