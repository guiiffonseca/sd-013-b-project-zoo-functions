const data = require('./data');

function getSpeciesByIds(...idsArr) {
  if (idsArr.length === 0) return [];
  let speciesArr = [];
  data.species.forEach((specie) => {
    idsArr.forEach((id) => {
      if (specie.id === id) {
        speciesArr = [...speciesArr, specie];
      }
    });
  });

  return speciesArr;
}

function getAnimalsOlderThan(animal, age) {
  const mySpecie = data.species.find((specie) => specie.name === animal);

  let allOlder = true;

  mySpecie.residents.forEach((resident) => {
    if (resident.age < age) allOlder = false;
  });

  return allOlder;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  let userIsManager = false;

  data.employees.forEach((employee) => {
    employee.managers.forEach((manager) => {
      if (manager === id) userIsManager = true;
    });
  });

  return userIsManager;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  });
}

function countAnimals(species) {
  if (!species) {
    const obj = {};

    data.species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });

    return obj;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;

  const { Adult = 0, Child = 0, Senior = 0 } = entrants;

  return Adult * 49.99 + Child * 20.99 + Senior * 24.99;
}

// function getAnimalsSortedByLocation() {
//   const obj = {
//     NE: [],
//     NW: [],
//     SE: [],
//     SW: [],
//   };

//   data.species.forEach((specie) => {
//     if (specie.location === 'NE') obj.NE.push(specie.name);
//     if (specie.location === 'NW') obj.NW.push(specie.name);
//     if (specie.location === 'SE') obj.SE.push(specie.name);
//     if (specie.location === 'SW') obj.SW.push(specie.name);
//   });

//   return obj;
// }

// function getResidentNames(animalName, sorted) {
//   const namesArr = [];
//   data.species.forEach((specie) => {
//     if (specie.name === animalName) {
//       specie.residents.forEach((resident) => {
//         namesArr.push(resident.name);
//       });
//     }
//   });
//   if (sorted) namesArr.sort();
//   return { animalName: namesArr };
// }

// function getAnimalsWithNames(sorted = false) {
//   const animals = Object.values(getAnimalsSortedByLocation());

//   animals.forEach((regionAnimals) => {
//     regionAnimals.map((animalName) => getResidentNames(animalName, sorted));
//   });

//   return {
//     NE: animals[0],
//     NW: animals[1],
//     SE: animals[2],
//     SW: animals[3],
//   };
// }

function getAnimalMap(options) {
  // if (!options) {
  //   return getAnimalsSortedByLocation();
  // }

  // const { includeNames, sorted } = options;

  // if (includeNames) {
  //   if (sorted) getAnimalsWithNames(true);
  //   if (!sorted) getAnimalsWithNames();
  // }
}

function getSchedule(dayName) {
  const obj = {};
  const { hours } = data;
  Object.keys(hours).forEach((day) => {
    if (hours[day].close - hours[day].open === 0) {
      obj[day] = 'CLOSED';
      return;
    }
    obj[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  });

  if (!dayName) {
    return obj;
  }

  const singleProp = {};
  singleProp[dayName] = obj[dayName];

  return singleProp;
}

function getOldestFromFirstSpecies(id) {
  const specieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const selectedSpecie = data.species.find((specie) => specie.id === specieId);

  let oldest = selectedSpecie.residents[0];

  selectedSpecie.residents.forEach((resident) => {
    if (resident.age > oldest.age) {
      oldest = resident;
    }
  });

  const { name, sex, age } = oldest;

  return [name, sex, age];
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
