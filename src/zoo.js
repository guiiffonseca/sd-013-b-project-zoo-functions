const { species } = require('./data');
const { employees } = require('./data');
const { prices } = require('./data');
const { hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => id === specie.id) === true);
}

function getAnimalsOlderThan(animal, age) {
  const selectedSpecie = species.find((specie) => specie.name === animal);
  return selectedSpecie.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  const array = employees.filter((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return array[0] !== undefined ? array[0] : {};
}

function createEmployee(personalInfo, associatedWith) {
  // personalInfo = {id, firstName, lastName}
  // associatedWith = {managers, responsibleFor}
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  let boolean = false;
  const mg1 = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const mg2 = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const mg3 = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  if (id === mg1 || id === mg2 || id === mg3) {
    boolean = true;
  }
  return boolean;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
  if (managers === undefined) {
    employees[employees.length - 1].managers = [];
  }
  if (responsibleFor === undefined) {
    employees[employees.length - 1].responsibleFor = [];
  }
}

function countAnimals(animal) {
  const check = animal;
  let output;
  if (check !== undefined) {
    const givenAnimalArray = species.filter((specie) => specie.name === animal);
    output = givenAnimalArray[0].residents.length;
  } else {
    output = {};
    species.forEach((specie) => {
      const amount = specie.residents.length;
      const { name } = specie;
      output[name] = amount;
    });
  }
  return output;
}

function calculateEntry(entrants) {
  let output;
  if (entrants === undefined || entrants === {}) {
    output = 0;
  } else {
    let adult;
    let child;
    let senior;
    entrants.Adult !== undefined ? adult = entrants.Adult : adult = 0;
    entrants.Child !== undefined ? child = entrants.Child : child = 0;
    entrants.Senior !== undefined ? senior = entrants.Senior : senior = 0;
    output = (adult * prices.Adult) + (child * prices.Child) + (senior * prices.Senior);
  }
  return output;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  let object = {};
  let output;
  object['Tuesday'] = `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`;
  object['Wednesday'] = `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`;
  object['Thursday'] = `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`;
  object['Friday'] = `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`;
  object['Saturday'] = `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`;
  object['Sunday'] = `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`;
  object['Monday'] = `CLOSED`;
  if (dayName === undefined) {
    output = object;
  } else {
    output = {};
    output[dayName] = object[dayName];
  }
  return output;
}

function getOldestFromFirstSpecies(id) {
  const employeeInfo = employees.find((employee) =>
    employee.id === id
  );
  const animalId = employeeInfo.responsibleFor[0];
  const specieObject = species.find((specie) =>
    specie.id === animalId
  );
  const animalsArray = specieObject.residents;
  const ageArray = [];
  animalsArray.forEach((animal) => { ageArray.push(animal.age) });
  const sortedAgeArray = ageArray.sort((a, b) => a - b);
  const oldestAnimal = sortedAgeArray[sortedAgeArray.length - 1];
  const oldestAnimalObject = animalsArray.find((animal) =>
    animal.age === oldestAnimal
  );
  return [ oldestAnimalObject.name, oldestAnimalObject.sex, oldestAnimalObject.age ];
}

// A função round foi obtida através do link abaixo:
// https://pt.stackoverflow.com/questions/114740/como-arredondar-com-2-casas-decimais-no-javascript-utilizando-uma-regra-espec%C3%ADfi
var round = (number, digits) => {
  digits = typeof digits !== 'undefined' ?  digits : 2;
  return +(Math.floor(number + ('e+' + digits)) + ('e-' + digits));
};

function increasePrices(percentage) {
  if (percentage !== undefined) {
    prices.Adult = round(prices.Adult + (prices.Adult / 100 * percentage) + 0.01, 2);
    prices.Senior = round(prices.Senior + (prices.Senior / 100 * percentage) + 0.01, 2);
    prices.Child = round(prices.Child + (prices.Child / 100 * percentage) + 0.01, 2);
  }
}

function getEmployeeCoverage(idOrName) {
  const output = {};
  if (idOrName === undefined) {
    const namesArray = [];
    const animalsArrayOfArrays = [];
    employees.forEach((employee) => {
      namesArray.push(`${employee.firstName} ${employee.lastName}`);
      const animalsArray = [];
      employee.responsibleFor.forEach((animalId) => {
        const animalObject = species.find((specie) => specie.id === animalId);
        animalsArray.push(animalObject.name);
      });
      animalsArrayOfArrays.push(animalsArray);
    });
    namesArray.forEach((employeeName, index) => {
      output[employeeName] = animalsArrayOfArrays[index];
    });
  } else {
    const employeeObject = employees.find((employee) =>
      employee.id == idOrName || employee.firstName == idOrName || employee.lastName == idOrName
    );
    const animalsArray = [];
    employeeObject.responsibleFor.forEach((animalId) => {
      const animalObject = species.find((specie) => specie.id === animalId);
      animalsArray.push(animalObject.name);
    });
    output[`${employeeObject.firstName} ${employeeObject.lastName}`] = animalsArray;
  }
  return output;
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
