const data = require('./data');

function getSpeciesByIds(...ids) {
  const [firstId, secondId] = ids;
  const specieOfFirstId = data.species.filter((specie) => specie.id === firstId);
  const specieOfSecondId = data.species.filter((specie) => specie.id === secondId);
  const speciesByIds = [...specieOfFirstId, ...specieOfSecondId];
  return speciesByIds;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getAnimal = data.species.find((Animal) => Animal.name === animal);
  return getAnimal.residents.every((foundAnimal) => foundAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName !== 'string') {
    return {};
  }
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui.
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const newEmployee = (employeeId,
    employeeIdFirstName, employeeIdlastName,
    employeeIdmanagers, employeeIdresponsibleFor) => ({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return newEmployee(id, firstName, lastName, managers, responsibleFor);
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
