// const data = require('./data');
const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const takeAnimals = species.find((specie) => specie.name === animal);
  return takeAnimals.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return employees.find(
      (emp) => emp.firstName === employeeName || emp.lastName === employeeName,
    );
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const managerFinder = (employee) => employee.managers.includes(id);
  return employees.some(managerFinder);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return employees.push(employee);
}

function countAnimals(nameSpecies) {
  if (!nameSpecies) {
    return species.reduce((acc, animal) => {
      acc[animal.name] = animal.residents.length;
      return acc;
    }, {});
  }
  return species.find((specie) => specie.name === nameSpecies).residents.length;
}

function calculateEntry(entrants = 0) {
  const { Adult: adultPrice, Child: childPrice, Senior: seniorPrice } = prices;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const total = (Adult * adultPrice) + (Child * childPrice) + (Senior * seniorPrice);
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const days = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return days;
  return { [dayName]: days[dayName] };
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
