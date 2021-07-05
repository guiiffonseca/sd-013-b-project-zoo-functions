const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const species = data.species.filter((specie) => ids.some((id) => id === specie.id));
  return species;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.species.find((specie) => specie.name === animal).residents;
  const olderThanAge = animals.every((element) => element.age >= age);
  return olderThanAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  let employee;

  if (employeeName === undefined) {
    employee = {};
  } else {
    employee = data.employees.find(
      (person) => person.firstName === employeeName || person.lastName === employeeName,
    );
  }

  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const employee = {
    ...personalInfo,
    ...associatedWith,
  };

  return employee;
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((person) => person.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  data.employees.push(employee);
}

function countAnimals(species = {}) {
  // seu código aqui
  let animals = {};
  if (typeof (species) === 'object') {
    data.species.forEach((specie) => {
      animals[specie.name] = specie.residents.length;
    });
  } else {
    const animalCategory = data.species.find((specie) => specie.name === species);
    animals = animalCategory.residents.length;
  }
  return animals;
}

function calculateEntry(entrants = {}) {
  // Retorna 0 se nenhum argumento for passado
  // Retorna 0 se um objeto vazio for passado
  // seu código aqui
  let entry;
  if (Object.keys(entrants).length === 0) {
    entry = 0;
  } else {
    const entryFunc = ({ Adult = 0, Child = 0, Senior = 0 }) => {
      const { prices } = data;
      return prices.Adult * Adult + prices.Child * Child + prices.Senior * Senior;
    };
    entry = entryFunc(entrants);
  }
  return entry;
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
