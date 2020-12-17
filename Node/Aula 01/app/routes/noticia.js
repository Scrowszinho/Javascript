module.exports = (app) => {
    app.get('/noticia', (request, response) => {

        // Conexão realizada de modo direta utilizando o Consign

        var connection = app.config.dbConnection();
        // Realizando a conexão com o BD via app
        // graças ao export da variavel que cria a requisição
        // no arquivo dbConnection.

        connection.query('select * from noticias where id_noti = 1', (error, result) => {
            response.render("noticias/noticia", { noticias: result });
        });
        // Passando uma resposta em Json para o site

    });
}