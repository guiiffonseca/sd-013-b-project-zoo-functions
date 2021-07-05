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
  const eGerente = data.employees.reduce((acc, curr) => {
    const g = curr.managers.find((manager) => manager === id);
    if (g) {
      acc.push(g);
    }
    return acc;
  }, []);
  return eGerente.length > 0;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  const m = managers || [];
  const r = responsibleFor || [];
  const funcionario = { id, firstName, lastName, managers: m, responsibleFor: r };
  data.employees.push(funcionario);
  return data.employees;
}

function countAnimals(species) {
  // seu código aqui
  if (species) {
    const especie = data.species.find((specie) => specie.name === species);
    return especie ? especie.residents.length : 0;
  }
  return data.species.reduce((acc, curr) => {
    const specie = {
      [curr.name]: curr.residents.length,
    };
    return { ...acc, ...specie };
  }, {});
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const total = Object.keys(entrants).reduce((acc, curr) => {
    const valor = acc + entrants[curr] * data.prices[curr];
    return valor;
  }, 0);
  return total;
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
