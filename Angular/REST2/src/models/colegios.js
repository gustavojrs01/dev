const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const colegiosSchema = new Schema({
    colegio:{
        type:String,        
        required:true
    },
    codigo:{
        type:String,
        unique:true,
        required:true
    },
    cursos: [{
        type:Schema.Types.ObjectId,
        ref:'Curso'
    }],
     usuarios: [{
        type:Schema.Types.ObjectId,
        ref:'Usuario'
    }],
     comuna: {
        type:Schema.Types.ObjectId,
        ref:'Comuna'
    }
});

module.exports = mongoose.model('Colegio', colegiosSchema);