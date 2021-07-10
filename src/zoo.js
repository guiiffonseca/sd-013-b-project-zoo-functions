const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const especieAnimal = data.species.find((especie) => especie.name === animal);
  if (!especieAnimal) {
    return false;
  }

  return especieAnimal.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) =>
    employee.managers.includes(id));
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  const obj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  data.employees.push(obj);
}

function countAnimals(species) {
  if (species) {
    const specieAnimal = data.species.find((specie) => specie.name === species);
    return specieAnimal.residents.length;
  }
  const countSpecies = {};

  data.species.forEach((specie) => {
    countSpecies[specie.name] = specie.residents.length;
  });

  return countSpecies;
}

function calculateEntry(entrants = {}) {
  let valorAcumulado = 0;
  // eu tenho que pegar o valor da entrada;
  // multiplicar o valor da entrado pela quantidade de entradas;
  // somar o total de entradas;
  Object.entries(entrants).forEach((valor) => {
    valorAcumulado += prices[valor[0]] * valor[1];
  });
  // retornar o valor somado;
  return valorAcumulado;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const valorAcumulado = {};
  Object.entries(data.hours).forEach((valor) => {
    if (!dayName) {
      if (valor[0] === 'Monday') {
        valorAcumulado[valor[0]] = 'CLOSED';
        return;
      }
      valorAcumulado[valor[0]] = `Open from ${valor[1].open}am until ${valor[1].close - 12}pm`;
    }
    if (dayName === valor[0]) {
      if (valor[0] === 'Monday') {
        valorAcumulado[valor[0]] = 'CLOSED';
        return;
      }
      valorAcumulado[dayName] = `Open from ${valor[1].open}am until ${valor[1].close - 12}pm`;
    }
  });
  return valorAcumulado;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const originValue = Object.keys(data.prices);
  const percentagem = (percentage / 100) + 1;

  originValue.forEach((key) => {
    const updatedValue = data.prices[key] * percentagem;
    const valueJust = (Math.ceil(updatedValue * 100) / 100);

    data.prices[key] = valueJust;
  });
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
