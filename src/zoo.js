const data = require('./data');

const { employees, species, prices } = data;
function getSpeciesByIds(...ids) {
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

function getSchedule(dayName) {
  // seu código aqui
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
    data.prices[key] = int + decimal;
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
