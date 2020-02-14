'use strict'
//* Para que funcionen las rutas tanto en windows como en linux
// const path = require('path');
//* Se crea el servidor
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const leccionesRoutes = require('./routes/lecciones');
const usuariosRoutes = require('./routes/usuarios');
const cursosRoutes = require('./routes/cursos');
const colegiosRoutes = require('./routes/colegios');

//? CONEXION A BD
mongoose.connect('mongodb://admin:ela36936@plataforma.zn.ela.cl:27017/apiVr?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('DB Connected'))
    .catch(err => console.log(err));
mongoose.set('useCreateIndex', true);


/********************
 * IMPORTING ROUTES *
 ********************/
// const indexRoutes = require('./routes/index');
/************
 * SETTINGS *
 ************/
var port = 4000;
app.set('port', process.env.PORT || port);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

/***************
 * MIDDLEWARES *
 ***************/

app.use(bodyParser.json());

// Muestra el log en la consola del server
app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));


/**********
 * ROUTES *
 **********/
app.use('/api/lecciones', leccionesRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/cursos', cursosRoutes);
app.use('/api/colegios', colegiosRoutes);

/*************************
 * INICIANDO EL SERVIDOR *
 *************************/
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});