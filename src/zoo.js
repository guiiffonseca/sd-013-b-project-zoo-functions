const { species, employees, hours, prices } = require('./data');

const data = require('./data');
// ----------- REQUISITO 01 ----------- //
const getSpeciesByIds = (...rest) => species.filter((especie) => rest.includes(especie.id));
// 1.Utilizado como parâmetro o (...rest), para possiilitar a entrega de mais de um parâmetro.
// 2. Filtrado todas as espécies que fazem do parâmetro passado.
// 3. Verificado se as espécies contém o id passado.
// ----------- REQUISITO 02 ----------- //
const getAnimalsOlderThan = (animal, age) =>
  species.find((especie) => especie.name === animal)
    .residents.every((elemento) => elemento.age >= age);
// 1. Encontrar as informações da especie passada como parâmetro.
// 2. Veriicar se todos os elementos do array possuem a idade minima passada como parmaetro.
// ----------- REQUISITO 03 ----------- //
const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return employees.find((nome) =>
    (nome.firstName === employeeName || nome.lastName === employeeName));
};
// 1. Verificar se foi passado um parâmetro;
// 2. Encontrar o funcionario com o nome passado como parâmetro.
// ----------- REQUISITO 04 ----------- //
const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });
// 1.Usado o modo spread operator para concatenar as informações passadas.
// ----------- REQUISITO 05 ----------- //
const isManager = (id) => employees.some(({ managers }) => managers.includes(id));
// 1. Procurar dentre os colaboradores, se algum deles possui o cargo de gerente.
// 2. Utilizado o .includes() para verificar se possui o parãmetro passado.

// ----------- REQUISITO 06 ----------- //
const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => employees
  .push({ id, firstName, lastName, managers, responsibleFor });
// 1. utilizado o default param para estabelecer os parâmetros managers e respondibleFor - assim como no test.
// 2. Utilizado o push para acrescentar as informações ao array.
// 3. Informações acrescentadas utilizando o shorthand.
// ----------- REQUISITO 07 ----------- //
const countAnimals = (especies) => {
  const objeto = {};
  if (!especies) {
    species.forEach(({ name, residents }) => { objeto[name] = residents.length; });
    return objeto;
  }
  const resultado = species.find(({ name }) => especies === name);
  return resultado.residents.length;
};
// 1.Criado um objeto vazio para armazenar as informações do forEach.
// 2.Uitlizado o .find(()) para encontrar a especie passada como parametro e realizar a contagem.
// ----------- REQUISITO 08 ----------- //
const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  return Object.entries(entrants).reduce((acc, [chave, valor]) =>
    acc + prices[chave] * valor, 0);
};
// 1. Realizada condição para verificar se houve um parâmetro passado e se este não foi um objeto vazio.
// 2. "Tranformado" o objeto em um array para aplicar o reduce e calcular o preço do ingresso conforme a idade do visitante.
// 3. Utilizado a desestruturação de array para acessar a chave e o valor do current.
// ----------- REQUISITO 09 ----------- //
function getAnimalMap(options) {
  // seu código aqui
}
// ----------- REQUISITO 10 ----------- //
// 1. Transformar o valor de hours['diaDaSemana'] em uma string que contém os valores das chaves.
// 2. Foi "construida" uma agenda com os dias e horáiros para que depois pudesse ser mais fácil a manipulação dos dados.
const getSchedule = (dayName) => {
  const agenda = Object.entries(hours).reduce((acc, [dia]) => {
    if (dia === 'Monday') { // [dia] = uma variável da desestruturação do array retornado de object.entries(hours).
      acc[dia] = 'CLOSED';
    } else {
      acc[dia] = `Open from ${hours[dia].open}am until ${hours[dia].close - 12}pm`;
    } return acc;
  }, {});
  if (dayName in agenda) {
    return { [dayName]: agenda[dayName] };
  }
  return agenda;
};
// ----------- REQUISITO 11 ----------- //
function getOldestFromFirstSpecies(id) {
  // seu código aqui
}
// ----------- REQUISITO 12 ----------- //
// 1. Realizar o cálculo da porcentagem passada como parâmetro
// 2. Acessar o objeto do arquivo "data" e alterar o seus dados
const increasePrices = (percentage) => {
  Object.entries(prices)
    .map(([string, preco]) => {
      prices[string] = Math.round((preco + (percentage / 100) * preco) * 100) / 100;
      return prices;
    });
};

// ----------- REQUISITO 13 ----------- //
function getEmployeeCoverage(idOrName) {
  // seu código aqui
}
// Todo este projeto foi realizado com a ajuda da turma 13-b. Em especial, tive ajuda para entender os processos, com os colegas Mayu, Lucas Caribé, Gustavo Braga, Jeferson, Ygor, Rodirgo Augusto e Thaís Sampaio.

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
