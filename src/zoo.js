const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids === undefined) return [];
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specieSelected = species.find(({ name }) => name === animal);
  const animmalsSelected = specieSelected.residents;
  return animmalsSelected.every((animmalSelected) => animmalSelected.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(idParam) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(idParam));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesParam) {
  // seu código aqui
  if (!speciesParam) {
    const output = {};
    species.forEach((specie) => {
      output[specie.name] = specie.residents.length;
    });
    return output;
  }
  const specieSelected = species.find((specie) => speciesParam === specie.name);
  return specieSelected.residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

const animalsByRegions = () => {
  const speciesByRegion = {};
  const regions = ['NE', 'NW', 'SE', 'SW'];
  regions.forEach((region) => {
    const nameSpecies = species
      .filter(({ location }) => location === region)
      .map(({ name }) => name);
    speciesByRegion[region] = nameSpecies;
  });
  return speciesByRegion;
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return animalsByRegions();
  }
  const { includeNames = false, sorted = false, sex = 'female' } = options;

}

console.log(species.find(({ name }) => name === 'lions'));

function getSchedule(dayName) {
  // seu código aqui
  if (!dayName) {
    return Object.entries(hours).reduce((acc, [day, hourOpening]) => {
      if (day === 'Monday') {
        acc[day] = 'CLOSED';
        return acc;
      }
      acc[day] = `Open from ${hourOpening.open}am until ${hourOpening.close - 12}pm`;
      return acc;
    }, {});
  }
  const hourSelected = {};
  const [daySelected, hourOpening] = Object.entries(hours).find((day) => day[0] === dayName);
  if (dayName !== 'Monday') {
    hourSelected[daySelected] = `Open from ${hourOpening.open}am until ${hourOpening.close - 12}pm`;
    return hourSelected;
  }
  return { Monday: 'CLOSED' };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeSelected = employees.find((employee) => id === employee.id);
  const idAnimal = employeeSelected.responsibleFor[0];
  const specieSelected = species.find((specie) => idAnimal === specie.id);
  let oldestAnimal = specieSelected.residents[0];
  specieSelected.residents.forEach((animal) => {
    if (animal.age > oldestAnimal.age) {
      oldestAnimal = animal;
    }
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

function increasePrices(percentage) {
  // seu código aqui
  const arrayOfPrices = [];
  const arrayPrices = Object.values(data.prices);
  arrayPrices.forEach((element) => arrayOfPrices.push(element + element * (percentage / 100)));
  const [adult, senior, child] = arrayOfPrices;
  data.prices.Adult = Math.round(adult * 100) / 100;
  data.prices.Senior = Math.round(senior * 100) / 100;
  data.prices.Child = Math.round(child * 100) / 100;
}

function getEmployeeCoverage(idOrName) {
  const employeesAndFunctions = {};
  if (!idOrName) {
    employees.forEach((employee) => {
      // employeesAndFunctions[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor.map((id) => )
      const idsAnimals = employee.responsibleFor;
      const animals = species
        .filter(({ id }) => idsAnimals.includes(id))
        .map(({ name }) => name);
      employeesAndFunctions[`${employee.firstName} ${employee.lastName}`] = animals;
    });
    return employeesAndFunctions;
  }
  const employeeSelected = employees.find(({ id, firstName, lastName }) => idOrName === id || idOrName === firstName || idOrName === lastName);
  const idsAnimals = employeeSelected.responsibleFor;
  const animals = species
    .filter(({ id }) => idsAnimals.includes(id))
    .map(({ name }) => name);
  employeesAndFunctions[`${employeeSelected.firstName} ${employeeSelected.lastName}`] = animals;
  return employeesAndFunctions;
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
