"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;
var usuariosSchema = schema({
    nombre:String,
    usuario:String,
    password:String,
    rol:String,
    colegio:String,
    comuna:String
});

module.exports = mongoose.model("usuarios", usuariosSchema);