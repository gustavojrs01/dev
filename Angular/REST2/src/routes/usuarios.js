// const express = require('express');
// const router = express.Router();

const router = require('express-promise-router')();

const {
    index,
    setUsuario,
    getUsuario,
    replaceUsuario,
    deleteUsuario,
    getRolUsuario,
    newRolUsuario
} = require('../controllers/usuarios');

router.get('/', index);
router.post('/', setUsuario);
router.get('/:usuarioId', getUsuario);
router.put('/:usuarioId', replaceUsuario);
router.delete('/:usuarioId', deleteUsuario);

router.get('/:usuarioId/rol', getRolUsuario);
router.put('/:usuarioId/rol', newRolUsuario);

module.exports = router;