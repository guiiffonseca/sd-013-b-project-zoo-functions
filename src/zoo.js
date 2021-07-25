const { species, employees, prices } = require('./data');

function getSpeciesByIds(ids) {
  // seu código aqui
}

function getAnimalsOlderThan(animal, age) {
  const specie = species.find((element) => element.name === animal);
  const residents = specie.residents;
  const verificarAge = residents.every((specie) => specie.age > age -1);
  // (1) CAPTURAR o ARRAY que contem o NAME DAS ESPECIES: FIND
  // está dentro da chave > Especies > NAME > RESIDENTS
  // (2) VERIFICAR e retornar um valor boleano: não
  // (2.1) array.every       
  // console.log(specie);
 return verificarAge; 
}
console.log(getAnimalsOlderThan('lions', 7));

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

function countAnimals(species) {
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
  // seu código aqui ///
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
