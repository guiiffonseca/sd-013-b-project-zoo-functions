const data = require('./data');

function getAnimalsOlderThan(animal, age) {
  const species = data.species.find((critter) => critter.name === animal);
  return !species.residents.find((resident) => resident.age < age);
}

function getEmployeeByName(employeeName) {
  return data.employees.find((name) => employeeName === name
    .firstName || employeeName === name.lastName) || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  const personel = data.employees;
  return personel.some((value) => value.managers
    .find((managerId) => managerId === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  let totalEntry = 0;
  totalEntry += Adult * data.prices.Adult;
  totalEntry += Senior * data.prices.Senior;
  totalEntry += Child * data.prices.Child;
  return totalEntry;
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
  let { Adult, Senior, Child } = data.prices;
  Adult = Math.ceil(Adult * (100 + percentage)) / 100;
  Senior = Math.ceil(Senior * (100 + percentage)) / 100;
  Child = Math.ceil(Child * (100 + percentage)) / 100;
  data.prices.Adult = Adult;
  data.prices.Senior = Senior;
  data.prices.Child = Child;
  return data.prices;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  // getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
