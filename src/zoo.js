const { species } = require('./data');
const data = require('./data');

/* 1. Esta função é responsável pela busca das espécies de animais por id.
Ela retorna um array contendo as espécies referentes aos ids passados
como parâmetro, podendo receber um ou mais ids. */

function getSpeciesByIds(...ids) {
  const animalSpecies = [];
  ids.forEach((givenId) =>
    animalSpecies.push(...species.filter((specimen) => specimen.id === givenId)));
  return animalSpecies;
}

/* 2. Esta função, a partir do nome de uma espécie e uma idade mínima, verifica
se todos os animais daquela espécie possuem a idade mínima especificada */

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
}

/* 3. Esta função é responsável pela busca das pessoas colaboradoras através do
 primeiro ou do último nome delas */

function getEmployeeByName(employeeName) {
  // seu código aqui
}

/* 4. A função, a partir de informações recebidas nos parâmetros, é capaz de
 criar um objeto equivalente ao de uma pessoa colaboradora, retornando-o */

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

/* 5. Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de
 gerência. */

function isManager(id) {
  // seu código aqui
}

/* 6. A função irá adicionar uma nova pessoa colaboradora ao array employees,
 presente no arquivo data.js. */

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

/* 7. Esta função é responsável por contabilizar a quantidade de animais. */

function countAnimals(species) {
  // seu código aqui
}

/* 8. A partir da quantidade de visitantes e a faixa etária de cada um, esta
 função é responsável por retornar o preço total a ser cobrado */

function calculateEntry(entrants) {
  // seu código aqui
}

/* 9. A função é responsável pelo mapeamento geográfico das espécies e seus
animais, podendo ainda filtrá-los por ordem alfabética e gênero, por exemplo */

function getAnimalMap(options) {
  // seu código aqui
}

/* 10. A função é responsável por disponibilizar as informações de horário para
 uma consulta, que pode querer ter acesso a todo o cronograma da semana ou
 apenas o cronograma de um dia específico */

function getSchedule(dayName) {
  // seu código aqui
}
/* 11. A função busca por informações do animal mais velho da primeira espécie
 gerenciada pela pessoa colaboradora do parâmetro */

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

/* 12. A função é responsável por aumentar o preço das visitas, com base no
 valor de aumento recebido no parâmetro, em porcentagem */

function increasePrices(percentage) {
  // seu código aqui
}

/* 13. A função é responsável por consultar as espécies pela qual a pessoa
 colaborada, recebida no parâmetro através de seu id, firstName ou lastName,
 é responsável */

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
