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
// Se não for passado nenhum parâmetro eu retorno todo o objeto animals, senão eu retorno somente o valor da chave passada por parâmetro(nº de residentes)
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
