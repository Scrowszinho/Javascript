module.exports = (app) => {
    app.get('/noticias', (request, response) => {

        // Conexão realizada de modo direta utilizando o Consign

        var connection = app.config.dbConnection();
        // Realizando a conexão com o BD via app
        // graças ao export da variavel que cria a requisição
        // no arquivo dbConnection.
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, (error, result) => {
            response.render("noticias/noticias", { noticias: result });
        }); 
    });
}