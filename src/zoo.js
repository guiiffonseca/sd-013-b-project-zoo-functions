/* eslint-disable max-len */
const data = require('./data');

const { species, employees, prices } = data;

const getSpeciesByIds = (...ids) => ids.map((id) => species.find((specie) => specie.id === id));

const getAnimalsOlderThan = (animal, age) => species.find((specie) => specie.name === animal)
  .residents.every((resident) => resident.age >= age);

const getEmployeeByName = (employeeName) => ((!employeeName) ? {}
  : employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName));
console.log(getEmployeeByName());

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = (id) => employees.some((employee) => employee.managers.includes(id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => employees
  .push({ id, firstName, lastName, managers, responsibleFor });

const countAnimals = (spec) => {
  const empty = {};
  species.forEach((specie) => { empty[specie.name] = specie.residents.length; });
  if (!spec) {
    return empty;
  }
  return empty[spec];
  // atribuir um chave nova ou comparar se a chave ja existe (pegar o animal na chave passada);
};

const calculateEntry = (entrants = 0) => {
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const total = (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
  return total;
};

function getAnimalMap(options) {}

const getSchedule = (dayName) => {
  const schedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName || !Object.entries(dayName).length) {
    return schedule;
  }
  return { [dayName]: schedule[dayName] };
};

const getOldestFromFirstSpecies = (id) => {
// find busca por informaçoes.
// retornar um [].
  const foundEmployees = employees.find((el) => el.id === id).responsibleFor[0]; // passado o id do funcionario, encontra o primeiro animal(por isso o indice [0]).
  const foundSpecie = species.find((sp) => sp.id === foundEmployees)
    .residents.sort((a, b) => b.age - a.age); // encontra o species.id que da match com o employee.id e ordena as idades do maior para o menor. O mais velho estara na posiçao [0]
  return Object.values(foundSpecie[0]);
};

function increasePrices(percentage) {}

function getEmployeeCoverage(idOrName) {}

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
