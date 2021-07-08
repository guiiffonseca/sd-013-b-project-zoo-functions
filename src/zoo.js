const { species, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // data.employees[0].managers[0]

  const array = [];
  ids.forEach((id) => array.push(data.species.find((specie) => specie.id === id)));
  return array;
}

function getAnimalsOlderThan(animal, age) {
  const especies = data.species;
  const targetSpecie = especies.find((especie) => especie.name === animal);
  const residentes = targetSpecie.residents;
  return residentes.every((residente) => residente.age >= age);
}

function getEmployeeByName(namea) {
  if (!namea) {
    return {};
  }
  const procura = data.employees.find((person) => person.firstName === namea
  || person.lastName === namea);
  return procura;
}

function createEmployee(personalInfo, associatedWith) {
  const destino = {};
  const clone = Object.assign(destino, personalInfo, associatedWith);
  return clone;
}

function isManager(id) {
  const persona = data.employees;
  return persona.some((person) => person.managers[0] === id || person.managers[1] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(element) {
  // seu código aqui
  const procuraA = data.species;
  if (!element) {
    return procuraA.reduce((acc, { residents, name }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  } return procuraA.find(({ name }) => name === element).residents.length;
}

function calculateEntry(entrants = {}) {
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  if (!entrants || !Object.entries(entrants).length) {
    return 0;
  }
  return (prices.Adult * Adult) + (prices.Child * Child
  ) + (prices.Senior * Senior);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const conograma = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED' };
  if (!dayName || !Object.entries(dayName).length) {
    return conograma;
  }
  return { [dayName]: conograma[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const get = data.employees.find((element) => element.id === id).responsibleFor[0];
  const filtraVelho = species.find((ele) => ele.id === get).residents.sort((a, b) => b.age - a.age);

  return Object.values(filtraVelho[0]);
}

function increasePrices(percentage) {
  // seu código aqui
  // return Object.values(prices.Adult * percentage / 100);
  Object.keys(prices).forEach((price) => {
    let valorAjustado = prices[price];

    valorAjustado = Math.ceil((valorAjustado + (percentage / 100) * valorAjustado) * 100) / 100;
    prices[price] = valorAjustado;
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
