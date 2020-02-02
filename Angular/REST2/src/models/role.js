const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const rolesSchema = new Schema({
    rol:String
});

module.exports = mongoose.model('Role', rolesSchema);