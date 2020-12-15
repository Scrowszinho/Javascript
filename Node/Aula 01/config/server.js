var epxress = require('express');
var app = epxress();
app.set('view engine', 'ejs');
app.set('views','./app/views');
// Utilizando o ejs como motor de view

module.exports = app;