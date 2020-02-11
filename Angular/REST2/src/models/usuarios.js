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
        type:String        
    },
    cursos:[{
        type:Schema.Types.ObjectId,
        ref:'Curso'
    }],
    seccion:String,
    avance:[{
        act1:Boolean,
        act2:Boolean,
        act3:Boolean,
        act4:Boolean,
        act5:Boolean
    }]
});

module.exports = mongoose.model('Usuario', usuarioSchema);