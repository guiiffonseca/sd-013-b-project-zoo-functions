const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) return [];
  const array = [];
  ids.forEach((element) => {
    array.push(species.find((string) => string.id === element));
  });
  return array;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  let allAnimalsOlderThan = data.species.find((element2) => element2.name === animal).residents;
  allAnimalsOlderThan = allAnimalsOlderThan.every((element3) => element3.age > age);
  return allAnimalsOlderThan;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const obj = data.employees.find(
    (element4) => element4.firstName === employeeName || element4.lastName === employeeName,
  );
  return obj;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((element5) => {
    const employeeIsManager = element5.managers.some((element6) => element6 === id);
    return employeeIsManager === true;
  });
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(animal) {
  // seu código aqui
  let obj = {};
  if (!animal) {
    species.forEach((element7) => {
      obj[element7.name] = element7.residents.length;
    });
  }
  if (animal) {
    obj = species.find((element8) => element8.name === animal).residents.length;
  }
  return obj;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const price = Object.keys(entrants).reduce((acc, curr) => acc + entrants[curr] * prices[curr], 0);
  return price;
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
