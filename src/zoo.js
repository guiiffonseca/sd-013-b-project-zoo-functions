const { species, employees } = require('./data');

const data = require('./data');
// ----------- REQUISITO 01 ----------- //
const getSpeciesByIds = (...rest) => species.filter((especie) => rest.includes(especie.id));
// 1.Utilizado como parâmetro o (...rest), para possiilitar a entrega de mais de um parâmetro.
// 2. Filtrado todas as espécies que fazem do parâmetro passado.
// 3. Verificado se as espécies contém o id passado.
// ----------- REQUISITO 02 ----------- //
const getAnimalsOlderThan = (animal, age) =>
  species.find((especie) => especie.name === animal)
    .residents.every((elemento) => elemento.age >= age);
// ----------- REQUISITO 03 ----------- //
const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return employees.find((nome) =>
    (nome.firstName === employeeName || nome.lastName === employeeName));
};
// ----------- REQUISITO 04 ----------- //
const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });
// ----------- REQUISITO 05 ----------- //
const isManager = (id) => employees.some(({ managers }) => managers.includes(id));
// ----------- REQUISITO 06 ----------- //
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciess) {
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
