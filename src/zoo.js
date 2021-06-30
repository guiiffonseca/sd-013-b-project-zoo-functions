const data = require('./data');

const { species } = data;
const { employees } = data;
const { prices } = data;

function getSpeciesByIds(...ids) {
  return species.filter((objc) =>
    ids.some((id) => objc.id === id));
}

function getAnimalsOlderThan(animal, age) {
  let input = false;
  species
    .filter((value) => value.name === animal)
    .forEach(({ residents }) => {
      input = residents.every((animalSingle) => animalSingle.age >= age);
    });
  return input;
}

function getEmployeeByName(employeeName) {
  return (employeeName === undefined) ? { ...employeeName } : employees
    .filter((value) => employeeName === value.firstName || employeeName === value.lastName)[0];
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newPerson = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newPerson);
}

const withParameter = (specie) => species
  .filter((objc) => objc.name === specie).map(({ residents }) => residents.length)[0];

const notParameter = () => species
  .reduce((acc, objc) => {
    const object = { [objc.name]: objc.residents.length };
    return { ...acc, ...object };
  }, {});

function countAnimals(specie) {
  return (specie === undefined) ? notParameter() : withParameter(specie);
}

function calculateEntry(entrants = []) {
  const entradas = Object.entries(entrants);
  const arrayPrice = Object.entries(prices);
  // eslint-disable-next-line no-unused-expressions
  const total = entradas.map((entrada) => arrayPrice.reduce((acc, value) => {
    return (value[0] === entrada[0]) ? value[1] * entrada[1] : acc;
  }, 0));
  return total.reduce((acc, value) => acc + value, 0);
}

console.log(calculateEntry());

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
