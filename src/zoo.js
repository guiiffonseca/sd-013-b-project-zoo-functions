const data = require('./data');

// O ...ids transforma a entrada em array variável (Parâmetro Dinâmico com rest)
// Usei o map pra percorrer esse array porque a saída que quer é em array.
// Usei o find porque id tem um pra cada espécie.
// No find vou comparar o id do parâmetro com o id da espécie.
// Retorna um array com a especie do id do parâmetro.
function getSpeciesByIds(...ids) {
  return ids.map((idParam) => data.species.find(({ id }) => id === idParam));
}

// Tô procurando a espécie que tem o nome do animal passado como parâmetro.
// Na chave residents eu vejo com o every se todos os animais possuem a idade mínima passada como parâmentro.
// Retorna true ou false.
function getAnimalsOlderThan(animal, age) {
  return data.species.find(({ name }) =>
    name === animal).residents.every((resident) => resident.age >= age);
}

// Se não passar nenhum parâmetro, retorna um objeto vazio.
// O parâmetro pode ser tanto o primeiro nome, como o último nome.
// No array employees, procuro o objeto com o nome ou sobrenome passado como parâmetro.
// Retorna o objeto com as informações do empregado.
function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

// Usa o spread pra juntar os dois objetos passados por parâmetro. E retorna um objeto.
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// Passo um id de parâmetro, e quero ver se essa pessoa é gerênte. Pra isso preciso ver se ela está como gerênte de alguém.
// Percorro o array de employees e vejo se no objeto do empregado, na chave managers, inclui o id que eu quero. Se tiver em algum empregado, então que dizer que esse id é de um gerente.
// Retorna true ou false.
function isManager(id) {
  return data.employees.some(({ managers }) =>
    managers.includes(id));
}

// Usei o default parameters para managers e responsibleFor, porque se não tiver nada, eles precisam ser um array vazio.
// Peguei o array employees e fiz um push pro novo empregado ir pro final.
// As chaves e valores do objeto foram feitas com object property shorthand.
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// Setei uma constante com um objeto vazio.
// Se a função receber um parâmetro. Vou buscar o nome desse animal no meu array de especies e retornar o tamanho da chave residentes, ai vai retornar o número de animais que tem nessa especie.
// Se não colocar parâmetro: percorro o array de espécies e pra cada espécie eu pego o nome dela e o número de animais (tamanho da chave residents) e jogo no objeto vazio.
// Ao invés de usar specie.name e specie.residents, fiz o destructuring.
function countAnimals(specieAnimal) {
  const result = {};
  if (specieAnimal) {
    const specieFind = data.species.find(({ name }) => name === specieAnimal);
    return specieFind.residents.length;
  }
  data.species.forEach(({ name, residents }) => {
    result[name] = residents.length;
  });
  return result;
}

// Se não receber parâmetro ou um objeto vazio, vai retornar 0.
// Peguei as entradas(chave, valor) do parâmetro.
// Fiz o reduce, percorrendo cada par de chave e valor do parâmetro.
// Busquei a chave do valor atual no objeto de preços e peguei o valor.
// Multipliquei o número de pessoas pelo preço.
function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const entrantsEntries = Object.entries(entrants);
  return entrantsEntries.reduce((acc, entrantType) =>
    acc + entrantType[1] * data.prices[entrantType[0]],
  0);
}

function getAnimalMap(options) {
  const speciesForLocation = {};
  if (!options) {
    const locationsArray = ['NE', 'NW', 'SE', 'SW'];
    locationsArray.forEach((locationCurr) => {
      const namesSpecies = data.species
        .filter(({ location }) => location === locationCurr)
        .map(({ name }) => name);
      speciesForLocation[locationCurr] = namesSpecies;
    });
  }
  return speciesForLocation;
}
console.log(getAnimalMap());
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
