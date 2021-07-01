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

const regions = ['NE', 'NW', 'SE', 'SW'];
const animalMap = {};
const { species } = data;

const optionsUndefined = () => {
  regions.forEach((region) => {
    animalMap[region] = species.filter((specie) => specie.location === region)
      .map((specie) => specie.name);
  });
  return animalMap;
};

const sexFemaleSorted = (options) => {
  regions.forEach((region) => {
    animalMap[region] = species.filter((specie) => specie.location === region)
      .map((specie) => ({ [specie.name]: specie.residents
        .filter((resident) => resident.sex === 'female')
        .map((resident) => resident.name).sort() }));
  });
  return animalMap;
};

const includeNamesAndSorted = () => {
  regions.forEach((region) => {
    animalMap[region] = species.filter((specie) => specie.location === region)
      .map((specie) => ({ [specie.name]: specie.residents
        .map((resident) => resident.name).sort() }));
  });
  return animalMap;
};

const sexFemale = (options) => {
  regions.forEach((region) => {
    animalMap[region] = species.filter((specie) => specie.location === region)
      .map((specie) => ({ [specie.name]: specie.residents
        .filter((resident) => resident.sex === 'female')
        .map((resident) => resident.name) }));
  });
  return animalMap;
};

const includeNames = () => {
  regions.forEach((region) => {
    animalMap[region] = species.filter((specie) => specie.location === region)
      .map((specie) => ({ [specie.name]: specie.residents
        .map((resident) => resident.name) }));
  });
  return animalMap;
};

const optionsWithSorted = (options) => {
  if (options.sex === 'female') {
    return sexFemaleSorted(options);
  } return includeNamesAndSorted();
};

const optionsWithoutSorted = (options) => {
  if (options.sex === 'female') {
    return sexFemale(options);
  } return includeNames();
};

const optionsDefined = (options) => {
  if (options.includeNames === true && options.sorted === true) {
    return optionsWithSorted(options);
  }
  if (options.includeNames === true) {
    return optionsWithoutSorted(options);
  }
};

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return optionsUndefined();
  }
  return optionsDefined(options);
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
  data.prices.Adult *= percentage + 100;
  data.prices.Adult = Math.ceil(data.prices.Adult) / 100;
  data.prices.Senior *= percentage + 100;
  data.prices.Senior = Math.ceil(data.prices.Senior) / 100;
  data.prices.Child *= percentage + 100;
  data.prices.Child = Math.ceil(data.prices.Child) / 100;
  return data.prices;
}

function getIdBySpecies(...speciesID) {
  return speciesID.map((specieID) => data.species.find((specie) => specieID === specie.id).name);
}

function getEmployeeCoverage(idOrName) {
  const newObj = {};
  if (idOrName === undefined) {
    data.employees.forEach(({ firstName, lastName }, index) => {
      newObj[`${firstName} ${lastName}`] = getIdBySpecies(...data.employees[index].responsibleFor);
    });
  } data.employees.forEach(({ firstName, lastName, id }, index) => {
    if (firstName === idOrName || lastName === idOrName || id === idOrName) {
      newObj[`${firstName} ${lastName}`] = getIdBySpecies(...data.employees[index].responsibleFor);
    }
  });
  return newObj;
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
