const express = require('express');
const app = express();


/************
 * SETTINGS *
 ************/
var port = 4000;
app.set('port', process.env.PORT || port);


/***************
 * MIDDLEWARES *
 ***************/
app.use(express.json());
// app.use(bodyParser.json());

/**********
 * ROUTES *
 **********/
app.use(require('./routes/user'));


/*************************
 * INICIANDO EL SERVIDOR *
 *************************/
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});

