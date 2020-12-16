const { response } = require('../../config/server');

module.exports = (app) => {

    app.get('/noticias', (request, response) => {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal_noticias'
        });
        // Importando os dados do Mysql
        // e guardando-os na variavel connection

        connection.query('select * from noticias', (error, result) => {
            response.render("noticias/noticias",{noticias: result});
        });
        // Passando uma resposta em Json para o site

        
    });
}