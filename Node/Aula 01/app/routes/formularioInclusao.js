module.exports = (app) =>{
app.get('/inclusao_noticia', (request, response)=>{
    response.render('admin/form_add_noticia');
} );
}