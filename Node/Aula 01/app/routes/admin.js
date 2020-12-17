module.exports = (app) =>{
app.get('/inclusao_noticia', (request, response)=>{
    response.render('admin/form_add_noticia');
} );


app.post('/noticias/salvar', (request, response)=>{
    var noticias = request.body;
    var connection = app.config.dbConnection();
    var noticiasModel = app.app.models.noticiasModel;
    noticiasModel.salvarNoticia(noticias, connection, (error, result) => {
        response.redirect('/noticias');
    }); 
    
});

}