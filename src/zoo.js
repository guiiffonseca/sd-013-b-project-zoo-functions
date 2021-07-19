const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const checkDatabase = (parameter) => (
    species.find((speciesElement) => (speciesElement.id === parameter)));

  return ids.reduce((acc, curr) => (acc.concat(checkDatabase(curr))), []);
}

function getAnimalsOlderThan(animal, age) {
  const speciesToCheck = species.find((animalType) => animalType.name === animal);
  return speciesToCheck.residents.every((element) => (element.age > age));
}

function getEmployeeByName(employeeName) {
  const employeeData = employees.filter((elem) => (
    elem.lastName === employeeName || elem.firstName === employeeName));
  return (employeeData[0] === undefined) ? {} : employeeData[0];
}

function createEmployee(personalInfo, associatedWith) {
  const employeeObject = { id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return employeeObject;
}

function isManager(id) {
  let allManagers = employees.map((employee) => employee.managers);
  allManagers = allManagers.reduce((acc, curr) => acc.concat(curr));
  allManagers = allManagers.filter((elem, index) => (allManagers.indexOf(elem) === index));
  return allManagers.some((managerId) => managerId === id);
}

function addEmployee(id, firstName, lastName, managersParameter, responsibleForParameter) {
  const personalInfo = {
    id,
    firstName,
    lastName,
  };
  const associatedWith = {
    managers: (managersParameter === undefined) ? [] : managersParameter,
    responsibleFor: (responsibleForParameter === undefined) ? [] : responsibleForParameter,
  };
  employees.push(createEmployee(personalInfo, associatedWith));
}

function countAnimals(speciesToCount) {
  const allSpeciesName = species.map((animalFound) => animalFound.name);
  const allSpeciesCount = species.map((animalQuery) => animalQuery.residents.length);
  const allCounted = {};
  for (let index = 0; index < allSpeciesName.length; index += 1) {
    allCounted[allSpeciesName[index]] = allSpeciesCount[index];
  }
  const countedSpecies = species.find((speciesToFind) => (speciesToFind.name === speciesToCount));
  return (speciesToCount === undefined) ? allCounted : countedSpecies.residents.length;
}

function calculateEntry(entrants) {
  if (typeof entrants !== 'object') return 0;
  const adultTickets = (entrants.Adult === undefined) ? 0 : entrants.Adult;
  const childTickets = (entrants.Child === undefined) ? 0 : entrants.Child;
  const seniorTickets = (entrants.Senior === undefined) ? 0 : entrants.Senior;
  return adultTickets * prices.Adult + childTickets * prices.Child + seniorTickets * prices.Senior;
}

function getAnimalMap(options) {
}

function getSchedule(dayName) {
  const schedule = {
    Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
    Wednesday: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
    Thursday: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
    Friday: `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`,
    Saturday: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
    Sunday: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };
  return (dayName === undefined) ? schedule : { [dayName]: schedule[dayName] };
}

function getOldestFromFirstSpecies(argumentId) {
  const mngdSpecies = employees.find((parameter) => parameter.id === argumentId).responsibleFor[0];
  const firstSpecies = species.find((elem) => elem.id === mngdSpecies).residents;
  let result = ['name', 'sex', 0];
  for (let index = 0; index < firstSpecies.length; index += 1) {
    if (firstSpecies[index].age > result[2]) {
      result = [firstSpecies[index].name, firstSpecies[index].sex, firstSpecies[index].age];
    }
  }
  return result;
}

function increasePrices(percentage) {
  const addition = percentage / 100;
  prices.Adult = Math.round((prices.Adult + addition * prices.Adult) * 100) / 100;
  prices.Senior = Math.round((prices.Senior + addition * prices.Senior) * 100) / 100;
  prices.Child = Math.round((prices.Child + addition * prices.Child) * 100) / 100;
  return prices;
}

//  Bloco de funções auxiliares a getEmployeeCoverage()
function getSpeciesName(id) {
  const foundAnimal = species.find((elem) => elem.id === id);
  return foundAnimal.name;
}

function idQuery(idMatch) {
  const output = {};
  const keyName = `${idMatch.firstName} ${idMatch.lastName}`;
  const keyValue = idMatch.responsibleFor.map((elem) => getSpeciesName(elem));
  output[keyName] = keyValue;
  return output;
}

function firstNameQuery(firstNameMatch) {
  const output = {};
  const keyName = `${firstNameMatch.firstName} ${firstNameMatch.lastName}`;
  const keyValue = firstNameMatch.responsibleFor.map((elem) => getSpeciesName(elem));
  output[keyName] = keyValue;
  return output;
}

function lastNameQuery(lastNameMatch) {
  const output = {};
  const keyName = `${lastNameMatch.firstName} ${lastNameMatch.lastName}`;
  const keyValue = lastNameMatch.responsibleFor.map((elem) => getSpeciesName(elem));
  output[keyName] = keyValue;
  return output;
}
//  Fim do bloco auxiliar

function getEmployeeCoverage(idOrName) {
  const fullCoverage = {};
  const firstNameMatch = employees.find((param) => param.firstName === idOrName);
  const lastNameMatch = employees.find((param) => param.lastName === idOrName);
  const idMatch = employees.find((param) => param.id === idOrName);
  if (idMatch !== undefined) { return idQuery(idMatch); }
  if (firstNameMatch !== undefined) { return firstNameQuery(firstNameMatch); }
  if (lastNameMatch !== undefined) { return lastNameQuery(lastNameMatch); }

  const allEmployees = employees.map((parameter) => `${parameter.firstName} ${parameter.lastName}`);
  const allCoverage = employees.map((elem) => elem.responsibleFor);

  for (let index = 0; index < allCoverage.length; index += 1) {
    const keyName = allEmployees[index];
    fullCoverage[keyName] = allCoverage[index].map((elem) => getSpeciesName(elem));
  }
  return fullCoverage;
}

getEmployeeCoverage('Azevado');
getEmployeeCoverage('Stephanie');
getEmployeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad');

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
