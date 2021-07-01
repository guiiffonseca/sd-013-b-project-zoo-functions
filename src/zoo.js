const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const species = [];
  ids.forEach((id) => {
    const findSpecie = data.species.find((obj) => obj.id === id);
    species.push(findSpecie);
  });
  return species;
}

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((obj) => obj.name === animal).residents;
  let areOlder = true;
  animals.forEach((indiviual) => {
    console.log(indiviual.age);
    if (indiviual.age < age) areOlder = false;
  });
  return areOlder;
}

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const selectedEmployee = employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
  return selectedEmployee === undefined ? {} : selectedEmployee;
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
