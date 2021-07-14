const { species, employees, prices } = require('./data');
const data = require('./data');
// inicio do projeto
function getSpeciesByIds(...ids) {
  // seu código aqui
  // para retornar um array é preciso usar a função map.
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const acharOAnimal = species.find((specie) => specie.name === animal);
  return acharOAnimal.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  // para verificar o objeto é necessário acessa-lo
  return employees.find((employee) => employee.id).managers.some((manager) => manager === id);
}
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesAnimals) {
  // seu código aqui
  // a função é sem parametros e deve retornar um objeto que vai conter o nome e a quantidade deles
  const animals = {};
  species.forEach((specie) => {
    const specieAnimals = specie.name;
    const quantifyAnimals = specie.residents.length;
    animals[specieAnimals] = quantifyAnimals;
  });
  if (speciesAnimals) {
    return animals[speciesAnimals];
  } return animals;
}

function calculateEntry(entrants = {}) {
  // seu código aqui
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  // Retorna 0 se nenhum argumento for passado
  // Retorna 0 se um objeto vazio for passado
  if (!entrants || !Object.entries(entrants).length) {
    return 0;
  } return (prices.Adult * Adult) + (prices.Senior * Senior) + (prices.Child * Child);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  const cronogram = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName || !Object.entries(dayName).length) {
    return cronogram;
  }
  return { [dayName]: cronogram[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((employee) => employee.id === id).responsibleFor[0];
  const findOlder = species.find((specie) => specie.id === findEmployee)
    .residents.sort((a, b) => b.age - a.age);
  return Object.values(findOlder[0]);
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
