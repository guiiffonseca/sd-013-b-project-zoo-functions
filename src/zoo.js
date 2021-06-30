const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return data.species.filter((specie) => ids.includes(specie.id)); // codigo baseado no do Jõao Vanelli
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find((type) => type.name === animal); // busca o objeto do animal escolhido
  const animais = findAnimal.residents; // guarda o array dos animais daquela especie (fuinha)
  return animais.every((resident) => resident.age >= age); // verifica se as idades de todos animais possuem a idade minima.
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) { // verifica se tem parametro se não tem retorna objeto vazio
    return {};
  }
  return data.employees.find(((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName));
  // procura o parametro na chave de primeiro nome ou ultimo nome do objeto empregado
  // se achar retorna o objeto.
}

function createEmployee(personalInfo, associatedWith) {
  const fullInfo = { ...personalInfo, ...associatedWith };
  return fullInfo;
}

function isManager(id) {
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const checkPerson = (element) => {
    if (element === undefined) {
      return [];
    } return element;
  };
  const fullInfos = {
    id,
    firstName,
    lastName,
    managers: checkPerson(managers),
    responsibleFor: checkPerson(responsibleFor),
  };
  return data.employees.push(fullInfos);
}

function countAnimals(species) {
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
