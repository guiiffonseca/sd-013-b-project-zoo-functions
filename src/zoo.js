const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((worker) => worker.firstName === employeeName)
  || employees.find((worker) => worker.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, ...rest) {
  const newEmploye = {
    id,
    firstName,
    lastName,
    managers: rest[0] || [],
    responsibleFor: rest[1] || [],
  };
  employees.push(newEmploye);
}

function countAnimals(specie) {
  if (specie) {
    return species.reduce((acc, animal) => {
      let result = acc;
      if (animal.name === specie) result = animal.residents.length;
      return result;
    }, 0);
  }
  return species.reduce((population, animal) => {
    const result = population;
    result[animal.name] = animal.residents.length;
    return result;
  }, {});
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const result = [prices].reduce((acc, price) => {
    let calc = acc;
    calc += (entrants.Adult * price.Adult) || 0;
    calc += (entrants.Senior * price.Senior) || 0;
    calc += (entrants.Child * price.Child) || 0;
    return calc;
  }, 0);
  return result;
}

function noOptions() {
  return species.reduce((acc, specie) => {
    const key = specie.location;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(specie.name);
    return acc;
  }, {});
}

function namesNoSortGender() {
  return species.reduce((acc, specie) => {
    const key = specie.location;
    const residentsList = specie.residents
      .reduce((listNames, resident) => listNames.concat(resident.name), []);
    const index = acc[key].indexOf(specie.name, 0);
    acc[key][index] = { [specie.name]: residentsList };
    return acc;
  }, noOptions());
}

function namesSortNoGender() {
  return species.reduce((acc, specie) => {
    const key = specie.location;
    const residentsList = specie.residents
      .reduce((listNames, resident) => listNames.concat(resident.name), []);
    const index = acc[key].indexOf(specie.name, 0);
    acc[key][index] = { [specie.name]: residentsList.sort() };
    return acc;
  }, noOptions());
}

function namesNoSort(gender) {
  return species.reduce((acc, specie) => {
    const key = specie.location;
    const residentsList = specie.residents
      .filter((resident) => resident.sex === gender)
      .reduce((listNames, resident) => listNames.concat(resident.name), []);
    const index = acc[key].indexOf(specie.name, 0);
    acc[key][index] = { [specie.name]: residentsList };
    return acc;
  }, noOptions());
}

function allOptions(gender) {
  return species.reduce((acc, specie) => {
    const key = specie.location;
    const residentsList = specie.residents
      .filter((resident) => resident.sex === gender)
      .reduce((listNames, resident) => listNames.concat(resident.name), []);
    const index = acc[key].indexOf(specie.name, 0);
    acc[key][index] = { [specie.name]: residentsList.sort() };
    return acc;
  }, noOptions());
}

function includeNames(sorted, sex) {
  if (!sorted && !sex) return namesNoSortGender();
  if (!sex) return namesSortNoGender();
  if (!sorted) return namesNoSort(sex);
  return allOptions(sex);
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return noOptions();
  const { sorted = false, sex = false } = options;
  return includeNames(sorted, sex);
}

function showHours(weekDay, hours) {
  if (weekDay !== 'Monday') {
    return {
      [weekDay]: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
    };
  }
  return { [weekDay]: 'CLOSED' };
}

function getSchedule(weekDay) {
  const { hours } = data;
  if (!weekDay) {
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
  return showHours(weekDay, hours);
}

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((employe) => employe.id === id).responsibleFor[0];
  const specie = getSpeciesByIds(firstSpecie)
    .map((animals) => animals.residents)[0];
  return specie.reduce((acc, animal) => {
    let verify = Object.values(acc);
    if (verify[2] < animal.age) {
      verify = Object.values(animal);
    }
    return verify;
  });
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
