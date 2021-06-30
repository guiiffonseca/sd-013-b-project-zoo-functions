const { species, employees, prices } = require('./data');

const data = require('./data');

function getSpeciesByIds(...ids) {
  const array = [];
  ids.forEach((id, index) => {
    array[index] = species.find((specie) => specie.id === id);
  });
  return array;
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents.every((usr) => usr.age > age);
}

function getEmployeeByName(employeeName) {
  let emp = {};
  emp = employees.find((per) => per.firstName === employeeName || per.lastName === employeeName);
  return emp !== undefined ? emp : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const array = employees.find((person) => person.managers.includes(id));
  if (array !== undefined) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  employees.push({
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  });
}

function countAnimals(animal) {
  const animals = {
    lions: species[0].residents.length,
    tigers: species[1].residents.length,
    bears: species[2].residents.length,
    penguins: species[3].residents.length,
    otters: species[4].residents.length,
    frogs: species[5].residents.length,
    snakes: species[6].residents.length,
    elephants: species[7].residents.length,
    giraffes: species[8].residents.length,
  };
  const size = species.find((ani) => ani.name === animal);
  return animal !== undefined ? size.residents.length : animals;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
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
