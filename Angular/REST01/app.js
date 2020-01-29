"use strict"

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var rutaUsuarios = require('./rutas/usuarios.ruta');

// app.get("/pruebas", function(req, res){
//     res.status(200).send({message:"Bienvenido"});
// });

app.use("/api", rutaUsuarios);

module.exports = app;