module.exports = function(app){

	// Instancia a model
    var Noticia = app.models.noticias;

	var HomeController = {
		index: function(req,res){

			// Retorna as últimas 3 noticias, em ordem decrescente
			Noticia.find().sort({data: 'desc'}).limit(3).exec(function(erro, noticias) {
				if (erro) {
					console.log(erro);
				}
                res.render('home/index', { noticias:noticias });
            });
		},
	}
	return HomeController;
}
