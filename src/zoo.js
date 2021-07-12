const { species, employees, prices } = require('./data');
const data = require('./data');

// Requisito 1
// Refer1: https://pt.stackoverflow.com/questions/232954/como-passar-um-array-como-par%C3%A2metro-para-fun%C3%A7%C3%A3o
// Refer2: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  return species.filter(({ id }) => ids.includes(id));
}

// Requisito 2
function getAnimalsOlderThan(animalIn, ageIn) {
  return species.find(({ name }) => animalIn === name)
    .residents.every(({ age }) => age >= ageIn);
}

// Requisito 3
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(({ firstName, lastName }) =>
    employeeName === firstName || employeeName === lastName);
}

// Requisito 4 - Using an object spread instead of `Object.assign`
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// Requisito 5
function isManager(idInput) {
  const ownerId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  return employees.some(({ id, managers }) =>
    id === idInput && managers.includes(ownerId));
}

// Requisito 6
// Refer: https://ui.dev/shorthand-properties/
// Refer: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// Requisito 7
function countAnimals(speciesInput) {
  const countResidents = {};
  species.forEach(({ name, residents }) => {
    countResidents[name] = residents.length;
  });
  if (speciesInput === undefined) {
    return countResidents;
  }
  return countResidents[speciesInput];
}

// Requisito 8
function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const totalEntrants = Adult * prices.Adult
  + Child * prices.Child
  + Senior * prices.Senior;
  return totalEntrants;
}

// Requisito 9
function getAnimalMap(options) {
  // seu código aqui
}

// Requisito 10
function getSchedule(dayName) {
  const fullSchedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName === undefined) return fullSchedule;
  return { [dayName]: fullSchedule[dayName] };
}

// Requisito 11
function findOldest(animals) {
  let oldest = { age: -Infinity };
  animals.forEach((animal) => {
    if (animal.age > oldest.age) {
      oldest = animal;
    }
  });
  return oldest;
}

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((person) => person.id === id);
  const firstId = employee.responsibleFor[0];
  const firstSpecies = species.find((kind) => kind.id === firstId);

  return Object.values(findOldest(firstSpecies.residents));
}

getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992');

// Requisito 12
function increasePrices(percentage) {
  const percentNumber = percentage / 100;
  Object.entries(prices).forEach(([key]) => {
    prices[key] += (prices[key] * percentNumber) + 0.001;
    return (prices[key]).toFixed(2);
  });
}

// Requisito 13
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
