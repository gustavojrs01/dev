const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const colegiosSchema = new Schema({
    colegio:String,
    cursos: [{
        type:Schema.Types.ObjectId,
        ref:'Curso'
    }],
     usuarios: [{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
     comuna: {
        type:Schema.Types.ObjectId,
        ref:'Comuna'
    }
});

module.exports = mongoose.model('Colegio', colegiosSchema);