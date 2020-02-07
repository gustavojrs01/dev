const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const comunasSchema = new Schema({
    comuna:String,
    colegios: [{
        type:Schema.Types.ObjectId,
        ref:'Colegio'
    }]
});

module.exports = mongoose.model('Comuna', comunasSchema);