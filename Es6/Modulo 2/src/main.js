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


//

import classeUsuario, {idade as idadeUsuario}  from './function';
classeUsuario.info();
console.log(idadeUsuario);
