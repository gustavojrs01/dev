// const express = require('express');
// const router = express.Router();

const router = require('express-promise-router')();

const {
    index
    
} = require('../controllers/oauth.controller');

router.post('/', index);


module.exports = router;