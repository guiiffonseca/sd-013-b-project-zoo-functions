const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

// map - vai percorrer o array e retorna outro array de acordo com a função passada.
// rest - pega strings e junta num array.
// find - procura o id do parâmetro no id de cada espécie
// se não passar nenhum parâmetro o map vai retornar o array vazio, visto q ele ja retorna um array, independente do parâmetro passado, por isso passa no primeiro teste.
// retorna um array com a espécie do id do parâmetro.

function getAnimalsOlderThan(animal, age) {
  return data.species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

// find - procura dentro das espécies o nome do animal passado no parâmetro (animal).
// every - verifica se TODOS os residentes tem a idade mínima passada no parâmetro (age).
// retorna true ou false.

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

// no if se não passar nenhum parâmetro retorna um objeto vazio.
// no array employees (array de objetos), procura o objeto com o firstName ou lastName passado no parâmetro.
// retorna um objeto com as informações do employee passado no parâmetro.
// { firstName, lastName } -> object destructuring para acessar as propriedades do objeto.

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// o spread junta os 2 objetos do parâmetro e retorna um objeto.

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}

// o includes verifica se na chave managers está o parâmetro (id) passado, o some vai percorrer o array employees para verificar se ao menos um dos elementos passa no teste, retornando true ou false.

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// push no array employees para incluir o parâmetro passado na última posição
// object property shorthand para incluir chaves e valores do objeto, sem precisar repetir os nomes das chaves.
// default parameters nas chaves managers e responsibleFor caso não seja passado o parâmetro retorna um array vazio.

function countAnimals(species) {
  if (!species === 0) return {};

  if (species) {
    const findName = data.species.find(({ name }) => name === species);
    return findName.residents.length;
  }

  const findAnimal = {};

  data.species.forEach(({ name, residents }) => {
    findAnimal[name] = residents.length;
  });

  return findAnimal;
}

// se não recebe parâmetro retorna um objeto vazio.
// dado um parâmetro (nome do animal) ele vai procurar através do find se o nome do animal é igual ao passado no parâmetro e retornar o tamanho da chave, que é o número de animais.
// passo uma constante com um objeto vazio para retornar o resultado do que é pedido depois da função (um objeto com o nome e numero de residentes).
// o forEach vai executar a função em cada elemento name e residents e para cada espécie eu pego o nome e o número de reidentes.

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
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
