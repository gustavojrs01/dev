"use strict"

function pruebaUsuarios(req,res){
    res.status(200).send({message:"Probando el controlador de usuarios"});
}

var Usuarios = require('../models/usuarios.model');

function crearUsuarios(req,res){
    var usuarios = new Usuarios();
    var parametros = req.body;
    // console.log(parametros);
    usuarios.nombre = parametros.nombre;
    usuarios.usuario = parametros.usuario;
    usuarios.password = parametros.password;
    usuarios.rol = parametros.rol;
    usuarios.colegio = parametros.colegio;
    usuarios.comuna = parametros.comuna;
    // usuarios.save();
    (usuarios).save((error, usuarioGuardado)=>{
        if (error){
            
            res.status(500).send({message:"Error al guardar el usuario"});
        } else {
            res.status(200).send({usuarioGuardado});
        }
    });
    console.log(usuarios.nombre);
}

module.exports = {
    pruebaUsuarios,
    crearUsuarios
}