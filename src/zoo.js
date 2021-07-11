const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) { // o parâmetro rest "...ids" permite que um número infedinido de argumentos seja passado para a função. isto é necessário caso a função receba mais de um id, como acontece no requisito 3.
  if (arguments.length === 0) { // usamos a propriedade das funções chamada arguments para definir que se não tiver nenhum argumento deve retornar um array vazio.
    return [];
  }
  const filterAnimal = species.filter((speciesValue) => ids.includes(speciesValue.id)); // aplicamos a função filter para filtrar apenas o que queremos. depois usamos o includes para saber se nos parametros temos incluido o valor do animal.id (o includes retorna "true" caso exista a sentença, e é justamente a definição que o filter utiliza (true) para adicionar os itens no novo array.)
  return filterAnimal;
}
// console.log(getSpeciesByIds(species));

function getAnimalsOlderThan(animal, age) {
  const filterAge = species.find((speciesValue) => speciesValue.name === animal); // usamos o find para encontrar a especie que conicida com o parametro 'animal' e salvar o animal na variavel filterAge
  return filterAge.residents.every((residentsValue) => residentsValue.age >= age); // já com array do animal encontrado pelo find vamor acessar os residentes e aplicar o every para descobrir se todos tem a idade maior ou igual a idade passada como parametro.
}

function getEmployeeByName(employeeName) {
  if (arguments.length === 0) { // usamos o arguments.lengh === 0 para checar se existe algum argumento.
    return {};
  }
  const filterName = employees.find((employeesValue) => employeesValue.firstName === employeeName || employeesValue.lastName === employeeName); // como precisamos encontrar o emplooye que coincida ou com o name ou last name usamos o find, pois ele retornará o primeiro resultado.
  return filterName;
}
// console.log(getEmployeeByName('Emery')); 

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  const checkManeger = employees.find((employeesValue) => employeesValue.id).managers // encontramos com o find o employeer com id passado no parametro, depois acessamos a chave menager e com o some verificamos se existe algum valor com o id passado.
  .some((managersValue) => managersValue === id);
    
  return checkManeger;
}
// console.log(isManager('stephanieId'));


function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species1) {
  // seu código aqui
}

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
