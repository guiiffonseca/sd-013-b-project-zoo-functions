const data = require('./data');

const { employees, species, prices, hours } = data;
function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const especie = species.find((bixo) => bixo.name === animal);
  return especie.residents.every((idade) => idade.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo, ...associatedWith });

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(employee);
}

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return species.find(({ name }) => name === animal).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined' || entrants === {}) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const { Adult: guy, Senior: idoso, Child: crianca } = data.prices;
  return (guy * Adult) + (idoso * Senior) + (crianca * Child);
}

function getAnimalMap(options) {
  // seu código aqui
}

const getScheduleDay = (day) => {
  const openTime = hours[day].open;
  const closingTime = hours[day].close;
  if (openTime === 0 && closingTime === 0) return 'CLOSED';
  return `Open from ${openTime}am until ${closingTime - 12}pm`;
};
function getSchedule(dayName) {
  // seu código aqui
  const result = {};
  const days = Object.keys(hours);
  if (dayName === undefined) {
    days.forEach((day) => {
      result[day] = getScheduleDay(day);
    });
  } else {
    result[dayName] = getScheduleDay(dayName);
  }
  return result;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
  const perc = (100 + percentage) / 100;
  const keys = Object.keys(prices);
  keys.forEach((key) => {
    const num = parseFloat((prices[key] * perc).toFixed(3));
    const int = Math.floor(num);
    const decimal = Math.ceil((num - int) * 100) / 100;
    prices[key] = int + decimal;
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
