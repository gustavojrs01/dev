const Leccion = require('../models/lecciones');

module.exports = {

    index: async (req, res, next) =>{
        const lecciones = await Leccion.find({});   
        res.status(200).json(lecciones);
    },
    setLeccion: async (req, res, next)=>{
        const setLeccion = new Leccion(req.body);
        const leccion = await setLeccion.save();
        res.status(200).json(leccion);
    },
    getLeccion: async (req, res, next)=>{
        const { leccionId } = req.params;
        const leccion = await Leccion.findById(leccionId);
        res.status(200).json(leccion); 
    },
    replaceLeccion: async (req, res, next)=>{
        const { leccionId } = req.params;
        const nuevaLeccion = req.body;
        const viejaLeccion = await Leccion.findByIdAndUpdate(leccionId, nuevaLeccion);
        res.status(200).json({success: true}); 
    },
    updateLeccion: async (req, res, next)=>{
        const { leccionId } = req.params;
        const nuevaLeccion = req.body;
        const viejaLeccion = await Leccion.findByIdAndUpdate(leccionId, nuevaLeccion);
        res.status(200).json({success: true}); 
    }


};