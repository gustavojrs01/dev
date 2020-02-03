// const express = require('express');
// const router = express.Router();

const router = require('express-promise-router')();

const {
    index,
    setCurso,
    getCurso,
    replaceCurso,
    deleteCurso
} = require('../controllers/cursos');

router.get('/', index);
router.post('/', setCurso);
router.get('/:cursoId', getCurso);
router.put('/:cursoId', replaceCurso);
router.delete('/:cursoId', deleteCurso);



module.exports = router;