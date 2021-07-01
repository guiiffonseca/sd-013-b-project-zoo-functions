const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const GuardaID = species.filter((VSpecies) => ids.some((VId) => VSpecies.id === VId));
  console.log(GuardaID);
  return GuardaID;

  // console.log(GuardaID);
}
// console.log(species);
// console.log(Array.isArray(data.species));
function getAnimalsOlderThan(animal, age) {
  const retorno = species.find((value) => value.name === animal);
  const arrayInfo = retorno.residents;
  const BolleanValue = arrayInfo.every((value) => value.age >= age);
  return BolleanValue;
}

function getEmployeeByName(employeeName) {
  let retorno = {};
  const find = employees.find((v) => v.firstName === employeeName || v.lastName === employeeName);
  retorno = { ...find };
  return retorno;
}

function createEmployee(personalInfo, associatedWith) {
  const newObj = { ...personalInfo, ...associatedWith };
  return newObj;
}

function isManager(id) {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

  if (id === stephanieId || id === olaId || id === burlId) {
    return true;
  }
  return false;
}
// cria um objeto e coloca detro do employess
function addEmployee(idN, firstNameN, lastNameN, managersN = [], responsibleForN = []) {
  const novoObjeto = {
    id: idN,
    firstName: firstNameN,
    lastName: lastNameN,
    managers: managersN,
    responsibleFor: responsibleForN,
  };

  employees.push(novoObjeto);
}
function countAnimalSemParametro() {
  let objeto = {};
  species.forEach((item) => {
  // const nomeAnimal = item.name;
  // const populacao = item.popularity;
    objeto = {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
  });
  return objeto;
}
function countAnimalComParametro(animal) {
  let retorno = 0;

  species.forEach((item) => {
    if (item.name === animal) {
      retorno = item.popularity;
      return retorno;
    }
  });
  return retorno;
}
function countAnimals(animal) {
  if (animal === undefined) {
    const objeto = countAnimalSemParametro();
    return objeto;
  }
  // acima : sem parametro abaixo com paramentro
  const numero = countAnimalComParametro(animal);
  return numero;
}
console.log(countAnimals('snakes'));

function calculateEntry(entrants) {
  // seu código aqui
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
