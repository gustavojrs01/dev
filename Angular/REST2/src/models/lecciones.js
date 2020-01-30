const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const lessonSchema = new Schema({
    codigo:String,
    curso:String,
    unidad:String,
    leccion:String,
    act1:[String],
    act2:[String],
    act3:[String],
    act4:String,
    act5:[String]    
});

module.exports = mongoose.model('Lesson', lessonSchema);