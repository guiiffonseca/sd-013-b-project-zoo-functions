const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal).residents
    .every((specificAnimal) => specificAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function getResidents(acc, { name, residents }) {
  acc[name] = residents.length;
  return acc;
}

function countAnimals(specieName) {
  if (specieName === undefined) {
    return species.reduce(getResidents, {});
  }
  const animal = species.find((specie) => specie.name === specieName);
  return animal.residents.length;
}

function calculateEntry(entrants = 0) {
  return Object.entries(entrants).reduce((acc, entrant) => {
    const type = Object.entries(prices).find((price) => price[0] === entrant[0]);
    return acc + type[1] * entrant[1];
  }, 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const speciesID = employees.find((employee) => employee.id === id).responsibleFor;
  return species.find((specie) => specie.id === speciesID[0]).residents
    .reduce((acc, animal) => {
      const objectTrasnform = Object.values(animal);
      return acc[2] > objectTrasnform[2] ? acc : objectTrasnform;
    }, []);
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
