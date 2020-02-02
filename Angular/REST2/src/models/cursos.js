const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const cursoSchema = new Schema({
    curso:String    
});

module.exports = mongoose.model('Curso', cursoSchema);