const { species, employees, prices } = require('./data');
const data = require('./data');

// A colega de turma Mayu fez um code review e indicou usar o Rest no 1º Desafio
function getSpeciesByIds(...ids) { // 1º Filtrar as espécies de acordo com o ID especificado;
  return species.filter(({ id }) => ids.includes(id)); // Verificar se o IDS está incluído no ID;
}

function getAnimalsOlderThan(animal, age) {
  // 1º Acessar o objeto do animal especificado
  return species.find((element) => element.name === animal).residents
    .every((penguins) => penguins.age >= age); // 2º Verificar se todos os animais possui a idade mínima específicada
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {}; // 1º Verificar se não possui parâmetros, então retorna um objeto vazio

  return employees.find(({ firstName, lastName }) => // 2º Encontrar se o firstName ou lastName é igual ao argumento
    firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) { // Ref: https://www.codingame.com/playgrounds/7998/es6-tutorials-spread-operator-with-fun
  const info = { ...personalInfo, ...associatedWith }; // spread operator - Concatenação
  return info;
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id)); // 1º Verifica se ao menos um dos elementos está incluído no Managers
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) { // Ref:https://ui.dev/shorthand-properties/
  employees.push({ // Adicionar ao final do Array um novo Objeto;    // Default Parameters https://www.w3schools.com/howto/howto_js_default_parameters.asp
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species1) {
  if (!species1) { // 1º Caso não tiver argumento,então
    const animalsCount = { };
    species.forEach(({ name, residents }) => { animalsCount[name] = residents.length; }); // 2º Percorrer o species e criar uma chave e atribuir um valor. Guardar o nome e o tamanho de residents na variável e retorna um objeto de animais e suas quantidades
    return animalsCount;
  }
  const findAnimal = species.find(({ name }) => name === species1); // 3º Caso o argumento possuir o mesmo nomel, então retornar o tamanho a quantidade
  return findAnimal.residents.length;
}

function calculateEntry(entrants) { // Com a ajuda da colega de Turma Mayu, consegui realizar o Requisito com HOF.
  let result = 0;
  if (!entrants || entrants === {}) {
    return 0; // 1º Caso não tiver argumento ou receber um objeto vazio, retornar 0
  }
  Object.entries(entrants).forEach((personEquant) => {
    result += personEquant[1] * prices[personEquant[0]];
    return result;
  });
  return result;
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
