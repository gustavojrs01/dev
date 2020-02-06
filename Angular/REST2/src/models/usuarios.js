const mongoose = require('mongoose'),
    Schema = mongoose.Schema;



const usuarioSchema = new Schema({
    nombre:{
        type:String,        
        required:true
    },
    usuario:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,        
        required:true
    },
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

module.exports = mongoose.model('Usuario', usuarioSchema);