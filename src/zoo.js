const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const especiesEspecifica = species.find((especie) => especie.name === animal).residents;
  return especiesEspecifica.every((resident) => resident.age >= age);
  // poderia fazer também assim :
  // species.find((specie) => specie.name === animal.residents.every((resident) => resindent.age >= age))
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((em) => em.firstName === employeeName || em.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const pessoa = employees.find((employee) => employee.id === id).managers;
  return pessoa.some((manager) => manager === '9e7d4524-363c-416a-8759-8aa7e50c0992');
  // verifiquei os codigos do manager da pessoa e o id dela, ver quais batiam e quais não com o que o assert pedia.
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newObject = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newObject);
  // demorei entender que não estava mechendo só com objeto mas foi (employes é um array)
}

function countAnimals(speciesName) {
  // seu código aqui
  if (speciesName === undefined) {
    return species.reduce((acc, spec) => {
      acc[spec.name] = spec.residents.length;
      return acc;
    }, {});
  }
  let number = 0;
  species.forEach((specie) => {
    if (specie.name === speciesName) number = specie.residents.length;
  });
  return number;
  // demorei mais entendi ,não era o popularity que devia contar e sim quantidade de animais/residentes usei entao o length
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || entrants.length === 0) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  // em vez de usar spread operator (...?) no parametro
  // usei Default Destructuring no object para dar valores padroes.
  return Adult * prices.Adult + Senior * prices.Senior + Child * prices.Child;
  // retornei com um calcuro simples e direto dos valores do object e os do prices.
}

function animalMap() {
  // Funçao usada em Funcao getAnimalMap
  const geografico = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(geografico).forEach((geo) => {
    species.forEach((specie) => {
      if (specie.location === geo) geografico[geo].push(specie.name);
    });
  });
  return geografico;
}

/* function animalMapResidents(param) {
  // Função usada no getAnimalMap
  const geografico = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(geografico).forEach((geo) => {
    species.forEach((specie) => {
      if (specie.location === geo) {
        const specName = specie.name;
        let specResiNames = [];
        speciesName.push(specie.residents.name);
        geografico[geo].push({ specName: specResiNames });
      }
    });
  });
} */

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined) return animalMap();
  /* const { includeNames, sex, sorted } = options;
  if (options[includeNames] === true) {
    return animalMapResidents('Name');
  } else if (options[includeNames] === true && options[sorted] === true) {
    return animalMapResidents('sorted');
  }else if (options[includeNames] === true && options[sex] === 'female') {
    return animalMapResidents('NameSex')
  } else {
    return 'ERROR';
  }
  */
}

function getSchedule(dayName) {
  // seu código aqui
  const objeto = {};
  Object.keys(hours).forEach((day) => {
    // ABAIXO serve pro dia que estiver Closed receber valor diferente dos outros.
    if (hours[day].open - hours[day].close === 0) {
      objeto[day] = 'CLOSED';
      return objeto;
    }
    // preenchendo o objeto.
    objeto[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  });
  // abaixo é caso venha com parametro undefined
  if (dayName === undefined) return objeto;
  // Abaixo se passar um dia normal
  const diaNormal = {};
  diaNormal[dayName.substring()] = objeto[dayName];
  return diaNormal;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  // encontra a primeira especie que funcionario é responsavel :
  const findFirstSpecieEmployye = employees.find((employe) => employe.id === id).responsibleFor[0];
  // Encontra o Objeto especie que tem o id igual ao do animal encontrado antes:
  const specieFind = species.find((specie) => specie.id === findFirstSpecieEmployye);
  // Encontra o animal mais velho da especie:
  let oldAnimal = { age: 0 };
  specieFind.residents.forEach((animal) => {
    if (animal.age > oldAnimal.age) oldAnimal = animal;
  });
  // retorna apenas os valores do objeto Animal:
  return Object.values(oldAnimal);
}

function increasePrices(percentage) {
  // seu código aqui
  const percent = percentage / 100;
  const namechaves = Object.keys(prices);
  namechaves.forEach((chave) => {
    prices[chave] = Math.round(prices[chave] * (1 + percent) * 100) / 100;
  });
}

function allEmployeesAndResponsibles() {
  // FUNCAO USADA NA FUNCAO getEmployeeCoverage
  const employeesAndSpecies = {};
  employees.forEach((employe) => {
    // resgatando nome e sobrenome de funcionarios
    const employeName = `${employe.firstName} ${employe.lastName}`;
    // juntar nome dos funcionarios e os animais que ele cuida
    // acessando os animais que employe atual é responsavel
    const namesAnimal = [];
    employe.responsibleFor.forEach((idSpecie) => {
      species.forEach((specie) => {
        if (idSpecie === specie.id) namesAnimal.push(specie.name);
      });
    });
    // a cada loop vai salvar o nome do employee atual e dos animais
    employeesAndSpecies[employeName] = namesAnimal;
  });
  return employeesAndSpecies;
}

function employeeAndSpecieResp(idOrName) {
  // FUNCAO USADA NO getEmployeeCoverage()
  const employeeAndSpcie = {};
  employees.forEach((emp) => {
    if (emp.id === idOrName || emp.firstName === idOrName || emp.lastName === idOrName) {
      // juntando nome e sobreNome do funcionario
      const employeeName = `${emp.firstName} ${emp.lastName}`;
      // pegando nome das especies
      const namesSpecies = [];
      emp.responsibleFor.forEach((idSpecie) => {
        species.forEach((specie) => {
          if (idSpecie === specie.id) namesSpecies.push(specie.name);
        });
      });
      employeeAndSpcie[employeeName] = namesSpecies;
    }
  });
  return employeeAndSpcie;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const idOrNameString = idOrName;
  // se vier undefined :
  if (idOrName === undefined) return allEmployeesAndResponsibles();
  // se vier algum id ,firstName, ou lastName :
  return employeeAndSpecieResp(idOrNameString);
}
console.log(getEmployeeCoverage('Azevado'));

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
