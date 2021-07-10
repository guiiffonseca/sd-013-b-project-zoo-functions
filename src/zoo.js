const { species, employees, hours } = require("./data");
const data = require("./data");

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((param) => param.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((spec) => spec.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  return (
    employees.find(
      ({ firstName, lastName }) =>
        firstName === employeeName || lastName === employeeName
    ) || {}
  );
}
// nesta função caso o return não satisfaça a condição passada pelo find retorna automagicamente  o array vazio.

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return !!employees.find(({ managers }) => managers.includes(id));
}
//  o find nesta função busca e retorna o elemento ou undefined, logo em seguida o includes vai verificar e retornar true ou false.

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = []
) {
  const newObj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newObj);
}

function countAnimals(speciesAgain) {
  const createObj = {};
  data.species.forEach((spec) => {
    createObj[spec.name] = spec.residents.length;
  });
  if (!speciesAgain) {
    return createObj;
  }
  const getIndividual = Object.entries(createObj).find(
    (element) => element[0] === speciesAgain
  );
  return getIndividual[1];
}

function makeCalc(entrantsAgain) {
  const { Adult, Child, Senior } = data.prices;
  const {
    Adult: adultEntrant = 0,
    Child: childEntrant = 0,
    Senior: seniorEntrant = 0,
  } = entrantsAgain;
  const getTotalValue =
    Adult * adultEntrant + Child * childEntrant + Senior * seniorEntrant;
  return getTotalValue;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  return makeCalc(entrants);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const days = Object.keys(hours);
  const newObj = {};
  days.forEach((day) => {
    if (hours[day].open === 0) {
      newObj[day] = 'CLOSED';
    } else {
      newObj[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    }
  });

  if (!dayName) {
    return newObj;
  }
  return { [dayName]: newObj[dayName] };
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
