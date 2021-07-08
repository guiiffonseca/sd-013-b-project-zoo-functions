const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const speciesById = [];
  ids.forEach((id) => {
    const matchSpecies = species.filter((specie) => specie.id === id);
    speciesById.push(...matchSpecies);
  });
  return speciesById;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const ages = species.find((specie) => specie.name === animal);
  const anyOlderThan = ages.residents.every((olders) => olders.age >= age);
  return anyOlderThan;
}

function getEmployeeByName(name) {
  // seu código aqui
  return employees.find(({ firstName, lastName }) => firstName === name || lastName === name) || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const employeeById = employees.some((employee) => employee.managers.includes(id));
  return employeeById;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciess) {
  // seu código aqui
  const numberOfAnimals = {};
  if (speciess) {
    const specie = species.find(({ name }) => name === speciess);
    return specie.residents.length;
  }
  species.forEach((animal) => {
    numberOfAnimals[animal.name] = animal.residents.length;
  });
  return numberOfAnimals;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined) return 0;
  const entries = Object.entries(entrants);
  return entries.reduce(
    (accumulator, [key, value]) => accumulator + prices[key] * value,
    0,
  );
}

// const emptyLocation = {
//   NE: [],
//   NW: [],
//   SE: [],
//   SW: [],
// };

// function emptyOptions() {
//   const animalsByLocation = {
//     NE: [],
//     NW: [],
//     SE: [],
//     SW: [],
//   };
//   species.forEach(({ name, location }) => animalsByLocation[location].push(name));
//   return animalsByLocation;
// }

// function includedNames() {
//   const namedAnimals = {
//     NE: [],
//     NW: [],
//     SE: [],
//     SW: [],
//   };
//   species.forEach(({ name, location, residents }) => namedAnimals[location]
//     .push({ [name]: [...residents
//       .map((resident) => resident.name)] }));
//   return namedAnimals;
// }

function getAnimalMap(options) {
  // seu código aqui
  // if (!options || !options.includeNames) return emptyOptions();
  // if (options.includeNames === true) return includedNames();
}

function getSchedule(dayName) {
  // seu código aqui
  const daysShedule = {};

  Object.keys(hours).forEach((key) => {
    if (hours[key].open !== 0) {
      daysShedule[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
    } else {
      daysShedule[key] = 'CLOSED';
    }
  });

  if (dayName === undefined) return daysShedule;
  const dayShedule = { [dayName]: daysShedule[dayName] };
  return dayShedule;
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
