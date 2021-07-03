const { species, employees, prices, hours } = require('./data');

const data = require('./data');
//  Rest the parameter if there is more than one, using a map and find the same id as the 'idd' of map.
function getSpeciesByIds(...ids) {
  return ids.map((idd) => species.find((specie) => (specie.id === idd)));
}

const getAnimalsOlderThan = (animal, age) => species
//  fining the specie name, same as the parameter.
  .find((specie) => specie.name === animal).residents
//  comparing if all the residents have at least the age parameter.
  .every((resident) => resident.age > age);

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(
    (eName) => eName.firstName === employeeName || eName.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

const isManager = (id) => employees
  .some((employee) => employee.managers
    .some((idsEmp) => idsEmp === id));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(speciesPar) {
  if (!speciesPar) {
    return species.reduce((accumulator, { name, residents }) => {
      accumulator[name] = residents.length;
      return accumulator;
    }, {});
  }
  return species.find((specie) => specie.name === speciesPar).residents.length;
}

const calculateAllPeople = (entrants) => (prices.Adult * entrants.Adult || 0)
+ (prices.Child * entrants.Child || 0)
+ (prices.Senior * entrants.Senior || 0);

function calculateEntry(entrants) {
  if (!entrants) return 0;
  return calculateAllPeople(entrants);
}

function getAnimalMap(options) {
  // seu código aqui
}

const entArray = Object.entries(hours);

const entriesAll = () => entArray.reduce((accumulator, cValue, index) => {
  if (cValue[0] === 'Monday') {
    accumulator[entArray[index][0]] = 'CLOSED';
    return accumulator;
  }
  accumulator[entArray[index][0]] = `Open from ${cValue[1].open}am until ${cValue[1].close - 12}pm`;
  return accumulator;
}, {});

function getSchedule(dayName) {
  if (!dayName) {
    return entriesAll();
  }
  return entArray.find(((day) => day[0] === dayName)).reduce((accumulator, { open, close }) => {
    if (dayName === 'Monday') {
      accumulator[dayName] = 'CLOSED';
      return accumulator;
    }
    accumulator[dayName] = `Open from ${open}am until ${close - 12}pm`;
    return accumulator;
  }, {});
}

function getOldestFromFirstSpecies(id) {
  const animal = employees.find((idEmp) => idEmp.id === id).responsibleFor[0];
  return Object.values(species.find(
    (specie) => specie.id === animal,
  ).residents.reduce(
    (accumulator, currentNumber) => {
      if ((accumulator.age) > currentNumber.age) return accumulator;
      return currentNumber;
    },
  ));
}

function increasePrices(percentage) {
  // seu código aqui
}

const findAnimal = (responsibleFor) => responsibleFor.map(
  (animal) => species.find((anima) => anima.id === animal).name,
);

const allEmployees = () => employees.reduce(
  (accumulator, { firstName, lastName, responsibleFor }) => {
    accumulator[`${firstName} ${lastName}`] = findAnimal(responsibleFor);
    return accumulator;
  }, {},
);

function getEmployeeCoverage(idOrName) {
  if (!idOrName) return allEmployees();
  const empShow = employees.find(
    (idEmp) => idEmp.id === idOrName
    || idEmp.firstName === idOrName
    || idEmp.lastName === idOrName,
  );
  const nameSingle = {
    [`${empShow.firstName} ${empShow.lastName}`]: findAnimal(empShow.responsibleFor),
  };
  return nameSingle;
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
