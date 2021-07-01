const { species, employees } = require('./data');

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

console.log(countAnimals('lions'));

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
