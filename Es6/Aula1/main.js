class Matematica{
    static soma(a ,  b){
        return a + b;
    }
}
console.log(Matematica.soma(1,2));
// Conceito de classe em JS
// Juntament com o static


// 

class list {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}
// Criação da classe pai, onde cria-se um array
// e adciona um elemento através da função add com 
// variavel data como parametro. 
//
class TodoList extends list {
    constructor() {
        super();
        this.usuario = 'Gustavo';
    }

    mostraUser() {
        console.log(this.usuario);
    }
}
// Criação da classe filha TodoList
// extendida da classe lista
// Que cria uma variavel e função de exibila
// e herda as as outras variaveis

const minhaLista = new TodoList();
// Criando uma variavél para executar a classe TodoList

document.getElementById('adcionar').onclick = function () {
    minhaLista.add('Novo Todo');
}
minhaLista.mostraUser(); 
// Passando valores e exibindo o usuario


// Operações com array
const arr = [1,2,3,4,5,7];
// Criação de um array com números
const newArr = arr.map(function(item, index){
return item + index;
});
console.log(newArr);
// map retorna a soma do número + o seu index

const soma = arr.reduce(function(total,next){
return total+next;
});
console.log(soma);
// Soma o anterior + o posterior
// Começando com o index = 0 + item = 1

const filtro = arr.filter(function(item){
return item % 2 === 0;
});
console.log(filtro);
// filter Filtra alguma operação e sempre retorna
// true ou false

const localiza = arr.find(function(item){
    return item === 4; 
});
console.log(localiza);
// find roda o array em busca do teste logico realizado
//

// 
// Aprendendo Arrow function
const arrowFunc = arr.map(item =>item * 2);
console.log(arrowFunc);
// Criando uma função utilizando seu propósito diretamente
// sem precisar declarar a função.

const test = () =>{ 
    return {nome: 'Gustavo'}
}
console.log(test());
// Criando uma função de maneira direta(Não recomendada)
// e retornando seu propósito de maneira direta.

// Valores padrão em constantes
const somaPad = (a = 1,b = 1)=> a+b;
console.log(somaPad(3));
console.log(somaPad());
// Passando um ou mais valores para substituir
// o padrão.

// Aprendendo o conceito de desestruturação
const user = {
    nome: 'Luis Gustavo',
    idade: 20,
    endereco: {
    cidade: 'Aparecida',
    uf: 'SP'
    }
}
// Cria-se um array com outro array dentro
function mostraUsuario({nome, idade, endereco:{cidade}}){
console.log(nome, idade, cidade);
}
// E para obter a informação desejada, passa o nome
// e a variavel que deseja acessar.
mostraUsuario(user);
//


// Conceito de Rest / Spread
const {nome, idade, ...resto} = user;
console.log(resto);
// Utilizando o ...var retorna todos os valores do array user
// que não sejam definidos, no exemplo, todas do enderço.
function som(...params){
return params.reduce((total, next) => total+next);
}
console.log(som(1,3,4));
// Outra maneira de entender o rest mas agora com
// arrow function.

// Conceito de spread
const user2 = {...user, nome: 'Gustavo'}
console.log(user2);
// Pega todas as variaveis e substitui apenas um valor
// desejado.


// Template Literals
const nome1 = 'Gustavo';
const idade1 = 20;
console.log('Meu nome é '+nome1+' e tenho '+idade1+' anos');
console.log(`Meu nome é ${nome1} e tenho ${idade1} anos`);
// Usando o template Literals para concatenar de maneira direta
// as variaveis desejadas.

// Object short syntax
const usuo  = {
    nome1,
    idade1,
    faculdade:'FATEC',
}
console.log(usuo);
// Utilizando o short syntax para
// adcionar variaveis com valores ja existentes.