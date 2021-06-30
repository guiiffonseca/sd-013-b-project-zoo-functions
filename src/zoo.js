const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  // const array = [];
  // let valorAtual;
  // const filtro = (value) => value.id === valorAtual;

  // ids.forEach((atual) => {
  //   valorAtual = atual;
  //   array.push(data.species.filter(filtro)[0]);
  // });
  // return array;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const chaveAnimal = data.species.find(({ name }) => name === animal);
  const { residents } = chaveAnimal;
  const checkAge = residents.every((animalName) => animalName.age >= age);
  return checkAge;
}
getAnimalsOlderThan('otters', 7);

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
