const data = require('./data');
const { species, employees, prices, hours } = require('./data');

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
  // seu código aqui
}

function getSchedule(dayName) {
  // Consegui fazer isso fazendo code Review do projeto do PedroSehn. Eu sei por que foi feito dessa forma.
  // Peguei a ideia e fiz da minha forma.
  // (https://github.com/tryber/sd-013-b-project-zoo-functions/pull/9/commits/fc613f527933daddc6841ddf91dda718c1ea5147)
  const values = Object.values(hours);
  const days = Object.keys(hours);
  const obj = {};
  for (let index = 0; index < days.length; index += 1) {
    obj[days[index]] = `Open from ${values[index].open}am until ${values[index].close - 12}pm`;
  }

  obj.Monday = 'CLOSED';

  if (!dayName) {
    return obj;
  }

  return { [dayName]: obj[dayName] };
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
