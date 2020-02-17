const mongoose = require('mongoose');
const userSchema = require('../models/usuarios');

userSchema.statics = {
    login: function(query, cb){
        this.find(query, cb);
    }
}

const authModel = mongoose.model('User', userSchema);
module.exports = authModel;