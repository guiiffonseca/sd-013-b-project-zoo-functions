const data = require('./data');

const { species, employees } = data;

// species[0].residents[0].age;
// Array.isArray(species.find((specie) => specie.name === animal));
// |======| RETORNOS |======|
// filter, map, sort -> array
// some, every -> boolean
// find -> object

// Função que ordena objetos
// fonte: https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

const sortObject = (object) => Object.fromEntries(
  Object.entries(object).sort((a, b) => (a > b ? 1 : -1)),
);

const limitDecimals = (expresssion, amountDecimals) =>
  Number(parseFloat(expresssion).toFixed(amountDecimals));

const alreadyExistsInDataBase = (employeeId) => employees.some(({ id }) => id === employeeId);

// ------------------------------------------------------------------------------------ //

const getSpeciesByIds = (...idSpecies) =>
  idSpecies.map((id) => species.find((specie) => specie.id === id));

const getAnimalsOlderThan = (animal, age) => species.find((specie) => specie.name === animal)
  .residents.every((resident) => resident.age >= age);

const getEmployeeByName = (...employeeName) => (employeeName.length !== 0 ? employees
  .find((employee) => `${employee.firstName} ${employee.lastName}`
    .includes(employeeName.join())) : {});

const createEmployee = (personalInfo, associatedWith) => {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
};

const isManager = (id) =>
  employees.some((employee) => employee.managers[0] === id);

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  if (!alreadyExistsInDataBase(id)) {
    const obj = { id, firstName, lastName, managers, responsibleFor };
    employees.push(obj);
  } return 'Already exists an employee with this id !';
};

const getAnimalsAmountByName = (animalName) => species
  .reduce((acc, { name, residents }) => (name === animalName ? residents.length : acc), 0);

const countAnimals = (spcName) => {
  if (spcName) {
    return getAnimalsAmountByName(spcName);
  }
  const resp = {};
  const names = species
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map(({ name }) => name);
  names.forEach((element) => {
    resp[`${element}`] = getAnimalsAmountByName(element);
  });
  return resp;
};

const calcValues = (amount, type) => {
  let multiplier;
  switch (type) {
  case 'Adult':
    multiplier = 49.99;
    break;
  case 'Senior':
    multiplier = 24.99;
    break;
  case 'Child':
    multiplier = 20.99;
    break;
  default: multiplier = 1;
    break;
  }
  return amount * multiplier;
};

const calculateEntry = (entrants) => {
  if (!entrants || (typeof entrants === 'object' && Object.keys(entrants).length === 0)) {
    return 0;
  }
  return Object.entries(entrants).reduce((acc, item) => acc + calcValues(item[1], item[0]), 0);
};

const getAnimalsResidentsByName = () => {
  const animalsResidentsByName = {};
  species.forEach((item) => {
    const animals = species.find(({ name }) => name === item.name)
      .residents.map(({ name }) => name).sort();
    animalsResidentsByName[item.name] = animals;
  });
  return sortObject(animalsResidentsByName);
};

const getAnimalsByLocation = () => {
  const animalsByLocation = {};
  species.forEach((item) => {
    const animals = species.filter(({ location }) => location === item.location)
      .map(({ name }) => name);
    animalsByLocation[item.location] = animals;
  });
  return sortObject(animalsByLocation);
};

// console.log(getAnimalsResidentsByName());
// console.log(getAnimalsByLocation());

function getAnimalMap(...params) {
  const { includeNames = false, sorted = false, sex } = params;
  if (!includeNames) {
    return getAnimalsByLocation();
  }
}

getAnimalMap({ includeNames: true, sorted: true });

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
  // countAnimals,
  // getAnimalMap,
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
