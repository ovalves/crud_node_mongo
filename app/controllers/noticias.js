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

        edit: function(req, res) {
            Noticia.findById(req.params.id, function(erro, noticia) {
                if(erro){
                    console.log(erro);
                }else{
                    res.render('noticias/editar', {noticia: noticia});
                }
            });
        },

        update: function(req,res){
			Noticia.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
					var model   = data;
                    console.log(model);
					model.titulo  = req.body.titulo;
					model.resumo = req.body.resumo;
					model.autor = req.body.autor;
					model.save(function(err){
						if(err){
							console.log(err);
						}else{
                            res.redirect('/noticias');
						}
					});
				}
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

        destroy: function(req, res) {
            Noticia.findById(function(erro, noticia) {
                noticia._id(req.params.id).remove();
                noticia.save(function() {
                    res.redirect('/noticias');
                });
            });
        }
    }

    return NoticiaController;
};
