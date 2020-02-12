const mongoose = require('mongoose'),
    Schema = mongoose.Schema;



const usuarioSchema = new Schema({
    nombre:{
        type:String,        
        required:true
    },
    usuario:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,        
        required:true
    },
    rol: {
        type:Schema.Types.ObjectId,
        ref:'Role',
        default:'5e361d0e52ea411d05a1e597'
    },
    colegio: {
        type:Schema.Types.ObjectId,
        ref:'Colegio'
    },
    comuna:{
        type:String        
    },
    cursos:[{
        type:Schema.Types.ObjectId,
        ref:'Curso'
    }],
    seccion:String,
    modulos_aprobados:[{
        leccion:{
            type:Schema.Types.ObjectId,
            ref:'Lesson'
        },
        act1:{type:Boolean, default:false},
        act2:{type:Boolean, default:false},
        act3:{type:Boolean, default:false},
        act4:{type:Boolean, default:false},
        act5:{type:Boolean, default:false},
        test:{
            r1:{type:Boolean, default:false},
            r2:{type:Boolean, default:false},
            r3:{type:Boolean, default:false},
            r4:{type:Boolean, default:false},
            r5:{type:Boolean, default:false},
            r6:{type:Boolean, default:false},
            r7:{type:Boolean, default:false},
            r8:{type:Boolean, default:false},
            r9:{type:Boolean, default:false},
            r10:{type:Boolean, default:false},
            r11:{type:Boolean, default:false},
            r12:{type:Boolean, default:false},
            r13:{type:Boolean, default:false},
            r14:{type:Boolean, default:false}
        }
    }],
    cursarU1:{type:Boolean, default:true},
    cursarU2:{type:Boolean, default:false},
    cursarU3:{type:Boolean, default:false},
    cursarU4:{type:Boolean, default:false},
});

module.exports = mongoose.model('Usuario', usuarioSchema);