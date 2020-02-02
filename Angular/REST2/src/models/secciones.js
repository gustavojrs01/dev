const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const seccionSchema = new Schema({
    seccion:String    
});

module.exports = mongoose.model('Seccion', seccionSchema);