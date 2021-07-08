const data = require('./data');

const { species, employees, prices, hours } = data;

// species[0].residents[0].age;
// Array.isArray(species.find((specie) => specie.name === animal));
// |======| RETORNOS |======|
// filter, map, sort -> array
// some, every -> boolean
// find -> object

// Função que ordena objetos
// fonte: https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

// const sortObject = (object) => Object.fromEntries(
//   Object.entries(object).sort((a, b) => (a > b ? 1 : -1)),
// );

// const limitDecimals = (expresssion, amountDecimals) =>
//   Number(parseFloat(expresssion).toFixed(amountDecimals));
const converter = (number) => Math.ceil(number * 100) / 100;

const alreadyExistsInDataBase = (employeeId) => employees.some(({ id }) => id === employeeId);

const calcValues = (amount, type) => {
  let multiplier;
  switch (type) {
  case 'Adult':
    multiplier = prices.Adult;
    break;
  case 'Senior':
    multiplier = prices.Senior;
    break;
  case 'Child':
    multiplier = prices.Child;
    break;
  default: multiplier = 1;
    break;
  }
  return amount * multiplier;
};

const scheduleList = (dayName, element) => {
  const schedule = {};
  const msg = `Open from ${element[1].open}am until ${element[1].close - 12}pm`;
  schedule[element[0]] = dayName === 'Monday' ? 'CLOSED' : msg;
  return schedule;
};

const scheduleRow = () => {
  const schedule = {};
  Object.entries(hours).forEach((element) => {
    const msg = `Open from ${element[1].open}am until ${element[1].close - 12}pm`;
    schedule[element[0]] = element[0] === 'Monday' ? 'CLOSED' : msg;
  });
  return schedule;
};

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
  const animalsListAmount = {};
  const names = species
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map(({ name }) => name);
  names.forEach((element) => {
    animalsListAmount[element] = getAnimalsAmountByName(element);
  });
  return animalsListAmount;
};

const calculateEntry = (entrants) => {
  if (!entrants || (typeof entrants === 'object' && Object.keys(entrants).length === 0)) {
    return 0;
  }
  return Object.entries(entrants).reduce((acc, item) => acc + calcValues(item[1], item[0]), 0);
};

/* const getAnimalsResidentsByName = () => {
  const animalsResidentsByName = {};
  species.forEach((item) => {
    const animals = species.find(({ name }) => name === item.name)
      .residents.map(({ name }) => name).sort();
    animalsResidentsByName[item.name] = animals;
  });
  return sortObject(animalsResidentsByName);
};

const locationFilter = (item) => species.filter(({ location }) => location === item.location);

const getAnimalsByLocation = () => {
  const animalsByLocation = {};
  species.forEach((item) => {
    const animals = locationFilter(item).map(({ name }) => name);
    const names = locationFilter(item).map(({ residents }) => residents.length);
    animalsByLocation[item.location] = names;
  });
  return sortObject(animalsByLocation);
}; */

// console.log(getAnimalsResidentsByName());
// console.log(getAnimalsByLocation());

/* function getAnimalMap(...params) {
  if (params.length !== 0) {
      return getAnimalsByLocation();
    }
  //   console.log(params.length);
  //   console.log(params);
  // console.log(Object.entries(params[0]));
} */

// console.log(getAnimalMap({ includeNames: true, sex: 'male', sorted: true }));
// console.log(getAnimalMap());

function getSchedule(dayName) {
  if (!dayName) {
    return scheduleRow();
  }
  const objectRow = Object.entries(hours).find((name) => name[0] === dayName);
  return scheduleList(dayName, objectRow);
}

function getOldestFromFirstSpecies(id) {
  const idFisrtSpecie = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animalsList = species.filter((specie) => specie.id === idFisrtSpecie)
    .map((item) => item.residents)
    .reduce((acc, item) => acc + item);
  return Object.values(animalsList
    .sort((a, b) => b.age - a.age)
    .filter((_item, index) => index === 0)
    .reduce((acc, item) => acc + item));
}

function increasePrices(percentage) {
  Object.entries(prices).forEach((element) => {
    prices[element[0]] = ((converter((element[1]) * (converter(percentage) / 100) + element[1])));
  });
  return prices;
}

const getAnimalsByEmployee = (idByEmployee) => {
  const list = [];
  idByEmployee.forEach((element) => {
    list.push(species
      .reduce((acc, { id, name }) => (id === element || name === element ? name : acc)));
  });
  return list;
};

const getEmployeeCoverage = (idOrName) => {
  let aux = '';
  const idFilter = employees.filter(({ id }) => id === idOrName);
  const nameFilter = employees.filter(({ firstName, lastName }) => `${firstName} ${lastName}`
    .includes(idOrName));
  if (idFilter.length !== 0) {
    aux = idFilter;
  } else aux = nameFilter;
  // console.log(aux);
  const animalIdsArray = getAnimalsByEmployee(aux.map(({ responsibleFor }) => responsibleFor)
    .reduce((acc, item) => acc + item));
  return animalIdsArray;
};

// console.log(getEmployeeCoverage('Elser'));
// console.log(getAnimalsByEmployee(getEmployeeCoverage('Azevado')));

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
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
