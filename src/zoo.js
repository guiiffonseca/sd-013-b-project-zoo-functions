const data = require('./data');

// ====================
// = HELPER FUNCTIONS
// ====================
function getMapBySpecies() {
  const neSpecies = data.species
    .filter((x) => x.location === 'NE')
    .map((x) => x.name);

  const nwSpecies = data.species
    .filter((x) => x.location === 'NW')
    .map((x) => x.name);

  const seSpecies = data.species
    .filter((x) => x.location === 'SE')
    .map((x) => x.name);

  const swSpecies = data.species
    .filter((x) => x.location === 'SW')
    .map((x) => x.name);

  return { NE: neSpecies, NW: nwSpecies, SE: seSpecies, SW: swSpecies };
}

function getLocationsArrays(location, ...sex) {
  const speciesObj = getMapBySpecies();
  const result = speciesObj[location].map((x) => {
    const index = data.species.findIndex((y) => y.name === x);
    let resArr = data.species[index].residents;
    resArr = sex.length > 0 ? resArr.filter((w) => w.sex === sex[0]) : resArr;
    const named = resArr.map((z) => z.name);
    return {
      [x]: named,
    };
  });
  return result;
}

function getMapIncludeNames(...sex) {
  let obj = {};
  if (sex.length > 0) {
    obj = {
      NE: getLocationsArrays('NE', sex[0]),
      NW: getLocationsArrays('NW', sex[0]),
      SE: getLocationsArrays('SE', sex[0]),
      SW: getLocationsArrays('SW', sex[0]),
    };
  } else {
    obj = {
      NE: getLocationsArrays('NE'),
      NW: getLocationsArrays('NW'),
      SE: getLocationsArrays('SE'),
      SW: getLocationsArrays('SW'),
    };
  }

  return obj;
}

function sortAnimalNames(obj) {
  const loc = Object.keys(obj);
  for (let i = 0; i < loc.length; i += 1) {
    for (let j = 0; j < obj[loc[i]].length; j += 1) {
      const [animal] = Object.keys(obj[loc[i]][j]);
      obj[loc[i]][j][animal].sort();
    }
  }
}

function getAnimalMapAtom(options) {
  const object = !options.sex
    ? getMapIncludeNames()
    : getMapIncludeNames(options.sex);

  return object;
}

function getCompleteSchedule() {
  const schedule = {};
  const days = Object.keys(data.hours);
  days.forEach((x) => {
    if (x === 'Monday') schedule[x] = 'CLOSED';
    else {
      schedule[x] = `Open from ${data.hours[x].open}am until ${
        data.hours[x].close - 12
      }pm`;
    }
  });

  return schedule;
}

// ====================
// ====================
// ====================

function getSpeciesByIds(...ids) {
  // seu código aqui
  const arr = [];

  ids.forEach((each) => {
    const specie = data.species.filter((x) => x.id === each);
    arr.push(specie[0]);
  });
  return arr;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const index = data.species.findIndex((x) => x.name === animal);
  for (let i = 0; i < data.species[index].residents.length; i += 1) {
    if (data.species[index].residents[i].age <= age) return false;
  }
  return true;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  // prettier-ignore
  const index = data.employees.findIndex(
    (x) => x.firstName === employeeName || x.lastName === employeeName,
  );
  return index === -1 ? {} : data.employees[index];
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmp = {};
  Object.assign(newEmp, personalInfo, associatedWith);
  return newEmp;
}

function isManager(id) {
  // seu código aqui
  const arr = [];
  for (let i = 0; i < data.employees.length; i += 1) {
    for (let j = 0; j < data.employees[i].managers.length; j += 1) {
      arr.push(data.employees[i].managers[j]);
    }
  }
  const set = new Set(arr);
  const index = [...set].findIndex((x) => x === id);
  return index !== -1;
}

// prettier-ignore
function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // seu código aqui
  const newEmp = { id, firstName, lastName, managers, responsibleFor };
  console.log(newEmp);
  data.employees.push(newEmp);
}

function countAnimals(species) {
  // seu código aqui
  const obj = {};
  for (let i = 0; i < data.species.length; i += 1) {
    const anim = data.species[i].name;
    obj[anim] = data.species[i].residents.length;
  }
  return !species ? obj : obj[species];
}

function calculateEntry(entrants) {
  // seu código aqui
  const obj = {
    Adult: 0,
    Child: 0,
    Senior: 0,
    prices: data.prices,
  };
  if (entrants) Object.assign(obj, entrants);

  // prettier-ignore
  return (
    obj.prices.Adult * obj.Adult
    + obj.prices.Child * obj.Child
    + obj.prices.Senior * obj.Senior
  );
}

function getAnimalMap(options) {
  // seu código aqui
  let obj;

  if (!options || !options.includeNames) obj = getMapBySpecies();
  else if (options.includeNames === true) {
    obj = getAnimalMapAtom(options);
    if (options.sorted === true) sortAnimalNames(obj);
  }

  return obj;
}

function getSchedule(dayName) {
  // seu código aqui
  const complete = getCompleteSchedule();
  if (!dayName) return complete;
  return { [dayName]: complete[dayName] };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const index = data.employees.findIndex((x) => x.id === id);
  const animalId = data.employees[index].responsibleFor[0];
  const animalIndex = data.species.findIndex((x) => x.id === animalId);
  const resid = data.species[animalIndex].residents;
  // prettier-ignore
  const older = resid.reduce(
    (acc, cur) => (cur.age > acc.age ? cur : acc),
    resid[0],
  );
  return [older.name, older.sex, older.age];
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
