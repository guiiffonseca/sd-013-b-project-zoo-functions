const { prices } = require('./data');
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
    const key = valor[0];
    const result = valor[1];
    if (!dayName) {
      if (key === 'Monday') {
        valorAcumulado[key] = 'CLOSED';
        return;
      }
      valorAcumulado[key] = `Open from ${result.open}am until ${result.close - 12}pm`;
    }
  });
  return valorAcumulado;
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
