const data = require('./data');

const { species, employees, prices } = data;
const { Adult, Senior, Child } = prices;

function getSpeciesByIds(ids) {
  return ids.map((id) => species.find((element) => element.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((name) => animal === name.name).residents.every((ages) => ages.age >= age);
}

function getEmployeeByName(employName) {
  if (employName === undefined) { return {}; }
  return employees.find((name) => name.firstName === employName || name.lastName === employName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return !!employees.find(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species1) {
  const animals = {};
  if (!species1) {
    species.forEach((specie) => { animals[specie.name] = specie.residents.length; });
    return animals;
  }
  return species.find((name) => name.name === species1).residents.length;
}

function getTotalPrice(qtpessoas, valor) {
  return qtpessoas ? qtpessoas * valor : 0;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) { return 0; }

  return getTotalPrice(entrants.Adult, Adult)
    + getTotalPrice(entrants.Senior, Senior)
    + getTotalPrice(entrants.Child, Child);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(ids) {
  const employeNow = employees.find((id) => id.id === ids).responsibleFor[0];
  const especiesNew = species.find((animal) => animal.id === employeNow).residents;
  const Oldier = especiesNew.reduce((acc, curr) => ((acc.age < curr.age) ? curr : acc));
  return Object.entries(Oldier);
}

function increasePrices(percentage) {
  prices.Adult = (Math.ceil((prices.Adult * (percentage / 100) + prices.Adult) * 100)) / 100;
  prices.Senior = (Math.ceil((prices.Senior * (percentage / 100) + prices.Senior) * 100)) / 100;
  prices.Child = (Math.ceil((prices.Child * (percentage / 100) + prices.Child) * 100)) / 100;
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
