// Usei como referência o projeto do Rafael Nery Machado para compactar algumas funcoes.

const { species, employees, hours, prices } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((Animal) => Animal.name === animal)
    .residents.every((foundAnimal) => foundAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName) || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return !!employees.find(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(Specie) {
  const animalsQtd = {};
  species.forEach((animal) => { animalsQtd[animal.name] = animal.residents.length; });
  if (!Specie) {
    return animalsQtd;
  }
  return animalsQtd[Specie];
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (Adult * prices.Adult + Senior * prices.Senior + Child * prices.Child);
}

function getAnimalMap(options) {
  //
}

function formatDays() {
  const formattedDays = { };
  const daysArr = Object.keys(hours);
  daysArr.forEach((day) => {
    const openHour = hours[day].open;
    const closeHour = hours[day].close;
    if (openHour === 0 && closeHour === 0) {
      formattedDays[day] = 'CLOSED';
    } else {
      formattedDays[day] = `Open from ${openHour}am until ${(closeHour > 12) ? closeHour - 12
        : closeHour}pm`;
    }
  });
  return formattedDays;
}

function getSchedule(dayName) {
  const newSchedule = formatDays();
  if (dayName === undefined) return newSchedule;
  return { [dayName]: newSchedule[dayName] };
}

function getOldestFromFirstSpecies(Id) {
  const employee = employees.find(({ id }) => id.includes(Id));
  const targetAnimalId = employee.responsibleFor[0];
  const targetAnimal = species.find(({ id }) => id.includes(targetAnimalId));
  const oldestTargetAnimal = targetAnimal.residents
    .reduce((acc, value) => {
      if (value.age > acc.age) {
        return value;
      } return acc;
    });
  return Object.values(oldestTargetAnimal);
}

// https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places
function increasePrices(percentage) {
  prices.Adult = parseFloat((Math.ceil(prices.Adult * (100 + percentage)) / 100).toFixed(2));
  prices.Senior = parseFloat((Math.ceil(prices.Senior * (100 + percentage)) / 100).toFixed(2));
  prices.Child = parseFloat((Math.ceil(prices.Child * (100 + percentage)) / 100).toFixed(2));
  return prices;
}

function getEmployee(idOrName) {
  return employees.find(({ firstName, lastName, id }) =>
    firstName === idOrName || lastName === idOrName || id === idOrName);
}

function getAnimalsOfInterest(animalsOfAEmployee) {
  return animalsOfAEmployee.map((animalId) => species.find(({ id }) => animalId === id).name);
}
// Referencia: Projeto do colega Lucas Caribe
function getEmployeeCoverage(idOrName) {
  const coverage = {};
  if (!idOrName) {
    employees.forEach(({ firstName, lastName, responsibleFor }) => {
      const employeeFullName = `${firstName} ${lastName}`;
      coverage[employeeFullName] = getAnimalsOfInterest(responsibleFor);
    }); return coverage;
  }
  const employee = getEmployee(idOrName);
  const { firstName, lastName, responsibleFor } = employee;
  const employeeFullName = `${firstName} ${lastName}`;
  coverage[employeeFullName] = getAnimalsOfInterest(responsibleFor);
  return coverage;
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
