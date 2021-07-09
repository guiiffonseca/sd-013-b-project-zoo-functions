const data = require('./data');
const { hours } = require('./data');

function getSpeciesByIds(...ids) {
  const speciesById = ids.map((id) => data.species.find((specie) => specie.id === id));
  return speciesById;
}
function getAnimalsOlderThan(animal, age) {
  const getAnimals = data.species.find((specie) => specie.name === animal);
  const olders = getAnimals.residents.every((ageAnimal) => ageAnimal.age > age);
  return olders;
}

function getEmployeeByName(employeeName) {
  const employeesNames = data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  if (employeeName === undefined) {
    return {};
  }
  return employeesNames;
}
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const managers = data.employees.map((managerList) => managerList.managers).flat();
  return managers.some((manager) => manager === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employeeAdd = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(employeeAdd);
}

function countAnimals(species) {
  if (species === undefined) {
    const counts = {};
    data.species.forEach((array) => {
      counts[array.name] = array.residents.length;
    });
    return counts;
  }
  if (typeof (species) === 'string') {
    const check = data.species.find((count) => count.name === species);
    const countSpecie = check.residents.length;
    return countSpecie;
  }
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (data.prices.Adult * Adult) + (data.prices.Child * Child) + (data.prices.Senior * Senior);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const day = {};
  const days = {
    Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
    Wednesday: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
    Thursday: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
    Friday: `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`,
    Saturday: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
    Sunday: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };
  if (dayName === undefined) { return days; }
  if (typeof dayName === 'string') {
    Object.keys(days).forEach((select) => {
      if (dayName === select) { day[dayName] = days[select]; }
    });
  }
  return day;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((person) => {
    const value = data.prices[person] + ((percentage / 100) * data.prices[person]);
    data.prices[person] = Math.ceil(value * 100) / 100;
  });
  return data.prices;
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
