const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((currentId) => {
    const searchSpeciesByIds = species.find(({ id }) => id === currentId);
    result.push(searchSpeciesByIds);
  });

  return result;
}

function getAnimalsOlderThan(animal, old) {
  const oldAnimals = species.find(({ name }) => name === animal);
  return oldAnimals.residents.every(({ age }) => age >= old);
}

function getEmployeeByName(employeeName) {
  const employeeToSearch = employees.find(
    (currentEmployee) =>
      currentEmployee.firstName === employeeName
      || currentEmployee.lastName === employeeName,
  );

  return employeeToSearch || {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(speciess) {
  return speciess
    ? species.find(({ name }) => name === speciess).residents.length
    : species.reduce((totalBySpecie, { name, residents }) =>
      ({ ...totalBySpecie, [name]: residents.length }),
    {});
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

function filterBySex(aux, sexForFilter) {
  return aux.filter(({sex}) => sex === sexForFilter);
}

function animalMap(animals, sex) {
  species.forEach(({ name, location, residents }) => {
    let aux = [...residents];
    if (sex) {
      aux = filterBySex(aux, sex)
    }
    animals[location].push({ [name]: aux.map((animal) => animal.name)});
  });
}

function sortAnimals(animals) {
  return Object.values(animals).forEach((animal) => {
    animal.forEach((element) => {
      Object.values(element).map((animalForSort) => {
        animalForSort.sort();
      });
    }) 
  });
}

function getAnimalMap({includeNames, sorted, sex} = {}) {
   const map = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  }

  if(!includeNames) {
    species.forEach(({ name, location }) => map[location].push(name));
    return map;
  };

  animalMap(map, sex);

  if (sorted) {
    sortAnimals(map);
  };

  return map;
}
// const options = { includeNames: true, sorted: true };
// console.log(getAnimalMap(options));

function getSchedule(dayName) {
  
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
