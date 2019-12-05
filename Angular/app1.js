var nombre = {
    nombre:"Gustavo",
    apellido: "Rodriguez",
    edad: 32
};
console.log("Su nombre es: "+nombre.nombre+" y su apellido es: "+nombre.apellido+". Tiene "+nombre.edad+" años");

console.log("Primero");
setTimeout(() => {
    console.log("Segundo");
}, 2000);
console.log("Tercero");

let resultado = (x) => (x*2);

console.log (resultado(8));

