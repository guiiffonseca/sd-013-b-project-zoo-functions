const data = require("./data");

const { species, employees } = data;

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((specie) => specie.id === id));
  // rest transforma em um array
  // map criou outro array
  // para tirar um único e determinado elemento do array usei o find
}

function getAnimalsOlderThan(animal, age) {
  const residentAges = data.species.find(
    (specie) => specie.name === animal
  ).residents;
  return residentAges.every((resident) => resident.age >= age);
  // data é objeto, .species retorna array.
  // Fiz este requisito acompanhando o raciocinio do Nikolai no plantão do Panta no dia 30/06.
}

function getEmployeeByName(employeeName) {
  // Inspirado em Code Review do Rafael Nery Machado
  // entender melhor a desestruturacao
  const { employees } = data;
  // console.log(employees);
  return (
    employees.find(
      ({ firstName, lastName }) =>
        firstName === employeeName || lastName === employeeName
    ) || {}
  );
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // o some percorre cada funcionario
  // executado acompanhando mentoria do Cajueiro dia 1.
  // fiz destructuring no managers para fazer
  // verificacao se inclui o id passado pela funcao.
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // executado acompanhando mentoria do Cajueiro dia 1.
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor
  });
}

function countAnimals(speciesPar) {
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
