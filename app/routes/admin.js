module.exports = function(app) {

    var admin = app.controllers.admin;
    var autenticar = require('./../middlewares/autenticador');

    app.get('/admin', admin.index);
    app.post('/admin', admin.login);
    app.get('/admin/index', autenticar, admin.dashboard);
    app.get('/admin/noticia/create', autenticar,  admin.create);
    app.post('/admin/create-noticia', autenticar, admin.insert);
    app.get('/sair', admin.logout);

};
