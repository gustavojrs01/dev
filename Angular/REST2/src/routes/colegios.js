// const express = require('express');
// const router = express.Router();

const router = require('express-promise-router')();

const {
    index,
    setColegio,
    getColegio,
    updateColegio,
    deleteColegio
} = require('../controllers/colegios');

router.get('/', index);
router.post('/', setColegio);
router.get('/:colegioId', getColegio);
router.put('/:colegioId', updateColegio);
router.delete('/:colegioId', deleteColegio);



module.exports = router;