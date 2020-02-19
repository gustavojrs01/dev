const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/api/usuario/:usuario', async (req, res)=>{
    const {usuario} = req.params;
    let query = `SELECT a.id_usuario, a.id_perfil as perfil, a.cod_usuario as usuario, a.nombre_usuario as nombre, c.nombre_curso as curso  FROM tbl_usuario as a left join tbl_usuario_curso as b on a.id_usuario = b.id_usuario left join tbl_curso as c on b.id_curso = c.id_curso WHERE cod_usuario="${usuario}"`;
    await mysqlConnection.query(query, (err, rows, fields)=>{
        if(!err){
            if(rows==''){
                console.log("El usuario no existe");
                res.status(401).json({message:"El usuario no existe"});
            }else{
                res.json(rows);
                console.log(rows);
                // await mysqlConnection.query(`SELECT * FROM `)
            }
        }else {
            console.log(err);
        }
    });
});


module.exports = router;