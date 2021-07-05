const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((inputedId) => result.push(species.find(({ id }) => id === inputedId)));
  return result;
}

function getAnimalsOlderThan(animal, number) {
  return ((species.find(({ name }) => animal === name))
    .residents.every(({ age }) => age > number));
}

function getEmployeeByName(name) {
  if (name) {
    return employees.find(({ firstName, lastName }) => name === firstName || lastName === name);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(number) {
  return employees.some(({ managers }) => managers.some((element) => element === number));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(animal) {
  if (animal) {
    return species.find(({ name }) => animal === name).residents.length;
  }
  const result = {};
  species.forEach(({ name, residents }) => {
    result[name] = residents.length;
  });
  return result;
}

function calculateEntry(values) {
  if (values === undefined) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = values;
  const priceAdult = Adult * (prices.Adult);
  const priceChild = Child * (prices.Child);
  const priceSenior = Senior * (prices.Senior);
  return (priceAdult + priceChild + priceSenior);
}

function animalsByLocation() {
  const result = {};
  species.forEach(({ location, name }) => {
    if (result[location]) {
      result[location].push(name);
    } else {
      result[location] = [name];
    }
  });
  return result;
}

function animalsWithNames() {
  const animals = species.reduce((acc, current) => {
    if (acc[current.location]) {
      acc[current.location].push({ [current.name]:
        current.residents.map((element) => element.name) });
    } else {
      acc[current.location] = [{ [current.name]:
        current.residents.map((element) => element.name) }];
    }
    return acc;
  }, {});

  return animals;
}

function animalsSortedByName() {
  const animals = species.reduce((acc, current) => {
    if (acc[current.location]) {
      acc[current.location].push({ [current.name]:
        current.residents.map((element) => element.name).sort() });
    } else {
      acc[current.location] = [{ [current.name]:
        current.residents.map((element) => element.name).sort() }];
    }
    return acc;
  }, {});

  return animals;
}

function animalsSortedBySex(currentSex) {
  const animals = species.reduce((acc, current) => {
    if (acc[current.location]) {
      acc[current.location].push({ [current.name]:
        current.residents.filter((element) =>
          element.sex === currentSex).map((element) => element.name).sort() });
    } else {
      acc[current.location] = [{ [current.name]:
        current.residents.filter((element) =>
          element.sex === currentSex).map((element) => element.name).sort() }];
    }
    return acc;
  }, {});

  return animals;
}

function getAnimalMap(options) {
  let result;
  if (options === undefined) {
    return animalsByLocation();
  }
  const { includeNames: name, sorted, sex } = options;
  if (name) {
    result = animalsWithNames();
  }
  if (sorted) {
    result = animalsSortedByName();
  }
  if (sex) {
    result = animalsSortedBySex(sex);
  }

  return result;
}
const options = { includeNames: true, sex: 'female', sorted: true };

console.dir(getAnimalMap(options), { depth: null });

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
