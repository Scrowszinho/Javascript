var epxress = require('express');
var app = epxress();

app.set('view engine', 'ejs');
// Utilizando o ejs como motor de view

app.get('/', (request, response)=>{
    response.send("<html><body>Teste com Express</body></html>");
} );

app.get('/moda', (request, response)=>{
    response.render('secao/moda');
} );

app.listen(8080, () =>{
console.log('Servior on 🚀');
});

// Colocando o servidor no ar com o express
// e tratando as rotas de acesso do usuario.