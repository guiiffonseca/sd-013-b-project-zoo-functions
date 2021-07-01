const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const especies = ids.reduce((acc, curr) => {
    const especieEncontrada = data.species.filter((especie) => especie.id === curr);
    if (especieEncontrada) {
      acc.push(...especieEncontrada);
    }
    return acc;
  }, []);
  return especies;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animaisDaEspecie = data.species.filter((especie) => especie.name === animal);
  const animalMaisNovo = animaisDaEspecie.reduce((acc, curr) => {
    const abaixoDaIdade = curr.residents.filter((residente) => residente.age < age);
    acc.push(...abaixoDaIdade);
    return acc;
  }, []);
  return animalMaisNovo.length <= 0;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const funcionarioEncontrado = data.employees.find(
    (func) => func.firstName === employeeName || func.lastName === employeeName,
  );
  return funcionarioEncontrado;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const novoFuncionario = { ...personalInfo, ...associatedWith };
  data.employees.push(novoFuncionario);
  return novoFuncionario;
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
