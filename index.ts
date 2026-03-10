let x:number = 10

let nome:string = "Amanda"

let vetor:number[] = [1,2,3,4,5]

let nomes:string[] = ["oi","olá"]
console.log(nomes)

//Teste

let bol:boolean = true;

bol = false

const variavel:any = "oi"

const a:undefined = undefined;

const obj ={id:number,nome:string,idade:number}={ 
    id:1;
    nome: "Amanda",
    idade:19
}
obj.id=2
obj.nome = "Amandinha"
obj.idade=19

obj={
    id:2
    nome:"Amandinha",
    idade:19
}

const x1 = 10

const vetor1: number[]= [0,1,2,3,4]
vetor [0] = 10

//asdfasdg = [0,1,2,3,4]

let vetor2: number[] = [0,1,2,3,4]
vetor2 = [0,1,2,3,4]

const outraletra: number|string = 10 ;


const obj1:{id:}

///////////////////////Lista de exercicio 1///////////////////////

/**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 

//Início do seu código

function criaNovoVetor(vetor, valor1, valor2) {
  return [...vetor, valor1, valor2];
}

//Fim do seu código

/////////////////////////////////////////////////////////

/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código

function divisivelPor11(min, max) {
  const resultado = [];

  for (let i = min; i <= max; i++) {
    if (i % 11 === 0) {
      resultado.push(i);
    }
  }

  return resultado;
}

//Fim do seu código

///////////////////////////////////////////////////////////

/**
 *  Exercício 03 - maioresDeIdade
 * Nome da função - maioresDeIdade
 * Crie uma função que retorna um array com os objetos com idade maior que 18
 * @param {vetor:Pessoa[]} vetor Vetor de objetos com id, nome e idade
 * @returns {Pessoa[]} Retorna um array com os objetos com idade maior que 18
 * @example
 * 
 * const pessoa1 = {id: 1, nome: 'João', idade: 20}
 * const pessoa2 = {id: 2, nome: 'Maria', idade: 18}
 * const pessoa3 = {id: 3, nome: 'José', idade: 17}
 * maioresDeIdade([pessoa1, pessoa2, pessoa3]) // [pessoa1, pessoa2]
 */
interface Pessoa{
    id: number,
    nome: string,
    idade: number
}

//Início do seu código

function maioresDeIdade(vetor: Pessoa[]): Pessoa[] {
  return vetor.filter(pessoa => pessoa.idade >= 18);
}

//Fim do seu código

////////////////////////////////////////////////////////////////////

/**
 * Exercício 04 - resolve equação
 * Nome da função - resolveEquacao
 * Crie uma função que retorne os pontos em Y a partir de um vetor dos pontos em X da equação y = x^2 + 2x + 6
 * @param {number[]} vetor Vetor de pontos em X
 * @returns {number[]} Retorna um array com os pontos em Y
 * @example
 * resolveEquacao([1, 2, 3]) // [9, 14, 21]
 */

//Início do seu código

function resolveEquacao(vetor) {
  return vetor.map(x => x ** 2 + 2 * x + 6);
}

//Fim do seu código

////////////////////////Lista de exercicio 2///////////////////////////////
/**
 * Exercício 01 - Calcular o quadrado de um número
 * Nome da função - calcularQuadrado
 * Crie uma função que receba um número e retorne o seu valor elevado ao quadrado.
 * @param {number} a Número a ser calculado
 * @returns {number} Retorna o quadrado do número
 * @example
 * calcularQuadrado(2) // 4
 * calcularQuadrado(-3) // 9
 */

//Início do seu código

function criaNovoVetor(vetor, valor1, valor2) {
  return [...vetor, valor1, valor2];
}

//Fim do seu código

/////////////////////////////////////////////////////////////////////
/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código

function divisivelPor11(min, max) {
  const resultado = [];

  for (let i = min; i <= max; i++) {
    if (i % 11 === 0) {
      resultado.push(i);
    }
  }

  return resultado;
}

//Fim do seu código

//////////////////////////////////////////////////////////////////////
/**
 *  Exercício 03 - maioresDeIdade
 * Nome da função - maioresDeIdade
 * Crie uma função que retorna um array com os objetos com idade maior que 18
 * @param {vetor:Pessoa[]} vetor Vetor de objetos com id, nome e idade
 * @returns {Pessoa[]} Retorna um array com os objetos com idade maior que 18
 * @example
 * 
 * const pessoa1 = {id: 1, nome: 'João', idade: 20}
 * const pessoa2 = {id: 2, nome: 'Maria', idade: 18}
 * const pessoa3 = {id: 3, nome: 'José', idade: 17}
 * maioresDeIdade([pessoa1, pessoa2, pessoa3]) // [pessoa1, pessoa2]
 */
interface Pessoa{
    id: number,
    nome: string,
    idade: number
}

//Início do seu código

function maioresDeIdade(vetor) {
  return vetor.filter(pessoa => pessoa.idade >= 18);
}

//Fim do seu código

////////////////////////////////////////////////////////////////////
/**
 * Exercício 04 - resolve equação
 * Nome da função - resolveEquacao
 * Crie uma função que retorne os pontos em Y a partir de um vetor dos pontos em X da equação y = x^2 + 2x + 6
 * @param {number[]} vetor Vetor de pontos em X
 * @returns {number[]} Retorna um array com os pontos em Y
 * @example
 * resolveEquacao([1, 2, 3]) // [9, 14, 21]
 */

//Início do seu código

function resolveEquacao(vetor) {
  return vetor.map(x=>{
    return Math.pow(x, 2) + (2 * x) +6;
  }):
}

//Fim do seu código































//Terminem essa função para escrever para retornar a some de todos 
//Os elementos de um vetor.
// somaVetor([1,2,3])  => 6
// somaVetor([1,2,3,4]) => 10
function somaVetor(vetor:number[]){
    for (let i = 0; i < vetor.length; i++){
        const element = vetor[i];
        soma = soma + element!
    }
    resturn soma
}

//2 - Some as posições de um vetor que são pares 
// Ex somaPares([1,2,3,4]) => 6
// Ex somaPares([1,2,3,4,5])
// Ex somaPares