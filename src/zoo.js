const { species, employees, prices, hours } = require('./data');

// seu código aqui
const getSpeciesByIds = (...ids) => { // Usando o rest parameter para mais de um parametro que converte meus parametros em um array.
  if (!ids) return []; // Condicional com a negação de ids para retornar vazio.
  return species.filter((specie) => ids.includes(specie.id)); // Usando um filter para percorrer o species e um includes em cada iteração dele para verificar se possui o id especificado no parametro.
};

// seu código aqui
const getAnimalsOlderThan = (animal, age) =>
  species.find((specie) => specie.name === animal) // Usando o fin para encontrar o primeiro animal que corresponde com o parametro passado através de animal.
    .residents.every((resident) => resident.age >= age); // Usando um every para percorrer dentro do resultado do find que é um objeto e acessando a propriedade residents para verificar se todas as idades são maiores ou iguais a passada por parametro.

// seu código aqui
const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {}; // Condicional com a negação do parametro para retornar um objeto vazio.
  return employees.find((employee) => // Usando find para localizar o primeiro employee que atender as condições.
    employeeName === employee.firstName || employeeName === employee.lastName);
};

// seu código aqui
const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith }); // Criando um novo employee(objeto), usando o spread no retorno dos parametros inseridos para que possa englobar todos os parametros passados nas variáveis.

// seu código aqui
const isManager = (id) => employees.some((employee) => employee.managers.some((ids) => ids === id)); // Usando um some para verificar se algum employee possui um mananger na verificação dos ids que os managers possuem.

// seu código aqui
const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => // Usando dois default parameters caso eles não possuam parametros na entrada.
  employees.push({ id, firstName, lastName, managers, responsibleFor }); // Adicionando um novo employee ao final do array de employees com um object destructuring para criar seus parametros usando também object property shorthand, com os valores que eles receberem.

// seu código aqui
const countAnimals = (animalSpecie) => {
  if (!animalSpecie) { // Condicional de negação da variavel para retornar um novo objeto.
    const allSpecies = {}; // Criando objeto vazio.
    species.forEach((specie) => { // Em cada iteração do forEach o objeto contendo todos os animais com a chave recebendo o nome da respectiva especie e como valor o tamanho de residents dessa especie.
      allSpecies[specie.name] = specie.residents.length;
    });
    return allSpecies;
  }
  return species.find((specie) => specie.name === animalSpecie).residents.length; // Contador para contar a quantidade de residents na especie que é buscada pelo find comparando o parametro.
};

// seu código aqui
const calculateEntry = (entrants) => {
  if (!entrants || entrants === {}) return 0; // Condicional para verificar a negação da variavel OU se a variável é um objeto vázio.
  const { Adult: adult = 0, Child: child = 0, Senior: senior = 0 } = entrants; // Constante armazenando um objeto com seus valores zerados que serve como parametro para receber a quantidade de pessoas de cada faixa etária.
  return ((adult * prices.Adult) + (child * prices.Child) + (senior * prices.Senior)); // Retorno da função multiplicando a quantidade de pessoas do novo objeto, com o valor passado no preço de cada pessoa e somando o valor total.
};

// seu código aqui
const sortResidents = ({ residents, sorted, sex }) => { // Função para auxiliar a animalMap e sortear os residents.
  if (sorted) { // Se sorted for true
    return residents.filter(({ sex: sortSex }) => sex === '' || sortSex === sex) // Retorna os nomes dos animais ordenadamente.
      .map(({ name }) => name).sort();
  }
  return residents.filter(({ sex: sortSex }) => sex === '' || sortSex === sex) // Senão retorna sem ordenação.
    .map(({ name }) => name);
};

const getAnimalMap = ({ includeNames = false, sorted = false, sex = '' } = {}) => // Default parameters do objeto options.
  species.reduce((accumulador, { name, location, residents }) => {
    const auxiliarAcc = accumulador; // Constante para armazenar o auxiliador.
    if (!auxiliarAcc[location]) { auxiliarAcc[location] = []; } // Negação da constante para reatribuir um array vazio no auxiliar no index da localização
    if (includeNames) { // Se includeNames for true
      auxiliarAcc[location].push({ // Adiciona os animais em ordem alfabetica
        [name]: sortResidents({ residents, sorted, sex }),
      });
    } else { // Senão adiciona eles na ordem normal.
      auxiliarAcc[location].push(name);
    }
    return auxiliarAcc;
  }, {});

