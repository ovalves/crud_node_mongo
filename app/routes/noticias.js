module.exports = function(app){

    var noticias = app.controllers.noticias;

    app.get('/noticias', noticias.index);
    app.get('/noticias/create', noticias.create);
    app.post('/noticias/create', noticias.insert);

    app.get('/noticias/editar/:id', noticias.edit);
    app.post('/noticia/editar/:id', noticias.update);
    app.get('/noticia/show/:id', noticias.show);
    app.delete('/noticia/delete/:id', noticias.destroy);


}
