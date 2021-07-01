const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const animalsBySpecie = data.species.find((specie) => specie.name === animal).residents;
  return animalsBySpecie.every((residentAnimal) => residentAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {}; // verifica a função recebe parâmetro. Se não recebe retorna um objeto vazio;
  return data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName); // verifica se o nome ou o sobrenome do colaborador é igual ao parâmetro, caso seja, retorna o objeto que contém as infos do colaborador;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.find((employee) => employee.id).managers.some((manager) => manager === id);
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

// função para contabilizar todos os animais;
const allAnimalsCount = () => {
  const allAnimalCount = {};
  data.species.forEach((specie) => {
    allAnimalCount[specie.name] = specie.residents.length;
  });
  return allAnimalCount;
};

function countAnimals(species) {
  if (!species) return allAnimalsCount();
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  // como verificar objetos vazios https://programandosolucoes.dev.br/2021/03/02/objeto-vazio-javascript/
  if (!entrants || Object.keys(entrants).length === 0) return 0; // verificando se o parâmtro foi passado ou o objeto está vazio;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants; // desestruturando o objeto passado.
  return (Adult * data.prices.Adult) + (Senior * data.prices.Senior) + (Child * data.prices.Child); // multiplicando as entradas dadas no parâmetro pelo preço correpsondente a entrada e somando todos.
}

function getAnimalMap(options) {
  // seu código aqui
}

const completeSchedule = () => {
  const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = data.hours;
  const schedule = {
    Tuesday: `Open from ${Tuesday.open}am until ${Tuesday.close - 12}pm`,
    Wednesday: `Open from ${Wednesday.open}am until ${Wednesday.close - 12}pm`,
    Thursday: `Open from ${Thursday.open}am until ${Thursday.close - 12}pm`,
    Friday: `Open from ${Friday.open}am until ${Friday.close - 12}pm`,
    Saturday: `Open from ${Saturday.open}am until ${Saturday.close - 12}pm`,
    Sunday: `Open from ${Sunday.open}am until ${Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };
  return schedule;
};

function getSchedule(dayName) {
  if (!dayName) return completeSchedule();
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const converted = (percentage / 100) + 1;
  const actualPrice = Object.values(data.prices);
  return actualPrice.map((price) => Math.ceil(price * converted * 100) / 100);
}

console.log(increasePrices(50));

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
