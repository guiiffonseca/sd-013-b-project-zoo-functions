const { species, employees, prices, hours } = require('./data');

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
    let tempResidents = [...residents];

    if (sex) tempResidents = filterBySex(tempResidents, sex);
    if (sorted) tempResidents = sortByName(tempResidents);

    animals[location].push({
      [name]: tempResidents.map((animal) => animal.name),
    });
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

// getSchedule
function convertTime(time) {
  if (time === 0) return 0;

  const tempTime = time % 12 || 12;

  if (time < 12 || time === 24) return `${tempTime}am`;

  return `${tempTime}pm`;
}

function getSchedule(dayName) {
  const formattedSchedule = {};

  Object.keys(hours).forEach((day) => {
    const openTime = convertTime(hours[day].open);
    const closeTime = convertTime(hours[day].close);

    if (openTime && closeTime) {
      formattedSchedule[day] = `Open from ${openTime} until ${closeTime}`;
    } else {
      formattedSchedule[day] = 'CLOSED';
    }
  });

  if (!dayName) return formattedSchedule;

  return { [dayName]: formattedSchedule[dayName] };
}

// getOldestFromFirstSpecies
function findOldest(animals) {
  let oldest = { age: -Infinity };

  animals.forEach((animal) => {
    if (animal.age > oldest.age) {
      oldest = animal;
    }
  });

  return oldest;
}

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((person) => person.id === id);
  const firstId = employee.responsibleFor[0];
  const firstSpecies = species.find((kind) => kind.id === firstId);

  return Object.values(findOldest(firstSpecies.residents));
}

// increasePrices
function calculateValue(oldValue, percentage) {
  const newValue = oldValue + oldValue * (percentage / 100);
  return Math.ceil(newValue * 100) / 100;
}

function increasePrices(percentage) {
  prices.Adult = calculateValue(prices.Adult, percentage);
  prices.Senior = calculateValue(prices.Senior, percentage);
  prices.Child = calculateValue(prices.Child, percentage);
}

// getEmployeeCoverage
function getAssignedAnimals(animals) {
  return animals.map(
    (animalId) => species.find(({ id }) => id === animalId).name,
  );
}

function findByIdOrName({ id, firstName, lastName }, idOrName) {
  return id === idOrName || firstName === idOrName || lastName === idOrName;
}

function getEmployeeCoverage(idOrName) {
  if (idOrName) {
    const { firstName, lastName, responsibleFor } = employees
      .find((employee) => findByIdOrName(employee, idOrName));

    return { [`${firstName} ${lastName}`]: getAssignedAnimals(responsibleFor) };
  }

  const assignedAnimals = {};

  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    const key = `${firstName} ${lastName}`;
    assignedAnimals[key] = getAssignedAnimals(responsibleFor);
  });

  return assignedAnimals;
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
