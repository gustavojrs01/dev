const Usuario = require('../models/usuarios');
const Rol = require('../models/role');
const Curso = require('../models/cursos');
const Colegio = require('../models/colegios');

module.exports = {

    index: async (req, res, next) =>{
        const usuarios = await Usuario.find({}).populate('rol').populate('cursos').populate('colegio');   
        res.status(200).json(usuarios);
    },
    setUsuario: async (req, res, next)=>{
        const setUsuario = new Usuario(req.body);
        const usuario = await setUsuario.save();
        res.status(200).json(usuario);
    },
    getUsuario: async (req, res, next)=>{
        const { usuarioId } = req.params;
        const usuario = await Usuario.findById(usuarioId).populate('rol').populate('cursos');
        res.status(200).json(usuario);
    },
    replaceUsuario: async (req, res, next)=>{
        const { usuarioId } = req.params;
        const nuevoUsuario = req.body;
        const viejoUsuario = await Usuario.findByIdAndUpdate(usuarioId, nuevoUsuario);
        res.status(200).json({success: true});        
    },
    updateUsuario: async (req, res, next)=>{
        const { usuarioId } = req.params;
        const nuevoUsuario = req.body;
        const viejoUsuario = await Usuario.findByIdAndUpdate(usuarioId, nuevoUsuario);
        res.status(200).json({success: true}); 
    },
    deleteUsuario: async (req, res, next)=>{
        const { usuarioId } = req.params;
        const nuevoUsuario = req.body;
        await Usuario.findByIdAndRemove(usuarioId);
        res.status(200).json({success: true}); 
    },
    getRolUsuario: async (req, res, next)=>{
        const {usuarioId} = req.params;
        const usuario = await Usuario.findById(usuarioId);
        if(usuario){
            const rol = usuario.rol;
            const rolUsuario = await Rol.findOne({_id:rol});
            res.status(200).json(rolUsuario.rol);
        }else{
            res.status(400).json({"mensaje":"El usuario ingresado no existe"});
        }
    },
    newRolUsuario: async (req, res, next)=>{
        const {usuarioId} = req.params;
        const usuario = await Usuario.findById(usuarioId);
        const newRol = req.body;
        const rolId = await Rol.findOne({rol:newRol.rol});  
        usuario.rol = rolId._id;
        // console.log("dato " + id); 
        await usuario.save();
        res.status(201).json(rolId);
    },
    getCursosUsuario: async (req, res, next)=>{
        const {usuarioId} = req.params;
        const usuario = await Usuario.findById(usuarioId).populate('cursos');
        const cursos = usuario.cursos;        
        res.status(200).json(cursos);
    },
    newCursoUsuario: async (req, res, next)=>{
        const {usuarioId} = req.params;
        const usuario = await Usuario.findById(usuarioId);
        const newCurso = req.body;
        const curso = await Curso.findOne({curso:newCurso.curso});
        
        if (!curso){
            res.status(200).json("Mensaje: El curso "+newCurso.curso+" no existe");
        }else if (usuario.cursos.includes(curso._id)){            
            console.log("Este usuario ya se encuentra registrado en este curso");
            res.status(200).json("Mensaje: Este usuario ya se encuentra registrado en este curso");
        }else{
            usuario.cursos.push(curso);
            curso.usuarios.push(usuario);
            await usuario.save();
            await curso.save();

            // Here is the query to remove the user ids from "clubs" collection (i.e. members array).
            // db.clubs.update({},
            //     {$pull: { members: { $in: [ ObjectId("57580c4b203636137dbff0c9")] }}},
            //     { multi: true });
            
        }
        res.status(201).json(newCurso);
    },
    getColegioUsuario: async (req, res, next)=>{
        const {usuarioId} = req.params;
        const usuario = await Usuario.findById(usuarioId).populate('colegio');
        const colegio = usuario.colegio;        
        res.status(200).json(colegio);
    },
    newColegioUsuario: async (req, res, next)=>{
        const {usuarioId} = req.params;
        const usuario = await Usuario.findById(usuarioId);
        const newColegio = req.body;
        const colegio = await Colegio.findOne({colegio:newColegio.colegio});
        if (colegio) {
            usuario.colegio = colegio._id;
            await usuario.save();          
            res.status(201).json(colegio._id);
        }else{
            console.log("Error: El colegio no existe");
            res.status(400).json("Error: El colegio no existe");
            // res.send("Error, el colegio no existe");
            
        }
    }

};