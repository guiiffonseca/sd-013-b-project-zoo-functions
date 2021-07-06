const { species, employees } = require('./data');

// Com a ajuda da Mariana Nogueira, consegui fazer o primeiro requisito:
// Usei o rest para que independente de quantos parâmetros a função funcione;
// Coloquei a função para retornar o parâmetro com map;
// O map percorre o parametro e retorna ele como um array;
// Dentro do map coloquei um find para encontrar dentro de species o id que é igual a ao parametro;
function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

// 1- Encontrar o animal(animal);
// 2- Encontrar as idades;
// 3- Ver se as idades são maiores que a idade minima(age);
function getAnimalsOlderThan(animal, minAge) {
  return (species.find(({ name }) => name === animal))
    .residents.every(({ age }) => age >= minAge);
}

// 1- Encontrar o nome e o sobrenome;
// 2- Comparar com o parametro(employeeName);
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(({ firstName, lastName }) =>
    (firstName === employeeName || lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  let employee = {};
  employee = Object.assign(personalInfo, associatedWith);
  return employee;
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

// 1- Se o array for vazio retornar todos os animais e residents;
// 2- Criar um objeto vazio e adicionar os animais e residents dentro dele;
// 3- Encontrar o animal e ver o comprimento de residents;
function countAnimals(species1) {
  const animals = {};
  if (species1 === undefined) {
    species.forEach((animal) => {
      animals[animal.name] = animal.residents.length;
    });
    return animals;
  }
  return species.find(({ name }) => name === species1).residents.length;
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
