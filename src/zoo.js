const data = require('./data');
const managerList = require('./managerList');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return ids.map((id) => species.filter((specimen) => specimen.id === id)[0]);
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  // todos os animais daquela espécie possui a idade maior ou igual a age
  const animalSpecie = species.filter(
    (specimen) => specimen.name === animal,
  )[0];

  return animalSpecie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const { employees } = data;

  if (!employeeName) return {};

  return employees.filter(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  )[0];
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return managerList.some((managerId) => managerId === id);
}

function addEmployee(
  id = '',
  firstName = '',
  lastName = '',
  managers = [],
  responsibleFor = [],
) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  const speciesCount = {};

  data.species.forEach((animals) => {
    speciesCount[animals.name] = animals.residents.length;
  });

  if (!species) return speciesCount;

  return speciesCount[species];
}

function calculateEntry(entrants) {
  const { prices } = data;

  if (!entrants || entrants === {}) return 0;

  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
}

function getAnimalMap(options = {}) {}

function getSchedule(dayName) {
  const { hours } = data;
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    schedule[day] = day === 'Monday'
      ? 'CLOSED'
      : `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  });

  if (!dayName) return schedule;

  const output = [[dayName, schedule[dayName]]];
  return Object.fromEntries(output);
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
