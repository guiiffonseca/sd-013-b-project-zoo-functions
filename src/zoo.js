const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const array = [];
  ids.forEach((id) => array.push(species.find((specie) => specie.id === id)));
  return array;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = species.find((especie) => animal === especie.name);
  const trueOrFalse = animals.residents.every((especie) => especie.age >= age);
  return trueOrFalse;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((emp) => employeeName === emp.firstName || employeeName === emp.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return employees.find((employee) => employee.id)
    .managers.some((manager) => manager === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  // seu código aqui
  const animals = {};
  species.forEach((animal) => {
    animals[animal.name] = animal.residents.length;
  });
  if (specie === undefined) {
    return animals;
  }
  return animals[specie];
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  // seu código aqui
  return prices.Adult * Adult + prices.Child * Child + prices.Senior * Senior;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

// Lucas Caribé me ajudou!
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstAnimal = employees
    .find(({ id: ids }) => ids === id)
    .responsibleFor[0];
  const oldAnimal = species
    .find(({ id: iD }) => iD === firstAnimal).residents
    .reduce((old, resit) => {
      if (resit.age > old.age) {
        return resit;
      }
      return old;
    });
  return Object.values(oldAnimal);
}

function increasePrices(percentage) {
  // seu código aqui
  prices.Adult = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  prices.Child = Math.ceil(prices.Child * (100 + percentage)) / 100;
  prices.Senior = Math.ceil(prices.Senior * (100 + percentage)) / 100;
}

const getSpeciesNamesInOrder = (...ids) => {
  const { species: speciees } = data;
  return ids.map((id) => speciees.find((specie) => specie.id === id).name);
};

function getEmployeeCoverage(x) {
  // seu código aqui
  return employees
    .filter(({ id, firstName, lastName }) => !x || x === id || x === firstName || x === lastName)
    .reduce((coverage, { firstName, lastName, responsibleFor }) => ({
      ...coverage,
      [`${firstName} ${lastName}`]: getSpeciesNamesInOrder(...responsibleFor),
    }), {});
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
