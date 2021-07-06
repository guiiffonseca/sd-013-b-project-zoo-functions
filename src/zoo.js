const data = require('./data');

const { species, employees, prices, hours } = data;
const byLocation = {};

function getSpeciesByIds(...params) {
  // seu código aqui
  return species.filter((specie) => params.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.filter((specie) => specie.name === animal)[0]
    .residents.every(({ age: ageSpecie }) => ageSpecie > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName)
    || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees[employees.length] = { id, firstName, lastName, managers, responsibleFor };
  return employees;
}

function countAnimals(speciess) {
  // seu código aqui
  if (!speciess) {
    return species.reduce((accumulator, correntValue) => {
      accumulator[correntValue.name] = correntValue.residents.length;
      return accumulator;
    }, { });
  }

  return species.find(({ name }) => name === speciess).residents.length;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult: adult = 0, Senior: senior = 0, Child: child = 0 } = entrants;
  const { Adult, Senior, Child } = prices;
  return Adult * adult + Senior * senior + Child * child;
}

// função que retorna animais categorizados por localização
const animaBaylLocation = (animalLocation) => {
  const arrayByName = [];
  species.map(({ name, location }) => {
    if (animalLocation === location) {
      arrayByName.push(name);
    }
    return undefined;
  });
  byLocation[animalLocation] = arrayByName;
  return byLocation;
};

// Com a opção `includeNames: true` e `sorted: true`(opcional) especificada, retorna nomes de animais'
const animalBayName = (animalLocation, sorted) => {
  const arrayByName = [];
  species.map(({ name, location, residents }) => {
    const nameAnimal = {};
    if (animalLocation === location && sorted === false) {
      nameAnimal[name] = residents.map((resident) => resident.name);
      arrayByName.push(nameAnimal);
    }
    if (animalLocation === location && sorted === true) {
      nameAnimal[name] = residents.map((resident) => resident.name).sort();
      arrayByName.push(nameAnimal);
    }
    return undefined;
  });
  byLocation[animalLocation] = arrayByName;
  return byLocation;
};

// Com a opção `sex: \'female\'` ou `sex: \'male\'` especificada e a opção `sort: true`(opcional) especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados
const animalBaysex = (animalLocation, sorted, animalSex) => {
  const arrayBySex = [];
  species.map(({ name, location, residents }) => {
    const sexAnimal = {};
    if (animalLocation === location && sorted === true) {
      sexAnimal[name] = residents.filter(({ sex }) => sex === animalSex)
        .map((residentName) => residentName.name).sort();
      arrayBySex.push(sexAnimal);
    }
    if (animalLocation === location && sorted === false) {
      sexAnimal[name] = residents.filter(({ sex }) => sex === animalSex)
        .map((residentName) => residentName.name);
      arrayBySex.push(sexAnimal);
    }
    return undefined;
  });
  byLocation[animalLocation] = arrayBySex;
  return byLocation;
};

// cria novo catalago
const newCatalog = (callback, sorted, sex) => {
  species.map(({ location }) => callback(location, sorted, sex));
  return byLocation;
};

//-------------------------------------------------------------------------
const sortedOn = (options) => {
  if (options.sex === 'female' || options.sex === 'male') {
    return newCatalog(animalBaysex, true, options.sex);
  }
  return newCatalog(animalBayName, true, options.sex);
};

const sortedOff = (options) => {
  if (options.sex === 'female' || options.sex === 'male') {
    return newCatalog(animalBaysex, false, options.sex);
  }
  return newCatalog(animalBayName, false);
};
//---------------------------------------------------------------------------

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) {
    return newCatalog(animaBaylLocation);
  }
  if (options.sorted) return sortedOn(options);
  if (!options.sorted) return sortedOff(options);
}

function getSchedule(dayName) {
  // seu código aqui
  const schedule = {};
  Object.entries(hours)
    .forEach((element) => {
      if (element[1].close !== 0) {
        schedule[element[0]] = (`Open from ${element[1].open}am until ${element[1].close - 12}pm`);
      } else schedule[element[0]] = 'CLOSED';
    });
  if (Object.keys(hours).includes(dayName)) {
    const SelectSchedule = {};
    SelectSchedule[dayName] = schedule[dayName];
    return SelectSchedule;
  }
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const getIdAnimal = employees.find((element) => element.id === id).responsibleFor[0];
  const getResidents = species.find((element) => element.id === getIdAnimal).residents;
  const maxAge = getResidents.map(({ age }) => age).reduce((a, b) => Math.max(a, b));
  return Object.values(getResidents.find(({ age }) => age === maxAge));
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Child, Senior } = prices;
  prices.Adult = +(Math.round((Adult + Adult * (percentage / 100)) * 100) / 100).toFixed(2);
  prices.Child = +(Math.round((Child + Child * (percentage / 100)) * 100) / 100).toFixed(2);
  prices.Senior = +(Math.round((Senior + Senior * (percentage / 100)) * 100) / 100).toFixed(2);
}

const employeeList = () => {
  const employeesZoo = employees.reduce((accumulator, currentValue) => {
    accumulator[`${currentValue.firstName} ${currentValue.lastName}`] = currentValue.responsibleFor
      .map((element) => species.find(({ id }) => id === element).name);
    return accumulator;
  }, {});
  return employeesZoo;
};

const employee = (idOrName) => {
  const employeeZoo = employees.reduce((accumulator, currentValue) => {
    if (
      currentValue.firstName === idOrName
      || currentValue.lastName === idOrName
      || currentValue.id === idOrName
    ) {
      accumulator[`${currentValue.firstName} ${currentValue.lastName}`] = currentValue
        .responsibleFor.map((element) => species.find(({ id }) => id === element).name);
    }
    return accumulator;
  }, {});
  return employeeZoo;
};

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  if (idOrName) return employee(idOrName);
  if (!idOrName) return employeeList();
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
