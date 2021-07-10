const { species, employees, hours, prices } = require('./data');
const data = require('./data');

const managersIds = [
  '9e7d4524-363c-416a-8759-8aa7e50c0992',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  '0e7b460e-acf4-4e17-bcb3-ee472265db83',
];

function getSpeciesByIds(...ids) {
  return ids.map((specieId) =>
    species.find((specie) => specie.id === specieId));
}

function getAnimalsOlderThan(animal, age) {
  return !!species
    .find((anm) => anm.name === animal)
    .residents.every((anm) => anm.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(
    (employee) =>
      employeeName === employee.firstName || employeeName === employee.lastName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  // Consultado em: https://stackoverflow.com/questions/39121695/merge-two-objects-with-es6
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return !!managersIds.find((managerId) => managerId === id);
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specie) {
  // Consultado em: https://stackoverflow.com/questions/19874555/how-do-i-convert-array-of-objects-into-one-object-in-javascript
  if (specie === undefined) {
    return species.reduce(
      (obj, animal) => ({ ...obj, [animal.name]: animal.residents.length }),
      {},
    );
  }
  return species.find((animal) => animal.name === specie).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (entrants === {}) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * 49.99 + Child * 20.99 + Senior * 24.99;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const hoursDay = Object.keys(hours);
  const findDayIndex = hoursDay.findIndex((day) => day === dayName);
  const findDay = hoursDay.find((_, index) => index === findDayIndex);
  if (dayName === undefined) {
    return {
      Tuesday: 'Open from 8am until 6pm',
      Wednesday: 'Open from 8am until 6pm',
      Thursday: 'Open from 10am until 8pm',
      Friday: 'Open from 10am until 8pm',
      Saturday: 'Open from 8am until 10pm',
      Sunday: 'Open from 8am until 8pm',
      Monday: 'CLOSED',
    };
  }
  if (dayName === 'Monday') return { [dayName]: 'CLOSED' };
  return {
    [dayName]: `Open from ${hours[(findDay)].open}am until ${(hours[(findDay)].close - 12)}pm`,
  };
}

function getOldestFromFirstSpecies(id) {
  const findSpecie = employees
    .find((employee) => employee.id === id).responsibleFor
    .find((specie) => specie[0]);
  const findAnimal = species
    .find((animal) => animal.id === findSpecie)
    .residents.sort((preAge, currAge) => currAge.age - preAge.age)
    .reduce((preAnm, currAnm) => ((preAnm.age > currAnm.age) ? preAnm : currAnm));
  const { name, sex, age } = findAnimal;
  return [name, sex, age];
}

const calculateNewPrice = (value, percentage) => (Math
  .ceil((value + value * (percentage / 100)) * 100) / 100);

function increasePrices(percentage) {
  Object.entries(prices).forEach(([key, value]) => {
    prices[key] = calculateNewPrice(value, percentage);
  });
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
