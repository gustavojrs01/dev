const Users = require('../controllers/oauth.controller');
module.exports = (router)=> {
    router.post('/login', Users.loginUser);
}