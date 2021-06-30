const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const animalsBySpecie = data.species.find((specie) => specie.name === animal).residents;
  return animalsBySpecie.every((residentAnimal) => residentAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {}; // verifica a função recebe parâmetro. Se não recebe retorna um objeto vazio;
  return data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName); // verifica se o nome ou o sobrenome do colaborador é igual ao parâmetro, caso seja, retorna o objeto que contém as infos do colaborador;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.find((employee) => employee.id).managers.some((manager) => manager === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// função para contabilizar todos os animais;
const allAnimalsCount = () => {
  const allAnimalCount = {};
  data.species.forEach((specie) => {
    allAnimalCount[specie.name] = specie.residents.length;
  });
  return allAnimalCount;
};

function countAnimals(species) {
  if (!species) return allAnimalsCount();
  return data.species.find((specie) => specie.name === species).residents.length;
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
