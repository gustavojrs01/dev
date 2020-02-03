const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;


const cursoSchema = new Schema({
    curso:String,
    usuarios: [{
        type:Schema.Types.ObjectId,
        ref:'User'
    }]    
});

module.exports = mongoose.model('Curso', cursoSchema);