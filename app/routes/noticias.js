module.exports = function(app){

    var noticias = app.controllers.noticias;
    var autenticar = require('./../middlewares/autenticador');

    app.get('/noticias', autenticar, noticias.index);
    app.get('/noticias/create', autenticar,  noticias.create);
    app.post('/noticias/create', autenticar, noticias.insert);

    app.get('/noticias/editar/:id', autenticar, noticias.edit);
    app.post('/noticia/editar/:id', autenticar, noticias.update);
    app.get('/noticia/show/:id', autenticar, noticias.show);
    app.delete('/noticia/delete/:id', autenticar, noticias.destroy);


}
