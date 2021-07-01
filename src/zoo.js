const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, minAge) {
  const animalFound = data.species.find((specie) => specie.name === animal);
  return animalFound.residents.every((resident) => resident.age > minAge);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const managers = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83'];
  return managers.some((manager) => manager === id);
}

function addEmployee(...employeeDetails) {
// id, firstName, lastName, managers, responsibleFor
  const [idValue,
    firstNameValue,
    lastNameValue,
    managersValue = [],
    responsibleForValue = []] = employeeDetails;

  const newEmployee = { id: idValue,
    firstName: firstNameValue,
    lastName: lastNameValue,
    managers: managersValue,
    responsibleFor: responsibleForValue,
  };

  data.employees.push(newEmployee);
}

function countAnimals(species) {
  const result = {};
  if (species === undefined) {
    data.species.forEach((specie) => {
      result[specie.name] = specie.residents.length;
    });
    return result;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  let entryTotal = 0;
  Object.keys(entrants).forEach((personType) => {
    entryTotal += data.prices[personType] * entrants[personType];
  });

  return entryTotal;
}

function getAnimalMap(options) {

}

function getSchedule(dayName) {
  const fullSchedule = {};
  Object.keys(data.hours).forEach((key) => {
    if (data.hours[key].open === data.hours[key].close) {
      fullSchedule[key] = 'CLOSED';
    } else {
      fullSchedule[key] = `Open from ${data.hours[key].open}am \
until ${data.hours[key].close - 12}pm`;
    }
  });
  if (dayName === undefined) {
    return fullSchedule;
  }
  return { [dayName]: fullSchedule[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const employeeFound = data.employees.find((employee) => employee.id === id);
  const animalsFound = data.species.find((specie) => specie.id === employeeFound.responsibleFor[0]);
  let oldestAnimal = animalsFound.residents[0];
  animalsFound.residents.forEach((resident) => {
    if (resident.age > oldestAnimal.age) {
      oldestAnimal = resident;
    }
  });
  return Object.values(oldestAnimal);
}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

function increasePrices(percentage) {
  const newPrices = {};
  Object.entries(data.prices).forEach((price) => {
    const [person, value] = price;
    const valueIncrease = (value * percentage) / 100;
    newPrices[person] = Math.round((value + valueIncrease) * 100) / 100;
  });
  data.prices = newPrices;
}
console.log(data.prices);

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
