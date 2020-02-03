// const express = require('express');
// const router = express.Router();

const router = require('express-promise-router')();

const {
    index,
    setColegio,
    getColegio,
    replaceColegio,
    deleteColegio
} = require('../controllers/colegios');

router.get('/', index);
router.post('/', setColegio);
router.get('/:cursoId', getColegio);
router.put('/:cursoId', replaceColegio);
router.delete('/:cursoId', deleteColegio);



module.exports = router;