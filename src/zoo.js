const data = require('./data');

// O ...ids transforma a entrada em array variável (Parâmetro Dinâmico com rest)
// Usei o map pra percorrer esse array porque a saída que quer é em array.
// Usei o find porque id tem um pra cada espécie.
// No find vou comparar o id do parâmetro com o id da espécie.
// Retorna um array com a especie do id do parâmetro.
function getSpeciesByIds(...ids) {
  return ids.map((idParam) => data.species.find(({ id }) => id === idParam));
}

// Tô procurando a espécie que tem o nome do animal passado como parâmetro.
// Na chave residents eu vejo com o every se todos os animais possuem a idade mínima passada como parâmentro.
// Retorna true ou false.
function getAnimalsOlderThan(animal, age) {
  return data.species.find(({ name }) =>
    name === animal).residents.every((resident) => resident.age >= age);
}

// Se não passar nenhum parâmetro, retorna um objeto vazio.
// O parâmetro pode ser tanto o primeiro nome, como o último nome.
// No array employees, procuro o objeto com o nome ou sobrenome passado como parâmetro.
// Retorna o objeto com as informações do empregado.
function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

// Usa o spread pra juntar os dois objetos passados por parâmetro. E retorna um objeto.
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// Passo um id de parâmetro, e quero ver se essa pessoa é gerênte. Pra isso preciso ver se ela está como gerênte de alguém.
// Percorro o array de employees e vejo se no objeto do empregado, na chave managers, inclui o id que eu quero. Se tiver em algum empregado, então que dizer que esse id é de um gerente.
// Retorna true ou false.
function isManager(id) {
  return data.employees.some(({ managers }) =>
    managers.includes(id));
}

// Usei o default parameters para managers e responsibleFor, porque se não tiver nada, eles precisam ser um array vazio.
// Peguei o array employees e fiz um push pro novo empregado ir pro final.
// As chaves e valores do objeto foram feitas com object property shorthand.
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// Setei uma constante com um objeto vazio.
// Se a função receber um parâmetro. Vou buscar o nome desse animal no meu array de especies e retornar o tamanho da chave residentes, ai vai retornar o número de animais que tem nessa especie.
// Se não colocar parâmetro: percorro o array de espécies e pra cada espécie eu pego o nome dela e o número de animais (tamanho da chave residents) e jogo no objeto vazio.
// Ao invés de usar specie.name e specie.residents, fiz o destructuring.
function countAnimals(specieAnimal) {
  const result = {};
  if (specieAnimal) {
    const specieFind = data.species.find(({ name }) => name === specieAnimal);
    return specieFind.residents.length;
  }
  data.species.forEach(({ name, residents }) => {
    result[name] = residents.length;
  });
  return result;
}

// Se não receber parâmetro ou um objeto vazio, vai retornar 0.
// Peguei as entradas(chave, valor) do parâmetro.
// Fiz o reduce, percorrendo cada par de chave e valor do parâmetro.
// Busquei a chave do valor atual no objeto de preços e peguei o valor.
// Multipliquei o número de pessoas pelo preço.
function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const entrantsEntries = Object.entries(entrants);
  return entrantsEntries.reduce((acc, entrantType) =>
    acc + entrantType[1] * data.prices[entrantType[0]],
  0);
}

// PRIMEIRO REQUISITO:
// Se não tiver parâmetros, então vai filtrar pela localização.
// Criei ujm objeto vazio para o retorno da função.
// Criei um array com as localizações.
// Fiz um forEach nas localizações pra usar elas para o filter.
// Fiz um filter pra achar a localização atual, através do objeto do filter fiz um map pra pegar o name.
// Atribui os nomes à chave do objeto vazio, correspondente à localização atual.
const getAnimalMapWithoutParameter = (options) => {
  const speciesForLocation = {};
  const locationsArray = ['NE', 'NW', 'SE', 'SW'];
  locationsArray.forEach((locationCurr) => {
    const namesSpecies = data.species
      .filter(({ location }) => location === locationCurr)
      .map(({ name }) => name);
    speciesForLocation[locationCurr] = namesSpecies;
  });
  return speciesForLocation;
};

const getAnimalMapIncludeNames = (options) => {
  return data.species.reduce((objResult, specieCurrent) => {
    const objetoAnimals = {};
    objetoAnimals[specieCurrent.name] = specieCurrent.residents.map(({ name }) => name);
    console.log(objetoAnimals);
    objResult[specieCurrent.location] = objetoAnimals;
    console.log(objResult);
  }, {});
};
console.log(getAnimalMapIncludeNames({ includeNames: true }));

function getAnimalMap(options) {
  if (!options) return getAnimalMapWithoutParameter();
}

