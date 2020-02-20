const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/api/usuario/:usuario', async (req, res)=>{
    const {usuario} = req.params;
    // let query = `SELECT a.id_usuario, a.id_perfil as perfil, a.cod_usuario as usuario, a.nombre_usuario as nombre, c.nombre_curso as curso  FROM tbl_usuario as a left join tbl_usuario_curso as b on a.id_usuario = b.id_usuario left join tbl_curso as c on b.id_curso = c.id_curso WHERE cod_usuario="${usuario}"`;
    let query = `select u.id_usuario, u.cod_usuario as usuario, u.nombre_usuario as nombre, IFNULL(cur.cod_curso,'') as curso, u.id_perfil as cod_perfil, u.vigencia_usuario as activo,nombre_comuna as comuna,IFNULL(e.cod_establecimiento,'')  as cod_colegio,IFNULL(c.cod_clase,'') cod_clase,nombre_perfil as perfil, nombre_clase as clase, IFNULL(seccion_clase,'') as seccion, nombre_establecimiento as colegio from tbl_perfil p inner join tbl_usuario u
    on (p.id_perfil=u.id_perfil)
    left join tbl_usuario_establecimiento ue on (ue.id_usuario=u.id_usuario)
    LEFT JOIN tbl_usuario_clase uc on (uc.id_usuario=u.id_usuario)
    LEFT JOIN tbl_establecimiento e on (ue.cod_establecimiento=e.cod_establecimiento)
    LEFT JOIN tbl_clase c on (c.cod_clase=uc.cod_clase)
    LEFT JOIN tbl_comuna co on (co.id_comuna=e.id_comuna)
    LEFT JOIN tbl_usuario_curso usuariocurso on (u.id_usuario=usuariocurso.id_usuario)
    LEFT JOIN tbl_curso cur on (usuariocurso.id_curso=cur.id_curso)
    WHERE u.cod_usuario ="${usuario}"`;
    await mysqlConnection.query(query, (err, rows, fields)=>{
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