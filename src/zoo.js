const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, age) {
  return species.some((specie) => specie.name === animal && specie.residents.every(
    (resident) => resident.age > age,
  ));
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employee) => employeeName.includes(employee.firstName)
    || employeeName.includes(employee.lastName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => id.includes(employee.id)
    && employee.firstName.includes('Burl'));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(animal) {
  if (animal) {
    return species.find((specie) => specie.name === animal).residents.length;
  }

  return species.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.residents.length;
    return accumulator;
  }, {});
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const schedule = {};

  function getFromHours(day) {
    schedule[day] = day === 'Monday' ? 'CLOSED'
      : `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  }

  if (dayName) {
    getFromHours(dayName);
  } else {
    Object.keys(hours).forEach((day) => getFromHours(day));
  }

  return schedule;
}

function getOldestFromFirstSpecies(id) {
  const speciesId = employees.find((employee) => employee.id === id).responsibleFor[0];

  const speciesResidents = species.find((specie) => specie.id === speciesId).residents;

  const oldest = speciesResidents.reduce((older, resident) =>
    (resident.age > older.age ? resident : older));

  return Object.values(oldest);
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
