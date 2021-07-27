const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const { species } = data;
  return ids.reduce((array, targetId) => [...array, species.find(({ id }) => targetId === id)], []);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const filteredAnimals = data.species.find(({ name }) => (name === animal));
  return filteredAnimals.residents.every(({ age: AGE }) => AGE >= age);
}

function getEmployeeByName(name) {
  // seu código aqui
  const findEmployee = ({ firstName, lastName }) => firstName === name || lastName === name;
  const employee = data.employees.find(findEmployee);
  return (employee !== undefined ? employee : {});
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.reduce((managerState, employee) => {
    const state = employee.managers.some((managerId) => managerId === id) ? true : managerState;
    return state;
  }, false);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  console.log(newEmployee);
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  // seu código aqui
  if (species !== undefined) {
    const filterdSpecie = data.species.find(({ name }) => (name === species));
    return filterdSpecie.residents.length;
  }
  const arrayCountAnimals = data.species.map(({ name, residents }) => [name, residents.length]);
  return Object.fromEntries(arrayCountAnimals);
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  // seu código aqui
  return (Adult * 49.99 + Child * 20.99 + Senior * 24.99);
}

function getAnimalMap({ includeNames = false, sorted = false, sex = '' } = {}) {
  // seu código aqui
}

const readeableSchedule = ({ open, close }) => (open === close
  ? 'CLOSED'
  : `Open from ${open}am until ${close - 12}pm`);

function getSchedule(dayName) {
  // seu código aqui
  const { hours } = data;
  return dayName !== undefined
    ? { [dayName]: readeableSchedule(hours[dayName]) }
    : Object.keys(hours).reduce((acc, day) => ({ ...acc,
      [day]: readeableSchedule(hours[day]) }), {});
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstFind = data.employees.find(({ id: currentId }) => currentId === id).responsibleFor[0];
  const oldestSpecie = data.species.find(({ id: currentId }) => currentId === firstFind).residents
    .reduce((oldest, animal) => (animal.age > oldest.age
      ? animal : oldest));
  return Object.values(oldestSpecie);
}

function increasePrices(percentage) {
  // seu código aqui
  data.prices.Adult = Math.ceil(data.prices.Adult * (100 + percentage)) / 100;
  data.prices.Senior = Math.ceil(data.prices.Senior * (100 + percentage)) / 100;
  data.prices.Child = Math.ceil(data.prices.Child * (100 + percentage)) / 100;
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
