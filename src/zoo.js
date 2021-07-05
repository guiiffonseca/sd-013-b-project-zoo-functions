const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((inputedId) => result.push(species.find(({ id }) => id === inputedId)));
  return result;
}

function getAnimalsOlderThan(animal, number) {
  return ((species.find(({ name }) => animal === name))
    .residents.every(({ age }) => age > number));
}

function getEmployeeByName(name) {
  if (name) {
    return employees.find(({ firstName, lastName }) => name === firstName || lastName === name);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(number) {
  return employees.some(({ managers }) => managers.some((element) => element === number));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(animal) {
  if (animal) {
    return species.find(({ name }) => animal === name).residents.length;
  }
  const result = {};
  species.forEach(({ name, residents }) => {
    result[name] = residents.length;
  });
  return result;
}

function calculateEntry(values) {
  if (values === undefined) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = values;
  const priceAdult = Adult * (prices.Adult);
  const priceChild = Child * (prices.Child);
  const priceSenior = Senior * (prices.Senior);
  return (priceAdult + priceChild + priceSenior);
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
