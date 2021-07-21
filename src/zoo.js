const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.reduce((array, targetId) => [...array, data.species.find(({ id }) => targetId === id)], []);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const filteredAnimals = data.species.find(({ name }) => (name === animal));
  return filteredAnimals.residents.every(({ age: AGE }) => AGE >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const findEmployeeByName = ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName;
  const employee = data.employees.find(findEmployeeByName);
  return (employee !== undefined ? employee : {});
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.reduce((managerState, employee) => employee.managers.some((managerId) => managerId === id) ? true : managerState, false);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  console.log(newEmployee);
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  // seu código aqui
  if (species !== undefined) {
    const filterdSpecie = data.species.find(({ name }) => (name === species));
    return filterdSpecie.residents.length;
  }
  const arrayCountAnimals = data.species.map(({ name, residents }) => [name, residents.length]);
  return Object.fromEntries(arrayCountAnimals);
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  // seu código aqui
  return (Adult * 49.99 + Child * 20.99 + Senior * 24.99);
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
