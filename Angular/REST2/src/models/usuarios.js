const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const userSchema = new Schema({
    nombre:String,
    usuario:String,
    password:String,
    rol: {
        type:Schema.Types.ObjectId,
        ref:'Role'
    },
    colegio: {
        type:Schema.Types.ObjectId,
        ref:'Colegio'
    },
    comuna:{
        type:Schema.Types.ObjectId,
        ref:'Comuna'
    },
    cursos:{
        type:Schema.Types.ObjectId,
        ref:'Curso'
    }
});

module.exports = mongoose.model('User', userSchema);