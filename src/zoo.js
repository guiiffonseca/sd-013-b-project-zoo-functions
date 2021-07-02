const { species, employees, hours, prices } = require('./data');

function getSpeciesByIds(...ids) {
  // const [firstId, secondId] = ids;
  // const specieOfFirstId = data.species.filter((specie) => specie.id === firstId);
  // const specieOfSecondId = data.species.filter((specie) => specie.id === secondId);
  // const speciesByIds = [...specieOfFirstId, ...specieOfSecondId];
  // return speciesByIds;
  // Usei como referência o projeto do Rafael Nery Machado na modificação da função para uma versão mais compacta
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((Animal) => Animal.name === animal)
    .residents.every((foundAnimal) => foundAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  // if (typeof employeeName !== 'string') {
  //   return {};
  // }
  // Usei como referência o projeto do Rafael Nery Machado na modificação da função para uma versão mais compacta
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName || {});
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui.
  // const { id, firstName, lastName } = personalInfo;
  // const { managers, responsibleFor } = associatedWith;
  // const newEmployee = (employeeId,
  //   employeeIdFirstName, employeeIdlastName,
  //   employeeIdmanagers, employeeIdresponsibleFor) => ({
  //   id,
  //   firstName,
  //   lastName,
  //   if (associatedWith === undefined) {
  //     managers,
  //     responsibleFor,
  //   }
  // });
  // return newEmployee(id, firstName, lastName, managers, responsibleFor);
  // Usei como referência o projeto do Rafael Nery Machado na modificação da função para uma versão mais compacta
  return { ...personalInfo, ...associatedWith };
}

// function flatten(arrays) {
//   // Função auxiliar que transforma uma matriz em um vetor
//   return arrays.reduce((accumulator, currentValue) => {
//     for (let i = 0; i < currentValue.length; i += 1) {
//       accumulator.push(currentValue[i]);
//     }
//     return accumulator;
//   });
// }

function isManager(id) {
  // seu código aqui
  // const managers = data.employees.map((person) => person.managers);
  // return flatten(managers).some((manager) => manager === id);
  // Usei como referência o projeto do Rafael Nery Machado na modificação da função para uma versão mais compacta
  // Outra referencia - https://brianflove.com/2014-09-02/whats-the-double-exclamation-mark-for-in-javascript/#:~:text=If%20you%20have%20ever%20noticed,(true%20or%20false)%20value.
  return !!employees.find(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(Specie) {
  // seu código aqui
  const animalsQtd = {};
  species.forEach((animal) => { animalsQtd[animal.name] = animal.residents.length; });
  if (!Specie) {
    return animalsQtd;
  }
  return animalsQtd[Specie];
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || entrants === {}) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (Adult * prices.Adult + Senior * prices.Senior + Child * prices.Child);
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
