const data = require('./data');
const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  // Perdi oras para entender como funciona o includes(). Complicado.
  // Mas consegui!!!
  return species.filter((animal) => ids.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  // So conseguir fazer graças a o code review do amigo Rafael Ne da Turma 13-B
  // com isso aprendi a a juntar duas HOF para ter um resultado mais direto. Perdi 4hs sem sair do lugar antes de lembrar do code review.
  return species.find((specie) => specie.name === animal).residents.every((res) =>
    res.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employ) => employ.firstName === employeeName
 || employ.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employ) => employ.managers[0] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  if (!specie) {
    return species.reduce((cvalue, { name, residents }) =>
      ({ ...cvalue, [name]: residents.length }), {});
  }
  return species.find(({ name }) => name === specie).residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  // fiz com o codigo code review do Rafael Ne.
  // fiz mas ainda não entendi direito o porque de colocar valores padrões em cara parametro recebido
  // if (!entrants) return {};
  // const { Adult, Child, Senior } = entrants;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

function getAnimalMap(options) {

}

function getSchedule(dayName) {

}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // Tentei com Math.round e parceFloat mas tirava um centavo do resultado.
  const A = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  const C = Math.ceil(prices.Child * (100 + percentage)) / 100;
  const S = Math.ceil(prices.Senior * (100 + percentage)) / 100;
  prices.Adult = A;
  prices.Child = C;
  prices.Senior = S;
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
