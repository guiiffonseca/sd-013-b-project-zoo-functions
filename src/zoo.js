const data = require('./data');
// Desestruturei o objeto contido no arquivo data.js
// Transformei suas chaves em variáveis.
const { species, employees, prices } = require('./data');

// Usei rest para que fosse possível passar vários parâmetros ao mesmo tempo.
// Usei o .filter pois retorna um novo array com os objetos que passam na regra de negócio
// O rest cria um novo array com os valores passados para ele(por isso usei o .includes)
// Desestruturei o id pois é uma chave dos objetos do array species
function getSpeciesByIds(...ids) {
  const filterSpecies = species.filter(({ id }) => ids.includes(id));
  return filterSpecies;
}

// Usei o .find para encontrar o nome da espécie passada no parâmetro animalName
// Depois que o nome for encontrado acesso a chave .residents do mesmo objeto ao qual o nome pertence
// Usei .every pois queria saber se todos os animais dessa espécie tem idade maios ou igual ao parâmetro animalAge
// .every retorna um boolean
function getAnimalsOlderThan(animalName, animalAge) {
  return species.find(({ name }) => name === animalName)
    .residents.every(({ age }) => age >= animalAge);
}

// Caso não seja passado um parâmetro a função deve retornar um obj vazio
// Usei o .find para encontrar o funcionário com um nome ou sobrenome igual ao parâmetro passado
// .find retorna um obj
function getEmployeeByName(name) {
  if (name === undefined) {
    return {};
  }
  return employees.find(({ firstName, lastName }) => firstName === name || lastName === name);
}

// Usei spread nos parâmetros da função pois ele permite que um obj seja expandido
// Me permite fazer um merge dos objetos na order que eu coloco os parâmetros
function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

// Usei .some pois meu objetivo é verificar se o funcionário que possui o id(parâmetro da função) passado é um gerente ou não.
// .some retorna um boolean
// managers é um array por isso usei o .includes
function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

// Coloquei um default value = [] nos arrays managers e responsibleFor caso não seja passado nenhum valor para esses parâmetros
// Fiz o push de um novo objeto employee no array employees que se encontra no arquivo data.js
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// Criei um objeto vazio para receber a espécie e a respectiva quantidade de animais
// Usei o .forEach para percorrer o nome das espécies e os residentes de cada espécie
// .forEach adiciona ao objeto animals uma chave = nome dos animais e um valor = .length dos residentes(quantos são)
// Se não for passado nenhum parâmetro eu retorno todo o objeto animals, senão eu retorno somente o valor da chave passada por parâmetro(nº de residentes).
function countAnimals(animalsSpecies) {
  const animals = {};
  species.forEach(({ name, residents }) => {
    animals[name] = residents.length;
  });
  if (!animalsSpecies) {
    return animals;
  }
  return animals[animalsSpecies];
}

// Se a função não receber nenhum parâmetro retorna 0
// Coloquei as keys de entrants com um default value = 0(se o objeto for vazio, por default os valor de cada chave será 0)
// Desestruturei as chaves do objeto prices para mudar seu nome
// Retornei o valor total dos ingressos vendidos
function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: grownUp, Child: kid, Senior: elder } = prices;
  return (grownUp * Adult) + (kid * Child) + (elder * Senior);
}

function getAnimalMap(options) {
  // seu código aqui
}

// Criei um objeto com todas as informações de dias e horários referentes ao funcionamento
// Caso não seja passado nenhum parâmetro para a função, retorna o objeto inteiro
// Se o parâmetro for passado, ele é retornado como a chave e seu valor será o valor da chave do fullSchedule que coincida com o parâmetro.
function getSchedule(dayName) {
  const fullSchedule = {
    Monday: 'CLOSED',
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
  };
  if (!dayName) {
    return fullSchedule;
  }
  return { [dayName]: fullSchedule[dayName] };
}

//  Usei o .find para achar o objeto funcionário pelo id passado no parâmetro e "guardei" em uma constante
// Criei uma constante que pega a primeira espécie pela qual esse funcionário é responsável
// Usando o .find busquei as informações dos animais da espécie de referência e com o .sort coloquei o array de objetos em ordem crescente de idade
// Retornei em forma de array os valores do último objeto dataFromResidents, referente ao animal mais velho, usando o Object.values.
function getOldestFromFirstSpecies(id) {
  const workerById = employees.find((employee) => employee.id === id);
  const workerFistSpecie = workerById.responsibleFor[0];
  const dataFromResidents = species.find((specie) => specie.id === workerFistSpecie).residents
    .sort((younger, older) => younger.age - older.age);
  return Object.values(dataFromResidents[dataFromResidents.length - 1]);
}

// Criei uma função para calcular um incremento ao preço dos ingressos
// Para realizar o arredondamento em duas casas decimais consultei as seguintes fontes:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
// Usei o Object.entries para retornar um array dos pares chave e valor
// .forEach percorreu o array e aplicou a regra de negócio(da função newPrice) em cada um dos pares chave e valor
function newPrice(previousPrice, percentage) {
  const updatePrice = (previousPrice + (previousPrice * (percentage / 100)));
  return Math.round((updatePrice + Number.EPSILON) * 100) / 100;
}
function increasePrices(percentage) {
  Object.entries(prices).forEach(([lifeStages, price]) => {
    prices[lifeStages] = newPrice(price, percentage);
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
