const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const array = [];
  ids.forEach((id) => array.push(species.find((specie) => specie.id === id)));
  return array;
}

function getAnimalsOlderThan(animal, age) {
  const getAnimals = data.species.find((specie) => specie.name === animal);
  return getAnimals.residents.every((animalAge) => animalAge.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}
// Resolvido com a ajuda do Cajueiro
function countAnimals(speciess) {
  const animalsCount = {};
  species.forEach((specie) => { animalsCount[specie.name] = specie.residents.length; });
  if (animalsCount[speciess]) {
    return animalsCount[speciess];
  }
  return animalsCount;
}
// Video explicativo sobre Object.keys,  https://www.youtube.com/watch?v=CO29CxeRMx4
function calculateEntry(entrants) {
  if (!entrants) return 0;
  return Object.keys(entrants)
    .reduce((acc, curr) => acc + prices[curr] * entrants[curr], 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function daySchedule(day) {
  const object = {};

  object[day] = (day === 'Monday') ? 'CLOSED'
    : `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  console.log(object);
  return object;
}

function getSchedule(dayName) {
  const object = {};
  const week = Object.keys(hours);

  if (!dayName) {
    week.forEach((day) => {
      object[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
      if (hours[day].open === 0 && hours[day].close === 0) object[day] = 'CLOSED';
    });
    console.log(object);
    return object;
  }
  return daySchedule(dayName);
}
// Função Math.max (retorna o maior numero no array) https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function getOldestFromFirstSpecies(id) {
// encontrar o funcionario que corresponde ao id
  const employee = employees.find((collaborator) => collaborator.id === id);

  // encontrar o primeiro animal sob a gestão dele
  const getSpecies = species.find((specie) => specie.id === employee.responsibleFor[0]);

  // percorrer todos os residentes e descobrir qual o mais velho. Ao descobrir, retornar um array com nome, sexo e idade.
  const ages = getSpecies.residents.map((specie) => (specie.age));
  console.log(ages);

  const olderAnimalAge = ages.reduce((acc, curr) => Math.max(acc, curr));
  console.log(olderAnimalAge);

  const animal = getSpecies.residents.find((specie) => specie.age === olderAnimalAge);
  console.log(animal);

  const animalInfo = [animal.name, animal.sex, animal.age];
  return animalInfo;
}
getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992');

// Função Math.round() para arrendondamento https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// Alguem deu a dica de multiplicar e dividir por 100 no whatsapp para acertar o arredondamento, mas nao lembro quem foi.
function increasePrices(percentage) {
  Object.entries(prices).map(([string, price]) => {
    prices[string] = Math.round((price + (percentage / 100) * price) * 100) / 100;
    return prices;
  });
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
