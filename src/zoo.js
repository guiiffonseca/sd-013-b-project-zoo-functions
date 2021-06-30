const { species } = require('./data');
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
const a = getAnimalsOlderThan('penguins', 10); // false
const b = getAnimalsOlderThan('otters', 7); // true
console.log(`tem que dar false ${a} \n tem que dar true ${b}`);

function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciess) {
  // seu código aqui
}

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
