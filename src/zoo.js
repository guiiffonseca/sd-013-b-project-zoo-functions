const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) return [];
  const array = [];
  ids.forEach((element) => {
    array.push(species.find((string) => string.id === element));
  });
  return array;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  let allAnimalsOlderThan = data.species.find((element2) => element2.name === animal).residents;
  allAnimalsOlderThan = allAnimalsOlderThan.every((element3) => element3.age > age);
  return allAnimalsOlderThan;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const obj = data.employees.find(
    (element4) => element4.firstName === employeeName || element4.lastName === employeeName,
  );
  return obj;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((element5) => {
    const employeeIsManager = element5.managers.some((element6) => element6 === id);
    return employeeIsManager === true;
  });
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(animal) {
  // seu código aqui
  let obj1 = {};
  if (!animal) {
    species.forEach((element7) => {
      obj1[element7.name] = element7.residents.length;
    });
  }
  if (animal) {
    obj1 = species.find((element8) => element8.name === animal).residents.length;
  }
  return obj1;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const price = Object.keys(entrants).reduce((acc, curr) => acc + entrants[curr] * prices[curr], 0);
  return price;
}

function getAnimalRegion() {
  const obj2 = {};
  species.forEach((element9) => {
    if (!obj2[element9.location]) {
      obj2[element9.location] = [element9.name];
    } else {
      obj2[element9.location].push(element9.name);
    }
  });
  return obj2;
}

const sortAndSex = (aNamesArray, objOptions, unknownParameter) => {
  if (objOptions.sex) {
    unknownParameter.residents.filter((animals) => animals.sex === objOptions.sex).forEach(
      (element) => aNamesArray.push(element.name),
    );
  }
  if (!objOptions.sex) {
    unknownParameter.residents.forEach((animals1) => aNamesArray.push(animals1.name));
  }
  if (objOptions.sorted === true) return aNamesArray.sort();
  return aNamesArray;
};

const unamedFunction = (unknownParameter, unamedObj, optionsObj) => {
  let animalNamesArray = [];
  const unamedObj2 = unamedObj;
  animalNamesArray = sortAndSex(animalNamesArray, optionsObj, unknownParameter);
  if (!unamedObj[unknownParameter.location]) {
    unamedObj2[unknownParameter.location] = [{ [unknownParameter.name]: animalNamesArray }];
  } else {
    unamedObj2[unknownParameter.location].push({ [unknownParameter.name]: animalNamesArray });
  }
  return unamedObj2;
};

function getZooResidents(optionsObj) {
  let obj3 = {};
  species.forEach((animalsObject) => {
    obj3 = unamedFunction(animalsObject, obj3, optionsObj);
  });
  return obj3;
}

function getAnimalMap(options) {
  // seu código aqui
  let obj4;
  if (options === undefined || !options.includeNames) return getAnimalRegion();
  if (options.includeNames === true) {
    obj4 = getZooResidents(options);
  }
  return obj4;
}

function getSchedule(dayName) {
  // seu código aqui
  const schedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return schedule;
  return { [dayName]: schedule[dayName] };
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
