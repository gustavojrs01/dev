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
        const existe = await Colegio.findOne({codigo:setColegio.codigo});
        if (existe){
            res.status(400).json("El colegio ingresado ya existe");
        }else {
            const colegio = await setColegio.save();
            res.status(200).json(colegio);
        }
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
        const colegio = await Colegio.findByIdAndRemove(colegioId, async (err, doc)=>{
            if (err){
                res.status(400).json("Ha ocurrido un error, ID invalido");
            }else if (doc) {
                res.status(200).json({message: `Colegio ${doc.colegio} eliminado`});
                await Usuario.updateMany({colegio:colegioId},
                    {$pull: { colegio: colegioId}});
                
            }else {
                res.status(400).json("El colegio ingresado no existe");
            }
        });
    }

};