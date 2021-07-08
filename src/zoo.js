const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) { // a sintaxe rest '...NAME' permite que um número infedinido de argumentos seja passado para a função. isto é necessário caso a função receba mais de um id, como acontece no requisito 3.
  if (arguments.length === 0) { // usamos a propriedade das funções chamada arguments para definir que se não tiver nenhum argumento deve retornar um array vazio.
    return [];
  }
  const filterAnimal = species.filter((value) => ids.includes(value.id)); // aplicamos a função filter para filtrar apenas o que queremos. depois incluimos como parametro atraves do "includes"
  return filterAnimal;
}
console.log(getSpeciesByIds(species));

function getAnimalsOlderThan(animal, age) {
  const filterAge = species.find((value) => value.name === animal); // usamos o find para encontrar a especie que conicida com o parametro 'animal' e salvar o animal na variavel filterAge
  return filterAge.residents.every((resValue) => resValue.age >= age); // já com array do animal encontrado pelo find vamor acessar os residentes e aplicar o every para descobrir se todos tem a idade maior ou igual a idade passada como parametro.
}

function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

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
