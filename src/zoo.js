const { species, employees } = require('./data');
// const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...speciesIds) {
  return speciesIds.map((specieId) => species.find((specie) => specie.id === specieId));
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

function getAnimalsOlderThan(animal, age) {
  const specie = species.find((grup) => grup.name === animal).residents;
  // console.log(specie);
  return specie.every((specieGrup) => specieGrup.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((i) => i.firstName === employeeName || i.lastName === employeeName);
}

// console.log(getEmployeeByName('Emery'));

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

function isManager(id) {
  // return employees.forEach((employee) => (employee.managers.some((managerId) => managerId === id)));
  return employees.some(({ managers }) => managers.includes(id));
  // const managerId = employees.values(employees.managers);
  // console.log(managerId);
  // return managerId;
}

// console.log(isManager());

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function creatingArrayAnimalNames() {
  const array = [];
  species.map((specie) => array.push(specie.name));
  return array;
}

console.log(creatingArrayAnimalNames());

// ^^ funcao de dependecia do countAnimals ^^
function createArrayAnimalCount(array) {
  species.map((specie) => array.push(specie.residents.length));
}
// ^^ funcao de dependecia do countAnimals ^^

function countAnimals(species2) {
  // quando vazio retornar um objeto desse tipo: key = name ; value = residents.length for each
  if (species2 === undefined) {
    const arr = [];
    // creatingArrayAnimalNames(arr);

    // const allAnimaisCount = ;
  } else {
    // resgatar o objeto da specie desejada pelo nome
    const eachSpecie = species.find((specie) => specie.name === species2).residents;
    // retornar o residents.length
    return eachSpecie.length;
  }
}

countAnimals();
// {
//   'lions': 4,
//   'tigers': 2,
//   'bears': 3,
//   'penguins': 4,
//   'otters': 4,
//   'frogs': 2,
//   'snakes': 2,
//   'elephants': 4,
//   'giraffes': 6
// };

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for(index in arrayOfSkills){
//     console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// // /////////////////////////////////////////////////////////////

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
