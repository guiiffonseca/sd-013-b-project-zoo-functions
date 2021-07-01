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
  // seu código aqui
}

// const turn12Hour = (valor) => valor % 12;

function getSchedule(dayName) {
  // const { } = hours;
  // return array.find((dia) => {
  //   dia === dayName
  // });
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

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
  if (idOrName) {
    //
  }
  return employees.map((worker) => {
    const nome = `${worker.firstName} ${worker.lastName}`;
    return {
      [nome]: [...worker.responsibleFor],
    };
  });
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
