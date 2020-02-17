const Usuario = require('../models/usuarios');
const jose = require('jose');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'elearning36936';

// exports.loginUser = async (req, res, next)=>{
//     const userData = {
//         usuario: req.body.usuario,
//         password: req.body.password
//     }
//     await Usuario.findOne({usuario:userData.usuario}, (err, user)=>{
//         if (err) {
//             return res.status(500).send('Server error!');
//         }
//         if (!user){
//             //usuario no existe
//             res.status(409).send({message: "Algo ha ido mal"});
//         } else {
//             const resultPassword = userData.password;
//             if (resultPassword){
//                 const expiresIn = 24*60*60;
//                 const accessToken = jose.JWT.sign({id: user.id}, SECRET_KEY, {expiresIn:expiresIn});
//                 res.send({userData});
//             } else {
//                 //password wrong
//                 res.status(409).send({message: "Algo ha ido mal"});
//             }
//         }
//     });
// };

module.exports = {
    index: async (req, res, next) =>{
        const userData = {
            usuario: req.body.usuario,
            password: bcrypt.hashSync(req.body.password)
        }
        await Usuario.findOne({usuario:userData.usuario}, (err, user)=>{
            if (err) {
                return res.status(500).send('Server error!');
            }
            if (!user){
                //usuario no existe
                res.status(409).send({message: "Algo ha ido mal"});
            } else {
                const resultPassword = userData.password;
                if (resultPassword){
                    // const expiresIn = 24*60*60;
                    // const accessToken = jose.JWT.sign({id: user.id}, SECRET_KEY, {expiresIn:expiresIn});
                    const accessToken = jose.JWT.sign({id: user.id}, SECRET_KEY);
                    res.send({userData});

                } else {
                    //password wrong
                    res.status(409).send({message: "Algo ha ido mal"});
                }
            }
        });
    }
};