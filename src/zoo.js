const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const arraySepecie = data.species.filter((specie) => ids === specie.id);

  return arraySepecie;
}
//console.log(getSpeciesByIds());
/*function getSpeciesByIds(...ids) {
  if ( ids === 'undefined' || ids === '') {
    return [];
  }
  return data.species.filter((specie) => ids = specie.id);
}


console.log(getSpeciesByIds());*/

function getAnimalsOlderThan(animal, age) {
  const nomes = data.species.find((speci) => {
    return speci.name === animal;
  });
  return nomes.residents.every((nome) => nome.age >= age);
}
//console.log(getAnimalsOlderThan('penguins', 10))

function getEmployeeByName(employeeName) {
  nameEmploy = {};
  if (employeeName === undefined) {
    return {};
  }
  const empregados = data.employees.find((employ) => {
    if (employeeName === employ.firstName) {
      return (nameEmploy = employ.id);
    } else if (employeeName === employ.lastName) {
      return (nameEmploy = employ.id);
    }
  });
  return empregados;
}
//console.log(getEmployeeByName('Emery'))

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

//referencia para resolver o exercicio em https://www.w3schools.com/jsref/jsref_includes_array.asp
function isManager(id) {
  return data.employees.some((emplo) => {
    return emplo.managers.includes(id);
  });
}
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

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
