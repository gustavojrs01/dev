const Rol = require('../models/role');

module.exports = {

    index: async (req, res, next) =>{
        const roles = await Rol.find({});   
        res.status(200).json(roles);
    },
    setRol: async (req, res, next)=>{
        const setRol = new Rol(req.body);
        const rol = await setRol.save();
        res.status(200).json(rol);
    },
    getRol: async (req, res, next)=>{
        const { rolId } = req.params;
        const rol = await Rol.findById(rolId);
        res.status(200).json(rol);
    },
    replaceRol: async (req, res, next)=>{
        const { rolId } = req.params;
        const nuevoRol = req.body;
        const viejoRol = await Usuario.findByIdAndUpdate(rolId, nuevoRol);
        res.status(200).json({success: true});        
    },
    updateRol: async (req, res, next)=>{
        const { rolId } = req.params;
        const nuevoRol = req.body;
        const viejoRol = await Rol.findByIdAndUpdate(rolId, nuevoRol);
        res.status(200).json({success: true}); 
    },
    deleteRol: async (req, res, next)=>{
        const { rolId } = req.params;
        const nuevoRol = req.body;
        await Rol.findByIdAndRemove(rolId);
        res.status(200).json({success: true}); 
    }

};