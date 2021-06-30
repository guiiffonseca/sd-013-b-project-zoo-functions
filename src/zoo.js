const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    return ids.map((idsIndex) => data.species.find((animal) => animal.id === idsIndex));
  }
  if (ids.length > 1) {
    return ids.map((idsIndex) => data.species.find((animal) => animal.id === idsIndex));
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
    return {
      lions: data.species.find((lion) => lion.name === 'lions').residents.length,
      tigers: data.species.find((tiger) => tiger.name === 'tigers').residents.length,
      bears: data.species.find((bear) => bear.name === 'bears').residents.length,
      penguins: data.species.find((penguin) => penguin.name === 'penguins').residents.length,
      otters: data.species.find((otter) => otter.name === 'otters').residents.length,
      frogs: data.species.find((frog) => frog.name === 'frogs').residents.length,
      snakes: data.species.find((snake) => snake.name === 'snakes').residents.length,
      elephants: data.species.find((elephant) => elephant.name === 'elephants').residents.length,
      giraffes: data.species.find((giraffe) => giraffe.name === 'giraffes').residents.length,
    };
  }
  return data.species.find((animal) => animal.name === specie).residents.length;
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
