const { species, employees, data, prices } = require('./data');
// const data = require('./data');

function getSpeciesByIds(...ids) {
  const newArray = [];
  ids.forEach((id) => {
    const speciesFilter = species.filter((specie) => specie.id === id);
    newArray.push(...speciesFilter);
  });
  return newArray;
}

function getAnimalsOlderThan(animal, age) {
  const speciesFind = species.find((especie) => especie.name === animal);
  const residentsForEach = speciesFind.residents.every((resident) => {
    if (resident.age > age) {
      return true;
    }
    return false;
  });
  return residentsForEach;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return ({ ...personalInfo, ...associatedWith });
}

function isManager(id) {
  return employees.some((employee, index) => id === employee.managers[index]);
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

function countAnimals(animals) {
  if (!animals) {
    const newSpecies = {};
    species.forEach(({ name, residents }) => { newSpecies[name] = residents.length; });
    return newSpecies;
  }
  return (species.find((specie) => animals === specie.name)).residents.length;
}

function calculateEntry({ Adult = 0, Senior = 0, Child = 0 } = 0) {
  const priceAdult = prices.Adult * Adult;
  const priceSenior = prices.Senior * Senior;
  const priceChild = prices.Child * Child;
  return priceAdult + priceSenior + priceChild;
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
