const Usuario = require('../models/usuarios');
const Rol = require('../models/role');

module.exports = {

    index: async (req, res, next) =>{
        const usuarios = await Usuario.find({}).populate('rol');   
        res.status(200).json(usuarios);
    },
    setUsuario: async (req, res, next)=>{
        const setUsuario = new Usuario(req.body);
        const usuario = await setUsuario.save();
        res.status(200).json(usuario);
    },
    getUsuario: async (req, res, next)=>{
        const { usuarioId } = req.params;
        const usuario = await Usuario.findById(usuarioId);
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
        const rol = usuario.rol;
        res.status(200).json(rol);
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
    }

};