module.exports = function(app, req) {
  	var Usuario = app.models.usuarios;
	var Noticia = app.models.noticias;

	var AdminController = {
	    index: function(req, res) {
      		res.render('admin/login');
	    },

	    login: function(req, res) {
			var query = req.body;
			console.log(query);

			Usuario.find(query)
	 			.select('email password')
				.exec(function(erro, usuario){
					if (usuario[0] != undefined) {
	                    console.log("usuario" + usuario);
						req.session.usuario = usuario[0].email;
						req.session.autorizado = true;

						console.log('obj req usuario ' + req.session.usuario);
                        console.log('usuario ' + usuario[0].usuario);
						console.log('email ' + usuario[0].email);
						console.log('password ' + usuario[0].password);


						res.redirect('admin/index');
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

		dashboard: function(req, res) {
			var usuario = req.session.usuario;
	   		res.render('admin/index', { usuario:usuario });
	   },

       	list: function(req, res) {
			var usuario = req.session.usuario;
			Noticia.find(function(erro, noticias){
				if (erro) {
					console.log(erro);
				}
			   	res.render('admin/list-noticia', { usuario:usuario, noticias:noticias });
		   	});

      	},

	   create: function(req, res) {
		   var usuario = req.session.usuario;
		   res.render('admin/create-noticia', { usuario:usuario });
	   },

	   insert: function(req, res){
		   var noticiaModel = new Noticia(req.body);
		   noticiaModel.save(function(erro){
			   if (erro) {
				   console.log(erro);
			   }
			   res.redirect('/admin/index');
		   });
	   },

	   	edit: function(req, res) {
			var usuario = req.session.usuario;
		   	Noticia.findById(req.params.id, function(erro, noticia) {
			   	if(erro){
				   console.log(erro);
			   	}else{
				   res.render('admin/edit-noticia', { usuario:usuario, noticia: noticia });
			   	}
		   	});
	   	},

	   	destroy: function(req, res) {
		   Noticia.remove({_id: req.params.id}, function(err, data){
			   if (err){
				   console.log(err);
			   }else{
				   res.redirect('/admin/noticias/list');
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
