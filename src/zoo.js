const data = require('./data');

function getSpeciesByIds(...ids) {
  const { species } = data;

  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;

  const acharOAnimal = species.find((specie) => specie.name === animal);
  return acharOAnimal.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (!employeeName) return {};
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const { employees } = data;
  return employees.find((employee) => employee.id).managers.some((manager) => manager === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  const { species: allSpecies } = data;
  return species ? allSpecies.find(({ name }) => name === species).residents.length : 
  allSpecies.reduce((speciesCounter, { 
  name, residents }) => ({ ...speciesCounter, [name]: residents.length }), {});
}

function calculateEntry(entrants = {}) {
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const { prices } = data;
  if (!entrants || !Object.entries(entrants).length) {
    return 0;
  }
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const cronogram = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName || !Object.entries(dayName).length) {
    return cronogram;
  }
  return { [dayName]: cronogram[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const { employees, species } = data;
  const findE = employees.find((employee) => employee.id === id).responsibleFor[0];
  const findO = species.find((specie) => specie.id === findE).residents.sort((a, b) => b.age - a.age);
  return Object.values(findO[0]);
}

function increasePrices(percentage) {
  const { prices } = data;
  Object.keys(prices).forEach((price) => {
    let increasePrice = prices[price];
    increasePrice = Math.ceil((increasePrice + (percentage / 100) * increasePrice) * 100) / 100;
    prices[price] = increasePrice;
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
