const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((animal) => animal.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
    .find((person) => person.firstName === employeeName || person.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((person) => person.managers.includes(id));
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmp = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEmp);
}

function countAnimals(especies) {
  const quantity = {};
  species.forEach(({ name, residents }) => { quantity[name] = residents.length; });
  if (!especies) return quantity;
  return quantity[especies];
}

function calculateEntry(entrants) {
  const adPrice = prices.Adult;
  const senPrice = prices.Senior;
  const chiPrice = prices.Child;

  if (!entrants || Object.entries(entrants).length === 0) return 0;
  {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return Adult * adPrice + Child * chiPrice + Senior * senPrice;
  }
}

function getAnimalMap(options) {
  // const animalLocation = {};
  // if (!options) {
  //   animalLocation.NE = species.filter(({ location, name })  => {
  //     if (location === 'NE') return name;
  //   });
  //   animalLocation.NW = species.filter(({ location }) => location === 'NW')
  //     .map((animal) => animal.name);
  //   animalLocation.SW = species.filter(({ location }) => location === 'SW')
  //     .map((animal) => animal.name);
  //   animalLocation.SE = species.filter(({ location }) => location === 'SW')
  //     .map((animal) => animal.name);
  // };
}

function getSchedule(dayName) {
  const schedule = Object.entries(hours).reduce((acc, [day, hour]) => {
    if (day === 'Monday') {
      acc[day] = 'CLOSED';
      return acc;
    }
    acc[day] = `Open from ${hour.open}am until ${hour.close - 12}pm`;
    return acc;
  }, {});
  if (!dayName) return schedule;
  return { [dayName]: schedule[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const getResp = employees.find((person) => person.id === id).responsibleFor[0];
  const animals = species.find((specie) => specie.id === getResp);
  const ordened = animals.residents.sort((an1, an2) => an2.age - an1.age);
  return Object.values(ordened[0]);
}

function increasePrices(percentage) {
  prices.Adult = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  prices.Child = Math.ceil(prices.Child * (100 + percentage)) / 100;
  prices.Senior = Math.ceil(prices.Senior * (100 + percentage)) / 100;
}

function getEmployeeCoverage(idOrName) {
  // const personResp = employees
  //   .reduce((acc, { firstName, lastName, responsibleFor }) => {
  //     acc[`${firstName} ${lastName}`] = responsibleFor;
  //     return acc;
  // }, {});
  // if (!idOrName) return personResp;
  // return employees.find(({ firstName, lastName, id }) => {
  //   firstName === idOrName || lastName === idOrName || id === idOrName;
  // });
}
// console.log(getEmployeeCoverage('Stephanie'));
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
