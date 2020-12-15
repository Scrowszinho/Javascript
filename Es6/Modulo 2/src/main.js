// import {soma as somaFunc} from './funcoes';
import * as funcoes from './funcoes';
console.log(funcoes.soma(1,2));
console.log(funcoes.multi(3,2));

import somaf, {sub} from './soma';
console.log(somaf(5,6));
console.log(sub(9,2));

// Aprendendo função de export/import
// Utulizando o default antes do export
// faz com que a função seja a padrão.
// Como mostrada no primeiro exemplo
// onde se importa todas as fuções chamando-as
// apenas com a variavel funcoes.


// Exercicio
import classeUsuario, {idade as idadeUsuario}  from './function';
classeUsuario.info();
console.log(idadeUsuario);
// 

const minhaPro = () => new Promise((resolve,reject) =>{
setTimeout(() => {resolve('Ok')},2000);
});

minhaPro().then(response =>{
 console.log(response);
});

async function executaProm(){
 const response = await minhaPro();
 console.log(response);
 console.log(await minhaPro());
 console.log(await minhaPro());
};
// Awai só funciona dentro de uma função
// async.
// Poderia ser feito através de uma const 
// const executaProm = async(){};
executaProm();