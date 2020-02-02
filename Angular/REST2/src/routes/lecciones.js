// const express = require('express');
// const router = express.Router();

const router = require('express-promise-router')();

const {
    index,
    setLeccion,
    getLeccion,
    getLeccionCodigo,
    replaceLeccion,
    deleteLeccion
} = require('../controllers/lecciones');

router.get('/', index);
router.post('/', setLeccion);
router.get('/:leccionId', getLeccion);
router.get('/codigo/:codigoLeccion', getLeccionCodigo);
router.put('/:leccionId', replaceLeccion);
router.delete('/:leccionId', deleteLeccion);



module.exports = router;