// seu código aqui
const getSchedule = (dayName) => {
  const days = Object.keys(hours); // Constante armazenando as keys do objeto Hours que é um parametro do Data.
  const week = days.reduce((accumulator, curr) => { // Utilizando um reduce para
    accumulator[curr] = `Open from ${hours[curr].open}am until ${hours[curr].close - 12}pm`; // Atribuir ao accumulador utilizando o current como index para formatar o template literals com a hora do dia no parametro open e com a hora do dia, no parametro close e retirando 12h desse valor para formatação com o pm.
    return accumulator;
  }, {});
  week.Monday = 'CLOSED'; // Atribuindo ao dia Monday, o status de fechado.
  if (days.includes(dayName) === true) { // Condicional para verificar se meu array days inclui o parametro dayName, caso seja true;
    return { [dayName]: week[dayName] }; // Retorna um objeto contendo o parametro dayName como chave e o dia da semana que contem o dayName como index para buscar seu valor imprimir seu valor que estava contido no accumulator.
  } return week;
};
// Função criada para auxiliar na função Oldest.
const speciesId = (...employeeId) => species.filter((specie) => // Usando um rest parameter para filtrar a especie que contem a pessoa responsável através do id.
  employeeId.includes(specie.id));
// seu código aqui
const getOldestFromFirstSpecies = (id) => {
  const employeeId = employees.find((employee) => employee.id === id).responsibleFor; // Constante para armazenar o resultado do find, que busca o responsibleFor do objeto que contem o id passado por parametro.
  const specieId = speciesId(...employeeId).reduce((accumulator, curr) => { // Chamando uma função que recebe um rest para utilizar um reduce nas especies encontradas pelo filter.
    const { residents } = curr; // Desestruturando a chave residents do objeto no current.
    accumulator.push(...residents); // Usando um push para adicionar todos os residents que tiver na desestruturação acima.
    return accumulator;
  }, []).sort((value1, value2) => value2.age - value1.age); // Utilizando um sort para organizar em ordem decrescente as idades dos animais que são resultado do array do recude
  return Object.values(specieId[0]);
};

// seu código aqui
const increasePrices = (percentage) => {
  const number = 1 + (percentage / 100); // Usando uma constante para armazenar o calculo de percentage.
  const value = Object.keys(prices); // Uma constante para armazenar as chaves do objeto prices.
  value.forEach((key) => { // Utilizando um forEach para iterar sobre a chave dos valores de price.
    const priceIncreased = prices[key] * number; // Uma constante para armazenar a multiplicação de porcentagem com o preço estipulado pela chave.
    const priceRounded = Math.round(priceIncreased * 100) / 100; // Uma constante para armazenar o calculo arredondado do preço acrescentado multiplicando por 100 e dividindo novamente por 100 para pegar o valor exato.
    prices[key] = priceRounded; // Atribuindo o preço arredondado a chave de prices.
  });
};

const animalId = (id) => species.find((specie) => specie.id === id).name; // Função auxliar para pegar o nome da primeira especie que corresponder com o id.
// seu código aqui
const getEmployeeCoverage = (idOrName) => {
  if (!idOrName) { // Condicional negando a variável.
    const dude = employees.reduce((accumulator, curr) => { // Constante para armazenar um reduce no objeto employees.
      const animals = curr.responsibleFor.map(animalId); // Constante para armazenar um array gerado pelo map, ao pegar o responsibleFor do current que recebe o resultado da função animalId.
      accumulator[`${curr.firstName} ${curr.lastName}`] = animals; // Acumulador recebendo o current first name e last name do array animals.
      return accumulator;
    }, {});
    return dude;
  }
  const request = employees.filter(({ id, firstName, lastName }) => // Constante para armazenar a filtragem que das propriedades passadas pelo object destructuring do objeto employee.
    id === idOrName || firstName === idOrName || lastName === idOrName); // condicional para verificar se o id ou o nome ou o sobrenome é igual ao parametro da função.
  const result = request.reduce((accumulator, curr) => { // Constante para armazenar o resultado do reduce.
    const animals2 = curr.responsibleFor.map(animalId); // Constante para armazenar um array gerado pelo map, ao pegar o responsibleFor do current que recebe o resultado da função animalId.
    accumulator[`${curr.firstName} ${curr.lastName}`] = animals2; // Acumulador recebendo o current first name e last name do array animals2.
    return accumulator;
  }, {});
  return result;
};

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
