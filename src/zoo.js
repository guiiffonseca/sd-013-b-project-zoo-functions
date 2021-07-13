const { species } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => id === specie.id) === true);
}

function getAnimalsOlderThan(animal, age) {
  const selectedSpecie = species.find((specie) => specie.name === animal);
  return selectedSpecie.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  const array = employees.filter((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return array[0] !== undefined ? array[0] : {};
}

function createEmployee(personalInfo, associatedWith) {
  // personalInfo = {id, firstName, lastName}
  // associatedWith = {managers, responsibleFor}
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  let boolean = false;
  const mg1 = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const mg2 = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const mg3 = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  if (id === mg1 || id === mg2 || id === mg3) {
    boolean = true;
  }
  return boolean;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
  if (managers === undefined) {
    employees[employees.length - 1].managers = [];
  }
  if (responsibleFor === undefined) {
    employees[employees.length - 1].responsibleFor = [];
  }
}

function countAnimals(animal) {
  const check = animal;
  let output;
  if (check !== undefined) {
    const givenAnimalArray = species.filter((specie) => specie.name === animal);
    output = givenAnimalArray[0].residents.length;
  } else {
    output = {};
    species.forEach((specie) => {
      const amount = specie.residents.length;
      const { name } = specie;
      output[name] = amount;
    });
  }
  return output;
}

function calculateEntry(entrants) {
  // seu código aqui
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
