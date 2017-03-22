module.exports = function(app){

    var noticias = app.controllers.noticias;

    app.get('/noticias', noticias.index);
    app.get('/noticias/create', noticias.create);
    app.post('/noticias/create', noticias.insert);

    app.get('/noticias/editar/:id', noticias.edit);
    app.post('/noticias/editar/:id', noticias.update);
    app.get('/noticias/show/:id', noticias.show);
    app.delete('/noticia/delete/:id', noticias.destroy);


}