// Se não colocar o dia, manda a escala de todos os dias.
// Peguei o par de entradas do objeto data.schedule pra conseguir percorrer com o forEach.
// Se o dia for Monday, então tá fechado o dia todo.
// Nos outros dias eu criei uma chave no objeto vazio com o nome da chave do data.schedule e o valor com a frase pegando os horários.
const getScheduleGeneral = (dayName) => {
  const schedule = {};
  const scheduleEntrants = Object.entries(data.hours);
  if (!dayName) {
    scheduleEntrants.forEach((day) => {
      if (day[0] === 'Monday') schedule[day[0]] = 'CLOSED';
      else schedule[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    });
  }
  return schedule;
};

// Fiz a mesma coisa no anterior, mas busquei o dia, passado como parãmetro, nas entradas.
const getScheduleByName = (dayName) => {
  const schedule = {};
  const scheduleEntrants = Object.entries(data.hours);
  const scheduleDay = scheduleEntrants.find((day) => day[0] === dayName);
  if (dayName === 'Monday') schedule[dayName] = 'CLOSED';
  else {
    schedule[dayName] = `Open from ${scheduleDay[1].open}am until ${scheduleDay[1].close - 12}pm`;
  }
  return schedule;
};

function getSchedule(dayName) {
  if (!dayName) return getScheduleGeneral(dayName);
  return getScheduleByName(dayName);
}

// Na primeira constante eu busquei o id no objeto data.employees, acessei a chave responsibleFor e peguei o primeiro valor.
// Na segunda constante eu busquei o id do animal e acessei a chave residents, pegando um objeto com todos os animais.
// Na terceira constante eu fiz um map pra pegar todas as idades.
// Fiz um Math.max pra pegar o maior valor.
// Por fim, busquei o animal que tinha a idade igual à máxima e retornei seus valores.
function getOldestFromFirstSpecies(idEmployee) {
  const firstAnimalResponsableFor = data.employees.find(({ id }) =>
    id === idEmployee).responsibleFor[0];
  const animals = data.species.find(({ id }) => id === firstAnimalResponsableFor).residents;
  const ages = animals.map(({ age }) => age);
  const oldestAge = Math.max(...ages);
  return Object.values(animals.find(({ age }) => age === oldestAge));
}

// Peguei as chaves do objeto data.prices pra fazer um forEach.
// No forEach eu alterei a chave do objeto data.prices que era igual à atual do array percorrido.
// Multiplicar por 100, arredondar e dividir por 100 foi pra dar as casas decimais certas.
function increasePrices(percentage) {
  const pricesEntries = Object.keys(data.prices);
  pricesEntries.forEach((type) => {
    const percentageRight = (percentage + 100) / 100;
    const newPrice = parseFloat(data.prices[type]) * percentageRight;
    data.prices[type] = Math.round(newPrice * 100) / 100;
  });
}

// Sem o id ou nome, vou devolver um objeto com os nomes dos empregadose od ids dos animais que eles são responsáveis.
// O objeto ids, foi pra ter uma tradução, porque tava devolvendo o id cheio de letras e números, e não é o que ele quer.
// Peguei o array data.employees e fiz um forEach, que pra cada employee cria uma chave (com nome e sobre nome) no objeto vazio, com um valor que é um array com os ids já traduzidos.
const getEmployeeWithoutidOrName = (idOrName) => {
  const result = {};
  const ids = {
    '0938aa23-f153-4937-9f88-4858b24d6bce': 'lions',
    '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae': 'otters',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5': 'elephants',
    '78460a91-f4da-4dea-a469-86fd2b8ccc84': 'snakes',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274': 'frogs',
    'baa6e93a-f295-44e7-8f70-2bcdc6f6948d': 'bears',
    'e8481c1d-42ea-4610-8e11-1752cfc05a46': 'tigers',
    'ef3778eb-2844-4c7c-b66c-f432073e1c6b': 'penguins',
    '01422318-ca2d-46b8-b66c-3e9e188244ed': 'giraffes',
  };
  if (!idOrName) {
    data.employees.forEach(({ firstName, lastName, responsibleFor }) => {
      result[`${firstName} ${lastName}`] = responsibleFor.map((idAnimal) => ids[idAnimal]);
    });
  }
  return result;
};

// O que muda da anterior é que eu tenho o id, o nome ou o sobre nome do empregado, então vou procurar por eles e pegar o objeto do empregado.
function getEmployeeCoverage(idOrName) {
  const result = {};
  const ids = {
    '0938aa23-f153-4937-9f88-4858b24d6bce': 'lions',
    '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae': 'otters',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5': 'elephants',
    '78460a91-f4da-4dea-a469-86fd2b8ccc84': 'snakes',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274': 'frogs',
    'baa6e93a-f295-44e7-8f70-2bcdc6f6948d': 'bears',
    'e8481c1d-42ea-4610-8e11-1752cfc05a46': 'tigers',
    'ef3778eb-2844-4c7c-b66c-f432073e1c6b': 'penguins',
    '01422318-ca2d-46b8-b66c-3e9e188244ed': 'giraffes',
  };
  if (!idOrName) return getEmployeeWithoutidOrName(idOrName);
  const employee = data.employees.find(({ id, firstName, lastName }) =>
    idOrName === id || idOrName === firstName || idOrName === lastName);
  result[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor.map((idAnimal) =>
    ids[idAnimal]);
  return result;
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
