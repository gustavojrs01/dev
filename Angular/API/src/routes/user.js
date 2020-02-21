const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/api/cursos/:usuario', async (req, res)=>{
    const {usuario} = req.params;
    let query = `SELECT distinct cod_curso as curso from tbl_usuario_curso uc inner join tbl_usuario u on (uc.id_usuario = u.id_usuario) inner join tbl_curso c on (c.id_curso = uc.id_curso) where u.cod_usuario ="${usuario}"`;
    await mysqlConnection.query(query, (err, rows, fields)=>{
        if (!err){
            if (rows == ""){
                console.log("El usuario no pertenece a ningun curso");
                res.status(401).json({message:"El usuario no pertenece a ningun curso"});
            }else{
                res.json(rows);
            }
        }else{
            console.log(err);
        }
    });
});
router.get('/api/usuario/:usuario', async (req, res)=>{
    const {usuario} = req.params;
    // let query = `SELECT a.id_usuario, a.id_perfil as perfil, a.cod_usuario as usuario, a.nombre_usuario as nombre, c.nombre_curso as curso  FROM tbl_usuario as a left join tbl_usuario_curso as b on a.id_usuario = b.id_usuario left join tbl_curso as c on b.id_curso = c.id_curso WHERE cod_usuario="${usuario}"`;
    let query = `SELECT u.id_usuario, u.cod_usuario as usuario, u.nombre_usuario as nombre, u.id_perfil as cod_perfil, u.vigencia_usuario as activo, nombre_perfil as perfil from tbl_usuario u
    LEFT JOIN tbl_perfil p on (p.id_perfil=u.id_perfil)
    WHERE u.cod_usuario ="${usuario}"`;
    await mysqlConnection.query(query, async(err, rows, fields)=>{
        if(!err){
            if(rows==''){
                console.log("El usuario no existe");
                res.status(401).json({message:"El usuario no existe"});
            }else{
                res.json(rows);
                
                // console.log(rows[0].cod_clase);
            }
        }else {
            console.log(err);
        }
    });
});


module.exports = router;