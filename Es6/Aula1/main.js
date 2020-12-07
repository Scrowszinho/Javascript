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