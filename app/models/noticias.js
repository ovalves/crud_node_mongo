module.exports = function(app) {

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var noticia = new Schema({
        titulo: String,
        resumo: String,
        autor: String
    });

    return mongoose.model('Noticias', noticia);
};
