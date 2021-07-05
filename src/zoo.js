const { hours, prices } = require('./data');
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
  const daysOfTheWeek = Object.keys(hours);
  const emptyDays = {};

  daysOfTheWeek.forEach((day, index) => {
    emptyDays[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    if (index === daysOfTheWeek.length - 1) emptyDays[day] = 'CLOSED';
  });

  if (typeof dayName === 'undefined') return emptyDays;

  if (dayName === 'Monday') return { Monday: 'CLOSED' };
  const dayFinder = emptyDays[daysOfTheWeek.find((nam) => nam === dayName)];
  return { [dayName]: dayFinder };
}

function getOldestFromFirstSpecies(id) {
  const getIds = data.employees.find((employee) => employee.id === id).responsibleFor;
  const getOlderOne = data.species.find((specie) => specie.id === getIds[0])
    .residents.sort((residentAgeA, residentAgeB) => residentAgeB.age - residentAgeA.age);
  return Object.values(getOlderOne[0]);
}

function increasePrices(percentage) {
  const pricesValues = Object.keys(prices);
  pricesValues.forEach((value) => {
    const roundedNumber = Math.round((prices[value] * (1 + (percentage / 100))) * 100) / 100;
    prices[value] = roundedNumber;
  });
  return pricesValues;
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
