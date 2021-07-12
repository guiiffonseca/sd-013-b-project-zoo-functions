const { prices, hours } = require('./data');
const data = require('./data');

const especies = data.species;
const empregados = data.employees;

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  const search = especies
    .filter((especie) => especie.id === ids
      .find((value) => especie.id === value));
  return search;
};

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalName = especies.find((especie) => especie.name === animal);
  const ehVelho = animalName.residents.every((resident) => resident.age >= age);
  return ehVelho;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const employeeSearch = empregados.find(
    (empregado) => empregado.firstName === employeeName || empregado.lastName === employeeName,
  );
  return employeeSearch;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return empregados.some(
    (empregado) => empregado.managers.includes(id),
  );
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return empregados.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  // seu código aqui
  const obj = {};
  especies.map((especie) => {
    obj[especie.name] = especie.residents.length;
    return true;
  });
  if (species === undefined) {
    return obj;
  }
  const objPeloNome = especies.find((especie) => especie.name === species);
  return objPeloNome.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalValue = Object.entries(entrants).reduce(
    (accumulator, [people, value]) => accumulator + prices[people] * value,
  );
  return totalValue;
}

function getAnimalMap(options) {
  // seu código aqui
}

const horario = (dia) => {
  const funcionamento = `Open from ${hours[dia].open}am until ${hours[dia].close - 12}pm`;
  return funcionamento;
};

function getSchedule(dayName) {
  // seu código aqui
  const arr = Object.keys(hours);
  const dias = {};
  if (dayName === undefined) {
    for (let i = 0; i < arr.length - 1; i += 1) {
      dias[arr[i]] = horario(arr[i]);
    }
    dias.Monday = 'CLOSED';
    return dias;
  }
  if (dayName === 'Monday') {
    dias.Monday = 'CLOSED';
    return dias;
  }
  dias[dayName] = horario(dayName);
  return dias;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const funcionario = empregados.find((empregado) => empregado.id === id);
  const especieId = especies.find((especie) => especie.i === funcionario.responsibleFor[0]);
  let age = 0;
  let arr;
  especieId.residents.forEach((bicho) => {
    if (age < bicho.age) {
      age = bicho.age;
      arr = [];
      arr.push(bicho.name);
      arr.push(bicho.sex);
      arr.push(bicho.age);
      return arr;
    }
  });
  console.log(arr);
  return arr;
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
