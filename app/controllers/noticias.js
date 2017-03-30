module.exports = function(app) {

    // Instancia a model
    var Noticia = app.models.noticias;

    // Obj com os métodos da controller que é retornado e usado nas rotas
    var NoticiaController = {

        index: function(req, res) {
            Noticia.find(function(erro, noticias) {
				if (erro) {
					console.log(erro);
				}
                res.render('noticias/index', { noticias:noticias });
            });
        },

        show: function(req, res) {
            Noticia.findById(req.params.id, function(erro, noticia) {
                if(erro){
                    console.log(erro);
                }else{
                    res.render('noticias/show', {noticia: noticia});
                }
            });
        },
    }

    return NoticiaController;
};
