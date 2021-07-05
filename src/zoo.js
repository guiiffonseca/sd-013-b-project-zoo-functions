const { species, employees, hours, prices } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter(({ id }) => ids.find((wantedId) => wantedId === id));
}

function getAnimalsOlderThan(animal, minimumAge) {
  return species.find(({ name }) => name === animal).residents
    .every(({ age }) => age >= minimumAge);
}

function getEmployeeByName(employeeName) {
  return employeeName ? employees.find(({ firstName, lastName }) => (firstName === employeeName
    || lastName === employeeName)) : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(wantedSpecies) {
  if (wantedSpecies) {
    return species.find(({ name }) => name === wantedSpecies).residents.length;
  }
  const numberOfAnimals = {};
  species.forEach(({ name, residents }) => {
    (numberOfAnimals[name] = residents.length);
  });
  return numberOfAnimals;
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const keys = Object.keys(entrants);
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

function getOldestFromFirstSpecies(wantedId) {
  const { responsibleFor } = employees.find(({ id }) => id === wantedId);
  const { residents } = species.find(({ id }) => id === responsibleFor[0]);
  return Object.values(residents.reduce((olderAnimal, currentAnimal) => {
    if (olderAnimal.age < currentAnimal.age) {
      return currentAnimal;
    }
    return olderAnimal;
  }));
}

function increasePrices(percentage) {
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
