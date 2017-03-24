module.exports = function(app) {

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var usuario = new Schema({
        email: String,
        password: String,
        data: {type: Date, default: Date.now}
    });

    return mongoose.model('Usuarios', usuario);
};
