// Dica recebida na sala de estudo
const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  if (typeof ids === 'undefined') {
    return [];
  }
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((specie) => specie.age > age);
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return employees.find(({ firstName, lastName }) =>
    (firstName === employeeName || lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(input) {
  const count = {};
  species.forEach(({ name, residents }) => {
    count[name] = residents.length;
  });
  if (typeof input === 'undefined') {
    return count;
  }
  return count[input];
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return ((Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child));
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const hour = Object.keys(hours);
  const days = hour.reduce((acc, cValue) => {
    acc[cValue] = `Open from ${hours[cValue].open}am until ${hours[cValue].close - 12}pm`;
    return acc;
  }, {});
  days.Monday = 'CLOSED';
  if (dayName in days) {
    return { [dayName]: days[dayName] };
  }
  return days;
}

function getOldestFromFirstSpecies(id) {
  const responsibleFor = employees.filter((employee) => employee.id === id)
    .map((employeeMap) => employeeMap.responsibleFor);
  const firstAnimal = species.find((animal) => animal.id === responsibleFor[0][0])
    .residents.sort((a, b) => b.age - a.age)[0];
  return [firstAnimal.name, firstAnimal.sex, firstAnimal.age];
}

function increasePrices(percentage) {
  // Resolvido com a ajuda de João Franca em thread aberta no Slack
  prices.Adult = (Math.round(prices.Adult * ((percentage / 100) + 1) * 100)) / 100;
  prices.Child = (Math.round(prices.Child * ((percentage / 100) + 1) * 100)) / 100;
  prices.Senior = (Math.round(prices.Senior * ((percentage / 100) + 1) * 100)) / 100;
}

function getEmployeeCoverage(idOrName) {

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
