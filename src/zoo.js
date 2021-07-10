const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((valueIds) => data.species.find((animalSpecie) => animalSpecie.id === valueIds));
}

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((animalSpecie) => animalSpecie.name === animal);
  return specie.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const employeeObj = data.employees.find((employee) => (employee.id === id));
  return (employeeObj.managers.length === 1);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  if (!species) {
    return data.species.reduce((acc, curr) => ({
      ...acc, ...{ [curr.name]: curr.residents.length } }), {});
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;

  let { Adult = 0, Child = 0, Senior = 0 } = entrants;
  Adult *= data.prices.Adult;
  Senior *= data.prices.Senior;
  Child *= data.prices.Child;

  return (Adult + Senior + Child);
}

function getAllRegions() {
  const allRegions = data.species.map((animal) => animal.location);
  return [...new Set(allRegions)];
}

function createObjRegions() {
  return getAllRegions().reduce((acc, value) => ({ ...acc, [value]: [] }), {});
}

function noOptions() {
  const objRegions = createObjRegions();
  data.species.forEach((animal) => {
    if (getAllRegions().includes(animal.location)) {
      objRegions[animal.location].push(animal.name);
    }
  });
  return objRegions;
}

function noSortSex() {
  const objRegions = createObjRegions();
  data.species.forEach((animal) => {
    if (getAllRegions().includes(animal.location)) {
      const name = animal.residents.map((animalName) => animalName.name);
      objRegions[animal.location].push({ [animal.name]: name });
    }
  });
  return objRegions;
}

function noSex() {
  const objRegions = createObjRegions();
  data.species.forEach((animal) => {
    if (getAllRegions().includes(animal.location)) {
      const name = animal.residents.map((animalName) => animalName.name).sort();
      objRegions[animal.location].push({ [animal.name]: name });
    }
  });
  return objRegions;
}

function noSort(sex) {
  const objRegions = createObjRegions();
  data.species.forEach((animal) => {
    if (getAllRegions().includes(animal.location)) {
      let name = animal.residents.map((animalName) => {
        if (animalName.sex === sex) return animalName.name;
        return undefined;
      });
      name = name.filter((isUndf) => isUndf !== undefined);
      objRegions[animal.location].push({ [animal.name]: name });
    }
  });
  return objRegions;
}

function allOptions(sex) {
  const objRegions = createObjRegions();
  data.species.forEach((animal) => {
    if (getAllRegions().includes(animal.location)) {
      let name = animal.residents.map((animalName) => {
        if (animalName.sex === sex) {
          return animalName.name;
        }
        return undefined;
      });
      name = name.filter((isUndf) => isUndf !== undefined).sort();
      objRegions[animal.location].push({ [animal.name]: name });
    }
  });
  return objRegions;
}

function includesName(sorted, sex) {
  if (!sorted && !sex) return noSortSex();
  if (!sex) return noSex();
  if (!sorted) return noSort(sex);
  return allOptions(sex);
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return noOptions();
  const { sorted = false, sex = false } = options;
  return includesName(sorted, sex);
}

function parseHours(dayName, hours) {
  if (dayName !== 'Monday') {
    return {
      [dayName]: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
    };
  }
  return { [dayName]: 'CLOSED' };
}

function getSchedule(dayName) {
  const { hours } = data;
  if (!dayName) {
    return {
      Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
      Wednesday: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
      Thursday: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
      Friday: `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`,
      Saturday: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
      Sunday: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
      Monday: 'CLOSED',
    };
  }
  return parseHours(dayName, hours);
}

function getOldestFromFirstSpecies(id) {
  const employeeById = data.employees.find((employee) => employee.id === id);
  const firstSpecie = getSpeciesByIds(employeeById.responsibleFor[0]);
  const animalsSorted = firstSpecie[0].residents.sort(
    (resident, nextResident) => resident.age - nextResident.age,
  );
  const olderAnimal = animalsSorted.reverse()[0];
  return Object.values(olderAnimal).map((e) => e);
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((e) => {
    const newPrice = (data.prices[e] * (1 + percentage / 100)) + 0.001;
    data.prices[e] = parseFloat(newPrice.toFixed(2));
  });
  return (data.prices);
}

function getEmployeeById(id) {
  return data.employees.find((employee) => employee.id === id);
}

function getByIdOrName(idOrName) {
  if (!getEmployeeByName(idOrName)) return getEmployeeById(idOrName);
  return (getEmployeeByName(idOrName));
}

function getEmployeeCoverage(idOrName) {
  const employeesPlusAnimals = data.employees.reduce((acc, curr) => {
    const animals = getSpeciesByIds(...curr.responsibleFor).map((e) => e.name);
    return { ...acc, ...{ [`${curr.firstName} ${curr.lastName}`]: animals } };
  }, {});

  if (!idOrName) return employeesPlusAnimals;

  const employeeObj = getByIdOrName(idOrName);
  const fullname = `${employeeObj.firstName} ${employeeObj.lastName}`;
  return { [fullname]: employeesPlusAnimals[fullname] };
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
