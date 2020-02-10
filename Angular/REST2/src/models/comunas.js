const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const comunasSchema = new Schema({    
    comuna: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Comuna', comunasSchema);