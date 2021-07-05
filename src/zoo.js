const data = require('./data');

const { species } = data;

const getSpeciesByIds = (...ids) => species.filter((specie, index) => specie.id === ids[index]);

// console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((specie) => specie.name === animal);
  return animals.residents.every((resident) => resident.age >= age);
}

const { employees } = data;
function getEmployeeByName(employeeName) {
  return employees.find((e) => e.firstName === employeeName || e.lastName === employeeName) || {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

const isManager = (id) => employees.some((emp, index) => Object.values(emp.managers)[index] === id);

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
  return employees;
}

function countAnimals(speciesParam) {
  if (speciesParam !== undefined) {
    return species.find((specie) => specie.name === speciesParam).residents.length;
  }
  // const allAnimals = species.forEach((specie) => ({ [specie.name]: specie.residents.length }));
  // return allAnimals;
  const allAnimals = {
    lions: species.find((specie) => specie.name === 'lions').residents.length,
    tigers: species.find((specie) => specie.name === 'tigers').residents.length,
    bears: species.find((specie) => specie.name === 'bears').residents.length,
    penguins: species.find((specie) => specie.name === 'penguins').residents.length,
    otters: species.find((specie) => specie.name === 'otters').residents.length,
    frogs: species.find((specie) => specie.name === 'frogs').residents.length,
    snakes: species.find((specie) => specie.name === 'snakes').residents.length,
    elephants: species.find((specie) => specie.name === 'elephants').residents.length,
    giraffes: species.find((specie) => specie.name === 'giraffes').residents.length,
  };

  return allAnimals;
}
const { prices } = data;
// prices: { Adult: 49.99, Senior: 24.99, Child: 20.99 }
function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined) return 0;
  const { Adult, Senior, Child } = entrants;
  const quantiesOfEnt = [Adult, Senior, Child];
  const valuesPrices = Object.values(prices);

  const eachPrice = quantiesOfEnt.map((quanty, i) => ((quanty > 0 ? quanty * valuesPrices[i] : 0)));
  const totalPrice = eachPrice.reduce(((acc, curr) => acc + curr));

  return totalPrice || 0;
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
