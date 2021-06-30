const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  const totalSpecies = [];

  ids.forEach((searchId) => {
    const foundSpecies = species.find(({ id }) => id === searchId);
    totalSpecies.push(foundSpecies);
  });

  return totalSpecies;
}

function getAnimalsOlderThan(speciesName, age) {
  const { residents } = species.find(({ name }) => name === speciesName);

  return residents.every((animal) => animal.age >= age);
}

function getEmployeeByName(name) {
  const employee = employees.find(
    ({ firstName, lastName }) => firstName === name || lastName === name,
  );

  return employee || {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function checkManager(managers, id) {
  return managers.some((manager) => manager === id);
}

function isManager(id) {
  return employees.some(({ managers }) => checkManager(managers, id));
}

function addEmployee(id, firstName, lastName, mngrs = [], respFor = []) {
  employees.push(
    createEmployee(
      { id, firstName, lastName },
      { managers: mngrs, responsibleFor: respFor },
    ),
  );
}

function countAnimals(speciesName) {
  if (speciesName) {
    const foundSpecies = species.find(({ name }) => name === speciesName);

    return foundSpecies.residents.length;
  }

  const animalCount = {};

  species.forEach(({ name, residents }) => {
    animalCount[name] = residents.length;
  });

  return animalCount;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;

  return Object.entries(entrants).reduce(
    (acc, [key, value]) => acc + prices[key] * value,
    0,
  );
}

// animalMap
function sortByName(residents) {
  return residents.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}

function filterBySex(residents, sexSearch) {
  return residents.filter(({ sex }) => sex === sexSearch);
}

function includeNames({ animals, sorted, sex }) {
  species.forEach(({ name, location, residents }) => {
    const animalGroup = {};
    let tempResidents = [...residents];

    if (sex) tempResidents = filterBySex(tempResidents, sex);
    if (sorted) tempResidents = sortByName(tempResidents);

    animalGroup[name] = tempResidents.map((animal) => animal.name);

    animals[location].push(animalGroup);
  });
}

function getAnimalMap(options) {
  const animals = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  if (!options || !options.includeNames) {
    species.forEach(({ name, location }) => animals[location].push(name));

    return animals;
  }

  includeNames({ animals, sorted: options.sorted, sex: options.sex });

  return animals;
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
