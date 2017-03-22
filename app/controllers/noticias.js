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
                console.log(noticias);
                res.render('noticias/index', { noticias:noticias });
            });

        },

        create: function(req, res) {
            res.render('noticias/create');
        },

		insert: function(req, res){
			var model = new Noticia(req.body);
			model.save(function(erro){
				if (erro) {
					console.log(erro);
				}
				res.redirect('/noticias');
			});
		},

        show: function(req, res) {
            Noticia.findById(function(erro, usuario) {
                var noticiaID = req.params.id;
                var noticia = noticia.id(noticiaID);
                var resultado = {
                    noticia: noticia
                };
                res.render('contatos/show', resultado);
            });
        },

        edit: function(req, res) {
            Usuario.findById(function(erro, data) {
                var noticiaID = req.params.id;
                var noticia = noticia.id(noticiaID);
                var resultado = {
                    noticia: noticia
                };
                res.render('noticias/edit', resultado);
            });
        },

        update: function(req, res) {
            Usuario.findById(function(erro, usuario) {
                var noticiaID = req.params.id;
                var noticia = usuario.noticia.id(noticiaID);
                noticia.titulo = req.body.noticia.titulo;
                noticia.resumo = req.body.noticia.resumo;
				noticia.autor = req.body.noticia.autor;
                noticia.save(function() {
                    res.redirect('/noticias');
                });
            });
        },

        destroy: function(req, res) {
            Noticia.findById(function(erro, usuario) {
                var noticiaID = req.params.id;
                noticia.id(contatoID).remove();
                noticia.save(function() {
                    res.redirect('/noticias');
                });
            });
        }
    }

    return NoticiaController;
};
