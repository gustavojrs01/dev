var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    http = require('http'),
    server = http.createServer(app),
    methodOverride = require("method-override"),
    Leccion = require('./models/lesson'),
    mongoose = require('mongoose');    


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
    res.send("Welcome to api rest");
 });

 app.use(router);

/********
 * PORT *
 ********/
port = 3000;

app.listen(port, function() {
    console.log("Node server running on port " + port);
  });

/******
 * BD *
 ******/
mongoose.connect('mongodb://admin:ela36936@plataforma.zn.ela.cl:27017/apiVr?authSource=admin')
    .then(db => console.log('DB Connected'))
    .catch(err => console.log(err));

/*********
 * RUTAS *
 *********/

router.get('/lecciones', async (req, res)=>{
    const lecciones = await Leccion.find();
    console.log(req.body);
    res.send(req.body);
}); 