const { species, employees, prices } = require('./data');

// Requirement 1
// Refer1: https://pt.stackoverflow.com/questions/232954/como-passar-um-array-como-par%C3%A2metro-para-fun%C3%A7%C3%A3o
// Refer2: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  return species.filter(({ id }) => ids.includes(id));
}

// Requirement 2
function getAnimalsOlderThan(animalIn, ageIn) {
  return species.find(({ name }) => animalIn === name)
    .residents.every(({ age }) => age >= ageIn);
}

// Requirement 3
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(({ firstName, lastName }) =>
    employeeName === firstName || employeeName === lastName);
}

// Requirement 4 - Using an object spread instead of `Object.assign`
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// Requirement 5
function isManager(idInput) {
  const ownerId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  return employees.some(({ id, managers }) =>
    id === idInput && managers.includes(ownerId));
}

// Requirement 6
// Refer: https://ui.dev/shorthand-properties/
// Refer: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// Requirement 7
function countAnimals(speciesInput) {
  const countResidents = {};
  species.forEach(({ name, residents }) => {
    countResidents[name] = residents.length;
  });
  if (speciesInput === undefined) return countResidents;
  return countResidents[speciesInput];
}

// Requirement 8
function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const totalEntrants = Adult * prices.Adult
  + Child * prices.Child
  + Senior * prices.Senior;
  return totalEntrants;
}

// Requirement 9
function getAnimalMap(options) {
  // seu código aqui
}

// Requirement 10
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

// Requirement 11
// Assistant Function
function findOldest(animalList) {
  let oldestAge = { age: 0 };
  animalList.forEach((animalAge) => {
    if (animalAge.age > oldestAge.age) {
      oldestAge = animalAge;
    }
  });
  return oldestAge;
}

// Main Function
function getOldestFromFirstSpecies(id) {
  const selectEmployee = employees.find((employee) => employee.id === id);
  const firstAnimal = species.find((animal) => (selectEmployee.responsibleFor[0]) === animal.id);
  return Object.values(findOldest(firstAnimal.residents));
}

// Requirement 12
// Refer1: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
// Refer2: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function increasePrices(percentage) {
  Object.entries(prices).forEach(([key]) => {
    const percentNumber = percentage / 100;
    prices[key] += (prices[key] * percentNumber) + 0.007;
    prices[key] = parseFloat((prices[key]).toFixed(2));
  });
  return prices;
}

// Requirement 13
const employeesList = {
  'Nigel Nelson': ['lions', 'tigers'],
  'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
  'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
  'Wilburn Wishart': ['snakes', 'elephants'],
  'Stephanie Strauss': ['giraffes', 'otters'],
  'Sharonda Spry': ['otters', 'frogs'],
  'Ardith Azevado': ['tigers', 'bears'],
  'Emery Elser': ['elephants', 'bears', 'lions'],
};

// Assistant Function
function findAnimal(arrayAnimals) {
  return arrayAnimals.map((animalId) => species.find((animalData) =>
    animalId === animalData.id).name);
}

// Main Function
function getEmployeeCoverage(idOrName) {
  if (idOrName === undefined) return employeesList;
  const selectEmp = employees.find(({ id, firstName, lastName }) =>
    id === idOrName || firstName === idOrName || lastName === idOrName);
  return ({ [`${selectEmp.firstName} ${selectEmp.lastName}`]:
    findAnimal(selectEmp.responsibleFor) });
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
