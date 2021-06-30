const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const { species } = data;
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { species } = data;
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const { employees } = data;
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName)
    || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const { employees } = data;
  return !!employees.find(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const { employees } = data;
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  // seu código aqui
  const { species: allSpecies } = data;
  return species ?
    allSpecies.find(({ name }) => name === species).residents.length :
    allSpecies.reduce((speciesCounter, { name, residents }) => ({ ...speciesCounter, [name]: residents.length }), {});
}

function calculateEntry({ Adult = 0, Child = 0 , Senior = 0 } = {}) {
  // seu código aqui
  const { prices } = data;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

function getAnimalMap({ includeNames = false, sorted = false, sex = '' } = {}) {
  // seu código aqui
  const { species } = data;
  return species.reduce((animalMap, { name, location, residents }) => {
    !animalMap[location] && (animalMap[location] = []);
    includeNames ?
      animalMap[location]
        .push({
          [name]: sorted ?
            residents
              .filter(({ sex: resSex }) => sex === '' || resSex === sex)
              .map(({ name }) => name)
              .sort() :
            residents
              .filter(({ sex: resSex }) => sex === '' || resSex === sex)
              .map(({ name }) => name),
        }) :
      animalMap[location].push(name);
    return animalMap;
  }, {});
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
