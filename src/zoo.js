const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids === undefined) return [];
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specieSelected = species.find(({ name }) => name === animal);
  const animmalsSelected = specieSelected.residents;
  const count = animmalsSelected.filter((animmalSelected) => animmalSelected.age >= age);
  if (count.length === animmalsSelected.length) return true;
  return false;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(idParam) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(idParam));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesParam) {
  // seu código aqui
  if (!speciesParam) {
    const output = {};
    species.forEach((specie) => {
      output[specie.name] = specie.residents.length;
    });
    return output;
  }
  const specieSelected = species.find((specie) => speciesParam === specie.name);
  return specieSelected.residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeSelected = employees.find((employee) => id === employee.id);
  const idAnimal = employeeSelected.responsibleFor[0];
  const specieSelected = species.find((specie) => idAnimal === specie.id);
  let oldestAnimal = specieSelected.residents[0];
  specieSelected.residents.forEach((animal) => {
    if (animal.age > oldestAnimal.age) {
      oldestAnimal = animal;
    }
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
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
