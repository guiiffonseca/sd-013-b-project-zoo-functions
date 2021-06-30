const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  } return data.species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const arrayAnimal = data.species.filter((specie) => specie.name === animal);
  const arrayResidents = arrayAnimal[0].residents;
  return arrayResidents.every((resident) => resident.age >= age);
}

function getEmployeeByName(string) {
  if (string === undefined) {
    return {};
  } return data.employees.find((employee) => {
    const { firstName, lastName } = employee;
    return firstName === string || lastName === string;
  });
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (species === undefined) {
    const animalCounter = {};
    data.species.forEach((specie) => {
      animalCounter[specie.name] = specie.residents.length;
    });
    return animalCounter;
  } const animalObj = data.species.find((specie) => specie.name === species);
  return animalObj.residents.length;
}

const calculateTotalPrice = (object) => {
  let adultsPrice = 0;
  let childrenPrice = 0;
  let seniorsPrice = 0;
  if (object.Adult !== undefined) {
    adultsPrice = object.Adult * data.prices.Adult;
  }
  if (object.Child !== undefined) {
    childrenPrice = object.Child * data.prices.Child;
  }
  if (object.Senior !== undefined) {
    seniorsPrice = object.Senior * data.prices.Senior;
  }
  return adultsPrice + childrenPrice + seniorsPrice;
};

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return calculateTotalPrice(entrants);
}

function getAnimalMap(options) {
  // const animalsLocation = {};
  // if (options === undefined) {
  //   animalsLocation.NE = data.species.filter((specie) => specie.location === 'NE').map((specie) => specie.name);
  //   animalsLocation.NW = data.species.filter((specie) => specie.location === 'NW').map((specie) => specie.name);
  //   animalsLocation.SE = data.species.filter((specie) => specie.location === 'SE').map((specie) => specie.name);
  //   animalsLocation.SW = data.species.filter((specie) => specie.location === 'SW').map((specie) => specie.name);
  //   return animalsLocation
  // }
  // if (options.includeNames === true) {
  //   animalsLocation.NE = data.species.filter((specie) => specie.location === 'NE').map((specie) => {
  //     let animalObj = {}
  //     animalObj[specie.name] = data[specie.residents.filter((resident) => resident.name)]
  //     return animalsLocation.NE[animalObj]
  //   });
  //   return animalsLocation
  // }
}
const { hours } = data;
function getSchedule(dayName) {
  if (dayName === undefined) {
    const fullSchedule = {
      Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
      Wednesday: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
      Thursday: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
      Friday: `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`,
      Saturday: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
      Sunday: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
      Monday: 'CLOSED',
    };
    return fullSchedule;
  } if (dayName === 'Monday') {
    return { Monday: 'CLOSED' };
  } const newObj = {};
  const scheduleEntries = Object.entries(data.hours);
  const dayAndHour = scheduleEntries.find((day, index) => day[index] === dayName);
  newObj[dayAndHour[0]] = `Open from ${dayAndHour[1].open}am until ${dayAndHour[1].close - 12}pm`;
  return newObj;
}

function getOldestFromFirstSpecies(id) {
  const speciesID = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const sortedArray = data.species.find((specie) => specie.id === speciesID)
    .residents.sort((residentA, residentB) => residentB.age - residentA.age);
  return [sortedArray[0].name, sortedArray[0].sex, sortedArray[0].age];
}

function increasePrices(percentage) {
  data.prices.Adult *= ((percentage / 100) + 1);
  data.prices.Adult = parseFloat(data.prices.Adult.toFixed(2));
  data.prices.Senior *= ((percentage / 100) + 1);
  data.prices.Senior = parseFloat(data.prices.Senior.toFixed(2));
  data.prices.Child *= ((percentage / 100) + 1);
  data.prices.Child = parseFloat(data.prices.Child.toFixed(2));
  return data.prices;
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
