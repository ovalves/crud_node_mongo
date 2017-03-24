module.exports = function(app) {

  var admin = app.controllers.admin;

  app.get('/admin', admin.index);
  app.post('/admin/entrar', admin.login);
  app.get('/sair', admin.logout);

};
