const { species, employees, prices, hours } = require('./data');

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
  const dayArray = Object.keys(hours); // Retorna um array dos nomes das propriedade enumeráveis do próprio objeto, ou seja, as chaves
  const schedule = dayArray.reduce((accumulator, day) => { // Referência: https://www.devmedia.com.br/javascript-reduce-reduzindo-uma-colecao-em-um-unico-objeto/37981
    const dayObj = accumulator;
    if (day === 'Monday') { // Caso o Valor Atual é igual a 'Monday', então criar a chave e atribuir o valor de 'Closed';
      dayObj[day] = 'CLOSED';
    } else { // Criar chave dos dias e atribuir o valor em relação ao funcionamento
      dayObj[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    }
    return dayObj;
  }, {}); // Retorna o objeto do funcionamento;

  if (dayName in schedule) { // Com a ajuda da colega de turma Camila Dornas, consegui realizar o 2º parâmetro.
    return { [dayName]: schedule[dayName] }; // Cria chave e valor com o parâmetro passado(dayName);
  }
  return schedule;
}

function getOldestFromFirstSpecies(id1) { // Com a ajuda do Ygor consegui realizar esse requisito;
  const employee1 = employees.find(({ id }) => id === id1).responsibleFor[0]; // 1º Verificar se o id é igual ao argumento. Após isso, acessar a 1ª posição do responsibler;
  const animal = species.find((idAnimal) => idAnimal.id === employee1).residents; // 2º Verificar se o id do Animal é igual ao do Employee1. Após isso, acessar a chave REsidentes que possui um Array;

  const animalOldest = animal.reduce((accAge, currtAge) => // 3º Analisar qual é o maior valor(idade);
    ((accAge.age < currtAge.age) ? currtAge : accAge));

  return Object.values(animalOldest); // Retorna um array do Animal;
}

function increasePrices(percentage) {
  Object.entries(prices).map(([string, price]) => {
    prices[string] = Math.round((price + (percentage / 100) * price) * 100) / 100;
    return prices;
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
