"use strict"

var express = require('express');

var controladorUsuarios = require('../controllers/usuarios.controller');

var  api = express.Router();

api.get("/probandoControladorUsuarios", controladorUsuarios.pruebaUsuarios);

api.post("/crearUsuarios", controladorUsuarios.crearUsuarios);

module.exports = api;