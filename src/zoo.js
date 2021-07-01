const { species, employees, hours, prices } = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) =>
    specie.name === animal).residents.every((resident) =>
    resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employee) =>
    employee.firstName === employeeName
    || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAllAnimals() {
  const counter = {};
  species.forEach((specie) => {
    counter[specie.name] = specie.residents.length;
  });
  return counter;
}

function countAnimals(animalSpecies) {
  if (!animalSpecies) {
    return countAllAnimals();
  }
  return species.find((specie) =>
    (specie.name === animalSpecies)).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || !Object.keys(entrants).length) {
    return 0;
  }
  let { Adult = 0, Child = 0, Senior = 0 } = entrants;
  Adult *= prices.Adult;
  Child *= prices.Child;
  Senior *= prices.Senior;

  return Adult + Child + Senior;
}

function byLocation(name) {
  return name;
}

function filtredBySex(residents, sex) {
  let filtredResidents = residents;
  filtredResidents = filtredResidents.filter((resident) => resident.sex === sex);
  return filtredResidents;
}

function filtredBySort(residents) {
  let filtredResidents = residents;
  filtredResidents = filtredResidents.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return filtredResidents;
}

function byName(name, residents, sex = false, sort = false) {
  let filtredResidents = residents;
  if (sex) {
    filtredResidents = filtredBySex(filtredResidents, sex);
  }
  if (sort) {
    filtredResidents = filtredBySort(filtredResidents);
  }
  return { [name]: filtredResidents.reduce((acc, resident) => {
    acc.push(resident.name);
    return acc;
  }, []) };
}

function categorized(callback, sex, sort) {
  return species.reduce((acc, specie) => {
    const { name, location, residents } = specie;
    if (Object.keys(acc).includes(location)) {
      acc[location].push(callback(name, residents, sex, sort));
    } else {
      acc[location] = [callback(name, residents, sex, sort)];
    }
    return acc;
  }, {});
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return categorized(byLocation);
  }
  const { sex, sorted } = options;
  return categorized(byName, sex, sorted);
}

function message(open, close) {
  let tempClose = close;
  if (tempClose) {
    tempClose -= 12;
  }
  if (open && tempClose) {
    return `Open from ${open}am until ${tempClose}pm`;
  }
  return 'CLOSED';
}

function getSchedule(dayName) {
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    schedule[day] = message(hours[day].open, hours[day].close);
  });

  if (!dayName) {
    return schedule;
  }

  return Object.keys(schedule).reduce((acc, day) => {
    if (day === dayName) {
      acc[day] = schedule[day];
    }
    return acc;
  }, {});
}

function getOldestFromFirstSpecies(id) {
  const animalID = employees.find((employee) =>
    employee.id === id).responsibleFor[0];
  const oldAnimal = species.find((specie) =>
    specie.id === animalID).residents.reduce((acc, resident) => {
    if (resident.age > acc.age) {
      return resident;
    }
    return acc;
  });
  return Object.values(oldAnimal);
}

function calculateNewPrice(price, percentage) {
  return Math.round((price * 100) + (price * percentage)) / 100;
}

function increasePrices(percentage) {
  const { Adult, Senior, Child } = prices;
  prices.Adult = calculateNewPrice(Adult, percentage);
  prices.Senior = calculateNewPrice(Senior, percentage);
  prices.Child = calculateNewPrice(Child, percentage);
}

function createListOfEmployees() {
  const listEmployees = {};
  employees.forEach((employee) => {
    const { firstName, lastName, responsibleFor } = employee;
    const name = `${firstName} ${lastName}`;
    const animal = getSpeciesByIds(...responsibleFor).map((animals) =>
      animals.name);
    listEmployees[name] = animal;
  });
  return listEmployees;
}

function fullNameEmployee(idOrName) {
  const objEmployee = employees.find((employee) =>
    employee.id === idOrName
    || employee.firstName === idOrName
    || employee.lastName === idOrName);
  return `${objEmployee.firstName} ${objEmployee.lastName}`;
}

function getEmployeeCoverage(idOrName) {
  const listEmployees = createListOfEmployees();

  if (!idOrName) {
    return listEmployees;
  }

  const nameOfEmployee = fullNameEmployee(idOrName);
  return Object.keys(listEmployees).reduce((acc, name) => {
    if (name === nameOfEmployee) {
      acc[name] = listEmployees[name];
    }
    return acc;
  }, {});
}
console.log(getEmployeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

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
