const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const checkDatabase = (parameter) => (
    species.find((speciesElement) => (speciesElement.id === parameter)));

  return ids.reduce((acc, curr) => (acc.concat(checkDatabase(curr))), []);
}

function getAnimalsOlderThan(animal, age) {
  const speciesToCheck = species.find((animalType) => animalType.name === animal);
  return speciesToCheck.residents.every((element) => (element.age > age));
}

function getEmployeeByName(employeeName) {
  const employeeData = employees.filter((elem) => (
    elem.lastName === employeeName || elem.firstName === employeeName));
  return (employeeData[0] === undefined) ? {} : employeeData[0];
}

function createEmployee(personalInfo, associatedWith) {
  const employeeObject = { id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return employeeObject;
}

function isManager(id) {
  let allManagers = employees.map((employee) => employee.managers);
  allManagers = allManagers.reduce((acc, curr) => acc.concat(curr));
  allManagers = allManagers.filter((elem, index) => (allManagers.indexOf(elem) === index));
  return allManagers.some((managerId) => managerId === id);
}

function addEmployee(id, firstName, lastName, managersParameter, responsibleForParameter) {
  const personalInfo = {
    id,
    firstName,
    lastName,
  };
  const associatedWith = {
    managers: (managersParameter === undefined) ? [] : managersParameter,
    responsibleFor: (responsibleForParameter === undefined) ? [] : responsibleForParameter,
  };
  employees.push(createEmployee(personalInfo, associatedWith));
}

function countAnimals(speciesToCount) {
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
