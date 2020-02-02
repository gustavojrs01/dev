const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const colegiosSchema = new Schema({
    colegio:String,
    cursos: [{
        type:Schema.Types.ObjectId,
        ref:'cursos'
    }]
});

module.exports = mongoose.model('Colegio', colegiosSchema);