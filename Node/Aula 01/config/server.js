var epxress = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = epxress();
app.set('view engine', 'ejs');
app.set('views','./app/views');
// Utilizando o ejs como motor de view

app.use(bodyParser.urlencoded({extended:true}));

consign()
        .include('app/routes')
        .then('config/dbConnection.js')
        .then('app/models')
        .into(app);
// Incluindo rotas pelo consign

module.exports = app;