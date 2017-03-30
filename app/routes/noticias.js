module.exports = function(app){

    var noticias = app.controllers.noticias;

    app.get('/noticias', noticias.index);
    app.get('/noticia/show/:id', noticias.show);

}
