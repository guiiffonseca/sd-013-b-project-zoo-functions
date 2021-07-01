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

function getAnimalMap(options) {
  // if (!options) {
  //   const locationAndName = data.species.reduce((acc, curr, index) => {
  //     acc[curr.location] = [curr.name];
  //     if (curr.name.length >= 1) {
  //       acc[curr.location].push(curr.name);
  //     }
  //     return acc;
  //   }, {});
  //   return locationAndName;
  // }
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
