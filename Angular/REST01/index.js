"use strict"

var mongoose = require('mongoose');

var app = require('./app');
var port = process.env.PORT || 1234;

mongoose.connect("mongodb://admin:ela36936@plataforma.zn.ela.cl:27017/prueba?authSource=admin", (error, respuesta) => {
    if (error){
        throw error;
    } else {
        console.log("Conexion a base de datos exitosa");
        app.listen(port, function(){
            console.log("Servidor del APIRest en el puerto " + port);
        })
    }
});