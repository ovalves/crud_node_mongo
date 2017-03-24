module.exports = function(app) {

    var admin = app.controllers.admin;
    var autenticar = require('./../middlewares/autenticador');

    app.get('/admin', admin.index);
    app.post('/admin', admin.login);
    app.get('/sair', admin.logout);

};
