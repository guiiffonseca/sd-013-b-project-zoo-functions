const { employees, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const getSpecies = [];
  ids.forEach((id) => {
    getSpecies.push(data.species.find((specimen) => specimen.id === id));
  });
  return getSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const selectedAnimal = data.species.find((specimen) => specimen.name === animal);
  return selectedAnimal.residents.every((specimenAge) => specimenAge.age >= age);
}

function getEmployeeByName(employeeName) {
  const emList = employees;
  if (employeeName === undefined) {
    return {};
  }
  return emList.find((emp) => (emp.firstName === employeeName || emp.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    return data.species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
  }
  return data.species.find((specimen) => specimen.name === species).residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  const price = data.prices;
  const totalValue = (Adult * price.Adult) + (Child * price.Child) + (Senior * price.Senior);
  return totalValue;
}

function getAnimalMap(options) {
  // const animalLocations = { NE: [], NW: [], SE: [], SW: [] };
  // if (!options) {
  //   for (let [key, value] of Object.entries(animalLocations)) {
  //     data.species.forEach((specimen) => {
  //       if (specimen.location === key) {
  //         value.push(specimen);
  //       };
  //     });
  //   }
  // }

}

function getSchedule(dayName = '') {
  const formatHour = (hr) => (hr % 12) || 12;
  const ans = {};
  Object.keys(hours).forEach((day) => {
    ans[day] = `Open from ${formatHour(hours[day].open)}am until ${formatHour(hours[day].close)}pm`;
    if (day === 'Monday') ans[day] = 'CLOSED';
  });

  if (dayName) {
    return { [dayName]: ans[dayName] };
  }
  return ans;
}

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((emp) => emp.id === id);
  const animals = data.species.find((anm) => anm.id === employee.responsibleFor[0]);
  const oldest = animals.residents.sort((anm1, anm2) => anm1.age - anm2.age).reverse()[0];
  return Object.values(oldest);
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
