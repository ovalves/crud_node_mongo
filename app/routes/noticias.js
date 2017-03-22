module.exports = function(app){

    var noticias = app.controllers.noticias;

    app.get('/noticias', noticias.index);
    app.get('/noticias/create', noticias.create);
    app.post('/noticias/create', noticias.insert);
    app.get('/noticia/:id', noticias.show);
    app.get('/noticia/:id/editar', noticias.edit);
    app.put('/noticia/:id', noticias.update);
    app.delete('/noticia/:id', noticias.destroy);

}
