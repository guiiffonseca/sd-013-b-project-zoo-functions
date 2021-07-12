const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const arraySepecie = data.species.filter((specie) => ids.includes(specie.id));

  return arraySepecie;
}
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
  const nomes = data.species.find((speci) => speci.name === animal);
  return nomes.residents.every((nome) => nome.age >= age);
}
// console.log(getAnimalsOlderThan('penguins', 10))

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((employ) => (
    employeeName === employ.firstName || employeeName === employ.lastName));
}
// console.log(getEmployeeByName('Emery'))

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// referencia para resolver o exercicio em https://www.w3schools.com/jsref/jsref_includes_array.asp
function isManager(id) {
  return data.employees.some((emplo) => emplo.managers.includes(id));
}
// console.log(isManager("0e7b460e-acf4-4e17-bcb3-ee472265db83"));

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  const addFunc = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(addFunc);
}

function countAnimals(specie) {
  if (specie === undefined) {
    const objt = {};
    data.species.forEach((specy) => {
      objt[specy.name] = specy.residents.length;
    });
    return objt;
  }

  const cont2 = data.species.find((specy) => specy.name === specie);

  return cont2.residents.length;
}

console.log(countAnimals());

// referencia para resolução desse requisito https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/javascript-es6-objects/

// entrants = { Adult: 2, Child: 3, Senior: 1 };

function calculateEntry(entrants) {
  let total = 0;
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const precos = Object.entries(data.prices);
  const pessoas = Object.entries(entrants);
  precos.map((preco) => pessoas
    .forEach((pessoa) => {
      if (preco[0] === pessoa[0]) {
        total += preco[1] * pessoa[1];
      }
    }));
  return total;
}
// console.log(calculateEntry(entrants));

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  if (dayName === undefined) {
    const obj = {};
    Object.entries(data.hours).forEach((day) => {
      obj[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
      if (day[0] === 'Monday') obj[day[0]] = 'CLOSED';
    });
    return obj;
  }
  const days = Object.entries(data.hours);
  const horas = days.find((dia) => dia[0] === dayName);
  if (dayName === 'Monday') {
    horas[1] = 'CLOSED';
    return { [horas[0]]: horas[1] };
  }
  return {
    [horas[0]]: `Open from ${horas[1].open}am until ${horas[1].close - 12}pm`,
  };
}
function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((employ) => employ.id === id).responsibleFor[0];
  const specys = data.species.find((specy) => specy.id === person).residents;
  const animal = specys.reduce((acc, value) => ((acc.age > value.age) ? acc : value));
  return [animal.name, animal.sex, animal.age];
}
// specys.sort(function(a, b){return a.age - b.age});
// return animal[animal.length - 1];
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'))

function increasePrices(percentage) {
  const precos = Object.entries(data.prices);
  const valor = precos.forEach((value) => {
    const newPreco = (value[1] * percentage) / 100 + value[1];
    data.prices[value[0]] = Math.round(newPreco * 100) / 100;
  });
  return valor;
}
// console.log(increasePrices(50))
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
