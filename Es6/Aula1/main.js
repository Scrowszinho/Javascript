class Matematica{
    static soma(a ,  b){
        return a + b;
    }
}

console.log(Matematica.soma(1,2));

// class list {
//     constructor() {
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }


// class TodoList extends list {
//     constructor() {
//         super();
//         this.usuario = 'Gustavo';
//     }

//     mostraUser() {
//         console.log(this.usuario);
//     }

// }

// const minhaLista = new TodoList();

// document.getElementById('adcionar').onclick = function () {
//     minhaLista.add('Novo Todo');
// }
// minhaLista.mostraUser(); 