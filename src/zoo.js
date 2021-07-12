const data = require('./data');
const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) { // (Parâmetro Dinâmico [Rest]) ...ids transforma a entrada em array variável / mais de 1 parametro
  if (!ids) return []; // retorna vazio se não entrar parametro
  return data.species.filter((specie) => ids.some((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName)
    || {};
}

function createEmployee(personalInfo, associatedWith) { // Feito na monitoria do Cajueiro
  return { ...personalInfo, ...associatedWith };
}
 
function isManager(id) {
  return !!employees.find(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  data.employees.push(employee);
}

function countAnimals(speciess = {}) {
  let animals = {}; // sem parametro retorna um objeto
  if (typeof (speciess) === 'object') {
    data.species.forEach((specie) => {
      animals[specie.name] = specie.residents.length;
    });
  } else {
    const animalCategory = data.species.find((specie) => specie.name === speciess);
    animals = animalCategory.residents.length;
  }
  return animals;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return ((Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child));
}

function getAnimalMap(options) {
  
}

function getSchedule(dayName) { // Feito na monitoria do Cajueiro
  const hour = Object.keys(hours);
  const days = hour.reduce((acc, currValue) => {
    acc[currValue] = `Open from ${hours[currValue].open}am until ${hours[currValue].close - 12}pm`;
    return acc;
  }, {});
  days.Monday = 'CLOSED';
  if (dayName in days) {
    return { [dayName]: days[dayName] };
  }
  return days;
}

function getOldestFromFirstSpecies(employeeId) {
  const speciesId = employees.find((employee) => employee.id === employeeId)
    .responsibleFor[0];

  const animalResident = species.find((spc) => spc.id === speciesId).residents;

  const oldest = animalResident.reduce((older, resident) =>
    (resident.age > older.age ? resident : older));

  return Object.values(oldest);
  }

function increasePrices(percentage) { // Feito na monitoria do Cajueiro
  prices.Adult = (Math.round((prices.Adult * (1 + (percentage / 100))) * 100)) / 100;
  prices.Child = (Math.round((prices.Child * (1 + (percentage / 100))) * 100)) / 100;
  prices.Senior = (Math.round((prices.Senior * (1 + (percentage / 100))) * 100)) / 100;
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
