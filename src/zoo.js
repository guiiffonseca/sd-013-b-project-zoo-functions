const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const animais = species.find((specie) => specie.name === animal).residents;
  return animais.every((specie) => specie.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((employee) =>
    (employeeName === employee.firstName || employeeName === employee.lastName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees[employees.length] = { id, firstName, lastName, managers, responsibleFor };
}

function countAnimals(pecies) {
  if (pecies === undefined) {
    const allSpecies = {};
    data.species.forEach((specie) => {
      allSpecies[specie.name] = specie.residents.length;
    });
    return allSpecies;
  }
  return data.species.find((specie) => specie.name === pecies).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const price = Adult * 49.99 + Senior * 24.99 + Child * 20.99;
  return price;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const cronograma = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };

  if (dayName === undefined) return cronograma;
  return { [dayName]: cronograma[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const responsavelPor = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === responsavelPor).residents;
  const animalMaisVelho = animal.sort((animalA, animalB) => animalB.age - animalA.age)[0];
  return [animalMaisVelho.name, animalMaisVelho.sex, animalMaisVelho.age];
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function increasePrices(percentage) {
  // seu código aqui
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
