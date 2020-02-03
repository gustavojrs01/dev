const Usuario = require('../models/usuarios');
const Curso = require('../models/cursos');
const Comuna = require('../models/comunas');
const Colegio = require('../models/colegios');

module.exports = {

    index: async (req, res, next) =>{
        const colegios = await Colegio.find({});   
        res.status(200).json(colegios);
    },
    setColegio: async (req, res, next)=>{
        const setColegio = new Colegio(req.body);
        const colegio = await setColegio.save();
        res.status(200).json(colegio);
    },
    getColegio: async (req, res, next)=>{
        const { colegioId } = req.params;
        const colegio = await Colegio.findById(colegioId);
        res.status(200).json(colegio);
    },
    replaceColegio: async (req, res, next)=>{
        const { colegioId } = req.params;
        const nuevoColegio = req.body;
        const viejoColegio = await Colegio.findByIdAndUpdate(colegioId, nuevoColegio);
        res.status(200).json({success: true});        
    },
    updateColegio: async (req, res, next)=>{
        const { colegioId } = req.params;
        const nuevoColegio = req.body;
        const viejoColegio = await Colegio.findByIdAndUpdate(colegioId, nuevoColegio);
        res.status(200).json({success: true}); 
    },
    deleteColegio: async (req, res, next)=>{
        const { colegioId } = req.params;
        const nuevoColegio = req.body;
        await Colegio.findByIdAndRemove(colegioId);
        res.status(200).json({success: true}); 
    }

};