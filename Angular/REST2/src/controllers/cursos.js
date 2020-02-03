const Usuario = require('../models/usuarios');
const Curso = require('../models/cursos');

module.exports = {

    index: async (req, res, next) =>{
        const cursos = await Curso.find({});   
        res.status(200).json(cursos);
    },
    setCurso: async (req, res, next)=>{
        const setCurso = new Curso(req.body);
        const curso = await setCurso.save();
        res.status(200).json(curso);
    },
    getCurso: async (req, res, next)=>{
        const { cursoId } = req.params;
        const curso = await Curso.findById(cursoId);
        res.status(200).json(curso);
    },
    replaceCurso: async (req, res, next)=>{
        const { cursoId } = req.params;
        const nuevoCurso = req.body;
        const viejoCurso = await Curso.findByIdAndUpdate(cursoId, nuevoCurso);
        res.status(200).json({success: true});        
    },
    updateCurso: async (req, res, next)=>{
        const { cursoId } = req.params;
        const nuevoCurso = req.body;
        const viejoCurso = await Curso.findByIdAndUpdate(cursoId, nuevoCurso);
        res.status(200).json({success: true}); 
    },
    deleteCurso: async (req, res, next)=>{
        const { cursoId } = req.params;
        const nuevoCurso = req.body;
        await Curso.findByIdAndRemove(cursoId);
        res.status(200).json({success: true}); 
    }

};