/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* importar o módulo do mongoose */
var mongoose = require('mongoose');

/* importar o módulo de menssagens flash */
var flash = require('express-flash');

/* iniciar o objeto do express */
var app = express();

mongoose.connect('mongodb://localhost/CRUD', function(err){
  if (err){
    console.log('Erro ao conectar no mongodb: '+err);
  }
});

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar o middleware express-validator */
app.use(expressValidator());

consign({cwd: 'app'})
	.include('models')
	.then('controllers')
	.then('routes')
	.into(app);

/* exportar o objeto app */
module.exports = app;
