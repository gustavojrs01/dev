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
    newRolUsuario,
    getCursosUsuario,
    newCursoUsuario,
    getColegioUsuario,
    newColegioUsuario,
    newCursoUsuario2,
    getUsuarioByUsuario
    
} = require('../controllers/usuarios');

router.get('/', index);
router.post('/', setUsuario);
router.get('/:usuarioId', getUsuario);
router.put('/:usuarioId', replaceUsuario);
router.delete('/:usuarioId', deleteUsuario);

router.get('/:usuarioId/rol', getRolUsuario);
router.put('/:usuarioId/rol', newRolUsuario);

router.get('/:usuarioId/curso', getCursosUsuario);
router.put('/:usuarioId/curso', newCursoUsuario);
router.get('/:usuarioId/curso2', newCursoUsuario2);

router.get('/:usuarioId/colegio', getColegioUsuario);
router.put('/:usuarioId/colegio', newColegioUsuario);

router.get('/username/:username', getUsuarioByUsuario);

module.exports = router;