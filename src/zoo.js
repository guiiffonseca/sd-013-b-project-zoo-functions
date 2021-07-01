const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, ageMin) {
  // seu código aqui
  return species.find(({ name }) => name === animal)
    .residents.every(({ age }) => age >= ageMin);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find(({ firstName, lastName }) =>
    (employeeName === firstName || employeeName === lastName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// const callbackCount = (acumulador, elemento) => {
//   const momento = acumulador;
//   momento[elemento.name] = elemento.residents.length;
//   return momento;
// };

function countAnimals(speciesZoo) {
  // seu código aqui
  if (!speciesZoo) {
    return species.reduce((acumulador, { name, residents }) => {
      const momento = acumulador;
      momento[name] = residents.length;
      return momento;
    }, {});
  }
  return species.find(({ name }) => name === speciesZoo).residents.length;
}

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
