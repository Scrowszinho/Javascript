// class Admin{
//     constructor() {
//         this.email = '';
//         this.senha = ''
//         this.admin = true;
//     }
// };

// class Usuario extends Admin{
// constructor(){

// }
// isAdmin(){
// if(Admin()){return true;}else{
//     return false;
// }  
// }
// };

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true


//

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// Exer 2.1
var idades = usuarios.map(function (item) {
    return item.idade;
});
console.log(idades);

// Exer 2.2
var funRock = usuarios.filter(function (item) {
    return item.idade > 18 && item.empresa === 'Rocketseat';
});
console.log(funRock);

// Exer 2.3
var localiza = usuarios.find(function (item) {
    return item.empresa === 'Google';
});
console.log(localiza);

// Exer 2.4
var idade2 = usuarios.filter(function (item) {
    return item.idade * 2 <= 50;
});
console.log(idade2);

// 3.1
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10));



// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 25;
const mostraUsuario = (nome = 'Gustavo', idade = 20) => ( nome, idade );
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
// const promise = (new Promise(function(resolve, reject) =>resolve()));
   