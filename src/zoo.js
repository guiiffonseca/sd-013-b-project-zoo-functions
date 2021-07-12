const { employees, species, prices } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  return (
    employees.find(
      ({ firstName, lastName }) =>
        firstName === employeeName || lastName === employeeName,
    ) || {}
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return !!employees.find(({ managers }) => managers.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animalSpecies) {
  const allAnimalsAndQuantity = {};
  species.forEach((specie) => {
    allAnimalsAndQuantity[specie.name] = specie.residents.length;
  });
  if (animalSpecies) {
    return allAnimalsAndQuantity[animalSpecies];
  }
  return allAnimalsAndQuantity;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const myOwnSchedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return myOwnSchedule;
  return { [dayName]: myOwnSchedule[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const responsibleEmployee = employees.find(
    (elementEmployee) => elementEmployee.id === id,
  );
  const firstAnimalInResponsability = responsibleEmployee.responsibleFor[0];
  const animalResponsible = species.find(
    (specie) => specie.id === firstAnimalInResponsability,
  );
  const oldestResidentAge = animalResponsible.residents.reduce(
    (oldest, elementAnimal) => {
      if (elementAnimal.age > oldest) {
        return elementAnimal.age;
      }
      return oldest;
    }, 0,
  );
  const oldestResident = animalResponsible.residents.find(
    (elementAnimal) => elementAnimal.age === oldestResidentAge,
  ); return Object.values(oldestResident);
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
