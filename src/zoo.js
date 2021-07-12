const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) { // o parâmetro rest "...ids" permite que um número infedinido de argumentos seja passado para a função. isto é necessário caso a função receba mais de um argumento, como acontece no requisito 3.
  if (arguments.length === 0) { // usamos a propriedade das funções chamada arguments para definir que se não tiver nenhum argumento deve retornar um array vazio.
    return [];
  }
  const filterAnimal = species.filter((speciesValue) => ids.includes(speciesValue.id)); // aplicamos a função filter para filtrar apenas o que queremos. depois usamos o includes para saber se nos parametros temos incluido o valor do animal.id (o includes retorna "true" caso exista a sentença, e é justamente a definição que o filter utiliza (true) para adicionar os itens no novo array.)
  return filterAnimal;
}
// console.log(getSpeciesByIds(species));

function getAnimalsOlderThan(animal, age) {
  const filterAge = species.find((speciesValue) => speciesValue.name === animal); // usamos o find para encontrar a especie que coincida com o parametro 'animal' e salvar o animal na variavel filterAge
  return filterAge.residents.every((residentsValue) => residentsValue.age >= age); // já com array do animal encontrado pelo find vamor acessar os residentes e aplicar o every para descobrir se todos tem a idade maior ou igual a idade passada como parametro.
}

function getEmployeeByName(employeeName) {
  if (arguments.length === 0) { // usamos o arguments.lengh === 0 para checar se existe algum argumento.
    return {};
  }
  const filterName = employees.find((employeesValue) =>
    employeesValue.firstName === employeeName || employeesValue.lastName === employeeName); // como precisamos encontrar o emplooye que coincida ou com o name ou last name usamos o find, pois ele retornará o primeiro resultado.
  return filterName;
}
// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  const newColaborator = { // montamos o objeto newColaborator passando as informações contidas no objeto personalInfo(parametro) que segundo o enunciado continha (id, firstName e LastName) E passamos o maneger e responsibility que estavão contidos no objeto do parametro associatedWith.
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newColaborator;
}

function isManager(id) {
  const checkManeger = employees.find((employeesValue) => employeesValue.id).managers // encontramos com o find o employeer com id passado no parametro, depois acessamos a chave menager e com o some verificamos se existe algum valor com o id passado.
    .some((managersValue) => managersValue === id);
  return checkManeger;
}
// console.log(isManager('stephanieId'));

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const employee = { // criamos um objeto com os parametros passados e depois fizemos o push dele dentro do objeto employees.
    id,
    firstName,
    lastName,
    managers: managers || [], // atenção aqui pois alguns emplooyes não tem maneger ou responsibleFOr, desta forma deve-se passar a possibilidade do vazio.
    responsibleFor: responsibleFor || [], // atenção aqui pois alguns emplooyes não tem maneger ou responsibleFOr, desta forma deve-se passar a possibilidade do vazio.
  };
  employees.push(employee);
}

function countAnimals(specieAnimal) {
  if (specieAnimal === undefined) {
    return species.reduce((obj, speciesValue) =>
      ({ ...obj, [speciesValue.name]: speciesValue.residents.length }), {}); // junção de objetos encontrada em: var object = arr.reduce((obj, item) => ({...obj, [item.key]: item.value}) ,{}); VOLTAR PARA ANALISAR DEPOIS ENTENDI + OU - !!!!!!!!!!!!!!
  }
  return species.find((speciesValue) => speciesValue.name === specieAnimal).residents.length; // usamos o find para encontrar o objeto com o nome do animal passado como parametro, depois com o objeto selecionado utilizamos a chave residents com '.length' par descobrir a quantidade de chaves e assim o número de animais.
}

// console.log(countAnimals());

function calculateEntry(entrants) {
  if (arguments.length === 0 || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants; // Ajuda na sala de estudos, mas não ficou muito claro (voltar para rever!!): Precisamos igualar a 0 para fazer um acumulador? ou porque o valor passado pode ser 0? (porque eu não poderia fazer direto como nas duas linhas seguintes?)
  // const calculateValue = (entrants.Adult * prices.Adult) + (entrants.Child * prices.Child) + (entrants.Senior * prices.Senior);
  //   return calculateValue
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) { // Pessoal da sala da estudo me ajudou a fazer (VOLTAR E REFAZER COM CALMA!!!)
  const day = {};
  const selectDay = Object.keys(hours); // Pegamos todas as chaves do objeto hours (Os dias da semana)
  // console.log(selectDay);
  selectDay.forEach((hour) => { // pegamos o array com os dias da semana e iteramos ele com forEach, tomando cuidado pois a segunda feira é um caso diferente pois está closed.
    if (hour === 'Monday') {
      day[hour] = 'CLOSED';
    } else {
      day[hour] = (`Open from ${hours[hour].open}am until ${hours[hour].close - 12}pm`); // montamos a template literal com as possíveis saidas iterando com o forEach.
    }
  });
  if (arguments.length === 0) { // montamos a lógica para caso não seja retornado nenhum parametro, será retornado o objeto weekday que já foi preenchido com os dias na parte de cima do código.
    return day;
  }
  return { [dayName]: day[dayName] }; // lógica para se apenas um dia for passado.  
}
console.log(getSchedule());

function getOldestFromFirstSpecies(id) {
  const takeCare = employees.find((employeesValue) => employeesValue.id === id).responsibleFor // usamos o find para encontrar o funcionario com o id passado por parametro. Depois de acessado o objeto do emplooye acessamos suas responsabiliddes.
    .find((animalValue) => animalValue); // despois de estamos dentro das responsabilidades usamos o find para acessar o primeiro animal, pois ele retorna o primeiro que encontrar.
  const olderAnimal = species.find((speciesValue) => speciesValue.id === takeCare).residents // agora usamos o id salvo na consta 'takecare' para encontrar o animal que o emplooye cuida primeiro.
    .reduce((giraffesAcumulator, giraffesValue) => { // A girafa é encontrada, nela usamos o reduce para encontrar o animal mais velho, se valendo do acumulador e do valor para fazer as comparaçoes.
      if (giraffesAcumulator.age > giraffesValue.age) {
        return giraffesAcumulator;
      }
      return giraffesValue;
    });
  return Object.values(olderAnimal); // "Object.values" retirado de: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values'
}

// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // if (arguments.length === 0) {
  //   return employees.map((employeesValue) => {
  //   delete employeesValue.lastName
  //   delete employeesValue.managers
  //   delete employeesValue.id
  //   return employeesValue
  //   });
}
// }
// console.log(getEmployeeCoverage())

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
