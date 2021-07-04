const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const getSpecies = [];
  ids.forEach((id) => {
    getSpecies.push(data.species.find((specimen) => specimen.id === id));
  });
  return getSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const selectedAnimal = data.species.find((specimen) => specimen.name === animal);
  return selectedAnimal.residents.every((specimenAge) => specimenAge.age >= age);
}

function getEmployeeByName(employeeName) {
  const emList = employees;
  if (employeeName === undefined) {
    return {};
  }
  return emList.find((emp) => (emp.firstName === employeeName || emp.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    return data.species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
  }
  return data.species.find((specimen) => specimen.name === species).residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  const price = data.prices;
  const totalValue = (Adult * price.Adult) + (Child * price.Child) + (Senior * price.Senior);
  return totalValue;
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
