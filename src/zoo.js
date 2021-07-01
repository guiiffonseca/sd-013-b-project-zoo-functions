const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((especie) => especie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const animais = species.find((especie) => animal === especie.name);
  const trueOfFalse = animais.residents.every((especie) => especie.age >= age);
  return trueOfFalse;
}

function getEmployeeByName(employeeName) {
  const condicao = (firstName, lastName) => employeeName === firstName || employeeName === lastName;
  if (employeeName) {
    return employees.find(({ firstName, lastName }) => condicao(firstName, lastName));
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees.some((employer) => employer.managers.includes(id));
}

function addEmployee(idN, firstNameN, lastNameN, managersN = [], responsibleForN = []) {
  return employees.push({
    id: idN,
    firstName: firstNameN,
    lastName: lastNameN,
    managers: managersN,
    responsibleFor: responsibleForN,
  });
}

function countAnimals(specie) {
  if (specie) {
    return species.find((especie) => especie.name === specie).residents.length;
  }
  const lista = {};
  species.forEach((especie) => {
    const { name, residents } = especie;
    lista[name] = residents.length;
  });
  return lista;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
}

function getAnimalMap(options) {
  // const mapa = {};
  // if (!options) {
  //   species.find(() => {

  //   })
  // }
}

// const turn12Hour = (valor) => valor % 12;

function getSchedule(dayName) {
  // const { } = hours;
  // return array.find((dia) => {
  //   dia === dayName
  // });
}

function getOldestFromFirstSpecies(workId) {
  const work = employees.find((worker) => worker.id === workId);
  // console.log(work);
  const { responsibleFor } = work;
  const animal = species.find(({ id }) => responsibleFor[0] === id);
  // console.log(animal);
  const { residents } = animal;
  let bixoVelho;
  let maior = 0;
  residents.forEach((bixo) => {
    if (bixo.age > maior) {
      maior = bixo.age;
      bixoVelho = Object.values(bixo);
    }
  });
  return bixoVelho;
}

// console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

function increasePrices(percentage) {
  function porcentagem(valor) {
    return (Math.ceil((valor * 100) * (((percentage / 100) + 1))) / 100).toFixed(2);
  }
  const novoAdult = porcentagem(prices.Adult);
  const novoChild = porcentagem(prices.Child);
  const novoSenior = porcentagem(prices.Senior);
  prices.Adult = parseFloat(novoAdult, 10);
  prices.Child = parseFloat(novoChild, 10);
  prices.Senior = parseFloat(novoSenior, 10);
}

function getEmployeeCoverage(...idOrName) {
  // const list = {};
  // if (idOrName) {
  //   const work = idOrName.map((id) => employees
  //     .find((worker) => worker.id === id || worker.firstName === id || worker.lastName === id));
  //   console.log(work);
  //   const animais = work.map(({ responsibleFor }) => species
  //     .find(({ id }) => responsibleFor === id));
  //   console.log(animais);
  //   // const { firstName, lastName } = work;
  //   // const nomeFuncionario = `${firstName} ${lastName}`;
  //   // list[nomeFuncionario] = [animais.name];
  // }
  // return list;
}

// console.log(getEmployeeCoverage('Stephanie'));

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
