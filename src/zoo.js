const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((element) => ids.includes(element.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const test = data.species.find((element) => animal === element.name);
  return test.residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find((element) => element.firstName === employeeName
  || element.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  // seu código aqui
  if (!species) {
    const result = {};
    data.species.forEach((element) => {
      result[`${element.name}`] = element.residents.length;
    });
    return result;
  }
  const animal = data.species.find((element) => element.name === species);
  return animal.residents.length;
}

function sumPrices(entrants, personType) {
  const { prices } = data;
  let result = 0;
  for (let index = 0; index < personType.length; index += 1) {
    switch (personType[index]) {
    case 'Adult':
      result += prices.Adult * entrants.Adult;
      break;
    case 'Child':
      result += prices.Child * entrants.Child;
      break;
    case 'Senior':
      result += prices.Senior * entrants.Senior;
      break;
    default:
      break;
    }
  }
  return result;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) return 0;
  const personType = Object.keys(entrants);
  return sumPrices(entrants, personType);
}

function getAnimalMap(options) {
  // seu código aqui
}

function displayDaySchedule(day) {
  const obj = data.hours;
  const result = {};
  result[day] = (day === 'Monday') ? 'CLOSED'
    : `Open from ${obj[day].open}am until ${obj[day].close - 12}pm`;
  return result;
}

function getSchedule(dayName) {
  // seu código aqui
  const obj = data.hours;
  const days = Object.keys(obj);
  const result = {};
  if (!dayName) {
    days.forEach((day) => {
      if (day === 'Monday') result[day] = 'CLOSED';
      else result[day] = `Open from ${obj[day].open}am until ${obj[day].close - 12}pm`;
    });
    return result;
  }
  return displayDaySchedule(dayName);
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const ages = [];
  const employee = data.employees.find((element) => element.id === id);
  const species = data.species.find((element) => element.id === employee.responsibleFor[0]);
  species.residents.forEach((animal) => ages.push(animal.age));
  const oldestAge = Math.max(...ages);
  const oldestAnimal = species.residents.find((element) => element.age === oldestAge);
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

function increasePrices(percentage) {
  // seu código aqui
  const increase = percentage / 100;
  const { prices } = data;
  prices.Adult += Math.round(prices.Adult * increase);
  prices.Child += (prices.Child * increase);
  prices.Senior += (prices.Senior * increase);
  return prices;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const speciesNames = [];
  const employee = data.employees.find((element) => idOrName === element.id
  || idOrName === element.firstName || idOrName === element.lastName);
  employee.responsibleFor.forEach((id) =>
    speciesNames.push(data.species.find((element) => element.id === id).name));
  const result = {};
  result[`${employee.firstName} ${employee.lastName}`] = speciesNames;
  return result;
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
