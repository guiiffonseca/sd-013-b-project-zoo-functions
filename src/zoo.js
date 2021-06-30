const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter(({ id }) => ids.find((wantedId) => wantedId === id));
}

function getAnimalsOlderThan(animal, minimumAge) {
  return data.species.find(({ name }) => name === animal).residents
    .every(({ age }) => age >= minimumAge);
}

function getEmployeeByName(employeeName) {
  return employeeName ? data.employees.find(({ firstName, lastName }) => (firstName === employeeName
    || lastName === employeeName)) : {};
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (species) {
    return data.species.find(({ name }) => name === species).residents.length;
  }
  const numberOfAnimals = {};
  data.species.forEach(({ name, residents }) => {
    (numberOfAnimals[name] = residents.length);
  });
  return numberOfAnimals;
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const keys = Object.keys(entrants);
  const { prices } = data;
  let total = 0;
  keys.forEach((key) => {
    total += (entrants[key] * prices[key]);
  });
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
}

function createPhrase({ open, close }) {
  return open && close ? `Open from ${open}am until ${close - 12}pm` : 'CLOSED';
}

function getSchedule(dayName) {
  const { hours } = data;
  const schedule = {};
  if (dayName) {
    schedule[dayName] = createPhrase(hours[dayName]);
    return schedule;
  }
  const keys = Object.keys(hours);
  keys.forEach((key) => {
    schedule[key] = createPhrase(hours[key]);
  });
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const { prices } = data;
  const keys = Object.keys(prices);
  let newPrice;
  keys.forEach((key) => {
    newPrice = parseFloat((prices[key] * (1 + percentage / 100) + 0.001).toFixed(2));
    prices[key] = newPrice;
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
