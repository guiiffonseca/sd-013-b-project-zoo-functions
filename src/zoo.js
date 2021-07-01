const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const species = [];
  ids.forEach((id) => {
    const findSpecie = data.species.find((obj) => obj.id === id);
    species.push(findSpecie);
  });
  return species;
}

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((obj) => obj.name === animal).residents;
  let areOlder = true;
  animals.forEach((indiviual) => {
    console.log(indiviual.age);
    if (indiviual.age < age) areOlder = false;
  });
  return areOlder;
}

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const selectedEmployee = employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
  return selectedEmployee === undefined ? {} : selectedEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const employee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return employee;
}

function isManager(id) {
  const isManagerOf = data.employees.find((emp) => (
    emp.managers.find((man) => man === id)));
  return isManagerOf !== undefined;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(employee);
}

function countAnimals(species) {
  if (species === undefined) {
    const animals = {};
    data.species.forEach((animal) => {
      const quantity = animal.residents.reduce((prev, curr) => prev + 1, 0);
      animals[animal.name] = quantity;
    });
    return animals;
  }
  const animalObj = data.species.find((each) => each.name === species);
  return animalObj.residents.reduce((prev, current) => prev + 1, 0);
}

function calculateEntry(entrants = {}) {
  if (entrants === {}) return 0;
  const ticketPrice = { Adult: 49.99, Child: 20.99, Senior: 24.99 };
  const entrantsEntries = Object.entries(entrants);
  let payOff = 0;
  entrantsEntries.forEach((age) => {
    payOff += ticketPrice[age[0]] * age[1];
  });
  return payOff;
}

function animalSexFilter(animal, sex) {
  if (animal.sex === sex || sex === undefined) {
    return animal.name;
  }
}

function sortAnimalFilter(sort, animalNameList) {
  if (sort) animalNameList.sort();
}

function getAnimalMap(options = {}) {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((animal) => {
    if (options.includeNames) {
      const animalName = animal.name;
      const obj = {};
      const animalNameList = [];
      animal.residents.forEach((element) => {
        const checkSex = animalSexFilter(element, options.sex);
        if (checkSex !== undefined) animalNameList.push(checkSex);
      });
      sortAnimalFilter(options.sorted, animalNameList);
      obj[animalName] = animalNameList;
      map[animal.location].push(obj);
    } else {
      map[animal.location].push(animal.name);
    }
  });
  return map;
}

function hourHumanfy(hourObj) {
  console.log(hourObj);
  const open = hourObj[1].open > 12 ? `${hourObj[1].open - 12}pm` : `${hourObj[1].open}am`;
  const close = hourObj[1].close > 12 ? `${hourObj[1].close - 12}pm` : `${hourObj[1].close}am`;
  if (open === close) return 'CLOSED';
  return `Open from ${open} until ${close}`;
}

function getSchedule(dayName) {
  const scheduleDays = dayName === undefined
    ? Object.entries(data.hours)
    : [[dayName, data.hours[dayName]]];
  const scheduleDaysRead = {};
  scheduleDays.forEach((day) => {
    scheduleDaysRead[day[0]] = hourHumanfy(day);
  });
  return scheduleDaysRead;
}

function getOldestFromFirstSpecies(id) {
  const selectedEmployee = data.employees.filter((employee) => employee.id === id)[0];
  const firstSpeciesId = selectedEmployee.responsibleFor[0];
  const firstSpeciesAnimal = data.species.filter((animal) => animal.id === firstSpeciesId)[0];
  const firstOlder = firstSpeciesAnimal.residents.reduce((bigger, curr) => (
    bigger.age > curr.age ? bigger : curr
  ), 0);
  return [firstOlder.name, firstOlder.sex, firstOlder.age];
}

function increasePrices(percentage) {
  const defaultPrices = data.prices;
  const newPrices = {
    Adult: Math.round(defaultPrices.Adult * (1 + percentage / 100) * 100) / 100,
    Senior: Math.round(defaultPrices.Senior * (1 + percentage / 100) * 100) / 100,
    Child: Math.round(defaultPrices.Child * (1 + percentage / 100) * 100) / 100,
  };
  data.prices = newPrices;
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
