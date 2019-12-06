// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (nombre) {
        if (poder) {
            mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
            
        }
        else {
            mensaje = nombre + " tiene un " + poder;
        }
        console.log(mensaje);
    }
    else {
        console.log("Error, debe ingresar un nombre valido");
    }
}
getAvenger(1, "Volar");
