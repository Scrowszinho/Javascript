module.exports = (app) => {
    app.get('/noticia', (request, response) => {

        // Conexão realizada de modo direta utilizando o Consign
        
        // Realizando a conexão com o BD via app
        // graças ao export da variavel que cria a requisição
        // no arquivo dbConnection.
        var connection = app.config.dbConnection();
       
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, (error, result) => {
            response.render("noticias/noticia", { noticia: result });
        }); 
        
        // Passando uma resposta em Json para o site

    });
}