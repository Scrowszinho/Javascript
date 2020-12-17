var app = require('./config/server');
// var rotaHome = require('./app/routes/home')(app);
// var rotaNoticias = require('./app/routes/noticias')(app);
// var rotaForm = require('./app/routes/formularioInclusao')(app);
 

app.listen(8080, () =>{
console.log('Servidor on 🚀');
});

// Colocando o servidor no ar com o express
// e tratando as rotas de acesso do usuario.