const { species, employees, prices, hours } = require('./data');

const locations = ['NE', 'NW', 'SE', 'SW'];

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((animal) => animal.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const currentSpecies = species.find((specie) => specie.name === animal);

  return currentSpecies.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const result = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);

  return result !== undefined ? result : {};
}

function createEmployee(personalInfo, associatedWith) {
  const [id, firstName, lastName] = Object.values(personalInfo);
  const [managers, responsibleFor] = Object.values(associatedWith);

  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return newEmployee;
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

function countAnimals(specie) {
  const currentSpecies = species.find((spc) => spc.name === specie);
  const allAnimals = {};

  species.forEach((spc) => {
    allAnimals[spc.name] = spc.residents.length;
  });

  return specie !== undefined ? currentSpecies.residents.length : allAnimals;
}

function calculateEntry(entrants = {}) {
  return Object.keys(entrants).length < 1 ? 0
    : Object.keys(entrants).map((key) => prices[key] * entrants[key])
      .reduce((result, entrys) => result + entrys);
}

function includeNames(result, options) {
  const rslt = result;
  locations.forEach((location) => {
    rslt[location] = rslt[location].map((animal) => {
      let opt = 0;
      const keysAndName = {};
      const anySex = species.find((spc) => spc.name === animal)
        .residents.map((resident) => resident.name);

      const sexFilter = species.find((spc) => spc.name === animal)
        .residents.filter((resident) => resident.sex === options.sex)
        .map((resident) => resident.name);

      opt = options.sex ? sexFilter : anySex;
      keysAndName[animal] = options.sorted === true ? opt.sort() : opt;

      return keysAndName;
    });
  });
}

function getAnimalMap(options) {
  const result = {};

  locations.forEach((location) => {
    result[location] = species.filter((specie) => (specie.location === location))
      .map((spc) => spc.name);
  });

  if (options !== undefined && options.includeNames === true) {
    includeNames(result, options);
  }

  return result;
}

function getSchedule(dayName) {
  const schedule = {};
  const getFromHours = (day) => {
    schedule[day] = day === 'Monday' ? 'CLOSED'
      : `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  };

  if (dayName !== undefined) {
    getFromHours(dayName);
  } else {
    Object.keys(hours).forEach((day) => getFromHours(day));
  }

  return schedule;
}

function getOldestFromFirstSpecies(id) {
  const speciesId = employees.find((employee) => employee.id === id)
    .responsibleFor[0];

  const speciesResidents = species.find((spc) => spc.id === speciesId).residents;

  const oldest = speciesResidents.reduce((older, resident) =>
    (resident.age > older.age ? resident : older));

  return Object.values(oldest);
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) => {
    prices[key] = Math.round((prices[key] + ((prices[key] * percentage) / 100)) * 100) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  const result = {};
  const specificPerson = employees.find((employee) =>
    employee.firstName === idOrName || employee.lastName === idOrName || employee.id === idOrName);

  const coverage = (person) => {
    const animals = person.responsibleFor.map((animal) => species.find((spc) => spc.id === animal));
    result[`${person.firstName} ${person.lastName}`] = animals.map((animal) => animal.name);
  };

  if (idOrName === undefined) {
    employees.forEach((employee) => coverage(employee));
  } else {
    coverage(specificPerson);
  }

  return result;
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
