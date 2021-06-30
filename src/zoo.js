const { species, employees } = require('./data');

/* 1. IMPLEMENTE A FUNÇÃO getSpeciesByIds
Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

Observações técnicas

O parâmetro desta função pode ser alterado para atender ao requisito proposto
O que será avaliado

Caso receba nenhum parâmetro, necessário retornar um array vazio
Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id
Ao receber mais de um id, retorna um array com as espécies referentes aos ids */

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

/* 2. IMPLEMENTE A FUNÇÃO getAnimalsOlderThan
Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada

Observações técnicas

Deve retornar um valor booleano
O que será avaliado

Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada */

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((specie) => specie.name === animal);
  return animals.residents.every((anim) => anim.age >= age);
}

// console.log(getAnimalsOlderThan('otters', 7))

/* 3. IMPLEMENTE A FUNÇÃO getEmployeeByName
Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

O que será avaliado

Sem parâmetros, retorna um objeto vazio
Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
Quando provido o último nome do funcionário, retorna o objeto do funcionário
 */

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const empregados = (empregado) =>
    empregado.firstName === employeeName || empregado.lastName === employeeName;
  return employees.find(empregados);
}

// console.log(getEmployeeByName('Emery'));

/* 4. IMPLEMENTE A FUNÇÃO createEmployee
A função, a partir de informações recebidas nos parâmetros, é capaz de criar um objeto equivalente ao de uma pessoa colaboradora, retornando-o

Observações técnicas

O parâmetro personalInfo recebe um objeto que contém o id, o firstName e o lastName
O parâmetro associatedWith recebe um objeto que contém dois array: managers e responsibleFor
O que será avaliado

Cria um novo colaborador a partir de objetos contendo informações pessoais e gerentes e animais gerenciados. */

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

// console.log(createEmployee(personalInfo, associatedWith));

/* 5. IMPLEMENTE A FUNÇÃO isManager
Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.

Observações técnicas

Deve retornar um valor booleano
O que será avaliado

Testa se o id passado é de um gerente */

function isManager(id) {
  const ids = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83'];
  let result = false;
  for (let index = 0; index <= ids.length; index += 1) {
    if (id === ids[index]) {
      result = true;
    }
  } return result;
}

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

/* 6. IMPLEMENTE A FUNÇÃO addEmployee
A função irá adicionar uma nova pessoa colaboradora ao array employees, presente no arquivo data.js.

O que será avaliado

Adiciona um funcionário no fim da lista */

const addEmployee = (id, firstName, lastName, managers, responsibleFor) => {
  let man = managers;
  let res = responsibleFor;
  if (man === undefined) man = [];
  if (res === undefined) res = [];
  employees.push({
    id,
    firstName,
    lastName,
    managers: man,
    responsibleFor: res,
  });
};

/* 7. IMPLEMENTE A FUNÇÃO countAnimals
Esta função é responsável por contabilizar a quantidade de animais.

Observações técnicas

Sem parâmetros, retorna um objeto
Com o nome de uma espécie de animal, retorna um número
O que será avaliado

Sem parâmetros, retorna animais e suas quantidades
Com o nome de uma espécie de animal, retorna somente a quantidade */

/* function countAnimals(species) {
  // seu código aqui
} */

/* 8. IMPLEMENTE A FUNÇÃO calculateEntry
A partir da quantidade de visitantes e a faixa etária de cada um, esta função é responsável por retornar o preço total a ser cobrado

Observações técnicas

O parâmetro entrants recebe um objeto que contém as chaves Adult, Child e Senior, com suas respectivas quantidades de pessoas
O que será avaliado

Retorna 0 se nenhum argumento for passado
Retorna 0 se um objeto vazio for passado
Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos */

function calculateEntry(entrants) {
  // seu código aqui
}

/* 9. IMPLEMENTE A FUNÇÃO getAnimalMap
A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e gênero, por exemplo

Observações técnicas

Analise o teste unitário para entender os retornos que são esperados para esta função
O que será avaliado

Sem parâmetros, retorna animais categorizados por localização
Com a opção includeNames: true especificada, retorna nomes de animais
Com a opção sorted: true especificada, retorna nomes de animais ordenados
Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de animais macho/fêmea
Com a opção sex: 'female' ou sex: 'male' especificada e a opção sort: true especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados
Só retorna informações ordenadas e com sexo se a opção includeNames: true for especificada
 */

function getAnimalMap(options) {
  // seu código aqui
}

/* 10. IMPLEMENTE A FUNÇÃO getSchedule
A função é responsável por disponibilizar as informações de horário para uma consulta, que pode querer ter acesso a todo o cronograma da semana ou apenas o cronograma de um dia específico

Observações técnicas

Analise o teste unitário para entender os retornos que são esperados para esta função
O que será avaliado

Sem parâmetros, retorna um cronograma legível para humanos
Se um único dia for passado, retorna somente este dia em um formato legível para humanos
 */

function getSchedule(dayName) {
  // seu código aqui
}

/* 11. IMPLEMENTE A FUNÇÃO getOldestFromFirstSpecies
A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro

O que será avaliado

Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie
 */

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

/* 12. IMPLEMENTE A FUNÇÃO increasePrices
A função é responsável por aumentar o preço das visitas, com base no valor de aumento recebido no parâmetro, em porcentagem

Observações técnicas

Se o parâmetro da função recebe o valor 20, o aumento é de 20%
Altera o objeto prices do arquivo data.js
O que será avaliado

Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais */

function increasePrices(percentage) {
  // seu código aqui
}

/* 13. IMPLEMENTE A FUNÇÃO getEmployeeCoverage
A função é responsável por consultar as espécies pela qual a pessoa colaborada, recebida no parâmetro através de seu id, firstName ou lastName, é responsável

Observações técnicas

Analise o teste unitário para entender os retornos que são esperados para esta função
O que será avaliado

Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
Com o último nome de um funcionário, retorna os animais pelos quais o funcionário é responsável */

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  //  countAnimals,
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
