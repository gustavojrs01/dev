// const express = require('express');
// const router = express.Router();

const router = require('express-promise-router')();

const {
    index,
    setLeccion
} = require('../controllers/lecciones');

router.get('/', index);
router.post('/', setLeccion);

module.exports = router;