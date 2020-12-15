var epxress = require('express');
var app = epxress();

app.set('view engine', 'ejs');
// Utilizando o ejs como motor de view

app.get('/', (request, response)=>{
    response.render("home/index");
} );

app.get('/inclusao_noticia', (request, response)=>{
    response.render('admin/form_add_noticia');
} );

app.get('/noticias', (request, response)=>{
    response.render('noticias/noticias');
} );

app.listen(8080, () =>{
console.log('Servidor on 🚀');
});

// Colocando o servidor no ar com o express
// e tratando as rotas de acesso do usuario.