import { Empleado } from "./class/empleado";
import { Trabajador } from "./interface/trabajador.interface";

let emp1:Empleado = new Empleado("2", "Sistemas", "Santiago", true);

console.log(emp1.nombre);