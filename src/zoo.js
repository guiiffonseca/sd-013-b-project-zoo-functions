const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  // utiliza o rest para pegar os ids
  // seu código aqui
  if (ids.length === 0) {
    // se tiver o tamanho 0 não continua, pois o rest fornece um array de parametros
    return [];
  }
  if (ids.length >= 1) { // se o numero de parametros for maior ou igual a 1 entre no if
    // essa linha retorna um "array de species" e dentro desse array procura o PRIMEIRO animal que tem o id vindo do map
    return ids.map((animalmap) => data.species.find((animal) => animalmap === animal.id));
  }
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  // primeiro é feito um find para achar o animal, depois um every pra ver se todos atendem a requisição
  return data.species.find((especie) => especie.name === animal).residents
    .every((age1) => age <= age1.age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((name) => name.firstName === employeeName
  || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  // procuro se o id passado é manager de alguem, SE tiver ALGUM retorno true, se não, falso
  return data.employees.some((iddoManager) => iddoManager.managers.find((idM) => idM === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  /* source:https://stackoverflow.com/questions/38753259/create-object-from-foreach/38805907 */
  if (species === undefined) {
    const nameEquant = data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return nameEquant;
  }
  return data.species.find((animal) => animal.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const soma = (data.prices.Adult * Adult) + (data.prices.Senior * Senior)
  + (data.prices.Child * Child);
  return soma;
}

function getAnimalLocations() {
  const getAnimalLocation = data.species.reduce((acc, curr) => {
    if (!acc[curr.location]) {
      acc[curr.location] = [curr.name];
      return acc;
    }
    acc[curr.location].push(curr.name);
    return acc;
  }, {});
  return getAnimalLocation;
}

function getAnimalNames() {
  const teste = data.species.reduce((acc, curr) => {
    acc[curr.location] = data.species.filter((valor) => valor.location === curr.location)
      .map((animal) => ({ [animal.name]: animal.residents.map(({ name }) => name) }));
    return acc;
  }, {});
  return teste;
}

function getSortedAnimals() {
  const teste = data.species.reduce((acc, curr) => {
    acc[curr.location] = data.species.filter((valor) => valor.location === curr.location)
      .map((animal) => ({ [animal.name]: animal.residents.map(({ name }) => name).sort() }));
    return acc;
  }, {});
  return teste;
}

function getAnimalsBySex() {
  const animalSex = data.species.reduce((acc, curr) => {
    acc[curr.location] = data.species
      .filter((elemento1) => elemento1.location === curr.location)
      .map((elemento2) => ({ [elemento2.name]: elemento2.residents
        .filter((elemento3) => elemento3.sex === 'female').map(({ name }) => name) }));
    return acc;
  }, {});
  return animalSex;
}

function getAnimalsBySexSorted() {
  const animalSexSorted = data.species.reduce((acc, curr) => {
    acc[curr.location] = data.species
      .filter((elemento1) => elemento1.location === curr.location)
      .map((elemento2) => ({ [elemento2.name]: elemento2.residents
        .filter((elemento3) => elemento3.sex === 'female').map(({ name }) => name).sort() }));
    return acc;
  }, {});
  return animalSexSorted;
}
function fixEslint1(options) {
  if (options.sex === 'female') return getAnimalLocations();
  if (options.includeNames) return getAnimalNames();
}
function fixEslint2(options) {
  if (options.includeNames && options.sex === 'female') return getAnimalsBySex();
  if (options.includeNames && options.sorted) return getSortedAnimals();
  return fixEslint1(options);
}
function getAnimalMap(options) {
  /* Consultei o repositório do Amós Rodrigues para resolver essa parte.
  Link: https://github.com/tryber/sd-013-b-project-zoo-functions/blob/Amos-Rodrigues-project-zoo-functions/src/zoo.js
  */
  if (!options) return getAnimalLocations();
  if (options.includeNames && options.sex === 'female' && options.sorted) {
    return getAnimalsBySexSorted();
  }
  return fixEslint2(options);
}

function getSchedule(dayName) {
  const daysOfWeek = Object.entries(data.hours).reduce((acc, curr) => {
    if (curr[1].open === 0 && curr[1].close === 0) {
      acc[curr[0]] = 'CLOSED';
      return acc;
    }
    acc[curr[0]] = `Open from ${curr[1].open}am until ${curr[1].close - 12}pm`;
    return acc;
  }, {});
  if (!dayName) {
    return daysOfWeek;
  }
  const result = {};
  const objectOfParameter = Object.entries(daysOfWeek)
    .filter((elemento) => elemento[0] === dayName)[0];
  const [key2, value] = objectOfParameter;
  result[key2] = value;
  return result;
}

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((elemento) => elemento.id === id).responsibleFor[0];
  const animal = data.species.find((elemento) => elemento.id === person).residents;
  const oldAnimal = animal.reduce((acc, curr) => [Math.max(acc, curr.age)], 0);
  const targetAnimal = animal.find((elemento) => elemento.age === oldAnimal[0]);
  const { name, sex, age } = targetAnimal;
  return [name, sex, age];
}

function increasePrices(percentage) {
  const preco = data.prices;
  const chave = Object.keys(preco);
  chave.forEach((elemento) => {
    const novoPreco = preco[elemento] + (preco[elemento] * (percentage / 100));
    preco[elemento] = Math.round(novoPreco * 100) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  const getFullList = data.employees.reduce((acc, curr) => {
    acc[`${curr.firstName} ${curr.lastName}`] = curr.responsibleFor
      .map((elemento) => data.species.find((elemento2) => elemento2.id === elemento).name);
    return acc;
  }, {});
  if (!idOrName) {
    return getFullList;
  }
  const getSpecificPerson = {};
  data.employees.map((teste2) => {
    if (teste2.id === idOrName || teste2.firstName === idOrName || teste2.lastName === idOrName) {
      getSpecificPerson[`${teste2.firstName} ${teste2.lastName}`] = teste2.responsibleFor
        .map((elemento) => data.species.find((elemento2) => elemento2.id === elemento).name);
    }
    return getSpecificPerson;
  });
  return getSpecificPerson;
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
