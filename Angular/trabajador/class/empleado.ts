import { Trabajador } from "../interface/trabajador.interface";
export class Empleado {
    
    nombre:number;
    cargo:string;
    comuna:string;
    activo:boolean;    
    
    
    constructor(nombre, cargo, comuna, activo) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.comuna = comuna;
        this.activo = activo;
    }
}
