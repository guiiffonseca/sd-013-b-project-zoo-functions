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

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  const { Adult, Senior, Child } = entrants;
  const quantiesOfEnt = [Adult, Senior, Child];
  const valuesPrices = Object.values(prices);

  const eachPrice = quantiesOfEnt.map((quanty, i) => ((quanty > 0 ? quanty * valuesPrices[i] : 0)));
  const totalPrice = eachPrice.reduce(((acc, curr) => acc + curr));

  return totalPrice || 0;
}
// const options = { includeName: true }

function getAnimalMap(options) {
  const nes = species.filter((specie) => (specie.location === 'NE'));
  const nws = species.filter((specie) => (specie.location === 'NW'));
  const ses = species.filter((specie) => (specie.location === 'SE'));
  const sws = species.filter((specie) => (specie.location === 'SW'));
  return { NE: nes.map((ne) => ne.name),
    NW: nws.map((nw) => nw.name),
    SE: ses.map((se) => se.name),
    SW: sws.map((sw) => sw.name),
  };
}
// Recuperar horários
// recuperar valores de abertura e fechamento
const { hours } = data;
function getSchedule(dayName) {
  // seu código aqui
  return hours;
}

function getOldestFromFirstSpecies(id) {
  const person = employees.find((employee) => employee.id === id);
  const firstSpecieId = person.responsibleFor[0];
  const IdAnimal = species.find((specie) => specie.id === firstSpecieId);
  const IdResidents = IdAnimal.residents.sort((a, b) => +(a.age < b.age) || +(a.age === b.age) - 1);
  const result = Object.values(IdResidents[0]);

  return result;
}

function increasePrices(percentage) {
  const values = Object.values(prices);
  const newValues = values.map((value) => Math.round((value * (1 + percentage / 100)) * 100) / 100);
  [prices.Adult, prices.Senior, prices.Child] = [...newValues];
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
