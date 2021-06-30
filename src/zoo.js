const data = require('./data');

function getSpeciesByIds(...idsArr) {
  if (idsArr.length === 0) return [];
  let speciesArr = [];
  data.species.forEach((specie) => {
    idsArr.forEach((id) => {
      if (specie.id === id) {
        speciesArr = [...speciesArr, specie];
      }
    });
  });

  return speciesArr;
}

function getAnimalsOlderThan(animal, age) {
  const mySpecie = data.species.find((specie) => specie.name === animal);

  let allOlder = true;

  mySpecie.residents.forEach((resident) => {
    if (resident.age < age) allOlder = false;
  });

  return allOlder;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
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
