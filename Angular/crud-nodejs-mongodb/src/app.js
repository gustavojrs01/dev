//* Para que funcionen las rutas tanto en windows como en linux
const path = require('path');
//* Se crea el servidor
const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

//? CONEXION A BD
mongoose.connect('mongodb://admin:ela36936@plataforma.zn.ela.cl:27017/crud-mongo?authSource=admin')
    .then(db => console.log('DB Connected'))
    .catch(err => console.log(err));


/********************
 * IMPORTING ROUTES *
 ********************/
const indexRoutes = require('./routes/index');
/************
 * SETTINGS *
 ************/
var port = 4000;
app.set('port', process.env.PORT || port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/***************
 * MIDDLEWARES *
 ***************/
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


/**********
 * ROUTES *
 **********/
app.use('/', indexRoutes);

/*************************
 * INICIANDO EL SERVIDOR *
 *************************/
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});