const { species } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const idSpecies = ids;
  const returnSpecies = [];
  species.forEach((currentValue, index) => {
    const verificaId = idSpecies.filter((animalId) => currentValue.id === animalId);
    if (verificaId[0] === species[index].id) returnSpecies.push(species[index]);
  });
  return returnSpecies;
}

function getAnimalsOlderThan(animal, age) {
  let returnBollean = true;
  species.forEach((currentValue) => {
    if (currentValue.name === animal) {
      currentValue.residents.forEach((currentValueResidents) => {
        if (currentValueResidents.age <= age) returnBollean = false;
      });
    }
  });
  return returnBollean;
}

function getEmployeeByName(employeeName) {
  let retorno = {};
  employees.forEach((currentValue) => {
    const { firstName, lastName } = currentValue;
    if (firstName === employeeName || lastName === employeeName) retorno = currentValue;
  });
  return retorno;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  let retorno = false;
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  if (id === stephanieId || id === olaId || id === burlId) {
    retorno = true;
  }
  return retorno;
}

function addEmployee(id, firstName, lastName, newManagers = [], newResponsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id: `${id}`,
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    managers: newManagers,
    responsibleFor: newResponsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(especies) {
  // seu código aqui
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
