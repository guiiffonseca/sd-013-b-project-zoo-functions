const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((currentId) => {
    const searchSpeciesByIds = species.find(({ id }) => id === currentId);
    result.push(searchSpeciesByIds);
  });

  return result;
}

function getAnimalsOlderThan(animal, old) {
  const oldAnimals = species.find(({ name }) => name === animal);
  return oldAnimals.residents.every(({ age }) => age >= old);
}

function getEmployeeByName(employeeName) {
  const employeeToSearch = employees.find(
    (currentEmployee) =>
      currentEmployee.firstName === employeeName
      || currentEmployee.lastName === employeeName,
  );

  return employeeToSearch || {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(speciess) {
  return speciess
    ? species.find(({ name }) => name === speciess).residents.length
    : species.reduce((totalBySpecie, { name, residents }) =>
      ({ ...totalBySpecie, [name]: residents.length }),
    {});
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
