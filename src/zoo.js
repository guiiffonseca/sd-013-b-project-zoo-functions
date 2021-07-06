const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

// map - vai percorrer o array e retorna outro array de acordo com a função passada.
// rest - pega strings e junta num array.
// find - procura o id do parâmetro no id de cada espécie
// se não passar nenhum parâmetro o map vai retornar o array vazio, visto q ele ja retorna um array, independente do parâmetro passado, por isso passa no primeiro teste.
// retorna um array com a espécie do id do parâmetro.

function getAnimalsOlderThan(animal, age) {
  return data.species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

// find - procura dentro das espécies o nome do animal passado no parâmetro (animal).
// every - verifica se TODOS os residentes tem a idade mínima passada no parâmetro (age).
// retorna true ou false.

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

// no if se não passar nenhum parâmetro retorna um objeto vazio.
// no array employees (array de objetos), procura o objeto com o firstName ou lastName passado no parâmetro.
// retorna um objeto com as informações do employee passado no parâmetro.
// { firstName, lastName } -> object destructuring para acessar as propriedades do objeto.

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// o spread junta os 2 objetos do parâmetro e retorna um objeto.

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}

// o includes verifica se na chave managers está o parâmetro (id) passado, o some vai percorrer o array employees para verificar se ao menos um dos elementos passa no teste, retornando true ou false.

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// push no array employees para incluir o parâmetro passado na última posição
// object property shorthand para incluir chaves e valores do objeto, sem precisar repetir os nomes das chaves.
// default parameters nas chaves managers e responsibleFor caso não seja passado o parâmetro retorna um array vazio.

function countAnimals(species) {
  if (!species === 0) return {};

  if (species) {
    const findName = data.species.find(({ name }) => name === species);
    return findName.residents.length;
  }

  const findAnimal = {};

  data.species.forEach(({ name, residents }) => {
    findAnimal[name] = residents.length;
  });

  return findAnimal;
}

// se não recebe parâmetro retorna um objeto vazio.
// dado um parâmetro (nome do animal) ele vai procurar através do find se o nome do animal é igual ao passado no parâmetro e retornar o tamanho da chave, que é o número de animais.
// passo uma constante com um objeto vazio para retornar o resultado do que é pedido depois da função (um objeto com o nome e numero de residentes).
// o forEach vai executar a função em cada elemento name e residents e para cada espécie eu pego o nome e o número de reidentes.

function calculateEntry(entrants) {
  if (!entrants || entrants === 0) return 0;

  const entries = Object.entries(entrants);
  return entries.reduce((acc, personType) =>
    acc + personType[1] * data.prices[personType[0]], 0);
}

// se não tiver parâmetro ou o objeto for vazio retorna 0.
// criei uma constante que pega todas as entradas do objeto num array, por exemplo ['adult', '2'], depois faço um reduce pegando esse array. o acumulador soma (com o index[1] desse array que é o numero de pessoas multiplicado pelo preço de cada pessoa no index[0]). o último 0 faz parte da sintaxe do reduce, onde a soma começa com 0.

function getAnimalMap(options) {
  // seu código aqui
}

function scheduleAllDays(dayName) {
  const schedule = {};
  const days = Object.entries(data.hours);
  if (!dayName) {
    days.forEach((day) => {
      if (day[0] === 'Monday') schedule[day[0]] = 'CLOSED';
      else schedule[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    });
  }
  return schedule;
}

function scheduleOneDay(dayName) {
  const schedule = {};
  const days = Object.entries(data.hours);
  const specificDay = days.find((day) => day[0] === dayName);
  if (dayName === 'Monday') schedule[dayName] = 'CLOSED';
  else {
    schedule[dayName] = `Open from ${specificDay[1].open}am until ${specificDay[1].close - 12}pm`;
  }
  return schedule;
}

function getSchedule(dayName) {
  if (!dayName) return scheduleAllDays();
  return scheduleOneDay(dayName);
}

// fiz 2 funções adicionais pra pegar cada um dos testes.
// a primeira função scheduleAllDays é para caso não seja passado nenhum parâmetro. fiz uma constante schedule = {} para trazer o resultado depois da função e outra função com o array de array das informações do objeto prices. se não tiver parâmetro (!dayName) faço um forEach para buscar as informações, se o day no index[0] for 'Monday' está 'CLOSED'. se o day no index[0] for outro dia será o o horário de funcionamento. e dentro da função eu retorno o schedule com o resultado.
// a segunda função scheduleOneDay é para caso seja passado um dia como parâmetro. fiz uma constante schedule = {} para trazer o resultado depois da função e outra função com o array de array das informações do objeto prices. fiz um find para encontrar dentro desse array o parâmetro passado day[0] === dayName. se o day no index[0] for 'Monday' está 'CLOSED'. se o day no index[0] for outro dia será o o horário de funcionamento. e dentro da função eu retorno o schedule com o resultado.
// a função getSchedule retorna: a função scheduleAllDays se não tiver parâmetro ou a função scheduleOneDay passando o parâmetro.

function getOldestFromFirstSpecies(id) {
  const employeeId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animalsId = data.species.find((specie) => specie.id === employeeId).residents;
  const ages = animalsId.map(({ age }) => age);
  const oldestAnimal = Math.max(...ages);
  return Object.values(animalsId.find(({ age }) => age === oldestAnimal));
}

// const residentAnimals = animalsId.residents;
// const responsible = employeeId.responsibleFor[0];

// primeiro eu criei uma constante para acessar procurar o id do employee. em vez de criar outra constante para acessar a chave responsibleFor eu ja fiz isso com o .responsibleFor[0] para acessar o primeiro valor da mesma.
// depois criei outra constante para encontrar o id da especie que seja igual ao id do responsibleFor do employee. e da mesma maneira em vez de criar outra constante oara acessar a chave residents eu fiz isso com o .residents.
// depois criei outra constante e fiz um map que vai me retornar um array com todas as idades.
// depois criei outra constante para pegar a maior idade (math.max) dentro do array ages, usei spread operator.
// para o retorno acessei os valores do objeto da chave residents e busquei o animal com a idade igual a idade maxima.

function increasePrices(percentage) {
  const allPrices = Object.entries(data.prices);
  allPrices.forEach((entry) => {
    const newPrice = (entry[1] + entry[1] * (percentage / 100));
    data.prices[entry[0]] = Math.round(newPrice * 100) / 100;
  });
}

// criei uma constante para acessar o objeto prices e fiz um forEach para executar a função em cada elemento.
// a constante newPrice vai pegar o preço atual (entry[1]) e vai somar com a porcentagem + o preço.
// depois eu pego a chave do objeto prices (entry[0]) e adiciono o novo valor arredondado com 2 casas decimais.

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
