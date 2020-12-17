var epxress = require('express');
var consign = require('consign');

var app = epxress();
app.set('view engine', 'ejs');
app.set('views','./app/views');
// Utilizando o ejs como motor de view

consign()
        .include('app/routes')
        .then('config/dbConnection.js')
        .into(app);
// Incluindo rotas pelo consign

module.exports = app;