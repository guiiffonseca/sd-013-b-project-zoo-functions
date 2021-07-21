const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // Retorna o id das especies
  const idReturn = species.filter((specie) => ids.includes(specie.id));
  return idReturn;
}

function getAnimalsOlderThan(animal, age) {
  // Retorna a idade do animal
  const animalAge = species.find((specie) => specie.name === animal).residents
    .every((index) => index.age >= age);
  return animalAge;
}

function getEmployeeByName(employeeName) {
  // Retorna o empregado
  if (employeeName === undefined) return {};
  return employees.find((thing) =>
    thing.firstName === employeeName || thing.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // Cria um employee
  const emptyArray = {};
  return Object.assign(emptyArray, personalInfo, associatedWith);
}

function isManager(id) {
  // Verifica se o employee e gerente
  return data.employees.some((employee) => employee.managers.some((value) => value === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // Adiciona um novo empregado no fim do array
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
  return data.employees;
}

function countAnimals(speecies) {
  // Retorna a contagem dos animais
  if (!speecies) {
    const something = { };
    species.forEach(({ name, residents }) => { something[name] = residents.length; });
    return something;
  }
  const getCount = species.find(({ name }) => name === speecies);
  return getCount.residents.length;
}

function calculateEntry(entrants) {
  // caso o valor de entrats seja vazio retorne os valores especificos
  if (!entrants || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * prices.Adult + Senior * prices.Senior + Child * prices.Child;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // Pega a agenda do dia, diz quando o zologico abre e quando fecha
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    schedule[day] = `Open from ${hours[day].open}am until ${(hours[day].close) - 12}pm`;
    if (day === 'Monday') {
      schedule[day] = 'CLOSED';
    }
  });
  if (dayName !== undefined) {
    return { [dayName]: schedule[dayName] };
  }
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  // funcao para achar o animal com o id do funcionario
  const theEmployee = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const theAnimal = data.species.find((theSpecie) => theSpecie.id === theEmployee).residents;
  const reducetheSpecie = theAnimal.reduce((oldestResident, currentResident) => (
    (oldestResident.age > currentResident.age) ? oldestResident : currentResident));
  return [reducetheSpecie.age, reducetheSpecie.sex, reducetheSpecie.age];
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
