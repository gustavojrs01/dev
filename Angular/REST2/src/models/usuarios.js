const mongoose = require('mongoose'),
    Schema = mongoose.Schema;



const userSchema = new Schema({
    nombre:String,
    usuario:String,
    password:String,
    rol: {
        type:Schema.Types.ObjectId,
        ref:'Role',
        default:'5e361d0e52ea411d05a1e597'
    },
    colegio: {
        type:Schema.Types.ObjectId,
        ref:'Colegio'
    },
    comuna:{
        type:Schema.Types.ObjectId,
        ref:'Comuna'
    },
    cursos:[{
        type:Schema.Types.ObjectId,
        ref:'Curso'
    }],
    seccion:String
});

module.exports = mongoose.model('User', userSchema);