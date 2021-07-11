const data = require('./data');

function getSpeciesByIds(...ids) {
  const seletor = data.species.filter(({ id }) => ids.includes(id));
  return seletor;
}

function getAnimalsOlderThan(animal, age) {
  const animalsSearch = data.species.find(({ name }) => animal.includes(name));
  const ageSearch = animalsSearch.residents.every((element) => element.age >= age);
  return ageSearch;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const seletor = data.employees.find(
    (element) => element.firstName === employeeName || element.lastName === employeeName,
  );
  return seletor;
}

function createEmployee(personalInfo, associatedWith) {
  const newObj = { ...personalInfo, ...associatedWith };
  return newObj;
}

function isManager(id) {
  const seletor = data.employees.find((element) => element.id.includes(id));
  const test = function a() {
    if (seletor.firstName === 'Burl'
    || seletor.firstName === 'Stephanie' || seletor.firstName === 'Ola') {
      return true;
    }
    return false;
  };
  return test();
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    const allAnimals = data.species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
    return allAnimals;
  }
  const qual = data.species.find((element) => element.name === species);
  const quant = qual.residents.length;
  return quant;
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const calculate = Object.entries(entrants).reduce((acc, [type, quantity]) => {
    const totalPrice = data.prices[type] * quantity;
    return acc + totalPrice;
  }, 0);
  return calculate;
}

function getAnimalMap(options) {
  // seu código aqui
}

const fullSchedule = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};
function getSchedule(dayName) {
  if (!dayName) return fullSchedule;
  const selectDay = (name) => {
    const day = Object.entries(fullSchedule).filter((element) => element.includes(dayName));
    const objectDay = day.reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
    return objectDay;
  };
  return (selectDay(dayName));
}
function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const porcent = 1 + (percentage / 100);
  const increase = Object.entries(data.prices).reduce((acc, [string, number]) => {
    acc[string] = (Math.round(number * porcent * 100)) / 100;
    return acc;
  }, {});
  Object.assign(data.prices, increase);
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
