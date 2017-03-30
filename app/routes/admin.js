module.exports = function(app) {

    var admin = app.controllers.admin;
    var autenticar = require('./../middlewares/autenticador');

    app.get('/admin', admin.index);
    app.post('/admin', admin.login);
    app.get('/admin/index', autenticar, admin.dashboard);
    app.get('/admin/noticias/list', autenticar, admin.list);
    app.get('/admin/noticias/create', autenticar,  admin.create);
    app.post('/admin/noticias/create-noticia', autenticar, admin.insert);
    app.get('/admin/noticias/editar/:id', autenticar, admin.edit)
    app.post('/admin/noticias/editar/:id', autenticar, admin.update);
    app.delete('/admin/noticias/delete/:id', autenticar, admin.destroy);
    app.get('/sair', admin.logout);

};
