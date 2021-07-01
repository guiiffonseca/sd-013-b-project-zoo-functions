const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const arrayOfSpecies = [];
  ids.forEach((id, index, array) => {
    const specie = data.species.filter((tipo) => tipo.id === id);
    arrayOfSpecies.push(...specie);
  });
  return arrayOfSpecies;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const especies = data.species;
  const targetSpecie = especies.find((especie) => especie.name === animal);
  const { residents } = targetSpecie;
  return residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  let employeeObj = {};
  const { employees } = data;
  employees.find((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      employeeObj = employee;
      return employeeObj;
    }
    return employeeObj;
  });
  return employeeObj;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
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
