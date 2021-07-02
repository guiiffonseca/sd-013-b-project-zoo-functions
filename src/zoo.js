const data = require('./data');

// função auxiliar para getSpeciesByIds. Poderia ficar dentro da função mensionada,
// mas optei por deixar fora para que possa ser usada em outro momento, se necessário
const getSpecieById = (id) => data.species.filter((specie) => (specie.id === id));

function getSpeciesByIds(...ids) {
  // seu código aqui
  // return ids.map((id) => data.species.filter((specie) => (specie.id === id)));
  // o MAP não funcionou, porque retornou um array do array [[{ lista }]]
  return ids.reduce((acc, currentValue) => acc.concat(getSpecieById(currentValue)), []);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const findEmployee = data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return findEmployee === undefined ? {} : findEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  data.employees.push(newEmployee);
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  // O código abaixo funcionou, mas não me deixou contente...
  // let isManagerReturn = false;
  // data.employees.forEach((employee) => {
  //   if (employee.managers.some((manager) => manager === id)) {
  //     isManagerReturn = true;
  //   }
  // });
  // return isManagerReturn;
  // Refatorando o código
  return data.employees
    .map((employee) => employee.managers) // Cria um array com os arrays dos gerentes
    .reduce((acc, currentValue) => acc.concat(currentValue), []) // reduz o array de array para um array sumples
    .some((manager) => manager === id); // Retorna True/False se encontar o gerente
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  // seu código aqui
  // A única forma que encontrei de dar saída em um objeto com as species sendo propriedades dele, foi dessa forma...
  const saida = {};
  data.species.forEach((specie) => {
    saida[specie.name] = specie.residents.length;
  });
  return (species !== undefined)
    ? Object.entries(saida).find((specie) => specie[0] === species)[1] : saida;
}

function calculateEntry(entrants = {}) {
  // seu código aqui
  const { Adult: adult = 0, Child: child = 0, Senior: senior = 0 } = entrants;
  const { Adult: priceAdult, Child: priceChild, Senior: priceSenior} = data.prices;
  return (adult * priceAdult) + (child * priceChild) + (senior * priceSenior);
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
