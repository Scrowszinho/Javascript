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