const Usuario = require('../models/usuarios');
const Curso = require('../models/cursos');

module.exports = {

    index: async (req, res, next) =>{
        const cursos = await Curso.find({}).populate('usuarios').populate('usuarios.cursos');   
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
        const curso = req.body;
        await Curso.findByIdAndDelete(cursoId, async (err, doc)=>{
            if (err){
                res.status(400).json({message:"Error, ID invalida"});
            } else if (doc){
                await Usuario.updateMany({},
                    {$pullAll:{cursos:[cursoId]}});
                    res.status(200).json({message: "Curso eliminado correctamente"}); 
            }else{
                res.status(200).json({message: "Error, el curso no existe"});
            }
        });
    }

};