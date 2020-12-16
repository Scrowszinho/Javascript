const { response } = require('../../config/server');
var dbconnection = require('../../config/dbConnection');

module.exports = (app) => {
    var connection = dbconnection();
    app.get('/noticias', (request, response) => {
        // Importando os dados do Mysql
        // e guardando-os na variavel connection

        connection.query('select * from noticias', (error, result) => {
            response.render("noticias/noticias", { noticias: result });
        });
        // Passando uma resposta em Json para o site

    });
}