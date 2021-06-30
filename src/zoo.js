const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length >= 1) {
    return ids.map((id) => data.species.find((animal) => animal.id === id));
  }
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animalName) => animal === animalName.name).residents
    .every((animalAge) => animalAge.age >= age);
}

function getEmployeeByName(findName) {
  if (findName === undefined) {
    return {};
  }
  return data.employees.find((name) => findName === name.firstName || findName === name.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return data.employees.some((idM) => idM.managers.find((idT) => idT === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specie) {
  if (specie === undefined) {
    const animals = data.species.reduce((key, value) => {
      key[value.name] = value.residents.length;
      return key;
    }, {});
    return animals;
  }
  return data.species.find((animal) => animal.name === specie).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  let adult = Object.entries(entrants).find((arr) => arr[0] === 'Adult');
  adult === undefined ? adult = 0 : adult = data.prices.Adult * adult[1];

  let child = Object.entries(entrants).find((arr) => arr[0] === 'Child');
  child === undefined ? child = 0 : child = data.prices.Child * child[1];

  let senior = Object.entries(entrants).find((arr) => arr[0] === 'Senior');
  senior === undefined ? senior = 0 : senior = data.prices.Senior * senior[1];

  const total = adult + child + senior;
  return total;
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
