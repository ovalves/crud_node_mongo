module.exports = function(app) {

  	var Usuario = app.models.usuarios;

	var AdminController = {
	    index: function(req, res) {
      		res.render('admin/index');
	    },

	    login: function(req, res) {
			var query = req.body;
			console.log(query);

			Usuario.findOne(query)
	 			.select('email password')
				.exec(function(erro, usuario){
				if (usuario) {
					req.session.usuario = usuario;
					req.session.isLogged = true;
					res.redirect('noticias');
				} else {
				  	Usuario.create(req.body, function(erro, usuario) {
					    if(erro){
				      		res.redirect('/');
					    }else{
				      		req.session.usuario = usuario;
				      		res.redirect('/logout');
					    }
				  	});
				}
			});
	    },

	    logout: function(req, res) {
			req.session.destroy();
	  		res.redirect('/');
	    }
  	};

  return AdminController;

};
