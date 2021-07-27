const { species, employees, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const newArray = species.filter((specie) => ids.includes(specie.id));
  return newArray;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((specie) => specie.name === animal).residents
    .every((ageAnimals) => ageAnimals.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};

  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specieAnimals) {
  // seu código aqui
  const newObject = {};
  species.forEach((specie) => { newObject[specie.name] = specie.residents.length; });
  if (specieAnimals === undefined) {
    return newObject;
  }
  return newObject[specieAnimals];
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  const keys = Object.keys(entrants);
  return keys.reduce((acc, curr) => acc + data.prices[curr] * entrants[curr], 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  const horariosFuncionamento = {
    Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
    Wednesday: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
    Thursday: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
    Friday: `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`,
    Saturday: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
    Sunday: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };

  if (!dayName) {
    return horariosFuncionamento;
  }
  return { [dayName]: horariosFuncionamento[dayName] };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const primeiraSpecie = data.employees.find((funcId) => funcId.id === id).responsibleFor[0];
  const animalSpecie = species.find((specie) => specie.id === primeiraSpecie).residents;
  let resultadoFinal = ['name', 'sex', 0];
  animalSpecie.forEach((specie) => {
    if (specie.age > resultadoFinal[2]) {
      resultadoFinal = [specie.name, specie.sex, specie.age];
    }
  });
  return resultadoFinal;
}

function increasePrices(percentage) {
  // seu código aqui
  const precos = Object.entries(data.prices);
  const valorVisita = precos.forEach((valorUnidade) => {
    const novoPreco = (valorUnidade[1] * percentage) / 100 + valorUnidade[1];
    data.prices[valorUnidade[0]] = Math.round(novoPreco * 100) / 100;
  });
  return valorVisita;
}

function list() {
  const listaPadrao = {
    'Nigel Nelson': ['lions', 'tigers'],
    'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
    'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
    'Wilburn Wishart': ['snakes', 'elephants'],
    'Stephanie Strauss': ['giraffes', 'otters'],
    'Sharonda Spry': ['otters', 'frogs'],
    'Ardith Azevado': ['tigers', 'bears'],
    'Emery Elser': ['elephants', 'bears', 'lions'],
  };
  return listaPadrao;
}

function getEmployeeCoverage(idOrName) {
  if (!idOrName) {
    return list();
  }
  const objFuncionario = employees.find((employee) => idOrName === employee.id
    || idOrName === employee.firstName || idOrName === employee.lastName);

  const fullName = `${objFuncionario.firstName} ${objFuncionario.lastName}`;

  const firstId = species.find((specie) => specie.id === objFuncionario.responsibleFor[0]);

  const secondId = species.find((specie) => specie.id === objFuncionario.responsibleFor[1]);

  const objeto = { [`${fullName}`]: [firstId.name, secondId.name] };
  return objeto;
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
